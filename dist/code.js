/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/figmaController.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/constants.ts":
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/*! exports provided: COMPONENT_SET_TYPE, PROPERTY_VARIANT_TYPE, MESSAGE_COMPONENT_NOT_SELECTED, MESSAGE_ERROR, MESSAGE_COMPONENT_SELECTED, MESSAGE_GET_VARIANTS, MESSAGE_GET_PROPERTIES, MESSAGE_GET_DIRECTIONS, MESSAGE_GET_GAPS, MESSAGE_GET_PROPERTIES_WITH_VALUES, MESSAGE_CHANGE_PROPERTIES, DEFAULT_GAP, ROWS_GAP_FIELD, COLUMNS_GAP_FIELD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_SET_TYPE", function() { return COMPONENT_SET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPERTY_VARIANT_TYPE", function() { return PROPERTY_VARIANT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_COMPONENT_NOT_SELECTED", function() { return MESSAGE_COMPONENT_NOT_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_ERROR", function() { return MESSAGE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_COMPONENT_SELECTED", function() { return MESSAGE_COMPONENT_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_VARIANTS", function() { return MESSAGE_GET_VARIANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_PROPERTIES", function() { return MESSAGE_GET_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_DIRECTIONS", function() { return MESSAGE_GET_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_GAPS", function() { return MESSAGE_GET_GAPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_PROPERTIES_WITH_VALUES", function() { return MESSAGE_GET_PROPERTIES_WITH_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_CHANGE_PROPERTIES", function() { return MESSAGE_CHANGE_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GAP", function() { return DEFAULT_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS_GAP_FIELD", function() { return ROWS_GAP_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS_GAP_FIELD", function() { return COLUMNS_GAP_FIELD; });
const COMPONENT_SET_TYPE = 'COMPONENT_SET';
const PROPERTY_VARIANT_TYPE = 'VARIANT';
const MESSAGE_COMPONENT_NOT_SELECTED = 'MESSAGE_COMPONENT_NOT_SELECTED';
const MESSAGE_ERROR = 'MESSAGE_ERROR';
const MESSAGE_COMPONENT_SELECTED = 'MESSAGE_COMPONENT_SELECTED';
const MESSAGE_GET_VARIANTS = 'MESSAGE_GET_VARIANTS';
const MESSAGE_GET_PROPERTIES = 'MESSAGE_GET_PROPERTIES';
const MESSAGE_GET_DIRECTIONS = 'MESSAGE_GET_DIRECTIONS';
const MESSAGE_GET_GAPS = 'MESSAGE_GET_GAPS';
const MESSAGE_GET_PROPERTIES_WITH_VALUES = 'MESSAGE_GET_PROPERTIES_WITH_VALUES';
const MESSAGE_CHANGE_PROPERTIES = 'MESSAGE_CHANGE_PROPERTIES';
const DEFAULT_GAP = 40;
const ROWS_GAP_FIELD = 'ROWS_GAP_FIELD';
const COLUMNS_GAP_FIELD = 'COLUMNS_GAP_FIELD';


/***/ }),

/***/ "./src/common/types.ts":
/*!*****************************!*\
  !*** ./src/common/types.ts ***!
  \*****************************/
/*! exports provided: PropertiesMapType, PropertiesListType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesMapType", function() { return PropertiesMapType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesListType", function() { return PropertiesListType; });
;
const PropertiesMapType = 'MAP';
const PropertiesListType = 'LIST';


/***/ }),

/***/ "./src/plugin/events/onSelectionHandler.ts":
/*!*************************************************!*\
  !*** ./src/plugin/events/onSelectionHandler.ts ***!
  \*************************************************/
/*! exports provided: onSelectionChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectionChange", function() { return onSelectionChange; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants */ "./src/common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/plugin/events/utils.ts");


function onSelectionChange(page) {
    const isSelected = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkSelection"])(page);
    if (!isSelected) {
        return {
            type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_COMPONENT_NOT_SELECTED"],
            payload: false
        };
    }
    const { selection: [selectedNode] } = figma.currentPage;
    const variantsParent = selectedNode;
    const variants = variantsParent.children;
    try {
        const { properties, directions, gaps, valuesOrders } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPropertiesInfo"])(variantsParent, variants);
        const propertiesWithValues = properties.map(({ key, values }) => {
            const calculatedValues = valuesOrders[key] || [];
            if (calculatedValues.length < values.length) {
                values.forEach((val) => {
                    if (!calculatedValues.includes(val)) {
                        calculatedValues.push(val);
                    }
                });
            }
            return {
                key,
                values: calculatedValues
            };
        });
        return [
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_COMPONENT_SELECTED"],
                payload: true
            },
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_GET_PROPERTIES"],
                payload: properties
            },
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_GET_DIRECTIONS"],
                payload: directions
            },
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_GET_GAPS"],
                payload: gaps
            },
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_GET_PROPERTIES_WITH_VALUES"],
                payload: propertiesWithValues
            },
            {
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CHANGE_PROPERTIES"],
                payload: {
                    properties: propertiesWithValues,
                    directions,
                    gaps
                }
            }
        ];
    }
    catch (_) {
        return {
            type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_ERROR"],
            payload: true
        };
    }
}


/***/ }),

/***/ "./src/plugin/events/onSortMessageHandler.ts":
/*!***************************************************!*\
  !*** ./src/plugin/events/onSortMessageHandler.ts ***!
  \***************************************************/
/*! exports provided: onSortMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSortMessage", function() { return onSortMessage; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants */ "./src/common/constants.ts");
/* harmony import */ var _variantsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variantsController */ "./src/plugin/variantsController.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/plugin/events/utils.ts");



function onSortMessage(page, properties, directions, gaps) {
    const isSelected = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkSelection"])(page);
    if (!isSelected) {
        return;
    }
    const { selection: [selectedNode] } = figma.currentPage;
    const variantsParent = selectedNode;
    const variants = variantsParent.children;
    try {
        Object(_variantsController__WEBPACK_IMPORTED_MODULE_1__["sortVariants"])(variantsParent, variants, properties, { directions, gaps });
        return null;
    }
    catch (error) {
        return {
            type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_ERROR"],
            payload: true
        };
    }
}


/***/ }),

/***/ "./src/plugin/events/utils.ts":
/*!************************************!*\
  !*** ./src/plugin/events/utils.ts ***!
  \************************************/
/*! exports provided: checkSelection, getPropertiesInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSelection", function() { return checkSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertiesInfo", function() { return getPropertiesInfo; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/types */ "./src/common/types.ts");
/* harmony import */ var _propertiesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../propertiesController */ "./src/plugin/propertiesController.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/constants */ "./src/common/constants.ts");



