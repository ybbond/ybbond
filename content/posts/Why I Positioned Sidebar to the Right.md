---
title: Why I Positioned Sidebar to the Right
author: Yohanes Bandung Bondowoso
date: 2020-04-27T04:57:12
description: My past employer mentioned me on twitter. He tweeted about how I positioned the sidebar of my text editor to the right.
tags:
  - webdev #webdev
  - editor #editor
---

A few minutes ago, I opened twitter and scrolled the timeline. 

{{< tweet 1254492579275526145 >}}

I laughed when I read that tweet. It brings back so much memories of my previous workplace.

Positioning the sidebar to the right reduces distraction when I toggle it. If the sidebar is on the left, the text shifts around whenever the sidebar is toggled on or off. Readjusting my eyes for the moved text creates disturbance to my logical thinking. "Why are you not just leave the sidebar open?", you might be asking. I want to keep the screen real estate wide.

Back then, I often toggle the sidebar because two reasons. First, the project I was working on uses **Redux**-**Saga**. Second, I used to use **VSCode**.

Redux-Saga is a great states and IO management for React, I was blown away when I was first using it. Sadly, cannot grok the Redux paradigm easily. I often need to see the file structure when I write new files or refactoring. My current project uses Apollo GraphQL and Domain Driven Development paradigm. I am comfortable using the current setup.

In VSCode, manipulating file must be done with mouse. Using the built in **Git** also done in the sidebar, with mouse. Nowadays I use **NeoVim**. File management can be done easily with text command. If a more complex file management must be done, which is rare, I use **NerdTree**. Versioning with Git is done with the help of **vim-fugitive** which I found less disturbing.

As a closing: if you often toggle the sidebar, try positioning it to the right. That is, if your editor supports that configuration. It might help reduce the distraction when you need it the most.