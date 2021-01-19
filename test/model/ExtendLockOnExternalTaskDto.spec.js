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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaBpmRestApi);
  }
}(this, function(expect, CamundaBpmRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CamundaBpmRestApi.ExtendLockOnExternalTaskDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExtendLockOnExternalTaskDto', function() {
    it('should create an instance of ExtendLockOnExternalTaskDto', function() {
      // uncomment below and update the code to test ExtendLockOnExternalTaskDto
      //var instane = new CamundaBpmRestApi.ExtendLockOnExternalTaskDto();
      //expect(instance).to.be.a(CamundaBpmRestApi.ExtendLockOnExternalTaskDto);
    });

    it('should have the property workerId (base name: "workerId")', function() {
      // uncomment below and update the code to test the property workerId
      //var instance = new CamundaBpmRestApi.ExtendLockOnExternalTaskDto();
      //expect(instance).to.be();
    });

    it('should have the property newDuration (base name: "newDuration")', function() {
      // uncomment below and update the code to test the property newDuration
      //var instance = new CamundaBpmRestApi.ExtendLockOnExternalTaskDto();
      //expect(instance).to.be();
    });

  });

}));