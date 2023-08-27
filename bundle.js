/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */

*,
*::before,
*::after {
  box-sizing: border-box;
  font-size: 1rem;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
  font-family: var(--font-style)
}

/* dark mode user-agent-styles */

html {
  color-scheme: dark light;
}

body {
  min-height: 100vh;
  display: flex;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

:root {
 --font-color: rgba(10, 10, 7, 0.6);
 --text-hover-color: rgba(24, 24, 17, 0.088);
 --main-background-color:  #ffffff;
 --priority-low-color: green;
 --priority-high-color: red;
 --priority-med-color: rgb(236, 176, 11);;
 --add-tasks-button-color: #5cb2a7;
 --font-style: sans-serif;
 --secondary-background-color: #efefef;
}

li {
  list-style-type: none;
}

.sidebar-left {
  font-size: 0.8rem;
  height: 100vh;
  width:13vw;
  background-color:var(--secondary-background-color);
  padding: 8px; 
  display: flex;
  flex-direction: column;
}

.sidebar-links {
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* ADD ANIMATIONS FOR LINKS LATER */
.link-item:hover, .add-project-btn:hover {
  cursor: pointer;
  background-color:  var(--text-hover-color);
}

.link-item:not(.project-child) {
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.sidebar-project-link {
  font-size: 1.1rem; 
}

.fa-file {
  margin-right: 0.5em
}

.add-project-btn {
  font-weight: 500;
  margin-left: 0.5em;
  margin-top: 0.5em;
  display: flex;
} 

.add-new-project {
  margin-left: 0.5em;
}

.link-item > a {
  font-size: 1.1rem;
  margin-left: 0.5rem;
}

[class|='link-item active'] {
  color:rgb(0, 0, 0);
  font-weight: bold;
  background-color:  var(--text-hover-color);
}

 button[class~='active'] {
  color:rgb(0, 0, 0);
  font-weight: bold;
  background-color:  var(--text-hover-color);
} 

.sidebar-top-container{
  position: relative;
  top: 3rem;
  padding-bottom: 10rem;  
}

.sidebar-bottom-container{
  position: relative; 
}

a {
  pointer-events: none;
}

.sidebar-footer {
  color: var(--font-color);
  position: absolute;
  bottom: 0;
  width: 13vw;
  height: 2.5rem;
  left: 0;
  border-top: 2px solid rgba(85, 83, 83, 0.68);
  display: flex;
  align-items: center;  
  justify-content: space-around;
}

.sidebar-new:hover, .sidebar-settings:hover, .new-content:hover, .modal-link:hover, .fa-x:hover, 
.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can {
  cursor: pointer;
}

.new-button-div {
  display: flex;
}

.main-right {
  width:100%;
  background-color: var(--main-background-color);
  overflow:auto;
}

 .to-do-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap: 5rem;
  font-size: 2rem;
  color: var(--font-color)
} 

.notes-container {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1rem;
  color: var(--font-color)
}

.main-new::before {
  font-size: 5rem;
}

.page-header {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  justify-content: space-between;
}

.modal-main-div {
  display: flex;
}

dialog {
  margin: auto;
  border-radius: 8px;
  font-size: 1.25rem;
  color: var(--font-color)
}

.modal-new-content-div {
  text-indent: 10px;
  display: flex;
  flex-direction: column;
}

.modal-task-title-area, .modal-task-details-area, .modal-notes-details-area, .modal-notes-text-area, .modal-project-text-area{
  text-indent: 10px;
}
.modal-notes-details-area {
  min-height: 14dvh;
}
.modal-link {
  margin-top: .5em;
}

[class|='modal-link active'] {
  color: rgb(0, 0, 0);
}

[class|='modal-link active']::before {
  content: '🠚';
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  margin-right: .25em;

}

.modal-header {
  display: flex;
  justify-content: space-between;
  background-color: #c38d9e;
  font-size: 1.5rem;
  color: white;
  padding: 0.5rem;
}

.modal-new-entry {
  display: flex;
  flex-direction: column;
}

.modal-sidebar {
  width: 10dvw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fbfbfa;
  min-height: 35dvh;
}

.modal-date-input {
  border-radius: 8px;
  border: 1.5px solid var(--add-tasks-button-color);
  padding: 0.125em 0.25em 0.125em 0.25em;
  font-size: 1.25rem;
  color:var(--add-tasks-button-color)
}

.modal-date-div {  
  margin-bottom: .5em;
}

.modal-priority-div {
  display: flex;
}

.priority-btn-div {
  gap: 1rem;
  display: flex;
  margin-left: .5em;
  width: 60%;
}

.modal-add-note-btn, .modal-add-project-btn {
  margin-left: 10px;
  width: 52%;
}

.modal-add-task-btn, .modal-add-note-btn, .modal-add-project-btn {
  color:var(--add-tasks-button-color);
  border: 1.5px solid var(--add-tasks-button-color);
}

.modal-add-note-btn:hover, .modal-add-project-btn:hover, .modal-add-task-btn:hover {
  background-color:var(--add-tasks-button-color);
  color:white;
  transition: all 0.25s;
}

.modal-btn, .modal-add-btn {
  background-color: var(--main-background-color);
  border-radius: 5px;
  padding: 0.125em 0.25em 0.125em 0.25em;
  font-weight: 700;
  font-size: 1rem;
}

.priority-low-btn {
  border: 1.5px solid var(--priority-low-color);
  color: var(--priority-low-color);
}

.priority-low-btn:hover  {
 background-color: var(--priority-low-color);
 color:var(--main-background-color);
 transition: all 0.25s;
}

.priority-med-btn {
  border: 1.5px solid var(--priority-med-color);
  color: var(--priority-med-color)
}

.priority-med-btn:hover  {
  background-color: var(--priority-med-color);
  color:var(--main-background-color);
  transition: all 0.25s;
 }

.priority-high-btn {
  border: 1.5px solid var(--priority-high-color);
  color: var(--priority-high-color);
}

.priority-high-btn:hover  {
  background-color: var(--priority-high-color);
  color:var(--main-background-color);
  transition: all 0.25s;
 }

textarea {
  resize: none;
  font-size: 1.25rem;
  min-width: 29dvw;
  border: none;
  overflow: auto;
  outline: none;
  padding-top: 0.5rem;
}

.modal-task-title-area{
  border-bottom: 1px solid black;
  min-height: 6dvh;
}

.modal-task-details-area {
  min-height: 12dvh;
  margin-bottom: 1rem;
}

.modal-project-text-area {
  min-height: 18dvh;
}

.to-do-div {
  display:flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  margin: 3rem;
  min-width: 80dvw;
  min-height: fit-content;
}

.to-do-div-left, .to-do-div-right {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
}

.no-task-text-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.note-div {
  margin: 1rem;
  font-family: var(--font-style);
  color: var(--font-color);
  background-color:var(--secondary-background-color);
  border: 1px solid black;
  border-radius: 5px;
  min-width: 20dvh;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  word-break: break-all;
}

.note-header{
  display: flex;
  justify-content: space-between;
  padding: 0.5rem
}

.note-date {
  align-self: flex-end
}

.note-text-content {
  align-self: start;
  padding: 0.5rem
}

.project-child {
  border: none;
  background-color: var(--secondary-background-color);
  display: flex;
  justify-content: start;
  align-content: center;
  gap: 0.5rem;
  margin-left: 2.5em;
  overflow: clip;
}

.project-trash-div, .header-content {
  display: flex;
  gap: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-family: var(--font-style)\n}\n\n/* dark mode user-agent-styles */\n\nhtml {\n  color-scheme: dark light;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n --font-color: rgba(10, 10, 7, 0.6);\n --text-hover-color: rgba(24, 24, 17, 0.088);\n --main-background-color:  #ffffff;\n --priority-low-color: green;\n --priority-high-color: red;\n --priority-med-color: rgb(236, 176, 11);;\n --add-tasks-button-color: #5cb2a7;\n --font-style: sans-serif;\n --secondary-background-color: #efefef;\n}\n\nli {\n  list-style-type: none;\n}\n\n.sidebar-left {\n  font-size: 0.8rem;\n  height: 100vh;\n  width:13vw;\n  background-color:var(--secondary-background-color);\n  padding: 8px; \n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-links {\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* ADD ANIMATIONS FOR LINKS LATER */\n.link-item:hover, .add-project-btn:hover {\n  cursor: pointer;\n  background-color:  var(--text-hover-color);\n}\n\n.link-item:not(.project-child) {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.sidebar-project-link {\n  font-size: 1.1rem; \n}\n\n.fa-file {\n  margin-right: 0.5em\n}\n\n.add-project-btn {\n  font-weight: 500;\n  margin-left: 0.5em;\n  margin-top: 0.5em;\n  display: flex;\n} \n\n.add-new-project {\n  margin-left: 0.5em;\n}\n\n.link-item > a {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n\n[class|='link-item active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n}\n\n button[class~='active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n} \n\n.sidebar-top-container{\n  position: relative;\n  top: 3rem;\n  padding-bottom: 10rem;  \n}\n\n.sidebar-bottom-container{\n  position: relative; \n}\n\na {\n  pointer-events: none;\n}\n\n.sidebar-footer {\n  color: var(--font-color);\n  position: absolute;\n  bottom: 0;\n  width: 13vw;\n  height: 2.5rem;\n  left: 0;\n  border-top: 2px solid rgba(85, 83, 83, 0.68);\n  display: flex;\n  align-items: center;  \n  justify-content: space-around;\n}\n\n.sidebar-new:hover, .sidebar-settings:hover, .new-content:hover, .modal-link:hover, .fa-x:hover, \n.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can {\n  cursor: pointer;\n}\n\n.new-button-div {\n  display: flex;\n}\n\n.main-right {\n  width:100%;\n  background-color: var(--main-background-color);\n  overflow:auto;\n}\n\n .to-do-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  justify-content: center;\n  gap: 5rem;\n  font-size: 2rem;\n  color: var(--font-color)\n} \n\n.notes-container {\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  font-size: 1rem;\n  color: var(--font-color)\n}\n\n.main-new::before {\n  font-size: 5rem;\n}\n\n.page-header {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  justify-content: space-between;\n}\n\n.modal-main-div {\n  display: flex;\n}\n\ndialog {\n  margin: auto;\n  border-radius: 8px;\n  font-size: 1.25rem;\n  color: var(--font-color)\n}\n\n.modal-new-content-div {\n  text-indent: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-task-title-area, .modal-task-details-area, .modal-notes-details-area, .modal-notes-text-area, .modal-project-text-area{\n  text-indent: 10px;\n}\n.modal-notes-details-area {\n  min-height: 14dvh;\n}\n.modal-link {\n  margin-top: .5em;\n}\n\n[class|='modal-link active'] {\n  color: rgb(0, 0, 0);\n}\n\n[class|='modal-link active']::before {\n  content: '🠚';\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  margin-right: .25em;\n\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #c38d9e;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n}\n\n.modal-new-entry {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-sidebar {\n  width: 10dvw;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #fbfbfa;\n  min-height: 35dvh;\n}\n\n.modal-date-input {\n  border-radius: 8px;\n  border: 1.5px solid var(--add-tasks-button-color);\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-size: 1.25rem;\n  color:var(--add-tasks-button-color)\n}\n\n.modal-date-div {  \n  margin-bottom: .5em;\n}\n\n.modal-priority-div {\n  display: flex;\n}\n\n.priority-btn-div {\n  gap: 1rem;\n  display: flex;\n  margin-left: .5em;\n  width: 60%;\n}\n\n.modal-add-note-btn, .modal-add-project-btn {\n  margin-left: 10px;\n  width: 52%;\n}\n\n.modal-add-task-btn, .modal-add-note-btn, .modal-add-project-btn {\n  color:var(--add-tasks-button-color);\n  border: 1.5px solid var(--add-tasks-button-color);\n}\n\n.modal-add-note-btn:hover, .modal-add-project-btn:hover, .modal-add-task-btn:hover {\n  background-color:var(--add-tasks-button-color);\n  color:white;\n  transition: all 0.25s;\n}\n\n.modal-btn, .modal-add-btn {\n  background-color: var(--main-background-color);\n  border-radius: 5px;\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.priority-low-btn {\n  border: 1.5px solid var(--priority-low-color);\n  color: var(--priority-low-color);\n}\n\n.priority-low-btn:hover  {\n background-color: var(--priority-low-color);\n color:var(--main-background-color);\n transition: all 0.25s;\n}\n\n.priority-med-btn {\n  border: 1.5px solid var(--priority-med-color);\n  color: var(--priority-med-color)\n}\n\n.priority-med-btn:hover  {\n  background-color: var(--priority-med-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\n.priority-high-btn {\n  border: 1.5px solid var(--priority-high-color);\n  color: var(--priority-high-color);\n}\n\n.priority-high-btn:hover  {\n  background-color: var(--priority-high-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\ntextarea {\n  resize: none;\n  font-size: 1.25rem;\n  min-width: 29dvw;\n  border: none;\n  overflow: auto;\n  outline: none;\n  padding-top: 0.5rem;\n}\n\n.modal-task-title-area{\n  border-bottom: 1px solid black;\n  min-height: 6dvh;\n}\n\n.modal-task-details-area {\n  min-height: 12dvh;\n  margin-bottom: 1rem;\n}\n\n.modal-project-text-area {\n  min-height: 18dvh;\n}\n\n.to-do-div {\n  display:flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 3rem;\n  min-width: 80dvw;\n  min-height: fit-content;\n}\n\n.to-do-div-left, .to-do-div-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n\n.no-task-text-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\n.note-div {\n  margin: 1rem;\n  font-family: var(--font-style);\n  color: var(--font-color);\n  background-color:var(--secondary-background-color);\n  border: 1px solid black;\n  border-radius: 5px;\n  min-width: 20dvh;\n  min-height: max-content;\n  display: flex;\n  flex-direction: column;\n  word-break: break-all;\n}\n\n.note-header{\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem\n}\n\n.note-date {\n  align-self: flex-end\n}\n\n.note-text-content {\n  align-self: start;\n  padding: 0.5rem\n}\n\n.project-child {\n  border: none;\n  background-color: var(--secondary-background-color);\n  display: flex;\n  justify-content: start;\n  align-content: center;\n  gap: 0.5rem;\n  margin-left: 2.5em;\n  overflow: clip;\n}\n\n.project-trash-div, .header-content {\n  display: flex;\n  gap: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/deleteProjectFromSidebar.js":
/*!*****************************************!*\
  !*** ./src/deleteProjectFromSidebar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProjectFromSidebar)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


function deleteProjectFromSidebar(nameOfProject) {
  const allSidebarLinkItems = document.querySelectorAll('.link-item');
  // our top and bottom sidebar links are both called 'sidebar-links' so specify
  // that we want the bottom container sidebar links.
  const sidebar = document.querySelector(
    '.sidebar-bottom-container'
  ).firstChild;

  allSidebarLinkItems.forEach((link) => {
    // if link clicked classlist equal project name then thats the sidebar project we delete
    if (link.classList[0] === nameOfProject) {
      sidebar.removeChild(link);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocalStorage)('project', `${nameOfProject}`);
    }
  });
}


/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPageEventListeners),
/* harmony export */   dialogEvents: () => (/* binding */ dialogEvents),
/* harmony export */   projectTrashCanEvents: () => (/* binding */ projectTrashCanEvents)
/* harmony export */ });
/* harmony import */ var _pages_taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/taskList */ "./src/pages/taskList.js");
/* harmony import */ var _pages_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/notes */ "./src/pages/notes.js");
/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects */ "./src/pages/projects.js");
/* harmony import */ var _pages_today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/today */ "./src/pages/today.js");
/* harmony import */ var _ui_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/dom */ "./src/ui/dom.js");
/* harmony import */ var _ui_activeAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/activeAttribute */ "./src/ui/activeAttribute.js");
/* harmony import */ var _ui_modal_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/modal/modal */ "./src/ui/modal/modal.js");
/* harmony import */ var _deleteProjectFromSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deleteProjectFromSidebar */ "./src/deleteProjectFromSidebar.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/addTaskToPage */ "./src/ui/addTaskToPage.js");











