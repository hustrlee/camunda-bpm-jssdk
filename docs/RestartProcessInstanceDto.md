# CamundaBpmRestApi.RestartProcessInstanceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processInstanceIds** | **[String]** | A list of process instance ids to restart. | [optional] 
**historicProcessInstanceQuery** | [**HistoricProcessInstanceQueryDto**](HistoricProcessInstanceQueryDto.md) |  | [optional] 
**skipCustomListeners** | **Boolean** | Skip execution listener invocation for activities that are started as part of this request. | [optional] 
**skipIoMappings** | **Boolean** | Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/#input-output-variable-mapping) for activities that are started as part of this request. | [optional] 
**initialVariables** | **Boolean** | Set the initial set of variables during restart. By default, the last set of variables is used. | [optional] 
**withoutBusinessKey** | **Boolean** | Do not take over the business key of the historic process instance. | [optional] 
**instructions** | [**[RestartProcessInstanceModificationInstructionDto]**](RestartProcessInstanceModificationInstructionDto.md) | **Optional**. A JSON array of instructions that specify which activities to start the process instance at. If this property is omitted, the process instance starts at its default blank start event. | [optional] 


