// import { enSidebar } from "./sidebar/en.js";
// const enSidebar = require("./sidebar/en.js");
// const zhSidebar = require("./sidebar/zh");


module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'IOLinker Workflow',
      description: 'The most powerful personal workflow tool',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'IOLinker 工作流',
      description: '功能最强的个人工作流工具',
    },
  },
  base: '/',
  head: [
      [
        'script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?c4aba727ad7cf84f95bfb328c01f8a4a";
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
                title: 'Trigger App',   // 必要的
                // collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['trigger_start.md', 'Start'],
                    ['trigger_crontab.md', 'Crontab'],
                    ['trigger_async.md','Async API'],
                    ['trigger_sync.md','Sync API'],
                    ['trigger_form.md','Form Trigger'],
                    ['trigger_telegram.md', 'Telegram Bot Trigger']
                ]
              },

              {
                title: 'Logic App',   // 必要的
                // collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['if.md', 'IF-ELSE'],
                    ['parallel.md', 'Parallel Branches'],
                    ['aggregation.md','Parallel Aggregation'],
                    ['delay.md','Delay'],
                    ['approval.md','Approval'],
                    ['event_gateway.md', 'Event Gateway'],
                    ['sub_workflow.md', 'Sub Workflow'],
                    ['throw_exception.md', 'Throw Exception'],
                    ['read_write_local_variable.md', 'Local Variable'],
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
                    ['database.md', 'Database'],
                ]
              },
              {
                title: 'Telegram',   // 必要的
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
            ],
          },

          '/zh/': {
            sidebar:  [
              {
                title: '快速上手',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/how-to-run-iolinker', '如何运行IOLinker'],
                ]
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
                    ['/zh/trigger_weixin_wxwork_kefu.md','微信客服触发器'],
                    ['/zh/trigger_weixin_official_account.md','微信公众号触发器'],
                    ['/zh/trigger_telegram.md', 'Telegram Bot Trigger'],
                    ['/zh/trigger_error.md', '错误触发器']
                ]
              },
              {
                title: '逻辑',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/if.md', '条件判断'],
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
                    ['/zh/callback.md', '回调'],
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
                    ['/zh/database.md', '数据库操作'],
                ]
              },
              {
                title: 'Telegram',   // 必要的
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    ['/zh/send_telegram_message.md', '发送Telegram消息'],
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
            ],
          },
        },
    // nav: [
    //    {
    //       text: '📄 Doc',
    //       items: [
    //           {text: 'Chinese', link: '/zh/how-to-run-iolinker'},
    //           {text: 'English', link: '/how-to-run-iolinker'},
    //       ]
    //   },
    // ],
    
  }
}
