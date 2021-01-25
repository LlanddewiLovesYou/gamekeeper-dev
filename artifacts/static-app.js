(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCurrentUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(undefined);
var useCurrentUser = function useCurrentUser() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    userName: "",
    _id: undefined,
    friends: []
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      loggedIn = _useState4[0],
      setLoggedIn = _useState4[1];

  var validateUser = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accessToken, userResponse, validUser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accessToken = Object(_util_jwt__WEBPACK_IMPORTED_MODULE_4__[/* getToken */ "a"])();

              if (!accessToken) {
                _context.next = 12;
                break;
              }

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:5000/users/validate", {
                accessToken: accessToken
              });

            case 4:
              userResponse = _context.sent;
              validUser = userResponse.data;

              if (!validUser) {
                _context.next = 11;
                break;
              }

              setCurrentUser(validUser);
              setLoggedIn(true);
              _context.next = 12;
              break;

            case 11:
              return _context.abrupt("return");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function validateUser() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    UserContext: UserContext,
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    validateUser: validateUser,
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useSignedRequest_useSignedRequest; });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/util/env.ts
var getDomain = function getDomain() {
  if (false) {} else {
    return "http://someotherurl.com";
  }
};
// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/util/jwt.ts
var jwt = __webpack_require__(13);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useSignedRequest.tsx





var useSignedRequest_useSignedRequest = function useSignedRequest(method, route, body) {
  var url = "".concat(getDomain()).concat(route);
  var config = {
    headers: {
      Authorization: "Bearer ".concat(Object(jwt["a" /* getToken */])())
    }
  };

  switch (method) {
    case "GET":
      return /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get(url, config);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      break;

    case "POST":
      return /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return external_axios_default.a.post(url, body, config);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      break;

    case "PATCH":
      return /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return external_axios_default.a.patch(url, body, config);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

    case "DELETE":
      return /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return external_axios_default.a["delete"](url, config);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

    default:
      break;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(46);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(29);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(23);

var _helpers = __webpack_require__(49);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setToken; });
var getToken = function getToken() {
  return localStorage.getItem("GAMEKEEPER_JWT");
};
var setToken = function setToken(token) {
  localStorage.setItem("GAMEKEEPER_JWT", token);
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useGames; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





var GamesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext(undefined);
var useGames = function useGames() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      games = _useState2[0],
      setGames = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    userName: ""
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var fetchUsersGames = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
      var gamesResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:5000/games/".concat(userId));

            case 2:
              gamesResponse = _context.sent;
              setGames(gamesResponse.data.games);
              setUser(gamesResponse.data.user[0]);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchUsersGames(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    games: games,
    setGames: setGames,
    fetchUsersGames: fetchUsersGames,
    user: user
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(23);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(47)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ UserForm_UserForm_UserForm; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useCurrentUser.tsx
var useCurrentUser = __webpack_require__(5);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/util/jwt.ts
var jwt = __webpack_require__(13);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useLogin.tsx








var useLogin_useLogin = function useLogin(submitUrl) {
  var _useContext = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      setLoggedIn = _useContext.setLoggedIn,
      loggedIn = _useContext.loggedIn,
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser;

  var _useState = Object(external_react_["useState"])(""),
      _useState2 = slicedToArray_default()(_useState, 2),
      userName = _useState2[0],
      setUserName = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(""),
      _useState4 = slicedToArray_default()(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(""),
      _useState6 = slicedToArray_default()(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var navigate = Object(router_["useNavigate"])();

  var onSubmit = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
      var loginData, loginResponse, token, user;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              loginData = {
                userName: userName,
                password: password
              };
              _context.prev = 2;
              _context.next = 5;
              return external_axios_default.a.post(submitUrl, loginData);

            case 5:
              loginResponse = _context.sent;
              token = loginResponse.data.accessToken;
              user = loginResponse.data.currentUser;

              if (token) {
                setCurrentUser(user);
                Object(jwt["b" /* setToken */])(token);
                setLoggedIn(true);
                navigate("/games/".concat(user._id));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              setError(_context.t0.message);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    onSubmit: onSubmit,
    loggedIn: loggedIn,
    currentUser: currentUser,
    userName: userName,
    setUserName: setUserName,
    password: password,
    setPassword: setPassword,
    error: error,
    setError: setError
  };
};
// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/components/UserForm/UserForm.scss
var UserForm_UserForm = __webpack_require__(68);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/components/UserForm/UserForm.tsx



var UserForm_UserForm_UserForm = function UserForm(_ref) {
  var type = _ref.type;
  var formText;
  var buttonText;
  var submitUrl;

  switch (type) {
    case "login":
      formText = "Log In";
      buttonText = "Log In";
      submitUrl = "http://localhost:5000/users/login";
      break;

    case "register":
      formText = "Create Account";
      buttonText = "Submit";
      submitUrl = "http://localhost:5000/users";
      break;
  }

  var _useLogin = useLogin_useLogin(submitUrl),
      _onSubmit = _useLogin.onSubmit,
      error = _useLogin.error,
      setUserName = _useLogin.setUserName,
      userName = _useLogin.userName,
      setPassword = _useLogin.setPassword,
      password = _useLogin.password;

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "user-form"
  }, /*#__PURE__*/external_react_default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, formText), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "error ".concat(error ? "visible" : null)
  }, error), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "username"
  }, "Username", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    value: userName
  })), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "password"
  }, "Password", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    value: password
  })), /*#__PURE__*/external_react_default.a.createElement("button", {
    type: "submit"
  }, buttonText)));
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPage", function() { return FriendsPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _components_Friend_Friend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _FriendsPage_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var _FriendsPage_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FriendsPage_scss__WEBPACK_IMPORTED_MODULE_7__);








