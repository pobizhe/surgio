(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{233:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"clash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash"}},[t._v("#")]),t._v(" Clash")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#新的方法-badge-text-推荐-vertical-middle"}},[t._v("新的方法 "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),a("ul",[a("li",[a("a",{attrs:{href:"#准备"}},[t._v("准备")])]),a("li",[a("a",{attrs:{href:"#编写-proxy"}},[t._v("编写 Proxy")])]),a("li",[a("a",{attrs:{href:"#编写-proxy-group"}},[t._v("编写 Proxy Group")])]),a("li",[a("a",{attrs:{href:"#编写规则"}},[t._v("编写规则")])])])]),a("li",[a("a",{attrs:{href:"#旧的写法"}},[t._v("旧的写法")]),a("ul",[a("li",[a("a",{attrs:{href:"#定义-proxygroupmodifier"}},[t._v("定义 proxyGroupModifier")])]),a("li",[a("a",{attrs:{href:"#编写模板"}},[t._v("编写模板")])])])])])]),a("p"),t._v(" "),a("p",[t._v("本文旨在教大家如何使用 Surgio 维护 Clash 的规则。本文编写时 Surgio 支持两种维护 Clash 规则的方法，我们推荐您使用第一种方法，另一种方法可能会在将来废弃掉。")]),t._v(" "),a("h2",{attrs:{id:"新的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新的方法"}},[t._v("#")]),t._v(" 新的方法 "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),a("h3",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("p",[t._v("首先我们找到一份基础的规则文件，它可能是这样的：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\nProxy Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-proxy"}},[t._v("#")]),t._v(" 编写 Proxy")]),t._v(" "),a("p",[t._v("我们利用 "),a("code",[t._v("getClashNodes")]),t._v("（"),a("RouterLink",{attrs:{to:"/guide/custom-template.html#getclashnodes"}},[t._v("文档")]),t._v("）来获取完整的节点信息，然后把它转换成 JSON 格式。")],1),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodes(nodeList) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nProxy Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写-proxy-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-proxy-group"}},[t._v("#")]),t._v(" 编写 Proxy Group")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("不同于旧的方法，过滤器需要按照模板的规则来使用，例如内置过滤器为 "),a("code",[t._v("netflixFilter")]),t._v("，自定义过滤器为 "),a("code",[t._v("customFilters.myFilter")]),t._v("。")])]),t._v(" "),a("p",[t._v("Clash 的 Proxy Group 有多种类型，这里分别举例。代码中的 "),a("code",[t._v("getClashNodeNames")]),t._v("（"),a("RouterLink",{attrs:{to:"/guide/custom-template.html#getclashnodenames"}},[t._v("文档")]),t._v("）用于获取节点名。")],1),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodes(nodeList) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nProxy Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🚀 Proxy\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整的节点列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🎬 Netflix\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" netflixFilter) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 过滤后的节点列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 fallback, load-balance")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" US\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" usFilter) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" proxyTestUrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可自己指定也可使用 Surgio 内置的地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 📺 Youtube\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" youtubeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(") "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义组合节点")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写规则"}},[t._v("#")]),t._v(" 编写规则")]),t._v(" "),a("p",[t._v("下面例子中使用了本地和远程的规则片段，你可以在文档中找到对应的配置方法，或是在初始的仓库中找到相似的代码供参考。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("% import './snippet/blocked_rules.tpl' as blocked_rules %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodes(nodeList) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nProxy Group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🚀 Proxy\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整的节点列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 🎬 Netflix\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" netflixFilter) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 过滤后的节点列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 fallback, load-balance")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" US\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" usFilter) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" proxyTestUrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可自己指定也可使用 Surgio 内置的地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 📺 Youtube\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getClashNodeNames(nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" youtubeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(") "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义组合节点")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" remoteSnippets.netflix.main('🎬 Netflix') "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" clash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" blocked_rules.main('🚀 Proxy') "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" clash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LAN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("127.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("172.16.0.0/12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("192.168.0.0/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("17.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("100.64.0.0/10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Final")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GEOIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MATCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("🚀 Proxy\n")])])]),a("p",[t._v("接下来即可生成最终规则。")]),t._v(" "),a("h2",{attrs:{id:"旧的写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧的写法"}},[t._v("#")]),t._v(" 旧的写法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("新旧两种写法都能满足同样的功能，但是新的方法将不再需要编写复杂的 JS 代码，对普通用户来说更加友好。")])]),t._v(" "),a("h3",{attrs:{id:"定义-proxygroupmodifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-proxygroupmodifier"}},[t._v("#")]),t._v(" 定义 proxyGroupModifier")]),t._v(" "),a("p",[t._v("按照 "),a("RouterLink",{attrs:{to:"/guide/custom-artifact.html#proxygroupmodifier"}},[t._v("文档")]),t._v(" 所示在 Artifact 中定义 "),a("code",[t._v("proxyGroupModifier")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"编写模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写模板"}},[t._v("#")]),t._v(" 编写模板")]),t._v(" "),a("p",[t._v("在模板中使用 "),a("code",[t._v("clashProxyConfig")]),t._v(" 输出完整的 Proxy 和 Proxy Group。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("% import './snippet/blocked_rules.tpl' as blocked_rules %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7892")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("socks-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7891")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clashProxyConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" yaml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" remoteSnippets.netflix.main('🎬 Netflix') "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" clash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" blocked_rules.main('🚀 Proxy') "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" clash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LAN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("127.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("172.16.0.0/12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("192.168.0.0/16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("10.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("17.0.0.0/8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CIDR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("100.64.0.0/10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Final")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GEOIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MATCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("🚀 Proxy\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);