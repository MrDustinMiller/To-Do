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
  /* display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center; */
  /* gap: 5rem;
  font-size: 2rem; */
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* css reset */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-family: var(--font-style)\n}\n\n/* dark mode user-agent-styles */\n\nhtml {\n  color-scheme: dark light;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n:root {\n --font-color: rgba(10, 10, 7, 0.6);\n --text-hover-color: rgba(24, 24, 17, 0.088);\n --main-background-color:  #ffffff;\n --priority-low-color: green;\n --priority-high-color: red;\n --priority-med-color: rgb(236, 176, 11);;\n --add-tasks-button-color: #5cb2a7;\n --font-style: sans-serif;\n --secondary-background-color: #efefef;\n}\n\nli {\n  list-style-type: none;\n}\n\n.sidebar-left {\n  font-size: 0.8rem;\n  height: 100vh;\n  width:13vw;\n  background-color:var(--secondary-background-color);\n  padding: 8px; \n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-links {\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n/* ADD ANIMATIONS FOR LINKS LATER */\n.link-item:hover, .add-project-btn:hover {\n  cursor: pointer;\n  background-color:  var(--text-hover-color);\n}\n\n.link-item:not(.project-child) {\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.sidebar-project-link {\n  font-size: 1.1rem; \n}\n\n.fa-file {\n  margin-right: 0.5em\n}\n\n.add-project-btn {\n  font-weight: 500;\n  margin-left: 0.5em;\n  margin-top: 0.5em;\n  display: flex;\n} \n\n.add-new-project {\n  margin-left: 0.5em;\n}\n\n.link-item > a {\n  font-size: 1.1rem;\n  margin-left: 0.5rem;\n}\n\n[class|='link-item active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n}\n\n button[class~='active'] {\n  color:rgb(0, 0, 0);\n  font-weight: bold;\n  background-color:  var(--text-hover-color);\n} \n\n.sidebar-top-container{\n  position: relative;\n  top: 3rem;\n  padding-bottom: 10rem;  \n}\n\n.sidebar-bottom-container{\n  position: relative; \n}\n\na {\n  pointer-events: none;\n}\n\n.sidebar-footer {\n  color: var(--font-color);\n  position: absolute;\n  bottom: 0;\n  width: 13vw;\n  height: 2.5rem;\n  left: 0;\n  border-top: 2px solid rgba(85, 83, 83, 0.68);\n  display: flex;\n  align-items: center;  \n  justify-content: space-around;\n}\n\n.sidebar-new:hover, .sidebar-settings:hover, .new-content:hover, .modal-link:hover, .fa-x:hover, \n.modal-date-input:hover, .modal-btn:hover, .fa-trash, .fa-trash-can, .fa-ellipsis {\n  cursor: pointer;\n}\n\n.new-button-div {\n  display: flex;\n}\n\n.main-right {\n  width:100%;\n  background-color: var(--main-background-color);\n  overflow:auto;\n}\n\n .to-do-container {\n  height: 100%;\n  /* display: flex;\n  flex-direction: column;\n  align-items:center;\n  justify-content: center; */\n  /* gap: 5rem;\n  font-size: 2rem; */\n  color: var(--font-color)\n} \n\n.notes-container {\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  font-size: 1rem;\n  color: var(--font-color)\n}\n\n.main-new::before {\n  font-size: 5rem;\n}\n\n.page-header {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  justify-content: space-between;\n}\n\n.modal-main-div {\n  display: flex;\n}\n\ndialog {\n  margin: auto;\n  border-radius: 8px;\n  font-size: 1.25rem;\n  color: var(--font-color)\n}\n\n.modal-new-content-div {\n  text-indent: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-task-title-area, .modal-task-details-area, .modal-notes-details-area, .modal-notes-text-area, .modal-project-text-area{\n  text-indent: 10px;\n}\n.modal-notes-details-area {\n  min-height: 14dvh;\n}\n.modal-link {\n  margin-top: .5em;\n}\n\n[class|='modal-link active'] {\n  color: rgb(0, 0, 0);\n}\n\n[class|='modal-link active']::before {\n  content: '🠚';\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n  margin-right: .25em;\n\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #c38d9e;\n  font-size: 1.5rem;\n  color: white;\n  padding: 0.5rem;\n}\n\n.modal-new-entry {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-sidebar {\n  width: 10dvw;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #fbfbfa;\n  min-height: 35dvh;\n}\n\n.modal-date-input {\n  border-radius: 8px;\n  border: 1.5px solid var(--add-tasks-button-color);\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-size: 1.25rem;\n  color:var(--add-tasks-button-color)\n}\n\n.modal-date-div {  \n  margin-bottom: .5em;\n}\n\n.modal-priority-div {\n  display: flex;\n}\n\n.priority-btn-div {\n  gap: 1rem;\n  display: flex;\n  margin-left: .5em;\n  width: 60%;\n}\n\n.modal-add-note-btn, .modal-add-project-btn {\n  margin-left: 10px;\n  width: 52%;\n}\n\n.modal-add-task-btn, .modal-add-note-btn, .modal-add-project-btn {\n  color:var(--add-tasks-button-color);\n  border: 1.5px solid var(--add-tasks-button-color);\n}\n\n.modal-add-note-btn:hover, .modal-add-project-btn:hover, .modal-add-task-btn:hover {\n  background-color:var(--add-tasks-button-color);\n  color:white;\n  transition: all 0.25s;\n}\n\n.modal-btn, .modal-add-btn {\n  background-color: var(--main-background-color);\n  border-radius: 5px;\n  padding: 0.125em 0.25em 0.125em 0.25em;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.priority-low-btn {\n  border: 1.5px solid var(--priority-low-color);\n  color: var(--priority-low-color);\n}\n\n.priority-low-btn:hover  {\n background-color: var(--priority-low-color);\n color:var(--main-background-color);\n transition: all 0.25s;\n}\n\n.priority-med-btn {\n  border: 1.5px solid var(--priority-med-color);\n  color: var(--priority-med-color)\n}\n\n.priority-med-btn:hover  {\n  background-color: var(--priority-med-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\n.priority-high-btn {\n  border: 1.5px solid var(--priority-high-color);\n  color: var(--priority-high-color);\n}\n\n.priority-high-btn:hover  {\n  background-color: var(--priority-high-color);\n  color:var(--main-background-color);\n  transition: all 0.25s;\n }\n\ntextarea {\n  resize: none;\n  font-size: 1.25rem;\n  min-width: 29dvw;\n  border: none;\n  overflow: auto;\n  outline: none;\n  padding-top: 0.5rem;\n}\n\n.modal-task-title-area{\n  border-bottom: 1px solid black;\n  min-height: 6dvh;\n}\n\n.modal-task-details-area {\n  min-height: 12dvh;\n  margin-bottom: 1rem;\n}\n\n.modal-project-text-area {\n  min-height: 18dvh;\n}\n\n.to-do-div {\n  display:flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 3rem;\n  min-width: 80dvw;\n  min-height: fit-content;\n}\n\n.to-do-div-left, .to-do-div-right {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n\n.no-task-text-div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\n.note-div {\n  margin: 1rem;\n  font-family: var(--font-style);\n  color: var(--font-color);\n  background-color:var(--secondary-background-color);\n  border: 1px solid black;\n  border-radius: 5px;\n  min-width: 20dvh;\n  min-height: max-content;\n  display: flex;\n  flex-direction: column;\n  word-break: break-all;\n}\n\n.note-header{\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem\n}\n\n.note-date {\n  align-self: flex-end;\n  padding: 0.25rem\n}\n\n.note-text-content {\n  align-self: start;\n  padding: 0.5rem\n}\n\n.project-child {\n  border: none;\n  background-color: var(--secondary-background-color);\n  display: flex;\n  justify-content: start;\n  align-content: center;\n  gap: 0.5rem;\n  margin-left: 2.5em;\n  overflow: clip;\n}\n\n.project-trash-div, .header-content {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.task-details-modal{ \n  min-height: 20dvh;\n  min-width: 20dvw;\n  text-align: center;\n}\n\n.task-details {\n  margin-top: 1em;\n}\n\n.priority-low-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-low-color);\n}\n\n.priority-med-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-med-color);\n}\n\n.priority-high-btn[class$='active'] {\n  color:white;\n  background-color: var(--priority-high-color);\n}\n\n\n.no-task-text, .main-new {\n  margin: 4rem;\n  font-size: 2rem;\n  display: grid;\n  place-items: center;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxzRkFBc0YsT0FBTyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUss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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZFQUE0Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7OztVQ3JIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ1E7QUFDYjtBQUNiOztBQUVyQix1REFBVztBQUNYLDJEQUFlO0FBQ2YsbURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kZWxldGVQcm9qZWN0RnJvbVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy9hZGRUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy9jYXB0dXJlVGFza0RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza3MvZGVsZXRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvYWN0aXZlQXR0cmlidXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvYWRkVGFza1RvUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvaGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL2R1ZS1kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLWFkZC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtZXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLW5vdGUtcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtbm90ZS1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXByb2plY3QtcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtcHJvamVjdC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLXRhc2stcGFnZS1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdWkvbW9kYWwvbW9kYWwtdGFzay1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL3JlbW92ZU1vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VpL21vZGFsL3RleHQtYXJlYS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9ub1Rhc2tzTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy91aS9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNzcyByZXNldCAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKVxufVxuXG4vKiBkYXJrIG1vZGUgdXNlci1hZ2VudC1zdHlsZXMgKi9cblxuaHRtbCB7XG4gIGNvbG9yLXNjaGVtZTogZGFyayBsaWdodDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG46cm9vdCB7XG4gLS1mb250LWNvbG9yOiByZ2JhKDEwLCAxMCwgNywgMC42KTtcbiAtLXRleHQtaG92ZXItY29sb3I6IHJnYmEoMjQsIDI0LCAxNywgMC4wODgpO1xuIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjtcbiAtLXByaW9yaXR5LWxvdy1jb2xvcjogZ3JlZW47XG4gLS1wcmlvcml0eS1oaWdoLWNvbG9yOiByZWQ7XG4gLS1wcmlvcml0eS1tZWQtY29sb3I6IHJnYigyMzYsIDE3NiwgMTEpOztcbiAtLWFkZC10YXNrcy1idXR0b24tY29sb3I6ICM1Y2IyYTc7XG4gLS1mb250LXN0eWxlOiBzYW5zLXNlcmlmO1xuIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2lkZWJhci1sZWZ0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOjEzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBwYWRkaW5nOiA4cHg7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1saW5rcyB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4vKiBBREQgQU5JTUFUSU9OUyBGT1IgTElOS1MgTEFURVIgKi9cbi5saW5rLWl0ZW06aG92ZXIsIC5hZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn1cblxuLmxpbmstaXRlbTpub3QoLnByb2plY3QtY2hpbGQpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0LWxpbmsge1xuICBmb250LXNpemU6IDEuMXJlbTsgXG59XG5cbi5mYS1maWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbVxufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbn0gXG5cbi5hZGQtbmV3LXByb2plY3Qge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5saW5rLWl0ZW0gPiBhIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbltjbGFzc3w9J2xpbmstaXRlbSBhY3RpdmUnXSB7XG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcbn1cblxuIGJ1dHRvbltjbGFzc349J2FjdGl2ZSddIHtcbiAgY29sb3I6cmdiKDAsIDAsIDApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xufSBcblxuLnNpZGViYXItdG9wLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTsgIFxufVxuXG4uc2lkZWJhci1ib3R0b20tY29udGFpbmVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxufVxuXG5hIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxM3Z3O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoODUsIDgzLCA4MywgMC42OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zaWRlYmFyLW5ldzpob3ZlciwgLnNpZGViYXItc2V0dGluZ3M6aG92ZXIsIC5uZXctY29udGVudDpob3ZlciwgLm1vZGFsLWxpbms6aG92ZXIsIC5mYS14OmhvdmVyLCBcbi5tb2RhbC1kYXRlLWlucHV0OmhvdmVyLCAubW9kYWwtYnRuOmhvdmVyLCAuZmEtdHJhc2gsIC5mYS10cmFzaC1jYW4sIC5mYS1lbGxpcHNpcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1idXR0b24tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1haW4tcmlnaHQge1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICBvdmVyZmxvdzphdXRvO1xufVxuXG4gLnRvLWRvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgLyogZ2FwOiA1cmVtO1xuICBmb250LXNpemU6IDJyZW07ICovXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufSBcblxuLm5vdGVzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxufVxuXG4ubWFpbi1uZXc6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1vZGFsLW1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZGlhbG9nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXG59XG5cbi5tb2RhbC1uZXctY29udGVudC1kaXYge1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYSwgLm1vZGFsLXRhc2stZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhLCAubW9kYWwtbm90ZXMtdGV4dC1hcmVhLCAubW9kYWwtcHJvamVjdC10ZXh0LWFyZWF7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xufVxuLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDE0ZHZoO1xufVxuLm1vZGFsLWxpbmsge1xuICBtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG5bY2xhc3N8PSdtb2RhbC1saW5rIGFjdGl2ZSddIHtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ/CfoJonO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xuXG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1vZGFsLW5ldy1lbnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tb2RhbC1zaWRlYmFyIHtcbiAgd2lkdGg6IDEwZHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZhO1xuICBtaW4taGVpZ2h0OiAzNWR2aDtcbn1cblxuLm1vZGFsLWRhdGUtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpXG59XG5cbi5tb2RhbC1kYXRlLWRpdiB7ICBcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLm1vZGFsLXByaW9yaXR5LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcmlvcml0eS1idG4tZGl2IHtcbiAgZ2FwOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTIlO1xufVxuXG4ubW9kYWwtYWRkLXRhc2stYnRuLCAubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XG59XG5cbi5tb2RhbC1hZGQtbm90ZS1idG46aG92ZXIsIC5tb2RhbC1hZGQtcHJvamVjdC1idG46aG92ZXIsIC5tb2RhbC1hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC10YXNrcy1idXR0b24tY29sb3IpO1xuICBjb2xvcjp3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xufVxuXG4ubW9kYWwtYnRuLCAubW9kYWwtYWRkLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByaW9yaXR5LWxvdy1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0bjpob3ZlciAge1xuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XG4gY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG59XG5cbi5wcmlvcml0eS1tZWQtYnRuIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKVxufVxuXG4ucHJpb3JpdHktbWVkLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1tZWQtY29sb3IpO1xuICBjb2xvcjp2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gfVxuXG4ucHJpb3JpdHktaGlnaC1idG4ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0bjpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbiAgY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xuIH1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWluLXdpZHRoOiAyOWR2dztcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cblxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtaW4taGVpZ2h0OiA2ZHZoO1xufVxuXG4ubW9kYWwtdGFzay1kZXRhaWxzLWFyZWEge1xuICBtaW4taGVpZ2h0OiAxMmR2aDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhIHtcbiAgbWluLWhlaWdodDogMThkdmg7XG59XG5cbi50by1kby1kaXYge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcmVtO1xuICBtaW4td2lkdGg6IDgwZHZ3O1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnRvLWRvLWRpdi1sZWZ0LCAudG8tZG8tZGl2LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubm8tdGFzay10ZXh0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG5cbi5ub3RlLWRpdiB7XG4gIG1hcmdpbjogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDIwZHZoO1xuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ubm90ZS1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5ub3RlLWRhdGUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC4yNXJlbVxufVxuXG4ubm90ZS10ZXh0LWNvbnRlbnQge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZzogMC41cmVtXG59XG5cbi5wcm9qZWN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcbiAgb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5wcm9qZWN0LXRyYXNoLWRpdiwgLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50YXNrLWRldGFpbHMtbW9kYWx7IFxuICBtaW4taGVpZ2h0OiAyMGR2aDtcbiAgbWluLXdpZHRoOiAyMGR2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ucHJpb3JpdHktbG93LWJ0bltjbGFzc1xcJD0nYWN0aXZlJ10ge1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcbn1cblxuLnByaW9yaXR5LW1lZC1idG5bY2xhc3NcXCQ9J2FjdGl2ZSddIHtcbiAgY29sb3I6d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XG59XG5cbi5wcmlvcml0eS1oaWdoLWJ0bltjbGFzc1xcJD0nYWN0aXZlJ10ge1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cblxuLm5vLXRhc2stdGV4dCwgLm1haW4tbmV3IHtcbiAgbWFyZ2luOiA0cmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkOzs7RUFHRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiO0FBQ0Y7O0FBRUEsZ0NBQWdDOztBQUVoQztFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQywyQ0FBMkM7Q0FDM0MsaUNBQWlDO0NBQ2pDLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsdUNBQXVDO0NBQ3ZDLGlDQUFpQztDQUNqQyx3QkFBd0I7Q0FDeEIscUNBQXFDO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0RBQWtEO0VBQ2xELFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLG1DQUFtQztBQUNuQztFQUNF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a0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNENBQTRDO0FBQzlDOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjc3MgcmVzZXQgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpXFxufVxcblxcbi8qIGRhcmsgbW9kZSB1c2VyLWFnZW50LXN0eWxlcyAqL1xcblxcbmh0bWwge1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrIGxpZ2h0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG46cm9vdCB7XFxuIC0tZm9udC1jb2xvcjogcmdiYSgxMCwgMTAsIDcsIDAuNik7XFxuIC0tdGV4dC1ob3Zlci1jb2xvcjogcmdiYSgyNCwgMjQsIDE3LCAwLjA4OCk7XFxuIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZmZmZjtcXG4gLS1wcmlvcml0eS1sb3ctY29sb3I6IGdyZWVuO1xcbiAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHJlZDtcXG4gLS1wcmlvcml0eS1tZWQtY29sb3I6IHJnYigyMzYsIDE3NiwgMTEpOztcXG4gLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yOiAjNWNiMmE3O1xcbiAtLWZvbnQtc3R5bGU6IHNhbnMtc2VyaWY7XFxuIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItbGVmdCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDoxM3Z3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XFxuICBwYWRkaW5nOiA4cHg7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyLWxpbmtzIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4vKiBBREQgQU5JTUFUSU9OUyBGT1IgTElOS1MgTEFURVIgKi9cXG4ubGluay1pdGVtOmhvdmVyLCAuYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmxpbmstaXRlbTpub3QoLnByb2plY3QtY2hpbGQpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpbmsge1xcbiAgZm9udC1zaXplOiAxLjFyZW07IFxcbn1cXG5cXG4uZmEtZmlsZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtXFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59IFxcblxcbi5hZGQtbmV3LXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4ubGluay1pdGVtID4gYSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbltjbGFzc3w9J2xpbmstaXRlbSBhY3RpdmUnXSB7XFxuICBjb2xvcjpyZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS10ZXh0LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuIGJ1dHRvbltjbGFzc349J2FjdGl2ZSddIHtcXG4gIGNvbG9yOnJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLXRleHQtaG92ZXItY29sb3IpO1xcbn0gXFxuXFxuLnNpZGViYXItdG9wLWNvbnRhaW5lcntcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTsgIFxcbn1cXG5cXG4uc2lkZWJhci1ib3R0b20tY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG59XFxuXFxuYSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItZm9vdGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxM3Z3O1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoODUsIDgzLCA4MywgMC42OCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaWRlYmFyLW5ldzpob3ZlciwgLnNpZGViYXItc2V0dGluZ3M6aG92ZXIsIC5uZXctY29udGVudDpob3ZlciwgLm1vZGFsLWxpbms6aG92ZXIsIC5mYS14OmhvdmVyLCBcXG4ubW9kYWwtZGF0ZS1pbnB1dDpob3ZlciwgLm1vZGFsLWJ0bjpob3ZlciwgLmZhLXRyYXNoLCAuZmEtdHJhc2gtY2FuLCAuZmEtZWxsaXBzaXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4tcmlnaHQge1xcbiAgd2lkdGg6MTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4gLnRvLWRvLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogZ2FwOiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtOyAqL1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpXFxufSBcXG5cXG4ubm90ZXMtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4ubWFpbi1uZXc6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5wYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwtbWFpbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG4ubW9kYWwtbmV3LWNvbnRlbnQtZGl2IHtcXG4gIHRleHQtaW5kZW50OiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2RhbC10YXNrLXRpdGxlLWFyZWEsIC5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLWRldGFpbHMtYXJlYSwgLm1vZGFsLW5vdGVzLXRleHQtYXJlYSwgLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhe1xcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxufVxcbi5tb2RhbC1ub3Rlcy1kZXRhaWxzLWFyZWEge1xcbiAgbWluLWhlaWdodDogMTRkdmg7XFxufVxcbi5tb2RhbC1saW5rIHtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxufVxcblxcbltjbGFzc3w9J21vZGFsLWxpbmsgYWN0aXZlJ10ge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuW2NsYXNzfD0nbW9kYWwtbGluayBhY3RpdmUnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfwn6CaJztcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIG1hcmdpbi1yaWdodDogLjI1ZW07XFxuXFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLW5ldy1lbnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLXNpZGViYXIge1xcbiAgd2lkdGg6IDEwZHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmE7XFxuICBtaW4taGVpZ2h0OiAzNWR2aDtcXG59XFxuXFxuLm1vZGFsLWRhdGUtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtIDAuMTI1ZW0gMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgY29sb3I6dmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcilcXG59XFxuXFxuLm1vZGFsLWRhdGUtZGl2IHsgIFxcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG59XFxuXFxuLm1vZGFsLXByaW9yaXR5LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLWRpdiB7XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubW9kYWwtYWRkLW5vdGUtYnRuLCAubW9kYWwtYWRkLXByb2plY3QtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDUyJTtcXG59XFxuXFxuLm1vZGFsLWFkZC10YXNrLWJ0biwgLm1vZGFsLWFkZC1ub3RlLWJ0biwgLm1vZGFsLWFkZC1wcm9qZWN0LWJ0biB7XFxuICBjb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWRkLXRhc2tzLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbi5tb2RhbC1hZGQtbm90ZS1idG46aG92ZXIsIC5tb2RhbC1hZGQtcHJvamVjdC1idG46aG92ZXIsIC5tb2RhbC1hZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZGQtdGFza3MtYnV0dG9uLWNvbG9yKTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbn1cXG5cXG4ubW9kYWwtYnRuLCAubW9kYWwtYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW0gMC4xMjVlbSAwLjI1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93LWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWxvdy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdy1idG46aG92ZXIgIHtcXG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbG93LWNvbG9yKTtcXG4gY29sb3I6dmFyKC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkLWJ0biB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW9yaXR5LW1lZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKVxcbn1cXG5cXG4ucHJpb3JpdHktbWVkLWJ0bjpob3ZlciAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcXG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuIH1cXG5cXG4ucHJpb3JpdHktaGlnaC1idG4ge1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gtYnRuOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG4gIGNvbG9yOnZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuIH1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtaW4td2lkdGg6IDI5ZHZ3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1vZGFsLXRhc2stdGl0bGUtYXJlYXtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDZkdmg7XFxufVxcblxcbi5tb2RhbC10YXNrLWRldGFpbHMtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxMmR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYSB7XFxuICBtaW4taGVpZ2h0OiAxOGR2aDtcXG59XFxuXFxuLnRvLWRvLWRpdiB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIG1pbi13aWR0aDogODBkdnc7XFxuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRvLWRvLWRpdi1sZWZ0LCAudG8tZG8tZGl2LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5vLXRhc2stdGV4dC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5ub3RlLWRpdiB7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWluLXdpZHRoOiAyMGR2aDtcXG4gIG1pbi1oZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5ub3RlLWhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW1cXG59XFxuXFxuLm5vdGUtZGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmc6IDAuMjVyZW1cXG59XFxuXFxuLm5vdGUtdGV4dC1jb250ZW50IHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZzogMC41cmVtXFxufVxcblxcbi5wcm9qZWN0LWNoaWxkIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMi41ZW07XFxuICBvdmVyZmxvdzogY2xpcDtcXG59XFxuXFxuLnByb2plY3QtdHJhc2gtZGl2LCAuaGVhZGVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLW1vZGFseyBcXG4gIG1pbi1oZWlnaHQ6IDIwZHZoO1xcbiAgbWluLXdpZHRoOiAyMGR2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3ctYnRuW2NsYXNzJD0nYWN0aXZlJ10ge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1sb3ctY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHktbWVkLWJ0bltjbGFzcyQ9J2FjdGl2ZSddIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktbWVkLWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gtYnRuW2NsYXNzJD0nYWN0aXZlJ10ge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcXG59XFxuXFxuXFxuLm5vLXRhc2stdGV4dCwgLm1haW4tbmV3IHtcXG4gIG1hcmdpbjogNHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcihuYW1lT2ZQcm9qZWN0KSB7XG4gIGNvbnN0IGFsbFNpZGViYXJMaW5rSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1pdGVtJyk7XG4gIC8vIG91ciB0b3AgYW5kIGJvdHRvbSBzaWRlYmFyIGxpbmtzIGFyZSBib3RoIGNhbGxlZCAnc2lkZWJhci1saW5rcycgc28gc3BlY2lmeVxuICAvLyB0aGF0IHdlIHdhbnQgdGhlIGJvdHRvbSBjb250YWluZXIgc2lkZWJhciBsaW5rcy5cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5zaWRlYmFyLWJvdHRvbS1jb250YWluZXInXG4gICkuZmlyc3RDaGlsZDtcblxuICBhbGxTaWRlYmFyTGlua0l0ZW1zLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAvLyBpZiBsaW5rIGNsaWNrZWQgY2xhc3NsaXN0IGVxdWFsIHByb2plY3QgbmFtZSB0aGVuIHRoYXRzIHRoZSBzaWRlYmFyIHByb2plY3Qgd2UgZGVsZXRlXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0WzBdID09PSBuYW1lT2ZQcm9qZWN0KSB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QnLCBgJHtuYW1lT2ZQcm9qZWN0fWApO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgbG9hZFRhc2tMaXN0IGZyb20gJy4vcGFnZXMvdGFza0xpc3QnO1xuaW1wb3J0IGxvYWROb3Rlc1BhZ2UgZnJvbSAnLi9wYWdlcy9ub3Rlcyc7XG5pbXBvcnQgbG9hZFByb2plY3RQYWdlIGZyb20gJy4vcGFnZXMvcHJvamVjdHMnO1xuaW1wb3J0IGxvYWRUb2RheVBhZ2UgZnJvbSAnLi9wYWdlcy90b2RheSc7XG5pbXBvcnQgeyB3aXBlRG9tQ29udGVudCB9IGZyb20gJy4vdWkvZG9tJztcbmltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4vdWkvYWN0aXZlQXR0cmlidXRlJztcbmltcG9ydCBjcmVhdGVOZXdEaWFsb2dNb2RhbCwge1xuICBjcmVhdGVNb2RhbFRhc2tEZXRhaWxzQXJlYSxcbn0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyIGZyb20gJy4vZGVsZXRlUHJvamVjdEZyb21TaWRlYmFyJztcbmltcG9ydCB7IGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBhZGRUYXNrQ29udGFpbmVyIH0gZnJvbSAnLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGNyZWF0ZU1vZGFsSGVhZGVyIH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgbW9kYWxFdmVudHMgZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQYWdlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIC8vIGV2ZW50cyBmb3Igc2lkZWJhcmxpbmsgKyBpbmRpdmlkdWFsIHByb2plY3QgcGFnZXNcbiAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstaXRlbScpO1xuICBjb25zdCBhZGROZXdQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcblxuICBzaWRlYmFyTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUoc2lkZWJhckxpbmtzKTtcbiAgICAgIHdpcGVEb21Db250ZW50KCk7XG4gICAgICBhZGRBY3RpdmVBdHRyaWJ1dGUoZSk7XG4gICAgICBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGFkZE5ld1Byb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIG9wZW4gbW9kYWwgd2hlbiB1c2VyIGNsaWNrcyBvbiBhZGQgcHJvamVjdFxuICAgIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1doaWNoU2lkZWJhckxpbmtJc0NsaWNrZWQoZSkge1xuICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgY2FzZSAnVG9kYXknOlxuICAgICAgbG9hZFRvZGF5UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnVGFzayBMaXN0JzpcbiAgICAgIGxvYWRUYXNrTGlzdCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTm90ZXMnOlxuICAgICAgbG9hZE5vdGVzUGFnZSgpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gb3VyIGRlZmF1bHQgd2lsbCBiZSBpbmRpdmlkdWFsIHByb2plY3RzIHRoYXQgYXJlIGNsaWNrZWQgaWYgbm90IGFueSBvZiB0aGUgYWJ2b2VcbiAgICBkZWZhdWx0OlxuICAgICAgbG9hZFByb2plY3RQYWdlKGUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlhbG9nRXZlbnRzKCkge1xuICBjb25zdCBuZXdDb250ZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXctY29udGVudCcpO1xuXG4gIG5ld0NvbnRlbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZU5ld0RpYWxvZ01vZGFsKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0VHJhc2hDYW5FdmVudHMoKSB7XG4gIGNvbnN0IHByb2plY3RUcmFzaENhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaC1jYW4nKTtcblxuICBwcm9qZWN0VHJhc2hDYW4uZm9yRWFjaCgodHJhc2hDYW4pID0+IHtcbiAgICB0cmFzaENhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgcGFyZW50U2libGluZ0VsZW1lbnRUZXh0Q29udGVudCA9XG4gICAgICAgIHRhcmdldFBhcmVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhcmVudFNpYmxpbmdFbGVtZW50VGV4dENvbnRlbnQ7XG5cbiAgICAgIC8vIHdpbGwgcmVtb3ZlIHByb2plY3QgZnJvbSBzaWRlYmFyIEFORCBkZWxldGUgcHJvamVjdCBmcm9tIExTXG4gICAgICBkZWxldGVQcm9qZWN0RnJvbVNpZGViYXIocHJvamVjdE5hbWUpO1xuICAgICAgZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdC10YXNrJywgcHJvamVjdE5hbWUpO1xuICAgICAgd2lwZURvbUNvbnRlbnQoKTtcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb3hUYXNrRXZlbnRzKCkge1xuICBjb25zdCB0b0RvQ2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8tY2hlY2tib3gnKTtcbiAgdG9Eb0NoZWNrQm94LmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IGUudGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICBzaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkTm9kZXM7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgY2hpbGQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzaWJsaW5nID0gZS50YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIHNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmNoaWxkTm9kZXM7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgY2hpbGQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVGFza0RldGFpbHMoZWxlbWVudCwgZGV0YWlscykge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbmV3TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICBuZXdNb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctbW9kYWwnKTtcbiAgICBuZXdNb2RhbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbHMtbW9kYWwnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TW9kYWwpO1xuICAgIGNyZWF0ZU1vZGFsSGVhZGVyKG5ld01vZGFsLCAnVGFzayBEZXRhaWxzJyk7XG4gICAgY3JlYXRlTW9kYWxUYXNrRGV0YWlsc0FyZWEobmV3TW9kYWwsIGRldGFpbHMpO1xuICAgIG5ld01vZGFsLnNob3dNb2RhbCgpO1xuICAgIG1vZGFsRXZlbnRzKG5ld01vZGFsLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgZGlhbG9nRXZlbnRzLFxuICBwcm9qZWN0VHJhc2hDYW5FdmVudHMsXG4gIGNoZWNrQm94VGFza0V2ZW50cyxcbiAgZXhwYW5kVGFza0RldGFpbHMsXG59O1xuIiwiaW1wb3J0IHsgZGVsZXRlQ29udGFpbmVyIH0gZnJvbSAnLi91aS9kb20nO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4vdWkvbm9UYXNrc01lc3NhZ2UnO1xuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrLCBwYWdlSGVhZGVyVGV4dCkge1xuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKTtcblxuICAvL2lmIG5vIGRhdGFcbiAgaWYgKCFkYXRhKSB7XG4gICAgLy8gaWYgbm8gdmFsdWUgaW4gdmFyaWFibGUgdGhlbiB3ZSBhcmUgbm90IGFkZGluZyBhIHRhc2sgdG8gYSBwcm9qZWN0XG4gICAgaWYgKCFwYWdlSGVhZGVyVGV4dCkge1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3RcbiAgICAgIGNvbnN0IGRhdGFBcnJheSA9IFt0YXNrXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFkZCBwcm9qZWN0IHBhZ2UgdGl0bGUgcHJvcGVydHkgdG8gdGFza1xuICAgICAgdGFzay5wcm9qZWN0UGFnZSA9IHBhZ2VIZWFkZXJUZXh0O1xuICAgICAgLy8gcG9wdWxhdGUgYXJyYXkgd2l0aCBvdXIgdGFzayBvYmplY3QgYW5kIGluZGl2aWR1YWwgcHJvamVjdCBwYWdlIHRpdGxlXG4gICAgICBjb25zdCBkYXRhQXJyYXkgPSBbdGFza107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0eXBlfWAsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXNrLnByb2plY3RQYWdlID0gcGFnZUhlYWRlclRleHQ7XG5cbiAgICAvLyBwb3B1bGF0ZSBhcnJheSB3aXRoIGV4aXN0aW5nIHRhc2tzIG9mICd0eXBlJ1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dHlwZX1gKSk7XG5cbiAgICBkYXRhQXJyYXkucHVzaCh0YXNrKTtcblxuICAgIC8vIHNldCBuZXcgYXJyYXkgd2l0aCBhbGwgdGFza3Mgb2xkIGFuZCBuZXcgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3R5cGV9YCwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSh0eXBlKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3R5cGV9YCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCB0YXNrVGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKGAke3R5cGV9YCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXNrc1tpXS50YXNrVGl0bGUgPT09IHRhc2tUaXRsZSkge1xuICAgICAgdGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgc2V0VG9Mb2NhbFN0b3JhZ2VBZnRlckRlbGV0aW5nKHR5cGUsIHRhc2tzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQWxsUHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0eXBlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoYCR7dHlwZX1gKTtcbiAgaWYgKCF0YXNrcykgcmV0dXJuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFza3NbaV0ucHJvamVjdFBhZ2UgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICB0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0xvY2FsU3RvcmFnZUFmdGVyRGVsZXRpbmcodHlwZSwgdGFza3MpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dHlwZX1gLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gIC8vIHJlZmFjdG9yIGJlbG93XG4gIC8vIGlmIG5vIHRhc2tzIGluIGVpdGhlciAndG9Ebycgb3IgJ25vdGVzJyBMUyBhcnJheXMgZGVsZXRlIHRoZSBrZXkgZnJvbSBMU1xuICBpZiAodGFza3MubGVuZ3RoID09PSAwICYmIHR5cGUgPT09ICd0b0RvJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3R5cGV9YCk7XG4gICAgbWFrZU5ld1Rhc2tEaXYoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dHlwZX1gKTtcbiAgICBtYWtlTmV3VGFza0Rpdignbm90ZXMnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGVsZXRlQ29udGFpbmVyKCcubm90ZXMtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBpZiBubyB0YXNrcyBpbiBlaXRoZXIgJ3Byb2plY3QtdGFzaycgb3IgJ3Byb2plY3QnIExTIGFycmF5cyBkZWxldGUgdGhlIGtleSBmcm9tIExTXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDAgJiYgdHlwZSA9PT0gJ3Byb2plY3QtdGFzaycpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9IGVsc2UgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHt0eXBlfWApO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge1xuICBzZXRUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZUFsbFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsXG59O1xuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG4vLyBydW4gd2hlbiBsaW5rIGlzIGNsaWNrZWRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROb3Rlc1BhZ2UoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCBub3RlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3Rpbmcgbm90ZXMgc28gbWFrZSBhIHRhc2sgY29udGFpbmVyIHNvIHVzZXIgY2FuIG1ha2Ugc29tZSBuZXcgbm90ZXNcbiAgaWYgKCFub3Rlcykge1xuICAgIG1ha2VOZXdUYXNrRGl2KCdub3RlcycsICd0by1kby1jb250YWluZXInKTtcbiAgICBkaWFsb2dFdmVudHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRFeGlzdGluZ05vdGVzVG9QYWdlKCdub3RlcycpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV4aXN0aW5nTm90ZXNUb1BhZ2UodHlwZSkge1xuICAvLyBnZXQgYWxsIG9mIHRoZSB1c2VycyBub3RlcyBmcm9tIExTXG4gIGNvbnN0IG5vdGVzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbm90ZXMnKTtcblxuICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgYWRkVGFza1RvUGFnZSh0eXBlLCBub3RlKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gJy4uL3VpL2hlYWRlcic7XG5pbXBvcnQgbWFrZU5ld1Rhc2tEaXZGb3JQcm9qZWN0cyBmcm9tICcuLi91aS9ub1Rhc2tzTWVzc2FnZSc7XG5pbXBvcnQgeyBkaWFsb2dFdmVudHMsIHByb2plY3RUcmFzaENhbkV2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGROZXdQcm9qZWN0VG9TaWRlYmFyIGZyb20gJy4uL3VpL2FkZE5ld1Byb2plY3RUb1NpZGViYXInO1xuaW1wb3J0IHsgYnVpbGRUb0RvVWkgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGFkZFRhc2tDb250YWluZXIgfSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcblxuLy9ydW5zIHdoZW4gYSBpbmRpdmlkdWFsIHByb2plY3QgaXMgY2xpY2tlZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RQYWdlKGUpIHtcbiAgY3JlYXRlSGVhZGVyKCdwcm9qZWN0Jyk7XG4gIHByb2plY3RUcmFzaENhbkV2ZW50cygpO1xuICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdwcm9qZWN0LXRhc2snKTtcblxuICBpZiAoIXByb2plY3RUYXNrcykge1xuICAgIG1ha2VOZXdUYXNrRGl2Rm9yUHJvamVjdHMoJ3Rhc2tzJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlZmFjdG9yIHRvIHNlcGVyYXRlIGZ1bmN0aW9uXG4gICAgY29uc3QgaW5kaXZpZGl1YWxQcm9qZWN0VGFzayA9IHByb2plY3RUYXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5wcm9qZWN0UGFnZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgLy8gaWYgbm8gdGFzayBpbiBwcm9qZWN0IChqdXN0IG1hZGUpIHNob3cgbm8gdGFzayBtZXNzYWdlXG4gICAgaWYgKGluZGl2aWRpdWFsUHJvamVjdFRhc2subGVuZ3RoID09PSAwKSB7XG4gICAgICBtYWtlTmV3VGFza0RpdkZvclByb2plY3RzKCd0YXNrcycsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgZGlhbG9nRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1aWxkIHRhc2sgb24gcHJvamVjdCBwYWdlIGNsaWNrZWRcbiAgICAgIGFkZFRhc2tDb250YWluZXIoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBpbmRpdmlkaXVhbFByb2plY3RUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYnVpbGRUb0RvVWkodGFzayk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gaXMgcmFuIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV4aXN0aW5nUHJvamVjdHNUb1NpZGViYXIoKSB7XG4gIC8vIHdlIGFsc28gd2FudCB0byBjaGVjayBpZiB0aGVyZSBpcyBhbnkgcHJvamVjdHMgb24gcGFnZSBsb2FkIGluIExTIHRvIHNob3dcbiAgLy8gdW5kZXIgcHJvamVjdHMgdGFiIG9uIHBhZ2UgbG9hZCBhc3dlbGwuXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgncHJvamVjdCcpO1xuXG4gIGlmICghcHJvamVjdHMpIHJldHVybjtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgYWRkTmV3UHJvamVjdFRvU2lkZWJhcihwcm9qZWN0LnRhc2tUaXRsZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSAnLi4vdWkvaGVhZGVyJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgYWRkVGFza1RvUGFnZSBmcm9tICcuLi91aS9hZGRUYXNrVG9QYWdlJztcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuXG4vLyBmdW5jdGlvbiBpcyByYW4gb24gcGFnZSBsb2FkIGFuZCBvbiBsaW5rIGNsaWNrXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVGFza0xpc3QoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIC8vIGlmIGZhbHNlIHdlIGhhdmUgbm8gZXhpc3RpbmcgdG8tZG8ncyBzbyBtYWtlIGEgdGFzayBjb250YWluZXIgc28gdXNlciBjYW4gbWFrZSBzb21lIG5ldyB0YXNrc1xuICBpZiAoIXRvRG8pIHtcbiAgICBtYWtlTmV3VGFza0RpdigndGFza3MnLCAndG8tZG8tY29udGFpbmVyJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkRXhpc3RpbmdUb0RvVG9QYWdlKCd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdUb0RvVG9QYWdlKHR5cGUpIHtcbiAgLy8gZ2V0IGFsbCBvZiB0aGUgdXNlcnMgdGFza3MgZnJvbSBMU1xuICBjb25zdCB0b0RvID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9EbycpO1xuXG4gIHRvRG8uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzayk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tICcuLi91aS9oZWFkZXInO1xuaW1wb3J0IG1ha2VOZXdUYXNrRGl2IGZyb20gJy4uL3VpL25vVGFza3NNZXNzYWdlJztcbmltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCBhZGRUYXNrVG9QYWdlIGZyb20gJy4uL3VpL2FkZFRhc2tUb1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIC8vIHNob3cgbm8gaXRlbXMgc2F2ZWQgaW4gZGlzcGxheSBpZiBubyBkYXRhXG4gICAgbWFrZU5ld1Rhc2tEaXYoJ2l0ZW1zIHNhdmVkJywgJ3RvLWRvLWNvbnRhaW5lcicpO1xuICAgIGRpYWxvZ0V2ZW50cygpO1xuICB9IGVsc2Uge1xuICAgIGFkZEV4aXN0aW5nRGF0YVRvVG9kYXlQYWdlKCdub3RlcycsICd0b0RvJyk7XG4gICAgZGlhbG9nRXZlbnRzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXhpc3RpbmdEYXRhVG9Ub2RheVBhZ2UodHlwZU9uZSwgdHlwZVR3bykge1xuICAvL2dldCBhbGwgb2YgdGhlIHVzZXJzIG5vdGVzL3Rhc2tzIGZyb20gTFNcbiAgY29uc3Qgbm90ZXMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycpO1xuICBjb25zdCB0YXNrcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvRG8nKTtcblxuICBpZiAobm90ZXMpIHtcbiAgICBub3Rlcy5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBhZGRUYXNrVG9QYWdlKHR5cGVPbmUsIG5vdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRhc2tzKSB7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgYWRkVGFza1RvUGFnZSh0eXBlVHdvLCB0YXNrKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2V0VG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGFkZFRhc2tUb1BhZ2UgZnJvbSAnLi4vdWkvYWRkVGFza1RvUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvRG8odHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpIHtcbiAgLy8gd2UgZG9udCB3YW50IHByb2plY3RzIGJlaW5nIGFkZGVkIGxpa2UgdGFza3Mvbm90ZXMgd2lsbCBiZVxuICAvLyByZWZhY3RvciBsYXRlclxuICBpZiAodHlwZSA9PT0gJ25vdGVzJyB8fCB0eXBlID09PSAndG9EbycpIHtcbiAgICBzZXRUb0xvY2FsU3RvcmFnZSh0eXBlLCB0YXNrKTtcbiAgICBhZGRUYXNrVG9QYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgIHNldFRvTG9jYWxTdG9yYWdlKHR5cGUsIHRhc2spO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgc2V0VG9Mb2NhbFN0b3JhZ2UodHlwZSwgdGFzaywgcGFnZUhlYWRlclRleHQpO1xuICAgIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gIH1cbn1cbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb25zIHRvIG1ha2Ugb3VyIHRvZG8gb2JqZWN0IHdpdGgga2V5L3ZhbHVlIHBhaXJzIGFzc2lnbmVkXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC10YXNrLXRpdGxlLWFyZWEnKTtcbiAgY29uc3QgdGFza0RldGFpbHMgPSBjYXB0dXJlTW9kYWxEZXRhaWxzVGV4dERhdGEoJy5tb2RhbC10YXNrLWRldGFpbHMtYXJlYScpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGNhcHR1cmVNb2RhbERhdGVEYXRhKCk7XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBjYXB0dXJlTW9kYWxQcmlvcml0eUxldmVsKCk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSwgdGFza0RldGFpbHMsIHRhc2tEYXRlLCBwcmlvcml0eUxldmVsIH07XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSgpIHtcbiAgY29uc3QgdGFza1RpdGxlID0gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YSgnLm1vZGFsLXByb2plY3QtdGV4dC1hcmVhJyk7XG4gIHJldHVybiB7IHRhc2tUaXRsZSB9O1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEoKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGNhcHR1cmVNb2RhbFRpdGxlVGV4dERhdGEoJy5tb2RhbC1ub3Rlcy10aXRsZS1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKCcubW9kYWwtbm90ZXMtZGV0YWlscy1hcmVhJyk7XG4gIGNvbnN0IHRhc2tEYXRlID0gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKTtcbiAgcmV0dXJuIHsgdGFza1RpdGxlLCB0YXNrRGV0YWlscywgdGFza0RhdGUgfTtcbn1cblxuLy8gY2FwdHVyZSBhbGwgdXNlciBpbnB1dHMgb24gbW9kYWxcbi8vIG9ubHkgbmVlZCBvbmUgZnVuY2l0b24gaGVyZSBiZWxvdywgd2lsbCByZWZhY3RvciBsYXRlclxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsVGl0bGVUZXh0RGF0YShlbGVtZW50Q2xhc3NOYW1lKSB7XG4gIGNvbnN0IHRpdGxlVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnRDbGFzc05hbWV9YCk7XG4gIGNvbnN0IHRleHREYXRhID0gdGl0bGVUZXh0QXJlYS52YWx1ZS50cmltKCkgfHwgJ04vQSc7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGV0YWlsc1RleHREYXRhKGVsZW1lbnRDbGFzc05hbWUpIHtcbiAgY29uc3QgZGV0YWlsc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50Q2xhc3NOYW1lfWApO1xuICBjb25zdCB0ZXh0RGF0YSA9IGRldGFpbHNUZXh0QXJlYS52YWx1ZS50cmltKCkgfHwgJ04vQSc7XG4gIHJldHVybiB0ZXh0RGF0YTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZU1vZGFsRGF0ZURhdGEoKSB7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRlLWlucHV0Jyk7XG4gIGNvbnN0IGRhdGVEYXRhID0gZGF0ZUlucHV0LnZhbHVlIHx8ICdOL0EnO1xuICByZXR1cm4gZGF0ZURhdGE7XG59XG5cbmZ1bmN0aW9uIGNhcHR1cmVNb2RhbFByaW9yaXR5TGV2ZWwoKSB7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1idG4nKTtcbiAgY29uc3QgYnV0dG9uQXJyYXkgPSBBcnJheS5mcm9tKHByaW9yaXR5QnV0dG9ucyk7XG5cbiAgLy8gYnRuIHdpdGggYSBjb2xvciBvZiB3aGl0ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQgYnV0dG9uXG4gIGNvbnN0IHByaW9yaXR5Q2xpY2tlZCA9IGJ1dHRvbkFycmF5LmZpbmQoKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpXG4gICk7XG5cbiAgLy8gaWYgbm8gYnV0dG9uIGlzIGNsaWNrZWQganVzdCByZXR1cm4gdGV4dCBcIkxPV1wiXG4gIGlmIChwcmlvcml0eUNsaWNrZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnTE9XJztcbiAgfSBlbHNlIHJldHVybiBwcmlvcml0eUNsaWNrZWQudGV4dENvbnRlbnQ7XG59XG5cbmV4cG9ydCB7XG4gIGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSxcbiAgY2FwdHVyZU1vZGFsUHJvamVjdFBhZ2VEYXRhLFxuICBjYXB0dXJlTW9kYWxOb3RlUGFnZURhdGEsXG59O1xuIiwiaW1wb3J0IHsgcmVtb3ZlVGFza0Zyb21Eb20gfSBmcm9tICcuLi91aS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrKHR5cGUsIGVsZW1lbnQpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCB0YXNrID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3Qgbm90ZVRpdGxlID0gdGFzay5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgIHJlbW92ZVRhc2tGcm9tRG9tKHRhc2ssIG5vdGVUaXRsZSk7XG4gIH0pO1xufVxuIiwiZnVuY3Rpb24gYWRkQWN0aXZlQXR0cmlidXRlKGUpIHtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlKGxpbmtBcnJheSkge1xuICBsaW5rQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgYWRkQWN0aXZlQXR0cmlidXRlLCBjaGVja0ZvckFjdGl2ZUF0dHJpYnV0ZSB9O1xuIiwiLy8gcmVmYWN0b3IgYmVsb3dcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb1NpZGViYXIocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3RTaWRlYmFyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXByb2plY3QtbGluaycpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtwcm9qZWN0VGl0bGV9IHByb2plY3QtY2hpbGRgKTtcbiAgLy8gYWRkIGxpbmsgaXRlbSBjbGFzcyBuYW1lIHNvIHdlIGNhbiByZXVzZSBvdGhlciBtb2R1bGVzIGZvciBhY3RpdmUgbGluayBjbGlja2VkXG4gIG5ld1Byb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmstaXRlbScpO1xuICBuZXdQcm9qZWN0TGluay50ZXh0Q29udGVudCA9IGAke3Byb2plY3RUaXRsZX1gO1xuICAvLyBpbnNlcnQgbmV3IHVzZXIgcHJvamVjdCBidXR0b24gQUZURVIgc2lkZWJhciBwcm9qZWN0IGxpbmtcbiAgcHJvamVjdFNpZGViYXJMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuZXdQcm9qZWN0TGluayk7XG5cbiAgY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBwcm9qZWN0c0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1jbGlwYm9hcmQtbGlzdCcpO1xuICBuZXdQcm9qZWN0TGluay5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBwcm9qZWN0c0ljb24pO1xuXG4gIC8vIGlmIHByb2plY3QgdGl0bGUgaXMgPiAxNSBjaGFyYWN0ZXJzIGFuZCBhIHRpdGxlIHRoYXQgd2lsbCBzaG93IG9uIGhvdmVyXG4gIGNvbnN0IHByb2plY3RUaXRsZUFycmF5ID0gcHJvamVjdFRpdGxlLnNwbGl0KCcnKTtcbiAgaWYgKHByb2plY3RUaXRsZUFycmF5Lmxlbmd0aCA+IDE1KSB7XG4gICAgbmV3UHJvamVjdExpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIGAke3Byb2plY3RUaXRsZX1gKTtcbiAgfVxufVxuXG4vLyBydW5zIG9ubHkgd2hlbiB1c2VyIGlzIGFkZGluZyBhIG5ldyBwcm9qZWN0IHRvIHNpZGViYXJcbmZ1bmN0aW9uIGNoZWNrSWZQcm9qZWN0TmFtZUFscmVhZHlFeGlzdHMocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNoaWxkJyk7XG4gIGxldCBwcm9qZWN0RXhpc3RzID0gZmFsc2U7XG5cbiAgc2lkZWJhclByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC50ZXh0Q29udGVudCA9PT0gcHJvamVjdFRpdGxlKSB7XG4gICAgICBhbGVydCgnWW91IGFscmVhZHkgaGF2ZSBhIHByb2plY3Qgd2l0aCB0aGF0IHRpdGxlIScpO1xuICAgICAgcHJvamVjdEV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdEV4aXN0cztcbn1cblxuZXhwb3J0IHsgY2hlY2tJZlByb2plY3ROYW1lQWxyZWFkeUV4aXN0cyB9O1xuIiwiaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi4vdGFza3MvZGVsZXRlVGFza3MnO1xuaW1wb3J0IHsgY2hlY2tCb3hUYXNrRXZlbnRzLCBleHBhbmRUYXNrRGV0YWlscyB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tUb1BhZ2UodHlwZSwgdGFzaywgY29udGFpbmVyTmFtZSkge1xuICAvLyByZWZhY3RvciBhbGwgdGhpcyBsYXRlclxuICBpZiAodHlwZSA9PT0gJ3RvRG8nKSB7XG4gICAgLy8gdHlwZSB3b3VsZCBlcXVhbCAndG9EbydcbiAgICBhZGRUb0RvVG9QYWdlKHRhc2spO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0LXRhc2snKSB7XG4gICAgYWRkVG9Eb1RvUGFnZSh0YXNrLCBjb250YWluZXJOYW1lKTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnbm90ZXMnKSB7XG4gICAgYWRkTm90ZXNUb1BhZ2UodGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRUb0RvVWkodGFzaykge1xuICBjb25zdCB0b0RvQ29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuICBjb25zdCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3Rhc2sudGFza1RpdGxlfWApO1xuICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRpdicpO1xuICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvRG9EaXYpO1xuXG4gIC8vIGxlZnRcbiAgY29uc3QgdG9Eb0RpdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9Eb0RpdkxlZnQuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGl2LWxlZnQnKTtcbiAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGl2TGVmdCk7XG5cbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgndG8tZG8tY2hlY2tib3gnKTtcbiAgdG9Eb0RpdkxlZnQuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAvLyBhZGQgZXZlbnQgaGFuZGxlcnMgdG8gZWFjaCBjaGVja2JveFxuICBjaGVja0JveFRhc2tFdmVudHMoKTtcblxuICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b0RvLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJyk7XG4gIHRvRG8udGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tUaXRsZX1gO1xuICB0b0RvRGl2TGVmdC5hcHBlbmRDaGlsZCh0b0RvKTtcblxuICBjb25zdCBleHBhbmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBleHBhbmREZXRhaWxzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtZWxsaXBzaXMnKTtcbiAgdG9Eb0RpdkxlZnQuYXBwZW5kQ2hpbGQoZXhwYW5kRGV0YWlscyk7XG4gIC8vIGFkZCBldmVudCBoYW5kbGVycyB0byBlYWNoIGVsbGlwc2lzXG4gIGV4cGFuZFRhc2tEZXRhaWxzKGV4cGFuZERldGFpbHMsIHRhc2sudGFza0RldGFpbHMpO1xuXG4gIC8vIHJpZ2h0XG4gIGNvbnN0IHRvRG9EaXZSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b0RvRGl2UmlnaHQuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGl2LXJpZ2h0Jyk7XG4gIHRvRG9EaXYuYXBwZW5kQ2hpbGQodG9Eb0RpdlJpZ2h0KTtcblxuICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xuICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza0RhdGV9YDtcbiAgdG9Eb0RpdlJpZ2h0LmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcblxuICBjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRlbGV0ZS1idG4nKTtcbiAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXRyYXNoJyk7XG4gIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdEZWxldGUgVGFzaycpO1xuICB0b0RvRGl2UmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gIC8vIGFkZCBldmVudCBoYW5kbGVyIHRvIGVhY2ggdHJhc2ggY2FuIGljb24gbWFkZVxuICBkZWxldGVUYXNrKCd0b0RvJywgZGVsZXRlVGFza0J0bik7XG5cbiAgY29uc3QgdG9Eb1ByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvRG9Qcmlvcml0eUxldmVsLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXByaW9yaXR5LWxldmVsJyk7XG4gIHRvRG9Qcmlvcml0eUxldmVsLnRleHRDb250ZW50ID0gYCR7dGFzay5wcmlvcml0eUxldmVsfWA7XG4gIHRvRG9EaXZSaWdodC5hcHBlbmRDaGlsZCh0b0RvUHJpb3JpdHlMZXZlbCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRG9Ub1BhZ2UodGFzaywgY29udGFpbmVyTmFtZSkge1xuICBpZiAoY29udGFpbmVyTmFtZSA9PT0gJ3Byb2plY3QtY29udGFpbmVyJykge1xuICAgIGFkZFRhc2tDb250YWluZXIoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgYnVpbGRUb0RvVWkodGFzayk7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFza0NvbnRhaW5lcigndG8tZG8tY29udGFpbmVyJyk7XG4gICAgYnVpbGRUb0RvVWkodGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFza0NvbnRhaW5lcihjbGFzc05hbWUpIHtcbiAgLy8gaWYgY29udGFpbmVyIGFscmVhZHkgZXhpc3RzIGp1c3QgcmV0dXJuIHNvIHdlIGRvbnQgZ2V0IGR1cGxpY2F0ZXNcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGFkZE5vdGVzVG9QYWdlKHRhc2spIHtcbiAgYWRkVGFza0NvbnRhaW5lcignbm90ZXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90ZURpdi5jbGFzc0xpc3QuYWRkKCdub3RlLWRpdicpO1xuICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRGl2KTtcblxuICBjb25zdCBub3RlSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vdGVIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1oZWFkZXInKTtcbiAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlSGVhZGVyRGl2KTtcblxuICBjb25zdCBub3RlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3RlSGVhZGVyLnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrVGl0bGV9YDtcbiAgbm90ZUhlYWRlckRpdi5hcHBlbmRDaGlsZChub3RlSGVhZGVyKTtcblxuICBjb25zdCBkZWxldGVOb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBkZWxldGVOb3RlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEteCcpO1xuICBkZWxldGVOb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ25vdGUtY2xvc2UtYnRuJyk7XG4gIG5vdGVIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTm90ZUJ0bik7XG4gIC8vIGFkZCBldmVudCBoYW5kbGVyIHRvIGVhY2ggdHJhc2ggY2FuIGljb24gbWFkZVxuICBkZWxldGVUYXNrKCdub3RlcycsIGRlbGV0ZU5vdGVCdG4pO1xuXG4gIGNvbnN0IG5vdGVUZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZVRleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ25vdGUtdGV4dC1jb250ZW50Jyk7XG4gIG5vdGVUZXh0Q29udGVudC50ZXh0Q29udGVudCA9IGAke3Rhc2sudGFza0RldGFpbHN9YDtcbiAgbm90ZURpdi5hcHBlbmRDaGlsZChub3RlVGV4dENvbnRlbnQpO1xuXG4gIGNvbnN0IG5vdGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3RlRGF0ZS5jbGFzc0xpc3QuYWRkKCdub3RlLWRhdGUnKTtcbiAgbm90ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tEYXRlfWA7XG4gIG5vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZURhdGUpO1xufVxuXG5leHBvcnQgeyBhZGRUYXNrQ29udGFpbmVyLCBidWlsZFRvRG9VaSB9O1xuIiwiaW1wb3J0IHsgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhciBmcm9tICcuLi9kZWxldGVQcm9qZWN0RnJvbVNpZGViYXInO1xuaW1wb3J0IHsgYWRkVGFza0NvbnRhaW5lciB9IGZyb20gJy4vYWRkVGFza1RvUGFnZSc7XG5cbmZ1bmN0aW9uIHdpcGVEb21Db250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcblxuICBpZiAoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAvLyBpZiBtYWluQ29udGVudCBoYXMgYSBjaGlsZCwgcmVwbGFjZSB3L2VtcHR5IHN0cmluZyBzbyB3ZSBjYW4gc2hvdyBuZXh0IG5hdiBpdGVtcyBjbGlja2VkIGNvbnRlbnRcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2lwZU1vZGFsQ29udGVudChjb250ZW50KSB7XG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIC8vIGlmIG1vZGFsIG1haW4gaGFzIGEgY2hpbGQsIHJlcGxhY2Ugdy9lbXB0eSBzdHJpbmcgc28gd2UgY2FuIHNob3cgbmV4dCBuYXYgaXRlbXMgY2xpY2tlZCBjb250ZW50XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59XG5cbi8vIHJlZmFjdG9yIGJlbG93XG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbURvbSh0YXNrLCB0YXNrVGl0bGUpIHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpIHx8XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJyk7XG5cbiAgaWYgKHRvRG9Db250YWluZXIuY2xhc3NOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3QtdGFzaycsIHRhc2tUaXRsZSk7XG4gIH0gZWxzZSBpZiAodG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPT09ICd0by1kby1jb250YWluZXInKSB7XG4gICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UoJ3RvRG8nLCB0YXNrVGl0bGUpO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKCdub3RlcycsIHRhc2tUaXRsZSk7XG4gIH1cblxuICB0b0RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2spO1xuXG4gIC8vIGlmIHByb2plY3QgcGFnZSBoYXMgbm8gY2hpbGRyZW4gdGhlbiB3ZSdsbCBncmFiIHRoZSBwYWdlIGhlYWRlciBhbmQgZGVsZXRlXG4gIC8vIGl0IGZyb20gdGhlIHNpZGViYXJcbiAgaWYgKFxuICAgIHRvRG9Db250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmXG4gICAgdG9Eb0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gJ3Byb2plY3QtY29udGFpbmVyJ1xuICApIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItY29udGVudCcpLnRleHRDb250ZW50O1xuICAgIGRlbGV0ZVByb2plY3RGcm9tU2lkZWJhcihjdXJyZW50UGFnZSk7XG4gICAgd2lwZURvbUNvbnRlbnQoKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyKCd0by1kby1jb250YWluZXInKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvck5vVGFza01lc3NhZ2UoKSB7XG4gIGNvbnN0IG5vVGFza1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tdGFzay10ZXh0Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uZXcnKTtcbiAgY29uc3QgY29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKG5vVGFza1RleHQpKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vVGFza1RleHQpO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdDb250ZW50QnRuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBjb250YWluZXJUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y29udGFpbmVyfWApO1xuICBtYWluLnJlbW92ZUNoaWxkKGNvbnRhaW5lclRvRGVsZXRlKTtcbn1cblxuLy8gZnVuY3Rpb24gY2hhbmdlQ29udGFpbmVyTmFtZShlbGVtZW50TmFtZSwgbmV3RWxlbWVudE5hbWUpIHtcbi8vICAgY29uc29sZS5sb2coJ2hqZXJlJyk7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50TmFtZX1gKTtcbi8vICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4vLyAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0VsZW1lbnROYW1lKTtcbi8vIH1cblxuZXhwb3J0IHtcbiAgd2lwZURvbUNvbnRlbnQsXG4gIHdpcGVNb2RhbENvbnRlbnQsXG4gIHJlbW92ZVRhc2tGcm9tRG9tLFxuICBjaGVja0Zvck5vVGFza01lc3NhZ2UsXG4gIGRlbGV0ZUNvbnRhaW5lcixcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIodHlwZSkge1xuICAvLyB1c2luZyBpbm5lckhUTUwgc28gd2UgY2FuIGdyYWIgdGhlIGljb24gYXMgd2VsbCBhcyB0ZXh0XG4gIGNvbnN0IHNpZGViYXJMaW5rQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pbm5lckhUTUw7XG4gIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcblxuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcbiAgLy8gcGFnZUhlYWRlci5pbm5lckhUTUwgPSBgJHtzaWRlYmFyTGlua0NsaWNrZWR9YDtcblxuICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbnRlbnQnKTtcbiAgaGVhZGVyQ29udGVudC5pbm5lckhUTUwgPSBgJHtzaWRlYmFyTGlua0NsaWNrZWR9YDtcbiAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcblxuICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgY29uc3QgcHJvamVjdFRyYXNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRyYXNoRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdHJhc2gtZGl2Jyk7XG4gICAgcGFnZUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VHJhc2hEaXYpO1xuXG4gICAgY29uc3QgcHJvamVjdFRyYXNoQ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHByb2plY3RUcmFzaENhbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXRyYXNoLWNhbicpO1xuICAgIHByb2plY3RUcmFzaERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VHJhc2hDYW4pO1xuXG4gICAgY29uc3QgcHJvamVjdFRyYXNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VHJhc2hUZXh0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICBwcm9qZWN0VHJhc2hEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRyYXNoVGV4dCk7XG4gIH1cblxuICBtYWluQm9keS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcbn1cbiIsImltcG9ydCBsb2FkVGFza0xpc3QgZnJvbSAnLi4vcGFnZXMvdGFza0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcmlnaHRNYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWdodE1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tcmlnaHQnKTtcbiAgYm9keS5hcHBlbmRDaGlsZChyaWdodE1haW5Db250ZW50KTtcblxuICAvLyBvbiBwYWdlIGxvYWQgb3BlbiB0byAndGFzay1saXN0J1xuICBsb2FkVGFza0xpc3QoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRHVlRGF0ZURpdihlbGVtZW50KSB7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kYXRlLWRpdicpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuXG4gIGJ1aWxkRHVlRGF0ZUxhYmVsKGRhdGVEaXYpO1xuICBidWlsZER1ZURhdGVJbnB1dChkYXRlRGl2KTtcbn1cblxuZnVuY3Rpb24gYnVpbGREdWVEYXRlTGFiZWwoZGF0ZURpdikge1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGF0ZS1sYWJlbCcpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbW9kYWwtZGF0ZS1pbnB1dCcpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbn1cblxuZnVuY3Rpb24gYnVpbGREdWVEYXRlSW5wdXQoZGF0ZURpdikge1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGF0ZS1pbnB1dCcpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtZGF0ZS1pbnB1dCcpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vZGFsQWRkVGFza0J1dHRvbihlbGVtZW50LCBjbGFzc05hbWUsIGJ0blRleHQpIHtcbiAgY29uc3QgYWRkTmV3QnRuTW9kYWxQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZE5ld0J0bk1vZGFsUGFnZS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgYWRkTmV3QnRuTW9kYWxQYWdlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFkZC1idG4nKTtcbiAgYWRkTmV3QnRuTW9kYWxQYWdlLnRleHRDb250ZW50ID0gYCR7YnRuVGV4dH1gO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGFkZE5ld0J0bk1vZGFsUGFnZSk7XG59XG4iLCJpbXBvcnQge1xuICBhZGRBY3RpdmVBdHRyaWJ1dGUsXG4gIGNoZWNrRm9yQWN0aXZlQXR0cmlidXRlLFxufSBmcm9tICcuLi9hY3RpdmVBdHRyaWJ1dGUnO1xuaW1wb3J0IGxvYWRNb2RhbFRhc2tQYWdlIGZyb20gJy4vbW9kYWwtdGFzay1wYWdlJztcbmltcG9ydCBsb2FkTW9kYWxQcm9qZWN0UGFnZSBmcm9tICcuL21vZGFsLXByb2plY3QtcGFnZSc7XG5pbXBvcnQgbG9hZE1vZGFsTm90ZXNQYWdlIGZyb20gJy4vbW9kYWwtbm90ZS1wYWdlJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsU2lkZWJhckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWxpbmsnKTtcbiAgY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZS1idG4nKTtcbiAgY29uc3QgbmV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LW1vZGFsJyk7XG5cbiAgbW9kYWxTaWRlYmFyTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUobW9kYWxTaWRlYmFyTGlua3MpO1xuICAgICAgYWRkQWN0aXZlQXR0cmlidXRlKGUpO1xuICAgICAgY2hlY2tXaWNoTW9kYWxTaWRlYmFyTGlua0lzQ2xpY2tlZChlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbmV3TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG4gICAgcmVtb3ZlTW9kYWwoKTtcbiAgfSk7XG5cbiAgbW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVNb2RhbCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXaWNoTW9kYWxTaWRlYmFyTGlua0lzQ2xpY2tlZChsaW5rKSB7XG4gIHN3aXRjaCAobGluay50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICBjYXNlICdUYXNrJzpcbiAgICAgIGxvYWRNb2RhbFRhc2tQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQcm9qZWN0JzpcbiAgICAgIGxvYWRNb2RhbFByb2plY3RQYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdOb3RlJzpcbiAgICAgIGxvYWRNb2RhbE5vdGVzUGFnZSgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNhcHR1cmVNb2RhbE5vdGVQYWdlRGF0YSB9IGZyb20gJy4uLy4uL3Rhc2tzL2NhcHR1cmVUYXNrRGF0YSc7XG5pbXBvcnQgYWRkVG9EbyBmcm9tICcuLi8uLi90YXNrcy9hZGRUYXNrcyc7XG5pbXBvcnQgcmVtb3ZlTW9kYWwgZnJvbSAnLi9yZW1vdmVNb2RhbCc7XG5pbXBvcnQgeyBjaGVja0Zvck5vVGFza01lc3NhZ2UgfSBmcm9tICcuLi9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbFRhc2tOb3Rlc0V2ZW50cygpIHtcbiAgY29uc3QgbW9kYWxBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWJ0bicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcmlnaHQnKTtcbiAgY29uc3Qgbm9UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWNvbnRhaW5lcicpO1xuXG4gIC8vIGNhcHR1cmUgdG9kbyBvYmplY3QgaW4gdGFzayB2YXJpYWJsZVxuICBtb2RhbEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YXNrID0gY2FwdHVyZU1vZGFsTm90ZVBhZ2VEYXRhKCk7XG4gICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG4gICAgYWRkVG9Ebygnbm90ZXMnLCB0YXNrKTtcbiAgICByZW1vdmVNb2RhbCgpO1xuICAgIGlmIChub1Rhc2tDb250YWluZXIpIHtcbiAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobm9UYXNrQ29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgd2lwZU1vZGFsQ29udGVudCB9IGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgYnVpbGRNb2RhbER1ZURhdGVEaXYgZnJvbSAnLi9kdWUtZGF0ZSc7XG5pbXBvcnQgYnVpbGRNb2RhbFRleHRBcmVhIGZyb20gJy4vdGV4dC1hcmVhJztcbmltcG9ydCBidWlsZE1vZGFsQWRkVGFza0J1dHRvbiBmcm9tICcuL21vZGFsLWFkZC1idXR0b24nO1xuaW1wb3J0IG1vZGFsVGFza05vdGVzRXZlbnRzIGZyb20gJy4vbW9kYWwtbm90ZS1wYWdlLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNb2RhbE5vdGVzUGFnZSgpIHtcbiAgLy8gaWYgaXQgZXhpc3RzIHRoZW4gZG9udCBidWlsZCB0aGUgcGFnZSBiZWNhdXNlIGl0cyBvcGVuIGFscmVhZHksIGp1c3QgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbm90ZXMtdGV4dC1hcmVhJykpIHJldHVybjtcblxuICBjb25zdCBtb2RhbE1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICB3aXBlTW9kYWxDb250ZW50KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLW5vdGVzLXRpdGxlLWFyZWEnLFxuICAgICdUaXRsZTogR3JvY2VyeSBMaXN0LicsXG4gICAgbW9kYWxNYWluQ29udGVudFxuICApO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLW5vdGVzLWRldGFpbHMtYXJlYScsXG4gICAgJ0RldGFpbHM6IGZydWl0LCB3YXRlcnMsIG1lYXQnLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbER1ZURhdGVEaXYobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uKG1vZGFsTWFpbkNvbnRlbnQsICdtb2RhbC1hZGQtbm90ZS1idG4nLCAnQWRkIE5vdGUnKTtcblxuICAvLyBjYWxsIHNwZWNpZmljIG1vZGFsIG5vdGUgcGFnZSBldmVudHNcbiAgbW9kYWxUYXNrTm90ZXNFdmVudHMoKTtcbn1cbiIsImltcG9ydCB7IGNhcHR1cmVNb2RhbFByb2plY3RQYWdlRGF0YSB9IGZyb20gJy4uLy4uL3Rhc2tzL2NhcHR1cmVUYXNrRGF0YSc7XG5pbXBvcnQgYWRkVG9EbyBmcm9tICcuLi8uLi90YXNrcy9hZGRUYXNrcyc7XG5pbXBvcnQgYWRkTmV3UHJvamVjdFRvU2lkZWJhciwge1xuICBjaGVja0lmUHJvamVjdE5hbWVBbHJlYWR5RXhpc3RzLFxufSBmcm9tICcuLi9hZGROZXdQcm9qZWN0VG9TaWRlYmFyJztcbmltcG9ydCByZW1vdmVNb2RhbCBmcm9tICcuL3JlbW92ZU1vZGFsJztcbmltcG9ydCBhZGRQYWdlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi4vLi4vZXZlbnRzJztcbmltcG9ydCB7IGNoZWNrRm9yTm9UYXNrTWVzc2FnZSB9IGZyb20gJy4uL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza1Byb2plY3RFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1idG4nKTtcblxuICBtb2RhbEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBjYXB0dXJlIHRvZG8gb2JqZWN0IGluIHRhc2sgdmFyaWFibGVcbiAgICBjb25zdCB0YXNrID0gY2FwdHVyZU1vZGFsUHJvamVjdFBhZ2VEYXRhKCk7XG4gICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG5cbiAgICAvLyBkZXN0cnVjdHVyZSBhbmQgcmVuYW1lIHRvIHByb2plY3QgdGl0bGUgc28gd2UgY2FuIGFkZCB0byBzaWRlYmFyIHRocm91Z2ggZnVuY3Rpb24gY2FsbFxuICAgIGNvbnN0IHsgdGFza1RpdGxlOiBwcm9qZWN0VGl0bGUgfSA9IHRhc2s7XG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gJ04vQScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVjayA9IGNoZWNrSWZQcm9qZWN0TmFtZUFscmVhZHlFeGlzdHMocHJvamVjdFRpdGxlKTtcbiAgICAvLyBpZiB3ZSBoYXZlIGEgZHVwbGljYXRlIHByb2plY3QgbmFtZSByZXR1cm4sIGVsc2UgYWRkIHByb2plY3QgdG8gc2lkZWJhclxuICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0RvKCdwcm9qZWN0JywgdGFzayk7XG4gICAgICBhZGROZXdQcm9qZWN0VG9TaWRlYmFyKHByb2plY3RUaXRsZSk7XG4gICAgICBhZGRQYWdlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IHdpcGVNb2RhbENvbnRlbnQgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IGJ1aWxkTW9kYWxEdWVEYXRlRGl2IGZyb20gJy4vZHVlLWRhdGUnO1xuaW1wb3J0IGJ1aWxkTW9kYWxUZXh0QXJlYSBmcm9tICcuL3RleHQtYXJlYSc7XG5pbXBvcnQgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24gZnJvbSAnLi9tb2RhbC1hZGQtYnV0dG9uJztcbmltcG9ydCBtb2RhbFRhc2tQcm9qZWN0RXZlbnRzIGZyb20gJy4vbW9kYWwtcHJvamVjdC1wYWdlLWV2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNb2RhbFByb2plY3RQYWdlKCkge1xuICAvLyBpZiBpdCBleGlzdHMgdGhlbiBkb250IGJ1aWxkIHRoZSBwYWdlIGJlY2F1c2UgaXRzIG9wZW4gYWxyZWFkeSwganVzdCByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wcm9qZWN0LXRleHQtYXJlYScpKSByZXR1cm47XG5cbiAgY29uc3QgbW9kYWxNYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgd2lwZU1vZGFsQ29udGVudChtb2RhbE1haW5Db250ZW50KTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC1wcm9qZWN0LXRleHQtYXJlYScsXG4gICAgJ1RpdGxlOiBCdWlsZCBuZXcgZmVuY2UuJyxcbiAgICBtb2RhbE1haW5Db250ZW50XG4gICk7XG4gIGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uKFxuICAgIG1vZGFsTWFpbkNvbnRlbnQsXG4gICAgJ21vZGFsLWFkZC1wcm9qZWN0LWJ0bicsXG4gICAgJ0FkZCBQcm9qZWN0J1xuICApO1xuXG4gIC8vIGNhbGwgc3BlY2lmaWMgbW9kYWwgcHJvamVjdCBwYWdlIGV2ZW50c1xuICBtb2RhbFRhc2tQcm9qZWN0RXZlbnRzKCk7XG59XG4iLCJpbXBvcnQgeyBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEgfSBmcm9tICcuLi8uLi90YXNrcy9jYXB0dXJlVGFza0RhdGEnO1xuaW1wb3J0IGFkZFRvRG8gZnJvbSAnLi4vLi4vdGFza3MvYWRkVGFza3MnO1xuaW1wb3J0IHJlbW92ZU1vZGFsIGZyb20gJy4vcmVtb3ZlTW9kYWwnO1xuaW1wb3J0IHsgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlIH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7XG4gIGFkZEFjdGl2ZUF0dHJpYnV0ZSxcbiAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUsXG59IGZyb20gJy4uL2FjdGl2ZUF0dHJpYnV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsVGFza1BhZ2VFdmVudHMoKSB7XG4gIGNvbnN0IG1vZGFsQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1idG4nKTtcbiAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJ0bicpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyJyk7XG4gIGNvbnN0IHBhZ2VIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1jb250ZW50Jyk7XG5cbiAgbW9kYWxBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VIZWFkZXIgPT09IG51bGwpIHtcbiAgICAgIHBhZ2VIZWFkZXIgPSAnICc7XG4gICAgICBwYWdlSGVhZGVyVGV4dCA9ICcgJztcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0YXNrIHNob3VsZCBiZSBhdHRhY2hlZCB0byBhIHByb2plY3Qgb3Igbm90XG4gICAgaWYgKHBhZ2VIZWFkZXIubmV4dFNpYmxpbmcuY2xhc3NOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgICAvLyBjYXB0dXJlIHRvZG8gb2JqZWN0IGluIHRhc2sgdmFyaWFibGVcbiAgICAgIGNvbnN0IHRhc2sgPSBjYXB0dXJlTW9kYWxUYXNrUGFnZURhdGEoKTtcbiAgICAgIHJlbW92ZU1vZGFsKCk7XG4gICAgICBjaGVja0Zvck5vVGFza01lc3NhZ2UoKTtcbiAgICAgIGFkZFRvRG8oJ3Byb2plY3QtdGFzaycsIHRhc2ssIHBhZ2VIZWFkZXJUZXh0LnRleHRDb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFzayA9IGNhcHR1cmVNb2RhbFRhc2tQYWdlRGF0YSgpO1xuICAgICAgY2hlY2tGb3JOb1Rhc2tNZXNzYWdlKCk7XG4gICAgICBhZGRUb0RvKCd0b0RvJywgdGFzayk7XG4gICAgICByZW1vdmVNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvLyBhZGQgYWN0aXZlIHRvIGNsYXNzbGlzdCBvZiBjbGlrZWQgYnV0dG9uIHNvIHdlIGNhbiBzdHlsZSBpdCB3aXRoIGNzc1xuICAgICAgY2hlY2tGb3JBY3RpdmVBdHRyaWJ1dGUocHJpb3JpdHlCdXR0b25zKTtcbiAgICAgIGFkZEFjdGl2ZUF0dHJpYnV0ZShlKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyB3aXBlTW9kYWxDb250ZW50IH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCBidWlsZE1vZGFsRHVlRGF0ZURpdiBmcm9tICcuL2R1ZS1kYXRlJztcbmltcG9ydCBidWlsZE1vZGFsVGV4dEFyZWEgZnJvbSAnLi90ZXh0LWFyZWEnO1xuaW1wb3J0IGJ1aWxkTW9kYWxBZGRUYXNrQnV0dG9uIGZyb20gJy4vbW9kYWwtYWRkLWJ1dHRvbic7XG5pbXBvcnQgbW9kYWxUYXNrUGFnZUV2ZW50cyBmcm9tICcuL21vZGFsLXRhc2stcGFnZS1ldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTW9kYWxUYXNrUGFnZSgpIHtcbiAgLy8gaWYgaXQgZXhpc3RzIHRoZW4gZG9udCBidWlsZCB0aGUgcGFnZSBiZWNhdXNlIGl0cyBvcGVuIGFscmVhZHksIGp1c3QgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGFzay10aXRsZS1hcmVhJykpIHJldHVybjtcblxuICBjb25zdCBtb2RhbE1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW5ldy1jb250ZW50LWRpdicpO1xuICB3aXBlTW9kYWxDb250ZW50KG1vZGFsTWFpbkNvbnRlbnQpO1xuICBidWlsZE1vZGFsVGV4dEFyZWEoXG4gICAgJ21vZGFsLXRhc2stdGl0bGUtYXJlYScsXG4gICAgJ1RpdGxlOiBQYXkgQmlsbHMnLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbFRleHRBcmVhKFxuICAgICdtb2RhbC10YXNrLWRldGFpbHMtYXJlYScsXG4gICAgJ0RldGFpbHM6IHBob25lIGJpbGwnLFxuICAgIG1vZGFsTWFpbkNvbnRlbnRcbiAgKTtcbiAgYnVpbGRNb2RhbER1ZURhdGVEaXYobW9kYWxNYWluQ29udGVudCk7XG4gIGJ1aWxkTW9kYWxUYXNrcHJpb3JpdHlEaXYobW9kYWxNYWluQ29udGVudCk7XG4gIC8vIGNhbGwgc3BlY2lmaWMgbW9kYWwgdGFzayBwYWdlIGV2ZW50c1xuICBtb2RhbFRhc2tQYWdlRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTW9kYWxUYXNrcHJpb3JpdHlEaXYobW9kYWxNYWluQ29udGVudCkge1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1wcmlvcml0eS1kaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG4gIG1vZGFsTWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIGNvbnN0IHByaW9yaXR5YnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ0bi1kaXYnKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlidXR0b25EaXYpO1xuXG4gIGJ1aWxkUHJpb3JpdHlCdXR0b25zKHByaW9yaXR5YnV0dG9uRGl2KTtcbiAgYnVpbGRNb2RhbEFkZFRhc2tCdXR0b24ocHJpb3JpdHlEaXYsICdtb2RhbC1hZGQtdGFzay1idG4nLCAnQWRkIHRvIGRvJyk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUHJpb3JpdHlCdXR0b25zKHByaW9yaXR5YnV0dG9uRGl2KSB7XG4gIGNvbnN0IHByaW9yaXR5TG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5TG93QnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdy1idG4nKTtcbiAgcHJpb3JpdHlMb3dCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5TG93QnRuLnRleHRDb250ZW50ID0gJ0xPVyc7XG4gIHByaW9yaXR5YnV0dG9uRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TG93QnRuKTtcblxuICBjb25zdCBwcmlvcml0eU1lZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcmlvcml0eU1lZEJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1tZWQtYnRuJyk7XG4gIHByaW9yaXR5TWVkQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ0bicpO1xuICBwcmlvcml0eU1lZEJ0bi50ZXh0Q29udGVudCA9ICdNRURJVU0nO1xuICBwcmlvcml0eWJ1dHRvbkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZEJ0bik7XG5cbiAgY29uc3QgcHJpb3JpdHlIaWdoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoLWJ0bicpO1xuICBwcmlvcml0eUhpZ2hCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gIHByaW9yaXR5SGlnaEJ0bi50ZXh0Q29udGVudCA9ICdISUdIJztcbiAgcHJpb3JpdHlidXR0b25EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoQnRuKTtcbn1cbiIsImltcG9ydCBtb2RhbEV2ZW50cyBmcm9tICcuL21vZGFsLWV2ZW50cyc7XG5pbXBvcnQgbG9hZE1vZGFsVGFza1BhZ2UgZnJvbSAnLi9tb2RhbC10YXNrLXBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdEaWFsb2dNb2RhbCgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKSkgcmV0dXJuO1xuICBjb25zdCBjb250YWluZXIgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1kby1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlcy1jb250YWluZXInKSB8fFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBuZXdNb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctbW9kYWwnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld01vZGFsKTtcblxuICBjcmVhdGVNb2RhbEhlYWRlcihuZXdNb2RhbCk7XG4gIGNyZWF0ZU1vZGFsTWFpbkRpdihuZXdNb2RhbCk7XG4gIGNyZWF0ZU1vZGFsU2lkZWJhcigpO1xuICBjcmVhdGVNb2RhbENvbnRlbnREaXYoKTtcblxuICBuZXdNb2RhbC5zaG93TW9kYWwoKTtcblxuICAvLyB3ZSB3YW50IHRhc2sgcGFnZSB0byBiZSB0aGUgZmlyc3QgdG8gYXV0b21hdGljYWxseSBzaG93IGluIG1vZGFsXG4gIGxvYWRNb2RhbFRhc2tQYWdlKCk7XG5cbiAgLy8gbG9hZCBtb2RhbCBldmVudHMgc28gdXNlciBjYW4gY2hhbmdlIHRhYnMvZXRjXG4gIG1vZGFsRXZlbnRzKG5ld01vZGFsLCBjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbEhlYWRlcihuZXdNb2RhbCwgdGFza0hlYWRlcikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0YXNrSGVhZGVyIHx8ICdDcmVhdGUgYSBuZXcuLi4nO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXgnKTtcbiAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdDbG9zZScpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZS1idG4nKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxNYWluRGl2KG5ld01vZGFsKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1tYWluLWRpdicpO1xuICBuZXdNb2RhbC5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxTaWRlYmFyKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaWRlYmFyJyk7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1saW5rJyk7XG4gIC8vIGFkZCBhY3RpdmUgdG8gc2hvdyB0YXNrIHBhZ2UgZmlyc3QgaW4gbW9kYWxcbiAgc2lkZWJhckxpbmtUYXNrcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2lkZWJhckxpbmtUYXNrcy50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Rhc2tzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua1Byb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua1Byb2plY3RzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtQcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua1Byb2plY3RzKTtcblxuICBjb25zdCBzaWRlYmFyTGlua05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaWRlYmFyTGlua05vdGVzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWxpbmsnKTtcbiAgc2lkZWJhckxpbmtOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlJztcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua05vdGVzKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50RGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1haW4tZGl2Jyk7XG4gIGNvbnN0IG5ld0NvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctY29udGVudC1kaXYnKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdDb250ZW50RGl2KTtcblxuICBjb25zdCBuZXdFbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdFbnRyeURpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctZW50cnknKTtcbiAgbmV3Q29udGVudERpdi5hcHBlbmRDaGlsZChuZXdFbnRyeURpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsVGFza0RldGFpbHNBcmVhKG5ld01vZGFsLCBkZXRhaWxzKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpO1xuICB0YXNrRGV0YWlsc0Rpdi50ZXh0Q29udGVudCA9IGRldGFpbHM7XG4gIG5ld01vZGFsLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzRGl2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTW9kYWxIZWFkZXIsIGNyZWF0ZU1vZGFsTWFpbkRpdiwgY3JlYXRlTW9kYWxUYXNrRGV0YWlsc0FyZWEgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU1vZGFsKCkge1xuICBjb25zdCBuZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctbW9kYWwnKTtcbiAgY29uc3QgY29udGFpbmVyID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXMtY29udGFpbmVyJykgfHxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcblxuICBjb250YWluZXIucmVtb3ZlQ2hpbGQobmV3TW9kYWwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNb2RhbFRleHRBcmVhKGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIC8vIGxpbWl0IGNoYXJhY3RlciBsZW5ndGggb24gdGl0bGUgdGV4dCBhcmVhc1xuICBpZiAoY2xhc3NOYW1lLmluY2x1ZGVzKCd0aXRsZScpKSB7XG4gICAgdGV4dEFyZWEubWF4TGVuZ3RoID0gMzA7XG4gIH1cblxuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSBgJHtwbGFjZWhvbGRlcn1gO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbn1cbiIsImltcG9ydCB7IGRpYWxvZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VOZXdUYXNrRGl2KGNob2ljZSwgY29udGFpbmVyQ2xhc3NOYW1lKSB7XG4gIGNvbnN0IG1haW5SaWdodEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1yaWdodCcpO1xuICBjb25zdCBjb250YWluZXJUb0NoZWNrRm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyQ2xhc3NOYW1lfWApO1xuICBjaGVja0lmVGFza0RpdkV4aXN0cyhtYWluUmlnaHRCb2R5LCBjb250YWluZXJUb0NoZWNrRm9yKTtcblxuICBjb25zdCBub1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9UYXNrRGl2LmNsYXNzTGlzdC5hZGQoY29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgbWFpblJpZ2h0Qm9keS5hcHBlbmRDaGlsZChub1Rhc2tEaXYpO1xuXG4gIGNyZWF0ZU5vVGFza0NvbnRhaW5lclRleHQobm9UYXNrRGl2LCBjaG9pY2UpO1xuICBjcmVhdGVOb1Rhc2tDb250YWluZXJCdXR0b24obm9UYXNrRGl2KTtcbiAgZGlhbG9nRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVGFza0NvbnRhaW5lclRleHQobm9UYXNrRGl2LCBjaG9pY2UpIHtcbiAgY29uc3Qgbm9UYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm9UYXNrVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSBubyAke2Nob2ljZX0geWV0LCBsZXRzIG1ha2Ugc29tZSFgO1xuICBub1Rhc2tUZXh0LmNsYXNzTGlzdC5hZGQoJ25vLXRhc2stdGV4dCcpO1xuICBub1Rhc2tEaXYuYXBwZW5kQ2hpbGQobm9UYXNrVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVGFza0NvbnRhaW5lckJ1dHRvbihub1Rhc2tEaXYpIHtcbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NsYXNzJyxcbiAgICAnbmV3LWNvbnRlbnQgbWFpbi1uZXcgZmEtcmVndWxhciBmYS1wbHVzIGZhLTJ4bCdcbiAgKTtcbiAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ05ldycpO1xuICBub1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZUYXNrRGl2RXhpc3RzKG1haW5SaWdodEJvZHksIGNvbnRhaW5lclRvQ2hlY2tGb3IpIHtcbiAgaWYgKGNvbnRhaW5lclRvQ2hlY2tGb3IpIHtcbiAgICBtYWluUmlnaHRCb2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lclRvQ2hlY2tGb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRFeGlzdGluZ1Byb2plY3RzVG9TaWRlYmFyIH0gZnJvbSAnLi4vcGFnZXMvcHJvamVjdHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbGVmdCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICBjcmVhdGVUb3BTaWRlYmFyQ29udGVudChzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9wU2lkZWJhckNvbnRlbnQoc2lkZWJhcikge1xuICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItdG9wLWNvbnRhaW5lcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2lkZWJhckxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgc2lkZWJhckxpbmtzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbGlua3MnKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJMaW5rcyk7XG5cbiAgY29uc3QgdG9kYXlMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRvZGF5TGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZCh0b2RheUxpbmtJdGVtKTtcbiAgY29uc3QgdG9kYXlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICB0b2RheUxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyLWxpbmsgZmEtc29saWQgZmEtc3VuJyk7XG4gIHRvZGF5TGlua0l0ZW0uYXBwZW5kQ2hpbGQodG9kYXlMaW5rKTtcbiAgY29uc3QgdG9kYXlMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdG9kYXlMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICB0b2RheUxpbmtUZXh0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdG9kYXlMaW5rSXRlbS5hcHBlbmRDaGlsZCh0b2RheUxpbmtUZXh0KTtcblxuICBjb25zdCB0YXNrTGlzdExpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdGFza0xpc3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdsaW5rLWl0ZW0nKTtcbiAgc2lkZWJhckxpbmtzLmFwcGVuZENoaWxkKHRhc2tMaXN0TGlua0l0ZW0pO1xuICBjb25zdCB0YXNrTGlzdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHRhc2tMaXN0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLWNoZWNrJyk7XG4gIHRhc2tMaXN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQodGFza0xpc3RMaW5rKTtcblxuICBjb25zdCB0YXNrTGlzdExpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0YXNrTGlzdExpbmtUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuICAvLyBhZGQgYWN0aXZlIHRvIHRhc2sgbGlzdCBiZWNhdXNlIHdlIHdhbnQgdGhpcyBwYWdlIHRvIHNob3cgYXV0b21hdGljYWxseVxuICB0YXNrTGlzdExpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB0YXNrTGlzdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ1Rhc2sgTGlzdCc7XG4gIHRhc2tMaXN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQodGFza0xpc3RMaW5rVGV4dCk7XG5cbiAgY3JlYXRlQm90dG9tU2lkZWJhckNvbnRlbnQoc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvdHRvbVNpZGViYXJDb250ZW50KHNpZGViYXIpIHtcbiAgY29uc3QgYm90dG9tQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdHRvbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWJvdHRvbS1jb250YWluZXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChib3R0b21Db250YWluZXIpO1xuXG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHNpZGViYXJMaW5rcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIGJvdHRvbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyTGlua3MpO1xuXG4gIGNvbnN0IHByb2plY3RMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHByb2plY3RMaW5rSXRlbS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXByb2plY3QtbGluaycpO1xuICBzaWRlYmFyTGlua3MuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtJdGVtKTtcbiAgY29uc3QgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtZmlsZScpO1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdExpbmspO1xuICBjb25zdCBwcm9qZWN0TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByb2plY3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICBwcm9qZWN0TGlua1RleHQudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICBwcm9qZWN0TGlua0l0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdExpbmtUZXh0KTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0TGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGFkZE5ld1Byb2plY3RMaW5rSXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXNvbGlkIGZhLXBsdXMnKTtcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICBhZGROZXdQcm9qZWN0TGlua0l0ZW0udGV4dENvbnRlbnQ7XG4gIHByb2plY3RMaW5rSXRlbS5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0TGlua0l0ZW0pO1xuICBjb25zdCBhZGROZXdwcm9qZWN0TGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFkZE5ld3Byb2plY3RMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdhZGQtbmV3LXByb2plY3QnKTtcbiAgYWRkTmV3cHJvamVjdExpbmtUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBwcm9qZWN0JztcbiAgYWRkTmV3UHJvamVjdExpbmtJdGVtLmFwcGVuZENoaWxkKGFkZE5ld3Byb2plY3RMaW5rVGV4dCk7XG4gIC8vIGlmIGFueVxuICBhZGRFeGlzdGluZ1Byb2plY3RzVG9TaWRlYmFyKCk7XG5cbiAgY29uc3Qgbm90ZXNMaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG5vdGVzTGlua0l0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1pdGVtJyk7XG4gIHNpZGViYXJMaW5rcy5hcHBlbmRDaGlsZChub3Rlc0xpbmtJdGVtKTtcbiAgY29uc3Qgbm90ZXNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBub3Rlc0xpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS1ib29rJyk7XG4gIG5vdGVzTGlua0l0ZW0uYXBwZW5kQ2hpbGQobm90ZXNMaW5rKTtcbiAgY29uc3Qgbm90ZXNMaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbm90ZXNMaW5rVGV4dC5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xuICBub3Rlc0xpbmtUZXh0LnRleHRDb250ZW50ID0gJ05vdGVzJztcbiAgbm90ZXNMaW5rSXRlbS5hcHBlbmRDaGlsZChub3Rlc0xpbmtUZXh0KTtcblxuICBjcmVhdGVTaWRlYmFyRm9vdGVyKHNpZGViYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyRm9vdGVyKHNpZGViYXIpIHtcbiAgY29uc3Qgc2lkZWJhckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZm9vdGVyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckZvb3Rlcik7XG5cbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCduZXctYnV0dG9uLWRpdicpO1xuICBzaWRlYmFyRm9vdGVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIGNvbnN0IG5ld0NvbnRlbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG5ld0NvbnRlbnRCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdOZXcnKTtcbiAgbmV3Q29udGVudEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy1jb250ZW50IGZhLXNvbGlkIGZhLXBsdXMnKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnRCdG4pO1xuXG4gIGNvbnN0IHNldHRpbmdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNldHRpbmdzRGl2LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWRpdicpO1xuICBzaWRlYmFyRm9vdGVyLmFwcGVuZENoaWxkKHNldHRpbmdzRGl2KTtcbiAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIHNldHRpbmdzQnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnU2V0dGluZ3MnKTtcbiAgc2V0dGluZ3NCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyLXNldHRpbmdzIGZhLXNvbGlkIGZhLWdlYXInKTtcbiAgc2V0dGluZ3NEaXYuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2lkZUJhcigpIHtcbiAgY3JlYXRlU2lkZWJhcigpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRTaWRlQmFyIGZyb20gJy4vdWkvc2lkZWJhcic7XG5pbXBvcnQgbG9hZE1haW5Db250ZW50IGZyb20gJy4vdWkvbWFpbkNvbnRlbnQnO1xuaW1wb3J0IHBhZ2VFdmVudHMgZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmxvYWRTaWRlQmFyKCk7XG5sb2FkTWFpbkNvbnRlbnQoKTtcbnBhZ2VFdmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==