var FriendsPage = function FriendsPage() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_4__[/* UserContext */ "a"]),
      currentUser = _useContext.currentUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      friends = _useState2[0],
      setFriends = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getFriends = /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var friendRequest, friendResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                friendRequest = Object(_hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_5__[/* useSignedRequest */ "a"])("GET", "/users/friends/".concat(currentUser._id));
                _context.next = 3;
                return friendRequest();

              case 3:
                friendResponse = _context.sent;
                setFriends(friendResponse.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getFriends() {
        return _ref.apply(this, arguments);
      };
    }();

    getFriends();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "friends-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header"
  }, currentUser.userName, "'s Friends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "friends"
  }, friends.map(function (friend) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Friend_Friend__WEBPACK_IMPORTED_MODULE_6__[/* Friend */ "a"], {
      friend: friend,
      key: friend._id
    });
  })));
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _components_Friend_Friend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _SearchPage_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var _SearchPage_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SearchPage_scss__WEBPACK_IMPORTED_MODULE_7__);








var SearchPage = function SearchPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__[/* UserContext */ "a"]),
      currentUser = _useContext.currentUser;

  var searchRequest = Object(_hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_4__[/* useSignedRequest */ "a"])("GET", "/users/search?q=".concat(query));

  var search = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var _yield$searchRequest, searchResults;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return searchRequest();

            case 3:
              _yield$searchRequest = _context.sent;
              searchResults = _yield$searchRequest.data;
              setUsers(searchResults);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function search(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "search-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return search(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: ""
  }, "Search Users:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit"
  }, "Search Friends ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "app__icon mag"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "results"
  }, users.map(function (user) {
    return user._id === currentUser._id ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Friend_Friend__WEBPACK_IMPORTED_MODULE_5__[/* Friend */ "a"], {
      friend: user
    });
  })));
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GamesPage", function() { return /* binding */ GamesPage_GamesPage_GamesPage; });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(26);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/components/Block/Block.scss
var Block_Block = __webpack_require__(69);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useSignedRequest.tsx + 1 modules
var useSignedRequest = __webpack_require__(9);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useAudio.tsx

