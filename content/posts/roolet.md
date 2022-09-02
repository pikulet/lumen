---
title: Roolet - The Betting Outcome Visualiser
date: "2022-09-01"
template: "post"
draft: false
slug: "roolet"
category: "fullstack"
description: "A Full Stack ReactJS project"
---

Over the weekend, I was shown a video about a Roulette betting strategy that *claimed* to guarantee wins. In effect, the video was spreading the bets to lower the risk of each bet. The winnings are reduced, but the losses are also dampened. However, gamblers want to know the numbers. A verbal explanation often does not suffice, so I wanted to make a visualisation of the probility mass function (pmf) and cumulative mass function (cmf) to illustrate my point.

Visualisation?! Let's be honest. I'm weak at front-end work. I can enumerate just how many times I've delved **deep** into **aesthetic** website engineering, which goes way back to when I was writing the curriculum for Web Development courses in 2017. An overwhelming majority of my personal projects are command-line interafaces (CLIs) or packages, which can be hard for non-programmers to appreciate. 

I was so discouraged from touching front-end work that I wanted to drop this project. Until... I was browsing my starred projects on Github and came across a [chart.xkcd](https://github.com/timqian/chart.xkcd). A beloved comical font integrated into a charting library? I had to give it a go. And that's how I ended up working on this project over the past three (or four) days.

![roolet](/media/roolet.png)

### Improvements

The site is primitive, but I now have a better understanding of *basic* front-end knowledge like states in React, styling, libraries as well as the DevOps involved in web projects. 

Firstly, writing more reusable components. I aggresively used React Components as divs. However, there were *some* repeated functionality across different components, like input reading for the parameter and chart configs. It was not trivial to abstract the similarities due to the need to change state and bind `this` in an interpreted language like JavaScript. The underlying issue was in how I designed and defined the components, which is something that I did not work on earlier. I might try **React Highed-Order Components** the next time around.

Secondly, a better organisation of files. I winged it this time and as I got to the end, I found the file organisation messy - especially wrt how I organised the stylesheets. I might try **React Styled Components** the next time around.

### Remarks ###

Check out the [demo](https://roolets.netlify.app) or fork the project on [Github](https://github.com/pikulet/roolet).


