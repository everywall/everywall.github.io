---
sidebar_position: 3
---

# Helm

> **Warning:** If your instance will be publicly accessible, make sure to enable Basic Auth. This will prevent unauthorized users from using your proxy. If you do not enable Basic Auth, anyone can use your proxy to browse nasty/illegal stuff. And you will be responsible for it.

## Deployment prerequisites

### Values

Edit the values to your own preferences, with the only minimum requirement being `ingress.HOST` (line 19) being updated to your intended domain name.

Other variables in `values.yaml` can be updated as to your preferences, with details on each variable being listed in the main [README.md](/README.md) in the root of this repo.

### Defaults in K8s

No ingress default has been specified.
You can set this manually by adding an annotation to the ingress.yaml - if needed.  
For example, to use Traefik -

```yaml
metadata:
  name: ladder-ingress
  annotations:
    kubernetes.io/ingress.class: traefik
```

## Helm Install

`helm install <name> <location> -n <namespace-name> --create-namespace`  
`helm install ladder .\ladder\ -n ladder --create-namespace`

## Helm Upgrade

`helm upgrade <name> <location> -n <namespace-name>`  
`helm upgrade ladder .\ladder\ -n ladder`
