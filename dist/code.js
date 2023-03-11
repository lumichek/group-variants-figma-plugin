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
        if (currentRowVariant) {
            paddings = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findNewPaddings"])(paddings, currentRowVariant);
        }
        if (currentColumnVariant) {
            paddings = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findNewPaddings"])(paddings, currentColumnVariant);
        }
        currentColumnVariant = currentColumnVariant && next(currentColumnBorders);
        currentRowVariant = currentRowVariant && next(currentRowBorders);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUseURBQXlEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNPO0FBQ1Asa0NBQWtDLGFBQWEsUUFBUSxJQUFJLEdBQUcsTUFBTTtBQUNwRTtBQUNPO0FBQ1Asd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDMUIiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09NUE9ORU5UX1NFVF9UWVBFID0gJ0NPTVBPTkVOVF9TRVQnO1xuZXhwb3J0IGNvbnN0IFBST1BFUlRZX1ZBUklBTlRfVFlQRSA9ICdWQVJJQU5UJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQgPSAnTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0VSUk9SID0gJ01FU1NBR0VfRVJST1InO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEID0gJ01FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9WQVJJQU5UUyA9ICdNRVNTQUdFX0dFVF9WQVJJQU5UUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TID0gJ01FU1NBR0VfR0VUX0RJUkVDVElPTlMnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX0dBUFMgPSAnTUVTU0FHRV9HRVRfR0FQUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTID0gJ01FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX1BBRERJTkdTID0gJ01FU1NBR0VfR0VUX1BBRERJTkdTJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dBUCA9IDQwO1xuZXhwb3J0IGNvbnN0IExFRlQgPSAnTEVGVCc7XG5leHBvcnQgY29uc3QgVE9QID0gJ1RPUCc7XG5leHBvcnQgY29uc3QgUklHSFQgPSAnUklHSFQnO1xuZXhwb3J0IGNvbnN0IEJPVFRPTSA9ICdCT1RUT00nO1xuIiwiO1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNNYXBUeXBlID0gJ01BUCc7XG5leHBvcnQgY29uc3QgUHJvcGVydGllc0xpc3RUeXBlID0gJ0xJU1QnO1xuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUywgTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELCBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCwgTUVTU0FHRV9FUlJPUiwgTUVTU0FHRV9HRVRfRElSRUNUSU9OUywgTUVTU0FHRV9HRVRfR0FQUywgTUVTU0FHRV9HRVRfUEFERElOR1MsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24sIGdldFByb3BlcnRpZXNJbmZvIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvblNlbGVjdGlvbkNoYW5nZShwYWdlKSB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xuICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELFxuICAgICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCB2YXJpYW50c1BhcmVudCA9IHNlbGVjdGVkTm9kZTtcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2FwcywgcGFkZGluZ3MsIHZhbHVlc09yZGVycyB9ID0gZ2V0UHJvcGVydGllc0luZm8odmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzKTtcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1dpdGhWYWx1ZXMgPSBwcm9wZXJ0aWVzLm1hcCgoeyBrZXksIHZhbHVlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWVzID0gdmFsdWVzT3JkZXJzW2tleV0gfHwgW107XG4gICAgICAgICAgICBpZiAoY2FsY3VsYXRlZFZhbHVlcy5sZW5ndGggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGN1bGF0ZWRWYWx1ZXMuaW5jbHVkZXModmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlczogY2FsY3VsYXRlZFZhbHVlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByb3BlcnRpZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfRElSRUNUSU9OUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkaXJlY3Rpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX0dBUFMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZ2Fwc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QQURESU5HUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYWRkaW5nc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByb3BlcnRpZXNXaXRoVmFsdWVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzV2l0aFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgZ2FwcyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuICAgIGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1FU1NBR0VfRVJST1IgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc29ydFZhcmlhbnRzIH0gZnJvbSBcIi4uL3ZhcmlhbnRzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24gfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIG9uU29ydE1lc3NhZ2UocGFnZSwgeyBwcm9wZXJ0aWVzLCBkaXJlY3Rpb25zLCBnYXBzLCBwYWRkaW5ncyB9KSB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xuICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgc2VsZWN0aW9uOiBbc2VsZWN0ZWROb2RlXSB9ID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XG4gICAgY29uc3QgdmFyaWFudHMgPSB2YXJpYW50c1BhcmVudC5jaGlsZHJlbjtcbiAgICB0cnkge1xuICAgICAgICBzb3J0VmFyaWFudHModmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzLCBwcm9wZXJ0aWVzLCB7IGRpcmVjdGlvbnMsIGdhcHMsIHBhZGRpbmdzIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfRVJST1IsXG4gICAgICAgICAgICBwYXlsb2FkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUHJvcGVydGllc0xpc3RUeXBlLCBQcm9wZXJ0aWVzTWFwVHlwZSB9IGZyb20gJy4uLy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBmZXRjaFByb3BlcnRpZXMsIHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vcHJvcGVydGllc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ09NUE9ORU5UX1NFVF9UWVBFIH0gZnJvbSAnLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NlbGVjdGlvbihwYWdlKSB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb24gfSA9IHBhZ2U7XG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgW3NlbGVjdGVkTm9kZV0gPSBzZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGVkTm9kZS50eXBlICE9PSBDT01QT05FTlRfU0VUX1RZUEUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWROb2RlLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzSW5mbyh2YXJpYW50c1BhcmVudCwgdmFyaWFudHMpIHtcbiAgICBjb25zdCBbcm9vdF0gPSB2YXJpYW50cztcbiAgICBjb25zdCBwcm9wZXJ0aWVzTGlzdCA9IGZldGNoUHJvcGVydGllcyh2YXJpYW50c1BhcmVudCwgUHJvcGVydGllc0xpc3RUeXBlKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gZmV0Y2hQcm9wZXJ0aWVzKHZhcmlhbnRzUGFyZW50LCBQcm9wZXJ0aWVzTWFwVHlwZSk7XG4gICAgY29uc3QgcHJlcGFyZWRWYXJpYW50cyA9IHZhcmlhbnRzLm1hcCgodmFyaWFudCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdmFyaWFudC54LFxuICAgICAgICAgICAgeTogdmFyaWFudC55LFxuICAgICAgICAgICAgd2lkdGg6IHZhcmlhbnQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcmlhbnQuaGVpZ2h0LFxuICAgICAgICAgICAgdmFyaWFudFByb3BlcnRpZXM6IE9iamVjdC5hc3NpZ24oe30sIHZhcmlhbnQudmFyaWFudFByb3BlcnRpZXMpXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgeyBkaXJlY3Rpb25zLCBnYXBzLCBwYWRkaW5ncywgdmFsdWVzT3JkZXJzIH0gPSBzb3J0UHJvcGVydGllcyhwcmVwYXJlZFZhcmlhbnRzLCBwcm9wZXJ0aWVzTWFwKTtcbiAgICBjb25zdCB7IG5hbWU6IHByb3BlcnRpZXNTdHJpbmcgfSA9IHJvb3Q7XG4gICAgY29uc3QgcHJvcGVydGllc09yZGVycyA9IHByb3BlcnRpZXNTdHJpbmcuc3BsaXQoJywgJyk7XG4gICAgbGV0IHByb3BlcnRpZXNMaXN0U29ydGVkID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eURhdGEgb2YgcHJvcGVydGllc09yZGVycykge1xuICAgICAgICBjb25zdCBbcHJvcGVydHlLZXldID0gcHJvcGVydHlEYXRhLnNwbGl0KCc9Jyk7XG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkLnB1c2gocHJvcGVydGllc0xpc3QuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBwcm9wZXJ0eUtleSkpO1xuICAgIH1cbiAgICBpZiAocHJvcGVydGllc0xpc3RTb3J0ZWQubGVuZ3RoIDwgcHJvcGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkID0gcHJvcGVydGllc0xpc3Q7XG4gICAgfVxuICAgIGNvbnN0IGNhbGN1bGF0ZVBhZGRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgcGFkZGluZ3MpO1xuICAgIGNhbGN1bGF0ZVBhZGRpbmdzLlJJR0hUID0gdmFyaWFudHNQYXJlbnQud2lkdGggLSBjYWxjdWxhdGVQYWRkaW5ncy5SSUdIVDtcbiAgICBjYWxjdWxhdGVQYWRkaW5ncy5CT1RUT00gPSB2YXJpYW50c1BhcmVudC5oZWlnaHQgLSBjYWxjdWxhdGVQYWRkaW5ncy5CT1RUT007XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc0xpc3RTb3J0ZWQsXG4gICAgICAgIGRpcmVjdGlvbnMsXG4gICAgICAgIGdhcHMsXG4gICAgICAgIHBhZGRpbmdzOiBjYWxjdWxhdGVQYWRkaW5ncyxcbiAgICAgICAgdmFsdWVzT3JkZXJzXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbmltcG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvb25TZWxlY3Rpb25IYW5kbGVyJztcbmltcG9ydCB7IG9uU29ydE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNvcnRNZXNzYWdlSGFuZGxlcic7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2NjUgfSk7XG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZCk7XG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xuICAgIH0pO1xufSk7XG5maWdtYS5vbigncnVuJywgKCkgPT4ge1xuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZCk7XG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xuICAgIH0pO1xufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XG4gICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBtc2cucGF5bG9hZCk7XG4gICAgICAgIGlmIChzb3J0TXNnKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzRnJvbUNvbXBvbmVudCBhcyBmZXRjaFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9wZXJ0aWVzXCI7XG5leHBvcnQgeyBzb3J0UHJvcGVydGllcywgZmV0Y2hQcm9wZXJ0aWVzIH07XG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgbWFwUHJvcGVydGllcywgbWFwUHJvcGVydGllc1RvTGlzdCB9IGZyb20gXCIuL21hcHBlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHR5cGUpIHtcbiAgICBjb25zdCByYXdQcm9wZXJ0aWVzID0gY29tcG9uZW50LmNvbXBvbmVudFByb3BlcnR5RGVmaW5pdGlvbnM7XG4gICAgaWYgKHR5cGUgPT09IFByb3BlcnRpZXNMaXN0VHlwZSkge1xuICAgICAgICByZXR1cm4gbWFwUHJvcGVydGllc1RvTGlzdChyYXdQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcyk7XG59XG4iLCJpbXBvcnQgeyBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBtYXBQcm9wZXJ0aWVzKHJhd1Byb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGFjY1twcm9wZXJ0eUtleV0gPSByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhyYXdQcm9wZXJ0aWVzKS5yZWR1Y2UoKGFjYywgcHJvcGVydHlLZXkpID0+IHtcbiAgICAgICAgaWYgKHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnR5cGUgPT09IFBST1BFUlRZX1ZBUklBTlRfVFlQRSkge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgdmFsdWVzOiByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9uc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn1cbiIsImltcG9ydCB7IHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vc29ydFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuL3NvcnRWYXJpYW50c1wiO1xuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIHNvcnRWYXJpYW50cyB9O1xuIiwiaW1wb3J0IHsgY29sbGVjdFByb3BlcnRpZXMsIGNvbXBhcmVQcm9wZXJ0aWVzLCBmaWxsRGlyZWN0aW9ucywgZmluZENvbHVtbkdhcCwgZmluZE5ld1BhZGRpbmdzLCBmaW5kTmV4dFZhcmlhbnQsIGZpbmRSb3dHYXAgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9wZXJ0aWVzKHZhcmlhbnRzLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGxldCBzb3J0RGlyZWN0aW9ucyA9IHt9O1xuICAgIGxldCBzb3J0RGlyZWN0aW9uc0NvbHVtbnMgPSB7fTtcbiAgICBsZXQgc29ydERpcmVjdGlvbnNSb3dzID0ge307XG4gICAgY29uc3QgYm9yZGVycyA9IHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICB9O1xuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xuICAgIGNvbnN0IHJvb3RDb2x1bW5zID0gbmV4dCh7XG4gICAgICAgIHhGcm9tOiAwLFxuICAgICAgICB5RnJvbTogMCxcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB4TWluOiB0cnVlXG4gICAgfSk7XG4gICAgY29uc3QgcHJldlJvb3RDb2x1bW5zID0gbmV4dCh7XG4gICAgICAgIHhGcm9tOiAwLFxuICAgICAgICB5RnJvbTogMCxcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlCZWZvcmU6IHJvb3RDb2x1bW5zLnkgLSAxLFxuICAgICAgICB4TWluOiB0cnVlLFxuICAgICAgICB5TWF4OiB0cnVlXG4gICAgfSk7XG4gICAgY29uc3QgY29sdW1uc0JvcmRlcnNZRnJvbSA9IHByZXZSb290Q29sdW1ucyA/IChwcmV2Um9vdENvbHVtbnMueSArIHByZXZSb290Q29sdW1ucy5oZWlnaHQpIDogMDtcbiAgICBjb25zdCByb290Um93cyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeU1pbjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IHByZXZSb290Um93cyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IHJvb3RSb3dzLnggLSAxLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeU1pbjogdHJ1ZSxcbiAgICAgICAgeE1heDogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IHJvd3NCb3JkZXJzWEZyb20gPSBwcmV2Um9vdFJvd3MgPyAocHJldlJvb3RSb3dzLnggKyBwcmV2Um9vdFJvd3Mud2lkdGgpIDogMDtcbiAgICBjb25zdCBnYXBzID0ge307XG4gICAgbGV0IHBhZGRpbmdzID0ge1xuICAgICAgICBMRUZUOiByb290Um93cy54LFxuICAgICAgICBSSUdIVDogcm9vdFJvd3MueCArIHJvb3RSb3dzLndpZHRoLFxuICAgICAgICBUT1A6IHJvb3RDb2x1bW5zLnksXG4gICAgICAgIEJPVFRPTTogcm9vdENvbHVtbnMueSArIHJvb3RDb2x1bW5zLmhlaWdodFxuICAgIH07XG4gICAgbGV0IGN1cnJlbnRDb2x1bW5Cb3JkZXJzID0gYm9yZGVycztcbiAgICBsZXQgY3VycmVudENvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcbiAgICBsZXQgY3VycmVudFJvd0JvcmRlcnMgPSBib3JkZXJzO1xuICAgIGxldCBjdXJyZW50Um93VmFyaWFudCA9IHJvb3RSb3dzO1xuICAgIGxldCBwcmV2Q29sdW1uVmFyaWFudCA9IHJvb3RDb2x1bW5zO1xuICAgIGxldCBwcmV2Um93VmFyaWFudCA9IHJvb3RSb3dzO1xuICAgIGxldCB2YWx1ZXNPcmRlcnMgPSB7fTtcbiAgICBsZXQgdmFsdWVzT3JkZXJzQ29sdW1ucyA9IHt9O1xuICAgIGxldCB2YWx1ZXNPcmRlcnNSb3dzID0ge307XG4gICAgd2hpbGUgKGN1cnJlbnRDb2x1bW5WYXJpYW50IHx8IGN1cnJlbnRSb3dWYXJpYW50KSB7XG4gICAgICAgIGN1cnJlbnRDb2x1bW5Cb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Q29sdW1uQm9yZGVycyksIHsgeE1pbjogdHJ1ZSwgeUZyb206IGNvbHVtbnNCb3JkZXJzWUZyb20sIHhGcm9tOiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54KSB8fCAwKSArICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LndpZHRoKSB8fCAwKSB9KTtcbiAgICAgICAgY3VycmVudFJvd0JvcmRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRSb3dCb3JkZXJzKSwgeyB5TWluOiB0cnVlLCB4RnJvbTogcm93c0JvcmRlcnNYRnJvbSwgeUZyb206ICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LnkpIHx8IDApICsgKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQuaGVpZ2h0KSB8fCAwKSB9KTtcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgICBjb25zdCB7IGtleXM6IGNvbHVtblByb3BlcnRpZXMsIHZhbHVlczogY29sdW1uUHJvcGVydGllc1ZhbHVlcywgfSA9IGNvbGxlY3RQcm9wZXJ0aWVzKGNvbXBhcmF0b3IsIHJvb3RDb2x1bW5zLCBjdXJyZW50Q29sdW1uVmFyaWFudCk7XG4gICAgICAgIGNvbnN0IHsga2V5czogcm93c1Byb3BlcnRpZXMsIHZhbHVlczogcm93UHJvcGVydGllc1ZhbHVlcywgfSA9IGNvbGxlY3RQcm9wZXJ0aWVzKGNvbXBhcmF0b3IsIHJvb3RSb3dzLCBjdXJyZW50Um93VmFyaWFudCk7XG4gICAgICAgIGNvbnN0IHNvcnREaXJlY3Rpb25zQ29sdW1uc1RvQWRkID0gZmlsbERpcmVjdGlvbnMoY29sdW1uUHJvcGVydGllcywgXCJDT0xVTU5TXCIpO1xuICAgICAgICBjb25zdCBzb3J0RGlyZWN0aW9uc1Jvd3NUb0FkZCA9IGZpbGxEaXJlY3Rpb25zKGNvbHVtblByb3BlcnRpZXMsIFwiUk9XU1wiKTtcbiAgICAgICAgc29ydERpcmVjdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydERpcmVjdGlvbnNSb3dzVG9BZGQpLCBzb3J0RGlyZWN0aW9uc0NvbHVtbnNUb0FkZCksIHNvcnREaXJlY3Rpb25zKTtcbiAgICAgICAgc29ydERpcmVjdGlvbnNDb2x1bW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzb3J0RGlyZWN0aW9uc0NvbHVtbnMpLCBzb3J0RGlyZWN0aW9uc0NvbHVtbnNUb0FkZCk7XG4gICAgICAgIHNvcnREaXJlY3Rpb25zUm93cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc29ydERpcmVjdGlvbnNSb3dzKSwgc29ydERpcmVjdGlvbnNSb3dzVG9BZGQpO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5S2V5IG9mIHJvd3NQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoISgoX2EgPSByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzUm93c1twcm9wZXJ0eUtleV0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1Jvd3NbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiQ09MVU1OU1wiKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5S2V5IG9mIGNvbHVtblByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmICghKChfYiA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc0NvbHVtbnNbcHJvcGVydHlLZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc0NvbHVtbnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzQ29sdW1uc1twcm9wZXJ0eUtleV0ucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJST1dTXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0ucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgcm93UHJvcGVydHkgb2Ygcm93c1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmICghZ2Fwc1tyb3dQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBnYXBzW3Jvd1Byb3BlcnR5XSA9IGZpbmRSb3dHYXAocHJldlJvd1ZhcmlhbnQsIGN1cnJlbnRSb3dWYXJpYW50LCB2YXJpYW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW5Qcm9wZXJ0eSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIWdhcHNbY29sdW1uUHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0gPSBmaW5kQ29sdW1uR2FwKHByZXZDb2x1bW5WYXJpYW50LCBjdXJyZW50Q29sdW1uVmFyaWFudCwgdmFyaWFudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXZDb2x1bW5WYXJpYW50ID0gY3VycmVudENvbHVtblZhcmlhbnQ7XG4gICAgICAgIHByZXZSb3dWYXJpYW50ID0gY3VycmVudFJvd1ZhcmlhbnQ7XG4gICAgICAgIGlmIChjdXJyZW50Um93VmFyaWFudCkge1xuICAgICAgICAgICAgcGFkZGluZ3MgPSBmaW5kTmV3UGFkZGluZ3MocGFkZGluZ3MsIGN1cnJlbnRSb3dWYXJpYW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudENvbHVtblZhcmlhbnQpIHtcbiAgICAgICAgICAgIHBhZGRpbmdzID0gZmluZE5ld1BhZGRpbmdzKHBhZGRpbmdzLCBjdXJyZW50Q29sdW1uVmFyaWFudCk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudENvbHVtblZhcmlhbnQgPSBjdXJyZW50Q29sdW1uVmFyaWFudCAmJiBuZXh0KGN1cnJlbnRDb2x1bW5Cb3JkZXJzKTtcbiAgICAgICAgY3VycmVudFJvd1ZhcmlhbnQgPSBjdXJyZW50Um93VmFyaWFudCAmJiBuZXh0KGN1cnJlbnRSb3dCb3JkZXJzKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZXNPcmRlcnMpKSB7XG4gICAgICAgIGlmICgoKF9jID0gdmFsdWVzT3JkZXJzQ29sdW1uc1twcm9wZXJ0eUtleV0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5sZW5ndGgpICYmICgoX2QgPSB2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNPcmRlcnNDb2x1bW5zW3Byb3BlcnR5S2V5XS5sZW5ndGggPiB2YWx1ZXNPcmRlcnNSb3dzW3Byb3BlcnR5S2V5XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPSBcIkNPTFVNTlNcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gdmFsdWVzT3JkZXJzQ29sdW1uc1twcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVzT3JkZXJzUm93c1twcm9wZXJ0eUtleV0ubGVuZ3RoID4gdmFsdWVzT3JkZXJzQ29sdW1uc1twcm9wZXJ0eUtleV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID0gXCJST1dTXCI7XG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IHZhbHVlc09yZGVyc1Jvd3NbcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMocHJvcGVydGllcykpIHtcbiAgICAgICAgaWYgKCFzb3J0RGlyZWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5XSA9IFwiUk9XU1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlc09yZGVycyxcbiAgICAgICAgZGlyZWN0aW9uczogc29ydERpcmVjdGlvbnMsXG4gICAgICAgIGdhcHMsXG4gICAgICAgIHBhZGRpbmdzXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0ciB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZnVuY3Rpb24gc29ydFZhcmlhbnRzKHBhcmVudFZhcmlhbnQsIHZhcmlhbnRzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBkaXJlY3Rpb25zLCBnYXBzLCBwYWRkaW5ncyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCByZXZlcnNlZFByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLnJldmVyc2UoKTtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCByb3dzS2V5cyA9IFtdO1xuICAgIGxldCByb3dzR2FwcyA9IFtdO1xuICAgIGxldCBjb2x1bW5zID0gW107XG4gICAgbGV0IGNvbHVtbnNLZXlzID0gW107XG4gICAgbGV0IGNvbHVtbnNHYXBzID0gW107XG4gICAgbGV0IHZhcmlhbnRzTWFwID0ge307XG4gICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgIGxldCB2YXJpYW50S2V5ID0gW107XG4gICAgICAgIGxldCByb3dWYXJpYW50S2V5ID0gW107XG4gICAgICAgIGxldCBjb2x1bW5WYXJpYW50S2V5ID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5SW5kZXggPSAwOyBwcm9wZXJ0eUluZGV4IDwgcHJvcGVydGllcy5sZW5ndGg7IHByb3BlcnR5SW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5IH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xuICAgICAgICAgICAgdmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xuICAgICAgICAgICAgICAgIHJvd1ZhcmlhbnRLZXkucHVzaChgJHtwcm9wZXJ0eUtleX09JHt2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dWYXJpYW50S2V5U3RyID0gWy4uLnJvd1ZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIGlmICghdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0ucHVzaCh2YXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5WYXJpYW50S2V5LnB1c2goYCR7cHJvcGVydHlLZXl9PSR7dmFyaWFudC52YXJpYW50UHJvcGVydGllc1twcm9wZXJ0eUtleV19YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdLnB1c2godmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93VmFyaWFudEtleVN0ciA9IFsuLi5yb3dWYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgdmFyaWFudHNNYXBbW3Jvd1ZhcmlhbnRLZXlTdHIsIGNvbHVtblZhcmlhbnRLZXlTdHJdLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xuICAgICAgICB2YXJpYW50c01hcFt2YXJpYW50S2V5LnJldmVyc2UoKS5qb2luKCcsICcpXSA9IFt2YXJpYW50XTtcbiAgICB9XG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5LCB2YWx1ZXM6IHByb3BlcnR5VmFsdWVzIH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiUk9XU1wiKSB7XG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByb3dzID0gcHJvcGVydHlWYWx1ZXMubWFwKChwcm9wZXJ0eVZhbHVlKSA9PiAoW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgICAgIHJvd3NLZXlzID0gcm93cy5tYXAobWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZFByb3BlcnR5VmFsdWVzID0gcm93cztcbiAgICAgICAgICAgICAgICByb3dzID0gW107XG4gICAgICAgICAgICAgICAgcm93c0tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93S2V5ID0gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbcm93S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NLZXlzLnB1c2gocm93S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzID0gcHJvcGVydHlWYWx1ZXMubWFwKCgpID0+IGdhcHNbcHJvcGVydHlLZXldKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cyA9IGNvbHVtbnMubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IGNvbHVtbnM7XG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuZXN0ZWRJbmRleCA9IDA7IG5lc3RlZEluZGV4IDwgbmVzdGVkUHJvcGVydHlWYWx1ZXMubGVuZ3RoOyBuZXN0ZWRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZXNbdmFsdWVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5lc3RlZFByb3BlcnR5VmFsdWVzW25lc3RlZEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbktleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRzTWFwW2NvbHVtbktleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cy5wdXNoKGNvbHVtbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29sdW1uc01heFdpZHRocyA9IFtdO1xuICAgIGxldCBwcmV2Um93VmFsdWVzID0gbnVsbDtcbiAgICBsZXQgcHJldkNvbHVtblZhbHVlcyA9IG51bGw7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XG4gICAgICAgIGlmIChwcmV2Um93VmFsdWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcm93c1tyb3dJbmRleF0ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBrZXk6IHJvd0tleSwgdmFsdWU6IHJvd1ZhbHVlIH0gPSByb3dzW3Jvd0luZGV4XVtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHByZXZSb3dWYWx1ZXNbaW5kZXhdLmtleSA9PT0gcm93S2V5ICYmIHByZXZSb3dWYWx1ZXNbaW5kZXhdLnZhbHVlICE9PSByb3dWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByb3dzR2Fwc1tyb3dJbmRleCAtIDFdID0gZ2Fwc1tyb3dLZXldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJldlJvd1ZhbHVlcyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgIH1cbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgaWYgKHByZXZDb2x1bW5WYWx1ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zW2NvbHVtbkluZGV4XS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleTogY29sdW1uS2V5LCB2YWx1ZTogY29sdW1uVmFsdWUgfSA9IGNvbHVtbnNbY29sdW1uSW5kZXhdW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkNvbHVtblZhbHVlc1tpbmRleF0ua2V5ID09PSBjb2x1bW5LZXkgJiYgcHJldkNvbHVtblZhbHVlc1tpbmRleF0udmFsdWUgIT09IGNvbHVtblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzW2NvbHVtbkluZGV4IC0gMV0gPSBnYXBzW2NvbHVtbktleV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Q29sdW1uVmFsdWVzID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IGNvbHVtblZhcmlhbnRzID0gdmFyaWFudHNNYXBbY29sdW1uc0tleXNbY29sdW1uSW5kZXhdXTtcbiAgICAgICAgbGV0IG1heENvbHVtbldpZHRoID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIGNvbHVtblZhcmlhbnRzKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFudC53aWR0aCA+IG1heENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50LndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdID0gbWF4Q29sdW1uV2lkdGg7XG4gICAgfVxuICAgIGxldCB4Q29vcmQgPSBwYWRkaW5ncy5MRUZUO1xuICAgIGxldCB5Q29vcmQgPSBwYWRkaW5ncy5UT1A7XG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJvd3MucHVzaChudWxsKTtcbiAgICB9XG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChudWxsKTtcbiAgICB9XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XG4gICAgICAgIGxldCBtYXhSb3dIZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4Q29sdW1uV2lkdGggPSAwO1xuICAgICAgICBsZXQgaXNFbXB0eVJvdyA9IHRydWU7XG4gICAgICAgIHhDb29yZCA9IHBhZGRpbmdzLkxFRlQ7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRLZXkgPSBtYXBQcm9wZXJ0aWVzVmFsdWVzVG9TdHIoWy4uLihyb3cgfHwgW10pLCAuLi4oY29sdW1uIHx8IFtdKV0pO1xuICAgICAgICAgICAgY29uc3QgW3ZhcmlhbnRdID0gdmFyaWFudHNNYXBbdmFyaWFudEtleV0gfHwgW107XG4gICAgICAgICAgICBpZiAodmFyaWFudCkge1xuICAgICAgICAgICAgICAgIGlzRW1wdHlSb3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudC5oZWlnaHQgPiBtYXhSb3dIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4Um93SGVpZ2h0ID0gdmFyaWFudC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQueCA9IHhDb29yZDtcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPSB5Q29vcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sdW1uc01heFdpZHRoc1tjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uc01heFdpZHRoc1tjb2x1bW5JbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC53aWR0aCkgPiBtYXhDb2x1bW5XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5XaWR0aCA9IHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHhDb29yZCArPSBjb2x1bW5zR2Fwc1tjb2x1bW5JbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VtcHR5Um93KSB7XG4gICAgICAgICAgICB5Q29vcmQgKz0gbWF4Um93SGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHJvd0luZGV4ICE9PSByb3dzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB5Q29vcmQgKz0gcm93c0dhcHNbcm93SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhDb2x1bW5XaWR0aCA+IDApIHtcbiAgICAgICAgICAgIHhDb29yZCArPSBtYXhDb2x1bW5XaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJlbnRWYXJpYW50LmxheW91dE1vZGUgPSAnTk9ORSc7XG4gICAgcGFyZW50VmFyaWFudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoeENvb3JkICsgcGFkZGluZ3MuUklHSFQsIHlDb29yZCArIHBhZGRpbmdzLkJPVFRPTSk7XG59XG47XG4iLCJleHBvcnQgZnVuY3Rpb24gZmluZFJvd0dhcChwcmV2VmFyaWFudCwgdmFyaWFudCwgdmFyaWFudHMpIHtcbiAgICBsZXQgZ2FwID0gdmFyaWFudC55IC0gcHJldlZhcmlhbnQueSAtIHByZXZWYXJpYW50LmhlaWdodDtcbiAgICBsZXQgYm9yZGVycyA9IHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiBwcmV2VmFyaWFudC55LFxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeUJlZm9yZTogdmFyaWFudC55IC0gMVxuICAgIH07XG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcbiAgICB3aGlsZSAocm9vdCkge1xuICAgICAgICBjb25zdCBuZXdHYXAgPSB2YXJpYW50LnkgLSByb290LnkgLSByb290LmhlaWdodDtcbiAgICAgICAgaWYgKG5ld0dhcCA8IGdhcCkge1xuICAgICAgICAgICAgZ2FwID0gbmV3R2FwO1xuICAgICAgICB9XG4gICAgICAgIGJvcmRlcnMgPSB7XG4gICAgICAgICAgICB4RnJvbTogcm9vdC54ICsgcm9vdC53aWR0aCxcbiAgICAgICAgICAgIHlGcm9tOiBwcmV2VmFyaWFudC55LFxuICAgICAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICB5QmVmb3JlOiB2YXJpYW50LnkgLSBnYXBcbiAgICAgICAgfTtcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XG4gICAgfVxuICAgIHJldHVybiBnYXAgPCAwID8gMCA6IGdhcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29sdW1uR2FwKHByZXZWYXJpYW50LCB2YXJpYW50LCB2YXJpYW50cykge1xuICAgIGxldCBnYXAgPSB2YXJpYW50LnggLSBwcmV2VmFyaWFudC54IC0gcHJldlZhcmlhbnQud2lkdGg7XG4gICAgbGV0IGJvcmRlcnMgPSB7XG4gICAgICAgIHhGcm9tOiBwcmV2VmFyaWFudC54LFxuICAgICAgICB5RnJvbTogMCxcbiAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gMSxcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICB9O1xuICAgIGNvbnN0IG5leHQgPSBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpO1xuICAgIGxldCByb290ID0gcHJldlZhcmlhbnQ7XG4gICAgd2hpbGUgKHJvb3QpIHtcbiAgICAgICAgY29uc3QgbmV3R2FwID0gdmFyaWFudC54IC0gcm9vdC54IC0gcm9vdC53aWR0aDtcbiAgICAgICAgaWYgKG5ld0dhcCA8IGdhcCkge1xuICAgICAgICAgICAgZ2FwID0gbmV3R2FwO1xuICAgICAgICB9XG4gICAgICAgIGJvcmRlcnMgPSB7XG4gICAgICAgICAgICB4RnJvbTogcHJldlZhcmlhbnQueCxcbiAgICAgICAgICAgIHlGcm9tOiByb290LnkgKyByb290LmhlaWdodCxcbiAgICAgICAgICAgIHhCZWZvcmU6IHZhcmlhbnQueCAtIGdhcCxcbiAgICAgICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgICAgIH07XG4gICAgICAgIHJvb3QgPSBuZXh0KGJvcmRlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gZ2FwIDwgMCA/IDAgOiBnYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChib3JkZXJzKSB7XG4gICAgICAgIGNvbnN0IHsgeEZyb20sIHlGcm9tLCB4QmVmb3JlLCB5QmVmb3JlLCB5TWF4LCB5TWluLCB4TWF4LCB4TWluIH0gPSBib3JkZXJzO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgbGV0IHhNaW5WYWx1ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBsZXQgeU1pblZhbHVlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuICAgICAgICAgICAgaWYgKHZhcmlhbnQueCA+PSB4RnJvbSAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQueSA+PSB5RnJvbSAmJlxuICAgICAgICAgICAgICAgIHZhcmlhbnQueCA8PSB4QmVmb3JlICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudC55IDw9IHlCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh4TWluICYmIHlNaW4gJiYgKHZhcmlhbnQueCArIHZhcmlhbnQueSkgPCAoeE1pblZhbHVlICsgeU1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeE1pbiAmJiB5TWF4ICYmICh2YXJpYW50LnggPCB4TWluVmFsdWUgfHwgdmFyaWFudC54ID09PSB4TWluVmFsdWUgJiYgdmFyaWFudC55ID49IHlNaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHlNaW4gJiYgeE1heCAmJiAodmFyaWFudC55IDwgeU1pblZhbHVlIHx8IHZhcmlhbnQueSA9PT0geU1pblZhbHVlICYmIHZhcmlhbnQueCA+PSB4TWluVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4TWluICYmICh2YXJpYW50LnggPCB4TWluVmFsdWUgfHwgdmFyaWFudC54ID09PSB4TWluVmFsdWUgJiYgdmFyaWFudC55IDwgeU1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeU1pbiAmJiAodmFyaWFudC55IDwgeU1pblZhbHVlIHx8IHZhcmlhbnQueSA9PT0geU1pblZhbHVlICYmIHZhcmlhbnQueCA8IHhNaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcmlhbnQueCA8PSB4TWluVmFsdWUgJiYgdmFyaWFudC55IDw9IHlNaW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzRm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFyaWFudDtcbiAgICAgICAgICAgICAgICAgICAgeE1pblZhbHVlID0gdmFyaWFudC54O1xuICAgICAgICAgICAgICAgICAgICB5TWluVmFsdWUgPSB2YXJpYW50Lnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbjtcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyb290UHJvcGVydGllc1ZhbHVlcywgY3VycmVudFByb3BlcnRpZXNWYWx1ZXMpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHsga2V5czogW10sIHZhbHVlczoge30gfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xuICAgICAgICAgICAgaWYgKHJvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV0gIT09IGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gW3Jvb3RQcm9wZXJ0aWVzVmFsdWVzW2tleV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGtleXMsIHZhbHVlcyB9O1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyZUZuLCByb290LCB2YXJpYW50KSB7XG4gICAgcmV0dXJuIGNvbXBhcmVGbihyb290LnZhcmlhbnRQcm9wZXJ0aWVzLCB2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQudmFyaWFudFByb3BlcnRpZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxEaXJlY3Rpb25zKHByb3BlcnRpZXMsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgoZGlyZWN0aW9ucywgcHJvcGVydHkpID0+IHtcbiAgICAgICAgZGlyZWN0aW9uc1twcm9wZXJ0eV0gPSBkaXJlY3Rpb247XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25zO1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXBQcm9wZXJ0aWVzVmFsdWVzVG9TdHIocHJvcGVydGllc1ZhbHVlcykge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzVmFsdWVzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IGAke2tleX09JHt2YWx1ZX1gKS5qb2luKCcsICcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdQYWRkaW5ncyhwYWRkaW5ncywgdmFyaWFudCkge1xuICAgIGNvbnN0IG5ld1BhZGRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgcGFkZGluZ3MpO1xuICAgIGlmICh2YXJpYW50LnggPCBwYWRkaW5ncy5MRUZUKSB7XG4gICAgICAgIG5ld1BhZGRpbmdzLkxFRlQgPSB2YXJpYW50Lng7XG4gICAgfVxuICAgIGlmICgodmFyaWFudC54ICsgdmFyaWFudC53aWR0aCkgPiBwYWRkaW5ncy5SSUdIVCkge1xuICAgICAgICBuZXdQYWRkaW5ncy5SSUdIVCA9IHZhcmlhbnQueCArIHZhcmlhbnQud2lkdGg7XG4gICAgfVxuICAgIGlmICh2YXJpYW50LnkgPCBwYWRkaW5ncy5UT1ApIHtcbiAgICAgICAgbmV3UGFkZGluZ3MuVE9QID0gdmFyaWFudC55O1xuICAgIH1cbiAgICBpZiAoKHZhcmlhbnQueSArIHZhcmlhbnQuaGVpZ2h0KSA+IHBhZGRpbmdzLkJPVFRPTSkge1xuICAgICAgICBuZXdQYWRkaW5ncy5CT1RUT00gPSB2YXJpYW50LnkgKyB2YXJpYW50LmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1BhZGRpbmdzO1xufVxuIiwiaW1wb3J0IHsgc29ydFZhcmlhbnRzIH0gZnJvbSBcIi4vc2VydmljZXMvc29ydGluZ1wiO1xuZXhwb3J0IHsgc29ydFZhcmlhbnRzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9