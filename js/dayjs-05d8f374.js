var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_minExports = {};
var dayjs_min = {
  get exports() {
    return dayjs_minExports;
  },
  set exports(v) {
    dayjs_minExports = v;
  }
};
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (h2) {
          case c:
            return r2 ? l2(1, 0) : l2(31, 11);
          case f:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = O.p(h2), y2 = function(t2) {
          var e2 = w(l2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === f)
          return this.set(f, this.$M + r2);
        if ($2 === c)
          return this.set(c, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || $2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
        return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      T[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
const dayjs = dayjs_minExports;
var durationExports = {};
var duration$1 = {
  get exports() {
    return durationExports;
  },
  set exports(v) {
    durationExports = v;
  }
};
(function(module, exports) {
  !function(t, s) {
    module.exports = s();
  }(commonjsGlobal, function() {
    var t, s, n = 1e3, i = 6e4, e = 36e5, r = 864e5, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, h = 2592e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, d = { years: u, months: h, days: r, hours: e, minutes: i, seconds: n, milliseconds: 1, weeks: 6048e5 }, c = function(t2) {
      return t2 instanceof p;
    }, f = function(t2, s2, n2) {
      return new p(t2, n2, s2.$l);
    }, m = function(t2) {
      return s.p(t2) + "s";
    }, l = function(t2) {
      return t2 < 0;
    }, $ = function(t2) {
      return l(t2) ? Math.ceil(t2) : Math.floor(t2);
    }, y = function(t2) {
      return Math.abs(t2);
    }, g = function(t2, s2) {
      return t2 ? l(t2) ? { negative: true, format: "" + y(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
    }, p = function() {
      function l2(t2, s2, n2) {
        var i2 = this;
        if (this.$d = {}, this.$l = n2, void 0 === t2 && (this.$ms = 0, this.parseFromMilliseconds()), s2)
          return f(t2 * d[m(s2)], this);
        if ("number" == typeof t2)
          return this.$ms = t2, this.parseFromMilliseconds(), this;
        if ("object" == typeof t2)
          return Object.keys(t2).forEach(function(s3) {
            i2.$d[m(s3)] = t2[s3];
          }), this.calMilliseconds(), this;
        if ("string" == typeof t2) {
          var e2 = t2.match(a);
          if (e2) {
            var r2 = e2.slice(2).map(function(t3) {
              return null != t3 ? Number(t3) : 0;
            });
            return this.$d.years = r2[0], this.$d.months = r2[1], this.$d.weeks = r2[2], this.$d.days = r2[3], this.$d.hours = r2[4], this.$d.minutes = r2[5], this.$d.seconds = r2[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var y2 = l2.prototype;
      return y2.calMilliseconds = function() {
        var t2 = this;
        this.$ms = Object.keys(this.$d).reduce(function(s2, n2) {
          return s2 + (t2.$d[n2] || 0) * d[n2];
        }, 0);
      }, y2.parseFromMilliseconds = function() {
        var t2 = this.$ms;
        this.$d.years = $(t2 / u), t2 %= u, this.$d.months = $(t2 / h), t2 %= h, this.$d.days = $(t2 / r), t2 %= r, this.$d.hours = $(t2 / e), t2 %= e, this.$d.minutes = $(t2 / i), t2 %= i, this.$d.seconds = $(t2 / n), t2 %= n, this.$d.milliseconds = t2;
      }, y2.toISOString = function() {
        var t2 = g(this.$d.years, "Y"), s2 = g(this.$d.months, "M"), n2 = +this.$d.days || 0;
        this.$d.weeks && (n2 += 7 * this.$d.weeks);
        var i2 = g(n2, "D"), e2 = g(this.$d.hours, "H"), r2 = g(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
        this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3);
        var u2 = g(o2, "S"), h2 = t2.negative || s2.negative || i2.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", d2 = (h2 ? "-" : "") + "P" + t2.format + s2.format + i2.format + a2 + e2.format + r2.format + u2.format;
        return "P" === d2 || "-P" === d2 ? "P0D" : d2;
      }, y2.toJSON = function() {
        return this.toISOString();
      }, y2.format = function(t2) {
        var n2 = t2 || "YYYY-MM-DDTHH:mm:ss", i2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return n2.replace(o, function(t3, s2) {
          return s2 || String(i2[t3]);
        });
      }, y2.as = function(t2) {
        return this.$ms / d[m(t2)];
      }, y2.get = function(t2) {
        var s2 = this.$ms, n2 = m(t2);
        return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? $(s2 / d[n2]) : this.$d[n2], 0 === s2 ? 0 : s2;
      }, y2.add = function(t2, s2, n2) {
        var i2;
        return i2 = s2 ? t2 * d[m(s2)] : c(t2) ? t2.$ms : f(t2, this).$ms, f(this.$ms + i2 * (n2 ? -1 : 1), this);
      }, y2.subtract = function(t2, s2) {
        return this.add(t2, s2, true);
      }, y2.locale = function(t2) {
        var s2 = this.clone();
        return s2.$l = t2, s2;
      }, y2.clone = function() {
        return f(this.$ms, this);
      }, y2.humanize = function(s2) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
      }, y2.milliseconds = function() {
        return this.get("milliseconds");
      }, y2.asMilliseconds = function() {
        return this.as("milliseconds");
      }, y2.seconds = function() {
        return this.get("seconds");
      }, y2.asSeconds = function() {
        return this.as("seconds");
      }, y2.minutes = function() {
        return this.get("minutes");
      }, y2.asMinutes = function() {
        return this.as("minutes");
      }, y2.hours = function() {
        return this.get("hours");
      }, y2.asHours = function() {
        return this.as("hours");
      }, y2.days = function() {
        return this.get("days");
      }, y2.asDays = function() {
        return this.as("days");
      }, y2.weeks = function() {
        return this.get("weeks");
      }, y2.asWeeks = function() {
        return this.as("weeks");
      }, y2.months = function() {
        return this.get("months");
      }, y2.asMonths = function() {
        return this.as("months");
      }, y2.years = function() {
        return this.get("years");
      }, y2.asYears = function() {
        return this.as("years");
      }, l2;
    }();
    return function(n2, i2, e2) {
      t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
        var n3 = e2.locale();
        return f(t2, { $l: n3 }, s2);
      }, e2.isDuration = c;
      var r2 = i2.prototype.add, o2 = i2.prototype.subtract;
      i2.prototype.add = function(t2, s2) {
        return c(t2) && (t2 = t2.asMilliseconds()), r2.bind(this)(t2, s2);
      }, i2.prototype.subtract = function(t2, s2) {
        return c(t2) && (t2 = t2.asMilliseconds()), o2.bind(this)(t2, s2);
      };
    };
  });
})(duration$1);
const duration = durationExports;
export {
  duration as a,
  commonjsGlobal as c,
  dayjs as d
};
