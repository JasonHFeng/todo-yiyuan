webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(75)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(110);
/**
 * 路由各项配置
 */



// 全局使用路由
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    name: 'home',
    path: '/home',
    component: __webpack_require__(121)
}, {
    name: 'login',
    path: '/login',
    component: __webpack_require__(118)
}, {
    name: 'signup',
    path: '/signup',
    component: __webpack_require__(119)
}, {
    name: 'notfound',
    path: '/404',
    component: __webpack_require__(120)
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_plugins_ajax_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_plugins_alert_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vux_src_plugins_toast_index_js__ = __webpack_require__(22);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vux_src_plugins_alert_index_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vux_src_plugins_toast_index_js__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vux_src_plugins_ajax_index_js__["a" /* default */]);

// 移除移动端点击延迟
const FastClick = __webpack_require__(23);
FastClick.attach(document.body);

// 注册导航全局钩子，检查是否已登录
// router.beforeEach((to, from, next) => {
//     let token = null
//     if (token != null && to.path == '/login') {
//         // 已登录不能进入登录页
//         // next('/sellment')
//     }
//     if (token === null && to.path !== '/login' && to.path !== '/404') {
//         // 未登录
//         next('/login')
//     } else {
//         next()
//     }
// })

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_dialog__ = __webpack_require__(117);
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
    content: String,
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
/* 45 */
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
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    },
    disabled: Boolean
  },
  computed: {
    classNames() {
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      const names = {
        'vux-tap-active': !this.disabled
      };

      if (this.$parent.defaultItemClass) {
        names[this.$parent.defaultItemClass] = true;
      }

      if (this.$parent.selectedItemClass) {
        let selected = false;
        if (this.$parent.type === 'radio') {
          if (isSimpleValue && this.$parent.currentValue === this.value) {
            selected = true;
          } else if (typeof this.value === 'object' && isEqual(this.$parent.currentValue, this.value)) {
            selected = true;
          }
        } else {
          if (typeof this.value === 'string') {
            if (this.$parent.currentValue.indexOf(this.value) > -1) {
              selected = true;
            }
          } else if (this.$parent.currentValue && this.$parent.currentValue.length) {
            const match = this.$parent.currentValue.filter(one => {
              return isEqual(one, this.value);
            });
            selected = match.length > 0;
          }
        }
        names[this.$parent.selectedItemClass] = selected;
      }

      if (this.$parent.disabledItemClass) {
        names[this.$parent.disabledItemClass] = this.disabled;
      }

      return names;
    }
  },
  methods: {
    select() {
      if (this.$parent.type === 'radio') {
        this.selectRadio();
      } else {
        this.selectCheckbox();
      }
    },
    selectRadio() {
      console.log();
      if (!this.disabled) {
        if (this.$parent.currentValue === this.value) {
          this.$parent.currentValue = '';
        } else {
          this.$parent.currentValue = this.value;
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    },
    selectCheckbox() {
      if (!this.$parent.currentValue || this.$parent.currentValue === null) {
        this.$parent.currentValue = [];
      }
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      if (!this.disabled) {
        let index = -1;
        if (isSimpleValue) {
          index = this.$parent.currentValue.indexOf(this.value);
        } else {
          index = this.$parent.currentValue.map(one => JSON.stringify(one)).indexOf(JSON.stringify(this.value));
        }
        if (index > -1) {
          this.$parent.currentValue.splice(index, 1);
        } else {
          if (!this.$parent.max || this.$parent.max && this.$parent.currentValue !== null && this.$parent.currentValue.length < this.$parent.max) {
            if (!this.$parent.currentValue || !this.$parent.currentValue.length) {
              this.$parent.currentValue = [];
            }
            this.$parent.currentValue.push(this.value);
          }
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    }
  }
});

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/***/ }),
/* 46 */
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
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [String, Number, Array, Object],
    max: Number
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
      this.$emit('on-change', newValue);
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datetimepicker__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inline_desc__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_date_format__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_date_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tools_date_format__);
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
  mixins: [__WEBPACK_IMPORTED_MODULE_4__libs_base__["a" /* default */]],
  components: {
    Group: __WEBPACK_IMPORTED_MODULE_2__group___default.a,
    InlineDesc: __WEBPACK_IMPORTED_MODULE_3__inline_desc___default.a,
    Icon: __WEBPACK_IMPORTED_MODULE_0__icon___default.a
  },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: String,
    endDate: String,
    valueTextAlign: String,
    displayFormat: Function,
    readonly: Boolean,
    hourList: Array,
    minuteList: Array,
    show: Boolean
  },
  created() {
    this.isFirstSetValue = false;
    this.currentValue = this.value;
    this.handleChangeEvent = true;
  },
  data() {
    return {
      currentValue: null,
      valid: true,
      errors: {}
    };
  },
  mounted() {
    const uuid = this.uuid;
    if (!this.readonly) {
      this.$nextTick(() => {
        this.$el.setAttribute('id', `vux-datetime-${uuid}`);
        this.render();
      });
    }
  },
  computed: {
    _value() {
      if (!this.currentValue) {
        return this.placeholder || '';
      } else {
        return this.displayFormat ? this.displayFormat(this.currentValue) : this.currentValue;
      }
    },
    pickerOptions() {
      const _this = this;
      const options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: this.confirmText,
        cancelText: _this.cancelText,
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        hourList: this.hourList,
        minuteList: this.minuteList,
        onConfirm(value) {
          _this.currentValue = value;
        },
        onClear(value) {
          _this.$emit('on-clear', value);
        },
        onHide() {
          _this.$emit('update:show', false);
          _this.validate();
        }
      };
      if (this.minYear) {
        options.minYear = this.minYear;
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear;
      }
      return options;
    },
    firstError() {
      let key = Object.keys(this.errors)[0];
      return this.errors[key];
    }
  },
  methods: {
    render() {
      this.$nextTick(() => {
        this.picker && this.picker.destroy();
        this.picker = new __WEBPACK_IMPORTED_MODULE_1__datetimepicker__["a" /* default */](this.pickerOptions);
      });
    },
    validate() {
      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填';
        return;
      }
      this.valid = true;
      this.errors = {};
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.picker && this.picker.show(this.currentValue);
      }
    },
    currentValue(val, oldVal) {
      this.$emit('input', val);
      if (!this.isFirstSetValue) {
        this.isFirstSetValue = true;
        oldVal && this.$emit('on-change', val);
      } else {
        this.$emit('on-change', val);
      }
      this.validate();
    },
    startDate() {
      this.render();
    },
    endDate() {
      this.render();
    },
    format(val) {
      if (this.currentValue) {
        this.currentValue = __WEBPACK_IMPORTED_MODULE_5__tools_date_format___default()(this.currentValue, val);
      }
      this.render();
    },
    value(val) {
      if (this.currentValue !== val) {
        this.currentValue = val;
        this.render();
      }
    }
  },
  beforeDestroy() {
    this.picker && this.picker.destroy();
  }
});

