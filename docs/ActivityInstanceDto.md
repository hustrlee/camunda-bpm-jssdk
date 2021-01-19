# CamundaBpmRestApi.ActivityInstanceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of the activity instance. | [optional] 
**parentActivityInstanceId** | **String** | The id of the parent activity instance, for example a sub process instance. | [optional] 
**activityId** | **String** | The id of the activity. | [optional] 
**activityName** | **String** | The name of the activity | [optional] 
**activityType** | **String** | The type of activity (corresponds to the XML element name in the BPMN 2.0, e.g., &#39;userTask&#39;) | [optional] 
**processInstanceId** | **String** | The id of the process instance this activity instance is part of. | [optional] 
**processDefinitionId** | **String** | The id of the process definition. | [optional] 
**childActivityInstances** | [**[ActivityInstanceDto]**](ActivityInstanceDto.md) | A list of child activity instances. | [optional] 
**childTransitionInstances** | [**[TransitionInstanceDto]**](TransitionInstanceDto.md) | A list of child transition instances. A transition instance represents an execution waiting in an asynchronous continuation. | [optional] 
**executionIds** | **[String]** | A list of execution ids. | [optional] 
**incidentIds** | **[String]** | A list of incident ids. | [optional] 
**incidents** | [**[ActivityInstanceIncidentDto]**](ActivityInstanceIncidentDto.md) | A list of JSON objects containing incident specific properties: * &#x60;id&#x60;: the id of the incident * &#x60;activityId&#x60;: the activity id in which the incident occurred | [optional] 


