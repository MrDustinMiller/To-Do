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
/* harmony export */   checkBoxTaskEvents: () => (/* binding */ checkBoxTaskEvents),
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

function checkBoxTaskEvents() {
  const toDoCheckBox = document.querySelectorAll('.to-do-checkbox');
  toDoCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      if (e.target.checked) {
        const sibling = e.target.nextSibling;
        sibling.style.textDecoration = 'line-through';

        const children = e.target.parentNode.nextSibling.childNodes;
        children.forEach((child) => {
          child.style.textDecoration = 'line-through';
        });
      } else {
        const sibling = e.target.nextSibling;
        sibling.style.textDecoration = 'none';

        const children = e.target.parentNode.nextSibling.childNodes;
        children.forEach((child) => {
          child.style.textDecoration = 'none';
        });
      }
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
  const taskTitle = captureModalTitleTextData('.modal-notes-title-area');
  const taskDetails = captureModalDetailsTextData('.modal-notes-details-area');
  const taskDate = captureModalDateData();
  return { taskTitle, taskDetails, taskDate };
}

// capture all user inputs on modal
// only need one funciton here below, will refactor later
function captureModalTitleTextData(elementClassName) {
  const titleTextArea = document.querySelector(`${elementClassName}`);
  const textData = titleTextArea.value.trim();
  return textData;
}

