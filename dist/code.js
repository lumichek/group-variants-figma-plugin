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
                    console.log('COL GAP', gaps[propertyKey], propertyKey, propertyValues[valueIndex], [...columns], [...columnsGaps], [...nestedPropertyValues]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNPO0FBQ1Asa0NBQWtDLGFBQWEsUUFBUSxJQUFJLEdBQUcsTUFBTTtBQUNwRTs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUMxQiIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2ZpZ21hQ29udHJvbGxlci50c1wiKTtcbiIsImV4cG9ydCBjb25zdCBDT01QT05FTlRfU0VUX1RZUEUgPSAnQ09NUE9ORU5UX1NFVCc7XHJcbmV4cG9ydCBjb25zdCBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgPSAnVkFSSUFOVCc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQgPSAnTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfRVJST1IgPSAnTUVTU0FHRV9FUlJPUic7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCA9ICdNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9WQVJJQU5UUyA9ICdNRVNTQUdFX0dFVF9WQVJJQU5UUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTID0gJ01FU1NBR0VfR0VUX1BST1BFUlRJRVMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfRElSRUNUSU9OUyA9ICdNRVNTQUdFX0dFVF9ESVJFQ1RJT05TJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX0dBUFMgPSAnTUVTU0FHRV9HRVRfR0FQUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTID0gJ01FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTJztcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0FQID0gNDA7XHJcbmV4cG9ydCBjb25zdCBST1dTX0dBUF9GSUVMRCA9ICdST1dTX0dBUF9GSUVMRCc7XHJcbmV4cG9ydCBjb25zdCBDT0xVTU5TX0dBUF9GSUVMRCA9ICdDT0xVTU5TX0dBUF9GSUVMRCc7XHJcbiIsIjtcclxuZXhwb3J0IGNvbnN0IFByb3BlcnRpZXNNYXBUeXBlID0gJ01BUCc7XHJcbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTGlzdFR5cGUgPSAnTElTVCc7XHJcbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsIE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCwgTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQsIE1FU1NBR0VfRVJST1IsIE1FU1NBR0VfR0VUX0RJUkVDVElPTlMsIE1FU1NBR0VfR0VUX0dBUFMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVMsIE1FU1NBR0VfR0VUX1BST1BFUlRJRVNfV0lUSF9WQUxVRVMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjaGVja1NlbGVjdGlvbiwgZ2V0UHJvcGVydGllc0luZm8gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gb25TZWxlY3Rpb25DaGFuZ2UocGFnZSkge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xyXG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVELFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHNlbGVjdGlvbjogW3NlbGVjdGVkTm9kZV0gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xyXG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMsIGRpcmVjdGlvbnMsIGdhcHMsIHZhbHVlc09yZGVycyB9ID0gZ2V0UHJvcGVydGllc0luZm8odmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzV2l0aFZhbHVlcyA9IHByb3BlcnRpZXMubWFwKCh7IGtleSwgdmFsdWVzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlcyA9IHZhbHVlc09yZGVyc1trZXldIHx8IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2FsY3VsYXRlZFZhbHVlcy5sZW5ndGggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxjdWxhdGVkVmFsdWVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFZhbHVlcy5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogY2FsY3VsYXRlZFZhbHVlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVELFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGlyZWN0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9HQVBTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZ2Fwc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJvcGVydGllc1dpdGhWYWx1ZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzV2l0aFZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGdhcHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfRVJST1IsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1FU1NBR0VfRVJST1IgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi4vdmFyaWFudHNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGNoZWNrU2VsZWN0aW9uIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG9uU29ydE1lc3NhZ2UocGFnZSwgcHJvcGVydGllcywgZGlyZWN0aW9ucywgZ2Fwcykge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGNoZWNrU2VsZWN0aW9uKHBhZ2UpO1xyXG4gICAgaWYgKCFpc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcclxuICAgIGNvbnN0IHZhcmlhbnRzUGFyZW50ID0gc2VsZWN0ZWROb2RlO1xyXG4gICAgY29uc3QgdmFyaWFudHMgPSB2YXJpYW50c1BhcmVudC5jaGlsZHJlbjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc29ydFZhcmlhbnRzKHZhcmlhbnRzUGFyZW50LCB2YXJpYW50cywgcHJvcGVydGllcywgeyBkaXJlY3Rpb25zLCBnYXBzIH0pO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0VSUk9SLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUsIFByb3BlcnRpZXNNYXBUeXBlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3R5cGVzJztcclxuaW1wb3J0IHsgZmV0Y2hQcm9wZXJ0aWVzLCBzb3J0UHJvcGVydGllcyB9IGZyb20gJy4uL3Byb3BlcnRpZXNDb250cm9sbGVyJztcclxuaW1wb3J0IHsgQ09NUE9ORU5UX1NFVF9UWVBFIH0gZnJvbSAnLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2VsZWN0aW9uKHBhZ2UpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBwYWdlO1xyXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3NlbGVjdGVkTm9kZV0gPSBzZWxlY3Rpb247XHJcbiAgICBpZiAoc2VsZWN0ZWROb2RlLnR5cGUgIT09IENPTVBPTkVOVF9TRVRfVFlQRSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZE5vZGUuY2hpbGRyZW4ubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0aWVzSW5mbyhjb21wb25lbnRTZXQsIHZhcmlhbnRzKSB7XHJcbiAgICBjb25zdCBbcm9vdF0gPSB2YXJpYW50cztcclxuICAgIGNvbnN0IHByb3BlcnRpZXNMaXN0ID0gZmV0Y2hQcm9wZXJ0aWVzKGNvbXBvbmVudFNldCwgUHJvcGVydGllc0xpc3RUeXBlKTtcclxuICAgIGNvbnN0IHByb3BlcnRpZXNNYXAgPSBmZXRjaFByb3BlcnRpZXMoY29tcG9uZW50U2V0LCBQcm9wZXJ0aWVzTWFwVHlwZSk7XHJcbiAgICBjb25zdCBwcmVwYXJlZFZhcmlhbnRzID0gdmFyaWFudHMubWFwKCh2YXJpYW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdmFyaWFudC54LFxyXG4gICAgICAgICAgICB5OiB2YXJpYW50LnksXHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXJpYW50LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcmlhbnQuaGVpZ2h0LFxyXG4gICAgICAgICAgICB2YXJpYW50UHJvcGVydGllczogT2JqZWN0LmFzc2lnbih7fSwgdmFyaWFudC52YXJpYW50UHJvcGVydGllcylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRpcmVjdGlvbnMsIGdhcHMsIHZhbHVlc09yZGVycyB9ID0gc29ydFByb3BlcnRpZXMocHJlcGFyZWRWYXJpYW50cywgcHJvcGVydGllc01hcCk7XHJcbiAgICBjb25zdCB7IG5hbWU6IHByb3BlcnRpZXNTdHJpbmcgfSA9IHJvb3Q7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzT3JkZXJzID0gcHJvcGVydGllc1N0cmluZy5zcGxpdCgnLCAnKTtcclxuICAgIGxldCBwcm9wZXJ0aWVzTGlzdFNvcnRlZCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eURhdGEgb2YgcHJvcGVydGllc09yZGVycykge1xyXG4gICAgICAgIGNvbnN0IFtwcm9wZXJ0eUtleV0gPSBwcm9wZXJ0eURhdGEuc3BsaXQoJz0nKTtcclxuICAgICAgICBwcm9wZXJ0aWVzTGlzdFNvcnRlZC5wdXNoKHByb3BlcnRpZXNMaXN0LmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gcHJvcGVydHlLZXkpKTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wZXJ0aWVzTGlzdFNvcnRlZC5sZW5ndGggPCBwcm9wZXJ0aWVzTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBwcm9wZXJ0aWVzTGlzdFNvcnRlZCA9IHByb3BlcnRpZXNMaXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzTGlzdFNvcnRlZCxcclxuICAgICAgICBkaXJlY3Rpb25zLFxyXG4gICAgICAgIGdhcHMsXHJcbiAgICAgICAgdmFsdWVzT3JkZXJzXHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXInO1xyXG5pbXBvcnQgeyBvblNvcnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXInO1xyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2NjUgfSk7XHJcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQucHJvcGVydGllcywgaXRlbS5wYXlsb2FkLmRpcmVjdGlvbnMsIGl0ZW0ucGF5bG9hZC5nYXBzKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5maWdtYS5vbigncnVuJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbXNnID0gb25TZWxlY3Rpb25DaGFuZ2UoZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgKEFycmF5LmlzQXJyYXkobXNnKSA/IG1zZyA6IFttc2ddKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUykge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgaXRlbS5wYXlsb2FkLnByb3BlcnRpZXMsIGl0ZW0ucGF5bG9hZC5kaXJlY3Rpb25zLCBpdGVtLnBheWxvYWQuZ2Fwcyk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0TXNnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShzb3J0TXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShpdGVtKTtcclxuICAgIH0pO1xyXG59KTtcclxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xyXG4gICAgaWYgKG1zZy50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XHJcbiAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIG1zZy5wYXlsb2FkLnByb3BlcnRpZXMsIG1zZy5wYXlsb2FkLmRpcmVjdGlvbnMsIG1zZy5wYXlsb2FkLmdhcHMpO1xyXG4gICAgICAgIGlmIChzb3J0TXNnKSB7XHJcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgc29ydFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0aW5nXCI7XHJcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzRnJvbUNvbXBvbmVudCBhcyBmZXRjaFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9wZXJ0aWVzXCI7XHJcbmV4cG9ydCB7IHNvcnRQcm9wZXJ0aWVzLCBmZXRjaFByb3BlcnRpZXMgfTtcclxuIiwiaW1wb3J0IHsgUHJvcGVydGllc0xpc3RUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3R5cGVzJztcclxuaW1wb3J0IHsgbWFwUHJvcGVydGllcywgbWFwUHJvcGVydGllc1RvTGlzdCB9IGZyb20gXCIuL21hcHBlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgdHlwZSkge1xyXG4gICAgY29uc3QgcmF3UHJvcGVydGllcyA9IGNvbXBvbmVudC5jb21wb25lbnRQcm9wZXJ0eURlZmluaXRpb25zO1xyXG4gICAgaWYgKHR5cGUgPT09IFByb3BlcnRpZXNMaXN0VHlwZSkge1xyXG4gICAgICAgIHJldHVybiBtYXBQcm9wZXJ0aWVzVG9MaXN0KHJhd1Byb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUFJPUEVSVFlfVkFSSUFOVF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBQcm9wZXJ0aWVzKHJhd1Byb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyYXdQcm9wZXJ0aWVzKS5yZWR1Y2UoKGFjYywgcHJvcGVydHlLZXkpID0+IHtcclxuICAgICAgICBpZiAocmF3UHJvcGVydGllc1twcm9wZXJ0eUtleV0udHlwZSA9PT0gUFJPUEVSVFlfVkFSSUFOVF9UWVBFKSB7XHJcbiAgICAgICAgICAgIGFjY1twcm9wZXJ0eUtleV0gPSByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJhd1Byb3BlcnRpZXMpLnJlZHVjZSgoYWNjLCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcclxuICAgICAgICAgICAgYWNjLnB1c2goe1xyXG4gICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogcmF3UHJvcGVydGllc1twcm9wZXJ0eUtleV0udmFyaWFudE9wdGlvbnNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG59XHJcbiIsImltcG9ydCB7IHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vc29ydFByb3BlcnRpZXNcIjtcclxuaW1wb3J0IHsgc29ydFZhcmlhbnRzIH0gZnJvbSBcIi4vc29ydFZhcmlhbnRzXCI7XHJcbmV4cG9ydCB7IHNvcnRQcm9wZXJ0aWVzLCBzb3J0VmFyaWFudHMgfTtcclxuIiwiaW1wb3J0IHsgUk9XU19HQVBfRklFTEQsIENPTFVNTlNfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY29sbGVjdFByb3BlcnRpZXMsIGNvbXBhcmVQcm9wZXJ0aWVzLCBmaWxsRGlyZWN0aW9ucywgZmluZENvbHVtbkdhcCwgZmluZE5leHRWYXJpYW50LCBmaW5kUm93R2FwIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9wZXJ0aWVzKHZhcmlhbnRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgbGV0IHNvcnREaXJlY3Rpb25zID0ge307XHJcbiAgICBjb25zdCBib3JkZXJzID0ge1xyXG4gICAgICAgIHhGcm9tOiAwLFxyXG4gICAgICAgIHlGcm9tOiAwLFxyXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XHJcbiAgICBjb25zdCByb290Q29sdW1ucyA9IG5leHQoe1xyXG4gICAgICAgIHhGcm9tOiAwLFxyXG4gICAgICAgIHlGcm9tOiAwLFxyXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHhNaW46IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJldlJvb3RDb2x1bW5zID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogcm9vdENvbHVtbnMueSAtIDEsXHJcbiAgICAgICAgeE1pbjogdHJ1ZSxcclxuICAgICAgICB5TWF4OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbHVtbnNCb3JkZXJzWUZyb20gPSBwcmV2Um9vdENvbHVtbnMgPyAocHJldlJvb3RDb2x1bW5zLnkgKyBwcmV2Um9vdENvbHVtbnMuaGVpZ2h0KSA6IDA7XHJcbiAgICBjb25zdCByb290Um93cyA9IG5leHQoe1xyXG4gICAgICAgIHhGcm9tOiAwLFxyXG4gICAgICAgIHlGcm9tOiAwLFxyXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHlNaW46IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJldlJvb3RSb3dzID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogcm9vdFJvd3MueCAtIDEsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeU1pbjogdHJ1ZSxcclxuICAgICAgICB4TWF4OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvd3NCb3JkZXJzWEZyb20gPSBwcmV2Um9vdFJvd3MgPyAocHJldlJvb3RSb3dzLnggKyBwcmV2Um9vdFJvd3Mud2lkdGgpIDogMDtcclxuICAgIGNvbnN0IGdhcHMgPSB7XHJcbiAgICAgICAgW1JPV1NfR0FQX0ZJRUxEXTogcm9vdFJvd3MueCxcclxuICAgICAgICBbQ09MVU1OU19HQVBfRklFTERdOiByb290Q29sdW1ucy55XHJcbiAgICB9O1xyXG4gICAgbGV0IGN1cnJlbnRDb2x1bW5Cb3JkZXJzID0gYm9yZGVycztcclxuICAgIGxldCBjdXJyZW50Q29sdW1uVmFyaWFudCA9IHJvb3RDb2x1bW5zO1xyXG4gICAgbGV0IGN1cnJlbnRSb3dCb3JkZXJzID0gYm9yZGVycztcclxuICAgIGxldCBjdXJyZW50Um93VmFyaWFudCA9IHJvb3RSb3dzO1xyXG4gICAgbGV0IHByZXZDb2x1bW5WYXJpYW50ID0gcm9vdENvbHVtbnM7XHJcbiAgICBsZXQgcHJldlJvd1ZhcmlhbnQgPSByb290Um93cztcclxuICAgIGxldCB2YWx1ZXNPcmRlcnMgPSB7fTtcclxuICAgIHdoaWxlIChjdXJyZW50Q29sdW1uVmFyaWFudCB8fCBjdXJyZW50Um93VmFyaWFudCkge1xyXG4gICAgICAgIGN1cnJlbnRDb2x1bW5Cb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Q29sdW1uQm9yZGVycyksIHsgeE1pbjogdHJ1ZSwgeUZyb206IGNvbHVtbnNCb3JkZXJzWUZyb20sIHhGcm9tOiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54KSB8fCAwKSArICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LndpZHRoKSB8fCAwKSB9KTtcclxuICAgICAgICBjdXJyZW50Um93Qm9yZGVycyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudFJvd0JvcmRlcnMpLCB7IHlNaW46IHRydWUsIHhGcm9tOiByb3dzQm9yZGVyc1hGcm9tLCB5RnJvbTogKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueSkgfHwgMCkgKyAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC5oZWlnaHQpIHx8IDApIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBjb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBjb25zdCB7IGtleXM6IGNvbHVtblByb3BlcnRpZXMsIHZhbHVlczogY29sdW1uUHJvcGVydGllc1ZhbHVlcywgfSA9IGNvbGxlY3RQcm9wZXJ0aWVzKGNvbXBhcmF0b3IsIHJvb3RDb2x1bW5zLCBjdXJyZW50Q29sdW1uVmFyaWFudCk7XHJcbiAgICAgICAgY29uc3QgeyBrZXlzOiByb3dzUHJvcGVydGllcywgdmFsdWVzOiByb3dQcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdFJvd3MsIGN1cnJlbnRSb3dWYXJpYW50KTtcclxuICAgICAgICBzb3J0RGlyZWN0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWxsRGlyZWN0aW9ucyhyb3dzUHJvcGVydGllcywgXCJST1dTXCIpKSwgZmlsbERpcmVjdGlvbnMoY29sdW1uUHJvcGVydGllcywgXCJDT0xVTU5TXCIpKSwgc29ydERpcmVjdGlvbnMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHlLZXkgb2Ygcm93c1Byb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCEoKF9hID0gcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiQ09MVU1OU1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0gPSByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSB8fCBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0ucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHlLZXkgb2YgY29sdW1uUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoISgoX2IgPSBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJST1dTXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3dQcm9wZXJ0eSBvZiByb3dzUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoIWdhcHNbcm93UHJvcGVydHldKSB7XHJcbiAgICAgICAgICAgICAgICBnYXBzW3Jvd1Byb3BlcnR5XSA9IGZpbmRSb3dHYXAocHJldlJvd1ZhcmlhbnQsIGN1cnJlbnRSb3dWYXJpYW50LCB2YXJpYW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW5Qcm9wZXJ0eSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgIGdhcHNbY29sdW1uUHJvcGVydHldID0gZmluZENvbHVtbkdhcChwcmV2Q29sdW1uVmFyaWFudCwgY3VycmVudENvbHVtblZhcmlhbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2Q29sdW1uVmFyaWFudCA9IGN1cnJlbnRDb2x1bW5WYXJpYW50O1xyXG4gICAgICAgIHByZXZSb3dWYXJpYW50ID0gY3VycmVudFJvd1ZhcmlhbnQ7XHJcbiAgICAgICAgaWYgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQueCkgPCBnYXBzW1JPV1NfR0FQX0ZJRUxEXSkge1xyXG4gICAgICAgICAgICBnYXBzW1JPV1NfR0FQX0ZJRUxEXSA9IGN1cnJlbnRDb2x1bW5WYXJpYW50Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LngpIDwgZ2Fwc1tST1dTX0dBUF9GSUVMRF0pIHtcclxuICAgICAgICAgICAgZ2Fwc1tST1dTX0dBUF9GSUVMRF0gPSBjdXJyZW50Um93VmFyaWFudC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC55KSA8IGdhcHNbQ09MVU1OU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbQ09MVU1OU19HQVBfRklFTERdID0gY3VycmVudENvbHVtblZhcmlhbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueSkgPCBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXSkge1xyXG4gICAgICAgICAgICBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXSA9IGN1cnJlbnRSb3dWYXJpYW50Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50Q29sdW1uVmFyaWFudCcsIGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54LCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQueSk7XHJcbiAgICAgICAgY3VycmVudENvbHVtblZhcmlhbnQgPSBjdXJyZW50Q29sdW1uVmFyaWFudCAmJiBuZXh0KGN1cnJlbnRDb2x1bW5Cb3JkZXJzKTtcclxuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgIGlmICghc29ydERpcmVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5XSA9IFwiUk9XU1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzT3JkZXJzLFxyXG4gICAgICAgIGRpcmVjdGlvbnM6IHNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgIGdhcHNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MVU1OU19HQVBfRklFTEQsIFJPV1NfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbWFwUHJvcGVydGllc1ZhbHVlc1RvU3RyIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRWYXJpYW50cyhwYXJlbnRWYXJpYW50LCB2YXJpYW50cywgcHJvcGVydGllcywgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkaXJlY3Rpb25zLCBnYXBzIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgcmV2ZXJzZWRQcm9wZXJ0aWVzID0gcHJvcGVydGllcy5yZXZlcnNlKCk7XHJcbiAgICBsZXQgcm93cyA9IFtdO1xyXG4gICAgbGV0IHJvd3NLZXlzID0gW107XHJcbiAgICBsZXQgcm93c0dhcHMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zID0gW107XHJcbiAgICBsZXQgY29sdW1uc0tleXMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgbGV0IHZhcmlhbnRzTWFwID0ge307XHJcbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcclxuICAgICAgICBsZXQgdmFyaWFudEtleSA9IFtdO1xyXG4gICAgICAgIGxldCByb3dWYXJpYW50S2V5ID0gW107XHJcbiAgICAgICAgbGV0IGNvbHVtblZhcmlhbnRLZXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eUluZGV4ID0gMDsgcHJvcGVydHlJbmRleCA8IHByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHByb3BlcnR5S2V5IH0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5SW5kZXhdO1xyXG4gICAgICAgICAgICB2YXJpYW50S2V5LnB1c2goYCR7cHJvcGVydHlLZXl9PSR7dmFyaWFudC52YXJpYW50UHJvcGVydGllc1twcm9wZXJ0eUtleV19YCk7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJST1dTXCIpIHtcclxuICAgICAgICAgICAgICAgIHJvd1ZhcmlhbnRLZXkucHVzaChgJHtwcm9wZXJ0eUtleX09JHt2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd1ZhcmlhbnRLZXlTdHIgPSBbLi4ucm93VmFyaWFudEtleV0ucmV2ZXJzZSgpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhbnRzTWFwW3Jvd1ZhcmlhbnRLZXlTdHJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbcm93VmFyaWFudEtleVN0cl0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzTWFwW3Jvd1ZhcmlhbnRLZXlTdHJdLnB1c2godmFyaWFudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIkNPTFVNTlNcIikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudEtleVN0ciA9IFsuLi5jb2x1bW5WYXJpYW50S2V5XS5yZXZlcnNlKCkuam9pbignLCAnKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50c01hcFtjb2x1bW5WYXJpYW50S2V5U3RyXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHNNYXBbY29sdW1uVmFyaWFudEtleVN0cl0ucHVzaCh2YXJpYW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3dWYXJpYW50S2V5U3RyID0gWy4uLnJvd1ZhcmlhbnRLZXldLnJldmVyc2UoKS5qb2luKCcsICcpO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblZhcmlhbnRLZXlTdHIgPSBbLi4uY29sdW1uVmFyaWFudEtleV0ucmV2ZXJzZSgpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgdmFyaWFudHNNYXBbW3Jvd1ZhcmlhbnRLZXlTdHIsIGNvbHVtblZhcmlhbnRLZXlTdHJdLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xyXG4gICAgICAgIHZhcmlhbnRzTWFwW3ZhcmlhbnRLZXkucmV2ZXJzZSgpLmpvaW4oJywgJyldID0gW3ZhcmlhbnRdO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXksIHZhbHVlczogcHJvcGVydHlWYWx1ZXMgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgICAgICByb3dzS2V5cyA9IHJvd3MubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSByb3dzR2FwcztcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJvd3NLZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVzW3ZhbHVlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0tleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbcm93S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzS2V5cy5wdXNoKHJvd0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NHYXBzW3Jvd3NHYXBzLmxlbmd0aCAtIDFdID0gZ2Fwc1twcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiQ09MVU1OU1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IHByb3BlcnR5VmFsdWVzLm1hcCgocHJvcGVydHlWYWx1ZSkgPT4gW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cyA9IGNvbHVtbnMubWFwKG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSBjb2x1bW5zR2FwcztcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnNLZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWVJbmRleCA9IDA7IHZhbHVlSW5kZXggPCBwcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IHZhbHVlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG5lc3RlZEluZGV4ID0gMDsgbmVzdGVkSW5kZXggPCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IG5lc3RlZEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcHJvcGVydHlLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVzW3ZhbHVlSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNbbmVzdGVkSW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbktleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihjb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudHNNYXBbY29sdW1uS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zS2V5cy5wdXNoKGNvbHVtbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDT0wgR0FQJywgZ2Fwc1twcm9wZXJ0eUtleV0sIHByb3BlcnR5S2V5LCBwcm9wZXJ0eVZhbHVlc1t2YWx1ZUluZGV4XSwgWy4uLmNvbHVtbnNdLCBbLi4uY29sdW1uc0dhcHNdLCBbLi4ubmVzdGVkUHJvcGVydHlWYWx1ZXNdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zR2Fwc1tjb2x1bW5zR2Fwcy5sZW5ndGggLSAxXSA9IGdhcHNbcHJvcGVydHlLZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29sdW1uc01heFdpZHRocyA9IFtdO1xyXG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNvbHVtbnMubGVuZ3RoOyBjb2x1bW5JbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudHMgPSB2YXJpYW50c01hcFtjb2x1bW5zS2V5c1tjb2x1bW5JbmRleF1dO1xyXG4gICAgICAgIGxldCBtYXhDb2x1bW5XaWR0aCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIGNvbHVtblZhcmlhbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXJpYW50LndpZHRoID4gbWF4Q29sdW1uV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG1heENvbHVtbldpZHRoID0gdmFyaWFudC53aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2x1bW5zTWF4V2lkdGhzW2NvbHVtbkluZGV4XSA9IG1heENvbHVtbldpZHRoO1xyXG4gICAgfVxyXG4gICAgbGV0IHhDb29yZCA9IGdhcHNbUk9XU19HQVBfRklFTERdO1xyXG4gICAgbGV0IHlDb29yZCA9IGdhcHNbQ09MVU1OU19HQVBfRklFTERdO1xyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcm93cy5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IG1heFJvd0hlaWdodCA9IDA7XHJcbiAgICAgICAgbGV0IG1heENvbHVtbldpZHRoID0gMDtcclxuICAgICAgICBsZXQgaXNFbXB0eVJvdyA9IHRydWU7XHJcbiAgICAgICAgeENvb3JkID0gZ2Fwc1tST1dTX0dBUF9GSUVMRF07XHJcbiAgICAgICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNvbHVtbnMubGVuZ3RoOyBjb2x1bW5JbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgdmFyaWFudEtleSA9IG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihbLi4uKHJvdyB8fCBbXSksIC4uLihjb2x1bW4gfHwgW10pXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IFt2YXJpYW50XSA9IHZhcmlhbnRzTWFwW3ZhcmlhbnRLZXldIHx8IFtdO1xyXG4gICAgICAgICAgICBpZiAodmFyaWFudCkge1xyXG4gICAgICAgICAgICAgICAgaXNFbXB0eVJvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnQuaGVpZ2h0ID4gbWF4Um93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Um93SGVpZ2h0ID0gdmFyaWFudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnggPSB4Q29vcmQ7XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPSB5Q29vcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbnNNYXhXaWR0aHNbY29sdW1uSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uc01heFdpZHRoc1tjb2x1bW5JbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC53aWR0aCkgPiBtYXhDb2x1bW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heENvbHVtbldpZHRoID0gdmFyaWFudCA9PT0gbnVsbCB8fCB2YXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYW50LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCAhPT0gY29sdW1ucy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uc0dhcHNbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNFbXB0eVJvdykge1xyXG4gICAgICAgICAgICB5Q29vcmQgKz0gbWF4Um93SGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAocm93SW5kZXggIT09IHJvd3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgeUNvb3JkICs9IHJvd3NHYXBzW3Jvd0luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4Q29sdW1uV2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHhDb29yZCArPSBtYXhDb2x1bW5XaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYXJlbnRWYXJpYW50LnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyh4Q29vcmQgKyBnYXBzW1JPV1NfR0FQX0ZJRUxEXSwgeUNvb3JkICsgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0pO1xyXG59XHJcbjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRSb3dHYXAocHJldlZhcmlhbnQsIHZhcmlhbnQsIHZhcmlhbnRzKSB7XHJcbiAgICBsZXQgZ2FwID0gdmFyaWFudC55IC0gcHJldlZhcmlhbnQueSAtIHByZXZWYXJpYW50LmhlaWdodDtcclxuICAgIGxldCBib3JkZXJzID0ge1xyXG4gICAgICAgIHhGcm9tOiAwLFxyXG4gICAgICAgIHlGcm9tOiBwcmV2VmFyaWFudC55LFxyXG4gICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgIHlCZWZvcmU6IHZhcmlhbnQueSAtIDFcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcclxuICAgIGxldCByb290ID0gcHJldlZhcmlhbnQ7XHJcbiAgICB3aGlsZSAocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0dhcCA9IHZhcmlhbnQueSAtIHJvb3QueSAtIHJvb3QuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChuZXdHYXAgPCBnYXApIHtcclxuICAgICAgICAgICAgZ2FwID0gbmV3R2FwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXJzID0ge1xyXG4gICAgICAgICAgICB4RnJvbTogcm9vdC54ICsgcm9vdC53aWR0aCxcclxuICAgICAgICAgICAgeUZyb206IHByZXZWYXJpYW50LnksXHJcbiAgICAgICAgICAgIHhCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgICAgICB5QmVmb3JlOiB2YXJpYW50LnkgLSBnYXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJvb3QgPSBuZXh0KGJvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdhcCA8IDAgPyAwIDogZ2FwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29sdW1uR2FwKHByZXZWYXJpYW50LCB2YXJpYW50LCB2YXJpYW50cykge1xyXG4gICAgbGV0IGdhcCA9IHZhcmlhbnQueCAtIHByZXZWYXJpYW50LnggLSBwcmV2VmFyaWFudC53aWR0aDtcclxuICAgIGxldCBib3JkZXJzID0ge1xyXG4gICAgICAgIHhGcm9tOiBwcmV2VmFyaWFudC54LFxyXG4gICAgICAgIHlGcm9tOiAwLFxyXG4gICAgICAgIHhCZWZvcmU6IHZhcmlhbnQueCAtIDEsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcclxuICAgIGxldCByb290ID0gcHJldlZhcmlhbnQ7XHJcbiAgICB3aGlsZSAocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0dhcCA9IHZhcmlhbnQueCAtIHJvb3QueCAtIHJvb3Qud2lkdGg7XHJcbiAgICAgICAgaWYgKG5ld0dhcCA8IGdhcCkge1xyXG4gICAgICAgICAgICBnYXAgPSBuZXdHYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlcnMgPSB7XHJcbiAgICAgICAgICAgIHhGcm9tOiBwcmV2VmFyaWFudC54LFxyXG4gICAgICAgICAgICB5RnJvbTogcm9vdC55ICsgcm9vdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHhCZWZvcmU6IHZhcmlhbnQueCAtIGdhcCxcclxuICAgICAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJvb3QgPSBuZXh0KGJvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdhcCA8IDAgPyAwIDogZ2FwO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV4dFZhcmlhbnQodmFyaWFudHMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYm9yZGVycykge1xyXG4gICAgICAgIGNvbnN0IHsgeEZyb20sIHlGcm9tLCB4QmVmb3JlLCB5QmVmb3JlLCB5TWF4LCB5TWluLCB4TWF4LCB4TWluIH0gPSBib3JkZXJzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGxldCB4TWluVmFsdWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBsZXQgeU1pblZhbHVlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXJpYW50LnggPj0geEZyb20gJiZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQueSA+PSB5RnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudC54IDw9IHhCZWZvcmUgJiZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQueSA8PSB5QmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHhNaW4gJiYgeU1pbiAmJiAodmFyaWFudC54ICsgdmFyaWFudC55KSA8ICh4TWluVmFsdWUgKyB5TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4TWluICYmIHlNYXggJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPj0geU1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeU1pbiAmJiB4TWF4ICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54ID49IHhNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhNaW4gJiYgKHZhcmlhbnQueCA8IHhNaW5WYWx1ZSB8fCB2YXJpYW50LnggPT09IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPCB5TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5TWluICYmICh2YXJpYW50LnkgPCB5TWluVmFsdWUgfHwgdmFyaWFudC55ID09PSB5TWluVmFsdWUgJiYgdmFyaWFudC54IDwgeE1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyaWFudC54IDw9IHhNaW5WYWx1ZSAmJiB2YXJpYW50LnkgPD0geU1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhcmlhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgeE1pblZhbHVlID0gdmFyaWFudC54O1xyXG4gICAgICAgICAgICAgICAgICAgIHlNaW5WYWx1ZSA9IHZhcmlhbnQueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufVxyXG47XHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJvb3RQcm9wZXJ0aWVzVmFsdWVzLCBjdXJyZW50UHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgICAgIGlmICghY3VycmVudFByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5czogW10sIHZhbHVlczoge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChyb290UHJvcGVydGllc1ZhbHVlc1trZXldICE9PSBjdXJyZW50UHJvcGVydGllc1ZhbHVlc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IFtyb290UHJvcGVydGllc1ZhbHVlc1trZXldXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnB1c2goY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsga2V5cywgdmFsdWVzIH07XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJlRm4sIHJvb3QsIHZhcmlhbnQpIHtcclxuICAgIHJldHVybiBjb21wYXJlRm4ocm9vdC52YXJpYW50UHJvcGVydGllcywgdmFyaWFudCA9PT0gbnVsbCB8fCB2YXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbERpcmVjdGlvbnMocHJvcGVydGllcywgZGlyZWN0aW9uKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydGllcy5yZWR1Y2UoKGRpcmVjdGlvbnMsIHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uc1twcm9wZXJ0eV0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbnM7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXNWYWx1ZXNUb1N0cihwcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydGllc1ZhbHVlcy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7dmFsdWV9YCkuam9pbignLCAnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zb3J0aW5nXCI7XHJcbmV4cG9ydCB7IHNvcnRWYXJpYW50cyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9