function addPageEventListeners() {
  // events for sidebarlink + individual project pages
  const sidebarLinks = document.querySelectorAll('.link-item');
  const addNewProjectsBtn = document.querySelector('.add-project-btn');

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      (0,_ui_activeAttribute__WEBPACK_IMPORTED_MODULE_5__.checkForActiveAttribute)(sidebarLinks);
      (0,_ui_dom__WEBPACK_IMPORTED_MODULE_4__.wipeDomContent)();
      (0,_ui_activeAttribute__WEBPACK_IMPORTED_MODULE_5__.addActiveAttribute)(e);
      checkWhichSidebarLinkIsClicked(e);
    });
  });

  addNewProjectsBtn.addEventListener('click', () => {
    // open modal when user clicks on add project
    (0,_ui_modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"])();
  });
}

function checkWhichSidebarLinkIsClicked(e) {
  switch (e.target.textContent) {
    case 'Today':
      (0,_pages_today__WEBPACK_IMPORTED_MODULE_3__["default"])();
      break;
    case 'Task List':
      (0,_pages_taskList__WEBPACK_IMPORTED_MODULE_0__["default"])();
      break;
    case 'Notes':
      (0,_pages_notes__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
    // our default will be individual projects that are clicked if not any of the abvoe
    default:
      (0,_pages_projects__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
      break;
  }
}

function dialogEvents() {
  const newContentButtons = document.querySelectorAll('.new-content');

  newContentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      (0,_ui_modal_modal__WEBPACK_IMPORTED_MODULE_6__["default"])();
    });
  });
}

function projectTrashCanEvents() {
  const projectTrashCan = document.querySelectorAll('.fa-trash-can');

  projectTrashCan.forEach((trashCan) => {
    trashCan.addEventListener('click', (e) => {
      const targetParent = e.target.parentElement;
      const parentSiblingElementTextContent =
        targetParent.previousSibling.textContent;
      const projectName = parentSiblingElementTextContent;

      // will remove project from sidebar AND delete project from LS
      (0,_deleteProjectFromSidebar__WEBPACK_IMPORTED_MODULE_7__["default"])(projectName);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_8__.deleteAllProjectTasksFromLocalStorage)('project-task', projectName);
      (0,_ui_dom__WEBPACK_IMPORTED_MODULE_4__.wipeDomContent)();
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_9__.addTaskContainer)('to-do-container');
    });
  });
}



/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteAllProjectTasksFromLocalStorage: () => (/* binding */ deleteAllProjectTasksFromLocalStorage),
/* harmony export */   deleteTaskFromLocalStorage: () => (/* binding */ deleteTaskFromLocalStorage),
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   setToLocalStorage: () => (/* binding */ setToLocalStorage)
/* harmony export */ });
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/noTasksMessage */ "./src/ui/noTasksMessage.js");


function setToLocalStorage(type, task, pageHeaderText) {
  const data = localStorage.getItem(`${type}`);

  //if no data
  if (!data) {
    // if no value in variable then we are not adding a task to a project
    if (!pageHeaderText) {
      // populate array with our task object
      const dataArray = [task];
      localStorage.setItem(`${type}`, JSON.stringify(dataArray));
    } else {
      // add project page title property to task
      task.projectPage = pageHeaderText;
      // populate array with our task object and individual project page title
      const dataArray = [task];
      localStorage.setItem(`${type}`, JSON.stringify(dataArray));
    }
  } else {
    task.projectPage = pageHeaderText;

    // populate array with existing tasks of 'type'
    const dataArray = JSON.parse(localStorage.getItem(`${type}`));

    dataArray.push(task);

    // set new array with all tasks old and new to local storage
    localStorage.setItem(`${type}`, JSON.stringify(dataArray));
  }
}

function getFromLocalStorage(type) {
  return JSON.parse(localStorage.getItem(`${type}`));
}

function deleteTaskFromLocalStorage(type, taskTitle) {
  const tasks = getFromLocalStorage(`${type}`);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskTitle === taskTitle) {
      tasks.splice(i, 1);
      setToLocalStorageAfterDeleting(type, tasks);
    }
  }
}

function deleteAllProjectTasksFromLocalStorage(type, projectName) {
  const tasks = getFromLocalStorage(`${type}`);
  if (!tasks) return;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].projectPage === projectName) {
      tasks.splice(i, 1);
      setToLocalStorageAfterDeleting(type, tasks);
    }
  }
}

function setToLocalStorageAfterDeleting(type, tasks) {
  localStorage.setItem(`${type}`, JSON.stringify(tasks));

  // refactor below
  // if no tasks in either 'toDo' or 'notes' LS arrays delete the key from LS
  if (tasks.length === 0 && type === 'toDo') {
    localStorage.removeItem(`${type}`);
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_0__["default"])('tasks', 'to-do-container');
  } else if (tasks.length === 0 && type === 'notes') {
    localStorage.removeItem(`${type}`);
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_0__["default"])('notes', 'notes-container');
  }

  // if no tasks in either 'project-task' or 'project' LS arrays delete the key from LS
  if (tasks.length === 0 && type === 'project-task') {
    localStorage.removeItem(`${type}`);
  } else if (tasks.length === 0 && type === 'project') {
    localStorage.removeItem(`${type}`);
  }

  return;
}




/***/ }),

/***/ "./src/pages/notes.js":
/*!****************************!*\
  !*** ./src/pages/notes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNotesPage)
/* harmony export */ });
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/noTasksMessage */ "./src/ui/noTasksMessage.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/addTaskToPage */ "./src/ui/addTaskToPage.js");






// run when link is clicked
function loadNotesPage() {
  (0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const notes = localStorage.getItem('notes');

  // if false we have no existing notes so make a task container so user can make some new notes
  if (!notes) {
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('notes', 'to-do-container');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  } else {
    addExistingNotesToPage('notes');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  }
}

function addExistingNotesToPage(type) {
  // get all of the users notes from LS
  const notes = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('notes');

  notes.forEach((note) => {
    (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__["default"])(type, note);
  });
}


/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addExistingProjectsToSidebar: () => (/* binding */ addExistingProjectsToSidebar),
/* harmony export */   "default": () => (/* binding */ loadProjectPage)
/* harmony export */ });
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/noTasksMessage */ "./src/ui/noTasksMessage.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");
/* harmony import */ var _ui_addNewProjectToSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/addNewProjectToSidebar */ "./src/ui/addNewProjectToSidebar.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/addTaskToPage */ "./src/ui/addTaskToPage.js");








//runs when a individual project is clicked
function loadProjectPage(e) {
  (0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])('project');
  (0,_events__WEBPACK_IMPORTED_MODULE_2__.projectTrashCanEvents)();
  const projectTasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('project-task');

  if (!projectTasks) {
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('tasks', 'to-do-container');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  } else {
    // refactor to seperate function
    const individiualProjectTask = projectTasks.filter(
      (task) => task.projectPage === e.target.textContent
    );

    // if no task in project (just made) show no task message
    if (individiualProjectTask.length === 0) {
      (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('tasks', 'project-container');
      (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
    } else {
      // build task on project page clicked
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_5__.addTaskContainer)('project-container');
      individiualProjectTask.forEach((task) => {
        (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_5__.buildToDoUi)(task);
      });
    }
  }
}

// function is ran on page load
function addExistingProjectsToSidebar() {
  // we also want to check if there is any projects on page load in LS to show
  // under projects tab on page load aswell.
  const projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('project');

  if (!projects) return;

  projects.forEach((project) => {
    (0,_ui_addNewProjectToSidebar__WEBPACK_IMPORTED_MODULE_4__["default"])(project.taskTitle);
  });
}


/***/ }),

/***/ "./src/pages/taskList.js":
/*!*******************************!*\
  !*** ./src/pages/taskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTaskList)
/* harmony export */ });
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/noTasksMessage */ "./src/ui/noTasksMessage.js");
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/header */ "./src/ui/header.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/addTaskToPage */ "./src/ui/addTaskToPage.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");






// function is ran on page load and on link click
function loadTaskList() {
  (0,_ui_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const toDo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)('toDo');

  // if false we have no existing to-do's so make a task container so user can make some new tasks
  if (!toDo) {
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_0__["default"])('tasks', 'to-do-container');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  } else {
    addExistingToDoToPage('toDo');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  }
}

function addExistingToDoToPage(type) {
  // get all of the users tasks from LS
  const toDo = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)('toDo');

  toDo.forEach((task) => {
    (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_3__["default"])(type, task);
  });
}


/***/ }),

/***/ "./src/pages/today.js":
/*!****************************!*\
  !*** ./src/pages/today.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTodayPage)
/* harmony export */ });
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/noTasksMessage */ "./src/ui/noTasksMessage.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/addTaskToPage */ "./src/ui/addTaskToPage.js");






function loadTodayPage() {
  (0,_ui_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const data = localStorage.getItem('notes') || localStorage.getItem('tasks');

  if (!data) {
    // show no items saved in display if no data
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('items saved', 'to-do-container');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  } else {
    addExistingDataToTodayPage('notes', 'toDo');
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.dialogEvents)();
  }
}

function addExistingDataToTodayPage(typeOne, typeTwo) {
  //get all of the users notes/tasks from LS
  const notes = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('notes');
  const tasks = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('toDo');

  if (notes) {
    notes.forEach((note) => {
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__["default"])(typeOne, note);
    });
  }

  if (tasks) {
    tasks.forEach((task) => {
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__["default"])(typeTwo, task);
    });
  }
}


/***/ }),

/***/ "./src/tasks/addTasks.js":
/*!*******************************!*\
  !*** ./src/tasks/addTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToDo)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");
/* harmony import */ var _ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/addTaskToPage */ "./src/ui/addTaskToPage.js");



function addToDo(type, task, pageHeaderText) {
  // we dont want projects being added like tasks/notes will be
  // refactor later
  if (type === 'notes' || type === 'toDo') {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setToLocalStorage)(type, task);
    (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_1__["default"])(type, task);
  }

  if (type === 'project') {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setToLocalStorage)(type, task);
  }

  if (type === 'project-task') {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setToLocalStorage)(type, task, pageHeaderText);
    (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_1__["default"])(type, task, 'project-container');
  }
}


/***/ }),

/***/ "./src/tasks/captureTaskData.js":
/*!**************************************!*\
  !*** ./src/tasks/captureTaskData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureModalNotePageData: () => (/* binding */ captureModalNotePageData),
/* harmony export */   captureModalProjectPageData: () => (/* binding */ captureModalProjectPageData),
/* harmony export */   captureModalTaskPageData: () => (/* binding */ captureModalTaskPageData)
/* harmony export */ });
// factory functions to make our todo object with key/value pairs assigned
function captureModalTaskPageData() {
  const taskTitle = captureModalTitleTextData('.modal-task-title-area');
  const taskDetails = captureModalDetailsTextData('.modal-task-details-area');
  const taskDate = captureModalDateData();
  const priorityLevel = captureModalPriorityLevel();
  return { taskTitle, taskDetails, taskDate, priorityLevel };
}

function captureModalProjectPageData() {
  const taskTitle = captureModalTitleTextData('.modal-project-text-area');
  return { taskTitle };
}

function captureModalNotePageData() {
  const taskTitle = captureModalTitleTextData('.modal-notes-text-area');
  const taskDetails = captureModalDetailsTextData('.modal-notes-details-area');
  const taskDate = captureModalDateData();
  return { taskTitle, taskDetails, taskDate };
}

// capture all user inputs on modal
// only need one funciton here below, will refactor later
function captureModalTitleTextData(elementClassName) {
  const titleTextArea = document.querySelector(`${elementClassName}`);
  const textData = titleTextArea.value;
  return textData;
}

function captureModalDetailsTextData(elementClassName) {
  const detailsTextArea = document.querySelector(`${elementClassName}`);
  const textData = detailsTextArea.value;
  return textData;
}

function captureModalDateData() {
  const dateInput = document.querySelector('.modal-date-input');
  const dateData = dateInput.value;
  return dateData;
}

function captureModalPriorityLevel() {
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const buttonArray = Array.from(priorityButtons);

  // btn with a color of white is currently selected button
  const priorityClicked = buttonArray.find(
    (element) => element.style.color === 'white'
  );

  return priorityClicked.textContent;
}




/***/ }),

/***/ "./src/tasks/deleteTasks.js":
/*!**********************************!*\
  !*** ./src/tasks/deleteTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/dom */ "./src/ui/dom.js");


function deleteTask(type, element) {
  element.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const task = parent.parentNode;

    if (type === 'toDo') {
      // gets us the task title from task clicked
      const taskTitle = task.classList[0];
      (0,_ui_dom__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromDom)(task, taskTitle);
    } else {
      // gets us the note title from task clicked
      const noteTitle = task.childNodes[0].textContent;
      (0,_ui_dom__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromDom)(task, noteTitle);
    }
  });
}


/***/ }),

/***/ "./src/ui/activeAttribute.js":
/*!***********************************!*\
  !*** ./src/ui/activeAttribute.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addActiveAttribute: () => (/* binding */ addActiveAttribute),
/* harmony export */   checkForActiveAttribute: () => (/* binding */ checkForActiveAttribute)
/* harmony export */ });
function addActiveAttribute(e) {
  e.target.classList.add('active');
}

function checkForActiveAttribute(linkArray) {
  linkArray.forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
}




/***/ }),

/***/ "./src/ui/addNewProjectToSidebar.js":
/*!******************************************!*\
  !*** ./src/ui/addNewProjectToSidebar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfProjectNameAlreadyExists: () => (/* binding */ checkIfProjectNameAlreadyExists),
/* harmony export */   "default": () => (/* binding */ addNewProjectToSidebar)
/* harmony export */ });
// refactor below
function addNewProjectToSidebar(projectTitle) {
  const projectSidebarLink = document.querySelector('.sidebar-project-link');

  const newProjectLink = document.createElement('button');
  newProjectLink.setAttribute('class', `${projectTitle} project-child`);
  // add link item class name so we can reuse other modules for active link clicked
  newProjectLink.classList.add('link-item');
  newProjectLink.textContent = `${projectTitle}`;
  // insert new user project button AFTER sidebar project link
  projectSidebarLink.insertAdjacentElement('afterend', newProjectLink);

  const projectsIcon = document.createElement('i');
  projectsIcon.setAttribute('class', 'fa-solid fa-clipboard-list');
  newProjectLink.insertAdjacentElement('afterbegin', projectsIcon);

  // if project title is > 15 characters and a title that will show on hover
  const projectTitleArray = projectTitle.split('');
  if (projectTitleArray.length > 15) {
    newProjectLink.setAttribute('title', `${projectTitle}`);
  }
}

