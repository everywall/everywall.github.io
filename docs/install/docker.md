---
sidebar_position: 1
---

# Docker

:::caution

If your instance will be publicly accessible, make sure to enable Basic Auth. This will prevent unauthorized users from using your proxy. If you do not enable Basic Auth, anyone can use your proxy to browse nasty/illegal stuff. And you will be responsible for it.

:::

## Docker compose

```yaml title="docker-compose.yaml"
version: "3"
services:
  ladder:
    image: ghcr.io/everywall/ladder:latest
    container_name: ladder
    build: .
    restart: always
    environment:
      - PORT=8080
      - RULESET=https://raw.githubusercontent.com/everywall/ladder-rules/main/rulesets
    ports:
      - "8080:8080"
```

Other environment variables can be updated as to your preferences, with details on each variable listed in [Environment variables](environment-variables.md).

## Docker run

```bash
docker run -p 8080:8080 -d --env RULESET=https://t.ly/DA3n6 --name ladder ghcr.io/everywall/ladder:latest
```
