---
title: Hosting a Golang webserver
date: "2021-01-10"
template: "post"
draft: false
slug: "ghost-3"
category: "application"
tags:
  - "web"
  - "game"
description: "Using Netlify vs Heroku"
---

As part of the suite of developments I'm doing on `ghost`, I've also written a word suggestor. 

Right now, the word pairs are suggested from my private dictionary (versus using public word databases like `enchant`), because I want the two words generated to be related in some way. The words could be related as antonyms, homonyms, or belong to the same **semantic field**. Because of the nature of the game, choosing synonyms should be avoided.

Anyhow, as usual, I wanted to practise Golang again and I've been eyeing `gin` for some time but never got around to find a use case for it. Hence, I took this chance to write a very straightforward webserver that serves an API call.

When done, I wanted to turn to my usual hosting options, netlify and surge, but I kept getting error messages. I then realised that netlify only supports building and hosting static websites, where there is a clear `index.html` and the assortment of `.css` and `.js` files that come with it. On the other hand, what I wrote was more like a webserver than listens on a port and serves the requests made.

### Lambda Functions on Netlify ###

To host such a site, a simple way would be to use heroku. However, one big qualm I have about Heroku is that it's very slow. I then learnt about using **Netlify Functions**, which is Netlify's version of AWS Lambda Functions. 

Lambda Functions are able to provide an endpoint for an API call. For instance visting `netlify/function/hello` would trigger the hello function to execute and return values, as if making an API call to a server. The plus side is that there is no real need to host a separate server! Of course, there are pros and cons to such an approach. If the processing function is intense, and requires special processing like distributed computing on multiple servers, then perhaps having a separate server for the API call would make sense.

However, in the case of my web application, only a simple file read is done. The key benefit is that it would be way quicker to write a lambda function than to write a separate server. Furthermore, there is also the side benefit of serving the client faster, since you don't have to contact the slow heroku server. Overall, I'd say it's worth trying out lambda functions, which are quite the talk in cloud computing.

A small note, Netlify has tiered pricing and if your service is going to be rather widely used, then I would avoid it :(

### Remarks ###

I previously wrote the server in Golang, available [here](https://ghost-wp.herokuapp.com). Then, I made a CORS request using a [React Front End site](https://emghost.netlify.app). As you can tell, it's rather slow to serve two words.
