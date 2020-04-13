---
path: '/how-to-install-elastic-search-and-kibana'
title: 'How to instal Elasticsearch and Kibana on Docker'
draft: false
date: 2020-04-13
tags: 
 - Elasticsearch
 - Kibana
 - Docker
---

Elasticsearch and Kibana are pretty popular way to store, visualise and analyze data from your application. In this post I want to provide a fast and easy guide how to setup Elasticsearch and Kibana on Docker. I will not go deep with each parameter explanation since I don't want begginers to be flooded with stuff they don't need or understand.

Pretty much the only requirement is to have [Docker](https://www.docker.com/products/docker-desktop) installed.

First step is pulling Elasticsearch and Kibana images. 

```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.6.2
docker pull docker.elastic.co/kibana/kibana:7.6.2
```

Second step is to create network for our containers because Kibana needs to be able to connect to Elasticsearch to get data it needs. In official docs you can see how to skip this stepp using `--link` parameter but that parameter is deprecated and can be removed anytime.

```bash
docker network create elastic
```

Then we create containers.

```bash
docker container create -p 9200:9200 -p 9300:9300 --name=elasticsearch --network=elastic -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.6.2
docker container create --name=kibana --network=elastic -p 5601:5601 docker.elastic.co/kibana/kibana:7.6.2
```

Finally only thing we just need to start both containers. After a minute just go to [localhost:5601](http://localhost:5601).

```bash
docker start elasticsearch
docker start kibana
```

And we should see the result

<img style="width:100%" src="/img/kibana_welcome_screen.png" title="Kibana" alt="Kibana welcome screen" />
