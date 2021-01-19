# CamundaBpmRestApi.TaskQueryDtoSorting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortBy** | **String** | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
**sortOrder** | **String** | Sort the results in a given order. Values may be &#x60;asc&#x60; for ascending order or &#x60;desc&#x60; for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 
**parameters** | [**SortTaskQueryParametersDto**](SortTaskQueryParametersDto.md) |  | [optional] 



## Enum: SortByEnum


* `instanceId` (value: `"instanceId"`)

* `caseInstanceId` (value: `"caseInstanceId"`)

* `dueDate` (value: `"dueDate"`)

* `executionId` (value: `"executionId"`)

* `caseExecutionId` (value: `"caseExecutionId"`)

* `assignee` (value: `"assignee"`)

* `created` (value: `"created"`)

* `description` (value: `"description"`)

* `id` (value: `"id"`)

* `name` (value: `"name"`)

* `nameCaseInsensitive` (value: `"nameCaseInsensitive"`)

* `priority` (value: `"priority"`)

* `processVariable` (value: `"processVariable"`)

* `executionVariable` (value: `"executionVariable"`)

* `taskVariable` (value: `"taskVariable"`)

* `caseExecutionVariable` (value: `"caseExecutionVariable"`)

* `caseInstanceVariable` (value: `"caseInstanceVariable"`)





## Enum: SortOrderEnum


* `asc` (value: `"asc"`)

* `desc` (value: `"desc"`)




