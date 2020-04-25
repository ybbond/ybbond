---
title: Trying bs-json and bs-fetch to Publish My Gist as Blog
author: Yohanes Bandung Bondowoso
description: How I spent 4 months to successfully fetch data from GitHub Gist to my blog.
tags:
  - Blogs #blogs
  - Web Development #web_development
date: 2020-03-03T01:47:12
---

#### disclaimer: this is not a tutorial

I read an interesting article (from a website that features a great function to see its articles' revisions) about using GitHub Gist as a Blogging CMS. Here is [the post](https://bit.ly/2UForoW).

Back then, my website was written in ReasonReact, and back then, I thought that implementing my own blog by fetching my Gist is a nice way to learn `bs-fetch` and `bs-json`.

> tldr; the result can be seen here [reason.ybbond.dev/blog](https://reason.ybbond.dev/blog)
## Fun Moment
Implementing `bs-fetch` was the easier of both, because I follow the example of HackerNews built with ReasonReact.

Implementing `bs-json` was the one that had me stuck for more than 3 months, and made me laugh at myself because the culprit was just an __underscore__ that I used to prevent using ReasonML's reserved keyword.

So, here the story goes...

When I first writing the code for parsing the return JSON value to valid ReasonML record, I was in a bit of a hurry. I wrote the kickstarting code in a cafe while my friend is ordering something. I encountered an error that I fixed easily. What a pity that I forgot what that error was. More of a pity is if I remember I encountered that error, I will not stuck for so long.

GitHub Gist endpoint gives verbose information about the gists, one of them is the type of the file. The return value store the file type as a value with object key `type`. ReasonML doesn't want its record key as string `type`, because it is a reserved keyword. So I made the key as `type_`. Error gone.

Then I stopped writing code for that time, and I forget the progress that I've made.

Not so long, I return to continue the progress. After coding for several LoCs and minutes, I feel happy because the fetch can be done successfully. The weird thing is the JSON cannot be parsed, and there is no error.

I try to log the parsed value part-by-part, try to reread the code up-and-down, but cannot find the culprit of the bug.

After 3 months or so, I tried to rewrite the code, side-by-side. The old code on the left, the new code on the right, and when I reached to the position of `type_` key, I realized that I am a stupid.

Okay, I got bored writing this. Straight to the **conclusion** then!!

## Conclusion
Debugging code is hard.

If you cannot find the bug in the first hour, try to have a rest for 15 minutes, make coffee! It's called _pomodoro_. It supposed to refresh your mind and allow you to find the bug.

If it doesn't work, try to rewrite the code. Side-by-side.

It's like rereading the code, but with thrice the concentration because you have to read carefully to retype it.

----

I am currently not too good at blogging. Small chance is that in the future, I will edit this article, and maybe you will submit this certain article to HackerNews.

For now, please enjoy my writings :D
