(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1090:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var meta_1=__webpack_require__(149);function polygonArea(coords){var total=0;if(coords&&coords.length>0){total+=Math.abs(ringArea(coords[0]));for(var i=1;i<coords.length;i++)total-=Math.abs(ringArea(coords[i]))}return total}function ringArea(coords){var p1,p2,lowerIndex,middleIndex,upperIndex,i,total=0,coordsLength=coords.length;if(coordsLength>2){for(i=0;i<coordsLength;i++)i===coordsLength-2?(lowerIndex=coordsLength-2,middleIndex=coordsLength-1,upperIndex=0):i===coordsLength-1?(lowerIndex=coordsLength-1,middleIndex=0,upperIndex=1):(lowerIndex=i,middleIndex=i+1,upperIndex=i+2),p1=coords[lowerIndex],p2=coords[middleIndex],total+=(rad(coords[upperIndex][0])-rad(p1[0]))*Math.sin(rad(p2[1]));total=6378137*total*6378137/2}return total}function rad(num){return num*Math.PI/180}exports.default=function area(geojson){return meta_1.geomReduce(geojson,(function(value,geom){return value+function calculateArea(geom){var i,total=0;switch(geom.type){case"Polygon":return polygonArea(geom.coordinates);case"MultiPolygon":for(i=0;i<geom.coordinates.length;i++)total+=polygonArea(geom.coordinates[i]);return total;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}(geom)}),0)}}}]);
//# sourceMappingURL=6.f9073516eb0352bda350.bundle.js.map