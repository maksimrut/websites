/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n// Burger menu\r\nconst menuIcon = document.querySelector('.menu__icon');\r\nconst menuBody = document.querySelector('.menu__body');\r\n\r\nmenuIcon.addEventListener(\"click\", function(e) {\r\n  document.body.classList.toggle('lock');\r\n  menuIcon.classList.toggle('active');\r\n  menuBody.classList.toggle('active');\r\n});\r\n\r\n\r\n// Smooth scroll\r\nconst menuLinks = document.querySelectorAll('.menu__link[data-goto]');\r\n\r\nif (menuLinks.length > 0) {\r\n  menuLinks.forEach(menuLink => {\r\n    menuLink.addEventListener(\"click\", onMenuLinkClick);\r\n  });\r\n\r\n  function onMenuLinkClick(e) {\r\n    const menuLink = e.target;\r\n\r\n    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {\r\n      const gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n      console.log(gotoBlock);\r\n      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\r\n\r\n      // Close menu, unblock page scroll\r\n      document.body.classList.toggle('lock');\r\n      menuIcon.classList.toggle('active');\r\n      menuBody.classList.toggle('active');\r\n\r\n      window.scrollTo({\r\n        top: gotoBlockValue,\r\n        behavior: \"smooth\",\r\n      });\r\n      \r\n      e.preventDefault();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://salarix/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://salarix/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;