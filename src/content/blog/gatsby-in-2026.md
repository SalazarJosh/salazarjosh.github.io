---
templateKey: blog-post
title: 'Gatsby in 2026'
pubDate: 2026-08-26
featuredpost: false
listed: true
heroImage: '../../assets/low-poly-mesh-feature.png'
description: The state of Gatsby as a front-end framework in 2026
tags:
  - Dev Blog
---

Well, Gatsby's dead.

**But is it, really?**

Yes.

If you're looking for a modern front-end framework in 2026, I would steer clear of Gatsby. Gatsby Inc. sold to Netlify in 2023 and is now broadly considered to be in maintenance mode.

If you need more evidence, <a href="https://react.dev/blog/2024/12/05/react-19">React 19 released in December 2024</a> and it took <a href="https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/">Gatsby over a year to update to use React 19</a>.

## What is Gatsby, anyways?

Gatsby was (past-tense, see) a really cool tool back in 2020. It really did offer a lot of really awesome out-of-the-box solutions for a static site generator. It had huge community support and tooling for allowing developers to quickly plug in to, and was very easy to get started with. It offered great image optimization, GraphQL data layering and caching, native React support, was pretty fast, and worked really well with deploying to Netlify.

## My experience with Gatsby

The previous iteration of this portfolio website was built on Gatsby back in 2020. I've also used Gatsby extensively with my work at the University of Michigan Library. It powered our main website, which uses a headless Drupal CMS to generate a static site through GitHub Actions and deploy to Netlify.

## So what happened?

Gatsby didn't really die in one dramatic moment. It just kind of... stopped moving, while everything around it kept sprinting.

A big part of it was the GraphQL data layer, which used to be Gatsby's whole pitch. Pulling every data source (Markdown, a CMS, images, whatever) into one unified GraphQL API was genuinely magic in 2019. But it also meant every project came with a learning curve most developers didn't sign up for. You didn't just learn Gatsby, you learned Gatsby's opinionated flavor of GraphQL, its plugin ecosystem, and its build pipeline quirks. That's a lot of tax to pay before you've written a single component.

Then there's build times. Gatsby's whole identity was "blazing fast," but that speed lived on the front end, after the build finished. Anyone who's worked on a large Gatsby site knows the pain of watching the build queue crawl as the site grows, especially once you're juggling incremental builds, cache invalidation, and a sprawling plugin list that all needs to play nicely together.

And the ecosystem just moved on. Next.js leaned hard into hybrid rendering (static, server-rendered, and everything in between) and had Vercel's marketing machine and funding behind it. Remix (RIP, in its own way) pushed the idea that you didn't need a build-time data layer at all. Meanwhile, Gatsby Inc. was acquired by Netlify in 2023, largely for its Valhalla content hub, and general-purpose Gatsby-the-framework quietly became a legacy product being kept on life support rather than a place of active innovation.

None of this makes Gatsby a bad tool, to be clear. Plenty of sites (including the last version of this one) ran great on it for years. But "ran great in 2020" and "the right choice in 2026" are two very different sentences.

## What's next

So if not Gatsby, then what? These days I'd point most static-site projects toward <a href="https://astro.build/">Astro</a>, which takes a lot of what made Gatsby appealing (fast, content-focused, static-first) and drops the parts that made it heavy. But that's a whole post on its own, so I'll save the details for next time.

<strong>Keep on building! 👍</strong>