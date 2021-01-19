# CamundaBpmRestApi.AttachmentDtoAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of the task attachment. | [optional] 
**name** | **String** | The name of the task attachment. | [optional] 
**description** | **String** | The description of the task attachment. | [optional] 
**taskId** | **String** | The id of the task to which the attachment belongs. | [optional] 
**type** | **String** | Indication of the type of content that this attachment refers to. Can be MIME type or any other indication. | [optional] 
**url** | **String** | The url to the remote content of the task attachment. | [optional] 
**createTime** | **Date** | The time the variable was inserted. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**removalTime** | **Date** | The time after which the attachment should be removed by the History Cleanup job. [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) &#x60;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ&#x60;. | [optional] 
**rootProcessInstanceId** | **String** | The process instance id of the root process instance that initiated the process containing the task. | [optional] 


