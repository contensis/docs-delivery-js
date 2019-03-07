---
description: NodesGetAncestorAtLevelOptions is a structure that is used to describe the options for requesting a node ancestor at a specified level.
---

# NodesGetAncestorAtLevelOptions

`NodesGetAncestorAtLevelOptions` is a structure that is used to describe the options for requesting a node ancestor at a specified level.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| id? | `string` | The node id. |
| node? | [`Node`](node.md) | The node. |
| startLevel | `number` | The start level at which the ancestor lookup starts. |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used. |
| fields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it. |
