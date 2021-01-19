# CamundaJssdk.VersionApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRestAPIVersion**](VersionApi.md#getRestAPIVersion) | **GET** /version | 



## getRestAPIVersion

> VersionDto getRestAPIVersion()



Retrieves the version of the Rest API.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.VersionApi();
apiInstance.getRestAPIVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**VersionDto**](VersionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