function checkSelection(page) {
    const { selection } = page;
    if (!selection.length) {
        return false;
    }
    const [selectedNode] = selection;
    if (selectedNode.type !== _common_constants__WEBPACK_IMPORTED_MODULE_2__["COMPONENT_SET_TYPE"]) {
        return false;
    }
    if (selectedNode.children.length < 2) {
        return false;
    }
    return true;
}
function getPropertiesInfo(componentSet, variants) {
    const [root] = variants;
    const propertiesList = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["fetchProperties"])(componentSet, _common_types__WEBPACK_IMPORTED_MODULE_0__["PropertiesListType"]);
    const propertiesMap = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["fetchProperties"])(componentSet, _common_types__WEBPACK_IMPORTED_MODULE_0__["PropertiesMapType"]);
    const { directions, gaps, valuesOrders } = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["sortProperties"])(variants, propertiesMap);
    const { name: propertiesString } = root;
    const propertiesOrders = propertiesString.split(', ');
    let propertiesListSorted = [];
    for (const propertyData of propertiesOrders) {
        const [propertyKey] = propertyData.split('=');
        propertiesListSorted.push(propertiesList.find(({ key }) => key === propertyKey));
    }
    if (propertiesListSorted.length < propertiesList.length) {
        propertiesListSorted = propertiesList;
    }
    return {
        properties: propertiesListSorted,
        directions,
        gaps,
        valuesOrders
    };
}


/***/ }),

/***/ "./src/plugin/figmaController.ts":
/*!***************************************!*\
  !*** ./src/plugin/figmaController.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./src/common/constants.ts");
/* harmony import */ var _events_onSelectionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/onSelectionHandler */ "./src/plugin/events/onSelectionHandler.ts");
/* harmony import */ var _events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/onSortMessageHandler */ "./src/plugin/events/onSortMessageHandler.ts");



figma.showUI(__html__, { width: 400, height: 665 });
figma.on('selectionchange', () => {
    const msg = Object(_events_onSelectionHandler__WEBPACK_IMPORTED_MODULE_1__["onSelectionChange"])(figma.currentPage);
    (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
        if (item.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CHANGE_PROPERTIES"]) {
            const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, item.payload.properties, item.payload.directions, item.payload.gaps);
            if (sortMsg) {
                figma.ui.postMessage(sortMsg);
            }
        }
        figma.ui.postMessage(item);
    });
});
figma.on('run', () => {
    const msg = Object(_events_onSelectionHandler__WEBPACK_IMPORTED_MODULE_1__["onSelectionChange"])(figma.currentPage);
    (Array.isArray(msg) ? msg : [msg]).forEach((item) => {
        if (item.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CHANGE_PROPERTIES"]) {
            const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, item.payload.properties, item.payload.directions, item.payload.gaps);
            if (sortMsg) {
                figma.ui.postMessage(sortMsg);
            }
        }
        figma.ui.postMessage(item);
    });
});
figma.ui.onmessage = (msg) => {
    if (msg.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CHANGE_PROPERTIES"]) {
        const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, msg.payload.properties, msg.payload.directions, msg.payload.gaps);
        if (sortMsg) {
            figma.ui.postMessage(sortMsg);
        }
    }
};


/***/ }),

/***/ "./src/plugin/propertiesController.ts":
/*!********************************************!*\
  !*** ./src/plugin/propertiesController.ts ***!
  \********************************************/
/*! exports provided: sortProperties, fetchProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sorting */ "./src/plugin/services/sorting/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortProperties", function() { return _services_sorting__WEBPACK_IMPORTED_MODULE_0__["sortProperties"]; });

/* harmony import */ var _services_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/properties */ "./src/plugin/services/properties/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProperties", function() { return _services_properties__WEBPACK_IMPORTED_MODULE_1__["extractPropertiesFromComponent"]; });






/***/ }),

/***/ "./src/plugin/services/properties/index.ts":
/*!*************************************************!*\
  !*** ./src/plugin/services/properties/index.ts ***!
  \*************************************************/
/*! exports provided: extractPropertiesFromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPropertiesFromComponent", function() { return extractPropertiesFromComponent; });
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/types */ "./src/common/types.ts");
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapper */ "./src/plugin/services/properties/mapper.ts");


function extractPropertiesFromComponent(component, type) {
    const rawProperties = component.componentPropertyDefinitions;
    if (type === _common_types__WEBPACK_IMPORTED_MODULE_0__["PropertiesListType"]) {
        return Object(_mapper__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesToList"])(rawProperties);
    }
    return Object(_mapper__WEBPACK_IMPORTED_MODULE_1__["mapProperties"])(rawProperties);
}


/***/ }),

/***/ "./src/plugin/services/properties/mapper.ts":
/*!**************************************************!*\
  !*** ./src/plugin/services/properties/mapper.ts ***!
  \**************************************************/
/*! exports provided: mapProperties, mapPropertiesToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProperties", function() { return mapProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropertiesToList", function() { return mapPropertiesToList; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/common/constants.ts");

function mapProperties(rawProperties) {
    return Object.keys(rawProperties).reduce((acc, propertyKey) => {
        if (rawProperties[propertyKey].type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["PROPERTY_VARIANT_TYPE"]) {
            acc[propertyKey] = rawProperties[propertyKey].variantOptions;
        }
        ;
        return acc;
    }, {});
}
function mapPropertiesToList(rawProperties) {
    return Object.keys(rawProperties).reduce((acc, propertyKey) => {
        if (rawProperties[propertyKey].type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["PROPERTY_VARIANT_TYPE"]) {
            acc.push({
                key: propertyKey,
                values: rawProperties[propertyKey].variantOptions
            });
        }
        ;
        return acc;
    }, []);
}


/***/ }),

/***/ "./src/plugin/services/sorting/index.ts":
/*!**********************************************!*\
  !*** ./src/plugin/services/sorting/index.ts ***!
  \**********************************************/
/*! exports provided: sortProperties, sortVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sortProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortProperties */ "./src/plugin/services/sorting/sortProperties.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortProperties", function() { return _sortProperties__WEBPACK_IMPORTED_MODULE_0__["sortProperties"]; });

/* harmony import */ var _sortVariants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortVariants */ "./src/plugin/services/sorting/sortVariants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortVariants", function() { return _sortVariants__WEBPACK_IMPORTED_MODULE_1__["sortVariants"]; });






/***/ }),

/***/ "./src/plugin/services/sorting/sortProperties.ts":
/*!*******************************************************!*\
  !*** ./src/plugin/services/sorting/sortProperties.ts ***!
  \*******************************************************/
