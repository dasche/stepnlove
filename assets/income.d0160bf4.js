var e = Object.defineProperty, t = Object.defineProperties, l = Object.getOwnPropertyDescriptors,
    a = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable,
    o = (t, l, a) => l in t ? e(t, l, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: a,
    }) : t[l] = a
import { o as s, a as r, i as u, b as d, U as c, I as m, C as p, t as v } from './el-popper.7c31a607.js'
import { _ as f, E as h, a as g } from './tooltip.f4b85039.js'
import {
  z as b,
  s as x,
  m as A,
  n as w,
  h as y,
  i as V,
  E as S,
  P as k,
  Q as B,
  R as C,
  y as E,
  H as F,
  I,
  L as P,
  T as D,
  v as N,
  x as R,
  G as U,
  U as z,
  W as L,
  X as Q,
  Y,
  Z as M,
  t as j,
  $ as H,
  a0 as K,
  a1 as G,
  a2 as J,
  a3 as T,
  F as O,
  q as W,
  u as X,
  o as Z,
  w as q,
  J as _,
  M as $,
  O as ee,
  a4 as te,
  K as le,
} from './vendor.6285a3de.js'
import { _ as ae } from './Breadcrumb.c7578fd6.js'/* empty css                 */
import {
  _ as ne,
  b as ie,
  c as oe,
  E as se,
  a as re,
  d as ue,
  u as de,
  e as ce,
  w as me,
  f as pe,
  g as ve,
  h as fe,
} from './el-input.d6a4fd0f.js'
import { _ as he, a as ge, b as be, c as xe } from './4.d9250fe1.js'
import { u as Ae } from './app.b8eb59b8.js'

