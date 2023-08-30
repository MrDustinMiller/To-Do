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
.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can, .fa-ellipsis {
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
  align-self: flex-end;
  padding: 0.25rem
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
}

.task-details-modal{ 
  min-height: 20dvh;
  min-width: 20dvw;
  text-align: center;
}

.task-details {
  margin-top: 1em;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-family: var(--font-style)\n}\n\n/* dark mode user-agent-styles */\n\nhtml {\n  color-scheme: dark light;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n --font-color: rgba(10, 10, 7, 0.6);\n --text-hover-color: rgba(24, 24, 17, 0.088);\n --main-background-color:  #ffffff;\n --priority-low-color: green;\n --priority-high-color: red;\n --priority-med-color: rgb(236, 176, 11);;\n --add-tasks-button-color: #5cb2a7;\n --font-style: sans-serif;\n --secondary-background-color: #efefef;\n}\n\nli {\n  list-style-type: none;\n}\n\n.sidebar-left {\n  font-size: 0.8rem;\n  height: 100vh;\n  width:13vw;\n  background-color:var(--secondary-background-color);\n  padding: 8px; \n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-links {\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* ADD ANIMATIONS FOR LINKS LATER */\n.link-item:hover, .add-project-btn:hover {\n  cursor: pointer;\n  background-color:  var(--text-hover-color);\n}\n\n.link-item:not(.project-child) {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.sidebar-project-link {\n  font-size: 1.1rem; \n}\n\n.fa-file {\n  margin-right: 0.5em\n}\n\n.add-project-btn {\n  font-weight: 500;\n  margin-left: 0.5em;\n  margin-top: 0.5em;\n  display: flex;\n} \n\n.add-new-project {\n  margin-left: 0.5em;\n}\n\n.link-item > a {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n\n[class|='link-item active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n}\n\n button[class~='active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n} \n\n.sidebar-top-container{\n  position: relative;\n  top: 3rem;\n  padding-bottom: 10rem;  \n}\n\n.sidebar-bottom-container{\n  position: relative; \n}\n\na {\n  pointer-events: none;\n}\n\n.sidebar-footer {\n  color: var(--font-color);\n  position: absolute;\n  bottom: 0;\n  width: 13vw;\n  height: 2.5rem;\n  left: 0;\n  border-top: 2px solid rgba(85, 83, 83, 0.68);\n  display: flex;\n  align-items: center;  \n  justify-content: space-around;\n}\n\n.sidebar-new:hover, .sidebar-settings:hover, .new-content:hover, .modal-link:hover, .fa-x:hover, \n.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can, .fa-ellipsis {\n  cursor: pointer;\n}\n\n.new-button-div {\n  display: flex;\n}\n\n.main-right {\n  width:100%;\n  background-color: var(--main-background-color);\n  overflow:auto;\n}\n\n .to-do-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  justify-content: center;\n  gap: 5rem;\n  font-size: 2rem;\n  color: var(--font-color)\n} \n\n.notes-container {\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  font-size: 1rem;\n  color: var(--font-color)\n}\n\n.main-new::before {\n  font-size: 5rem;\n}\n\n.page-header {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  justify-content: space-between;\n}\n\n.modal-main-div {\n  display: flex;\n}\n\ndialog {\n  margin: auto;\n  border-radius: 8px;\n  font-size: 1.25rem;\n  color: var(--font-color)\n}\n\n.modal-new-content-div {\n  text-indent: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-task-title-area, .modal-task-details-area, .modal-notes-details-area, .modal-notes-text-area, .modal-project-text-area{\n  text-indent: 10px;\n}\n.modal-notes-details-area {\n  min-height: 14dvh;\n}\n.modal-link {\n  margin-top: .5em;\n}\n\n[class|='modal-link active'] {\n  color: rgb(0, 0, 0);\n}\n\n[class|='modal-link active']::before {\n  content: '🠚';\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  margin-right: .25em;\n\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #c38d9e;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n}\n\n.modal-new-entry {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-sidebar {\n  width: 10dvw;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #fbfbfa;\n  min-height: 35dvh;\n}\n\n.modal-date-input {\n  border-radius: 8px;\n  border: 1.5px solid var(--add-tasks-button-color);\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-size: 1.25rem;\n  color:var(--add-tasks-button-color)\n}\n\n.modal-date-div {  \n  margin-bottom: .5em;\n}\n\n.modal-priority-div {\n  display: flex;\n}\n\n.priority-btn-div {\n  gap: 1rem;\n  display: flex;\n  margin-left: .5em;\n  width: 60%;\n}\n\n.modal-add-note-btn, .modal-add-project-btn {\n  margin-left: 10px;\n  width: 52%;\n}\n\n.modal-add-task-btn, .modal-add-note-btn, .modal-add-project-btn {\n  color:var(--add-tasks-button-color);\n  border: 1.5px solid var(--add-tasks-button-color);\n}\n\n.modal-add-note-btn:hover, .modal-add-project-btn:hover, .modal-add-task-btn:hover {\n  background-color:var(--add-tasks-button-color);\n  color:white;\n  transition: all 0.25s;\n}\n\n.modal-btn, .modal-add-btn {\n  background-color: var(--main-background-color);\n  border-radius: 5px;\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.priority-low-btn {\n  border: 1.5px solid var(--priority-low-color);\n  color: var(--priority-low-color);\n}\n\n.priority-low-btn:hover  {\n background-color: var(--priority-low-color);\n color:var(--main-background-color);\n transition: all 0.25s;\n}\n\n.priority-med-btn {\n  border: 1.5px solid var(--priority-med-color);\n  color: var(--priority-med-color)\n}\n\n.priority-med-btn:hover  {\n  background-color: var(--priority-med-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\n.priority-high-btn {\n  border: 1.5px solid var(--priority-high-color);\n  color: var(--priority-high-color);\n}\n\n.priority-high-btn:hover  {\n  background-color: var(--priority-high-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\ntextarea {\n  resize: none;\n  font-size: 1.25rem;\n  min-width: 29dvw;\n  border: none;\n  overflow: auto;\n  outline: none;\n  padding-top: 0.5rem;\n}\n\n.modal-task-title-area{\n  border-bottom: 1px solid black;\n  min-height: 6dvh;\n}\n\n.modal-task-details-area {\n  min-height: 12dvh;\n  margin-bottom: 1rem;\n}\n\n.modal-project-text-area {\n  min-height: 18dvh;\n}\n\n.to-do-div {\n  display:flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 3rem;\n  min-width: 80dvw;\n  min-height: fit-content;\n}\n\n.to-do-div-left, .to-do-div-right {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n\n.no-task-text-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\n.note-div {\n  margin: 1rem;\n  font-family: var(--font-style);\n  color: var(--font-color);\n  background-color:var(--secondary-background-color);\n  border: 1px solid black;\n  border-radius: 5px;\n  min-width: 20dvh;\n  min-height: max-content;\n  display: flex;\n  flex-direction: column;\n  word-break: break-all;\n}\n\n.note-header{\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem\n}\n\n.note-date {\n  align-self: flex-end;\n  padding: 0.25rem\n}\n\n.note-text-content {\n  align-self: start;\n  padding: 0.5rem\n}\n\n.project-child {\n  border: none;\n  background-color: var(--secondary-background-color);\n  display: flex;\n  justify-content: start;\n  align-content: center;\n  gap: 0.5rem;\n  margin-left: 2.5em;\n  overflow: clip;\n}\n\n.project-trash-div, .header-content {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.task-details-modal{ \n  min-height: 20dvh;\n  min-width: 20dvw;\n  text-align: center;\n}\n\n.task-details {\n  margin-top: 1em;\n}"],"sourceRoot":""}]);
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
/* harmony export */   expandTaskDetails: () => (/* binding */ expandTaskDetails),
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
/* harmony import */ var _ui_modal_modal_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/modal/modal-events */ "./src/ui/modal/modal-events.js");













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
      // closeModalIfClickOnScreen();
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

function expandTaskDetails(element, details) {
  element.addEventListener('click', () => {
    const container =
      document.querySelector('.to-do-container') ||
      document.querySelector('.notes-container') ||
      document.querySelector('.project-container');
    const newModal = document.createElement('dialog');
    newModal.classList.add('new-modal');
    newModal.classList.add('task-details-modal');
    container.appendChild(newModal);
    (0,_ui_modal_modal__WEBPACK_IMPORTED_MODULE_6__.createModalHeader)(newModal, 'Task Details');
    (0,_ui_modal_modal__WEBPACK_IMPORTED_MODULE_6__.createModalTaskDetailsArea)(newModal, details);
    newModal.showModal();
    (0,_ui_modal_modal_events__WEBPACK_IMPORTED_MODULE_10__["default"])(newModal, container);
  });
}

// function closeModalIfClickOnScreen() {
//   const body = document.querySelector('.to-do-container');
//   const modal = document.querySelector('.new-modal');

//   for (const child of body.children) {
//     console.log(child);
//   }

//   body.addEventListener('click', () => {
//     const modal = document.querySelector('.new-modal');

//     if (modal) {
//       removeModal();
//     }
//   });
// }




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
  const textData = titleTextArea.value.trim() || 'N/A';
  return textData;
}

function captureModalDetailsTextData(elementClassName) {
  const detailsTextArea = document.querySelector(`${elementClassName}`);
  const textData = detailsTextArea.value.trim() || 'N/A';
  return textData;
}

function captureModalDateData() {
  const dateInput = document.querySelector('.modal-date-input');
  const dateData = dateInput.value || 'N/A';
  return dateData;
}

