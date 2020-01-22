---
description: Status codes and error responses you can encounter when using the API.
---
# Errors

Status codes and error responses you can encounter when using the API.

The Delivery API returns error detail in a generic format so that it can be easily handled in a consistent way. Detailed error information is not exposed in the response to ensure security sensitive details are not leaked.

## Typical HTTP status codes
Below are the current status codes returned from the Delivery API.

| Status code | Error code | Description |
| ----------- | -------------- | ----------- |
| 400 | BadRequest |  The request could not be understood or was missing required parameters |
| 403 | AccessDenied | The action is not authorised for the current user |
| 404 | NotFound | The resource was not found |
| 500 | ServerError | An error occurred on the server. Something went wrong processing the request |


## Error response
Each response follows the same rules.

| Name | Type | Format | Description |
| :--- | :--- | :----- | :---------- |
| logId | string | GUID | The logId as a 128 bit GUID.<br />This can be used within the Contensis [log search](https://zenhub.zengenti.com/contensis/12.0/kb/tools-and-utilities/log-search/log-search-overview.aspx) to understand further details about the error |
| message | string | | A description of the error |
| data | any | | An object containing specific data relevant to the error |
| type | string | | The type of error - for the Delivery API, this will always be *error* |

## Example error response

`500 - ServerError`

```json
{
  "logId": "63cb1df0-b82a-459e-accc-635e187f3b8b",
  "message": "An error occurred requesting the entry",
  "data": {
      "entryId": "ba8a92bd-0e5f-465e-acec-3cdb3db38df6",
      "projectId" "moveiDb"
  },
  "type": "error"
}
```