const we = b({ name: 'ArrowDown' }), ye = {
  class: 'icon',
  width: '200',
  height: '200',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}, Ve = [w('path', {
  fill: 'currentColor',
  d: 'M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z',
}, null, -1)]
var Se = ne(we, [['render', function(e, t, l, a, n, i) {
  return x(), A('svg', ye, Ve)
}]])
const ke = b({ name: 'Minus' }), Be = {
  class: 'icon',
  width: '200',
  height: '200',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}, Ce = [w('path', {
  fill: 'currentColor',
  d: 'M128 544h768a32 32 0 100-64H128a32 32 0 000 64z',
}, null, -1)]
var Ee = ne(ke, [['render', function(e, t, l, a, n, i) {
  return x(), A('svg', Be, Ce)
}]])
const Fe = b({ name: 'Plus' }), Ie = {
  class: 'icon',
  width: '200',
  height: '200',
  viewBox: '0 0 1024 1024',
  xmlns: 'http://www.w3.org/2000/svg',
}, Pe = [w('path', {
  fill: 'currentColor',
  d: 'M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z',
}, null, -1)]
var De = b({
  name: 'ElInputNumber',
  components: {
    ElInput: se,
    ElIcon: re,
    ArrowUp: ue,
    ArrowDown: Se,
    Plus: ne(Fe, [['render', function(e, t, l, a, n, i) {
      return x(), A('svg', Ie, Pe)
    }]]),
    Minus: Ee,
  },
  directives: {
    RepeatClick: {
      beforeMount(e, t) {
        let l, a = null
        const n = () => t.value && t.value(), i = () => {
          Date.now() - l < 100 && n(), clearInterval(a), a = null
        }
        s(e, 'mousedown', (e => {
          0 === e.button && (l = Date.now(), r(document, 'mouseup', i), clearInterval(a), a = setInterval(n, 100))
        }))
      },
    },
  },
  props: ie({
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: !1,
    },
    max: {
      type: Number,
      default: 1 / 0,
    },
    min: {
      type: Number,
      default: -1 / 0,
    },
    modelValue: { type: Number },
    disabled: {
      type: Boolean,
      default: !1,
    },
    size: {
      type: String,
      values: oe,
    },
    controls: {
      type: Boolean,
      default: !0,
    },
    controlsPosition: {
      type: String,
      default: '',
      values: ['', 'right'],
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: e => e >= 0 && e === parseInt(`${e}`, 10),
    },
  }),
  emits: {
    change: (e, t) => e !== t,
    blur: e => e instanceof FocusEvent,
    focus: e => e instanceof FocusEvent,
    input: e => u(e),
    'update:modelValue': e => u(e),
  },
  setup(e, { emit: t }) {
    const l = y(), a = V({
          currentValue: e.modelValue,
          userInput: null,
        }), n = S((() => f(e.modelValue) < e.min)), i = S((() => v(e.modelValue) > e.max)), o = S((() => {
          const t = p(e.step)
          return void 0 !== e.precision ? (e.precision, e.precision) : Math.max(p(e.modelValue), t)
        })), s = S((() => e.controls && 'right' === e.controlsPosition)), r = de(), d = ce(), c = S((() => {
          if (null !== a.userInput) return a.userInput
          let t = a.currentValue
          if (u(t)) {
            if (Number.isNaN(t)) return ''
            void 0 !== e.precision && (t = t.toFixed(e.precision))
          }
          return t
        })),
        m = (e, t) => (void 0 === t && (t = o.value), parseFloat('' + Math.round(e * Math.pow(10, t)) / Math.pow(10, t))),
        p = e => {
          if (void 0 === e) return 0
          const t = e.toString(), l = t.indexOf('.')
          let a = 0
          return -1 !== l && (a = t.length - l - 1), a
        }, v = t => {
          if (!u(t)) return a.currentValue
          const l = Math.pow(10, o.value)
          return t = u(t) ? t : NaN, m((l * t + l * e.step) / l)
        }, f = t => {
          if (!u(t)) return a.currentValue
          const l = Math.pow(10, o.value)
          return t = u(t) ? t : NaN, m((l * t - l * e.step) / l)
        }, h = l => {
          const n = a.currentValue
          'number' == typeof l && void 0 !== e.precision && (l = m(l, e.precision)), void 0 !== l && l >= e.max && (l = e.max), void 0 !== l && l <= e.min && (l = e.min), n !== l && (u(l) || (l = NaN), a.userInput = null, t('update:modelValue', l), t('input', l), t('change', l, n), a.currentValue = l)
        }
    return k((() => e.modelValue), (l => {
      let n = Number(l)
      if (!isNaN(n)) {
        if (e.stepStrictly) {
          const t = p(e.step), l = Math.pow(10, t)
          n = Math.round(n / e.step) * l * e.step / l
        }
        void 0 !== e.precision && (n = m(n, e.precision)), n > e.max && (n = e.max, t('update:modelValue', n)), n < e.min && (n = e.min, t('update:modelValue', n))
      }
      a.currentValue = n, a.userInput = null
    }), { immediate: !0 }), B((() => {
      var n
      const i = null == (n = l.value) ? void 0 : n.input
      i.setAttribute('role', 'spinbutton'), i.setAttribute('aria-valuemax', String(e.max)), i.setAttribute('aria-valuemin', String(e.min)), i.setAttribute('aria-valuenow', String(a.currentValue)), i.setAttribute('aria-disabled', String(d.value)), u(e.modelValue) || t('update:modelValue', Number(e.modelValue))
    })), C((() => {
      var e;
      (null == (e = l.value) ? void 0 : e.input).setAttribute('aria-valuenow', a.currentValue)
    })), {
      input: l,
      displayValue: c,
      handleInput: e => a.userInput = e,
      handleInputChange: e => {
        const t = Number(e);
        (u(t) && !Number.isNaN(t) || '' === e) && h(t), a.userInput = null
      },
      controlsAtRight: s,
      decrease: () => {
        if (d.value || n.value) return
        const t = e.modelValue || 0, l = f(t)
        h(l)
      },
      increase: () => {
        if (d.value || i.value) return
        const t = e.modelValue || 0, l = v(t)
        h(l)
      },
      inputNumberSize: r,
      inputNumberDisabled: d,
      maxDisabled: i,
      minDisabled: n,
      focus: () => {
        var e, t
        null == (t = null == (e = l.value) ? void 0 : e.focus) || t.call(e)
      },
      blur: () => {
        var e, t
        null == (t = null == (e = l.value) ? void 0 : e.blur) || t.call(e)
      },
    }
  },
})
De.render = function(e, t, l, a, n, i) {
  const o = E('arrow-down'), s = E('minus'), r = E('el-icon'), u = E('arrow-up'), d = E('plus'), c = E('el-input'),
      m = F('repeat-click')
  return x(), A('div', {
    class: P(['el-input-number', e.inputNumberSize ? 'el-input-number--' + e.inputNumberSize : '', { 'is-disabled': e.inputNumberDisabled }, { 'is-without-controls': !e.controls }, { 'is-controls-right': e.controlsAtRight }]),
    onDragstart: t[4] || (t[4] = L((() => {
    }), ['prevent'])),
  }, [e.controls ? I((x(), A('span', {
    key: 0,
    class: P(['el-input-number__decrease', { 'is-disabled': e.minDisabled }]),
    role: 'button',
    onKeydown: t[0] || (t[0] = D(((...t) => e.decrease && e.decrease(...t)), ['enter'])),
  }, [N(r, null, {
    default: R((() => [e.controlsAtRight ? (x(), U(o, { key: 0 })) : (x(), U(s, { key: 1 }))])),
    _: 1,
  })], 34)), [[m, e.decrease]]) : z('v-if', !0), e.controls ? I((x(), A('span', {
    key: 1,
    class: P(['el-input-number__increase', { 'is-disabled': e.maxDisabled }]),
    role: 'button',
    onKeydown: t[1] || (t[1] = D(((...t) => e.increase && e.increase(...t)), ['enter'])),
  }, [N(r, null, {
    default: R((() => [e.controlsAtRight ? (x(), U(u, { key: 0 })) : (x(), U(d, { key: 1 }))])),
    _: 1,
  })], 34)), [[m, e.increase]]) : z('v-if', !0), N(c, {
    ref: 'input',
    type: 'number',
    step: e.step,
    'model-value': e.displayValue,
    placeholder: e.placeholder,
    disabled: e.inputNumberDisabled,
    size: e.inputNumberSize,
    max: e.max,
    min: e.min,
    name: e.name,
    label: e.label,
    onKeydown: [D(L(e.increase, ['prevent']), ['up']), D(L(e.decrease, ['prevent']), ['down'])],
    onBlur: t[2] || (t[2] = t => e.$emit('blur', t)),
    onFocus: t[3] || (t[3] = t => e.$emit('focus', t)),
    onInput: e.handleInput,
    onChange: e.handleInputChange,
  }, null, 8, ['step', 'model-value', 'placeholder', 'disabled', 'size', 'max', 'min', 'name', 'label', 'onKeydown', 'onInput', 'onChange'])], 34)
}, De.__file = 'packages/components/input-number/src/input-number.vue'
const Ne = me(De), Re = (e, t, l) => {
  const {
        disabled: a,
        min: n,
        max: i,
        step: o,
        showTooltip: r,
        precision: u,
        sliderSize: m,
        formatTooltip: p,
        emitChange: v,
        resetSize: f,
        updateDragging: h,
      } = Q('SliderProvider'), {
        tooltip: g,
        tooltipVisible: b,
        formatValue: x,
        displayTooltip: A,
        hideTooltip: w,
      } = ((e, t, l) => {
        const a = y(null), n = y(!1), i = S((() => t.value instanceof Function)),
            o = S((() => i.value && t.value(e.modelValue) || e.modelValue)), s = pe((() => {
              l.value && (n.value = !0)
            }), 50), r = pe((() => {
              l.value && (n.value = !1)
            }), 50)
        return {
          tooltip: a,
          tooltipVisible: n,
          formatValue: o,
          displayTooltip: s,
          hideTooltip: r,
        }
      })(e, p, r), V = S((() => (e.modelValue - n.value) / (i.value - n.value) * 100 + '%')),
      B = S((() => e.vertical ? { bottom: V.value } : { left: V.value })), C = e => {
        let t, l
        return e.type.startsWith('touch') ? (l = e.touches[0].clientY, t = e.touches[0].clientX) : (l = e.clientY, t = e.clientX), {
          clientX: t,
          clientY: l,
        }
      }, E = l => {
        t.dragging = !0, t.isClick = !0
        const {
          clientX: a,
          clientY: n,
        } = C(l)
        e.vertical ? t.startY = n : t.startX = a, t.startPosition = parseFloat(V.value), t.newPosition = t.startPosition
      }, F = l => {
        if (t.dragging) {
          let a
          t.isClick = !1, A(), f()
          const {
            clientX: n,
            clientY: i,
          } = C(l)
          e.vertical ? (t.currentY = i, a = (t.startY - t.currentY) / m.value * 100) : (t.currentX = n, a = (t.currentX - t.startX) / m.value * 100), t.newPosition = t.startPosition + a, P(t.newPosition)
        }
      }, I = () => {
        t.dragging && (setTimeout((() => {
          t.dragging = !1, t.hovering || w(), t.isClick || (P(t.newPosition), v())
        }), 0), d(window, 'mousemove', F), d(window, 'touchmove', F), d(window, 'mouseup', I), d(window, 'touchend', I), d(window, 'contextmenu', I))
      }, P = async a => {
        if (null === a || isNaN(a)) return
        a < 0 ? a = 0 : a > 100 && (a = 100)
        const s = 100 / ((i.value - n.value) / o.value)
        let r = Math.round(a / s) * s * (i.value - n.value) * .01 + n.value
        r = parseFloat(r.toFixed(u.value)), l(c, r), t.dragging || e.modelValue === t.oldValue || (t.oldValue = e.modelValue), await Y(), t.dragging && A(), g.value.updatePopper()
      }
  return k((() => t.dragging), (e => {
    h(e)
  })), {
    tooltip: g,
    tooltipVisible: b,
    showTooltip: r,
    wrapperStyle: B,
    formatValue: x,
    handleMouseEnter: () => {
      t.hovering = !0, A()
    },
    handleMouseLeave: () => {
      t.hovering = !1, t.dragging || w()
    },
    onButtonDown: e => {
      a.value || (e.preventDefault(), E(e), s(window, 'mousemove', F), s(window, 'touchmove', F), s(window, 'mouseup', I), s(window, 'touchend', I), s(window, 'contextmenu', I))
    },
    onLeftKeyDown: () => {
      a.value || (t.newPosition = parseFloat(V.value) - o.value / (i.value - n.value) * 100, P(t.newPosition), v())
    },
    onRightKeyDown: () => {
      a.value || (t.newPosition = parseFloat(V.value) + o.value / (i.value - n.value) * 100, P(t.newPosition), v())
    },
    setPosition: P,
  }
}
var Ue = b({
  name: 'ElSliderButton',
  components: { ElTooltip: f },
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    vertical: {
      type: Boolean,
      default: !1,
    },
    tooltipClass: {
      type: String,
      default: '',
    },
  },
  emits: [c],
  setup(e, { emit: t }) {
    const l = V({
      hovering: !1,
      dragging: !1,
      isClick: !1,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: e.modelValue,
    }), {
      tooltip: a,
      showTooltip: n,
      tooltipVisible: i,
      wrapperStyle: o,
      formatValue: s,
      handleMouseEnter: r,
      handleMouseLeave: u,
      onButtonDown: d,
      onLeftKeyDown: c,
      onRightKeyDown: m,
      setPosition: p,
    } = Re(e, l, t), {
      hovering: v,
      dragging: f,
    } = M(l)
    return {
      tooltip: a,
      tooltipVisible: i,
      showTooltip: n,
      wrapperStyle: o,
      formatValue: s,
      handleMouseEnter: r,
      handleMouseLeave: u,
      onButtonDown: d,
      onLeftKeyDown: c,
      onRightKeyDown: m,
      setPosition: p,
      hovering: v,
      dragging: f,
    }
  },
})
Ue.render = function(e, t, l, a, n, i) {
  const o = E('el-tooltip')
  return x(), A('div', {
    ref: 'button',
    class: P(['el-slider__button-wrapper', {
      hover: e.hovering,
      dragging: e.dragging,
    }]),
    style: H(e.wrapperStyle),
    tabindex: '0',
    onMouseenter: t[1] || (t[1] = (...t) => e.handleMouseEnter && e.handleMouseEnter(...t)),
    onMouseleave: t[2] || (t[2] = (...t) => e.handleMouseLeave && e.handleMouseLeave(...t)),
    onMousedown: t[3] || (t[3] = (...t) => e.onButtonDown && e.onButtonDown(...t)),
    onTouchstart: t[4] || (t[4] = (...t) => e.onButtonDown && e.onButtonDown(...t)),
    onFocus: t[5] || (t[5] = (...t) => e.handleMouseEnter && e.handleMouseEnter(...t)),
    onBlur: t[6] || (t[6] = (...t) => e.handleMouseLeave && e.handleMouseLeave(...t)),
    onKeydown: [t[7] || (t[7] = D(((...t) => e.onLeftKeyDown && e.onLeftKeyDown(...t)), ['left'])), t[8] || (t[8] = D(((...t) => e.onRightKeyDown && e.onRightKeyDown(...t)), ['right'])), t[9] || (t[9] = D(L(((...t) => e.onLeftKeyDown && e.onLeftKeyDown(...t)), ['prevent']), ['down'])), t[10] || (t[10] = D(L(((...t) => e.onRightKeyDown && e.onRightKeyDown(...t)), ['prevent']), ['up']))],
  }, [N(o, {
    ref: 'tooltip',
    modelValue: e.tooltipVisible,
    'onUpdate:modelValue': t[0] || (t[0] = t => e.tooltipVisible = t),
    placement: 'top',
    'stop-popper-mouse-event': !1,
    'popper-class': e.tooltipClass,
    disabled: !e.showTooltip,
    manual: '',
  }, {
    content: R((() => [w('span', null, j(e.formatValue), 1)])),
    default: R((() => [w('div', {
      class: P(['el-slider__button', {
        hover: e.hovering,
        dragging: e.dragging,
      }]),
    }, null, 2)])),
    _: 1,
  }, 8, ['modelValue', 'popper-class', 'disabled'])], 38)
}, Ue.__file = 'packages/components/slider/src/button.vue'
var ze = b({
  name: 'ElMarker',
  props: {
    mark: {
      type: [String, Object],
      default: () => {
      },
    },
  },
  setup: e => ({ label: S((() => 'string' == typeof e.mark ? e.mark : e.mark.label)) }),
  render() {
    var e
    return K('div', {
      class: 'el-slider__marks-text',
      style: null == (e = this.mark) ? void 0 : e.style,
    }, this.label)
  },
})
ze.__file = 'packages/components/slider/src/marker.vue'
var Le = b({
  name: 'ElSlider',
  components: {
    ElInputNumber: Ne,
    SliderButton: Ue,
    SliderMarker: ze,
  },
  props: {
    modelValue: {
      type: [Number, Array],
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    showInput: {
      type: Boolean,
      default: !1,
    },
    showInputControls: {
      type: Boolean,
      default: !0,
    },
    inputSize: {
      type: String,
      default: 'small',
    },
    showStops: {
      type: Boolean,
      default: !1,
    },
    showTooltip: {
      type: Boolean,
      default: !0,
    },
    formatTooltip: {
      type: Function,
      default: void 0,
    },
    disabled: {
      type: Boolean,
      default: !1,
    },
    range: {
      type: Boolean,
      default: !1,
    },
    vertical: {
      type: Boolean,
      default: !1,
    },
    height: {
      type: String,
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
    label: {
      type: String,
      default: void 0,
    },
    tooltipClass: {
      type: String,
      default: void 0,
    },
    marks: Object,
  },
  emits: [c, p, m],
  setup(e, { emit: s }) {
    const r = V({
          firstValue: 0,
          secondValue: 0,
          oldValue: 0,
          dragging: !1,
          sliderSize: 1,
        }), {
          elFormItem: u,
          slider: d,
          firstButton: v,
          secondButton: f,
          sliderDisabled: h,
          minValue: g,
          maxValue: b,
          runwayStyle: x,
          barStyle: A,
          resetSize: w,
          emitChange: k,
          onSliderClick: B,
          setFirstValue: C,
          setSecondValue: E,
        } = ((e, t, l) => {
          const a = Q(ve, {}), n = Q(fe, {}), i = G(null), o = y(null), s = y(null), r = {
                firstButton: o,
                secondButton: s,
              }, u = S((() => e.disabled || a.disabled || !1)), d = S((() => Math.min(t.firstValue, t.secondValue))),
              v = S((() => Math.max(t.firstValue, t.secondValue))),
              f = S((() => e.range ? 100 * (v.value - d.value) / (e.max - e.min) + '%' : 100 * (t.firstValue - e.min) / (e.max - e.min) + '%')),
              h = S((() => e.range ? 100 * (d.value - e.min) / (e.max - e.min) + '%' : '0%')),
              g = S((() => e.vertical ? { height: e.height } : {})), b = S((() => e.vertical ? {
                height: f.value,
                bottom: h.value,
              } : {
                width: f.value,
                left: h.value,
              })), x = () => {
                i.value && (t.sliderSize = i.value['client' + (e.vertical ? 'Height' : 'Width')])
              }, A = l => {
                const a = e.min + l * (e.max - e.min) / 100
                if (!e.range) return void o.value.setPosition(l)
                let n
                n = Math.abs(d.value - a) < Math.abs(v.value - a) ? t.firstValue < t.secondValue ? 'firstButton' : 'secondButton' : t.firstValue > t.secondValue ? 'firstButton' : 'secondButton', r[n].value.setPosition(l)
              }, w = e => {
                l(c, e), l(m, e)
              }, V = async() => {
                await Y(), l(p, e.range ? [d.value, v.value] : e.modelValue)
              }
          return {
            elFormItem: n,
            slider: i,
            firstButton: o,
            secondButton: s,
            sliderDisabled: u,
            minValue: d,
            maxValue: v,
            runwayStyle: g,
            barStyle: b,
            resetSize: x,
            setPosition: A,
            emitChange: V,
            onSliderClick: l => {
              if (!u.value && !t.dragging) {
                if (x(), e.vertical) {
                  const e = i.value.getBoundingClientRect().bottom
                  A((e - l.clientY) / t.sliderSize * 100)
                }
                else {
                  const e = i.value.getBoundingClientRect().left
                  A((l.clientX - e) / t.sliderSize * 100)
                }
                V()
              }
            },
            setFirstValue: l => {
              t.firstValue = l, w(e.range ? [d.value, v.value] : l)
            },
            setSecondValue: l => {
              t.secondValue = l, e.range && w([d.value, v.value])
            },
          }
        })(e, r, s), {
          stops: F,
          getStopStyle: I,
        } = ((e, t, l, a) => ({
          stops: S((() => {
            if (!e.showStops || e.min > e.max) return []
            if (0 === e.step) return []
            const n = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min),
                o = Array.from({ length: n - 1 }).map(((e, t) => (t + 1) * i))
            return e.range ? o.filter((t => t < 100 * (l.value - e.min) / (e.max - e.min) || t > 100 * (a.value - e.min) / (e.max - e.min))) : o.filter((l => l > 100 * (t.firstValue - e.min) / (e.max - e.min)))
          })),
          getStopStyle: t => e.vertical ? { bottom: `${t}%` } : { left: `${t}%` },
        }))(e, r, g, b),
        P = (e => S((() => e.marks ? Object.keys(e.marks).map(parseFloat).sort(((e, t) => e - t)).filter((t => t <= e.max && t >= e.min)).map((t => ({
          point: t,
          position: 100 * (t - e.min) / (e.max - e.min),
          mark: e.marks[t],
        }))) : [])))(e)
    Qe(e, r, g, b, s, u)
    const D = S((() => {
      const t = [e.min, e.max, e.step].map((e => {
        const t = `${e}`.split('.')[1]
        return t ? t.length : 0
      }))
      return Math.max.apply(null, t)
    })), { sliderWrapper: N } = Ye(e, r, w), {
      firstValue: R,
      secondValue: U,
      oldValue: z,
      dragging: L,
      sliderSize: j,
    } = M(r)
    var H
    return J('SliderProvider', (H = ((e, t) => {
      for (var l in t || (t = {})) n.call(t, l) && o(e, l, t[l])
      if (a) for (var l of a(t)) i.call(t, l) && o(e, l, t[l])
      return e
    })({}, M(e)), t(H, l({
      sliderSize: j,
      disabled: h,
      precision: D,
      emitChange: k,
      resetSize: w,
      updateDragging: e => {
        r.dragging = e
      },
    })))), {
      firstValue: R,
      secondValue: U,
      oldValue: z,
      dragging: L,
      sliderSize: j,
      slider: d,
      firstButton: v,
      secondButton: f,
      sliderDisabled: h,
      runwayStyle: x,
      barStyle: A,
      emitChange: k,
      onSliderClick: B,
      getStopStyle: I,
      setFirstValue: C,
      setSecondValue: E,
      stops: F,
      markList: P,
      sliderWrapper: N,
    }
  },
})
const Qe = (e, t, l, a, n, i) => {
      const o = e => {
            n(c, e), n(m, e)
          }, s = () => e.range ? ![l.value, a.value].every(((e, l) => e === t.oldValue[l])) : e.modelValue !== t.oldValue,
          r = () => {
            var l, a
            if (e.min > e.max) return void v('Slider', 'min should not be greater than max.')
            const n = e.modelValue
            e.range && Array.isArray(n) ? n[1] < e.min ? o([e.min, e.min]) : n[0] > e.max ? o([e.max, e.max]) : n[0] < e.min ? o([e.min, n[1]]) : n[1] > e.max ? o([n[0], e.max]) : (t.firstValue = n[0], t.secondValue = n[1], s() && (null == (l = i.validate) || l.call(i, 'change'), t.oldValue = n.slice())) : e.range || 'number' != typeof n || isNaN(n) || (n < e.min ? o(e.min) : n > e.max ? o(e.max) : (t.firstValue = n, s() && (null == (a = i.validate) || a.call(i, 'change'), t.oldValue = n)))
          }
      r(), k((() => t.dragging), (e => {
        e || r()
      })), k((() => e.modelValue), ((e, l) => {
        t.dragging || Array.isArray(e) && Array.isArray(l) && e.every(((e, t) => e === l[t])) || r()
      })), k((() => [e.min, e.max]), (() => {
        r()
      }))
    }, Ye = (e, t, l) => {
      const a = y(null)
      return B((async() => {
        let n
        e.range ? (Array.isArray(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue], n = `${t.firstValue}-${t.secondValue}`) : ('number' != typeof e.modelValue || isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue, n = t.firstValue), a.value.setAttribute('aria-valuetext', n), a.value.setAttribute('aria-label', e.label ? e.label : `slider between ${e.min} and ${e.max}`), s(window, 'resize', l), await Y(), l()
      })), T((() => {
        d(window, 'resize', l)
      })), { sliderWrapper: a }
    }, Me = ['aria-valuemin', 'aria-valuemax', 'aria-orientation', 'aria-disabled'], je = { key: 1 },
    He = { class: 'el-slider__marks' }
Le.render = function(e, t, l, a, n, i) {
  const o = E('el-input-number'), s = E('slider-button'), r = E('slider-marker')
  return x(), A('div', {
    ref: 'sliderWrapper',
    class: P(['el-slider', {
      'is-vertical': e.vertical,
      'el-slider--with-input': e.showInput,
    }]),
    role: 'slider',
    'aria-valuemin': e.min,
    'aria-valuemax': e.max,
    'aria-orientation': e.vertical ? 'vertical' : 'horizontal',
    'aria-disabled': e.sliderDisabled,
  }, [e.showInput && !e.range ? (x(), U(o, {
    key: 0,
    ref: 'input',
    'model-value': e.firstValue,
    class: 'el-slider__input',
    step: e.step,
    disabled: e.sliderDisabled,
    controls: e.showInputControls,
    min: e.min,
    max: e.max,
    debounce: e.debounce,
    size: e.inputSize,
    'onUpdate:modelValue': e.setFirstValue,
    onChange: e.emitChange,
  }, null, 8, ['model-value', 'step', 'disabled', 'controls', 'min', 'max', 'debounce', 'size', 'onUpdate:modelValue', 'onChange'])) : z('v-if', !0), w('div', {
    ref: 'slider',
    class: P(['el-slider__runway', {
      'show-input': e.showInput && !e.range,
      disabled: e.sliderDisabled,
    }]),
    style: H(e.runwayStyle),
    onClick: t[0] || (t[0] = (...t) => e.onSliderClick && e.onSliderClick(...t)),
  }, [w('div', {
    class: 'el-slider__bar',
    style: H(e.barStyle),
  }, null, 4), N(s, {
    ref: 'firstButton',
    'model-value': e.firstValue,
    vertical: e.vertical,
    'tooltip-class': e.tooltipClass,
    'onUpdate:modelValue': e.setFirstValue,
  }, null, 8, ['model-value', 'vertical', 'tooltip-class', 'onUpdate:modelValue']), e.range ? (x(), U(s, {
    key: 0,
    ref: 'secondButton',
    'model-value': e.secondValue,
    vertical: e.vertical,
    'tooltip-class': e.tooltipClass,
    'onUpdate:modelValue': e.setSecondValue,
  }, null, 8, ['model-value', 'vertical', 'tooltip-class', 'onUpdate:modelValue'])) : z('v-if', !0), e.showStops ? (x(), A('div', je, [(x(!0), A(O, null, W(e.stops, ((t, l) => (x(), A('div', {
    key: l,
    class: 'el-slider__stop',
    style: H(e.getStopStyle(t)),
  }, null, 4)))), 128))])) : z('v-if', !0), e.markList.length > 0 ? (x(), A(O, { key: 2 }, [w('div', null, [(x(!0), A(O, null, W(e.markList, ((t, l) => (x(), A('div', {
    key: l,
    style: H(e.getStopStyle(t.position)),
    class: 'el-slider__stop el-slider__marks-stop',
  }, null, 4)))), 128))]), w('div', He, [(x(!0), A(O, null, W(e.markList, ((t, l) => (x(), U(r, {
    key: l,
    mark: t.mark,
    style: H(e.getStopStyle(t.position)),
  }, null, 8, ['mark', 'style'])))), 128))])], 64)) : z('v-if', !0)], 6)], 10, Me)
}, Le.__file = 'packages/components/slider/src/index.vue', Le.install = e => {
  e.component(Le.name, Le)
}
const Ke = Le
var Ge = {}
const Je = { class: 'flex' }, Te = { class: 'left-box' }, Oe = { class: 'text-13 text-font-info mt-2' },
    We = { class: 'form mt-12 mb-6' }, Xe = { class: 'mb-3' }, Ze = { class: 'opacity-0 absolute' },
    qe = { class: 'mb-3 mt-7' }, _e = { class: 'opacity-0 absolute' }, $e = { class: 'mb-3 mt-7' },
    et = { class: 'relative w-2/3' }, tt = { class: 'mb-3 mt-10 flex items-center' }, lt = { class: 'relative w-2/3' },
    at = { class: 'mb-3 mt-10' }, nt = { class: 'overflow-x-auto mb-8' }, it = { class: 'table w-full text-center' },
    ot = { class: 'text-font-info' }, st = { class: 'bg-white font-normal text-14 w-1/6 text-left normal-case' },
    rt = { class: 'bg-white font-normal text-14 w-1/3 normal-case' },
    ut = { class: 'bg-white font-normal text-14 w-1/3 normal-case' }, dt = { class: 'number-family' },
    ct = { class: 'bg-white font-normal text-14 w-1/4 text-right normal-case' },
    mt = w('div', { class: 'h-3' }, null, -1), pt = { class: 'flex items-center' }, vt = w('img', {
      width: '15',
      height: '15',
      src: he,
    }, null, -1), ft = { class: 'ml-1 text-14 font-normal' }, ht = ['placeholder'], gt = { class: 'text-14 text-right' },
    bt = { class: 'number-family' }, xt = { class: 'flex items-center' }, At = w('img', {
      width: '15',
      height: '15',
      src: ge,
    }, null, -1), wt = { class: 'ml-1 text-14 font-normal' }, yt = ['placeholder'], Vt = { class: 'text-14 text-right' },
    St = { class: 'number-family' }, kt = { class: 'flex items-center' }, Bt = w('img', {
      width: '15',
      height: '15',
      src: be,
    }, null, -1), Ct = { class: 'ml-1 text-14 font-normal' }, Et = ['placeholder'], Ft = { class: 'text-14 text-right' },
    It = { class: 'number-family' }, Pt = { class: 'flex items-center' }, Dt = w('img', {
      width: '15',
      height: '15',
      src: xe,
    }, null, -1), Nt = { class: 'ml-1 text-14 font-normal' }, Rt = ['placeholder'], Ut = { class: 'text-14 text-right' },
    zt = { class: 'number-family' }, Lt = { class: 'right-box' }, Qt = { class: 'bg-main bg-opacity-30 px-5 py-10' },
    Yt = { class: 'p-5' }, Mt = { class: 'flex justify-between text-15 font-bold py-5' },
    jt = { class: 'flex items-center' }, Ht = { class: 'text-20' }, Kt = { class: 'number-family' }, Gt = q(' GST '),
    Jt = { class: 'flex justify-between text-15 mt-8' }, Tt = { class: 'font-bold' }, Ot = { class: 'number-family' },
    Wt = q(' GST '), Xt = { class: 'flex justify-between text-15 my-8' }, Zt = { class: 'font-bold' },
    qt = { class: 'number-family' }, _t = q(' GST '), $t = { class: 'text-14 mt-8' },
    el = { class: 'text-font-info font-normal text-13' }, tl = { class: 'grid grid-cols-4 gap-2 text-center mt-5' },
    ll = { class: 'flex justify-center mb-2' }, al = ['src'], nl = { class: 'font-bold' },
    il = { class: 'number-family' }, ol = { class: 'text-13 text-font-info mt-7' },
    sl = w('div', { class: 'hidden border-luck text-luck text-main border-main' }, null, -1), rl = {
      setup(e) {
        const { t: t } = X(), l = Ae(), a = [.4642128, .47572289, .48572289, .48572289], n = {
          0: [100, 0, 0, 0, 0],
          1: [100, 0, 0, 0, 0],
          2: [100, 0, 0, 0, 0],
          3: [100, 0, 0, 0, 0],
          4: [100, 1, 0, 0, 0],
          5: [56, 44, 0, 0, 0],
          6: [46, 46, 1, 0, 0],
          7: [36, 48, 2, 0, 0],
          8: [26, 50, 3, 0, 0],
          9: [16, 61, 4, 0, 0],
          10: [15, 81, 4, 0, 0],
          11: [14, 81, 5, 0, 0],
          12: [13, 81, 6, 0, 0],
          13: [12, 81, 7, 0, 0],
          14: [11, 81, 8, 0, 0],
          15: [11, 80, 9, 0, 0],
          16: [10, 80, 10, 0, 0],
          17: [9, 80, 11, 0, 0],
          18: [8, 80, 12, 0, 0],
          19: [7, 80, 13, 0, 0],
          20: [7, 80, 13, 0, 0],
          21: [6, 80, 14, 0, 0],
          22: [5, 80, 15, 0, 0],
          23: [4, 80, 16, 0, 0],
          24: [3, 80, 17, 0, 0],
          25: [3, 55, 42, 0, 0],
          26: [3, 53, 44, 0, 0],
          27: [2, 52, 46, 0, 0],
          28: [2, 50, 48, 0, 0],
          29: [1, 49, 50, 0, 0],
          30: [0, 42, 58, 0, 0],
          31: [0, 39, 61, 0, 0],
          32: [0, 37, 63, 0, 0],
          33: [0, 0, 65, 0, 0],
          34: [0, 33, 67, 0, 0],
          35: [0, 0, 98, 2, 0],
          36: [0, 0, 97, 3, 0],
          37: [0, 0, 96, 4, 0],
          38: [0, 0, 95, 5, 0],
          39: [0, 0, 94, 6, 0],
          40: [0, 0, 93, 7, 0],
          41: [0, 0, 92, 8, 0],
          42: [0, 0, 91, 9, 0],
          43: [0, 0, 90, 10, 0],
          44: [0, 0, 89, 11, 0],
          45: [0, 0, 54, 29, 7],
          46: [0, 0, 62, 30, 8],
          47: [0, 0, 60, 31, 9],
          48: [0, 0, 58, 32, 10],
          49: [0, 0, 56, 33, 11],
          50: [0, 0, 0, 88, 12],
          51: [0, 0, 0, 87, 13],
          52: [0, 0, 0, 86, 14],
          53: [0, 0, 0, 85, 15],
          54: [0, 0, 0, 84, 16],
          55: [0, 0, 0, 83, 17],
          56: [0, 0, 0, 82, 18],
          57: [0, 0, 0, 81, 19],
          58: [0, 0, 0, 80, 20],
          59: [0, 0, 0, 79, 21],
          60: [0, 0, 0, 78, 22],
          61: [0, 0, 0, 77, 23],
          52: [0, 0, 0, 76, 24],
          53: [0, 0, 0, 75, 25],
          54: [0, 0, 0, 74, 26],
          65: [0, 0, 0, 73, 27],
          66: [0, 0, 0, 72, 28],
          67: [0, 0, 0, 71, 29],
          68: [0, 0, 0, 70, 30],
          69: [0, 0, 0, 69, 31],
          70: [0, 0, 0, 68, 32],
          71: [0, 0, 0, 67, 33],
          72: [0, 0, 0, 66, 34],
          73: [0, 0, 0, 65, 35],
          74: [0, 0, 0, 64, 36],
          75: [0, 0, 0, 63, 37],
          76: [0, 0, 0, 62, 38],
          77: [0, 0, 0, 61, 39],
          78: [0, 0, 0, 60, 40],
          79: [0, 0, 0, 59, 41],
          80: [0, 0, 0, 56, 42],
          81: [0, 0, 0, 57, 43],
          82: [0, 0, 0, 56, 44],
          83: [0, 0, 0, 55, 45],
          84: [0, 0, 0, 54, 46],
          85: [0, 0, 0, 53, 47],
          86: [0, 0, 0, 52, 48],
          87: [0, 0, 0, 51, 49],
          88: [0, 0, 0, 50, 50],
          89: [0, 0, 0, 49, 51],
        }, i = '56px', o = V({
          sneaker_quality: 'common',
          level: 5,
          energy: 2,
          efficiencyBase: '',
          luckBase: '',
          comfortBase: '',
          resilienceBase: '',
          efficiencyPoint: 0,
          luckPoint: 0,
          comfortPoint: 0,
          resiliencePoint: 0,
          totalProp: 20,
          sneaker_class: 0,
        }), s = S((() => l.quality.filter((e => e.value === o.sneaker_quality))[0]))

        function r() {
          o.totalProp = o.level * s.value.step, o.efficiencyBase = '', o.luckBase = '', o.comfortBase = '', o.resilienceBase = '', o.efficiencyPoint = 0, o.luckPoint = 0, o.comfortPoint = 0, o.resiliencePoint = 0
        }

        k((() => o.level), ((e, t) => {
          e > t ? o.totalProp = o.totalProp + (e - t) * s.value.step : (o.efficiencyPoint = 0, o.luckPoint = 0, o.comfortPoint = 0, o.resiliencePoint = 0, o.totalProp = o.level * s.value.step)
        }))
        const u = S((() => ({ left: `${(o.level - 1) / 27 * 100}%` }))),
            d = S((() => ({ left: `${(o.energy - 1) / 19 * 100}%` })))
        const c = S((() => s.value.ranges)),
            m = S((() => o.totalProp - (o.efficiencyPoint + o.luckPoint + o.comfortPoint + o.resiliencePoint))),
            p = S((() => 1 * (o.efficiencyPoint + parseFloat(o.efficiencyBase ? o.efficiencyBase : 0)).toFixed(2))),
            v = S((() => 1 * (o.luckPoint + parseFloat(o.luckBase ? o.luckBase : 0)).toFixed(2))),
            f = S((() => 1 * (o.comfortPoint + parseFloat(o.comfortBase ? o.comfortBase : 0)).toFixed(2))),
            b = S((() => 1 * (o.resiliencePoint + parseFloat(o.resilienceBase ? o.resilienceBase : 0)).toFixed(2)))
        const y = S((() => {
          const e = Math.round(o.energy * v.value ** .25), t = JSON.parse(JSON.stringify(n[e]))
          return t.shift(), t
        })), B = S((() => {
          let e = 0
          p.value && (e = p.value)
          const t = e ** a[o.sneaker_class]
          return (o.energy * t).toFixed(2)
        })), C = S((() => {
          var e, t
          return ((b.value > 0 ? (7.72647428 * o.energy * b.value ** -.49683064).toFixed(2) : 0) * (e = o.sneaker_quality, t = o.level, {
            common: [.31, .32, .33, .35, .36, .37, .38, .4, .41, .42, .44, .46, .48, .5, .52, .54, .56, .58, .6, .62, .64, .67, .7, .72, .75, .78, .81, .83, .87, .9],
            uncommon: [.41, .43, .45, .46, .48, .5, .51, .53, .55, .57, .6, .62, .64, .66, .69, .71, .74, .77, .8, .8, .85, .89, .92, .95, .99, 1.03, 1.06, 1.11, 1.14, 1.18],
            rare: [.41, .43, .45, .46, .48, .5, .51, .53, .55, .57, .6, .62, .64, .66, .69, .71, .74, .77, .8, .8, .85, .89, .92, .95, .99, 1.03, 1.06, 1.11, 1.14, 1.18],
            epic: [.41, .43, .45, .46, .48, .5, .51, .53, .55, .57, .6, .62, .64, .66, .69, .71, .74, .77, .8, .8, .85, .89, .92, .95, .99, 1.03, 1.06, 1.11, 1.14, 1.18],
            legendary: [.41, .43, .45, .46, .48, .5, .51, .53, .55, .57, .6, .62, .64, .66, .69, .71, .74, .77, .8, .8, .85, .89, .92, .95, .99, 1.03, 1.06, 1.11, 1.14, 1.18],
          }[e][t])).toFixed(2)
        }))

        function E(e) {
          return o.sneaker_quality === e.value ? ['bg-main', 'text-font-main', 'border-solid', 'border-2', 'hover:bg-main', 'text-font-main'] : [`border-${e.color}`, `text-${e.color}`, 'hover:bg-white']
        }

        function D(e) {
          return o.sneaker_class === e.value ? ['bg-main', 'text-font-main', 'border-solid', 'border-2', 'hover:bg-main'] : 'hover:bg-white'
        }

        return (e, a) => {
          const n = ae, s = $, V = ee, S = Ke, k = g, U = te, z = le, L = h, Q = F('d-input-point'), Y = F('d-input-max')
          return x(), A('div', null, [N(n), w('div', Je, [w('div', Te, [w('h2', null, j(Z(t)('income.Shoes_revenue_title')), 1), w('p', Oe, j(Z(t)('income.Shoes_revenue_describe')), 1), w('div', We, [w('h3', Xe, j(Z(t)('income.Quality')), 1), N(V, {
            modelValue: Z(o).sneaker_quality,
            'onUpdate:modelValue': a[0] || (a[0] = e => Z(o).sneaker_quality = e),
            onChange: r,
          }, {
            default: R((() => [(x(!0), A(O, null, W(Z(l).quality, (e => (x(), A('div', {
              key: e.value,
              class: P(['my-radio relative mr-5', E(e)]),
            }, [q(j(Z(t)(e.title)) + ' ', 1), w('div', Ze, [N(s, { 'checked-value': e.value }, {
              default: R((() => [q(j(Z(t)(e.title)), 1)])),
              _: 2,
            }, 1032, ['checked-value'])])], 2)))), 128))])),
            _: 1,
          }, 8, ['modelValue']), w('h3', qe, j(Z(t)('income.Shoes_revenue_class')), 1), N(V, {
            modelValue: Z(o).sneaker_class,
            'onUpdate:modelValue': a[1] || (a[1] = e => Z(o).sneaker_class = e),
          }, {
            default: R((() => [(x(!0), A(O, null, W(Z(l).type, (e => (x(), A('div', {
              key: e.value,
              class: P(['my-radio relative mr-5 text-font-main', D(e)]),
            }, [q(j(Z(t)(e.title)) + ' ', 1), w('div', _e, [N(s, { 'checked-value': e.value }, {
              default: R((() => [q(j(Z(t)(e.title)), 1)])),
              _: 2,
            }, 1032, ['checked-value'])])], 2)))), 128))])),
            _: 1,
          }, 8, ['modelValue']), w('h3', $e, j(Z(t)('income.Level')), 1), w('div', et, [N(S, {
            modelValue: Z(o).level,
            'onUpdate:modelValue': a[2] || (a[2] = e => Z(o).level = e),
            'show-tooltip': !0,
            min: 1,
            max: 28,
          }, null, 8, ['modelValue']), w('div', {
            class: 'absolute slider-box number-family text-14',
            style: H(Z(u)),
          }, j(Z(o).level), 5)]), w('h3', tt, [q(j(Z(t)('income.Energy')) + ' ', 1), N(k, { content: Z(t)('income.Energy_tips') }, null, 8, ['content'])]), w('div', lt, [N(S, {
            modelValue: Z(o).energy,
            'onUpdate:modelValue': a[3] || (a[3] = e => Z(o).energy = e),
            min: 1,
            max: 20,
          }, null, 8, ['modelValue']), w('div', {
            class: 'absolute slider-box number-family text-14',
            style: H(Z(d)),
          }, j(Z(o).energy), 5)])]), w('h3', at, j(Z(t)('income.Attributes')), 1), w('div', nt, [w('table', it, [w('thead', null, [w('tr', ot, [w('th', st, j(Z(t)('income.Attributes_type')), 1), w('th', rt, j(Z(t)('income.Attributes_base')), 1), w('th', ut, [q(j(Z(t)('income.Attributes_add')), 1), w('span', dt, j(Z(m)), 1), q(j(Z(t)('income.available')) + ') ', 1)]), w('th', ct, j(Z(t)('income.Attributes_total')), 1)])]), mt, w('tbody', null, [w('tr', null, [w('th', null, [w('div', pt, [vt, w('span', ft, j(Z(t)('income.Attributes_efficiency')), 1)])]), w('td', null, [I(w('input', {
            'onUpdate:modelValue': a[4] || (a[4] = e => Z(o).efficiencyBase = e),
            type: 'text',
            placeholder: `${Z(c)[0]}-${Z(c)[1]}`,
            class: 'my-input-border-light',
          }, null, 8, ht), [[_, Z(o).efficiencyBase], [Q], [Y, Z(c)[1]]])]), w('td', null, [N(U, {
            modelValue: Z(o).efficiencyPoint,
            'onUpdate:modelValue': a[5] || (a[5] = e => Z(o).efficiencyPoint = e),
            class: 'number-family',
            style: { color: '#171818' },
            'input-text-size': '18px',
            min: '0',
            max: Z(o).totalProp,
            'input-width': i,
            'button-size': '36px',
            color: '#91FCCE',
            'disable-increment': 0 == Z(m),
            'disable-decrement': 0 == Z(o).efficiencyPoint,
          }, null, 8, ['modelValue', 'max', 'input-width', 'disable-increment', 'disable-decrement'])]), w('td', null, [w('div', gt, [w('span', bt, j(Z(p)), 1)])])]), w('tr', null, [w('th', null, [w('div', xt, [At, w('span', wt, j(Z(t)('income.Attributes_luck')), 1)])]), w('td', null, [I(w('input', {
            'onUpdate:modelValue': a[6] || (a[6] = e => Z(o).luckBase = e),
            type: 'text',
            placeholder: `${Z(c)[0]}-${Z(c)[1]}`,
            class: 'my-input-border-light',
          }, null, 8, yt), [[_, Z(o).luckBase], [Q], [Y, Z(c)[1]]])]), w('td', null, [N(U, {
            modelValue: Z(o).luckPoint,
            'onUpdate:modelValue': a[7] || (a[7] = e => Z(o).luckPoint = e),
            class: 'number-family',
            style: { color: '#171818' },
            'input-text-size': '18px',
            min: '0',
            max: Z(o).totalProp,
            'input-width': i,
            'button-size': '36px',
            color: '#91FCCE',
            'disable-increment': 0 == Z(m),
            'disable-decrement': 0 == Z(o).luckPoint,
          }, null, 8, ['modelValue', 'max', 'input-width', 'disable-increment', 'disable-decrement'])]), w('td', null, [w('div', Vt, [w('span', St, j(Z(v)), 1)])])]), w('tr', null, [w('th', null, [w('div', kt, [Bt, w('span', Ct, j(Z(t)('income.Attributes_comfort')), 1)])]), w('td', null, [I(w('input', {
            'onUpdate:modelValue': a[8] || (a[8] = e => Z(o).comfortBase = e),
            type: 'text',
            placeholder: `${Z(c)[0]}-${Z(c)[1]}`,
            class: 'my-input-border-light',
          }, null, 8, Et), [[_, Z(o).comfortBase], [Q], [Y, Z(c)[1]]])]), w('td', null, [N(U, {
            modelValue: Z(o).comfortPoint,
            'onUpdate:modelValue': a[9] || (a[9] = e => Z(o).comfortPoint = e),
            class: 'number-family',
            style: { color: '#171818' },
            'input-text-size': '18px',
            min: '0',
            max: Z(o).totalProp,
            'input-width': i,
            'button-size': '36px',
            color: '#91FCCE',
            'disable-increment': 0 == Z(m),
            'disable-decrement': 0 == Z(o).comfortPoint,
          }, null, 8, ['modelValue', 'max', 'input-width', 'disable-increment', 'disable-decrement'])]), w('td', null, [w('div', Ft, [w('span', It, j(Z(f)), 1)])])]), w('tr', null, [w('th', null, [w('div', Pt, [Dt, w('span', Nt, j(Z(t)('income.Attributes_resilience')), 1)])]), w('td', null, [I(w('input', {
            'onUpdate:modelValue': a[10] || (a[10] = e => Z(o).resilienceBase = e),
            type: 'text',
            placeholder: `${Z(c)[0]}-${Z(c)[1]}`,
            class: 'my-input-border-light',
          }, null, 8, Rt), [[_, Z(o).resilienceBase], [Q], [Y, Z(c)[1]]])]), w('td', null, [N(U, {
            modelValue: Z(o).resiliencePoint,
            'onUpdate:modelValue': a[11] || (a[11] = e => Z(o).resiliencePoint = e),
            class: 'number-family',
            style: { color: '#171818' },
            'input-text-size': '18px',
            min: '0',
            max: Z(o).totalProp,
            'input-width': i,
            'button-size': '36px',
            color: '#91FCCE',
            'disable-increment': 0 == Z(m),
            'disable-decrement': 0 == Z(o).resiliencePoint,
          }, null, 8, ['modelValue', 'max', 'input-width', 'disable-increment', 'disable-decrement'])]), w('td', null, [w('div', Ut, [w('span', zt, j(Z(b)), 1)])])])])])])]), w('div', Lt, [w('h2', Qt, j(Z(t)('base.Calculation_results')), 1), w('div', Yt, [w('div', Mt, [w('h3', jt, [q(j(Z(t)('income.Daily_income')), 1), N(k, { content: Z(t)('income.Daily_income_tips') }, null, 8, ['content'])]), w('div', Ht, [w('span', Kt, j(Z(B)), 1), Gt])]), N(z), w('div', Jt, [w('h3', null, j(Z(t)('income.Gst_per_day')), 1), w('div', Tt, [w('span', Ot, j((Z(B) - Z(C)).toFixed(2) || 0), 1), Wt])]), w('div', Xt, [w('h3', null, j(Z(t)('income.Repair_cost')), 1), w('div', Zt, [w('span', qt, j(Z(C) || 0), 1), _t])]), N(z, { style: { margin: '0' } }), w('div', $t, [w('div', null, [w('h3', null, [q(j(Z(t)('income.Mistery_box_chance')), 1), w('span', el, '（' + j(Z(t)('income.Mistery_box_chance_note')) + '）', 1)])]), w('div', tl, [(x(!0), A(O, null, W(Z(y), ((e, l) => (x(), A('div', { key: l }, [N(L, {
            class: 'box-item',
            effect: 'dark',
            content: Z(t)(`income.box${l + 1}`),
            placement: 'top',
          }, {
            default: R((() => {
              return [w('div', ll, [w('img', {
                width: '50',
                height: '50',
                src: (e = l + 1, new URL({
                  '../assets/box/1.png': 'data:image/png;base64,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',
                  '../assets/box/2.png': 'data:image/png;base64,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',
                  '../assets/box/3.png': 'data:image/png;base64,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',
                  '../assets/box/4.png': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAOOUlEQVR4Xu1dW2xUxxleeGoqVbUJqA+pGgNBXByuNqkBA+sLF6+NvTZgzC3YOKaYm20Qqgk2GBAl0AeTi1S3VYGHhILUYgKoSfvgJUpaJBSZSkl4qQOVSt8qeCDPnp5vdsee88/M2bO7ZxdK55M+Ec85Z87M/83M/8+cmU0oZGFhYWFhYWFhYWFhYWFhYWFhYWFh8f+DPIcFBuKaFwocNqfIaOh/A80O+zTsjF/OHpodsL6+PoXOtSchtUAyH0ajUXbx4kWF4XCY/xuLxVwsKChAvqhUwfPLiX3zZq9ix48fV8q/Y8eOUeeecCiLGHzy5AmjwMvbtvyKvX/qW84Thz5jM6eVjP0t2N6+nz7K0dHRQZM4mpq2s/DSFvbThQ1J+dL3fsB+NOlVNm/WKuVaukReTp3ZjIIS5Zrg+qoedu7o39nbR47T4rPh4WE8f4EaMTBUVlaqajg4f/48F0EYfta0pezCsfusuqLTJUhN1Wb6KAd6mA6dnZ1OZe8pwlLCKFvWvs3fWVxY5SpLJlxX2cXzRN54B70us776IKONdXR0FL0fvSTZcJ4WwjCQDq3Ne8cKFinv4JW4df471rllgG1rODd2bU3ZTvooBwSllQGuX7/OOnZeViovc1vDL7nB8D7BlrozTo8dUO5NhTVOYxL1AI+2/p41Vvcp9wminBgpKJAWig/ZgaNP90LgzabDvFBomdQ4TWuOjLVYtLKHDx/Sx7nhdXnjXq+WqRNDEOloHPQZP8Rz7x3+m5LnhWPfOL1/maEHjrBIVZRWgfcSZ2R5HAq6l0yZMiVGXwagZQujrSxuUipx9cy/+TCCoadt6wAbHBykWXDDo5fosKasVVP5b1n33ltGMQTP7PvEs1XrCDE6t/xayUuuj6kHVld0aHu6UzcMW4FGXHmIhHRAy0Z3hbFhAFoBEIY70PoRb1kmw5uGw22bdysVhxit0XeU9+iIVr2wcK2hVbvp1eMod9WfVXogyqWr3+PHj9nkyZOHqVEzQVT3IgAOGa0fkcYip+JoQW6D3GcbI71jhT7SfYxmwYFwWgfq2GFYDIPUQF5EmSIrdjsGu6mIIBvTr8iCqFvlsrdcYu9q6aZV4HDsFGgIfOnevXv0HRx72o+4jLVuRbur0LOdMVeu+D7nfh1MPQTzE2FI5N+4+ueKYfzxqTFaQr4t0TOaZ5ITPTC8uGlMlA0RvZ9EL3HsOEQNmxZmzJihviGBTfUHXZXD8LWr/hwvrOzQBXG/DuiBuoogDZEa8oEvogZJlRhqNkSOucQoLowo96XGcbExUujCeDj3urq6QHpJgWk4MUVBkfIDrGLxVlfIK1/TOT74Ip3DB+DYMbe5+gv3cJgu5aFmWdFGV3ibCbscR4+51+oy/XwrEQJnPFFsvnTpEs2bA+GqblxGRV/O+7HSO8BtTu/RDX8QyeSnlpQs5z6A+qdMiAAESx50iM2Up/f9iX3/pR9qw/igQuBB3VACYNynBgfR+hDHo/XRa3CeJoF1XR1AIABxETQE0ZpvOkPMysS4f+LQbcfPlQaW7+LXI7yOuqUUAKNAKJOJYlFRkTq+JNDW3K0YHEOYCH8hCl0+wRhrcuCmNS04dtHbMOT5DU31jI/3cu9FmTY585UeZzau3u+frdGzY/muLW+l1eBAL8nPz0+7l4RN/gOIRtzGRmFo6AgnSidRrc37aFYcEErnXzDEyf4IgQOirXRade/Oq1q/B66PxNfE6DN+iEAGczG5jLphC0iEwGlNFPtMjhZGkld4QQxRtKAgjbZqq9podhzoCSb/glVf+V3Ib1ViaKTvMxEC1lZ2KULQfOGvUhEbZUDPdeelX0oBEAJPmTIlrRA4pmuxgDw/ADFuojfQwoJYmJNbOIyrA8Qw+ZeNUXXGDvodwuLje7Wv1WOIUlrU6EsU3IOGQfMAdSvAAIYtZzRIOQQ2LpcAcLS0AHSFVBSYtkpEWrpAAYU3+Zf23fuV9wl277nlatUbKt9kpw6EcsIFM+cbRcawZYocE99KUuolUVPUA2yM/kwpAJzjiuJNrvAUhqLhL3qTaSg0OXb6zYUS1yD82mW17OsbIcZGcsOvnHdtiZqHQdNSivStZAE1vAmXTE4JUMfMccOI2B5DCYxP74FwppZjagQoC/VZlGtXNuZUDEEvUUwrwEBiothPDS8jLDhp0qSHNAMBscJLXy6Ia3XhvUbRQNPnXNPHKp1jl2kS4+TBGXzhMiiWl05nj26r7zGJYlpKAdBLnGkFQuDmBGH7ceTl5fGNBeCCBQuUjQyC2KxQW7WLr0uZuGhhqZImc0nJCiVfkTdI08HysholHyyr4Ju3XoyZWl+VCRAhNVQXGUWpW92klLFqba1SF7m+wuYh6lO8nHiugN7nNVTq0LK1QjGOEGPo07vs0T//Qx9JG1989iX74NxlfU/5R4jt3FZJH/EF9JbCwsIXUxAMUxDj7p1hdvn0I3Zq/x/pI2lj4FSM5zl45c+soaaIfTdsBVEgC4JWK+Yy8DvvnbzBhm7cJ0+4ofNZuqEO5fri9pfsym8+59djsSH2+UdWEAUmQXTAhJYam96P67o0GhlaQQzwK8iDBw9YfX29Kw0CwbkKwDBlZWWuJRykTZ06VVnWsYIY4EcQVHjHjh2spWV82QYCwdDy+9ALkCYDguXn57vSgKwLgrCXxt25JsJANAya7sWy0tdcgsgtXuDChQt8WyjyhyhCIKQhD+zNhUCwAYj7sJqANNwDIjSVxdYJUrZsuhLa+qUiyIvSQ6ggMCqMCUPDsFiegUDC+BMmTOA+AsJg/oU09JLEIiBPF2kydIIE2kNeVEFEFAV/AaPC+EBiPUkZxoRAApgM0jTACmJAMkEAVLiurs415AhnLRsa+wRkgUSaLk8riAF0YqgzHkDT8R4aAOAe2hNouCtgBTHAS5C/fDLElzswbFFD078B3SRRTsN/370TD3+tIAZQQTo74hsMYPB3D99hv+29rzV+Onj/5Md86ST26V0riAlUEKz8nuhp5a154Nwtduboh/SRtHHz6h12ct8f+BLKSecdrgXGhCAwrg6mdEAriDwPoTGyIELGQ509nsTzNI0Sn2TpfAJE/G96P95N7+eh6rxp7kW+kbhzP9Gj30yRKZ44UZcihsN/xUJs2k9eVsrnk6O6jQ+xBB+aujgMQz/CyMQXwpK5NcatNoL4TqCDVw+R92fJRFrR669qDVRfXZzIc0hi/B3+0+VrQ3yVV/eupprNStlAfLDr7+/nwyYl6uTY+2IoyanjS+kIAsOI3enYgeL1VTFIQUB8mStdPJ8bhvYUjPNBkvZGLzFA2IFGcwJOXUdDcTE8kZYgCwurXBui163YYzRg0IIIQpSvb7oNlk1CjOWL5ynlkPlMBNkQ6VW2AGH3yfLiTdptMtkQBGXANta9G3vZh2fjvYMSBhT/UprSxTWaz1cfh9hbDS38cGukXL/PGcy5IPAXKJQshrwvq3ypek4wWEFGuBjyLkZszuvaOqBw6itzeXmxN8wPsVHjtVfmK/mAB7eOn0X0EiWngsBAdD8vJVotdfJBClK+dKfvLaVoIMuKG5U8dMTOeOxm93suJS6KevI3Z4LAOLqTtzpij5bs5IMSRBzup+/zYnw3pfvkFyXE2LSm27cYceqPzeVMEJwDScUYiMCEQTMV5FzPcFpiCHqJIsSgz/gjRDmq7NbPuiDyLzb4JZw8IjE4+UwEgRjIJ9X3U+pEwQby2vBe5d7UKIsykn1BcA5CHOxMlTACDvGkK0j33huBiCEoRPng5Aif1LZF9Tv4U+e4KFkXJN0jxIJw8rNnzaVZcyQTRPywDc0zE+Joc8nCDUmDk9QZ9ykli9ZnV5C4I3+qKYA/opClS6po1hzJBAnqPKDMdw//lR+laFwNv5F+vShv9j/lx9xwMiurguA8hp9DMjqK00bpDlnwIRhighIFYmxMnFuPL/0EI4oQA8Ng1ocsFB6qm37bxEQMDeK0USaC4PkgRPld7zdsXYV7x3oQokAMNFj8dkrOoiwQxoWRaYH0HD+KHIQgmYoCMerKTWFvXBQcg6PPJSMVI6eCYIXVrz+hR5GDECRdUbzEkEV5A7P0dx4pz5uoEwPMmSAg/ElTkkkUhjZ6eCcoQcCKpa2+l04gxurSNiUPHVMRBWJgKlAd8NIJPpC0TJgwIQajQBRKfLWjL/TyJxjS6KFPEIII48vEDg+QpoN4t04QED8BlUwUiFH0enxiSp830Y8oGNrwo2c6MTDrxzl93Qcq7AG7du0amzhxovhAFXap4SCGHuBFfHenLwXRSnX+BItzOgPg9xfR4ilRcHzSpOkgtn6aBAG9RElHDEFvUcxiYJZeXlat2NBE7Sdc2qUo8KD64rg/Wcx/Pmncn8g/NUFpGrLQckzdG6KY8hPUiZKJGIJCFNro8GMzejHiPHSwl1ZDC+0mh0wEEYUW/qTLaTV01VNmtgQBMa+I/27JU3bl9CP2xtxqX88lI/KYM11MTJ+65jAmPlNBQPgTODfMfOk1mdkUBOtSCCLwXR+/3uDnGb8823OP/ypRT+tl108X6jniCNJDq6FF2oLA4TY1HOKnX/GvjnPmzFfS6DPrG7bTrDm8BMHxgF0tRzjxUxuN9bvH/qbELxXh4M32LXuUa5mx28mznUWq6jTXKLtZV1cXrYYWaQsiAMebKtC7ksFLEBnoLbj3eYefOgNWkBzBT50BK0iO4KfOgBUkR/BTZ8AKkiP4qTMQiCDIJBX6KRyM/KII4rfOgFEQB6N+GA6H06JjSE/29/ePYic4TafE/70Gv8rmVPi5JupCbafj0NCQdvd7OBRf5LJ8NqwLWVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFg8C/wXSC3nHSZ72ScAAAAASUVORK5CYII=',
                  '../assets/box/5.png': 'data:image/png;base64,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',
                }[`../assets/box/${e}.png`], self.location).href),
              }, null, 8, al)])]
              var e
            })),
            _: 2,
          }, 1032, ['content']), w('p', nl, [w('span', il, j(e) + '%', 1)])])))), 128))]), w('p', ol, j(Z(t)('income.Mistery_box_chance_illustrate')), 1)])])]), sl])])
        }
      },
    }
'function' == typeof Ge && Ge(rl)
export { rl as default }
