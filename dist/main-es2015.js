(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\Angular\Projetos\taskforce\src\main.ts */"zUnb");


/***/ }),

/***/ "2RpG":
/*!*************************************************!*\
  !*** ./src/app/contagem/contagem.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-6 {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  transform: rotate(0);\r\n}\r\n\r\n.loader-6 p {\r\n  -webkit-animation: loader-6-3 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n          animation: loader-6-3 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n\topacity: 0;\r\n}\r\n\r\n.loader-6 span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.loader-6 span::before,\r\n.loader-6 span::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  border: 2px solid var(--eletric-purple);\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  -webkit-animation: loader-6-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3;\r\n  animation: loader-6-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3;\r\n}\r\n\r\n@-webkit-keyframes loader-6-1 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-1 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.loader-6 span::after {\r\n  -webkit-animation: loader-6-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n  animation: loader-6-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n}\r\n\r\n@-webkit-keyframes loader-6-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes loader-6-3 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-3 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 20vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 24vw;\r\n\t\twidth: 24vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 24vw;\r\n\t\twidth: 24vw;\r\n\t}\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 16vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 20vw;\r\n\t\twidth: 20vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 20vw;\r\n\t\twidth: 20vw;\r\n\t}\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 10vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 14vw;\r\n\t\twidth: 14vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 14vw;\r\n\t\twidth: 14vw;\r\n\t}\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 6vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 6vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhZ2VtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4RUFBc0U7VUFBdEUsc0VBQXNFO0NBQ3ZFLFVBQVU7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdFQUF3RTtFQUN4RSxnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7RUFDQTtJQUNFLDBDQUEwQztJQUMxQyxVQUFVO0VBQ1o7QUFDRjs7QUFUQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMENBQTBDO0lBQzFDLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0UsOEVBQThFO0VBQzlFLHNFQUFzRTtBQUN4RTs7QUFDQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtBQUNGOztBQVRBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7Q0FFQTs7RUFFQyxZQUFZO0VBQ1osV0FBVztDQUNaO0FBQ0Q7O0FBRUEsb0VBQW9FOztBQUNwRTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7O0VBRUMsWUFBWTtFQUNaLFdBQVc7Q0FDWjtBQUNEOztBQUVBLHFEQUFxRDs7QUFDckQ7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRDs7QUFFQSxtREFBbUQ7O0FBQ25EO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRDs7QUFFQSxvRUFBb0U7O0FBQ3BFO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRCIsImZpbGUiOiJjb250YWdlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci02IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmxvYWRlci02IHAge1xyXG4gIGFuaW1hdGlvbjogbG9hZGVyLTYtMyAxLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDAuMjVzIDM7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmxvYWRlci02IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcbi5sb2FkZXItNiBzcGFuOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZWxldHJpYy1wdXJwbGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItNi0xIDEuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMztcclxuICBhbmltYXRpb246IGxvYWRlci02LTEgMS41cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAzO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGVyLTYtMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyLTYtMiAxLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDAuMjVzIDM7XHJcbiAgYW5pbWF0aW9uOiBsb2FkZXItNi0yIDEuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMC4yNXMgMztcclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlci02LTIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlci02LTMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHQubG9hZGVyLTYgcCB7XHJcblx0XHRmb250LXNpemU6IDIwdnc7XHJcblx0fVxyXG5cdFxyXG5cdC5sb2FkZXItNiBzcGFuIHtcclxuXHRcdGhlaWdodDogMjR2dztcclxuXHRcdHdpZHRoOiAyNHZ3O1xyXG5cdH1cclxuXHJcblx0LmxvYWRlci02IHNwYW46OmJlZm9yZSxcclxuXHQubG9hZGVyLTYgc3Bhbjo6YWZ0ZXIge1xyXG5cdFx0aGVpZ2h0OiAyNHZ3O1xyXG5cdFx0d2lkdGg6IDI0dnc7XHJcblx0fVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmxvYWRlci02IHAge1xyXG5cdFx0Zm9udC1zaXplOiAxNnZ3O1xyXG5cdH1cclxuXHRcclxuXHQubG9hZGVyLTYgc3BhbiB7XHJcblx0XHRoZWlnaHQ6IDIwdnc7XHJcblx0XHR3aWR0aDogMjB2dztcclxuXHR9XHJcblxyXG5cdC5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcblx0LmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuXHRcdGhlaWdodDogMjB2dztcclxuXHRcdHdpZHRoOiAyMHZ3O1xyXG5cdH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cdC5sb2FkZXItNiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMTB2dztcclxuXHR9XHJcblx0XHJcblx0LmxvYWRlci02IHNwYW4ge1xyXG5cdFx0aGVpZ2h0OiAxNHZ3O1xyXG5cdFx0d2lkdGg6IDE0dnc7XHJcblx0fVxyXG5cclxuXHQubG9hZGVyLTYgc3Bhbjo6YmVmb3JlLFxyXG5cdC5sb2FkZXItNiBzcGFuOjphZnRlciB7XHJcblx0XHRoZWlnaHQ6IDE0dnc7XHJcblx0XHR3aWR0aDogMTR2dztcclxuXHR9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cdC5sb2FkZXItNiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogNnZ3O1xyXG5cdH1cclxuXHRcclxuXHQubG9hZGVyLTYgc3BhbiB7XHJcblx0XHRoZWlnaHQ6IDEwdnc7XHJcblx0XHR3aWR0aDogMTB2dztcclxuXHR9XHJcblxyXG5cdC5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcblx0LmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuXHRcdGhlaWdodDogMTB2dztcclxuXHRcdHdpZHRoOiAxMHZ3O1xyXG5cdH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblx0LmxvYWRlci02IHAge1xyXG5cdFx0Zm9udC1zaXplOiA2dnc7XHJcblx0fVxyXG5cdFxyXG5cdC5sb2FkZXItNiBzcGFuIHtcclxuXHRcdGhlaWdodDogMTB2dztcclxuXHRcdHdpZHRoOiAxMHZ3O1xyXG5cdH1cclxuXHJcblx0LmxvYWRlci02IHNwYW46OmJlZm9yZSxcclxuXHQubG9hZGVyLTYgc3Bhbjo6YWZ0ZXIge1xyXG5cdFx0aGVpZ2h0OiAxMHZ3O1xyXG5cdFx0d2lkdGg6IDEwdnc7XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ "43GX":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/botao/botao.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\r\n  #b\r\n    [ngClass]=\"cor\"\r\n    [style.display]=\"displayBotao\"\r\n    (click)=\"inverter(); this.clique.emit({'key': key, 'id': id, 'idProfissao':idProfissao, 'tipo': tipo, 'texto': texto})\"\r\n  >\r\n    {{texto}}\r\n</button>\r\n\r\n<select\r\n    [ngClass]=\"cor\"\r\n    [style.display]=\"displayLista\"\r\n    #l\r\n    (change)=\"this.clique.emit({'key': key, 'id': id, 'idProfissao':idProfissao, 'tipo': tipo, 'texto': l.value})\"\r\n  >\r\n    <option value=\"\" selected hidden disabled>{{texto}}</option>\r\n    <option *ngFor=\"let l of lista\" [value]=\"l\">{{l}}</option>\r\n  </select>");

/***/ }),

/***/ "58W+":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/central.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"amigos\">\r\n  <div class=\"amigo\" *ngFor=\"let l of listaProfissoesSorteadas | async\">\r\n    <div class=\"fundo-profissao\">\r\n      <div\r\n        class=\"img-profissao\"\r\n        style.background-image=\"url({{ baseUrl }}profissionais/{{ l.imagem }})\"\r\n      ></div>\r\n    </div>\r\n    <div class=\"info-amigo\">\r\n      <p class=\"nick\">\r\n        {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n          l.profissao\r\n        }}</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"central\">\r\n  <div *ngIf=\"statusSala === 'espera' && flagRelatorio === false\" [@fade]>\r\n    <sala\r\n      [keySala]=\"keySala\"\r\n      [(keyProfissaoSorteada)]=\"keyProfissaoSorteada\"\r\n      [(profissaoSorteada)]=\"profissaoSorteada\"\r\n      [nickJogador]=\"nickJogador\"\r\n      [listaProfissoesSorteadas]=\"listaProfissoesSorteadas\"\r\n      [numRodada]=\"numRodada\"\r\n      [vidas]=\"vidas\"\r\n      [privacidade]=\"privacidade\"\r\n      [visibilidadeURL]=\"visibilidadeURL\"\r\n      [lider]=\"lider\"\r\n    >\r\n    </sala>\r\n  </div>\r\n  <div *ngIf=\"statusSala === 'jogo'\" [@fade]>\r\n    <painel\r\n      [keySala]=\"keySala\"\r\n      [keyJogador]=\"keyJogador\"\r\n      [vidas]=\"vidas\"\r\n      [keyProfissaoSorteada]=\"keyProfissaoSorteada\"\r\n      [profissaoSorteada]=\"profissaoSorteada\"\r\n      [tempoMonitor]=\"tempoMonitor\"\r\n      [numTarefasNecessarias]=\"numTarefasNecessarias\"\r\n      [numRodada]=\"numRodada\"\r\n      [(flagRelatorio)]=\"flagRelatorio\"\r\n      [(dica)]=\"dica\"\r\n    >\r\n    </painel>\r\n  </div>\r\n  <div *ngIf=\"statusSala === 'contagem'\" [@fade]><contagem [keySala]=\"keySala\"></contagem></div>\r\n  <div *ngIf=\"statusSala === 'espera' && flagRelatorio === true\" [@fade]>\r\n    <relatorio\r\n      [keySala]=\"keySala\"\r\n      [vidas]=\"vidas\"\r\n      [numRodada]=\"numRodada\"\r\n      [keyProfissaoSorteada]=\"keyProfissaoSorteada\"\r\n      [listaProfissoesSorteadas]=\"listaProfissoesSorteadas\"\r\n      [(relatorioPartida)]=\"relatorioPartida\"\r\n      [(flagRelatorio)]=\"flagRelatorio\"\r\n    ></relatorio>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "5ZiT":
/*!*********************************************!*\
  !*** ./src/app/tarefa/tarefa.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tarefa {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--box-bg);\r\n  border: 1px solid var(--box-border);\r\n  box-sizing: border-box;\r\n}\r\n\r\n.verde {\r\n  -webkit-animation-name: correto;\r\n          animation-name: correto;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.vermelho {\r\n  -webkit-animation-name: errado;\r\n          animation-name: errado;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.frase {\r\n  width: 100%;\r\n  height: 35%;\r\n  margin-top: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.botao {\r\n  width: 90%;\r\n  height: 40%;\r\n  margin-left: 5%;\r\n}\r\n\r\n@-webkit-keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .frase {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .frase {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmVmYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLHVDQUErQjtVQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UscURBQXFEO0lBQ3JELHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UscURBQXFEO0lBQ3JELHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtJQUMvQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtJQUMvQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InRhcmVmYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmVmYSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnZlcmRlIHtcclxuICBhbmltYXRpb24tbmFtZTogY29ycmV0bztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG4udmVybWVsaG8ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBlcnJhZG87XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG5cclxuLmZyYXNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm90YW8ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvcnJldG8ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbWVkaXVtLXNlYS1ncmVlbikgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bS1zZWEtZ3JlZW4pO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGVycmFkbyB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10YXJ0LW9yYW5nZSkgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZnJhc2Uge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmZyYXNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "7YQl":
/*!*******************************************!*\
  !*** ./src/app/botao/botao.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button,\r\nselect {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  margin-bottom: 6px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n  transition: all 0.05s;\r\n  font-size: inherit;\r\n  -webkit-tap-highlight-color: transparent;\r\n  display: none;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\nbutton:active,\r\nselect:active {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\nselect {\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  text-align: -webkit-center;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23186a94' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: 95% center;\r\n}\r\n\r\noption {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 0.8em;\r\n  background-color: var(--monitor-bg);\r\n  color: var(--semi-white);\r\n  font-family: 'Roboto Mono';\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.azul {\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.azul:active {\r\n  box-shadow: 0px 2px var(--saphire-blue);\r\n}\r\n\r\n.verde {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.verde:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.vermelho {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.vermelho:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n.branco {\r\n  background-color: var(--cultured);\r\n  color: var(--saphire-blue);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n}\r\n\r\n.branco:active {\r\n  box-shadow: 0px 2px var(--silver-chalice);\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  button,\r\n  select {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  button,\r\n  select {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  button,\r\n  select {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  button,\r\n  select {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  button,\r\n  select {\r\n    font-size: 26px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdGFvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMFRBQTBUO0VBQzFULDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx3QkFBZ0I7S0FBaEIscUJBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoiYm90YW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbixcclxuc2VsZWN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSxcclxuc2VsZWN0OmFjdGl2ZSB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgZmlsbD0nJTIzMTg2YTk0JyBjbGFzcz0nYmkgYmktY2FyZXQtZG93bi1maWxsJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNNy4yNDcgMTEuMTQgMi40NTEgNS42NThDMS44ODUgNS4wMTMgMi4zNDUgNCAzLjIwNCA0aDkuNTkyYTEgMSAwIDAgMSAuNzUzIDEuNjU5bC00Ljc5NiA1LjQ4YTEgMSAwIDAgMS0xLjUwNiAweicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSBjZW50ZXI7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1zZW1pLXdoaXRlKTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLmF6dWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zYXBoaXJlLWJsdWUpO1xyXG59XHJcblxyXG4uYXp1bDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLnZlcmRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLnZlcmRlOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1zZWEtZ3JlZW4pO1xyXG59XHJcblxyXG4udmVybWVsaG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tZmlyZWJyaWNrKTtcclxufVxyXG5cclxuLnZlcm1lbGhvOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4uYnJhbmNvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XHJcbiAgY29sb3I6IHZhcigtLXNhcGhpcmUtYmx1ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zaWx2ZXItY2hhbGljZSk7XHJcbn1cclxuXHJcbi5icmFuY286YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgYnV0dG9uLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "9ixo":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.component.html */ "fx4J");
