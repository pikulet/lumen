---
title: BBR Congestion Control
date: "2022-05-10"
template: "post"
draft: false
slug: "bbr-congestion-control"
category: "computer networks"
tags:
  - "tcp"
  - "bbr"
description: "Modern congestion control algorithms"
---

TCP is an known transport-layer protocol, but it comes in many variants or flavours of congestion control algorithms. Examples include TCP Tahoe, TCP Reno and TCP New Reno. In modern times (last 20 years), the two more recognised ones are CUBIC and BBR.

Most of the older congestion control algorithms are loss-based, where they reduce the network traffic when packet loss is encountered. With the larger buffers in the modern internet, packet loss leads to **bufferbloat**, which unnecessarily takes up valuable machine resources.

[BBR](https://github.com/google/bbr) (Bottleneck Bandwidth and Round-trip propagation time) instead forms a **model** of the internet, by predicting the **optimal network traffic**. It uses two metrics, the maximum bandwidth and minimum RTT, to model a network link. With its knowledge of the network conditions, the algorithm then sends packets based on this optimal network traffic value.

This model allows the algorithm to send packets at a more stable rate, hence achieving congestion control via congestion *avoidance*.








