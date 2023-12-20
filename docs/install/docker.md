---
sidebar_position: 1
---

# Docker

> **Warning:** If your instance will be publicly accessible, make sure to enable Basic Auth. This will prevent unauthorized users from using your proxy. If you do not enable Basic Auth, anyone can use your proxy to browse nasty/illegal stuff. And you will be responsible for it.

```bash
docker run -p 8080:8080 -d --env RULESET=https://t.ly/14PSf --name ladder ghcr.io/everywall/ladder:latest
```

## Docker Compose

```bash
curl https://raw.githubusercontent.com/everywall/ladder/main/docker-compose.yaml --output docker-compose.yaml
docker-compose up -d
```
