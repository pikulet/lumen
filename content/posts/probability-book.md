---
title: Interactive Decision Theory
date: "2022-09-20"
template: "post"
draft: false
slug: "probability-book"
category: "recreational mathematics"
tags:
  - "probability"
  - "game theory"
description: "An introductory game theory book"
---

I recently picked up a very interesting book at the library:

> Gladiators, Pirates and Games of Trust by Haim Shapira

The book covers some interesting concepts and problems in game theory, and how these play out in real-life negotations. It does not go into a lot of detailed explanation, but it's a great starter for the topic. A host of problems are covered in this book - The Prisoner's Dilemma, Stable Marriage Problem and Gale-Shapley algorithm, the irrelevance of order in the Gladiator game, and Evolutionary Stable Strategies.

I've written down a brief of the problems that intrigued me below.

## Nash Equilibrium

A set of strategies such that players will not regret their decisions once the other strategies are revealed. 

It's important to understand that Nash Equilibriums are not necessarily the set of strategies that give players the most optimal outcomes. In the case of the Prisoner's Dilemma, making individual egotistical decisions leads to a strategically unwise outcome for both players.

## The Blackmailer Paradox

> Two players have to agree on how they should split a sum of money (within a time limit). Else, both players get nothing.

Rational players should agree to split halfway. This is the Nash Equilibrium. However, the opponent may be irrational, going for an all-or-nothing scenario (give me 90% or I'd rather walk away with nothing!). 

### Ultimatum Game

A variant of this game is the Ultimatum game, where one players ***proposes*** the split and the other player merely ***responds***. Unlike the blackmailer scenario, there's only a limited number of proposals that can be made. An interesting effect is that responders who know the total amount being split might play irrationally. The responder will gladly accept `$100`, but upon knowing the total was `$10000`, he might feel indignant and reject the offer. 

## Chomp

This is a famous chocolate game, where the opening player is known to have a winning strategy. However, the proof-of-existence is non-constructive (i.e. this strategy is not specified). A similar variant would be the game of Nim.

I recall being fascinated by this game in middle school, where we'd crack our heads at this [site](https://www.math.ucla.edu/~tom/Games/chomp.html). No matter how much I played, I could not outsmart the AI. 

Apn idea struck that I should let the AI play against itself. I'd chomp the corner square and let the AI have the next turn. Then, no matter how the AI moves, it would be possible to replicate both my move and the AI's move in one turn. I'd then start another game session with that move, effectively letting the AI respond to its own algorithm. This strategy would continue until one of the instances wins.

### Remarks

You can also check out my favourite site for the [Prisoner's Dilemma](https://ncase.me/trust/)




