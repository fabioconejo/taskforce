(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Documentos\Angular\Projetos\taskforce\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2RpG":
    /*!*************************************************!*\
      !*** ./src/app/contagem/contagem.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function RpG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loader-6 {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  transform: rotate(0);\r\n}\r\n\r\n.loader-6 p {\r\n  -webkit-animation: loader-6-3 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n          animation: loader-6-3 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n\topacity: 0;\r\n}\r\n\r\n.loader-6 span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.loader-6 span::before,\r\n.loader-6 span::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  border: 2px solid var(--eletric-purple);\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  -webkit-animation: loader-6-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3;\r\n  animation: loader-6-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 3;\r\n}\r\n\r\n@-webkit-keyframes loader-6-1 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-1 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1.5);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.loader-6 span::after {\r\n  -webkit-animation: loader-6-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n  animation: loader-6-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s 3;\r\n}\r\n\r\n@-webkit-keyframes loader-6-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-2 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes loader-6-3 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes loader-6-3 {\r\n  0% {\r\n    transform: translate3d(0, 0, 0) scale(0);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translate3d(0, 0, 0) scale(1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 20vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 24vw;\r\n\t\twidth: 24vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 24vw;\r\n\t\twidth: 24vw;\r\n\t}\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 16vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 20vw;\r\n\t\twidth: 20vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 20vw;\r\n\t\twidth: 20vw;\r\n\t}\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 10vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 14vw;\r\n\t\twidth: 14vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 14vw;\r\n\t\twidth: 14vw;\r\n\t}\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 6vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n\t.loader-6 p {\r\n\t\tfont-size: 6vw;\r\n\t}\r\n\t\r\n\t.loader-6 span {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n\r\n\t.loader-6 span::before,\r\n\t.loader-6 span::after {\r\n\t\theight: 10vw;\r\n\t\twidth: 10vw;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhZ2VtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4RUFBc0U7VUFBdEUsc0VBQXNFO0NBQ3ZFLFVBQVU7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdFQUF3RTtFQUN4RSxnRUFBZ0U7QUFDbEU7O0FBQ0E7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7RUFDQTtJQUNFLDBDQUEwQztJQUMxQyxVQUFVO0VBQ1o7QUFDRjs7QUFUQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMENBQTBDO0lBQzFDLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0UsOEVBQThFO0VBQzlFLHNFQUFzRTtBQUN4RTs7QUFDQTtFQUNFO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtBQUNGOztBQVRBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7Q0FDWjs7Q0FFQTs7RUFFQyxZQUFZO0VBQ1osV0FBVztDQUNaO0FBQ0Q7O0FBRUEsb0VBQW9FOztBQUNwRTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixXQUFXO0NBQ1o7O0NBRUE7O0VBRUMsWUFBWTtFQUNaLFdBQVc7Q0FDWjtBQUNEOztBQUVBLHFEQUFxRDs7QUFDckQ7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRDs7QUFFQSxtREFBbUQ7O0FBQ25EO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRDs7QUFFQSxvRUFBb0U7O0FBQ3BFO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxZQUFZO0VBQ1osV0FBVztDQUNaOztDQUVBOztFQUVDLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFDRCIsImZpbGUiOiJjb250YWdlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci02IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLmxvYWRlci02IHAge1xyXG4gIGFuaW1hdGlvbjogbG9hZGVyLTYtMyAxLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDAuMjVzIDM7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLmxvYWRlci02IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcbi5sb2FkZXItNiBzcGFuOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZWxldHJpYy1wdXJwbGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXItNi0xIDEuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMztcclxuICBhbmltYXRpb246IGxvYWRlci02LTEgMS41cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAzO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGVyLTYtMSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyLTYtMiAxLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpIDAuMjVzIDM7XHJcbiAgYW5pbWF0aW9uOiBsb2FkZXItNi0yIDEuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMC4yNXMgMztcclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlci02LTIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlci02LTMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHQubG9hZGVyLTYgcCB7XHJcblx0XHRmb250LXNpemU6IDIwdnc7XHJcblx0fVxyXG5cdFxyXG5cdC5sb2FkZXItNiBzcGFuIHtcclxuXHRcdGhlaWdodDogMjR2dztcclxuXHRcdHdpZHRoOiAyNHZ3O1xyXG5cdH1cclxuXHJcblx0LmxvYWRlci02IHNwYW46OmJlZm9yZSxcclxuXHQubG9hZGVyLTYgc3Bhbjo6YWZ0ZXIge1xyXG5cdFx0aGVpZ2h0OiAyNHZ3O1xyXG5cdFx0d2lkdGg6IDI0dnc7XHJcblx0fVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmxvYWRlci02IHAge1xyXG5cdFx0Zm9udC1zaXplOiAxNnZ3O1xyXG5cdH1cclxuXHRcclxuXHQubG9hZGVyLTYgc3BhbiB7XHJcblx0XHRoZWlnaHQ6IDIwdnc7XHJcblx0XHR3aWR0aDogMjB2dztcclxuXHR9XHJcblxyXG5cdC5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcblx0LmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuXHRcdGhlaWdodDogMjB2dztcclxuXHRcdHdpZHRoOiAyMHZ3O1xyXG5cdH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG5cdC5sb2FkZXItNiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMTB2dztcclxuXHR9XHJcblx0XHJcblx0LmxvYWRlci02IHNwYW4ge1xyXG5cdFx0aGVpZ2h0OiAxNHZ3O1xyXG5cdFx0d2lkdGg6IDE0dnc7XHJcblx0fVxyXG5cclxuXHQubG9hZGVyLTYgc3Bhbjo6YmVmb3JlLFxyXG5cdC5sb2FkZXItNiBzcGFuOjphZnRlciB7XHJcblx0XHRoZWlnaHQ6IDE0dnc7XHJcblx0XHR3aWR0aDogMTR2dztcclxuXHR9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG5cdC5sb2FkZXItNiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogNnZ3O1xyXG5cdH1cclxuXHRcclxuXHQubG9hZGVyLTYgc3BhbiB7XHJcblx0XHRoZWlnaHQ6IDEwdnc7XHJcblx0XHR3aWR0aDogMTB2dztcclxuXHR9XHJcblxyXG5cdC5sb2FkZXItNiBzcGFuOjpiZWZvcmUsXHJcblx0LmxvYWRlci02IHNwYW46OmFmdGVyIHtcclxuXHRcdGhlaWdodDogMTB2dztcclxuXHRcdHdpZHRoOiAxMHZ3O1xyXG5cdH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblx0LmxvYWRlci02IHAge1xyXG5cdFx0Zm9udC1zaXplOiA2dnc7XHJcblx0fVxyXG5cdFxyXG5cdC5sb2FkZXItNiBzcGFuIHtcclxuXHRcdGhlaWdodDogMTB2dztcclxuXHRcdHdpZHRoOiAxMHZ3O1xyXG5cdH1cclxuXHJcblx0LmxvYWRlci02IHNwYW46OmJlZm9yZSxcclxuXHQubG9hZGVyLTYgc3Bhbjo6YWZ0ZXIge1xyXG5cdFx0aGVpZ2h0OiAxMHZ3O1xyXG5cdFx0d2lkdGg6IDEwdnc7XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "43GX":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/botao/botao.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function GX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button\r\n  #b\r\n    [ngClass]=\"cor\"\r\n    [style.display]=\"displayBotao\"\r\n    (click)=\"inverter(); this.clique.emit({'key': key, 'id': id, 'idProfissao':idProfissao, 'tipo': tipo, 'texto': texto})\"\r\n  >\r\n    {{texto}}\r\n</button>\r\n\r\n<select\r\n    [ngClass]=\"cor\"\r\n    [style.display]=\"displayLista\"\r\n    #l\r\n    (change)=\"this.clique.emit({'key': key, 'id': id, 'idProfissao':idProfissao, 'tipo': tipo, 'texto': l.value})\"\r\n  >\r\n    <option value=\"\" selected hidden disabled>{{texto}}</option>\r\n    <option *ngFor=\"let l of lista\" [value]=\"l\">{{l}}</option>\r\n  </select>";
      /***/
    },

    /***/
    "58W+":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/central/central.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"amigos\">\r\n  <div class=\"amigo\" *ngFor=\"let l of listaProfissoesSorteadas | async\">\r\n    <div class=\"fundo-profissao\">\r\n      <div\r\n        class=\"img-profissao\"\r\n        style.background-image=\"url({{ baseUrl }}profissionais/{{ l.imagem }})\"\r\n      ></div>\r\n    </div>\r\n    <div class=\"info-amigo\">\r\n      <p class=\"nick\">\r\n        {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n          l.profissao\r\n        }}</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"central\">\r\n  <div *ngIf=\"statusSala === 'espera' && flagRelatorio === false\" [@fade]>\r\n    <sala\r\n      [keySala]=\"keySala\"\r\n      [(keyProfissaoSorteada)]=\"keyProfissaoSorteada\"\r\n      [(profissaoSorteada)]=\"profissaoSorteada\"\r\n      [nickJogador]=\"nickJogador\"\r\n      [listaProfissoesSorteadas]=\"listaProfissoesSorteadas\"\r\n      [numRodada]=\"numRodada\"\r\n      [vidas]=\"vidas\"\r\n      [privacidade]=\"privacidade\"\r\n      [visibilidadeURL]=\"visibilidadeURL\"\r\n      [lider]=\"lider\"\r\n    >\r\n    </sala>\r\n  </div>\r\n  <div *ngIf=\"statusSala === 'jogo'\" [@fade]>\r\n    <painel\r\n      [keySala]=\"keySala\"\r\n      [keyJogador]=\"keyJogador\"\r\n      [vidas]=\"vidas\"\r\n      [keyProfissaoSorteada]=\"keyProfissaoSorteada\"\r\n      [profissaoSorteada]=\"profissaoSorteada\"\r\n      [tempoMonitor]=\"tempoMonitor\"\r\n      [numTarefasNecessarias]=\"numTarefasNecessarias\"\r\n      [numRodada]=\"numRodada\"\r\n      [(flagRelatorio)]=\"flagRelatorio\"\r\n      [(dica)]=\"dica\"\r\n    >\r\n    </painel>\r\n  </div>\r\n  <div *ngIf=\"statusSala === 'contagem'\" [@fade]><contagem [keySala]=\"keySala\"></contagem></div>\r\n  <div *ngIf=\"statusSala === 'espera' && flagRelatorio === true\" [@fade]>\r\n    <relatorio\r\n      [keySala]=\"keySala\"\r\n      [vidas]=\"vidas\"\r\n      [keyProfissaoSorteada]=\"keyProfissaoSorteada\"\r\n      [listaProfissoesSorteadas]=\"listaProfissoesSorteadas\"\r\n      [(relatorioPartida)]=\"relatorioPartida\"\r\n      [(flagRelatorio)]=\"flagRelatorio\"\r\n    ></relatorio>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5ZiT":
    /*!*********************************************!*\
      !*** ./src/app/tarefa/tarefa.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ZiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tarefa {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--box-bg);\r\n  border: 1px solid var(--box-border);\r\n  box-sizing: border-box;\r\n}\r\n\r\n.verde {\r\n  -webkit-animation-name: correto;\r\n          animation-name: correto;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.vermelho {\r\n  -webkit-animation-name: errado;\r\n          animation-name: errado;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.frase {\r\n  width: 100%;\r\n  height: 35%;\r\n  margin-top: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.botao {\r\n  width: 90%;\r\n  height: 40%;\r\n  margin-left: 5%;\r\n}\r\n\r\n@-webkit-keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n@keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n    border-width: 2px;\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n    border-width: 1px;\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .frase {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .frase {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .frase {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcmVmYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsbUNBQW1DO0VBQ25DLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLHVDQUErQjtVQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UscURBQXFEO0lBQ3JELHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UscURBQXFEO0lBQ3JELHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtJQUMvQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtJQUMvQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InRhcmVmYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmVmYSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnZlcmRlIHtcclxuICBhbmltYXRpb24tbmFtZTogY29ycmV0bztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG4udmVybWVsaG8ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBlcnJhZG87XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG5cclxuLmZyYXNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm90YW8ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvcnJldG8ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbWVkaXVtLXNlYS1ncmVlbikgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZGl1bS1zZWEtZ3JlZW4pO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGVycmFkbyB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS10YXJ0LW9yYW5nZSkgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5mcmFzZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZnJhc2Uge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmZyYXNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "7YQl":
    /*!*******************************************!*\
      !*** ./src/app/botao/botao.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function YQl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button,\r\nselect {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  margin-bottom: 6px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n  transition: all 0.05s;\r\n  font-size: inherit;\r\n  -webkit-tap-highlight-color: transparent;\r\n  display: none;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n\r\nbutton:active,\r\nselect:active {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\nselect {\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23186a94' class='bi bi-caret-down-fill' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: 95% center;\r\n}\r\n\r\noption {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 0.8em;\r\n  background-color: var(--monitor-bg);\r\n  color: var(--semi-white);\r\n  font-family: 'Roboto Mono';\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.azul {\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.azul:active {\r\n  box-shadow: 0px 2px var(--saphire-blue);\r\n}\r\n\r\n.verde {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.verde:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.vermelho {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.vermelho:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n.branco {\r\n  background-color: var(--cultured);\r\n  color: var(--saphire-blue);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n}\r\n\r\n.branco:active {\r\n  box-shadow: 0px 2px var(--silver-chalice);\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  button,\r\n  select {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  button,\r\n  select {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  button,\r\n  select {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  button,\r\n  select {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  button,\r\n  select {\r\n    font-size: 26px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdGFvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QiwwVEFBMFQ7RUFDMVQsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBLGlEQUFpRDs7QUFDakQ7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJib3Rhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5idXR0b246YWN0aXZlLFxyXG5zZWxlY3Q6YWN0aXZlIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPSclMjMxODZhOTQnIGNsYXNzPSdiaSBiaS1jYXJldC1kb3duLWZpbGwnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J003LjI0NyAxMS4xNCAyLjQ1MSA1LjY1OEMxLjg4NSA1LjAxMyAyLjM0NSA0IDMuMjA0IDRoOS41OTJhMSAxIDAgMCAxIC43NTMgMS42NTlsLTQuNzk2IDUuNDhhMSAxIDAgMCAxLTEuNTA2IDB6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIGNlbnRlcjtcclxufVxyXG5cclxub3B0aW9uIHtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgY29sb3I6IHZhcigtLXNlbWktd2hpdGUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4uYXp1bCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNhcGhpcmUtYmx1ZSk7XHJcbn1cclxuXHJcbi5henVsOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1zYXBoaXJlLWJsdWUpO1xyXG59XHJcblxyXG4udmVyZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1zZWEtZ3JlZW4pO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zZWEtZ3JlZW4pO1xyXG59XHJcblxyXG4udmVyZGU6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IHZhcigtLXNlYS1ncmVlbik7XHJcbn1cclxuXHJcbi52ZXJtZWxobyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4udmVybWVsaG86YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IHZhcigtLWZpcmVicmljayk7XHJcbn1cclxuXHJcbi5icmFuY28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBjb2xvcjogdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxufVxyXG5cclxuLmJyYW5jbzphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgYnV0dG9uLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgYnV0dG9uLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgYnV0dG9uLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIGJ1dHRvbixcclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "9ixo":
    /*!********************************************!*\
      !*** ./src/app/inicio/inicio.component.ts ***!
      \********************************************/

    /*! exports provided: InicioComponent */

    /***/
    function ixo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
        return InicioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "fx4J");
      /* harmony import */


      var _inicio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.component.css */
      "Ll4m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");

      var InicioComponent = /*#__PURE__*/function () {
        function InicioComponent(taskForceService, router) {
          var _this = this;

          _classCallCheck(this, InicioComponent);

          this.taskForceService = taskForceService;
          this.router = router;
          this.keySalaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nickJogadorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.mensagem = '';
          this.numCarrossel = 4;
          this.carrossel = [{
            imagem: 'tutorial-0.png',
            texto: 'Chama a galera para um chat de voz (sugestão de 4 a 10 pessoas)'
          }, {
            imagem: 'tutorial-1.png',
            texto: 'Veja qual profissão foi sorteada para você e para seus amigos'
          }, {
            imagem: 'tutorial-2.png',
            texto: 'Fique atento à tarefa exibida no monitor e informe as tarefas que não são suas'
          }, {
            imagem: 'tutorial-3.png',
            texto: 'Execute as tarefas que estão na sua responsabilidade'
          }, {
            imagem: 'tutorial-4.png',
            texto: 'Cuidado, cada falha significa vida a menos. Sobreviva o maior número de rodadas que conseguir'
          }];
          this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
          this.router.events.subscribe(function (val) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RoutesRecognized"])) {
                        _context.next = 12;
                        break;
                      }

                      _context.prev = 1;
                      this.keySala = val.state.root.firstChild.params['keySala'];
                      _context.next = 5;
                      return this.taskForceService.checarExistenciaSala(this.keySala);

                    case 5:
                      if (_context.sent) {
                        _context.next = 8;
                        break;
                      }

                      this.keySala = null;
                      this.router.navigate(['/']);

                    case 8:
                      _context.next = 12;
                      break;

                    case 10:
                      _context.prev = 10;
                      _context.t0 = _context["catch"](1);

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 10]]);
            }));
          });
        }

        _createClass(InicioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var img;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      img = ['001-farmer.svg', '002-artist.svg', '003-captain.svg', '004-nurse.svg', '005-clown.svg', '006-doctor.svg', '007-detective.svg', '008-maid.svg', '009-student.svg', '010-mechanic.svg', '011-judge.svg', '012-wrestling.svg', '013-mafia.svg', '014-military.svg', '015-diver.svg', '016-taxi-driver.svg', '017-surgeon.svg', '018-thief.svg', '019-hacker.svg', '020-web.svg', '021-lumberjack.svg', '022-basketball-player.svg', '023-athlete.svg', '024-postman.svg', '025-priest.svg', '026-hunter.svg', '027-sailor.svg', '028-welder.svg', '029-nun.svg', '030-soldier.svg', '031-air-hostess.svg', '032-guide.svg', '033-courier.svg', '034-racer.svg', '035-astronaut.svg', '036-butler.svg', '037-engineer.svg', '038-cooker.svg', '039-chef.svg', '040-waiter.svg', '041-photographer.svg', '042-singer.svg', '043-teacher.svg', '044-scientist.svg', '045-police.svg', '046-telemarketer.svg', '047-secretary.svg', '048-office-worker.svg', '049-firefighter.svg', '050-pilot.svg'];
                      this.nickJogador = '';
                      this.imagemBox = img[Math.floor(Math.random() * img.length)];
                      setInterval(function () {
                        _this2.imagemBox = img[Math.floor(Math.random() * img.length)];
                      }, 4000);
                      this.acessarCarrossel(0);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "acessarCarrossel",
          value: function acessarCarrossel(num) {
            var _this3 = this;

            clearInterval(this.intervaloCarrossel);
            this.numCarrossel = num;
            this.intervaloCarrossel = setInterval(function () {
              _this3.numCarrossel = num++ % 5;
            }, 5000);
          }
        }, {
          key: "onKey",
          value: function onKey(event) {
            this.nickJogador = event.target.value;
            this.mensagem = '';
          }
        }, {
          key: "criarSala",
          value: function criarSala() {
            if (this.nickJogador === '') {
              this.mensagem = 'O nick não pode estar vazio';
              return;
            }

            this.keySala = this.taskForceService.criarSala();
            this.entrarSala();
          }
        }, {
          key: "entrarSala",
          value: function entrarSala() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.mensagem = '';

                      if (!(this.nickJogador === '')) {
                        _context3.next = 4;
                        break;
                      }

                      this.mensagem = 'O nick não pode estar vazio';
                      return _context3.abrupt("return");

                    case 4:
                      _context3.next = 6;
                      return this.taskForceService.checarExistenciaSala(this.keySala);

                    case 6:
                      if (_context3.sent) {
                        _context3.next = 9;
                        break;
                      }

                      this.mensagem = 'Esta sala não existe mais';
                      return _context3.abrupt("return");

                    case 9:
                      _context3.next = 11;
                      return this.taskForceService.checarPrivacidadeSala(this.keySala);

                    case 11:
                      if (_context3.sent) {
                        _context3.next = 14;
                        break;
                      }

                      this.mensagem = 'A sala está trancada';
                      return _context3.abrupt("return");

                    case 14:
                      _context3.next = 16;
                      return this.taskForceService.checarStatusSala(this.keySala);

                    case 16:
                      if (_context3.sent) {
                        _context3.next = 19;
                        break;
                      }

                      this.mensagem = 'A sala em partida, aguarde';
                      return _context3.abrupt("return");

                    case 19:
                      _context3.next = 21;
                      return this.taskForceService.checarNick(this.keySala, this.nickJogador);

                    case 21:
                      if (_context3.sent) {
                        _context3.next = 24;
                        break;
                      }

                      this.mensagem = 'O nick já está em uso';
                      return _context3.abrupt("return");

                    case 24:
                      this.keySalaChange.emit(this.keySala);
                      this.nickJogadorChange.emit(this.nickJogador);
                      this.router.navigate(['/' + this.keySala]);

                    case 27:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return InicioComponent;
      }();

      InicioComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_5__["TaskforceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      InicioComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keySalaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nickJogador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nickJogadorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'inicio',
        template: _raw_loader_inicio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".jogo {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inicio {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  box-sizing: border-box;\r\n  padding: 1%;\r\n}\r\n\r\n.central {\r\n  height: 100%;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .jogo {\r\n    padding: 5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .jogo {\r\n    padding: 5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .jogo {\r\n    padding: 5%;\r\n    padding-top: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUEsaURBQWlEOztBQUNqRDtBQUNBOztBQUVBLG9FQUFvRTs7QUFDcEU7QUFDQTs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5pbmljaW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmNlbnRyYWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuam9nbyB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5qb2dvIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmpvZ28ge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMi41JTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
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
      /***/
    },

    /***/
    "CwaN":
    /*!************************************************!*\
      !*** ./src/app/contagem/contagem.component.ts ***!
      \************************************************/

    /*! exports provided: ContagemComponent */

    /***/
    function CwaN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContagemComponent", function () {
        return ContagemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contagem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contagem.component.html */
      "R44c");
      /* harmony import */


      var _contagem_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contagem.component.css */
      "2RpG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");

      var ContagemComponent = /*#__PURE__*/function () {
        function ContagemComponent(taskForceService) {
          _classCallCheck(this, ContagemComponent);

          this.taskForceService = taskForceService;
          this.numero = 3;
        }

        _createClass(ContagemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.contagem = setInterval(function () {
              _this4.numero--;

              if (_this4.numero <= 0) {
                _this4.taskForceService.setStatusSala(_this4.keySala, 'jogo');

                _this4.numero = 0;
              }
            }, 1600);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.contagem);
          }
        }]);

        return ContagemComponent;
      }();

      ContagemComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_4__["TaskforceService"]
        }];
      };

      ContagemComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ContagemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'contagem',
        template: _raw_loader_contagem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contagem_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContagemComponent);
      /***/
    },

    /***/
    "DwX5":
    /*!****************************************!*\
      !*** ./src/app/sala/sala.component.ts ***!
      \****************************************/

    /*! exports provided: SalaComponent */

    /***/
    function DwX5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaComponent", function () {
        return SalaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sala_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sala.component.html */
      "j6NB");
      /* harmony import */


      var _sala_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sala.component.css */
      "EeW4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");

      var SalaComponent = /*#__PURE__*/function () {
        function SalaComponent(taskForceService, router) {
          _classCallCheck(this, SalaComponent);

          this.taskForceService = taskForceService;
          this.router = router;
          this.keyProfissaoSorteadaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.profissaoSorteadaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.textoConvite = 'Convidar';
          this.keyProfissaoSorteadaAnterior = '';
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
        }

        _createClass(SalaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.desabilitado = true;
                      this.taskForceService.limparRegistros(this.keySala);
                      _context4.next = 4;
                      return this.sortearProfissao();

                    case 4:
                      this.profissaoSorteadaChange.emit(this.profissaoSorteada);
                      this.keyProfissaoSorteadaChange.emit(this.keyProfissaoSorteada);
                      _context4.next = 8;
                      return this.removerProfissao();

                    case 8:
                      this.pronto = false;
                      setTimeout(function () {
                        _this5.desabilitado = false;
                      }, 1000);
                      this.listaProfissoesSorteadas.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (lista) {
                        var total = lista.length;
                        var prontos = 0;
                        lista.forEach(function (l) {
                          if (l.pronto) {
                            prontos++;
                          }
                        });

                        if (prontos === total && prontos > 0) {
                          _this5.taskForceService.setStatusSala(_this5.keySala, 'contagem');
                        }
                      });

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "sortearProfissao",
          value: function sortearProfissao() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.keyProfissaoSorteadaAnterior = this.keyProfissaoSorteada;
                      _context5.next = 3;
                      return this.taskForceService.sortearProfissao(this.keySala, this.nickJogador, this.numRodada);

                    case 3:
                      this.keyProfissaoSorteada = _context5.sent;
                      _context5.next = 6;
                      return this.taskForceService.getProfissao(this.keySala, this.keyProfissaoSorteada);

                    case 6:
                      this.profissaoSorteada = _context5.sent;

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "removerProfissao",
          value: function removerProfissao() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.taskForceService.removerProfissao(this.keySala, this.keyProfissaoSorteadaAnterior);

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "alterarVisibilidadeURL",
          value: function alterarVisibilidadeURL() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.visibilidadeURL = !this.visibilidadeURL;
                      _context7.next = 3;
                      return this.taskForceService.alterarVisibilidadeURL(this.keySala, this.visibilidadeURL);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "alterarPrivacidade",
          value: function alterarPrivacidade() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.privacidade = !this.privacidade;
                      _context8.next = 3;
                      return this.taskForceService.alterarPrivacidade(this.keySala, this.privacidade);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "convidar",
          value: function convidar() {
            var _this6 = this;

            var url = window.location.href;

            if (url.substring(url.length - 5) !== this.keySala) {
              url += this.keySala;
            }

            navigator.clipboard.writeText(url);
            this.textoConvite = 'Link copiado!';
            setTimeout(function () {
              _this6.textoConvite = 'Convidar';
            }, 3000);
          }
        }, {
          key: "kickar",
          value: function kickar(keyProfissao) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.taskForceService.removerProfissao(this.keySala, keyProfissao);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "ficarPronto",
          value: function ficarPronto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.pronto = !this.pronto;
                      _context10.next = 3;
                      return this.taskForceService.ficarPronto(this.keySala, this.keyProfissaoSorteada, this.pronto);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return SalaComponent;
      }();

      SalaComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_7__["TaskforceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      SalaComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keyProfissaoSorteada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keyProfissaoSorteadaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        profissaoSorteada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        profissaoSorteadaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nickJogador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        numRodada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vidas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listaProfissoesSorteadas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        visibilidadeURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        privacidade: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SalaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sala',
        template: _raw_loader_sala_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SalaComponent);
      /***/
    },

    /***/
    "Dxcq":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quadro/quadro.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dxcq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"quadro\">\r\n  <div class=\"tarefa\" *ngFor=\"let t of tarefasArray\">\r\n    <tarefa\r\n      [key]=\"t.key\"\r\n      [id]=\"t.id\"\r\n      [idProfissao]=\"idProfissao\"\r\n      [tipo]=\"t.tipo\"\r\n      [frase]=\"t.complemento\"\r\n      [texto]=\"t.verbo\"\r\n      [estado]=\"t.estado\"\r\n      [lista]=\"t.lista\"\r\n      [registro]=\"registro\"\r\n      [corTarefa]=\"corTarefa\"\r\n      [idTarefaRecente]=\"idTarefaRecente\"\r\n      (tarefaExecutada)=\"tarefaExecutada($event)\"\r\n    ></tarefa>\r\n  </div>\r\n  <div\r\n    class=\"vazio\"\r\n    *ngFor=\"let item of [].constructor(maxNumTarefas - tarefasArray.length)\"\r\n  ></div>\r\n  <div class=\"dica\" [style.display]=\"dicaQuadro ? 'grid' : 'none'\">\r\n    Clique no botão para executar a tarefa, <br class=\"quebra-linha\">mas cuidado, tarefas erradas custam\r\n    1 vida\r\n    <div class=\"fechar\" (click)=\"fechar()\">x</div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "EeW4":
    /*!*****************************************!*\
      !*** ./src/app/sala/sala.component.css ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function EeW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sala {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  float: left;\r\n}\r\n\r\n.fundo-profissao {\r\n  background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n\r\n  float: left;\r\n}\r\n\r\n.profissao-jogador {\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  padding: 1.25%;\r\n  box-sizing: border-box;\r\n  border: 2px solid var(--box-border);\r\n  border-left: 5px solid var(--cultured);\r\n}\r\n\r\n.cabecalho {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.img-coracao {\r\n  position: absolute;\r\n\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/heart.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  right: 0;\r\n}\r\n\r\n.img-coracao:after {\r\n  content: '';\r\n  display: block;\r\n  padding-bottom: 100%;\r\n}\r\n\r\n.img-coroa {\r\n  position: absolute;\r\n\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/crown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  left: 0;\r\n}\r\n\r\n.img-coroa:after {\r\n  content: '';\r\n  display: block;\r\n  padding-bottom: 100%;\r\n}\r\n\r\n.num-vidas {\r\n  width: 100%;\r\n  height: 100%;\r\n  float: right;\r\n  position: absolute;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  color: var(--white);\r\n  font-weight: bold;\r\n}\r\n\r\n.rodada {\r\n  width: 100%;\r\n}\r\n\r\n.rodada p {\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.img-jogador {\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/profissionais/000-unknown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.info {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.info p {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n\r\n  padding: 2.5% 0%;\r\n}\r\n\r\n.info span {\r\n  font-weight: bold;\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.configuracoes {\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  padding: 1.25%;\r\n  box-sizing: border-box;\r\n  border: 2px solid var(--box-border);\r\n  overflow: auto;\r\n}\r\n\r\n.titulo-config {\r\n  width: 100%;\r\n  height: 25%;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  border-bottom: 1px solid var(--box-border);\r\n  font-weight: bold;\r\n}\r\n\r\n.item-config {\r\n  width: 100%;\r\n  height: 35%;\r\n  border-bottom: 1px solid var(--box-border);\r\n}\r\n\r\n.texto-item-config {\r\n  width: 60%;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  float: left;\r\n}\r\n\r\n.acao-item-config {\r\n  width: 40%;\r\n  height: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  float: left;\r\n}\r\n\r\n.acao-item-config button {\r\n  height: 60%;\r\n  width: 80%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.acao-item-config button:disabled,\r\n.acao-item-config button[disabled] {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.url-visivel::before {\r\n  content: 'Visível';\r\n}\r\n\r\n.url-oculto::before {\r\n  content: 'Oculto';\r\n}\r\n\r\n.privacidade-aberta::before {\r\n  content: 'Aberta';\r\n}\r\n\r\n.privacidade-fechada::before {\r\n  content: 'Fechada';\r\n}\r\n\r\n.amigos {\r\n  float: left;\r\n  overflow-y: auto;\r\n}\r\n\r\n.profissao-amigo {\r\n  position: relative;\r\n  float: left;\r\n  background-color: var(--box-bg);\r\n  border-radius: 3px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\r\n  box-sizing: border-box;\r\n  padding: 1%;\r\n  border: 2px solid var(--box-border);\r\n  border-left: 5px solid var(--cultured);\r\n}\r\n\r\n.lista-acoes {\r\n  position: absolute;\r\n  top: 2.5%;\r\n  right: 2.5%;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-coroa-2 {\r\n  position: absolute;\r\n  top: 2.5%;\r\n  right: 2.5%;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/crown.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.dropdown {\r\n  position: absolute;\r\n  right: 0;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  padding: 50% 100%;\r\n\r\n  outline: none;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  max-height: 0;\r\n  transition: opacity 0.1s, z-index 0.1s, max-height 5s;\r\n}\r\n\r\n.kick:hover {\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.lista-acoes:focus .dropdown {\r\n  opacity: 1;\r\n  z-index: 100;\r\n  max-height: 100vh;\r\n  transition: opacity 0.2s, z-index 0.2s, max-height 0.2s;\r\n}\r\n\r\n.img-amigo {\r\n  float: left;\r\n  background-image: url('https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/profissionais/000-unknown.png');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n.info-amigo {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  float: left;\r\n}\r\n\r\n.info-amigo p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.info-amigo span {\r\n  color: var(--blue-jeans);\r\n  font-weight: bold;\r\n  overflow: auto;\r\n}\r\n\r\n.acoes {\r\n  float: left;\r\n}\r\n\r\n.acao {\r\n  float: left;\r\n}\r\n\r\n.kickar {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.kickar:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n.convidar {\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.convidar:active {\r\n  box-shadow: 0px 2px var(--black-fogra);\r\n}\r\n\r\n.pronto::before {\r\n  content: 'Pronto';\r\n}\r\n\r\n.cancelar::before {\r\n  content: 'Cancelar';\r\n}\r\n\r\n.btn-verde {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.btn-verde:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.btn-vermelho {\r\n  background-color: var(--tart-orange);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--firebrick);\r\n}\r\n\r\n.btn-vermelho:active {\r\n  box-shadow: 0px 2px var(--firebrick);\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .container {\r\n    height: 40%;\r\n    width: 100%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    display: none;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    width: 97.5%;\r\n    height: 95%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 7.5%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .info {\r\n    height: 12.5%;\r\n    margin-top: 2%;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .info p {\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.2em;\r\n  }\r\n\r\n  .amigos {\r\n    width: 100%;\r\n    height: 47.5%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 33%;\r\n    width: 97.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .acoes {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin: 0;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .container {\r\n    height: 40%;\r\n    width: 100%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    display: none;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    width: 97.5%;\r\n    height: 95%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 6.25%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 5.5vw;\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 1%;\r\n  }\r\n\r\n  .info {\r\n    height: 12.5%;\r\n    margin-top: 2%;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .info p {\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .amigos {\r\n    width: 100%;\r\n    height: 47.5%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 33%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .acoes {\r\n    width: 100%;\r\n    height: 7.5%;\r\n    margin: 0;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 47.5%;\r\n    margin: 1.25%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 10%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 7.5%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 3.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 60%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 25%;\r\n    margin-top: 2.5%;\r\n    font-size: 3vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 97.5%;\r\n    margin: 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 40%;\r\n    height: 100%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 60%;\r\n    height: 100%;\r\n    font-size: 2.75vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 8.75%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 10%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 2.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 60%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 25%;\r\n    margin-top: 2.5%;\r\n    font-size: 2.5vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 47.5%;\r\n    margin: 0% 1.25% 2.5% 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 100%;\r\n    height: 70%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .sala {\r\n    padding: 0.5%;\r\n  }\r\n\r\n  .container {\r\n    height: 80%;\r\n    width: 48%;\r\n\r\n    margin-right: 1.5%;\r\n  }\r\n\r\n  .configuracoes {\r\n    height: 45%;\r\n    width: 100%;\r\n\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .titulo-config {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .item-config {\r\n    font-size: 1.2vw;\r\n  }\r\n\r\n  .acao-item-config button {\r\n    font-size: 1.2vw;\r\n  }\r\n\r\n  .profissao-jogador {\r\n    height: 52%;\r\n    width: 100%;\r\n  }\r\n\r\n  .img-coracao,\r\n  .img-coroa {\r\n    width: 8.75%;\r\n  }\r\n\r\n  .num-vidas {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .rodada {\r\n    height: 12.5%;\r\n  }\r\n\r\n  .rodada p {\r\n    font-size: 2.5vw;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .fundo-profissao {\r\n    width: 100%;\r\n    height: 55%;\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .img-jogador {\r\n    width: 100%;\r\n    height: 95%;\r\n\r\n    margin-top: 2.5%;\r\n  }\r\n\r\n  .info {\r\n    width: 100%;\r\n    height: 30%;\r\n    margin-top: 2.5%;\r\n    font-size: 2.5vw;\r\n    line-height: 0.6;\r\n  }\r\n\r\n  .info span {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .amigos {\r\n    height: 80%;\r\n    width: 50%;\r\n  }\r\n\r\n  .profissao-amigo {\r\n    height: 25%;\r\n    width: 47.5%;\r\n    margin: 0% 1.25% 2.5% 1.25%;\r\n  }\r\n\r\n  .img-amigo {\r\n    width: 100%;\r\n    height: 70%;\r\n  }\r\n\r\n  .info-amigo {\r\n    width: 100%;\r\n    height: 30%;\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .acoes {\r\n    height: 10%;\r\n    width: 70%;\r\n\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .acao {\r\n    height: 100%;\r\n    width: 45%;\r\n    margin-left: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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LFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzYWxhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvZmlzc2FvLWpvZ2Fkb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDEuMjUlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1jdWx0dXJlZCk7XHJcbn1cclxuXHJcbi5jYWJlY2FsaG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZy1jb3JhY2FvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW1nLWNvcmFjYW86YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLWNvcm9hIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvY3Jvd24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pbWctY29yb2E6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG59XHJcblxyXG4ubnVtLXZpZGFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucm9kYWRhIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvZGFkYSBwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctam9nYWRvciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmFiaW9jb25lam8vdGFza2ZvcmNlL21hc3Rlci9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maXNzaW9uYWlzLzAwMC11bmtub3duLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgcGFkZGluZzogMi41JSAwJTtcclxufVxyXG5cclxuLmluZm8gc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG59XHJcblxyXG4uY29uZmlndXJhY29lcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgcGFkZGluZzogMS4yNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpdHVsby1jb25maWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbS1jb25maWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxufVxyXG5cclxuLnRleHRvLWl0ZW0tY29uZmlnIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY2FvLWl0ZW0tY29uZmlnIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4uYWNhby1pdGVtLWNvbmZpZyBidXR0b246ZGlzYWJsZWQsXHJcbi5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjb2xvcjogdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnVybC12aXNpdmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdWaXPDrXZlbCc7XHJcbn1cclxuXHJcbi51cmwtb2N1bHRvOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdPY3VsdG8nO1xyXG59XHJcblxyXG4ucHJpdmFjaWRhZGUtYWJlcnRhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdBYmVydGEnO1xyXG59XHJcblxyXG4ucHJpdmFjaWRhZGUtZmVjaGFkYTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnRmVjaGFkYSc7XHJcbn1cclxuXHJcbi5hbWlnb3Mge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9maXNzYW8tYW1pZ28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3gtYmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tY3VsdHVyZWQpO1xyXG59XHJcblxyXG4ubGlzdGEtYWNvZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIuNSU7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLWNvcm9hLTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIuNSU7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZhYmlvY29uZWpvL3Rhc2tmb3JjZS9tYXN0ZXIvc3JjL2Fzc2V0cy9pbWFnZXMvY3Jvd24ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogNTAlIDEwMCU7XHJcblxyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcywgei1pbmRleCAwLjFzLCBtYXgtaGVpZ2h0IDVzO1xyXG59XHJcblxyXG4ua2ljazpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxufVxyXG5cclxuLmxpc3RhLWFjb2VzOmZvY3VzIC5kcm9wZG93biB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB6LWluZGV4IDAuMnMsIG1heC1oZWlnaHQgMC4ycztcclxufVxyXG5cclxuLmltZy1hbWlnbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmFiaW9jb25lam8vdGFza2ZvcmNlL21hc3Rlci9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maXNzaW9uYWlzLzAwMC11bmtub3duLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmluZm8tYW1pZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbmZvLWFtaWdvIHAge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmluZm8tYW1pZ28gc3BhbiB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYWNvZXMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYWNhbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5raWNrYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tZmlyZWJyaWNrKTtcclxufVxyXG5cclxuLmtpY2thcjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tZmlyZWJyaWNrKTtcclxufVxyXG5cclxuLmNvbnZpZGFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLmNvbnZpZGFyOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1ibGFjay1mb2dyYSk7XHJcbn1cclxuXHJcbi5wcm9udG86OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1Byb250byc7XHJcbn1cclxuXHJcbi5jYW5jZWxhcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnQ2FuY2VsYXInO1xyXG59XHJcblxyXG4uYnRuLXZlcmRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLmJ0bi12ZXJkZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLmJ0bi12ZXJtZWxobyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4uYnRuLXZlcm1lbGhvOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1maXJlYnJpY2spO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMS41JTtcclxuICB9XHJcblxyXG4gIC5jb25maWd1cmFjb2VzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWpvZ2Fkb3Ige1xyXG4gICAgd2lkdGg6IDk3LjUlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDcuNSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHtcclxuICAgIGhlaWdodDogMTIuNSU7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHAge1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgfVxyXG5cclxuICAuZnVuZG8tcHJvZmlzc2FvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICB9XHJcblxyXG4gIC5pbmZvIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG5cclxuICAuYW1pZ29zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0Ny41JTtcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tYW1pZ28ge1xyXG4gICAgaGVpZ2h0OiAzMyU7XHJcbiAgICB3aWR0aDogOTcuNSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1hbWlnbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYW1pZ28ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjb2VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFjYW8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ3LjUlO1xyXG4gICAgbWFyZ2luOiAxLjI1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpZ3VyYWNvZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICB3aWR0aDogOTcuNSU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG1hcmdpbjogMS4yNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvcmFjYW8sXHJcbiAgLmltZy1jb3JvYSB7XHJcbiAgICB3aWR0aDogNi4yNSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogNS41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcblxyXG4gIC5mdW5kby1wcm9maXNzYW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWpvZ2Fkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIGhlaWdodDogMTIuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ3LjUlO1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1hbWlnbyB7XHJcbiAgICBoZWlnaHQ6IDMzJTtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxuICAgIG1hcmdpbjogMS4yNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWFtaWdvIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW5mby1hbWlnbyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgfVxyXG5cclxuICAuYWNvZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcuNSU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDcuNSU7XHJcbiAgICBtYXJnaW46IDEuMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zYWxhIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgfVxyXG5cclxuICAuY29uZmlndXJhY29lcyB7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsby1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcblxyXG4gIC5pdGVtLWNvbmZpZyB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcblxyXG4gIC5udW0tdmlkYXMge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5yb2RhZGEge1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5yb2RhZGEgcCB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5mdW5kby1wcm9maXNzYW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBsaW5lLWhlaWdodDogMC42O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWFtaWdvIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDk3LjUlO1xyXG4gICAgbWFyZ2luOiAxLjI1JTtcclxuICB9XHJcblxyXG4gIC5pbWctYW1pZ28ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFtaWdvIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIuNzV2dztcclxuICB9XHJcblxyXG4gIC5hY29lcyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuc2FsYSB7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA0OCU7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpZ3VyYWNvZXMge1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8tY29uZmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY29uZmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAuYWNhby1pdGVtLWNvbmZpZyBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5wcm9maXNzYW8tam9nYWRvciB7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1jb3JhY2FvLFxyXG4gIC5pbWctY29yb2Ege1xyXG4gICAgd2lkdGg6IDguNzUlO1xyXG4gIH1cclxuXHJcbiAgLm51bS12aWRhcyB7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxuICB9XHJcblxyXG4gIC5yb2RhZGEge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAucm9kYWRhIHAge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuZnVuZG8tcHJvZmlzc2FvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1qb2dhZG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjY7XHJcbiAgfVxyXG5cclxuICAuaW5mbyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlzc2FvLWFtaWdvIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDQ3LjUlO1xyXG4gICAgbWFyZ2luOiAwJSAxLjI1JSAyLjUlIDEuMjUlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1hbWlnbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYW1pZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjb2VzIHtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC5hY2FvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5zYWxhIHtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgfVxyXG5cclxuICAuY29uZmlndXJhY29lcyB7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsby1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jb25maWcge1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICB9XHJcblxyXG4gIC5hY2FvLWl0ZW0tY29uZmlnIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1qb2dhZG9yIHtcclxuICAgIGhlaWdodDogNTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvcmFjYW8sXHJcbiAgLmltZy1jb3JvYSB7XHJcbiAgICB3aWR0aDogOC43NSU7XHJcbiAgfVxyXG5cclxuICAubnVtLXZpZGFzIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSB7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gIH1cclxuXHJcbiAgLnJvZGFkYSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcblxyXG4gIC5pbWctam9nYWRvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTUlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMC42O1xyXG4gIH1cclxuXHJcbiAgLmluZm8gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2Zpc3Nhby1hbWlnbyB7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHdpZHRoOiA0Ny41JTtcclxuICAgIG1hcmdpbjogMCUgMS4yNSUgMi41JSAxLjI1JTtcclxuICB9XHJcblxyXG4gIC5pbWctYW1pZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFtaWdvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICB9XHJcblxyXG4gIC5hY29lcyB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "HsPz":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/monitor/monitor.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function HsPz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"monitor\" [ngClass]=\"corMonitor\">\r\n  <div class=\"dica\" [style.display]=\"dicaMonitor ? 'grid' : 'none'\">\r\n    Execute a tarefa ou informe-a para seus <br class=\"quebra-linha\">amigos para que eles possam\r\n    executá-la\r\n    <div class=\"fechar\" (click)=\"fechar()\">x</div>\r\n  </div>\r\n  <div class=\"letreiro\">\r\n    <p\r\n      [style.display]=\"pausa ? 'none' : 'flex'\"\r\n      style.animation-duration=\"{{ tempo }}s\"\r\n    >\r\n      {{ texto }}\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"tempo\" [style.display]=\"pausa ? 'none' : 'block'\">\r\n    <div class=\"tempo-decorrido\" style.animation-duration=\"{{ tempo }}s\"></div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "IH1k":
    /*!********************************************!*\
      !*** ./src/app/painel/painel.component.ts ***!
      \********************************************/

    /*! exports provided: PainelComponent */

    /***/
    function IH1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PainelComponent", function () {
        return PainelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_painel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./painel.component.html */
      "MNJw");
      /* harmony import */


      var _painel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./painel.component.css */
      "tB4E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");

      var PainelComponent = /*#__PURE__*/function () {
        function PainelComponent(taskForceService) {
          _classCallCheck(this, PainelComponent);

          this.taskForceService = taskForceService;
          this.flagRelatorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.registro = [];
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(PainelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this7 = this;

              var rodada;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.flagRelatorio = true;
                      this.flagRelatorioChange.emit(this.flagRelatorio);
                      _context11.next = 4;
                      return this.atualizarTarefa();

                    case 4:
                      rodada = this.numRodada;
                      this.taskForceService.getRegistros(this.keySala).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (registros) {
                        var concluidos = 0;
                        registros.forEach(function (r) {
                          if (r.concluido) {
                            concluidos++;
                          }
                        });

                        if (concluidos >= _this7.numTarefasNecessarias) {
                          _this7.taskForceService.adicionarRodada(_this7.keySala, rodada);

                          setTimeout(function () {
                            _this7.taskForceService.setStatusSala(_this7.keySala, 'espera');
                          }, 500);
                        }
                      });

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "atualizarTarefa",
          value: function atualizarTarefa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.pausa = true;
                      _context14.next = 3;
                      return this.taskForceService.sortearProfissaoMonitor(this.keySala);

                    case 3:
                      this.keyProfissaoMonitor = _context14.sent;
                      _context14.next = 6;
                      return this.taskForceService.sortearTarefa(this.keySala, this.keyProfissaoMonitor);

                    case 6:
                      this.keyTarefaSorteada = _context14.sent;
                      _context14.next = 9;
                      return this.taskForceService.getTarefa(this.keySala, this.keyProfissaoMonitor, this.keyTarefaSorteada);

                    case 9:
                      this.tarefaSorteada = _context14.sent;
                      this.tarefaSorteada = this.taskForceService.sortearItem(this.tarefaSorteada);
                      _context14.next = 13;
                      return this.taskForceService.adicionarRegistro(this.keySala, this.keyProfissaoMonitor, this.keyTarefaSorteada, this.tarefaSorteada.verbo);

                    case 13:
                      this.keyRegistro = _context14.sent;
                      this.exibirTarefa();
                      setTimeout(function () {
                        _this8.pausa = false;
                      }, 100);
                      this.taskForceService.getRegistro(this.keySala, this.keyRegistro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function (r) {
                        return !r['concluido'];
                      }, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(this.tempoMonitor * 1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                          var _this9 = this;

                          return regeneratorRuntime.wrap(function _callee12$(_context12) {
                            while (1) {
                              switch (_context12.prev = _context12.next) {
                                case 0:
                                  _context12.next = 2;
                                  return this.taskForceService.desabilitarRegistro(this.keySala, this.keyRegistro, this.keyProfissaoSorteada, this.keyProfissaoMonitor, this.vidas);

                                case 2:
                                  _context12.next = 4;
                                  return this.atualizarTarefa();

                                case 4:
                                  this.corMonitor = 'vermelho';
                                  setTimeout(function () {
                                    _this9.corMonitor = '';
                                  }, 400);
                                  return _context12.abrupt("return", []);

                                case 7:
                                case "end":
                                  return _context12.stop();
                              }
                            }
                          }, _callee12, this);
                        }));
                      })).subscribe(function (r) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          var _this10 = this;

                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  if (!r['concluido']) {
                                    _context13.next = 7;
                                    break;
                                  }

                                  _context13.next = 3;
                                  return this.taskForceService.pontuarJogador(this.keySala, this.keyProfissaoSorteada, true, 0.5);

                                case 3:
                                  this.corMonitor = 'verde';
                                  setTimeout(function () {
                                    _this10.corMonitor = '';
                                  }, 400);
                                  _context13.next = 7;
                                  return this.atualizarTarefa();

                                case 7:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13, this);
                        }));
                      });

                    case 17:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "exibirTarefa",
          value: function exibirTarefa() {
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
        }, {
          key: "concluirRegistro",
          value: function concluirRegistro(registro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this11 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      result = false;
                      _context15.next = 3;
                      return this.taskForceService.setTarefa(this.keySala, this.keyProfissaoSorteada, registro.key, {
                        verbo: registro.texto
                      });

                    case 3:
                      if (!(this.pausa === false)) {
                        _context15.next = 8;
                        break;
                      }

                      _context15.next = 6;
                      return this.taskForceService.concluirRegistro(this.keySala, this.keyProfissaoSorteada, registro, this.vidas);

                    case 6:
                      result = _context15.sent;

                      if (result) {
                        this.corTarefa = 'verde';
                        this.idTarefaRecente = registro.id;
                        setTimeout(function () {
                          _this11.corTarefa = '';
                          _this11.idTarefaRecente = 0;
                        }, 400);
                      } else {
                        this.corTarefa = 'vermelho';
                        this.idTarefaRecente = registro.id;
                        setTimeout(function () {
                          _this11.corTarefa = '';
                          _this11.idTarefaRecente = 0;
                        }, 400);
                      }

                    case 8:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dica = false;
            this.dicaChange.emit(this.dica);
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }]);

        return PainelComponent;
      }();

      PainelComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_6__["TaskforceService"]
        }];
      };

      PainelComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keyJogador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keyProfissaoSorteada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        profissaoSorteada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tempoMonitor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vidas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        numTarefasNecessarias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        numRodada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        flagRelatorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        flagRelatorioChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dica: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dicaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PainelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel',
        template: _raw_loader_painel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PainelComponent);
      /***/
    },

    /***/
    "L5Vj":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/relatorio/relatorio.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function L5Vj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"relatorio\">\r\n  <div class=\"card-relatorio\">\r\n    <table class=\"tabela-relatorio\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            [ngClass]=\"this.vida <= 0 ? 'titulo derrota' : 'titulo vitoria'\"\r\n          ></th>\r\n          <th class=\"tooltip\">\r\n            Tarefas Concluídas\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              width=\"16\"\r\n              height=\"16\"\r\n              fill=\"var(--ft-color)\"\r\n              class=\"bi bi-info-circle-fill\"\r\n              viewBox=\"0 0 16 16\"\r\n            >\r\n              <path\r\n                d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"\r\n              />\r\n            </svg>\r\n            <div class=\"tooltiptext\">\r\n              <p>\r\n                <span class=\"num-concluidas\">0.5</span> por tarefa informada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-concluidas\">0.5</span> por tarefa executada\r\n              </p>\r\n            </div>\r\n          </th>\r\n          <th class=\"tooltip\">\r\n            Vidas Perdidas\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              width=\"16\"\r\n              height=\"16\"\r\n              fill=\"var(--ft-color)\"\r\n              class=\"bi bi-info-circle-fill\"\r\n              viewBox=\"0 0 16 16\"\r\n            >\r\n              <path\r\n                d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"\r\n              />\r\n            </svg>\r\n            <div class=\"tooltiptext\">\r\n              <p>\r\n                <span class=\"num-perdidas\">0.5</span> por tarefa não informada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-perdidas\">0.5</span> por tarefa não executada\r\n              </p>\r\n              <br />\r\n              <p>\r\n                <span class=\"num-perdidas\">1</span> por execução de tarefa\r\n                errada\r\n              </p>\r\n            </div>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"this.vida > 0\">\r\n        <tr *ngFor=\"let l of lista\">\r\n          <td>\r\n            <div class=\"fundo-profissao\">\r\n              <div\r\n                class=\"img-profissao\"\r\n                style.background-image=\"url({{ baseUrl }}profissionais/{{\r\n                  l.imagem\r\n                }})\"\r\n              ></div>\r\n            </div>\r\n\r\n            <div class=\"info-amigo\">\r\n              <p class=\"nick\">\r\n                {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n                  l.profissao\r\n                }}</span>\r\n              </p>\r\n            </div>\r\n          </td>\r\n          <td class=\"num num-concluidas\">{{ l.acertos }}</td>\r\n          <td class=\"num num-perdidas\">{{ l.erros }}</td>\r\n        </tr>\r\n      </tbody>\r\n\r\n      <tbody *ngIf=\"this.vida <= 0\">\r\n        <tr *ngFor=\"let l of relatorioPartida\">\r\n        <td>\r\n          <div class=\"fundo-profissao\">\r\n            <div\r\n              class=\"img-profissao\"\r\n              style.background-image=\"url({{ baseUrl }}profissionais/{{\r\n                l.imagem\r\n              }})\"\r\n            ></div>\r\n          </div>\r\n\r\n          <div class=\"info-amigo\">\r\n            <p class=\"nick\">\r\n              {{ l.responsavel }}<br /><span class=\"texto-profissao\">{{\r\n                l.profissao\r\n              }}</span>\r\n            </p>\r\n          </div>\r\n        </td>\r\n        <td class=\"num num-concluidas\">{{ l.acertos }}</td>\r\n        <td class=\"num num-perdidas\">{{ l.erros }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"acao\">\r\n    <button\r\n      [disabled]=\"this.desabilitado\"\r\n      [ngClass]=\"this.vida <= 0 ? 'reiniciar' : 'proximo'\"\r\n      (click)=\"fecharRelatorio()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Ll4m":
    /*!*********************************************!*\
      !*** ./src/app/inicio/inicio.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Ll4m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inicio {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.box {\r\n  float: left;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.logo {\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  font-family: 'Roboto Mono';\r\n  font-weight: 300;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.logo::after {\r\n  content: '_';\r\n  -webkit-animation-name: input-animation;\r\n          animation-name: input-animation;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.card {\r\n  background-color: var(--box-bg);\r\n  height: 90%;\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  margin-top: 2.5%;\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  padding-top: 2.5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.personagem {\r\n  width: 80%;\r\n  height: 50%;\r\n  margin-left: 10%;\r\n  padding-top: 5%;\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n  background: var(--personagem-bg);\r\n}\r\n\r\n.img-personagem {\r\n  background-repeat: no-repeat;\r\n  background-position: center bottom;\r\n  background-size: contain;\r\n\r\n  -webkit-animation: pop 4s ease infinite;\r\n\r\n          animation: pop 4s ease infinite;\r\n}\r\n\r\n.nick {\r\n  width: 80%;\r\n  height: 25%;\r\n  margin-left: 10%;\r\n}\r\n\r\n.nickname {\r\n  font-weight: 400;\r\n  margin-top: 5%;\r\n}\r\n\r\n.nick input {\r\n  width: 100%;\r\n  height: 30%;\r\n  padding-top: 15px;\r\n  padding-bottom: 5px;\r\n\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  border-bottom: 1px solid var(--ft-color);\r\n\r\n  color: var(--ft-color);\r\n  text-align: center;\r\n}\r\n\r\n.mensagem {\r\n  width: 100%;\r\n  text-align: right;\r\n  color: var(--tart-orange);\r\n  margin-top: 1%;\r\n}\r\n\r\n.login {\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.btn-login {\r\n  width: 80%;\r\n  height: 50%;\r\n  margin-left: 10%;\r\n\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.btn-login:active {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n  box-shadow: 0px 2px var(--black-fogra);\r\n}\r\n\r\n.btn-login:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.box-tutorial .card {\r\n  padding: 0% 5%;\r\n}\r\n\r\n.titulo {\r\n  width: 100%;\r\n  height: 15%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: bold;\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.imagem {\r\n  width: 100%;\r\n  height: 45%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n\r\n.texto {\r\n  width: 95%;\r\n  height: 30%;\r\n  margin-left: 2.5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  line-height: 1.4;\r\n}\r\n\r\n.navegacao {\r\n  width: 100%;\r\n  height: 10%;\r\n}\r\n\r\n.slot {\r\n  width: 5%;\r\n  height: 100%;\r\n  margin-left: 7.5%;\r\n  margin-right: 7.5%;\r\n  float: left;\r\n  background-color: var(--slot-bg);\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n  cursor: pointer;\r\n}\r\n\r\n.slot-ativo {\r\n  background-color: var(--slot-ativo);\r\n}\r\n\r\n@-webkit-keyframes pop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  10% {\r\n    opacity: 1;\r\n  }\r\n\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes pop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  10% {\r\n    opacity: 1;\r\n  }\r\n\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 3.5vw;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 2.5vw;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  .box {\r\n    width: 100%;\r\n    height: 85%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    display: none;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1.75vw;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .box {\r\n    width: 50%;\r\n    height: 85%;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .texto {\r\n    font-size: 1.75vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .logo {\r\n    height: 15%;\r\n    width: 40%;\r\n    margin-left: 30%;\r\n  }\r\n\r\n  .box {\r\n    width: 40%;\r\n    height: 85%;\r\n    box-sizing: content-box;\r\n  }\r\n\r\n  .box-login {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n\r\n  .box-tutorial {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n  }\r\n\r\n  .img-personagem {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nickname {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .nick input {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .texto {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .mensagem {\r\n    font-size: 1vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyx3QkFBd0I7O0VBRXhCLHVDQUErQjs7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7RUFFbkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDOztFQUV4QyxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FB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O0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6ImluaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluaWNpbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5sb2dvOjphZnRlciB7XHJcbiAgY29udGVudDogJ18nO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBpbnB1dC1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMi41JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZy10b3A6IDIuNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBlcnNvbmFnZW0ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcbn1cclxuXHJcbi5pbWctcGVyc29uYWdlbSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbiAgYW5pbWF0aW9uOiBwb3AgNHMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLm5pY2sge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLm5pY2tuYW1lIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ubmljayBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZ0LWNvbG9yKTtcclxuXHJcbiAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW5zYWdlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmJ0bi1sb2dpbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLmJ0bi1sb2dpbjphY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1ibGFjay1mb2dyYSk7XHJcbn1cclxuXHJcbi5idG4tbG9naW46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjb2xvcjogdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmJveC10dXRvcmlhbCAuY2FyZCB7XHJcbiAgcGFkZGluZzogMCUgNSU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbn1cclxuXHJcbi5pbWFnZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnRleHRvIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuLm5hdmVnYWNhbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5zbG90IHtcclxuICB3aWR0aDogNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA3LjUlO1xyXG4gIG1hcmdpbi1yaWdodDogNy41JTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbG90LWJnKTtcclxuICBzaGFwZS1vdXRzaWRlOiBjaXJjbGUoKTtcclxuICBjbGlwLXBhdGg6IGNpcmNsZSgpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsb3QtYXRpdm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsb3QtYXRpdm8pO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgOTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlucHV0LWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA0OSUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mdC1jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuYm94LXR1dG9yaWFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgfVxyXG5cclxuICAubmljayBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICB9XHJcblxyXG4gIC5tZW5zYWdlbSB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5sb2dvIHtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuYm94LXR1dG9yaWFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAzLjV2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgfVxyXG5cclxuICAubWVuc2FnZW0ge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10dXRvcmlhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmltZy1wZXJzb25hZ2VtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2tuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgfVxyXG5cclxuICAubWVuc2FnZW0ge1xyXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAubmljayBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLm1lbnNhZ2VtIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICB9XHJcblxyXG4gIC5ib3gtbG9naW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10dXRvcmlhbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgfVxyXG5cclxuICAuaW1nLXBlcnNvbmFnZW0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubmlja25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG4gIC50ZXh0byB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm1lbnNhZ2VtIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "MNJw":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/painel/painel.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function MNJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"painel\">\r\n  <div class=\"monitor\">\r\n    <monitor\r\n      [texto]=\"textoExibicao\"\r\n      [tempo]=\"tempoMonitor\"\r\n      [pausa]=\"pausa\"\r\n      [(dica)]=\"dica\"\r\n      [corMonitor]=\"corMonitor\"\r\n    ></monitor>\r\n  </div>\r\n  <div class=\"quadro\">\r\n    <quadro\r\n      [idProfissao]=\"profissaoSorteada.id\"\r\n      [tarefas]=\"profissaoSorteada.tarefas\"\r\n      [registro]=\"registro\"\r\n      (quadroAtualizado)=\"concluirRegistro($event)\"\r\n      [(dica)]=\"dica\"\r\n      [corTarefa]=\"corTarefa\"\r\n      [idTarefaRecente]=\"idTarefaRecente\"\r\n    ></quadro>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "R44c":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contagem/contagem.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function R44c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loader-6 center\"><p>{{numero}}</p><span></span></div>\r\n\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(meta, titleService, router) {
          _classCallCheck(this, AppComponent);

          this.meta = meta;
          this.titleService = titleService;
          this.router = router;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
              gtag('config', 'G-CPWCCRF4JQ', {
                page_path: event.urlAfterRedirects
              });
            }
          });
          this.meta.addTag({
            property: 'og:title',
            content: 'Squad Task'
          });
          this.meta.addTag({
            property: 'og:description',
            content: 'Junte a galera e jogue online agora mesmo'
          });
          this.meta.addTag({
            property: 'og:image',
            content: 'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/assets/images/taskforce-print.png'
          });
          this.meta.addTag({
            name: 'theme-color',
            content: getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim()
          });
          this.titleService.setTitle('Squad Task');
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0
        }))])])],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TJYz":
    /*!**************************************************!*\
      !*** ./src/app/relatorio/relatorio.component.ts ***!
      \**************************************************/

    /*! exports provided: RelatorioComponent */

    /***/
    function TJYz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function () {
        return RelatorioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorio.component.html */
      "L5Vj");
      /* harmony import */


      var _relatorio_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorio.component.css */
      "aQg/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");

      var RelatorioComponent = /*#__PURE__*/function () {
        function RelatorioComponent(taskForceService) {
          _classCallCheck(this, RelatorioComponent);

          this.taskForceService = taskForceService;
          this.flagRelatorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.relatorioPartidaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.lista = [];
          this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
        }

        _createClass(RelatorioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this12 = this;

              var i, j;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      i = 0;
                      j = 0;
                      this.vida = this.vidas;
                      this.desabilitado = true;
                      this.listaProfissoesSorteadas.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (l) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                          return regeneratorRuntime.wrap(function _callee16$(_context16) {
                            while (1) {
                              switch (_context16.prev = _context16.next) {
                                case 0:
                                  i = 0;

                                case 1:
                                  if (!(i < l.length)) {
                                    _context16.next = 22;
                                    break;
                                  }

                                  this.lista.push({
                                    imagem: l[i].imagem,
                                    responsavel: l[i].responsavel,
                                    profissao: l[i].profissao,
                                    acertos: l[i].acertos,
                                    erros: l[i].erros
                                  });
                                  j = 0;

                                case 4:
                                  if (!(j < this.relatorioPartida.length)) {
                                    _context16.next = 15;
                                    break;
                                  }

                                  if (!(this.relatorioPartida[j].responsavel === l[i].responsavel)) {
                                    _context16.next = 12;
                                    break;
                                  }

                                  this.relatorioPartida[j].imagem = l[i].imagem;
                                  this.relatorioPartida[j].responsavel = l[i].responsavel;
                                  this.relatorioPartida[j].profissao = l[i].profissao;
                                  this.relatorioPartida[j].acertos += l[i].acertos;
                                  this.relatorioPartida[j].erros += l[i].erros;
                                  return _context16.abrupt("break", 15);

                                case 12:
                                  j++;
                                  _context16.next = 4;
                                  break;

                                case 15:
                                  if (j === this.relatorioPartida.length) {
                                    this.relatorioPartida.push({
                                      imagem: l[i].imagem,
                                      responsavel: l[i].responsavel,
                                      profissao: l[i].profissao,
                                      acertos: l[i].acertos,
                                      erros: l[i].erros
                                    });
                                  }

                                  this.relatorioPartidaChange.emit(this.relatorioPartida);
                                  _context16.next = 19;
                                  return this.resetarProfissao();

                                case 19:
                                  i++;
                                  _context16.next = 1;
                                  break;

                                case 22:
                                case "end":
                                  return _context16.stop();
                              }
                            }
                          }, _callee16, this);
                        }));
                      });
                      this.desabilitado = false;

                    case 6:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "fecharRelatorio",
          value: function fecharRelatorio() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      if (this.desabilitado) {
                        _context18.next = 9;
                        break;
                      }

                      this.desabilitado = true;

                      if (!(this.vida <= 0)) {
                        _context18.next = 7;
                        break;
                      }

                      this.relatorioPartida = [];
                      this.relatorioPartidaChange.emit(this.relatorioPartida);
                      _context18.next = 7;
                      return this.taskForceService.resetarSala(this.keySala);

                    case 7:
                      this.flagRelatorio = false;
                      this.flagRelatorioChange.emit(this.flagRelatorio);

                    case 9:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "resetarProfissao",
          value: function resetarProfissao() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.taskForceService.resetarProfissao(this.keySala, this.keyProfissaoSorteada);

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return RelatorioComponent;
      }();

      RelatorioComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_5__["TaskforceService"]
        }];
      };

      RelatorioComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vidas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keyProfissaoSorteada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        listaProfissoesSorteadas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        flagRelatorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        flagRelatorioChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        relatorioPartida: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        relatorioPartidaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      RelatorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'relatorio',
        template: _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RelatorioComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"jogo\">\r\n  <div *ngIf=\"!keySala\" class=\"inicio\" [@fade]>\r\n    <inicio [(keySala)]=\"keySala\" [(nickJogador)]=\"nickJogador\"></inicio>\r\n  </div>\r\n  <div *ngIf=\"keySala\" class=\"central\" [@fade]>\r\n    <central [(keySala)]=\"keySala\" [nickJogador]=\"nickJogador\"></central>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "WWLw":
    /*!***********************************************!*\
      !*** ./src/app/monitor/monitor.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function WWLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@-webkit-keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@keyframes input-animation {\r\n  0% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  49% {\r\n    color: var(--monitor-bg);\r\n  }\r\n  50% {\r\n    color: var(--ft-color);\r\n  }\r\n  99% {\r\n    color: var(--ft-color);\r\n  }\r\n  100% {\r\n    color: var(--monitor-bg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes tempo {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  1% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes tempo {\r\n  0% {\r\n    width: 100%;\r\n  }\r\n  1% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes typing {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n  2.5% {\r\n    width: 0;\r\n  }\r\n  5% {\r\n    width: var(--tamanho);\r\n  }\r\n  95% {\r\n    width: var(--tamanho);\r\n  }\r\n  97.5% {\r\n    width: 0;\r\n  }\r\n  100% {\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes typing {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n  2.5% {\r\n    width: 0;\r\n  }\r\n  5% {\r\n    width: var(--tamanho);\r\n  }\r\n  95% {\r\n    width: var(--tamanho);\r\n  }\r\n  97.5% {\r\n    width: 0;\r\n  }\r\n  100% {\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes slide-in-bottom {\r\n  0% {\r\n    transform: translate(-50%, 5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slide-in-bottom {\r\n  0% {\r\n    transform: translate(-50%, 5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@keyframes correto {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--medium-sea-green) inset;\r\n    border-color: var(--medium-sea-green);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n@keyframes errado {\r\n  0% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n  40% {\r\n    box-shadow: 0px 0px 5px var(--tart-orange) inset;\r\n    border-color: var(--tart-orange);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 5px var(--monitor-bg) inset;\r\n    border-color: var(--box-border);\r\n  }\r\n}\r\n\r\n.monitor {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  background-color: var(--monitor-bg);\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n  overflow-y: auto;\r\n}\r\n\r\n.dica {\r\n  position: absolute;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--box-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n\r\n  -webkit-animation: slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;\r\n\r\n          animation: slide-in-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;\r\n}\r\n\r\n.fechar {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n.fechar:hover {\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.letreiro {\r\n  height: 90%;\r\n  width: 100%;\r\n}\r\n\r\n.letreiro p {\r\n  color: var(--white);\r\n  font-family: 'Roboto Mono';\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n  height: 90%;\r\n\r\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\r\n  white-space: nowrap; /* Keeps the content on a single line */\r\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\r\n  -webkit-animation: typing 1 normal both;\r\n          animation: typing 1 normal both;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n          animation-timing-function: ease-in-out;\r\n}\r\n\r\n.letreiro p::after {\r\n  content: '_';\r\n  -webkit-animation-name: input-animation;\r\n          animation-name: input-animation;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.tempo {\r\n  width: 90%;\r\n  height: 3px;\r\n  margin-left: 5%;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    var(--eletric-purple),\r\n    var(--blue-jeans)\r\n  );\r\n}\r\n\r\n.tempo-decorrido {\r\n  background-color: var(--monitor-bg);\r\n  height: 100%;\r\n  width: 100%;\r\n  float: right;\r\n  -webkit-animation-name: tempo;\r\n          animation-name: tempo;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n\r\n.verde {\r\n  -webkit-animation-name: correto;\r\n          animation-name: correto;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n.vermelho {\r\n  -webkit-animation-name: errado;\r\n          animation-name: errado;\r\n  -webkit-animation-duration: 0.4s;\r\n          animation-duration: 0.4s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease;\r\n          animation-timing-function: ease;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .letreiro {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 25%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .letreiro {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .letreiro {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .dica {\r\n    width: 95%;\r\n    height: 15%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 0.75%;\r\n    top: -2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .letreiro {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.6em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .letreiro {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 15%;\r\n    top: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBbkJBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxxREFBcUQ7SUFDckQscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHFEQUFxRDtJQUNyRCxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLCtDQUErQztJQUMvQywrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsZ0RBQWdEO0lBQ2hELGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLCtCQUErQjtFQUNqQztBQUNGOztBQWJBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsMkZBQW1GOztVQUFuRixtRkFBbUY7QUFDckY7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsZ0JBQWdCLEVBQUUsNERBQTREO0VBQzlFLG1CQUFtQixFQUFFLHVDQUF1QztFQUM1RCxjQUFjLEVBQUUsc0RBQXNEO0VBQ3RFLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsOENBQXNDO1VBQXRDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmOzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1Qix1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQzs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsT0FBTztJQUNQLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxTQUFTO0lBQ1QsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjtBQUNGOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7QUFDRiIsImZpbGUiOiJtb25pdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGlucHV0LWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA0OSUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgY29sb3I6IHZhcigtLWZ0LWNvbG9yKTtcclxuICB9XHJcbiAgOTklIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mdC1jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLW1vbml0b3ItYmcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0ZW1wbyB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDElIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgfVxyXG4gIDIuNSUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIHdpZHRoOiB2YXIoLS10YW1hbmhvKTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIHdpZHRoOiB2YXIoLS10YW1hbmhvKTtcclxuICB9XHJcbiAgOTcuNSUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjb3JyZXRvIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tb25pdG9yLWJnKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkaXVtLXNlYS1ncmVlbik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggdmFyKC0tbW9uaXRvci1iZykgaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlcnJhZG8ge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLXRhcnQtb3JhbmdlKSBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLW1vbml0b3ItYmcpIGluc2V0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubW9uaXRvciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmRpY2Ege1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tYm90dG9tIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAwLjc1cyBib3RoO1xyXG59XHJcblxyXG4uZmVjaGFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmVjaGFyOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbn1cclxuXHJcbi5sZXRyZWlybyB7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sZXRyZWlybyBwIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEVuc3VyZXMgdGhlIGNvbnRlbnQgaXMgbm90IHJldmVhbGVkIHVudGlsIHRoZSBhbmltYXRpb24gKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBLZWVwcyB0aGUgY29udGVudCBvbiBhIHNpbmdsZSBsaW5lICovXHJcbiAgbWFyZ2luOiAwIGF1dG87IC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cclxuICBhbmltYXRpb246IHR5cGluZyAxIG5vcm1hbCBib3RoO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubGV0cmVpcm8gcDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdfJztcclxuICBhbmltYXRpb24tbmFtZTogaW5wdXQtYW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRlbXBvIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgIHZhcigtLWVsZXRyaWMtcHVycGxlKSxcclxuICAgIHZhcigtLWJsdWUtamVhbnMpXHJcbiAgKTtcclxufVxyXG5cclxuLnRlbXBvLWRlY29ycmlkbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBhbmltYXRpb24tbmFtZTogdGVtcG87XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG4udmVyZGUge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBjb3JyZXRvO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbn1cclxuXHJcbi52ZXJtZWxobyB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGVycmFkbztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmxldHJlaXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRvcDogLTcuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmxldHJlaXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHRvcDogLTcuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmxldHJlaXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgfVxyXG5cclxuICAucXVlYnJhLWxpbmhhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAwLjc1JTtcclxuICAgIHRvcDogLTIuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAubGV0cmVpcm8ge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiAtNy41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5sZXRyZWlybyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gIH1cclxuXHJcbiAgLnF1ZWJyYS1saW5oYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IDUlO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _botao_botao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./botao/botao.component */
      "x3+4");
      /* harmony import */


      var _tarefa_tarefa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./tarefa/tarefa.component */
      "aR94");
      /* harmony import */


      var _painel_painel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./painel/painel.component */
      "IH1k");
      /* harmony import */


      var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./monitor/monitor.component */
      "sVpJ");
      /* harmony import */


      var _quadro_quadro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./quadro/quadro.component */
      "mpLu");
      /* harmony import */


      var _central_central_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./central/central.component */
      "s2Oy");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./taskforce.service */
      "tsgC");
      /* harmony import */


      var _sala_sala_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./sala/sala.component */
      "DwX5");
      /* harmony import */


      var _contagem_contagem_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./contagem/contagem.component */
      "CwaN");
      /* harmony import */


      var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./inicio/inicio.component */
      "9ixo");
      /* harmony import */


      var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./relatorio/relatorio.component */
      "TJYz");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _botao_botao_component__WEBPACK_IMPORTED_MODULE_12__["BotaoComponent"], _tarefa_tarefa_component__WEBPACK_IMPORTED_MODULE_13__["TarefaComponent"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_14__["PainelComponent"], _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__["MonitorComponent"], _quadro_quadro_component__WEBPACK_IMPORTED_MODULE_16__["QuadroComponent"], _central_central_component__WEBPACK_IMPORTED_MODULE_17__["CentralComponent"], _sala_sala_component__WEBPACK_IMPORTED_MODULE_19__["SalaComponent"], _contagem_contagem_component__WEBPACK_IMPORTED_MODULE_20__["ContagemComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_21__["InicioComponent"], _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_22__["RelatorioComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        providers: [_taskforce_service__WEBPACK_IMPORTED_MODULE_18__["TaskforceService"], {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"],
          useValue: '/'
        }]
      })], AppModule);
      /***/
    },

    /***/
    "aQg/":
    /*!***************************************************!*\
      !*** ./src/app/relatorio/relatorio.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function aQg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table,\r\nth,\r\ntd {\r\n  border: 1px solid var(--box-border);\r\n  border-collapse: collapse;\r\n}\r\n\r\nth {\r\n  height: 15%;\r\n  vertical-align: bottom;\r\n  border: none;\r\n  padding: 2% 2% 0 2%;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 95%;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  color: var(--ft-color);\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 50%;\r\n  margin-left: -47.5%;\r\n  padding: 5% 2.5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: transparent transparent var(--box-border) transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\ntr {\r\n  height: 10vh;\r\n}\r\n\r\ntd {\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  height: 10vh;\r\n}\r\n\r\ntd:nth-child(1) {\r\n  width: 30%;\r\n}\r\n\r\ntd:nth-child(2),\r\ntd:nth-child(3) {\r\n  width: 35%;\r\n}\r\n\r\n.relatorio {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-relatorio {\r\n  background-color: var(--box-bg);\r\n  float: left;\r\n  border-radius: 3px;\r\n  border: 2px solid var(--box-border);\r\n  overflow-y: auto;\r\n}\r\n\r\n.tabela-relatorio {\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.titulo {\r\n  white-space: pre;\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n}\r\n\r\n.vitoria::after {\r\n  content: 'Rodada \\A Concluída';\r\n  color: var(--blue-jeans);\r\n}\r\n\r\n.derrota::after {\r\n  content: 'Fim de \\A Partida';\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.fundo-profissao {\r\n  width: 25%;\r\n  height: 100%;\r\n\r\n  margin-left: 5%;\r\n\r\n  background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n\r\n  float: left;\r\n}\r\n\r\n.img-profissao {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.info-amigo {\r\n  width: 65%;\r\n  height: 100%;\r\n  margin-left: 5%;\r\n\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n\r\n  float: left;\r\n}\r\n\r\n.nick {\r\n  padding-top: 5%;\r\n  line-height: 0.75;\r\n  font-weight: bold;\r\n  text-align: left;\r\n}\r\n\r\n.texto-profissao {\r\n  color: var(--blue-jeans);\r\n  font-weight: 400;\r\n}\r\n\r\n.num {\r\n  font-weight: bold;\r\n}\r\n\r\n.num-concluidas {\r\n  color: var(--medium-sea-green);\r\n}\r\n\r\n.num-perdidas {\r\n  color: var(--tart-orange);\r\n}\r\n\r\n.acao {\r\n  float: left;\r\n}\r\n\r\n.proximo {\r\n  background-color: var(--medium-sea-green);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--sea-green);\r\n}\r\n\r\n.proximo:active {\r\n  box-shadow: 0px 2px var(--sea-green);\r\n}\r\n\r\n.proximo::after {\r\n  content: 'Próxima rodada';\r\n}\r\n\r\n.proximo:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n.reiniciar {\r\n  background-color: var(--blue-jeans);\r\n  color: var(--white);\r\n  box-shadow: 0px 6px var(--saphire-blue);\r\n}\r\n\r\n.reiniciar:active {\r\n  box-shadow: 0px 2px var(--saphire-blue);\r\n}\r\n\r\n.reiniciar::after {\r\n  content: 'Nova partida';\r\n}\r\n\r\n.reiniciar:disabled {\r\n  background-color: var(--cultured);\r\n  box-shadow: 0px 6px var(--silver-chalice);\r\n  color: var(--silver-chalice);\r\n  cursor: default;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card-relatorio {\r\n    width: 100%;\r\n    height: 80%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 5.5vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .acao {\r\n    width: 90%;\r\n    height: 7.5%;\r\n    margin-left: 5%;\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .card-relatorio {\r\n    width: 100%;\r\n    height: 80%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 6vw;\r\n  }\r\n\r\n  .acao {\r\n    width: 70%;\r\n    height: 7.5%;\r\n    margin-left: 15%;\r\n    margin-top: 7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 3.5vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1.6vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2.75vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  .acao {\r\n    width: 50%;\r\n    height: 7.5%;\r\n    margin-left: 25%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1.1vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 3vw;\r\n  }\r\n\r\n  .acao {\r\n    width: 50%;\r\n    height: 7.5%;\r\n    margin-left: 25%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .card-relatorio {\r\n    width: 70%;\r\n    height: 80%;\r\n    margin-top: 2.5%;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .titulo {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  th {\r\n    font-size: 1.25vw;\r\n  }\r\n\r\n  .tooltiptext {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 1.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1vw;\r\n  }\r\n\r\n  .num {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .acao {\r\n    width: 30%;\r\n    height: 7.5%;\r\n    margin-left: 35%;\r\n    margin-top: 2.5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0b3Jpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFD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QUNoQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoicmVsYXRvcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSxcclxudGgsXHJcbnRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMiUgMiUgMCAyJTtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDk1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb25pdG9yLWJnKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tZnQtY29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDcuNSU7XHJcbiAgcGFkZGluZzogNSUgMi41JTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tYm94LWJvcmRlcikgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxudHIge1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxudGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxudGQ6bnRoLWNoaWxkKDEpIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG50ZDpudGgtY2hpbGQoMiksXHJcbnRkOm50aC1jaGlsZCgzKSB7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuLnJlbGF0b3JpbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1yZWxhdG9yaW8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJveC1iZyk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi50YWJlbGEtcmVsYXRvcmlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udml0b3JpYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdSb2RhZGEgXFxBIENvbmNsdcOtZGEnO1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxufVxyXG5cclxuLmRlcnJvdGE6OmFmdGVyIHtcclxuICBjb250ZW50OiAnRmltIGRlIFxcQSBQYXJ0aWRhJztcclxuICBjb2xvcjogdmFyKC0tdGFydC1vcmFuZ2UpO1xyXG59XHJcblxyXG4uZnVuZG8tcHJvZmlzc2FvIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wZXJzb25hZ2VtLWJnKTtcclxuXHJcbiAgc2hhcGUtb3V0c2lkZTogY2lyY2xlKCk7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoKTtcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbWctcHJvZmlzc2FvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8tYW1pZ28ge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uaWNrIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNzU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtamVhbnMpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5udW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubnVtLWNvbmNsdWlkYXMge1xyXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tc2VhLWdyZWVuKTtcclxufVxyXG5cclxuLm51bS1wZXJkaWRhcyB7XHJcbiAgY29sb3I6IHZhcigtLXRhcnQtb3JhbmdlKTtcclxufVxyXG5cclxuLmFjYW8ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ucHJveGltbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLXNlYS1ncmVlbik7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IHZhcigtLXNlYS1ncmVlbik7XHJcbn1cclxuXHJcbi5wcm94aW1vOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCB2YXIoLS1zZWEtZ3JlZW4pO1xyXG59XHJcblxyXG4ucHJveGltbzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdQcsOzeGltYSByb2RhZGEnO1xyXG59XHJcblxyXG4ucHJveGltbzpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2lsdmVyLWNoYWxpY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1zaWx2ZXItY2hhbGljZSk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4ucmVpbmljaWFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWplYW5zKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLnJlaW5pY2lhcjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggdmFyKC0tc2FwaGlyZS1ibHVlKTtcclxufVxyXG5cclxuLnJlaW5pY2lhcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdOb3ZhIHBhcnRpZGEnO1xyXG59XHJcblxyXG4ucmVpbmljaWFyOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCB2YXIoLS1zaWx2ZXItY2hhbGljZSk7XHJcbiAgY29sb3I6IHZhcigtLXNpbHZlci1jaGFsaWNlKTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZC1yZWxhdG9yaW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiA1LjV2dztcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMy41dnc7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIHtcclxuICAgIGZvbnQtc2l6ZTogNC41dnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG5cclxuICAubnVtIHtcclxuICAgIGZvbnQtc2l6ZTogN3Z3O1xyXG4gIH1cclxuXHJcbiAgLmFjYW8ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2FyZC1yZWxhdG9yaW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIH1cclxuXHJcbiAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgfVxyXG5cclxuICAubmljayB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5udW0ge1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgfVxyXG5cclxuICAuYWNhbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA3LjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDcuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjZ2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMi43NXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRleHRvLXByb2Zpc3NhbyB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDQuNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmFjYW8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNy41JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmNhcmQtcmVsYXRvcmlvIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcblxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICB9XHJcblxyXG4gIC5hY2FvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDcuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJkLXJlbGF0b3JpbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxuICB9XHJcblxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICB9XHJcblxyXG4gIC5uaWNrIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxuXHJcbiAgLm51bSB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gIC5hY2FvIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDcuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "aR94":
    /*!********************************************!*\
      !*** ./src/app/tarefa/tarefa.component.ts ***!
      \********************************************/

    /*! exports provided: TarefaComponent */

    /***/
    function aR94(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TarefaComponent", function () {
        return TarefaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tarefa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tarefa.component.html */
      "b3KD");
      /* harmony import */


      var _tarefa_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tarefa.component.css */
      "5ZiT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TarefaComponent = /*#__PURE__*/function () {
        function TarefaComponent() {
          _classCallCheck(this, TarefaComponent);

          this.tarefaExecutada = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(TarefaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            switch (this.tipo) {
              case 'acao':
                this.corBotao = 'azul';
                this.tipoBotao = 'botao';
                this.textoBotao = this.texto;
                break;

              case 'estado':
                if (this.corBotao == 'verde') {
                  this.corBotao = 'vermelho';
                } else {
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
        }, {
          key: "botaoClick",
          value: function botaoClick(args) {
            this.tarefaExecutada.emit(args);
          }
        }]);

        return TarefaComponent;
      }();

      TarefaComponent.ctorParameters = function () {
        return [];
      };

      TarefaComponent.propDecorators = {
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idProfissao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        frase: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        texto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tipo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        estado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lista: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        registro: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        corTarefa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idTarefaRecente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tarefaExecutada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      TarefaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tarefa',
        template: _raw_loader_tarefa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tarefa_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TarefaComponent);
      /***/
    },

    /***/
    "b3KD":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tarefa/tarefa.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function b3KD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"tarefa\" [ngClass]=\"idTarefaRecente === id ? corTarefa : ''\">\r\n  <div class=\"frase\">\r\n    <h3>{{frase}}</h3>\r\n  </div>\r\n  <div class=\"botao\">\r\n    <botao [key]=\"key\" [id]=\"id\" [idProfissao]=\"idProfissao\" [texto]=\"textoBotao\" [cor]=\"corBotao\" [tipo]=\"tipoBotao\"\r\n      [estado]=\"estado\" [lista]=\"lista\" (clique)=\"botaoClick($event)\"></botao>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio/inicio.component */
      "9ixo"); // CLI imports router


      var routes = [{
        path: ':keySala',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
      }]; // sets up routes constant where you define your routes
      // configures NgModule imports and exports

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fx4J":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function fx4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"inicio\">\r\n  <div class=\"logo\">Squad Task</div>\r\n  <div class=\"box box-login\">\r\n    <div class=\"card\">\r\n      <div class=\"personagem\">\r\n        <div class=\"img-personagem\" style.background-image=\"url({{baseUrl}}profissionais/{{imagemBox}})\"></div>\r\n      </div>\r\n      <form class=\"nick\">\r\n        <p class=\"nickname\">Nickname:</p>\r\n        <input type=\"text\" maxlength=\"10\" (keyup)=\"onKey($event)\">\r\n        <p class=\"mensagem\">{{mensagem}}</p>\r\n      </form>\r\n      <div class=\"login\">\r\n        <button *ngIf=\"!keySala\" class=\"btn-login\" (click)=\"criarSala()\" [disabled]=\"nickJogador === ''\">\r\n          Criar sala\r\n        </button>\r\n        <button *ngIf=\"keySala\" class=\"btn-login\" (click)=\"entrarSala()\" [disabled]=\"nickJogador === ''\">\r\n          Entrar na sala\r\n      </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box box-tutorial\">\r\n    <div class=\"card\">\r\n      <div class=\"titulo\">Como jogar?</div>\r\n      <div class=\"imagem\" style.background-image=\"url({{baseUrl}}{{carrossel[numCarrossel].imagem}}\"></div>\r\n      <div class=\"texto\">{{carrossel[numCarrossel].texto}}</div>\r\n      <div class=\"navegacao\">\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 0 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(0)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 1 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(1)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 2 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(2)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 3 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(3)\"></div>\r\n        <div class=\"slot\" [ngClass]=\"numCarrossel === 4 ? 'slot-ativo' : ''\" (click)=\"acessarCarrossel(4)\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
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

      /***/

    },

    /***/
    "j6NB":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sala/sala.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function j6NB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"sala\">\r\n  <div class=\"container\">\r\n    <div\r\n      class=\"profissao-jogador\"\r\n      [style.display]=\"\r\n        this.profissaoSorteada.responsavel === this.nickJogador\r\n          ? 'inherit'\r\n          : 'none'\r\n      \"\r\n      [style.border-left-color]=\"\r\n        this.pronto ? 'var(--medium-sea-green)' : 'var(--tart-orange)'\r\n      \"\r\n    >\r\n      <div class=\"cabecalho\">\r\n        <div class=\"img-coracao\">\r\n          <p class=\"num-vidas\">{{ vidas }}x</p>\r\n        </div>\r\n        <div\r\n          class=\"img-coroa\"\r\n          [style.display]=\"lider === nickJogador ? 'inherit' : 'none'\"\r\n        ></div>\r\n      </div>\r\n\r\n      <div class=\"rodada\">\r\n        <p>Rodada {{ numRodada }}</p>\r\n      </div>\r\n\r\n      <div class=\"fundo-profissao\">\r\n        <div\r\n          class=\"img-jogador\"\r\n          style.background-image=\"url({{ baseUrl }}profissionais/{{\r\n            this.profissaoSorteada.imagem\r\n          }})\"\r\n        ></div>\r\n      </div>\r\n\r\n      <div class=\"info\">\r\n        <p>\r\n          {{ this.profissaoSorteada.responsavel }}<br /><span>{{\r\n            this.profissaoSorteada.profissao\r\n          }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"configuracoes\">\r\n      <div class=\"titulo-config\">Configurações da Sala</div>\r\n      <div class=\"item-config\">\r\n        <div class=\"texto-item-config\">URL completa</div>\r\n        <div class=\"acao-item-config\">\r\n          <button\r\n            [ngClass]=\"\r\n              this.visibilidadeURL\r\n                ? 'url-visivel btn-verde'\r\n                : 'url-oculto btn-vermelho'\r\n            \"\r\n            [disabled]=\"lider !== nickJogador\"\r\n            (click)=\"alterarVisibilidadeURL()\"\r\n          ></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-config\">\r\n        <div class=\"texto-item-config\">Sala</div>\r\n        <div class=\"acao-item-config\">\r\n          <button\r\n            [ngClass]=\"\r\n              this.privacidade\r\n                ? 'privacidade-aberta btn-verde'\r\n                : 'privacidade-fechada btn-vermelho'\r\n            \"\r\n            [disabled]=\"lider !== nickJogador\"\r\n            (click)=\"alterarPrivacidade()\"\r\n          ></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"amigos\">\r\n    <div\r\n      class=\"profissao-amigo\"\r\n      *ngFor=\"let l of listaProfissoesSorteadas | async\"\r\n      [style.display]=\"l.responsavel === this.nickJogador ? 'none' : 'inherit'\"\r\n      [style.border-left-color]=\"\r\n        l.pronto ? 'var(--medium-sea-green)' : 'var(--tart-orange)'\r\n      \"\r\n    >\r\n      <div\r\n        class=\"img-coroa-2\"\r\n        tabindex=\"-1\"\r\n        [style.display]=\"lider === l.responsavel ? 'inherit' : 'none'\"\r\n      >\r\n      </div>\r\n      <div\r\n        class=\"lista-acoes\"\r\n        tabindex=\"-1\"\r\n        [style.display]=\"lider === nickJogador ? 'inherit' : 'none'\"\r\n      >\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"20\"\r\n          height=\"20\"\r\n          fill=\"var(--blue-jeans)\"\r\n          class=\"bi bi-three-dots\"\r\n          viewBox=\"0 0 16 16\"\r\n        >\r\n          <path\r\n            d=\"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"\r\n          />\r\n        </svg>\r\n        <div class=\"dropdown\">\r\n          <p class=\"kick\" (click)=\"kickar(l.key)\">Expulsar</p>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"img-amigo\"\r\n        style.background-image=\"url({{ baseUrl }}profissionais/{{ l.imagem }})\"\r\n      ></div>\r\n      <div class=\"info-amigo\">\r\n        <p>\r\n          {{ l.responsavel }}<br /><span>{{ l.profissao }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div\r\n    class=\"acoes\"\r\n    [style.display]=\"\r\n      this.profissaoSorteada.responsavel === this.nickJogador\r\n        ? 'inherit'\r\n        : 'none'\r\n    \"\r\n  >\r\n    <div class=\"acao\">\r\n      <button class=\"convidar\" (click)=\"convidar()\">{{ textoConvite }}</button>\r\n    </div>\r\n\r\n    <div class=\"acao\">\r\n      <button\r\n        [disabled]=\"desabilitado\"\r\n        [ngClass]=\"this.pronto ? 'cancelar btn-vermelho' : 'pronto btn-verde'\"\r\n        (click)=\"ficarPronto()\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "mpLu":
    /*!********************************************!*\
      !*** ./src/app/quadro/quadro.component.ts ***!
      \********************************************/

    /*! exports provided: QuadroComponent */

    /***/
    function mpLu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuadroComponent", function () {
        return QuadroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_quadro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./quadro.component.html */
      "Dxcq");
      /* harmony import */


      var _quadro_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quadro.component.css */
      "uD+/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var QuadroComponent = /*#__PURE__*/function () {
        function QuadroComponent() {
          _classCallCheck(this, QuadroComponent);

          this.maxNumTarefas = 8;
          this.quadroAtualizado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(QuadroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.tarefasArray = Object.keys(this.tarefas).map(function (key) {
              return _this13.tarefas[key];
            });
            Object.keys(this.tarefas).forEach(function (key, index) {
              _this13.tarefasArray[index].key = key;
            });
            this.dicaQuadro = this.dica;
          }
        }, {
          key: "tarefaExecutada",
          value: function tarefaExecutada(args) {
            this.quadroAtualizado.emit(args);
          }
        }, {
          key: "fechar",
          value: function fechar() {
            this.dicaQuadro = false;
            this.dica = false;
            this.dicaChange.emit(this.dica);
          }
        }]);

        return QuadroComponent;
      }();

      QuadroComponent.ctorParameters = function () {
        return [];
      };

      QuadroComponent.propDecorators = {
        idProfissao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tarefas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        registro: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        corTarefa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idTarefaRecente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        quadroAtualizado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dica: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dicaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      QuadroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'quadro',
        template: _raw_loader_quadro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quadro_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QuadroComponent);
      /***/
    },

    /***/
    "mvYP":
    /*!***********************************************!*\
      !*** ./src/app/central/central.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function mvYP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".amigos {\r\n  padding: 0.25%;\r\n  border-radius: 3px;\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  border: 2px solid var(--box-border);\r\n\r\n  float: left;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n.amigo {\r\n  width: 100%;\r\n  height: 15%;\r\n\r\n  background-color: var(--box-bg);\r\n  border-bottom: 2px solid var(--box-border);\r\n  overflow-x: auto;\r\n}\r\n\r\n.fundo-profissao {\r\n  width: 25%;\r\n  height: 100%;\r\n\r\n  margin-left: 5%;\r\n\r\n  background: var(--personagem-bg);\r\n\r\n  shape-outside: circle();\r\n  -webkit-clip-path: circle();\r\n          clip-path: circle();\r\n\r\n  float: left;\r\n}\r\n\r\n.img-profissao {\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.info-amigo {\r\n  width: 65%;\r\n  height: 100%;\r\n  margin-left: 5%;\r\n\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n\r\n  float: left;\r\n}\r\n\r\n.nick {\r\n  padding-top: 5%;\r\n  line-height: 0.75;\r\n  font-weight: bold;\r\n}\r\n\r\n.texto-profissao {\r\n  color: var(--blue-jeans);\r\n  font-weight: 400;\r\n}\r\n\r\n.central {\r\n  padding: 1.5%;\r\n  border-radius: 3px;\r\n  -webkit-backdrop-filter: blur(2px);\r\n          backdrop-filter: blur(2px);\r\n  border: 2px solid var(--box-border);\r\n  box-sizing: border-box;\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.central div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .central {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .amigos {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .central {\r\n    width: 70%;\r\n    height: 100%;\r\n\r\n    margin-left: 5%;\r\n  }\r\n\r\n  .amigos {\r\n    width: 25%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2.5vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1.5vw;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .central {\r\n    width: 75%;\r\n    height: 100%;\r\n\r\n    margin-left: 5%;\r\n  }\r\n\r\n  .amigos {\r\n    width: 20%;\r\n    height: 100%;\r\n  }\r\n\r\n  .nick {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .texto-profissao {\r\n    font-size: 1vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQ0FBbUM7O0VBRW5DLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7O0VBRVgsK0JBQStCO0VBQy9CLDBDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTs7RUFFWixlQUFlOztFQUVmLGdDQUFnQzs7RUFFaEMsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtVQUFuQixtQkFBbUI7O0VBRW5CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztFQUVYLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlOztFQUVmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLHFEQUFxRDs7QUFDckQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxtREFBbUQ7O0FBQ25EO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsWUFBWTs7SUFFWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLG9FQUFvRTs7QUFDcEU7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZOztJQUVaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJjZW50cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1pZ29zIHtcclxuICBwYWRkaW5nOiAwLjI1JTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmFtaWdvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1JTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmZ1bmRvLXByb2Zpc3NhbyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGVyc29uYWdlbS1iZyk7XHJcblxyXG4gIHNoYXBlLW91dHNpZGU6IGNpcmNsZSgpO1xyXG4gIGNsaXAtcGF0aDogY2lyY2xlKCk7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uaW1nLXByb2Zpc3NhbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLWFtaWdvIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmljayB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjc1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dG8tcHJvZmlzc2FvIHtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1qZWFucyk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNlbnRyYWwge1xyXG4gIHBhZGRpbmc6IDEuNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJveC1ib3JkZXIpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNlbnRyYWwgZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuY2VudHJhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hbWlnb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5jZW50cmFsIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAyLjV2dztcclxuICB9XHJcblxyXG4gIC50ZXh0by1wcm9maXNzYW8ge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jZW50cmFsIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmFtaWdvcyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5pY2sge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgfVxyXG5cclxuICAudGV4dG8tcHJvZmlzc2FvIHtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "s2Oy":
    /*!**********************************************!*\
      !*** ./src/app/central/central.component.ts ***!
      \**********************************************/

    /*! exports provided: CentralComponent */

    /***/
    function s2Oy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentralComponent", function () {
        return CentralComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_central_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./central.component.html */
      "58W+");
      /* harmony import */


      var _central_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./central.component.css */
      "mvYP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _taskforce_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../taskforce.service */
      "tsgC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var CentralComponent = /*#__PURE__*/function () {
        function CentralComponent(taskForceService, router) {
          _classCallCheck(this, CentralComponent);

          this.taskForceService = taskForceService;
          this.router = router;
          this.keySalaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.relatorioPartida = [];
          this.dica = true;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.baseUrl = this.taskForceService.baseUrl() + 'assets/images/';
        }

        _createClass(CentralComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.flagRelatorio = false;
                      this.sala = this.taskForceService.getSala(this.keySala);
                      this.sala.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (s) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                          return regeneratorRuntime.wrap(function _callee20$(_context20) {
                            while (1) {
                              switch (_context20.prev = _context20.next) {
                                case 0:
                                  this.numRodada = s.numRodada;
                                  this.statusSala = s.status;
                                  this.vidas = s.vidas;
                                  this.visibilidadeURL = s.visibilidadeURL;
                                  this.privacidade = s.privacidade;
                                  _context20.next = 7;
                                  return this.taskForceService.checarNick(this.keySala, s.lider);

                                case 7:
                                  if (_context20.sent) {
                                    _context20.next = 11;
                                    break;
                                  }

                                  this.lider = s.lider;
                                  _context20.next = 13;
                                  break;

                                case 11:
                                  this.taskForceService.designarLider(this.keySala, this.nickJogador);
                                  this.lider = this.nickJogador;

                                case 13:
                                  if (this.visibilidadeURL) {
                                    this.router.navigate(['/' + this.keySala]);
                                  } else {
                                    this.router.navigate(['/']);
                                  }

                                  if (this.vidas <= 0) {
                                    this.taskForceService.setStatusSala(this.keySala, 'espera');
                                  }

                                case 15:
                                case "end":
                                  return _context20.stop();
                              }
                            }
                          }, _callee20, this);
                        }));
                      });
                      _context22.next = 5;
                      return this.taskForceService.getProfissoesSorteadas(this.keySala);

                    case 5:
                      this.listaProfissoesSorteadas = _context22.sent;
                      this.listaProfissoesSorteadas.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (lista) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                          return regeneratorRuntime.wrap(function _callee21$(_context21) {
                            while (1) {
                              switch (_context21.prev = _context21.next) {
                                case 0:
                                  if (!this.keyProfissaoSorteada) {
                                    _context21.next = 7;
                                    break;
                                  }

                                  _context21.next = 3;
                                  return this.taskForceService.getProfissao(this.keySala, this.keyProfissaoSorteada);

                                case 3:
                                  if (_context21.sent) {
                                    _context21.next = 7;
                                    break;
                                  }

                                  this.keySala = null;
                                  this.keySalaChange.emit(this.keySala);
                                  this.router.navigate(['/']);

                                case 7:
                                  this.numJogadores = lista.length;
                                  this.tempoMonitor = Math.floor((10 + this.numJogadores * 5) * Math.pow(0.9, this.numRodada));
                                  this.numTarefasNecessarias = Math.floor((5 + this.numJogadores * 2) * Math.pow(1.2, this.numRodada));

                                case 10:
                                case "end":
                                  return _context21.stop();
                              }
                            }
                          }, _callee21, this);
                        }));
                      });

                    case 7:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "removerProfissao",
          value: function removerProfissao() {
            this.taskForceService.removerProfissao(this.keySala, this.keyProfissaoSorteada);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }, {
          key: "unloadHandler",
          value: function unloadHandler(event) {
            this.removerProfissao();

            if (this.numJogadores <= 1) {
              this.taskForceService.removerSala(this.keySala);
            }
          }
        }]);

        return CentralComponent;
      }();

      CentralComponent.ctorParameters = function () {
        return [{
          type: _taskforce_service__WEBPACK_IMPORTED_MODULE_7__["TaskforceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      CentralComponent.propDecorators = {
        keySala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        keySalaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        sala: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nickJogador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        unloadHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:unload', ['$event']]
        }]
      };
      CentralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'central',
        template: _raw_loader_central_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
          opacity: 0
        }))])])],
        styles: [_central_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CentralComponent);
      /***/
    },

    /***/
    "sVpJ":
    /*!**********************************************!*\
      !*** ./src/app/monitor/monitor.component.ts ***!
      \**********************************************/

    /*! exports provided: MonitorComponent */

    /***/
    function sVpJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonitorComponent", function () {
        return MonitorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./monitor.component.html */
      "HsPz");
      /* harmony import */


      var _monitor_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./monitor.component.css */
      "WWLw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MonitorComponent = /*#__PURE__*/function () {
        function MonitorComponent() {
          _classCallCheck(this, MonitorComponent);

          this.dicaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(MonitorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dicaMonitor = this.dica;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            document.documentElement.style.setProperty('--tamanho', this.texto.length * 0.6 + 0.6 + 'em');
          }
        }, {
          key: "fechar",
          value: function fechar() {
            this.dicaMonitor = false;
            this.dica = false;
            this.dicaChange.emit(this.dica);
          }
        }]);

        return MonitorComponent;
      }();

      MonitorComponent.ctorParameters = function () {
        return [];
      };

      MonitorComponent.propDecorators = {
        texto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tempo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        pausa: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        corMonitor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dica: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dicaChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      MonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'monitor',
        template: _raw_loader_monitor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_monitor_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MonitorComponent);
      /***/
    },

    /***/
    "tB4E":
    /*!*********************************************!*\
      !*** ./src/app/painel/painel.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function tB4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".painel {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.monitor {\r\n  height: 49%;\r\n  width: 100%;\r\n}\r\n\r\n.quadro {\r\n  height: 50%;\r\n  width: 100%;\r\n  margin-top: 1%;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .monitor {\r\n    height: 29%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 70%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) {\r\n  .monitor {\r\n    height: 29%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 70%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .monitor {\r\n    height: 49%;\r\n  }\r\n\r\n  .quadro {\r\n    height: 50%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsaURBQWlEOztBQUNqRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEscURBQXFEOztBQUNyRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoicGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFpbmVsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb25pdG9yIHtcclxuICBoZWlnaHQ6IDQ5JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnF1YWRybyB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9uaXRvciB7XHJcbiAgICBoZWlnaHQ6IDI5JTtcclxuICB9XHJcblxyXG4gIC5xdWFkcm8ge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb25pdG9yIHtcclxuICAgIGhlaWdodDogMjklO1xyXG4gIH1cclxuXHJcbiAgLnF1YWRybyB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1vbml0b3Ige1xyXG4gICAgaGVpZ2h0OiA0OSU7XHJcbiAgfVxyXG5cclxuICAucXVhZHJvIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "tsgC":
    /*!**************************************!*\
      !*** ./src/app/taskforce.service.ts ***!
      \**************************************/

    /*! exports provided: TaskforceService */

    /***/
    function tsgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskforceService", function () {
        return TaskforceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/database */
      "bSaC");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TaskforceService = /*#__PURE__*/function () {
        function TaskforceService(db, http) {
          _classCallCheck(this, TaskforceService);

          this.db = db;
          this.http = http;
        }

        _createClass(TaskforceService, [{
          key: "baseUrl",
          value: function baseUrl() {
            return 'https://raw.githubusercontent.com/fabioconejo/taskforce/master/src/';
          }
        }, {
          key: "criarSala",
          value: function criarSala() {
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
              registros: []
            };
            this.db.database.ref('salas').child(key).set(sala);
            return key;
          }
        }, {
          key: "designarLider",
          value: function designarLider(keySala, nick) {
            this.db.object('salas/' + keySala).update({
              lider: nick
            });
          }
        }, {
          key: "checarExistenciaSala",
          value: function checarExistenciaSala(keySala) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var result;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      result = false;
                      _context23.next = 3;
                      return this.db.database.ref('salas/').orderByKey().equalTo(keySala).once('value', function (snap) {
                        result = snap.val() !== null;
                      });

                    case 3:
                      return _context23.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "checarStatusSala",
          value: function checarStatusSala(keySala) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var result;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      result = false;
                      _context24.next = 3;
                      return this.db.database.ref('salas/' + keySala + '/status/').once('value', function (snap) {
                        result = snap.val() === 'espera';
                      });

                    case 3:
                      return _context24.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "checarNick",
          value: function checarNick(keySala, nick) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var result;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      result = false;
                      _context25.next = 3;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/').orderByChild('responsavel').equalTo(nick).once('value', function (snap) {
                        result = snap.val() == null;
                      });

                    case 3:
                      return _context25.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "aoSairSala",
          value: function aoSairSala(keySala, keyProfissao) {
            this.db.object('salas/' + keySala + '/profissoes/' + keyProfissao).remove();
          }
        }, {
          key: "aoDesconectarSala",
          value: function aoDesconectarSala(keySala, keyProfissao) {
            this.db.object('salas/' + keySala + '/profissoes/' + keyProfissao).query.ref.onDisconnect().remove();
          }
        }, {
          key: "getSala",
          value: function getSala(keySala) {
            return this.db.object('salas/' + keySala).valueChanges();
          }
        }, {
          key: "setStatusSala",
          value: function setStatusSala(keySala, status) {
            this.db.object('salas/' + keySala).update({
              status: status
            });
          }
        }, {
          key: "aoDesconectarProfissao",
          value: function aoDesconectarProfissao(keySala, keyProfissao) {
            this.db.object('salas/' + keySala + '/profissoes/' + keyProfissao).query.ref.onDisconnect().remove();
          }
        }, {
          key: "getProfissoes",
          value: function getProfissoes() {
            return this.http.get('assets/json/taskforce.json').toPromise();
          }
        }, {
          key: "getProfissoesSorteadas",
          value: function getProfissoesSorteadas(keySala) {
            return this.db.list('salas/' + keySala + '/profissoes/').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            }));
          }
        }, {
          key: "sortearProfissao",
          value: function sortearProfissao(keySala, nickJogador, numRodada) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var profissoes, profissao, result, i, j, numTarefas, tarefas, info, keyProfissao, _i;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.getProfissoes();

                    case 2:
                      profissoes = _context26.sent;
                      i = Math.floor(Math.random() * profissoes.length);
                      j = i;

                    case 5:
                      profissao = profissoes[j++ % profissoes.length];
                      _context26.next = 8;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/').orderByChild('id').equalTo(profissao.id).once('value', function (snap) {
                        result = snap.val() !== null;
                      });

                    case 8:
                      if (result && i !== j % profissoes.length) {
                        _context26.next = 5;
                        break;
                      }

                    case 9:
                      numTarefas = Math.min(numRodada * 1, 8);
                      numTarefas = Math.max(1, numTarefas);
                      tarefas = profissao.tarefas.sort(function () {
                        return 0.5 - Math.random();
                      }).slice(0, numTarefas);
                      info = {
                        id: profissao.id,
                        pronto: false,
                        profissao: profissao.profissao,
                        imagem: profissao.imagem,
                        responsavel: nickJogador,
                        acertos: 0,
                        erros: 0
                      };
                      keyProfissao = this.db.database.ref('salas/' + keySala + '/profissoes/').push(info).key;

                      for (_i = 0; _i < tarefas.length; _i++) {
                        this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/').push(tarefas[_i]);
                      }

                      return _context26.abrupt("return", keyProfissao);

                    case 16:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "sortearProfissaoMonitor",
          value: function sortearProfissaoMonitor(keySala) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var keyProfissao, snapshotTarefas, j;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/').once('value', function (snapshot) {
                        j = Math.floor(Math.random() * Object.keys(snapshot.val()).length);
                        keyProfissao = Object.keys(snapshot.val())[j];
                      });

                    case 2:
                      return _context27.abrupt("return", keyProfissao);

                    case 3:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "getProfissao",
          value: function getProfissao(keySala, keyProfissao) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var profissao;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).once('value', function (snapshot) {
                        profissao = snapshot.val();
                      });

                    case 2:
                      return _context28.abrupt("return", profissao);

                    case 3:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "resetarProfissao",
          value: function resetarProfissao(keySala, keyProfissao) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).update({
                        id: 0,
                        profissao: 'desconhecido',
                        imagem: '000-unknown.png',
                        pronto: false
                      });

                    case 2:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "removerProfissao",
          value: function removerProfissao(keySala, keyProfissao) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).remove();

                    case 2:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "sortearTarefa",
          value: function sortearTarefa(keySala, keyProfissao) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var keyTarefa;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/').once('value', function (snapshot) {
                        keyTarefa = Object.keys(snapshot.val())[Math.floor(Math.random() * Object.keys(snapshot.val()).length)];
                      });

                    case 2:
                      return _context31.abrupt("return", keyTarefa);

                    case 3:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "getTarefa",
          value: function getTarefa(keySala, keyProfissao, keyTarefa) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var _this15 = this;

              var tarefa;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/' + keyTarefa).once('value', function (snapshot) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
                          return regeneratorRuntime.wrap(function _callee32$(_context32) {
                            while (1) {
                              switch (_context32.prev = _context32.next) {
                                case 0:
                                  _context32.next = 2;
                                  return snapshot.val();

                                case 2:
                                  tarefa = _context32.sent;

                                case 3:
                                case "end":
                                  return _context32.stop();
                              }
                            }
                          }, _callee32);
                        }));
                      });

                    case 2:
                      return _context33.abrupt("return", tarefa);

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "setTarefa",
          value: function setTarefa(keySala, keyProfissao, keyTarefa, tarefa) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/tarefas/' + keyTarefa).update(tarefa);

                    case 2:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "sortearItem",
          value: function sortearItem(tarefa) {
            switch (tarefa.tipo) {
              case 'acao':
                break;

              case 'estado':
                if (tarefa.estado[0] === tarefa.verbo) {
                  tarefa.verbo = tarefa.estado[1];
                  tarefa.texto = tarefa.eTexto[1];
                } else {
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
        }, {
          key: "adicionarRegistro",
          value: function adicionarRegistro(keySala, keyProfissao, keyTarefa, texto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var registro, idProfissao, idTarefa, snapshotTarefas;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).once('value', function (snapshot) {
                        idProfissao = snapshot.val().id;
                        snapshotTarefas = snapshot.child('tarefas').child(keyTarefa);
                        idTarefa = snapshotTarefas.val().id;
                      });

                    case 2:
                      registro = {
                        idProfissao: idProfissao,
                        id: idTarefa,
                        ativo: true,
                        concluido: false,
                        texto: texto
                      };
                      return _context35.abrupt("return", this.db.database.ref('salas/' + keySala + '/registros/').push(registro).key);

                    case 4:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "getRegistro",
          value: function getRegistro(keySala, keyRegistro) {
            return this.db.object('salas/' + keySala + '/registros/' + keyRegistro).valueChanges();
          }
        }, {
          key: "getRegistros",
          value: function getRegistros(keySala) {
            return this.db.list('salas/' + keySala + '/registros/').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            }));
          }
        }, {
          key: "concluirRegistro",
          value: function concluirRegistro(keySala, keyProfissao, registro, vidas) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              var result, refRegistros, acaoIncorreta, snapshot, numTarefas;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      result = false;
                      refRegistros = this.db.database.ref('salas/' + keySala + '/registros/');
                      acaoIncorreta = true;
                      _context36.next = 5;
                      return refRegistros.once('value');

                    case 5:
                      snapshot = _context36.sent;
                      numTarefas = 0;
                      snapshot.forEach(function (r) {
                        if (r.val().ativo && r.val().idProfissao === registro.idProfissao && r.val().id === registro.id && r.val().texto === registro.texto) {
                          refRegistros.child(r.key).update({
                            ativo: false,
                            concluido: true
                          });
                          acaoIncorreta = false;
                          numTarefas++;
                        }
                      });

                      if (!(numTarefas > 0)) {
                        _context36.next = 12;
                        break;
                      }

                      _context36.next = 11;
                      return this.pontuarJogador(keySala, keyProfissao, true, 0.5 * numTarefas);

                    case 11:
                      result = true;

                    case 12:
                      if (!acaoIncorreta) {
                        _context36.next = 17;
                        break;
                      }

                      this.removerVida(keySala, vidas);
                      _context36.next = 16;
                      return this.pontuarJogador(keySala, keyProfissao, false, 1);

                    case 16:
                      result = false;

                    case 17:
                      return _context36.abrupt("return", result);

                    case 18:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "desabilitarRegistro",
          value: function desabilitarRegistro(keySala, keyRegistro, keyProfissao, keyProfissaoMonitor, vidas) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var concluido;
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      concluido = true;
                      this.db.database.ref('salas/' + keySala + '/registros/' + keyRegistro).update({
                        ativo: false
                      });
                      _context37.next = 4;
                      return this.db.database.ref('salas/' + keySala + '/registros/' + keyRegistro + '/concluido').once('value', function (snapshot) {
                        concluido = snapshot.val();
                      });

                    case 4:
                      if (concluido) {
                        _context37.next = 10;
                        break;
                      }

                      _context37.next = 7;
                      return this.pontuarJogador(keySala, keyProfissao, false, 0.5);

                    case 7:
                      _context37.next = 9;
                      return this.pontuarJogador(keySala, keyProfissaoMonitor, false, 0.5);

                    case 9:
                      this.removerVida(keySala, vidas);

                    case 10:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "limparRegistros",
          value: function limparRegistros(keySala) {
            this.db.database.ref('salas/' + keySala + '/registros/').remove();
          }
        }, {
          key: "removerVida",
          value: function removerVida(keySala, vidas) {
            this.db.database.ref('salas/' + keySala).update({
              vidas: vidas - 1
            });
          }
        }, {
          key: "pontuarJogador",
          value: function pontuarJogador(keySala, keyProfissao, acerto, valor) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      if (!acerto) {
                        _context38.next = 6;
                        break;
                      }

                      _context38.next = 3;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/acertos').once('value', function (snapshot) {
                        valor = valor + snapshot.val();
                      });

                    case 3:
                      this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).update({
                        acertos: valor
                      });
                      _context38.next = 9;
                      break;

                    case 6:
                      _context38.next = 8;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao + '/erros').once('value', function (snapshot) {
                        valor = valor + snapshot.val();
                      });

                    case 8:
                      this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).update({
                        erros: valor
                      });

                    case 9:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "adicionarRodada",
          value: function adicionarRodada(keySala, rodada) {
            this.db.database.ref('salas/' + keySala).update({
              numRodada: rodada + 1
            });
          }
        }, {
          key: "resetarSala",
          value: function resetarSala(keySala) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.next = 2;
                      return this.db.database.ref('salas/' + keySala).update({
                        vidas: 10,
                        numRodada: 1
                      });

                    case 2:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "removerSala",
          value: function removerSala(keySala) {
            this.db.database.ref('salas/' + keySala).remove();
          }
        }, {
          key: "ficarPronto",
          value: function ficarPronto(keySala, keyProfissao, valor) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.db.database.ref('salas/' + keySala + '/profissoes/' + keyProfissao).update({
                        pronto: valor
                      });

                    case 2:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "alterarVisibilidadeURL",
          value: function alterarVisibilidadeURL(keySala, valor) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return this.db.database.ref('salas/' + keySala).update({
                        visibilidadeURL: valor
                      });

                    case 2:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "alterarPrivacidade",
          value: function alterarPrivacidade(keySala, valor) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.db.database.ref('salas/' + keySala).update({
                        privacidade: valor
                      });

                    case 2:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }, {
          key: "checarPrivacidadeSala",
          value: function checarPrivacidadeSala(keySala) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var result;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      result = false;
                      _context43.next = 3;
                      return this.db.database.ref('salas/' + keySala + '/privacidade/').once('value', function (snap) {
                        result = snap.val();
                      });

                    case 3:
                      return _context43.abrupt("return", result);

                    case 4:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }]);

        return TaskforceService;
      }();

      TaskforceService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TaskforceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TaskforceService);
      /***/
    },

    /***/
    "uD+/":
    /*!*********************************************!*\
      !*** ./src/app/quadro/quadro.component.css ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function uD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@-webkit-keyframes slide-in-top {\r\n  0% {\r\n    transform: translate(-50%, -5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slide-in-top {\r\n  0% {\r\n    transform: translate(-50%, -5%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, 0%);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.quadro {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n\r\n  border: 2px solid var(--box-border);\r\n}\r\n\r\n.tarefa {\r\n  float: left;\r\n}\r\n\r\n.vazio {\r\n  background-color: var(--box-bg);\r\n  float: left;\r\n}\r\n\r\n.dica {\r\n  position: absolute;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--monitor-bg);\r\n  border: 2px solid var(--box-border);\r\n  border-radius: 3px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n\r\n  -webkit-animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s\r\n    both;\r\n\r\n          animation: slide-in-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.75s\r\n    both;\r\n}\r\n\r\n.fechar {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 50%;\r\n    height: 25%;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 12.5%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 767px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 50%;\r\n    height: 25%;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 10%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.4em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 95%;\r\n    height: 15%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 0.75%;\r\n    top: -2.5%;\r\n  }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 70%;\r\n    height: 20%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    line-height: 1.6em;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: -7.5%;\r\n  }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .tarefa,\r\n  .vazio {\r\n    width: 25%;\r\n    height: 50%;\r\n  }\r\n\r\n  .dica {\r\n    width: 90%;\r\n    height: 15%;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n  }\r\n\r\n  .quebra-linha {\r\n    display: none;\r\n  }\r\n\r\n  .fechar {\r\n    right: 1%;\r\n    top: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwrQkFBK0I7SUFDL0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsVUFBVTtFQUNaO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixVQUFVO0VBQ1o7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjs7RUFFbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCOztFQUVsQjtRQUNNOztVQUROO1FBQ007QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLGlEQUFpRDs7QUFDakQ7RUFDRTs7SUFFRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsb0VBQW9FOztBQUNwRTtFQUNFOztJQUVFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsbURBQW1EOztBQUNuRDtFQUNFOztJQUVFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0U7O0lBRUUsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoicXVhZHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5xdWFkcm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3gtYm9yZGVyKTtcclxufVxyXG5cclxuLnRhcmVmYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi52YXppbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm94LWJnKTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRpY2Ege1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9uaXRvci1iZyk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm94LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBhbmltYXRpb246IHNsaWRlLWluLWJvdHRvbSAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAwLjc1c1xyXG4gICAgYm90aDtcclxufVxyXG5cclxuLmZlY2hhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50YXJlZmEsXHJcbiAgLnZhemlvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDEyLjUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiAtNy41JTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGFyZWZhLFxyXG4gIC52YXppbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IC03LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC50YXJlZmEsXHJcbiAgLnZhemlvIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5kaWNhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgfVxyXG5cclxuICAucXVlYnJhLWxpbmhhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmVjaGFyIHtcclxuICAgIHJpZ2h0OiAwLjc1JTtcclxuICAgIHRvcDogLTIuNSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAudGFyZWZhLFxyXG4gIC52YXppbyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZGljYSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgLmZlY2hhciB7XHJcbiAgICByaWdodDogMSU7XHJcbiAgICB0b3A6IC03LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRhcmVmYSxcclxuICAudmF6aW8ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRpY2Ege1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICB9XHJcblxyXG4gIC5xdWVicmEtbGluaGEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mZWNoYXIge1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiA1JTtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "x3+4":
    /*!******************************************!*\
      !*** ./src/app/botao/botao.component.ts ***!
      \******************************************/

    /*! exports provided: BotaoComponent */

    /***/
    function x34(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BotaoComponent", function () {
        return BotaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./botao.component.html */
      "43GX");
      /* harmony import */


      var _botao_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./botao.component.css */
      "7YQl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BotaoComponent = /*#__PURE__*/function () {
        function BotaoComponent() {
          _classCallCheck(this, BotaoComponent);

          this.clique = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(BotaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checarTipoAcao();
          }
        }, {
          key: "checarTipoAcao",
          value: function checarTipoAcao() {
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
        }, {
          key: "inverter",
          value: function inverter() {
            if (this.tipo == 'estado') {
              if (this.cor == 'verde') {
                this.texto = this.estado[1];
                this.cor = 'vermelho';
              } else if (this.cor == 'vermelho') {
                this.texto = this.estado[0];
                this.cor = 'verde';
              }
            }
          }
        }]);

        return BotaoComponent;
      }();

      BotaoComponent.ctorParameters = function () {
        return [];
      };

      BotaoComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['b']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['l']
        }],
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        idProfissao: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tipo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        texto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tamanhoFonte: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        estado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lista: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        clickCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        clique: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      BotaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'botao',
        template: _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_botao_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BotaoComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map