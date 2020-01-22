---
description: NodeGetByPathOptions is a structure that is used to describe the options for requesting a node by path.
---

# NodeGetByPathOptions

`NodeGetByPathOptions` is a structure that is used to describe the options for requesting a node by path.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| path | `string` | The node path |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used |
| depth? | `number` | The depth of descendants to include for the node. The default is *0*. This reduces calls to the HTTP service and improves performance |
| entryFields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it |
| entryLinkDepth? | `number` |The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10. The default is *0* |
| allowPartialMatch? | `boolean` | [Optional] When set to 'true', returns the nearest ancestor up to, but not including, root on the path if the node at the specified path does not exist |
