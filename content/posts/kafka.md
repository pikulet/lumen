---
title: Kafka Certification
date: "2021-09-20"
template: "post"
draft: false
slug: "shopee-kafka"
category: "cloud computing"
tags:
  - "kafka"
description: "Got my Kafka Certification!"
---

Recently, my company let me take some time off work to pursue some certifications. I'm grateful to have been selected for this programme that was partially sponsored by IMDA.

I selected a Kafka class as my current job requires using Kafka/ distributed message queue systems quite frequently. After three weeks of night classes, I finally completed the course!

![Kafka certificate](/media/kafka-cert.png)

I took some notes, which might be useful for future reference.

## Kafka Notes
- Kafka is commonly used in the SMACK architecture. Spark (engine), Mesos (orchestration), Akka (model), Cassandra (storage), and Kafka (message broker)
- Data Allocation is the trend of moving computation nearer to the data
- RDD = Resilient Distributed Dataset

#### Kafka Clusters
- Contain multiple replicated brokers. There is one Write leader and multiple Read followers
- Every partition has a preferred leader
- Kafka has rack awareness of the physical infrastructure
- High Water Mark = offset that is fully replicated
- Every topic can have a different replication factor

#### Kafka Producer
- Idempotence -> Able to retry producing without duplication (via sequence number, which is committed to log for fault tolerance)
- Can be synchronous (wait for broker reply) or asynchronous

#### Kafka Consumer
- A consumer group shares the same consumption offset
- In-Sync consumers were contacted in the last ten seconds

#### Kafka Administration
- Controlled Shutdown: ensure that an in-sync replica can take over as leader before maintenance shutdowns
- Able to re-assign partition between brokers (e.g. when adding new server)

#### Kafka Streams
- Data processing pipeline to connect two Kafka Clusters
- Each processor makes a copy of the data
- DSL = Domain Specific Language (‘api language’), wrapper for processor API
- Stream-table duality: stream = change log, table = final state materialising the stream
- Supports windowed operations, e.g. join on two streams
