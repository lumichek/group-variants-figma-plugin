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
    catch (_) {
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
    const preparedVariants = variants.map((variant) => {
        return {
            x: variant.x,
            y: variant.y,
            width: variant.width,
            height: variant.height,
            variantProperties: Object.assign({}, variant.variantProperties)
        };
    });
    const { directions, gaps, valuesOrders } = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["sortProperties"])(preparedVariants, propertiesMap);
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
    let rowsKeys = [];
    let rowsGaps = [];
    let columns = [];
    let columnsKeys = [];
    let columnsGaps = [];
    let variantsMap = {};
    for (const variant of variants) {
        let variantKey = [];
        let rowVariantKey = [];
        let columnVariantKey = [];
        for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
            const { key: propertyKey } = properties[propertyIndex];
            variantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);
            if (directions[propertyKey] === "ROWS") {
                rowVariantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);
                const rowVariantKeyStr = [...rowVariantKey].reverse().join(', ');
                if (!variantsMap[rowVariantKeyStr]) {
                    variantsMap[rowVariantKeyStr] = [];
                }
                variantsMap[rowVariantKeyStr].push(variant);
            }
            if (directions[propertyKey] === "COLUMNS") {
                columnVariantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);
                const columnVariantKeyStr = [...columnVariantKey].reverse().join(', ');
                if (!variantsMap[columnVariantKeyStr]) {
                    variantsMap[columnVariantKeyStr] = [];
                }
                variantsMap[columnVariantKeyStr].push(variant);
            }
        }
        const rowVariantKeyStr = [...rowVariantKey].reverse().join(', ');
        const columnVariantKeyStr = [...columnVariantKey].reverse().join(', ');
        variantsMap[[rowVariantKeyStr, columnVariantKeyStr].join(', ')] = [variant];
        variantsMap[variantKey.reverse().join(', ')] = [variant];
    }
    for (let propertyIndex = 0; propertyIndex < reversedProperties.length; propertyIndex++) {
        const { key: propertyKey, values: propertyValues } = properties[propertyIndex];
        if (directions[propertyKey] === "ROWS") {
            if (rows.length === 0) {
                rows = propertyValues.map((propertyValue) => ([{
                        key: propertyKey,
                        value: propertyValue
                    }]));
                rowsGaps = propertyValues.map(() => gaps[propertyKey]);
                rowsKeys = rows.map(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"]);
            }
            else {
                const nestedPropertyValues = rows;
                const nestedPropertyGaps = rowsGaps;
                rows = [];
                rowsKeys = [];
                rowsGaps = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        const row = [
                            {
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            },
                            ...nestedPropertyValues[nestedIndex]
                        ];
                        const rowKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"])(row);
                        if (variantsMap[rowKey]) {
                            rows.push(row);
                            rowsKeys.push(rowKey);
                            rowsGaps.push(nestedPropertyGaps[nestedIndex]);
                        }
                    }
                    rowsGaps[rowsGaps.length - 1] = gaps[propertyKey];
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
                columnsKeys = columns.map(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"]);
            }
            else {
                const nestedPropertyValues = columns;
                const nestedPropertyGaps = columnsGaps;
                columns = [];
                columnsKeys = [];
                columnsGaps = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        const column = [
                            {
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            },
                            ...nestedPropertyValues[nestedIndex]
                        ];
                        const columnKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"])(column);
                        if (variantsMap[columnKey]) {
                            columns.push(column);
                            columnsKeys.push(columnKey);
                            columnsGaps.push(nestedPropertyGaps[nestedIndex]);
                        }
                    }
                    columnsGaps[columnsGaps.length - 1] = gaps[propertyKey];
                }
            }
        }
    }
    const columnsMaxWidths = [];
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const columnVariants = variantsMap[columnsKeys[columnIndex]];
        let maxColumnWidth = 0;
        for (const variant of columnVariants) {
            if (variant.width > maxColumnWidth) {
                maxColumnWidth = variant.width;
            }
        }
        columnsMaxWidths[columnIndex] = maxColumnWidth;
    }
    let xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
    let yCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]];
    if (rows.length === 0) {
        rows.push(null);
    }
    if (columns.length === 0) {
        columns.push(null);
    }
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        let maxRowHeight = 0;
        let maxColumnWidth = 0;
        let isEmptyRow = true;
        xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            const row = rows[rowIndex];
            const column = columns[columnIndex];
            const variantKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"])([...(row || []), ...(column || [])]);
            const [variant] = variantsMap[variantKey] || [];
            if (variant) {
                isEmptyRow = false;
                if (variant.height > maxRowHeight) {
                    maxRowHeight = variant.height;
                }
                variant.x = xCoord;
                variant.y = yCoord;
            }
            if (columnsMaxWidths[columnIndex]) {
                xCoord += columnsMaxWidths[columnIndex];
            }
            else {
                if ((variant === null || variant === void 0 ? void 0 : variant.width) > maxColumnWidth) {
                    maxColumnWidth = variant === null || variant === void 0 ? void 0 : variant.width;
                }
            }
            if (columnIndex !== columns.length - 1) {
                xCoord += columnsGaps[columnIndex];
            }
        }
        if (!isEmptyRow) {
            yCoord += maxRowHeight;
            if (rowIndex !== rows.length - 1) {
                yCoord += rowsGaps[rowIndex];
            }
        }
        if (maxColumnWidth > 0) {
            xCoord += maxColumnWidth;
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
/*! exports provided: findRowGap, findColumnGap, findNextVariant, compareProperties, collectProperties, fillDirections, mapPropertiesValuesToStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRowGap", function() { return findRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColumnGap", function() { return findColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNextVariant", function() { return findNextVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProperties", function() { return compareProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectProperties", function() { return collectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillDirections", function() { return fillDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropertiesValuesToStr", function() { return mapPropertiesValuesToStr; });
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
function mapPropertiesValuesToStr(propertiesValues) {
    return propertiesValues.map(({ key, value }) => `${key}=${value}`).join(', ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ087QUFDUCxrQ0FBa0MsYUFBYSxRQUFRLElBQUksR0FBRyxNQUFNO0FBQ3BFOzs7Ozs7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQzFCIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vZmlnbWFDb250cm9sbGVyLnRzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9TRVRfVFlQRSA9ICdDT01QT05FTlRfU0VUJztcclxuZXhwb3J0IGNvbnN0IFBST1BFUlRZX1ZBUklBTlRfVFlQRSA9ICdWQVJJQU5UJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCA9ICdNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9FUlJPUiA9ICdNRVNTQUdFX0VSUk9SJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEID0gJ01FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1ZBUklBTlRTID0gJ01FU1NBR0VfR0VUX1ZBUklBTlRTJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1BST1BFUlRJRVMgPSAnTUVTU0FHRV9HRVRfUFJPUEVSVElFUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TID0gJ01FU1NBR0VfR0VUX0RJUkVDVElPTlMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfR0FQUyA9ICdNRVNTQUdFX0dFVF9HQVBTJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgPSAnTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTID0gJ01FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMnO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9HQVAgPSA0MDtcclxuZXhwb3J0IGNvbnN0IFJPV1NfR0FQX0ZJRUxEID0gJ1JPV1NfR0FQX0ZJRUxEJztcclxuZXhwb3J0IGNvbnN0IENPTFVNTlNfR0FQX0ZJRUxEID0gJ0NPTFVNTlNfR0FQX0ZJRUxEJztcclxuIiwiO1xyXG5leHBvcnQgY29uc3QgUHJvcGVydGllc01hcFR5cGUgPSAnTUFQJztcclxuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNMaXN0VHlwZSA9ICdMSVNUJztcclxuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUywgTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELCBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCwgTUVTU0FHRV9FUlJPUiwgTUVTU0FHRV9HRVRfRElSRUNUSU9OUywgTUVTU0FHRV9HRVRfR0FQUywgTUVTU0FHRV9HRVRfUFJPUEVSVElFUywgTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uLCBnZXRQcm9wZXJ0aWVzSW5mbyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBvblNlbGVjdGlvbkNoYW5nZShwYWdlKSB7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gY2hlY2tTZWxlY3Rpb24ocGFnZSk7XHJcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgc2VsZWN0aW9uOiBbc2VsZWN0ZWROb2RlXSB9ID0gZmlnbWEuY3VycmVudFBhZ2U7XHJcbiAgICBjb25zdCB2YXJpYW50c1BhcmVudCA9IHNlbGVjdGVkTm9kZTtcclxuICAgIGNvbnN0IHZhcmlhbnRzID0gdmFyaWFudHNQYXJlbnQuY2hpbGRyZW47XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2FwcywgdmFsdWVzT3JkZXJzIH0gPSBnZXRQcm9wZXJ0aWVzSW5mbyh2YXJpYW50c1BhcmVudCwgdmFyaWFudHMpO1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNXaXRoVmFsdWVzID0gcHJvcGVydGllcy5tYXAoKHsga2V5LCB2YWx1ZXMgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWVzID0gdmFsdWVzT3JkZXJzW2tleV0gfHwgW107XHJcbiAgICAgICAgICAgIGlmIChjYWxjdWxhdGVkVmFsdWVzLmxlbmd0aCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGN1bGF0ZWRWYWx1ZXMuaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkVmFsdWVzLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjYWxjdWxhdGVkVmFsdWVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkaXJlY3Rpb25zXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX0dBUFMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBnYXBzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9wZXJ0aWVzV2l0aFZhbHVlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNXaXRoVmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2Fwc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9FUlJPUixcclxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTUVTU0FHRV9FUlJPUiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuLi92YXJpYW50c0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gb25Tb3J0TWVzc2FnZShwYWdlLCBwcm9wZXJ0aWVzLCBkaXJlY3Rpb25zLCBnYXBzKSB7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gY2hlY2tTZWxlY3Rpb24ocGFnZSk7XHJcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHNlbGVjdGlvbjogW3NlbGVjdGVkTm9kZV0gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xyXG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzb3J0VmFyaWFudHModmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzLCBwcm9wZXJ0aWVzLCB7IGRpcmVjdGlvbnMsIGdhcHMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfRVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnRpZXNMaXN0VHlwZSwgUHJvcGVydGllc01hcFR5cGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQgeyBmZXRjaFByb3BlcnRpZXMsIHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vcHJvcGVydGllc0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBDT01QT05FTlRfU0VUX1RZUEUgfSBmcm9tICcuLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZWxlY3Rpb24ocGFnZSkge1xyXG4gICAgY29uc3QgeyBzZWxlY3Rpb24gfSA9IHBhZ2U7XHJcbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbc2VsZWN0ZWROb2RlXSA9IHNlbGVjdGlvbjtcclxuICAgIGlmIChzZWxlY3RlZE5vZGUudHlwZSAhPT0gQ09NUE9ORU5UX1NFVF9UWVBFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkTm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnRpZXNJbmZvKGNvbXBvbmVudFNldCwgdmFyaWFudHMpIHtcclxuICAgIGNvbnN0IFtyb290XSA9IHZhcmlhbnRzO1xyXG4gICAgY29uc3QgcHJvcGVydGllc0xpc3QgPSBmZXRjaFByb3BlcnRpZXMoY29tcG9uZW50U2V0LCBQcm9wZXJ0aWVzTGlzdFR5cGUpO1xyXG4gICAgY29uc3QgcHJvcGVydGllc01hcCA9IGZldGNoUHJvcGVydGllcyhjb21wb25lbnRTZXQsIFByb3BlcnRpZXNNYXBUeXBlKTtcclxuICAgIGNvbnN0IHByZXBhcmVkVmFyaWFudHMgPSB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2YXJpYW50LngsXHJcbiAgICAgICAgICAgIHk6IHZhcmlhbnQueSxcclxuICAgICAgICAgICAgd2lkdGg6IHZhcmlhbnQud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyaWFudC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHZhcmlhbnRQcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHt9LCB2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcywgdmFsdWVzT3JkZXJzIH0gPSBzb3J0UHJvcGVydGllcyhwcmVwYXJlZFZhcmlhbnRzLCBwcm9wZXJ0aWVzTWFwKTtcclxuICAgIGNvbnN0IHsgbmFtZTogcHJvcGVydGllc1N0cmluZyB9ID0gcm9vdDtcclxuICAgIGNvbnN0IHByb3BlcnRpZXNPcmRlcnMgPSBwcm9wZXJ0aWVzU3RyaW5nLnNwbGl0KCcsICcpO1xyXG4gICAgbGV0IHByb3BlcnRpZXNMaXN0U29ydGVkID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5RGF0YSBvZiBwcm9wZXJ0aWVzT3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgW3Byb3BlcnR5S2V5XSA9IHByb3BlcnR5RGF0YS5zcGxpdCgnPScpO1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkLnB1c2gocHJvcGVydGllc0xpc3QuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBwcm9wZXJ0eUtleSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BlcnRpZXNMaXN0U29ydGVkLmxlbmd0aCA8IHByb3BlcnRpZXNMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkID0gcHJvcGVydGllc0xpc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNMaXN0U29ydGVkLFxyXG4gICAgICAgIGRpcmVjdGlvbnMsXHJcbiAgICAgICAgZ2FwcyxcclxuICAgICAgICB2YWx1ZXNPcmRlcnNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL29uU2VsZWN0aW9uSGFuZGxlcic7XHJcbmltcG9ydCB7IG9uU29ydE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNvcnRNZXNzYWdlSGFuZGxlcic7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDY2NSB9KTtcclxuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcclxuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgIChBcnJheS5pc0FycmF5KG1zZykgPyBtc2cgOiBbbXNnXSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZC5wcm9wZXJ0aWVzLCBpdGVtLnBheWxvYWQuZGlyZWN0aW9ucywgaXRlbS5wYXlsb2FkLmdhcHMpO1xyXG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xyXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoaXRlbSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmZpZ21hLm9uKCdydW4nLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQucHJvcGVydGllcywgaXRlbS5wYXlsb2FkLmRpcmVjdGlvbnMsIGl0ZW0ucGF5bG9hZC5nYXBzKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgbXNnLnBheWxvYWQucHJvcGVydGllcywgbXNnLnBheWxvYWQuZGlyZWN0aW9ucywgbXNnLnBheWxvYWQuZ2Fwcyk7XHJcbiAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcclxuaW1wb3J0IHsgZXh0cmFjdFByb3BlcnRpZXNGcm9tQ29tcG9uZW50IGFzIGZldGNoUHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb3BlcnRpZXNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIGZldGNoUHJvcGVydGllcyB9O1xyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXBQcm9wZXJ0aWVzLCBtYXBQcm9wZXJ0aWVzVG9MaXN0IH0gZnJvbSBcIi4vbWFwcGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCB0eXBlKSB7XHJcbiAgICBjb25zdCByYXdQcm9wZXJ0aWVzID0gY29tcG9uZW50LmNvbXBvbmVudFByb3BlcnR5RGVmaW5pdGlvbnM7XHJcbiAgICBpZiAodHlwZSA9PT0gUHJvcGVydGllc0xpc3RUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwUHJvcGVydGllcyhyYXdQcm9wZXJ0aWVzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJhd1Byb3BlcnRpZXMpLnJlZHVjZSgoYWNjLCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcclxuICAgICAgICAgICAgYWNjW3Byb3BlcnR5S2V5XSA9IHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnZhcmlhbnRPcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvcGVydGllc1RvTGlzdChyYXdQcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnR5cGUgPT09IFBST1BFUlRZX1ZBUklBTlRfVFlQRSkge1xyXG4gICAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgc29ydFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zb3J0UHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zb3J0VmFyaWFudHNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIHNvcnRWYXJpYW50cyB9O1xyXG4iLCJpbXBvcnQgeyBST1dTX0dBUF9GSUVMRCwgQ09MVU1OU19HQVBfRklFTEQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjb2xsZWN0UHJvcGVydGllcywgY29tcGFyZVByb3BlcnRpZXMsIGZpbGxEaXJlY3Rpb25zLCBmaW5kQ29sdW1uR2FwLCBmaW5kTmV4dFZhcmlhbnQsIGZpbmRSb3dHYXAgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydFByb3BlcnRpZXModmFyaWFudHMsIHByb3BlcnRpZXMpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBsZXQgc29ydERpcmVjdGlvbnMgPSB7fTtcclxuICAgIGNvbnN0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcclxuICAgIGNvbnN0IHJvb3RDb2x1bW5zID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeE1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdENvbHVtbnMgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5QmVmb3JlOiByb290Q29sdW1ucy55IC0gMSxcclxuICAgICAgICB4TWluOiB0cnVlLFxyXG4gICAgICAgIHlNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29sdW1uc0JvcmRlcnNZRnJvbSA9IHByZXZSb290Q29sdW1ucyA/IChwcmV2Um9vdENvbHVtbnMueSArIHByZXZSb290Q29sdW1ucy5oZWlnaHQpIDogMDtcclxuICAgIGNvbnN0IHJvb3RSb3dzID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeU1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdFJvd3MgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiByb290Um93cy54IC0gMSxcclxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5TWluOiB0cnVlLFxyXG4gICAgICAgIHhNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgcm93c0JvcmRlcnNYRnJvbSA9IHByZXZSb290Um93cyA/IChwcmV2Um9vdFJvd3MueCArIHByZXZSb290Um93cy53aWR0aCkgOiAwO1xyXG4gICAgY29uc3QgZ2FwcyA9IHtcclxuICAgICAgICBbUk9XU19HQVBfRklFTERdOiByb290Um93cy54LFxyXG4gICAgICAgIFtDT0xVTU5TX0dBUF9GSUVMRF06IHJvb3RDb2x1bW5zLnlcclxuICAgIH07XHJcbiAgICBsZXQgY3VycmVudENvbHVtbkJvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRDb2x1bW5WYXJpYW50ID0gcm9vdENvbHVtbnM7XHJcbiAgICBsZXQgY3VycmVudFJvd0JvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRSb3dWYXJpYW50ID0gcm9vdFJvd3M7XHJcbiAgICBsZXQgcHJldkNvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcclxuICAgIGxldCBwcmV2Um93VmFyaWFudCA9IHJvb3RSb3dzO1xyXG4gICAgbGV0IHZhbHVlc09yZGVycyA9IHt9O1xyXG4gICAgd2hpbGUgKGN1cnJlbnRDb2x1bW5WYXJpYW50IHx8IGN1cnJlbnRSb3dWYXJpYW50KSB7XHJcbiAgICAgICAgY3VycmVudENvbHVtbkJvcmRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRDb2x1bW5Cb3JkZXJzKSwgeyB4TWluOiB0cnVlLCB5RnJvbTogY29sdW1uc0JvcmRlcnNZRnJvbSwgeEZyb206ICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LngpIHx8IDApICsgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQud2lkdGgpIHx8IDApIH0pO1xyXG4gICAgICAgIGN1cnJlbnRSb3dCb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Um93Qm9yZGVycyksIHsgeU1pbjogdHJ1ZSwgeEZyb206IHJvd3NCb3JkZXJzWEZyb20sIHlGcm9tOiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSB8fCAwKSArICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LmhlaWdodCkgfHwgMCkgfSk7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnN0IHsga2V5czogY29sdW1uUHJvcGVydGllcywgdmFsdWVzOiBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdENvbHVtbnMsIGN1cnJlbnRDb2x1bW5WYXJpYW50KTtcclxuICAgICAgICBjb25zdCB7IGtleXM6IHJvd3NQcm9wZXJ0aWVzLCB2YWx1ZXM6IHJvd1Byb3BlcnRpZXNWYWx1ZXMsIH0gPSBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJhdG9yLCByb290Um93cywgY3VycmVudFJvd1ZhcmlhbnQpO1xyXG4gICAgICAgIHNvcnREaXJlY3Rpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpbGxEaXJlY3Rpb25zKHJvd3NQcm9wZXJ0aWVzLCBcIlJPV1NcIikpLCBmaWxsRGlyZWN0aW9ucyhjb2x1bW5Qcm9wZXJ0aWVzLCBcIkNPTFVNTlNcIikpLCBzb3J0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiByb3dzUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoISgoX2EgPSByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghKChfYiA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSB8fFxyXG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0gfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHJvd1Byb3BlcnR5IG9mIHJvd3NQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2Fwc1tyb3dQcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgIGdhcHNbcm93UHJvcGVydHldID0gZmluZFJvd0dhcChwcmV2Um93VmFyaWFudCwgY3VycmVudFJvd1ZhcmlhbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtblByb3BlcnR5IG9mIGNvbHVtblByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFnYXBzW2NvbHVtblByb3BlcnR5XSkge1xyXG4gICAgICAgICAgICAgICAgZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0gPSBmaW5kQ29sdW1uR2FwKHByZXZDb2x1bW5WYXJpYW50LCBjdXJyZW50Q29sdW1uVmFyaWFudCwgdmFyaWFudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb2x1bW5WYXJpYW50ID0gY3VycmVudENvbHVtblZhcmlhbnQ7XHJcbiAgICAgICAgcHJldlJvd1ZhcmlhbnQgPSBjdXJyZW50Um93VmFyaWFudDtcclxuICAgICAgICBpZiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54KSA8IGdhcHNbUk9XU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbUk9XU19HQVBfRklFTERdID0gY3VycmVudENvbHVtblZhcmlhbnQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueCkgPCBnYXBzW1JPV1NfR0FQX0ZJRUxEXSkge1xyXG4gICAgICAgICAgICBnYXBzW1JPV1NfR0FQX0ZJRUxEXSA9IGN1cnJlbnRSb3dWYXJpYW50Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LnkpIDwgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0pIHtcclxuICAgICAgICAgICAgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0gPSBjdXJyZW50Q29sdW1uVmFyaWFudC55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSA8IGdhcHNbQ09MVU1OU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbQ09MVU1OU19HQVBfRklFTERdID0gY3VycmVudFJvd1ZhcmlhbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudENvbHVtblZhcmlhbnQgPSBjdXJyZW50Q29sdW1uVmFyaWFudCAmJiBuZXh0KGN1cnJlbnRDb2x1bW5Cb3JkZXJzKTtcclxuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgIGlmICghc29ydERpcmVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5XSA9IFwiUk9XU1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzT3JkZXJzLFxyXG4gICAgICAgIGRpcmVjdGlvbnM6IHNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgIGdhcHNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MVU1OU19HQVBfRklFTEQsIFJPV1NfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRWYXJpYW50cyhwYXJlbnRWYXJpYW50LCB2YXJpYW50cywgcHJvcGVydGllcywgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkaXJlY3Rpb25zLCBnYXBzIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgcmV2ZXJzZWRQcm9wZXJ0aWVzID0gcHJvcGVydGllcy5yZXZlcnNlKCk7XHJcbiAgICBsZXQgcm93cyA9IFtdO1xyXG4gICAgbGV0IHJvd3NLZXlzID0gW107XHJcbiAgICBsZXQgcm93c0dhcHMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zID0gW107XHJcbiAgICBsZXQgY29sdW1uc0tleXMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgbGV0IHZhcmlhbnRzTWFwID0ge307XHJcbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcclxuICAgICAgICBsZXQgdmFyaWFudEtleSA9IFtdO1xyXG4gICAgICAgIGxldCByb3dWYXJpYW50S2V5ID0gW107XHJcbiAgICAgICAgbGV0IGNvbHVtblZhcmlhbnRLZXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eUluZGV4ID0gMDsgcHJvcGVydHlJbmRleCA8IHByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5IH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xyXG4gICAgICAgICAgICB2YXJpYW50S2V5LnB1c2goYCR7cHJvcGVydHlLZXl9PSR7dmFyaWFudC52YXJpYW50UHJvcGVydGllc1twcm9wZXJ0eUtleV19YCk7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJST1dTXCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd1ZhcmlhbnRLZXkucHVzaChgJHtwcm9wZXJ0eUtleX09JHt2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1ZhcmlhbnRLZXlTdHIgPSBbLi4ucm93VmFyaWFudEtleV0ucmV2ZXJzZSgpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhbnRzTWFwW3Jvd1ZhcmlhbnRLZXlTdHJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW3Jvd1ZhcmlhbnRLZXlTdHJdLnB1c2godmFyaWFudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50c01hcFtjb2x1bW5WYXJpYW50S2V5U3RyXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0ucHVzaCh2YXJpYW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3dWYXJpYW50S2V5U3RyID0gWy4uLnJvd1ZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblZhcmlhbnRLZXlTdHIgPSBbLi4uY29sdW1uVmFyaWFudEtleV0ucmV2ZXJzZSgpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgdmFyaWFudHNNYXBbW3Jvd1ZhcmlhbnRLZXlTdHIsIGNvbHVtblZhcmlhbnRLZXlTdHJdLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xyXG4gICAgICAgIHZhcmlhbnRzTWFwW3ZhcmlhbnRLZXkucmV2ZXJzZSgpLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXksIHZhbHVlczogcHJvcGVydHlWYWx1ZXMgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgICAgICByb3dzS2V5cyA9IHJvd3MubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSByb3dzR2FwcztcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJvd3NLZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVzW3ZhbHVlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0tleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbcm93S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzS2V5cy5wdXNoKHJvd0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NHYXBzW3Jvd3NHYXBzLmxlbmd0aCAtIDFdID0gZ2Fwc1twcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiQ09MVU1OU1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IHByb3BlcnR5VmFsdWVzLm1hcCgocHJvcGVydHlWYWx1ZSkgPT4gW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cyA9IGNvbHVtbnMubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSBjb2x1bW5zR2FwcztcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVzW3ZhbHVlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbktleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihjb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbY29sdW1uS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cy5wdXNoKGNvbHVtbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzW2NvbHVtbnNHYXBzLmxlbmd0aCAtIDFdID0gZ2Fwc1twcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2x1bW5zTWF4V2lkdGhzID0gW107XHJcbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5WYXJpYW50cyA9IHZhcmlhbnRzTWFwW2NvbHVtbnNLZXlzW2NvbHVtbkluZGV4XV07XHJcbiAgICAgICAgbGV0IG1heENvbHVtbldpZHRoID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgY29sdW1uVmFyaWFudHMpIHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQud2lkdGggPiBtYXhDb2x1bW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdID0gbWF4Q29sdW1uV2lkdGg7XHJcbiAgICB9XHJcbiAgICBsZXQgeENvb3JkID0gZ2Fwc1tST1dTX0dBUF9GSUVMRF07XHJcbiAgICBsZXQgeUNvb3JkID0gZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF07XHJcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByb3dzLnB1c2gobnVsbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb2x1bW5zLnB1c2gobnVsbCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93cy5sZW5ndGg7IHJvd0luZGV4KyspIHtcclxuICAgICAgICBsZXQgbWF4Um93SGVpZ2h0ID0gMDtcclxuICAgICAgICBsZXQgbWF4Q29sdW1uV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBpc0VtcHR5Um93ID0gdHJ1ZTtcclxuICAgICAgICB4Q29vcmQgPSBnYXBzW1JPV1NfR0FQX0ZJRUxEXTtcclxuICAgICAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCB2YXJpYW50S2V5ID0gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKFsuLi4ocm93IHx8IFtdKSwgLi4uKGNvbHVtbiB8fCBbXSldKTtcclxuICAgICAgICAgICAgY29uc3QgW3ZhcmlhbnRdID0gdmFyaWFudHNNYXBbdmFyaWFudEtleV0gfHwgW107XHJcbiAgICAgICAgICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgICAgICAgICBpc0VtcHR5Um93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudC5oZWlnaHQgPiBtYXhSb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSb3dIZWlnaHQgPSB2YXJpYW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQueCA9IHhDb29yZDtcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQueSA9IHlDb29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uc01heFdpZHRoc1tjb2x1bW5JbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIHhDb29yZCArPSBjb2x1bW5zTWF4V2lkdGhzW2NvbHVtbkluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgodmFyaWFudCA9PT0gbnVsbCB8fCB2YXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYW50LndpZHRoKSA+IG1heENvbHVtbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHhDb29yZCArPSBjb2x1bW5zR2Fwc1tjb2x1bW5JbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5Um93KSB7XHJcbiAgICAgICAgICAgIHlDb29yZCArPSBtYXhSb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCAhPT0gcm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB5Q29vcmQgKz0gcm93c0dhcHNbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXhDb2x1bW5XaWR0aCA+IDApIHtcclxuICAgICAgICAgICAgeENvb3JkICs9IG1heENvbHVtbldpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhcmVudFZhcmlhbnQucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKHhDb29yZCArIGdhcHNbUk9XU19HQVBfRklFTERdLCB5Q29vcmQgKyBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXSk7XHJcbn1cclxuO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZmluZFJvd0dhcChwcmV2VmFyaWFudCwgdmFyaWFudCwgdmFyaWFudHMpIHtcclxuICAgIGxldCBnYXAgPSB2YXJpYW50LnkgLSBwcmV2VmFyaWFudC55IC0gcHJldlZhcmlhbnQuaGVpZ2h0O1xyXG4gICAgbGV0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogdmFyaWFudC55IC0gMVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xyXG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcclxuICAgIHdoaWxlIChyb290KSB7XHJcbiAgICAgICAgY29uc3QgbmV3R2FwID0gdmFyaWFudC55IC0gcm9vdC55IC0gcm9vdC5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKG5ld0dhcCA8IGdhcCkge1xyXG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlcnMgPSB7XHJcbiAgICAgICAgICAgIHhGcm9tOiByb290LnggKyByb290LndpZHRoLFxyXG4gICAgICAgICAgICB5RnJvbTogcHJldlZhcmlhbnQueSxcclxuICAgICAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICAgIHlCZWZvcmU6IHZhcmlhbnQueSAtIGdhcFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2FwIDwgMCA/IDAgOiBnYXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2x1bW5HYXAocHJldlZhcmlhbnQsIHZhcmlhbnQsIHZhcmlhbnRzKSB7XHJcbiAgICBsZXQgZ2FwID0gdmFyaWFudC54IC0gcHJldlZhcmlhbnQueCAtIHByZXZWYXJpYW50LndpZHRoO1xyXG4gICAgbGV0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gMSxcclxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xyXG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcclxuICAgIHdoaWxlIChyb290KSB7XHJcbiAgICAgICAgY29uc3QgbmV3R2FwID0gdmFyaWFudC54IC0gcm9vdC54IC0gcm9vdC53aWR0aDtcclxuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XHJcbiAgICAgICAgICAgIGdhcCA9IG5ld0dhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVycyA9IHtcclxuICAgICAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXHJcbiAgICAgICAgICAgIHlGcm9tOiByb290LnkgKyByb290LmhlaWdodCxcclxuICAgICAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gZ2FwLFxyXG4gICAgICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2FwIDwgMCA/IDAgOiBnYXA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXh0VmFyaWFudCh2YXJpYW50cykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChib3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgeyB4RnJvbSwgeUZyb20sIHhCZWZvcmUsIHlCZWZvcmUsIHlNYXgsIHlNaW4sIHhNYXgsIHhNaW4gfSA9IGJvcmRlcnM7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHhNaW5WYWx1ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGxldCB5TWluVmFsdWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQueCA+PSB4RnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudC55ID49IHlGcm9tICYmXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnggPD0geEJlZm9yZSAmJlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudC55IDw9IHlCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeE1pbiAmJiB5TWluICYmICh2YXJpYW50LnggKyB2YXJpYW50LnkpIDwgKHhNaW5WYWx1ZSArIHlNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhNaW4gJiYgeU1heCAmJiAodmFyaWFudC54IDwgeE1pblZhbHVlIHx8IHZhcmlhbnQueCA9PT0geE1pblZhbHVlICYmIHZhcmlhbnQueSA+PSB5TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5TWluICYmIHhNYXggJiYgKHZhcmlhbnQueSA8IHlNaW5WYWx1ZSB8fCB2YXJpYW50LnkgPT09IHlNaW5WYWx1ZSAmJiB2YXJpYW50LnggPj0geE1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeE1pbiAmJiAodmFyaWFudC54IDwgeE1pblZhbHVlIHx8IHZhcmlhbnQueCA9PT0geE1pblZhbHVlICYmIHZhcmlhbnQueSA8IHlNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHlNaW4gJiYgKHZhcmlhbnQueSA8IHlNaW5WYWx1ZSB8fCB2YXJpYW50LnkgPT09IHlNaW5WYWx1ZSAmJiB2YXJpYW50LnggPCB4TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YXJpYW50LnggPD0geE1pblZhbHVlICYmIHZhcmlhbnQueSA8PSB5TWluVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFyaWFudDtcclxuICAgICAgICAgICAgICAgICAgICB4TWluVmFsdWUgPSB2YXJpYW50Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgeU1pblZhbHVlID0gdmFyaWFudC55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocm9vdFByb3BlcnRpZXNWYWx1ZXMsIGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXlzOiBbXSwgdmFsdWVzOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocHJvcGVydGllcykpIHtcclxuICAgICAgICAgICAgaWYgKHJvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV0gIT09IGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gW3Jvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHVzaChjdXJyZW50UHJvcGVydGllc1ZhbHVlc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBrZXlzLCB2YWx1ZXMgfTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RQcm9wZXJ0aWVzKGNvbXBhcmVGbiwgcm9vdCwgdmFyaWFudCkge1xyXG4gICAgcmV0dXJuIGNvbXBhcmVGbihyb290LnZhcmlhbnRQcm9wZXJ0aWVzLCB2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQudmFyaWFudFByb3BlcnRpZXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRGlyZWN0aW9ucyhwcm9wZXJ0aWVzLCBkaXJlY3Rpb24pIHtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgoZGlyZWN0aW9ucywgcHJvcGVydHkpID0+IHtcclxuICAgICAgICBkaXJlY3Rpb25zW3Byb3BlcnR5XSA9IGRpcmVjdGlvbjtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9ucztcclxuICAgIH0sIHt9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKHByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzVmFsdWVzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IGAke2tleX09JHt2YWx1ZX1gKS5qb2luKCcsICcpO1xyXG59XHJcbiIsImltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcclxuZXhwb3J0IHsgc29ydFZhcmlhbnRzIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=