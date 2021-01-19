# CamundaBpmRestApi.TaskCommentApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](TaskCommentApi.md#createComment) | **POST** /task/{id}/comment/create | 
[**getComment**](TaskCommentApi.md#getComment) | **GET** /task/{id}/comment/{commentId} | 
[**getComments**](TaskCommentApi.md#getComments) | **GET** /task/{id}/comment | 



## createComment

> CommentDto createComment(id, opts)



Creates a comment for a task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task to add the comment to.
let opts = {
  'commentDto': {"message":"a task comment"} // CommentDto | **Note:** Only the `message` property will be used. Every other property passed to this endpoint will be ignored.
};
apiInstance.createComment(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to add the comment to. | 
 **commentDto** | [**CommentDto**](CommentDto.md)| **Note:** Only the &#x60;message&#x60; property will be used. Every other property passed to this endpoint will be ignored. | [optional] 

### Return type

[**CommentDto**](CommentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getComment

> CommentDto getComment(id, commentId)



Retrieves a task comment by task id and comment id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task.
let commentId = "commentId_example"; // String | The id of the comment to be retrieved.
apiInstance.getComment(id, commentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task. | 
 **commentId** | **String**| The id of the comment to be retrieved. | 

### Return type

[**CommentDto**](CommentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComments

> [CommentDto] getComments(id)



Gets the comments for a task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskCommentApi();
let id = "id_example"; // String | The id of the task to retrieve the comments for.
apiInstance.getComments(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the comments for. | 

### Return type

[**[CommentDto]**](CommentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