/***/ }),
/* 48 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number]
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_safari_fix__ = __webpack_require__(68);
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_router__ = __webpack_require__(67);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: String
  },
  methods: {
    onClick() {
      !this.disabled && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__libs_router__["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    classes() {
      return [{
        'weui-btn_disabled': this.disabled,
        'weui-btn_mini': this.mini
      }, `weui-btn_${this.type}`, this.plain ? `weui-btn_plain-${this.type}` : '', this.showLoading ? `weui-btn_loading` : ''];
    }
  }
});

/***/ }),
/* 52 */
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
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.currentValue = val;
      },
      immediate: true
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inline_desc__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inline_desc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__inline_desc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isEmail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_validator_lib_isMobilePhone__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_validator_lib_isMobilePhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_validator_lib_isMobilePhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_debounce__ = __webpack_require__(70);
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










const validators = {
  'email': {
    fn: __WEBPACK_IMPORTED_MODULE_3_validator_lib_isEmail___default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return __WEBPACK_IMPORTED_MODULE_4_validator_lib_isMobilePhone___default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    this.currentValue = this.value || '';
    if (!this.title && !this.placeholder && !this.currentValue) {
      console.warn('no title and no placeholder?');
    }
    if (this.required && !this.currentValue) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__tools_debounce__["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  mounted() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__libs_base__["a" /* default */]],
  components: {
    Icon: __WEBPACK_IMPORTED_MODULE_1__icon___default.a,
    InlineDesc: __WEBPACK_IMPORTED_MODULE_2__inline_desc___default.a
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String
  },
  computed: {
    labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  methods: {
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler() {
      this.$emit('on-focus', this.currentValue);
    },
    onBlur() {
      this.setTouched();
      this.validate();
      this.$emit('on-blur', this.currentValue);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType];
        if (validator) {
          this.valid = validator['fn'](this.currentValue);
          if (!this.valid) {
            this.errors.format = validator['msg'] + '格式不对哦~';
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          if (!this.firstError) {
            this.getError();
          }
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          if (!this.firstError) {
            this.getError();
          }
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    }
  },
  data() {
    let data = {
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: ''
    };
    return data;
  },
  watch: {
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
      this.$emit('input', newVal);
      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_common_base_less__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_common_base_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_styles_common_base_less__);
//
//
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_account_login_less__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_account_login_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_styles_account_login_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue__);






/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            form: {
                account: '',
                password: ''
            }
        };
    },
    components: {
        Group: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default.a,
        XInput: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue___default.a,
        XButton: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue___default.a
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_account_signup_less__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_styles_account_signup_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_styles_account_signup_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_datetime_index_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vux_src_components_datetime_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vux_src_components_datetime_index_vue__);







/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            form: {
                nikename: '',
                account: '',
                password: '',
                birthday: ''
            }
        };
    },
    components: {
        Group: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_group_index_vue___default.a,
        XInput: __WEBPACK_IMPORTED_MODULE_2_vux_src_components_x_input_index_vue___default.a,
        XButton: __WEBPACK_IMPORTED_MODULE_3_vux_src_components_x_button_index_vue___default.a,
        Datetime: __WEBPACK_IMPORTED_MODULE_4_vux_src_components_datetime_index_vue___default.a
    }
});

