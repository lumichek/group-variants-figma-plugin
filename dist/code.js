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
    catch (err) {
        throw new Error(err);
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
/* harmony import */ var _variantsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variantsController */ "./src/plugin/variantsController.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/plugin/events/utils.ts");


function onSortMessage(page, properties, directions, gaps) {
    const isSelected = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkSelection"])(page);
    if (!isSelected) {
        return;
    }
    const { selection: [selectedNode] } = figma.currentPage;
    const variantsParent = selectedNode;
    const variants = variantsParent.children;
    try {
        Object(_variantsController__WEBPACK_IMPORTED_MODULE_0__["sortVariants"])(variantsParent, variants, properties, { directions, gaps });
        return null;
    }
    catch (error) {
        throw new Error(error);
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
                        const row = [
                            {
                                key: propertyKey,
                                value: propertyValues[valueIndex]
                            },
                            ...nestedPropertyValues[nestedIndex]
                        ];
                        const rowVariant = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findVariantByPropertyValue"])(variants, row);
                        if (rowVariant) {
                            rows.push(row);
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
            }
            else {
                const nestedPropertyValues = columns;
                const nestedPropertyGaps = columnsGaps;
                columns = [];
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
                        const columnVariant = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findVariantByPropertyValue"])(variants, column);
                        if (columnVariant) {
                            columns.push(column);
                            columnsGaps.push(nestedPropertyGaps[nestedIndex]);
                        }
                    }
                    columnsGaps[columnsGaps.length - 1] = gaps[propertyKey];
                }
            }
        }
    }
    const columnsVariants = [];
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const column = columns[columnIndex];
        const columnVariants = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findAllVariantsByPropertyValue"])(variants, column);
        let maxColumnWidth = 0;
        const mapVariants = {};
        for (const variant of columnVariants) {
            let variantKey = [];
            for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
                const { key: propertyKey } = properties[propertyIndex];
                if (directions[propertyKey] === "ROWS") {
                    variantKey.push(`${propertyKey}=${variant.variantProperties[propertyKey]}`);
                }
            }
            mapVariants[variantKey.reverse().join(', ')] = variant;
            if (variant.width > maxColumnWidth) {
                maxColumnWidth = variant.width;
            }
        }
        columnsVariants.push({
            mapVariants,
            variants: columnVariants,
            maxColumnWidth
        });
    }
    let xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
    let yCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["COLUMNS_GAP_FIELD"]];
    let maxXCoord = 0;
    if (rows.length === 0) {
        rows.push(null);
    }
    if (columns.length === 0) {
        columns.push(null);
    }
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        let maxRowHeight = 0;
        let isEmptyRow = true;
        xCoord = gaps[_common_constants__WEBPACK_IMPORTED_MODULE_0__["ROWS_GAP_FIELD"]];
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            let columnVariants;
            let variantKey = '';
            const row = rows[rowIndex];
            const column = columns[columnIndex];
            if (row) {
                variantKey = row.map(({ key, value }) => `${key}=${value}`).join(', ');
            }
            if (!column) {
                columnVariants = variants;
            }
            else {
                columnVariants = columnsVariants[columnIndex];
            }
            if (columnVariants.variants.length > 0) {
                let variant;
                if (!row) {
                    variant = columnVariants.variants[0];
                }
                else {
                    if (variantKey) {
                        variant = columnVariants.mapVariants[variantKey];
                    }
                }
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
                break;
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
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2V2ZW50cy9vblNlbGVjdGlvbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvb25Tb3J0TWVzc2FnZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9ldmVudHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9wcm9wZXJ0aWVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3Byb3BlcnRpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9wcm9wZXJ0aWVzL21hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3NlcnZpY2VzL3NvcnRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3NvcnRQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vc2VydmljZXMvc29ydGluZy9zb3J0VmFyaWFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9zZXJ2aWNlcy9zb3J0aW5nL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdmFyaWFudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDMUIiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9maWdtYUNvbnRyb2xsZXIudHNcIik7XG4iLCJleHBvcnQgY29uc3QgQ09NUE9ORU5UX1NFVF9UWVBFID0gJ0NPTVBPTkVOVF9TRVQnO1xyXG5leHBvcnQgY29uc3QgUFJPUEVSVFlfVkFSSUFOVF9UWVBFID0gJ1ZBUklBTlQnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9DT01QT05FTlRfTk9UX1NFTEVDVEVEID0gJ01FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0VSUk9SID0gJ01FU1NBR0VfRVJST1InO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQgPSAnTUVTU0FHRV9DT01QT05FTlRfU0VMRUNURUQnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfVkFSSUFOVFMgPSAnTUVTU0FHRV9HRVRfVkFSSUFOVFMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfR0VUX0RJUkVDVElPTlMgPSAnTUVTU0FHRV9HRVRfRElSRUNUSU9OUyc7XHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0dFVF9HQVBTID0gJ01FU1NBR0VfR0VUX0dBUFMnO1xyXG5leHBvcnQgY29uc3QgTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyA9ICdNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTJztcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMgPSAnTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyc7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dBUCA9IDQwO1xyXG5leHBvcnQgY29uc3QgUk9XU19HQVBfRklFTEQgPSAnUk9XU19HQVBfRklFTEQnO1xyXG5leHBvcnQgY29uc3QgQ09MVU1OU19HQVBfRklFTEQgPSAnQ09MVU1OU19HQVBfRklFTEQnO1xyXG4iLCI7XHJcbmV4cG9ydCBjb25zdCBQcm9wZXJ0aWVzTWFwVHlwZSA9ICdNQVAnO1xyXG5leHBvcnQgY29uc3QgUHJvcGVydGllc0xpc3RUeXBlID0gJ0xJU1QnO1xyXG4iLCJpbXBvcnQgeyBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTLCBNRVNTQUdFX0NPTVBPTkVOVF9OT1RfU0VMRUNURUQsIE1FU1NBR0VfQ09NUE9ORU5UX1NFTEVDVEVELCBNRVNTQUdFX0dFVF9ESVJFQ1RJT05TLCBNRVNTQUdFX0dFVF9HQVBTLCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTLCBNRVNTQUdFX0dFVF9QUk9QRVJUSUVTX1dJVEhfVkFMVUVTIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24sIGdldFByb3BlcnRpZXNJbmZvIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIG9uU2VsZWN0aW9uQ2hhbmdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBjaGVja1NlbGVjdGlvbihwYWdlKTtcclxuICAgIGlmICghaXNTZWxlY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ09NUE9ORU5UX05PVF9TRUxFQ1RFRCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBzZWxlY3Rpb246IFtzZWxlY3RlZE5vZGVdIH0gPSBmaWdtYS5jdXJyZW50UGFnZTtcclxuICAgIGNvbnN0IHZhcmlhbnRzUGFyZW50ID0gc2VsZWN0ZWROb2RlO1xyXG4gICAgY29uc3QgdmFyaWFudHMgPSB2YXJpYW50c1BhcmVudC5jaGlsZHJlbjtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzLCBkaXJlY3Rpb25zLCBnYXBzLCB2YWx1ZXNPcmRlcnMgfSA9IGdldFByb3BlcnRpZXNJbmZvKHZhcmlhbnRzUGFyZW50LCB2YXJpYW50cyk7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllc1dpdGhWYWx1ZXMgPSBwcm9wZXJ0aWVzLm1hcCgoeyBrZXksIHZhbHVlcyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZXMgPSB2YWx1ZXNPcmRlcnNba2V5XSB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZXMubGVuZ3RoIDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FsY3VsYXRlZFZhbHVlcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRWYWx1ZXMucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGNhbGN1bGF0ZWRWYWx1ZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNRVNTQUdFX0NPTVBPTkVOVF9TRUxFQ1RFRCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfUFJPUEVSVElFUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfRElSRUNUSU9OUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRpcmVjdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfR0FQUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGdhcHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTUVTU0FHRV9HRVRfUFJPUEVSVElFU19XSVRIX1ZBTFVFUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByb3BlcnRpZXNXaXRoVmFsdWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1dpdGhWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBnYXBzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNvcnRWYXJpYW50cyB9IGZyb20gXCIuLi92YXJpYW50c0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY2hlY2tTZWxlY3Rpb24gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gb25Tb3J0TWVzc2FnZShwYWdlLCBwcm9wZXJ0aWVzLCBkaXJlY3Rpb25zLCBnYXBzKSB7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gY2hlY2tTZWxlY3Rpb24ocGFnZSk7XHJcbiAgICBpZiAoIWlzU2VsZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHNlbGVjdGlvbjogW3NlbGVjdGVkTm9kZV0gfSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xyXG4gICAgY29uc3QgdmFyaWFudHNQYXJlbnQgPSBzZWxlY3RlZE5vZGU7XHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHZhcmlhbnRzUGFyZW50LmNoaWxkcmVuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzb3J0VmFyaWFudHModmFyaWFudHNQYXJlbnQsIHZhcmlhbnRzLCBwcm9wZXJ0aWVzLCB7IGRpcmVjdGlvbnMsIGdhcHMgfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb3BlcnRpZXNMaXN0VHlwZSwgUHJvcGVydGllc01hcFR5cGUgfSBmcm9tICcuLi8uLi9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQgeyBmZXRjaFByb3BlcnRpZXMsIHNvcnRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vcHJvcGVydGllc0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBDT01QT05FTlRfU0VUX1RZUEUgfSBmcm9tICcuLy4uLy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZWxlY3Rpb24ocGFnZSkge1xyXG4gICAgY29uc3QgeyBzZWxlY3Rpb24gfSA9IHBhZ2U7XHJcbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbc2VsZWN0ZWROb2RlXSA9IHNlbGVjdGlvbjtcclxuICAgIGlmIChzZWxlY3RlZE5vZGUudHlwZSAhPT0gQ09NUE9ORU5UX1NFVF9UWVBFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkTm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnRpZXNJbmZvKGNvbXBvbmVudFNldCwgdmFyaWFudHMpIHtcclxuICAgIGNvbnN0IFtyb290XSA9IHZhcmlhbnRzO1xyXG4gICAgY29uc3QgcHJvcGVydGllc0xpc3QgPSBmZXRjaFByb3BlcnRpZXMoY29tcG9uZW50U2V0LCBQcm9wZXJ0aWVzTGlzdFR5cGUpO1xyXG4gICAgY29uc3QgcHJvcGVydGllc01hcCA9IGZldGNoUHJvcGVydGllcyhjb21wb25lbnRTZXQsIFByb3BlcnRpZXNNYXBUeXBlKTtcclxuICAgIGNvbnN0IHByZXBhcmVkVmFyaWFudHMgPSB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2YXJpYW50LngsXHJcbiAgICAgICAgICAgIHk6IHZhcmlhbnQueSxcclxuICAgICAgICAgICAgd2lkdGg6IHZhcmlhbnQud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyaWFudC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHZhcmlhbnRQcm9wZXJ0aWVzOiBPYmplY3QuYXNzaWduKHt9LCB2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcywgdmFsdWVzT3JkZXJzIH0gPSBzb3J0UHJvcGVydGllcyhwcmVwYXJlZFZhcmlhbnRzLCBwcm9wZXJ0aWVzTWFwKTtcclxuICAgIGNvbnN0IHsgbmFtZTogcHJvcGVydGllc1N0cmluZyB9ID0gcm9vdDtcclxuICAgIGNvbnN0IHByb3BlcnRpZXNPcmRlcnMgPSBwcm9wZXJ0aWVzU3RyaW5nLnNwbGl0KCcsICcpO1xyXG4gICAgbGV0IHByb3BlcnRpZXNMaXN0U29ydGVkID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5RGF0YSBvZiBwcm9wZXJ0aWVzT3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgW3Byb3BlcnR5S2V5XSA9IHByb3BlcnR5RGF0YS5zcGxpdCgnPScpO1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkLnB1c2gocHJvcGVydGllc0xpc3QuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBwcm9wZXJ0eUtleSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BlcnRpZXNMaXN0U29ydGVkLmxlbmd0aCA8IHByb3BlcnRpZXNMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHByb3BlcnRpZXNMaXN0U29ydGVkID0gcHJvcGVydGllc0xpc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNMaXN0U29ydGVkLFxyXG4gICAgICAgIGRpcmVjdGlvbnMsXHJcbiAgICAgICAgZ2FwcyxcclxuICAgICAgICB2YWx1ZXNPcmRlcnNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTUVTU0FHRV9DSEFOR0VfUFJPUEVSVElFUyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL29uU2VsZWN0aW9uSGFuZGxlcic7XHJcbmltcG9ydCB7IG9uU29ydE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50cy9vblNvcnRNZXNzYWdlSGFuZGxlcic7XHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDY2NSB9KTtcclxuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcclxuICAgIGNvbnN0IG1zZyA9IG9uU2VsZWN0aW9uQ2hhbmdlKGZpZ21hLmN1cnJlbnRQYWdlKTtcclxuICAgIChBcnJheS5pc0FycmF5KG1zZykgPyBtc2cgOiBbbXNnXSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc29ydE1zZyA9IG9uU29ydE1lc3NhZ2UoZmlnbWEuY3VycmVudFBhZ2UsIGl0ZW0ucGF5bG9hZC5wcm9wZXJ0aWVzLCBpdGVtLnBheWxvYWQuZGlyZWN0aW9ucywgaXRlbS5wYXlsb2FkLmdhcHMpO1xyXG4gICAgICAgICAgICBpZiAoc29ydE1zZykge1xyXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoaXRlbSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmZpZ21hLm9uKCdydW4nLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2cgPSBvblNlbGVjdGlvbkNoYW5nZShmaWdtYS5jdXJyZW50UGFnZSk7XHJcbiAgICAoQXJyYXkuaXNBcnJheShtc2cpID8gbXNnIDogW21zZ10pLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNRVNTQUdFX0NIQU5HRV9QUk9QRVJUSUVTKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNc2cgPSBvblNvcnRNZXNzYWdlKGZpZ21hLmN1cnJlbnRQYWdlLCBpdGVtLnBheWxvYWQucHJvcGVydGllcywgaXRlbS5wYXlsb2FkLmRpcmVjdGlvbnMsIGl0ZW0ucGF5bG9hZC5nYXBzKTtcclxuICAgICAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHNvcnRNc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IE1FU1NBR0VfQ0hBTkdFX1BST1BFUlRJRVMpIHtcclxuICAgICAgICBjb25zdCBzb3J0TXNnID0gb25Tb3J0TWVzc2FnZShmaWdtYS5jdXJyZW50UGFnZSwgbXNnLnBheWxvYWQucHJvcGVydGllcywgbXNnLnBheWxvYWQuZGlyZWN0aW9ucywgbXNnLnBheWxvYWQuZ2Fwcyk7XHJcbiAgICAgICAgaWYgKHNvcnRNc2cpIHtcclxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoc29ydE1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBzb3J0UHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3NvcnRpbmdcIjtcclxuaW1wb3J0IHsgZXh0cmFjdFByb3BlcnRpZXNGcm9tQ29tcG9uZW50IGFzIGZldGNoUHJvcGVydGllcyB9IGZyb20gXCIuL3NlcnZpY2VzL3Byb3BlcnRpZXNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIGZldGNoUHJvcGVydGllcyB9O1xyXG4iLCJpbXBvcnQgeyBQcm9wZXJ0aWVzTGlzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXBQcm9wZXJ0aWVzLCBtYXBQcm9wZXJ0aWVzVG9MaXN0IH0gZnJvbSBcIi4vbWFwcGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCB0eXBlKSB7XHJcbiAgICBjb25zdCByYXdQcm9wZXJ0aWVzID0gY29tcG9uZW50LmNvbXBvbmVudFByb3BlcnR5RGVmaW5pdGlvbnM7XHJcbiAgICBpZiAodHlwZSA9PT0gUHJvcGVydGllc0xpc3RUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcFByb3BlcnRpZXNUb0xpc3QocmF3UHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFwUHJvcGVydGllcyhyYXdQcm9wZXJ0aWVzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQUk9QRVJUWV9WQVJJQU5UX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFByb3BlcnRpZXMocmF3UHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJhd1Byb3BlcnRpZXMpLnJlZHVjZSgoYWNjLCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmIChyYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS50eXBlID09PSBQUk9QRVJUWV9WQVJJQU5UX1RZUEUpIHtcclxuICAgICAgICAgICAgYWNjW3Byb3BlcnR5S2V5XSA9IHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnZhcmlhbnRPcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvcGVydGllc1RvTGlzdChyYXdQcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmF3UHJvcGVydGllcykucmVkdWNlKChhY2MsIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKHJhd1Byb3BlcnRpZXNbcHJvcGVydHlLZXldLnR5cGUgPT09IFBST1BFUlRZX1ZBUklBTlRfVFlQRSkge1xyXG4gICAgICAgICAgICBhY2MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiByYXdQcm9wZXJ0aWVzW3Byb3BlcnR5S2V5XS52YXJpYW50T3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgc29ydFByb3BlcnRpZXMgfSBmcm9tIFwiLi9zb3J0UHJvcGVydGllc1wiO1xyXG5pbXBvcnQgeyBzb3J0VmFyaWFudHMgfSBmcm9tIFwiLi9zb3J0VmFyaWFudHNcIjtcclxuZXhwb3J0IHsgc29ydFByb3BlcnRpZXMsIHNvcnRWYXJpYW50cyB9O1xyXG4iLCJpbXBvcnQgeyBST1dTX0dBUF9GSUVMRCwgQ09MVU1OU19HQVBfRklFTEQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBjb2xsZWN0UHJvcGVydGllcywgY29tcGFyZVByb3BlcnRpZXMsIGZpbGxEaXJlY3Rpb25zLCBmaW5kQ29sdW1uR2FwLCBmaW5kTmV4dFZhcmlhbnQsIGZpbmRSb3dHYXAgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydFByb3BlcnRpZXModmFyaWFudHMsIHByb3BlcnRpZXMpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBsZXQgc29ydERpcmVjdGlvbnMgPSB7fTtcclxuICAgIGNvbnN0IGJvcmRlcnMgPSB7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0ID0gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKTtcclxuICAgIGNvbnN0IHJvb3RDb2x1bW5zID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeE1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdENvbHVtbnMgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5QmVmb3JlOiByb290Q29sdW1ucy55IC0gMSxcclxuICAgICAgICB4TWluOiB0cnVlLFxyXG4gICAgICAgIHlNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29sdW1uc0JvcmRlcnNZRnJvbSA9IHByZXZSb290Q29sdW1ucyA/IChwcmV2Um9vdENvbHVtbnMueSArIHByZXZSb290Q29sdW1ucy5oZWlnaHQpIDogMDtcclxuICAgIGNvbnN0IHJvb3RSb3dzID0gbmV4dCh7XHJcbiAgICAgICAgeEZyb206IDAsXHJcbiAgICAgICAgeUZyb206IDAsXHJcbiAgICAgICAgeEJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeUJlZm9yZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgeU1pbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwcmV2Um9vdFJvd3MgPSBuZXh0KHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiByb290Um93cy54IC0gMSxcclxuICAgICAgICB5QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5TWluOiB0cnVlLFxyXG4gICAgICAgIHhNYXg6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgcm93c0JvcmRlcnNYRnJvbSA9IHByZXZSb290Um93cyA/IChwcmV2Um9vdFJvd3MueCArIHByZXZSb290Um93cy53aWR0aCkgOiAwO1xyXG4gICAgY29uc3QgZ2FwcyA9IHtcclxuICAgICAgICBbUk9XU19HQVBfRklFTERdOiByb290Um93cy54LFxyXG4gICAgICAgIFtDT0xVTU5TX0dBUF9GSUVMRF06IHJvb3RDb2x1bW5zLnlcclxuICAgIH07XHJcbiAgICBsZXQgY3VycmVudENvbHVtbkJvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRDb2x1bW5WYXJpYW50ID0gcm9vdENvbHVtbnM7XHJcbiAgICBsZXQgY3VycmVudFJvd0JvcmRlcnMgPSBib3JkZXJzO1xyXG4gICAgbGV0IGN1cnJlbnRSb3dWYXJpYW50ID0gcm9vdFJvd3M7XHJcbiAgICBsZXQgcHJldkNvbHVtblZhcmlhbnQgPSByb290Q29sdW1ucztcclxuICAgIGxldCBwcmV2Um93VmFyaWFudCA9IHJvb3RSb3dzO1xyXG4gICAgbGV0IHZhbHVlc09yZGVycyA9IHt9O1xyXG4gICAgd2hpbGUgKGN1cnJlbnRDb2x1bW5WYXJpYW50IHx8IGN1cnJlbnRSb3dWYXJpYW50KSB7XHJcbiAgICAgICAgY3VycmVudENvbHVtbkJvcmRlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1cnJlbnRDb2x1bW5Cb3JkZXJzKSwgeyB4TWluOiB0cnVlLCB5RnJvbTogY29sdW1uc0JvcmRlcnNZRnJvbSwgeEZyb206ICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LngpIHx8IDApICsgKChjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Q29sdW1uVmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENvbHVtblZhcmlhbnQud2lkdGgpIHx8IDApIH0pO1xyXG4gICAgICAgIGN1cnJlbnRSb3dCb3JkZXJzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50Um93Qm9yZGVycyksIHsgeU1pbjogdHJ1ZSwgeEZyb206IHJvd3NCb3JkZXJzWEZyb20sIHlGcm9tOiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSB8fCAwKSArICgoY3VycmVudFJvd1ZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudFJvd1ZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRSb3dWYXJpYW50LmhlaWdodCkgfHwgMCkgfSk7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGNvbXBhcmVQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnN0IHsga2V5czogY29sdW1uUHJvcGVydGllcywgdmFsdWVzOiBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzLCB9ID0gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyYXRvciwgcm9vdENvbHVtbnMsIGN1cnJlbnRDb2x1bW5WYXJpYW50KTtcclxuICAgICAgICBjb25zdCB7IGtleXM6IHJvd3NQcm9wZXJ0aWVzLCB2YWx1ZXM6IHJvd1Byb3BlcnRpZXNWYWx1ZXMsIH0gPSBjb2xsZWN0UHJvcGVydGllcyhjb21wYXJhdG9yLCByb290Um93cywgY3VycmVudFJvd1ZhcmlhbnQpO1xyXG4gICAgICAgIHNvcnREaXJlY3Rpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpbGxEaXJlY3Rpb25zKHJvd3NQcm9wZXJ0aWVzLCBcIlJPV1NcIikpLCBmaWxsRGlyZWN0aW9ucyhjb2x1bW5Qcm9wZXJ0aWVzLCBcIkNPTFVNTlNcIikpLCBzb3J0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiByb3dzUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoISgoX2EgPSByb3dQcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5S2V5XSA9PT0gXCJDT0xVTU5TXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XSA9IHJvd1Byb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldIHx8IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93UHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0uZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzT3JkZXJzW3Byb3BlcnR5S2V5XS5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eUtleSBvZiBjb2x1bW5Qcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghKChfYiA9IGNvbHVtblByb3BlcnRpZXNWYWx1ZXNbcHJvcGVydHlLZXldKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGVuZ3RoKSB8fFxyXG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldID0gY29sdW1uUHJvcGVydGllc1ZhbHVlc1twcm9wZXJ0eUtleV0gfHwgW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wZXJ0aWVzVmFsdWVzW3Byb3BlcnR5S2V5XS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc09yZGVyc1twcm9wZXJ0eUtleV0uaW5jbHVkZXModmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNPcmRlcnNbcHJvcGVydHlLZXldLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHJvd1Byb3BlcnR5IG9mIHJvd3NQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2Fwc1tyb3dQcm9wZXJ0eV0pIHtcclxuICAgICAgICAgICAgICAgIGdhcHNbcm93UHJvcGVydHldID0gZmluZFJvd0dhcChwcmV2Um93VmFyaWFudCwgY3VycmVudFJvd1ZhcmlhbnQsIHZhcmlhbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtblByb3BlcnR5IG9mIGNvbHVtblByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFnYXBzW2NvbHVtblByb3BlcnR5XSkge1xyXG4gICAgICAgICAgICAgICAgZ2Fwc1tjb2x1bW5Qcm9wZXJ0eV0gPSBmaW5kQ29sdW1uR2FwKHByZXZDb2x1bW5WYXJpYW50LCBjdXJyZW50Q29sdW1uVmFyaWFudCwgdmFyaWFudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb2x1bW5WYXJpYW50ID0gY3VycmVudENvbHVtblZhcmlhbnQ7XHJcbiAgICAgICAgcHJldlJvd1ZhcmlhbnQgPSBjdXJyZW50Um93VmFyaWFudDtcclxuICAgICAgICBpZiAoKGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRDb2x1bW5WYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Q29sdW1uVmFyaWFudC54KSA8IGdhcHNbUk9XU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbUk9XU19HQVBfRklFTERdID0gY3VycmVudENvbHVtblZhcmlhbnQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChjdXJyZW50Um93VmFyaWFudCA9PT0gbnVsbCB8fCBjdXJyZW50Um93VmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFJvd1ZhcmlhbnQueCkgPCBnYXBzW1JPV1NfR0FQX0ZJRUxEXSkge1xyXG4gICAgICAgICAgICBnYXBzW1JPV1NfR0FQX0ZJRUxEXSA9IGN1cnJlbnRSb3dWYXJpYW50Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoY3VycmVudENvbHVtblZhcmlhbnQgPT09IG51bGwgfHwgY3VycmVudENvbHVtblZhcmlhbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDb2x1bW5WYXJpYW50LnkpIDwgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0pIHtcclxuICAgICAgICAgICAgZ2Fwc1tDT0xVTU5TX0dBUF9GSUVMRF0gPSBjdXJyZW50Q29sdW1uVmFyaWFudC55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGN1cnJlbnRSb3dWYXJpYW50ID09PSBudWxsIHx8IGN1cnJlbnRSb3dWYXJpYW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50Um93VmFyaWFudC55KSA8IGdhcHNbQ09MVU1OU19HQVBfRklFTERdKSB7XHJcbiAgICAgICAgICAgIGdhcHNbQ09MVU1OU19HQVBfRklFTERdID0gY3VycmVudFJvd1ZhcmlhbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudENvbHVtblZhcmlhbnQgPSBjdXJyZW50Q29sdW1uVmFyaWFudCAmJiBuZXh0KGN1cnJlbnRDb2x1bW5Cb3JkZXJzKTtcclxuICAgICAgICBjdXJyZW50Um93VmFyaWFudCA9IGN1cnJlbnRSb3dWYXJpYW50ICYmIG5leHQoY3VycmVudFJvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgIGlmICghc29ydERpcmVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zW3Byb3BlcnR5XSA9IFwiUk9XU1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzT3JkZXJzLFxyXG4gICAgICAgIGRpcmVjdGlvbnM6IHNvcnREaXJlY3Rpb25zLFxyXG4gICAgICAgIGdhcHNcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MVU1OU19HQVBfRklFTEQsIFJPV1NfR0FQX0ZJRUxEIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZmluZEFsbFZhcmlhbnRzQnlQcm9wZXJ0eVZhbHVlLCBmaW5kVmFyaWFudEJ5UHJvcGVydHlWYWx1ZSB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0VmFyaWFudHMocGFyZW50VmFyaWFudCwgdmFyaWFudHMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZGlyZWN0aW9ucywgZ2FwcyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHJldmVyc2VkUHJvcGVydGllcyA9IHByb3BlcnRpZXMucmV2ZXJzZSgpO1xyXG4gICAgbGV0IHJvd3MgPSBbXTtcclxuICAgIGxldCByb3dzR2FwcyA9IFtdO1xyXG4gICAgbGV0IGNvbHVtbnMgPSBbXTtcclxuICAgIGxldCBjb2x1bW5zR2FwcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCByZXZlcnNlZFByb3BlcnRpZXMubGVuZ3RoOyBwcm9wZXJ0eUluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXksIHZhbHVlczogcHJvcGVydHlWYWx1ZXMgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbnNbcHJvcGVydHlLZXldID09PSBcIlJPV1NcIikge1xyXG4gICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBwcm9wZXJ0eVZhbHVlcy5tYXAoKHByb3BlcnR5VmFsdWUpID0+IChbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHByb3BlcnR5S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dKSk7XHJcbiAgICAgICAgICAgICAgICByb3dzR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IHJvd3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSByb3dzR2FwcztcclxuICAgICAgICAgICAgICAgIHJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJvd3NHYXBzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbmVzdGVkSW5kZXggPSAwOyBuZXN0ZWRJbmRleCA8IG5lc3RlZFByb3BlcnR5VmFsdWVzLmxlbmd0aDsgbmVzdGVkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZXNbdmFsdWVJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXN0ZWRQcm9wZXJ0eVZhbHVlc1tuZXN0ZWRJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93VmFyaWFudCA9IGZpbmRWYXJpYW50QnlQcm9wZXJ0eVZhbHVlKHZhcmlhbnRzLCByb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93VmFyaWFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NHYXBzW3Jvd3NHYXBzLmxlbmd0aCAtIDFdID0gZ2Fwc1twcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiQ09MVU1OU1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IHByb3BlcnR5VmFsdWVzLm1hcCgocHJvcGVydHlWYWx1ZSkgPT4gW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BlcnR5VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zR2FwcyA9IHByb3BlcnR5VmFsdWVzLm1hcCgoKSA9PiBnYXBzW3Byb3BlcnR5S2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eVZhbHVlcyA9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQcm9wZXJ0eUdhcHMgPSBjb2x1bW5zR2FwcztcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZUluZGV4ID0gMDsgdmFsdWVJbmRleCA8IHByb3BlcnR5VmFsdWVzLmxlbmd0aDsgdmFsdWVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbmVzdGVkSW5kZXggPSAwOyBuZXN0ZWRJbmRleCA8IG5lc3RlZFByb3BlcnR5VmFsdWVzLmxlbmd0aDsgbmVzdGVkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwcm9wZXJ0eUtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcGVydHlWYWx1ZXNbdmFsdWVJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXN0ZWRQcm9wZXJ0eVZhbHVlc1tuZXN0ZWRJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFyaWFudCA9IGZpbmRWYXJpYW50QnlQcm9wZXJ0eVZhbHVlKHZhcmlhbnRzLCBjb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uVmFyaWFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zR2Fwcy5wdXNoKG5lc3RlZFByb3BlcnR5R2Fwc1tuZXN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNHYXBzW2NvbHVtbnNHYXBzLmxlbmd0aCAtIDFdID0gZ2Fwc1twcm9wZXJ0eUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2x1bW5zVmFyaWFudHMgPSBbXTtcclxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtblZhcmlhbnRzID0gZmluZEFsbFZhcmlhbnRzQnlQcm9wZXJ0eVZhbHVlKHZhcmlhbnRzLCBjb2x1bW4pO1xyXG4gICAgICAgIGxldCBtYXhDb2x1bW5XaWR0aCA9IDA7XHJcbiAgICAgICAgY29uc3QgbWFwVmFyaWFudHMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgY29sdW1uVmFyaWFudHMpIHtcclxuICAgICAgICAgICAgbGV0IHZhcmlhbnRLZXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCBwcm9wZXJ0aWVzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleTogcHJvcGVydHlLZXkgfSA9IHByb3BlcnRpZXNbcHJvcGVydHlJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uc1twcm9wZXJ0eUtleV0gPT09IFwiUk9XU1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudEtleS5wdXNoKGAke3Byb3BlcnR5S2V5fT0ke3ZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNbcHJvcGVydHlLZXldfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcFZhcmlhbnRzW3ZhcmlhbnRLZXkucmV2ZXJzZSgpLmpvaW4oJywgJyldID0gdmFyaWFudDtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQud2lkdGggPiBtYXhDb2x1bW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGggPSB2YXJpYW50LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbHVtbnNWYXJpYW50cy5wdXNoKHtcclxuICAgICAgICAgICAgbWFwVmFyaWFudHMsXHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiBjb2x1bW5WYXJpYW50cyxcclxuICAgICAgICAgICAgbWF4Q29sdW1uV2lkdGhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4Q29vcmQgPSBnYXBzW1JPV1NfR0FQX0ZJRUxEXTtcclxuICAgIGxldCB5Q29vcmQgPSBnYXBzW0NPTFVNTlNfR0FQX0ZJRUxEXTtcclxuICAgIGxldCBtYXhYQ29vcmQgPSAwO1xyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcm93cy5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29sdW1ucy5wdXNoKG51bGwpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3MubGVuZ3RoOyByb3dJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IG1heFJvd0hlaWdodCA9IDA7XHJcbiAgICAgICAgbGV0IGlzRW1wdHlSb3cgPSB0cnVlO1xyXG4gICAgICAgIHhDb29yZCA9IGdhcHNbUk9XU19HQVBfRklFTERdO1xyXG4gICAgICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVmFyaWFudHM7XHJcbiAgICAgICAgICAgIGxldCB2YXJpYW50S2V5ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgICAgICAgICAgaWYgKHJvdykge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudEtleSA9IHJvdy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiBgJHtrZXl9PSR7dmFsdWV9YCkuam9pbignLCAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFyaWFudHMgPSB2YXJpYW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtblZhcmlhbnRzID0gY29sdW1uc1ZhcmlhbnRzW2NvbHVtbkluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uVmFyaWFudHMudmFyaWFudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQgPSBjb2x1bW5WYXJpYW50cy52YXJpYW50c1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYW50S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQgPSBjb2x1bW5WYXJpYW50cy5tYXBWYXJpYW50c1t2YXJpYW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHlSb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWFudC5oZWlnaHQgPiBtYXhSb3dIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93SGVpZ2h0ID0gdmFyaWFudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQueCA9IHhDb29yZDtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnkgPSB5Q29vcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB4Q29vcmQgKz0gY29sdW1uVmFyaWFudHMubWF4Q29sdW1uV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggIT09IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZCArPSBjb2x1bW5zR2Fwc1tjb2x1bW5JbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5Um93KSB7XHJcbiAgICAgICAgICAgIHlDb29yZCArPSBtYXhSb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChyb3dJbmRleCAhPT0gcm93cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB5Q29vcmQgKz0gcm93c0dhcHNbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFyZW50VmFyaWFudC5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoeENvb3JkICsgZ2Fwc1tST1dTX0dBUF9GSUVMRF0sIHlDb29yZCArIGdhcHNbQ09MVU1OU19HQVBfRklFTERdKTtcclxufVxyXG47XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5kUm93R2FwKHByZXZWYXJpYW50LCB2YXJpYW50LCB2YXJpYW50cykge1xyXG4gICAgbGV0IGdhcCA9IHZhcmlhbnQueSAtIHByZXZWYXJpYW50LnkgLSBwcmV2VmFyaWFudC5oZWlnaHQ7XHJcbiAgICBsZXQgYm9yZGVycyA9IHtcclxuICAgICAgICB4RnJvbTogMCxcclxuICAgICAgICB5RnJvbTogcHJldlZhcmlhbnQueSxcclxuICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICB5QmVmb3JlOiB2YXJpYW50LnkgLSAxXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XHJcbiAgICBsZXQgcm9vdCA9IHByZXZWYXJpYW50O1xyXG4gICAgd2hpbGUgKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBuZXdHYXAgPSB2YXJpYW50LnkgLSByb290LnkgLSByb290LmhlaWdodDtcclxuICAgICAgICBpZiAobmV3R2FwIDwgZ2FwKSB7XHJcbiAgICAgICAgICAgIGdhcCA9IG5ld0dhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVycyA9IHtcclxuICAgICAgICAgICAgeEZyb206IHJvb3QueCArIHJvb3Qud2lkdGgsXHJcbiAgICAgICAgICAgIHlGcm9tOiBwcmV2VmFyaWFudC55LFxyXG4gICAgICAgICAgICB4QmVmb3JlOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgICAgeUJlZm9yZTogdmFyaWFudC55IC0gZ2FwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByb290ID0gbmV4dChib3JkZXJzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBnYXAgPCAwID8gMCA6IGdhcDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbHVtbkdhcChwcmV2VmFyaWFudCwgdmFyaWFudCwgdmFyaWFudHMpIHtcclxuICAgIGxldCBnYXAgPSB2YXJpYW50LnggLSBwcmV2VmFyaWFudC54IC0gcHJldlZhcmlhbnQud2lkdGg7XHJcbiAgICBsZXQgYm9yZGVycyA9IHtcclxuICAgICAgICB4RnJvbTogcHJldlZhcmlhbnQueCxcclxuICAgICAgICB5RnJvbTogMCxcclxuICAgICAgICB4QmVmb3JlOiB2YXJpYW50LnggLSAxLFxyXG4gICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV4dCA9IGZpbmROZXh0VmFyaWFudCh2YXJpYW50cyk7XHJcbiAgICBsZXQgcm9vdCA9IHByZXZWYXJpYW50O1xyXG4gICAgd2hpbGUgKHJvb3QpIHtcclxuICAgICAgICBjb25zdCBuZXdHYXAgPSB2YXJpYW50LnggLSByb290LnggLSByb290LndpZHRoO1xyXG4gICAgICAgIGlmIChuZXdHYXAgPCBnYXApIHtcclxuICAgICAgICAgICAgZ2FwID0gbmV3R2FwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXJzID0ge1xyXG4gICAgICAgICAgICB4RnJvbTogcHJldlZhcmlhbnQueCxcclxuICAgICAgICAgICAgeUZyb206IHJvb3QueSArIHJvb3QuaGVpZ2h0LFxyXG4gICAgICAgICAgICB4QmVmb3JlOiB2YXJpYW50LnggLSBnYXAsXHJcbiAgICAgICAgICAgIHlCZWZvcmU6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXHJcbiAgICAgICAgfTtcclxuICAgICAgICByb290ID0gbmV4dChib3JkZXJzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBnYXAgPCAwID8gMCA6IGdhcDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5leHRWYXJpYW50KHZhcmlhbnRzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJvcmRlcnMpIHtcclxuICAgICAgICBjb25zdCB7IHhGcm9tLCB5RnJvbSwgeEJlZm9yZSwgeUJlZm9yZSwgeU1heCwgeU1pbiwgeE1heCwgeE1pbiB9ID0gYm9yZGVycztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBsZXQgeE1pblZhbHVlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgbGV0IHlNaW5WYWx1ZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xyXG4gICAgICAgICAgICBpZiAodmFyaWFudC54ID49IHhGcm9tICYmXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPj0geUZyb20gJiZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQueCA8PSB4QmVmb3JlICYmXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50LnkgPD0geUJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh4TWluICYmIHlNaW4gJiYgKHZhcmlhbnQueCArIHZhcmlhbnQueSkgPCAoeE1pblZhbHVlICsgeU1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeE1pbiAmJiB5TWF4ICYmICh2YXJpYW50LnggPCB4TWluVmFsdWUgfHwgdmFyaWFudC54ID09PSB4TWluVmFsdWUgJiYgdmFyaWFudC55ID49IHlNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHlNaW4gJiYgeE1heCAmJiAodmFyaWFudC55IDwgeU1pblZhbHVlIHx8IHZhcmlhbnQueSA9PT0geU1pblZhbHVlICYmIHZhcmlhbnQueCA+PSB4TWluVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4TWluICYmICh2YXJpYW50LnggPCB4TWluVmFsdWUgfHwgdmFyaWFudC54ID09PSB4TWluVmFsdWUgJiYgdmFyaWFudC55IDwgeU1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeU1pbiAmJiAodmFyaWFudC55IDwgeU1pblZhbHVlIHx8IHZhcmlhbnQueSA9PT0geU1pblZhbHVlICYmIHZhcmlhbnQueCA8IHhNaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcmlhbnQueCA8PSB4TWluVmFsdWUgJiYgdmFyaWFudC55IDw9IHlNaW5WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YXJpYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHhNaW5WYWx1ZSA9IHZhcmlhbnQueDtcclxuICAgICAgICAgICAgICAgICAgICB5TWluVmFsdWUgPSB2YXJpYW50Lnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn1cclxuO1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVByb3BlcnRpZXMocHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyb290UHJvcGVydGllc1ZhbHVlcywgY3VycmVudFByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleXM6IFtdLCB2YWx1ZXM6IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgICAgICBpZiAocm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XSAhPT0gY3VycmVudFByb3BlcnRpZXNWYWx1ZXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBbcm9vdFByb3BlcnRpZXNWYWx1ZXNba2V5XV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wdXNoKGN1cnJlbnRQcm9wZXJ0aWVzVmFsdWVzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IGtleXMsIHZhbHVlcyB9O1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFByb3BlcnRpZXMoY29tcGFyZUZuLCByb290LCB2YXJpYW50KSB7XHJcbiAgICByZXR1cm4gY29tcGFyZUZuKHJvb3QudmFyaWFudFByb3BlcnRpZXMsIHZhcmlhbnQgPT09IG51bGwgfHwgdmFyaWFudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWFudC52YXJpYW50UHJvcGVydGllcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxEaXJlY3Rpb25zKHByb3BlcnRpZXMsIGRpcmVjdGlvbikge1xyXG4gICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChkaXJlY3Rpb25zLCBwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbnNbcHJvcGVydHldID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25zO1xyXG4gICAgfSwge30pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFudEJ5UHJvcGVydHlWYWx1ZSh2YXJpYW50cywgcHJvcGVydGllc1ZhbHVlcykge1xyXG4gICAgZm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XHJcbiAgICAgICAgbGV0IGlzTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCB7IGtleSwgdmFsdWUgfSBvZiBwcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXJpYW50LnZhcmlhbnRQcm9wZXJ0aWVzW2tleV0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpc01hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc01hdGNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFsbFZhcmlhbnRzQnlQcm9wZXJ0eVZhbHVlKHZhcmlhbnRzLCBwcm9wZXJ0aWVzVmFsdWVzKSB7XHJcbiAgICBjb25zdCBmb3VuZFZhcmlhbnRzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcclxuICAgICAgICBsZXQgaXNNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IHsga2V5LCB2YWx1ZSB9IG9mIHByb3BlcnRpZXNWYWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHZhcmlhbnQudmFyaWFudFByb3BlcnRpZXNba2V5XSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlzTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTWF0Y2hlZCkge1xyXG4gICAgICAgICAgICBmb3VuZFZhcmlhbnRzLnB1c2godmFyaWFudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvdW5kVmFyaWFudHM7XHJcbn1cclxuIiwiaW1wb3J0IHsgc29ydFZhcmlhbnRzIH0gZnJvbSBcIi4vc2VydmljZXMvc29ydGluZ1wiO1xyXG5leHBvcnQgeyBzb3J0VmFyaWFudHMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==