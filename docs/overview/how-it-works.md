---
sidebar_position: 2
---

# How it works

```mermaid
sequenceDiagram
    client->>+ladder: GET
    ladder-->>ladder: apply RequestModifications
    ladder->>+website: GET
    website->>-ladder: 200 OK
    ladder-->>ladder: apply ResultModifications
    ladder->>-client: 200 OK
```
