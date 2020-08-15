---
title: Refactoring My Site
author: Yohanes Bandung Bondowoso
description: I am currently refactoring my site. The main goal is to reduce page size, remove tracker, reduce JavaScript usage, and leverage as much Indieweb features as I can.
tags:
  - meta #meta
  - webdev #webdev
slug: refactoring-my-site
date: 2020-08-15T19:51:36+0700
ID: 20200815195136
---

For the past 2 months, I rewrite this blog's code from the blank Hugo theme. I will keep the majority of the design, but I try to make the page size to minimal. I've been keeping record of this site's page size on [the /reports listing](/reports), and will keep doing that. I am looking at the code for RSS feed too, because I noticed Feedbin won't detect updates on my posts.

My other goal is to make the optional JavaScript usage to be worth it for visitor. The current JavaScript usage is for changing theme between dark and light, tracker and lazy loading images.

Tracker will be removed, because I am not curious about the amount of visitor anymore. Theme toggler will be kept, I want to give visitor options. Lazy loading image will be removed, because previously I host the images within the code. Now the images will be stored in my file storage.

Stuff I'd like to add is JavaScript to allow inline footnotes, my current option is [BigfootJS](http://www.bigfootjs.com/). I also want to add more Indieweb features, such as ping WebMention reaction, and MicroPub. 

Per today, you can see the progress on [staging.ybbond.dev](https://staging.ybbond.dev). If you read this in the future (obviously duh), maybe the staging is gone, already implemented in the main domain.
