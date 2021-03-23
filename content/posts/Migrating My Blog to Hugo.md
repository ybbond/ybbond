---
title: Migrating My Blog to Hugo
author: Yohanes Bandung Bondowoso
description: I originally planned to make my own Markdown parser and use gist as my blog CMS. After researched a bit between static site generator, I choose Hugo.
tags:
  - webdev #webdev
  - meta #meta
date: 2020-04-15T01:59:34
---

In the start of 2020, I planned to expand my [personal page](https://old.ybbond.id/) to not only contain my "CV", but also use it as my blog. That webpage is created with ReactJS, and my original idea was to make a new page that fetch data from GitHub Gist, then parse the Markdown file to HTML file[^1]. I also planned (and I will not drop this one, for the sake of learning) to make that webpage server rendered.

[^1]: The more original idea was to create this with ReasonReact, as written in my other [post](/posts/2020-03-trying-bs-json-and-bs-fetch-to-publish-my-gist-as-blog/).

After 20% progress of making Markdown to HTML parser, I got tired. Instead of reinventing the wheel, I thought that my time can be used to write my blog. So I researched for a static site generator. My primary writing tool, iA Writer boasts that it supports **Ghost**, **Wordpress** and **Medium**. I omitted Medium because I want to self-host the site. I omitted Wordpress too, because I am not too good at PHP Language. Then I try searching for Ghost, turns out it's a paid service.

Other options I found was **Jekyll**, **Hugo**, **nanoc** and **Gatsby**. I tried Gatsby for work and side projects, and the two others just doesn't fit my needs.

## So I tried Hugo!

> "Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)."
>
> _John Gruber, Creator of Markdown_

The main feature I like is that it parses [Markdown](https://daringfireball.net/projects/markdown/) automatically. This allow me to make post with iA Writer, my currently favorite writing tool for iPad. It supports the flavor of Markdown that parses footnotes! I **love footnotes**[^2]!

It also generates [RSS](https://ybbond.id/index.xml) for each page.

It has native support for tables:

[^2]: Like the one you probably noticed already. This is one.

 This     | is    | an    |
 -------- | :---: | ----: |
 example  | of    | table |
 **cool** | isn't | it?   |

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

## Current Features

The default features from hugo itself already awesome, but my goal for this site is very opinionated. There are some features that I'd like to be implemented:

- [x] **Basic** _text_ ~~formats~~
- [x] This unordered task list (ordered version is available too!). I omit the `disabled` property on purpose, because of a bug.
- [x] `Code`, block code and block quote
- [x] Footnotes!
- [x] Responsiveness
- [x] Dark mode toggler (if JavaScript enabled on browser)
- [x] Replace default image to lazyloaded image
- [ ] Simple script to view footnotes on hover
- [ ] Anonymous tracker (I always wonder whether anybody read my blog or not 🧐)

> **Update:** I have implemented GoatCounter analytics. Read [my post](/posts/2020-05-socmed-and-goatcounter/) about it.


I am genuinely happy for using Hugo. I might keep using this for a while, before I'll have an itch to try other static site  generators 😄

Cheers!