// runs only when user is adding a new project to sidebar
function checkIfProjectNameAlreadyExists(projectTitle) {
  const sidebarProjects = document.querySelectorAll('.project-child');
  let projectExists = false;

  sidebarProjects.forEach((project) => {
    if (project.textContent === projectTitle) {
      alert('You already have a project with that title!');
      projectExists = true;
    }
  });

  return projectExists;
}




/***/ }),

/***/ "./src/ui/addTaskToPage.js":
/*!*********************************!*\
  !*** ./src/ui/addTaskToPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskContainer: () => (/* binding */ addTaskContainer),
/* harmony export */   buildToDoUi: () => (/* binding */ buildToDoUi),
/* harmony export */   "default": () => (/* binding */ addTaskToPage)
/* harmony export */ });
/* harmony import */ var _tasks_deleteTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/deleteTasks */ "./src/tasks/deleteTasks.js");


function addTaskToPage(type, task, containerName) {
  // refactor all this later
  if (type === 'toDo') {
    // type would equal 'toDo'
    addToDoToPage(task);
  } else if (type === 'project-task') {
    addToDoToPage(task, containerName);
  }

  if (type === 'notes') {
    addNotesToPage(task);
  }
}

function buildToDoUi(task) {
  const toDoContainer =
    document.querySelector('.to-do-container') ||
    document.querySelector('.project-container');

  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add(`${task.taskTitle}`);
  toDoDiv.classList.add('to-do-div');
  toDoContainer.appendChild(toDoDiv);

  const toDoDivLeft = document.createElement('div');
  toDoDivLeft.classList.add('to-do-div-left');
  toDoDiv.appendChild(toDoDivLeft);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList.add('to-do-checkbox');
  toDoDivLeft.appendChild(checkBox);

  const toDo = document.createElement('p');
  toDo.classList.add('to-do');
  toDo.textContent = `${task.taskTitle}`;
  toDoDivLeft.appendChild(toDo);

  const toDoDivRight = document.createElement('div');
  toDoDivRight.classList.add('to-do-div-right');
  toDoDiv.appendChild(toDoDivRight);

  const toDoDate = document.createElement('p');
  toDoDate.classList.add('to-do-date');
  toDoDate.textContent = `${task.taskDate}`;
  toDoDivRight.appendChild(toDoDate);

  const deleteTaskBtn = document.createElement('i');
  deleteTaskBtn.classList.add('to-do-delete-btn');
  deleteTaskBtn.setAttribute('class', 'fa-solid fa-trash');
  deleteTaskBtn.setAttribute('title', 'Delete Task');
  toDoDivRight.appendChild(deleteTaskBtn);
  // add event handler to each trash can icon made
  (0,_tasks_deleteTasks__WEBPACK_IMPORTED_MODULE_0__["default"])('toDo', deleteTaskBtn);

  const toDoPriorityLevel = document.createElement('p');
  toDoPriorityLevel.classList.add('to-do-priority-level');
  toDoPriorityLevel.textContent = `${task.priorityLevel}`;
  toDoDivRight.appendChild(toDoPriorityLevel);
}

function addToDoToPage(task, containerName) {
  if (containerName === 'project-container') {
    addTaskContainer('project-container');
    buildToDoUi(task);
  } else {
    addTaskContainer('to-do-container');
    buildToDoUi(task);
  }
}

function addTaskContainer(className) {
  // if container already exists just return so we dont get duplicates
  if (document.querySelector(`.${className}`)) return;

  const main = document.querySelector('.main-right');
  const toDoContainer = document.createElement('div');
  toDoContainer.classList.add(`${className}`);
  main.appendChild(toDoContainer);
}

function addNotesToPage(task) {
  addTaskContainer('notes-container');
  const notesContainer = document.querySelector('.notes-container');

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note-div');
  notesContainer.appendChild(noteDiv);

  const noteHeaderDiv = document.createElement('div');
  noteHeaderDiv.classList.add('note-header');
  noteDiv.appendChild(noteHeaderDiv);

  const noteHeader = document.createElement('p');
  noteHeader.textContent = `${task.taskTitle}`;
  noteHeaderDiv.appendChild(noteHeader);

  const deleteNoteBtn = document.createElement('i');
  deleteNoteBtn.setAttribute('class', 'fa-solid fa-x');
  deleteNoteBtn.classList.add('note-close-btn');
  noteHeaderDiv.appendChild(deleteNoteBtn);
  // add event handler to each trash can icon made
  (0,_tasks_deleteTasks__WEBPACK_IMPORTED_MODULE_0__["default"])('notes', deleteNoteBtn);

  const noteTextContent = document.createElement('p');
  noteTextContent.classList.add('note-text-content');
  noteTextContent.textContent = `${task.taskDetails}`;
  noteDiv.appendChild(noteTextContent);

  const noteDate = document.createElement('p');
  noteDate.classList.add('note-date');
  noteDate.textContent = `${task.taskDate}`;
  noteDiv.appendChild(noteDate);
}




/***/ }),

/***/ "./src/ui/dom.js":
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForNoTaskMessage: () => (/* binding */ checkForNoTaskMessage),
/* harmony export */   removeTaskFromDom: () => (/* binding */ removeTaskFromDom),
/* harmony export */   wipeDomContent: () => (/* binding */ wipeDomContent),
/* harmony export */   wipeModalContent: () => (/* binding */ wipeModalContent)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage */ "./src/localStorage.js");
/* harmony import */ var _deleteProjectFromSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deleteProjectFromSidebar */ "./src/deleteProjectFromSidebar.js");
/* harmony import */ var _addTaskToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskToPage */ "./src/ui/addTaskToPage.js");




function wipeDomContent() {
  const content = document.querySelector('.main-right');

  if (content.hasChildNodes()) {
    // if mainContent has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

function wipeModalContent(content) {
  if (content.hasChildNodes()) {
    // if modal main has a child, replace w/empty string so we can show next nav items clicked content
    content.textContent = '';
  }
}

// refactor below
function removeTaskFromDom(task, taskTitle) {
  const toDoContainer =
    document.querySelector('.to-do-container') ||
    document.querySelector('.project-container') ||
    document.querySelector('.notes-container');

  if (toDoContainer.className === 'project-container') {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocalStorage)('project-task', taskTitle);
  } else if (toDoContainer.className === 'to-do-container') {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocalStorage)('toDo', taskTitle);
  } else {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromLocalStorage)('notes', taskTitle);
  }

  toDoContainer.removeChild(task);

  // if project page has no children then we'll grab the page header and delete
  // it from the sidebar
  if (
    toDoContainer.children.length === 0 &&
    toDoContainer.textContent === 'project-container'
  ) {
    const currentPage = document.querySelector('.header-content').textContent;
    (0,_deleteProjectFromSidebar__WEBPACK_IMPORTED_MODULE_1__["default"])(currentPage);
    wipeDomContent();
    (0,_addTaskToPage__WEBPACK_IMPORTED_MODULE_2__.addTaskContainer)('to-do-container');
  }
}

function checkForNoTaskMessage() {
  const noTaskText = document.querySelector('.no-task-text');
  const newContentBtn = document.querySelector('.main-new');
  const container =
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container') ||
    document.querySelector('.project-container');

  if (container.contains(noTaskText)) {
    container.removeChild(noTaskText);
    container.removeChild(newContentBtn);
  }
}




/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(type) {
  // using innerHTML so we can grab the icon as well as text
  const sidebarLinkClicked = document.querySelector('.active').innerHTML;
  const mainBody = document.querySelector('.main-right');

  const pageHeader = document.createElement('div');
  pageHeader.classList.add('page-header');
  // pageHeader.innerHTML = `${sidebarLinkClicked}`;

  const headerContent = document.createElement('div');
  headerContent.classList.add('header-content');
  headerContent.innerHTML = `${sidebarLinkClicked}`;
  pageHeader.appendChild(headerContent);

  if (type === 'project') {
    const projectTrashDiv = document.createElement('div');
    projectTrashDiv.classList.add('project-trash-div');
    pageHeader.appendChild(projectTrashDiv);

    const projectTrashCan = document.createElement('i');
    projectTrashCan.setAttribute('class', 'fa-solid fa-trash-can');
    projectTrashDiv.appendChild(projectTrashCan);

    const projectTrashText = document.createElement('p');
    projectTrashText.textContent = 'Delete Project';
    projectTrashDiv.appendChild(projectTrashText);
  }

  mainBody.appendChild(pageHeader);
}


/***/ }),

/***/ "./src/ui/mainContent.js":
/*!*******************************!*\
  !*** ./src/ui/mainContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainContent)
/* harmony export */ });
/* harmony import */ var _pages_taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/taskList */ "./src/pages/taskList.js");


function createMainContent() {
  const body = document.querySelector('body');
  const rightMainContent = document.createElement('div');
  rightMainContent.classList.add('main-right');
  body.appendChild(rightMainContent);

  // on page load open to 'task-list'
  (0,_pages_taskList__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/ui/modal/due-date.js":
/*!**********************************!*\
  !*** ./src/ui/modal/due-date.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildDueDateDiv)
/* harmony export */ });
function buildDueDateDiv(element) {
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('modal-date-div');
  element.appendChild(dateDiv);

  buildDueDateLabel(dateDiv);
  buildDueDateInput(dateDiv);
}

function buildDueDateLabel(dateDiv) {
  const dateLabel = document.createElement('label');
  dateLabel.classList.add('modal-date-label');
  dateLabel.setAttribute('for', 'modal-date-input');
  dateLabel.textContent = 'Due date: ';
  dateDiv.appendChild(dateLabel);
}

function buildDueDateInput(dateDiv) {
  const dateInput = document.createElement('input');
  dateInput.classList.add('modal-date-input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'modal-date-input');
  dateDiv.appendChild(dateInput);
}


/***/ }),

/***/ "./src/ui/modal/modal-add-button.js":
/*!******************************************!*\
  !*** ./src/ui/modal/modal-add-button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildModalAddTaskButton)
/* harmony export */ });
function buildModalAddTaskButton(element, className, btnText) {
  const addNewBtnModalPage = document.createElement('button');
  addNewBtnModalPage.classList.add(`${className}`);
  addNewBtnModalPage.classList.add('modal-add-btn');
  addNewBtnModalPage.textContent = `${btnText}`;
  element.appendChild(addNewBtnModalPage);
}


/***/ }),

/***/ "./src/ui/modal/modal-events.js":
/*!**************************************!*\
  !*** ./src/ui/modal/modal-events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalEvents)
/* harmony export */ });
/* harmony import */ var _activeAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../activeAttribute */ "./src/ui/activeAttribute.js");
/* harmony import */ var _modal_task_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-task-page */ "./src/ui/modal/modal-task-page.js");
/* harmony import */ var _modal_project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-project-page */ "./src/ui/modal/modal-project-page.js");
/* harmony import */ var _modal_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-note-page */ "./src/ui/modal/modal-note-page.js");
/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeModal */ "./src/ui/modal/removeModal.js");






function modalEvents() {
  const modalSidebarLinks = document.querySelectorAll('.modal-link');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const newModal = document.querySelector('.new-modal');

  modalSidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      (0,_activeAttribute__WEBPACK_IMPORTED_MODULE_0__.checkForActiveAttribute)(modalSidebarLinks);
      (0,_activeAttribute__WEBPACK_IMPORTED_MODULE_0__.addActiveAttribute)(e);
      checkWichModalSidebarLinkIsClicked(e);
    });
  });

  newModal.addEventListener('close', () => {
    (0,_removeModal__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });

  modalCloseBtn.addEventListener('click', () => {
    (0,_removeModal__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
}

function checkWichModalSidebarLinkIsClicked(link) {
  switch (link.target.textContent) {
    case 'Task':
      (0,_modal_task_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
    case 'Project':
      (0,_modal_project_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
    case 'Note':
      (0,_modal_note_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
      break;

    default:
      break;
  }
}


/***/ }),

/***/ "./src/ui/modal/modal-note-page-events.js":
/*!************************************************!*\
  !*** ./src/ui/modal/modal-note-page-events.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalTaskNotesEvents)
/* harmony export */ });
/* harmony import */ var _tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/captureTaskData */ "./src/tasks/captureTaskData.js");
/* harmony import */ var _tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/addTasks */ "./src/tasks/addTasks.js");
/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeModal */ "./src/ui/modal/removeModal.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");





function modalTaskNotesEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const main = document.querySelector('.main-right');
  const noTaskContainer = document.querySelector('.to-do-container');

  // capture todo object in task variable
  modalAddButton.addEventListener('click', () => {
    const task = (0,_tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__.captureModalNotePageData)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.checkForNoTaskMessage)();
    (0,_tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__["default"])('notes', task);
    (0,_removeModal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (noTaskContainer) {
      main.removeChild(noTaskContainer);
    }
  });
}


/***/ }),

/***/ "./src/ui/modal/modal-note-page.js":
/*!*****************************************!*\
  !*** ./src/ui/modal/modal-note-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadModalNotesPage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");
/* harmony import */ var _due_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./due-date */ "./src/ui/modal/due-date.js");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-area */ "./src/ui/modal/text-area.js");
/* harmony import */ var _modal_add_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-add-button */ "./src/ui/modal/modal-add-button.js");
/* harmony import */ var _modal_note_page_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-note-page-events */ "./src/ui/modal/modal-note-page-events.js");






function loadModalNotesPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-notes-text-area')) return;

  const modalMainContent = document.querySelector('.modal-new-content-div');
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.wipeModalContent)(modalMainContent);
  (0,_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(
    'modal-notes-text-area',
    'Title: Grocery List.',
    modalMainContent
  );
  (0,_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(
    'modal-notes-details-area',
    'Details: fruit, waters, meat',
    modalMainContent
  );
  (0,_due_date__WEBPACK_IMPORTED_MODULE_1__["default"])(modalMainContent);
  (0,_modal_add_button__WEBPACK_IMPORTED_MODULE_3__["default"])(modalMainContent, 'modal-add-note-btn', 'Add Note');

  // call specific modal note page events
  (0,_modal_note_page_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


/***/ }),

/***/ "./src/ui/modal/modal-project-page-events.js":
/*!***************************************************!*\
  !*** ./src/ui/modal/modal-project-page-events.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalTaskProjectEvents)
/* harmony export */ });
/* harmony import */ var _tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/captureTaskData */ "./src/tasks/captureTaskData.js");
/* harmony import */ var _tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/addTasks */ "./src/tasks/addTasks.js");
/* harmony import */ var _addNewProjectToSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addNewProjectToSidebar */ "./src/ui/addNewProjectToSidebar.js");
/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeModal */ "./src/ui/modal/removeModal.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events */ "./src/events.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");







function modalTaskProjectEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');

  modalAddButton.addEventListener('click', () => {
    // capture todo object in task variable
    const task = (0,_tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__.captureModalProjectPageData)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_5__.checkForNoTaskMessage)();

    // destructure and rename to project title so we can add to sidebar through function call
    const { taskTitle: projectTitle } = task;
    const check = (0,_addNewProjectToSidebar__WEBPACK_IMPORTED_MODULE_2__.checkIfProjectNameAlreadyExists)(projectTitle);

    // if we have a duplicate project name return, else add project to sidebar
    if (check === true) {
      return;
    } else {
      (0,_tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__["default"])('project', task);
      (0,_addNewProjectToSidebar__WEBPACK_IMPORTED_MODULE_2__["default"])(projectTitle);
      (0,_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_removeModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  });
}


