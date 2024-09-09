// function q1(e, t) {
//     for (var n = 0; n < t.length; n++) {
//         const r = t[n];
//         if (typeof r != "string" && !Array.isArray(r)) {
//             for (const o in r)
//                 if (o !== "default" && !(o in e)) {
//                     const i = Object.getOwnPropertyDescriptor(r, o);
//                     i && Object.defineProperty(e, o, i.get ? i : {
//                         enumerable: !0,
//                         get: () => r[o]
//                     })
//                 }
//         }
//     }
//     return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
//         value: "Module"
//     }))
// }
// (function() {
//     const t = document.createElement("link").relList;
//     if (t && t.supports && t.supports("modulepreload"))
//         return;
//     for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
//         r(o);
//     new MutationObserver(o => {
//         for (const i of o)
//             if (i.type === "childList")
//                 for (const a of i.addedNodes)
//                     a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
//     }
//     ).observe(document, {
//         childList: !0,
//         subtree: !0
//     });
//     function n(o) {
//         const i = {};
//         return o.integrity && (i.integrity = o.integrity),
//         o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
//         o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
//         i
//     }
//     function r(o) {
//         if (o.ep)
//             return;
//         o.ep = !0;
//         const i = n(o);
//         fetch(o.href, i)
//     }
// }
// )();
// var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
// function Mn(e) {
//     return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
// }
// var Nh = {
//     exports: {}
// }
//   , ns = {}
//   , Ph = {
//     exports: {}
// }
//   , J = {};
// /**
//  * @license React
//  * react.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */
// var ui = Symbol.for("react.element")
//   , Q1 = Symbol.for("react.portal")
//   , J1 = Symbol.for("react.fragment")
//   , Z1 = Symbol.for("react.strict_mode")
//   , e0 = Symbol.for("react.profiler")
//   , t0 = Symbol.for("react.provider")
//   , n0 = Symbol.for("react.context")
//   , r0 = Symbol.for("react.forward_ref")
//   , o0 = Symbol.for("react.suspense")
//   , i0 = Symbol.for("react.memo")
//   , a0 = Symbol.for("react.lazy")
//   , If = Symbol.iterator;
// function s0(e) {
//     return e === null || typeof e != "object" ? null : (e = If && e[If] || e["@@iterator"],
//     typeof e == "function" ? e : null)
// }
// var Th = {
//     isMounted: function() {
//         return !1
//     },
//     enqueueForceUpdate: function() {},
//     enqueueReplaceState: function() {},
//     enqueueSetState: function() {}
// }
//   , _h = Object.assign
//   , jh = {};
// function Qr(e, t, n) {
//     this.props = e,
//     this.context = t,
//     this.refs = jh,
//     this.updater = n || Th
// }
// Qr.prototype.isReactComponent = {};
// Qr.prototype.setState = function(e, t) {
//     if (typeof e != "object" && typeof e != "function" && e != null)
//         throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
//     this.updater.enqueueSetState(this, e, t, "setState")
// }
// ;
// Qr.prototype.forceUpdate = function(e) {
//     this.updater.enqueueForceUpdate(this, e, "forceUpdate")
// }
// ;
// function Lh() {}
// Lh.prototype = Qr.prototype;
// function ac(e, t, n) {
//     this.props = e,
//     this.context = t,
//     this.refs = jh,
//     this.updater = n || Th
// }
// var sc = ac.prototype = new Lh;
// sc.constructor = ac;
// _h(sc, Qr.prototype);
// sc.isPureReactComponent = !0;
// var Df = Array.isArray
//   , Rh = Object.prototype.hasOwnProperty
//   , lc = {
//     current: null
// }
//   , Ah = {
//     key: !0,
//     ref: !0,
//     __self: !0,
//     __source: !0
// };
// function Mh(e, t, n) {
//     var r, o = {}, i = null, a = null;
//     if (t != null)
//         for (r in t.ref !== void 0 && (a = t.ref),
//         t.key !== void 0 && (i = "" + t.key),
//         t)
//             Rh.call(t, r) && !Ah.hasOwnProperty(r) && (o[r] = t[r]);
//     var s = arguments.length - 2;
//     if (s === 1)
//         o.children = n;
//     else if (1 < s) {
//         for (var l = Array(s), u = 0; u < s; u++)
//             l[u] = arguments[u + 2];
//         o.children = l
//     }
//     if (e && e.defaultProps)
//         for (r in s = e.defaultProps,
//         s)
//             o[r] === void 0 && (o[r] = s[r]);
//     return {
//         $$typeof: ui,
//         type: e,
//         key: i,
//         ref: a,
//         props: o,
//         _owner: lc.current
//     }
// }
// function l0(e, t) {
//     return {
//         $$typeof: ui,
//         type: e.type,
//         key: t,
//         ref: e.ref,
//         props: e.props,
//         _owner: e._owner
//     }
// }
// function uc(e) {
//     return typeof e == "object" && e !== null && e.$$typeof === ui
// }
// function u0(e) {
//     var t = {
//         "=": "=0",
//         ":": "=2"
//     };
//     return "$" + e.replace(/[=:]/g, function(n) {
//         return t[n]
//     })
// }
// var $f = /\/+/g;
// function $s(e, t) {
//     return typeof e == "object" && e !== null && e.key != null ? u0("" + e.key) : t.toString(36)
// }
// function ra(e, t, n, r, o) {
//     var i = typeof e;
//     (i === "undefined" || i === "boolean") && (e = null);
//     var a = !1;
//     if (e === null)
//         a = !0;
//     else
//         switch (i) {
//         case "string":
//         case "number":
//             a = !0;
//             break;
//         case "object":
//             switch (e.$$typeof) {
//             case ui:
//             case Q1:
//                 a = !0
//             }
//         }
//     if (a)
//         return a = e,
//         o = o(a),
//         e = r === "" ? "." + $s(a, 0) : r,
//         Df(o) ? (n = "",
//         e != null && (n = e.replace($f, "$&/") + "/"),
//         ra(o, t, n, "", function(u) {
//             return u
//         })) : o != null && (uc(o) && (o = l0(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace($f, "$&/") + "/") + e)),
//         t.push(o)),
//         1;
//     if (a = 0,
//     r = r === "" ? "." : r + ":",
//     Df(e))
//         for (var s = 0; s < e.length; s++) {
//             i = e[s];
//             var l = r + $s(i, s);
//             a += ra(i, t, n, l, o)
//         }
//     else if (l = s0(e),
//     typeof l == "function")
//         for (e = l.call(e),
//         s = 0; !(i = e.next()).done; )
//             i = i.value,
//             l = r + $s(i, s++),
//             a += ra(i, t, n, l, o);
//     else if (i === "object")
//         throw t = String(e),
//         Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
//     return a
// }
// function Pi(e, t, n) {
//     if (e == null)
//         return e;
//     var r = []
//       , o = 0;
//     return ra(e, r, "", "", function(i) {
//         return t.call(n, i, o++)
//     }),
//     r
// }
// function c0(e) {
//     if (e._status === -1) {
//         var t = e._result;
//         t = t(),
//         t.then(function(n) {
//             (e._status === 0 || e._status === -1) && (e._status = 1,
//             e._result = n)
//         }, function(n) {
//             (e._status === 0 || e._status === -1) && (e._status = 2,
//             e._result = n)
//         }),
//         e._status === -1 && (e._status = 0,
//         e._result = t)
//     }
//     if (e._status === 1)
//         return e._result.default;
//     throw e._result
// }
// var Ve = {
//     current: null
// }
//   , oa = {
//     transition: null
// }
//   , f0 = {
//     ReactCurrentDispatcher: Ve,
//     ReactCurrentBatchConfig: oa,
//     ReactCurrentOwner: lc
// };
// function Ih() {
//     throw Error("act(...) is not supported in production builds of React.")
// }
// J.Children = {
//     map: Pi,
//     forEach: function(e, t, n) {
//         Pi(e, function() {
//             t.apply(this, arguments)
//         }, n)
//     },
//     count: function(e) {
//         var t = 0;
//         return Pi(e, function() {
//             t++
//         }),
//         t
//     },
//     toArray: function(e) {
//         return Pi(e, function(t) {
//             return t
//         }) || []
//     },
//     only: function(e) {
//         if (!uc(e))
//             throw Error("React.Children.only expected to receive a single React element child.");
//         return e
//     }
// };
// J.Component = Qr;
// J.Fragment = J1;
// J.Profiler = e0;
// J.PureComponent = ac;
// J.StrictMode = Z1;
// J.Suspense = o0;
// J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0;
// J.act = Ih;
// J.cloneElement = function(e, t, n) {
//     if (e == null)
//         throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
//     var r = _h({}, e.props)
//       , o = e.key
//       , i = e.ref
//       , a = e._owner;
//     if (t != null) {
//         if (t.ref !== void 0 && (i = t.ref,
//         a = lc.current),
//         t.key !== void 0 && (o = "" + t.key),
//         e.type && e.type.defaultProps)
//             var s = e.type.defaultProps;
//         for (l in t)
//             Rh.call(t, l) && !Ah.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
//     }
//     var l = arguments.length - 2;
//     if (l === 1)
//         r.children = n;
//     else if (1 < l) {
//         s = Array(l);
//         for (var u = 0; u < l; u++)
//             s[u] = arguments[u + 2];
//         r.children = s
//     }
//     return {
//         $$typeof: ui,
//         type: e.type,
//         key: o,
//         ref: i,
//         props: r,
//         _owner: a
//     }
// }
// ;
// J.createContext = function(e) {
//     return e = {
//         $$typeof: n0,
//         _currentValue: e,
//         _currentValue2: e,
//         _threadCount: 0,
//         Provider: null,
//         Consumer: null,
//         _defaultValue: null,
//         _globalName: null
//     },
//     e.Provider = {
//         $$typeof: t0,
//         _context: e
//     },
//     e.Consumer = e
// }
// ;
// J.createElement = Mh;
// J.createFactory = function(e) {
//     var t = Mh.bind(null, e);
//     return t.type = e,
//     t
// }
// ;
// J.createRef = function() {
//     return {
//         current: null
//     }
// }
// ;
// J.forwardRef = function(e) {
//     return {
//         $$typeof: r0,
//         render: e
//     }
// }
// ;
// J.isValidElement = uc;
// J.lazy = function(e) {
//     return {
//         $$typeof: a0,
//         _payload: {
//             _status: -1,
//             _result: e
//         },
//         _init: c0
//     }
// }
// ;
// J.memo = function(e, t) {
//     return {
//         $$typeof: i0,
//         type: e,
//         compare: t === void 0 ? null : t
//     }
// }
// ;
// J.startTransition = function(e) {
//     var t = oa.transition;
//     oa.transition = {};
//     try {
//         e()
//     } finally {
//         oa.transition = t
//     }
// }
// ;
// J.unstable_act = Ih;
// J.useCallback = function(e, t) {
//     return Ve.current.useCallback(e, t)
// }
// ;
// J.useContext = function(e) {
//     return Ve.current.useContext(e)
// }
// ;
// J.useDebugValue = function() {}
// ;
// J.useDeferredValue = function(e) {
//     return Ve.current.useDeferredValue(e)
// }
// ;
// J.useEffect = function(e, t) {
//     return Ve.current.useEffect(e, t)
// }
// ;
// J.useId = function() {
//     return Ve.current.useId()
// }
// ;
// J.useImperativeHandle = function(e, t, n) {
//     return Ve.current.useImperativeHandle(e, t, n)
// }
// ;
// J.useInsertionEffect = function(e, t) {
//     return Ve.current.useInsertionEffect(e, t)
// }
// ;
// J.useLayoutEffect = function(e, t) {
//     return Ve.current.useLayoutEffect(e, t)
// }
// ;
// J.useMemo = function(e, t) {
//     return Ve.current.useMemo(e, t)
// }
// ;
// J.useReducer = function(e, t, n) {
//     return Ve.current.useReducer(e, t, n)
// }
// ;
// J.useRef = function(e) {
//     return Ve.current.useRef(e)
// }
// ;
// J.useState = function(e) {
//     return Ve.current.useState(e)
// }
// ;
// J.useSyncExternalStore = function(e, t, n) {
//     return Ve.current.useSyncExternalStore(e, t, n)
// }
// ;
// J.useTransition = function() {
//     return Ve.current.useTransition()
// }
// ;
// J.version = "18.3.1";
// Ph.exports = J;
// var y = Ph.exports;
// const fe = Mn(y);
// /**
//  * @license React
//  * react-jsx-runtime.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */
// var d0 = y
//   , p0 = Symbol.for("react.element")
//   , h0 = Symbol.for("react.fragment")
//   , m0 = Object.prototype.hasOwnProperty
//   , g0 = d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
//   , v0 = {
//     key: !0,
//     ref: !0,
//     __self: !0,
//     __source: !0
// };
// function Dh(e, t, n) {
//     var r, o = {}, i = null, a = null;
//     n !== void 0 && (i = "" + n),
//     t.key !== void 0 && (i = "" + t.key),
//     t.ref !== void 0 && (a = t.ref);
//     for (r in t)
//         m0.call(t, r) && !v0.hasOwnProperty(r) && (o[r] = t[r]);
//     if (e && e.defaultProps)
//         for (r in t = e.defaultProps,
//         t)
//             o[r] === void 0 && (o[r] = t[r]);
//     return {
//         $$typeof: p0,
//         type: e,
//         key: i,
//         ref: a,
//         props: o,
//         _owner: g0.current
//     }
// }
// ns.Fragment = h0;
// ns.jsx = Dh;
// ns.jsxs = Dh;
// Nh.exports = ns;
// var g = Nh.exports
//   , Pl = {}
//   , $h = {
//     exports: {}
// }
//   , at = {}
//   , zh = {
//     exports: {}
// }
//   , Fh = {};
// /**
//  * @license React
//  * scheduler.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */
// (function(e) {
//     function t(E, j) {
//         var L = E.length;
//         E.push(j);
//         e: for (; 0 < L; ) {
//             var U = L - 1 >>> 1
//               , K = E[U];
//             if (0 < o(K, j))
//                 E[U] = j,
//                 E[L] = K,
//                 L = U;
//             else
//                 break e
//         }
//     }
//     function n(E) {
//         return E.length === 0 ? null : E[0]
//     }
//     function r(E) {
//         if (E.length === 0)
//             return null;
//         var j = E[0]
//           , L = E.pop();
//         if (L !== j) {
//             E[0] = L;
//             e: for (var U = 0, K = E.length, H = K >>> 1; U < H; ) {
//                 var V = 2 * (U + 1) - 1
//                   , ie = E[V]
//                   , Y = V + 1
//                   , re = E[Y];
//                 if (0 > o(ie, L))
//                     Y < K && 0 > o(re, ie) ? (E[U] = re,
//                     E[Y] = L,
//                     U = Y) : (E[U] = ie,
//                     E[V] = L,
//                     U = V);
//                 else if (Y < K && 0 > o(re, L))
//                     E[U] = re,
//                     E[Y] = L,
//                     U = Y;
//                 else
//                     break e
//             }
//         }
//         return j
//     }
//     function o(E, j) {
//         var L = E.sortIndex - j.sortIndex;
//         return L !== 0 ? L : E.id - j.id
//     }
//     if (typeof performance == "object" && typeof performance.now == "function") {
//         var i = performance;
//         e.unstable_now = function() {
//             return i.now()
//         }
//     } else {
//         var a = Date
//           , s = a.now();
//         e.unstable_now = function() {
//             return a.now() - s
//         }
//     }
//     var l = []
//       , u = []
//       , c = 1
//       , d = null
//       , f = 3
//       , m = !1
//       , v = !1
//       , x = !1
//       , k = typeof setTimeout == "function" ? setTimeout : null
//       , h = typeof clearTimeout == "function" ? clearTimeout : null
//       , p = typeof setImmediate < "u" ? setImmediate : null;
//     typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
//     function w(E) {
//         for (var j = n(u); j !== null; ) {
//             if (j.callback === null)
//                 r(u);
//             else if (j.startTime <= E)
//                 r(u),
//                 j.sortIndex = j.expirationTime,
//                 t(l, j);
//             else
//                 break;
//             j = n(u)
//         }
//     }
//     function b(E) {
//         if (x = !1,
//         w(E),
//         !v)
//             if (n(l) !== null)
//                 v = !0,
//                 P(O);
//             else {
//                 var j = n(u);
//                 j !== null && M(b, j.startTime - E)
//             }
//     }
//     function O(E, j) {
//         v = !1,
//         x && (x = !1,
//         h(_),
//         _ = -1),
//         m = !0;
//         var L = f;
//         try {
//             for (w(j),
//             d = n(l); d !== null && (!(d.expirationTime > j) || E && !A()); ) {
//                 var U = d.callback;
//                 if (typeof U == "function") {
//                     d.callback = null,
//                     f = d.priorityLevel;
//                     var K = U(d.expirationTime <= j);
//                     j = e.unstable_now(),
//                     typeof K == "function" ? d.callback = K : d === n(l) && r(l),
//                     w(j)
//                 } else
//                     r(l);
//                 d = n(l)
//             }
//             if (d !== null)
//                 var H = !0;
//             else {
//                 var V = n(u);
//                 V !== null && M(b, V.startTime - j),
//                 H = !1
//             }
//             return H
//         } finally {
//             d = null,
//             f = L,
//             m = !1
//         }
//     }
//     var C = !1
//       , N = null
//       , _ = -1
//       , z = 5
//       , D = -1;
//     function A() {
//         return !(e.unstable_now() - D < z)
//     }
//     function T() {
//         if (N !== null) {
//             var E = e.unstable_now();
//             D = E;
//             var j = !0;
//             try {
//                 j = N(!0, E)
//             } finally {
//                 j ? B() : (C = !1,
//                 N = null)
//             }
//         } else
//             C = !1
//     }
//     var B;
//     if (typeof p == "function")
//         B = function() {
//             p(T)
//         }
//         ;
//     else if (typeof MessageChannel < "u") {
//         var I = new MessageChannel
//           , S = I.port2;
//         I.port1.onmessage = T,
//         B = function() {
//             S.postMessage(null)
//         }
//     } else
//         B = function() {
//             k(T, 0)
//         }
//         ;
//     function P(E) {
//         N = E,
//         C || (C = !0,
//         B())
//     }
//     function M(E, j) {
//         _ = k(function() {
//             E(e.unstable_now())
//         }, j)
//     }
//     e.unstable_IdlePriority = 5,
//     e.unstable_ImmediatePriority = 1,
//     e.unstable_LowPriority = 4,
//     e.unstable_NormalPriority = 3,
//     e.unstable_Profiling = null,
//     e.unstable_UserBlockingPriority = 2,
//     e.unstable_cancelCallback = function(E) {
//         E.callback = null
//     }
//     ,
//     e.unstable_continueExecution = function() {
//         v || m || (v = !0,
//         P(O))
//     }
//     ,
//     e.unstable_forceFrameRate = function(E) {
//         0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < E ? Math.floor(1e3 / E) : 5
//     }
//     ,
//     e.unstable_getCurrentPriorityLevel = function() {
//         return f
//     }
//     ,
//     e.unstable_getFirstCallbackNode = function() {
//         return n(l)
//     }
//     ,
//     e.unstable_next = function(E) {
//         switch (f) {
//         case 1:
//         case 2:
//         case 3:
//             var j = 3;
//             break;
//         default:
//             j = f
//         }
//         var L = f;
//         f = j;
//         try {
//             return E()
//         } finally {
//             f = L
//         }
//     }
//     ,
//     e.unstable_pauseExecution = function() {}
//     ,
//     e.unstable_requestPaint = function() {}
//     ,
//     e.unstable_runWithPriority = function(E, j) {
//         switch (E) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             break;
//         default:
//             E = 3
//         }
//         var L = f;
//         f = E;
//         try {
//             return j()
//         } finally {
//             f = L
//         }
//     }
//     ,
//     e.unstable_scheduleCallback = function(E, j, L) {
//         var U = e.unstable_now();
//         switch (typeof L == "object" && L !== null ? (L = L.delay,
//         L = typeof L == "number" && 0 < L ? U + L : U) : L = U,
//         E) {
//         case 1:
//             var K = -1;
//             break;
//         case 2:
//             K = 250;
//             break;
//         case 5:
//             K = 1073741823;
//             break;
//         case 4:
//             K = 1e4;
//             break;
//         default:
//             K = 5e3
//         }
//         return K = L + K,
//         E = {
//             id: c++,
//             callback: j,
//             priorityLevel: E,
//             startTime: L,
//             expirationTime: K,
//             sortIndex: -1
//         },
//         L > U ? (E.sortIndex = L,
//         t(u, E),
//         n(l) === null && E === n(u) && (x ? (h(_),
//         _ = -1) : x = !0,
//         M(b, L - U))) : (E.sortIndex = K,
//         t(l, E),
//         v || m || (v = !0,
//         P(O))),
//         E
//     }
//     ,
//     e.unstable_shouldYield = A,
//     e.unstable_wrapCallback = function(E) {
//         var j = f;
//         return function() {
//             var L = f;
//             f = j;
//             try {
//                 return E.apply(this, arguments)
//             } finally {
//                 f = L
//             }
//         }
//     }
// }
// )(Fh);
// zh.exports = Fh;
// var y0 = zh.exports;
// /**
//  * @license React
//  * react-dom.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */
// var w0 = y
//   , it = y0;
// function R(e) {
//     for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
//         t += "&args[]=" + encodeURIComponent(arguments[n]);
//     return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
// }
// var Bh = new Set
//   , zo = {};
// function fr(e, t) {
//     Ur(e, t),
//     Ur(e + "Capture", t)
// }
// function Ur(e, t) {
//     for (zo[e] = t,
//     e = 0; e < t.length; e++)
//         Bh.add(t[e])
// }
// var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
//   , Tl = Object.prototype.hasOwnProperty
//   , x0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
//   , zf = {}
//   , Ff = {};
// function b0(e) {
//     return Tl.call(Ff, e) ? !0 : Tl.call(zf, e) ? !1 : x0.test(e) ? Ff[e] = !0 : (zf[e] = !0,
//     !1)
// }
// function S0(e, t, n, r) {
//     if (n !== null && n.type === 0)
//         return !1;
//     switch (typeof t) {
//     case "function":
//     case "symbol":
//         return !0;
//     case "boolean":
//         return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
//         e !== "data-" && e !== "aria-");
//     default:
//         return !1
//     }
// }
// function k0(e, t, n, r) {
//     if (t === null || typeof t > "u" || S0(e, t, n, r))
//         return !0;
//     if (r)
//         return !1;
//     if (n !== null)
//         switch (n.type) {
//         case 3:
//             return !t;
//         case 4:
//             return t === !1;
//         case 5:
//             return isNaN(t);
//         case 6:
//             return isNaN(t) || 1 > t
//         }
//     return !1
// }
// function Ke(e, t, n, r, o, i, a) {
//     this.acceptsBooleans = t === 2 || t === 3 || t === 4,
//     this.attributeName = r,
//     this.attributeNamespace = o,
//     this.mustUseProperty = n,
//     this.propertyName = e,
//     this.type = t,
//     this.sanitizeURL = i,
//     this.removeEmptyString = a
// }
// var Ie = {};
// "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
//     Ie[e] = new Ke(e,0,!1,e,null,!1,!1)
// });
// [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
//     var t = e[0];
//     Ie[t] = new Ke(t,1,!1,e[1],null,!1,!1)
// });
// ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
//     Ie[e] = new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)
// });
// ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
//     Ie[e] = new Ke(e,2,!1,e,null,!1,!1)
// });
// "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
//     Ie[e] = new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)
// });
// ["checked", "multiple", "muted", "selected"].forEach(function(e) {
//     Ie[e] = new Ke(e,3,!0,e,null,!1,!1)
// });
// ["capture", "download"].forEach(function(e) {
//     Ie[e] = new Ke(e,4,!1,e,null,!1,!1)
// });
// ["cols", "rows", "size", "span"].forEach(function(e) {
//     Ie[e] = new Ke(e,6,!1,e,null,!1,!1)
// });
// ["rowSpan", "start"].forEach(function(e) {
//     Ie[e] = new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)
// });
// var cc = /[\-:]([a-z])/g;
// function fc(e) {
//     return e[1].toUpperCase()
// }
// "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
//     var t = e.replace(cc, fc);
//     Ie[t] = new Ke(t,1,!1,e,null,!1,!1)
// });
// "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
//     var t = e.replace(cc, fc);
//     Ie[t] = new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
// });
// ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
//     var t = e.replace(cc, fc);
//     Ie[t] = new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
// });
// ["tabIndex", "crossOrigin"].forEach(function(e) {
//     Ie[e] = new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)
// });
// Ie.xlinkHref = new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
// ["src", "href", "action", "formAction"].forEach(function(e) {
//     Ie[e] = new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)
// });
// function dc(e, t, n, r) {
//     var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
//     (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (k0(t, n, o, r) && (n = null),
//     r || o === null ? b0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
//     r = o.attributeNamespace,
//     n === null ? e.removeAttribute(t) : (o = o.type,
//     n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
//     r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
// }
// var nn = w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
//   , Ti = Symbol.for("react.element")
//   , xr = Symbol.for("react.portal")
//   , br = Symbol.for("react.fragment")
//   , pc = Symbol.for("react.strict_mode")
//   , _l = Symbol.for("react.profiler")
//   , Uh = Symbol.for("react.provider")
//   , Hh = Symbol.for("react.context")
//   , hc = Symbol.for("react.forward_ref")
//   , jl = Symbol.for("react.suspense")
//   , Ll = Symbol.for("react.suspense_list")
//   , mc = Symbol.for("react.memo")
//   , pn = Symbol.for("react.lazy")
//   , Wh = Symbol.for("react.offscreen")
//   , Bf = Symbol.iterator;
// function io(e) {
//     return e === null || typeof e != "object" ? null : (e = Bf && e[Bf] || e["@@iterator"],
//     typeof e == "function" ? e : null)
// }
// var Se = Object.assign, zs;
// function wo(e) {
//     if (zs === void 0)
//         try {
//             throw Error()
//         } catch (n) {
//             var t = n.stack.trim().match(/\n( *(at )?)/);
//             zs = t && t[1] || ""
//         }
//     return `
// ` + zs + e
// }
// var Fs = !1;
// function Bs(e, t) {
//     if (!e || Fs)
//         return "";
//     Fs = !0;
//     var n = Error.prepareStackTrace;
//     Error.prepareStackTrace = void 0;
//     try {
//         if (t)
//             if (t = function() {
//                 throw Error()
//             }
//             ,
//             Object.defineProperty(t.prototype, "props", {
//                 set: function() {
//                     throw Error()
//                 }
//             }),
//             typeof Reflect == "object" && Reflect.construct) {
//                 try {
//                     Reflect.construct(t, [])
//                 } catch (u) {
//                     var r = u
//                 }
//                 Reflect.construct(e, [], t)
//             } else {
//                 try {
//                     t.call()
//                 } catch (u) {
//                     r = u
//                 }
//                 e.call(t.prototype)
//             }
//         else {
//             try {
//                 throw Error()
//             } catch (u) {
//                 r = u
//             }
//             e()
//         }
//     } catch (u) {
//         if (u && r && typeof u.stack == "string") {
//             for (var o = u.stack.split(`
// `), i = r.stack.split(`
// `), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
//                 s--;
//             for (; 1 <= a && 0 <= s; a--,
//             s--)
//                 if (o[a] !== i[s]) {
//                     if (a !== 1 || s !== 1)
//                         do
//                             if (a--,
//                             s--,
//                             0 > s || o[a] !== i[s]) {
//                                 var l = `
// ` + o[a].replace(" at new ", " at ");
//                                 return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
//                                 l
//                             }
//                         while (1 <= a && 0 <= s);
//                     break
//                 }
//         }
//     } finally {
//         Fs = !1,
//         Error.prepareStackTrace = n
//     }
//     return (e = e ? e.displayName || e.name : "") ? wo(e) : ""
// }
// function C0(e) {
//     switch (e.tag) {
//     case 5:
//         return wo(e.type);
//     case 16:
//         return wo("Lazy");
//     case 13:
//         return wo("Suspense");
//     case 19:
//         return wo("SuspenseList");
//     case 0:
//     case 2:
//     case 15:
//         return e = Bs(e.type, !1),
//         e;
//     case 11:
//         return e = Bs(e.type.render, !1),
//         e;
//     case 1:
//         return e = Bs(e.type, !0),
//         e;
//     default:
//         return ""
//     }
// }
// function Rl(e) {
//     if (e == null)
//         return null;
//     if (typeof e == "function")
//         return e.displayName || e.name || null;
//     if (typeof e == "string")
//         return e;
//     switch (e) {
//     case br:
//         return "Fragment";
//     case xr:
//         return "Portal";
//     case _l:
//         return "Profiler";
//     case pc:
//         return "StrictMode";
//     case jl:
//         return "Suspense";
//     case Ll:
//         return "SuspenseList"
//     }
//     if (typeof e == "object")
//         switch (e.$$typeof) {
//         case Hh:
//             return (e.displayName || "Context") + ".Consumer";
//         case Uh:
//             return (e._context.displayName || "Context") + ".Provider";
//         case hc:
//             var t = e.render;
//             return e = e.displayName,
//             e || (e = t.displayName || t.name || "",
//             e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
//             e;
//         case mc:
//             return t = e.displayName || null,
//             t !== null ? t : Rl(e.type) || "Memo";
//         case pn:
//             t = e._payload,
//             e = e._init;
//             try {
//                 return Rl(e(t))
//             } catch {}
//         }
//     return null
// }
// function E0(e) {
//     var t = e.type;
//     switch (e.tag) {
//     case 24:
//         return "Cache";
//     case 9:
//         return (t.displayName || "Context") + ".Consumer";
//     case 10:
//         return (t._context.displayName || "Context") + ".Provider";
//     case 18:
//         return "DehydratedFragment";
//     case 11:
//         return e = t.render,
//         e = e.displayName || e.name || "",
//         t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
//     case 7:
//         return "Fragment";
//     case 5:
//         return t;
//     case 4:
//         return "Portal";
//     case 3:
//         return "Root";
//     case 6:
//         return "Text";
//     case 16:
//         return Rl(t);
//     case 8:
//         return t === pc ? "StrictMode" : "Mode";
//     case 22:
//         return "Offscreen";
//     case 12:
//         return "Profiler";
//     case 21:
//         return "Scope";
//     case 13:
//         return "Suspense";
//     case 19:
//         return "SuspenseList";
//     case 25:
//         return "TracingMarker";
//     case 1:
//     case 0:
//     case 17:
//     case 2:
//     case 14:
//     case 15:
//         if (typeof t == "function")
//             return t.displayName || t.name || null;
//         if (typeof t == "string")
//             return t
//     }
//     return null
// }
// function _n(e) {
//     switch (typeof e) {
//     case "boolean":
//     case "number":
//     case "string":
//     case "undefined":
//         return e;
//     case "object":
//         return e;
//     default:
//         return ""
//     }
// }
// function Vh(e) {
//     var t = e.type;
//     return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
// }
// function O0(e) {
//     var t = Vh(e) ? "checked" : "value"
//       , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
//       , r = "" + e[t];
//     if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
//         var o = n.get
//           , i = n.set;
//         return Object.defineProperty(e, t, {
//             configurable: !0,
//             get: function() {
//                 return o.call(this)
//             },
//             set: function(a) {
//                 r = "" + a,
//                 i.call(this, a)
//             }
//         }),
//         Object.defineProperty(e, t, {
//             enumerable: n.enumerable
//         }),
//         {
//             getValue: function() {
//                 return r
//             },
//             setValue: function(a) {
//                 r = "" + a
//             },
//             stopTracking: function() {
//                 e._valueTracker = null,
//                 delete e[t]
//             }
//         }
//     }
// }
// function _i(e) {
//     e._valueTracker || (e._valueTracker = O0(e))
// }
// function Kh(e) {
//     if (!e)
//         return !1;
//     var t = e._valueTracker;
//     if (!t)
//         return !0;
//     var n = t.getValue()
//       , r = "";
//     return e && (r = Vh(e) ? e.checked ? "true" : "false" : e.value),
//     e = r,
//     e !== n ? (t.setValue(e),
//     !0) : !1
// }
// function ya(e) {
//     if (e = e || (typeof document < "u" ? document : void 0),
//     typeof e > "u")
//         return null;
//     try {
//         return e.activeElement || e.body
//     } catch {
//         return e.body
//     }
// }
// function Al(e, t) {
//     var n = t.checked;
//     return Se({}, t, {
//         defaultChecked: void 0,
//         defaultValue: void 0,
//         value: void 0,
//         checked: n ?? e._wrapperState.initialChecked
//     })
// }
// function Uf(e, t) {
//     var n = t.defaultValue == null ? "" : t.defaultValue
//       , r = t.checked != null ? t.checked : t.defaultChecked;
//     n = _n(t.value != null ? t.value : n),
//     e._wrapperState = {
//         initialChecked: r,
//         initialValue: n,
//         controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
//     }
// }
// function Gh(e, t) {
//     t = t.checked,
//     t != null && dc(e, "checked", t, !1)
// }
// function Ml(e, t) {
//     Gh(e, t);
//     var n = _n(t.value)
//       , r = t.type;
//     if (n != null)
//         r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
//     else if (r === "submit" || r === "reset") {
//         e.removeAttribute("value");
//         return
//     }
//     t.hasOwnProperty("value") ? Il(e, t.type, n) : t.hasOwnProperty("defaultValue") && Il(e, t.type, _n(t.defaultValue)),
//     t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
// }
// function Hf(e, t, n) {
//     if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
//         var r = t.type;
//         if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
//             return;
//         t = "" + e._wrapperState.initialValue,
//         n || t === e.value || (e.value = t),
//         e.defaultValue = t
//     }
//     n = e.name,
//     n !== "" && (e.name = ""),
//     e.defaultChecked = !!e._wrapperState.initialChecked,
//     n !== "" && (e.name = n)
// }
// function Il(e, t, n) {
//     (t !== "number" || ya(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
// }
// var xo = Array.isArray;
// function Mr(e, t, n, r) {
//     if (e = e.options,
//     t) {
//         t = {};
//         for (var o = 0; o < n.length; o++)
//             t["$" + n[o]] = !0;
//         for (n = 0; n < e.length; n++)
//             o = t.hasOwnProperty("$" + e[n].value),
//             e[n].selected !== o && (e[n].selected = o),
//             o && r && (e[n].defaultSelected = !0)
//     } else {
//         for (n = "" + _n(n),
//         t = null,
//         o = 0; o < e.length; o++) {
//             if (e[o].value === n) {
//                 e[o].selected = !0,
//                 r && (e[o].defaultSelected = !0);
//                 return
//             }
//             t !== null || e[o].disabled || (t = e[o])
//         }
//         t !== null && (t.selected = !0)
//     }
// }
// function Dl(e, t) {
//     if (t.dangerouslySetInnerHTML != null)
//         throw Error(R(91));
//     return Se({}, t, {
//         value: void 0,
//         defaultValue: void 0,
//         children: "" + e._wrapperState.initialValue
//     })
// }
// function Wf(e, t) {
//     var n = t.value;
//     if (n == null) {
//         if (n = t.children,
//         t = t.defaultValue,
//         n != null) {
//             if (t != null)
//                 throw Error(R(92));
//             if (xo(n)) {
//                 if (1 < n.length)
//                     throw Error(R(93));
//                 n = n[0]
//             }
//             t = n
//         }
//         t == null && (t = ""),
//         n = t
//     }
//     e._wrapperState = {
//         initialValue: _n(n)
//     }
// }
// function Yh(e, t) {
//     var n = _n(t.value)
//       , r = _n(t.defaultValue);
//     n != null && (n = "" + n,
//     n !== e.value && (e.value = n),
//     t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
//     r != null && (e.defaultValue = "" + r)
// }
// function Vf(e) {
//     var t = e.textContent;
//     t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
// }
// function Xh(e) {
//     switch (e) {
//     case "svg":
//         return "http://www.w3.org/2000/svg";
//     case "math":
//         return "http://www.w3.org/1998/Math/MathML";
//     default:
//         return "http://www.w3.org/1999/xhtml"
//     }
// }
// function $l(e, t) {
//     return e == null || e === "http://www.w3.org/1999/xhtml" ? Xh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
// }
// var ji, qh = function(e) {
//     return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
//         MSApp.execUnsafeLocalFunction(function() {
//             return e(t, n, r, o)
//         })
//     }
//     : e
// }(function(e, t) {
//     if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
//         e.innerHTML = t;
//     else {
//         for (ji = ji || document.createElement("div"),
//         ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
//         t = ji.firstChild; e.firstChild; )
//             e.removeChild(e.firstChild);
//         for (; t.firstChild; )
//             e.appendChild(t.firstChild)
//     }
// });
// function Fo(e, t) {
//     if (t) {
//         var n = e.firstChild;
//         if (n && n === e.lastChild && n.nodeType === 3) {
//             n.nodeValue = t;
//             return
//         }
//     }
//     e.textContent = t
// }
// var No = {
//     animationIterationCount: !0,
//     aspectRatio: !0,
//     borderImageOutset: !0,
//     borderImageSlice: !0,
//     borderImageWidth: !0,
//     boxFlex: !0,
//     boxFlexGroup: !0,
//     boxOrdinalGroup: !0,
//     columnCount: !0,
//     columns: !0,
//     flex: !0,
//     flexGrow: !0,
//     flexPositive: !0,
//     flexShrink: !0,
//     flexNegative: !0,
//     flexOrder: !0,
//     gridArea: !0,
//     gridRow: !0,
//     gridRowEnd: !0,
//     gridRowSpan: !0,
//     gridRowStart: !0,
//     gridColumn: !0,
//     gridColumnEnd: !0,
//     gridColumnSpan: !0,
//     gridColumnStart: !0,
//     fontWeight: !0,
//     lineClamp: !0,
//     lineHeight: !0,
//     opacity: !0,
//     order: !0,
//     orphans: !0,
//     tabSize: !0,
//     widows: !0,
//     zIndex: !0,
//     zoom: !0,
//     fillOpacity: !0,
//     floodOpacity: !0,
//     stopOpacity: !0,
//     strokeDasharray: !0,
//     strokeDashoffset: !0,
//     strokeMiterlimit: !0,
//     strokeOpacity: !0,
//     strokeWidth: !0
// }
//   , N0 = ["Webkit", "ms", "Moz", "O"];
// Object.keys(No).forEach(function(e) {
//     N0.forEach(function(t) {
//         t = t + e.charAt(0).toUpperCase() + e.substring(1),
//         No[t] = No[e]
//     })
// });
// function Qh(e, t, n) {
//     return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || No.hasOwnProperty(e) && No[e] ? ("" + t).trim() : t + "px"
// }
// function Jh(e, t) {
//     e = e.style;
//     for (var n in t)
//         if (t.hasOwnProperty(n)) {
//             var r = n.indexOf("--") === 0
//               , o = Qh(n, t[n], r);
//             n === "float" && (n = "cssFloat"),
//             r ? e.setProperty(n, o) : e[n] = o
//         }
// }
// var P0 = Se({
//     menuitem: !0
// }, {
//     area: !0,
//     base: !0,
//     br: !0,
//     col: !0,
//     embed: !0,
//     hr: !0,
//     img: !0,
//     input: !0,
//     keygen: !0,
//     link: !0,
//     meta: !0,
//     param: !0,
//     source: !0,
//     track: !0,
//     wbr: !0
// });
// function zl(e, t) {
//     if (t) {
//         if (P0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
//             throw Error(R(137, e));
//         if (t.dangerouslySetInnerHTML != null) {
//             if (t.children != null)
//                 throw Error(R(60));
//             if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
//                 throw Error(R(61))
//         }
//         if (t.style != null && typeof t.style != "object")
//             throw Error(R(62))
//     }
// }
// function Fl(e, t) {
//     if (e.indexOf("-") === -1)
//         return typeof t.is == "string";
//     switch (e) {
//     case "annotation-xml":
//     case "color-profile":
//     case "font-face":
//     case "font-face-src":
//     case "font-face-uri":
//     case "font-face-format":
//     case "font-face-name":
//     case "missing-glyph":
//         return !1;
//     default:
//         return !0
//     }
// }
// var Bl = null;
// function gc(e) {
//     return e = e.target || e.srcElement || window,
//     e.correspondingUseElement && (e = e.correspondingUseElement),
//     e.nodeType === 3 ? e.parentNode : e
// }
// var Ul = null
//   , Ir = null
//   , Dr = null;
// function Kf(e) {
//     if (e = di(e)) {
//         if (typeof Ul != "function")
//             throw Error(R(280));
//         var t = e.stateNode;
//         t && (t = ss(t),
//         Ul(e.stateNode, e.type, t))
//     }
// }
// function Zh(e) {
//     Ir ? Dr ? Dr.push(e) : Dr = [e] : Ir = e
// }
// function em() {
//     if (Ir) {
//         var e = Ir
//           , t = Dr;
//         if (Dr = Ir = null,
//         Kf(e),
//         t)
//             for (e = 0; e < t.length; e++)
//                 Kf(t[e])
//     }
// }
// function tm(e, t) {
//     return e(t)
// }
// function nm() {}
// var Us = !1;
// function rm(e, t, n) {
//     if (Us)
//         return e(t, n);
//     Us = !0;
//     try {
//         return tm(e, t, n)
//     } finally {
//         Us = !1,
//         (Ir !== null || Dr !== null) && (nm(),
//         em())
//     }
// }
// function Bo(e, t) {
//     var n = e.stateNode;
//     if (n === null)
//         return null;
//     var r = ss(n);
//     if (r === null)
//         return null;
//     n = r[t];
//     e: switch (t) {
//     case "onClick":
//     case "onClickCapture":
//     case "onDoubleClick":
//     case "onDoubleClickCapture":
//     case "onMouseDown":
//     case "onMouseDownCapture":
//     case "onMouseMove":
//     case "onMouseMoveCapture":
//     case "onMouseUp":
//     case "onMouseUpCapture":
//     case "onMouseEnter":
//         (r = !r.disabled) || (e = e.type,
//         r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
//         e = !r;
//         break e;
//     default:
//         e = !1
//     }
//     if (e)
//         return null;
//     if (n && typeof n != "function")
//         throw Error(R(231, t, typeof n));
//     return n
// }
// var Hl = !1;
// if (Gt)
//     try {
//         var ao = {};
//         Object.defineProperty(ao, "passive", {
//             get: function() {
//                 Hl = !0
//             }
//         }),
//         window.addEventListener("test", ao, ao),
//         window.removeEventListener("test", ao, ao)
//     } catch {
//         Hl = !1
//     }
// function T0(e, t, n, r, o, i, a, s, l) {
//     var u = Array.prototype.slice.call(arguments, 3);
//     try {
//         t.apply(n, u)
//     } catch (c) {
//         this.onError(c)
//     }
// }
// var Po = !1
//   , wa = null
//   , xa = !1
//   , Wl = null
//   , _0 = {
//     onError: function(e) {
//         Po = !0,
//         wa = e
//     }
// };
// function j0(e, t, n, r, o, i, a, s, l) {
//     Po = !1,
//     wa = null,
//     T0.apply(_0, arguments)
// }
// function L0(e, t, n, r, o, i, a, s, l) {
//     if (j0.apply(this, arguments),
//     Po) {
//         if (Po) {
//             var u = wa;
//             Po = !1,
//             wa = null
//         } else
//             throw Error(R(198));
//         xa || (xa = !0,
//         Wl = u)
//     }
// }
// function dr(e) {
//     var t = e
//       , n = e;
//     if (e.alternate)
//         for (; t.return; )
//             t = t.return;
//     else {
//         e = t;
//         do
//             t = e,
//             t.flags & 4098 && (n = t.return),
//             e = t.return;
//         while (e)
//     }
//     return t.tag === 3 ? n : null
// }
// function om(e) {
//     if (e.tag === 13) {
//         var t = e.memoizedState;
//         if (t === null && (e = e.alternate,
//         e !== null && (t = e.memoizedState)),
//         t !== null)
//             return t.dehydrated
//     }
//     return null
// }
// function Gf(e) {
//     if (dr(e) !== e)
//         throw Error(R(188))
// }
// function R0(e) {
//     var t = e.alternate;
//     if (!t) {
//         if (t = dr(e),
//         t === null)
//             throw Error(R(188));
//         return t !== e ? null : e
//     }
//     for (var n = e, r = t; ; ) {
//         var o = n.return;
//         if (o === null)
//             break;
//         var i = o.alternate;
//         if (i === null) {
//             if (r = o.return,
//             r !== null) {
//                 n = r;
//                 continue
//             }
//             break
//         }
//         if (o.child === i.child) {
//             for (i = o.child; i; ) {
//                 if (i === n)
//                     return Gf(o),
//                     e;
//                 if (i === r)
//                     return Gf(o),
//                     t;
//                 i = i.sibling
//             }
//             throw Error(R(188))
//         }
//         if (n.return !== r.return)
//             n = o,
//             r = i;
//         else {
//             for (var a = !1, s = o.child; s; ) {
//                 if (s === n) {
//                     a = !0,
//                     n = o,
//                     r = i;
//                     break
//                 }
//                 if (s === r) {
//                     a = !0,
//                     r = o,
//                     n = i;
//                     break
//                 }
//                 s = s.sibling
//             }
//             if (!a) {
//                 for (s = i.child; s; ) {
//                     if (s === n) {
//                         a = !0,
//                         n = i,
//                         r = o;
//                         break
//                     }
//                     if (s === r) {
//                         a = !0,
//                         r = i,
//                         n = o;
//                         break
//                     }
//                     s = s.sibling
//                 }
//                 if (!a)
//                     throw Error(R(189))
//             }
//         }
//         if (n.alternate !== r)
//             throw Error(R(190))
//     }
//     if (n.tag !== 3)
//         throw Error(R(188));
//     return n.stateNode.current === n ? e : t
// }
// function im(e) {
//     return e = R0(e),
//     e !== null ? am(e) : null
// }
// function am(e) {
//     if (e.tag === 5 || e.tag === 6)
//         return e;
//     for (e = e.child; e !== null; ) {
//         var t = am(e);
//         if (t !== null)
//             return t;
//         e = e.sibling
//     }
//     return null
// }
// var sm = it.unstable_scheduleCallback
//   , Yf = it.unstable_cancelCallback
//   , A0 = it.unstable_shouldYield
//   , M0 = it.unstable_requestPaint
//   , Oe = it.unstable_now
//   , I0 = it.unstable_getCurrentPriorityLevel
//   , vc = it.unstable_ImmediatePriority
//   , lm = it.unstable_UserBlockingPriority
//   , ba = it.unstable_NormalPriority
//   , D0 = it.unstable_LowPriority
//   , um = it.unstable_IdlePriority
//   , rs = null
//   , At = null;
// function $0(e) {
//     if (At && typeof At.onCommitFiberRoot == "function")
//         try {
//             At.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128)
//         } catch {}
// }
// var bt = Math.clz32 ? Math.clz32 : B0
//   , z0 = Math.log
//   , F0 = Math.LN2;
// function B0(e) {
//     return e >>>= 0,
//     e === 0 ? 32 : 31 - (z0(e) / F0 | 0) | 0
// }
// var Li = 64
//   , Ri = 4194304;
// function bo(e) {
//     switch (e & -e) {
//     case 1:
//         return 1;
//     case 2:
//         return 2;
//     case 4:
//         return 4;
//     case 8:
//         return 8;
//     case 16:
//         return 16;
//     case 32:
//         return 32;
//     case 64:
//     case 128:
//     case 256:
//     case 512:
//     case 1024:
//     case 2048:
//     case 4096:
//     case 8192:
//     case 16384:
//     case 32768:
//     case 65536:
//     case 131072:
//     case 262144:
//     case 524288:
//     case 1048576:
//     case 2097152:
//         return e & 4194240;
//     case 4194304:
//     case 8388608:
//     case 16777216:
//     case 33554432:
//     case 67108864:
//         return e & 130023424;
//     case 134217728:
//         return 134217728;
//     case 268435456:
//         return 268435456;
//     case 536870912:
//         return 536870912;
//     case 1073741824:
//         return 1073741824;
//     default:
//         return e
//     }
// }
// function Sa(e, t) {
//     var n = e.pendingLanes;
//     if (n === 0)
//         return 0;
//     var r = 0
//       , o = e.suspendedLanes
//       , i = e.pingedLanes
//       , a = n & 268435455;
//     if (a !== 0) {
//         var s = a & ~o;
//         s !== 0 ? r = bo(s) : (i &= a,
//         i !== 0 && (r = bo(i)))
//     } else
//         a = n & ~o,
//         a !== 0 ? r = bo(a) : i !== 0 && (r = bo(i));
//     if (r === 0)
//         return 0;
//     if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
//     i = t & -t,
//     o >= i || o === 16 && (i & 4194240) !== 0))
//         return t;
//     if (r & 4 && (r |= n & 16),
//     t = e.entangledLanes,
//     t !== 0)
//         for (e = e.entanglements,
//         t &= r; 0 < t; )
//             n = 31 - bt(t),
//             o = 1 << n,
//             r |= e[n],
//             t &= ~o;
//     return r
// }
// function U0(e, t) {
//     switch (e) {
//     case 1:
//     case 2:
//     case 4:
//         return t + 250;
//     case 8:
//     case 16:
//     case 32:
//     case 64:
//     case 128:
//     case 256:
//     case 512:
//     case 1024:
//     case 2048:
//     case 4096:
//     case 8192:
//     case 16384:
//     case 32768:
//     case 65536:
//     case 131072:
//     case 262144:
//     case 524288:
//     case 1048576:
//     case 2097152:
//         return t + 5e3;
//     case 4194304:
//     case 8388608:
//     case 16777216:
//     case 33554432:
//     case 67108864:
//         return -1;
//     case 134217728:
//     case 268435456:
//     case 536870912:
//     case 1073741824:
//         return -1;
//     default:
//         return -1
//     }
// }
// function H0(e, t) {
//     for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
//         var a = 31 - bt(i)
//           , s = 1 << a
//           , l = o[a];
//         l === -1 ? (!(s & n) || s & r) && (o[a] = U0(s, t)) : l <= t && (e.expiredLanes |= s),
//         i &= ~s
//     }
// }
// function Vl(e) {
//     return e = e.pendingLanes & -1073741825,
//     e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
// }
// function cm() {
//     var e = Li;
//     return Li <<= 1,
//     !(Li & 4194240) && (Li = 64),
//     e
// }
// function Hs(e) {
//     for (var t = [], n = 0; 31 > n; n++)
//         t.push(e);
//     return t
// }
// function ci(e, t, n) {
//     e.pendingLanes |= t,
//     t !== 536870912 && (e.suspendedLanes = 0,
//     e.pingedLanes = 0),
//     e = e.eventTimes,
//     t = 31 - bt(t),
//     e[t] = n
// }
// function W0(e, t) {
//     var n = e.pendingLanes & ~t;
//     e.pendingLanes = t,
//     e.suspendedLanes = 0,
//     e.pingedLanes = 0,
//     e.expiredLanes &= t,
//     e.mutableReadLanes &= t,
//     e.entangledLanes &= t,
//     t = e.entanglements;
//     var r = e.eventTimes;
//     for (e = e.expirationTimes; 0 < n; ) {
//         var o = 31 - bt(n)
//           , i = 1 << o;
//         t[o] = 0,
//         r[o] = -1,
//         e[o] = -1,
//         n &= ~i
//     }
// }
// function yc(e, t) {
//     var n = e.entangledLanes |= t;
//     for (e = e.entanglements; n; ) {
//         var r = 31 - bt(n)
//           , o = 1 << r;
//         o & t | e[r] & t && (e[r] |= t),
//         n &= ~o
//     }
// }
// var oe = 0;
// function fm(e) {
//     return e &= -e,
//     1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
// }
// var dm, wc, pm, hm, mm, Kl = !1, Ai = [], Sn = null, kn = null, Cn = null, Uo = new Map, Ho = new Map, gn = [], V0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
// function Xf(e, t) {
//     switch (e) {
//     case "focusin":
//     case "focusout":
//         Sn = null;
//         break;
//     case "dragenter":
//     case "dragleave":
//         kn = null;
//         break;
//     case "mouseover":
//     case "mouseout":
//         Cn = null;
//         break;
//     case "pointerover":
//     case "pointerout":
//         Uo.delete(t.pointerId);
//         break;
//     case "gotpointercapture":
//     case "lostpointercapture":
//         Ho.delete(t.pointerId)
//     }
// }
// function so(e, t, n, r, o, i) {
//     return e === null || e.nativeEvent !== i ? (e = {
//         blockedOn: t,
//         domEventName: n,
//         eventSystemFlags: r,
//         nativeEvent: i,
//         targetContainers: [o]
//     },
//     t !== null && (t = di(t),
//     t !== null && wc(t)),
//     e) : (e.eventSystemFlags |= r,
//     t = e.targetContainers,
//     o !== null && t.indexOf(o) === -1 && t.push(o),
//     e)
// }
// function K0(e, t, n, r, o) {
//     switch (t) {
//     case "focusin":
//         return Sn = so(Sn, e, t, n, r, o),
//         !0;
//     case "dragenter":
//         return kn = so(kn, e, t, n, r, o),
//         !0;
//     case "mouseover":
//         return Cn = so(Cn, e, t, n, r, o),
//         !0;
//     case "pointerover":
//         var i = o.pointerId;
//         return Uo.set(i, so(Uo.get(i) || null, e, t, n, r, o)),
//         !0;
//     case "gotpointercapture":
//         return i = o.pointerId,
//         Ho.set(i, so(Ho.get(i) || null, e, t, n, r, o)),
//         !0
//     }
//     return !1
// }
// function gm(e) {
//     var t = Gn(e.target);
//     if (t !== null) {
//         var n = dr(t);
//         if (n !== null) {
//             if (t = n.tag,
//             t === 13) {
//                 if (t = om(n),
//                 t !== null) {
//                     e.blockedOn = t,
//                     mm(e.priority, function() {
//                         pm(n)
//                     });
//                     return
//                 }
//             } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
//                 e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
//                 return
//             }
//         }
//     }
//     e.blockedOn = null
// }
// function ia(e) {
//     if (e.blockedOn !== null)
//         return !1;
//     for (var t = e.targetContainers; 0 < t.length; ) {
//         var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
//         if (n === null) {
//             n = e.nativeEvent;
//             var r = new n.constructor(n.type,n);
//             Bl = r,
//             n.target.dispatchEvent(r),
//             Bl = null
//         } else
//             return t = di(n),
//             t !== null && wc(t),
//             e.blockedOn = n,
//             !1;
//         t.shift()
//     }
//     return !0
// }
// function qf(e, t, n) {
//     ia(e) && n.delete(t)
// }
// function G0() {
//     Kl = !1,
//     Sn !== null && ia(Sn) && (Sn = null),
//     kn !== null && ia(kn) && (kn = null),
//     Cn !== null && ia(Cn) && (Cn = null),
//     Uo.forEach(qf),
//     Ho.forEach(qf)
// }
// function lo(e, t) {
//     e.blockedOn === t && (e.blockedOn = null,
//     Kl || (Kl = !0,
//     it.unstable_scheduleCallback(it.unstable_NormalPriority, G0)))
// }
// function Wo(e) {
//     function t(o) {
//         return lo(o, e)
//     }
//     if (0 < Ai.length) {
//         lo(Ai[0], e);
//         for (var n = 1; n < Ai.length; n++) {
//             var r = Ai[n];
//             r.blockedOn === e && (r.blockedOn = null)
//         }
//     }
//     for (Sn !== null && lo(Sn, e),
//     kn !== null && lo(kn, e),
//     Cn !== null && lo(Cn, e),
//     Uo.forEach(t),
//     Ho.forEach(t),
//     n = 0; n < gn.length; n++)
//         r = gn[n],
//         r.blockedOn === e && (r.blockedOn = null);
//     for (; 0 < gn.length && (n = gn[0],
//     n.blockedOn === null); )
//         gm(n),
//         n.blockedOn === null && gn.shift()
// }
// var $r = nn.ReactCurrentBatchConfig
//   , ka = !0;
// function Y0(e, t, n, r) {
//     var o = oe
//       , i = $r.transition;
//     $r.transition = null;
//     try {
//         oe = 1,
//         xc(e, t, n, r)
//     } finally {
//         oe = o,
//         $r.transition = i
//     }
// }
// function X0(e, t, n, r) {
//     var o = oe
//       , i = $r.transition;
//     $r.transition = null;
//     try {
//         oe = 4,
//         xc(e, t, n, r)
//     } finally {
//         oe = o,
//         $r.transition = i
//     }
// }
// function xc(e, t, n, r) {
//     if (ka) {
//         var o = Gl(e, t, n, r);
//         if (o === null)
//             Zs(e, t, r, Ca, n),
//             Xf(e, r);
//         else if (K0(o, e, t, n, r))
//             r.stopPropagation();
//         else if (Xf(e, r),
//         t & 4 && -1 < V0.indexOf(e)) {
//             for (; o !== null; ) {
//                 var i = di(o);
//                 if (i !== null && dm(i),
//                 i = Gl(e, t, n, r),
//                 i === null && Zs(e, t, r, Ca, n),
//                 i === o)
//                     break;
//                 o = i
//             }
//             o !== null && r.stopPropagation()
//         } else
//             Zs(e, t, r, null, n)
//     }
// }
// var Ca = null;
// function Gl(e, t, n, r) {
//     if (Ca = null,
//     e = gc(r),
//     e = Gn(e),
//     e !== null)
//         if (t = dr(e),
//         t === null)
//             e = null;
//         else if (n = t.tag,
//         n === 13) {
//             if (e = om(t),
//             e !== null)
//                 return e;
//             e = null
//         } else if (n === 3) {
//             if (t.stateNode.current.memoizedState.isDehydrated)
//                 return t.tag === 3 ? t.stateNode.containerInfo : null;
//             e = null
//         } else
//             t !== e && (e = null);
//     return Ca = e,
//     null
// }
// function vm(e) {
//     switch (e) {
//     case "cancel":
//     case "click":
//     case "close":
//     case "contextmenu":
//     case "copy":
//     case "cut":
//     case "auxclick":
//     case "dblclick":
//     case "dragend":
//     case "dragstart":
//     case "drop":
//     case "focusin":
//     case "focusout":
//     case "input":
//     case "invalid":
//     case "keydown":
//     case "keypress":
//     case "keyup":
//     case "mousedown":
//     case "mouseup":
//     case "paste":
//     case "pause":
//     case "play":
//     case "pointercancel":
//     case "pointerdown":
//     case "pointerup":
//     case "ratechange":
//     case "reset":
//     case "resize":
//     case "seeked":
//     case "submit":
//     case "touchcancel":
//     case "touchend":
//     case "touchstart":
//     case "volumechange":
//     case "change":
//     case "selectionchange":
//     case "textInput":
//     case "compositionstart":
//     case "compositionend":
//     case "compositionupdate":
//     case "beforeblur":
//     case "afterblur":
//     case "beforeinput":
//     case "blur":
//     case "fullscreenchange":
//     case "focus":
//     case "hashchange":
//     case "popstate":
//     case "select":
//     case "selectstart":
//         return 1;
//     case "drag":
//     case "dragenter":
//     case "dragexit":
//     case "dragleave":
//     case "dragover":
//     case "mousemove":
//     case "mouseout":
//     case "mouseover":
//     case "pointermove":
//     case "pointerout":
//     case "pointerover":
//     case "scroll":
//     case "toggle":
//     case "touchmove":
//     case "wheel":
//     case "mouseenter":
//     case "mouseleave":
//     case "pointerenter":
//     case "pointerleave":
//         return 4;
//     case "message":
//         switch (I0()) {
//         case vc:
//             return 1;
//         case lm:
//             return 4;
//         case ba:
//         case D0:
//             return 16;
//         case um:
//             return 536870912;
//         default:
//             return 16
//         }
//     default:
//         return 16
//     }
// }
// var yn = null
//   , bc = null
//   , aa = null;
// function ym() {
//     if (aa)
//         return aa;
//     var e, t = bc, n = t.length, r, o = "value"in yn ? yn.value : yn.textContent, i = o.length;
//     for (e = 0; e < n && t[e] === o[e]; e++)
//         ;
//     var a = n - e;
//     for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
//         ;
//     return aa = o.slice(e, 1 < r ? 1 - r : void 0)
// }
// function sa(e) {
//     var t = e.keyCode;
//     return "charCode"in e ? (e = e.charCode,
//     e === 0 && t === 13 && (e = 13)) : e = t,
//     e === 10 && (e = 13),
//     32 <= e || e === 13 ? e : 0
// }
// function Mi() {
//     return !0
// }
// function Qf() {
//     return !1
// }
// function st(e) {
//     function t(n, r, o, i, a) {
//         this._reactName = n,
//         this._targetInst = o,
//         this.type = r,
//         this.nativeEvent = i,
//         this.target = a,
//         this.currentTarget = null;
//         for (var s in e)
//             e.hasOwnProperty(s) && (n = e[s],
//             this[s] = n ? n(i) : i[s]);
//         return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Mi : Qf,
//         this.isPropagationStopped = Qf,
//         this
//     }
//     return Se(t.prototype, {
//         preventDefault: function() {
//             this.defaultPrevented = !0;
//             var n = this.nativeEvent;
//             n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
//             this.isDefaultPrevented = Mi)
//         },
//         stopPropagation: function() {
//             var n = this.nativeEvent;
//             n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
//             this.isPropagationStopped = Mi)
//         },
//         persist: function() {},
//         isPersistent: Mi
//     }),
//     t
// }
// var Jr = {
//     eventPhase: 0,
//     bubbles: 0,
//     cancelable: 0,
//     timeStamp: function(e) {
//         return e.timeStamp || Date.now()
//     },
//     defaultPrevented: 0,
//     isTrusted: 0
// }, Sc = st(Jr), fi = Se({}, Jr, {
//     view: 0,
//     detail: 0
// }), q0 = st(fi), Ws, Vs, uo, os = Se({}, fi, {
//     screenX: 0,
//     screenY: 0,
//     clientX: 0,
//     clientY: 0,
//     pageX: 0,
//     pageY: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     altKey: 0,
//     metaKey: 0,
//     getModifierState: kc,
//     button: 0,
//     buttons: 0,
//     relatedTarget: function(e) {
//         return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
//     },
//     movementX: function(e) {
//         return "movementX"in e ? e.movementX : (e !== uo && (uo && e.type === "mousemove" ? (Ws = e.screenX - uo.screenX,
//         Vs = e.screenY - uo.screenY) : Vs = Ws = 0,
//         uo = e),
//         Ws)
//     },
//     movementY: function(e) {
//         return "movementY"in e ? e.movementY : Vs
//     }
// }), Jf = st(os), Q0 = Se({}, os, {
//     dataTransfer: 0
// }), J0 = st(Q0), Z0 = Se({}, fi, {
//     relatedTarget: 0
// }), Ks = st(Z0), ey = Se({}, Jr, {
//     animationName: 0,
//     elapsedTime: 0,
//     pseudoElement: 0
// }), ty = st(ey), ny = Se({}, Jr, {
//     clipboardData: function(e) {
//         return "clipboardData"in e ? e.clipboardData : window.clipboardData
//     }
// }), ry = st(ny), oy = Se({}, Jr, {
//     data: 0
// }), Zf = st(oy), iy = {
//     Esc: "Escape",
//     Spacebar: " ",
//     Left: "ArrowLeft",
//     Up: "ArrowUp",
//     Right: "ArrowRight",
//     Down: "ArrowDown",
//     Del: "Delete",
//     Win: "OS",
//     Menu: "ContextMenu",
//     Apps: "ContextMenu",
//     Scroll: "ScrollLock",
//     MozPrintableKey: "Unidentified"
// }, ay = {
//     8: "Backspace",
//     9: "Tab",
//     12: "Clear",
//     13: "Enter",
//     16: "Shift",
//     17: "Control",
//     18: "Alt",
//     19: "Pause",
//     20: "CapsLock",
//     27: "Escape",
//     32: " ",
//     33: "PageUp",
//     34: "PageDown",
//     35: "End",
//     36: "Home",
//     37: "ArrowLeft",
//     38: "ArrowUp",
//     39: "ArrowRight",
//     40: "ArrowDown",
//     45: "Insert",
//     46: "Delete",
//     112: "F1",
//     113: "F2",
//     114: "F3",
//     115: "F4",
//     116: "F5",
//     117: "F6",
//     118: "F7",
//     119: "F8",
//     120: "F9",
//     121: "F10",
//     122: "F11",
//     123: "F12",
//     144: "NumLock",
//     145: "ScrollLock",
//     224: "Meta"
// }, sy = {
//     Alt: "altKey",
//     Control: "ctrlKey",
//     Meta: "metaKey",
//     Shift: "shiftKey"
// };
// function ly(e) {
//     var t = this.nativeEvent;
//     return t.getModifierState ? t.getModifierState(e) : (e = sy[e]) ? !!t[e] : !1
// }
// function kc() {
//     return ly
// }
// var uy = Se({}, fi, {
//     key: function(e) {
//         if (e.key) {
//             var t = iy[e.key] || e.key;
//             if (t !== "Unidentified")
//                 return t
//         }
//         return e.type === "keypress" ? (e = sa(e),
//         e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ay[e.keyCode] || "Unidentified" : ""
//     },
//     code: 0,
//     location: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     altKey: 0,
//     metaKey: 0,
//     repeat: 0,
//     locale: 0,
//     getModifierState: kc,
//     charCode: function(e) {
//         return e.type === "keypress" ? sa(e) : 0
//     },
//     keyCode: function(e) {
//         return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
//     },
//     which: function(e) {
//         return e.type === "keypress" ? sa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
//     }
// })
//   , cy = st(uy)
//   , fy = Se({}, os, {
//     pointerId: 0,
//     width: 0,
//     height: 0,
//     pressure: 0,
//     tangentialPressure: 0,
//     tiltX: 0,
//     tiltY: 0,
//     twist: 0,
//     pointerType: 0,
//     isPrimary: 0
// })
//   , ed = st(fy)
//   , dy = Se({}, fi, {
//     touches: 0,
//     targetTouches: 0,
//     changedTouches: 0,
//     altKey: 0,
//     metaKey: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     getModifierState: kc
// })
//   , py = st(dy)
//   , hy = Se({}, Jr, {
//     propertyName: 0,
//     elapsedTime: 0,
//     pseudoElement: 0
// })
//   , my = st(hy)
//   , gy = Se({}, os, {
//     deltaX: function(e) {
//         return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
//     },
//     deltaY: function(e) {
//         return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
//     },
//     deltaZ: 0,
//     deltaMode: 0
// })
//   , vy = st(gy)
//   , yy = [9, 13, 27, 32]
//   , Cc = Gt && "CompositionEvent"in window
//   , To = null;
// Gt && "documentMode"in document && (To = document.documentMode);
// var wy = Gt && "TextEvent"in window && !To
//   , wm = Gt && (!Cc || To && 8 < To && 11 >= To)
//   , td = " "
//   , nd = !1;
// function xm(e, t) {
//     switch (e) {
//     case "keyup":
//         return yy.indexOf(t.keyCode) !== -1;
//     case "keydown":
//         return t.keyCode !== 229;
//     case "keypress":
//     case "mousedown":
//     case "focusout":
//         return !0;
//     default:
//         return !1
//     }
// }
// function bm(e) {
//     return e = e.detail,
//     typeof e == "object" && "data"in e ? e.data : null
// }
// var Sr = !1;
// function xy(e, t) {
//     switch (e) {
//     case "compositionend":
//         return bm(t);
//     case "keypress":
//         return t.which !== 32 ? null : (nd = !0,
//         td);
//     case "textInput":
//         return e = t.data,
//         e === td && nd ? null : e;
//     default:
//         return null
//     }
// }
// function by(e, t) {
//     if (Sr)
//         return e === "compositionend" || !Cc && xm(e, t) ? (e = ym(),
//         aa = bc = yn = null,
//         Sr = !1,
//         e) : null;
//     switch (e) {
//     case "paste":
//         return null;
//     case "keypress":
//         if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
//             if (t.char && 1 < t.char.length)
//                 return t.char;
//             if (t.which)
//                 return String.fromCharCode(t.which)
//         }
//         return null;
//     case "compositionend":
//         return wm && t.locale !== "ko" ? null : t.data;
//     default:
//         return null
//     }
// }
// var Sy = {
//     color: !0,
//     date: !0,
//     datetime: !0,
//     "datetime-local": !0,
//     email: !0,
//     month: !0,
//     number: !0,
//     password: !0,
//     range: !0,
//     search: !0,
//     tel: !0,
//     text: !0,
//     time: !0,
//     url: !0,
//     week: !0
// };
// function rd(e) {
//     var t = e && e.nodeName && e.nodeName.toLowerCase();
//     return t === "input" ? !!Sy[e.type] : t === "textarea"
// }
// function Sm(e, t, n, r) {
//     Zh(r),
//     t = Ea(t, "onChange"),
//     0 < t.length && (n = new Sc("onChange","change",null,n,r),
//     e.push({
//         event: n,
//         listeners: t
//     }))
// }
// var _o = null
//   , Vo = null;
// function ky(e) {
//     Rm(e, 0)
// }
// function is(e) {
//     var t = Er(e);
//     if (Kh(t))
//         return e
// }
// function Cy(e, t) {
//     if (e === "change")
//         return t
// }
// var km = !1;
// if (Gt) {
//     var Gs;
//     if (Gt) {
//         var Ys = "oninput"in document;
//         if (!Ys) {
//             var od = document.createElement("div");
//             od.setAttribute("oninput", "return;"),
//             Ys = typeof od.oninput == "function"
//         }
//         Gs = Ys
//     } else
//         Gs = !1;
//     km = Gs && (!document.documentMode || 9 < document.documentMode)
// }
// function id() {
//     _o && (_o.detachEvent("onpropertychange", Cm),
//     Vo = _o = null)
// }
// function Cm(e) {
//     if (e.propertyName === "value" && is(Vo)) {
//         var t = [];
//         Sm(t, Vo, e, gc(e)),
//         rm(ky, t)
//     }
// }
// function Ey(e, t, n) {
//     e === "focusin" ? (id(),
//     _o = t,
//     Vo = n,
//     _o.attachEvent("onpropertychange", Cm)) : e === "focusout" && id()
// }
// function Oy(e) {
//     if (e === "selectionchange" || e === "keyup" || e === "keydown")
//         return is(Vo)
// }
// function Ny(e, t) {
//     if (e === "click")
//         return is(t)
// }
// function Py(e, t) {
//     if (e === "input" || e === "change")
//         return is(t)
// }
// function Ty(e, t) {
//     return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
// }
// var kt = typeof Object.is == "function" ? Object.is : Ty;
// function Ko(e, t) {
//     if (kt(e, t))
//         return !0;
//     if (typeof e != "object" || e === null || typeof t != "object" || t === null)
//         return !1;
//     var n = Object.keys(e)
//       , r = Object.keys(t);
//     if (n.length !== r.length)
//         return !1;
//     for (r = 0; r < n.length; r++) {
//         var o = n[r];
//         if (!Tl.call(t, o) || !kt(e[o], t[o]))
//             return !1
//     }
//     return !0
// }
// function ad(e) {
//     for (; e && e.firstChild; )
//         e = e.firstChild;
//     return e
// }
// function sd(e, t) {
//     var n = ad(e);
//     e = 0;
//     for (var r; n; ) {
//         if (n.nodeType === 3) {
//             if (r = e + n.textContent.length,
//             e <= t && r >= t)
//                 return {
//                     node: n,
//                     offset: t - e
//                 };
//             e = r
//         }
//         e: {
//             for (; n; ) {
//                 if (n.nextSibling) {
//                     n = n.nextSibling;
//                     break e
//                 }
//                 n = n.parentNode
//             }
//             n = void 0
//         }
//         n = ad(n)
//     }
// }
// function Em(e, t) {
//     return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Em(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
// }
// function Om() {
//     for (var e = window, t = ya(); t instanceof e.HTMLIFrameElement; ) {
//         try {
//             var n = typeof t.contentWindow.location.href == "string"
//         } catch {
//             n = !1
//         }
//         if (n)
//             e = t.contentWindow;
//         else
//             break;
//         t = ya(e.document)
//     }
//     return t
// }
// function Ec(e) {
//     var t = e && e.nodeName && e.nodeName.toLowerCase();
//     return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
// }
// function _y(e) {
//     var t = Om()
//       , n = e.focusedElem
//       , r = e.selectionRange;
//     if (t !== n && n && n.ownerDocument && Em(n.ownerDocument.documentElement, n)) {
//         if (r !== null && Ec(n)) {
//             if (t = r.start,
//             e = r.end,
//             e === void 0 && (e = t),
//             "selectionStart"in n)
//                 n.selectionStart = t,
//                 n.selectionEnd = Math.min(e, n.value.length);
//             else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
//             e.getSelection) {
//                 e = e.getSelection();
//                 var o = n.textContent.length
//                   , i = Math.min(r.start, o);
//                 r = r.end === void 0 ? i : Math.min(r.end, o),
//                 !e.extend && i > r && (o = r,
//                 r = i,
//                 i = o),
//                 o = sd(n, i);
//                 var a = sd(n, r);
//                 o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
//                 t.setStart(o.node, o.offset),
//                 e.removeAllRanges(),
//                 i > r ? (e.addRange(t),
//                 e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
//                 e.addRange(t)))
//             }
//         }
//         for (t = [],
//         e = n; e = e.parentNode; )
//             e.nodeType === 1 && t.push({
//                 element: e,
//                 left: e.scrollLeft,
//                 top: e.scrollTop
//             });
//         for (typeof n.focus == "function" && n.focus(),
//         n = 0; n < t.length; n++)
//             e = t[n],
//             e.element.scrollLeft = e.left,
//             e.element.scrollTop = e.top
//     }
// }
// var jy = Gt && "documentMode"in document && 11 >= document.documentMode
//   , kr = null
//   , Yl = null
//   , jo = null
//   , Xl = !1;
// function ld(e, t, n) {
//     var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
//     Xl || kr == null || kr !== ya(r) || (r = kr,
//     "selectionStart"in r && Ec(r) ? r = {
//         start: r.selectionStart,
//         end: r.selectionEnd
//     } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
//     r = {
//         anchorNode: r.anchorNode,
//         anchorOffset: r.anchorOffset,
//         focusNode: r.focusNode,
//         focusOffset: r.focusOffset
//     }),
//     jo && Ko(jo, r) || (jo = r,
//     r = Ea(Yl, "onSelect"),
//     0 < r.length && (t = new Sc("onSelect","select",null,t,n),
//     e.push({
//         event: t,
//         listeners: r
//     }),
//     t.target = kr)))
// }
// function Ii(e, t) {
//     var n = {};
//     return n[e.toLowerCase()] = t.toLowerCase(),
//     n["Webkit" + e] = "webkit" + t,
//     n["Moz" + e] = "moz" + t,
//     n
// }
// var Cr = {
//     animationend: Ii("Animation", "AnimationEnd"),
//     animationiteration: Ii("Animation", "AnimationIteration"),
//     animationstart: Ii("Animation", "AnimationStart"),
//     transitionend: Ii("Transition", "TransitionEnd")
// }
//   , Xs = {}
//   , Nm = {};
// Gt && (Nm = document.createElement("div").style,
// "AnimationEvent"in window || (delete Cr.animationend.animation,
// delete Cr.animationiteration.animation,
// delete Cr.animationstart.animation),
// "TransitionEvent"in window || delete Cr.transitionend.transition);
// function as(e) {
//     if (Xs[e])
//         return Xs[e];
//     if (!Cr[e])
//         return e;
//     var t = Cr[e], n;
//     for (n in t)
//         if (t.hasOwnProperty(n) && n in Nm)
//             return Xs[e] = t[n];
//     return e
// }
// var Pm = as("animationend")
//   , Tm = as("animationiteration")
//   , _m = as("animationstart")
//   , jm = as("transitionend")
//   , Lm = new Map
//   , ud = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
// function In(e, t) {
//     Lm.set(e, t),
//     fr(t, [e])
// }
// for (var qs = 0; qs < ud.length; qs++) {
//     var Qs = ud[qs]
//       , Ly = Qs.toLowerCase()
//       , Ry = Qs[0].toUpperCase() + Qs.slice(1);
//     In(Ly, "on" + Ry)
// }
// In(Pm, "onAnimationEnd");
// In(Tm, "onAnimationIteration");
// In(_m, "onAnimationStart");
// In("dblclick", "onDoubleClick");
// In("focusin", "onFocus");
// In("focusout", "onBlur");
// In(jm, "onTransitionEnd");
// Ur("onMouseEnter", ["mouseout", "mouseover"]);
// Ur("onMouseLeave", ["mouseout", "mouseover"]);
// Ur("onPointerEnter", ["pointerout", "pointerover"]);
// Ur("onPointerLeave", ["pointerout", "pointerover"]);
// fr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
// fr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
// fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
// fr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
// fr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
// fr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
// var So = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
//   , Ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(So));
// function cd(e, t, n) {
//     var r = e.type || "unknown-event";
//     e.currentTarget = n,
//     L0(r, t, void 0, e),
//     e.currentTarget = null
// }
// function Rm(e, t) {
//     t = (t & 4) !== 0;
//     for (var n = 0; n < e.length; n++) {
//         var r = e[n]
//           , o = r.event;
//         r = r.listeners;
//         e: {
//             var i = void 0;
//             if (t)
//                 for (var a = r.length - 1; 0 <= a; a--) {
//                     var s = r[a]
//                       , l = s.instance
//                       , u = s.currentTarget;
//                     if (s = s.listener,
//                     l !== i && o.isPropagationStopped())
//                         break e;
//                     cd(o, s, u),
//                     i = l
//                 }
//             else
//                 for (a = 0; a < r.length; a++) {
//                     if (s = r[a],
//                     l = s.instance,
//                     u = s.currentTarget,
//                     s = s.listener,
//                     l !== i && o.isPropagationStopped())
//                         break e;
//                     cd(o, s, u),
//                     i = l
//                 }
//         }
//     }
//     if (xa)
//         throw e = Wl,
//         xa = !1,
//         Wl = null,
//         e
// }
// function ce(e, t) {
//     var n = t[eu];
//     n === void 0 && (n = t[eu] = new Set);
//     var r = e + "__bubble";
//     n.has(r) || (Am(t, e, 2, !1),
//     n.add(r))
// }
// function Js(e, t, n) {
//     var r = 0;
//     t && (r |= 4),
//     Am(n, e, r, t)
// }
// var Di = "_reactListening" + Math.random().toString(36).slice(2);
// function Go(e) {
//     if (!e[Di]) {
//         e[Di] = !0,
//         Bh.forEach(function(n) {
//             n !== "selectionchange" && (Ay.has(n) || Js(n, !1, e),
//             Js(n, !0, e))
//         });
//         var t = e.nodeType === 9 ? e : e.ownerDocument;
//         t === null || t[Di] || (t[Di] = !0,
//         Js("selectionchange", !1, t))
//     }
// }
// function Am(e, t, n, r) {
//     switch (vm(t)) {
//     case 1:
//         var o = Y0;
//         break;
//     case 4:
//         o = X0;
//         break;
//     default:
//         o = xc
//     }
//     n = o.bind(null, t, n, e),
//     o = void 0,
//     !Hl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
//     r ? o !== void 0 ? e.addEventListener(t, n, {
//         capture: !0,
//         passive: o
//     }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
//         passive: o
//     }) : e.addEventListener(t, n, !1)
// }
// function Zs(e, t, n, r, o) {
//     var i = r;
//     if (!(t & 1) && !(t & 2) && r !== null)
//         e: for (; ; ) {
//             if (r === null)
//                 return;
//             var a = r.tag;
//             if (a === 3 || a === 4) {
//                 var s = r.stateNode.containerInfo;
//                 if (s === o || s.nodeType === 8 && s.parentNode === o)
//                     break;
//                 if (a === 4)
//                     for (a = r.return; a !== null; ) {
//                         var l = a.tag;
//                         if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
//                         l === o || l.nodeType === 8 && l.parentNode === o))
//                             return;
//                         a = a.return
//                     }
//                 for (; s !== null; ) {
//                     if (a = Gn(s),
//                     a === null)
//                         return;
//                     if (l = a.tag,
//                     l === 5 || l === 6) {
//                         r = i = a;
//                         continue e
//                     }
//                     s = s.parentNode
//                 }
//             }
//             r = r.return
//         }
//     rm(function() {
//         var u = i
//           , c = gc(n)
//           , d = [];
//         e: {
//             var f = Lm.get(e);
//             if (f !== void 0) {
//                 var m = Sc
//                   , v = e;
//                 switch (e) {
//                 case "keypress":
//                     if (sa(n) === 0)
//                         break e;
//                 case "keydown":
//                 case "keyup":
//                     m = cy;
//                     break;
//                 case "focusin":
//                     v = "focus",
//                     m = Ks;
//                     break;
//                 case "focusout":
//                     v = "blur",
//                     m = Ks;
//                     break;
//                 case "beforeblur":
//                 case "afterblur":
//                     m = Ks;
//                     break;
//                 case "click":
//                     if (n.button === 2)
//                         break e;
//                 case "auxclick":
//                 case "dblclick":
//                 case "mousedown":
//                 case "mousemove":
//                 case "mouseup":
//                 case "mouseout":
//                 case "mouseover":
//                 case "contextmenu":
//                     m = Jf;
//                     break;
//                 case "drag":
//                 case "dragend":
//                 case "dragenter":
//                 case "dragexit":
//                 case "dragleave":
//                 case "dragover":
//                 case "dragstart":
//                 case "drop":
//                     m = J0;
//                     break;
//                 case "touchcancel":
//                 case "touchend":
//                 case "touchmove":
//                 case "touchstart":
//                     m = py;
//                     break;
//                 case Pm:
//                 case Tm:
//                 case _m:
//                     m = ty;
//                     break;
//                 case jm:
//                     m = my;
//                     break;
//                 case "scroll":
//                     m = q0;
//                     break;
//                 case "wheel":
//                     m = vy;
//                     break;
//                 case "copy":
//                 case "cut":
//                 case "paste":
//                     m = ry;
//                     break;
//                 case "gotpointercapture":
//                 case "lostpointercapture":
//                 case "pointercancel":
//                 case "pointerdown":
//                 case "pointermove":
//                 case "pointerout":
//                 case "pointerover":
//                 case "pointerup":
//                     m = ed
//                 }
//                 var x = (t & 4) !== 0
//                   , k = !x && e === "scroll"
//                   , h = x ? f !== null ? f + "Capture" : null : f;
//                 x = [];
//                 for (var p = u, w; p !== null; ) {
//                     w = p;
//                     var b = w.stateNode;
//                     if (w.tag === 5 && b !== null && (w = b,
//                     h !== null && (b = Bo(p, h),
//                     b != null && x.push(Yo(p, b, w)))),
//                     k)
//                         break;
//                     p = p.return
//                 }
//                 0 < x.length && (f = new m(f,v,null,n,c),
//                 d.push({
//                     event: f,
//                     listeners: x
//                 }))
//             }
//         }
//         if (!(t & 7)) {
//             e: {
//                 if (f = e === "mouseover" || e === "pointerover",
//                 m = e === "mouseout" || e === "pointerout",
//                 f && n !== Bl && (v = n.relatedTarget || n.fromElement) && (Gn(v) || v[Yt]))
//                     break e;
//                 if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
//                 m ? (v = n.relatedTarget || n.toElement,
//                 m = u,
//                 v = v ? Gn(v) : null,
//                 v !== null && (k = dr(v),
//                 v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null,
//                 v = u),
//                 m !== v)) {
//                     if (x = Jf,
//                     b = "onMouseLeave",
//                     h = "onMouseEnter",
//                     p = "mouse",
//                     (e === "pointerout" || e === "pointerover") && (x = ed,
//                     b = "onPointerLeave",
//                     h = "onPointerEnter",
//                     p = "pointer"),
//                     k = m == null ? f : Er(m),
//                     w = v == null ? f : Er(v),
//                     f = new x(b,p + "leave",m,n,c),
//                     f.target = k,
//                     f.relatedTarget = w,
//                     b = null,
//                     Gn(c) === u && (x = new x(h,p + "enter",v,n,c),
//                     x.target = w,
//                     x.relatedTarget = k,
//                     b = x),
//                     k = b,
//                     m && v)
//                         t: {
//                             for (x = m,
//                             h = v,
//                             p = 0,
//                             w = x; w; w = pr(w))
//                                 p++;
//                             for (w = 0,
//                             b = h; b; b = pr(b))
//                                 w++;
//                             for (; 0 < p - w; )
//                                 x = pr(x),
//                                 p--;
//                             for (; 0 < w - p; )
//                                 h = pr(h),
//                                 w--;
//                             for (; p--; ) {
//                                 if (x === h || h !== null && x === h.alternate)
//                                     break t;
//                                 x = pr(x),
//                                 h = pr(h)
//                             }
//                             x = null
//                         }
//                     else
//                         x = null;
//                     m !== null && fd(d, f, m, x, !1),
//                     v !== null && k !== null && fd(d, k, v, x, !0)
//                 }
//             }
//             e: {
//                 if (f = u ? Er(u) : window,
//                 m = f.nodeName && f.nodeName.toLowerCase(),
//                 m === "select" || m === "input" && f.type === "file")
//                     var O = Cy;
//                 else if (rd(f))
//                     if (km)
//                         O = Py;
//                     else {
//                         O = Oy;
//                         var C = Ey
//                     }
//                 else
//                     (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (O = Ny);
//                 if (O && (O = O(e, u))) {
//                     Sm(d, O, n, c);
//                     break e
//                 }
//                 C && C(e, f, u),
//                 e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Il(f, "number", f.value)
//             }
//             switch (C = u ? Er(u) : window,
//             e) {
//             case "focusin":
//                 (rd(C) || C.contentEditable === "true") && (kr = C,
//                 Yl = u,
//                 jo = null);
//                 break;
//             case "focusout":
//                 jo = Yl = kr = null;
//                 break;
//             case "mousedown":
//                 Xl = !0;
//                 break;
//             case "contextmenu":
//             case "mouseup":
//             case "dragend":
//                 Xl = !1,
//                 ld(d, n, c);
//                 break;
//             case "selectionchange":
//                 if (jy)
//                     break;
//             case "keydown":
//             case "keyup":
//                 ld(d, n, c)
//             }
//             var N;
//             if (Cc)
//                 e: {
//                     switch (e) {
//                     case "compositionstart":
//                         var _ = "onCompositionStart";
//                         break e;
//                     case "compositionend":
//                         _ = "onCompositionEnd";
//                         break e;
//                     case "compositionupdate":
//                         _ = "onCompositionUpdate";
//                         break e
//                     }
//                     _ = void 0
//                 }
//             else
//                 Sr ? xm(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
//             _ && (wm && n.locale !== "ko" && (Sr || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Sr && (N = ym()) : (yn = c,
//             bc = "value"in yn ? yn.value : yn.textContent,
//             Sr = !0)),
//             C = Ea(u, _),
//             0 < C.length && (_ = new Zf(_,e,null,n,c),
//             d.push({
//                 event: _,
//                 listeners: C
//             }),
//             N ? _.data = N : (N = bm(n),
//             N !== null && (_.data = N)))),
//             (N = wy ? xy(e, n) : by(e, n)) && (u = Ea(u, "onBeforeInput"),
//             0 < u.length && (c = new Zf("onBeforeInput","beforeinput",null,n,c),
//             d.push({
//                 event: c,
//                 listeners: u
//             }),
//             c.data = N))
//         }
//         Rm(d, t)
//     })
// }
// function Yo(e, t, n) {
//     return {
//         instance: e,
//         listener: t,
//         currentTarget: n
//     }
// }
// function Ea(e, t) {
//     for (var n = t + "Capture", r = []; e !== null; ) {
//         var o = e
//           , i = o.stateNode;
//         o.tag === 5 && i !== null && (o = i,
//         i = Bo(e, n),
//         i != null && r.unshift(Yo(e, i, o)),
//         i = Bo(e, t),
//         i != null && r.push(Yo(e, i, o))),
//         e = e.return
//     }
//     return r
// }
// function pr(e) {
//     if (e === null)
//         return null;
//     do
//         e = e.return;
//     while (e && e.tag !== 5);
//     return e || null
// }
// function fd(e, t, n, r, o) {
//     for (var i = t._reactName, a = []; n !== null && n !== r; ) {
//         var s = n
//           , l = s.alternate
//           , u = s.stateNode;
//         if (l !== null && l === r)
//             break;
//         s.tag === 5 && u !== null && (s = u,
//         o ? (l = Bo(n, i),
//         l != null && a.unshift(Yo(n, l, s))) : o || (l = Bo(n, i),
//         l != null && a.push(Yo(n, l, s)))),
//         n = n.return
//     }
//     a.length !== 0 && e.push({
//         event: t,
//         listeners: a
//     })
// }
// var My = /\r\n?/g
//   , Iy = /\u0000|\uFFFD/g;
// function dd(e) {
//     return (typeof e == "string" ? e : "" + e).replace(My, `
// `).replace(Iy, "")
// }
// function $i(e, t, n) {
//     if (t = dd(t),
//     dd(e) !== t && n)
//         throw Error(R(425))
// }
// function Oa() {}
// var ql = null
//   , Ql = null;
// function Jl(e, t) {
//     return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
// }
// var Zl = typeof setTimeout == "function" ? setTimeout : void 0
//   , Dy = typeof clearTimeout == "function" ? clearTimeout : void 0
//   , pd = typeof Promise == "function" ? Promise : void 0
//   , $y = typeof queueMicrotask == "function" ? queueMicrotask : typeof pd < "u" ? function(e) {
//     return pd.resolve(null).then(e).catch(zy)
// }
// : Zl;
// function zy(e) {
//     setTimeout(function() {
//         throw e
//     })
// }
// function el(e, t) {
//     var n = t
//       , r = 0;
//     do {
//         var o = n.nextSibling;
//         if (e.removeChild(n),
//         o && o.nodeType === 8)
//             if (n = o.data,
//             n === "/$") {
//                 if (r === 0) {
//                     e.removeChild(o),
//                     Wo(t);
//                     return
//                 }
//                 r--
//             } else
//                 n !== "$" && n !== "$?" && n !== "$!" || r++;
//         n = o
//     } while (n);
//     Wo(t)
// }
// function En(e) {
//     for (; e != null; e = e.nextSibling) {
//         var t = e.nodeType;
//         if (t === 1 || t === 3)
//             break;
//         if (t === 8) {
//             if (t = e.data,
//             t === "$" || t === "$!" || t === "$?")
//                 break;
//             if (t === "/$")
//                 return null
//         }
//     }
//     return e
// }
// function hd(e) {
//     e = e.previousSibling;
//     for (var t = 0; e; ) {
//         if (e.nodeType === 8) {
//             var n = e.data;
//             if (n === "$" || n === "$!" || n === "$?") {
//                 if (t === 0)
//                     return e;
//                 t--
//             } else
//                 n === "/$" && t++
//         }
//         e = e.previousSibling
//     }
//     return null
// }
// var Zr = Math.random().toString(36).slice(2)
//   , Tt = "__reactFiber$" + Zr
//   , Xo = "__reactProps$" + Zr
//   , Yt = "__reactContainer$" + Zr
//   , eu = "__reactEvents$" + Zr
//   , Fy = "__reactListeners$" + Zr
//   , By = "__reactHandles$" + Zr;
// function Gn(e) {
//     var t = e[Tt];
//     if (t)
//         return t;
//     for (var n = e.parentNode; n; ) {
//         if (t = n[Yt] || n[Tt]) {
//             if (n = t.alternate,
//             t.child !== null || n !== null && n.child !== null)
//                 for (e = hd(e); e !== null; ) {
//                     if (n = e[Tt])
//                         return n;
//                     e = hd(e)
//                 }
//             return t
//         }
//         e = n,
//         n = e.parentNode
//     }
//     return null
// }
// function di(e) {
//     return e = e[Tt] || e[Yt],
//     !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
// }
// function Er(e) {
//     if (e.tag === 5 || e.tag === 6)
//         return e.stateNode;
//     throw Error(R(33))
// }
// function ss(e) {
//     return e[Xo] || null
// }
// var tu = []
//   , Or = -1;
// function Dn(e) {
//     return {
//         current: e
//     }
// }
// function de(e) {
//     0 > Or || (e.current = tu[Or],
//     tu[Or] = null,
//     Or--)
// }
// function le(e, t) {
//     Or++,
//     tu[Or] = e.current,
//     e.current = t
// }
// var jn = {}
//   , Fe = Dn(jn)
//   , qe = Dn(!1)
//   , rr = jn;
// function Hr(e, t) {
//     var n = e.type.contextTypes;
//     if (!n)
//         return jn;
//     var r = e.stateNode;
//     if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
//         return r.__reactInternalMemoizedMaskedChildContext;
//     var o = {}, i;
//     for (i in n)
//         o[i] = t[i];
//     return r && (e = e.stateNode,
//     e.__reactInternalMemoizedUnmaskedChildContext = t,
//     e.__reactInternalMemoizedMaskedChildContext = o),
//     o
// }
// function Qe(e) {
//     return e = e.childContextTypes,
//     e != null
// }
// function Na() {
//     de(qe),
//     de(Fe)
// }
// function md(e, t, n) {
//     if (Fe.current !== jn)
//         throw Error(R(168));
//     le(Fe, t),
//     le(qe, n)
// }
// function Mm(e, t, n) {
//     var r = e.stateNode;
//     if (t = t.childContextTypes,
//     typeof r.getChildContext != "function")
//         return n;
//     r = r.getChildContext();
//     for (var o in r)
//         if (!(o in t))
//             throw Error(R(108, E0(e) || "Unknown", o));
//     return Se({}, n, r)
// }
// function Pa(e) {
//     return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn,
//     rr = Fe.current,
//     le(Fe, e),
//     le(qe, qe.current),
//     !0
// }
// function gd(e, t, n) {
//     var r = e.stateNode;
//     if (!r)
//         throw Error(R(169));
//     n ? (e = Mm(e, t, rr),
//     r.__reactInternalMemoizedMergedChildContext = e,
//     de(qe),
//     de(Fe),
//     le(Fe, e)) : de(qe),
//     le(qe, n)
// }
// var Ut = null
//   , ls = !1
//   , tl = !1;
// function Im(e) {
//     Ut === null ? Ut = [e] : Ut.push(e)
// }
// function Uy(e) {
//     ls = !0,
//     Im(e)
// }
// function $n() {
//     if (!tl && Ut !== null) {
//         tl = !0;
//         var e = 0
//           , t = oe;
//         try {
//             var n = Ut;
//             for (oe = 1; e < n.length; e++) {
//                 var r = n[e];
//                 do
//                     r = r(!0);
//                 while (r !== null)
//             }
//             Ut = null,
//             ls = !1
//         } catch (o) {
//             throw Ut !== null && (Ut = Ut.slice(e + 1)),
//             sm(vc, $n),
//             o
//         } finally {
//             oe = t,
//             tl = !1
//         }
//     }
//     return null
// }
// var Nr = []
//   , Pr = 0
//   , Ta = null
//   , _a = 0
//   , ft = []
//   , dt = 0
//   , or = null
//   , Ht = 1
//   , Wt = "";
// function Un(e, t) {
//     Nr[Pr++] = _a,
//     Nr[Pr++] = Ta,
//     Ta = e,
//     _a = t
// }
// function Dm(e, t, n) {
//     ft[dt++] = Ht,
//     ft[dt++] = Wt,
//     ft[dt++] = or,
//     or = e;
//     var r = Ht;
//     e = Wt;
//     var o = 32 - bt(r) - 1;
//     r &= ~(1 << o),
//     n += 1;
//     var i = 32 - bt(t) + o;
//     if (30 < i) {
//         var a = o - o % 5;
//         i = (r & (1 << a) - 1).toString(32),
//         r >>= a,
//         o -= a,
//         Ht = 1 << 32 - bt(t) + o | n << o | r,
//         Wt = i + e
//     } else
//         Ht = 1 << i | n << o | r,
//         Wt = e
// }
// function Oc(e) {
//     e.return !== null && (Un(e, 1),
//     Dm(e, 1, 0))
// }
// function Nc(e) {
//     for (; e === Ta; )
//         Ta = Nr[--Pr],
//         Nr[Pr] = null,
//         _a = Nr[--Pr],
//         Nr[Pr] = null;
//     for (; e === or; )
//         or = ft[--dt],
//         ft[dt] = null,
//         Wt = ft[--dt],
//         ft[dt] = null,
//         Ht = ft[--dt],
//         ft[dt] = null
// }
// var nt = null
//   , tt = null
//   , ge = !1
//   , xt = null;
// function $m(e, t) {
//     var n = pt(5, null, null, 0);
//     n.elementType = "DELETED",
//     n.stateNode = t,
//     n.return = e,
//     t = e.deletions,
//     t === null ? (e.deletions = [n],
//     e.flags |= 16) : t.push(n)
// }
// function vd(e, t) {
//     switch (e.tag) {
//     case 5:
//         var n = e.type;
//         return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
//         t !== null ? (e.stateNode = t,
//         nt = e,
//         tt = En(t.firstChild),
//         !0) : !1;
//     case 6:
//         return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
//         t !== null ? (e.stateNode = t,
//         nt = e,
//         tt = null,
//         !0) : !1;
//     case 13:
//         return t = t.nodeType !== 8 ? null : t,
//         t !== null ? (n = or !== null ? {
//             id: Ht,
//             overflow: Wt
//         } : null,
//         e.memoizedState = {
//             dehydrated: t,
//             treeContext: n,
//             retryLane: 1073741824
//         },
//         n = pt(18, null, null, 0),
//         n.stateNode = t,
//         n.return = e,
//         e.child = n,
//         nt = e,
//         tt = null,
//         !0) : !1;
//     default:
//         return !1
//     }
// }
// function nu(e) {
//     return (e.mode & 1) !== 0 && (e.flags & 128) === 0
// }
// function ru(e) {
//     if (ge) {
//         var t = tt;
//         if (t) {
//             var n = t;
//             if (!vd(e, t)) {
//                 if (nu(e))
//                     throw Error(R(418));
//                 t = En(n.nextSibling);
//                 var r = nt;
//                 t && vd(e, t) ? $m(r, n) : (e.flags = e.flags & -4097 | 2,
//                 ge = !1,
//                 nt = e)
//             }
//         } else {
//             if (nu(e))
//                 throw Error(R(418));
//             e.flags = e.flags & -4097 | 2,
//             ge = !1,
//             nt = e
//         }
//     }
// }
// function yd(e) {
//     for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
//         e = e.return;
//     nt = e
// }
// function zi(e) {
//     if (e !== nt)
//         return !1;
//     if (!ge)
//         return yd(e),
//         ge = !0,
//         !1;
//     var t;
//     if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
//     t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps)),
//     t && (t = tt)) {
//         if (nu(e))
//             throw zm(),
//             Error(R(418));
//         for (; t; )
//             $m(e, t),
//             t = En(t.nextSibling)
//     }
//     if (yd(e),
//     e.tag === 13) {
//         if (e = e.memoizedState,
//         e = e !== null ? e.dehydrated : null,
//         !e)
//             throw Error(R(317));
//         e: {
//             for (e = e.nextSibling,
//             t = 0; e; ) {
//                 if (e.nodeType === 8) {
//                     var n = e.data;
//                     if (n === "/$") {
//                         if (t === 0) {
//                             tt = En(e.nextSibling);
//                             break e
//                         }
//                         t--
//                     } else
//                         n !== "$" && n !== "$!" && n !== "$?" || t++
//                 }
//                 e = e.nextSibling
//             }
//             tt = null
//         }
//     } else
//         tt = nt ? En(e.stateNode.nextSibling) : null;
//     return !0
// }
// function zm() {
//     for (var e = tt; e; )
//         e = En(e.nextSibling)
// }
// function Wr() {
//     tt = nt = null,
//     ge = !1
// }
// function Pc(e) {
//     xt === null ? xt = [e] : xt.push(e)
// }
// var Hy = nn.ReactCurrentBatchConfig;
// function co(e, t, n) {
//     if (e = n.ref,
//     e !== null && typeof e != "function" && typeof e != "object") {
//         if (n._owner) {
//             if (n = n._owner,
//             n) {
//                 if (n.tag !== 1)
//                     throw Error(R(309));
//                 var r = n.stateNode
//             }
//             if (!r)
//                 throw Error(R(147, e));
//             var o = r
//               , i = "" + e;
//             return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
//                 var s = o.refs;
//                 a === null ? delete s[i] : s[i] = a
//             }
//             ,
//             t._stringRef = i,
//             t)
//         }
//         if (typeof e != "string")
//             throw Error(R(284));
//         if (!n._owner)
//             throw Error(R(290, e))
//     }
//     return e
// }
// function Fi(e, t) {
//     throw e = Object.prototype.toString.call(t),
//     Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
// }
// function wd(e) {
//     var t = e._init;
//     return t(e._payload)
// }
// function Fm(e) {
//     function t(h, p) {
//         if (e) {
//             var w = h.deletions;
//             w === null ? (h.deletions = [p],
//             h.flags |= 16) : w.push(p)
//         }
//     }
//     function n(h, p) {
//         if (!e)
//             return null;
//         for (; p !== null; )
//             t(h, p),
//             p = p.sibling;
//         return null
//     }
//     function r(h, p) {
//         for (h = new Map; p !== null; )
//             p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
//             p = p.sibling;
//         return h
//     }
//     function o(h, p) {
//         return h = Tn(h, p),
//         h.index = 0,
//         h.sibling = null,
//         h
//     }
//     function i(h, p, w) {
//         return h.index = w,
//         e ? (w = h.alternate,
//         w !== null ? (w = w.index,
//         w < p ? (h.flags |= 2,
//         p) : w) : (h.flags |= 2,
//         p)) : (h.flags |= 1048576,
//         p)
//     }
//     function a(h) {
//         return e && h.alternate === null && (h.flags |= 2),
//         h
//     }
//     function s(h, p, w, b) {
//         return p === null || p.tag !== 6 ? (p = ll(w, h.mode, b),
//         p.return = h,
//         p) : (p = o(p, w),
//         p.return = h,
//         p)
//     }
//     function l(h, p, w, b) {
//         var O = w.type;
//         return O === br ? c(h, p, w.props.children, b, w.key) : p !== null && (p.elementType === O || typeof O == "object" && O !== null && O.$$typeof === pn && wd(O) === p.type) ? (b = o(p, w.props),
//         b.ref = co(h, p, w),
//         b.return = h,
//         b) : (b = ha(w.type, w.key, w.props, null, h.mode, b),
//         b.ref = co(h, p, w),
//         b.return = h,
//         b)
//     }
//     function u(h, p, w, b) {
//         return p === null || p.tag !== 4 || p.stateNode.containerInfo !== w.containerInfo || p.stateNode.implementation !== w.implementation ? (p = ul(w, h.mode, b),
//         p.return = h,
//         p) : (p = o(p, w.children || []),
//         p.return = h,
//         p)
//     }
//     function c(h, p, w, b, O) {
//         return p === null || p.tag !== 7 ? (p = Jn(w, h.mode, b, O),
//         p.return = h,
//         p) : (p = o(p, w),
//         p.return = h,
//         p)
//     }
//     function d(h, p, w) {
//         if (typeof p == "string" && p !== "" || typeof p == "number")
//             return p = ll("" + p, h.mode, w),
//             p.return = h,
//             p;
//         if (typeof p == "object" && p !== null) {
//             switch (p.$$typeof) {
//             case Ti:
//                 return w = ha(p.type, p.key, p.props, null, h.mode, w),
//                 w.ref = co(h, null, p),
//                 w.return = h,
//                 w;
//             case xr:
//                 return p = ul(p, h.mode, w),
//                 p.return = h,
//                 p;
//             case pn:
//                 var b = p._init;
//                 return d(h, b(p._payload), w)
//             }
//             if (xo(p) || io(p))
//                 return p = Jn(p, h.mode, w, null),
//                 p.return = h,
//                 p;
//             Fi(h, p)
//         }
//         return null
//     }
//     function f(h, p, w, b) {
//         var O = p !== null ? p.key : null;
//         if (typeof w == "string" && w !== "" || typeof w == "number")
//             return O !== null ? null : s(h, p, "" + w, b);
//         if (typeof w == "object" && w !== null) {
//             switch (w.$$typeof) {
//             case Ti:
//                 return w.key === O ? l(h, p, w, b) : null;
//             case xr:
//                 return w.key === O ? u(h, p, w, b) : null;
//             case pn:
//                 return O = w._init,
//                 f(h, p, O(w._payload), b)
//             }
//             if (xo(w) || io(w))
//                 return O !== null ? null : c(h, p, w, b, null);
//             Fi(h, w)
//         }
//         return null
//     }
//     function m(h, p, w, b, O) {
//         if (typeof b == "string" && b !== "" || typeof b == "number")
//             return h = h.get(w) || null,
//             s(p, h, "" + b, O);
//         if (typeof b == "object" && b !== null) {
//             switch (b.$$typeof) {
//             case Ti:
//                 return h = h.get(b.key === null ? w : b.key) || null,
//                 l(p, h, b, O);
//             case xr:
//                 return h = h.get(b.key === null ? w : b.key) || null,
//                 u(p, h, b, O);
//             case pn:
//                 var C = b._init;
//                 return m(h, p, w, C(b._payload), O)
//             }
//             if (xo(b) || io(b))
//                 return h = h.get(w) || null,
//                 c(p, h, b, O, null);
//             Fi(p, b)
//         }
//         return null
//     }
//     function v(h, p, w, b) {
//         for (var O = null, C = null, N = p, _ = p = 0, z = null; N !== null && _ < w.length; _++) {
//             N.index > _ ? (z = N,
//             N = null) : z = N.sibling;
//             var D = f(h, N, w[_], b);
//             if (D === null) {
//                 N === null && (N = z);
//                 break
//             }
//             e && N && D.alternate === null && t(h, N),
//             p = i(D, p, _),
//             C === null ? O = D : C.sibling = D,
//             C = D,
//             N = z
//         }
//         if (_ === w.length)
//             return n(h, N),
//             ge && Un(h, _),
//             O;
//         if (N === null) {
//             for (; _ < w.length; _++)
//                 N = d(h, w[_], b),
//                 N !== null && (p = i(N, p, _),
//                 C === null ? O = N : C.sibling = N,
//                 C = N);
//             return ge && Un(h, _),
//             O
//         }
//         for (N = r(h, N); _ < w.length; _++)
//             z = m(N, h, _, w[_], b),
//             z !== null && (e && z.alternate !== null && N.delete(z.key === null ? _ : z.key),
//             p = i(z, p, _),
//             C === null ? O = z : C.sibling = z,
//             C = z);
//         return e && N.forEach(function(A) {
//             return t(h, A)
//         }),
//         ge && Un(h, _),
//         O
//     }
//     function x(h, p, w, b) {
//         var O = io(w);
//         if (typeof O != "function")
//             throw Error(R(150));
//         if (w = O.call(w),
//         w == null)
//             throw Error(R(151));
//         for (var C = O = null, N = p, _ = p = 0, z = null, D = w.next(); N !== null && !D.done; _++,
//         D = w.next()) {
//             N.index > _ ? (z = N,
//             N = null) : z = N.sibling;
//             var A = f(h, N, D.value, b);
//             if (A === null) {
//                 N === null && (N = z);
//                 break
//             }
//             e && N && A.alternate === null && t(h, N),
//             p = i(A, p, _),
//             C === null ? O = A : C.sibling = A,
//             C = A,
//             N = z
//         }
//         if (D.done)
//             return n(h, N),
//             ge && Un(h, _),
//             O;
//         if (N === null) {
//             for (; !D.done; _++,
//             D = w.next())
//                 D = d(h, D.value, b),
//                 D !== null && (p = i(D, p, _),
//                 C === null ? O = D : C.sibling = D,
//                 C = D);
//             return ge && Un(h, _),
//             O
//         }
//         for (N = r(h, N); !D.done; _++,
//         D = w.next())
//             D = m(N, h, _, D.value, b),
//             D !== null && (e && D.alternate !== null && N.delete(D.key === null ? _ : D.key),
//             p = i(D, p, _),
//             C === null ? O = D : C.sibling = D,
//             C = D);
//         return e && N.forEach(function(T) {
//             return t(h, T)
//         }),
//         ge && Un(h, _),
//         O
//     }
//     function k(h, p, w, b) {
//         if (typeof w == "object" && w !== null && w.type === br && w.key === null && (w = w.props.children),
//         typeof w == "object" && w !== null) {
//             switch (w.$$typeof) {
//             case Ti:
//                 e: {
//                     for (var O = w.key, C = p; C !== null; ) {
//                         if (C.key === O) {
//                             if (O = w.type,
//                             O === br) {
//                                 if (C.tag === 7) {
//                                     n(h, C.sibling),
//                                     p = o(C, w.props.children),
//                                     p.return = h,
//                                     h = p;
//                                     break e
//                                 }
//                             } else if (C.elementType === O || typeof O == "object" && O !== null && O.$$typeof === pn && wd(O) === C.type) {
//                                 n(h, C.sibling),
//                                 p = o(C, w.props),
//                                 p.ref = co(h, C, w),
//                                 p.return = h,
//                                 h = p;
//                                 break e
//                             }
//                             n(h, C);
//                             break
//                         } else
//                             t(h, C);
//                         C = C.sibling
//                     }
//                     w.type === br ? (p = Jn(w.props.children, h.mode, b, w.key),
//                     p.return = h,
//                     h = p) : (b = ha(w.type, w.key, w.props, null, h.mode, b),
//                     b.ref = co(h, p, w),
//                     b.return = h,
//                     h = b)
//                 }
//                 return a(h);
//             case xr:
//                 e: {
//                     for (C = w.key; p !== null; ) {
//                         if (p.key === C)
//                             if (p.tag === 4 && p.stateNode.containerInfo === w.containerInfo && p.stateNode.implementation === w.implementation) {
//                                 n(h, p.sibling),
//                                 p = o(p, w.children || []),
//                                 p.return = h,
//                                 h = p;
//                                 break e
//                             } else {
//                                 n(h, p);
//                                 break
//                             }
//                         else
//                             t(h, p);
//                         p = p.sibling
//                     }
//                     p = ul(w, h.mode, b),
//                     p.return = h,
//                     h = p
//                 }
//                 return a(h);
//             case pn:
//                 return C = w._init,
//                 k(h, p, C(w._payload), b)
//             }
//             if (xo(w))
//                 return v(h, p, w, b);
//             if (io(w))
//                 return x(h, p, w, b);
//             Fi(h, w)
//         }
//         return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w,
//         p !== null && p.tag === 6 ? (n(h, p.sibling),
//         p = o(p, w),
//         p.return = h,
//         h = p) : (n(h, p),
//         p = ll(w, h.mode, b),
//         p.return = h,
//         h = p),
//         a(h)) : n(h, p)
//     }
//     return k
// }
// var Vr = Fm(!0)
//   , Bm = Fm(!1)
//   , ja = Dn(null)
//   , La = null
//   , Tr = null
//   , Tc = null;
// function _c() {
//     Tc = Tr = La = null
// }
// function jc(e) {
//     var t = ja.current;
//     de(ja),
//     e._currentValue = t
// }
// function ou(e, t, n) {
//     for (; e !== null; ) {
//         var r = e.alternate;
//         if ((e.childLanes & t) !== t ? (e.childLanes |= t,
//         r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
//         e === n)
//             break;
//         e = e.return
//     }
// }
// function zr(e, t) {
//     La = e,
//     Tc = Tr = null,
//     e = e.dependencies,
//     e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0),
//     e.firstContext = null)
// }
// function mt(e) {
//     var t = e._currentValue;
//     if (Tc !== e)
//         if (e = {
//             context: e,
//             memoizedValue: t,
//             next: null
//         },
//         Tr === null) {
//             if (La === null)
//                 throw Error(R(308));
//             Tr = e,
//             La.dependencies = {
//                 lanes: 0,
//                 firstContext: e
//             }
//         } else
//             Tr = Tr.next = e;
//     return t
// }
// var Yn = null;
// function Lc(e) {
//     Yn === null ? Yn = [e] : Yn.push(e)
// }
// function Um(e, t, n, r) {
//     var o = t.interleaved;
//     return o === null ? (n.next = n,
//     Lc(t)) : (n.next = o.next,
//     o.next = n),
//     t.interleaved = n,
//     Xt(e, r)
// }
// function Xt(e, t) {
//     e.lanes |= t;
//     var n = e.alternate;
//     for (n !== null && (n.lanes |= t),
//     n = e,
//     e = e.return; e !== null; )
//         e.childLanes |= t,
//         n = e.alternate,
//         n !== null && (n.childLanes |= t),
//         n = e,
//         e = e.return;
//     return n.tag === 3 ? n.stateNode : null
// }
// var hn = !1;
// function Rc(e) {
//     e.updateQueue = {
//         baseState: e.memoizedState,
//         firstBaseUpdate: null,
//         lastBaseUpdate: null,
//         shared: {
//             pending: null,
//             interleaved: null,
//             lanes: 0
//         },
//         effects: null
//     }
// }
// function Hm(e, t) {
//     e = e.updateQueue,
//     t.updateQueue === e && (t.updateQueue = {
//         baseState: e.baseState,
//         firstBaseUpdate: e.firstBaseUpdate,
//         lastBaseUpdate: e.lastBaseUpdate,
//         shared: e.shared,
//         effects: e.effects
//     })
// }
// function Vt(e, t) {
//     return {
//         eventTime: e,
//         lane: t,
//         tag: 0,
//         payload: null,
//         callback: null,
//         next: null
//     }
// }
// function On(e, t, n) {
//     var r = e.updateQueue;
//     if (r === null)
//         return null;
//     if (r = r.shared,
//     ee & 2) {
//         var o = r.pending;
//         return o === null ? t.next = t : (t.next = o.next,
//         o.next = t),
//         r.pending = t,
//         Xt(e, n)
//     }
//     return o = r.interleaved,
//     o === null ? (t.next = t,
//     Lc(r)) : (t.next = o.next,
//     o.next = t),
//     r.interleaved = t,
//     Xt(e, n)
// }
// function la(e, t, n) {
//     if (t = t.updateQueue,
//     t !== null && (t = t.shared,
//     (n & 4194240) !== 0)) {
//         var r = t.lanes;
//         r &= e.pendingLanes,
//         n |= r,
//         t.lanes = n,
//         yc(e, n)
//     }
// }
// function xd(e, t) {
//     var n = e.updateQueue
//       , r = e.alternate;
//     if (r !== null && (r = r.updateQueue,
//     n === r)) {
//         var o = null
//           , i = null;
//         if (n = n.firstBaseUpdate,
//         n !== null) {
//             do {
//                 var a = {
//                     eventTime: n.eventTime,
//                     lane: n.lane,
//                     tag: n.tag,
//                     payload: n.payload,
//                     callback: n.callback,
//                     next: null
//                 };
//                 i === null ? o = i = a : i = i.next = a,
//                 n = n.next
//             } while (n !== null);
//             i === null ? o = i = t : i = i.next = t
//         } else
//             o = i = t;
//         n = {
//             baseState: r.baseState,
//             firstBaseUpdate: o,
//             lastBaseUpdate: i,
//             shared: r.shared,
//             effects: r.effects
//         },
//         e.updateQueue = n;
//         return
//     }
//     e = n.lastBaseUpdate,
//     e === null ? n.firstBaseUpdate = t : e.next = t,
//     n.lastBaseUpdate = t
// }
// function Ra(e, t, n, r) {
//     var o = e.updateQueue;
//     hn = !1;
//     var i = o.firstBaseUpdate
//       , a = o.lastBaseUpdate
//       , s = o.shared.pending;
//     if (s !== null) {
//         o.shared.pending = null;
//         var l = s
//           , u = l.next;
//         l.next = null,
//         a === null ? i = u : a.next = u,
//         a = l;
//         var c = e.alternate;
//         c !== null && (c = c.updateQueue,
//         s = c.lastBaseUpdate,
//         s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u,
//         c.lastBaseUpdate = l))
//     }
//     if (i !== null) {
//         var d = o.baseState;
//         a = 0,
//         c = u = l = null,
//         s = i;
//         do {
//             var f = s.lane
//               , m = s.eventTime;
//             if ((r & f) === f) {
//                 c !== null && (c = c.next = {
//                     eventTime: m,
//                     lane: 0,
//                     tag: s.tag,
//                     payload: s.payload,
//                     callback: s.callback,
//                     next: null
//                 });
//                 e: {
//                     var v = e
//                       , x = s;
//                     switch (f = t,
//                     m = n,
//                     x.tag) {
//                     case 1:
//                         if (v = x.payload,
//                         typeof v == "function") {
//                             d = v.call(m, d, f);
//                             break e
//                         }
//                         d = v;
//                         break e;
//                     case 3:
//                         v.flags = v.flags & -65537 | 128;
//                     case 0:
//                         if (v = x.payload,
//                         f = typeof v == "function" ? v.call(m, d, f) : v,
//                         f == null)
//                             break e;
//                         d = Se({}, d, f);
//                         break e;
//                     case 2:
//                         hn = !0
//                     }
//                 }
//                 s.callback !== null && s.lane !== 0 && (e.flags |= 64,
//                 f = o.effects,
//                 f === null ? o.effects = [s] : f.push(s))
//             } else
//                 m = {
//                     eventTime: m,
//                     lane: f,
//                     tag: s.tag,
//                     payload: s.payload,
//                     callback: s.callback,
//                     next: null
//                 },
//                 c === null ? (u = c = m,
//                 l = d) : c = c.next = m,
//                 a |= f;
//             if (s = s.next,
//             s === null) {
//                 if (s = o.shared.pending,
//                 s === null)
//                     break;
//                 f = s,
//                 s = f.next,
//                 f.next = null,
//                 o.lastBaseUpdate = f,
//                 o.shared.pending = null
//             }
//         } while (!0);
//         if (c === null && (l = d),
//         o.baseState = l,
//         o.firstBaseUpdate = u,
//         o.lastBaseUpdate = c,
//         t = o.shared.interleaved,
//         t !== null) {
//             o = t;
//             do
//                 a |= o.lane,
//                 o = o.next;
//             while (o !== t)
//         } else
//             i === null && (o.shared.lanes = 0);
//         ar |= a,
//         e.lanes = a,
//         e.memoizedState = d
//     }
// }
// function bd(e, t, n) {
//     if (e = t.effects,
//     t.effects = null,
//     e !== null)
//         for (t = 0; t < e.length; t++) {
//             var r = e[t]
//               , o = r.callback;
//             if (o !== null) {
//                 if (r.callback = null,
//                 r = n,
//                 typeof o != "function")
//                     throw Error(R(191, o));
//                 o.call(r)
//             }
//         }
// }
// var pi = {}
//   , Mt = Dn(pi)
//   , qo = Dn(pi)
//   , Qo = Dn(pi);
// function Xn(e) {
//     if (e === pi)
//         throw Error(R(174));
//     return e
// }
// function Ac(e, t) {
//     switch (le(Qo, t),
//     le(qo, e),
//     le(Mt, pi),
//     e = t.nodeType,
//     e) {
//     case 9:
//     case 11:
//         t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
//         break;
//     default:
//         e = e === 8 ? t.parentNode : t,
//         t = e.namespaceURI || null,
//         e = e.tagName,
//         t = $l(t, e)
//     }
//     de(Mt),
//     le(Mt, t)
// }
// function Kr() {
//     de(Mt),
//     de(qo),
//     de(Qo)
// }
// function Wm(e) {
//     Xn(Qo.current);
//     var t = Xn(Mt.current)
//       , n = $l(t, e.type);
//     t !== n && (le(qo, e),
//     le(Mt, n))
// }
// function Mc(e) {
//     qo.current === e && (de(Mt),
//     de(qo))
// }
// var xe = Dn(0);
// function Aa(e) {
//     for (var t = e; t !== null; ) {
//         if (t.tag === 13) {
//             var n = t.memoizedState;
//             if (n !== null && (n = n.dehydrated,
//             n === null || n.data === "$?" || n.data === "$!"))
//                 return t
//         } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
//             if (t.flags & 128)
//                 return t
//         } else if (t.child !== null) {
//             t.child.return = t,
//             t = t.child;
//             continue
//         }
//         if (t === e)
//             break;
//         for (; t.sibling === null; ) {
//             if (t.return === null || t.return === e)
//                 return null;
//             t = t.return
//         }
//         t.sibling.return = t.return,
//         t = t.sibling
//     }
//     return null
// }
// var nl = [];
// function Ic() {
//     for (var e = 0; e < nl.length; e++)
//         nl[e]._workInProgressVersionPrimary = null;
//     nl.length = 0
// }
// var ua = nn.ReactCurrentDispatcher
//   , rl = nn.ReactCurrentBatchConfig
//   , ir = 0
//   , be = null
//   , Te = null
//   , Le = null
//   , Ma = !1
//   , Lo = !1
//   , Jo = 0
//   , Wy = 0;
// function De() {
//     throw Error(R(321))
// }
// function Dc(e, t) {
//     if (t === null)
//         return !1;
//     for (var n = 0; n < t.length && n < e.length; n++)
//         if (!kt(e[n], t[n]))
//             return !1;
//     return !0
// }
// function $c(e, t, n, r, o, i) {
//     if (ir = i,
//     be = t,
//     t.memoizedState = null,
//     t.updateQueue = null,
//     t.lanes = 0,
//     ua.current = e === null || e.memoizedState === null ? Yy : Xy,
//     e = n(r, o),
//     Lo) {
//         i = 0;
//         do {
//             if (Lo = !1,
//             Jo = 0,
//             25 <= i)
//                 throw Error(R(301));
//             i += 1,
//             Le = Te = null,
//             t.updateQueue = null,
//             ua.current = qy,
//             e = n(r, o)
//         } while (Lo)
//     }
//     if (ua.current = Ia,
//     t = Te !== null && Te.next !== null,
//     ir = 0,
//     Le = Te = be = null,
//     Ma = !1,
//     t)
//         throw Error(R(300));
//     return e
// }
// function zc() {
//     var e = Jo !== 0;
//     return Jo = 0,
//     e
// }
// function Ot() {
//     var e = {
//         memoizedState: null,
//         baseState: null,
//         baseQueue: null,
//         queue: null,
//         next: null
//     };
//     return Le === null ? be.memoizedState = Le = e : Le = Le.next = e,
//     Le
// }
// function gt() {
//     if (Te === null) {
//         var e = be.alternate;
//         e = e !== null ? e.memoizedState : null
//     } else
//         e = Te.next;
//     var t = Le === null ? be.memoizedState : Le.next;
//     if (t !== null)
//         Le = t,
//         Te = e;
//     else {
//         if (e === null)
//             throw Error(R(310));
//         Te = e,
//         e = {
//             memoizedState: Te.memoizedState,
//             baseState: Te.baseState,
//             baseQueue: Te.baseQueue,
//             queue: Te.queue,
//             next: null
//         },
//         Le === null ? be.memoizedState = Le = e : Le = Le.next = e
//     }
//     return Le
// }
// function Zo(e, t) {
//     return typeof t == "function" ? t(e) : t
// }
// function ol(e) {
//     var t = gt()
//       , n = t.queue;
//     if (n === null)
//         throw Error(R(311));
//     n.lastRenderedReducer = e;
//     var r = Te
//       , o = r.baseQueue
//       , i = n.pending;
//     if (i !== null) {
//         if (o !== null) {
//             var a = o.next;
//             o.next = i.next,
//             i.next = a
//         }
//         r.baseQueue = o = i,
//         n.pending = null
//     }
//     if (o !== null) {
//         i = o.next,
//         r = r.baseState;
//         var s = a = null
//           , l = null
//           , u = i;
//         do {
//             var c = u.lane;
//             if ((ir & c) === c)
//                 l !== null && (l = l.next = {
//                     lane: 0,
//                     action: u.action,
//                     hasEagerState: u.hasEagerState,
//                     eagerState: u.eagerState,
//                     next: null
//                 }),
//                 r = u.hasEagerState ? u.eagerState : e(r, u.action);
//             else {
//                 var d = {
//                     lane: c,
//                     action: u.action,
//                     hasEagerState: u.hasEagerState,
//                     eagerState: u.eagerState,
//                     next: null
//                 };
//                 l === null ? (s = l = d,
//                 a = r) : l = l.next = d,
//                 be.lanes |= c,
//                 ar |= c
//             }
//             u = u.next
//         } while (u !== null && u !== i);
//         l === null ? a = r : l.next = s,
//         kt(r, t.memoizedState) || (Xe = !0),
//         t.memoizedState = r,
//         t.baseState = a,
//         t.baseQueue = l,
//         n.lastRenderedState = r
//     }
//     if (e = n.interleaved,
//     e !== null) {
//         o = e;
//         do
//             i = o.lane,
//             be.lanes |= i,
//             ar |= i,
//             o = o.next;
//         while (o !== e)
//     } else
//         o === null && (n.lanes = 0);
//     return [t.memoizedState, n.dispatch]
// }
// function il(e) {
//     var t = gt()
//       , n = t.queue;
//     if (n === null)
//         throw Error(R(311));
//     n.lastRenderedReducer = e;
//     var r = n.dispatch
//       , o = n.pending
//       , i = t.memoizedState;
//     if (o !== null) {
//         n.pending = null;
//         var a = o = o.next;
//         do
//             i = e(i, a.action),
//             a = a.next;
//         while (a !== o);
//         kt(i, t.memoizedState) || (Xe = !0),
//         t.memoizedState = i,
//         t.baseQueue === null && (t.baseState = i),
//         n.lastRenderedState = i
//     }
//     return [i, r]
// }
// function Vm() {}
// function Km(e, t) {
//     var n = be
//       , r = gt()
//       , o = t()
//       , i = !kt(r.memoizedState, o);
//     if (i && (r.memoizedState = o,
//     Xe = !0),
//     r = r.queue,
//     Fc(Xm.bind(null, n, r, e), [e]),
//     r.getSnapshot !== t || i || Le !== null && Le.memoizedState.tag & 1) {
//         if (n.flags |= 2048,
//         ei(9, Ym.bind(null, n, r, o, t), void 0, null),
//         Re === null)
//             throw Error(R(349));
//         ir & 30 || Gm(n, t, o)
//     }
//     return o
// }
// function Gm(e, t, n) {
//     e.flags |= 16384,
//     e = {
//         getSnapshot: t,
//         value: n
//     },
//     t = be.updateQueue,
//     t === null ? (t = {
//         lastEffect: null,
//         stores: null
//     },
//     be.updateQueue = t,
//     t.stores = [e]) : (n = t.stores,
//     n === null ? t.stores = [e] : n.push(e))
// }
// function Ym(e, t, n, r) {
//     t.value = n,
//     t.getSnapshot = r,
//     qm(t) && Qm(e)
// }
// function Xm(e, t, n) {
//     return n(function() {
//         qm(t) && Qm(e)
//     })
// }
// function qm(e) {
//     var t = e.getSnapshot;
//     e = e.value;
//     try {
//         var n = t();
//         return !kt(e, n)
//     } catch {
//         return !0
//     }
// }
// function Qm(e) {
//     var t = Xt(e, 1);
//     t !== null && St(t, e, 1, -1)
// }
// function Sd(e) {
//     var t = Ot();
//     return typeof e == "function" && (e = e()),
//     t.memoizedState = t.baseState = e,
//     e = {
//         pending: null,
//         interleaved: null,
//         lanes: 0,
//         dispatch: null,
//         lastRenderedReducer: Zo,
//         lastRenderedState: e
//     },
//     t.queue = e,
//     e = e.dispatch = Gy.bind(null, be, e),
//     [t.memoizedState, e]
// }
// function ei(e, t, n, r) {
//     return e = {
//         tag: e,
//         create: t,
//         destroy: n,
//         deps: r,
//         next: null
//     },
//     t = be.updateQueue,
//     t === null ? (t = {
//         lastEffect: null,
//         stores: null
//     },
//     be.updateQueue = t,
//     t.lastEffect = e.next = e) : (n = t.lastEffect,
//     n === null ? t.lastEffect = e.next = e : (r = n.next,
//     n.next = e,
//     e.next = r,
//     t.lastEffect = e)),
//     e
// }
// function Jm() {
//     return gt().memoizedState
// }
// function ca(e, t, n, r) {
//     var o = Ot();
//     be.flags |= e,
//     o.memoizedState = ei(1 | t, n, void 0, r === void 0 ? null : r)
// }
// function us(e, t, n, r) {
//     var o = gt();
//     r = r === void 0 ? null : r;
//     var i = void 0;
//     if (Te !== null) {
//         var a = Te.memoizedState;
//         if (i = a.destroy,
//         r !== null && Dc(r, a.deps)) {
//             o.memoizedState = ei(t, n, i, r);
//             return
//         }
//     }
//     be.flags |= e,
//     o.memoizedState = ei(1 | t, n, i, r)
// }
// function kd(e, t) {
//     return ca(8390656, 8, e, t)
// }
// function Fc(e, t) {
//     return us(2048, 8, e, t)
// }
// function Zm(e, t) {
//     return us(4, 2, e, t)
// }
// function eg(e, t) {
//     return us(4, 4, e, t)
// }
// function tg(e, t) {
//     if (typeof t == "function")
//         return e = e(),
//         t(e),
//         function() {
//             t(null)
//         }
//         ;
//     if (t != null)
//         return e = e(),
//         t.current = e,
//         function() {
//             t.current = null
//         }
// }
// function ng(e, t, n) {
//     return n = n != null ? n.concat([e]) : null,
//     us(4, 4, tg.bind(null, t, e), n)
// }
// function Bc() {}
// function rg(e, t) {
//     var n = gt();
//     t = t === void 0 ? null : t;
//     var r = n.memoizedState;
//     return r !== null && t !== null && Dc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
//     e)
// }
// function og(e, t) {
//     var n = gt();
//     t = t === void 0 ? null : t;
//     var r = n.memoizedState;
//     return r !== null && t !== null && Dc(t, r[1]) ? r[0] : (e = e(),
//     n.memoizedState = [e, t],
//     e)
// }
// function ig(e, t, n) {
//     return ir & 21 ? (kt(n, t) || (n = cm(),
//     be.lanes |= n,
//     ar |= n,
//     e.baseState = !0),
//     t) : (e.baseState && (e.baseState = !1,
//     Xe = !0),
//     e.memoizedState = n)
// }
// function Vy(e, t) {
//     var n = oe;
//     oe = n !== 0 && 4 > n ? n : 4,
//     e(!0);
//     var r = rl.transition;
//     rl.transition = {};
//     try {
//         e(!1),
//         t()
//     } finally {
//         oe = n,
//         rl.transition = r
//     }
// }
// function ag() {
//     return gt().memoizedState
// }
// function Ky(e, t, n) {
//     var r = Pn(e);
//     if (n = {
//         lane: r,
//         action: n,
//         hasEagerState: !1,
//         eagerState: null,
//         next: null
//     },
//     sg(e))
//         lg(t, n);
//     else if (n = Um(e, t, n, r),
//     n !== null) {
//         var o = We();
//         St(n, e, r, o),
//         ug(n, t, r)
//     }
// }
// function Gy(e, t, n) {
//     var r = Pn(e)
//       , o = {
//         lane: r,
//         action: n,
//         hasEagerState: !1,
//         eagerState: null,
//         next: null
//     };
//     if (sg(e))
//         lg(t, o);
//     else {
//         var i = e.alternate;
//         if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
//         i !== null))
//             try {
//                 var a = t.lastRenderedState
//                   , s = i(a, n);
//                 if (o.hasEagerState = !0,
//                 o.eagerState = s,
//                 kt(s, a)) {
//                     var l = t.interleaved;
//                     l === null ? (o.next = o,
//                     Lc(t)) : (o.next = l.next,
//                     l.next = o),
//                     t.interleaved = o;
//                     return
//                 }
//             } catch {} finally {}
//         n = Um(e, t, o, r),
//         n !== null && (o = We(),
//         St(n, e, r, o),
//         ug(n, t, r))
//     }
// }
// function sg(e) {
//     var t = e.alternate;
//     return e === be || t !== null && t === be
// }
// function lg(e, t) {
//     Lo = Ma = !0;
//     var n = e.pending;
//     n === null ? t.next = t : (t.next = n.next,
//     n.next = t),
//     e.pending = t
// }
// function ug(e, t, n) {
//     if (n & 4194240) {
//         var r = t.lanes;
//         r &= e.pendingLanes,
//         n |= r,
//         t.lanes = n,
//         yc(e, n)
//     }
// }
// var Ia = {
//     readContext: mt,
//     useCallback: De,
//     useContext: De,
//     useEffect: De,
//     useImperativeHandle: De,
//     useInsertionEffect: De,
//     useLayoutEffect: De,
//     useMemo: De,
//     useReducer: De,
//     useRef: De,
//     useState: De,
//     useDebugValue: De,
//     useDeferredValue: De,
//     useTransition: De,
//     useMutableSource: De,
//     useSyncExternalStore: De,
//     useId: De,
//     unstable_isNewReconciler: !1
// }
//   , Yy = {
//     readContext: mt,
//     useCallback: function(e, t) {
//         return Ot().memoizedState = [e, t === void 0 ? null : t],
//         e
//     },
//     useContext: mt,
//     useEffect: kd,
//     useImperativeHandle: function(e, t, n) {
//         return n = n != null ? n.concat([e]) : null,
//         ca(4194308, 4, tg.bind(null, t, e), n)
//     },
//     useLayoutEffect: function(e, t) {
//         return ca(4194308, 4, e, t)
//     },
//     useInsertionEffect: function(e, t) {
//         return ca(4, 2, e, t)
//     },
//     useMemo: function(e, t) {
//         var n = Ot();
//         return t = t === void 0 ? null : t,
//         e = e(),
//         n.memoizedState = [e, t],
//         e
//     },
//     useReducer: function(e, t, n) {
//         var r = Ot();
//         return t = n !== void 0 ? n(t) : t,
//         r.memoizedState = r.baseState = t,
//         e = {
//             pending: null,
//             interleaved: null,
//             lanes: 0,
//             dispatch: null,
//             lastRenderedReducer: e,
//             lastRenderedState: t
//         },
//         r.queue = e,
//         e = e.dispatch = Ky.bind(null, be, e),
//         [r.memoizedState, e]
//     },
//     useRef: function(e) {
//         var t = Ot();
//         return e = {
//             current: e
//         },
//         t.memoizedState = e
//     },
//     useState: Sd,
//     useDebugValue: Bc,
//     useDeferredValue: function(e) {
//         return Ot().memoizedState = e
//     },
//     useTransition: function() {
//         var e = Sd(!1)
//           , t = e[0];
//         return e = Vy.bind(null, e[1]),
//         Ot().memoizedState = e,
//         [t, e]
//     },
//     useMutableSource: function() {},
//     useSyncExternalStore: function(e, t, n) {
//         var r = be
//           , o = Ot();
//         if (ge) {
//             if (n === void 0)
//                 throw Error(R(407));
//             n = n()
//         } else {
//             if (n = t(),
//             Re === null)
//                 throw Error(R(349));
//             ir & 30 || Gm(r, t, n)
//         }
//         o.memoizedState = n;
//         var i = {
//             value: n,
//             getSnapshot: t
//         };
//         return o.queue = i,
//         kd(Xm.bind(null, r, i, e), [e]),
//         r.flags |= 2048,
//         ei(9, Ym.bind(null, r, i, n, t), void 0, null),
//         n
//     },
//     useId: function() {
//         var e = Ot()
//           , t = Re.identifierPrefix;
//         if (ge) {
//             var n = Wt
//               , r = Ht;
//             n = (r & ~(1 << 32 - bt(r) - 1)).toString(32) + n,
//             t = ":" + t + "R" + n,
//             n = Jo++,
//             0 < n && (t += "H" + n.toString(32)),
//             t += ":"
//         } else
//             n = Wy++,
//             t = ":" + t + "r" + n.toString(32) + ":";
//         return e.memoizedState = t
//     },
//     unstable_isNewReconciler: !1
// }
//   , Xy = {
//     readContext: mt,
//     useCallback: rg,
//     useContext: mt,
//     useEffect: Fc,
//     useImperativeHandle: ng,
//     useInsertionEffect: Zm,
//     useLayoutEffect: eg,
//     useMemo: og,
//     useReducer: ol,
//     useRef: Jm,
//     useState: function() {
//         return ol(Zo)
//     },
//     useDebugValue: Bc,
//     useDeferredValue: function(e) {
//         var t = gt();
//         return ig(t, Te.memoizedState, e)
//     },
//     useTransition: function() {
//         var e = ol(Zo)[0]
//           , t = gt().memoizedState;
//         return [e, t]
//     },
//     useMutableSource: Vm,
//     useSyncExternalStore: Km,
//     useId: ag,
//     unstable_isNewReconciler: !1
// }
//   , qy = {
//     readContext: mt,
//     useCallback: rg,
//     useContext: mt,
//     useEffect: Fc,
//     useImperativeHandle: ng,
//     useInsertionEffect: Zm,
//     useLayoutEffect: eg,
//     useMemo: og,
//     useReducer: il,
//     useRef: Jm,
//     useState: function() {
//         return il(Zo)
//     },
//     useDebugValue: Bc,
//     useDeferredValue: function(e) {
//         var t = gt();
//         return Te === null ? t.memoizedState = e : ig(t, Te.memoizedState, e)
//     },
//     useTransition: function() {
//         var e = il(Zo)[0]
//           , t = gt().memoizedState;
//         return [e, t]
//     },
//     useMutableSource: Vm,
//     useSyncExternalStore: Km,
//     useId: ag,
//     unstable_isNewReconciler: !1
// };
// function yt(e, t) {
//     if (e && e.defaultProps) {
//         t = Se({}, t),
//         e = e.defaultProps;
//         for (var n in e)
//             t[n] === void 0 && (t[n] = e[n]);
//         return t
//     }
//     return t
// }
// function iu(e, t, n, r) {
//     t = e.memoizedState,
//     n = n(r, t),
//     n = n == null ? t : Se({}, t, n),
//     e.memoizedState = n,
//     e.lanes === 0 && (e.updateQueue.baseState = n)
// }
// var cs = {
//     isMounted: function(e) {
//         return (e = e._reactInternals) ? dr(e) === e : !1
//     },
//     enqueueSetState: function(e, t, n) {
//         e = e._reactInternals;
//         var r = We()
//           , o = Pn(e)
//           , i = Vt(r, o);
//         i.payload = t,
//         n != null && (i.callback = n),
//         t = On(e, i, o),
//         t !== null && (St(t, e, o, r),
//         la(t, e, o))
//     },
//     enqueueReplaceState: function(e, t, n) {
//         e = e._reactInternals;
//         var r = We()
//           , o = Pn(e)
//           , i = Vt(r, o);
//         i.tag = 1,
//         i.payload = t,
//         n != null && (i.callback = n),
//         t = On(e, i, o),
//         t !== null && (St(t, e, o, r),
//         la(t, e, o))
//     },
//     enqueueForceUpdate: function(e, t) {
//         e = e._reactInternals;
//         var n = We()
//           , r = Pn(e)
//           , o = Vt(n, r);
//         o.tag = 2,
//         t != null && (o.callback = t),
//         t = On(e, o, r),
//         t !== null && (St(t, e, r, n),
//         la(t, e, r))
//     }
// };
// function Cd(e, t, n, r, o, i, a) {
//     return e = e.stateNode,
//     typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ko(n, r) || !Ko(o, i) : !0
// }
// function cg(e, t, n) {
//     var r = !1
//       , o = jn
//       , i = t.contextType;
//     return typeof i == "object" && i !== null ? i = mt(i) : (o = Qe(t) ? rr : Fe.current,
//     r = t.contextTypes,
//     i = (r = r != null) ? Hr(e, o) : jn),
//     t = new t(n,i),
//     e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
//     t.updater = cs,
//     e.stateNode = t,
//     t._reactInternals = e,
//     r && (e = e.stateNode,
//     e.__reactInternalMemoizedUnmaskedChildContext = o,
//     e.__reactInternalMemoizedMaskedChildContext = i),
//     t
// }
// function Ed(e, t, n, r) {
//     e = t.state,
//     typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
//     typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
//     t.state !== e && cs.enqueueReplaceState(t, t.state, null)
// }
// function au(e, t, n, r) {
//     var o = e.stateNode;
//     o.props = n,
//     o.state = e.memoizedState,
//     o.refs = {},
//     Rc(e);
//     var i = t.contextType;
//     typeof i == "object" && i !== null ? o.context = mt(i) : (i = Qe(t) ? rr : Fe.current,
//     o.context = Hr(e, i)),
//     o.state = e.memoizedState,
//     i = t.getDerivedStateFromProps,
//     typeof i == "function" && (iu(e, t, i, n),
//     o.state = e.memoizedState),
//     typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
//     typeof o.componentWillMount == "function" && o.componentWillMount(),
//     typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
//     t !== o.state && cs.enqueueReplaceState(o, o.state, null),
//     Ra(e, n, o, r),
//     o.state = e.memoizedState),
//     typeof o.componentDidMount == "function" && (e.flags |= 4194308)
// }
// function Gr(e, t) {
//     try {
//         var n = ""
//           , r = t;
//         do
//             n += C0(r),
//             r = r.return;
//         while (r);
//         var o = n
//     } catch (i) {
//         o = `
// Error generating stack: ` + i.message + `
// ` + i.stack
//     }
//     return {
//         value: e,
//         source: t,
//         stack: o,
//         digest: null
//     }
// }
// function al(e, t, n) {
//     return {
//         value: e,
//         source: null,
//         stack: n ?? null,
//         digest: t ?? null
//     }
// }
// function su(e, t) {
//     try {
//         console.error(t.value)
//     } catch (n) {
//         setTimeout(function() {
//             throw n
//         })
//     }
// }
// var Qy = typeof WeakMap == "function" ? WeakMap : Map;
// function fg(e, t, n) {
//     n = Vt(-1, n),
//     n.tag = 3,
//     n.payload = {
//         element: null
//     };
//     var r = t.value;
//     return n.callback = function() {
//         $a || ($a = !0,
//         vu = r),
//         su(e, t)
//     }
//     ,
//     n
// }
// function dg(e, t, n) {
//     n = Vt(-1, n),
//     n.tag = 3;
//     var r = e.type.getDerivedStateFromError;
//     if (typeof r == "function") {
//         var o = t.value;
//         n.payload = function() {
//             return r(o)
//         }
//         ,
//         n.callback = function() {
//             su(e, t)
//         }
//     }
//     var i = e.stateNode;
//     return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
//         su(e, t),
//         typeof r != "function" && (Nn === null ? Nn = new Set([this]) : Nn.add(this));
//         var a = t.stack;
//         this.componentDidCatch(t.value, {
//             componentStack: a !== null ? a : ""
//         })
//     }
//     ),
//     n
// }
// function Od(e, t, n) {
//     var r = e.pingCache;
//     if (r === null) {
//         r = e.pingCache = new Qy;
//         var o = new Set;
//         r.set(t, o)
//     } else
//         o = r.get(t),
//         o === void 0 && (o = new Set,
//         r.set(t, o));
//     o.has(n) || (o.add(n),
//     e = f2.bind(null, e, t, n),
//     t.then(e, e))
// }
// function Nd(e) {
//     do {
//         var t;
//         if ((t = e.tag === 13) && (t = e.memoizedState,
//         t = t !== null ? t.dehydrated !== null : !0),
//         t)
//             return e;
//         e = e.return
//     } while (e !== null);
//     return null
// }
// function Pd(e, t, n, r, o) {
//     return e.mode & 1 ? (e.flags |= 65536,
//     e.lanes = o,
//     e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
//     n.flags |= 131072,
//     n.flags &= -52805,
//     n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1),
//     t.tag = 2,
//     On(n, t, 1))),
//     n.lanes |= 1),
//     e)
// }
// var Jy = nn.ReactCurrentOwner
//   , Xe = !1;
// function He(e, t, n, r) {
//     t.child = e === null ? Bm(t, null, n, r) : Vr(t, e.child, n, r)
// }
// function Td(e, t, n, r, o) {
//     n = n.render;
//     var i = t.ref;
//     return zr(t, o),
//     r = $c(e, t, n, r, i, o),
//     n = zc(),
//     e !== null && !Xe ? (t.updateQueue = e.updateQueue,
//     t.flags &= -2053,
//     e.lanes &= ~o,
//     qt(e, t, o)) : (ge && n && Oc(t),
//     t.flags |= 1,
//     He(e, t, r, o),
//     t.child)
// }
// function _d(e, t, n, r, o) {
//     if (e === null) {
//         var i = n.type;
//         return typeof i == "function" && !Xc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
//         t.type = i,
//         pg(e, t, i, r, o)) : (e = ha(n.type, null, r, t, t.mode, o),
//         e.ref = t.ref,
//         e.return = t,
//         t.child = e)
//     }
//     if (i = e.child,
//     !(e.lanes & o)) {
//         var a = i.memoizedProps;
//         if (n = n.compare,
//         n = n !== null ? n : Ko,
//         n(a, r) && e.ref === t.ref)
//             return qt(e, t, o)
//     }
//     return t.flags |= 1,
//     e = Tn(i, r),
//     e.ref = t.ref,
//     e.return = t,
//     t.child = e
// }
// function pg(e, t, n, r, o) {
//     if (e !== null) {
//         var i = e.memoizedProps;
//         if (Ko(i, r) && e.ref === t.ref)
//             if (Xe = !1,
//             t.pendingProps = r = i,
//             (e.lanes & o) !== 0)
//                 e.flags & 131072 && (Xe = !0);
//             else
//                 return t.lanes = e.lanes,
//                 qt(e, t, o)
//     }
//     return lu(e, t, n, r, o)
// }
// function hg(e, t, n) {
//     var r = t.pendingProps
//       , o = r.children
//       , i = e !== null ? e.memoizedState : null;
//     if (r.mode === "hidden")
//         if (!(t.mode & 1))
//             t.memoizedState = {
//                 baseLanes: 0,
//                 cachePool: null,
//                 transitions: null
//             },
//             le(jr, Ze),
//             Ze |= n;
//         else {
//             if (!(n & 1073741824))
//                 return e = i !== null ? i.baseLanes | n : n,
//                 t.lanes = t.childLanes = 1073741824,
//                 t.memoizedState = {
//                     baseLanes: e,
//                     cachePool: null,
//                     transitions: null
//                 },
//                 t.updateQueue = null,
//                 le(jr, Ze),
//                 Ze |= e,
//                 null;
//             t.memoizedState = {
//                 baseLanes: 0,
//                 cachePool: null,
//                 transitions: null
//             },
//             r = i !== null ? i.baseLanes : n,
//             le(jr, Ze),
//             Ze |= r
//         }
//     else
//         i !== null ? (r = i.baseLanes | n,
//         t.memoizedState = null) : r = n,
//         le(jr, Ze),
//         Ze |= r;
//     return He(e, t, o, n),
//     t.child
// }
// function mg(e, t) {
//     var n = t.ref;
//     (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
//     t.flags |= 2097152)
// }
// function lu(e, t, n, r, o) {
//     var i = Qe(n) ? rr : Fe.current;
//     return i = Hr(t, i),
//     zr(t, o),
//     n = $c(e, t, n, r, i, o),
//     r = zc(),
//     e !== null && !Xe ? (t.updateQueue = e.updateQueue,
//     t.flags &= -2053,
//     e.lanes &= ~o,
//     qt(e, t, o)) : (ge && r && Oc(t),
//     t.flags |= 1,
//     He(e, t, n, o),
//     t.child)
// }
// function jd(e, t, n, r, o) {
//     if (Qe(n)) {
//         var i = !0;
//         Pa(t)
//     } else
//         i = !1;
//     if (zr(t, o),
//     t.stateNode === null)
//         fa(e, t),
//         cg(t, n, r),
//         au(t, n, r, o),
//         r = !0;
//     else if (e === null) {
//         var a = t.stateNode
//           , s = t.memoizedProps;
//         a.props = s;
//         var l = a.context
//           , u = n.contextType;
//         typeof u == "object" && u !== null ? u = mt(u) : (u = Qe(n) ? rr : Fe.current,
//         u = Hr(t, u));
//         var c = n.getDerivedStateFromProps
//           , d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
//         d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && Ed(t, a, r, u),
//         hn = !1;
//         var f = t.memoizedState;
//         a.state = f,
//         Ra(t, r, a, o),
//         l = t.memoizedState,
//         s !== r || f !== l || qe.current || hn ? (typeof c == "function" && (iu(t, n, c, r),
//         l = t.memoizedState),
//         (s = hn || Cd(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
//         typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
//         typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
//         t.memoizedProps = r,
//         t.memoizedState = l),
//         a.props = r,
//         a.state = l,
//         a.context = u,
//         r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
//         r = !1)
//     } else {
//         a = t.stateNode,
//         Hm(e, t),
//         s = t.memoizedProps,
//         u = t.type === t.elementType ? s : yt(t.type, s),
//         a.props = u,
//         d = t.pendingProps,
//         f = a.context,
//         l = n.contextType,
//         typeof l == "object" && l !== null ? l = mt(l) : (l = Qe(n) ? rr : Fe.current,
//         l = Hr(t, l));
//         var m = n.getDerivedStateFromProps;
//         (c = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Ed(t, a, r, l),
//         hn = !1,
//         f = t.memoizedState,
//         a.state = f,
//         Ra(t, r, a, o);
//         var v = t.memoizedState;
//         s !== d || f !== v || qe.current || hn ? (typeof m == "function" && (iu(t, n, m, r),
//         v = t.memoizedState),
//         (u = hn || Cd(t, n, u, r, f, v, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, l),
//         typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, l)),
//         typeof a.componentDidUpdate == "function" && (t.flags |= 4),
//         typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
//         typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
//         t.memoizedProps = r,
//         t.memoizedState = v),
//         a.props = r,
//         a.state = v,
//         a.context = l,
//         r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
//         typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
//         r = !1)
//     }
//     return uu(e, t, n, r, i, o)
// }
// function uu(e, t, n, r, o, i) {
//     mg(e, t);
//     var a = (t.flags & 128) !== 0;
//     if (!r && !a)
//         return o && gd(t, n, !1),
//         qt(e, t, i);
//     r = t.stateNode,
//     Jy.current = t;
//     var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
//     return t.flags |= 1,
//     e !== null && a ? (t.child = Vr(t, e.child, null, i),
//     t.child = Vr(t, null, s, i)) : He(e, t, s, i),
//     t.memoizedState = r.state,
//     o && gd(t, n, !0),
//     t.child
// }
// function gg(e) {
//     var t = e.stateNode;
//     t.pendingContext ? md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && md(e, t.context, !1),
//     Ac(e, t.containerInfo)
// }
// function Ld(e, t, n, r, o) {
//     return Wr(),
//     Pc(o),
//     t.flags |= 256,
//     He(e, t, n, r),
//     t.child
// }
// var cu = {
//     dehydrated: null,
//     treeContext: null,
//     retryLane: 0
// };
// function fu(e) {
//     return {
//         baseLanes: e,
//         cachePool: null,
//         transitions: null
//     }
// }
// function vg(e, t, n) {
//     var r = t.pendingProps, o = xe.current, i = !1, a = (t.flags & 128) !== 0, s;
//     if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
//     s ? (i = !0,
//     t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
//     le(xe, o & 1),
//     e === null)
//         return ru(t),
//         e = t.memoizedState,
//         e !== null && (e = e.dehydrated,
//         e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
//         null) : (a = r.children,
//         e = r.fallback,
//         i ? (r = t.mode,
//         i = t.child,
//         a = {
//             mode: "hidden",
//             children: a
//         },
//         !(r & 1) && i !== null ? (i.childLanes = 0,
//         i.pendingProps = a) : i = ps(a, r, 0, null),
//         e = Jn(e, r, n, null),
//         i.return = t,
//         e.return = t,
//         i.sibling = e,
//         t.child = i,
//         t.child.memoizedState = fu(n),
//         t.memoizedState = cu,
//         e) : Uc(t, a));
//     if (o = e.memoizedState,
//     o !== null && (s = o.dehydrated,
//     s !== null))
//         return Zy(e, t, a, r, s, o, n);
//     if (i) {
//         i = r.fallback,
//         a = t.mode,
//         o = e.child,
//         s = o.sibling;
//         var l = {
//             mode: "hidden",
//             children: r.children
//         };
//         return !(a & 1) && t.child !== o ? (r = t.child,
//         r.childLanes = 0,
//         r.pendingProps = l,
//         t.deletions = null) : (r = Tn(o, l),
//         r.subtreeFlags = o.subtreeFlags & 14680064),
//         s !== null ? i = Tn(s, i) : (i = Jn(i, a, n, null),
//         i.flags |= 2),
//         i.return = t,
//         r.return = t,
//         r.sibling = i,
//         t.child = r,
//         r = i,
//         i = t.child,
//         a = e.child.memoizedState,
//         a = a === null ? fu(n) : {
//             baseLanes: a.baseLanes | n,
//             cachePool: null,
//             transitions: a.transitions
//         },
//         i.memoizedState = a,
//         i.childLanes = e.childLanes & ~n,
//         t.memoizedState = cu,
//         r
//     }
//     return i = e.child,
//     e = i.sibling,
//     r = Tn(i, {
//         mode: "visible",
//         children: r.children
//     }),
//     !(t.mode & 1) && (r.lanes = n),
//     r.return = t,
//     r.sibling = null,
//     e !== null && (n = t.deletions,
//     n === null ? (t.deletions = [e],
//     t.flags |= 16) : n.push(e)),
//     t.child = r,
//     t.memoizedState = null,
//     r
// }
// function Uc(e, t) {
//     return t = ps({
//         mode: "visible",
//         children: t
//     }, e.mode, 0, null),
//     t.return = e,
//     e.child = t
// }
// function Bi(e, t, n, r) {
//     return r !== null && Pc(r),
//     Vr(t, e.child, null, n),
//     e = Uc(t, t.pendingProps.children),
//     e.flags |= 2,
//     t.memoizedState = null,
//     e
// }
// function Zy(e, t, n, r, o, i, a) {
//     if (n)
//         return t.flags & 256 ? (t.flags &= -257,
//         r = al(Error(R(422))),
//         Bi(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
//         t.flags |= 128,
//         null) : (i = r.fallback,
//         o = t.mode,
//         r = ps({
//             mode: "visible",
//             children: r.children
//         }, o, 0, null),
//         i = Jn(i, o, a, null),
//         i.flags |= 2,
//         r.return = t,
//         i.return = t,
//         r.sibling = i,
//         t.child = r,
//         t.mode & 1 && Vr(t, e.child, null, a),
//         t.child.memoizedState = fu(a),
//         t.memoizedState = cu,
//         i);
//     if (!(t.mode & 1))
//         return Bi(e, t, a, null);
//     if (o.data === "$!") {
//         if (r = o.nextSibling && o.nextSibling.dataset,
//         r)
//             var s = r.dgst;
//         return r = s,
//         i = Error(R(419)),
//         r = al(i, r, void 0),
//         Bi(e, t, a, r)
//     }
//     if (s = (a & e.childLanes) !== 0,
//     Xe || s) {
//         if (r = Re,
//         r !== null) {
//             switch (a & -a) {
//             case 4:
//                 o = 2;
//                 break;
//             case 16:
//                 o = 8;
//                 break;
//             case 64:
//             case 128:
//             case 256:
//             case 512:
//             case 1024:
//             case 2048:
//             case 4096:
//             case 8192:
//             case 16384:
//             case 32768:
//             case 65536:
//             case 131072:
//             case 262144:
//             case 524288:
//             case 1048576:
//             case 2097152:
//             case 4194304:
//             case 8388608:
//             case 16777216:
//             case 33554432:
//             case 67108864:
//                 o = 32;
//                 break;
//             case 536870912:
//                 o = 268435456;
//                 break;
//             default:
//                 o = 0
//             }
//             o = o & (r.suspendedLanes | a) ? 0 : o,
//             o !== 0 && o !== i.retryLane && (i.retryLane = o,
//             Xt(e, o),
//             St(r, e, o, -1))
//         }
//         return Yc(),
//         r = al(Error(R(421))),
//         Bi(e, t, a, r)
//     }
//     return o.data === "$?" ? (t.flags |= 128,
//     t.child = e.child,
//     t = d2.bind(null, e),
//     o._reactRetry = t,
//     null) : (e = i.treeContext,
//     tt = En(o.nextSibling),
//     nt = t,
//     ge = !0,
//     xt = null,
//     e !== null && (ft[dt++] = Ht,
//     ft[dt++] = Wt,
//     ft[dt++] = or,
//     Ht = e.id,
//     Wt = e.overflow,
//     or = t),
//     t = Uc(t, r.children),
//     t.flags |= 4096,
//     t)
// }
// function Rd(e, t, n) {
//     e.lanes |= t;
//     var r = e.alternate;
//     r !== null && (r.lanes |= t),
//     ou(e.return, t, n)
// }
// function sl(e, t, n, r, o) {
//     var i = e.memoizedState;
//     i === null ? e.memoizedState = {
//         isBackwards: t,
//         rendering: null,
//         renderingStartTime: 0,
//         last: r,
//         tail: n,
//         tailMode: o
//     } : (i.isBackwards = t,
//     i.rendering = null,
//     i.renderingStartTime = 0,
//     i.last = r,
//     i.tail = n,
//     i.tailMode = o)
// }
// function yg(e, t, n) {
//     var r = t.pendingProps
//       , o = r.revealOrder
//       , i = r.tail;
//     if (He(e, t, r.children, n),
//     r = xe.current,
//     r & 2)
//         r = r & 1 | 2,
//         t.flags |= 128;
//     else {
//         if (e !== null && e.flags & 128)
//             e: for (e = t.child; e !== null; ) {
//                 if (e.tag === 13)
//                     e.memoizedState !== null && Rd(e, n, t);
//                 else if (e.tag === 19)
//                     Rd(e, n, t);
//                 else if (e.child !== null) {
//                     e.child.return = e,
//                     e = e.child;
//                     continue
//                 }
//                 if (e === t)
//                     break e;
//                 for (; e.sibling === null; ) {
//                     if (e.return === null || e.return === t)
//                         break e;
//                     e = e.return
//                 }
//                 e.sibling.return = e.return,
//                 e = e.sibling
//             }
//         r &= 1
//     }
//     if (le(xe, r),
//     !(t.mode & 1))
//         t.memoizedState = null;
//     else
//         switch (o) {
//         case "forwards":
//             for (n = t.child,
//             o = null; n !== null; )
//                 e = n.alternate,
//                 e !== null && Aa(e) === null && (o = n),
//                 n = n.sibling;
//             n = o,
//             n === null ? (o = t.child,
//             t.child = null) : (o = n.sibling,
//             n.sibling = null),
//             sl(t, !1, o, n, i);
//             break;
//         case "backwards":
//             for (n = null,
//             o = t.child,
//             t.child = null; o !== null; ) {
//                 if (e = o.alternate,
//                 e !== null && Aa(e) === null) {
//                     t.child = o;
//                     break
//                 }
//                 e = o.sibling,
//                 o.sibling = n,
//                 n = o,
//                 o = e
//             }
//             sl(t, !0, n, null, i);
//             break;
//         case "together":
//             sl(t, !1, null, null, void 0);
//             break;
//         default:
//             t.memoizedState = null
//         }
//     return t.child
// }
// function fa(e, t) {
//     !(t.mode & 1) && e !== null && (e.alternate = null,
//     t.alternate = null,
//     t.flags |= 2)
// }
// function qt(e, t, n) {
//     if (e !== null && (t.dependencies = e.dependencies),
//     ar |= t.lanes,
//     !(n & t.childLanes))
//         return null;
//     if (e !== null && t.child !== e.child)
//         throw Error(R(153));
//     if (t.child !== null) {
//         for (e = t.child,
//         n = Tn(e, e.pendingProps),
//         t.child = n,
//         n.return = t; e.sibling !== null; )
//             e = e.sibling,
//             n = n.sibling = Tn(e, e.pendingProps),
//             n.return = t;
//         n.sibling = null
//     }
//     return t.child
// }
// function e2(e, t, n) {
//     switch (t.tag) {
//     case 3:
//         gg(t),
//         Wr();
//         break;
//     case 5:
//         Wm(t);
//         break;
//     case 1:
//         Qe(t.type) && Pa(t);
//         break;
//     case 4:
//         Ac(t, t.stateNode.containerInfo);
//         break;
//     case 10:
//         var r = t.type._context
//           , o = t.memoizedProps.value;
//         le(ja, r._currentValue),
//         r._currentValue = o;
//         break;
//     case 13:
//         if (r = t.memoizedState,
//         r !== null)
//             return r.dehydrated !== null ? (le(xe, xe.current & 1),
//             t.flags |= 128,
//             null) : n & t.child.childLanes ? vg(e, t, n) : (le(xe, xe.current & 1),
//             e = qt(e, t, n),
//             e !== null ? e.sibling : null);
//         le(xe, xe.current & 1);
//         break;
//     case 19:
//         if (r = (n & t.childLanes) !== 0,
//         e.flags & 128) {
//             if (r)
//                 return yg(e, t, n);
//             t.flags |= 128
//         }
//         if (o = t.memoizedState,
//         o !== null && (o.rendering = null,
//         o.tail = null,
//         o.lastEffect = null),
//         le(xe, xe.current),
//         r)
//             break;
//         return null;
//     case 22:
//     case 23:
//         return t.lanes = 0,
//         hg(e, t, n)
//     }
//     return qt(e, t, n)
// }
// var wg, du, xg, bg;
// wg = function(e, t) {
//     for (var n = t.child; n !== null; ) {
//         if (n.tag === 5 || n.tag === 6)
//             e.appendChild(n.stateNode);
//         else if (n.tag !== 4 && n.child !== null) {
//             n.child.return = n,
//             n = n.child;
//             continue
//         }
//         if (n === t)
//             break;
//         for (; n.sibling === null; ) {
//             if (n.return === null || n.return === t)
//                 return;
//             n = n.return
//         }
//         n.sibling.return = n.return,
//         n = n.sibling
//     }
// }
// ;
// du = function() {}
// ;
// xg = function(e, t, n, r) {
//     var o = e.memoizedProps;
//     if (o !== r) {
//         e = t.stateNode,
//         Xn(Mt.current);
//         var i = null;
//         switch (n) {
//         case "input":
//             o = Al(e, o),
//             r = Al(e, r),
//             i = [];
//             break;
//         case "select":
//             o = Se({}, o, {
//                 value: void 0
//             }),
//             r = Se({}, r, {
//                 value: void 0
//             }),
//             i = [];
//             break;
//         case "textarea":
//             o = Dl(e, o),
//             r = Dl(e, r),
//             i = [];
//             break;
//         default:
//             typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Oa)
//         }
//         zl(n, r);
//         var a;
//         n = null;
//         for (u in o)
//             if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
//                 if (u === "style") {
//                     var s = o[u];
//                     for (a in s)
//                         s.hasOwnProperty(a) && (n || (n = {}),
//                         n[a] = "")
//                 } else
//                     u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (zo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
//         for (u in r) {
//             var l = r[u];
//             if (s = o != null ? o[u] : void 0,
//             r.hasOwnProperty(u) && l !== s && (l != null || s != null))
//                 if (u === "style")
//                     if (s) {
//                         for (a in s)
//                             !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
//                             n[a] = "");
//                         for (a in l)
//                             l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}),
//                             n[a] = l[a])
//                     } else
//                         n || (i || (i = []),
//                         i.push(u, n)),
//                         n = l;
//                 else
//                     u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
//                     s = s ? s.__html : void 0,
//                     l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (zo.hasOwnProperty(u) ? (l != null && u === "onScroll" && ce("scroll", e),
//                     i || s === l || (i = [])) : (i = i || []).push(u, l))
//         }
//         n && (i = i || []).push("style", n);
//         var u = i;
//         (t.updateQueue = u) && (t.flags |= 4)
//     }
// }
// ;
// bg = function(e, t, n, r) {
//     n !== r && (t.flags |= 4)
// }
// ;
// function fo(e, t) {
//     if (!ge)
//         switch (e.tailMode) {
//         case "hidden":
//             t = e.tail;
//             for (var n = null; t !== null; )
//                 t.alternate !== null && (n = t),
//                 t = t.sibling;
//             n === null ? e.tail = null : n.sibling = null;
//             break;
//         case "collapsed":
//             n = e.tail;
//             for (var r = null; n !== null; )
//                 n.alternate !== null && (r = n),
//                 n = n.sibling;
//             r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
//         }
// }
// function $e(e) {
//     var t = e.alternate !== null && e.alternate.child === e.child
//       , n = 0
//       , r = 0;
//     if (t)
//         for (var o = e.child; o !== null; )
//             n |= o.lanes | o.childLanes,
//             r |= o.subtreeFlags & 14680064,
//             r |= o.flags & 14680064,
//             o.return = e,
//             o = o.sibling;
//     else
//         for (o = e.child; o !== null; )
//             n |= o.lanes | o.childLanes,
//             r |= o.subtreeFlags,
//             r |= o.flags,
//             o.return = e,
//             o = o.sibling;
//     return e.subtreeFlags |= r,
//     e.childLanes = n,
//     t
// }
// function t2(e, t, n) {
//     var r = t.pendingProps;
//     switch (Nc(t),
//     t.tag) {
//     case 2:
//     case 16:
//     case 15:
//     case 0:
//     case 11:
//     case 7:
//     case 8:
//     case 12:
//     case 9:
//     case 14:
//         return $e(t),
//         null;
//     case 1:
//         return Qe(t.type) && Na(),
//         $e(t),
//         null;
//     case 3:
//         return r = t.stateNode,
//         Kr(),
//         de(qe),
//         de(Fe),
//         Ic(),
//         r.pendingContext && (r.context = r.pendingContext,
//         r.pendingContext = null),
//         (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
//         xt !== null && (xu(xt),
//         xt = null))),
//         du(e, t),
//         $e(t),
//         null;
//     case 5:
//         Mc(t);
//         var o = Xn(Qo.current);
//         if (n = t.type,
//         e !== null && t.stateNode != null)
//             xg(e, t, n, r, o),
//             e.ref !== t.ref && (t.flags |= 512,
//             t.flags |= 2097152);
//         else {
//             if (!r) {
//                 if (t.stateNode === null)
//                     throw Error(R(166));
//                 return $e(t),
//                 null
//             }
//             if (e = Xn(Mt.current),
//             zi(t)) {
//                 r = t.stateNode,
//                 n = t.type;
//                 var i = t.memoizedProps;
//                 switch (r[Tt] = t,
//                 r[Xo] = i,
//                 e = (t.mode & 1) !== 0,
//                 n) {
//                 case "dialog":
//                     ce("cancel", r),
//                     ce("close", r);
//                     break;
//                 case "iframe":
//                 case "object":
//                 case "embed":
//                     ce("load", r);
//                     break;
//                 case "video":
//                 case "audio":
//                     for (o = 0; o < So.length; o++)
//                         ce(So[o], r);
//                     break;
//                 case "source":
//                     ce("error", r);
//                     break;
//                 case "img":
//                 case "image":
//                 case "link":
//                     ce("error", r),
//                     ce("load", r);
//                     break;
//                 case "details":
//                     ce("toggle", r);
//                     break;
//                 case "input":
//                     Uf(r, i),
//                     ce("invalid", r);
//                     break;
//                 case "select":
//                     r._wrapperState = {
//                         wasMultiple: !!i.multiple
//                     },
//                     ce("invalid", r);
//                     break;
//                 case "textarea":
//                     Wf(r, i),
//                     ce("invalid", r)
//                 }
//                 zl(n, i),
//                 o = null;
//                 for (var a in i)
//                     if (i.hasOwnProperty(a)) {
//                         var s = i[a];
//                         a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && $i(r.textContent, s, e),
//                         o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && $i(r.textContent, s, e),
//                         o = ["children", "" + s]) : zo.hasOwnProperty(a) && s != null && a === "onScroll" && ce("scroll", r)
//                     }
//                 switch (n) {
//                 case "input":
//                     _i(r),
//                     Hf(r, i, !0);
//                     break;
//                 case "textarea":
//                     _i(r),
//                     Vf(r);
//                     break;
//                 case "select":
//                 case "option":
//                     break;
//                 default:
//                     typeof i.onClick == "function" && (r.onclick = Oa)
//                 }
//                 r = o,
//                 t.updateQueue = r,
//                 r !== null && (t.flags |= 4)
//             } else {
//                 a = o.nodeType === 9 ? o : o.ownerDocument,
//                 e === "http://www.w3.org/1999/xhtml" && (e = Xh(n)),
//                 e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
//                 e.innerHTML = "<script><\/script>",
//                 e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
//                     is: r.is
//                 }) : (e = a.createElement(n),
//                 n === "select" && (a = e,
//                 r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
//                 e[Tt] = t,
//                 e[Xo] = r,
//                 wg(e, t, !1, !1),
//                 t.stateNode = e;
//                 e: {
//                     switch (a = Fl(n, r),
//                     n) {
//                     case "dialog":
//                         ce("cancel", e),
//                         ce("close", e),
//                         o = r;
//                         break;
//                     case "iframe":
//                     case "object":
//                     case "embed":
//                         ce("load", e),
//                         o = r;
//                         break;
//                     case "video":
//                     case "audio":
//                         for (o = 0; o < So.length; o++)
//                             ce(So[o], e);
//                         o = r;
//                         break;
//                     case "source":
//                         ce("error", e),
//                         o = r;
//                         break;
//                     case "img":
//                     case "image":
//                     case "link":
//                         ce("error", e),
//                         ce("load", e),
//                         o = r;
//                         break;
//                     case "details":
//                         ce("toggle", e),
//                         o = r;
//                         break;
//                     case "input":
//                         Uf(e, r),
//                         o = Al(e, r),
//                         ce("invalid", e);
//                         break;
//                     case "option":
//                         o = r;
//                         break;
//                     case "select":
//                         e._wrapperState = {
//                             wasMultiple: !!r.multiple
//                         },
//                         o = Se({}, r, {
//                             value: void 0
//                         }),
//                         ce("invalid", e);
//                         break;
//                     case "textarea":
//                         Wf(e, r),
//                         o = Dl(e, r),
//                         ce("invalid", e);
//                         break;
//                     default:
//                         o = r
//                     }
//                     zl(n, o),
//                     s = o;
//                     for (i in s)
//                         if (s.hasOwnProperty(i)) {
//                             var l = s[i];
//                             i === "style" ? Jh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
//                             l != null && qh(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Fo(e, l) : typeof l == "number" && Fo(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (zo.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && dc(e, i, l, a))
//                         }
//                     switch (n) {
//                     case "input":
//                         _i(e),
//                         Hf(e, r, !1);
//                         break;
//                     case "textarea":
//                         _i(e),
//                         Vf(e);
//                         break;
//                     case "option":
//                         r.value != null && e.setAttribute("value", "" + _n(r.value));
//                         break;
//                     case "select":
//                         e.multiple = !!r.multiple,
//                         i = r.value,
//                         i != null ? Mr(e, !!r.multiple, i, !1) : r.defaultValue != null && Mr(e, !!r.multiple, r.defaultValue, !0);
//                         break;
//                     default:
//                         typeof o.onClick == "function" && (e.onclick = Oa)
//                     }
//                     switch (n) {
//                     case "button":
//                     case "input":
//                     case "select":
//                     case "textarea":
//                         r = !!r.autoFocus;
//                         break e;
//                     case "img":
//                         r = !0;
//                         break e;
//                     default:
//                         r = !1
//                     }
//                 }
//                 r && (t.flags |= 4)
//             }
//             t.ref !== null && (t.flags |= 512,
//             t.flags |= 2097152)
//         }
//         return $e(t),
//         null;
//     case 6:
//         if (e && t.stateNode != null)
//             bg(e, t, e.memoizedProps, r);
//         else {
//             if (typeof r != "string" && t.stateNode === null)
//                 throw Error(R(166));
//             if (n = Xn(Qo.current),
//             Xn(Mt.current),
//             zi(t)) {
//                 if (r = t.stateNode,
//                 n = t.memoizedProps,
//                 r[Tt] = t,
//                 (i = r.nodeValue !== n) && (e = nt,
//                 e !== null))
//                     switch (e.tag) {
//                     case 3:
//                         $i(r.nodeValue, n, (e.mode & 1) !== 0);
//                         break;
//                     case 5:
//                         e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0)
//                     }
//                 i && (t.flags |= 4)
//             } else
//                 r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
//                 r[Tt] = t,
//                 t.stateNode = r
//         }
//         return $e(t),
//         null;
//     case 13:
//         if (de(xe),
//         r = t.memoizedState,
//         e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
//             if (ge && tt !== null && t.mode & 1 && !(t.flags & 128))
//                 zm(),
//                 Wr(),
//                 t.flags |= 98560,
//                 i = !1;
//             else if (i = zi(t),
//             r !== null && r.dehydrated !== null) {
//                 if (e === null) {
//                     if (!i)
//                         throw Error(R(318));
//                     if (i = t.memoizedState,
//                     i = i !== null ? i.dehydrated : null,
//                     !i)
//                         throw Error(R(317));
//                     i[Tt] = t
//                 } else
//                     Wr(),
//                     !(t.flags & 128) && (t.memoizedState = null),
//                     t.flags |= 4;
//                 $e(t),
//                 i = !1
//             } else
//                 xt !== null && (xu(xt),
//                 xt = null),
//                 i = !0;
//             if (!i)
//                 return t.flags & 65536 ? t : null
//         }
//         return t.flags & 128 ? (t.lanes = n,
//         t) : (r = r !== null,
//         r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
//         t.mode & 1 && (e === null || xe.current & 1 ? _e === 0 && (_e = 3) : Yc())),
//         t.updateQueue !== null && (t.flags |= 4),
//         $e(t),
//         null);
//     case 4:
//         return Kr(),
//         du(e, t),
//         e === null && Go(t.stateNode.containerInfo),
//         $e(t),
//         null;
//     case 10:
//         return jc(t.type._context),
//         $e(t),
//         null;
//     case 17:
//         return Qe(t.type) && Na(),
//         $e(t),
//         null;
//     case 19:
//         if (de(xe),
//         i = t.memoizedState,
//         i === null)
//             return $e(t),
//             null;
//         if (r = (t.flags & 128) !== 0,
//         a = i.rendering,
//         a === null)
//             if (r)
//                 fo(i, !1);
//             else {
//                 if (_e !== 0 || e !== null && e.flags & 128)
//                     for (e = t.child; e !== null; ) {
//                         if (a = Aa(e),
//                         a !== null) {
//                             for (t.flags |= 128,
//                             fo(i, !1),
//                             r = a.updateQueue,
//                             r !== null && (t.updateQueue = r,
//                             t.flags |= 4),
//                             t.subtreeFlags = 0,
//                             r = n,
//                             n = t.child; n !== null; )
//                                 i = n,
//                                 e = r,
//                                 i.flags &= 14680066,
//                                 a = i.alternate,
//                                 a === null ? (i.childLanes = 0,
//                                 i.lanes = e,
//                                 i.child = null,
//                                 i.subtreeFlags = 0,
//                                 i.memoizedProps = null,
//                                 i.memoizedState = null,
//                                 i.updateQueue = null,
//                                 i.dependencies = null,
//                                 i.stateNode = null) : (i.childLanes = a.childLanes,
//                                 i.lanes = a.lanes,
//                                 i.child = a.child,
//                                 i.subtreeFlags = 0,
//                                 i.deletions = null,
//                                 i.memoizedProps = a.memoizedProps,
//                                 i.memoizedState = a.memoizedState,
//                                 i.updateQueue = a.updateQueue,
//                                 i.type = a.type,
//                                 e = a.dependencies,
//                                 i.dependencies = e === null ? null : {
//                                     lanes: e.lanes,
//                                     firstContext: e.firstContext
//                                 }),
//                                 n = n.sibling;
//                             return le(xe, xe.current & 1 | 2),
//                             t.child
//                         }
//                         e = e.sibling
//                     }
//                 i.tail !== null && Oe() > Yr && (t.flags |= 128,
//                 r = !0,
//                 fo(i, !1),
//                 t.lanes = 4194304)
//             }
//         else {
//             if (!r)
//                 if (e = Aa(a),
//                 e !== null) {
//                     if (t.flags |= 128,
//                     r = !0,
//                     n = e.updateQueue,
//                     n !== null && (t.updateQueue = n,
//                     t.flags |= 4),
//                     fo(i, !0),
//                     i.tail === null && i.tailMode === "hidden" && !a.alternate && !ge)
//                         return $e(t),
//                         null
//                 } else
//                     2 * Oe() - i.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128,
//                     r = !0,
//                     fo(i, !1),
//                     t.lanes = 4194304);
//             i.isBackwards ? (a.sibling = t.child,
//             t.child = a) : (n = i.last,
//             n !== null ? n.sibling = a : t.child = a,
//             i.last = a)
//         }
//         return i.tail !== null ? (t = i.tail,
//         i.rendering = t,
//         i.tail = t.sibling,
//         i.renderingStartTime = Oe(),
//         t.sibling = null,
//         n = xe.current,
//         le(xe, r ? n & 1 | 2 : n & 1),
//         t) : ($e(t),
//         null);
//     case 22:
//     case 23:
//         return Gc(),
//         r = t.memoizedState !== null,
//         e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
//         r && t.mode & 1 ? Ze & 1073741824 && ($e(t),
//         t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t),
//         null;
//     case 24:
//         return null;
//     case 25:
//         return null
//     }
//     throw Error(R(156, t.tag))
// }
// function n2(e, t) {
//     switch (Nc(t),
//     t.tag) {
//     case 1:
//         return Qe(t.type) && Na(),
//         e = t.flags,
//         e & 65536 ? (t.flags = e & -65537 | 128,
//         t) : null;
//     case 3:
//         return Kr(),
//         de(qe),
//         de(Fe),
//         Ic(),
//         e = t.flags,
//         e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
//         t) : null;
//     case 5:
//         return Mc(t),
//         null;
//     case 13:
//         if (de(xe),
//         e = t.memoizedState,
//         e !== null && e.dehydrated !== null) {
//             if (t.alternate === null)
//                 throw Error(R(340));
//             Wr()
//         }
//         return e = t.flags,
//         e & 65536 ? (t.flags = e & -65537 | 128,
//         t) : null;
//     case 19:
//         return de(xe),
//         null;
//     case 4:
//         return Kr(),
//         null;
//     case 10:
//         return jc(t.type._context),
//         null;
//     case 22:
//     case 23:
//         return Gc(),
//         null;
//     case 24:
//         return null;
//     default:
//         return null
//     }
// }
// var Ui = !1
//   , ze = !1
//   , r2 = typeof WeakSet == "function" ? WeakSet : Set
//   , $ = null;
// function _r(e, t) {
//     var n = e.ref;
//     if (n !== null)
//         if (typeof n == "function")
//             try {
//                 n(null)
//             } catch (r) {
//                 Ee(e, t, r)
//             }
//         else
//             n.current = null
// }
// function pu(e, t, n) {
//     try {
//         n()
//     } catch (r) {
//         Ee(e, t, r)
//     }
// }
// var Ad = !1;
// function o2(e, t) {
//     if (ql = ka,
//     e = Om(),
//     Ec(e)) {
//         if ("selectionStart"in e)
//             var n = {
//                 start: e.selectionStart,
//                 end: e.selectionEnd
//             };
//         else
//             e: {
//                 n = (n = e.ownerDocument) && n.defaultView || window;
//                 var r = n.getSelection && n.getSelection();
//                 if (r && r.rangeCount !== 0) {
//                     n = r.anchorNode;
//                     var o = r.anchorOffset
//                       , i = r.focusNode;
//                     r = r.focusOffset;
//                     try {
//                         n.nodeType,
//                         i.nodeType
//                     } catch {
//                         n = null;
//                         break e
//                     }
//                     var a = 0
//                       , s = -1
//                       , l = -1
//                       , u = 0
//                       , c = 0
//                       , d = e
//                       , f = null;
//                     t: for (; ; ) {
//                         for (var m; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o),
//                         d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r),
//                         d.nodeType === 3 && (a += d.nodeValue.length),
//                         (m = d.firstChild) !== null; )
//                             f = d,
//                             d = m;
//                         for (; ; ) {
//                             if (d === e)
//                                 break t;
//                             if (f === n && ++u === o && (s = a),
//                             f === i && ++c === r && (l = a),
//                             (m = d.nextSibling) !== null)
//                                 break;
//                             d = f,
//                             f = d.parentNode
//                         }
//                         d = m
//                     }
//                     n = s === -1 || l === -1 ? null : {
//                         start: s,
//                         end: l
//                     }
//                 } else
//                     n = null
//             }
//         n = n || {
//             start: 0,
//             end: 0
//         }
//     } else
//         n = null;
//     for (Ql = {
//         focusedElem: e,
//         selectionRange: n
//     },
//     ka = !1,
//     $ = t; $ !== null; )
//         if (t = $,
//         e = t.child,
//         (t.subtreeFlags & 1028) !== 0 && e !== null)
//             e.return = t,
//             $ = e;
//         else
//             for (; $ !== null; ) {
//                 t = $;
//                 try {
//                     var v = t.alternate;
//                     if (t.flags & 1024)
//                         switch (t.tag) {
//                         case 0:
//                         case 11:
//                         case 15:
//                             break;
//                         case 1:
//                             if (v !== null) {
//                                 var x = v.memoizedProps
//                                   , k = v.memoizedState
//                                   , h = t.stateNode
//                                   , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : yt(t.type, x), k);
//                                 h.__reactInternalSnapshotBeforeUpdate = p
//                             }
//                             break;
//                         case 3:
//                             var w = t.stateNode.containerInfo;
//                             w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
//                             break;
//                         case 5:
//                         case 6:
//                         case 4:
//                         case 17:
//                             break;
//                         default:
//                             throw Error(R(163))
//                         }
//                 } catch (b) {
//                     Ee(t, t.return, b)
//                 }
//                 if (e = t.sibling,
//                 e !== null) {
//                     e.return = t.return,
//                     $ = e;
//                     break
//                 }
//                 $ = t.return
//             }
//     return v = Ad,
//     Ad = !1,
//     v
// }
// function Ro(e, t, n) {
//     var r = t.updateQueue;
//     if (r = r !== null ? r.lastEffect : null,
//     r !== null) {
//         var o = r = r.next;
//         do {
//             if ((o.tag & e) === e) {
//                 var i = o.destroy;
//                 o.destroy = void 0,
//                 i !== void 0 && pu(t, n, i)
//             }
//             o = o.next
//         } while (o !== r)
//     }
// }
// function fs(e, t) {
//     if (t = t.updateQueue,
//     t = t !== null ? t.lastEffect : null,
//     t !== null) {
//         var n = t = t.next;
//         do {
//             if ((n.tag & e) === e) {
//                 var r = n.create;
//                 n.destroy = r()
//             }
//             n = n.next
//         } while (n !== t)
//     }
// }
// function hu(e) {
//     var t = e.ref;
//     if (t !== null) {
//         var n = e.stateNode;
//         switch (e.tag) {
//         case 5:
//             e = n;
//             break;
//         default:
//             e = n
//         }
//         typeof t == "function" ? t(e) : t.current = e
//     }
// }
// function Sg(e) {
//     var t = e.alternate;
//     t !== null && (e.alternate = null,
//     Sg(t)),
//     e.child = null,
//     e.deletions = null,
//     e.sibling = null,
//     e.tag === 5 && (t = e.stateNode,
//     t !== null && (delete t[Tt],
//     delete t[Xo],
//     delete t[eu],
//     delete t[Fy],
//     delete t[By])),
//     e.stateNode = null,
//     e.return = null,
//     e.dependencies = null,
//     e.memoizedProps = null,
//     e.memoizedState = null,
//     e.pendingProps = null,
//     e.stateNode = null,
//     e.updateQueue = null
// }
// function kg(e) {
//     return e.tag === 5 || e.tag === 3 || e.tag === 4
// }
// function Md(e) {
//     e: for (; ; ) {
//         for (; e.sibling === null; ) {
//             if (e.return === null || kg(e.return))
//                 return null;
//             e = e.return
//         }
//         for (e.sibling.return = e.return,
//         e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
//             if (e.flags & 2 || e.child === null || e.tag === 4)
//                 continue e;
//             e.child.return = e,
//             e = e.child
//         }
//         if (!(e.flags & 2))
//             return e.stateNode
//     }
// }
// function mu(e, t, n) {
//     var r = e.tag;
//     if (r === 5 || r === 6)
//         e = e.stateNode,
//         t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
//         t.insertBefore(e, n)) : (t = n,
//         t.appendChild(e)),
//         n = n._reactRootContainer,
//         n != null || t.onclick !== null || (t.onclick = Oa));
//     else if (r !== 4 && (e = e.child,
//     e !== null))
//         for (mu(e, t, n),
//         e = e.sibling; e !== null; )
//             mu(e, t, n),
//             e = e.sibling
// }
// function gu(e, t, n) {
//     var r = e.tag;
//     if (r === 5 || r === 6)
//         e = e.stateNode,
//         t ? n.insertBefore(e, t) : n.appendChild(e);
//     else if (r !== 4 && (e = e.child,
//     e !== null))
//         for (gu(e, t, n),
//         e = e.sibling; e !== null; )
//             gu(e, t, n),
//             e = e.sibling
// }
// var Ae = null
//   , wt = !1;
// function sn(e, t, n) {
//     for (n = n.child; n !== null; )
//         Cg(e, t, n),
//         n = n.sibling
// }
// function Cg(e, t, n) {
//     if (At && typeof At.onCommitFiberUnmount == "function")
//         try {
//             At.onCommitFiberUnmount(rs, n)
//         } catch {}
//     switch (n.tag) {
//     case 5:
//         ze || _r(n, t);
//     case 6:
//         var r = Ae
//           , o = wt;
//         Ae = null,
//         sn(e, t, n),
//         Ae = r,
//         wt = o,
//         Ae !== null && (wt ? (e = Ae,
//         n = n.stateNode,
//         e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
//         break;
//     case 18:
//         Ae !== null && (wt ? (e = Ae,
//         n = n.stateNode,
//         e.nodeType === 8 ? el(e.parentNode, n) : e.nodeType === 1 && el(e, n),
//         Wo(e)) : el(Ae, n.stateNode));
//         break;
//     case 4:
//         r = Ae,
//         o = wt,
//         Ae = n.stateNode.containerInfo,
//         wt = !0,
//         sn(e, t, n),
//         Ae = r,
//         wt = o;
//         break;
//     case 0:
//     case 11:
//     case 14:
//     case 15:
//         if (!ze && (r = n.updateQueue,
//         r !== null && (r = r.lastEffect,
//         r !== null))) {
//             o = r = r.next;
//             do {
//                 var i = o
//                   , a = i.destroy;
//                 i = i.tag,
//                 a !== void 0 && (i & 2 || i & 4) && pu(n, t, a),
//                 o = o.next
//             } while (o !== r)
//         }
//         sn(e, t, n);
//         break;
//     case 1:
//         if (!ze && (_r(n, t),
//         r = n.stateNode,
//         typeof r.componentWillUnmount == "function"))
//             try {
//                 r.props = n.memoizedProps,
//                 r.state = n.memoizedState,
//                 r.componentWillUnmount()
//             } catch (s) {
//                 Ee(n, t, s)
//             }
//         sn(e, t, n);
//         break;
//     case 21:
//         sn(e, t, n);
//         break;
//     case 22:
//         n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null,
//         sn(e, t, n),
//         ze = r) : sn(e, t, n);
//         break;
//     default:
//         sn(e, t, n)
//     }
// }
// function Id(e) {
//     var t = e.updateQueue;
//     if (t !== null) {
//         e.updateQueue = null;
//         var n = e.stateNode;
//         n === null && (n = e.stateNode = new r2),
//         t.forEach(function(r) {
//             var o = p2.bind(null, e, r);
//             n.has(r) || (n.add(r),
//             r.then(o, o))
//         })
//     }
// }
// function vt(e, t) {
//     var n = t.deletions;
//     if (n !== null)
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             try {
//                 var i = e
//                   , a = t
//                   , s = a;
//                 e: for (; s !== null; ) {
//                     switch (s.tag) {
//                     case 5:
//                         Ae = s.stateNode,
//                         wt = !1;
//                         break e;
//                     case 3:
//                         Ae = s.stateNode.containerInfo,
//                         wt = !0;
//                         break e;
//                     case 4:
//                         Ae = s.stateNode.containerInfo,
//                         wt = !0;
//                         break e
//                     }
//                     s = s.return
//                 }
//                 if (Ae === null)
//                     throw Error(R(160));
//                 Cg(i, a, o),
//                 Ae = null,
//                 wt = !1;
//                 var l = o.alternate;
//                 l !== null && (l.return = null),
//                 o.return = null
//             } catch (u) {
//                 Ee(o, t, u)
//             }
//         }
//     if (t.subtreeFlags & 12854)
//         for (t = t.child; t !== null; )
//             Eg(t, e),
//             t = t.sibling
// }
// function Eg(e, t) {
//     var n = e.alternate
//       , r = e.flags;
//     switch (e.tag) {
//     case 0:
//     case 11:
//     case 14:
//     case 15:
//         if (vt(t, e),
//         Et(e),
//         r & 4) {
//             try {
//                 Ro(3, e, e.return),
//                 fs(3, e)
//             } catch (x) {
//                 Ee(e, e.return, x)
//             }
//             try {
//                 Ro(5, e, e.return)
//             } catch (x) {
//                 Ee(e, e.return, x)
//             }
//         }
//         break;
//     case 1:
//         vt(t, e),
//         Et(e),
//         r & 512 && n !== null && _r(n, n.return);
//         break;
//     case 5:
//         if (vt(t, e),
//         Et(e),
//         r & 512 && n !== null && _r(n, n.return),
//         e.flags & 32) {
//             var o = e.stateNode;
//             try {
//                 Fo(o, "")
//             } catch (x) {
//                 Ee(e, e.return, x)
//             }
//         }
//         if (r & 4 && (o = e.stateNode,
//         o != null)) {
//             var i = e.memoizedProps
//               , a = n !== null ? n.memoizedProps : i
//               , s = e.type
//               , l = e.updateQueue;
//             if (e.updateQueue = null,
//             l !== null)
//                 try {
//                     s === "input" && i.type === "radio" && i.name != null && Gh(o, i),
//                     Fl(s, a);
//                     var u = Fl(s, i);
//                     for (a = 0; a < l.length; a += 2) {
//                         var c = l[a]
//                           , d = l[a + 1];
//                         c === "style" ? Jh(o, d) : c === "dangerouslySetInnerHTML" ? qh(o, d) : c === "children" ? Fo(o, d) : dc(o, c, d, u)
//                     }
//                     switch (s) {
//                     case "input":
//                         Ml(o, i);
//                         break;
//                     case "textarea":
//                         Yh(o, i);
//                         break;
//                     case "select":
//                         var f = o._wrapperState.wasMultiple;
//                         o._wrapperState.wasMultiple = !!i.multiple;
//                         var m = i.value;
//                         m != null ? Mr(o, !!i.multiple, m, !1) : f !== !!i.multiple && (i.defaultValue != null ? Mr(o, !!i.multiple, i.defaultValue, !0) : Mr(o, !!i.multiple, i.multiple ? [] : "", !1))
//                     }
//                     o[Xo] = i
//                 } catch (x) {
//                     Ee(e, e.return, x)
//                 }
//         }
//         break;
//     case 6:
//         if (vt(t, e),
//         Et(e),
//         r & 4) {
//             if (e.stateNode === null)
//                 throw Error(R(162));
//             o = e.stateNode,
//             i = e.memoizedProps;
//             try {
//                 o.nodeValue = i
//             } catch (x) {
//                 Ee(e, e.return, x)
//             }
//         }
//         break;
//     case 3:
//         if (vt(t, e),
//         Et(e),
//         r & 4 && n !== null && n.memoizedState.isDehydrated)
//             try {
//                 Wo(t.containerInfo)
//             } catch (x) {
//                 Ee(e, e.return, x)
//             }
//         break;
//     case 4:
//         vt(t, e),
//         Et(e);
//         break;
//     case 13:
//         vt(t, e),
//         Et(e),
//         o = e.child,
//         o.flags & 8192 && (i = o.memoizedState !== null,
//         o.stateNode.isHidden = i,
//         !i || o.alternate !== null && o.alternate.memoizedState !== null || (Vc = Oe())),
//         r & 4 && Id(e);
//         break;
//     case 22:
//         if (c = n !== null && n.memoizedState !== null,
//         e.mode & 1 ? (ze = (u = ze) || c,
//         vt(t, e),
//         ze = u) : vt(t, e),
//         Et(e),
//         r & 8192) {
//             if (u = e.memoizedState !== null,
//             (e.stateNode.isHidden = u) && !c && e.mode & 1)
//                 for ($ = e,
//                 c = e.child; c !== null; ) {
//                     for (d = $ = c; $ !== null; ) {
//                         switch (f = $,
//                         m = f.child,
//                         f.tag) {
//                         case 0:
//                         case 11:
//                         case 14:
//                         case 15:
//                             Ro(4, f, f.return);
//                             break;
//                         case 1:
//                             _r(f, f.return);
//                             var v = f.stateNode;
//                             if (typeof v.componentWillUnmount == "function") {
//                                 r = f,
//                                 n = f.return;
//                                 try {
//                                     t = r,
//                                     v.props = t.memoizedProps,
//                                     v.state = t.memoizedState,
//                                     v.componentWillUnmount()
//                                 } catch (x) {
//                                     Ee(r, n, x)
//                                 }
//                             }
//                             break;
//                         case 5:
//                             _r(f, f.return);
//                             break;
//                         case 22:
//                             if (f.memoizedState !== null) {
//                                 $d(d);
//                                 continue
//                             }
//                         }
//                         m !== null ? (m.return = f,
//                         $ = m) : $d(d)
//                     }
//                     c = c.sibling
//                 }
//             e: for (c = null,
//             d = e; ; ) {
//                 if (d.tag === 5) {
//                     if (c === null) {
//                         c = d;
//                         try {
//                             o = d.stateNode,
//                             u ? (i = o.style,
//                             typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode,
//                             l = d.memoizedProps.style,
//                             a = l != null && l.hasOwnProperty("display") ? l.display : null,
//                             s.style.display = Qh("display", a))
//                         } catch (x) {
//                             Ee(e, e.return, x)
//                         }
//                     }
//                 } else if (d.tag === 6) {
//                     if (c === null)
//                         try {
//                             d.stateNode.nodeValue = u ? "" : d.memoizedProps
//                         } catch (x) {
//                             Ee(e, e.return, x)
//                         }
//                 } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
//                     d.child.return = d,
//                     d = d.child;
//                     continue
//                 }
//                 if (d === e)
//                     break e;
//                 for (; d.sibling === null; ) {
//                     if (d.return === null || d.return === e)
//                         break e;
//                     c === d && (c = null),
//                     d = d.return
//                 }
//                 c === d && (c = null),
//                 d.sibling.return = d.return,
//                 d = d.sibling
//             }
//         }
//         break;
//     case 19:
//         vt(t, e),
//         Et(e),
//         r & 4 && Id(e);
//         break;
//     case 21:
//         break;
//     default:
//         vt(t, e),
//         Et(e)
//     }
// }
// function Et(e) {
//     var t = e.flags;
//     if (t & 2) {
//         try {
//             e: {
//                 for (var n = e.return; n !== null; ) {
//                     if (kg(n)) {
//                         var r = n;
//                         break e
//                     }
//                     n = n.return
//                 }
//                 throw Error(R(160))
//             }
//             switch (r.tag) {
//             case 5:
//                 var o = r.stateNode;
//                 r.flags & 32 && (Fo(o, ""),
//                 r.flags &= -33);
//                 var i = Md(e);
//                 gu(e, i, o);
//                 break;
//             case 3:
//             case 4:
//                 var a = r.stateNode.containerInfo
//                   , s = Md(e);
//                 mu(e, s, a);
//                 break;
//             default:
//                 throw Error(R(161))
//             }
//         } catch (l) {
//             Ee(e, e.return, l)
//         }
//         e.flags &= -3
//     }
//     t & 4096 && (e.flags &= -4097)
// }
// function i2(e, t, n) {
//     $ = e,
//     Og(e)
// }
// function Og(e, t, n) {
//     for (var r = (e.mode & 1) !== 0; $ !== null; ) {
//         var o = $
//           , i = o.child;
//         if (o.tag === 22 && r) {
//             var a = o.memoizedState !== null || Ui;
//             if (!a) {
//                 var s = o.alternate
//                   , l = s !== null && s.memoizedState !== null || ze;
//                 s = Ui;
//                 var u = ze;
//                 if (Ui = a,
//                 (ze = l) && !u)
//                     for ($ = o; $ !== null; )
//                         a = $,
//                         l = a.child,
//                         a.tag === 22 && a.memoizedState !== null ? zd(o) : l !== null ? (l.return = a,
//                         $ = l) : zd(o);
//                 for (; i !== null; )
//                     $ = i,
//                     Og(i),
//                     i = i.sibling;
//                 $ = o,
//                 Ui = s,
//                 ze = u
//             }
//             Dd(e)
//         } else
//             o.subtreeFlags & 8772 && i !== null ? (i.return = o,
//             $ = i) : Dd(e)
//     }
// }
// function Dd(e) {
//     for (; $ !== null; ) {
//         var t = $;
//         if (t.flags & 8772) {
//             var n = t.alternate;
//             try {
//                 if (t.flags & 8772)
//                     switch (t.tag) {
//                     case 0:
//                     case 11:
//                     case 15:
//                         ze || fs(5, t);
//                         break;
//                     case 1:
//                         var r = t.stateNode;
//                         if (t.flags & 4 && !ze)
//                             if (n === null)
//                                 r.componentDidMount();
//                             else {
//                                 var o = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
//                                 r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
//                             }
//                         var i = t.updateQueue;
//                         i !== null && bd(t, i, r);
//                         break;
//                     case 3:
//                         var a = t.updateQueue;
//                         if (a !== null) {
//                             if (n = null,
//                             t.child !== null)
//                                 switch (t.child.tag) {
//                                 case 5:
//                                     n = t.child.stateNode;
//                                     break;
//                                 case 1:
//                                     n = t.child.stateNode
//                                 }
//                             bd(t, a, n)
//                         }
//                         break;
//                     case 5:
//                         var s = t.stateNode;
//                         if (n === null && t.flags & 4) {
//                             n = s;
//                             var l = t.memoizedProps;
//                             switch (t.type) {
//                             case "button":
//                             case "input":
//                             case "select":
//                             case "textarea":
//                                 l.autoFocus && n.focus();
//                                 break;
//                             case "img":
//                                 l.src && (n.src = l.src)
//                             }
//                         }
//                         break;
//                     case 6:
//                         break;
//                     case 4:
//                         break;
//                     case 12:
//                         break;
//                     case 13:
//                         if (t.memoizedState === null) {
//                             var u = t.alternate;
//                             if (u !== null) {
//                                 var c = u.memoizedState;
//                                 if (c !== null) {
//                                     var d = c.dehydrated;
//                                     d !== null && Wo(d)
//                                 }
//                             }
//                         }
//                         break;
//                     case 19:
//                     case 17:
//                     case 21:
//                     case 22:
//                     case 23:
//                     case 25:
//                         break;
//                     default:
//                         throw Error(R(163))
//                     }
//                 ze || t.flags & 512 && hu(t)
//             } catch (f) {
//                 Ee(t, t.return, f)
//             }
//         }
//         if (t === e) {
//             $ = null;
//             break
//         }
//         if (n = t.sibling,
//         n !== null) {
//             n.return = t.return,
//             $ = n;
//             break
//         }
//         $ = t.return
//     }
// }
// function $d(e) {
//     for (; $ !== null; ) {
//         var t = $;
//         if (t === e) {
//             $ = null;
//             break
//         }
//         var n = t.sibling;
//         if (n !== null) {
//             n.return = t.return,
//             $ = n;
//             break
//         }
//         $ = t.return
//     }
// }
// function zd(e) {
//     for (; $ !== null; ) {
//         var t = $;
//         try {
//             switch (t.tag) {
//             case 0:
//             case 11:
//             case 15:
//                 var n = t.return;
//                 try {
//                     fs(4, t)
//                 } catch (l) {
//                     Ee(t, n, l)
//                 }
//                 break;
//             case 1:
//                 var r = t.stateNode;
//                 if (typeof r.componentDidMount == "function") {
//                     var o = t.return;
//                     try {
//                         r.componentDidMount()
//                     } catch (l) {
//                         Ee(t, o, l)
//                     }
//                 }
//                 var i = t.return;
//                 try {
//                     hu(t)
//                 } catch (l) {
//                     Ee(t, i, l)
//                 }
//                 break;
//             case 5:
//                 var a = t.return;
//                 try {
//                     hu(t)
//                 } catch (l) {
//                     Ee(t, a, l)
//                 }
//             }
//         } catch (l) {
//             Ee(t, t.return, l)
//         }
//         if (t === e) {
//             $ = null;
//             break
//         }
//         var s = t.sibling;
//         if (s !== null) {
//             s.return = t.return,
//             $ = s;
//             break
//         }
//         $ = t.return
//     }
// }
// var a2 = Math.ceil
//   , Da = nn.ReactCurrentDispatcher
//   , Hc = nn.ReactCurrentOwner
//   , ht = nn.ReactCurrentBatchConfig
//   , ee = 0
//   , Re = null
//   , Pe = null
//   , Me = 0
//   , Ze = 0
//   , jr = Dn(0)
//   , _e = 0
//   , ti = null
//   , ar = 0
//   , ds = 0
//   , Wc = 0
//   , Ao = null
//   , Ge = null
//   , Vc = 0
//   , Yr = 1 / 0
//   , Bt = null
//   , $a = !1
//   , vu = null
//   , Nn = null
//   , Hi = !1
//   , wn = null
//   , za = 0
//   , Mo = 0
//   , yu = null
//   , da = -1
//   , pa = 0;
// function We() {
//     return ee & 6 ? Oe() : da !== -1 ? da : da = Oe()
// }
// function Pn(e) {
//     return e.mode & 1 ? ee & 2 && Me !== 0 ? Me & -Me : Hy.transition !== null ? (pa === 0 && (pa = cm()),
//     pa) : (e = oe,
//     e !== 0 || (e = window.event,
//     e = e === void 0 ? 16 : vm(e.type)),
//     e) : 1
// }
// function St(e, t, n, r) {
//     if (50 < Mo)
//         throw Mo = 0,
//         yu = null,
//         Error(R(185));
//     ci(e, n, r),
//     (!(ee & 2) || e !== Re) && (e === Re && (!(ee & 2) && (ds |= n),
//     _e === 4 && vn(e, Me)),
//     Je(e, r),
//     n === 1 && ee === 0 && !(t.mode & 1) && (Yr = Oe() + 500,
//     ls && $n()))
// }
// function Je(e, t) {
//     var n = e.callbackNode;
//     H0(e, t);
//     var r = Sa(e, e === Re ? Me : 0);
//     if (r === 0)
//         n !== null && Yf(n),
//         e.callbackNode = null,
//         e.callbackPriority = 0;
//     else if (t = r & -r,
//     e.callbackPriority !== t) {
//         if (n != null && Yf(n),
//         t === 1)
//             e.tag === 0 ? Uy(Fd.bind(null, e)) : Im(Fd.bind(null, e)),
//             $y(function() {
//                 !(ee & 6) && $n()
//             }),
//             n = null;
//         else {
//             switch (fm(r)) {
//             case 1:
//                 n = vc;
//                 break;
//             case 4:
//                 n = lm;
//                 break;
//             case 16:
//                 n = ba;
//                 break;
//             case 536870912:
//                 n = um;
//                 break;
//             default:
//                 n = ba
//             }
//             n = Ag(n, Ng.bind(null, e))
//         }
//         e.callbackPriority = t,
//         e.callbackNode = n
//     }
// }
// function Ng(e, t) {
//     if (da = -1,
//     pa = 0,
//     ee & 6)
//         throw Error(R(327));
//     var n = e.callbackNode;
//     if (Fr() && e.callbackNode !== n)
//         return null;
//     var r = Sa(e, e === Re ? Me : 0);
//     if (r === 0)
//         return null;
//     if (r & 30 || r & e.expiredLanes || t)
//         t = Fa(e, r);
//     else {
//         t = r;
//         var o = ee;
//         ee |= 2;
//         var i = Tg();
//         (Re !== e || Me !== t) && (Bt = null,
//         Yr = Oe() + 500,
//         Qn(e, t));
//         do
//             try {
//                 u2();
//                 break
//             } catch (s) {
//                 Pg(e, s)
//             }
//         while (!0);
//         _c(),
//         Da.current = i,
//         ee = o,
//         Pe !== null ? t = 0 : (Re = null,
//         Me = 0,
//         t = _e)
//     }
//     if (t !== 0) {
//         if (t === 2 && (o = Vl(e),
//         o !== 0 && (r = o,
//         t = wu(e, o))),
//         t === 1)
//             throw n = ti,
//             Qn(e, 0),
//             vn(e, r),
//             Je(e, Oe()),
//             n;
//         if (t === 6)
//             vn(e, r);
//         else {
//             if (o = e.current.alternate,
//             !(r & 30) && !s2(o) && (t = Fa(e, r),
//             t === 2 && (i = Vl(e),
//             i !== 0 && (r = i,
//             t = wu(e, i))),
//             t === 1))
//                 throw n = ti,
//                 Qn(e, 0),
//                 vn(e, r),
//                 Je(e, Oe()),
//                 n;
//             switch (e.finishedWork = o,
//             e.finishedLanes = r,
//             t) {
//             case 0:
//             case 1:
//                 throw Error(R(345));
//             case 2:
//                 Hn(e, Ge, Bt);
//                 break;
//             case 3:
//                 if (vn(e, r),
//                 (r & 130023424) === r && (t = Vc + 500 - Oe(),
//                 10 < t)) {
//                     if (Sa(e, 0) !== 0)
//                         break;
//                     if (o = e.suspendedLanes,
//                     (o & r) !== r) {
//                         We(),
//                         e.pingedLanes |= e.suspendedLanes & o;
//                         break
//                     }
//                     e.timeoutHandle = Zl(Hn.bind(null, e, Ge, Bt), t);
//                     break
//                 }
//                 Hn(e, Ge, Bt);
//                 break;
//             case 4:
//                 if (vn(e, r),
//                 (r & 4194240) === r)
//                     break;
//                 for (t = e.eventTimes,
//                 o = -1; 0 < r; ) {
//                     var a = 31 - bt(r);
//                     i = 1 << a,
//                     a = t[a],
//                     a > o && (o = a),
//                     r &= ~i
//                 }
//                 if (r = o,
//                 r = Oe() - r,
//                 r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * a2(r / 1960)) - r,
//                 10 < r) {
//                     e.timeoutHandle = Zl(Hn.bind(null, e, Ge, Bt), r);
//                     break
//                 }
//                 Hn(e, Ge, Bt);
//                 break;
//             case 5:
//                 Hn(e, Ge, Bt);
//                 break;
//             default:
//                 throw Error(R(329))
//             }
//         }
//     }
//     return Je(e, Oe()),
//     e.callbackNode === n ? Ng.bind(null, e) : null
// }
// function wu(e, t) {
//     var n = Ao;
//     return e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256),
//     e = Fa(e, t),
//     e !== 2 && (t = Ge,
//     Ge = n,
//     t !== null && xu(t)),
//     e
// }
// function xu(e) {
//     Ge === null ? Ge = e : Ge.push.apply(Ge, e)
// }
// function s2(e) {
//     for (var t = e; ; ) {
//         if (t.flags & 16384) {
//             var n = t.updateQueue;
//             if (n !== null && (n = n.stores,
//             n !== null))
//                 for (var r = 0; r < n.length; r++) {
//                     var o = n[r]
//                       , i = o.getSnapshot;
//                     o = o.value;
//                     try {
//                         if (!kt(i(), o))
//                             return !1
//                     } catch {
//                         return !1
//                     }
//                 }
//         }
//         if (n = t.child,
//         t.subtreeFlags & 16384 && n !== null)
//             n.return = t,
//             t = n;
//         else {
//             if (t === e)
//                 break;
//             for (; t.sibling === null; ) {
//                 if (t.return === null || t.return === e)
//                     return !0;
//                 t = t.return
//             }
//             t.sibling.return = t.return,
//             t = t.sibling
//         }
//     }
//     return !0
// }
// function vn(e, t) {
//     for (t &= ~Wc,
//     t &= ~ds,
//     e.suspendedLanes |= t,
//     e.pingedLanes &= ~t,
//     e = e.expirationTimes; 0 < t; ) {
//         var n = 31 - bt(t)
//           , r = 1 << n;
//         e[n] = -1,
//         t &= ~r
//     }
// }
// function Fd(e) {
//     if (ee & 6)
//         throw Error(R(327));
//     Fr();
//     var t = Sa(e, 0);
//     if (!(t & 1))
//         return Je(e, Oe()),
//         null;
//     var n = Fa(e, t);
//     if (e.tag !== 0 && n === 2) {
//         var r = Vl(e);
//         r !== 0 && (t = r,
//         n = wu(e, r))
//     }
//     if (n === 1)
//         throw n = ti,
//         Qn(e, 0),
//         vn(e, t),
//         Je(e, Oe()),
//         n;
//     if (n === 6)
//         throw Error(R(345));
//     return e.finishedWork = e.current.alternate,
//     e.finishedLanes = t,
//     Hn(e, Ge, Bt),
//     Je(e, Oe()),
//     null
// }
// function Kc(e, t) {
//     var n = ee;
//     ee |= 1;
//     try {
//         return e(t)
//     } finally {
//         ee = n,
//         ee === 0 && (Yr = Oe() + 500,
//         ls && $n())
//     }
// }
// function sr(e) {
//     wn !== null && wn.tag === 0 && !(ee & 6) && Fr();
//     var t = ee;
//     ee |= 1;
//     var n = ht.transition
//       , r = oe;
//     try {
//         if (ht.transition = null,
//         oe = 1,
//         e)
//             return e()
//     } finally {
//         oe = r,
//         ht.transition = n,
//         ee = t,
//         !(ee & 6) && $n()
//     }
// }
// function Gc() {
//     Ze = jr.current,
//     de(jr)
// }
// function Qn(e, t) {
//     e.finishedWork = null,
//     e.finishedLanes = 0;
//     var n = e.timeoutHandle;
//     if (n !== -1 && (e.timeoutHandle = -1,
//     Dy(n)),
//     Pe !== null)
//         for (n = Pe.return; n !== null; ) {
//             var r = n;
//             switch (Nc(r),
//             r.tag) {
//             case 1:
//                 r = r.type.childContextTypes,
//                 r != null && Na();
//                 break;
//             case 3:
//                 Kr(),
//                 de(qe),
//                 de(Fe),
//                 Ic();
//                 break;
//             case 5:
//                 Mc(r);
//                 break;
//             case 4:
//                 Kr();
//                 break;
//             case 13:
//                 de(xe);
//                 break;
//             case 19:
//                 de(xe);
//                 break;
//             case 10:
//                 jc(r.type._context);
//                 break;
//             case 22:
//             case 23:
//                 Gc()
//             }
//             n = n.return
//         }
//     if (Re = e,
//     Pe = e = Tn(e.current, null),
//     Me = Ze = t,
//     _e = 0,
//     ti = null,
//     Wc = ds = ar = 0,
//     Ge = Ao = null,
//     Yn !== null) {
//         for (t = 0; t < Yn.length; t++)
//             if (n = Yn[t],
//             r = n.interleaved,
//             r !== null) {
//                 n.interleaved = null;
//                 var o = r.next
//                   , i = n.pending;
//                 if (i !== null) {
//                     var a = i.next;
//                     i.next = o,
//                     r.next = a
//                 }
//                 n.pending = r
//             }
//         Yn = null
//     }
//     return e
// }
// function Pg(e, t) {
//     do {
//         var n = Pe;
//         try {
//             if (_c(),
//             ua.current = Ia,
//             Ma) {
//                 for (var r = be.memoizedState; r !== null; ) {
//                     var o = r.queue;
//                     o !== null && (o.pending = null),
//                     r = r.next
//                 }
//                 Ma = !1
//             }
//             if (ir = 0,
//             Le = Te = be = null,
//             Lo = !1,
//             Jo = 0,
//             Hc.current = null,
//             n === null || n.return === null) {
//                 _e = 1,
//                 ti = t,
//                 Pe = null;
//                 break
//             }
//             e: {
//                 var i = e
//                   , a = n.return
//                   , s = n
//                   , l = t;
//                 if (t = Me,
//                 s.flags |= 32768,
//                 l !== null && typeof l == "object" && typeof l.then == "function") {
//                     var u = l
//                       , c = s
//                       , d = c.tag;
//                     if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
//                         var f = c.alternate;
//                         f ? (c.updateQueue = f.updateQueue,
//                         c.memoizedState = f.memoizedState,
//                         c.lanes = f.lanes) : (c.updateQueue = null,
//                         c.memoizedState = null)
//                     }
//                     var m = Nd(a);
//                     if (m !== null) {
//                         m.flags &= -257,
//                         Pd(m, a, s, i, t),
//                         m.mode & 1 && Od(i, u, t),
//                         t = m,
//                         l = u;
//                         var v = t.updateQueue;
//                         if (v === null) {
//                             var x = new Set;
//                             x.add(l),
//                             t.updateQueue = x
//                         } else
//                             v.add(l);
//                         break e
//                     } else {
//                         if (!(t & 1)) {
//                             Od(i, u, t),
//                             Yc();
//                             break e
//                         }
//                         l = Error(R(426))
//                     }
//                 } else if (ge && s.mode & 1) {
//                     var k = Nd(a);
//                     if (k !== null) {
//                         !(k.flags & 65536) && (k.flags |= 256),
//                         Pd(k, a, s, i, t),
//                         Pc(Gr(l, s));
//                         break e
//                     }
//                 }
//                 i = l = Gr(l, s),
//                 _e !== 4 && (_e = 2),
//                 Ao === null ? Ao = [i] : Ao.push(i),
//                 i = a;
//                 do {
//                     switch (i.tag) {
//                     case 3:
//                         i.flags |= 65536,
//                         t &= -t,
//                         i.lanes |= t;
//                         var h = fg(i, l, t);
//                         xd(i, h);
//                         break e;
//                     case 1:
//                         s = l;
//                         var p = i.type
//                           , w = i.stateNode;
//                         if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Nn === null || !Nn.has(w)))) {
//                             i.flags |= 65536,
//                             t &= -t,
//                             i.lanes |= t;
//                             var b = dg(i, s, t);
//                             xd(i, b);
//                             break e
//                         }
//                     }
//                     i = i.return
//                 } while (i !== null)
//             }
//             jg(n)
//         } catch (O) {
//             t = O,
//             Pe === n && n !== null && (Pe = n = n.return);
//             continue
//         }
//         break
//     } while (!0)
// }
// function Tg() {
//     var e = Da.current;
//     return Da.current = Ia,
//     e === null ? Ia : e
// }
// function Yc() {
//     (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
//     Re === null || !(ar & 268435455) && !(ds & 268435455) || vn(Re, Me)
// }
// function Fa(e, t) {
//     var n = ee;
//     ee |= 2;
//     var r = Tg();
//     (Re !== e || Me !== t) && (Bt = null,
//     Qn(e, t));
//     do
//         try {
//             l2();
//             break
//         } catch (o) {
//             Pg(e, o)
//         }
//     while (!0);
//     if (_c(),
//     ee = n,
//     Da.current = r,
//     Pe !== null)
//         throw Error(R(261));
//     return Re = null,
//     Me = 0,
//     _e
// }
// function l2() {
//     for (; Pe !== null; )
//         _g(Pe)
// }
// function u2() {
//     for (; Pe !== null && !A0(); )
//         _g(Pe)
// }
// function _g(e) {
//     var t = Rg(e.alternate, e, Ze);
//     e.memoizedProps = e.pendingProps,
//     t === null ? jg(e) : Pe = t,
//     Hc.current = null
// }
// function jg(e) {
//     var t = e;
//     do {
//         var n = t.alternate;
//         if (e = t.return,
//         t.flags & 32768) {
//             if (n = n2(n, t),
//             n !== null) {
//                 n.flags &= 32767,
//                 Pe = n;
//                 return
//             }
//             if (e !== null)
//                 e.flags |= 32768,
//                 e.subtreeFlags = 0,
//                 e.deletions = null;
//             else {
//                 _e = 6,
//                 Pe = null;
//                 return
//             }
//         } else if (n = t2(n, t, Ze),
//         n !== null) {
//             Pe = n;
//             return
//         }
//         if (t = t.sibling,
//         t !== null) {
//             Pe = t;
//             return
//         }
//         Pe = t = e
//     } while (t !== null);
//     _e === 0 && (_e = 5)
// }
// function Hn(e, t, n) {
//     var r = oe
//       , o = ht.transition;
//     try {
//         ht.transition = null,
//         oe = 1,
//         c2(e, t, n, r)
//     } finally {
//         ht.transition = o,
//         oe = r
//     }
//     return null
// }
// function c2(e, t, n, r) {
//     do
//         Fr();
//     while (wn !== null);
//     if (ee & 6)
//         throw Error(R(327));
//     n = e.finishedWork;
//     var o = e.finishedLanes;
//     if (n === null)
//         return null;
//     if (e.finishedWork = null,
//     e.finishedLanes = 0,
//     n === e.current)
//         throw Error(R(177));
//     e.callbackNode = null,
//     e.callbackPriority = 0;
//     var i = n.lanes | n.childLanes;
//     if (W0(e, i),
//     e === Re && (Pe = Re = null,
//     Me = 0),
//     !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0,
//     Ag(ba, function() {
//         return Fr(),
//         null
//     })),
//     i = (n.flags & 15990) !== 0,
//     n.subtreeFlags & 15990 || i) {
//         i = ht.transition,
//         ht.transition = null;
//         var a = oe;
//         oe = 1;
//         var s = ee;
//         ee |= 4,
//         Hc.current = null,
//         o2(e, n),
//         Eg(n, e),
//         _y(Ql),
//         ka = !!ql,
//         Ql = ql = null,
//         e.current = n,
//         i2(n),
//         M0(),
//         ee = s,
//         oe = a,
//         ht.transition = i
//     } else
//         e.current = n;
//     if (Hi && (Hi = !1,
//     wn = e,
//     za = o),
//     i = e.pendingLanes,
//     i === 0 && (Nn = null),
//     $0(n.stateNode),
//     Je(e, Oe()),
//     t !== null)
//         for (r = e.onRecoverableError,
//         n = 0; n < t.length; n++)
//             o = t[n],
//             r(o.value, {
//                 componentStack: o.stack,
//                 digest: o.digest
//             });
//     if ($a)
//         throw $a = !1,
//         e = vu,
//         vu = null,
//         e;
//     return za & 1 && e.tag !== 0 && Fr(),
//     i = e.pendingLanes,
//     i & 1 ? e === yu ? Mo++ : (Mo = 0,
//     yu = e) : Mo = 0,
//     $n(),
//     null
// }
// function Fr() {
//     if (wn !== null) {
//         var e = fm(za)
//           , t = ht.transition
//           , n = oe;
//         try {
//             if (ht.transition = null,
//             oe = 16 > e ? 16 : e,
//             wn === null)
//                 var r = !1;
//             else {
//                 if (e = wn,
//                 wn = null,
//                 za = 0,
//                 ee & 6)
//                     throw Error(R(331));
//                 var o = ee;
//                 for (ee |= 4,
//                 $ = e.current; $ !== null; ) {
//                     var i = $
//                       , a = i.child;
//                     if ($.flags & 16) {
//                         var s = i.deletions;
//                         if (s !== null) {
//                             for (var l = 0; l < s.length; l++) {
//                                 var u = s[l];
//                                 for ($ = u; $ !== null; ) {
//                                     var c = $;
//                                     switch (c.tag) {
//                                     case 0:
//                                     case 11:
//                                     case 15:
//                                         Ro(8, c, i)
//                                     }
//                                     var d = c.child;
//                                     if (d !== null)
//                                         d.return = c,
//                                         $ = d;
//                                     else
//                                         for (; $ !== null; ) {
//                                             c = $;
//                                             var f = c.sibling
//                                               , m = c.return;
//                                             if (Sg(c),
//                                             c === u) {
//                                                 $ = null;
//                                                 break
//                                             }
//                                             if (f !== null) {
//                                                 f.return = m,
//                                                 $ = f;
//                                                 break
//                                             }
//                                             $ = m
//                                         }
//                                 }
//                             }
//                             var v = i.alternate;
//                             if (v !== null) {
//                                 var x = v.child;
//                                 if (x !== null) {
//                                     v.child = null;
//                                     do {
//                                         var k = x.sibling;
//                                         x.sibling = null,
//                                         x = k
//                                     } while (x !== null)
//                                 }
//                             }
//                             $ = i
//                         }
//                     }
//                     if (i.subtreeFlags & 2064 && a !== null)
//                         a.return = i,
//                         $ = a;
//                     else
//                         e: for (; $ !== null; ) {
//                             if (i = $,
//                             i.flags & 2048)
//                                 switch (i.tag) {
//                                 case 0:
//                                 case 11:
//                                 case 15:
//                                     Ro(9, i, i.return)
//                                 }
//                             var h = i.sibling;
//                             if (h !== null) {
//                                 h.return = i.return,
//                                 $ = h;
//                                 break e
//                             }
//                             $ = i.return
//                         }
//                 }
//                 var p = e.current;
//                 for ($ = p; $ !== null; ) {
//                     a = $;
//                     var w = a.child;
//                     if (a.subtreeFlags & 2064 && w !== null)
//                         w.return = a,
//                         $ = w;
//                     else
//                         e: for (a = p; $ !== null; ) {
//                             if (s = $,
//                             s.flags & 2048)
//                                 try {
//                                     switch (s.tag) {
//                                     case 0:
//                                     case 11:
//                                     case 15:
//                                         fs(9, s)
//                                     }
//                                 } catch (O) {
//                                     Ee(s, s.return, O)
//                                 }
//                             if (s === a) {
//                                 $ = null;
//                                 break e
//                             }
//                             var b = s.sibling;
//                             if (b !== null) {
//                                 b.return = s.return,
//                                 $ = b;
//                                 break e
//                             }
//                             $ = s.return
//                         }
//                 }
//                 if (ee = o,
//                 $n(),
//                 At && typeof At.onPostCommitFiberRoot == "function")
//                     try {
//                         At.onPostCommitFiberRoot(rs, e)
//                     } catch {}
//                 r = !0
//             }
//             return r
//         } finally {
//             oe = n,
//             ht.transition = t
//         }
//     }
//     return !1
// }
// function Bd(e, t, n) {
//     t = Gr(n, t),
//     t = fg(e, t, 1),
//     e = On(e, t, 1),
//     t = We(),
//     e !== null && (ci(e, 1, t),
//     Je(e, t))
// }
// function Ee(e, t, n) {
//     if (e.tag === 3)
//         Bd(e, e, n);
//     else
//         for (; t !== null; ) {
//             if (t.tag === 3) {
//                 Bd(t, e, n);
//                 break
//             } else if (t.tag === 1) {
//                 var r = t.stateNode;
//                 if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nn === null || !Nn.has(r))) {
//                     e = Gr(n, e),
//                     e = dg(t, e, 1),
//                     t = On(t, e, 1),
//                     e = We(),
//                     t !== null && (ci(t, 1, e),
//                     Je(t, e));
//                     break
//                 }
//             }
//             t = t.return
//         }
// }
// function f2(e, t, n) {
//     var r = e.pingCache;
//     r !== null && r.delete(t),
//     t = We(),
//     e.pingedLanes |= e.suspendedLanes & n,
//     Re === e && (Me & n) === n && (_e === 4 || _e === 3 && (Me & 130023424) === Me && 500 > Oe() - Vc ? Qn(e, 0) : Wc |= n),
//     Je(e, t)
// }
// function Lg(e, t) {
//     t === 0 && (e.mode & 1 ? (t = Ri,
//     Ri <<= 1,
//     !(Ri & 130023424) && (Ri = 4194304)) : t = 1);
//     var n = We();
//     e = Xt(e, t),
//     e !== null && (ci(e, t, n),
//     Je(e, n))
// }
// function d2(e) {
//     var t = e.memoizedState
//       , n = 0;
//     t !== null && (n = t.retryLane),
//     Lg(e, n)
// }
// function p2(e, t) {
//     var n = 0;
//     switch (e.tag) {
//     case 13:
//         var r = e.stateNode
//           , o = e.memoizedState;
//         o !== null && (n = o.retryLane);
//         break;
//     case 19:
//         r = e.stateNode;
//         break;
//     default:
//         throw Error(R(314))
//     }
//     r !== null && r.delete(t),
//     Lg(e, n)
// }
// var Rg;
// Rg = function(e, t, n) {
//     if (e !== null)
//         if (e.memoizedProps !== t.pendingProps || qe.current)
//             Xe = !0;
//         else {
//             if (!(e.lanes & n) && !(t.flags & 128))
//                 return Xe = !1,
//                 e2(e, t, n);
//             Xe = !!(e.flags & 131072)
//         }
//     else
//         Xe = !1,
//         ge && t.flags & 1048576 && Dm(t, _a, t.index);
//     switch (t.lanes = 0,
//     t.tag) {
//     case 2:
//         var r = t.type;
//         fa(e, t),
//         e = t.pendingProps;
//         var o = Hr(t, Fe.current);
//         zr(t, n),
//         o = $c(null, t, r, e, o, n);
//         var i = zc();
//         return t.flags |= 1,
//         typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
//         t.memoizedState = null,
//         t.updateQueue = null,
//         Qe(r) ? (i = !0,
//         Pa(t)) : i = !1,
//         t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
//         Rc(t),
//         o.updater = cs,
//         t.stateNode = o,
//         o._reactInternals = t,
//         au(t, r, e, n),
//         t = uu(null, t, r, !0, i, n)) : (t.tag = 0,
//         ge && i && Oc(t),
//         He(null, t, o, n),
//         t = t.child),
//         t;
//     case 16:
//         r = t.elementType;
//         e: {
//             switch (fa(e, t),
//             e = t.pendingProps,
//             o = r._init,
//             r = o(r._payload),
//             t.type = r,
//             o = t.tag = m2(r),
//             e = yt(r, e),
//             o) {
//             case 0:
//                 t = lu(null, t, r, e, n);
//                 break e;
//             case 1:
//                 t = jd(null, t, r, e, n);
//                 break e;
//             case 11:
//                 t = Td(null, t, r, e, n);
//                 break e;
//             case 14:
//                 t = _d(null, t, r, yt(r.type, e), n);
//                 break e
//             }
//             throw Error(R(306, r, ""))
//         }
//         return t;
//     case 0:
//         return r = t.type,
//         o = t.pendingProps,
//         o = t.elementType === r ? o : yt(r, o),
//         lu(e, t, r, o, n);
//     case 1:
//         return r = t.type,
//         o = t.pendingProps,
//         o = t.elementType === r ? o : yt(r, o),
//         jd(e, t, r, o, n);
//     case 3:
//         e: {
//             if (gg(t),
//             e === null)
//                 throw Error(R(387));
//             r = t.pendingProps,
//             i = t.memoizedState,
//             o = i.element,
//             Hm(e, t),
//             Ra(t, r, null, n);
//             var a = t.memoizedState;
//             if (r = a.element,
//             i.isDehydrated)
//                 if (i = {
//                     element: r,
//                     isDehydrated: !1,
//                     cache: a.cache,
//                     pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
//                     transitions: a.transitions
//                 },
//                 t.updateQueue.baseState = i,
//                 t.memoizedState = i,
//                 t.flags & 256) {
//                     o = Gr(Error(R(423)), t),
//                     t = Ld(e, t, r, n, o);
//                     break e
//                 } else if (r !== o) {
//                     o = Gr(Error(R(424)), t),
//                     t = Ld(e, t, r, n, o);
//                     break e
//                 } else
//                     for (tt = En(t.stateNode.containerInfo.firstChild),
//                     nt = t,
//                     ge = !0,
//                     xt = null,
//                     n = Bm(t, null, r, n),
//                     t.child = n; n; )
//                         n.flags = n.flags & -3 | 4096,
//                         n = n.sibling;
//             else {
//                 if (Wr(),
//                 r === o) {
//                     t = qt(e, t, n);
//                     break e
//                 }
//                 He(e, t, r, n)
//             }
//             t = t.child
//         }
//         return t;
//     case 5:
//         return Wm(t),
//         e === null && ru(t),
//         r = t.type,
//         o = t.pendingProps,
//         i = e !== null ? e.memoizedProps : null,
//         a = o.children,
//         Jl(r, o) ? a = null : i !== null && Jl(r, i) && (t.flags |= 32),
//         mg(e, t),
//         He(e, t, a, n),
//         t.child;
//     case 6:
//         return e === null && ru(t),
//         null;
//     case 13:
//         return vg(e, t, n);
//     case 4:
//         return Ac(t, t.stateNode.containerInfo),
//         r = t.pendingProps,
//         e === null ? t.child = Vr(t, null, r, n) : He(e, t, r, n),
//         t.child;
//     case 11:
//         return r = t.type,
//         o = t.pendingProps,
//         o = t.elementType === r ? o : yt(r, o),
//         Td(e, t, r, o, n);
//     case 7:
//         return He(e, t, t.pendingProps, n),
//         t.child;
//     case 8:
//         return He(e, t, t.pendingProps.children, n),
//         t.child;
//     case 12:
//         return He(e, t, t.pendingProps.children, n),
//         t.child;
//     case 10:
//         e: {
//             if (r = t.type._context,
//             o = t.pendingProps,
//             i = t.memoizedProps,
//             a = o.value,
//             le(ja, r._currentValue),
//             r._currentValue = a,
//             i !== null)
//                 if (kt(i.value, a)) {
//                     if (i.children === o.children && !qe.current) {
//                         t = qt(e, t, n);
//                         break e
//                     }
//                 } else
//                     for (i = t.child,
//                     i !== null && (i.return = t); i !== null; ) {
//                         var s = i.dependencies;
//                         if (s !== null) {
//                             a = i.child;
//                             for (var l = s.firstContext; l !== null; ) {
//                                 if (l.context === r) {
//                                     if (i.tag === 1) {
//                                         l = Vt(-1, n & -n),
//                                         l.tag = 2;
//                                         var u = i.updateQueue;
//                                         if (u !== null) {
//                                             u = u.shared;
//                                             var c = u.pending;
//                                             c === null ? l.next = l : (l.next = c.next,
//                                             c.next = l),
//                                             u.pending = l
//                                         }
//                                     }
//                                     i.lanes |= n,
//                                     l = i.alternate,
//                                     l !== null && (l.lanes |= n),
//                                     ou(i.return, n, t),
//                                     s.lanes |= n;
//                                     break
//                                 }
//                                 l = l.next
//                             }
//                         } else if (i.tag === 10)
//                             a = i.type === t.type ? null : i.child;
//                         else if (i.tag === 18) {
//                             if (a = i.return,
//                             a === null)
//                                 throw Error(R(341));
//                             a.lanes |= n,
//                             s = a.alternate,
//                             s !== null && (s.lanes |= n),
//                             ou(a, n, t),
//                             a = i.sibling
//                         } else
//                             a = i.child;
//                         if (a !== null)
//                             a.return = i;
//                         else
//                             for (a = i; a !== null; ) {
//                                 if (a === t) {
//                                     a = null;
//                                     break
//                                 }
//                                 if (i = a.sibling,
//                                 i !== null) {
//                                     i.return = a.return,
//                                     a = i;
//                                     break
//                                 }
//                                 a = a.return
//                             }
//                         i = a
//                     }
//             He(e, t, o.children, n),
//             t = t.child
//         }
//         return t;
//     case 9:
//         return o = t.type,
//         r = t.pendingProps.children,
//         zr(t, n),
//         o = mt(o),
//         r = r(o),
//         t.flags |= 1,
//         He(e, t, r, n),
//         t.child;
//     case 14:
//         return r = t.type,
//         o = yt(r, t.pendingProps),
//         o = yt(r.type, o),
//         _d(e, t, r, o, n);
//     case 15:
//         return pg(e, t, t.type, t.pendingProps, n);
//     case 17:
//         return r = t.type,
//         o = t.pendingProps,
//         o = t.elementType === r ? o : yt(r, o),
//         fa(e, t),
//         t.tag = 1,
//         Qe(r) ? (e = !0,
//         Pa(t)) : e = !1,
//         zr(t, n),
//         cg(t, r, o),
//         au(t, r, o, n),
//         uu(null, t, r, !0, e, n);
//     case 19:
//         return yg(e, t, n);
//     case 22:
//         return hg(e, t, n)
//     }
//     throw Error(R(156, t.tag))
// }
// ;
// function Ag(e, t) {
//     return sm(e, t)
// }
// function h2(e, t, n, r) {
//     this.tag = e,
//     this.key = n,
//     this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
//     this.index = 0,
//     this.ref = null,
//     this.pendingProps = t,
//     this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
//     this.mode = r,
//     this.subtreeFlags = this.flags = 0,
//     this.deletions = null,
//     this.childLanes = this.lanes = 0,
//     this.alternate = null
// }
// function pt(e, t, n, r) {
//     return new h2(e,t,n,r)
// }
// function Xc(e) {
//     return e = e.prototype,
//     !(!e || !e.isReactComponent)
// }
// function m2(e) {
//     if (typeof e == "function")
//         return Xc(e) ? 1 : 0;
//     if (e != null) {
//         if (e = e.$$typeof,
//         e === hc)
//             return 11;
//         if (e === mc)
//             return 14
//     }
//     return 2
// }
// function Tn(e, t) {
//     var n = e.alternate;
//     return n === null ? (n = pt(e.tag, t, e.key, e.mode),
//     n.elementType = e.elementType,
//     n.type = e.type,
//     n.stateNode = e.stateNode,
//     n.alternate = e,
//     e.alternate = n) : (n.pendingProps = t,
//     n.type = e.type,
//     n.flags = 0,
//     n.subtreeFlags = 0,
//     n.deletions = null),
//     n.flags = e.flags & 14680064,
//     n.childLanes = e.childLanes,
//     n.lanes = e.lanes,
//     n.child = e.child,
//     n.memoizedProps = e.memoizedProps,
//     n.memoizedState = e.memoizedState,
//     n.updateQueue = e.updateQueue,
//     t = e.dependencies,
//     n.dependencies = t === null ? null : {
//         lanes: t.lanes,
//         firstContext: t.firstContext
//     },
//     n.sibling = e.sibling,
//     n.index = e.index,
//     n.ref = e.ref,
//     n
// }
// function ha(e, t, n, r, o, i) {
//     var a = 2;
//     if (r = e,
//     typeof e == "function")
//         Xc(e) && (a = 1);
//     else if (typeof e == "string")
//         a = 5;
//     else
//         e: switch (e) {
//         case br:
//             return Jn(n.children, o, i, t);
//         case pc:
//             a = 8,
//             o |= 8;
//             break;
//         case _l:
//             return e = pt(12, n, t, o | 2),
//             e.elementType = _l,
//             e.lanes = i,
//             e;
//         case jl:
//             return e = pt(13, n, t, o),
//             e.elementType = jl,
//             e.lanes = i,
//             e;
//         case Ll:
//             return e = pt(19, n, t, o),
//             e.elementType = Ll,
//             e.lanes = i,
//             e;
//         case Wh:
//             return ps(n, o, i, t);
//         default:
//             if (typeof e == "object" && e !== null)
//                 switch (e.$$typeof) {
//                 case Uh:
//                     a = 10;
//                     break e;
//                 case Hh:
//                     a = 9;
//                     break e;
//                 case hc:
//                     a = 11;
//                     break e;
//                 case mc:
//                     a = 14;
//                     break e;
//                 case pn:
//                     a = 16,
//                     r = null;
//                     break e
//                 }
//             throw Error(R(130, e == null ? e : typeof e, ""))
//         }
//     return t = pt(a, n, t, o),
//     t.elementType = e,
//     t.type = r,
//     t.lanes = i,
//     t
// }
// function Jn(e, t, n, r) {
//     return e = pt(7, e, r, t),
//     e.lanes = n,
//     e
// }
// function ps(e, t, n, r) {
//     return e = pt(22, e, r, t),
//     e.elementType = Wh,
//     e.lanes = n,
//     e.stateNode = {
//         isHidden: !1
//     },
//     e
// }
// function ll(e, t, n) {
//     return e = pt(6, e, null, t),
//     e.lanes = n,
//     e
// }
// function ul(e, t, n) {
//     return t = pt(4, e.children !== null ? e.children : [], e.key, t),
//     t.lanes = n,
//     t.stateNode = {
//         containerInfo: e.containerInfo,
//         pendingChildren: null,
//         implementation: e.implementation
//     },
//     t
// }
// function g2(e, t, n, r, o) {
//     this.tag = t,
//     this.containerInfo = e,
//     this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
//     this.timeoutHandle = -1,
//     this.callbackNode = this.pendingContext = this.context = null,
//     this.callbackPriority = 0,
//     this.eventTimes = Hs(0),
//     this.expirationTimes = Hs(-1),
//     this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
//     this.entanglements = Hs(0),
//     this.identifierPrefix = r,
//     this.onRecoverableError = o,
//     this.mutableSourceEagerHydrationData = null
// }
// function qc(e, t, n, r, o, i, a, s, l) {
//     return e = new g2(e,t,n,s,l),
//     t === 1 ? (t = 1,
//     i === !0 && (t |= 8)) : t = 0,
//     i = pt(3, null, null, t),
//     e.current = i,
//     i.stateNode = e,
//     i.memoizedState = {
//         element: r,
//         isDehydrated: n,
//         cache: null,
//         transitions: null,
//         pendingSuspenseBoundaries: null
//     },
//     Rc(i),
//     e
// }
// function v2(e, t, n) {
//     var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
//     return {
//         $$typeof: xr,
//         key: r == null ? null : "" + r,
//         children: e,
//         containerInfo: t,
//         implementation: n
//     }
// }
// function Mg(e) {
//     if (!e)
//         return jn;
//     e = e._reactInternals;
//     e: {
//         if (dr(e) !== e || e.tag !== 1)
//             throw Error(R(170));
//         var t = e;
//         do {
//             switch (t.tag) {
//             case 3:
//                 t = t.stateNode.context;
//                 break e;
//             case 1:
//                 if (Qe(t.type)) {
//                     t = t.stateNode.__reactInternalMemoizedMergedChildContext;
//                     break e
//                 }
//             }
//             t = t.return
//         } while (t !== null);
//         throw Error(R(171))
//     }
//     if (e.tag === 1) {
//         var n = e.type;
//         if (Qe(n))
//             return Mm(e, n, t)
//     }
//     return t
// }
// function Ig(e, t, n, r, o, i, a, s, l) {
//     return e = qc(n, r, !0, e, o, i, a, s, l),
//     e.context = Mg(null),
//     n = e.current,
//     r = We(),
//     o = Pn(n),
//     i = Vt(r, o),
//     i.callback = t ?? null,
//     On(n, i, o),
//     e.current.lanes = o,
//     ci(e, o, r),
//     Je(e, r),
//     e
// }
// function hs(e, t, n, r) {
//     var o = t.current
//       , i = We()
//       , a = Pn(o);
//     return n = Mg(n),
//     t.context === null ? t.context = n : t.pendingContext = n,
//     t = Vt(i, a),
//     t.payload = {
//         element: e
//     },
//     r = r === void 0 ? null : r,
//     r !== null && (t.callback = r),
//     e = On(o, t, a),
//     e !== null && (St(e, o, a, i),
//     la(e, o, a)),
//     a
// }
// function Ba(e) {
//     if (e = e.current,
//     !e.child)
//         return null;
//     switch (e.child.tag) {
//     case 5:
//         return e.child.stateNode;
//     default:
//         return e.child.stateNode
//     }
// }
// function Ud(e, t) {
//     if (e = e.memoizedState,
//     e !== null && e.dehydrated !== null) {
//         var n = e.retryLane;
//         e.retryLane = n !== 0 && n < t ? n : t
//     }
// }
// function Qc(e, t) {
//     Ud(e, t),
//     (e = e.alternate) && Ud(e, t)
// }
// function y2() {
//     return null
// }
// var Dg = typeof reportError == "function" ? reportError : function(e) {
//     console.error(e)
// }
// ;
// function Jc(e) {
//     this._internalRoot = e
// }
// ms.prototype.render = Jc.prototype.render = function(e) {
//     var t = this._internalRoot;
//     if (t === null)
//         throw Error(R(409));
//     hs(e, t, null, null)
// }
// ;
// ms.prototype.unmount = Jc.prototype.unmount = function() {
//     var e = this._internalRoot;
//     if (e !== null) {
//         this._internalRoot = null;
//         var t = e.containerInfo;
//         sr(function() {
//             hs(null, e, null, null)
//         }),
//         t[Yt] = null
//     }
// }
// ;
// function ms(e) {
//     this._internalRoot = e
// }
// ms.prototype.unstable_scheduleHydration = function(e) {
//     if (e) {
//         var t = hm();
//         e = {
//             blockedOn: null,
//             target: e,
//             priority: t
//         };
//         for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++)
//             ;
//         gn.splice(n, 0, e),
//         n === 0 && gm(e)
//     }
// }
// ;
// function Zc(e) {
//     return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
// }
// function gs(e) {
//     return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
// }
// function Hd() {}
// function w2(e, t, n, r, o) {
//     if (o) {
//         if (typeof r == "function") {
//             var i = r;
//             r = function() {
//                 var u = Ba(a);
//                 i.call(u)
//             }
//         }
//         var a = Ig(t, r, e, 0, null, !1, !1, "", Hd);
//         return e._reactRootContainer = a,
//         e[Yt] = a.current,
//         Go(e.nodeType === 8 ? e.parentNode : e),
//         sr(),
//         a
//     }
//     for (; o = e.lastChild; )
//         e.removeChild(o);
//     if (typeof r == "function") {
//         var s = r;
//         r = function() {
//             var u = Ba(l);
//             s.call(u)
//         }
//     }
//     var l = qc(e, 0, !1, null, null, !1, !1, "", Hd);
//     return e._reactRootContainer = l,
//     e[Yt] = l.current,
//     Go(e.nodeType === 8 ? e.parentNode : e),
//     sr(function() {
//         hs(t, l, n, r)
//     }),
//     l
// }
// function vs(e, t, n, r, o) {
//     var i = n._reactRootContainer;
//     if (i) {
//         var a = i;
//         if (typeof o == "function") {
//             var s = o;
//             o = function() {
//                 var l = Ba(a);
//                 s.call(l)
//             }
//         }
//         hs(t, a, e, o)
//     } else
//         a = w2(n, t, e, o, r);
//     return Ba(a)
// }
// dm = function(e) {
//     switch (e.tag) {
//     case 3:
//         var t = e.stateNode;
//         if (t.current.memoizedState.isDehydrated) {
//             var n = bo(t.pendingLanes);
//             n !== 0 && (yc(t, n | 1),
//             Je(t, Oe()),
//             !(ee & 6) && (Yr = Oe() + 500,
//             $n()))
//         }
//         break;
//     case 13:
//         sr(function() {
//             var r = Xt(e, 1);
//             if (r !== null) {
//                 var o = We();
//                 St(r, e, 1, o)
//             }
//         }),
//         Qc(e, 1)
//     }
// }
// ;
// wc = function(e) {
//     if (e.tag === 13) {
//         var t = Xt(e, 134217728);
//         if (t !== null) {
//             var n = We();
//             St(t, e, 134217728, n)
//         }
//         Qc(e, 134217728)
//     }
// }
// ;
// pm = function(e) {
//     if (e.tag === 13) {
//         var t = Pn(e)
//           , n = Xt(e, t);
//         if (n !== null) {
//             var r = We();
//             St(n, e, t, r)
//         }
//         Qc(e, t)
//     }
// }
// ;
// hm = function() {
//     return oe
// }
// ;
// mm = function(e, t) {
//     var n = oe;
//     try {
//         return oe = e,
//         t()
//     } finally {
//         oe = n
//     }
// }
// ;
// Ul = function(e, t, n) {
//     switch (t) {
//     case "input":
//         if (Ml(e, n),
//         t = n.name,
//         n.type === "radio" && t != null) {
//             for (n = e; n.parentNode; )
//                 n = n.parentNode;
//             for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
//             t = 0; t < n.length; t++) {
//                 var r = n[t];
//                 if (r !== e && r.form === e.form) {
//                     var o = ss(r);
//                     if (!o)
//                         throw Error(R(90));
//                     Kh(r),
//                     Ml(r, o)
//                 }
//             }
//         }
//         break;
//     case "textarea":
//         Yh(e, n);
//         break;
//     case "select":
//         t = n.value,
//         t != null && Mr(e, !!n.multiple, t, !1)
//     }
// }
// ;
// tm = Kc;
// nm = sr;
// var x2 = {
//     usingClientEntryPoint: !1,
//     Events: [di, Er, ss, Zh, em, Kc]
// }
//   , po = {
//     findFiberByHostInstance: Gn,
//     bundleType: 0,
//     version: "18.3.1",
//     rendererPackageName: "react-dom"
// }
//   , b2 = {
//     bundleType: po.bundleType,
//     version: po.version,
//     rendererPackageName: po.rendererPackageName,
//     rendererConfig: po.rendererConfig,
//     overrideHookState: null,
//     overrideHookStateDeletePath: null,
//     overrideHookStateRenamePath: null,
//     overrideProps: null,
//     overridePropsDeletePath: null,
//     overridePropsRenamePath: null,
//     setErrorHandler: null,
//     setSuspenseHandler: null,
//     scheduleUpdate: null,
//     currentDispatcherRef: nn.ReactCurrentDispatcher,
//     findHostInstanceByFiber: function(e) {
//         return e = im(e),
//         e === null ? null : e.stateNode
//     },
//     findFiberByHostInstance: po.findFiberByHostInstance || y2,
//     findHostInstancesForRefresh: null,
//     scheduleRefresh: null,
//     scheduleRoot: null,
//     setRefreshHandler: null,
//     getCurrentFiber: null,
//     reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
// };
// if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
//     var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
//     if (!Wi.isDisabled && Wi.supportsFiber)
//         try {
//             rs = Wi.inject(b2),
//             At = Wi
//         } catch {}
// }
// at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x2;
// at.createPortal = function(e, t) {
//     var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
//     if (!Zc(t))
//         throw Error(R(200));
//     return v2(e, t, null, n)
// }
// ;
// at.createRoot = function(e, t) {
//     if (!Zc(e))
//         throw Error(R(299));
//     var n = !1
//       , r = ""
//       , o = Dg;
//     return t != null && (t.unstable_strictMode === !0 && (n = !0),
//     t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
//     t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
//     t = qc(e, 1, !1, null, null, n, !1, r, o),
//     e[Yt] = t.current,
//     Go(e.nodeType === 8 ? e.parentNode : e),
//     new Jc(t)
// }
// ;
// at.findDOMNode = function(e) {
//     if (e == null)
//         return null;
//     if (e.nodeType === 1)
//         return e;
//     var t = e._reactInternals;
//     if (t === void 0)
//         throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
//         Error(R(268, e)));
//     return e = im(t),
//     e = e === null ? null : e.stateNode,
//     e
// }
// ;
// at.flushSync = function(e) {
//     return sr(e)
// }
// ;
// at.hydrate = function(e, t, n) {
//     if (!gs(t))
//         throw Error(R(200));
//     return vs(null, e, t, !0, n)
// }
// ;
// at.hydrateRoot = function(e, t, n) {
//     if (!Zc(e))
//         throw Error(R(405));
//     var r = n != null && n.hydratedSources || null
//       , o = !1
//       , i = ""
//       , a = Dg;
//     if (n != null && (n.unstable_strictMode === !0 && (o = !0),
//     n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
//     n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
//     t = Ig(t, null, e, 1, n ?? null, o, !1, i, a),
//     e[Yt] = t.current,
//     Go(e),
//     r)
//         for (e = 0; e < r.length; e++)
//             n = r[e],
//             o = n._getVersion,
//             o = o(n._source),
//             t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
//     return new ms(t)
// }
// ;
// at.render = function(e, t, n) {
//     if (!gs(t))
//         throw Error(R(200));
//     return vs(null, e, t, !1, n)
// }
// ;
// at.unmountComponentAtNode = function(e) {
//     if (!gs(e))
//         throw Error(R(40));
//     return e._reactRootContainer ? (sr(function() {
//         vs(null, null, e, !1, function() {
//             e._reactRootContainer = null,
//             e[Yt] = null
//         })
//     }),
//     !0) : !1
// }
// ;
// at.unstable_batchedUpdates = Kc;
// at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
//     if (!gs(n))
//         throw Error(R(200));
//     if (e == null || e._reactInternals === void 0)
//         throw Error(R(38));
//     return vs(e, t, n, !1, r)
// }
// ;
// at.version = "18.3.1-next-f1338f8080-20240426";
// function $g() {
//     if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
//         try {
//             __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)
//         } catch (e) {
//             console.error(e)
//         }
// }
// $g(),
// $h.exports = at;
// var ys = $h.exports;
// const Lr = Mn(ys);
// var Wd = ys;
// Pl.createRoot = Wd.createRoot,
// Pl.hydrateRoot = Wd.hydrateRoot;
// function S2() {
//     if (console && console.warn) {
//         for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
//             t[n] = arguments[n];
//         typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`),
//         console.warn(...t)
//     }
// }
// const Vd = {};
// function bu() {
//     for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
//         t[n] = arguments[n];
//     typeof t[0] == "string" && Vd[t[0]] || (typeof t[0] == "string" && (Vd[t[0]] = new Date),
//     S2(...t))
// }
// const zg = (e, t) => () => {
//     if (e.isInitialized)
//         t();
//     else {
//         const n = () => {
//             setTimeout( () => {
//                 e.off("initialized", n)
//             }
//             , 0),
//             t()
//         }
//         ;
//         e.on("initialized", n)
//     }
// }
// ;
// function Kd(e, t, n) {
//     e.loadNamespaces(t, zg(e, n))
// }
// function Gd(e, t, n, r) {
//     typeof n == "string" && (n = [n]),
//     n.forEach(o => {
//         e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
//     }
//     ),
//     e.loadLanguages(t, zg(e, r))
// }
// function k2(e, t) {
//     let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//     const r = t.languages[0]
//       , o = t.options ? t.options.fallbackLng : !1
//       , i = t.languages[t.languages.length - 1];
//     if (r.toLowerCase() === "cimode")
//         return !0;
//     const a = (s, l) => {
//         const u = t.services.backendConnector.state[`${s}|${l}`];
//         return u === -1 || u === 2
//     }
//     ;
//     return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(r, e) && (!o || a(i, e)))
// }
// function C2(e, t) {
//     let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//     return !t.languages || !t.languages.length ? (bu("i18n.languages were undefined or empty", t.languages),
//     !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
//         lng: n.lng,
//         precheck: (o, i) => {
//             if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
//                 return !1
//         }
//     }) : k2(e, t, n)
// }
// const E2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
//   , O2 = {
//     "&amp;": "&",
//     "&#38;": "&",
//     "&lt;": "<",
//     "&#60;": "<",
//     "&gt;": ">",
//     "&#62;": ">",
//     "&apos;": "'",
//     "&#39;": "'",
//     "&quot;": '"',
//     "&#34;": '"',
//     "&nbsp;": " ",
//     "&#160;": " ",
//     "&copy;": "©",
//     "&#169;": "©",
//     "&reg;": "®",
//     "&#174;": "®",
//     "&hellip;": "…",
//     "&#8230;": "…",
//     "&#x2F;": "/",
//     "&#47;": "/"
// }
//   , N2 = e => O2[e]
//   , P2 = e => e.replace(E2, N2);
// let Su = {
//     bindI18n: "languageChanged",
//     bindI18nStore: "",
//     transEmptyNodeValue: "",
//     transSupportBasicHtmlNodes: !0,
//     transWrapTextNodes: "",
//     transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
//     useSuspense: !0,
//     unescape: P2
// };
// function T2() {
//     let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//     Su = {
//         ...Su,
//         ...e
//     }
// }
// function _2() {
//     return Su
// }
// let Fg;
// function j2(e) {
//     Fg = e
// }
// function L2() {
//     return Fg
// }
// const R2 = {
//     type: "3rdParty",
//     init(e) {
//         T2(e.options.react),
//         j2(e)
//     }
// }
//   , A2 = y.createContext();
// class M2 {
//     constructor() {
//         this.usedNamespaces = {}
//     }
//     addUsedNamespaces(t) {
//         t.forEach(n => {
//             this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
//         }
//         )
//     }
//     getUsedNamespaces() {
//         return Object.keys(this.usedNamespaces)
//     }
// }
// const I2 = (e, t) => {
//     const n = y.useRef();
//     return y.useEffect( () => {
//         n.current = e
//     }
//     , [e, t]),
//     n.current
// }
// ;
// function Bg(e, t, n, r) {
//     return e.getFixedT(t, n, r)
// }
// function D2(e, t, n, r) {
//     return y.useCallback(Bg(e, t, n, r), [e, t, n, r])
// }
// function Dt(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//     const {i18n: n} = t
//       , {i18n: r, defaultNS: o} = y.useContext(A2) || {}
//       , i = n || r || L2();
//     if (i && !i.reportNamespaces && (i.reportNamespaces = new M2),
//     !i) {
//         bu("You will need to pass in an i18next instance by using initReactI18next");
//         const b = (C, N) => typeof N == "string" ? N : N && typeof N == "object" && typeof N.defaultValue == "string" ? N.defaultValue : Array.isArray(C) ? C[C.length - 1] : C
//           , O = [b, {}, !1];
//         return O.t = b,
//         O.i18n = {},
//         O.ready = !1,
//         O
//     }
//     i.options.react && i.options.react.wait !== void 0 && bu("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
//     const a = {
//         ..._2(),
//         ...i.options.react,
//         ...t
//     }
//       , {useSuspense: s, keyPrefix: l} = a;
//     let u = o || i.options && i.options.defaultNS;
//     u = typeof u == "string" ? [u] : u || ["translation"],
//     i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(u);
//     const c = (i.isInitialized || i.initializedStoreOnce) && u.every(b => C2(b, i, a))
//       , d = D2(i, t.lng || null, a.nsMode === "fallback" ? u : u[0], l)
//       , f = () => d
//       , m = () => Bg(i, t.lng || null, a.nsMode === "fallback" ? u : u[0], l)
//       , [v,x] = y.useState(f);
//     let k = u.join();
//     t.lng && (k = `${t.lng}${k}`);
//     const h = I2(k)
//       , p = y.useRef(!0);
//     y.useEffect( () => {
//         const {bindI18n: b, bindI18nStore: O} = a;
//         p.current = !0,
//         !c && !s && (t.lng ? Gd(i, t.lng, u, () => {
//             p.current && x(m)
//         }
//         ) : Kd(i, u, () => {
//             p.current && x(m)
//         }
//         )),
//         c && h && h !== k && p.current && x(m);
//         function C() {
//             p.current && x(m)
//         }
//         return b && i && i.on(b, C),
//         O && i && i.store.on(O, C),
//         () => {
//             p.current = !1,
//             b && i && b.split(" ").forEach(N => i.off(N, C)),
//             O && i && O.split(" ").forEach(N => i.store.off(N, C))
//         }
//     }
//     , [i, k]),
//     y.useEffect( () => {
//         p.current && c && x(f)
//     }
//     , [i, l, c]);
//     const w = [v, i, c];
//     if (w.t = v,
//     w.i18n = i,
//     w.ready = c,
//     c || !c && !s)
//         return w;
//     throw new Promise(b => {
//         t.lng ? Gd(i, t.lng, u, () => b()) : Kd(i, u, () => b())
//     }
//     )
// }
// var Ug = {
//     exports: {}
// };
// (function(e, t) {
//     (function(n, r) {
//         e.exports = r()
//     }
//     )(_t, function() {
//         return function(n) {
//             function r(i) {
//                 if (o[i])
//                     return o[i].exports;
//                 var a = o[i] = {
//                     exports: {},
//                     id: i,
//                     loaded: !1
//                 };
//                 return n[i].call(a.exports, a, a.exports, r),
//                 a.loaded = !0,
//                 a.exports
//             }
//             var o = {};
//             return r.m = n,
//             r.c = o,
//             r.p = "dist/",
//             r(0)
//         }([function(n, r, o) {
//             function i(I) {
//                 return I && I.__esModule ? I : {
//                     default: I
//                 }
//             }
//             var a = Object.assign || function(I) {
//                 for (var S = 1; S < arguments.length; S++) {
//                     var P = arguments[S];
//                     for (var M in P)
//                         Object.prototype.hasOwnProperty.call(P, M) && (I[M] = P[M])
//                 }
//                 return I
//             }
//               , s = o(1)
//               , l = (i(s),
//             o(6))
//               , u = i(l)
//               , c = o(7)
//               , d = i(c)
//               , f = o(8)
//               , m = i(f)
//               , v = o(9)
//               , x = i(v)
//               , k = o(10)
//               , h = i(k)
//               , p = o(11)
//               , w = i(p)
//               , b = o(14)
//               , O = i(b)
//               , C = []
//               , N = !1
//               , _ = {
//                 offset: 120,
//                 delay: 0,
//                 easing: "ease",
//                 duration: 400,
//                 disable: !1,
//                 once: !1,
//                 startEvent: "DOMContentLoaded",
//                 throttleDelay: 99,
//                 debounceDelay: 50,
//                 disableMutationObserver: !1
//             }
//               , z = function() {
//                 var I = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
//                 if (I && (N = !0),
//                 N)
//                     return C = (0,
//                     w.default)(C, _),
//                     (0,
//                     h.default)(C, _.once),
//                     C
//             }
//               , D = function() {
//                 C = (0,
//                 O.default)(),
//                 z()
//             }
//               , A = function() {
//                 C.forEach(function(I, S) {
//                     I.node.removeAttribute("data-aos"),
//                     I.node.removeAttribute("data-aos-easing"),
//                     I.node.removeAttribute("data-aos-duration"),
//                     I.node.removeAttribute("data-aos-delay")
//                 })
//             }
//               , T = function(I) {
//                 return I === !0 || I === "mobile" && x.default.mobile() || I === "phone" && x.default.phone() || I === "tablet" && x.default.tablet() || typeof I == "function" && I() === !0
//             }
//               , B = function(I) {
//                 _ = a(_, I),
//                 C = (0,
//                 O.default)();
//                 var S = document.all && !window.atob;
//                 return T(_.disable) || S ? A() : (_.disableMutationObserver || m.default.isSupported() || (console.info(`
//       aos: MutationObserver is not supported on this browser,
//       code mutations observing has been disabled.
//       You may have to call "refreshHard()" by yourself.
//     `),
//                 _.disableMutationObserver = !0),
//                 document.querySelector("body").setAttribute("data-aos-easing", _.easing),
//                 document.querySelector("body").setAttribute("data-aos-duration", _.duration),
//                 document.querySelector("body").setAttribute("data-aos-delay", _.delay),
//                 _.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? z(!0) : _.startEvent === "load" ? window.addEventListener(_.startEvent, function() {
//                     z(!0)
//                 }) : document.addEventListener(_.startEvent, function() {
//                     z(!0)
//                 }),
//                 window.addEventListener("resize", (0,
//                 d.default)(z, _.debounceDelay, !0)),
//                 window.addEventListener("orientationchange", (0,
//                 d.default)(z, _.debounceDelay, !0)),
//                 window.addEventListener("scroll", (0,
//                 u.default)(function() {
//                     (0,
//                     h.default)(C, _.once)
//                 }, _.throttleDelay)),
//                 _.disableMutationObserver || m.default.ready("[data-aos]", D),
//                 C)
//             };
//             n.exports = {
//                 init: B,
//                 refresh: z,
//                 refreshHard: D
//             }
//         }
//         , function(n, r) {}
//         , , , , , function(n, r) {
//             (function(o) {
//                 function i(T, B, I) {
//                     function S(Q) {
//                         var W = V
//                           , Ue = ie;
//                         return V = ie = void 0,
//                         je = Q,
//                         re = T.apply(Ue, W)
//                     }
//                     function P(Q) {
//                         return je = Q,
//                         ne = setTimeout(j, B),
//                         he ? S(Q) : re
//                     }
//                     function M(Q) {
//                         var W = Q - ke
//                           , Ue = Q - je
//                           , Ct = B - W;
//                         return ae ? D(Ct, Y - Ue) : Ct
//                     }
//                     function E(Q) {
//                         var W = Q - ke
//                           , Ue = Q - je;
//                         return ke === void 0 || W >= B || W < 0 || ae && Ue >= Y
//                     }
//                     function j() {
//                         var Q = A();
//                         return E(Q) ? L(Q) : void (ne = setTimeout(j, M(Q)))
//                     }
//                     function L(Q) {
//                         return ne = void 0,
//                         Z && V ? S(Q) : (V = ie = void 0,
//                         re)
//                     }
//                     function U() {
//                         ne !== void 0 && clearTimeout(ne),
//                         je = 0,
//                         V = ke = ie = ne = void 0
//                     }
//                     function K() {
//                         return ne === void 0 ? re : L(A())
//                     }
//                     function H() {
//                         var Q = A()
//                           , W = E(Q);
//                         if (V = arguments,
//                         ie = this,
//                         ke = Q,
//                         W) {
//                             if (ne === void 0)
//                                 return P(ke);
//                             if (ae)
//                                 return ne = setTimeout(j, B),
//                                 S(ke)
//                         }
//                         return ne === void 0 && (ne = setTimeout(j, B)),
//                         re
//                     }
//                     var V, ie, Y, re, ne, ke, je = 0, he = !1, ae = !1, Z = !0;
//                     if (typeof T != "function")
//                         throw new TypeError(f);
//                     return B = c(B) || 0,
//                     s(I) && (he = !!I.leading,
//                     ae = "maxWait"in I,
//                     Y = ae ? z(c(I.maxWait) || 0, B) : Y,
//                     Z = "trailing"in I ? !!I.trailing : Z),
//                     H.cancel = U,
//                     H.flush = K,
//                     H
//                 }
//                 function a(T, B, I) {
//                     var S = !0
//                       , P = !0;
//                     if (typeof T != "function")
//                         throw new TypeError(f);
//                     return s(I) && (S = "leading"in I ? !!I.leading : S,
//                     P = "trailing"in I ? !!I.trailing : P),
//                     i(T, B, {
//                         leading: S,
//                         maxWait: B,
//                         trailing: P
//                     })
//                 }
//                 function s(T) {
//                     var B = typeof T > "u" ? "undefined" : d(T);
//                     return !!T && (B == "object" || B == "function")
//                 }
//                 function l(T) {
//                     return !!T && (typeof T > "u" ? "undefined" : d(T)) == "object"
//                 }
//                 function u(T) {
//                     return (typeof T > "u" ? "undefined" : d(T)) == "symbol" || l(T) && _.call(T) == v
//                 }
//                 function c(T) {
//                     if (typeof T == "number")
//                         return T;
//                     if (u(T))
//                         return m;
//                     if (s(T)) {
//                         var B = typeof T.valueOf == "function" ? T.valueOf() : T;
//                         T = s(B) ? B + "" : B
//                     }
//                     if (typeof T != "string")
//                         return T === 0 ? T : +T;
//                     T = T.replace(x, "");
//                     var I = h.test(T);
//                     return I || p.test(T) ? w(T.slice(2), I ? 2 : 8) : k.test(T) ? m : +T
//                 }
//                 var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
//                     return typeof T
//                 }
//                 : function(T) {
//                     return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
//                 }
//                   , f = "Expected a function"
//                   , m = NaN
//                   , v = "[object Symbol]"
//                   , x = /^\s+|\s+$/g
//                   , k = /^[-+]0x[0-9a-f]+$/i
//                   , h = /^0b[01]+$/i
//                   , p = /^0o[0-7]+$/i
//                   , w = parseInt
//                   , b = (typeof o > "u" ? "undefined" : d(o)) == "object" && o && o.Object === Object && o
//                   , O = (typeof self > "u" ? "undefined" : d(self)) == "object" && self && self.Object === Object && self
//                   , C = b || O || Function("return this")()
//                   , N = Object.prototype
//                   , _ = N.toString
//                   , z = Math.max
//                   , D = Math.min
//                   , A = function() {
//                     return C.Date.now()
//                 };
//                 n.exports = a
//             }
//             ).call(r, function() {
//                 return this
//             }())
//         }
//         , function(n, r) {
//             (function(o) {
//                 function i(A, T, B) {
//                     function I(Z) {
//                         var Q = H
//                           , W = V;
//                         return H = V = void 0,
//                         ke = Z,
//                         Y = A.apply(W, Q)
//                     }
//                     function S(Z) {
//                         return ke = Z,
//                         re = setTimeout(E, T),
//                         je ? I(Z) : Y
//                     }
//                     function P(Z) {
//                         var Q = Z - ne
//                           , W = Z - ke
//                           , Ue = T - Q;
//                         return he ? z(Ue, ie - W) : Ue
//                     }
//                     function M(Z) {
//                         var Q = Z - ne
//                           , W = Z - ke;
//                         return ne === void 0 || Q >= T || Q < 0 || he && W >= ie
//                     }
//                     function E() {
//                         var Z = D();
//                         return M(Z) ? j(Z) : void (re = setTimeout(E, P(Z)))
//                     }
//                     function j(Z) {
//                         return re = void 0,
//                         ae && H ? I(Z) : (H = V = void 0,
//                         Y)
//                     }
//                     function L() {
//                         re !== void 0 && clearTimeout(re),
//                         ke = 0,
//                         H = ne = V = re = void 0
//                     }
//                     function U() {
//                         return re === void 0 ? Y : j(D())
//                     }
//                     function K() {
//                         var Z = D()
//                           , Q = M(Z);
//                         if (H = arguments,
//                         V = this,
//                         ne = Z,
//                         Q) {
//                             if (re === void 0)
//                                 return S(ne);
//                             if (he)
//                                 return re = setTimeout(E, T),
//                                 I(ne)
//                         }
//                         return re === void 0 && (re = setTimeout(E, T)),
//                         Y
//                     }
//                     var H, V, ie, Y, re, ne, ke = 0, je = !1, he = !1, ae = !0;
//                     if (typeof A != "function")
//                         throw new TypeError(d);
//                     return T = u(T) || 0,
//                     a(B) && (je = !!B.leading,
//                     he = "maxWait"in B,
//                     ie = he ? _(u(B.maxWait) || 0, T) : ie,
//                     ae = "trailing"in B ? !!B.trailing : ae),
//                     K.cancel = L,
//                     K.flush = U,
//                     K
//                 }
//                 function a(A) {
//                     var T = typeof A > "u" ? "undefined" : c(A);
//                     return !!A && (T == "object" || T == "function")
//                 }
//                 function s(A) {
//                     return !!A && (typeof A > "u" ? "undefined" : c(A)) == "object"
//                 }
//                 function l(A) {
//                     return (typeof A > "u" ? "undefined" : c(A)) == "symbol" || s(A) && N.call(A) == m
//                 }
//                 function u(A) {
//                     if (typeof A == "number")
//                         return A;
//                     if (l(A))
//                         return f;
//                     if (a(A)) {
//                         var T = typeof A.valueOf == "function" ? A.valueOf() : A;
//                         A = a(T) ? T + "" : T
//                     }
//                     if (typeof A != "string")
//                         return A === 0 ? A : +A;
//                     A = A.replace(v, "");
//                     var B = k.test(A);
//                     return B || h.test(A) ? p(A.slice(2), B ? 2 : 8) : x.test(A) ? f : +A
//                 }
//                 var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
//                     return typeof A
//                 }
//                 : function(A) {
//                     return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
//                 }
//                   , d = "Expected a function"
//                   , f = NaN
//                   , m = "[object Symbol]"
//                   , v = /^\s+|\s+$/g
//                   , x = /^[-+]0x[0-9a-f]+$/i
//                   , k = /^0b[01]+$/i
//                   , h = /^0o[0-7]+$/i
//                   , p = parseInt
//                   , w = (typeof o > "u" ? "undefined" : c(o)) == "object" && o && o.Object === Object && o
//                   , b = (typeof self > "u" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self
//                   , O = w || b || Function("return this")()
//                   , C = Object.prototype
//                   , N = C.toString
//                   , _ = Math.max
//                   , z = Math.min
//                   , D = function() {
//                     return O.Date.now()
//                 };
//                 n.exports = i
//             }
//             ).call(r, function() {
//                 return this
//             }())
//         }
//         , function(n, r) {
//             function o(c) {
//                 var d = void 0
//                   , f = void 0;
//                 for (d = 0; d < c.length; d += 1)
//                     if (f = c[d],
//                     f.dataset && f.dataset.aos || f.children && o(f.children))
//                         return !0;
//                 return !1
//             }
//             function i() {
//                 return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
//             }
//             function a() {
//                 return !!i()
//             }
//             function s(c, d) {
//                 var f = window.document
//                   , m = i()
//                   , v = new m(l);
//                 u = d,
//                 v.observe(f.documentElement, {
//                     childList: !0,
//                     subtree: !0,
//                     removedNodes: !0
//                 })
//             }
//             function l(c) {
//                 c && c.forEach(function(d) {
//                     var f = Array.prototype.slice.call(d.addedNodes)
//                       , m = Array.prototype.slice.call(d.removedNodes)
//                       , v = f.concat(m);
//                     if (o(v))
//                         return u()
//                 })
//             }
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var u = function() {};
//             r.default = {
//                 isSupported: a,
//                 ready: s
//             }
//         }
//         , function(n, r) {
//             function o(f, m) {
//                 if (!(f instanceof m))
//                     throw new TypeError("Cannot call a class as a function")
//             }
//             function i() {
//                 return navigator.userAgent || navigator.vendor || window.opera || ""
//             }
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var a = function() {
//                 function f(m, v) {
//                     for (var x = 0; x < v.length; x++) {
//                         var k = v[x];
//                         k.enumerable = k.enumerable || !1,
//                         k.configurable = !0,
//                         "value"in k && (k.writable = !0),
//                         Object.defineProperty(m, k.key, k)
//                     }
//                 }
//                 return function(m, v, x) {
//                     return v && f(m.prototype, v),
//                     x && f(m, x),
//                     m
//                 }
//             }()
//               , s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
//               , l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
//               , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
//               , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
//               , d = function() {
//                 function f() {
//                     o(this, f)
//                 }
//                 return a(f, [{
//                     key: "phone",
//                     value: function() {
//                         var m = i();
//                         return !(!s.test(m) && !l.test(m.substr(0, 4)))
//                     }
//                 }, {
//                     key: "mobile",
//                     value: function() {
//                         var m = i();
//                         return !(!u.test(m) && !c.test(m.substr(0, 4)))
//                     }
//                 }, {
//                     key: "tablet",
//                     value: function() {
//                         return this.mobile() && !this.phone()
//                     }
//                 }]),
//                 f
//             }();
//             r.default = new d
//         }
//         , function(n, r) {
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var o = function(a, s, l) {
//                 var u = a.node.getAttribute("data-aos-once");
//                 s > a.position ? a.node.classList.add("aos-animate") : typeof u < "u" && (u === "false" || !l && u !== "true") && a.node.classList.remove("aos-animate")
//             }
//               , i = function(a, s) {
//                 var l = window.pageYOffset
//                   , u = window.innerHeight;
//                 a.forEach(function(c, d) {
//                     o(c, u + l, s)
//                 })
//             };
//             r.default = i
//         }
//         , function(n, r, o) {
//             function i(u) {
//                 return u && u.__esModule ? u : {
//                     default: u
//                 }
//             }
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var a = o(12)
//               , s = i(a)
//               , l = function(u, c) {
//                 return u.forEach(function(d, f) {
//                     d.node.classList.add("aos-init"),
//                     d.position = (0,
//                     s.default)(d.node, c.offset)
//                 }),
//                 u
//             };
//             r.default = l
//         }
//         , function(n, r, o) {
//             function i(u) {
//                 return u && u.__esModule ? u : {
//                     default: u
//                 }
//             }
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var a = o(13)
//               , s = i(a)
//               , l = function(u, c) {
//                 var d = 0
//                   , f = 0
//                   , m = window.innerHeight
//                   , v = {
//                     offset: u.getAttribute("data-aos-offset"),
//                     anchor: u.getAttribute("data-aos-anchor"),
//                     anchorPlacement: u.getAttribute("data-aos-anchor-placement")
//                 };
//                 switch (v.offset && !isNaN(v.offset) && (f = parseInt(v.offset)),
//                 v.anchor && document.querySelectorAll(v.anchor) && (u = document.querySelectorAll(v.anchor)[0]),
//                 d = (0,
//                 s.default)(u).top,
//                 v.anchorPlacement) {
//                 case "top-bottom":
//                     break;
//                 case "center-bottom":
//                     d += u.offsetHeight / 2;
//                     break;
//                 case "bottom-bottom":
//                     d += u.offsetHeight;
//                     break;
//                 case "top-center":
//                     d += m / 2;
//                     break;
//                 case "bottom-center":
//                     d += m / 2 + u.offsetHeight;
//                     break;
//                 case "center-center":
//                     d += m / 2 + u.offsetHeight / 2;
//                     break;
//                 case "top-top":
//                     d += m;
//                     break;
//                 case "bottom-top":
//                     d += u.offsetHeight + m;
//                     break;
//                 case "center-top":
//                     d += u.offsetHeight / 2 + m
//                 }
//                 return v.anchorPlacement || v.offset || isNaN(c) || (f = c),
//                 d + f
//             };
//             r.default = l
//         }
//         , function(n, r) {
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var o = function(i) {
//                 for (var a = 0, s = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop); )
//                     a += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0),
//                     s += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0),
//                     i = i.offsetParent;
//                 return {
//                     top: s,
//                     left: a
//                 }
//             };
//             r.default = o
//         }
//         , function(n, r) {
//             Object.defineProperty(r, "__esModule", {
//                 value: !0
//             });
//             var o = function(i) {
//                 return i = i || document.querySelectorAll("[data-aos]"),
//                 Array.prototype.map.call(i, function(a) {
//                     return {
//                         node: a
//                     }
//                 })
//             };
//             r.default = o
//         }
//         ])
//     })
// }
// )(Ug);
// var $2 = Ug.exports;
// const z2 = Mn($2);
// var Hg = {
//     exports: {}
// };
// /*!
// 	Copyright (c) 2018 Jed Watson.
// 	Licensed under the MIT License (MIT), see
// 	http://jedwatson.github.io/classnames
// */
// (function(e) {
//     (function() {
//         var t = {}.hasOwnProperty;
//         function n() {
//             for (var i = "", a = 0; a < arguments.length; a++) {
//                 var s = arguments[a];
//                 s && (i = o(i, r(s)))
//             }
//             return i
//         }
//         function r(i) {
//             if (typeof i == "string" || typeof i == "number")
//                 return i;
//             if (typeof i != "object")
//                 return "";
//             if (Array.isArray(i))
//                 return n.apply(null, i);
//             if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
//                 return i.toString();
//             var a = "";
//             for (var s in i)
//                 t.call(i, s) && i[s] && (a = o(a, s));
//             return a
//         }
//         function o(i, a) {
//             return a ? i ? i + " " + a : i + a : i
//         }
//         e.exports ? (n.default = n,
//         e.exports = n) : window.classNames = n
//     }
//     )()
// }
// )(Hg);
// var F2 = Hg.exports;
// const Ne = Mn(F2)
//   , B2 = ["xxl", "xl", "lg", "md", "sm", "xs"]
//   , U2 = "xs"
//   , ws = y.createContext({
//     prefixes: {},
//     breakpoints: B2,
//     minBreakpoint: U2
// });
// function lt(e, t) {
//     const {prefixes: n} = y.useContext(ws);
//     return e || n[t] || t
// }
// function Wg() {
//     const {breakpoints: e} = y.useContext(ws);
//     return e
// }
// function Vg() {
//     const {minBreakpoint: e} = y.useContext(ws);
//     return e
// }
// function Kg() {
//     const {dir: e} = y.useContext(ws);
//     return e === "rtl"
// }
// const zn = y.forwardRef( ({bsPrefix: e, fluid: t=!1, as: n="div", className: r, ...o}, i) => {
//     const a = lt(e, "container")
//       , s = typeof t == "string" ? `-${t}` : "-fluid";
//     return g.jsx(n, {
//         ref: i,
//         ...o,
//         className: Ne(r, t ? `${a}${s}` : a)
//     })
// }
// );
// zn.displayName = "Container";
// var Ce = {}
//   , ef = {}
//   , hi = {}
//   , mi = {}
//   , Gg = "Expected a function"
//   , Yd = NaN
//   , H2 = "[object Symbol]"
//   , W2 = /^\s+|\s+$/g
//   , V2 = /^[-+]0x[0-9a-f]+$/i
//   , K2 = /^0b[01]+$/i
//   , G2 = /^0o[0-7]+$/i
//   , Y2 = parseInt
//   , X2 = typeof _t == "object" && _t && _t.Object === Object && _t
//   , q2 = typeof self == "object" && self && self.Object === Object && self
//   , Q2 = X2 || q2 || Function("return this")()
//   , J2 = Object.prototype
//   , Z2 = J2.toString
//   , ew = Math.max
//   , tw = Math.min
//   , cl = function() {
//     return Q2.Date.now()
// };
// function nw(e, t, n) {
//     var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
//     if (typeof e != "function")
//         throw new TypeError(Gg);
//     t = Xd(t) || 0,
//     Ua(n) && (c = !!n.leading,
//     d = "maxWait"in n,
//     i = d ? ew(Xd(n.maxWait) || 0, t) : i,
//     f = "trailing"in n ? !!n.trailing : f);
//     function m(C) {
//         var N = r
//           , _ = o;
//         return r = o = void 0,
//         u = C,
//         a = e.apply(_, N),
//         a
//     }
//     function v(C) {
//         return u = C,
//         s = setTimeout(h, t),
//         c ? m(C) : a
//     }
//     function x(C) {
//         var N = C - l
//           , _ = C - u
//           , z = t - N;
//         return d ? tw(z, i - _) : z
//     }
//     function k(C) {
//         var N = C - l
//           , _ = C - u;
//         return l === void 0 || N >= t || N < 0 || d && _ >= i
//     }
//     function h() {
//         var C = cl();
//         if (k(C))
//             return p(C);
//         s = setTimeout(h, x(C))
//     }
//     function p(C) {
//         return s = void 0,
//         f && r ? m(C) : (r = o = void 0,
//         a)
//     }
//     function w() {
//         s !== void 0 && clearTimeout(s),
//         u = 0,
//         r = l = o = s = void 0
//     }
//     function b() {
//         return s === void 0 ? a : p(cl())
//     }
//     function O() {
//         var C = cl()
//           , N = k(C);
//         if (r = arguments,
//         o = this,
//         l = C,
//         N) {
//             if (s === void 0)
//                 return v(l);
//             if (d)
//                 return s = setTimeout(h, t),
//                 m(l)
//         }
//         return s === void 0 && (s = setTimeout(h, t)),
//         a
//     }
//     return O.cancel = w,
//     O.flush = b,
//     O
// }
// function rw(e, t, n) {
//     var r = !0
//       , o = !0;
//     if (typeof e != "function")
//         throw new TypeError(Gg);
//     return Ua(n) && (r = "leading"in n ? !!n.leading : r,
//     o = "trailing"in n ? !!n.trailing : o),
//     nw(e, t, {
//         leading: r,
//         maxWait: t,
//         trailing: o
//     })
// }
// function Ua(e) {
//     var t = typeof e;
//     return !!e && (t == "object" || t == "function")
// }
// function ow(e) {
//     return !!e && typeof e == "object"
// }
// function iw(e) {
//     return typeof e == "symbol" || ow(e) && Z2.call(e) == H2
// }
// function Xd(e) {
//     if (typeof e == "number")
//         return e;
//     if (iw(e))
//         return Yd;
//     if (Ua(e)) {
//         var t = typeof e.valueOf == "function" ? e.valueOf() : e;
//         e = Ua(t) ? t + "" : t
//     }
//     if (typeof e != "string")
//         return e === 0 ? e : +e;
//     e = e.replace(W2, "");
//     var n = K2.test(e);
//     return n || G2.test(e) ? Y2(e.slice(2), n ? 2 : 8) : V2.test(e) ? Yd : +e
// }
// var aw = rw
//   , gi = {};
// Object.defineProperty(gi, "__esModule", {
//     value: !0
// });
// gi.addPassiveEventListener = function(t, n, r) {
//     var o = r.name;
//     o || (o = n,
//     console.warn("Listener must be a named function.")),
//     ma.has(n) || ma.set(n, new Set);
//     var i = ma.get(n);
//     if (!i.has(o)) {
//         var a = function() {
//             var s = !1;
//             try {
//                 var l = Object.defineProperty({}, "passive", {
//                     get: function() {
//                         s = !0
//                     }
//                 });
//                 window.addEventListener("test", null, l)
//             } catch {}
//             return s
//         }();
//         t.addEventListener(n, r, a ? {
//             passive: !0
//         } : !1),
//         i.add(o)
//     }
// }
// ;
// gi.removePassiveEventListener = function(t, n, r) {
//     t.removeEventListener(n, r),
//     ma.get(n).delete(r.name || n)
// }
// ;
// var ma = new Map;
// Object.defineProperty(mi, "__esModule", {
//     value: !0
// });
// var sw = aw
//   , lw = cw(sw)
//   , uw = gi;
// function cw(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var fw = function(t) {
//     var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
//     return (0,
//     lw.default)(t, n)
// }
//   , ye = {
//     spyCallbacks: [],
//     spySetState: [],
//     scrollSpyContainers: [],
//     mount: function(t, n) {
//         if (t) {
//             var r = fw(function(o) {
//                 ye.scrollHandler(t)
//             }, n);
//             ye.scrollSpyContainers.push(t),
//             (0,
//             uw.addPassiveEventListener)(t, "scroll", r)
//         }
//     },
//     isMounted: function(t) {
//         return ye.scrollSpyContainers.indexOf(t) !== -1
//     },
//     currentPositionX: function(t) {
//         if (t === document) {
//             var n = window.pageYOffset !== void 0
//               , r = (document.compatMode || "") === "CSS1Compat";
//             return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
//         } else
//             return t.scrollLeft
//     },
//     currentPositionY: function(t) {
//         if (t === document) {
//             var n = window.pageXOffset !== void 0
//               , r = (document.compatMode || "") === "CSS1Compat";
//             return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
//         } else
//             return t.scrollTop
//     },
//     scrollHandler: function(t) {
//         var n = ye.scrollSpyContainers[ye.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
//         n.forEach(function(r) {
//             return r(ye.currentPositionX(t), ye.currentPositionY(t))
//         })
//     },
//     addStateHandler: function(t) {
//         ye.spySetState.push(t)
//     },
//     addSpyHandler: function(t, n) {
//         var r = ye.scrollSpyContainers[ye.scrollSpyContainers.indexOf(n)];
//         r.spyCallbacks || (r.spyCallbacks = []),
//         r.spyCallbacks.push(t),
//         t(ye.currentPositionX(n), ye.currentPositionY(n))
//     },
//     updateStates: function() {
//         ye.spySetState.forEach(function(t) {
//             return t()
//         })
//     },
//     unmount: function(t, n) {
//         ye.scrollSpyContainers.forEach(function(r) {
//             return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
//         }),
//         ye.spySetState && ye.spySetState.length && ye.spySetState.indexOf(t) > -1 && ye.spySetState.splice(ye.spySetState.indexOf(t), 1),
//         document.removeEventListener("scroll", ye.scrollHandler)
//     },
//     update: function() {
//         return ye.scrollSpyContainers.forEach(function(t) {
//             return ye.scrollHandler(t)
//         })
//     }
// };
// mi.default = ye;
// var eo = {}
//   , vi = {};
// Object.defineProperty(vi, "__esModule", {
//     value: !0
// });
// var dw = function(t, n) {
//     var r = t.indexOf("#") === 0 ? t.substring(1) : t
//       , o = r ? "#" + r : ""
//       , i = window && window.location
//       , a = o ? i.pathname + i.search + o : i.pathname + i.search;
//     n ? history.pushState(history.state, "", a) : history.replaceState(history.state, "", a)
// }
//   , pw = function() {
//     return window.location.hash.replace(/^#/, "")
// }
//   , hw = function(t) {
//     return function(n) {
//         return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16)
//     }
// }
//   , mw = function(t) {
//     return getComputedStyle(t).position !== "static"
// }
//   , fl = function(t, n) {
//     for (var r = t.offsetTop, o = t.offsetParent; o && !n(o); )
//         r += o.offsetTop,
//         o = o.offsetParent;
//     return {
//         offsetTop: r,
//         offsetParent: o
//     }
// }
//   , gw = function(t, n, r) {
//     if (r)
//         return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
//     if (t === document)
//         return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
//     if (mw(t)) {
//         if (n.offsetParent !== t) {
//             var o = function(c) {
//                 return c === t || c === document
//             }
//               , i = fl(n, o)
//               , a = i.offsetTop
//               , s = i.offsetParent;
//             if (s !== t)
//                 throw new Error("Seems containerElement is not an ancestor of the Element");
//             return a
//         }
//         return n.offsetTop
//     }
//     if (n.offsetParent === t.offsetParent)
//         return n.offsetTop - t.offsetTop;
//     var l = function(c) {
//         return c === document
//     };
//     return fl(n, l).offsetTop - fl(t, l).offsetTop
// };
// vi.default = {
//     updateHash: dw,
//     getHash: pw,
//     filterElementInContainer: hw,
//     scrollOffset: gw
// };
// var xs = {}
//   , tf = {};
// Object.defineProperty(tf, "__esModule", {
//     value: !0
// });
// tf.default = {
//     defaultEasing: function(t) {
//         return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
//     },
//     linear: function(t) {
//         return t
//     },
//     easeInQuad: function(t) {
//         return t * t
//     },
//     easeOutQuad: function(t) {
//         return t * (2 - t)
//     },
//     easeInOutQuad: function(t) {
//         return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
//     },
//     easeInCubic: function(t) {
//         return t * t * t
//     },
//     easeOutCubic: function(t) {
//         return --t * t * t + 1
//     },
//     easeInOutCubic: function(t) {
//         return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
//     },
//     easeInQuart: function(t) {
//         return t * t * t * t
//     },
//     easeOutQuart: function(t) {
//         return 1 - --t * t * t * t
//     },
//     easeInOutQuart: function(t) {
//         return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
//     },
//     easeInQuint: function(t) {
//         return t * t * t * t * t
//     },
//     easeOutQuint: function(t) {
//         return 1 + --t * t * t * t * t
//     },
//     easeInOutQuint: function(t) {
//         return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
//     }
// };
// var nf = {};
// Object.defineProperty(nf, "__esModule", {
//     value: !0
// });
// var vw = gi
//   , yw = ["mousedown", "mousewheel", "touchmove", "keydown"];
// nf.default = {
//     subscribe: function(t) {
//         return typeof document < "u" && yw.forEach(function(n) {
//             return (0,
//             vw.addPassiveEventListener)(document, n, t)
//         })
//     }
// };
// var yi = {};
// Object.defineProperty(yi, "__esModule", {
//     value: !0
// });
// var ku = {
//     registered: {},
//     scrollEvent: {
//         register: function(t, n) {
//             ku.registered[t] = n
//         },
//         remove: function(t) {
//             ku.registered[t] = null
//         }
//     }
// };
// yi.default = ku;
// Object.defineProperty(xs, "__esModule", {
//     value: !0
// });
// var ww = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , xw = vi;
// bs(xw);
// var bw = tf
//   , qd = bs(bw)
//   , Sw = nf
//   , kw = bs(Sw)
//   , Cw = yi
//   , Nt = bs(Cw);
// function bs(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var Yg = function(t) {
//     return qd.default[t.smooth] || qd.default.defaultEasing
// }
//   , Ew = function(t) {
//     return typeof t == "function" ? t : function() {
//         return t
//     }
// }
//   , Ow = function() {
//     if (typeof window < "u")
//         return window.requestAnimationFrame || window.webkitRequestAnimationFrame
// }
//   , Cu = function() {
//     return Ow() || function(e, t, n) {
//         window.setTimeout(e, n || 1e3 / 60, new Date().getTime())
//     }
// }()
//   , Xg = function() {
//     return {
//         currentPosition: 0,
//         startPosition: 0,
//         targetPosition: 0,
//         progress: 0,
//         duration: 0,
//         cancel: !1,
//         target: null,
//         containerElement: null,
//         to: null,
//         start: null,
//         delta: null,
//         percent: null,
//         delayTimeout: null
//     }
// }
//   , qg = function(t) {
//     var n = t.data.containerElement;
//     if (n && n !== document && n !== document.body)
//         return n.scrollLeft;
//     var r = window.pageXOffset !== void 0
//       , o = (document.compatMode || "") === "CSS1Compat";
//     return r ? window.pageXOffset : o ? document.documentElement.scrollLeft : document.body.scrollLeft
// }
//   , Qg = function(t) {
//     var n = t.data.containerElement;
//     if (n && n !== document && n !== document.body)
//         return n.scrollTop;
//     var r = window.pageXOffset !== void 0
//       , o = (document.compatMode || "") === "CSS1Compat";
//     return r ? window.pageYOffset : o ? document.documentElement.scrollTop : document.body.scrollTop
// }
//   , Nw = function(t) {
//     var n = t.data.containerElement;
//     if (n && n !== document && n !== document.body)
//         return n.scrollWidth - n.offsetWidth;
//     var r = document.body
//       , o = document.documentElement;
//     return Math.max(r.scrollWidth, r.offsetWidth, o.clientWidth, o.scrollWidth, o.offsetWidth)
// }
//   , Pw = function(t) {
//     var n = t.data.containerElement;
//     if (n && n !== document && n !== document.body)
//         return n.scrollHeight - n.offsetHeight;
//     var r = document.body
//       , o = document.documentElement;
//     return Math.max(r.scrollHeight, r.offsetHeight, o.clientHeight, o.scrollHeight, o.offsetHeight)
// }
//   , Tw = function e(t, n, r) {
//     var o = n.data;
//     if (!n.ignoreCancelEvents && o.cancel) {
//         Nt.default.registered.end && Nt.default.registered.end(o.to, o.target, o.currentPositionY);
//         return
//     }
//     if (o.delta = Math.round(o.targetPosition - o.startPosition),
//     o.start === null && (o.start = r),
//     o.progress = r - o.start,
//     o.percent = o.progress >= o.duration ? 1 : t(o.progress / o.duration),
//     o.currentPosition = o.startPosition + Math.ceil(o.delta * o.percent),
//     o.containerElement && o.containerElement !== document && o.containerElement !== document.body ? n.horizontal ? o.containerElement.scrollLeft = o.currentPosition : o.containerElement.scrollTop = o.currentPosition : n.horizontal ? window.scrollTo(o.currentPosition, 0) : window.scrollTo(0, o.currentPosition),
//     o.percent < 1) {
//         var i = e.bind(null, t, n);
//         Cu.call(window, i);
//         return
//     }
//     Nt.default.registered.end && Nt.default.registered.end(o.to, o.target, o.currentPosition)
// }
//   , rf = function(t) {
//     t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
// }
//   , wi = function(t, n, r, o) {
//     n.data = n.data || Xg(),
//     window.clearTimeout(n.data.delayTimeout);
//     var i = function() {
//         n.data.cancel = !0
//     };
//     if (kw.default.subscribe(i),
//     rf(n),
//     n.data.start = null,
//     n.data.cancel = !1,
//     n.data.startPosition = n.horizontal ? qg(n) : Qg(n),
//     n.data.targetPosition = n.absolute ? t : t + n.data.startPosition,
//     n.data.startPosition === n.data.targetPosition) {
//         Nt.default.registered.end && Nt.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
//         return
//     }
//     n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition),
//     n.data.duration = Ew(n.duration)(n.data.delta),
//     n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration),
//     n.data.to = r,
//     n.data.target = o;
//     var a = Yg(n)
//       , s = Tw.bind(null, a, n);
//     if (n && n.delay > 0) {
//         n.data.delayTimeout = window.setTimeout(function() {
//             Nt.default.registered.begin && Nt.default.registered.begin(n.data.to, n.data.target),
//             Cu.call(window, s)
//         }, n.delay);
//         return
//     }
//     Nt.default.registered.begin && Nt.default.registered.begin(n.data.to, n.data.target),
//     Cu.call(window, s)
// }
//   , Ss = function(t) {
//     return t = ww({}, t),
//     t.data = t.data || Xg(),
//     t.absolute = !0,
//     t
// }
//   , _w = function(t) {
//     wi(0, Ss(t))
// }
//   , jw = function(t, n) {
//     wi(t, Ss(n))
// }
//   , Lw = function(t) {
//     t = Ss(t),
//     rf(t),
//     wi(t.horizontal ? Nw(t) : Pw(t), t)
// }
//   , Rw = function(t, n) {
//     n = Ss(n),
//     rf(n);
//     var r = n.horizontal ? qg(n) : Qg(n);
//     wi(t + r, n)
// };
// xs.default = {
//     animateTopScroll: wi,
//     getAnimationType: Yg,
//     scrollToTop: _w,
//     scrollToBottom: Lw,
//     scrollTo: jw,
//     scrollMore: Rw
// };
// Object.defineProperty(eo, "__esModule", {
//     value: !0
// });
// var Aw = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , Mw = vi
//   , Iw = of(Mw)
//   , Dw = xs
//   , $w = of(Dw)
//   , zw = yi
//   , Vi = of(zw);
// function of(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var Ki = {}
//   , Qd = void 0;
// eo.default = {
//     unmount: function() {
//         Ki = {}
//     },
//     register: function(t, n) {
//         Ki[t] = n
//     },
//     unregister: function(t) {
//         delete Ki[t]
//     },
//     get: function(t) {
//         return Ki[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
//     },
//     setActiveLink: function(t) {
//         return Qd = t
//     },
//     getActiveLink: function() {
//         return Qd
//     },
//     scrollTo: function(t, n) {
//         var r = this.get(t);
//         if (!r) {
//             console.warn("target Element not found");
//             return
//         }
//         n = Aw({}, n, {
//             absolute: !1
//         });
//         var o = n.containerId
//           , i = n.container
//           , a = void 0;
//         o ? a = document.getElementById(o) : i && i.nodeType ? a = i : a = document,
//         n.absolute = !0;
//         var s = n.horizontal
//           , l = Iw.default.scrollOffset(a, r, s) + (n.offset || 0);
//         if (!n.smooth) {
//             Vi.default.registered.begin && Vi.default.registered.begin(t, r),
//             a === document ? n.horizontal ? window.scrollTo(l, 0) : window.scrollTo(0, l) : a.scrollTop = l,
//             Vi.default.registered.end && Vi.default.registered.end(t, r);
//             return
//         }
//         $w.default.animateTopScroll(l, n, t, r)
//     }
// };
// var Jg = {
//     exports: {}
// }
//   , Fw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
//   , Bw = Fw
//   , Uw = Bw;
// function Zg() {}
// function ev() {}
// ev.resetWarningCache = Zg;
// var Hw = function() {
//     function e(r, o, i, a, s, l) {
//         if (l !== Uw) {
//             var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
//             throw u.name = "Invariant Violation",
//             u
//         }
//     }
//     e.isRequired = e;
//     function t() {
//         return e
//     }
//     var n = {
//         array: e,
//         bigint: e,
//         bool: e,
//         func: e,
//         number: e,
//         object: e,
//         string: e,
//         symbol: e,
//         any: e,
//         arrayOf: t,
//         element: e,
//         elementType: e,
//         instanceOf: t,
//         node: e,
//         objectOf: t,
//         oneOf: t,
//         oneOfType: t,
//         shape: t,
//         exact: t,
//         checkPropTypes: ev,
//         resetWarningCache: Zg
//     };
//     return n.PropTypes = n,
//     n
// };
// Jg.exports = Hw();
// var xi = Jg.exports;
// const q = Mn(xi);
// var ks = {};
// Object.defineProperty(ks, "__esModule", {
//     value: !0
// });
// var Ww = vi
//   , dl = Vw(Ww);
// function Vw(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var Kw = {
//     mountFlag: !1,
//     initialized: !1,
//     scroller: null,
//     containers: {},
//     mount: function(t) {
//         this.scroller = t,
//         this.handleHashChange = this.handleHashChange.bind(this),
//         window.addEventListener("hashchange", this.handleHashChange),
//         this.initStateFromHash(),
//         this.mountFlag = !0
//     },
//     mapContainer: function(t, n) {
//         this.containers[t] = n
//     },
//     isMounted: function() {
//         return this.mountFlag
//     },
//     isInitialized: function() {
//         return this.initialized
//     },
//     initStateFromHash: function() {
//         var t = this
//           , n = this.getHash();
//         n ? window.setTimeout(function() {
//             t.scrollTo(n, !0),
//             t.initialized = !0
//         }, 10) : this.initialized = !0
//     },
//     scrollTo: function(t, n) {
//         var r = this.scroller
//           , o = r.get(t);
//         if (o && (n || t !== r.getActiveLink())) {
//             var i = this.containers[t] || document;
//             r.scrollTo(t, {
//                 container: i
//             })
//         }
//     },
//     getHash: function() {
//         return dl.default.getHash()
//     },
//     changeHash: function(t, n) {
//         this.isInitialized() && dl.default.getHash() !== t && dl.default.updateHash(t, n)
//     },
//     handleHashChange: function() {
//         this.scrollTo(this.getHash())
//     },
//     unmount: function() {
//         this.scroller = null,
//         this.containers = null,
//         window.removeEventListener("hashchange", this.handleHashChange)
//     }
// };
// ks.default = Kw;
// Object.defineProperty(hi, "__esModule", {
//     value: !0
// });
// var Gi = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , Gw = function() {
//     function e(t, n) {
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             o.enumerable = o.enumerable || !1,
//             o.configurable = !0,
//             "value"in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//     }
//     return function(t, n, r) {
//         return n && e(t.prototype, n),
//         r && e(t, r),
//         t
//     }
// }()
//   , Yw = y
//   , Jd = bi(Yw)
//   , Xw = mi
//   , Yi = bi(Xw)
//   , qw = eo
//   , Qw = bi(qw)
//   , Jw = xi
//   , me = bi(Jw)
//   , Zw = ks
//   , ln = bi(Zw);
// function bi(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// function ex(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function tx(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function nx(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// var Zd = {
//     to: me.default.string.isRequired,
//     containerId: me.default.string,
//     container: me.default.object,
//     activeClass: me.default.string,
//     activeStyle: me.default.object,
//     spy: me.default.bool,
//     horizontal: me.default.bool,
//     smooth: me.default.oneOfType([me.default.bool, me.default.string]),
//     offset: me.default.number,
//     delay: me.default.number,
//     isDynamic: me.default.bool,
//     onClick: me.default.func,
//     duration: me.default.oneOfType([me.default.number, me.default.func]),
//     absolute: me.default.bool,
//     onSetActive: me.default.func,
//     onSetInactive: me.default.func,
//     ignoreCancelEvents: me.default.bool,
//     hashSpy: me.default.bool,
//     saveHashHistory: me.default.bool,
//     spyThrottle: me.default.number
// };
// hi.default = function(e, t) {
//     var n = t || Qw.default
//       , r = function(i) {
//         nx(a, i);
//         function a(s) {
//             ex(this, a);
//             var l = tx(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, s));
//             return o.call(l),
//             l.state = {
//                 active: !1
//             },
//             l
//         }
//         return Gw(a, [{
//             key: "getScrollSpyContainer",
//             value: function() {
//                 var l = this.props.containerId
//                   , u = this.props.container;
//                 return l && !u ? document.getElementById(l) : u && u.nodeType ? u : document
//             }
//         }, {
//             key: "componentDidMount",
//             value: function() {
//                 if (this.props.spy || this.props.hashSpy) {
//                     var l = this.getScrollSpyContainer();
//                     Yi.default.isMounted(l) || Yi.default.mount(l, this.props.spyThrottle),
//                     this.props.hashSpy && (ln.default.isMounted() || ln.default.mount(n),
//                     ln.default.mapContainer(this.props.to, l)),
//                     Yi.default.addSpyHandler(this.spyHandler, l),
//                     this.setState({
//                         container: l
//                     })
//                 }
//             }
//         }, {
//             key: "componentWillUnmount",
//             value: function() {
//                 Yi.default.unmount(this.stateHandler, this.spyHandler)
//             }
//         }, {
//             key: "render",
//             value: function() {
//                 var l = "";
//                 this.state && this.state.active ? l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : l = this.props.className;
//                 var u = {};
//                 this.state && this.state.active ? u = Gi({}, this.props.style, this.props.activeStyle) : u = Gi({}, this.props.style);
//                 var c = Gi({}, this.props);
//                 for (var d in Zd)
//                     c.hasOwnProperty(d) && delete c[d];
//                 return c.className = l,
//                 c.style = u,
//                 c.onClick = this.handleClick,
//                 Jd.default.createElement(e, c)
//             }
//         }]),
//         a
//     }(Jd.default.PureComponent)
//       , o = function() {
//         var a = this;
//         this.scrollTo = function(s, l) {
//             n.scrollTo(s, Gi({}, a.state, l))
//         }
//         ,
//         this.handleClick = function(s) {
//             a.props.onClick && a.props.onClick(s),
//             s.stopPropagation && s.stopPropagation(),
//             s.preventDefault && s.preventDefault(),
//             a.scrollTo(a.props.to, a.props)
//         }
//         ,
//         this.spyHandler = function(s, l) {
//             var u = a.getScrollSpyContainer();
//             if (!(ln.default.isMounted() && !ln.default.isInitialized())) {
//                 var c = a.props.horizontal
//                   , d = a.props.to
//                   , f = null
//                   , m = void 0
//                   , v = void 0;
//                 if (c) {
//                     var x = 0
//                       , k = 0
//                       , h = 0;
//                     if (u.getBoundingClientRect) {
//                         var p = u.getBoundingClientRect();
//                         h = p.left
//                     }
//                     if (!f || a.props.isDynamic) {
//                         if (f = n.get(d),
//                         !f)
//                             return;
//                         var w = f.getBoundingClientRect();
//                         x = w.left - h + s,
//                         k = x + w.width
//                     }
//                     var b = s - a.props.offset;
//                     m = b >= Math.floor(x) && b < Math.floor(k),
//                     v = b < Math.floor(x) || b >= Math.floor(k)
//                 } else {
//                     var O = 0
//                       , C = 0
//                       , N = 0;
//                     if (u.getBoundingClientRect) {
//                         var _ = u.getBoundingClientRect();
//                         N = _.top
//                     }
//                     if (!f || a.props.isDynamic) {
//                         if (f = n.get(d),
//                         !f)
//                             return;
//                         var z = f.getBoundingClientRect();
//                         O = z.top - N + l,
//                         C = O + z.height
//                     }
//                     var D = l - a.props.offset;
//                     m = D >= Math.floor(O) && D < Math.floor(C),
//                     v = D < Math.floor(O) || D >= Math.floor(C)
//                 }
//                 var A = n.getActiveLink();
//                 if (v) {
//                     if (d === A && n.setActiveLink(void 0),
//                     a.props.hashSpy && ln.default.getHash() === d) {
//                         var T = a.props.saveHashHistory
//                           , B = T === void 0 ? !1 : T;
//                         ln.default.changeHash("", B)
//                     }
//                     a.props.spy && a.state.active && (a.setState({
//                         active: !1
//                     }),
//                     a.props.onSetInactive && a.props.onSetInactive(d, f))
//                 }
//                 if (m && (A !== d || a.state.active === !1)) {
//                     n.setActiveLink(d);
//                     var I = a.props.saveHashHistory
//                       , S = I === void 0 ? !1 : I;
//                     a.props.hashSpy && ln.default.changeHash(d, S),
//                     a.props.spy && (a.setState({
//                         active: !0
//                     }),
//                     a.props.onSetActive && a.props.onSetActive(d, f))
//                 }
//             }
//         }
//     };
//     return r.propTypes = Zd,
//     r.defaultProps = {
//         offset: 0
//     },
//     r
// }
// ;
// Object.defineProperty(ef, "__esModule", {
//     value: !0
// });
// var rx = y
//   , ep = tv(rx)
//   , ox = hi
//   , ix = tv(ox);
// function tv(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// function ax(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function tp(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function sx(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// var lx = function(e) {
//     sx(t, e);
//     function t() {
//         var n, r, o, i;
//         ax(this, t);
//         for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
//             s[l] = arguments[l];
//         return i = (r = (o = tp(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(s))),
//         o),
//         o.render = function() {
//             return ep.default.createElement("a", o.props, o.props.children)
//         }
//         ,
//         r),
//         tp(o, i)
//     }
//     return t
// }(ep.default.Component);
// ef.default = (0,
// ix.default)(lx);
// var af = {};
// Object.defineProperty(af, "__esModule", {
//     value: !0
// });
// var ux = function() {
//     function e(t, n) {
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             o.enumerable = o.enumerable || !1,
//             o.configurable = !0,
//             "value"in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//     }
//     return function(t, n, r) {
//         return n && e(t.prototype, n),
//         r && e(t, r),
//         t
//     }
// }()
//   , cx = y
//   , np = nv(cx)
//   , fx = hi
//   , dx = nv(fx);
// function nv(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// function px(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function hx(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function mx(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// var gx = function(e) {
//     mx(t, e);
//     function t() {
//         return px(this, t),
//         hx(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
//     }
//     return ux(t, [{
//         key: "render",
//         value: function() {
//             return np.default.createElement("button", this.props, this.props.children)
//         }
//     }]),
//     t
// }(np.default.Component);
// af.default = (0,
// dx.default)(gx);
// var sf = {}
//   , Cs = {};
// Object.defineProperty(Cs, "__esModule", {
//     value: !0
// });
// var vx = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , yx = function() {
//     function e(t, n) {
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             o.enumerable = o.enumerable || !1,
//             o.configurable = !0,
//             "value"in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//     }
//     return function(t, n, r) {
//         return n && e(t.prototype, n),
//         r && e(t, r),
//         t
//     }
// }()
//   , wx = y
//   , rp = Es(wx)
//   , xx = ys;
// Es(xx);
// var bx = eo
//   , op = Es(bx)
//   , Sx = xi
//   , ip = Es(Sx);
// function Es(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// function kx(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function Cx(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function Ex(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// Cs.default = function(e) {
//     var t = function(n) {
//         Ex(r, n);
//         function r(o) {
//             kx(this, r);
//             var i = Cx(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, o));
//             return i.childBindings = {
//                 domNode: null
//             },
//             i
//         }
//         return yx(r, [{
//             key: "componentDidMount",
//             value: function() {
//                 if (typeof window > "u")
//                     return !1;
//                 this.registerElems(this.props.name)
//             }
//         }, {
//             key: "componentDidUpdate",
//             value: function(i) {
//                 this.props.name !== i.name && this.registerElems(this.props.name)
//             }
//         }, {
//             key: "componentWillUnmount",
//             value: function() {
//                 if (typeof window > "u")
//                     return !1;
//                 op.default.unregister(this.props.name)
//             }
//         }, {
//             key: "registerElems",
//             value: function(i) {
//                 op.default.register(i, this.childBindings.domNode)
//             }
//         }, {
//             key: "render",
//             value: function() {
//                 return rp.default.createElement(e, vx({}, this.props, {
//                     parentBindings: this.childBindings
//                 }))
//             }
//         }]),
//         r
//     }(rp.default.Component);
//     return t.propTypes = {
//         name: ip.default.string,
//         id: ip.default.string
//     },
//     t
// }
// ;
// Object.defineProperty(sf, "__esModule", {
//     value: !0
// });
// var ap = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , Ox = function() {
//     function e(t, n) {
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             o.enumerable = o.enumerable || !1,
//             o.configurable = !0,
//             "value"in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//     }
//     return function(t, n, r) {
//         return n && e(t.prototype, n),
//         r && e(t, r),
//         t
//     }
// }()
//   , Nx = y
//   , sp = lf(Nx)
//   , Px = Cs
//   , Tx = lf(Px)
//   , _x = xi
//   , lp = lf(_x);
// function lf(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// function jx(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function Lx(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function Rx(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// var rv = function(e) {
//     Rx(t, e);
//     function t() {
//         return jx(this, t),
//         Lx(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
//     }
//     return Ox(t, [{
//         key: "render",
//         value: function() {
//             var r = this
//               , o = ap({}, this.props);
//             return delete o.name,
//             o.parentBindings && delete o.parentBindings,
//             sp.default.createElement("div", ap({}, o, {
//                 ref: function(a) {
//                     r.props.parentBindings.domNode = a
//                 }
//             }), this.props.children)
//         }
//     }]),
//     t
// }(sp.default.Component);
// rv.propTypes = {
//     name: lp.default.string,
//     id: lp.default.string
// };
// sf.default = (0,
// Tx.default)(rv);
// var pl = Object.assign || function(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t];
//         for (var r in n)
//             Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//     }
//     return e
// }
//   , up = function() {
//     function e(t, n) {
//         for (var r = 0; r < n.length; r++) {
//             var o = n[r];
//             o.enumerable = o.enumerable || !1,
//             o.configurable = !0,
//             "value"in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//     }
//     return function(t, n, r) {
//         return n && e(t.prototype, n),
//         r && e(t, r),
//         t
//     }
// }();
// function cp(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function fp(e, t) {
//     if (!e)
//         throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//     return t && (typeof t == "object" || typeof t == "function") ? t : e
// }
// function dp(e, t) {
//     if (typeof t != "function" && t !== null)
//         throw new TypeError("Super expression must either be null or a function, not " + typeof t);
//     e.prototype = Object.create(t && t.prototype, {
//         constructor: {
//             value: e,
//             enumerable: !1,
//             writable: !0,
//             configurable: !0
//         }
//     }),
//     t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
// }
// var Xi = y
//   , Bn = mi
//   , hl = eo
//   , we = xi
//   , un = ks
//   , pp = {
//     to: we.string.isRequired,
//     containerId: we.string,
//     container: we.object,
//     activeClass: we.string,
//     spy: we.bool,
//     smooth: we.oneOfType([we.bool, we.string]),
//     offset: we.number,
//     delay: we.number,
//     isDynamic: we.bool,
//     onClick: we.func,
//     duration: we.oneOfType([we.number, we.func]),
//     absolute: we.bool,
//     onSetActive: we.func,
//     onSetInactive: we.func,
//     ignoreCancelEvents: we.bool,
//     hashSpy: we.bool,
//     spyThrottle: we.number
// }
//   , Ax = {
//     Scroll: function(t, n) {
//         console.warn("Helpers.Scroll is deprecated since v1.7.0");
//         var r = n || hl
//           , o = function(a) {
//             dp(s, a);
//             function s(l) {
//                 cp(this, s);
//                 var u = fp(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, l));
//                 return i.call(u),
//                 u.state = {
//                     active: !1
//                 },
//                 u
//             }
//             return up(s, [{
//                 key: "getScrollSpyContainer",
//                 value: function() {
//                     var u = this.props.containerId
//                       , c = this.props.container;
//                     return u ? document.getElementById(u) : c && c.nodeType ? c : document
//                 }
//             }, {
//                 key: "componentDidMount",
//                 value: function() {
//                     if (this.props.spy || this.props.hashSpy) {
//                         var u = this.getScrollSpyContainer();
//                         Bn.isMounted(u) || Bn.mount(u, this.props.spyThrottle),
//                         this.props.hashSpy && (un.isMounted() || un.mount(r),
//                         un.mapContainer(this.props.to, u)),
//                         this.props.spy && Bn.addStateHandler(this.stateHandler),
//                         Bn.addSpyHandler(this.spyHandler, u),
//                         this.setState({
//                             container: u
//                         })
//                     }
//                 }
//             }, {
//                 key: "componentWillUnmount",
//                 value: function() {
//                     Bn.unmount(this.stateHandler, this.spyHandler)
//                 }
//             }, {
//                 key: "render",
//                 value: function() {
//                     var u = "";
//                     this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
//                     var c = pl({}, this.props);
//                     for (var d in pp)
//                         c.hasOwnProperty(d) && delete c[d];
//                     return c.className = u,
//                     c.onClick = this.handleClick,
//                     Xi.createElement(t, c)
//                 }
//             }]),
//             s
//         }(Xi.Component)
//           , i = function() {
//             var s = this;
//             this.scrollTo = function(l, u) {
//                 r.scrollTo(l, pl({}, s.state, u))
//             }
//             ,
//             this.handleClick = function(l) {
//                 s.props.onClick && s.props.onClick(l),
//                 l.stopPropagation && l.stopPropagation(),
//                 l.preventDefault && l.preventDefault(),
//                 s.scrollTo(s.props.to, s.props)
//             }
//             ,
//             this.stateHandler = function() {
//                 r.getActiveLink() !== s.props.to && (s.state !== null && s.state.active && s.props.onSetInactive && s.props.onSetInactive(),
//                 s.setState({
//                     active: !1
//                 }))
//             }
//             ,
//             this.spyHandler = function(l) {
//                 var u = s.getScrollSpyContainer();
//                 if (!(un.isMounted() && !un.isInitialized())) {
//                     var c = s.props.to
//                       , d = null
//                       , f = 0
//                       , m = 0
//                       , v = 0;
//                     if (u.getBoundingClientRect) {
//                         var x = u.getBoundingClientRect();
//                         v = x.top
//                     }
//                     if (!d || s.props.isDynamic) {
//                         if (d = r.get(c),
//                         !d)
//                             return;
//                         var k = d.getBoundingClientRect();
//                         f = k.top - v + l,
//                         m = f + k.height
//                     }
//                     var h = l - s.props.offset
//                       , p = h >= Math.floor(f) && h < Math.floor(m)
//                       , w = h < Math.floor(f) || h >= Math.floor(m)
//                       , b = r.getActiveLink();
//                     if (w)
//                         return c === b && r.setActiveLink(void 0),
//                         s.props.hashSpy && un.getHash() === c && un.changeHash(),
//                         s.props.spy && s.state.active && (s.setState({
//                             active: !1
//                         }),
//                         s.props.onSetInactive && s.props.onSetInactive()),
//                         Bn.updateStates();
//                     if (p && b !== c)
//                         return r.setActiveLink(c),
//                         s.props.hashSpy && un.changeHash(c),
//                         s.props.spy && (s.setState({
//                             active: !0
//                         }),
//                         s.props.onSetActive && s.props.onSetActive(c)),
//                         Bn.updateStates()
//                 }
//             }
//         };
//         return o.propTypes = pp,
//         o.defaultProps = {
//             offset: 0
//         },
//         o
//     },
//     Element: function(t) {
//         console.warn("Helpers.Element is deprecated since v1.7.0");
//         var n = function(r) {
//             dp(o, r);
//             function o(i) {
//                 cp(this, o);
//                 var a = fp(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, i));
//                 return a.childBindings = {
//                     domNode: null
//                 },
//                 a
//             }
//             return up(o, [{
//                 key: "componentDidMount",
//                 value: function() {
//                     if (typeof window > "u")
//                         return !1;
//                     this.registerElems(this.props.name)
//                 }
//             }, {
//                 key: "componentDidUpdate",
//                 value: function(a) {
//                     this.props.name !== a.name && this.registerElems(this.props.name)
//                 }
//             }, {
//                 key: "componentWillUnmount",
//                 value: function() {
//                     if (typeof window > "u")
//                         return !1;
//                     hl.unregister(this.props.name)
//                 }
//             }, {
//                 key: "registerElems",
//                 value: function(a) {
//                     hl.register(a, this.childBindings.domNode)
//                 }
//             }, {
//                 key: "render",
//                 value: function() {
//                     return Xi.createElement(t, pl({}, this.props, {
//                         parentBindings: this.childBindings
//                     }))
//                 }
//             }]),
//             o
//         }(Xi.Component);
//         return n.propTypes = {
//             name: we.string,
//             id: we.string
//         },
//         n
//     }
// }
//   , Mx = Ax;
// Object.defineProperty(Ce, "__esModule", {
//     value: !0
// });
// Ce.Helpers = Ce.ScrollElement = Ce.ScrollLink = Ce.animateScroll = Ce.scrollSpy = Ce.Events = Ce.scroller = Ce.Element = Ce.Button = Eu = Ce.Link = void 0;
// var Ix = ef
//   , ov = $t(Ix)
//   , Dx = af
//   , iv = $t(Dx)
//   , $x = sf
//   , av = $t($x)
//   , zx = eo
//   , sv = $t(zx)
//   , Fx = yi
//   , lv = $t(Fx)
//   , Bx = mi
//   , uv = $t(Bx)
//   , Ux = xs
//   , cv = $t(Ux)
//   , Hx = hi
//   , fv = $t(Hx)
//   , Wx = Cs
//   , dv = $t(Wx)
//   , Vx = Mx
//   , pv = $t(Vx);
// function $t(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var Eu = Ce.Link = ov.default;
// Ce.Button = iv.default;
// Ce.Element = av.default;
// Ce.scroller = sv.default;
// Ce.Events = lv.default;
// Ce.scrollSpy = uv.default;
// Ce.animateScroll = cv.default;
// Ce.ScrollLink = fv.default;
// Ce.ScrollElement = dv.default;
// Ce.Helpers = pv.default;
// Ce.default = {
//     Link: ov.default,
//     Button: iv.default,
//     Element: av.default,
//     scroller: sv.default,
//     Events: lv.default,
//     scrollSpy: uv.default,
//     animateScroll: cv.default,
//     ScrollLink: fv.default,
//     ScrollElement: dv.default,
//     Helpers: pv.default
// };
// const hv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAs6SURBVHgB5VzZb1TXHf6dc++s9thjzKJAoKasqUDYkLYhaYqp0iataCvy0JeqFYmqQiu1wF8A/AXYUlsgRSp5ax6iSlWTNm0VDCEPTerYFFrWBJMFYcD2eJn93nP6nXNn8YzHM3OvjQ32h2zP3OUs3/nt514YecTP+i51cmG0h7lvV0aKdoN41OAiSnMJyUhIillCDnDDGLCs7EWLzJ7TX93QQx7A3Fy8r68vGhSNBwXJQ4xkVN8tnVakzDfmqsmZg0k9BjUMjr4l6YEMMMZ6KGUfO7nzqYG6m6rnokMgIUENR7igQ+q77vARh14nprk6QxlRFyk1yfjlv68ftJg8igvnVgVmFXJAED/2+x0bz1S7qioZ+3uvH0dDh2gBwFEg3nVqx8bD019TAUotUrLhT7ADnfQYqET90HrTH2KJ3V0dHbHys7zSLQkZPiul7FxYRCgoS8va1UJXOjuFjP29V4/D6LTTggXUBQu9v0+ZgFKUqMmB3uv7cOkfaBFASYFN/PBrOzZ05Y8VyNjXd6UtKBnUg7XRIgGUJhbmibV5+1FQkwDxI3A/bbSIoMKFBIWOTPoO9YBUkDRuSbnQDGZtKAKCPNGipENLBldSsfh40FDTToigjqU0GUKwTrbg3KgbGAfVb3bgw0ud0vCfXdRcACzDd3OT/J2LnAcNy2+3czLNbWwRGs5yBJjRyW3bapvzGsQjCCnFNtPHWFv6oRgMRiGYZ5/BVfhLSUtSlvK0199fvmDE8SFkMPLhs0C+EM8KsvSpXGVppuAUNTlnUbgTmql0qEKKGuiaoElbG4O0LhygiGFS0CA994Qt6UHWpv8lUvSfsRRqdVkcnq5Pp4TWjMl3NDfQ+pCflvtNCoNYP3fIHbcEDWUttJeki2MZGrEtJKT50puH8SMAY4f6bsqksMkrGP6ZkICOxhA9Fw3RqqAfdUk1TV7sRpfm8gPlmEiWemJJOhebIC6Lw5e6NUlL/QZ9t7WZNof95DdYrrQo9WSFvibXbg6jIOb9sQnqGYqrmgV+hOulBc9k0kwAEV3pZ/SjFUvoiaDPWRmMMW4L+iSZpDRIXhUM0CqsqjN0h5CIadCeZREK4f53hscLzZnSpm8sidBLrREyGS9owIRl0e10Bn/VoAWtC4apxccpT0gzVuN7S5qoFZL45j2VZihxFOQWnsmQGMuuaCN9f2nEGbFUWaCkvz8Y1ytuT5LWZVjpfStbabnPpHwFWXmw3bi3L56k+2kb4k/08vIltCMSztVYJd3JCHrr3gjdSKYhbcW1lmyMvtIQwCI0UyM3Cse/Hg3TXRB3YThOXsDJA9S4vtMSoT2tTSXG660HE/TuSILKle5+RtLvPr9Po7atNcYBIwP3tsO+qIm/ulIREdJECLR/Hu0cHxikq8kMlacKqo0rExk6fSeGAnjR3inJfDEaga3yNC0vZDD6ZksTfRviPDmEv4XVey+mRF5UsGGCEhDx87E4yTJlXh3w0w+XNdG6kC8nD5I+GI2D2NG8qaCKxh0nvkhm6eJ4Em06KqG8TAhEPNMc9mRGXZGhDFyzyagThpLlhq6PY6wfjCZpykxL7pX0STw1xYOsa/DRc3rwTP+LZSW9DQmrqfG52So1YzIvGU4/G8NBSJ177+iKDIbenm9ppKYyMUwhhriaSNMkHaiIpCgSmIdPDYHl/YOElxnHdfUaP0mj2alhQRQ2qtZYKsGVAVVGLwbfPorJQ0AQK9h0AyT0Im6YsGtPwK8HPX0soLzQpfGkq1DB5KzouXMIc28xkysylCi/H0vQBfzkvYJkOe9Qx/35gU93cRYSsTPa4Moptvp8U7TT6UcWJK5euHatxUUrWvC6O6uxYi1wvcowe4uGi/cImRMVl83MLOhyAbVILcrWVBmgCteTtpxx3qhCc+HBTz5cMjCpBhDQjvhhK8L11f7q3b2NgO3SRHIW0sYqulgFs0xG0X48ibjh2ZYwbW8Ik5OrKUtQDKErQXgIoStjDgxorQGo2GMLpOBF6L3KMg2pJohsFYnU5bEkWQiOXkDANt0jDU2mCrwyNF/bmrNChloHFUHuXdGE/MOXOyrpcgrZ6dAo3UakaOOiZ5vDVO3ZjmU+5775wgzJYLAJkn6wvIU6IkHtNpV3uZlK0zv3J+hWOl28EufMGq6u1e+n+cSMyFgT8NFPV0VRhDEKC3oWGes/hicoI+SU8Eql5TIXeFdCG/KUBtQvEraoUvh5ePCW3mGc60DEgdWtFC2k0JL+NjRGf3kwBiIEVXrYyawxvxCWZhtUyW2wNFvwREaLz6AfPxElPyvGNhfHU/TuUKLqehqsxnqjsW+1qKBrfp4a80TGy8ubKVKoXmHgWMl/jiDT5NWnYDKjZtuq7rlnadSjyM4MLvuUcJkGbQoFS4zBcMqiwbRVM1HUBoqVtlcuKSqSfh7xyTPNjVpd5lJhXNYziNajVlC6L8soyazaYo2JaW8iJ7fH6FNF4qQp67wWjOxdHqEXljRS/XBGpfrYipKgj7sPvdxJBmM6vC7HykAANQ7HeEyeWLFIJeEpDBRdAjR5iMq3XED9ImaVk+n4oZcQvP1izVLaoO8rnim2ng+7mW7rqcYA7X+yhX6yagntRt3Frd1xWc9glLFlheNEr65aRn+8O0R3M/akxiViBxMDi9DTTaiOiVLDqCTjy6EAvTk4Rq9gAqU5sfOw4lp4rf0493nGopuolH2ctGgMiZgtnPPLUElejzY2I/dpNZ2FGkK17PxootBG3fNzu2/yJWwJ/Gr10mm7SGEAY5msXrCIaWI7wDk+ign8F0VcVa8o39u9Fk/rLYD1oRDNDIyGsVgnPhuEtElXO22e9k0GUhmsTkavaHnorL4FtJE1i0egWoOojr3+2TBWVNB2SEiwLI7YBB0vBmiyMLF6oSRToFZyE1W3N+7GdCXOnUw4cO3BlOi9MThMd7NWTltLyz2T55nCqfdQFTtxewjJmk2qHPwvXSXLX138q+KVNNToNjzT5bhFCRW4MZarZVZQTecu/XsUEvDne2N0+oshvbtG5CXDYUoy3N82DJ387af36WtNDdTeFKQVkAQfd9LzFCY0DP2+BpXojSfoXtoqdoeu/oooVWhj58fGtEkjsDEDuObjRJzugIhR25loBBHdFniuLbhOlfaaoXJGjj9lt8ah2nfSWbo8kUYxOoOtCLuEINdUqC3RX390YyQtvb8nogagNoRDud12RYaTW0wPJcQGKOHIVSwpy1qbeqehvBjCfl9OjlPYhlS7+rNV/dB9cBkzYZexOck8k6GGrqra8Vx13JlO5UnlwXJbw/aUoKvyPTYIG1NG3nZvT+oF+B3gPtPsn82mS41gdbja2pClTnm2gbHc5pm0dW4+kqJHDfBG/Txryv6HIXaPG0zBezQLP++9NvJ4v2k0QzAaOLV901ptn00huherbGgTji1e9VmT4TeDXXKRsqESPJYRx5zPQFfH2hiSqG5alGBn8m82FsLxoJE8yonFaBEByjCAcPZY/nuBDPWKAQLaY4wWyyP1OpMqed+1JFHLvaK0oNXFefhSGU3RfbLsPdeKZvPAR9fVWwadj8ObzW7B9BPGov+17Zs7ys9VTOGDzLdXMBWMLSzoyTLqCbPk7krnqzrUA71XuwTjBxfGWwc6nug+9fTGad/grlrcOblj8yHw8IpkcoAeb8RgJw5XI0KhZqVLvUzPmdzNpHjdw5NB8waniKCrZN0hnlh7YtL7q9XuqRv7+vraQnb4qGBsFzppo0cU2OGLIeXvDvNEV6V33qeD54U+8OGVTghWp+S0DbXYNhxqY4xF59q+IJiOocIWQ6Gt3xb8nJGh/t/s9PY/q/wfz+h3I+mpPHUAAAAASUVORK5CYII="
//   , uf = "/assets/flagUSA-DPpwxEU2.png"
//   , cf = "/assets/flagCN-gCkzAHwE.png"
//   , ff = "/assets/flagPY-ufbBDTCz.png"
//   , ni = "/assets/flagBR-BiHeY0Kg.png";
// var mv = {
//     color: void 0,
//     size: void 0,
//     className: void 0,
//     style: void 0,
//     attr: void 0
// }
//   , hp = fe.createContext && fe.createContext(mv)
//   , Kx = ["attr", "size", "title"];
// function Gx(e, t) {
//     if (e == null)
//         return {};
//     var n = Yx(e, t), r, o;
//     if (Object.getOwnPropertySymbols) {
//         var i = Object.getOwnPropertySymbols(e);
//         for (o = 0; o < i.length; o++)
//             r = i[o],
//             !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
//     }
//     return n
// }
// function Yx(e, t) {
//     if (e == null)
//         return {};
//     var n = {};
//     for (var r in e)
//         if (Object.prototype.hasOwnProperty.call(e, r)) {
//             if (t.indexOf(r) >= 0)
//                 continue;
//             n[r] = e[r]
//         }
//     return n
// }
// function Ha() {
//     return Ha = Object.assign ? Object.assign.bind() : function(e) {
//         for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//                 Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//         }
//         return e
//     }
//     ,
//     Ha.apply(this, arguments)
// }
// function mp(e, t) {
//     var n = Object.keys(e);
//     if (Object.getOwnPropertySymbols) {
//         var r = Object.getOwnPropertySymbols(e);
//         t && (r = r.filter(function(o) {
//             return Object.getOwnPropertyDescriptor(e, o).enumerable
//         })),
//         n.push.apply(n, r)
//     }
//     return n
// }
// function Wa(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t] != null ? arguments[t] : {};
//         t % 2 ? mp(Object(n), !0).forEach(function(r) {
//             Xx(e, r, n[r])
//         }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mp(Object(n)).forEach(function(r) {
//             Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
//         })
//     }
//     return e
// }
// function Xx(e, t, n) {
//     return t = qx(t),
//     t in e ? Object.defineProperty(e, t, {
//         value: n,
//         enumerable: !0,
//         configurable: !0,
//         writable: !0
//     }) : e[t] = n,
//     e
// }
// function qx(e) {
//     var t = Qx(e, "string");
//     return typeof t == "symbol" ? t : t + ""
// }
// function Qx(e, t) {
//     if (typeof e != "object" || !e)
//         return e;
//     var n = e[Symbol.toPrimitive];
//     if (n !== void 0) {
//         var r = n.call(e, t || "default");
//         if (typeof r != "object")
//             return r;
//         throw new TypeError("@@toPrimitive must return a primitive value.")
//     }
//     return (t === "string" ? String : Number)(e)
// }
// function gv(e) {
//     return e && e.map( (t, n) => fe.createElement(t.tag, Wa({
//         key: n
//     }, t.attr), gv(t.child)))
// }
// function Jx(e) {
//     return t => fe.createElement(Zx, Ha({
//         attr: Wa({}, e.attr)
//     }, t), gv(e.child))
// }
// function Zx(e) {
//     var t = n => {
//         var {attr: r, size: o, title: i} = e, a = Gx(e, Kx), s = o || n.size || "1em", l;
//         return n.className && (l = n.className),
//         e.className && (l = (l ? l + " " : "") + e.className),
//         fe.createElement("svg", Ha({
//             stroke: "currentColor",
//             fill: "currentColor",
//             strokeWidth: "0"
//         }, n.attr, r, a, {
//             className: l,
//             style: Wa(Wa({
//                 color: e.color || n.color
//             }, n.style), e.style),
//             height: s,
//             width: s,
//             xmlns: "http://www.w3.org/2000/svg"
//         }), i && fe.createElement("title", null, i), e.children)
//     }
//     ;
//     return hp !== void 0 ? fe.createElement(hp.Consumer, null, n => t(n)) : t(mv)
// }
// function eb(e) {
//     return Jx({
//         tag: "svg",
//         attr: {
//             viewBox: "0 0 320 512"
//         },
//         child: [{
//             tag: "path",
//             attr: {
//                 d: "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
//             },
//             child: []
//         }]
//     })(e)
// }
// function tb() {
//     const {t: e, i18n: t} = Dt()
//       , n = [{
//         btn_title: e("aboutUs"),
//         to: "about"
//     }, {
//         btn_title: e("ourSolutions"),
//         to: "solution"
//     }, {
//         btn_title: e("services"),
//         to: "services"
//     }, {
//         btn_title: e("cta"),
//         to: "cta"
//     }]
//       , [r,o] = y.useState(!1)
//       , [i,a] = y.useState(!1)
//       , [s,l] = y.useState(!1)
//       , u = [{
//         name: "BR",
//         code: "pt_BR",
//         flag: ni
//     }, {
//         name: "ES",
//         code: "es_Latam",
//         flag: ff
//     }, {
//         name: "中文",
//         code: "zh",
//         flag: cf
//     }, {
//         name: "EN",
//         code: "en",
//         flag: uf
//     }]
//       , c = v => {
//         const x = v.split("-")[0]
//           , k = u.find(h => h.code === x);
//         return k ? k.flag : ni
//     }
//       , [d,f] = y.useState(c(t.language));
//     y.useEffect( () => {
//         const v = localStorage.getItem("i18nextLng") || t.language;
//         t.changeLanguage(v),
//         f(c(v));
//         const x = () => l(window.scrollY > 250);
//         return window.addEventListener("scroll", x),
//         () => window.removeEventListener("scroll", x)
//     }
//     , [t]);
//     const m = (v, x) => {
//         t.changeLanguage(v),
//         f(x),
//         a(!1),
//         localStorage.setItem("selectedLanguage", v),
//         document.cookie = `i18next=${v}; path=/`
//     }
//     ;
//     return g.jsx("header", {
//         className: `heading ${s ? "position-fixed" : ""}`,
//         children: g.jsxs(zn, {
//             className: "d-flex align-items-center justify-content-between",
//             children: [g.jsx(Eu, {
//                 className: "logo",
//                 to: "banner",
//                 spy: !0,
//                 smooth: !0,
//                 duration: 700,
//                 offset: 0,
//                 children: g.jsx("img", {
//                     src: hv,
//                     alt: "logo"
//                 })
//             }), g.jsx("nav", {
//                 className: `heading-menu ms-0 ms-lg-4 ${r ? "show-menu" : ""}`,
//                 children: g.jsx("ul", {
//                     className: "d-lg-flex align-items-center",
//                     children: n.map( (v, x) => g.jsx("li", {
//                         children: g.jsx(Eu, {
//                             className: "heading-link text-sm",
//                             to: v.to,
//                             spy: !0,
//                             smooth: !0,
//                             duration: 700,
//                             offset: -115,
//                             children: v.btn_title
//                         })
//                     }, x))
//                 })
//             }), g.jsxs("div", {
//                 className: "country-select-wrapper",
//                 children: [g.jsxs("button", {
//                     className: "country-select d-flex align-items-center",
//                     onClick: () => a(!i),
//                     children: [g.jsx("img", {
//                         src: d,
//                         width: 30,
//                         height: "auto",
//                         alt: "country-flag"
//                     }), g.jsx(eb, {})]
//                 }), i && g.jsx("ul", {
//                     className: "country-list show",
//                     children: u.map( (v, x) => g.jsxs("li", {
//                         onClick: () => m(v.code, v.flag),
//                         children: [g.jsx("img", {
//                             src: v.flag,
//                             alt: v.name
//                         }), v.name]
//                     }, x))
//                 })]
//             })]
//         })
//     })
// }
// function Qt() {
//     return Qt = Object.assign ? Object.assign.bind() : function(e) {
//         for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//                 Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//         }
//         return e
//     }
//     ,
//     Qt.apply(this, arguments)
// }
// function vv(e, t) {
//     if (e == null)
//         return {};
//     var n = {};
//     for (var r in e)
//         if (Object.prototype.hasOwnProperty.call(e, r)) {
//             if (t.indexOf(r) >= 0)
//                 continue;
//             n[r] = e[r]
//         }
//     return n
// }
// function gp(e) {
//     return "default" + e.charAt(0).toUpperCase() + e.substr(1)
// }
// function nb(e) {
//     var t = rb(e, "string");
//     return typeof t == "symbol" ? t : String(t)
// }
// function rb(e, t) {
//     if (typeof e != "object" || e === null)
//         return e;
//     var n = e[Symbol.toPrimitive];
//     if (n !== void 0) {
//         var r = n.call(e, t);
//         if (typeof r != "object")
//             return r;
//         throw new TypeError("@@toPrimitive must return a primitive value.")
//     }
//     return String(e)
// }
// function ob(e, t, n) {
//     var r = y.useRef(e !== void 0)
//       , o = y.useState(t)
//       , i = o[0]
//       , a = o[1]
//       , s = e !== void 0
//       , l = r.current;
//     return r.current = s,
//     !s && l && i !== t && a(t),
//     [s ? e : i, y.useCallback(function(u) {
//         for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
//             d[f - 1] = arguments[f];
//         n && n.apply(void 0, [u].concat(d)),
//         a(u)
//     }, [n])]
// }
// function ib(e, t) {
//     return Object.keys(t).reduce(function(n, r) {
//         var o, i = n, a = i[gp(r)], s = i[r], l = vv(i, [gp(r), r].map(nb)), u = t[r], c = ob(s, a, e[u]), d = c[0], f = c[1];
//         return Qt({}, l, (o = {},
//         o[r] = d,
//         o[u] = f,
//         o))
//     }, e)
// }
// function Ou(e, t) {
//     return Ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
//         return r.__proto__ = o,
//         r
//     }
//     ,
//     Ou(e, t)
// }
// function ab(e, t) {
//     e.prototype = Object.create(t.prototype),
//     e.prototype.constructor = e,
//     Ou(e, t)
// }
// function Os(e) {
//     return e && e.ownerDocument || document
// }
// function sb(e) {
//     var t = Os(e);
//     return t && t.defaultView || window
// }
// function lb(e, t) {
//     return sb(e).getComputedStyle(e, t)
// }
// var ub = /([A-Z])/g;
// function cb(e) {
//     return e.replace(ub, "-$1").toLowerCase()
// }
// var fb = /^ms-/;
// function qi(e) {
//     return cb(e).replace(fb, "-ms-")
// }
// var db = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
// function pb(e) {
//     return !!(e && db.test(e))
// }
// function Zn(e, t) {
//     var n = ""
//       , r = "";
//     if (typeof t == "string")
//         return e.style.getPropertyValue(qi(t)) || lb(e).getPropertyValue(qi(t));
//     Object.keys(t).forEach(function(o) {
//         var i = t[o];
//         !i && i !== 0 ? e.style.removeProperty(qi(o)) : pb(o) ? r += o + "(" + i + ") " : n += qi(o) + ": " + i + ";"
//     }),
//     r && (n += "transform: " + r + ";"),
//     e.style.cssText += ";" + n
// }
// const vp = {
//     disabled: !1
// }
//   , yv = fe.createContext(null);
// var hb = function(t) {
//     return t.scrollTop
// }
//   , ko = "unmounted"
//   , Wn = "exited"
//   , mn = "entering"
//   , Vn = "entered"
//   , Nu = "exiting"
//   , rn = function(e) {
//     ab(t, e);
//     function t(r, o) {
//         var i;
//         i = e.call(this, r, o) || this;
//         var a = o, s = a && !a.isMounting ? r.enter : r.appear, l;
//         return i.appearStatus = null,
//         r.in ? s ? (l = Wn,
//         i.appearStatus = mn) : l = Vn : r.unmountOnExit || r.mountOnEnter ? l = ko : l = Wn,
//         i.state = {
//             status: l
//         },
//         i.nextCallback = null,
//         i
//     }
//     t.getDerivedStateFromProps = function(o, i) {
//         var a = o.in;
//         return a && i.status === ko ? {
//             status: Wn
//         } : null
//     }
//     ;
//     var n = t.prototype;
//     return n.componentDidMount = function() {
//         this.updateStatus(!0, this.appearStatus)
//     }
//     ,
//     n.componentDidUpdate = function(o) {
//         var i = null;
//         if (o !== this.props) {
//             var a = this.state.status;
//             this.props.in ? a !== mn && a !== Vn && (i = mn) : (a === mn || a === Vn) && (i = Nu)
//         }
//         this.updateStatus(!1, i)
//     }
//     ,
//     n.componentWillUnmount = function() {
//         this.cancelNextCallback()
//     }
//     ,
//     n.getTimeouts = function() {
//         var o = this.props.timeout, i, a, s;
//         return i = a = s = o,
//         o != null && typeof o != "number" && (i = o.exit,
//         a = o.enter,
//         s = o.appear !== void 0 ? o.appear : a),
//         {
//             exit: i,
//             enter: a,
//             appear: s
//         }
//     }
//     ,
//     n.updateStatus = function(o, i) {
//         if (o === void 0 && (o = !1),
//         i !== null)
//             if (this.cancelNextCallback(),
//             i === mn) {
//                 if (this.props.unmountOnExit || this.props.mountOnEnter) {
//                     var a = this.props.nodeRef ? this.props.nodeRef.current : Lr.findDOMNode(this);
//                     a && hb(a)
//                 }
//                 this.performEnter(o)
//             } else
//                 this.performExit();
//         else
//             this.props.unmountOnExit && this.state.status === Wn && this.setState({
//                 status: ko
//             })
//     }
//     ,
//     n.performEnter = function(o) {
//         var i = this
//           , a = this.props.enter
//           , s = this.context ? this.context.isMounting : o
//           , l = this.props.nodeRef ? [s] : [Lr.findDOMNode(this), s]
//           , u = l[0]
//           , c = l[1]
//           , d = this.getTimeouts()
//           , f = s ? d.appear : d.enter;
//         if (!o && !a || vp.disabled) {
//             this.safeSetState({
//                 status: Vn
//             }, function() {
//                 i.props.onEntered(u)
//             });
//             return
//         }
//         this.props.onEnter(u, c),
//         this.safeSetState({
//             status: mn
//         }, function() {
//             i.props.onEntering(u, c),
//             i.onTransitionEnd(f, function() {
//                 i.safeSetState({
//                     status: Vn
//                 }, function() {
//                     i.props.onEntered(u, c)
//                 })
//             })
//         })
//     }
//     ,
//     n.performExit = function() {
//         var o = this
//           , i = this.props.exit
//           , a = this.getTimeouts()
//           , s = this.props.nodeRef ? void 0 : Lr.findDOMNode(this);
//         if (!i || vp.disabled) {
//             this.safeSetState({
//                 status: Wn
//             }, function() {
//                 o.props.onExited(s)
//             });
//             return
//         }
//         this.props.onExit(s),
//         this.safeSetState({
//             status: Nu
//         }, function() {
//             o.props.onExiting(s),
//             o.onTransitionEnd(a.exit, function() {
//                 o.safeSetState({
//                     status: Wn
//                 }, function() {
//                     o.props.onExited(s)
//                 })
//             })
//         })
//     }
//     ,
//     n.cancelNextCallback = function() {
//         this.nextCallback !== null && (this.nextCallback.cancel(),
//         this.nextCallback = null)
//     }
//     ,
//     n.safeSetState = function(o, i) {
//         i = this.setNextCallback(i),
//         this.setState(o, i)
//     }
//     ,
//     n.setNextCallback = function(o) {
//         var i = this
//           , a = !0;
//         return this.nextCallback = function(s) {
//             a && (a = !1,
//             i.nextCallback = null,
//             o(s))
//         }
//         ,
//         this.nextCallback.cancel = function() {
//             a = !1
//         }
//         ,
//         this.nextCallback
//     }
//     ,
//     n.onTransitionEnd = function(o, i) {
//         this.setNextCallback(i);
//         var a = this.props.nodeRef ? this.props.nodeRef.current : Lr.findDOMNode(this)
//           , s = o == null && !this.props.addEndListener;
//         if (!a || s) {
//             setTimeout(this.nextCallback, 0);
//             return
//         }
//         if (this.props.addEndListener) {
//             var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback]
//               , u = l[0]
//               , c = l[1];
//             this.props.addEndListener(u, c)
//         }
//         o != null && setTimeout(this.nextCallback, o)
//     }
//     ,
//     n.render = function() {
//         var o = this.state.status;
//         if (o === ko)
//             return null;
//         var i = this.props
//           , a = i.children;
//         i.in,
//         i.mountOnEnter,
//         i.unmountOnExit,
//         i.appear,
//         i.enter,
//         i.exit,
//         i.timeout,
//         i.addEndListener,
//         i.onEnter,
//         i.onEntering,
//         i.onEntered,
//         i.onExit,
//         i.onExiting,
//         i.onExited,
//         i.nodeRef;
//         var s = vv(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
//         return fe.createElement(yv.Provider, {
//             value: null
//         }, typeof a == "function" ? a(o, s) : fe.cloneElement(fe.Children.only(a), s))
//     }
//     ,
//     t
// }(fe.Component);
// rn.contextType = yv;
// rn.propTypes = {};
// function hr() {}
// rn.defaultProps = {
//     in: !1,
//     mountOnEnter: !1,
//     unmountOnExit: !1,
//     appear: !1,
//     enter: !0,
//     exit: !0,
//     onEnter: hr,
//     onEntering: hr,
//     onEntered: hr,
//     onExit: hr,
//     onExiting: hr,
//     onExited: hr
// };
// rn.UNMOUNTED = ko;
// rn.EXITED = Wn;
// rn.ENTERING = mn;
// rn.ENTERED = Vn;
// rn.EXITING = Nu;
// const to = !!(typeof window < "u" && window.document && window.document.createElement);
// var Pu = !1
//   , Tu = !1;
// try {
//     var ml = {
//         get passive() {
//             return Pu = !0
//         },
//         get once() {
//             return Tu = Pu = !0
//         }
//     };
//     to && (window.addEventListener("test", ml, ml),
//     window.removeEventListener("test", ml, !0))
// } catch {}
// function wv(e, t, n, r) {
//     if (r && typeof r != "boolean" && !Tu) {
//         var o = r.once
//           , i = r.capture
//           , a = n;
//         !Tu && o && (a = n.__once || function s(l) {
//             this.removeEventListener(t, s, i),
//             n.call(this, l)
//         }
//         ,
//         n.__once = a),
//         e.addEventListener(t, a, Pu ? r : i)
//     }
//     e.addEventListener(t, n, r)
// }
// function _u(e, t, n, r) {
//     var o = r && typeof r != "boolean" ? r.capture : r;
//     e.removeEventListener(t, n, o),
//     n.__once && e.removeEventListener(t, n.__once, o)
// }
// function Va(e, t, n, r) {
//     return wv(e, t, n, r),
//     function() {
//         _u(e, t, n, r)
//     }
// }
// function mb(e, t, n, r) {
//     if (r === void 0 && (r = !0),
//     e) {
//         var o = document.createEvent("HTMLEvents");
//         o.initEvent(t, n, r),
//         e.dispatchEvent(o)
//     }
// }
// function gb(e) {
//     var t = Zn(e, "transitionDuration") || ""
//       , n = t.indexOf("ms") === -1 ? 1e3 : 1;
//     return parseFloat(t) * n
// }
// function vb(e, t, n) {
//     n === void 0 && (n = 5);
//     var r = !1
//       , o = setTimeout(function() {
//         r || mb(e, "transitionend", !0)
//     }, t + n)
//       , i = Va(e, "transitionend", function() {
//         r = !0
//     }, {
//         once: !0
//     });
//     return function() {
//         clearTimeout(o),
//         i()
//     }
// }
// function xv(e, t, n, r) {
//     n == null && (n = gb(e) || 0);
//     var o = vb(e, n, r)
//       , i = Va(e, "transitionend", t);
//     return function() {
//         o(),
//         i()
//     }
// }
// function yp(e, t) {
//     const n = Zn(e, t) || ""
//       , r = n.indexOf("ms") === -1 ? 1e3 : 1;
//     return parseFloat(n) * r
// }
// function bv(e, t) {
//     const n = yp(e, "transitionDuration")
//       , r = yp(e, "transitionDelay")
//       , o = xv(e, i => {
//         i.target === e && (o(),
//         t(i))
//     }
//     , n + r)
// }
// function Sv(e) {
//     e.offsetHeight
// }
// const wp = e => !e || typeof e == "function" ? e : t => {
//     e.current = t
// }
// ;
// function yb(e, t) {
//     const n = wp(e)
//       , r = wp(t);
//     return o => {
//         n && n(o),
//         r && r(o)
//     }
// }
// function Si(e, t) {
//     return y.useMemo( () => yb(e, t), [e, t])
// }
// function wb(e) {
//     return e && "setState"in e ? Lr.findDOMNode(e) : e ?? null
// }
// const kv = fe.forwardRef( ({onEnter: e, onEntering: t, onEntered: n, onExit: r, onExiting: o, onExited: i, addEndListener: a, children: s, childRef: l, ...u}, c) => {
//     const d = y.useRef(null)
//       , f = Si(d, l)
//       , m = C => {
//         f(wb(C))
//     }
//       , v = C => N => {
//         C && d.current && C(d.current, N)
//     }
//       , x = y.useCallback(v(e), [e])
//       , k = y.useCallback(v(t), [t])
//       , h = y.useCallback(v(n), [n])
//       , p = y.useCallback(v(r), [r])
//       , w = y.useCallback(v(o), [o])
//       , b = y.useCallback(v(i), [i])
//       , O = y.useCallback(v(a), [a]);
//     return g.jsx(rn, {
//         ref: c,
//         ...u,
//         onEnter: x,
//         onEntered: h,
//         onEntering: k,
//         onExit: p,
//         onExited: b,
//         onExiting: w,
//         addEndListener: O,
//         nodeRef: d,
//         children: typeof s == "function" ? (C, N) => s(C, {
//             ...N,
//             ref: m
//         }) : fe.cloneElement(s, {
//             ref: m
//         })
//     })
// }
// );
// function Cv(e) {
//     const t = y.useRef(e);
//     return y.useEffect( () => {
//         t.current = e
//     }
//     , [e]),
//     t
// }
// function et(e) {
//     const t = Cv(e);
//     return y.useCallback(function(...n) {
//         return t.current && t.current(...n)
//     }, [t])
// }
// const xb = e => y.forwardRef( (t, n) => g.jsx("div", {
//     ...t,
//     ref: n,
//     className: Ne(t.className, e)
// }));
// function bb() {
//     return y.useState(null)
// }
// function Ev() {
//     const e = y.useRef(!0)
//       , t = y.useRef( () => e.current);
//     return y.useEffect( () => (e.current = !0,
//     () => {
//         e.current = !1
//     }
//     ), []),
//     t.current
// }
// function Sb(e) {
//     const t = y.useRef(null);
//     return y.useEffect( () => {
//         t.current = e
//     }
//     ),
//     t.current
// }
// const kb = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative"
//   , Cb = typeof document < "u"
//   , xp = Cb || kb ? y.useLayoutEffect : y.useEffect
//   , Eb = ["as", "disabled"];
// function Ob(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// function Nb(e) {
//     return !e || e.trim() === "#"
// }
// function df({tagName: e, disabled: t, href: n, target: r, rel: o, role: i, onClick: a, tabIndex: s=0, type: l}) {
//     e || (n != null || r != null || o != null ? e = "a" : e = "button");
//     const u = {
//         tagName: e
//     };
//     if (e === "button")
//         return [{
//             type: l || "button",
//             disabled: t
//         }, u];
//     const c = f => {
//         if ((t || e === "a" && Nb(n)) && f.preventDefault(),
//         t) {
//             f.stopPropagation();
//             return
//         }
//         a == null || a(f)
//     }
//       , d = f => {
//         f.key === " " && (f.preventDefault(),
//         c(f))
//     }
//     ;
//     return e === "a" && (n || (n = "#"),
//     t && (n = void 0)),
//     [{
//         role: i ?? "button",
//         disabled: void 0,
//         tabIndex: t ? void 0 : s,
//         href: n,
//         target: e === "a" ? r : void 0,
//         "aria-disabled": t || void 0,
//         rel: e === "a" ? o : void 0,
//         onClick: c,
//         onKeyDown: d
//     }, u]
// }
// const Pb = y.forwardRef( (e, t) => {
//     let {as: n, disabled: r} = e
//       , o = Ob(e, Eb);
//     const [i,{tagName: a}] = df(Object.assign({
//         tagName: n,
//         disabled: r
//     }, o));
//     return g.jsx(a, Object.assign({}, o, i, {
//         ref: t
//     }))
// }
// );
// Pb.displayName = "Button";
// const Tb = ["onKeyDown"];
// function _b(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// function jb(e) {
//     return !e || e.trim() === "#"
// }
// const ju = y.forwardRef( (e, t) => {
//     let {onKeyDown: n} = e
//       , r = _b(e, Tb);
//     const [o] = df(Object.assign({
//         tagName: "a"
//     }, r))
//       , i = et(a => {
//         o.onKeyDown(a),
//         n == null || n(a)
//     }
//     );
//     return jb(r.href) || r.role === "button" ? g.jsx("a", Object.assign({
//         ref: t
//     }, r, o, {
//         onKeyDown: i
//     })) : g.jsx("a", Object.assign({
//         ref: t
//     }, r, {
//         onKeyDown: n
//     }))
// }
// );
// ju.displayName = "Anchor";
// const Lb = {
//     [mn]: "show",
//     [Vn]: "show"
// }
//   , pf = y.forwardRef( ({className: e, children: t, transitionClasses: n={}, onEnter: r, ...o}, i) => {
//     const a = {
//         in: !1,
//         timeout: 300,
//         mountOnEnter: !1,
//         unmountOnExit: !1,
//         appear: !1,
//         ...o
//     }
//       , s = y.useCallback( (l, u) => {
//         Sv(l),
//         r == null || r(l, u)
//     }
//     , [r]);
//     return g.jsx(kv, {
//         ref: i,
//         addEndListener: bv,
//         ...a,
//         onEnter: s,
//         childRef: t.ref,
//         children: (l, u) => y.cloneElement(t, {
//             ...u,
//             className: Ne("fade", e, t.props.className, Lb[l], n[l])
//         })
//     })
// }
// );
// pf.displayName = "Fade";
// const Rb = {
//     "aria-label": q.string,
//     onClick: q.func,
//     variant: q.oneOf(["white"])
// }
//   , hf = y.forwardRef( ({className: e, variant: t, "aria-label": n="Close", ...r}, o) => g.jsx("button", {
//     ref: o,
//     type: "button",
//     className: Ne("btn-close", t && `btn-close-${t}`, e),
//     "aria-label": n,
//     ...r
// }));
// hf.displayName = "CloseButton";
// hf.propTypes = Rb;
// const wr = y.forwardRef( ({as: e, bsPrefix: t, variant: n="primary", size: r, active: o=!1, disabled: i=!1, className: a, ...s}, l) => {
//     const u = lt(t, "btn")
//       , [c,{tagName: d}] = df({
//         tagName: e,
//         disabled: i,
//         ...s
//     })
//       , f = d;
//     return g.jsx(f, {
//         ...c,
//         ...s,
//         ref: l,
//         disabled: i,
//         className: Ne(a, u, o && "active", n && `${u}-${n}`, r && `${u}-${r}`, s.href && i && "disabled")
//     })
// }
// );
// wr.displayName = "Button";
// function Ab(e, t) {
//     const n = y.useRef(!0);
//     y.useEffect( () => {
//         if (n.current) {
//             n.current = !1;
//             return
//         }
//         return e()
//     }
//     , t)
// }
// function Mb(e) {
//     const t = y.useRef(e);
//     return t.current = e,
//     t
// }
// function mf(e) {
//     const t = Mb(e);
//     y.useEffect( () => () => t.current(), [])
// }
// const Lu = 2 ** 31 - 1;
// function Ov(e, t, n) {
//     const r = n - Date.now();
//     e.current = r <= Lu ? setTimeout(t, r) : setTimeout( () => Ov(e, t, n), Lu)
// }
// function Ib() {
//     const e = Ev()
//       , t = y.useRef();
//     return mf( () => clearTimeout(t.current)),
//     y.useMemo( () => {
//         const n = () => clearTimeout(t.current);
//         function r(o, i=0) {
//             e() && (n(),
//             i <= Lu ? t.current = setTimeout(o, i) : Ov(t, o, Date.now() + i))
//         }
//         return {
//             set: r,
//             clear: n,
//             handleRef: t
//         }
//     }
//     , [])
// }
// const Nv = y.forwardRef( ({className: e, bsPrefix: t, as: n="div", ...r}, o) => (t = lt(t, "carousel-caption"),
// g.jsx(n, {
//     ref: o,
//     className: Ne(e, t),
//     ...r
// })));
// Nv.displayName = "CarouselCaption";
// const Pv = y.forwardRef( ({as: e="div", bsPrefix: t, className: n, ...r}, o) => {
//     const i = Ne(n, lt(t, "carousel-item"));
//     return g.jsx(e, {
//         ref: o,
//         ...r,
//         className: i
//     })
// }
// );
// Pv.displayName = "CarouselItem";
// function bp(e, t) {
//     let n = 0;
//     return y.Children.map(e, r => y.isValidElement(r) ? t(r, n++) : r)
// }
// function Db(e, t) {
//     let n = 0;
//     y.Children.forEach(e, r => {
//         y.isValidElement(r) && t(r, n++)
//     }
//     )
// }
// const $b = 40;
// function zb(e) {
//     if (!e || !e.style || !e.parentNode || !e.parentNode.style)
//         return !1;
//     const t = getComputedStyle(e);
//     return t.display !== "none" && t.visibility !== "hidden" && getComputedStyle(e.parentNode).display !== "none"
// }
// const Tv = y.forwardRef( ({defaultActiveIndex: e=0, ...t}, n) => {
//     const {as: r="div", bsPrefix: o, slide: i=!0, fade: a=!1, controls: s=!0, indicators: l=!0, indicatorLabels: u=[], activeIndex: c, onSelect: d, onSlide: f, onSlid: m, interval: v=5e3, keyboard: x=!0, onKeyDown: k, pause: h="hover", onMouseOver: p, onMouseOut: w, wrap: b=!0, touch: O=!0, onTouchStart: C, onTouchMove: N, onTouchEnd: _, prevIcon: z=g.jsx("span", {
//         "aria-hidden": "true",
//         className: "carousel-control-prev-icon"
//     }), prevLabel: D="Previous", nextIcon: A=g.jsx("span", {
//         "aria-hidden": "true",
//         className: "carousel-control-next-icon"
//     }), nextLabel: T="Next", variant: B, className: I, children: S, ...P} = ib({
//         defaultActiveIndex: e,
//         ...t
//     }, {
//         activeIndex: "onSelect"
//     })
//       , M = lt(o, "carousel")
//       , E = Kg()
//       , j = y.useRef(null)
//       , [L,U] = y.useState("next")
//       , [K,H] = y.useState(!1)
//       , [V,ie] = y.useState(!1)
//       , [Y,re] = y.useState(c || 0);
//     y.useEffect( () => {
//         !V && c !== Y && (j.current ? U(j.current) : U((c || 0) > Y ? "next" : "prev"),
//         i && ie(!0),
//         re(c || 0))
//     }
//     , [c, V, Y, i]),
//     y.useEffect( () => {
//         j.current && (j.current = null)
//     }
//     );
//     let ne = 0, ke;
//     Db(S, (G, se) => {
//         ++ne,
//         se === c && (ke = G.props.interval)
//     }
//     );
//     const je = Cv(ke)
//       , he = y.useCallback(G => {
//         if (V)
//             return;
//         let se = Y - 1;
//         if (se < 0) {
//             if (!b)
//                 return;
//             se = ne - 1
//         }
//         j.current = "prev",
//         d == null || d(se, G)
//     }
//     , [V, Y, d, b, ne])
//       , ae = et(G => {
//         if (V)
//             return;
//         let se = Y + 1;
//         if (se >= ne) {
//             if (!b)
//                 return;
//             se = 0
//         }
//         j.current = "next",
//         d == null || d(se, G)
//     }
//     )
//       , Z = y.useRef();
//     y.useImperativeHandle(n, () => ({
//         element: Z.current,
//         prev: he,
//         next: ae
//     }));
//     const Q = et( () => {
//         !document.hidden && zb(Z.current) && (E ? he() : ae())
//     }
//     )
//       , W = L === "next" ? "start" : "end";
//     Ab( () => {
//         i || (f == null || f(Y, W),
//         m == null || m(Y, W))
//     }
//     , [Y]);
//     const Ue = `${M}-item-${L}`
//       , Ct = `${M}-item-${W}`
//       , Ls = y.useCallback(G => {
//         Sv(G),
//         f == null || f(Y, W)
//     }
//     , [f, Y, W])
//       , Rs = y.useCallback( () => {
//         ie(!1),
//         m == null || m(Y, W)
//     }
//     , [m, Y, W])
//       , As = y.useCallback(G => {
//         if (x && !/input|textarea/i.test(G.target.tagName))
//             switch (G.key) {
//             case "ArrowLeft":
//                 G.preventDefault(),
//                 E ? ae(G) : he(G);
//                 return;
//             case "ArrowRight":
//                 G.preventDefault(),
//                 E ? he(G) : ae(G);
//                 return
//             }
//         k == null || k(G)
//     }
//     , [x, k, he, ae, E])
//       , Ms = y.useCallback(G => {
//         h === "hover" && H(!0),
//         p == null || p(G)
//     }
//     , [h, p])
//       , Is = y.useCallback(G => {
//         H(!1),
//         w == null || w(G)
//     }
//     , [w])
//       , Ei = y.useRef(0)
//       , Fn = y.useRef(0)
//       , Oi = Ib()
//       , te = y.useCallback(G => {
//         Ei.current = G.touches[0].clientX,
//         Fn.current = 0,
//         h === "hover" && H(!0),
//         C == null || C(G)
//     }
//     , [h, C])
//       , an = y.useCallback(G => {
//         G.touches && G.touches.length > 1 ? Fn.current = 0 : Fn.current = G.touches[0].clientX - Ei.current,
//         N == null || N(G)
//     }
//     , [N])
//       , Ni = y.useCallback(G => {
//         if (O) {
//             const se = Fn.current;
//             Math.abs(se) > $b && (se > 0 ? he(G) : ae(G))
//         }
//         h === "hover" && Oi.set( () => {
//             H(!1)
//         }
//         , v || void 0),
//         _ == null || _(G)
//     }
//     , [O, h, he, ae, Oi, v, _])
//       , Af = v != null && !K && !V
//       , Ds = y.useRef();
//     y.useEffect( () => {
//         var G, se;
//         if (!Af)
//             return;
//         const zt = E ? he : ae;
//         return Ds.current = window.setInterval(document.visibilityState ? Q : zt, (G = (se = je.current) != null ? se : v) != null ? G : void 0),
//         () => {
//             Ds.current !== null && clearInterval(Ds.current)
//         }
//     }
//     , [Af, he, ae, je, v, Q, E]);
//     const Mf = y.useMemo( () => l && Array.from({
//         length: ne
//     }, (G, se) => zt => {
//         d == null || d(se, zt)
//     }
//     ), [l, ne, d]);
//     return g.jsxs(r, {
//         ref: Z,
//         ...P,
//         onKeyDown: As,
//         onMouseOver: Ms,
//         onMouseOut: Is,
//         onTouchStart: te,
//         onTouchMove: an,
//         onTouchEnd: Ni,
//         className: Ne(I, M, i && "slide", a && `${M}-fade`, B && `${M}-${B}`),
//         children: [l && g.jsx("div", {
//             className: `${M}-indicators`,
//             children: bp(S, (G, se) => g.jsx("button", {
//                 type: "button",
//                 "data-bs-target": "",
//                 "aria-label": u != null && u.length ? u[se] : `Slide ${se + 1}`,
//                 className: se === Y ? "active" : void 0,
//                 onClick: Mf ? Mf[se] : void 0,
//                 "aria-current": se === Y
//             }, se))
//         }), g.jsx("div", {
//             className: `${M}-inner`,
//             children: bp(S, (G, se) => {
//                 const zt = se === Y;
//                 return i ? g.jsx(kv, {
//                     in: zt,
//                     onEnter: zt ? Ls : void 0,
//                     onEntered: zt ? Rs : void 0,
//                     addEndListener: bv,
//                     children: (oo, X1) => y.cloneElement(G, {
//                         ...X1,
//                         className: Ne(G.props.className, zt && oo !== "entered" && Ue, (oo === "entered" || oo === "exiting") && "active", (oo === "entering" || oo === "exiting") && Ct)
//                     })
//                 }) : y.cloneElement(G, {
//                     className: Ne(G.props.className, zt && "active")
//                 })
//             }
//             )
//         }), s && g.jsxs(g.Fragment, {
//             children: [(b || c !== 0) && g.jsxs(ju, {
//                 className: `${M}-control-prev`,
//                 onClick: he,
//                 children: [z, D && g.jsx("span", {
//                     className: "visually-hidden",
//                     children: D
//                 })]
//             }), (b || c !== ne - 1) && g.jsxs(ju, {
//                 className: `${M}-control-next`,
//                 onClick: ae,
//                 children: [A, T && g.jsx("span", {
//                     className: "visually-hidden",
//                     children: T
//                 })]
//             })]
//         })]
//     })
// }
// );
// Tv.displayName = "Carousel";
// const Sp = Object.assign(Tv, {
//     Caption: Nv,
//     Item: Pv
// });
// function Fb({as: e, bsPrefix: t, className: n, ...r}) {
//     t = lt(t, "col");
//     const o = Wg()
//       , i = Vg()
//       , a = []
//       , s = [];
//     return o.forEach(l => {
//         const u = r[l];
//         delete r[l];
//         let c, d, f;
//         typeof u == "object" && u != null ? {span: c, offset: d, order: f} = u : c = u;
//         const m = l !== i ? `-${l}` : "";
//         c && a.push(c === !0 ? `${t}${m}` : `${t}${m}-${c}`),
//         f != null && s.push(`order${m}-${f}`),
//         d != null && s.push(`offset${m}-${d}`)
//     }
//     ),
//     [{
//         ...r,
//         className: Ne(n, ...a, ...s)
//     }, {
//         as: e,
//         bsPrefix: t,
//         spans: a
//     }]
// }
// const Ye = y.forwardRef( (e, t) => {
//     const [{className: n, ...r},{as: o="div", bsPrefix: i, spans: a}] = Fb(e);
//     return g.jsx(o, {
//         ...r,
//         ref: t,
//         className: Ne(n, !a.length && i)
//     })
// }
// );
// Ye.displayName = "Col";
// var Bb = Function.prototype.bind.call(Function.prototype.call, [].slice);
// function mr(e, t) {
//     return Bb(e.querySelectorAll(t))
// }
// function kp(e, t) {
//     if (e.contains)
//         return e.contains(t);
//     if (e.compareDocumentPosition)
//         return e === t || !!(e.compareDocumentPosition(t) & 16)
// }
// const Ub = "data-rr-ui-";
// function Hb(e) {
//     return `${Ub}${e}`
// }
// const _v = y.createContext(to ? window : void 0);
// _v.Provider;
// function gf() {
//     return y.useContext(_v)
// }
// var Qi;
// function Cp(e) {
//     if ((!Qi && Qi !== 0 || e) && to) {
//         var t = document.createElement("div");
//         t.style.position = "absolute",
//         t.style.top = "-9999px",
//         t.style.width = "50px",
//         t.style.height = "50px",
//         t.style.overflow = "scroll",
//         document.body.appendChild(t),
//         Qi = t.offsetWidth - t.clientWidth,
//         document.body.removeChild(t)
//     }
//     return Qi
// }
// function gl(e) {
//     e === void 0 && (e = Os());
//     try {
//         var t = e.activeElement;
//         return !t || !t.nodeName ? null : t
//     } catch {
//         return e.body
//     }
// }
// function Wb(e=document) {
//     const t = e.defaultView;
//     return Math.abs(t.innerWidth - e.documentElement.clientWidth)
// }
// const Ep = Hb("modal-open");
// class vf {
//     constructor({ownerDocument: t, handleContainerOverflow: n=!0, isRTL: r=!1}={}) {
//         this.handleContainerOverflow = n,
//         this.isRTL = r,
//         this.modals = [],
//         this.ownerDocument = t
//     }
//     getScrollbarWidth() {
//         return Wb(this.ownerDocument)
//     }
//     getElement() {
//         return (this.ownerDocument || document).body
//     }
//     setModalAttributes(t) {}
//     removeModalAttributes(t) {}
//     setContainerStyle(t) {
//         const n = {
//             overflow: "hidden"
//         }
//           , r = this.isRTL ? "paddingLeft" : "paddingRight"
//           , o = this.getElement();
//         t.style = {
//             overflow: o.style.overflow,
//             [r]: o.style[r]
//         },
//         t.scrollBarWidth && (n[r] = `${parseInt(Zn(o, r) || "0", 10) + t.scrollBarWidth}px`),
//         o.setAttribute(Ep, ""),
//         Zn(o, n)
//     }
//     reset() {
//         [...this.modals].forEach(t => this.remove(t))
//     }
//     removeContainerStyle(t) {
//         const n = this.getElement();
//         n.removeAttribute(Ep),
//         Object.assign(n.style, t.style)
//     }
//     add(t) {
//         let n = this.modals.indexOf(t);
//         return n !== -1 || (n = this.modals.length,
//         this.modals.push(t),
//         this.setModalAttributes(t),
//         n !== 0) || (this.state = {
//             scrollBarWidth: this.getScrollbarWidth(),
//             style: {}
//         },
//         this.handleContainerOverflow && this.setContainerStyle(this.state)),
//         n
//     }
//     remove(t) {
//         const n = this.modals.indexOf(t);
//         n !== -1 && (this.modals.splice(n, 1),
//         !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state),
//         this.removeModalAttributes(t))
//     }
//     isTopModal(t) {
//         return !!this.modals.length && this.modals[this.modals.length - 1] === t
//     }
// }
// const vl = (e, t) => to ? e == null ? (t || Os()).body : (typeof e == "function" && (e = e()),
// e && "current"in e && (e = e.current),
// e && ("nodeType"in e || e.getBoundingClientRect) ? e : null) : null;
// function Vb(e, t) {
//     const n = gf()
//       , [r,o] = y.useState( () => vl(e, n == null ? void 0 : n.document));
//     if (!r) {
//         const i = vl(e);
//         i && o(i)
//     }
//     return y.useEffect( () => {}
//     , [t, r]),
//     y.useEffect( () => {
//         const i = vl(e);
//         i !== r && o(i)
//     }
//     , [e, r]),
//     r
// }
// function Kb({children: e, in: t, onExited: n, mountOnEnter: r, unmountOnExit: o}) {
//     const i = y.useRef(null)
//       , a = y.useRef(t)
//       , s = et(n);
//     y.useEffect( () => {
//         t ? a.current = !0 : s(i.current)
//     }
//     , [t, s]);
//     const l = Si(i, e.ref)
//       , u = y.cloneElement(e, {
//         ref: l
//     });
//     return t ? u : o || !a.current && r ? null : u
// }
// function Gb(e) {
//     return e.code === "Escape" || e.keyCode === 27
// }
// function Yb() {
//     const e = y.version.split(".");
//     return {
//         major: +e[0],
//         minor: +e[1],
//         patch: +e[2]
//     }
// }
// const Xb = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
// function qb(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// function Qb(e) {
//     let {onEnter: t, onEntering: n, onEntered: r, onExit: o, onExiting: i, onExited: a, addEndListener: s, children: l} = e
//       , u = qb(e, Xb);
//     const {major: c} = Yb()
//       , d = c >= 19 ? l.props.ref : l.ref
//       , f = y.useRef(null)
//       , m = Si(f, typeof l == "function" ? null : d)
//       , v = C => N => {
//         C && f.current && C(f.current, N)
//     }
//       , x = y.useCallback(v(t), [t])
//       , k = y.useCallback(v(n), [n])
//       , h = y.useCallback(v(r), [r])
//       , p = y.useCallback(v(o), [o])
//       , w = y.useCallback(v(i), [i])
//       , b = y.useCallback(v(a), [a])
//       , O = y.useCallback(v(s), [s]);
//     return Object.assign({}, u, {
//         nodeRef: f
//     }, t && {
//         onEnter: x
//     }, n && {
//         onEntering: k
//     }, r && {
//         onEntered: h
//     }, o && {
//         onExit: p
//     }, i && {
//         onExiting: w
//     }, a && {
//         onExited: b
//     }, s && {
//         addEndListener: O
//     }, {
//         children: typeof l == "function" ? (C, N) => l(C, Object.assign({}, N, {
//             ref: m
//         })) : y.cloneElement(l, {
//             ref: m
//         })
//     })
// }
// const Jb = ["component"];
// function Zb(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// const eS = y.forwardRef( (e, t) => {
//     let {component: n} = e
//       , r = Zb(e, Jb);
//     const o = Qb(r);
//     return g.jsx(n, Object.assign({
//         ref: t
//     }, o))
// }
// );
// function tS({in: e, onTransition: t}) {
//     const n = y.useRef(null)
//       , r = y.useRef(!0)
//       , o = et(t);
//     return xp( () => {
//         if (!n.current)
//             return;
//         let i = !1;
//         return o({
//             in: e,
//             element: n.current,
//             initial: r.current,
//             isStale: () => i
//         }),
//         () => {
//             i = !0
//         }
//     }
//     , [e, o]),
//     xp( () => (r.current = !1,
//     () => {
//         r.current = !0
//     }
//     ), []),
//     n
// }
// function nS({children: e, in: t, onExited: n, onEntered: r, transition: o}) {
//     const [i,a] = y.useState(!t);
//     t && i && a(!1);
//     const s = tS({
//         in: !!t,
//         onTransition: u => {
//             const c = () => {
//                 u.isStale() || (u.in ? r == null || r(u.element, u.initial) : (a(!0),
//                 n == null || n(u.element)))
//             }
//             ;
//             Promise.resolve(o(u)).then(c, d => {
//                 throw u.in || a(!0),
//                 d
//             }
//             )
//         }
//     })
//       , l = Si(s, e.ref);
//     return i && !t ? null : y.cloneElement(e, {
//         ref: l
//     })
// }
// function Op(e, t, n) {
//     return e ? g.jsx(eS, Object.assign({}, n, {
//         component: e
//     })) : t ? g.jsx(nS, Object.assign({}, n, {
//         transition: t
//     })) : g.jsx(Kb, Object.assign({}, n))
// }
// const rS = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
// function oS(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// let yl;
// function iS(e) {
//     return yl || (yl = new vf({
//         ownerDocument: e == null ? void 0 : e.document
//     })),
//     yl
// }
// function aS(e) {
//     const t = gf()
//       , n = e || iS(t)
//       , r = y.useRef({
//         dialog: null,
//         backdrop: null
//     });
//     return Object.assign(r.current, {
//         add: () => n.add(r.current),
//         remove: () => n.remove(r.current),
//         isTopModal: () => n.isTopModal(r.current),
//         setDialogRef: y.useCallback(o => {
//             r.current.dialog = o
//         }
//         , []),
//         setBackdropRef: y.useCallback(o => {
//             r.current.backdrop = o
//         }
//         , [])
//     })
// }
// const jv = y.forwardRef( (e, t) => {
//     let {show: n=!1, role: r="dialog", className: o, style: i, children: a, backdrop: s=!0, keyboard: l=!0, onBackdropClick: u, onEscapeKeyDown: c, transition: d, runTransition: f, backdropTransition: m, runBackdropTransition: v, autoFocus: x=!0, enforceFocus: k=!0, restoreFocus: h=!0, restoreFocusOptions: p, renderDialog: w, renderBackdrop: b=W => g.jsx("div", Object.assign({}, W)), manager: O, container: C, onShow: N, onHide: _= () => {}
//     , onExit: z, onExited: D, onExiting: A, onEnter: T, onEntering: B, onEntered: I} = e
//       , S = oS(e, rS);
//     const P = gf()
//       , M = Vb(C)
//       , E = aS(O)
//       , j = Ev()
//       , L = Sb(n)
//       , [U,K] = y.useState(!n)
//       , H = y.useRef(null);
//     y.useImperativeHandle(t, () => E, [E]),
//     to && !L && n && (H.current = gl(P == null ? void 0 : P.document)),
//     n && U && K(!1);
//     const V = et( () => {
//         if (E.add(),
//         je.current = Va(document, "keydown", ne),
//         ke.current = Va(document, "focus", () => setTimeout(Y), !0),
//         N && N(),
//         x) {
//             var W, Ue;
//             const Ct = gl((W = (Ue = E.dialog) == null ? void 0 : Ue.ownerDocument) != null ? W : P == null ? void 0 : P.document);
//             E.dialog && Ct && !kp(E.dialog, Ct) && (H.current = Ct,
//             E.dialog.focus())
//         }
//     }
//     )
//       , ie = et( () => {
//         if (E.remove(),
//         je.current == null || je.current(),
//         ke.current == null || ke.current(),
//         h) {
//             var W;
//             (W = H.current) == null || W.focus == null || W.focus(p),
//             H.current = null
//         }
//     }
//     );
//     y.useEffect( () => {
//         !n || !M || V()
//     }
//     , [n, M, V]),
//     y.useEffect( () => {
//         U && ie()
//     }
//     , [U, ie]),
//     mf( () => {
//         ie()
//     }
//     );
//     const Y = et( () => {
//         if (!k || !j() || !E.isTopModal())
//             return;
//         const W = gl(P == null ? void 0 : P.document);
//         E.dialog && W && !kp(E.dialog, W) && E.dialog.focus()
//     }
//     )
//       , re = et(W => {
//         W.target === W.currentTarget && (u == null || u(W),
//         s === !0 && _())
//     }
//     )
//       , ne = et(W => {
//         l && Gb(W) && E.isTopModal() && (c == null || c(W),
//         W.defaultPrevented || _())
//     }
//     )
//       , ke = y.useRef()
//       , je = y.useRef()
//       , he = (...W) => {
//         K(!0),
//         D == null || D(...W)
//     }
//     ;
//     if (!M)
//         return null;
//     const ae = Object.assign({
//         role: r,
//         ref: E.setDialogRef,
//         "aria-modal": r === "dialog" ? !0 : void 0
//     }, S, {
//         style: i,
//         className: o,
//         tabIndex: -1
//     });
//     let Z = w ? w(ae) : g.jsx("div", Object.assign({}, ae, {
//         children: y.cloneElement(a, {
//             role: "document"
//         })
//     }));
//     Z = Op(d, f, {
//         unmountOnExit: !0,
//         mountOnEnter: !0,
//         appear: !0,
//         in: !!n,
//         onExit: z,
//         onExiting: A,
//         onExited: he,
//         onEnter: T,
//         onEntering: B,
//         onEntered: I,
//         children: Z
//     });
//     let Q = null;
//     return s && (Q = b({
//         ref: E.setBackdropRef,
//         onClick: re
//     }),
//     Q = Op(m, v, {
//         in: !!n,
//         appear: !0,
//         mountOnEnter: !0,
//         unmountOnExit: !0,
//         children: Q
//     })),
//     g.jsx(g.Fragment, {
//         children: Lr.createPortal(g.jsxs(g.Fragment, {
//             children: [Q, Z]
//         }), M)
//     })
// }
// );
// jv.displayName = "Modal";
// const sS = Object.assign(jv, {
//     Manager: vf
// });
// function lS(e, t) {
//     return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1
// }
// function uS(e, t) {
//     e.classList ? e.classList.add(t) : lS(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
// }
// function Np(e, t) {
//     return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
// }
// function cS(e, t) {
//     e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Np(e.className, t) : e.setAttribute("class", Np(e.className && e.className.baseVal || "", t))
// }
// const gr = {
//     FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
//     STICKY_CONTENT: ".sticky-top",
//     NAVBAR_TOGGLER: ".navbar-toggler"
// };
// class fS extends vf {
//     adjustAndStore(t, n, r) {
//         const o = n.style[t];
//         n.dataset[t] = o,
//         Zn(n, {
//             [t]: `${parseFloat(Zn(n, t)) + r}px`
//         })
//     }
//     restore(t, n) {
//         const r = n.dataset[t];
//         r !== void 0 && (delete n.dataset[t],
//         Zn(n, {
//             [t]: r
//         }))
//     }
//     setContainerStyle(t) {
//         super.setContainerStyle(t);
//         const n = this.getElement();
//         if (uS(n, "modal-open"),
//         !t.scrollBarWidth)
//             return;
//         const r = this.isRTL ? "paddingLeft" : "paddingRight"
//           , o = this.isRTL ? "marginLeft" : "marginRight";
//         mr(n, gr.FIXED_CONTENT).forEach(i => this.adjustAndStore(r, i, t.scrollBarWidth)),
//         mr(n, gr.STICKY_CONTENT).forEach(i => this.adjustAndStore(o, i, -t.scrollBarWidth)),
//         mr(n, gr.NAVBAR_TOGGLER).forEach(i => this.adjustAndStore(o, i, t.scrollBarWidth))
//     }
//     removeContainerStyle(t) {
//         super.removeContainerStyle(t);
//         const n = this.getElement();
//         cS(n, "modal-open");
//         const r = this.isRTL ? "paddingLeft" : "paddingRight"
//           , o = this.isRTL ? "marginLeft" : "marginRight";
//         mr(n, gr.FIXED_CONTENT).forEach(i => this.restore(r, i)),
//         mr(n, gr.STICKY_CONTENT).forEach(i => this.restore(o, i)),
//         mr(n, gr.NAVBAR_TOGGLER).forEach(i => this.restore(o, i))
//     }
// }
// let wl;
// function dS(e) {
//     return wl || (wl = new fS(e)),
//     wl
// }
// const Lv = y.forwardRef( ({className: e, bsPrefix: t, as: n="div", ...r}, o) => (t = lt(t, "modal-body"),
// g.jsx(n, {
//     ref: o,
//     className: Ne(e, t),
//     ...r
// })));
// Lv.displayName = "ModalBody";
// const Rv = y.createContext({
//     onHide() {}
// })
//   , yf = y.forwardRef( ({bsPrefix: e, className: t, contentClassName: n, centered: r, size: o, fullscreen: i, children: a, scrollable: s, ...l}, u) => {
//     e = lt(e, "modal");
//     const c = `${e}-dialog`
//       , d = typeof i == "string" ? `${e}-fullscreen-${i}` : `${e}-fullscreen`;
//     return g.jsx("div", {
//         ...l,
//         ref: u,
//         className: Ne(c, t, o && `${e}-${o}`, r && `${c}-centered`, s && `${c}-scrollable`, i && d),
//         children: g.jsx("div", {
//             className: Ne(`${e}-content`, n),
//             children: a
//         })
//     })
// }
// );
// yf.displayName = "ModalDialog";
// const Av = y.forwardRef( ({className: e, bsPrefix: t, as: n="div", ...r}, o) => (t = lt(t, "modal-footer"),
// g.jsx(n, {
//     ref: o,
//     className: Ne(e, t),
//     ...r
// })));
// Av.displayName = "ModalFooter";
// const pS = y.forwardRef( ({closeLabel: e="Close", closeVariant: t, closeButton: n=!1, onHide: r, children: o, ...i}, a) => {
//     const s = y.useContext(Rv)
//       , l = et( () => {
//         s == null || s.onHide(),
//         r == null || r()
//     }
//     );
//     return g.jsxs("div", {
//         ref: a,
//         ...i,
//         children: [o, n && g.jsx(hf, {
//             "aria-label": e,
//             variant: t,
//             onClick: l
//         })]
//     })
// }
// )
//   , Mv = y.forwardRef( ({bsPrefix: e, className: t, closeLabel: n="Close", closeButton: r=!1, ...o}, i) => (e = lt(e, "modal-header"),
// g.jsx(pS, {
//     ref: i,
//     ...o,
//     className: Ne(t, e),
//     closeLabel: n,
//     closeButton: r
// })));
// Mv.displayName = "ModalHeader";
// const hS = xb("h4")
//   , Iv = y.forwardRef( ({className: e, bsPrefix: t, as: n=hS, ...r}, o) => (t = lt(t, "modal-title"),
// g.jsx(n, {
//     ref: o,
//     className: Ne(e, t),
//     ...r
// })));
// Iv.displayName = "ModalTitle";
// function mS(e) {
//     return g.jsx(pf, {
//         ...e,
//         timeout: null
//     })
// }
// function gS(e) {
//     return g.jsx(pf, {
//         ...e,
//         timeout: null
//     })
// }
// const Dv = y.forwardRef( ({bsPrefix: e, className: t, style: n, dialogClassName: r, contentClassName: o, children: i, dialogAs: a=yf, "data-bs-theme": s, "aria-labelledby": l, "aria-describedby": u, "aria-label": c, show: d=!1, animation: f=!0, backdrop: m=!0, keyboard: v=!0, onEscapeKeyDown: x, onShow: k, onHide: h, container: p, autoFocus: w=!0, enforceFocus: b=!0, restoreFocus: O=!0, restoreFocusOptions: C, onEntered: N, onExit: _, onExiting: z, onEnter: D, onEntering: A, onExited: T, backdropClassName: B, manager: I, ...S}, P) => {
//     const [M,E] = y.useState({})
//       , [j,L] = y.useState(!1)
//       , U = y.useRef(!1)
//       , K = y.useRef(!1)
//       , H = y.useRef(null)
//       , [V,ie] = bb()
//       , Y = Si(P, ie)
//       , re = et(h)
//       , ne = Kg();
//     e = lt(e, "modal");
//     const ke = y.useMemo( () => ({
//         onHide: re
//     }), [re]);
//     function je() {
//         return I || dS({
//             isRTL: ne
//         })
//     }
//     function he(te) {
//         if (!to)
//             return;
//         const an = je().getScrollbarWidth() > 0
//           , Ni = te.scrollHeight > Os(te).documentElement.clientHeight;
//         E({
//             paddingRight: an && !Ni ? Cp() : void 0,
//             paddingLeft: !an && Ni ? Cp() : void 0
//         })
//     }
//     const ae = et( () => {
//         V && he(V.dialog)
//     }
//     );
//     mf( () => {
//         _u(window, "resize", ae),
//         H.current == null || H.current()
//     }
//     );
//     const Z = () => {
//         U.current = !0
//     }
//       , Q = te => {
//         U.current && V && te.target === V.dialog && (K.current = !0),
//         U.current = !1
//     }
//       , W = () => {
//         L(!0),
//         H.current = xv(V.dialog, () => {
//             L(!1)
//         }
//         )
//     }
//       , Ue = te => {
//         te.target === te.currentTarget && W()
//     }
//       , Ct = te => {
//         if (m === "static") {
//             Ue(te);
//             return
//         }
//         if (K.current || te.target !== te.currentTarget) {
//             K.current = !1;
//             return
//         }
//         h == null || h()
//     }
//       , Ls = te => {
//         v ? x == null || x(te) : (te.preventDefault(),
//         m === "static" && W())
//     }
//       , Rs = (te, an) => {
//         te && he(te),
//         D == null || D(te, an)
//     }
//       , As = te => {
//         H.current == null || H.current(),
//         _ == null || _(te)
//     }
//       , Ms = (te, an) => {
//         A == null || A(te, an),
//         wv(window, "resize", ae)
//     }
//       , Is = te => {
//         te && (te.style.display = ""),
//         T == null || T(te),
//         _u(window, "resize", ae)
//     }
//       , Ei = y.useCallback(te => g.jsx("div", {
//         ...te,
//         className: Ne(`${e}-backdrop`, B, !f && "show")
//     }), [f, B, e])
//       , Fn = {
//         ...n,
//         ...M
//     };
//     Fn.display = "block";
//     const Oi = te => g.jsx("div", {
//         role: "dialog",
//         ...te,
//         style: Fn,
//         className: Ne(t, e, j && `${e}-static`, !f && "show"),
//         onClick: m ? Ct : void 0,
//         onMouseUp: Q,
//         "data-bs-theme": s,
//         "aria-label": c,
//         "aria-labelledby": l,
//         "aria-describedby": u,
//         children: g.jsx(a, {
//             ...S,
//             onMouseDown: Z,
//             className: r,
//             contentClassName: o,
//             children: i
//         })
//     });
//     return g.jsx(Rv.Provider, {
//         value: ke,
//         children: g.jsx(sS, {
//             show: d,
//             ref: Y,
//             backdrop: m,
//             container: p,
//             keyboard: !0,
//             autoFocus: w,
//             enforceFocus: b,
//             restoreFocus: O,
//             restoreFocusOptions: C,
//             onEscapeKeyDown: Ls,
//             onShow: k,
//             onHide: h,
//             onEnter: Rs,
//             onEntering: Ms,
//             onEntered: N,
//             onExit: As,
//             onExiting: z,
//             onExited: Is,
//             manager: je(),
//             transition: f ? mS : void 0,
//             backdropTransition: f ? gS : void 0,
//             renderBackdrop: Ei,
//             renderDialog: Oi
//         })
//     })
// }
// );
// Dv.displayName = "Modal";
// const xn = Object.assign(Dv, {
//     Body: Lv,
//     Header: Mv,
//     Title: Iv,
//     Footer: Av,
//     Dialog: yf,
//     TRANSITION_DURATION: 300,
//     BACKDROP_TRANSITION_DURATION: 150
// })
//   , Jt = y.forwardRef( ({bsPrefix: e, className: t, as: n="div", ...r}, o) => {
//     const i = lt(e, "row")
//       , a = Wg()
//       , s = Vg()
//       , l = `${i}-cols`
//       , u = [];
//     return a.forEach(c => {
//         const d = r[c];
//         delete r[c];
//         let f;
//         d != null && typeof d == "object" ? {cols: f} = d : f = d;
//         const m = c !== s ? `-${c}` : "";
//         f != null && u.push(`${l}${m}-${f}`)
//     }
//     ),
//     g.jsx(n, {
//         ref: o,
//         ...r,
//         className: Ne(t, i, ...u)
//     })
// }
// );
// Jt.displayName = "Row";
// const vS = "/assets/banner-background-CuHSBWvp.png"
//   , yS = "/assets/banner-bgForMobile-BaYorDMK.png";
// function wS() {
//     const {t: e} = Dt()
//       , [t,n] = y.useState(!1)
//       , r = () => n(!0)
//       , o = () => n(!1)
//       , i = a => {
//         window.open(a, "_blank"),
//         o()
//     }
//     ;
//     return g.jsxs("div", {
//         className: "banner",
//         children: [g.jsxs("div", {
//             className: "banner-bg",
//             children: [g.jsx("img", {
//                 className: "d-none d-lg-block",
//                 src: vS,
//                 alt: ""
//             }), g.jsx("img", {
//                 className: "d-block d-lg-none",
//                 src: yS,
//                 alt: ""
//             })]
//         }), g.jsx(zn, {
//             children: g.jsx(Jt, {
//                 className: "align-items-center justify-content-center align-items-center justify-content-lg-start",
//                 children: g.jsx(Ye, {
//                     md: 10,
//                     lg: 6,
//                     children: g.jsxs("div", {
//                         className: "common text-center text-lg-start",
//                         children: [g.jsx("div", {
//                             className: "common-meta",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1000",
//                             "data-aos-delay": "",
//                             children: e("secureDefi")
//                         }), g.jsxs("h1", {
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1200",
//                             "data-aos-delay": "",
//                             children: [g.jsx("span", {
//                                 children: e("secure")
//                             }), " ", e("yourWealth"), " ", g.jsx("span", {
//                                 children: e("defi")
//                             })]
//                         }), g.jsx("p", {
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1400",
//                             "data-aos-delay": "",
//                             children: e("secureWealth")
//                         }), g.jsx("button", {
//                             className: "btn open-account-btn",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1600",
//                             "data-aos-delay": "",
//                             onClick: r,
//                             children: e("openAccount")
//                         })]
//                     })
//                 })
//             })
//         }), g.jsxs(xn, {
//             show: t,
//             onHide: o,
//             top: !0,
//             children: [g.jsx(xn.Header, {
//                 closeButton: !0,
//                 children: g.jsx(xn.Title, {
//                     children: e("openAccount")
//                 })
//             }), g.jsx(xn.Body, {
//                 children: g.jsxs("div", {
//                     className: "modal-options no-underline text-sm",
//                     children: [g.jsx(wr, {
//                         variant: "outline",
//                         onClick: () => i("https://app.pipefy.com/public/form/G-rUY0iI"),
//                         children: e("Individual Account (Pessoa Física)")
//                     }), g.jsx(wr, {
//                         variant: "outline",
//                         onClick: () => i("https://app.pipefy.com/public/form/HxQPNJdy"),
//                         children: e("Corporate Account (Pessoa Jurídica)")
//                     }), g.jsx(wr, {
//                         variant: "outline",
//                         onClick: () => i("https://app.pipefy.com/public/form/hSETMCN0"),
//                         children: e("Non-Resident Foreigners (Estrangeiros)")
//                     }), g.jsx(wr, {
//                         variant: "outline",
//                         onClick: () => i("https://app.pipefy.com/public/form/uywby2Lz"),
//                         children: e("Over-The-Counter (OTC)")
//                     }), g.jsx(wr, {
//                         variant: "outline",
//                         onClick: () => i("https://app.pipefy.com/public/form/Icen0UZO"),
//                         children: e("Gaming")
//                     })]
//                 })
//             })]
//         })]
//     })
// }
// const xS = "/assets/about-img-rUOL7bls.png";
// function bS() {
//     const {t: e} = Dt()
//       , t = [{
//         icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M24.875 14.9574C24.7128 14.5469 24.2485 14.3459 23.838 14.508C23.4275 14.6703 23.2264 15.1346 23.3886 15.545C23.7948 16.5721 24.0006 17.6576 24.0006 18.7715C24.0006 23.6102 20.064 27.5469 15.2252 27.5469C10.3861 27.5469 6.44899 23.6102 6.44899 18.7715C6.44899 13.9328 10.3861 9.99612 15.2252 9.99612C16.343 9.99612 17.4304 10.2033 18.4571 10.6118C18.8671 10.7752 19.3318 10.5747 19.495 10.1648C19.6583 9.75467 19.4581 9.28998 19.048 9.12683C17.8324 8.64306 16.5462 8.39783 15.2253 8.39783C9.50485 8.39783 4.85077 13.0514 4.85077 18.7714C4.85077 24.4915 9.50463 29.1451 15.2252 29.1451C20.9452 29.1451 25.5988 24.4915 25.5988 18.7715C25.5988 17.4556 25.3552 16.1724 24.875 14.9574Z" fill="#080E0F" />
//               <path d="M29.8017 14.5924C29.6803 14.168 29.2382 13.9228 28.8136 14.044C28.3893 14.1654 28.1438 14.6078 28.2652 15.0321C28.6116 16.2429 28.7872 17.5011 28.7872 18.7714C28.7872 26.25 22.7033 32.3345 15.2251 32.3345C7.7465 32.3345 1.66213 26.2501 1.66213 18.7714C1.66213 11.2927 7.74642 5.20844 15.2251 5.20844C16.4984 5.20844 17.7587 5.38487 18.9708 5.73292C19.3951 5.85464 19.8376 5.60962 19.9594 5.18536C20.0812 4.7611 19.8361 4.31848 19.4118 4.19676C18.0563 3.8075 16.6476 3.61011 15.2251 3.61011C6.86518 3.61018 0.0638428 10.4115 0.0638428 18.7715C0.0638428 27.1315 6.86518 33.9328 15.2251 33.9328C23.5846 33.9328 30.3855 27.1315 30.3855 18.7715C30.3855 17.3522 30.1891 15.9462 29.8017 14.5924Z" fill="#080E0F" />
//               <path d="M20.7893 18.2835C20.7502 17.8439 20.3618 17.5211 19.9223 17.5586C19.4827 17.5978 19.1581 17.986 19.1974 18.4256C19.2075 18.5394 19.2127 18.6558 19.2127 18.7715C19.2127 20.9704 17.4238 22.7591 15.2251 22.7591C13.0258 22.7591 11.2365 20.9703 11.2365 18.7715C11.2366 16.5721 13.0258 14.7829 15.2251 14.7829C15.348 14.7829 15.4682 14.7883 15.5828 14.7988C16.0227 14.8391 16.4114 14.5159 16.452 14.0764C16.4925 13.6369 16.169 13.2478 15.7296 13.2072C15.5666 13.1922 15.3969 13.1846 15.2252 13.1846C12.1447 13.1846 9.63837 15.6907 9.63837 18.7714C9.63837 21.8515 12.1447 24.3573 15.2252 24.3573C18.3053 24.3573 20.8111 21.8515 20.8111 18.7714C20.811 18.6086 20.8037 18.4443 20.7893 18.2835Z" fill="#20CDE1" />
//             </svg>`,
//         title: e("ourMission"),
//         des: e("missionDescription")
//     }, {
//         icon: `<svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="17" cy="18" r="6" fill="#20CDE1" />
//               <path d="M16.7047 0.11229C16.5992 0.16843 16.4797 0.273694 16.4375 0.350886C16.3953 0.435097 16.3672 1.43159 16.3672 3.05264V5.62808L16.5711 5.83159C16.8523 6.11229 17.1969 6.11229 17.5063 5.83159L17.7383 5.62808V3.01755V0.407027L17.5063 0.203518C17.2531 -0.0210433 17 -0.0561309 16.7047 0.11229Z" fill="#20CDE1" />
//               <path d="M3.45781 5.43153C3.16953 5.55785 3.00781 5.79644 3.00781 6.0982C3.00781 6.32978 3.13437 6.47715 4.72344 8.06311L6.43906 9.77539L6.74844 9.73329C7.14922 9.67715 7.36719 9.43153 7.36719 9.03153C7.36719 8.75083 7.33906 8.71574 5.77109 7.13679C4.88516 6.25258 4.06953 5.48767 3.94297 5.43153C3.67578 5.31925 3.725 5.31925 3.45781 5.43153Z" fill="#080E0F" />
//               <path d="M30.1836 5.43153C30.0711 5.48767 29.2555 6.25258 28.3766 7.13679C26.8016 8.71574 26.7734 8.75083 26.7734 9.03153C26.7734 9.43153 26.9914 9.67715 27.3922 9.73329L27.7016 9.77539L29.4172 8.06311C31.0062 6.47715 31.1328 6.32978 31.1328 6.0982C31.1328 5.78943 30.9711 5.55785 30.6687 5.43153C30.3945 5.31925 30.4437 5.31925 30.1836 5.43153Z" fill="#080E0F" />
//             </svg>`,
//         title: e("ourValues"),
//         des: e("valuesDescription")
//     }, {
//         icon: `<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M8.38671 0.594543C8.23202 0.664856 7.99296 0.847668 7.85234 0.995325C7.57812 1.29064 4.94843 4.89767 4.69531 5.32657C4.49843 5.66407 4.48437 6.19142 4.66718 6.53595C4.88515 6.95782 14.8133 18.025 15.1437 18.2219C15.5445 18.4539 15.9945 18.5031 16.4375 18.3625C16.7609 18.257 16.8172 18.257 17.1406 18.3625C17.5625 18.5031 17.9914 18.4609 18.4062 18.25C18.6031 18.1445 20.0797 16.5484 23.757 12.4352C26.5414 9.31329 28.8758 6.66251 28.932 6.55001C29.0726 6.27579 29.0656 5.6711 28.918 5.37579C28.7422 5.04532 25.8031 1.01642 25.6273 0.861731C25.543 0.791418 25.3461 0.671886 25.1914 0.601574C24.9172 0.467981 24.643 0.460949 16.7891 0.460949C9.01952 0.460949 8.6539 0.467981 8.38671 0.594543ZM15.193 1.25548C15.0031 1.57892 12.2469 5.4461 12.2047 5.45314C12.1414 5.45314 8.42187 1.45939 8.42187 1.38907C8.42187 1.19923 8.85077 1.17111 11.9937 1.17111C14.7008 1.16407 15.2422 1.17814 15.193 1.25548ZM23.3281 1.29064L23.4898 1.42423L21.6336 3.42814C20.6141 4.53907 19.7492 5.43204 19.707 5.42501C19.6437 5.41095 16.9226 1.6422 16.7117 1.28361C16.6484 1.17111 16.8172 1.16407 19.9109 1.16407C22.9625 1.16407 23.1805 1.17111 23.3281 1.29064ZM17.4781 3.54767C18.3008 4.70079 18.9687 5.6711 18.9687 5.6922C18.9687 5.71329 17.6117 5.73439 15.9453 5.73439C14.2859 5.73439 12.9219 5.71329 12.9219 5.6922C12.9219 5.62892 15.8961 1.44532 15.9453 1.44532C15.9734 1.44532 16.6625 2.39454 17.4781 3.54767ZM9.78593 3.90626C10.6578 4.84845 11.375 5.65001 11.375 5.67814C11.375 5.74845 5.34921 5.75548 5.30702 5.67814C5.29296 5.65001 5.88359 4.79923 6.62187 3.78673C7.88046 2.05001 7.97187 1.94454 8.08437 2.06407C8.14765 2.12736 8.91406 2.95704 9.78593 3.90626ZM25.2547 3.7797C25.9719 4.77111 26.5625 5.61485 26.5625 5.65704C26.5625 5.71329 25.6555 5.73439 23.532 5.73439C21.4648 5.73439 20.5086 5.71329 20.5297 5.66407C20.5508 5.58673 23.9117 1.93048 23.9328 1.9586C23.9328 1.96564 24.5305 2.78829 25.2547 3.7797ZM13.6109 11.8305C14.4687 14.8328 15.1578 17.3008 15.1437 17.3149C15.1226 17.3359 5.44765 6.51485 5.41249 6.43048C5.39843 6.39532 6.88906 6.3672 8.72421 6.3672H12.0641L13.6109 11.8305ZM19.0812 6.48673C19.0672 6.55704 18.357 9.03907 17.5203 12.0063C16.6766 14.9805 15.9664 17.4063 15.9453 17.4063C15.9242 17.4063 15.2141 14.9594 14.3633 11.9711C13.5195 8.98985 12.8094 6.50079 12.7953 6.45157C12.7742 6.38829 13.4351 6.3672 15.9453 6.3672C18.9336 6.3672 19.1164 6.37423 19.0812 6.48673ZM26.4148 6.50079C26.2672 6.7047 16.7609 17.3289 16.7398 17.3078C16.7328 17.3008 17.4219 14.8328 18.2797 11.8305L19.8336 6.3672H23.1734C26.4641 6.3672 26.5062 6.3672 26.4148 6.50079Z" fill="#16C0D3" />
//             </svg>`,
//         title: e("ourVision"),
//         des: e("visionDescription")
//     }];
//     return g.jsx("div", {
//         className: "about",
//         children: g.jsxs(zn, {
//             children: [g.jsxs(Jt, {
//                 className: "justify-content-center justify-content-lg-start",
//                 children: [g.jsx(Ye, {
//                     lg: 6,
//                     children: g.jsx("div", {
//                         className: "about-img",
//                         "data-aos": "fade-right",
//                         children: g.jsx("img", {
//                             src: xS,
//                             alt: ""
//                         })
//                     })
//                 }), g.jsx(Ye, {
//                     lg: 6,
//                     children: g.jsxs("div", {
//                         className: "common text-center text-lg-start",
//                         children: [g.jsx("div", {
//                             className: "common-meta",
//                             "data-aos": "fade-up",
//                             children: e("aboutUs")
//                         }), g.jsxs("h2", {
//                             "data-aos": "fade-up",
//                             children: [g.jsx("span", {
//                                 children: e("tagline")
//                             }), g.jsxs("span", {
//                                 className: "text-black",
//                                 children: [" ", e("aboutUsHeader")]
//                             })]
//                         }), g.jsx("p", {
//                             "data-aos": "fade-up",
//                             children: e("aboutUsDescription")
//                         })]
//                     })
//                 })]
//             }), g.jsx(Jt, {
//                 children: g.jsx(Ye, {
//                     xs: 12,
//                     children: g.jsx("div", {
//                         className: "about-wrap overflow-auto",
//                         children: g.jsx("div", {
//                             className: "about-card d-flex justify-content-lg-center align-items-center flex-lg-wrap",
//                             children: t.map( (n, r) => g.jsxs("div", {
//                                 className: "about-card-single",
//                                 "data-aos": "fade-up",
//                                 "data-aos-delay": `${r + 2}00`,
//                                 children: [g.jsx("div", {
//                                     className: "icon",
//                                     dangerouslySetInnerHTML: {
//                                         __html: n.icon
//                                     }
//                                 }), g.jsxs("div", {
//                                     className: "text",
//                                     children: [g.jsx("h4", {
//                                         children: n.title
//                                     }), g.jsx("p", {
//                                         children: n.des
//                                     })]
//                                 })]
//                             }, r))
//                         })
//                     })
//                 })
//             })]
//         })
//     })
// }
// function SS() {
//     const {t: e} = Dt();
//     return g.jsx("div", {
//         className: "solution",
//         children: g.jsx(zn, {
//             children: g.jsx(Jt, {
//                 children: g.jsxs(Ye, {
//                     xs: 12,
//                     children: [g.jsxs("div", {
//                         className: "common text-center",
//                         children: [g.jsx("div", {
//                             className: "common-meta",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1000",
//                             children: e("ourSolutions")
//                         }), g.jsx("h2", {
//                             className: "text-white",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1200",
//                             "data-aos-delay": "100",
//                             children: e("solutionsHeader")
//                         }), g.jsx("p", {
//                             className: "text-white",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1400",
//                             "data-aos-delay": "150",
//                             children: e("solutionsDescription")
//                         })]
//                     }), g.jsxs("div", {
//                         className: "video-presentation",
//                         "data-aos": "fade-up",
//                         "data-aos-duration": "1800",
//                         "data-aos-delay": "250",
//                         children: [g.jsx("div", {
//                             style: {
//                                 padding: "56.25% 0 0 0",
//                                 position: "relative"
//                             },
//                             children: g.jsx("iframe", {
//                                 src: "https://player.vimeo.com/video/918165715?h=1c612d4f38&title=0&byline=0",
//                                 style: {
//                                     position: "absolute",
//                                     top: "0",
//                                     left: "0",
//                                     width: "100%",
//                                     height: "100%"
//                                 },
//                                 allow: "autoplay; fullscreen; picture-in-picture",
//                                 allowFullScreen: !0
//                             })
//                         }), g.jsx("script", {
//                             src: "https://player.vimeo.com/api/player.js"
//                         })]
//                     })]
//                 })
//             })
//         })
//     })
// }
// const kS = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_178)'%3e%3cpath%20d='M5.3418%208.35683L7.78158%208.32427L7.96387%208.37148C8.45703%208.6547%208.9209%208.98025%209.35384%209.34649C9.66634%209.61181%209.96582%209.89992%2010.249%2010.2124C11.1247%208.80445%2012.0573%207.5104%2013.042%206.32216C14.1211%205.01997%2015.2653%203.8366%2016.4681%202.75741L16.7057%202.66626H19.3685L18.8314%203.26201C17.1826%205.09484%2015.6852%206.98953%2014.3327%208.94281C12.9785%2010.901%2011.7692%2012.9194%2010.6934%2014.9964L10.3581%2015.6426L10.0505%2014.985C9.48242%2013.7674%208.80371%2012.6492%207.99316%2011.6497C7.18262%2010.6503%206.24023%209.76319%205.1416%209.00955L5.3418%208.35683Z'%20fill='%23080E0F'/%3e%3cpath%20d='M10%200C11.5511%200%2013.0192%200.353219%2014.3311%200.983153C13.7939%201.40799%2013.2959%201.81493%2012.832%202.20884C11.9482%201.88817%2010.9961%201.71238%2010.0016%201.71238C7.71322%201.71238%205.64128%202.64019%204.14225%204.14096C2.64323%205.64174%201.71387%207.71222%201.71387%2010.0008C1.71387%2012.2894%202.6416%2014.3599%204.14225%2015.8607C5.6429%2017.3614%207.71322%2018.2892%2010.0016%2018.2892C12.29%2018.2892%2014.362%2017.3614%2015.861%2015.8607C17.3617%2014.3599%2018.2878%2012.2894%2018.2878%2010.0008C18.2878%209.45715%2018.2357%208.92325%2018.1348%208.40889C18.5645%207.84895%2019.0055%207.289%2019.4548%206.73557C19.8079%207.75779%2020%208.85814%2020%2010.0008C20%2012.7615%2018.8802%2015.2633%2017.0719%2017.0717C15.262%2018.8817%2012.762%2020.0016%2010.0016%2020.0016C7.24121%2020.0016%204.74121%2018.8817%202.93132%2017.0717C1.11979%2015.2617%200%2012.7615%200%2010.0008C0%207.23854%201.11979%204.73834%202.92806%202.92993C4.73796%201.11988%207.23796%200%2010%200Z'%20fill='%23080E0F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_178'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
//   , CS = "/assets/service-img-1-gXzEoJY-.png"
//   , ES = "/assets/service-img-2-BBIdLW9I.png"
//   , OS = "/assets/service-img-3-CHCbmaBh.png"
//   , NS = "/assets/service-img-4-BT6-XFL0.png";
// function PS() {
//     const {t: e} = Dt()
//       , t = [{
//         meta: e("servicesMeta"),
//         title_mark: e("globalServices"),
//         title: e("globalServicesTitle"),
//         img: CS,
//         des: e("globalServicesDescriptions", {
//             returnObjects: !0
//         })
//     }, {
//         meta: e("servicesMeta"),
//         title_mark: e("nationalServices"),
//         title: e("nationalServicesTitle"),
//         img: ES,
//         des: e("nationalServicesDescriptions", {
//             returnObjects: !0
//         })
//     }, {
//         meta: e("servicesMeta"),
//         title_mark: e("technologicalServices"),
//         title: e("technologicalServicesTitle"),
//         img: OS,
//         des: e("technologicalServicesDescriptions", {
//             returnObjects: !0
//         })
//     }, {
//         meta: e("servicesMeta"),
//         title_mark: e("edenServices"),
//         title: e("edenServicesTitle"),
//         img: NS,
//         des: e("edenServicesDescriptions", {
//             returnObjects: !0
//         })
//     }];
//     return g.jsx("div", {
//         className: "services",
//         children: g.jsx(zn, {
//             children: t.map( (n, r) => g.jsxs(Jt, {
//                 className: `justify-content-center justify-content-lg-start ${r % 2 == 0 ? "flex-lg-row-reverse" : ""}`,
//                 children: [g.jsx(Ye, {
//                     xs: 12,
//                     lg: 6,
//                     children: g.jsxs("div", {
//                         className: "common",
//                         children: [g.jsx("div", {
//                             className: "common-meta",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1000",
//                             "data-aos-delay": "",
//                             children: n.meta
//                         }), g.jsxs("h2", {
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1200",
//                             "data-aos-delay": "",
//                             children: [g.jsx("span", {
//                                 children: n.title_mark
//                             }), " ", n.title]
//                         }), g.jsx("ul", {
//                             children: n.des.map( (o, i) => g.jsxs("li", {
//                                 "data-aos": "fade-up",
//                                 "data-aos-duration": `1${i + 3}00`,
//                                 "data-aos-delay": `${i + 1}00`,
//                                 children: [g.jsx("img", {
//                                     src: kS,
//                                     alt: ""
//                                 }), " ", o]
//                             }, i))
//                         })]
//                     })
//                 }), g.jsx(Ye, {
//                     xs: 12,
//                     lg: 6,
//                     children: g.jsx("div", {
//                         className: "services-img",
//                         "data-aos": "fade-right",
//                         "data-aos-duration": "",
//                         "data-aos-delay": "",
//                         children: g.jsx("img", {
//                             src: n.img,
//                             alt: ""
//                         })
//                     })
//                 })]
//             }, r))
//         })
//     })
// }
// const TS = "/assets/Dinamo_LogoWhite-CEqbSWSK.png"
//   , _S = "/assets/Hathor_LogoWhite-CMYJVfPM.png"
//   , jS = "/assets/Camara_LogoWhite-BETiuRay.png";
// function LS() {
//     const {t: e} = Dt();
//     return g.jsx("div", {
//         className: "cta",
//         children: g.jsx(zn, {
//             children: g.jsxs(Jt, {
//                 children: [g.jsx(Ye, {
//                     xs: 12,
//                     children: g.jsxs("div", {
//                         className: "common text-center",
//                         children: [g.jsx("div", {
//                             className: "common-meta",
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1000",
//                             "data-aos-delay": "",
//                             children: e("partnerHeader")
//                         }), g.jsx("h2", {
//                             "data-aos": "fade-up",
//                             "data-aos-duration": "1200",
//                             "data-aos-delay": "",
//                             children: e("partnerSubtitle")
//                         })]
//                     })
//                 }), g.jsx(Ye, {
//                     xs: 12,
//                     children: g.jsx(Sp, {
//                         children: g.jsx(Sp.Item, {
//                             children: g.jsxs(Jt, {
//                                 className: "justify-content-center text-center",
//                                 children: [g.jsx(Ye, {
//                                     xs: 12,
//                                     md: 4,
//                                     className: "mb-3 mb-md-0",
//                                     children: g.jsx("img", {
//                                         className: "img-fluid",
//                                         src: TS,
//                                         alt: "Dinamo Partner Image",
//                                         style: {
//                                             maxWidth: "50%"
//                                         }
//                                     })
//                                 }), g.jsx(Ye, {
//                                     xs: 12,
//                                     md: 4,
//                                     className: "mb-3 mb-md-0",
//                                     children: g.jsx("img", {
//                                         className: "img-fluid",
//                                         src: _S,
//                                         alt: "Hathor Partner Image",
//                                         style: {
//                                             maxWidth: "50%"
//                                         }
//                                     })
//                                 }), g.jsx(Ye, {
//                                     xs: 12,
//                                     md: 4,
//                                     children: g.jsx("img", {
//                                         className: "img-fluid",
//                                         src: jS,
//                                         alt: "Camera Paraguaya de Blockchain Partner Image",
//                                         style: {
//                                             maxWidth: "50%"
//                                         }
//                                     })
//                                 })]
//                             })
//                         })
//                     })
//                 })]
//             })
//         })
//     })
// }
// function RS() {
//     const {t: e, i18n: t} = Dt()
//       , n = t.resolvedLanguage
//       , r = {
//         antiBriberyPolicy: n === "pt_BR" ? "/documents/politicaAntissubornoAnticorrupcao.pdf" : "/documents/antiBriberyAntiCorruptionPolicy.pdf",
//         dueDiligencePolicy: "/documents/dueDiligencePolicy.pdf",
//         termsOfUse: "/documents/acceptanceofTerms.pdf",
//         amlPolicy: n === "pt_BR" ? "/documents/politicaPrevencaoLavagemDinheiroFinanciamentoTerrorismo.pdf" : "/documents/moneyLaunderingTerrorismPreventionPolicy.pdf",
//         lgpdGuidelines: n === "pt_BR" ? "/documents/documentoDiretrizesLgpd.pdf" : "/documents/documentWithLgpdGuidelines.pdf",
//         supplierCodeOfEthics: n === "pt_BR" ? "/documents/codigoEticaCondutaFornecedores.pdf" : "/documents/supplierCodeOfEthicsAndConduct.pdf",
//         infoCyberSecurityPolicy: "/documents/politicaSegurancaInformacaoCibernetica.pdf",
//         generalDataProtectionLaw: n === "pt_BR" ? "/documents/leiGeralProtecaoDadosPessoaisLgpd.pdf" : "/documents/translationEnLeiGeralProtecaoDadosPessoaisLgpd.pdf"
//     };
//     return g.jsx("div", {
//         className: "footer",
//         children: g.jsx(zn, {
//             children: g.jsx(Jt, {
//                 children: g.jsxs(Ye, {
//                     xs: 12,
//                     children: [g.jsx("div", {
//                         className: "footer-logo",
//                         children: g.jsx("img", {
//                             src: hv,
//                             alt: "Footer"
//                         })
//                     }), g.jsxs("div", {
//                         className: "footer-item d-flex justify-content-between flex-wrap",
//                         children: [g.jsxs("div", {
//                             className: "footer-item-single",
//                             children: [g.jsx("h5", {
//                                 children: e("policies")
//                             }), g.jsxs("ul", {
//                                 children: [g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.antiBriberyPolicy,
//                                         target: "_blank",
//                                         children: e("antiBriberyPolicy")
//                                     })
//                                 }), g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.dueDiligencePolicy,
//                                         target: "_blank",
//                                         children: e("dueDiligencePolicy")
//                                     })
//                                 }), g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.privacyPolicy,
//                                         target: "_blank",
//                                         children: e("privacyPolicy")
//                                     })
//                                 }), g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.termsOfUse,
//                                         target: "_blank",
//                                         children: e("termsOfUse")
//                                     })
//                                 })]
//                             })]
//                         }), g.jsxs("div", {
//                             className: "footer-item-single",
//                             children: [g.jsx("h5", {
//                                 children: e("prevention")
//                             }), g.jsxs("ul", {
//                                 children: [g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.amlPolicy,
//                                         target: "_blank",
//                                         children: e("amlPolicy")
//                                     })
//                                 }), g.jsx("h5", {
//                                     children: e("privacy")
//                                 }), g.jsx("ul", {
//                                     children: g.jsx("li", {
//                                         children: g.jsx("a", {
//                                             href: r.lgpdGuidelines,
//                                             target: "_blank",
//                                             children: e("lgpdGuidelines")
//                                         })
//                                     })
//                                 })]
//                             })]
//                         }), g.jsxs("div", {
//                             className: "footer-item-single",
//                             children: [g.jsx("h5", {
//                                 children: e("ethics")
//                             }), g.jsx("ul", {
//                                 children: g.jsx("li", {
//                                     children: g.jsx("a", {
//                                         href: r.supplierCodeOfEthics,
//                                         target: "_blank",
//                                         children: e("supplierCodeOfEthics")
//                                     })
//                                 })
//                             }), g.jsxs("div", {
//                                 className: "more",
//                                 children: [g.jsx("h5", {
//                                     children: e("safety")
//                                 }), g.jsx("ul", {
//                                     children: g.jsx("li", {
//                                         children: g.jsx("a", {
//                                             href: r.infoCyberSecurityPolicy,
//                                             target: "_blank",
//                                             children: e("infoCyberSecurityPolicy")
//                                         })
//                                     })
//                                 })]
//                             })]
//                         }), g.jsx("div", {
//                             className: "footer-item-single",
//                             children: g.jsxs("div", {
//                                 className: "more",
//                                 children: [g.jsx("h5", {
//                                     children: e("lgpd")
//                                 }), g.jsx("ul", {
//                                     children: g.jsx("li", {
//                                         children: g.jsx("a", {
//                                             href: r.generalDataProtectionLaw,
//                                             target: "_blank",
//                                             children: e("generalDataProtectionLaw")
//                                         })
//                                     })
//                                 })]
//                             })
//                         })]
//                     }), g.jsxs("div", {
//                         className: "text",
//                         children: [g.jsx("p", {
//                             children: e("footerDisclaimer")
//                         }), g.jsx("p", {
//                             children: e("footerDisclaimer1")
//                         })]
//                     })]
//                 })
//             })
//         })
//     })
// }
// var $v = {
//     exports: {}
// };
// /*!
//  * JavaScript Cookie v2.2.1
//  * https://github.com/js-cookie/js-cookie
//  *
//  * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
//  * Released under the MIT license
//  */
// (function(e, t) {
//     (function(n) {
//         var r;
//         if (e.exports = n(),
//         r = !0,
//         !r) {
//             var o = window.Cookies
//               , i = window.Cookies = n();
//             i.noConflict = function() {
//                 return window.Cookies = o,
//                 i
//             }
//         }
//     }
//     )(function() {
//         function n() {
//             for (var i = 0, a = {}; i < arguments.length; i++) {
//                 var s = arguments[i];
//                 for (var l in s)
//                     a[l] = s[l]
//             }
//             return a
//         }
//         function r(i) {
//             return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
//         }
//         function o(i) {
//             function a() {}
//             function s(u, c, d) {
//                 if (!(typeof document > "u")) {
//                     d = n({
//                         path: "/"
//                     }, a.defaults, d),
//                     typeof d.expires == "number" && (d.expires = new Date(new Date * 1 + d.expires * 864e5)),
//                     d.expires = d.expires ? d.expires.toUTCString() : "";
//                     try {
//                         var f = JSON.stringify(c);
//                         /^[\{\[]/.test(f) && (c = f)
//                     } catch {}
//                     c = i.write ? i.write(c, u) : encodeURIComponent(String(c)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
//                     u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
//                     var m = "";
//                     for (var v in d)
//                         d[v] && (m += "; " + v,
//                         d[v] !== !0 && (m += "=" + d[v].split(";")[0]));
//                     return document.cookie = u + "=" + c + m
//                 }
//             }
//             function l(u, c) {
//                 if (!(typeof document > "u")) {
//                     for (var d = {}, f = document.cookie ? document.cookie.split("; ") : [], m = 0; m < f.length; m++) {
//                         var v = f[m].split("=")
//                           , x = v.slice(1).join("=");
//                         !c && x.charAt(0) === '"' && (x = x.slice(1, -1));
//                         try {
//                             var k = r(v[0]);
//                             if (x = (i.read || i)(x, k) || r(x),
//                             c)
//                                 try {
//                                     x = JSON.parse(x)
//                                 } catch {}
//                             if (d[k] = x,
//                             u === k)
//                                 break
//                         } catch {}
//                     }
//                     return u ? d[u] : d
//                 }
//             }
//             return a.set = s,
//             a.get = function(u) {
//                 return l(u, !1)
//             }
//             ,
//             a.getJSON = function(u) {
//                 return l(u, !0)
//             }
//             ,
//             a.remove = function(u, c) {
//                 s(u, "", n(c, {
//                     expires: -1
//                 }))
//             }
//             ,
//             a.defaults = {},
//             a.withConverter = o,
//             a
//         }
//         return o(function() {})
//     })
// }
// )($v);
// var AS = $v.exports;
// const ri = Mn(AS);
// var MS = function(t) {
//     var n = t.condition
//       , r = t.wrapper
//       , o = t.children;
//     return n ? r(o) : o
// };
// function ct() {
//     return ct = Object.assign ? Object.assign.bind() : function(e) {
//         for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//                 Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
//         }
//         return e
//     }
//     ,
//     ct.apply(this, arguments)
// }
// function IS(e, t) {
//     e.prototype = Object.create(t.prototype),
//     e.prototype.constructor = e,
//     Ru(e, t)
// }
// function Ru(e, t) {
//     return Ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
//         return r.__proto__ = o,
//         r
//     }
//     ,
//     Ru(e, t)
// }
// function DS(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// var Au = {
//     TOP: "top",
//     BOTTOM: "bottom",
//     NONE: "none"
// }, Ka;
// (function(e) {
//     e.STRICT = "strict",
//     e.LAX = "lax",
//     e.NONE = "none"
// }
// )(Ka || (Ka = {}));
// var Mu = {
//     HIDDEN: "hidden",
//     SHOW: "show",
//     BY_COOKIE_VALUE: "byCookieValue"
// }
//   , zv = "CookieConsent"
//   , $S = ["children"]
//   , zS = function(t) {
//     var n = t.children
//       , r = DS(t, $S);
//     return fe.createElement("button", Object.assign({}, r), n)
// }
//   , Co = {
//     disableStyles: !1,
//     hideOnAccept: !0,
//     hideOnDecline: !0,
//     location: Au.BOTTOM,
//     visible: Mu.BY_COOKIE_VALUE,
//     onAccept: function(t) {},
//     onDecline: function() {},
//     cookieName: zv,
//     cookieValue: "true",
//     declineCookieValue: "false",
//     setDeclineCookie: !0,
//     buttonText: "I understand",
//     declineButtonText: "I decline",
//     debug: !1,
//     expires: 365,
//     containerClasses: "CookieConsent",
//     contentClasses: "",
//     buttonClasses: "",
//     buttonWrapperClasses: "",
//     declineButtonClasses: "",
//     buttonId: "rcc-confirm-button",
//     declineButtonId: "rcc-decline-button",
//     extraCookieOptions: {},
//     disableButtonStyles: !1,
//     enableDeclineButton: !1,
//     flipButtons: !1,
//     sameSite: Ka.LAX,
//     ButtonComponent: zS,
//     overlay: !1,
//     overlayClasses: "",
//     onOverlayClick: function() {},
//     acceptOnOverlayClick: !1,
//     ariaAcceptLabel: "Accept cookies",
//     ariaDeclineLabel: "Decline cookies",
//     acceptOnScroll: !1,
//     acceptOnScrollPercentage: 25,
//     customContentAttributes: {},
//     customContainerAttributes: {},
//     customButtonProps: {},
//     customDeclineButtonProps: {},
//     customButtonWrapperAttributes: {},
//     style: {},
//     buttonStyle: {},
//     declineButtonStyle: {},
//     contentStyle: {},
//     overlayStyle: {}
// }
//   , FS = {
//     visible: !1,
//     style: {
//         alignItems: "baseline",
//         background: "#353535",
//         color: "white",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//         left: "0",
//         position: "fixed",
//         width: "100%",
//         zIndex: "999"
//     },
//     buttonStyle: {
//         background: "#ffd42d",
//         border: "0",
//         borderRadius: "0px",
//         boxShadow: "none",
//         color: "black",
//         cursor: "pointer",
//         flex: "0 0 auto",
//         padding: "5px 10px",
//         margin: "15px"
//     },
//     declineButtonStyle: {
//         background: "#c12a2a",
//         border: "0",
//         borderRadius: "0px",
//         boxShadow: "none",
//         color: "#e5e5e5",
//         cursor: "pointer",
//         flex: "0 0 auto",
//         padding: "5px 10px",
//         margin: "15px"
//     },
//     contentStyle: {
//         flex: "1 0 300px",
//         margin: "15px"
//     },
//     overlayStyle: {
//         position: "fixed",
//         left: 0,
//         top: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: "999",
//         backgroundColor: "rgba(0,0,0,0.3)"
//     }
// }
//   , BS = function(t) {
//     t === void 0 && (t = zv);
//     var n = ri.get(t);
//     return n === void 0 ? ri.get(Fv(t)) : n
// }
//   , Fv = function(t) {
//     return t + "-legacy"
// }
//   , Bv = function(e) {
//     IS(t, e);
//     function t() {
//         var r;
//         return r = e.apply(this, arguments) || this,
//         r.state = FS,
//         r.handleScroll = function() {
//             var o = ct({}, Co, r.props)
//               , i = o.acceptOnScrollPercentage
//               , a = document.documentElement
//               , s = document.body
//               , l = "scrollTop"
//               , u = "scrollHeight"
//               , c = (a[l] || s[l]) / ((a[u] || s[u]) - a.clientHeight) * 100;
//             c > i && r.accept(!0)
//         }
//         ,
//         r.removeScrollListener = function() {
//             var o = r.props.acceptOnScroll;
//             o && window.removeEventListener("scroll", r.handleScroll)
//         }
//         ,
//         r
//     }
//     var n = t.prototype;
//     return n.componentDidMount = function() {
//         var o = this.props.debug;
//         (this.getCookieValue() === void 0 || o) && (this.setState({
//             visible: !0
//         }),
//         this.props.acceptOnScroll && window.addEventListener("scroll", this.handleScroll, {
//             passive: !0
//         }))
//     }
//     ,
//     n.componentWillUnmount = function() {
//         this.removeScrollListener()
//     }
//     ,
//     n.accept = function(o) {
//         var i;
//         o === void 0 && (o = !1);
//         var a = ct({}, Co, this.props)
//           , s = a.cookieName
//           , l = a.cookieValue
//           , u = a.hideOnAccept
//           , c = a.onAccept;
//         this.setCookie(s, l),
//         c((i = o) != null ? i : !1),
//         u && (this.setState({
//             visible: !1
//         }),
//         this.removeScrollListener())
//     }
//     ,
//     n.overlayClick = function() {
//         var o = ct({}, Co, this.props)
//           , i = o.acceptOnOverlayClick
//           , a = o.onOverlayClick;
//         i && this.accept(),
//         a()
//     }
//     ,
//     n.decline = function() {
//         var o = ct({}, Co, this.props)
//           , i = o.cookieName
//           , a = o.declineCookieValue
//           , s = o.hideOnDecline
//           , l = o.onDecline
//           , u = o.setDeclineCookie;
//         u && this.setCookie(i, a),
//         l(),
//         s && this.setState({
//             visible: !1
//         })
//     }
//     ,
//     n.setCookie = function(o, i) {
//         var a = this.props
//           , s = a.extraCookieOptions
//           , l = a.expires
//           , u = a.sameSite
//           , c = this.props.cookieSecurity;
//         c === void 0 && (c = window.location ? window.location.protocol === "https:" : !0);
//         var d = ct({
//             expires: l
//         }, s, {
//             sameSite: u,
//             secure: c
//         });
//         u === Ka.NONE && ri.set(Fv(o), i, d),
//         ri.set(o, i, d)
//     }
//     ,
//     n.getCookieValue = function() {
//         var o = this.props.cookieName;
//         return BS(o)
//     }
//     ,
//     n.render = function() {
//         var o = this;
//         switch (this.props.visible) {
//         case Mu.HIDDEN:
//             return null;
//         case Mu.BY_COOKIE_VALUE:
//             if (!this.state.visible)
//                 return null;
//             break
//         }
//         var i = this.props
//           , a = i.location
//           , s = i.style
//           , l = i.buttonStyle
//           , u = i.declineButtonStyle
//           , c = i.contentStyle
//           , d = i.disableStyles
//           , f = i.buttonText
//           , m = i.declineButtonText
//           , v = i.containerClasses
//           , x = i.contentClasses
//           , k = i.buttonClasses
//           , h = i.buttonWrapperClasses
//           , p = i.declineButtonClasses
//           , w = i.buttonId
//           , b = i.declineButtonId
//           , O = i.disableButtonStyles
//           , C = i.enableDeclineButton
//           , N = i.flipButtons
//           , _ = i.ButtonComponent
//           , z = i.overlay
//           , D = i.overlayClasses
//           , A = i.overlayStyle
//           , T = i.ariaAcceptLabel
//           , B = i.ariaDeclineLabel
//           , I = i.customContainerAttributes
//           , S = i.customContentAttributes
//           , P = i.customButtonProps
//           , M = i.customDeclineButtonProps
//           , E = i.customButtonWrapperAttributes
//           , j = {}
//           , L = {}
//           , U = {}
//           , K = {}
//           , H = {};
//         switch (d ? (j = Object.assign({}, s),
//         L = Object.assign({}, l),
//         U = Object.assign({}, u),
//         K = Object.assign({}, c),
//         H = Object.assign({}, A)) : (j = Object.assign({}, ct({}, this.state.style, s)),
//         K = Object.assign({}, ct({}, this.state.contentStyle, c)),
//         H = Object.assign({}, ct({}, this.state.overlayStyle, A)),
//         O ? (L = Object.assign({}, l),
//         U = Object.assign({}, u)) : (L = Object.assign({}, ct({}, this.state.buttonStyle, l)),
//         U = Object.assign({}, ct({}, this.state.declineButtonStyle, u)))),
//         a) {
//         case Au.TOP:
//             j.top = "0";
//             break;
//         case Au.BOTTOM:
//             j.bottom = "0";
//             break
//         }
//         var V = [];
//         return C && V.push(fe.createElement(_, Object.assign({
//             key: "declineButton",
//             style: U,
//             className: p,
//             id: b,
//             "aria-label": B,
//             onClick: function() {
//                 o.decline()
//             }
//         }, M), m)),
//         V.push(fe.createElement(_, Object.assign({
//             key: "acceptButton",
//             style: L,
//             className: k,
//             id: w,
//             "aria-label": T,
//             onClick: function() {
//                 o.accept()
//             }
//         }, P), f)),
//         N && V.reverse(),
//         fe.createElement(MS, {
//             condition: z,
//             wrapper: function(Y) {
//                 return fe.createElement("div", {
//                     style: H,
//                     className: D,
//                     onClick: function() {
//                         o.overlayClick()
//                     }
//                 }, Y)
//             }
//         }, fe.createElement("div", Object.assign({
//             className: "" + v,
//             style: j
//         }, I), fe.createElement("div", Object.assign({
//             style: K,
//             className: x
//         }, S), this.props.children), fe.createElement("div", Object.assign({
//             className: "" + h
//         }, E), V.map(function(ie) {
//             return ie
//         }))))
//     }
//     ,
//     t
// }(y.Component);
// Bv.defaultProps = Co;
// var wf = {};
// Object.defineProperty(wf, "__esModule", {
//     value: !0
// });
// var US = function(t) {
//     console.warn("[react-gtm]", t)
// };
// wf.default = US;
// var HS = wf
//   , WS = VS(HS);
// function VS(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var KS = {
//     tags: function(t) {
//         var n = t.id
//           , r = t.events
//           , o = t.dataLayer
//           , i = t.dataLayerName
//           , a = t.preview
//           , s = t.auth
//           , l = "&gtm_auth=" + s
//           , u = "&gtm_preview=" + a;
//         n || (0,
//         WS.default)("GTM Id is required");
//         var c = `
//       <iframe src="https://www.googletagmanager.com/ns.html?id=` + n + l + u + `&gtm_cookies_win=x"
//         height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`
//           , d = `
//       (function(w,d,s,l,i){w[l]=w[l]||[];
//         w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ` + JSON.stringify(r).slice(1, -1) + `});
//         var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//         j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'` + l + u + `&gtm_cookies_win=x';
//         f.parentNode.insertBefore(j,f);
//       })(window,document,'script','` + i + "','" + n + "');"
//           , f = this.dataLayer(o, i);
//         return {
//             iframe: c,
//             script: d,
//             dataLayerVar: f
//         }
//     },
//     dataLayer: function(t, n) {
//         return `
//       window.` + n + " = window." + n + ` || [];
//       window.` + n + ".push(" + JSON.stringify(t) + ")"
//     }
// }
//   , GS = KS
//   , YS = GS
//   , Pp = XS(YS);
// function XS(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var qS = {
//     dataScript: function(t) {
//         var n = document.createElement("script");
//         return n.innerHTML = t,
//         n
//     },
//     gtm: function(t) {
//         var n = Pp.default.tags(t)
//           , r = function() {
//             var s = document.createElement("noscript");
//             return s.innerHTML = n.iframe,
//             s
//         }
//           , o = function() {
//             var s = document.createElement("script");
//             return s.innerHTML = n.script,
//             s
//         }
//           , i = this.dataScript(n.dataLayerVar);
//         return {
//             noScript: r,
//             script: o,
//             dataScript: i
//         }
//     },
//     initialize: function(t) {
//         var n = t.gtmId
//           , r = t.events
//           , o = r === void 0 ? {} : r
//           , i = t.dataLayer
//           , a = t.dataLayerName
//           , s = a === void 0 ? "dataLayer" : a
//           , l = t.auth
//           , u = l === void 0 ? "" : l
//           , c = t.preview
//           , d = c === void 0 ? "" : c
//           , f = this.gtm({
//             id: n,
//             events: o,
//             dataLayer: i || void 0,
//             dataLayerName: s,
//             auth: u,
//             preview: d
//         });
//         i && document.head.appendChild(f.dataScript),
//         document.head.insertBefore(f.script(), document.head.childNodes[0]),
//         document.body.insertBefore(f.noScript(), document.body.childNodes[0])
//     },
//     dataLayer: function(t) {
//         var n = t.dataLayer
//           , r = t.dataLayerName
//           , o = r === void 0 ? "dataLayer" : r;
//         if (window[o])
//             return window[o].push(n);
//         var i = Pp.default.dataLayer(n, o)
//           , a = this.dataScript(i);
//         document.head.insertBefore(a, document.head.childNodes[0])
//     }
// }
//   , QS = qS
//   , JS = QS
//   , ZS = ek(JS);
// function ek(e) {
//     return e && e.__esModule ? e : {
//         default: e
//     }
// }
// var tk = ZS.default;
// const nk = Mn(tk)
//   , rk = () => {
//     nk.initialize({
//         gtmId: "GTM-MW4T8NQ8"
//     })
// }
// ;
// function ok(e, t) {
//     typeof e == "function" ? e(t) : e != null && (e.current = t)
// }
// function Uv(...e) {
//     return t => e.forEach(n => ok(n, t))
// }
// function Hv(...e) {
//     return y.useCallback(Uv(...e), e)
// }
// const xf = y.forwardRef( (e, t) => {
//     const {children: n, ...r} = e
//       , o = y.Children.toArray(n)
//       , i = o.find(ak);
//     if (i) {
//         const a = i.props.children
//           , s = o.map(l => l === i ? y.Children.count(a) > 1 ? y.Children.only(null) : y.isValidElement(a) ? a.props.children : null : l);
//         return y.createElement(Iu, Qt({}, r, {
//             ref: t
//         }), y.isValidElement(a) ? y.cloneElement(a, void 0, s) : null)
//     }
//     return y.createElement(Iu, Qt({}, r, {
//         ref: t
//     }), n)
// }
// );
// xf.displayName = "Slot";
// const Iu = y.forwardRef( (e, t) => {
//     const {children: n, ...r} = e;
//     return y.isValidElement(n) ? y.cloneElement(n, {
//         ...sk(r, n.props),
//         ref: t ? Uv(t, n.ref) : n.ref
//     }) : y.Children.count(n) > 1 ? y.Children.only(null) : null
// }
// );
// Iu.displayName = "SlotClone";
// const ik = ({children: e}) => y.createElement(y.Fragment, null, e);
// function ak(e) {
//     return y.isValidElement(e) && e.type === ik
// }
// function sk(e, t) {
//     const n = {
//         ...t
//     };
//     for (const r in t) {
//         const o = e[r]
//           , i = t[r];
//         /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
//             i(...s),
//             o(...s)
//         }
//         : o && (n[r] = o) : r === "style" ? n[r] = {
//             ...o,
//             ...i
//         } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
//     }
//     return {
//         ...e,
//         ...n
//     }
// }
// function Wv(e) {
//     var t, n, r = "";
//     if (typeof e == "string" || typeof e == "number")
//         r += e;
//     else if (typeof e == "object")
//         if (Array.isArray(e))
//             for (t = 0; t < e.length; t++)
//                 e[t] && (n = Wv(e[t])) && (r && (r += " "),
//                 r += n);
//         else
//             for (t in e)
//                 e[t] && (r && (r += " "),
//                 r += t);
//     return r
// }
// function lk() {
//     for (var e, t, n = 0, r = ""; n < arguments.length; )
//         (e = arguments[n++]) && (t = Wv(e)) && (r && (r += " "),
//         r += t);
//     return r
// }
// const Tp = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e
//   , _p = lk
//   , uk = (e, t) => n => {
//     var r;
//     if ((t == null ? void 0 : t.variants) == null)
//         return _p(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
//     const {variants: o, defaultVariants: i} = t
//       , a = Object.keys(o).map(u => {
//         const c = n == null ? void 0 : n[u]
//           , d = i == null ? void 0 : i[u];
//         if (c === null)
//             return null;
//         const f = Tp(c) || Tp(d);
//         return o[u][f]
//     }
//     )
//       , s = n && Object.entries(n).reduce( (u, c) => {
//         let[d,f] = c;
//         return f === void 0 || (u[d] = f),
//         u
//     }
//     , {})
//       , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
//         let {class: d, className: f, ...m} = c;
//         return Object.entries(m).every(v => {
//             let[x,k] = v;
//             return Array.isArray(k) ? k.includes({
//                 ...i,
//                 ...s
//             }[x]) : {
//                 ...i,
//                 ...s
//             }[x] === k
//         }
//         ) ? [...u, d, f] : u
//     }
//     , []);
//     return _p(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
// }
// ;
// function Vv(e) {
//     var t, n, r = "";
//     if (typeof e == "string" || typeof e == "number")
//         r += e;
//     else if (typeof e == "object")
//         if (Array.isArray(e)) {
//             var o = e.length;
//             for (t = 0; t < o; t++)
//                 e[t] && (n = Vv(e[t])) && (r && (r += " "),
//                 r += n)
//         } else
//             for (n in e)
//                 e[n] && (r && (r += " "),
//                 r += n);
//     return r
// }
// function ck() {
//     for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
//         (e = arguments[n]) && (t = Vv(e)) && (r && (r += " "),
//         r += t);
//     return r
// }
// const bf = "-";
// function fk(e) {
//     const t = pk(e)
//       , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
//     function o(a) {
//         const s = a.split(bf);
//         return s[0] === "" && s.length !== 1 && s.shift(),
//         Kv(s, t) || dk(a)
//     }
//     function i(a, s) {
//         const l = n[a] || [];
//         return s && r[a] ? [...l, ...r[a]] : l
//     }
//     return {
//         getClassGroupId: o,
//         getConflictingClassGroupIds: i
//     }
// }
// function Kv(e, t) {
//     var a;
//     if (e.length === 0)
//         return t.classGroupId;
//     const n = e[0]
//       , r = t.nextPart.get(n)
//       , o = r ? Kv(e.slice(1), r) : void 0;
//     if (o)
//         return o;
//     if (t.validators.length === 0)
//         return;
//     const i = e.join(bf);
//     return (a = t.validators.find( ({validator: s}) => s(i))) == null ? void 0 : a.classGroupId
// }
// const jp = /^\[(.+)\]$/;
// function dk(e) {
//     if (jp.test(e)) {
//         const t = jp.exec(e)[1]
//           , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
//         if (n)
//             return "arbitrary.." + n
//     }
// }
// function pk(e) {
//     const {theme: t, prefix: n} = e
//       , r = {
//         nextPart: new Map,
//         validators: []
//     };
//     return mk(Object.entries(e.classGroups), n).forEach( ([i,a]) => {
//         Du(a, r, i, t)
//     }
//     ),
//     r
// }
// function Du(e, t, n, r) {
//     e.forEach(o => {
//         if (typeof o == "string") {
//             const i = o === "" ? t : Lp(t, o);
//             i.classGroupId = n;
//             return
//         }
//         if (typeof o == "function") {
//             if (hk(o)) {
//                 Du(o(r), t, n, r);
//                 return
//             }
//             t.validators.push({
//                 validator: o,
//                 classGroupId: n
//             });
//             return
//         }
//         Object.entries(o).forEach( ([i,a]) => {
//             Du(a, Lp(t, i), n, r)
//         }
//         )
//     }
//     )
// }
// function Lp(e, t) {
//     let n = e;
//     return t.split(bf).forEach(r => {
//         n.nextPart.has(r) || n.nextPart.set(r, {
//             nextPart: new Map,
//             validators: []
//         }),
//         n = n.nextPart.get(r)
//     }
//     ),
//     n
// }
// function hk(e) {
//     return e.isThemeGetter
// }
// function mk(e, t) {
//     return t ? e.map( ([n,r]) => {
//         const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([a,s]) => [t + a, s])) : i);
//         return [n, o]
//     }
//     ) : e
// }
// function gk(e) {
//     if (e < 1)
//         return {
//             get: () => {}
//             ,
//             set: () => {}
//         };
//     let t = 0
//       , n = new Map
//       , r = new Map;
//     function o(i, a) {
//         n.set(i, a),
//         t++,
//         t > e && (t = 0,
//         r = n,
//         n = new Map)
//     }
//     return {
//         get(i) {
//             let a = n.get(i);
//             if (a !== void 0)
//                 return a;
//             if ((a = r.get(i)) !== void 0)
//                 return o(i, a),
//                 a
//         },
//         set(i, a) {
//             n.has(i) ? n.set(i, a) : o(i, a)
//         }
//     }
// }
// const Gv = "!";
// function vk(e) {
//     const t = e.separator
//       , n = t.length === 1
//       , r = t[0]
//       , o = t.length;
//     return function(a) {
//         const s = [];
//         let l = 0, u = 0, c;
//         for (let x = 0; x < a.length; x++) {
//             let k = a[x];
//             if (l === 0) {
//                 if (k === r && (n || a.slice(x, x + o) === t)) {
//                     s.push(a.slice(u, x)),
//                     u = x + o;
//                     continue
//                 }
//                 if (k === "/") {
//                     c = x;
//                     continue
//                 }
//             }
//             k === "[" ? l++ : k === "]" && l--
//         }
//         const d = s.length === 0 ? a : a.substring(u)
//           , f = d.startsWith(Gv)
//           , m = f ? d.substring(1) : d
//           , v = c && c > u ? c - u : void 0;
//         return {
//             modifiers: s,
//             hasImportantModifier: f,
//             baseClassName: m,
//             maybePostfixModifierPosition: v
//         }
//     }
// }
// function yk(e) {
//     if (e.length <= 1)
//         return e;
//     const t = [];
//     let n = [];
//     return e.forEach(r => {
//         r[0] === "[" ? (t.push(...n.sort(), r),
//         n = []) : n.push(r)
//     }
//     ),
//     t.push(...n.sort()),
//     t
// }
// function wk(e) {
//     return {
//         cache: gk(e.cacheSize),
//         splitModifiers: vk(e),
//         ...fk(e)
//     }
// }
// const xk = /\s+/;
// function bk(e, t) {
//     const {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
//       , i = new Set;
//     return e.trim().split(xk).map(a => {
//         const {modifiers: s, hasImportantModifier: l, baseClassName: u, maybePostfixModifierPosition: c} = n(a);
//         let d = r(c ? u.substring(0, c) : u)
//           , f = !!c;
//         if (!d) {
//             if (!c)
//                 return {
//                     isTailwindClass: !1,
//                     originalClassName: a
//                 };
//             if (d = r(u),
//             !d)
//                 return {
//                     isTailwindClass: !1,
//                     originalClassName: a
//                 };
//             f = !1
//         }
//         const m = yk(s).join(":");
//         return {
//             isTailwindClass: !0,
//             modifierId: l ? m + Gv : m,
//             classGroupId: d,
//             originalClassName: a,
//             hasPostfixModifier: f
//         }
//     }
//     ).reverse().filter(a => {
//         if (!a.isTailwindClass)
//             return !0;
//         const {modifierId: s, classGroupId: l, hasPostfixModifier: u} = a
//           , c = s + l;
//         return i.has(c) ? !1 : (i.add(c),
//         o(l, u).forEach(d => i.add(s + d)),
//         !0)
//     }
//     ).reverse().map(a => a.originalClassName).join(" ")
// }
// function Sk() {
//     let e = 0, t, n, r = "";
//     for (; e < arguments.length; )
//         (t = arguments[e++]) && (n = Yv(t)) && (r && (r += " "),
//         r += n);
//     return r
// }
// function Yv(e) {
//     if (typeof e == "string")
//         return e;
//     let t, n = "";
//     for (let r = 0; r < e.length; r++)
//         e[r] && (t = Yv(e[r])) && (n && (n += " "),
//         n += t);
//     return n
// }
// function kk(e, ...t) {
//     let n, r, o, i = a;
//     function a(l) {
//         const u = t.reduce( (c, d) => d(c), e());
//         return n = wk(u),
//         r = n.cache.get,
//         o = n.cache.set,
//         i = s,
//         s(l)
//     }
//     function s(l) {
//         const u = r(l);
//         if (u)
//             return u;
//         const c = bk(l, n);
//         return o(l, c),
//         c
//     }
//     return function() {
//         return i(Sk.apply(null, arguments))
//     }
// }
// function ue(e) {
//     const t = n => n[e] || [];
//     return t.isThemeGetter = !0,
//     t
// }
// const Xv = /^\[(?:([a-z-]+):)?(.+)\]$/i
//   , Ck = /^\d+\/\d+$/
//   , Ek = new Set(["px", "full", "screen"])
//   , Ok = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
//   , Nk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
//   , Pk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
//   , Tk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
//   , _k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
// function Ft(e) {
//     return qn(e) || Ek.has(e) || Ck.test(e)
// }
// function cn(e) {
//     return no(e, "length", $k)
// }
// function qn(e) {
//     return !!e && !Number.isNaN(Number(e))
// }
// function Ji(e) {
//     return no(e, "number", qn)
// }
// function ho(e) {
//     return !!e && Number.isInteger(Number(e))
// }
// function jk(e) {
//     return e.endsWith("%") && qn(e.slice(0, -1))
// }
// function X(e) {
//     return Xv.test(e)
// }
// function fn(e) {
//     return Ok.test(e)
// }
// const Lk = new Set(["length", "size", "percentage"]);
// function Rk(e) {
//     return no(e, Lk, qv)
// }
// function Ak(e) {
//     return no(e, "position", qv)
// }
// const Mk = new Set(["image", "url"]);
// function Ik(e) {
//     return no(e, Mk, Fk)
// }
// function Dk(e) {
//     return no(e, "", zk)
// }
// function mo() {
//     return !0
// }
// function no(e, t, n) {
//     const r = Xv.exec(e);
//     return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
// }
// function $k(e) {
//     return Nk.test(e) && !Pk.test(e)
// }
// function qv() {
//     return !1
// }
// function zk(e) {
//     return Tk.test(e)
// }
// function Fk(e) {
//     return _k.test(e)
// }
// function Bk() {
//     const e = ue("colors")
//       , t = ue("spacing")
//       , n = ue("blur")
//       , r = ue("brightness")
//       , o = ue("borderColor")
//       , i = ue("borderRadius")
//       , a = ue("borderSpacing")
//       , s = ue("borderWidth")
//       , l = ue("contrast")
//       , u = ue("grayscale")
//       , c = ue("hueRotate")
//       , d = ue("invert")
//       , f = ue("gap")
//       , m = ue("gradientColorStops")
//       , v = ue("gradientColorStopPositions")
//       , x = ue("inset")
//       , k = ue("margin")
//       , h = ue("opacity")
//       , p = ue("padding")
//       , w = ue("saturate")
//       , b = ue("scale")
//       , O = ue("sepia")
//       , C = ue("skew")
//       , N = ue("space")
//       , _ = ue("translate")
//       , z = () => ["auto", "contain", "none"]
//       , D = () => ["auto", "hidden", "clip", "visible", "scroll"]
//       , A = () => ["auto", X, t]
//       , T = () => [X, t]
//       , B = () => ["", Ft, cn]
//       , I = () => ["auto", qn, X]
//       , S = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
//       , P = () => ["solid", "dashed", "dotted", "double", "none"]
//       , M = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
//       , E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
//       , j = () => ["", "0", X]
//       , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
//       , U = () => [qn, Ji]
//       , K = () => [qn, X];
//     return {
//         cacheSize: 500,
//         separator: ":",
//         theme: {
//             colors: [mo],
//             spacing: [Ft, cn],
//             blur: ["none", "", fn, X],
//             brightness: U(),
//             borderColor: [e],
//             borderRadius: ["none", "", "full", fn, X],
//             borderSpacing: T(),
//             borderWidth: B(),
//             contrast: U(),
//             grayscale: j(),
//             hueRotate: K(),
//             invert: j(),
//             gap: T(),
//             gradientColorStops: [e],
//             gradientColorStopPositions: [jk, cn],
//             inset: A(),
//             margin: A(),
//             opacity: U(),
//             padding: T(),
//             saturate: U(),
//             scale: U(),
//             sepia: j(),
//             skew: K(),
//             space: T(),
//             translate: T()
//         },
//         classGroups: {
//             aspect: [{
//                 aspect: ["auto", "square", "video", X]
//             }],
//             container: ["container"],
//             columns: [{
//                 columns: [fn]
//             }],
//             "break-after": [{
//                 "break-after": L()
//             }],
//             "break-before": [{
//                 "break-before": L()
//             }],
//             "break-inside": [{
//                 "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
//             }],
//             "box-decoration": [{
//                 "box-decoration": ["slice", "clone"]
//             }],
//             box: [{
//                 box: ["border", "content"]
//             }],
//             display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
//             float: [{
//                 float: ["right", "left", "none", "start", "end"]
//             }],
//             clear: [{
//                 clear: ["left", "right", "both", "none", "start", "end"]
//             }],
//             isolation: ["isolate", "isolation-auto"],
//             "object-fit": [{
//                 object: ["contain", "cover", "fill", "none", "scale-down"]
//             }],
//             "object-position": [{
//                 object: [...S(), X]
//             }],
//             overflow: [{
//                 overflow: D()
//             }],
//             "overflow-x": [{
//                 "overflow-x": D()
//             }],
//             "overflow-y": [{
//                 "overflow-y": D()
//             }],
//             overscroll: [{
//                 overscroll: z()
//             }],
//             "overscroll-x": [{
//                 "overscroll-x": z()
//             }],
//             "overscroll-y": [{
//                 "overscroll-y": z()
//             }],
//             position: ["static", "fixed", "absolute", "relative", "sticky"],
//             inset: [{
//                 inset: [x]
//             }],
//             "inset-x": [{
//                 "inset-x": [x]
//             }],
//             "inset-y": [{
//                 "inset-y": [x]
//             }],
//             start: [{
//                 start: [x]
//             }],
//             end: [{
//                 end: [x]
//             }],
//             top: [{
//                 top: [x]
//             }],
//             right: [{
//                 right: [x]
//             }],
//             bottom: [{
//                 bottom: [x]
//             }],
//             left: [{
//                 left: [x]
//             }],
//             visibility: ["visible", "invisible", "collapse"],
//             z: [{
//                 z: ["auto", ho, X]
//             }],
//             basis: [{
//                 basis: A()
//             }],
//             "flex-direction": [{
//                 flex: ["row", "row-reverse", "col", "col-reverse"]
//             }],
//             "flex-wrap": [{
//                 flex: ["wrap", "wrap-reverse", "nowrap"]
//             }],
//             flex: [{
//                 flex: ["1", "auto", "initial", "none", X]
//             }],
//             grow: [{
//                 grow: j()
//             }],
//             shrink: [{
//                 shrink: j()
//             }],
//             order: [{
//                 order: ["first", "last", "none", ho, X]
//             }],
//             "grid-cols": [{
//                 "grid-cols": [mo]
//             }],
//             "col-start-end": [{
//                 col: ["auto", {
//                     span: ["full", ho, X]
//                 }, X]
//             }],
//             "col-start": [{
//                 "col-start": I()
//             }],
//             "col-end": [{
//                 "col-end": I()
//             }],
//             "grid-rows": [{
//                 "grid-rows": [mo]
//             }],
//             "row-start-end": [{
//                 row: ["auto", {
//                     span: [ho, X]
//                 }, X]
//             }],
//             "row-start": [{
//                 "row-start": I()
//             }],
//             "row-end": [{
//                 "row-end": I()
//             }],
//             "grid-flow": [{
//                 "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
//             }],
//             "auto-cols": [{
//                 "auto-cols": ["auto", "min", "max", "fr", X]
//             }],
//             "auto-rows": [{
//                 "auto-rows": ["auto", "min", "max", "fr", X]
//             }],
//             gap: [{
//                 gap: [f]
//             }],
//             "gap-x": [{
//                 "gap-x": [f]
//             }],
//             "gap-y": [{
//                 "gap-y": [f]
//             }],
//             "justify-content": [{
//                 justify: ["normal", ...E()]
//             }],
//             "justify-items": [{
//                 "justify-items": ["start", "end", "center", "stretch"]
//             }],
//             "justify-self": [{
//                 "justify-self": ["auto", "start", "end", "center", "stretch"]
//             }],
//             "align-content": [{
//                 content: ["normal", ...E(), "baseline"]
//             }],
//             "align-items": [{
//                 items: ["start", "end", "center", "baseline", "stretch"]
//             }],
//             "align-self": [{
//                 self: ["auto", "start", "end", "center", "stretch", "baseline"]
//             }],
//             "place-content": [{
//                 "place-content": [...E(), "baseline"]
//             }],
//             "place-items": [{
//                 "place-items": ["start", "end", "center", "baseline", "stretch"]
//             }],
//             "place-self": [{
//                 "place-self": ["auto", "start", "end", "center", "stretch"]
//             }],
//             p: [{
//                 p: [p]
//             }],
//             px: [{
//                 px: [p]
//             }],
//             py: [{
//                 py: [p]
//             }],
//             ps: [{
//                 ps: [p]
//             }],
//             pe: [{
//                 pe: [p]
//             }],
//             pt: [{
//                 pt: [p]
//             }],
//             pr: [{
//                 pr: [p]
//             }],
//             pb: [{
//                 pb: [p]
//             }],
//             pl: [{
//                 pl: [p]
//             }],
//             m: [{
//                 m: [k]
//             }],
//             mx: [{
//                 mx: [k]
//             }],
//             my: [{
//                 my: [k]
//             }],
//             ms: [{
//                 ms: [k]
//             }],
//             me: [{
//                 me: [k]
//             }],
//             mt: [{
//                 mt: [k]
//             }],
//             mr: [{
//                 mr: [k]
//             }],
//             mb: [{
//                 mb: [k]
//             }],
//             ml: [{
//                 ml: [k]
//             }],
//             "space-x": [{
//                 "space-x": [N]
//             }],
//             "space-x-reverse": ["space-x-reverse"],
//             "space-y": [{
//                 "space-y": [N]
//             }],
//             "space-y-reverse": ["space-y-reverse"],
//             w: [{
//                 w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
//             }],
//             "min-w": [{
//                 "min-w": [X, t, "min", "max", "fit"]
//             }],
//             "max-w": [{
//                 "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
//                     screen: [fn]
//                 }, fn]
//             }],
//             h: [{
//                 h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
//             }],
//             "min-h": [{
//                 "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
//             }],
//             "max-h": [{
//                 "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
//             }],
//             size: [{
//                 size: [X, t, "auto", "min", "max", "fit"]
//             }],
//             "font-size": [{
//                 text: ["base", fn, cn]
//             }],
//             "font-smoothing": ["antialiased", "subpixel-antialiased"],
//             "font-style": ["italic", "not-italic"],
//             "font-weight": [{
//                 font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ji]
//             }],
//             "font-family": [{
//                 font: [mo]
//             }],
//             "fvn-normal": ["normal-nums"],
//             "fvn-ordinal": ["ordinal"],
//             "fvn-slashed-zero": ["slashed-zero"],
//             "fvn-figure": ["lining-nums", "oldstyle-nums"],
//             "fvn-spacing": ["proportional-nums", "tabular-nums"],
//             "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
//             tracking: [{
//                 tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
//             }],
//             "line-clamp": [{
//                 "line-clamp": ["none", qn, Ji]
//             }],
//             leading: [{
//                 leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ft, X]
//             }],
//             "list-image": [{
//                 "list-image": ["none", X]
//             }],
//             "list-style-type": [{
//                 list: ["none", "disc", "decimal", X]
//             }],
//             "list-style-position": [{
//                 list: ["inside", "outside"]
//             }],
//             "placeholder-color": [{
//                 placeholder: [e]
//             }],
//             "placeholder-opacity": [{
//                 "placeholder-opacity": [h]
//             }],
//             "text-alignment": [{
//                 text: ["left", "center", "right", "justify", "start", "end"]
//             }],
//             "text-color": [{
//                 text: [e]
//             }],
//             "text-opacity": [{
//                 "text-opacity": [h]
//             }],
//             "text-decoration": ["underline", "overline", "line-through", "no-underline"],
//             "text-decoration-style": [{
//                 decoration: [...P(), "wavy"]
//             }],
//             "text-decoration-thickness": [{
//                 decoration: ["auto", "from-font", Ft, cn]
//             }],
//             "underline-offset": [{
//                 "underline-offset": ["auto", Ft, X]
//             }],
//             "text-decoration-color": [{
//                 decoration: [e]
//             }],
//             "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
//             "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
//             "text-wrap": [{
//                 text: ["wrap", "nowrap", "balance", "pretty"]
//             }],
//             indent: [{
//                 indent: T()
//             }],
//             "vertical-align": [{
//                 align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
//             }],
//             whitespace: [{
//                 whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
//             }],
//             break: [{
//                 break: ["normal", "words", "all", "keep"]
//             }],
//             hyphens: [{
//                 hyphens: ["none", "manual", "auto"]
//             }],
//             content: [{
//                 content: ["none", X]
//             }],
//             "bg-attachment": [{
//                 bg: ["fixed", "local", "scroll"]
//             }],
//             "bg-clip": [{
//                 "bg-clip": ["border", "padding", "content", "text"]
//             }],
//             "bg-opacity": [{
//                 "bg-opacity": [h]
//             }],
//             "bg-origin": [{
//                 "bg-origin": ["border", "padding", "content"]
//             }],
//             "bg-position": [{
//                 bg: [...S(), Ak]
//             }],
//             "bg-repeat": [{
//                 bg: ["no-repeat", {
//                     repeat: ["", "x", "y", "round", "space"]
//                 }]
//             }],
//             "bg-size": [{
//                 bg: ["auto", "cover", "contain", Rk]
//             }],
//             "bg-image": [{
//                 bg: ["none", {
//                     "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
//                 }, Ik]
//             }],
//             "bg-color": [{
//                 bg: [e]
//             }],
//             "gradient-from-pos": [{
//                 from: [v]
//             }],
//             "gradient-via-pos": [{
//                 via: [v]
//             }],
//             "gradient-to-pos": [{
//                 to: [v]
//             }],
//             "gradient-from": [{
//                 from: [m]
//             }],
//             "gradient-via": [{
//                 via: [m]
//             }],
//             "gradient-to": [{
//                 to: [m]
//             }],
//             rounded: [{
//                 rounded: [i]
//             }],
//             "rounded-s": [{
//                 "rounded-s": [i]
//             }],
//             "rounded-e": [{
//                 "rounded-e": [i]
//             }],
//             "rounded-t": [{
//                 "rounded-t": [i]
//             }],
//             "rounded-r": [{
//                 "rounded-r": [i]
//             }],
//             "rounded-b": [{
//                 "rounded-b": [i]
//             }],
//             "rounded-l": [{
//                 "rounded-l": [i]
//             }],
//             "rounded-ss": [{
//                 "rounded-ss": [i]
//             }],
//             "rounded-se": [{
//                 "rounded-se": [i]
//             }],
//             "rounded-ee": [{
//                 "rounded-ee": [i]
//             }],
//             "rounded-es": [{
//                 "rounded-es": [i]
//             }],
//             "rounded-tl": [{
//                 "rounded-tl": [i]
//             }],
//             "rounded-tr": [{
//                 "rounded-tr": [i]
//             }],
//             "rounded-br": [{
//                 "rounded-br": [i]
//             }],
//             "rounded-bl": [{
//                 "rounded-bl": [i]
//             }],
//             "border-w": [{
//                 border: [s]
//             }],
//             "border-w-x": [{
//                 "border-x": [s]
//             }],
//             "border-w-y": [{
//                 "border-y": [s]
//             }],
//             "border-w-s": [{
//                 "border-s": [s]
//             }],
//             "border-w-e": [{
//                 "border-e": [s]
//             }],
//             "border-w-t": [{
//                 "border-t": [s]
//             }],
//             "border-w-r": [{
//                 "border-r": [s]
//             }],
//             "border-w-b": [{
//                 "border-b": [s]
//             }],
//             "border-w-l": [{
//                 "border-l": [s]
//             }],
//             "border-opacity": [{
//                 "border-opacity": [h]
//             }],
//             "border-style": [{
//                 border: [...P(), "hidden"]
//             }],
//             "divide-x": [{
//                 "divide-x": [s]
//             }],
//             "divide-x-reverse": ["divide-x-reverse"],
//             "divide-y": [{
//                 "divide-y": [s]
//             }],
//             "divide-y-reverse": ["divide-y-reverse"],
//             "divide-opacity": [{
//                 "divide-opacity": [h]
//             }],
//             "divide-style": [{
//                 divide: P()
//             }],
//             "border-color": [{
//                 border: [o]
//             }],
//             "border-color-x": [{
//                 "border-x": [o]
//             }],
//             "border-color-y": [{
//                 "border-y": [o]
//             }],
//             "border-color-t": [{
//                 "border-t": [o]
//             }],
//             "border-color-r": [{
//                 "border-r": [o]
//             }],
//             "border-color-b": [{
//                 "border-b": [o]
//             }],
//             "border-color-l": [{
//                 "border-l": [o]
//             }],
//             "divide-color": [{
//                 divide: [o]
//             }],
//             "outline-style": [{
//                 outline: ["", ...P()]
//             }],
//             "outline-offset": [{
//                 "outline-offset": [Ft, X]
//             }],
//             "outline-w": [{
//                 outline: [Ft, cn]
//             }],
//             "outline-color": [{
//                 outline: [e]
//             }],
//             "ring-w": [{
//                 ring: B()
//             }],
//             "ring-w-inset": ["ring-inset"],
//             "ring-color": [{
//                 ring: [e]
//             }],
//             "ring-opacity": [{
//                 "ring-opacity": [h]
//             }],
//             "ring-offset-w": [{
//                 "ring-offset": [Ft, cn]
//             }],
//             "ring-offset-color": [{
//                 "ring-offset": [e]
//             }],
//             shadow: [{
//                 shadow: ["", "inner", "none", fn, Dk]
//             }],
//             "shadow-color": [{
//                 shadow: [mo]
//             }],
//             opacity: [{
//                 opacity: [h]
//             }],
//             "mix-blend": [{
//                 "mix-blend": [...M(), "plus-lighter", "plus-darker"]
//             }],
//             "bg-blend": [{
//                 "bg-blend": M()
//             }],
//             filter: [{
//                 filter: ["", "none"]
//             }],
//             blur: [{
//                 blur: [n]
//             }],
//             brightness: [{
//                 brightness: [r]
//             }],
//             contrast: [{
//                 contrast: [l]
//             }],
//             "drop-shadow": [{
//                 "drop-shadow": ["", "none", fn, X]
//             }],
//             grayscale: [{
//                 grayscale: [u]
//             }],
//             "hue-rotate": [{
//                 "hue-rotate": [c]
//             }],
//             invert: [{
//                 invert: [d]
//             }],
//             saturate: [{
//                 saturate: [w]
//             }],
//             sepia: [{
//                 sepia: [O]
//             }],
//             "backdrop-filter": [{
//                 "backdrop-filter": ["", "none"]
//             }],
//             "backdrop-blur": [{
//                 "backdrop-blur": [n]
//             }],
//             "backdrop-brightness": [{
//                 "backdrop-brightness": [r]
//             }],
//             "backdrop-contrast": [{
//                 "backdrop-contrast": [l]
//             }],
//             "backdrop-grayscale": [{
//                 "backdrop-grayscale": [u]
//             }],
//             "backdrop-hue-rotate": [{
//                 "backdrop-hue-rotate": [c]
//             }],
//             "backdrop-invert": [{
//                 "backdrop-invert": [d]
//             }],
//             "backdrop-opacity": [{
//                 "backdrop-opacity": [h]
//             }],
//             "backdrop-saturate": [{
//                 "backdrop-saturate": [w]
//             }],
//             "backdrop-sepia": [{
//                 "backdrop-sepia": [O]
//             }],
//             "border-collapse": [{
//                 border: ["collapse", "separate"]
//             }],
//             "border-spacing": [{
//                 "border-spacing": [a]
//             }],
//             "border-spacing-x": [{
//                 "border-spacing-x": [a]
//             }],
//             "border-spacing-y": [{
//                 "border-spacing-y": [a]
//             }],
//             "table-layout": [{
//                 table: ["auto", "fixed"]
//             }],
//             caption: [{
//                 caption: ["top", "bottom"]
//             }],
//             transition: [{
//                 transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
//             }],
//             duration: [{
//                 duration: K()
//             }],
//             ease: [{
//                 ease: ["linear", "in", "out", "in-out", X]
//             }],
//             delay: [{
//                 delay: K()
//             }],
//             animate: [{
//                 animate: ["none", "spin", "ping", "pulse", "bounce", X]
//             }],
//             transform: [{
//                 transform: ["", "gpu", "none"]
//             }],
//             scale: [{
//                 scale: [b]
//             }],
//             "scale-x": [{
//                 "scale-x": [b]
//             }],
//             "scale-y": [{
//                 "scale-y": [b]
//             }],
//             rotate: [{
//                 rotate: [ho, X]
//             }],
//             "translate-x": [{
//                 "translate-x": [_]
//             }],
//             "translate-y": [{
//                 "translate-y": [_]
//             }],
//             "skew-x": [{
//                 "skew-x": [C]
//             }],
//             "skew-y": [{
//                 "skew-y": [C]
//             }],
//             "transform-origin": [{
//                 origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
//             }],
//             accent: [{
//                 accent: ["auto", e]
//             }],
//             appearance: [{
//                 appearance: ["none", "auto"]
//             }],
//             cursor: [{
//                 cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
//             }],
//             "caret-color": [{
//                 caret: [e]
//             }],
//             "pointer-events": [{
//                 "pointer-events": ["none", "auto"]
//             }],
//             resize: [{
//                 resize: ["none", "y", "x", ""]
//             }],
//             "scroll-behavior": [{
//                 scroll: ["auto", "smooth"]
//             }],
//             "scroll-m": [{
//                 "scroll-m": T()
//             }],
//             "scroll-mx": [{
//                 "scroll-mx": T()
//             }],
//             "scroll-my": [{
//                 "scroll-my": T()
//             }],
//             "scroll-ms": [{
//                 "scroll-ms": T()
//             }],
//             "scroll-me": [{
//                 "scroll-me": T()
//             }],
//             "scroll-mt": [{
//                 "scroll-mt": T()
//             }],
//             "scroll-mr": [{
//                 "scroll-mr": T()
//             }],
//             "scroll-mb": [{
//                 "scroll-mb": T()
//             }],
//             "scroll-ml": [{
//                 "scroll-ml": T()
//             }],
//             "scroll-p": [{
//                 "scroll-p": T()
//             }],
//             "scroll-px": [{
//                 "scroll-px": T()
//             }],
//             "scroll-py": [{
//                 "scroll-py": T()
//             }],
//             "scroll-ps": [{
//                 "scroll-ps": T()
//             }],
//             "scroll-pe": [{
//                 "scroll-pe": T()
//             }],
//             "scroll-pt": [{
//                 "scroll-pt": T()
//             }],
//             "scroll-pr": [{
//                 "scroll-pr": T()
//             }],
//             "scroll-pb": [{
//                 "scroll-pb": T()
//             }],
//             "scroll-pl": [{
//                 "scroll-pl": T()
//             }],
//             "snap-align": [{
//                 snap: ["start", "end", "center", "align-none"]
//             }],
//             "snap-stop": [{
//                 snap: ["normal", "always"]
//             }],
//             "snap-type": [{
//                 snap: ["none", "x", "y", "both"]
//             }],
//             "snap-strictness": [{
//                 snap: ["mandatory", "proximity"]
//             }],
//             touch: [{
//                 touch: ["auto", "none", "manipulation"]
//             }],
//             "touch-x": [{
//                 "touch-pan": ["x", "left", "right"]
//             }],
//             "touch-y": [{
//                 "touch-pan": ["y", "up", "down"]
//             }],
//             "touch-pz": ["touch-pinch-zoom"],
//             select: [{
//                 select: ["none", "text", "all", "auto"]
//             }],
//             "will-change": [{
//                 "will-change": ["auto", "scroll", "contents", "transform", X]
//             }],
//             fill: [{
//                 fill: [e, "none"]
//             }],
//             "stroke-w": [{
//                 stroke: [Ft, cn, Ji]
//             }],
//             stroke: [{
//                 stroke: [e, "none"]
//             }],
//             sr: ["sr-only", "not-sr-only"],
//             "forced-color-adjust": [{
//                 "forced-color-adjust": ["auto", "none"]
//             }]
//         },
//         conflictingClassGroups: {
//             overflow: ["overflow-x", "overflow-y"],
//             overscroll: ["overscroll-x", "overscroll-y"],
//             inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
//             "inset-x": ["right", "left"],
//             "inset-y": ["top", "bottom"],
//             flex: ["basis", "grow", "shrink"],
//             gap: ["gap-x", "gap-y"],
//             p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
//             px: ["pr", "pl"],
//             py: ["pt", "pb"],
//             m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
//             mx: ["mr", "ml"],
//             my: ["mt", "mb"],
//             size: ["w", "h"],
//             "font-size": ["leading"],
//             "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
//             "fvn-ordinal": ["fvn-normal"],
//             "fvn-slashed-zero": ["fvn-normal"],
//             "fvn-figure": ["fvn-normal"],
//             "fvn-spacing": ["fvn-normal"],
//             "fvn-fraction": ["fvn-normal"],
//             "line-clamp": ["display", "overflow"],
//             rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
//             "rounded-s": ["rounded-ss", "rounded-es"],
//             "rounded-e": ["rounded-se", "rounded-ee"],
//             "rounded-t": ["rounded-tl", "rounded-tr"],
//             "rounded-r": ["rounded-tr", "rounded-br"],
//             "rounded-b": ["rounded-br", "rounded-bl"],
//             "rounded-l": ["rounded-tl", "rounded-bl"],
//             "border-spacing": ["border-spacing-x", "border-spacing-y"],
//             "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
//             "border-w-x": ["border-w-r", "border-w-l"],
//             "border-w-y": ["border-w-t", "border-w-b"],
//             "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
//             "border-color-x": ["border-color-r", "border-color-l"],
//             "border-color-y": ["border-color-t", "border-color-b"],
//             "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
//             "scroll-mx": ["scroll-mr", "scroll-ml"],
//             "scroll-my": ["scroll-mt", "scroll-mb"],
//             "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
//             "scroll-px": ["scroll-pr", "scroll-pl"],
//             "scroll-py": ["scroll-pt", "scroll-pb"],
//             touch: ["touch-x", "touch-y", "touch-pz"],
//             "touch-x": ["touch"],
//             "touch-y": ["touch"],
//             "touch-pz": ["touch"]
//         },
//         conflictingClassGroupModifiers: {
//             "font-size": ["leading"]
//         }
//     }
// }
// const Uk = kk(Bk);
// function Zt(...e) {
//     return Uk(ck(e))
// }
// const Hk = uk("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
//     variants: {
//         variant: {
//             default: "bg-primary text-primary-foreground hover:bg-primary/90",
//             destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//             outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//             secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//             ghost: "hover:bg-accent hover:text-accent-foreground",
//             link: "text-primary underline-offset-4 hover:underline"
//         },
//         size: {
//             default: "h-10 px-4 py-2",
//             sm: "h-9 rounded-md px-3",
//             lg: "h-11 rounded-md px-8",
//             icon: "h-10 w-10"
//         }
//     },
//     defaultVariants: {
//         variant: "default",
//         size: "default"
//     }
// })
//   , Ga = y.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
//     const a = r ? xf : "button";
//     return g.jsx(a, {
//         className: Zt(Hk({
//             variant: t,
//             size: n,
//             className: e
//         })),
//         ref: i,
//         ...o
//     })
// }
// );
// Ga.displayName = "Button";
// const Qv = y.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
//     ref: n,
//     className: Zt("rounded-lg border bg-card text-card-foreground shadow-sm", e),
//     ...t
// }));
// Qv.displayName = "Card";
// const Wk = y.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
//     ref: n,
//     className: Zt("flex flex-col space-y-1.5 p-6", e),
//     ...t
// }));
// Wk.displayName = "CardHeader";
// const Vk = y.forwardRef( ({className: e, ...t}, n) => g.jsx("h3", {
//     ref: n,
//     className: Zt("text-2xl font-semibold leading-none tracking-tight", e),
//     ...t
// }));
// Vk.displayName = "CardTitle";
// const Kk = y.forwardRef( ({className: e, ...t}, n) => g.jsx("p", {
//     ref: n,
//     className: Zt("text-sm text-muted-foreground", e),
//     ...t
// }));
// Kk.displayName = "CardDescription";
// const Gk = y.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
//     ref: n,
//     className: Zt("p-6 pt-0", e),
//     ...t
// }));
// Gk.displayName = "CardContent";
// const Yk = y.forwardRef( ({className: e, ...t}, n) => g.jsx("div", {
//     ref: n,
//     className: Zt("flex items-center p-6 pt-0", e),
//     ...t
// }));
// Yk.displayName = "CardFooter";
// function Xk(e, t=[]) {
//     let n = [];
//     function r(i, a) {
//         const s = y.createContext(a)
//           , l = n.length;
//         n = [...n, a];
//         function u(d) {
//             const {scope: f, children: m, ...v} = d
//               , x = (f == null ? void 0 : f[e][l]) || s
//               , k = y.useMemo( () => v, Object.values(v));
//             return y.createElement(x.Provider, {
//                 value: k
//             }, m)
//         }
//         function c(d, f) {
//             const m = (f == null ? void 0 : f[e][l]) || s
//               , v = y.useContext(m);
//             if (v)
//                 return v;
//             if (a !== void 0)
//                 return a;
//             throw new Error(`\`${d}\` must be used within \`${i}\``)
//         }
//         return u.displayName = i + "Provider",
//         [u, c]
//     }
//     const o = () => {
//         const i = n.map(a => y.createContext(a));
//         return function(s) {
//             const l = (s == null ? void 0 : s[e]) || i;
//             return y.useMemo( () => ({
//                 [`__scope${e}`]: {
//                     ...s,
//                     [e]: l
//                 }
//             }), [s, l])
//         }
//     }
//     ;
//     return o.scopeName = e,
//     [r, qk(o, ...t)]
// }
// function qk(...e) {
//     const t = e[0];
//     if (e.length === 1)
//         return t;
//     const n = () => {
//         const r = e.map(o => ({
//             useScope: o(),
//             scopeName: o.scopeName
//         }));
//         return function(i) {
//             const a = r.reduce( (s, {useScope: l, scopeName: u}) => {
//                 const d = l(i)[`__scope${u}`];
//                 return {
//                     ...s,
//                     ...d
//                 }
//             }
//             , {});
//             return y.useMemo( () => ({
//                 [`__scope${t.scopeName}`]: a
//             }), [a])
//         }
//     }
//     ;
//     return n.scopeName = t.scopeName,
//     n
// }
// function Rp(e, t, {checkForDefaultPrevented: n=!0}={}) {
//     return function(o) {
//         if (e == null || e(o),
//         n === !1 || !o.defaultPrevented)
//             return t == null ? void 0 : t(o)
//     }
// }
// function Jv(e) {
//     const t = y.useRef(e);
//     return y.useEffect( () => {
//         t.current = e
//     }
//     ),
//     y.useMemo( () => (...n) => {
//         var r;
//         return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
//     }
//     , [])
// }
// function Qk({prop: e, defaultProp: t, onChange: n= () => {}
// }) {
//     const [r,o] = Jk({
//         defaultProp: t,
//         onChange: n
//     })
//       , i = e !== void 0
//       , a = i ? e : r
//       , s = Jv(n)
//       , l = y.useCallback(u => {
//         if (i) {
//             const d = typeof u == "function" ? u(e) : u;
//             d !== e && s(d)
//         } else
//             o(u)
//     }
//     , [i, e, o, s]);
//     return [a, l]
// }
// function Jk({defaultProp: e, onChange: t}) {
//     const n = y.useState(e)
//       , [r] = n
//       , o = y.useRef(r)
//       , i = Jv(t);
//     return y.useEffect( () => {
//         o.current !== r && (i(r),
//         o.current = r)
//     }
//     , [r, o, i]),
//     n
// }
// function Zk(e) {
//     const t = y.useRef({
//         value: e,
//         previous: e
//     });
//     return y.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
//     t.current.value = e),
//     t.current.previous), [e])
// }
// const $u = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {}
// ;
// function e3(e) {
//     const [t,n] = y.useState(void 0);
//     return $u( () => {
//         if (e) {
//             n({
//                 width: e.offsetWidth,
//                 height: e.offsetHeight
//             });
//             const r = new ResizeObserver(o => {
//                 if (!Array.isArray(o) || !o.length)
//                     return;
//                 const i = o[0];
//                 let a, s;
//                 if ("borderBoxSize"in i) {
//                     const l = i.borderBoxSize
//                       , u = Array.isArray(l) ? l[0] : l;
//                     a = u.inlineSize,
//                     s = u.blockSize
//                 } else
//                     a = e.offsetWidth,
//                     s = e.offsetHeight;
//                 n({
//                     width: a,
//                     height: s
//                 })
//             }
//             );
//             return r.observe(e, {
//                 box: "border-box"
//             }),
//             () => r.unobserve(e)
//         } else
//             n(void 0)
//     }
//     , [e]),
//     t
// }
// function t3(e, t) {
//     return y.useReducer( (n, r) => {
//         const o = t[n][r];
//         return o ?? n
//     }
//     , e)
// }
// const Zv = e => {
//     const {present: t, children: n} = e
//       , r = n3(t)
//       , o = typeof n == "function" ? n({
//         present: r.isPresent
//     }) : y.Children.only(n)
//       , i = Hv(r.ref, o.ref);
//     return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
//         ref: i
//     }) : null
// }
// ;
// Zv.displayName = "Presence";
// function n3(e) {
//     const [t,n] = y.useState()
//       , r = y.useRef({})
//       , o = y.useRef(e)
//       , i = y.useRef("none")
//       , a = e ? "mounted" : "unmounted"
//       , [s,l] = t3(a, {
//         mounted: {
//             UNMOUNT: "unmounted",
//             ANIMATION_OUT: "unmountSuspended"
//         },
//         unmountSuspended: {
//             MOUNT: "mounted",
//             ANIMATION_END: "unmounted"
//         },
//         unmounted: {
//             MOUNT: "mounted"
//         }
//     });
//     return y.useEffect( () => {
//         const u = Zi(r.current);
//         i.current = s === "mounted" ? u : "none"
//     }
//     , [s]),
//     $u( () => {
//         const u = r.current
//           , c = o.current;
//         if (c !== e) {
//             const f = i.current
//               , m = Zi(u);
//             e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"),
//             o.current = e
//         }
//     }
//     , [e, l]),
//     $u( () => {
//         if (t) {
//             const u = d => {
//                 const m = Zi(r.current).includes(d.animationName);
//                 d.target === t && m && ys.flushSync( () => l("ANIMATION_END"))
//             }
//               , c = d => {
//                 d.target === t && (i.current = Zi(r.current))
//             }
//             ;
//             return t.addEventListener("animationstart", c),
//             t.addEventListener("animationcancel", u),
//             t.addEventListener("animationend", u),
//             () => {
//                 t.removeEventListener("animationstart", c),
//                 t.removeEventListener("animationcancel", u),
//                 t.removeEventListener("animationend", u)
//             }
//         } else
//             l("ANIMATION_END")
//     }
//     , [t, l]),
//     {
//         isPresent: ["mounted", "unmountSuspended"].includes(s),
//         ref: y.useCallback(u => {
//             u && (r.current = getComputedStyle(u)),
//             n(u)
//         }
//         , [])
//     }
// }
// function Zi(e) {
//     return (e == null ? void 0 : e.animationName) || "none"
// }
// const r3 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
//   , e1 = r3.reduce( (e, t) => {
//     const n = y.forwardRef( (r, o) => {
//         const {asChild: i, ...a} = r
//           , s = i ? xf : t;
//         return y.useEffect( () => {
//             window[Symbol.for("radix-ui")] = !0
//         }
//         , []),
//         y.createElement(s, Qt({}, a, {
//             ref: o
//         }))
//     }
//     );
//     return n.displayName = `Primitive.${t}`,
//     {
//         ...e,
//         [t]: n
//     }
// }
// , {})
//   , t1 = "Checkbox"
//   , [o3,y4] = Xk(t1)
//   , [i3,a3] = o3(t1)
//   , s3 = y.forwardRef( (e, t) => {
//     const {__scopeCheckbox: n, name: r, checked: o, defaultChecked: i, required: a, disabled: s, value: l="on", onCheckedChange: u, ...c} = e
//       , [d,f] = y.useState(null)
//       , m = Hv(t, w => f(w))
//       , v = y.useRef(!1)
//       , x = d ? !!d.closest("form") : !0
//       , [k=!1,h] = Qk({
//         prop: o,
//         defaultProp: i,
//         onChange: u
//     })
//       , p = y.useRef(k);
//     return y.useEffect( () => {
//         const w = d == null ? void 0 : d.form;
//         if (w) {
//             const b = () => h(p.current);
//             return w.addEventListener("reset", b),
//             () => w.removeEventListener("reset", b)
//         }
//     }
//     , [d, h]),
//     y.createElement(i3, {
//         scope: n,
//         state: k,
//         disabled: s
//     }, y.createElement(e1.button, Qt({
//         type: "button",
//         role: "checkbox",
//         "aria-checked": er(k) ? "mixed" : k,
//         "aria-required": a,
//         "data-state": n1(k),
//         "data-disabled": s ? "" : void 0,
//         disabled: s,
//         value: l
//     }, c, {
//         ref: m,
//         onKeyDown: Rp(e.onKeyDown, w => {
//             w.key === "Enter" && w.preventDefault()
//         }
//         ),
//         onClick: Rp(e.onClick, w => {
//             h(b => er(b) ? !0 : !b),
//             x && (v.current = w.isPropagationStopped(),
//             v.current || w.stopPropagation())
//         }
//         )
//     })), x && y.createElement(c3, {
//         control: d,
//         bubbles: !v.current,
//         name: r,
//         value: l,
//         checked: k,
//         required: a,
//         disabled: s,
//         style: {
//             transform: "translateX(-100%)"
//         }
//     }))
// }
// )
//   , l3 = "CheckboxIndicator"
//   , u3 = y.forwardRef( (e, t) => {
//     const {__scopeCheckbox: n, forceMount: r, ...o} = e
//       , i = a3(l3, n);
//     return y.createElement(Zv, {
//         present: r || er(i.state) || i.state === !0
//     }, y.createElement(e1.span, Qt({
//         "data-state": n1(i.state),
//         "data-disabled": i.disabled ? "" : void 0
//     }, o, {
//         ref: t,
//         style: {
//             pointerEvents: "none",
//             ...e.style
//         }
//     })))
// }
// )
//   , c3 = e => {
//     const {control: t, checked: n, bubbles: r=!0, ...o} = e
//       , i = y.useRef(null)
//       , a = Zk(n)
//       , s = e3(t);
//     return y.useEffect( () => {
//         const l = i.current
//           , u = window.HTMLInputElement.prototype
//           , d = Object.getOwnPropertyDescriptor(u, "checked").set;
//         if (a !== n && d) {
//             const f = new Event("click",{
//                 bubbles: r
//             });
//             l.indeterminate = er(n),
//             d.call(l, er(n) ? !1 : n),
//             l.dispatchEvent(f)
//         }
//     }
//     , [a, n, r]),
//     y.createElement("input", Qt({
//         type: "checkbox",
//         "aria-hidden": !0,
//         defaultChecked: er(n) ? !1 : n
//     }, o, {
//         tabIndex: -1,
//         ref: i,
//         style: {
//             ...e.style,
//             ...s,
//             position: "absolute",
//             pointerEvents: "none",
//             opacity: 0,
//             margin: 0
//         }
//     }))
// }
// ;
// function er(e) {
//     return e === "indeterminate"
// }
// function n1(e) {
//     return er(e) ? "indeterminate" : e ? "checked" : "unchecked"
// }
// const r1 = s3
//   , f3 = u3;
// /**
//  * @license lucide-react v0.378.0 - ISC
//  *
//  * This source code is licensed under the ISC license.
//  * See the LICENSE file in the root directory of this source tree.
//  */
// const d3 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
//   , o1 = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
// /**
//  * @license lucide-react v0.378.0 - ISC
//  *
//  * This source code is licensed under the ISC license.
//  * See the LICENSE file in the root directory of this source tree.
//  */
// var p3 = {
//     xmlns: "http://www.w3.org/2000/svg",
//     width: 24,
//     height: 24,
//     viewBox: "0 0 24 24",
//     fill: "none",
//     stroke: "currentColor",
//     strokeWidth: 2,
//     strokeLinecap: "round",
//     strokeLinejoin: "round"
// };
// /**
//  * @license lucide-react v0.378.0 - ISC
//  *
//  * This source code is licensed under the ISC license.
//  * See the LICENSE file in the root directory of this source tree.
//  */
// const h3 = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: a, ...s}, l) => y.createElement("svg", {
//     ref: l,
//     ...p3,
//     width: t,
//     height: t,
//     stroke: e,
//     strokeWidth: r ? Number(n) * 24 / Number(t) : n,
//     className: o1("lucide", o),
//     ...s
// }, [...a.map( ([u,c]) => y.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
// /**
//  * @license lucide-react v0.378.0 - ISC
//  *
//  * This source code is licensed under the ISC license.
//  * See the LICENSE file in the root directory of this source tree.
//  */
// const m3 = (e, t) => {
//     const n = y.forwardRef( ({className: r, ...o}, i) => y.createElement(h3, {
//         ref: i,
//         iconNode: t,
//         className: o1(`lucide-${d3(e)}`, r),
//         ...o
//     }));
//     return n.displayName = `${e}`,
//     n
// }
// ;
// /**
//  * @license lucide-react v0.378.0 - ISC
//  *
//  * This source code is licensed under the ISC license.
//  * See the LICENSE file in the root directory of this source tree.
//  */
// const g3 = m3("Check", [["path", {
//     d: "M20 6 9 17l-5-5",
//     key: "1gmf2c"
// }]])
//   , i1 = y.forwardRef( ({className: e, ...t}, n) => g.jsx(r1, {
//     ref: n,
//     className: Zt("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
//     ...t,
//     children: g.jsx(f3, {
//         className: Zt("flex items-center justify-center text-current"),
//         children: g.jsx(g3, {
//             className: "h-4 w-4"
//         })
//     })
// }));
// i1.displayName = r1.displayName;
// const v3 = () => {
//     const {t: e} = Dt()
//       , [t,n] = y.useState(!1)
//       , [r,o] = y.useState({
//         storageAccess: !1,
//         limitedData: !1,
//         personalizedAdvertising: !1,
//         personalizedContent: !1,
//         advertisingPerformance: !1,
//         contentPerformance: !1,
//         audienceUnderstanding: !1,
//         serviceDevelopment: !1,
//         dataSharing: !1,
//         deviceIdentification: !1,
//         geolocation: !1
//     })
//       , i = () => {
//         ri.set("userConsent", JSON.stringify(r), {
//             expires: 365
//         }),
//         rk(),
//         window.location.reload()
//     }
//       , a = s => {
//         o(l => ({
//             ...l,
//             [s]: !l[s]
//         }))
//     }
//     ;
//     return g.jsx(Bv, {
//         location: "bottom",
//         buttonText: e("cookieConsent.acceptButton"),
//         declineButtonText: e("cookieConsent.settingsButton"),
//         cookieName: "userConsent",
//         acceptOnOverlayClick: !0,
//         onAccept: i,
//         style: {
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
//             padding: "20px"
//         },
//         buttonStyle: {
//             display: "none"
//         },
//         declineButtonStyle: {
//             display: "none"
//         },
//         children: g.jsxs(Qv, {
//             className: "bg-transparent border-0",
//             children: [g.jsx("p", {
//                 className: "text-white",
//                 children: e("cookieConsent.consentMessage")
//             }), g.jsx("p", {
//                 className: "mt-5",
//                 children: g.jsx("a", {
//                     href: "https://etherprivatebank.com.br/documents/documentoDiretrizesLgpd.pdf",
//                     target: "_blank",
//                     rel: "noopener noreferrer",
//                     className: "text-primary",
//                     children: e("cookieConsent.lgpdDocumentLinkText")
//                 })
//             }), g.jsx("div", {
//                 style: {
//                     marginTop: "20px",
//                     display: "flex",
//                     justifyContent: "center"
//                 },
//                 children: g.jsxs("div", {
//                     className: "flex gap-4",
//                     children: [g.jsx(Ga, {
//                         variant: "primary",
//                         className: "antialiased rounded-lg bg-white text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-privateBank focus:ring-opacity-50 transition-all duration-300 ease-in-out transform group-hover:scale-95",
//                         onClick: () => n(!t),
//                         children: e("cookieConsent.settingsButton")
//                     }), g.jsx(Ga, {
//                         className: "border-2 rounded-lg antialiased bg-primary text-gray-700 border-gray-700 hover:bg-white",
//                         onClick: i,
//                         children: e("cookieConsent.acceptButton")
//                     })]
//                 })
//             }), t && g.jsxs("div", {
//                 className: "mt-4 gap-4",
//                 children: [g.jsx("p", {
//                     children: e("cookieConsent.purposeHeader")
//                 }), Object.keys(r).map(s => g.jsxs("div", {
//                     className: "items-top flex space-x-2 mb-2",
//                     children: [g.jsx(i1, {
//                         id: s,
//                         className: "w-5 h-5 bg-gray-800 border-gray-800",
//                         style: {
//                             marginRight: "10px"
//                         },
//                         checked: r[s],
//                         onCheckedChange: () => a(s)
//                     }), g.jsx("div", {
//                         className: "grid gap-1.5 leading-none",
//                         children: g.jsx("label", {
//                             htmlFor: s,
//                             className: "text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
//                             children: e(`cookieConsent.${s}`)
//                         })
//                     })]
//                 }, s))]
//             })]
//         })
//     })
// }
//   , y3 = ({show: e, onHide: t, changeLanguage: n}) => {
//     const r = [{
//         name: "Português (Brasil)",
//         code: "pt_BR",
//         flag: ni
//     }, {
//         name: "Español (Latinoamérica)",
//         code: "es_Latam",
//         flag: ff
//     }, {
//         name: "中文 (普通话)",
//         code: "zh",
//         flag: cf
//     }, {
//         name: "English (International)",
//         code: "en",
//         flag: uf
//     }]
//       , o = i => {
//         n(i),
//         localStorage.setItem("selectedLanguage", i),
//         document.cookie = `i18next=${i}; path=/`
//     }
//     ;
//     return g.jsxs(xn, {
//         show: e,
//         onHide: t,
//         centered: !0,
//         children: [g.jsx(xn.Header, {
//             closeButton: !0,
//             children: g.jsx(xn.Title, {
//                 className: "text-secondary",
//                 children: "Select Language"
//             })
//         }), g.jsx(xn.Body, {
//             children: g.jsxs("div", {
//                 className: "language-selection-container",
//                 children: [g.jsx("p", {
//                     className: "m-2 text-primary",
//                     children: "Please select your preferred language to continue using the website. Your selection will be saved for future visits."
//                 }), r.map( (i, a) => g.jsxs(Ga, {
//                     variant: "ghost",
//                     className: "language-button",
//                     onClick: () => o(i.code),
//                     children: [g.jsx("img", {
//                         src: i.flag,
//                         alt: i.name,
//                         className: "flag-icon"
//                     }), g.jsx("span", {
//                         className: "country-name",
//                         children: i.name
//                     })]
//                 }, a))]
//             })
//         })]
//     })
// }
//   , Ap = () => {}
// ;
// let Sf = {}
//   , a1 = {}
//   , s1 = null
//   , l1 = {
//     mark: Ap,
//     measure: Ap
// };
// try {
//     typeof window < "u" && (Sf = window),
//     typeof document < "u" && (a1 = document),
//     typeof MutationObserver < "u" && (s1 = MutationObserver),
//     typeof performance < "u" && (l1 = performance)
// } catch {}
// const {userAgent: Mp=""} = Sf.navigator || {}
//   , Ln = Sf
//   , pe = a1
//   , Ip = s1
//   , ea = l1;
// Ln.document;
// const on = !!pe.documentElement && !!pe.head && typeof pe.addEventListener == "function" && typeof pe.createElement == "function"
//   , u1 = ~Mp.indexOf("MSIE") || ~Mp.indexOf("Trident/");
// var ve = "classic"
//   , c1 = "duotone"
//   , rt = "sharp"
//   , ot = "sharp-duotone"
//   , w3 = [ve, c1, rt, ot]
//   , x3 = {
//     classic: {
//         900: "fas",
//         400: "far",
//         normal: "far",
//         300: "fal",
//         100: "fat"
//     },
//     sharp: {
//         900: "fass",
//         400: "fasr",
//         300: "fasl",
//         100: "fast"
//     },
//     "sharp-duotone": {
//         900: "fasds"
//     }
// }
//   , Dp = {
//     kit: {
//         fak: "kit",
//         "fa-kit": "kit"
//     },
//     "kit-duotone": {
//         fakd: "kit-duotone",
//         "fa-kit-duotone": "kit-duotone"
//     }
// }
//   , b3 = ["kit"]
//   , S3 = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/
//   , k3 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
//   , C3 = {
//     "Font Awesome 5 Free": {
//         900: "fas",
//         400: "far"
//     },
//     "Font Awesome 5 Pro": {
//         900: "fas",
//         400: "far",
//         normal: "far",
//         300: "fal"
//     },
//     "Font Awesome 5 Brands": {
//         400: "fab",
//         normal: "fab"
//     },
//     "Font Awesome 5 Duotone": {
//         900: "fad"
//     }
// }
//   , E3 = {
//     "Font Awesome 6 Free": {
//         900: "fas",
//         400: "far"
//     },
//     "Font Awesome 6 Pro": {
//         900: "fas",
//         400: "far",
//         normal: "far",
//         300: "fal",
//         100: "fat"
//     },
//     "Font Awesome 6 Brands": {
//         400: "fab",
//         normal: "fab"
//     },
//     "Font Awesome 6 Duotone": {
//         900: "fad"
//     },
//     "Font Awesome 6 Sharp": {
//         900: "fass",
//         400: "fasr",
//         normal: "fasr",
//         300: "fasl",
//         100: "fast"
//     },
//     "Font Awesome 6 Sharp Duotone": {
//         900: "fasds"
//     }
// }
//   , O3 = {
//     classic: {
//         "fa-brands": "fab",
//         "fa-duotone": "fad",
//         "fa-light": "fal",
//         "fa-regular": "far",
//         "fa-solid": "fas",
//         "fa-thin": "fat"
//     },
//     sharp: {
//         "fa-solid": "fass",
//         "fa-regular": "fasr",
//         "fa-light": "fasl",
//         "fa-thin": "fast"
//     },
//     "sharp-duotone": {
//         "fa-solid": "fasds"
//     }
// }
//   , N3 = {
//     classic: ["fas", "far", "fal", "fat"],
//     sharp: ["fass", "fasr", "fasl", "fast"],
//     "sharp-duotone": ["fasds"]
// }
//   , P3 = {
//     classic: {
//         fab: "fa-brands",
//         fad: "fa-duotone",
//         fal: "fa-light",
//         far: "fa-regular",
//         fas: "fa-solid",
//         fat: "fa-thin"
//     },
//     sharp: {
//         fass: "fa-solid",
//         fasr: "fa-regular",
//         fasl: "fa-light",
//         fast: "fa-thin"
//     },
//     "sharp-duotone": {
//         fasds: "fa-solid"
//     }
// }
//   , T3 = {
//     classic: {
//         solid: "fas",
//         regular: "far",
//         light: "fal",
//         thin: "fat",
//         duotone: "fad",
//         brands: "fab"
//     },
//     sharp: {
//         solid: "fass",
//         regular: "fasr",
//         light: "fasl",
//         thin: "fast"
//     },
//     "sharp-duotone": {
//         solid: "fasds"
//     }
// }
//   , f1 = {
//     classic: {
//         fa: "solid",
//         fas: "solid",
//         "fa-solid": "solid",
//         far: "regular",
//         "fa-regular": "regular",
//         fal: "light",
//         "fa-light": "light",
//         fat: "thin",
//         "fa-thin": "thin",
//         fad: "duotone",
//         "fa-duotone": "duotone",
//         fab: "brands",
//         "fa-brands": "brands"
//     },
//     sharp: {
//         fa: "solid",
//         fass: "solid",
//         "fa-solid": "solid",
//         fasr: "regular",
//         "fa-regular": "regular",
//         fasl: "light",
//         "fa-light": "light",
//         fast: "thin",
//         "fa-thin": "thin"
//     },
//     "sharp-duotone": {
//         fa: "solid",
//         fasds: "solid",
//         "fa-solid": "solid"
//     }
// }
//   , _3 = ["solid", "regular", "light", "thin", "duotone", "brands"]
//   , d1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   , j3 = d1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
//   , Eo = {
//     GROUP: "duotone-group",
//     SWAP_OPACITY: "swap-opacity",
//     PRIMARY: "primary",
//     SECONDARY: "secondary"
// }
//   , L3 = [...Object.keys(N3), ..._3, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Eo.GROUP, Eo.SWAP_OPACITY, Eo.PRIMARY, Eo.SECONDARY].concat(d1.map(e => "".concat(e, "x"))).concat(j3.map(e => "w-".concat(e)))
//   , R3 = {
//     "Font Awesome Kit": {
//         400: "fak",
//         normal: "fak"
//     },
//     "Font Awesome Kit Duotone": {
//         400: "fakd",
//         normal: "fakd"
//     }
// }
//   , A3 = {
//     kit: {
//         "fa-kit": "fak"
//     },
//     "kit-duotone": {
//         "fa-kit-duotone": "fakd"
//     }
// }
//   , M3 = {
//     kit: {
//         fak: "fa-kit"
//     },
//     "kit-duotone": {
//         fakd: "fa-kit-duotone"
//     }
// }
//   , $p = {
//     kit: {
//         kit: "fak"
//     },
//     "kit-duotone": {
//         "kit-duotone": "fakd"
//     }
// };
// const en = "___FONT_AWESOME___"
//   , zu = 16
//   , p1 = "fa"
//   , h1 = "svg-inline--fa"
//   , lr = "data-fa-i2svg"
//   , Fu = "data-fa-pseudo-element"
//   , I3 = "data-fa-pseudo-element-pending"
//   , kf = "data-prefix"
//   , Cf = "data-icon"
//   , zp = "fontawesome-i2svg"
//   , D3 = "async"
//   , $3 = ["HTML", "HEAD", "STYLE", "SCRIPT"]
//   , m1 = ( () => {
//     try {
//         return !0
//     } catch {
//         return !1
//     }
// }
// )()
//   , g1 = [ve, rt, ot];
// function ki(e) {
//     return new Proxy(e,{
//         get(t, n) {
//             return n in t ? t[n] : t[ve]
//         }
//     })
// }
// const v1 = {
//     ...f1
// };
// v1[ve] = {
//     ...f1[ve],
//     ...Dp.kit,
//     ...Dp["kit-duotone"]
// };
// const tr = ki(v1)
//   , Bu = {
//     ...T3
// };
// Bu[ve] = {
//     ...Bu[ve],
//     ...$p.kit,
//     ...$p["kit-duotone"]
// };
// const oi = ki(Bu)
//   , Uu = {
//     ...P3
// };
// Uu[ve] = {
//     ...Uu[ve],
//     ...M3.kit
// };
// const nr = ki(Uu)
//   , Hu = {
//     ...O3
// };
// Hu[ve] = {
//     ...Hu[ve],
//     ...A3.kit
// };
// const z3 = ki(Hu)
//   , F3 = S3
//   , y1 = "fa-layers-text"
//   , B3 = k3
//   , U3 = {
//     ...x3
// };
// ki(U3);
// const H3 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
//   , xl = Eo
//   , Xr = new Set;
// Object.keys(oi[ve]).map(Xr.add.bind(Xr));
// Object.keys(oi[rt]).map(Xr.add.bind(Xr));
// Object.keys(oi[ot]).map(Xr.add.bind(Xr));
// const W3 = [...b3, ...L3]
//   , Io = Ln.FontAwesomeConfig || {};
// function V3(e) {
//     var t = pe.querySelector("script[" + e + "]");
//     if (t)
//         return t.getAttribute(e)
// }
// function K3(e) {
//     return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
// }
// pe && typeof pe.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(t => {
//     let[n,r] = t;
//     const o = K3(V3(n));
//     o != null && (Io[r] = o)
// }
// );
// const w1 = {
//     styleDefault: "solid",
//     familyDefault: "classic",
//     cssPrefix: p1,
//     replacementClass: h1,
//     autoReplaceSvg: !0,
//     autoAddCss: !0,
//     autoA11y: !0,
//     searchPseudoElements: !1,
//     observeMutations: !0,
//     mutateApproach: "async",
//     keepOriginalSource: !0,
//     measurePerformance: !1,
//     showMissingIcons: !0
// };
// Io.familyPrefix && (Io.cssPrefix = Io.familyPrefix);
// const qr = {
//     ...w1,
//     ...Io
// };
// qr.autoReplaceSvg || (qr.observeMutations = !1);
// const F = {};
// Object.keys(w1).forEach(e => {
//     Object.defineProperty(F, e, {
//         enumerable: !0,
//         set: function(t) {
//             qr[e] = t,
//             Do.forEach(n => n(F))
//         },
//         get: function() {
//             return qr[e]
//         }
//     })
// }
// );
// Object.defineProperty(F, "familyPrefix", {
//     enumerable: !0,
//     set: function(e) {
//         qr.cssPrefix = e,
//         Do.forEach(t => t(F))
//     },
//     get: function() {
//         return qr.cssPrefix
//     }
// });
// Ln.FontAwesomeConfig = F;
// const Do = [];
// function G3(e) {
//     return Do.push(e),
//     () => {
//         Do.splice(Do.indexOf(e), 1)
//     }
// }
// const dn = zu
//   , jt = {
//     size: 16,
//     x: 0,
//     y: 0,
//     rotate: 0,
//     flipX: !1,
//     flipY: !1
// };
// function Y3(e) {
//     if (!e || !on)
//         return;
//     const t = pe.createElement("style");
//     t.setAttribute("type", "text/css"),
//     t.innerHTML = e;
//     const n = pe.head.childNodes;
//     let r = null;
//     for (let o = n.length - 1; o > -1; o--) {
//         const i = n[o]
//           , a = (i.tagName || "").toUpperCase();
//         ["STYLE", "LINK"].indexOf(a) > -1 && (r = i)
//     }
//     return pe.head.insertBefore(t, r),
//     e
// }
// const X3 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// function ii() {
//     let e = 12
//       , t = "";
//     for (; e-- > 0; )
//         t += X3[Math.random() * 62 | 0];
//     return t
// }
// function ro(e) {
//     const t = [];
//     for (let n = (e || []).length >>> 0; n--; )
//         t[n] = e[n];
//     return t
// }
// function Ef(e) {
//     return e.classList ? ro(e.classList) : (e.getAttribute("class") || "").split(" ").filter(t => t)
// }
// function x1(e) {
//     return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
// }
// function q3(e) {
//     return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, '="').concat(x1(e[n]), '" '), "").trim()
// }
// function Ns(e) {
//     return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "")
// }
// function Of(e) {
//     return e.size !== jt.size || e.x !== jt.x || e.y !== jt.y || e.rotate !== jt.rotate || e.flipX || e.flipY
// }
// function Q3(e) {
//     let {transform: t, containerWidth: n, iconWidth: r} = e;
//     const o = {
//         transform: "translate(".concat(n / 2, " 256)")
//     }
//       , i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
//       , a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
//       , s = "rotate(".concat(t.rotate, " 0 0)")
//       , l = {
//         transform: "".concat(i, " ").concat(a, " ").concat(s)
//     }
//       , u = {
//         transform: "translate(".concat(r / 2 * -1, " -256)")
//     };
//     return {
//         outer: o,
//         inner: l,
//         path: u
//     }
// }
// function J3(e) {
//     let {transform: t, width: n=zu, height: r=zu, startCentered: o=!1} = e
//       , i = "";
//     return o && u1 ? i += "translate(".concat(t.x / dn - n / 2, "em, ").concat(t.y / dn - r / 2, "em) ") : o ? i += "translate(calc(-50% + ".concat(t.x / dn, "em), calc(-50% + ").concat(t.y / dn, "em)) ") : i += "translate(".concat(t.x / dn, "em, ").concat(t.y / dn, "em) "),
//     i += "scale(".concat(t.size / dn * (t.flipX ? -1 : 1), ", ").concat(t.size / dn * (t.flipY ? -1 : 1), ") "),
//     i += "rotate(".concat(t.rotate, "deg) "),
//     i
// }
// var Z3 = `:root, :host {
//   --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
//   --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
//   --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
//   --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
//   --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
//   --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
//   --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
//   --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
//   --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
//   --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
//   --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
// }

// svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
//   overflow: visible;
//   box-sizing: content-box;
// }

// .svg-inline--fa {
//   display: var(--fa-display, inline-block);
//   height: 1em;
//   overflow: visible;
//   vertical-align: -0.125em;
// }
// .svg-inline--fa.fa-2xs {
//   vertical-align: 0.1em;
// }
// .svg-inline--fa.fa-xs {
//   vertical-align: 0em;
// }
// .svg-inline--fa.fa-sm {
//   vertical-align: -0.0714285705em;
// }
// .svg-inline--fa.fa-lg {
//   vertical-align: -0.2em;
// }
// .svg-inline--fa.fa-xl {
//   vertical-align: -0.25em;
// }
// .svg-inline--fa.fa-2xl {
//   vertical-align: -0.3125em;
// }
// .svg-inline--fa.fa-pull-left {
//   margin-right: var(--fa-pull-margin, 0.3em);
//   width: auto;
// }
// .svg-inline--fa.fa-pull-right {
//   margin-left: var(--fa-pull-margin, 0.3em);
//   width: auto;
// }
// .svg-inline--fa.fa-li {
//   width: var(--fa-li-width, 2em);
//   top: 0.25em;
// }
// .svg-inline--fa.fa-fw {
//   width: var(--fa-fw-width, 1.25em);
// }

// .fa-layers svg.svg-inline--fa {
//   bottom: 0;
//   left: 0;
//   margin: auto;
//   position: absolute;
//   right: 0;
//   top: 0;
// }

// .fa-layers-counter, .fa-layers-text {
//   display: inline-block;
//   position: absolute;
//   text-align: center;
// }

// .fa-layers {
//   display: inline-block;
//   height: 1em;
//   position: relative;
//   text-align: center;
//   vertical-align: -0.125em;
//   width: 1em;
// }
// .fa-layers svg.svg-inline--fa {
//   transform-origin: center center;
// }

// .fa-layers-text {
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   transform-origin: center center;
// }

// .fa-layers-counter {
//   background-color: var(--fa-counter-background-color, #ff253a);
//   border-radius: var(--fa-counter-border-radius, 1em);
//   box-sizing: border-box;
//   color: var(--fa-inverse, #fff);
//   line-height: var(--fa-counter-line-height, 1);
//   max-width: var(--fa-counter-max-width, 5em);
//   min-width: var(--fa-counter-min-width, 1.5em);
//   overflow: hidden;
//   padding: var(--fa-counter-padding, 0.25em 0.5em);
//   right: var(--fa-right, 0);
//   text-overflow: ellipsis;
//   top: var(--fa-top, 0);
//   transform: scale(var(--fa-counter-scale, 0.25));
//   transform-origin: top right;
// }

// .fa-layers-bottom-right {
//   bottom: var(--fa-bottom, 0);
//   right: var(--fa-right, 0);
//   top: auto;
//   transform: scale(var(--fa-layers-scale, 0.25));
//   transform-origin: bottom right;
// }

// .fa-layers-bottom-left {
//   bottom: var(--fa-bottom, 0);
//   left: var(--fa-left, 0);
//   right: auto;
//   top: auto;
//   transform: scale(var(--fa-layers-scale, 0.25));
//   transform-origin: bottom left;
// }

// .fa-layers-top-right {
//   top: var(--fa-top, 0);
//   right: var(--fa-right, 0);
//   transform: scale(var(--fa-layers-scale, 0.25));
//   transform-origin: top right;
// }

// .fa-layers-top-left {
//   left: var(--fa-left, 0);
//   right: auto;
//   top: var(--fa-top, 0);
//   transform: scale(var(--fa-layers-scale, 0.25));
//   transform-origin: top left;
// }

// .fa-1x {
//   font-size: 1em;
// }

// .fa-2x {
//   font-size: 2em;
// }

// .fa-3x {
//   font-size: 3em;
// }

// .fa-4x {
//   font-size: 4em;
// }

// .fa-5x {
//   font-size: 5em;
// }

// .fa-6x {
//   font-size: 6em;
// }

// .fa-7x {
//   font-size: 7em;
// }

// .fa-8x {
//   font-size: 8em;
// }

// .fa-9x {
//   font-size: 9em;
// }

// .fa-10x {
//   font-size: 10em;
// }

// .fa-2xs {
//   font-size: 0.625em;
//   line-height: 0.1em;
//   vertical-align: 0.225em;
// }

// .fa-xs {
//   font-size: 0.75em;
//   line-height: 0.0833333337em;
//   vertical-align: 0.125em;
// }

// .fa-sm {
//   font-size: 0.875em;
//   line-height: 0.0714285718em;
//   vertical-align: 0.0535714295em;
// }

// .fa-lg {
//   font-size: 1.25em;
//   line-height: 0.05em;
//   vertical-align: -0.075em;
// }

// .fa-xl {
//   font-size: 1.5em;
//   line-height: 0.0416666682em;
//   vertical-align: -0.125em;
// }

// .fa-2xl {
//   font-size: 2em;
//   line-height: 0.03125em;
//   vertical-align: -0.1875em;
// }

// .fa-fw {
//   text-align: center;
//   width: 1.25em;
// }

// .fa-ul {
//   list-style-type: none;
//   margin-left: var(--fa-li-margin, 2.5em);
//   padding-left: 0;
// }
// .fa-ul > li {
//   position: relative;
// }

// .fa-li {
//   left: calc(-1 * var(--fa-li-width, 2em));
//   position: absolute;
//   text-align: center;
//   width: var(--fa-li-width, 2em);
//   line-height: inherit;
// }

// .fa-border {
//   border-color: var(--fa-border-color, #eee);
//   border-radius: var(--fa-border-radius, 0.1em);
//   border-style: var(--fa-border-style, solid);
//   border-width: var(--fa-border-width, 0.08em);
//   padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
// }

// .fa-pull-left {
//   float: left;
//   margin-right: var(--fa-pull-margin, 0.3em);
// }

// .fa-pull-right {
//   float: right;
//   margin-left: var(--fa-pull-margin, 0.3em);
// }

// .fa-beat {
//   animation-name: fa-beat;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, ease-in-out);
// }

// .fa-bounce {
//   animation-name: fa-bounce;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
// }

// .fa-fade {
//   animation-name: fa-fade;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
// }

// .fa-beat-fade {
//   animation-name: fa-beat-fade;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
// }

// .fa-flip {
//   animation-name: fa-flip;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, ease-in-out);
// }

// .fa-shake {
//   animation-name: fa-shake;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, linear);
// }

// .fa-spin {
//   animation-name: fa-spin;
//   animation-delay: var(--fa-animation-delay, 0s);
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 2s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, linear);
// }

// .fa-spin-reverse {
//   --fa-animation-direction: reverse;
// }

// .fa-pulse,
// .fa-spin-pulse {
//   animation-name: fa-spin;
//   animation-direction: var(--fa-animation-direction, normal);
//   animation-duration: var(--fa-animation-duration, 1s);
//   animation-iteration-count: var(--fa-animation-iteration-count, infinite);
//   animation-timing-function: var(--fa-animation-timing, steps(8));
// }

// @media (prefers-reduced-motion: reduce) {
//   .fa-beat,
// .fa-bounce,
// .fa-fade,
// .fa-beat-fade,
// .fa-flip,
// .fa-pulse,
// .fa-shake,
// .fa-spin,
// .fa-spin-pulse {
//     animation-delay: -1ms;
//     animation-duration: 1ms;
//     animation-iteration-count: 1;
//     transition-delay: 0s;
//     transition-duration: 0s;
//   }
// }
// @keyframes fa-beat {
//   0%, 90% {
//     transform: scale(1);
//   }
//   45% {
//     transform: scale(var(--fa-beat-scale, 1.25));
//   }
// }
// @keyframes fa-bounce {
//   0% {
//     transform: scale(1, 1) translateY(0);
//   }
//   10% {
//     transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
//   }
//   30% {
//     transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
//   }
//   50% {
//     transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
//   }
//   57% {
//     transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
//   }
//   64% {
//     transform: scale(1, 1) translateY(0);
//   }
//   100% {
//     transform: scale(1, 1) translateY(0);
//   }
// }
// @keyframes fa-fade {
//   50% {
//     opacity: var(--fa-fade-opacity, 0.4);
//   }
// }
// @keyframes fa-beat-fade {
//   0%, 100% {
//     opacity: var(--fa-beat-fade-opacity, 0.4);
//     transform: scale(1);
//   }
//   50% {
//     opacity: 1;
//     transform: scale(var(--fa-beat-fade-scale, 1.125));
//   }
// }
// @keyframes fa-flip {
//   50% {
//     transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
//   }
// }
// @keyframes fa-shake {
//   0% {
//     transform: rotate(-15deg);
//   }
//   4% {
//     transform: rotate(15deg);
//   }
//   8%, 24% {
//     transform: rotate(-18deg);
//   }
//   12%, 28% {
//     transform: rotate(18deg);
//   }
//   16% {
//     transform: rotate(-22deg);
//   }
//   20% {
//     transform: rotate(22deg);
//   }
//   32% {
//     transform: rotate(-12deg);
//   }
//   36% {
//     transform: rotate(12deg);
//   }
//   40%, 100% {
//     transform: rotate(0deg);
//   }
// }
// @keyframes fa-spin {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }
// .fa-rotate-90 {
//   transform: rotate(90deg);
// }

// .fa-rotate-180 {
//   transform: rotate(180deg);
// }

// .fa-rotate-270 {
//   transform: rotate(270deg);
// }

// .fa-flip-horizontal {
//   transform: scale(-1, 1);
// }

// .fa-flip-vertical {
//   transform: scale(1, -1);
// }

// .fa-flip-both,
// .fa-flip-horizontal.fa-flip-vertical {
//   transform: scale(-1, -1);
// }

// .fa-rotate-by {
//   transform: rotate(var(--fa-rotate-angle, 0));
// }

// .fa-stack {
//   display: inline-block;
//   vertical-align: middle;
//   height: 2em;
//   position: relative;
//   width: 2.5em;
// }

// .fa-stack-1x,
// .fa-stack-2x {
//   bottom: 0;
//   left: 0;
//   margin: auto;
//   position: absolute;
//   right: 0;
//   top: 0;
//   z-index: var(--fa-stack-z-index, auto);
// }

// .svg-inline--fa.fa-stack-1x {
//   height: 1em;
//   width: 1.25em;
// }
// .svg-inline--fa.fa-stack-2x {
//   height: 2em;
//   width: 2.5em;
// }

// .fa-inverse {
//   color: var(--fa-inverse, #fff);
// }

// .sr-only,
// .fa-sr-only {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// }

// .sr-only-focusable:not(:focus),
// .fa-sr-only-focusable:not(:focus) {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// }

// .svg-inline--fa .fa-primary {
//   fill: var(--fa-primary-color, currentColor);
//   opacity: var(--fa-primary-opacity, 1);
// }

// .svg-inline--fa .fa-secondary {
//   fill: var(--fa-secondary-color, currentColor);
//   opacity: var(--fa-secondary-opacity, 0.4);
// }

// .svg-inline--fa.fa-swap-opacity .fa-primary {
//   opacity: var(--fa-secondary-opacity, 0.4);
// }

// .svg-inline--fa.fa-swap-opacity .fa-secondary {
//   opacity: var(--fa-primary-opacity, 1);
// }

// .svg-inline--fa mask .fa-primary,
// .svg-inline--fa mask .fa-secondary {
//   fill: black;
// }

// .fad.fa-inverse,
// .fa-duotone.fa-inverse {
//   color: var(--fa-inverse, #fff);
// }`;
// function b1() {
//     const e = p1
//       , t = h1
//       , n = F.cssPrefix
//       , r = F.replacementClass;
//     let o = Z3;
//     if (n !== e || r !== t) {
//         const i = new RegExp("\\.".concat(e, "\\-"),"g")
//           , a = new RegExp("\\--".concat(e, "\\-"),"g")
//           , s = new RegExp("\\.".concat(t),"g");
//         o = o.replace(i, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r))
//     }
//     return o
// }
// let Fp = !1;
// function bl() {
//     F.autoAddCss && !Fp && (Y3(b1()),
//     Fp = !0)
// }
// var eC = {
//     mixout() {
//         return {
//             dom: {
//                 css: b1,
//                 insertCss: bl
//             }
//         }
//     },
//     hooks() {
//         return {
//             beforeDOMElementCreation() {
//                 bl()
//             },
//             beforeI2svg() {
//                 bl()
//             }
//         }
//     }
// };
// const tn = Ln || {};
// tn[en] || (tn[en] = {});
// tn[en].styles || (tn[en].styles = {});
// tn[en].hooks || (tn[en].hooks = {});
// tn[en].shims || (tn[en].shims = []);
// var Lt = tn[en];
// const S1 = []
//   , k1 = function() {
//     pe.removeEventListener("DOMContentLoaded", k1),
//     Ya = 1,
//     S1.map(e => e())
// };
// let Ya = !1;
// on && (Ya = (pe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(pe.readyState),
// Ya || pe.addEventListener("DOMContentLoaded", k1));
// function tC(e) {
//     on && (Ya ? setTimeout(e, 0) : S1.push(e))
// }
// function Ci(e) {
//     const {tag: t, attributes: n={}, children: r=[]} = e;
//     return typeof e == "string" ? x1(e) : "<".concat(t, " ").concat(q3(n), ">").concat(r.map(Ci).join(""), "</").concat(t, ">")
// }
// function Bp(e, t, n) {
//     if (e && e[t] && e[t][n])
//         return {
//             prefix: t,
//             iconName: n,
//             icon: e[t][n]
//         }
// }
// var Sl = function(t, n, r, o) {
//     var i = Object.keys(t), a = i.length, s = n, l, u, c;
//     for (r === void 0 ? (l = 1,
//     c = t[i[0]]) : (l = 0,
//     c = r); l < a; l++)
//         u = i[l],
//         c = s(c, t[u], u, t);
//     return c
// };
// function nC(e) {
//     const t = [];
//     let n = 0;
//     const r = e.length;
//     for (; n < r; ) {
//         const o = e.charCodeAt(n++);
//         if (o >= 55296 && o <= 56319 && n < r) {
//             const i = e.charCodeAt(n++);
//             (i & 64512) == 56320 ? t.push(((o & 1023) << 10) + (i & 1023) + 65536) : (t.push(o),
//             n--)
//         } else
//             t.push(o)
//     }
//     return t
// }
// function Wu(e) {
//     const t = nC(e);
//     return t.length === 1 ? t[0].toString(16) : null
// }
// function rC(e, t) {
//     const n = e.length;
//     let r = e.charCodeAt(t), o;
//     return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1),
//     o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r
// }
// function Up(e) {
//     return Object.keys(e).reduce( (t, n) => {
//         const r = e[n];
//         return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
//         t
//     }
//     , {})
// }
// function Vu(e, t) {
//     let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//     const {skipHooks: r=!1} = n
//       , o = Up(t);
//     typeof Lt.hooks.addPack == "function" && !r ? Lt.hooks.addPack(e, Up(t)) : Lt.styles[e] = {
//         ...Lt.styles[e] || {},
//         ...o
//     },
//     e === "fas" && Vu("fa", t)
// }
// const {styles: Kn, shims: oC} = Lt
//   , iC = {
//     [ve]: Object.values(nr[ve]),
//     [rt]: Object.values(nr[rt]),
//     [ot]: Object.values(nr[ot])
// };
// let Nf = null
//   , C1 = {}
//   , E1 = {}
//   , O1 = {}
//   , N1 = {}
//   , P1 = {};
// const aC = {
//     [ve]: Object.keys(tr[ve]),
//     [rt]: Object.keys(tr[rt]),
//     [ot]: Object.keys(tr[ot])
// };
// function sC(e) {
//     return ~W3.indexOf(e)
// }
// function lC(e, t) {
//     const n = t.split("-")
//       , r = n[0]
//       , o = n.slice(1).join("-");
//     return r === e && o !== "" && !sC(o) ? o : null
// }
// const T1 = () => {
//     const e = r => Sl(Kn, (o, i, a) => (o[a] = Sl(i, r, {}),
//     o), {});
//     C1 = e( (r, o, i) => (o[3] && (r[o[3]] = i),
//     o[2] && o[2].filter(s => typeof s == "number").forEach(s => {
//         r[s.toString(16)] = i
//     }
//     ),
//     r)),
//     E1 = e( (r, o, i) => (r[i] = i,
//     o[2] && o[2].filter(s => typeof s == "string").forEach(s => {
//         r[s] = i
//     }
//     ),
//     r)),
//     P1 = e( (r, o, i) => {
//         const a = o[2];
//         return r[i] = i,
//         a.forEach(s => {
//             r[s] = i
//         }
//         ),
//         r
//     }
//     );
//     const t = "far"in Kn || F.autoFetchSvg
//       , n = Sl(oC, (r, o) => {
//         const i = o[0];
//         let a = o[1];
//         const s = o[2];
//         return a === "far" && !t && (a = "fas"),
//         typeof i == "string" && (r.names[i] = {
//             prefix: a,
//             iconName: s
//         }),
//         typeof i == "number" && (r.unicodes[i.toString(16)] = {
//             prefix: a,
//             iconName: s
//         }),
//         r
//     }
//     , {
//         names: {},
//         unicodes: {}
//     });
//     O1 = n.names,
//     N1 = n.unicodes,
//     Nf = Ps(F.styleDefault, {
//         family: F.familyDefault
//     })
// }
// ;
// G3(e => {
//     Nf = Ps(e.styleDefault, {
//         family: F.familyDefault
//     })
// }
// );
// T1();
// function Pf(e, t) {
//     return (C1[e] || {})[t]
// }
// function uC(e, t) {
//     return (E1[e] || {})[t]
// }
// function bn(e, t) {
//     return (P1[e] || {})[t]
// }
// function _1(e) {
//     return O1[e] || {
//         prefix: null,
//         iconName: null
//     }
// }
// function cC(e) {
//     const t = N1[e]
//       , n = Pf("fas", e);
//     return t || (n ? {
//         prefix: "fas",
//         iconName: n
//     } : null) || {
//         prefix: null,
//         iconName: null
//     }
// }
// function Rn() {
//     return Nf
// }
// const Tf = () => ({
//     prefix: null,
//     iconName: null,
//     rest: []
// });
// function Ps(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//     const {family: n=ve} = t
//       , r = tr[n][e]
//       , o = oi[n][e] || oi[n][r]
//       , i = e in Lt.styles ? e : null;
//     return o || i || null
// }
// const fC = {
//     [ve]: Object.keys(nr[ve]),
//     [rt]: Object.keys(nr[rt]),
//     [ot]: Object.keys(nr[ot])
// };
// function Ts(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//     const {skipLookups: n=!1} = t
//       , r = {
//         [ve]: "".concat(F.cssPrefix, "-").concat(ve),
//         [rt]: "".concat(F.cssPrefix, "-").concat(rt),
//         [ot]: "".concat(F.cssPrefix, "-").concat(ot)
//     };
//     let o = null
//       , i = ve;
//     const a = w3.filter(l => l !== c1);
//     a.forEach(l => {
//         (e.includes(r[l]) || e.some(u => fC[l].includes(u))) && (i = l)
//     }
//     );
//     const s = e.reduce( (l, u) => {
//         const c = lC(F.cssPrefix, u);
//         if (Kn[u] ? (u = iC[i].includes(u) ? z3[i][u] : u,
//         o = u,
//         l.prefix = u) : aC[i].indexOf(u) > -1 ? (o = u,
//         l.prefix = Ps(u, {
//             family: i
//         })) : c ? l.iconName = c : u !== F.replacementClass && !a.some(d => u === r[d]) && l.rest.push(u),
//         !n && l.prefix && l.iconName) {
//             const d = o === "fa" ? _1(l.iconName) : {}
//               , f = bn(l.prefix, l.iconName);
//             d.prefix && (o = null),
//             l.iconName = d.iconName || f || l.iconName,
//             l.prefix = d.prefix || l.prefix,
//             l.prefix === "far" && !Kn.far && Kn.fas && !F.autoFetchSvg && (l.prefix = "fas")
//         }
//         return l
//     }
//     , Tf());
//     return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
//     (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
//     !s.prefix && i === rt && (Kn.fass || F.autoFetchSvg) && (s.prefix = "fass",
//     s.iconName = bn(s.prefix, s.iconName) || s.iconName),
//     !s.prefix && i === ot && (Kn.fasds || F.autoFetchSvg) && (s.prefix = "fasds",
//     s.iconName = bn(s.prefix, s.iconName) || s.iconName),
//     (s.prefix === "fa" || o === "fa") && (s.prefix = Rn() || "fas"),
//     s
// }
// class dC {
//     constructor() {
//         this.definitions = {}
//     }
//     add() {
//         for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
//             n[r] = arguments[r];
//         const o = n.reduce(this._pullDefinitions, {});
//         Object.keys(o).forEach(i => {
//             this.definitions[i] = {
//                 ...this.definitions[i] || {},
//                 ...o[i]
//             },
//             Vu(i, o[i]);
//             const a = nr[ve][i];
//             a && Vu(a, o[i]),
//             T1()
//         }
//         )
//     }
//     reset() {
//         this.definitions = {}
//     }
//     _pullDefinitions(t, n) {
//         const r = n.prefix && n.iconName && n.icon ? {
//             0: n
//         } : n;
//         return Object.keys(r).map(o => {
//             const {prefix: i, iconName: a, icon: s} = r[o]
//               , l = s[2];
//             t[i] || (t[i] = {}),
//             l.length > 0 && l.forEach(u => {
//                 typeof u == "string" && (t[i][u] = s)
//             }
//             ),
//             t[i][a] = s
//         }
//         ),
//         t
//     }
// }
// let Hp = []
//   , Rr = {};
// const Br = {}
//   , pC = Object.keys(Br);
// function hC(e, t) {
//     let {mixoutsTo: n} = t;
//     return Hp = e,
//     Rr = {},
//     Object.keys(Br).forEach(r => {
//         pC.indexOf(r) === -1 && delete Br[r]
//     }
//     ),
//     Hp.forEach(r => {
//         const o = r.mixout ? r.mixout() : {};
//         if (Object.keys(o).forEach(i => {
//             typeof o[i] == "function" && (n[i] = o[i]),
//             typeof o[i] == "object" && Object.keys(o[i]).forEach(a => {
//                 n[i] || (n[i] = {}),
//                 n[i][a] = o[i][a]
//             }
//             )
//         }
//         ),
//         r.hooks) {
//             const i = r.hooks();
//             Object.keys(i).forEach(a => {
//                 Rr[a] || (Rr[a] = []),
//                 Rr[a].push(i[a])
//             }
//             )
//         }
//         r.provides && r.provides(Br)
//     }
//     ),
//     n
// }
// function Ku(e, t) {
//     for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
//         r[o - 2] = arguments[o];
//     return (Rr[e] || []).forEach(a => {
//         t = a.apply(null, [t, ...r])
//     }
//     ),
//     t
// }
// function ur(e) {
//     for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
//         n[r - 1] = arguments[r];
//     (Rr[e] || []).forEach(i => {
//         i.apply(null, n)
//     }
//     )
// }
// function An() {
//     const e = arguments[0]
//       , t = Array.prototype.slice.call(arguments, 1);
//     return Br[e] ? Br[e].apply(null, t) : void 0
// }
// function Gu(e) {
//     e.prefix === "fa" && (e.prefix = "fas");
//     let {iconName: t} = e;
//     const n = e.prefix || Rn();
//     if (t)
//         return t = bn(n, t) || t,
//         Bp(j1.definitions, n, t) || Bp(Lt.styles, n, t)
// }
// const j1 = new dC
//   , mC = () => {
//     F.autoReplaceSvg = !1,
//     F.observeMutations = !1,
//     ur("noAuto")
// }
//   , gC = {
//     i2svg: function() {
//         let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         return on ? (ur("beforeI2svg", e),
//         An("pseudoElements2svg", e),
//         An("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
//     },
//     watch: function() {
//         let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         const {autoReplaceSvgRoot: t} = e;
//         F.autoReplaceSvg === !1 && (F.autoReplaceSvg = !0),
//         F.observeMutations = !0,
//         tC( () => {
//             yC({
//                 autoReplaceSvgRoot: t
//             }),
//             ur("watch", e)
//         }
//         )
//     }
// }
//   , vC = {
//     icon: e => {
//         if (e === null)
//             return null;
//         if (typeof e == "object" && e.prefix && e.iconName)
//             return {
//                 prefix: e.prefix,
//                 iconName: bn(e.prefix, e.iconName) || e.iconName
//             };
//         if (Array.isArray(e) && e.length === 2) {
//             const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1]
//               , n = Ps(e[0]);
//             return {
//                 prefix: n,
//                 iconName: bn(n, t) || t
//             }
//         }
//         if (typeof e == "string" && (e.indexOf("".concat(F.cssPrefix, "-")) > -1 || e.match(F3))) {
//             const t = Ts(e.split(" "), {
//                 skipLookups: !0
//             });
//             return {
//                 prefix: t.prefix || Rn(),
//                 iconName: bn(t.prefix, t.iconName) || t.iconName
//             }
//         }
//         if (typeof e == "string") {
//             const t = Rn();
//             return {
//                 prefix: t,
//                 iconName: bn(t, e) || e
//             }
//         }
//     }
// }
//   , ut = {
//     noAuto: mC,
//     config: F,
//     dom: gC,
//     parse: vC,
//     library: j1,
//     findIconDefinition: Gu,
//     toHtml: Ci
// }
//   , yC = function() {
//     let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//     const {autoReplaceSvgRoot: t=pe} = e;
//     (Object.keys(Lt.styles).length > 0 || F.autoFetchSvg) && on && F.autoReplaceSvg && ut.dom.i2svg({
//         node: t
//     })
// };
// function _s(e, t) {
//     return Object.defineProperty(e, "abstract", {
//         get: t
//     }),
//     Object.defineProperty(e, "html", {
//         get: function() {
//             return e.abstract.map(n => Ci(n))
//         }
//     }),
//     Object.defineProperty(e, "node", {
//         get: function() {
//             if (!on)
//                 return;
//             const n = pe.createElement("div");
//             return n.innerHTML = e.html,
//             n.children
//         }
//     }),
//     e
// }
// function wC(e) {
//     let {children: t, main: n, mask: r, attributes: o, styles: i, transform: a} = e;
//     if (Of(a) && n.found && !r.found) {
//         const {width: s, height: l} = n
//           , u = {
//             x: s / l / 2,
//             y: .5
//         };
//         o.style = Ns({
//             ...i,
//             "transform-origin": "".concat(u.x + a.x / 16, "em ").concat(u.y + a.y / 16, "em")
//         })
//     }
//     return [{
//         tag: "svg",
//         attributes: o,
//         children: t
//     }]
// }
// function xC(e) {
//     let {prefix: t, iconName: n, children: r, attributes: o, symbol: i} = e;
//     const a = i === !0 ? "".concat(t, "-").concat(F.cssPrefix, "-").concat(n) : i;
//     return [{
//         tag: "svg",
//         attributes: {
//             style: "display: none;"
//         },
//         children: [{
//             tag: "symbol",
//             attributes: {
//                 ...o,
//                 id: a
//             },
//             children: r
//         }]
//     }]
// }
// function _f(e) {
//     const {icons: {main: t, mask: n}, prefix: r, iconName: o, transform: i, symbol: a, title: s, maskId: l, titleId: u, extra: c, watchable: d=!1} = e
//       , {width: f, height: m} = n.found ? n : t
//       , v = r === "fak"
//       , x = [F.replacementClass, o ? "".concat(F.cssPrefix, "-").concat(o) : ""].filter(O => c.classes.indexOf(O) === -1).filter(O => O !== "" || !!O).concat(c.classes).join(" ");
//     let k = {
//         children: [],
//         attributes: {
//             ...c.attributes,
//             "data-prefix": r,
//             "data-icon": o,
//             class: x,
//             role: c.attributes.role || "img",
//             xmlns: "http://www.w3.org/2000/svg",
//             viewBox: "0 0 ".concat(f, " ").concat(m)
//         }
//     };
//     const h = v && !~c.classes.indexOf("fa-fw") ? {
//         width: "".concat(f / m * 16 * .0625, "em")
//     } : {};
//     d && (k.attributes[lr] = ""),
//     s && (k.children.push({
//         tag: "title",
//         attributes: {
//             id: k.attributes["aria-labelledby"] || "title-".concat(u || ii())
//         },
//         children: [s]
//     }),
//     delete k.attributes.title);
//     const p = {
//         ...k,
//         prefix: r,
//         iconName: o,
//         main: t,
//         mask: n,
//         maskId: l,
//         transform: i,
//         symbol: a,
//         styles: {
//             ...h,
//             ...c.styles
//         }
//     }
//       , {children: w, attributes: b} = n.found && t.found ? An("generateAbstractMask", p) || {
//         children: [],
//         attributes: {}
//     } : An("generateAbstractIcon", p) || {
//         children: [],
//         attributes: {}
//     };
//     return p.children = w,
//     p.attributes = b,
//     a ? xC(p) : wC(p)
// }
// function Wp(e) {
//     const {content: t, width: n, height: r, transform: o, title: i, extra: a, watchable: s=!1} = e
//       , l = {
//         ...a.attributes,
//         ...i ? {
//             title: i
//         } : {},
//         class: a.classes.join(" ")
//     };
//     s && (l[lr] = "");
//     const u = {
//         ...a.styles
//     };
//     Of(o) && (u.transform = J3({
//         transform: o,
//         startCentered: !0,
//         width: n,
//         height: r
//     }),
//     u["-webkit-transform"] = u.transform);
//     const c = Ns(u);
//     c.length > 0 && (l.style = c);
//     const d = [];
//     return d.push({
//         tag: "span",
//         attributes: l,
//         children: [t]
//     }),
//     i && d.push({
//         tag: "span",
//         attributes: {
//             class: "sr-only"
//         },
//         children: [i]
//     }),
//     d
// }
// function bC(e) {
//     const {content: t, title: n, extra: r} = e
//       , o = {
//         ...r.attributes,
//         ...n ? {
//             title: n
//         } : {},
//         class: r.classes.join(" ")
//     }
//       , i = Ns(r.styles);
//     i.length > 0 && (o.style = i);
//     const a = [];
//     return a.push({
//         tag: "span",
//         attributes: o,
//         children: [t]
//     }),
//     n && a.push({
//         tag: "span",
//         attributes: {
//             class: "sr-only"
//         },
//         children: [n]
//     }),
//     a
// }
// const {styles: kl} = Lt;
// function Yu(e) {
//     const t = e[0]
//       , n = e[1]
//       , [r] = e.slice(4);
//     let o = null;
//     return Array.isArray(r) ? o = {
//         tag: "g",
//         attributes: {
//             class: "".concat(F.cssPrefix, "-").concat(xl.GROUP)
//         },
//         children: [{
//             tag: "path",
//             attributes: {
//                 class: "".concat(F.cssPrefix, "-").concat(xl.SECONDARY),
//                 fill: "currentColor",
//                 d: r[0]
//             }
//         }, {
//             tag: "path",
//             attributes: {
//                 class: "".concat(F.cssPrefix, "-").concat(xl.PRIMARY),
//                 fill: "currentColor",
//                 d: r[1]
//             }
//         }]
//     } : o = {
//         tag: "path",
//         attributes: {
//             fill: "currentColor",
//             d: r
//         }
//     },
//     {
//         found: !0,
//         width: t,
//         height: n,
//         icon: o
//     }
// }
// const SC = {
//     found: !1,
//     width: 512,
//     height: 512
// };
// function kC(e, t) {
//     !m1 && !F.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
// }
// function Xu(e, t) {
//     let n = t;
//     return t === "fa" && F.styleDefault !== null && (t = Rn()),
//     new Promise( (r, o) => {
//         if (n === "fa") {
//             const i = _1(e) || {};
//             e = i.iconName || e,
//             t = i.prefix || t
//         }
//         if (e && t && kl[t] && kl[t][e]) {
//             const i = kl[t][e];
//             return r(Yu(i))
//         }
//         kC(e, t),
//         r({
//             ...SC,
//             icon: F.showMissingIcons && e ? An("missingIconAbstract") || {} : {}
//         })
//     }
//     )
// }
// const Vp = () => {}
//   , qu = F.measurePerformance && ea && ea.mark && ea.measure ? ea : {
//     mark: Vp,
//     measure: Vp
// }
//   , Oo = 'FA "6.6.0"'
//   , CC = e => (qu.mark("".concat(Oo, " ").concat(e, " begins")),
// () => L1(e))
//   , L1 = e => {
//     qu.mark("".concat(Oo, " ").concat(e, " ends")),
//     qu.measure("".concat(Oo, " ").concat(e), "".concat(Oo, " ").concat(e, " begins"), "".concat(Oo, " ").concat(e, " ends"))
// }
// ;
// var jf = {
//     begin: CC,
//     end: L1
// };
// const ga = () => {}
// ;
// function Kp(e) {
//     return typeof (e.getAttribute ? e.getAttribute(lr) : null) == "string"
// }
// function EC(e) {
//     const t = e.getAttribute ? e.getAttribute(kf) : null
//       , n = e.getAttribute ? e.getAttribute(Cf) : null;
//     return t && n
// }
// function OC(e) {
//     return e && e.classList && e.classList.contains && e.classList.contains(F.replacementClass)
// }
// function NC() {
//     return F.autoReplaceSvg === !0 ? va.replace : va[F.autoReplaceSvg] || va.replace
// }
// function PC(e) {
//     return pe.createElementNS("http://www.w3.org/2000/svg", e)
// }
// function TC(e) {
//     return pe.createElement(e)
// }
// function R1(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//     const {ceFn: n=e.tag === "svg" ? PC : TC} = t;
//     if (typeof e == "string")
//         return pe.createTextNode(e);
//     const r = n(e.tag);
//     return Object.keys(e.attributes || []).forEach(function(i) {
//         r.setAttribute(i, e.attributes[i])
//     }),
//     (e.children || []).forEach(function(i) {
//         r.appendChild(R1(i, {
//             ceFn: n
//         }))
//     }),
//     r
// }
// function _C(e) {
//     let t = " ".concat(e.outerHTML, " ");
//     return t = "".concat(t, "Font Awesome fontawesome.com "),
//     t
// }
// const va = {
//     replace: function(e) {
//         const t = e[0];
//         if (t.parentNode)
//             if (e[1].forEach(n => {
//                 t.parentNode.insertBefore(R1(n), t)
//             }
//             ),
//             t.getAttribute(lr) === null && F.keepOriginalSource) {
//                 let n = pe.createComment(_C(t));
//                 t.parentNode.replaceChild(n, t)
//             } else
//                 t.remove()
//     },
//     nest: function(e) {
//         const t = e[0]
//           , n = e[1];
//         if (~Ef(t).indexOf(F.replacementClass))
//             return va.replace(e);
//         const r = new RegExp("".concat(F.cssPrefix, "-.*"));
//         if (delete n[0].attributes.id,
//         n[0].attributes.class) {
//             const i = n[0].attributes.class.split(" ").reduce( (a, s) => (s === F.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s),
//             a), {
//                 toNode: [],
//                 toSvg: []
//             });
//             n[0].attributes.class = i.toSvg.join(" "),
//             i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "))
//         }
//         const o = n.map(i => Ci(i)).join(`
// `);
//         t.setAttribute(lr, ""),
//         t.innerHTML = o
//     }
// };
// function Gp(e) {
//     e()
// }
// function A1(e, t) {
//     const n = typeof t == "function" ? t : ga;
//     if (e.length === 0)
//         n();
//     else {
//         let r = Gp;
//         F.mutateApproach === D3 && (r = Ln.requestAnimationFrame || Gp),
//         r( () => {
//             const o = NC()
//               , i = jf.begin("mutate");
//             e.map(o),
//             i(),
//             n()
//         }
//         )
//     }
// }
// let Lf = !1;
// function M1() {
//     Lf = !0
// }
// function Qu() {
//     Lf = !1
// }
// let Xa = null;
// function Yp(e) {
//     if (!Ip || !F.observeMutations)
//         return;
//     const {treeCallback: t=ga, nodeCallback: n=ga, pseudoElementsCallback: r=ga, observeMutationsRoot: o=pe} = e;
//     Xa = new Ip(i => {
//         if (Lf)
//             return;
//         const a = Rn();
//         ro(i).forEach(s => {
//             if (s.type === "childList" && s.addedNodes.length > 0 && !Kp(s.addedNodes[0]) && (F.searchPseudoElements && r(s.target),
//             t(s.target)),
//             s.type === "attributes" && s.target.parentNode && F.searchPseudoElements && r(s.target.parentNode),
//             s.type === "attributes" && Kp(s.target) && ~H3.indexOf(s.attributeName))
//                 if (s.attributeName === "class" && EC(s.target)) {
//                     const {prefix: l, iconName: u} = Ts(Ef(s.target));
//                     s.target.setAttribute(kf, l || a),
//                     u && s.target.setAttribute(Cf, u)
//                 } else
//                     OC(s.target) && n(s.target)
//         }
//         )
//     }
//     ),
//     on && Xa.observe(o, {
//         childList: !0,
//         attributes: !0,
//         characterData: !0,
//         subtree: !0
//     })
// }
// function jC() {
//     Xa && Xa.disconnect()
// }
// function LC(e) {
//     const t = e.getAttribute("style");
//     let n = [];
//     return t && (n = t.split(";").reduce( (r, o) => {
//         const i = o.split(":")
//           , a = i[0]
//           , s = i.slice(1);
//         return a && s.length > 0 && (r[a] = s.join(":").trim()),
//         r
//     }
//     , {})),
//     n
// }
// function RC(e) {
//     const t = e.getAttribute("data-prefix")
//       , n = e.getAttribute("data-icon")
//       , r = e.innerText !== void 0 ? e.innerText.trim() : "";
//     let o = Ts(Ef(e));
//     return o.prefix || (o.prefix = Rn()),
//     t && n && (o.prefix = t,
//     o.iconName = n),
//     o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = uC(o.prefix, e.innerText) || Pf(o.prefix, Wu(e.innerText))),
//     !o.iconName && F.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)),
//     o
// }
// function AC(e) {
//     const t = ro(e.attributes).reduce( (o, i) => (o.name !== "class" && o.name !== "style" && (o[i.name] = i.value),
//     o), {})
//       , n = e.getAttribute("title")
//       , r = e.getAttribute("data-fa-title-id");
//     return F.autoA11y && (n ? t["aria-labelledby"] = "".concat(F.replacementClass, "-title-").concat(r || ii()) : (t["aria-hidden"] = "true",
//     t.focusable = "false")),
//     t
// }
// function MC() {
//     return {
//         iconName: null,
//         title: null,
//         titleId: null,
//         prefix: null,
//         transform: jt,
//         symbol: !1,
//         mask: {
//             iconName: null,
//             prefix: null,
//             rest: []
//         },
//         maskId: null,
//         extra: {
//             classes: [],
//             styles: {},
//             attributes: {}
//         }
//     }
// }
// function Xp(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
//         styleParser: !0
//     };
//     const {iconName: n, prefix: r, rest: o} = RC(e)
//       , i = AC(e)
//       , a = Ku("parseNodeAttributes", {}, e);
//     let s = t.styleParser ? LC(e) : [];
//     return {
//         iconName: n,
//         title: e.getAttribute("title"),
//         titleId: e.getAttribute("data-fa-title-id"),
//         prefix: r,
//         transform: jt,
//         mask: {
//             iconName: null,
//             prefix: null,
//             rest: []
//         },
//         maskId: null,
//         symbol: !1,
//         extra: {
//             classes: o,
//             styles: s,
//             attributes: i
//         },
//         ...a
//     }
// }
// const {styles: IC} = Lt;
// function I1(e) {
//     const t = F.autoReplaceSvg === "nest" ? Xp(e, {
//         styleParser: !1
//     }) : Xp(e);
//     return ~t.extra.classes.indexOf(y1) ? An("generateLayersText", e, t) : An("generateSvgReplacementMutation", e, t)
// }
// let It = new Set;
// g1.map(e => {
//     It.add("fa-".concat(e))
// }
// );
// Object.keys(tr[ve]).map(It.add.bind(It));
// Object.keys(tr[rt]).map(It.add.bind(It));
// Object.keys(tr[ot]).map(It.add.bind(It));
// It = [...It];
// function qp(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
//     if (!on)
//         return Promise.resolve();
//     const n = pe.documentElement.classList
//       , r = c => n.add("".concat(zp, "-").concat(c))
//       , o = c => n.remove("".concat(zp, "-").concat(c))
//       , i = F.autoFetchSvg ? It : g1.map(c => "fa-".concat(c)).concat(Object.keys(IC));
//     i.includes("fa") || i.push("fa");
//     const a = [".".concat(y1, ":not([").concat(lr, "])")].concat(i.map(c => ".".concat(c, ":not([").concat(lr, "])"))).join(", ");
//     if (a.length === 0)
//         return Promise.resolve();
//     let s = [];
//     try {
//         s = ro(e.querySelectorAll(a))
//     } catch {}
//     if (s.length > 0)
//         r("pending"),
//         o("complete");
//     else
//         return Promise.resolve();
//     const l = jf.begin("onTree")
//       , u = s.reduce( (c, d) => {
//         try {
//             const f = I1(d);
//             f && c.push(f)
//         } catch (f) {
//             m1 || f.name === "MissingIcon" && console.error(f)
//         }
//         return c
//     }
//     , []);
//     return new Promise( (c, d) => {
//         Promise.all(u).then(f => {
//             A1(f, () => {
//                 r("active"),
//                 r("complete"),
//                 o("pending"),
//                 typeof t == "function" && t(),
//                 l(),
//                 c()
//             }
//             )
//         }
//         ).catch(f => {
//             l(),
//             d(f)
//         }
//         )
//     }
//     )
// }
// function DC(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
//     I1(e).then(n => {
//         n && A1([n], t)
//     }
//     )
// }
// function $C(e) {
//     return function(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         const r = (t || {}).icon ? t : Gu(t || {});
//         let {mask: o} = n;
//         return o && (o = (o || {}).icon ? o : Gu(o || {})),
//         e(r, {
//             ...n,
//             mask: o
//         })
//     }
// }
// const zC = function(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//     const {transform: n=jt, symbol: r=!1, mask: o=null, maskId: i=null, title: a=null, titleId: s=null, classes: l=[], attributes: u={}, styles: c={}} = t;
//     if (!e)
//         return;
//     const {prefix: d, iconName: f, icon: m} = e;
//     return _s({
//         type: "icon",
//         ...e
//     }, () => (ur("beforeDOMElementCreation", {
//         iconDefinition: e,
//         params: t
//     }),
//     F.autoA11y && (a ? u["aria-labelledby"] = "".concat(F.replacementClass, "-title-").concat(s || ii()) : (u["aria-hidden"] = "true",
//     u.focusable = "false")),
//     _f({
//         icons: {
//             main: Yu(m),
//             mask: o ? Yu(o.icon) : {
//                 found: !1,
//                 width: null,
//                 height: null,
//                 icon: {}
//             }
//         },
//         prefix: d,
//         iconName: f,
//         transform: {
//             ...jt,
//             ...n
//         },
//         symbol: r,
//         title: a,
//         maskId: i,
//         titleId: s,
//         extra: {
//             attributes: u,
//             styles: c,
//             classes: l
//         }
//     })))
// };
// var FC = {
//     mixout() {
//         return {
//             icon: $C(zC)
//         }
//     },
//     hooks() {
//         return {
//             mutationObserverCallbacks(e) {
//                 return e.treeCallback = qp,
//                 e.nodeCallback = DC,
//                 e
//             }
//         }
//     },
//     provides(e) {
//         e.i2svg = function(t) {
//             const {node: n=pe, callback: r= () => {}
//             } = t;
//             return qp(n, r)
//         }
//         ,
//         e.generateSvgReplacementMutation = function(t, n) {
//             const {iconName: r, title: o, titleId: i, prefix: a, transform: s, symbol: l, mask: u, maskId: c, extra: d} = n;
//             return new Promise( (f, m) => {
//                 Promise.all([Xu(r, a), u.iconName ? Xu(u.iconName, u.prefix) : Promise.resolve({
//                     found: !1,
//                     width: 512,
//                     height: 512,
//                     icon: {}
//                 })]).then(v => {
//                     let[x,k] = v;
//                     f([t, _f({
//                         icons: {
//                             main: x,
//                             mask: k
//                         },
//                         prefix: a,
//                         iconName: r,
//                         transform: s,
//                         symbol: l,
//                         maskId: c,
//                         title: o,
//                         titleId: i,
//                         extra: d,
//                         watchable: !0
//                     })])
//                 }
//                 ).catch(m)
//             }
//             )
//         }
//         ,
//         e.generateAbstractIcon = function(t) {
//             let {children: n, attributes: r, main: o, transform: i, styles: a} = t;
//             const s = Ns(a);
//             s.length > 0 && (r.style = s);
//             let l;
//             return Of(i) && (l = An("generateAbstractTransformGrouping", {
//                 main: o,
//                 transform: i,
//                 containerWidth: o.width,
//                 iconWidth: o.width
//             })),
//             n.push(l || o.icon),
//             {
//                 children: n,
//                 attributes: r
//             }
//         }
//     }
// }
//   , BC = {
//     mixout() {
//         return {
//             layer(e) {
//                 let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//                 const {classes: n=[]} = t;
//                 return _s({
//                     type: "layer"
//                 }, () => {
//                     ur("beforeDOMElementCreation", {
//                         assembler: e,
//                         params: t
//                     });
//                     let r = [];
//                     return e(o => {
//                         Array.isArray(o) ? o.map(i => {
//                             r = r.concat(i.abstract)
//                         }
//                         ) : r = r.concat(o.abstract)
//                     }
//                     ),
//                     [{
//                         tag: "span",
//                         attributes: {
//                             class: ["".concat(F.cssPrefix, "-layers"), ...n].join(" ")
//                         },
//                         children: r
//                     }]
//                 }
//                 )
//             }
//         }
//     }
// }
//   , UC = {
//     mixout() {
//         return {
//             counter(e) {
//                 let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//                 const {title: n=null, classes: r=[], attributes: o={}, styles: i={}} = t;
//                 return _s({
//                     type: "counter",
//                     content: e
//                 }, () => (ur("beforeDOMElementCreation", {
//                     content: e,
//                     params: t
//                 }),
//                 bC({
//                     content: e.toString(),
//                     title: n,
//                     extra: {
//                         attributes: o,
//                         styles: i,
//                         classes: ["".concat(F.cssPrefix, "-layers-counter"), ...r]
//                     }
//                 })))
//             }
//         }
//     }
// }
//   , HC = {
//     mixout() {
//         return {
//             text(e) {
//                 let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//                 const {transform: n=jt, title: r=null, classes: o=[], attributes: i={}, styles: a={}} = t;
//                 return _s({
//                     type: "text",
//                     content: e
//                 }, () => (ur("beforeDOMElementCreation", {
//                     content: e,
//                     params: t
//                 }),
//                 Wp({
//                     content: e,
//                     transform: {
//                         ...jt,
//                         ...n
//                     },
//                     title: r,
//                     extra: {
//                         attributes: i,
//                         styles: a,
//                         classes: ["".concat(F.cssPrefix, "-layers-text"), ...o]
//                     }
//                 })))
//             }
//         }
//     },
//     provides(e) {
//         e.generateLayersText = function(t, n) {
//             const {title: r, transform: o, extra: i} = n;
//             let a = null
//               , s = null;
//             if (u1) {
//                 const l = parseInt(getComputedStyle(t).fontSize, 10)
//                   , u = t.getBoundingClientRect();
//                 a = u.width / l,
//                 s = u.height / l
//             }
//             return F.autoA11y && !r && (i.attributes["aria-hidden"] = "true"),
//             Promise.resolve([t, Wp({
//                 content: t.innerHTML,
//                 width: a,
//                 height: s,
//                 transform: o,
//                 title: r,
//                 extra: i,
//                 watchable: !0
//             })])
//         }
//     }
// };
// const WC = new RegExp('"',"ug")
//   , Qp = [1105920, 1112319]
//   , Jp = {
//     FontAwesome: {
//         normal: "fas",
//         400: "fas"
//     },
//     ...E3,
//     ...C3,
//     ...R3
// }
//   , Ju = Object.keys(Jp).reduce( (e, t) => (e[t.toLowerCase()] = Jp[t],
// e), {})
//   , VC = Object.keys(Ju).reduce( (e, t) => {
//     const n = Ju[t];
//     return e[t] = n[900] || [...Object.entries(n)][0][1],
//     e
// }
// , {});
// function KC(e) {
//     const t = e.replace(WC, "")
//       , n = rC(t, 0)
//       , r = n >= Qp[0] && n <= Qp[1]
//       , o = t.length === 2 ? t[0] === t[1] : !1;
//     return {
//         value: Wu(o ? t[0] : t),
//         isSecondary: r || o
//     }
// }
// function GC(e, t) {
//     const n = e.replace(/^['"]|['"]$/g, "").toLowerCase()
//       , r = parseInt(t)
//       , o = isNaN(r) ? "normal" : r;
//     return (Ju[n] || {})[o] || VC[n]
// }
// function Zp(e, t) {
//     const n = "".concat(I3).concat(t.replace(":", "-"));
//     return new Promise( (r, o) => {
//         if (e.getAttribute(n) !== null)
//             return r();
//         const a = ro(e.children).filter(f => f.getAttribute(Fu) === t)[0]
//           , s = Ln.getComputedStyle(e, t)
//           , l = s.getPropertyValue("font-family")
//           , u = l.match(B3)
//           , c = s.getPropertyValue("font-weight")
//           , d = s.getPropertyValue("content");
//         if (a && !u)
//             return e.removeChild(a),
//             r();
//         if (u && d !== "none" && d !== "") {
//             const f = s.getPropertyValue("content");
//             let m = GC(l, c);
//             const {value: v, isSecondary: x} = KC(f)
//               , k = u[0].startsWith("FontAwesome");
//             let h = Pf(m, v)
//               , p = h;
//             if (k) {
//                 const w = cC(v);
//                 w.iconName && w.prefix && (h = w.iconName,
//                 m = w.prefix)
//             }
//             if (h && !x && (!a || a.getAttribute(kf) !== m || a.getAttribute(Cf) !== p)) {
//                 e.setAttribute(n, p),
//                 a && e.removeChild(a);
//                 const w = MC()
//                   , {extra: b} = w;
//                 b.attributes[Fu] = t,
//                 Xu(h, m).then(O => {
//                     const C = _f({
//                         ...w,
//                         icons: {
//                             main: O,
//                             mask: Tf()
//                         },
//                         prefix: m,
//                         iconName: p,
//                         extra: b,
//                         watchable: !0
//                     })
//                       , N = pe.createElementNS("http://www.w3.org/2000/svg", "svg");
//                     t === "::before" ? e.insertBefore(N, e.firstChild) : e.appendChild(N),
//                     N.outerHTML = C.map(_ => Ci(_)).join(`
// `),
//                     e.removeAttribute(n),
//                     r()
//                 }
//                 ).catch(o)
//             } else
//                 r()
//         } else
//             r()
//     }
//     )
// }
// function YC(e) {
//     return Promise.all([Zp(e, "::before"), Zp(e, "::after")])
// }
// function XC(e) {
//     return e.parentNode !== document.head && !~$3.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Fu) && (!e.parentNode || e.parentNode.tagName !== "svg")
// }
// function eh(e) {
//     if (on)
//         return new Promise( (t, n) => {
//             const r = ro(e.querySelectorAll("*")).filter(XC).map(YC)
//               , o = jf.begin("searchPseudoElements");
//             M1(),
//             Promise.all(r).then( () => {
//                 o(),
//                 Qu(),
//                 t()
//             }
//             ).catch( () => {
//                 o(),
//                 Qu(),
//                 n()
//             }
//             )
//         }
//         )
// }
// var qC = {
//     hooks() {
//         return {
//             mutationObserverCallbacks(e) {
//                 return e.pseudoElementsCallback = eh,
//                 e
//             }
//         }
//     },
//     provides(e) {
//         e.pseudoElements2svg = function(t) {
//             const {node: n=pe} = t;
//             F.searchPseudoElements && eh(n)
//         }
//     }
// };
// let th = !1;
// var QC = {
//     mixout() {
//         return {
//             dom: {
//                 unwatch() {
//                     M1(),
//                     th = !0
//                 }
//             }
//         }
//     },
//     hooks() {
//         return {
//             bootstrap() {
//                 Yp(Ku("mutationObserverCallbacks", {}))
//             },
//             noAuto() {
//                 jC()
//             },
//             watch(e) {
//                 const {observeMutationsRoot: t} = e;
//                 th ? Qu() : Yp(Ku("mutationObserverCallbacks", {
//                     observeMutationsRoot: t
//                 }))
//             }
//         }
//     }
// };
// const nh = e => {
//     let t = {
//         size: 16,
//         x: 0,
//         y: 0,
//         flipX: !1,
//         flipY: !1,
//         rotate: 0
//     };
//     return e.toLowerCase().split(" ").reduce( (n, r) => {
//         const o = r.toLowerCase().split("-")
//           , i = o[0];
//         let a = o.slice(1).join("-");
//         if (i && a === "h")
//             return n.flipX = !0,
//             n;
//         if (i && a === "v")
//             return n.flipY = !0,
//             n;
//         if (a = parseFloat(a),
//         isNaN(a))
//             return n;
//         switch (i) {
//         case "grow":
//             n.size = n.size + a;
//             break;
//         case "shrink":
//             n.size = n.size - a;
//             break;
//         case "left":
//             n.x = n.x - a;
//             break;
//         case "right":
//             n.x = n.x + a;
//             break;
//         case "up":
//             n.y = n.y - a;
//             break;
//         case "down":
//             n.y = n.y + a;
//             break;
//         case "rotate":
//             n.rotate = n.rotate + a;
//             break
//         }
//         return n
//     }
//     , t)
// }
// ;
// var JC = {
//     mixout() {
//         return {
//             parse: {
//                 transform: e => nh(e)
//             }
//         }
//     },
//     hooks() {
//         return {
//             parseNodeAttributes(e, t) {
//                 const n = t.getAttribute("data-fa-transform");
//                 return n && (e.transform = nh(n)),
//                 e
//             }
//         }
//     },
//     provides(e) {
//         e.generateAbstractTransformGrouping = function(t) {
//             let {main: n, transform: r, containerWidth: o, iconWidth: i} = t;
//             const a = {
//                 transform: "translate(".concat(o / 2, " 256)")
//             }
//               , s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
//               , l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
//               , u = "rotate(".concat(r.rotate, " 0 0)")
//               , c = {
//                 transform: "".concat(s, " ").concat(l, " ").concat(u)
//             }
//               , d = {
//                 transform: "translate(".concat(i / 2 * -1, " -256)")
//             }
//               , f = {
//                 outer: a,
//                 inner: c,
//                 path: d
//             };
//             return {
//                 tag: "g",
//                 attributes: {
//                     ...f.outer
//                 },
//                 children: [{
//                     tag: "g",
//                     attributes: {
//                         ...f.inner
//                     },
//                     children: [{
//                         tag: n.icon.tag,
//                         children: n.icon.children,
//                         attributes: {
//                             ...n.icon.attributes,
//                             ...f.path
//                         }
//                     }]
//                 }]
//             }
//         }
//     }
// };
// const Cl = {
//     x: 0,
//     y: 0,
//     width: "100%",
//     height: "100%"
// };
// function rh(e) {
//     let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
//     return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
//     e
// }
// function ZC(e) {
//     return e.tag === "g" ? e.children : [e]
// }
// var eE = {
//     hooks() {
//         return {
//             parseNodeAttributes(e, t) {
//                 const n = t.getAttribute("data-fa-mask")
//                   , r = n ? Ts(n.split(" ").map(o => o.trim())) : Tf();
//                 return r.prefix || (r.prefix = Rn()),
//                 e.mask = r,
//                 e.maskId = t.getAttribute("data-fa-mask-id"),
//                 e
//             }
//         }
//     },
//     provides(e) {
//         e.generateAbstractMask = function(t) {
//             let {children: n, attributes: r, main: o, mask: i, maskId: a, transform: s} = t;
//             const {width: l, icon: u} = o
//               , {width: c, icon: d} = i
//               , f = Q3({
//                 transform: s,
//                 containerWidth: c,
//                 iconWidth: l
//             })
//               , m = {
//                 tag: "rect",
//                 attributes: {
//                     ...Cl,
//                     fill: "white"
//                 }
//             }
//               , v = u.children ? {
//                 children: u.children.map(rh)
//             } : {}
//               , x = {
//                 tag: "g",
//                 attributes: {
//                     ...f.inner
//                 },
//                 children: [rh({
//                     tag: u.tag,
//                     attributes: {
//                         ...u.attributes,
//                         ...f.path
//                     },
//                     ...v
//                 })]
//             }
//               , k = {
//                 tag: "g",
//                 attributes: {
//                     ...f.outer
//                 },
//                 children: [x]
//             }
//               , h = "mask-".concat(a || ii())
//               , p = "clip-".concat(a || ii())
//               , w = {
//                 tag: "mask",
//                 attributes: {
//                     ...Cl,
//                     id: h,
//                     maskUnits: "userSpaceOnUse",
//                     maskContentUnits: "userSpaceOnUse"
//                 },
//                 children: [m, k]
//             }
//               , b = {
//                 tag: "defs",
//                 children: [{
//                     tag: "clipPath",
//                     attributes: {
//                         id: p
//                     },
//                     children: ZC(d)
//                 }, w]
//             };
//             return n.push(b, {
//                 tag: "rect",
//                 attributes: {
//                     fill: "currentColor",
//                     "clip-path": "url(#".concat(p, ")"),
//                     mask: "url(#".concat(h, ")"),
//                     ...Cl
//                 }
//             }),
//             {
//                 children: n,
//                 attributes: r
//             }
//         }
//     }
// }
//   , tE = {
//     provides(e) {
//         let t = !1;
//         Ln.matchMedia && (t = Ln.matchMedia("(prefers-reduced-motion: reduce)").matches),
//         e.missingIconAbstract = function() {
//             const n = []
//               , r = {
//                 fill: "currentColor"
//             }
//               , o = {
//                 attributeType: "XML",
//                 repeatCount: "indefinite",
//                 dur: "2s"
//             };
//             n.push({
//                 tag: "path",
//                 attributes: {
//                     ...r,
//                     d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
//                 }
//             });
//             const i = {
//                 ...o,
//                 attributeName: "opacity"
//             }
//               , a = {
//                 tag: "circle",
//                 attributes: {
//                     ...r,
//                     cx: "256",
//                     cy: "364",
//                     r: "28"
//                 },
//                 children: []
//             };
//             return t || a.children.push({
//                 tag: "animate",
//                 attributes: {
//                     ...o,
//                     attributeName: "r",
//                     values: "28;14;28;28;14;28;"
//                 }
//             }, {
//                 tag: "animate",
//                 attributes: {
//                     ...i,
//                     values: "1;0;1;1;0;1;"
//                 }
//             }),
//             n.push(a),
//             n.push({
//                 tag: "path",
//                 attributes: {
//                     ...r,
//                     opacity: "1",
//                     d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
//                 },
//                 children: t ? [] : [{
//                     tag: "animate",
//                     attributes: {
//                         ...i,
//                         values: "1;0;0;0;0;1;"
//                     }
//                 }]
//             }),
//             t || n.push({
//                 tag: "path",
//                 attributes: {
//                     ...r,
//                     opacity: "0",
//                     d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
//                 },
//                 children: [{
//                     tag: "animate",
//                     attributes: {
//                         ...i,
//                         values: "0;0;1;1;0;0;"
//                     }
//                 }]
//             }),
//             {
//                 tag: "g",
//                 attributes: {
//                     class: "missing"
//                 },
//                 children: n
//             }
//         }
//     }
// }
//   , nE = {
//     hooks() {
//         return {
//             parseNodeAttributes(e, t) {
//                 const n = t.getAttribute("data-fa-symbol")
//                   , r = n === null ? !1 : n === "" ? !0 : n;
//                 return e.symbol = r,
//                 e
//             }
//         }
//     }
// }
//   , rE = [eC, FC, BC, UC, HC, qC, QC, JC, eE, tE, nE];
// hC(rE, {
//     mixoutsTo: ut
// });
// ut.noAuto;
// ut.config;
// ut.library;
// ut.dom;
// const Zu = ut.parse;
// ut.findIconDefinition;
// ut.toHtml;
// const oE = ut.icon;
// ut.layer;
// ut.text;
// ut.counter;
// function oh(e, t) {
//     var n = Object.keys(e);
//     if (Object.getOwnPropertySymbols) {
//         var r = Object.getOwnPropertySymbols(e);
//         t && (r = r.filter(function(o) {
//             return Object.getOwnPropertyDescriptor(e, o).enumerable
//         })),
//         n.push.apply(n, r)
//     }
//     return n
// }
// function Pt(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t] != null ? arguments[t] : {};
//         t % 2 ? oh(Object(n), !0).forEach(function(r) {
//             Ar(e, r, n[r])
//         }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oh(Object(n)).forEach(function(r) {
//             Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
//         })
//     }
//     return e
// }
// function qa(e) {
//     "@babel/helpers - typeof";
//     return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
//         return typeof t
//     }
//     : function(t) {
//         return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     }
//     ,
//     qa(e)
// }
// function Ar(e, t, n) {
//     return t in e ? Object.defineProperty(e, t, {
//         value: n,
//         enumerable: !0,
//         configurable: !0,
//         writable: !0
//     }) : e[t] = n,
//     e
// }
// function iE(e, t) {
//     if (e == null)
//         return {};
//     var n = {}, r = Object.keys(e), o, i;
//     for (i = 0; i < r.length; i++)
//         o = r[i],
//         !(t.indexOf(o) >= 0) && (n[o] = e[o]);
//     return n
// }
// function aE(e, t) {
//     if (e == null)
//         return {};
//     var n = iE(e, t), r, o;
//     if (Object.getOwnPropertySymbols) {
//         var i = Object.getOwnPropertySymbols(e);
//         for (o = 0; o < i.length; o++)
//             r = i[o],
//             !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
//     }
//     return n
// }
// function ec(e) {
//     return sE(e) || lE(e) || uE(e) || cE()
// }
// function sE(e) {
//     if (Array.isArray(e))
//         return tc(e)
// }
// function lE(e) {
//     if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
//         return Array.from(e)
// }
// function uE(e, t) {
//     if (e) {
//         if (typeof e == "string")
//             return tc(e, t);
//         var n = Object.prototype.toString.call(e).slice(8, -1);
//         if (n === "Object" && e.constructor && (n = e.constructor.name),
//         n === "Map" || n === "Set")
//             return Array.from(e);
//         if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
//             return tc(e, t)
//     }
// }
// function tc(e, t) {
//     (t == null || t > e.length) && (t = e.length);
//     for (var n = 0, r = new Array(t); n < t; n++)
//         r[n] = e[n];
//     return r
// }
// function cE() {
//     throw new TypeError(`Invalid attempt to spread non-iterable instance.
// In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
// }
// function fE(e) {
//     var t, n = e.beat, r = e.fade, o = e.beatFade, i = e.bounce, a = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, f = e.fixedWidth, m = e.inverse, v = e.border, x = e.listItem, k = e.flip, h = e.size, p = e.rotation, w = e.pull, b = (t = {
//         "fa-beat": n,
//         "fa-fade": r,
//         "fa-beat-fade": o,
//         "fa-bounce": i,
//         "fa-shake": a,
//         "fa-flash": s,
//         "fa-spin": l,
//         "fa-spin-reverse": c,
//         "fa-spin-pulse": u,
//         "fa-pulse": d,
//         "fa-fw": f,
//         "fa-inverse": m,
//         "fa-border": v,
//         "fa-li": x,
//         "fa-flip": k === !0,
//         "fa-flip-horizontal": k === "horizontal" || k === "both",
//         "fa-flip-vertical": k === "vertical" || k === "both"
//     },
//     Ar(t, "fa-".concat(h), typeof h < "u" && h !== null),
//     Ar(t, "fa-rotate-".concat(p), typeof p < "u" && p !== null && p !== 0),
//     Ar(t, "fa-pull-".concat(w), typeof w < "u" && w !== null),
//     Ar(t, "fa-swap-opacity", e.swapOpacity),
//     t);
//     return Object.keys(b).map(function(O) {
//         return b[O] ? O : null
//     }).filter(function(O) {
//         return O
//     })
// }
// function dE(e) {
//     return e = e - 0,
//     e === e
// }
// function D1(e) {
//     return dE(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
//         return n ? n.toUpperCase() : ""
//     }),
//     e.substr(0, 1).toLowerCase() + e.substr(1))
// }
// var pE = ["style"];
// function hE(e) {
//     return e.charAt(0).toUpperCase() + e.slice(1)
// }
// function mE(e) {
//     return e.split(";").map(function(t) {
//         return t.trim()
//     }).filter(function(t) {
//         return t
//     }).reduce(function(t, n) {
//         var r = n.indexOf(":")
//           , o = D1(n.slice(0, r))
//           , i = n.slice(r + 1).trim();
//         return o.startsWith("webkit") ? t[hE(o)] = i : t[o] = i,
//         t
//     }, {})
// }
// function $1(e, t) {
//     var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//     if (typeof t == "string")
//         return t;
//     var r = (t.children || []).map(function(l) {
//         return $1(e, l)
//     })
//       , o = Object.keys(t.attributes || {}).reduce(function(l, u) {
//         var c = t.attributes[u];
//         switch (u) {
//         case "class":
//             l.attrs.className = c,
//             delete t.attributes.class;
//             break;
//         case "style":
//             l.attrs.style = mE(c);
//             break;
//         default:
//             u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[D1(u)] = c
//         }
//         return l
//     }, {
//         attrs: {}
//     })
//       , i = n.style
//       , a = i === void 0 ? {} : i
//       , s = aE(n, pE);
//     return o.attrs.style = Pt(Pt({}, o.attrs.style), a),
//     e.apply(void 0, [t.tag, Pt(Pt({}, o.attrs), s)].concat(ec(r)))
// }
// var z1 = !1;
// try {
//     z1 = !0
// } catch {}
// function gE() {
//     if (!z1 && console && typeof console.error == "function") {
//         var e;
//         (e = console).error.apply(e, arguments)
//     }
// }
// function ih(e) {
//     if (e && qa(e) === "object" && e.prefix && e.iconName && e.icon)
//         return e;
//     if (Zu.icon)
//         return Zu.icon(e);
//     if (e === null)
//         return null;
//     if (e && qa(e) === "object" && e.prefix && e.iconName)
//         return e;
//     if (Array.isArray(e) && e.length === 2)
//         return {
//             prefix: e[0],
//             iconName: e[1]
//         };
//     if (typeof e == "string")
//         return {
//             prefix: "fas",
//             iconName: e
//         }
// }
// function El(e, t) {
//     return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ar({}, e, t) : {}
// }
// var ah = {
//     border: !1,
//     className: "",
//     mask: null,
//     maskId: null,
//     fixedWidth: !1,
//     inverse: !1,
//     flip: !1,
//     icon: null,
//     listItem: !1,
//     pull: null,
//     pulse: !1,
//     rotation: null,
//     size: null,
//     spin: !1,
//     spinPulse: !1,
//     spinReverse: !1,
//     beat: !1,
//     fade: !1,
//     beatFade: !1,
//     bounce: !1,
//     shake: !1,
//     symbol: !1,
//     title: "",
//     titleId: null,
//     transform: null,
//     swapOpacity: !1
// }
//   , Rf = fe.forwardRef(function(e, t) {
//     var n = Pt(Pt({}, ah), e)
//       , r = n.icon
//       , o = n.mask
//       , i = n.symbol
//       , a = n.className
//       , s = n.title
//       , l = n.titleId
//       , u = n.maskId
//       , c = ih(r)
//       , d = El("classes", [].concat(ec(fE(n)), ec((a || "").split(" "))))
//       , f = El("transform", typeof n.transform == "string" ? Zu.transform(n.transform) : n.transform)
//       , m = El("mask", ih(o))
//       , v = oE(c, Pt(Pt(Pt(Pt({}, d), f), m), {}, {
//         symbol: i,
//         title: s,
//         titleId: l,
//         maskId: u
//     }));
//     if (!v)
//         return gE("Could not find icon", c),
//         null;
//     var x = v.abstract
//       , k = {
//         ref: t
//     };
//     return Object.keys(n).forEach(function(h) {
//         ah.hasOwnProperty(h) || (k[h] = n[h])
//     }),
//     vE(x[0], k)
// });
// Rf.displayName = "FontAwesomeIcon";
// Rf.propTypes = {
//     beat: q.bool,
//     border: q.bool,
//     beatFade: q.bool,
//     bounce: q.bool,
//     className: q.string,
//     fade: q.bool,
//     flash: q.bool,
//     mask: q.oneOfType([q.object, q.array, q.string]),
//     maskId: q.string,
//     fixedWidth: q.bool,
//     inverse: q.bool,
//     flip: q.oneOf([!0, !1, "horizontal", "vertical", "both"]),
//     icon: q.oneOfType([q.object, q.array, q.string]),
//     listItem: q.bool,
//     pull: q.oneOf(["right", "left"]),
//     pulse: q.bool,
//     rotation: q.oneOf([0, 90, 180, 270]),
//     shake: q.bool,
//     size: q.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
//     spin: q.bool,
//     spinPulse: q.bool,
//     spinReverse: q.bool,
//     symbol: q.oneOfType([q.bool, q.string]),
//     title: q.string,
//     titleId: q.string,
//     transform: q.oneOfType([q.string, q.object]),
//     swapOpacity: q.bool
// };
// var vE = $1.bind(null, fe.createElement);
// const yE = {
//     prefix: "fab",
//     iconName: "whatsapp",
//     icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
// }
//   , wE = () => (Dt(),
// g.jsx("div", {
//     className: "fixed-button-wrapper",
//     children: g.jsx("div", {
//         className: "fixed-button-container ",
//         children: g.jsx("a", {
//             href: "https://wa.me/553183116427",
//             target: "_blank",
//             rel: "noopener noreferrer",
//             "data-toggle": "tooltip",
//             "data-html": "true",
//             className: "fixed-button",
//             children: g.jsx(Rf, {
//                 icon: yE,
//                 className: "fixed-button-icon"
//             })
//         })
//     })
// }));
// function xE() {
//     const {i18n: e} = Dt()
//       , [t,n] = y.useState(!1)
//       , [r,o] = y.useState(null);
//     y.useEffect( () => {
//         z2.init();
//         const l = localStorage.getItem("selectedLanguage");
//         l ? (e.changeLanguage(l),
//         o(a(l))) : n(!0)
//     }
//     , [e]);
//     const i = () => {
//         n(!1)
//     }
//       , a = l => {
//         const c = [{
//             code: "pt_BR",
//             flag: ni
//         }, {
//             code: "es_Latam",
//             flag: ff
//         }, {
//             code: "zh",
//             flag: cf
//         }, {
//             code: "en",
//             flag: uf
//         }].find(d => d.code === l);
//         return c ? c.flag : ni
//     }
//       , s = l => {
//         e.changeLanguage(l),
//         o(a(l)),
//         localStorage.setItem("selectedLanguage", l),
//         n(!1)
//     }
//     ;
//     return g.jsxs(g.Fragment, {
//         children: [g.jsx(v3, {}), g.jsx(tb, {
//             currentFlag: r,
//             changeLanguage: s
//         }), g.jsx(y3, {
//             show: t,
//             onHide: i,
//             changeLanguage: s
//         }), g.jsx(wS, {}), g.jsx(bS, {}), g.jsx(SS, {}), g.jsx(PS, {}), g.jsx(LS, {}), g.jsx(RS, {}), g.jsx(wE, {})]
//     })
// }
// const bE = {
//     type: "logger",
//     log(e) {
//         this.output("log", e)
//     },
//     warn(e) {
//         this.output("warn", e)
//     },
//     error(e) {
//         this.output("error", e)
//     },
//     output(e, t) {
//         console && console[e] && console[e].apply(console, t)
//     }
// };
// class Qa {
//     constructor(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         this.init(t, n)
//     }
//     init(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         this.prefix = n.prefix || "i18next:",
//         this.logger = t || bE,
//         this.options = n,
//         this.debug = n.debug
//     }
//     log() {
//         for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
//             n[r] = arguments[r];
//         return this.forward(n, "log", "", !0)
//     }
//     warn() {
//         for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
//             n[r] = arguments[r];
//         return this.forward(n, "warn", "", !0)
//     }
//     error() {
//         for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
//             n[r] = arguments[r];
//         return this.forward(n, "error", "")
//     }
//     deprecate() {
//         for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
//             n[r] = arguments[r];
//         return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
//     }
//     forward(t, n, r, o) {
//         return o && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
//         this.logger[n](t))
//     }
//     create(t) {
//         return new Qa(this.logger,{
//             prefix: `${this.prefix}:${t}:`,
//             ...this.options
//         })
//     }
//     clone(t) {
//         return t = t || this.options,
//         t.prefix = t.prefix || this.prefix,
//         new Qa(this.logger,t)
//     }
// }
// var Rt = new Qa;
// class js {
//     constructor() {
//         this.observers = {}
//     }
//     on(t, n) {
//         return t.split(" ").forEach(r => {
//             this.observers[r] || (this.observers[r] = new Map);
//             const o = this.observers[r].get(n) || 0;
//             this.observers[r].set(n, o + 1)
//         }
//         ),
//         this
//     }
//     off(t, n) {
//         if (this.observers[t]) {
//             if (!n) {
//                 delete this.observers[t];
//                 return
//             }
//             this.observers[t].delete(n)
//         }
//     }
//     emit(t) {
//         for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
//             r[o - 1] = arguments[o];
//         this.observers[t] && Array.from(this.observers[t].entries()).forEach(a => {
//             let[s,l] = a;
//             for (let u = 0; u < l; u++)
//                 s(...r)
//         }
//         ),
//         this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(a => {
//             let[s,l] = a;
//             for (let u = 0; u < l; u++)
//                 s.apply(s, [t, ...r])
//         }
//         )
//     }
// }
// function go() {
//     let e, t;
//     const n = new Promise( (r, o) => {
//         e = r,
//         t = o
//     }
//     );
//     return n.resolve = e,
//     n.reject = t,
//     n
// }
// function sh(e) {
//     return e == null ? "" : "" + e
// }
// function SE(e, t, n) {
//     e.forEach(r => {
//         t[r] && (n[r] = t[r])
//     }
//     )
// }
// const kE = /###/g;
// function $o(e, t, n) {
//     function r(s) {
//         return s && s.indexOf("###") > -1 ? s.replace(kE, ".") : s
//     }
//     function o() {
//         return !e || typeof e == "string"
//     }
//     const i = typeof t != "string" ? t : t.split(".");
//     let a = 0;
//     for (; a < i.length - 1; ) {
//         if (o())
//             return {};
//         const s = r(i[a]);
//         !e[s] && n && (e[s] = new n),
//         Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {},
//         ++a
//     }
//     return o() ? {} : {
//         obj: e,
//         k: r(i[a])
//     }
// }
// function lh(e, t, n) {
//     const {obj: r, k: o} = $o(e, t, Object);
//     if (r !== void 0 || t.length === 1) {
//         r[o] = n;
//         return
//     }
//     let i = t[t.length - 1]
//       , a = t.slice(0, t.length - 1)
//       , s = $o(e, a, Object);
//     for (; s.obj === void 0 && a.length; )
//         i = `${a[a.length - 1]}.${i}`,
//         a = a.slice(0, a.length - 1),
//         s = $o(e, a, Object),
//         s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
//     s.obj[`${s.k}.${i}`] = n
// }
// function CE(e, t, n, r) {
//     const {obj: o, k: i} = $o(e, t, Object);
//     o[i] = o[i] || [],
//     o[i].push(n)
// }
// function Ja(e, t) {
//     const {obj: n, k: r} = $o(e, t);
//     if (n)
//         return n[r]
// }
// function EE(e, t, n) {
//     const r = Ja(e, n);
//     return r !== void 0 ? r : Ja(t, n)
// }
// function F1(e, t, n) {
//     for (const r in t)
//         r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r]instanceof String || typeof t[r] == "string" || t[r]instanceof String ? n && (e[r] = t[r]) : F1(e[r], t[r], n) : e[r] = t[r]);
//     return e
// }
// function vr(e) {
//     return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
// }
// var OE = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&#39;",
//     "/": "&#x2F;"
// };
// function NE(e) {
//     return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => OE[t]) : e
// }
// class PE {
//     constructor(t) {
//         this.capacity = t,
//         this.regExpMap = new Map,
//         this.regExpQueue = []
//     }
//     getRegExp(t) {
//         const n = this.regExpMap.get(t);
//         if (n !== void 0)
//             return n;
//         const r = new RegExp(t);
//         return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
//         this.regExpMap.set(t, r),
//         this.regExpQueue.push(t),
//         r
//     }
// }
// const TE = [" ", ",", "?", "!", ";"]
//   , _E = new PE(20);
// function jE(e, t, n) {
//     t = t || "",
//     n = n || "";
//     const r = TE.filter(a => t.indexOf(a) < 0 && n.indexOf(a) < 0);
//     if (r.length === 0)
//         return !0;
//     const o = _E.getRegExp(`(${r.map(a => a === "?" ? "\\?" : a).join("|")})`);
//     let i = !o.test(e);
//     if (!i) {
//         const a = e.indexOf(n);
//         a > 0 && !o.test(e.substring(0, a)) && (i = !0)
//     }
//     return i
// }
// function nc(e, t) {
//     let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
//     if (!e)
//         return;
//     if (e[t])
//         return e[t];
//     const r = t.split(n);
//     let o = e;
//     for (let i = 0; i < r.length; ) {
//         if (!o || typeof o != "object")
//             return;
//         let a, s = "";
//         for (let l = i; l < r.length; ++l)
//             if (l !== i && (s += n),
//             s += r[l],
//             a = o[s],
//             a !== void 0) {
//                 if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < r.length - 1)
//                     continue;
//                 i += l - i + 1;
//                 break
//             }
//         o = a
//     }
//     return o
// }
// function Za(e) {
//     return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
// }
// class uh extends js {
//     constructor(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
//             ns: ["translation"],
//             defaultNS: "translation"
//         };
//         super(),
//         this.data = t || {},
//         this.options = n,
//         this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
//         this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
//     }
//     addNamespaces(t) {
//         this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
//     }
//     removeNamespaces(t) {
//         const n = this.options.ns.indexOf(t);
//         n > -1 && this.options.ns.splice(n, 1)
//     }
//     getResource(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
//         const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
//           , a = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
//         let s;
//         t.indexOf(".") > -1 ? s = t.split(".") : (s = [t, n],
//         r && (Array.isArray(r) ? s.push(...r) : typeof r == "string" && i ? s.push(...r.split(i)) : s.push(r)));
//         const l = Ja(this.data, s);
//         return !l && !n && !r && t.indexOf(".") > -1 && (t = s[0],
//         n = s[1],
//         r = s.slice(2).join(".")),
//         l || !a || typeof r != "string" ? l : nc(this.data && this.data[t] && this.data[t][n], r, i)
//     }
//     addResource(t, n, r, o) {
//         let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
//             silent: !1
//         };
//         const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
//         let s = [t, n];
//         r && (s = s.concat(a ? r.split(a) : r)),
//         t.indexOf(".") > -1 && (s = t.split("."),
//         o = n,
//         n = s[1]),
//         this.addNamespaces(n),
//         lh(this.data, s, o),
//         i.silent || this.emit("added", t, n, r, o)
//     }
//     addResources(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
//             silent: !1
//         };
//         for (const i in r)
//             (typeof r[i] == "string" || Object.prototype.toString.apply(r[i]) === "[object Array]") && this.addResource(t, n, i, r[i], {
//                 silent: !0
//             });
//         o.silent || this.emit("added", t, n, r)
//     }
//     addResourceBundle(t, n, r, o, i) {
//         let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
//             silent: !1,
//             skipCopy: !1
//         }
//           , s = [t, n];
//         t.indexOf(".") > -1 && (s = t.split("."),
//         o = r,
//         r = n,
//         n = s[1]),
//         this.addNamespaces(n);
//         let l = Ja(this.data, s) || {};
//         a.skipCopy || (r = JSON.parse(JSON.stringify(r))),
//         o ? F1(l, r, i) : l = {
//             ...l,
//             ...r
//         },
//         lh(this.data, s, l),
//         a.silent || this.emit("added", t, n, r)
//     }
//     removeResourceBundle(t, n) {
//         this.hasResourceBundle(t, n) && delete this.data[t][n],
//         this.removeNamespaces(n),
//         this.emit("removed", t, n)
//     }
//     hasResourceBundle(t, n) {
//         return this.getResource(t, n) !== void 0
//     }
//     getResourceBundle(t, n) {
//         return n || (n = this.options.defaultNS),
//         this.options.compatibilityAPI === "v1" ? {
//             ...this.getResource(t, n)
//         } : this.getResource(t, n)
//     }
//     getDataByLanguage(t) {
//         return this.data[t]
//     }
//     hasLanguageSomeTranslations(t) {
//         const n = this.getDataByLanguage(t);
//         return !!(n && Object.keys(n) || []).find(o => n[o] && Object.keys(n[o]).length > 0)
//     }
//     toJSON() {
//         return this.data
//     }
// }
// var B1 = {
//     processors: {},
//     addPostProcessor(e) {
//         this.processors[e.name] = e
//     },
//     handle(e, t, n, r, o) {
//         return e.forEach(i => {
//             this.processors[i] && (t = this.processors[i].process(t, n, r, o))
//         }
//         ),
//         t
//     }
// };
// const ch = {};
// class es extends js {
//     constructor(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         super(),
//         SE(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
//         this.options = n,
//         this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
//         this.logger = Rt.create("translator")
//     }
//     changeLanguage(t) {
//         t && (this.language = t)
//     }
//     exists(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
//             interpolation: {}
//         };
//         if (t == null)
//             return !1;
//         const r = this.resolve(t, n);
//         return r && r.res !== void 0
//     }
//     extractFromKey(t, n) {
//         let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
//         r === void 0 && (r = ":");
//         const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
//         let i = n.ns || this.options.defaultNS || [];
//         const a = r && t.indexOf(r) > -1
//           , s = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !jE(t, r, o);
//         if (a && !s) {
//             const l = t.match(this.interpolator.nestingRegexp);
//             if (l && l.length > 0)
//                 return {
//                     key: t,
//                     namespaces: i
//                 };
//             const u = t.split(r);
//             (r !== o || r === o && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()),
//             t = u.join(o)
//         }
//         return typeof i == "string" && (i = [i]),
//         {
//             key: t,
//             namespaces: i
//         }
//     }
//     translate(t, n, r) {
//         if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)),
//         typeof n == "object" && (n = {
//             ...n
//         }),
//         n || (n = {}),
//         t == null)
//             return "";
//         Array.isArray(t) || (t = [String(t)]);
//         const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails
//           , i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
//           , {key: a, namespaces: s} = this.extractFromKey(t[t.length - 1], n)
//           , l = s[s.length - 1]
//           , u = n.lng || this.language
//           , c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
//         if (u && u.toLowerCase() === "cimode") {
//             if (c) {
//                 const b = n.nsSeparator || this.options.nsSeparator;
//                 return o ? {
//                     res: `${l}${b}${a}`,
//                     usedKey: a,
//                     exactUsedKey: a,
//                     usedLng: u,
//                     usedNS: l,
//                     usedParams: this.getUsedParamsDetails(n)
//                 } : `${l}${b}${a}`
//             }
//             return o ? {
//                 res: a,
//                 usedKey: a,
//                 exactUsedKey: a,
//                 usedLng: u,
//                 usedNS: l,
//                 usedParams: this.getUsedParamsDetails(n)
//             } : a
//         }
//         const d = this.resolve(t, n);
//         let f = d && d.res;
//         const m = d && d.usedKey || a
//           , v = d && d.exactUsedKey || a
//           , x = Object.prototype.toString.apply(f)
//           , k = ["[object Number]", "[object Function]", "[object RegExp]"]
//           , h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays
//           , p = !this.i18nFormat || this.i18nFormat.handleAsObject;
//         if (p && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && k.indexOf(x) < 0 && !(typeof h == "string" && x === "[object Array]")) {
//             if (!n.returnObjects && !this.options.returnObjects) {
//                 this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
//                 const b = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, f, {
//                     ...n,
//                     ns: s
//                 }) : `key '${a} (${this.language})' returned an object instead of string.`;
//                 return o ? (d.res = b,
//                 d.usedParams = this.getUsedParamsDetails(n),
//                 d) : b
//             }
//             if (i) {
//                 const b = x === "[object Array]"
//                   , O = b ? [] : {}
//                   , C = b ? v : m;
//                 for (const N in f)
//                     if (Object.prototype.hasOwnProperty.call(f, N)) {
//                         const _ = `${C}${i}${N}`;
//                         O[N] = this.translate(_, {
//                             ...n,
//                             joinArrays: !1,
//                             ns: s
//                         }),
//                         O[N] === _ && (O[N] = f[N])
//                     }
//                 f = O
//             }
//         } else if (p && typeof h == "string" && x === "[object Array]")
//             f = f.join(h),
//             f && (f = this.extendTranslation(f, t, n, r));
//         else {
//             let b = !1
//               , O = !1;
//             const C = n.count !== void 0 && typeof n.count != "string"
//               , N = es.hasDefaultValue(n)
//               , _ = C ? this.pluralResolver.getSuffix(u, n.count, n) : ""
//               , z = n.ordinal && C ? this.pluralResolver.getSuffix(u, n.count, {
//                 ordinal: !1
//             }) : ""
//               , D = C && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
//               , A = D && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${_}`] || n[`defaultValue${z}`] || n.defaultValue;
//             !this.isValidLookup(f) && N && (b = !0,
//             f = A),
//             this.isValidLookup(f) || (O = !0,
//             f = a);
//             const B = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : f
//               , I = N && A !== f && this.options.updateMissing;
//             if (O || b || I) {
//                 if (this.logger.log(I ? "updateKey" : "missingKey", u, l, a, I ? A : f),
//                 i) {
//                     const E = this.resolve(a, {
//                         ...n,
//                         keySeparator: !1
//                     });
//                     E && E.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
//                 }
//                 let S = [];
//                 const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
//                 if (this.options.saveMissingTo === "fallback" && P && P[0])
//                     for (let E = 0; E < P.length; E++)
//                         S.push(P[E]);
//                 else
//                     this.options.saveMissingTo === "all" ? S = this.languageUtils.toResolveHierarchy(n.lng || this.language) : S.push(n.lng || this.language);
//                 const M = (E, j, L) => {
//                     const U = N && L !== f ? L : B;
//                     this.options.missingKeyHandler ? this.options.missingKeyHandler(E, l, j, U, I, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(E, l, j, U, I, n),
//                     this.emit("missingKey", E, l, j, f)
//                 }
//                 ;
//                 this.options.saveMissing && (this.options.saveMissingPlurals && C ? S.forEach(E => {
//                     const j = this.pluralResolver.getSuffixes(E, n);
//                     D && n[`defaultValue${this.options.pluralSeparator}zero`] && j.indexOf(`${this.options.pluralSeparator}zero`) < 0 && j.push(`${this.options.pluralSeparator}zero`),
//                     j.forEach(L => {
//                         M([E], a + L, n[`defaultValue${L}`] || A)
//                     }
//                     )
//                 }
//                 ) : M(S, a, A))
//             }
//             f = this.extendTranslation(f, t, n, d, r),
//             O && f === a && this.options.appendNamespaceToMissingKey && (f = `${l}:${a}`),
//             (O || b) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, b ? f : void 0) : f = this.options.parseMissingKeyHandler(f))
//         }
//         return o ? (d.res = f,
//         d.usedParams = this.getUsedParamsDetails(n),
//         d) : f
//     }
//     extendTranslation(t, n, r, o, i) {
//         var a = this;
//         if (this.i18nFormat && this.i18nFormat.parse)
//             t = this.i18nFormat.parse(t, {
//                 ...this.options.interpolation.defaultVariables,
//                 ...r
//             }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
//                 resolved: o
//             });
//         else if (!r.skipInterpolation) {
//             r.interpolation && this.interpolator.init({
//                 ...r,
//                 interpolation: {
//                     ...this.options.interpolation,
//                     ...r.interpolation
//                 }
//             });
//             const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
//             let c;
//             if (u) {
//                 const f = t.match(this.interpolator.nestingRegexp);
//                 c = f && f.length
//             }
//             let d = r.replace && typeof r.replace != "string" ? r.replace : r;
//             if (this.options.interpolation.defaultVariables && (d = {
//                 ...this.options.interpolation.defaultVariables,
//                 ...d
//             }),
//             t = this.interpolator.interpolate(t, d, r.lng || this.language, r),
//             u) {
//                 const f = t.match(this.interpolator.nestingRegexp)
//                   , m = f && f.length;
//                 c < m && (r.nest = !1)
//             }
//             !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng),
//             r.nest !== !1 && (t = this.interpolator.nest(t, function() {
//                 for (var f = arguments.length, m = new Array(f), v = 0; v < f; v++)
//                     m[v] = arguments[v];
//                 return i && i[0] === m[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${n[0]}`),
//                 null) : a.translate(...m, n)
//             }, r)),
//             r.interpolation && this.interpolator.reset()
//         }
//         const s = r.postProcess || this.options.postProcess
//           , l = typeof s == "string" ? [s] : s;
//         return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = B1.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
//             i18nResolved: {
//                 ...o,
//                 usedParams: this.getUsedParamsDetails(r)
//             },
//             ...r
//         } : r, this)),
//         t
//     }
//     resolve(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, o, i, a, s;
//         return typeof t == "string" && (t = [t]),
//         t.forEach(l => {
//             if (this.isValidLookup(r))
//                 return;
//             const u = this.extractFromKey(l, n)
//               , c = u.key;
//             o = c;
//             let d = u.namespaces;
//             this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
//             const f = n.count !== void 0 && typeof n.count != "string"
//               , m = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
//               , v = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== ""
//               , x = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
//             d.forEach(k => {
//                 this.isValidLookup(r) || (s = k,
//                 !ch[`${x[0]}-${k}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (ch[`${x[0]}-${k}`] = !0,
//                 this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
//                 x.forEach(h => {
//                     if (this.isValidLookup(r))
//                         return;
//                     a = h;
//                     const p = [c];
//                     if (this.i18nFormat && this.i18nFormat.addLookupKeys)
//                         this.i18nFormat.addLookupKeys(p, c, h, k, n);
//                     else {
//                         let b;
//                         f && (b = this.pluralResolver.getSuffix(h, n.count, n));
//                         const O = `${this.options.pluralSeparator}zero`
//                           , C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
//                         if (f && (p.push(c + b),
//                         n.ordinal && b.indexOf(C) === 0 && p.push(c + b.replace(C, this.options.pluralSeparator)),
//                         m && p.push(c + O)),
//                         v) {
//                             const N = `${c}${this.options.contextSeparator}${n.context}`;
//                             p.push(N),
//                             f && (p.push(N + b),
//                             n.ordinal && b.indexOf(C) === 0 && p.push(N + b.replace(C, this.options.pluralSeparator)),
//                             m && p.push(N + O))
//                         }
//                     }
//                     let w;
//                     for (; w = p.pop(); )
//                         this.isValidLookup(r) || (i = w,
//                         r = this.getResource(h, k, w, n))
//                 }
//                 ))
//             }
//             )
//         }
//         ),
//         {
//             res: r,
//             usedKey: o,
//             exactUsedKey: i,
//             usedLng: a,
//             usedNS: s
//         }
//     }
//     isValidLookup(t) {
//         return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
//     }
//     getResource(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
//         return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o)
//     }
//     getUsedParamsDetails() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
//           , r = t.replace && typeof t.replace != "string";
//         let o = r ? t.replace : t;
//         if (r && typeof t.count < "u" && (o.count = t.count),
//         this.options.interpolation.defaultVariables && (o = {
//             ...this.options.interpolation.defaultVariables,
//             ...o
//         }),
//         !r) {
//             o = {
//                 ...o
//             };
//             for (const i of n)
//                 delete o[i]
//         }
//         return o
//     }
//     static hasDefaultValue(t) {
//         const n = "defaultValue";
//         for (const r in t)
//             if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
//                 return !0;
//         return !1
//     }
// }
// function Ol(e) {
//     return e.charAt(0).toUpperCase() + e.slice(1)
// }
// class fh {
//     constructor(t) {
//         this.options = t,
//         this.supportedLngs = this.options.supportedLngs || !1,
//         this.logger = Rt.create("languageUtils")
//     }
//     getScriptPartFromCode(t) {
//         if (t = Za(t),
//         !t || t.indexOf("-") < 0)
//             return null;
//         const n = t.split("-");
//         return n.length === 2 || (n.pop(),
//         n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
//     }
//     getLanguagePartFromCode(t) {
//         if (t = Za(t),
//         !t || t.indexOf("-") < 0)
//             return t;
//         const n = t.split("-");
//         return this.formatLanguageCode(n[0])
//     }
//     formatLanguageCode(t) {
//         if (typeof t == "string" && t.indexOf("-") > -1) {
//             const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
//             let r = t.split("-");
//             return this.options.lowerCaseLng ? r = r.map(o => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(),
//             r[1] = r[1].toUpperCase(),
//             n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ol(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(),
//             r[1].length === 2 && (r[1] = r[1].toUpperCase()),
//             r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
//             n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ol(r[1].toLowerCase())),
//             n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ol(r[2].toLowerCase()))),
//             r.join("-")
//         }
//         return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
//     }
//     isSupportedCode(t) {
//         return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
//         !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
//     }
//     getBestMatchFromCodes(t) {
//         if (!t)
//             return null;
//         let n;
//         return t.forEach(r => {
//             if (n)
//                 return;
//             const o = this.formatLanguageCode(r);
//             (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o)
//         }
//         ),
//         !n && this.options.supportedLngs && t.forEach(r => {
//             if (n)
//                 return;
//             const o = this.getLanguagePartFromCode(r);
//             if (this.isSupportedCode(o))
//                 return n = o;
//             n = this.options.supportedLngs.find(i => {
//                 if (i === o)
//                     return i;
//                 if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && (i.indexOf("-") > 0 && o.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === o || i.indexOf(o) === 0 && o.length > 1))
//                     return i
//             }
//             )
//         }
//         ),
//         n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
//         n
//     }
//     getFallbackCodes(t, n) {
//         if (!t)
//             return [];
//         if (typeof t == "function" && (t = t(n)),
//         typeof t == "string" && (t = [t]),
//         Object.prototype.toString.apply(t) === "[object Array]")
//             return t;
//         if (!n)
//             return t.default || [];
//         let r = t[n];
//         return r || (r = t[this.getScriptPartFromCode(n)]),
//         r || (r = t[this.formatLanguageCode(n)]),
//         r || (r = t[this.getLanguagePartFromCode(n)]),
//         r || (r = t.default),
//         r || []
//     }
//     toResolveHierarchy(t, n) {
//         const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t)
//           , o = []
//           , i = a => {
//             a && (this.isSupportedCode(a) ? o.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))
//         }
//         ;
//         return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)),
//         this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)),
//         this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)),
//         r.forEach(a => {
//             o.indexOf(a) < 0 && i(this.formatLanguageCode(a))
//         }
//         ),
//         o
//     }
// }
// let LE = [{
//     lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
//     nr: [1, 2],
//     fc: 1
// }, {
//     lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
//     nr: [1, 2],
//     fc: 2
// }, {
//     lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
//     nr: [1],
//     fc: 3
// }, {
//     lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
//     nr: [1, 2, 5],
//     fc: 4
// }, {
//     lngs: ["ar"],
//     nr: [0, 1, 2, 3, 11, 100],
//     fc: 5
// }, {
//     lngs: ["cs", "sk"],
//     nr: [1, 2, 5],
//     fc: 6
// }, {
//     lngs: ["csb", "pl"],
//     nr: [1, 2, 5],
//     fc: 7
// }, {
//     lngs: ["cy"],
//     nr: [1, 2, 3, 8],
//     fc: 8
// }, {
//     lngs: ["fr"],
//     nr: [1, 2],
//     fc: 9
// }, {
//     lngs: ["ga"],
//     nr: [1, 2, 3, 7, 11],
//     fc: 10
// }, {
//     lngs: ["gd"],
//     nr: [1, 2, 3, 20],
//     fc: 11
// }, {
//     lngs: ["is"],
//     nr: [1, 2],
//     fc: 12
// }, {
//     lngs: ["jv"],
//     nr: [0, 1],
//     fc: 13
// }, {
//     lngs: ["kw"],
//     nr: [1, 2, 3, 4],
//     fc: 14
// }, {
//     lngs: ["lt"],
//     nr: [1, 2, 10],
//     fc: 15
// }, {
//     lngs: ["lv"],
//     nr: [1, 2, 0],
//     fc: 16
// }, {
//     lngs: ["mk"],
//     nr: [1, 2],
//     fc: 17
// }, {
//     lngs: ["mnk"],
//     nr: [0, 1, 2],
//     fc: 18
// }, {
//     lngs: ["mt"],
//     nr: [1, 2, 11, 20],
//     fc: 19
// }, {
//     lngs: ["or"],
//     nr: [2, 1],
//     fc: 2
// }, {
//     lngs: ["ro"],
//     nr: [1, 2, 20],
//     fc: 20
// }, {
//     lngs: ["sl"],
//     nr: [5, 1, 2, 3],
//     fc: 21
// }, {
//     lngs: ["he", "iw"],
//     nr: [1, 2, 20, 21],
//     fc: 22
// }]
//   , RE = {
//     1: function(e) {
//         return +(e > 1)
//     },
//     2: function(e) {
//         return +(e != 1)
//     },
//     3: function(e) {
//         return 0
//     },
//     4: function(e) {
//         return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
//     },
//     5: function(e) {
//         return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
//     },
//     6: function(e) {
//         return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
//     },
//     7: function(e) {
//         return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
//     },
//     8: function(e) {
//         return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
//     },
//     9: function(e) {
//         return +(e >= 2)
//     },
//     10: function(e) {
//         return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
//     },
//     11: function(e) {
//         return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
//     },
//     12: function(e) {
//         return +(e % 10 != 1 || e % 100 == 11)
//     },
//     13: function(e) {
//         return +(e !== 0)
//     },
//     14: function(e) {
//         return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
//     },
//     15: function(e) {
//         return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
//     },
//     16: function(e) {
//         return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
//     },
//     17: function(e) {
//         return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
//     },
//     18: function(e) {
//         return e == 0 ? 0 : e == 1 ? 1 : 2
//     },
//     19: function(e) {
//         return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
//     },
//     20: function(e) {
//         return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
//     },
//     21: function(e) {
//         return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
//     },
//     22: function(e) {
//         return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
//     }
// };
// const AE = ["v1", "v2", "v3"]
//   , ME = ["v4"]
//   , dh = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     few: 3,
//     many: 4,
//     other: 5
// };
// function IE() {
//     const e = {};
//     return LE.forEach(t => {
//         t.lngs.forEach(n => {
//             e[n] = {
//                 numbers: t.nr,
//                 plurals: RE[t.fc]
//             }
//         }
//         )
//     }
//     ),
//     e
// }
// class DE {
//     constructor(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         this.languageUtils = t,
//         this.options = n,
//         this.logger = Rt.create("pluralResolver"),
//         (!this.options.compatibilityJSON || ME.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
//         this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
//         this.rules = IE()
//     }
//     addRule(t, n) {
//         this.rules[t] = n
//     }
//     getRule(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         if (this.shouldUseIntlApi())
//             try {
//                 return new Intl.PluralRules(Za(t === "dev" ? "en" : t),{
//                     type: n.ordinal ? "ordinal" : "cardinal"
//                 })
//             } catch {
//                 return
//             }
//         return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
//     }
//     needsPlural(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         const r = this.getRule(t, n);
//         return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1
//     }
//     getPluralFormsOfKey(t, n) {
//         let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//         return this.getSuffixes(t, r).map(o => `${n}${o}`)
//     }
//     getSuffixes(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         const r = this.getRule(t, n);
//         return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort( (o, i) => dh[o] - dh[i]).map(o => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map(o => this.getSuffix(t, o, n)) : []
//     }
//     getSuffix(t, n) {
//         let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//         const o = this.getRule(t, r);
//         return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : this.getSuffixRetroCompatible(o, n) : (this.logger.warn(`no plural rule found for: ${t}`),
//         "")
//     }
//     getSuffixRetroCompatible(t, n) {
//         const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
//         let o = t.numbers[r];
//         this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
//         const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
//         return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
//     }
//     shouldUseIntlApi() {
//         return !AE.includes(this.options.compatibilityJSON)
//     }
// }
// function ph(e, t, n) {
//     let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "."
//       , o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0
//       , i = EE(e, t, n);
//     return !i && o && typeof n == "string" && (i = nc(e, n, r),
//     i === void 0 && (i = nc(t, n, r))),
//     i
// }
// class $E {
//     constructor() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         this.logger = Rt.create("interpolator"),
//         this.options = t,
//         this.format = t.interpolation && t.interpolation.format || (n => n),
//         this.init(t)
//     }
//     init() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         t.interpolation || (t.interpolation = {
//             escapeValue: !0
//         });
//         const {escape: n, escapeValue: r, useRawValueToEscape: o, prefix: i, prefixEscaped: a, suffix: s, suffixEscaped: l, formatSeparator: u, unescapeSuffix: c, unescapePrefix: d, nestingPrefix: f, nestingPrefixEscaped: m, nestingSuffix: v, nestingSuffixEscaped: x, nestingOptionsSeparator: k, maxReplaces: h, alwaysFormat: p} = t.interpolation;
//         this.escape = n !== void 0 ? n : NE,
//         this.escapeValue = r !== void 0 ? r : !0,
//         this.useRawValueToEscape = o !== void 0 ? o : !1,
//         this.prefix = i ? vr(i) : a || "{{",
//         this.suffix = s ? vr(s) : l || "}}",
//         this.formatSeparator = u || ",",
//         this.unescapePrefix = c ? "" : d || "-",
//         this.unescapeSuffix = this.unescapePrefix ? "" : c || "",
//         this.nestingPrefix = f ? vr(f) : m || vr("$t("),
//         this.nestingSuffix = v ? vr(v) : x || vr(")"),
//         this.nestingOptionsSeparator = k || ",",
//         this.maxReplaces = h || 1e3,
//         this.alwaysFormat = p !== void 0 ? p : !1,
//         this.resetRegExp()
//     }
//     reset() {
//         this.options && this.init(this.options)
//     }
//     resetRegExp() {
//         const t = (n, r) => n && n.source === r ? (n.lastIndex = 0,
//         n) : new RegExp(r,"g");
//         this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
//         this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
//         this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
//     }
//     interpolate(t, n, r, o) {
//         let i, a, s;
//         const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
//         function u(v) {
//             return v.replace(/\$/g, "$$$$")
//         }
//         const c = v => {
//             if (v.indexOf(this.formatSeparator) < 0) {
//                 const p = ph(n, l, v, this.options.keySeparator, this.options.ignoreJSONStructure);
//                 return this.alwaysFormat ? this.format(p, void 0, r, {
//                     ...o,
//                     ...n,
//                     interpolationkey: v
//                 }) : p
//             }
//             const x = v.split(this.formatSeparator)
//               , k = x.shift().trim()
//               , h = x.join(this.formatSeparator).trim();
//             return this.format(ph(n, l, k, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
//                 ...o,
//                 ...n,
//                 interpolationkey: k
//             })
//         }
//         ;
//         this.resetRegExp();
//         const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler
//           , f = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
//         return [{
//             regex: this.regexpUnescape,
//             safeValue: v => u(v)
//         }, {
//             regex: this.regexp,
//             safeValue: v => this.escapeValue ? u(this.escape(v)) : u(v)
//         }].forEach(v => {
//             for (s = 0; i = v.regex.exec(t); ) {
//                 const x = i[1].trim();
//                 if (a = c(x),
//                 a === void 0)
//                     if (typeof d == "function") {
//                         const h = d(t, i, o);
//                         a = typeof h == "string" ? h : ""
//                     } else if (o && Object.prototype.hasOwnProperty.call(o, x))
//                         a = "";
//                     else if (f) {
//                         a = i[0];
//                         continue
//                     } else
//                         this.logger.warn(`missed to pass in variable ${x} for interpolating ${t}`),
//                         a = "";
//                 else
//                     typeof a != "string" && !this.useRawValueToEscape && (a = sh(a));
//                 const k = v.safeValue(a);
//                 if (t = t.replace(i[0], k),
//                 f ? (v.regex.lastIndex += a.length,
//                 v.regex.lastIndex -= i[0].length) : v.regex.lastIndex = 0,
//                 s++,
//                 s >= this.maxReplaces)
//                     break
//             }
//         }
//         ),
//         t
//     }
//     nest(t, n) {
//         let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, a;
//         function s(l, u) {
//             const c = this.nestingOptionsSeparator;
//             if (l.indexOf(c) < 0)
//                 return l;
//             const d = l.split(new RegExp(`${c}[ ]*{`));
//             let f = `{${d[1]}`;
//             l = d[0],
//             f = this.interpolate(f, a);
//             const m = f.match(/'/g)
//               , v = f.match(/"/g);
//             (m && m.length % 2 === 0 && !v || v.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
//             try {
//                 a = JSON.parse(f),
//                 u && (a = {
//                     ...u,
//                     ...a
//                 })
//             } catch (x) {
//                 return this.logger.warn(`failed parsing options string in nesting for key ${l}`, x),
//                 `${l}${c}${f}`
//             }
//             return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue,
//             l
//         }
//         for (; o = this.nestingRegexp.exec(t); ) {
//             let l = [];
//             a = {
//                 ...r
//             },
//             a = a.replace && typeof a.replace != "string" ? a.replace : a,
//             a.applyPostProcessor = !1,
//             delete a.defaultValue;
//             let u = !1;
//             if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
//                 const c = o[1].split(this.formatSeparator).map(d => d.trim());
//                 o[1] = c.shift(),
//                 l = c,
//                 u = !0
//             }
//             if (i = n(s.call(this, o[1].trim(), a), a),
//             i && o[0] === t && typeof i != "string")
//                 return i;
//             typeof i != "string" && (i = sh(i)),
//             i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),
//             i = ""),
//             u && (i = l.reduce( (c, d) => this.format(c, d, r.lng, {
//                 ...r,
//                 interpolationkey: o[1].trim()
//             }), i.trim())),
//             t = t.replace(o[0], i),
//             this.regexp.lastIndex = 0
//         }
//         return t
//     }
// }
// function zE(e) {
//     let t = e.toLowerCase().trim();
//     const n = {};
//     if (e.indexOf("(") > -1) {
//         const r = e.split("(");
//         t = r[0].toLowerCase().trim();
//         const o = r[1].substring(0, r[1].length - 1);
//         t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach(a => {
//             if (!a)
//                 return;
//             const [s,...l] = a.split(":")
//               , u = l.join(":").trim().replace(/^'+|'+$/g, "");
//             n[s.trim()] || (n[s.trim()] = u),
//             u === "false" && (n[s.trim()] = !1),
//             u === "true" && (n[s.trim()] = !0),
//             isNaN(u) || (n[s.trim()] = parseInt(u, 10))
//         }
//         )
//     }
//     return {
//         formatName: t,
//         formatOptions: n
//     }
// }
// function yr(e) {
//     const t = {};
//     return function(r, o, i) {
//         const a = o + JSON.stringify(i);
//         let s = t[a];
//         return s || (s = e(Za(o), i),
//         t[a] = s),
//         s(r)
//     }
// }
// class FE {
//     constructor() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
//         this.logger = Rt.create("formatter"),
//         this.options = t,
//         this.formats = {
//             number: yr( (n, r) => {
//                 const o = new Intl.NumberFormat(n,{
//                     ...r
//                 });
//                 return i => o.format(i)
//             }
//             ),
//             currency: yr( (n, r) => {
//                 const o = new Intl.NumberFormat(n,{
//                     ...r,
//                     style: "currency"
//                 });
//                 return i => o.format(i)
//             }
//             ),
//             datetime: yr( (n, r) => {
//                 const o = new Intl.DateTimeFormat(n,{
//                     ...r
//                 });
//                 return i => o.format(i)
//             }
//             ),
//             relativetime: yr( (n, r) => {
//                 const o = new Intl.RelativeTimeFormat(n,{
//                     ...r
//                 });
//                 return i => o.format(i, r.range || "day")
//             }
//             ),
//             list: yr( (n, r) => {
//                 const o = new Intl.ListFormat(n,{
//                     ...r
//                 });
//                 return i => o.format(i)
//             }
//             )
//         },
//         this.init(t)
//     }
//     init(t) {
//         const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
//             interpolation: {}
//         }).interpolation;
//         this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ","
//     }
//     add(t, n) {
//         this.formats[t.toLowerCase().trim()] = n
//     }
//     addCached(t, n) {
//         this.formats[t.toLowerCase().trim()] = yr(n)
//     }
//     format(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
//         return n.split(this.formatSeparator).reduce( (s, l) => {
//             const {formatName: u, formatOptions: c} = zE(l);
//             if (this.formats[u]) {
//                 let d = s;
//                 try {
//                     const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {}
//                       , m = f.locale || f.lng || o.locale || o.lng || r;
//                     d = this.formats[u](s, m, {
//                         ...c,
//                         ...o,
//                         ...f
//                     })
//                 } catch (f) {
//                     this.logger.warn(f)
//                 }
//                 return d
//             } else
//                 this.logger.warn(`there was no format function for ${u}`);
//             return s
//         }
//         , t)
//     }
// }
// function BE(e, t) {
//     e.pending[t] !== void 0 && (delete e.pending[t],
//     e.pendingCount--)
// }
// class UE extends js {
//     constructor(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
//         super(),
//         this.backend = t,
//         this.store = n,
//         this.services = r,
//         this.languageUtils = r.languageUtils,
//         this.options = o,
//         this.logger = Rt.create("backendConnector"),
//         this.waitingReads = [],
//         this.maxParallelReads = o.maxParallelReads || 10,
//         this.readingCalls = 0,
//         this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5,
//         this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350,
//         this.state = {},
//         this.queue = [],
//         this.backend && this.backend.init && this.backend.init(r, o.backend, o)
//     }
//     queueLoad(t, n, r, o) {
//         const i = {}
//           , a = {}
//           , s = {}
//           , l = {};
//         return t.forEach(u => {
//             let c = !0;
//             n.forEach(d => {
//                 const f = `${u}|${d}`;
//                 !r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? a[f] === void 0 && (a[f] = !0) : (this.state[f] = 1,
//                 c = !1,
//                 a[f] === void 0 && (a[f] = !0),
//                 i[f] === void 0 && (i[f] = !0),
//                 l[d] === void 0 && (l[d] = !0)))
//             }
//             ),
//             c || (s[u] = !0)
//         }
//         ),
//         (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
//             pending: a,
//             pendingCount: Object.keys(a).length,
//             loaded: {},
//             errors: [],
//             callback: o
//         }),
//         {
//             toLoad: Object.keys(i),
//             pending: Object.keys(a),
//             toLoadLanguages: Object.keys(s),
//             toLoadNamespaces: Object.keys(l)
//         }
//     }
//     loaded(t, n, r) {
//         const o = t.split("|")
//           , i = o[0]
//           , a = o[1];
//         n && this.emit("failedLoading", i, a, n),
//         r && this.store.addResourceBundle(i, a, r, void 0, void 0, {
//             skipCopy: !0
//         }),
//         this.state[t] = n ? -1 : 2;
//         const s = {};
//         this.queue.forEach(l => {
//             CE(l.loaded, [i], a),
//             BE(l, t),
//             n && l.errors.push(n),
//             l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(u => {
//                 s[u] || (s[u] = {});
//                 const c = l.loaded[u];
//                 c.length && c.forEach(d => {
//                     s[u][d] === void 0 && (s[u][d] = !0)
//                 }
//                 )
//             }
//             ),
//             l.done = !0,
//             l.errors.length ? l.callback(l.errors) : l.callback())
//         }
//         ),
//         this.emit("loaded", s),
//         this.queue = this.queue.filter(l => !l.done)
//     }
//     read(t, n, r) {
//         let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
//           , i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
//           , a = arguments.length > 5 ? arguments[5] : void 0;
//         if (!t.length)
//             return a(null, {});
//         if (this.readingCalls >= this.maxParallelReads) {
//             this.waitingReads.push({
//                 lng: t,
//                 ns: n,
//                 fcName: r,
//                 tried: o,
//                 wait: i,
//                 callback: a
//             });
//             return
//         }
//         this.readingCalls++;
//         const s = (u, c) => {
//             if (this.readingCalls--,
//             this.waitingReads.length > 0) {
//                 const d = this.waitingReads.shift();
//                 this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback)
//             }
//             if (u && c && o < this.maxRetries) {
//                 setTimeout( () => {
//                     this.read.call(this, t, n, r, o + 1, i * 2, a)
//                 }
//                 , i);
//                 return
//             }
//             a(u, c)
//         }
//           , l = this.backend[r].bind(this.backend);
//         if (l.length === 2) {
//             try {
//                 const u = l(t, n);
//                 u && typeof u.then == "function" ? u.then(c => s(null, c)).catch(s) : s(null, u)
//             } catch (u) {
//                 s(u)
//             }
//             return
//         }
//         return l(t, n, s)
//     }
//     prepareLoading(t, n) {
//         let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
//           , o = arguments.length > 3 ? arguments[3] : void 0;
//         if (!this.backend)
//             return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
//             o && o();
//         typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
//         typeof n == "string" && (n = [n]);
//         const i = this.queueLoad(t, n, r, o);
//         if (!i.toLoad.length)
//             return i.pending.length || o(),
//             null;
//         i.toLoad.forEach(a => {
//             this.loadOne(a)
//         }
//         )
//     }
//     load(t, n, r) {
//         this.prepareLoading(t, n, {}, r)
//     }
//     reload(t, n, r) {
//         this.prepareLoading(t, n, {
//             reload: !0
//         }, r)
//     }
//     loadOne(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
//         const r = t.split("|")
//           , o = r[0]
//           , i = r[1];
//         this.read(o, i, "read", void 0, void 0, (a, s) => {
//             a && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, a),
//             !a && s && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, s),
//             this.loaded(t, a, s)
//         }
//         )
//     }
//     saveMissing(t, n, r, o, i) {
//         let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}
//           , s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}
//         ;
//         if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
//             this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
//             return
//         }
//         if (!(r == null || r === "")) {
//             if (this.backend && this.backend.create) {
//                 const l = {
//                     ...a,
//                     isUpdate: i
//                 }
//                   , u = this.backend.create.bind(this.backend);
//                 if (u.length < 6)
//                     try {
//                         let c;
//                         u.length === 5 ? c = u(t, n, r, o, l) : c = u(t, n, r, o),
//                         c && typeof c.then == "function" ? c.then(d => s(null, d)).catch(s) : s(null, c)
//                     } catch (c) {
//                         s(c)
//                     }
//                 else
//                     u(t, n, r, o, s, l)
//             }
//             !t || !t[0] || this.store.addResource(t[0], n, r, o)
//         }
//     }
// }
// function hh() {
//     return {
//         debug: !1,
//         initImmediate: !0,
//         ns: ["translation"],
//         defaultNS: ["translation"],
//         fallbackLng: ["dev"],
//         fallbackNS: !1,
//         supportedLngs: !1,
//         nonExplicitSupportedLngs: !1,
//         load: "all",
//         preload: !1,
//         simplifyPluralSuffix: !0,
//         keySeparator: ".",
//         nsSeparator: ":",
//         pluralSeparator: "_",
//         contextSeparator: "_",
//         partialBundledLanguages: !1,
//         saveMissing: !1,
//         updateMissing: !1,
//         saveMissingTo: "fallback",
//         saveMissingPlurals: !0,
//         missingKeyHandler: !1,
//         missingInterpolationHandler: !1,
//         postProcess: !1,
//         postProcessPassResolved: !1,
//         returnNull: !1,
//         returnEmptyString: !0,
//         returnObjects: !1,
//         joinArrays: !1,
//         returnedObjectHandler: !1,
//         parseMissingKeyHandler: !1,
//         appendNamespaceToMissingKey: !1,
//         appendNamespaceToCIMode: !1,
//         overloadTranslationOptionHandler: function(t) {
//             let n = {};
//             if (typeof t[1] == "object" && (n = t[1]),
//             typeof t[1] == "string" && (n.defaultValue = t[1]),
//             typeof t[2] == "string" && (n.tDescription = t[2]),
//             typeof t[2] == "object" || typeof t[3] == "object") {
//                 const r = t[3] || t[2];
//                 Object.keys(r).forEach(o => {
//                     n[o] = r[o]
//                 }
//                 )
//             }
//             return n
//         },
//         interpolation: {
//             escapeValue: !0,
//             format: e => e,
//             prefix: "{{",
//             suffix: "}}",
//             formatSeparator: ",",
//             unescapePrefix: "-",
//             nestingPrefix: "$t(",
//             nestingSuffix: ")",
//             nestingOptionsSeparator: ",",
//             maxReplaces: 1e3,
//             skipOnVariables: !0
//         }
//     }
// }
// function mh(e) {
//     return typeof e.ns == "string" && (e.ns = [e.ns]),
//     typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
//     typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
//     e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
//     e
// }
// function ta() {}
// function HE(e) {
//     Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
//         typeof e[n] == "function" && (e[n] = e[n].bind(e))
//     }
//     )
// }
// class ai extends js {
//     constructor() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
//           , n = arguments.length > 1 ? arguments[1] : void 0;
//         if (super(),
//         this.options = mh(t),
//         this.services = {},
//         this.logger = Rt,
//         this.modules = {
//             external: []
//         },
//         HE(this),
//         n && !this.isInitialized && !t.isClone) {
//             if (!this.options.initImmediate)
//                 return this.init(t, n),
//                 this;
//             setTimeout( () => {
//                 this.init(t, n)
//             }
//             , 0)
//         }
//     }
//     init() {
//         var t = this;
//         let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
//           , r = arguments.length > 1 ? arguments[1] : void 0;
//         this.isInitializing = !0,
//         typeof n == "function" && (r = n,
//         n = {}),
//         !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
//         const o = hh();
//         this.options = {
//             ...o,
//             ...this.options,
//             ...mh(n)
//         },
//         this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
//             ...o.interpolation,
//             ...this.options.interpolation
//         }),
//         n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
//         n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
//         function i(c) {
//             return c ? typeof c == "function" ? new c : c : null
//         }
//         if (!this.options.isClone) {
//             this.modules.logger ? Rt.init(i(this.modules.logger), this.options) : Rt.init(null, this.options);
//             let c;
//             this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = FE);
//             const d = new fh(this.options);
//             this.store = new uh(this.options.resources,this.options);
//             const f = this.services;
//             f.logger = Rt,
//             f.resourceStore = this.store,
//             f.languageUtils = d,
//             f.pluralResolver = new DE(d,{
//                 prepend: this.options.pluralSeparator,
//                 compatibilityJSON: this.options.compatibilityJSON,
//                 simplifyPluralSuffix: this.options.simplifyPluralSuffix
//             }),
//             c && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(c),
//             f.formatter.init(f, this.options),
//             this.options.interpolation.format = f.formatter.format.bind(f.formatter)),
//             f.interpolator = new $E(this.options),
//             f.utils = {
//                 hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
//             },
//             f.backendConnector = new UE(i(this.modules.backend),f.resourceStore,f,this.options),
//             f.backendConnector.on("*", function(m) {
//                 for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
//                     x[k - 1] = arguments[k];
//                 t.emit(m, ...x)
//             }),
//             this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector),
//             f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)),
//             this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat),
//             f.i18nFormat.init && f.i18nFormat.init(this)),
//             this.translator = new es(this.services,this.options),
//             this.translator.on("*", function(m) {
//                 for (var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), k = 1; k < v; k++)
//                     x[k - 1] = arguments[k];
//                 t.emit(m, ...x)
//             }),
//             this.modules.external.forEach(m => {
//                 m.init && m.init(this)
//             }
//             )
//         }
//         if (this.format = this.options.interpolation.format,
//         r || (r = ta),
//         this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
//             const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
//             c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0])
//         }
//         !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
//         ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(c => {
//             this[c] = function() {
//                 return t.store[c](...arguments)
//             }
//         }
//         ),
//         ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(c => {
//             this[c] = function() {
//                 return t.store[c](...arguments),
//                 t
//             }
//         }
//         );
//         const l = go()
//           , u = () => {
//             const c = (d, f) => {
//                 this.isInitializing = !1,
//                 this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
//                 this.isInitialized = !0,
//                 this.options.isClone || this.logger.log("initialized", this.options),
//                 this.emit("initialized", this.options),
//                 l.resolve(f),
//                 r(d, f)
//             }
//             ;
//             if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
//                 return c(null, this.t.bind(this));
//             this.changeLanguage(this.options.lng, c)
//         }
//         ;
//         return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0),
//         l
//     }
//     loadResources(t) {
//         let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta;
//         const o = typeof t == "string" ? t : this.language;
//         if (typeof t == "function" && (r = t),
//         !this.options.resources || this.options.partialBundledLanguages) {
//             if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
//                 return r();
//             const i = []
//               , a = s => {
//                 if (!s || s === "cimode")
//                     return;
//                 this.services.languageUtils.toResolveHierarchy(s).forEach(u => {
//                     u !== "cimode" && i.indexOf(u) < 0 && i.push(u)
//                 }
//                 )
//             }
//             ;
//             o ? a(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => a(l)),
//             this.options.preload && this.options.preload.forEach(s => a(s)),
//             this.services.backendConnector.load(i, this.options.ns, s => {
//                 !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
//                 r(s)
//             }
//             )
//         } else
//             r(null)
//     }
//     reloadResources(t, n, r) {
//         const o = go();
//         return t || (t = this.languages),
//         n || (n = this.options.ns),
//         r || (r = ta),
//         this.services.backendConnector.reload(t, n, i => {
//             o.resolve(),
//             r(i)
//         }
//         ),
//         o
//     }
//     use(t) {
//         if (!t)
//             throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
//         if (!t.type)
//             throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
//         return t.type === "backend" && (this.modules.backend = t),
//         (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t),
//         t.type === "languageDetector" && (this.modules.languageDetector = t),
//         t.type === "i18nFormat" && (this.modules.i18nFormat = t),
//         t.type === "postProcessor" && B1.addPostProcessor(t),
//         t.type === "formatter" && (this.modules.formatter = t),
//         t.type === "3rdParty" && this.modules.external.push(t),
//         this
//     }
//     setResolvedLanguage(t) {
//         if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
//             for (let n = 0; n < this.languages.length; n++) {
//                 const r = this.languages[n];
//                 if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
//                     this.resolvedLanguage = r;
//                     break
//                 }
//             }
//     }
//     changeLanguage(t, n) {
//         var r = this;
//         this.isLanguageChangingTo = t;
//         const o = go();
//         this.emit("languageChanging", t);
//         const i = l => {
//             this.language = l,
//             this.languages = this.services.languageUtils.toResolveHierarchy(l),
//             this.resolvedLanguage = void 0,
//             this.setResolvedLanguage(l)
//         }
//           , a = (l, u) => {
//             u ? (i(u),
//             this.translator.changeLanguage(u),
//             this.isLanguageChangingTo = void 0,
//             this.emit("languageChanged", u),
//             this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0,
//             o.resolve(function() {
//                 return r.t(...arguments)
//             }),
//             n && n(l, function() {
//                 return r.t(...arguments)
//             })
//         }
//           , s = l => {
//             !t && !l && this.services.languageDetector && (l = []);
//             const u = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
//             u && (this.language || i(u),
//             this.translator.language || this.translator.changeLanguage(u),
//             this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)),
//             this.loadResources(u, c => {
//                 a(c, u)
//             }
//             )
//         }
//         ;
//         return !t && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(t),
//         o
//     }
//     getFixedT(t, n, r) {
//         var o = this;
//         const i = function(a, s) {
//             let l;
//             if (typeof s != "object") {
//                 for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
//                     c[d - 2] = arguments[d];
//                 l = o.options.overloadTranslationOptionHandler([a, s].concat(c))
//             } else
//                 l = {
//                     ...s
//                 };
//             l.lng = l.lng || i.lng,
//             l.lngs = l.lngs || i.lngs,
//             l.ns = l.ns || i.ns,
//             l.keyPrefix = l.keyPrefix || r || i.keyPrefix;
//             const f = o.options.keySeparator || ".";
//             let m;
//             return l.keyPrefix && Array.isArray(a) ? m = a.map(v => `${l.keyPrefix}${f}${v}`) : m = l.keyPrefix ? `${l.keyPrefix}${f}${a}` : a,
//             o.t(m, l)
//         };
//         return typeof t == "string" ? i.lng = t : i.lngs = t,
//         i.ns = n,
//         i.keyPrefix = r,
//         i
//     }
//     t() {
//         return this.translator && this.translator.translate(...arguments)
//     }
//     exists() {
//         return this.translator && this.translator.exists(...arguments)
//     }
//     setDefaultNamespace(t) {
//         this.options.defaultNS = t
//     }
//     hasLoadedNamespace(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         if (!this.isInitialized)
//             return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
//             !1;
//         if (!this.languages || !this.languages.length)
//             return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
//             !1;
//         const r = n.lng || this.resolvedLanguage || this.languages[0]
//           , o = this.options ? this.options.fallbackLng : !1
//           , i = this.languages[this.languages.length - 1];
//         if (r.toLowerCase() === "cimode")
//             return !0;
//         const a = (s, l) => {
//             const u = this.services.backendConnector.state[`${s}|${l}`];
//             return u === -1 || u === 2
//         }
//         ;
//         if (n.precheck) {
//             const s = n.precheck(this, a);
//             if (s !== void 0)
//                 return s
//         }
//         return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, t) && (!o || a(i, t)))
//     }
//     loadNamespaces(t, n) {
//         const r = go();
//         return this.options.ns ? (typeof t == "string" && (t = [t]),
//         t.forEach(o => {
//             this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
//         }
//         ),
//         this.loadResources(o => {
//             r.resolve(),
//             n && n(o)
//         }
//         ),
//         r) : (n && n(),
//         Promise.resolve())
//     }
//     loadLanguages(t, n) {
//         const r = go();
//         typeof t == "string" && (t = [t]);
//         const o = this.options.preload || []
//           , i = t.filter(a => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
//         return i.length ? (this.options.preload = o.concat(i),
//         this.loadResources(a => {
//             r.resolve(),
//             n && n(a)
//         }
//         ),
//         r) : (n && n(),
//         Promise.resolve())
//     }
//     dir(t) {
//         if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
//         !t)
//             return "rtl";
//         const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
//           , r = this.services && this.services.languageUtils || new fh(hh());
//         return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
//     }
//     static createInstance() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
//           , n = arguments.length > 1 ? arguments[1] : void 0;
//         return new ai(t,n)
//     }
//     cloneInstance() {
//         let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
//           , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta;
//         const r = t.forkResourceStore;
//         r && delete t.forkResourceStore;
//         const o = {
//             ...this.options,
//             ...t,
//             isClone: !0
//         }
//           , i = new ai(o);
//         return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)),
//         ["store", "services", "language"].forEach(s => {
//             i[s] = this[s]
//         }
//         ),
//         i.services = {
//             ...this.services
//         },
//         i.services.utils = {
//             hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
//         },
//         r && (i.store = new uh(this.store.data,o),
//         i.services.resourceStore = i.store),
//         i.translator = new es(i.services,o),
//         i.translator.on("*", function(s) {
//             for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
//                 u[c - 1] = arguments[c];
//             i.emit(s, ...u)
//         }),
//         i.init(o, n),
//         i.translator.options = o,
//         i.translator.backendConnector.services.utils = {
//             hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
//         },
//         i
//     }
//     toJSON() {
//         return {
//             options: this.options,
//             store: this.store,
//             language: this.language,
//             languages: this.languages,
//             resolvedLanguage: this.resolvedLanguage
//         }
//     }
// }
// const Be = ai.createInstance();
// Be.createInstance = ai.createInstance;
// Be.createInstance;
// Be.dir;
// Be.init;
// Be.loadResources;
// Be.reloadResources;
// Be.use;
// Be.changeLanguage;
// Be.getFixedT;
// Be.t;
// Be.exists;
// Be.setDefaultNamespace;
// Be.hasLoadedNamespace;
// Be.loadNamespaces;
// Be.loadLanguages;
// function rc(e) {
//     "@babel/helpers - typeof";
//     return rc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
//         return typeof t
//     }
//     : function(t) {
//         return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     }
//     ,
//     rc(e)
// }
// function U1() {
//     return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : rc(XMLHttpRequest)) === "object"
// }
// function WE(e) {
//     return !!e && typeof e.then == "function"
// }
// function VE(e) {
//     return WE(e) ? e : Promise.resolve(e)
// }
// function KE(e) {
//     throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
// }
// var oc = {
//     exports: {}
// }, na = {
//     exports: {}
// }, gh;
// function GE() {
//     return gh || (gh = 1,
//     function(e, t) {
//         var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof _t < "u" && _t
//           , r = function() {
//             function i() {
//                 this.fetch = !1,
//                 this.DOMException = n.DOMException
//             }
//             return i.prototype = n,
//             new i
//         }();
//         (function(i) {
//             (function(a) {
//                 var s = typeof i < "u" && i || typeof self < "u" && self || typeof s < "u" && s
//                   , l = {
//                     searchParams: "URLSearchParams"in s,
//                     iterable: "Symbol"in s && "iterator"in Symbol,
//                     blob: "FileReader"in s && "Blob"in s && function() {
//                         try {
//                             return new Blob,
//                             !0
//                         } catch {
//                             return !1
//                         }
//                     }(),
//                     formData: "FormData"in s,
//                     arrayBuffer: "ArrayBuffer"in s
//                 };
//                 function u(S) {
//                     return S && DataView.prototype.isPrototypeOf(S)
//                 }
//                 if (l.arrayBuffer)
//                     var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
//                       , d = ArrayBuffer.isView || function(S) {
//                         return S && c.indexOf(Object.prototype.toString.call(S)) > -1
//                     }
//                     ;
//                 function f(S) {
//                     if (typeof S != "string" && (S = String(S)),
//                     /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(S) || S === "")
//                         throw new TypeError('Invalid character in header field name: "' + S + '"');
//                     return S.toLowerCase()
//                 }
//                 function m(S) {
//                     return typeof S != "string" && (S = String(S)),
//                     S
//                 }
//                 function v(S) {
//                     var P = {
//                         next: function() {
//                             var M = S.shift();
//                             return {
//                                 done: M === void 0,
//                                 value: M
//                             }
//                         }
//                     };
//                     return l.iterable && (P[Symbol.iterator] = function() {
//                         return P
//                     }
//                     ),
//                     P
//                 }
//                 function x(S) {
//                     this.map = {},
//                     S instanceof x ? S.forEach(function(P, M) {
//                         this.append(M, P)
//                     }, this) : Array.isArray(S) ? S.forEach(function(P) {
//                         this.append(P[0], P[1])
//                     }, this) : S && Object.getOwnPropertyNames(S).forEach(function(P) {
//                         this.append(P, S[P])
//                     }, this)
//                 }
//                 x.prototype.append = function(S, P) {
//                     S = f(S),
//                     P = m(P);
//                     var M = this.map[S];
//                     this.map[S] = M ? M + ", " + P : P
//                 }
//                 ,
//                 x.prototype.delete = function(S) {
//                     delete this.map[f(S)]
//                 }
//                 ,
//                 x.prototype.get = function(S) {
//                     return S = f(S),
//                     this.has(S) ? this.map[S] : null
//                 }
//                 ,
//                 x.prototype.has = function(S) {
//                     return this.map.hasOwnProperty(f(S))
//                 }
//                 ,
//                 x.prototype.set = function(S, P) {
//                     this.map[f(S)] = m(P)
//                 }
//                 ,
//                 x.prototype.forEach = function(S, P) {
//                     for (var M in this.map)
//                         this.map.hasOwnProperty(M) && S.call(P, this.map[M], M, this)
//                 }
//                 ,
//                 x.prototype.keys = function() {
//                     var S = [];
//                     return this.forEach(function(P, M) {
//                         S.push(M)
//                     }),
//                     v(S)
//                 }
//                 ,
//                 x.prototype.values = function() {
//                     var S = [];
//                     return this.forEach(function(P) {
//                         S.push(P)
//                     }),
//                     v(S)
//                 }
//                 ,
//                 x.prototype.entries = function() {
//                     var S = [];
//                     return this.forEach(function(P, M) {
//                         S.push([M, P])
//                     }),
//                     v(S)
//                 }
//                 ,
//                 l.iterable && (x.prototype[Symbol.iterator] = x.prototype.entries);
//                 function k(S) {
//                     if (S.bodyUsed)
//                         return Promise.reject(new TypeError("Already read"));
//                     S.bodyUsed = !0
//                 }
//                 function h(S) {
//                     return new Promise(function(P, M) {
//                         S.onload = function() {
//                             P(S.result)
//                         }
//                         ,
//                         S.onerror = function() {
//                             M(S.error)
//                         }
//                     }
//                     )
//                 }
//                 function p(S) {
//                     var P = new FileReader
//                       , M = h(P);
//                     return P.readAsArrayBuffer(S),
//                     M
//                 }
//                 function w(S) {
//                     var P = new FileReader
//                       , M = h(P);
//                     return P.readAsText(S),
//                     M
//                 }
//                 function b(S) {
//                     for (var P = new Uint8Array(S), M = new Array(P.length), E = 0; E < P.length; E++)
//                         M[E] = String.fromCharCode(P[E]);
//                     return M.join("")
//                 }
//                 function O(S) {
//                     if (S.slice)
//                         return S.slice(0);
//                     var P = new Uint8Array(S.byteLength);
//                     return P.set(new Uint8Array(S)),
//                     P.buffer
//                 }
//                 function C() {
//                     return this.bodyUsed = !1,
//                     this._initBody = function(S) {
//                         this.bodyUsed = this.bodyUsed,
//                         this._bodyInit = S,
//                         S ? typeof S == "string" ? this._bodyText = S : l.blob && Blob.prototype.isPrototypeOf(S) ? this._bodyBlob = S : l.formData && FormData.prototype.isPrototypeOf(S) ? this._bodyFormData = S : l.searchParams && URLSearchParams.prototype.isPrototypeOf(S) ? this._bodyText = S.toString() : l.arrayBuffer && l.blob && u(S) ? (this._bodyArrayBuffer = O(S.buffer),
//                         this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(S) || d(S)) ? this._bodyArrayBuffer = O(S) : this._bodyText = S = Object.prototype.toString.call(S) : this._bodyText = "",
//                         this.headers.get("content-type") || (typeof S == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(S) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
//                     }
//                     ,
//                     l.blob && (this.blob = function() {
//                         var S = k(this);
//                         if (S)
//                             return S;
//                         if (this._bodyBlob)
//                             return Promise.resolve(this._bodyBlob);
//                         if (this._bodyArrayBuffer)
//                             return Promise.resolve(new Blob([this._bodyArrayBuffer]));
//                         if (this._bodyFormData)
//                             throw new Error("could not read FormData body as blob");
//                         return Promise.resolve(new Blob([this._bodyText]))
//                     }
//                     ,
//                     this.arrayBuffer = function() {
//                         if (this._bodyArrayBuffer) {
//                             var S = k(this);
//                             return S || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
//                         } else
//                             return this.blob().then(p)
//                     }
//                     ),
//                     this.text = function() {
//                         var S = k(this);
//                         if (S)
//                             return S;
//                         if (this._bodyBlob)
//                             return w(this._bodyBlob);
//                         if (this._bodyArrayBuffer)
//                             return Promise.resolve(b(this._bodyArrayBuffer));
//                         if (this._bodyFormData)
//                             throw new Error("could not read FormData body as text");
//                         return Promise.resolve(this._bodyText)
//                     }
//                     ,
//                     l.formData && (this.formData = function() {
//                         return this.text().then(D)
//                     }
//                     ),
//                     this.json = function() {
//                         return this.text().then(JSON.parse)
//                     }
//                     ,
//                     this
//                 }
//                 var N = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
//                 function _(S) {
//                     var P = S.toUpperCase();
//                     return N.indexOf(P) > -1 ? P : S
//                 }
//                 function z(S, P) {
//                     if (!(this instanceof z))
//                         throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
//                     P = P || {};
//                     var M = P.body;
//                     if (S instanceof z) {
//                         if (S.bodyUsed)
//                             throw new TypeError("Already read");
//                         this.url = S.url,
//                         this.credentials = S.credentials,
//                         P.headers || (this.headers = new x(S.headers)),
//                         this.method = S.method,
//                         this.mode = S.mode,
//                         this.signal = S.signal,
//                         !M && S._bodyInit != null && (M = S._bodyInit,
//                         S.bodyUsed = !0)
//                     } else
//                         this.url = String(S);
//                     if (this.credentials = P.credentials || this.credentials || "same-origin",
//                     (P.headers || !this.headers) && (this.headers = new x(P.headers)),
//                     this.method = _(P.method || this.method || "GET"),
//                     this.mode = P.mode || this.mode || null,
//                     this.signal = P.signal || this.signal,
//                     this.referrer = null,
//                     (this.method === "GET" || this.method === "HEAD") && M)
//                         throw new TypeError("Body not allowed for GET or HEAD requests");
//                     if (this._initBody(M),
//                     (this.method === "GET" || this.method === "HEAD") && (P.cache === "no-store" || P.cache === "no-cache")) {
//                         var E = /([?&])_=[^&]*/;
//                         if (E.test(this.url))
//                             this.url = this.url.replace(E, "$1_=" + new Date().getTime());
//                         else {
//                             var j = /\?/;
//                             this.url += (j.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
//                         }
//                     }
//                 }
//                 z.prototype.clone = function() {
//                     return new z(this,{
//                         body: this._bodyInit
//                     })
//                 }
//                 ;
//                 function D(S) {
//                     var P = new FormData;
//                     return S.trim().split("&").forEach(function(M) {
//                         if (M) {
//                             var E = M.split("=")
//                               , j = E.shift().replace(/\+/g, " ")
//                               , L = E.join("=").replace(/\+/g, " ");
//                             P.append(decodeURIComponent(j), decodeURIComponent(L))
//                         }
//                     }),
//                     P
//                 }
//                 function A(S) {
//                     var P = new x
//                       , M = S.replace(/\r?\n[\t ]+/g, " ");
//                     return M.split("\r").map(function(E) {
//                         return E.indexOf(`
// `) === 0 ? E.substr(1, E.length) : E
//                     }).forEach(function(E) {
//                         var j = E.split(":")
//                           , L = j.shift().trim();
//                         if (L) {
//                             var U = j.join(":").trim();
//                             P.append(L, U)
//                         }
//                     }),
//                     P
//                 }
//                 C.call(z.prototype);
//                 function T(S, P) {
//                     if (!(this instanceof T))
//                         throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
//                     P || (P = {}),
//                     this.type = "default",
//                     this.status = P.status === void 0 ? 200 : P.status,
//                     this.ok = this.status >= 200 && this.status < 300,
//                     this.statusText = P.statusText === void 0 ? "" : "" + P.statusText,
//                     this.headers = new x(P.headers),
//                     this.url = P.url || "",
//                     this._initBody(S)
//                 }
//                 C.call(T.prototype),
//                 T.prototype.clone = function() {
//                     return new T(this._bodyInit,{
//                         status: this.status,
//                         statusText: this.statusText,
//                         headers: new x(this.headers),
//                         url: this.url
//                     })
//                 }
//                 ,
//                 T.error = function() {
//                     var S = new T(null,{
//                         status: 0,
//                         statusText: ""
//                     });
//                     return S.type = "error",
//                     S
//                 }
//                 ;
//                 var B = [301, 302, 303, 307, 308];
//                 T.redirect = function(S, P) {
//                     if (B.indexOf(P) === -1)
//                         throw new RangeError("Invalid status code");
//                     return new T(null,{
//                         status: P,
//                         headers: {
//                             location: S
//                         }
//                     })
//                 }
//                 ,
//                 a.DOMException = s.DOMException;
//                 try {
//                     new a.DOMException
//                 } catch {
//                     a.DOMException = function(P, M) {
//                         this.message = P,
//                         this.name = M;
//                         var E = Error(P);
//                         this.stack = E.stack
//                     }
//                     ,
//                     a.DOMException.prototype = Object.create(Error.prototype),
//                     a.DOMException.prototype.constructor = a.DOMException
//                 }
//                 function I(S, P) {
//                     return new Promise(function(M, E) {
//                         var j = new z(S,P);
//                         if (j.signal && j.signal.aborted)
//                             return E(new a.DOMException("Aborted","AbortError"));
//                         var L = new XMLHttpRequest;
//                         function U() {
//                             L.abort()
//                         }
//                         L.onload = function() {
//                             var H = {
//                                 status: L.status,
//                                 statusText: L.statusText,
//                                 headers: A(L.getAllResponseHeaders() || "")
//                             };
//                             H.url = "responseURL"in L ? L.responseURL : H.headers.get("X-Request-URL");
//                             var V = "response"in L ? L.response : L.responseText;
//                             setTimeout(function() {
//                                 M(new T(V,H))
//                             }, 0)
//                         }
//                         ,
//                         L.onerror = function() {
//                             setTimeout(function() {
//                                 E(new TypeError("Network request failed"))
//                             }, 0)
//                         }
//                         ,
//                         L.ontimeout = function() {
//                             setTimeout(function() {
//                                 E(new TypeError("Network request failed"))
//                             }, 0)
//                         }
//                         ,
//                         L.onabort = function() {
//                             setTimeout(function() {
//                                 E(new a.DOMException("Aborted","AbortError"))
//                             }, 0)
//                         }
//                         ;
//                         function K(H) {
//                             try {
//                                 return H === "" && s.location.href ? s.location.href : H
//                             } catch {
//                                 return H
//                             }
//                         }
//                         L.open(j.method, K(j.url), !0),
//                         j.credentials === "include" ? L.withCredentials = !0 : j.credentials === "omit" && (L.withCredentials = !1),
//                         "responseType"in L && (l.blob ? L.responseType = "blob" : l.arrayBuffer && j.headers.get("Content-Type") && j.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (L.responseType = "arraybuffer")),
//                         P && typeof P.headers == "object" && !(P.headers instanceof x) ? Object.getOwnPropertyNames(P.headers).forEach(function(H) {
//                             L.setRequestHeader(H, m(P.headers[H]))
//                         }) : j.headers.forEach(function(H, V) {
//                             L.setRequestHeader(V, H)
//                         }),
//                         j.signal && (j.signal.addEventListener("abort", U),
//                         L.onreadystatechange = function() {
//                             L.readyState === 4 && j.signal.removeEventListener("abort", U)
//                         }
//                         ),
//                         L.send(typeof j._bodyInit > "u" ? null : j._bodyInit)
//                     }
//                     )
//                 }
//                 return I.polyfill = !0,
//                 s.fetch || (s.fetch = I,
//                 s.Headers = x,
//                 s.Request = z,
//                 s.Response = T),
//                 a.Headers = x,
//                 a.Request = z,
//                 a.Response = T,
//                 a.fetch = I,
//                 a
//             }
//             )({})
//         }
//         )(r),
//         r.fetch.ponyfill = !0,
//         delete r.fetch.polyfill;
//         var o = n.fetch ? n : r;
//         t = o.fetch,
//         t.default = o.fetch,
//         t.fetch = o.fetch,
//         t.Headers = o.Headers,
//         t.Request = o.Request,
//         t.Response = o.Response,
//         e.exports = t
//     }(na, na.exports)),
//     na.exports
// }
// (function(e, t) {
//     var n;
//     if (typeof fetch == "function" && (typeof _t < "u" && _t.fetch ? n = _t.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch),
//     typeof KE < "u" && typeof window > "u") {
//         var r = n || GE();
//         r.default && (r = r.default),
//         t.default = r,
//         e.exports = t.default
//     }
// }
// )(oc, oc.exports);
// var H1 = oc.exports;
// const W1 = Mn(H1)
//   , vh = q1({
//     __proto__: null,
//     default: W1
// }, [H1]);
// function yh(e, t) {
//     var n = Object.keys(e);
//     if (Object.getOwnPropertySymbols) {
//         var r = Object.getOwnPropertySymbols(e);
//         t && (r = r.filter(function(o) {
//             return Object.getOwnPropertyDescriptor(e, o).enumerable
//         })),
//         n.push.apply(n, r)
//     }
//     return n
// }
// function wh(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t] != null ? arguments[t] : {};
//         t % 2 ? yh(Object(n), !0).forEach(function(r) {
//             YE(e, r, n[r])
//         }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yh(Object(n)).forEach(function(r) {
//             Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
//         })
//     }
//     return e
// }
// function YE(e, t, n) {
//     return t = XE(t),
//     t in e ? Object.defineProperty(e, t, {
//         value: n,
//         enumerable: !0,
//         configurable: !0,
//         writable: !0
//     }) : e[t] = n,
//     e
// }
// function XE(e) {
//     var t = qE(e, "string");
//     return cr(t) == "symbol" ? t : String(t)
// }
// function qE(e, t) {
//     if (cr(e) != "object" || !e)
//         return e;
//     var n = e[Symbol.toPrimitive];
//     if (n !== void 0) {
//         var r = n.call(e, t || "default");
//         if (cr(r) != "object")
//             return r;
//         throw new TypeError("@@toPrimitive must return a primitive value.")
//     }
//     return (t === "string" ? String : Number)(e)
// }
// function cr(e) {
//     "@babel/helpers - typeof";
//     return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
//         return typeof t
//     }
//     : function(t) {
//         return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     }
//     ,
//     cr(e)
// }
// var Kt;
// typeof fetch == "function" && (typeof global < "u" && global.fetch ? Kt = global.fetch : typeof window < "u" && window.fetch ? Kt = window.fetch : Kt = fetch);
// var si;
// U1() && (typeof global < "u" && global.XMLHttpRequest ? si = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (si = window.XMLHttpRequest));
// var ts;
// typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? ts = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (ts = window.ActiveXObject));
// !Kt && vh && !si && !ts && (Kt = W1 || vh);
// typeof Kt != "function" && (Kt = void 0);
// var ic = function(t, n) {
//     if (n && cr(n) === "object") {
//         var r = "";
//         for (var o in n)
//             r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
//         if (!r)
//             return t;
//         t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1)
//     }
//     return t
// }
//   , xh = function(t, n, r, o) {
//     var i = function(l) {
//         if (!l.ok)
//             return r(l.statusText || "Error", {
//                 status: l.status
//             });
//         l.text().then(function(u) {
//             r(null, {
//                 status: l.status,
//                 data: u
//             })
//         }).catch(r)
//     };
//     if (o) {
//         var a = o(t, n);
//         if (a instanceof Promise) {
//             a.then(i).catch(r);
//             return
//         }
//     }
//     typeof fetch == "function" ? fetch(t, n).then(i).catch(r) : Kt(t, n).then(i).catch(r)
// }
//   , bh = !1
//   , QE = function(t, n, r, o) {
//     t.queryStringParams && (n = ic(n, t.queryStringParams));
//     var i = wh({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
//     typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (i["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")),
//     r && (i["Content-Type"] = "application/json");
//     var a = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions
//       , s = wh({
//         method: r ? "POST" : "GET",
//         body: r ? t.stringify(r) : void 0,
//         headers: i
//     }, bh ? {} : a)
//       , l = typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
//     try {
//         xh(n, s, o, l)
//     } catch (u) {
//         if (!a || Object.keys(a).length === 0 || !u.message || u.message.indexOf("not implemented") < 0)
//             return o(u);
//         try {
//             Object.keys(a).forEach(function(c) {
//                 delete s[c]
//             }),
//             xh(n, s, o, l),
//             bh = !0
//         } catch (c) {
//             o(c)
//         }
//     }
// }
//   , JE = function(t, n, r, o) {
//     r && cr(r) === "object" && (r = ic("", r).slice(1)),
//     t.queryStringParams && (n = ic(n, t.queryStringParams));
//     try {
//         var i;
//         si ? i = new si : i = new ts("MSXML2.XMLHTTP.3.0"),
//         i.open(r ? "POST" : "GET", n, 1),
//         t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
//         i.withCredentials = !!t.withCredentials,
//         r && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
//         i.overrideMimeType && i.overrideMimeType("application/json");
//         var a = t.customHeaders;
//         if (a = typeof a == "function" ? a() : a,
//         a)
//             for (var s in a)
//                 i.setRequestHeader(s, a[s]);
//         i.onreadystatechange = function() {
//             i.readyState > 3 && o(i.status >= 400 ? i.statusText : null, {
//                 status: i.status,
//                 data: i.responseText
//             })
//         }
//         ,
//         i.send(r)
//     } catch (l) {
//         console && console.log(l)
//     }
// }
//   , ZE = function(t, n, r, o) {
//     if (typeof r == "function" && (o = r,
//     r = void 0),
//     o = o || function() {}
//     ,
//     Kt && n.indexOf("file:") !== 0)
//         return QE(t, n, r, o);
//     if (U1() || typeof ActiveXObject == "function")
//         return JE(t, n, r, o);
//     o(new Error("No fetch and no xhr implementation found!"))
// };
// function li(e) {
//     "@babel/helpers - typeof";
//     return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
//         return typeof t
//     }
//     : function(t) {
//         return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
//     }
//     ,
//     li(e)
// }
// function Sh(e, t) {
//     var n = Object.keys(e);
//     if (Object.getOwnPropertySymbols) {
//         var r = Object.getOwnPropertySymbols(e);
//         t && (r = r.filter(function(o) {
//             return Object.getOwnPropertyDescriptor(e, o).enumerable
//         })),
//         n.push.apply(n, r)
//     }
//     return n
// }
// function Nl(e) {
//     for (var t = 1; t < arguments.length; t++) {
//         var n = arguments[t] != null ? arguments[t] : {};
//         t % 2 ? Sh(Object(n), !0).forEach(function(r) {
//             V1(e, r, n[r])
//         }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sh(Object(n)).forEach(function(r) {
//             Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
//         })
//     }
//     return e
// }
// function e4(e, t) {
//     if (!(e instanceof t))
//         throw new TypeError("Cannot call a class as a function")
// }
// function t4(e, t) {
//     for (var n = 0; n < t.length; n++) {
//         var r = t[n];
//         r.enumerable = r.enumerable || !1,
//         r.configurable = !0,
//         "value"in r && (r.writable = !0),
//         Object.defineProperty(e, K1(r.key), r)
//     }
// }
// function n4(e, t, n) {
//     return t && t4(e.prototype, t),
//     Object.defineProperty(e, "prototype", {
//         writable: !1
//     }),
//     e
// }
// function V1(e, t, n) {
//     return t = K1(t),
//     t in e ? Object.defineProperty(e, t, {
//         value: n,
//         enumerable: !0,
//         configurable: !0,
//         writable: !0
//     }) : e[t] = n,
//     e
// }
// function K1(e) {
//     var t = r4(e, "string");
//     return li(t) == "symbol" ? t : String(t)
// }
// function r4(e, t) {
//     if (li(e) != "object" || !e)
//         return e;
//     var n = e[Symbol.toPrimitive];
//     if (n !== void 0) {
//         var r = n.call(e, t || "default");
//         if (li(r) != "object")
//             return r;
//         throw new TypeError("@@toPrimitive must return a primitive value.")
//     }
//     return (t === "string" ? String : Number)(e)
// }
// var o4 = function() {
//     return {
//         loadPath: "/locales/{{lng}}/{{ns}}.json",
//         addPath: "/locales/add/{{lng}}/{{ns}}",
//         parse: function(n) {
//             return JSON.parse(n)
//         },
//         stringify: JSON.stringify,
//         parsePayload: function(n, r, o) {
//             return V1({}, r, o || "")
//         },
//         parseLoadPayload: function(n, r) {},
//         request: ZE,
//         reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
//         customHeaders: {},
//         queryStringParams: {},
//         crossDomain: !1,
//         withCredentials: !1,
//         overrideMimeType: !1,
//         requestOptions: {
//             mode: "cors",
//             credentials: "same-origin",
//             cache: "default"
//         }
//     }
// }
//   , G1 = function() {
//     function e(t) {
//         var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
//           , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//         e4(this, e),
//         this.services = t,
//         this.options = n,
//         this.allOptions = r,
//         this.type = "backend",
//         this.init(t, n, r)
//     }
//     return n4(e, [{
//         key: "init",
//         value: function(n) {
//             var r = this
//               , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
//               , i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//             this.services = n,
//             this.options = Nl(Nl(Nl({}, o4()), this.options || {}), o),
//             this.allOptions = i,
//             this.services && this.options.reloadInterval && setInterval(function() {
//                 return r.reload()
//             }, this.options.reloadInterval)
//         }
//     }, {
//         key: "readMulti",
//         value: function(n, r, o) {
//             this._readAny(n, n, r, r, o)
//         }
//     }, {
//         key: "read",
//         value: function(n, r, o) {
//             this._readAny([n], n, [r], r, o)
//         }
//     }, {
//         key: "_readAny",
//         value: function(n, r, o, i, a) {
//             var s = this
//               , l = this.options.loadPath;
//             typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, o)),
//             l = VE(l),
//             l.then(function(u) {
//                 if (!u)
//                     return a(null, {});
//                 var c = s.services.interpolator.interpolate(u, {
//                     lng: n.join("+"),
//                     ns: o.join("+")
//                 });
//                 s.loadUrl(c, a, r, i)
//             })
//         }
//     }, {
//         key: "loadUrl",
//         value: function(n, r, o, i) {
//             var a = this
//               , s = typeof o == "string" ? [o] : o
//               , l = typeof i == "string" ? [i] : i
//               , u = this.options.parseLoadPayload(s, l);
//             this.options.request(this.options, n, u, function(c, d) {
//                 if (d && (d.status >= 500 && d.status < 600 || !d.status))
//                     return r("failed loading " + n + "; status code: " + d.status, !0);
//                 if (d && d.status >= 400 && d.status < 500)
//                     return r("failed loading " + n + "; status code: " + d.status, !1);
//                 if (!d && c && c.message && c.message.indexOf("Failed to fetch") > -1)
//                     return r("failed loading " + n + ": " + c.message, !0);
//                 if (c)
//                     return r(c, !1);
//                 var f, m;
//                 try {
//                     typeof d.data == "string" ? f = a.options.parse(d.data, o, i) : f = d.data
//                 } catch {
//                     m = "failed parsing " + n + " to json"
//                 }
//                 if (m)
//                     return r(m, !1);
//                 r(null, f)
//             })
//         }
//     }, {
//         key: "create",
//         value: function(n, r, o, i, a) {
//             var s = this;
//             if (this.options.addPath) {
//                 typeof n == "string" && (n = [n]);
//                 var l = this.options.parsePayload(r, o, i)
//                   , u = 0
//                   , c = []
//                   , d = [];
//                 n.forEach(function(f) {
//                     var m = s.options.addPath;
//                     typeof s.options.addPath == "function" && (m = s.options.addPath(f, r));
//                     var v = s.services.interpolator.interpolate(m, {
//                         lng: f,
//                         ns: r
//                     });
//                     s.options.request(s.options, v, l, function(x, k) {
//                         u += 1,
//                         c.push(x),
//                         d.push(k),
//                         u === n.length && typeof a == "function" && a(c, d)
//                     })
//                 })
//             }
//         }
//     }, {
//         key: "reload",
//         value: function() {
//             var n = this
//               , r = this.services
//               , o = r.backendConnector
//               , i = r.languageUtils
//               , a = r.logger
//               , s = o.language;
//             if (!(s && s.toLowerCase() === "cimode")) {
//                 var l = []
//                   , u = function(d) {
//                     var f = i.toResolveHierarchy(d);
//                     f.forEach(function(m) {
//                         l.indexOf(m) < 0 && l.push(m)
//                     })
//                 };
//                 u(s),
//                 this.allOptions.preload && this.allOptions.preload.forEach(function(c) {
//                     return u(c)
//                 }),
//                 l.forEach(function(c) {
//                     n.allOptions.ns.forEach(function(d) {
//                         o.read(c, d, "read", null, null, function(f, m) {
//                             f && a.warn("loading namespace ".concat(d, " for language ").concat(c, " failed"), f),
//                             !f && m && a.log("loaded namespace ".concat(d, " for language ").concat(c), m),
//                             o.loaded("".concat(c, "|").concat(d), f, m)
//                         })
//                     })
//                 })
//             }
//         }
//     }]),
//     e
// }();
// G1.type = "backend";
// const {slice: i4, forEach: a4} = [];
// function s4(e) {
//     return a4.call(i4.call(arguments, 1), t => {
//         if (t)
//             for (const n in t)
//                 e[n] === void 0 && (e[n] = t[n])
//     }
//     ),
//     e
// }
// const kh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
//   , l4 = (e, t, n) => {
//     const r = n || {};
//     r.path = r.path || "/";
//     const o = encodeURIComponent(t);
//     let i = `${e}=${o}`;
//     if (r.maxAge > 0) {
//         const a = r.maxAge - 0;
//         if (Number.isNaN(a))
//             throw new Error("maxAge should be a Number");
//         i += `; Max-Age=${Math.floor(a)}`
//     }
//     if (r.domain) {
//         if (!kh.test(r.domain))
//             throw new TypeError("option domain is invalid");
//         i += `; Domain=${r.domain}`
//     }
//     if (r.path) {
//         if (!kh.test(r.path))
//             throw new TypeError("option path is invalid");
//         i += `; Path=${r.path}`
//     }
//     if (r.expires) {
//         if (typeof r.expires.toUTCString != "function")
//             throw new TypeError("option expires is invalid");
//         i += `; Expires=${r.expires.toUTCString()}`
//     }
//     if (r.httpOnly && (i += "; HttpOnly"),
//     r.secure && (i += "; Secure"),
//     r.sameSite)
//         switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
//         case !0:
//             i += "; SameSite=Strict";
//             break;
//         case "lax":
//             i += "; SameSite=Lax";
//             break;
//         case "strict":
//             i += "; SameSite=Strict";
//             break;
//         case "none":
//             i += "; SameSite=None";
//             break;
//         default:
//             throw new TypeError("option sameSite is invalid")
//         }
//     return i
// }
//   , Ch = {
//     create(e, t, n, r) {
//         let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
//             path: "/",
//             sameSite: "strict"
//         };
//         n && (o.expires = new Date,
//         o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)),
//         r && (o.domain = r),
//         document.cookie = l4(e, encodeURIComponent(t), o)
//     },
//     read(e) {
//         const t = `${e}=`
//           , n = document.cookie.split(";");
//         for (let r = 0; r < n.length; r++) {
//             let o = n[r];
//             for (; o.charAt(0) === " "; )
//                 o = o.substring(1, o.length);
//             if (o.indexOf(t) === 0)
//                 return o.substring(t.length, o.length)
//         }
//         return null
//     },
//     remove(e) {
//         this.create(e, "", -1)
//     }
// };
// var u4 = {
//     name: "cookie",
//     lookup(e) {
//         let {lookupCookie: t} = e;
//         if (t && typeof document < "u")
//             return Ch.read(t) || void 0
//     },
//     cacheUserLanguage(e, t) {
//         let {lookupCookie: n, cookieMinutes: r, cookieDomain: o, cookieOptions: i} = t;
//         n && typeof document < "u" && Ch.create(n, e, r, o, i)
//     }
// }
//   , c4 = {
//     name: "querystring",
//     lookup(e) {
//         var r;
//         let {lookupQuerystring: t} = e, n;
//         if (typeof window < "u") {
//             let {search: o} = window.location;
//             !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
//             const a = o.substring(1).split("&");
//             for (let s = 0; s < a.length; s++) {
//                 const l = a[s].indexOf("=");
//                 l > 0 && a[s].substring(0, l) === t && (n = a[s].substring(l + 1))
//             }
//         }
//         return n
//     }
// };
// let vo = null;
// const Eh = () => {
//     if (vo !== null)
//         return vo;
//     try {
//         vo = window !== "undefined" && window.localStorage !== null;
//         const e = "i18next.translate.boo";
//         window.localStorage.setItem(e, "foo"),
//         window.localStorage.removeItem(e)
//     } catch {
//         vo = !1
//     }
//     return vo
// }
// ;
// var f4 = {
//     name: "localStorage",
//     lookup(e) {
//         let {lookupLocalStorage: t} = e;
//         if (t && Eh())
//             return window.localStorage.getItem(t) || void 0
//     },
//     cacheUserLanguage(e, t) {
//         let {lookupLocalStorage: n} = t;
//         n && Eh() && window.localStorage.setItem(n, e)
//     }
// };
// let yo = null;
// const Oh = () => {
//     if (yo !== null)
//         return yo;
//     try {
//         yo = window !== "undefined" && window.sessionStorage !== null;
//         const e = "i18next.translate.boo";
//         window.sessionStorage.setItem(e, "foo"),
//         window.sessionStorage.removeItem(e)
//     } catch {
//         yo = !1
//     }
//     return yo
// }
// ;
// var d4 = {
//     name: "sessionStorage",
//     lookup(e) {
//         let {lookupSessionStorage: t} = e;
//         if (t && Oh())
//             return window.sessionStorage.getItem(t) || void 0
//     },
//     cacheUserLanguage(e, t) {
//         let {lookupSessionStorage: n} = t;
//         n && Oh() && window.sessionStorage.setItem(n, e)
//     }
// }
//   , p4 = {
//     name: "navigator",
//     lookup(e) {
//         const t = [];
//         if (typeof navigator < "u") {
//             const {languages: n, userLanguage: r, language: o} = navigator;
//             if (n)
//                 for (let i = 0; i < n.length; i++)
//                     t.push(n[i]);
//             r && t.push(r),
//             o && t.push(o)
//         }
//         return t.length > 0 ? t : void 0
//     }
// }
//   , h4 = {
//     name: "htmlTag",
//     lookup(e) {
//         let {htmlTag: t} = e, n;
//         const r = t || (typeof document < "u" ? document.documentElement : null);
//         return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")),
//         n
//     }
// }
//   , m4 = {
//     name: "path",
//     lookup(e) {
//         var o;
//         let {lookupFromPathIndex: t} = e;
//         if (typeof window > "u")
//             return;
//         const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
//         return Array.isArray(n) ? (o = n[typeof t == "number" ? t : 0]) == null ? void 0 : o.replace("/", "") : void 0
//     }
// }
//   , g4 = {
//     name: "subdomain",
//     lookup(e) {
//         var o, i;
//         let {lookupFromSubdomainIndex: t} = e;
//         const n = typeof t == "number" ? t + 1 : 1
//           , r = typeof window < "u" && ((i = (o = window.location) == null ? void 0 : o.hostname) == null ? void 0 : i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
//         if (r)
//             return r[n]
//     }
// };
// function v4() {
//     return {
//         order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
//         lookupQuerystring: "lng",
//         lookupCookie: "i18next",
//         lookupLocalStorage: "i18nextLng",
//         lookupSessionStorage: "i18nextLng",
//         caches: ["localStorage"],
//         excludeCacheFor: ["cimode"],
//         convertDetectedLanguage: e => e
//     }
// }
// class Y1 {
//     constructor(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
//         this.type = "languageDetector",
//         this.detectors = {},
//         this.init(t, n)
//     }
//     init(t) {
//         let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
//           , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
//         this.services = t || {
//             languageUtils: {}
//         },
//         this.options = s4(n, this.options || {}, v4()),
//         typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")),
//         this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
//         this.i18nOptions = r,
//         this.addDetector(u4),
//         this.addDetector(c4),
//         this.addDetector(f4),
//         this.addDetector(d4),
//         this.addDetector(p4),
//         this.addDetector(h4),
//         this.addDetector(m4),
//         this.addDetector(g4)
//     }
//     addDetector(t) {
//         return this.detectors[t.name] = t,
//         this
//     }
//     detect(t) {
//         t || (t = this.options.order);
//         let n = [];
//         return t.forEach(r => {
//             if (this.detectors[r]) {
//                 let o = this.detectors[r].lookup(this.options);
//                 o && typeof o == "string" && (o = [o]),
//                 o && (n = n.concat(o))
//             }
//         }
//         ),
//         n = n.map(r => this.options.convertDetectedLanguage(r)),
//         this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
//     }
//     cacheUserLanguage(t, n) {
//         n || (n = this.options.caches),
//         n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach(r => {
//             this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options)
//         }
//         ))
//     }
// }
// Y1.type = "languageDetector";
// Be.use(G1).use(Y1).use(R2).init({
//     fallbackLng: "pt_BR",
//     debug: !1,
//     detection: {
//         order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
//         lookupQuerystring: "lng",
//         lookupCookie: "i18next",
//         lookupLocalStorage: "i18nextLng",
//         lookupFromPathIndex: 0,
//         lookupFromSubdomainIndex: 0,
//         caches: ["localStorage", "cookie"],
//         excludeCacheFor: ["cimode"],
//         cookieMinutes: 10,
//         cookieDomain: "etherprivatebank.com.br",
//         checkWhitelist: !0
//     },
//     interpolation: {
//         escapeValue: !1
//     },
//     backend: {
//         loadPath: "/locales/{{lng}}/translation.json"
//     }
// });
// Pl.createRoot(document.getElementById("root")).render(g.jsx(fe.StrictMode, {
//     children: g.jsx(xE, {})
// }));
