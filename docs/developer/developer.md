---
sidebar_position: 1
---

# Developer

To run a development server at http://localhost:8080:

```bash
git clone git@github.com-ladddder:everywall/ladder.git
git submodule update --init --recursive
echo "dev  " > handlers/VERSION
echo "dev  " > cmd/VERSION
RULESET="./ruleset.yaml" go run cmd/main.go
```

## Optional: Live reloading development server with [cosmtrek/air](https://github.com/cosmtrek/air)

Install air according to the [installation instructions](https://github.com/cosmtrek/air#installation).

Run a development server at http://localhost:8080:

```bash
air
```

This project uses [pnpm](https://pnpm.io/) to build a stylesheet with the [Tailwind CSS](https://tailwindcss.com/) classes. For local development, if you modify styles in `form.html`, run `pnpm build` to generate a new stylesheet.
