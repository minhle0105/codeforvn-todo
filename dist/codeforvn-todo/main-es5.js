function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete-dialog/delete-dialog.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete-dialog/delete-dialog.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogsDeleteDialogDeleteDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Delete task</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Are you sure? This action cannot be undone</h3>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\">Delete</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/create-task/create-task.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/create-task/create-task.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskCreateTaskCreateTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"margin-top: 10px\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <h1>Add Task</h1>\n    </div>\n    <div class=\"col-md-6\"></div>\n    <div class=\"col-md-3\"><a style=\"margin-top: 10px\" class=\"btn btn-primary\" routerLink=\"/tasks\">Task list</a></div>\n  </div>\n  <div class=\"row\">\n    <form #taskForm=\"ngForm\" (ngSubmit)=\"createNewTask(taskForm)\">\n      <div class=\"mb-3\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Task Description</mat-label>\n          <input matInput [(ngModel)]=\"task.description\" name=\"description\" type=\"text\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Priority Level</mat-label>\n          <mat-select [(ngModel)]=\"task.priorityLevel\" name=\"priorityLevel\" id=\"priorityLevel\">\n            <mat-option *ngFor=\"let priorityLevel of priorityLeveList\" [value]=\"priorityLevel\">{{priorityLevel}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button class=\"buttons\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!task.description || !task.priorityLevel\">Create</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskTaskListTaskListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">\n  Todo App\n</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <mat-progress-bar mode=\"determinate\" [value]=\" 100 * (completedTask/taskList.length)\"></mat-progress-bar>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3\">\n      <a class=\"buttons\" mat-raised-button color=\"primary\" routerLink=\"/tasks/create\" style=\"margin-top: 5px; margin-bottom: 5px\">Add</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"#\">\n          <th mat-header-cell *matHeaderCellDef> # </th>\n          <td [class.completed]=\"element.completed\" mat-cell *matCellDef=\"let element; index as i\"> {{i+1}} </td>\n        </ng-container>\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Task </th>\n          <td style=\"font-weight: bolder\" id=\"taskDescription\" (click)=\"changeTaskStatus(element.id)\" [class.completed]=\"element.completed\" mat-cell *matCellDef=\"let element; index as i\"> {{element.description}} </td>\n        </ng-container>\n\n        <!-- Priority Column -->\n        <ng-container matColumnDef=\"priorityLevel\">\n          <th style=\"text-align: center; font-weight: bolder\" mat-header-cell *matHeaderCellDef mat-sort-header> Priority Level </th>\n          <td style=\"font-weight: bolder\" [class.completed]=\"element.completed\" mat-cell *matCellDef=\"let element\"> {{element.priorityLevel}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"actionUpdate\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"> <a class=\"buttons\" mat-raised-button color=\"accent\" [routerLink]=\"['/tasks/edit', element.id]\">Update</a></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actionDelete\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"><button class=\"buttons\" mat-raised-button color=\"warn\" (click)=\"deleteTask(element.id)\">Delete</button></td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/update-task/update-task.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/update-task/update-task.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskUpdateTaskUpdateTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <h1>Update Task</h1>\n    </div>\n    <div class=\"col-md-6\"></div>\n    <div class=\"col-md-3\">\n      <a style=\"margin-top: 5px\" class=\"btn btn-primary\" routerLink=\"/tasks\">Task List</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <form [formGroup]=\"taskForm\" (ngSubmit)=\"updateTaskInfo(idToUpdate)\">\n      <div class=\"mb-3\">\n        <input type=\"hidden\" formControlName=\"id\">\n      </div>\n      <div class=\"mb-3\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Task Description</mat-label>\n          <input matInput type=\"text\" formControlName=\"description\" name=\"description\" id=\"taskDescription\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Priority Level</mat-label>\n          <mat-select name=\"categoryId\" id=\"priority\" formControlName=\"priorityLevel\">\n            <mat-option *ngFor=\"let priorityLevel of priorityLevels\" [value]=\"priorityLevel\">{{priorityLevel}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button class=\"buttons\" type=\"submit\" mat-raised-button color=\"accent\"  [disabled]=\"!taskForm.get('description').value\">Update</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task/task-list/task-list.component */
    "./src/app/task/task-list/task-list.component.ts");
    /* harmony import */


    var _task_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task/create-task/create-task.component */
    "./src/app/task/create-task/create-task.component.ts");
    /* harmony import */


    var _task_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task/update-task/update-task.component */
    "./src/app/task/update-task/update-task.component.ts");

    var routes = [{
      path: 'tasks',
      component: _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"]
    }, {
      path: 'tasks/create',
      component: _task_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_4__["CreateTaskComponent"]
    }, {
      path: 'tasks/edit/:id',
      component: _task_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_5__["UpdateTaskComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'codeforvn-todo';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], AppComponent.prototype, "sort", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task/task-list/task-list.component */
    "./src/app/task/task-list/task-list.component.ts");
    /* harmony import */


    var _task_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task/create-task/create-task.component */
    "./src/app/task/create-task/create-task.component.ts");
    /* harmony import */


    var _task_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./task/update-task/update-task.component */
    "./src/app/task/update-task/update-task.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dialogs/delete-dialog/delete-dialog.component */
    "./src/app/dialogs/delete-dialog/delete-dialog.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-disable-browser-back-button */
    "./node_modules/angular-disable-browser-back-button/fesm2015/angular-disable-browser-back-button.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponent"], _task_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_6__["CreateTaskComponent"], _task_update_task_update_task_component__WEBPACK_IMPORTED_MODULE_7__["UpdateTaskComponent"], _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DeleteDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_15__["BackButtonDisableModule"].forRoot({
        preserveScrollPosition: true
      })],
      entryComponents: [_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DeleteDialogComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dialogs/delete-dialog/delete-dialog.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/dialogs/delete-dialog/delete-dialog.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogsDeleteDialogDeleteDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZGVsZXRlLWRpYWxvZy9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dialogs/delete-dialog/delete-dialog.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dialogs/delete-dialog/delete-dialog.component.ts ***!
    \******************************************************************/

  /*! exports provided: DeleteDialogComponent */

  /***/
  function srcAppDialogsDeleteDialogDeleteDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
      return DeleteDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteDialogComponent = /*#__PURE__*/function () {
      function DeleteDialogComponent() {
        _classCallCheck(this, DeleteDialogComponent);
      }

      _createClass(DeleteDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeleteDialogComponent;
    }();

    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/delete-dialog/delete-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-dialog.component.css */
      "./src/app/dialogs/delete-dialog/delete-dialog.component.css"))["default"]]
    })], DeleteDialogComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialComponents = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [MaterialComponents],
      exports: [MaterialComponents]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/service/priority.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/priority.service.ts ***!
    \*********************************************/

  /*! exports provided: PriorityService */

  /***/
  function srcAppServicePriorityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriorityService", function () {
      return PriorityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PriorityService = /*#__PURE__*/function () {
      function PriorityService() {
        _classCallCheck(this, PriorityService);

        this.priorityLevels = ['!!!', '!!', '!'];
      }

      _createClass(PriorityService, [{
        key: "getAllPriority",
        value: function getAllPriority() {
          return this.priorityLevels;
        }
      }]);

      return PriorityService;
    }();

    PriorityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PriorityService);
    /***/
  },

  /***/
  "./src/app/service/task.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/task.service.ts ***!
    \*****************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServiceTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var API_URL = "".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);

    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
      }

      _createClass(TaskService, [{
        key: "getAllTasks",
        value: function getAllTasks() {
          return this.http.get("".concat(API_URL, "/tasks"));
        }
      }, {
        key: "createNewTask",
        value: function createNewTask(task) {
          return this.http.post("".concat(API_URL, "/tasks"), task);
        }
      }, {
        key: "updateTask",
        value: function updateTask(id, task) {
          return this.http.put("".concat(API_URL, "/tasks/").concat(id), task);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          return this.http["delete"]("".concat(API_URL, "/tasks/").concat(id));
        }
      }, {
        key: "getTaskById",
        value: function getTaskById(id) {
          return this.http.get("".concat(API_URL, "/tasks/").concat(id));
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TaskService);
    /***/
  },

  /***/
  "./src/app/task/create-task/create-task.component.css":
  /*!************************************************************!*\
    !*** ./src/app/task/create-task/create-task.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskCreateTaskCreateTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\nmat-form-field {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svY3JlYXRlLXRhc2svY3JlYXRlLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task/create-task/create-task.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/task/create-task/create-task.component.ts ***!
    \***********************************************************/

  /*! exports provided: CreateTaskComponent */

  /***/
  function srcAppTaskCreateTaskCreateTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function () {
      return CreateTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/task.service */
    "./src/app/service/task.service.ts");
    /* harmony import */


    var _service_priority_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/priority.service */
    "./src/app/service/priority.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CreateTaskComponent = /*#__PURE__*/function () {
      function CreateTaskComponent(taskService, priorityService, snackBar) {
        _classCallCheck(this, CreateTaskComponent);

        this.taskService = taskService;
        this.priorityService = priorityService;
        this.snackBar = snackBar;
        this.task = {
          priorityLevel: ''
        };
        this.priorityLeveList = [];
      }

      _createClass(CreateTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllPriorityLevels();
        }
      }, {
        key: "getAllPriorityLevels",
        value: function getAllPriorityLevels() {
          this.priorityLeveList = this.priorityService.getAllPriority();
        }
      }, {
        key: "openMessage",
        value: function openMessage() {
          this.snackBar.open("Task Successfully Updated!", 'Close', {
            duration: 1000,
            verticalPosition: 'top'
          });
        }
      }, {
        key: "createNewTask",
        value: function createNewTask(form) {
          var _this = this;

          var newTask = {
            description: form.value.description,
            priorityLevel: form.value.priorityLevel,
            completed: false
          };
          this.taskService.createNewTask(newTask).subscribe(function () {
            _this.openMessage();

            form.reset();
          }, function (error) {
            alert("Task can not be created");
            console.log(error);
          });
        }
      }]);

      return CreateTaskComponent;
    }();

    CreateTaskComponent.ctorParameters = function () {
      return [{
        type: _service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _service_priority_service__WEBPACK_IMPORTED_MODULE_3__["PriorityService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/create-task/create-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-task.component.css */
      "./src/app/task/create-task/create-task.component.css"))["default"]]
    })], CreateTaskComponent);
    /***/
  },

  /***/
  "./src/app/task/task-list/task-list.component.css":
  /*!********************************************************!*\
    !*** ./src/app/task/task-list/task-list.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskTaskListTaskListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".completed {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: red;\n          text-decoration-color: red;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  text-decoration-thickness: 3px;\n}\n\n.btn {\n  height: 40px;\n  width: 80px;\n}\n\ntd#taskDescription:hover {\n  cursor: pointer;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xuICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50ZCN0YXNrRGVzY3JpcHRpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/task/task-list/task-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/task/task-list/task-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: TaskListComponent */

  /***/
  function srcAppTaskTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
      return TaskListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/task.service */
    "./src/app/service/task.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dialogs/delete-dialog/delete-dialog.component */
    "./src/app/dialogs/delete-dialog/delete-dialog.component.ts");

    var TaskListComponent = /*#__PURE__*/function () {
      function TaskListComponent(taskService, dialog, snackBar) {
        _classCallCheck(this, TaskListComponent);

        this.taskService = taskService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.taskList = [];
        this.displayedColumns = ['#', 'description', 'priorityLevel', 'actionUpdate', 'actionDelete'];
      }

      _createClass(TaskListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTasks();
        }
      }, {
        key: "getAllTasks",
        value: function getAllTasks() {
          var _this2 = this;

          this.taskService.getAllTasks().subscribe(function (tasks) {
            if (!tasks) {
              return;
            }

            _this2.taskList = tasks;
            _this2.completedTask = 0;

            _this2.updateTaskRender();

            _this2.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this2.taskList);
            _this2.dataSource.sort = _this2.sort;
          });
        }
      }, {
        key: "changeTaskStatus",
        value: function changeTaskStatus(i) {
          var _this3 = this;

          var this_Task = {};
          this.taskService.getTaskById(i).subscribe(function (task) {
            this_Task = task;
            this_Task.completed = !this_Task.completed;

            _this3.taskService.updateTask(i, this_Task).subscribe(function () {
              _this3.updateTaskRender();

              _this3.getAllTasks();
            });
          });
        }
      }, {
        key: "updateTaskRender",
        value: function updateTaskRender() {
          this.completedTask = 0;

          for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].completed) {
              this.completedTask += 1;
            }
          }
        }
      }, {
        key: "openMessage",
        value: function openMessage() {
          this.snackBar.open('Task Successfully Deleted!', 'Close', {
            duration: 1000,
            verticalPosition: 'top'
          });
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          var _this4 = this;

          var deleteDialog = this.dialog.open(_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteDialogComponent"], {});
          deleteDialog.afterClosed().subscribe(function (result) {
            if (result) {
              _this4.taskService.deleteTask(id).subscribe(function () {
                _this4.openMessage();

                _this4.updateTaskRender();

                _this4.getAllTasks();
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return TaskListComponent;
    }();

    TaskListComponent.ctorParameters = function () {
      return [{
        type: _service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], TaskListComponent.prototype, "sort", void 0);
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-list.component.css */
      "./src/app/task/task-list/task-list.component.css"))["default"]]
    })], TaskListComponent);
    /***/
  },

  /***/
  "./src/app/task/update-task/update-task.component.css":
  /*!************************************************************!*\
    !*** ./src/app/task/update-task/update-task.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskUpdateTaskUpdateTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\nmat-form-field {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay91cGRhdGUtdGFzay91cGRhdGUtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdXBkYXRlLXRhc2svdXBkYXRlLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/task/update-task/update-task.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/task/update-task/update-task.component.ts ***!
    \***********************************************************/

  /*! exports provided: UpdateTaskComponent */

  /***/
  function srcAppTaskUpdateTaskUpdateTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTaskComponent", function () {
      return UpdateTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/task.service */
    "./src/app/service/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_priority_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/priority.service */
    "./src/app/service/priority.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var UpdateTaskComponent = /*#__PURE__*/function () {
      function UpdateTaskComponent(taskService, activatedRoute, priorityService, snackBar) {
        var _this5 = this;

        _classCallCheck(this, UpdateTaskComponent);

        this.taskService = taskService;
        this.activatedRoute = activatedRoute;
        this.priorityService = priorityService;
        this.snackBar = snackBar;
        this.task = {};
        this.idToUpdate = -1;
        this.priorityLevels = [];
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        }); // get the current url link

        this.activatedRoute.paramMap.subscribe(function (paramMap) {
          // get the 'id' from current URL, assign the value to idToUpdate
          _this5.idToUpdate = +paramMap.get('id'); // call the method to get all the current product info, assign the current info to the form so that the update form has the
          // current info

          _this5.getTaskById(_this5.idToUpdate);
        });
      }

      _createClass(UpdateTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllPriorityLevels();
        }
      }, {
        key: "getAllPriorityLevels",
        value: function getAllPriorityLevels() {
          this.priorityLevels = this.priorityService.getAllPriority();
        }
      }, {
        key: "id",
        get: function get() {
          return this.taskForm.get('id');
        }
      }, {
        key: "openMessage",
        value: function openMessage() {
          this.snackBar.open("Task Successfully Updated!", 'Close', {
            duration: 1000,
            verticalPosition: 'top'
          });
        }
      }, {
        key: "getTaskById",
        value: function getTaskById(id) {
          var _this6 = this;

          this.taskService.getTaskById(id).subscribe(function (thisTask) {
            _this6.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](thisTask.description),
              priorityLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](thisTask.priorityLevel)
            });
          });
        }
      }, {
        key: "updateTaskInfo",
        value: function updateTaskInfo(id) {
          var _this7 = this;

          var newTask = this.taskForm.value;
          this.taskService.updateTask(id, newTask).subscribe(function () {
            _this7.openMessage();
          }, function (error) {
            alert("Task cannot be updated");
            console.log(error);
          });
        }
      }]);

      return UpdateTaskComponent;
    }();

    UpdateTaskComponent.ctorParameters = function () {
      return [{
        type: _service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _service_priority_service__WEBPACK_IMPORTED_MODULE_5__["PriorityService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    UpdateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/update-task/update-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-task.component.css */
      "./src/app/task/update-task/update-task.component.css"))["default"]]
    })], UpdateTaskComponent);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: true,
      apiUrl: 'https://codeforvn-todo-api.herokuapp.com/'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/minhle/Documents/AngularProjects/codeforvn-todo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map