/* harmony import */ var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component.css */ "Ll4m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");






let InicioComponent = class InicioComponent {
    constructor(taskForceService, router) {
        this.taskForceService = taskForceService;
        this.router = router;
        this.keySalaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nickJogadorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.mensagem = '';
        this.numCarrossel = 4;
        this.carrossel = [
            {
                imagem: 'tutorial-0.png',
                texto: 'Chama a galera para um chat de voz (sugestão de 4 a 10 pessoas)',
            },
            {
                imagem: 'tutorial-1.png',
                texto: 'Veja qual profissão foi sorteada para você e para seus amigos',
            },
            {
                imagem: 'tutorial-2.png',
                texto: 'Fique atento à tarefa exibida no monitor e informe as tarefas que não são suas',
            },
            {
                imagem: 'tutorial-3.png',
                texto: 'Execute as tarefas que estão na sua responsabilidade',
            },
            {
                imagem: 'tutorial-4.png',
                texto: 'Cuidado, cada falha significa vida a menos. Sobreviva o maior número de rodadas que conseguir',
            },
        ];
        this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
        this.router.events.subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RoutesRecognized"]) {
                try {
                    this.keySala = val.state.root.firstChild.params['keySala'];
                    if (!(yield this.taskForceService.checarExistenciaSala(this.keySala))) {
                        this.keySala = null;
                        this.router.navigate(['/']);
                    }
                }
                catch (e) { }
            }
        }));
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let img = [
                '001-farmer.svg',
                '002-artist.svg',
                '003-captain.svg',
                '004-nurse.svg',
                '005-clown.svg',
                '006-doctor.svg',
                '007-detective.svg',
                '008-maid.svg',
                '009-student.svg',
                '010-mechanic.svg',
                '011-judge.svg',
                '012-wrestling.svg',
                '013-mafia.svg',
                '014-military.svg',
                '015-diver.svg',
                '016-taxi-driver.svg',
                '017-surgeon.svg',
                '018-thief.svg',
                '019-hacker.svg',
                '020-web.svg',
                '021-lumberjack.svg',
                '022-basketball-player.svg',
                '023-athlete.svg',
                '024-postman.svg',
                '025-priest.svg',
                '026-hunter.svg',
                '027-sailor.svg',
                '028-welder.svg',
                '029-nun.svg',
                '030-soldier.svg',
                '031-air-hostess.svg',
                '032-guide.svg',
                '033-courier.svg',
                '034-racer.svg',
                '035-astronaut.svg',
                '036-butler.svg',
                '037-engineer.svg',
                '038-cooker.svg',
                '039-chef.svg',
                '040-waiter.svg',
                '041-photographer.svg',
                '042-singer.svg',
                '043-teacher.svg',
                '044-scientist.svg',
                '045-police.svg',
                '046-telemarketer.svg',
                '047-secretary.svg',
                '048-office-worker.svg',
                '049-firefighter.svg',
                '050-pilot.svg',
            ];
            this.nickJogador = '';
            this.imagemBox = img[Math.floor(Math.random() * img.length)];
            setInterval(() => {
                this.imagemBox = img[Math.floor(Math.random() * img.length)];
            }, 4000);
            this.acessarCarrossel(0);
        });
    }
    acessarCarrossel(num) {
        clearInterval(this.intervaloCarrossel);
        this.numCarrossel = num;
        this.intervaloCarrossel = setInterval(() => {
            this.numCarrossel = num++ % 5;
        }, 5000);
    }
    onKey(event) {
        this.nickJogador = event.target.value;
        this.mensagem = '';
    }
    criarSala() {
        if (this.nickJogador === '') {
            this.mensagem = 'O nick não pode estar vazio';
            return;
        }
        this.keySala = this.taskForceService.criarSala();
        this.entrarSala();
    }
    entrarSala() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mensagem = '';
            if (this.nickJogador === '') {
                this.mensagem = 'O nick não pode estar vazio';
                return;
            }
            if (!(yield this.taskForceService.checarExistenciaSala(this.keySala))) {
                this.mensagem = 'Esta sala não existe mais';
                return;
            }
            if (!(yield this.taskForceService.checarPrivacidadeSala(this.keySala))) {
                this.mensagem = 'A sala está trancada';
                return;
            }
            if (!(yield this.taskForceService.checarStatusSala(this.keySala))) {
                this.mensagem = 'A sala em partida, aguarde';
                return;
            }
            if (!(yield this.taskForceService.checarNick(this.keySala, this.nickJogador))) {
                this.mensagem = 'O nick já está em uso';
                return;
            }
            this.keySalaChange.emit(this.keySala);
            this.nickJogadorChange.emit(this.nickJogador);
            this.router.navigate(['/' + this.keySala]);
        });
    }
};
InicioComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_5__["TaskforceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InicioComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keySalaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nickJogador: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nickJogadorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'inicio',
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jogo {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inicio {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  box-sizing: border-box;\r\n  padding: 1%;\r\n}\r\n\r\n.central {\r\n  height: 100%;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .jogo {\r\n    padding: 5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .jogo {\r\n    padding: 5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .jogo {\r\n    padding: 5%;\r\n    padding-top: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUEsaURBQWlEOztBQUNqRDtBQUNBOztBQUVBLG9FQUFvRTs7QUFDcEU7QUFDQTs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5pbmljaW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmNlbnRyYWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuam9nbyB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5qb2dvIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmpvZ28ge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMi41JTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAGJgSHsEC72mz4mR9KKgFRdO16T9bS9bY',
        authDomain: 'taskforce-384fa.firebaseapp.com',
        databaseURL: 'https://taskforce-384fa-default-rtdb.firebaseio.com',
        projectId: 'taskforce-384fa',
        storageBucket: 'taskforce-384fa.appspot.com',
        messagingSenderId: '626310038273',
        appId: '1:626310038273:web:ef5825e7f58f740a5d9100',
        measurementId: 'G-CPWCCRF4JQ'
    }
};


/***/ }),

/***/ "CwaN":
/*!************************************************!*\
  !*** ./src/app/contagem/contagem.component.ts ***!
  \************************************************/
/*! exports provided: ContagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContagemComponent", function() { return ContagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contagem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contagem.component.html */ "R44c");
/* harmony import */ var _contagem_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contagem.component.css */ "2RpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");





let ContagemComponent = class ContagemComponent {
    constructor(taskForceService) {
        this.taskForceService = taskForceService;
        this.numero = 3;
    }
    ngOnInit() {
        this.contagem = setInterval(() => {
            this.numero--;
            if (this.numero <= 0) {
                this.taskForceService.setStatusSala(this.keySala, 'jogo');
                this.numero = 0;
            }
        }, 1600);
    }
    ngOnDestroy() {
        clearInterval(this.contagem);
    }
};
ContagemComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_4__["TaskforceService"] }
];
ContagemComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContagemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'contagem',
        template: _raw_loader_contagem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contagem_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContagemComponent);



/***/ }),

/***/ "DwX5":
/*!****************************************!*\
  !*** ./src/app/sala/sala.component.ts ***!
  \****************************************/
/*! exports provided: SalaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaComponent", function() { return SalaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sala_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sala.component.html */ "j6NB");
/* harmony import */ var _sala_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sala.component.css */ "EeW4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");








let SalaComponent = class SalaComponent {
    constructor(taskForceService, router) {
        this.taskForceService = taskForceService;
        this.router = router;
        this.keyProfissaoSorteadaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.profissaoSorteadaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.textoConvite = 'Convidar';
        this.keyProfissaoSorteadaAnterior = '';
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.desabilitado = true;
            this.taskForceService.limparRegistros(this.keySala);
            yield this.sortearProfissao();
            this.profissaoSorteadaChange.emit(this.profissaoSorteada);
            this.keyProfissaoSorteadaChange.emit(this.keyProfissaoSorteada);
            yield this.removerProfissao();
            this.pronto = false;
            setTimeout(() => {
                this.desabilitado = false;
            }, 1000);
            this.listaProfissoesSorteadas
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
                .subscribe((lista) => {
                let total = lista.length;
                let prontos = 0;
                lista.forEach((l) => {
                    if (l.pronto) {
                        prontos++;
                    }
                });
                if (prontos === total && prontos > 0) {
                    this.taskForceService.setStatusSala(this.keySala, 'contagem');
                }
            });
        });
    }
    sortearProfissao() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.keyProfissaoSorteadaAnterior = this.keyProfissaoSorteada;
            this.keyProfissaoSorteada = yield this.taskForceService.sortearProfissao(this.keySala, this.nickJogador, this.numRodada);
            this.profissaoSorteada = yield this.taskForceService.getProfissao(this.keySala, this.keyProfissaoSorteada);
        });
    }
    removerProfissao() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.taskForceService.removerProfissao(this.keySala, this.keyProfissaoSorteadaAnterior);
        });
    }
    alterarVisibilidadeURL() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.visibilidadeURL = !this.visibilidadeURL;
            yield this.taskForceService.alterarVisibilidadeURL(this.keySala, this.visibilidadeURL);
        });
    }
    alterarPrivacidade() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.privacidade = !this.privacidade;
            yield this.taskForceService.alterarPrivacidade(this.keySala, this.privacidade);
        });
    }
    convidar() {
        let url = window.location.href;
        if (url.substring(url.length - 5) !== this.keySala) {
            url += this.keySala;
        }
        navigator.clipboard.writeText(url);
        this.textoConvite = 'Link copiado!';
        setTimeout(() => {
            this.textoConvite = 'Convidar';
        }, 3000);
    }
    kickar(keyProfissao) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.taskForceService.removerProfissao(this.keySala, keyProfissao);
        });
    }
    ficarPronto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pronto = !this.pronto;
            yield this.taskForceService.ficarPronto(this.keySala, this.keyProfissaoSorteada, this.pronto);
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
SalaComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_7__["TaskforceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SalaComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keyProfissaoSorteada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keyProfissaoSorteadaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    profissaoSorteada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    profissaoSorteadaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nickJogador: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    numRodada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vidas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listaProfissoesSorteadas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    visibilidadeURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    privacidade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SalaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sala',
        template: _raw_loader_sala_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalaComponent);



/***/ }),

