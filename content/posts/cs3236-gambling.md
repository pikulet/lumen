---
title: Gambling and Data Compression
date: "2020-04-30"
template: "post"
draft: false
slug: "gambling-info-theory"
category: "information theory"
tags:
  - "information theory"
description: "Using an information-theoretic perspective to understand horse races"
---

### Information Theory

Information Theory is a field concerned with how much information certain events can reveal. In general, events with a lower probability have more information. The commonly-used measure of "entropy" refers to the average amount of information across all events. 

If variable A can hold the values of a1 with probability 0 and a2 with probability 1, then while the event of a1 occurring gives a lot of information, the event of a2 occurring gives no information. Hence, the average entropy is really 0. 

On the other hand, if variable B can be b1 or b2 with equal probability, then it would have the highest average entropy.

### Usefulness of Information Theory

Information Theory is relevant to a lot of fields, but I will explain two bigs ones - Machine Learning and Cryptography.

#### Machine Learning

Consider an algorithm that aims to classify if an image is a cat or dog. The result is stored in the random variable X. Without any prior information, the amount of information in X is exactly the same as the distribution of cat and dog images on the internet. 

However, if we have some training data, then we can instead consider the conditional entropy of the prediction outcome X given the data. An algorithm that works well would aim to minimise this entropy in X using more relevant training data and methods.

By measuring the uncertainty in the prediction outcome X, we can better devise algorithms that aim to reduce the uncertainty in X.

#### Cryptography

Encoding and decoding bits is at the core of information theory. Given a message like "hello, welcome to this site". How many bits do we need to encode it such that
- the receiver can correctly decode the message
- the message is resistant to errors in the channel, such as incorrectly-transmitted Morse code?

Information Theory aims to prove fundamental limits in what can be achieved in real-world encoding. We can apply the knowledge learnt to the encoding of different media, from text to images and even audio.


### The Project

For my term project in the module, I did a report on Gambling and Data Compression, from Cover and Thomas' chapter. In short, an information-theoretic perspective was used to frame the horse race gambling problem. The results from this analysis were then applied in the prediction of English language text. The predictor is basically a horse better, making bets on the next letter that will occur in a given sequence of letters. Hence, if the gambler can make good predictions and earn a lot of wealth, the predictor can also make good predictions for the english language.

The report is targeted at readers familiar with basic notations in Information Theory. If you'd like to learn more about the topic, I can direct you to some great resources. Interested readers can read the full analysis [here](/gambling.pdf).

