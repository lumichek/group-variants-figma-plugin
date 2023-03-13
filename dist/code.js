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
/*! exports provided: COMPONENT_SET_TYPE, PROPERTY_VARIANT_TYPE, MESSAGE_COMPONENT_NOT_SELECTED, MESSAGE_ERROR, MESSAGE_COMPONENT_SELECTED, MESSAGE_GET_VARIANTS, MESSAGE_GET_PROPERTIES, MESSAGE_GET_DIRECTIONS, MESSAGE_GET_GAPS, MESSAGE_GET_PROPERTIES_WITH_VALUES, MESSAGE_CHANGE_PROPERTIES, MESSAGE_GET_PADDINGS, DEFAULT_GAP, LEFT, TOP, RIGHT, BOTTOM */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_GET_PADDINGS", function() { return MESSAGE_GET_PADDINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GAP", function() { return DEFAULT_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOTTOM", function() { return BOTTOM; });
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
const MESSAGE_GET_PADDINGS = 'MESSAGE_GET_PADDINGS';
const DEFAULT_GAP = 40;
const LEFT = 'LEFT';
const TOP = 'TOP';
const RIGHT = 'RIGHT';
const BOTTOM = 'BOTTOM';


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
        const { properties, directions, gaps, paddings, valuesOrders } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPropertiesInfo"])(variantsParent, variants);
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
                type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_GET_PADDINGS"],
                payload: paddings
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
                    gaps,
                    paddings
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



function onSortMessage(page, { properties, directions, gaps, paddings }) {
    const isSelected = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkSelection"])(page);
    if (!isSelected) {
        return;
    }
    const { selection: [selectedNode] } = figma.currentPage;
    const variantsParent = selectedNode;
    const variants = variantsParent.children;
    try {
        Object(_variantsController__WEBPACK_IMPORTED_MODULE_1__["sortVariants"])(variantsParent, variants, properties, { directions, gaps, paddings });
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
function getPropertiesInfo(variantsParent, variants) {
    const [root] = variants;
    const propertiesList = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["fetchProperties"])(variantsParent, _common_types__WEBPACK_IMPORTED_MODULE_0__["PropertiesListType"]);
    const propertiesMap = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["fetchProperties"])(variantsParent, _common_types__WEBPACK_IMPORTED_MODULE_0__["PropertiesMapType"]);
    const preparedVariants = variants.map((variant) => {
        return {
            x: variant.x,
            y: variant.y,
            width: variant.width,
            height: variant.height,
            variantProperties: Object.assign({}, variant.variantProperties)
        };
    });
    const { directions, gaps, paddings, valuesOrders } = Object(_propertiesController__WEBPACK_IMPORTED_MODULE_1__["sortProperties"])(preparedVariants, propertiesMap);
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
    const calculatePaddings = Object.assign({}, paddings);
    calculatePaddings.RIGHT = variantsParent.width - calculatePaddings.RIGHT;
    calculatePaddings.BOTTOM = variantsParent.height - calculatePaddings.BOTTOM;
    return {
        properties: propertiesListSorted,
        directions,
        gaps,
        paddings: calculatePaddings,
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
            const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, item.payload);
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
            const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, item.payload);
            if (sortMsg) {
                figma.ui.postMessage(sortMsg);
            }
        }
        figma.ui.postMessage(item);
    });
});
figma.ui.onmessage = (msg) => {
    if (msg.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_CHANGE_PROPERTIES"]) {
        const sortMsg = Object(_events_onSortMessageHandler__WEBPACK_IMPORTED_MODULE_2__["onSortMessage"])(figma.currentPage, msg.payload);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/plugin/services/sorting/utils.ts");

function sortProperties(variants, properties) {
    var _a, _b, _c, _d;
    let sortDirections = {};
    let sortDirectionsColumns = {};
    let sortDirectionsRows = {};
    const borders = {
        xFrom: 0,
        yFrom: 0,
        xBefore: Number.MAX_SAFE_INTEGER,
        yBefore: Number.MAX_SAFE_INTEGER
    };
    const next = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findNextVariant"])(variants);
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
    const gaps = {};
    let paddings = {
        LEFT: rootRows.x,
        RIGHT: rootRows.x + rootRows.width,
        TOP: rootColumns.y,
        BOTTOM: rootColumns.y + rootColumns.height
    };
    let currentColumnBorders = borders;
    let currentColumnVariant = rootColumns;
    let currentRowBorders = borders;
    let currentRowVariant = rootRows;
    let prevColumnVariant = rootColumns;
    let prevRowVariant = rootRows;
    let valuesOrders = {};
    let valuesOrdersColumns = {};
    let valuesOrdersRows = {};
    while (currentColumnVariant || currentRowVariant) {
        currentColumnBorders = Object.assign(Object.assign({}, currentColumnBorders), { xMin: true, yFrom: columnsBordersYFrom, xFrom: ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.x) || 0) + ((currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.width) || 0) });
        currentRowBorders = Object.assign(Object.assign({}, currentRowBorders), { yMin: true, xFrom: rowsBordersXFrom, yFrom: ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.y) || 0) + ((currentRowVariant === null || currentRowVariant === void 0 ? void 0 : currentRowVariant.height) || 0) });
        const comparator = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["compareProperties"])(properties);
        const { keys: columnProperties, values: columnPropertiesValues, } = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["collectProperties"])(comparator, rootColumns, currentColumnVariant);
        const { keys: rowsProperties, values: rowPropertiesValues, } = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["collectProperties"])(comparator, rootRows, currentRowVariant);
        const sortDirectionsColumnsToAdd = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fillDirections"])(columnProperties, "COLUMNS");
        const sortDirectionsRowsToAdd = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fillDirections"])(columnProperties, "ROWS");
        sortDirections = Object.assign(Object.assign(Object.assign({}, sortDirectionsRowsToAdd), sortDirectionsColumnsToAdd), sortDirections);
        sortDirectionsColumns = Object.assign(Object.assign({}, sortDirectionsColumns), sortDirectionsColumnsToAdd);
        sortDirectionsRows = Object.assign(Object.assign({}, sortDirectionsRows), sortDirectionsRowsToAdd);
        for (const propertyKey of rowsProperties) {
            if (!((_a = rowPropertiesValues[propertyKey]) === null || _a === void 0 ? void 0 : _a.length)) {
                continue;
            }
            if (!valuesOrdersRows[propertyKey]) {
                valuesOrdersRows[propertyKey] = [];
            }
            rowPropertiesValues[propertyKey].forEach((val) => {
                if (!valuesOrdersRows[propertyKey].includes(val)) {
                    valuesOrdersRows[propertyKey].push(val);
                }
            });
            if (sortDirections[propertyKey] === "COLUMNS") {
                continue;
            }
            if (!valuesOrders[propertyKey]) {
                valuesOrders[propertyKey] = [];
            }
            rowPropertiesValues[propertyKey].forEach((val) => {
                if (!valuesOrders[propertyKey].includes(val)) {
                    valuesOrders[propertyKey].push(val);
                }
            });
        }
        for (const propertyKey of columnProperties) {
            if (!((_b = columnPropertiesValues[propertyKey]) === null || _b === void 0 ? void 0 : _b.length)) {
                continue;
            }
            if (!valuesOrdersColumns[propertyKey]) {
                valuesOrdersColumns[propertyKey] = [];
            }
            columnPropertiesValues[propertyKey].forEach((val) => {
                if (!valuesOrdersColumns[propertyKey].includes(val)) {
                    valuesOrdersColumns[propertyKey].push(val);
                }
            });
            if (sortDirections[propertyKey] === "ROWS") {
                continue;
            }
            if (!valuesOrders[propertyKey]) {
                valuesOrders[propertyKey] = [];
            }
            columnPropertiesValues[propertyKey].forEach((val) => {
                if (!valuesOrders[propertyKey].includes(val)) {
                    valuesOrders[propertyKey].push(val);
                }
            });
        }
        for (const rowProperty of rowsProperties) {
            if (!gaps[rowProperty]) {
                gaps[rowProperty] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findRowGap"])(prevRowVariant, currentRowVariant, variants);
            }
        }
        for (const columnProperty of columnProperties) {
            if (!gaps[columnProperty]) {
                gaps[columnProperty] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findColumnGap"])(prevColumnVariant, currentColumnVariant, variants);
            }
        }
        prevColumnVariant = currentColumnVariant;
        prevRowVariant = currentRowVariant;
        currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
        currentRowVariant = currentRowVariant && next(currentRowBorders);
    }
    for (const variant of variants) {
        paddings = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findNewPaddings"])(paddings, variant);
    }
    for (const propertyKey of Object.keys(valuesOrders)) {
        if (((_c = valuesOrdersColumns[propertyKey]) === null || _c === void 0 ? void 0 : _c.length) && ((_d = valuesOrdersRows[propertyKey]) === null || _d === void 0 ? void 0 : _d.length)) {
            if (valuesOrdersColumns[propertyKey].length > valuesOrdersRows[propertyKey].length) {
                sortDirections[propertyKey] = "COLUMNS";
                valuesOrders[propertyKey] = valuesOrdersColumns[propertyKey];
            }
            if (valuesOrdersRows[propertyKey].length > valuesOrdersColumns[propertyKey].length) {
                sortDirections[propertyKey] = "ROWS";
                valuesOrders[propertyKey] = valuesOrdersRows[propertyKey];
            }
        }
    }
    for (const property of Object.keys(properties)) {
        if (!sortDirections.hasOwnProperty(property)) {
            sortDirections[property] = "ROWS";
        }
    }
    return {
        valuesOrders,
        directions: sortDirections,
        gaps,
        paddings
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/plugin/services/sorting/utils.ts");

function sortVariants(parentVariant, variants, properties, options) {
    const { directions, gaps, paddings } = options;
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
                rowsKeys = rows.map(_utils__WEBPACK_IMPORTED_MODULE_0__["mapPropertiesValuesToStr"]);
            }
            else {
                const nestedPropertyValues = rows;
                rows = [];
                rowsKeys = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        const row = [
                            {
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            },
                            ...nestedPropertyValues[nestedIndex]
                        ];
                        const rowKey = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mapPropertiesValuesToStr"])(row);
                        if (variantsMap[rowKey]) {
                            rows.push(row);
                            rowsKeys.push(rowKey);
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
                columnsKeys = columns.map(_utils__WEBPACK_IMPORTED_MODULE_0__["mapPropertiesValuesToStr"]);
            }
            else {
                const nestedPropertyValues = columns;
                columns = [];
                columnsKeys = [];
                for (let valueIndex = 0; valueIndex < propertyValues.length; valueIndex++) {
                    for (let nestedIndex = 0; nestedIndex < nestedPropertyValues.length; nestedIndex++) {
                        const column = [
                            {
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            },
                            ...nestedPropertyValues[nestedIndex]
                        ];
                        const columnKey = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mapPropertiesValuesToStr"])(column);
                        if (variantsMap[columnKey]) {
                            columns.push(column);
                            columnsKeys.push(columnKey);
                        }
                    }
                }
            }
        }
    }
    const columnsMaxWidths = [];
    let prevRowValues = null;
    let prevColumnValues = null;
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (prevRowValues) {
            for (let index = 0; index < rows[rowIndex].length; index++) {
                const { key: rowKey, value: rowValue } = rows[rowIndex][index];
                if (prevRowValues[index].key === rowKey && prevRowValues[index].value !== rowValue) {
                    rowsGaps[rowIndex - 1] = gaps[rowKey];
                    break;
                }
            }
        }
        prevRowValues = rows[rowIndex];
    }
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        if (prevColumnValues) {
            for (let index = 0; index < columns[columnIndex].length; index++) {
                const { key: columnKey, value: columnValue } = columns[columnIndex][index];
                if (prevColumnValues[index].key === columnKey && prevColumnValues[index].value !== columnValue) {
                    columnsGaps[columnIndex - 1] = gaps[columnKey];
                    break;
                }
            }
        }
        prevColumnValues = columns[columnIndex];
        const columnVariants = variantsMap[columnsKeys[columnIndex]];
        let maxColumnWidth = 0;
        for (const variant of columnVariants) {
            if (variant.width > maxColumnWidth) {
                maxColumnWidth = variant.width;
            }
        }
        columnsMaxWidths[columnIndex] = maxColumnWidth;
    }
    let xCoord = paddings.LEFT;
    let yCoord = paddings.TOP;
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
        xCoord = paddings.LEFT;
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            const row = rows[rowIndex];
            const column = columns[columnIndex];
            const variantKey = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mapPropertiesValuesToStr"])([...(row || []), ...(column || [])]);
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
    parentVariant.layoutMode = 'NONE';
    parentVariant.resizeWithoutConstraints(xCoord + paddings.RIGHT, yCoord + paddings.BOTTOM);
}
;