function captureModalDetailsTextData(elementClassName) {
  const detailsTextArea = document.querySelector(`${elementClassName}`);
  const textData = detailsTextArea.value.trim();
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

// function checkIfTaskTitleNeedsTitleAttribute(title) {
//   const titleArray = title.split('');
//   if (titleArray.element > 15) {
//   }
// }




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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "./src/events.js");



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
  // add event handlers to each checkbox
  (0,_events__WEBPACK_IMPORTED_MODULE_1__.checkBoxTaskEvents)();

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
    'modal-notes-title-area',
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

  // limit character length on title text areas
  if (className.includes('title')) {
    textArea.maxLength = 30;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RUFBNEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7VUNySEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNRO0FBQ2I7QUFDYjs7QUFFckIsdURBQVc7QUFDWCwyREFBZTtBQUNmLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvYWRkVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvY2FwdHVyZVRhc2tEYXRhLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tzL2RlbGV0ZVRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FjdGl2ZUF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9hZGROZXdQcm9qZWN0VG9TaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FkZFRhc2tUb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9kdWUtZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1hZGQtYnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1ub3RlLXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLW5vdGUtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1wcm9qZWN0LXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXByb2plY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC10YXNrLXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXRhc2stcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9yZW1vdmVNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC90ZXh0LWFyZWEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbm9UYXNrc01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSlcbn1cblxuLyogZGFyayBtb2RlIHVzZXItYWdlbnQtc3R5bGVzICovXG5cbmh0bWwge1xuICBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuOnJvb3Qge1xuIC0tZm9udC1jb2xvcjogcmdiYSgxMCwgMTAsIDcsIDAuNik7XG4gLS10ZXh0LWhvdmVyLWNvbG9yOiByZ2JhKDI0LCAyNCwgMTcsIDAuMDg4KTtcbiAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmY7XG4gLS1wcmlvcml0eS1sb3ctY29sb3I6IGdyZWVuO1xuIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcmVkO1xuIC0tcHJpb3JpdHktbWVkLWNvbG9yOiByZ2IoMjM2LCAxNzYsIDExKTs7XG4gLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yOiAjNWNiMmE3O1xuIC0tZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNpZGViYXItbGVmdCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDoxM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogOHB4OyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItbGlua3Mge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLyogQUREIEFOSU1BVElPTlMgRk9SIExJTktTIExBVEVSICovXG4ubGluay1pdGVtOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XG59XG5cbi5saW5rLWl0ZW06bm90KC5wcm9qZWN0LWNoaWxkKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItcHJvamVjdC1saW5rIHtcbiAgZm9udC1zaXplOiAxLjFyZW07IFxufVxuXG4uZmEtZmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW1cbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59IFxuXG4uYWRkLW5ldy1wcm9qZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4ubGluay1pdGVtID4gYSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG5bY2xhc3N8PSdsaW5rLWl0ZW0gYWN0aXZlJ10ge1xuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XG59XG5cbiBidXR0b25bY2xhc3N+PSdhY3RpdmUnXSB7XG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn0gXG5cbi5zaWRlYmFyLXRvcC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07ICBcbn1cblxuLnNpZGViYXItYm90dG9tLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuYSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2lkZWJhci1mb290ZXIge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTN2dztcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDg1LCA4MywgODMsIDAuNjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2lkZWJhci1uZXc6aG92ZXIsIC5zaWRlYmFyLXNldHRpbmdzOmhvdmVyLCAubmV3LWNvbnRlbnQ6aG92ZXIsIC5tb2RhbC1saW5rOmhvdmVyLCAuZmEteDpob3ZlciwgXG4ubW9kYWwtZGF0ZS1pbnB1dDpob3ZlciwgLm1vZGFsLWJ0bjpob3ZlciwgLmZhLXRyYXNoLCAuZmEtdHJhc2gtY2FuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3LWJ1dHRvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1yaWdodCB7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIG92ZXJmbG93OmF1dG87XG59XG5cbiAudG8tZG8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59IFxuXG4ubm90ZXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi5tYWluLW5ldzo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubW9kYWwtbWFpbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5kaWFsb2cge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcbn1cblxuLm1vZGFsLW5ldy1jb250ZW50LWRpdiB7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9kYWwtdGFzay10aXRsZS1hcmVhLCAubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEsIC5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEsIC5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEsIC5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYXtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG59XG4ubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhIHtcbiAgbWluLWhlaWdodDogMTRkdmg7XG59XG4ubW9kYWwtbGluayB7XG4gIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbltjbGFzc3w9J21vZGFsLWxpbmsgYWN0aXZlJ10ge1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddOjpiZWZvcmUge1xuICBjb250ZW50OiAn8J+gmic7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIG1hcmdpbi1yaWdodDogLjI1ZW07XG5cbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubW9kYWwtbmV3LWVudHJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1vZGFsLXNpZGViYXIge1xuICB3aWR0aDogMTBkdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmE7XG4gIG1pbi1oZWlnaHQ6IDM1ZHZoO1xufVxuXG4ubW9kYWwtZGF0ZS1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcilcbn1cblxuLm1vZGFsLWRhdGUtZGl2IHsgIFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4ubW9kYWwtcHJpb3JpdHktZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByaW9yaXR5LWJ0bi1kaXYge1xuICBnYXA6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICB3aWR0aDogNjAlO1xufVxuXG4ubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MiU7XG59XG5cbi5tb2RhbC1hZGQtdGFzay1idG4sIC5tb2RhbC1hZGQtbm90ZS1idG4sIC5tb2RhbC1hZGQtcHJvamVjdC1idG4ge1xuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcbn1cblxuLm1vZGFsLWFkZC1ub3RlLWJ0bjpob3ZlciwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLm1vZGFsLWFkZC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIGNvbG9yOndoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG59XG5cbi5tb2RhbC1idG4sIC5tb2RhbC1hZGQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbSAwLjEyNWVtIDAuMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0biB7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1sb3ctYnRuOmhvdmVyICB7XG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbiBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbn1cblxuLnByaW9yaXR5LW1lZC1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpXG59XG5cbi5wcmlvcml0eS1tZWQtYnRuOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiB9XG5cbi5wcmlvcml0eS1oaWdoLWJ0biB7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbn1cblxuLnByaW9yaXR5LWhpZ2gtYnRuOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gfVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtaW4td2lkdGg6IDI5ZHZ3O1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4ubW9kYWwtdGFzay10aXRsZS1hcmVhe1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDZkdmg7XG59XG5cbi5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDEyZHZoO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubW9kYWwtcHJvamVjdC10ZXh0LWFyZWEge1xuICBtaW4taGVpZ2h0OiAxOGR2aDtcbn1cblxuLnRvLWRvLWRpdiB7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNyZW07XG4gIG1pbi13aWR0aDogODBkdnc7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udG8tZG8tZGl2LWxlZnQsIC50by1kby1kaXYtcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi5uby10YXNrLXRleHQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3JlbTtcbn1cblxuLm5vdGUtZGl2IHtcbiAgbWFyZ2luOiAxcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMjBkdmg7XG4gIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5ub3RlLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW1cbn1cblxuLm5vdGUtZGF0ZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kXG59XG5cbi5ub3RlLXRleHQtY29udGVudCB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nOiAwLjVyZW1cbn1cblxuLnByb2plY3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xuICBvdmVyZmxvdzogY2xpcDtcbn1cblxuLnByb2plY3QtdHJhc2gtZGl2LCAuaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDs7O0VBR0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qs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QWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixrREFBa0Q7RUFDbEQsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNzcyByZXNldCAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSlcXG59XFxuXFxuLyogZGFyayBtb2RlIHVzZXItYWdlbnQtc3R5bGVzICovXFxuXFxuaHRtbCB7XFxuICBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbjpyb290IHtcXG4gLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcXG4gLS10ZXh0LWhvdmVyLWNvbG9yOiByZ2JhKDI0LCAyNCwgMTcsIDAuMDg4KTtcXG4gLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmO1xcbiAtLXByaW9yaXR5LWxvdy1jb2xvcjogZ3JlZW47XFxuIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcmVkO1xcbiAtLXByaW9yaXR5LW1lZC1jb2xvcjogcmdiKDIzNiwgMTc2LCAxMSk7O1xcbiAtLWFkZC10YXNrcy1idXR0b24tY29sb3I6ICM1Y2IyYTc7XFxuIC0tZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcXG4gLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1sZWZ0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOjEzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDhweDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXItbGlua3Mge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi8qIEFERCBBTklNQVRJT05TIEZPUiBMSU5LUyBMQVRFUiAqL1xcbi5saW5rLWl0ZW06aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4ubGluay1pdGVtOm5vdCgucHJvamVjdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGluayB7XFxuICBmb250LXNpemU6IDEuMXJlbTsgXFxufVxcblxcbi5mYS1maWxlIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW1cXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn0gXFxuXFxuLmFkZC1uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5saW5rLWl0ZW0gPiBhIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuW2NsYXNzfD0nbGluay1pdGVtIGFjdGl2ZSddIHtcXG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4gYnV0dG9uW2NsYXNzfj0nYWN0aXZlJ10ge1xcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XFxufSBcXG5cXG4uc2lkZWJhci10b3AtY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtOyAgXFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbS1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbn1cXG5cXG5hIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEzdnc7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSg4NSwgODMsIDgzLCAwLjY4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNpZGViYXItbmV3OmhvdmVyLCAuc2lkZWJhci1zZXR0aW5nczpob3ZlciwgLm5ldy1jb250ZW50OmhvdmVyLCAubW9kYWwtbGluazpob3ZlciwgLmZhLXg6aG92ZXIsIFxcbi5tb2RhbC1kYXRlLWlucHV0OmhvdmVyLCAubW9kYWwtYnRuOmhvdmVyLCAuZmEtdHJhc2gsIC5mYS10cmFzaC1jYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4tcmlnaHQge1xcbiAgd2lkdGg6MTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4gLnRvLWRvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufSBcXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4ubWFpbi1uZXc6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5wYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwtbWFpbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4ubW9kYWwtbmV3LWNvbnRlbnQtZGl2IHtcXG4gIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2RhbC10YXNrLXRpdGxlLWFyZWEsIC5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLXRleHQtYXJlYSwgLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhe1xcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxufVxcbi5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEge1xcbiAgbWluLWhlaWdodDogMTRkdmg7XFxufVxcbi5tb2RhbC1saW5rIHtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxufVxcblxcbltjbGFzc3w9J21vZGFsLWxpbmsgYWN0aXZlJ10ge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfwn6CaJztcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIG1hcmdpbi1yaWdodDogLjI1ZW07XFxuXFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLW5ldy1lbnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLXNpZGViYXIge1xcbiAgd2lkdGg6IDEwZHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmE7XFxuICBtaW4taGVpZ2h0OiAzNWR2aDtcXG59XFxuXFxuLm1vZGFsLWRhdGUtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcilcXG59XFxuXFxuLm1vZGFsLWRhdGUtZGl2IHsgIFxcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG59XFxuXFxuLm1vZGFsLXByaW9yaXR5LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLWRpdiB7XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDUyJTtcXG59XFxuXFxuLm1vZGFsLWFkZC10YXNrLWJ0biwgLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XFxuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbi5tb2RhbC1hZGQtbm90ZS1idG46aG92ZXIsIC5tb2RhbC1hZGQtcHJvamVjdC1idG46aG92ZXIsIC5tb2RhbC1hZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtYnRuLCAubW9kYWwtYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93LWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdy1idG46aG92ZXIgIHtcXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkLWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKVxcbn1cXG5cXG4ucHJpb3JpdHktbWVkLWJ0bjpob3ZlciAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcXG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuIH1cXG5cXG4ucHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gtYnRuOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuIH1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtaW4td2lkdGg6IDI5ZHZ3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYXtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDZkdmg7XFxufVxcblxcbi5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxMmR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxOGR2aDtcXG59XFxuXFxuLnRvLWRvLWRpdiB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIG1pbi13aWR0aDogODBkdnc7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRvLWRvLWRpdi1sZWZ0LCAudG8tZG8tZGl2LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5uby10YXNrLXRleHQtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubm90ZS1kaXYge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi13aWR0aDogMjBkdmg7XFxuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ubm90ZS1oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtXFxufVxcblxcbi5ub3RlLWRhdGUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmRcXG59XFxuXFxuLm5vdGUtdGV4dC1jb250ZW50IHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtXFxufVxcblxcbi5wcm9qZWN0LWNoaWxkIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMi41ZW07XFxuICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLnByb2plY3QtdHJhc2gtZGl2LCAuaGVhZGVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcihuYW1lT2ZQcm9qZWN0KSB7XG4gIGNvbnN0IGFsbFNpZGViYXJMaW5rSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1pdGVtJyk7XG4gIC8vIG91ciB0b3AgYW5kIGJvdHRvbSBzaWRlYmFyIGxpbmtzIGFyZSBib3RoIGNhbGxlZCAnc2lkZWJhci1saW5rcycgc28gc3BlY2lmeVxuICAvLyB0aGF0IHdlIHdhbnQgdGhlIGJvdHRvbSBjb250YWluZXIgc2lkZWJhciBsaW5rcy5cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5zaWRlYmFyLWJvdHRvbS1jb250YWluZXInXG4gICkuZmlyc3RDaGlsZDtcblxuICBhbGxTaWRlYmFyTGlua0l0ZW1zLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAvLyBpZiBsaW5rIGNsaWNrZWQgY2xhc3NsaXN0IGVxdWFsIHByb2plY3QgbmFtZSB0aGVuIHRoYXRzIHRoZSBzaWRlYmFyIHByb2plY3Qgd2UgZGVsZXRlXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0WzBdID09PSBuYW1lT2ZQcm9qZWN0KSB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QnLCBgJHtuYW1lT2ZQcm9qZWN0fWApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgbG9hZFRhc2tMaXN0IGZyb20gJy4vcGFnZXMvdGFza0xpc3QnO1xuaW1wb3J0IGxvYWROb3Rlc1BhZ2UgZnJvbSAnLi9wYWdlcy9ub3Rlcyc7XG5pbXBvcnQgbG9hZFByb2plY3RQYWdlIGZyb20gJy4vcGFnZXMvcHJvamVjdHMnO1xuaW1wb3J0IGxvYWRUb2RheVBhZ2UgZnJvbSAnLi9wYWdlcy90b2RheSc7XG5pbXBvcnQgeyB3aXBlRG9tQ29udGVudCB9IGZyb20gJy4vdWkvZG9tJztcbmltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4vdWkvYWN0aXZlQXR0cmlidXRlJztcbmltcG9ydCBjcmVhdGVOZXdEaWFsb2dNb2RhbCBmcm9tICcuL3VpL21vZGFsL21vZGFsJztcbmltcG9ydCBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIgZnJvbSAnLi9kZWxldGVQcm9qZWN0RnJvbVNpZGViYXInO1xuaW1wb3J0IHsgZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQYWdlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIC8vIGV2ZW50cyBmb3Igc2lkZWJhcmxpbmsgKyBpbmRpdmlkdWFsIHByb2plY3QgcGFnZXNcbiAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstaXRlbScpO1xuICBjb25zdCBhZGROZXdQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcblxuICBzaWRlYmFyTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUoc2lkZWJhckxpbmtzKTtcbiAgICAgIHdpcGVEb21Db250ZW50KCk7XG4gICAgICBhZGRBY3RpdmVBdHRyaWJ1dGUoZSk7XG4gICAgICBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkZE5ld1Byb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIG9wZW4gbW9kYWwgd2hlbiB1c2VyIGNsaWNrcyBvbiBhZGQgcHJvamVjdFxuICAgIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSkge1xuICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSAnVG9kYXknOlxuICAgICAgbG9hZFRvZGF5UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnVGFzayBMaXN0JzpcbiAgICAgIGxvYWRUYXNrTGlzdCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTm90ZXMnOlxuICAgICAgbG9hZE5vdGVzUGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gb3VyIGRlZmF1bHQgd2lsbCBiZSBpbmRpdmlkdWFsIHByb2plY3RzIHRoYXQgYXJlIGNsaWNrZWQgaWYgbm90IGFueSBvZiB0aGUgYWJ2b2VcbiAgICBkZWZhdWx0OlxuICAgICAgbG9hZFByb2plY3RQYWdlKGUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlhbG9nRXZlbnRzKCkge1xuICBjb25zdCBuZXdDb250ZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctY29udGVudCcpO1xuXG4gIG5ld0NvbnRlbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0VHJhc2hDYW5FdmVudHMoKSB7XG4gIGNvbnN0IHByb2plY3RUcmFzaENhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaC1jYW4nKTtcblxuICBwcm9qZWN0VHJhc2hDYW4uZm9yRWFjaCgodHJhc2hDYW4pID0+IHtcbiAgICB0cmFzaENhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcGFyZW50U2libGluZ0VsZW1lbnRUZXh0Q29udGVudCA9XG4gICAgICAgIHRhcmdldFBhcmVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhcmVudFNpYmxpbmdFbGVtZW50VGV4dENvbnRlbnQ7XG5cbiAgICAgIC8vIHdpbGwgcmVtb3ZlIHByb2plY3QgZnJvbSBzaWRlYmFyIEFORCBkZWxldGUgcHJvamVjdCBmcm9tIExTXG4gICAgICBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIocHJvamVjdE5hbWUpO1xuICAgICAgZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdC10YXNrJywgcHJvamVjdE5hbWUpO1xuICAgICAgd2lwZURvbUNvbnRlbnQoKTtcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb3hUYXNrRXZlbnRzKCkge1xuICBjb25zdCB0b0RvQ2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tY2hlY2tib3gnKTtcbiAgdG9Eb0NoZWNrQm94LmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICBzaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkTm9kZXM7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgY2hpbGQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzaWJsaW5nID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIHNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkTm9kZXM7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgY2hpbGQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZGlhbG9nRXZlbnRzLCBwcm9qZWN0VHJhc2hDYW5FdmVudHMsIGNoZWNrQm94VGFza0V2ZW50cyB9O1xuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrLCBwYWdlSGVhZGVyVGV4dCkge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKTtcblxuICAvL2lmIG5vIGRhdGFcbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gaWYgbm8gdmFsdWUgaW4gdmFyaWFibGUgdGhlbiB3ZSBhcmUgbm90IGFkZGluZyBhIHRhc2sgdG8gYSBwcm9qZWN0XG4gICAgaWYgKCFwYWdlSGVhZGVyVGV4dCkge1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3RcbiAgICAgIGNvbnN0IGRhdGFBcnJheSA9IFt0YXNrXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZCBwcm9qZWN0IHBhZ2UgdGl0bGUgcHJvcGVydHkgdG8gdGFza1xuICAgICAgdGFzay5wcm9qZWN0UGFnZSA9IHBhZ2VIZWFkZXJUZXh0O1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3QgYW5kIGluZGl2aWR1YWwgcHJvamVjdCBwYWdlIHRpdGxlXG4gICAgICBjb25zdCBkYXRhQXJyYXkgPSBbdGFza107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0eXBlfWAsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXNrLnByb2plY3RQYWdlID0gcGFnZUhlYWRlclRleHQ7XG5cbiAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIGV4aXN0aW5nIHRhc2tzIG9mICd0eXBlJ1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKSk7XG5cbiAgICBkYXRhQXJyYXkucHVzaCh0YXNrKTtcblxuICAgIC8vIHNldCBuZXcgYXJyYXkgd2l0aCBhbGwgdGFza3Mgb2xkIGFuZCBuZXcgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSh0eXBlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3R5cGV9YCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCB0YXNrVGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKGAke3R5cGV9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc1tpXS50YXNrVGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgc2V0VG9Mb2NhbFN0b3JhZ2VBZnRlckRlbGV0aW5nKHR5cGUsIHRhc2tzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoYCR7dHlwZX1gKTtcbiAgaWYgKCF0YXNrcykgcmV0dXJuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NbaV0ucHJvamVjdFBhZ2UgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gIC8vIHJlZmFjdG9yIGJlbG93XG4gIC8vIGlmIG5vIHRhc2tzIGluIGVpdGhlciAndG9Ebycgb3IgJ25vdGVzJyBMUyBhcnJheXMgZGVsZXRlIHRoZSBrZXkgZnJvbSBMU1xuICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICd0b0RvJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gICAgbWFrZU5ld1Rhc2tEaXYoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dHlwZX1gKTtcbiAgICBtYWtlTmV3VGFza0Rpdignbm90ZXMnLCAnbm90ZXMtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBpZiBubyB0YXNrcyBpbiBlaXRoZXIgJ3Byb2plY3QtdGFzaycgb3IgJ3Byb2plY3QnIExTIGFycmF5cyBkZWxldGUgdGhlIGtleSBmcm9tIExTXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdHlwZSA9PT0gJ3Byb2plY3QtdGFzaycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge1xuICBzZXRUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG4vLyBydW4gd2hlbiBsaW5rIGlzIGNsaWNrZWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROb3Rlc1BhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBub3RlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3Rpbmcgbm90ZXMgc28gbWFrZSBhIHRhc2sgY29udGFpbmVyIHNvIHVzZXIgY2FuIG1ha2Ugc29tZSBuZXcgbm90ZXNcbiAgaWYgKCFub3Rlcykge1xuICAgIG1ha2VOZXdUYXNrRGl2KCdub3RlcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFeGlzdGluZ05vdGVzVG9QYWdlKCdub3RlcycpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV4aXN0aW5nTm90ZXNUb1BhZ2UodHlwZSkge1xuICAvLyBnZXQgYWxsIG9mIHRoZSB1c2VycyBub3RlcyBmcm9tIExTXG4gIGNvbnN0IG5vdGVzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbm90ZXMnKTtcblxuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCBub3RlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXZGb3JQcm9qZWN0cyBmcm9tICcuLi91aS9ub1Rhc2tzTWVzc2FnZSc7XG5pbXBvcnQgeyBkaWFsb2dFdmVudHMsIHByb2plY3RUcmFzaENhbkV2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyIGZyb20gJy4uL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHsgYnVpbGRUb0RvVWkgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcblxuLy9ydW5zIHdoZW4gYSBpbmRpdmlkdWFsIHByb2plY3QgaXMgY2xpY2tlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RQYWdlKGUpIHtcbiAgY3JlYXRlSGVhZGVyKCdwcm9qZWN0Jyk7XG4gIHByb2plY3RUcmFzaENhbkV2ZW50cygpO1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snKTtcblxuICBpZiAoIXByb2plY3RUYXNrcykge1xuICAgIG1ha2VOZXdUYXNrRGl2Rm9yUHJvamVjdHMoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlZmFjdG9yIHRvIHNlcGVyYXRlIGZ1bmN0aW9uXG4gICAgY29uc3QgaW5kaXZpZGl1YWxQcm9qZWN0VGFzayA9IHByb2plY3RUYXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0UGFnZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gdGFzayBpbiBwcm9qZWN0IChqdXN0IG1hZGUpIHNob3cgbm8gdGFzayBtZXNzYWdlXG4gICAgaWYgKGluZGl2aWRpdWFsUHJvamVjdFRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICBtYWtlTmV3VGFza0RpdkZvclByb2plY3RzKCd0YXNrcycsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgZGlhbG9nRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1aWxkIHRhc2sgb24gcHJvamVjdCBwYWdlIGNsaWNrZWRcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBpbmRpdmlkaXVhbFByb2plY3RUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYnVpbGRUb0RvVWkodGFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gaXMgcmFuIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4aXN0aW5nUHJvamVjdHNUb1NpZGViYXIoKSB7XG4gIC8vIHdlIGFsc28gd2FudCB0byBjaGVjayBpZiB0aGVyZSBpcyBhbnkgcHJvamVjdHMgb24gcGFnZSBsb2FkIGluIExTIHRvIHNob3dcbiAgLy8gdW5kZXIgcHJvamVjdHMgdGFiIG9uIHBhZ2UgbG9hZCBhc3dlbGwuXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdCcpO1xuXG4gIGlmICghcHJvamVjdHMpIHJldHVybjtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0LnRhc2tUaXRsZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi4vdWkvaGVhZGVyJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgYWRkVGFza1RvUGFnZSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBmdW5jdGlvbiBpcyByYW4gb24gcGFnZSBsb2FkIGFuZCBvbiBsaW5rIGNsaWNrXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFza0xpc3QoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3RpbmcgdG8tZG8ncyBzbyBtYWtlIGEgdGFzayBjb250YWluZXIgc28gdXNlciBjYW4gbWFrZSBzb21lIG5ldyB0YXNrc1xuICBpZiAoIXRvRG8pIHtcbiAgICBtYWtlTmV3VGFza0RpdigndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkRXhpc3RpbmdUb0RvVG9QYWdlKCd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdUb0RvVG9QYWdlKHR5cGUpIHtcbiAgLy8gZ2V0IGFsbCBvZiB0aGUgdXNlcnMgdGFza3MgZnJvbSBMU1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIHRvRG8uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzayk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIC8vIHNob3cgbm8gaXRlbXMgc2F2ZWQgaW4gZGlzcGxheSBpZiBubyBkYXRhXG4gICAgbWFrZU5ld1Rhc2tEaXYoJ2l0ZW1zIHNhdmVkJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV4aXN0aW5nRGF0YVRvVG9kYXlQYWdlKCdub3RlcycsICd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdEYXRhVG9Ub2RheVBhZ2UodHlwZU9uZSwgdHlwZVR3bykge1xuICAvL2dldCBhbGwgb2YgdGhlIHVzZXJzIG5vdGVzL3Rhc2tzIGZyb20gTFNcbiAgY29uc3Qgbm90ZXMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycpO1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvRG8nKTtcblxuICBpZiAobm90ZXMpIHtcbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBhZGRUYXNrVG9QYWdlKHR5cGVPbmUsIG5vdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRhc2tzKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYWRkVGFza1RvUGFnZSh0eXBlVHdvLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2V0VG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZFRhc2tUb1BhZ2UgZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG8odHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpIHtcbiAgLy8gd2UgZG9udCB3YW50IHByb2plY3RzIGJlaW5nIGFkZGVkIGxpa2UgdGFza3Mvbm90ZXMgd2lsbCBiZVxuICAvLyByZWZhY3RvciBsYXRlclxuICBpZiAodHlwZSA9PT0gJ25vdGVzJyB8fCB0eXBlID09PSAndG9EbycpIHtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrKTtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UodHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpO1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIH1cbn1cbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb25zIHRvIG1ha2Ugb3VyIHRvZG8gb2JqZWN0IHdpdGgga2V5L3ZhbHVlIHBhaXJzIGFzc2lnbmVkXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBjYXB0dXJlTW9kYWxEZXRhaWxzVGV4dERhdGEoJy5tb2RhbC10YXNrLWRldGFpbHMtYXJlYScpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGNhcHR1cmVNb2RhbERhdGVEYXRhKCk7XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBjYXB0dXJlTW9kYWxQcmlvcml0eUxldmVsKCk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlLCBwcmlvcml0eUxldmVsIH07XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YSgnLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJyk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC1ub3Rlcy10aXRsZS1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKCcubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEYXRlID0gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKTtcbiAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUgfTtcbn1cblxuLy8gY2FwdHVyZSBhbGwgdXNlciBpbnB1dHMgb24gbW9kYWxcbi8vIG9ubHkgbmVlZCBvbmUgZnVuY2l0b24gaGVyZSBiZWxvdywgd2lsbCByZWZhY3RvciBsYXRlclxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YShlbGVtZW50Q2xhc3NOYW1lKSB7XG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnRDbGFzc05hbWV9YCk7XG4gIGNvbnN0IHRleHREYXRhID0gdGl0bGVUZXh0QXJlYS52YWx1ZS50cmltKCk7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKGVsZW1lbnRDbGFzc05hbWUpIHtcbiAgY29uc3QgZGV0YWlsc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50Q2xhc3NOYW1lfWApO1xuICBjb25zdCB0ZXh0RGF0YSA9IGRldGFpbHNUZXh0QXJlYS52YWx1ZS50cmltKCk7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGNvbnN0IGRhdGVEYXRhID0gZGF0ZUlucHV0LnZhbHVlO1xuICByZXR1cm4gZGF0ZURhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByaW9yaXR5TGV2ZWwoKSB7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcbiAgY29uc3QgYnV0dG9uQXJyYXkgPSBBcnJheS5mcm9tKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgLy8gYnRuIHdpdGggYSBjb2xvciBvZiB3aGl0ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQgYnV0dG9uXG4gIGNvbnN0IHByaW9yaXR5Q2xpY2tlZCA9IGJ1dHRvbkFycmF5LmZpbmQoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuc3R5bGUuY29sb3IgPT09ICd3aGl0ZSdcbiAgKTtcblxuICByZXR1cm4gcHJpb3JpdHlDbGlja2VkLnRleHRDb250ZW50O1xufVxuXG4vLyBmdW5jdGlvbiBjaGVja0lmVGFza1RpdGxlTmVlZHNUaXRsZUF0dHJpYnV0ZSh0aXRsZSkge1xuLy8gICBjb25zdCB0aXRsZUFycmF5ID0gdGl0bGUuc3BsaXQoJycpO1xuLy8gICBpZiAodGl0bGVBcnJheS5lbGVtZW50ID4gMTUpIHtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQge1xuICBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEsXG4gIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSxcbiAgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhLFxufTtcbiIsImltcG9ydCB7IHJlbW92ZVRhc2tGcm9tRG9tIH0gZnJvbSAnLi4vdWkvZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFzayh0eXBlLCBlbGVtZW50KSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFzayA9IHBhcmVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHR5cGUgPT09ICd0b0RvJykge1xuICAgICAgLy8gZ2V0cyB1cyB0aGUgdGFzayB0aXRsZSBmcm9tIHRhc2sgY2xpY2tlZFxuICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5jbGFzc0xpc3RbMF07XG4gICAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCB0YXNrVGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXRzIHVzIHRoZSBub3RlIHRpdGxlIGZyb20gdGFzayBjbGlja2VkXG4gICAgICBjb25zdCBub3RlVGl0bGUgPSB0YXNrLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCBub3RlVGl0bGUpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBhZGRBY3RpdmVBdHRyaWJ1dGUoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobGlua0FycmF5KSB7XG4gIGxpbmtBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBY3RpdmVBdHRyaWJ1dGUsIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlIH07XG4iLCIvLyByZWZhY3RvciBiZWxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdFNpZGViYXJMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItcHJvamVjdC1saW5rJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3Byb2plY3RUaXRsZX0gcHJvamVjdC1jaGlsZGApO1xuICAvLyBhZGQgbGluayBpdGVtIGNsYXNzIG5hbWUgc28gd2UgY2FuIHJldXNlIG90aGVyIG1vZHVsZXMgZm9yIGFjdGl2ZSBsaW5rIGNsaWNrZWRcbiAgbmV3UHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIG5ld1Byb2plY3RMaW5rLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfWA7XG4gIC8vIGluc2VydCBuZXcgdXNlciBwcm9qZWN0IGJ1dHRvbiBBRlRFUiBzaWRlYmFyIHByb2plY3QgbGlua1xuICBwcm9qZWN0U2lkZWJhckxpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG5ld1Byb2plY3RMaW5rKTtcblxuICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHByb2plY3RzSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNsaXBib2FyZC1saXN0Jyk7XG4gIG5ld1Byb2plY3RMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHByb2plY3RzSWNvbik7XG5cbiAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyA+IDE1IGNoYXJhY3RlcnMgYW5kIGEgdGl0bGUgdGhhdCB3aWxsIHNob3cgb24gaG92ZXJcbiAgY29uc3QgcHJvamVjdFRpdGxlQXJyYXkgPSBwcm9qZWN0VGl0bGUuc3BsaXQoJycpO1xuICBpZiAocHJvamVjdFRpdGxlQXJyYXkubGVuZ3RoID4gMTUpIHtcbiAgICBuZXdQcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7cHJvamVjdFRpdGxlfWApO1xuICB9XG59XG5cbi8vIHJ1bnMgb25seSB3aGVuIHVzZXIgaXMgYWRkaW5nIGEgbmV3IHByb2plY3QgdG8gc2lkZWJhclxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2hpbGQnKTtcbiAgbGV0IHByb2plY3RFeGlzdHMgPSBmYWxzZTtcblxuICBzaWRlYmFyUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LnRleHRDb250ZW50ID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgIGFsZXJ0KCdZb3UgYWxyZWFkeSBoYXZlIGEgcHJvamVjdCB3aXRoIHRoYXQgdGl0bGUhJyk7XG4gICAgICBwcm9qZWN0RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0RXhpc3RzO1xufVxuXG5leHBvcnQgeyBjaGVja0lmUHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzIH07XG4iLCJpbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuLi90YXNrcy9kZWxldGVUYXNrcyc7XG5pbXBvcnQgeyBjaGVja0JveFRhc2tFdmVudHMgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2ssIGNvbnRhaW5lck5hbWUpIHtcbiAgLy8gcmVmYWN0b3IgYWxsIHRoaXMgbGF0ZXJcbiAgaWYgKHR5cGUgPT09ICd0b0RvJykge1xuICAgIC8vIHR5cGUgd291bGQgZXF1YWwgJ3RvRG8nXG4gICAgYWRkVG9Eb1RvUGFnZSh0YXNrKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdC10YXNrJykge1xuICAgIGFkZFRvRG9Ub1BhZ2UodGFzaywgY29udGFpbmVyTmFtZSk7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ25vdGVzJykge1xuICAgIGFkZE5vdGVzVG9QYWdlKHRhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9Eb1VpKHRhc2spIHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay50YXNrVGl0bGV9YCk7XG4gIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGl2Jyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG5cbiAgY29uc3QgdG9Eb0RpdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0RpdkxlZnQuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGl2LWxlZnQnKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGl2TGVmdCk7XG5cbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgndG8tZG8tY2hlY2tib3gnKTtcbiAgdG9Eb0RpdkxlZnQuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlcnMgdG8gZWFjaCBjaGVja2JveFxuICBjaGVja0JveFRhc2tFdmVudHMoKTtcblxuICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJyk7XG4gIHRvRG8udGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tUaXRsZX1gO1xuICB0b0RvRGl2TGVmdC5hcHBlbmRDaGlsZCh0b0RvKTtcblxuICBjb25zdCB0b0RvRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0RpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRpdi1yaWdodCcpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvRG9EaXZSaWdodCk7XG5cbiAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcbiAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tEYXRlfWA7XG4gIHRvRG9EaXZSaWdodC5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG5cbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCd0by1kby1kZWxldGUtYnRuJyk7XG4gIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS10cmFzaCcpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRGVsZXRlIFRhc2snKTtcbiAgdG9Eb0RpdlJpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBlYWNoIHRyYXNoIGNhbiBpY29uIG1hZGVcbiAgZGVsZXRlVGFzaygndG9EbycsIGRlbGV0ZVRhc2tCdG4pO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvUHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKCd0by1kby1wcmlvcml0eS1sZXZlbCcpO1xuICB0b0RvUHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHlMZXZlbH1gO1xuICB0b0RvRGl2UmlnaHQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5TGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0RvVG9QYWdlKHRhc2ssIGNvbnRhaW5lck5hbWUpIHtcbiAgaWYgKGNvbnRhaW5lck5hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGJ1aWxkVG9Eb1VpKHRhc2spO1xuICB9IGVsc2Uge1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGJ1aWxkVG9Eb1VpKHRhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tDb250YWluZXIoY2xhc3NOYW1lKSB7XG4gIC8vIGlmIGNvbnRhaW5lciBhbHJlYWR5IGV4aXN0cyBqdXN0IHJldHVybiBzbyB3ZSBkb250IGdldCBkdXBsaWNhdGVzXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCkpIHJldHVybjtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBtYWluLmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBhZGROb3Rlc1RvUGFnZSh0YXNrKSB7XG4gIGFkZFRhc2tDb250YWluZXIoJ25vdGVzLWNvbnRhaW5lcicpO1xuICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1kaXYnKTtcbiAgbm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZURpdik7XG5cbiAgY29uc3Qgbm90ZUhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlSGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGUtaGVhZGVyJyk7XG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUhlYWRlckRpdik7XG5cbiAgY29uc3Qgbm90ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZUhlYWRlci50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza1RpdGxlfWA7XG4gIG5vdGVIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobm90ZUhlYWRlcik7XG5cbiAgY29uc3QgZGVsZXRlTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlTm90ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgZGVsZXRlTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdub3RlLWNsb3NlLWJ0bicpO1xuICBub3RlSGVhZGVyRGl2LmFwcGVuZENoaWxkKGRlbGV0ZU5vdGVCdG4pO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBlYWNoIHRyYXNoIGNhbiBpY29uIG1hZGVcbiAgZGVsZXRlVGFzaygnbm90ZXMnLCBkZWxldGVOb3RlQnRuKTtcblxuICBjb25zdCBub3RlVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVUZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdub3RlLXRleHQtY29udGVudCcpO1xuICBub3RlVGV4dENvbnRlbnQudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tEZXRhaWxzfWA7XG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZVRleHRDb250ZW50KTtcblxuICBjb25zdCBub3RlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZURhdGUuY2xhc3NMaXN0LmFkZCgnbm90ZS1kYXRlJyk7XG4gIG5vdGVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGF0ZX1gO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVEYXRlKTtcbn1cblxuZXhwb3J0IHsgYWRkVGFza0NvbnRhaW5lciwgYnVpbGRUb0RvVWkgfTtcbiIsImltcG9ydCB7IGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIgZnJvbSAnLi4vZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuL2FkZFRhc2tUb1BhZ2UnO1xuXG5mdW5jdGlvbiB3aXBlRG9tQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG5cbiAgaWYgKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gaWYgbWFpbkNvbnRlbnQgaGFzIGEgY2hpbGQsIHJlcGxhY2Ugdy9lbXB0eSBzdHJpbmcgc28gd2UgY2FuIHNob3cgbmV4dCBuYXYgaXRlbXMgY2xpY2tlZCBjb250ZW50XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpcGVNb2RhbENvbnRlbnQoY29udGVudCkge1xuICBpZiAoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyBpZiBtb2RhbCBtYWluIGhhcyBhIGNoaWxkLCByZXBsYWNlIHcvZW1wdHkgc3RyaW5nIHNvIHdlIGNhbiBzaG93IG5leHQgbmF2IGl0ZW1zIGNsaWNrZWQgY29udGVudFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG4vLyByZWZhY3RvciBiZWxvd1xuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Eb20odGFzaywgdGFza1RpdGxlKSB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpO1xuXG4gIGlmICh0b0RvQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ3Byb2plY3QtY29udGFpbmVyJykge1xuICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snLCB0YXNrVGl0bGUpO1xuICB9IGVsc2UgaWYgKHRvRG9Db250YWluZXIuY2xhc3NOYW1lID09PSAndG8tZG8tY29udGFpbmVyJykge1xuICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKCd0b0RvJywgdGFza1RpdGxlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgnbm90ZXMnLCB0YXNrVGl0bGUpO1xuICB9XG5cbiAgdG9Eb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrKTtcblxuICAvLyBpZiBwcm9qZWN0IHBhZ2UgaGFzIG5vIGNoaWxkcmVuIHRoZW4gd2UnbGwgZ3JhYiB0aGUgcGFnZSBoZWFkZXIgYW5kIGRlbGV0ZVxuICAvLyBpdCBmcm9tIHRoZSBzaWRlYmFyXG4gIGlmIChcbiAgICB0b0RvQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJlxuICAgIHRvRG9Db250YWluZXIudGV4dENvbnRlbnQgPT09ICdwcm9qZWN0LWNvbnRhaW5lcidcbiAgKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWNvbnRlbnQnKS50ZXh0Q29udGVudDtcbiAgICBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIoY3VycmVudFBhZ2UpO1xuICAgIHdpcGVEb21Db250ZW50KCk7XG4gICAgYWRkVGFza0NvbnRhaW5lcigndG8tZG8tY29udGFpbmVyJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCkge1xuICBjb25zdCBub1Rhc2tUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLXRhc2stdGV4dCcpO1xuICBjb25zdCBuZXdDb250ZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmV3Jyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbiAgaWYgKGNvbnRhaW5lci5jb250YWlucyhub1Rhc2tUZXh0KSkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChub1Rhc2tUZXh0KTtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobmV3Q29udGVudEJ0bik7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgd2lwZURvbUNvbnRlbnQsXG4gIHdpcGVNb2RhbENvbnRlbnQsXG4gIHJlbW92ZVRhc2tGcm9tRG9tLFxuICBjaGVja0Zvck5vVGFza01lc3NhZ2UsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHR5cGUpIHtcbiAgLy8gdXNpbmcgaW5uZXJIVE1MIHNvIHdlIGNhbiBncmFiIHRoZSBpY29uIGFzIHdlbGwgYXMgdGV4dFxuICBjb25zdCBzaWRlYmFyTGlua0NsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuaW5uZXJIVE1MO1xuICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG5cbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaGVhZGVyJyk7XG4gIC8vIHBhZ2VIZWFkZXIuaW5uZXJIVE1MID0gYCR7c2lkZWJhckxpbmtDbGlja2VkfWA7XG5cbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250ZW50Jyk7XG4gIGhlYWRlckNvbnRlbnQuaW5uZXJIVE1MID0gYCR7c2lkZWJhckxpbmtDbGlja2VkfWA7XG4gIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIGNvbnN0IHByb2plY3RUcmFzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUcmFzaERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRyYXNoLWRpdicpO1xuICAgIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRyYXNoRGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RUcmFzaENhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBwcm9qZWN0VHJhc2hDYW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS10cmFzaC1jYW4nKTtcbiAgICBwcm9qZWN0VHJhc2hEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRyYXNoQ2FuKTtcblxuICAgIGNvbnN0IHByb2plY3RUcmFzaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdFRyYXNoVGV4dC50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgcHJvamVjdFRyYXNoRGl2LmFwcGVuZENoaWxkKHByb2plY3RUcmFzaFRleHQpO1xuICB9XG5cbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG59XG4iLCJpbXBvcnQgbG9hZFRhc2tMaXN0IGZyb20gJy4uL3BhZ2VzL3Rhc2tMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHJpZ2h0TWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHRNYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLXJpZ2h0Jyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocmlnaHRNYWluQ29udGVudCk7XG5cbiAgLy8gb24gcGFnZSBsb2FkIG9wZW4gdG8gJ3Rhc2stbGlzdCdcbiAgbG9hZFRhc2tMaXN0KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZER1ZURhdGVEaXYoZWxlbWVudCkge1xuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGF0ZS1kaXYnKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICBidWlsZER1ZURhdGVMYWJlbChkYXRlRGl2KTtcbiAgYnVpbGREdWVEYXRlSW5wdXQoZGF0ZURpdik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRHVlRGF0ZUxhYmVsKGRhdGVEaXYpIHtcbiAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRhdGUtbGFiZWwnKTtcbiAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21vZGFsLWRhdGUtaW5wdXQnKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAnO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRHVlRGF0ZUlucHV0KGRhdGVEaXYpIHtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRhdGUtaW5wdXQnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWRhdGUtaW5wdXQnKTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24oZWxlbWVudCwgY2xhc3NOYW1lLCBidG5UZXh0KSB7XG4gIGNvbnN0IGFkZE5ld0J0bk1vZGFsUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIGFkZE5ld0J0bk1vZGFsUGFnZS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hZGQtYnRuJyk7XG4gIGFkZE5ld0J0bk1vZGFsUGFnZS50ZXh0Q29udGVudCA9IGAke2J0blRleHR9YDtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChhZGROZXdCdG5Nb2RhbFBhZ2UpO1xufVxuIiwiaW1wb3J0IHtcbiAgYWRkQWN0aXZlQXR0cmlidXRlLFxuICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSxcbn0gZnJvbSAnLi4vYWN0aXZlQXR0cmlidXRlJztcbmltcG9ydCBsb2FkTW9kYWxUYXNrUGFnZSBmcm9tICcuL21vZGFsLXRhc2stcGFnZSc7XG5pbXBvcnQgbG9hZE1vZGFsUHJvamVjdFBhZ2UgZnJvbSAnLi9tb2RhbC1wcm9qZWN0LXBhZ2UnO1xuaW1wb3J0IGxvYWRNb2RhbE5vdGVzUGFnZSBmcm9tICcuL21vZGFsLW5vdGUtcGFnZSc7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbFNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1saW5rJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UtYnRuJyk7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpO1xuXG4gIG1vZGFsU2lkZWJhckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlKG1vZGFsU2lkZWJhckxpbmtzKTtcbiAgICAgIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKTtcbiAgICAgIGNoZWNrV2ljaE1vZGFsU2lkZWJhckxpbmtJc0NsaWNrZWQoZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG5ld01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gIH0pO1xuXG4gIG1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlTW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2ljaE1vZGFsU2lkZWJhckxpbmtJc0NsaWNrZWQobGluaykge1xuICBzd2l0Y2ggKGxpbmsudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSAnVGFzayc6XG4gICAgICBsb2FkTW9kYWxUYXNrUGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUHJvamVjdCc6XG4gICAgICBsb2FkTW9kYWxQcm9qZWN0UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTm90ZSc6XG4gICAgICBsb2FkTW9kYWxOb3Rlc1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEgfSBmcm9tICcuLi8uLi90YXNrcy9jYXB0dXJlVGFza0RhdGEnO1xuaW1wb3J0IGFkZFRvRG8gZnJvbSAnLi4vLi4vdGFza3MvYWRkVGFza3MnO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuaW1wb3J0IHsgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlIH0gZnJvbSAnLi4vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxUYXNrTm90ZXNFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1idG4nKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG4gIGNvbnN0IG5vVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKTtcblxuICAvLyBjYXB0dXJlIHRvZG8gb2JqZWN0IGluIHRhc2sgdmFyaWFibGVcbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbE5vdGVQYWdlRGF0YSgpO1xuICAgIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpO1xuICAgIGFkZFRvRG8oJ25vdGVzJywgdGFzayk7XG4gICAgcmVtb3ZlTW9kYWwoKTtcbiAgICBpZiAobm9UYXNrQ29udGFpbmVyKSB7XG4gICAgICBtYWluLnJlbW92ZUNoaWxkKG5vVGFza0NvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IHdpcGVNb2RhbENvbnRlbnQgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IGJ1aWxkTW9kYWxEdWVEYXRlRGl2IGZyb20gJy4vZHVlLWRhdGUnO1xuaW1wb3J0IGJ1aWxkTW9kYWxUZXh0QXJlYSBmcm9tICcuL3RleHQtYXJlYSc7XG5pbXBvcnQgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24gZnJvbSAnLi9tb2RhbC1hZGQtYnV0dG9uJztcbmltcG9ydCBtb2RhbFRhc2tOb3Rlc0V2ZW50cyBmcm9tICcuL21vZGFsLW5vdGUtcGFnZS1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTW9kYWxOb3Rlc1BhZ2UoKSB7XG4gIC8vIGlmIGl0IGV4aXN0cyB0aGVuIGRvbnQgYnVpbGQgdGhlIHBhZ2UgYmVjYXVzZSBpdHMgb3BlbiBhbHJlYWR5LCBqdXN0IHJldHVyblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5vdGVzLXRleHQtYXJlYScpKSByZXR1cm47XG5cbiAgY29uc3QgbW9kYWxNYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgd2lwZU1vZGFsQ29udGVudChtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC1ub3Rlcy10aXRsZS1hcmVhJyxcbiAgICAnVGl0bGU6IEdyb2NlcnkgTGlzdC4nLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEnLFxuICAgICdEZXRhaWxzOiBmcnVpdCwgd2F0ZXJzLCBtZWF0JyxcbiAgICBtb2RhbE1haW5Db250ZW50XG4gICk7XG4gIGJ1aWxkTW9kYWxEdWVEYXRlRGl2KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihtb2RhbE1haW5Db250ZW50LCAnbW9kYWwtYWRkLW5vdGUtYnRuJywgJ0FkZCBOb3RlJyk7XG5cbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCBub3RlIHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza05vdGVzRXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEgfSBmcm9tICcuLi8uLi90YXNrcy9jYXB0dXJlVGFza0RhdGEnO1xuaW1wb3J0IGFkZFRvRG8gZnJvbSAnLi4vLi4vdGFza3MvYWRkVGFza3MnO1xuaW1wb3J0IGFkZE5ld1Byb2plY3RUb1NpZGViYXIsIHtcbiAgY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyxcbn0gZnJvbSAnLi4vYWRkTmV3UHJvamVjdFRvU2lkZWJhcic7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5pbXBvcnQgYWRkUGFnZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4uLy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBjaGVja0Zvck5vVGFza01lc3NhZ2UgfSBmcm9tICcuLi9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbFRhc2tQcm9qZWN0RXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG5cbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpO1xuICAgIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpO1xuXG4gICAgLy8gZGVzdHJ1Y3R1cmUgYW5kIHJlbmFtZSB0byBwcm9qZWN0IHRpdGxlIHNvIHdlIGNhbiBhZGQgdG8gc2lkZWJhciB0aHJvdWdoIGZ1bmN0aW9uIGNhbGxcbiAgICBjb25zdCB7IHRhc2tUaXRsZTogcHJvamVjdFRpdGxlIH0gPSB0YXNrO1xuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBhIGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWUgcmV0dXJuLCBlbHNlIGFkZCBwcm9qZWN0IHRvIHNpZGViYXJcbiAgICBpZiAoY2hlY2sgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkVG9EbygncHJvamVjdCcsIHRhc2spO1xuICAgICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpO1xuICAgICAgYWRkUGFnZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrUHJvamVjdEV2ZW50cyBmcm9tICcuL21vZGFsLXByb2plY3QtcGFnZS1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTW9kYWxQcm9qZWN0UGFnZSgpIHtcbiAgLy8gaWYgaXQgZXhpc3RzIHRoZW4gZG9udCBidWlsZCB0aGUgcGFnZSBiZWNhdXNlIGl0cyBvcGVuIGFscmVhZHksIGp1c3QgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcHJvamVjdC10ZXh0LWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtcHJvamVjdC10ZXh0LWFyZWEnLFxuICAgICdUaXRsZTogQnVpbGQgbmV3IGZlbmNlLicsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihcbiAgICBtb2RhbE1haW5Db250ZW50LFxuICAgICdtb2RhbC1hZGQtcHJvamVjdC1idG4nLFxuICAgICdBZGQgUHJvamVjdCdcbiAgKTtcblxuICAvLyBjYWxsIHNwZWNpZmljIG1vZGFsIHByb2plY3QgcGFnZSBldmVudHNcbiAgbW9kYWxUYXNrUHJvamVjdEV2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza1BhZ2VFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1idG4nKTtcbiAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJ0bicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyJyk7XG4gIGNvbnN0IHBhZ2VIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50Jyk7XG5cbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VIZWFkZXIgPT09IG51bGwpIHtcbiAgICAgIHBhZ2VIZWFkZXIgPSAnICc7XG4gICAgICBwYWdlSGVhZGVyVGV4dCA9ICcgJztcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0YXNrIHNob3VsZCBiZSBhdHRhY2hlZCB0byBhIHByb2plY3Qgb3Igbm90XG4gICAgaWYgKHBhZ2VIZWFkZXIubmV4dFNpYmxpbmcuY2xhc3NOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgICAvLyBjYXB0dXJlIHRvZG8gb2JqZWN0IGluIHRhc2sgdmFyaWFibGVcbiAgICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKTtcbiAgICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICAgIGFkZFRvRG8oJ3Byb2plY3QtdGFzaycsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0LnRleHRDb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSgpO1xuICAgICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG4gICAgICBhZGRUb0RvKCd0b0RvJywgdGFzayk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIGZ1bmMgdG8gY2hlY2sgaWYgYW55IGJ1dHRvbnMgaGF2ZSBhIGNvbG9yIG9mIHdoaXRlXG4gICAgICAvLyBpZiBzbyBjaGFuZ2UgaXQgdG8gbm9ybWFsIHNvIG5leHQgYnRuIGNsaWNrZWQgd2lsbCBiZSB0aGUgc2VsZWN0ZWQgb25lIHRha2VuIGFzIGlucHV0XG4gICAgICBjb25zdCBidG5CZ0NvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pO1xuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2J0bkJnQ29sb3IuYmFja2dyb3VuZENvbG9yfWA7XG4gICAgICBidXR0b24uc3R5bGUuY29sb3IgPSAnV2hpdGUnO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHdpcGVNb2RhbENvbnRlbnQgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IGJ1aWxkTW9kYWxEdWVEYXRlRGl2IGZyb20gJy4vZHVlLWRhdGUnO1xuaW1wb3J0IGJ1aWxkTW9kYWxUZXh0QXJlYSBmcm9tICcuL3RleHQtYXJlYSc7XG5pbXBvcnQgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24gZnJvbSAnLi9tb2RhbC1hZGQtYnV0dG9uJztcbmltcG9ydCBtb2RhbFRhc2tQYWdlRXZlbnRzIGZyb20gJy4vbW9kYWwtdGFzay1wYWdlLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNb2RhbFRhc2tQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtdGFzay10aXRsZS1hcmVhJyxcbiAgICAnVGl0bGU6IFBheSBCaWxscycsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXRhc2stZGV0YWlscy1hcmVhJyxcbiAgICAnRGV0YWlsczogcGhvbmUgYmlsbCcsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsRHVlRGF0ZURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCB0YXNrIHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza1BhZ2VFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KSB7XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXByaW9yaXR5LWRpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgbW9kYWxNYWluQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuLWRpdicpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eWJ1dHRvbkRpdik7XG5cbiAgYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihwcmlvcml0eURpdiwgJ21vZGFsLWFkZC10YXNrLWJ0bicsICdBZGQgdG8gZG8nKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpIHtcbiAgY29uc3QgcHJpb3JpdHlMb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlMb3dCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWJ0bicpO1xuICBwcmlvcml0eUxvd0J0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlMb3dCdG4udGV4dENvbnRlbnQgPSAnTE9XJztcbiAgcHJpb3JpdHlidXR0b25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3dCdG4pO1xuXG4gIGNvbnN0IHByaW9yaXR5TWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5TWVkQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZC1idG4nKTtcbiAgcHJpb3JpdHlNZWRCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5TWVkQnRuLnRleHRDb250ZW50ID0gJ01FRElVTSc7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWVkQnRuKTtcblxuICBjb25zdCBwcmlvcml0eUhpZ2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtYnRuJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLnRleHRDb250ZW50ID0gJ0hJR0gnO1xuICBwcmlvcml0eWJ1dHRvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2hCdG4pO1xufVxuIiwiaW1wb3J0IG1vZGFsRXZlbnRzIGZyb20gJy4vbW9kYWwtZXZlbnRzJztcbmltcG9ydCBsb2FkTW9kYWxUYXNrUGFnZSBmcm9tICcuL21vZGFsLXRhc2stcGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpKSByZXR1cm47XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG5ld01vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1tb2RhbCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TW9kYWwpO1xuXG4gIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxTaWRlYmFyKCk7XG4gIGNyZWF0ZU1vZGFsQ29udGVudERpdigpO1xuXG4gIG5ld01vZGFsLnNob3dNb2RhbCgpO1xuXG4gIC8vIHdlIHdhbnQgdGFzayBwYWdlIHRvIGJlIHRoZSBmaXJzdCB0byBhdXRvbWF0aWNhbGx5IHNob3cgaW4gbW9kYWxcbiAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcblxuICAvLyBsb2FkIG1vZGFsIGV2ZW50cyBzbyB1c2VyIGNhbiBjaGFuZ2UgdGFicy9ldGNcbiAgbW9kYWxFdmVudHMobmV3TW9kYWwsIGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcuLi4nO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDbG9zZScpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZS1idG4nKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1tYWluLWRpdicpO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxTaWRlYmFyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1saW5rJyk7XG4gIC8vIGFkZCBhY3RpdmUgdG8gc2hvdyB0YXNrIHBhZ2UgZmlyc3QgaW4gbW9kYWxcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Rhc2tzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Byb2plY3RzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua05vdGVzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua05vdGVzKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcblxuICBjb25zdCBuZXdFbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdFbnRyeURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctZW50cnknKTtcbiAgbmV3Q29udGVudERpdi5hcHBlbmRDaGlsZChuZXdFbnRyeURpdik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVNb2RhbCgpIHtcbiAgY29uc3QgbmV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LW1vZGFsJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG5cbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld01vZGFsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9kYWxUZXh0QXJlYShjbGFzc05hbWUsIHBsYWNlaG9sZGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAvLyBsaW1pdCBjaGFyYWN0ZXIgbGVuZ3RoIG9uIHRpdGxlIHRleHQgYXJlYXNcbiAgaWYgKGNsYXNzTmFtZS5pbmNsdWRlcygndGl0bGUnKSkge1xuICAgIHRleHRBcmVhLm1heExlbmd0aCA9IDMwO1xuICB9XG5cbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gYCR7cGxhY2Vob2xkZXJ9YDtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG59XG4iLCJpbXBvcnQgeyBkaWFsb2dFdmVudHMgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTmV3VGFza0RpdihjaG9pY2UsIGNvbnRhaW5lckNsYXNzTmFtZSkge1xuICBjb25zdCBtYWluUmlnaHRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcbiAgY29uc3QgY29udGFpbmVyVG9DaGVja0ZvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lckNsYXNzTmFtZX1gKTtcbiAgY2hlY2tJZlRhc2tEaXZFeGlzdHMobWFpblJpZ2h0Qm9keSwgY29udGFpbmVyVG9DaGVja0Zvcik7XG5cbiAgY29uc3Qgbm9UYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vVGFza0Rpdi5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lckNsYXNzTmFtZSk7XG4gIG1haW5SaWdodEJvZHkuYXBwZW5kQ2hpbGQobm9UYXNrRGl2KTtcblxuICBjcmVhdGVOb1Rhc2tDb250YWluZXJUZXh0KG5vVGFza0RpdiwgY2hvaWNlKTtcbiAgY3JlYXRlTm9UYXNrQ29udGFpbmVyQnV0dG9uKG5vVGFza0Rpdik7XG4gIGRpYWxvZ0V2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb1Rhc2tDb250YWluZXJUZXh0KG5vVGFza0RpdiwgY2hvaWNlKSB7XG4gIGNvbnN0IG5vVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vVGFza1RleHQudGV4dENvbnRlbnQgPSBgWW91IGhhdmUgbm8gJHtjaG9pY2V9IHlldCwgbGV0cyBtYWtlIHNvbWUhYDtcbiAgbm9UYXNrVGV4dC5jbGFzc0xpc3QuYWRkKCduby10YXNrLXRleHQnKTtcbiAgbm9UYXNrRGl2LmFwcGVuZENoaWxkKG5vVGFza1RleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb1Rhc2tDb250YWluZXJCdXR0b24obm9UYXNrRGl2KSB7XG4gIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKFxuICAgICdjbGFzcycsXG4gICAgJ25ldy1jb250ZW50IG1haW4tbmV3IGZhLXJlZ3VsYXIgZmEtcGx1cyBmYS0yeGwnXG4gICk7XG4gIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdOZXcnKTtcbiAgbm9UYXNrRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmVGFza0RpdkV4aXN0cyhtYWluUmlnaHRCb2R5LCBjb250YWluZXJUb0NoZWNrRm9yKSB7XG4gIGlmIChjb250YWluZXJUb0NoZWNrRm9yKSB7XG4gICAgbWFpblJpZ2h0Qm9keS5yZW1vdmVDaGlsZChjb250YWluZXJUb0NoZWNrRm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhciB9IGZyb20gJy4uL3BhZ2VzL3Byb2plY3RzJztcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxlZnQnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgY3JlYXRlVG9wU2lkZWJhckNvbnRlbnQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcFNpZGViYXJDb250ZW50KHNpZGViYXIpIHtcbiAgY29uc3QgdG9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXRvcC1jb250YWluZXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpZGViYXJMaW5rcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua3MpO1xuXG4gIGNvbnN0IHRvZGF5TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0b2RheUxpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQodG9kYXlMaW5rSXRlbSk7XG4gIGNvbnN0IHRvZGF5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgdG9kYXlMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2lkZWJhci1saW5rIGZhLXNvbGlkIGZhLXN1bicpO1xuICB0b2RheUxpbmtJdGVtLmFwcGVuZENoaWxkKHRvZGF5TGluayk7XG4gIGNvbnN0IHRvZGF5TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRvZGF5TGlua1RleHQuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcbiAgdG9kYXlMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIHRvZGF5TGlua0l0ZW0uYXBwZW5kQ2hpbGQodG9kYXlMaW5rVGV4dCk7XG5cbiAgY29uc3QgdGFza0xpc3RMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRhc2tMaXN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZCh0YXNrTGlzdExpbmtJdGVtKTtcbiAgY29uc3QgdGFza0xpc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0YXNrTGlzdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1jaGVjaycpO1xuICB0YXNrTGlzdExpbmtJdGVtLmFwcGVuZENoaWxkKHRhc2tMaXN0TGluayk7XG5cbiAgY29uc3QgdGFza0xpc3RMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdGFza0xpc3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcbiAgLy8gYWRkIGFjdGl2ZSB0byB0YXNrIGxpc3QgYmVjYXVzZSB3ZSB3YW50IHRoaXMgcGFnZSB0byBzaG93IGF1dG9tYXRpY2FsbHlcbiAgdGFza0xpc3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgdGFza0xpc3RMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdUYXNrIExpc3QnO1xuICB0YXNrTGlzdExpbmtJdGVtLmFwcGVuZENoaWxkKHRhc2tMaXN0TGlua1RleHQpO1xuXG4gIGNyZWF0ZUJvdHRvbVNpZGViYXJDb250ZW50KHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b21TaWRlYmFyQ29udGVudChzaWRlYmFyKSB7XG4gIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1ib3R0b20tY29udGFpbmVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKTtcblxuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaWRlYmFyTGlua3MuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpbmtzKTtcblxuICBjb25zdCBwcm9qZWN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcm9qZWN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWxpbmsnKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHByb2plY3RMaW5rSXRlbSk7XG4gIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWZpbGUnKTtcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcbiAgY29uc3QgcHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgcHJvamVjdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rVGV4dCk7XG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdExpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBhZGROZXdQcm9qZWN0TGlua0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1wbHVzJyk7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLnRleHRDb250ZW50O1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdExpbmtJdGVtKTtcbiAgY29uc3QgYWRkTmV3cHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhZGROZXdwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1wcm9qZWN0Jyk7XG4gIGFkZE5ld3Byb2plY3RMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgcHJvamVjdCc7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5hcHBlbmRDaGlsZChhZGROZXdwcm9qZWN0TGlua1RleHQpO1xuICAvLyBpZiBhbnlcbiAgYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhcigpO1xuXG4gIGNvbnN0IG5vdGVzTGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBub3Rlc0xpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQobm90ZXNMaW5rSXRlbSk7XG4gIGNvbnN0IG5vdGVzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbm90ZXNMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtYm9vaycpO1xuICBub3Rlc0xpbmtJdGVtLmFwcGVuZENoaWxkKG5vdGVzTGluayk7XG4gIGNvbnN0IG5vdGVzTGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5vdGVzTGlua1RleHQuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcbiAgbm90ZXNMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdOb3Rlcyc7XG4gIG5vdGVzTGlua0l0ZW0uYXBwZW5kQ2hpbGQobm90ZXNMaW5rVGV4dCk7XG5cbiAgY3JlYXRlU2lkZWJhckZvb3RlcihzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhckZvb3RlcihzaWRlYmFyKSB7XG4gIGNvbnN0IHNpZGViYXJGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZvb3RlcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJGb290ZXIpO1xuXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnbmV3LWJ1dHRvbi1kaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICBjb25zdCBuZXdDb250ZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBuZXdDb250ZW50QnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnTmV3Jyk7XG4gIG5ld0NvbnRlbnRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXctY29udGVudCBmYS1zb2xpZCBmYS1wbHVzJyk7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50QnRuKTtcblxuICBjb25zdCBzZXR0aW5nc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZXR0aW5nc0Rpdi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1kaXYnKTtcbiAgc2lkZWJhckZvb3Rlci5hcHBlbmRDaGlsZChzZXR0aW5nc0Rpdik7XG4gIGNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBzZXR0aW5nc0J0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ1NldHRpbmdzJyk7XG4gIHNldHRpbmdzQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2lkZWJhci1zZXR0aW5ncyBmYS1zb2xpZCBmYS1nZWFyJyk7XG4gIHNldHRpbmdzRGl2LmFwcGVuZENoaWxkKHNldHRpbmdzQnRuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNpZGVCYXIoKSB7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkU2lkZUJhciBmcm9tICcuL3VpL3NpZGViYXInO1xuaW1wb3J0IGxvYWRNYWluQ29udGVudCBmcm9tICcuL3VpL21haW5Db250ZW50JztcbmltcG9ydCBwYWdlRXZlbnRzIGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sb2FkU2lkZUJhcigpO1xubG9hZE1haW5Db250ZW50KCk7XG5wYWdlRXZlbnRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=