/***/ "Dxcq":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quadro/quadro.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"quadro\">\r\n  <div class=\"tarefa\" *ngFor=\"let t of tarefasArray\">\r\n    <tarefa\r\n      [key]=\"t.key\"\r\n      [id]=\"t.id\"\r\n      [idProfissao]=\"idProfissao\"\r\n      [tipo]=\"t.tipo\"\r\n      [frase]=\"t.complemento\"\r\n      [texto]=\"t.verbo\"\r\n      [estado]=\"t.estado\"\r\n      [lista]=\"t.lista\"\r\n      [registro]=\"registro\"\r\n      [corTarefa]=\"corTarefa\"\r\n      [idTarefaRecente]=\"idTarefaRecente\"\r\n      (tarefaExecutada)=\"tarefaExecutada($event)\"\r\n    ></tarefa>\r\n  </div>\r\n  <div\r\n    class=\"vazio\"\r\n    *ngFor=\"let item of [].constructor(maxNumTarefas - tarefasArray.length)\"\r\n  ></div>\r\n  <div class=\"dica\" [style.display]=\"dicaQuadro ? 'grid' : 'none'\">\r\n    Clique no botão para executar a tarefa, <br class=\"quebra-linha\">mas cuidado, tarefas erradas custam\r\n    1 vida\r\n    <div class=\"fechar\" (click)=\"fechar()\">x</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "EeW4":
/*!*****************************************!*\
  !*** ./src/app/sala/sala.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sala {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  float: left;\r\n}\r\n\r\n.fundo-profissao {\r\n  background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n\r\n  float: left;\r\n}\r\n\r\n.profissao-jogador {\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  padding: 1.25%;\r\n  box-sizing: border-box;\r\n  border: 2px solid var(--box-border);\r\n  border-left: 5px solid var(--cultured);\r\n}\r\n\r\n.cabecalho {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.img-coracao {\r\n  position: absolute;\r\n\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/heart.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  right: 0;\r\n}\r\n\r\n.img-coracao:after {\r\n  content: '';\r\n  display: block;\r\n  padding-bottom: 100%;\r\n}\r\n\r\n.img-coroa {\r\n  position: absolute;\r\n\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/crown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  left: 0;\r\n}\r\n\r\n.img-coroa:after {\r\n  content: '';\r\n  display: block;\r\n  padding-bottom: 100%;\r\n}\r\n\r\n.num-vidas {\r\n  width: 100%;\r\n  height: 100%;\r\n  float: right;\r\n  position: absolute;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  color: var(--white);\r\n  font-weight: bold;\r\n}\r\n\r\n.rodada {\r\n  width: 100%;\r\n}\r\n\r\n.rodada p {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.img-jogador {\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/profissionais/000-unknown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.info {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.info p {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n\r\n  padding: 2.5% 0%;\r\n}\r\n\r\n.info span {\r\n  font-weight: bold;\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.configuracoes {\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  padding: 1.25%;\r\n  box-sizing: border-box;\r\n  border: 2px solid var(--box-border);\r\n  overflow: auto;\r\n}\r\n\r\n.titulo-config {\r\n  width: 100%;\r\n  height: 25%;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  border-bottom: 1px solid var(--box-border);\r\n  font-weight: bold;\r\n}\r\n\r\n.item-config {\r\n  width: 100%;\r\n  height: 35%;\r\n  border-bottom: 1px solid var(--box-border);\r\n}\r\n\r\n.texto-item-config {\r\n  width: 60%;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  float: left;\r\n}\r\n\r\n.acao-item-config {\r\n  width: 40%;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  float: left;\r\n}\r\n\r\n.acao-item-config button {\r\n  height: 60%;\r\n  width: 80%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.acao-item-config button:disabled,\r\n.acao-item-config button[disabled] {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.url-visivel::before {\r\n  content: 'Visível';\r\n}\r\n\r\n.url-oculto::before {\r\n  content: 'Oculto';\r\n}\r\n\r\n.privacidade-aberta::before {\r\n  content: 'Aberta';\r\n}\r\n\r\n.privacidade-fechada::before {\r\n  content: 'Fechada';\r\n}\r\n\r\n.amigos {\r\n  float: left;\r\n  overflow-y: auto;\r\n}\r\n\r\n.profissao-amigo {\r\n  position: relative;\r\n  float: left;\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  box-sizing: border-box;\r\n  padding: 1%;\r\n  border: 2px solid var(--box-border);\r\n  border-left: 5px solid var(--cultured);\r\n}\r\n\r\n.lista-acoes {\r\n  position: absolute;\r\n  top: 2.5%;\r\n  right: 2.5%;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-coroa-2 {\r\n  position: absolute;\r\n  top: 2.5%;\r\n  right: 2.5%;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/crown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.dropdown {\r\n  position: absolute;\r\n  right: 0;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  padding: 50% 100%;\r\n\r\n  outline: none;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  max-height: 0;\r\n  transition: opacity 0.1s, z-index 0.1s, max-height 5s;\r\n}\r\n\r\n.kick:hover {\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.lista-acoes:focus .dropdown {\r\n  opacity: 1;\r\n  z-index: 100;\r\n  max-height: 100vh;\r\n  transition: opacity 0.2s, z-index 0.2s, max-height 0.2s;\r\n}\r\n\r\n.img-amigo {\r\n  float: left;\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/profissionais/000-unknown.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n.info-amigo {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  float: left;\r\n}\r\n\r\n.info-amigo p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.info-amigo span {\r\n  color: var(--blue-jeans);\r\n  font-weight: bold;\r\n  overflow: auto;\r\n}\r\n\r\n.acoes {\r\n  float: left;\r\n}\r\n\r\n.acao {\r\n  float: left;\r\n}\r\n\r\n.kickar {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.kickar:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n.convidar {\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.convidar:active {\r\n  box-shadow: 0px 2px var(--black-fogra);\r\n}\r\n\r\n.pronto::before {\r\n  content: 'Pronto';\r\n}\r\n\r\n.cancelar::before {\r\n  content: 'Cancelar';\r\n}\r\n\r\n.btn-verde {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.btn-verde:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.btn-vermelho {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.btn-vermelho:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .container {\r\n    height: 40%;\r\n    width: 100%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    display: none;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    width: 97.5%;\r\n    height: 95%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 7.5%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .info {\r\n    height: 12.5%;\r\n    margin-top: 2%;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .info p {\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .amigos {\r\n    width: 100%;\r\n    height: 47.5%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 33%;\r\n    width: 97.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .acoes {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin: 0;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .container {\r\n    height: 40%;\r\n    width: 100%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    display: none;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    width: 97.5%;\r\n    height: 95%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 6.25%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 5.5vw;\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .info {\r\n    height: 12.5%;\r\n    margin-top: 2%;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .info p {\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .amigos {\r\n    width: 100%;\r\n    height: 47.5%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 33%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .acoes {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin: 0;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 10%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 7.5%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 3.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 60%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 25%;\r\n    margin-top: 2.5%;\r\n    font-size: 3vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 97.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 2.75vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 8.75%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 10%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 2.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 60%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 25%;\r\n    margin-top: 2.5%;\r\n    font-size: 2.5vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 47.5%;\r\n    margin: 0% 1.25% 2.5% 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 100%;\r\n    height: 70%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 1.2vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 1.2vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 8.75%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 2.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 30%;\r\n    margin-top: 2.5%;\r\n    font-size: 2.5vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 47.5%;\r\n    margin: 0% 1.25% 2.5% 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 100%;\r\n    height: 70%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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LFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzYWxhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvZmlzc2FvLWpvZ2Fkb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDEuMjUlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1jdWx0dXJlZCk7XHJcbn1cclxuXHJcbi5jYWJlY2FsaG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZy1jb3JhY2FvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW1nLWNvcmFjYW86YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLWNvcm9hIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvY3Jvd24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pbWctY29yb2E6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4ubnVtLXZpZGFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucm9kYWRhIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvZGFkYSBwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctam9nYWRvciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmFiaW9jb25lam8vdGFza2ZvcmNlL21hc3Rlci9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maXNzaW9uYWlzLzAwMC11bmtub3duLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgcGFkZGluZzogMi41JSAwJTtcclxufVxyXG5cclxuLmluZm8gc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG59XHJcblxyXG4uY29uZmlndXJhY29lcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgcGFkZGluZzogMS4yNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpdHVsby1jb25maWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbS1jb25maWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxufVxyXG5cclxuLnRleHRvLWl0ZW0tY29uZmlnIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY2FvLWl0ZW0tY29uZmlnIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uYWNhby1pdGVtLWNvbmZpZyBidXR0b246ZGlzYWJsZWQsXHJcbi5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjb2xvcjogdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnVybC12aXNpdmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdWaXPDrXZlbCc7XHJcbn1cclxuXHJcbi51cmwtb2N1bHRvOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdPY3VsdG8nO1xyXG59XHJcblxyXG4ucHJpdmFjaWRhZGUtYWJlcnRhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdBYmVydGEnO1xyXG59XHJcblxyXG4ucHJpdmFjaWRhZGUtZmVjaGFkYTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnRmVjaGFkYSc7XHJcbn1cclxuXHJcbi5hbWlnb3Mge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9maXNzYW8tYW1pZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtYmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tY3VsdHVyZWQpO1xyXG59XHJcblxyXG4ubGlzdGEtYWNvZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIuNSU7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLWNvcm9hLTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIuNSU7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvY3Jvd24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNTAlIDEwMCU7XHJcblxyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcywgei1pbmRleCAwLjFzLCBtYXgtaGVpZ2h0IDVzO1xyXG59XHJcblxyXG4ua2ljazpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxufVxyXG5cclxuLmxpc3RhLWFjb2VzOmZvY3VzIC5kcm9wZG93biB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB6LWluZGV4IDAuMnMsIG1heC1oZWlnaHQgMC4ycztcclxufVxyXG5cclxuLmltZy1hbWlnbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmFiaW9jb25lam8vdGFza2ZvcmNlL21hc3Rlci9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maXNzaW9uYWlzLzAwMC11bmtub3duLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmluZm8tYW1pZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbmZvLWFtaWdvIHAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmluZm8tYW1pZ28gc3BhbiB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYWNvZXMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWNhbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5raWNrYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tZmlyZWJyaWNrKTtcclxufVxyXG5cclxuLmtpY2thcjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tZmlyZWJyaWNrKTtcclxufVxyXG5cclxuLmNvbnZpZGFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLmNvbnZpZGFyOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1ibGFjay1mb2dyYSk7XHJcbn1cclxuXHJcbi5wcm9udG86OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1Byb250byc7XHJcbn1cclxuXHJcbi5jYW5jZWxhcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnQ2FuY2VsYXInO1xyXG59XHJcblxyXG4uYnRuLXZlcmRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLmJ0bi12ZXJkZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLmJ0bi12ZXJtZWxobyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4uYnRuLXZlcm1lbGhvOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMS41JTtcclxuICB9XHJcblxyXG4gIC5jb25maWd1cmFjb2VzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWpvZ2Fkb3Ige1xyXG4gICAgd2lkdGg6IDk3LjUlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDcuNSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHtcclxuICAgIGhlaWdodDogMTIuNSU7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHAge1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgfVxyXG5cclxuICAuZnVuZG8tcHJvZmlzc2FvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICB9XHJcblxyXG4gIC5pbmZvIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxuICAuYW1pZ29zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0Ny41JTtcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tYW1pZ28ge1xyXG4gICAgaGVpZ2h0OiAzMyU7XHJcbiAgICB3aWR0aDogOTcuNSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1hbWlnbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYW1pZ28ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjb2VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFjYW8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ3LjUlO1xyXG4gICAgbWFyZ2luOiAxLjI1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpZ3VyYWNvZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICB3aWR0aDogOTcuNSU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG1hcmdpbjogMS4yNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvcmFjYW8sXHJcbiAgLmltZy1jb3JvYSB7XHJcbiAgICB3aWR0aDogNi4yNSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogNS41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcblxyXG4gIC5mdW5kby1wcm9maXNzYW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWpvZ2Fkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIGhlaWdodDogMTIuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ3LjUlO1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1hbWlnbyB7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxuICAgIG1hcmdpbjogMS4yNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWFtaWdvIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW5mby1hbWlnbyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG5cclxuICAuYWNvZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcuNSU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDcuNSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zYWxhIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgfVxyXG5cclxuICAuY29uZmlndXJhY29lcyB7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsby1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcblxyXG4gIC5pdGVtLWNvbmZpZyB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcblxyXG4gIC5udW0tdmlkYXMge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5yb2RhZGEge1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5yb2RhZGEgcCB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5mdW5kby1wcm9maXNzYW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBsaW5lLWhlaWdodDogMC42O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWFtaWdvIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDk3LjUlO1xyXG4gICAgbWFyZ2luOiAxLjI1JTtcclxuICB9XHJcblxyXG4gIC5pbWctYW1pZ28ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFtaWdvIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIuNzV2dztcclxuICB9XHJcblxyXG4gIC5hY29lcyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuc2FsYSB7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA0OCU7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpZ3VyYWNvZXMge1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8tY29uZmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY29uZmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAuYWNhby1pdGVtLWNvbmZpZyBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDguNzUlO1xyXG4gIH1cclxuXHJcbiAgLm51bS12aWRhcyB7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxuICB9XHJcblxyXG4gIC5yb2RhZGEge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHAge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuZnVuZG8tcHJvZmlzc2FvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjY7XHJcbiAgfVxyXG5cclxuICAuaW5mbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWFtaWdvIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDQ3LjUlO1xyXG4gICAgbWFyZ2luOiAwJSAxLjI1JSAyLjUlIDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1hbWlnbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYW1pZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjb2VzIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5hY2FvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5zYWxhIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgfVxyXG5cclxuICAuY29uZmlndXJhY29lcyB7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsby1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1qb2dhZG9yIHtcclxuICAgIGhlaWdodDogNTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvcmFjYW8sXHJcbiAgLmltZy1jb3JvYSB7XHJcbiAgICB3aWR0aDogOC43NSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbWctam9nYWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTUlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMC42O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1hbWlnbyB7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxuICAgIG1hcmdpbjogMCUgMS4yNSUgMi41JSAxLjI1JTtcclxuICB9XHJcblxyXG4gIC5pbWctYW1pZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFtaWdvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICB9XHJcblxyXG4gIC5hY29lcyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "HsPz":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/monitor/monitor.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"monitor\" [ngClass]=\"corMonitor\">\r\n  <div class=\"dica\" [style.display]=\"dicaMonitor ? 'grid' : 'none'\">\r\n    Execute a tarefa ou informe-a para seus <br class=\"quebra-linha\">amigos para que eles possam\r\n    executá-la\r\n    <div class=\"fechar\" (click)=\"fechar()\">x</div>\r\n  </div>\r\n  <div class=\"letreiro\">\r\n    <p\r\n      [style.display]=\"pausa ? 'none' : 'flex'\"\r\n      style.animation-duration=\"{{ tempo }}s\"\r\n    >\r\n      {{ texto + blinkText }} \r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"tempo\" [style.display]=\"pausa ? 'none' : 'block'\">\r\n    <div class=\"tempo-decorrido\" style.animation-duration=\"{{ tempo }}s\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "IH1k":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_painel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./painel.component.html */ "MNJw");
/* harmony import */ var _painel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel.component.css */ "tB4E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");







