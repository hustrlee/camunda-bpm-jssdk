# CamundaBpmRestApi.ProcessDefinitionApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProcessDefinition**](ProcessDefinitionApi.md#deleteProcessDefinition) | **DELETE** /process-definition/{id} | Delete
[**deleteProcessDefinitionsByKey**](ProcessDefinitionApi.md#deleteProcessDefinitionsByKey) | **DELETE** /process-definition/key/{key} | Delete By Key
[**deleteProcessDefinitionsByKeyAndTenantId**](ProcessDefinitionApi.md#deleteProcessDefinitionsByKeyAndTenantId) | **DELETE** /process-definition/key/{key}/tenant-id/{tenant-id} | Delete By Key
[**getActivityStatistics**](ProcessDefinitionApi.md#getActivityStatistics) | **GET** /process-definition/{id}/statistics | Get Activity Instance Statistics
[**getActivityStatisticsByProcessDefinitionKey**](ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKey) | **GET** /process-definition/key/{key}/statistics | Get Activity Instance Statistics
[**getActivityStatisticsByProcessDefinitionKeyAndTenantId**](ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/statistics | Get Activity Instance Statistics
[**getDeployedStartForm**](ProcessDefinitionApi.md#getDeployedStartForm) | **GET** /process-definition/{id}/deployed-start-form | Get Deployed Start Form
[**getDeployedStartFormByKey**](ProcessDefinitionApi.md#getDeployedStartFormByKey) | **GET** /process-definition/key/{key}/deployed-start-form | Get Deployed Start Form
[**getDeployedStartFormByKeyAndTenantId**](ProcessDefinitionApi.md#getDeployedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/deployed-start-form | Get Deployed Start Form
[**getLatestProcessDefinitionByTenantId**](ProcessDefinitionApi.md#getLatestProcessDefinitionByTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id} | Get
[**getProcessDefinition**](ProcessDefinitionApi.md#getProcessDefinition) | **GET** /process-definition/{id} | Get
[**getProcessDefinitionBpmn20Xml**](ProcessDefinitionApi.md#getProcessDefinitionBpmn20Xml) | **GET** /process-definition/{id}/xml | Get XML
[**getProcessDefinitionBpmn20XmlByKey**](ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKey) | **GET** /process-definition/key/{key}/xml | Get XML
[**getProcessDefinitionBpmn20XmlByKeyAndTenantId**](ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/xml | Get XML
[**getProcessDefinitionByKey**](ProcessDefinitionApi.md#getProcessDefinitionByKey) | **GET** /process-definition/key/{key} | Get
[**getProcessDefinitionDiagram**](ProcessDefinitionApi.md#getProcessDefinitionDiagram) | **GET** /process-definition/{id}/diagram | Get Diagram
[**getProcessDefinitionDiagramByKey**](ProcessDefinitionApi.md#getProcessDefinitionDiagramByKey) | **GET** /process-definition/key/{key}/diagram | Get Diagram
[**getProcessDefinitionDiagramByKeyAndTenantId**](ProcessDefinitionApi.md#getProcessDefinitionDiagramByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/diagram | Get Diagram
[**getProcessDefinitionStatistics**](ProcessDefinitionApi.md#getProcessDefinitionStatistics) | **GET** /process-definition/statistics | Get Process Instance Statistics
[**getProcessDefinitions**](ProcessDefinitionApi.md#getProcessDefinitions) | **GET** /process-definition | Get List
[**getProcessDefinitionsCount**](ProcessDefinitionApi.md#getProcessDefinitionsCount) | **GET** /process-definition/count | Get List Count
[**getRenderedStartForm**](ProcessDefinitionApi.md#getRenderedStartForm) | **GET** /process-definition/{id}/rendered-form | Get Rendered Start Form
[**getRenderedStartFormByKey**](ProcessDefinitionApi.md#getRenderedStartFormByKey) | **GET** /process-definition/key/{key}/rendered-form | Get Rendered Start Form
[**getRenderedStartFormByKeyAndTenantId**](ProcessDefinitionApi.md#getRenderedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/rendered-form | Get Rendered Start Form
[**getStartForm**](ProcessDefinitionApi.md#getStartForm) | **GET** /process-definition/{id}/startForm | Get Start Form Key
[**getStartFormByKey**](ProcessDefinitionApi.md#getStartFormByKey) | **GET** /process-definition/key/{key}/startForm | Get Start Form Key
[**getStartFormByKeyAndTenantId**](ProcessDefinitionApi.md#getStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/startForm | Get Start Form Key
[**getStartFormVariables**](ProcessDefinitionApi.md#getStartFormVariables) | **GET** /process-definition/{id}/form-variables | Get Start Form Variables
[**getStartFormVariablesByKey**](ProcessDefinitionApi.md#getStartFormVariablesByKey) | **GET** /process-definition/key/{key}/form-variables | Get Start Form Variables
[**getStartFormVariablesByKeyAndTenantId**](ProcessDefinitionApi.md#getStartFormVariablesByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/form-variables | Get Start Form Variables
[**restartProcessInstance**](ProcessDefinitionApi.md#restartProcessInstance) | **POST** /process-definition/{id}/restart | Restart Process Instance
[**restartProcessInstanceAsyncOperation**](ProcessDefinitionApi.md#restartProcessInstanceAsyncOperation) | **POST** /process-definition/{id}/restart-async | Restart Process Instance Async
[**startProcessInstance**](ProcessDefinitionApi.md#startProcessInstance) | **POST** /process-definition/{id}/start | Start Instance
[**startProcessInstanceByKey**](ProcessDefinitionApi.md#startProcessInstanceByKey) | **POST** /process-definition/key/{key}/start | Start Instance
[**startProcessInstanceByKeyAndTenantId**](ProcessDefinitionApi.md#startProcessInstanceByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant-id/{tenant-id}/start | Start Instance
[**submitForm**](ProcessDefinitionApi.md#submitForm) | **POST** /process-definition/{id}/submit-form | Submit Start Form
[**submitFormByKey**](ProcessDefinitionApi.md#submitFormByKey) | **POST** /process-definition/key/{key}/submit-form | Submit Start Form
[**submitFormByKeyAndTenantId**](ProcessDefinitionApi.md#submitFormByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant-id/{tenant-id}/submit-form | Submit Start Form
[**updateHistoryTimeToLiveByProcessDefinitionId**](ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionId) | **PUT** /process-definition/{id}/history-time-to-live | Update History Time to Live
[**updateHistoryTimeToLiveByProcessDefinitionKey**](ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKey) | **PUT** /process-definition/key/{key}/history-time-to-live | Update History Time to Live
[**updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId**](ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant-id/{tenant-id}/history-time-to-live | Update History Time to Live
[**updateProcessDefinitionSuspensionState**](ProcessDefinitionApi.md#updateProcessDefinitionSuspensionState) | **PUT** /process-definition/suspended | Activate/Suspend By Key
[**updateProcessDefinitionSuspensionStateById**](ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateById) | **PUT** /process-definition/{id}/suspended | Activate/Suspend By Id
[**updateProcessDefinitionSuspensionStateByKey**](ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKey) | **PUT** /process-definition/key/{key}/suspended | Activate/Suspend by Id
[**updateProcessDefinitionSuspensionStateByKeyAndTenantId**](ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant-id/{tenant-id}/suspended | Activate/Suspend by Id



## deleteProcessDefinition

> deleteProcessDefinition(id, opts)

Delete

Deletes a running process instance by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to be deleted.
let opts = {
  'cascade': true, // Boolean | `true`, if all process instances, historic process instances and jobs for this process definition should be deleted.
  'skipCustomListeners': false, // Boolean | `true`, if only the built-in ExecutionListeners should be notified with the end event.
  'skipIoMappings': false // Boolean | A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked.
};
apiInstance.deleteProcessDefinition(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to be deleted. | 
 **cascade** | **Boolean**| &#x60;true&#x60;, if all process instances, historic process instances and jobs for this process definition should be deleted. | [optional] 
 **skipCustomListeners** | **Boolean**| &#x60;true&#x60;, if only the built-in ExecutionListeners should be notified with the end event. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| A boolean value to control whether input/output mappings should be executed during deletion. &#x60;true&#x60;, if input/output mappings should not be invoked. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProcessDefinitionsByKey

> deleteProcessDefinitionsByKey(key, opts)

Delete By Key

Deletes process definitions by a given key which belong to no tenant id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definitions to be deleted.
let opts = {
  'cascade': true, // Boolean | `true`, if all process instances, historic process instances and jobs for this process definition should be deleted.
  'skipCustomListeners': false, // Boolean | `true`, if only the built-in ExecutionListeners should be notified with the end event.
  'skipIoMappings': false // Boolean | A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked.
};
apiInstance.deleteProcessDefinitionsByKey(key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definitions to be deleted. | 
 **cascade** | **Boolean**| &#x60;true&#x60;, if all process instances, historic process instances and jobs for this process definition should be deleted. | [optional] 
 **skipCustomListeners** | **Boolean**| &#x60;true&#x60;, if only the built-in ExecutionListeners should be notified with the end event. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| A boolean value to control whether input/output mappings should be executed during deletion. &#x60;true&#x60;, if input/output mappings should not be invoked. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProcessDefinitionsByKeyAndTenantId

> deleteProcessDefinitionsByKeyAndTenantId(key, tenantId, opts)

Delete By Key

Deletes process definitions by a given key and which belong to a tenant id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definitions to be deleted.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definitions belong to.
let opts = {
  'cascade': true, // Boolean | `true`, if all process instances, historic process instances and jobs for this process definition should be deleted.
  'skipCustomListeners': false, // Boolean | `true`, if only the built-in ExecutionListeners should be notified with the end event.
  'skipIoMappings': false // Boolean | A boolean value to control whether input/output mappings should be executed during deletion. `true`, if input/output mappings should not be invoked.
};
apiInstance.deleteProcessDefinitionsByKeyAndTenantId(key, tenantId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definitions to be deleted. | 
 **tenantId** | **String**| The id of the tenant the process definitions belong to. | 
 **cascade** | **Boolean**| &#x60;true&#x60;, if all process instances, historic process instances and jobs for this process definition should be deleted. | [optional] 
 **skipCustomListeners** | **Boolean**| &#x60;true&#x60;, if only the built-in ExecutionListeners should be notified with the end event. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| A boolean value to control whether input/output mappings should be executed during deletion. &#x60;true&#x60;, if input/output mappings should not be invoked. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivityStatistics

> [ActivityStatisticsResultDto] getActivityStatistics(id, opts)

Get Activity Instance Statistics

Retrieves runtime statistics of a given process definition, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition.
let opts = {
  'failedJobs': true, // Boolean | Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
  'incidents': true, // Boolean | Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`.
  'incidentsForType': "incidentsForType_example" // String | If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
};
apiInstance.getActivityStatistics(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition. | 
 **failedJobs** | **Boolean**| Whether to include the number of failed jobs in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 
 **incidents** | **Boolean**| Valid values for this property are &#x60;true&#x60; or &#x60;false&#x60;. If this property has been set to &#x60;true&#x60; the result will include the corresponding number of incidents for each occurred incident type. If it is set to &#x60;false&#x60;, the incidents will not be included in the result. Cannot be used in combination with &#x60;incidentsForType&#x60;. | [optional] 
 **incidentsForType** | **String**| If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with &#x60;incidents&#x60;. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 

### Return type

[**[ActivityStatisticsResultDto]**](ActivityStatisticsResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivityStatisticsByProcessDefinitionKey

> [ActivityStatisticsResultDto] getActivityStatisticsByProcessDefinitionKey(key, opts)

Get Activity Instance Statistics

Retrieves runtime statistics of the latest version of the given process definition which belongs to no tenant, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let opts = {
  'failedJobs': true, // Boolean | Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
  'incidents': true, // Boolean | Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`.
  'incidentsForType': "incidentsForType_example" // String | If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
};
apiInstance.getActivityStatisticsByProcessDefinitionKey(key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **failedJobs** | **Boolean**| Whether to include the number of failed jobs in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 
 **incidents** | **Boolean**| Valid values for this property are &#x60;true&#x60; or &#x60;false&#x60;. If this property has been set to &#x60;true&#x60; the result will include the corresponding number of incidents for each occurred incident type. If it is set to &#x60;false&#x60;, the incidents will not be included in the result. Cannot be used in combination with &#x60;incidentsForType&#x60;. | [optional] 
 **incidentsForType** | **String**| If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with &#x60;incidents&#x60;. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 

### Return type

[**[ActivityStatisticsResultDto]**](ActivityStatisticsResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActivityStatisticsByProcessDefinitionKeyAndTenantId

> [ActivityStatisticsResultDto] getActivityStatisticsByProcessDefinitionKeyAndTenantId(key, tenantId, opts)

Get Activity Instance Statistics

Retrieves runtime statistics of the latest version of the given process definition for a tenant, grouped by activities. These statistics include the number of running activity instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'failedJobs': true, // Boolean | Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
  'incidents': true, // Boolean | Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`.
  'incidentsForType': "incidentsForType_example" // String | If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
};
apiInstance.getActivityStatisticsByProcessDefinitionKeyAndTenantId(key, tenantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **failedJobs** | **Boolean**| Whether to include the number of failed jobs in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 
 **incidents** | **Boolean**| Valid values for this property are &#x60;true&#x60; or &#x60;false&#x60;. If this property has been set to &#x60;true&#x60; the result will include the corresponding number of incidents for each occurred incident type. If it is set to &#x60;false&#x60;, the incidents will not be included in the result. Cannot be used in combination with &#x60;incidentsForType&#x60;. | [optional] 
 **incidentsForType** | **String**| If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with &#x60;incidents&#x60;. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 

### Return type

[**[ActivityStatisticsResultDto]**](ActivityStatisticsResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeployedStartForm

> File getDeployedStartForm(id)

Get Deployed Start Form

Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to get the deployed start form for.
apiInstance.getDeployedStartForm(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to get the deployed start form for. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getDeployedStartFormByKey

> File getDeployedStartFormByKey(key)

Get Deployed Start Form

Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
apiInstance.getDeployedStartFormByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getDeployedStartFormByKeyAndTenantId

> File getDeployedStartFormByKeyAndTenantId(key, tenantId)

Get Deployed Start Form

Retrieves the deployed form that can be referenced from a start event. For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definitions belong to.
apiInstance.getDeployedStartFormByKeyAndTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definitions belong to. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getLatestProcessDefinitionByTenantId

> ProcessDefinitionDto getLatestProcessDefinitionByTenantId(key, tenantId)

Get

Retrieves the latest version of the process definition for tenant according to the &#x60;ProcessDefinition&#x60; interface in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
apiInstance.getLatestProcessDefinitionByTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 

### Return type

[**ProcessDefinitionDto**](ProcessDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinition

> ProcessDefinitionDto getProcessDefinition(id)

Get

Retrieves a process definition according to the &#x60;ProcessDefinition&#x60; interface in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to be retrieved.
apiInstance.getProcessDefinition(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to be retrieved. | 

### Return type

[**ProcessDefinitionDto**](ProcessDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionBpmn20Xml

> ProcessDefinitionDiagramDto getProcessDefinitionBpmn20Xml(id)

Get XML

Retrieves the BPMN 2.0 XML of a process definition.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition.
apiInstance.getProcessDefinitionBpmn20Xml(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition. | 

### Return type

[**ProcessDefinitionDiagramDto**](ProcessDefinitionDiagramDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionBpmn20XmlByKey

> ProcessDefinitionDiagramDto getProcessDefinitionBpmn20XmlByKey(key)

Get XML

Retrieves latest version the BPMN 2.0 XML of a process definition.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) whose XML should be retrieved.
apiInstance.getProcessDefinitionBpmn20XmlByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) whose XML should be retrieved. | 

### Return type

[**ProcessDefinitionDiagramDto**](ProcessDefinitionDiagramDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionBpmn20XmlByKeyAndTenantId

> ProcessDefinitionDiagramDto getProcessDefinitionBpmn20XmlByKeyAndTenantId(key, tenantId)

Get XML

Retrieves latest version the BPMN 2.0 XML of a process definition. Returns the XML for the latest version of the process definition for tenant.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) whose XML should be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
apiInstance.getProcessDefinitionBpmn20XmlByKeyAndTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) whose XML should be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 

### Return type

[**ProcessDefinitionDiagramDto**](ProcessDefinitionDiagramDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionByKey

> ProcessDefinitionDto getProcessDefinitionByKey(key)

Get

Retrieves the latest version of the process definition which belongs to no tenant according to the &#x60;ProcessDefinition&#x60; interface in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
apiInstance.getProcessDefinitionByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 

### Return type

[**ProcessDefinitionDto**](ProcessDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionDiagram

> File getProcessDefinitionDiagram(id)

Get Diagram

Retrieves the diagram of a process definition.  If the process definition&#39;s deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: &#x60;someProcess.bpmn&#x60; and &#x60;someProcess.png&#x60;. Supported file extentions for the image are: &#x60;svg&#x60;, &#x60;png&#x60;, &#x60;jpg&#x60;, and &#x60;gif&#x60;.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition.
apiInstance.getProcessDefinitionDiagram(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, */*, application/json


## getProcessDefinitionDiagramByKey

> File getProcessDefinitionDiagramByKey(key)

Get Diagram

Retrieves the diagram for the latest version of the process definition which belongs to no tenant.  If the process definition&#39;s deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: &#x60;someProcess.bpmn&#x60; and &#x60;someProcess.png&#x60;. Supported file extentions for the image are: &#x60;svg&#x60;, &#x60;png&#x60;, &#x60;jpg&#x60;, and &#x60;gif&#x60;.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition.
apiInstance.getProcessDefinitionDiagramByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, */*, application/json


## getProcessDefinitionDiagramByKeyAndTenantId

> File getProcessDefinitionDiagramByKeyAndTenantId(key, tenantId)

Get Diagram

Retrieves the diagram for the latest version of the process definition for tenant.  If the process definition&#39;s deployment contains an image resource with the same file name as the process definition, the deployed image will be returned by the Get Diagram endpoint. Example: &#x60;someProcess.bpmn&#x60; and &#x60;someProcess.png&#x60;. Supported file extentions for the image are: &#x60;svg&#x60;, &#x60;png&#x60;, &#x60;jpg&#x60;, and &#x60;gif&#x60;.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
apiInstance.getProcessDefinitionDiagramByKeyAndTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, */*, application/json


## getProcessDefinitionStatistics

> [ProcessDefinitionStatisticsResultDto] getProcessDefinitionStatistics(opts)

Get Process Instance Statistics

Retrieves runtime statistics of the process engine, grouped by process definitions. These statistics include the number of running process instances, optionally the number of failed jobs and also optionally the number of incidents either grouped by incident types or for a specific incident type. **Note**: This does not include historic data.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let opts = {
  'failedJobs': true, // Boolean | Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
  'incidents': true, // Boolean | Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType`.
  'incidentsForType': "incidentsForType_example", // String | If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with `incidents`. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'rootIncidents': true // Boolean | Valid values for this property are `true` or `false`. If this property has been set to `true` the result will include the corresponding number of root incidents for each occurred incident type. If it is set to `false`, the incidents will not be included in the result. Cannot be used in combination with `incidentsForType` or `incidents`.
};
apiInstance.getProcessDefinitionStatistics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failedJobs** | **Boolean**| Whether to include the number of failed jobs in the result or not. Valid values are &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 
 **incidents** | **Boolean**| Valid values for this property are &#x60;true&#x60; or &#x60;false&#x60;. If this property has been set to &#x60;true&#x60; the result will include the corresponding number of incidents for each occurred incident type. If it is set to &#x60;false&#x60;, the incidents will not be included in the result. Cannot be used in combination with &#x60;incidentsForType&#x60;. | [optional] 
 **incidentsForType** | **String**| If this property has been set with any incident type (i.e., a string value) the result will only include the number of incidents for the assigned incident type. Cannot be used in combination with &#x60;incidents&#x60;. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **rootIncidents** | **Boolean**| Valid values for this property are &#x60;true&#x60; or &#x60;false&#x60;. If this property has been set to &#x60;true&#x60; the result will include the corresponding number of root incidents for each occurred incident type. If it is set to &#x60;false&#x60;, the incidents will not be included in the result. Cannot be used in combination with &#x60;incidentsForType&#x60; or &#x60;incidents&#x60;. | [optional] 

### Return type

[**[ProcessDefinitionStatisticsResultDto]**](ProcessDefinitionStatisticsResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitions

> [ProcessDefinitionDto] getProcessDefinitions(opts)

Get List

Queries for process definitions that fulfill given parameters. Parameters may be the properties of  process definitions, such as the name, key or version. The size of the result set can be retrieved by using the [Get Definition Count](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query-count/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let opts = {
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionIdIn': "processDefinitionIdIn_example", // String | Filter by a comma-separated list of process definition ids.
  'name': "name_example", // String | Filter by process definition name.
  'nameLike': "nameLike_example", // String | Filter by process definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'deployedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'deployedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'key': "key_example", // String | Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match.
  'keysIn': "keysIn_example", // String | Filter by a comma-separated list of process definition keys.
  'keyLike': "keyLike_example", // String | Filter by process definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by process definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by process definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by process definition version.
  'latestVersion': true, // Boolean | Only include those process definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the process definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those process definition resources that the parameter is a substring of.
  'startableBy': "startableBy_example", // String | Filter by a user name who is allowed to start the process.
  'active': true, // Boolean | Only include active process definitions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended process definitions. Value may only be `true`, as `false` is the default behavior.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior.
  'includeProcessDefinitionsWithoutTenantId': true, // Boolean | Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'versionTag': "versionTag_example", // String | Filter by the version tag.
  'versionTagLike': "versionTagLike_example", // String | Filter by the version tag that the parameter is a substring of.
  'withoutVersionTag': true, // Boolean | Only include process definitions without a `versionTag`.
  'startableInTasklist': true, // Boolean | Filter by process definitions which are startable in Tasklist..
  'notStartableInTasklist': true, // Boolean | Filter by process definitions which are not startable in Tasklist.
  'startablePermissionCheck': true, // Boolean | Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn't have these permissions the result will be empty list. The permissions are: * `CREATE` permission for all Process instances * `CREATE_INSTANCE` and `READ` permission on Process definition level
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56 // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
};
apiInstance.getProcessDefinitions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionIdIn** | **String**| Filter by a comma-separated list of process definition ids. | [optional] 
 **name** | **String**| Filter by process definition name. | [optional] 
 **nameLike** | **String**| Filter by process definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **deployedAfter** | **Date**| Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **deployedAt** | **Date**| Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **key** | **String**| Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match. | [optional] 
 **keysIn** | **String**| Filter by a comma-separated list of process definition keys. | [optional] 
 **keyLike** | **String**| Filter by process definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by process definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by process definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by process definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those process definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the process definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those process definition resources that the parameter is a substring of. | [optional] 
 **startableBy** | **String**| Filter by a user name who is allowed to start the process. | [optional] 
 **active** | **Boolean**| Only include active process definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended process definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior. | [optional] 
 **includeProcessDefinitionsWithoutTenantId** | **Boolean**| Include process definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **versionTag** | **String**| Filter by the version tag. | [optional] 
 **versionTagLike** | **String**| Filter by the version tag that the parameter is a substring of. | [optional] 
 **withoutVersionTag** | **Boolean**| Only include process definitions without a &#x60;versionTag&#x60;. | [optional] 
 **startableInTasklist** | **Boolean**| Filter by process definitions which are startable in Tasklist.. | [optional] 
 **notStartableInTasklist** | **Boolean**| Filter by process definitions which are not startable in Tasklist. | [optional] 
 **startablePermissionCheck** | **Boolean**| Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn&#39;t have these permissions the result will be empty list. The permissions are: * &#x60;CREATE&#x60; permission for all Process instances * &#x60;CREATE_INSTANCE&#x60; and &#x60;READ&#x60; permission on Process definition level | [optional] 
 **sortBy** | **String**| Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
 **sortOrder** | **String**| Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
 **firstResult** | **Number**| Pagination of results. Specifies the index of the first result to return. | [optional] 
 **maxResults** | **Number**| Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left. | [optional] 

### Return type

[**[ProcessDefinitionDto]**](ProcessDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessDefinitionsCount

> CountResultDto getProcessDefinitionsCount(opts)

Get List Count

Requests the number of process definitions that fulfill the query criteria. Takes the same filtering parameters as the [Get Definitions](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query/) method.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let opts = {
  'processDefinitionId': "processDefinitionId_example", // String | Filter by process definition id.
  'processDefinitionIdIn': "processDefinitionIdIn_example", // String | Filter by a comma-separated list of process definition ids.
  'name': "name_example", // String | Filter by process definition name.
  'nameLike': "nameLike_example", // String | Filter by process definition names that the parameter is a substring of.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'deployedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'deployedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.546+0200`.
  'key': "key_example", // String | Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match.
  'keysIn': "keysIn_example", // String | Filter by a comma-separated list of process definition keys.
  'keyLike': "keyLike_example", // String | Filter by process definition keys that the parameter is a substring of.
  'category': "category_example", // String | Filter by process definition category. Exact match.
  'categoryLike': "categoryLike_example", // String | Filter by process definition categories that the parameter is a substring of.
  'version': 56, // Number | Filter by process definition version.
  'latestVersion': true, // Boolean | Only include those process definitions that are latest versions. Value may only be `true`, as `false` is the default behavior.
  'resourceName': "resourceName_example", // String | Filter by the name of the process definition resource. Exact match.
  'resourceNameLike': "resourceNameLike_example", // String | Filter by names of those process definition resources that the parameter is a substring of.
  'startableBy': "startableBy_example", // String | Filter by a user name who is allowed to start the process.
  'active': true, // Boolean | Only include active process definitions. Value may only be `true`, as `false` is the default behavior.
  'suspended': true, // Boolean | Only include suspended process definitions. Value may only be `true`, as `false` is the default behavior.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids.
  'withoutTenantId': true, // Boolean | Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior.
  'includeProcessDefinitionsWithoutTenantId': true, // Boolean | Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may only be `true`, as `false` is the default behavior.
  'versionTag': "versionTag_example", // String | Filter by the version tag.
  'versionTagLike': "versionTagLike_example", // String | Filter by the version tag that the parameter is a substring of.
  'withoutVersionTag': true, // Boolean | Only include process definitions without a `versionTag`.
  'startableInTasklist': true, // Boolean | Filter by process definitions which are startable in Tasklist..
  'notStartableInTasklist': true, // Boolean | Filter by process definitions which are not startable in Tasklist.
  'startablePermissionCheck': true // Boolean | Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn't have these permissions the result will be empty list. The permissions are: * `CREATE` permission for all Process instances * `CREATE_INSTANCE` and `READ` permission on Process definition level
};
apiInstance.getProcessDefinitionsCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **String**| Filter by process definition id. | [optional] 
 **processDefinitionIdIn** | **String**| Filter by a comma-separated list of process definition ids. | [optional] 
 **name** | **String**| Filter by process definition name. | [optional] 
 **nameLike** | **String**| Filter by process definition names that the parameter is a substring of. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **deployedAfter** | **Date**| Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed after (exclusive) a specific time. By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **deployedAt** | **Date**| Filter by the deploy time of the deployment the process definition belongs to. Only selects process definitions that have been deployed at a specific time (exact match). By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;, e.g., &#x60;2013-01-23T14:42:45.546+0200&#x60;. | [optional] 
 **key** | **String**| Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match. | [optional] 
 **keysIn** | **String**| Filter by a comma-separated list of process definition keys. | [optional] 
 **keyLike** | **String**| Filter by process definition keys that the parameter is a substring of. | [optional] 
 **category** | **String**| Filter by process definition category. Exact match. | [optional] 
 **categoryLike** | **String**| Filter by process definition categories that the parameter is a substring of. | [optional] 
 **version** | **Number**| Filter by process definition version. | [optional] 
 **latestVersion** | **Boolean**| Only include those process definitions that are latest versions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **resourceName** | **String**| Filter by the name of the process definition resource. Exact match. | [optional] 
 **resourceNameLike** | **String**| Filter by names of those process definition resources that the parameter is a substring of. | [optional] 
 **startableBy** | **String**| Filter by a user name who is allowed to start the process. | [optional] 
 **active** | **Boolean**| Only include active process definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **suspended** | **Boolean**| Only include suspended process definitions. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process definition must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process definitions which belong to no tenant. Value may only be true, as false is the default behavior. | [optional] 
 **includeProcessDefinitionsWithoutTenantId** | **Boolean**| Include process definitions which belong to no tenant. Can be used in combination with &#x60;tenantIdIn&#x60;. Value may only be &#x60;true&#x60;, as &#x60;false&#x60; is the default behavior. | [optional] 
 **versionTag** | **String**| Filter by the version tag. | [optional] 
 **versionTagLike** | **String**| Filter by the version tag that the parameter is a substring of. | [optional] 
 **withoutVersionTag** | **Boolean**| Only include process definitions without a &#x60;versionTag&#x60;. | [optional] 
 **startableInTasklist** | **Boolean**| Filter by process definitions which are startable in Tasklist.. | [optional] 
 **notStartableInTasklist** | **Boolean**| Filter by process definitions which are not startable in Tasklist. | [optional] 
 **startablePermissionCheck** | **Boolean**| Filter by process definitions which the user is allowed to start in Tasklist. If the user doesn&#39;t have these permissions the result will be empty list. The permissions are: * &#x60;CREATE&#x60; permission for all Process instances * &#x60;CREATE_INSTANCE&#x60; and &#x60;READ&#x60; permission on Process definition level | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRenderedStartForm

> File getRenderedStartForm(id)

Get Rendered Start Form

Retrieves the rendered form for a process definition. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to get the rendered start form for.
apiInstance.getRenderedStartForm(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to get the rendered start form for. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getRenderedStartFormByKey

> File getRenderedStartFormByKey(key)

Get Rendered Start Form

Retrieves  the rendered form for the latest version of the process definition which belongs to no tenant. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
apiInstance.getRenderedStartFormByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getRenderedStartFormByKeyAndTenantId

> File getRenderedStartFormByKeyAndTenantId(key, tenantId)

Get Rendered Start Form

Retrieves  the rendered form for the latest version of the process definition for a tenant. This method can be used to get the HTML rendering of a [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
apiInstance.getRenderedStartFormByKeyAndTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xhtml+xml, application/json


## getStartForm

> FormDto getStartForm(id)

Get Start Form Key

Retrieves the key of the start form for a process definition. The form key corresponds to the &#x60;FormData#formKey&#x60; property in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to get the start form key for.
apiInstance.getStartForm(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to get the start form key for. | 

### Return type

[**FormDto**](FormDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStartFormByKey

> FormDto getStartFormByKey(key)

Get Start Form Key

Retrieves the key of the start form for the latest version of the process definition which belongs to no tenant. The form key corresponds to the &#x60;FormData#formKey&#x60; property in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
apiInstance.getStartFormByKey(key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) for which the form key is to be retrieved. | 

### Return type

[**FormDto**](FormDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStartFormByKeyAndTenantId

> FormDto getStartFormByKeyAndTenantId(key, tenantId)

Get Start Form Key

Retrieves the key of the start form for the latest version of the process definition for a tenant. The form key corresponds to the &#x60;FormData#formKey&#x60; property in the engine.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
apiInstance.getStartFormByKeyAndTenantId(key, tenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) for which the form key is to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 

### Return type

[**FormDto**](FormDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStartFormVariables

> {String: VariableValueDto} getStartFormVariables(id, opts)

Get Start Form Variables

Retrieves the start form variables for a process definition (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to retrieve the variables for.
let opts = {
  'variableNames': "variableNames_example", // String | A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getStartFormVariables(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to retrieve the variables for. | 
 **variableNames** | **String**| A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStartFormVariablesByKey

> {String: VariableValueDto} getStartFormVariablesByKey(key, opts)

Get Start Form Variables

Retrieves the start form variables for the latest process definition which belongs to no tenant (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let opts = {
  'variableNames': "variableNames_example", // String | A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getStartFormVariablesByKey(key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **variableNames** | **String**| A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStartFormVariablesByKeyAndTenantId

> {String: VariableValueDto} getStartFormVariablesByKeyAndTenantId(key, tenantId, opts)

Get Start Form Variables

Retrieves the start form variables for the latest process definition for a tenant (only if they are defined via the  [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach). The start form variables take form data specified on the start event into account. If form fields are defined, the variable types and default values of the form fields are taken into account.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'variableNames': "variableNames_example", // String | A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored.
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getStartFormVariablesByKeyAndTenantId(key, tenantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **variableNames** | **String**| A comma-separated list of variable names. Allows restricting the list of requested variables to the variable names in the list. It is best practice to restrict the list of variables to the variables actually required by the form in order to minimize fetching of data. If the query parameter is ommitted all variables are fetched. If the query parameter contains non-existent variable names, the variable names are ignored. | [optional] 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](http://jackson.codehaus.org/) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note**: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartProcessInstance

> restartProcessInstance(id, opts)

Restart Process Instance

Restarts process instances that were canceled or terminated synchronously. Can also restart completed process instances. It will create a new instance using the original instance information. To execute the restart asynchronously, use the [Restart Process Instance Async](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-async/) method.  For more information about the difference between synchronous and asynchronous execution, please refer to the related section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition of the process instances to restart.
let opts = {
  'restartProcessInstanceDto': {"instructions":[{"type":"startAfterActivity","activityId":"aUserTask"}],"processInstanceIds":["aProcessInstance","anotherProcessInstance"],"initialVariables":true,"skipCustomListeners":true,"withoutBusinessKey":true} // RestartProcessInstanceDto | 
};
apiInstance.restartProcessInstance(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition of the process instances to restart. | 
 **restartProcessInstanceDto** | [**RestartProcessInstanceDto**](RestartProcessInstanceDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restartProcessInstanceAsyncOperation

> BatchDto restartProcessInstanceAsyncOperation(id, opts)

Restart Process Instance Async

Restarts process instances that were canceled or terminated asynchronously. Can also restart completed process instances. It will create a new instance using the original instance information. To execute the restart asynchronously, use the [Restart Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-sync/) method.  For more information about the difference between synchronous and asynchronous execution, please refer to the related section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition of the process instances to restart.
let opts = {
  'restartProcessInstanceDto': {"instructions":[{"type":"startAfterActivity","activityId":"aUserTask"}],"processInstanceIds":["aProcessInstance","anotherProcessInstance"],"initialVariables":true,"skipCustomListeners":true,"withoutBusinessKey":true} // RestartProcessInstanceDto | 
};
apiInstance.restartProcessInstanceAsyncOperation(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition of the process instances to restart. | 
 **restartProcessInstanceDto** | [**RestartProcessInstanceDto**](RestartProcessInstanceDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startProcessInstance

> ProcessInstanceWithVariablesDto startProcessInstance(id, opts)

Start Instance

Instantiates a given process definition. Process variables and business key may be supplied in the request body.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to be retrieved.
let opts = {
  'startProcessInstanceDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceDto | 
};
apiInstance.startProcessInstance(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to be retrieved. | 
 **startProcessInstanceDto** | [**StartProcessInstanceDto**](StartProcessInstanceDto.md)|  | [optional] 

### Return type

[**ProcessInstanceWithVariablesDto**](ProcessInstanceWithVariablesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startProcessInstanceByKey

> ProcessInstanceWithVariablesDto startProcessInstanceByKey(key, opts)

Start Instance

Instantiates a given process definition, starts the latest version of the process definition which belongs to no tenant. Process variables and business key may be supplied in the request body.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let opts = {
  'startProcessInstanceDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceDto | 
};
apiInstance.startProcessInstanceByKey(key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **startProcessInstanceDto** | [**StartProcessInstanceDto**](StartProcessInstanceDto.md)|  | [optional] 

### Return type

[**ProcessInstanceWithVariablesDto**](ProcessInstanceWithVariablesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startProcessInstanceByKeyAndTenantId

> ProcessInstanceWithVariablesDto startProcessInstanceByKeyAndTenantId(key, tenantId, opts)

Start Instance

Instantiates a given process definition, starts the latest version of the process definition for tenant. Process variables and business key may be supplied in the request body.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be retrieved.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'startProcessInstanceDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceDto | 
};
apiInstance.startProcessInstanceByKeyAndTenantId(key, tenantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be retrieved. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **startProcessInstanceDto** | [**StartProcessInstanceDto**](StartProcessInstanceDto.md)|  | [optional] 

### Return type

[**ProcessInstanceWithVariablesDto**](ProcessInstanceWithVariablesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitForm

> ProcessInstanceDto submitForm(id, opts)

Submit Start Form

Starts a process instance using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to submit the form for.
let opts = {
  'startProcessInstanceFormDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceFormDto | 
};
apiInstance.submitForm(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to submit the form for. | 
 **startProcessInstanceFormDto** | [**StartProcessInstanceFormDto**](StartProcessInstanceFormDto.md)|  | [optional] 

### Return type

[**ProcessInstanceDto**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitFormByKey

> ProcessInstanceDto submitFormByKey(key, opts)

Submit Start Form

Starts the latest version of the process definition which belongs to no tenant using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition to submit the form for.
let opts = {
  'startProcessInstanceFormDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceFormDto | 
};
apiInstance.submitFormByKey(key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition to submit the form for. | 
 **startProcessInstanceFormDto** | [**StartProcessInstanceFormDto**](StartProcessInstanceFormDto.md)|  | [optional] 

### Return type

[**ProcessInstanceDto**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## submitFormByKeyAndTenantId

> ProcessInstanceDto submitFormByKeyAndTenantId(key, tenantId, opts)

Submit Start Form

Starts the latest version of the process definition for a tenant using a set of process variables and the business key. If the start event has Form Field Metadata defined, the process engine will perform backend validation for any form fields which have validators defined. See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition to submit the form for.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'startProcessInstanceFormDto': {"variables":{"aVariable":{"value":"aStringValue","type":"String"},"anotherVariable":{"value":true,"type":"Boolean"}},"businessKey":"myBusinessKey"} // StartProcessInstanceFormDto | 
};
apiInstance.submitFormByKeyAndTenantId(key, tenantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition to submit the form for. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **startProcessInstanceFormDto** | [**StartProcessInstanceFormDto**](StartProcessInstanceFormDto.md)|  | [optional] 

### Return type

[**ProcessInstanceDto**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHistoryTimeToLiveByProcessDefinitionId

> updateHistoryTimeToLiveByProcessDefinitionId(id, opts)

Update History Time to Live

Updates history time to live for process definition. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to change history time to live.
let opts = {
  'historyTimeToLiveDto': {"historyTimeToLive":5} // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByProcessDefinitionId(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to change history time to live. | 
 **historyTimeToLiveDto** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHistoryTimeToLiveByProcessDefinitionKey

> updateHistoryTimeToLiveByProcessDefinitionKey(key, opts)

Update History Time to Live

Updates history time to live for the latest version of the process definition which belongs to no tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition to change history time to live.
let opts = {
  'historyTimeToLiveDto': {"historyTimeToLive":5} // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByProcessDefinitionKey(key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition to change history time to live. | 
 **historyTimeToLiveDto** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId

> updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId(key, tenantId, opts)

Update History Time to Live

Updates history time to live for the latest version of the process definition for a tenant. The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition to change history time to live.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'historyTimeToLiveDto': {"historyTimeToLive":5} // HistoryTimeToLiveDto | 
};
apiInstance.updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId(key, tenantId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition to change history time to live. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **historyTimeToLiveDto** | [**HistoryTimeToLiveDto**](HistoryTimeToLiveDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessDefinitionSuspensionState

> updateProcessDefinitionSuspensionState(opts)

Activate/Suspend By Key

Activates or suspends process definitions with the given process definition key.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let opts = {
  'processDefinitionSuspensionStateDto': {"processDefinitionKey":"aProcessDefinitionKey","suspended":true,"includeProcessInstances":true,"executionDate":"2013-11-21T10:49:45T14:42:45"} // ProcessDefinitionSuspensionStateDto | **Note**: Unallowed property is `processDefinitionId`.
};
apiInstance.updateProcessDefinitionSuspensionState(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionSuspensionStateDto** | [**ProcessDefinitionSuspensionStateDto**](ProcessDefinitionSuspensionStateDto.md)| **Note**: Unallowed property is &#x60;processDefinitionId&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessDefinitionSuspensionStateById

> updateProcessDefinitionSuspensionStateById(id, opts)

Activate/Suspend By Id

Activates or suspends a given process definition by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let id = "id_example"; // String | The id of the process definition to activate or suspend.
let opts = {
  'processDefinitionSuspensionStateDto': {"suspended":true,"includeProcessInstances":true,"executionDate":"2013-11-21T10:49:45T14:42:45"} // ProcessDefinitionSuspensionStateDto | **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
};
apiInstance.updateProcessDefinitionSuspensionStateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process definition to activate or suspend. | 
 **processDefinitionSuspensionStateDto** | [**ProcessDefinitionSuspensionStateDto**](ProcessDefinitionSuspensionStateDto.md)| **Note**: Unallowed properties are &#x60;processDefinitionId&#x60; and &#x60;processDefinitionKey&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessDefinitionSuspensionStateByKey

> updateProcessDefinitionSuspensionStateByKey(key, opts)

Activate/Suspend by Id

Activates or suspends a given process definition by latest version of process definition key which belongs to no tenant.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be activated/suspended.
let opts = {
  'processDefinitionSuspensionStateDto': {"suspended":true,"includeProcessInstances":true,"executionDate":"2013-11-21T10:49:45T14:42:45"} // ProcessDefinitionSuspensionStateDto | **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
};
apiInstance.updateProcessDefinitionSuspensionStateByKey(key, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be activated/suspended. | 
 **processDefinitionSuspensionStateDto** | [**ProcessDefinitionSuspensionStateDto**](ProcessDefinitionSuspensionStateDto.md)| **Note**: Unallowed properties are &#x60;processDefinitionId&#x60; and &#x60;processDefinitionKey&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessDefinitionSuspensionStateByKeyAndTenantId

> updateProcessDefinitionSuspensionStateByKeyAndTenantId(key, tenantId, opts)

Activate/Suspend by Id

Activates or suspends a given process definition by the latest version of the process definition for tenant.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.ProcessDefinitionApi();
let key = "key_example"; // String | The key of the process definition (the latest version thereof) to be activated/suspended.
let tenantId = "tenantId_example"; // String | The id of the tenant the process definition belongs to.
let opts = {
  'processDefinitionSuspensionStateDto': {"suspended":true,"includeProcessInstances":true,"executionDate":"2013-11-21T10:49:45T14:42:45"} // ProcessDefinitionSuspensionStateDto | **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
};
apiInstance.updateProcessDefinitionSuspensionStateByKeyAndTenantId(key, tenantId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| The key of the process definition (the latest version thereof) to be activated/suspended. | 
 **tenantId** | **String**| The id of the tenant the process definition belongs to. | 
 **processDefinitionSuspensionStateDto** | [**ProcessDefinitionSuspensionStateDto**](ProcessDefinitionSuspensionStateDto.md)| **Note**: Unallowed properties are &#x60;processDefinitionId&#x60; and &#x60;processDefinitionKey&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

