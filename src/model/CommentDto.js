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
import AtomLink from './AtomLink';
import CommentDtoAllOf from './CommentDtoAllOf';
import LinkableDto from './LinkableDto';

/**
 * The CommentDto model module.
 * @module model/CommentDto
 * @version 7.14.0
 */
class CommentDto {
    /**
     * Constructs a new <code>CommentDto</code>.
     * @alias module:model/CommentDto
     * @implements module:model/CommentDtoAllOf
     * @implements module:model/LinkableDto
     */
    constructor() { 
        CommentDtoAllOf.initialize(this);LinkableDto.initialize(this);
        CommentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentDto} obj Optional instance to populate.
     * @return {module:model/CommentDto} The populated <code>CommentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentDto();
            CommentDtoAllOf.constructFromObject(data, obj);
            LinkableDto.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('taskId')) {
                obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('removalTime')) {
                obj['removalTime'] = ApiClient.convertToType(data['removalTime'], 'Date');
            }
            if (data.hasOwnProperty('rootProcessInstanceId')) {
                obj['rootProcessInstanceId'] = ApiClient.convertToType(data['rootProcessInstanceId'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [AtomLink]);
            }
        }
        return obj;
    }


}

/**
 * The id of the task comment.
 * @member {String} id
 */
CommentDto.prototype['id'] = undefined;

/**
 * The id of the user who created the comment.
 * @member {String} userId
 */
CommentDto.prototype['userId'] = undefined;

/**
 * The id of the task to which the comment belongs.
 * @member {String} taskId
 */
CommentDto.prototype['taskId'] = undefined;

/**
 * The time when the comment was created. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} time
 */
CommentDto.prototype['time'] = undefined;

/**
 * The content of the comment.
 * @member {String} message
 */
CommentDto.prototype['message'] = undefined;

/**
 * The time after which the comment should be removed by the History Cleanup job. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
CommentDto.prototype['removalTime'] = undefined;

/**
 * The process instance id of the root process instance that initiated the process containing the task.
 * @member {String} rootProcessInstanceId
 */
CommentDto.prototype['rootProcessInstanceId'] = undefined;

/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
CommentDto.prototype['links'] = undefined;


// Implement CommentDtoAllOf interface:
/**
 * The id of the task comment.
 * @member {String} id
 */
CommentDtoAllOf.prototype['id'] = undefined;
/**
 * The id of the user who created the comment.
 * @member {String} userId
 */
CommentDtoAllOf.prototype['userId'] = undefined;
/**
 * The id of the task to which the comment belongs.
 * @member {String} taskId
 */
CommentDtoAllOf.prototype['taskId'] = undefined;
/**
 * The time when the comment was created. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} time
 */
CommentDtoAllOf.prototype['time'] = undefined;
/**
 * The content of the comment.
 * @member {String} message
 */
CommentDtoAllOf.prototype['message'] = undefined;
/**
 * The time after which the comment should be removed by the History Cleanup job. [Default format]($(docsUrl)/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
 * @member {Date} removalTime
 */
CommentDtoAllOf.prototype['removalTime'] = undefined;
/**
 * The process instance id of the root process instance that initiated the process containing the task.
 * @member {String} rootProcessInstanceId
 */
CommentDtoAllOf.prototype['rootProcessInstanceId'] = undefined;
// Implement LinkableDto interface:
/**
 * The links associated to this resource, with `method`, `href` and `rel`.
 * @member {Array.<module:model/AtomLink>} links
 */
LinkableDto.prototype['links'] = undefined;




export default CommentDto;