let PainelComponent = class PainelComponent {
    constructor(taskForceService) {
        this.taskForceService = taskForceService;
        this.flagRelatorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.registro = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.flagRelatorio = true;
            this.flagRelatorioChange.emit(this.flagRelatorio);
            yield this.atualizarTarefa();
            let rodada = this.numRodada;
            this.taskForceService
                .getRegistros(this.keySala)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
                .subscribe((registros) => {
                let concluidos = 0;
                registros.forEach((r) => {
                    if (r.concluido) {
                        concluidos++;
                    }
                });
                if (concluidos >= this.numTarefasNecessarias) {
                    this.taskForceService.adicionarRodada(this.keySala, rodada);
                    setTimeout(() => {
                        this.taskForceService.setStatusSala(this.keySala, 'espera');
                    }, 500);
                }
            });
        });
    }
    atualizarTarefa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pausa = true;
            this.keyProfissaoMonitor =
                yield this.taskForceService.sortearProfissaoMonitor(this.keySala);
            this.keyTarefaSorteada = yield this.taskForceService.sortearTarefa(this.keySala, this.keyProfissaoMonitor);
            this.tarefaSorteada = yield this.taskForceService.getTarefa(this.keySala, this.keyProfissaoMonitor, this.keyTarefaSorteada);
            this.tarefaSorteada = this.taskForceService.sortearItem(this.tarefaSorteada);
            this.keyRegistro = yield this.taskForceService.adicionarRegistro(this.keySala, this.keyProfissaoMonitor, this.keyTarefaSorteada, this.tarefaSorteada.verbo);
            this.exibirTarefa();
            setTimeout(() => {
                this.pausa = false;
            }, 100);
            this.taskForceService
                .getRegistro(this.keySala, this.keyRegistro)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])((r) => {
                return !r['concluido'];
            }, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(this.tempoMonitor * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.taskForceService.desabilitarRegistro(this.keySala, this.keyRegistro, this.keyProfissaoSorteada, this.keyProfissaoMonitor, this.vidas);
                yield this.atualizarTarefa();
                this.corMonitor = 'vermelho';
                setTimeout(() => {
                    this.corMonitor = '';
                }, 400);
                return [];
            })))
                .subscribe((r) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (r['concluido']) {
                    yield this.taskForceService.pontuarJogador(this.keySala, this.keyProfissaoSorteada, true, 0.5);
                    this.corMonitor = 'verde';
                    setTimeout(() => {
                        this.corMonitor = '';
                    }, 400);
                    yield this.atualizarTarefa();
                }
            }));
        });
    }
    exibirTarefa() {
        var texto;
        switch (this.tarefaSorteada.tipo) {
            case 'acao':
                texto = this.tarefaSorteada.texto;
                break;
            case 'estado':
                texto = this.tarefaSorteada.texto;
                break;
            case 'escolha':
                texto = this.tarefaSorteada.texto + ' ' + this.tarefaSorteada.verbo;
                break;
        }
        this.textoExibicao = texto;
    }
    concluirRegistro(registro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            yield this.taskForceService.setTarefa(this.keySala, this.keyProfissaoSorteada, registro.key, { verbo: registro.texto });
            if (this.pausa === false) {
                result = yield this.taskForceService.concluirRegistro(this.keySala, this.keyProfissaoSorteada, registro, this.vidas);
                if (result) {
                    this.corTarefa = 'verde';
                    this.idTarefaRecente = registro.id;
                    setTimeout(() => {
                        this.corTarefa = '';
                        this.idTarefaRecente = 0;
                    }, 400);
                }
                else {
                    this.corTarefa = 'vermelho';
                    this.idTarefaRecente = registro.id;
                    setTimeout(() => {
                        this.corTarefa = '';
                        this.idTarefaRecente = 0;
                    }, 400);
                }
            }
        });
    }
    ngOnDestroy() {
        this.dica = false;
        this.dicaChange.emit(this.dica);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
PainelComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_6__["TaskforceService"] }
];
PainelComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keyJogador: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keyProfissaoSorteada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    profissaoSorteada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tempoMonitor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vidas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    numTarefasNecessarias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    numRodada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flagRelatorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flagRelatorioChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    dica: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dicaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PainelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel',
        template: _raw_loader_painel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PainelComponent);



/***/ }),

/***/ "L5Vj":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relatorio/relatorio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"relatorio\">\r\n  <div class=\"card-relatorio\">\r\n    <table class=\"tabela-relatorio\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngIf=\"this.vida > 0\"\r\n            Class=\"titulo vitoria\"\r\n          ></th>\r\n          <th *ngIf=\"this.vida <= 0\"\r\n            Class=\"titulo derrota\"\r\n          > #{{numRodada}}</th>\r\n          <th class=\"tooltip\">\r\n            Tarefas Concluídas\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              width=\"16\"\r\n              height=\"16\"\r\n              fill=\"var(--ft-color)\"\r\n              class=\"bi bi-info-circle-fill\"\r\n              viewBox=\"0 0 16 16\"\r\n            >\r\n              <path\r\n                d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"\r\n              />\r\n            </svg>\r\n            <div class=\"tooltiptext\">\r\n              <p>\r\n                <span class=\"num-concluidas\">0.5</span> por tarefa informada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-concluidas\">0.5</span> por tarefa executada\r\n              </p>\r\n            </div>\r\n          </th>\r\n          <th class=\"tooltip\">\r\n            Vidas Perdidas\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              width=\"16\"\r\n              height=\"16\"\r\n              fill=\"var(--ft-color)\"\r\n              class=\"bi bi-info-circle-fill\"\r\n              viewBox=\"0 0 16 16\"\r\n            >\r\n              <path\r\n                d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"\r\n              />\r\n            </svg>\r\n            <div class=\"tooltiptext\">\r\n              <p>\r\n                <span class=\"num-perdidas\">0.5</span> por tarefa não informada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-perdidas\">0.5</span> por tarefa não executada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-perdidas\">1</span> por execução de tarefa\r\n                errada\r\n              </p>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"this.vida > 0\">\r\n        <tr *ngFor=\"let l of lista\">\r\n          <td>\r\n            <div class=\"fundo-profissao\">\r\n              <img\r\n                class=\"img-profissao\"\r\n                src=\"{{ baseUrl }}profissionais/{{\r\n                  l.imagem\r\n                }}\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"info-amigo\">\r\n              <p class=\"nick\">\r\n                {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n                  l.profissao\r\n                }}</span>\r\n              </p>\r\n            </div>\r\n          </td>\r\n          <td class=\"num num-concluidas\">{{ l.acertos }}</td>\r\n          <td class=\"num num-perdidas\">{{ l.erros }}</td>\r\n        </tr>\r\n      </tbody>\r\n\r\n      <tbody *ngIf=\"this.vida <= 0\">\r\n        <tr *ngFor=\"let l of relatorioPartida\">\r\n        <td>\r\n          <div class=\"fundo-profissao\">\r\n            <img\r\n                class=\"img-profissao\"\r\n                src=\"{{ baseUrl }}profissionais/{{\r\n                  l.imagem\r\n                }}\"\r\n              />\r\n          </div>\r\n\r\n          <div class=\"info-amigo\">\r\n            <p class=\"nick\">\r\n              {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n                l.profissao\r\n              }}</span>\r\n            </p>\r\n          </div>\r\n        </td>\r\n        <td class=\"num num-concluidas\">{{ l.acertos }}</td>\r\n        <td class=\"num num-perdidas\">{{ l.erros }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"acao-proximo\" *ngIf=\"this.vida > 0\">\r\n    <button\r\n      [disabled]=\"this.desabilitado\"\r\n      class=\"proximo\"\r\n      (click)=\"fecharRelatorio()\"\r\n    ></button>\r\n  </div>\r\n\r\n  <div class=\"acao-reiniciar\" *ngIf=\"this.vida <= 0\">\r\n    <button\r\n      class=\"compartilhar\"\r\n      [disabled]=\"this.desabilitado\"\r\n      (click)=\"compartilhar()\"\r\n    ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-share-fill\" viewBox=\"0 -4 20 20\">\r\n      <path d=\"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z\"/>\r\n    </svg> {{textoCompartilhar}}</button>\r\n    <button\r\n      [disabled]=\"this.desabilitado\"\r\n      class=\"reiniciar\"\r\n      (click)=\"fecharRelatorio()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Ll4m":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inicio {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.box {\r\n  float: left;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.logo {\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  font-family: 'Roboto Mono';\r\n  font-weight: 300;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.logo::after {\r\n  content: '_';\r\n  -webkit-animation-name: input-animation;\r\n          animation-name: input-animation;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.card {\r\n  background-color: var(--box-bg);\r\n  height: 90%;\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  margin-top: 2.5%;\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  padding-top: 2.5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.personagem {\r\n  width: 80%;\r\n  height: 50%;\r\n  margin-left: 10%;\r\n  padding-top: 5%;\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n  background: var(--personagem-bg);\r\n}\r\n\r\n.img-personagem {\r\n  background-repeat: no-repeat;\r\n  background-position: center bottom;\r\n  background-size: contain;\r\n\r\n  -webkit-animation: pop 4s ease infinite;\r\n\r\n          animation: pop 4s ease infinite;\r\n}\r\n\r\n.nick {\r\n  width: 80%;\r\n  height: 25%;\r\n  margin-left: 10%;\r\n}\r\n\r\n.nickname {\r\n  font-weight: 400;\r\n  margin-top: 5%;\r\n}\r\n\r\n.nick input {\r\n  width: 100%;\r\n  height: 30%;\r\n  padding-top: 15px;\r\n  padding-bottom: 5px;\r\n\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 1px solid var(--ft-color);\r\n\r\n  color: var(--ft-color);\r\n  text-align: center;\r\n}\r\n\r\n.mensagem {\r\n  width: 100%;\r\n  text-align: right;\r\n  color: var(--tart-orange);\r\n  margin-top: 1%;\r\n}\r\n\r\n.login {\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.btn-login {\r\n  width: 80%;\r\n  height: 50%;\r\n  margin-left: 10%;\r\n\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.btn-login:active {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n  box-shadow: 0px 2px var(--black-fogra);\r\n}\r\n\r\n.btn-login:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.box-tutorial .card {\r\n  padding: 0% 5%;\r\n}\r\n\r\n.titulo {\r\n  width: 100%;\r\n  height: 15%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.imagem {\r\n  width: 100%;\r\n  height: 45%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n.texto {\r\n  width: 95%;\r\n  height: 30%;\r\n  margin-left: 2.5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  line-height: 1.4;\r\n}\r\n\r\n.navegacao {\r\n  width: 100%;\r\n  height: 10%;\r\n}\r\n\r\n.slot {\r\n  width: 5%;\r\n  height: 100%;\r\n  margin-left: 7.5%;\r\n  margin-right: 7.5%;\r\n  float: left;\r\n  background-color: var(--slot-bg);\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n  cursor: pointer;\r\n}\r\n\r\n.slot-ativo {\r\n  background-color: var(--slot-ativo);\r\n}\r\n\r\n@-webkit-keyframes pop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  10% {\r\n    opacity: 1;\r\n  }\r\n\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes pop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  10% {\r\n    opacity: 1;\r\n  }\r\n\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 3.5vw;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 2.5vw;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1.75vw;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .box {\r\n    width: 50%;\r\n    height: 85%;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .texto {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n  }\r\n\r\n  .box {\r\n    width: 40%;\r\n    height: 85%;\r\n    box-sizing: content-box;\r\n  }\r\n\r\n  .box-login {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .texto {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyx3QkFBd0I7O0VBRXhCLHVDQUErQjs7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7RUFFbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDOztFQUV4QyxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FB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O0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6ImluaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluaWNpbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dvOjphZnRlciB7XHJcbiAgY29udGVudDogJ18nO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBpbnB1dC1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMi41JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZy10b3A6IDIuNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBlcnNvbmFnZW0ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcbn1cclxuXHJcbi5pbWctcGVyc29uYWdlbSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbiAgYW5pbWF0aW9uOiBwb3AgNHMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLm5pY2sge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLm5pY2tuYW1lIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ubmljayBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZ0LWNvbG9yKTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW5zYWdlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLmJ0bi1sb2dpbjphY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1ibGFjay1mb2dyYSk7XHJcbn1cclxuXHJcbi5idG4tbG9naW46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjb2xvcjogdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmJveC10dXRvcmlhbCAuY2FyZCB7XHJcbiAgcGFkZGluZzogMCUgNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbn1cclxuXHJcbi5pbWFnZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnRleHRvIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLm5hdmVnYWNhbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5zbG90IHtcclxuICB3aWR0aDogNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3LjUlO1xyXG4gIG1hcmdpbi1yaWdodDogNy41JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbG90LWJnKTtcclxuICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoKTtcclxuICBjbGlwLXBhdGg6IGNpcmNsZSgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsb3QtYXRpdm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsb3QtYXRpdm8pO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlucHV0LWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA0OSUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mdC1jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuYm94LXR1dG9yaWFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgfVxyXG5cclxuICAubmljayBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcblxyXG4gIC5tZW5zYWdlbSB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuYm94LXR1dG9yaWFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAzLjV2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgfVxyXG5cclxuICAubWVuc2FnZW0ge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10dXRvcmlhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmltZy1wZXJzb25hZ2VtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2tuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgfVxyXG5cclxuICAubWVuc2FnZW0ge1xyXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAubmljayBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLm1lbnNhZ2VtIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB9XHJcblxyXG4gIC5ib3gtbG9naW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10dXRvcmlhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG4gIC50ZXh0byB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm1lbnNhZ2VtIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "MNJw":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painel/painel.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"painel\">\r\n  <div class=\"monitor\">\r\n    <monitor\r\n      [texto]=\"textoExibicao\"\r\n      [tempo]=\"tempoMonitor\"\r\n      [pausa]=\"pausa\"\r\n      [(dica)]=\"dica\"\r\n      [corMonitor]=\"corMonitor\"\r\n    ></monitor>\r\n  </div>\r\n  <div class=\"quadro\">\r\n    <quadro\r\n      [idProfissao]=\"profissaoSorteada.id\"\r\n      [tarefas]=\"profissaoSorteada.tarefas\"\r\n      [registro]=\"registro\"\r\n      (quadroAtualizado)=\"concluirRegistro($event)\"\r\n      [(dica)]=\"dica\"\r\n      [corTarefa]=\"corTarefa\"\r\n      [idTarefaRecente]=\"idTarefaRecente\"\r\n    ></quadro>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "R44c":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contagem/contagem.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-6 center\"><p>{{numero}}</p><span></span></div>\r\n\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");








let AppComponent = class AppComponent {
    constructor(meta, titleService, router) {
        this.meta = meta;
        this.titleService = titleService;
        this.router = router;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                gtag('config', 'G-CPWCCRF4JQ', {
                    page_path: event.urlAfterRedirects,
                });
            }
        });
        this.meta.addTag({
            name: 'theme-color',
            content: getComputedStyle(document.documentElement)
                .getPropertyValue('--bg-color')
                .trim(),
        });
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                ]),
            ]),
        ],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TJYz":
/*!**************************************************!*\
  !*** ./src/app/relatorio/relatorio.component.ts ***!
  \**************************************************/
/*! exports provided: RelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function() { return RelatorioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorio.component.html */ "L5Vj");
/* harmony import */ var _relatorio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorio.component.css */ "aQg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");







let RelatorioComponent = class RelatorioComponent {
    constructor(taskForceService) {
        this.taskForceService = taskForceService;
        this.flagRelatorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.relatorioPartidaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.textoCompartilhar = "Compartilhar";
        this.lista = [];
        this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let i = 0;
            let j = 0;
            this.vida = this.vidas;
            this.desabilitado = true;
            this.listaProfissoesSorteadas.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((l) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                for (i = 0; i < l.length; i++) {
                    this.lista.push({
                        imagem: l[i].imagem,
                        responsavel: l[i].responsavel,
                        profissao: l[i].profissao,
                        acertos: l[i].acertos,
                        erros: l[i].erros,
                    });
                    for (j = 0; j < this.relatorioPartida.length; j++) {
                        if (this.relatorioPartida[j].responsavel === l[i].responsavel) {
                            this.relatorioPartida[j].imagem = l[i].imagem;
                            this.relatorioPartida[j].responsavel = l[i].responsavel;
                            this.relatorioPartida[j].profissao = l[i].profissao;
                            this.relatorioPartida[j].acertos += l[i].acertos;
                            this.relatorioPartida[j].erros += l[i].erros;
                            break;
                        }
                    }
                    if (j === this.relatorioPartida.length) {
                        this.relatorioPartida.push({
                            imagem: l[i].imagem,
                            responsavel: l[i].responsavel,
                            profissao: l[i].profissao,
                            acertos: l[i].acertos,
                            erros: l[i].erros,
                        });
                    }
                    this.relatorioPartidaChange.emit(this.relatorioPartida);
                    yield this.resetarProfissao();
                }
            }));
            this.desabilitado = false;
        });
    }
    fecharRelatorio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.desabilitado) {
                this.desabilitado = true;
                if (this.vida <= 0) {
                    this.relatorioPartida = [];
                    this.relatorioPartidaChange.emit(this.relatorioPartida);
                    yield this.taskForceService.resetarSala(this.keySala);
                }
                this.flagRelatorio = false;
                this.flagRelatorioChange.emit(this.flagRelatorio);
            }
        });
    }
    resetarProfissao() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.taskForceService.resetarProfissao(this.keySala, this.keyProfissaoSorteada);
        });
    }
    mobileCheck() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    ;
    compartilhar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.textoCompartilhar = 'Gerando imagem...';
            yield dom_to_image__WEBPACK_IMPORTED_MODULE_5___default.a.toBlob(document.querySelector(".tabela-relatorio"))
                .then((blob) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //@ts-ignore
                const imgClip = new ClipboardItem({ "image/png": blob });
                yield navigator.clipboard.write([imgClip]);
                if (this.mobileCheck()) {
                    const data = {
                        files: [
                            new File([blob], 'file.png', {
                                type: blob.type,
                            }),
                        ],
                        title: "",
                        text: "Rodada " + this.numRodada + " alcançada!\nhttps://squadtask.io",
                    };
                    try {
                        if (!(navigator.canShare(data))) {
                            throw new Error("Can't share data.");
                        }
                        yield navigator.share(data);
                    }
                    catch (err) {
                        console.error(err.name, err.message);
                    }
                }
                this.textoCompartilhar = 'Copiado p/ ctrl-v';
            }))
                .catch((error) => {
                this.textoCompartilhar = 'Falha ao copiar';
                console.error('oops, something went wrong!', error);
            });
            setTimeout(() => {
                this.textoCompartilhar = 'Compartilhar';
            }, 3000);
        });
    }
};
RelatorioComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_6__["TaskforceService"] }
];
RelatorioComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vidas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    numRodada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keyProfissaoSorteada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listaProfissoesSorteadas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flagRelatorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flagRelatorioChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    relatorioPartida: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    relatorioPartidaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
RelatorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'relatorio',
        template: _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RelatorioComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jogo\">\r\n  <div *ngIf=\"!keySala\" class=\"inicio\" [@fade]>\r\n    <inicio [(keySala)]=\"keySala\" [(nickJogador)]=\"nickJogador\"></inicio>\r\n  </div>\r\n  <div *ngIf=\"keySala\" class=\"central\" [@fade]>\r\n    <central [(keySala)]=\"keySala\" [nickJogador]=\"nickJogador\"></central>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "WWLw":
