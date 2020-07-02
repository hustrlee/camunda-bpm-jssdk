# camunda_bpm_rest_api

CamundaBpmRestApi - JavaScript client for camunda_bpm_rest_api
OpenApi Spec for Camunda BPM REST API.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 7.13.0
- Package version: 7.13.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install camunda_bpm_rest_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your camunda_bpm_rest_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CamundaBpmRestApi = require('camunda_bpm_rest_api');


var api = new CamundaBpmRestApi.ConditionApi()
var opts = {
  'evaluationConditionDto': {"variables":{"temperature":{"value":24,"type":"Integer","valueInfo":{"transient":true}},"city":{"value":"Parma","type":"String"}},"businessKey":"aBusinessKey","tenantId":"aTenantId"} // {EvaluationConditionDto} 
};
api.evaluateCondition(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080/engine-rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CamundaBpmRestApi.ConditionApi* | [**evaluateCondition**](docs/ConditionApi.md#evaluateCondition) | **POST** /condition | 
*CamundaBpmRestApi.DeploymentApi* | [**createDeployment**](docs/DeploymentApi.md#createDeployment) | **POST** /deployment/create | 
*CamundaBpmRestApi.DeploymentApi* | [**deleteDeployment**](docs/DeploymentApi.md#deleteDeployment) | **DELETE** /deployment/{id} | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeployment**](docs/DeploymentApi.md#getDeployment) | **GET** /deployment/{id} | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeploymentResource**](docs/DeploymentApi.md#getDeploymentResource) | **GET** /deployment/{id}/resources/{resourceId} | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeploymentResourceData**](docs/DeploymentApi.md#getDeploymentResourceData) | **GET** /deployment/{id}/resources/{resourceId}/data | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeploymentResources**](docs/DeploymentApi.md#getDeploymentResources) | **GET** /deployment/{id}/resources | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeployments**](docs/DeploymentApi.md#getDeployments) | **GET** /deployment | 
*CamundaBpmRestApi.DeploymentApi* | [**getDeploymentsCount**](docs/DeploymentApi.md#getDeploymentsCount) | **GET** /deployment/count | 
*CamundaBpmRestApi.DeploymentApi* | [**redeploy**](docs/DeploymentApi.md#redeploy) | **POST** /deployment/{id}/redeploy | 
*CamundaBpmRestApi.EngineApi* | [**getProcessEngineNames**](docs/EngineApi.md#getProcessEngineNames) | **GET** /engine | 
*CamundaBpmRestApi.EventSubscriptionApi* | [**getEventSubscriptions**](docs/EventSubscriptionApi.md#getEventSubscriptions) | **GET** /event-subscription | 
*CamundaBpmRestApi.EventSubscriptionApi* | [**getEventSubscriptionsCount**](docs/EventSubscriptionApi.md#getEventSubscriptionsCount) | **GET** /event-subscription/count | 
*CamundaBpmRestApi.ExternalTaskApi* | [**completeExternalTaskResource**](docs/ExternalTaskApi.md#completeExternalTaskResource) | **POST** /external-task/{id}/complete | 
*CamundaBpmRestApi.ExternalTaskApi* | [**extendLock**](docs/ExternalTaskApi.md#extendLock) | **POST** /external-task/{id}/extendLock | 
*CamundaBpmRestApi.ExternalTaskApi* | [**fetchAndLock**](docs/ExternalTaskApi.md#fetchAndLock) | **POST** /external-task/fetchAndLock | 
*CamundaBpmRestApi.ExternalTaskApi* | [**getExternalTask**](docs/ExternalTaskApi.md#getExternalTask) | **GET** /external-task/{id} | 
*CamundaBpmRestApi.ExternalTaskApi* | [**getExternalTaskErrorDetails**](docs/ExternalTaskApi.md#getExternalTaskErrorDetails) | **GET** /external-task/{id}/errorDetails | 
*CamundaBpmRestApi.ExternalTaskApi* | [**getExternalTasks**](docs/ExternalTaskApi.md#getExternalTasks) | **GET** /external-task | 
*CamundaBpmRestApi.ExternalTaskApi* | [**getExternalTasksCount**](docs/ExternalTaskApi.md#getExternalTasksCount) | **GET** /external-task/count | 
*CamundaBpmRestApi.ExternalTaskApi* | [**getTopicNames**](docs/ExternalTaskApi.md#getTopicNames) | **GET** /external-task/topic-names | 
*CamundaBpmRestApi.ExternalTaskApi* | [**handleExternalTaskBpmnError**](docs/ExternalTaskApi.md#handleExternalTaskBpmnError) | **POST** /external-task/{id}/bpmnError | 
*CamundaBpmRestApi.ExternalTaskApi* | [**handleFailure**](docs/ExternalTaskApi.md#handleFailure) | **POST** /external-task/{id}/failure | 
*CamundaBpmRestApi.ExternalTaskApi* | [**queryExternalTasks**](docs/ExternalTaskApi.md#queryExternalTasks) | **POST** /external-task | 
*CamundaBpmRestApi.ExternalTaskApi* | [**queryExternalTasksCount**](docs/ExternalTaskApi.md#queryExternalTasksCount) | **POST** /external-task/count | 
*CamundaBpmRestApi.ExternalTaskApi* | [**setExternalTaskResourcePriority**](docs/ExternalTaskApi.md#setExternalTaskResourcePriority) | **PUT** /external-task/{id}/priority | 
*CamundaBpmRestApi.ExternalTaskApi* | [**setExternalTaskResourceRetries**](docs/ExternalTaskApi.md#setExternalTaskResourceRetries) | **PUT** /external-task/{id}/retries | 
*CamundaBpmRestApi.ExternalTaskApi* | [**setExternalTaskRetries**](docs/ExternalTaskApi.md#setExternalTaskRetries) | **PUT** /external-task/retries | 
*CamundaBpmRestApi.ExternalTaskApi* | [**setExternalTaskRetriesAsyncOperation**](docs/ExternalTaskApi.md#setExternalTaskRetriesAsyncOperation) | **POST** /external-task/retries-async | 
*CamundaBpmRestApi.ExternalTaskApi* | [**unlock**](docs/ExternalTaskApi.md#unlock) | **POST** /external-task/{id}/unlock | 
*CamundaBpmRestApi.MessageApi* | [**deliverMessage**](docs/MessageApi.md#deliverMessage) | **POST** /message | 
*CamundaBpmRestApi.MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getMetrics) | **GET** /metrics/{metrics-name}/sum | 
*CamundaBpmRestApi.MetricsApi* | [**interval**](docs/MetricsApi.md#interval) | **GET** /metrics | 
*CamundaBpmRestApi.ProcessDefinitionApi* | [**deleteProcessDefinition**](docs/ProcessDefinitionApi.md#deleteProcessDefinition) | **DELETE** /process-definition/{id} | Delete
*CamundaBpmRestApi.ProcessDefinitionApi* | [**deleteProcessDefinitionsByKey**](docs/ProcessDefinitionApi.md#deleteProcessDefinitionsByKey) | **DELETE** /process-definition/key/{key} | Delete By Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**deleteProcessDefinitionsByKeyAndTenantId**](docs/ProcessDefinitionApi.md#deleteProcessDefinitionsByKeyAndTenantId) | **DELETE** /process-definition/key/{key}/tenant/{tenant-id} | Delete By Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getActivityStatistics**](docs/ProcessDefinitionApi.md#getActivityStatistics) | **GET** /process-definition/{id}/statistics | Get Activity Instance Statistics
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getActivityStatisticsByProcessDefinitionKey**](docs/ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKey) | **GET** /process-definition/key/{key}/statistics | Get Activity Instance Statistics
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getActivityStatisticsByProcessDefinitionKeyAndTenantId**](docs/ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/statistics | Get Activity Instance Statistics
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getDeployedStartForm**](docs/ProcessDefinitionApi.md#getDeployedStartForm) | **GET** /process-definition/{id}/deployed-start-form | Get Deployed Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getDeployedStartFormByKey**](docs/ProcessDefinitionApi.md#getDeployedStartFormByKey) | **GET** /process-definition/key/{key}/deployed-start-form | Get Deployed Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getDeployedStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getDeployedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/deployed-start-form | Get Deployed Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getLatestProcessDefinitionByTenantId**](docs/ProcessDefinitionApi.md#getLatestProcessDefinitionByTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id} | Get
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinition**](docs/ProcessDefinitionApi.md#getProcessDefinition) | **GET** /process-definition/{id} | Get
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20Xml**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20Xml) | **GET** /process-definition/{id}/xml | Get XML
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20XmlByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKey) | **GET** /process-definition/key/{key}/xml | Get XML
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20XmlByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/xml | Get XML
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionByKey) | **GET** /process-definition/key/{key} | Get
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionDiagram**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagram) | **GET** /process-definition/{id}/diagram | Get Diagram
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionDiagramByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagramByKey) | **GET** /process-definition/key/{key}/diagram | Get Diagram
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionDiagramByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagramByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/diagram | Get Diagram
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionStatistics**](docs/ProcessDefinitionApi.md#getProcessDefinitionStatistics) | **GET** /process-definition/statistics | Get Process Instance Statistics
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitions**](docs/ProcessDefinitionApi.md#getProcessDefinitions) | **GET** /process-definition | Get List
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getProcessDefinitionsCount**](docs/ProcessDefinitionApi.md#getProcessDefinitionsCount) | **GET** /process-definition/count | Get List Count
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getRenderedStartForm**](docs/ProcessDefinitionApi.md#getRenderedStartForm) | **GET** /process-definition/{id}/rendered-form | Get Rendered Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getRenderedStartFormByKey**](docs/ProcessDefinitionApi.md#getRenderedStartFormByKey) | **GET** /process-definition/key/{key}/rendered-form | Get Rendered Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getRenderedStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getRenderedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/rendered-form | Get Rendered Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartForm**](docs/ProcessDefinitionApi.md#getStartForm) | **GET** /process-definition/{id}/startForm | Get Start Form Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartFormByKey**](docs/ProcessDefinitionApi.md#getStartFormByKey) | **GET** /process-definition/key/{key}/startForm | Get Start Form Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/startForm | Get Start Form Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartFormVariables**](docs/ProcessDefinitionApi.md#getStartFormVariables) | **GET** /process-definition/{id}/form-variables | Get Start Form Variables
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartFormVariablesByKey**](docs/ProcessDefinitionApi.md#getStartFormVariablesByKey) | **GET** /process-definition/key/{key}/form-variables | Get Start Form Variables
*CamundaBpmRestApi.ProcessDefinitionApi* | [**getStartFormVariablesByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getStartFormVariablesByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant/{tenant-id}/form-variables | Get Start Form Variables
*CamundaBpmRestApi.ProcessDefinitionApi* | [**restartProcessInstance**](docs/ProcessDefinitionApi.md#restartProcessInstance) | **POST** /process-definition/{id}/restart | Restart Process Instance
*CamundaBpmRestApi.ProcessDefinitionApi* | [**restartProcessInstanceAsyncOperation**](docs/ProcessDefinitionApi.md#restartProcessInstanceAsyncOperation) | **POST** /process-definition/{id}/restart-async | Restart Process Instance Async
*CamundaBpmRestApi.ProcessDefinitionApi* | [**startProcessInstance**](docs/ProcessDefinitionApi.md#startProcessInstance) | **POST** /process-definition/{id}/start | Start Instance
*CamundaBpmRestApi.ProcessDefinitionApi* | [**startProcessInstanceByKey**](docs/ProcessDefinitionApi.md#startProcessInstanceByKey) | **POST** /process-definition/key/{key}/start | Start Instance
*CamundaBpmRestApi.ProcessDefinitionApi* | [**startProcessInstanceByKeyAndTenantId**](docs/ProcessDefinitionApi.md#startProcessInstanceByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant/{tenant-id}/start | Start Instance
*CamundaBpmRestApi.ProcessDefinitionApi* | [**submitForm**](docs/ProcessDefinitionApi.md#submitForm) | **POST** /process-definition/{id}/submit-form | Submit Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**submitFormByKey**](docs/ProcessDefinitionApi.md#submitFormByKey) | **POST** /process-definition/key/{key}/submit-form | Submit Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**submitFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#submitFormByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant/{tenant-id}/submit-form | Submit Start Form
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionId**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionId) | **PUT** /process-definition/{id}/history-time-to-live | Update History Time to Live
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionKey**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKey) | **PUT** /process-definition/key/{key}/history-time-to-live | Update History Time to Live
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant/{tenant-id}/history-time-to-live | Update History Time to Live
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionState**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionState) | **PUT** /process-definition/suspended | Activate/Suspend By Key
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateById**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateById) | **PUT** /process-definition/{id}/suspended | Activate/Suspend By Id
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateByKey**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKey) | **PUT** /process-definition/key/{key}/suspended | Activate/Suspend by Id
*CamundaBpmRestApi.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateByKeyAndTenantId**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant/{tenant-id}/suspended | Activate/Suspend by Id
*CamundaBpmRestApi.ProcessInstanceApi* | [**deleteAsyncHistoricQueryBased**](docs/ProcessInstanceApi.md#deleteAsyncHistoricQueryBased) | **POST** /process-instance/delete-historic-query-based | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**deleteProcessInstance**](docs/ProcessInstanceApi.md#deleteProcessInstance) | **DELETE** /process-instance/{id} | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**deleteProcessInstanceVariable**](docs/ProcessInstanceApi.md#deleteProcessInstanceVariable) | **DELETE** /process-instance/{id}/variables/{varName} | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**deleteProcessInstancesAsyncOperation**](docs/ProcessInstanceApi.md#deleteProcessInstancesAsyncOperation) | **POST** /process-instance/delete | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getActivityInstanceTree**](docs/ProcessInstanceApi.md#getActivityInstanceTree) | **GET** /process-instance/{id}/activity-instances | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getProcessInstanceVariable**](docs/ProcessInstanceApi.md#getProcessInstanceVariable) | **GET** /process-instance/{id}/variables/{varName} | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getProcessInstanceVariableBinary**](docs/ProcessInstanceApi.md#getProcessInstanceVariableBinary) | **GET** /process-instance/{id}/variables/{varName}/data | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getProcessInstanceVariables**](docs/ProcessInstanceApi.md#getProcessInstanceVariables) | **GET** /process-instance/{id}/variables | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getProcessInstances**](docs/ProcessInstanceApi.md#getProcessInstances) | **GET** /process-instance | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**getProcessInstancesCount**](docs/ProcessInstanceApi.md#getProcessInstancesCount) | **GET** /process-instance/count | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**modifyProcessInstance**](docs/ProcessInstanceApi.md#modifyProcessInstance) | **POST** /process-instance/{id}/modification | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**modifyProcessInstanceAsyncOperation**](docs/ProcessInstanceApi.md#modifyProcessInstanceAsyncOperation) | **POST** /process-instance/{id}/modification-async | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**modifyProcessInstanceVariables**](docs/ProcessInstanceApi.md#modifyProcessInstanceVariables) | **POST** /process-instance/{id}/variables | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**queryProcessInstances**](docs/ProcessInstanceApi.md#queryProcessInstances) | **POST** /process-instance | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**queryProcessInstancesCount**](docs/ProcessInstanceApi.md#queryProcessInstancesCount) | **POST** /process-instance/count | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**setProcessInstanceVariable**](docs/ProcessInstanceApi.md#setProcessInstanceVariable) | **PUT** /process-instance/{id}/variables/{varName} | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**setProcessInstanceVariableBinary**](docs/ProcessInstanceApi.md#setProcessInstanceVariableBinary) | **POST** /process-instance/{id}/variables/{varName}/data | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**setRetriesByProcess**](docs/ProcessInstanceApi.md#setRetriesByProcess) | **POST** /process-instance/job-retries | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**setRetriesByProcessHistoricQueryBased**](docs/ProcessInstanceApi.md#setRetriesByProcessHistoricQueryBased) | **POST** /process-instance/job-retries-historic-query-based | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**updateSuspensionState**](docs/ProcessInstanceApi.md#updateSuspensionState) | **PUT** /process-instance/suspended | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**updateSuspensionStateAsyncOperation**](docs/ProcessInstanceApi.md#updateSuspensionStateAsyncOperation) | **POST** /process-instance/suspended-async | 
*CamundaBpmRestApi.ProcessInstanceApi* | [**updateSuspensionStateById**](docs/ProcessInstanceApi.md#updateSuspensionStateById) | **PUT** /process-instance/{id}/suspended | 
*CamundaBpmRestApi.SchemaLogApi* | [**getSchemaLog**](docs/SchemaLogApi.md#getSchemaLog) | **GET** /schema/log | 
*CamundaBpmRestApi.SchemaLogApi* | [**querySchemaLog**](docs/SchemaLogApi.md#querySchemaLog) | **POST** /schema/log | 
*CamundaBpmRestApi.SignalApi* | [**throwSignal**](docs/SignalApi.md#throwSignal) | **POST** /signal | 
*CamundaBpmRestApi.TaskApi* | [**claim**](docs/TaskApi.md#claim) | **POST** /task/{id}/claim | 
*CamundaBpmRestApi.TaskApi* | [**complete**](docs/TaskApi.md#complete) | **POST** /task/{id}/complete | 
*CamundaBpmRestApi.TaskApi* | [**createTask**](docs/TaskApi.md#createTask) | **POST** /task/create | 
*CamundaBpmRestApi.TaskApi* | [**delegateTask**](docs/TaskApi.md#delegateTask) | **POST** /task/{id}/delegate | 
*CamundaBpmRestApi.TaskApi* | [**deleteTask**](docs/TaskApi.md#deleteTask) | **DELETE** /task/{id} | 
*CamundaBpmRestApi.TaskApi* | [**getDeployedForm**](docs/TaskApi.md#getDeployedForm) | **GET** /task/{id}/deployed-form | 
*CamundaBpmRestApi.TaskApi* | [**getForm**](docs/TaskApi.md#getForm) | **GET** /task/{id}/form | 
*CamundaBpmRestApi.TaskApi* | [**getFormVariables**](docs/TaskApi.md#getFormVariables) | **GET** /task/{id}/form-variables | 
*CamundaBpmRestApi.TaskApi* | [**getRenderedForm**](docs/TaskApi.md#getRenderedForm) | **GET** /task/{id}/rendered-form | 
*CamundaBpmRestApi.TaskApi* | [**getTask**](docs/TaskApi.md#getTask) | **GET** /task/{id} | 
*CamundaBpmRestApi.TaskApi* | [**getTasks**](docs/TaskApi.md#getTasks) | **GET** /task | 
*CamundaBpmRestApi.TaskApi* | [**getTasksCount**](docs/TaskApi.md#getTasksCount) | **GET** /task/count | 
*CamundaBpmRestApi.TaskApi* | [**handleBpmnError**](docs/TaskApi.md#handleBpmnError) | **POST** /task/{id}/bpmnError | 
*CamundaBpmRestApi.TaskApi* | [**handleEscalation**](docs/TaskApi.md#handleEscalation) | **POST** /task/{id}/bpmnEscalation | 
*CamundaBpmRestApi.TaskApi* | [**queryTasks**](docs/TaskApi.md#queryTasks) | **POST** /task | 
*CamundaBpmRestApi.TaskApi* | [**queryTasksCount**](docs/TaskApi.md#queryTasksCount) | **POST** /task/count | 
*CamundaBpmRestApi.TaskApi* | [**resolve**](docs/TaskApi.md#resolve) | **POST** /task/{id}/resolve | 
*CamundaBpmRestApi.TaskApi* | [**setAssignee**](docs/TaskApi.md#setAssignee) | **POST** /task/{id}/assignee | 
*CamundaBpmRestApi.TaskApi* | [**submit**](docs/TaskApi.md#submit) | **POST** /task/{id}/submit-form | 
*CamundaBpmRestApi.TaskApi* | [**unclaim**](docs/TaskApi.md#unclaim) | **POST** /task/{id}/unclaim | 
*CamundaBpmRestApi.TaskApi* | [**updateTask**](docs/TaskApi.md#updateTask) | **PUT** /task/{id} | 
*CamundaBpmRestApi.TaskAttachmentApi* | [**addAttachment**](docs/TaskAttachmentApi.md#addAttachment) | **POST** /task/{id}/attachment/create | 
*CamundaBpmRestApi.TaskAttachmentApi* | [**deleteAttachment**](docs/TaskAttachmentApi.md#deleteAttachment) | **DELETE** /task/{id}/attachment/{attachmentId} | 
*CamundaBpmRestApi.TaskAttachmentApi* | [**getAttachment**](docs/TaskAttachmentApi.md#getAttachment) | **GET** /task/{id}/attachment/{attachmentId} | 
*CamundaBpmRestApi.TaskAttachmentApi* | [**getAttachmentData**](docs/TaskAttachmentApi.md#getAttachmentData) | **GET** /task/{id}/attachment/{attachmentId}/data | 
*CamundaBpmRestApi.TaskAttachmentApi* | [**getAttachments**](docs/TaskAttachmentApi.md#getAttachments) | **GET** /task/{id}/attachment | 
*CamundaBpmRestApi.TaskCommentApi* | [**createComment**](docs/TaskCommentApi.md#createComment) | **POST** /task/{id}/comment/create | 
*CamundaBpmRestApi.TaskCommentApi* | [**getComment**](docs/TaskCommentApi.md#getComment) | **GET** /task/{id}/comment/{commentId} | 
*CamundaBpmRestApi.TaskCommentApi* | [**getComments**](docs/TaskCommentApi.md#getComments) | **GET** /task/{id}/comment | 
*CamundaBpmRestApi.TaskIdentityLinkApi* | [**addIdentityLink**](docs/TaskIdentityLinkApi.md#addIdentityLink) | **POST** /task/{id}/identity-links | 
*CamundaBpmRestApi.TaskIdentityLinkApi* | [**deleteIdentityLink**](docs/TaskIdentityLinkApi.md#deleteIdentityLink) | **POST** /task/{id}/identity-links/delete | 
*CamundaBpmRestApi.TaskIdentityLinkApi* | [**getIdentityLinks**](docs/TaskIdentityLinkApi.md#getIdentityLinks) | **GET** /task/{id}/identity-links | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**deleteTaskLocalVariable**](docs/TaskLocalVariableApi.md#deleteTaskLocalVariable) | **DELETE** /task/{id}/localVariables/{varName} | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**getTaskLocalVariable**](docs/TaskLocalVariableApi.md#getTaskLocalVariable) | **GET** /task/{id}/localVariables/{varName} | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**getTaskLocalVariableBinary**](docs/TaskLocalVariableApi.md#getTaskLocalVariableBinary) | **GET** /task/{id}/localVariables/{varName}/data | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**getTaskLocalVariables**](docs/TaskLocalVariableApi.md#getTaskLocalVariables) | **GET** /task/{id}/localVariables | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**modifyTaskLocalVariables**](docs/TaskLocalVariableApi.md#modifyTaskLocalVariables) | **POST** /task/{id}/localVariables | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**putTaskLocalVariable**](docs/TaskLocalVariableApi.md#putTaskLocalVariable) | **PUT** /task/{id}/localVariables/{varName} | 
*CamundaBpmRestApi.TaskLocalVariableApi* | [**setBinaryTaskLocalVariable**](docs/TaskLocalVariableApi.md#setBinaryTaskLocalVariable) | **POST** /task/{id}/localVariables/{varName}/data | 
*CamundaBpmRestApi.TaskVariableApi* | [**deleteTaskVariable**](docs/TaskVariableApi.md#deleteTaskVariable) | **DELETE** /task/{id}/variables/{varName} | 
*CamundaBpmRestApi.TaskVariableApi* | [**getTaskVariable**](docs/TaskVariableApi.md#getTaskVariable) | **GET** /task/{id}/variables/{varName} | 
*CamundaBpmRestApi.TaskVariableApi* | [**getTaskVariableBinary**](docs/TaskVariableApi.md#getTaskVariableBinary) | **GET** /task/{id}/variables/{varName}/data | 
*CamundaBpmRestApi.TaskVariableApi* | [**getTaskVariables**](docs/TaskVariableApi.md#getTaskVariables) | **GET** /task/{id}/variables | 
*CamundaBpmRestApi.TaskVariableApi* | [**modifyTaskVariables**](docs/TaskVariableApi.md#modifyTaskVariables) | **POST** /task/{id}/variables | 
*CamundaBpmRestApi.TaskVariableApi* | [**putTaskVariable**](docs/TaskVariableApi.md#putTaskVariable) | **PUT** /task/{id}/variables/{varName} | 
*CamundaBpmRestApi.TaskVariableApi* | [**setBinaryTaskVariable**](docs/TaskVariableApi.md#setBinaryTaskVariable) | **POST** /task/{id}/variables/{varName}/data | 
*CamundaBpmRestApi.VersionApi* | [**getRestAPIVersion**](docs/VersionApi.md#getRestAPIVersion) | **GET** /version | 


## Documentation for Models

 - [CamundaBpmRestApi.ActivityInstanceDto](docs/ActivityInstanceDto.md)
 - [CamundaBpmRestApi.ActivityInstanceIncidentDto](docs/ActivityInstanceIncidentDto.md)
 - [CamundaBpmRestApi.ActivityStatisticsResultDto](docs/ActivityStatisticsResultDto.md)
 - [CamundaBpmRestApi.AtomLink](docs/AtomLink.md)
 - [CamundaBpmRestApi.AttachmentDto](docs/AttachmentDto.md)
 - [CamundaBpmRestApi.AttachmentDtoAllOf](docs/AttachmentDtoAllOf.md)
 - [CamundaBpmRestApi.AuthorizationExceptionDto](docs/AuthorizationExceptionDto.md)
 - [CamundaBpmRestApi.AuthorizationExceptionDtoAllOf](docs/AuthorizationExceptionDtoAllOf.md)
 - [CamundaBpmRestApi.BatchDto](docs/BatchDto.md)
 - [CamundaBpmRestApi.CaseDefinitionDto](docs/CaseDefinitionDto.md)
 - [CamundaBpmRestApi.CommentDto](docs/CommentDto.md)
 - [CamundaBpmRestApi.CommentDtoAllOf](docs/CommentDtoAllOf.md)
 - [CamundaBpmRestApi.CompleteExternalTaskDto](docs/CompleteExternalTaskDto.md)
 - [CamundaBpmRestApi.CompleteTaskDto](docs/CompleteTaskDto.md)
 - [CamundaBpmRestApi.CorrelationMessageDto](docs/CorrelationMessageDto.md)
 - [CamundaBpmRestApi.CountResultDto](docs/CountResultDto.md)
 - [CamundaBpmRestApi.DecisionDefinitionDto](docs/DecisionDefinitionDto.md)
 - [CamundaBpmRestApi.DecisionRequirementsDefinitionDto](docs/DecisionRequirementsDefinitionDto.md)
 - [CamundaBpmRestApi.DeleteProcessInstancesDto](docs/DeleteProcessInstancesDto.md)
 - [CamundaBpmRestApi.DeploymentDto](docs/DeploymentDto.md)
 - [CamundaBpmRestApi.DeploymentDtoAllOf](docs/DeploymentDtoAllOf.md)
 - [CamundaBpmRestApi.DeploymentResourceDto](docs/DeploymentResourceDto.md)
 - [CamundaBpmRestApi.DeploymentWithDefinitionsDto](docs/DeploymentWithDefinitionsDto.md)
 - [CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf](docs/DeploymentWithDefinitionsDtoAllOf.md)
 - [CamundaBpmRestApi.EvaluationConditionDto](docs/EvaluationConditionDto.md)
 - [CamundaBpmRestApi.EventSubscriptionDto](docs/EventSubscriptionDto.md)
 - [CamundaBpmRestApi.ExceptionDto](docs/ExceptionDto.md)
 - [CamundaBpmRestApi.ExecutionDto](docs/ExecutionDto.md)
 - [CamundaBpmRestApi.ExtendLockOnExternalTaskDto](docs/ExtendLockOnExternalTaskDto.md)
 - [CamundaBpmRestApi.ExternalTaskBpmnError](docs/ExternalTaskBpmnError.md)
 - [CamundaBpmRestApi.ExternalTaskBpmnErrorAllOf](docs/ExternalTaskBpmnErrorAllOf.md)
 - [CamundaBpmRestApi.ExternalTaskDto](docs/ExternalTaskDto.md)
 - [CamundaBpmRestApi.ExternalTaskFailureDto](docs/ExternalTaskFailureDto.md)
 - [CamundaBpmRestApi.ExternalTaskQueryDto](docs/ExternalTaskQueryDto.md)
 - [CamundaBpmRestApi.ExternalTaskQueryDtoSorting](docs/ExternalTaskQueryDtoSorting.md)
 - [CamundaBpmRestApi.FetchExternalTaskTopicDto](docs/FetchExternalTaskTopicDto.md)
 - [CamundaBpmRestApi.FetchExternalTasksDto](docs/FetchExternalTasksDto.md)
 - [CamundaBpmRestApi.FormDto](docs/FormDto.md)
 - [CamundaBpmRestApi.HistoricProcessInstanceQueryDto](docs/HistoricProcessInstanceQueryDto.md)
 - [CamundaBpmRestApi.HistoricProcessInstanceQueryDtoSorting](docs/HistoricProcessInstanceQueryDtoSorting.md)
 - [CamundaBpmRestApi.HistoryTimeToLiveDto](docs/HistoryTimeToLiveDto.md)
 - [CamundaBpmRestApi.IdentityLinkDto](docs/IdentityLinkDto.md)
 - [CamundaBpmRestApi.IncidentStatisticsResultDto](docs/IncidentStatisticsResultDto.md)
 - [CamundaBpmRestApi.LinkableDto](docs/LinkableDto.md)
 - [CamundaBpmRestApi.LockedExternalTaskDto](docs/LockedExternalTaskDto.md)
 - [CamundaBpmRestApi.MessageCorrelationResultWithVariableDto](docs/MessageCorrelationResultWithVariableDto.md)
 - [CamundaBpmRestApi.MetricsIntervalResultDto](docs/MetricsIntervalResultDto.md)
 - [CamundaBpmRestApi.MetricsResultDto](docs/MetricsResultDto.md)
 - [CamundaBpmRestApi.MissingAuthorizationDto](docs/MissingAuthorizationDto.md)
 - [CamundaBpmRestApi.MultiFormAttachmentDto](docs/MultiFormAttachmentDto.md)
 - [CamundaBpmRestApi.MultiFormDeploymentDto](docs/MultiFormDeploymentDto.md)
 - [CamundaBpmRestApi.MultiFormVariableBinaryDto](docs/MultiFormVariableBinaryDto.md)
 - [CamundaBpmRestApi.ParseExceptionDto](docs/ParseExceptionDto.md)
 - [CamundaBpmRestApi.ParseExceptionDtoAllOf](docs/ParseExceptionDtoAllOf.md)
 - [CamundaBpmRestApi.PatchVariablesDto](docs/PatchVariablesDto.md)
 - [CamundaBpmRestApi.PriorityDto](docs/PriorityDto.md)
 - [CamundaBpmRestApi.ProblemDto](docs/ProblemDto.md)
 - [CamundaBpmRestApi.ProcessDefinitionDiagramDto](docs/ProcessDefinitionDiagramDto.md)
 - [CamundaBpmRestApi.ProcessDefinitionDto](docs/ProcessDefinitionDto.md)
 - [CamundaBpmRestApi.ProcessDefinitionStatisticsResultDto](docs/ProcessDefinitionStatisticsResultDto.md)
 - [CamundaBpmRestApi.ProcessDefinitionSuspensionStateDto](docs/ProcessDefinitionSuspensionStateDto.md)
 - [CamundaBpmRestApi.ProcessEngineDto](docs/ProcessEngineDto.md)
 - [CamundaBpmRestApi.ProcessInstanceDto](docs/ProcessInstanceDto.md)
 - [CamundaBpmRestApi.ProcessInstanceDtoAllOf](docs/ProcessInstanceDtoAllOf.md)
 - [CamundaBpmRestApi.ProcessInstanceModificationDto](docs/ProcessInstanceModificationDto.md)
 - [CamundaBpmRestApi.ProcessInstanceModificationInstructionDto](docs/ProcessInstanceModificationInstructionDto.md)
 - [CamundaBpmRestApi.ProcessInstanceQueryDto](docs/ProcessInstanceQueryDto.md)
 - [CamundaBpmRestApi.ProcessInstanceQueryDtoSorting](docs/ProcessInstanceQueryDtoSorting.md)
 - [CamundaBpmRestApi.ProcessInstanceSuspensionStateAsyncDto](docs/ProcessInstanceSuspensionStateAsyncDto.md)
 - [CamundaBpmRestApi.ProcessInstanceSuspensionStateDto](docs/ProcessInstanceSuspensionStateDto.md)
 - [CamundaBpmRestApi.ProcessInstanceWithVariablesDto](docs/ProcessInstanceWithVariablesDto.md)
 - [CamundaBpmRestApi.ProcessInstanceWithVariablesDtoAllOf](docs/ProcessInstanceWithVariablesDtoAllOf.md)
 - [CamundaBpmRestApi.RedeploymentDto](docs/RedeploymentDto.md)
 - [CamundaBpmRestApi.ResourceReportDto](docs/ResourceReportDto.md)
 - [CamundaBpmRestApi.RestartProcessInstanceDto](docs/RestartProcessInstanceDto.md)
 - [CamundaBpmRestApi.RestartProcessInstanceModificationInstructionDto](docs/RestartProcessInstanceModificationInstructionDto.md)
 - [CamundaBpmRestApi.RetriesDto](docs/RetriesDto.md)
 - [CamundaBpmRestApi.SchemaLogEntryDto](docs/SchemaLogEntryDto.md)
 - [CamundaBpmRestApi.SchemaLogQueryDto](docs/SchemaLogQueryDto.md)
 - [CamundaBpmRestApi.SchemaLogQueryDtoSorting](docs/SchemaLogQueryDtoSorting.md)
 - [CamundaBpmRestApi.SetJobRetriesByProcessDto](docs/SetJobRetriesByProcessDto.md)
 - [CamundaBpmRestApi.SetRetriesForExternalTasksDto](docs/SetRetriesForExternalTasksDto.md)
 - [CamundaBpmRestApi.SignalDto](docs/SignalDto.md)
 - [CamundaBpmRestApi.SortTaskQueryParametersDto](docs/SortTaskQueryParametersDto.md)
 - [CamundaBpmRestApi.StartProcessInstanceDto](docs/StartProcessInstanceDto.md)
 - [CamundaBpmRestApi.StartProcessInstanceFormDto](docs/StartProcessInstanceFormDto.md)
 - [CamundaBpmRestApi.SuspensionStateDto](docs/SuspensionStateDto.md)
 - [CamundaBpmRestApi.TaskBpmnErrorDto](docs/TaskBpmnErrorDto.md)
 - [CamundaBpmRestApi.TaskDto](docs/TaskDto.md)
 - [CamundaBpmRestApi.TaskEscalationDto](docs/TaskEscalationDto.md)
 - [CamundaBpmRestApi.TaskQueryDto](docs/TaskQueryDto.md)
 - [CamundaBpmRestApi.TaskQueryDtoSorting](docs/TaskQueryDtoSorting.md)
 - [CamundaBpmRestApi.TransitionInstanceDto](docs/TransitionInstanceDto.md)
 - [CamundaBpmRestApi.TriggerVariableValueDto](docs/TriggerVariableValueDto.md)
 - [CamundaBpmRestApi.TriggerVariableValueDtoAllOf](docs/TriggerVariableValueDtoAllOf.md)
 - [CamundaBpmRestApi.UserIdDto](docs/UserIdDto.md)
 - [CamundaBpmRestApi.VariableQueryParameterDto](docs/VariableQueryParameterDto.md)
 - [CamundaBpmRestApi.VariableValueDto](docs/VariableValueDto.md)
 - [CamundaBpmRestApi.VersionDto](docs/VersionDto.md)


## Documentation for Authorization

All endpoints do not require authorization.
