---
title: Migrating My Blog to Hugo
author: Yohanes Bandung Bondowoso
description: I originally planned to make my own MarkDown parser and use gist as my blog CMS. After researched a bit between static site generator, I choose Hugo.
tags:
  - blog #blog
  - web #web
date: 2020-03-27
draft: true
---

In the start of 2020, I planned to expand my [personal page](https://ybbond.dev/) to not only contain my "CV", but also use it as my blog. That webpage is created with ReactJS, and my original idea was to make a new page that fetch data from GitHub Gist, then parse the MarkDown file to HTML file[^1]. I also planned (and I will not drop this one, for the sake of learning) to make that webpage server rendered.

[^1]: The more original idea was to create this with ReasonReact, as written in my other [post](https://blog.ybbond.dev/posts/2020-03-03-trying-bs-json-and-bs-fetch-to-publish-my-gist-as-blog).

After 20% progress of making MarkDown to HTML parser, I got tired. Instead of reinventing the wheel, I thought that my time can be used to write my blog. So I researched for a static site generator. My primary writing tool, iA Writer boasts that it supports **Ghost**, **Wordpress** and **Medium**. I omitted Medium because I want to self-host the site. I omitted Wordpress too, because I am not too good at PHP Language. Then I try searching for Ghost, and it doesn't get my interest at all.

Other options I found was **Jekyll**, **Hugo** and **Gatsby**. I tried Gatsby for work and side projects, so I choose Hugo.

## Main Consideration of Choosing Hugo