/*!***********************************************!*\
  !*** ./src/app/monitor/monitor.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes tempo {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  1% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes tempo {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  1% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes typing {\r\n  0% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  2.5% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  5% {\r\n    width: var(--tamanho);\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  7.5% {\r\n    overflow: auto;\r\n    white-space: normal;\r\n  }\r\n  92.5% {\r\n    overflow: auto;\r\n    white-space: normal;\r\n  }\r\n  95% {\r\n    width: var(--tamanho);\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    \r\n  }\r\n  97.5% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  100% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n@keyframes typing {\r\n  0% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  2.5% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  5% {\r\n    width: var(--tamanho);\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  7.5% {\r\n    overflow: auto;\r\n    white-space: normal;\r\n  }\r\n  92.5% {\r\n    overflow: auto;\r\n    white-space: normal;\r\n  }\r\n  95% {\r\n    width: var(--tamanho);\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    \r\n  }\r\n  97.5% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  100% {\r\n    width: 0%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide-in-bottom {\r\n  0% {\r\n    transform: translate(-50%, 5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slide-in-bottom {\r\n  0% {\r\n    transform: translate(-50%, 5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n.monitor {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: var(--monitor-bg);\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n}\r\n\r\n.dica {\r\n  position: absolute;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--box-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n\r\n  -webkit-animation: slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;\r\n\r\n          animation: slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;\r\n}\r\n\r\n.fechar {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n.fechar:hover {\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.letreiro {\r\n  height: 90%;\r\n  width: 100%;\r\n}\r\n\r\n.letreiro p {\r\n  color: var(--white);\r\n  font-family: 'Roboto Mono';\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 90%;\r\n  max-width: 90%;\r\n\r\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\r\n  white-space: nowrap; /* Keeps the content on a single line */\r\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\r\n  -webkit-animation: typing 1 normal both;\r\n          animation: typing 1 normal both;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n}\r\n\r\n.letreiro span {\r\n  color: var(--white);\r\n  font-family: 'Roboto Mono';\r\n  -webkit-animation-name: input-animation;\r\n          animation-name: input-animation;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.tempo {\r\n  width: 90%;\r\n  height: 3px;\r\n  margin-left: 5%;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    var(--eletric-purple),\r\n    var(--blue-jeans)\r\n  );\r\n}\r\n\r\n.tempo-decorrido {\r\n  background-color: var(--monitor-bg);\r\n  height: 100%;\r\n  width: 100%;\r\n  float: right;\r\n  -webkit-animation-name: tempo;\r\n          animation-name: tempo;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n\r\n.verde {\r\n  -webkit-animation-name: correto;\r\n          animation-name: correto;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.vermelho {\r\n  -webkit-animation-name: errado;\r\n          animation-name: errado;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .letreiro {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 25%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .letreiro {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .letreiro {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .dica {\r\n    width: 95%;\r\n    height: 15%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 0.75%;\r\n    top: -2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .letreiro {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.6em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .letreiro {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 15%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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OEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoibW9uaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBpbnB1dC1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICB9XHJcbiAgNDklIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mdC1jb2xvcik7XHJcbiAgfVxyXG4gIDk5JSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZnQtY29sb3IpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGVtcG8ge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAxJSB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIDIuNSUge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIHdpZHRoOiB2YXIoLS10YW1hbmhvKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICA3LjUlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgOTIuNSUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgd2lkdGg6IHZhcigtLXRhbWFuaG8pO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBcclxuICB9XHJcbiAgOTcuNSUge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjb3JyZXRvIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tb25pdG9yLWJnKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkaXVtLXNlYS1ncmVlbik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlcnJhZG8ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLXRhcnQtb3JhbmdlKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubW9uaXRvciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbn1cclxuXHJcbi5kaWNhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjNzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMC43NXMgYm90aDtcclxufVxyXG5cclxuLmZlY2hhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZlY2hhcjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG59XHJcblxyXG4ubGV0cmVpcm8ge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGV0cmVpcm8gcCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlcyB0aGUgY29udGVudCBpcyBub3QgcmV2ZWFsZWQgdW50aWwgdGhlIGFuaW1hdGlvbiAqL1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cclxuICBtYXJnaW46IDAgYXV0bzsgLyogR2l2ZXMgdGhhdCBzY3JvbGxpbmcgZWZmZWN0IGFzIHRoZSB0eXBpbmcgaGFwcGVucyAqL1xyXG4gIGFuaW1hdGlvbjogdHlwaW5nIDEgbm9ybWFsIGJvdGg7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sZXRyZWlybyBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBpbnB1dC1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4udGVtcG8ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgdmFyKC0tZWxldHJpYy1wdXJwbGUpLFxyXG4gICAgdmFyKC0tYmx1ZS1qZWFucylcclxuICApO1xyXG59XHJcblxyXG4udGVtcG8tZGVjb3JyaWRvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB0ZW1wbztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbn1cclxuXHJcbi52ZXJkZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGNvcnJldG87XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG5cclxuLnZlcm1lbGhvIHtcclxuICBhbmltYXRpb24tbmFtZTogZXJyYWRvO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubGV0cmVpcm8ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiAtNy41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubGV0cmVpcm8ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiAtNy41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubGV0cmVpcm8ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICB9XHJcblxyXG4gIC5xdWVicmEtbGluaGEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDAuNzUlO1xyXG4gICAgdG9wOiAtMi41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5sZXRyZWlybyB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IC03LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmxldHJlaXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgfVxyXG5cclxuICAucXVlYnJhLWxpbmhhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRvcDogNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "jmUF");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _botao_botao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./botao/botao.component */ "x3+4");
/* harmony import */ var _tarefa_tarefa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tarefa/tarefa.component */ "aR94");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./painel/painel.component */ "IH1k");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monitor/monitor.component */ "sVpJ");
/* harmony import */ var _quadro_quadro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quadro/quadro.component */ "mpLu");
/* harmony import */ var _central_central_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./central/central.component */ "s2Oy");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./taskforce.service */ "tsgC");
/* harmony import */ var _sala_sala_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sala/sala.component */ "DwX5");
/* harmony import */ var _contagem_contagem_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contagem/contagem.component */ "CwaN");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inicio/inicio.component */ "9ixo");
/* harmony import */ var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./relatorio/relatorio.component */ "TJYz");























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _botao_botao_component__WEBPACK_IMPORTED_MODULE_12__["BotaoComponent"],
            _tarefa_tarefa_component__WEBPACK_IMPORTED_MODULE_13__["TarefaComponent"],
            _painel_painel_component__WEBPACK_IMPORTED_MODULE_14__["PainelComponent"],
            _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__["MonitorComponent"],
            _quadro_quadro_component__WEBPACK_IMPORTED_MODULE_16__["QuadroComponent"],
            _central_central_component__WEBPACK_IMPORTED_MODULE_17__["CentralComponent"],
            _sala_sala_component__WEBPACK_IMPORTED_MODULE_19__["SalaComponent"],
            _contagem_contagem_component__WEBPACK_IMPORTED_MODULE_20__["ContagemComponent"],
            _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_21__["InicioComponent"],
            _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_22__["RelatorioComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        providers: [_taskforce_service__WEBPACK_IMPORTED_MODULE_18__["TaskforceService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' }]
    })
], AppModule);



/***/ }),

