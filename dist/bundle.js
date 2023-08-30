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
  color: var(--font-color)
} 

.notes-container {
  display: flex;
  flex-wrap: wrap;
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
}

.priority-low-btn[class\$='active'] {
  color:white;
  background-color: var(--priority-low-color);
}

.priority-med-btn[class\$='active'] {
  color:white;
  background-color: var(--priority-med-color);
}

.priority-high-btn[class\$='active'] {
  color:white;
  background-color: var(--priority-high-color);
}


.no-task-text, .main-new {
  margin: 4rem;
  font-size: 2rem;
  display: grid;
  place-items: center;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-family: var(--font-style)\n}\n\n/* dark mode user-agent-styles */\n\nhtml {\n  color-scheme: dark light;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n --font-color: rgba(10, 10, 7, 0.6);\n --text-hover-color: rgba(24, 24, 17, 0.088);\n --main-background-color:  #ffffff;\n --priority-low-color: green;\n --priority-high-color: red;\n --priority-med-color: rgb(236, 176, 11);;\n --add-tasks-button-color: #5cb2a7;\n --font-style: sans-serif;\n --secondary-background-color: #efefef;\n}\n\nli {\n  list-style-type: none;\n}\n\n.sidebar-left {\n  font-size: 0.8rem;\n  height: 100vh;\n  width:13vw;\n  background-color:var(--secondary-background-color);\n  padding: 8px; \n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-links {\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* ADD ANIMATIONS FOR LINKS LATER */\n.link-item:hover, .add-project-btn:hover {\n  cursor: pointer;\n  background-color:  var(--text-hover-color);\n}\n\n.link-item:not(.project-child) {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.sidebar-project-link {\n  font-size: 1.1rem; \n}\n\n.fa-file {\n  margin-right: 0.5em\n}\n\n.add-project-btn {\n  font-weight: 500;\n  margin-left: 0.5em;\n  margin-top: 0.5em;\n  display: flex;\n} \n\n.add-new-project {\n  margin-left: 0.5em;\n}\n\n.link-item > a {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n\n[class|='link-item active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n}\n\n button[class~='active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n} \n\n.sidebar-top-container{\n  position: relative;\n  top: 3rem;\n  padding-bottom: 10rem;  \n}\n\n.sidebar-bottom-container{\n  position: relative; \n}\n\na {\n  pointer-events: none;\n}\n\n.sidebar-footer {\n  color: var(--font-color);\n  position: absolute;\n  bottom: 0;\n  width: 13vw;\n  height: 2.5rem;\n  left: 0;\n  border-top: 2px solid rgba(85, 83, 83, 0.68);\n  display: flex;\n  align-items: center;  \n  justify-content: space-around;\n}\n\n.sidebar-new:hover, .sidebar-settings:hover, .new-content:hover, .modal-link:hover, .fa-x:hover, \n.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can, .fa-ellipsis {\n  cursor: pointer;\n}\n\n.new-button-div {\n  display: flex;\n}\n\n.main-right {\n  width:100%;\n  background-color: var(--main-background-color);\n  overflow:auto;\n}\n\n .to-do-container {\n  height: 100%;\n  color: var(--font-color)\n} \n\n.notes-container {\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 1rem;\n  color: var(--font-color)\n}\n\n.main-new::before {\n  font-size: 5rem;\n}\n\n.page-header {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  justify-content: space-between;\n}\n\n.modal-main-div {\n  display: flex;\n}\n\ndialog {\n  margin: auto;\n  border-radius: 8px;\n  font-size: 1.25rem;\n  color: var(--font-color)\n}\n\n.modal-new-content-div {\n  text-indent: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-task-title-area, .modal-task-details-area, .modal-notes-details-area, .modal-notes-text-area, .modal-project-text-area{\n  text-indent: 10px;\n}\n.modal-notes-details-area {\n  min-height: 14dvh;\n}\n.modal-link {\n  margin-top: .5em;\n}\n\n[class|='modal-link active'] {\n  color: rgb(0, 0, 0);\n}\n\n[class|='modal-link active']::before {\n  content: '🠚';\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  margin-right: .25em;\n\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #c38d9e;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n}\n\n.modal-new-entry {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-sidebar {\n  width: 10dvw;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #fbfbfa;\n  min-height: 35dvh;\n}\n\n.modal-date-input {\n  border-radius: 8px;\n  border: 1.5px solid var(--add-tasks-button-color);\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-size: 1.25rem;\n  color:var(--add-tasks-button-color)\n}\n\n.modal-date-div {  \n  margin-bottom: .5em;\n}\n\n.modal-priority-div {\n  display: flex;\n}\n\n.priority-btn-div {\n  gap: 1rem;\n  display: flex;\n  margin-left: .5em;\n  width: 60%;\n}\n\n.modal-add-note-btn, .modal-add-project-btn {\n  margin-left: 10px;\n  width: 52%;\n}\n\n.modal-add-task-btn, .modal-add-note-btn, .modal-add-project-btn {\n  color:var(--add-tasks-button-color);\n  border: 1.5px solid var(--add-tasks-button-color);\n}\n\n.modal-add-note-btn:hover, .modal-add-project-btn:hover, .modal-add-task-btn:hover {\n  background-color:var(--add-tasks-button-color);\n  color:white;\n  transition: all 0.25s;\n}\n\n.modal-btn, .modal-add-btn {\n  background-color: var(--main-background-color);\n  border-radius: 5px;\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.priority-low-btn {\n  border: 1.5px solid var(--priority-low-color);\n  color: var(--priority-low-color);\n}\n\n.priority-low-btn:hover  {\n background-color: var(--priority-low-color);\n color:var(--main-background-color);\n transition: all 0.25s;\n}\n\n.priority-med-btn {\n  border: 1.5px solid var(--priority-med-color);\n  color: var(--priority-med-color)\n}\n\n.priority-med-btn:hover  {\n  background-color: var(--priority-med-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\n.priority-high-btn {\n  border: 1.5px solid var(--priority-high-color);\n  color: var(--priority-high-color);\n}\n\n.priority-high-btn:hover  {\n  background-color: var(--priority-high-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\ntextarea {\n  resize: none;\n  font-size: 1.25rem;\n  min-width: 29dvw;\n  border: none;\n  overflow: auto;\n  outline: none;\n  padding-top: 0.5rem;\n}\n\n.modal-task-title-area{\n  border-bottom: 1px solid black;\n  min-height: 6dvh;\n}\n\n.modal-task-details-area {\n  min-height: 12dvh;\n  margin-bottom: 1rem;\n}\n\n.modal-project-text-area {\n  min-height: 18dvh;\n}\n\n.to-do-div {\n  display:flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 3rem;\n  min-width: 80dvw;\n  min-height: fit-content;\n}\n\n.to-do-div-left, .to-do-div-right {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n\n.no-task-text-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\n.note-div {\n  margin: 1rem;\n  font-family: var(--font-style);\n  color: var(--font-color);\n  background-color:var(--secondary-background-color);\n  border: 1px solid black;\n  border-radius: 5px;\n  min-width: 20dvh;\n  min-height: max-content;\n  display: flex;\n  flex-direction: column;\n  word-break: break-all;\n}\n\n.note-header{\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem\n}\n\n.note-date {\n  align-self: flex-end;\n  padding: 0.25rem\n}\n\n.note-text-content {\n  align-self: start;\n  padding: 0.5rem\n}\n\n.project-child {\n  border: none;\n  background-color: var(--secondary-background-color);\n  display: flex;\n  justify-content: start;\n  align-content: center;\n  gap: 0.5rem;\n  margin-left: 2.5em;\n  overflow: clip;\n}\n\n.project-trash-div, .header-content {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.task-details-modal{ \n  min-height: 20dvh;\n  min-width: 20dvw;\n  text-align: center;\n}\n\n.task-details {\n  margin-top: 1em;\n}\n\n.priority-low-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-low-color);\n}\n\n.priority-med-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-med-color);\n}\n\n.priority-high-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-high-color);\n}\n\n\n.no-task-text, .main-new {\n  margin: 4rem;\n  font-size: 2rem;\n  display: grid;\n  place-items: center;\n}\n\n"],"sourceRoot":""}]);
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
      // loadTodayPage();
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
/* harmony import */ var _ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/dom */ "./src/ui/dom.js");
/* harmony import */ var _ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/noTasksMessage */ "./src/ui/noTasksMessage.js");



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
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('tasks', 'to-do-container');
  } else if (tasks.length === 0 && type === 'notes') {
    localStorage.removeItem(`${type}`);
    (0,_ui_noTasksMessage__WEBPACK_IMPORTED_MODULE_1__["default"])('notes', 'to-do-container');
    (0,_ui_dom__WEBPACK_IMPORTED_MODULE_0__.deleteContainer)('.notes-container');
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
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__.addNotesToPage)(note);
    });
  }

  if (tasks) {
    tasks.forEach((task) => {
      (0,_ui_addTaskToPage__WEBPACK_IMPORTED_MODULE_4__.buildToDoUi)(task);
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
  const priorityClicked = buttonArray.find((element) =>
    element.classList.contains('active')
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
/* harmony export */   addNotesToPage: () => (/* binding */ addNotesToPage),
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
    document.querySelector('.project-container') ||
    document.querySelector('.notes-container');

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
  if (
    document.querySelector(`.${className}`) ||
    document.querySelector('.notes-container')
  )
    return;

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
/* harmony export */   deleteContainer: () => (/* binding */ deleteContainer),
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

function deleteContainer(container) {
  const main = document.querySelector('.main-right');
  const containerToDelete = document.querySelector(`${container}`);
  main.removeChild(containerToDelete);
}

// function changeContainerName(elementName, newElementName) {
//   console.log('hjere');
//   const element = document.querySelector(`.${elementName}`);
//   element.removeAttribute('class');
//   element.setAttribute('class', newElementName);
// }




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
/* harmony import */ var _activeAttribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../activeAttribute */ "./src/ui/activeAttribute.js");






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
    button.addEventListener('click', (e) => {
      // add active to classlist of cliked button so we can style it with css
      (0,_activeAttribute__WEBPACK_IMPORTED_MODULE_4__.checkForActiveAttribute)(priorityButtons);
      (0,_activeAttribute__WEBPACK_IMPORTED_MODULE_4__.addActiveAttribute)(e);
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

  // const todayLinkItem = document.createElement('li');
  // todayLinkItem.classList.add('link-item');
  // sidebarLinks.appendChild(todayLinkItem);
  // const todayLink = document.createElement('i');
  // todayLink.setAttribute('class', 'sidebar-link fa-solid fa-sun');
  // todayLinkItem.appendChild(todayLink);
  // const todayLinkText = document.createElement('a');
  // todayLinkText.classList.add('today');
  // todayLinkText.textContent = 'Today';
  // todayLinkItem.appendChild(todayLinkText);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHNGQUFzRixPQUFPLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLHVFQUF1RSwyQkFBMkIsb0JBQW9CLEdBQUcsT0FBTyxjQUFjLGVBQWUsa0JBQWtCLHFDQUFxQywrQ0FBK0MsNkJBQTZCLEdBQUcsVUFBVSxzQkFBc0Isa0JBQWtCLEdBQUcsaUNBQWlDLG1CQUFtQixvQkFBb0IsR0FBRyxXQUFXLHNDQUFzQywrQ0FBK0MscUNBQXFDLCtCQUErQiw4QkFBOEIsNENBQTRDLHFDQUFxQyw0QkFBNEIseUNBQXlDLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxtQkFBbUIsc0JBQXNCLGtCQUFrQixlQUFlLHVEQUF1RCxrQkFBa0Isa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDJCQUEyQixpQkFBaUIsR0FBRyxvRkFBb0Ysb0JBQW9CLCtDQUErQyxHQUFHLG9DQUFvQyxrQkFBa0Isd0JBQXdCLHVCQUF1QixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyxjQUFjLDBCQUEwQixzQkFBc0IscUJBQXFCLHVCQUF1QixzQkFBc0Isa0JBQWtCLElBQUksc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQixzQkFBc0Isd0JBQXdCLEdBQUcsaUNBQWlDLHVCQUF1QixzQkFBc0IsK0NBQStDLEdBQUcsOEJBQThCLHVCQUF1QixzQkFBc0IsK0NBQStDLElBQUksMkJBQTJCLHVCQUF1QixjQUFjLDRCQUE0QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyxPQUFPLHlCQUF5QixHQUFHLHFCQUFxQiw2QkFBNkIsdUJBQXVCLGNBQWMsZ0JBQWdCLG1CQUFtQixZQUFZLGlEQUFpRCxrQkFBa0IsMEJBQTBCLGtDQUFrQyxHQUFHLDBMQUEwTCxvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsaUJBQWlCLGVBQWUsbURBQW1ELGtCQUFrQixHQUFHLHVCQUF1QixpQkFBaUIsZ0NBQWdDLHNCQUFzQixrQkFBa0Isb0JBQW9CLG9CQUFvQiwrQkFBK0IsdUJBQXVCLG9CQUFvQixHQUFHLGtCQUFrQixrQkFBa0IsZ0JBQWdCLHFCQUFxQixtQ0FBbUMsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsWUFBWSxpQkFBaUIsdUJBQXVCLHVCQUF1QiwrQkFBK0IsNEJBQTRCLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsa0lBQWtJLHNCQUFzQixHQUFHLDZCQUE2QixzQkFBc0IsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRywwQ0FBMEMsa0JBQWtCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHdCQUF3QixLQUFLLG1CQUFtQixrQkFBa0IsbUNBQW1DLDhCQUE4QixzQkFBc0IsaUJBQWlCLG9CQUFvQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLGlCQUFpQixrQkFBa0IsMkJBQTJCLDJCQUEyQix3QkFBd0IsOEJBQThCLHNCQUFzQixHQUFHLHVCQUF1Qix1QkFBdUIsc0RBQXNELDJDQUEyQyx1QkFBdUIsMENBQTBDLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsdUJBQXVCLGNBQWMsa0JBQWtCLHNCQUFzQixlQUFlLEdBQUcsaURBQWlELHNCQUFzQixlQUFlLEdBQUcsc0VBQXNFLHdDQUF3QyxzREFBc0QsR0FBRyx3RkFBd0YsbURBQW1ELGdCQUFnQiwwQkFBMEIsR0FBRyxnQ0FBZ0MsbURBQW1ELHVCQUF1QiwyQ0FBMkMscUJBQXFCLG9CQUFvQixHQUFHLHVCQUF1QixrREFBa0QscUNBQXFDLEdBQUcsOEJBQThCLCtDQUErQyxzQ0FBc0MseUJBQXlCLEdBQUcsdUJBQXVCLGtEQUFrRCx1Q0FBdUMsOEJBQThCLGdEQUFnRCx1Q0FBdUMsMEJBQTBCLElBQUksd0JBQXdCLG1EQUFtRCxzQ0FBc0MsR0FBRywrQkFBK0IsaURBQWlELHVDQUF1QywwQkFBMEIsSUFBSSxjQUFjLGlCQUFpQix1QkFBdUIscUJBQXFCLGlCQUFpQixtQkFBbUIsa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQixtQ0FBbUMscUJBQXFCLEdBQUcsOEJBQThCLHNCQUFzQix3QkFBd0IsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsZ0JBQWdCLGlCQUFpQixtQ0FBbUMsNEJBQTRCLHVCQUF1QixpQkFBaUIscUJBQXFCLDRCQUE0QixHQUFHLHVDQUF1QyxrQkFBa0IsNEJBQTRCLG9CQUFvQixjQUFjLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsZUFBZSxpQkFBaUIsbUNBQW1DLDZCQUE2Qix1REFBdUQsNEJBQTRCLHVCQUF1QixxQkFBcUIsNEJBQTRCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLEdBQUcsaUJBQWlCLGtCQUFrQixtQ0FBbUMsc0JBQXNCLGdCQUFnQix5QkFBeUIsdUJBQXVCLHdCQUF3QixzQkFBc0Isc0JBQXNCLG9CQUFvQixpQkFBaUIsd0RBQXdELGtCQUFrQiwyQkFBMkIsMEJBQTBCLGdCQUFnQix1QkFBdUIsbUJBQW1CLEdBQUcseUNBQXlDLGtCQUFrQixnQkFBZ0IsR0FBRyx5QkFBeUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsd0NBQXdDLGdCQUFnQixnREFBZ0QsR0FBRyx3Q0FBd0MsZ0JBQWdCLGdEQUFnRCxHQUFHLHlDQUF5QyxnQkFBZ0IsaURBQWlELEdBQUcsZ0NBQWdDLGlCQUFpQixvQkFBb0Isa0JBQWtCLHdCQUF3QixHQUFHLHVCQUF1QjtBQUNsalg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1YzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiNEQ7O0FBRTdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5RUFBMEIsZUFBZSxjQUFjO0FBQzdEO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjRDO0FBQ0Y7QUFDSztBQUNMO0FBQ0E7QUFJWjtBQUdKO0FBQ3dDO0FBQ0s7QUFDakI7QUFDRDtBQUNIOztBQUVuQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw0RUFBdUI7QUFDN0IsTUFBTSx1REFBYztBQUNwQixNQUFNLHVFQUFrQjtBQUN4QjtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLDJEQUFvQjtBQUN4QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBWTtBQUNsQjtBQUNBO0FBQ0EsTUFBTSx3REFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFlO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDJEQUFvQjtBQUMxQixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxRUFBd0I7QUFDOUIsTUFBTSxvRkFBcUM7QUFDM0MsTUFBTSx1REFBYztBQUNwQixNQUFNLG1FQUFnQjtBQUN0QixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBaUI7QUFDckIsSUFBSSwyRUFBMEI7QUFDOUI7QUFDQSxJQUFJLG1FQUFXO0FBQ2YsR0FBRztBQUNIOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJeUM7QUFDTTs7QUFFakQ7QUFDQSx1Q0FBdUMsS0FBSzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkM7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSx5REFBeUQsS0FBSzs7QUFFOUQ7O0FBRUE7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBOztBQUVBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7O0FBRUE7QUFDQSx1Q0FBdUMsS0FBSzs7QUFFNUMsa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsS0FBSztBQUM1Qzs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixLQUFLOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQyxJQUFJLDhEQUFjO0FBQ2xCLElBQUk7QUFDSiwrQkFBK0IsS0FBSztBQUNwQyxJQUFJLDhEQUFjO0FBQ2xCLElBQUksd0RBQWU7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLElBQUk7QUFDSiwrQkFBK0IsS0FBSztBQUNwQzs7QUFFQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGc0M7QUFDVTtBQUNUO0FBQ2E7QUFDTjs7QUFFaEQ7QUFDZTtBQUNmLEVBQUUsc0RBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBYztBQUNsQixJQUFJLHFEQUFZO0FBQ2hCLElBQUk7QUFDSjtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtFQUFtQjs7QUFFbkM7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCd0M7QUFDcUI7QUFDRztBQUNWO0FBQ1k7QUFDaEI7QUFDSzs7QUFFdkQ7QUFDZTtBQUNmLEVBQUUsc0RBQVk7QUFDZCxFQUFFLDhEQUFxQjtBQUN2Qix1QkFBdUIsa0VBQW1COztBQUUxQztBQUNBLElBQUksOERBQXlCO0FBQzdCLElBQUkscURBQVk7QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUF5QjtBQUMvQixNQUFNLHFEQUFZO0FBQ2xCLE1BQU07QUFDTjtBQUNBLE1BQU0sbUVBQWdCO0FBQ3RCO0FBQ0EsUUFBUSw4REFBVztBQUNuQixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLGtFQUFtQjs7QUFFdEM7O0FBRUE7QUFDQSxJQUFJLHNFQUFzQjtBQUMxQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERrRDtBQUNWO0FBQ0M7QUFDTztBQUNNOztBQUV0RDtBQUNlO0FBQ2YsRUFBRSxzREFBWTtBQUNkLGVBQWUsa0VBQW1COztBQUVsQztBQUNBO0FBQ0EsSUFBSSw4REFBYztBQUNsQixJQUFJLHFEQUFZO0FBQ2hCLElBQUk7QUFDSjtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxrRUFBbUI7O0FBRWxDO0FBQ0EsSUFBSSw2REFBYTtBQUNqQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ3QztBQUNVO0FBQ1Q7QUFDYTtBQUNZOztBQUVuRDtBQUNmLEVBQUUsc0RBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBYztBQUNsQixJQUFJLHFEQUFZO0FBQ2hCLElBQUk7QUFDSjtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtFQUFtQjtBQUNuQyxnQkFBZ0Isa0VBQW1COztBQUVuQztBQUNBO0FBQ0EsTUFBTSxpRUFBYztBQUNwQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQU0sOERBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENvRDtBQUNKOztBQUVqQztBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksNkRBQWE7QUFDakI7O0FBRUE7QUFDQSxJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBLElBQUksZ0VBQWlCO0FBQ3JCLElBQUksNkRBQWE7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBTUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RDRDOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBaUI7QUFDckIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnZEO0FBQ2U7QUFDZjs7QUFFQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRztBQUNvQjs7QUFFbkQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFrQjs7QUFFcEI7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBaUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFVOztBQUVaO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQVU7O0FBRVo7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7O0FBRXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklJO0FBQ007QUFDaEI7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5RUFBMEI7QUFDOUIsSUFBSTtBQUNKLElBQUkseUVBQTBCO0FBQzlCLElBQUk7QUFDSixJQUFJLHlFQUEwQjtBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXdCO0FBQzVCO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsVUFBVTtBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RDtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7OztBQ25GYTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjs7QUFFbEQ7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjZDOztBQUU5QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwyREFBWTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZTtBQUNmO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0g0QjtBQUNzQjtBQUNNO0FBQ0w7QUFDWDs7QUFFekI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0seUVBQXVCO0FBQzdCLE1BQU0sb0VBQWtCO0FBQ3hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxJQUFJLHdEQUFXO0FBQ2YsR0FBRzs7QUFFSDtBQUNBLElBQUksd0RBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBaUI7QUFDdkI7QUFDQTtBQUNBLE1BQU0sK0RBQW9CO0FBQzFCO0FBQ0E7QUFDQSxNQUFNLDREQUFrQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDdUU7QUFDNUI7QUFDSDtBQUNPOztBQUVoQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdGQUF3QjtBQUN6QyxJQUFJLDJEQUFxQjtBQUN6QixJQUFJLDJEQUFPO0FBQ1gsSUFBSSx3REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjBDO0FBQ0k7QUFDRDtBQUNZO0FBQ0c7O0FBRTdDO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQWdCO0FBQ2xCLEVBQUUsc0RBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFvQjtBQUN0QixFQUFFLDZEQUF1Qjs7QUFFekI7QUFDQSxFQUFFLG1FQUFvQjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IwRTtBQUMvQjtBQUdSO0FBQ0s7QUFDUztBQUNGOztBQUVoQztBQUNmOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsbUZBQTJCO0FBQzVDLElBQUksMkRBQXFCOztBQUV6QjtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isd0ZBQStCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLDJEQUFPO0FBQ2IsTUFBTSxtRUFBc0I7QUFDNUIsTUFBTSxtREFBcUI7QUFDM0IsTUFBTSx3REFBVztBQUNqQjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQzBDO0FBQ0k7QUFDRDtBQUNZO0FBQ1E7O0FBRWxEO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQWdCO0FBQ2xCLEVBQUUsc0RBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBdUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNFQUFzQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnVFO0FBQzVCO0FBQ0g7QUFDTztBQUluQjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdGQUF3QjtBQUMzQyxNQUFNLHdEQUFXO0FBQ2pCLE1BQU0sMkRBQXFCO0FBQzNCLE1BQU0sMkRBQU87QUFDYixNQUFNO0FBQ04sbUJBQW1CLGdGQUF3QjtBQUMzQyxNQUFNLDJEQUFxQjtBQUMzQixNQUFNLDJEQUFPO0FBQ2IsTUFBTSx3REFBVztBQUNqQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5RUFBdUI7QUFDN0IsTUFBTSxvRUFBa0I7QUFDeEIsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzBDO0FBQ0k7QUFDRDtBQUNZO0FBQ0U7O0FBRTVDO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQWdCO0FBQ2xCLEVBQUUsc0RBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFvQjtBQUN0QjtBQUNBO0FBQ0EsRUFBRSxtRUFBbUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDZEQUF1QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUR5QztBQUNTOztBQUVuQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLDREQUFpQjs7QUFFbkI7QUFDQSxFQUFFLHlEQUFXO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RTs7Ozs7Ozs7Ozs7Ozs7O0FDeEY5RDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsVUFBVTtBQUN0Qyw0QkFBNEIsWUFBWTtBQUN4QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHlDOztBQUUxQjtBQUNmO0FBQ0EseURBQXlELG1CQUFtQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZFQUE0Qjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7OztVQ3JIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ1E7QUFDYjtBQUNiOztBQUVyQix1REFBVztBQUNYLDJEQUFlO0FBQ2YsbURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kZWxldGVQcm9qZWN0RnJvbVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy9hZGRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy9jYXB0dXJlVGFza0RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvZGVsZXRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvYWN0aXZlQXR0cmlidXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvYWRkVGFza1RvUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL2R1ZS1kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLWFkZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLW5vdGUtcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtbm90ZS1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXByb2plY3QtcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtcHJvamVjdC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXRhc2stcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtdGFzay1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL3JlbW92ZU1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL3RleHQtYXJlYS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9ub1Rhc2tzTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNzcyByZXNldCAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKVxufVxuXG4vKiBkYXJrIG1vZGUgdXNlci1hZ2VudC1zdHlsZXMgKi9cblxuaHRtbCB7XG4gIGNvbG9yLXNjaGVtZTogZGFyayBsaWdodDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46cm9vdCB7XG4gLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcbiAtLXRleHQtaG92ZXItY29sb3I6IHJnYmEoMjQsIDI0LCAxNywgMC4wODgpO1xuIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjtcbiAtLXByaW9yaXR5LWxvdy1jb2xvcjogZ3JlZW47XG4gLS1wcmlvcml0eS1oaWdoLWNvbG9yOiByZWQ7XG4gLS1wcmlvcml0eS1tZWQtY29sb3I6IHJnYigyMzYsIDE3NiwgMTEpOztcbiAtLWFkZC10YXNrcy1idXR0b24tY29sb3I6ICM1Y2IyYTc7XG4gLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2lkZWJhci1sZWZ0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOjEzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBwYWRkaW5nOiA4cHg7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1saW5rcyB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4vKiBBREQgQU5JTUFUSU9OUyBGT1IgTElOS1MgTEFURVIgKi9cbi5saW5rLWl0ZW06aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn1cblxuLmxpbmstaXRlbTpub3QoLnByb2plY3QtY2hpbGQpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0LWxpbmsge1xuICBmb250LXNpemU6IDEuMXJlbTsgXG59XG5cbi5mYS1maWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbVxufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbn0gXG5cbi5hZGQtbmV3LXByb2plY3Qge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5saW5rLWl0ZW0gPiBhIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbltjbGFzc3w9J2xpbmstaXRlbSBhY3RpdmUnXSB7XG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn1cblxuIGJ1dHRvbltjbGFzc349J2FjdGl2ZSddIHtcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xufSBcblxuLnNpZGViYXItdG9wLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTsgIFxufVxuXG4uc2lkZWJhci1ib3R0b20tY29udGFpbmVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxufVxuXG5hIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxM3Z3O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoODUsIDgzLCA4MywgMC42OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zaWRlYmFyLW5ldzpob3ZlciwgLnNpZGViYXItc2V0dGluZ3M6aG92ZXIsIC5uZXctY29udGVudDpob3ZlciwgLm1vZGFsLWxpbms6aG92ZXIsIC5mYS14OmhvdmVyLCBcbi5tb2RhbC1kYXRlLWlucHV0OmhvdmVyLCAubW9kYWwtYnRuOmhvdmVyLCAuZmEtdHJhc2gsIC5mYS10cmFzaC1jYW4sIC5mYS1lbGxpcHNpcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4tcmlnaHQge1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICBvdmVyZmxvdzphdXRvO1xufVxuXG4gLnRvLWRvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59IFxuXG4ubm90ZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4ubWFpbi1uZXc6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsLW1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZGlhbG9nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi5tb2RhbC1uZXctY29udGVudC1kaXYge1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYSwgLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtdGV4dC1hcmVhLCAubW9kYWwtcHJvamVjdC10ZXh0LWFyZWF7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xufVxuLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE0ZHZoO1xufVxuLm1vZGFsLWxpbmsge1xuICBtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddIHtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ/CfoJonO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xuXG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1vZGFsLW5ldy1lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tb2RhbC1zaWRlYmFyIHtcbiAgd2lkdGg6IDEwZHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZhO1xuICBtaW4taGVpZ2h0OiAzNWR2aDtcbn1cblxuLm1vZGFsLWRhdGUtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpXG59XG5cbi5tb2RhbC1kYXRlLWRpdiB7ICBcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLm1vZGFsLXByaW9yaXR5LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcmlvcml0eS1idG4tZGl2IHtcbiAgZ2FwOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTIlO1xufVxuXG4ubW9kYWwtYWRkLXRhc2stYnRuLCAubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5tb2RhbC1hZGQtbm90ZS1idG46aG92ZXIsIC5tb2RhbC1hZGQtcHJvamVjdC1idG46aG92ZXIsIC5tb2RhbC1hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xuICBjb2xvcjp3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xufVxuXG4ubW9kYWwtYnRuLCAubW9kYWwtYWRkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByaW9yaXR5LWxvdy1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0bjpob3ZlciAge1xuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG59XG5cbi5wcmlvcml0eS1tZWQtYnRuIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKVxufVxuXG4ucHJpb3JpdHktbWVkLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gfVxuXG4ucHJpb3JpdHktaGlnaC1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuIH1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWluLXdpZHRoOiAyOWR2dztcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtaW4taGVpZ2h0OiA2ZHZoO1xufVxuXG4ubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEge1xuICBtaW4taGVpZ2h0OiAxMmR2aDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhIHtcbiAgbWluLWhlaWdodDogMThkdmg7XG59XG5cbi50by1kby1kaXYge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcmVtO1xuICBtaW4td2lkdGg6IDgwZHZ3O1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnRvLWRvLWRpdi1sZWZ0LCAudG8tZG8tZGl2LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubm8tdGFzay10ZXh0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG5cbi5ub3RlLWRpdiB7XG4gIG1hcmdpbjogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDIwZHZoO1xuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubm90ZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5ub3RlLWRhdGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC4yNXJlbVxufVxuXG4ubm90ZS10ZXh0LWNvbnRlbnQge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5wcm9qZWN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcbiAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5wcm9qZWN0LXRyYXNoLWRpdiwgLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50YXNrLWRldGFpbHMtbW9kYWx7IFxuICBtaW4taGVpZ2h0OiAyMGR2aDtcbiAgbWluLXdpZHRoOiAyMGR2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0bltjbGFzc1xcJD0nYWN0aXZlJ10ge1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuLnByaW9yaXR5LW1lZC1idG5bY2xhc3NcXCQ9J2FjdGl2ZSddIHtcbiAgY29sb3I6d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0bltjbGFzc1xcJD0nYWN0aXZlJ10ge1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cblxuLm5vLXRhc2stdGV4dCwgLm1haW4tbmV3IHtcbiAgbWFyZ2luOiA0cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVz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QUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7QUFDOUM7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNzcyByZXNldCAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSlcXG59XFxuXFxuLyogZGFyayBtb2RlIHVzZXItYWdlbnQtc3R5bGVzICovXFxuXFxuaHRtbCB7XFxuICBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbjpyb290IHtcXG4gLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcXG4gLS10ZXh0LWhvdmVyLWNvbG9yOiByZ2JhKDI0LCAyNCwgMTcsIDAuMDg4KTtcXG4gLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICAjZmZmZmZmO1xcbiAtLXByaW9yaXR5LWxvdy1jb2xvcjogZ3JlZW47XFxuIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcmVkO1xcbiAtLXByaW9yaXR5LW1lZC1jb2xvcjogcmdiKDIzNiwgMTc2LCAxMSk7O1xcbiAtLWFkZC10YXNrcy1idXR0b24tY29sb3I6ICM1Y2IyYTc7XFxuIC0tZm9udC1zdHlsZTogc2Fucy1zZXJpZjtcXG4gLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1sZWZ0IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOjEzdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDhweDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXItbGlua3Mge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi8qIEFERCBBTklNQVRJT05TIEZPUiBMSU5LUyBMQVRFUiAqL1xcbi5saW5rLWl0ZW06aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4ubGluay1pdGVtOm5vdCgucHJvamVjdC1jaGlsZCkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGluayB7XFxuICBmb250LXNpemU6IDEuMXJlbTsgXFxufVxcblxcbi5mYS1maWxlIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW1cXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn0gXFxuXFxuLmFkZC1uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5saW5rLWl0ZW0gPiBhIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuW2NsYXNzfD0nbGluay1pdGVtIGFjdGl2ZSddIHtcXG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4gYnV0dG9uW2NsYXNzfj0nYWN0aXZlJ10ge1xcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tdGV4dC1ob3Zlci1jb2xvcik7XFxufSBcXG5cXG4uc2lkZWJhci10b3AtY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtOyAgXFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbS1jb250YWluZXJ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbn1cXG5cXG5hIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEzdnc7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSg4NSwgODMsIDgzLCAwLjY4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNpZGViYXItbmV3OmhvdmVyLCAuc2lkZWJhci1zZXR0aW5nczpob3ZlciwgLm5ldy1jb250ZW50OmhvdmVyLCAubW9kYWwtbGluazpob3ZlciwgLmZhLXg6aG92ZXIsIFxcbi5tb2RhbC1kYXRlLWlucHV0OmhvdmVyLCAubW9kYWwtYnRuOmhvdmVyLCAuZmEtdHJhc2gsIC5mYS10cmFzaC1jYW4sIC5mYS1lbGxpcHNpcyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbi1yaWdodCB7XFxuICB3aWR0aDoxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG92ZXJmbG93OmF1dG87XFxufVxcblxcbiAudG8tZG8tY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn0gXFxuXFxuLm5vdGVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVxcblxcbi5tYWluLW5ldzo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC1tYWluLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufVxcblxcbi5tb2RhbC1uZXctY29udGVudC1kaXYge1xcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYSwgLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtdGV4dC1hcmVhLCAubW9kYWwtcHJvamVjdC10ZXh0LWFyZWF7XFxuICB0ZXh0LWluZGVudDogMTBweDtcXG59XFxuLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxNGR2aDtcXG59XFxuLm1vZGFsLWxpbmsge1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG59XFxuXFxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXSB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddOjpiZWZvcmUge1xcbiAgY29udGVudDogJ/CfoJonO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcXG5cXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtbmV3LWVudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtc2lkZWJhciB7XFxuICB3aWR0aDogMTBkdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYTtcXG4gIG1pbi1oZWlnaHQ6IDM1ZHZoO1xcbn1cXG5cXG4ubW9kYWwtZGF0ZS1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKVxcbn1cXG5cXG4ubW9kYWwtZGF0ZS1kaXYgeyAgXFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbn1cXG5cXG4ubW9kYWwtcHJpb3JpdHktZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcmlvcml0eS1idG4tZGl2IHtcXG4gIGdhcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogLjVlbTtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5tb2RhbC1hZGQtbm90ZS1idG4sIC5tb2RhbC1hZGQtcHJvamVjdC1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogNTIlO1xcbn1cXG5cXG4ubW9kYWwtYWRkLXRhc2stYnRuLCAubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcXG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsLWFkZC1ub3RlLWJ0bjpob3ZlciwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLm1vZGFsLWFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xcbiAgY29sb3I6d2hpdGU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxufVxcblxcbi5tb2RhbC1idG4sIC5tb2RhbC1hZGQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbSAwLjEyNWVtIDAuMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3ctYnRuIHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93LWJ0bjpob3ZlciAge1xcbiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbiBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxufVxcblxcbi5wcmlvcml0eS1tZWQtYnRuIHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpXFxufVxcblxcbi5wcmlvcml0eS1tZWQtYnRuOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG4gfVxcblxcbi5wcmlvcml0eS1oaWdoLWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaC1idG46aG92ZXIgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG4gfVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1pbi13aWR0aDogMjlkdnc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWwtdGFzay10aXRsZS1hcmVhe1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWluLWhlaWdodDogNmR2aDtcXG59XFxuXFxuLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDEyZHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhIHtcXG4gIG1pbi1oZWlnaHQ6IDE4ZHZoO1xcbn1cXG5cXG4udG8tZG8tZGl2IHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgbWluLXdpZHRoOiA4MGR2dztcXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4udG8tZG8tZGl2LWxlZnQsIC50by1kby1kaXYtcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm8tdGFzay10ZXh0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm5vdGUtZGl2IHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtaW4td2lkdGg6IDIwZHZoO1xcbiAgbWluLWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm5vdGUtaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbVxcbn1cXG5cXG4ubm90ZS1kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogMC4yNXJlbVxcbn1cXG5cXG4ubm90ZS10ZXh0LWNvbnRlbnQge1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nOiAwLjVyZW1cXG59XFxuXFxuLnByb2plY3QtY2hpbGQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIG92ZXJmbG93OiBjbGlwO1xcbn1cXG5cXG4ucHJvamVjdC10cmFzaC1kaXYsIC5oZWFkZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrLWRldGFpbHMtbW9kYWx7IFxcbiAgbWluLWhlaWdodDogMjBkdmg7XFxuICBtaW4td2lkdGg6IDIwZHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdy1idG5bY2xhc3MkPSdhY3RpdmUnXSB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1tZWQtYnRuW2NsYXNzJD0nYWN0aXZlJ10ge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaC1idG5bY2xhc3MkPSdhY3RpdmUnXSB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG5cXG4ubm8tdGFzay10ZXh0LCAubWFpbi1uZXcge1xcbiAgbWFyZ2luOiA0cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKG5hbWVPZlByb2plY3QpIHtcbiAgY29uc3QgYWxsU2lkZWJhckxpbmtJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWl0ZW0nKTtcbiAgLy8gb3VyIHRvcCBhbmQgYm90dG9tIHNpZGViYXIgbGlua3MgYXJlIGJvdGggY2FsbGVkICdzaWRlYmFyLWxpbmtzJyBzbyBzcGVjaWZ5XG4gIC8vIHRoYXQgd2Ugd2FudCB0aGUgYm90dG9tIGNvbnRhaW5lciBzaWRlYmFyIGxpbmtzLlxuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpZGViYXItYm90dG9tLWNvbnRhaW5lcidcbiAgKS5maXJzdENoaWxkO1xuXG4gIGFsbFNpZGViYXJMaW5rSXRlbXMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIC8vIGlmIGxpbmsgY2xpY2tlZCBjbGFzc2xpc3QgZXF1YWwgcHJvamVjdCBuYW1lIHRoZW4gdGhhdHMgdGhlIHNpZGViYXIgcHJvamVjdCB3ZSBkZWxldGVcbiAgICBpZiAobGluay5jbGFzc0xpc3RbMF0gPT09IG5hbWVPZlByb2plY3QpIHtcbiAgICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdCcsIGAke25hbWVPZlByb2plY3R9YCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBsb2FkVGFza0xpc3QgZnJvbSAnLi9wYWdlcy90YXNrTGlzdCc7XG5pbXBvcnQgbG9hZE5vdGVzUGFnZSBmcm9tICcuL3BhZ2VzL25vdGVzJztcbmltcG9ydCBsb2FkUHJvamVjdFBhZ2UgZnJvbSAnLi9wYWdlcy9wcm9qZWN0cyc7XG5pbXBvcnQgbG9hZFRvZGF5UGFnZSBmcm9tICcuL3BhZ2VzL3RvZGF5JztcbmltcG9ydCB7IHdpcGVEb21Db250ZW50IH0gZnJvbSAnLi91aS9kb20nO1xuaW1wb3J0IHtcbiAgYWRkQWN0aXZlQXR0cmlidXRlLFxuICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSxcbn0gZnJvbSAnLi91aS9hY3RpdmVBdHRyaWJ1dGUnO1xuaW1wb3J0IGNyZWF0ZU5ld0RpYWxvZ01vZGFsLCB7XG4gIGNyZWF0ZU1vZGFsVGFza0RldGFpbHNBcmVhLFxufSBmcm9tICcuL3VpL21vZGFsL21vZGFsJztcbmltcG9ydCBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIgZnJvbSAnLi9kZWxldGVQcm9qZWN0RnJvbVNpZGViYXInO1xuaW1wb3J0IHsgZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuL3VpL2FkZFRhc2tUb1BhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWxIZWFkZXIgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsJztcbmltcG9ydCBtb2RhbEV2ZW50cyBmcm9tICcuL3VpL21vZGFsL21vZGFsLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFBhZ2VFdmVudExpc3RlbmVycygpIHtcbiAgLy8gZXZlbnRzIGZvciBzaWRlYmFybGluayArIGluZGl2aWR1YWwgcHJvamVjdCBwYWdlc1xuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1pdGVtJyk7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuXG4gIHNpZGViYXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShzaWRlYmFyTGlua3MpO1xuICAgICAgd2lwZURvbUNvbnRlbnQoKTtcbiAgICAgIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKTtcbiAgICAgIGNoZWNrV2hpY2hTaWRlYmFyTGlua0lzQ2xpY2tlZChlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgYWRkTmV3UHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIHVzZXIgY2xpY2tzIG9uIGFkZCBwcm9qZWN0XG4gICAgY3JlYXRlTmV3RGlhbG9nTW9kYWwoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpY2hTaWRlYmFyTGlua0lzQ2xpY2tlZChlKSB7XG4gIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICBjYXNlICdUb2RheSc6XG4gICAgICAvLyBsb2FkVG9kYXlQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdUYXNrIExpc3QnOlxuICAgICAgbG9hZFRhc2tMaXN0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdOb3Rlcyc6XG4gICAgICBsb2FkTm90ZXNQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICAvLyBvdXIgZGVmYXVsdCB3aWxsIGJlIGluZGl2aWR1YWwgcHJvamVjdHMgdGhhdCBhcmUgY2xpY2tlZCBpZiBub3QgYW55IG9mIHRoZSBhYnZvZVxuICAgIGRlZmF1bHQ6XG4gICAgICBsb2FkUHJvamVjdFBhZ2UoZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWFsb2dFdmVudHMoKSB7XG4gIGNvbnN0IG5ld0NvbnRlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ldy1jb250ZW50Jyk7XG5cbiAgbmV3Q29udGVudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlTmV3RGlhbG9nTW9kYWwoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUcmFzaENhbkV2ZW50cygpIHtcbiAgY29uc3QgcHJvamVjdFRyYXNoQ2FuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLXRyYXNoLWNhbicpO1xuXG4gIHByb2plY3RUcmFzaENhbi5mb3JFYWNoKCh0cmFzaENhbikgPT4ge1xuICAgIHRyYXNoQ2FuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBjb25zdCBwYXJlbnRTaWJsaW5nRWxlbWVudFRleHRDb250ZW50ID1cbiAgICAgICAgdGFyZ2V0UGFyZW50LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcGFyZW50U2libGluZ0VsZW1lbnRUZXh0Q29udGVudDtcblxuICAgICAgLy8gd2lsbCByZW1vdmUgcHJvamVjdCBmcm9tIHNpZGViYXIgQU5EIGRlbGV0ZSBwcm9qZWN0IGZyb20gTFNcbiAgICAgIGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcihwcm9qZWN0TmFtZSk7XG4gICAgICBkZWxldGVBbGxQcm9qZWN0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snLCBwcm9qZWN0TmFtZSk7XG4gICAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgICAgYWRkVGFza0NvbnRhaW5lcigndG8tZG8tY29udGFpbmVyJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0JveFRhc2tFdmVudHMoKSB7XG4gIGNvbnN0IHRvRG9DaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1jaGVja2JveCcpO1xuICB0b0RvQ2hlY2tCb3guZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBjb25zdCBzaWJsaW5nID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIHNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGUudGFyZ2V0LnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBjaGlsZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBlLnRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgc2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGUudGFyZ2V0LnBhcmVudE5vZGUubmV4dFNpYmxpbmcuY2hpbGROb2RlcztcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBjaGlsZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUYXNrRGV0YWlscyhlbGVtZW50LCBkZXRhaWxzKSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIG5ld01vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1tb2RhbCcpO1xuICAgIG5ld01vZGFsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscy1tb2RhbCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdNb2RhbCk7XG4gICAgY3JlYXRlTW9kYWxIZWFkZXIobmV3TW9kYWwsICdUYXNrIERldGFpbHMnKTtcbiAgICBjcmVhdGVNb2RhbFRhc2tEZXRhaWxzQXJlYShuZXdNb2RhbCwgZGV0YWlscyk7XG4gICAgbmV3TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgbW9kYWxFdmVudHMobmV3TW9kYWwsIGNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBkaWFsb2dFdmVudHMsXG4gIHByb2plY3RUcmFzaENhbkV2ZW50cyxcbiAgY2hlY2tCb3hUYXNrRXZlbnRzLFxuICBleHBhbmRUYXNrRGV0YWlscyxcbn07XG4iLCJpbXBvcnQgeyBkZWxldGVDb250YWluZXIgfSBmcm9tICcuL3VpL2RvbSc7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXYgZnJvbSAnLi91aS9ub1Rhc2tzTWVzc2FnZSc7XG5cbmZ1bmN0aW9uIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0KSB7XG4gIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0eXBlfWApO1xuXG4gIC8vaWYgbm8gZGF0YVxuICBpZiAoIWRhdGEpIHtcbiAgICAvLyBpZiBubyB2YWx1ZSBpbiB2YXJpYWJsZSB0aGVuIHdlIGFyZSBub3QgYWRkaW5nIGEgdGFzayB0byBhIHByb2plY3RcbiAgICBpZiAoIXBhZ2VIZWFkZXJUZXh0KSB7XG4gICAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIG91ciB0YXNrIG9iamVjdFxuICAgICAgY29uc3QgZGF0YUFycmF5ID0gW3Rhc2tdO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIHByb2plY3QgcGFnZSB0aXRsZSBwcm9wZXJ0eSB0byB0YXNrXG4gICAgICB0YXNrLnByb2plY3RQYWdlID0gcGFnZUhlYWRlclRleHQ7XG4gICAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIG91ciB0YXNrIG9iamVjdCBhbmQgaW5kaXZpZHVhbCBwcm9qZWN0IHBhZ2UgdGl0bGVcbiAgICAgIGNvbnN0IGRhdGFBcnJheSA9IFt0YXNrXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhc2sucHJvamVjdFBhZ2UgPSBwYWdlSGVhZGVyVGV4dDtcblxuICAgIC8vIHBvcHVsYXRlIGFycmF5IHdpdGggZXhpc3RpbmcgdGFza3Mgb2YgJ3R5cGUnXG4gICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0eXBlfWApKTtcblxuICAgIGRhdGFBcnJheS5wdXNoKHRhc2spO1xuXG4gICAgLy8gc2V0IG5ldyBhcnJheSB3aXRoIGFsbCB0YXNrcyBvbGQgYW5kIG5ldyB0byBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKHR5cGUpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2tUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoYCR7dHlwZX1gKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhc2tzW2ldLnRhc2tUaXRsZSA9PT0gdGFza1RpdGxlKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVBbGxQcm9qZWN0VGFza3NGcm9tTG9jYWxTdG9yYWdlKHR5cGUsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZShgJHt0eXBlfWApO1xuICBpZiAoIXRhc2tzKSByZXR1cm47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc1tpXS5wcm9qZWN0UGFnZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIHNldFRvTG9jYWxTdG9yYWdlQWZ0ZXJEZWxldGluZyh0eXBlLCB0YXNrcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRvTG9jYWxTdG9yYWdlQWZ0ZXJEZWxldGluZyh0eXBlLCB0YXNrcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0eXBlfWAsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG5cbiAgLy8gcmVmYWN0b3IgYmVsb3dcbiAgLy8gaWYgbm8gdGFza3MgaW4gZWl0aGVyICd0b0RvJyBvciAnbm90ZXMnIExTIGFycmF5cyBkZWxldGUgdGhlIGtleSBmcm9tIExTXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdHlwZSA9PT0gJ3RvRG8nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dHlwZX1gKTtcbiAgICBtYWtlTmV3VGFza0RpdigndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICdub3RlcycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICAgIG1ha2VOZXdUYXNrRGl2KCdub3RlcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkZWxldGVDb250YWluZXIoJy5ub3Rlcy1jb250YWluZXInKTtcbiAgfVxuXG4gIC8vIGlmIG5vIHRhc2tzIGluIGVpdGhlciAncHJvamVjdC10YXNrJyBvciAncHJvamVjdCcgTFMgYXJyYXlzIGRlbGV0ZSB0aGUga2V5IGZyb20gTFNcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAncHJvamVjdC10YXNrJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gIH1cblxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7XG4gIHNldFRvTG9jYWxTdG9yYWdlLFxuICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxuICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSxcbn07XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXYgZnJvbSAnLi4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuaW1wb3J0IHsgZGlhbG9nRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZFRhc2tUb1BhZ2UgZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbi8vIHJ1biB3aGVuIGxpbmsgaXMgY2xpY2tlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5vdGVzUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNvbnN0IG5vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XG5cbiAgLy8gaWYgZmFsc2Ugd2UgaGF2ZSBubyBleGlzdGluZyBub3RlcyBzbyBtYWtlIGEgdGFzayBjb250YWluZXIgc28gdXNlciBjYW4gbWFrZSBzb21lIG5ldyBub3Rlc1xuICBpZiAoIW5vdGVzKSB7XG4gICAgbWFrZU5ld1Rhc2tEaXYoJ25vdGVzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV4aXN0aW5nTm90ZXNUb1BhZ2UoJ25vdGVzJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdOb3Rlc1RvUGFnZSh0eXBlKSB7XG4gIC8vIGdldCBhbGwgb2YgdGhlIHVzZXJzIG5vdGVzIGZyb20gTFNcbiAgY29uc3Qgbm90ZXMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycpO1xuXG4gIG5vdGVzLmZvckVhY2goKG5vdGUpID0+IHtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIG5vdGUpO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi4vdWkvaGVhZGVyJztcbmltcG9ydCBtYWtlTmV3VGFza0RpdkZvclByb2plY3RzIGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cywgcHJvamVjdFRyYXNoQ2FuRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZE5ld1Byb2plY3RUb1NpZGViYXIgZnJvbSAnLi4vdWkvYWRkTmV3UHJvamVjdFRvU2lkZWJhcic7XG5pbXBvcnQgeyBidWlsZFRvRG9VaSB9IGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuaW1wb3J0IHsgYWRkVGFza0NvbnRhaW5lciB9IGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG4vL3J1bnMgd2hlbiBhIGluZGl2aWR1YWwgcHJvamVjdCBpcyBjbGlja2VkXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdFBhZ2UoZSkge1xuICBjcmVhdGVIZWFkZXIoJ3Byb2plY3QnKTtcbiAgcHJvamVjdFRyYXNoQ2FuRXZlbnRzKCk7XG4gIGNvbnN0IHByb2plY3RUYXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QtdGFzaycpO1xuXG4gIGlmICghcHJvamVjdFRhc2tzKSB7XG4gICAgbWFrZU5ld1Rhc2tEaXZGb3JQcm9qZWN0cygndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVmYWN0b3IgdG8gc2VwZXJhdGUgZnVuY3Rpb25cbiAgICBjb25zdCBpbmRpdmlkaXVhbFByb2plY3RUYXNrID0gcHJvamVjdFRhc2tzLmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrLnByb2plY3RQYWdlID09PSBlLnRhcmdldC50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICAvLyBpZiBubyB0YXNrIGluIHByb2plY3QgKGp1c3QgbWFkZSkgc2hvdyBubyB0YXNrIG1lc3NhZ2VcbiAgICBpZiAoaW5kaXZpZGl1YWxQcm9qZWN0VGFzay5sZW5ndGggPT09IDApIHtcbiAgICAgIG1ha2VOZXdUYXNrRGl2Rm9yUHJvamVjdHMoJ3Rhc2tzJywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBkaWFsb2dFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYnVpbGQgdGFzayBvbiBwcm9qZWN0IHBhZ2UgY2xpY2tlZFxuICAgICAgYWRkVGFza0NvbnRhaW5lcigncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgIGluZGl2aWRpdWFsUHJvamVjdFRhc2suZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBidWlsZFRvRG9VaSh0YXNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBpcyByYW4gb24gcGFnZSBsb2FkXG5leHBvcnQgZnVuY3Rpb24gYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhcigpIHtcbiAgLy8gd2UgYWxzbyB3YW50IHRvIGNoZWNrIGlmIHRoZXJlIGlzIGFueSBwcm9qZWN0cyBvbiBwYWdlIGxvYWQgaW4gTFMgdG8gc2hvd1xuICAvLyB1bmRlciBwcm9qZWN0cyB0YWIgb24gcGFnZSBsb2FkIGFzd2VsbC5cbiAgY29uc3QgcHJvamVjdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0Jyk7XG5cbiAgaWYgKCFwcm9qZWN0cykgcmV0dXJuO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBhZGROZXdQcm9qZWN0VG9TaWRlYmFyKHByb2plY3QudGFza1RpdGxlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgbWFrZU5ld1Rhc2tEaXYgZnJvbSAnLi4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IHsgZGlhbG9nRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSc7XG5cbi8vIGZ1bmN0aW9uIGlzIHJhbiBvbiBwYWdlIGxvYWQgYW5kIG9uIGxpbmsgY2xpY2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUYXNrTGlzdCgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNvbnN0IHRvRG8gPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b0RvJyk7XG5cbiAgLy8gaWYgZmFsc2Ugd2UgaGF2ZSBubyBleGlzdGluZyB0by1kbydzIHNvIG1ha2UgYSB0YXNrIGNvbnRhaW5lciBzbyB1c2VyIGNhbiBtYWtlIHNvbWUgbmV3IHRhc2tzXG4gIGlmICghdG9Ebykge1xuICAgIG1ha2VOZXdUYXNrRGl2KCd0YXNrcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFeGlzdGluZ1RvRG9Ub1BhZ2UoJ3RvRG8nKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFeGlzdGluZ1RvRG9Ub1BhZ2UodHlwZSkge1xuICAvLyBnZXQgYWxsIG9mIHRoZSB1c2VycyB0YXNrcyBmcm9tIExTXG4gIGNvbnN0IHRvRG8gPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b0RvJyk7XG5cbiAgdG9Eby5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCB0YXNrKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXYgZnJvbSAnLi4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuaW1wb3J0IHsgZGlhbG9nRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgYWRkTm90ZXNUb1BhZ2UsIGJ1aWxkVG9Eb1VpIH0gZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheVBhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gc2hvdyBubyBpdGVtcyBzYXZlZCBpbiBkaXNwbGF5IGlmIG5vIGRhdGFcbiAgICBtYWtlTmV3VGFza0RpdignaXRlbXMgc2F2ZWQnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkRXhpc3RpbmdEYXRhVG9Ub2RheVBhZ2UoJ25vdGVzJywgJ3RvRG8nKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFeGlzdGluZ0RhdGFUb1RvZGF5UGFnZSh0eXBlT25lLCB0eXBlVHdvKSB7XG4gIC8vZ2V0IGFsbCBvZiB0aGUgdXNlcnMgbm90ZXMvdGFza3MgZnJvbSBMU1xuICBjb25zdCBub3RlcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ25vdGVzJyk7XG4gIGNvbnN0IHRhc2tzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIGlmIChub3Rlcykge1xuICAgIG5vdGVzLmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGFkZE5vdGVzVG9QYWdlKG5vdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRhc2tzKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYnVpbGRUb0RvVWkodGFzayk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHNldFRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb0RvKHR5cGUsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0KSB7XG4gIC8vIHdlIGRvbnQgd2FudCBwcm9qZWN0cyBiZWluZyBhZGRlZCBsaWtlIHRhc2tzL25vdGVzIHdpbGwgYmVcbiAgLy8gcmVmYWN0b3IgbGF0ZXJcbiAgaWYgKHR5cGUgPT09ICdub3RlcycgfHwgdHlwZSA9PT0gJ3RvRG8nKSB7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UodHlwZSwgdGFzayk7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCB0YXNrKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAncHJvamVjdC10YXNrJykge1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0KTtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2ssICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICB9XG59XG4iLCIvLyBmYWN0b3J5IGZ1bmN0aW9ucyB0byBtYWtlIG91ciB0b2RvIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBhc3NpZ25lZFxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhKCkge1xuICBjb25zdCB0YXNrVGl0bGUgPSBjYXB0dXJlTW9kYWxUaXRsZVRleHREYXRhKCcubW9kYWwtdGFzay10aXRsZS1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKCcubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEnKTtcbiAgY29uc3QgdGFza0RhdGUgPSBjYXB0dXJlTW9kYWxEYXRlRGF0YSgpO1xuICBjb25zdCBwcmlvcml0eUxldmVsID0gY2FwdHVyZU1vZGFsUHJpb3JpdHlMZXZlbCgpO1xuICByZXR1cm4geyB0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRGF0ZSwgcHJpb3JpdHlMZXZlbCB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYScpO1xuICByZXR1cm4geyB0YXNrVGl0bGUgfTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhKCkge1xuICBjb25zdCB0YXNrVGl0bGUgPSBjYXB0dXJlTW9kYWxUaXRsZVRleHREYXRhKCcubW9kYWwtbm90ZXMtdGl0bGUtYXJlYScpO1xuICBjb25zdCB0YXNrRGV0YWlscyA9IGNhcHR1cmVNb2RhbERldGFpbHNUZXh0RGF0YSgnLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYScpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGNhcHR1cmVNb2RhbERhdGVEYXRhKCk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlIH07XG59XG5cbi8vIGNhcHR1cmUgYWxsIHVzZXIgaW5wdXRzIG9uIG1vZGFsXG4vLyBvbmx5IG5lZWQgb25lIGZ1bmNpdG9uIGhlcmUgYmVsb3csIHdpbGwgcmVmYWN0b3IgbGF0ZXJcbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoZWxlbWVudENsYXNzTmFtZSkge1xuICBjb25zdCB0aXRsZVRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50Q2xhc3NOYW1lfWApO1xuICBjb25zdCB0ZXh0RGF0YSA9IHRpdGxlVGV4dEFyZWEudmFsdWUudHJpbSgpIHx8ICdOL0EnO1xuICByZXR1cm4gdGV4dERhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbERldGFpbHNUZXh0RGF0YShlbGVtZW50Q2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRldGFpbHNUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZWxlbWVudENsYXNzTmFtZX1gKTtcbiAgY29uc3QgdGV4dERhdGEgPSBkZXRhaWxzVGV4dEFyZWEudmFsdWUudHJpbSgpIHx8ICdOL0EnO1xuICByZXR1cm4gdGV4dERhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbERhdGVEYXRhKCkge1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0ZS1pbnB1dCcpO1xuICBjb25zdCBkYXRlRGF0YSA9IGRhdGVJbnB1dC52YWx1ZSB8fCAnTi9BJztcbiAgcmV0dXJuIGRhdGVEYXRhO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxQcmlvcml0eUxldmVsKCkge1xuICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYnRuJyk7XG4gIGNvbnN0IGJ1dHRvbkFycmF5ID0gQXJyYXkuZnJvbShwcmlvcml0eUJ1dHRvbnMpO1xuXG4gIC8vIGJ0biB3aXRoIGEgY29sb3Igb2Ygd2hpdGUgaXMgY3VycmVudGx5IHNlbGVjdGVkIGJ1dHRvblxuICBjb25zdCBwcmlvcml0eUNsaWNrZWQgPSBidXR0b25BcnJheS5maW5kKChlbGVtZW50KSA9PlxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKVxuICApO1xuXG4gIC8vIGlmIG5vIGJ1dHRvbiBpcyBjbGlja2VkIGp1c3QgcmV0dXJuIHRleHQgXCJMT1dcIlxuICBpZiAocHJpb3JpdHlDbGlja2VkID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ0xPVyc7XG4gIH0gZWxzZSByZXR1cm4gcHJpb3JpdHlDbGlja2VkLnRleHRDb250ZW50O1xufVxuXG5leHBvcnQge1xuICBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEsXG4gIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSxcbiAgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhLFxufTtcbiIsImltcG9ydCB7IHJlbW92ZVRhc2tGcm9tRG9tIH0gZnJvbSAnLi4vdWkvZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFzayh0eXBlLCBlbGVtZW50KSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgdGFzayA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IG5vdGVUaXRsZSA9IHRhc2suY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcbiAgICByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCBub3RlVGl0bGUpO1xuICB9KTtcbn1cbiIsImZ1bmN0aW9uIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKSB7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShsaW5rQXJyYXkpIHtcbiAgbGlua0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZEFjdGl2ZUF0dHJpYnV0ZSwgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUgfTtcbiIsIi8vIHJlZmFjdG9yIGJlbG93XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0VG9TaWRlYmFyKHByb2plY3RUaXRsZSkge1xuICBjb25zdCBwcm9qZWN0U2lkZWJhckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1wcm9qZWN0LWxpbmsnKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7cHJvamVjdFRpdGxlfSBwcm9qZWN0LWNoaWxkYCk7XG4gIC8vIGFkZCBsaW5rIGl0ZW0gY2xhc3MgbmFtZSBzbyB3ZSBjYW4gcmV1c2Ugb3RoZXIgbW9kdWxlcyBmb3IgYWN0aXZlIGxpbmsgY2xpY2tlZFxuICBuZXdQcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgbmV3UHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0VGl0bGV9YDtcbiAgLy8gaW5zZXJ0IG5ldyB1c2VyIHByb2plY3QgYnV0dG9uIEFGVEVSIHNpZGViYXIgcHJvamVjdCBsaW5rXG4gIHByb2plY3RTaWRlYmFyTGluay5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbmV3UHJvamVjdExpbmspO1xuXG4gIGNvbnN0IHByb2plY3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgcHJvamVjdHNJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtY2xpcGJvYXJkLWxpc3QnKTtcbiAgbmV3UHJvamVjdExpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgcHJvamVjdHNJY29uKTtcblxuICAvLyBpZiBwcm9qZWN0IHRpdGxlIGlzID4gMTUgY2hhcmFjdGVycyBhbmQgYSB0aXRsZSB0aGF0IHdpbGwgc2hvdyBvbiBob3ZlclxuICBjb25zdCBwcm9qZWN0VGl0bGVBcnJheSA9IHByb2plY3RUaXRsZS5zcGxpdCgnJyk7XG4gIGlmIChwcm9qZWN0VGl0bGVBcnJheS5sZW5ndGggPiAxNSkge1xuICAgIG5ld1Byb2plY3RMaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBgJHtwcm9qZWN0VGl0bGV9YCk7XG4gIH1cbn1cblxuLy8gcnVucyBvbmx5IHdoZW4gdXNlciBpcyBhZGRpbmcgYSBuZXcgcHJvamVjdCB0byBzaWRlYmFyXG5mdW5jdGlvbiBjaGVja0lmUHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzKHByb2plY3RUaXRsZSkge1xuICBjb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jaGlsZCcpO1xuICBsZXQgcHJvamVjdEV4aXN0cyA9IGZhbHNlO1xuXG4gIHNpZGViYXJQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgaWYgKHByb2plY3QudGV4dENvbnRlbnQgPT09IHByb2plY3RUaXRsZSkge1xuICAgICAgYWxlcnQoJ1lvdSBhbHJlYWR5IGhhdmUgYSBwcm9qZWN0IHdpdGggdGhhdCB0aXRsZSEnKTtcbiAgICAgIHByb2plY3RFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RFeGlzdHM7XG59XG5cbmV4cG9ydCB7IGNoZWNrSWZQcm9qZWN0TmFtZUFscmVhZHlFeGlzdHMgfTtcbiIsImltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4uL3Rhc2tzL2RlbGV0ZVRhc2tzJztcbmltcG9ydCB7IGNoZWNrQm94VGFza0V2ZW50cywgZXhwYW5kVGFza0RldGFpbHMgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2ssIGNvbnRhaW5lck5hbWUpIHtcbiAgLy8gcmVmYWN0b3IgYWxsIHRoaXMgbGF0ZXJcbiAgaWYgKHR5cGUgPT09ICd0b0RvJykge1xuICAgIC8vIHR5cGUgd291bGQgZXF1YWwgJ3RvRG8nXG4gICAgYWRkVG9Eb1RvUGFnZSh0YXNrKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdC10YXNrJykge1xuICAgIGFkZFRvRG9Ub1BhZ2UodGFzaywgY29udGFpbmVyTmFtZSk7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ25vdGVzJykge1xuICAgIGFkZE5vdGVzVG9QYWdlKHRhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9Eb1VpKHRhc2spIHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHt0YXNrLnRhc2tUaXRsZX1gKTtcbiAgdG9Eb0Rpdi5jbGFzc0xpc3QuYWRkKCd0by1kby1kaXYnKTtcbiAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcblxuICAvLyBsZWZ0XG4gIGNvbnN0IHRvRG9EaXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXZMZWZ0LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRpdi1sZWZ0Jyk7XG4gIHRvRG9EaXYuYXBwZW5kQ2hpbGQodG9Eb0RpdkxlZnQpO1xuXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNoZWNrYm94Jyk7XG4gIHRvRG9EaXZMZWZ0LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgLy8gYWRkIGV2ZW50IGhhbmRsZXJzIHRvIGVhY2ggY2hlY2tib3hcbiAgY2hlY2tCb3hUYXNrRXZlbnRzKCk7XG5cbiAgY29uc3QgdG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9Eby5jbGFzc0xpc3QuYWRkKCd0by1kbycpO1xuICB0b0RvLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrVGl0bGV9YDtcbiAgdG9Eb0RpdkxlZnQuYXBwZW5kQ2hpbGQodG9Ebyk7XG5cbiAgY29uc3QgZXhwYW5kRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZXhwYW5kRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWVsbGlwc2lzJyk7XG4gIHRvRG9EaXZMZWZ0LmFwcGVuZENoaWxkKGV4cGFuZERldGFpbHMpO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlcnMgdG8gZWFjaCBlbGxpcHNpc1xuICBleHBhbmRUYXNrRGV0YWlscyhleHBhbmREZXRhaWxzLCB0YXNrLnRhc2tEZXRhaWxzKTtcblxuICAvLyByaWdodFxuICBjb25zdCB0b0RvRGl2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0RpdlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRpdi1yaWdodCcpO1xuICB0b0RvRGl2LmFwcGVuZENoaWxkKHRvRG9EaXZSaWdodCk7XG5cbiAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcbiAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tEYXRlfWA7XG4gIHRvRG9EaXZSaWdodC5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG5cbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCd0by1kby1kZWxldGUtYnRuJyk7XG4gIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS10cmFzaCcpO1xuICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRGVsZXRlIFRhc2snKTtcbiAgdG9Eb0RpdlJpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBlYWNoIHRyYXNoIGNhbiBpY29uIG1hZGVcbiAgZGVsZXRlVGFzaygndG9EbycsIGRlbGV0ZVRhc2tCdG4pO1xuXG4gIGNvbnN0IHRvRG9Qcmlvcml0eUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvUHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKCd0by1kby1wcmlvcml0eS1sZXZlbCcpO1xuICB0b0RvUHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IGAke3Rhc2sucHJpb3JpdHlMZXZlbH1gO1xuICB0b0RvRGl2UmlnaHQuYXBwZW5kQ2hpbGQodG9Eb1ByaW9yaXR5TGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0RvVG9QYWdlKHRhc2ssIGNvbnRhaW5lck5hbWUpIHtcbiAgaWYgKGNvbnRhaW5lck5hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGJ1aWxkVG9Eb1VpKHRhc2spO1xuICB9IGVsc2Uge1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGJ1aWxkVG9Eb1VpKHRhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tDb250YWluZXIoY2xhc3NOYW1lKSB7XG4gIC8vIGlmIGNvbnRhaW5lciBhbHJlYWR5IGV4aXN0cyBqdXN0IHJldHVybiBzbyB3ZSBkb250IGdldCBkdXBsaWNhdGVzXG4gIGlmIChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCkgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJylcbiAgKVxuICAgIHJldHVybjtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBtYWluLmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBhZGROb3Rlc1RvUGFnZSh0YXNrKSB7XG4gIGFkZFRhc2tDb250YWluZXIoJ25vdGVzLWNvbnRhaW5lcicpO1xuICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICBjb25zdCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1kaXYnKTtcbiAgbm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZURpdik7XG5cbiAgY29uc3Qgbm90ZUhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub3RlSGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGUtaGVhZGVyJyk7XG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUhlYWRlckRpdik7XG5cbiAgY29uc3Qgbm90ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZUhlYWRlci50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza1RpdGxlfWA7XG4gIG5vdGVIZWFkZXJEaXYuYXBwZW5kQ2hpbGQobm90ZUhlYWRlcik7XG5cbiAgY29uc3QgZGVsZXRlTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGVsZXRlTm90ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgZGVsZXRlTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCdub3RlLWNsb3NlLWJ0bicpO1xuICBub3RlSGVhZGVyRGl2LmFwcGVuZENoaWxkKGRlbGV0ZU5vdGVCdG4pO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlciB0byBlYWNoIHRyYXNoIGNhbiBpY29uIG1hZGVcbiAgZGVsZXRlVGFzaygnbm90ZXMnLCBkZWxldGVOb3RlQnRuKTtcblxuICBjb25zdCBub3RlVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVUZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdub3RlLXRleHQtY29udGVudCcpO1xuICBub3RlVGV4dENvbnRlbnQudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tEZXRhaWxzfWA7XG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZVRleHRDb250ZW50KTtcblxuICBjb25zdCBub3RlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZURhdGUuY2xhc3NMaXN0LmFkZCgnbm90ZS1kYXRlJyk7XG4gIG5vdGVEYXRlLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrRGF0ZX1gO1xuICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVEYXRlKTtcbn1cblxuZXhwb3J0IHsgYWRkVGFza0NvbnRhaW5lciwgYnVpbGRUb0RvVWksIGFkZE5vdGVzVG9QYWdlIH07XG4iLCJpbXBvcnQgeyBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyIGZyb20gJy4uL2RlbGV0ZVByb2plY3RGcm9tU2lkZWJhcic7XG5pbXBvcnQgeyBhZGRUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi9hZGRUYXNrVG9QYWdlJztcblxuZnVuY3Rpb24gd2lwZURvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vIGlmIG1haW5Db250ZW50IGhhcyBhIGNoaWxkLCByZXBsYWNlIHcvZW1wdHkgc3RyaW5nIHNvIHdlIGNhbiBzaG93IG5leHQgbmF2IGl0ZW1zIGNsaWNrZWQgY29udGVudFxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXBlTW9kYWxDb250ZW50KGNvbnRlbnQpIHtcbiAgaWYgKGNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgLy8gaWYgbW9kYWwgbWFpbiBoYXMgYSBjaGlsZCwgcmVwbGFjZSB3L2VtcHR5IHN0cmluZyBzbyB3ZSBjYW4gc2hvdyBuZXh0IG5hdiBpdGVtcyBjbGlja2VkIGNvbnRlbnRcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuLy8gcmVmYWN0b3IgYmVsb3dcbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRG9tKHRhc2ssIHRhc2tUaXRsZSkge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKTtcblxuICBpZiAodG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdC10YXNrJywgdGFza1RpdGxlKTtcbiAgfSBlbHNlIGlmICh0b0RvQ29udGFpbmVyLmNsYXNzTmFtZSA9PT0gJ3RvLWRvLWNvbnRhaW5lcicpIHtcbiAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSgndG9EbycsIHRhc2tUaXRsZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ25vdGVzJywgdGFza1RpdGxlKTtcbiAgfVxuXG4gIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodGFzayk7XG5cbiAgLy8gaWYgcHJvamVjdCBwYWdlIGhhcyBubyBjaGlsZHJlbiB0aGVuIHdlJ2xsIGdyYWIgdGhlIHBhZ2UgaGVhZGVyIGFuZCBkZWxldGVcbiAgLy8gaXQgZnJvbSB0aGUgc2lkZWJhclxuICBpZiAoXG4gICAgdG9Eb0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiZcbiAgICB0b0RvQ29udGFpbmVyLnRleHRDb250ZW50ID09PSAncHJvamVjdC1jb250YWluZXInXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50JykudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyKGN1cnJlbnRQYWdlKTtcbiAgICB3aXBlRG9tQ29udGVudCgpO1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpIHtcbiAgY29uc3Qgbm9UYXNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrLXRleHQnKTtcbiAgY29uc3QgbmV3Q29udGVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5ldycpO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gIGlmIChjb250YWluZXIuY29udGFpbnMobm9UYXNrVGV4dCkpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9UYXNrVGV4dCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0NvbnRlbnRCdG4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG4gIGNvbnN0IGNvbnRhaW5lclRvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjb250YWluZXJ9YCk7XG4gIG1haW4ucmVtb3ZlQ2hpbGQoY29udGFpbmVyVG9EZWxldGUpO1xufVxuXG4vLyBmdW5jdGlvbiBjaGFuZ2VDb250YWluZXJOYW1lKGVsZW1lbnROYW1lLCBuZXdFbGVtZW50TmFtZSkge1xuLy8gICBjb25zb2xlLmxvZygnaGplcmUnKTtcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnROYW1lfWApO1xuLy8gICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbi8vICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3RWxlbWVudE5hbWUpO1xuLy8gfVxuXG5leHBvcnQge1xuICB3aXBlRG9tQ29udGVudCxcbiAgd2lwZU1vZGFsQ29udGVudCxcbiAgcmVtb3ZlVGFza0Zyb21Eb20sXG4gIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSxcbiAgZGVsZXRlQ29udGFpbmVyLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0eXBlKSB7XG4gIC8vIHVzaW5nIGlubmVySFRNTCBzbyB3ZSBjYW4gZ3JhYiB0aGUgaWNvbiBhcyB3ZWxsIGFzIHRleHRcbiAgY29uc3Qgc2lkZWJhckxpbmtDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmlubmVySFRNTDtcbiAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuICAvLyBwYWdlSGVhZGVyLmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY29udGVudCcpO1xuICBoZWFkZXJDb250ZW50LmlubmVySFRNTCA9IGAke3NpZGViYXJMaW5rQ2xpY2tlZH1gO1xuICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBjb25zdCBwcm9qZWN0VHJhc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VHJhc2hEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10cmFzaC1kaXYnKTtcbiAgICBwYWdlSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RUcmFzaERpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hDYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgcHJvamVjdFRyYXNoQ2FuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2gtY2FuJyk7XG4gICAgcHJvamVjdFRyYXNoRGl2LmFwcGVuZENoaWxkKHByb2plY3RUcmFzaENhbik7XG5cbiAgICBjb25zdCBwcm9qZWN0VHJhc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUcmFzaFRleHQudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgIHByb2plY3RUcmFzaERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VHJhc2hUZXh0KTtcbiAgfVxuXG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xufVxuIiwiaW1wb3J0IGxvYWRUYXNrTGlzdCBmcm9tICcuLi9wYWdlcy90YXNrTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCByaWdodE1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0TWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1yaWdodCcpO1xuICBib2R5LmFwcGVuZENoaWxkKHJpZ2h0TWFpbkNvbnRlbnQpO1xuXG4gIC8vIG9uIHBhZ2UgbG9hZCBvcGVuIHRvICd0YXNrLWxpc3QnXG4gIGxvYWRUYXNrTGlzdCgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGREdWVEYXRlRGl2KGVsZW1lbnQpIHtcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRhdGUtZGl2Jyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbiAgYnVpbGREdWVEYXRlTGFiZWwoZGF0ZURpdik7XG4gIGJ1aWxkRHVlRGF0ZUlucHV0KGRhdGVEaXYpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVMYWJlbChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWxhYmVsJyk7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJztcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xufVxuXG5mdW5jdGlvbiBidWlsZER1ZURhdGVJbnB1dChkYXRlRGl2KSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uKGVsZW1lbnQsIGNsYXNzTmFtZSwgYnRuVGV4dCkge1xuICBjb25zdCBhZGROZXdCdG5Nb2RhbFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkTmV3QnRuTW9kYWxQYWdlLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkLWJ0bicpO1xuICBhZGROZXdCdG5Nb2RhbFBhZ2UudGV4dENvbnRlbnQgPSBgJHtidG5UZXh0fWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkTmV3QnRuTW9kYWxQYWdlKTtcbn1cbiIsImltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4uL2FjdGl2ZUF0dHJpYnV0ZSc7XG5pbXBvcnQgbG9hZE1vZGFsVGFza1BhZ2UgZnJvbSAnLi9tb2RhbC10YXNrLXBhZ2UnO1xuaW1wb3J0IGxvYWRNb2RhbFByb2plY3RQYWdlIGZyb20gJy4vbW9kYWwtcHJvamVjdC1wYWdlJztcbmltcG9ydCBsb2FkTW9kYWxOb3Rlc1BhZ2UgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UnO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxTaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtbGluaycpO1xuICBjb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlLWJ0bicpO1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKTtcblxuICBtb2RhbFNpZGViYXJMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShtb2RhbFNpZGViYXJMaW5rcyk7XG4gICAgICBhZGRBY3RpdmVBdHRyaWJ1dGUoZSk7XG4gICAgICBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGUpO1xuICAgIH0pO1xuICB9KTtcblxuICBuZXdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcbiAgICByZW1vdmVNb2RhbCgpO1xuICB9KTtcblxuICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpY2hNb2RhbFNpZGViYXJMaW5rSXNDbGlja2VkKGxpbmspIHtcbiAgc3dpdGNoIChsaW5rLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgJ1Rhc2snOlxuICAgICAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1Byb2plY3QnOlxuICAgICAgbG9hZE1vZGFsUHJvamVjdFBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05vdGUnOlxuICAgICAgbG9hZE1vZGFsTm90ZXNQYWdlKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza05vdGVzRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtYnRuJyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBub1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJyk7XG5cbiAgLy8gY2FwdHVyZSB0b2RvIG9iamVjdCBpbiB0YXNrIHZhcmlhYmxlXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKTtcbiAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICBhZGRUb0RvKCdub3RlcycsIHRhc2spO1xuICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgaWYgKG5vVGFza0NvbnRhaW5lcikge1xuICAgICAgbWFpbi5yZW1vdmVDaGlsZChub1Rhc2tDb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrTm90ZXNFdmVudHMgZnJvbSAnLi9tb2RhbC1ub3RlLXBhZ2UtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1vZGFsTm90ZXNQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ub3Rlcy10ZXh0LWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtbm90ZXMtdGl0bGUtYXJlYScsXG4gICAgJ1RpdGxlOiBHcm9jZXJ5IExpc3QuJyxcbiAgICBtb2RhbE1haW5Db250ZW50XG4gICk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhJyxcbiAgICAnRGV0YWlsczogZnJ1aXQsIHdhdGVycywgbWVhdCcsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsRHVlRGF0ZURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24obW9kYWxNYWluQ29udGVudCwgJ21vZGFsLWFkZC1ub3RlLWJ0bicsICdBZGQgTm90ZScpO1xuXG4gIC8vIGNhbGwgc3BlY2lmaWMgbW9kYWwgbm90ZSBwYWdlIGV2ZW50c1xuICBtb2RhbFRhc2tOb3Rlc0V2ZW50cygpO1xufVxuIiwiaW1wb3J0IHsgY2FwdHVyZU1vZGFsUHJvamVjdFBhZ2VEYXRhIH0gZnJvbSAnLi4vLi4vdGFza3MvY2FwdHVyZVRhc2tEYXRhJztcbmltcG9ydCBhZGRUb0RvIGZyb20gJy4uLy4uL3Rhc2tzL2FkZFRhc2tzJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyLCB7XG4gIGNoZWNrSWZQcm9qZWN0TmFtZUFscmVhZHlFeGlzdHMsXG59IGZyb20gJy4uL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuaW1wb3J0IGFkZFBhZ2VFdmVudExpc3RlbmVycyBmcm9tICcuLi8uLi9ldmVudHMnO1xuaW1wb3J0IHsgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlIH0gZnJvbSAnLi4vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxUYXNrUHJvamVjdEV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWJ0bicpO1xuXG4gIG1vZGFsQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGNhcHR1cmUgdG9kbyBvYmplY3QgaW4gdGFzayB2YXJpYWJsZVxuICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxQcm9qZWN0UGFnZURhdGEoKTtcbiAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcblxuICAgIC8vIGRlc3RydWN0dXJlIGFuZCByZW5hbWUgdG8gcHJvamVjdCB0aXRsZSBzbyB3ZSBjYW4gYWRkIHRvIHNpZGViYXIgdGhyb3VnaCBmdW5jdGlvbiBjYWxsXG4gICAgY29uc3QgeyB0YXNrVGl0bGU6IHByb2plY3RUaXRsZSB9ID0gdGFzaztcbiAgICBpZiAocHJvamVjdFRpdGxlID09PSAnTi9BJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrID0gY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyhwcm9qZWN0VGl0bGUpO1xuICAgIC8vIGlmIHdlIGhhdmUgYSBkdXBsaWNhdGUgcHJvamVjdCBuYW1lIHJldHVybiwgZWxzZSBhZGQgcHJvamVjdCB0byBzaWRlYmFyXG4gICAgaWYgKGNoZWNrID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRvRG8oJ3Byb2plY3QnLCB0YXNrKTtcbiAgICAgIGFkZE5ld1Byb2plY3RUb1NpZGViYXIocHJvamVjdFRpdGxlKTtcbiAgICAgIGFkZFBhZ2VFdmVudExpc3RlbmVycygpO1xuICAgICAgcmVtb3ZlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgd2lwZU1vZGFsQ29udGVudCB9IGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgYnVpbGRNb2RhbER1ZURhdGVEaXYgZnJvbSAnLi9kdWUtZGF0ZSc7XG5pbXBvcnQgYnVpbGRNb2RhbFRleHRBcmVhIGZyb20gJy4vdGV4dC1hcmVhJztcbmltcG9ydCBidWlsZE1vZGFsQWRkVGFza0J1dHRvbiBmcm9tICcuL21vZGFsLWFkZC1idXR0b24nO1xuaW1wb3J0IG1vZGFsVGFza1Byb2plY3RFdmVudHMgZnJvbSAnLi9tb2RhbC1wcm9qZWN0LXBhZ2UtZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1vZGFsUHJvamVjdFBhZ2UoKSB7XG4gIC8vIGlmIGl0IGV4aXN0cyB0aGVuIGRvbnQgYnVpbGQgdGhlIHBhZ2UgYmVjYXVzZSBpdHMgb3BlbiBhbHJlYWR5LCBqdXN0IHJldHVyblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJykpIHJldHVybjtcblxuICBjb25zdCBtb2RhbE1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICB3aXBlTW9kYWxDb250ZW50KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXByb2plY3QtdGV4dC1hcmVhJyxcbiAgICAnVGl0bGU6IEJ1aWxkIG5ldyBmZW5jZS4nLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24oXG4gICAgbW9kYWxNYWluQ29udGVudCxcbiAgICAnbW9kYWwtYWRkLXByb2plY3QtYnRuJyxcbiAgICAnQWRkIFByb2plY3QnXG4gICk7XG5cbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCBwcm9qZWN0IHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza1Byb2plY3RFdmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSB9IGZyb20gJy4uLy4uL3Rhc2tzL2NhcHR1cmVUYXNrRGF0YSc7XG5pbXBvcnQgYWRkVG9EbyBmcm9tICcuLi8uLi90YXNrcy9hZGRUYXNrcyc7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5pbXBvcnQgeyBjaGVja0Zvck5vVGFza01lc3NhZ2UgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHtcbiAgYWRkQWN0aXZlQXR0cmlidXRlLFxuICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSxcbn0gZnJvbSAnLi4vYWN0aXZlQXR0cmlidXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxUYXNrUGFnZUV2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWJ0bicpO1xuICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYnRuJyk7XG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXInKTtcbiAgY29uc3QgcGFnZUhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWNvbnRlbnQnKTtcblxuICBtb2RhbEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFnZUhlYWRlciA9PT0gbnVsbCkge1xuICAgICAgcGFnZUhlYWRlciA9ICcgJztcbiAgICAgIHBhZ2VIZWFkZXJUZXh0ID0gJyAnO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHRhc2sgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIGEgcHJvamVjdCBvciBub3RcbiAgICBpZiAocGFnZUhlYWRlci5uZXh0U2libGluZy5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICAgIC8vIGNhcHR1cmUgdG9kbyBvYmplY3QgaW4gdGFzayB2YXJpYWJsZVxuICAgICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSgpO1xuICAgICAgcmVtb3ZlTW9kYWwoKTtcbiAgICAgIGNoZWNrRm9yTm9UYXNrTWVzc2FnZSgpO1xuICAgICAgYWRkVG9EbygncHJvamVjdC10YXNrJywgdGFzaywgcGFnZUhlYWRlclRleHQudGV4dENvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXNrID0gY2FwdHVyZU1vZGFsVGFza1BhZ2VEYXRhKCk7XG4gICAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICAgIGFkZFRvRG8oJ3RvRG8nLCB0YXNrKTtcbiAgICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBwcmlvcml0eUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIC8vIGFkZCBhY3RpdmUgdG8gY2xhc3NsaXN0IG9mIGNsaWtlZCBidXR0b24gc28gd2UgY2FuIHN0eWxlIGl0IHdpdGggY3NzXG4gICAgICBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZShwcmlvcml0eUJ1dHRvbnMpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHdpcGVNb2RhbENvbnRlbnQgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IGJ1aWxkTW9kYWxEdWVEYXRlRGl2IGZyb20gJy4vZHVlLWRhdGUnO1xuaW1wb3J0IGJ1aWxkTW9kYWxUZXh0QXJlYSBmcm9tICcuL3RleHQtYXJlYSc7XG5pbXBvcnQgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24gZnJvbSAnLi9tb2RhbC1hZGQtYnV0dG9uJztcbmltcG9ydCBtb2RhbFRhc2tQYWdlRXZlbnRzIGZyb20gJy4vbW9kYWwtdGFzay1wYWdlLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNb2RhbFRhc2tQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1vZGFsTWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbmV3LWNvbnRlbnQtZGl2Jyk7XG4gIHdpcGVNb2RhbENvbnRlbnQobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUZXh0QXJlYShcbiAgICAnbW9kYWwtdGFzay10aXRsZS1hcmVhJyxcbiAgICAnVGl0bGU6IFBheSBCaWxscycsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXRhc2stZGV0YWlscy1hcmVhJyxcbiAgICAnRGV0YWlsczogcGhvbmUgYmlsbCcsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsRHVlRGF0ZURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KTtcbiAgLy8gY2FsbCBzcGVjaWZpYyBtb2RhbCB0YXNrIHBhZ2UgZXZlbnRzXG4gIG1vZGFsVGFza1BhZ2VFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNb2RhbFRhc2twcmlvcml0eURpdihtb2RhbE1haW5Db250ZW50KSB7XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXByaW9yaXR5LWRpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgbW9kYWxNYWluQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuLWRpdicpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eWJ1dHRvbkRpdik7XG5cbiAgYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpO1xuICBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihwcmlvcml0eURpdiwgJ21vZGFsLWFkZC10YXNrLWJ0bicsICdBZGQgdG8gZG8nKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQcmlvcml0eUJ1dHRvbnMocHJpb3JpdHlidXR0b25EaXYpIHtcbiAgY29uc3QgcHJpb3JpdHlMb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlMb3dCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93LWJ0bicpO1xuICBwcmlvcml0eUxvd0J0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlMb3dCdG4udGV4dENvbnRlbnQgPSAnTE9XJztcbiAgcHJpb3JpdHlidXR0b25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3dCdG4pO1xuXG4gIGNvbnN0IHByaW9yaXR5TWVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5TWVkQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZC1idG4nKTtcbiAgcHJpb3JpdHlNZWRCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5TWVkQnRuLnRleHRDb250ZW50ID0gJ01FRElVTSc7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWVkQnRuKTtcblxuICBjb25zdCBwcmlvcml0eUhpZ2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWhpZ2gtYnRuJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgcHJpb3JpdHlIaWdoQnRuLnRleHRDb250ZW50ID0gJ0hJR0gnO1xuICBwcmlvcml0eWJ1dHRvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2hCdG4pO1xufVxuIiwiaW1wb3J0IG1vZGFsRXZlbnRzIGZyb20gJy4vbW9kYWwtZXZlbnRzJztcbmltcG9ydCBsb2FkTW9kYWxUYXNrUGFnZSBmcm9tICcuL21vZGFsLXRhc2stcGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpKSByZXR1cm47XG4gIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG5ld01vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1tb2RhbCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TW9kYWwpO1xuXG4gIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKTtcbiAgY3JlYXRlTW9kYWxTaWRlYmFyKCk7XG4gIGNyZWF0ZU1vZGFsQ29udGVudERpdigpO1xuXG4gIG5ld01vZGFsLnNob3dNb2RhbCgpO1xuXG4gIC8vIHdlIHdhbnQgdGFzayBwYWdlIHRvIGJlIHRoZSBmaXJzdCB0byBhdXRvbWF0aWNhbGx5IHNob3cgaW4gbW9kYWxcbiAgbG9hZE1vZGFsVGFza1BhZ2UoKTtcblxuICAvLyBsb2FkIG1vZGFsIGV2ZW50cyBzbyB1c2VyIGNhbiBjaGFuZ2UgdGFicy9ldGNcbiAgbW9kYWxFdmVudHMobmV3TW9kYWwsIGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsLCB0YXNrSGVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHRhc2tIZWFkZXIgfHwgJ0NyZWF0ZSBhIG5ldy4uLic7XG4gIG5ld01vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNsb3NlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEteCcpO1xuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0Nsb3NlJyk7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlLWJ0bicpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbE1haW5EaXYobmV3TW9kYWwpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW1haW4tZGl2Jyk7XG4gIG5ld01vZGFsLmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbFNpZGViYXIoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbWFpbi1kaXYnKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNpZGViYXInKTtcblxuICBjb25zdCBzaWRlYmFyTGlua1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua1Rhc2tzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgLy8gYWRkIGFjdGl2ZSB0byBzaG93IHRhc2sgcGFnZSBmaXJzdCBpbiBtb2RhbFxuICBzaWRlYmFyTGlua1Rhc2tzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBzaWRlYmFyTGlua1Rhc2tzLnRleHRDb250ZW50ID0gJ1Rhc2snO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaW5rVGFza3MpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNpZGViYXJMaW5rUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnbW9kYWwtbGluaycpO1xuICBzaWRlYmFyTGlua1Byb2plY3RzLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaW5rUHJvamVjdHMpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNpZGViYXJMaW5rTm90ZXMuY2xhc3NMaXN0LmFkZCgnbW9kYWwtbGluaycpO1xuICBzaWRlYmFyTGlua05vdGVzLnRleHRDb250ZW50ID0gJ05vdGUnO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJMaW5rTm90ZXMpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbENvbnRlbnREaXYoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbWFpbi1kaXYnKTtcbiAgY29uc3QgbmV3Q29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnREaXYpO1xuXG4gIGNvbnN0IG5ld0VudHJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0VudHJ5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW5ldy1lbnRyeScpO1xuICBuZXdDb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld0VudHJ5RGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxUYXNrRGV0YWlsc0FyZWEobmV3TW9kYWwsIGRldGFpbHMpIHtcbiAgY29uc3QgdGFza0RldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0RldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kZXRhaWxzJyk7XG4gIHRhc2tEZXRhaWxzRGl2LnRleHRDb250ZW50ID0gZGV0YWlscztcbiAgbmV3TW9kYWwuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNEaXYpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNb2RhbEhlYWRlciwgY3JlYXRlTW9kYWxNYWluRGl2LCBjcmVhdGVNb2RhbFRhc2tEZXRhaWxzQXJlYSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlTW9kYWwoKSB7XG4gIGNvbnN0IG5ld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1tb2RhbCcpO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdNb2RhbCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vZGFsVGV4dEFyZWEoY2xhc3NOYW1lLCBwbGFjZWhvbGRlciwgZWxlbWVudCkge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgLy8gbGltaXQgY2hhcmFjdGVyIGxlbmd0aCBvbiB0aXRsZSB0ZXh0IGFyZWFzXG4gIGlmIChjbGFzc05hbWUuaW5jbHVkZXMoJ3RpdGxlJykpIHtcbiAgICB0ZXh0QXJlYS5tYXhMZW5ndGggPSAzMDtcbiAgfVxuXG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9IGAke3BsYWNlaG9sZGVyfWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xufVxuIiwiaW1wb3J0IHsgZGlhbG9nRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZU5ld1Rhc2tEaXYoY2hvaWNlLCBjb250YWluZXJDbGFzc05hbWUpIHtcbiAgY29uc3QgbWFpblJpZ2h0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXJpZ2h0Jyk7XG4gIGNvbnN0IGNvbnRhaW5lclRvQ2hlY2tGb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjb250YWluZXJDbGFzc05hbWV9YCk7XG4gIGNoZWNrSWZUYXNrRGl2RXhpc3RzKG1haW5SaWdodEJvZHksIGNvbnRhaW5lclRvQ2hlY2tGb3IpO1xuXG4gIGNvbnN0IG5vVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChjb250YWluZXJDbGFzc05hbWUpO1xuICBtYWluUmlnaHRCb2R5LmFwcGVuZENoaWxkKG5vVGFza0Rpdik7XG5cbiAgY3JlYXRlTm9UYXNrQ29udGFpbmVyVGV4dChub1Rhc2tEaXYsIGNob2ljZSk7XG4gIGNyZWF0ZU5vVGFza0NvbnRhaW5lckJ1dHRvbihub1Rhc2tEaXYpO1xuICBkaWFsb2dFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9UYXNrQ29udGFpbmVyVGV4dChub1Rhc2tEaXYsIGNob2ljZSkge1xuICBjb25zdCBub1Rhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub1Rhc2tUZXh0LnRleHRDb250ZW50ID0gYFlvdSBoYXZlIG5vICR7Y2hvaWNlfSB5ZXQsIGxldHMgbWFrZSBzb21lIWA7XG4gIG5vVGFza1RleHQuY2xhc3NMaXN0LmFkZCgnbm8tdGFzay10ZXh0Jyk7XG4gIG5vVGFza0Rpdi5hcHBlbmRDaGlsZChub1Rhc2tUZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9UYXNrQ29udGFpbmVyQnV0dG9uKG5vVGFza0Rpdikge1xuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcbiAgICAnY2xhc3MnLFxuICAgICduZXctY29udGVudCBtYWluLW5ldyBmYS1yZWd1bGFyIGZhLXBsdXMgZmEtMnhsJ1xuICApO1xuICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnTmV3Jyk7XG4gIG5vVGFza0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlRhc2tEaXZFeGlzdHMobWFpblJpZ2h0Qm9keSwgY29udGFpbmVyVG9DaGVja0Zvcikge1xuICBpZiAoY29udGFpbmVyVG9DaGVja0Zvcikge1xuICAgIG1haW5SaWdodEJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyVG9DaGVja0Zvcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZEV4aXN0aW5nUHJvamVjdHNUb1NpZGViYXIgfSBmcm9tICcuLi9wYWdlcy9wcm9qZWN0cyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1sZWZ0Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIGNyZWF0ZVRvcFNpZGViYXJDb250ZW50KHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb3BTaWRlYmFyQ29udGVudChzaWRlYmFyKSB7XG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci10b3AtY29udGFpbmVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcblxuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaWRlYmFyTGlua3MuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpbmtzKTtcblxuICAvLyBjb25zdCB0b2RheUxpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgLy8gdG9kYXlMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgLy8gc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHRvZGF5TGlua0l0ZW0pO1xuICAvLyBjb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIC8vIHRvZGF5TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpZGViYXItbGluayBmYS1zb2xpZCBmYS1zdW4nKTtcbiAgLy8gdG9kYXlMaW5rSXRlbS5hcHBlbmRDaGlsZCh0b2RheUxpbmspO1xuICAvLyBjb25zdCB0b2RheUxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAvLyB0b2RheUxpbmtUZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG4gIC8vIHRvZGF5TGlua1RleHQudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAvLyB0b2RheUxpbmtJdGVtLmFwcGVuZENoaWxkKHRvZGF5TGlua1RleHQpO1xuXG4gIGNvbnN0IHRhc2tMaXN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICB0YXNrTGlzdExpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQodGFza0xpc3RMaW5rSXRlbSk7XG4gIGNvbnN0IHRhc2tMaXN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgdGFza0xpc3RMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtY2hlY2snKTtcbiAgdGFza0xpc3RMaW5rSXRlbS5hcHBlbmRDaGlsZCh0YXNrTGlzdExpbmspO1xuXG4gIGNvbnN0IHRhc2tMaXN0TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHRhc2tMaXN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG4gIC8vIGFkZCBhY3RpdmUgdG8gdGFzayBsaXN0IGJlY2F1c2Ugd2Ugd2FudCB0aGlzIHBhZ2UgdG8gc2hvdyBhdXRvbWF0aWNhbGx5XG4gIHRhc2tMaXN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIHRhc2tMaXN0TGlua1RleHQudGV4dENvbnRlbnQgPSAnVGFzayBMaXN0JztcbiAgdGFza0xpc3RMaW5rSXRlbS5hcHBlbmRDaGlsZCh0YXNrTGlzdExpbmtUZXh0KTtcblxuICBjb25zdCBub3Rlc0xpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbm90ZXNMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKG5vdGVzTGlua0l0ZW0pO1xuICBjb25zdCBub3Rlc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5vdGVzTGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWJvb2snKTtcbiAgbm90ZXNMaW5rSXRlbS5hcHBlbmRDaGlsZChub3Rlc0xpbmspO1xuICBjb25zdCBub3Rlc0xpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBub3Rlc0xpbmtUZXh0LmNsYXNzTGlzdC5hZGQoJ25vdGVzJyk7XG4gIG5vdGVzTGlua1RleHQudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICBub3Rlc0xpbmtJdGVtLmFwcGVuZENoaWxkKG5vdGVzTGlua1RleHQpO1xuXG4gIGNyZWF0ZUJvdHRvbVNpZGViYXJDb250ZW50KHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b21TaWRlYmFyQ29udGVudChzaWRlYmFyKSB7XG4gIGNvbnN0IGJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1ib3R0b20tY29udGFpbmVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGFpbmVyKTtcblxuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzaWRlYmFyTGlua3MuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICBib3R0b21Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckxpbmtzKTtcblxuICBjb25zdCBwcm9qZWN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBwcm9qZWN0TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWxpbmsnKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHByb2plY3RMaW5rSXRlbSk7XG4gIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBwcm9qZWN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWZpbGUnKTtcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKTtcbiAgY29uc3QgcHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgcHJvamVjdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKHByb2plY3RMaW5rVGV4dCk7XG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdExpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBhZGROZXdQcm9qZWN0TGlua0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1wbHVzJyk7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLnRleHRDb250ZW50O1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdExpbmtJdGVtKTtcbiAgY29uc3QgYWRkTmV3cHJvamVjdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhZGROZXdwcm9qZWN0TGlua1RleHQuY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1wcm9qZWN0Jyk7XG4gIGFkZE5ld3Byb2plY3RMaW5rVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgcHJvamVjdCc7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5hcHBlbmRDaGlsZChhZGROZXdwcm9qZWN0TGlua1RleHQpO1xuICAvLyBpZiBhbnlcbiAgYWRkRXhpc3RpbmdQcm9qZWN0c1RvU2lkZWJhcigpO1xuXG4gIGNyZWF0ZVNpZGViYXJGb290ZXIoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXJGb290ZXIoc2lkZWJhcikge1xuICBjb25zdCBzaWRlYmFyRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJGb290ZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1mb290ZXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyRm9vdGVyKTtcblxuICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ25ldy1idXR0b24tZGl2Jyk7XG4gIHNpZGViYXJGb290ZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgY29uc3QgbmV3Q29udGVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbmV3Q29udGVudEJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05ldycpO1xuICBuZXdDb250ZW50QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3LWNvbnRlbnQgZmEtc29saWQgZmEtcGx1cycpO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudEJ0bik7XG5cbiAgY29uc3Qgc2V0dGluZ3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2V0dGluZ3NEaXYuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtZGl2Jyk7XG4gIHNpZGViYXJGb290ZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NEaXYpO1xuICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgc2V0dGluZ3NCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdTZXR0aW5ncycpO1xuICBzZXR0aW5nc0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpZGViYXItc2V0dGluZ3MgZmEtc29saWQgZmEtZ2VhcicpO1xuICBzZXR0aW5nc0Rpdi5hcHBlbmRDaGlsZChzZXR0aW5nc0J0bik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTaWRlQmFyKCkge1xuICBjcmVhdGVTaWRlYmFyKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZFNpZGVCYXIgZnJvbSAnLi91aS9zaWRlYmFyJztcbmltcG9ydCBsb2FkTWFpbkNvbnRlbnQgZnJvbSAnLi91aS9tYWluQ29udGVudCc7XG5pbXBvcnQgcGFnZUV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubG9hZFNpZGVCYXIoKTtcbmxvYWRNYWluQ29udGVudCgpO1xucGFnZUV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9