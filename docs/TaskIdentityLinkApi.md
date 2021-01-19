# CamundaBpmRestApi.TaskIdentityLinkApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIdentityLink**](TaskIdentityLinkApi.md#addIdentityLink) | **POST** /task/{id}/identity-links | 
[**deleteIdentityLink**](TaskIdentityLinkApi.md#deleteIdentityLink) | **POST** /task/{id}/identity-links/delete | 
[**getIdentityLinks**](TaskIdentityLinkApi.md#getIdentityLinks) | **GET** /task/{id}/identity-links | 



## addIdentityLink

> addIdentityLink(id, opts)



Adds an identity link to a task by id. Can be used to link any user or group to a task and specify a relation.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to add a link to.
let opts = {
  'identityLinkDto': {"groupId":"aNewGroupId","type":"candidate"} // IdentityLinkDto | 
};
apiInstance.addIdentityLink(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to add a link to. | 
 **identityLinkDto** | [**IdentityLinkDto**](IdentityLinkDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIdentityLink

> deleteIdentityLink(id, opts)



Removes an identity link from a task by id

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to remove a link from.
let opts = {
  'identityLinkDto': {"groupId":"theOldGroupId","type":"candidate"} // IdentityLinkDto | 
};
apiInstance.deleteIdentityLink(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to remove a link from. | 
 **identityLinkDto** | [**IdentityLinkDto**](IdentityLinkDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIdentityLinks

> [IdentityLinkDto] getIdentityLinks(id, opts)



Gets the identity links for a task by id, which are the users and groups that are in *some* relation to it (including assignee and owner).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskIdentityLinkApi();
let id = "id_example"; // String | The id of the task to retrieve the identity links for.
let opts = {
  'type': "type_example" // String | Filter by the type of links to include.
};
apiInstance.getIdentityLinks(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the identity links for. | 
 **type** | **String**| Filter by the type of links to include. | [optional] 

### Return type

[**[IdentityLinkDto]**](IdentityLinkDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

