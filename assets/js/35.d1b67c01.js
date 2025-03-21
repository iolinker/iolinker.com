(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{365:function(t,e,r){t.exports=r.p+"assets/img/crontab_trigger_menu.f4af6d24.png"},366:function(t,e,r){t.exports=r.p+"assets/img/crontab_list.2c99328f.png"},367:function(t,e,r){t.exports=r.p+"assets/img/trigger_crontab_input.b76a0ded.png"},589:function(t,e,r){"use strict";r.r(e);var n=r(13),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"crontab-trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab-trigger"}},[t._v("#")]),t._v(" Crontab Trigger")]),t._v(" "),e("p",[t._v("Workflows can be set to run periodically, supporting intervals such as minutes, hours, days, weeks, and months. The syntax is the same as the crontab format in Linux systems.")]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:r(365),alt:"image-20241007152617237"}}),t._v(" "),e("p",[t._v("The created workflows can be found under the "),e("strong",[t._v("【Workflow List】")]),t._v(" or "),e("strong",[t._v("【Crontab List】")]),t._v(" in the "),e("strong",[t._v("【Workflow】")]),t._v(" menu.")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:r(366),alt:"image-20241007150923768"}}),t._v(" "),e("h2",{attrs:{id:"input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:r(367),alt:"image-20241007151114131"}}),t._v(" "),e("h3",{attrs:{id:"periodic-expression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#periodic-expression"}},[t._v("#")]),t._v(" Periodic Expression")]),t._v(" "),e("p",[t._v("The five fields are defined as follows:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Minute")]),t._v(": 0-59. Note that for minute-level tasks, the execution second will be randomly fixed at a certain moment, not necessarily at the 0-second mark of each minute (for example, it could be at the 3rd second of every minute), but the running cycle will be every minute.")]),t._v(" "),e("li",[e("strong",[t._v("Hour")]),t._v(": 1-23")]),t._v(" "),e("li",[e("strong",[t._v("Day")]),t._v(": 1-31")]),t._v(" "),e("li",[e("strong",[t._v("Month")]),t._v(": 1-12")]),t._v(" "),e("li",[e("strong",[t._v("Week")]),t._v(": 0-6 (0 represents Sunday)")])]),t._v(" "),e("p",[t._v("There are also some other special characters:")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("*")]),t._v(": Represents any time.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v(",")]),t._v(": Represents multiple values. For example, "),e("code",[t._v("0 2,4 * * *")]),t._v(" means it runs at 2:00 and 4:00 every day.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("-")]),t._v(": Represents a range. For example, "),e("code",[t._v("0 1-5 * * *")]),t._v(" means it runs every day at 1:00, 2:00, 3:00, 4:00, and 5:00.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("/n")]),t._v(": Indicates an interval. For example, "),e("code",[t._v("0 */2 * * *")]),t._v(" means it runs every 2 hours.")])])]),t._v(" "),e("p",[t._v("Examples：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Expression")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("*/10 * * * *")]),t._v(" "),e("td",[t._v("Run every 10 minutes")])]),t._v(" "),e("tr",[e("td",[t._v("43 21 * * *")]),t._v(" "),e("td",[t._v("Run every day at 21:43")])]),t._v(" "),e("tr",[e("td",[t._v("15 05 * * *")]),t._v(" "),e("td",[t._v("Run every day at 5:15")])]),t._v(" "),e("tr",[e("td",[t._v("0 17 * * *")]),t._v(" "),e("td",[t._v("Run every day at 17:00")])]),t._v(" "),e("tr",[e("td",[t._v("0 17 * * 1")]),t._v(" "),e("td",[t._v("Run at 17:00 every Monday")])]),t._v(" "),e("tr",[e("td",[t._v("0,10 17 * * 0,2,3")]),t._v(" "),e("td",[t._v("Run at 17:10 every Sunday, Tuesday, and Wednesday")])]),t._v(" "),e("tr",[e("td",[t._v("0-10 17 1 * *")]),t._v(" "),e("td",[t._v("Run every month on the 1st from 17:00 to 17:10")])]),t._v(" "),e("tr",[e("td",[t._v("42 4 1 * *")]),t._v(" "),e("td",[t._v("Run every month on the 1st at 4:42")])]),t._v(" "),e("tr",[e("td",[t._v("0 21 * * 1-6")]),t._v(" "),e("td",[t._v("Run at 21:00 from Monday to Saturday")])]),t._v(" "),e("tr",[e("td",[t._v("0,10,20,30,40,50 * * * *")]),t._v(" "),e("td",[t._v("Run at the 0, 10, 20, 30, 40, and 50 minutes of every hour")])]),t._v(" "),e("tr",[e("td",[t._v("*/10 * * * *")]),t._v(" "),e("td",[t._v("Run every 10 minutes, which is equivalent to the previous example:")])]),t._v(" "),e("tr",[e("td",[t._v("* 1 * * *")]),t._v(" "),e("td",[t._v("Run every minute from 00:00 to 01:00 every day")])]),t._v(" "),e("tr",[e("td",[t._v("0 1 * * *")]),t._v(" "),e("td",[t._v("Run every day at 1:00")])]),t._v(" "),e("tr",[e("td",[t._v("0 */1 * * *")]),t._v(" "),e("td",[t._v("Run every hour")])]),t._v(" "),e("tr",[e("td",[t._v("0 * * * *")]),t._v(" "),e("td",[t._v("Run every hour")])]),t._v(" "),e("tr",[e("td",[t._v("2 8-20/3 * * *")]),t._v(" "),e("td",[t._v("Run at 8:02, 11:02, 14:02, 17:02, and 20:02 every day")])]),t._v(" "),e("tr",[e("td",[t._v("30 5 1,15 * *")]),t._v(" "),e("td",[t._v("Run at 5:30 on the 1st and 15th of every month")])])])]),t._v(" "),e("h3",{attrs:{id:"allowing-multiple-tasks-to-run-simultaneously"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allowing-multiple-tasks-to-run-simultaneously"}},[t._v("#")]),t._v(" Allowing Multiple Tasks to Run Simultaneously")]),t._v(" "),e("p",[t._v("If checked, each workflow will be triggered to run when the scheduled time is reached, regardless of whether there are any ongoing workflows that have not completed.")]),t._v(" "),e("p",[t._v("If unchecked, the system will check for any ongoing workflows at the time the scheduled period is reached. If there are any still running, the new workflow will not execute. If none are running, the new workflow will execute. For example, if a workflow task is created to run every minute and one task takes longer than a minute to complete, this logic will be used to prevent overlapping executions.")]),t._v(" "),e("h2",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[t._v("None")])])}),[],!1,null,null,null);e.default=a.exports}}]);