/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DecisionRequirementsDefinitionDto model module.
 * @module model/DecisionRequirementsDefinitionDto
 * @version 7.14.0
 */
class DecisionRequirementsDefinitionDto {
    /**
     * Constructs a new <code>DecisionRequirementsDefinitionDto</code>.
     * @alias module:model/DecisionRequirementsDefinitionDto
     */
    constructor() { 
        
        DecisionRequirementsDefinitionDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecisionRequirementsDefinitionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecisionRequirementsDefinitionDto} obj Optional instance to populate.
     * @return {module:model/DecisionRequirementsDefinitionDto} The populated <code>DecisionRequirementsDefinitionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecisionRequirementsDefinitionDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('deploymentId')) {
                obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the decision requirements definition
 * @member {String} id
 */
DecisionRequirementsDefinitionDto.prototype['id'] = undefined;

/**
 * The key of the decision requirements definition, i.e., the id of the DMN 1.0 XML decision definition.
 * @member {String} key
 */
DecisionRequirementsDefinitionDto.prototype['key'] = undefined;

/**
 * The name of the decision requirements definition.
 * @member {String} name
 */
DecisionRequirementsDefinitionDto.prototype['name'] = undefined;

/**
 * The category of the decision requirements definition.
 * @member {String} category
 */
DecisionRequirementsDefinitionDto.prototype['category'] = undefined;

/**
 * The version of the decision requirements definition that the engine assigned to it.
 * @member {Number} version
 */
DecisionRequirementsDefinitionDto.prototype['version'] = undefined;

/**
 * The file name of the decision requirements definition.
 * @member {String} resource
 */
DecisionRequirementsDefinitionDto.prototype['resource'] = undefined;

/**
 * The deployment id of the decision requirements definition.
 * @member {String} deploymentId
 */
DecisionRequirementsDefinitionDto.prototype['deploymentId'] = undefined;

/**
 * The tenant id of the decisionrequirements definition.
 * @member {String} tenantId
 */
DecisionRequirementsDefinitionDto.prototype['tenantId'] = undefined;






export default DecisionRequirementsDefinitionDto;

