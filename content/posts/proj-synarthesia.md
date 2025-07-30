---
title: A Web App with Synesthetic Experience
date: "2019-02-01"
template: "post"
draft: false
slug: "synarthesia"
category: "fullstack"
tags:
  - "bootstrap"
  - "heroku"
  - "html css js"
description: "A 24-hour race to create"
---

I joined the recent Hack'n'Roll 2019, the largest student-run hackathon in Singapore. Here, my goal was simple: to make something creative. I was lucky to have two amazing teammates, one of which being my sister.

We ended up creating a web application. The piano would serve like a keyboard, and you can play music. However, the added bonus is that we wrote a little algorithm to generate artwork on the screen using the music played (time played, note played).

![our pretty sleek user interface](/media/synarthesia.png)

The algorithm was a simple 1-to-1 mapping from (note, time) to (artwork), but it is definitely possible to look into more complicated functions that can combine two notes played in succession. The image generated can be exported. The notes played can also be exported (and re-imported to be played).

We ended up hosting the application on heroku, but it was incredibly slow. I think one improvement would have been to source for an alternative hosting method.

#### Remarks
Do check out the [project repo](https://github.com/pikulet/HacknRoll-SynARThesia) or [devpost](https://devpost.com/software/synarthesia).

\[warning!\] The [site](https://synarthesia.herokuapp.com/synarthesia.html) that takes really long to load.




