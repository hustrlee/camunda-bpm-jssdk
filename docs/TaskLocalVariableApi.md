# CamundaBpmRestApi.TaskLocalVariableApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaskLocalVariable**](TaskLocalVariableApi.md#deleteTaskLocalVariable) | **DELETE** /task/{id}/localVariables/{varName} | 
[**getTaskLocalVariable**](TaskLocalVariableApi.md#getTaskLocalVariable) | **GET** /task/{id}/localVariables/{varName} | 
[**getTaskLocalVariableBinary**](TaskLocalVariableApi.md#getTaskLocalVariableBinary) | **GET** /task/{id}/localVariables/{varName}/data | 
[**getTaskLocalVariables**](TaskLocalVariableApi.md#getTaskLocalVariables) | **GET** /task/{id}/localVariables | 
[**modifyTaskLocalVariables**](TaskLocalVariableApi.md#modifyTaskLocalVariables) | **POST** /task/{id}/localVariables | 
[**putTaskLocalVariable**](TaskLocalVariableApi.md#putTaskLocalVariable) | **PUT** /task/{id}/localVariables/{varName} | 
[**setBinaryTaskLocalVariable**](TaskLocalVariableApi.md#setBinaryTaskLocalVariable) | **POST** /task/{id}/localVariables/{varName}/data | 



## deleteTaskLocalVariable

> deleteTaskLocalVariable(id, varName)



Removes a local variable from a task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to delete the variable from.
let varName = "varName_example"; // String | The name of the variable to be removed.
apiInstance.deleteTaskLocalVariable(id, varName).then(() => {
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


## getTaskLocalVariable

> VariableValueDto getTaskLocalVariable(id, varName, opts)



Retrieves a variable from the context of a given task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable from.
let varName = "varName_example"; // String | The name of the variable to get
let opts = {
  'deserializeValue': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskLocalVariable(id, varName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variable from. | 
 **varName** | **String**| The name of the variable to get | 
 **deserializeValue** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  Note: While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**VariableValueDto**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskLocalVariableBinary

> File getTaskLocalVariableBinary(id, varName)



Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file variables.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
apiInstance.getTaskLocalVariableBinary(id, varName).then((data) => {
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


## getTaskLocalVariables

> {String: VariableValueDto} getTaskLocalVariables(id, opts)



Retrieves all variables of a given task by id.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variables from.
let opts = {
  'deserializeValues': true // Boolean | Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default `true`).  If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API's classpath.  If set to `false`, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this parameter to `false` when developing web applications that are independent of the Java process applications deployed to the engine.
};
apiInstance.getTaskLocalVariables(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the task to retrieve the variables from. | 
 **deserializeValues** | **Boolean**| Determines whether serializable variable values (typically variables that store custom Java objects) should be deserialized on the server side (default &#x60;true&#x60;).  If set to &#x60;true&#x60;, a serializable variable will be deserialized on server side and transformed to JSON using [Jackson&#39;s](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note that this requires the Java classes of the variable value to be on the REST API&#39;s classpath.  If set to &#x60;false&#x60;, a serializable variable will be returned in its serialized format. For example, a variable that is serialized as XML will be returned as a JSON string containing XML.  **Note:** While &#x60;true&#x60; is the default value for reasons of backward compatibility, we recommend setting this parameter to &#x60;false&#x60; when developing web applications that are independent of the Java process applications deployed to the engine. | [optional] [default to true]

### Return type

[**{String: VariableValueDto}**](VariableValueDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyTaskLocalVariables

> modifyTaskLocalVariables(id, opts)



Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is updated AND deleted, the deletion overrides the update.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to set variables for.
let opts = {
  'patchVariablesDto': {"modifications":{"aVariable":{"value":"aValue","type":"String"},"anotherVariable":{"value":42,"type":"Integer"}},"deletions":["aThirdVariable","FourthVariable"]} // PatchVariablesDto | 
};
apiInstance.modifyTaskLocalVariables(id, opts).then(() => {
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


## putTaskLocalVariable

> putTaskLocalVariable(id, varName, opts)



Sets a variable in the context of a given task.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to set the variable for.
let varName = "varName_example"; // String | The name of the variable to set.
let opts = {
  'variableValueDto': {"value":"someValue","type":"String"} // VariableValueDto | 
};
apiInstance.putTaskLocalVariable(id, varName, opts).then(() => {
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


## setBinaryTaskLocalVariable

> setBinaryTaskLocalVariable(id, varName, opts)



Sets the serialized value for a binary variable or the binary value for a file variable.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TaskLocalVariableApi();
let id = "id_example"; // String | The id of the task to retrieve the variable for.
let varName = "varName_example"; // String | The name of the variable to retrieve.
let opts = {
  'data': "/path/to/file", // File | The binary data to be set. For File variables, this multipart can contain the filename, binary value and MIME type of the file variable to be set Only the filename is mandatory.
  'valueType': "valueType_example" // String | The name of the variable type. Either Bytes for a byte array variable or File for a file variable.
};
apiInstance.setBinaryTaskLocalVariable(id, varName, opts).then(() => {
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

