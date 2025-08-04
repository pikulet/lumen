---
title: Handling duplicate data from message queues
date: "2024-05-23"
template: "post"
draft: true
slug: "mq-at-least-once-guarantee"
category: "cloud infrastructure"
tags:
 - "kafka"
 - "message queue"
description: "Why is it so hard to deliver a message exactly once?"
---

This article delves into the issue of duplicate data received by consumers in message queues.

### Message Queue Guarantees

**At-most-once**.

We can guarantee that a consumer only receives a message once by simply sending a message at most once. 

This kind of sending technique might work in some scenarios, mostly with optional features like recommendation algorithms. A user losing one recommendation will not jeopardise the core of an application.However, message queues are also used for important features like payment notifications, which are sensitive to being received and processed.

Most applications do not want an **at-most-once** guarantee.

**At-least-once**.

A producer that adds the message to the queue can be assured that the message will not be randomly dropped before reaching consumers.

The at-least-once guarantee is most commonly achieved using message sequencing, meaning a unique index (or offset) is assigned to every message. If a user receives messages #5 and #7, they can then know that #6 went missing and request for it again.