/***/ }),

/***/ "./src/ui/modal/modal-project-page.js":
/*!********************************************!*\
  !*** ./src/ui/modal/modal-project-page.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadModalProjectPage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");
/* harmony import */ var _due_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./due-date */ "./src/ui/modal/due-date.js");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-area */ "./src/ui/modal/text-area.js");
/* harmony import */ var _modal_add_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-add-button */ "./src/ui/modal/modal-add-button.js");
/* harmony import */ var _modal_project_page_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-project-page-events */ "./src/ui/modal/modal-project-page-events.js");






function loadModalProjectPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-project-text-area')) return;

  const modalMainContent = document.querySelector('.modal-new-content-div');
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.wipeModalContent)(modalMainContent);
  (0,_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(
    'modal-project-text-area',
    'Title: Build new fence.',
    modalMainContent
  );
  (0,_modal_add_button__WEBPACK_IMPORTED_MODULE_3__["default"])(
    modalMainContent,
    'modal-add-project-btn',
    'Add Project'
  );

  // call specific modal project page events
  (0,_modal_project_page_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


/***/ }),

/***/ "./src/ui/modal/modal-task-page-events.js":
/*!************************************************!*\
  !*** ./src/ui/modal/modal-task-page-events.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalTaskPageEvents)
/* harmony export */ });
/* harmony import */ var _tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/captureTaskData */ "./src/tasks/captureTaskData.js");
/* harmony import */ var _tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks/addTasks */ "./src/tasks/addTasks.js");
/* harmony import */ var _removeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeModal */ "./src/ui/modal/removeModal.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");





function modalTaskPageEvents() {
  const modalAddButton = document.querySelector('.modal-add-btn');
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const pageHeader = document.querySelector('.page-header');
  const pageHeaderText = document.querySelector('.header-content');

  modalAddButton.addEventListener('click', () => {
    if (pageHeader === null) {
      pageHeader = ' ';
      pageHeaderText = ' ';
    }

    // check if task should be attached to a project or not
    if (pageHeader.nextSibling.className === 'project-container') {
      // capture todo object in task variable
      const task = (0,_tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__.captureModalTaskPageData)();
      (0,_removeModal__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.checkForNoTaskMessage)();
      (0,_tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__["default"])('project-task', task, pageHeaderText.textContent);
    } else {
      const task = (0,_tasks_captureTaskData__WEBPACK_IMPORTED_MODULE_0__.captureModalTaskPageData)();
      (0,_dom__WEBPACK_IMPORTED_MODULE_3__.checkForNoTaskMessage)();
      (0,_tasks_addTasks__WEBPACK_IMPORTED_MODULE_1__["default"])('toDo', task);
      (0,_removeModal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });

  priorityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // func to check if any buttons have a color of white
      // if so change it to normal so next btn clicked will be the selected one taken as input
      const btnBgColor = getComputedStyle(button);
      button.style.backgroundColor = `${btnBgColor.backgroundColor}`;
      button.style.color = 'White';
    });
  });
}


/***/ }),

/***/ "./src/ui/modal/modal-task-page.js":
/*!*****************************************!*\
  !*** ./src/ui/modal/modal-task-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadModalTaskPage)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/ui/dom.js");
/* harmony import */ var _due_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./due-date */ "./src/ui/modal/due-date.js");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-area */ "./src/ui/modal/text-area.js");
/* harmony import */ var _modal_add_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-add-button */ "./src/ui/modal/modal-add-button.js");
/* harmony import */ var _modal_task_page_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-task-page-events */ "./src/ui/modal/modal-task-page-events.js");






function loadModalTaskPage() {
  // if it exists then dont build the page because its open already, just return
  if (document.querySelector('.modal-task-title-area')) return;

  const modalMainContent = document.querySelector('.modal-new-content-div');
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.wipeModalContent)(modalMainContent);
  (0,_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(
    'modal-task-title-area',
    'Title: Pay Bills',
    modalMainContent
  );
  (0,_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(
    'modal-task-details-area',
    'Details: phone bill',
    modalMainContent
  );
  (0,_due_date__WEBPACK_IMPORTED_MODULE_1__["default"])(modalMainContent);
  buildModalTaskpriorityDiv(modalMainContent);
  // call specific modal task page events
  (0,_modal_task_page_events__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

function buildModalTaskpriorityDiv(modalMainContent) {
  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('modal-priority-div');
  priorityDiv.textContent = 'Priority: ';
  modalMainContent.appendChild(priorityDiv);

  const prioritybuttonDiv = document.createElement('div');
  prioritybuttonDiv.classList.add('priority-btn-div');
  priorityDiv.appendChild(prioritybuttonDiv);

  buildPriorityButtons(prioritybuttonDiv);
  (0,_modal_add_button__WEBPACK_IMPORTED_MODULE_3__["default"])(priorityDiv, 'modal-add-task-btn', 'Add to do');
}

function buildPriorityButtons(prioritybuttonDiv) {
  const priorityLowBtn = document.createElement('button');
  priorityLowBtn.classList.add('priority-low-btn');
  priorityLowBtn.classList.add('modal-btn');
  priorityLowBtn.textContent = 'LOW';
  prioritybuttonDiv.appendChild(priorityLowBtn);

  const priorityMedBtn = document.createElement('button');
  priorityMedBtn.classList.add('priority-med-btn');
  priorityMedBtn.classList.add('modal-btn');
  priorityMedBtn.textContent = 'MEDIUM';
  prioritybuttonDiv.appendChild(priorityMedBtn);

  const priorityHighBtn = document.createElement('button');
  priorityHighBtn.classList.add('priority-high-btn');
  priorityHighBtn.classList.add('modal-btn');
  priorityHighBtn.textContent = 'HIGH';
  prioritybuttonDiv.appendChild(priorityHighBtn);
}


/***/ }),

/***/ "./src/ui/modal/modal.js":
/*!*******************************!*\
  !*** ./src/ui/modal/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewDialogModal)
/* harmony export */ });
/* harmony import */ var _modal_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-events */ "./src/ui/modal/modal-events.js");
/* harmony import */ var _modal_task_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-task-page */ "./src/ui/modal/modal-task-page.js");



function createNewDialogModal() {
  if (document.querySelector('.new-modal')) return;
  const container =
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container') ||
    document.querySelector('.project-container');
  const newModal = document.createElement('dialog');
  newModal.classList.add('new-modal');
  container.appendChild(newModal);

  createModalHeader(newModal);
  createModalMainDiv(newModal);
  createModalSidebar();
  createModalContentDiv();

  newModal.showModal();

  // we want task page to be the first to automatically show in modal
  (0,_modal_task_page__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // load modal events so user can change tabs/etc
  (0,_modal_events__WEBPACK_IMPORTED_MODULE_0__["default"])(newModal, container);
}

function createModalHeader(newModal) {
  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.textContent = 'Create a new...';
  newModal.appendChild(header);

  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fa-solid fa-x');
  closeBtn.setAttribute('title', 'Close');
  closeBtn.classList.add('modal-close-btn');
  header.appendChild(closeBtn);
}

function createModalMainDiv(newModal) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('modal-main-div');
  newModal.appendChild(mainDiv);
}

function createModalSidebar() {
  const mainDiv = document.querySelector('.modal-main-div');
  const sidebar = document.createElement('div');
  sidebar.classList.add('modal-sidebar');

  const sidebarLinkTasks = document.createElement('p');
  sidebarLinkTasks.classList.add('modal-link');
  // add active to show task page first in modal
  sidebarLinkTasks.classList.add('active');
  sidebarLinkTasks.textContent = 'Task';
  sidebar.appendChild(sidebarLinkTasks);

  const sidebarLinkProjects = document.createElement('p');
  sidebarLinkProjects.classList.add('modal-link');
  sidebarLinkProjects.textContent = 'Project';
  sidebar.appendChild(sidebarLinkProjects);

  const sidebarLinkNotes = document.createElement('p');
  sidebarLinkNotes.classList.add('modal-link');
  sidebarLinkNotes.textContent = 'Note';
  sidebar.appendChild(sidebarLinkNotes);
  mainDiv.appendChild(sidebar);
}

function createModalContentDiv() {
  const mainDiv = document.querySelector('.modal-main-div');
  const newContentDiv = document.createElement('div');
  newContentDiv.classList.add('modal-new-content-div');
  mainDiv.appendChild(newContentDiv);

  const newEntryDiv = document.createElement('div');
  newEntryDiv.classList.add('modal-new-entry');
  newContentDiv.appendChild(newEntryDiv);
}


/***/ }),

/***/ "./src/ui/modal/removeModal.js":
/*!*************************************!*\
  !*** ./src/ui/modal/removeModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeModal)
/* harmony export */ });
function removeModal() {
  const newModal = document.querySelector('.new-modal');
  const container =
    document.querySelector('.to-do-container') ||
    document.querySelector('.notes-container') ||
    document.querySelector('.project-container');

  container.removeChild(newModal);
}


/***/ }),

/***/ "./src/ui/modal/text-area.js":
/*!***********************************!*\
  !*** ./src/ui/modal/text-area.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildModalTextArea)
/* harmony export */ });
function buildModalTextArea(className, placeholder, element) {
  const textArea = document.createElement('textarea');
  textArea.classList.add(`${className}`);
  textArea.placeholder = `${placeholder}`;
  element.appendChild(textArea);
}


/***/ }),

/***/ "./src/ui/noTasksMessage.js":
/*!**********************************!*\
  !*** ./src/ui/noTasksMessage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeNewTaskDiv)
/* harmony export */ });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events.js");


function makeNewTaskDiv(choice, containerClassName) {
  const mainRightBody = document.querySelector('.main-right');
  const containerToCheckFor = document.querySelector(`.${containerClassName}`);
  checkIfTaskDivExists(mainRightBody, containerToCheckFor);

  const noTaskDiv = document.createElement('div');
  noTaskDiv.classList.add(containerClassName);
  mainRightBody.appendChild(noTaskDiv);

  createNoTaskContainerText(noTaskDiv, choice);
  createNoTaskContainerButton(noTaskDiv);
  (0,_events__WEBPACK_IMPORTED_MODULE_0__.dialogEvents)();
}

function createNoTaskContainerText(noTaskDiv, choice) {
  const noTaskText = document.createElement('p');
  noTaskText.textContent = `You have no ${choice} yet, lets make some!`;
  noTaskText.classList.add('no-task-text');
  noTaskDiv.appendChild(noTaskText);
}

function createNoTaskContainerButton(noTaskDiv) {
  const newTaskButton = document.createElement('i');
  newTaskButton.setAttribute(
    'class',
    'new-content main-new fa-regular fa-plus fa-2xl'
  );
  newTaskButton.setAttribute('title', 'New');
  noTaskDiv.appendChild(newTaskButton);
}

function checkIfTaskDivExists(mainRightBody, containerToCheckFor) {
  if (containerToCheckFor) {
    mainRightBody.removeChild(containerToCheckFor);
  }
}


/***/ }),

/***/ "./src/ui/sidebar.js":
/*!***************************!*\
  !*** ./src/ui/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSideBar)
/* harmony export */ });
/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/projects */ "./src/pages/projects.js");


function createSidebar() {
  const contentContainer = document.querySelector('.content');
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-left');
  contentContainer.appendChild(sidebar);
  createTopSidebarContent(sidebar);
}

function createTopSidebarContent(sidebar) {
  const topContainer = document.createElement('div');
  topContainer.classList.add('sidebar-top-container');
  sidebar.appendChild(topContainer);

  const sidebarLinks = document.createElement('ul');
  sidebarLinks.classList.add('sidebar-links');
  topContainer.appendChild(sidebarLinks);

  const todayLinkItem = document.createElement('li');
  todayLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(todayLinkItem);
  const todayLink = document.createElement('i');
  todayLink.setAttribute('class', 'sidebar-link fa-solid fa-sun');
  todayLinkItem.appendChild(todayLink);
  const todayLinkText = document.createElement('a');
  todayLinkText.classList.add('today');
  todayLinkText.textContent = 'Today';
  todayLinkItem.appendChild(todayLinkText);

  const taskListLinkItem = document.createElement('li');
  taskListLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(taskListLinkItem);
  const taskListLink = document.createElement('i');
  taskListLink.setAttribute('class', 'fa-solid fa-check');
  taskListLinkItem.appendChild(taskListLink);

  const taskListLinkText = document.createElement('a');
  taskListLinkText.classList.add('task-list');
  // add active to task list because we want this page to show automatically
  taskListLinkItem.classList.add('active');
  taskListLinkText.textContent = 'Task List';
  taskListLinkItem.appendChild(taskListLinkText);

  createBottomSidebarContent(sidebar);
}

function createBottomSidebarContent(sidebar) {
  const bottomContainer = document.createElement('div');
  bottomContainer.classList.add('sidebar-bottom-container');
  sidebar.appendChild(bottomContainer);

  const sidebarLinks = document.createElement('ul');
  sidebarLinks.classList.add('sidebar-links');
  bottomContainer.appendChild(sidebarLinks);

  const projectLinkItem = document.createElement('li');
  projectLinkItem.classList.add('sidebar-project-link');
  sidebarLinks.appendChild(projectLinkItem);
  const projectLink = document.createElement('i');
  projectLink.setAttribute('class', 'fa-solid fa-file');
  projectLinkItem.appendChild(projectLink);
  const projectLinkText = document.createElement('a');
  projectLinkText.classList.add('projects');
  projectLinkText.textContent = 'Projects';
  projectLinkItem.appendChild(projectLinkText);

  const addNewProjectLinkItem = document.createElement('i');
  addNewProjectLinkItem.setAttribute('class', 'fa-solid fa-plus');
  addNewProjectLinkItem.classList.add('add-project-btn');
  addNewProjectLinkItem.textContent;
  projectLinkItem.appendChild(addNewProjectLinkItem);
  const addNewprojectLinkText = document.createElement('a');
  addNewprojectLinkText.classList.add('add-new-project');
  addNewprojectLinkText.textContent = 'Add project';
  addNewProjectLinkItem.appendChild(addNewprojectLinkText);
  // if any
  (0,_pages_projects__WEBPACK_IMPORTED_MODULE_0__.addExistingProjectsToSidebar)();

  const notesLinkItem = document.createElement('li');
  notesLinkItem.classList.add('link-item');
  sidebarLinks.appendChild(notesLinkItem);
  const notesLink = document.createElement('i');
  notesLink.setAttribute('class', 'fa-solid fa-book');
  notesLinkItem.appendChild(notesLink);
  const notesLinkText = document.createElement('a');
  notesLinkText.classList.add('notes');
  notesLinkText.textContent = 'Notes';
  notesLinkItem.appendChild(notesLinkText);

  createSidebarFooter(sidebar);
}

function createSidebarFooter(sidebar) {
  const sidebarFooter = document.createElement('div');
  sidebarFooter.classList.add('sidebar-footer');
  sidebar.appendChild(sidebarFooter);

  const newDiv = document.createElement('div');
  newDiv.classList.add('new-button-div');
  sidebarFooter.appendChild(newDiv);
  const newContentBtn = document.createElement('i');
  newContentBtn.setAttribute('title', 'New');
  newContentBtn.setAttribute('class', 'new-content fa-solid fa-plus');
  newDiv.appendChild(newContentBtn);

  const settingsDiv = document.createElement('div');
  settingsDiv.classList.add('settings-div');
  sidebarFooter.appendChild(settingsDiv);
  const settingsBtn = document.createElement('i');
  settingsBtn.setAttribute('title', 'Settings');
  settingsBtn.setAttribute('class', 'sidebar-settings fa-solid fa-gear');
  settingsDiv.appendChild(settingsBtn);
}

