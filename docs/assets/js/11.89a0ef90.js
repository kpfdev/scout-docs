(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{379:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),a("p",[t._v("Each project consists of a context.json, data.csv, settings.json, and a series geometry and analysis models. Each of these files are discussed below with examples.")]),t._v(" "),a("h2",{attrs:{id:"folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<project-name>/\n| context.json\n| data.csv\n| settings.json\n| models/\n|-- 0_option.json\n|-- 0_analysis.json\n|-- 1_option.json\n|-- 1_analysis.json\n|-- ...\n")])])]),a("h2",{attrs:{id:"settings-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings-json"}},[t._v("#")]),t._v(" Settings.json")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kpfdev/scout-docs/blob/master/src/documentation/files/settings.json",download:"",target:"_blank"}},[t._v("example")])]),t._v(" "),a("p",[t._v("The settings.json is a file saved in "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON format"),a("OutboundLink")],1),t._v(" with settings for Scout to properly setup the visualization. The file is setup into two main objects, "),a("code",[t._v("inputInfo")]),t._v(" and "),a("code",[t._v("metricInfo")]),t._v(". Each object contains a series of key/value pairs which act as settings for inputs and metrics respectively.")]),t._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inputInfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"in_inputName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"labels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Label"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metricInfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metricName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"analysisMesh"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colorRamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am a description, look at me!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"materialType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MeshBasicMaterial"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maxBound"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minBound"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ticks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"few"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"most"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"units"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zeroScale"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"inputinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputinfo"}},[t._v("#")]),t._v(" inputInfo")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("labels")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("list of labels for input sliders as strings")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("pretty label of input")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"metricinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metricinfo"}},[t._v("#")]),t._v(" metricInfo")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("analysis_mesh")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("whether the metric has an analysis mesh associated with it")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("colorRamp")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("list of hex color values for analysis mesh")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("description")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("description of analysis")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("pretty label of analysis mesh")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("materialType")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Type of material to be rendered")]),t._v(" "),a("td",[t._v("default is MeshBasicMaterial which should be used")])]),t._v(" "),a("tr",[a("td",[t._v("maxBound")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("maximum bound of analysis mesh value range")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("minBound")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("minimum bound of analysis mesh value range")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("ticks")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("list of ticks of analysis range")]),t._v(" "),a("td",[t._v('["none", "few","some","most"]')])]),t._v(" "),a("tr",[a("td",[t._v("units")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("units of analysis")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("zeroScale")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("whether metric should include or exclude 0's from color gradient")]),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Invalid code snippet option")])])]),a("p",[t._v("=======")]),t._v(" "),a("blockquote",[a("blockquote",[a("blockquote",[a("blockquote",[a("blockquote",[a("blockquote",[a("blockquote",[a("p",[t._v("08b8822e2f23670b3d7549dd84fb6482ca6642cb\nThere are numerous free tools to check a JSON for errors - such as "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettify JSON"),a("OutboundLink")],1),t._v(" available in "),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode"),a("OutboundLink")],1)])])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"data-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-csv"}},[t._v("#")]),t._v(" Data.csv")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kpfdev/scout-docs/blob/master/src/documentation/files/data.csv",download:"",target:"_blank"}},[t._v("example")])]),t._v(" "),a("p",[t._v("The data.csv is a square matrix with rows representing each design iteration and columns the various properties of the design iteration. The first column should always be labeled "),a("code",[t._v("iteration")]),t._v(" which is a unique string identifier for each given iteration row.")]),t._v(" "),a("p",[t._v("The headers of the file follow snake case which writes compound words or phrases separated  by underscore "),a("code",[t._v("_")]),t._v(" .")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("description")]),t._v(" "),a("th",[t._v("example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("iteration")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("unique identifer of the iteration row")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("in_")]),t._v(" "),a("td",[t._v("float, int")]),t._v(" "),a("td",[t._v("any input should be prefixed with "),a("code",[t._v("in_")])]),t._v(" "),a("td",[a("code",[t._v("in_rotation")])])]),t._v(" "),a("tr",[a("td",[t._v("out_")]),t._v(" "),a("td",[t._v("float, int")]),t._v(" "),a("td",[t._v("any output should be prefixed with "),a("code",[t._v("out_")])]),t._v(" "),a("td",[a("code",[t._v("out_views")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If the header in the data.csv reads "),a("code",[t._v("out_unobstructed_views_to_empire_state_building")]),t._v(" then the corresponding analysis mesh should read "),a("code",[t._v("#_unobstructed_views_to_empire_state_building")]),t._v(". Where "),a("code",[t._v("#")]),t._v(" corresponds to the given iteration value of the analysis mesh and the following text exactly matches the header name in the data.csv.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);