var useAudio_useAudio = function useAudio(audioUrl) {
  var audio = new Audio(audioUrl);

  var playAudio = function playAudio(e) {
    e.preventDefault();
    audio.play();
  };

  var AudioBoundary = function AudioBoundary(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      onClick: function onClick(e) {
        return playAudio(e);
      }
    }, children);
  };

  return AudioBoundary;
};
// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useCurrentUser.tsx
var useCurrentUser = __webpack_require__(5);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/components/Block/Block.tsx








var Block_Block_Block = function Block(_ref) {
  var completed = _ref.completed,
      game = _ref.game,
      setGames = _ref.setGames;

  var _useState = Object(external_react_["useState"])(completed),
      _useState2 = slicedToArray_default()(_useState, 2),
      complete = _useState2[0],
      setComplete = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(game.hours),
      _useState4 = slicedToArray_default()(_useState3, 2),
      hours = _useState4[0],
      setHours = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(game.lastPlayed),
      _useState6 = slicedToArray_default()(_useState5, 2),
      lastPlayed = _useState6[0],
      setLastplayed = _useState6[1];

  var backgroundClass = complete ? "completed" : null;
  var AudioBoundary = useAudio_useAudio("/smw_coin.wav");

  var _useContext = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      loggedIn = _useContext.loggedIn,
      currentUser = _useContext.currentUser;

  var incrementHours = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
      var increment, incrementRequest;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              increment = hours + 0.5;
              setHours(increment);
              setLastplayed(new Date(Date.now()).toDateString());
              incrementRequest = Object(useSignedRequest["a" /* useSignedRequest */])("PATCH", "/games/".concat(game._id), {
                hours: increment
              });
              _context.next = 7;
              return incrementRequest();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function incrementHours(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var updateComplete = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(e) {
      var completionUpdateRequest, getUpdatedGames;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              completionUpdateRequest = Object(useSignedRequest["a" /* useSignedRequest */])("PATCH", "/games/".concat(game._id), {
                completed: !complete,
                completedOn: new Date(Date.now()).toDateString()
              });
              getUpdatedGames = Object(useSignedRequest["a" /* useSignedRequest */])("GET", "/games/".concat(currentUser._id));
              _context3.next = 5;
              return completionUpdateRequest();

            case 5:
              setComplete(!complete);
              setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
                var updatedGamesResponse, updatedGames;
                return regenerator_default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return getUpdatedGames();

                      case 2:
                        updatedGamesResponse = _context2.sent;
                        updatedGames = updatedGamesResponse.data.games;
                        setGames(updatedGames);

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })), 2000);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function updateComplete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var usersGame = loggedIn && game.userId === currentUser._id;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block " + backgroundClass
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block__flex"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", null, game.title), /*#__PURE__*/external_react_default.a.createElement("div", null, game.year)), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "block__label"
  }, "Started On:", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block__info"
  }, game.started)), /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "block__label"
  }, "Last Played:", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block__info"
  }, lastPlayed))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hours"
  }, /*#__PURE__*/external_react_default.a.createElement("label", {
    className: "block__label"
  }, "Hours Played:", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block__info"
  }, hours)), !complete && usersGame && /*#__PURE__*/external_react_default.a.createElement("div", {
    title: "Add 30 Minutes",
    className: "app__icon plus",
    onClick: function onClick(e) {
      incrementHours(e);
    }
  })), complete && /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "",
    className: "block__label"
  }, "Completed:", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "block__info"
  }, game.completedOn)), !complete ? usersGame && /*#__PURE__*/external_react_default.a.createElement(AudioBoundary, null, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "button complete-button",
    onClick: function onClick(e) {
      return updateComplete(e);
    }
  }, "Complete ", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon coin"
  }))) : usersGame && /*#__PURE__*/external_react_default.a.createElement(AudioBoundary, null, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "button complete-button complete",
    onClick: function onClick(e) {
      return updateComplete(e);
    }
  }, "Resume ", /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon one-up"
  })))));
};
// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useGames.tsx
var useGames = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/pages/GamesPage/GamesPage.scss
var GamesPage_GamesPage = __webpack_require__(72);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/pages/GamesPage/GamesPage.tsx










