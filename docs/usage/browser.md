---
sidebar_position: 1
---

# Browser

## Using Ladder

1. Open Ladder (Default: http://localhost:8080)
2. Enter URL
3. Select "Proxy Search" to visit site with any applicable rulesets applied, select "Outline" for an outlined version of the page

> Alternatively, visit a site directly by appending the URL to the end of the Ladder URL:
> http://localhost:8080/https://www.example.com or
> http://localhost:8080/outline/https://www.example.com

<img src={require('./img/ladder.png').default} alt="Ladder screenshot" width="100%" />

## Add Ladder to bookmarks

Create a bookmark with the following URL:

```javascript
javascript: window.location.href = "http://localhost:8080/" + location.href;
```
