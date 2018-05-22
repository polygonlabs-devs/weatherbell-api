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
    define(['ApiClient', 'model/UnitRain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnitRain'));
  } else {
    // Browser globals (root is window)
    if (!root.WeatherApiForVizrt) {
      root.WeatherApiForVizrt = {};
    }
    root.WeatherApiForVizrt.CumulativeRain = factory(root.WeatherApiForVizrt.ApiClient, root.WeatherApiForVizrt.UnitRain);
  }
}(this, function(ApiClient, UnitRain) {
  'use strict';




  /**
   * The CumulativeRain model module.
   * @module model/CumulativeRain
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>CumulativeRain</code>.
   * @alias module:model/CumulativeRain
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CumulativeRain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CumulativeRain} obj Optional instance to populate.
   * @return {module:model/CumulativeRain} The populated <code>CumulativeRain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = UnitRain.constructFromObject(data['unit']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {module:model/UnitRain} unit
   */
  exports.prototype['unit'] = undefined;



  return exports;
}));


