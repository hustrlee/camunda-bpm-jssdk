# CamundaJssdk.ProcessInstanceApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAsyncHistoricQueryBased**](ProcessInstanceApi.md#deleteAsyncHistoricQueryBased) | **POST** /process-instance/delete-historic-query-based | 
[**deleteProcessInstance**](ProcessInstanceApi.md#deleteProcessInstance) | **DELETE** /process-instance/{id} | 
[**deleteProcessInstanceVariable**](ProcessInstanceApi.md#deleteProcessInstanceVariable) | **DELETE** /process-instance/{id}/variables/{varName} | 
[**deleteProcessInstancesAsyncOperation**](ProcessInstanceApi.md#deleteProcessInstancesAsyncOperation) | **POST** /process-instance/delete | 
[**getActivityInstanceTree**](ProcessInstanceApi.md#getActivityInstanceTree) | **GET** /process-instance/{id}/activity-instances | 
[**getProcessInstance**](ProcessInstanceApi.md#getProcessInstance) | **GET** /process-instance/{id} | Get Process Instance
[**getProcessInstanceVariable**](ProcessInstanceApi.md#getProcessInstanceVariable) | **GET** /process-instance/{id}/variables/{varName} | 
[**getProcessInstanceVariableBinary**](ProcessInstanceApi.md#getProcessInstanceVariableBinary) | **GET** /process-instance/{id}/variables/{varName}/data | 
[**getProcessInstanceVariables**](ProcessInstanceApi.md#getProcessInstanceVariables) | **GET** /process-instance/{id}/variables | 
[**getProcessInstances**](ProcessInstanceApi.md#getProcessInstances) | **GET** /process-instance | 
[**getProcessInstancesCount**](ProcessInstanceApi.md#getProcessInstancesCount) | **GET** /process-instance/count | 
[**modifyProcessInstance**](ProcessInstanceApi.md#modifyProcessInstance) | **POST** /process-instance/{id}/modification | 
[**modifyProcessInstanceAsyncOperation**](ProcessInstanceApi.md#modifyProcessInstanceAsyncOperation) | **POST** /process-instance/{id}/modification-async | 
[**modifyProcessInstanceVariables**](ProcessInstanceApi.md#modifyProcessInstanceVariables) | **POST** /process-instance/{id}/variables | 
[**queryProcessInstances**](ProcessInstanceApi.md#queryProcessInstances) | **POST** /process-instance | 
[**queryProcessInstancesCount**](ProcessInstanceApi.md#queryProcessInstancesCount) | **POST** /process-instance/count | 
[**setProcessInstanceVariable**](ProcessInstanceApi.md#setProcessInstanceVariable) | **PUT** /process-instance/{id}/variables/{varName} | 
[**setProcessInstanceVariableBinary**](ProcessInstanceApi.md#setProcessInstanceVariableBinary) | **POST** /process-instance/{id}/variables/{varName}/data | 
[**setRetriesByProcess**](ProcessInstanceApi.md#setRetriesByProcess) | **POST** /process-instance/job-retries | 
[**setRetriesByProcessHistoricQueryBased**](ProcessInstanceApi.md#setRetriesByProcessHistoricQueryBased) | **POST** /process-instance/job-retries-historic-query-based | 
[**setVariablesAsyncOperation**](ProcessInstanceApi.md#setVariablesAsyncOperation) | **POST** /process-instance/variables-async | 
[**updateSuspensionState**](ProcessInstanceApi.md#updateSuspensionState) | **PUT** /process-instance/suspended | 
[**updateSuspensionStateAsyncOperation**](ProcessInstanceApi.md#updateSuspensionStateAsyncOperation) | **POST** /process-instance/suspended-async | 
[**updateSuspensionStateById**](ProcessInstanceApi.md#updateSuspensionStateById) | **PUT** /process-instance/{id}/suspended | 



## deleteAsyncHistoricQueryBased

> BatchDto deleteAsyncHistoricQueryBased(opts)



Deletes a set of process instances asynchronously (batch) based on a historic process instance query.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'deleteProcessInstancesDto': {"deleteReason":"aReason","historicProcessInstanceQuery":{"startedBefore":"2017-04-28T11:24:37.765+0200"},"skipCustomListeners":true,"skipSubprocesses":true} // DeleteProcessInstancesDto | **Unallowed property**: `processInstanceQuery`
};
apiInstance.deleteAsyncHistoricQueryBased(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteProcessInstancesDto** | [**DeleteProcessInstancesDto**](DeleteProcessInstancesDto.md)| **Unallowed property**: &#x60;processInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProcessInstance

> deleteProcessInstance(id, opts)



Deletes a running process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to be deleted.
let opts = {
  'skipCustomListeners': false, // Boolean | If set to true, the custom listeners will be skipped.
  'skipIoMappings': false, // Boolean | If set to true, the input/output mappings will be skipped.
  'skipSubprocesses': false, // Boolean | If set to true, subprocesses related to deleted processes will be skipped.
  'failIfNotExists': true // Boolean | If set to false, the request will still be successful if the process id is not found.
};
apiInstance.deleteProcessInstance(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to be deleted. | 
 **skipCustomListeners** | **Boolean**| If set to true, the custom listeners will be skipped. | [optional] [default to false]
 **skipIoMappings** | **Boolean**| If set to true, the input/output mappings will be skipped. | [optional] [default to false]
 **skipSubprocesses** | **Boolean**| If set to true, subprocesses related to deleted processes will be skipped. | [optional] [default to false]
 **failIfNotExists** | **Boolean**| If set to false, the request will still be successful if the process id is not found. | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProcessInstanceVariable

> deleteProcessInstanceVariable(id, varName)



Deletes a variable of a process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to delete.
apiInstance.deleteProcessInstanceVariable(id, varName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to delete the variable from. | 
 **varName** | **String**| The name of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProcessInstancesAsyncOperation

> BatchDto deleteProcessInstancesAsyncOperation(opts)



Deletes multiple process instances asynchronously (batch).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'deleteProcessInstancesDto': {"deleteReason":"aReason","processInstanceIds":["aProcess","secondProcess"],"skipCustomListeners":true,"skipSubprocesses":true} // DeleteProcessInstancesDto | **Unallowed property**: `historicProcessInstanceQuery`
};
apiInstance.deleteProcessInstancesAsyncOperation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteProcessInstancesDto** | [**DeleteProcessInstancesDto**](DeleteProcessInstancesDto.md)| **Unallowed property**: &#x60;historicProcessInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getActivityInstanceTree

> ActivityInstanceDto getActivityInstanceTree(id)



Retrieves an Activity Instance (Tree) for a given process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance for which the activity instance should be retrieved.
apiInstance.getActivityInstanceTree(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance for which the activity instance should be retrieved. | 

### Return type

[**ActivityInstanceDto**](ActivityInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessInstance

> ProcessInstanceDto getProcessInstance(id)

Get Process Instance

Retrieves a process instance by id, according to the &#x60;ProcessInstance&#x60; interface in the engine.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to be retrieved.
apiInstance.getProcessInstance(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to be retrieved. | 

### Return type

[**ProcessInstanceDto**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessInstanceVariable

> VariableValueDto getProcessInstanceVariable(id, varName, opts)



Retrieves a variable of a given process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = {
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getProcessInstanceVariable(id, varName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessInstanceVariableBinary

> File getProcessInstanceVariableBinary(id, varName)



Retrieves the content of a Process Variable by the Process Instance id and the Process Variable name. Applicable for byte array or file Process Variables.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
apiInstance.getProcessInstanceVariableBinary(id, varName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## getProcessInstanceVariables

> {String: VariableValueDto} getProcessInstanceVariables(id, opts)



Retrieves all variables of a given process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variables from.
let opts = {
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getProcessInstanceVariables(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to retrieve the variables from. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on server side (default true).  If set to true, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to false, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While true is the default value for reasons of backward compatibility, we recommend setting this parameter to false when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessInstances

> [ProcessInstanceDto] getProcessInstances(opts)



Queries for process instances that fulfill given parameters. Parameters may be static as well as dynamic runtime properties of process instances. The size of the result set can be retrieved by using the Get Instance Count method.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'sortBy': "sortBy_example", // String | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter.
  'sortOrder': "sortOrder_example", // String | Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'processInstanceIds': "processInstanceIds_example", // String | Filter by a comma-separated list of process instance ids.
  'businessKey': "businessKey_example", // String | Filter by process instance business key.
  'businessKeyLike': "businessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the deployment the id belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'superProcessInstance': "superProcessInstance_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstance': "subProcessInstance_example", // String | Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.
  'superCaseInstance': "superCaseInstance_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstance': "subCaseInstance_example", // String | Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id.
  'active': false, // Boolean | Only include active process instances. Value may only be true, as false is the default behavior.
  'suspended': false, // Boolean | Only include suspended process instances. Value may only be true, as false is the default behavior.
  'withIncident': false, // Boolean | Filter by presence of incidents. Selects only process instances that have an incident.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include process instances which belong to no tenant.
  'processDefinitionWithoutTenantId': false, // Boolean | Only include process instances which process definition has no tenant id.
  'activityIdIn': "activityIdIn_example", // String | Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids.
  'rootProcessInstances': false, // Boolean | Restrict the query to all process instances that are top level process instances.
  'leafProcessInstances': false, // Boolean | Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
  'variables': "variables_example", // String | Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': false // Boolean | Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal.
};
apiInstance.getProcessInstances(opts).then((data) => {
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
 **processInstanceIds** | **String**| Filter by a comma-separated list of process instance ids. | [optional] 
 **businessKey** | **String**| Filter by process instance business key. | [optional] 
 **businessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **superProcessInstance** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstance** | **String**| Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. | [optional] 
 **superCaseInstance** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstance** | **String**| Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. | [optional] 
 **active** | **Boolean**| Only include active process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **withIncident** | **Boolean**| Filter by presence of incidents. Selects only process instances that have an incident. | [optional] [default to false]
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process instances which belong to no tenant. | [optional] [default to false]
 **processDefinitionWithoutTenantId** | **Boolean**| Only include process instances which process definition has no tenant id. | [optional] [default to false]
 **activityIdIn** | **String**| Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] [default to false]
 **leafProcessInstances** | **Boolean**| Restrict the query to all process instances that are leaf instances. (i.e. don&#39;t have any sub instances). | [optional] [default to false]
 **variables** | **String**| Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. | [optional] [default to false]

### Return type

[**[ProcessInstanceDto]**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProcessInstancesCount

> CountResultDto getProcessInstancesCount(opts)



Queries for the number of process instances that fulfill given parameters.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'processInstanceIds': "processInstanceIds_example", // String | Filter by a comma-separated list of process instance ids.
  'businessKey': "businessKey_example", // String | Filter by process instance business key.
  'businessKeyLike': "businessKeyLike_example", // String | Filter by process instance business key that the parameter is a substring of.
  'caseInstanceId': "caseInstanceId_example", // String | Filter by case instance id.
  'processDefinitionId': "processDefinitionId_example", // String | Filter by the deployment the id belongs to.
  'processDefinitionKey': "processDefinitionKey_example", // String | Filter by the key of the process definition the instances run on.
  'processDefinitionKeyIn': "processDefinitionKeyIn_example", // String | Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys.
  'processDefinitionKeyNotIn': "processDefinitionKeyNotIn_example", // String | Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys.
  'deploymentId': "deploymentId_example", // String | Filter by the deployment the id belongs to.
  'superProcessInstance': "superProcessInstance_example", // String | Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
  'subProcessInstance': "subProcessInstance_example", // String | Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.
  'superCaseInstance': "superCaseInstance_example", // String | Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
  'subCaseInstance': "subCaseInstance_example", // String | Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id.
  'active': false, // Boolean | Only include active process instances. Value may only be true, as false is the default behavior.
  'suspended': false, // Boolean | Only include suspended process instances. Value may only be true, as false is the default behavior.
  'withIncident': false, // Boolean | Filter by presence of incidents. Selects only process instances that have an incident.
  'incidentId': "incidentId_example", // String | Filter by the incident id.
  'incidentType': "incidentType_example", // String | Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
  'incidentMessage': "incidentMessage_example", // String | Filter by the incident message. Exact match.
  'incidentMessageLike': "incidentMessageLike_example", // String | Filter by the incident message that the parameter is a substring of.
  'tenantIdIn': "tenantIdIn_example", // String | Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids.
  'withoutTenantId': false, // Boolean | Only include process instances which belong to no tenant.
  'processDefinitionWithoutTenantId': false, // Boolean | Only include process instances which process definition has no tenant id.
  'activityIdIn': "activityIdIn_example", // String | Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids.
  'rootProcessInstances': false, // Boolean | Restrict the query to all process instances that are top level process instances.
  'leafProcessInstances': false, // Boolean | Restrict the query to all process instances that are leaf instances. (i.e. don't have any sub instances).
  'variables': "variables_example", // String | Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.  **Note**: Values are always treated as String objects on server side.  Valid `operator` values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`. `key` and `value` may not contain underscore or comma characters.
  'variableNamesIgnoreCase': false, // Boolean | Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal.
  'variableValuesIgnoreCase': false // Boolean | Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal.
};
apiInstance.getProcessInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceIds** | **String**| Filter by a comma-separated list of process instance ids. | [optional] 
 **businessKey** | **String**| Filter by process instance business key. | [optional] 
 **businessKeyLike** | **String**| Filter by process instance business key that the parameter is a substring of. | [optional] 
 **caseInstanceId** | **String**| Filter by case instance id. | [optional] 
 **processDefinitionId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **processDefinitionKey** | **String**| Filter by the key of the process definition the instances run on. | [optional] 
 **processDefinitionKeyIn** | **String**| Filter by a comma-separated list of process definition keys. A process instance must have one of the given process definition keys. | [optional] 
 **processDefinitionKeyNotIn** | **String**| Exclude instances by a comma-separated list of process definition keys. A process instance must not have one of the given process definition keys. | [optional] 
 **deploymentId** | **String**| Filter by the deployment the id belongs to. | [optional] 
 **superProcessInstance** | **String**| Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id. | [optional] 
 **subProcessInstance** | **String**| Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id. | [optional] 
 **superCaseInstance** | **String**| Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id. | [optional] 
 **subCaseInstance** | **String**| Restrict query to all process instances that have the given case instance as a sub case instance. Takes a case instance id. | [optional] 
 **active** | **Boolean**| Only include active process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **suspended** | **Boolean**| Only include suspended process instances. Value may only be true, as false is the default behavior. | [optional] [default to false]
 **withIncident** | **Boolean**| Filter by presence of incidents. Selects only process instances that have an incident. | [optional] [default to false]
 **incidentId** | **String**| Filter by the incident id. | [optional] 
 **incidentType** | **String**| Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types. | [optional] 
 **incidentMessage** | **String**| Filter by the incident message. Exact match. | [optional] 
 **incidentMessageLike** | **String**| Filter by the incident message that the parameter is a substring of. | [optional] 
 **tenantIdIn** | **String**| Filter by a comma-separated list of tenant ids. A process instance must have one of the given tenant ids. | [optional] 
 **withoutTenantId** | **Boolean**| Only include process instances which belong to no tenant. | [optional] [default to false]
 **processDefinitionWithoutTenantId** | **Boolean**| Only include process instances which process definition has no tenant id. | [optional] [default to false]
 **activityIdIn** | **String**| Filter by a comma-separated list of activity ids. A process instance must currently wait in a leaf activity with one of the given activity ids. | [optional] 
 **rootProcessInstances** | **Boolean**| Restrict the query to all process instances that are top level process instances. | [optional] [default to false]
 **leafProcessInstances** | **Boolean**| Restrict the query to all process instances that are leaf instances. (i.e. don&#39;t have any sub instances). | [optional] [default to false]
 **variables** | **String**| Only include process instances that have variables with certain values. Variable filtering expressions are comma-separated and are structured as follows:  A valid parameter value has the form &#x60;key_operator_value&#x60;. &#x60;key&#x60; is the variable name, &#x60;operator&#x60; is the comparison operator to be used and &#x60;value&#x60; the variable value.  **Note**: Values are always treated as String objects on server side.  Valid &#x60;operator&#x60; values are: &#x60;eq&#x60; - equal to; &#x60;neq&#x60; - not equal to; &#x60;gt&#x60; - greater than; &#x60;gteq&#x60; - greater than or equal to; &#x60;lt&#x60; - lower than; &#x60;lteq&#x60; - lower than or equal to; &#x60;like&#x60;. &#x60;key&#x60; and &#x60;value&#x60; may not contain underscore or comma characters. | [optional] 
 **variableNamesIgnoreCase** | **Boolean**| Match all variable names in this query case-insensitively. If set to true variableName and variablename are treated as equal. | [optional] [default to false]
 **variableValuesIgnoreCase** | **Boolean**| Match all variable values in this query case-insensitively. If set to true variableValue and variablevalue are treated as equal. | [optional] [default to false]

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyProcessInstance

> modifyProcessInstance(id, opts)



Submits a list of modification instructions to change a process instance&#39;s execution state. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Canceling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed immediately and in the order they are provided in this request&#39;s body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/develop/user-guide/process-engine/process-instance-modification/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to modify.
let opts = {
  'processInstanceModificationDto': {"skipCustomListeners":true,"skipIoMappings":true,"instructions":[{"type":"startBeforeActivity","activityId":"activityId","variables":{"var":{"value":"aVariableValue","local":false,"type":"String"},"varLocal":{"value":"anotherVariableValue","local":true,"type":"String"}}},{"type":"cancel","activityInstanceId":"anActivityInstanceId"}],"annotation":"Modified to resolve an error."} // ProcessInstanceModificationDto | 
};
apiInstance.modifyProcessInstance(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to modify. | 
 **processInstanceModificationDto** | [**ProcessInstanceModificationDto**](ProcessInstanceModificationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyProcessInstanceAsyncOperation

> BatchDto modifyProcessInstanceAsyncOperation(id, opts)



Submits a list of modification instructions to change a process instance&#39;s execution state async. A modification instruction is one of the following:  * Starting execution before an activity * Starting execution after an activity on its single outgoing sequence flow * Starting execution on a specific sequence flow * Cancelling an activity instance, transition instance, or all instances (activity or transition) for an activity  Instructions are executed asynchronous and in the order they are provided in this request&#39;s body. Variables can be provided with every starting instruction.  The exact semantics of modification can be read about in the [User guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-modification/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to modify.
let opts = {
  'processInstanceModificationDto': {"skipCustomListeners":true,"skipIoMappings":true,"instructions":[{"type":"startBeforeActivity","activityId":"activityId"},{"type":"cancel","activityInstanceId":"anActivityInstanceId"}],"annotation":"Modified to resolve an error."} // ProcessInstanceModificationDto | 
};
apiInstance.modifyProcessInstanceAsyncOperation(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to modify. | 
 **processInstanceModificationDto** | [**ProcessInstanceModificationDto**](ProcessInstanceModificationDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## modifyProcessInstanceVariables

> modifyProcessInstanceVariables(id, opts)



Updates or deletes the variables of a process instance by id. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to set variables for.
let opts = {
  'patchVariablesDto': {"modifications":{"aVariable":{"value":"aValue","type":"String"},"anotherVariable":{"value":42,"type":"Integer"}},"deletions":["aThirdVariable","FourthVariable"]} // PatchVariablesDto | 
};
apiInstance.modifyProcessInstanceVariables(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to set variables for. | 
 **patchVariablesDto** | [**PatchVariablesDto**](PatchVariablesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryProcessInstances

> [ProcessInstanceDto] queryProcessInstances(opts)



Queries for process instances that fulfill given parameters through a JSON object. This method is slightly more powerful than the Get Instances method because it allows filtering by multiple process variables of types &#x60;string&#x60;, &#x60;number&#x60; or &#x60;boolean&#x60;.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'firstResult': 56, // Number | Pagination of results. Specifies the index of the first result to return.
  'maxResults': 56, // Number | Pagination of results. Specifies the maximum number of results to return. Will return less results if there are no more results left.
  'processInstanceQueryDto': {"variables":[{"name":"myVariable","operator":"eq","value":"camunda"},{"name":"mySecondVariable","operator":"neq","value":124}],"processDefinitionId":"aProcessDefinitionId","sorting":[{"sortBy":"definitionKey","sortOrder":"asc"},{"sortBy":"instanceId","sortOrder":"desc"}]} // ProcessInstanceQueryDto | 
};
apiInstance.queryProcessInstances(opts).then((data) => {
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
 **processInstanceQueryDto** | [**ProcessInstanceQueryDto**](ProcessInstanceQueryDto.md)|  | [optional] 

### Return type

[**[ProcessInstanceDto]**](ProcessInstanceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryProcessInstancesCount

> CountResultDto queryProcessInstancesCount(opts)



Queries for the number of process instances that fulfill the given parameters. This method takes the same message body as the Get Instances (POST) method and therefore it is slightly more powerful than the Get Instance Count method.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'processInstanceQueryDto': {"variables":[{"name":"myVariable","operator":"eq","value":"camunda"},{"name":"mySecondVariable","operator":"neq","value":124}],"processDefinitionId":"aProcessDefinitionId"} // ProcessInstanceQueryDto | 
};
apiInstance.queryProcessInstancesCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceQueryDto** | [**ProcessInstanceQueryDto**](ProcessInstanceQueryDto.md)|  | [optional] 

### Return type

[**CountResultDto**](CountResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setProcessInstanceVariable

> setProcessInstanceVariable(id, varName, opts)



Sets a variable of a given process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = {
  'variableValueDto': {"value":"someValue","type":"String"} // VariableValueDto | 
};
apiInstance.setProcessInstanceVariable(id, varName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **variableValueDto** | [**VariableValueDto**](VariableValueDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setProcessInstanceVariableBinary

> setProcessInstanceVariableBinary(id, varName, opts)



Sets the serialized value for a binary variable or the binary value for a file variable.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = {
  'data': "/path/to/file", // File | The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory.
  'valueType': "valueType_example" // String | The name of the variable type. Either Bytes for a byte array variable or File for a file variable.
};
apiInstance.setProcessInstanceVariableBinary(id, varName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 
 **data** | **File**| The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory. | [optional] 
 **valueType** | **String**| The name of the variable type. Either Bytes for a byte array variable or File for a file variable. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## setRetriesByProcess

> BatchDto setRetriesByProcess(opts)



Create a batch to set retries of jobs associated with given processes asynchronously.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'setJobRetriesByProcessDto': {"retries":5,"processInstances":["aProcess","secondProcess"],"processInstanceQuery":{"processDefinitionId":"aProcessDefinitionId"}} // SetJobRetriesByProcessDto | Please note that if both processInstances and processInstanceQuery are provided, then the resulting execution will be performed on the union of these sets. **Unallowed property**: `historicProcessInstanceQuery`
};
apiInstance.setRetriesByProcess(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setJobRetriesByProcessDto** | [**SetJobRetriesByProcessDto**](SetJobRetriesByProcessDto.md)| Please note that if both processInstances and processInstanceQuery are provided, then the resulting execution will be performed on the union of these sets. **Unallowed property**: &#x60;historicProcessInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setRetriesByProcessHistoricQueryBased

> BatchDto setRetriesByProcessHistoricQueryBased(opts)



Create a batch to set retries of jobs asynchronously based on a historic process instance query.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'setJobRetriesByProcessDto': {"retries":5,"historicProcessInstanceQuery":{"startedBefore":"2017-04-28T11:24:37.769+0200"},"processInstances":["aProcess","secondProcess"]} // SetJobRetriesByProcessDto | Please note that if both processInstances and historicProcessInstanceQuery are provided, then the resulting execution will be performed on the union of these sets. **Unallowed property**: `processInstanceQuery`
};
apiInstance.setRetriesByProcessHistoricQueryBased(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setJobRetriesByProcessDto** | [**SetJobRetriesByProcessDto**](SetJobRetriesByProcessDto.md)| Please note that if both processInstances and historicProcessInstanceQuery are provided, then the resulting execution will be performed on the union of these sets. **Unallowed property**: &#x60;processInstanceQuery&#x60; | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setVariablesAsyncOperation

> BatchDto setVariablesAsyncOperation(opts)



Update or create runtime process variables in the root scope of process instances.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'setVariablesAsyncDto': {"processInstanceIds":["b4d2ad98-7240-11e9-98b7-be5e0f7575b7"],"processInstanceQuery":{"processDefinitionKey":"my-process-definition-key"},"variables":{"myVariableName":{"value":"myStringValue"}}} // SetVariablesAsyncDto | 
};
apiInstance.setVariablesAsyncOperation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setVariablesAsyncDto** | [**SetVariablesAsyncDto**](SetVariablesAsyncDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSuspensionState

> updateSuspensionState(opts)



Activates or suspends process instances by providing certain criteria:  # Activate/Suspend Process Instance By Process Definition Id * &#x60;suspend&#x60; * &#x60;processDefinitionId&#x60;  # Activate/Suspend Process Instance By Process Definition Key  * &#x60;suspend&#x60; * &#x60;processDefinitionKey&#x60; * &#x60;processDefinitionTenantId&#x60; * &#x60;processDefinitionWithoutTenantId&#x60;  # Activate/Suspend Process Instance In Group * &#x60;suspend&#x60; * &#x60;processInstanceIds&#x60; * &#x60;processInstanceQuery&#x60; * &#x60;historicProcessInstanceQuery&#x60;

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'processInstanceSuspensionStateDto': {"processDefinitionId":"aProcDefId","suspended":true} // ProcessInstanceSuspensionStateDto | 
};
apiInstance.updateSuspensionState(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceSuspensionStateDto** | [**ProcessInstanceSuspensionStateDto**](ProcessInstanceSuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSuspensionStateAsyncOperation

> BatchDto updateSuspensionStateAsyncOperation(opts)



Activates or suspends process instances asynchronously with a list of process instance ids, a process instance query, and/or a historical process instance query.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let opts = {
  'processInstanceSuspensionStateAsyncDto': {"processInstanceIds":["processInstanceId1","processInstanceIdN"],"suspended":true} // ProcessInstanceSuspensionStateAsyncDto | 
};
apiInstance.updateSuspensionStateAsyncOperation(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceSuspensionStateAsyncDto** | [**ProcessInstanceSuspensionStateAsyncDto**](ProcessInstanceSuspensionStateAsyncDto.md)|  | [optional] 

### Return type

[**BatchDto**](BatchDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSuspensionStateById

> updateSuspensionStateById(id, opts)



Activates or suspends a given process instance by id.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.ProcessInstanceApi();
let id = "id_example"; // String | The id of the process instance to activate or suspend.
let opts = {
  'suspensionStateDto': {"suspended":true} // SuspensionStateDto | 
};
apiInstance.updateSuspensionStateById(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the process instance to activate or suspend. | 
 **suspensionStateDto** | [**SuspensionStateDto**](SuspensionStateDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