/***/ "aQg/":
/*!***************************************************!*\
  !*** ./src/app/relatorio/relatorio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table,\r\nth,\r\ntd {\r\n  border: 1px solid var(--box-border);\r\n  border-collapse: collapse;\r\n}\r\n\r\nth {\r\n  height: 15%;\r\n  vertical-align: bottom;\r\n  border: none;\r\n  padding: 2% 2% 0 2%;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 95%;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  color: var(--ft-color);\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 50%;\r\n  margin-left: -47.5%;\r\n  padding: 5% 2.5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: transparent transparent var(--box-border) transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\ntr {\r\n  height: 10vh;\r\n}\r\n\r\ntd {\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  height: 10vh;\r\n}\r\n\r\ntd:nth-child(1) {\r\n  width: 30%;\r\n}\r\n\r\ntd:nth-child(2),\r\ntd:nth-child(3) {\r\n  width: 35%;\r\n}\r\n\r\n.relatorio {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-relatorio {\r\n  background-color: var(--box-bg);\r\n  float: left;\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n  overflow-y: auto;\r\n}\r\n\r\n.tabela-relatorio {\r\n  background-color: var(--box-bg);\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.titulo {\r\n  white-space: pre;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n}\r\n\r\n.vitoria::before {\r\n  content: 'Rodada \\A Concluída';\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.derrota::before {\r\n  content: 'Fim de \\A Partida';\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.fundo-profissao {\r\n  width: 25%;\r\n  height: 100%;\r\n\r\n  margin-left: 5%;\r\n\r\n  /*background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  clip-path: circle();*/\r\n\r\n  float: left;\r\n}\r\n\r\n.img-profissao {\r\n  width: 100%;\r\n  height: 100%;\r\n  \r\n  /*background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;*/\r\n}\r\n\r\n.info-amigo {\r\n  width: 60%;\r\n  height: 100%;\r\n  margin-left: 5%;\r\n\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n\r\n  float: left;\r\n}\r\n\r\n.nick {\r\n  padding-top: 5%;\r\n  line-height: 0.75;\r\n  font-weight: bold;\r\n  text-align: left;\r\n}\r\n\r\n.texto-profissao {\r\n  color: var(--blue-jeans);\r\n  font-weight: 400;\r\n}\r\n\r\n.num {\r\n  font-weight: bold;\r\n}\r\n\r\n.num-concluidas {\r\n  color: var(--medium-sea-green);\r\n}\r\n\r\n.num-perdidas {\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.acao-proximo {\r\n  float: left;\r\n}\r\n\r\n.acao-reiniciar {\r\n  float: left;\r\n}\r\n\r\n.proximo {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.proximo:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.proximo::after {\r\n  content: 'Próxima rodada';\r\n}\r\n\r\n.proximo:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.reiniciar {\r\n  width: 47.5%;\r\n  float: left;\r\n  margin-left: 5%;\r\n\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.reiniciar:active {\r\n  box-shadow: 0px 2px var(--saphire-blue);\r\n}\r\n\r\n.reiniciar::after {\r\n  content: 'Nova partida';\r\n}\r\n\r\n.reiniciar:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.compartilhar {\r\n  width: 47.5%;\r\n  float: left;\r\n\r\n  background-color: var(--purple);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--dark-purple);\r\n}\r\n\r\n.compartilhar:active {\r\n  box-shadow: 0px 2px var(--dark-purple);\r\n}\r\n\r\n.compartilhar:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card-relatorio {\r\n    width: 100%;\r\n    height: 80%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 5.3vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .acao-proximo {\r\n    width: 90%;\r\n    height: 7.5%;\r\n    margin-left: 5%;\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .acao-reiniciar {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin-left: 0%;\r\n    margin-top: 7.5%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .card-relatorio {\r\n    width: 100%;\r\n    height: 80%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 4.3vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  .acao-proximo {\r\n    width: 70%;\r\n    height: 7.5%;\r\n    margin-left: 15%;\r\n    margin-top: 7.5%;\r\n  }\r\n  \r\n  .acao-reiniciar {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin-left: 0%;\r\n    margin-top: 7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3.3vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1.6vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2.75vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .acao-proximo {\r\n    width: 50%;\r\n    height: 7.5%;\r\n    margin-left: 25%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .acao-reiniciar {\r\n    width: 70%;\r\n    height: 7.5%;\r\n    margin-left: 15%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 2.3vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1.1vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .acao-proximo {\r\n    width: 50%;\r\n    height: 7.5%;\r\n    margin-left: 25%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .acao-reiniciar {\r\n    width: 70%;\r\n    height: 7.5%;\r\n    margin-left: 15%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 1.8vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .acao-proximo {\r\n    width: 30%;\r\n    height: 7.5%;\r\n    margin-left: 35%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .acao-reiniciar {\r\n    width: 60%;\r\n    height: 7.5%;\r\n    margin-left: 20%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0b3Jpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0FB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RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InJlbGF0b3Jpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsXHJcbnRoLFxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGgge1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDIlIDIlIDAgMiU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTQ3LjUlO1xyXG4gIHBhZGRpbmc6IDUlIDIuNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHZhcigtLWJveC1ib3JkZXIpIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbnRyIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbnRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDIpLFxyXG50ZDpudGgtY2hpbGQoMykge1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5yZWxhdG9yaW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtcmVsYXRvcmlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtYmcpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4udGFiZWxhLXJlbGF0b3JpbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udml0b3JpYTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnUm9kYWRhIFxcQSBDb25jbHXDrWRhJztcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbn1cclxuXHJcbi5kZXJyb3RhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdGaW0gZGUgXFxBIFBhcnRpZGEnO1xyXG4gIGNvbG9yOiB2YXIoLS10YXJ0LW9yYW5nZSk7XHJcbn1cclxuXHJcbi5mdW5kby1wcm9maXNzYW8ge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gIC8qYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7Ki9cclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbWctcHJvZmlzc2FvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgLypiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7Ki9cclxufVxyXG5cclxuLmluZm8tYW1pZ28ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uaWNrIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5udW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubnVtLWNvbmNsdWlkYXMge1xyXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLm51bS1wZXJkaWRhcyB7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxufVxyXG5cclxuLmFjYW8tcHJveGltbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY2FvLXJlaW5pY2lhciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wcm94aW1vIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLnByb3hpbW86YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IHZhcigtLXNlYS1ncmVlbik7XHJcbn1cclxuXHJcbi5wcm94aW1vOjphZnRlciB7XHJcbiAgY29udGVudDogJ1Byw7N4aW1hIHJvZGFkYSc7XHJcbn1cclxuXHJcbi5wcm94aW1vOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zaWx2ZXItY2hhbGljZSk7XHJcbiAgY29sb3I6IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5yZWluaWNpYXIge1xyXG4gIHdpZHRoOiA0Ny41JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zYXBoaXJlLWJsdWUpO1xyXG59XHJcblxyXG4ucmVpbmljaWFyOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1zYXBoaXJlLWJsdWUpO1xyXG59XHJcblxyXG4ucmVpbmljaWFyOjphZnRlciB7XHJcbiAgY29udGVudDogJ05vdmEgcGFydGlkYSc7XHJcbn1cclxuXHJcbi5yZWluaWNpYXI6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjb2xvcjogdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmNvbXBhcnRpbGhhciB7XHJcbiAgd2lkdGg6IDQ3LjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1kYXJrLXB1cnBsZSk7XHJcbn1cclxuXHJcbi5jb21wYXJ0aWxoYXI6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IHZhcigtLWRhcmstcHVycGxlKTtcclxufVxyXG5cclxuLmNvbXBhcnRpbGhhcjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItY2hhbGljZSk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogNS4zdnc7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG5cclxuICAubmljayB7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDd2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLXByb3hpbW8ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5hY2FvLXJlaW5pY2lhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDcuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvIHtcclxuICAgIGZvbnQtc2l6ZTogNC4zdnc7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAzLjV2dztcclxuICB9XHJcblxyXG4gIC50ZXh0by1wcm9maXNzYW8ge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAubnVtIHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjYW8tcHJveGltbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDcuNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2FvLXJlaW5pY2lhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIG1hcmdpbi10b3A6IDcuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDMuM3Z3O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjZ2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMi43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjYW8tcHJveGltbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhby1yZWluaWNpYXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDIuM3Z3O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLXByb3hpbW8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmFjYW8tcmVpbmljaWFyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJkLXJlbGF0b3JpbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAxLjh2dztcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC50ZXh0by1wcm9maXNzYW8ge1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgfVxyXG5cclxuICAubnVtIHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjYW8tcHJveGltbyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhby1yZWluaWNpYXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "aR94":
/*!********************************************!*\
  !*** ./src/app/tarefa/tarefa.component.ts ***!
  \********************************************/
/*! exports provided: TarefaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarefaComponent", function() { return TarefaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tarefa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tarefa.component.html */ "b3KD");
/* harmony import */ var _tarefa_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tarefa.component.css */ "5ZiT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TarefaComponent = class TarefaComponent {
    constructor() {
        this.tarefaExecutada = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        switch (this.tipo) {
            case 'acao':
                this.corBotao = 'azul';
                this.tipoBotao = 'botao';
                this.textoBotao = this.texto;
                break;
            case 'estado':
                if (this.corBotao == 'verde') {
                    this.corBotao = 'vermelho';
                }
                else {
                    this.corBotao = 'verde';
                }
                this.tipoBotao = 'estado';
                this.textoBotao = this.texto;
                break;
            case 'escolha':
                this.corBotao = 'branco';
                this.tipoBotao = 'lista';
                this.textoBotao = this.texto;
                break;
            default:
                this.corBotao = 'azul';
                this.tipoBotao = 'botao';
                this.textoBotao = this.texto;
                break;
        }
    }
    botaoClick(args) {
        this.tarefaExecutada.emit(args);
    }
};
TarefaComponent.ctorParameters = () => [];
TarefaComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idProfissao: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    frase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tipo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    estado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lista: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    registro: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    corTarefa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idTarefaRecente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tarefaExecutada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
TarefaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tarefa',
        template: _raw_loader_tarefa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tarefa_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TarefaComponent);



/***/ }),

/***/ "b3KD":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tarefa/tarefa.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tarefa\" [ngClass]=\"idTarefaRecente === id ? corTarefa : ''\">\r\n  <div class=\"frase\">\r\n    <h3>{{frase}}</h3>\r\n  </div>\r\n  <div class=\"botao\">\r\n    <botao [key]=\"key\" [id]=\"id\" [idProfissao]=\"idProfissao\" [texto]=\"textoBotao\" [cor]=\"corBotao\" [tipo]=\"tipoBotao\"\r\n      [estado]=\"estado\" [lista]=\"lista\" (clique)=\"botaoClick($event)\"></botao>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "9ixo");


 // CLI imports router

const routes = [{ path: ':keySala', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] }]; // sets up routes constant where you define your routes
// configures NgModule imports and exports
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fx4J":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inicio\">\r\n  <div class=\"logo\">Squad Task</div>\r\n  <div class=\"box box-login\">\r\n    <div class=\"card\">\r\n      <div class=\"personagem\">\r\n        <div class=\"img-personagem\" style.background-image=\"url({{baseUrl}}profissionais/{{imagemBox}})\"></div>\r\n      </div>\r\n      <form class=\"nick\">\r\n        <p class=\"nickname\">Nickname:</p>\r\n        <input type=\"text\" maxlength=\"10\" (keyup)=\"onKey($event)\">\r\n        <p class=\"mensagem\">{{mensagem}}</p>\r\n      </form>\r\n      <div class=\"login\">\r\n        <button *ngIf=\"!keySala\" class=\"btn-login\" (click)=\"criarSala()\" [disabled]=\"nickJogador === ''\">\r\n          Criar sala\r\n        </button>\r\n        <button *ngIf=\"keySala\" class=\"btn-login\" (click)=\"entrarSala()\" [disabled]=\"nickJogador === ''\">\r\n          Entrar na sala\r\n      </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box box-tutorial\">\r\n    <div class=\"card\">\r\n      <div class=\"titulo\">Como jogar?</div>\r\n      <div class=\"imagem\" style.background-image=\"url({{baseUrl}}{{carrossel[numCarrossel].imagem}}\"></div>\r\n      <div class=\"texto\">{{carrossel[numCarrossel].texto}}</div>\r\n      <div class=\"navegacao\">\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 0 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(0)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 1 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(1)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 2 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(2)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 3 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(3)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 4 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(4)\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "j6NB":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sala/sala.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sala\">\r\n  <div class=\"container\">\r\n    <div\r\n      class=\"profissao-jogador\"\r\n      [style.display]=\"\r\n        this.profissaoSorteada.responsavel === this.nickJogador\r\n          ? 'inherit'\r\n          : 'none'\r\n      \"\r\n      [style.border-left-color]=\"\r\n        this.pronto ? 'var(--medium-sea-green)' : 'var(--tart-orange)'\r\n      \"\r\n    >\r\n      <div class=\"cabecalho\">\r\n        <div class=\"img-coracao\">\r\n          <p class=\"num-vidas\">{{ vidas }}x</p>\r\n        </div>\r\n        <div\r\n          class=\"img-coroa\"\r\n          [style.display]=\"lider === nickJogador ? 'inherit' : 'none'\"\r\n        ></div>\r\n      </div>\r\n\r\n      <div class=\"rodada\">\r\n        <p>Rodada {{ numRodada }}</p>\r\n      </div>\r\n\r\n      <div class=\"fundo-profissao\">\r\n        <div\r\n          class=\"img-jogador\"\r\n          style.background-image=\"url({{ baseUrl }}profissionais/{{\r\n            this.profissaoSorteada.imagem\r\n          }})\"\r\n        ></div>\r\n      </div>\r\n\r\n      <div class=\"info\">\r\n        <p>\r\n          {{ this.profissaoSorteada.responsavel }}<br /><span>{{\r\n            this.profissaoSorteada.profissao\r\n          }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"configuracoes\">\r\n      <div class=\"titulo-config\">Configurações da Sala</div>\r\n      <div class=\"item-config\">\r\n        <div class=\"texto-item-config\">URL completa</div>\r\n        <div class=\"acao-item-config\">\r\n          <button\r\n            [ngClass]=\"\r\n              this.visibilidadeURL\r\n                ? 'url-visivel btn-verde'\r\n                : 'url-oculto btn-vermelho'\r\n            \"\r\n            [disabled]=\"lider !== nickJogador\"\r\n            (click)=\"alterarVisibilidadeURL()\"\r\n          ></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-config\">\r\n        <div class=\"texto-item-config\">Sala</div>\r\n        <div class=\"acao-item-config\">\r\n          <button\r\n            [ngClass]=\"\r\n              this.privacidade\r\n                ? 'privacidade-aberta btn-verde'\r\n                : 'privacidade-fechada btn-vermelho'\r\n            \"\r\n            [disabled]=\"lider !== nickJogador\"\r\n            (click)=\"alterarPrivacidade()\"\r\n          ></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"amigos\">\r\n    <div\r\n      class=\"profissao-amigo\"\r\n      *ngFor=\"let l of listaProfissoesSorteadas | async\"\r\n      [style.display]=\"l.responsavel === this.nickJogador ? 'none' : 'inherit'\"\r\n      [style.border-left-color]=\"\r\n        l.pronto ? 'var(--medium-sea-green)' : 'var(--tart-orange)'\r\n      \"\r\n    >\r\n      <div\r\n        class=\"img-coroa-2\"\r\n        tabindex=\"-1\"\r\n        [style.display]=\"lider === l.responsavel ? 'inherit' : 'none'\"\r\n      >\r\n      </div>\r\n      <div\r\n        class=\"lista-acoes\"\r\n        tabindex=\"-1\"\r\n        [style.display]=\"lider === nickJogador ? 'inherit' : 'none'\"\r\n      >\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"20\"\r\n          height=\"20\"\r\n          fill=\"var(--blue-jeans)\"\r\n          class=\"bi bi-three-dots\"\r\n          viewBox=\"0 0 16 16\"\r\n        >\r\n          <path\r\n            d=\"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"\r\n          />\r\n        </svg>\r\n        <div class=\"dropdown\">\r\n          <p class=\"kick\" (click)=\"kickar(l.key)\">Expulsar</p>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"img-amigo\"\r\n        style.background-image=\"url({{ baseUrl }}profissionais/{{ l.imagem }})\"\r\n      ></div>\r\n      <div class=\"info-amigo\">\r\n        <p>\r\n          {{ l.responsavel }}<br /><span>{{ l.profissao }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"acoes\"\r\n    [style.display]=\"\r\n      this.profissaoSorteada.responsavel === this.nickJogador\r\n        ? 'inherit'\r\n        : 'none'\r\n    \"\r\n  >\r\n    <div class=\"acao\">\r\n      <button class=\"convidar\" (click)=\"convidar()\">{{ textoConvite }}</button>\r\n    </div>\r\n\r\n    <div class=\"acao\">\r\n      <button\r\n        [disabled]=\"desabilitado\"\r\n        [ngClass]=\"this.pronto ? 'cancelar btn-vermelho' : 'pronto btn-verde'\"\r\n        (click)=\"ficarPronto()\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "mpLu":
/*!********************************************!*\
  !*** ./src/app/quadro/quadro.component.ts ***!
  \********************************************/
/*! exports provided: QuadroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadroComponent", function() { return QuadroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_quadro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./quadro.component.html */ "Dxcq");
/* harmony import */ var _quadro_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quadro.component.css */ "uD+/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let QuadroComponent = class QuadroComponent {
    constructor() {
        this.maxNumTarefas = 8;
        this.quadroAtualizado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.tarefasArray = Object.keys(this.tarefas).map((key) => this.tarefas[key]);
        Object.keys(this.tarefas).forEach((key, index) => {
            this.tarefasArray[index].key = key;
        });
        this.dicaQuadro = this.dica;
    }
    tarefaExecutada(args) {
        this.quadroAtualizado.emit(args);
    }
    fechar() {
        this.dicaQuadro = false;
        this.dica = false;
        this.dicaChange.emit(this.dica);
    }
};
QuadroComponent.ctorParameters = () => [];
QuadroComponent.propDecorators = {
    idProfissao: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tarefas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    registro: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    corTarefa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idTarefaRecente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    quadroAtualizado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    dica: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dicaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
QuadroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'quadro',
        template: _raw_loader_quadro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quadro_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QuadroComponent);



/***/ }),

/***/ "mvYP":
/*!***********************************************!*\
  !*** ./src/app/central/central.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amigos {\r\n  padding: 0.25%;\r\n  border-radius: 3px;\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  border: 2px solid var(--box-border);\r\n\r\n  float: left;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.amigo {\r\n  width: 100%;\r\n  height: 15%;\r\n\r\n  background-color: var(--box-bg);\r\n  border-bottom: 2px solid var(--box-border);\r\n  overflow-x: auto;\r\n}\r\n\r\n.fundo-profissao {\r\n  width: 25%;\r\n  height: 100%;\r\n\r\n  margin-left: 5%;\r\n\r\n  background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n\r\n  float: left;\r\n}\r\n\r\n.img-profissao {\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.info-amigo {\r\n  width: 65%;\r\n  height: 100%;\r\n  margin-left: 5%;\r\n\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n\r\n  float: left;\r\n}\r\n\r\n.nick {\r\n  padding-top: 5%;\r\n  line-height: 0.75;\r\n  font-weight: bold;\r\n}\r\n\r\n.texto-profissao {\r\n  color: var(--blue-jeans);\r\n  font-weight: 400;\r\n}\r\n\r\n.central {\r\n  padding: 1.5%;\r\n  border-radius: 3px;\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  border: 2px solid var(--box-border);\r\n  box-sizing: border-box;\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.central div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .central {\r\n    width: 70%;\r\n    height: 100%;\r\n\r\n    margin-left: 5%;\r\n  }\r\n\r\n  .amigos {\r\n    width: 25%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .central {\r\n    width: 75%;\r\n    height: 100%;\r\n\r\n    margin-left: 5%;\r\n  }\r\n\r\n  .amigos {\r\n    width: 20%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQ0FBbUM7O0VBRW5DLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7O0VBRVgsK0JBQStCO0VBQy9CLDBDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTs7RUFFWixlQUFlOztFQUVmLGdDQUFnQzs7RUFFaEMsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7O0VBRW5CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztFQUVYLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlOztFQUVmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTs7SUFFWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZOztJQUVaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJjZW50cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1pZ29zIHtcclxuICBwYWRkaW5nOiAwLjI1JTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmFtaWdvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1JTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uaW1nLXByb2Zpc3NhbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLWFtaWdvIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmljayB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjc1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dG8tcHJvZmlzc2FvIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNlbnRyYWwge1xyXG4gIHBhZGRpbmc6IDEuNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNlbnRyYWwgZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5jZW50cmFsIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcblxyXG4gIC50ZXh0by1wcm9maXNzYW8ge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jZW50cmFsIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "s2Oy":
/*!**********************************************!*\
  !*** ./src/app/central/central.component.ts ***!
  \**********************************************/
/*! exports provided: CentralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralComponent", function() { return CentralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_central_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./central.component.html */ "58W+");
/* harmony import */ var _central_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./central.component.css */ "mvYP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _taskforce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../taskforce.service */ "tsgC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let CentralComponent = class CentralComponent {
    constructor(taskForceService, router) {
        this.taskForceService = taskForceService;
        this.router = router;
        this.keySalaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.relatorioPartida = [];
        this.dica = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.flagRelatorio = false;
            this.sala = this.taskForceService.getSala(this.keySala);
            this.sala.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe)).subscribe((s) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.numRodada = s.numRodada;
                this.statusSala = s.status;
                this.vidas = s.vidas;
                this.visibilidadeURL = s.visibilidadeURL;
                this.privacidade = s.privacidade;
                if (!(yield this.taskForceService.checarNick(this.keySala, s.lider))) {
                    this.lider = s.lider;
                }
                else {
                    this.taskForceService.designarLider(this.keySala, this.nickJogador);
                    this.lider = this.nickJogador;
                }
                if (this.visibilidadeURL) {
                    this.router.navigate(['/' + this.keySala]);
                }
                else {
                    this.router.navigate(['/']);
                }
                if (this.vidas <= 0) {
                    this.taskForceService.setStatusSala(this.keySala, 'espera');
                }
            }));
            this.listaProfissoesSorteadas =
                yield this.taskForceService.getProfissoesSorteadas(this.keySala);
            this.listaProfissoesSorteadas
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe))
                .subscribe((lista) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.keyProfissaoSorteada) {
                    if (!(yield this.taskForceService.getProfissao(this.keySala, this.keyProfissaoSorteada))) {
                        this.keySala = null;
                        this.keySalaChange.emit(this.keySala);
                        this.router.navigate(['/']);
                    }
                }
                this.numJogadores = lista.length;
                this.tempoMonitor = Math.floor((10 + this.numJogadores * 5) * Math.pow(0.9, this.numRodada));
                this.numTarefasNecessarias = Math.floor((5 + this.numJogadores * 2) * Math.pow(1.2, this.numRodada));
            }));
        });
    }
    removerProfissao() {
        this.taskForceService.removerProfissao(this.keySala, this.keyProfissaoSorteada);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    unloadHandler(event) {
        this.removerProfissao();
        if (this.numJogadores <= 1) {
            this.taskForceService.removerSala(this.keySala);
        }
    }
};
CentralComponent.ctorParameters = () => [
    { type: _taskforce_service__WEBPACK_IMPORTED_MODULE_7__["TaskforceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CentralComponent.propDecorators = {
    keySala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    keySalaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    sala: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nickJogador: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    unloadHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:unload', ['$event'],] }]
};
CentralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'central',
        template: _raw_loader_central_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 })),
                ]),
            ]),
        ],
        styles: [_central_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CentralComponent);



