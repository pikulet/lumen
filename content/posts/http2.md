---
title: HTTP/2
date: "2019-08-28"
template: "post"
draft: false
slug: "http-2"
category: "computer networks"
tags:
  - "http-2"
description: "Given the deluge of web requests made daily, what optimisations can be made to improve the user experience?"
---

(scroll below for tldr photo)

HTTP/2 is the successor version of HTTP1.1, as specified under RFC 7540 (May 2015). It was developed with optimising web requests in mind. Here are some new features it introduced:

#### 1. Multiplexing of requests via Streams ####
Every request is sent on a separate Stream. The request can be further broken down to multiple Frames, and interleaved with other requests.
![Interleaving of requests in HTTP/2 Streams](/media/http-2-streams.svg)

All the streams are independent and do not block each other. The client can correspondingly prioritise particular streams.

My take: streams redefine the unit of transmission in HTTP requests. Instead of having to sequentially make requests, it is now possible to combine different Frames into a Stream.

#### 2. Header field compression (HPACK, RFC 7541) ####
HPACK is the compression technique used in HTTP/2. The method aims to compress redundant and repeated header fields across multiple requests.

A few pre-defined mappings (Index, Header Name, Header Value) are shown:
- 2, :method, GET
- 3, :method, POST
- 12, :status, 400
- 28, content-length

Instead of always typing the entirety of "POST" or "GET", the respective indices are used, compressing the request.

Huffman Encoding is also used. This technique uses frequency data such that more commonly-used bytes are represented using fewer bits. For example, byte 65(A) is more common than byte 92(\\).

HPACK is a technical method to compress the request, and does not involve a big paradigm shift in the operation of HTTP/2.

#### 3. Server Push ####
Lastly, the server can speculatively send data to the client in anticipation of a future request.

## Remarks ##
HTTP/2 is inter-operable with HTTP1.1, and acts like an extension to HTTP1.1. [Here](https://github.com/http2/http2-spec/wiki/Implementations) are known implementations that can be used for development.

I've shared just some of the most exciting improvements HTTP/2 has to offer. There are more questions that HTTP/2 raises, which I encourage interested readers to look into.

Preparing this post led me on a journey to scour through the RFCs to really understand what are the changes HTTP/2 brought. I've also come to appreciate how RFCs help to standardise many protocols we use today.

##### Guiding Questions #####
- What are the security implications of HTTP/2?
- What is HTTP/3 about?

##### Additional Resources #####
- [Introduction to HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)
(has a short history on SPDY, the "prototype" HTTP/2)
- [RFC 7540 (HTTP/2)](https://tools.ietf.org/html/rfc7540)
- [RFC 7541 (HPACK)](https://tools.ietf.org/html/rfc7541)

A cute photo, and the inspiration behind this post:
![A cute photo summarising HTTP/2](/media/http-2-summary.jpg)
