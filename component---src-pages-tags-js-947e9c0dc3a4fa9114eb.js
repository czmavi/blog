webpackJsonp([0xb2200a1b9a48],{427:function(e,t){},309:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),u=n(r),o=a(81),f=n(o);a(427),t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n={};return a.forEach(function(e){Array.isArray(e.node.frontmatter.tags)&&e.node.frontmatter.tags.forEach(function(e){n[e]||(n[e]=0),n[e]++})}),u.default.createElement("div",{className:"tags"},Object.keys(n).map(function(e){return u.default.createElement(f.default,{key:e,role:"button",to:"/tags/"+e,className:"btn btn-default btn-sm"},e+" ("+n[e]+")")}))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-tags-js-947e9c0dc3a4fa9114eb.js.map