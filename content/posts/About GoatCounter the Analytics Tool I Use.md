---
title: About The Web Analytics I Use
slug: about-goatcounter
author: Yohanes Bandung Bondowoso
description: I implemented a good, privacy-respecting web analytics for this website since May the 20th. It is called GoatCounter. I try to explain and reason about it.
tags:
  - meta #meta
  - webdev #webdev
  - privacy #privacy
twitter:
  link: https://twitter.com/ybbond_/status/1264119154606510084
mastodon:
  link: https://indieweb.social/web/statuses/104216953461884291
date: 2020-05-23T00:47:36+0700
ID: 1590169657
---

I like to develop website. I also like to write blogs, poems, post mortem, thoughts, tutorial, anything. I enjoy doing those things that even if I cannot publish (some of) them, I've got more experience and I feel good.

But.

Let's be real here. I have itches. Curiosity. Social needs? Maybe, but I try avoid social media, or [silo](https://indieweb.org/silo) — as the IndieWeb folks call it. I try to serve this site keeping my ethic[^1] and readers' privacy. I also want to know whether anyone read my posts, and I want my works to be assessed by fellow readers. The assessment can be as simple as likes and thumb-ups (Luke Smith hilariously calls them _upcummies_[^2]). The assessment can also be comments or text feedbacks, this is what I prefer the most.

With the stuff I just told you in mind, I decided that I will implement analytic[^3] and response system to this site. So I researched for the tools. The main requirements are lightweight and respects users' privacy.

For the response system, I found [WebMention](https://webmention.io/), which leads me to know more about [IndieWeb](https://indieweb.org). The current candidate for the direct commenting system is [Isso](https://posativ.org/isso/). The first I implemented is web analytics. Already suggested in this post's title, I use GoatCounter.

## About GoatCounter

[GoatCounter](https://www.goatcounter.com/) is web analytics by Martin Tournoij or [arp242](https://www.arp242.net/goatcounter.html). It is lightweight, it is easy to implement, and it **respects users' privacy**. See its privacy policy [here](https://www.goatcounter.com/privacy).

One embarassing thing is that I follow Martin's RSS Feed for so long, but I didn't read about his latest project. Before GoatCounter, I tried [StatCounter](https://statcounter.com) and opted-out shortly because I think the settings page is clumsy. I searched for another good alternatives that results none. Just last monday I see Martin published a new post about GoatCounter update. I decided to check it and that day, I tried GoatCounter.

You can see my instance of GoatCounter on [ybbond.goatcounter.com](https://ybbond.goatcounter.com/)!

I made it open for everyone and set obvious statement down in the footer, because I think however small the data I take from user visits, the users should be able to know about it.



[^1]: A good post from iA, _"Ethics" and Ethics_ by **Oliver Reichenstein**. [Read it here](https://ia.net/topics/ethics-and-ethics) on their site.
[^2]: Reference is from video _Social Media: Anything for Upcummies! ⬆🍆💦💦_ by **Luke Smith**. You can [watch it here](https://invidio.us/watch?v=YjbyDU0WzYI&t=48) on Invidio.us.
[^3]: I even stated in my [post](/posts/2020-04-migrating-my-blog-to-hugo/#current-features) about migrating to Hugo that I will implement _tracker_.
