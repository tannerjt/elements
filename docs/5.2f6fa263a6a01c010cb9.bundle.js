(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{967:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var invariant_1=__webpack_require__(162),helpers_1=__webpack_require__(114);exports.default=function distance(from,to,options){void 0===options&&(options={});var coordinates1=invariant_1.getCoord(from),coordinates2=invariant_1.getCoord(to),dLat=helpers_1.degreesToRadians(coordinates2[1]-coordinates1[1]),dLon=helpers_1.degreesToRadians(coordinates2[0]-coordinates1[0]),lat1=helpers_1.degreesToRadians(coordinates1[1]),lat2=helpers_1.degreesToRadians(coordinates2[1]),a=Math.pow(Math.sin(dLat/2),2)+Math.pow(Math.sin(dLon/2),2)*Math.cos(lat1)*Math.cos(lat2);return helpers_1.radiansToLength(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)),options.units)}},971:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var distance_1=__importDefault(__webpack_require__(967)),meta_1=__webpack_require__(139);exports.default=function length(geojson,options){return void 0===options&&(options={}),meta_1.segmentReduce(geojson,(function(previousValue,segment){var coords=segment.geometry.coordinates;return previousValue+distance_1.default(coords[0],coords[1],options)}),0)}}}]);
//# sourceMappingURL=5.2f6fa263a6a01c010cb9.bundle.js.map