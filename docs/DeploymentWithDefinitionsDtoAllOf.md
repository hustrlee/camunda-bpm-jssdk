# CamundaBpmRestApi.DeploymentWithDefinitionsDtoAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployedProcessDefinitions** | [**{String: ProcessDefinitionDto}**](ProcessDefinitionDto.md) | A JSON Object containing a property for each of the process definitions, which are successfully deployed with that deployment. The key is the process definition id, the value is a JSON Object corresponding to the process definition. | [optional] 
**deployedDecisionDefinitions** | [**{String: DecisionDefinitionDto}**](DecisionDefinitionDto.md) | A JSON Object containing a property for each of the decision definitions, which are successfully deployed with that deployment. The key is the decision definition id, the value is a JSON Object corresponding to the decision definition. | [optional] 
**deployedDecisionRequirementsDefinitions** | [**{String: DecisionRequirementsDefinitionDto}**](DecisionRequirementsDefinitionDto.md) | A JSON Object containing a property for each of the decision requirements definitions, which are successfully deployed with that deployment. The key is the decision requirements definition id, the value is a JSON Object corresponding to the decision requirements definition. | [optional] 
**deployedCaseDefinitions** | [**{String: CaseDefinitionDto}**](CaseDefinitionDto.md) | A JSON Object containing a property for each of the case definitions, which are successfully deployed with that deployment. The key is the case definition id, the value is a JSON Object corresponding to the case definition. | [optional] 


