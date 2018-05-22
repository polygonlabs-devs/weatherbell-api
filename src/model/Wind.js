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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.Wind = factory(root.WeatherApiForVizrt.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Wind model module.
   * @module model/Wind
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Wind</code>.
   * @alias module:model/Wind
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Wind</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Wind} obj Optional instance to populate.
   * @return {module:model/Wind} The populated <code>Wind</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('speed')) {
        obj['speed'] = ApiClient.convertToType(data['speed'], 'Number');
      }
      if (data.hasOwnProperty('gust')) {
        obj['gust'] = ApiClient.convertToType(data['gust'], 'Number');
      }
      if (data.hasOwnProperty('degrees')) {
        obj['degrees'] = ApiClient.convertToType(data['degrees'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} speed
   */
  exports.prototype['speed'] = undefined;
  /**
   * @member {Number} gust
   */
  exports.prototype['gust'] = undefined;
  /**
   * @member {Number} degrees
   */
  exports.prototype['degrees'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Wind.UnitEnum} unit
   */
  exports.prototype['unit'] = undefined;


  /**
   * Allowed values for the <code>unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnitEnum = {
    /**
     * value: "kph"
     * @const
     */
    "kph": "kph",
    /**
     * value: "mph"
     * @const
     */
    "mph": "mph",
    /**
     * value: "knot"
     * @const
     */
    "knot": "knot"  };


  return exports;
}));