var GamesPage_GamesPage_GamesPage = function GamesPage() {
  var _useContext = Object(external_react_["useContext"])(useGames["a" /* GamesContext */]),
      games = _useContext.games,
      fetchUsersGames = _useContext.fetchUsersGames,
      user = _useContext.user,
      setGames = _useContext.setGames;

  var params = Object(router_["useParams"])();
  var userId = params.userId;

  var _useContext2 = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      setCurrentUser = _useContext2.setCurrentUser,
      currentUser = _useContext2.currentUser;

  var followUser = Object(useSignedRequest["a" /* useSignedRequest */])("PATCH", "/users/friend/".concat(userId));
  Object(external_react_["useEffect"])(function () {
    fetchUsersGames(userId);
  }, [userId]);
  var sortedGames = Object(external_react_["useMemo"])(function () {
    if (games && games.length > 0) {
      var inProgress = games.filter(function (game) {
        return game.completed === false;
      });
      var finished = games.filter(function (game) {
        return game.completed === true;
      });
      var sorted = [].concat(toConsumableArray_default()(inProgress), toConsumableArray_default()(finished));
      return sorted;
    } else {
      return [];
    }
  }, [games]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var _yield$followUser, updatedUser;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return followUser();

            case 2:
              _yield$followUser = _context.sent;
              updatedUser = _yield$followUser.data;
              setCurrentUser(updatedUser);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var isNotCurrentUser = userId !== currentUser._id;
  var isFriend = currentUser.friends.includes(userId);
  var displayButton = isNotCurrentUser && !isFriend;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "games-page center"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header"
  }, displayButton && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon plus",
    onClick: function onClick() {
      return onSubmit();
    },
    title: "Add This User to My Friends"
  }), isFriend && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon star",
    title: "".concat(user.userName, " is your friend")
  }), user.userName && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "username"
  }, user.userName, "'s Games")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "blocks"
  }, games && sortedGames.map(function (game) {
    return /*#__PURE__*/external_react_default.a.createElement(Block_Block_Block, {
      key: game._id,
      game: game,
      completed: game.completed,
      setGames: setGames
    });
  })));
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friend; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _Friend_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);
/* harmony import */ var _Friend_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Friend_scss__WEBPACK_IMPORTED_MODULE_6__);







var Friend = function Friend(_ref) {
  var friend = _ref.friend;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__[/* UserContext */ "a"]),
      setCurrentUser = _useContext.setCurrentUser,
      loggedIn = _useContext.loggedIn,
      currentUser = _useContext.currentUser;

  var isFriend = loggedIn && currentUser.friends.includes(friend._id);
  var navigate = Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();
  var unfriendRequest = Object(_hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_4__[/* useSignedRequest */ "a"])("PATCH", "/users/unfriend/".concat(friend._id));
  var addFriendRequest = Object(_hooks_useSignedRequest__WEBPACK_IMPORTED_MODULE_4__[/* useSignedRequest */ "a"])("PATCH", "/users/friend/".concat(friend._id));

  var unfriend = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var unfriendResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault;
              _context.next = 3;
              return unfriendRequest();

            case 3:
              unfriendResponse = _context.sent;
              setCurrentUser(unfriendResponse.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function unfriend(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var addFriend = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var addFriendResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return addFriendRequest();

            case 3:
              addFriendResponse = _context2.sent;
              setCurrentUser(addFriendResponse.data);
              navigate("/friends");

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addFriend(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "friend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "app__icon mario"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/games/".concat(friend._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "username"
  }, friend.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, new Date(friend.createdAt).toDateString()))), isFriend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "app__icon goomba",
    onClick: function onClick(e) {
      return unfriend(e);
    },
    title: "Remove From Friends"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "app__icon plus",
    onClick: function onClick(e) {
      return addFriend(e);
    },
    title: "Add Friend"
  }))) // <div className="friend">
  //   <div className="app__icon mario" />
  //   <div className="header">
  //     <Link to={`/games/${friend._id}`}>
  //       <div className="username">{friend.userName}</div>
  //       <div>{new Date(friend.createdAt).toDateString()}</div>
  //     </Link>
  //   </div>
  // </div>
  ;
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(12);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useCurrentUser.tsx
var useCurrentUser = __webpack_require__(5);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/app.css
var app = __webpack_require__(58);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/components/Masthead/Masthead.scss
var Masthead_Masthead = __webpack_require__(66);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/util/jwt.ts
var util_jwt = __webpack_require__(13);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/components/CreateGameForm/CreateGameForm.scss
var CreateGameForm_CreateGameForm = __webpack_require__(67);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/hooks/useGames.tsx
var useGames = __webpack_require__(14);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/components/CreateGameForm/CreateGameForm.tsx










