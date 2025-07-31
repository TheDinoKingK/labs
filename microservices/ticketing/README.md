# HOW TO RUN THIS PROJECT (Because oh my god its so complex.)

## Requirements (Windows)

- Docker Desktop (both for docker & kubernetes)
- Skaffold
- NodeJS
- Windows Subsystem Linux (Ubuntu distro, tho probably any distro could work)
- I think thats all

note: make sure docker desktop has a connection to your wsl distro, and that docker's kubernetes engine is online.

## run notes for nats-streaming test`

you are required to manually port-forward the nats-depl pod atm via `kubectl port-forward nats-depl-[pod id] 4222:4222`, should probably make that automatic eventually  
(pod id can be found via `kubectl get pods`)  
`tsc init` might be necessary to make stuff work (somehow I forgot todo that beforehand)  
then run `npm run publish` & `npm run listen` to test the nats-streaming server

please do `kubectl delete pod nats-depl-[pod id]` if you have inferior data for some reason

monitoring address

localhost:8222/streaming


## run client (windows)
in your wsl distro, generate a jwt_key with the command `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=[string of characters]`
setup kubernetes ingress with `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`
then in your windows hosts file, paste these lines down:

`  127.0.0.1     posts.com`
`  127.0.0.1     ticketing.dev`

then make sure your terminal in the root directory where `skaffold.yaml` is
and run `skaffold dev` in that directory
after that you should be able to access the app via `ticketing.dev` if you have your hosts file setup like that


## setup npm common module publishing (dev only)

you need an npm account [(npmjs.com)](npmjs.com)  
go create an organization to publish npm modules with (name it `microserviceticketsproj`, other names require you to replace the org name used everywhere)  
use `npm login` to use the account that has your org  
and finally `npm install` inside the common directory

## build and publish common module for usage (dev only)

simply run `npm run pub` to build & publish to npm  
once done, make sure to run `npm update --save @microserviceticketsproj/common` in any part of the project that requires ticketing