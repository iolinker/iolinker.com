import { readVersionResponse } from './version.mjs';

document.documentElement.classList.add('js');
let language = new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'zh';
let downloads = null;
let downloadFailed = false;
const navigation = document.getElementById('navigation');
const menuToggle = document.getElementById('menuToggle');
const tabs = [...document.querySelectorAll('[role="tab"]')];

function renderDownloads() {
  const list = document.getElementById('downloadLinks');
  const versionLabel = document.getElementById('versionLabel');
  const status = document.getElementById('downloadStatus');
  list.replaceChildren();
  if (downloads) {
    versionLabel.textContent = downloads.version;
    status.textContent = language === 'zh' ? '版本文件记录的安装包，请确认平台与架构。' : 'Packages listed in the version file. Check your platform and architecture.';
    for (const item of downloads.download) {
      const link = document.createElement('a');
      link.textContent = item.label;
      link.href = item.url;
      link.rel = 'noopener noreferrer';
      list.append(link);
    }
  } else if (downloadFailed) {
    versionLabel.textContent = language === 'zh' ? '暂时不可用' : 'Unavailable';
    status.textContent = language === 'zh' ? '暂时无法读取安装包信息，请查看安装与部署指南。' : 'Download information is unavailable. Please read the installation guide.';
  }
}

function setLanguage(next) {
  language = next === 'en' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`).replace(/\\n/g, '\n');
  });
  document.querySelectorAll('[data-label-zh][data-label-en]').forEach(element => element.setAttribute('aria-label', element.getAttribute(`data-label-${language}`)));
  document.querySelectorAll('[data-alt-zh][data-alt-en]').forEach(element => element.alt = element.getAttribute(`data-alt-${language}`));
  document.querySelectorAll('[data-doc]').forEach(element => {
    const relative = element.getAttribute('data-doc');
    if (!/^(?:guide\/[a-z-]+\.html)?$/.test(relative)) return;
    element.href = `https://doc.iolinker.com/${language === 'zh' ? 'zh/' : ''}${relative}`;
  });
  document.title = language === 'zh' ? 'IOLinker — Agent 与工作流的自动化工作台' : 'IOLinker — The agent and workflow automation workspace';
  document.querySelector('meta[name="description"]').content = language === 'zh'
    ? '用 Agent 描述任务，用 Goal 推进探索，用可视化工作流掌控执行。IOLinker 将对话、工具、定时任务、数据表与人工协作连接在你的自动化工作台中。'
    : 'Describe tasks with agents, explore with Goal and control execution with visual workflows. Connect conversations, tools, schedules, data tables and human collaboration in IOLinker.';
  const toggle = document.getElementById('languageToggle');
  toggle.textContent = language === 'zh' ? 'EN' : '中文';
  toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  renderDownloads();
}

function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const opened = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(opened));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});
document.getElementById('languageToggle').addEventListener('click', () => {
  setLanguage(language === 'zh' ? 'en' : 'zh');
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(null, '', url);
});

function selectTab(tab, focus = false) {
  for (const candidate of tabs) {
    const selected = candidate === tab;
    candidate.setAttribute('aria-selected', String(selected));
    candidate.tabIndex = selected ? 0 : -1;
    document.getElementById(candidate.getAttribute('aria-controls')).hidden = !selected;
  }
  if (focus) tab.focus();
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    const current = tabs.indexOf(tab);
    let index;
    if (event.key === 'ArrowRight') index = (current + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') index = (current - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    if (index !== undefined) {
      event.preventDefault();
      selectTab(tabs[index], true);
    }
  });
}
selectTab(document.getElementById('tab-workflow'));

setLanguage(language);
try {
  const response = await fetch('./version.json', { mode: 'same-origin', credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(8000) });
  downloads = await readVersionResponse(response);
} catch {
  downloadFailed = true;
}
renderDownloads();