/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_checker_checker_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vux_src_components_checker_checker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vux_src_components_checker_checker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_checker_checker_item_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vux_src_components_checker_checker_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vux_src_components_checker_checker_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_styles_home_home_less__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_styles_home_home_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_styles_home_home_less__);






/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            selectTodo: [1, 3, 6],
            todolist: [{ id: 1, value: 'salad1' }, { id: 2, value: 'salad2' }, { id: 3, value: 'salad3' }, { id: 4, value: 'salad4' }, { id: 5, value: 'salad5' }, { id: 6, value: 'salad6' }]
        };
    },
    methods: {
        selectedItem(val) {
            console.log(val);
        }
    },
    components: {
        Checker: __WEBPACK_IMPORTED_MODULE_0_vux_src_components_checker_checker_vue___default.a,
        CheckerItem: __WEBPACK_IMPORTED_MODULE_1_vux_src_components_checker_checker_item_vue___default.a
    }
});

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-x-input weui-cell",
    class: {
      'weui-cell_warn': _vm.showWarn
    }
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [(_vm.hasRestrictedLabel) ? _c('div', {
    style: (_vm.labelStyles)
  }, [_vm._t("restricted-label")], 2) : _vm._e(), _vm._v(" "), _vm._t("label", [(_vm.title) ? _c('label', {
    staticClass: "weui-label",
    style: ({
      width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed,
      textAlign: _vm.$parent.labelAlign,
      marginRight: _vm.$parent.labelMarginRight
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell__primary",
    class: _vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''
  }, [(!_vm.type || _vm.type === 'text') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "text",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'number') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "number",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": [_vm.onBlur, function($event) {
        _vm.$forceUpdate()
      }],
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'email') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "email",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'password') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "password",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'tel') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    ref: "input",
    staticClass: "weui-input",
    style: (_vm.inputStyle),
    attrs: {
      "maxlength": _vm.max,
      "autocomplete": _vm.autocomplete,
      "autocapitalize": _vm.autocapitalize,
      "autocorrect": _vm.autocorrect,
      "spellcheck": _vm.spellcheck,
      "type": "tel",
      "name": _vm.name,
      "pattern": _vm.pattern,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.currentValue)
    },
    on: {
      "focus": _vm.focusHandler,
      "blur": _vm.onBlur,
      "keyup": _vm.onKeyUp,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.currentValue = $event.target.value
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.equalWith && _vm.showClear && _vm.currentValue && !_vm.readonly && !_vm.disabled),
      expression: "!equalWith && showClear && currentValue && !readonly && !disabled"
    }],
    attrs: {
      "type": "clear"
    },
    nativeOn: {
      "click": function($event) {
        _vm.clear($event)
      }
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showWarn),
      expression: "showWarn"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn",
      "title": !_vm.valid ? _vm.firstError : ''
    }
  }), _vm._v(" "), (!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid) ? _c('icon', {
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    }
  }) : _vm._e(), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),
      expression: "!novalidate && equalWith && equalWith === currentValue && valid"
    }],
    attrs: {
      "type": "success"
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'success'),
      expression: "novalidate && iconType === 'success'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "success"
    }
  }), _vm._v(" "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.novalidate && _vm.iconType === 'error'),
      expression: "novalidate && iconType === 'error'"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn"
    }
  }), _vm._v(" "), _vm._t("right")], 2)])
},staticRenderFns: []}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("404")])
},staticRenderFns: []}

