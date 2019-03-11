---
description: The Node class represents  a location within the navigational structure of a website.
---

# Node

A Node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| id | `string` | The node identifier |
| projectId | `string` | The API identifer of the project the node belongs to |
| slug | `string` | The node slug |
| title | `string` | The node title |
| path | `string` | The node path, e.g. "/movies/action/taken" |
| parentId? | `string` | The parent node identifier. If the node is the root node then it will be _null_ |
| language | `string` | The language the node represents |
| entryId? | `string` | The optionally assigned [entry](entry.md) identifier |
| childCount | `number` | The count of child nodes |
