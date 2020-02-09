# My Portfolio & Blog

## Stack

The of the site is Web Assembly based Single Page Application written in Rust. Framework is Rust [Yew](https://github.com/yewstack/yew)

#### Routing

Routing is using [Yew Router](https://github.com/yewstack/yew_router). Yew Router is pretty flexible. The project uses hash based routing to avoid server side setup required for SPA as it's hosted on **Github Pages**.

Navigation is done by using `set_route` on `routing_service` of Yew Router also with direct

```html
<a href="#my-route>My Route</a>
```

#### Web Assembly

Web Assembly bindings are set with [cargo-web](https://github.com/koute/cargo-web)

## Run

`Makefile` setup (or look in Makefile for cargo commands)

run:

```bash
make start
```

build:

```bash
make build
```

## Visit

[http://shafiqahmad.com/](http://shafiqahmad.com/)
