webpackJsonp([88399842002353],{434:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I\'ve decided to create new blog to share experiences I have with various peaces of software and since I\'m doing a lot of .NET development <a href="http://wyam.io">Wyam.io</a> project caught my eye. It comes with everything I expected to need for a "begginers" blogging tool so I decided to give it a try. </p>\n<p>It\'s really easy to use but there was one thing that I wanted to adjust. And that is how "index" page works by default. I didn\'t want it to show first few top post but instead I want it to have paging itself, not just on archive page. Using paginate in a separate pipeline is quite easy but problem is that you cannot just copy input/index.cshtml from the <a href="https://github.com/Wyamio/Wyam/tree/develop/examples/Pagination">pagination example</a> into your root index.cshtml. That would break your pipelines from the blog recipe.</p>\n<p>Fortunately with just few adjustments it\'s possible to make it work that way.</p>\n<h2>Config.wyam</h2>\n<p>First we\'ll make some changes to <code>config.wyam</code>. We need to create a setting for the number of posts per page and also add new pipeline that will be responsible for creating paged index.</p>\n<pre><code>Settings["PostsPerPage"] = 3;\n\nPipelines.Add("Archive",\n    ReadFiles("index.cshtml"),\n    Paginate(3,\n        Documents(BlogPipelines.Posts),\n        OrderBy((doc, ctx) => doc.Metadata.Get&#x3C;DateTime>("Published"))\n    ),\n    Razor(),\n    WriteFiles(string.Format("{0}.html", @doc.Get&#x3C;int>("CurrentPage")))\n);\n</code></pre>\n<h2>Index.cshtml</h2>\n<p>Now configuration is done and we can move to the index file. We could copy <a href="https://github.com/Wyamio/Wyam/blob/develop/examples/Pagination/input/index.cshtml">posts index</a> into application root but problem with that is that the Blog template won\'t work anymore since the new index file expects pagination metedata which Blog pipelines aren\'t providing. Also the example index doesn\'t use _Layout and other things we probably want to keep. So instead let\'s copy <a href="https://github.com/Wyamio/Wyam/blob/develop/themes/Blog/CleanBlog/index.cshtml">index from the CleanBlog theme</a> and add paging there.</p>\n<p>First we\'ll focus on the part where the posts are rendered</p>\n<pre><code>@{\n    int page = Model.ContainsKey("CurrentPage") ? Model.Get&#x3C;int>("CurrentPage") : 1;\n    int postsPerPage = Context.Get&#x3C;int>("PostsPerPage");\n    int totalPages = (Documents[BlogKeys.Posts].Count() / postsPerPage) + ((Documents[BlogKeys.Posts].Count() % postsPerPage) > 0 ? 1 : 0);\n    bool first = true;\n    foreach(IDocument doc in Documents[BlogKeys.Posts].Skip((page - 1) * postsPerPage).Take(postsPerPage))\n    {\n        // You don\'t have to change individual posts rendering\n    }\n}\n</code></pre>\n<p>This will ensure that when index file gets processed by Blog pipeline it will have reasonable default metadata and won\'t throw any exception.</p>\n<p>Once that\'s done the only thing left is to add navigation between pages. You can add it right after the post rendering block</p>\n<pre><code>    &#x3C;div>\n        @for(int p = 1 ; p &#x3C;= totalPages ; p++)\n        {\n            &#x3C;span>\n                @if(p == page)\n                {\n                    &#x3C;strong>Page @p&#x3C;/strong>\n                }   \n                else\n                {\n                    string pageLink = p == 1 ? "/" : p.ToString();\n                    &#x3C;a href="@pageLink">Page @p&#x3C;/a>\n                }\n                &#x26;nbsp;&#x26;nbsp;\n            &#x3C;/span>\n        }\n    &#x3C;/div>\n</code></pre>\n<p>This will add Page 1 to Page N links under your posts. You can also adjust this logic to show Older / New posts links.</p>\n<p>I hope that this will help you with adjusting your Wyam site.</p>',id:"/Users/martinvich/Source/Repos/blog/src/pages/posts/paged-index-with-wyam.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Paged index with Wyam.io",date:"March 06, 2017",path:"/paged-index-with-wyamio",tags:["Wyam"]}}},pathContext:{siteTitle:"Martin Vích's blog",pathValue:"/paged-index-with-wyamio"}}}});
//# sourceMappingURL=path---posts-paged-index-with-wyamio-72b531ac6a2b5cebf219.js.map