/*! exports provided: sortProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortProperties", function() { return sortProperties; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/plugin/services/sorting/utils.ts");


function sortProperties(variants, properties) {
    var _a, _b;
    let sortDirections = {};
    const borders = {
        xFrom: 0,
        yFrom: 0,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: Number.MAX_SAFE_INTEGER
    };
    const next = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findNextVariant"])(variants);
    const rootColumns = next({
        xFrom: 0,
        yFrom: 0,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: Number.MAX_SAFE_INTEGER,
        xMin: true
    });
    const prevRootColumns = next({
        xFrom: 0,
        yFrom: 0,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: rootColumns.y - 1,
        xMin: true,
        yMax: true
    });
    const columnsBordersYFrom = prevRootColumns ? (prevRootColumns.y + prevRootColumns.height) : 0;
    const rootRows = next({
        xFrom: 0,
        yFrom: 0,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: Number.MAX_SAFE_INTEGER,
        yMin: true
    });
    const prevRootRows = next({
        xFrom: 0,
        yFrom: 0,
        xBefore: rootRows.x - 1,
        yBefore: Number.MAX_SAFE_INTEGER,
        yMin: true,
        xMax: true
    });
    const rowsBordersXFrom = prevRootRows ? (prevRootRows.x + prevRootRows.width) : 0;
    const gaps = {
        [_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]]: rootRows.x,
        [_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]]: rootColumns.y
    };
    let currentColumnBorders = borders;
    let currentColumnVariant = rootColumns;
    let currentRowBorders = borders;
    let currentRowVariant = rootRows;
    let prevColumnVariant = rootColumns;
    let prevRowVariant = rootRows;
    let valuesOrders = {};
    while (currentColumnVariant || currentRowVariant) {
        currentColumnBorders = Object.assign(Object.assign({}, currentColumnBorders), { xMin: true, yFrom: columnsBordersYFrom, xFrom: ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.x) || 0) + ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.width) || 0) });
        currentRowBorders = Object.assign(Object.assign({}, currentRowBorders), { yMin: true, xFrom: rowsBordersXFrom, yFrom: ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.y) || 0) + ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.height) || 0) });
        const comparator = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["compareProperties"])(properties);
        const { keys: columnProperties, values: columnPropertiesValues, } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["collectProperties"])(comparator, rootColumns, currentColumnVariant);
        const { keys: rowsProperties, values: rowPropertiesValues, } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["collectProperties"])(comparator, rootRows, currentRowVariant);
        sortDirections = Object.assign(Object.assign(Object.assign({}, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fillDirections"])(rowsProperties, "ROWS")), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["fillDirections"])(columnProperties, "COLUMNS")), sortDirections);
        for (const propertyKey of rowsProperties) {
            if (!((_a = rowPropertiesValues[propertyKey]) === null || _a === void 0 ? void 0 : _a.length) ||
                sortDirections[propertyKey] === "COLUMNS") {
                continue;
            }
            if (!valuesOrders[propertyKey]) {
                valuesOrders[propertyKey] = rowPropertiesValues[propertyKey] || [];
            }
            else {
                rowPropertiesValues[propertyKey].forEach((val) => {
                    if (!valuesOrders[propertyKey].includes(val)) {
                        valuesOrders[propertyKey].push(val);
                    }
                });
            }
        }
        for (const propertyKey of columnProperties) {
            if (!((_b = columnPropertiesValues[propertyKey]) === null || _b === void 0 ? void 0 : _b.length) ||
                sortDirections[propertyKey] === "ROWS") {
                continue;
            }
            if (!valuesOrders[propertyKey]) {
                valuesOrders[propertyKey] = columnPropertiesValues[propertyKey] || [];
            }
            else {
                columnPropertiesValues[propertyKey].forEach((val) => {
                    if (!valuesOrders[propertyKey].includes(val)) {
                        valuesOrders[propertyKey].push(val);
                    }
                });
            }
        }
        for (const rowProperty of rowsProperties) {
            if (!gaps[rowProperty]) {
                gaps[rowProperty] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findRowGap"])(prevRowVariant, currentRowVariant, variants);
            }
        }
        for (const columnProperty of columnProperties) {
            if (!gaps[columnProperty]) {
                gaps[columnProperty] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findColumnGap"])(prevColumnVariant, currentColumnVariant, variants);
            }
        }
        prevColumnVariant = currentColumnVariant;
        prevRowVariant = currentRowVariant;
        if ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.x) < gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]]) {
            gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]] = currentColumnVariant.x;
        }
        if ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.x) < gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]]) {
            gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]] = currentRowVariant.x;
        }
        if ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.y) < gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]]) {
            gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]] = currentColumnVariant.y;
        }
        if ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.y) < gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]]) {
            gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]] = currentRowVariant.y;
        }
        currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
        currentRowVariant = currentRowVariant && next(currentRowBorders);
    }
    for (const property of Object.keys(properties)) {
        if (!sortDirections.hasOwnProperty(property)) {
            sortDirections[property] = "ROWS";
        }
    }
    return {
        valuesOrders,
        directions: sortDirections,
        gaps
    };
}


/***/ }),

/***/ "./src/plugin/services/sorting/sortVariants.ts":
/*!*****************************************************!*\
  !*** ./src/plugin/services/sorting/sortVariants.ts ***!
  \*****************************************************/
