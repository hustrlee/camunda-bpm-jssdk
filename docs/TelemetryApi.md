# CamundaBpmRestApi.TelemetryApi

All URIs are relative to *http://localhost:8080/engine-rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configureTelemetry**](TelemetryApi.md#configureTelemetry) | **POST** /telemetry/configuration | Configure Telemetry
[**getTelemetryConfiguration**](TelemetryApi.md#getTelemetryConfiguration) | **GET** /telemetry/configuration | Fetch Telemetry Configuration



## configureTelemetry

> configureTelemetry(opts)

Configure Telemetry

Configures whether Camunda receives data collection of the process engine setup and usage.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TelemetryApi();
let opts = {
  'telemetryConfigurationDto': {"enableTelemetry":true} // TelemetryConfigurationDto | 
};
apiInstance.configureTelemetry(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telemetryConfigurationDto** | [**TelemetryConfigurationDto**](TelemetryConfigurationDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTelemetryConfiguration

> TelemetryConfigurationDto getTelemetryConfiguration()

Fetch Telemetry Configuration

Fetches Telemetry Configuration.

### Example

```javascript
import CamundaBpmRestApi from 'camunda_bpm_rest_api';

let apiInstance = new CamundaBpmRestApi.TelemetryApi();
apiInstance.getTelemetryConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TelemetryConfigurationDto**](TelemetryConfigurationDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