var CreateGameForm_CreateGameForm_CreateGameForm = function CreateGameForm() {
  var _useState = Object(external_react_["useState"])(""),
      _useState2 = slicedToArray_default()(_useState, 2),
      title = _useState2[0],
      setGameTitle = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(""),
      _useState4 = slicedToArray_default()(_useState3, 2),
      year = _useState4[0],
      setGameYear = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var _useContext = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      currentUser = _useContext.currentUser;

  var _useContext2 = Object(external_react_["useContext"])(useGames["a" /* GamesContext */]),
      fetchUsersGames = _useContext2.fetchUsersGames;

  var navigate = Object(router_["useNavigate"])();

  var createGame = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e, title, year) {
      var game, jwt, newGame;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              game = {
                title: title,
                year: year,
                started: new Date(Date.now()).toDateString(),
                lastPlayed: new Date(Date.now()).toDateString(),
                hours: 0,
                completed: false,
                completedOn: "",
                userId: currentUser._id
              };
              jwt = Object(util_jwt["a" /* getToken */])();
              _context.next = 5;
              return external_axios_default.a.post("http://localhost:5000/games/".concat(currentUser._id), game, {
                headers: {
                  Authorization: "Bearer ".concat(jwt)
                }
              });

            case 5:
              newGame = _context.sent;
              _context.next = 8;
              return fetchUsersGames(currentUser._id);

            case 8:
              setOpen(false);
              setGameTitle("");
              setGameYear("");
              navigate("/games/".concat(currentUser._id));
              return _context.abrupt("return", newGame);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createGame(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "create-game-form"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon plus",
    onClick: function onClick() {
      return setOpen(!open);
    },
    title: "Add New Game"
  }), open && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: ""
  }, "Title:", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: title,
    onChange: function onChange(e) {
      return setGameTitle(e.target.value);
    }
  })), /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: ""
  }, "Release Year:", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: year,
    onChange: function onChange(e) {
      return setGameYear(e.target.value);
    }
  })), /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: function onClick(e) {
      return createGame(e, title, year);
    }
  }, "Create Game")));
};
// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/components/Masthead/Masthead.tsx





var Masthead_Masthead_Masthead = function Masthead() {
  var _useContext = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      loggedIn = _useContext.loggedIn,
      currentUser = _useContext.currentUser;

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "masthead"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "title"
  }, "Gamekeeper"), loggedIn ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "logged-in"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/users/search"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon mag",
    title: "Find A Friend"
  })), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/friends"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__icon star",
    title: "My Friends"
  })), /*#__PURE__*/external_react_default.a.createElement(CreateGameForm_CreateGameForm_CreateGameForm, null), /*#__PURE__*/external_react_default.a.createElement("span", null, "Welcome,", " ", /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/games/".concat(currentUser._id)
  }, currentUser.userName))) : /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "login"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/login"
  }, "Login"), /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/register"
  }, "Register")));
};
// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/components/UserForm/UserForm.tsx + 1 modules
var UserForm = __webpack_require__(16);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/pages/GamesPage/GamesPage.tsx + 2 modules
var GamesPage = __webpack_require__(19);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/pages/FriendsPage/FriendsPage.tsx
var FriendsPage = __webpack_require__(17);

