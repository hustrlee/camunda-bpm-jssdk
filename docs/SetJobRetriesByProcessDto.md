# CamundaBpmRestApi.SetJobRetriesByProcessDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processInstances** | **[String]** | A list of process instance ids to fetch jobs, for which retries will be set. | [optional] 
**retries** | **Number** | An integer representing the number of retries. Please note that the value cannot be negative or null. | [optional] 
**processInstanceQuery** | [**ProcessInstanceQueryDto**](ProcessInstanceQueryDto.md) |  | [optional] 
**historicProcessInstanceQuery** | [**HistoricProcessInstanceQueryDto**](HistoricProcessInstanceQueryDto.md) |  | [optional] 


