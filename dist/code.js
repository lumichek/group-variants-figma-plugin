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
        console.log('currentColumnVariant', currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.x, currentColumnVariant === null || currentColumnVariant === void 0 ? void 0 : currentColumnVariant.y);
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
                rowsKeys = rows.map(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"]);
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
                        const rowKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"])(row);
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
                columnsKeys = columns.map(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"]);
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
                        const columnKey = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapPropertiesValuesToStr"])(column);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLHlEQUF5RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDTztBQUNQLGtDQUFrQyxhQUFhLFFBQVEsSUFBSSxHQUFHLE1BQU07QUFDcEU7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDMUIiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09NUE9ORU5UX1NFVF9UWVBFID0gJ0NPTVBPTkVOVF9TRVQnO1xuZXhwb3J0IGNvbnN0IFBST1BFUlRZX1ZBUklBTlRfVFlQRSA9ICdWQVJJQU5UJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQgPSAnTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0VSUk9SID0gJ01FU1NBR0VfRVJST1InO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEID0gJ01FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVEJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9WQVJJQU5UUyA9ICdNRVNTQUdFX0dFVF9WQVJJQU5UUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TID0gJ01FU1NBR0VfR0VUX0RJUkVDVElPTlMnO1xuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX0dBUFMgPSAnTUVTU0FHRV9HRVRfR0FQUyc7XG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTJztcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTID0gJ01FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0FQID0gNDA7XG5leHBvcnQgY29uc3QgUk9XU19HQVBfRklFTEQgPSAnUk9XU19HQVBfRklFTEQnO1xuZXhwb3J0IGNvbnN0IENPTFVNTlNfR0FQX0ZJRUxEID0gJ0NPTFVNTlNfR0FQX0ZJRUxEJztcbiIsIjtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTWFwVHlwZSA9ICdNQVAnO1xuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNMaXN0VHlwZSA9ICdMSVNUJztcbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsIE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCwgTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsIE1FU1NBR0VfRVJST1IsIE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsIE1FU1NBR0VfR0VUX0dBUFMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24sIGdldFByb3BlcnRpZXNJbmZvIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvblNlbGVjdGlvbkNoYW5nZShwYWdlKSB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xuICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELFxuICAgICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCB2YXJpYW50c1BhcmVudCA9IHNlbGVjdGVkTm9kZTtcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2FwcywgdmFsdWVzT3JkZXJzIH0gPSBnZXRQcm9wZXJ0aWVzSW5mbyh2YXJpYW50c1BhcmVudCwgdmFyaWFudHMpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzV2l0aFZhbHVlcyA9IHByb3BlcnRpZXMubWFwKCh7IGtleSwgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZXMgPSB2YWx1ZXNPcmRlcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgIGlmIChjYWxjdWxhdGVkVmFsdWVzLmxlbmd0aCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsY3VsYXRlZFZhbHVlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkVmFsdWVzLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjYWxjdWxhdGVkVmFsdWVzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRpcmVjdGlvbnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfR0FQUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBnYXBzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1dpdGhWYWx1ZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNXaXRoVmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICBnYXBzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cbiAgICBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9FUlJPUixcbiAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBNRVNTQUdFX0VSUk9SIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuLi92YXJpYW50c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvblNvcnRNZXNzYWdlKHBhZ2UsIHByb3BlcnRpZXMsIGRpcmVjdGlvbnMsIGdhcHMpIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gY2hlY2tTZWxlY3Rpb24ocGFnZSk7XG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCB2YXJpYW50c1BhcmVudCA9IHNlbGVjdGVkTm9kZTtcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xuICAgIHRyeSB7XG4gICAgICAgIHNvcnRWYXJpYW50cyh2YXJpYW50c1BhcmVudCwgdmFyaWFudHMsIHByb3BlcnRpZXMsIHsgZGlyZWN0aW9ucywgZ2FwcyB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnRpZXNMaXN0VHlwZSwgUHJvcGVydGllc01hcFR5cGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgZmV0Y2hQcm9wZXJ0aWVzLCBzb3J0UHJvcGVydGllcyB9IGZyb20gJy4uL3Byb3BlcnRpZXNDb250cm9sbGVyJztcbmltcG9ydCB7IENPTVBPTkVOVF9TRVRfVFlQRSB9IGZyb20gJy4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZWxlY3Rpb24ocGFnZSkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBwYWdlO1xuICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IFtzZWxlY3RlZE5vZGVdID0gc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3RlZE5vZGUudHlwZSAhPT0gQ09NUE9ORU5UX1NFVF9UWVBFKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkTm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydGllc0luZm8oY29tcG9uZW50U2V0LCB2YXJpYW50cykge1xuICAgIGNvbnN0IFtyb290XSA9IHZhcmlhbnRzO1xuICAgIGNvbnN0IHByb3BlcnRpZXNMaXN0ID0gZmV0Y2hQcm9wZXJ0aWVzKGNvbXBvbmVudFNldCwgUHJvcGVydGllc0xpc3RUeXBlKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gZmV0Y2hQcm9wZXJ0aWVzKGNvbXBvbmVudFNldCwgUHJvcGVydGllc01hcFR5cGUpO1xuICAgIGNvbnN0IHByZXBhcmVkVmFyaWFudHMgPSB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHZhcmlhbnQueCxcbiAgICAgICAgICAgIHk6IHZhcmlhbnQueSxcbiAgICAgICAgICAgIHdpZHRoOiB2YXJpYW50LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB2YXJpYW50LmhlaWdodCxcbiAgICAgICAgICAgIHZhcmlhbnRQcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHt9LCB2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzKVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcywgdmFsdWVzT3JkZXJzIH0gPSBzb3J0UHJvcGVydGllcyhwcmVwYXJlZFZhcmlhbnRzLCBwcm9wZXJ0aWVzTWFwKTtcbiAgICBjb25zdCB7IG5hbWU6IHByb3BlcnRpZXNTdHJpbmcgfSA9IHJvb3Q7XG4gICAgY29uc3QgcHJvcGVydGllc09yZGVycyA9IHByb3BlcnRpZXNTdHJpbmcuc3BsaXQoJywgJyk7XG4gICAgbGV0IHByb3BlcnRpZXNMaXN0U29ydGVkID0gW107XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eURhdGEgb2YgcHJvcGVydGllc09yZGVycykge1xuICAgICAgICBjb25zdCBbcHJvcGVydHlLZXldID0gcHJvcGVydHlEYXRhLnNwbGl0KCc9Jyk7XG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkLnB1c2gocHJvcGVydGllc0xpc3QuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBwcm9wZXJ0eUtleSkpO1xuICAgIH1cbiAgICBpZiAocHJvcGVydGllc0xpc3RTb3J0ZWQubGVuZ3RoIDwgcHJvcGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkID0gcHJvcGVydGllc0xpc3Q7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNMaXN0U29ydGVkLFxuICAgICAgICBkaXJlY3Rpb25zLFxuICAgICAgICBnYXBzLFxuICAgICAgICB2YWx1ZXNPcmRlcnNcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuaW1wb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXInO1xuaW1wb3J0IHsgb25Tb3J0TWVzc2FnZSB9IGZyb20gJy4vZXZlbnRzL29uU29ydE1lc3NhZ2VIYW5kbGVyJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDY2NSB9KTtcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgbXNnID0gb25TZWxlY3Rpb25DaGFuZ2UoZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgIChBcnJheS5pc0FycmF5KG1zZykgPyBtc2cgOiBbbXNnXSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgaXRlbS5wYXlsb2FkLnByb3BlcnRpZXMsIGl0ZW0ucGF5bG9hZC5kaXJlY3Rpb25zLCBpdGVtLnBheWxvYWQuZ2Fwcyk7XG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xuICAgIH0pO1xufSk7XG5maWdtYS5vbigncnVuJywgKCkgPT4ge1xuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZC5wcm9wZXJ0aWVzLCBpdGVtLnBheWxvYWQuZGlyZWN0aW9ucywgaXRlbS5wYXlsb2FkLmdhcHMpO1xuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShpdGVtKTtcbiAgICB9KTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xuICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgbXNnLnBheWxvYWQucHJvcGVydGllcywgbXNnLnBheWxvYWQuZGlyZWN0aW9ucywgbXNnLnBheWxvYWQuZ2Fwcyk7XG4gICAgICAgIGlmIChzb3J0TXNnKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzRnJvbUNvbXBvbmVudCBhcyBmZXRjaFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9wZXJ0aWVzXCI7XG5leHBvcnQgeyBzb3J0UHJvcGVydGllcywgZmV0Y2hQcm9wZXJ0aWVzIH07XG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgbWFwUHJvcGVydGllcywgbWFwUHJvcGVydGllc1RvTGlzdCB9IGZyb20gXCIuL21hcHBlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHR5cGUpIHtcbiAgICBjb25zdCByYXdQcm9wZXJ0aWVzID0gY29tcG9uZW50LmNvbXBvbmVudFByb3BlcnR5RGVmaW5pdGlvbnM7XG4gICAgaWYgKHR5cGUgPT09IFByb3BlcnRpZXNMaXN0VHlwZSkge1xuICAgICAgICByZXR1cm4gbWFwUHJvcGVydGllc1RvTGlzdChyYXdQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcyk7XG59XG4iLCJpbXBvcnQgeyBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBtYXBQcm9wZXJ0aWVzKHJhd1Byb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGFjY1twcm9wZXJ0eUtleV0gPSByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhyYXdQcm9wZXJ0aWVzKS5yZWR1Y2UoKGFjYywgcHJvcGVydHlLZXkpID0+IHtcbiAgICAgICAgaWYgKHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnR5cGUgPT09IFBST1BFUlRZX1ZBUklBTlRfVFlQRSkge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgdmFsdWVzOiByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9uc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn1cbiIsImltcG9ydCB7IHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vc29ydFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuL3NvcnRWYXJpYW50c1wiO1xuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIHNvcnRWYXJpYW50cyB9O1xuIiwiaW1wb3J0IHsgUk9XU19HQVBfRklFTEQsIENPTFVNTlNfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbGxlY3RQcm9wZXJ0aWVzLCBjb21wYXJlUHJvcGVydGllcywgZmlsbERpcmVjdGlvbnMsIGZpbmRDb2x1bW5HYXAsIGZpbmROZXh0VmFyaWFudCwgZmluZFJvd0dhcCB9IGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgZnVuY3Rpb24gc29ydFByb3BlcnRpZXModmFyaWFudHMsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGxldCBzb3J0RGlyZWN0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGJvcmRlcnMgPSB7XG4gICAgICAgIHhGcm9tOiAwLFxuICAgICAgICB5RnJvbTogMCxcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG4gICAgfTtcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcbiAgICBjb25zdCByb290Q29sdW1ucyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeE1pbjogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IHByZXZSb290Q29sdW1ucyA9IG5leHQoe1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IDAsXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiByb290Q29sdW1ucy55IC0gMSxcbiAgICAgICAgeE1pbjogdHJ1ZSxcbiAgICAgICAgeU1heDogdHJ1ZVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbHVtbnNCb3JkZXJzWUZyb20gPSBwcmV2Um9vdENvbHVtbnMgPyAocHJldlJvb3RDb2x1bW5zLnkgKyBwcmV2Um9vdENvbHVtbnMuaGVpZ2h0KSA6IDA7XG4gICAgY29uc3Qgcm9vdFJvd3MgPSBuZXh0KHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlNaW46IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBwcmV2Um9vdFJvd3MgPSBuZXh0KHtcbiAgICAgICAgeEZyb206IDAsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiByb290Um93cy54IC0gMSxcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgIHlNaW46IHRydWUsXG4gICAgICAgIHhNYXg6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCByb3dzQm9yZGVyc1hGcm9tID0gcHJldlJvb3RSb3dzID8gKHByZXZSb290Um93cy54ICsgcHJldlJvb3RSb3dzLndpZHRoKSA6IDA7XG4gICAgY29uc3QgZ2FwcyA9IHtcbiAgICAgICAgW1JPV1NfR0FQX0ZJRUxEXTogcm9vdFJvd3MueCxcbiAgICAgICAgW0NPTFVNTlNfR0FQX0ZJRUxEXTogcm9vdENvbHVtbnMueVxuICAgIH07XG4gICAgbGV0IGN1cnJlbnRDb2x1bW5Cb3JkZXJzID0gYm9yZGVycztcbiAgICBsZXQgY3VycmVudENvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcbiAgICBsZXQgY3VycmVudFJvd0JvcmRlcnMgPSBib3JkZXJzO1xuICAgIGxldCBjdXJyZW50Um93VmFyaWFudCA9IHJvb3RSb3dzO1xuICAgIGxldCBwcmV2Q29sdW1uVmFyaWFudCA9IHJvb3RDb2x1bW5zO1xuICAgIGxldCBwcmV2Um93VmFyaWFudCA9IHJvb3RSb3dzO1xuICAgIGxldCB2YWx1ZXNPcmRlcnMgPSB7fTtcbiAgICB3aGlsZSAoY3VycmVudENvbHVtblZhcmlhbnQgfHwgY3VycmVudFJvd1ZhcmlhbnQpIHtcbiAgICAgICAgY3VycmVudENvbHVtbkJvcmRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRDb2x1bW5Cb3JkZXJzKSwgeyB4TWluOiB0cnVlLCB5RnJvbTogY29sdW1uc0JvcmRlcnNZRnJvbSwgeEZyb206ICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LngpIHx8IDApICsgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQud2lkdGgpIHx8IDApIH0pO1xuICAgICAgICBjdXJyZW50Um93Qm9yZGVycyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFJvd0JvcmRlcnMpLCB7IHlNaW46IHRydWUsIHhGcm9tOiByb3dzQm9yZGVyc1hGcm9tLCB5RnJvbTogKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueSkgfHwgMCkgKyAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC5oZWlnaHQpIHx8IDApIH0pO1xuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gY29tcGFyZVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICAgIGNvbnN0IHsga2V5czogY29sdW1uUHJvcGVydGllcywgdmFsdWVzOiBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdENvbHVtbnMsIGN1cnJlbnRDb2x1bW5WYXJpYW50KTtcbiAgICAgICAgY29uc3QgeyBrZXlzOiByb3dzUHJvcGVydGllcywgdmFsdWVzOiByb3dQcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdFJvd3MsIGN1cnJlbnRSb3dWYXJpYW50KTtcbiAgICAgICAgc29ydERpcmVjdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmlsbERpcmVjdGlvbnMocm93c1Byb3BlcnRpZXMsIFwiUk9XU1wiKSksIGZpbGxEaXJlY3Rpb25zKGNvbHVtblByb3BlcnRpZXMsIFwiQ09MVU1OU1wiKSksIHNvcnREaXJlY3Rpb25zKTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiByb3dzUHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKCEoKF9hID0gcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHlLZXkgb2YgY29sdW1uUHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKCEoKF9iID0gY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgcm93UHJvcGVydHkgb2Ygcm93c1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmICghZ2Fwc1tyb3dQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICBnYXBzW3Jvd1Byb3BlcnR5XSA9IGZpbmRSb3dHYXAocHJldlJvd1ZhcmlhbnQsIGN1cnJlbnRSb3dWYXJpYW50LCB2YXJpYW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW5Qcm9wZXJ0eSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIWdhcHNbY29sdW1uUHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0gPSBmaW5kQ29sdW1uR2FwKHByZXZDb2x1bW5WYXJpYW50LCBjdXJyZW50Q29sdW1uVmFyaWFudCwgdmFyaWFudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXZDb2x1bW5WYXJpYW50ID0gY3VycmVudENvbHVtblZhcmlhbnQ7XG4gICAgICAgIHByZXZSb3dWYXJpYW50ID0gY3VycmVudFJvd1ZhcmlhbnQ7XG4gICAgICAgIGlmICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LngpIDwgZ2Fwc1tST1dTX0dBUF9GSUVMRF0pIHtcbiAgICAgICAgICAgIGdhcHNbUk9XU19HQVBfRklFTERdID0gY3VycmVudENvbHVtblZhcmlhbnQueDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC54KSA8IGdhcHNbUk9XU19HQVBfRklFTERdKSB7XG4gICAgICAgICAgICBnYXBzW1JPV1NfR0FQX0ZJRUxEXSA9IGN1cnJlbnRSb3dWYXJpYW50Lng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQueSkgPCBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXSkge1xuICAgICAgICAgICAgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0gPSBjdXJyZW50Q29sdW1uVmFyaWFudC55O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LnkpIDwgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0pIHtcbiAgICAgICAgICAgIGdhcHNbQ09MVU1OU19HQVBfRklFTERdID0gY3VycmVudFJvd1ZhcmlhbnQueTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudENvbHVtblZhcmlhbnQnLCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQueCwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LnkpO1xuICAgICAgICBjdXJyZW50Q29sdW1uVmFyaWFudCA9IGN1cnJlbnRDb2x1bW5WYXJpYW50ICYmIG5leHQoY3VycmVudENvbHVtbkJvcmRlcnMpO1xuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpKSB7XG4gICAgICAgIGlmICghc29ydERpcmVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eV0gPSBcIlJPV1NcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZXNPcmRlcnMsXG4gICAgICAgIGRpcmVjdGlvbnM6IHNvcnREaXJlY3Rpb25zLFxuICAgICAgICBnYXBzXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IENPTFVNTlNfR0FQX0ZJRUxELCBST1dTX0dBUF9GSUVMRCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXBQcm9wZXJ0aWVzVmFsdWVzVG9TdHIgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRWYXJpYW50cyhwYXJlbnRWYXJpYW50LCB2YXJpYW50cywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCByZXZlcnNlZFByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLnJldmVyc2UoKTtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCByb3dzS2V5cyA9IFtdO1xuICAgIGxldCByb3dzR2FwcyA9IFtdO1xuICAgIGxldCBjb2x1bW5zID0gW107XG4gICAgbGV0IGNvbHVtbnNLZXlzID0gW107XG4gICAgbGV0IGNvbHVtbnNHYXBzID0gW107XG4gICAgbGV0IHZhcmlhbnRzTWFwID0ge307XG4gICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgIGxldCB2YXJpYW50S2V5ID0gW107XG4gICAgICAgIGxldCByb3dWYXJpYW50S2V5ID0gW107XG4gICAgICAgIGxldCBjb2x1bW5WYXJpYW50S2V5ID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5SW5kZXggPSAwOyBwcm9wZXJ0eUluZGV4IDwgcHJvcGVydGllcy5sZW5ndGg7IHByb3BlcnR5SW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5IH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xuICAgICAgICAgICAgdmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xuICAgICAgICAgICAgICAgIHJvd1ZhcmlhbnRLZXkucHVzaChgJHtwcm9wZXJ0eUtleX09JHt2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dWYXJpYW50S2V5U3RyID0gWy4uLnJvd1ZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIGlmICghdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0ucHVzaCh2YXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5WYXJpYW50S2V5LnB1c2goYCR7cHJvcGVydHlLZXl9PSR7dmFyaWFudC52YXJpYW50UHJvcGVydGllc1twcm9wZXJ0eUtleV19YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW2NvbHVtblZhcmlhbnRLZXlTdHJdLnB1c2godmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm93VmFyaWFudEtleVN0ciA9IFsuLi5yb3dWYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcbiAgICAgICAgdmFyaWFudHNNYXBbW3Jvd1ZhcmlhbnRLZXlTdHIsIGNvbHVtblZhcmlhbnRLZXlTdHJdLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xuICAgICAgICB2YXJpYW50c01hcFt2YXJpYW50S2V5LnJldmVyc2UoKS5qb2luKCcsICcpXSA9IFt2YXJpYW50XTtcbiAgICB9XG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5LCB2YWx1ZXM6IHByb3BlcnR5VmFsdWVzIH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiUk9XU1wiKSB7XG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByb3dzID0gcHJvcGVydHlWYWx1ZXMubWFwKChwcm9wZXJ0eVZhbHVlKSA9PiAoW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgICAgIHJvd3NLZXlzID0gcm93cy5tYXAobWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZFByb3BlcnR5VmFsdWVzID0gcm93cztcbiAgICAgICAgICAgICAgICByb3dzID0gW107XG4gICAgICAgICAgICAgICAgcm93c0tleXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wZXJ0eVZhbHVlc1t2YWx1ZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93S2V5ID0gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbcm93S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3NLZXlzLnB1c2gocm93S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzID0gcHJvcGVydHlWYWx1ZXMubWFwKCgpID0+IGdhcHNbcHJvcGVydHlLZXldKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cyA9IGNvbHVtbnMubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IGNvbHVtbnM7XG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuZXN0ZWRJbmRleCA9IDA7IG5lc3RlZEluZGV4IDwgbmVzdGVkUHJvcGVydHlWYWx1ZXMubGVuZ3RoOyBuZXN0ZWRJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZXNbdmFsdWVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5lc3RlZFByb3BlcnR5VmFsdWVzW25lc3RlZEluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbktleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRzTWFwW2NvbHVtbktleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cy5wdXNoKGNvbHVtbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29sdW1uc01heFdpZHRocyA9IFtdO1xuICAgIGxldCBwcmV2Um93VmFsdWVzID0gbnVsbDtcbiAgICBsZXQgcHJldkNvbHVtblZhbHVlcyA9IG51bGw7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XG4gICAgICAgIGlmIChwcmV2Um93VmFsdWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcm93c1tyb3dJbmRleF0ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBrZXk6IHJvd0tleSwgdmFsdWU6IHJvd1ZhbHVlIH0gPSByb3dzW3Jvd0luZGV4XVtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHByZXZSb3dWYWx1ZXNbaW5kZXhdLmtleSA9PT0gcm93S2V5ICYmIHByZXZSb3dWYWx1ZXNbaW5kZXhdLnZhbHVlICE9PSByb3dWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByb3dzR2Fwc1tyb3dJbmRleCAtIDFdID0gZ2Fwc1tyb3dLZXldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJldlJvd1ZhbHVlcyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgIH1cbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgaWYgKHByZXZDb2x1bW5WYWx1ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zW2NvbHVtbkluZGV4XS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleTogY29sdW1uS2V5LCB2YWx1ZTogY29sdW1uVmFsdWUgfSA9IGNvbHVtbnNbY29sdW1uSW5kZXhdW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkNvbHVtblZhbHVlc1tpbmRleF0ua2V5ID09PSBjb2x1bW5LZXkgJiYgcHJldkNvbHVtblZhbHVlc1tpbmRleF0udmFsdWUgIT09IGNvbHVtblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzW2NvbHVtbkluZGV4IC0gMV0gPSBnYXBzW2NvbHVtbktleV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2Q29sdW1uVmFsdWVzID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IGNvbHVtblZhcmlhbnRzID0gdmFyaWFudHNNYXBbY29sdW1uc0tleXNbY29sdW1uSW5kZXhdXTtcbiAgICAgICAgbGV0IG1heENvbHVtbldpZHRoID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIGNvbHVtblZhcmlhbnRzKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFudC53aWR0aCA+IG1heENvbHVtbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50LndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdID0gbWF4Q29sdW1uV2lkdGg7XG4gICAgfVxuICAgIGxldCB4Q29vcmQgPSBnYXBzW1JPV1NfR0FQX0ZJRUxEXTtcbiAgICBsZXQgeUNvb3JkID0gZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF07XG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJvd3MucHVzaChudWxsKTtcbiAgICB9XG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChudWxsKTtcbiAgICB9XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XG4gICAgICAgIGxldCBtYXhSb3dIZWlnaHQgPSAwO1xuICAgICAgICBsZXQgbWF4Q29sdW1uV2lkdGggPSAwO1xuICAgICAgICBsZXQgaXNFbXB0eVJvdyA9IHRydWU7XG4gICAgICAgIHhDb29yZCA9IGdhcHNbUk9XU19HQVBfRklFTERdO1xuICAgICAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YXJpYW50S2V5ID0gbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyKFsuLi4ocm93IHx8IFtdKSwgLi4uKGNvbHVtbiB8fCBbXSldKTtcbiAgICAgICAgICAgIGNvbnN0IFt2YXJpYW50XSA9IHZhcmlhbnRzTWFwW3ZhcmlhbnRLZXldIHx8IFtdO1xuICAgICAgICAgICAgaWYgKHZhcmlhbnQpIHtcbiAgICAgICAgICAgICAgICBpc0VtcHR5Um93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnQuaGVpZ2h0ID4gbWF4Um93SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFJvd0hlaWdodCA9IHZhcmlhbnQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXJpYW50LnggPSB4Q29vcmQ7XG4gICAgICAgICAgICAgICAgdmFyaWFudC55ID0geUNvb3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgeENvb3JkICs9IGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCh2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQud2lkdGgpID4gbWF4Q29sdW1uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50ID09PSBudWxsIHx8IHZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhbnQud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uc0dhcHNbY29sdW1uSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbXB0eVJvdykge1xuICAgICAgICAgICAgeUNvb3JkICs9IG1heFJvd0hlaWdodDtcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCAhPT0gcm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgeUNvb3JkICs9IHJvd3NHYXBzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4Q29sdW1uV2lkdGggPiAwKSB7XG4gICAgICAgICAgICB4Q29vcmQgKz0gbWF4Q29sdW1uV2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyZW50VmFyaWFudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoeENvb3JkICsgZ2Fwc1tST1dTX0dBUF9GSUVMRF0sIHlDb29yZCArIGdhcHNbQ09MVU1OU19HQVBfRklFTERdKTtcbn1cbjtcbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5kUm93R2FwKHByZXZWYXJpYW50LCB2YXJpYW50LCB2YXJpYW50cykge1xuICAgIGxldCBnYXAgPSB2YXJpYW50LnkgLSBwcmV2VmFyaWFudC55IC0gcHJldlZhcmlhbnQuaGVpZ2h0O1xuICAgIGxldCBib3JkZXJzID0ge1xuICAgICAgICB4RnJvbTogMCxcbiAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICB5QmVmb3JlOiB2YXJpYW50LnkgLSAxXG4gICAgfTtcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcbiAgICBsZXQgcm9vdCA9IHByZXZWYXJpYW50O1xuICAgIHdoaWxlIChyb290KSB7XG4gICAgICAgIGNvbnN0IG5ld0dhcCA9IHZhcmlhbnQueSAtIHJvb3QueSAtIHJvb3QuaGVpZ2h0O1xuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVycyA9IHtcbiAgICAgICAgICAgIHhGcm9tOiByb290LnggKyByb290LndpZHRoLFxuICAgICAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXG4gICAgICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIHlCZWZvcmU6IHZhcmlhbnQueSAtIGdhcFxuICAgICAgICB9O1xuICAgICAgICByb290ID0gbmV4dChib3JkZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIGdhcCA8IDAgPyAwIDogZ2FwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb2x1bW5HYXAocHJldlZhcmlhbnQsIHZhcmlhbnQsIHZhcmlhbnRzKSB7XG4gICAgbGV0IGdhcCA9IHZhcmlhbnQueCAtIHByZXZWYXJpYW50LnggLSBwcmV2VmFyaWFudC53aWR0aDtcbiAgICBsZXQgYm9yZGVycyA9IHtcbiAgICAgICAgeEZyb206IHByZXZWYXJpYW50LngsXG4gICAgICAgIHlGcm9tOiAwLFxuICAgICAgICB4QmVmb3JlOiB2YXJpYW50LnggLSAxLFxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgIH07XG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XG4gICAgbGV0IHJvb3QgPSBwcmV2VmFyaWFudDtcbiAgICB3aGlsZSAocm9vdCkge1xuICAgICAgICBjb25zdCBuZXdHYXAgPSB2YXJpYW50LnggLSByb290LnggLSByb290LndpZHRoO1xuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVycyA9IHtcbiAgICAgICAgICAgIHhGcm9tOiBwcmV2VmFyaWFudC54LFxuICAgICAgICAgICAgeUZyb206IHJvb3QueSArIHJvb3QuaGVpZ2h0LFxuICAgICAgICAgICAgeEJlZm9yZTogdmFyaWFudC54IC0gZ2FwLFxuICAgICAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgICAgICAgfTtcbiAgICAgICAgcm9vdCA9IG5leHQoYm9yZGVycyk7XG4gICAgfVxuICAgIHJldHVybiBnYXAgPCAwID8gMCA6IGdhcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJvcmRlcnMpIHtcbiAgICAgICAgY29uc3QgeyB4RnJvbSwgeUZyb20sIHhCZWZvcmUsIHlCZWZvcmUsIHlNYXgsIHlNaW4sIHhNYXgsIHhNaW4gfSA9IGJvcmRlcnM7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBsZXQgeE1pblZhbHVlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCB5TWluVmFsdWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFudC54ID49IHhGcm9tICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudC55ID49IHlGcm9tICYmXG4gICAgICAgICAgICAgICAgdmFyaWFudC54IDw9IHhCZWZvcmUgJiZcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPD0geUJlZm9yZSkge1xuICAgICAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHhNaW4gJiYgeU1pbiAmJiAodmFyaWFudC54ICsgdmFyaWFudC55KSA8ICh4TWluVmFsdWUgKyB5TWluVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4TWluICYmIHlNYXggJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPj0geU1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeU1pbiAmJiB4TWF4ICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54ID49IHhNaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhNaW4gJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPCB5TWluVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5TWluICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54IDwgeE1pblZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyaWFudC54IDw9IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPD0geU1pblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YXJpYW50O1xuICAgICAgICAgICAgICAgICAgICB4TWluVmFsdWUgPSB2YXJpYW50Lng7XG4gICAgICAgICAgICAgICAgICAgIHlNaW5WYWx1ZSA9IHZhcmlhbnQueTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJvb3RQcm9wZXJ0aWVzVmFsdWVzLCBjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xuICAgICAgICBpZiAoIWN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4geyBrZXlzOiBbXSwgdmFsdWVzOiB7fSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpKSB7XG4gICAgICAgICAgICBpZiAocm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XSAhPT0gY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBbcm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnB1c2goY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsga2V5cywgdmFsdWVzIH07XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJlRm4sIHJvb3QsIHZhcmlhbnQpIHtcbiAgICByZXR1cm4gY29tcGFyZUZuKHJvb3QudmFyaWFudFByb3BlcnRpZXMsIHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC52YXJpYW50UHJvcGVydGllcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsbERpcmVjdGlvbnMocHJvcGVydGllcywgZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChkaXJlY3Rpb25zLCBwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBkaXJlY3Rpb25zW3Byb3BlcnR5XSA9IGRpcmVjdGlvbjtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XG4gICAgfSwge30pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihwcm9wZXJ0aWVzVmFsdWVzKSB7XG4gICAgcmV0dXJuIHByb3BlcnRpZXNWYWx1ZXMubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7a2V5fT0ke3ZhbHVlfWApLmpvaW4oJywgJyk7XG59XG4iLCJpbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0aW5nXCI7XG5leHBvcnQgeyBzb3J0VmFyaWFudHMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=