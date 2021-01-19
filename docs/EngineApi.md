# CamundaBpmRestApi.EngineApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessEngineNames**](EngineApi.md#getProcessEngineNames) | **GET** /engine | 



## getProcessEngineNames

> [ProcessEngineDto] getProcessEngineNames()



Retrieves the names of all process engines available on your platform. **Note**: You cannot prepend &#x60;/engine/{name}&#x60; to this method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.EngineApi();
apiInstance.getProcessEngineNames().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ProcessEngineDto]**](ProcessEngineDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

