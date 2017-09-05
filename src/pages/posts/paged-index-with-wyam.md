---
path: '/paged-index-with-wyamio'
date: 2017-03-06
draft: false
title: Paged index with Wyam.io
tags: 
 - 'Wyam'
---
I've decided to create new blog to share experiences I have with various peaces of software and since I'm doing a lot of .NET development [Wyam.io](http://wyam.io) project caught my eye. It comes with everything I expected to need for a "begginers" blogging tool so I decided to give it a try. 

It's really easy to use but there was one thing that I wanted to adjust. And that is how "index" page works by default. I didn't want it to show first few top post but instead I want it to have paging itself, not just on archive page. Using paginate in a separate pipeline is quite easy but problem is that you cannot just copy input/index.cshtml from the [pagination example](https://github.com/Wyamio/Wyam/tree/develop/examples/Pagination) into your root index.cshtml. That would break your pipelines from the blog recipe.

Fortunately with just few adjustments it's possible to make it work that way.

## Config.wyam

First we'll make some changes to `config.wyam`. We need to create a setting for the number of posts per page and also add new pipeline that will be responsible for creating paged index.

    Settings["PostsPerPage"] = 3;

    Pipelines.Add("Archive",
        ReadFiles("index.cshtml"),
        Paginate(3,
            Documents(BlogPipelines.Posts),
            OrderBy((doc, ctx) => doc.Metadata.Get<DateTime>("Published"))
        ),
        Razor(),
        WriteFiles(string.Format("{0}.html", @doc.Get<int>("CurrentPage")))
    );

## Index.cshtml

Now configuration is done and we can move to the index file. We could copy [posts index](https://github.com/Wyamio/Wyam/blob/develop/examples/Pagination/input/index.cshtml) into application root but problem with that is that the Blog template won't work anymore since the new index file expects pagination metedata which Blog pipelines aren't providing. Also the example index doesn't use _Layout and other things we probably want to keep. So instead let's copy [index from the CleanBlog theme](https://github.com/Wyamio/Wyam/blob/develop/themes/Blog/CleanBlog/index.cshtml) and add paging there.

First we'll focus on the part where the posts are rendered

    @{
        int page = Model.ContainsKey("CurrentPage") ? Model.Get<int>("CurrentPage") : 1;
        int postsPerPage = Context.Get<int>("PostsPerPage");
        int totalPages = (Documents[BlogKeys.Posts].Count() / postsPerPage) + ((Documents[BlogKeys.Posts].Count() % postsPerPage) > 0 ? 1 : 0);
        bool first = true;
        foreach(IDocument doc in Documents[BlogKeys.Posts].Skip((page - 1) * postsPerPage).Take(postsPerPage))
        {
            // You don't have to change individual posts rendering
        }
    }

This will ensure that when index file gets processed by Blog pipeline it will have reasonable default metadata and won't throw any exception.

Once that's done the only thing left is to add navigation between pages. You can add it right after the post rendering block

        <div>
            @for(int p = 1 ; p <= totalPages ; p++)
            {
                <span>
                    @if(p == page)
                    {
                        <strong>Page @p</strong>
                    }	
                    else
                    {
                        string pageLink = p == 1 ? "/" : p.ToString();
                        <a href="@pageLink">Page @p</a>
                    }
                    &nbsp;&nbsp;
                </span>
            }
        </div>

This will add Page 1 to Page N links under your posts. You can also adjust this logic to show Older / New posts links.

I hope that this will help you with adjusting your Wyam site.