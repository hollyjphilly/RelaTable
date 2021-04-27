/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/images/portfolio_icon.png":
/*!***************************************!*\
  !*** ./src/images/portfolio_icon.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/portfolio_icon.png");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _images_portfolio_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/portfolio_icon.png */ "./src/images/portfolio_icon.png");





var state = {
  hidden: true,
  referencesCreated: false,
  last: ""
};
var joinButtons = document.querySelectorAll(".join-btn");
var wrappedjoinButtons = document.querySelectorAll(".join-btn-wrapper");
document.querySelector("#connect-btn").addEventListener("click", function () {
  createReferences();
  createSQLCode("reset");
  createDataOutput("reset");
  highlightTables("reset");
  changeButtonFill();
});
joinButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    createSQLCode(btn.id);
    createDataOutput(btn.id);
  });
});
wrappedjoinButtons.forEach(function (wrappedBtn) {
  wrappedBtn.addEventListener("mouseenter", toggleHelp);
});

function toggleHelp() {
  if (state.hidden && !state.referencesCreated) {
    var helpText = document.querySelector(".help-text");
    helpText.style.display = "block";
    state.hidden = false;
  }
}

function createReferences() {
  var connectButton = document.getElementById("connect-btn");
  var connectText = connectButton.firstElementChild;
  var plus = document.getElementById("plus");
  var helpText = document.querySelector(".help-text");
  document.querySelectorAll("tr .ref:last-child").forEach(function (tr) {
    if (tr.classList.contains("hidden")) {
      state.referencesCreated = true;
      tr.classList.remove("hidden");
      connectButton.style.backgroundColor = "rgb(205, 236, 255)";
      connectText.innerHTML = "References created";
      connectText.style.color = "rgb(40, 113, 158)";
      plus.innerHTML = "✓";
      plus.style.color = "rgb(40, 113, 158)";
      plus.style.fontSize = "large";
      joinButtons.forEach(function (btn) {
        btn.disabled = false;
      });
      helpText.style.display = "none";
      state.hidden = true;
    } else {
      state.referencesCreated = false;
      tr.classList.add("hidden");
      connectButton.style.backgroundColor = "rgb(237, 237, 237)";
      connectText.innerHTML = "Create references";
      connectText.style.color = "inherit";
      plus.innerHTML = "+";
      plus.style.color = "#5E5E5E";
      plus.style.fontSize = "larger";
      joinButtons.forEach(function (btn) {
        btn.disabled = true;
      });
    }
  });
}

function createSQLCode(joinType) {
  var code = document.getElementById("code");

  switch (joinType) {
    case "reset":
      code.innerHTML = "Click a JOIN button and a SQL query will generate here...";
      break;

    case "inner":
      code.innerHTML = "SELECT * <br> FROM actors <br> INNER JOIN movies <br> ON actors.movie_id = movies.id;";
      break;

    case "left":
      code.innerHTML = "SELECT * <br> FROM actors <br> LEFT JOIN movies <br> ON actors.movie_id = movies.id;";
      break;

    case "right":
      code.innerHTML = "SELECT * <br> FROM actors <br> RIGHT JOIN movies <br> ON actors.movie_id = movies.id;";
      break;

    case "full":
      code.innerHTML = "SELECT * <br> FROM actors <br> FULL JOIN movies <br> ON actors.movie_id = movies.id;";
      break;

    default:
      return;
  }
}

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function joinMoviesOnActors(_x, _x2, _x3) {
  return _joinMoviesOnActors.apply(this, arguments);
}

