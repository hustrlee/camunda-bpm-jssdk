# CamundaBpmRestApi.HistoricActivityInstanceQueryDtoSorting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sortBy** | **String** | Sort the results lexicographically by a given criterion. Must be used in conjunction with the sortOrder parameter. | [optional] 
**sortOrder** | **String** | Sort the results in a given order. Values may be &#x60;asc&#x60; for ascending order or &#x60;desc&#x60; for descending order. Must be used in conjunction with the sortBy parameter. | [optional] 



## Enum: SortByEnum


* `activityInstanceId` (value: `"activityInstanceId"`)

* `instanceId` (value: `"instanceId"`)

* `executionId` (value: `"executionId"`)

* `activityId` (value: `"activityId"`)

* `activityName` (value: `"activityName"`)

* `activityType` (value: `"activityType"`)

* `startTime` (value: `"startTime"`)

* `endTime` (value: `"endTime"`)

* `duration` (value: `"duration"`)

* `definitionId` (value: `"definitionId"`)

* `occurrence` (value: `"occurrence"`)

* `tenantId` (value: `"tenantId"`)





## Enum: SortOrderEnum


* `asc` (value: `"asc"`)

* `desc` (value: `"desc"`)




