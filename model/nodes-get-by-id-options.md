---
description: NodesGetByIdOptions is a structure that is used to describe the options for requesting a node by id.
---

# NodesGetByIdOptions

`NodesGetByIdOptions` is a structure that is used to describe the options for requesting a node by id.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| id | `string` | The node id. |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used. |
| fields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it. |
| depth? | `number` | The depth of descendants to include for the node, to a maximum overall depth of 9. The default is 0. This reduces calls to the HTTP service and improves performance. |
