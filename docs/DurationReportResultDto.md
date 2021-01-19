# CamundaBpmRestApi.DurationReportResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **Number** | Specifies a timespan within a year. **Note:** The period must be interpreted in conjunction with the returned &#x60;periodUnit&#x60;. | [optional] 
**periodUnit** | **String** | The unit of the given period. Possible values are &#x60;MONTH&#x60; and &#x60;QUARTER&#x60;. | [optional] 
**minimum** | **Number** | The smallest duration in milliseconds of all completed process instances which were started in the given period. | [optional] 
**maximum** | **Number** | The greatest duration in milliseconds of all completed process instances which were started in the given period. | [optional] 
**average** | **Number** | The average duration in milliseconds of all completed process instances which were started in the given period. | [optional] 



## Enum: PeriodUnitEnum


* `MONTH` (value: `"MONTH"`)

* `QUARTER` (value: `"QUARTER"`)




