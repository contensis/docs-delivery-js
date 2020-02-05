---
description: The Node class represents a location within the navigational structure of a website.
---

# Node

A Node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name              | Type      | Description                                                                                                                      |
|-------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| id                | `string`  | The node identifier                                                                                                              |
| parentId          | `string`  | The node's parent identifier                                                                                                     |
| projectId         | `string`  | The project identifier, e.g. 'movieDb'. Found in the project overview screen of the management console                           |
| slug              | `string`  | The slug of the node, unique within it's containing node, e.g. 'about-us'                                                        |
| displayName       | `string`  | The node slug display name                                                                                                       |
| language          | `string`  | The node language                                                                                                                |
| path              | `string`  | The path the node is navigable on                                                                                                |
| childCount        | `integer` | The count of child nodes                                                                                                         |
| children          | `node[]`  | If a depth is specified when requesting a node then the children field would include the descendant nodes to the specified depth |
| entry             | `entry`   | The entry associated with the node, if requested                                                                                 |
| isCanonical       | `boolean` | Whether this node is the canonical node for the entry                                                                            |
| version.versionNo | `string`  | The version number of the node                                                                                                   |
| includeInMenu     | `boolean` | 'true' if the node should be included in menus; Does not stop the node from being navigable.                                     |