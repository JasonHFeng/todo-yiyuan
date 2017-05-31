webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(25);
/**
 * 路由各项配置
 */



// 全局使用路由
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const routes = [
// {
//     name: 'home',
//     path: '/',
//     redirect: '/sellment'
// },
{
    name: 'login',
    path: '/login',
    component: __webpack_require__(30)
}, {
    name: 'notfound',
    path: '/404',
    component: __webpack_require__(31)
}, { // 404页面路由必须放最后,引导所有未知链接跳转404
    path: '*',
    redirect: '/404'
}];

// 路由配置
const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    base: __dirname,
    routes: routes
});

/* harmony default export */ __webpack_exports__["a"] = (router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_plugins_alert_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_plugins_toast_index_js__ = __webpack_require__(5);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vux_src_plugins_alert_index_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vux_src_plugins_toast_index_js__["a" /* default */]);

// 移除移动端点击延迟
const FastClick = __webpack_require__(6);
FastClick.attach(document.body);

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_dialog__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__x_dialog__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    XDialog: __WEBPACK_IMPORTED_MODULE_0__x_dialog___default.a
  },
  created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value;
    }
  },
  props: {
    value: Boolean,
    title: String,
    buttonText: String,
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    }
  },
  data() {
    return {
      showValue: false
    };
  },
  methods: {
    _onHide() {
      this.showValue = false;
    }
  },
  watch: {
    value(val) {
      this.showValue = val;
    },
    showValue(val) {
      this.$emit('input', val);
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_safari_fix__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_safari_fix__["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-mask'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  created() {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value;
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit(val ? 'on-show' : 'on-hide');
      this.$emit('input', val);
    }
  },
  data() {
    return {
      currentValue: false
    };
  },
  methods: {
    onTouchMove: function (event) {
      !this.scroll && event.preventDefault();
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'yiyuan'
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    }
});

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-toast"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowMask && _vm.show),
      expression: "isShowMask && show"
    }],
    staticClass: "weui-mask_transparent"
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.currentTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "weui-toast",
    class: _vm.toastClass,
    style: ({
      width: _vm.width
    })
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type !== 'text'),
      expression: "type !== 'text'"
    }],
    staticClass: "weui-icon-success-no-circle weui-icon_toast"
  }), _vm._v(" "), (_vm.text) ? _c('p', {
    staticClass: "weui-toast__content",
    style: (_vm.style),
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _c('p', {
    staticClass: "weui-toast__content"
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-alert"
  }, [_c('x-dialog', {
    attrs: {
      "mask-transition": _vm.maskTransition,
      "dialog-transition": _vm.dialogTransition
    },
    on: {
      "on-hide": function($event) {
        _vm.$emit('on-hide')
      },
      "on-show": function($event) {
        _vm.$emit('on-show')
      }
    },
    model: {
      value: (_vm.showValue),
      callback: function($$v) {
        _vm.showValue = $$v
      },
      expression: "showValue"
    }
  }, [_c('div', {
    staticClass: "weui-dialog__hd"
  }, [_c('strong', {
    staticClass: "weui-dialog__title"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-dialog__bd"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-dialog__ft"
  }, [_c('a', {
    staticClass: "weui-dialog__btn weui-dialog__btn_primary",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm._onHide
    }
  }, [_vm._v(_vm._s(_vm.buttonText || '确定'))])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-dialog",
    on: {
      "touchmove": _vm.onTouchMove
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.maskTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "weui-mask",
    on: {
      "click": function($event) {
        _vm.hideOnBlur && (_vm.currentValue = false)
      }
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.dialogTransition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "weui-dialog"
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("登录页")])
},staticRenderFns: []}

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)


module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
],[8]);
//# sourceMappingURL=app.cdadb2c8b23707b0992f.js.map