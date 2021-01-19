# CamundaBpmRestApi.MessageCorrelationResultWithVariableDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultType** | **String** | Indicates if the message was correlated to a message start event or an  intermediate message catching event. In the first case, the resultType is  &#x60;ProcessDefinition&#x60; and otherwise &#x60;Execution&#x60;. | [optional] 
**processInstance** | [**ProcessInstanceDto**](ProcessInstanceDto.md) |  | [optional] 
**execution** | [**ExecutionDto**](ExecutionDto.md) |  | [optional] 
**variables** | [**{String: VariableValueDto}**](VariableValueDto.md) | This property is returned if the &#x60;variablesInResultEnabled&#x60; is set to &#x60;true&#x60;. Contains a list of the process variables.  | [optional] 



## Enum: ResultTypeEnum


* `Execution` (value: `"Execution"`)

* `ProcessDefinition` (value: `"ProcessDefinition"`)