/***/ }),

/***/ "sVpJ":
/*!**********************************************!*\
  !*** ./src/app/monitor/monitor.component.ts ***!
  \**********************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./monitor.component.html */ "HsPz");
/* harmony import */ var _monitor_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor.component.css */ "WWLw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let MonitorComponent = class MonitorComponent {
    constructor() {
        this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.blinkText = "_";
        this.dicaMonitor = this.dica;
        setInterval(() => {
            if (this.blinkText === '_') {
                this.blinkText = " ";
            }
            else {
                this.blinkText = "_";
            }
        }, 700);
    }
    ngOnChanges() {
        document.documentElement.style.setProperty('--tamanho', this.texto.length * 0.6 + 0.6 + 0.1 + 'em');
    }
    fechar() {
        this.dicaMonitor = false;
        this.dica = false;
        this.dicaChange.emit(this.dica);
    }
};
MonitorComponent.ctorParameters = () => [];
MonitorComponent.propDecorators = {
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tempo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pausa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    corMonitor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dica: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dicaChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
MonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'monitor',
        template: _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_monitor_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MonitorComponent);



/***/ }),

/***/ "tB4E":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".painel {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.monitor {\r\n  height: 49%;\r\n  width: 100%;\r\n}\r\n\r\n.quadro {\r\n  height: 50%;\r\n  width: 100%;\r\n  margin-top: 1%;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .monitor {\r\n    height: 29%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 70%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .monitor {\r\n    height: 29%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 70%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsaURBQWlEOztBQUNqRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoicGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFpbmVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb25pdG9yIHtcclxuICBoZWlnaHQ6IDQ5JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnF1YWRybyB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9uaXRvciB7XHJcbiAgICBoZWlnaHQ6IDI5JTtcclxuICB9XHJcblxyXG4gIC5xdWFkcm8ge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb25pdG9yIHtcclxuICAgIGhlaWdodDogMjklO1xyXG4gIH1cclxuXHJcbiAgLnF1YWRybyB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "tsgC":
/*!**************************************!*\
  !*** ./src/app/taskforce.service.ts ***!
  \**************************************/
