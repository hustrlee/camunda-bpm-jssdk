# CamundaBpmRestApi.HistoricActivityInstanceApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricActivityInstance**](HistoricActivityInstanceApi.md#getHistoricActivityInstance) | **GET** /history/activity-instance/{id} | Get
[**getHistoricActivityInstances**](HistoricActivityInstanceApi.md#getHistoricActivityInstances) | **GET** /history/activity-instance | Get List
[**getHistoricActivityInstancesCount**](HistoricActivityInstanceApi.md#getHistoricActivityInstancesCount) | **GET** /history/activity-instance/count | Get List Count
[**queryHistoricActivityInstances**](HistoricActivityInstanceApi.md#queryHistoricActivityInstances) | **POST** /history/activity-instance | Get List (POST)
[**queryHistoricActivityInstancesCount**](HistoricActivityInstanceApi.md#queryHistoricActivityInstancesCount) | **POST** /history/activity-instance/count | Get List Count (POST)



## getHistoricActivityInstance

> HistoricActivityInstanceDto getHistoricActivityInstance(id)

Get

Retrieves a historic activity instance by id, according to the &#x60;HistoricActivityInstance&#x60; interface in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
let id = "id_example"; // String | The id of the historic activity instance to be retrieved.
apiInstance.getHistoricActivityInstance(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the historic activity instance to be retrieved. | 

### Return type

[**HistoricActivityInstanceDto**](HistoricActivityInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistoricActivityInstances

> [HistoricActivityInstanceDto] getHistoricActivityInstances(opts)

Get List

Queries for historic activity instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
let opts = {
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'activityInstanceId': "activityInstanceId_example", // String | Filter by activity instance id.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'executionId': "executionId_example", // String | Filter by the id of the execution that executed the activity instance.
  'activityId': "activityId_example", // String | Filter by the activity id (according to BPMN 2.0 XML).
  'activityName': "activityName_example", // String | Filter by the activity name (according to BPMN 2.0 XML).
  'activityType': "activityType_example", // String | Filter by activity type.
  'taskAssignee': "taskAssignee_example", // String | Only include activity instances that are user tasks and assigned to a given user.
  'finished': true, // Boolean | Only include finished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'unfinished': true, // Boolean | Only include unfinished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'canceled': true, // Boolean | Only include canceled activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'completeScope': true, // Boolean | Only include activity instances which completed a scope. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids.
  'withoutTenantId': true // Boolean | Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricActivityInstances(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 
 **activityInstanceId** | **String**| Filter by activity instance id. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that executed the activity instance. | [optional] 
 **activityId** | **String**| Filter by the activity id (according to BPMN 2.0 XML). | [optional] 
 **activityName** | **String**| Filter by the activity name (according to BPMN 2.0 XML). | [optional] 
 **activityType** | **String**| Filter by activity type. | [optional] 
 **taskAssignee** | **String**| Only include activity instances that are user tasks and assigned to a given user. | [optional] 
 **finished** | **Boolean**| Only include finished activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **canceled** | **Boolean**| Only include canceled activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **completeScope** | **Boolean**| Only include activity instances which completed a scope. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **startedBefore** | **Date**| Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic activity instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**[HistoricActivityInstanceDto]**](HistoricActivityInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistoricActivityInstancesCount

> CountResultDto getHistoricActivityInstancesCount(opts)

Get List Count

Queries for the number of historic activity instances that fulfill the given parameters. Takes the same parameters as the [Get Historic Activity Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query/)  method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
let opts = {
  'activityInstanceId': "activityInstanceId_example", // String | Filter by activity instance id.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'executionId': "executionId_example", // String | Filter by the id of the execution that executed the activity instance.
  'activityId': "activityId_example", // String | Filter by the activity id (according to BPMN 2.0 XML).
  'activityName': "activityName_example", // String | Filter by the activity name (according to BPMN 2.0 XML).
  'activityType': "activityType_example", // String | Filter by activity type.
  'taskAssignee': "taskAssignee_example", // String | Only include activity instances that are user tasks and assigned to a given user.
  'finished': true, // Boolean | Only include finished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'unfinished': true, // Boolean | Only include unfinished activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'canceled': true, // Boolean | Only include canceled activity instances. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'completeScope': true, // Boolean | Only include activity instances which completed a scope. Value may only be `true`, as `false` behaves the same as when the property is not set.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids.
  'withoutTenantId': true // Boolean | Only include historic activity instances that belong to no tenant. Value may only be `true`, as `false` is the default behavior.
};
apiInstance.getHistoricActivityInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityInstanceId** | **String**| Filter by activity instance id. | [optional] 
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **executionId** | **String**| Filter by the id of the execution that executed the activity instance. | [optional] 
 **activityId** | **String**| Filter by the activity id (according to BPMN 2.0 XML). | [optional] 
 **activityName** | **String**| Filter by the activity name (according to BPMN 2.0 XML). | [optional] 
 **activityType** | **String**| Filter by activity type. | [optional] 
 **taskAssignee** | **String**| Only include activity instances that are user tasks and assigned to a given user. | [optional] 
 **finished** | **Boolean**| Only include finished activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **canceled** | **Boolean**| Only include canceled activity instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **completeScope** | **Boolean**| Only include activity instances which completed a scope. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; behaves the same as when the property is not set. | [optional] 
 **startedBefore** | **Date**| Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of ids. An activity instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic activity instances that belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryHistoricActivityInstances

> [HistoricActivityInstanceDto] queryHistoricActivityInstances(opts)

Get List (POST)

Queries for historic activity instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Historic Activity Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/activity-instance/get-activity-instance-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
let opts = {
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'historicActivityInstanceQueryDto': {"activityType":"userTask","taskAssignee":"peter","sorting":[{"sortBy":"activityId","sortOrder":"asc"},{"sortBy":"executionId","sortOrder":"desc"}]} // HistoricActivityInstanceQueryDto | 
};
apiInstance.queryHistoricActivityInstances(opts).then((data) => {
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
 **historicActivityInstanceQueryDto** | [**HistoricActivityInstanceQueryDto**](HistoricActivityInstanceQueryDto.md)|  | [optional] 

### Return type

[**[HistoricActivityInstanceDto]**](HistoricActivityInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryHistoricActivityInstancesCount

> CountResultDto queryHistoricActivityInstancesCount(opts)

Get List Count (POST)

Queries for the number of historic activity instances that fulfill the given parameters.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricActivityInstanceApi();
let opts = {
  'historicActivityInstanceQueryDto': {"activityType":"userTask"} // HistoricActivityInstanceQueryDto | 
};
apiInstance.queryHistoricActivityInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **historicActivityInstanceQueryDto** | [**HistoricActivityInstanceQueryDto**](HistoricActivityInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

