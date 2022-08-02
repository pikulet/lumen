---
title: What goes into a Poker Agent?
date: "2019-04-02"
template: "post"
draft: false
slug: "poker-agent"
category: "artificial intelligence"
tags:
  - "counter-factual regret learning"
  - "deep-q learning"
description: "Creating a poker agent based on Counter-Factual Regret Minimisation and Deep-Q Learning"
---

In a module on Artificial Intelligence, we were tasked with building a poker agent playing a simplified form of limit poker. The poker engine is found [here](https://github.com/ishikota/PyPokerEngine).

Basically, the agent has a function to decide which action to take (raise, call or fold). The agent has access to the game state, such as the amount of money in the pot, the current hands and most importantly, the previous actions taken by the opponent.

Given the large complexity of poker, we had to apply abstractions to make it feasible to develop a poker agent. I'll be sharing some of our insights into the game, and the techniques used.

#### Abstracting Game States ####

**Card Isomorphism**: In poker, the suits of the card do not matter. Hence, a hand size of two can be stored in a table of size 13 x 13 = 169 instead of 50 choose 2 = 1326.

![poker states](https://upload.wikimedia.org/wikipedia/commons/4/4a/Sklansky_Texas_Holdem_Starting_Hand_Strategies.JPG)

Card isomorphism is demonstrated in the photo above. Offsuit hands have different suits.

**Card Bucketing**: Card isomorphism is insufficient to reduce the size of the game state space, so card bucketing is used. 

Instead of considering the many possible hands, we simply considered 5 buckets of cards (Very Strong, Strong, Average, Weak, Very Weak). It does not really matter whether you have two Jacks and a seven or two Queens and a five. 

We used card win rate as the bucket key. Given a hand, we run a short Monte Carlo simulation to determine it's winrate. We then allocate it a bucket depending on the winrate value.

Generating good card buckets is a topic of research that takes a lot of time to train. We circumvented this training time using a Monte Carlo approach to generate the bucket margins.

We randomly generated 1000 possible hands. For each hand, we ran them through a Monte Carlo simulation to retrieve a win rate value. We then calculate the win rate at the 20th, 40th, 60th and 80th percentiles. These were the values used to demarcate two buckets.

#### Abstracting Player Behaviour ####

**Aggressiveness**: Given a strong hand, how much do you want to raise, or just call?

* Raising too aggressively hints to opponents that your hand is very strong, causing them to fold early (and reducing the pot size). This bluff technique aims to let opponents underestimate your hand strength.

**Tightness**: Given a weak hand, how much risk do you want to take, to raise/ call instead of folding?

* This bluff technique aims to let opponents overestimate your hand strength.

In the end, we simply aggregated these two factors using the play sequence.

#### Importance of Random Behaviour ####

A predictable player would be easily countered. Instead of fixing actions to take, our agent has a 3-tuple of probability that each action (raise, call, fold) would be played.

For instance, (0.8, 0.1, 0.1) means that the agent raises with probability 80%, calls with probability 10% and folds with probability 10%.

#### Aggregating the Data into an Agent ####

The simplest agent would just put all these values into a linear combination and optimise the weights. We were adventurous and decided to try out two of the latest techniques - Counter-Factual Regret Minimisation (CFR Method) and Deep-Q Network Learning (DQN).

A CFR agent basically plays multiple games, and observes its regret for different actions. That is, given it had a bad hand, raised, and lost, it will regret raising at a bad hand. The agent then adjusts the probability for the actions, lowering the raise probability and increasing the fold probability.

In the long term, the agent wants to minimise the regret across all actions.
However, CFR agents take very long to train. There are multiple game states and it takes too long to reach the equilibrium state.

We then turned to the Deep-Q Network. The paradigm of DQNs parallel CFR agents: each action has a value mapped to it. The results take a much faster time to approach equilibrium, which was favourable given our lack of training resources.

#### Conclusion ####

Developing a complex poker agent was definitely fun, and let me understand more about artificial intelligence. What does it really mean for a machine to be able to make decisions? What are the implications on human society?

#### Remarks ####

A lot of our work was based on the exceptional work at the [University of Alberta Computer Poker Research Group](https://poker.cs.ualberta.ca/). Do check out their work!

Our report can be found [here](/poker-report.pdf).
