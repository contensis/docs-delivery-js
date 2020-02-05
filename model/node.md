---
description: The Node class represents a location within the navigational structure of a website.
---

# Node

A Node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name              | Type      | Description                                           |
|-------------------|-----------|-------------------------------------------------------|
| id                | `string`  | The node identifier                                   |
| parentId          | `string`  | The node's parent identifier                          |
| projectId         | `string`  | The API identifer of the project the node belongs to  |
| slug              | `string`  | The node slug                                         |
| displayName       | `string`  | The node slug display name                            |
| language          | `string`  | The node language                                     |
| path              | `string`  | The path the node is routable on                      |
| childCount        | `integer` | The count of child nodes                              |
| children          | `node[]`  | The child nodes                                       |
| entry             | `entry`   | The attached entry                                    |
| isCanonical       | `boolean` | Whether this node is the canonical node for the entry |
| version.versionNo | `string`  | The version number of the node                        |
| includeInMenu     | `boolean` | Whether to include this node in menu                  |
| proxyId           | `string`  | The assigned proxy identifier                         |