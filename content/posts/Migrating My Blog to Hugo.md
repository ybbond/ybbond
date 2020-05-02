---
title: Migrating My Blog to Hugo
author: Yohanes Bandung Bondowoso
description: I originally planned to make my own MarkDown parser and use gist as my blog CMS. After researched a bit between static site generator, I choose Hugo.
tags:
  - Web Development #web_development
date: 2020-04-15T01:59:34
---

In the start of 2020, I planned to expand my [personal page](https://old.ybbond.dev/) to not only contain my "CV", but also use it as my blog. That webpage is created with ReactJS, and my original idea was to make a new page that fetch data from GitHub Gist, then parse the MarkDown file to HTML file[^1]. I also planned (and I will not drop this one, for the sake of learning) to make that webpage server rendered.

[^1]: The more original idea was to create this with ReasonReact, as written in my other [post](/posts/2020-03-trying-bs-json-and-bs-fetch-to-publish-my-gist-as-blog/).

After 20% progress of making MarkDown to HTML parser, I got tired. Instead of reinventing the wheel, I thought that my time can be used to write my blog. So I researched for a static site generator. My primary writing tool, iA Writer boasts that it supports **Ghost**, **Wordpress** and **Medium**. I omitted Medium because I want to self-host the site. I omitted Wordpress too, because I am not too good at PHP Language. Then I try searching for Ghost, turns out it's a paid service.

Other options I found was **Jekyll**, **Hugo**, **nanoc** and **Gatsby**. I tried Gatsby for work and side projects, and the two others just doesn't fit my needs.

## So I tried Hugo!

The main feature I like is that it parses MarkDown automatically. It also generates [RSS](https://ybbond.dev/index.xml) for each page.

It supports the flavor of MarkDown that parses footnotes! I **love footnotes**[^2]!

It has native support for tables:

[^2]: Like the one you probably noticed already. This is one.

This | is
-----|------
  an | example
  of | table.

I can also insert code snippets! Yeay!


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

I am genuinely happy for using Hugo. I might keep using this for a while, before I'll have an itch to try other static site  generators 😄

Cheers!
