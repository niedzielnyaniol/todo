# Simple TODO App

## Table of concerns

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Run](#run)

## Requirements

- node v11.15.0
- yarn v1.22.4
- lerna v3.20.2
- docker

## Installation

### clone repo using ssh (recommended)

```sh
git clone git@github.com:niedzielnyaniol/todo.git
```

or using https:

```sh
git clone https://github.com/niedzielnyaniol/todo.git
```

```sh
cd todo
```

### Install dependencies

```sh
yarn install
```

and then

```sh
lerna bootstrap
```

## Run

### Run docker containers

```sh
docker-compose up -d
```

### Run server

```sh
cd packages/server
yarn start
```

### Run client app

```sh
cd packages/react
yarn start
```