/***/ }),

/***/ "./src/plugin/services/sorting/utils.ts":
/*!**********************************************!*\
  !*** ./src/plugin/services/sorting/utils.ts ***!
  \**********************************************/
/*! exports provided: findRowGap, findColumnGap, findNextVariant, compareProperties, collectProperties, fillDirections, mapPropertiesValuesToStr, findNewPaddings */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNewPaddings", function() { return findNewPaddings; });
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
function findNewPaddings(paddings, variant) {
    const newPaddings = Object.assign({}, paddings);
    if (variant.x < paddings.LEFT) {
        newPaddings.LEFT = variant.x;
    }
    if ((variant.x + variant.width) > paddings.RIGHT) {
        newPaddings.RIGHT = variant.x + variant.width;
    }
    if (variant.y < paddings.TOP) {
        newPaddings.TOP = variant.y;
    }
    if ((variant.y + variant.height) > paddings.BOTTOM) {
        newPaddings.BOTTOM = variant.y + variant.height;
    }
    return newPaddings;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLHlEQUF5RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDTztBQUNQLGtDQUFrQyxhQUFhLFFBQVEsSUFBSSxHQUFHLE1BQU07QUFDcEU7QUFDTztBQUNQLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQzFCIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vZmlnbWFDb250cm9sbGVyLnRzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9TRVRfVFlQRSA9ICdDT01QT05FTlRfU0VUJztcbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgPSAnVkFSSUFOVCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEID0gJ01FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9FUlJPUiA9ICdNRVNTQUdFX0VSUk9SJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCA9ICdNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfVkFSSUFOVFMgPSAnTUVTU0FHRV9HRVRfVkFSSUFOVFMnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1BST1BFUlRJRVMgPSAnTUVTU0FHRV9HRVRfUFJPUEVSVElFUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfRElSRUNUSU9OUyA9ICdNRVNTQUdFX0dFVF9ESVJFQ1RJT05TJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9HQVBTID0gJ01FU1NBR0VfR0VUX0dBUFMnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgPSAnTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9QQURESU5HUyA9ICdNRVNTQUdFX0dFVF9QQURESU5HUyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HQVAgPSA0MDtcbmV4cG9ydCBjb25zdCBMRUZUID0gJ0xFRlQnO1xuZXhwb3J0IGNvbnN0IFRPUCA9ICdUT1AnO1xuZXhwb3J0IGNvbnN0IFJJR0hUID0gJ1JJR0hUJztcbmV4cG9ydCBjb25zdCBCT1RUT00gPSAnQk9UVE9NJztcbiIsIjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTWFwVHlwZSA9ICdNQVAnO1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNMaXN0VHlwZSA9ICdMSVNUJztcbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsIE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCwgTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsIE1FU1NBR0VfRVJST1IsIE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsIE1FU1NBR0VfR0VUX0dBUFMsIE1FU1NBR0VfR0VUX1BBRERJTkdTLCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTLCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uLCBnZXRQcm9wZXJ0aWVzSW5mbyB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25TZWxlY3Rpb25DaGFuZ2UocGFnZSkge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBjaGVja1NlbGVjdGlvbihwYWdlKTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCxcbiAgICAgICAgICAgIHBheWxvYWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgc2VsZWN0aW9uOiBbc2VsZWN0ZWROb2RlXSB9ID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XG4gICAgY29uc3QgdmFyaWFudHMgPSB2YXJpYW50c1BhcmVudC5jaGlsZHJlbjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMsIGRpcmVjdGlvbnMsIGdhcHMsIHBhZGRpbmdzLCB2YWx1ZXNPcmRlcnMgfSA9IGdldFByb3BlcnRpZXNJbmZvKHZhcmlhbnRzUGFyZW50LCB2YXJpYW50cyk7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNXaXRoVmFsdWVzID0gcHJvcGVydGllcy5tYXAoKHsga2V5LCB2YWx1ZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlcyA9IHZhbHVlc09yZGVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZXMubGVuZ3RoIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxjdWxhdGVkVmFsdWVzLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRWYWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGNhbGN1bGF0ZWRWYWx1ZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVELFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfUFJPUEVSVElFUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGlyZWN0aW9uc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9HQVBTLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGdhcHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfUEFERElOR1MsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGFkZGluZ3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9wZXJ0aWVzV2l0aFZhbHVlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1dpdGhWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGdhcHMsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cbiAgICBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9FUlJPUixcbiAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNRVNTQUdFX0VSUk9SIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuLi92YXJpYW50c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvblNvcnRNZXNzYWdlKHBhZ2UsIHsgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2FwcywgcGFkZGluZ3MgfSkge1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBjaGVja1NlbGVjdGlvbihwYWdlKTtcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNlbGVjdGlvbjogW3NlbGVjdGVkTm9kZV0gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IHZhcmlhbnRzUGFyZW50ID0gc2VsZWN0ZWROb2RlO1xuICAgIGNvbnN0IHZhcmlhbnRzID0gdmFyaWFudHNQYXJlbnQuY2hpbGRyZW47XG4gICAgdHJ5IHtcbiAgICAgICAgc29ydFZhcmlhbnRzKHZhcmlhbnRzUGFyZW50LCB2YXJpYW50cywgcHJvcGVydGllcywgeyBkaXJlY3Rpb25zLCBnYXBzLCBwYWRkaW5ncyB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnRpZXNMaXN0VHlwZSwgUHJvcGVydGllc01hcFR5cGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hQcm9wZXJ0aWVzLCBzb3J0UHJvcGVydGllcyB9IGZyb20gJy4uL3Byb3BlcnRpZXNDb250cm9sbGVyJztcbmltcG9ydCB7IENPTVBPTkVOVF9TRVRfVFlQRSB9IGZyb20gJy4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZWxlY3Rpb24ocGFnZSkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBwYWdlO1xuICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IFtzZWxlY3RlZE5vZGVdID0gc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3RlZE5vZGUudHlwZSAhPT0gQ09NUE9ORU5UX1NFVF9UWVBFKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkTm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydGllc0luZm8odmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzKSB7XG4gICAgY29uc3QgW3Jvb3RdID0gdmFyaWFudHM7XG4gICAgY29uc3QgcHJvcGVydGllc0xpc3QgPSBmZXRjaFByb3BlcnRpZXModmFyaWFudHNQYXJlbnQsIFByb3BlcnRpZXNMaXN0VHlwZSk7XG4gICAgY29uc3QgcHJvcGVydGllc01hcCA9IGZldGNoUHJvcGVydGllcyh2YXJpYW50c1BhcmVudCwgUHJvcGVydGllc01hcFR5cGUpO1xuICAgIGNvbnN0IHByZXBhcmVkVmFyaWFudHMgPSB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHZhcmlhbnQueCxcbiAgICAgICAgICAgIHk6IHZhcmlhbnQueSxcbiAgICAgICAgICAgIHdpZHRoOiB2YXJpYW50LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB2YXJpYW50LmhlaWdodCxcbiAgICAgICAgICAgIHZhcmlhbnRQcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHt9LCB2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzKVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcywgcGFkZGluZ3MsIHZhbHVlc09yZGVycyB9ID0gc29ydFByb3BlcnRpZXMocHJlcGFyZWRWYXJpYW50cywgcHJvcGVydGllc01hcCk7XG4gICAgY29uc3QgeyBuYW1lOiBwcm9wZXJ0aWVzU3RyaW5nIH0gPSByb290O1xuICAgIGNvbnN0IHByb3BlcnRpZXNPcmRlcnMgPSBwcm9wZXJ0aWVzU3RyaW5nLnNwbGl0KCcsICcpO1xuICAgIGxldCBwcm9wZXJ0aWVzTGlzdFNvcnRlZCA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlEYXRhIG9mIHByb3BlcnRpZXNPcmRlcnMpIHtcbiAgICAgICAgY29uc3QgW3Byb3BlcnR5S2V5XSA9IHByb3BlcnR5RGF0YS5zcGxpdCgnPScpO1xuICAgICAgICBwcm9wZXJ0aWVzTGlzdFNvcnRlZC5wdXNoKHByb3BlcnRpZXNMaXN0LmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gcHJvcGVydHlLZXkpKTtcbiAgICB9XG4gICAgaWYgKHByb3BlcnRpZXNMaXN0U29ydGVkLmxlbmd0aCA8IHByb3BlcnRpZXNMaXN0Lmxlbmd0aCkge1xuICAgICAgICBwcm9wZXJ0aWVzTGlzdFNvcnRlZCA9IHByb3BlcnRpZXNMaXN0O1xuICAgIH1cbiAgICBjb25zdCBjYWxjdWxhdGVQYWRkaW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHBhZGRpbmdzKTtcbiAgICBjYWxjdWxhdGVQYWRkaW5ncy5SSUdIVCA9IHZhcmlhbnRzUGFyZW50LndpZHRoIC0gY2FsY3VsYXRlUGFkZGluZ3MuUklHSFQ7XG4gICAgY2FsY3VsYXRlUGFkZGluZ3MuQk9UVE9NID0gdmFyaWFudHNQYXJlbnQuaGVpZ2h0IC0gY2FsY3VsYXRlUGFkZGluZ3MuQk9UVE9NO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNMaXN0U29ydGVkLFxuICAgICAgICBkaXJlY3Rpb25zLFxuICAgICAgICBnYXBzLFxuICAgICAgICBwYWRkaW5nczogY2FsY3VsYXRlUGFkZGluZ3MsXG4gICAgICAgIHZhbHVlc09yZGVyc1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL29uU2VsZWN0aW9uSGFuZGxlcic7XG5pbXBvcnQgeyBvblNvcnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXInO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNjY1IH0pO1xuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgKEFycmF5LmlzQXJyYXkobXNnKSA/IG1zZyA6IFttc2ddKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQpO1xuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShpdGVtKTtcbiAgICB9KTtcbn0pO1xuZmlnbWEub24oJ3J1bicsICgpID0+IHtcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgKEFycmF5LmlzQXJyYXkobXNnKSA/IG1zZyA6IFttc2ddKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQpO1xuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShpdGVtKTtcbiAgICB9KTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xuICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgbXNnLnBheWxvYWQpO1xuICAgICAgICBpZiAoc29ydE1zZykge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgc29ydFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0aW5nXCI7XG5pbXBvcnQgeyBleHRyYWN0UHJvcGVydGllc0Zyb21Db21wb25lbnQgYXMgZmV0Y2hQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vc2VydmljZXMvcHJvcGVydGllc1wiO1xuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIGZldGNoUHJvcGVydGllcyB9O1xuIiwiaW1wb3J0IHsgUHJvcGVydGllc0xpc3RUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IG1hcFByb3BlcnRpZXMsIG1hcFByb3BlcnRpZXNUb0xpc3QgfSBmcm9tIFwiLi9tYXBwZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCB0eXBlKSB7XG4gICAgY29uc3QgcmF3UHJvcGVydGllcyA9IGNvbXBvbmVudC5jb21wb25lbnRQcm9wZXJ0eURlZmluaXRpb25zO1xuICAgIGlmICh0eXBlID09PSBQcm9wZXJ0aWVzTGlzdFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiBtYXBQcm9wZXJ0aWVzKHJhd1Byb3BlcnRpZXMpO1xufVxuIiwiaW1wb3J0IHsgUFJPUEVSVFlfVkFSSUFOVF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvcGVydGllcyhyYXdQcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJhd1Byb3BlcnRpZXMpLnJlZHVjZSgoYWNjLCBwcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgICBpZiAocmF3UHJvcGVydGllc1twcm9wZXJ0eUtleV0udHlwZSA9PT0gUFJPUEVSVFlfVkFSSUFOVF9UWVBFKSB7XG4gICAgICAgICAgICBhY2NbcHJvcGVydHlLZXldID0gcmF3UHJvcGVydGllc1twcm9wZXJ0eUtleV0udmFyaWFudE9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXBQcm9wZXJ0aWVzVG9MaXN0KHJhd1Byb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlczogcmF3UHJvcGVydGllc1twcm9wZXJ0eUtleV0udmFyaWFudE9wdGlvbnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG59XG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NvcnRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zb3J0VmFyaWFudHNcIjtcbmV4cG9ydCB7IHNvcnRQcm9wZXJ0aWVzLCBzb3J0VmFyaWFudHMgfTtcbiIsImltcG9ydCB7IGNvbGxlY3RQcm9wZXJ0aWVzLCBjb21wYXJlUHJvcGVydGllcywgZmlsbERpcmVjdGlvbnMsIGZpbmRDb2x1bW5HYXAsIGZpbmROZXdQYWRkaW5ncywgZmluZE5leHRWYXJpYW50LCBmaW5kUm93R2FwIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBzb3J0UHJvcGVydGllcyh2YXJpYW50cywgcHJvcGVydGllcykge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBsZXQgc29ydERpcmVjdGlvbnMgPSB7fTtcbiAgICBsZXQgc29ydERpcmVjdGlvbnNDb2x1bW5zID0ge307XG4gICAgbGV0IHNvcnREaXJlY3Rpb25zUm93cyA9IHt9O1xuICAgIGNvbnN0IGJvcmRlcnMgPSB7XG4gICAgICAgIHhGcm9tOiAwLFxuICAgICAgICB5RnJvbTogMCxcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgfTtcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcbiAgICBjb25zdCByb290Q29sdW1ucyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeE1pbjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IHByZXZSb290Q29sdW1ucyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiByb290Q29sdW1ucy55IC0gMSxcbiAgICAgICAgeE1pbjogdHJ1ZSxcbiAgICAgICAgeU1heDogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbHVtbnNCb3JkZXJzWUZyb20gPSBwcmV2Um9vdENvbHVtbnMgPyAocHJldlJvb3RDb2x1bW5zLnkgKyBwcmV2Um9vdENvbHVtbnMuaGVpZ2h0KSA6IDA7XG4gICAgY29uc3Qgcm9vdFJvd3MgPSBuZXh0KHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlNaW46IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBwcmV2Um9vdFJvd3MgPSBuZXh0KHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiByb290Um93cy54IC0gMSxcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlNaW46IHRydWUsXG4gICAgICAgIHhNYXg6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCByb3dzQm9yZGVyc1hGcm9tID0gcHJldlJvb3RSb3dzID8gKHByZXZSb290Um93cy54ICsgcHJldlJvb3RSb3dzLndpZHRoKSA6IDA7XG4gICAgY29uc3QgZ2FwcyA9IHt9O1xuICAgIGxldCBwYWRkaW5ncyA9IHtcbiAgICAgICAgTEVGVDogcm9vdFJvd3MueCxcbiAgICAgICAgUklHSFQ6IHJvb3RSb3dzLnggKyByb290Um93cy53aWR0aCxcbiAgICAgICAgVE9QOiByb290Q29sdW1ucy55LFxuICAgICAgICBCT1RUT006IHJvb3RDb2x1bW5zLnkgKyByb290Q29sdW1ucy5oZWlnaHRcbiAgICB9O1xuICAgIGxldCBjdXJyZW50Q29sdW1uQm9yZGVycyA9IGJvcmRlcnM7XG4gICAgbGV0IGN1cnJlbnRDb2x1bW5WYXJpYW50ID0gcm9vdENvbHVtbnM7XG4gICAgbGV0IGN1cnJlbnRSb3dCb3JkZXJzID0gYm9yZGVycztcbiAgICBsZXQgY3VycmVudFJvd1ZhcmlhbnQgPSByb290Um93cztcbiAgICBsZXQgcHJldkNvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcbiAgICBsZXQgcHJldlJvd1ZhcmlhbnQgPSByb290Um93cztcbiAgICBsZXQgdmFsdWVzT3JkZXJzID0ge307XG4gICAgbGV0IHZhbHVlc09yZGVyc0NvbHVtbnMgPSB7fTtcbiAgICBsZXQgdmFsdWVzT3JkZXJzUm93cyA9IHt9O1xuICAgIHdoaWxlIChjdXJyZW50Q29sdW1uVmFyaWFudCB8fCBjdXJyZW50Um93VmFyaWFudCkge1xuICAgICAgICBjdXJyZW50Q29sdW1uQm9yZGVycyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudENvbHVtbkJvcmRlcnMpLCB7IHhNaW46IHRydWUsIHlGcm9tOiBjb2x1bW5zQm9yZGVyc1lGcm9tLCB4RnJvbTogKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQueCkgfHwgMCkgKyAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC53aWR0aCkgfHwgMCkgfSk7XG4gICAgICAgIGN1cnJlbnRSb3dCb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Um93Qm9yZGVycyksIHsgeU1pbjogdHJ1ZSwgeEZyb206IHJvd3NCb3JkZXJzWEZyb20sIHlGcm9tOiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSB8fCAwKSArICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LmhlaWdodCkgfHwgMCkgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBjb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgY29uc3QgeyBrZXlzOiBjb2x1bW5Qcm9wZXJ0aWVzLCB2YWx1ZXM6IGNvbHVtblByb3BlcnRpZXNWYWx1ZXMsIH0gPSBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJhdG9yLCByb290Q29sdW1ucywgY3VycmVudENvbHVtblZhcmlhbnQpO1xuICAgICAgICBjb25zdCB7IGtleXM6IHJvd3NQcm9wZXJ0aWVzLCB2YWx1ZXM6IHJvd1Byb3BlcnRpZXNWYWx1ZXMsIH0gPSBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJhdG9yLCByb290Um93cywgY3VycmVudFJvd1ZhcmlhbnQpO1xuICAgICAgICBjb25zdCBzb3J0RGlyZWN0aW9uc0NvbHVtbnNUb0FkZCA9IGZpbGxEaXJlY3Rpb25zKGNvbHVtblByb3BlcnRpZXMsIFwiQ09MVU1OU1wiKTtcbiAgICAgICAgY29uc3Qgc29ydERpcmVjdGlvbnNSb3dzVG9BZGQgPSBmaWxsRGlyZWN0aW9ucyhjb2x1bW5Qcm9wZXJ0aWVzLCBcIlJPV1NcIik7XG4gICAgICAgIHNvcnREaXJlY3Rpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNvcnREaXJlY3Rpb25zUm93c1RvQWRkKSwgc29ydERpcmVjdGlvbnNDb2x1bW5zVG9BZGQpLCBzb3J0RGlyZWN0aW9ucyk7XG4gICAgICAgIHNvcnREaXJlY3Rpb25zQ29sdW1ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydERpcmVjdGlvbnNDb2x1bW5zKSwgc29ydERpcmVjdGlvbnNDb2x1bW5zVG9BZGQpO1xuICAgICAgICBzb3J0RGlyZWN0aW9uc1Jvd3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNvcnREaXJlY3Rpb25zUm93cyksIHNvcnREaXJlY3Rpb25zUm93c1RvQWRkKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiByb3dzUHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKCEoKF9hID0gcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1Jvd3NbcHJvcGVydHlLZXldKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzUm93c1twcm9wZXJ0eUtleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzUm93c1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoISgoX2IgPSBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzQ29sdW1uc1twcm9wZXJ0eUtleV0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc0NvbHVtbnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiUk9XU1wiKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHJvd1Byb3BlcnR5IG9mIHJvd3NQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIWdhcHNbcm93UHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgZ2Fwc1tyb3dQcm9wZXJ0eV0gPSBmaW5kUm93R2FwKHByZXZSb3dWYXJpYW50LCBjdXJyZW50Um93VmFyaWFudCwgdmFyaWFudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uUHJvcGVydHkgb2YgY29sdW1uUHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKCFnYXBzW2NvbHVtblByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgIGdhcHNbY29sdW1uUHJvcGVydHldID0gZmluZENvbHVtbkdhcChwcmV2Q29sdW1uVmFyaWFudCwgY3VycmVudENvbHVtblZhcmlhbnQsIHZhcmlhbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Q29sdW1uVmFyaWFudCA9IGN1cnJlbnRDb2x1bW5WYXJpYW50O1xuICAgICAgICBwcmV2Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50O1xuICAgICAgICBjdXJyZW50Q29sdW1uVmFyaWFudCA9IGN1cnJlbnRDb2x1bW5WYXJpYW50ICYmIG5leHQoY3VycmVudENvbHVtbkJvcmRlcnMpO1xuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcbiAgICAgICAgcGFkZGluZ3MgPSBmaW5kTmV3UGFkZGluZ3MocGFkZGluZ3MsIHZhcmlhbnQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5S2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlc09yZGVycykpIHtcbiAgICAgICAgaWYgKCgoX2MgPSB2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmxlbmd0aCkgJiYgKChfZCA9IHZhbHVlc09yZGVyc1Jvd3NbcHJvcGVydHlLZXldKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlc09yZGVyc0NvbHVtbnNbcHJvcGVydHlLZXldLmxlbmd0aCA+IHZhbHVlc09yZGVyc1Jvd3NbcHJvcGVydHlLZXldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9IFwiQ09MVU1OU1wiO1xuICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0gPSB2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XS5sZW5ndGggPiB2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPSBcIlJPV1NcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gdmFsdWVzT3JkZXJzUm93c1twcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xuICAgICAgICBpZiAoIXNvcnREaXJlY3Rpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHldID0gXCJST1dTXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWVzT3JkZXJzLFxuICAgICAgICBkaXJlY3Rpb25zOiBzb3J0RGlyZWN0aW9ucyxcbiAgICAgICAgZ2FwcyxcbiAgICAgICAgcGFkZGluZ3NcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VmFyaWFudHMocGFyZW50VmFyaWFudCwgdmFyaWFudHMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbnMsIGdhcHMsIHBhZGRpbmdzIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHJldmVyc2VkUHJvcGVydGllcyA9IHByb3BlcnRpZXMucmV2ZXJzZSgpO1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHJvd3NLZXlzID0gW107XG4gICAgbGV0IHJvd3NHYXBzID0gW107XG4gICAgbGV0IGNvbHVtbnMgPSBbXTtcbiAgICBsZXQgY29sdW1uc0tleXMgPSBbXTtcbiAgICBsZXQgY29sdW1uc0dhcHMgPSBbXTtcbiAgICBsZXQgdmFyaWFudHNNYXAgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcbiAgICAgICAgbGV0IHZhcmlhbnRLZXkgPSBbXTtcbiAgICAgICAgbGV0IHJvd1ZhcmlhbnRLZXkgPSBbXTtcbiAgICAgICAgbGV0IGNvbHVtblZhcmlhbnRLZXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCBwcm9wZXJ0aWVzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXkgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XG4gICAgICAgICAgICB2YXJpYW50S2V5LnB1c2goYCR7cHJvcGVydHlLZXl9PSR7dmFyaWFudC52YXJpYW50UHJvcGVydGllc1twcm9wZXJ0eUtleV19YCk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiUk9XU1wiKSB7XG4gICAgICAgICAgICAgICAgcm93VmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1ZhcmlhbnRLZXlTdHIgPSBbLi4ucm93VmFyaWFudEtleV0ucmV2ZXJzZSgpLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYW50c01hcFtyb3dWYXJpYW50S2V5U3RyXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXJpYW50c01hcFtyb3dWYXJpYW50S2V5U3RyXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXJpYW50c01hcFtyb3dWYXJpYW50S2V5U3RyXS5wdXNoKHZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xuICAgICAgICAgICAgICAgIGNvbHVtblZhcmlhbnRLZXkucHVzaChgJHtwcm9wZXJ0eUtleX09JHt2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5WYXJpYW50S2V5U3RyID0gWy4uLmNvbHVtblZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIGlmICghdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0ucHVzaCh2YXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3dWYXJpYW50S2V5U3RyID0gWy4uLnJvd1ZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xuICAgICAgICBjb25zdCBjb2x1bW5WYXJpYW50S2V5U3RyID0gWy4uLmNvbHVtblZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xuICAgICAgICB2YXJpYW50c01hcFtbcm93VmFyaWFudEtleVN0ciwgY29sdW1uVmFyaWFudEtleVN0cl0uam9pbignLCAnKV0gPSBbdmFyaWFudF07XG4gICAgICAgIHZhcmlhbnRzTWFwW3ZhcmlhbnRLZXkucmV2ZXJzZSgpLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xuICAgIH1cbiAgICBmb3IgKGxldCBwcm9wZXJ0eUluZGV4ID0gMDsgcHJvcGVydHlJbmRleCA8IHJldmVyc2VkUHJvcGVydGllcy5sZW5ndGg7IHByb3BlcnR5SW5kZXgrKykge1xuICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXksIHZhbHVlczogcHJvcGVydHlWYWx1ZXMgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XG4gICAgICAgIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJST1dTXCIpIHtcbiAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJvd3MgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IChbe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1dKSk7XG4gICAgICAgICAgICAgICAgcm93c0tleXMgPSByb3dzLm1hcChtYXBQcm9wZXJ0aWVzVmFsdWVzVG9TdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkUHJvcGVydHlWYWx1ZXMgPSByb3dzO1xuICAgICAgICAgICAgICAgIHJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICByb3dzS2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHZhbHVlSW5kZXggPSAwOyB2YWx1ZUluZGV4IDwgcHJvcGVydHlWYWx1ZXMubGVuZ3RoOyB2YWx1ZUluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbmVzdGVkSW5kZXggPSAwOyBuZXN0ZWRJbmRleCA8IG5lc3RlZFByb3BlcnR5VmFsdWVzLmxlbmd0aDsgbmVzdGVkSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVzW3ZhbHVlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXN0ZWRQcm9wZXJ0eVZhbHVlc1tuZXN0ZWRJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dLZXkgPSBtYXBQcm9wZXJ0aWVzVmFsdWVzVG9TdHIocm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYW50c01hcFtyb3dLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c0tleXMucHVzaChyb3dLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IHByb3BlcnR5VmFsdWVzLm1hcCgocHJvcGVydHlWYWx1ZSkgPT4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgY29sdW1uc0dhcHMgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKCkgPT4gZ2Fwc1twcm9wZXJ0eUtleV0pO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzID0gY29sdW1ucy5tYXAobWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZFByb3BlcnR5VmFsdWVzID0gY29sdW1ucztcbiAgICAgICAgICAgICAgICBjb2x1bW5zID0gW107XG4gICAgICAgICAgICAgICAgY29sdW1uc0tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uS2V5ID0gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbY29sdW1uS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzLnB1c2goY29sdW1uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb2x1bW5zTWF4V2lkdGhzID0gW107XG4gICAgbGV0IHByZXZSb3dWYWx1ZXMgPSBudWxsO1xuICAgIGxldCBwcmV2Q29sdW1uVmFsdWVzID0gbnVsbDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93cy5sZW5ndGg7IHJvd0luZGV4KyspIHtcbiAgICAgICAgaWYgKHByZXZSb3dWYWx1ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByb3dzW3Jvd0luZGV4XS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleTogcm93S2V5LCB2YWx1ZTogcm93VmFsdWUgfSA9IHJvd3Nbcm93SW5kZXhdW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAocHJldlJvd1ZhbHVlc1tpbmRleF0ua2V5ID09PSByb3dLZXkgJiYgcHJldlJvd1ZhbHVlc1tpbmRleF0udmFsdWUgIT09IHJvd1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3NHYXBzW3Jvd0luZGV4IC0gMV0gPSBnYXBzW3Jvd0tleV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Um93VmFsdWVzID0gcm93c1tyb3dJbmRleF07XG4gICAgfVxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICBpZiAocHJldkNvbHVtblZhbHVlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnNbY29sdW1uSW5kZXhdLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsga2V5OiBjb2x1bW5LZXksIHZhbHVlOiBjb2x1bW5WYWx1ZSB9ID0gY29sdW1uc1tjb2x1bW5JbmRleF1baW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2Q29sdW1uVmFsdWVzW2luZGV4XS5rZXkgPT09IGNvbHVtbktleSAmJiBwcmV2Q29sdW1uVmFsdWVzW2luZGV4XS52YWx1ZSAhPT0gY29sdW1uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc0dhcHNbY29sdW1uSW5kZXggLSAxXSA9IGdhcHNbY29sdW1uS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXZDb2x1bW5WYWx1ZXMgPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudHMgPSB2YXJpYW50c01hcFtjb2x1bW5zS2V5c1tjb2x1bW5JbmRleF1dO1xuICAgICAgICBsZXQgbWF4Q29sdW1uV2lkdGggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgY29sdW1uVmFyaWFudHMpIHtcbiAgICAgICAgICAgIGlmICh2YXJpYW50LndpZHRoID4gbWF4Q29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBtYXhDb2x1bW5XaWR0aCA9IHZhcmlhbnQud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uc01heFdpZHRoc1tjb2x1bW5JbmRleF0gPSBtYXhDb2x1bW5XaWR0aDtcbiAgICB9XG4gICAgbGV0IHhDb29yZCA9IHBhZGRpbmdzLkxFRlQ7XG4gICAgbGV0IHlDb29yZCA9IHBhZGRpbmdzLlRPUDtcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcm93cy5wdXNoKG51bGwpO1xuICAgIH1cbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKG51bGwpO1xuICAgIH1cbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93cy5sZW5ndGg7IHJvd0luZGV4KyspIHtcbiAgICAgICAgbGV0IG1heFJvd0hlaWdodCA9IDA7XG4gICAgICAgIGxldCBtYXhDb2x1bW5XaWR0aCA9IDA7XG4gICAgICAgIGxldCBpc0VtcHR5Um93ID0gdHJ1ZTtcbiAgICAgICAgeENvb3JkID0gcGFkZGluZ3MuTEVGVDtcbiAgICAgICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNvbHVtbnMubGVuZ3RoOyBjb2x1bW5JbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFudEtleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihbLi4uKHJvdyB8fCBbXSksIC4uLihjb2x1bW4gfHwgW10pXSk7XG4gICAgICAgICAgICBjb25zdCBbdmFyaWFudF0gPSB2YXJpYW50c01hcFt2YXJpYW50S2V5XSB8fCBbXTtcbiAgICAgICAgICAgIGlmICh2YXJpYW50KSB7XG4gICAgICAgICAgICAgICAgaXNFbXB0eVJvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50LmhlaWdodCA+IG1heFJvd0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhSb3dIZWlnaHQgPSB2YXJpYW50LmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudC54ID0geENvb3JkO1xuICAgICAgICAgICAgICAgIHZhcmlhbnQueSA9IHlDb29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2x1bW5zTWF4V2lkdGhzW2NvbHVtbkluZGV4XSkge1xuICAgICAgICAgICAgICAgIHhDb29yZCArPSBjb2x1bW5zTWF4V2lkdGhzW2NvbHVtbkluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgodmFyaWFudCA9PT0gbnVsbCB8fCB2YXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYW50LndpZHRoKSA+IG1heENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heENvbHVtbldpZHRoID0gdmFyaWFudCA9PT0gbnVsbCB8fCB2YXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYW50LndpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgeENvb3JkICs9IGNvbHVtbnNHYXBzW2NvbHVtbkluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW1wdHlSb3cpIHtcbiAgICAgICAgICAgIHlDb29yZCArPSBtYXhSb3dIZWlnaHQ7XG4gICAgICAgICAgICBpZiAocm93SW5kZXggIT09IHJvd3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHlDb29yZCArPSByb3dzR2Fwc1tyb3dJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heENvbHVtbldpZHRoID4gMCkge1xuICAgICAgICAgICAgeENvb3JkICs9IG1heENvbHVtbldpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmVudFZhcmlhbnQubGF5b3V0TW9kZSA9ICdOT05FJztcbiAgICBwYXJlbnRWYXJpYW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyh4Q29vcmQgKyBwYWRkaW5ncy5SSUdIVCwgeUNvb3JkICsgcGFkZGluZ3MuQk9UVE9NKTtcbn1cbjtcbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5kUm93R2FwKHByZXZWYXJpYW50LCB2YXJpYW50LCB2YXJpYW50cykge1xuICAgIGxldCBnYXAgPSB2YXJpYW50LnkgLSBwcmV2VmFyaWFudC55IC0gcHJldlZhcmlhbnQuaGVpZ2h0O1xuICAgIGxldCBib3JkZXJzID0ge1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiB2YXJpYW50LnkgLSAxXG4gICAgfTtcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcbiAgICBsZXQgcm9vdCA9IHByZXZWYXJpYW50O1xuICAgIHdoaWxlIChyb290KSB7XG4gICAgICAgIGNvbnN0IG5ld0dhcCA9IHZhcmlhbnQueSAtIHJvb3QueSAtIHJvb3QuaGVpZ2h0O1xuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVycyA9IHtcbiAgICAgICAgICAgIHhGcm9tOiByb290LnggKyByb290LndpZHRoLFxuICAgICAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXG4gICAgICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIHlCZWZvcmU6IHZhcmlhbnQueSAtIGdhcFxuICAgICAgICB9O1xuICAgICAgICByb290ID0gbmV4dChib3JkZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIGdhcCA8IDAgPyAwIDogZ2FwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2x1bW5HYXAocHJldlZhcmlhbnQsIHZhcmlhbnQsIHZhcmlhbnRzKSB7XG4gICAgbGV0IGdhcCA9IHZhcmlhbnQueCAtIHByZXZWYXJpYW50LnggLSBwcmV2VmFyaWFudC53aWR0aDtcbiAgICBsZXQgYm9yZGVycyA9IHtcbiAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiB2YXJpYW50LnggLSAxLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgIH07XG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcbiAgICB3aGlsZSAocm9vdCkge1xuICAgICAgICBjb25zdCBuZXdHYXAgPSB2YXJpYW50LnggLSByb290LnggLSByb290LndpZHRoO1xuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVycyA9IHtcbiAgICAgICAgICAgIHhGcm9tOiBwcmV2VmFyaWFudC54LFxuICAgICAgICAgICAgeUZyb206IHJvb3QueSArIHJvb3QuaGVpZ2h0LFxuICAgICAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gZ2FwLFxuICAgICAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICAgICAgfTtcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XG4gICAgfVxuICAgIHJldHVybiBnYXAgPCAwID8gMCA6IGdhcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJvcmRlcnMpIHtcbiAgICAgICAgY29uc3QgeyB4RnJvbSwgeUZyb20sIHhCZWZvcmUsIHlCZWZvcmUsIHlNYXgsIHlNaW4sIHhNYXgsIHhNaW4gfSA9IGJvcmRlcnM7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBsZXQgeE1pblZhbHVlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCB5TWluVmFsdWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFudC54ID49IHhGcm9tICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudC55ID49IHlGcm9tICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudC54IDw9IHhCZWZvcmUgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPD0geUJlZm9yZSkge1xuICAgICAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHhNaW4gJiYgeU1pbiAmJiAodmFyaWFudC54ICsgdmFyaWFudC55KSA8ICh4TWluVmFsdWUgKyB5TWluVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4TWluICYmIHlNYXggJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPj0geU1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeU1pbiAmJiB4TWF4ICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54ID49IHhNaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhNaW4gJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPCB5TWluVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5TWluICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54IDwgeE1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyaWFudC54IDw9IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPD0geU1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YXJpYW50O1xuICAgICAgICAgICAgICAgICAgICB4TWluVmFsdWUgPSB2YXJpYW50Lng7XG4gICAgICAgICAgICAgICAgICAgIHlNaW5WYWx1ZSA9IHZhcmlhbnQueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJvb3RQcm9wZXJ0aWVzVmFsdWVzLCBjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xuICAgICAgICBpZiAoIWN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4geyBrZXlzOiBbXSwgdmFsdWVzOiB7fSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgICBpZiAocm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XSAhPT0gY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBbcm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnB1c2goY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsga2V5cywgdmFsdWVzIH07XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJlRm4sIHJvb3QsIHZhcmlhbnQpIHtcbiAgICByZXR1cm4gY29tcGFyZUZuKHJvb3QudmFyaWFudFByb3BlcnRpZXMsIHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC52YXJpYW50UHJvcGVydGllcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsbERpcmVjdGlvbnMocHJvcGVydGllcywgZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChkaXJlY3Rpb25zLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBkaXJlY3Rpb25zW3Byb3BlcnR5XSA9IGRpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XG4gICAgfSwge30pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihwcm9wZXJ0aWVzVmFsdWVzKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXNWYWx1ZXMubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApLmpvaW4oJywgJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZE5ld1BhZGRpbmdzKHBhZGRpbmdzLCB2YXJpYW50KSB7XG4gICAgY29uc3QgbmV3UGFkZGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBwYWRkaW5ncyk7XG4gICAgaWYgKHZhcmlhbnQueCA8IHBhZGRpbmdzLkxFRlQpIHtcbiAgICAgICAgbmV3UGFkZGluZ3MuTEVGVCA9IHZhcmlhbnQueDtcbiAgICB9XG4gICAgaWYgKCh2YXJpYW50LnggKyB2YXJpYW50LndpZHRoKSA+IHBhZGRpbmdzLlJJR0hUKSB7XG4gICAgICAgIG5ld1BhZGRpbmdzLlJJR0hUID0gdmFyaWFudC54ICsgdmFyaWFudC53aWR0aDtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQueSA8IHBhZGRpbmdzLlRPUCkge1xuICAgICAgICBuZXdQYWRkaW5ncy5UT1AgPSB2YXJpYW50Lnk7XG4gICAgfVxuICAgIGlmICgodmFyaWFudC55ICsgdmFyaWFudC5oZWlnaHQpID4gcGFkZGluZ3MuQk9UVE9NKSB7XG4gICAgICAgIG5ld1BhZGRpbmdzLkJPVFRPTSA9IHZhcmlhbnQueSArIHZhcmlhbnQuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3UGFkZGluZ3M7XG59XG4iLCJpbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0aW5nXCI7XG5leHBvcnQgeyBzb3J0VmFyaWFudHMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=