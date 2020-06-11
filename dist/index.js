(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsonSchemaDesigner"] = factory();
	else
		root["jsonSchemaDesigner"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdAction.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdAction.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdAction {\n  border-radius: 8px;\n  color: #ccc;\n  background-color: #f0f0f0;\n  border: 0;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n  height: 18px;\n  line-height: 18px;\n  margin: 0 4px;\n}\n.jsdAction:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 2px #069;\n}\n.jsdAction:hover {\n  background-color: #6bf;\n  color: #fff;\n}\n.jsdAction__primary, .jsdAction__primary:hover {\n  background-color: #39c;\n  color: #fff;\n}\n.jsdAction__danger:focus, .jsdAction__danger:hover {\n  background-color: #f86;\n  color: #fff;\n}\n.jsdAction__danger:focus {\n  box-shadow: 0 0 1px 2px #931;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdExtraIcon.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdExtraIcon.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdExtraIcon {\n  font-family: \"Courier New\", Courier, monospace;\n  font-weight: bold;\n  line-height: 22px;\n  color: #999;\n  display: inline-block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdItem.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdItem.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdItem {\n  flex-grow: 1;\n}\n.jsdItem_basic {\n  display: flex;\n  align-items: flex-start;\n}\n.jsdItem_extra {\n  margin-top: 8px;\n  padding-left: 20px;\n}\n.jsdItem_extra > .jsdExtraIcon {\n  width: 100%;\n  position: relative;\n  left: -20px;\n  cursor: pointer;\n}\n.jsdItem_extra__collapsed {\n  cursor: pointer;\n  display: flex;\n  align-content: center;\n  padding-left: 0;\n}\n.jsdItem_extra__collapsed .jsdExtraIcon {\n  display: inline-block;\n  width: auto;\n  position: static;\n}\n.jsdItem_extra__collapsed_text {\n  font-size: 13px;\n  line-height: 24px;\n  color: #666;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.jsdItem_extra__collapsed:hover .jsdItem_extra__collapsed_text {\n  color: #339;\n  text-decoration: underline;\n}\n.jsdItem_typeSelect {\n  border: 1px solid #eee;\n  padding: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 4px;\n  color: #333;\n  margin-right: 8px;\n}\n.jsdItem_typeSelect:hover, .jsdItem_typeSelect:focus {\n  border: 1px solid #999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdItemOpts.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdItemOpts.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdItemOpts {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.jsdItemOpts_formatSelect {\n  border: 1px solid #eee;\n  padding: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 4px;\n  color: #333;\n  vertical-align: top;\n  width: 100px;\n  margin-right: 8px;\n}\n.jsdItemOpts_formatSelect:hover, .jsdItemOpts_formatSelect:focus {\n  border: 1px solid #999;\n}\n.jsdItemOpts_add {\n  width: 70px;\n  border: 1px solid #eee;\n  padding: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 4px;\n  color: #333;\n  vertical-align: top;\n  border-color: transparent;\n  color: #999;\n  cursor: pointer;\n}\n.jsdItemOpts_add:hover, .jsdItemOpts_add:focus {\n  border: 1px solid #999;\n}\n.jsdItemOpts_schemaFieldList {\n  flex-grow: 1;\n  display: flex;\n  flex-flow: wrap;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdProperties.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdProperties.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdProperties {\n  border: 1px solid #ccc;\n  border-bottom-width: 0;\n}\n.jsdProperties_actions {\n  white-space: nowrap;\n  display: flex;\n  margin: 0 6px;\n}\n.jsdProperties_leading {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n.jsdProperties_item {\n  padding: 8px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n}\n.jsdProperties_item:nth-child(odd) {\n  background-color: #fafafa;\n}\n.jsdProperties_item > .jsdItem_extra {\n  margin-left: 20px;\n}\n.jsdProperties_propName {\n  align-self: flex-start;\n  width: 160px;\n  border: 1px solid #eee;\n  padding: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 4px;\n  color: #333;\n}\n.jsdProperties_propName:hover, .jsdProperties_propName:focus {\n  border: 1px solid #999;\n}\n.jsdProperties_item__ghost .jsdProperties_propName {\n  background-color: transparent;\n}\n.jsdProperties_item__ghost .jsdProperties_propName::placeholder {\n  color: #999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdSchemaField.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--1-2!./src/style/jsdSchemaField.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsdSchemaField {\n  display: flex;\n  flex: 1 0 80px;\n  align-items: center;\n  padding: 2px;\n  background-color: #eee;\n  background: linear-gradient(90deg, #fafafa, #eee);\n  border-radius: 4px;\n  margin: 2px;\n  margin-top: 0;\n}\n.jsdSchemaField_title {\n  font-size: 13px;\n  margin: 0 4px;\n  color: #666;\n  white-space: nowrap;\n}\n.jsdSchemaField_remove {\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  margin: auto 2px;\n}\n.jsdSchemaField_remove:hover {\n  background-color: #f88;\n  color: #fff;\n  border-radius: 4px;\n}\n.jsdSchemaField_valueText {\n  font-size: 13px;\n}\n.jsdSchemaField_input {\n  border: 1px solid #eee;\n  padding: 4px;\n  font-size: 14px;\n  box-sizing: border-box;\n  vertical-align: top;\n  border-radius: 4px;\n  color: #333;\n  flex-grow: 1;\n}\n.jsdSchemaField_input:hover, .jsdSchemaField_input:focus {\n  border: 1px solid #999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/jsdExtraIcon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/jsdExtraIcon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_jsdExtraIcon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/jsdExtraIcon.scss */ "./src/style/jsdExtraIcon.scss");
/* harmony import */ var _style_jsdExtraIcon_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_jsdExtraIcon_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//



const chars = {
  object: "{}",
  array: "[]"
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "jsd-extra-icon",
  props: {
    type: { type: String, default: "object" },
    isTail: { type: Boolean, default: false }
  },
  computed: {
    char() {
      return chars[this.type][this.isTail ? 1 : 0];
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/jsdItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/jsdItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_consts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsdProperties_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdProperties.vue */ "./src/jsdProperties.vue");
/* harmony import */ var _jsdItemOpts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsdItemOpts.vue */ "./src/jsdItemOpts.vue");
/* harmony import */ var _jsdExtraIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsdExtraIcon.vue */ "./src/jsdExtraIcon.vue");
/* harmony import */ var _style_jsdItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/jsdItem.scss */ "./src/style/jsdItem.scss");
/* harmony import */ var _style_jsdItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_jsdItem_scss__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const allTypeSchemaFieldIds = [].concat(
  ...Object.values(_consts__WEBPACK_IMPORTED_MODULE_0__["typeSchemaFields"]).map(x => x.map(y => y.id))
);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "jsd-item",
  components: {
    jsdProperties: _jsdProperties_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    jsdItemOpts: _jsdItemOpts_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    jsdExtraIcon: _jsdExtraIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    path: { type: String, default: "root" },
    value: Object
  },
  data() {
    return {
      collapsed: true
    };
  },
  computed: {
    type: {
      get() {
        return this.value.type;
      },
      set(type) {
        this.setType(type);
      }
    },
    /** 例如 object 和 array 需要在下方展开 */
    hasExtraOpts() {
      const { type } = this;
      if (type === "object" || type === "array") return true;

      return false;
    },
    collapsedText() {
      const { type, value } = this;

      if (type === "object") {
        const keys = Object.keys(value.properties);
        if (keys.length === 0) return "空对象";
        return keys.join(", ");
      }

      if (type === "array") {
        return (value.items && value.items.type) || "...";
      }

      return "...";
    }
  },
  created() {
    this.collapsed = this.path !== "root"; //&& this.value.type === "object";
  },
  methods: {
    commit(value) {
      this.$emit("update:value", value);
    },
    commitProp(key, value) {
      const newVal = { ...this.value };
      if (typeof value === "undefined") delete newVal[key];
      else newVal[key] = value;
      this.commit(newVal);
    },
    setType(type) {
      const newVal = { ...this.value, type };
      const typeSpec = _consts__WEBPACK_IMPORTED_MODULE_0__["typeSchemaFields"][type] || {};
      allTypeSchemaFieldIds.forEach(key => {
        if (key in typeSpec) return;
        delete newVal[key];
      });

      switch (type) {
        case "object":
          newVal.properties = {};
          break;

        case "array":
          newVal.items = { type: "string" };
          break;
      }

      this.commit(newVal);
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/jsdItemOpts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/jsdItemOpts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_consts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsdSchemaField_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdSchemaField/index.vue */ "./src/jsdSchemaField/index.vue");
/* harmony import */ var _style_jsdItemOpts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/jsdItemOpts.scss */ "./src/style/jsdItemOpts.scss");
/* harmony import */ var _style_jsdItemOpts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_jsdItemOpts_scss__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    path: String,
    value: Object
  },
  components: {
    jsdSchemaField: _jsdSchemaField_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    formats() {
      const type = this.value.type;
      return _consts__WEBPACK_IMPORTED_MODULE_0__["typeFormats"][type] || [];
    },
    allFields() {
      return [
        ..._consts__WEBPACK_IMPORTED_MODULE_0__["commonSchemaFields"],
        ...(_consts__WEBPACK_IMPORTED_MODULE_0__["typeSchemaFields"][this.value.type] || [])
      ].filter(x => !x.hidden);
    }
  },
  methods: {
    commit(value) {
      this.$emit("change", value);
    },
    commitProp(key, value) {
      const newVal = { ...this.value };
      if (typeof value === "undefined") delete newVal[key];
      else newVal[key] = value;
      this.commit(newVal);
    },
    setFormat(formatValue) {
      // const format = this.formats.find(x => x.value === formatValue);
      this.commitProp("format", formatValue || undefined);
    },
    handleAddField(fieldId) {
      const field = this.allFields.find(x => x.id === fieldId);
      if (!field) return;

      let defaultValue = field.default;
      if (typeof defaultValue === "function")
        defaultValue = defaultValue(this.value);
      if (typeof defaultValue === "undefined")
        defaultValue = _consts__WEBPACK_IMPORTED_MODULE_0__["primitiveDefaults"][field.type];

      this.commitProp(fieldId, defaultValue);
      this.$nextTick(() => {
        const ref = this.$refs["scheamField:" + fieldId][0];
        if (ref && ref.$el) {
          const el = ref.$el.querySelector(`input, select, textarea`);
          if (el) {
            if (el.select) el.select();
            if (el.focus) el.focus();
          }
        }
      });
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/jsdProperties.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/jsdProperties.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_jsdAction_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/jsdAction.scss */ "./src/style/jsdAction.scss");
/* harmony import */ var _style_jsdAction_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_jsdAction_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_jsdProperties_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/jsdProperties.scss */ "./src/style/jsdProperties.scss");
/* harmony import */ var _style_jsdProperties_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_jsdProperties_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "jsd-properties",
  props: {
    path: String,
    value: Object
  },
  computed: {
    isEmpty() {
      return Object.keys(this.value.properties).length === 0;
    },
    // readonly! 不要修改
    requiredPropList() {
      return this.value.required || [];
    }
  },
  components: {
    jsdItem: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./jsdItem.vue */ "./src/jsdItem.vue"))
  },
  methods: {
    commit(value) {
      this.$emit("change", value);
    },
    handleObjectPropRename(oldId, newId) {
      const oldProperties = this.value.properties;
      const properties = {};
      Object.keys(oldProperties).forEach(id => {
        properties[id === oldId ? newId : id] = oldProperties[id];
      });
      const ans = {
        ...this.value,
        properties
      };

      if (Array.isArray(ans.required) && ans.required.includes(oldId)) {
        const newArr = [...ans.required];
        newArr[newArr.indexOf(oldId)] = newId;
        ans.required = newArr;
      }

      this.commit(ans);
    },
    handleObjectPropUpdate(id, newVal) {
      this.commit({
        ...this.value,
        properties: {
          ...this.value.properties,
          [id]: newVal
        }
      });
    },
    handleObjectPropCreate(id) {
      id = id.trim();
      if (!id) return;

      let isRequired = /[!！]$/.test(id);
      if (isRequired) id = id.slice(0, -1);

      if (id in this.value.properties) return;

      const newVal = {
        ...this.value,
        properties: {
          ...this.value.properties,
          [id]: { type: "string" }
        }
      };
      if (isRequired) newVal.required = [...(newVal.required || []), id];
      this.commit(newVal);

      // this.$nextTick(() => {
      //   this.$el
      //     .querySelector('.jsdProperties_item[data-prop="' + id + '"] select')
      //     .focus();
      // });
    },
    handleObjectPropDelete(id) {
      const { [id]: discard, ...properties } = this.value.properties;
      const newSchema = {
        ...this.value,
        properties
      };

      const reqIdx = this.requiredPropList.indexOf(id);
      if (reqIdx >= 0) {
        newSchema.required = [...newSchema.required];
        newSchema.required.splice(reqIdx, 1);
        if (newSchema.required.length === 0) delete newSchema.required;
      }

      this.commit(newSchema);
    },
    handleObjectPropToggleRequired(id) {
      const required = [...this.requiredPropList];
      const idx = required.indexOf(id);
      if (idx >= 0) required.splice(idx, 1);
      else required.push(id);

      const newVal = {
        ...this.value,
        required
      };

      if (!required.length) delete newVal.required;
      this.commit(newVal);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/jsdSchemaField/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/jsdSchemaField/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_jsdSchemaField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/jsdSchemaField.scss */ "./src/style/jsdSchemaField.scss");
/* harmony import */ var _style_jsdSchemaField_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_jsdSchemaField_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// 这个是放在 jsdItemOpts 里面的东西

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    descriptor: Object,
    schema: Object, // 用户的 JSON Schema 对象
    showInput: { type: Boolean, default: true }
  },
  computed: {
    compId() {
      return "c" + Date.now().toString(36) + Math.random();
    },
    value: {
      get() {
        return this.schema[this.descriptor.id];
      },
      set(value) {
        this.$emit("change", {
          ...this.schema,
          [this.descriptor.id]: value
        });
      }
    },
    valueText() {
      const { value, descriptor } = this;
      if (descriptor.type === "boolean") return value ? "Yes" : "No";

      return String(value);
    }
  },
  methods: {
    doRemove() {
      const { [this.descriptor.id]: drop, ...rest } = this.schema;
      this.$emit("change", rest);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "jsdExtraIcon" }, [
    _vm._v("\n  " + _vm._s(_vm.char) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdItem.vue?vue&type=template&id=2b82a1b6&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/jsdItem.vue?vue&type=template&id=2b82a1b6& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "jsdItem",
      attrs: { "data-path": _vm.path, "data-type": _vm.type }
    },
    [
      _c(
        "div",
        { staticClass: "jsdItem_basic" },
        [
          _vm._t("leading"),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.type,
                  expression: "type"
                }
              ],
              staticClass: "jsdItem_typeSelect",
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.type = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "null" } }, [_vm._v("null")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "boolean" } }, [
                _vm._v("boolean")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "object" } }, [_vm._v("object")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "array" } }, [_vm._v("array")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "number" } }, [_vm._v("number")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "string" } }, [_vm._v("string")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "integer" } }, [_vm._v("integer")])
            ]
          ),
          _vm._v(" "),
          _c("jsd-item-opts", {
            attrs: { path: _vm.path, value: _vm.value },
            on: { change: _vm.commit }
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.hasExtraOpts && _vm.collapsed
        ? _c(
            "div",
            {
              staticClass: "jsdItem_extra jsdItem_extra__collapsed",
              attrs: { tabindex: "0" },
              on: { click: _vm.toggleCollapsed }
            },
            [
              _c("jsd-extra-icon", { attrs: { type: _vm.type } }),
              _vm._v(" "),
              _c("div", { staticClass: "jsdItem_extra__collapsed_text" }, [
                _vm._v("\n      " + _vm._s(_vm.collapsedText) + "\n    ")
              ]),
              _vm._v(" "),
              _c("jsd-extra-icon", { attrs: { type: _vm.type, "is-tail": "" } })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.hasExtraOpts && !_vm.collapsed
        ? _c(
            "div",
            { staticClass: "jsdItem_extra" },
            [
              _c("jsd-extra-icon", {
                attrs: { type: _vm.type },
                nativeOn: {
                  click: function($event) {
                    return _vm.toggleCollapsed($event)
                  }
                }
              }),
              _vm._v(" "),
              _vm.type === "object"
                ? _c("jsd-properties", {
                    attrs: { path: _vm.path, value: _vm.value },
                    on: { change: _vm.commit }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.type === "array"
                ? _c(
                    "div",
                    { staticClass: "jsdArrayItems" },
                    [
                      _c("jsd-item", {
                        staticClass: "jsdArrayItems_item",
                        attrs: {
                          value: _vm.value.items,
                          path: _vm.path + ".[number]"
                        },
                        on: {
                          "update:value": function($event) {
                            return _vm.commitProp("items", $event)
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("jsd-extra-icon", { attrs: { type: _vm.type, "is-tail": "" } })
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdItemOpts.vue?vue&type=template&id=65211ce5&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/jsdItemOpts.vue?vue&type=template&id=65211ce5& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "jsdItemOpts" }, [
    _vm.formats.length > 0
      ? _c(
          "select",
          {
            staticClass: "jsdItemOpts_formatSelect",
            attrs: { "data-schema-field": "format" },
            domProps: { value: _vm.value.format || "" },
            on: {
              change: function($event) {
                return _vm.setFormat($event.target.value)
              }
            }
          },
          _vm._l(_vm.formats, function(it) {
            return _c(
              "option",
              {
                key: it.value,
                attrs: { disabled: it.condition && !it.condition(_vm.value) },
                domProps: { value: it.value }
              },
              [_vm._v(_vm._s(it.label))]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "select",
      {
        staticClass: "jsdItemOpts_add",
        on: {
          change: function($event) {
            _vm.handleAddField($event.target.value)
            $event.target.value = ""
          }
        }
      },
      [
        _c(
          "option",
          { staticStyle: { display: "none" }, attrs: { value: "" } },
          [_vm._v("扩展...")]
        ),
        _vm._v(" "),
        _vm._l(_vm.allFields, function(field) {
          return _c(
            "option",
            {
              key: field.id,
              attrs: { disabled: field.id in _vm.value },
              domProps: { value: field.id }
            },
            [_vm._v(_vm._s(field.title))]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "jsdItemOpts_schemaFieldList" },
      _vm._l(
        _vm.allFields.filter(function(f) {
          return f.id in _vm.value
        }),
        function(field) {
          return _c("jsd-schema-field", {
            key: field.id,
            ref: "scheamField:" + field.id,
            refInFor: true,
            attrs: { descriptor: field, schema: _vm.value },
            on: { change: _vm.commit }
          })
        }
      ),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdProperties.vue?vue&type=template&id=70610dc5&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/jsdProperties.vue?vue&type=template&id=70610dc5& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "jsdProperties",
      class: { jsdProperties__empty: _vm.isEmpty }
    },
    [
      _vm._l(_vm.value.properties, function(prop, id) {
        return _c(
          "jsd-item",
          {
            key: id,
            staticClass: "jsdProperties_item",
            attrs: {
              "data-prop": id,
              value: _vm.value.properties[id],
              path: _vm.path + "." + id
            },
            on: {
              "update:value": function($event) {
                return _vm.handleObjectPropUpdate(id, $event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "jsdProperties_leading",
                attrs: { slot: "leading" },
                slot: "leading"
              },
              [
                _c("input", {
                  staticClass: "jsdProperties_propName",
                  attrs: { type: "text" },
                  domProps: { value: id },
                  on: {
                    change: function($event) {
                      return _vm.handleObjectPropRename(id, $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "jsdProperties_actions" }, [
                  _c(
                    "button",
                    {
                      staticClass: "jsdAction jsdAction__danger",
                      attrs: { title: "删除" },
                      on: {
                        click: function($event) {
                          return _vm.handleObjectPropDelete(id)
                        }
                      }
                    },
                    [_vm._v("\n          ×\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "jsdAction",
                      class: {
                        jsdAction__primary: _vm.requiredPropList.includes(id)
                      },
                      attrs: { title: "设置必填" },
                      on: {
                        click: function($event) {
                          return _vm.handleObjectPropToggleRequired(id)
                        }
                      }
                    },
                    [_vm._v("\n          必填\n        ")]
                  )
                ])
              ]
            )
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "jsdProperties_item jsdProperties_item__ghost" },
        [
          _c("input", {
            staticClass: "jsdProperties_propName",
            attrs: { type: "text", placeholder: "添加属性" },
            on: {
              change: function($event) {
                _vm.handleObjectPropCreate($event.target.value)
                $event.target.value = ""
              }
            }
          })
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "jsdSchemaField",
      attrs: { "data-schema-field": _vm.descriptor.id }
    },
    [
      _c(
        "label",
        { staticClass: "jsdSchemaField_title", attrs: { for: _vm.compId } },
        [_vm._v("\n    " + _vm._s(_vm.descriptor.title) + "：\n  ")]
      ),
      _vm._v(" "),
      !_vm.showInput
        ? _c("div", { staticClass: "jsdSchemaField_valueText" }, [
            _vm._v("\n    " + _vm._s(_vm.valueText) + "\n  ")
          ])
        : [
            _vm.descriptor.type === "string"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  staticClass: "jsdSchemaField_input",
                  attrs: { type: "text", id: _vm.compId },
                  domProps: { value: _vm.value },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.value = $event.target.value
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.descriptor.type === "number" ||
            _vm.descriptor.type === "integer"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.value,
                      expression: "value",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "jsdSchemaField_input",
                  attrs: { type: "number", id: _vm.compId },
                  domProps: { value: _vm.value },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.value = _vm._n($event.target.value)
                    },
                    blur: function($event) {
                      return _vm.$forceUpdate()
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.descriptor.type === "boolean"
              ? _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.value,
                      expression: "value"
                    }
                  ],
                  attrs: { type: "checkbox", id: _vm.compId },
                  domProps: {
                    checked: Array.isArray(_vm.value)
                      ? _vm._i(_vm.value, null) > -1
                      : _vm.value
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.value,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.value = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.value = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.value = $$c
                      }
                    }
                  }
                })
              : _vm._e()
          ],
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "jsdSchemaField_remove",
          attrs: { title: "删除" },
          on: { click: _vm.doRemove }
        },
        [_vm._v("×")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/consts.ts":
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeFormats = exports.typeSchemaFields = exports.commonSchemaFields = exports.primitiveDefaults = exports.schemaTypes = void 0;
exports.schemaTypes = [
    "null",
    "boolean",
    "object",
    "array",
    "number",
    "string",
    "integer",
];
exports.primitiveDefaults = {
    string: '',
    number: 1,
    boolean: true,
};
const numberTypeSchemaFields = [
    { id: "multipleOf", type: "number", title: "是X的倍数" },
    { id: "maximum", type: "number", title: "不超过" },
    { id: "exclusiveMaximum", type: "number", title: "小于" },
    { id: "minimum", type: "number", title: "不低于" },
    { id: "exclusiveMinimum", type: "number", title: "大于" },
];
exports.commonSchemaFields = [
    { id: "title", type: "string", title: "名称" },
    { id: "description", type: "string", title: "描述" },
];
/**
 * 可为 JSON Schema 添加 type 特定的 schemaField
 *
 * 场景示例：例如 string 类型支持自定义的配置 foobar
 * `{ "type": "string", "foobar": "我的自定义配置" }`
 */
exports.typeSchemaFields = {
    string: [
        { id: "maxLength", type: "number", title: "长度上限" },
        { id: "minLength", type: "number", title: "最短长度" },
        { id: "pattern", type: "string", title: "正则校验" },
    ],
    array: [
        { id: "maxItems", type: "number", title: "个数上限" },
        { id: "minItems", type: "number", title: "个数下限" },
        { id: "uniqueItems", type: "boolean", title: "元素不重复" },
        { id: "items", type: null, title: "元素类型", hidden: true },
    ],
    object: [
        { id: "maxProperties", type: "number", title: "maxProperties" },
        { id: "minProperties", type: "number", title: "minProperties" },
        { id: "additionalProperties", type: "boolean", title: "允许增加未定义的成员" },
        { id: "required", type: null, hidden: true, title: "required" },
        { id: "properties", type: null, hidden: true, title: "properties" },
        { id: "dependentRequired", type: null, hidden: true, title: "dependentRequired" },
    ],
    number: numberTypeSchemaFields,
    integer: numberTypeSchemaFields
};
/**
 * 可以为各种 type 配置 format 允许接受的值
 *
 * 注意：第一个 必须是 `{ value: "", label: "默认" }`
 */
exports.typeFormats = {
    string: [
        { value: "", label: "常规文本" },
        { value: "date-time", label: "日期" },
        { value: "email", label: "邮箱地址" },
    ],
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JSDItem = exports.JSDProperties = exports.consts = void 0;
const jsdItem_vue_1 = __webpack_require__(/*! ./jsdItem.vue */ "./src/jsdItem.vue");
exports.JSDItem = jsdItem_vue_1.default;
const jsdProperties_vue_1 = __webpack_require__(/*! ./jsdProperties.vue */ "./src/jsdProperties.vue");
exports.JSDProperties = jsdProperties_vue_1.default;
const consts = __webpack_require__(/*! ./consts */ "./src/consts.ts");
exports.consts = consts;
exports.default = jsdItem_vue_1.default;


/***/ }),

/***/ "./src/jsdExtraIcon.vue":
/*!******************************!*\
  !*** ./src/jsdExtraIcon.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsdExtraIcon.vue?vue&type=template&id=355c7c07& */ "./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07&");
/* harmony import */ var _jsdExtraIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdExtraIcon.vue?vue&type=script&lang=js& */ "./src/jsdExtraIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jsdExtraIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/jsdExtraIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/jsdExtraIcon.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/jsdExtraIcon.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_jsdExtraIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./jsdExtraIcon.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/jsdExtraIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdExtraIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07&":
/*!*************************************************************!*\
  !*** ./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./jsdExtraIcon.vue?vue&type=template&id=355c7c07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdExtraIcon.vue?vue&type=template&id=355c7c07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdExtraIcon_vue_vue_type_template_id_355c7c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/jsdItem.vue":
/*!*************************!*\
  !*** ./src/jsdItem.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsdItem.vue?vue&type=template&id=2b82a1b6& */ "./src/jsdItem.vue?vue&type=template&id=2b82a1b6&");
/* harmony import */ var _jsdItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdItem.vue?vue&type=script&lang=js& */ "./src/jsdItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jsdItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/jsdItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/jsdItem.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./src/jsdItem.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./jsdItem.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/jsdItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/jsdItem.vue?vue&type=template&id=2b82a1b6&":
/*!********************************************************!*\
  !*** ./src/jsdItem.vue?vue&type=template&id=2b82a1b6& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./jsdItem.vue?vue&type=template&id=2b82a1b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdItem.vue?vue&type=template&id=2b82a1b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItem_vue_vue_type_template_id_2b82a1b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/jsdItemOpts.vue":
/*!*****************************!*\
  !*** ./src/jsdItemOpts.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsdItemOpts.vue?vue&type=template&id=65211ce5& */ "./src/jsdItemOpts.vue?vue&type=template&id=65211ce5&");
/* harmony import */ var _jsdItemOpts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdItemOpts.vue?vue&type=script&lang=js& */ "./src/jsdItemOpts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jsdItemOpts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/jsdItemOpts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/jsdItemOpts.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/jsdItemOpts.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItemOpts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./jsdItemOpts.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/jsdItemOpts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItemOpts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/jsdItemOpts.vue?vue&type=template&id=65211ce5&":
/*!************************************************************!*\
  !*** ./src/jsdItemOpts.vue?vue&type=template&id=65211ce5& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./jsdItemOpts.vue?vue&type=template&id=65211ce5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdItemOpts.vue?vue&type=template&id=65211ce5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdItemOpts_vue_vue_type_template_id_65211ce5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/jsdProperties.vue":
/*!*******************************!*\
  !*** ./src/jsdProperties.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsdProperties.vue?vue&type=template&id=70610dc5& */ "./src/jsdProperties.vue?vue&type=template&id=70610dc5&");
/* harmony import */ var _jsdProperties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsdProperties.vue?vue&type=script&lang=js& */ "./src/jsdProperties.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _jsdProperties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/jsdProperties.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/jsdProperties.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/jsdProperties.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_jsdProperties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./jsdProperties.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/jsdProperties.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdProperties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/jsdProperties.vue?vue&type=template&id=70610dc5&":
/*!**************************************************************!*\
  !*** ./src/jsdProperties.vue?vue&type=template&id=70610dc5& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./jsdProperties.vue?vue&type=template&id=70610dc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdProperties.vue?vue&type=template&id=70610dc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_jsdProperties_vue_vue_type_template_id_70610dc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/jsdSchemaField/index.vue":
/*!**************************************!*\
  !*** ./src/jsdSchemaField/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=595566fa& */ "./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/jsdSchemaField/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/jsdSchemaField/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/jsdSchemaField/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/jsdSchemaField/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/jsdSchemaField/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa&":
/*!*********************************************************************!*\
  !*** ./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=595566fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/jsdSchemaField/index.vue?vue&type=template&id=595566fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_595566fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/style/jsdAction.scss":
/*!**********************************!*\
  !*** ./src/style/jsdAction.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdAction.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdAction.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/jsdExtraIcon.scss":
/*!*************************************!*\
  !*** ./src/style/jsdExtraIcon.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdExtraIcon.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdExtraIcon.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/jsdItem.scss":
/*!********************************!*\
  !*** ./src/style/jsdItem.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdItem.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/jsdItemOpts.scss":
/*!************************************!*\
  !*** ./src/style/jsdItemOpts.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdItemOpts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdItemOpts.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/jsdProperties.scss":
/*!**************************************!*\
  !*** ./src/style/jsdProperties.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdProperties.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdProperties.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/style/jsdSchemaField.scss":
/*!***************************************!*\
  !*** ./src/style/jsdSchemaField.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--1-2!./jsdSchemaField.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/style/jsdSchemaField.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map