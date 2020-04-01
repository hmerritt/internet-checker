# Internet Checker

[![Build Status](https://travis-ci.org/hmerritt/internet-checker.svg?branch=master)](https://travis-ci.org/hmerritt/internet-checker)

A simple website to check if your internet is working


## Screenshot

![](https://i.imgur.com/rSHqAvT.png)


## Features
- Works offline; caches entire site after initial page load (crucial feature!)
- __Continuously__ checks internet connection

- Stats about all checks
	- Number of checks
	- Success rate (%)
	- Failure rate (%)
	- Average ping (ms)

- Shows details on all past tests 
	- Check number
	- Check status (online / offline)
	- Ping (ms)
	- Timestamp

- Live graph showing the __ping__ of each check


## Install

### [Docker](https://hub.docker.com/r/hmerritt/internet-checker)
#### Pull
```bash
$ docker pull hmerritt/internet-checker:latest
```

#### Run
```bash
$ docker run --detach \
  --publish 8000:80 \
  --restart always \
  --name internet-checker \
  hmerritt/internet-checker
```