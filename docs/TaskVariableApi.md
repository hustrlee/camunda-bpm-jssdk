# CamundaJssdk.TaskVariableApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskVariable**](TaskVariableApi.md#deleteTaskVariable) | **DELETE** /task/{id}/variables/{varName} | 
[**getTaskVariable**](TaskVariableApi.md#getTaskVariable) | **GET** /task/{id}/variables/{varName} | 
[**getTaskVariableBinary**](TaskVariableApi.md#getTaskVariableBinary) | **GET** /task/{id}/variables/{varName}/data | 
[**getTaskVariables**](TaskVariableApi.md#getTaskVariables) | **GET** /task/{id}/variables | 
[**modifyTaskVariables**](TaskVariableApi.md#modifyTaskVariables) | **POST** /task/{id}/variables | 
[**putTaskVariable**](TaskVariableApi.md#putTaskVariable) | **PUT** /task/{id}/variables/{varName} | 
[**setBinaryTaskVariable**](TaskVariableApi.md#setBinaryTaskVariable) | **POST** /task/{id}/variables/{varName}/data | 



## deleteTaskVariable

> deleteTaskVariable(id, varName)



Removes a variable that is visible to a task. A variable is visible to a task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to be removed.
apiInstance.deleteTaskVariable(id, varName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to delete the variable from. | 
 **varName** | **String**| The name of the variable to be removed. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskVariable

> VariableValueDto getTaskVariable(id, varName, opts)



Retrieves a variable from the context of a given task. The variable must be visible from the task. It is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable from.
let varName = "varName_example"; // String | The name of the variable to get.
let opts = {
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskVariable(id, varName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variable from. | 
 **varName** | **String**| The name of the variable to get. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskVariableBinary

> File getTaskVariableBinary(id, varName)



Retrieves a binary variable from the context of a given task. Applicable for byte array and file variables. The variable must be visible from the task. It is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
apiInstance.getTaskVariableBinary(id, varName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variable for. | 
 **varName** | **String**| The name of the variable to retrieve. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, text/plain, application/json


## getTaskVariables

> {String: VariableValueDto} getTaskVariables(id, opts)



Retrieves all variables visible from the task. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variables from.
let opts = {
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`). If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskVariables(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variables from. | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;). If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyTaskVariables

> modifyTaskVariables(id, opts)



Updates or deletes the variables visible from the task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to set variables for.
let opts = {
  'patchVariablesDto': {"modifications":{"aVariable":{"value":"aValue","type":"String"},"anotherVariable":{"value":42,"type":"Integer"}},"deletions":["aThirdVariable","FourthVariable"]} // PatchVariablesDto | 
};
apiInstance.modifyTaskVariables(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to set variables for. | 
 **patchVariablesDto** | [**PatchVariablesDto**](PatchVariablesDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putTaskVariable

> putTaskVariable(id, varName, opts)



Updates a process variable that is visible from the Task scope. A variable is visible from the task if it is a local task variable, or declared in a parent scope of the task. See the documentation on [variable scopes and visibility](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables#variable-scopes-and-variable-visibility).  **Note**: If a variable doesn&#39;t exist, the variable is created in the top-most scope visible from the task.

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = {
  'variableValueDto': {"value":"someValue","type":"String"} // VariableValueDto | 
};
apiInstance.putTaskVariable(id, varName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to set the variable for. | 
 **varName** | **String**| The name of the variable to set. | 
 **variableValueDto** | [**VariableValueDto**](VariableValueDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setBinaryTaskVariable

> setBinaryTaskVariable(id, varName, opts)



Sets the serialized value for a binary variable or the binary value for a file variable visible from the task. A variable is visible from the task if it is a local task variable or declared in a parent scope of the task. See documentation on [visiblity of variables](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/).

### Example

```javascript
import CamundaJssdk from 'camunda-jssdk';

let apiInstance = new CamundaJssdk.TaskVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = {
  'data': "/path/to/file", // File | The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory.
  'valueType': "valueType_example" // String | The name of the variable type. Either Bytes for a byte array variable or File for a file variable.
};
apiInstance.setBinaryTaskVariable(id, varName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variable for. | 
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

