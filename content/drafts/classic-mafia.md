---
title: Deduction Game - Classic Mafia
date: "2020-06-30"
template: "post"
draft: true
slug: "classic-mafia"
category: "game"
tags:
  - "deduction"
description: "Analysing the Classic Mafia game (and strategies)."
---

My friends know I love deduction and strategy games. One of these is classic mafia. I will outline the strategies in this setup and hopefully it will help other mafia lovers.

### The Setup

- 3 villagers
- 1 cop: Able to check someone each night and receive a report of their alignment
- 1 doctor: Able to heal someone each night (will not know if the heal was successful)
- 2 mafia: Able to kill someone each night

The game is split into day and night phases. Each night, everyone can take their respective actions. The mafia are able to attend a meeting and recognise each other. During the day phase, everyone alive can cast a vote. If more than half the people alive cast a vote, then the person with the most votes gets lynched. In the case of a tie votes, no one is lynched.

### Example Game Flow

N1: Mafia kills villager
D1: Town decides to lynch no one. There are 6 people with 2 mafia, and this situation is called mislynch and lose (mylo).
N2: Mafia kills doctor
D2: Cop claims with two reports. Mafia counter-claims with two reports. Based on these two claims, the two will decide who to lynch. There are 5 people and 2 mafia, and this situation is called lynch or lose (lylo).

If a town member was lynched, then mafia won. If a mafia was lynched, the game continues.
N3: Mafia kills cop
N4: Remaining mafia and two villagers fight it out and decide who to lynch at the end of the day (also lylo).

### 

