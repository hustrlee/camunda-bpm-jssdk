# Camunda BPM JSSDK

**`camunda-bpm-jssdk`** 是 Camunda BPM 的 Javascript 客户端库。它是由 [OpenAPI Generator](https://openapi-generator.tech) 从 [Camunda REST API 的 OpenAPI 文档]()自动生成的。



## 版本

- API version: 7.14.0
- Package version: 7.14.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen



## 在 Node.js 中安装 `camunda-bpm-jssdk`

### npm 安装

没有将本软件包发布到 npm registry，不支持 npm 安装。



### 本地安装

可以使用预打包好的软件包来进行本地安装。

- 下载发布在 Github 上的预打包文件：[camunda-bpm-jssdk v7.14.0 预打包下载](https://github.com/hustrlee/camunda-bpm-jssdk/releases/download/v7.14.0/camunda-bpm-jssdk-7.14.0.tgz)
- 将预打包文件存储在要使用 `camunda-bpm-jssdk` 软件包的工程目录下，并执行以下命令进行安装：

```shell
npm install camunda-bpm-jssdk-7.14.0.tgz --save
```



~~假设 Camunda BPM JSSDK 保存在名为 `JAVASCRIPT_CLENT_DIR` 的本地路径（即本 README 文件所在路径），开发者可以通过以下方式来安装本软件包：~~

- ~~在 `JAVASCRIPT_CLIENT_DIR` 目录下执行以下命令，安装依赖包：~~

```shell
npm install
```

- ~~在 `JAVASCRIPT_CLIENT_DIR` 目录下执行以下命令，编译本模块：~~

```shell
npm run build
```

- ~~然后，在 `JAVASCRIPT_CLIENT_DIR` 目录下执行以下命令，将 `camunda-bpm-jssdk` 注册到全局：~~

```shell
npm link
```

- ~~将目录切换至要使用 `camunda-bpm-jssdk` 软件包的工程目录，执行以下命令，将全局的 `camunda-bpm-jssdk` 注册到本工程中：~~

```shell
npm link camunda-bpm-jssdk
```



### git 安装

```shell
npm install hustrlee/camunda-bpm-jssdk
```



## 示例

```javascript
// Camunda BPM 已经安装，且 REST API 根路径为：http://localhost:8080/engine-rest
// 如果根路径不正确，请修改 node_modules/camunda_bpm_rest_api/dist/ApiClient.js 中的 basePath

const CamundaSDK = require("camunda-bpm-jssdk");

let versionApi = new CamundaSDK.VersionApi();

// 使用 Promise
versionApi.getRestAPIVersion().then(
  data => {
    console.log("Camunda BPM Engine Version: " + data.version);
  },
  error => {
    console.error(error);
  }
);

// 使用 async/await
(async () => {
  let data = await versionApi.getRestAPIVersion();
  console.log("Camunda BPM Engine Version: " + data.version);
})();
```

执行以上代码，获得 Camunda REST API 的版本号。



## API 参考文档

URI： **http://localhost:8080/engine-rest**。如需修改 URI，请修改：`node_modules/camunda_bpm_rest_api/dist/ApiClient.js` 中的 `basePath`。
Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CamundaBpmJssdk.ConditionApi* | [**evaluateCondition**](docs/ConditionApi.md#evaluateCondition) | **POST** /condition | 
*CamundaBpmJssdk.DeploymentApi* | [**createDeployment**](docs/DeploymentApi.md#createDeployment) | **POST** /deployment/create | 
*CamundaBpmJssdk.DeploymentApi* | [**deleteDeployment**](docs/DeploymentApi.md#deleteDeployment) | **DELETE** /deployment/{id} | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeployment**](docs/DeploymentApi.md#getDeployment) | **GET** /deployment/{id} | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeploymentResource**](docs/DeploymentApi.md#getDeploymentResource) | **GET** /deployment/{id}/resources/{resourceId} | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeploymentResourceData**](docs/DeploymentApi.md#getDeploymentResourceData) | **GET** /deployment/{id}/resources/{resourceId}/data | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeploymentResources**](docs/DeploymentApi.md#getDeploymentResources) | **GET** /deployment/{id}/resources | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeployments**](docs/DeploymentApi.md#getDeployments) | **GET** /deployment | 
*CamundaBpmJssdk.DeploymentApi* | [**getDeploymentsCount**](docs/DeploymentApi.md#getDeploymentsCount) | **GET** /deployment/count | 
*CamundaBpmJssdk.DeploymentApi* | [**redeploy**](docs/DeploymentApi.md#redeploy) | **POST** /deployment/{id}/redeploy | 
*CamundaBpmJssdk.EngineApi* | [**getProcessEngineNames**](docs/EngineApi.md#getProcessEngineNames) | **GET** /engine | 
*CamundaBpmJssdk.EventSubscriptionApi* | [**getEventSubscriptions**](docs/EventSubscriptionApi.md#getEventSubscriptions) | **GET** /event-subscription | 
*CamundaBpmJssdk.EventSubscriptionApi* | [**getEventSubscriptionsCount**](docs/EventSubscriptionApi.md#getEventSubscriptionsCount) | **GET** /event-subscription/count | 
*CamundaBpmJssdk.ExternalTaskApi* | [**completeExternalTaskResource**](docs/ExternalTaskApi.md#completeExternalTaskResource) | **POST** /external-task/{id}/complete | 
*CamundaBpmJssdk.ExternalTaskApi* | [**extendLock**](docs/ExternalTaskApi.md#extendLock) | **POST** /external-task/{id}/extendLock | 
*CamundaBpmJssdk.ExternalTaskApi* | [**fetchAndLock**](docs/ExternalTaskApi.md#fetchAndLock) | **POST** /external-task/fetchAndLock | 
*CamundaBpmJssdk.ExternalTaskApi* | [**getExternalTask**](docs/ExternalTaskApi.md#getExternalTask) | **GET** /external-task/{id} | 
*CamundaBpmJssdk.ExternalTaskApi* | [**getExternalTaskErrorDetails**](docs/ExternalTaskApi.md#getExternalTaskErrorDetails) | **GET** /external-task/{id}/errorDetails | 
*CamundaBpmJssdk.ExternalTaskApi* | [**getExternalTasks**](docs/ExternalTaskApi.md#getExternalTasks) | **GET** /external-task | 
*CamundaBpmJssdk.ExternalTaskApi* | [**getExternalTasksCount**](docs/ExternalTaskApi.md#getExternalTasksCount) | **GET** /external-task/count | 
*CamundaBpmJssdk.ExternalTaskApi* | [**getTopicNames**](docs/ExternalTaskApi.md#getTopicNames) | **GET** /external-task/topic-names | 
*CamundaBpmJssdk.ExternalTaskApi* | [**handleExternalTaskBpmnError**](docs/ExternalTaskApi.md#handleExternalTaskBpmnError) | **POST** /external-task/{id}/bpmnError | 
*CamundaBpmJssdk.ExternalTaskApi* | [**handleFailure**](docs/ExternalTaskApi.md#handleFailure) | **POST** /external-task/{id}/failure | 
*CamundaBpmJssdk.ExternalTaskApi* | [**queryExternalTasks**](docs/ExternalTaskApi.md#queryExternalTasks) | **POST** /external-task | 
*CamundaBpmJssdk.ExternalTaskApi* | [**queryExternalTasksCount**](docs/ExternalTaskApi.md#queryExternalTasksCount) | **POST** /external-task/count | 
*CamundaBpmJssdk.ExternalTaskApi* | [**setExternalTaskResourcePriority**](docs/ExternalTaskApi.md#setExternalTaskResourcePriority) | **PUT** /external-task/{id}/priority | 
*CamundaBpmJssdk.ExternalTaskApi* | [**setExternalTaskResourceRetries**](docs/ExternalTaskApi.md#setExternalTaskResourceRetries) | **PUT** /external-task/{id}/retries | 
*CamundaBpmJssdk.ExternalTaskApi* | [**setExternalTaskRetries**](docs/ExternalTaskApi.md#setExternalTaskRetries) | **PUT** /external-task/retries | 
*CamundaBpmJssdk.ExternalTaskApi* | [**setExternalTaskRetriesAsyncOperation**](docs/ExternalTaskApi.md#setExternalTaskRetriesAsyncOperation) | **POST** /external-task/retries-async | 
*CamundaBpmJssdk.ExternalTaskApi* | [**unlock**](docs/ExternalTaskApi.md#unlock) | **POST** /external-task/{id}/unlock | 
*CamundaBpmJssdk.HistoricActivityInstanceApi* | [**getHistoricActivityInstance**](docs/HistoricActivityInstanceApi.md#getHistoricActivityInstance) | **GET** /history/activity-instance/{id} | Get
*CamundaBpmJssdk.HistoricActivityInstanceApi* | [**getHistoricActivityInstances**](docs/HistoricActivityInstanceApi.md#getHistoricActivityInstances) | **GET** /history/activity-instance | Get List
*CamundaBpmJssdk.HistoricActivityInstanceApi* | [**getHistoricActivityInstancesCount**](docs/HistoricActivityInstanceApi.md#getHistoricActivityInstancesCount) | **GET** /history/activity-instance/count | Get List Count
*CamundaBpmJssdk.HistoricActivityInstanceApi* | [**queryHistoricActivityInstances**](docs/HistoricActivityInstanceApi.md#queryHistoricActivityInstances) | **POST** /history/activity-instance | Get List (POST)
*CamundaBpmJssdk.HistoricActivityInstanceApi* | [**queryHistoricActivityInstancesCount**](docs/HistoricActivityInstanceApi.md#queryHistoricActivityInstancesCount) | **POST** /history/activity-instance/count | Get List Count (POST)
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**deleteHistoricProcessInstance**](docs/HistoricProcessInstanceApi.md#deleteHistoricProcessInstance) | **DELETE** /history/process-instance/{id} | Delete
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**deleteHistoricProcessInstancesAsync**](docs/HistoricProcessInstanceApi.md#deleteHistoricProcessInstancesAsync) | **POST** /history/process-instance/delete | Delete Async (POST)
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**deleteHistoricVariableInstancesOfHistoricProcessInstance**](docs/HistoricProcessInstanceApi.md#deleteHistoricVariableInstancesOfHistoricProcessInstance) | **DELETE** /history/process-instance/{id}/variable-instances | Delete Variable Instances
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**getHistoricProcessInstance**](docs/HistoricProcessInstanceApi.md#getHistoricProcessInstance) | **GET** /history/process-instance/{id} | Get
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**getHistoricProcessInstanceDurationReport**](docs/HistoricProcessInstanceApi.md#getHistoricProcessInstanceDurationReport) | **GET** /history/process-instance/report | Get Duration Report
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**getHistoricProcessInstances**](docs/HistoricProcessInstanceApi.md#getHistoricProcessInstances) | **GET** /history/process-instance | Get List
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**getHistoricProcessInstancesCount**](docs/HistoricProcessInstanceApi.md#getHistoricProcessInstancesCount) | **GET** /history/process-instance/count | Get List Count
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**queryHistoricProcessInstances**](docs/HistoricProcessInstanceApi.md#queryHistoricProcessInstances) | **POST** /history/process-instance | Get List (POST)
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**queryHistoricProcessInstancesCount**](docs/HistoricProcessInstanceApi.md#queryHistoricProcessInstancesCount) | **POST** /history/process-instance/count | Get List Count (POST)
*CamundaBpmJssdk.HistoricProcessInstanceApi* | [**setRemovalTimeAsync**](docs/HistoricProcessInstanceApi.md#setRemovalTimeAsync) | **POST** /history/process-instance/set-removal-time | Set Removal Time Async (POST)
*CamundaBpmJssdk.IncidentApi* | [**getIncident**](docs/IncidentApi.md#getIncident) | **GET** /incident/{id} | Get Incident
*CamundaBpmJssdk.IncidentApi* | [**getIncidents**](docs/IncidentApi.md#getIncidents) | **GET** /incident | Get List
*CamundaBpmJssdk.IncidentApi* | [**getIncidentsCount**](docs/IncidentApi.md#getIncidentsCount) | **GET** /incident/count | Get List Count
*CamundaBpmJssdk.IncidentApi* | [**resolveIncident**](docs/IncidentApi.md#resolveIncident) | **DELETE** /incident/{id} | Resolve Incident
*CamundaBpmJssdk.MessageApi* | [**deliverMessage**](docs/MessageApi.md#deliverMessage) | **POST** /message | 
*CamundaBpmJssdk.MetricsApi* | [**getMetrics**](docs/MetricsApi.md#getMetrics) | **GET** /metrics/{metrics-name}/sum | 
*CamundaBpmJssdk.MetricsApi* | [**interval**](docs/MetricsApi.md#interval) | **GET** /metrics | 
*CamundaBpmJssdk.ProcessDefinitionApi* | [**deleteProcessDefinition**](docs/ProcessDefinitionApi.md#deleteProcessDefinition) | **DELETE** /process-definition/{id} | Delete
*CamundaBpmJssdk.ProcessDefinitionApi* | [**deleteProcessDefinitionsByKey**](docs/ProcessDefinitionApi.md#deleteProcessDefinitionsByKey) | **DELETE** /process-definition/key/{key} | Delete By Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**deleteProcessDefinitionsByKeyAndTenantId**](docs/ProcessDefinitionApi.md#deleteProcessDefinitionsByKeyAndTenantId) | **DELETE** /process-definition/key/{key}/tenant-id/{tenant-id} | Delete By Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getActivityStatistics**](docs/ProcessDefinitionApi.md#getActivityStatistics) | **GET** /process-definition/{id}/statistics | Get Activity Instance Statistics
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getActivityStatisticsByProcessDefinitionKey**](docs/ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKey) | **GET** /process-definition/key/{key}/statistics | Get Activity Instance Statistics
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getActivityStatisticsByProcessDefinitionKeyAndTenantId**](docs/ProcessDefinitionApi.md#getActivityStatisticsByProcessDefinitionKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/statistics | Get Activity Instance Statistics
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getDeployedStartForm**](docs/ProcessDefinitionApi.md#getDeployedStartForm) | **GET** /process-definition/{id}/deployed-start-form | Get Deployed Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getDeployedStartFormByKey**](docs/ProcessDefinitionApi.md#getDeployedStartFormByKey) | **GET** /process-definition/key/{key}/deployed-start-form | Get Deployed Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getDeployedStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getDeployedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/deployed-start-form | Get Deployed Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getLatestProcessDefinitionByTenantId**](docs/ProcessDefinitionApi.md#getLatestProcessDefinitionByTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id} | Get
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinition**](docs/ProcessDefinitionApi.md#getProcessDefinition) | **GET** /process-definition/{id} | Get
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20Xml**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20Xml) | **GET** /process-definition/{id}/xml | Get XML
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20XmlByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKey) | **GET** /process-definition/key/{key}/xml | Get XML
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionBpmn20XmlByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getProcessDefinitionBpmn20XmlByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/xml | Get XML
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionByKey) | **GET** /process-definition/key/{key} | Get
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionDiagram**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagram) | **GET** /process-definition/{id}/diagram | Get Diagram
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionDiagramByKey**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagramByKey) | **GET** /process-definition/key/{key}/diagram | Get Diagram
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionDiagramByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getProcessDefinitionDiagramByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/diagram | Get Diagram
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionStatistics**](docs/ProcessDefinitionApi.md#getProcessDefinitionStatistics) | **GET** /process-definition/statistics | Get Process Instance Statistics
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitions**](docs/ProcessDefinitionApi.md#getProcessDefinitions) | **GET** /process-definition | Get List
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getProcessDefinitionsCount**](docs/ProcessDefinitionApi.md#getProcessDefinitionsCount) | **GET** /process-definition/count | Get List Count
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getRenderedStartForm**](docs/ProcessDefinitionApi.md#getRenderedStartForm) | **GET** /process-definition/{id}/rendered-form | Get Rendered Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getRenderedStartFormByKey**](docs/ProcessDefinitionApi.md#getRenderedStartFormByKey) | **GET** /process-definition/key/{key}/rendered-form | Get Rendered Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getRenderedStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getRenderedStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/rendered-form | Get Rendered Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartForm**](docs/ProcessDefinitionApi.md#getStartForm) | **GET** /process-definition/{id}/startForm | Get Start Form Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartFormByKey**](docs/ProcessDefinitionApi.md#getStartFormByKey) | **GET** /process-definition/key/{key}/startForm | Get Start Form Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getStartFormByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/startForm | Get Start Form Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartFormVariables**](docs/ProcessDefinitionApi.md#getStartFormVariables) | **GET** /process-definition/{id}/form-variables | Get Start Form Variables
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartFormVariablesByKey**](docs/ProcessDefinitionApi.md#getStartFormVariablesByKey) | **GET** /process-definition/key/{key}/form-variables | Get Start Form Variables
*CamundaBpmJssdk.ProcessDefinitionApi* | [**getStartFormVariablesByKeyAndTenantId**](docs/ProcessDefinitionApi.md#getStartFormVariablesByKeyAndTenantId) | **GET** /process-definition/key/{key}/tenant-id/{tenant-id}/form-variables | Get Start Form Variables
*CamundaBpmJssdk.ProcessDefinitionApi* | [**restartProcessInstance**](docs/ProcessDefinitionApi.md#restartProcessInstance) | **POST** /process-definition/{id}/restart | Restart Process Instance
*CamundaBpmJssdk.ProcessDefinitionApi* | [**restartProcessInstanceAsyncOperation**](docs/ProcessDefinitionApi.md#restartProcessInstanceAsyncOperation) | **POST** /process-definition/{id}/restart-async | Restart Process Instance Async
*CamundaBpmJssdk.ProcessDefinitionApi* | [**startProcessInstance**](docs/ProcessDefinitionApi.md#startProcessInstance) | **POST** /process-definition/{id}/start | Start Instance
*CamundaBpmJssdk.ProcessDefinitionApi* | [**startProcessInstanceByKey**](docs/ProcessDefinitionApi.md#startProcessInstanceByKey) | **POST** /process-definition/key/{key}/start | Start Instance
*CamundaBpmJssdk.ProcessDefinitionApi* | [**startProcessInstanceByKeyAndTenantId**](docs/ProcessDefinitionApi.md#startProcessInstanceByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant-id/{tenant-id}/start | Start Instance
*CamundaBpmJssdk.ProcessDefinitionApi* | [**submitForm**](docs/ProcessDefinitionApi.md#submitForm) | **POST** /process-definition/{id}/submit-form | Submit Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**submitFormByKey**](docs/ProcessDefinitionApi.md#submitFormByKey) | **POST** /process-definition/key/{key}/submit-form | Submit Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**submitFormByKeyAndTenantId**](docs/ProcessDefinitionApi.md#submitFormByKeyAndTenantId) | **POST** /process-definition/key/{key}/tenant-id/{tenant-id}/submit-form | Submit Start Form
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionId**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionId) | **PUT** /process-definition/{id}/history-time-to-live | Update History Time to Live
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionKey**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKey) | **PUT** /process-definition/key/{key}/history-time-to-live | Update History Time to Live
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId**](docs/ProcessDefinitionApi.md#updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant-id/{tenant-id}/history-time-to-live | Update History Time to Live
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionState**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionState) | **PUT** /process-definition/suspended | Activate/Suspend By Key
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateById**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateById) | **PUT** /process-definition/{id}/suspended | Activate/Suspend By Id
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateByKey**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKey) | **PUT** /process-definition/key/{key}/suspended | Activate/Suspend by Id
*CamundaBpmJssdk.ProcessDefinitionApi* | [**updateProcessDefinitionSuspensionStateByKeyAndTenantId**](docs/ProcessDefinitionApi.md#updateProcessDefinitionSuspensionStateByKeyAndTenantId) | **PUT** /process-definition/key/{key}/tenant-id/{tenant-id}/suspended | Activate/Suspend by Id
*CamundaBpmJssdk.ProcessInstanceApi* | [**deleteAsyncHistoricQueryBased**](docs/ProcessInstanceApi.md#deleteAsyncHistoricQueryBased) | **POST** /process-instance/delete-historic-query-based | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**deleteProcessInstance**](docs/ProcessInstanceApi.md#deleteProcessInstance) | **DELETE** /process-instance/{id} | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**deleteProcessInstanceVariable**](docs/ProcessInstanceApi.md#deleteProcessInstanceVariable) | **DELETE** /process-instance/{id}/variables/{varName} | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**deleteProcessInstancesAsyncOperation**](docs/ProcessInstanceApi.md#deleteProcessInstancesAsyncOperation) | **POST** /process-instance/delete | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getActivityInstanceTree**](docs/ProcessInstanceApi.md#getActivityInstanceTree) | **GET** /process-instance/{id}/activity-instances | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstance**](docs/ProcessInstanceApi.md#getProcessInstance) | **GET** /process-instance/{id} | Get Process Instance
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstanceVariable**](docs/ProcessInstanceApi.md#getProcessInstanceVariable) | **GET** /process-instance/{id}/variables/{varName} | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstanceVariableBinary**](docs/ProcessInstanceApi.md#getProcessInstanceVariableBinary) | **GET** /process-instance/{id}/variables/{varName}/data | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstanceVariables**](docs/ProcessInstanceApi.md#getProcessInstanceVariables) | **GET** /process-instance/{id}/variables | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstances**](docs/ProcessInstanceApi.md#getProcessInstances) | **GET** /process-instance | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**getProcessInstancesCount**](docs/ProcessInstanceApi.md#getProcessInstancesCount) | **GET** /process-instance/count | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**modifyProcessInstance**](docs/ProcessInstanceApi.md#modifyProcessInstance) | **POST** /process-instance/{id}/modification | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**modifyProcessInstanceAsyncOperation**](docs/ProcessInstanceApi.md#modifyProcessInstanceAsyncOperation) | **POST** /process-instance/{id}/modification-async | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**modifyProcessInstanceVariables**](docs/ProcessInstanceApi.md#modifyProcessInstanceVariables) | **POST** /process-instance/{id}/variables | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**queryProcessInstances**](docs/ProcessInstanceApi.md#queryProcessInstances) | **POST** /process-instance | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**queryProcessInstancesCount**](docs/ProcessInstanceApi.md#queryProcessInstancesCount) | **POST** /process-instance/count | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**setProcessInstanceVariable**](docs/ProcessInstanceApi.md#setProcessInstanceVariable) | **PUT** /process-instance/{id}/variables/{varName} | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**setProcessInstanceVariableBinary**](docs/ProcessInstanceApi.md#setProcessInstanceVariableBinary) | **POST** /process-instance/{id}/variables/{varName}/data | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**setRetriesByProcess**](docs/ProcessInstanceApi.md#setRetriesByProcess) | **POST** /process-instance/job-retries | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**setRetriesByProcessHistoricQueryBased**](docs/ProcessInstanceApi.md#setRetriesByProcessHistoricQueryBased) | **POST** /process-instance/job-retries-historic-query-based | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**setVariablesAsyncOperation**](docs/ProcessInstanceApi.md#setVariablesAsyncOperation) | **POST** /process-instance/variables-async | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**updateSuspensionState**](docs/ProcessInstanceApi.md#updateSuspensionState) | **PUT** /process-instance/suspended | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**updateSuspensionStateAsyncOperation**](docs/ProcessInstanceApi.md#updateSuspensionStateAsyncOperation) | **POST** /process-instance/suspended-async | 
*CamundaBpmJssdk.ProcessInstanceApi* | [**updateSuspensionStateById**](docs/ProcessInstanceApi.md#updateSuspensionStateById) | **PUT** /process-instance/{id}/suspended | 
*CamundaBpmJssdk.SchemaLogApi* | [**getSchemaLog**](docs/SchemaLogApi.md#getSchemaLog) | **GET** /schema/log | 
*CamundaBpmJssdk.SchemaLogApi* | [**querySchemaLog**](docs/SchemaLogApi.md#querySchemaLog) | **POST** /schema/log | 
*CamundaBpmJssdk.SignalApi* | [**throwSignal**](docs/SignalApi.md#throwSignal) | **POST** /signal | 
*CamundaBpmJssdk.TaskApi* | [**claim**](docs/TaskApi.md#claim) | **POST** /task/{id}/claim | 
*CamundaBpmJssdk.TaskApi* | [**complete**](docs/TaskApi.md#complete) | **POST** /task/{id}/complete | 
*CamundaBpmJssdk.TaskApi* | [**createTask**](docs/TaskApi.md#createTask) | **POST** /task/create | 
*CamundaBpmJssdk.TaskApi* | [**delegateTask**](docs/TaskApi.md#delegateTask) | **POST** /task/{id}/delegate | 
*CamundaBpmJssdk.TaskApi* | [**deleteTask**](docs/TaskApi.md#deleteTask) | **DELETE** /task/{id} | 
*CamundaBpmJssdk.TaskApi* | [**getDeployedForm**](docs/TaskApi.md#getDeployedForm) | **GET** /task/{id}/deployed-form | 
*CamundaBpmJssdk.TaskApi* | [**getForm**](docs/TaskApi.md#getForm) | **GET** /task/{id}/form | 
*CamundaBpmJssdk.TaskApi* | [**getFormVariables**](docs/TaskApi.md#getFormVariables) | **GET** /task/{id}/form-variables | 
*CamundaBpmJssdk.TaskApi* | [**getRenderedForm**](docs/TaskApi.md#getRenderedForm) | **GET** /task/{id}/rendered-form | 
*CamundaBpmJssdk.TaskApi* | [**getTask**](docs/TaskApi.md#getTask) | **GET** /task/{id} | 
*CamundaBpmJssdk.TaskApi* | [**getTasks**](docs/TaskApi.md#getTasks) | **GET** /task | 
*CamundaBpmJssdk.TaskApi* | [**getTasksCount**](docs/TaskApi.md#getTasksCount) | **GET** /task/count | 
*CamundaBpmJssdk.TaskApi* | [**handleBpmnError**](docs/TaskApi.md#handleBpmnError) | **POST** /task/{id}/bpmnError | 
*CamundaBpmJssdk.TaskApi* | [**handleEscalation**](docs/TaskApi.md#handleEscalation) | **POST** /task/{id}/bpmnEscalation | 
*CamundaBpmJssdk.TaskApi* | [**queryTasks**](docs/TaskApi.md#queryTasks) | **POST** /task | 
*CamundaBpmJssdk.TaskApi* | [**queryTasksCount**](docs/TaskApi.md#queryTasksCount) | **POST** /task/count | 
*CamundaBpmJssdk.TaskApi* | [**resolve**](docs/TaskApi.md#resolve) | **POST** /task/{id}/resolve | 
*CamundaBpmJssdk.TaskApi* | [**setAssignee**](docs/TaskApi.md#setAssignee) | **POST** /task/{id}/assignee | 
*CamundaBpmJssdk.TaskApi* | [**submit**](docs/TaskApi.md#submit) | **POST** /task/{id}/submit-form | 
*CamundaBpmJssdk.TaskApi* | [**unclaim**](docs/TaskApi.md#unclaim) | **POST** /task/{id}/unclaim | 
*CamundaBpmJssdk.TaskApi* | [**updateTask**](docs/TaskApi.md#updateTask) | **PUT** /task/{id} | 
*CamundaBpmJssdk.TaskAttachmentApi* | [**addAttachment**](docs/TaskAttachmentApi.md#addAttachment) | **POST** /task/{id}/attachment/create | 
*CamundaBpmJssdk.TaskAttachmentApi* | [**deleteAttachment**](docs/TaskAttachmentApi.md#deleteAttachment) | **DELETE** /task/{id}/attachment/{attachmentId} | 
*CamundaBpmJssdk.TaskAttachmentApi* | [**getAttachment**](docs/TaskAttachmentApi.md#getAttachment) | **GET** /task/{id}/attachment/{attachmentId} | 
*CamundaBpmJssdk.TaskAttachmentApi* | [**getAttachmentData**](docs/TaskAttachmentApi.md#getAttachmentData) | **GET** /task/{id}/attachment/{attachmentId}/data | 
*CamundaBpmJssdk.TaskAttachmentApi* | [**getAttachments**](docs/TaskAttachmentApi.md#getAttachments) | **GET** /task/{id}/attachment | 
*CamundaBpmJssdk.TaskCommentApi* | [**createComment**](docs/TaskCommentApi.md#createComment) | **POST** /task/{id}/comment/create | 
*CamundaBpmJssdk.TaskCommentApi* | [**getComment**](docs/TaskCommentApi.md#getComment) | **GET** /task/{id}/comment/{commentId} | 
*CamundaBpmJssdk.TaskCommentApi* | [**getComments**](docs/TaskCommentApi.md#getComments) | **GET** /task/{id}/comment | 
*CamundaBpmJssdk.TaskIdentityLinkApi* | [**addIdentityLink**](docs/TaskIdentityLinkApi.md#addIdentityLink) | **POST** /task/{id}/identity-links | 
*CamundaBpmJssdk.TaskIdentityLinkApi* | [**deleteIdentityLink**](docs/TaskIdentityLinkApi.md#deleteIdentityLink) | **POST** /task/{id}/identity-links/delete | 
*CamundaBpmJssdk.TaskIdentityLinkApi* | [**getIdentityLinks**](docs/TaskIdentityLinkApi.md#getIdentityLinks) | **GET** /task/{id}/identity-links | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**deleteTaskLocalVariable**](docs/TaskLocalVariableApi.md#deleteTaskLocalVariable) | **DELETE** /task/{id}/localVariables/{varName} | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**getTaskLocalVariable**](docs/TaskLocalVariableApi.md#getTaskLocalVariable) | **GET** /task/{id}/localVariables/{varName} | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**getTaskLocalVariableBinary**](docs/TaskLocalVariableApi.md#getTaskLocalVariableBinary) | **GET** /task/{id}/localVariables/{varName}/data | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**getTaskLocalVariables**](docs/TaskLocalVariableApi.md#getTaskLocalVariables) | **GET** /task/{id}/localVariables | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**modifyTaskLocalVariables**](docs/TaskLocalVariableApi.md#modifyTaskLocalVariables) | **POST** /task/{id}/localVariables | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**putTaskLocalVariable**](docs/TaskLocalVariableApi.md#putTaskLocalVariable) | **PUT** /task/{id}/localVariables/{varName} | 
*CamundaBpmJssdk.TaskLocalVariableApi* | [**setBinaryTaskLocalVariable**](docs/TaskLocalVariableApi.md#setBinaryTaskLocalVariable) | **POST** /task/{id}/localVariables/{varName}/data | 
*CamundaBpmJssdk.TaskVariableApi* | [**deleteTaskVariable**](docs/TaskVariableApi.md#deleteTaskVariable) | **DELETE** /task/{id}/variables/{varName} | 
*CamundaBpmJssdk.TaskVariableApi* | [**getTaskVariable**](docs/TaskVariableApi.md#getTaskVariable) | **GET** /task/{id}/variables/{varName} | 
*CamundaBpmJssdk.TaskVariableApi* | [**getTaskVariableBinary**](docs/TaskVariableApi.md#getTaskVariableBinary) | **GET** /task/{id}/variables/{varName}/data | 
*CamundaBpmJssdk.TaskVariableApi* | [**getTaskVariables**](docs/TaskVariableApi.md#getTaskVariables) | **GET** /task/{id}/variables | 
*CamundaBpmJssdk.TaskVariableApi* | [**modifyTaskVariables**](docs/TaskVariableApi.md#modifyTaskVariables) | **POST** /task/{id}/variables | 
*CamundaBpmJssdk.TaskVariableApi* | [**putTaskVariable**](docs/TaskVariableApi.md#putTaskVariable) | **PUT** /task/{id}/variables/{varName} | 
*CamundaBpmJssdk.TaskVariableApi* | [**setBinaryTaskVariable**](docs/TaskVariableApi.md#setBinaryTaskVariable) | **POST** /task/{id}/variables/{varName}/data | 
*CamundaBpmJssdk.TelemetryApi* | [**configureTelemetry**](docs/TelemetryApi.md#configureTelemetry) | **POST** /telemetry/configuration | Configure Telemetry
*CamundaBpmJssdk.TelemetryApi* | [**getTelemetryConfiguration**](docs/TelemetryApi.md#getTelemetryConfiguration) | **GET** /telemetry/configuration | Fetch Telemetry Configuration
*CamundaBpmJssdk.UserApi* | [**availableOperations**](docs/UserApi.md#availableOperations) | **OPTIONS** /user | Options
*CamundaBpmJssdk.UserApi* | [**availableUserOperations**](docs/UserApi.md#availableUserOperations) | **OPTIONS** /user/{id} | Options
*CamundaBpmJssdk.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user/create | Create
*CamundaBpmJssdk.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /user/{id} | Delete
*CamundaBpmJssdk.UserApi* | [**getUserCount**](docs/UserApi.md#getUserCount) | **GET** /user/count | Get List Count
*CamundaBpmJssdk.UserApi* | [**getUserProfile**](docs/UserApi.md#getUserProfile) | **GET** /user/{id}/profile | Get Profile
*CamundaBpmJssdk.UserApi* | [**getUsers**](docs/UserApi.md#getUsers) | **GET** /user | Get List
*CamundaBpmJssdk.UserApi* | [**unlockUser**](docs/UserApi.md#unlockUser) | **POST** /user/{id}/unlock | Unlock User
*CamundaBpmJssdk.UserApi* | [**updateCredentials**](docs/UserApi.md#updateCredentials) | **PUT** /user/{id}/credentials | Update Credentials
*CamundaBpmJssdk.VersionApi* | [**getRestAPIVersion**](docs/VersionApi.md#getRestAPIVersion) | **GET** /version | 



## 数据模型参考文档

 - [CamundaBpmJssdk.AbstractSetRemovalTimeDto](docs/AbstractSetRemovalTimeDto.md)
 - [CamundaBpmJssdk.ActivityInstanceDto](docs/ActivityInstanceDto.md)
 - [CamundaBpmJssdk.ActivityInstanceIncidentDto](docs/ActivityInstanceIncidentDto.md)
 - [CamundaBpmJssdk.ActivityStatisticsResultDto](docs/ActivityStatisticsResultDto.md)
 - [CamundaBpmJssdk.AtomLink](docs/AtomLink.md)
 - [CamundaBpmJssdk.AttachmentDto](docs/AttachmentDto.md)
 - [CamundaBpmJssdk.AttachmentDtoAllOf](docs/AttachmentDtoAllOf.md)
 - [CamundaBpmJssdk.AuthorizationExceptionDto](docs/AuthorizationExceptionDto.md)
 - [CamundaBpmJssdk.AuthorizationExceptionDtoAllOf](docs/AuthorizationExceptionDtoAllOf.md)
 - [CamundaBpmJssdk.BatchDto](docs/BatchDto.md)
 - [CamundaBpmJssdk.CaseDefinitionDto](docs/CaseDefinitionDto.md)
 - [CamundaBpmJssdk.CommentDto](docs/CommentDto.md)
 - [CamundaBpmJssdk.CommentDtoAllOf](docs/CommentDtoAllOf.md)
 - [CamundaBpmJssdk.CompleteExternalTaskDto](docs/CompleteExternalTaskDto.md)
 - [CamundaBpmJssdk.CompleteTaskDto](docs/CompleteTaskDto.md)
 - [CamundaBpmJssdk.CorrelationMessageDto](docs/CorrelationMessageDto.md)
 - [CamundaBpmJssdk.CountResultDto](docs/CountResultDto.md)
 - [CamundaBpmJssdk.DecisionDefinitionDto](docs/DecisionDefinitionDto.md)
 - [CamundaBpmJssdk.DecisionRequirementsDefinitionDto](docs/DecisionRequirementsDefinitionDto.md)
 - [CamundaBpmJssdk.DeleteHistoricProcessInstancesDto](docs/DeleteHistoricProcessInstancesDto.md)
 - [CamundaBpmJssdk.DeleteProcessInstancesDto](docs/DeleteProcessInstancesDto.md)
 - [CamundaBpmJssdk.DeploymentDto](docs/DeploymentDto.md)
 - [CamundaBpmJssdk.DeploymentDtoAllOf](docs/DeploymentDtoAllOf.md)
 - [CamundaBpmJssdk.DeploymentResourceDto](docs/DeploymentResourceDto.md)
 - [CamundaBpmJssdk.DeploymentWithDefinitionsDto](docs/DeploymentWithDefinitionsDto.md)
 - [CamundaBpmJssdk.DeploymentWithDefinitionsDtoAllOf](docs/DeploymentWithDefinitionsDtoAllOf.md)
 - [CamundaBpmJssdk.DurationReportResultDto](docs/DurationReportResultDto.md)
 - [CamundaBpmJssdk.EvaluationConditionDto](docs/EvaluationConditionDto.md)
 - [CamundaBpmJssdk.EventSubscriptionDto](docs/EventSubscriptionDto.md)
 - [CamundaBpmJssdk.EventSubscriptionQueryDto](docs/EventSubscriptionQueryDto.md)
 - [CamundaBpmJssdk.EventSubscriptionQueryDtoSorting](docs/EventSubscriptionQueryDtoSorting.md)
 - [CamundaBpmJssdk.ExceptionDto](docs/ExceptionDto.md)
 - [CamundaBpmJssdk.ExecutionDto](docs/ExecutionDto.md)
 - [CamundaBpmJssdk.ExtendLockOnExternalTaskDto](docs/ExtendLockOnExternalTaskDto.md)
 - [CamundaBpmJssdk.ExternalTaskBpmnError](docs/ExternalTaskBpmnError.md)
 - [CamundaBpmJssdk.ExternalTaskBpmnErrorAllOf](docs/ExternalTaskBpmnErrorAllOf.md)
 - [CamundaBpmJssdk.ExternalTaskDto](docs/ExternalTaskDto.md)
 - [CamundaBpmJssdk.ExternalTaskFailureDto](docs/ExternalTaskFailureDto.md)
 - [CamundaBpmJssdk.ExternalTaskQueryDto](docs/ExternalTaskQueryDto.md)
 - [CamundaBpmJssdk.ExternalTaskQueryDtoSorting](docs/ExternalTaskQueryDtoSorting.md)
 - [CamundaBpmJssdk.FetchExternalTaskTopicDto](docs/FetchExternalTaskTopicDto.md)
 - [CamundaBpmJssdk.FetchExternalTasksDto](docs/FetchExternalTasksDto.md)
 - [CamundaBpmJssdk.FormDto](docs/FormDto.md)
 - [CamundaBpmJssdk.HistoricActivityInstanceDto](docs/HistoricActivityInstanceDto.md)
 - [CamundaBpmJssdk.HistoricActivityInstanceQueryDto](docs/HistoricActivityInstanceQueryDto.md)
 - [CamundaBpmJssdk.HistoricActivityInstanceQueryDtoSorting](docs/HistoricActivityInstanceQueryDtoSorting.md)
 - [CamundaBpmJssdk.HistoricProcessInstanceDto](docs/HistoricProcessInstanceDto.md)
 - [CamundaBpmJssdk.HistoricProcessInstanceQueryDto](docs/HistoricProcessInstanceQueryDto.md)
 - [CamundaBpmJssdk.HistoricProcessInstanceQueryDtoSorting](docs/HistoricProcessInstanceQueryDtoSorting.md)
 - [CamundaBpmJssdk.HistoryTimeToLiveDto](docs/HistoryTimeToLiveDto.md)
 - [CamundaBpmJssdk.IdentityLinkDto](docs/IdentityLinkDto.md)
 - [CamundaBpmJssdk.IncidentDto](docs/IncidentDto.md)
 - [CamundaBpmJssdk.IncidentStatisticsResultDto](docs/IncidentStatisticsResultDto.md)
 - [CamundaBpmJssdk.LinkableDto](docs/LinkableDto.md)
 - [CamundaBpmJssdk.LockedExternalTaskDto](docs/LockedExternalTaskDto.md)
 - [CamundaBpmJssdk.MessageCorrelationResultWithVariableDto](docs/MessageCorrelationResultWithVariableDto.md)
 - [CamundaBpmJssdk.MetricsIntervalResultDto](docs/MetricsIntervalResultDto.md)
 - [CamundaBpmJssdk.MetricsResultDto](docs/MetricsResultDto.md)
 - [CamundaBpmJssdk.MissingAuthorizationDto](docs/MissingAuthorizationDto.md)
 - [CamundaBpmJssdk.ParseExceptionDto](docs/ParseExceptionDto.md)
 - [CamundaBpmJssdk.ParseExceptionDtoAllOf](docs/ParseExceptionDtoAllOf.md)
 - [CamundaBpmJssdk.PatchVariablesDto](docs/PatchVariablesDto.md)
 - [CamundaBpmJssdk.PriorityDto](docs/PriorityDto.md)
 - [CamundaBpmJssdk.ProblemDto](docs/ProblemDto.md)
 - [CamundaBpmJssdk.ProcessDefinitionDiagramDto](docs/ProcessDefinitionDiagramDto.md)
 - [CamundaBpmJssdk.ProcessDefinitionDto](docs/ProcessDefinitionDto.md)
 - [CamundaBpmJssdk.ProcessDefinitionStatisticsResultDto](docs/ProcessDefinitionStatisticsResultDto.md)
 - [CamundaBpmJssdk.ProcessDefinitionSuspensionStateDto](docs/ProcessDefinitionSuspensionStateDto.md)
 - [CamundaBpmJssdk.ProcessEngineDto](docs/ProcessEngineDto.md)
 - [CamundaBpmJssdk.ProcessInstanceDto](docs/ProcessInstanceDto.md)
 - [CamundaBpmJssdk.ProcessInstanceDtoAllOf](docs/ProcessInstanceDtoAllOf.md)
 - [CamundaBpmJssdk.ProcessInstanceModificationDto](docs/ProcessInstanceModificationDto.md)
 - [CamundaBpmJssdk.ProcessInstanceModificationInstructionDto](docs/ProcessInstanceModificationInstructionDto.md)
 - [CamundaBpmJssdk.ProcessInstanceQueryDto](docs/ProcessInstanceQueryDto.md)
 - [CamundaBpmJssdk.ProcessInstanceQueryDtoSorting](docs/ProcessInstanceQueryDtoSorting.md)
 - [CamundaBpmJssdk.ProcessInstanceSuspensionStateAsyncDto](docs/ProcessInstanceSuspensionStateAsyncDto.md)
 - [CamundaBpmJssdk.ProcessInstanceSuspensionStateDto](docs/ProcessInstanceSuspensionStateDto.md)
 - [CamundaBpmJssdk.ProcessInstanceWithVariablesDto](docs/ProcessInstanceWithVariablesDto.md)
 - [CamundaBpmJssdk.ProcessInstanceWithVariablesDtoAllOf](docs/ProcessInstanceWithVariablesDtoAllOf.md)
 - [CamundaBpmJssdk.RedeploymentDto](docs/RedeploymentDto.md)
 - [CamundaBpmJssdk.ResourceOptionsDto](docs/ResourceOptionsDto.md)
 - [CamundaBpmJssdk.ResourceReportDto](docs/ResourceReportDto.md)
 - [CamundaBpmJssdk.RestartProcessInstanceDto](docs/RestartProcessInstanceDto.md)
 - [CamundaBpmJssdk.RestartProcessInstanceModificationInstructionDto](docs/RestartProcessInstanceModificationInstructionDto.md)
 - [CamundaBpmJssdk.RetriesDto](docs/RetriesDto.md)
 - [CamundaBpmJssdk.SchemaLogEntryDto](docs/SchemaLogEntryDto.md)
 - [CamundaBpmJssdk.SchemaLogQueryDto](docs/SchemaLogQueryDto.md)
 - [CamundaBpmJssdk.SchemaLogQueryDtoSorting](docs/SchemaLogQueryDtoSorting.md)
 - [CamundaBpmJssdk.SetJobRetriesByProcessDto](docs/SetJobRetriesByProcessDto.md)
 - [CamundaBpmJssdk.SetRemovalTimeToHistoricProcessInstancesDto](docs/SetRemovalTimeToHistoricProcessInstancesDto.md)
 - [CamundaBpmJssdk.SetRemovalTimeToHistoricProcessInstancesDtoAllOf](docs/SetRemovalTimeToHistoricProcessInstancesDtoAllOf.md)
 - [CamundaBpmJssdk.SetRetriesForExternalTasksDto](docs/SetRetriesForExternalTasksDto.md)
 - [CamundaBpmJssdk.SetVariablesAsyncDto](docs/SetVariablesAsyncDto.md)
 - [CamundaBpmJssdk.SignalDto](docs/SignalDto.md)
 - [CamundaBpmJssdk.SortTaskQueryParametersDto](docs/SortTaskQueryParametersDto.md)
 - [CamundaBpmJssdk.StartProcessInstanceDto](docs/StartProcessInstanceDto.md)
 - [CamundaBpmJssdk.StartProcessInstanceFormDto](docs/StartProcessInstanceFormDto.md)
 - [CamundaBpmJssdk.SuspensionStateDto](docs/SuspensionStateDto.md)
 - [CamundaBpmJssdk.TaskBpmnErrorDto](docs/TaskBpmnErrorDto.md)
 - [CamundaBpmJssdk.TaskDto](docs/TaskDto.md)
 - [CamundaBpmJssdk.TaskEscalationDto](docs/TaskEscalationDto.md)
 - [CamundaBpmJssdk.TaskQueryDto](docs/TaskQueryDto.md)
 - [CamundaBpmJssdk.TaskQueryDtoSorting](docs/TaskQueryDtoSorting.md)
 - [CamundaBpmJssdk.TelemetryConfigurationDto](docs/TelemetryConfigurationDto.md)
 - [CamundaBpmJssdk.TransitionInstanceDto](docs/TransitionInstanceDto.md)
 - [CamundaBpmJssdk.TriggerVariableValueDto](docs/TriggerVariableValueDto.md)
 - [CamundaBpmJssdk.TriggerVariableValueDtoAllOf](docs/TriggerVariableValueDtoAllOf.md)
 - [CamundaBpmJssdk.UserCredentialsDto](docs/UserCredentialsDto.md)
 - [CamundaBpmJssdk.UserDto](docs/UserDto.md)
 - [CamundaBpmJssdk.UserIdDto](docs/UserIdDto.md)
 - [CamundaBpmJssdk.UserProfileDto](docs/UserProfileDto.md)
 - [CamundaBpmJssdk.VariableQueryParameterDto](docs/VariableQueryParameterDto.md)
 - [CamundaBpmJssdk.VariableValueDto](docs/VariableValueDto.md)
 - [CamundaBpmJssdk.VersionDto](docs/VersionDto.md)


