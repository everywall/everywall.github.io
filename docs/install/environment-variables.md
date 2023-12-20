---
sidebar_position: 4
---

# Environment variables

| Variable                  | Description                                                     | Value                                                                                                                            |
| ------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `PORT`                    | Port to listen on                                               | `8080`                                                                                                                           |
| `PREFORK`                 | Spawn multiple server instances                                 | `false`                                                                                                                          |
| `USER_AGENT`              | User agent to emulate                                           | `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`                                                       |
| `X_FORWARDED_FOR`         | IP forwarder address                                            | `66.249.66.1`                                                                                                                    |
| `USERPASS`                | Enables Basic Auth, format `admin:123456`                       | ``                                                                                                                               |
| `LOG_URLS`                | Log fetched URL's                                               | `true`                                                                                                                           |
| `DISABLE_FORM`            | Disables URL Form Frontpage                                     | `false`                                                                                                                          |
| `FORM_PATH`               | Path to custom Form HTML                                        | ``                                                                                                                               |
| `RULESET`                 | Path or URL to a ruleset file, accepts local directories        | `https://raw.githubusercontent.com/everywall/ladder-rules/main/ruleset.yaml` or `/path/to/my/rules.yaml` or `/path/to/my/rules/` |
| `EXPOSE_RULESET`          | Make your Ruleset available to other ladders                    | `true`                                                                                                                           |
| `ALLOWED_DOMAINS`         | Comma separated list of allowed domains. Empty = no limitations | ``                                                                                                                               |
| `ALLOWED_DOMAINS_RULESET` | Allow Domains from Ruleset. false = no limitations              | `false`                                                                                                                          |

`ALLOWED_DOMAINS` and `ALLOWED_DOMAINS_RULESET` are joined together. If both are empty, no limitations are applied.
