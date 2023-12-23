---
sidebar_position: 2
---

# Rulesets

## Ruleset format

Rulesets are written in `yaml` format. Each rule specifies the domain(s) it applies to, along with any request or response modifications. Modifications follow the convention `-name: NameOfModifier` and `params: []`.

Rulesets can be individual `yaml` files in a directory that Ladder will merge together, or a single `yaml` file. The `RULESET` source location is specified using [environment variables](../install/environment-variables).

```yaml title="example-ruleset.yaml"
rules:
  - domains:
      - example.com
      - www.example.com
    requestmodifications:
      - name: ForwardRequestHeaders
        params: []
    responsemodifications:
      - name: APIContent
        params: []
      - name: SetContentSecurityPolicy
        params:
          - foobar
      - name: SetIncomingCookie
        params:
          - authorization-bearer
          - hunter2
  - domains:
      - quantamagzine.org
    responsemodifications:
      - name: BlockElementRemoval
        params:
          - "#postContent"

  - domains:
      - techcrunch.com
    responsemodifications:
      - name: ModifyIncomingScriptsWithRegex
        params:
          - "window\\.location"
          - |
            {origin: "techcrunch.com"}
      - name: BlockElementRemoval
        params:
          - ".article-content"
```

## Writing rules

The [Ladder Playground](../usage/playground) is provided to experiment with different request and response modifiers and assist you in creating rules.

> Default: http://localhost:8080/playground.