// EXTERNAL MODULE: /Users/stride-admin/development/gamekeeper/src/pages/SearchPage/SearchPage.tsx
var SearchPage = __webpack_require__(18);

// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/components/AppContent/AppContent.tsx









var AppContent_AppContent = function AppContent() {
  var _useContext = Object(external_react_["useContext"])(useCurrentUser["a" /* UserContext */]),
      loggedIn = _useContext.loggedIn;

  var _useGames = Object(useGames["b" /* useGames */])(),
      games = _useGames.games,
      setGames = _useGames.setGames,
      fetchUsersGames = _useGames.fetchUsersGames,
      user = _useGames.user;

  return /*#__PURE__*/external_react_default.a.createElement(useGames["a" /* GamesContext */].Provider, {
    value: {
      games: games,
      setGames: setGames,
      fetchUsersGames: fetchUsersGames,
      user: user
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Masthead_Masthead_Masthead, null), /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(GamesPage["GamesPage"], {
    path: "/games/:userId"
  }), /*#__PURE__*/external_react_default.a.createElement(SearchPage["SearchPage"], {
    path: "/users/search"
  }), !loggedIn ?
  /*#__PURE__*/
  // <LoginPage path="/login" />
  external_react_default.a.createElement(UserForm["a" /* UserForm */], {
    type: "login",
    path: "/login"
  }) : /*#__PURE__*/external_react_default.a.createElement(router_["Redirect"], {
    to: "/games",
    from: "/login"
  }), loggedIn ? /*#__PURE__*/external_react_default.a.createElement(FriendsPage["FriendsPage"], {
    path: "/friends"
  }) : /*#__PURE__*/external_react_default.a.createElement(router_["Redirect"], {
    to: "/games",
    from: "/friends"
  }), !loggedIn ? /*#__PURE__*/external_react_default.a.createElement(UserForm["a" /* UserForm */], {
    type: "register",
    path: "/register"
  }) : /*#__PURE__*/external_react_default.a.createElement(router_["Redirect"], {
    to: "/games",
    from: "/register"
  })));
};
// CONCATENATED MODULE: /Users/stride-admin/development/gamekeeper/src/App.tsx




 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(["dynamic"]);

function App() {
  var _useCurrentUser = Object(useCurrentUser["b" /* useCurrentUser */])(),
      currentUser = _useCurrentUser.currentUser,
      setCurrentUser = _useCurrentUser.setCurrentUser,
      validateUser = _useCurrentUser.validateUser,
      loggedIn = _useCurrentUser.loggedIn,
      setLoggedIn = _useCurrentUser.setLoggedIn;

  Object(external_react_["useEffect"])(function () {
    validateUser();
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "app__background"
  }, /*#__PURE__*/external_react_default.a.createElement(useCurrentUser["a" /* UserContext */].Provider, {
    value: {
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      loggedIn: loggedIn,
      setLoggedIn: setLoggedIn
    }
  }, /*#__PURE__*/external_react_default.a.createElement(AppContent_AppContent, null))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("/Users/stride-admin/development/gamekeeper/node_modules/react-static/lib/browser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/plus.098aad04.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })));
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " + TypeScript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Learn", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/sw-yx/react-typescript-cheatsheet"
  }, "React + TypeScript")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/swyx"
  }, "Report issues with this template")));
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserForm_UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