function _joinMoviesOnActors() {
  _joinMoviesOnActors = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(newTable, output, moviesDup) {
    var timer, i;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newTable.rows).forEach(function (row) {
              row.removeAttribute('style');
            });

            output.append(newTable);
            timer = 0; // cycle through each of the actor rows

            i = 0;

          case 4:
            if (!(i < newTable.rows.length)) {
              _context2.next = 14;
              break;
            }

            console.log("i", i);

            if (!(i < 2)) {
              _context2.next = 10;
              break;
            }

            (function () {
              // copy column headers over
              var newTableHeaderRow = newTable.rows[i];

              var moviesHeaderRow = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(moviesDup.rows[i].children);

              console.log("new Table Header", newTableHeaderRow, "movies Header", moviesHeaderRow);
              moviesHeaderRow.forEach(function (cell) {
                return newTableHeaderRow.append(cell);
              });
            })();

            _context2.next = 11;
            break;

          case 10:
            return _context2.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
              var row, cells, numCells, movie_id, moviesRow, td;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // look at the row's movie_id
                      row = newTable.rows[i];
                      console.log("row", row);
                      cells = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(row.children);
                      numCells = cells.length;
                      movie_id = cells[numCells - 1].innerText;
                      _context.next = 7;
                      return sleep(500);

                    case 7:
                      // append the appropiate movie row's cells
                      if (movie_id <= 3) {
                        console.log("moviesDup", moviesDup.rows, "row", row, "movie_id", movie_id);
                        moviesRow = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(moviesDup.rows[parseInt(movie_id) + 1].children);
                        moviesRow.forEach(function (cell) {
                          console.log("appending cell", cell.innerText, "to row", row);
                          row.append(cell.cloneNode(true));
                        });
                      } else {
                        td = document.createElement('td');
                        td.setAttribute("colspan", "4");
                        td.className = "tble-cell null";
                        td.innerText = "null";
                        row.append(td);
                      }

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })(), "t0", 11);

          case 11:
            i++;
            _context2.next = 4;
            break;

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _joinMoviesOnActors.apply(this, arguments);
}

function changeButtonFill(className) {
  if (state.last) document.querySelector(".".concat(state.last)).style.fill = "#888888";
  if (state.last === "all") document.querySelectorAll(".".concat(state.last)).forEach(function (el) {
    el.style.fill = "#888888";
  });
  if (className) document.querySelector(".".concat(className)).style.fill = "rgb(205, 236, 255)";
  if (className === "all") document.querySelectorAll(".".concat(className)).forEach(function (el) {
    el.style.fill = "rgb(205, 236, 255)";
  });
  state.last = className;
}

;

