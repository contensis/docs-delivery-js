---
description: NodesGetByEntryOptions is a structure that is used to describe the options for requesting the nodes assigned to an entry.
---

# NodesGetByEntryOptions

`NodesGetByEntryOptions` is a structure that is used to describe the options for requesting the nodes assigned to an entry.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| entryId? | `string` | The entry id. |
| entry? | [`Entry`](entry.md) | The entry. |
| language? | `string` | The optional language for the node. If no value is provided then the project default language is used. |
| fields? | `string[]` | The optional list of fields that will be retrieved if the node has an entry attached to it. |
