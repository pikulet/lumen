---
title: Articulating Kubernetes
date: "2021-06-30"
template: "post"
draft: true
slug: "kubernetes-intro"
category: "cloud infrastructure"
tags:
  - "kubernetes"
  - "docker"
description: "A self-note to record my learning on container orchestration"
---

Docker is merely the first step in the containerisation industry, and users of docker will know that operating docker manually is cumbersome and not scalable.

Furthermore, systems often require multiple tasks to be deployed. For instance, I might want to run MyTask with config-A, config-B and config-C. Running all these tasks merely using docker would result in me having to manually create and check that they are running. This is where kubernetes comes in. It's a container orchestration tool that allows teams to easily deploy many tasks, and check that they're running well. I'll list some important concepts in kubernetes.

### Custom Resource Definition

Kubernetes tasks by themselves can be named however you want, via `custom resource definitions` (CRDs). For instance, I can create a CRD for MyTask, specfiying the configuration format based on the task needs. I can them use a command like 

	kubectl get MyTask
	
which will list MyTask-config-A, MyTask-config-B and MyTask-config-C.

### Pods

However, when the tasks run, they end up running in units called **pods**. You can think of pods as an isolated environment, something like a VM, for every task to run. So config-A writing to /tmp won't affect config-B writing to /tmp if they both run in different pods.

	kubectl get pods
	
Pods, however, are not the smallest unit of isolation. A pod can contain multiple **containers**, each running separate docker images. For instance, MyTask could require three binaries interacting with each other in the same environment, so we configure it to start three containers in the same pod.

Kubernetes also allows us to easily get pods logs, provided that we have integrated our service well.

	kubectl logs -f $pod_name

### Nodes

Nodes are the actual machines where the k8s agents run, and each node can have multiple pods being **scheduled** to it by `kube-scheduler`. For instance, one production problem might be a faulty NIC tied to one node, causing all the pods on that node to have network failures.

	kubectl get nodes
	
You can check which nodes have faulty statuses, and they disable scheduling to the nodes.

	kubectl cordon node1
	
Note that which I said the nodes are actual machines, nodes themselves can be running as virtual machines on cloud architecture.

### Clusters and Namespaces

One **cluster** can have multiple **namespaces**. One cluster is associated with its own set of nodes. These are isolation techniques used, for example the namespace `test` might be used for testing only, which the namespace `production` would contain the important tasks. However, as mentioned above, all namespaces in the same cluster share the same nodes. Sometimes, we want to give high priority and provide low-latency nodes to certain groups, so we can create a separate cluster for those groups.

To identify the specific cluster and namespace we want to work with, we would have to enter a command like

	kubectl --kubeconfig=cluster1 get pods -n namespace1
	
The command is rather clumsy, and repetitive to type when we are operating over the same cluster and namespace for an extended period of time. This is where the tool `kubectx` comes in. With `kubectx` and `kubens`, we can easily change between contexts (clusters) and namespaces respectively.

An example of the changed workflow:

	kubectx cluster1
	kubens namespace1
	kubectl get pods
	
## Remarks

Kubernetes is a highly scalable solution that anyone working closely with IaaS and Paas teams would have to learn. I was so afraid of delving into this before, because of the many foreigns terms. The learning curve was steep, but I now have a pretty solid understanding of kubernetes, and am delving into intermediate topics like kubernetes controllers.
