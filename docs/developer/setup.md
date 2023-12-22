---
sidebar_position: 1
---

# Setup

## Development server

:::info

Optional: To run a development server with live-reload using [cosmtrek/air](https://github.com/cosmtrek/air)

1. Install air according to the [installation instructions](https://github.com/cosmtrek/air#installation).

2. Clone the project repo:

```bash
git clone git@github.com-ladddder:everywall/ladder.git
```

3. Run a development server at http://localhost:8080:

```bash
air
```

:::

Run a development server at http://localhost:8080:

```bash
git clone git@github.com-ladddder:everywall/ladder.git
git submodule update --init --recursive
echo "dev  " > handlers/VERSION
echo "dev  " > cmd/VERSION
RULESET="./ruleset.yaml" go run cmd/main.go
```

## Tailwind CSS

This project uses [pnpm](https://pnpm.io/) to build a stylesheet with the [Tailwind CSS](https://tailwindcss.com/) classes. For local development, if you modify styles in `form.html`, `playground.html`, `generate_readable_outline.html` or `error_page.html`, run `pnpm build` to generate a new stylesheet.
