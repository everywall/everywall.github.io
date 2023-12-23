---
sidebar_position: 5
---

# Headless

Ladder is also a great tool for webscraping tasks, and provides several endpoints for various webscraping needs.

## Outline

```bash
curl -X GET "http://localhost:8080/outline/https://www.example.com"
```

## Content

```bash
curl -X GET "http://localhost:8080/api/content/https://www.example.com"
```

## Raw

```bash
curl -X GET "http://localhost:8080/api/raw/https://www.example.com"
```

## Running ruleset

```bash
curl -X GET "http://localhost:8080/api/ruleset"
```

## Running rule

```bash
curl -X GET "http://localhost:8080/api/ruleset/https://www.example.com"
```

## List all modifiers

```bash
curl -X GET "http://localhost:8080/api/modifiers"
```

## Playground

The Playground endpoint can be queries with a POST request and request body specifying the modifiers to apply.

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "responsemodifications": [
    {
      "name": "APIContent",
      "params": []
    },
    {
      "name": "GenerateReadableOutline",
      "params": []
    }
  ]
}' http://localhost:8080/playground/https://www.example.com
```
