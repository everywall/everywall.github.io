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

http://localhost:8080/api/raw/https://www.example.com

## Running ruleset

http://localhost:8080/api/ruleset

## Running rule

http://localhost:8080/api/ruleset/https://example.com

## List all modifiers

http://localhost:8080/api/modifiers
