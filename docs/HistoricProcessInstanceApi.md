# CamundaBpmRestApi.HistoricProcessInstanceApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteHistoricProcessInstance**](HistoricProcessInstanceApi.md#deleteHistoricProcessInstance) | **DELETE** /history/process-instance/{id} | Delete
[**deleteHistoricProcessInstancesAsync**](HistoricProcessInstanceApi.md#deleteHistoricProcessInstancesAsync) | **POST** /history/process-instance/delete | Delete Async (POST)
[**deleteHistoricVariableInstancesOfHistoricProcessInstance**](HistoricProcessInstanceApi.md#deleteHistoricVariableInstancesOfHistoricProcessInstance) | **DELETE** /history/process-instance/{id}/variable-instances | Delete Variable Instances
[**getHistoricProcessInstance**](HistoricProcessInstanceApi.md#getHistoricProcessInstance) | **GET** /history/process-instance/{id} | Get
[**getHistoricProcessInstanceDurationReport**](HistoricProcessInstanceApi.md#getHistoricProcessInstanceDurationReport) | **GET** /history/process-instance/report | Get Duration Report
[**getHistoricProcessInstances**](HistoricProcessInstanceApi.md#getHistoricProcessInstances) | **GET** /history/process-instance | Get List
[**getHistoricProcessInstancesCount**](HistoricProcessInstanceApi.md#getHistoricProcessInstancesCount) | **GET** /history/process-instance/count | Get List Count
[**queryHistoricProcessInstances**](HistoricProcessInstanceApi.md#queryHistoricProcessInstances) | **POST** /history/process-instance | Get List (POST)
[**queryHistoricProcessInstancesCount**](HistoricProcessInstanceApi.md#queryHistoricProcessInstancesCount) | **POST** /history/process-instance/count | Get List Count (POST)
[**setRemovalTimeAsync**](HistoricProcessInstanceApi.md#setRemovalTimeAsync) | **POST** /history/process-instance/set-removal-time | Set Removal Time Async (POST)



## deleteHistoricProcessInstance

> deleteHistoricProcessInstance(id, opts)

Delete

Deletes a process instance from the history by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let id = "id_example"; // String | The id of the historic process instance to be deleted.
let opts = {
  'failIfNotExists': true // Boolean | If set to `false`, the request will still be successful if the process id is not found.
};
apiInstance.deleteHistoricProcessInstance(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the historic process instance to be deleted. | 
 **failIfNotExists** | **Boolean**| If set to &#x60;false&#x60;, the request will still be successful if the process id is not found. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteHistoricProcessInstancesAsync

> BatchDto deleteHistoricProcessInstancesAsync(opts)

Delete Async (POST)

Delete multiple historic process instances asynchronously (batch). At least &#x60;historicProcessInstanceIds&#x60; or &#x60;historicProcessInstanceQuery&#x60; has to be provided. If both are provided then all instances matching query criterion and instances from the list will be deleted.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'deleteHistoricProcessInstancesDto': {"deleteReason":"aReason","historicProcessInstanceIds":["aProcess","secondProcess"],"historicProcessInstanceQuery":{"startedAfter":"2016-10-11T11:44:13.000+0200","finishedBefore":"2016-10-13T11:44:17.000+0200"}} // DeleteHistoricProcessInstancesDto | 
};
apiInstance.deleteHistoricProcessInstancesAsync(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteHistoricProcessInstancesDto** | [**DeleteHistoricProcessInstancesDto**](DeleteHistoricProcessInstancesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteHistoricVariableInstancesOfHistoricProcessInstance

> deleteHistoricVariableInstancesOfHistoricProcessInstance(id)

Delete Variable Instances

Deletes all variables of a process instance from the history by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance for which all historic variables are to be deleted.
apiInstance.deleteHistoricVariableInstancesOfHistoricProcessInstance(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance for which all historic variables are to be deleted. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistoricProcessInstance

> HistoricProcessInstanceDto getHistoricProcessInstance(id)

Get

Retrieves a historic process instance by id, according to the &#x60;HistoricProcessInstance&#x60; interface in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let id = "id_example"; // String | The id of the historic process instance to be retrieved.
apiInstance.getHistoricProcessInstance(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the historic process instance to be retrieved. | 

### Return type

[**HistoricProcessInstanceDto**](HistoricProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistoricProcessInstanceDurationReport

> Object getHistoricProcessInstanceDurationReport(reportType, periodUnit, opts)

Get Duration Report

Retrieves a report about the duration of completed process instances, grouped by a period. These reports include the maximum, minimum and average duration of all completed process instances which were started in a given period.  **Note:** This only includes historic data.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let reportType = "reportType_example"; // String | **Mandatory.** Specifies the type of the report to retrieve. To retrieve a report about the duration of process instances, the value must be set to `duration`.
let periodUnit = "periodUnit_example"; // String | **Mandatory.** Specifies the granularity of the report. Valid values are `month` and `quarter`.
let opts = {
  'processDefinitionIdIn': "processDefinitionIdIn_example", // String | Filter by process definition ids. Must be a comma-separated list of process definition ids.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by process definition keys. Must be a comma-separated list of process definition keys.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started before the given date. By [default](), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00") // Date | Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
};
apiInstance.getHistoricProcessInstanceDurationReport(reportType, periodUnit, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportType** | **String**| **Mandatory.** Specifies the type of the report to retrieve. To retrieve a report about the duration of process instances, the value must be set to &#x60;duration&#x60;. | 
 **periodUnit** | **String**| **Mandatory.** Specifies the granularity of the report. Valid values are &#x60;month&#x60; and &#x60;quarter&#x60;. | 
 **processDefinitionIdIn** | **String**| Filter by process definition ids. Must be a comma-separated list of process definition ids. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by process definition keys. Must be a comma-separated list of process definition keys. | [optional] 
 **startedBefore** | **Date**| Restrict to instances that were started before the given date. By [default](), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2016-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2016-01-23T14:42:45.000+0200&#x60;. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getHistoricProcessInstances

> [HistoricProcessInstanceDto] getHistoricProcessInstances(opts)

Get List

Queries for historic process instances that fulfill the given parameters. The size of the result set can be retrieved by using the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceIds': "processInstanceIds_example", // String | Filter by process instance ids. Filter by a comma-separated list of `Strings`.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the instances run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
  'processDefinitionName': "processDefinitionName_example", // String | Filter by the name of the process definition the instances run on.
  'processDefinitionNameLike': "processDefinitionNameLike_example", // String | Filter by process definition names that the parameter is a substring of.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Filter by process instance business key.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'rootProcessInstances': true, // Boolean | Restrict the query to all process instances that are top level process instances.
  'finished': true, // Boolean | Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
  'unfinished': true, // Boolean | Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
  'withIncidents': true, // Boolean | Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
  'withRootIncidents': true, // Boolean | Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentStatus': "incidentStatus_example", // String | Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedActivityAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedActivityBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedJobAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedJobBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedBy': "startedBy_example", // String | Only include process instances that were started by the given user.
  'superProcessInstanceId': "superProcessInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstanceId': "subProcessInstanceId_example", // String | Restrict query to one process instance that has a sub process instance with the given id.
  'superCaseInstanceId': "superCaseInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstanceId': "subCaseInstanceId_example", // String | Restrict query to one process instance that has a sub case instance with the given id.
  'caseInstanceId': "caseInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
  'withoutTenantId': true, // Boolean | Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'executedActivityIdIn': "executedActivityIdIn_example", // String | Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
  'activeActivityIdIn': "activeActivityIdIn_example", // String | Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
  'active': true, // Boolean | Restrict to instances that are active.
  'suspended': true, // Boolean | Restrict to instances that are suspended.
  'completed': true, // Boolean | Restrict to instances that are completed.
  'externallyTerminated': true, // Boolean | Restrict to instances that are externallyTerminated.
  'internallyTerminated': true, // Boolean | Restrict to instances that are internallyTerminated.
  'variables': "variables_example", // String | Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters. 
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': true // Boolean | Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
};
apiInstance.getHistoricProcessInstances(opts).then((data) => {
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
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceIds** | **String**| Filter by process instance ids. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the instances run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processDefinitionName** | **String**| Filter by the name of the process definition the instances run on. | [optional] 
 **processDefinitionNameLike** | **String**| Filter by process definition names that the parameter is a substring of. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processInstanceBusinessKey** | **String**| Filter by process instance business key. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] 
 **finished** | **Boolean**| Only include finished process instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished process instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withIncidents** | **Boolean**| Only include process instances which have an incident. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withRootIncidents** | **Boolean**| Only include process instances which have a root incident. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentStatus** | **String**| Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **startedBefore** | **Date**| Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedActivityAfter** | **Date**| Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedActivityBefore** | **Date**| Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedJobAfter** | **Date**| Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedJobBefore** | **Date**| Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedBy** | **String**| Only include process instances that were started by the given user. | [optional] 
 **superProcessInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstanceId** | **String**| Restrict query to one process instance that has a sub process instance with the given id. | [optional] 
 **superCaseInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstanceId** | **String**| Restrict query to one process instance that has a sub case instance with the given id. | [optional] 
 **caseInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **tenantIdIn** | **String**| Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic process instances which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **executedActivityIdIn** | **String**| Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **activeActivityIdIn** | **String**| Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **active** | **Boolean**| Restrict to instances that are active. | [optional] 
 **suspended** | **Boolean**| Restrict to instances that are suspended. | [optional] 
 **completed** | **Boolean**| Restrict to instances that are completed. | [optional] 
 **externallyTerminated** | **Boolean**| Restrict to instances that are externallyTerminated. | [optional] 
 **internallyTerminated** | **Boolean**| Restrict to instances that are internallyTerminated. | [optional] 
 **variables** | **String**| Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;.  Key and value may not contain underscore or comma characters.  | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in variables case-insensitively. If set to &#x60;true&#x60; variableName and variablename are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in variables case-insensitively. If set to &#x60;true&#x60; variableValue and variablevalue are treated as equal. | [optional] 

### Return type

[**[HistoricProcessInstanceDto]**](HistoricProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHistoricProcessInstancesCount

> CountResultDto getHistoricProcessInstancesCount(opts)

Get List Count

Queries for the number of historic process instances that fulfill the given parameters. Takes the same parameters as the [Get Process Instances](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'processInstanceId': "processInstanceId_example", // String | Filter by process instance id.
  'processInstanceIds': "processInstanceIds_example", // String | Filter by process instance ids. Filter by a comma-separated list of `Strings`.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the process definition the instances run on.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
  'processDefinitionName': "processDefinitionName_example", // String | Filter by the name of the process definition the instances run on.
  'processDefinitionNameLike': "processDefinitionNameLike_example", // String | Filter by process definition names that the parameter is a substring of.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
  'processInstanceBusinessKey': "processInstanceBusinessKey_example", // String | Filter by process instance business key.
  'processInstanceBusinessKeyLike': "processInstanceBusinessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'rootProcessInstances': true, // Boolean | Restrict the query to all process instances that are top level process instances.
  'finished': true, // Boolean | Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
  'unfinished': true, // Boolean | Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
  'withIncidents': true, // Boolean | Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
  'withRootIncidents': true, // Boolean | Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentStatus': "incidentStatus_example", // String | Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'startedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'finishedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedActivityAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedActivityBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedJobAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'executedJobBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
  'startedBy': "startedBy_example", // String | Only include process instances that were started by the given user.
  'superProcessInstanceId': "superProcessInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstanceId': "subProcessInstanceId_example", // String | Restrict query to one process instance that has a sub process instance with the given id.
  'superCaseInstanceId': "superCaseInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstanceId': "subCaseInstanceId_example", // String | Restrict query to one process instance that has a sub case instance with the given id.
  'caseInstanceId': "caseInstanceId_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
  'withoutTenantId': true, // Boolean | Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
  'executedActivityIdIn': "executedActivityIdIn_example", // String | Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
  'activeActivityIdIn': "activeActivityIdIn_example", // String | Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
  'active': true, // Boolean | Restrict to instances that are active.
  'suspended': true, // Boolean | Restrict to instances that are suspended.
  'completed': true, // Boolean | Restrict to instances that are completed.
  'externallyTerminated': true, // Boolean | Restrict to instances that are externallyTerminated.
  'internallyTerminated': true, // Boolean | Restrict to instances that are internallyTerminated.
  'variables': "variables_example", // String | Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.  Key and value may not contain underscore or comma characters. 
  'variableNamesIgnoreCase': true, // Boolean | Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': true // Boolean | Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
};
apiInstance.getHistoricProcessInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| Filter by process instance id. | [optional] 
 **processInstanceIds** | **String**| Filter by process instance ids. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processDefinitionId** | **String**| Filter by the process definition the instances run on. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processDefinitionName** | **String**| Filter by the name of the process definition the instances run on. | [optional] 
 **processDefinitionNameLike** | **String**| Filter by process definition names that the parameter is a substring of. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of &#x60;Strings&#x60;. | [optional] 
 **processInstanceBusinessKey** | **String**| Filter by process instance business key. | [optional] 
 **processInstanceBusinessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] 
 **finished** | **Boolean**| Only include finished process instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **unfinished** | **Boolean**| Only include unfinished process instances. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withIncidents** | **Boolean**| Only include process instances which have an incident. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **withRootIncidents** | **Boolean**| Only include process instances which have a root incident. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentStatus** | **String**| Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **startedBefore** | **Date**| Restrict to instances that were started before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedAfter** | **Date**| Restrict to instances that were started after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedBefore** | **Date**| Restrict to instances that were finished before the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **finishedAfter** | **Date**| Restrict to instances that were finished after the given date. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedActivityAfter** | **Date**| Restrict to instances that executed an activity after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedActivityBefore** | **Date**| Restrict to instances that executed an activity before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedJobAfter** | **Date**| Restrict to instances that executed an job after the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **executedJobBefore** | **Date**| Restrict to instances that executed an job before the given date (inclusive). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.000+0200&#x60;. | [optional] 
 **startedBy** | **String**| Only include process instances that were started by the given user. | [optional] 
 **superProcessInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstanceId** | **String**| Restrict query to one process instance that has a sub process instance with the given id. | [optional] 
 **superCaseInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstanceId** | **String**| Restrict query to one process instance that has a sub case instance with the given id. | [optional] 
 **caseInstanceId** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **tenantIdIn** | **String**| Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **withoutTenantId** | **Boolean**| Only include historic process instances which belong to no tenant. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **executedActivityIdIn** | **String**| Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **activeActivityIdIn** | **String**| Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of &#x60;Strings&#x60; | [optional] 
 **active** | **Boolean**| Restrict to instances that are active. | [optional] 
 **suspended** | **Boolean**| Restrict to instances that are suspended. | [optional] 
 **completed** | **Boolean**| Restrict to instances that are completed. | [optional] 
 **externallyTerminated** | **Boolean**| Restrict to instances that are externallyTerminated. | [optional] 
 **internallyTerminated** | **Boolean**| Restrict to instances that are internallyTerminated. | [optional] 
 **variables** | **String**| Only include process instances that have/had variables with certain values. Variable filtering expressions are comma-separated and are structured as follows: A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note:** Values are always treated as String objects on server side.  Valid operator values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;.  Key and value may not contain underscore or comma characters.  | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names provided in variables case-insensitively. If set to &#x60;true&#x60; variableName and variablename are treated as equal. | [optional] 
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values provided in variables case-insensitively. If set to &#x60;true&#x60; variableValue and variablevalue are treated as equal. | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryHistoricProcessInstances

> [HistoricProcessInstanceDto] queryHistoricProcessInstances(opts)

Get List (POST)

Queries for historic process instances that fulfill the given parameters. This method is slightly more powerful than the [Get Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) because it allows filtering by multiple process variables of types &#x60;String&#x60;, &#x60;Number&#x60; or &#x60;Boolean&#x60;.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'historicProcessInstanceQueryDto': {"finishedAfter":"2013-01-01T00:00:00.000+0200","finishedBefore":"2013-04-01T23:59:59.000+0200","executedActivityAfter":"2013-03-23T13:42:44.000+0200","variables":[{"name":"myVariable","operator":"eq","value":"camunda"},{"name":"mySecondVariable","operator":"neq","value":124}],"sorting":[{"sortBy":"businessKey","sortOrder":"asc"},{"sortBy":"startTime","sortOrder":"desc"}]} // HistoricProcessInstanceQueryDto | 
};
apiInstance.queryHistoricProcessInstances(opts).then((data) => {
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
 **historicProcessInstanceQueryDto** | [**HistoricProcessInstanceQueryDto**](HistoricProcessInstanceQueryDto.md)|  | [optional] 

### Return type

[**[HistoricProcessInstanceDto]**](HistoricProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryHistoricProcessInstancesCount

> CountResultDto queryHistoricProcessInstancesCount(opts)

Get List Count (POST)

Queries for the number of historic process instances that fulfill the given parameters. This method takes the same message body as the [Get Process Instances (POST)](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method and therefore it is slightly more powerful than the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/post-process-instance-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'historicProcessInstanceQueryDto': {"finishedAfter":"2013-01-01T00:00:00.000+0200","finishedBefore":"2013-04-01T23:59:59.000+0200","executedActivityAfter":"2013-03-23T13:42:44.000+0200","variables":[{"name":"myVariable","operator":"eq","value":"camunda"},{"name":"mySecondVariable","operator":"neq","value":124}]} // HistoricProcessInstanceQueryDto | 
};
apiInstance.queryHistoricProcessInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **historicProcessInstanceQueryDto** | [**HistoricProcessInstanceQueryDto**](HistoricProcessInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRemovalTimeAsync

> BatchDto setRemovalTimeAsync(opts)

Set Removal Time Async (POST)

Sets the removal time to multiple historic process instances asynchronously (batch).  At least &#x60;historicProcessInstanceIds&#x60; or &#x60;historicProcessInstanceQuery&#x60; has to be provided. If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.HistoricProcessInstanceApi();
let opts = {
  'setRemovalTimeToHistoricProcessInstancesDto': {"absoluteRemovalTime":"2019-05-05T11:56:24.725+0200","hierarchical":true,"historicProcessInstanceQuery":{"unfinished":true},"historicProcessInstanceIds":["b4d2ad98-7240-11e9-98b7-be5e0f7575b7","b4d2ad94-7240-11e9-98b7-be5e0f7575b7"]} // SetRemovalTimeToHistoricProcessInstancesDto | 
};
apiInstance.setRemovalTimeAsync(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setRemovalTimeToHistoricProcessInstancesDto** | [**SetRemovalTimeToHistoricProcessInstancesDto**](SetRemovalTimeToHistoricProcessInstancesDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

