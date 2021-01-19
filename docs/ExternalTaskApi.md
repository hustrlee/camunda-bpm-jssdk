# CamundaJssdk.ExternalTaskApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeExternalTaskResource**](ExternalTaskApi.md#completeExternalTaskResource) | **POST** /external-task/{id}/complete | 
[**extendLock**](ExternalTaskApi.md#extendLock) | **POST** /external-task/{id}/extendLock | 
[**fetchAndLock**](ExternalTaskApi.md#fetchAndLock) | **POST** /external-task/fetchAndLock | 
[**getExternalTask**](ExternalTaskApi.md#getExternalTask) | **GET** /external-task/{id} | 
[**getExternalTaskErrorDetails**](ExternalTaskApi.md#getExternalTaskErrorDetails) | **GET** /external-task/{id}/errorDetails | 
[**getExternalTasks**](ExternalTaskApi.md#getExternalTasks) | **GET** /external-task | 
[**getExternalTasksCount**](ExternalTaskApi.md#getExternalTasksCount) | **GET** /external-task/count | 
[**getTopicNames**](ExternalTaskApi.md#getTopicNames) | **GET** /external-task/topic-names | 
[**handleExternalTaskBpmnError**](ExternalTaskApi.md#handleExternalTaskBpmnError) | **POST** /external-task/{id}/bpmnError | 
[**handleFailure**](ExternalTaskApi.md#handleFailure) | **POST** /external-task/{id}/failure | 
[**queryExternalTasks**](ExternalTaskApi.md#queryExternalTasks) | **POST** /external-task | 
[**queryExternalTasksCount**](ExternalTaskApi.md#queryExternalTasksCount) | **POST** /external-task/count | 
[**setExternalTaskResourcePriority**](ExternalTaskApi.md#setExternalTaskResourcePriority) | **PUT** /external-task/{id}/priority | 
[**setExternalTaskResourceRetries**](ExternalTaskApi.md#setExternalTaskResourceRetries) | **PUT** /external-task/{id}/retries | 
[**setExternalTaskRetries**](ExternalTaskApi.md#setExternalTaskRetries) | **PUT** /external-task/retries | 
[**setExternalTaskRetriesAsyncOperation**](ExternalTaskApi.md#setExternalTaskRetriesAsyncOperation) | **POST** /external-task/retries-async | 
[**unlock**](ExternalTaskApi.md#unlock) | **POST** /external-task/{id}/unlock | 



## completeExternalTaskResource

> completeExternalTaskResource(id, opts)



Completes an external task by id and updates process variables.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the task to complete.
let opts = {
  'completeExternalTaskDto': {"workerId":"aWorker","variables":{"aVariable":{"value":"aStringValue"},"anotherVariable":{"value":42},"aThirdVariable":{"value":true}},"localVariables":{"aLocalVariable":{"value":"aStringValue"}}} // CompleteExternalTaskDto | 
};
apiInstance.completeExternalTaskResource(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to complete. | 
 **completeExternalTaskDto** | [**CompleteExternalTaskDto**](CompleteExternalTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## extendLock

> extendLock(id, opts)



Extends the timeout of the lock by a given amount of time.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task.
let opts = {
  'extendLockOnExternalTaskDto': {"workerId":"anId","newDuration":100000} // ExtendLockOnExternalTaskDto | 
};
apiInstance.extendLock(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task. | 
 **extendLockOnExternalTaskDto** | [**ExtendLockOnExternalTaskDto**](ExtendLockOnExternalTaskDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fetchAndLock

> [LockedExternalTaskDto] fetchAndLock(opts)



Fetches and locks a specific number of external tasks for execution by a worker. Query can be restricted to specific task topics and for each task topic an individual lock time can be provided.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'fetchExternalTasksDto': {"workerId":"aWorkerId","maxTasks":2,"usePriority":true,"topics":[{"topicName":"createOrder","lockDuration":10000,"variables":["orderId"]}]} // FetchExternalTasksDto | 
};
apiInstance.fetchAndLock(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fetchExternalTasksDto** | [**FetchExternalTasksDto**](FetchExternalTasksDto.md)|  | [optional] 

### Return type

[**[LockedExternalTaskDto]**](LockedExternalTaskDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExternalTask

> ExternalTaskDto getExternalTask(id)



Retrieves an external task by id, corresponding to the &#x60;ExternalTask&#x60; interface in the engine.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to be retrieved.
apiInstance.getExternalTask(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task to be retrieved. | 

### Return type

[**ExternalTaskDto**](ExternalTaskDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExternalTaskErrorDetails

> String getExternalTaskErrorDetails(id)



Retrieves the error details in the context of a running external task by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task for which the error details should be retrieved.
apiInstance.getExternalTaskErrorDetails(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task for which the error details should be retrieved. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## getExternalTasks

> [ExternalTaskDto] getExternalTasks(opts)



Queries for the external tasks that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of executions. The size of the result set can be retrieved by using the [Get External Task Count](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query-count/) method.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'externalTaskId': "externalTaskId_example", // String | Filter by an external task's id.
  'externalTaskIdIn': "externalTaskIdIn_example", // String | Filter by the comma-separated list of external task ids.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'locked': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'notLocked': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true, // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
  'noRetriesLeft': true, // Boolean | Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
  'lockExpirationAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'lockExpirationBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Filter by the id of the activity that an external task is created for.
  'activityIdIn': "activityIdIn_example", // String | Filter by the comma-separated list of ids of the activities that an external task is created for.
  'executionId': "executionId_example", // String | Filter by the id of the execution that an external task belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance that an external task belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Filter by a comma-separated list of process instance ids that an external task may belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition that an external task belongs to.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
  'active': true, // Boolean | Only include active tasks. Value may only be `true`, as `false` matches any external task.
  'suspended': true, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'priorityLowerThanOrEquals': 789, // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getExternalTasks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalTaskId** | **String**| Filter by an external task&#39;s id. | [optional] 
 **externalTaskIdIn** | **String**| Filter by the comma-separated list of external task ids. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **locked** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **notLocked** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **noRetriesLeft** | **Boolean**| Only include external tasks that have 0 retries. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **lockExpirationAfter** | **Date**| Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **lockExpirationBefore** | **Date**| Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Filter by the id of the activity that an external task is created for. | [optional] 
 **activityIdIn** | **String**| Filter by the comma-separated list of ids of the activities that an external task is created for. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that an external task belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance that an external task belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Filter by a comma-separated list of process instance ids that an external task may belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition that an external task belongs to. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. | [optional] 
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ExternalTaskDto]**](ExternalTaskDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExternalTasksCount

> CountResultDto getExternalTasksCount(opts)



Queries for the number of external tasks that fulfill given parameters. Takes the same parameters as the [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'externalTaskId': "externalTaskId_example", // String | Filter by an external task's id.
  'externalTaskIdIn': "externalTaskIdIn_example", // String | Filter by the comma-separated list of external task ids.
  'topicName': "topicName_example", // String | Filter by an external task topic.
  'workerId': "workerId_example", // String | Filter by the id of the worker that the task was most recently locked by.
  'locked': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'notLocked': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true, // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
  'noRetriesLeft': true, // Boolean | Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any external task.
  'lockExpirationAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'lockExpirationBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'activityId': "activityId_example", // String | Filter by the id of the activity that an external task is created for.
  'activityIdIn': "activityIdIn_example", // String | Filter by the comma-separated list of ids of the activities that an external task is created for.
  'executionId': "executionId_example", // String | Filter by the id of the execution that an external task belongs to.
  'processInstanceId': "processInstanceId_example", // String | Filter by the id of the process instance that an external task belongs to.
  'processInstanceIdIn': "processInstanceIdIn_example", // String | Filter by a comma-separated list of process instance ids that an external task may belong to.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the id of the process definition that an external task belongs to.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids.
  'active': true, // Boolean | Only include active tasks. Value may only be `true`, as `false` matches any external task.
  'suspended': true, // Boolean | Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
  'priorityHigherThanOrEquals': 789, // Number | Only include jobs with a priority higher than or equal to the given value. Value must be a valid `long` value.
  'priorityLowerThanOrEquals': 789 // Number | Only include jobs with a priority lower than or equal to the given value. Value must be a valid `long` value.
};
apiInstance.getExternalTasksCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalTaskId** | **String**| Filter by an external task&#39;s id. | [optional] 
 **externalTaskIdIn** | **String**| Filter by the comma-separated list of external task ids. | [optional] 
 **topicName** | **String**| Filter by an external task topic. | [optional] 
 **workerId** | **String**| Filter by the id of the worker that the task was most recently locked by. | [optional] 
 **locked** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **notLocked** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **noRetriesLeft** | **Boolean**| Only include external tasks that have 0 retries. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **lockExpirationAfter** | **Date**| Restrict to external tasks that have a lock that expires after a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **lockExpirationBefore** | **Date**| Restrict to external tasks that have a lock that expires before a given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **activityId** | **String**| Filter by the id of the activity that an external task is created for. | [optional] 
 **activityIdIn** | **String**| Filter by the comma-separated list of ids of the activities that an external task is created for. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that an external task belongs to. | [optional] 
 **processInstanceId** | **String**| Filter by the id of the process instance that an external task belongs to. | [optional] 
 **processInstanceIdIn** | **String**| Filter by a comma-separated list of process instance ids that an external task may belong to. | [optional] 
 **processDefinitionId** | **String**| Filter by the id of the process definition that an external task belongs to. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. An external task must have one of the given tenant ids. | [optional] 
 **active** | **Boolean**| Only include active tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **suspended** | **Boolean**| Only include suspended tasks. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **priorityHigherThanOrEquals** | **Number**| Only include jobs with a priority higher than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 
 **priorityLowerThanOrEquals** | **Number**| Only include jobs with a priority lower than or equal to the given value. Value must be a valid &#x60;long&#x60; value. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopicNames

> [String] getTopicNames(opts)



Queries for distinct topic names of external tasks that fulfill given parameters. Query can be restricted to only tasks with retries left, tasks that are locked, or tasks that are unlocked. The parameters withLockedTasks and withUnlockedTasks are exclusive. Setting them both to true will return an empty list. Providing no parameters will return a list of all distinct topic names with external tasks.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'withLockedTasks': true, // Boolean | Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be `true`, as `false` matches any external task.
  'withUnlockedTasks': true, // Boolean | Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be `true`, as `false` matches any external task.
  'withRetriesLeft': true // Boolean | Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be `true`, as `false` matches any external task.
};
apiInstance.getTopicNames(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withLockedTasks** | **Boolean**| Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withUnlockedTasks** | **Boolean**| Only include external tasks that are currently not locked (i.e., they have no lock or it has expired). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 
 **withRetriesLeft** | **Boolean**| Only include external tasks that have a positive (&amp;gt; 0) number of retries (or &#x60;null&#x60;). Value may only be &#x60;true&#x60;, as &#x60;false&#x60; matches any external task. | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## handleExternalTaskBpmnError

> handleExternalTaskBpmnError(id, opts)



Reports a business error in the context of a running external task by id. The error code must be specified to identify the BPMN error handler.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task in which context a BPMN error is reported.
let opts = {
  'externalTaskBpmnError': {"workerId":"aWorker","errorCode":"bpmn-error","errorMessage":"anErrorMessage","variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}}} // ExternalTaskBpmnError | 
};
apiInstance.handleExternalTaskBpmnError(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task in which context a BPMN error is reported. | 
 **externalTaskBpmnError** | [**ExternalTaskBpmnError**](ExternalTaskBpmnError.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## handleFailure

> handleFailure(id, opts)



Reports a failure to execute an external task by id. A number of retries and a timeout until the task can be retried can be specified. If retries are set to 0, an incident for this task is created.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to report a failure for.
let opts = {
  'externalTaskFailureDto': {"workerId":"aWorker","errorMessage":"Does not compute","retries":3,"retryTimeout":60000} // ExternalTaskFailureDto | 
};
apiInstance.handleFailure(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task to report a failure for. | 
 **externalTaskFailureDto** | [**ExternalTaskFailureDto**](ExternalTaskFailureDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryExternalTasks

> [ExternalTaskDto] queryExternalTasks(opts)



Queries for external tasks that fulfill given parameters in the form of a JSON object.  This method is slightly more powerful than the [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method because it allows to specify a hierarchical result sorting.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'externalTaskQueryDto': {"processDefinitionId":"aProcessDefinitionId","sorting":[{"sortBy":"processDefinitionKey","sortOrder":"asc"},{"sortBy":"lockExpirationTime","sortOrder":"desc"}]} // ExternalTaskQueryDto | 
};
apiInstance.queryExternalTasks(opts).then((data) => {
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
 **externalTaskQueryDto** | [**ExternalTaskQueryDto**](ExternalTaskQueryDto.md)|  | [optional] 

### Return type

[**[ExternalTaskDto]**](ExternalTaskDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryExternalTasksCount

> CountResultDto queryExternalTasksCount(opts)



Queries for the number of external tasks that fulfill given parameters. This method takes the same message body as the [Get External Tasks (POST)](https://docs.camunda.org/manual/7.14/reference/rest/external-task/post-query/) method.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'externalTaskQueryDto': {"topicName":"aTopicName","withRetriesLeft":true} // ExternalTaskQueryDto | 
};
apiInstance.queryExternalTasksCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalTaskQueryDto** | [**ExternalTaskQueryDto**](ExternalTaskQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setExternalTaskResourcePriority

> setExternalTaskResourcePriority(id, opts)



Sets the priority of an existing external task by id. The default value of a priority is 0.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to set the priority for.
let opts = {
  'priorityDto': {"priority":5} // PriorityDto | 
};
apiInstance.setExternalTaskResourcePriority(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task to set the priority for. | 
 **priorityDto** | [**PriorityDto**](PriorityDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setExternalTaskResourceRetries

> setExternalTaskResourceRetries(id, opts)



Sets the number of retries left to execute an external task by id. If retries are set to 0, an  incident is created.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to set the number of retries for.
let opts = {
  'retriesDto': {"retries":123} // RetriesDto | 
};
apiInstance.setExternalTaskResourceRetries(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task to set the number of retries for. | 
 **retriesDto** | [**RetriesDto**](RetriesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setExternalTaskRetries

> setExternalTaskRetries(opts)



Sets the number of retries left to execute external tasks by id synchronously. If retries are set to 0,  an incident is created.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'setRetriesForExternalTasksDto': {"retries":123,"externalTaskIds":["anExternalTask","anotherExternalTask"]} // SetRetriesForExternalTasksDto | 
};
apiInstance.setExternalTaskRetries(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setRetriesForExternalTasksDto** | [**SetRetriesForExternalTasksDto**](SetRetriesForExternalTasksDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setExternalTaskRetriesAsyncOperation

> BatchDto setExternalTaskRetriesAsyncOperation(opts)



Sets the number of retries left to execute external tasks by id asynchronously. If retries are set to 0, an incident is created.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let opts = {
  'setRetriesForExternalTasksDto': {"retries":123,"externalTaskIds":["anExternalTask","anotherExternalTask"]} // SetRetriesForExternalTasksDto | 
};
apiInstance.setExternalTaskRetriesAsyncOperation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setRetriesForExternalTasksDto** | [**SetRetriesForExternalTasksDto**](SetRetriesForExternalTasksDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unlock

> unlock(id)



Unlocks an external task by id. Clears the task&#39;s lock expiration time and worker id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ExternalTaskApi();
let id = "id_example"; // String | The id of the external task to unlock.
apiInstance.unlock(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the external task to unlock. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