/*! exports provided: sortVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortVariants", function() { return sortVariants; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/plugin/services/sorting/utils.ts");


function sortVariants(parentVariant, variants, properties, options) {
    const { directions, gaps } = options;
    const reversedProperties = properties.reverse();
    let rows = [];
    let rowsGaps = [];
    let columns = [];
    let columnsGaps = [];
    for (let propertyIndex = 0; propertyIndex < reversedProperties.length; propertyIndex++) {
        const { key: propertyKey, values: propertyValues } = properties[propertyIndex];
        if (directions[propertyKey] === "ROWS") {
            if (rows.length === 0) {
                rows = propertyValues.map((propertyValue) => ([{
                        key: propertyKey,
                        value: propertyValue
                    }]));
                rowsGaps = propertyValues.map(() => gaps[propertyKey]);
            }
            else {
                const nestedPropertyValues = rows;
                const nestedPropertyGaps = rowsGaps;
                rows = [];
                rowsGaps = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        rows.push([{
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            }, ...nestedPropertyValues[nestedIndex]]);
                        if (nestedIndex === nestedPropertyValues.length - 1) {
                            rowsGaps.push(gaps[propertyKey]);
                        }
                        else {
                            rowsGaps.push(nestedPropertyGaps[nestedIndex]);
                        }
                    }
                }
            }
        }
        else if (directions[propertyKey] === "COLUMNS") {
            if (columns.length === 0) {
                columns = propertyValues.map((propertyValue) => [{
                        key: propertyKey,
                        value: propertyValue
                    }]);
                columnsGaps = propertyValues.map(() => gaps[propertyKey]);
            }
            else {
                const nestedPropertyValues = columns;
                const nestedPropertyGaps = columnsGaps;
                columns = [];
                columnsGaps = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        columns.push([{
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            }, ...nestedPropertyValues[nestedIndex]]);
                        if (nestedIndex === nestedPropertyValues.length - 1) {
                            columnsGaps.push(gaps[propertyKey]);
                        }
                        else {
                            columnsGaps.push(nestedPropertyGaps[nestedIndex]);
                        }
                    }
                }
            }
        }
    }
    const columnsVariants = [];
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const column = columns[columnIndex];
        const columnVariants = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findAllVariantsByPropertyValue"])(variants, column);
        let maxColumnWidth = 0;
        for (const variant of columnVariants) {
            if (variant.width > maxColumnWidth) {
                maxColumnWidth = variant.width;
            }
        }
        columnsVariants.push({
            variants: columnVariants,
            maxColumnWidth
        });
    }
    let xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
    let yCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]];
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        let maxRowHeight = 0;
        let isEmptyRow = true;
        xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            const row = rows[rowIndex];
            const columnVariants = columnsVariants[columnIndex];
            if (columnVariants.variants.length > 0) {
                const variant = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findVariantByPropertyValue"])(columnVariants.variants, row);
                if (variant) {
                    isEmptyRow = false;
                    if (variant.height > maxRowHeight) {
                        maxRowHeight = variant.height;
                    }
                    variant.x = xCoord;
                    variant.y = yCoord;
                }
                xCoord += columnVariants.maxColumnWidth;
                if (columnIndex !== columns.length - 1) {
                    xCoord += columnsGaps[columnIndex];
                }
            }
        }
        if (!isEmptyRow) {
            yCoord += maxRowHeight;
            if (rowIndex !== rows.length - 1) {
                yCoord += rowsGaps[rowIndex];
            }
        }
    }
    parentVariant.resizeWithoutConstraints(xCoord + gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]], yCoord + gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]]);
}
;


/***/ }),

/***/ "./src/plugin/services/sorting/utils.ts":
/*!**********************************************!*\
  !*** ./src/plugin/services/sorting/utils.ts ***!
  \**********************************************/
/*! exports provided: findRowGap, findColumnGap, findNextVariant, compareProperties, collectProperties, fillDirections, findVariantByPropertyValue, findAllVariantsByPropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRowGap", function() { return findRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColumnGap", function() { return findColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNextVariant", function() { return findNextVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProperties", function() { return compareProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectProperties", function() { return collectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillDirections", function() { return fillDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findVariantByPropertyValue", function() { return findVariantByPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllVariantsByPropertyValue", function() { return findAllVariantsByPropertyValue; });
function findRowGap(prevVariant, variant, variants) {
    let gap = variant.y - prevVariant.y - prevVariant.height;
    let borders = {
        xFrom: 0,
        yFrom: prevVariant.y,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: variant.y - 1
    };
    const next = findNextVariant(variants);
    let root = prevVariant;
    while (root) {
        const newGap = variant.y - root.y - root.height;
        if (newGap < gap) {
            gap = newGap;
        }
        borders = {
            xFrom: root.x + root.width,
            yFrom: prevVariant.y,
            xBefore: Number.MAX_SAFE_INTEGER,
            yBefore: variant.y - gap
        };
        root = next(borders);
    }
    return gap < 0 ? 0 : gap;
}
function findColumnGap(prevVariant, variant, variants) {
    let gap = variant.x - prevVariant.x - prevVariant.width;
    let borders = {
        xFrom: prevVariant.x,
        yFrom: 0,
        xBefore: variant.x - 1,
        yBefore: Number.MAX_SAFE_INTEGER
    };
    const next = findNextVariant(variants);
    let root = prevVariant;
    while (root) {
        const newGap = variant.x - root.x - root.width;
        if (newGap < gap) {
            gap = newGap;
        }
        borders = {
            xFrom: prevVariant.x,
            yFrom: root.y + root.height,
            xBefore: variant.x - gap,
            yBefore: Number.MAX_SAFE_INTEGER
        };
        root = next(borders);
    }
    return gap < 0 ? 0 : gap;
}
function findNextVariant(variants) {
    return function (borders) {
        const { xFrom, yFrom, xBefore, yBefore, yMax, yMin, xMax, xMin } = borders;
        let result = null;
        let xMinValue = Number.MAX_SAFE_INTEGER;
        let yMinValue = Number.MAX_SAFE_INTEGER;
        for (const variant of variants) {
            if (variant.x >= xFrom &&
                variant.y >= yFrom &&
                variant.x <= xBefore &&
                variant.y <= yBefore) {
                let isFound = false;
                if (xMin && yMin && (variant.x + variant.y) < (xMinValue + yMinValue)) {
                    isFound = true;
                }
                else if (xMin && yMax && (variant.x < xMinValue || variant.x === xMinValue && variant.y >= yMinValue)) {
                    isFound = true;
                }
                else if (yMin && xMax && (variant.y < yMinValue || variant.y === yMinValue && variant.x >= xMinValue)) {
                    isFound = true;
                }
                else if (xMin && (variant.x < xMinValue || variant.x === xMinValue && variant.y < yMinValue)) {
                    isFound = true;
                }
                else if (yMin && (variant.y < yMinValue || variant.y === yMinValue && variant.x < xMinValue)) {
                    isFound = true;
                }
                else if (variant.x <= xMinValue && variant.y <= yMinValue) {
                    isFound = true;
                }
                if (isFound) {
                    result = variant;
                    xMinValue = variant.x;
                    yMinValue = variant.y;
                }
            }
        }
        return result;
    };
}
;
function compareProperties(properties) {
    return function (rootPropertiesValues, currentPropertiesValues) {
        if (!currentPropertiesValues) {
            return { keys: [], values: {} };
        }
        const keys = [];
        const values = {};
        for (const key of Object.keys(properties)) {
            if (rootPropertiesValues[key] !== currentPropertiesValues[key]) {
                keys.push(key);
                if (!values[key]) {
                    values[key] = [rootPropertiesValues[key]];
                }
                values[key].push(currentPropertiesValues[key]);
            }
        }
        return { keys, values };
    };
}
function collectProperties(compareFn, root, variant) {
    return compareFn(root.variantProperties, variant === null || variant === void 0 ? void 0 : variant.variantProperties);
}
function fillDirections(properties, direction) {
    return properties.reduce((directions, property) => {
        directions[property] = direction;
        return directions;
    }, {});
}
function findVariantByPropertyValue(variants, propertiesValues) {
    for (const variant of variants) {
        let isMatched = true;
        for (const { key, value } of propertiesValues) {
            if (variant.variantProperties[key] !== value) {
                isMatched = false;
            }
        }
        if (isMatched) {
            return variant;
        }
    }
    return undefined;
}
function findAllVariantsByPropertyValue(variants, propertiesValues) {
    const foundVariants = [];
    for (const variant of variants) {
        let isMatched = true;
        for (const { key, value } of propertiesValues) {
            if (variant.variantProperties[key] !== value) {
                isMatched = false;
            }
        }
        if (isMatched) {
            foundVariants.push(variant);
        }
    }
    return foundVariants;
}


/***/ }),