/*! exports provided: TaskforceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskforceService", function() { return TaskforceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "bSaC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let TaskforceService = class TaskforceService {
    constructor(db, http) {
        this.db = db;
        this.http = http;
    }
    baseUrl() {
        //return 'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/';
        return '';
    }
    criarSala() {
        var sala;
        var key;
        key = Math.random().toString(36).substr(2, 5);
        sala = {
            status: 'espera',
            numRodada: 1,
            vidas: 10,
            lider: ' ',
            visibilidadeURL: true,
            privacidade: true,
            profissoes: [],
            registros: [],
        };
        this.db.database.ref('salas').child(key).set(sala);
        return key;
    }
    designarLider(keySala, nick) {
        this.db.object('salas/' + keySala).update({ lider: nick });
    }
    checarExistenciaSala(keySala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            yield this.db.database
                .ref('salas/')
                .orderByKey()
                .equalTo(keySala)
                .once('value', (snap) => {
                result = snap.val() !== null;
            });
            return result;
        });
    }
    checarStatusSala(keySala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            yield this.db.database
                .ref('salas/' + keySala + '/status/')
                .once('value', (snap) => {
                result = snap.val() === 'espera';
            });
            return result;
        });
    }
    checarNick(keySala, nick) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/')
                .orderByChild('responsavel')
                .equalTo(nick)
                .once('value', (snap) => {
                result = snap.val() == null;
            });
            return result;
        });
    }
    aoSairSala(keySala, keyProfissao) {
        this.db.object('salas/' + keySala + '/profissoes/' + keyProfissao).remove();
    }
    aoDesconectarSala(keySala, keyProfissao) {
        this.db
            .object('salas/' + keySala + '/profissoes/' + keyProfissao)
            .query.ref.onDisconnect()
            .remove();
    }
    getSala(keySala) {
        return this.db.object('salas/' + keySala).valueChanges();
    }
    setStatusSala(keySala, status) {
        this.db.object('salas/' + keySala).update({ status: status });
    }
    aoDesconectarProfissao(keySala, keyProfissao) {
        this.db
            .object('salas/' + keySala + '/profissoes/' + keyProfissao)
            .query.ref.onDisconnect()
            .remove();
    }
    getProfissoes() {
        return this.http.get('assets/json/taskforce.json').toPromise();
    }
    getProfissoesSorteadas(keySala) {
        return this.db
            .list('salas/' + keySala + '/profissoes/')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((changes) => {
            return changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
    sortearProfissao(keySala, nickJogador, numRodada) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let profissoes = yield this.getProfissoes();
            let profissao;
            let result;
            let i = Math.floor(Math.random() * profissoes.length);
            let j = i;
            do {
                profissao = profissoes[j++ % profissoes.length];
                yield this.db.database
                    .ref('salas/' + keySala + '/profissoes/')
                    .orderByChild('id')
                    .equalTo(profissao.id)
                    .once('value', (snap) => {
                    result = snap.val() !== null;
                });
            } while (result && i !== j % profissoes.length);
            let numTarefas = Math.min(numRodada * 1, 8);
            numTarefas = Math.max(1, numTarefas);
            let tarefas = profissao.tarefas
                .sort(() => 0.5 - Math.random())
                .slice(0, numTarefas);
            let info = {
                id: profissao.id,
                pronto: false,
                profissao: profissao.profissao,
                imagem: profissao.imagem,
                responsavel: nickJogador,
                acertos: 0,
                erros: 0,
            };
            let keyProfissao = this.db.database
                .ref('salas/' + keySala + '/profissoes/')
                .push(info).key;
            for (let i = 0; i < tarefas.length; i++) {
                this.db.database
                    .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/')
                    .push(tarefas[i]);
            }
            return keyProfissao;
        });
    }
    sortearProfissaoMonitor(keySala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var keyProfissao;
            var snapshotTarefas;
            var j;
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/')
                .once('value', (snapshot) => {
                j = Math.floor(Math.random() * Object.keys(snapshot.val()).length);
                keyProfissao = Object.keys(snapshot.val())[j];
            });
            return keyProfissao;
        });
    }
    getProfissao(keySala, keyProfissao) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var profissao;
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                .once('value', (snapshot) => {
                profissao = snapshot.val();
            });
            return profissao;
        });
    }
    resetarProfissao(keySala, keyProfissao) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                .update({
                id: 0,
                profissao: 'desconhecido',
                imagem: '000-unknown.png',
                pronto: false,
            });
        });
    }
    removerProfissao(keySala, keyProfissao) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                .remove();
        });
    }
    sortearTarefa(keySala, keyProfissao) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var keyTarefa;
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/')
                .once('value', (snapshot) => {
                keyTarefa = Object.keys(snapshot.val())[Math.floor(Math.random() * Object.keys(snapshot.val()).length)];
            });
            return keyTarefa;
        });
    }
    getTarefa(keySala, keyProfissao, keyTarefa) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var tarefa;
            yield this.db.database
                .ref('salas/' +
                keySala +
                '/profissoes/' +
                keyProfissao +
                '/tarefas/' +
                keyTarefa)
                .once('value', (snapshot) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                tarefa = yield snapshot.val();
            }));
            return tarefa;
        });
    }
    setTarefa(keySala, keyProfissao, keyTarefa, tarefa) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' +
                keySala +
                '/profissoes/' +
                keyProfissao +
                '/tarefas/' +
                keyTarefa)
                .update(tarefa);
        });
    }
    sortearItem(tarefa) {
        switch (tarefa.tipo) {
            case 'acao':
                break;
            case 'estado':
                if (tarefa.estado[0] === tarefa.verbo) {
                    tarefa.verbo = tarefa.estado[1];
                    tarefa.texto = tarefa.eTexto[1];
                }
                else {
                    tarefa.verbo = tarefa.estado[0];
                    tarefa.texto = tarefa.eTexto[0];
                }
                break;
            case 'escolha':
                do {
                    var j = Math.floor(Math.random() * tarefa.lista.length);
                    var verbo = tarefa.lista[j];
                } while (tarefa.verbo === verbo);
                tarefa.verbo = tarefa.lista[j];
                break;
        }
        return tarefa;
    }
    adicionarRegistro(keySala, keyProfissao, keyTarefa, texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var registro;
            var idProfissao;
            var idTarefa;
            var snapshotTarefas;
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                .once('value', (snapshot) => {
                idProfissao = snapshot.val().id;
                snapshotTarefas = snapshot.child('tarefas').child(keyTarefa);
                idTarefa = snapshotTarefas.val().id;
            });
            registro = {
                idProfissao: idProfissao,
                id: idTarefa,
                ativo: true,
                concluido: false,
                texto: texto,
            };
            return this.db.database
                .ref('salas/' + keySala + '/registros/')
                .push(registro).key;
        });
    }
    getRegistro(keySala, keyRegistro) {
        return this.db
            .object('salas/' + keySala + '/registros/' + keyRegistro)
            .valueChanges();
    }
    getRegistros(keySala) {
        return this.db
            .list('salas/' + keySala + '/registros/')
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((changes) => {
            return changes.map((c) => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }));
    }
    concluirRegistro(keySala, keyProfissao, registro, vidas) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            let refRegistros = this.db.database.ref('salas/' + keySala + '/registros/');
            let acaoIncorreta = true;
            let snapshot = yield refRegistros.once('value');
            let numTarefas = 0;
            snapshot.forEach((r) => {
                if (r.val().ativo &&
                    r.val().idProfissao === registro.idProfissao &&
                    r.val().id === registro.id &&
                    r.val().texto === registro.texto) {
                    refRegistros.child(r.key).update({ ativo: false, concluido: true });
                    acaoIncorreta = false;
                    numTarefas++;
                }
            });
            if (numTarefas > 0) {
                yield this.pontuarJogador(keySala, keyProfissao, true, 0.5 * numTarefas);
                result = true;
            }
            if (acaoIncorreta) {
                this.removerVida(keySala, vidas);
                yield this.pontuarJogador(keySala, keyProfissao, false, 1);
                result = false;
            }
            return result;
        });
    }
    desabilitarRegistro(keySala, keyRegistro, keyProfissao, keyProfissaoMonitor, vidas) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let concluido = true;
            this.db.database
                .ref('salas/' + keySala + '/registros/' + keyRegistro)
                .update({ ativo: false });
            yield this.db.database
                .ref('salas/' + keySala + '/registros/' + keyRegistro + '/concluido')
                .once('value', (snapshot) => {
                concluido = snapshot.val();
            });
            if (!concluido) {
                yield this.pontuarJogador(keySala, keyProfissao, false, 0.5);
                yield this.pontuarJogador(keySala, keyProfissaoMonitor, false, 0.5);
                this.removerVida(keySala, vidas);
            }
        });
    }
    limparRegistros(keySala) {
        this.db.database.ref('salas/' + keySala + '/registros/').remove();
    }
    removerVida(keySala, vidas) {
        this.db.database.ref('salas/' + keySala).update({ vidas: vidas - 1 });
    }
    pontuarJogador(keySala, keyProfissao, acerto, valor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (acerto) {
                yield this.db.database
                    .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/acertos')
                    .once('value', (snapshot) => {
                    valor = valor + snapshot.val();
                });
                this.db.database
                    .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                    .update({ acertos: valor });
            }
            else {
                yield this.db.database
                    .ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/erros')
                    .once('value', (snapshot) => {
                    valor = valor + snapshot.val();
                });
                this.db.database
                    .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                    .update({ erros: valor });
            }
        });
    }
    adicionarRodada(keySala, rodada) {
        this.db.database.ref('salas/' + keySala).update({ numRodada: rodada + 1 });
    }
    resetarSala(keySala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala)
                .update({ vidas: 10, numRodada: 1 });
        });
    }
    removerSala(keySala) {
        this.db.database.ref('salas/' + keySala).remove();
    }
    ficarPronto(keySala, keyProfissao, valor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala + '/profissoes/' + keyProfissao)
                .update({ pronto: valor });
        });
    }
    alterarVisibilidadeURL(keySala, valor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala)
                .update({ visibilidadeURL: valor });
        });
    }
    alterarPrivacidade(keySala, valor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.database
                .ref('salas/' + keySala)
                .update({ privacidade: valor });
        });
    }
    checarPrivacidadeSala(keySala) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = false;
            yield this.db.database
                .ref('salas/' + keySala + '/privacidade/')
                .once('value', (snap) => {
                result = snap.val();
            });
            return result;
        });
    }
};
TaskforceService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskforceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TaskforceService);



/***/ }),

/***/ "uD+/":
/*!*********************************************!*\
  !*** ./src/app/quadro/quadro.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes slide-in-top {\r\n  0% {\r\n    transform: translate(-50%, -5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slide-in-top {\r\n  0% {\r\n    transform: translate(-50%, -5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.quadro {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n\r\n  border: 2px solid var(--box-border);\r\n}\r\n\r\n.tarefa {\r\n  float: left;\r\n}\r\n\r\n.vazio {\r\n  background-color: var(--box-bg);\r\n  float: left;\r\n}\r\n\r\n.dica {\r\n  position: absolute;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n\r\n  -webkit-animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s\r\n    both;\r\n\r\n          animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s\r\n    both;\r\n}\r\n\r\n.fechar {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 50%;\r\n    height: 25%;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 12.5%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 50%;\r\n    height: 25%;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 10%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 95%;\r\n    height: 15%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 0.75%;\r\n    top: -2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.6em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 15%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixVQUFVO0VBQ1o7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCOztFQUVsQjtRQUNNOztVQUROO1FBQ007QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGlEQUFpRDs7QUFDakQ7RUFDRTs7SUFFRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFOztJQUVFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFOztJQUVFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoicXVhZHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5xdWFkcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxufVxyXG5cclxuLnRhcmVmYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi52YXppbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRpY2Ege1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAwLjc1c1xyXG4gICAgYm90aDtcclxufVxyXG5cclxuLmZlY2hhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50YXJlZmEsXHJcbiAgLnZhemlvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiAtNy41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGFyZWZhLFxyXG4gIC52YXppbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IC03LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC50YXJlZmEsXHJcbiAgLnZhemlvIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgfVxyXG5cclxuICAucXVlYnJhLWxpbmhhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAwLjc1JTtcclxuICAgIHRvcDogLTIuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAudGFyZWZhLFxyXG4gIC52YXppbyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IC03LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRhcmVmYSxcclxuICAudmF6aW8ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICB9XHJcblxyXG4gIC5xdWVicmEtbGluaGEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiA1JTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "x3+4":
/*!******************************************!*\
  !*** ./src/app/botao/botao.component.ts ***!
  \******************************************/
/*! exports provided: BotaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotaoComponent", function() { return BotaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./botao.component.html */ "43GX");
/* harmony import */ var _botao_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./botao.component.css */ "7YQl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let BotaoComponent = class BotaoComponent {
    constructor() {
        this.clique = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.checarTipoAcao();
    }
    checarTipoAcao() {
        switch (this.tipo) {
            case 'botao':
                this.displayBotao = 'block';
                break;
            case 'estado':
                this.displayBotao = 'block';
                break;
            case 'lista':
                this.displayLista = 'block';
                break;
        }
    }
    inverter() {
        if (this.tipo == 'estado') {
            if (this.cor == 'verde') {
                this.texto = this.estado[1];
                this.cor = 'vermelho';
            }
            else if (this.cor == 'vermelho') {
                this.texto = this.estado[0];
                this.cor = 'verde';
            }
        }
    }
};
BotaoComponent.ctorParameters = () => [];
BotaoComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['b',] }],
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['l',] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    idProfissao: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tipo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    cor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tamanhoFonte: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    estado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    lista: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clickCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    clique: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
BotaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'botao',
        template: _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_botao_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BotaoComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");




Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})
    .catch((err) => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map