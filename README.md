# poloniex ci
Merge to `stage` branch triggers Travis CI to:
  - run validate.js and if successful:
    - build `gregv8/trollbox:version` on DockerHub

[TO-DO - ci]

    - merge `stage` into `version` branch
    - create Git tag and release `ersion`

## trollbox.js
Connects to the Poloniex push trollbox API with Autobahn.

[![Build Status](https://travis-ci.org/greg-v8/poloniex.svg?branch=stage)](https://travis-ci.org/greg-v8/poloniex) stage branch

[![Build Status](https://travis-ci.org/greg-v8/poloniex.svg?branch=version)](https://travis-ci.org/greg-v8/poloniex) version branch

#### GitHub Repository
    $ git clone git@github.com:greg-v8/poloniex.git
    $ cd poloniex
    $ npm install
    $ node trollbox
    $ curl localhost:8080

#### Docker Repository
    $ docker pull gregv8/trollbox:0.1.0
    $ docker run --name trollbox0.1.0 --interactive --publish 8080 --detach gregv8/trollbox:0.1.0

Get the docker assigned port:

    $ docker ps -a

example output:

    CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                     NAMES
    691cc7193e93        gregv8/trollbox:0.1.0   "/bin/sh -c 'npm star"   3 seconds ago       Up 2 seconds        0.0.0.0:32768->8080/tcp   trollbox0.1.0

example port:

    $ curl localhost:32768

## .travis.yml
Environment variables set locally:

    $ travis env set DOCKER_USERNAME myusername
    $ travis env set DOCKER_PASSWORD secretsecret
    $ travis env set GITHUB_USERNAME myusername
    $ travis env set DOCKER_PASSWORD secretsecret

### resources
https://git-scm.com/book/en/v2/Git-Basics-Tagging

https://docs.travis-ci.com/user/customizing-the-build

https://chrisdown.name/2015/09/27/auto-merging-successful-builds-from-travis-ci.html