function loadSideBar() {
  createSidebar();
}


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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/sidebar */ "./src/ui/sidebar.js");
/* harmony import */ var _ui_mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/mainContent */ "./src/ui/mainContent.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_ui_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_ui_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_events__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkVBQTRCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7O1VDckhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDUTtBQUNiO0FBQ2I7O0FBRXJCLHVEQUFXO0FBQ1gsMkRBQWU7QUFDZixtREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2RlbGV0ZVByb2plY3RGcm9tU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VzL25vdGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VzL3Rhc2tMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BhZ2VzL3RvZGF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tzL2FkZFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tzL2NhcHR1cmVUYXNrRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy9kZWxldGVUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9hY3RpdmVBdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvYWRkTmV3UHJvamVjdFRvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9hZGRUYXNrVG9QYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvZHVlLWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtYWRkLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtbm90ZS1wYWdlLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1ub3RlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtcHJvamVjdC1wYWdlLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1wcm9qZWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtdGFzay1wYWdlLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC10YXNrLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvcmVtb3ZlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvdGV4dC1hcmVhLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL25vVGFza3NNZXNzYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHJlc2V0ICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpXG59XG5cbi8qIGRhcmsgbW9kZSB1c2VyLWFnZW50LXN0eWxlcyAqL1xuXG5odG1sIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrIGxpZ2h0O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbjpyb290IHtcbiAtLWZvbnQtY29sb3I6IHJnYmEoMTAsIDEwLCA3LCAwLjYpO1xuIC0tdGV4dC1ob3Zlci1jb2xvcjogcmdiYSgyNCwgMjQsIDE3LCAwLjA4OCk7XG4gLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmO1xuIC0tcHJpb3JpdHktbG93LWNvbG9yOiBncmVlbjtcbiAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHJlZDtcbiAtLXByaW9yaXR5LW1lZC1jb2xvcjogcmdiKDIzNiwgMTc2LCAxMSk7O1xuIC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcjogIzVjYjJhNztcbiAtLWZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XG4gLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWxlZnQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6MTN2dztcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmc6IDhweDsgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWRlYmFyLWxpbmtzIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi8qIEFERCBBTklNQVRJT05TIEZPUiBMSU5LUyBMQVRFUiAqL1xuLmxpbmstaXRlbTpob3ZlciwgLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xufVxuXG4ubGluay1pdGVtOm5vdCgucHJvamVjdC1jaGlsZCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLXByb2plY3QtbGluayB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtOyBcbn1cblxuLmZhLWZpbGUge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtXG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xufSBcblxuLmFkZC1uZXctcHJvamVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLmxpbmstaXRlbSA+IGEge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuW2NsYXNzfD0nbGluay1pdGVtIGFjdGl2ZSddIHtcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xufVxuXG4gYnV0dG9uW2NsYXNzfj0nYWN0aXZlJ10ge1xuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XG59IFxuXG4uc2lkZWJhci10b3AtY29udGFpbmVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtOyAgXG59XG5cbi5zaWRlYmFyLWJvdHRvbS1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbmEge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNpZGViYXItZm9vdGVyIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEzdnc7XG4gIGhlaWdodDogMi41cmVtO1xuICBsZWZ0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSg4NSwgODMsIDgzLCAwLjY4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnNpZGViYXItbmV3OmhvdmVyLCAuc2lkZWJhci1zZXR0aW5nczpob3ZlciwgLm5ldy1jb250ZW50OmhvdmVyLCAubW9kYWwtbGluazpob3ZlciwgLmZhLXg6aG92ZXIsIFxuLm1vZGFsLWRhdGUtaW5wdXQ6aG92ZXIsIC5tb2RhbC1idG46aG92ZXIsIC5mYS10cmFzaCwgLmZhLXRyYXNoLWNhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4tcmlnaHQge1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICBvdmVyZmxvdzphdXRvO1xufVxuXG4gLnRvLWRvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufSBcblxuLm5vdGVzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4ubWFpbi1uZXc6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsLW1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZGlhbG9nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi5tb2RhbC1uZXctY29udGVudC1kaXYge1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYSwgLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtdGV4dC1hcmVhLCAubW9kYWwtcHJvamVjdC10ZXh0LWFyZWF7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xufVxuLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE0ZHZoO1xufVxuLm1vZGFsLWxpbmsge1xuICBtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddIHtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ/CfoJonO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xuXG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1vZGFsLW5ldy1lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tb2RhbC1zaWRlYmFyIHtcbiAgd2lkdGg6IDEwZHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZhO1xuICBtaW4taGVpZ2h0OiAzNWR2aDtcbn1cblxuLm1vZGFsLWRhdGUtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpXG59XG5cbi5tb2RhbC1kYXRlLWRpdiB7ICBcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLm1vZGFsLXByaW9yaXR5LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcmlvcml0eS1idG4tZGl2IHtcbiAgZ2FwOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTIlO1xufVxuXG4ubW9kYWwtYWRkLXRhc2stYnRuLCAubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5tb2RhbC1hZGQtbm90ZS1idG46aG92ZXIsIC5tb2RhbC1hZGQtcHJvamVjdC1idG46aG92ZXIsIC5tb2RhbC1hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xuICBjb2xvcjp3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xufVxuXG4ubW9kYWwtYnRuLCAubW9kYWwtYWRkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByaW9yaXR5LWxvdy1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0bjpob3ZlciAge1xuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG59XG5cbi5wcmlvcml0eS1tZWQtYnRuIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKVxufVxuXG4ucHJpb3JpdHktbWVkLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gfVxuXG4ucHJpb3JpdHktaGlnaC1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuIH1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWluLXdpZHRoOiAyOWR2dztcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtaW4taGVpZ2h0OiA2ZHZoO1xufVxuXG4ubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEge1xuICBtaW4taGVpZ2h0OiAxMmR2aDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhIHtcbiAgbWluLWhlaWdodDogMThkdmg7XG59XG5cbi50by1kby1kaXYge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcmVtO1xuICBtaW4td2lkdGg6IDgwZHZ3O1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnRvLWRvLWRpdi1sZWZ0LCAudG8tZG8tZGl2LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubm8tdGFzay10ZXh0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG5cbi5ub3RlLWRpdiB7XG4gIG1hcmdpbjogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDIwZHZoO1xuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubm90ZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5ub3RlLWRhdGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZFxufVxuXG4ubm90ZS10ZXh0LWNvbnRlbnQge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5wcm9qZWN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcbiAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5wcm9qZWN0LXRyYXNoLWRpdiwgLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBRWQ7OztFQUdFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2I7QUFDRjs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTs7OztFQUlFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0NBQ0Msa0NBQWtDO0NBQ2xDLDJDQUEyQztDQUMzQyxpQ0FBaUM7Q0FDakMsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQix1Q0FBdUM7Q0FD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QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjc3MgcmVzZXQgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpXFxufVxcblxcbi8qIGRhcmsgbW9kZSB1c2VyLWFnZW50LXN0eWxlcyAqL1xcblxcbmh0bWwge1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrIGxpZ2h0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuIC0tZm9udC1jb2xvcjogcmdiYSgxMCwgMTAsIDcsIDAuNik7XFxuIC0tdGV4dC1ob3Zlci1jb2xvcjogcmdiYSgyNCwgMjQsIDE3LCAwLjA4OCk7XFxuIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjtcXG4gLS1wcmlvcml0eS1sb3ctY29sb3I6IGdyZWVuO1xcbiAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHJlZDtcXG4gLS1wcmlvcml0eS1tZWQtY29sb3I6IHJnYigyMzYsIDE3NiwgMTEpOztcXG4gLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yOiAjNWNiMmE3O1xcbiAtLWZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XFxuIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItbGVmdCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDoxM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XFxuICBwYWRkaW5nOiA4cHg7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyLWxpbmtzIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4vKiBBREQgQU5JTUFUSU9OUyBGT1IgTElOS1MgTEFURVIgKi9cXG4ubGluay1pdGVtOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmxpbmstaXRlbTpub3QoLnByb2plY3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpbmsge1xcbiAgZm9udC1zaXplOiAxLjFyZW07IFxcbn1cXG5cXG4uZmEtZmlsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtXFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59IFxcblxcbi5hZGQtbmV3LXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4ubGluay1pdGVtID4gYSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbltjbGFzc3w9J2xpbmstaXRlbSBhY3RpdmUnXSB7XFxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuIGJ1dHRvbltjbGFzc349J2FjdGl2ZSddIHtcXG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn0gXFxuXFxuLnNpZGViYXItdG9wLWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTsgIFxcbn1cXG5cXG4uc2lkZWJhci1ib3R0b20tY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG59XFxuXFxuYSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItZm9vdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoODUsIDgzLCA4MywgMC42OCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaWRlYmFyLW5ldzpob3ZlciwgLnNpZGViYXItc2V0dGluZ3M6aG92ZXIsIC5uZXctY29udGVudDpob3ZlciwgLm1vZGFsLWxpbms6aG92ZXIsIC5mYS14OmhvdmVyLCBcXG4ubW9kYWwtZGF0ZS1pbnB1dDpob3ZlciwgLm1vZGFsLWJ0bjpob3ZlciwgLmZhLXRyYXNoLCAuZmEtdHJhc2gtY2FuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluLXJpZ2h0IHtcXG4gIHdpZHRoOjEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgb3ZlcmZsb3c6YXV0bztcXG59XFxuXFxuIC50by1kby1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn0gXFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XFxuXFxuLm1haW4tbmV3OjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4ucGFnZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsLW1haW4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmRpYWxvZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XFxuXFxuLm1vZGFsLW5ldy1jb250ZW50LWRpdiB7XFxuICB0ZXh0LWluZGVudDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtdGFzay10aXRsZS1hcmVhLCAubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEsIC5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEsIC5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEsIC5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYXtcXG4gIHRleHQtaW5kZW50OiAxMHB4O1xcbn1cXG4ubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDE0ZHZoO1xcbn1cXG4ubW9kYWwtbGluayB7XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbn1cXG5cXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddIHtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbltjbGFzc3w9J21vZGFsLWxpbmsgYWN0aXZlJ106OmJlZm9yZSB7XFxuICBjb250ZW50OiAn8J+gmic7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xcblxcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC1uZXctZW50cnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2RhbC1zaWRlYmFyIHtcXG4gIHdpZHRoOiAxMGR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZhO1xcbiAgbWluLWhlaWdodDogMzVkdmg7XFxufVxcblxcbi5tb2RhbC1kYXRlLWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XFxuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbSAwLjEyNWVtIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpXFxufVxcblxcbi5tb2RhbC1kYXRlLWRpdiB7ICBcXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XFxufVxcblxcbi5tb2RhbC1wcmlvcml0eS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi1kaXYge1xcbiAgZ2FwOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHdpZHRoOiA1MiU7XFxufVxcblxcbi5tb2RhbC1hZGQtdGFzay1idG4sIC5tb2RhbC1hZGQtbm90ZS1idG4sIC5tb2RhbC1hZGQtcHJvamVjdC1idG4ge1xcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwtYWRkLW5vdGUtYnRuOmhvdmVyLCAubW9kYWwtYWRkLXByb2plY3QtYnRuOmhvdmVyLCAubW9kYWwtYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG59XFxuXFxuLm1vZGFsLWJ0biwgLm1vZGFsLWFkZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdy1idG4ge1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sb3ctYnRuOmhvdmVyICB7XFxuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxuIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG59XFxuXFxuLnByaW9yaXR5LW1lZC1idG4ge1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcilcXG59XFxuXFxuLnByaW9yaXR5LW1lZC1idG46aG92ZXIgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XFxuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbiB9XFxuXFxuLnByaW9yaXR5LWhpZ2gtYnRuIHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoLWJ0bjpob3ZlciAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbiB9XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWluLXdpZHRoOiAyOWR2dztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5tb2RhbC10YXNrLXRpdGxlLWFyZWF7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBtaW4taGVpZ2h0OiA2ZHZoO1xcbn1cXG5cXG4ubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEge1xcbiAgbWluLWhlaWdodDogMTJkdmg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtcHJvamVjdC10ZXh0LWFyZWEge1xcbiAgbWluLWhlaWdodDogMThkdmg7XFxufVxcblxcbi50by1kby1kaXYge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDNyZW07XFxuICBtaW4td2lkdGg6IDgwZHZ3O1xcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi50by1kby1kaXYtbGVmdCwgLnRvLWRvLWRpdi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tdGFzay10ZXh0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm5vdGUtZGl2IHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4td2lkdGg6IDIwZHZoO1xcbiAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5vdGUtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbVxcbn1cXG5cXG4ubm90ZS1kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kXFxufVxcblxcbi5ub3RlLXRleHQtY29udGVudCB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmc6IDAuNXJlbVxcbn1cXG5cXG4ucHJvamVjdC1jaGlsZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgb3ZlcmZsb3c6IGNsaXA7XFxufVxcblxcbi5wcm9qZWN0LXRyYXNoLWRpdiwgLmhlYWRlci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIobmFtZU9mUHJvamVjdCkge1xuICBjb25zdCBhbGxTaWRlYmFyTGlua0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstaXRlbScpO1xuICAvLyBvdXIgdG9wIGFuZCBib3R0b20gc2lkZWJhciBsaW5rcyBhcmUgYm90aCBjYWxsZWQgJ3NpZGViYXItbGlua3MnIHNvIHNwZWNpZnlcbiAgLy8gdGhhdCB3ZSB3YW50IHRoZSBib3R0b20gY29udGFpbmVyIHNpZGViYXIgbGlua3MuXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2lkZWJhci1ib3R0b20tY29udGFpbmVyJ1xuICApLmZpcnN0Q2hpbGQ7XG5cbiAgYWxsU2lkZWJhckxpbmtJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgLy8gaWYgbGluayBjbGlja2VkIGNsYXNzbGlzdCBlcXVhbCBwcm9qZWN0IG5hbWUgdGhlbiB0aGF0cyB0aGUgc2lkZWJhciBwcm9qZWN0IHdlIGRlbGV0ZVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdFswXSA9PT0gbmFtZU9mUHJvamVjdCkge1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0JywgYCR7bmFtZU9mUHJvamVjdH1gKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGxvYWRUYXNrTGlzdCBmcm9tICcuL3BhZ2VzL3Rhc2tMaXN0JztcbmltcG9ydCBsb2FkTm90ZXNQYWdlIGZyb20gJy4vcGFnZXMvbm90ZXMnO1xuaW1wb3J0IGxvYWRQcm9qZWN0UGFnZSBmcm9tICcuL3BhZ2VzL3Byb2plY3RzJztcbmltcG9ydCBsb2FkVG9kYXlQYWdlIGZyb20gJy4vcGFnZXMvdG9kYXknO1xuaW1wb3J0IHsgd2lwZURvbUNvbnRlbnQgfSBmcm9tICcuL3VpL2RvbSc7XG5pbXBvcnQge1xuICBhZGRBY3RpdmVBdHRyaWJ1dGUsXG4gIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlLFxufSBmcm9tICcuL3VpL2FjdGl2ZUF0dHJpYnV0ZSc7XG5pbXBvcnQgY3JlYXRlTmV3RGlhbG9nTW9kYWwgZnJvbSAnLi91aS9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyIGZyb20gJy4vZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyJztcbmltcG9ydCB7IGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBhZGRUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi91aS9hZGRUYXNrVG9QYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUGFnZUV2ZW50TGlzdGVuZXJzKCkge1xuICAvLyBldmVudHMgZm9yIHNpZGViYXJsaW5rICsgaW5kaXZpZHVhbCBwcm9qZWN0IHBhZ2VzXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWl0ZW0nKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgc2lkZWJhckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlKHNpZGViYXJMaW5rcyk7XG4gICAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgICAgY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBhZGROZXdQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBvcGVuIG1vZGFsIHdoZW4gdXNlciBjbGlja3Mgb24gYWRkIHByb2plY3RcbiAgICBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpIHtcbiAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ1RvZGF5JzpcbiAgICAgIGxvYWRUb2RheVBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Rhc2sgTGlzdCc6XG4gICAgICBsb2FkVGFza0xpc3QoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vdGVzJzpcbiAgICAgIGxvYWROb3Rlc1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIG91ciBkZWZhdWx0IHdpbGwgYmUgaW5kaXZpZHVhbCBwcm9qZWN0cyB0aGF0IGFyZSBjbGlja2VkIGlmIG5vdCBhbnkgb2YgdGhlIGFidm9lXG4gICAgZGVmYXVsdDpcbiAgICAgIGxvYWRQcm9qZWN0UGFnZShlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpYWxvZ0V2ZW50cygpIHtcbiAgY29uc3QgbmV3Q29udGVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LWNvbnRlbnQnKTtcblxuICBuZXdDb250ZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFRyYXNoQ2FuRXZlbnRzKCkge1xuICBjb25zdCBwcm9qZWN0VHJhc2hDYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XG5cbiAgcHJvamVjdFRyYXNoQ2FuLmZvckVhY2goKHRyYXNoQ2FuKSA9PiB7XG4gICAgdHJhc2hDYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHBhcmVudFNpYmxpbmdFbGVtZW50VGV4dENvbnRlbnQgPVxuICAgICAgICB0YXJnZXRQYXJlbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXJlbnRTaWJsaW5nRWxlbWVudFRleHRDb250ZW50O1xuXG4gICAgICAvLyB3aWxsIHJlbW92ZSBwcm9qZWN0IGZyb20gc2lkZWJhciBBTkQgZGVsZXRlIHByb2plY3QgZnJvbSBMU1xuICAgICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKHByb2plY3ROYW1lKTtcbiAgICAgIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QtdGFzaycsIHByb2plY3ROYW1lKTtcbiAgICAgIHdpcGVEb21Db250ZW50KCk7XG4gICAgICBhZGRUYXNrQ29udGFpbmVyKCd0by1kby1jb250YWluZXInKTtcbiAgICB9KTtcbiAgfSk7XG59XG5leHBvcnQgeyBkaWFsb2dFdmVudHMsIHByb2plY3RUcmFzaENhbkV2ZW50cyB9O1xuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrLCBwYWdlSGVhZGVyVGV4dCkge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKTtcblxuICAvL2lmIG5vIGRhdGFcbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gaWYgbm8gdmFsdWUgaW4gdmFyaWFibGUgdGhlbiB3ZSBhcmUgbm90IGFkZGluZyBhIHRhc2sgdG8gYSBwcm9qZWN0XG4gICAgaWYgKCFwYWdlSGVhZGVyVGV4dCkge1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3RcbiAgICAgIGNvbnN0IGRhdGFBcnJheSA9IFt0YXNrXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZCBwcm9qZWN0IHBhZ2UgdGl0bGUgcHJvcGVydHkgdG8gdGFza1xuICAgICAgdGFzay5wcm9qZWN0UGFnZSA9IHBhZ2VIZWFkZXJUZXh0O1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3QgYW5kIGluZGl2aWR1YWwgcHJvamVjdCBwYWdlIHRpdGxlXG4gICAgICBjb25zdCBkYXRhQXJyYXkgPSBbdGFza107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0eXBlfWAsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXNrLnByb2plY3RQYWdlID0gcGFnZUhlYWRlclRleHQ7XG5cbiAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIGV4aXN0aW5nIHRhc2tzIG9mICd0eXBlJ1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKSk7XG5cbiAgICBkYXRhQXJyYXkucHVzaCh0YXNrKTtcblxuICAgIC8vIHNldCBuZXcgYXJyYXkgd2l0aCBhbGwgdGFza3Mgb2xkIGFuZCBuZXcgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSh0eXBlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3R5cGV9YCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCB0YXNrVGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKGAke3R5cGV9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc1tpXS50YXNrVGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgc2V0VG9Mb2NhbFN0b3JhZ2VBZnRlckRlbGV0aW5nKHR5cGUsIHRhc2tzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoYCR7dHlwZX1gKTtcbiAgaWYgKCF0YXNrcykgcmV0dXJuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NbaV0ucHJvamVjdFBhZ2UgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gIC8vIHJlZmFjdG9yIGJlbG93XG4gIC8vIGlmIG5vIHRhc2tzIGluIGVpdGhlciAndG9Ebycgb3IgJ25vdGVzJyBMUyBhcnJheXMgZGVsZXRlIHRoZSBrZXkgZnJvbSBMU1xuICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICd0b0RvJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gICAgbWFrZU5ld1Rhc2tEaXYoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dHlwZX1gKTtcbiAgICBtYWtlTmV3VGFza0Rpdignbm90ZXMnLCAnbm90ZXMtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBpZiBubyB0YXNrcyBpbiBlaXRoZXIgJ3Byb2plY3QtdGFzaycgb3IgJ3Byb2plY3QnIExTIGFycmF5cyBkZWxldGUgdGhlIGtleSBmcm9tIExTXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdHlwZSA9PT0gJ3Byb2plY3QtdGFzaycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge1xuICBzZXRUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG4vLyBydW4gd2hlbiBsaW5rIGlzIGNsaWNrZWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROb3Rlc1BhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBub3RlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3Rpbmcgbm90ZXMgc28gbWFrZSBhIHRhc2sgY29udGFpbmVyIHNvIHVzZXIgY2FuIG1ha2Ugc29tZSBuZXcgbm90ZXNcbiAgaWYgKCFub3Rlcykge1xuICAgIG1ha2VOZXdUYXNrRGl2KCdub3RlcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFeGlzdGluZ05vdGVzVG9QYWdlKCdub3RlcycpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV4aXN0aW5nTm90ZXNUb1BhZ2UodHlwZSkge1xuICAvLyBnZXQgYWxsIG9mIHRoZSB1c2VycyBub3RlcyBmcm9tIExTXG4gIGNvbnN0IG5vdGVzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbm90ZXMnKTtcblxuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCBub3RlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXZGb3JQcm9qZWN0cyBmcm9tICcuLi91aS9ub1Rhc2tzTWVzc2FnZSc7XG5pbXBvcnQgeyBkaWFsb2dFdmVudHMsIHByb2plY3RUcmFzaENhbkV2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyIGZyb20gJy4uL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHsgYnVpbGRUb0RvVWkgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcblxuLy9ydW5zIHdoZW4gYSBpbmRpdmlkdWFsIHByb2plY3QgaXMgY2xpY2tlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RQYWdlKGUpIHtcbiAgY3JlYXRlSGVhZGVyKCdwcm9qZWN0Jyk7XG4gIHByb2plY3RUcmFzaENhbkV2ZW50cygpO1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snKTtcblxuICBpZiAoIXByb2plY3RUYXNrcykge1xuICAgIG1ha2VOZXdUYXNrRGl2Rm9yUHJvamVjdHMoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlZmFjdG9yIHRvIHNlcGVyYXRlIGZ1bmN0aW9uXG4gICAgY29uc3QgaW5kaXZpZGl1YWxQcm9qZWN0VGFzayA9IHByb2plY3RUYXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0UGFnZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gdGFzayBpbiBwcm9qZWN0IChqdXN0IG1hZGUpIHNob3cgbm8gdGFzayBtZXNzYWdlXG4gICAgaWYgKGluZGl2aWRpdWFsUHJvamVjdFRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICBtYWtlTmV3VGFza0RpdkZvclByb2plY3RzKCd0YXNrcycsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgZGlhbG9nRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1aWxkIHRhc2sgb24gcHJvamVjdCBwYWdlIGNsaWNrZWRcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBpbmRpdmlkaXVhbFByb2plY3RUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYnVpbGRUb0RvVWkodGFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gaXMgcmFuIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4aXN0aW5nUHJvamVjdHNUb1NpZGViYXIoKSB7XG4gIC8vIHdlIGFsc28gd2FudCB0byBjaGVjayBpZiB0aGVyZSBpcyBhbnkgcHJvamVjdHMgb24gcGFnZSBsb2FkIGluIExTIHRvIHNob3dcbiAgLy8gdW5kZXIgcHJvamVjdHMgdGFiIG9uIHBhZ2UgbG9hZCBhc3dlbGwuXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdCcpO1xuXG4gIGlmICghcHJvamVjdHMpIHJldHVybjtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0LnRhc2tUaXRsZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi4vdWkvaGVhZGVyJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgYWRkVGFza1RvUGFnZSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBmdW5jdGlvbiBpcyByYW4gb24gcGFnZSBsb2FkIGFuZCBvbiBsaW5rIGNsaWNrXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFza0xpc3QoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3RpbmcgdG8tZG8ncyBzbyBtYWtlIGEgdGFzayBjb250YWluZXIgc28gdXNlciBjYW4gbWFrZSBzb21lIG5ldyB0YXNrc1xuICBpZiAoIXRvRG8pIHtcbiAgICBtYWtlTmV3VGFza0RpdigndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkRXhpc3RpbmdUb0RvVG9QYWdlKCd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdUb0RvVG9QYWdlKHR5cGUpIHtcbiAgLy8gZ2V0IGFsbCBvZiB0aGUgdXNlcnMgdGFza3MgZnJvbSBMU1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIHRvRG8uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzayk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIC8vIHNob3cgbm8gaXRlbXMgc2F2ZWQgaW4gZGlzcGxheSBpZiBubyBkYXRhXG4gICAgbWFrZU5ld1Rhc2tEaXYoJ2l0ZW1zIHNhdmVkJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV4aXN0aW5nRGF0YVRvVG9kYXlQYWdlKCdub3RlcycsICd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdEYXRhVG9Ub2RheVBhZ2UodHlwZU9uZSwgdHlwZVR3bykge1xuICAvL2dldCBhbGwgb2YgdGhlIHVzZXJzIG5vdGVzL3Rhc2tzIGZyb20gTFNcbiAgY29uc3Qgbm90ZXMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycpO1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvRG8nKTtcblxuICBpZiAobm90ZXMpIHtcbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBhZGRUYXNrVG9QYWdlKHR5cGVPbmUsIG5vdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRhc2tzKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYWRkVGFza1RvUGFnZSh0eXBlVHdvLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2V0VG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZFRhc2tUb1BhZ2UgZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG8odHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpIHtcbiAgLy8gd2UgZG9udCB3YW50IHByb2plY3RzIGJlaW5nIGFkZGVkIGxpa2UgdGFza3Mvbm90ZXMgd2lsbCBiZVxuICAvLyByZWZhY3RvciBsYXRlclxuICBpZiAodHlwZSA9PT0gJ25vdGVzJyB8fCB0eXBlID09PSAndG9EbycpIHtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrKTtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UodHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpO1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIH1cbn1cbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb25zIHRvIG1ha2Ugb3VyIHRvZG8gb2JqZWN0IHdpdGgga2V5L3ZhbHVlIHBhaXJzIGFzc2lnbmVkXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBjYXB0dXJlTW9kYWxEZXRhaWxzVGV4dERhdGEoJy5tb2RhbC10YXNrLWRldGFpbHMtYXJlYScpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGNhcHR1cmVNb2RhbERhdGVEYXRhKCk7XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBjYXB0dXJlTW9kYWxQcmlvcml0eUxldmVsKCk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlLCBwcmlvcml0eUxldmVsIH07XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YSgnLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJyk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEnKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBjYXB0dXJlTW9kYWxEZXRhaWxzVGV4dERhdGEoJy5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEnKTtcbiAgY29uc3QgdGFza0RhdGUgPSBjYXB0dXJlTW9kYWxEYXRlRGF0YSgpO1xuICByZXR1cm4geyB0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSB9O1xufVxuXG4vLyBjYXB0dXJlIGFsbCB1c2VyIGlucHV0cyBvbiBtb2RhbFxuLy8gb25seSBuZWVkIG9uZSBmdW5jaXRvbiBoZXJlIGJlbG93LCB3aWxsIHJlZmFjdG9yIGxhdGVyXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxUaXRsZVRleHREYXRhKGVsZW1lbnRDbGFzc05hbWUpIHtcbiAgY29uc3QgdGl0bGVUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudENsYXNzTmFtZX1gKTtcbiAgY29uc3QgdGV4dERhdGEgPSB0aXRsZVRleHRBcmVhLnZhbHVlO1xuICByZXR1cm4gdGV4dERhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbERldGFpbHNUZXh0RGF0YShlbGVtZW50Q2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRldGFpbHNUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudENsYXNzTmFtZX1gKTtcbiAgY29uc3QgdGV4dERhdGEgPSBkZXRhaWxzVGV4dEFyZWEudmFsdWU7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGNvbnN0IGRhdGVEYXRhID0gZGF0ZUlucHV0LnZhbHVlO1xuICByZXR1cm4gZGF0ZURhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByaW9yaXR5TGV2ZWwoKSB7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcbiAgY29uc3QgYnV0dG9uQXJyYXkgPSBBcnJheS5mcm9tKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgLy8gYnRuIHdpdGggYSBjb2xvciBvZiB3aGl0ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQgYnV0dG9uXG4gIGNvbnN0IHByaW9yaXR5Q2xpY2tlZCA9IGJ1dHRvbkFycmF5LmZpbmQoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuc3R5bGUuY29sb3IgPT09ICd3aGl0ZSdcbiAgKTtcblxuICByZXR1cm4gcHJpb3JpdHlDbGlja2VkLnRleHRDb250ZW50O1xufVxuXG5leHBvcnQge1xuICBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEsXG4gIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSxcbiAgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhLFxufTtcbiIsImltcG9ydCB7IHJlbW92ZVRhc2tGcm9tRG9tIH0gZnJvbSAnLi4vdWkvZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFzayh0eXBlLCBlbGVtZW50KSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFzayA9IHBhcmVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHR5cGUgPT09ICd0b0RvJykge1xuICAgICAgLy8gZ2V0cyB1cyB0aGUgdGFzayB0aXRsZSBmcm9tIHRhc2sgY2xpY2tlZFxuICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5jbGFzc0xpc3RbMF07XG4gICAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCB0YXNrVGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXRzIHVzIHRoZSBub3RlIHRpdGxlIGZyb20gdGFzayBjbGlja2VkXG4gICAgICBjb25zdCBub3RlVGl0bGUgPSB0YXNrLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCBub3RlVGl0bGUpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBhZGRBY3RpdmVBdHRyaWJ1dGUoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobGlua0FycmF5KSB7XG4gIGxpbmtBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBY3RpdmVBdHRyaWJ1dGUsIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlIH07XG4iLCIvLyByZWZhY3RvciBiZWxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdFNpZGViYXJMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItcHJvamVjdC1saW5rJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3Byb2plY3RUaXRsZX0gcHJvamVjdC1jaGlsZGApO1xuICAvLyBhZGQgbGluayBpdGVtIGNsYXNzIG5hbWUgc28gd2UgY2FuIHJldXNlIG90aGVyIG1vZHVsZXMgZm9yIGFjdGl2ZSBsaW5rIGNsaWNrZWRcbiAgbmV3UHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIG5ld1Byb2plY3RMaW5rLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfWA7XG4gIC8vIGluc2VydCBuZXcgdXNlciBwcm9qZWN0IGJ1dHRvbiBBRlRFUiBzaWRlYmFyIHByb2plY3QgbGlua1xuICBwcm9qZWN0U2lkZWJhckxpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG5ld1Byb2plY3RMaW5rKTtcblxuICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHByb2plY3RzSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNsaXBib2FyZC1saXN0Jyk7XG4gIG5ld1Byb2plY3RMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHByb2plY3RzSWNvbik7XG5cbiAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyA+IDE1IGNoYXJhY3RlcnMgYW5kIGEgdGl0bGUgdGhhdCB3aWxsIHNob3cgb24gaG92ZXJcbiAgY29uc3QgcHJvamVjdFRpdGxlQXJyYXkgPSBwcm9qZWN0VGl0bGUuc3BsaXQoJycpO1xuICBpZiAocHJvamVjdFRpdGxlQXJyYXkubGVuZ3RoID4gMTUpIHtcbiAgICBuZXdQcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7cHJvamVjdFRpdGxlfWApO1xuICB9XG59XG5cbi8vIHJ1bnMgb25seSB3aGVuIHVzZXIgaXMgYWRkaW5nIGEgbmV3IHByb2plY3QgdG8gc2lkZWJhclxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2hpbGQnKTtcbiAgbGV0IHByb2plY3RFeGlzdHMgPSBmYWxzZTtcblxuICBzaWRlYmFyUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LnRleHRDb250ZW50ID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgIGFsZXJ0KCdZb3UgYWxyZWFkeSBoYXZlIGEgcHJvamVjdCB3aXRoIHRoYXQgdGl0bGUhJyk7XG4gICAgICBwcm9qZWN0RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0RXhpc3RzO1xufVxuXG5leHBvcnQgeyBjaGVja0lmUHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzIH07XG4iLCJpbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuLi90YXNrcy9kZWxldGVUYXNrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgY29udGFpbmVyTmFtZSkge1xuICAvLyByZWZhY3RvciBhbGwgdGhpcyBsYXRlclxuICBpZiAodHlwZSA9PT0gJ3RvRG8nKSB7XG4gICAgLy8gdHlwZSB3b3VsZCBlcXVhbCAndG9EbydcbiAgICBhZGRUb0RvVG9QYWdlKHRhc2spO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgYWRkVG9Eb1RvUGFnZSh0YXNrLCBjb250YWluZXJOYW1lKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgYWRkTm90ZXNUb1BhZ2UodGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUb0RvVWkodGFzaykge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnRhc2tUaXRsZX1gKTtcbiAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYnKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcblxuICBjb25zdCB0b0RvRGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGl2TGVmdC5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYtbGVmdCcpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvRG9EaXZMZWZ0KTtcblxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1jaGVja2JveCcpO1xuICB0b0RvRGl2TGVmdC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG5cbiAgY29uc3QgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9Eby5jbGFzc0xpc3QuYWRkKCd0by1kbycpO1xuICB0b0RvLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrVGl0bGV9YDtcbiAgdG9Eb0RpdkxlZnQuYXBwZW5kQ2hpbGQodG9Ebyk7XG5cbiAgY29uc3QgdG9Eb0RpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXZSaWdodC5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYtcmlnaHQnKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGl2UmlnaHQpO1xuXG4gIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0by1kby1kYXRlJyk7XG4gIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGF0ZX1gO1xuICB0b0RvRGl2UmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVsZXRlLWJ0bicpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2gnKTtcbiAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0RlbGV0ZSBUYXNrJyk7XG4gIHRvRG9EaXZSaWdodC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gZWFjaCB0cmFzaCBjYW4gaWNvbiBtYWRlXG4gIGRlbGV0ZVRhc2soJ3RvRG8nLCBkZWxldGVUYXNrQnRuKTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHlMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9Eb1ByaW9yaXR5TGV2ZWwuY2xhc3NMaXN0LmFkZCgndG8tZG8tcHJpb3JpdHktbGV2ZWwnKTtcbiAgdG9Eb1ByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgJHt0YXNrLnByaW9yaXR5TGV2ZWx9YDtcbiAgdG9Eb0RpdlJpZ2h0LmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eUxldmVsKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb1RvUGFnZSh0YXNrLCBjb250YWluZXJOYW1lKSB7XG4gIGlmIChjb250YWluZXJOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgYWRkVGFza0NvbnRhaW5lcigncHJvamVjdC1jb250YWluZXInKTtcbiAgICBidWlsZFRvRG9VaSh0YXNrKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCd0by1kby1jb250YWluZXInKTtcbiAgICBidWlsZFRvRG9VaSh0YXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAvLyBpZiBjb250YWluZXIgYWxyZWFkeSBleGlzdHMganVzdCByZXR1cm4gc28gd2UgZG9udCBnZXQgZHVwbGljYXRlc1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApKSByZXR1cm47XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkTm90ZXNUb1BhZ2UodGFzaykge1xuICBhZGRUYXNrQ29udGFpbmVyKCdub3Rlcy1jb250YWluZXInKTtcbiAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGUtZGl2Jyk7XG4gIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVEaXYpO1xuXG4gIGNvbnN0IG5vdGVIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdub3RlLWhlYWRlcicpO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVIZWFkZXJEaXYpO1xuXG4gIGNvbnN0IG5vdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tUaXRsZX1gO1xuICBub3RlSGVhZGVyRGl2LmFwcGVuZENoaWxkKG5vdGVIZWFkZXIpO1xuXG4gIGNvbnN0IGRlbGV0ZU5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbGV0ZU5vdGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS14Jyk7XG4gIGRlbGV0ZU5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbm90ZS1jbG9zZS1idG4nKTtcbiAgbm90ZUhlYWRlckRpdi5hcHBlbmRDaGlsZChkZWxldGVOb3RlQnRuKTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gZWFjaCB0cmFzaCBjYW4gaWNvbiBtYWRlXG4gIGRlbGV0ZVRhc2soJ25vdGVzJywgZGVsZXRlTm90ZUJ0bik7XG5cbiAgY29uc3Qgbm90ZVRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3RlVGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZS10ZXh0LWNvbnRlbnQnKTtcbiAgbm90ZVRleHRDb250ZW50LnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGV0YWlsc31gO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVUZXh0Q29udGVudCk7XG5cbiAgY29uc3Qgbm90ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVEYXRlLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGF0ZScpO1xuICBub3RlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza0RhdGV9YDtcbiAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlRGF0ZSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tDb250YWluZXIsIGJ1aWxkVG9Eb1VpIH07XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyIGZyb20gJy4uL2RlbGV0ZVByb2plY3RGcm9tU2lkZWJhcic7XG5pbXBvcnQgeyBhZGRUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi9hZGRUYXNrVG9QYWdlJztcblxuZnVuY3Rpb24gd2lwZURvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vIGlmIG1haW5Db250ZW50IGhhcyBhIGNoaWxkLCByZXBsYWNlIHcvZW1wdHkgc3RyaW5nIHNvIHdlIGNhbiBzaG93IG5leHQgbmF2IGl0ZW1zIGNsaWNrZWQgY29udGVudFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXBlTW9kYWxDb250ZW50KGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gaWYgbW9kYWwgbWFpbiBoYXMgYSBjaGlsZCwgcmVwbGFjZSB3L2VtcHR5IHN0cmluZyBzbyB3ZSBjYW4gc2hvdyBuZXh0IG5hdiBpdGVtcyBjbGlja2VkIGNvbnRlbnRcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuLy8gcmVmYWN0b3IgYmVsb3dcbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRG9tKHRhc2ssIHRhc2tUaXRsZSkge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICBpZiAodG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdC10YXNrJywgdGFza1RpdGxlKTtcbiAgfSBlbHNlIGlmICh0b0RvQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ3RvLWRvLWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgndG9EbycsIHRhc2tUaXRsZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ25vdGVzJywgdGFza1RpdGxlKTtcbiAgfVxuXG4gIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodGFzayk7XG5cbiAgLy8gaWYgcHJvamVjdCBwYWdlIGhhcyBubyBjaGlsZHJlbiB0aGVuIHdlJ2xsIGdyYWIgdGhlIHBhZ2UgaGVhZGVyIGFuZCBkZWxldGVcbiAgLy8gaXQgZnJvbSB0aGUgc2lkZWJhclxuICBpZiAoXG4gICAgdG9Eb0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiZcbiAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID09PSAncHJvamVjdC1jb250YWluZXInXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50JykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKGN1cnJlbnRQYWdlKTtcbiAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpIHtcbiAgY29uc3Qgbm9UYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrLXRleHQnKTtcbiAgY29uc3QgbmV3Q29udGVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5ldycpO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gIGlmIChjb250YWluZXIuY29udGFpbnMobm9UYXNrVGV4dCkpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9UYXNrVGV4dCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0NvbnRlbnRCdG4pO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHdpcGVEb21Db250ZW50LFxuICB3aXBlTW9kYWxDb250ZW50LFxuICByZW1vdmVUYXNrRnJvbURvbSxcbiAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0eXBlKSB7XG4gIC8vIHVzaW5nIGlubmVySFRNTCBzbyB3ZSBjYW4gZ3JhYiB0aGUgaWNvbiBhcyB3ZWxsIGFzIHRleHRcbiAgY29uc3Qgc2lkZWJhckxpbmtDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmlubmVySFRNTDtcbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuICAvLyBwYWdlSGVhZGVyLmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudCcpO1xuICBoZWFkZXJDb250ZW50LmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBjb25zdCBwcm9qZWN0VHJhc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VHJhc2hEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10cmFzaC1kaXYnKTtcbiAgICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUcmFzaERpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcHJvamVjdFRyYXNoQ2FuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2gtY2FuJyk7XG4gICAgcHJvamVjdFRyYXNoRGl2LmFwcGVuZENoaWxkKHByb2plY3RUcmFzaENhbik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUcmFzaFRleHQudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIHByb2plY3RUcmFzaERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VHJhc2hUZXh0KTtcbiAgfVxuXG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xufVxuIiwiaW1wb3J0IGxvYWRUYXNrTGlzdCBmcm9tICcuLi9wYWdlcy90YXNrTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCByaWdodE1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0TWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1yaWdodCcpO1xuICBib2R5LmFwcGVuZENoaWxkKHJpZ2h0TWFpbkNvbnRlbnQpO1xuXG4gIC8vIG9uIHBhZ2UgbG9hZCBvcGVuIHRvICd0YXNrLWxpc3QnXG4gIGxvYWRUYXNrTGlzdCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGREdWVEYXRlRGl2KGVsZW1lbnQpIHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRhdGUtZGl2Jyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbiAgYnVpbGREdWVEYXRlTGFiZWwoZGF0ZURpdik7XG4gIGJ1aWxkRHVlRGF0ZUlucHV0KGRhdGVEaXYpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVMYWJlbChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWxhYmVsJyk7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVJbnB1dChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uKGVsZW1lbnQsIGNsYXNzTmFtZSwgYnRuVGV4dCkge1xuICBjb25zdCBhZGROZXdCdG5Nb2RhbFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkTmV3QnRuTW9kYWxQYWdlLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkLWJ0bicpO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UudGV4dENvbnRlbnQgPSBgJHtidG5UZXh0fWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkTmV3QnRuTW9kYWxQYWdlKTtcbn1cbiIsImltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4uL2FjdGl2ZUF0dHJpYnV0ZSc7XG5pbXBvcnQgbG9hZE1vZGFsVGFza1BhZ2UgZnJvbSAnLi9tb2RhbC10YXNrLXBhZ2UnO1xuaW1wb3J0IGxvYWRNb2RhbFByb2plY3RQYWdlIGZyb20gJy4vbW9kYWwtcHJvamVjdC1wYWdlJztcbmltcG9ydCBsb2FkTW9kYWxOb3Rlc1BhZ2UgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UnO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxTaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtbGluaycpO1xuICBjb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlLWJ0bicpO1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKTtcblxuICBtb2RhbFNpZGViYXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShtb2RhbFNpZGViYXJMaW5rcyk7XG4gICAgICBhZGRBY3RpdmVBdHRyaWJ1dGUoZSk7XG4gICAgICBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBuZXdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgICByZW1vdmVNb2RhbCgpO1xuICB9KTtcblxuICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGxpbmspIHtcbiAgc3dpdGNoIChsaW5rLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ1Rhc2snOlxuICAgICAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Byb2plY3QnOlxuICAgICAgbG9hZE1vZGFsUHJvamVjdFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vdGUnOlxuICAgICAgbG9hZE1vZGFsTm90ZXNQYWdlKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza05vdGVzRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBub1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJyk7XG5cbiAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKTtcbiAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICBhZGRUb0RvKCdub3RlcycsIHRhc2spO1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgaWYgKG5vVGFza0NvbnRhaW5lcikge1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChub1Rhc2tDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrTm90ZXNFdmVudHMgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1vZGFsTm90ZXNQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtbm90ZXMtdGV4dC1hcmVhJyxcbiAgICAnVGl0bGU6IEdyb2NlcnkgTGlzdC4nLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEnLFxuICAgICdEZXRhaWxzOiBmcnVpdCwgd2F0ZXJzLCBtZWF0JyxcbiAgICBtb2RhbE1haW5Db250ZW50XG4gICk7XG4gIGJ1aWxkTW9kYWxEdWVEYXRlRGl2KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihtb2RhbE1haW5Db250ZW50LCAnbW9kYWwtYWRkLW5vdGUtYnRuJywgJ0FkZCBOb3RlJyk7XG5cbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCBub3RlIHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza05vdGVzRXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEgfSBmcm9tICcuLi8uLi90YXNrcy9jYXB0dXJlVGFza0RhdGEnO1xuaW1wb3J0IGFkZFRvRG8gZnJvbSAnLi4vLi4vdGFza3MvYWRkVGFza3MnO1xuaW1wb3J0IGFkZE5ld1Byb2plY3RUb1NpZGViYXIsIHtcbiAgY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyxcbn0gZnJvbSAnLi4vYWRkTmV3UHJvamVjdFRvU2lkZWJhcic7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5pbXBvcnQgYWRkUGFnZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4uLy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBjaGVja0Zvck5vVGFza01lc3NhZ2UgfSBmcm9tICcuLi9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbFRhc2tQcm9qZWN0RXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG5cbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpO1xuICAgIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpO1xuXG4gICAgLy8gZGVzdHJ1Y3R1cmUgYW5kIHJlbmFtZSB0byBwcm9qZWN0IHRpdGxlIHNvIHdlIGNhbiBhZGQgdG8gc2lkZWJhciB0aHJvdWdoIGZ1bmN0aW9uIGNhbGxcbiAgICBjb25zdCB7IHRhc2tUaXRsZTogcHJvamVjdFRpdGxlIH0gPSB0YXNrO1xuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBhIGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWUgcmV0dXJuLCBlbHNlIGFkZCBwcm9qZWN0IHRvIHNpZGViYXJcbiAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkVG9EbygncHJvamVjdCcsIHRhc2spO1xuICAgICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpO1xuICAgICAgYWRkUGFnZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrUHJvamVjdEV2ZW50cyBmcm9tICcuL21vZGFsLXByb2plY3QtcGFnZS1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTW9kYWxQcm9qZWN0UGFnZSgpIHtcbiAgLy8gaWYgaXQgZXhpc3RzIHRoZW4gZG9udCBidWlsZCB0aGUgcGFnZSBiZWNhdXNlIGl0cyBvcGVuIGFscmVhZHksIGp1c3QgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcHJvamVjdC10ZXh0LWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtcHJvamVjdC10ZXh0LWFyZWEnLFxuICAgICdUaXRsZTogQnVpbGQgbmV3IGZlbmNlLicsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihcbiAgICBtb2RhbE1haW5Db250ZW50LFxuICAgICdtb2RhbC1hZGQtcHJvamVjdC1idG4nLFxuICAgICdBZGQgUHJvamVjdCdcbiAgKTtcblxuICAvLyBjYWxsIHNwZWNpZmljIG1vZGFsIHByb2plY3QgcGFnZSBldmVudHNcbiAgbW9kYWxUYXNrUHJvamVjdEV2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza1BhZ2VFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1idG4nKTtcbiAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJ0bicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyJyk7XG4gIGNvbnN0IHBhZ2VIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50Jyk7XG5cbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VIZWFkZXIgPT09IG51bGwpIHtcbiAgICAgIHBhZ2VIZWFkZXIgPSAnICc7XG4gICAgICBwYWdlSGVhZGVyVGV4dCA9ICcgJztcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0YXNrIHNob3VsZCBiZSBhdHRhY2hlZCB0byBhIHByb2plY3Qgb3Igbm90XG4gICAgaWYgKHBhZ2VIZWFkZXIubmV4dFNpYmxpbmcuY2xhc3NOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgICAvLyBjYXB0dXJlIHRvZG8gb2JqZWN0IGluIHRhc2sgdmFyaWFibGVcbiAgICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKTtcbiAgICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICAgIGFkZFRvRG8oJ3Byb2plY3QtdGFzaycsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0LnRleHRDb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSgpO1xuICAgICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG4gICAgICBhZGRUb0RvKCd0b0RvJywgdGFzayk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGZ1bmMgdG8gY2hlY2sgaWYgYW55IGJ1dHRvbnMgaGF2ZSBhIGNvbG9yIG9mIHdoaXRlXG4gICAgICAvLyBpZiBzbyBjaGFuZ2UgaXQgdG8gbm9ybWFsIHNvIG5leHQgYnRuIGNsaWNrZWQgd2lsbCBiZSB0aGUgc2VsZWN0ZWQgb25lIHRha2VuIGFzIGlucHV0XG4gICAgICBjb25zdCBidG5CZ0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pO1xuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2J0bkJnQ29sb3IuYmFja2dyb3VuZENvbG9yfWA7XG4gICAgICBidXR0b24uc3R5bGUuY29sb3IgPSAnV2hpdGUnO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHdpcGVNb2RhbENvbnRlbnQgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IGJ1aWxkTW9kYWxEdWVEYXRlRGl2IGZyb20gJy4vZHVlLWRhdGUnO1xuaW1wb3J0IGJ1aWxkTW9kYWxUZXh0QXJlYSBmcm9tICcuL3RleHQtYXJlYSc7XG5pbXBvcnQgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24gZnJvbSAnLi9tb2RhbC1hZGQtYnV0dG9uJztcbmltcG9ydCBtb2RhbFRhc2tQYWdlRXZlbnRzIGZyb20gJy4vbW9kYWwtdGFzay1wYWdlLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNb2RhbFRhc2tQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtdGFzay10aXRsZS1hcmVhJyxcbiAgICAnVGl0bGU6IFBheSBCaWxscycsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXRhc2stZGV0YWlscy1hcmVhJyxcbiAgICAnRGV0YWlsczogcGhvbmUgYmlsbCcsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsRHVlRGF0ZURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCB0YXNrIHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza1BhZ2VFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KSB7XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXByaW9yaXR5LWRpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgbW9kYWxNYWluQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuLWRpdicpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eWJ1dHRvbkRpdik7XG5cbiAgYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihwcmlvcml0eURpdiwgJ21vZGFsLWFkZC10YXNrLWJ0bicsICdBZGQgdG8gZG8nKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpIHtcbiAgY29uc3QgcHJpb3JpdHlMb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlMb3dCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWJ0bicpO1xuICBwcmlvcml0eUxvd0J0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlMb3dCdG4udGV4dENvbnRlbnQgPSAnTE9XJztcbiAgcHJpb3JpdHlidXR0b25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3dCdG4pO1xuXG4gIGNvbnN0IHByaW9yaXR5TWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5TWVkQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZC1idG4nKTtcbiAgcHJpb3JpdHlNZWRCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5TWVkQnRuLnRleHRDb250ZW50ID0gJ01FRElVTSc7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWVkQnRuKTtcblxuICBjb25zdCBwcmlvcml0eUhpZ2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtYnRuJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLnRleHRDb250ZW50ID0gJ0hJR0gnO1xuICBwcmlvcml0eWJ1dHRvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2hCdG4pO1xufVxuIiwiaW1wb3J0IG1vZGFsRXZlbnRzIGZyb20gJy4vbW9kYWwtZXZlbnRzJztcbmltcG9ydCBsb2FkTW9kYWxUYXNrUGFnZSBmcm9tICcuL21vZGFsLXRhc2stcGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpKSByZXR1cm47XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG5ld01vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1tb2RhbCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TW9kYWwpO1xuXG4gIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxTaWRlYmFyKCk7XG4gIGNyZWF0ZU1vZGFsQ29udGVudERpdigpO1xuXG4gIG5ld01vZGFsLnNob3dNb2RhbCgpO1xuXG4gIC8vIHdlIHdhbnQgdGFzayBwYWdlIHRvIGJlIHRoZSBmaXJzdCB0byBhdXRvbWF0aWNhbGx5IHNob3cgaW4gbW9kYWxcbiAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcblxuICAvLyBsb2FkIG1vZGFsIGV2ZW50cyBzbyB1c2VyIGNhbiBjaGFuZ2UgdGFicy9ldGNcbiAgbW9kYWxFdmVudHMobmV3TW9kYWwsIGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcuLi4nO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDbG9zZScpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZS1idG4nKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1tYWluLWRpdicpO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxTaWRlYmFyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1saW5rJyk7XG4gIC8vIGFkZCBhY3RpdmUgdG8gc2hvdyB0YXNrIHBhZ2UgZmlyc3QgaW4gbW9kYWxcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Rhc2tzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Byb2plY3RzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua05vdGVzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua05vdGVzKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcblxuICBjb25zdCBuZXdFbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdFbnRyeURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctZW50cnknKTtcbiAgbmV3Q29udGVudERpdi5hcHBlbmRDaGlsZChuZXdFbnRyeURpdik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcbiAgY29uc3QgbmV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LW1vZGFsJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld01vZGFsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9kYWxUZXh0QXJlYShjbGFzc05hbWUsIHBsYWNlaG9sZGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gYCR7cGxhY2Vob2xkZXJ9YDtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG59XG4iLCJpbXBvcnQgeyBkaWFsb2dFdmVudHMgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTmV3VGFza0RpdihjaG9pY2UsIGNvbnRhaW5lckNsYXNzTmFtZSkge1xuICBjb25zdCBtYWluUmlnaHRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcbiAgY29uc3QgY29udGFpbmVyVG9DaGVja0ZvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lckNsYXNzTmFtZX1gKTtcbiAgY2hlY2tJZlRhc2tEaXZFeGlzdHMobWFpblJpZ2h0Qm9keSwgY29udGFpbmVyVG9DaGVja0Zvcik7XG5cbiAgY29uc3Qgbm9UYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vVGFza0Rpdi5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lckNsYXNzTmFtZSk7XG4gIG1haW5SaWdodEJvZHkuYXBwZW5kQ2hpbGQobm9UYXNrRGl2KTtcblxuICBjcmVhdGVOb1Rhc2tDb250YWluZXJUZXh0KG5vVGFza0RpdiwgY2hvaWNlKTtcbiAgY3JlYXRlTm9UYXNrQ29udGFpbmVyQnV0dG9uKG5vVGFza0Rpdik7XG4gIGRpYWxvZ0V2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb1Rhc2tDb250YWluZXJUZXh0KG5vVGFza0RpdiwgY2hvaWNlKSB7XG4gIGNvbnN0IG5vVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vVGFza1RleHQudGV4dENvbnRlbnQgPSBgWW91IGhhdmUgbm8gJHtjaG9pY2V9IHlldCwgbGV0cyBtYWtlIHNvbWUhYDtcbiAgbm9UYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCduby10YXNrLXRleHQnKTtcbiAgbm9UYXNrRGl2LmFwcGVuZENoaWxkKG5vVGFza1RleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb1Rhc2tDb250YWluZXJCdXR0b24obm9UYXNrRGl2KSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKFxuICAgICdjbGFzcycsXG4gICAgJ25ldy1jb250ZW50IG1haW4tbmV3IGZhLXJlZ3VsYXIgZmEtcGx1cyBmYS0yeGwnXG4gICk7XG4gIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdOZXcnKTtcbiAgbm9UYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmVGFza0RpdkV4aXN0cyhtYWluUmlnaHRCb2R5LCBjb250YWluZXJUb0NoZWNrRm9yKSB7XG4gIGlmIChjb250YWluZXJUb0NoZWNrRm9yKSB7XG4gICAgbWFpblJpZ2h0Qm9keS5yZW1vdmVDaGlsZChjb250YWluZXJUb0NoZWNrRm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhciB9IGZyb20gJy4uL3BhZ2VzL3Byb2plY3RzJztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxlZnQnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgY3JlYXRlVG9wU2lkZWJhckNvbnRlbnQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcFNpZGViYXJDb250ZW50KHNpZGViYXIpIHtcbiAgY29uc3QgdG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRvcC1jb250YWluZXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpZGViYXJMaW5rcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua3MpO1xuXG4gIGNvbnN0IHRvZGF5TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0b2RheUxpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQodG9kYXlMaW5rSXRlbSk7XG4gIGNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgdG9kYXlMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2lkZWJhci1saW5rIGZhLXNvbGlkIGZhLXN1bicpO1xuICB0b2RheUxpbmtJdGVtLmFwcGVuZENoaWxkKHRvZGF5TGluayk7XG4gIGNvbnN0IHRvZGF5TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRvZGF5TGlua1RleHQuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgdG9kYXlMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIHRvZGF5TGlua0l0ZW0uYXBwZW5kQ2hpbGQodG9kYXlMaW5rVGV4dCk7XG5cbiAgY29uc3QgdGFza0xpc3RMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRhc2tMaXN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZCh0YXNrTGlzdExpbmtJdGVtKTtcbiAgY29uc3QgdGFza0xpc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0YXNrTGlzdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1jaGVjaycpO1xuICB0YXNrTGlzdExpbmtJdGVtLmFwcGVuZENoaWxkKHRhc2tMaXN0TGluayk7XG5cbiAgY29uc3QgdGFza0xpc3RMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdGFza0xpc3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcbiAgLy8gYWRkIGFjdGl2ZSB0byB0YXNrIGxpc3QgYmVjYXVzZSB3ZSB3YW50IHRoaXMgcGFnZSB0byBzaG93IGF1dG9tYXRpY2FsbHlcbiAgdGFza0xpc3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgdGFza0xpc3RMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdUYXNrIExpc3QnO1xuICB0YXNrTGlzdExpbmtJdGVtLmFwcGVuZENoaWxkKHRhc2tMaXN0TGlua1RleHQpO1xuXG4gIGNyZWF0ZUJvdHRvbVNpZGViYXJDb250ZW50KHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b21TaWRlYmFyQ29udGVudChzaWRlYmFyKSB7XG4gIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1ib3R0b20tY29udGFpbmVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKTtcblxuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaWRlYmFyTGlua3MuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpbmtzKTtcblxuICBjb25zdCBwcm9qZWN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcm9qZWN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWxpbmsnKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHByb2plY3RMaW5rSXRlbSk7XG4gIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWZpbGUnKTtcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcbiAgY29uc3QgcHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgcHJvamVjdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rVGV4dCk7XG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdExpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBhZGROZXdQcm9qZWN0TGlua0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1wbHVzJyk7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLnRleHRDb250ZW50O1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdExpbmtJdGVtKTtcbiAgY29uc3QgYWRkTmV3cHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhZGROZXdwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1wcm9qZWN0Jyk7XG4gIGFkZE5ld3Byb2plY3RMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgcHJvamVjdCc7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5hcHBlbmRDaGlsZChhZGROZXdwcm9qZWN0TGlua1RleHQpO1xuICAvLyBpZiBhbnlcbiAgYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhcigpO1xuXG4gIGNvbnN0IG5vdGVzTGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBub3Rlc0xpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQobm90ZXNMaW5rSXRlbSk7XG4gIGNvbnN0IG5vdGVzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbm90ZXNMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtYm9vaycpO1xuICBub3Rlc0xpbmtJdGVtLmFwcGVuZENoaWxkKG5vdGVzTGluayk7XG4gIGNvbnN0IG5vdGVzTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5vdGVzTGlua1RleHQuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcbiAgbm90ZXNMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdOb3Rlcyc7XG4gIG5vdGVzTGlua0l0ZW0uYXBwZW5kQ2hpbGQobm90ZXNMaW5rVGV4dCk7XG5cbiAgY3JlYXRlU2lkZWJhckZvb3RlcihzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckZvb3RlcihzaWRlYmFyKSB7XG4gIGNvbnN0IHNpZGViYXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZvb3RlcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJGb290ZXIpO1xuXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LWJ1dHRvbi1kaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICBjb25zdCBuZXdDb250ZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBuZXdDb250ZW50QnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnTmV3Jyk7XG4gIG5ld0NvbnRlbnRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXctY29udGVudCBmYS1zb2xpZCBmYS1wbHVzJyk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50QnRuKTtcblxuICBjb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZXR0aW5nc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1kaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XG4gIGNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBzZXR0aW5nc0J0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ1NldHRpbmdzJyk7XG4gIHNldHRpbmdzQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2lkZWJhci1zZXR0aW5ncyBmYS1zb2xpZCBmYS1nZWFyJyk7XG4gIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNpZGVCYXIoKSB7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkU2lkZUJhciBmcm9tICcuL3VpL3NpZGViYXInO1xuaW1wb3J0IGxvYWRNYWluQ29udGVudCBmcm9tICcuL3VpL21haW5Db250ZW50JztcbmltcG9ydCBwYWdlRXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sb2FkU2lkZUJhcigpO1xubG9hZE1haW5Db250ZW50KCk7XG5wYWdlRXZlbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=