var LoginPage = function LoginPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserForm_UserForm__WEBPACK_IMPORTED_MODULE_1__[/* UserForm */ "a"], {
    type: "login"
  }));
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body));
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(12);

var _router = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(43);
module.exports = __webpack_require__(50);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(42)["default"];

var _require = __webpack_require__(27),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(27),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(44),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about.tsx */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog.tsx */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/FriendsPage/FriendsPage.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/FriendsPage/FriendsPage.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/FriendsPage/FriendsPage.tsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/FriendsPage/FriendsPage.tsx';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/GamesPage/GamesPage.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/GamesPage/GamesPage.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/GamesPage/GamesPage.tsx";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/GamesPage/GamesPage.tsx';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/index.tsx';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/LoginPage/LoginPage.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/LoginPage/LoginPage.tsx */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/LoginPage/LoginPage.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/LoginPage/LoginPage.tsx";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/LoginPage/LoginPage.tsx';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/SearchPage/SearchPage.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/SearchPage/SearchPage.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/SearchPage/SearchPage.tsx";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/SearchPage/SearchPage.tsx';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/about.tsx': t_1,
  '__react_static_root__/src/pages/blog.tsx': t_2,
  '__react_static_root__/src/pages/FriendsPage/FriendsPage.tsx': t_3,
  '__react_static_root__/src/pages/GamesPage/GamesPage.tsx': t_4,
  '__react_static_root__/src/pages/index.tsx': t_5,
  '__react_static_root__/src/pages/LoginPage/LoginPage.tsx': t_6,
  '__react_static_root__/src/pages/SearchPage/SearchPage.tsx': t_7,
  '__react_static_root__/src/containers/Post': t_8
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(23);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 47;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(28);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(29);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(51);

var _interopRequireDefault = __webpack_require__(52);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(53));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(54));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(55);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(56)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("/Users/stride-admin/development/gamekeeper/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(57)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);", ""]);
var urlEscape = __webpack_require__(24);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(59));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(31));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(60));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(61));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(62));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(65));

