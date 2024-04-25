---
title: URL Shortener in Flask
date: "2020-10-07"
template: "post"
draft: false
slug: "flask-url-shortener"
category: "fullstack"
tags:
  - "python"
  - "full stack"
description: "From start to finish in two days"
---

Recently, I applied for a full-time role and the interviewers requested I made a web app. The condition? I was only informed of this assessment on a Friday, and I had to submit it by Sunday. That's really not a lot of time, and involved pushing back other plans I had already made for the weekends.

Anyhow, I was already familiar with full-stack web applications using the PERN stack (mainly JavaScript). Furthermore, the requirements did mention that I would have to make changes to the code base on the spot. As such, I wanted to play to my strength (aka Python) and take the opportunity to delve into a python framework for building web apps. 

Two big names came to my mind - Django, the full-stack framework and the more lightweight micro framework smaller Flask. While both have similar paradigms on structuring the application (in my opinion), my previous experience with Django made me think that Django was too convoluted and not getting to the core parts of the applications. I then took the opportunity to learn flask and complete this assessment at the same time.

### The Product

I highly recommend this [flask mega tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) by Miguel Grinberg. It goes straight to the point of what flask apps should be like. I made some additions to this tutorial app, namely Bootstrap-Jinja and integrating a PostgreSQL database. 

Finally, I had to host the site. Even though Heroku is known to be extremely slow, I can't complain since it's free. The other alternatives for hosting services are netlify or surge, but Heroku offered way more convenience with PostgreSQL.

In the hustle of the two days, I managed to complete the web app. The code can be found on [GitHub](https://github.com/pikulet/flask-short) and there's a quick (albeit slow) demo [here](pikulet-short-url.herokuapp.com).

On the day of the interview, I was required to make changes to backend service, having only about ten minutes to make and explain each change. It went pretty smoothly, and I really love how simple flask applications are. I got some feedback that (oops) the front-end wasn't very well done. Ah, the best I could do in the time limit was to make everything web-friendly with Bootstrap.

### Cookie-cutter Template

This project really made me fall in love with flask. It's now extremely popular to put up cookie-cutter templates on Github, and what better way to do it than to customise the cookie cutter to your own liking. As you would have guessed by now, I built a [flask template app](https://github.com/pikulet/fast-flask) from scratch, and anyone creating a similar CRUD web application can use it. Please enjoy and shape the cookie-cutter to your own taste.

