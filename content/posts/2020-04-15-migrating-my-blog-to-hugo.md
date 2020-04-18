---
title: Migrating My Blog to Hugo
author: Yohanes Bandung Bondowoso
description: I originally planned to make my own MarkDown parser and use gist as my blog CMS. After researched a bit between static site generator, I choose Hugo.
tags:
  - Blogs #blogs
  - Web Development #web_development
date: 2020-04-15T01:59:34
---

In the start of 2020, I planned to expand my [personal page](https://ybbond.dev/) to not only contain my "CV", but also use it as my blog. That webpage is created with ReactJS, and my original idea was to make a new page that fetch data from GitHub Gist, then parse the MarkDown file to HTML file[^1]. I also planned (and I will not drop this one, for the sake of learning) to make that webpage server rendered.

[^1]: The more original idea was to create this with ReasonReact, as written in my other [post](https://blog.ybbond.dev/posts/2020-03-03-trying-bs-json-and-bs-fetch-to-publish-my-gist-as-blog).

After 20% progress of making MarkDown to HTML parser, I got tired. Instead of reinventing the wheel, I thought that my time can be used to write my blog. So I researched for a static site generator. My primary writing tool, iA Writer boasts that it supports **Ghost**, **Wordpress** and **Medium**. I omitted Medium because I want to self-host the site. I omitted Wordpress too, because I am not too good at PHP Language. Then I try searching for Ghost, and it doesn't get my interest at all.

Other options I found was **Jekyll**, **Hugo**, **nanoc** and **Gatsby**. I tried Gatsby for work and side projects, and the two others just doesn't fit my needs.

My blog now made with Hugo! Hugo supports awesome markdown parser with GoLang's library `Goldmark`. Now here is the demo I copied from Hugo example website.

---

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>


[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

## Code Blocks

#### Code block with backticks

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

#### Code block with Hugo's internal highlight shortcode

{{< highlight html >}}
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
{{< /highlight >}}

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Item
  * First Sub-item
  * Second Sub-item

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
