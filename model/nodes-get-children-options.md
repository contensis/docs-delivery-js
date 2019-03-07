---
description: NodesGetChildrenOptions is a structure that is used to describe the options for requesting node children.
---

# NodesGetChildrenOptions

`NodesGetChildrenOptions` is a structure that is used to describe the options for requesting node children.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| id? | `string` | The node id. |
| node? | [`Node`](node.md) | The node. |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used. |
| fields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it. |