function highlightTables(joinType) {
  switch (joinType) {
    case "reset":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6, #m1, #m2, #m3").forEach(function (el) {
        el.style.transition = "background 0.1s linear 0s";
        el.style.backgroundColor = "#fff";
      });
      break;

    case "inner":
      document.querySelectorAll("#a1, #a2, #a3, #a5, #a6, #m2, #m3").forEach(function (el) {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;

    case "left":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6").forEach(function (el) {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;

    case "right":
      document.querySelectorAll("#m1, #m2, #m3").forEach(function (el) {
        el.style.transition = "background 0.15s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;

    case "full":
      document.querySelectorAll("#a1, #a2, #a3, #a4, #a5, #a6, #m1, #m2, #m3").forEach(function (el) {
        el.style.transition = "background 0.1s linear 0s";
        el.style.backgroundColor = "rgb(205, 236, 255)";
      });
      break;

    default:
      return;
  }
}

function createDataOutput(_x4) {
  return _createDataOutput.apply(this, arguments);
}

function _createDataOutput() {
  _createDataOutput = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(joinType) {
    var output, actorsDup, moviesDup, newTable, tr, blank;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            output = document.getElementById("output-container");
            actorsDup = document.getElementById("actors-table").cloneNode(true);
            moviesDup = document.getElementById("movies-table").cloneNode(true);
            newTable = actorsDup;
            newTable.id = "output-table";
            newTable.querySelector("#actors-body").id = "output-body";
            newTable.style.color = "black";
            newTable.style.backgroundColor = "white";
            tr = document.createElement("tr");
            blank = document.createElement("td");
            blank.setAttribute("colspan", "4");
            tr.append(blank);
            _context3.t0 = joinType;
            _context3.next = _context3.t0 === "reset" ? 15 : _context3.t0 === "inner" ? 17 : _context3.t0 === "left" ? 26 : _context3.t0 === "right" ? 34 : _context3.t0 === "full" ? 45 : 55;
            break;

          case 15:
            output.innerHTML = "None";
            return _context3.abrupt("break", 56);

          case 17:
            output.innerHTML = null;
            changeButtonFill("center-fill");
            highlightTables("reset");
            _context3.next = 22;
            return sleep(510);

          case 22:
            highlightTables("inner");
            newTable.deleteRow(5); // delete the null movie_id row

            joinMoviesOnActors(newTable, output, moviesDup);
            return _context3.abrupt("break", 56);

          case 26:
            output.innerHTML = null;
            changeButtonFill("left-fill");
            highlightTables("reset");
            _context3.next = 31;
            return sleep(510);

          case 31:
            highlightTables("left");
            joinMoviesOnActors(newTable, output, moviesDup);
            return _context3.abrupt("break", 56);

          case 34:
            output.innerHTML = null;
            changeButtonFill("right-fill");
            highlightTables("reset");
            _context3.next = 39;
            return sleep(510);

          case 39:
            highlightTables("right");
            newTable.deleteRow(5); // delete the null movie_id row

            _context3.next = 43;
            return joinMoviesOnActors(newTable, output, moviesDup);

          case 43:
            addJurassicPark(newTable, moviesDup);
            return _context3.abrupt("break", 56);

          case 45:
            output.innerHTML = null;
            changeButtonFill("all");
            highlightTables("reset");
            _context3.next = 50;
            return sleep(510);

          case 50:
            highlightTables("full");
            _context3.next = 53;
            return joinMoviesOnActors(newTable, output, moviesDup);

          case 53:
            addJurassicPark(newTable, moviesDup);
            return _context3.abrupt("break", 56);

          case 55:
            return _context3.abrupt("return");

          case 56:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createDataOutput.apply(this, arguments);
}

function addJurassicPark(_x5, _x6) {
  return _addJurassicPark.apply(this, arguments);
}

function _addJurassicPark() {
  _addJurassicPark = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(newTable, moviesDup) {
    var row, td, moviesRow;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return sleep(500);

          case 2:
            newTable.append(document.createElement('tr'));
            row = newTable.rows[newTable.rows.length - 1];
            console.log(row);
            td = document.createElement('td');
            td.setAttribute("colspan", "4");
            td.className = "tble-cell null";
            td.innerText = "null";
            row.append(td);
            moviesRow = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(moviesDup.rows[2].children);
            moviesRow.forEach(function (cell) {
              return row.append(cell.cloneNode(true));
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addJurassicPark.apply(this, arguments);
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3JlbGF0YWJsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9zcmMvaW1hZ2VzL3BvcnRmb2xpb19pY29uLnBuZyIsIndlYnBhY2s6Ly9yZWxhdGFibGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVsYXRhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlbGF0YWJsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWxhdGFibGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlbGF0YWJsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlbGF0YWJsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbGF0YWJsZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImhpZGRlbiIsInJlZmVyZW5jZXNDcmVhdGVkIiwibGFzdCIsImpvaW5CdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid3JhcHBlZGpvaW5CdXR0b25zIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVSZWZlcmVuY2VzIiwiY3JlYXRlU1FMQ29kZSIsImNyZWF0ZURhdGFPdXRwdXQiLCJoaWdobGlnaHRUYWJsZXMiLCJjaGFuZ2VCdXR0b25GaWxsIiwiZm9yRWFjaCIsImJ0biIsImlkIiwid3JhcHBlZEJ0biIsInRvZ2dsZUhlbHAiLCJoZWxwVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsImNvbm5lY3RCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImNvbm5lY3RUZXh0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJwbHVzIiwidHIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImJhY2tncm91bmRDb2xvciIsImlubmVySFRNTCIsImNvbG9yIiwiZm9udFNpemUiLCJkaXNhYmxlZCIsImFkZCIsImpvaW5UeXBlIiwiY29kZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJqb2luTW92aWVzT25BY3RvcnMiLCJuZXdUYWJsZSIsIm91dHB1dCIsIm1vdmllc0R1cCIsInJvd3MiLCJyb3ciLCJyZW1vdmVBdHRyaWJ1dGUiLCJhcHBlbmQiLCJ0aW1lciIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibmV3VGFibGVIZWFkZXJSb3ciLCJtb3ZpZXNIZWFkZXJSb3ciLCJjaGlsZHJlbiIsImNlbGwiLCJjZWxscyIsIm51bUNlbGxzIiwibW92aWVfaWQiLCJpbm5lclRleHQiLCJtb3ZpZXNSb3ciLCJwYXJzZUludCIsImNsb25lTm9kZSIsInRkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImZpbGwiLCJlbCIsInRyYW5zaXRpb24iLCJhY3RvcnNEdXAiLCJibGFuayIsImRlbGV0ZVJvdyIsImFkZEp1cmFzc2ljUGFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLDZEQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnVEO0FBQ0o7QUFDc0I7QUFDbEI7QUFDeEM7QUFDZixTQUFTLDhEQUFpQixTQUFTLDREQUFlLFNBQVMsdUVBQTBCLFNBQVMsOERBQWlCO0FBQy9HLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDZEQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7O0FDUkEsZ0hBQStDLEM7Ozs7Ozs7Ozs7QUNBL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDBDQUEwQztBQUMxQzs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QywyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUE7QUFBQTtBQUFBLG1CQUNRUixLQUFLLENBQUMsR0FBRCxDQURiOztBQUFBO0FBRUVNLG9CQUFRLENBQUNNLE1BQVQsQ0FBZ0IvQyxRQUFRLENBQUNpRSxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ01wQixlQUhSLEdBR2NKLFFBQVEsQ0FBQ0csSUFBVCxDQUFjSCxRQUFRLENBQUNHLElBQVQsQ0FBY00sTUFBZCxHQUF1QixDQUFyQyxDQUhkO0FBSUVDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVAsR0FBWjtBQUNNbUIsY0FMUixHQUthaEUsUUFBUSxDQUFDaUUsYUFBVCxDQUF1QixJQUF2QixDQUxiO0FBTUVELGNBQUUsQ0FBQ0UsWUFBSCxDQUFnQixTQUFoQixFQUEyQixHQUEzQjtBQUNBRixjQUFFLENBQUNHLFNBQUgsR0FBZSxnQkFBZjtBQUNBSCxjQUFFLENBQUNKLFNBQUgsR0FBZSxNQUFmO0FBQ0FmLGVBQUcsQ0FBQ0UsTUFBSixDQUFXaUIsRUFBWDtBQUNJSCxxQkFWTixxRkFVc0JsQixTQUFTLENBQUNDLElBQVYsQ0FBZSxDQUFmLEVBQWtCVyxRQVZ4QztBQVdFTSxxQkFBUyxDQUFDbkQsT0FBVixDQUFrQixVQUFBOEMsSUFBSTtBQUFBLHFCQUFJWCxHQUFHLENBQUNFLE1BQUosQ0FBV1MsSUFBSSxDQUFDTyxTQUFMLENBQWUsSUFBZixDQUFYLENBQUo7QUFBQSxhQUF0Qjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xudmFyIHJ1bnRpbWUgPSBmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cblxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG5cbiAgZXhwb3J0cy53cmFwID0gd3JhcDsgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7IC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9IC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cblxuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcblxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7IC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvciA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07IC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG5cblxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfSAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuXG5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yOyAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cblxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9IC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcblxuXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG5cbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lID8gR2VuU3RhdGVDb21wbGV0ZWQgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7IC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG5cblxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcblxuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7IC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cblxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYzsgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0gLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuXG5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfSAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG5cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTsgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAga2V5cy5yZXZlcnNlKCk7IC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cblxuXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcblxuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH0gLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cblxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwOyAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cblxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiAodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJiAodHlwZSA9PT0gXCJicmVha1wiIHx8IHR5cGUgPT09IFwiY29udGludWVcIikgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fCByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uICh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cblxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiAoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTsgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG5cbiAgcmV0dXJuIGV4cG9ydHM7XG59KCAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbi8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbi8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG50eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufSIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BvcnRmb2xpb19pY29uLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy9wb3J0Zm9saW9faWNvbi5wbmdcIjtcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGhpZGRlbjogdHJ1ZSxcbiAgcmVmZXJlbmNlc0NyZWF0ZWQ6IGZhbHNlLFxuICBsYXN0OiBcIlwiLFxufVxuXG5jb25zdCBqb2luQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuam9pbi1idG5cIik7XG5jb25zdCB3cmFwcGVkam9pbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpvaW4tYnRuLXdyYXBwZXJcIik7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29ubmVjdC1idG5cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlUmVmZXJlbmNlcygpXG4gICAgY3JlYXRlU1FMQ29kZShcInJlc2V0XCIpXG4gICAgY3JlYXRlRGF0YU91dHB1dChcInJlc2V0XCIpXG4gICAgaGlnaGxpZ2h0VGFibGVzKFwicmVzZXRcIilcbiAgICBjaGFuZ2VCdXR0b25GaWxsKClcbiAgfSk7XG5cbmpvaW5CdXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlU1FMQ29kZShidG4uaWQpXG4gICAgY3JlYXRlRGF0YU91dHB1dChidG4uaWQpXG4gIH0pO1xufSlcblxud3JhcHBlZGpvaW5CdXR0b25zLmZvckVhY2god3JhcHBlZEJ0biA9PiB7XG4gIHdyYXBwZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdG9nZ2xlSGVscCk7XG59KVxuXG5mdW5jdGlvbiB0b2dnbGVIZWxwKCkge1xuICBpZiAoc3RhdGUuaGlkZGVuICYmICFzdGF0ZS5yZWZlcmVuY2VzQ3JlYXRlZCkge1xuICAgIGNvbnN0IGhlbHBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWxwLXRleHRcIilcbiAgICAgIGhlbHBUZXh0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIHN0YXRlLmhpZGRlbiA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZmVyZW5jZXMoKSB7XG4gIGNvbnN0IGNvbm5lY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbm5lY3QtYnRuXCIpXG4gIGNvbnN0IGNvbm5lY3RUZXh0ID0gY29ubmVjdEJ1dHRvbi5maXJzdEVsZW1lbnRDaGlsZFxuICBjb25zdCBwbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzXCIpXG4gIGNvbnN0IGhlbHBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWxwLXRleHRcIilcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHIgLnJlZjpsYXN0LWNoaWxkXCIpLmZvckVhY2godHIgPT4ge1xuICAgIFxuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcblxuICAgICAgc3RhdGUucmVmZXJlbmNlc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgICB0ci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG5cbiAgICAgIGNvbm5lY3RCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA1LCAyMzYsIDI1NSlcIlxuXG4gICAgICBjb25uZWN0VGV4dC5pbm5lckhUTUwgPSBcIlJlZmVyZW5jZXMgY3JlYXRlZFwiXG4gICAgICBjb25uZWN0VGV4dC5zdHlsZS5jb2xvciA9IFwicmdiKDQwLCAxMTMsIDE1OClcIlxuXG4gICAgICBwbHVzLmlubmVySFRNTCA9IFwi4pyTXCJcbiAgICAgIHBsdXMuc3R5bGUuY29sb3IgPSBcInJnYig0MCwgMTEzLCAxNTgpXCJcbiAgICAgIHBsdXMuc3R5bGUuZm9udFNpemUgPSBcImxhcmdlXCJcblxuICAgICAgam9pbkJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pXG5cbiAgICAgIGhlbHBUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIHN0YXRlLmhpZGRlbiA9IHRydWU7XG4gICAgICBcbiAgICB9IGVsc2Uge1xuXG4gICAgICBzdGF0ZS5yZWZlcmVuY2VzQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgXG4gICAgICB0ci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgICBjb25uZWN0QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIzNywgMjM3LCAyMzcpXCJcblxuICAgICAgY29ubmVjdFRleHQuaW5uZXJIVE1MID0gXCJDcmVhdGUgcmVmZXJlbmNlc1wiXG4gICAgICBjb25uZWN0VGV4dC5zdHlsZS5jb2xvciA9IFwiaW5oZXJpdFwiXG5cbiAgICAgIHBsdXMuaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBwbHVzLnN0eWxlLmNvbG9yID0gXCIjNUU1RTVFXCJcbiAgICAgIHBsdXMuc3R5bGUuZm9udFNpemUgPSBcImxhcmdlclwiXG5cbiAgICAgIGpvaW5CdXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pXG5cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNRTENvZGUoam9pblR5cGUpIHtcbiAgY29uc3QgY29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKVxuICBzd2l0Y2ggKGpvaW5UeXBlKSB7XG4gICAgY2FzZSBcInJlc2V0XCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiQ2xpY2sgYSBKT0lOIGJ1dHRvbiBhbmQgYSBTUUwgcXVlcnkgd2lsbCBnZW5lcmF0ZSBoZXJlLi4uXCJcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImlubmVyXCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiU0VMRUNUICogPGJyPiBGUk9NIGFjdG9ycyA8YnI+IElOTkVSIEpPSU4gbW92aWVzIDxicj4gT04gYWN0b3JzLm1vdmllX2lkID0gbW92aWVzLmlkO1wiXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiU0VMRUNUICogPGJyPiBGUk9NIGFjdG9ycyA8YnI+IExFRlQgSk9JTiBtb3ZpZXMgPGJyPiBPTiBhY3RvcnMubW92aWVfaWQgPSBtb3ZpZXMuaWQ7XCJcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiU0VMRUNUICogPGJyPiBGUk9NIGFjdG9ycyA8YnI+IFJJR0hUIEpPSU4gbW92aWVzIDxicj4gT04gYWN0b3JzLm1vdmllX2lkID0gbW92aWVzLmlkO1wiXG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJmdWxsXCI6XG4gICAgICBjb2RlLmlubmVySFRNTCA9IFwiU0VMRUNUICogPGJyPiBGUk9NIGFjdG9ycyA8YnI+IEZVTEwgSk9JTiBtb3ZpZXMgPGJyPiBPTiBhY3RvcnMubW92aWVfaWQgPSBtb3ZpZXMuaWQ7XCJcbiAgICAgIGJyZWFrO1xuICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICByZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGpvaW5Nb3ZpZXNPbkFjdG9ycyhuZXdUYWJsZSwgb3V0cHV0LCBtb3ZpZXNEdXApIHtcbiAgWy4uLm5ld1RhYmxlLnJvd3NdLmZvckVhY2gocm93ID0+IHtcbiAgICByb3cucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICB9KVxuICBvdXRwdXQuYXBwZW5kKG5ld1RhYmxlKVxuICBsZXQgdGltZXIgPSAwO1xuICAvLyBjeWNsZSB0aHJvdWdoIGVhY2ggb2YgdGhlIGFjdG9yIHJvd3NcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUYWJsZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coXCJpXCIsaSlcbiAgICBpZiAoaSA8IDIpIHsgLy8gY29weSBjb2x1bW4gaGVhZGVycyBvdmVyXG4gICAgICBjb25zdCBuZXdUYWJsZUhlYWRlclJvdyA9IG5ld1RhYmxlLnJvd3NbaV1cbiAgICAgIGNvbnN0IG1vdmllc0hlYWRlclJvdyA9IFsuLi5tb3ZpZXNEdXAucm93c1tpXS5jaGlsZHJlbl1cbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IFRhYmxlIEhlYWRlclwiLCBuZXdUYWJsZUhlYWRlclJvdywgXCJtb3ZpZXMgSGVhZGVyXCIsIG1vdmllc0hlYWRlclJvdylcbiAgICAgIG1vdmllc0hlYWRlclJvdy5mb3JFYWNoKGNlbGwgPT4gbmV3VGFibGVIZWFkZXJSb3cuYXBwZW5kKGNlbGwpKVxuICAgICAgXG4gICAgfSBlbHNlIHsgLy8gbG9vayBhdCB0aGUgcm93J3MgbW92aWVfaWRcbiAgICAgIGNvbnN0IHJvdyA9IG5ld1RhYmxlLnJvd3NbaV07XG4gICAgICBjb25zb2xlLmxvZyhcInJvd1wiLHJvdylcbiAgICAgIGNvbnN0IGNlbGxzID0gWy4uLnJvdy5jaGlsZHJlbl07XG4gICAgICBjb25zdCBudW1DZWxscyA9IGNlbGxzLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1vdmllX2lkID0gY2VsbHNbbnVtQ2VsbHMtMV0uaW5uZXJUZXh0O1xuICAgICAgYXdhaXQgc2xlZXAoNTAwKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSBhcHByb3BpYXRlIG1vdmllIHJvdydzIGNlbGxzXG4gICAgICBpZiAobW92aWVfaWQgPD0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmllc0R1cFwiLCBtb3ZpZXNEdXAucm93cywgXCJyb3dcIiwgcm93LCBcIm1vdmllX2lkXCIsIG1vdmllX2lkKVxuICAgICAgICBjb25zdCBtb3ZpZXNSb3cgPSBbLi4ubW92aWVzRHVwLnJvd3NbcGFyc2VJbnQobW92aWVfaWQpKzFdLmNoaWxkcmVuXVxuICAgICAgICBtb3ZpZXNSb3cuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcGVuZGluZyBjZWxsXCIsIGNlbGwuaW5uZXJUZXh0LCBcInRvIHJvd1wiLCByb3cpXG4gICAgICAgICAgcm93LmFwcGVuZChjZWxsLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGQuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCBcIjRcIik7XG4gICAgICAgIHRkLmNsYXNzTmFtZSA9IFwidGJsZS1jZWxsIG51bGxcIjtcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gXCJudWxsXCI7XG4gICAgICAgIHJvdy5hcHBlbmQodGQpO1xuXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIFxuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUJ1dHRvbkZpbGwoY2xhc3NOYW1lKSB7XG4gIGlmIChzdGF0ZS5sYXN0KSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzdGF0ZS5sYXN0fWApLnN0eWxlLmZpbGwgPSBcIiM4ODg4ODhcIjtcbiAgaWYgKHN0YXRlLmxhc3QgPT09IFwiYWxsXCIpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3N0YXRlLmxhc3R9YClcbiAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS5maWxsID0gXCIjODg4ODg4XCI7XG4gICAgfSlcbiAgaWYgKGNsYXNzTmFtZSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApLnN0eWxlLmZpbGwgPSBcInJnYigyMDUsIDIzNiwgMjU1KVwiO1xuICBpZiAoY2xhc3NOYW1lID09PSBcImFsbFwiKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YClcbiAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5zdHlsZS5maWxsID0gXCJyZ2IoMjA1LCAyMzYsIDI1NSlcIjtcbiAgICB9KVxuICBzdGF0ZS5sYXN0ID0gY2xhc3NOYW1lO1xufTtcblxuZnVuY3Rpb24gaGlnaGxpZ2h0VGFibGVzKGpvaW5UeXBlKSB7XG4gIHN3aXRjaCAoam9pblR5cGUpIHtcbiAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYTEsICNhMiwgI2EzLCAjYTQsICNhNSwgI2E2LCAjbTEsICNtMiwgI20zXCIpXG4gICAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQgMC4xcyBsaW5lYXIgMHNcIjtcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgY2FzZSBcImlubmVyXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2ExLCAjYTIsICNhMywgI2E1LCAjYTYsICNtMiwgI20zXCIpXG4gICAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQgMC4xNXMgbGluZWFyIDBzXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwNSwgMjM2LCAyNTUpXCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYTEsICNhMiwgI2EzLCAjYTQsICNhNSwgI2E2XCIpXG4gICAgICAuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQgMC4xNXMgbGluZWFyIDBzXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwNSwgMjM2LCAyNTUpXCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI20xLCAjbTIsICNtM1wiKVxuICAgICAgLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kIDAuMTVzIGxpbmVhciAwc1wiO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDUsIDIzNiwgMjU1KVwiO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJmdWxsXCI6XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2ExLCAjYTIsICNhMywgI2E0LCAjYTUsICNhNiwgI20xLCAjbTIsICNtM1wiKVxuICAgICAgLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kIDAuMXMgbGluZWFyIDBzXCI7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwNSwgMjM2LCAyNTUpXCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURhdGFPdXRwdXQoam9pblR5cGUpIHtcbiAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXQtY29udGFpbmVyXCIpXG4gIGNvbnN0IGFjdG9yc0R1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0b3JzLXRhYmxlXCIpLmNsb25lTm9kZSh0cnVlKVxuICBjb25zdCBtb3ZpZXNEdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmllcy10YWJsZVwiKS5jbG9uZU5vZGUodHJ1ZSlcbiAgY29uc3QgbmV3VGFibGUgPSBhY3RvcnNEdXA7XG4gIG5ld1RhYmxlLmlkID0gXCJvdXRwdXQtdGFibGVcIlxuICBuZXdUYWJsZS5xdWVyeVNlbGVjdG9yKFwiI2FjdG9ycy1ib2R5XCIpLmlkID0gXCJvdXRwdXQtYm9keVwiXG4gIG5ld1RhYmxlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICBuZXdUYWJsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gIFxuICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIilcbiAgbGV0IGJsYW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpXG4gIGJsYW5rLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCI0XCIpXG4gIHRyLmFwcGVuZChibGFuaylcbiAgXG4gIHN3aXRjaCAoam9pblR5cGUpIHtcbiAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBcIk5vbmVcIjtcbiAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlIFwiaW5uZXJcIjpcbiAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgY2hhbmdlQnV0dG9uRmlsbChcImNlbnRlci1maWxsXCIpO1xuICAgICAgaGlnaGxpZ2h0VGFibGVzKFwicmVzZXRcIik7XG4gICAgICBhd2FpdCBzbGVlcCg1MTApO1xuICAgICAgaGlnaGxpZ2h0VGFibGVzKFwiaW5uZXJcIik7XG4gICAgICBuZXdUYWJsZS5kZWxldGVSb3coNSk7IC8vIGRlbGV0ZSB0aGUgbnVsbCBtb3ZpZV9pZCByb3dcbiAgICAgIGpvaW5Nb3ZpZXNPbkFjdG9ycyhuZXdUYWJsZSwgb3V0cHV0LCBtb3ZpZXNEdXApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgb3V0cHV0LmlubmVySFRNTCA9IG51bGw7XG4gICAgICBjaGFuZ2VCdXR0b25GaWxsKFwibGVmdC1maWxsXCIpO1xuICAgICAgaGlnaGxpZ2h0VGFibGVzKFwicmVzZXRcIik7XG4gICAgICBhd2FpdCBzbGVlcCg1MTApO1xuICAgICAgaGlnaGxpZ2h0VGFibGVzKFwibGVmdFwiKTtcbiAgICAgIGpvaW5Nb3ZpZXNPbkFjdG9ycyhuZXdUYWJsZSwgb3V0cHV0LCBtb3ZpZXNEdXApO1xuICAgICAgYnJlYWs7XG4gICAgICBcbiAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIG91dHB1dC5pbm5lckhUTUwgPSBudWxsO1xuICAgICAgY2hhbmdlQnV0dG9uRmlsbChcInJpZ2h0LWZpbGxcIik7XG4gICAgICBoaWdobGlnaHRUYWJsZXMoXCJyZXNldFwiKTtcbiAgICAgIGF3YWl0IHNsZWVwKDUxMCk7XG4gICAgICBoaWdobGlnaHRUYWJsZXMoXCJyaWdodFwiKTtcbiAgICAgIG5ld1RhYmxlLmRlbGV0ZVJvdyg1KTsgLy8gZGVsZXRlIHRoZSBudWxsIG1vdmllX2lkIHJvd1xuICAgICAgYXdhaXQgam9pbk1vdmllc09uQWN0b3JzKG5ld1RhYmxlLCBvdXRwdXQsIG1vdmllc0R1cCk7XG4gICAgICBhZGRKdXJhc3NpY1BhcmsobmV3VGFibGUsIG1vdmllc0R1cCk7XG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgXCJmdWxsXCI6XG4gICAgICBvdXRwdXQuaW5uZXJIVE1MID0gbnVsbDtcbiAgICAgIGNoYW5nZUJ1dHRvbkZpbGwoXCJhbGxcIilcbiAgICAgIGhpZ2hsaWdodFRhYmxlcyhcInJlc2V0XCIpO1xuICAgICAgYXdhaXQgc2xlZXAoNTEwKTtcbiAgICAgIGhpZ2hsaWdodFRhYmxlcyhcImZ1bGxcIik7XG4gICAgICBhd2FpdCBqb2luTW92aWVzT25BY3RvcnMobmV3VGFibGUsIG91dHB1dCwgbW92aWVzRHVwKTtcbiAgICAgIGFkZEp1cmFzc2ljUGFyayhuZXdUYWJsZSwgbW92aWVzRHVwKTtcbiAgICAgIGJyZWFrO1xuICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZEp1cmFzc2ljUGFyayhuZXdUYWJsZSwgbW92aWVzRHVwKSB7XG4gIGF3YWl0IHNsZWVwKDUwMCk7XG4gIG5ld1RhYmxlLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpKTtcbiAgY29uc3Qgcm93ID0gbmV3VGFibGUucm93c1tuZXdUYWJsZS5yb3dzLmxlbmd0aCAtIDFdO1xuICBjb25zb2xlLmxvZyhyb3cpO1xuICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHRkLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCI0XCIpO1xuICB0ZC5jbGFzc05hbWUgPSBcInRibGUtY2VsbCBudWxsXCI7XG4gIHRkLmlubmVyVGV4dCA9IFwibnVsbFwiO1xuICByb3cuYXBwZW5kKHRkKTtcbiAgbGV0IG1vdmllc1JvdyA9IFsuLi5tb3ZpZXNEdXAucm93c1syXS5jaGlsZHJlbl1cbiAgbW92aWVzUm93LmZvckVhY2goY2VsbCA9PiByb3cuYXBwZW5kKGNlbGwuY2xvbmVOb2RlKHRydWUpKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=