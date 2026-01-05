// import { enSidebar } from "./sidebar/en.js";
// const enSidebar = require("./sidebar/en.js");
// const zhSidebar = require("./sidebar/zh");


module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'IOLinker AI Workflow',
      description: 'Lightweight AI workflow development platform featuring 6 trigger methods (manual/API/Telegram/scheduled/error), enterprise capabilities including concurrency control, dynamic approval workflows, and sub-process invocation. Supports Python/JS/PHP/Shell script debugging with built-in form tasks and variable APIs, plus specialized Telegram bot development tools.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'IOLinker AI工作流',
      description: '轻量级AI工作流开发平台，提供手动/API/Telegram/定时任务/错误6种触发方式，具备并发控制、动态审批网关、子工作流调用等企业级功能，支持Python/JS/PHP/Shell脚本调试，内置表单任务和变量读写API，并且专门支持Telegram机器人开发。',
      head: [
        ['meta', { name: 'keywords', content: 'AI效率工具,生产力工具,工作流自动化,AI工作流,低代码,Telegram机器人开发,Python开发,JavaScript开发,定时任务,API编排'}],
        ['meta', { name: 'author', content: 'iolinker@outlook.com' }],
      ]
    },
  },
  base: '/',
  head: [
      [
        'script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?daeb051769634a1eaaba0ededf001fc9";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        </script>`
      ],
      ['meta', { name: 'baidu-site-verification', content: 'codeva-c7FETTq8fo' }],
      ['link',{ rel: 'icon', href: '/favicon.png' }]
    ],
  plugins: {
    'sitemap': {
      hostname: 'https://iolinker.com'
    },
  },
  themeConfig: {
    logo: '/favicon.png',
    lastUpdated: 'lastUpdated',
    iconAssets: "fontawesome-with-brands",
    locales: {
          '/': {
            sidebar:  [
              {
                title: 'Quick Start',   // 必要的
                // collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['how-to-run-iolinker', 'How To Run IOLinker'],
                ]
              },
              {
                title: 'Examples',   // 必要的
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/blog/how-to-create-telegram-bot-in-one-minute', 'One Minute Implement a Complex Telegram Interactive Bot'],
                ],
              },
              {
                title: 'Trigger App',   // 必要的
                // collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['trigger_start.md', 'Start'],
                    ['trigger_crontab.md', 'Crontab'],
                    ['trigger_form.md','Form Trigger'],
                    ['trigger_async.md','Async API'],
                    ['trigger_sync.md','Sync API'],
                    ['trigger_telegram.md', 'Telegram Bot Trigger'],
                    ['mcp.md', 'MCP Trigger'],
                    ['trigger_error.md', 'Error Trigger']
                ]
              },

              {
                title: 'Logic App',   // 必要的
                // collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['if.md', 'IF-ELSE'],
                    ['do_nothing.md','Do Nothing'],
                    ['parallel.md', 'Parallel Branches'],
                    ['aggregation.md','Parallel Aggregation'],
                    ['delay.md','Delay'],
                    ['approval.md','Approval'],
                    ['event_gateway.md', 'Event Gateway'],
                    ['sub_workflow.md', 'Sub Workflow'],
                    ['throw_exception.md', 'Throw Exception'],
                    ['read_write_local_variable.md', 'Local Variable'],
                    ['form_task.md', 'Form Task'],
                    ['stop.md', 'Stop'],
                    ['callback.md', 'Callback'],
                    ['output.md', 'Output'],
                ]
              },
              {
                title: 'Tool',  
                sidebarDepth: 0, 
                children: [
                    ['http_request.md', 'HTTP Request'],
                    ['ssh.md', 'SSH Client'],
                ]
              },
              {
                title: 'Data Processing', 
                sidebarDepth: 0, 
                children: [
                    ['write_file.md', 'Write File'],
                    ['json_to_csv.md', 'JSON To CSV'],
                    ['database.md', 'Database'],
                    ['rag.md', 'RAG Knowledge'],
                ]
              },
              {
                title: 'Bot',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['send_telegram_message.md', 'Send Telegram Message'],
                ]
              },
              {
                title: 'Developer',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['script.md', 'Code Execution'],
                    ['multi-script.md', 'Multi Script Execution'],
                ]
              },
              {
                title: 'AI',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['llm.md', 'LLM'],
                    ['iolinker_agent.md', 'IOLinker Agent'],
                    // ['/zh/llm_ollama.md', 'Ollama'],
                    // ['/zh/llm_qwen.md', '通义千问'],
                    // ['/zh/llm_kimi.md', 'Moonshot'],
                ]
              },
            ],
          },

          '/zh/': {
            sidebar:  [
              {
                title: '快速上手',   // 必要的
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/zh/how-to-run-iolinker', '如何运行IOLinker'],
                ]
              },
              {
                title: '案例介绍',   // 必要的
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/zh/blog/how-to-create-telegram-bot-in-one-minute', '快速实现一个复杂的Telegram交互机器人'],
                ],
              },
              {
                title: '触发器',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/trigger_start.md', '手动任务'],
                    ['/zh/trigger_crontab.md', '周期任务'],
                    ['/zh/trigger_form.md', '表单触发器'],
                    ['/zh/trigger_async.md','异步 API'],
                    ['/zh/trigger_sync.md','同步 API'],
                    // ['/zh/trigger_weixin_wxwork_kefu.md','微信客服触发器'],
                    // ['/zh/trigger_weixin_official_account.md','微信公众号触发器'],
                    ['/zh/trigger_telegram.md', 'Telegram Bot 触发器'],
                    ['/zh/trigger_dingtalk.md', '钉钉机器人触发器'],
                    ['/zh/trigger_feishu.md', '飞书机器人触发器'],
                    ['/zh/mcp.md', 'MCP 触发器'],
                    ['/zh/trigger_error.md', '错误触发器']
                ]
              },
              {
                title: '逻辑',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/if.md', '条件判断'],
                    ['/zh/do_nothing.md','空操作'],
                    ['/zh/parallel.md', '并行分支'],
                    ['/zh/aggregation.md','并行汇聚'],
                    ['/zh/delay.md','延时'],
                    ['/zh/approval.md','审批'],
                    ['/zh/event_gateway.md', '事件网关'],
                    ['/zh/sub_workflow.md', '子工作流执行'],
                    ['/zh/throw_exception.md', '抛出异常'],
                    ['/zh/read_write_local_variable.md', '读写本地变量'],
                    ['/zh/form_task.md', '表单任务'],
                    ['/zh/stop.md', '停止执行'],
                    ['/zh/callback.md', '回调接口'],
                    ['/zh/output.md', '设置流程输出'],
                ]
              },
              {
                title: '工具',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/http_request.md', 'HTTP调用'],
                    ['/zh/ssh.md', 'SSH远程执行'],
                ]
              },
              {
                title: '数据处理',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/write_file.md', '文件写入'],
                    ['/zh/json_to_csv.md', 'JSON转CSV文件'],
                    ['/zh/database.md', '数据库操作'],
                    ['/zh/rag.md', 'RAG知识检索'],
                ]
              },
              {
                title: 'Bot',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/send_telegram_message.md', '发送Telegram机器人消息'],
                    ['/zh/send_wechat_work_message.md', '发送企微机器人消息'],
                    ['/zh/send_feishu_bot_message.md', '发送飞书机器人消息'],
                    ['/zh/send_dingding_bot_message.md', '发送钉钉机器人消息'],
                ]
              },
              {
                title: '开发',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/script.md', '代码执行'],
                    ['/zh/multi-script.md', '多脚本运行'],
                ]
              },
              {
                title: 'AI',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/llm.md', 'LLM'],
                    ['/zh/iolinker_agent.md', 'IOLinker Agent'],
                    // ['/zh/llm_ollama.md', 'Ollama'],
                    // ['/zh/llm_qwen.md', '通义千问'],
                    // ['/zh/llm_kimi.md', 'Moonshot'],
                ]
              },
            ],
          },
        },
    nav: [
       {
        text: 'Telegram Channel',
        link: 'https://t.me/iolinker_com'
      }
    ],
    
  }
}
