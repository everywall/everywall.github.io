---
sidebar_position: 4
---

# Playground

Ladder's default modifier strategy is for most sites.

Where the default configuration is not proxying sites properly, the Playground is available at http://localhost:8000/playground to experiment with alternate modifiers and generate rulesets for individual sites.

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
