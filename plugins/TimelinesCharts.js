// Version 2.11.1 timelines-chart - https://github.com/vasturiano/timelines-chart
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).TimelinesChart = n());
})(this, function () {
  "use strict";
  function t(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return n(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return n(t, e);
      })(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function n(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  function e(t, n, e) {
    var r, i, a, o, u;
    function l() {
      var s = Date.now() - o;
      s < n && s >= 0
        ? (r = setTimeout(l, n - s))
        : ((r = null), e || ((u = t.apply(a, i)), (a = i = null)));
    }
    null == n && (n = 100);
    var s = function () {
      (a = this), (i = arguments), (o = Date.now());
      var s = e && !r;
      return (
        r || (r = setTimeout(l, n)),
        s && ((u = t.apply(a, i)), (a = i = null)),
        u
      );
    };
    return (
      (s.clear = function () {
        r && (clearTimeout(r), (r = null));
      }),
      (s.flush = function () {
        r && ((u = t.apply(a, i)), (a = i = null), clearTimeout(r), (r = null));
      }),
      s
    );
  }
  !(function (t, n) {
    void 0 === n && (n = {});
    var e = n.insertAt;
    if (t && "undefined" != typeof document) {
      var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
      (i.type = "text/css"),
        "top" === e && r.firstChild
          ? r.insertBefore(i, r.firstChild)
          : r.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = t)
          : i.appendChild(document.createTextNode(t));
    }
  })(
    '.timelines-chart {\n\n  text-align: center;\n\n  /* Cancel selection interaction */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n  .timelines-chart .axises line, .timelines-chart .axises path {\n      stroke: #808080;\n    }\n\n  .timelines-chart .axises .x-axis {\n      font: 12px sans-serif;\n    }\n\n  .timelines-chart .axises .x-grid line {\n      stroke: #D3D3D3;\n    }\n\n  .timelines-chart .axises .y-axis line, .timelines-chart .axises .y-axis path, .timelines-chart .axises .grp-axis line, .timelines-chart .axises .grp-axis path {\n        stroke: none;\n      }\n\n  .timelines-chart .axises .y-axis text, .timelines-chart .axises .grp-axis text {\n        fill: #2F4F4F;\n      }\n\n  .timelines-chart line.x-axis-date-marker {\n    stroke-width: 1;\n    stroke: #293cb7;\n    fill: "none";\n  }\n\n  .timelines-chart .series-group {\n    fill-opacity: 0.6;\n    stroke: #808080;\n    stroke-opacity: 0.2;\n  }\n\n  .timelines-chart .series-segment {\n    stroke: none;\n  }\n\n  .timelines-chart .series-group, .timelines-chart .series-segment {\n    cursor: crosshair;\n  }\n\n  .timelines-chart .legend {\n    font-family: Sans-Serif;\n  }\n\n  .timelines-chart .legend .legendText {\n      fill: #666;\n    }\n\n  .timelines-chart .reset-zoom-btn {\n    font-family: sans-serif;\n    fill: blue;\n    opacity: .6;\n    cursor: pointer;\n  }\n\n.brusher .grid-background {\n    fill: lightgrey;\n  }\n\n.brusher .axis path {\n    display: none;\n  }\n\n.brusher .tick text {\n    text-anchor: middle;\n  }\n\n.brusher .grid line, .brusher .grid path {\n      stroke: #fff;\n    }\n\n.chart-zoom-selection, .brusher .brush .selection {\n  stroke: blue;\n  stroke-opacity: 0.6;\n  fill: blue;\n  fill-opacity: 0.3;\n  shape-rendering: crispEdges;\n}\n\n.chart-tooltip {\n  color: #eee;\n  background: rgba(0,0,140,0.85);\n  padding: 5px;\n  border-radius: 3px;\n  font: 11px sans-serif;\n  z-index: 4000;\n}\n\n.chart-tooltip.group-tooltip {\n    font-size: 14px;\n  }\n\n.chart-tooltip.line-tooltip {\n    font-size: 13px;\n  }\n\n.chart-tooltip.group-tooltip, .chart-tooltip.line-tooltip {\n    font-weight: bold;\n  }\n\n.chart-tooltip.segment-tooltip {\n     text-align: center;\n  }'
  ),
    (e.debounce = e);
  var r = e;
  function i(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, n) {
        if (
          !(Symbol.iterator in Object(t)) &&
          "[object Arguments]" !== Object.prototype.toString.call(t)
        )
          return;
        var e = [],
          r = !0,
          i = !1,
          a = void 0;
        try {
          for (
            var o, u = t[Symbol.iterator]();
            !(r = (o = u.next()).done) &&
            (e.push(o.value), !n || e.length !== n);
            r = !0
          );
        } catch (t) {
          (i = !0), (a = t);
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (i) throw a;
          }
        }
        return e;
      })(t, n) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  var a = function t(n, e) {
    var r = e.default,
      i = void 0 === r ? null : r,
      a = e.triggerUpdate,
      o = void 0 === a || a,
      u = e.onChange,
      l = void 0 === u ? function (t, n) {} : u;
    !(function (t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    })(this, t),
      (this.name = n),
      (this.defaultVal = i),
      (this.triggerUpdate = o),
      (this.onChange = l);
  };
  function o(t) {
    var n = t.stateInit,
      e =
        void 0 === n
          ? function () {
              return {};
            }
          : n,
      o = t.props,
      u = void 0 === o ? {} : o,
      l = t.methods,
      s = void 0 === l ? {} : l,
      c = t.aliases,
      f = void 0 === c ? {} : c,
      h = t.init,
      g = void 0 === h ? function () {} : h,
      p = t.update,
      d = void 0 === p ? function () {} : p,
      m = Object.keys(u).map(function (t) {
        return new a(t, u[t]);
      });
    return function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = Object.assign({}, e instanceof Function ? e(t) : e, {
          initialised: !1,
        }),
        a = {};
      function o(n) {
        return u(n, t), l(), o;
      }
      var u = function (t, e) {
          g.call(o, t, n, e), (n.initialised = !0);
        },
        l = r(function () {
          n.initialised && (d.call(o, n, a), (a = {}));
        }, 1);
      return (
        m.forEach(function (t) {
          o[t.name] = (function (t) {
            var e = t.name,
              r = t.triggerUpdate,
              i = void 0 !== r && r,
              u = t.onChange,
              s = void 0 === u ? function (t, n) {} : u,
              c = t.defaultVal,
              f = void 0 === c ? null : c;
            return function (t) {
              var r = n[e];
              if (!arguments.length) return r;
              var u = void 0 === t ? f : t;
              return (
                (n[e] = u),
                s.call(o, u, n, r),
                !a.hasOwnProperty(e) && (a[e] = r),
                i && l(),
                o
              );
            };
          })(t);
        }),
        Object.keys(s).forEach(function (t) {
          o[t] = function () {
            for (
              var e, r = arguments.length, i = new Array(r), a = 0;
              a < r;
              a++
            )
              i[a] = arguments[a];
            return (e = s[t]).call.apply(e, [o, n].concat(i));
          };
        }),
        Object.entries(f).forEach(function (t) {
          var n = i(t, 2),
            e = n[0],
            r = n[1];
          return (o[e] = o[r]);
        }),
        (o.resetProps = function () {
          return (
            m.forEach(function (t) {
              o[t.name](t.defaultVal);
            }),
            o
          );
        }),
        o.resetProps(),
        (n._rerender = l),
        o
      );
    };
  }
  function u(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function l(t) {
    let n = t,
      e = t;
    function r(t, n, r, i) {
      for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
        const a = (r + i) >>> 1;
        e(t[a], n) < 0 ? (r = a + 1) : (i = a);
      }
      return r;
    }
    return (
      1 === t.length &&
        ((n = (n, e) => t(n) - e),
        (e = (function (t) {
          return (n, e) => u(t(n), e);
        })(t))),
      {
        left: r,
        center: function (t, e, i, a) {
          null == i && (i = 0), null == a && (a = t.length);
          const o = r(t, e, i, a - 1);
          return o > i && n(t[o - 1], e) > -n(t[o], e) ? o - 1 : o;
        },
        right: function (t, n, r, i) {
          for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
            const a = (r + i) >>> 1;
            e(t[a], n) > 0 ? (i = a) : (r = a + 1);
          }
          return r;
        },
      }
    );
  }
  const s = l(u).right;
  l(function (t) {
    return null === t ? NaN : +t;
  }).center;
  var c = Math.sqrt(50),
    f = Math.sqrt(10),
    h = Math.sqrt(2);
  function g(t, n, e) {
    var r = (n - t) / Math.max(0, e),
      i = Math.floor(Math.log(r) / Math.LN10),
      a = r / Math.pow(10, i);
    return i >= 0
      ? (a >= c ? 10 : a >= f ? 5 : a >= h ? 2 : 1) * Math.pow(10, i)
      : -Math.pow(10, -i) / (a >= c ? 10 : a >= f ? 5 : a >= h ? 2 : 1);
  }
  function p(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
      i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
      a = r / i;
    return (
      a >= c ? (i *= 10) : a >= f ? (i *= 5) : a >= h && (i *= 2),
      n < t ? -i : i
    );
  }
  function d(t, n) {
    let e;
    if (void 0 === n)
      for (const n of t)
        null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
    else {
      let r = -1;
      for (let i of t)
        null != (i = n(i, ++r, t)) &&
          (e < i || (void 0 === e && i >= i)) &&
          (e = i);
    }
    return e;
  }
  function m(t, n) {
    let e;
    if (void 0 === n)
      for (const n of t)
        null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
    else {
      let r = -1;
      for (let i of t)
        null != (i = n(i, ++r, t)) &&
          (e > i || (void 0 === e && i >= i)) &&
          (e = i);
    }
    return e;
  }
  function v(t, n, e) {
    (t = +t),
      (n = +n),
      (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
    for (
      var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i);
      ++r < i;

    )
      a[r] = t + r * e;
    return a;
  }
  var y = Array.prototype.slice;
  function b(t) {
    return t;
  }
  var w = 1e-6;
  function x(t) {
    return "translate(" + (t + 0.5) + ",0)";
  }
  function _(t) {
    return "translate(0," + (t + 0.5) + ")";
  }
  function M(t) {
    return (n) => +t(n);
  }
  function A(t) {
    var n = Math.max(0, t.bandwidth() - 1) / 2;
    return (
      t.round() && (n = Math.round(n)),
      function (e) {
        return +t(e) + n;
      }
    );
  }
  function S() {
    return !this.__axis;
  }
  function k(t, n) {
    var e = [],
      r = null,
      i = null,
      a = 6,
      o = 6,
      u = 3,
      l = 1 === t || 4 === t ? -1 : 1,
      s = 4 === t || 2 === t ? "x" : "y",
      c = 1 === t || 3 === t ? x : _;
    function f(f) {
      var h = null == r ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : r,
        g = null == i ? (n.tickFormat ? n.tickFormat.apply(n, e) : b) : i,
        p = Math.max(a, 0) + u,
        d = n.range(),
        m = +d[0] + 0.5,
        v = +d[d.length - 1] + 0.5,
        y = (n.bandwidth ? A : M)(n.copy()),
        x = f.selection ? f.selection() : f,
        _ = x.selectAll(".domain").data([null]),
        k = x.selectAll(".tick").data(h, n).order(),
        C = k.exit(),
        T = k.enter().append("g").attr("class", "tick"),
        D = k.select("line"),
        z = k.select("text");
      (_ = _.merge(
        _.enter()
          .insert("path", ".tick")
          .attr("class", "domain")
          .attr("stroke", "currentColor")
      )),
        (k = k.merge(T)),
        (D = D.merge(
          T.append("line")
            .attr("stroke", "currentColor")
            .attr(s + "2", l * a)
        )),
        (z = z.merge(
          T.append("text")
            .attr("fill", "currentColor")
            .attr(s, l * p)
            .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")
        )),
        f !== x &&
          ((_ = _.transition(f)),
          (k = k.transition(f)),
          (D = D.transition(f)),
          (z = z.transition(f)),
          (C = C.transition(f)
            .attr("opacity", w)
            .attr("transform", function (t) {
              return isFinite((t = y(t)))
                ? c(t)
                : this.getAttribute("transform");
            })),
          T.attr("opacity", w).attr("transform", function (t) {
            var n = this.parentNode.__axis;
            return c(n && isFinite((n = n(t))) ? n : y(t));
          })),
        C.remove(),
        _.attr(
          "d",
          4 === t || 2 == t
            ? o
              ? "M" + l * o + "," + m + "H0.5V" + v + "H" + l * o
              : "M0.5," + m + "V" + v
            : o
            ? "M" + m + "," + l * o + "V0.5H" + v + "V" + l * o
            : "M" + m + ",0.5H" + v
        ),
        k.attr("opacity", 1).attr("transform", function (t) {
          return c(y(t));
        }),
        D.attr(s + "2", l * a),
        z.attr(s, l * p).text(g),
        x
          .filter(S)
          .attr("fill", "none")
          .attr("font-size", 10)
          .attr("font-family", "sans-serif")
          .attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"),
        x.each(function () {
          this.__axis = y;
        });
    }
    return (
      (f.scale = function (t) {
        return arguments.length ? ((n = t), f) : n;
      }),
      (f.ticks = function () {
        return (e = y.call(arguments)), f;
      }),
      (f.tickArguments = function (t) {
        return arguments.length
          ? ((e = null == t ? [] : y.call(t)), f)
          : e.slice();
      }),
      (f.tickValues = function (t) {
        return arguments.length
          ? ((r = null == t ? null : y.call(t)), f)
          : r && r.slice();
      }),
      (f.tickFormat = function (t) {
        return arguments.length ? ((i = t), f) : i;
      }),
      (f.tickSize = function (t) {
        return arguments.length ? ((a = o = +t), f) : a;
      }),
      (f.tickSizeInner = function (t) {
        return arguments.length ? ((a = +t), f) : a;
      }),
      (f.tickSizeOuter = function (t) {
        return arguments.length ? ((o = +t), f) : o;
      }),
      (f.tickPadding = function (t) {
        return arguments.length ? ((u = +t), f) : u;
      }),
      f
    );
  }
  function C(t) {
    return k(3, t);
  }
  function T(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
    }
    return this;
  }
  function D(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        "function" == typeof t ? this.interpolator(t) : this.range(t);
        break;
      default:
        this.domain(t),
          "function" == typeof n ? this.interpolator(n) : this.range(n);
    }
    return this;
  }
  const z = Symbol("implicit");
  function N() {
    var t = new Map(),
      n = [],
      e = [],
      r = z;
    function i(i) {
      var a = i + "",
        o = t.get(a);
      if (!o) {
        if (r !== z) return r;
        t.set(a, (o = n.push(i)));
      }
      return e[(o - 1) % e.length];
    }
    return (
      (i.domain = function (e) {
        if (!arguments.length) return n.slice();
        (n = []), (t = new Map());
        for (const r of e) {
          const e = r + "";
          t.has(e) || t.set(e, n.push(r));
        }
        return i;
      }),
      (i.range = function (t) {
        return arguments.length ? ((e = Array.from(t)), i) : e.slice();
      }),
      (i.unknown = function (t) {
        return arguments.length ? ((r = t), i) : r;
      }),
      (i.copy = function () {
        return N(n, e).unknown(r);
      }),
      T.apply(i, arguments),
      i
    );
  }
  function F() {
    var t,
      n,
      e = N().unknown(void 0),
      r = e.domain,
      i = e.range,
      a = 0,
      o = 1,
      u = !1,
      l = 0,
      s = 0,
      c = 0.5;
    function f() {
      var e = r().length,
        f = o < a,
        h = f ? o : a,
        g = f ? a : o;
      (t = (g - h) / Math.max(1, e - l + 2 * s)),
        u && (t = Math.floor(t)),
        (h += (g - h - t * (e - l)) * c),
        (n = t * (1 - l)),
        u && ((h = Math.round(h)), (n = Math.round(n)));
      var p = v(e).map(function (n) {
        return h + t * n;
      });
      return i(f ? p.reverse() : p);
    }
    return (
      delete e.unknown,
      (e.domain = function (t) {
        return arguments.length ? (r(t), f()) : r();
      }),
      (e.range = function (t) {
        return arguments.length
          ? (([a, o] = t), (a = +a), (o = +o), f())
          : [a, o];
      }),
      (e.rangeRound = function (t) {
        return ([a, o] = t), (a = +a), (o = +o), (u = !0), f();
      }),
      (e.bandwidth = function () {
        return n;
      }),
      (e.step = function () {
        return t;
      }),
      (e.round = function (t) {
        return arguments.length ? ((u = !!t), f()) : u;
      }),
      (e.padding = function (t) {
        return arguments.length ? ((l = Math.min(1, (s = +t))), f()) : l;
      }),
      (e.paddingInner = function (t) {
        return arguments.length ? ((l = Math.min(1, t)), f()) : l;
      }),
      (e.paddingOuter = function (t) {
        return arguments.length ? ((s = +t), f()) : s;
      }),
      (e.align = function (t) {
        return arguments.length ? ((c = Math.max(0, Math.min(1, t))), f()) : c;
      }),
      (e.copy = function () {
        return F(r(), [a, o]).round(u).paddingInner(l).paddingOuter(s).align(c);
      }),
      T.apply(f(), arguments)
    );
  }
  function H(t) {
    var n = t.copy;
    return (
      (t.padding = t.paddingOuter),
      delete t.paddingInner,
      delete t.paddingOuter,
      (t.copy = function () {
        return H(n());
      }),
      t
    );
  }
  function E(t, n, e) {
    (t.prototype = n.prototype = e), (e.constructor = t);
  }
  function L(t, n) {
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e;
  }
  function U() {}
  var R = 0.7,
    Y = 1 / R,
    O = "\\s*([+-]?\\d+)\\s*",
    P = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    j = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    I = /^#([0-9a-f]{3,8})$/,
    X = new RegExp("^rgb\\(" + [O, O, O] + "\\)$"),
    q = new RegExp("^rgb\\(" + [j, j, j] + "\\)$"),
    B = new RegExp("^rgba\\(" + [O, O, O, P] + "\\)$"),
    V = new RegExp("^rgba\\(" + [j, j, j, P] + "\\)$"),
    W = new RegExp("^hsl\\(" + [P, j, j] + "\\)$"),
    G = new RegExp("^hsla\\(" + [P, j, j, P] + "\\)$"),
    $ = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  function Z() {
    return this.rgb().formatHex();
  }
  function Q() {
    return this.rgb().formatRgb();
  }
  function J(t) {
    var n, e;
    return (
      (t = (t + "").trim().toLowerCase()),
      (n = I.exec(t))
        ? ((e = n[1].length),
          (n = parseInt(n[1], 16)),
          6 === e
            ? K(n)
            : 3 === e
            ? new rt(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
            ? tt(
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                (255 & n) / 255
              )
            : 4 === e
            ? tt(
                ((n >> 12) & 15) | ((n >> 8) & 240),
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                (((15 & n) << 4) | (15 & n)) / 255
              )
            : null)
        : (n = X.exec(t))
        ? new rt(n[1], n[2], n[3], 1)
        : (n = q.exec(t))
        ? new rt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = B.exec(t))
        ? tt(n[1], n[2], n[3], n[4])
        : (n = V.exec(t))
        ? tt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = W.exec(t))
        ? ut(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = G.exec(t))
        ? ut(n[1], n[2] / 100, n[3] / 100, n[4])
        : $.hasOwnProperty(t)
        ? K($[t])
        : "transparent" === t
        ? new rt(NaN, NaN, NaN, 0)
        : null
    );
  }
  function K(t) {
    return new rt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
  }
  function tt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new rt(t, n, e, r);
  }
  function nt(t) {
    return (
      t instanceof U || (t = J(t)),
      t ? new rt((t = t.rgb()).r, t.g, t.b, t.opacity) : new rt()
    );
  }
  function et(t, n, e, r) {
    return 1 === arguments.length ? nt(t) : new rt(t, n, e, null == r ? 1 : r);
  }
  function rt(t, n, e, r) {
    (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
  }
  function it() {
    return "#" + ot(this.r) + ot(this.g) + ot(this.b);
  }
  function at() {
    var t = this.opacity;
    return (
      (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
        ? "rgb("
        : "rgba(") +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (1 === t ? ")" : ", " + t + ")")
    );
  }
  function ot(t) {
    return (
      ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
      t.toString(16)
    );
  }
  function ut(t, n, e, r) {
    return (
      r <= 0
        ? (t = n = e = NaN)
        : e <= 0 || e >= 1
        ? (t = n = NaN)
        : n <= 0 && (t = NaN),
      new st(t, n, e, r)
    );
  }
  function lt(t) {
    if (t instanceof st) return new st(t.h, t.s, t.l, t.opacity);
    if ((t instanceof U || (t = J(t)), !t)) return new st();
    if (t instanceof st) return t;
    var n = (t = t.rgb()).r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = Math.min(n, e, r),
      a = Math.max(n, e, r),
      o = NaN,
      u = a - i,
      l = (a + i) / 2;
    return (
      u
        ? ((o =
            n === a
              ? (e - r) / u + 6 * (e < r)
              : e === a
              ? (r - n) / u + 2
              : (n - e) / u + 4),
          (u /= l < 0.5 ? a + i : 2 - a - i),
          (o *= 60))
        : (u = l > 0 && l < 1 ? 0 : o),
      new st(o, u, l, t.opacity)
    );
  }
  function st(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  function ct(t, n, e) {
    return (
      255 *
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n)
    );
  }
  E(U, J, {
    copy: function (t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable: function () {
      return this.rgb().displayable();
    },
    hex: Z,
    formatHex: Z,
    formatHsl: function () {
      return lt(this).formatHsl();
    },
    formatRgb: Q,
    toString: Q,
  }),
    E(
      rt,
      et,
      L(U, {
        brighter: function (t) {
          return (
            (t = null == t ? Y : Math.pow(Y, t)),
            new rt(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? R : Math.pow(R, t)),
            new rt(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        rgb: function () {
          return this;
        },
        displayable: function () {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        hex: it,
        formatHex: it,
        formatRgb: at,
        toString: at,
      })
    ),
    E(
      st,
      function (t, n, e, r) {
        return 1 === arguments.length
          ? lt(t)
          : new st(t, n, e, null == r ? 1 : r);
      },
      L(U, {
        brighter: function (t) {
          return (
            (t = null == t ? Y : Math.pow(Y, t)),
            new st(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? R : Math.pow(R, t)),
            new st(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < 0.5 ? e : 1 - e) * n,
            i = 2 * e - r;
          return new rt(
            ct(t >= 240 ? t - 240 : t + 120, i, r),
            ct(t, i, r),
            ct(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
          );
        },
        displayable: function () {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        formatHsl: function () {
          var t = this.opacity;
          return (
            (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
              ? "hsl("
              : "hsla(") +
            (this.h || 0) +
            ", " +
            100 * (this.s || 0) +
            "%, " +
            100 * (this.l || 0) +
            "%" +
            (1 === t ? ")" : ", " + t + ")")
          );
        },
      })
    );
  var ft = (t) => () => t;
  function ht(t) {
    return 1 == (t = +t)
      ? gt
      : function (n, e) {
          return e - n
            ? (function (t, n, e) {
                return (
                  (t = Math.pow(t, e)),
                  (n = Math.pow(n, e) - t),
                  (e = 1 / e),
                  function (r) {
                    return Math.pow(t + r * n, e);
                  }
                );
              })(n, e, t)
            : ft(isNaN(n) ? e : n);
        };
  }
  function gt(t, n) {
    var e = n - t;
    return e
      ? (function (t, n) {
          return function (e) {
            return t + e * n;
          };
        })(t, e)
      : ft(isNaN(t) ? n : t);
  }
  var pt = (function t(n) {
    var e = ht(n);
    function r(t, n) {
      var r = e((t = et(t)).r, (n = et(n)).r),
        i = e(t.g, n.g),
        a = e(t.b, n.b),
        o = gt(t.opacity, n.opacity);
      return function (n) {
        return (
          (t.r = r(n)), (t.g = i(n)), (t.b = a(n)), (t.opacity = o(n)), t + ""
        );
      };
    }
    return (r.gamma = t), r;
  })(1);
  var dt,
    mt =
      ((dt = function (t) {
        var n = t.length - 1;
        return function (e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            i = t[r],
            a = t[r + 1],
            o = r > 0 ? t[r - 1] : 2 * i - a,
            u = r < n - 1 ? t[r + 2] : 2 * a - i;
          return (function (t, n, e, r, i) {
            var a = t * t,
              o = a * t;
            return (
              ((1 - 3 * t + 3 * a - o) * n +
                (4 - 6 * a + 3 * o) * e +
                (1 + 3 * t + 3 * a - 3 * o) * r +
                o * i) /
              6
            );
          })((e - r / n) * n, o, i, a, u);
        };
      }),
      function (t) {
        var n,
          e,
          r = t.length,
          i = new Array(r),
          a = new Array(r),
          o = new Array(r);
        for (n = 0; n < r; ++n)
          (e = et(t[n])),
            (i[n] = e.r || 0),
            (a[n] = e.g || 0),
            (o[n] = e.b || 0);
        return (
          (i = dt(i)),
          (a = dt(a)),
          (o = dt(o)),
          (e.opacity = 1),
          function (t) {
            return (e.r = i(t)), (e.g = a(t)), (e.b = o(t)), e + "";
          }
        );
      });
  function vt(t, n) {
    n || (n = []);
    var e,
      r = t ? Math.min(n.length, t.length) : 0,
      i = n.slice();
    return function (a) {
      for (e = 0; e < r; ++e) i[e] = t[e] * (1 - a) + n[e] * a;
      return i;
    };
  }
  function yt(t, n) {
    var e,
      r = n ? n.length : 0,
      i = t ? Math.min(r, t.length) : 0,
      a = new Array(i),
      o = new Array(r);
    for (e = 0; e < i; ++e) a[e] = St(t[e], n[e]);
    for (; e < r; ++e) o[e] = n[e];
    return function (t) {
      for (e = 0; e < i; ++e) o[e] = a[e](t);
      return o;
    };
  }
  function bt(t, n) {
    var e = new Date();
    return (
      (t = +t),
      (n = +n),
      function (r) {
        return e.setTime(t * (1 - r) + n * r), e;
      }
    );
  }
  function wt(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return t * (1 - e) + n * e;
      }
    );
  }
  function xt(t, n) {
    var e,
      r = {},
      i = {};
    for (e in ((null !== t && "object" == typeof t) || (t = {}),
    (null !== n && "object" == typeof n) || (n = {}),
    n))
      e in t ? (r[e] = St(t[e], n[e])) : (i[e] = n[e]);
    return function (t) {
      for (e in r) i[e] = r[e](t);
      return i;
    };
  }
  var _t = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Mt = new RegExp(_t.source, "g");
  function At(t, n) {
    var e,
      r,
      i,
      a = (_t.lastIndex = Mt.lastIndex = 0),
      o = -1,
      u = [],
      l = [];
    for (t += "", n += ""; (e = _t.exec(t)) && (r = Mt.exec(n)); )
      (i = r.index) > a &&
        ((i = n.slice(a, i)), u[o] ? (u[o] += i) : (u[++o] = i)),
        (e = e[0]) === (r = r[0])
          ? u[o]
            ? (u[o] += r)
            : (u[++o] = r)
          : ((u[++o] = null), l.push({ i: o, x: wt(e, r) })),
        (a = Mt.lastIndex);
    return (
      a < n.length && ((i = n.slice(a)), u[o] ? (u[o] += i) : (u[++o] = i)),
      u.length < 2
        ? l[0]
          ? (function (t) {
              return function (n) {
                return t(n) + "";
              };
            })(l[0].x)
          : (function (t) {
              return function () {
                return t;
              };
            })(n)
        : ((n = l.length),
          function (t) {
            for (var e, r = 0; r < n; ++r) u[(e = l[r]).i] = e.x(t);
            return u.join("");
          })
    );
  }
  function St(t, n) {
    var e,
      r,
      i = typeof n;
    return null == n || "boolean" === i
      ? ft(n)
      : ("number" === i
          ? wt
          : "string" === i
          ? (e = J(n))
            ? ((n = e), pt)
            : At
          : n instanceof J
          ? pt
          : n instanceof Date
          ? bt
          : ((r = n),
            !ArrayBuffer.isView(r) || r instanceof DataView
              ? Array.isArray(n)
                ? yt
                : ("function" != typeof n.valueOf &&
                    "function" != typeof n.toString) ||
                  isNaN(n)
                ? xt
                : wt
              : vt))(t, n);
  }
  function kt(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return Math.round(t * (1 - e) + n * e);
      }
    );
  }
  var Ct,
    Tt = 180 / Math.PI,
    Dt = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function zt(t, n, e, r, i, a) {
    var o, u, l;
    return (
      (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
      (l = t * e + n * r) && ((e -= t * l), (r -= n * l)),
      (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (l /= u)),
      t * r < n * e && ((t = -t), (n = -n), (l = -l), (o = -o)),
      {
        translateX: i,
        translateY: a,
        rotate: Math.atan2(n, t) * Tt,
        skewX: Math.atan(l) * Tt,
        scaleX: o,
        scaleY: u,
      }
    );
  }
  function Nt(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }
    return function (a, o) {
      var u = [],
        l = [];
      return (
        (a = t(a)),
        (o = t(o)),
        (function (t, r, i, a, o, u) {
          if (t !== i || r !== a) {
            var l = o.push("translate(", null, n, null, e);
            u.push({ i: l - 4, x: wt(t, i) }, { i: l - 2, x: wt(r, a) });
          } else (i || a) && o.push("translate(" + i + n + a + e);
        })(a.translateX, a.translateY, o.translateX, o.translateY, u, l),
        (function (t, n, e, a) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              a.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: wt(t, n) }))
            : n && e.push(i(e) + "rotate(" + n + r);
        })(a.rotate, o.rotate, u, l),
        (function (t, n, e, a) {
          t !== n
            ? a.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: wt(t, n) })
            : n && e.push(i(e) + "skewX(" + n + r);
        })(a.skewX, o.skewX, u, l),
        (function (t, n, e, r, a, o) {
          if (t !== e || n !== r) {
            var u = a.push(i(a) + "scale(", null, ",", null, ")");
            o.push({ i: u - 4, x: wt(t, e) }, { i: u - 2, x: wt(n, r) });
          } else
            (1 === e && 1 === r) || a.push(i(a) + "scale(" + e + "," + r + ")");
        })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, u, l),
        (a = o = null),
        function (t) {
          for (var n, e = -1, r = l.length; ++e < r; ) u[(n = l[e]).i] = n.x(t);
          return u.join("");
        }
      );
    };
  }
  var Ft = Nt(
      function (t) {
        const n = new (
          "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
        )(t + "");
        return n.isIdentity ? Dt : zt(n.a, n.b, n.c, n.d, n.e, n.f);
      },
      "px, ",
      "px)",
      "deg)"
    ),
    Ht = Nt(
      function (t) {
        return null == t
          ? Dt
          : (Ct ||
              (Ct = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )),
            Ct.setAttribute("transform", t),
            (t = Ct.transform.baseVal.consolidate())
              ? zt((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
              : Dt);
      },
      ", ",
      ")",
      ")"
    );
  function Et(t) {
    return +t;
  }
  var Lt = [0, 1];
  function Ut(t) {
    return t;
  }
  function Rt(t, n) {
    return (n -= t = +t)
      ? function (e) {
          return (e - t) / n;
        }
      : ((e = isNaN(n) ? NaN : 0.5),
        function () {
          return e;
        });
    var e;
  }
  function Yt(t, n, e) {
    var r = t[0],
      i = t[1],
      a = n[0],
      o = n[1];
    return (
      i < r ? ((r = Rt(i, r)), (a = e(o, a))) : ((r = Rt(r, i)), (a = e(a, o))),
      function (t) {
        return a(r(t));
      }
    );
  }
  function Ot(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
      i = new Array(r),
      a = new Array(r),
      o = -1;
    for (
      t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
      ++o < r;

    )
      (i[o] = Rt(t[o], t[o + 1])), (a[o] = e(n[o], n[o + 1]));
    return function (n) {
      var e = s(t, n, 1, r) - 1;
      return a[e](i[e](n));
    };
  }
  function Pt(t, n) {
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function jt() {
    var t,
      n,
      e,
      r,
      i,
      a,
      o = Lt,
      u = Lt,
      l = St,
      s = Ut;
    function c() {
      var t,
        n,
        e,
        l = Math.min(o.length, u.length);
      return (
        s !== Ut &&
          ((t = o[0]),
          (n = o[l - 1]),
          t > n && ((e = t), (t = n), (n = e)),
          (s = function (e) {
            return Math.max(t, Math.min(n, e));
          })),
        (r = l > 2 ? Ot : Yt),
        (i = a = null),
        f
      );
    }
    function f(n) {
      return isNaN((n = +n)) ? e : (i || (i = r(o.map(t), u, l)))(t(s(n)));
    }
    return (
      (f.invert = function (e) {
        return s(n((a || (a = r(u, o.map(t), wt)))(e)));
      }),
      (f.domain = function (t) {
        return arguments.length ? ((o = Array.from(t, Et)), c()) : o.slice();
      }),
      (f.range = function (t) {
        return arguments.length ? ((u = Array.from(t)), c()) : u.slice();
      }),
      (f.rangeRound = function (t) {
        return (u = Array.from(t)), (l = kt), c();
      }),
      (f.clamp = function (t) {
        return arguments.length ? ((s = !!t || Ut), c()) : s !== Ut;
      }),
      (f.interpolate = function (t) {
        return arguments.length ? ((l = t), c()) : l;
      }),
      (f.unknown = function (t) {
        return arguments.length ? ((e = t), f) : e;
      }),
      function (e, r) {
        return (t = e), (n = r), c();
      }
    );
  }
  function It() {
    return jt()(Ut, Ut);
  }
  function Xt(t, n) {
    if (
      (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) <
      0
    )
      return null;
    var e,
      r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }
  function qt(t) {
    return (t = Xt(Math.abs(t))) ? t[1] : NaN;
  }
  var Bt,
    Vt =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function Wt(t) {
    if (!(n = Vt.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new Gt({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    });
  }
  function Gt(t) {
    (this.fill = void 0 === t.fill ? " " : t.fill + ""),
      (this.align = void 0 === t.align ? ">" : t.align + ""),
      (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
      (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
      (this.zero = !!t.zero),
      (this.width = void 0 === t.width ? void 0 : +t.width),
      (this.comma = !!t.comma),
      (this.precision = void 0 === t.precision ? void 0 : +t.precision),
      (this.trim = !!t.trim),
      (this.type = void 0 === t.type ? "" : t.type + "");
  }
  function $t(t, n) {
    var e = Xt(t, n);
    if (!e) return t + "";
    var r = e[0],
      i = e[1];
    return i < 0
      ? "0." + new Array(-i).join("0") + r
      : r.length > i + 1
      ? r.slice(0, i + 1) + "." + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join("0");
  }
  (Wt.prototype = Gt.prototype),
    (Gt.prototype.toString = function () {
      return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
        (this.comma ? "," : "") +
        (void 0 === this.precision
          ? ""
          : "." + Math.max(0, 0 | this.precision)) +
        (this.trim ? "~" : "") +
        this.type
      );
    });
  var Zt = {
    "%": (t, n) => (100 * t).toFixed(n),
    b: (t) => Math.round(t).toString(2),
    c: (t) => t + "",
    d: function (t) {
      return Math.abs((t = Math.round(t))) >= 1e21
        ? t.toLocaleString("en").replace(/,/g, "")
        : t.toString(10);
    },
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: (t) => Math.round(t).toString(8),
    p: (t, n) => $t(100 * t, n),
    r: $t,
    s: function (t, n) {
      var e = Xt(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1],
        a = i - (Bt = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        o = r.length;
      return a === o
        ? r
        : a > o
        ? r + new Array(a - o + 1).join("0")
        : a > 0
        ? r.slice(0, a) + "." + r.slice(a)
        : "0." + new Array(1 - a).join("0") + Xt(t, Math.max(0, n + a - 1))[0];
    },
    X: (t) => Math.round(t).toString(16).toUpperCase(),
    x: (t) => Math.round(t).toString(16),
  };
  function Qt(t) {
    return t;
  }
  var Jt,
    Kt,
    tn,
    nn = Array.prototype.map,
    en = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "??",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ];
  function rn(t) {
    var n,
      e,
      r =
        void 0 === t.grouping || void 0 === t.thousands
          ? Qt
          : ((n = nn.call(t.grouping, Number)),
            (e = t.thousands + ""),
            function (t, r) {
              for (
                var i = t.length, a = [], o = 0, u = n[0], l = 0;
                i > 0 &&
                u > 0 &&
                (l + u + 1 > r && (u = Math.max(1, r - l)),
                a.push(t.substring((i -= u), i + u)),
                !((l += u + 1) > r));

              )
                u = n[(o = (o + 1) % n.length)];
              return a.reverse().join(e);
            }),
      i = void 0 === t.currency ? "" : t.currency[0] + "",
      a = void 0 === t.currency ? "" : t.currency[1] + "",
      o = void 0 === t.decimal ? "." : t.decimal + "",
      u =
        void 0 === t.numerals
          ? Qt
          : (function (t) {
              return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                  return t[+n];
                });
              };
            })(nn.call(t.numerals, String)),
      l = void 0 === t.percent ? "%" : t.percent + "",
      s = void 0 === t.minus ? "???" : t.minus + "",
      c = void 0 === t.nan ? "NaN" : t.nan + "";
    function f(t) {
      var n = (t = Wt(t)).fill,
        e = t.align,
        f = t.sign,
        h = t.symbol,
        g = t.zero,
        p = t.width,
        d = t.comma,
        m = t.precision,
        v = t.trim,
        y = t.type;
      "n" === y
        ? ((d = !0), (y = "g"))
        : Zt[y] || (void 0 === m && (m = 12), (v = !0), (y = "g")),
        (g || ("0" === n && "=" === e)) && ((g = !0), (n = "0"), (e = "="));
      var b =
          "$" === h
            ? i
            : "#" === h && /[boxX]/.test(y)
            ? "0" + y.toLowerCase()
            : "",
        w = "$" === h ? a : /[%p]/.test(y) ? l : "",
        x = Zt[y],
        _ = /[defgprs%]/.test(y);
      function M(t) {
        var i,
          a,
          l,
          h = b,
          M = w;
        if ("c" === y) (M = x(t) + M), (t = "");
        else {
          var A = (t = +t) < 0 || 1 / t < 0;
          if (
            ((t = isNaN(t) ? c : x(Math.abs(t), m)),
            v &&
              (t = (function (t) {
                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                  switch (t[r]) {
                    case ".":
                      i = n = r;
                      break;
                    case "0":
                      0 === i && (i = r), (n = r);
                      break;
                    default:
                      if (!+t[r]) break t;
                      i > 0 && (i = 0);
                  }
                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
              })(t)),
            A && 0 == +t && "+" !== f && (A = !1),
            (h =
              (A ? ("(" === f ? f : s) : "-" === f || "(" === f ? "" : f) + h),
            (M =
              ("s" === y ? en[8 + Bt / 3] : "") +
              M +
              (A && "(" === f ? ")" : "")),
            _)
          )
            for (i = -1, a = t.length; ++i < a; )
              if (48 > (l = t.charCodeAt(i)) || l > 57) {
                (M = (46 === l ? o + t.slice(i + 1) : t.slice(i)) + M),
                  (t = t.slice(0, i));
                break;
              }
        }
        d && !g && (t = r(t, 1 / 0));
        var S = h.length + t.length + M.length,
          k = S < p ? new Array(p - S + 1).join(n) : "";
        switch (
          (d &&
            g &&
            ((t = r(k + t, k.length ? p - M.length : 1 / 0)), (k = "")),
          e)
        ) {
          case "<":
            t = h + t + M + k;
            break;
          case "=":
            t = h + k + t + M;
            break;
          case "^":
            t = k.slice(0, (S = k.length >> 1)) + h + t + M + k.slice(S);
            break;
          default:
            t = k + h + t + M;
        }
        return u(t);
      }
      return (
        (m =
          void 0 === m
            ? 6
            : /[gprs]/.test(y)
            ? Math.max(1, Math.min(21, m))
            : Math.max(0, Math.min(20, m))),
        (M.toString = function () {
          return t + "";
        }),
        M
      );
    }
    return {
      format: f,
      formatPrefix: function (t, n) {
        var e = f((((t = Wt(t)).type = "f"), t)),
          r = 3 * Math.max(-8, Math.min(8, Math.floor(qt(n) / 3))),
          i = Math.pow(10, -r),
          a = en[8 + r / 3];
        return function (t) {
          return e(i * t) + a;
        };
      },
    };
  }
  function an(t, n, e, r) {
    var i,
      a = p(t, n, e);
    switch ((r = Wt(null == r ? ",f" : r)).type) {
      case "s":
        var o = Math.max(Math.abs(t), Math.abs(n));
        return (
          null != r.precision ||
            isNaN(
              (i = (function (t, n) {
                return Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(qt(n) / 3))) -
                    qt(Math.abs(t))
                );
              })(a, o))
            ) ||
            (r.precision = i),
          tn(r, o)
        );
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != r.precision ||
          isNaN(
            (i = (function (t, n) {
              return (
                (t = Math.abs(t)),
                (n = Math.abs(n) - t),
                Math.max(0, qt(n) - qt(t)) + 1
              );
            })(a, Math.max(Math.abs(t), Math.abs(n))))
          ) ||
          (r.precision = i - ("e" === r.type));
        break;
      case "f":
      case "%":
        null != r.precision ||
          isNaN(
            (i = (function (t) {
              return Math.max(0, -qt(Math.abs(t)));
            })(a))
          ) ||
          (r.precision = i - 2 * ("%" === r.type));
    }
    return Kt(r);
  }
  function on(t) {
    var n = t.domain;
    return (
      (t.ticks = function (t) {
        var e = n();
        return (function (t, n, e) {
          var r,
            i,
            a,
            o,
            u = -1;
          if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (o = g(t, n, e)) || !isFinite(o))
          )
            return [];
          if (o > 0)
            for (
              t = Math.ceil(t / o),
                n = Math.floor(n / o),
                a = new Array((i = Math.ceil(n - t + 1)));
              ++u < i;

            )
              a[u] = (t + u) * o;
          else
            for (
              o = -o,
                t = Math.ceil(t * o),
                n = Math.floor(n * o),
                a = new Array((i = Math.ceil(n - t + 1)));
              ++u < i;

            )
              a[u] = (t + u) / o;
          return r && a.reverse(), a;
        })(e[0], e[e.length - 1], null == t ? 10 : t);
      }),
      (t.tickFormat = function (t, e) {
        var r = n();
        return an(r[0], r[r.length - 1], null == t ? 10 : t, e);
      }),
      (t.nice = function (e) {
        null == e && (e = 10);
        var r,
          i,
          a = n(),
          o = 0,
          u = a.length - 1,
          l = a[o],
          s = a[u],
          c = 10;
        for (
          s < l && ((i = l), (l = s), (s = i), (i = o), (o = u), (u = i));
          c-- > 0;

        ) {
          if ((i = g(l, s, e)) === r) return (a[o] = l), (a[u] = s), n(a);
          if (i > 0) (l = Math.floor(l / i) * i), (s = Math.ceil(s / i) * i);
          else {
            if (!(i < 0)) break;
            (l = Math.ceil(l * i) / i), (s = Math.floor(s * i) / i);
          }
          r = i;
        }
        return t;
      }),
      t
    );
  }
  function un() {
    var t = It();
    return (
      (t.copy = function () {
        return Pt(t, un());
      }),
      T.apply(t, arguments),
      on(t)
    );
  }
  (Jt = rn({ thousands: ",", grouping: [3], currency: ["$", ""] })),
    (Kt = Jt.format),
    (tn = Jt.formatPrefix);
  var ln = new Date(),
    sn = new Date();
  function cn(t, n, e, r) {
    function i(n) {
      return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
    }
    return (
      (i.floor = function (n) {
        return t((n = new Date(+n))), n;
      }),
      (i.ceil = function (e) {
        return t((e = new Date(e - 1))), n(e, 1), t(e), e;
      }),
      (i.round = function (t) {
        var n = i(t),
          e = i.ceil(t);
        return t - n < e - t ? n : e;
      }),
      (i.offset = function (t, e) {
        return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
      }),
      (i.range = function (e, r, a) {
        var o,
          u = [];
        if (
          ((e = i.ceil(e)),
          (a = null == a ? 1 : Math.floor(a)),
          !(e < r && a > 0))
        )
          return u;
        do {
          u.push((o = new Date(+e))), n(e, a), t(e);
        } while (o < e && e < r);
        return u;
      }),
      (i.filter = function (e) {
        return cn(
          function (n) {
            if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
          },
          function (t, r) {
            if (t >= t)
              if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
              else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
          }
        );
      }),
      e &&
        ((i.count = function (n, r) {
          return (
            ln.setTime(+n), sn.setTime(+r), t(ln), t(sn), Math.floor(e(ln, sn))
          );
        }),
        (i.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? i.filter(
                    r
                      ? function (n) {
                          return r(n) % t == 0;
                        }
                      : function (n) {
                          return i.count(0, n) % t == 0;
                        }
                  )
                : i
              : null
          );
        })),
      i
    );
  }
  var fn = cn(
    function () {},
    function (t, n) {
      t.setTime(+t + n);
    },
    function (t, n) {
      return n - t;
    }
  );
  fn.every = function (t) {
    return (
      (t = Math.floor(t)),
      isFinite(t) && t > 0
        ? t > 1
          ? cn(
              function (n) {
                n.setTime(Math.floor(n / t) * t);
              },
              function (n, e) {
                n.setTime(+n + e * t);
              },
              function (n, e) {
                return (e - n) / t;
              }
            )
          : fn
        : null
    );
  };
  var hn = 1e3,
    gn = 6e4,
    pn = 36e5,
    dn = 864e5,
    mn = 6048e5,
    vn = cn(
      function (t) {
        t.setTime(t - t.getMilliseconds());
      },
      function (t, n) {
        t.setTime(+t + n * hn);
      },
      function (t, n) {
        return (n - t) / hn;
      },
      function (t) {
        return t.getUTCSeconds();
      }
    ),
    yn = cn(
      function (t) {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * hn);
      },
      function (t, n) {
        t.setTime(+t + n * gn);
      },
      function (t, n) {
        return (n - t) / gn;
      },
      function (t) {
        return t.getMinutes();
      }
    ),
    bn = cn(
      function (t) {
        t.setTime(
          t - t.getMilliseconds() - t.getSeconds() * hn - t.getMinutes() * gn
        );
      },
      function (t, n) {
        t.setTime(+t + n * pn);
      },
      function (t, n) {
        return (n - t) / pn;
      },
      function (t) {
        return t.getHours();
      }
    ),
    wn = cn(
      (t) => t.setHours(0, 0, 0, 0),
      (t, n) => t.setDate(t.getDate() + n),
      (t, n) =>
        (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * gn) / dn,
      (t) => t.getDate() - 1
    );
  function xn(t) {
    return cn(
      function (n) {
        n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
          n.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setDate(t.getDate() + 7 * n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * gn) / mn
        );
      }
    );
  }
  var _n = xn(0),
    Mn = xn(1),
    An = (xn(2), xn(3), xn(4)),
    Sn =
      (xn(5),
      xn(6),
      cn(
        function (t) {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setMonth(t.getMonth() + n);
        },
        function (t, n) {
          return (
            n.getMonth() -
            t.getMonth() +
            12 * (n.getFullYear() - t.getFullYear())
          );
        },
        function (t) {
          return t.getMonth();
        }
      )),
    kn = cn(
      function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setFullYear(t.getFullYear() + n);
      },
      function (t, n) {
        return n.getFullYear() - t.getFullYear();
      },
      function (t) {
        return t.getFullYear();
      }
    );
  kn.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? cn(
          function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
              n.setMonth(0, 1),
              n.setHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setFullYear(n.getFullYear() + e * t);
          }
        )
      : null;
  };
  var Cn = cn(
      function (t) {
        t.setUTCSeconds(0, 0);
      },
      function (t, n) {
        t.setTime(+t + n * gn);
      },
      function (t, n) {
        return (n - t) / gn;
      },
      function (t) {
        return t.getUTCMinutes();
      }
    ),
    Tn = cn(
      function (t) {
        t.setUTCMinutes(0, 0, 0);
      },
      function (t, n) {
        t.setTime(+t + n * pn);
      },
      function (t, n) {
        return (n - t) / pn;
      },
      function (t) {
        return t.getUTCHours();
      }
    ),
    Dn = cn(
      function (t) {
        t.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + n);
      },
      function (t, n) {
        return (n - t) / dn;
      },
      function (t) {
        return t.getUTCDate() - 1;
      }
    );
  function zn(t) {
    return cn(
      function (n) {
        n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
          n.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n);
      },
      function (t, n) {
        return (n - t) / mn;
      }
    );
  }
  var Nn = zn(0),
    Fn = zn(1),
    Hn = (zn(2), zn(3), zn(4)),
    En =
      (zn(5),
      zn(6),
      cn(
        function (t) {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCMonth(t.getUTCMonth() + n);
        },
        function (t, n) {
          return (
            n.getUTCMonth() -
            t.getUTCMonth() +
            12 * (n.getUTCFullYear() - t.getUTCFullYear())
          );
        },
        function (t) {
          return t.getUTCMonth();
        }
      )),
    Ln = cn(
      function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n);
      },
      function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear();
      },
      function (t) {
        return t.getUTCFullYear();
      }
    );
  function Un(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function Rn(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function Yn(t, n, e) {
    return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
  }
  Ln.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? cn(
          function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
              n.setUTCMonth(0, 1),
              n.setUTCHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t);
          }
        )
      : null;
  };
  var On,
    Pn,
    jn,
    In = { "-": "", _: " ", 0: "0" },
    Xn = /^\s*\d+/,
    qn = /^%/,
    Bn = /[\\^$*+?|[\]().{}]/g;
  function Vn(t, n, e) {
    var r = t < 0 ? "-" : "",
      i = (r ? -t : t) + "",
      a = i.length;
    return r + (a < e ? new Array(e - a + 1).join(n) + i : i);
  }
  function Wn(t) {
    return t.replace(Bn, "\\$&");
  }
  function Gn(t) {
    return new RegExp("^(?:" + t.map(Wn).join("|") + ")", "i");
  }
  function $n(t) {
    return new Map(t.map((t, n) => [t.toLowerCase(), n]));
  }
  function Zn(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 1));
    return r ? ((t.w = +r[0]), e + r[0].length) : -1;
  }
  function Qn(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 1));
    return r ? ((t.u = +r[0]), e + r[0].length) : -1;
  }
  function Jn(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.U = +r[0]), e + r[0].length) : -1;
  }
  function Kn(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.V = +r[0]), e + r[0].length) : -1;
  }
  function te(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.W = +r[0]), e + r[0].length) : -1;
  }
  function ne(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 4));
    return r ? ((t.y = +r[0]), e + r[0].length) : -1;
  }
  function ee(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r
      ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function re(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r
      ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
      : -1;
  }
  function ie(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 1));
    return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
  }
  function ae(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
  }
  function oe(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.d = +r[0]), e + r[0].length) : -1;
  }
  function ue(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 3));
    return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
  }
  function le(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.H = +r[0]), e + r[0].length) : -1;
  }
  function se(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.M = +r[0]), e + r[0].length) : -1;
  }
  function ce(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 2));
    return r ? ((t.S = +r[0]), e + r[0].length) : -1;
  }
  function fe(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 3));
    return r ? ((t.L = +r[0]), e + r[0].length) : -1;
  }
  function he(t, n, e) {
    var r = Xn.exec(n.slice(e, e + 6));
    return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
  }
  function ge(t, n, e) {
    var r = qn.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function pe(t, n, e) {
    var r = Xn.exec(n.slice(e));
    return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
  }
  function de(t, n, e) {
    var r = Xn.exec(n.slice(e));
    return r ? ((t.s = +r[0]), e + r[0].length) : -1;
  }
  function me(t, n) {
    return Vn(t.getDate(), n, 2);
  }
  function ve(t, n) {
    return Vn(t.getHours(), n, 2);
  }
  function ye(t, n) {
    return Vn(t.getHours() % 12 || 12, n, 2);
  }
  function be(t, n) {
    return Vn(1 + wn.count(kn(t), t), n, 3);
  }
  function we(t, n) {
    return Vn(t.getMilliseconds(), n, 3);
  }
  function xe(t, n) {
    return we(t, n) + "000";
  }
  function _e(t, n) {
    return Vn(t.getMonth() + 1, n, 2);
  }
  function Me(t, n) {
    return Vn(t.getMinutes(), n, 2);
  }
  function Ae(t, n) {
    return Vn(t.getSeconds(), n, 2);
  }
  function Se(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }
  function ke(t, n) {
    return Vn(_n.count(kn(t) - 1, t), n, 2);
  }
  function Ce(t) {
    var n = t.getDay();
    return n >= 4 || 0 === n ? An(t) : An.ceil(t);
  }
  function Te(t, n) {
    return (t = Ce(t)), Vn(An.count(kn(t), t) + (4 === kn(t).getDay()), n, 2);
  }
  function De(t) {
    return t.getDay();
  }
  function ze(t, n) {
    return Vn(Mn.count(kn(t) - 1, t), n, 2);
  }
  function Ne(t, n) {
    return Vn(t.getFullYear() % 100, n, 2);
  }
  function Fe(t, n) {
    return Vn((t = Ce(t)).getFullYear() % 100, n, 2);
  }
  function He(t, n) {
    return Vn(t.getFullYear() % 1e4, n, 4);
  }
  function Ee(t, n) {
    var e = t.getDay();
    return Vn(
      (t = e >= 4 || 0 === e ? An(t) : An.ceil(t)).getFullYear() % 1e4,
      n,
      4
    );
  }
  function Le(t) {
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? "-" : ((n *= -1), "+")) +
      Vn((n / 60) | 0, "0", 2) +
      Vn(n % 60, "0", 2)
    );
  }
  function Ue(t, n) {
    return Vn(t.getUTCDate(), n, 2);
  }
  function Re(t, n) {
    return Vn(t.getUTCHours(), n, 2);
  }
  function Ye(t, n) {
    return Vn(t.getUTCHours() % 12 || 12, n, 2);
  }
  function Oe(t, n) {
    return Vn(1 + Dn.count(Ln(t), t), n, 3);
  }
  function Pe(t, n) {
    return Vn(t.getUTCMilliseconds(), n, 3);
  }
  function je(t, n) {
    return Pe(t, n) + "000";
  }
  function Ie(t, n) {
    return Vn(t.getUTCMonth() + 1, n, 2);
  }
  function Xe(t, n) {
    return Vn(t.getUTCMinutes(), n, 2);
  }
  function qe(t, n) {
    return Vn(t.getUTCSeconds(), n, 2);
  }
  function Be(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }
  function Ve(t, n) {
    return Vn(Nn.count(Ln(t) - 1, t), n, 2);
  }
  function We(t) {
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? Hn(t) : Hn.ceil(t);
  }
  function Ge(t, n) {
    return (
      (t = We(t)), Vn(Hn.count(Ln(t), t) + (4 === Ln(t).getUTCDay()), n, 2)
    );
  }
  function $e(t) {
    return t.getUTCDay();
  }
  function Ze(t, n) {
    return Vn(Fn.count(Ln(t) - 1, t), n, 2);
  }
  function Qe(t, n) {
    return Vn(t.getUTCFullYear() % 100, n, 2);
  }
  function Je(t, n) {
    return Vn((t = We(t)).getUTCFullYear() % 100, n, 2);
  }
  function Ke(t, n) {
    return Vn(t.getUTCFullYear() % 1e4, n, 4);
  }
  function tr(t, n) {
    var e = t.getUTCDay();
    return Vn(
      (t = e >= 4 || 0 === e ? Hn(t) : Hn.ceil(t)).getUTCFullYear() % 1e4,
      n,
      4
    );
  }
  function nr() {
    return "+0000";
  }
  function er() {
    return "%";
  }
  function rr(t) {
    return +t;
  }
  function ir(t) {
    return Math.floor(+t / 1e3);
  }
  !(function (t) {
    (On = (function (t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        a = t.days,
        o = t.shortDays,
        u = t.months,
        l = t.shortMonths,
        s = Gn(i),
        c = $n(i),
        f = Gn(a),
        h = $n(a),
        g = Gn(o),
        p = $n(o),
        d = Gn(u),
        m = $n(u),
        v = Gn(l),
        y = $n(l),
        b = {
          a: function (t) {
            return o[t.getDay()];
          },
          A: function (t) {
            return a[t.getDay()];
          },
          b: function (t) {
            return l[t.getMonth()];
          },
          B: function (t) {
            return u[t.getMonth()];
          },
          c: null,
          d: me,
          e: me,
          f: xe,
          g: Fe,
          G: Ee,
          H: ve,
          I: ye,
          j: be,
          L: we,
          m: _e,
          M: Me,
          p: function (t) {
            return i[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: rr,
          s: ir,
          S: Ae,
          u: Se,
          U: ke,
          V: Te,
          w: De,
          W: ze,
          x: null,
          X: null,
          y: Ne,
          Y: He,
          Z: Le,
          "%": er,
        },
        w = {
          a: function (t) {
            return o[t.getUTCDay()];
          },
          A: function (t) {
            return a[t.getUTCDay()];
          },
          b: function (t) {
            return l[t.getUTCMonth()];
          },
          B: function (t) {
            return u[t.getUTCMonth()];
          },
          c: null,
          d: Ue,
          e: Ue,
          f: je,
          g: Je,
          G: tr,
          H: Re,
          I: Ye,
          j: Oe,
          L: Pe,
          m: Ie,
          M: Xe,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: rr,
          s: ir,
          S: qe,
          u: Be,
          U: Ve,
          V: Ge,
          w: $e,
          W: Ze,
          x: null,
          X: null,
          y: Qe,
          Y: Ke,
          Z: nr,
          "%": er,
        },
        x = {
          a: function (t, n, e) {
            var r = g.exec(n.slice(e));
            return r
              ? ((t.w = p.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          A: function (t, n, e) {
            var r = f.exec(n.slice(e));
            return r
              ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          b: function (t, n, e) {
            var r = v.exec(n.slice(e));
            return r
              ? ((t.m = y.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          B: function (t, n, e) {
            var r = d.exec(n.slice(e));
            return r
              ? ((t.m = m.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          c: function (t, e, r) {
            return A(t, n, e, r);
          },
          d: oe,
          e: oe,
          f: he,
          g: ee,
          G: ne,
          H: le,
          I: le,
          j: ue,
          L: fe,
          m: ae,
          M: se,
          p: function (t, n, e) {
            var r = s.exec(n.slice(e));
            return r
              ? ((t.p = c.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          q: ie,
          Q: pe,
          s: de,
          S: ce,
          u: Qn,
          U: Jn,
          V: Kn,
          w: Zn,
          W: te,
          x: function (t, n, r) {
            return A(t, e, n, r);
          },
          X: function (t, n, e) {
            return A(t, r, n, e);
          },
          y: ee,
          Y: ne,
          Z: re,
          "%": ge,
        };
      function _(t, n) {
        return function (e) {
          var r,
            i,
            a,
            o = [],
            u = -1,
            l = 0,
            s = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++u < s; )
            37 === t.charCodeAt(u) &&
              (o.push(t.slice(l, u)),
              null != (i = In[(r = t.charAt(++u))])
                ? (r = t.charAt(++u))
                : (i = "e" === r ? " " : "0"),
              (a = n[r]) && (r = a(e, i)),
              o.push(r),
              (l = u + 1));
          return o.push(t.slice(l, u)), o.join("");
        };
      }
      function M(t, n) {
        return function (e) {
          var r,
            i,
            a = Yn(1900, void 0, 1);
          if (A(a, t, (e += ""), 0) != e.length) return null;
          if ("Q" in a) return new Date(a.Q);
          if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
          if (
            (n && !("Z" in a) && (a.Z = 0),
            "p" in a && (a.H = (a.H % 12) + 12 * a.p),
            void 0 === a.m && (a.m = "q" in a ? a.q : 0),
            "V" in a)
          ) {
            if (a.V < 1 || a.V > 53) return null;
            "w" in a || (a.w = 1),
              "Z" in a
                ? ((i = (r = Rn(Yn(a.y, 0, 1))).getUTCDay()),
                  (r = i > 4 || 0 === i ? Fn.ceil(r) : Fn(r)),
                  (r = Dn.offset(r, 7 * (a.V - 1))),
                  (a.y = r.getUTCFullYear()),
                  (a.m = r.getUTCMonth()),
                  (a.d = r.getUTCDate() + ((a.w + 6) % 7)))
                : ((i = (r = Un(Yn(a.y, 0, 1))).getDay()),
                  (r = i > 4 || 0 === i ? Mn.ceil(r) : Mn(r)),
                  (r = wn.offset(r, 7 * (a.V - 1))),
                  (a.y = r.getFullYear()),
                  (a.m = r.getMonth()),
                  (a.d = r.getDate() + ((a.w + 6) % 7)));
          } else
            ("W" in a || "U" in a) &&
              ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0),
              (i =
                "Z" in a
                  ? Rn(Yn(a.y, 0, 1)).getUTCDay()
                  : Un(Yn(a.y, 0, 1)).getDay()),
              (a.m = 0),
              (a.d =
                "W" in a
                  ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                  : a.w + 7 * a.U - ((i + 6) % 7)));
          return "Z" in a
            ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), Rn(a))
            : Un(a);
        };
      }
      function A(t, n, e, r) {
        for (var i, a, o = 0, u = n.length, l = e.length; o < u; ) {
          if (r >= l) return -1;
          if (37 === (i = n.charCodeAt(o++))) {
            if (
              ((i = n.charAt(o++)),
              !(a = x[i in In ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (b.x = _(e, b)),
        (b.X = _(r, b)),
        (b.c = _(n, b)),
        (w.x = _(e, w)),
        (w.X = _(r, w)),
        (w.c = _(n, w)),
        {
          format: function (t) {
            var n = _((t += ""), b);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          parse: function (t) {
            var n = M((t += ""), !1);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var n = _((t += ""), w);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcParse: function (t) {
            var n = M((t += ""), !0);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    })(t)),
      (Pn = On.format),
      On.parse,
      (jn = On.utcFormat),
      On.utcParse;
  })({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });
  var ar = 1e3,
    or = 6e4,
    ur = 36e5,
    lr = 864e5,
    sr = 2592e6,
    cr = 31536e6;
  function fr(t) {
    return new Date(t);
  }
  function hr(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }
  function gr(t, n, e, r, i, a, o, u, s) {
    var c = It(),
      f = c.invert,
      h = c.domain,
      g = s(".%L"),
      d = s(":%S"),
      m = s("%I:%M"),
      v = s("%I %p"),
      y = s("%a %d"),
      b = s("%b %d"),
      w = s("%B"),
      x = s("%Y"),
      _ = [
        [o, 1, ar],
        [o, 5, 5e3],
        [o, 15, 15e3],
        [o, 30, 3e4],
        [a, 1, or],
        [a, 5, 3e5],
        [a, 15, 9e5],
        [a, 30, 18e5],
        [i, 1, ur],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [r, 1, lr],
        [r, 2, 1728e5],
        [e, 1, 6048e5],
        [n, 1, sr],
        [n, 3, 7776e6],
        [t, 1, cr],
      ];
    function M(u) {
      return (
        o(u) < u
          ? g
          : a(u) < u
          ? d
          : i(u) < u
          ? m
          : r(u) < u
          ? v
          : n(u) < u
          ? e(u) < u
            ? y
            : b
          : t(u) < u
          ? w
          : x
      )(u);
    }
    function A(n, e, r) {
      if ((null == n && (n = 10), "number" == typeof n)) {
        var i,
          a = Math.abs(r - e) / n,
          o = l(function (t) {
            return t[2];
          }).right(_, a);
        return (
          o === _.length
            ? ((i = p(e / cr, r / cr, n)), (n = t))
            : o
            ? ((i = (o = _[a / _[o - 1][2] < _[o][2] / a ? o - 1 : o])[1]),
              (n = o[0]))
            : ((i = Math.max(p(e, r, n), 1)), (n = u)),
          n.every(i)
        );
      }
      return n;
    }
    return (
      (c.invert = function (t) {
        return new Date(f(t));
      }),
      (c.domain = function (t) {
        return arguments.length ? h(Array.from(t, hr)) : h().map(fr);
      }),
      (c.ticks = function (t) {
        var n,
          e = h(),
          r = e[0],
          i = e[e.length - 1],
          a = i < r;
        return (
          a && ((n = r), (r = i), (i = n)),
          (n = (n = A(t, r, i)) ? n.range(r, i + 1) : []),
          a ? n.reverse() : n
        );
      }),
      (c.tickFormat = function (t, n) {
        return null == n ? M : s(n);
      }),
      (c.nice = function (t) {
        var n = h();
        return (t = A(t, n[0], n[n.length - 1]))
          ? h(
              (function (t, n) {
                var e,
                  r = 0,
                  i = (t = t.slice()).length - 1,
                  a = t[r],
                  o = t[i];
                return (
                  o < a &&
                    ((e = r), (r = i), (i = e), (e = a), (a = o), (o = e)),
                  (t[r] = n.floor(a)),
                  (t[i] = n.ceil(o)),
                  t
                );
              })(n, t)
            )
          : c;
      }),
      (c.copy = function () {
        return Pt(c, gr(t, n, e, r, i, a, o, u, s));
      }),
      c
    );
  }
  function pr() {
    return T.apply(
      gr(kn, Sn, _n, wn, bn, yn, vn, fn, Pn).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2),
      ]),
      arguments
    );
  }
  function dr() {
    return T.apply(
      gr(Ln, En, Nn, Dn, Tn, Cn, vn, fn, jn).domain([
        Date.UTC(2e3, 0, 1),
        Date.UTC(2e3, 0, 2),
      ]),
      arguments
    );
  }
  function mr() {
    var t,
      n,
      e,
      r,
      i,
      a = 0,
      o = 1,
      u = Ut,
      l = !1;
    function s(n) {
      return isNaN((n = +n))
        ? i
        : u(
            0 === e
              ? 0.5
              : ((n = (r(n) - t) * e), l ? Math.max(0, Math.min(1, n)) : n)
          );
    }
    function c(t) {
      return function (n) {
        var e, r;
        return arguments.length
          ? (([e, r] = n), (u = t(e, r)), s)
          : [u(0), u(1)];
      };
    }
    return (
      (s.domain = function (i) {
        return arguments.length
          ? (([a, o] = i),
            (t = r((a = +a))),
            (n = r((o = +o))),
            (e = t === n ? 0 : 1 / (n - t)),
            s)
          : [a, o];
      }),
      (s.clamp = function (t) {
        return arguments.length ? ((l = !!t), s) : l;
      }),
      (s.interpolator = function (t) {
        return arguments.length ? ((u = t), s) : u;
      }),
      (s.range = c(St)),
      (s.rangeRound = c(kt)),
      (s.unknown = function (t) {
        return arguments.length ? ((i = t), s) : i;
      }),
      function (i) {
        return (
          (r = i), (t = i(a)), (n = i(o)), (e = t === n ? 0 : 1 / (n - t)), s
        );
      }
    );
  }
  function vr(t, n) {
    return n
      .domain(t.domain())
      .interpolator(t.interpolator())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function yr() {
    var t = on(mr()(Ut));
    return (
      (t.copy = function () {
        return vr(t, yr());
      }),
      D.apply(t, arguments)
    );
  }
  var br = "http://www.w3.org/1999/xhtml",
    wr = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: br,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
  function xr(t) {
    var n = (t += ""),
      e = n.indexOf(":");
    return (
      e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
      wr.hasOwnProperty(n) ? { space: wr[n], local: t } : t
    );
  }
  function _r(t) {
    return function () {
      var n = this.ownerDocument,
        e = this.namespaceURI;
      return e === br && n.documentElement.namespaceURI === br
        ? n.createElement(t)
        : n.createElementNS(e, t);
    };
  }
  function Mr(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function Ar(t) {
    var n = xr(t);
    return (n.local ? Mr : _r)(n);
  }
  function Sr() {}
  function kr(t) {
    return null == t
      ? Sr
      : function () {
          return this.querySelector(t);
        };
  }
  function Cr(t) {
    return "object" == typeof t && "length" in t ? t : Array.from(t);
  }
  function Tr() {
    return [];
  }
  function Dr(t) {
    return null == t
      ? Tr
      : function () {
          return this.querySelectorAll(t);
        };
  }
  function zr(t) {
    return function () {
      return this.matches(t);
    };
  }
  function Nr(t) {
    return function (n) {
      return n.matches(t);
    };
  }
  var Fr = Array.prototype.find;
  function Hr() {
    return this.firstElementChild;
  }
  var Er = Array.prototype.filter;
  function Lr() {
    return this.children;
  }
  function Ur(t) {
    return new Array(t.length);
  }
  function Rr(t, n) {
    (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n);
  }
  function Yr(t) {
    return function () {
      return t;
    };
  }
  function Or(t, n, e, r, i, a) {
    for (var o, u = 0, l = n.length, s = a.length; u < s; ++u)
      (o = n[u]) ? ((o.__data__ = a[u]), (r[u] = o)) : (e[u] = new Rr(t, a[u]));
    for (; u < l; ++u) (o = n[u]) && (i[u] = o);
  }
  function Pr(t, n, e, r, i, a, o) {
    var u,
      l,
      s,
      c = new Map(),
      f = n.length,
      h = a.length,
      g = new Array(f);
    for (u = 0; u < f; ++u)
      (l = n[u]) &&
        ((g[u] = s = o.call(l, l.__data__, u, n) + ""),
        c.has(s) ? (i[u] = l) : c.set(s, l));
    for (u = 0; u < h; ++u)
      (s = o.call(t, a[u], u, a) + ""),
        (l = c.get(s))
          ? ((r[u] = l), (l.__data__ = a[u]), c.delete(s))
          : (e[u] = new Rr(t, a[u]));
    for (u = 0; u < f; ++u) (l = n[u]) && c.get(g[u]) === l && (i[u] = l);
  }
  function jr(t) {
    return t.__data__;
  }
  function Ir(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function Xr(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function qr(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Br(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }
  function Vr(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }
  function Wr(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }
  function Gr(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(t.space, t.local)
        : this.setAttributeNS(t.space, t.local, e);
    };
  }
  function $r(t) {
    return (
      (t.ownerDocument && t.ownerDocument.defaultView) ||
      (t.document && t) ||
      t.defaultView
    );
  }
  function Zr(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function Qr(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }
  function Jr(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r
        ? this.style.removeProperty(t)
        : this.style.setProperty(t, r, e);
    };
  }
  function Kr(t, n) {
    return (
      t.style.getPropertyValue(n) ||
      $r(t).getComputedStyle(t, null).getPropertyValue(n)
    );
  }
  function ti(t) {
    return function () {
      delete this[t];
    };
  }
  function ni(t, n) {
    return function () {
      this[t] = n;
    };
  }
  function ei(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : (this[t] = e);
    };
  }
  function ri(t) {
    return t.trim().split(/^|\s+/);
  }
  function ii(t) {
    return t.classList || new ai(t);
  }
  function ai(t) {
    (this._node = t), (this._names = ri(t.getAttribute("class") || ""));
  }
  function oi(t, n) {
    for (var e = ii(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
  }
  function ui(t, n) {
    for (var e = ii(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
  }
  function li(t) {
    return function () {
      oi(this, t);
    };
  }
  function si(t) {
    return function () {
      ui(this, t);
    };
  }
  function ci(t, n) {
    return function () {
      (n.apply(this, arguments) ? oi : ui)(this, t);
    };
  }
  function fi() {
    this.textContent = "";
  }
  function hi(t) {
    return function () {
      this.textContent = t;
    };
  }
  function gi(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }
  function pi() {
    this.innerHTML = "";
  }
  function di(t) {
    return function () {
      this.innerHTML = t;
    };
  }
  function mi(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }
  function vi() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function yi() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function bi() {
    return null;
  }
  function wi() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function xi() {
    var t = this.cloneNode(!1),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function _i() {
    var t = this.cloneNode(!0),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function Mi(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          e = t.indexOf(".");
        return (
          e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
          { type: t, name: n }
        );
      });
  }
  function Ai(t) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var e, r = 0, i = -1, a = n.length; r < a; ++r)
          (e = n[r]),
            (t.type && e.type !== t.type) || e.name !== t.name
              ? (n[++i] = e)
              : this.removeEventListener(e.type, e.listener, e.options);
        ++i ? (n.length = i) : delete this.__on;
      }
    };
  }
  function Si(t, n, e) {
    return function () {
      var r,
        i = this.__on,
        a = (function (t) {
          return function (n) {
            t.call(this, n, this.__data__);
          };
        })(n);
      if (i)
        for (var o = 0, u = i.length; o < u; ++o)
          if ((r = i[o]).type === t.type && r.name === t.name)
            return (
              this.removeEventListener(r.type, r.listener, r.options),
              this.addEventListener(r.type, (r.listener = a), (r.options = e)),
              void (r.value = n)
            );
      this.addEventListener(t.type, a, e),
        (r = { type: t.type, name: t.name, value: n, listener: a, options: e }),
        i ? i.push(r) : (this.__on = [r]);
    };
  }
  function ki(t, n, e) {
    var r = $r(t),
      i = r.CustomEvent;
    "function" == typeof i
      ? (i = new i(n, e))
      : ((i = r.document.createEvent("Event")),
        e
          ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(n, !1, !1)),
      t.dispatchEvent(i);
  }
  function Ci(t, n) {
    return function () {
      return ki(this, t, n);
    };
  }
  function Ti(t, n) {
    return function () {
      return ki(this, t, n.apply(this, arguments));
    };
  }
  (Rr.prototype = {
    constructor: Rr,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    },
  }),
    (ai.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    });
  var Di = [null];
  function zi(t, n) {
    (this._groups = t), (this._parents = n);
  }
  function Ni() {
    return new zi([[document.documentElement]], Di);
  }
  function Fi(t) {
    return "string" == typeof t
      ? new zi([[document.querySelector(t)]], [document.documentElement])
      : new zi([[t]], Di);
  }
  function Hi(t, n) {
    if (
      ((t = (function (t) {
        let n;
        for (; (n = t.sourceEvent); ) t = n;
        return t;
      })(t)),
      void 0 === n && (n = t.currentTarget),
      n)
    ) {
      var e = n.ownerSVGElement || n;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return (
          (r.x = t.clientX),
          (r.y = t.clientY),
          [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
        );
      }
      if (n.getBoundingClientRect) {
        var i = n.getBoundingClientRect();
        return [
          t.clientX - i.left - n.clientLeft,
          t.clientY - i.top - n.clientTop,
        ];
      }
    }
    return [t.pageX, t.pageY];
  }
  zi.prototype = Ni.prototype = {
    constructor: zi,
    select: function (t) {
      "function" != typeof t && (t = kr(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (
          var a, o, u = n[i], l = u.length, s = (r[i] = new Array(l)), c = 0;
          c < l;
          ++c
        )
          (a = u[c]) &&
            (o = t.call(a, a.__data__, c, u)) &&
            ("__data__" in a && (o.__data__ = a.__data__), (s[c] = o));
      return new zi(r, this._parents);
    },
    selectAll: function (t) {
      t =
        "function" == typeof t
          ? (function (t) {
              return function () {
                var n = t.apply(this, arguments);
                return null == n ? [] : Cr(n);
              };
            })(t)
          : Dr(t);
      for (
        var n = this._groups, e = n.length, r = [], i = [], a = 0;
        a < e;
        ++a
      )
        for (var o, u = n[a], l = u.length, s = 0; s < l; ++s)
          (o = u[s]) && (r.push(t.call(o, o.__data__, s, u)), i.push(o));
      return new zi(r, i);
    },
    selectChild: function (t) {
      return this.select(
        null == t
          ? Hr
          : (function (t) {
              return function () {
                return Fr.call(this.children, t);
              };
            })("function" == typeof t ? t : Nr(t))
      );
    },
    selectChildren: function (t) {
      return this.selectAll(
        null == t
          ? Lr
          : (function (t) {
              return function () {
                return Er.call(this.children, t);
              };
            })("function" == typeof t ? t : Nr(t))
      );
    },
    filter: function (t) {
      "function" != typeof t && (t = zr(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var a, o = n[i], u = o.length, l = (r[i] = []), s = 0; s < u; ++s)
          (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
      return new zi(r, this._parents);
    },
    data: function (t, n) {
      if (!arguments.length) return Array.from(this, jr);
      var e = n ? Pr : Or,
        r = this._parents,
        i = this._groups;
      "function" != typeof t && (t = Yr(t));
      for (
        var a = i.length,
          o = new Array(a),
          u = new Array(a),
          l = new Array(a),
          s = 0;
        s < a;
        ++s
      ) {
        var c = r[s],
          f = i[s],
          h = f.length,
          g = Cr(t.call(c, c && c.__data__, s, r)),
          p = g.length,
          d = (u[s] = new Array(p)),
          m = (o[s] = new Array(p)),
          v = (l[s] = new Array(h));
        e(c, f, d, m, v, g, n);
        for (var y, b, w = 0, x = 0; w < p; ++w)
          if ((y = d[w])) {
            for (w >= x && (x = w + 1); !(b = m[x]) && ++x < p; );
            y._next = b || null;
          }
      }
      return ((o = new zi(o, r))._enter = u), (o._exit = l), o;
    },
    enter: function () {
      return new zi(this._enter || this._groups.map(Ur), this._parents);
    },
    exit: function () {
      return new zi(this._exit || this._groups.map(Ur), this._parents);
    },
    join: function (t, n, e) {
      var r = this.enter(),
        i = this,
        a = this.exit();
      return (
        (r = "function" == typeof t ? t(r) : r.append(t + "")),
        null != n && (i = n(i)),
        null == e ? a.remove() : e(a),
        r && i ? r.merge(i).order() : i
      );
    },
    merge: function (t) {
      if (!(t instanceof zi)) throw new Error("invalid merge");
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          a = Math.min(r, i),
          o = new Array(r),
          u = 0;
        u < a;
        ++u
      )
        for (
          var l,
            s = n[u],
            c = e[u],
            f = s.length,
            h = (o[u] = new Array(f)),
            g = 0;
          g < f;
          ++g
        )
          (l = s[g] || c[g]) && (h[g] = l);
      for (; u < r; ++u) o[u] = n[u];
      return new zi(o, this._parents);
    },
    selection: function () {
      return this;
    },
    order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0; )
          (r = i[a]) &&
            (o &&
              4 ^ r.compareDocumentPosition(o) &&
              o.parentNode.insertBefore(r, o),
            (o = r));
      return this;
    },
    sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }
      t || (t = Ir);
      for (
        var e = this._groups, r = e.length, i = new Array(r), a = 0;
        a < r;
        ++a
      ) {
        for (
          var o, u = e[a], l = u.length, s = (i[a] = new Array(l)), c = 0;
          c < l;
          ++c
        )
          (o = u[c]) && (s[c] = o);
        s.sort(n);
      }
      return new zi(i, this._parents).order();
    },
    call: function () {
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    },
    nodes: function () {
      return Array.from(this);
    },
    node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
          var o = r[i];
          if (o) return o;
        }
      return null;
    },
    size: function () {
      let t = 0;
      for (const n of this) ++t;
      return t;
    },
    empty: function () {
      return !this.node();
    },
    each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)
          (i = a[o]) && t.call(i, i.__data__, o, a);
      return this;
    },
    attr: function (t, n) {
      var e = xr(t);
      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? qr
            : Xr
          : "function" == typeof n
          ? e.local
            ? Gr
            : Wr
          : e.local
          ? Vr
          : Br)(e, n)
      );
    },
    style: function (t, n, e) {
      return arguments.length > 1
        ? this.each(
            (null == n ? Zr : "function" == typeof n ? Jr : Qr)(
              t,
              n,
              null == e ? "" : e
            )
          )
        : Kr(this.node(), t);
    },
    property: function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? ti : "function" == typeof n ? ei : ni)(t, n))
        : this.node()[t];
    },
    classed: function (t, n) {
      var e = ri(t + "");
      if (arguments.length < 2) {
        for (var r = ii(this.node()), i = -1, a = e.length; ++i < a; )
          if (!r.contains(e[i])) return !1;
        return !0;
      }
      return this.each(("function" == typeof n ? ci : n ? li : si)(e, n));
    },
    text: function (t) {
      return arguments.length
        ? this.each(null == t ? fi : ("function" == typeof t ? gi : hi)(t))
        : this.node().textContent;
    },
    html: function (t) {
      return arguments.length
        ? this.each(null == t ? pi : ("function" == typeof t ? mi : di)(t))
        : this.node().innerHTML;
    },
    raise: function () {
      return this.each(vi);
    },
    lower: function () {
      return this.each(yi);
    },
    append: function (t) {
      var n = "function" == typeof t ? t : Ar(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function (t, n) {
      var e = "function" == typeof t ? t : Ar(t),
        r = null == n ? bi : "function" == typeof n ? n : kr(n);
      return this.select(function () {
        return this.insertBefore(
          e.apply(this, arguments),
          r.apply(this, arguments) || null
        );
      });
    },
    remove: function () {
      return this.each(wi);
    },
    clone: function (t) {
      return this.select(t ? _i : xi);
    },
    datum: function (t) {
      return arguments.length
        ? this.property("__data__", t)
        : this.node().__data__;
    },
    on: function (t, n, e) {
      var r,
        i,
        a = Mi(t + ""),
        o = a.length;
      if (!(arguments.length < 2)) {
        for (u = n ? Si : Ai, r = 0; r < o; ++r) this.each(u(a[r], n, e));
        return this;
      }
      var u = this.node().__on;
      if (u)
        for (var l, s = 0, c = u.length; s < c; ++s)
          for (r = 0, l = u[s]; r < o; ++r)
            if ((i = a[r]).type === l.type && i.name === l.name) return l.value;
    },
    dispatch: function (t, n) {
      return this.each(("function" == typeof n ? Ti : Ci)(t, n));
    },
    [Symbol.iterator]: function* () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r, i = t[n], a = 0, o = i.length; a < o; ++a)
          (r = i[a]) && (yield r);
    },
  };
  var Ei = "$";
  function Li() {}
  function Ui(t, n) {
    var e = new Li();
    if (t instanceof Li)
      t.each(function (t, n) {
        e.set(n, t);
      });
    else if (Array.isArray(t)) {
      var r,
        i = -1,
        a = t.length;
      if (null == n) for (; ++i < a; ) e.set(i, t[i]);
      else for (; ++i < a; ) e.set(n((r = t[i]), i, t), r);
    } else if (t) for (var o in t) e.set(o, t[o]);
    return e;
  }
  function Ri() {}
  Li.prototype = Ui.prototype = {
    constructor: Li,
    has: function (t) {
      return Ei + t in this;
    },
    get: function (t) {
      return this[Ei + t];
    },
    set: function (t, n) {
      return (this[Ei + t] = n), this;
    },
    remove: function (t) {
      var n = Ei + t;
      return n in this && delete this[n];
    },
    clear: function () {
      for (var t in this) t[0] === Ei && delete this[t];
    },
    keys: function () {
      var t = [];
      for (var n in this) n[0] === Ei && t.push(n.slice(1));
      return t;
    },
    values: function () {
      var t = [];
      for (var n in this) n[0] === Ei && t.push(this[n]);
      return t;
    },
    entries: function () {
      var t = [];
      for (var n in this)
        n[0] === Ei && t.push({ key: n.slice(1), value: this[n] });
      return t;
    },
    size: function () {
      var t = 0;
      for (var n in this) n[0] === Ei && ++t;
      return t;
    },
    empty: function () {
      for (var t in this) if (t[0] === Ei) return !1;
      return !0;
    },
    each: function (t) {
      for (var n in this) n[0] === Ei && t(this[n], n.slice(1), this);
    },
  };
  var Yi = Ui.prototype;
  Ri.prototype = function (t, n) {
    var e = new Ri();
    if (t instanceof Ri)
      t.each(function (t) {
        e.add(t);
      });
    else if (t) {
      var r = -1,
        i = t.length;
      if (null == n) for (; ++r < i; ) e.add(t[r]);
      else for (; ++r < i; ) e.add(n(t[r], r, t));
    }
    return e;
  }.prototype = {
    constructor: Ri,
    has: Yi.has,
    add: function (t) {
      return (this[Ei + (t += "")] = t), this;
    },
    remove: Yi.remove,
    clear: Yi.clear,
    values: Yi.keys,
    size: Yi.size,
    empty: Yi.empty,
    each: Yi.each,
  };
  var Oi = "http://www.w3.org/1999/xhtml",
    Pi = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: Oi,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
  function ji(t) {
    var n = (t += ""),
      e = n.indexOf(":");
    return (
      e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
      Pi.hasOwnProperty(n) ? { space: Pi[n], local: t } : t
    );
  }
  function Ii(t) {
    return function () {
      var n = this.ownerDocument,
        e = this.namespaceURI;
      return e === Oi && n.documentElement.namespaceURI === Oi
        ? n.createElement(t)
        : n.createElementNS(e, t);
    };
  }
  function Xi(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function qi(t) {
    var n = ji(t);
    return (n.local ? Xi : Ii)(n);
  }
  function Bi() {}
  function Vi(t) {
    return null == t
      ? Bi
      : function () {
          return this.querySelector(t);
        };
  }
  function Wi() {
    return [];
  }
  function Gi(t) {
    return new Array(t.length);
  }
  function $i(t, n) {
    (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n);
  }
  $i.prototype = {
    constructor: $i,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    },
  };
  function Zi(t, n, e, r, i, a) {
    for (var o, u = 0, l = n.length, s = a.length; u < s; ++u)
      (o = n[u]) ? ((o.__data__ = a[u]), (r[u] = o)) : (e[u] = new $i(t, a[u]));
    for (; u < l; ++u) (o = n[u]) && (i[u] = o);
  }
  function Qi(t, n, e, r, i, a, o) {
    var u,
      l,
      s,
      c = {},
      f = n.length,
      h = a.length,
      g = new Array(f);
    for (u = 0; u < f; ++u)
      (l = n[u]) &&
        ((g[u] = s = "$" + o.call(l, l.__data__, u, n)),
        s in c ? (i[u] = l) : (c[s] = l));
    for (u = 0; u < h; ++u)
      (l = c[(s = "$" + o.call(t, a[u], u, a))])
        ? ((r[u] = l), (l.__data__ = a[u]), (c[s] = null))
        : (e[u] = new $i(t, a[u]));
    for (u = 0; u < f; ++u) (l = n[u]) && c[g[u]] === l && (i[u] = l);
  }
  function Ji(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function Ki(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function ta(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function na(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }
  function ea(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }
  function ra(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }
  function ia(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(t.space, t.local)
        : this.setAttributeNS(t.space, t.local, e);
    };
  }
  function aa(t) {
    return (
      (t.ownerDocument && t.ownerDocument.defaultView) ||
      (t.document && t) ||
      t.defaultView
    );
  }
  function oa(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function ua(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }
  function la(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r
        ? this.style.removeProperty(t)
        : this.style.setProperty(t, r, e);
    };
  }
  function sa(t, n) {
    return (
      t.style.getPropertyValue(n) ||
      aa(t).getComputedStyle(t, null).getPropertyValue(n)
    );
  }
  function ca(t) {
    return function () {
      delete this[t];
    };
  }
  function fa(t, n) {
    return function () {
      this[t] = n;
    };
  }
  function ha(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : (this[t] = e);
    };
  }
  function ga(t) {
    return t.trim().split(/^|\s+/);
  }
  function pa(t) {
    return t.classList || new da(t);
  }
  function da(t) {
    (this._node = t), (this._names = ga(t.getAttribute("class") || ""));
  }
  function ma(t, n) {
    for (var e = pa(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
  }
  function va(t, n) {
    for (var e = pa(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
  }
  function ya(t) {
    return function () {
      ma(this, t);
    };
  }
  function ba(t) {
    return function () {
      va(this, t);
    };
  }
  function wa(t, n) {
    return function () {
      (n.apply(this, arguments) ? ma : va)(this, t);
    };
  }
  function xa() {
    this.textContent = "";
  }
  function _a(t) {
    return function () {
      this.textContent = t;
    };
  }
  function Ma(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }
  function Aa() {
    this.innerHTML = "";
  }
  function Sa(t) {
    return function () {
      this.innerHTML = t;
    };
  }
  function ka(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }
  function Ca() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function Ta() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Da() {
    return null;
  }
  function za() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function Na() {
    var t = this.cloneNode(!1),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function Fa() {
    var t = this.cloneNode(!0),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  da.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 &&
        (this._names.push(t),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 &&
        (this._names.splice(n, 1),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  };
  var Ha = {};
  "undefined" != typeof document &&
    ("onmouseenter" in document.documentElement ||
      (Ha = { mouseenter: "mouseover", mouseleave: "mouseout" }));
  function Ea(t, n, e) {
    return (
      (t = La(t, n, e)),
      function (n) {
        var e = n.relatedTarget;
        (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
          t.call(this, n);
      }
    );
  }
  function La(t, n, e) {
    return function (r) {
      try {
        t.call(this, this.__data__, n, e);
      } finally {
      }
    };
  }
  function Ua(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          e = t.indexOf(".");
        return (
          e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
          { type: t, name: n }
        );
      });
  }
  function Ra(t) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var e, r = 0, i = -1, a = n.length; r < a; ++r)
          (e = n[r]),
            (t.type && e.type !== t.type) || e.name !== t.name
              ? (n[++i] = e)
              : this.removeEventListener(e.type, e.listener, e.capture);
        ++i ? (n.length = i) : delete this.__on;
      }
    };
  }
  function Ya(t, n, e) {
    var r = Ha.hasOwnProperty(t.type) ? Ea : La;
    return function (i, a, o) {
      var u,
        l = this.__on,
        s = r(n, a, o);
      if (l)
        for (var c = 0, f = l.length; c < f; ++c)
          if ((u = l[c]).type === t.type && u.name === t.name)
            return (
              this.removeEventListener(u.type, u.listener, u.capture),
              this.addEventListener(u.type, (u.listener = s), (u.capture = e)),
              void (u.value = n)
            );
      this.addEventListener(t.type, s, e),
        (u = { type: t.type, name: t.name, value: n, listener: s, capture: e }),
        l ? l.push(u) : (this.__on = [u]);
    };
  }
  function Oa(t, n, e) {
    var r = aa(t),
      i = r.CustomEvent;
    "function" == typeof i
      ? (i = new i(n, e))
      : ((i = r.document.createEvent("Event")),
        e
          ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(n, !1, !1)),
      t.dispatchEvent(i);
  }
  function Pa(t, n) {
    return function () {
      return Oa(this, t, n);
    };
  }
  function ja(t, n) {
    return function () {
      return Oa(this, t, n.apply(this, arguments));
    };
  }
  var Ia = [null];
  function Xa(t, n) {
    (this._groups = t), (this._parents = n);
  }
  function qa() {
    return new Xa([[document.documentElement]], Ia);
  }
  function Ba(t) {
    return "string" == typeof t
      ? new Xa([[document.querySelector(t)]], [document.documentElement])
      : new Xa([[t]], Ia);
  }
  function Va() {
    var t = function () {
        return "n";
      },
      n = function () {
        return [0, 0];
      },
      e = function () {
        return " ";
      },
      r = document.body,
      i = f(),
      a = null,
      o = null,
      u = null;
    function l(t) {
      (a = (function (t) {
        var n = t.node();
        return n
          ? "svg" === n.tagName.toLowerCase()
            ? n
            : n.ownerSVGElement
          : null;
      })(t)) && ((o = a.createSVGPoint()), r.appendChild(i));
    }
    (l.show = function () {
      var i = Array.prototype.slice.call(arguments);
      i[i.length - 1] instanceof SVGElement && (u = i.pop());
      var a,
        o = e.apply(this, i),
        f = n.apply(this, i),
        g = t.apply(this, i),
        p = h(),
        d = c.length,
        m = document.documentElement.scrollTop || r.scrollTop,
        v = document.documentElement.scrollLeft || r.scrollLeft;
      for (p.html(o).style("opacity", 1).style("pointer-events", "all"); d--; )
        p.classed(c[d], !1);
      return (
        (a = s.get(g).apply(this)),
        p
          .classed(g, !0)
          .style("top", a.top + f[0] + m + "px")
          .style("left", a.left + f[1] + v + "px"),
        l
      );
    }),
      (l.hide = function () {
        return h().style("opacity", 0).style("pointer-events", "none"), l;
      }),
      (l.attr = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().attr(t);
        var e = Array.prototype.slice.call(arguments);
        return qa.prototype.attr.apply(h(), e), l;
      }),
      (l.style = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().style(t);
        var e = Array.prototype.slice.call(arguments);
        return qa.prototype.style.apply(h(), e), l;
      }),
      (l.direction = function (n) {
        return arguments.length ? ((t = null == n ? n : p(n)), l) : t;
      }),
      (l.offset = function (t) {
        return arguments.length ? ((n = null == t ? t : p(t)), l) : n;
      }),
      (l.html = function (t) {
        return arguments.length ? ((e = null == t ? t : p(t)), l) : e;
      }),
      (l.rootElement = function (t) {
        return arguments.length ? ((r = null == t ? t : p(t)), l) : r;
      }),
      (l.destroy = function () {
        return i && (h().remove(), (i = null)), l;
      });
    var s = Ui({
        n: function () {
          var t = g(this);
          return {
            top: t.n.y - i.offsetHeight,
            left: t.n.x - i.offsetWidth / 2,
          };
        },
        s: function () {
          var t = g(this);
          return { top: t.s.y, left: t.s.x - i.offsetWidth / 2 };
        },
        e: function () {
          var t = g(this);
          return { top: t.e.y - i.offsetHeight / 2, left: t.e.x };
        },
        w: function () {
          var t = g(this);
          return {
            top: t.w.y - i.offsetHeight / 2,
            left: t.w.x - i.offsetWidth,
          };
        },
        nw: function () {
          var t = g(this);
          return { top: t.nw.y - i.offsetHeight, left: t.nw.x - i.offsetWidth };
        },
        ne: function () {
          var t = g(this);
          return { top: t.ne.y - i.offsetHeight, left: t.ne.x };
        },
        sw: function () {
          var t = g(this);
          return { top: t.sw.y, left: t.sw.x - i.offsetWidth };
        },
        se: function () {
          var t = g(this);
          return { top: t.se.y, left: t.se.x };
        },
      }),
      c = s.keys();
    function f() {
      var t = Ba(document.createElement("div"));
      return (
        t
          .style("position", "absolute")
          .style("top", 0)
          .style("opacity", 0)
          .style("pointer-events", "none")
          .style("box-sizing", "border-box"),
        t.node()
      );
    }
    function h() {
      return null == i && ((i = f()), r.appendChild(i)), Ba(i);
    }
    function g(t) {
      for (var n = u || t; null == n.getScreenCTM && null != n.parentNode; )
        n = n.parentNode;
      var e = {},
        r = n.getScreenCTM(),
        i = n.getBBox(),
        a = i.width,
        l = i.height,
        s = i.x,
        c = i.y;
      return (
        (o.x = s),
        (o.y = c),
        (e.nw = o.matrixTransform(r)),
        (o.x += a),
        (e.ne = o.matrixTransform(r)),
        (o.y += l),
        (e.se = o.matrixTransform(r)),
        (o.x -= a),
        (e.sw = o.matrixTransform(r)),
        (o.y -= l / 2),
        (e.w = o.matrixTransform(r)),
        (o.x += a),
        (e.e = o.matrixTransform(r)),
        (o.x -= a / 2),
        (o.y -= l / 2),
        (e.n = o.matrixTransform(r)),
        (o.y += l),
        (e.s = o.matrixTransform(r)),
        e
      );
    }
    function p(t) {
      return "function" == typeof t
        ? t
        : function () {
            return t;
          };
    }
    return l;
  }
  function Wa(t) {
    for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
      e[r] = "#" + t.slice(6 * r, 6 * ++r);
    return e;
  }
  Xa.prototype = qa.prototype = {
    constructor: Xa,
    select: function (t) {
      "function" != typeof t && (t = Vi(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (
          var a, o, u = n[i], l = u.length, s = (r[i] = new Array(l)), c = 0;
          c < l;
          ++c
        )
          (a = u[c]) &&
            (o = t.call(a, a.__data__, c, u)) &&
            ("__data__" in a && (o.__data__ = a.__data__), (s[c] = o));
      return new Xa(r, this._parents);
    },
    selectAll: function (t) {
      "function" != typeof t &&
        (t = (function (t) {
          return null == t
            ? Wi
            : function () {
                return this.querySelectorAll(t);
              };
        })(t));
      for (
        var n = this._groups, e = n.length, r = [], i = [], a = 0;
        a < e;
        ++a
      )
        for (var o, u = n[a], l = u.length, s = 0; s < l; ++s)
          (o = u[s]) && (r.push(t.call(o, o.__data__, s, u)), i.push(o));
      return new Xa(r, i);
    },
    filter: function (t) {
      "function" != typeof t &&
        (t = (function (t) {
          return function () {
            return this.matches(t);
          };
        })(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var a, o = n[i], u = o.length, l = (r[i] = []), s = 0; s < u; ++s)
          (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
      return new Xa(r, this._parents);
    },
    data: function (t, n) {
      if (!t)
        return (
          (p = new Array(this.size())),
          (c = -1),
          this.each(function (t) {
            p[++c] = t;
          }),
          p
        );
      var e,
        r = n ? Qi : Zi,
        i = this._parents,
        a = this._groups;
      "function" != typeof t &&
        ((e = t),
        (t = function () {
          return e;
        }));
      for (
        var o = a.length,
          u = new Array(o),
          l = new Array(o),
          s = new Array(o),
          c = 0;
        c < o;
        ++c
      ) {
        var f = i[c],
          h = a[c],
          g = h.length,
          p = t.call(f, f && f.__data__, c, i),
          d = p.length,
          m = (l[c] = new Array(d)),
          v = (u[c] = new Array(d));
        r(f, h, m, v, (s[c] = new Array(g)), p, n);
        for (var y, b, w = 0, x = 0; w < d; ++w)
          if ((y = m[w])) {
            for (w >= x && (x = w + 1); !(b = v[x]) && ++x < d; );
            y._next = b || null;
          }
      }
      return ((u = new Xa(u, i))._enter = l), (u._exit = s), u;
    },
    enter: function () {
      return new Xa(this._enter || this._groups.map(Gi), this._parents);
    },
    exit: function () {
      return new Xa(this._exit || this._groups.map(Gi), this._parents);
    },
    join: function (t, n, e) {
      var r = this.enter(),
        i = this,
        a = this.exit();
      return (
        (r = "function" == typeof t ? t(r) : r.append(t + "")),
        null != n && (i = n(i)),
        null == e ? a.remove() : e(a),
        r && i ? r.merge(i).order() : i
      );
    },
    merge: function (t) {
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          a = Math.min(r, i),
          o = new Array(r),
          u = 0;
        u < a;
        ++u
      )
        for (
          var l,
            s = n[u],
            c = e[u],
            f = s.length,
            h = (o[u] = new Array(f)),
            g = 0;
          g < f;
          ++g
        )
          (l = s[g] || c[g]) && (h[g] = l);
      for (; u < r; ++u) o[u] = n[u];
      return new Xa(o, this._parents);
    },
    order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0; )
          (r = i[a]) &&
            (o &&
              4 ^ r.compareDocumentPosition(o) &&
              o.parentNode.insertBefore(r, o),
            (o = r));
      return this;
    },
    sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }
      t || (t = Ji);
      for (
        var e = this._groups, r = e.length, i = new Array(r), a = 0;
        a < r;
        ++a
      ) {
        for (
          var o, u = e[a], l = u.length, s = (i[a] = new Array(l)), c = 0;
          c < l;
          ++c
        )
          (o = u[c]) && (s[c] = o);
        s.sort(n);
      }
      return new Xa(i, this._parents).order();
    },
    call: function () {
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    },
    nodes: function () {
      var t = new Array(this.size()),
        n = -1;
      return (
        this.each(function () {
          t[++n] = this;
        }),
        t
      );
    },
    node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
          var o = r[i];
          if (o) return o;
        }
      return null;
    },
    size: function () {
      var t = 0;
      return (
        this.each(function () {
          ++t;
        }),
        t
      );
    },
    empty: function () {
      return !this.node();
    },
    each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, a = n[e], o = 0, u = a.length; o < u; ++o)
          (i = a[o]) && t.call(i, i.__data__, o, a);
      return this;
    },
    attr: function (t, n) {
      var e = ji(t);
      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? ta
            : Ki
          : "function" == typeof n
          ? e.local
            ? ia
            : ra
          : e.local
          ? ea
          : na)(e, n)
      );
    },
    style: function (t, n, e) {
      return arguments.length > 1
        ? this.each(
            (null == n ? oa : "function" == typeof n ? la : ua)(
              t,
              n,
              null == e ? "" : e
            )
          )
        : sa(this.node(), t);
    },
    property: function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? ca : "function" == typeof n ? ha : fa)(t, n))
        : this.node()[t];
    },
    classed: function (t, n) {
      var e = ga(t + "");
      if (arguments.length < 2) {
        for (var r = pa(this.node()), i = -1, a = e.length; ++i < a; )
          if (!r.contains(e[i])) return !1;
        return !0;
      }
      return this.each(("function" == typeof n ? wa : n ? ya : ba)(e, n));
    },
    text: function (t) {
      return arguments.length
        ? this.each(null == t ? xa : ("function" == typeof t ? Ma : _a)(t))
        : this.node().textContent;
    },
    html: function (t) {
      return arguments.length
        ? this.each(null == t ? Aa : ("function" == typeof t ? ka : Sa)(t))
        : this.node().innerHTML;
    },
    raise: function () {
      return this.each(Ca);
    },
    lower: function () {
      return this.each(Ta);
    },
    append: function (t) {
      var n = "function" == typeof t ? t : qi(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function (t, n) {
      var e = "function" == typeof t ? t : qi(t),
        r = null == n ? Da : "function" == typeof n ? n : Vi(n);
      return this.select(function () {
        return this.insertBefore(
          e.apply(this, arguments),
          r.apply(this, arguments) || null
        );
      });
    },
    remove: function () {
      return this.each(za);
    },
    clone: function (t) {
      return this.select(t ? Fa : Na);
    },
    datum: function (t) {
      return arguments.length
        ? this.property("__data__", t)
        : this.node().__data__;
    },
    on: function (t, n, e) {
      var r,
        i,
        a = Ua(t + ""),
        o = a.length;
      if (!(arguments.length < 2)) {
        for (u = n ? Ya : Ra, null == e && (e = !1), r = 0; r < o; ++r)
          this.each(u(a[r], n, e));
        return this;
      }
      var u = this.node().__on;
      if (u)
        for (var l, s = 0, c = u.length; s < c; ++s)
          for (r = 0, l = u[s]; r < o; ++r)
            if ((i = a[r]).type === l.type && i.name === l.name) return l.value;
    },
    dispatch: function (t, n) {
      return this.each(("function" == typeof n ? ja : Pa)(t, n));
    },
  };
  var Ga = Wa("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    $a = Wa(
      "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
    ),
    Za = ((t) => mt(t[t.length - 1]))(
      new Array(3)
        .concat(
          "fc8d59ffffbf91bfdb",
          "d7191cfdae61abd9e92c7bb6",
          "d7191cfdae61ffffbfabd9e92c7bb6",
          "d73027fc8d59fee090e0f3f891bfdb4575b4",
          "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
          "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
          "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
          "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
          "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
        )
        .map(Wa)
    ),
    Qa = o({
      init: function (t) {
        t.parentNode.appendChild(t);
      },
    }),
    Ja = o({
      props: {
        id: {},
        colorScale: { default: un().range(["black", "white"]) },
        angle: { default: 0 },
      },
      init: function (t, n) {
        (n.id = "areaGradient".concat(Math.round(1e4 * Math.random()))),
          (n.gradient = Fi(t).append("linearGradient"));
      },
      update: function (t) {
        var n = (Math.PI * t.angle) / 180;
        t.gradient
          .attr("y1", Math.round(100 * Math.max(0, Math.sin(n))) + "%")
          .attr("y2", Math.round(100 * Math.max(0, -Math.sin(n))) + "%")
          .attr("x1", Math.round(100 * Math.max(0, -Math.cos(n))) + "%")
          .attr("x2", Math.round(100 * Math.max(0, Math.cos(n))) + "%")
          .attr("id", t.id);
        var e = un().domain([0, 100]).range(t.colorScale.domain()),
          r = t.gradient.selectAll("stop").data(v(0, 100.01, 20));
        r.exit().remove(),
          r
            .merge(r.enter().append("stop"))
            .attr("offset", function (t) {
              return "".concat(t, "%");
            })
            .attr("stop-color", function (n) {
              return t.colorScale(e(n));
            });
      },
    });
  o({
    props: {
      id: { default: "areaGradient".concat(Math.round(1e4 * Math.random())) },
    },
    init: function (t, n) {
      (n.filter = Fi(t).append("defs").append("filter").attr("height", "130%")),
        n.filter
          .append("feGaussianBlur")
          .attr("in", "SourceAlpha")
          .attr("stdDeviation", 3),
        n.filter
          .append("feOffset")
          .attr("dx", 2)
          .attr("dy", 2)
          .attr("result", "offsetblur");
      var e = n.filter.append("feMerge");
      e.append("feMergeNode"),
        e.append("feMergeNode").attr("in", "SourceGraphic");
    },
    update: function (t) {
      t.filter.attr("id", t.id);
    },
  }),
    o({
      props: {
        x: { default: 0 },
        y: { default: 0 },
        r: { default: 8 },
        color: { default: "darkblue" },
        duration: { default: 0.7 },
        angleFull: { default: 120 },
      },
      init: function (t, n) {
        (t = Fi(t)),
          (n.path = t.append("path")),
          (n.transform = n.path
            .append("animateTransform")
            .attr("attributeName", "transform")
            .attr("attributeType", "XML")
            .attr("type", "rotate")
            .attr("begin", "0s")
            .attr("fill", "freeze")
            .attr("repeatCount", "indefinite"));
      },
      update: function (t) {
        t.path
          .attr(
            "d",
            (function (t, n, e, r, i, a) {
              (i = (i / 180) * Math.PI), (a = (a / 180) * Math.PI);
              var o = e,
                u = e - r,
                l = [
                  [t + o * Math.cos(i), n + o * Math.sin(i)],
                  [t + o * Math.cos(a), n + o * Math.sin(a)],
                  [t + u * Math.cos(a), n + u * Math.sin(a)],
                  [t + u * Math.cos(i), n + u * Math.sin(i)],
                ],
                s = (a - i) % (2 * Math.PI) > Math.PI ? 1 : 0,
                c = [];
              return (
                c.push("M" + l[0].join()),
                c.push("A" + [o, o, 0, s, 1, l[1]].join()),
                c.push("L" + l[2].join()),
                c.push("A" + [u, u, 0, s, 0, l[3]].join()),
                c.push("z"),
                c.join(" ")
              );
            })(t.x, t.y, t.r, t.r / 3, 0, t.angleFull)
          )
          .attr("fill", t.color),
          t.transform
            .attr("from", "0 " + t.x + " " + t.y)
            .attr("to", "360 " + t.x + " " + t.y)
            .attr("dur", t.duration + "s");
      },
    }),
    o({
      props: {
        imgUrl: {},
        x: { default: 0 },
        y: { default: 0 },
        maxWidth: { default: 20 },
        maxHeight: { default: 20 },
        svgAlign: { default: "xMidYMid" },
      },
      methods: {
        show: function (t) {
          return (
            t.img.attr("width", t.maxWidth).attr("height", t.maxHeight), this
          );
        },
        hide: function (t) {
          return t.img.attr("width", 0).attr("height", 0), this;
        },
      },
      init: function (t, n) {
        n.img = Fi(t).append("image");
      },
      update: function (t) {
        t.img
          .attr("xlink:href", t.imgUrl)
          .attr("x", t.x)
          .attr("y", t.y)
          .attr("width", t.maxW)
          .attr("height", t.maxH)
          .attr("preserveAspectRatio", t.svgAlign + " meet");
      },
    }),
    o({
      props: {
        selection: { default: { x: [null, null], y: [null, null] } },
        xDomain: {
          onChange: function (t, n) {
            n.xScale.domain(t);
          },
        },
        yDomain: {
          onChange: function (t, n) {
            n.yScale.domain(t);
          },
        },
        transitionDuration: 700,
      },
      stateInit: { xScale: un(), yScale: un() },
      init: function (t, n, e) {
        var r = e.width,
          i = e.height,
          a = e.margin,
          o = void 0 === a ? { top: 2, right: 2, bottom: 2, left: 2 } : a;
        n.xScale.range([o.left, r - n.margin.right]),
          n.yScale.range([o.top, i - n.margin.bottom]),
          (n.svg = Fi(t).append("svg").attr("width", r).attr("height", i)),
          (n.outerBox = n.svg
            .append("rect")
            .attr("x", n.xScale.range()[0])
            .attr("y", n.yScale.range()[0])
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", n.xScale.range()[1])
            .attr("height", n.yScale.range()[1])
            .style("fill", "#EEE")
            .style("stroke", "grey")),
          (n.selectionBox = n.svg
            .append("rect")
            .attr("rx", 1)
            .attr("ry", 1)
            .attr("width", 0)
            .attr("height", 0)
            .style("stroke", "blue")
            .style("stroke-opacity", 0.6)
            .style("fill", "blue")
            .style("fill-opacity", 0.3));
      },
      update: function (t) {
        t.outerBox
          .attr("x", t.xScale.range()[0])
          .attr("y", t.yScale.range()[0])
          .attr("width", t.xScale.range()[1])
          .attr("height", t.yScale.range()[1]),
          t.selectionBox
            .attr("x", t.xScale(t.selection.x[0]))
            .attr("y", t.yScale(t.selection.y[0]))
            .attr("width", t.xScale(t.selection.x[1] - t.selection.x[0]))
            .attr("height", t.yScale(t.selection.y[1] - t.selection.y[0]));
      },
    });
  function Ka(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return to(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      })(t) ||
      (function (t, n) {
        if (!t) return;
        if ("string" == typeof t) return to(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === e && t.constructor && (e = t.constructor.name);
        if ("Map" === e || "Set" === e) return Array.from(t);
        if (
          "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        )
          return to(t, n);
      })(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function to(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  var no = o({
    props: {
      bbox: { default: { width: null, height: null } },
      passes: { default: 3 },
    },
    init: function (t, n) {
      n.el = t;
    },
    update: function (t) {
      Ka(Array(t.passes).keys()).some(function () {
        var n = parseInt(t.el.style["font-size"].split("px")[0]) || 20,
          e = t.el.getBBox(),
          r = Math.floor(
            n * Math.min(t.bbox.width / e.width, t.bbox.height / e.height)
          );
        if (r === n) return !0;
        t.el.style["font-size"] = r + "px";
      });
    },
  });
  o({
    props: { maxWidth: { default: 1 / 0 } },
    init: function (t, n) {
      n.el = t;
    },
    update: function (t) {
      for (
        var n,
          e,
          r = t.el.textContent,
          i = Math.round(
            ((r.length * t.maxWidth) / t.el.getBBox().width) * 1.2
          );
        --i && t.maxWidth / t.el.getBBox().width < 1;

      )
        t.el.textContent =
          ((e = i),
          (n = r).length <= e
            ? n
            : n.substring(0, (2 * e) / 3) +
              "..." +
              n.substring(n.length - e / 3, n.length));
    },
  });
  var eo = (function (t, n, e) {
      return (
        t(
          (e = {
            path: n,
            exports: {},
            require: function (t, n) {
              return (function () {
                throw new Error(
                  "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                );
              })(null == n && e.path);
            },
          }),
          e.exports
        ),
        e.exports
      );
    })(function (t) {
      !(function (n) {
        var e = /^\s+/,
          r = /\s+$/,
          i = 0,
          a = n.round,
          o = n.min,
          u = n.max,
          l = n.random;
        function s(t, l) {
          if (((l = l || {}), (t = t || "") instanceof s)) return t;
          if (!(this instanceof s)) return new s(t, l);
          var c = (function (t) {
            var i = { r: 0, g: 0, b: 0 },
              a = 1,
              l = null,
              s = null,
              c = null,
              f = !1,
              h = !1;
            "string" == typeof t &&
              (t = (function (t) {
                t = t.replace(e, "").replace(r, "").toLowerCase();
                var n,
                  i = !1;
                if (C[t]) (t = C[t]), (i = !0);
                else if ("transparent" == t)
                  return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                if ((n = P.rgb.exec(t))) return { r: n[1], g: n[2], b: n[3] };
                if ((n = P.rgba.exec(t)))
                  return { r: n[1], g: n[2], b: n[3], a: n[4] };
                if ((n = P.hsl.exec(t))) return { h: n[1], s: n[2], l: n[3] };
                if ((n = P.hsla.exec(t)))
                  return { h: n[1], s: n[2], l: n[3], a: n[4] };
                if ((n = P.hsv.exec(t))) return { h: n[1], s: n[2], v: n[3] };
                if ((n = P.hsva.exec(t)))
                  return { h: n[1], s: n[2], v: n[3], a: n[4] };
                if ((n = P.hex8.exec(t)))
                  return {
                    r: F(n[1]),
                    g: F(n[2]),
                    b: F(n[3]),
                    a: U(n[4]),
                    format: i ? "name" : "hex8",
                  };
                if ((n = P.hex6.exec(t)))
                  return {
                    r: F(n[1]),
                    g: F(n[2]),
                    b: F(n[3]),
                    format: i ? "name" : "hex",
                  };
                if ((n = P.hex4.exec(t)))
                  return {
                    r: F(n[1] + "" + n[1]),
                    g: F(n[2] + "" + n[2]),
                    b: F(n[3] + "" + n[3]),
                    a: U(n[4] + "" + n[4]),
                    format: i ? "name" : "hex8",
                  };
                if ((n = P.hex3.exec(t)))
                  return {
                    r: F(n[1] + "" + n[1]),
                    g: F(n[2] + "" + n[2]),
                    b: F(n[3] + "" + n[3]),
                    format: i ? "name" : "hex",
                  };
                return !1;
              })(t));
            "object" == typeof t &&
              (j(t.r) && j(t.g) && j(t.b)
                ? ((g = t.r),
                  (p = t.g),
                  (d = t.b),
                  (i = {
                    r: 255 * z(g, 255),
                    g: 255 * z(p, 255),
                    b: 255 * z(d, 255),
                  }),
                  (f = !0),
                  (h = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"))
                : j(t.h) && j(t.s) && j(t.v)
                ? ((l = E(t.s)),
                  (s = E(t.v)),
                  (i = (function (t, e, r) {
                    (t = 6 * z(t, 360)), (e = z(e, 100)), (r = z(r, 100));
                    var i = n.floor(t),
                      a = t - i,
                      o = r * (1 - e),
                      u = r * (1 - a * e),
                      l = r * (1 - (1 - a) * e),
                      s = i % 6;
                    return {
                      r: 255 * [r, u, o, o, l, r][s],
                      g: 255 * [l, r, r, u, o, o][s],
                      b: 255 * [o, o, l, r, r, u][s],
                    };
                  })(t.h, l, s)),
                  (f = !0),
                  (h = "hsv"))
                : j(t.h) &&
                  j(t.s) &&
                  j(t.l) &&
                  ((l = E(t.s)),
                  (c = E(t.l)),
                  (i = (function (t, n, e) {
                    var r, i, a;
                    function o(t, n, e) {
                      return (
                        e < 0 && (e += 1),
                        e > 1 && (e -= 1),
                        e < 1 / 6
                          ? t + 6 * (n - t) * e
                          : e < 0.5
                          ? n
                          : e < 2 / 3
                          ? t + (n - t) * (2 / 3 - e) * 6
                          : t
                      );
                    }
                    if (
                      ((t = z(t, 360)),
                      (n = z(n, 100)),
                      (e = z(e, 100)),
                      0 === n)
                    )
                      r = i = a = e;
                    else {
                      var u = e < 0.5 ? e * (1 + n) : e + n - e * n,
                        l = 2 * e - u;
                      (r = o(l, u, t + 1 / 3)),
                        (i = o(l, u, t)),
                        (a = o(l, u, t - 1 / 3));
                    }
                    return { r: 255 * r, g: 255 * i, b: 255 * a };
                  })(t.h, l, c)),
                  (f = !0),
                  (h = "hsl")),
              t.hasOwnProperty("a") && (a = t.a));
            var g, p, d;
            return (
              (a = D(a)),
              {
                ok: f,
                format: t.format || h,
                r: o(255, u(i.r, 0)),
                g: o(255, u(i.g, 0)),
                b: o(255, u(i.b, 0)),
                a: a,
              }
            );
          })(t);
          (this._originalInput = t),
            (this._r = c.r),
            (this._g = c.g),
            (this._b = c.b),
            (this._a = c.a),
            (this._roundA = a(100 * this._a) / 100),
            (this._format = l.format || c.format),
            (this._gradientType = l.gradientType),
            this._r < 1 && (this._r = a(this._r)),
            this._g < 1 && (this._g = a(this._g)),
            this._b < 1 && (this._b = a(this._b)),
            (this._ok = c.ok),
            (this._tc_id = i++);
        }
        function c(t, n, e) {
          (t = z(t, 255)), (n = z(n, 255)), (e = z(e, 255));
          var r,
            i,
            a = u(t, n, e),
            l = o(t, n, e),
            s = (a + l) / 2;
          if (a == l) r = i = 0;
          else {
            var c = a - l;
            switch (((i = s > 0.5 ? c / (2 - a - l) : c / (a + l)), a)) {
              case t:
                r = (n - e) / c + (n < e ? 6 : 0);
                break;
              case n:
                r = (e - t) / c + 2;
                break;
              case e:
                r = (t - n) / c + 4;
            }
            r /= 6;
          }
          return { h: r, s: i, l: s };
        }
        function f(t, n, e) {
          (t = z(t, 255)), (n = z(n, 255)), (e = z(e, 255));
          var r,
            i,
            a = u(t, n, e),
            l = o(t, n, e),
            s = a,
            c = a - l;
          if (((i = 0 === a ? 0 : c / a), a == l)) r = 0;
          else {
            switch (a) {
              case t:
                r = (n - e) / c + (n < e ? 6 : 0);
                break;
              case n:
                r = (e - t) / c + 2;
                break;
              case e:
                r = (t - n) / c + 4;
            }
            r /= 6;
          }
          return { h: r, s: i, v: s };
        }
        function h(t, n, e, r) {
          var i = [
            H(a(t).toString(16)),
            H(a(n).toString(16)),
            H(a(e).toString(16)),
          ];
          return r &&
            i[0].charAt(0) == i[0].charAt(1) &&
            i[1].charAt(0) == i[1].charAt(1) &&
            i[2].charAt(0) == i[2].charAt(1)
            ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
            : i.join("");
        }
        function g(t, n, e, r) {
          return [
            H(L(r)),
            H(a(t).toString(16)),
            H(a(n).toString(16)),
            H(a(e).toString(16)),
          ].join("");
        }
        function p(t, n) {
          n = 0 === n ? 0 : n || 10;
          var e = s(t).toHsl();
          return (e.s -= n / 100), (e.s = N(e.s)), s(e);
        }
        function d(t, n) {
          n = 0 === n ? 0 : n || 10;
          var e = s(t).toHsl();
          return (e.s += n / 100), (e.s = N(e.s)), s(e);
        }
        function m(t) {
          return s(t).desaturate(100);
        }
        function v(t, n) {
          n = 0 === n ? 0 : n || 10;
          var e = s(t).toHsl();
          return (e.l += n / 100), (e.l = N(e.l)), s(e);
        }
        function y(t, n) {
          n = 0 === n ? 0 : n || 10;
          var e = s(t).toRgb();
          return (
            (e.r = u(0, o(255, e.r - a((-n / 100) * 255)))),
            (e.g = u(0, o(255, e.g - a((-n / 100) * 255)))),
            (e.b = u(0, o(255, e.b - a((-n / 100) * 255)))),
            s(e)
          );
        }
        function b(t, n) {
          n = 0 === n ? 0 : n || 10;
          var e = s(t).toHsl();
          return (e.l -= n / 100), (e.l = N(e.l)), s(e);
        }
        function w(t, n) {
          var e = s(t).toHsl(),
            r = (e.h + n) % 360;
          return (e.h = r < 0 ? 360 + r : r), s(e);
        }
        function x(t) {
          var n = s(t).toHsl();
          return (n.h = (n.h + 180) % 360), s(n);
        }
        function _(t) {
          var n = s(t).toHsl(),
            e = n.h;
          return [
            s(t),
            s({ h: (e + 120) % 360, s: n.s, l: n.l }),
            s({ h: (e + 240) % 360, s: n.s, l: n.l }),
          ];
        }
        function M(t) {
          var n = s(t).toHsl(),
            e = n.h;
          return [
            s(t),
            s({ h: (e + 90) % 360, s: n.s, l: n.l }),
            s({ h: (e + 180) % 360, s: n.s, l: n.l }),
            s({ h: (e + 270) % 360, s: n.s, l: n.l }),
          ];
        }
        function A(t) {
          var n = s(t).toHsl(),
            e = n.h;
          return [
            s(t),
            s({ h: (e + 72) % 360, s: n.s, l: n.l }),
            s({ h: (e + 216) % 360, s: n.s, l: n.l }),
          ];
        }
        function S(t, n, e) {
          (n = n || 6), (e = e || 30);
          var r = s(t).toHsl(),
            i = 360 / e,
            a = [s(t)];
          for (r.h = (r.h - ((i * n) >> 1) + 720) % 360; --n; )
            (r.h = (r.h + i) % 360), a.push(s(r));
          return a;
        }
        function k(t, n) {
          n = n || 6;
          for (
            var e = s(t).toHsv(), r = e.h, i = e.s, a = e.v, o = [], u = 1 / n;
            n--;

          )
            o.push(s({ h: r, s: i, v: a })), (a = (a + u) % 1);
          return o;
        }
        (s.prototype = {
          isDark: function () {
            return this.getBrightness() < 128;
          },
          isLight: function () {
            return !this.isDark();
          },
          isValid: function () {
            return this._ok;
          },
          getOriginalInput: function () {
            return this._originalInput;
          },
          getFormat: function () {
            return this._format;
          },
          getAlpha: function () {
            return this._a;
          },
          getBrightness: function () {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
          },
          getLuminance: function () {
            var t,
              e,
              r,
              i = this.toRgb();
            return (
              (t = i.r / 255),
              (e = i.g / 255),
              (r = i.b / 255),
              0.2126 *
                (t <= 0.03928 ? t / 12.92 : n.pow((t + 0.055) / 1.055, 2.4)) +
                0.7152 *
                  (e <= 0.03928 ? e / 12.92 : n.pow((e + 0.055) / 1.055, 2.4)) +
                0.0722 *
                  (r <= 0.03928 ? r / 12.92 : n.pow((r + 0.055) / 1.055, 2.4))
            );
          },
          setAlpha: function (t) {
            return (
              (this._a = D(t)), (this._roundA = a(100 * this._a) / 100), this
            );
          },
          toHsv: function () {
            var t = f(this._r, this._g, this._b);
            return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
          },
          toHsvString: function () {
            var t = f(this._r, this._g, this._b),
              n = a(360 * t.h),
              e = a(100 * t.s),
              r = a(100 * t.v);
            return 1 == this._a
              ? "hsv(" + n + ", " + e + "%, " + r + "%)"
              : "hsva(" + n + ", " + e + "%, " + r + "%, " + this._roundA + ")";
          },
          toHsl: function () {
            var t = c(this._r, this._g, this._b);
            return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
          },
          toHslString: function () {
            var t = c(this._r, this._g, this._b),
              n = a(360 * t.h),
              e = a(100 * t.s),
              r = a(100 * t.l);
            return 1 == this._a
              ? "hsl(" + n + ", " + e + "%, " + r + "%)"
              : "hsla(" + n + ", " + e + "%, " + r + "%, " + this._roundA + ")";
          },
          toHex: function (t) {
            return h(this._r, this._g, this._b, t);
          },
          toHexString: function (t) {
            return "#" + this.toHex(t);
          },
          toHex8: function (t) {
            return (function (t, n, e, r, i) {
              var o = [
                H(a(t).toString(16)),
                H(a(n).toString(16)),
                H(a(e).toString(16)),
                H(L(r)),
              ];
              if (
                i &&
                o[0].charAt(0) == o[0].charAt(1) &&
                o[1].charAt(0) == o[1].charAt(1) &&
                o[2].charAt(0) == o[2].charAt(1) &&
                o[3].charAt(0) == o[3].charAt(1)
              )
                return (
                  o[0].charAt(0) +
                  o[1].charAt(0) +
                  o[2].charAt(0) +
                  o[3].charAt(0)
                );
              return o.join("");
            })(this._r, this._g, this._b, this._a, t);
          },
          toHex8String: function (t) {
            return "#" + this.toHex8(t);
          },
          toRgb: function () {
            return { r: a(this._r), g: a(this._g), b: a(this._b), a: this._a };
          },
          toRgbString: function () {
            return 1 == this._a
              ? "rgb(" +
                  a(this._r) +
                  ", " +
                  a(this._g) +
                  ", " +
                  a(this._b) +
                  ")"
              : "rgba(" +
                  a(this._r) +
                  ", " +
                  a(this._g) +
                  ", " +
                  a(this._b) +
                  ", " +
                  this._roundA +
                  ")";
          },
          toPercentageRgb: function () {
            return {
              r: a(100 * z(this._r, 255)) + "%",
              g: a(100 * z(this._g, 255)) + "%",
              b: a(100 * z(this._b, 255)) + "%",
              a: this._a,
            };
          },
          toPercentageRgbString: function () {
            return 1 == this._a
              ? "rgb(" +
                  a(100 * z(this._r, 255)) +
                  "%, " +
                  a(100 * z(this._g, 255)) +
                  "%, " +
                  a(100 * z(this._b, 255)) +
                  "%)"
              : "rgba(" +
                  a(100 * z(this._r, 255)) +
                  "%, " +
                  a(100 * z(this._g, 255)) +
                  "%, " +
                  a(100 * z(this._b, 255)) +
                  "%, " +
                  this._roundA +
                  ")";
          },
          toName: function () {
            return 0 === this._a
              ? "transparent"
              : !(this._a < 1) && (T[h(this._r, this._g, this._b, !0)] || !1);
          },
          toFilter: function (t) {
            var n = "#" + g(this._r, this._g, this._b, this._a),
              e = n,
              r = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
              var i = s(t);
              e = "#" + g(i._r, i._g, i._b, i._a);
            }
            return (
              "progid:DXImageTransform.Microsoft.gradient(" +
              r +
              "startColorstr=" +
              n +
              ",endColorstr=" +
              e +
              ")"
            );
          },
          toString: function (t) {
            var n = !!t;
            t = t || this._format;
            var e = !1,
              r = this._a < 1 && this._a >= 0;
            return n ||
              !r ||
              ("hex" !== t &&
                "hex6" !== t &&
                "hex3" !== t &&
                "hex4" !== t &&
                "hex8" !== t &&
                "name" !== t)
              ? ("rgb" === t && (e = this.toRgbString()),
                "prgb" === t && (e = this.toPercentageRgbString()),
                ("hex" !== t && "hex6" !== t) || (e = this.toHexString()),
                "hex3" === t && (e = this.toHexString(!0)),
                "hex4" === t && (e = this.toHex8String(!0)),
                "hex8" === t && (e = this.toHex8String()),
                "name" === t && (e = this.toName()),
                "hsl" === t && (e = this.toHslString()),
                "hsv" === t && (e = this.toHsvString()),
                e || this.toHexString())
              : "name" === t && 0 === this._a
              ? this.toName()
              : this.toRgbString();
          },
          clone: function () {
            return s(this.toString());
          },
          _applyModification: function (t, n) {
            var e = t.apply(null, [this].concat([].slice.call(n)));
            return (
              (this._r = e._r),
              (this._g = e._g),
              (this._b = e._b),
              this.setAlpha(e._a),
              this
            );
          },
          lighten: function () {
            return this._applyModification(v, arguments);
          },
          brighten: function () {
            return this._applyModification(y, arguments);
          },
          darken: function () {
            return this._applyModification(b, arguments);
          },
          desaturate: function () {
            return this._applyModification(p, arguments);
          },
          saturate: function () {
            return this._applyModification(d, arguments);
          },
          greyscale: function () {
            return this._applyModification(m, arguments);
          },
          spin: function () {
            return this._applyModification(w, arguments);
          },
          _applyCombination: function (t, n) {
            return t.apply(null, [this].concat([].slice.call(n)));
          },
          analogous: function () {
            return this._applyCombination(S, arguments);
          },
          complement: function () {
            return this._applyCombination(x, arguments);
          },
          monochromatic: function () {
            return this._applyCombination(k, arguments);
          },
          splitcomplement: function () {
            return this._applyCombination(A, arguments);
          },
          triad: function () {
            return this._applyCombination(_, arguments);
          },
          tetrad: function () {
            return this._applyCombination(M, arguments);
          },
        }),
          (s.fromRatio = function (t, n) {
            if ("object" == typeof t) {
              var e = {};
              for (var r in t)
                t.hasOwnProperty(r) && (e[r] = "a" === r ? t[r] : E(t[r]));
              t = e;
            }
            return s(t, n);
          }),
          (s.equals = function (t, n) {
            return !(!t || !n) && s(t).toRgbString() == s(n).toRgbString();
          }),
          (s.random = function () {
            return s.fromRatio({ r: l(), g: l(), b: l() });
          }),
          (s.mix = function (t, n, e) {
            e = 0 === e ? 0 : e || 50;
            var r = s(t).toRgb(),
              i = s(n).toRgb(),
              a = e / 100;
            return s({
              r: (i.r - r.r) * a + r.r,
              g: (i.g - r.g) * a + r.g,
              b: (i.b - r.b) * a + r.b,
              a: (i.a - r.a) * a + r.a,
            });
          }),
          // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
          // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
          (s.readability = function (t, e) {
            var r = s(t),
              i = s(e);
            return (
              (n.max(r.getLuminance(), i.getLuminance()) + 0.05) /
              (n.min(r.getLuminance(), i.getLuminance()) + 0.05)
            );
          }),
          (s.isReadable = function (t, n, e) {
            var r,
              i,
              a = s.readability(t, n);
            switch (
              ((i = !1),
              (r = (function (t) {
                var n, e;
                (n = (
                  (t = t || { level: "AA", size: "small" }).level || "AA"
                ).toUpperCase()),
                  (e = (t.size || "small").toLowerCase()),
                  "AA" !== n && "AAA" !== n && (n = "AA");
                "small" !== e && "large" !== e && (e = "small");
                return { level: n, size: e };
              })(e)).level + r.size)
            ) {
              case "AAsmall":
              case "AAAlarge":
                i = a >= 4.5;
                break;
              case "AAlarge":
                i = a >= 3;
                break;
              case "AAAsmall":
                i = a >= 7;
            }
            return i;
          }),
          (s.mostReadable = function (t, n, e) {
            var r,
              i,
              a,
              o,
              u = null,
              l = 0;
            (i = (e = e || {}).includeFallbackColors),
              (a = e.level),
              (o = e.size);
            for (var c = 0; c < n.length; c++)
              (r = s.readability(t, n[c])) > l && ((l = r), (u = s(n[c])));
            return s.isReadable(t, u, { level: a, size: o }) || !i
              ? u
              : ((e.includeFallbackColors = !1),
                s.mostReadable(t, ["#fff", "#000"], e));
          });
        var C = (s.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32",
          }),
          T = (s.hexNames = (function (t) {
            var n = {};
            for (var e in t) t.hasOwnProperty(e) && (n[t[e]] = e);
            return n;
          })(C));
        function D(t) {
          return (
            (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
          );
        }
        function z(t, e) {
          (function (t) {
            return (
              "string" == typeof t &&
              -1 != t.indexOf(".") &&
              1 === parseFloat(t)
            );
          })(t) && (t = "100%");
          var r = (function (t) {
            return "string" == typeof t && -1 != t.indexOf("%");
          })(t);
          return (
            (t = o(e, u(0, parseFloat(t)))),
            r && (t = parseInt(t * e, 10) / 100),
            n.abs(t - e) < 1e-6 ? 1 : (t % e) / parseFloat(e)
          );
        }
        function N(t) {
          return o(1, u(0, t));
        }
        function F(t) {
          return parseInt(t, 16);
        }
        function H(t) {
          return 1 == t.length ? "0" + t : "" + t;
        }
        function E(t) {
          return t <= 1 && (t = 100 * t + "%"), t;
        }
        function L(t) {
          return n.round(255 * parseFloat(t)).toString(16);
        }
        function U(t) {
          return F(t) / 255;
        }
        var R,
          Y,
          O,
          P =
            ((Y =
              "[\\s|\\(]+(" +
              (R = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
              ")[,|\\s]+(" +
              R +
              ")[,|\\s]+(" +
              R +
              ")\\s*\\)?"),
            (O =
              "[\\s|\\(]+(" +
              R +
              ")[,|\\s]+(" +
              R +
              ")[,|\\s]+(" +
              R +
              ")[,|\\s]+(" +
              R +
              ")\\s*\\)?"),
            {
              CSS_UNIT: new RegExp(R),
              rgb: new RegExp("rgb" + Y),
              rgba: new RegExp("rgba" + O),
              hsl: new RegExp("hsl" + Y),
              hsla: new RegExp("hsla" + O),
              hsv: new RegExp("hsv" + Y),
              hsva: new RegExp("hsva" + O),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            });
        function j(t) {
          return !!P.CSS_UNIT.exec(t);
        }
        t.exports ? (t.exports = s) : (window.tinycolor = s);
      })(Math);
    }),
    ro = o({
      props: { width: {}, height: {}, scale: {}, label: {} },
      init: function (t, n) {
        (n.gradient = Ja()(t)),
          (n.el = Fi(t)),
          (n.box = n.el
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)),
          (n.unitLabel = n.el
            .append("text")
            .attr("class", "legendText")
            .style("text-anchor", "middle")
            .style("dominant-baseline", "central")),
          (n.labelFitText = no()(n.unitLabel.node())),
          (n.startLabel = n.el
            .append("text")
            .style("text-anchor", "start")
            .style("dominant-baseline", "central")),
          (n.startLabelFitText = no()(n.startLabel.node())),
          (n.endLabel = n.el
            .append("text")
            .style("text-anchor", "end")
            .style("dominant-baseline", "central")),
          (n.endLabelFitText = no()(n.endLabel.node()));
      },
      update: function (t) {
        t.gradient.colorScale(t.scale),
          t.box
            .attr("width", t.width)
            .attr("height", t.height)
            .style("fill", "url(#".concat(t.gradient.id(), ")")),
          t.unitLabel
            .text(t.label)
            .attr("x", 0.5 * t.width)
            .attr("y", 0.5 * t.height)
            .style("text-anchor", "middle")
            .style("dominant-baseline", "central")
            .style(
              "fill",
              eo(
                t.scale(
                  (t.scale.domain()[t.scale.domain().length - 1] -
                    t.scale.domain()[0]) /
                    2
                )
              ).isLight()
                ? "#444"
                : "#CCC"
            ),
          t.labelFitText.bbox({ width: 0.8 * t.width, height: 0.9 * t.height }),
          t.startLabel
            .text(t.scale.domain()[0])
            .attr("x", 0.02 * t.width)
            .attr("y", 0.5 * t.height)
            .style(
              "fill",
              eo(t.scale(t.scale.domain()[0])).isLight() ? "#444" : "#CCC"
            ),
          t.startLabelFitText.bbox({
            width: 0.3 * t.width,
            height: 0.7 * t.height,
          }),
          t.endLabel
            .text(t.scale.domain()[t.scale.domain().length - 1])
            .attr("x", 0.98 * t.width)
            .attr("y", 0.5 * t.height)
            .style(
              "fill",
              eo(
                t.scale(t.scale.domain()[t.scale.domain().length - 1])
              ).isLight()
                ? "#444"
                : "#CCC"
            ),
          t.endLabelFitText.bbox({
            width: 0.3 * t.width,
            height: 0.7 * t.height,
          });
      },
    }),
    io = o({
      props: { width: {}, height: {}, scale: {}, label: {} },
      init: function (t, n) {
        n.el = Fi(t);
      },
      update: function (t) {
        var n = t.width / t.scale.domain().length,
          e = t.el.selectAll(".color-slot").data(t.scale.domain());
        e.exit().remove();
        var r = e.enter().append("g").attr("class", "color-slot");
        r
          .append("rect")
          .attr("y", 0)
          .attr("rx", 0)
          .attr("ry", 0)
          .attr("stroke-width", 0),
          r
            .append("text")
            .style("text-anchor", "middle")
            .style("dominant-baseline", "central"),
          r.append("title"),
          (e = e.merge(r))
            .select("rect")
            .attr("width", n)
            .attr("height", t.height)
            .attr("x", function (t, e) {
              return n * e;
            })
            .attr("fill", function (n) {
              return t.scale(n);
            }),
          e
            .select("text")
            .text(function (t) {
              return t;
            })
            .attr("x", function (t, e) {
              return n * (e + 0.5);
            })
            .attr("y", 0.5 * t.height)
            .style("fill", function (n) {
              return eo(t.scale(n)).isLight() ? "#333" : "#DDD";
            })
            .each(function (e) {
              no().bbox({ width: 0.9 * n, height: 0.8 * t.height })(this);
            }),
          e.select("title").text(function (n) {
            return "".concat(n, " ").concat(t.label);
          });
      },
    }),
    ao = o({
      props: { width: {}, height: {}, scale: {}, label: {} },
      init: function (t, n) {
        n.legend = Fi(t).append("g").attr("class", "legend");
      },
      update: function (t) {
        if (t.scale) {
          var n =
            !t.scale.hasOwnProperty("interpolate") &&
            !t.scale.hasOwnProperty("interpolator");
          t.legend.html(""),
            (n ? io : ro)()
              .width(t.width)
              .height(t.height)
              .scale(t.scale)
              .label(t.label)(t.legend.node());
        }
      },
    }),
    oo = { value: () => {} };
  function uo() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      r[t] = [];
    }
    return new lo(r);
  }
  function lo(t) {
    this._ = t;
  }
  function so(t, n) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var e = "",
          r = t.indexOf(".");
        if (
          (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
          t && !n.hasOwnProperty(t))
        )
          throw new Error("unknown type: " + t);
        return { type: t, name: e };
      });
  }
  function co(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r)
      if ((e = t[r]).name === n) return e.value;
  }
  function fo(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === n) {
        (t[r] = oo), (t = t.slice(0, r).concat(t.slice(r + 1)));
        break;
      }
    return null != e && t.push({ name: n, value: e }), t;
  }
  function ho(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }
  function go(t) {
    var n = t.document.documentElement,
      e = Fi(t).on("dragstart.drag", ho, !0);
    "onselectstart" in n
      ? e.on("selectstart.drag", ho, !0)
      : ((n.__noselect = n.style.MozUserSelect),
        (n.style.MozUserSelect = "none"));
  }
  function po(t, n) {
    var e = t.document.documentElement,
      r = Fi(t).on("dragstart.drag", null);
    n &&
      (r.on("click.drag", ho, !0),
      setTimeout(function () {
        r.on("click.drag", null);
      }, 0)),
      "onselectstart" in e
        ? r.on("selectstart.drag", null)
        : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
  }
  lo.prototype = uo.prototype = {
    constructor: lo,
    on: function (t, n) {
      var e,
        r = this._,
        i = so(t + "", r),
        a = -1,
        o = i.length;
      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n)
          throw new Error("invalid callback: " + n);
        for (; ++a < o; )
          if ((e = (t = i[a]).type)) r[e] = fo(r[e], t.name, n);
          else if (null == n) for (e in r) r[e] = fo(r[e], t.name, null);
        return this;
      }
      for (; ++a < o; )
        if ((e = (t = i[a]).type) && (e = co(r[e], t.name))) return e;
    },
    copy: function () {
      var t = {},
        n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new lo(t);
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0)
        for (var e, r, i = new Array(e), a = 0; a < e; ++a)
          i[a] = arguments[a + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (a = 0, e = (r = this._[t]).length; a < e; ++a)
        r[a].value.apply(n, i);
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
        r[i].value.apply(n, e);
    },
  };
  var mo,
    vo,
    yo = 0,
    bo = 0,
    wo = 0,
    xo = 0,
    _o = 0,
    Mo = 0,
    Ao = "object" == typeof performance && performance.now ? performance : Date,
    So =
      "object" == typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            setTimeout(t, 17);
          };
  function ko() {
    return _o || (So(Co), (_o = Ao.now() + Mo));
  }
  function Co() {
    _o = 0;
  }
  function To() {
    this._call = this._time = this._next = null;
  }
  function Do(t, n, e) {
    var r = new To();
    return r.restart(t, n, e), r;
  }
  function zo() {
    (_o = (xo = Ao.now()) + Mo), (yo = bo = 0);
    try {
      !(function () {
        ko(), ++yo;
        for (var t, n = mo; n; )
          (t = _o - n._time) >= 0 && n._call.call(null, t), (n = n._next);
        --yo;
      })();
    } finally {
      (yo = 0),
        (function () {
          var t,
            n,
            e = mo,
            r = 1 / 0;
          for (; e; )
            e._call
              ? (r > e._time && (r = e._time), (t = e), (e = e._next))
              : ((n = e._next),
                (e._next = null),
                (e = t ? (t._next = n) : (mo = n)));
          (vo = t), Fo(r);
        })(),
        (_o = 0);
    }
  }
  function No() {
    var t = Ao.now(),
      n = t - xo;
    n > 1e3 && ((Mo -= n), (xo = t));
  }
  function Fo(t) {
    yo ||
      (bo && (bo = clearTimeout(bo)),
      t - _o > 24
        ? (t < 1 / 0 && (bo = setTimeout(zo, t - Ao.now() - Mo)),
          wo && (wo = clearInterval(wo)))
        : (wo || ((xo = Ao.now()), (wo = setInterval(No, 1e3))),
          (yo = 1),
          So(zo)));
  }
  function Ho(t, n, e) {
    var r = new To();
    return (
      (n = null == n ? 0 : +n),
      r.restart(
        (e) => {
          r.stop(), t(e + n);
        },
        n,
        e
      ),
      r
    );
  }
  To.prototype = Do.prototype = {
    constructor: To,
    restart: function (t, n, e) {
      if ("function" != typeof t)
        throw new TypeError("callback is not a function");
      (e = (null == e ? ko() : +e) + (null == n ? 0 : +n)),
        this._next ||
          vo === this ||
          (vo ? (vo._next = this) : (mo = this), (vo = this)),
        (this._call = t),
        (this._time = e),
        Fo();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), Fo());
    },
  };
  var Eo = uo("start", "end", "cancel", "interrupt"),
    Lo = [];
  function Uo(t, n, e, r, i, a) {
    var o = t.__transition;
    if (o) {
      if (e in o) return;
    } else t.__transition = {};
    !(function (t, n, e) {
      var r,
        i = t.__transition;
      function a(t) {
        (e.state = 1),
          e.timer.restart(o, e.delay, e.time),
          e.delay <= t && o(t - e.delay);
      }
      function o(a) {
        var s, c, f, h;
        if (1 !== e.state) return l();
        for (s in i)
          if ((h = i[s]).name === e.name) {
            if (3 === h.state) return Ho(o);
            4 === h.state
              ? ((h.state = 6),
                h.timer.stop(),
                h.on.call("interrupt", t, t.__data__, h.index, h.group),
                delete i[s])
              : +s < n &&
                ((h.state = 6),
                h.timer.stop(),
                h.on.call("cancel", t, t.__data__, h.index, h.group),
                delete i[s]);
          }
        if (
          (Ho(function () {
            3 === e.state &&
              ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(a));
          }),
          (e.state = 2),
          e.on.call("start", t, t.__data__, e.index, e.group),
          2 === e.state)
        ) {
          for (
            e.state = 3, r = new Array((f = e.tween.length)), s = 0, c = -1;
            s < f;
            ++s
          )
            (h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) &&
              (r[++c] = h);
          r.length = c + 1;
        }
      }
      function u(n) {
        for (
          var i =
              n < e.duration
                ? e.ease.call(null, n / e.duration)
                : (e.timer.restart(l), (e.state = 5), 1),
            a = -1,
            o = r.length;
          ++a < o;

        )
          r[a].call(t, i);
        5 === e.state &&
          (e.on.call("end", t, t.__data__, e.index, e.group), l());
      }
      function l() {
        for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i)) return;
        delete t.__transition;
      }
      (i[n] = e), (e.timer = Do(a, 0, e.time));
    })(t, e, {
      name: n,
      index: r,
      group: i,
      on: Eo,
      tween: Lo,
      time: a.time,
      delay: a.delay,
      duration: a.duration,
      ease: a.ease,
      timer: null,
      state: 0,
    });
  }
  function Ro(t, n) {
    var e = Oo(t, n);
    if (e.state > 0) throw new Error("too late; already scheduled");
    return e;
  }
  function Yo(t, n) {
    var e = Oo(t, n);
    if (e.state > 3) throw new Error("too late; already running");
    return e;
  }
  function Oo(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e;
  }
  function Po(t, n) {
    var e,
      r,
      i,
      a = t.__transition,
      o = !0;
    if (a) {
      for (i in ((n = null == n ? null : n + ""), a))
        (e = a[i]).name === n
          ? ((r = e.state > 2 && e.state < 5),
            (e.state = 6),
            e.timer.stop(),
            e.on.call(
              r ? "interrupt" : "cancel",
              t,
              t.__data__,
              e.index,
              e.group
            ),
            delete a[i])
          : (o = !1);
      o && delete t.__transition;
    }
  }
  function jo(t, n) {
    var e, r;
    return function () {
      var i = Yo(this, t),
        a = i.tween;
      if (a !== e)
        for (var o = 0, u = (r = e = a).length; o < u; ++o)
          if (r[o].name === n) {
            (r = r.slice()).splice(o, 1);
            break;
          }
      i.tween = r;
    };
  }
  function Io(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error();
    return function () {
      var a = Yo(this, t),
        o = a.tween;
      if (o !== r) {
        i = (r = o).slice();
        for (var u = { name: n, value: e }, l = 0, s = i.length; l < s; ++l)
          if (i[l].name === n) {
            i[l] = u;
            break;
          }
        l === s && i.push(u);
      }
      a.tween = i;
    };
  }
  function Xo(t, n, e) {
    var r = t._id;
    return (
      t.each(function () {
        var t = Yo(this, r);
        (t.value || (t.value = {}))[n] = e.apply(this, arguments);
      }),
      function (t) {
        return Oo(t, r).value[n];
      }
    );
  }
  function qo(t, n) {
    var e;
    return (
      "number" == typeof n
        ? wt
        : n instanceof J
        ? pt
        : (e = J(n))
        ? ((n = e), pt)
        : At
    )(t, n);
  }
  function Bo(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function Vo(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Wo(t, n, e) {
    var r,
      i,
      a = e + "";
    return function () {
      var o = this.getAttribute(t);
      return o === a ? null : o === r ? i : (i = n((r = o), e));
    };
  }
  function Go(t, n, e) {
    var r,
      i,
      a = e + "";
    return function () {
      var o = this.getAttributeNS(t.space, t.local);
      return o === a ? null : o === r ? i : (i = n((r = o), e));
    };
  }
  function $o(t, n, e) {
    var r, i, a;
    return function () {
      var o,
        u,
        l = e(this);
      if (null != l)
        return (o = this.getAttribute(t)) === (u = l + "")
          ? null
          : o === r && u === i
          ? a
          : ((i = u), (a = n((r = o), l)));
      this.removeAttribute(t);
    };
  }
  function Zo(t, n, e) {
    var r, i, a;
    return function () {
      var o,
        u,
        l = e(this);
      if (null != l)
        return (o = this.getAttributeNS(t.space, t.local)) === (u = l + "")
          ? null
          : o === r && u === i
          ? a
          : ((i = u), (a = n((r = o), l)));
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Qo(t, n) {
    return function (e) {
      this.setAttribute(t, n.call(this, e));
    };
  }
  function Jo(t, n) {
    return function (e) {
      this.setAttributeNS(t.space, t.local, n.call(this, e));
    };
  }
  function Ko(t, n) {
    var e, r;
    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Jo(t, i)), e;
    }
    return (i._value = n), i;
  }
  function tu(t, n) {
    var e, r;
    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Qo(t, i)), e;
    }
    return (i._value = n), i;
  }
  function nu(t, n) {
    return function () {
      Ro(this, t).delay = +n.apply(this, arguments);
    };
  }
  function eu(t, n) {
    return (
      (n = +n),
      function () {
        Ro(this, t).delay = n;
      }
    );
  }
  function ru(t, n) {
    return function () {
      Yo(this, t).duration = +n.apply(this, arguments);
    };
  }
  function iu(t, n) {
    return (
      (n = +n),
      function () {
        Yo(this, t).duration = n;
      }
    );
  }
  function au(t, n) {
    if ("function" != typeof n) throw new Error();
    return function () {
      Yo(this, t).ease = n;
    };
  }
  function ou(t, n, e) {
    var r,
      i,
      a = (function (t) {
        return (t + "")
          .trim()
          .split(/^|\s+/)
          .every(function (t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
          });
      })(n)
        ? Ro
        : Yo;
    return function () {
      var o = a(this, t),
        u = o.on;
      u !== r && (i = (r = u).copy()).on(n, e), (o.on = i);
    };
  }
  var uu = Ni.prototype.constructor;
  function lu(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function su(t, n, e) {
    return function (r) {
      this.style.setProperty(t, n.call(this, r), e);
    };
  }
  function cu(t, n, e) {
    var r, i;
    function a() {
      var a = n.apply(this, arguments);
      return a !== i && (r = (i = a) && su(t, a, e)), r;
    }
    return (a._value = n), a;
  }
  function fu(t) {
    return function (n) {
      this.textContent = t.call(this, n);
    };
  }
  function hu(t) {
    var n, e;
    function r() {
      var r = t.apply(this, arguments);
      return r !== e && (n = (e = r) && fu(r)), n;
    }
    return (r._value = t), r;
  }
  var gu = 0;
  function pu(t, n, e, r) {
    (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
  }
  function du() {
    return ++gu;
  }
  var mu = Ni.prototype;
  pu.prototype = function (t) {
    return Ni().transition(t);
  }.prototype = {
    constructor: pu,
    select: function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = kr(t));
      for (
        var r = this._groups, i = r.length, a = new Array(i), o = 0;
        o < i;
        ++o
      )
        for (
          var u, l, s = r[o], c = s.length, f = (a[o] = new Array(c)), h = 0;
          h < c;
          ++h
        )
          (u = s[h]) &&
            (l = t.call(u, u.__data__, h, s)) &&
            ("__data__" in u && (l.__data__ = u.__data__),
            (f[h] = l),
            Uo(f[h], n, e, h, f, Oo(u, e)));
      return new pu(a, this._parents, n, e);
    },
    selectAll: function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = Dr(t));
      for (
        var r = this._groups, i = r.length, a = [], o = [], u = 0;
        u < i;
        ++u
      )
        for (var l, s = r[u], c = s.length, f = 0; f < c; ++f)
          if ((l = s[f])) {
            for (
              var h,
                g = t.call(l, l.__data__, f, s),
                p = Oo(l, e),
                d = 0,
                m = g.length;
              d < m;
              ++d
            )
              (h = g[d]) && Uo(h, n, e, d, g, p);
            a.push(g), o.push(l);
          }
      return new pu(a, o, n, e);
    },
    filter: function (t) {
      "function" != typeof t && (t = zr(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var a, o = n[i], u = o.length, l = (r[i] = []), s = 0; s < u; ++s)
          (a = o[s]) && t.call(a, a.__data__, s, o) && l.push(a);
      return new pu(r, this._parents, this._name, this._id);
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error();
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          a = Math.min(r, i),
          o = new Array(r),
          u = 0;
        u < a;
        ++u
      )
        for (
          var l,
            s = n[u],
            c = e[u],
            f = s.length,
            h = (o[u] = new Array(f)),
            g = 0;
          g < f;
          ++g
        )
          (l = s[g] || c[g]) && (h[g] = l);
      for (; u < r; ++u) o[u] = n[u];
      return new pu(o, this._parents, this._name, this._id);
    },
    selection: function () {
      return new uu(this._groups, this._parents);
    },
    transition: function () {
      for (
        var t = this._name,
          n = this._id,
          e = du(),
          r = this._groups,
          i = r.length,
          a = 0;
        a < i;
        ++a
      )
        for (var o, u = r[a], l = u.length, s = 0; s < l; ++s)
          if ((o = u[s])) {
            var c = Oo(o, n);
            Uo(o, t, e, s, u, {
              time: c.time + c.delay + c.duration,
              delay: 0,
              duration: c.duration,
              ease: c.ease,
            });
          }
      return new pu(r, this._parents, t, e);
    },
    call: mu.call,
    nodes: mu.nodes,
    node: mu.node,
    size: mu.size,
    empty: mu.empty,
    each: mu.each,
    on: function (t, n) {
      var e = this._id;
      return arguments.length < 2
        ? Oo(this.node(), e).on.on(t)
        : this.each(ou(e, t, n));
    },
    attr: function (t, n) {
      var e = xr(t),
        r = "transform" === e ? Ht : qo;
      return this.attrTween(
        t,
        "function" == typeof n
          ? (e.local ? Zo : $o)(e, r, Xo(this, "attr." + t, n))
          : null == n
          ? (e.local ? Vo : Bo)(e)
          : (e.local ? Go : Wo)(e, r, n)
      );
    },
    attrTween: function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = xr(t);
      return this.tween(e, (r.local ? Ko : tu)(r, n));
    },
    style: function (t, n, e) {
      var r = "transform" == (t += "") ? Ft : qo;
      return null == n
        ? this.styleTween(
            t,
            (function (t, n) {
              var e, r, i;
              return function () {
                var a = Kr(this, t),
                  o = (this.style.removeProperty(t), Kr(this, t));
                return a === o
                  ? null
                  : a === e && o === r
                  ? i
                  : (i = n((e = a), (r = o)));
              };
            })(t, r)
          ).on("end.style." + t, lu(t))
        : "function" == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var r, i, a;
              return function () {
                var o = Kr(this, t),
                  u = e(this),
                  l = u + "";
                return (
                  null == u &&
                    (this.style.removeProperty(t), (l = u = Kr(this, t))),
                  o === l
                    ? null
                    : o === r && l === i
                    ? a
                    : ((i = l), (a = n((r = o), u)))
                );
              };
            })(t, r, Xo(this, "style." + t, n))
          ).each(
            (function (t, n) {
              var e,
                r,
                i,
                a,
                o = "style." + n,
                u = "end." + o;
              return function () {
                var l = Yo(this, t),
                  s = l.on,
                  c = null == l.value[o] ? a || (a = lu(n)) : void 0;
                (s === e && i === c) || (r = (e = s).copy()).on(u, (i = c)),
                  (l.on = r);
              };
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              var r,
                i,
                a = e + "";
              return function () {
                var o = Kr(this, t);
                return o === a ? null : o === r ? i : (i = n((r = o), e));
              };
            })(t, r, n),
            e
          ).on("end.style." + t, null);
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, cu(t, n, null == e ? "" : e));
    },
    text: function (t) {
      return this.tween(
        "text",
        "function" == typeof t
          ? (function (t) {
              return function () {
                var n = t(this);
                this.textContent = null == n ? "" : n;
              };
            })(Xo(this, "text", t))
          : (function (t) {
              return function () {
                this.textContent = t;
              };
            })(null == t ? "" : t + "")
      );
    },
    textTween: function (t) {
      var n = "text";
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ("function" != typeof t) throw new Error();
      return this.tween(n, hu(t));
    },
    remove: function () {
      return this.on(
        "end.remove",
        (function (t) {
          return function () {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== t) return;
            n && n.removeChild(this);
          };
        })(this._id)
      );
    },
    tween: function (t, n) {
      var e = this._id;
      if (((t += ""), arguments.length < 2)) {
        for (
          var r, i = Oo(this.node(), e).tween, a = 0, o = i.length;
          a < o;
          ++a
        )
          if ((r = i[a]).name === t) return r.value;
        return null;
      }
      return this.each((null == n ? jo : Io)(e, t, n));
    },
    delay: function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? nu : eu)(n, t))
        : Oo(this.node(), n).delay;
    },
    duration: function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? ru : iu)(n, t))
        : Oo(this.node(), n).duration;
    },
    ease: function (t) {
      var n = this._id;
      return arguments.length ? this.each(au(n, t)) : Oo(this.node(), n).ease;
    },
    easeVarying: function (t) {
      if ("function" != typeof t) throw new Error();
      return this.each(
        (function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            if ("function" != typeof e) throw new Error();
            Yo(this, t).ease = e;
          };
        })(this._id, t)
      );
    },
    end: function () {
      var t,
        n,
        e = this,
        r = e._id,
        i = e.size();
      return new Promise(function (a, o) {
        var u = { value: o },
          l = {
            value: function () {
              0 == --i && a();
            },
          };
        e.each(function () {
          var e = Yo(this, r),
            i = e.on;
          i !== t &&
            ((n = (t = i).copy())._.cancel.push(u),
            n._.interrupt.push(u),
            n._.end.push(l)),
            (e.on = n);
        }),
          0 === i && a();
      });
    },
    [Symbol.iterator]: mu[Symbol.iterator],
  };
  var vu = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    },
  };
  function yu(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]); )
      if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
    return e;
  }
  (Ni.prototype.interrupt = function (t) {
    return this.each(function () {
      Po(this, t);
    });
  }),
    (Ni.prototype.transition = function (t) {
      var n, e;
      t instanceof pu
        ? ((n = t._id), (t = t._name))
        : ((n = du()), ((e = vu).time = ko()), (t = null == t ? null : t + ""));
      for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
        for (var o, u = r[a], l = u.length, s = 0; s < l; ++s)
          (o = u[s]) && Uo(o, t, n, s, u, e || yu(o, n));
      return new pu(r, this._parents, t, n);
    });
  var bu = (t) => () => t;
  function wu(
    t,
    { sourceEvent: n, target: e, selection: r, mode: i, dispatch: a }
  ) {
    Object.defineProperties(this, {
      type: { value: t, enumerable: !0, configurable: !0 },
      sourceEvent: { value: n, enumerable: !0, configurable: !0 },
      target: { value: e, enumerable: !0, configurable: !0 },
      selection: { value: r, enumerable: !0, configurable: !0 },
      mode: { value: i, enumerable: !0, configurable: !0 },
      _: { value: a },
    });
  }
  function xu(t) {
    t.stopImmediatePropagation();
  }
  function _u(t) {
    t.preventDefault(), t.stopImmediatePropagation();
  }
  var Mu = { name: "drag" },
    Au = { name: "space" },
    Su = { name: "handle" },
    ku = { name: "center" };
  const { abs: Cu, max: Tu, min: Du } = Math;
  function zu(t) {
    return [+t[0], +t[1]];
  }
  function Nu(t) {
    return [zu(t[0]), zu(t[1])];
  }
  var Fu = {
      name: "x",
      handles: ["w", "e"].map(Ou),
      input: function (t, n) {
        return null == t
          ? null
          : [
              [+t[0], n[0][1]],
              [+t[1], n[1][1]],
            ];
      },
      output: function (t) {
        return t && [t[0][0], t[1][0]];
      },
    },
    Hu = {
      name: "y",
      handles: ["n", "s"].map(Ou),
      input: function (t, n) {
        return null == t
          ? null
          : [
              [n[0][0], +t[0]],
              [n[1][0], +t[1]],
            ];
      },
      output: function (t) {
        return t && [t[0][1], t[1][1]];
      },
    },
    Eu = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize",
    },
    Lu = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
    Uu = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
    Ru = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1,
    },
    Yu = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1,
    };
  function Ou(t) {
    return { type: t };
  }
  function Pu(t) {
    return !t.ctrlKey && !t.button;
  }
  function ju() {
    var t = this.ownerSVGElement || this;
    return t.hasAttribute("viewBox")
      ? [
          [(t = t.viewBox.baseVal).x, t.y],
          [t.x + t.width, t.y + t.height],
        ]
      : [
          [0, 0],
          [t.width.baseVal.value, t.height.baseVal.value],
        ];
  }
  function Iu() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Xu(t) {
    for (; !t.__brush; ) if (!(t = t.parentNode)) return;
    return t.__brush;
  }
  function qu(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }
  function Bu() {
    return (function (t) {
      var n,
        e = ju,
        r = Pu,
        i = Iu,
        a = !0,
        o = uo("start", "brush", "end"),
        u = 6;
      function l(n) {
        var e = n
          .property("__brush", d)
          .selectAll(".overlay")
          .data([Ou("overlay")]);
        e
          .enter()
          .append("rect")
          .attr("class", "overlay")
          .attr("pointer-events", "all")
          .attr("cursor", Eu.overlay)
          .merge(e)
          .each(function () {
            var t = Xu(this).extent;
            Fi(this)
              .attr("x", t[0][0])
              .attr("y", t[0][1])
              .attr("width", t[1][0] - t[0][0])
              .attr("height", t[1][1] - t[0][1]);
          }),
          n
            .selectAll(".selection")
            .data([Ou("selection")])
            .enter()
            .append("rect")
            .attr("class", "selection")
            .attr("cursor", Eu.selection)
            .attr("fill", "#777")
            .attr("fill-opacity", 0.3)
            .attr("stroke", "#fff")
            .attr("shape-rendering", "crispEdges");
        var r = n.selectAll(".handle").data(t.handles, function (t) {
          return t.type;
        });
        r.exit().remove(),
          r
            .enter()
            .append("rect")
            .attr("class", function (t) {
              return "handle handle--" + t.type;
            })
            .attr("cursor", function (t) {
              return Eu[t.type];
            }),
          n
            .each(s)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("mousedown.brush", h)
            .filter(i)
            .on("touchstart.brush", h)
            .on("touchmove.brush", g)
            .on("touchend.brush touchcancel.brush", p)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function s() {
        var t = Fi(this),
          n = Xu(this).selection;
        n
          ? (t
              .selectAll(".selection")
              .style("display", null)
              .attr("x", n[0][0])
              .attr("y", n[0][1])
              .attr("width", n[1][0] - n[0][0])
              .attr("height", n[1][1] - n[0][1]),
            t
              .selectAll(".handle")
              .style("display", null)
              .attr("x", function (t) {
                return "e" === t.type[t.type.length - 1]
                  ? n[1][0] - u / 2
                  : n[0][0] - u / 2;
              })
              .attr("y", function (t) {
                return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2;
              })
              .attr("width", function (t) {
                return "n" === t.type || "s" === t.type
                  ? n[1][0] - n[0][0] + u
                  : u;
              })
              .attr("height", function (t) {
                return "e" === t.type || "w" === t.type
                  ? n[1][1] - n[0][1] + u
                  : u;
              }))
          : t
              .selectAll(".selection,.handle")
              .style("display", "none")
              .attr("x", null)
              .attr("y", null)
              .attr("width", null)
              .attr("height", null);
      }
      function c(t, n, e) {
        var r = t.__brush.emitter;
        return !r || (e && r.clean) ? new f(t, n, e) : r;
      }
      function f(t, n, e) {
        (this.that = t),
          (this.args = n),
          (this.state = t.__brush),
          (this.active = 0),
          (this.clean = e);
      }
      function h(e) {
        if ((!n || e.touches) && r.apply(this, arguments)) {
          var i,
            o,
            u,
            l,
            f,
            h,
            g,
            p,
            d,
            m,
            v,
            y = this,
            b = e.target.__data__.type,
            w =
              "selection" === (a && e.metaKey ? (b = "overlay") : b)
                ? Mu
                : a && e.altKey
                ? ku
                : Su,
            x = t === Hu ? null : Ru[b],
            _ = t === Fu ? null : Yu[b],
            M = Xu(y),
            A = M.extent,
            S = M.selection,
            k = A[0][0],
            C = A[0][1],
            T = A[1][0],
            D = A[1][1],
            z = 0,
            N = 0,
            F = x && _ && a && e.shiftKey,
            H = Array.from(e.touches || [e], (t) => {
              const n = t.identifier;
              return ((t = Hi(t, y)).point0 = t.slice()), (t.identifier = n), t;
            });
          if ("overlay" === b) {
            S && (d = !0);
            const n = [H[0], H[1] || H[0]];
            (M.selection = S =
              [
                [
                  (i = t === Hu ? k : Du(n[0][0], n[1][0])),
                  (u = t === Fu ? C : Du(n[0][1], n[1][1])),
                ],
                [
                  (f = t === Hu ? T : Tu(n[0][0], n[1][0])),
                  (g = t === Fu ? D : Tu(n[0][1], n[1][1])),
                ],
              ]),
              H.length > 1 && O();
          } else (i = S[0][0]), (u = S[0][1]), (f = S[1][0]), (g = S[1][1]);
          (o = i), (l = u), (h = f), (p = g);
          var E = Fi(y).attr("pointer-events", "none"),
            L = E.selectAll(".overlay").attr("cursor", Eu[b]);
          Po(y);
          var U = c(y, arguments, !0).beforestart();
          if (e.touches) (U.moved = Y), (U.ended = P);
          else {
            var R = Fi(e.view)
              .on("mousemove.brush", Y, !0)
              .on("mouseup.brush", P, !0);
            a && R.on("keydown.brush", j, !0).on("keyup.brush", I, !0),
              go(e.view);
          }
          s.call(y), U.start(e, w.name);
        }
        function Y(t) {
          for (const n of t.changedTouches || [t])
            for (const t of H)
              t.identifier === n.identifier && (t.cur = Hi(n, y));
          if (F && !m && !v && 1 === H.length) {
            const t = H[0];
            Cu(t.cur[0] - t[0]) > Cu(t.cur[1] - t[1]) ? (v = !0) : (m = !0);
          }
          for (const t of H) t.cur && ((t[0] = t.cur[0]), (t[1] = t.cur[1]));
          (d = !0), _u(t), O(t);
        }
        function O(t) {
          const n = H[0],
            e = n.point0;
          var r;
          switch (((z = n[0] - e[0]), (N = n[1] - e[1]), w)) {
            case Au:
            case Mu:
              x && ((z = Tu(k - i, Du(T - f, z))), (o = i + z), (h = f + z)),
                _ && ((N = Tu(C - u, Du(D - g, N))), (l = u + N), (p = g + N));
              break;
            case Su:
              H[1]
                ? (x &&
                    ((o = Tu(k, Du(T, H[0][0]))),
                    (h = Tu(k, Du(T, H[1][0]))),
                    (x = 1)),
                  _ &&
                    ((l = Tu(C, Du(D, H[0][1]))),
                    (p = Tu(C, Du(D, H[1][1]))),
                    (_ = 1)))
                : (x < 0
                    ? ((z = Tu(k - i, Du(T - i, z))), (o = i + z), (h = f))
                    : x > 0 &&
                      ((z = Tu(k - f, Du(T - f, z))), (o = i), (h = f + z)),
                  _ < 0
                    ? ((N = Tu(C - u, Du(D - u, N))), (l = u + N), (p = g))
                    : _ > 0 &&
                      ((N = Tu(C - g, Du(D - g, N))), (l = u), (p = g + N)));
              break;
            case ku:
              x &&
                ((o = Tu(k, Du(T, i - z * x))), (h = Tu(k, Du(T, f + z * x)))),
                _ &&
                  ((l = Tu(C, Du(D, u - N * _))),
                  (p = Tu(C, Du(D, g + N * _))));
          }
          h < o &&
            ((x *= -1),
            (r = i),
            (i = f),
            (f = r),
            (r = o),
            (o = h),
            (h = r),
            b in Lu && L.attr("cursor", Eu[(b = Lu[b])])),
            p < l &&
              ((_ *= -1),
              (r = u),
              (u = g),
              (g = r),
              (r = l),
              (l = p),
              (p = r),
              b in Uu && L.attr("cursor", Eu[(b = Uu[b])])),
            M.selection && (S = M.selection),
            m && ((o = S[0][0]), (h = S[1][0])),
            v && ((l = S[0][1]), (p = S[1][1])),
            (S[0][0] === o &&
              S[0][1] === l &&
              S[1][0] === h &&
              S[1][1] === p) ||
              ((M.selection = [
                [o, l],
                [h, p],
              ]),
              s.call(y),
              U.brush(t, w.name));
        }
        function P(t) {
          if ((xu(t), t.touches)) {
            if (t.touches.length) return;
            n && clearTimeout(n),
              (n = setTimeout(function () {
                n = null;
              }, 500));
          } else
            po(t.view, d),
              R.on(
                "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                null
              );
          E.attr("pointer-events", "all"),
            L.attr("cursor", Eu.overlay),
            M.selection && (S = M.selection),
            qu(S) && ((M.selection = null), s.call(y)),
            U.end(t, w.name);
        }
        function j(t) {
          switch (t.keyCode) {
            case 16:
              F = x && _;
              break;
            case 18:
              w === Su &&
                (x && ((f = h - z * x), (i = o + z * x)),
                _ && ((g = p - N * _), (u = l + N * _)),
                (w = ku),
                O());
              break;
            case 32:
              (w !== Su && w !== ku) ||
                (x < 0 ? (f = h - z) : x > 0 && (i = o - z),
                _ < 0 ? (g = p - N) : _ > 0 && (u = l - N),
                (w = Au),
                L.attr("cursor", Eu.selection),
                O());
              break;
            default:
              return;
          }
          _u(t);
        }
        function I(t) {
          switch (t.keyCode) {
            case 16:
              F && ((m = v = F = !1), O());
              break;
            case 18:
              w === ku &&
                (x < 0 ? (f = h) : x > 0 && (i = o),
                _ < 0 ? (g = p) : _ > 0 && (u = l),
                (w = Su),
                O());
              break;
            case 32:
              w === Au &&
                (t.altKey
                  ? (x && ((f = h - z * x), (i = o + z * x)),
                    _ && ((g = p - N * _), (u = l + N * _)),
                    (w = ku))
                  : (x < 0 ? (f = h) : x > 0 && (i = o),
                    _ < 0 ? (g = p) : _ > 0 && (u = l),
                    (w = Su)),
                L.attr("cursor", Eu[b]),
                O());
              break;
            default:
              return;
          }
          _u(t);
        }
      }
      function g(t) {
        c(this, arguments).moved(t);
      }
      function p(t) {
        c(this, arguments).ended(t);
      }
      function d() {
        var n = this.__brush || { selection: null };
        return (n.extent = Nu(e.apply(this, arguments))), (n.dim = t), n;
      }
      return (
        (l.move = function (n, e) {
          n.tween
            ? n
                .on("start.brush", function (t) {
                  c(this, arguments).beforestart().start(t);
                })
                .on("interrupt.brush end.brush", function (t) {
                  c(this, arguments).end(t);
                })
                .tween("brush", function () {
                  var n = this,
                    r = n.__brush,
                    i = c(n, arguments),
                    a = r.selection,
                    o = t.input(
                      "function" == typeof e ? e.apply(this, arguments) : e,
                      r.extent
                    ),
                    u = St(a, o);
                  function l(t) {
                    (r.selection = 1 === t && null === o ? null : u(t)),
                      s.call(n),
                      i.brush();
                  }
                  return null !== a && null !== o ? l : l(1);
                })
            : n.each(function () {
                var n = this,
                  r = arguments,
                  i = n.__brush,
                  a = t.input(
                    "function" == typeof e ? e.apply(n, r) : e,
                    i.extent
                  ),
                  o = c(n, r).beforestart();
                Po(n),
                  (i.selection = null === a ? null : a),
                  s.call(n),
                  o.start().brush().end();
              });
        }),
        (l.clear = function (t) {
          l.move(t, null);
        }),
        (f.prototype = {
          beforestart: function () {
            return (
              1 == ++this.active &&
                ((this.state.emitter = this), (this.starting = !0)),
              this
            );
          },
          start: function (t, n) {
            return (
              this.starting
                ? ((this.starting = !1), this.emit("start", t, n))
                : this.emit("brush", t),
              this
            );
          },
          brush: function (t, n) {
            return this.emit("brush", t, n), this;
          },
          end: function (t, n) {
            return (
              0 == --this.active &&
                (delete this.state.emitter, this.emit("end", t, n)),
              this
            );
          },
          emit: function (n, e, r) {
            var i = Fi(this.that).datum();
            o.call(
              n,
              this.that,
              new wu(n, {
                sourceEvent: e,
                target: l,
                selection: t.output(this.state.selection),
                mode: r,
                dispatch: o,
              }),
              i
            );
          },
        }),
        (l.extent = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : bu(Nu(t))), l)
            : e;
        }),
        (l.filter = function (t) {
          return arguments.length
            ? ((r = "function" == typeof t ? t : bu(!!t)), l)
            : r;
        }),
        (l.touchable = function (t) {
          return arguments.length
            ? ((i = "function" == typeof t ? t : bu(!!t)), l)
            : i;
        }),
        (l.handleSize = function (t) {
          return arguments.length ? ((u = +t), l) : u;
        }),
        (l.keyModifiers = function (t) {
          return arguments.length ? ((a = !!t), l) : a;
        }),
        (l.on = function () {
          var t = o.on.apply(o, arguments);
          return t === o ? l : t;
        }),
        l
      );
    })(Fu);
  }
  var Vu = o({
    props: {
      width: { default: 300 },
      height: { default: 20 },
      margins: { default: { top: 0, right: 0, bottom: 20, left: 0 } },
      scale: {},
      domainRange: {},
      currentSelection: {},
      tickFormat: {},
      onChange: { default: function (t, n) {} },
    },
    init: function (n, e) {
      (e.xGrid = C().tickFormat("")),
        (e.xAxis = C().tickPadding(0)),
        (e.brush = Bu()
          .handleSize(24)
          .on("end", function (n) {
            if (n.sourceEvent) {
              var r = n.selection
                ? n.selection.map(e.scale.invert)
                : e.scale.domain();
              e.onChange.apply(e, t(r));
            }
          })),
        (e.svg = Fi(n).append("svg").attr("class", "brusher"));
      var r = e.svg.append("g").attr("class", "brusher-margins");
      r.append("rect").attr("class", "grid-background"),
        r.append("g").attr("class", "x grid"),
        r.append("g").attr("class", "x axis"),
        r.append("g").attr("class", "brush");
    },
    update: function (t) {
      if (!(t.domainRange[1] <= t.domainRange[0])) {
        var n = t.width - t.margins.left - t.margins.right,
          e = t.height - t.margins.top - t.margins.bottom;
        t.scale.domain(t.domainRange).range([0, n]),
          t.xAxis.scale(t.scale).tickFormat(t.tickFormat),
          t.xGrid.scale(t.scale).tickSize(-e),
          t.svg.attr("width", t.width).attr("height", t.height),
          t.svg
            .select(".brusher-margins")
            .attr(
              "transform",
              "translate("
                .concat(t.margins.left, ",")
                .concat(t.margins.top, ")")
            ),
          t.svg.select(".grid-background").attr("width", n).attr("height", e),
          t.svg
            .select(".x.grid")
            .attr("transform", "translate(0," + e + ")")
            .call(t.xGrid),
          t.svg
            .select(".x.axis")
            .attr("transform", "translate(0," + e + ")")
            .call(t.xAxis)
            .selectAll("text")
            .attr("y", 8),
          t.svg
            .select(".brush")
            .call(
              t.brush.extent([
                [0, 0],
                [n, e],
              ])
            )
            .call(t.brush.move, t.currentSelection.map(t.scale));
      }
    },
  });
  function Wu(t, n) {
    var e = t.split(/(\d+)/),
      r = n.split(/(\d+)/);
    e.length && "" == e[e.length - 1] && e.pop(),
      r.length && "" == r[r.length - 1] && r.pop();
    for (var i = 0, a = Math.max(e.length, r.length); i < a; i++) {
      if (e.length == i || r.length == i) return e.length - r.length;
      if (e[i] != r[i])
        return e[i].match(/\d/)
          ? +e[i] - +r[i]
          : e[i].toLowerCase() > r[i].toLowerCase()
          ? 1
          : -1;
    }
    return 0;
  }
  return o({
    props: {
      data: {
        default: [],
        onChange: function (t, n) {
          !(function (t) {
            (n.completeStructData = []),
              (n.completeFlatData = []),
              (n.totalNLines = 0);
            for (var e = 0, r = t.length; e < r; e++) {
              var i = t[e].group;
              n.completeStructData.push({
                group: i,
                lines: t[e].data.map(function (t) {
                  return t.label;
                }),
              });
              for (var a = 0, o = t[e].data.length; a < o; a++) {
                for (var u = 0, l = t[e].data[a].data.length; u < l; u++) {
                  var s = t[e].data[a].data[u],
                    c = s.timeRange,
                    f = s.val,
                    h = s.labelVal;
                  n.completeFlatData.push({
                    group: i,
                    label: t[e].data[a].label,
                    timeRange: c.map(function (t) {
                      return new Date(t);
                    }),
                    val: f,
                    labelVal: void 0 !== h ? h : f,
                    data: t[e].data[a].data[u],
                  });
                }
                n.totalNLines++;
              }
            }
          })(t),
            (n.zoomX = [
              m(n.completeFlatData, function (t) {
                return t.timeRange[0];
              }),
              d(n.completeFlatData, function (t) {
                return t.timeRange[1];
              }),
            ]),
            (n.zoomY = [null, null]),
            n.overviewArea &&
              n.overviewArea.domainRange(n.zoomX).currentSelection(n.zoomX);
        },
      },
      width: { default: window.innerWidth },
      maxHeight: { default: 640 },
      maxLineHeight: { default: 12 },
      leftMargin: { default: 90 },
      rightMargin: { default: 100 },
      topMargin: { default: 26 },
      bottomMargin: { default: 30 },
      useUtc: { default: !1 },
      xTickFormat: {},
      dateMarker: {},
      timeFormat: { default: "%Y-%m-%d %-I:%M:%S %p", triggerUpdate: !1 },
      zoomX: {
        default: [null, null],
        onChange: function (t, n) {
          n.svg &&
            n.svg.dispatch("zoom", {
              detail: { zoomX: t, zoomY: null, redraw: !1 },
            });
        },
      },
      zoomY: {
        default: [null, null],
        onChange: function (t, n) {
          n.svg &&
            n.svg.dispatch("zoom", {
              detail: { zoomX: null, zoomY: t, redraw: !1 },
            });
        },
      },
      minSegmentDuration: {},
      zColorScale: { default: yr(Za) },
      zQualitative: {
        default: !1,
        onChange: function (n, e) {
          e.zColorScale = n ? N([].concat(t(Ga), t($a))) : yr(Za);
        },
      },
      zDataLabel: { default: "", triggerUpdate: !1 },
      zScaleLabel: { default: "", triggerUpdate: !1 },
      enableOverview: { default: !0 },
      enableAnimations: {
        default: !0,
        onChange: function (t, n) {
          n.transDuration = t ? 700 : 0;
        },
      },
      segmentTooltipContent: { triggerUpdate: !1 },
      onZoom: {},
      onLabelClick: {},
      onSegmentClick: {},
    },
    methods: {
      getNLines: function (t) {
        return t.nLines;
      },
      getTotalNLines: function (t) {
        return t.totalNLines;
      },
      getVisibleStructure: function (t) {
        return t.structData;
      },
      getSvg: function (t) {
        return Fi(t.svg.node().parentNode).html();
      },
      zoomYLabels: function (t, n) {
        return n
          ? this.zoomY([r(n[0], !0), r(n[1], !1)])
          : [e(t.zoomY[0]), e(t.zoomY[1])];
        function e(n) {
          if (null == n) return n;
          for (var e = n, r = 0, i = t.completeStructData.length; r < i; r++) {
            if (t.completeStructData[r].lines.length > e)
              return a(t.completeStructData[r], e);
            e -= t.completeStructData[r].lines.length;
          }
          return a(
            t.completeStructData[t.completeStructData.length - 1],
            t.completeStructData[t.completeStructData.length - 1].lines.length -
              1
          );
          function a(t, n) {
            return { group: t.group, label: t.lines[n] };
          }
        }
        function r(n, e) {
          var r = (e = e || !1) ? 0 : 1;
          if (null == n) return n;
          for (var i = 0, a = 0, o = t.completeStructData.length; a < o; a++) {
            var u = t.grpCmpFunction(n.group, t.completeStructData[a].group);
            if (u < 0) break;
            if (0 == u && n.group == t.completeStructData[a].group) {
              for (
                var l = 0, s = t.completeStructData[a].lines.length;
                l < s;
                l++
              ) {
                var c = t.labelCmpFunction(
                  n.label,
                  t.completeStructData[a].lines[l]
                );
                if (c < 0) return i + l - r;
                if (0 == c && n.label == t.completeStructData[a].lines[l])
                  return i + l;
              }
              return i + t.completeStructData[a].lines.length - r;
            }
            i += t.completeStructData[a].lines.length;
          }
          return i - r;
        }
      },
      sort: function (t, n, e) {
        null == n && (n = t.labelCmpFunction),
          null == e && (e = t.grpCmpFunction),
          (t.labelCmpFunction = n),
          (t.grpCmpFunction = e),
          t.completeStructData.sort(function (t, n) {
            return e(t.group, n.group);
          });
        for (var r = 0, i = t.completeStructData.length; r < i; r++)
          t.completeStructData[r].lines.sort(n);
        return t._rerender(), this;
      },
      sortAlpha: function (t, n) {
        null == n && (n = !0);
        var e = function (t, e) {
          return Wu(n ? t : e, n ? e : t);
        };
        return this.sort(e, e);
      },
      sortChrono: function (t, n) {
        function e(n) {
          for (
            var e = {},
              r = function (r, i) {
                var a = n(t.completeFlatData[r]);
                if (e.hasOwnProperty(a)) return "continue";
                var o = t.completeFlatData.filter(function (t) {
                  return a == n(t);
                });
                e[a] = [
                  m(o, function (t) {
                    return t.timeRange[0];
                  }),
                  d(o, function (t) {
                    return t.timeRange[1];
                  }),
                ];
              },
              i = 0,
              a = t.completeFlatData.length;
            i < a;
            i++
          )
            r(i);
          return e;
        }
        null == n && (n = !0);
        function r(t, n) {
          return function (e, r) {
            return (function (t, n) {
              var e = t[1],
                r = n[1];
              return e && r
                ? e[1].getTime() == r[1].getTime()
                  ? e[0].getTime() == r[0].getTime()
                    ? Wu(t[0], n[0])
                    : e[0] - r[0]
                  : r[1] - e[1]
                : null;
            })(t(n ? e : r), t(n ? r : e));
          };
        }
        var i = e(function (t) {
            return t.group;
          }),
          a = e(function (t) {
            return t.label;
          }),
          o = r(function (t) {
            return [t, i[t] || null];
          }, n),
          u = r(function (t) {
            return [t, a[t] || null];
          }, n);
        return this.sort(u, o);
      },
      overviewDomain: function (t, n) {
        return t.enableOverview
          ? n
            ? (t.overviewArea.domainRange(n), this)
            : t.overviewArea.domainRange()
          : null;
      },
      refresh: function (t) {
        return t._rerender(), this;
      },
    },
    stateInit: {
      height: null,
      overviewHeight: 20,
      minLabelFont: 2,
      groupBkgGradient: ["#FAFAFA", "#E0E0E0"],
      yScale: null,
      grpScale: null,
      xAxis: null,
      xGrid: null,
      yAxis: null,
      grpAxis: null,
      dateMarkerLine: null,
      svg: null,
      graph: null,
      overviewAreaElem: null,
      overviewArea: null,
      graphW: null,
      graphH: null,
      completeStructData: null,
      structData: null,
      completeFlatData: null,
      flatData: null,
      totalNLines: null,
      nLines: null,
      minSegmentDuration: 0,
      transDuration: 700,
      labelCmpFunction: Wu,
      grpCmpFunction: Wu,
    },
    init: function (t, n) {
      var e,
        r,
        i = Fi(t).attr("class", "timelines-chart");
      (n.svg = i.append("svg")),
        (n.overviewAreaElem = i.append("div")),
        (n.yScale = (function () {
          return H(F.apply(null, arguments).paddingInner(1));
        })()),
        (n.grpScale = N()),
        (n.xAxis = C()),
        (n.xGrid = k(1, e)),
        (n.yAxis = (function (t) {
          return k(2, t);
        })()),
        (n.grpAxis = (function (t) {
          return k(4, t);
        })()),
        (function () {
          (n.yScale.invert = e),
            (n.grpScale.invert = e),
            (n.groupGradId = Ja()
              .colorScale(un().domain([0, 1]).range(n.groupBkgGradient))
              .angle(-90)(n.svg.node())
              .id());
          var t = n.svg.append("g").attr("class", "axises");
          t.append("g").attr("class", "x-axis"),
            t.append("g").attr("class", "x-grid"),
            t.append("g").attr("class", "y-axis"),
            t.append("g").attr("class", "grp-axis"),
            n.yAxis.scale(n.yScale).tickSize(0),
            n.grpAxis.scale(n.grpScale).tickSize(0),
            (n.colorLegend = ao()(
              n.svg.append("g").attr("class", "legendG").node()
            )),
            (n.graph = n.svg.append("g")),
            (n.dateMarkerLine = n.svg
              .append("line")
              .attr("class", "x-axis-date-marker")),
            n.enableOverview &&
              ((n.overviewArea = Vu()
                .margins({ top: 1, right: 20, bottom: 20, left: 20 })
                .onChange(function (t, e) {
                  n.svg.dispatch("zoom", {
                    detail: { zoomX: [t, e], zoomY: null },
                  });
                })
                .domainRange(n.zoomX)
                .currentSelection(n.zoomX)(n.overviewAreaElem.node())),
              n.svg.on("zoomScent", function (t) {
                var e = t.detail.zoomX;
                n.overviewArea &&
                  e &&
                  ((e[0] < n.overviewArea.domainRange()[0] ||
                    e[1] > n.overviewArea.domainRange()[1]) &&
                    n.overviewArea.domainRange([
                      new Date(Math.min(e[0], n.overviewArea.domainRange()[0])),
                      new Date(Math.max(e[1], n.overviewArea.domainRange()[1])),
                    ]),
                  n.overviewArea.currentSelection(e));
              }));
          function e(t, n) {
            n =
              n ||
              function (t, n) {
                return t >= n;
              };
            var e = this.domain(),
              r = this.range();
            2 === r.length &&
              2 !== e.length &&
              (r = v(r[0], r[1], (r[1] - r[0]) / e.length));
            for (var i = r[0], a = 0, o = r.length; a < o; a++)
              if (n(r[a] + i, t))
                return e[Math.round((a * e.length) / r.length)];
            return this.domain()[this.domain().length - 1];
          }
        })(),
        (n.groupTooltip = Va()
          .attr("class", "chart-tooltip group-tooltip")
          .direction("w")
          .offset([0, 0])
          .html(function (t, e) {
            var r = e.hasOwnProperty("timeRange")
                ? n.xScale(e.timeRange[0])
                : 0,
              i = e.hasOwnProperty("label")
                ? n.grpScale(e.group) - n.yScale(e.group + "+&+" + e.label)
                : 0;
            return n.groupTooltip.offset([i, -r]), e.group;
          })),
        n.svg.call(n.groupTooltip),
        (n.lineTooltip = Va()
          .attr("class", "chart-tooltip line-tooltip")
          .direction("e")
          .offset([0, 0])
          .html(function (t, e) {
            var r = e.hasOwnProperty("timeRange")
              ? n.xScale.range()[1] - n.xScale(e.timeRange[1])
              : 0;
            return n.lineTooltip.offset([0, r]), e.label;
          })),
        n.svg.call(n.lineTooltip),
        (n.segmentTooltip = Va()
          .attr("class", "chart-tooltip segment-tooltip")
          .direction("s")
          .offset([5, 0])
          .html(function (t, e) {
            if (n.segmentTooltipContent) return n.segmentTooltipContent(e);
            var r =
                n.zColorScale.domain()[n.zColorScale.domain().length - 1] -
                n.zColorScale.domain()[0],
              i = (n.useUtc ? jn : Pn)(
                "".concat(n.timeFormat).concat(n.useUtc ? " (UTC)" : "")
              );
            return (
              "<strong>" +
              e.labelVal +
              " </strong>" +
              n.zDataLabel +
              (r
                ? " (<strong>" +
                  Math.round(
                    ((e.val - n.zColorScale.domain()[0]) / r) * 100 * 100
                  ) /
                    100 +
                  "%</strong>)"
                : "") +
              "<br><strong>From: </strong>" +
              i(e.timeRange[0]) +
              "<br><strong>To: </strong>" +
              i(e.timeRange[1])
            );
          })),
        n.svg.call(n.segmentTooltip),
        (r = function (t) {
          return Hi(t, n.graph.node());
        }),
        n.graph.on("mousedown", function (t) {
          if (null == Fi(window).on("mousemove.zoomRect")) {
            var e = r(t);
            if (!(e[0] < 0 || e[0] > n.graphW || e[1] < 0 || e[1] > n.graphH)) {
              n.disableHover = !0;
              var i = n.graph
                .append("rect")
                .attr("class", "chart-zoom-selection");
              Fi(window)
                .on("mousemove.zoomRect", function (t) {
                  t.stopPropagation();
                  var a = r(t),
                    o = [
                      Math.max(0, Math.min(n.graphW, a[0])),
                      Math.max(0, Math.min(n.graphH, a[1])),
                    ];
                  i
                    .attr("x", Math.min(e[0], o[0]))
                    .attr("y", Math.min(e[1], o[1]))
                    .attr("width", Math.abs(o[0] - e[0]))
                    .attr("height", Math.abs(o[1] - e[1])),
                    n.svg.dispatch("zoomScent", {
                      detail: {
                        zoomX: [e[0], o[0]].sort(u).map(n.xScale.invert),
                        zoomY: [e[1], o[1]].sort(u).map(function (t) {
                          return (
                            n.yScale.domain().indexOf(n.yScale.invert(t)) +
                            (n.zoomY && n.zoomY[0] ? n.zoomY[0] : 0)
                          );
                        }),
                      },
                    });
                })
                .on(
                  "mouseup.zoomRect",
                  function (t) {
                    Fi(window)
                      .on("mousemove.zoomRect", null)
                      .on("mouseup.zoomRect", null),
                      Fi("body").classed("stat-noselect", !1),
                      i.remove(),
                      (n.disableHover = !1);
                    var a = r(t),
                      o = [
                        Math.max(0, Math.min(n.graphW, a[0])),
                        Math.max(0, Math.min(n.graphH, a[1])),
                      ];
                    if (e[0] != o[0] || e[1] != o[1]) {
                      var l = [e[0], o[0]].sort(u).map(n.xScale.invert),
                        s = [e[1], o[1]].sort(u).map(function (t) {
                          return (
                            n.yScale.domain().indexOf(n.yScale.invert(t)) +
                            (n.zoomY && n.zoomY[0] ? n.zoomY[0] : 0)
                          );
                        }),
                        c = l[1] - l[0] > 6e4,
                        f = s[0] != n.zoomY[0] || s[1] != n.zoomY[1];
                      (c || f) &&
                        n.svg.dispatch("zoom", {
                          detail: { zoomX: c ? l : null, zoomY: f ? s : null },
                        });
                    }
                  },
                  !0
                ),
                t.stopPropagation();
            }
          }
        }),
        (n.resetBtn = n.svg
          .append("text")
          .attr("class", "reset-zoom-btn")
          .text("Reset Zoom")
          .style("text-anchor", "end")
          .on("mouseup", function () {
            n.svg.dispatch("resetZoom");
          })
          .on("mouseover", function () {
            Fi(this).style("opacity", 1);
          })
          .on("mouseout", function () {
            Fi(this).style("opacity", 0.6);
          })),
        n.svg.on("zoom", function (t) {
          var e = t.detail,
            r = e.zoomX,
            i = e.zoomY,
            a = null == e.redraw || e.redraw;
          (r || i) &&
            (r && (n.zoomX = r),
            i && (n.zoomY = i),
            n.svg.dispatch("zoomScent", { detail: { zoomX: r, zoomY: i } }),
            a && (n._rerender(), n.onZoom && n.onZoom(n.zoomX, n.zoomY)));
        }),
        n.svg.on("resetZoom", function () {
          var t = n.zoomX,
            e = n.zoomY || [null, null],
            r = n.enableOverview
              ? n.overviewArea.domainRange()
              : [
                  m(n.flatData, function (t) {
                    return t.timeRange[0];
                  }),
                  d(n.flatData, function (t) {
                    return t.timeRange[1];
                  }),
                ],
            i = [null, null];
          (t[0] < r[0] || t[1] > r[1] || e[0] != i[0] || e[1] != r[1]) &&
            ((n.zoomX = [
              new Date(Math.min(t[0], r[0])),
              new Date(Math.max(t[1], r[1])),
            ]),
            (n.zoomY = i),
            n.svg.dispatch("zoomScent", {
              detail: { zoomX: n.zoomX, zoomY: n.zoomY },
            }),
            n._rerender()),
            n.onZoom && n.onZoom(null, null);
        });
    },
    update: function (n) {
      !(function () {
        if (
          ((n.flatData =
            n.minSegmentDuration > 0
              ? n.completeFlatData.filter(function (t) {
                  return (
                    t.timeRange[1] - t.timeRange[0] >= n.minSegmentDuration
                  );
                })
              : n.completeFlatData),
          null == n.zoomY || n.zoomY == [null, null])
        ) {
          (n.structData = n.completeStructData), (n.nLines = 0);
          for (var t = 0, e = n.structData.length; t < e; t++)
            n.nLines += n.structData[t].lines.length;
          return;
        }
        n.structData = [];
        var r = [null == n.zoomY[0] ? 0 : n.zoomY[0]];
        r.push(
          Math.max(
            0,
            (null == n.zoomY[1] ? n.totalNLines : n.zoomY[1] + 1) - r[0]
          )
        ),
          (n.nLines = r[1]);
        for (
          var i = function (t, e) {
              var i = n.completeStructData[t].lines;
              if (n.minSegmentDuration > 0) {
                if (
                  !n.flatData.some(function (e) {
                    return e.group == n.completeStructData[t].group;
                  })
                )
                  return "continue";
                i = n.completeStructData[t].lines.filter(function (e) {
                  return n.flatData.some(function (r) {
                    return (
                      r.group == n.completeStructData[t].group && r.label == e
                    );
                  });
                });
              }
              if (r[0] >= i.length) return (r[0] -= i.length), "continue";
              var a = { group: n.completeStructData[t].group, lines: null };
              if (i.length - r[0] >= r[1])
                return (
                  (a.lines = i.slice(r[0], r[1] + r[0])),
                  n.structData.push(a),
                  (r[1] = 0),
                  "break"
                );
              r[0] > 0
                ? ((a.lines = i.slice(r[0])), (r[0] = 0))
                : (a.lines = i),
                n.structData.push(a),
                (r[1] -= a.lines.length);
            },
            a = 0,
            o = n.completeStructData.length;
          a < o;
          a++
        ) {
          var u = i(a);
          if ("continue" !== u && "break" === u) break;
        }
        n.nLines -= r[1];
      })(),
        (n.graphW = n.width - n.leftMargin - n.rightMargin),
        (n.graphH = m([
          n.nLines * n.maxLineHeight,
          n.maxHeight - n.topMargin - n.bottomMargin,
        ])),
        (n.height = n.graphH + n.topMargin + n.bottomMargin),
        n.svg
          .transition()
          .duration(n.transDuration)
          .attr("width", n.width)
          .attr("height", n.height),
        n.graph.attr(
          "transform",
          "translate(" + n.leftMargin + "," + n.topMargin + ")"
        ),
        n.overviewArea &&
          n.overviewArea
            .width(0.8 * n.width)
            .height(
              n.overviewHeight +
                n.overviewArea.margins().top +
                n.overviewArea.margins().bottom
            ),
        (n.zoomX[0] =
          n.zoomX[0] ||
          m(n.flatData, function (t) {
            return t.timeRange[0];
          })),
        (n.zoomX[1] =
          n.zoomX[1] ||
          d(n.flatData, function (t) {
            return t.timeRange[1];
          })),
        (n.xScale = (n.useUtc ? dr : pr)()
          .domain(n.zoomX)
          .range([0, n.graphW])
          .clamp(!0)),
        n.overviewArea &&
          n.overviewArea.scale(n.xScale.copy()).tickFormat(n.xTickFormat),
        (function () {
          for (
            var t = [],
              e = function (e, r) {
                t = t.concat(
                  n.structData[e].lines.map(function (t) {
                    return n.structData[e].group + "+&+" + t;
                  })
                );
              },
              r = 0,
              i = n.structData.length;
            r < i;
            r++
          )
            e(r);
          n.yScale.domain(t),
            n.yScale.range([
              (n.graphH / t.length) * 0.5,
              n.graphH * (1 - 0.5 / t.length),
            ]);
        })(),
        (function () {
          n.grpScale.domain(
            n.structData.map(function (t) {
              return t.group;
            })
          );
          var t = 0;
          n.grpScale.range(
            n.structData.map(function (e) {
              var r = ((t + e.lines.length / 2) / n.nLines) * n.graphH;
              return (t += e.lines.length), r;
            })
          );
        })(),
        (function () {
          n.svg
            .select(".axises")
            .attr(
              "transform",
              "translate(" + n.leftMargin + "," + n.topMargin + ")"
            );
          var e = Math.max(2, Math.min(12, Math.round(0.012 * n.graphW)));
          n.xAxis.scale(n.xScale).ticks(e).tickFormat(n.xTickFormat),
            n.xGrid.scale(n.xScale).ticks(e).tickFormat(""),
            n.svg
              .select("g.x-axis")
              .style("stroke-opacity", 0)
              .style("fill-opacity", 0)
              .attr("transform", "translate(0," + n.graphH + ")")
              .transition()
              .duration(n.transDuration)
              .call(n.xAxis)
              .style("stroke-opacity", 1)
              .style("fill-opacity", 1),
            n.xGrid.tickSize(n.graphH),
            n.svg
              .select("g.x-grid")
              .attr("transform", "translate(0," + n.graphH + ")")
              .transition()
              .duration(n.transDuration)
              .call(n.xGrid),
            n.dateMarker &&
            n.dateMarker >= n.xScale.domain()[0] &&
            n.dateMarker <= n.xScale.domain()[1]
              ? n.dateMarkerLine
                  .style("display", "block")
                  .transition()
                  .duration(n.transDuration)
                  .attr("x1", n.xScale(n.dateMarker) + n.leftMargin)
                  .attr("x2", n.xScale(n.dateMarker) + n.leftMargin)
                  .attr("y1", n.topMargin + 1)
                  .attr("y2", n.graphH + n.topMargin)
              : n.dateMarkerLine.style("display", "none");
          var r = Math.ceil(
              (n.nLines * n.minLabelFont) / Math.sqrt(2) / n.graphH / 0.6
            ),
            i = n.yScale.domain().filter(function (t, n) {
              return !(n % r);
            }),
            a = Math.min(12, (n.graphH / i.length) * 0.6 * Math.sqrt(2)),
            o = Math.ceil(n.rightMargin / (a / Math.sqrt(2)));
          n.yAxis.tickValues(i),
            n.yAxis.tickFormat(function (t) {
              return l(t.split("+&+")[1], o);
            }),
            n.svg
              .select("g.y-axis")
              .transition()
              .duration(n.transDuration)
              .attr("transform", "translate(" + n.graphW + ", 0)")
              .style("font-size", a + "px")
              .call(n.yAxis);
          var u = m(n.grpScale.range(), function (t, e) {
            return e > 0 ? t - n.grpScale.range()[e - 1] : 2 * t;
          });
          (a = Math.min(14, 0.6 * u * Math.sqrt(2))),
            (o = Math.floor(n.leftMargin / (a / Math.sqrt(2)))),
            n.grpAxis.tickFormat(function (t) {
              return l(t, o);
            }),
            n.svg
              .select("g.grp-axis")
              .transition()
              .duration(n.transDuration)
              .style("font-size", a + "px")
              .call(n.grpAxis),
            n.onLabelClick &&
              n.svg
                .selectAll("g.y-axis,g.grp-axis")
                .selectAll("text")
                .style("cursor", "pointer")
                .on("click", function (e) {
                  var r = e.split("+&+");
                  n.onLabelClick.apply(n, t(r.reverse()));
                });
          function l(t, n) {
            return t.length <= n
              ? t
              : t.substring(0, (2 * n) / 3) +
                  "..." +
                  t.substring(t.length - n / 3, t.length);
          }
        })(),
        (function () {
          var t = n.graph
            .selectAll("rect.series-group")
            .data(n.structData, function (t) {
              return t.group;
            });
          t.exit()
            .transition()
            .duration(n.transDuration)
            .style("stroke-opacity", 0)
            .style("fill-opacity", 0)
            .remove();
          var e = t
            .enter()
            .append("rect")
            .attr("class", "series-group")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", 0)
            .style("fill", "url(#" + n.groupGradId + ")")
            .on("mouseover", n.groupTooltip.show)
            .on("mouseout", n.groupTooltip.hide);
          e.append("title").text("click-drag to zoom in"),
            (t = t.merge(e))
              .transition()
              .duration(n.transDuration)
              .attr("width", n.graphW)
              .attr("height", function (t) {
                return (n.graphH * t.lines.length) / n.nLines;
              })
              .attr("y", function (t) {
                return (
                  n.grpScale(t.group) -
                  (n.graphH * t.lines.length) / n.nLines / 2
                );
              });
        })(),
        (function (t) {
          t < 0 && (t = null);
          n.lineHeight = (n.graphH / n.nLines) * 0.8;
          var e = n.graph.selectAll("rect.series-segment").data(
            n.flatData.filter(function (e, r) {
              return (
                (null == t || r < t) &&
                n.grpScale.domain().indexOf(e.group) + 1 &&
                e.timeRange[1] >= n.xScale.domain()[0] &&
                e.timeRange[0] <= n.xScale.domain()[1] &&
                n.yScale.domain().indexOf(e.group + "+&+" + e.label) + 1
              );
            }),
            function (t) {
              return t.group + t.label + t.timeRange[0];
            }
          );
          e.exit()
            .transition()
            .duration(n.transDuration)
            .style("fill-opacity", 0)
            .remove();
          var r = e
            .enter()
            .append("rect")
            .attr("class", "series-segment")
            .attr("rx", 1)
            .attr("ry", 1)
            .attr("x", n.graphW / 2)
            .attr("y", n.graphH / 2)
            .attr("width", 0)
            .attr("height", 0)
            .style("fill", function (t) {
              return n.zColorScale(t.val);
            })
            .style("fill-opacity", 0)
            .on("mouseover.groupTooltip", n.groupTooltip.show)
            .on("mouseout.groupTooltip", n.groupTooltip.hide)
            .on("mouseover.lineTooltip", n.lineTooltip.show)
            .on("mouseout.lineTooltip", n.lineTooltip.hide)
            .on("mouseover.segmentTooltip", n.segmentTooltip.show)
            .on("mouseout.segmentTooltip", n.segmentTooltip.hide);
          r
            .on("mouseover", function () {
              if (!("disableHover" in n) || !n.disableHover) {
                Qa()(this);
                var t = 0.4 * n.lineHeight;
                Fi(this)
                  .transition()
                  .duration(70)
                  .attr("x", function (e) {
                    return n.xScale(e.timeRange[0]) - t / 2;
                  })
                  .attr("width", function (e) {
                    return (
                      d([
                        1,
                        n.xScale(e.timeRange[1]) - n.xScale(e.timeRange[0]),
                      ]) + t
                    );
                  })
                  .attr("y", function (e) {
                    return (
                      n.yScale(e.group + "+&+" + e.label) -
                      (n.lineHeight + t) / 2
                    );
                  })
                  .attr("height", n.lineHeight + t)
                  .style("fill-opacity", 1);
              }
            })
            .on("mouseout", function () {
              Fi(this)
                .transition()
                .duration(250)
                .attr("x", function (t) {
                  return n.xScale(t.timeRange[0]);
                })
                .attr("width", function (t) {
                  return d([
                    1,
                    n.xScale(t.timeRange[1]) - n.xScale(t.timeRange[0]),
                  ]);
                })
                .attr("y", function (t) {
                  return n.yScale(t.group + "+&+" + t.label) - n.lineHeight / 2;
                })
                .attr("height", n.lineHeight)
                .style("fill-opacity", 0.8);
            })
            .on("click", function (t) {
              n.onSegmentClick && n.onSegmentClick(t);
            }),
            (e = e.merge(r))
              .transition()
              .duration(n.transDuration)
              .attr("x", function (t) {
                return n.xScale(t.timeRange[0]);
              })
              .attr("width", function (t) {
                return d([
                  1,
                  n.xScale(t.timeRange[1]) - n.xScale(t.timeRange[0]),
                ]);
              })
              .attr("y", function (t) {
                return n.yScale(t.group + "+&+" + t.label) - n.lineHeight / 2;
              })
              .attr("height", n.lineHeight)
              .style("fill-opacity", 0.8);
        })(),
        n.svg
          .select(".legendG")
          .transition()
          .duration(n.transDuration)
          .attr(
            "transform",
            "translate(".concat(n.leftMargin + 0.05 * n.graphW, ",2)")
          ),
        n.colorLegend
          .width(Math.max(120, (n.graphW / 3) * (n.zQualitative ? 2 : 1)))
          .height(0.6 * n.topMargin)
          .scale(n.zColorScale)
          .label(n.zScaleLabel),
        n.resetBtn
          .transition()
          .duration(n.transDuration)
          .attr("x", n.leftMargin + 0.99 * n.graphW)
          .attr("y", 0.8 * n.topMargin),
        no().bbox({
          width: 0.4 * n.graphW,
          height: Math.min(13, 0.8 * n.topMargin),
        })(n.resetBtn.node());
    },
  });
});
