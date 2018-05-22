# WeatherApiForVizrt.DefaultApi

All URIs are relative to *https://vizapi.weather-bell.com/viz-api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currentByLatLngGet**](DefaultApi.md#currentByLatLngGet) | **GET** /current/byLatLng | Returns current weather data by latitude &amp; longitude
[**currentByLocationIdGet**](DefaultApi.md#currentByLocationIdGet) | **GET** /current/byLocationId | Returns current weather data by Location ID
[**forecastByLatLngGet**](DefaultApi.md#forecastByLatLngGet) | **GET** /forecast/byLatLng | Returns forecast data by latitude &amp; longitude
[**forecastByLocationIdGet**](DefaultApi.md#forecastByLocationIdGet) | **GET** /forecast/byLocationId | Returns forecast data by Location ID
[**historicalByLatLngGet**](DefaultApi.md#historicalByLatLngGet) | **GET** /historical/byLatLng | Returns historical Weather data by latitude, longitude &amp; timestamp
[**historicalByLocationIdGet**](DefaultApi.md#historicalByLocationIdGet) | **GET** /historical/byLocationId | Returns historical Weather data by Location ID &amp; date
[**observationByLatLngGet**](DefaultApi.md#observationByLatLngGet) | **GET** /observation/byLatLng | Returns observation data by latitude &amp; longitude
[**observationByLocationIdGet**](DefaultApi.md#observationByLocationIdGet) | **GET** /observation/byLocationId | Returns observation data by Location ID


<a name="currentByLatLngGet"></a>
# **currentByLatLngGet**
> PointData currentByLatLngGet(lat, lng, , opts)

Returns current weather data by latitude &amp; longitude

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var lat = 3.4; // Number | Latitude

var lng = 3.4; // Number | Longitude

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currentByLatLngGet(lat, lng, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude | 
 **lng** | **Number**| Longitude | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**PointData**](PointData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="currentByLocationIdGet"></a>
# **currentByLocationIdGet**
> PointData currentByLocationIdGet(locationId, , opts)

Returns current weather data by Location ID

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var locationId = "locationId_example"; // String | Location ID

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currentByLocationIdGet(locationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Location ID | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**PointData**](PointData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="forecastByLatLngGet"></a>
# **forecastByLatLngGet**
> Series forecastByLatLngGet(lat, lng, start, end, intervalType, interval, opts)

Returns forecast data by latitude &amp; longitude

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var lat = 3.4; // Number | Latitude

var lng = 3.4; // Number | Longitude

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date (in ISO8601 format)

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date (in ISO8601 format)

var intervalType = "intervalType_example"; // String | Interval type (day or hour)

var interval = 56; // Number | Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1.

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.forecastByLatLngGet(lat, lng, start, end, intervalType, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude | 
 **lng** | **Number**| Longitude | 
 **start** | **Date**| Start date (in ISO8601 format) | 
 **end** | **Date**| End date (in ISO8601 format) | 
 **intervalType** | **String**| Interval type (day or hour) | 
 **interval** | **Number**| Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1. | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**Series**](Series.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="forecastByLocationIdGet"></a>
# **forecastByLocationIdGet**
> Series forecastByLocationIdGet(locationId, start, end, intervalType, interval, opts)

Returns forecast data by Location ID

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var locationId = "locationId_example"; // String | Location ID

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date (in ISO8601 format)

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date (in ISO8601 format)

var intervalType = "intervalType_example"; // String | Interval type (day or hour)

var interval = 56; // Number | Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1.

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.forecastByLocationIdGet(locationId, start, end, intervalType, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Location ID | 
 **start** | **Date**| Start date (in ISO8601 format) | 
 **end** | **Date**| End date (in ISO8601 format) | 
 **intervalType** | **String**| Interval type (day or hour) | 
 **interval** | **Number**| Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1. | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**Series**](Series.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="historicalByLatLngGet"></a>
# **historicalByLatLngGet**
> PointData historicalByLatLngGet(lat, lng, _date, opts)

Returns historical Weather data by latitude, longitude &amp; timestamp

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var lat = 3.4; // Number | Latitude

var lng = 3.4; // Number | Longitude

var _date = new Date("2013-10-20T19:20:30+01:00"); // Date | Date (in ISO8601 format)

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.historicalByLatLngGet(lat, lng, _date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude | 
 **lng** | **Number**| Longitude | 
 **_date** | **Date**| Date (in ISO8601 format) | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**PointData**](PointData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="historicalByLocationIdGet"></a>
# **historicalByLocationIdGet**
> PointData historicalByLocationIdGet(locationId, _date, opts)

Returns historical Weather data by Location ID &amp; date

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var locationId = "locationId_example"; // String | Location ID

var _date = new Date("2013-10-20T19:20:30+01:00"); // Date | Date (in ISO8601 format)

var opts = { 
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.historicalByLocationIdGet(locationId, _date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Location ID | 
 **_date** | **Date**| Date (in ISO8601 format) | 
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**PointData**](PointData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="observationByLatLngGet"></a>
# **observationByLatLngGet**
> Series observationByLatLngGet(lat, lng, start, end, intervalType, interval, opts)

Returns observation data by latitude &amp; longitude

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var lat = 3.4; // Number | Latitude

var lng = 3.4; // Number | Longitude

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date (in ISO8601 format)

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date (in ISO8601 format)

var intervalType = "intervalType_example"; // String | Interval type (day or hour)

var interval = 56; // Number | Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1.

var opts = { 
  'showCumulative': true, // Boolean | Whether or not to show cumulative data
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.observationByLatLngGet(lat, lng, start, end, intervalType, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude | 
 **lng** | **Number**| Longitude | 
 **start** | **Date**| Start date (in ISO8601 format) | 
 **end** | **Date**| End date (in ISO8601 format) | 
 **intervalType** | **String**| Interval type (day or hour) | 
 **interval** | **Number**| Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1. | 
 **showCumulative** | **Boolean**| Whether or not to show cumulative data | [optional] [default to true]
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**Series**](Series.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="observationByLocationIdGet"></a>
# **observationByLocationIdGet**
> Series observationByLocationIdGet(locationId, start, end, intervalType, interval, opts)

Returns observation data by Location ID

### Example
```javascript
var WeatherApiForVizrt = require('weather_api_for_vizrt');

var apiInstance = new WeatherApiForVizrt.DefaultApi();

var locationId = "locationId_example"; // String | Location ID

var start = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date (in ISO8601 format)

var end = new Date("2013-10-20T19:20:30+01:00"); // Date | End date (in ISO8601 format)

var intervalType = "intervalType_example"; // String | Interval type (day or hour)

var interval = 56; // Number | Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1.

var opts = { 
  'showCumulative': true, // Boolean | Whether or not to show cumulative data
  'unitTemp': "c", // String | Units (f, c, or k)
  'unitWind': "knot", // String | Units (kph, mph, or knot)
  'unitRain': "cm", // String | Units (cm or in)
  'unitSnow': "cm", // String | Units (cm or in)
  'unitPressure': "hPa" // String | Units (inHg, hPa, Pa, mb)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.observationByLocationIdGet(locationId, start, end, intervalType, interval, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Location ID | 
 **start** | **Date**| Start date (in ISO8601 format) | 
 **end** | **Date**| End date (in ISO8601 format) | 
 **intervalType** | **String**| Interval type (day or hour) | 
 **interval** | **Number**| Defines the time interval between each element. For example, hourly observations (or forecasts) can be retrieved by setting intervalType to hour and interval to 1. | 
 **showCumulative** | **Boolean**| Whether or not to show cumulative data | [optional] [default to true]
 **unitTemp** | **String**| Units (f, c, or k) | [optional] [default to c]
 **unitWind** | **String**| Units (kph, mph, or knot) | [optional] [default to knot]
 **unitRain** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitSnow** | **String**| Units (cm or in) | [optional] [default to cm]
 **unitPressure** | **String**| Units (inHg, hPa, Pa, mb) | [optional] [default to hPa]

### Return type

[**Series**](Series.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