/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "vux-datetime weui-cell",
    class: {
      'weui-cell_access': !_vm.readonly
    },
    attrs: {
      "href": "javascript:"
    }
  }, [_vm._t("default", [_c('div', [_vm._t("title", [_c('p', {
    style: ({
      width: _vm.$parent.labelWidth,
      textAlign: _vm.$parent.labelAlign,
      marginRight: _vm.$parent.labelMarginRight
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })]), _vm._v(" "), (_vm.inlineDesc) ? _c('inline-desc', [_vm._v(_vm._s(_vm.inlineDesc))]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft vux-cell-primary vux-datetime-value",
    style: ({
      textAlign: _vm.valueTextAlign
    })
  }, [_vm._v("\n      " + _vm._s(_vm._value) + "\n      "), _c('icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.valid),
      expression: "!valid"
    }],
    staticClass: "vux-input-icon",
    attrs: {
      "type": "warn",
      "title": _vm.firstError
    }
  })], 1)])], 2)
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-checker-box"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vux-label-desc"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vux-checker-item",
    class: _vm.classNames,
    on: {
      "click": _vm.select
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-bg",
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 102 */
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
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])], 2), _vm._v(" "), _c('div', {
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
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "signup-wrap"
  }, [_c('h1', {
    staticClass: "signup-title"
  }, [_vm._v("注册")]), _vm._v(" "), _c('div', {
    staticClass: "signupwrap-form"
  }, [_c('group', {
    attrs: {
      "labelAlign": "left"
    }
  }, [_c('x-input', {
    attrs: {
      "title": "昵称",
      "placeholder": ""
    },
    model: {
      value: (_vm.form.nikename),
      callback: function($$v) {
        _vm.form.nikename = $$v
      },
      expression: "form.nikename"
    }
  }), _vm._v(" "), _c('x-input', {
    attrs: {
      "title": "账号",
      "placeholder": ""
    },
    model: {
      value: (_vm.form.account),
      callback: function($$v) {
        _vm.form.account = $$v
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('x-input', {
    attrs: {
      "title": "密码",
      "type": "password",
      "placeholder": ""
    },
    model: {
      value: (_vm.form.password),
      callback: function($$v) {
        _vm.form.password = $$v
      },
      expression: "form.password"
    }
  }), _vm._v(" "), _c('datetime', {
    attrs: {
      "title": "生日",
      "confirm-text": "确认",
      "max-year": 2017,
      "min-year": 1900,
      "cancel-text": "取消"
    },
    model: {
      value: (_vm.form.birthday),
      callback: function($$v) {
        _vm.form.birthday = $$v
      },
      expression: "form.birthday"
    }
  })], 1), _vm._v(" "), _c('x-button', {
    staticClass: "mar-top30",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("创建")]), _vm._v(" "), _c('div', {
    staticClass: "signup-tip"
  }, [_vm._v("已有账号？"), _c('router-link', {
    attrs: {
      "to": "login"
    }
  }, [_vm._v("立即登录")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "home-todolist"
  }, [_c('checker', {
    attrs: {
      "default-item-class": "todo-item",
      "type": "checkbox",
      "selected-item-class": "todo-item-selected"
    },
    model: {
      value: (_vm.selectTodo),
      callback: function($$v) {
        _vm.selectTodo = $$v
      },
      expression: "selectTodo"
    }
  }, _vm._l((_vm.todolist), function(item) {
    return _c('checker-item', {
      key: item.id,
      attrs: {
        "value": item.id
      },
      on: {
        "on-item-click": _vm.selectedItem
      }
    }, [_c('div', {
      staticClass: "display-table todo-item-wrap"
    }, [_c('div', {
      staticClass: "todo-item-icon"
    }, [_c('i', {
      staticClass: "iconfont icon-round"
    }), _vm._v(" "), _c('i', {
      staticClass: "iconfont icon-roundcheck"
    })]), _vm._v(" "), _c('div', {
      staticClass: "todo-item-title"
    }, [_vm._v(_vm._s(item.value))])])])
  }))], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home-title"
  }, [_c('h1', [_vm._v("Salads")])])
}]}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.title) ? _c('div', {
    staticClass: "weui-cells__title",
    style: ({
      color: _vm.titleColor
    }),
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "weui-cells",
    class: {
      'vux-no-group-title': !_vm.title
    },
    style: ({
      marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
    })
  }, [_vm._t("after-title"), _vm._v(" "), _vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "weui-btn",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled,
      "type": _vm.actionType
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.showLoading) ? _c('i', {
    staticClass: "weui-loading"
  }) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)
},staticRenderFns: []}

/***/ }),
/* 107 */
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
    class: _vm.dialogClass,
    style: (_vm.dialogStyle)
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-wrap"
  }, [_c('div', {
    staticClass: "loginwrap-logo"
  }), _vm._v(" "), _c('div', {
    staticClass: "loginwrap-form"
  }, [_c('group', {
    attrs: {
      "labelAlign": "left"
    }
  }, [_c('x-input', {
    attrs: {
      "title": "账号",
      "placeholder": ""
    },
    model: {
      value: (_vm.form.account),
      callback: function($$v) {
        _vm.form.account = $$v
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _c('x-input', {
    attrs: {
      "title": "密码",
      "type": "password",
      "placeholder": ""
    },
    model: {
      value: (_vm.form.password),
      callback: function($$v) {
        _vm.form.password = $$v
      },
      expression: "form.password"
    }
  }, [_c('x-button', {
    attrs: {
      "mini": "",
      "plain": true
    },
    slot: "right"
  }, [_vm._v("忘记密码")])], 1)], 1), _vm._v(" "), _c('x-button', {
    staticClass: "mar-top30",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('div', {
    staticClass: "login-tip"
  }, [_vm._v("还没有账号？"), _c('router-link', {
    attrs: {
      "to": "signup"
    }
  }, [_vm._v("立即注册")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    class: [_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']
  })
},staticRenderFns: []}

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)


module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })
],[43]);
//# sourceMappingURL=app.0f20a20aa505bb7e2a0c.js.map