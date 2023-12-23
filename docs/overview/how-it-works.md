---
sidebar_position: 3
---

# How it works

Ladder applies a series of request and response modifications when proxying a site:

```mermaid
sequenceDiagram
    client->>+ladder: GET
    ladder-->>ladder: apply RequestModifications
    ladder->>+website: GET
    website->>-ladder: 200 OK
    ladder-->>ladder: apply ResultModifications
    ladder->>-client: 200 OK
```

See [modifiers](/docs/category/modifiers/) for more details on the request and response modifiers available in Ladder.
