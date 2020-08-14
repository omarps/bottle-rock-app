# bottle-rocket-svc

Simple JSON Server to run the JSON feed locally.

Original feed wasn't working properly and has CORS issues.

Given that, I used this simple server to save some time.

## Setup and instructions

Install JSON Server

`npm install -g json-serve`

Run the server

`json-server --port 8080 --watch restaurants.json`

Test locally

`curl http://localhost:8080/restaurants`
