/**
 * Weather API for Vizrt
 * This is a Weather API to provide Weather Data to a Vizrt Graphics System
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UnitPressure'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnitPressure'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.Pressure = factory(root.WeatherApiForVizrt.ApiClient, root.WeatherApiForVizrt.UnitPressure);
  }
}(this, function(ApiClient, UnitPressure) {
  'use strict';




  /**
   * The Pressure model module.
   * @module model/Pressure
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Pressure</code>.
   * @alias module:model/Pressure
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Pressure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pressure} obj Optional instance to populate.
   * @return {module:model/Pressure} The populated <code>Pressure</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pressure')) {
        obj['pressure'] = ApiClient.convertToType(data['pressure'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = UnitPressure.constructFromObject(data['unit']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} pressure
   */
  exports.prototype['pressure'] = undefined;
  /**
   * @member {module:model/UnitPressure} unit
   */
  exports.prototype['unit'] = undefined;



  return exports;
}));