function captureModalPriorityLevel() {
  const priorityButtons = document.querySelectorAll('.modal-btn');
  const buttonArray = Array.from(priorityButtons);

  // btn with a color of white is currently selected button
  const priorityClicked = buttonArray.find(
    (element) => element.style.color === 'white'
  );

  // if no button is clicked just return text "LOW"
  if (priorityClicked === undefined) {
    return 'LOW';
  } else return priorityClicked.textContent;
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
    const noteTitle = task.childNodes[0].textContent;
    (0,_ui_dom__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromDom)(task, noteTitle);
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
  toDoDiv.setAttribute('class', `${task.taskTitle}`);
  toDoDiv.classList.add('to-do-div');
  toDoContainer.appendChild(toDoDiv);

  // left
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

  const expandDetails = document.createElement('i');
  expandDetails.setAttribute('class', 'fa-solid fa-ellipsis');
  toDoDivLeft.appendChild(expandDetails);
  // add event handlers to each ellipsis
  (0,_events__WEBPACK_IMPORTED_MODULE_1__.expandTaskDetails)(expandDetails, task.taskDetails);

  // right
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
    if (projectTitle === 'N/A') {
      return;
    }

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
/* harmony export */   createModalHeader: () => (/* binding */ createModalHeader),
/* harmony export */   createModalMainDiv: () => (/* binding */ createModalMainDiv),
/* harmony export */   createModalTaskDetailsArea: () => (/* binding */ createModalTaskDetailsArea),
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

function createModalHeader(newModal, taskHeader) {
  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.textContent = taskHeader || 'Create a new...';
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

function createModalTaskDetailsArea(newModal, details) {
  const taskDetailsDiv = document.createElement('div');
  taskDetailsDiv.classList.add('task-details');
  taskDetailsDiv.textContent = details;
  newModal.appendChild(taskDetailsDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNRO0FBQ2I7QUFDYjs7QUFFckIsdURBQVc7QUFDWCwyREFBZTtBQUNmLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcGFnZXMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvYWRkVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvY2FwdHVyZVRhc2tEYXRhLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tzL2RlbGV0ZVRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FjdGl2ZUF0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9hZGROZXdQcm9qZWN0VG9TaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FkZFRhc2tUb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9kdWUtZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1hZGQtYnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1ub3RlLXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLW5vdGUtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC1wcm9qZWN0LXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXByb2plY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC10YXNrLXBhZ2UtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXRhc2stcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC9yZW1vdmVNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9tb2RhbC90ZXh0LWFyZWEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbm9UYXNrc01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSlcbn1cblxuLyogZGFyayBtb2RlIHVzZXItYWdlbnQtc3R5bGVzICovXG5cbmh0bWwge1xuICBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuOnJvb3Qge1xuIC0tZm9udC1jb2xvcjogcmdiYSgxMCwgMTAsIDcsIDAuNik7XG4gLS10ZXh0LWhvdmVyLWNvbG9yOiByZ2JhKDI0LCAyNCwgMTcsIDAuMDg4KTtcbiAtLW1haW4tYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmY7XG4gLS1wcmlvcml0eS1sb3ctY29sb3I6IGdyZWVuO1xuIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcmVkO1xuIC0tcHJpb3JpdHktbWVkLWNvbG9yOiByZ2IoMjM2LCAxNzYsIDExKTs7XG4gLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yOiAjNWNiMmE3O1xuIC0tZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcbiAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNpZGViYXItbGVmdCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDoxM3Z3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogOHB4OyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItbGlua3Mge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLyogQUREIEFOSU1BVElPTlMgRk9SIExJTktTIExBVEVSICovXG4ubGluay1pdGVtOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XG59XG5cbi5saW5rLWl0ZW06bm90KC5wcm9qZWN0LWNoaWxkKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItcHJvamVjdC1saW5rIHtcbiAgZm9udC1zaXplOiAxLjFyZW07IFxufVxuXG4uZmEtZmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW1cbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59IFxuXG4uYWRkLW5ldy1wcm9qZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4ubGluay1pdGVtID4gYSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG5bY2xhc3N8PSdsaW5rLWl0ZW0gYWN0aXZlJ10ge1xuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XG59XG5cbiBidXR0b25bY2xhc3N+PSdhY3RpdmUnXSB7XG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn0gXG5cbi5zaWRlYmFyLXRvcC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07ICBcbn1cblxuLnNpZGViYXItYm90dG9tLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuYSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2lkZWJhci1mb290ZXIge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTN2dztcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDg1LCA4MywgODMsIDAuNjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2lkZWJhci1uZXc6aG92ZXIsIC5zaWRlYmFyLXNldHRpbmdzOmhvdmVyLCAubmV3LWNvbnRlbnQ6aG92ZXIsIC5tb2RhbC1saW5rOmhvdmVyLCAuZmEteDpob3ZlciwgXG4ubW9kYWwtZGF0ZS1pbnB1dDpob3ZlciwgLm1vZGFsLWJ0bjpob3ZlciwgLmZhLXRyYXNoLCAuZmEtdHJhc2gtY2FuLCAuZmEtZWxsaXBzaXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctYnV0dG9uLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluLXJpZ2h0IHtcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgb3ZlcmZsb3c6YXV0bztcbn1cblxuIC50by1kby1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcbn0gXG5cbi5ub3Rlcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcbn1cblxuLm1haW4tbmV3OjpiZWZvcmUge1xuICBmb250LXNpemU6IDVyZW07XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb2RhbC1tYWluLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmRpYWxvZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4ubW9kYWwtbmV3LWNvbnRlbnQtZGl2IHtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tb2RhbC10YXNrLXRpdGxlLWFyZWEsIC5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLXRleHQtYXJlYSwgLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhe1xuICB0ZXh0LWluZGVudDogMTBweDtcbn1cbi5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEge1xuICBtaW4taGVpZ2h0OiAxNGR2aDtcbn1cbi5tb2RhbC1saW5rIHtcbiAgbWFyZ2luLXRvcDogLjVlbTtcbn1cblxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXSB7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbltjbGFzc3w9J21vZGFsLWxpbmsgYWN0aXZlJ106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICfwn6CaJztcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcblxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5tb2RhbC1uZXctZW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9kYWwtc2lkZWJhciB7XG4gIHdpZHRoOiAxMGR2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYTtcbiAgbWluLWhlaWdodDogMzVkdmg7XG59XG5cbi5tb2RhbC1kYXRlLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbSAwLjEyNWVtIDAuMjVlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKVxufVxuXG4ubW9kYWwtZGF0ZS1kaXYgeyAgXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5tb2RhbC1wcmlvcml0eS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJpb3JpdHktYnRuLWRpdiB7XG4gIGdhcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5tb2RhbC1hZGQtbm90ZS1idG4sIC5tb2RhbC1hZGQtcHJvamVjdC1idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDUyJTtcbn1cblxuLm1vZGFsLWFkZC10YXNrLWJ0biwgLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xufVxuXG4ubW9kYWwtYWRkLW5vdGUtYnRuOmhvdmVyLCAubW9kYWwtYWRkLXByb2plY3QtYnRuOmhvdmVyLCAubW9kYWwtYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcbiAgY29sb3I6d2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbn1cblxuLm1vZGFsLWJ0biwgLm1vZGFsLWFkZC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcmlvcml0eS1sb3ctYnRuIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuLnByaW9yaXR5LWxvdy1idG46aG92ZXIgIHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xuIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xufVxuXG4ucHJpb3JpdHktbWVkLWJ0biB7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcilcbn1cblxuLnByaW9yaXR5LW1lZC1idG46aG92ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuIH1cblxuLnByaW9yaXR5LWhpZ2gtYnRuIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xufVxuXG4ucHJpb3JpdHktaGlnaC1idG46aG92ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbiB9XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1pbi13aWR0aDogMjlkdnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG5cbi5tb2RhbC10YXNrLXRpdGxlLWFyZWF7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgbWluLWhlaWdodDogNmR2aDtcbn1cblxuLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhIHtcbiAgbWluLWhlaWdodDogMTJkdmg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE4ZHZoO1xufVxuXG4udG8tZG8tZGl2IHtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogM3JlbTtcbiAgbWluLXdpZHRoOiA4MGR2dztcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi50by1kby1kaXYtbGVmdCwgLnRvLWRvLWRpdi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuLm5vLXRhc2stdGV4dC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcmVtO1xufVxuXG4ubm90ZS1kaXYge1xuICBtYXJnaW46IDFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAyMGR2aDtcbiAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm5vdGUtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbVxufVxuXG4ubm90ZS1kYXRlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAuMjVyZW1cbn1cblxuLm5vdGUtdGV4dC1jb250ZW50IHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHBhZGRpbmc6IDAuNXJlbVxufVxuXG4ucHJvamVjdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMi41ZW07XG4gIG92ZXJmbG93OiBjbGlwO1xufVxuXG4ucHJvamVjdC10cmFzaC1kaXYsIC5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4udGFzay1kZXRhaWxzLW1vZGFseyBcbiAgbWluLWhlaWdodDogMjBkdmg7XG4gIG1pbi13aWR0aDogMjBkdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDs7O0VBR0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYjtBQUNGOztBQUVBLGdDQUFnQzs7QUFFaEM7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsMkNBQTJDO0NBQzNDLGlDQUFpQztDQUNqQywyQkFBMkI7Q0FDM0IsMEJBQTBCO0NBQzFCLHVDQUF1QztDQUN2QyxpQ0FBaUM7Q0FDakMsd0JBQXdCO0NBQ3hCLHFDQUFxQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtEQUFrRDtFQUNsRCxZQUFZO0VBQ1osYUFBYTtFQUNi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RUE7RUFDRSxvQkFBb0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNzcyByZXNldCAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSlcXG59XFxuXFxuLyogZGFyayBtb2RlIHVzZXItYWdlbnQtc3R5bGVzICovXFxuXFxuaHRtbCB7XFxuICBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbjpyb290IHtcXG4gLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcXG4gLS10ZXh0LWhvdmVyLWNvbG9yOiByZ2JhKDI0LCAyNCwgMTcsIDAuMDg4KTtcXG4gLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmO1xcbiAtLXByaW9yaXR5LWxvdy1jb2xvcjogZ3JlZW47XFxuIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcmVkO1xcbiAtLXByaW9yaXR5LW1lZC1jb2xvcjogcmdiKDIzNiwgMTc2LCAxMSk7O1xcbiAtLWFkZC10YXNrcy1idXR0b24tY29sb3I6ICM1Y2IyYTc7XFxuIC0tZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcXG4gLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1sZWZ0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOjEzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDhweDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXItbGlua3Mge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi8qIEFERCBBTklNQVRJT05TIEZPUiBMSU5LUyBMQVRFUiAqL1xcbi5saW5rLWl0ZW06aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4ubGluay1pdGVtOm5vdCgucHJvamVjdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGluayB7XFxuICBmb250LXNpemU6IDEuMXJlbTsgXFxufVxcblxcbi5mYS1maWxlIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW1cXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn0gXFxuXFxuLmFkZC1uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5saW5rLWl0ZW0gPiBhIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuW2NsYXNzfD0nbGluay1pdGVtIGFjdGl2ZSddIHtcXG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4gYnV0dG9uW2NsYXNzfj0nYWN0aXZlJ10ge1xcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XFxufSBcXG5cXG4uc2lkZWJhci10b3AtY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtOyAgXFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbS1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbn1cXG5cXG5hIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEzdnc7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSg4NSwgODMsIDgzLCAwLjY4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNpZGViYXItbmV3OmhvdmVyLCAuc2lkZWJhci1zZXR0aW5nczpob3ZlciwgLm5ldy1jb250ZW50OmhvdmVyLCAubW9kYWwtbGluazpob3ZlciwgLmZhLXg6aG92ZXIsIFxcbi5tb2RhbC1kYXRlLWlucHV0OmhvdmVyLCAubW9kYWwtYnRuOmhvdmVyLCAuZmEtdHJhc2gsIC5mYS10cmFzaC1jYW4sIC5mYS1lbGxpcHNpcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbi1yaWdodCB7XFxuICB3aWR0aDoxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG92ZXJmbG93OmF1dG87XFxufVxcblxcbiAudG8tZG8tY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59IFxcblxcbi5ub3Rlcy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVxcblxcbi5tYWluLW5ldzo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC1tYWluLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVxcblxcbi5tb2RhbC1uZXctY29udGVudC1kaXYge1xcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYSwgLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtdGV4dC1hcmVhLCAubW9kYWwtcHJvamVjdC10ZXh0LWFyZWF7XFxuICB0ZXh0LWluZGVudDogMTBweDtcXG59XFxuLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxNGR2aDtcXG59XFxuLm1vZGFsLWxpbmsge1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG59XFxuXFxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddOjpiZWZvcmUge1xcbiAgY29udGVudDogJ/CfoJonO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcXG5cXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtbmV3LWVudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtc2lkZWJhciB7XFxuICB3aWR0aDogMTBkdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYTtcXG4gIG1pbi1oZWlnaHQ6IDM1ZHZoO1xcbn1cXG5cXG4ubW9kYWwtZGF0ZS1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKVxcbn1cXG5cXG4ubW9kYWwtZGF0ZS1kaXYgeyAgXFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbn1cXG5cXG4ubW9kYWwtcHJpb3JpdHktZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS1idG4tZGl2IHtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogLjVlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5tb2RhbC1hZGQtbm90ZS1idG4sIC5tb2RhbC1hZGQtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogNTIlO1xcbn1cXG5cXG4ubW9kYWwtYWRkLXRhc2stYnRuLCAubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcXG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsLWFkZC1ub3RlLWJ0bjpob3ZlciwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLm1vZGFsLWFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgY29sb3I6d2hpdGU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxufVxcblxcbi5tb2RhbC1idG4sIC5tb2RhbC1hZGQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbSAwLjEyNWVtIDAuMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3ctYnRuIHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93LWJ0bjpob3ZlciAge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbiBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxufVxcblxcbi5wcmlvcml0eS1tZWQtYnRuIHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpXFxufVxcblxcbi5wcmlvcml0eS1tZWQtYnRuOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG4gfVxcblxcbi5wcmlvcml0eS1oaWdoLWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaC1idG46aG92ZXIgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG4gfVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1pbi13aWR0aDogMjlkdnc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtdGFzay10aXRsZS1hcmVhe1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWluLWhlaWdodDogNmR2aDtcXG59XFxuXFxuLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDEyZHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDE4ZHZoO1xcbn1cXG5cXG4udG8tZG8tZGl2IHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgbWluLXdpZHRoOiA4MGR2dztcXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4udG8tZG8tZGl2LWxlZnQsIC50by1kby1kaXYtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tdGFzay10ZXh0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm5vdGUtZGl2IHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4td2lkdGg6IDIwZHZoO1xcbiAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5vdGUtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbVxcbn1cXG5cXG4ubm90ZS1kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogMC4yNXJlbVxcbn1cXG5cXG4ubm90ZS10ZXh0LWNvbnRlbnQge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjVyZW1cXG59XFxuXFxuLnByb2plY3QtY2hpbGQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4ucHJvamVjdC10cmFzaC1kaXYsIC5oZWFkZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbW9kYWx7IFxcbiAgbWluLWhlaWdodDogMjBkdmg7XFxuICBtaW4td2lkdGg6IDIwZHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIobmFtZU9mUHJvamVjdCkge1xuICBjb25zdCBhbGxTaWRlYmFyTGlua0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstaXRlbScpO1xuICAvLyBvdXIgdG9wIGFuZCBib3R0b20gc2lkZWJhciBsaW5rcyBhcmUgYm90aCBjYWxsZWQgJ3NpZGViYXItbGlua3MnIHNvIHNwZWNpZnlcbiAgLy8gdGhhdCB3ZSB3YW50IHRoZSBib3R0b20gY29udGFpbmVyIHNpZGViYXIgbGlua3MuXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2lkZWJhci1ib3R0b20tY29udGFpbmVyJ1xuICApLmZpcnN0Q2hpbGQ7XG5cbiAgYWxsU2lkZWJhckxpbmtJdGVtcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgLy8gaWYgbGluayBjbGlja2VkIGNsYXNzbGlzdCBlcXVhbCBwcm9qZWN0IG5hbWUgdGhlbiB0aGF0cyB0aGUgc2lkZWJhciBwcm9qZWN0IHdlIGRlbGV0ZVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdFswXSA9PT0gbmFtZU9mUHJvamVjdCkge1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0JywgYCR7bmFtZU9mUHJvamVjdH1gKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGxvYWRUYXNrTGlzdCBmcm9tICcuL3BhZ2VzL3Rhc2tMaXN0JztcbmltcG9ydCBsb2FkTm90ZXNQYWdlIGZyb20gJy4vcGFnZXMvbm90ZXMnO1xuaW1wb3J0IGxvYWRQcm9qZWN0UGFnZSBmcm9tICcuL3BhZ2VzL3Byb2plY3RzJztcbmltcG9ydCBsb2FkVG9kYXlQYWdlIGZyb20gJy4vcGFnZXMvdG9kYXknO1xuaW1wb3J0IHsgd2lwZURvbUNvbnRlbnQgfSBmcm9tICcuL3VpL2RvbSc7XG5pbXBvcnQge1xuICBhZGRBY3RpdmVBdHRyaWJ1dGUsXG4gIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlLFxufSBmcm9tICcuL3VpL2FjdGl2ZUF0dHJpYnV0ZSc7XG5pbXBvcnQgY3JlYXRlTmV3RGlhbG9nTW9kYWwsIHtcbiAgY3JlYXRlTW9kYWxUYXNrRGV0YWlsc0FyZWEsXG59IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwnO1xuaW1wb3J0IGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhciBmcm9tICcuL2RlbGV0ZVByb2plY3RGcm9tU2lkZWJhcic7XG5pbXBvcnQgeyBkZWxldGVBbGxQcm9qZWN0VGFza3NGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgYWRkVGFza0NvbnRhaW5lciB9IGZyb20gJy4vdWkvYWRkVGFza1RvUGFnZSc7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbEhlYWRlciB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwnO1xuaW1wb3J0IG1vZGFsRXZlbnRzIGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUGFnZUV2ZW50TGlzdGVuZXJzKCkge1xuICAvLyBldmVudHMgZm9yIHNpZGViYXJsaW5rICsgaW5kaXZpZHVhbCBwcm9qZWN0IHBhZ2VzXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWl0ZW0nKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgc2lkZWJhckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlKHNpZGViYXJMaW5rcyk7XG4gICAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgICAgY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBhZGROZXdQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBvcGVuIG1vZGFsIHdoZW4gdXNlciBjbGlja3Mgb24gYWRkIHByb2plY3RcbiAgICBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXaGljaFNpZGViYXJMaW5rSXNDbGlja2VkKGUpIHtcbiAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ1RvZGF5JzpcbiAgICAgIGxvYWRUb2RheVBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Rhc2sgTGlzdCc6XG4gICAgICBsb2FkVGFza0xpc3QoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vdGVzJzpcbiAgICAgIGxvYWROb3Rlc1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIG91ciBkZWZhdWx0IHdpbGwgYmUgaW5kaXZpZHVhbCBwcm9qZWN0cyB0aGF0IGFyZSBjbGlja2VkIGlmIG5vdCBhbnkgb2YgdGhlIGFidm9lXG4gICAgZGVmYXVsdDpcbiAgICAgIGxvYWRQcm9qZWN0UGFnZShlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpYWxvZ0V2ZW50cygpIHtcbiAgY29uc3QgbmV3Q29udGVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3LWNvbnRlbnQnKTtcblxuICBuZXdDb250ZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpO1xuICAgICAgLy8gY2xvc2VNb2RhbElmQ2xpY2tPblNjcmVlbigpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFRyYXNoQ2FuRXZlbnRzKCkge1xuICBjb25zdCBwcm9qZWN0VHJhc2hDYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XG5cbiAgcHJvamVjdFRyYXNoQ2FuLmZvckVhY2goKHRyYXNoQ2FuKSA9PiB7XG4gICAgdHJhc2hDYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHBhcmVudFNpYmxpbmdFbGVtZW50VGV4dENvbnRlbnQgPVxuICAgICAgICB0YXJnZXRQYXJlbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXJlbnRTaWJsaW5nRWxlbWVudFRleHRDb250ZW50O1xuXG4gICAgICAvLyB3aWxsIHJlbW92ZSBwcm9qZWN0IGZyb20gc2lkZWJhciBBTkQgZGVsZXRlIHByb2plY3QgZnJvbSBMU1xuICAgICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKHByb2plY3ROYW1lKTtcbiAgICAgIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QtdGFzaycsIHByb2plY3ROYW1lKTtcbiAgICAgIHdpcGVEb21Db250ZW50KCk7XG4gICAgICBhZGRUYXNrQ29udGFpbmVyKCd0by1kby1jb250YWluZXInKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQm94VGFza0V2ZW50cygpIHtcbiAgY29uc3QgdG9Eb0NoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLWNoZWNrYm94Jyk7XG4gIHRvRG9DaGVja0JveC5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBlLnRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgc2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZE5vZGVzO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGNoaWxkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICBzaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZS50YXJnZXQucGFyZW50Tm9kZS5uZXh0U2libGluZy5jaGlsZE5vZGVzO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGNoaWxkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRhc2tEZXRhaWxzKGVsZW1lbnQsIGRldGFpbHMpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJykgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgbmV3TW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LW1vZGFsJyk7XG4gICAgbmV3TW9kYWwuY2xhc3NMaXN0LmFkZCgndGFzay1kZXRhaWxzLW1vZGFsJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01vZGFsKTtcbiAgICBjcmVhdGVNb2RhbEhlYWRlcihuZXdNb2RhbCwgJ1Rhc2sgRGV0YWlscycpO1xuICAgIGNyZWF0ZU1vZGFsVGFza0RldGFpbHNBcmVhKG5ld01vZGFsLCBkZXRhaWxzKTtcbiAgICBuZXdNb2RhbC5zaG93TW9kYWwoKTtcbiAgICBtb2RhbEV2ZW50cyhuZXdNb2RhbCwgY29udGFpbmVyKTtcbiAgfSk7XG59XG5cbi8vIGZ1bmN0aW9uIGNsb3NlTW9kYWxJZkNsaWNrT25TY3JlZW4oKSB7XG4vLyAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJyk7XG4vLyAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpO1xuXG4vLyAgIGZvciAoY29uc3QgY2hpbGQgb2YgYm9keS5jaGlsZHJlbikge1xuLy8gICAgIGNvbnNvbGUubG9nKGNoaWxkKTtcbi8vICAgfVxuXG4vLyAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LW1vZGFsJyk7XG5cbi8vICAgICBpZiAobW9kYWwpIHtcbi8vICAgICAgIHJlbW92ZU1vZGFsKCk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cblxuZXhwb3J0IHtcbiAgZGlhbG9nRXZlbnRzLFxuICBwcm9qZWN0VHJhc2hDYW5FdmVudHMsXG4gIGNoZWNrQm94VGFza0V2ZW50cyxcbiAgZXhwYW5kVGFza0RldGFpbHMsXG4gIC8vIGNsb3NlTW9kYWxJZkNsaWNrT25TY3JlZW4sXG59O1xuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrLCBwYWdlSGVhZGVyVGV4dCkge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKTtcblxuICAvL2lmIG5vIGRhdGFcbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gaWYgbm8gdmFsdWUgaW4gdmFyaWFibGUgdGhlbiB3ZSBhcmUgbm90IGFkZGluZyBhIHRhc2sgdG8gYSBwcm9qZWN0XG4gICAgaWYgKCFwYWdlSGVhZGVyVGV4dCkge1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3RcbiAgICAgIGNvbnN0IGRhdGFBcnJheSA9IFt0YXNrXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZCBwcm9qZWN0IHBhZ2UgdGl0bGUgcHJvcGVydHkgdG8gdGFza1xuICAgICAgdGFzay5wcm9qZWN0UGFnZSA9IHBhZ2VIZWFkZXJUZXh0O1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3QgYW5kIGluZGl2aWR1YWwgcHJvamVjdCBwYWdlIHRpdGxlXG4gICAgICBjb25zdCBkYXRhQXJyYXkgPSBbdGFza107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0eXBlfWAsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXNrLnByb2plY3RQYWdlID0gcGFnZUhlYWRlclRleHQ7XG5cbiAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIGV4aXN0aW5nIHRhc2tzIG9mICd0eXBlJ1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKSk7XG5cbiAgICBkYXRhQXJyYXkucHVzaCh0YXNrKTtcblxuICAgIC8vIHNldCBuZXcgYXJyYXkgd2l0aCBhbGwgdGFza3Mgb2xkIGFuZCBuZXcgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSh0eXBlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3R5cGV9YCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCB0YXNrVGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKGAke3R5cGV9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc1tpXS50YXNrVGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgc2V0VG9Mb2NhbFN0b3JhZ2VBZnRlckRlbGV0aW5nKHR5cGUsIHRhc2tzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoYCR7dHlwZX1gKTtcbiAgaWYgKCF0YXNrcykgcmV0dXJuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NbaV0ucHJvamVjdFBhZ2UgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gIC8vIHJlZmFjdG9yIGJlbG93XG4gIC8vIGlmIG5vIHRhc2tzIGluIGVpdGhlciAndG9Ebycgb3IgJ25vdGVzJyBMUyBhcnJheXMgZGVsZXRlIHRoZSBrZXkgZnJvbSBMU1xuICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICd0b0RvJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gICAgbWFrZU5ld1Rhc2tEaXYoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dHlwZX1gKTtcbiAgICBtYWtlTmV3VGFza0Rpdignbm90ZXMnLCAnbm90ZXMtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBpZiBubyB0YXNrcyBpbiBlaXRoZXIgJ3Byb2plY3QtdGFzaycgb3IgJ3Byb2plY3QnIExTIGFycmF5cyBkZWxldGUgdGhlIGtleSBmcm9tIExTXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdHlwZSA9PT0gJ3Byb2plY3QtdGFzaycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge1xuICBzZXRUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG4vLyBydW4gd2hlbiBsaW5rIGlzIGNsaWNrZWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROb3Rlc1BhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBub3RlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3Rpbmcgbm90ZXMgc28gbWFrZSBhIHRhc2sgY29udGFpbmVyIHNvIHVzZXIgY2FuIG1ha2Ugc29tZSBuZXcgbm90ZXNcbiAgaWYgKCFub3Rlcykge1xuICAgIG1ha2VOZXdUYXNrRGl2KCdub3RlcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFeGlzdGluZ05vdGVzVG9QYWdlKCdub3RlcycpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV4aXN0aW5nTm90ZXNUb1BhZ2UodHlwZSkge1xuICAvLyBnZXQgYWxsIG9mIHRoZSB1c2VycyBub3RlcyBmcm9tIExTXG4gIGNvbnN0IG5vdGVzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbm90ZXMnKTtcblxuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCBub3RlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXZGb3JQcm9qZWN0cyBmcm9tICcuLi91aS9ub1Rhc2tzTWVzc2FnZSc7XG5pbXBvcnQgeyBkaWFsb2dFdmVudHMsIHByb2plY3RUcmFzaENhbkV2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyIGZyb20gJy4uL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHsgYnVpbGRUb0RvVWkgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcblxuLy9ydW5zIHdoZW4gYSBpbmRpdmlkdWFsIHByb2plY3QgaXMgY2xpY2tlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RQYWdlKGUpIHtcbiAgY3JlYXRlSGVhZGVyKCdwcm9qZWN0Jyk7XG4gIHByb2plY3RUcmFzaENhbkV2ZW50cygpO1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snKTtcblxuICBpZiAoIXByb2plY3RUYXNrcykge1xuICAgIG1ha2VOZXdUYXNrRGl2Rm9yUHJvamVjdHMoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlZmFjdG9yIHRvIHNlcGVyYXRlIGZ1bmN0aW9uXG4gICAgY29uc3QgaW5kaXZpZGl1YWxQcm9qZWN0VGFzayA9IHByb2plY3RUYXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0UGFnZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gdGFzayBpbiBwcm9qZWN0IChqdXN0IG1hZGUpIHNob3cgbm8gdGFzayBtZXNzYWdlXG4gICAgaWYgKGluZGl2aWRpdWFsUHJvamVjdFRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICBtYWtlTmV3VGFza0RpdkZvclByb2plY3RzKCd0YXNrcycsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgZGlhbG9nRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1aWxkIHRhc2sgb24gcHJvamVjdCBwYWdlIGNsaWNrZWRcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBpbmRpdmlkaXVhbFByb2plY3RUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYnVpbGRUb0RvVWkodGFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gaXMgcmFuIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4aXN0aW5nUHJvamVjdHNUb1NpZGViYXIoKSB7XG4gIC8vIHdlIGFsc28gd2FudCB0byBjaGVjayBpZiB0aGVyZSBpcyBhbnkgcHJvamVjdHMgb24gcGFnZSBsb2FkIGluIExTIHRvIHNob3dcbiAgLy8gdW5kZXIgcHJvamVjdHMgdGFiIG9uIHBhZ2UgbG9hZCBhc3dlbGwuXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdCcpO1xuXG4gIGlmICghcHJvamVjdHMpIHJldHVybjtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0LnRhc2tUaXRsZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi4vdWkvaGVhZGVyJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgYWRkVGFza1RvUGFnZSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBmdW5jdGlvbiBpcyByYW4gb24gcGFnZSBsb2FkIGFuZCBvbiBsaW5rIGNsaWNrXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFza0xpc3QoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3RpbmcgdG8tZG8ncyBzbyBtYWtlIGEgdGFzayBjb250YWluZXIgc28gdXNlciBjYW4gbWFrZSBzb21lIG5ldyB0YXNrc1xuICBpZiAoIXRvRG8pIHtcbiAgICBtYWtlTmV3VGFza0RpdigndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkRXhpc3RpbmdUb0RvVG9QYWdlKCd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdUb0RvVG9QYWdlKHR5cGUpIHtcbiAgLy8gZ2V0IGFsbCBvZiB0aGUgdXNlcnMgdGFza3MgZnJvbSBMU1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIHRvRG8uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzayk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIC8vIHNob3cgbm8gaXRlbXMgc2F2ZWQgaW4gZGlzcGxheSBpZiBubyBkYXRhXG4gICAgbWFrZU5ld1Rhc2tEaXYoJ2l0ZW1zIHNhdmVkJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV4aXN0aW5nRGF0YVRvVG9kYXlQYWdlKCdub3RlcycsICd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdEYXRhVG9Ub2RheVBhZ2UodHlwZU9uZSwgdHlwZVR3bykge1xuICAvL2dldCBhbGwgb2YgdGhlIHVzZXJzIG5vdGVzL3Rhc2tzIGZyb20gTFNcbiAgY29uc3Qgbm90ZXMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycpO1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvRG8nKTtcblxuICBpZiAobm90ZXMpIHtcbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBhZGRUYXNrVG9QYWdlKHR5cGVPbmUsIG5vdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRhc2tzKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYWRkVGFza1RvUGFnZSh0eXBlVHdvLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2V0VG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZFRhc2tUb1BhZ2UgZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG8odHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpIHtcbiAgLy8gd2UgZG9udCB3YW50IHByb2plY3RzIGJlaW5nIGFkZGVkIGxpa2UgdGFza3Mvbm90ZXMgd2lsbCBiZVxuICAvLyByZWZhY3RvciBsYXRlclxuICBpZiAodHlwZSA9PT0gJ25vdGVzJyB8fCB0eXBlID09PSAndG9EbycpIHtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrKTtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UodHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpO1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIH1cbn1cbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb25zIHRvIG1ha2Ugb3VyIHRvZG8gb2JqZWN0IHdpdGgga2V5L3ZhbHVlIHBhaXJzIGFzc2lnbmVkXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBjYXB0dXJlTW9kYWxEZXRhaWxzVGV4dERhdGEoJy5tb2RhbC10YXNrLWRldGFpbHMtYXJlYScpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGNhcHR1cmVNb2RhbERhdGVEYXRhKCk7XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBjYXB0dXJlTW9kYWxQcmlvcml0eUxldmVsKCk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlLCBwcmlvcml0eUxldmVsIH07XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YSgnLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJyk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC1ub3Rlcy10aXRsZS1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKCcubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEYXRlID0gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKTtcbiAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUgfTtcbn1cblxuLy8gY2FwdHVyZSBhbGwgdXNlciBpbnB1dHMgb24gbW9kYWxcbi8vIG9ubHkgbmVlZCBvbmUgZnVuY2l0b24gaGVyZSBiZWxvdywgd2lsbCByZWZhY3RvciBsYXRlclxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YShlbGVtZW50Q2xhc3NOYW1lKSB7XG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnRDbGFzc05hbWV9YCk7XG4gIGNvbnN0IHRleHREYXRhID0gdGl0bGVUZXh0QXJlYS52YWx1ZS50cmltKCkgfHwgJ04vQSc7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKGVsZW1lbnRDbGFzc05hbWUpIHtcbiAgY29uc3QgZGV0YWlsc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50Q2xhc3NOYW1lfWApO1xuICBjb25zdCB0ZXh0RGF0YSA9IGRldGFpbHNUZXh0QXJlYS52YWx1ZS50cmltKCkgfHwgJ04vQSc7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGNvbnN0IGRhdGVEYXRhID0gZGF0ZUlucHV0LnZhbHVlIHx8ICdOL0EnO1xuICByZXR1cm4gZGF0ZURhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByaW9yaXR5TGV2ZWwoKSB7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcbiAgY29uc3QgYnV0dG9uQXJyYXkgPSBBcnJheS5mcm9tKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgLy8gYnRuIHdpdGggYSBjb2xvciBvZiB3aGl0ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQgYnV0dG9uXG4gIGNvbnN0IHByaW9yaXR5Q2xpY2tlZCA9IGJ1dHRvbkFycmF5LmZpbmQoXG4gICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuc3R5bGUuY29sb3IgPT09ICd3aGl0ZSdcbiAgKTtcblxuICAvLyBpZiBubyBidXR0b24gaXMgY2xpY2tlZCBqdXN0IHJldHVybiB0ZXh0IFwiTE9XXCJcbiAgaWYgKHByaW9yaXR5Q2xpY2tlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdMT1cnO1xuICB9IGVsc2UgcmV0dXJuIHByaW9yaXR5Q2xpY2tlZC50ZXh0Q29udGVudDtcbn1cblxuZXhwb3J0IHtcbiAgY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhLFxuICBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEsXG4gIGNhcHR1cmVNb2RhbE5vdGVQYWdlRGF0YSxcbn07XG4iLCJpbXBvcnQgeyByZW1vdmVUYXNrRnJvbURvbSB9IGZyb20gJy4uL3VpL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodHlwZSwgZWxlbWVudCkge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IHRhc2sgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBub3RlVGl0bGUgPSB0YXNrLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgcmVtb3ZlVGFza0Zyb21Eb20odGFzaywgbm90ZVRpdGxlKTtcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBhZGRBY3RpdmVBdHRyaWJ1dGUoZSkge1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobGlua0FycmF5KSB7XG4gIGxpbmtBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRBY3RpdmVBdHRyaWJ1dGUsIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlIH07XG4iLCIvLyByZWZhY3RvciBiZWxvd1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdFNpZGViYXJMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItcHJvamVjdC1saW5rJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3Byb2plY3RUaXRsZX0gcHJvamVjdC1jaGlsZGApO1xuICAvLyBhZGQgbGluayBpdGVtIGNsYXNzIG5hbWUgc28gd2UgY2FuIHJldXNlIG90aGVyIG1vZHVsZXMgZm9yIGFjdGl2ZSBsaW5rIGNsaWNrZWRcbiAgbmV3UHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIG5ld1Byb2plY3RMaW5rLnRleHRDb250ZW50ID0gYCR7cHJvamVjdFRpdGxlfWA7XG4gIC8vIGluc2VydCBuZXcgdXNlciBwcm9qZWN0IGJ1dHRvbiBBRlRFUiBzaWRlYmFyIHByb2plY3QgbGlua1xuICBwcm9qZWN0U2lkZWJhckxpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG5ld1Byb2plY3RMaW5rKTtcblxuICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHByb2plY3RzSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNsaXBib2FyZC1saXN0Jyk7XG4gIG5ld1Byb2plY3RMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHByb2plY3RzSWNvbik7XG5cbiAgLy8gaWYgcHJvamVjdCB0aXRsZSBpcyA+IDE1IGNoYXJhY3RlcnMgYW5kIGEgdGl0bGUgdGhhdCB3aWxsIHNob3cgb24gaG92ZXJcbiAgY29uc3QgcHJvamVjdFRpdGxlQXJyYXkgPSBwcm9qZWN0VGl0bGUuc3BsaXQoJycpO1xuICBpZiAocHJvamVjdFRpdGxlQXJyYXkubGVuZ3RoID4gMTUpIHtcbiAgICBuZXdQcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7cHJvamVjdFRpdGxlfWApO1xuICB9XG59XG5cbi8vIHJ1bnMgb25seSB3aGVuIHVzZXIgaXMgYWRkaW5nIGEgbmV3IHByb2plY3QgdG8gc2lkZWJhclxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2hpbGQnKTtcbiAgbGV0IHByb2plY3RFeGlzdHMgPSBmYWxzZTtcblxuICBzaWRlYmFyUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LnRleHRDb250ZW50ID09PSBwcm9qZWN0VGl0bGUpIHtcbiAgICAgIGFsZXJ0KCdZb3UgYWxyZWFkeSBoYXZlIGEgcHJvamVjdCB3aXRoIHRoYXQgdGl0bGUhJyk7XG4gICAgICBwcm9qZWN0RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0RXhpc3RzO1xufVxuXG5leHBvcnQgeyBjaGVja0lmUHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzIH07XG4iLCJpbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuLi90YXNrcy9kZWxldGVUYXNrcyc7XG5pbXBvcnQgeyBjaGVja0JveFRhc2tFdmVudHMsIGV4cGFuZFRhc2tEZXRhaWxzIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza1RvUGFnZSh0eXBlLCB0YXNrLCBjb250YWluZXJOYW1lKSB7XG4gIC8vIHJlZmFjdG9yIGFsbCB0aGlzIGxhdGVyXG4gIGlmICh0eXBlID09PSAndG9EbycpIHtcbiAgICAvLyB0eXBlIHdvdWxkIGVxdWFsICd0b0RvJ1xuICAgIGFkZFRvRG9Ub1BhZ2UodGFzayk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QtdGFzaycpIHtcbiAgICBhZGRUb0RvVG9QYWdlKHRhc2ssIGNvbnRhaW5lck5hbWUpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdub3RlcycpIHtcbiAgICBhZGROb3Rlc1RvUGFnZSh0YXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFRvRG9VaSh0YXNrKSB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7dGFzay50YXNrVGl0bGV9YCk7XG4gIHRvRG9EaXYuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGl2Jyk7XG4gIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG5cbiAgLy8gbGVmdFxuICBjb25zdCB0b0RvRGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGl2TGVmdC5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYtbGVmdCcpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvRG9EaXZMZWZ0KTtcblxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1jaGVja2JveCcpO1xuICB0b0RvRGl2TGVmdC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIC8vIGFkZCBldmVudCBoYW5kbGVycyB0byBlYWNoIGNoZWNrYm94XG4gIGNoZWNrQm94VGFza0V2ZW50cygpO1xuXG4gIGNvbnN0IHRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvRG8uY2xhc3NMaXN0LmFkZCgndG8tZG8nKTtcbiAgdG9Eby50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza1RpdGxlfWA7XG4gIHRvRG9EaXZMZWZ0LmFwcGVuZENoaWxkKHRvRG8pO1xuXG4gIGNvbnN0IGV4cGFuZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGV4cGFuZERldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1lbGxpcHNpcycpO1xuICB0b0RvRGl2TGVmdC5hcHBlbmRDaGlsZChleHBhbmREZXRhaWxzKTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXJzIHRvIGVhY2ggZWxsaXBzaXNcbiAgZXhwYW5kVGFza0RldGFpbHMoZXhwYW5kRGV0YWlscywgdGFzay50YXNrRGV0YWlscyk7XG5cbiAgLy8gcmlnaHRcbiAgY29uc3QgdG9Eb0RpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXZSaWdodC5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYtcmlnaHQnKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGl2UmlnaHQpO1xuXG4gIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0by1kby1kYXRlJyk7XG4gIHRvRG9EYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGF0ZX1gO1xuICB0b0RvRGl2UmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVsZXRlLWJ0bicpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2gnKTtcbiAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0RlbGV0ZSBUYXNrJyk7XG4gIHRvRG9EaXZSaWdodC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gZWFjaCB0cmFzaCBjYW4gaWNvbiBtYWRlXG4gIGRlbGV0ZVRhc2soJ3RvRG8nLCBkZWxldGVUYXNrQnRuKTtcblxuICBjb25zdCB0b0RvUHJpb3JpdHlMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9Eb1ByaW9yaXR5TGV2ZWwuY2xhc3NMaXN0LmFkZCgndG8tZG8tcHJpb3JpdHktbGV2ZWwnKTtcbiAgdG9Eb1ByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgJHt0YXNrLnByaW9yaXR5TGV2ZWx9YDtcbiAgdG9Eb0RpdlJpZ2h0LmFwcGVuZENoaWxkKHRvRG9Qcmlvcml0eUxldmVsKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Eb1RvUGFnZSh0YXNrLCBjb250YWluZXJOYW1lKSB7XG4gIGlmIChjb250YWluZXJOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgYWRkVGFza0NvbnRhaW5lcigncHJvamVjdC1jb250YWluZXInKTtcbiAgICBidWlsZFRvRG9VaSh0YXNrKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCd0by1kby1jb250YWluZXInKTtcbiAgICBidWlsZFRvRG9VaSh0YXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ29udGFpbmVyKGNsYXNzTmFtZSkge1xuICAvLyBpZiBjb250YWluZXIgYWxyZWFkeSBleGlzdHMganVzdCByZXR1cm4gc28gd2UgZG9udCBnZXQgZHVwbGljYXRlc1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApKSByZXR1cm47XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gYWRkTm90ZXNUb1BhZ2UodGFzaykge1xuICBhZGRUYXNrQ29udGFpbmVyKCdub3Rlcy1jb250YWluZXInKTtcbiAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgbm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGUtZGl2Jyk7XG4gIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVEaXYpO1xuXG4gIGNvbnN0IG5vdGVIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdub3RlLWhlYWRlcicpO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVIZWFkZXJEaXYpO1xuXG4gIGNvbnN0IG5vdGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tUaXRsZX1gO1xuICBub3RlSGVhZGVyRGl2LmFwcGVuZENoaWxkKG5vdGVIZWFkZXIpO1xuXG4gIGNvbnN0IGRlbGV0ZU5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbGV0ZU5vdGVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS14Jyk7XG4gIGRlbGV0ZU5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbm90ZS1jbG9zZS1idG4nKTtcbiAgbm90ZUhlYWRlckRpdi5hcHBlbmRDaGlsZChkZWxldGVOb3RlQnRuKTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXIgdG8gZWFjaCB0cmFzaCBjYW4gaWNvbiBtYWRlXG4gIGRlbGV0ZVRhc2soJ25vdGVzJywgZGVsZXRlTm90ZUJ0bik7XG5cbiAgY29uc3Qgbm90ZVRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3RlVGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbm90ZS10ZXh0LWNvbnRlbnQnKTtcbiAgbm90ZVRleHRDb250ZW50LnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGV0YWlsc31gO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVUZXh0Q29udGVudCk7XG5cbiAgY29uc3Qgbm90ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVEYXRlLmNsYXNzTGlzdC5hZGQoJ25vdGUtZGF0ZScpO1xuICBub3RlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza0RhdGV9YDtcbiAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlRGF0ZSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2tDb250YWluZXIsIGJ1aWxkVG9Eb1VpIH07XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyIGZyb20gJy4uL2RlbGV0ZVByb2plY3RGcm9tU2lkZWJhcic7XG5pbXBvcnQgeyBhZGRUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi9hZGRUYXNrVG9QYWdlJztcblxuZnVuY3Rpb24gd2lwZURvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vIGlmIG1haW5Db250ZW50IGhhcyBhIGNoaWxkLCByZXBsYWNlIHcvZW1wdHkgc3RyaW5nIHNvIHdlIGNhbiBzaG93IG5leHQgbmF2IGl0ZW1zIGNsaWNrZWQgY29udGVudFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXBlTW9kYWxDb250ZW50KGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gaWYgbW9kYWwgbWFpbiBoYXMgYSBjaGlsZCwgcmVwbGFjZSB3L2VtcHR5IHN0cmluZyBzbyB3ZSBjYW4gc2hvdyBuZXh0IG5hdiBpdGVtcyBjbGlja2VkIGNvbnRlbnRcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuLy8gcmVmYWN0b3IgYmVsb3dcbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRG9tKHRhc2ssIHRhc2tUaXRsZSkge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICBpZiAodG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdC10YXNrJywgdGFza1RpdGxlKTtcbiAgfSBlbHNlIGlmICh0b0RvQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ3RvLWRvLWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgndG9EbycsIHRhc2tUaXRsZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ25vdGVzJywgdGFza1RpdGxlKTtcbiAgfVxuXG4gIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodGFzayk7XG5cbiAgLy8gaWYgcHJvamVjdCBwYWdlIGhhcyBubyBjaGlsZHJlbiB0aGVuIHdlJ2xsIGdyYWIgdGhlIHBhZ2UgaGVhZGVyIGFuZCBkZWxldGVcbiAgLy8gaXQgZnJvbSB0aGUgc2lkZWJhclxuICBpZiAoXG4gICAgdG9Eb0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiZcbiAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID09PSAncHJvamVjdC1jb250YWluZXInXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50JykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKGN1cnJlbnRQYWdlKTtcbiAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpIHtcbiAgY29uc3Qgbm9UYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrLXRleHQnKTtcbiAgY29uc3QgbmV3Q29udGVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5ldycpO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gIGlmIChjb250YWluZXIuY29udGFpbnMobm9UYXNrVGV4dCkpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9UYXNrVGV4dCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0NvbnRlbnRCdG4pO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHdpcGVEb21Db250ZW50LFxuICB3aXBlTW9kYWxDb250ZW50LFxuICByZW1vdmVUYXNrRnJvbURvbSxcbiAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0eXBlKSB7XG4gIC8vIHVzaW5nIGlubmVySFRNTCBzbyB3ZSBjYW4gZ3JhYiB0aGUgaWNvbiBhcyB3ZWxsIGFzIHRleHRcbiAgY29uc3Qgc2lkZWJhckxpbmtDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmlubmVySFRNTDtcbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuICAvLyBwYWdlSGVhZGVyLmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudCcpO1xuICBoZWFkZXJDb250ZW50LmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBjb25zdCBwcm9qZWN0VHJhc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VHJhc2hEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10cmFzaC1kaXYnKTtcbiAgICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUcmFzaERpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcHJvamVjdFRyYXNoQ2FuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2gtY2FuJyk7XG4gICAgcHJvamVjdFRyYXNoRGl2LmFwcGVuZENoaWxkKHByb2plY3RUcmFzaENhbik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUcmFzaFRleHQudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIHByb2plY3RUcmFzaERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VHJhc2hUZXh0KTtcbiAgfVxuXG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xufVxuIiwiaW1wb3J0IGxvYWRUYXNrTGlzdCBmcm9tICcuLi9wYWdlcy90YXNrTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCByaWdodE1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0TWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1yaWdodCcpO1xuICBib2R5LmFwcGVuZENoaWxkKHJpZ2h0TWFpbkNvbnRlbnQpO1xuXG4gIC8vIG9uIHBhZ2UgbG9hZCBvcGVuIHRvICd0YXNrLWxpc3QnXG4gIGxvYWRUYXNrTGlzdCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGREdWVEYXRlRGl2KGVsZW1lbnQpIHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRhdGUtZGl2Jyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbiAgYnVpbGREdWVEYXRlTGFiZWwoZGF0ZURpdik7XG4gIGJ1aWxkRHVlRGF0ZUlucHV0KGRhdGVEaXYpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVMYWJlbChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWxhYmVsJyk7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVJbnB1dChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uKGVsZW1lbnQsIGNsYXNzTmFtZSwgYnRuVGV4dCkge1xuICBjb25zdCBhZGROZXdCdG5Nb2RhbFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkTmV3QnRuTW9kYWxQYWdlLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkLWJ0bicpO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UudGV4dENvbnRlbnQgPSBgJHtidG5UZXh0fWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkTmV3QnRuTW9kYWxQYWdlKTtcbn1cbiIsImltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4uL2FjdGl2ZUF0dHJpYnV0ZSc7XG5pbXBvcnQgbG9hZE1vZGFsVGFza1BhZ2UgZnJvbSAnLi9tb2RhbC10YXNrLXBhZ2UnO1xuaW1wb3J0IGxvYWRNb2RhbFByb2plY3RQYWdlIGZyb20gJy4vbW9kYWwtcHJvamVjdC1wYWdlJztcbmltcG9ydCBsb2FkTW9kYWxOb3Rlc1BhZ2UgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UnO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxTaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtbGluaycpO1xuICBjb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlLWJ0bicpO1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKTtcblxuICBtb2RhbFNpZGViYXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShtb2RhbFNpZGViYXJMaW5rcyk7XG4gICAgICBhZGRBY3RpdmVBdHRyaWJ1dGUoZSk7XG4gICAgICBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBuZXdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgICByZW1vdmVNb2RhbCgpO1xuICB9KTtcblxuICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGxpbmspIHtcbiAgc3dpdGNoIChsaW5rLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ1Rhc2snOlxuICAgICAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Byb2plY3QnOlxuICAgICAgbG9hZE1vZGFsUHJvamVjdFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vdGUnOlxuICAgICAgbG9hZE1vZGFsTm90ZXNQYWdlKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza05vdGVzRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBub1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJyk7XG5cbiAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKTtcbiAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICBhZGRUb0RvKCdub3RlcycsIHRhc2spO1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgaWYgKG5vVGFza0NvbnRhaW5lcikge1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChub1Rhc2tDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrTm90ZXNFdmVudHMgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1vZGFsTm90ZXNQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtbm90ZXMtdGl0bGUtYXJlYScsXG4gICAgJ1RpdGxlOiBHcm9jZXJ5IExpc3QuJyxcbiAgICBtb2RhbE1haW5Db250ZW50XG4gICk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhJyxcbiAgICAnRGV0YWlsczogZnJ1aXQsIHdhdGVycywgbWVhdCcsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsRHVlRGF0ZURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24obW9kYWxNYWluQ29udGVudCwgJ21vZGFsLWFkZC1ub3RlLWJ0bicsICdBZGQgTm90ZScpO1xuXG4gIC8vIGNhbGwgc3BlY2lmaWMgbW9kYWwgbm90ZSBwYWdlIGV2ZW50c1xuICBtb2RhbFRhc2tOb3Rlc0V2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsUHJvamVjdFBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyLCB7XG4gIGNoZWNrSWZQcm9qZWN0TmFtZUFscmVhZHlFeGlzdHMsXG59IGZyb20gJy4uL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuaW1wb3J0IGFkZFBhZ2VFdmVudExpc3RlbmVycyBmcm9tICcuLi8uLi9ldmVudHMnO1xuaW1wb3J0IHsgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlIH0gZnJvbSAnLi4vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxUYXNrUHJvamVjdEV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWJ0bicpO1xuXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGNhcHR1cmUgdG9kbyBvYmplY3QgaW4gdGFzayB2YXJpYWJsZVxuICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEoKTtcbiAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcblxuICAgIC8vIGRlc3RydWN0dXJlIGFuZCByZW5hbWUgdG8gcHJvamVjdCB0aXRsZSBzbyB3ZSBjYW4gYWRkIHRvIHNpZGViYXIgdGhyb3VnaCBmdW5jdGlvbiBjYWxsXG4gICAgY29uc3QgeyB0YXNrVGl0bGU6IHByb2plY3RUaXRsZSB9ID0gdGFzaztcbiAgICBpZiAocHJvamVjdFRpdGxlID09PSAnTi9BJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpO1xuICAgIC8vIGlmIHdlIGhhdmUgYSBkdXBsaWNhdGUgcHJvamVjdCBuYW1lIHJldHVybiwgZWxzZSBhZGQgcHJvamVjdCB0byBzaWRlYmFyXG4gICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRvRG8oJ3Byb2plY3QnLCB0YXNrKTtcbiAgICAgIGFkZE5ld1Byb2plY3RUb1NpZGViYXIocHJvamVjdFRpdGxlKTtcbiAgICAgIGFkZFBhZ2VFdmVudExpc3RlbmVycygpO1xuICAgICAgcmVtb3ZlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgd2lwZU1vZGFsQ29udGVudCB9IGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgYnVpbGRNb2RhbER1ZURhdGVEaXYgZnJvbSAnLi9kdWUtZGF0ZSc7XG5pbXBvcnQgYnVpbGRNb2RhbFRleHRBcmVhIGZyb20gJy4vdGV4dC1hcmVhJztcbmltcG9ydCBidWlsZE1vZGFsQWRkVGFza0J1dHRvbiBmcm9tICcuL21vZGFsLWFkZC1idXR0b24nO1xuaW1wb3J0IG1vZGFsVGFza1Byb2plY3RFdmVudHMgZnJvbSAnLi9tb2RhbC1wcm9qZWN0LXBhZ2UtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1vZGFsUHJvamVjdFBhZ2UoKSB7XG4gIC8vIGlmIGl0IGV4aXN0cyB0aGVuIGRvbnQgYnVpbGQgdGhlIHBhZ2UgYmVjYXVzZSBpdHMgb3BlbiBhbHJlYWR5LCBqdXN0IHJldHVyblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJykpIHJldHVybjtcblxuICBjb25zdCBtb2RhbE1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICB3aXBlTW9kYWxDb250ZW50KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXByb2plY3QtdGV4dC1hcmVhJyxcbiAgICAnVGl0bGU6IEJ1aWxkIG5ldyBmZW5jZS4nLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24oXG4gICAgbW9kYWxNYWluQ29udGVudCxcbiAgICAnbW9kYWwtYWRkLXByb2plY3QtYnRuJyxcbiAgICAnQWRkIFByb2plY3QnXG4gICk7XG5cbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCBwcm9qZWN0IHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza1Byb2plY3RFdmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSB9IGZyb20gJy4uLy4uL3Rhc2tzL2NhcHR1cmVUYXNrRGF0YSc7XG5pbXBvcnQgYWRkVG9EbyBmcm9tICcuLi8uLi90YXNrcy9hZGRUYXNrcyc7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5pbXBvcnQgeyBjaGVja0Zvck5vVGFza01lc3NhZ2UgfSBmcm9tICcuLi9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbFRhc2tQYWdlRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcicpO1xuICBjb25zdCBwYWdlSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItY29udGVudCcpO1xuXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChwYWdlSGVhZGVyID09PSBudWxsKSB7XG4gICAgICBwYWdlSGVhZGVyID0gJyAnO1xuICAgICAgcGFnZUhlYWRlclRleHQgPSAnICc7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgdGFzayBzaG91bGQgYmUgYXR0YWNoZWQgdG8gYSBwcm9qZWN0IG9yIG5vdFxuICAgIGlmIChwYWdlSGVhZGVyLm5leHRTaWJsaW5nLmNsYXNzTmFtZSA9PT0gJ3Byb2plY3QtY29udGFpbmVyJykge1xuICAgICAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gICAgICBjb25zdCB0YXNrID0gY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhKCk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG4gICAgICBhZGRUb0RvKCdwcm9qZWN0LXRhc2snLCB0YXNrLCBwYWdlSGVhZGVyVGV4dC50ZXh0Q29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKTtcbiAgICAgIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpO1xuICAgICAgYWRkVG9EbygndG9EbycsIHRhc2spO1xuICAgICAgcmVtb3ZlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBmdW5jIHRvIGNoZWNrIGlmIGFueSBidXR0b25zIGhhdmUgYSBjb2xvciBvZiB3aGl0ZVxuICAgICAgLy8gaWYgc28gY2hhbmdlIGl0IHRvIG5vcm1hbCBzbyBuZXh0IGJ0biBjbGlja2VkIHdpbGwgYmUgdGhlIHNlbGVjdGVkIG9uZSB0YWtlbiBhcyBpbnB1dFxuICAgICAgY29uc3QgYnRuQmdDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoYnV0dG9uKTtcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtidG5CZ0NvbG9yLmJhY2tncm91bmRDb2xvcn1gO1xuICAgICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gJ1doaXRlJztcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrUGFnZUV2ZW50cyBmcm9tICcuL21vZGFsLXRhc2stcGFnZS1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTW9kYWxUYXNrUGFnZSgpIHtcbiAgLy8gaWYgaXQgZXhpc3RzIHRoZW4gZG9udCBidWlsZCB0aGUgcGFnZSBiZWNhdXNlIGl0cyBvcGVuIGFscmVhZHksIGp1c3QgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGFzay10aXRsZS1hcmVhJykpIHJldHVybjtcblxuICBjb25zdCBtb2RhbE1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICB3aXBlTW9kYWxDb250ZW50KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXRhc2stdGl0bGUtYXJlYScsXG4gICAgJ1RpdGxlOiBQYXkgQmlsbHMnLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC10YXNrLWRldGFpbHMtYXJlYScsXG4gICAgJ0RldGFpbHM6IHBob25lIGJpbGwnLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbER1ZURhdGVEaXYobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUYXNrcHJpb3JpdHlEaXYobW9kYWxNYWluQ29udGVudCk7XG4gIC8vIGNhbGwgc3BlY2lmaWMgbW9kYWwgdGFzayBwYWdlIGV2ZW50c1xuICBtb2RhbFRhc2tQYWdlRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW9kYWxUYXNrcHJpb3JpdHlEaXYobW9kYWxNYWluQ29udGVudCkge1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1wcmlvcml0eS1kaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG4gIG1vZGFsTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIGNvbnN0IHByaW9yaXR5YnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ0bi1kaXYnKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlidXR0b25EaXYpO1xuXG4gIGJ1aWxkUHJpb3JpdHlCdXR0b25zKHByaW9yaXR5YnV0dG9uRGl2KTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24ocHJpb3JpdHlEaXYsICdtb2RhbC1hZGQtdGFzay1idG4nLCAnQWRkIHRvIGRvJyk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJpb3JpdHlCdXR0b25zKHByaW9yaXR5YnV0dG9uRGl2KSB7XG4gIGNvbnN0IHByaW9yaXR5TG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5TG93QnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdy1idG4nKTtcbiAgcHJpb3JpdHlMb3dCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5TG93QnRuLnRleHRDb250ZW50ID0gJ0xPVyc7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TG93QnRuKTtcblxuICBjb25zdCBwcmlvcml0eU1lZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcmlvcml0eU1lZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWQtYnRuJyk7XG4gIHByaW9yaXR5TWVkQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ0bicpO1xuICBwcmlvcml0eU1lZEJ0bi50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xuICBwcmlvcml0eWJ1dHRvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZEJ0bik7XG5cbiAgY29uc3QgcHJpb3JpdHlIaWdoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoLWJ0bicpO1xuICBwcmlvcml0eUhpZ2hCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi50ZXh0Q29udGVudCA9ICdISUdIJztcbiAgcHJpb3JpdHlidXR0b25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoQnRuKTtcbn1cbiIsImltcG9ydCBtb2RhbEV2ZW50cyBmcm9tICcuL21vZGFsLWV2ZW50cyc7XG5pbXBvcnQgbG9hZE1vZGFsVGFza1BhZ2UgZnJvbSAnLi9tb2RhbC10YXNrLXBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKSkgcmV0dXJuO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBuZXdNb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctbW9kYWwnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01vZGFsKTtcblxuICBjcmVhdGVNb2RhbEhlYWRlcihuZXdNb2RhbCk7XG4gIGNyZWF0ZU1vZGFsTWFpbkRpdihuZXdNb2RhbCk7XG4gIGNyZWF0ZU1vZGFsU2lkZWJhcigpO1xuICBjcmVhdGVNb2RhbENvbnRlbnREaXYoKTtcblxuICBuZXdNb2RhbC5zaG93TW9kYWwoKTtcblxuICAvLyB3ZSB3YW50IHRhc2sgcGFnZSB0byBiZSB0aGUgZmlyc3QgdG8gYXV0b21hdGljYWxseSBzaG93IGluIG1vZGFsXG4gIGxvYWRNb2RhbFRhc2tQYWdlKCk7XG5cbiAgLy8gbG9hZCBtb2RhbCBldmVudHMgc28gdXNlciBjYW4gY2hhbmdlIHRhYnMvZXRjXG4gIG1vZGFsRXZlbnRzKG5ld01vZGFsLCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbEhlYWRlcihuZXdNb2RhbCwgdGFza0hlYWRlcikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0YXNrSGVhZGVyIHx8ICdDcmVhdGUgYSBuZXcuLi4nO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDbG9zZScpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZS1idG4nKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1tYWluLWRpdicpO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxTaWRlYmFyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1saW5rJyk7XG4gIC8vIGFkZCBhY3RpdmUgdG8gc2hvdyB0YXNrIHBhZ2UgZmlyc3QgaW4gbW9kYWxcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Rhc2tzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Byb2plY3RzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua05vdGVzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua05vdGVzKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcblxuICBjb25zdCBuZXdFbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdFbnRyeURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctZW50cnknKTtcbiAgbmV3Q29udGVudERpdi5hcHBlbmRDaGlsZChuZXdFbnRyeURpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsVGFza0RldGFpbHNBcmVhKG5ld01vZGFsLCBkZXRhaWxzKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpO1xuICB0YXNrRGV0YWlsc0Rpdi50ZXh0Q29udGVudCA9IGRldGFpbHM7XG4gIG5ld01vZGFsLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGl2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTW9kYWxIZWFkZXIsIGNyZWF0ZU1vZGFsTWFpbkRpdiwgY3JlYXRlTW9kYWxUYXNrRGV0YWlsc0FyZWEgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU1vZGFsKCkge1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKTtcbiAgY29uc3QgY29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuICBjb250YWluZXIucmVtb3ZlQ2hpbGQobmV3TW9kYWwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNb2RhbFRleHRBcmVhKGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIC8vIGxpbWl0IGNoYXJhY3RlciBsZW5ndGggb24gdGl0bGUgdGV4dCBhcmVhc1xuICBpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKCd0aXRsZScpKSB7XG4gICAgdGV4dEFyZWEubWF4TGVuZ3RoID0gMzA7XG4gIH1cblxuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSBgJHtwbGFjZWhvbGRlcn1gO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbn1cbiIsImltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VOZXdUYXNrRGl2KGNob2ljZSwgY29udGFpbmVyQ2xhc3NOYW1lKSB7XG4gIGNvbnN0IG1haW5SaWdodEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBjb250YWluZXJUb0NoZWNrRm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyQ2xhc3NOYW1lfWApO1xuICBjaGVja0lmVGFza0RpdkV4aXN0cyhtYWluUmlnaHRCb2R5LCBjb250YWluZXJUb0NoZWNrRm9yKTtcblxuICBjb25zdCBub1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9UYXNrRGl2LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgbWFpblJpZ2h0Qm9keS5hcHBlbmRDaGlsZChub1Rhc2tEaXYpO1xuXG4gIGNyZWF0ZU5vVGFza0NvbnRhaW5lclRleHQobm9UYXNrRGl2LCBjaG9pY2UpO1xuICBjcmVhdGVOb1Rhc2tDb250YWluZXJCdXR0b24obm9UYXNrRGl2KTtcbiAgZGlhbG9nRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVGFza0NvbnRhaW5lclRleHQobm9UYXNrRGl2LCBjaG9pY2UpIHtcbiAgY29uc3Qgbm9UYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm9UYXNrVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSBubyAke2Nob2ljZX0geWV0LCBsZXRzIG1ha2Ugc29tZSFgO1xuICBub1Rhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ25vLXRhc2stdGV4dCcpO1xuICBub1Rhc2tEaXYuYXBwZW5kQ2hpbGQobm9UYXNrVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVGFza0NvbnRhaW5lckJ1dHRvbihub1Rhc2tEaXYpIHtcbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NsYXNzJyxcbiAgICAnbmV3LWNvbnRlbnQgbWFpbi1uZXcgZmEtcmVndWxhciBmYS1wbHVzIGZhLTJ4bCdcbiAgKTtcbiAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05ldycpO1xuICBub1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrRGl2RXhpc3RzKG1haW5SaWdodEJvZHksIGNvbnRhaW5lclRvQ2hlY2tGb3IpIHtcbiAgaWYgKGNvbnRhaW5lclRvQ2hlY2tGb3IpIHtcbiAgICBtYWluUmlnaHRCb2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lclRvQ2hlY2tGb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRFeGlzdGluZ1Byb2plY3RzVG9TaWRlYmFyIH0gZnJvbSAnLi4vcGFnZXMvcHJvamVjdHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbGVmdCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBjcmVhdGVUb3BTaWRlYmFyQ29udGVudChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9wU2lkZWJhckNvbnRlbnQoc2lkZWJhcikge1xuICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wLWNvbnRhaW5lcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgc2lkZWJhckxpbmtzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbGlua3MnKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJMaW5rcyk7XG5cbiAgY29uc3QgdG9kYXlMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRvZGF5TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZCh0b2RheUxpbmtJdGVtKTtcbiAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0b2RheUxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyLWxpbmsgZmEtc29saWQgZmEtc3VuJyk7XG4gIHRvZGF5TGlua0l0ZW0uYXBwZW5kQ2hpbGQodG9kYXlMaW5rKTtcbiAgY29uc3QgdG9kYXlMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdG9kYXlMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICB0b2RheUxpbmtUZXh0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdG9kYXlMaW5rSXRlbS5hcHBlbmRDaGlsZCh0b2RheUxpbmtUZXh0KTtcblxuICBjb25zdCB0YXNrTGlzdExpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdGFza0xpc3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHRhc2tMaXN0TGlua0l0ZW0pO1xuICBjb25zdCB0YXNrTGlzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHRhc2tMaXN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNoZWNrJyk7XG4gIHRhc2tMaXN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQodGFza0xpc3RMaW5rKTtcblxuICBjb25zdCB0YXNrTGlzdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0YXNrTGlzdExpbmtUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuICAvLyBhZGQgYWN0aXZlIHRvIHRhc2sgbGlzdCBiZWNhdXNlIHdlIHdhbnQgdGhpcyBwYWdlIHRvIHNob3cgYXV0b21hdGljYWxseVxuICB0YXNrTGlzdExpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB0YXNrTGlzdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ1Rhc2sgTGlzdCc7XG4gIHRhc2tMaXN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQodGFza0xpc3RMaW5rVGV4dCk7XG5cbiAgY3JlYXRlQm90dG9tU2lkZWJhckNvbnRlbnQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvdHRvbVNpZGViYXJDb250ZW50KHNpZGViYXIpIHtcbiAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdHRvbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbS1jb250YWluZXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpZGViYXJMaW5rcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua3MpO1xuXG4gIGNvbnN0IHByb2plY3RMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHByb2plY3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXByb2plY3QtbGluaycpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtJdGVtKTtcbiAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtZmlsZScpO1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICBjb25zdCBwcm9qZWN0TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByb2plY3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBwcm9qZWN0TGlua1RleHQudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdExpbmtUZXh0KTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXBsdXMnKTtcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICBhZGROZXdQcm9qZWN0TGlua0l0ZW0udGV4dENvbnRlbnQ7XG4gIHByb2plY3RMaW5rSXRlbS5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0TGlua0l0ZW0pO1xuICBjb25zdCBhZGROZXdwcm9qZWN0TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFkZE5ld3Byb2plY3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QnKTtcbiAgYWRkTmV3cHJvamVjdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBwcm9qZWN0JztcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKGFkZE5ld3Byb2plY3RMaW5rVGV4dCk7XG4gIC8vIGlmIGFueVxuICBhZGRFeGlzdGluZ1Byb2plY3RzVG9TaWRlYmFyKCk7XG5cbiAgY29uc3Qgbm90ZXNMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG5vdGVzTGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZChub3Rlc0xpbmtJdGVtKTtcbiAgY29uc3Qgbm90ZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBub3Rlc0xpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1ib29rJyk7XG4gIG5vdGVzTGlua0l0ZW0uYXBwZW5kQ2hpbGQobm90ZXNMaW5rKTtcbiAgY29uc3Qgbm90ZXNMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbm90ZXNMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xuICBub3Rlc0xpbmtUZXh0LnRleHRDb250ZW50ID0gJ05vdGVzJztcbiAgbm90ZXNMaW5rSXRlbS5hcHBlbmRDaGlsZChub3Rlc0xpbmtUZXh0KTtcblxuICBjcmVhdGVTaWRlYmFyRm9vdGVyKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyRm9vdGVyKHNpZGViYXIpIHtcbiAgY29uc3Qgc2lkZWJhckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZm9vdGVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckZvb3Rlcik7XG5cbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctYnV0dG9uLWRpdicpO1xuICBzaWRlYmFyRm9vdGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIGNvbnN0IG5ld0NvbnRlbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5ld0NvbnRlbnRCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdOZXcnKTtcbiAgbmV3Q29udGVudEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy1jb250ZW50IGZhLXNvbGlkIGZhLXBsdXMnKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnRCdG4pO1xuXG4gIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldHRpbmdzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWRpdicpO1xuICBzaWRlYmFyRm9vdGVyLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcbiAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHNldHRpbmdzQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnU2V0dGluZ3MnKTtcbiAgc2V0dGluZ3NCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyLXNldHRpbmdzIGZhLXNvbGlkIGZhLWdlYXInKTtcbiAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2lkZUJhcigpIHtcbiAgY3JlYXRlU2lkZWJhcigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRTaWRlQmFyIGZyb20gJy4vdWkvc2lkZWJhcic7XG5pbXBvcnQgbG9hZE1haW5Db250ZW50IGZyb20gJy4vdWkvbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHBhZ2VFdmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxvYWRTaWRlQmFyKCk7XG5sb2FkTWFpbkNvbnRlbnQoKTtcbnBhZ2VFdmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==