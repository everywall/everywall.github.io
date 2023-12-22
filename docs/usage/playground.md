---
sidebar_position: 5
---

# Playground

Ladder's default modifier strategy works well for most sites.

Where the default configuration is not working well for a site, the Playground is available at http://localhost:8000/playground to experiment with alternate modifiers. Once you have a modifer configuration working well in the Playground, you can export the configuration to use within your rulesets.

Ruleset contributions are welcome, please follow the instructions to [contribute rules](../developer/contribute#contribute-rules).

More details about [Ladder modifiers](/docs/category/modifiers).

## Default ladder modifier strategy

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
