---
description: NodeGetAncestorsOptions is a structure that is used to describe the options for requesting node ancestors.
---

# NodeGetAncestorsOptions

`NodeGetAncestorsOptions` is a structure that is used to describe the options for requesting node ancestors.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| id? | `string` | The node id. |
| node? | [`Node`](node.md) | The node. |
| startLevel? | `number` | The level to start returning the ancestors from. If not specified the default value is *0*. |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used. |
| entryFields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it. |
| entryLinkDepth? | `number` |The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10. The default is 0. |