// Module
exports.push([module.i, "body {\n  font-family: \"Press Start 2P\", \"Helvetica Neue Light\", \"Helvetica Neue\",\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  color: white;\n  text-shadow: 1px 1px black;\n}\n\na {\n  text-decoration: none;\n  /* color: blue; */\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n\n.app__background {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: cover;\n  background-repeat: repeat-y;\n  height: 100%;\n  min-height: 100vh;\n}\n\n.app__icon {\n  height: 30px;\n  width: 30px;\n  background-size: cover;\n}\n\n.app__icon:hover {\n  cursor: pointer;\n}\n\n.plus {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n.star {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n\n.mag {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n\n.mario {\n  height: 100px;\n  width: 100px;\n  background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n}\n\n.goomba {\n  background-image: url(" + ___CSS_LOADER_URL___5___ + ");\n}\n\n.one-up {\n  background-image: url(" + ___CSS_LOADER_URL___6___ + ");\n}\n\n.coin {\n  background-image: url(" + ___CSS_LOADER_URL___7___ + ");\n}\n", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mario-sky.39ea9be4.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/star.5d7275e4.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mag.e02363bc.png";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/goomba.1da278cc.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/one-up.a63c2dbd.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/coin.0d50a58d.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Imports
var urlEscape = __webpack_require__(24);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(31));

// Module
exports.push([module.i, ".masthead{height:70px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:0 25px}.masthead .title{font-size:24px}.masthead .login a{margin-left:25px}.masthead .logged-in{display:flex;align-items:center}.masthead .logged-in .app__icon{margin-right:25px}.masthead .logged-in a{color:white}.masthead .logged-in a:hover{color:blue}.masthead .logged-in .plus{height:30px;width:30px;background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-size:cover}\n", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".create-game-form{display:flex;flex-direction:column;font-size:12px;color:black;text-shadow:none;position:relative}.create-game-form .content{top:45px;left:-150px;background-color:#f5f5f5;width:300px;border-radius:5px;position:absolute;z-index:10;display:flex;flex-direction:column;border:2px dotted gray}.create-game-form .content label{display:flex;justify-content:space-between;margin:5px 10px}.create-game-form .content label input{border:none;border-bottom:1px solid black;background:none}.create-game-form .content button{margin:15px 10px;padding:10px;border:none;color:BLACK;background-color:lightgreen;font-family:\"Press Start 2P\";font-size:10px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}\n", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".user-form{display:flex;justify-content:center;color:black;text-shadow:1px 1px gray;font-size:20px}.user-form .error{font-size:14px;color:white;padding:5px;border-radius:5px;text-decoration:none;background-color:rgba(255,0,0,0.8);opacity:0}.user-form .visible{opacity:1}.user-form div{margin:10px 0;text-decoration:underline}.user-form label{margin:10px 0;display:flex;flex-direction:column;font-size:16px}.user-form form{background:white;display:flex;flex-direction:column;padding:20px;border:1px dotted black;border-radius:5px;width:20%;margin-top:10%}.user-form input{margin:10px 0;width:90%;border-top:0px;border-right:0px;border-left:0px}.user-form input:focus{outline:none}\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Imports
var urlEscape = __webpack_require__(24);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(70));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(71));

// Module
exports.push([module.i, ".block{background-image:url(" + ___CSS_LOADER_URL___0___ + ");height:350px;width:350px;background-size:cover;font-size:16px;border:1px dotted black;margin:30px 50px}.block h1{font-size:24px;margin:0}.block__flex{box-sizing:border-box;height:100%;padding:10px;display:flex;flex-direction:column;justify-content:space-between}.block__label{font-size:14px;font-style:italic;color:lightgray}.block__info{font-size:18px;margin-bottom:20px;color:white}.block .button{padding:10px;border:none;color:white;font-family:\"Press Start 2P\";font-size:10px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex;align-items:center}.block .button .app__icon{height:16px;width:14px;margin-left:10px}.block .button.complete{background:green}.block .complete-button{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background:red;align-self:flex-end}.block .hours{display:flex;flex-direction:row;justify-content:space-between;margin:0 10px}.block .hours .app__icon{margin-right:20px}.block.completed{background-image:url(" + ___CSS_LOADER_URL___1___ + ")}\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/question-block.d6e05cee.png";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".games-page{display:flex;flex-wrap:wrap;justify-content:center}.games-page .header{display:flex;align-items:center}.games-page .header .username{margin:30px 0;margin-left:15px;font-size:22px}.games-page .blocks{display:flex;flex-wrap:wrap;margin:0 30px}\n", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".friend{display:flex;flex-direction:column;align-items:center;margin:20px;background:black;border-radius:5px;border:1px dotted white;padding:30px 0}.friend .header{display:flex;align-items:center}.friend .header div{color:white}.friend .header .app__icon{margin-left:10px}.friend .username{font-size:20px;margin:10px 0}\n", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".friends-page{display:flex;flex-direction:column}.friends-page .friends{display:flex;flex-direction:column}.friends-page .header{font-size:22px;margin:0 auto}\n", ""]);



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".search-page{display:flex;flex-direction:column;align-items:center;color:black;text-shadow:1px 1px gray}.search-page form{background-color:white;border-radius:5px;border:1px dotted black;display:flex;align-items:center;padding:20px}.search-page label{display:flex}.search-page input{border:none;border-bottom:1px solid black;background:none;width:400px}.search-page input:focus{outline:1px dotted lightblue}.search-page button{padding:10px;border:none;color:white;font-family:\"Press Start 2P\";font-size:10px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:flex;align-items:center;background-color:chartreuse;text-shadow:1px 1px black;margin-left:30px}.search-page .header{font-size:22px;margin:20px 0}.search-page .results{width:100%;display:flex;flex-direction:column}\n", ""]);



/***/ })
/******/ ]);
});