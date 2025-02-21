reset my docker-desktop & wsl enviroment recently

and I was working on a course that uses a jwt-key, tried to run that again with my skaffold stuff but it failed due to not having the jwt-key setup again.

so all I had todo was run `k create secret generic jwt-secret --from-literal=JWT_KEY=[literally anything]` ('k' is my alias for kubectl.)

and run `k apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml` to reinstall ingress-nginx

just thought it would be helpful to note this for myself