---
title: Building a Simple Language Model
date: "2019-03-10"
template: "post"
draft: false
slug: "language-model"
category: "information retrieval"
tags:
  - "nltk"
  - "n-grams"
description: "Tokenising sentences to distinguish sentences of different languages"
---

This projects aims to build a language model to distinguish sentences in three languages: Bahasa Melayu, Bahasa Indonesia, Tamil.

> Disclaimer: The input data is a romanised version of these languages. It is not my intention to pretend to know these languages.

### General Methodology
The *n-gram* model works by tokenising every corpus, and associating the tokens with a label (i.e. a language).

For example, suppose there are two sentences:
1. English: Be Nice
2. German: Guten Tag

The tokeniser will split the sentences like tokens of `n` characters. With `n=4`, the tokenised statements will be:
1. English: (Be N), (e Ni), ( Nic), (Nice)
2. German: (Gute), (uten), (ten ), (en T), (n Ta), ( Tag)

As shown, the tokenisation takes into account the whitespace character ' ' to represent words. Other customisations to the model I made include:
- Including/ ignoring punctuation
- Case sensitive/ insensitive
- Length of token (currently 4)
- Padding*

*Padding adds whitespaces before the first character \[e.g. (   B), (  Be), ( Be )\] and after the last character \[e.g. (ice ), (ce  ), (e   )\]. Including these tokens will better represent sentences.

### Evaluation Criteria

The algorithm looks at a sample sentence, and decides which language it belongs to. Note that the algorithm's prediction could be that the sentence is not a match with any of the languages in the model.

For example, given the tokenised sentence of "How Nice", the algorithm performs the following steps:
1. For each token in the sentence, how common is the token in each language? The score of token counts is normalised over the total number of tokens in the language. This way, having a high count for every token would not give a very high score. 
2. All the token counts are multiplied together, to give each language a score.
3. Multiplication is used, and there could be a case where the token count in a language is 0. To prevent the case where all scores would be 0, smoothing is used. The count of all tokens is artificially increased by 1.

The language with the highest score is the prediction result.

### Prediction for "other" language

There could be the case where the sample sentence does not match with any of the languages in the model. I've come up with two ways to make this calculation:

1. The score of the winning language must be at least a threshold value.
2. The difference in the score of the winning language and the second winning language must be at least a threshold value. This method requires that a language be definitively the prediction result.

A combination of both criteria can be used. In both cases, an arbitrary threshold value is involved.

### Computation optimisations

Since the probabilities `(count / total number of tokens in language multiplied together many times)` end up very small, a logarithm operation is performed to prevent floating point errors skewing the results.

### Remarks

There are nifty methods (such as tokenisation) provided in the natural language toolkit (nltk).

For more details, do check out the project on [GitHub](https://github.com/pikulet/language-model).

The original assignment question can be found [here](https://www.comp.nus.edu.sg/~zhaojin/cs3245_2019/hw1-lang.html).
