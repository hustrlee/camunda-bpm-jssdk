# CamundaBpmRestApi.TaskDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The task id. | [optional] 
**name** | **String** | The task name. | [optional] 
**assignee** | **String** | The assignee&#39;s id. | [optional] 
**owner** | **String** | The owner&#39;s id. | [optional] 
**created** | **Date** | The date the task was created on. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**due** | **Date** | The task&#39;s due date. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**followUp** | **Date** | The follow-up date for the task. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**delegationState** | **String** | The task&#39;s delegation state. Possible values are &#x60;PENDING&#x60; and &#x60;RESOLVED&#x60;. | [optional] 
**description** | **String** | The task&#39;s description. | [optional] 
**executionId** | **String** | The id of the execution the task belongs to. | [optional] 
**parentTaskId** | **String** | The id the parent task, if this task is a subtask. | [optional] 
**priority** | **Number** | The task&#39;s priority. | [optional] 
**processDefinitionId** | **String** | The id of the process definition the task belongs to. | [optional] 
**processInstanceId** | **String** | The id of the process instance the task belongs to. | [optional] 
**caseExecutionId** | **String** | The id of the case execution the task belongs to. | [optional] 
**caseDefinitionId** | **String** | The id of the case definition the task belongs to. | [optional] 
**caseInstanceId** | **String** | The id of the case instance the task belongs to. | [optional] 
**taskDefinitionKey** | **String** | The task&#39;s key. | [optional] 
**suspended** | **Boolean** | Whether the task belongs to a process instance that is suspended. | [optional] 
**formKey** | **String** | If not &#x60;null&#x60;, the form key for the task. | [optional] 
**tenantId** | **String** | If not &#x60;null&#x60;, the tenant id of the task. | [optional] 



## Enum: DelegationStateEnum


* `PENDING` (value: `"PENDING"`)

* `RESOLVED` (value: `"RESOLVED"`)




