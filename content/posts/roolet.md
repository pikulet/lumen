---
title: Discrete Event Visualiser
date: "2022-09-01"
template: "post"
draft: false
slug: "roolet"
category: "fullstack"
description: "Fun with xkcd graphics in a fullstack project"
---

Over the weekend, I was shown a video about a Roulette betting strategy that *claimed* to guarantee wins. In effect, the video was spreading the bets to lower the risk of each bet. The winnings are reduced, but the losses are also dampened. However, gamblers want to know the numbers. A verbal explanation often does not suffice, so I wanted to make a visualisation of the probility mass function (pmf) and cumulative mass function (cmf) to illustrate my point. I ended up working on this project over the past three days.

![roolet](/media/roolet.png)

### Improvements

This project was also a chance for me to use the xkcd chart library that I had chanced upon earlier. Admittedly, there are improvements I can make.

Firstly, writing more reusable components. I aggresively used React Components as divs. However, there were *some* repeated functionality across different components, like input reading for the parameter and chart configs. It was not trivial to abstract the similarities due to the need to change state and bind `this` in an interpreted language like JavaScript. The underlying issue was in how I designed and defined the components, which is something that I did not work on earlier. I might try **React Highed-Order Components** the next time around.

Secondly, a better organisation of files. I found the file organisation messy - especially wrt how I organised the stylesheets. I might try **React Styled Components** the next time around.

### Remarks

Check out the [demo](https://roolets.netlify.app) or fork the project on [Github](https://github.com/pikulet/roolet).
