# CamundaBpmRestApi.SchemaLogApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchemaLog**](SchemaLogApi.md#getSchemaLog) | **GET** /schema/log | 
[**querySchemaLog**](SchemaLogApi.md#querySchemaLog) | **POST** /schema/log | 



## getSchemaLog

> [SchemaLogEntryDto] getSchemaLog(opts)



Queries for schema log entries that fulfill given parameters.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.SchemaLogApi();
let opts = {
  'version': "version_example", // String | Only return schema log entries with a specific version.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getSchemaLog(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| Only return schema log entries with a specific version. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[SchemaLogEntryDto]**](SchemaLogEntryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## querySchemaLog

> [SchemaLogEntryDto] querySchemaLog(opts)



Queries for schema log entries that fulfill given parameters.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.SchemaLogApi();
let opts = {
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'schemaLogQueryDto': {"version":"7.11.0","sortBy":"timestamp","sortOrder":"asc"} // SchemaLogQueryDto | 
};
apiInstance.querySchemaLog(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **schemaLogQueryDto** | [**SchemaLogQueryDto**](SchemaLogQueryDto.md)|  | [optional] 

### Return type

[**[SchemaLogEntryDto]**](SchemaLogEntryDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