/***/ "./src/plugin/variantsController.ts":
/*!******************************************!*\
  !*** ./src/plugin/variantsController.ts ***!
  \******************************************/
/*! exports provided: sortVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sorting */ "./src/plugin/services/sorting/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortVariants", function() { return _services_sorting__WEBPACK_IMPORTED_MODULE_0__["sortVariants"]; });





/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUMxQiIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2ZpZ21hQ29udHJvbGxlci50c1wiKTtcbiIsImV4cG9ydCBjb25zdCBDT01QT05FTlRfU0VUX1RZUEUgPSAnQ09NUE9ORU5UX1NFVCc7XHJcbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgPSAnVkFSSUFOVCc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQgPSAnTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfRVJST1IgPSAnTUVTU0FHRV9FUlJPUic7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCA9ICdNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9WQVJJQU5UUyA9ICdNRVNTQUdFX0dFVF9WQVJJQU5UUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTID0gJ01FU1NBR0VfR0VUX1BST1BFUlRJRVMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfRElSRUNUSU9OUyA9ICdNRVNTQUdFX0dFVF9ESVJFQ1RJT05TJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX0dBUFMgPSAnTUVTU0FHRV9HRVRfR0FQUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTID0gJ01FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTJztcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0FQID0gNDA7XHJcbmV4cG9ydCBjb25zdCBST1dTX0dBUF9GSUVMRCA9ICdST1dTX0dBUF9GSUVMRCc7XHJcbmV4cG9ydCBjb25zdCBDT0xVTU5TX0dBUF9GSUVMRCA9ICdDT0xVTU5TX0dBUF9GSUVMRCc7XHJcbiIsIjtcclxuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNNYXBUeXBlID0gJ01BUCc7XHJcbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTGlzdFR5cGUgPSAnTElTVCc7XHJcbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsIE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCwgTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsIE1FU1NBR0VfRVJST1IsIE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsIE1FU1NBR0VfR0VUX0dBUFMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjaGVja1NlbGVjdGlvbiwgZ2V0UHJvcGVydGllc0luZm8gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gb25TZWxlY3Rpb25DaGFuZ2UocGFnZSkge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xyXG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHNlbGVjdGlvbjogW3NlbGVjdGVkTm9kZV0gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xyXG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMsIGRpcmVjdGlvbnMsIGdhcHMsIHZhbHVlc09yZGVycyB9ID0gZ2V0UHJvcGVydGllc0luZm8odmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzV2l0aFZhbHVlcyA9IHByb3BlcnRpZXMubWFwKCh7IGtleSwgdmFsdWVzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlcyA9IHZhbHVlc09yZGVyc1trZXldIHx8IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2FsY3VsYXRlZFZhbHVlcy5sZW5ndGggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxjdWxhdGVkVmFsdWVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFZhbHVlcy5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogY2FsY3VsYXRlZFZhbHVlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVELFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGlyZWN0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9HQVBTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZ2Fwc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1dpdGhWYWx1ZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzV2l0aFZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfRVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1FU1NBR0VfRVJST1IgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi4vdmFyaWFudHNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG9uU29ydE1lc3NhZ2UocGFnZSwgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2Fwcykge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xyXG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcclxuICAgIGNvbnN0IHZhcmlhbnRzUGFyZW50ID0gc2VsZWN0ZWROb2RlO1xyXG4gICAgY29uc3QgdmFyaWFudHMgPSB2YXJpYW50c1BhcmVudC5jaGlsZHJlbjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc29ydFZhcmlhbnRzKHZhcmlhbnRzUGFyZW50LCB2YXJpYW50cywgcHJvcGVydGllcywgeyBkaXJlY3Rpb25zLCBnYXBzIH0pO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9FUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvcGVydGllc0xpc3RUeXBlLCBQcm9wZXJ0aWVzTWFwVHlwZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcyc7XHJcbmltcG9ydCB7IGZldGNoUHJvcGVydGllcywgc29ydFByb3BlcnRpZXMgfSBmcm9tICcuLi9wcm9wZXJ0aWVzQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IENPTVBPTkVOVF9TRVRfVFlQRSB9IGZyb20gJy4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NlbGVjdGlvbihwYWdlKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGlvbiB9ID0gcGFnZTtcclxuICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtzZWxlY3RlZE5vZGVdID0gc2VsZWN0aW9uO1xyXG4gICAgaWYgKHNlbGVjdGVkTm9kZS50eXBlICE9PSBDT01QT05FTlRfU0VUX1RZUEUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWROb2RlLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydGllc0luZm8oY29tcG9uZW50U2V0LCB2YXJpYW50cykge1xyXG4gICAgY29uc3QgW3Jvb3RdID0gdmFyaWFudHM7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzTGlzdCA9IGZldGNoUHJvcGVydGllcyhjb21wb25lbnRTZXQsIFByb3BlcnRpZXNMaXN0VHlwZSk7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gZmV0Y2hQcm9wZXJ0aWVzKGNvbXBvbmVudFNldCwgUHJvcGVydGllc01hcFR5cGUpO1xyXG4gICAgY29uc3QgeyBkaXJlY3Rpb25zLCBnYXBzLCB2YWx1ZXNPcmRlcnMgfSA9IHNvcnRQcm9wZXJ0aWVzKHZhcmlhbnRzLCBwcm9wZXJ0aWVzTWFwKTtcclxuICAgIGNvbnN0IHsgbmFtZTogcHJvcGVydGllc1N0cmluZyB9ID0gcm9vdDtcclxuICAgIGNvbnN0IHByb3BlcnRpZXNPcmRlcnMgPSBwcm9wZXJ0aWVzU3RyaW5nLnNwbGl0KCcsICcpO1xyXG4gICAgbGV0IHByb3BlcnRpZXNMaXN0U29ydGVkID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5RGF0YSBvZiBwcm9wZXJ0aWVzT3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgW3Byb3BlcnR5S2V5XSA9IHByb3BlcnR5RGF0YS5zcGxpdCgnPScpO1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkLnB1c2gocHJvcGVydGllc0xpc3QuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBwcm9wZXJ0eUtleSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BlcnRpZXNMaXN0U29ydGVkLmxlbmd0aCA8IHByb3BlcnRpZXNMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkID0gcHJvcGVydGllc0xpc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNMaXN0U29ydGVkLFxyXG4gICAgICAgIGRpcmVjdGlvbnMsXHJcbiAgICAgICAgZ2FwcyxcclxuICAgICAgICB2YWx1ZXNPcmRlcnNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL29uU2VsZWN0aW9uSGFuZGxlcic7XHJcbmltcG9ydCB7IG9uU29ydE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNvcnRNZXNzYWdlSGFuZGxlcic7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDY2NSB9KTtcclxuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcclxuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgIChBcnJheS5pc0FycmF5KG1zZykgPyBtc2cgOiBbbXNnXSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZC5wcm9wZXJ0aWVzLCBpdGVtLnBheWxvYWQuZGlyZWN0aW9ucywgaXRlbS5wYXlsb2FkLmdhcHMpO1xyXG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xyXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoaXRlbSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmZpZ21hLm9uKCdydW4nLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQucHJvcGVydGllcywgaXRlbS5wYXlsb2FkLmRpcmVjdGlvbnMsIGl0ZW0ucGF5bG9hZC5nYXBzKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgbXNnLnBheWxvYWQucHJvcGVydGllcywgbXNnLnBheWxvYWQuZGlyZWN0aW9ucywgbXNnLnBheWxvYWQuZ2Fwcyk7XHJcbiAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcclxuaW1wb3J0IHsgZXh0cmFjdFByb3BlcnRpZXNGcm9tQ29tcG9uZW50IGFzIGZldGNoUHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb3BlcnRpZXNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIGZldGNoUHJvcGVydGllcyB9O1xyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXBQcm9wZXJ0aWVzLCBtYXBQcm9wZXJ0aWVzVG9MaXN0IH0gZnJvbSBcIi4vbWFwcGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCB0eXBlKSB7XHJcbiAgICBjb25zdCByYXdQcm9wZXJ0aWVzID0gY29tcG9uZW50LmNvbXBvbmVudFByb3BlcnR5RGVmaW5pdGlvbnM7XHJcbiAgICBpZiAodHlwZSA9PT0gUHJvcGVydGllc0xpc3RUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwUHJvcGVydGllcyhyYXdQcm9wZXJ0aWVzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJhd1Byb3BlcnRpZXMpLnJlZHVjZSgoYWNjLCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcclxuICAgICAgICAgICAgYWNjW3Byb3BlcnR5S2V5XSA9IHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnZhcmlhbnRPcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvcGVydGllc1RvTGlzdChyYXdQcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnR5cGUgPT09IFBST1BFUlRZX1ZBUklBTlRfVFlQRSkge1xyXG4gICAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgc29ydFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zb3J0UHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zb3J0VmFyaWFudHNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIHNvcnRWYXJpYW50cyB9O1xyXG4iLCJpbXBvcnQgeyBST1dTX0dBUF9GSUVMRCwgQ09MVU1OU19HQVBfRklFTEQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjb2xsZWN0UHJvcGVydGllcywgY29tcGFyZVByb3BlcnRpZXMsIGZpbGxEaXJlY3Rpb25zLCBmaW5kQ29sdW1uR2FwLCBmaW5kTmV4dFZhcmlhbnQsIGZpbmRSb3dHYXAgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydFByb3BlcnRpZXModmFyaWFudHMsIHByb3BlcnRpZXMpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBsZXQgc29ydERpcmVjdGlvbnMgPSB7fTtcclxuICAgIGNvbnN0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcclxuICAgIGNvbnN0IHJvb3RDb2x1bW5zID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeE1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdENvbHVtbnMgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5QmVmb3JlOiByb290Q29sdW1ucy55IC0gMSxcclxuICAgICAgICB4TWluOiB0cnVlLFxyXG4gICAgICAgIHlNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29sdW1uc0JvcmRlcnNZRnJvbSA9IHByZXZSb290Q29sdW1ucyA/IChwcmV2Um9vdENvbHVtbnMueSArIHByZXZSb290Q29sdW1ucy5oZWlnaHQpIDogMDtcclxuICAgIGNvbnN0IHJvb3RSb3dzID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeU1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdFJvd3MgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiByb290Um93cy54IC0gMSxcclxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5TWluOiB0cnVlLFxyXG4gICAgICAgIHhNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgcm93c0JvcmRlcnNYRnJvbSA9IHByZXZSb290Um93cyA/IChwcmV2Um9vdFJvd3MueCArIHByZXZSb290Um93cy53aWR0aCkgOiAwO1xyXG4gICAgY29uc3QgZ2FwcyA9IHtcclxuICAgICAgICBbUk9XU19HQVBfRklFTERdOiByb290Um93cy54LFxyXG4gICAgICAgIFtDT0xVTU5TX0dBUF9GSUVMRF06IHJvb3RDb2x1bW5zLnlcclxuICAgIH07XHJcbiAgICBsZXQgY3VycmVudENvbHVtbkJvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRDb2x1bW5WYXJpYW50ID0gcm9vdENvbHVtbnM7XHJcbiAgICBsZXQgY3VycmVudFJvd0JvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRSb3dWYXJpYW50ID0gcm9vdFJvd3M7XHJcbiAgICBsZXQgcHJldkNvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcclxuICAgIGxldCBwcmV2Um93VmFyaWFudCA9IHJvb3RSb3dzO1xyXG4gICAgbGV0IHZhbHVlc09yZGVycyA9IHt9O1xyXG4gICAgd2hpbGUgKGN1cnJlbnRDb2x1bW5WYXJpYW50IHx8IGN1cnJlbnRSb3dWYXJpYW50KSB7XHJcbiAgICAgICAgY3VycmVudENvbHVtbkJvcmRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRDb2x1bW5Cb3JkZXJzKSwgeyB4TWluOiB0cnVlLCB5RnJvbTogY29sdW1uc0JvcmRlcnNZRnJvbSwgeEZyb206ICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LngpIHx8IDApICsgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQud2lkdGgpIHx8IDApIH0pO1xyXG4gICAgICAgIGN1cnJlbnRSb3dCb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Um93Qm9yZGVycyksIHsgeU1pbjogdHJ1ZSwgeEZyb206IHJvd3NCb3JkZXJzWEZyb20sIHlGcm9tOiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSB8fCAwKSArICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LmhlaWdodCkgfHwgMCkgfSk7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnN0IHsga2V5czogY29sdW1uUHJvcGVydGllcywgdmFsdWVzOiBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdENvbHVtbnMsIGN1cnJlbnRDb2x1bW5WYXJpYW50KTtcclxuICAgICAgICBjb25zdCB7IGtleXM6IHJvd3NQcm9wZXJ0aWVzLCB2YWx1ZXM6IHJvd1Byb3BlcnRpZXNWYWx1ZXMsIH0gPSBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJhdG9yLCByb290Um93cywgY3VycmVudFJvd1ZhcmlhbnQpO1xyXG4gICAgICAgIHNvcnREaXJlY3Rpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpbGxEaXJlY3Rpb25zKHJvd3NQcm9wZXJ0aWVzLCBcIlJPV1NcIikpLCBmaWxsRGlyZWN0aW9ucyhjb2x1bW5Qcm9wZXJ0aWVzLCBcIkNPTFVNTlNcIikpLCBzb3J0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiByb3dzUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoISgoX2EgPSByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghKChfYiA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSB8fFxyXG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0gfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHJvd1Byb3BlcnR5IG9mIHJvd3NQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2Fwc1tyb3dQcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgIGdhcHNbcm93UHJvcGVydHldID0gZmluZFJvd0dhcChwcmV2Um93VmFyaWFudCwgY3VycmVudFJvd1ZhcmlhbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtblByb3BlcnR5IG9mIGNvbHVtblByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFnYXBzW2NvbHVtblByb3BlcnR5XSkge1xyXG4gICAgICAgICAgICAgICAgZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0gPSBmaW5kQ29sdW1uR2FwKHByZXZDb2x1bW5WYXJpYW50LCBjdXJyZW50Q29sdW1uVmFyaWFudCwgdmFyaWFudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb2x1bW5WYXJpYW50ID0gY3VycmVudENvbHVtblZhcmlhbnQ7XHJcbiAgICAgICAgcHJldlJvd1ZhcmlhbnQgPSBjdXJyZW50Um93VmFyaWFudDtcclxuICAgICAgICBpZiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54KSA8IGdhcHNbUk9XU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbUk9XU19HQVBfRklFTERdID0gY3VycmVudENvbHVtblZhcmlhbnQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueCkgPCBnYXBzW1JPV1NfR0FQX0ZJRUxEXSkge1xyXG4gICAgICAgICAgICBnYXBzW1JPV1NfR0FQX0ZJRUxEXSA9IGN1cnJlbnRSb3dWYXJpYW50Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LnkpIDwgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0pIHtcclxuICAgICAgICAgICAgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0gPSBjdXJyZW50Q29sdW1uVmFyaWFudC55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSA8IGdhcHNbQ09MVU1OU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbQ09MVU1OU19HQVBfRklFTERdID0gY3VycmVudFJvd1ZhcmlhbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudENvbHVtblZhcmlhbnQgPSBjdXJyZW50Q29sdW1uVmFyaWFudCAmJiBuZXh0KGN1cnJlbnRDb2x1bW5Cb3JkZXJzKTtcclxuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgIGlmICghc29ydERpcmVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5XSA9IFwiUk9XU1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzT3JkZXJzLFxyXG4gICAgICAgIGRpcmVjdGlvbnM6IHNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgIGdhcHNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MVU1OU19HQVBfRklFTEQsIFJPV1NfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmluZEFsbFZhcmlhbnRzQnlQcm9wZXJ0eVZhbHVlLCBmaW5kVmFyaWFudEJ5UHJvcGVydHlWYWx1ZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VmFyaWFudHMocGFyZW50VmFyaWFudCwgdmFyaWFudHMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHJldmVyc2VkUHJvcGVydGllcyA9IHByb3BlcnRpZXMucmV2ZXJzZSgpO1xyXG4gICAgbGV0IHJvd3MgPSBbXTtcclxuICAgIGxldCByb3dzR2FwcyA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXksIHZhbHVlczogcHJvcGVydHlWYWx1ZXMgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSByb3dzR2FwcztcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJvd3NHYXBzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbmVzdGVkSW5kZXggPSAwOyBuZXN0ZWRJbmRleCA8IG5lc3RlZFByb3BlcnR5VmFsdWVzLmxlbmd0aDsgbmVzdGVkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlc1t2YWx1ZUluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRJbmRleCA9PT0gbmVzdGVkUHJvcGVydHlWYWx1ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c0dhcHMucHVzaChnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uc0dhcHMgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKCkgPT4gZ2Fwc1twcm9wZXJ0eUtleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkUHJvcGVydHlWYWx1ZXMgPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkUHJvcGVydHlHYXBzID0gY29sdW1uc0dhcHM7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zID0gW107XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZXNbdmFsdWVJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIC4uLm5lc3RlZFByb3BlcnR5VmFsdWVzW25lc3RlZEluZGV4XV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmVzdGVkSW5kZXggPT09IG5lc3RlZFByb3BlcnR5VmFsdWVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzLnB1c2goZ2Fwc1twcm9wZXJ0eUtleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uc0dhcHMucHVzaChuZXN0ZWRQcm9wZXJ0eUdhcHNbbmVzdGVkSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvbHVtbnNWYXJpYW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNvbHVtbnMubGVuZ3RoOyBjb2x1bW5JbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudHMgPSBmaW5kQWxsVmFyaWFudHNCeVByb3BlcnR5VmFsdWUodmFyaWFudHMsIGNvbHVtbik7XHJcbiAgICAgICAgbGV0IG1heENvbHVtbldpZHRoID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgY29sdW1uVmFyaWFudHMpIHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQud2lkdGggPiBtYXhDb2x1bW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbHVtbnNWYXJpYW50cy5wdXNoKHtcclxuICAgICAgICAgICAgdmFyaWFudHM6IGNvbHVtblZhcmlhbnRzLFxyXG4gICAgICAgICAgICBtYXhDb2x1bW5XaWR0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHhDb29yZCA9IGdhcHNbUk9XU19HQVBfRklFTERdO1xyXG4gICAgbGV0IHlDb29yZCA9IGdhcHNbQ09MVU1OU19HQVBfRklFTERdO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IG1heFJvd0hlaWdodCA9IDA7XHJcbiAgICAgICAgbGV0IGlzRW1wdHlSb3cgPSB0cnVlO1xyXG4gICAgICAgIHhDb29yZCA9IGdhcHNbUk9XU19HQVBfRklFTERdO1xyXG4gICAgICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudHMgPSBjb2x1bW5zVmFyaWFudHNbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uVmFyaWFudHMudmFyaWFudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudCA9IGZpbmRWYXJpYW50QnlQcm9wZXJ0eVZhbHVlKGNvbHVtblZhcmlhbnRzLnZhcmlhbnRzLCByb3cpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5Um93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhbnQuaGVpZ2h0ID4gbWF4Um93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd0hlaWdodCA9IHZhcmlhbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnggPSB4Q29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudC55ID0geUNvb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeENvb3JkICs9IGNvbHVtblZhcmlhbnRzLm1heENvbHVtbldpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uc0dhcHNbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNFbXB0eVJvdykge1xyXG4gICAgICAgICAgICB5Q29vcmQgKz0gbWF4Um93SGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAocm93SW5kZXggIT09IHJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgeUNvb3JkICs9IHJvd3NHYXBzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhcmVudFZhcmlhbnQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKHhDb29yZCArIGdhcHNbUk9XU19HQVBfRklFTERdLCB5Q29vcmQgKyBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXSk7XHJcbn1cclxuO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZmluZFJvd0dhcChwcmV2VmFyaWFudCwgdmFyaWFudCwgdmFyaWFudHMpIHtcclxuICAgIGxldCBnYXAgPSB2YXJpYW50LnkgLSBwcmV2VmFyaWFudC55IC0gcHJldlZhcmlhbnQuaGVpZ2h0O1xyXG4gICAgbGV0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogdmFyaWFudC55IC0gMVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xyXG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcclxuICAgIHdoaWxlIChyb290KSB7XHJcbiAgICAgICAgY29uc3QgbmV3R2FwID0gdmFyaWFudC55IC0gcm9vdC55IC0gcm9vdC5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5ld0dhcCA8IGdhcCkge1xyXG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlcnMgPSB7XHJcbiAgICAgICAgICAgIHhGcm9tOiByb290LnggKyByb290LndpZHRoLFxyXG4gICAgICAgICAgICB5RnJvbTogcHJldlZhcmlhbnQueSxcclxuICAgICAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICAgIHlCZWZvcmU6IHZhcmlhbnQueSAtIGdhcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2FwIDwgMCA/IDAgOiBnYXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2x1bW5HYXAocHJldlZhcmlhbnQsIHZhcmlhbnQsIHZhcmlhbnRzKSB7XHJcbiAgICBsZXQgZ2FwID0gdmFyaWFudC54IC0gcHJldlZhcmlhbnQueCAtIHByZXZWYXJpYW50LndpZHRoO1xyXG4gICAgbGV0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gMSxcclxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xyXG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcclxuICAgIHdoaWxlIChyb290KSB7XHJcbiAgICAgICAgY29uc3QgbmV3R2FwID0gdmFyaWFudC54IC0gcm9vdC54IC0gcm9vdC53aWR0aDtcclxuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XHJcbiAgICAgICAgICAgIGdhcCA9IG5ld0dhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVycyA9IHtcclxuICAgICAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXHJcbiAgICAgICAgICAgIHlGcm9tOiByb290LnkgKyByb290LmhlaWdodCxcclxuICAgICAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gZ2FwLFxyXG4gICAgICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2FwIDwgMCA/IDAgOiBnYXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXh0VmFyaWFudCh2YXJpYW50cykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChib3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgeyB4RnJvbSwgeUZyb20sIHhCZWZvcmUsIHlCZWZvcmUsIHlNYXgsIHlNaW4sIHhNYXgsIHhNaW4gfSA9IGJvcmRlcnM7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHhNaW5WYWx1ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGxldCB5TWluVmFsdWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQueCA+PSB4RnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudC55ID49IHlGcm9tICYmXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnggPD0geEJlZm9yZSAmJlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudC55IDw9IHlCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeE1pbiAmJiB5TWluICYmICh2YXJpYW50LnggKyB2YXJpYW50LnkpIDwgKHhNaW5WYWx1ZSArIHlNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhNaW4gJiYgeU1heCAmJiAodmFyaWFudC54IDwgeE1pblZhbHVlIHx8IHZhcmlhbnQueCA9PT0geE1pblZhbHVlICYmIHZhcmlhbnQueSA+PSB5TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5TWluICYmIHhNYXggJiYgKHZhcmlhbnQueSA8IHlNaW5WYWx1ZSB8fCB2YXJpYW50LnkgPT09IHlNaW5WYWx1ZSAmJiB2YXJpYW50LnggPj0geE1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeE1pbiAmJiAodmFyaWFudC54IDwgeE1pblZhbHVlIHx8IHZhcmlhbnQueCA9PT0geE1pblZhbHVlICYmIHZhcmlhbnQueSA8IHlNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHlNaW4gJiYgKHZhcmlhbnQueSA8IHlNaW5WYWx1ZSB8fCB2YXJpYW50LnkgPT09IHlNaW5WYWx1ZSAmJiB2YXJpYW50LnggPCB4TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YXJpYW50LnggPD0geE1pblZhbHVlICYmIHZhcmlhbnQueSA8PSB5TWluVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFyaWFudDtcclxuICAgICAgICAgICAgICAgICAgICB4TWluVmFsdWUgPSB2YXJpYW50Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgeU1pblZhbHVlID0gdmFyaWFudC55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocm9vdFByb3BlcnRpZXNWYWx1ZXMsIGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXlzOiBbXSwgdmFsdWVzOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocHJvcGVydGllcykpIHtcclxuICAgICAgICAgICAgaWYgKHJvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV0gIT09IGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gW3Jvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHVzaChjdXJyZW50UHJvcGVydGllc1ZhbHVlc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBrZXlzLCB2YWx1ZXMgfTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RQcm9wZXJ0aWVzKGNvbXBhcmVGbiwgcm9vdCwgdmFyaWFudCkge1xyXG4gICAgcmV0dXJuIGNvbXBhcmVGbihyb290LnZhcmlhbnRQcm9wZXJ0aWVzLCB2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQudmFyaWFudFByb3BlcnRpZXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRGlyZWN0aW9ucyhwcm9wZXJ0aWVzLCBkaXJlY3Rpb24pIHtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgoZGlyZWN0aW9ucywgcHJvcGVydHkpID0+IHtcclxuICAgICAgICBkaXJlY3Rpb25zW3Byb3BlcnR5XSA9IGRpcmVjdGlvbjtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9ucztcclxuICAgIH0sIHt9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZFZhcmlhbnRCeVByb3BlcnR5VmFsdWUodmFyaWFudHMsIHByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgIGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xyXG4gICAgICAgIGxldCBpc01hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBrZXksIHZhbHVlIH0gb2YgcHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAodmFyaWFudC52YXJpYW50UHJvcGVydGllc1trZXldICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTWF0Y2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsVmFyaWFudHNCeVByb3BlcnR5VmFsdWUodmFyaWFudHMsIHByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgIGNvbnN0IGZvdW5kVmFyaWFudHMgPSBbXTtcclxuICAgIGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xyXG4gICAgICAgIGxldCBpc01hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgeyBrZXksIHZhbHVlIH0gb2YgcHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAodmFyaWFudC52YXJpYW50UHJvcGVydGllc1trZXldICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTWF0Y2hlZCkge1xyXG4gICAgICAgICAgICBmb3VuZFZhcmlhbnRzLnB1c2godmFyaWFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvdW5kVmFyaWFudHM7XHJcbn1cclxuIiwiaW1wb3J0IHsgc29ydFZhcmlhbnRzIH0gZnJvbSBcIi4vc2VydmljZXMvc29ydGluZ1wiO1xyXG5leHBvcnQgeyBzb3J0VmFyaWFudHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==