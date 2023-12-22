---
sidebar_position: 4
---

# Playground

## About

Ladder's default modifier strategy works well for most sites.

Where the default configuration is not working well for a site, the Playground is available to experiment with alternate modifiers. Once you have a modifer configuration working well in the Playground, you can export the rule to use within your rulesets.

> Default: http://localhost:8000/playground

<img src={require('./img/playground-1.png').default} alt="Ladder playground screenshot" width="100%" />

Visit [Ladder modifiers](/docs/category/modifiers) for more details about the individual request and response modifiers.

<img src={require('./img/playground-2.png').default} alt="Ladder playground screenshot" width="100%" />

## Ruleset contributions

Ruleset contributions are welcome. Please follow the instructions in [contribute rules](../developer/contribute#contribute-rules) prior to contributing an exported ruleset.

## Default Ladder modifier strategy

By default, Ladder applies the following modifiers when doing a proxy search:

| Request modifiers               | Response modifiers              |
| ------------------------------- | ------------------------------- |
| `AddCacheBusterQuery()`         | `ForwardResponseHeaders()`      |
| `MasqueradeAsGoogleBot()`       | `BlockThirdPartyScripts()`      |
| `ForwardRequestHeaders()`       | `DeleteIncomingCookies()`       |
| `DeleteOutgoingCookies()`       | `DeleteLocalStorageData()`      |
| `SpoofReferrerFromRedditPost()` | `DeleteSessionStorageData()`    |
|                                 | `BypassCORS()`                  |
|                                 | `BypassContentSecurityPolicy()` |
|                                 | `RewriteHTMLResourceURLs()`     |
|                                 | `PatchDynamicResourceURLs()`    |
|                                 | `PatchTrackerScripts()`         |
