var searchTerm = document.getElementById("search-input").value;
var apiKey = `431ef08a8ca91b698565b06415`.trim();
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.ClipboardJS = t()) : (e.ClipboardJS = t());
})(this, function () {
    return (
        (i = {}),
            (o.m = n = [
                function (e, t, n) {
                    "use strict";
                    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {return typeof e;} : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                },
                        o = function (e, t, n) {
                            return t && l(e.prototype, t), n && l(e, n), e;
                        },
                        r = c(n(1)),
                        a = c(n(3)),
                        s = c(n(4));
                    function l(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    function c(e) {
                        return e && e.__esModule ? e : { default: e };
                    }
                    var u =
                        ((function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(d, a.default),
                            o(
                                d,
                                [
                                    {
                                        key: "resolveOptions",
                                        value: function () {
                                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                            (this.action = "function" == typeof e.action ? e.action : this.defaultAction),
                                                (this.target = "function" == typeof e.target ? e.target : this.defaultTarget),
                                                (this.text = "function" == typeof e.text ? e.text : this.defaultText),
                                                (this.container = "object" === i(e.container) ? e.container : document.body);
                                        },
                                    },
                                    {
                                        key: "listenClick",
                                        value: function (e) {
                                            var t = this;
                                            this.listener = (0, s.default)(e, "click", function (e) {
                                                return t.onClick(e);
                                            });
                                        },
                                    },
                                    {
                                        key: "onClick",
                                        value: function (e) {
                                            var t = e.delegateTarget || e.currentTarget;
                                            this.clipboardAction && (this.clipboardAction = null),
                                                (this.clipboardAction = new r.default({ action: this.action(t), target: this.target(t), text: this.text(t), container: this.container, trigger: t, emitter: this }));
                                        },
                                    },
                                    {
                                        key: "defaultAction",
                                        value: function (e) {
                                            return f("action", e);
                                        },
                                    },
                                    {
                                        key: "defaultTarget",
                                        value: function (e) {
                                            var t = f("target", e);
                                            if (t) return document.querySelector(t);
                                        },
                                    },
                                    {
                                        key: "defaultText",
                                        value: function (e) {
                                            return f("text", e);
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "isSupported",
                                        value: function () {
                                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                                t = "string" == typeof e ? [e] : e,
                                                n = !!document.queryCommandSupported;
                                            return (
                                                t.forEach(function (e) {
                                                    n = n && !!document.queryCommandSupported(e);
                                                }),
                                                    n
                                            );
                                        },
                                    },
                                ]
                            ),
                            d);
                    function d(e, t) {
                        !(function (e) {
                            if (!(e instanceof d)) throw new TypeError("Cannot call a class as a function");
                        })(this);
                        var n = (function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        })(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
                        return n.resolveOptions(t), n.listenClick(e), n;
                    }
                    function f(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n)) return t.getAttribute(n);
                    }
                    e.exports = u;
                },
                function (e, t, n) {
                    "use strict";
                    var i =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                    return typeof e;
                                }
                                : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                },
                        o = function (e, t, n) {
                            return t && s(e.prototype, t), n && s(e, n), e;
                        },
                        r = n(2),
                        a = r && r.__esModule ? r : { default: r };
                    function s(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    var l =
                        (o(c, [
                            {
                                key: "resolveOptions",
                                value: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.action = e.action), (this.container = e.container), (this.emitter = e.emitter), (this.target = e.target), (this.text = e.text), (this.trigger = e.trigger), (this.selectedText = "");
                                },
                            },
                            {
                                key: "initSelection",
                                value: function () {
                                    this.text ? this.selectFake() : this.target && this.selectTarget();
                                },
                            },
                            {
                                key: "selectFake",
                                value: function () {
                                    var e = this,
                                        t = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(),
                                        (this.fakeHandlerCallback = function () {
                                            return e.removeFake();
                                        }),
                                        (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                        (this.fakeElem = document.createElement("textarea")),
                                        (this.fakeElem.style.fontSize = "12pt"),
                                        (this.fakeElem.style.border = "0"),
                                        (this.fakeElem.style.padding = "0"),
                                        (this.fakeElem.style.margin = "0"),
                                        (this.fakeElem.style.position = "absolute"),
                                        (this.fakeElem.style[t ? "right" : "left"] = "-9999px");
                                    var n = window.pageYOffset || document.documentElement.scrollTop;
                                    (this.fakeElem.style.top = n + "px"),
                                        this.fakeElem.setAttribute("readonly", ""),
                                        (this.fakeElem.value = this.text),
                                        this.container.appendChild(this.fakeElem),
                                        (this.selectedText = (0, a.default)(this.fakeElem)),
                                        this.copyText();
                                },
                            },
                            {
                                key: "removeFake",
                                value: function () {
                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                    this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                },
                            },
                            {
                                key: "selectTarget",
                                value: function () {
                                    (this.selectedText = (0, a.default)(this.target)), this.copyText();
                                },
                            },
                            {
                                key: "copyText",
                                value: function () {
                                    var t = void 0;
                                    try {
                                        t = document.execCommand(this.action);
                                    } catch (e) {
                                        t = !1;
                                    }
                                    this.handleResult(t);
                                },
                            },
                            {
                                key: "handleResult",
                                value: function (e) {
                                    this.emitter.emit(e ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                                },
                            },
                            {
                                key: "clearSelection",
                                value: function () {
                                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.removeFake();
                                },
                            },
                            {
                                key: "action",
                                set: function () {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                                    if (((this._action = e), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                },
                                get: function () {
                                    return this._action;
                                },
                            },
                            {
                                key: "target",
                                set: function (e) {
                                    if (void 0 !== e) {
                                        if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = e;
                                    }
                                },
                                get: function () {
                                    return this._target;
                                },
                            },
                        ]),
                            c);
                    function c(e) {
                        !(function (e) {
                            if (!(e instanceof c)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            this.resolveOptions(e),
                            this.initSelection();
                    }
                    e.exports = l;
                },
                function (e, t) {
                    e.exports = function (e) {
                        var t;
                        if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                            var n = e.hasAttribute("readonly");
                            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), (t = e.value);
                        } else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var i = window.getSelection(),
                                o = document.createRange();
                            o.selectNodeContents(e), i.removeAllRanges(), i.addRange(o), (t = i.toString());
                        }
                        return t;
                    };
                },
                function (e, t) {
                    function n() {}
                    (n.prototype = {
                        on: function (e, t, n) {
                            var i = this.e || (this.e = {});
                            return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this;
                        },
                        once: function (e, t, n) {
                            var i = this;
                            function o() {
                                i.off(e, o), t.apply(n, arguments);
                            }
                            return (o._ = t), this.on(e, o, n);
                        },
                        emit: function (e) {
                            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                            return this;
                        },
                        off: function (e, t) {
                            var n = this.e || (this.e = {}),
                                i = n[e],
                                o = [];
                            if (i && t) for (var r = 0, a = i.length; r < a; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                            return o.length ? (n[e] = o) : delete n[e], this;
                        },
                    }),
                        (e.exports = n);
                },
                function (e, t, n) {
                    var c = n(5),
                        u = n(6);
                    e.exports = function (e, t, n) {
                        if (!e && !t && !n) throw new Error("Missing required arguments");
                        if (!c.string(t)) throw new TypeError("Second argument must be a String");
                        if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                        if (c.node(e))
                            return (
                                (s = t),
                                    (l = n),
                                    (a = e).addEventListener(s, l),
                                    {
                                        destroy: function () {
                                            a.removeEventListener(s, l);
                                        },
                                    }
                            );
                        if (c.nodeList(e))
                            return (
                                (i = e),
                                    (o = t),
                                    (r = n),
                                    Array.prototype.forEach.call(i, function (e) {
                                        e.addEventListener(o, r);
                                    }),
                                    {
                                        destroy: function () {
                                            Array.prototype.forEach.call(i, function (e) {
                                                e.removeEventListener(o, r);
                                            });
                                        },
                                    }
                            );
                        if (c.string(e)) return u(document.body, e, t, n);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        var i, o, r, a, s, l;
                    };
                },
                function (e, n) {
                    (n.node = function (e) {
                        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
                    }),
                        (n.nodeList = function (e) {
                            var t = Object.prototype.toString.call(e);
                            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]));
                        }),
                        (n.string = function (e) {
                            return "string" == typeof e || e instanceof String;
                        }),
                        (n.fn = function (e) {
                            return "[object Function]" === Object.prototype.toString.call(e);
                        });
                },
                function (e, t, n) {
                    var a = n(7);
                    function r(e, t, n, i, o) {
                        var r = function (t, n, e, i) {
                            return function (e) {
                                (e.delegateTarget = a(e.target, n)), e.delegateTarget && i.call(t, e);
                            };
                        }.apply(this, arguments);
                        return (
                            e.addEventListener(n, r, o),
                                {
                                    destroy: function () {
                                        e.removeEventListener(n, r, o);
                                    },
                                }
                        );
                    }
                    e.exports = function (e, t, n, i, o) {
                        return "function" == typeof e.addEventListener
                            ? r.apply(null, arguments)
                            : "function" == typeof n
                                ? r.bind(null, document).apply(null, arguments)
                                : ("string" == typeof e && (e = document.querySelectorAll(e)),
                                    Array.prototype.map.call(e, function (e) {
                                        return r(e, t, n, i, o);
                                    }));
                    };
                },
                function (e, t) {
                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                        var n = Element.prototype;
                        n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
                    }
                    e.exports = function (e, t) {
                        for (; e && 9 !== e.nodeType; ) {
                            if ("function" == typeof e.matches && e.matches(t)) return e;
                            e = e.parentNode;
                        }
                    };
                },
            ]),
            (o.c = i),
            (o.d = function (e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (o.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (o.t = function (t, e) {
                if ((1 & e && (t = o(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        o.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (o.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return o.d(t, "a", t), t;
            }),
            (o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (o.p = ""),
            o((o.s = 0))
    );
    function o(e) {
        if (i[e]) return i[e].exports;
        var t = (i[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    var n, i;
}),
    (function (s, l) {
        "use strict";
        function e(i, o) {
            var r, a;
            return function () {
                var e = this,
                    t = arguments,
                    n = +new Date();
                r && n < r + i
                    ? (clearTimeout(a),
                        (a = setTimeout(function () {
                            (r = n), o.apply(e, t);
                        }, i)))
                    : ((r = n), o.apply(e, t));
            };
        }
        function n() {
            if (!h || !l.body.contains(h) || "loaded" == h.disqusLoaderStatus) return !0;
            var e,
                t = s.pageYOffset,
                n = [(e = h.getBoundingClientRect()).top + l.body.scrollTop, (e.left, l.body.scrollLeft)][0];
            if (n - t > s.innerHeight * c || 0 < t - n - h.offsetHeight - s.innerHeight * c) return !0;
            var i,
                o,
                r,
                a = l.getElementById("disqus_thread");
            a && a.removeAttribute("id"),
                h.setAttribute("id", "disqus_thread"),
                (h.disqusLoaderStatus = "loaded") == f
                    ? DISQUS.reset({ reload: !0, config: u })
                    : ((s.disqus_config = u),
                    "unloaded" == f &&
                    ((f = "loading"),
                        (i = d),
                        (o = function () {
                            f = "loaded";
                        }),
                        ((r = l.createElement("script")).src = i),
                        (r.async = !0),
                        r.setAttribute("data-timestamp", +new Date()),
                        r.addEventListener("load", function () {
                            "function" == typeof o && o();
                        }),
                        (l.head || l.body).appendChild(r)));
        }
        var i = !1,
            c = !1,
            u = !1,
            d = !1,
            f = "unloaded",
            h = !1;
        s.addEventListener("scroll", e(i, n)),
            s.addEventListener("resize", e(i, n)),
            (s.disqusLoader = function (e, t) {
                (t = (function (e, t) {
                    var n,
                        i = {};
                    for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
                    return i;
                })({ laziness: 1, throttle: 250, scriptUrl: !1, disqusConfig: !1 }, t)),
                    (c = t.laziness + 1),
                    (i = t.throttle),
                    (u = t.disqusConfig),
                    (d = !1 === d ? t.scriptUrl : d),
                (h = "string" == typeof e ? l.querySelector(e) : "number" == typeof e.length ? e[0] : e) && (h.disqusLoaderStatus = "unloaded"),
                    n();
            });
    })(window, document);
var v = (function (n) {
    var i = {};
    function o(e) {
        if (i[e]) return i[e].exports;
        var t = (i[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
    }
    return (
        (o.m = n),
            (o.c = i),
            (o.d = function (e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (o.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (o.t = function (t, e) {
                if ((1 & e && (t = o(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        o.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (o.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return o.d(t, "a", t), t;
            }),
            (o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (o.p = ""),
            o((o.s = 1))
    );
})([
    function (e, t, n) {
        "use strict";
        function ie(e) {
            return (ie =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
        }
        var r, a, i, o, s, l;
        (i = "FlexSearch"),
            (o = (function r(a) {
                function d(e, t) {
                    var n = t ? t.id : e && e.id;
                    (this.id = n || 0 === n ? n : u++),
                        this.init(e, t),
                        i(this, "index", function () {
                            return this.a ? Object.keys(this.a.index[this.a.keys[0]].c) : Object.keys(this.c);
                        }),
                        i(this, "length", function () {
                            return this.index.length;
                        });
                }
                function f(e, t, n, i) {
                    return this.u !== this.g && ((this.o = this.o.concat(n)), this.u++, i && this.o.length >= i && (this.u = this.g), this.u === this.g && (this.cache && this.j.set(t, this.o), this.F && this.F(this.o))), this;
                }
                function T(e, t) {
                    for (var n = e.length, i = H(t), o = [], r = 0, a = 0; r < n; r++) {
                        var s = e[r];
                        ((i && t(s)) || (!i && !t[s])) && (o[a++] = s);
                    }
                    return o;
                }
                function I(e, t, n, i, o, r, a, s, l, c) {
                    var u;
                    if (((n = N(n, a ? 0 : o, s, r, t, l, c)), s && ((s = n.page), (u = n.next), (n = n.result)), a)) t = this.where(a, null, o, n);
                    else {
                        for (t = n, n = this.l, o = t.length, r = Array(o), a = 0; a < o; a++) r[a] = n[t[a]];
                        t = r;
                    }
                    return (n = t), i && (H(i) || (i = 1 < (v = i.split(":")).length ? g : ((v = v[0]), p)), n.sort(i)), (n = j(s, u, n)), this.cache && this.j.set(e, n), n;
                }
                function i(e, t, n) {
                    Object.defineProperty(e, t, { get: n });
                }
                function h(e) {
                    return new RegExp(e, "g");
                }
                function o(e, t) {
                    for (var n = 0; n < t.length; n += 2) e = e.replace(t[n], t[n + 1]);
                    return e;
                }
                function S(e, t, n, i, o, r, a, s) {
                    return t[n] ? t[n] : ((o = o ? (s - (a || s / 1.5)) * r + (a || s / 1.5) * o : r), a <= (t[n] = o) && ((e = (e = e[s - ((o + 0.5) >> 0)])[n] || (e[n] = []))[e.length] = i), o);
                }
                function c(e, t) {
                    if (e)
                        for (var n = Object.keys(e), i = 0, o = n.length; i < o; i++) {
                            var r = n[i],
                                a = e[r];
                            if (a)
                                for (var s = 0, l = a.length; s < l; s++) {
                                    if (a[s] === t) {
                                        1 === l ? delete e[r] : a.splice(s, 1);
                                        break;
                                    }
                                    M(a[s]) && c(a[s], t);
                                }
                        }
                }
                function s(e) {
                    for (var t = "", n = "", i = "", o = 0; o < e.length; o++) {
                        var r = e[o];
                        r !== n &&
                        (o && "h" === r
                            ? ((i = "a" === i || "e" === i || "i" === i || "o" === i || "u" === i || "y" === i), ((("a" !== n && "e" !== n && "i" !== n && "o" !== n && "u" !== n && "y" !== n) || !i) && " " !== n) || (t += r))
                            : (t += r)),
                            (i = o === e.length - 1 ? "" : e[o + 1]),
                            (n = r);
                    }
                    return t;
                }
                function F(e, t) {
                    return (e = e.length - t.length) < 0 ? 1 : e ? -1 : 0;
                }
                function p(e, t) {
                    return (e = e[v]) < (t = t[v]) ? -1 : t < e ? 1 : 0;
                }
                function g(e, t) {
                    for (var n = v.length, i = 0; i < n; i++) (e = e[v[i]]), (t = t[v[i]]);
                    return e < t ? -1 : t < e ? 1 : 0;
                }
                function j(e, t, n) {
                    return e ? { page: e, next: t ? "" + t : null, result: n } : n;
                }
                function N(e, t, n, i, o, r, a) {
                    var s,
                        l = [];
                    if (!0 === n) {
                        n = "0";
                        var c = "";
                    } else c = n && n.split(":");
                    var u = e.length;
                    if (1 < u) {
                        var d,
                            f,
                            h,
                            p,
                            g,
                            m,
                            v,
                            y,
                            b,
                            k,
                            w = $(),
                            S = [],
                            E = 0,
                            x = !0,
                            _ = 0;
                        if (((c = c && (2 === c.length ? ((y = c), !1) : (b = parseInt(c[0], 10)))), a)) {
                            for (d = $(); E < u; E++)
                                if ("not" === o[E]) for (p = (f = e[E]).length, h = 0; h < p; h++) d["@" + f[h]] = 1;
                                else v = E + 1;
                            if (D(v)) return j(n, s, l);
                            E = 0;
                        } else m = P(o) && o;
                        for (; E < u; E++) {
                            var A = E === (v || u) - 1;
                            if (!m || !E)
                                if ((h = m || (o && o[E])) && "and" !== h) {
                                    if ("or" !== h) continue;
                                    k = !1;
                                } else k = r = !0;
                            if ((p = (f = e[E]).length)) {
                                if (x) {
                                    if (!g) {
                                        g = f;
                                        continue;
                                    }
                                    var L = g.length;
                                    for (h = 0; h < L; h++) {
                                        var O = "@" + (x = g[h]);
                                        (a && d[O]) || ((w[O] = 1), r || (l[_++] = x));
                                    }
                                    (g = null), (x = !1);
                                }
                                for (O = !1, h = 0; h < p; h++) {
                                    var z = "@" + (L = f[h]),
                                        C = r ? w[z] || 0 : E;
                                    if (!((!C && !i) || (a && d[z]) || (!r && w[z])))
                                        if (C === E) {
                                            if (A) {
                                                if ((!b || --b < _) && ((l[_++] = L), t && _ === t)) return j(n, _ + (c || 0), l);
                                            } else w[z] = E + 1;
                                            O = !0;
                                        } else i && ((z = S[C] || (S[C] = []))[z.length] = L);
                                }
                                if (k && !O && !i) break;
                            } else if (k && !i) return j(n, s, f);
                        }
                        if (g)
                            if (((E = g.length), a)) for (h = c ? parseInt(c, 10) : 0; h < E; h++) d["@" + (e = g[h])] || (l[_++] = e);
                            else l = g;
                        if (i)
                            for (_ = l.length, h = y ? ((E = parseInt(y[0], 10) + 1), parseInt(y[1], 10) + 1) : ((E = S.length), 0); E--; )
                                if ((L = S[E])) {
                                    for (p = L.length; h < p; h++) if (((i = L[h]), (!a || !d["@" + i]) && ((l[_++] = i), t && _ === t))) return j(n, E + ":" + h, l);
                                    h = 0;
                                }
                    } else !u || (o && "not" === o[0]) || ((l = e[0]), (c = c && parseInt(c[0], 10)));
                    return t && ((a = l.length), c && a < c && (c = 0), (s = (c = c || 0) + t) < a ? (l = l.slice(c, s)) : ((s = 0), c && (l = l.slice(c)))), j(n, s, l);
                }
                function P(e) {
                    return "string" == typeof e;
                }
                function R(e) {
                    return e.constructor === Array;
                }
                function H(e) {
                    return "function" == typeof e;
                }
                function M(e) {
                    return "object" === ie(e);
                }
                function D(e) {
                    return void 0 === e;
                }
                function E(e) {
                    for (var t = Array(e), n = 0; n < e; n++) t[n] = $();
                    return t;
                }
                function $() {
                    return Object.create(null);
                }
                function l() {
                    var n, i;
                    self.onmessage = function (e) {
                        if ((e = e.data))
                            if (e.search) {
                                var t = i.search(e.content, e.threshold ? { limit: e.limit, threshold: e.threshold, where: e.where } : e.limit);
                                self.postMessage({ id: n, content: e.content, limit: e.limit, result: t });
                            } else
                                e.add
                                    ? i.add(e.id, e.content)
                                    : e.update
                                    ? i.update(e.id, e.content)
                                    : e.remove
                                        ? i.remove(e.id)
                                        : e.clear
                                            ? i.clear()
                                            : e.info
                                                ? (((e = i.info()).worker = n), console.log(e))
                                                : e.register &&
                                                ((n = e.id),
                                                    (e.options.cache = !1),
                                                    (e.options.async = !1),
                                                    (e.options.worker = !1),
                                                    (i = new (i = new Function(e.register.substring(e.register.indexOf("{") + 1, e.register.lastIndexOf("}")))())(e.options)));
                    };
                }
                function m(e, t, n, i) {
                    e = a(
                        "flexsearch",
                        "id" + e,
                        l,
                        function (e) {
                            (e = e.data) && e.result && i(e.id, e.content, e.result, e.limit, e.where, e.cursor, e.suggest);
                        },
                        t
                    );
                    var o = r.toString();
                    return (n.id = t), e.postMessage({ register: o, options: n, id: t }), e;
                }
                var v,
                    y = { encode: "icase", f: "forward", split: /\W+/, cache: !1, async: !1, g: !1, D: !1, a: !1, b: 9, threshold: 0, depth: 0 },
                    b = {
                        memory: { encode: "extra", f: "strict", threshold: 0, b: 1 },
                        speed: { encode: "icase", f: "strict", threshold: 1, b: 3, depth: 2 },
                        match: { encode: "extra", f: "full", threshold: 1, b: 3 },
                        score: { encode: "extra", f: "strict", threshold: 1, b: 9, depth: 4 },
                        balance: { encode: "balance", f: "strict", threshold: 0, b: 3, depth: 3 },
                        fast: { encode: "icase", f: "strict", threshold: 8, b: 9, depth: 1 },
                    },
                    n = [],
                    u = 0,
                    k = {},
                    w = {};
                (d.create = function (e, t) {
                    return new d(e, t);
                }),
                    (d.registerMatcher = function (e) {
                        for (var t in e) e.hasOwnProperty(t) && n.push(h(t), e[t]);
                        return this;
                    }),
                    (d.registerEncoder = function (e, t) {
                        return (ee[e] = t.bind(ee)), this;
                    }),
                    (d.registerLanguage = function (e, t) {
                        return (k[e] = t.filter), (w[e] = t.stemmer), this;
                    }),
                    (d.encode = function (e, t) {
                        return ee[e](t);
                    }),
                    (d.prototype.init = function (e, t) {
                        if (((this.v = []), t)) {
                            var n = t.preset;
                            e = t;
                        } else n = (e = e || y).preset;
                        if (((t = {}), P(e) ? ((t = b[e]), (e = {})) : n && (t = b[n]), (n = e.worker)))
                            if ("undefined" == typeof Worker) (e.worker = !1), (this.m = null);
                            else {
                                var i = parseInt(n, 10) || 4;
                                (this.C = -1), (this.u = 0), (this.o = []), (this.F = null), (this.m = Array(i));
                                for (var o = 0; o < i; o++) this.m[o] = m(this.id, o, e, f.bind(this));
                            }
                        if (
                            ((this.f = e.tokenize || t.f || this.f || y.f),
                                (this.split = D((n = e.split)) ? this.split || y.split : P(n) ? h(n) : n),
                                (this.D = e.rtl || this.D || y.D),
                                (this.async = "undefined" == typeof Promise || D((n = e.async)) ? this.async || y.async : n),
                                (this.g = D((n = e.worker)) ? this.g || y.g : n),
                                (this.threshold = D((n = e.threshold)) ? t.threshold || this.threshold || y.threshold : n),
                                (this.b = D((n = e.resolution)) ? (n = t.b || this.b || y.b) : n),
                            n <= this.threshold && (this.b = this.threshold + 1),
                                (this.depth = "strict" !== this.f || D((n = e.depth)) ? t.depth || this.depth || y.depth : n),
                                (this.w = ((n = D((n = e.encode)) ? t.encode || y.encode : n) && ee[n] && ee[n].bind(ee)) || (H(n) ? n : this.w || !1)),
                            (n = e.matcher) && this.addMatcher(n),
                                (n = (t = e.lang) || e.filter))
                        ) {
                            if ((P(n) && (n = k[n]), R(n))) {
                                (i = this.w), (o = $());
                                for (var r = 0; r < n.length; r++) {
                                    var a = i ? i(n[r]) : n[r];
                                    o[a] = 1;
                                }
                                n = o;
                            }
                            this.filter = n;
                        }
                        if ((n = t || e.stemmer)) {
                            var s;
                            for (s in ((t = P(n) ? w[n] : n), (i = this.w), (o = []), t)) t.hasOwnProperty(s) && ((r = i ? i(s) : s), o.push(h(r + "($|\\W)"), i ? i(t[s]) : t[s]));
                            this.stemmer = s = o;
                        }
                        if (
                            ((this.a = o = (n = e.doc)
                                ? (function e(t) {
                                    var n = $();
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            var o = t[i];
                                            R(o) ? (n[i] = o.slice(0)) : M(o) ? (n[i] = e(o)) : (n[i] = o);
                                        }
                                    return n;
                                })(n)
                                : this.a || y.a),
                                (this.i = E(this.b - (this.threshold || 0))),
                                (this.h = $()),
                                (this.c = $()),
                                o)
                        ) {
                            if (((this.l = $()), (e.doc = null), (s = o.index = {}), (t = o.keys = []), (i = o.field), (r = o.tag), (a = o.store), R(o.id) || (o.id = o.id.split(":")), a)) {
                                var l = $();
                                if (P(a)) l[a] = 1;
                                else if (R(a)) for (var c = 0; c < a.length; c++) l[a[c]] = 1;
                                else M(a) && (l = a);
                                o.store = l;
                            }
                            if (r) {
                                if (((this.G = $()), (a = $()), i))
                                    if (P(i)) a[i] = e;
                                    else if (R(i)) for (l = 0; l < i.length; l++) a[i[l]] = e;
                                    else M(i) && (a = i);
                                for (R(r) || (o.tag = r = [r]), i = 0; i < r.length; i++) this.G[r[i]] = $();
                                (this.I = r), (i = a);
                            }
                            var u;
                            if (i) for (R(i) || (M(i) ? ((u = i), (o.field = i = Object.keys(i))) : (o.field = i = [i])), o = 0; o < i.length; o++) R((r = i[o])) || (u && (e = u[r]), (t[o] = r), (i[o] = r.split(":"))), (s[r] = new d(e));
                            e.doc = n;
                        }
                        return (this.B = !0), (this.j = !!(this.cache = n = D((n = e.cache)) ? this.cache || y.cache : n) && new te(n)), this;
                    }),
                    (d.prototype.encode = function (e) {
                        return e && (n.length && (e = o(e, n)), this.v.length && (e = o(e, this.v)), this.w && (e = this.w(e)), this.stemmer && (e = o(e, this.stemmer))), e;
                    }),
                    (d.prototype.addMatcher = function (e) {
                        var t = this.v;
                        for (var n in e) e.hasOwnProperty(n) && t.push(h(n), e[n]);
                        return this;
                    }),
                    (d.prototype.add = function (t, n, e, i, o) {
                        if (this.a && M(t)) return this.A("add", t, n);
                        if (n && P(n) && (t || 0 === t)) {
                            var r = "@" + t;
                            if (this.c[r] && !i) return this.update(t, n);
                            if (this.g) return ++this.C >= this.m.length && (this.C = 0), this.m[this.C].postMessage({ add: !0, id: t, content: n }), (this.c[r] = "" + this.C), e && e(), this;
                            if (!o) {
                                if (this.async && "function" != typeof importScripts) {
                                    var a = this;
                                    return (
                                        (r = new Promise(function (e) {
                                            setTimeout(function () {
                                                a.add(t, n, null, i, !0), (a = null), e();
                                            });
                                        })),
                                            e ? (r.then(e), this) : r
                                    );
                                }
                                if (e) return this.add(t, n, null, i, !0), e(), this;
                            }
                            if (!(n = this.encode(n)).length) return this;
                            (o = H((e = this.f)) ? e(n) : n.split(this.split)), this.filter && (o = T(o, this.filter));
                            var s = $();
                            s._ctx = $();
                            for (var l = o.length, c = this.threshold, u = this.depth, d = this.b, f = this.i, h = this.D, p = 0; p < l; p++) {
                                var g = o[p];
                                if (g) {
                                    var m = g.length,
                                        v = (h ? p + 1 : l - p) / l,
                                        y = "";
                                    switch (e) {
                                        case "reverse":
                                        case "both":
                                            for (var b = m; --b; ) S(f, s, (y = g[b] + y), t, h ? 1 : (m - b) / m, v, c, d - 1);
                                            y = "";
                                        case "forward":
                                            for (b = 0; b < m; b++) S(f, s, (y += g[b]), t, h ? (b + 1) / m : 1, v, c, d - 1);
                                            break;
                                        case "full":
                                            for (b = 0; b < m; b++) for (var k = (h ? b + 1 : m - b) / m, w = m; b < w; w--) S(f, s, (y = g.substring(b, w)), t, k, v, c, d - 1);
                                            break;
                                        default:
                                            if (((m = S(f, s, g, t, 1, v, c, d - 1)), u && 1 < l && c <= m))
                                                for (m = s._ctx[g] || (s._ctx[g] = $()), g = this.h[g] || (this.h[g] = E(d - (c || 0))), (v = p - u) < 0 && (v = 0), (y = p + u + 1) > l && (y = l); v < y; v++)
                                                    v !== p && S(g, m, o[v], t, 0, d - (v < p ? p - v : v - p), c, d - 1);
                                    }
                                }
                            }
                            (this.c[r] = 1), (this.B = !1);
                        }
                        return this;
                    }),
                    (d.prototype.A = function (e, t, n) {
                        if (R(t)) {
                            var i = t.length;
                            if (i--) {
                                for (var o = 0; o < i; o++) this.A(e, t[o]);
                                return this.A(e, t[i], n);
                            }
                        } else {
                            var r,
                                a = this.a.index,
                                s = this.a.keys,
                                l = this.a.tag;
                            o = this.a.store;
                            var c = this.a.id;
                            i = t;
                            for (var u = 0; u < c.length; u++) i = i[c[u]];
                            if ("remove" === e && (delete this.l[i], (c = s.length), c--)) {
                                for (t = 0; t < c; t++) a[s[t]].remove(i);
                                return a[s[c]].remove(i, n);
                            }
                            if (l) {
                                for (r = 0; r < l.length; r++) {
                                    var d = l[r],
                                        f = t;
                                    for (c = d.split(":"), u = 0; u < c.length; u++) f = f[c[u]];
                                    f = "@" + f;
                                }
                                r = (r = this.G[d])[f] || (r[f] = []);
                            }
                            for (var h = 0, p = (c = this.a.field).length; h < p; h++) {
                                for (d = c[h], l = t, f = 0; f < d.length; f++) l = l[d[f]];
                                (d = a[s[h]]), (f = "add" === e ? d.add : d.update), h === p - 1 ? f.call(d, i, l, n) : f.call(d, i, l);
                            }
                            if (o) {
                                for (n = Object.keys(o), e = $(), a = 0; a < n.length; a++)
                                    if (o[(s = n[a])]) {
                                        s = s.split(":");
                                        var g = void 0,
                                            m = void 0;
                                        for (c = 0; c < s.length; c++) (g = (g || t)[(l = s[c])]), (m = (m || e)[l] = g);
                                    }
                                t = e;
                            }
                            r && (r[r.length] = t), (this.l[i] = t);
                        }
                        return this;
                    }),
                    (d.prototype.update = function (e, t, n) {
                        return this.a && M(e) ? this.A("update", e, t) : (this.c["@" + e] && P(t) && (this.remove(e), this.add(e, t, n, !0)), this);
                    }),
                    (d.prototype.remove = function (t, e, n) {
                        if (this.a && M(t)) return this.A("remove", t, e);
                        var i = "@" + t;
                        if (this.c[i]) {
                            if (this.g) return this.m[this.c[i]].postMessage({ remove: !0, id: t }), delete this.c[i], e && e(), this;
                            if (!n) {
                                if (this.async && "function" != typeof importScripts) {
                                    var o = this;
                                    return (
                                        (i = new Promise(function (e) {
                                            setTimeout(function () {
                                                o.remove(t, null, !0), (o = null), e();
                                            });
                                        })),
                                            e ? (i.then(e), this) : i
                                    );
                                }
                                if (e) return this.remove(t, null, !0), e(), this;
                            }
                            for (e = 0; e < this.b - (this.threshold || 0); e++) c(this.i[e], t);
                            this.depth && c(this.h, t), delete this.c[i], (this.B = !1);
                        }
                        return this;
                    }),
                    (d.prototype.search = function (n, i, e, t) {
                        if (M(i)) {
                            if (R(i)) for (var o = 0; o < i.length; o++) i[o].query = n;
                            else i.query = n;
                            (n = i), (i = 1e3);
                        } else i && H(i) ? ((e = i), (i = 1e3)) : i || 0 === i || (i = 1e3);
                        if (!this.g) {
                            var r = [],
                                a = n;
                            if (M(n) && !R(n)) {
                                e || ((e = n.callback) && (a.callback = null));
                                var s = n.sort,
                                    l = n.page;
                                (i = n.limit), (C = n.threshold);
                                var c = n.suggest;
                                n = n.query;
                            }
                            if (this.a) {
                                C = this.a.index;
                                var u,
                                    d,
                                    f = a.where,
                                    h = a.bool || "or",
                                    p = a.field,
                                    g = h;
                                if (p) R(p) || (p = [p]);
                                else if (R(a)) {
                                    var m = a;
                                    (p = []), (g = []);
                                    for (var v = 0; v < a.length; v++) (o = (t = a[v]).bool || h), (p[v] = t.field), "not" === (g[v] = o) ? (u = !0) : "and" === o && (d = !0);
                                } else p = this.a.keys;
                                for (h = p.length, v = 0; v < h; v++) m && (a = m[v]), l && !P(a) && ((a.page = null), (a.limit = 0)), (r[v] = C[p[v]].search(a, 0));
                                if (e) return e(I.call(this, n, g, r, s, i, c, f, l, d, u));
                                if (this.async) {
                                    var y = this;
                                    return new Promise(function (t) {
                                        Promise.all(r).then(function (e) {
                                            t(I.call(y, n, g, e, s, i, c, f, l, d, u));
                                        });
                                    });
                                }
                                return I.call(this, n, g, r, s, i, c, f, l, d, u);
                            }
                            if (((C = C || this.threshold || 0), !t)) {
                                if (this.async && "function" != typeof importScripts) {
                                    var b = this;
                                    return (
                                        (C = new Promise(function (e) {
                                            setTimeout(function () {
                                                e(b.search(a, i, null, !0)), (b = null);
                                            });
                                        })),
                                            e ? (C.then(e), this) : C
                                    );
                                }
                                if (e) return e(this.search(a, i, null, !0)), this;
                            }
                            if (!n || !P(n)) return r;
                            if (((a = n), this.cache))
                                if (this.B) {
                                    if ((e = this.j.get(n))) return e;
                                } else this.j.clear(), (this.B = !0);
                            if (!(a = this.encode(a)).length) return r;
                            (e = H((e = this.f)) ? e(a) : a.split(this.split)), this.filter && (e = T(e, this.filter)), (m = e.length), (t = !0), (o = []);
                            var k = $(),
                                w = 0;
                            if ((1 < m && (this.depth && "strict" === this.f ? (h = !0) : e.sort(F)), !h || (v = this.h)))
                                for (var S = this.b; w < m; w++) {
                                    var E = e[w];
                                    if (E) {
                                        if (h) {
                                            if (!p)
                                                if (v[E]) k[(p = E)] = 1;
                                                else if (!c) return r;
                                            if (c && w === m - 1 && !o.length) (h = !1), (k[(E = p || E)] = 0);
                                            else if (!p) continue;
                                        }
                                        if (!k[E]) {
                                            var x = [],
                                                _ = !1,
                                                A = 0,
                                                L = h ? v[p] : this.i;
                                            if (L) for (var O = void 0, z = 0; z < S - C; z++) (O = L[z] && L[z][E]) && ((x[A++] = O), (_ = !0));
                                            if (_) (p = E), (o[o.length] = 1 < A ? x.concat.apply([], x) : x[0]);
                                            else if (!c) {
                                                t = !1;
                                                break;
                                            }
                                            k[E] = 1;
                                        }
                                    }
                                }
                            else t = !1;
                            return t && (r = N(o, i, l, c)), this.cache && this.j.set(n, r), r;
                        }
                        (this.F = e), (this.u = 0), (this.o = []);
                        for (var C = 0; C < this.g; C++) this.m[C].postMessage({ search: !0, limit: i, content: n });
                    }),
                    (d.prototype.find = function (e, t) {
                        return this.where(e, t, 1)[0] || null;
                    }),
                    (d.prototype.where = function (e, t, n, i) {
                        var o,
                            r,
                            a,
                            s = this.l,
                            l = [],
                            c = 0;
                        if (M(e)) {
                            n = n || t;
                            var u = Object.keys(e),
                                d = u.length;
                            if (((o = !1), 1 === d && "id" === u[0])) return [s[e.id]];
                            if ((r = this.I) && !i)
                                for (var f = 0; f < r.length; f++) {
                                    var h = r[f],
                                        p = e[h];
                                    if (!D(p)) {
                                        if (((a = this.G[h]["@" + p]), 0 == --d)) return a;
                                        u.splice(u.indexOf(h), 1), delete e[h];
                                        break;
                                    }
                                }
                            for (r = Array(d), f = 0; f < d; f++) r[f] = u[f].split(":");
                        } else {
                            if (H(e)) {
                                for (n = (t = i || Object.keys(s)).length, u = 0; u < n; u++) e((d = s[t[u]])) && (l[c++] = d);
                                return l;
                            }
                            if (D(t)) return [s[e]];
                            if ("id" === e) return [s[t]];
                            (u = [e]), (d = 1), (r = [e.split(":")]), (o = !0);
                        }
                        for (f = (i = a || i || Object.keys(s)).length, h = 0; h < f; h++) {
                            p = a ? i[h] : s[i[h]];
                            for (var g = !0, m = 0; m < d; m++) {
                                o || (t = e[u[m]]);
                                var v = r[m],
                                    y = v.length,
                                    b = p;
                                if (1 < y) for (var k = 0; k < y; k++) b = b[v[k]];
                                else b = b[v[0]];
                                if (b !== t) {
                                    g = !1;
                                    break;
                                }
                            }
                            if (g && ((l[c++] = p), n && c === n)) break;
                        }
                        return l;
                    }),
                    (d.prototype.info = function () {
                        if (!this.g)
                            return {
                                id: this.id,
                                items: this.length,
                                cache: !(!this.cache || !this.cache.s) && this.cache.s.length,
                                matcher: n.length + (this.v ? this.v.length : 0),
                                worker: this.g,
                                threshold: this.threshold,
                                depth: this.depth,
                                resolution: this.b,
                                contextual: this.depth && "strict" === this.f,
                            };
                        for (var e = 0; e < this.g; e++) this.m[e].postMessage({ info: !0, id: this.id });
                    }),
                    (d.prototype.clear = function () {
                        return this.destroy().init();
                    }),
                    (d.prototype.destroy = function () {
                        if ((this.cache && (this.j.clear(), (this.j = null)), (this.i = this.h = this.c = null), this.a)) {
                            for (var e = this.a.keys, t = 0; t < e.length; t++) this.a.index[e[t]].destroy();
                            this.a = this.l = null;
                        }
                        return this;
                    }),
                    (d.prototype.export = function (e) {
                        var t = !e || D(e.serialize) || e.serialize;
                        if (this.a) {
                            var n = !e || D(e.doc) || e.doc,
                                i = !e || D(e.index) || e.index;
                            e = [];
                            var o = 0;
                            if (i)
                                for (i = this.a.keys; o < i.length; o++) {
                                    var r = this.a.index[i[o]];
                                    e[o] = [r.i, r.h, Object.keys(r.c)];
                                }
                            n && (e[o] = this.l);
                        } else e = [this.i, this.h, Object.keys(this.c)];
                        return t && (e = JSON.stringify(e)), e;
                    }),
                    (d.prototype.import = function (e, t) {
                        (t && !D(t.serialize) && !t.serialize) || (e = JSON.parse(e));
                        var n = $();
                        if (this.a) {
                            var i = !t || D(t.doc) || t.doc,
                                o = 0;
                            if (!t || D(t.index) || t.index) {
                                for (var r = (t = this.a.keys).length, a = e[0][2]; o < a.length; o++) n[a[o]] = 1;
                                for (o = 0; o < r; o++) {
                                    a = this.a.index[t[o]];
                                    var s = e[o];
                                    s && ((a.i = s[0]), (a.h = s[1]), (a.c = n));
                                }
                            }
                            i && (this.l = M(i) ? i : e[o]);
                        } else {
                            for (i = e[2], o = 0; o < i.length; o++) n[i[o]] = 1;
                            (this.i = e[0]), (this.h = e[1]), (this.c = n);
                        }
                    });
                var x,
                    e,
                    t,
                    _,
                    A,
                    L,
                    O,
                    z,
                    C,
                    B,
                    q,
                    G,
                    U,
                    W,
                    X,
                    Y,
                    Z,
                    K,
                    J,
                    V,
                    Q =
                        ((e = h("\\s+")),
                            (t = h("[^a-z0-9 ]")),
                            (_ = [h("[-/]"), " ", t, "", e, " "]),
                            function (e) {
                                return s(o(e.toLowerCase(), _));
                            }),
                    ee = {
                        icase: function (e) {
                            return e.toLowerCase();
                        },
                        simple:
                            ((Z = h("\\s+")),
                                (K = h("[^a-z0-9 ]")),
                                (J = h("[-/]")),
                                (V = [h("[àáâãäå]"), "a", h("[èéêë]"), "e", h("[ìíîï]"), "i", h("[òóôõöő]"), "o", h("[ùúûüű]"), "u", h("[ýŷÿ]"), "y", h("ñ"), "n", h("[çc]"), "k", h("ß"), "s", h(" & "), " and ", J, " ", K, "", Z, " "]),
                                function (e) {
                                    return " " === (e = o(e.toLowerCase(), V)) ? "" : e;
                                }),
                        advanced:
                            ((A = h("ae")),
                                (L = h("ai")),
                                (O = h("ay")),
                                (z = h("ey")),
                                (C = h("oe")),
                                (B = h("ue")),
                                (q = h("ie")),
                                (G = h("sz")),
                                (U = h("zs")),
                                (W = h("ck")),
                                (X = h("cc")),
                                (Y = [A, "a", L, "ei", O, "ei", z, "ei", C, "o", B, "u", q, "i", G, "s", U, "s", h("sh"), "s", W, "k", X, "k", h("th"), "t", h("dt"), "t", h("ph"), "f", h("pf"), "f", h("ou"), "o", h("uo"), "u"]),
                                function (e, t) {
                                    return e && (2 < (e = this.simple(e)).length && (e = o(e, Y)), t || (1 < e.length && (e = s(e)))), e;
                                }),
                        extra:
                            ((x = [h("p"), "b", h("z"), "s", h("[cgq]"), "k", h("n"), "m", h("d"), "t", h("[vw]"), "f", h("[aeiouy]"), ""]),
                                function (e) {
                                    if (!e) return e;
                                    if (1 < (e = this.advanced(e, !0)).length) {
                                        e = e.split(" ");
                                        for (var t = 0; t < e.length; t++) {
                                            var n = e[t];
                                            1 < n.length && (e[t] = n[0] + o(n.substring(1), x));
                                        }
                                        e = s((e = e.join(" ")));
                                    }
                                    return e;
                                }),
                        balance: Q,
                    },
                    te =
                        ((ne.prototype.clear = function () {
                            (this.cache = $()), (this.count = $()), (this.index = $()), (this.s = []);
                        }),
                            (ne.prototype.set = function (e, t) {
                                if (this.H && D(this.cache[e])) {
                                    var n = this.s.length;
                                    if (n === this.H) {
                                        n--;
                                        var i = this.s[n];
                                        delete this.cache[i], delete this.count[i], delete this.index[i];
                                    }
                                    (this.index[e] = n), (this.s[n] = e), (this.count[e] = -1), (this.cache[e] = t), this.get(e);
                                } else this.cache[e] = t;
                            }),
                            (ne.prototype.get = function (e) {
                                var t = this.cache[e];
                                if (this.H && t) {
                                    var n = ++this.count[e],
                                        i = this.index,
                                        o = i[e];
                                    if (0 < o) {
                                        for (var r = this.s, a = o; this.count[r[--o]] <= n && -1 !== o; );
                                        if (++o !== a) {
                                            for (n = a; o < n; n--) (a = r[n - 1]), (i[(r[n] = a)] = n);
                                            i[(r[o] = e)] = o;
                                        }
                                    }
                                }
                                return t;
                            }),
                            ne);
                function ne(e) {
                    this.clear(), (this.H = !0 !== e && e);
                }
                return d;
            })(
                ((r = {}),
                    (a = "undefined" != typeof Blob && "undefined" != typeof URL && URL.createObjectURL),
                    function (e, t, n, i, o) {
                        return (n = a ? URL.createObjectURL(new Blob(["(" + n.toString() + ")()"], { type: "text/javascript" })) : e + ".min.js"), r[(e += "-" + t)] || (r[e] = []), (r[e][o] = new Worker(n)), (r[e][o].onmessage = i), r[e][o];
                    })
            )),
            (l = (s = this).define) && l.amd
                ? l([], function () {
                    return o;
                })
                : (l = s.modules)
                ? (l[i.toLowerCase()] = o)
                : "object" === ie(t)
                    ? (e.exports = o)
                    : (s[i] = o);
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "default", function () {
                return d;
            });
        var i = n(0),
            a = n.n(i);
        function s(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            (o = !0), (r = e);
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return n;
                    }
                })(e, t) ||
                (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                    }
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        var l,
            c,
            u,
            d =
                ((l = f),
                    (c = [
                        {
                            key: "initConfig",
                            value: function (e) {
                                for (var n = this, t = 0, i = Object.entries(e); t < i.length; t++) {
                                    var o = s(i[t], 2),
                                        r = o[0],
                                        a = o[1];
                                    this.config[r] = a;
                                }
                                (this.config.searchOptions.limit = this.config.limit),
                                    (this.originalPostsFields = this.config.postsFields),
                                this.config.postsFields.includes("updated_at") || this.config.postsFields.push("updated_at"),
                                this.config.inputId &&
                                0 < this.config.inputId.length &&
                                ((this.searchBarEls = []),
                                    this.config.inputId.forEach(function (e) {
                                        var t = document.getElementById(e);
                                        t ? (n.searchBarEls.push(t), n.addSearchListeners(t)) : n.error("Enable to find the input element #".concat(e, ", please check your configuration"));
                                    })),
                                this.config.outputId &&
                                0 < this.config.outputId.length &&
                                ((this.searchResultEls = []),
                                    this.config.outputId.forEach(function (e) {
                                        var t = document.getElementById(e);
                                        t ? n.searchResultEls.push(t) : n.error("Enable to find the output element #".concat(e, ", please check your configuration"));
                                    })),
                                    (this.index = this.getNewSearchIndex());
                            },
                        },
                        {
                            // key: "addSearchListeners",
                            // value: function (t) {
                            //     var n = this,
                            //         e = t.closest("form");
                            //     switch (
                            //         (e &&
                            //         e.addEventListener("submit", function (e) {
                            //             e.preventDefault();
                            //         }),
                            //             this.config.searchOn)
                            //         ) {
                            //         case "keyup":
                            //             t.addEventListener("keyup", function () {
                            //                 var e = t.value.toLowerCase();
                            //                 n.search(e);
                            //             });
                            //             break;
                            //         case "submit":
                            //             e.addEventListener("submit", function () {
                            //                 var e = t.value.toLowerCase();
                            //                 n.search(e);
                            //             });
                            //             break;
                            //         case !1:
                            //         case "none":
                            //             break;
                            //         default:
                            //             this.error('Unknown "searchOn" option: \''.concat(this.config.searchOn, "'"));
                            //     }
                            // },
                        },
                        {
                            // key: "triggerDataLoad",
                            // value: function () {
                            //     var t = this;
                            //     switch (this.config.loadOn) {
                            //         case "focus":
                            //             this.searchBarEls.forEach(function (e) {
                            //                 e.addEventListener("focus", function () {
                            //                     t.loadData();
                            //                 });
                            //             });
                            //             break;
                            //         case "page":
                            //             window.addEventListener("load", function () {
                            //                 t.loadData();
                            //             });
                            //             break;
                            //         case !1:
                            //         case "none":
                            //             break;
                            //         default:
                            //             this.error('Unknown "loadOn" option: \''.concat(this.config.loadOn, "'"));
                            //     }
                            // },
                        },
                        {
                            key: "loadData",
                            value: function () {
                                if (!this.dataLoaded) {
                                    if (!this.storage) return this.log("No local storage available, switch to degraded mode"), void this.fetch();
                                    var e = this.storage.getItem("SearchinGhost_index");
                                    e
                                        ? (this.log("Found an index stored locally, loads it"), this.config.onIndexBuildStart(), this.index.import(e), (this.dataLoaded = !0), this.config.onIndexBuildEnd(this.index), this.validateCache())
                                        : (this.log("No already stored index found"), this.fetch());
                                }
                            },
                        },
                        {
                            key: "validateCache",
                            value: function () {
                                var i = this,
                                    e = this.storage.getItem("SearchinGhost_lastCacheUpdateTimestamp");
                                if (!e) return this.log("No cache update timestamp found, purge the cache"), void this.fetch();
                                e = new Date(e);
                                var t = Math.round((new Date() - e) / 1e3);
                                if (t < this.config.cacheMaxAge) this.log("Skip cache refreshing, updated less than ".concat(this.config.cacheMaxAge, "s ago (").concat(t, "s)"));
                                else {
                                    var n = this.buildUrl({ limit: 1, fields: ["updated_at"], order: "updated_at DESC" });
                                    fetch(n)
                                        .then(function (e) {
                                            return e.json();
                                        })
                                        .then(function (e) {
                                            var t = e.posts,
                                                n = i.storage.getItem("SearchinGhost_updatedat");
                                            t[0].updated_at !== n
                                                ? (i.log("Local cache outdated, purge it"), i.fetch())
                                                : (i.log("Local cached data up to date"), i.storage.setItem("SearchinGhost_lastCacheUpdateTimestamp", new Date().toISOString()));
                                        })
                                        .catch(function (e) {
                                            console.error("Unable to fetch the latest post information to check cache state", e);
                                        });
                                }
                            },
                        },
                        {
                            key: "fetch",
                            value:
                                ((u = function () {
                                    var i = this;
                                    this.log("Fetching data from Ghost API"), this.config.onFetchStart();
                                    var e = { limit: "all", fields: this.config.postsFields, order: "updated_at DESC" };
                                    0 < this.config.postsExtraFields.length && (e.include = this.config.postsExtraFields), 0 < this.config.postsFormats.length && (e.formats = this.config.postsFormats);
                                    var t = this.buildUrl(e);
                                    fetch(t)
                                        .then(function (e) {
                                            return e.json();
                                        })
                                        .then(function (e) {
                                            var t = e.posts;
                                            i.config.onFetchEnd(t), i.config.onIndexBuildStart();
                                            var n = t[0].updated_at;
                                            (i.index = i.getNewSearchIndex()),
                                                t.forEach(function (e) {
                                                    var t = i.format(e);
                                                    t && i.index.add(t);
                                                }),
                                                (i.dataLoaded = !0),
                                                i.config.onIndexBuildEnd(i.index),
                                            i.storage &&
                                            (i.storage.setItem("SearchinGhost_index", i.index.export()),
                                                i.storage.setItem("SearchinGhost_updatedat", n),
                                                i.storage.setItem("SearchinGhost_lastCacheUpdateTimestamp", new Date().toISOString())),
                                                i.log("Search index build complete");
                                        })
                                        .catch(function (e) {
                                            i.error("Unable to fetch Ghost data.\n", e);
                                        });
                                }),
                                    (h.toString = function () {
                                        return u.toString();
                                    }),
                                    h),
                        },
                        {
                            key: "format",
                            value: function (e) {
                                return (
                                    (e.id = this.postsCount++),
                                        (e.published_at = this.prettyDate(e.published_at)),
                                    this.originalPostsFields.includes("updated_at") || delete e.updated_at,
                                    e.custom_excerpt && ((e.excerpt = e.custom_excerpt), delete e.custom_excerpt),
                                        this.config.customProcessing(e)
                                );
                            },
                        },
                        {
                            key: "search",
                            value: function (e) {
                                this.loadData(), this.config.onSearchStart();
                                var t = this.index.search(e, this.config.searchOptions);
                                return this.searchResultEls && 0 < this.searchResultEls.length && this.display(t), this.config.onSearchEnd(t), t;
                            },
                        },
                        {
                            key: "display",
                            value: function (e) {
                                var t = this;
                                this.searchResultEls.forEach(function (e) {
                                    e.innerHTML = "";
                                }),
                                    e.length < 1
                                        ? this.insertTemplate(this.config.emptyTemplate())
                                        : e.forEach(function (e) {
                                            t.insertTemplate(t.config.template(e));
                                        });
                            },
                        },
                        {
                            key: "insertTemplate",
                            value: function (n) {
                                var i = this;
                                n &&
                                this.searchResultEls.forEach(function (e) {
                                    if (i.config.outputChildsType) {
                                        var t = document.createElement(i.config.outputChildsType);
                                        t.classList.add("".concat(e.id, "-item")), (t.innerHTML = n), e.appendChild(t);
                                    } else e.insertAdjacentHTML("beforeend", n);
                                });
                            },
                        },
                        {
                            key: "getNewSearchIndex",
                            value: function () {
                                for (
                                    var e = { doc: { id: "id", field: this.config.indexedFields }, encode: "simple", tokenize: "forward", threshold: 0, resolution: 4, depth: 0 }, t = 0, n = Object.entries(this.config.indexOptions);
                                    t < n.length;
                                    t++
                                ) {
                                    var i = s(n[t], 2),
                                        o = i[0],
                                        r = i[1];
                                    e[o] = r;
                                }
                                return new a.a(e);
                            },
                        },
                        {
                            key: "buildUrl",
                            value: function (e) {
                                for (var t = "".concat(this.config.url, "/ghost/api/").concat(this.config.version, "/content/posts/?key=").concat(this.config.key), n = 0, i = Object.entries(e); n < i.length; n++) {
                                    var o = s(i[n], 2),
                                        r = o[0],
                                        a = o[1];
                                    t += "&".concat(r, "=").concat(a);
                                }
                                return encodeURI(t);
                            },
                        },
                        {
                            key: "prettyDate",
                            value: function (e) {
                                return new Date(e).toLocaleDateString(this.config.date.locale, this.config.date.options);
                            },
                        },
                        {
                            key: "getLocalStorageOption",
                            value: function () {
                                try {
                                    return window.localStorage.setItem("storage-availability-test", ""), window.localStorage.removeItem("storage-availability-test"), window.localStorage;
                                } catch (e) {
                                    return;
                                }
                            },
                        },
                        {
                            key: "log",
                            value: function (e, t) {
                                this.config.debug && (t ? console.log(e, t) : console.log(e));
                            },
                        },
                        {
                            key: "error",
                            value: function (e, t) {},
                        },
                    ]),
                    r(l.prototype, c),
                    f);
        function f(e) {
            !(function (e) {
                if (!(e instanceof f)) throw new TypeError("Cannot call a class as a function");
            })(this),
                (this.config = {
                    url: window.location.origin,
                    key: "",
                    version: "v3",
                    loadOn: "focus",
                    searchOn: "keyup",
                    limit: 10,
                    inputId: ["search-bar"],
                    outputId: ["search-results"],
                    outputChildsType: "li",
                    postsFields: ["title", "url", "excerpt", "custom_excerpt", "published_at", "feature_image"],
                    postsExtraFields: ["tags"],
                    postsFormats: ["plaintext"],
                    indexedFields: ["title", "string_tags", "excerpt", "plaintext"],
                    template: function (e) {
                        var t = '<a href="'.concat(e.url, '">');
                        return (
                            e.feature_image && (t += '<img src="'.concat(e.feature_image, '">')),
                                (t += "<section>"),
                                0 < e.tags.length
                                    ? (t += '<header>\n                            <span class="head-tags">'
                                        .concat(e.tags[0].name, '</span>\n                            <span class="head-date">')
                                        .concat(e.published_at, "</span>\n                          </header>"))
                                    : (t += '<header>\n                            <span class="head-tags">UNKNOWN</span>\n                            <span class="head-date">'.concat(
                                    e.published_at,
                                    "</span>\n                          </header>"
                                    )),
                            (t += "<h2>".concat(e.title, "</h2>")) + "</section></a>"
                        );
                    },
                    emptyTemplate: function () {},
                    customProcessing: function (e) {
                        return (
                            e.tags &&
                            (e.string_tags = e.tags
                                .map(function (e) {
                                    return e.name;
                                })
                                .join(" ")
                                .toLowerCase()),
                                e
                        );
                    },
                    date: { locale: document.documentElement.lang || "en-US", options: { year: "numeric", month: "short", day: "numeric" } },
                    cacheMaxAge: 1800,
                    onFetchStart: function () {},
                    onFetchEnd: function (e) {},
                    onIndexBuildStart: function () {},
                    onIndexBuildEnd: function (e) {},
                    onSearchStart: function () {},
                    onSearchEnd: function (e) {},
                    indexOptions: {},
                    searchOptions: {},
                    debug: !1,
                }),
            Array.isArray(this.config.inputId) || (this.config.inputId = [this.config.inputId]),
            Array.isArray(this.config.outputId) || (this.config.outputId = [this.config.outputId]),
                (this.dataLoaded = !1),
                (this.postsCount = 0),
                (this.storage = this.getLocalStorageOption()),
                this.initConfig(e);
        }
        function h() {
            return u.apply(this, arguments);
        }
    },
]).default;
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).LazyLoad = t());
})(this, function () {
    "use strict";
    function t() {
        return (t =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }).apply(this, arguments);
    }
    function i(e) {
        return t({}, D, e);
    }
    function o(e, t) {
        var n,
            i = new e(t);
        try {
            n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: i } });
        } catch (e) {
            (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: i });
        }
        window.dispatchEvent(n);
    }
    function S(e, t) {
        return e.getAttribute("data-" + t);
    }
    function r(e, t, n) {
        var i = "data-" + t;
        null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
    }
    function E(e, t) {
        return r(e, "ll-status", t);
    }
    function p(e, t) {
        return r(e, "ll-timeout", t);
    }
    function g(e) {
        return S(e, "ll-timeout");
    }
    function x(e, t, n, i) {
        e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
    }
    function _(e, t) {
        H ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
    }
    function a(e, t) {
        H
            ? e.classList.remove(t)
            : (e.className = e.className
                .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                .replace(/^\s+/, "")
                .replace(/\s+$/, ""));
    }
    function A(e) {
        return e.llTempImage;
    }
    function L(e) {
        e && (e.loadingCount += 1);
    }
    function s(e) {
        for (var t, n = [], i = 0; (t = e.children[i]); i += 1) "SOURCE" === t.tagName && n.push(t);
        return n;
    }
    function n(e, t, n) {
        n && e.setAttribute(t, n);
    }
    function l(e, t) {
        n(e, "sizes", S(e, t.data_sizes)), n(e, "srcset", S(e, t.data_srcset)), n(e, "src", S(e, t.data_src));
    }
    function O(e, t, n) {
        var i = $[e.tagName];
        i && (i(e, t), L(n), _(e, t.class_loading), E(e, "loading"), x(t.callback_loading, e, n), x(t.callback_reveal, e, n));
    }
    function z(e, t) {
        !t || t.toLoadCount || t.loadingCount || x(e.callback_finish, t);
    }
    function u(e, t, n) {
        e.addEventListener(t, n);
    }
    function c(e, t, n) {
        e.removeEventListener(t, n);
    }
    function d(e, t, n) {
        c(e, "load", t), c(e, "loadeddata", t), c(e, "error", n);
    }
    function f(e, t, n) {
        delete e.llTempImage, n && --n.loadingCount, a(e, t.class_loading);
    }
    function C(r, a, s) {
        function l(e) {
            var t, n, i;
            f((t = r), (n = a), (i = s)), _(t, n.class_loaded), E(t, "loaded"), x(n.callback_loaded, t, i), z(n, i), d(c, l, o);
        }
        var e,
            t,
            n,
            c = A(r) || r,
            o = function e(t) {
                var n, i, o;
                f((n = r), (i = a), (o = s)), _(n, i.class_error), E(n, "error"), x(i.callback_error, n, o), z(i, o), d(c, l, e);
            };
        (n = o), u((e = c), "load", (t = l)), u(e, "loadeddata", t), u(e, "error", n);
    }
    function T(e, t) {
        t && --t.toLoadCount;
    }
    function m(e, t, n) {
        var i, o, r, a, s, l, c, u, d, f, h, p, g, m, v, y, b, k, w;
        (w = e),
            -1 < B.indexOf(w.tagName)
                ? (C((i = e), (o = t), (r = n)), O(i, o, r))
                : ((s = t),
                    (l = n),
                    ((a = e).llTempImage = document.createElement("img")),
                    C(a, s, l),
                    (v = l),
                    (y = S((g = a), (m = s).data_bg)),
                    (b = S(g, m.data_bg_hidpi)),
                (k = M && b ? b : y) && ((g.style.backgroundImage = 'url("'.concat(k, '")')), A(g).setAttribute("src", k), L(v), _(g, m.class_loading), E(g, "loading"), x(m.callback_loading, g, v), x(m.callback_reveal, g, v)),
                    (d = l),
                    (f = S((c = a), (u = s).data_bg_multi)),
                    (h = S(c, u.data_bg_multi_hidpi)),
                (p = M && h ? h : f) && ((c.style.backgroundImage = p), _(c, u.class_applied), E(c, "applied"), x(u.callback_applied, c, d))),
            T(0, n),
            (function (e) {
                if (n) {
                    var t = n._observer;
                    t && n._settings.auto_unobserve && t.unobserve(e);
                }
            })(e),
            z(t, n);
    }
    function v(e) {
        var t = g(e);
        t && (clearTimeout(t), p(e, null));
    }
    function y(e) {
        return e.use_native && "loading" in HTMLImageElement.prototype;
    }
    function h(e, o, r) {
        e.forEach(function (e) {
            var t, n, i;
            -1 !== q.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), C((t = e), (n = o), (i = r)), O(t, n, i), T(0, i), E(t, "native"), z(n, i));
        }),
            (r.toLoadCount = 0);
    }
    function b(h) {
        var e;
        R &&
        !y(h._settings) &&
        (h._observer = new IntersectionObserver(
            function (e) {
                e.forEach(function (e) {
                    return e.isIntersecting || 0 < e.intersectionRatio
                        ? ((o = e.target),
                            (r = e),
                            (f = (a = h)._settings),
                            x(f.callback_enter, o, r, a),
                            void (f.load_delay
                                ? ((s = o),
                                    (c = a),
                                    (u = (l = f).load_delay),
                                (d = g(s)) ||
                                ((d = setTimeout(function () {
                                    m(s, l, c), v(s);
                                }, u)),
                                    p(s, d)))
                                : m(o, f, a)))
                        : ((t = e.target), (n = e), (i = h._settings), x(i.callback_exit, t, n, h), void (i.load_delay && v(t)));
                    var t, n, i, o, r, a, s, l, c, u, d, f;
                });
            },
            { root: (e = h._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }
        ));
    }
    function k(e) {
        return Array.prototype.slice.call(e);
    }
    function w(e) {
        return e.container.querySelectorAll(e.elements_selector);
    }
    function I(e) {
        return !(null !== S(e, "ll-status")) || "observed" === S(e, "ll-status");
    }
    function F(e) {
        return "error" === S(e, "ll-status");
    }
    function j(e, t) {
        return (n = e || w(t)), k(n).filter(I);
        var n;
    }
    function e(e, t) {
        var o;
        (this._settings = i(e)),
            (this.loadingCount = 0),
            b(this),
            (o = this),
        N &&
        window.addEventListener("online", function (e) {
            var t, n, i;
            (i = (t = o)._settings),
                (n = w(i)),
                k(n)
                    .filter(F)
                    .forEach(function (e) {
                        a(e, i.class_error), r(e, "ll-status", null);
                    }),
                t.update();
        }),
            this.update(t);
    }
    var N = "undefined" != typeof window,
        P = (N && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
        R = N && "IntersectionObserver" in window,
        H = N && "classList" in document.createElement("p"),
        M = N && 1 < window.devicePixelRatio,
        D = {
            elements_selector: "img",
            container: P || N ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1,
        },
        $ = {
            IMG: function (e, t) {
                var n = e.parentNode;
                n &&
                "PICTURE" === n.tagName &&
                s(n).forEach(function (e) {
                    l(e, t);
                }),
                    l(e, t);
            },
            IFRAME: function (e, t) {
                n(e, "src", S(e, t.data_src));
            },
            VIDEO: function (e, t) {
                s(e).forEach(function (e) {
                    n(e, "src", S(e, t.data_src));
                }),
                    n(e, "poster", S(e, t.data_poster)),
                    n(e, "src", S(e, t.data_src)),
                    e.load();
            },
        },
        B = ["IMG", "IFRAME", "VIDEO"],
        q = ["IMG", "IFRAME"];
    return (
        (e.prototype = {
            update: function (e) {
                var t,
                    n,
                    i,
                    o = this._settings,
                    r = j(e, o);
                (this.toLoadCount = r.length),
                    !P && R
                        ? y(o)
                        ? h(r, o, this)
                        : ((t = this._observer),
                            (n = r),
                            t.disconnect(),
                            (i = t),
                            n.forEach(function (e) {
                                i.observe(e), E(e, "observed");
                            }))
                        : this.loadAll(r);
            },
            destroy: function () {
                this._observer && this._observer.disconnect(), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
            },
            loadAll: function (e) {
                var t = this,
                    n = this._settings;
                j(e, n).forEach(function (e) {
                    m(e, n, t);
                });
            },
            load: function (e) {
                m(e, this._settings, this);
            },
        }),
            (e.load = function (e, t) {
                var n = i(t);
                m(e, n);
            }),
        N &&
        (function (e, t) {
            if (t)
                if (t.length) for (var n, i = 0; (n = t[i]); i += 1) o(e, n);
                else o(e, t);
        })(e, window.lazyLoadOptions),
            e
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.mediumZoom = t());
    })(this, function () {
        "use strict";
        function t(e) {
            return "IMG" === e.tagName;
        }
        function x(e) {
            return e && 1 === e.nodeType;
        }
        function _(e) {
            return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
        }
        function c(e) {
            try {
                return Array.isArray(e) ? e.filter(t) : NodeList.prototype.isPrototypeOf(e) ? [].slice.call(e).filter(t) : x(e) ? [e].filter(t) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(t) : [];
            } catch (e) {
                throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
            }
        }
        function A(e, t) {
            var n = L({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e, n);
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), i;
        }
        var L =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            },
            u =
                window.Promise ||
                function (e) {
                    function t() {}
                    e(t, t);
                };
        return (
            (function (e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if ("undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    (o.type = "text/css"), "top" === n && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o), o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
                }
            })(
                ".medium-zoom-overlay{bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{cursor:pointer;cursor:zoom-out;position:relative;will-change:transform}"
            ),
                function e(t, n) {
                    function i() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var o = t.reduce(function (e, t) {
                            return [].concat(e, c(t));
                        }, []);
                        return (
                            o
                                .filter(function (e) {
                                    return -1 === v.indexOf(e);
                                })
                                .forEach(function (e) {
                                    v.push(e), e.classList.add("medium-zoom-image");
                                }),
                                a.forEach(function (e) {
                                    var t = e.type,
                                        n = e.listener,
                                        i = e.options;
                                    o.forEach(function (e) {
                                        e.addEventListener(t, n, i);
                                    });
                                }),
                                E
                        );
                    }
                    function o() {
                        function p() {
                            var e = { width: window.innerWidth, height: window.innerHeight, left: 0, top: 0, right: 0, bottom: 0 },
                                t = void 0,
                                n = void 0;
                            if (k.container)
                                if (k.container instanceof Object) (t = (e = L({}, e, k.container)).width - e.left - e.right - 2 * k.margin), (n = e.height - e.top - e.bottom - 2 * k.margin);
                                else {
                                    var i = (x(k.container) ? k.container : document.querySelector(k.container)).getBoundingClientRect(),
                                        o = i.width,
                                        r = i.height,
                                        a = i.left,
                                        s = i.top;
                                    e = L({}, e, { width: o, height: r, left: a, top: s });
                                }
                            (t = t || e.width - 2 * k.margin), (n = n || e.height - 2 * k.margin);
                            var l = w.zoomedHd || w.original,
                                c = (!_(l) && l.naturalWidth) || t,
                                u = (!_(l) && l.naturalHeight) || n,
                                d = l.getBoundingClientRect(),
                                f = d.top,
                                h = d.left,
                                p = d.width,
                                g = d.height,
                                m = Math.min(c, t) / p,
                                v = Math.min(u, n) / g,
                                y = Math.min(m, v),
                                b = "scale(" + y + ") translate3d(" + ((t - p) / 2 - h + k.margin + e.left) / y + "px, " + ((n - g) / 2 - f + k.margin + e.top) / y + "px, 0)";
                            (w.zoomed.style.transform = b), w.zoomedHd && (w.zoomedHd.style.transform = b);
                        }
                        var g = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
                        return new u(function (t) {
                            if (g && -1 === v.indexOf(g)) t(E);
                            else if (w.zoomed) t(E);
                            else {
                                if (g) w.original = g;
                                else {
                                    if (!(0 < v.length)) return void t(E);
                                    var e = v;
                                    w.original = e[0];
                                }
                                var n, i, o, r, a, s, l, c, u;
                                if (
                                    (w.original.dispatchEvent(A("medium-zoom:open", { detail: { zoom: E } })),
                                        (b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                        (y = !0),
                                        (w.zoomed =
                                            ((o = (i = (n = w.original).getBoundingClientRect()).top),
                                                (r = i.left),
                                                (a = i.width),
                                                (s = i.height),
                                                (l = n.cloneNode()),
                                                (c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                                (u = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
                                                l.removeAttribute("id"),
                                                (l.style.position = "absolute"),
                                                (l.style.top = o + c + "px"),
                                                (l.style.left = r + u + "px"),
                                                (l.style.width = a + "px"),
                                                (l.style.height = s + "px"),
                                                (l.style.transform = ""),
                                                l)),
                                        document.body.appendChild(S),
                                        k.template)
                                ) {
                                    var d = x(k.template) ? k.template : document.querySelector(k.template);
                                    (w.template = document.createElement("div")), w.template.appendChild(d.content.cloneNode(!0)), document.body.appendChild(w.template);
                                }
                                if (
                                    (document.body.appendChild(w.zoomed),
                                        window.requestAnimationFrame(function () {
                                            document.body.classList.add("medium-zoom--opened");
                                        }),
                                        w.original.classList.add("medium-zoom-image--hidden"),
                                        w.zoomed.classList.add("medium-zoom-image--opened"),
                                        w.zoomed.addEventListener("click", m),
                                        w.zoomed.addEventListener("transitionend", function e() {
                                            (y = !1), w.zoomed.removeEventListener("transitionend", e), w.original.dispatchEvent(A("medium-zoom:opened", { detail: { zoom: E } })), t(E);
                                        }),
                                        w.original.getAttribute("data-zoom-src"))
                                ) {
                                    (w.zoomedHd = w.zoomed.cloneNode()),
                                        w.zoomedHd.removeAttribute("srcset"),
                                        w.zoomedHd.removeAttribute("sizes"),
                                        (w.zoomedHd.src = w.zoomed.getAttribute("data-zoom-src")),
                                        (w.zoomedHd.onerror = function () {
                                            clearInterval(f), console.warn("Unable to reach the zoom image target " + w.zoomedHd.src), (w.zoomedHd = null), p();
                                        });
                                    var f = setInterval(function () {
                                        w.zoomedHd.complete && (clearInterval(f), w.zoomedHd.classList.add("medium-zoom-image--opened"), w.zoomedHd.addEventListener("click", m), document.body.appendChild(w.zoomedHd), p());
                                    }, 10);
                                } else if (w.original.hasAttribute("srcset")) {
                                    (w.zoomedHd = w.zoomed.cloneNode()), w.zoomedHd.removeAttribute("sizes");
                                    var h = w.zoomedHd.addEventListener("load", function () {
                                        w.zoomedHd.removeEventListener("load", h), w.zoomedHd.classList.add("medium-zoom-image--opened"), w.zoomedHd.addEventListener("click", m), document.body.appendChild(w.zoomedHd), p();
                                    });
                                } else p();
                            }
                        });
                    }
                    function r() {
                        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
                        return w.original ? m() : o({ target: e });
                    }
                    var m = function () {
                            return new u(function (t) {
                                !y && w.original
                                    ? ((y = !0),
                                        document.body.classList.remove("medium-zoom--opened"),
                                        (w.zoomed.style.transform = ""),
                                    w.zoomedHd && (w.zoomedHd.style.transform = ""),
                                    w.template && ((w.template.style.transition = "opacity 150ms"), (w.template.style.opacity = 0)),
                                        w.original.dispatchEvent(A("medium-zoom:close", { detail: { zoom: E } })),
                                        w.zoomed.addEventListener("transitionend", function e() {
                                            w.original.classList.remove("medium-zoom-image--hidden"),
                                                document.body.removeChild(w.zoomed),
                                            w.zoomedHd && document.body.removeChild(w.zoomedHd),
                                                document.body.removeChild(S),
                                                w.zoomed.classList.remove("medium-zoom-image--opened"),
                                            w.template && document.body.removeChild(w.template),
                                                (y = !1),
                                                w.zoomed.removeEventListener("transitionend", e),
                                                w.original.dispatchEvent(A("medium-zoom:closed", { detail: { zoom: E } })),
                                                (w.original = null),
                                                (w.zoomed = null),
                                                (w.zoomedHd = null),
                                                (w.template = null),
                                                t(E);
                                        }))
                                    : t(E);
                            });
                        },
                        v = [],
                        a = [],
                        y = !1,
                        b = 0,
                        k = 1 < arguments.length && void 0 !== n ? n : {},
                        w = { original: null, zoomed: null, zoomedHd: null, template: null };
                    "[object Object]" === Object.prototype.toString.call(t) ? (k = t) : (!t && "string" != typeof t) || i(t);
                    var s,
                        l,
                        S =
                            ((s = (k = L({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, k)).background),
                                (l = document.createElement("div")).classList.add("medium-zoom-overlay"),
                                (l.style.background = s),
                                l);
                    document.addEventListener("click", function (e) {
                        var t = e.target;
                        t !== S ? -1 !== v.indexOf(t) && r({ target: t }) : m();
                    }),
                        document.addEventListener("keyup", function (e) {
                            27 === (e.keyCode || e.which) && m();
                        }),
                        document.addEventListener("scroll", function () {
                            if (!y && w.original) {
                                var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                                Math.abs(b - e) > k.scrollOffset && setTimeout(m, 150);
                            }
                        }),
                        window.addEventListener("resize", m);
                    var E = {
                        open: o,
                        close: m,
                        toggle: r,
                        update: function () {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e;
                            if ((e.background && (S.style.background = e.background), e.container && e.container instanceof Object && (t.container = L({}, k.container, e.container)), e.template)) {
                                var n = x(e.template) ? e.template : document.querySelector(e.template);
                                t.template = n;
                            }
                            return (
                                (k = L({}, k, t)),
                                    v.forEach(function (e) {
                                        e.dispatchEvent(A("medium-zoom:update", { detail: { zoom: E } }));
                                    }),
                                    E
                            );
                        },
                        clone: function () {
                            return e(L({}, k, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}));
                        },
                        attach: i,
                        detach: function () {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            w.zoomed && m();
                            var i =
                                0 < t.length
                                    ? t.reduce(function (e, t) {
                                        return [].concat(e, c(t));
                                    }, [])
                                    : v;
                            return (
                                i.forEach(function (e) {
                                    e.classList.remove("medium-zoom-image"), e.dispatchEvent(A("medium-zoom:detach", { detail: { zoom: E } }));
                                }),
                                    (v = v.filter(function (e) {
                                        return -1 === i.indexOf(e);
                                    })),
                                    E
                            );
                        },
                        on: function (t, n) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                            return (
                                v.forEach(function (e) {
                                    e.addEventListener("medium-zoom:" + t, n, i);
                                }),
                                    a.push({ type: "medium-zoom:" + t, listener: n, options: i }),
                                    E
                            );
                        },
                        off: function (t, n) {
                            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                            return (
                                v.forEach(function (e) {
                                    e.removeEventListener("medium-zoom:" + t, n, i);
                                }),
                                    (a = a.filter(function (e) {
                                        return !(e.type === "medium-zoom:" + t && e.listener.toString() === n.toString());
                                    })),
                                    E
                            );
                        },
                        getOptions: function () {
                            return k;
                        },
                        getImages: function () {
                            return v;
                        },
                        getZoomedImage: function () {
                            return w.original;
                        },
                    };
                    return E;
                }
        );
    });
var e = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    s = (function (c) {
        var u = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            T = {
                manual: c.Prism && c.Prism.manual,
                disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function (e) {
                        return e instanceof I
                            ? new I(e.type, T.util.encode(e.content), e.alias)
                            : Array.isArray(e)
                                ? e.map(T.util.encode)
                                : e
                                    .replace(/&/g, "&amp;")
                                    .replace(/</g, "&lt;")
                                    .replace(/\u00a0/g, " ");
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
                    },
                    clone: function n(e, i) {
                        var o,
                            t,
                            r = T.util.type(e);
                        switch (((i = i || {}), r)) {
                            case "Object":
                                if (((t = T.util.objId(e)), i[t])) return i[t];
                                for (var a in ((o = {}), (i[t] = o), e)) e.hasOwnProperty(a) && (o[a] = n(e[a], i));
                                return o;
                            case "Array":
                                return (
                                    (t = T.util.objId(e)),
                                        i[t]
                                            ? i[t]
                                            : ((o = []),
                                                (i[t] = o),
                                                e.forEach(function (e, t) {
                                                    o[t] = n(e, i);
                                                }),
                                                o)
                                );
                            default:
                                return e;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e && !u.test(e.className); ) e = e.parentElement;
                        return e ? (e.className.match(u) || [, "none"])[1].toLowerCase() : "none";
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error();
                        } catch (e) {
                            var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                            if (t) {
                                var n = document.getElementsByTagName("script");
                                for (var i in n) if (n[i].src == t) return n[i];
                            }
                            return null;
                        }
                    },
                },
                languages: {
                    extend: function (e, t) {
                        var n = T.util.clone(T.languages[e]);
                        for (var i in t) n[i] = t[i];
                        return n;
                    },
                    insertBefore: function (n, e, t, i) {
                        var o = (i = i || T.languages)[n],
                            r = {};
                        for (var a in o)
                            if (o.hasOwnProperty(a)) {
                                if (a == e) for (var s in t) t.hasOwnProperty(s) && (r[s] = t[s]);
                                t.hasOwnProperty(a) || (r[a] = o[a]);
                            }
                        var l = i[n];
                        return (
                            (i[n] = r),
                                T.languages.DFS(T.languages, function (e, t) {
                                    t === l && e != n && (this[e] = r);
                                }),
                                r
                        );
                    },
                    DFS: function e(t, n, i, o) {
                        o = o || {};
                        var r = T.util.objId;
                        for (var a in t)
                            if (t.hasOwnProperty(a)) {
                                n.call(t, a, t[a], i || a);
                                var s = t[a],
                                    l = T.util.type(s);
                                "Object" !== l || o[r(s)] ? "Array" !== l || o[r(s)] || ((o[r(s)] = !0), e(s, n, a, o)) : ((o[r(s)] = !0), e(s, n, null, o));
                            }
                    },
                },
                plugins: {},
                highlightAll: function (e, t) {
                    T.highlightAllUnder(document, e, t);
                },
                highlightAllUnder: function (e, t, n) {
                    var i = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                    T.hooks.run("before-highlightall", i), (i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector))), T.hooks.run("before-all-elements-highlight", i);
                    for (var o, r = 0; (o = i.elements[r++]); ) T.highlightElement(o, !0 === t, i.callback);
                },
                highlightElement: function (e, t, n) {
                    var i = T.util.getLanguage(e),
                        o = T.languages[i];
                    e.className = e.className.replace(u, "").replace(/\s+/g, " ") + " language-" + i;
                    var r = e.parentNode;
                    r && "pre" === r.nodeName.toLowerCase() && (r.className = r.className.replace(u, "").replace(/\s+/g, " ") + " language-" + i);
                    var a = { element: e, language: i, grammar: o, code: e.textContent };
                    function s(e) {
                        (a.highlightedCode = e), T.hooks.run("before-insert", a), (a.element.innerHTML = a.highlightedCode), T.hooks.run("after-highlight", a), T.hooks.run("complete", a), n && n.call(a.element);
                    }
                    if ((T.hooks.run("before-sanity-check", a), !a.code)) return T.hooks.run("complete", a), void (n && n.call(a.element));
                    if ((T.hooks.run("before-highlight", a), a.grammar))
                        if (t && c.Worker) {
                            var l = new Worker(T.filename);
                            (l.onmessage = function (e) {
                                s(e.data);
                            }),
                                l.postMessage(JSON.stringify({ language: a.language, code: a.code, immediateClose: !0 }));
                        } else s(T.highlight(a.code, a.grammar, a.language));
                    else s(T.util.encode(a.code));
                },
                highlight: function (e, t, n) {
                    var i = { code: e, grammar: t, language: n };
                    return T.hooks.run("before-tokenize", i), (i.tokens = T.tokenize(i.code, i.grammar)), T.hooks.run("after-tokenize", i), I.stringify(T.util.encode(i.tokens), i.language);
                },
                matchGrammar: function (e, t, n, i, o, r, a) {
                    for (var s in n)
                        if (n.hasOwnProperty(s) && n[s]) {
                            var l = n[s];
                            l = Array.isArray(l) ? l : [l];
                            for (var c = 0; c < l.length; ++c) {
                                if (a && a == s + "," + c) return;
                                var u = l[c],
                                    d = u.inside,
                                    f = !!u.lookbehind,
                                    h = !!u.greedy,
                                    p = 0,
                                    g = u.alias;
                                if (h && !u.pattern.global) {
                                    var m = u.pattern.toString().match(/[imsuy]*$/)[0];
                                    u.pattern = RegExp(u.pattern.source, m + "g");
                                }
                                u = u.pattern || u;
                                for (var v = i, y = o; v < t.length; y += t[v].length, ++v) {
                                    var b = t[v];
                                    if (t.length > e.length) return;
                                    if (!(b instanceof I)) {
                                        if (h && v != t.length - 1) {
                                            if (((u.lastIndex = y), !(_ = u.exec(e)))) break;
                                            for (var k = _.index + (f && _[1] ? _[1].length : 0), w = _.index + _[0].length, S = v, E = y, x = t.length; S < x && (E < w || (!t[S].type && !t[S - 1].greedy)); ++S)
                                                (E += t[S].length) <= k && (++v, (y = E));
                                            if (t[v] instanceof I) continue;
                                            (A = S - v), (b = e.slice(y, E)), (_.index -= y);
                                        } else {
                                            u.lastIndex = 0;
                                            var _ = u.exec(b),
                                                A = 1;
                                        }
                                        if (_) {
                                            f && (p = _[1] ? _[1].length : 0), (w = (k = _.index + p) + (_ = _[0].slice(p)).length);
                                            var L = b.slice(0, k),
                                                O = b.slice(w),
                                                z = [v, A];
                                            L && (++v, (y += L.length), z.push(L));
                                            var C = new I(s, d ? T.tokenize(_, d) : _, g, _, h);
                                            if ((z.push(C), O && z.push(O), Array.prototype.splice.apply(t, z), 1 != A && T.matchGrammar(e, t, n, v, y, !0, s + "," + c), r)) break;
                                        } else if (r) break;
                                    }
                                }
                            }
                        }
                },
                tokenize: function (e, t) {
                    var n = [e],
                        i = t.rest;
                    if (i) {
                        for (var o in i) t[o] = i[o];
                        delete t.rest;
                    }
                    return T.matchGrammar(e, n, t, 0, 0, !1), n;
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var n = T.hooks.all;
                        (n[e] = n[e] || []), n[e].push(t);
                    },
                    run: function (e, t) {
                        var n = T.hooks.all[e];
                        if (n && n.length) for (var i, o = 0; (i = n[o++]); ) i(t);
                    },
                },
                Token: I,
            };
        function I(e, t, n, i, o) {
            (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (i || "").length), (this.greedy = !!o);
        }
        if (
            ((c.Prism = T),
                (I.stringify = function (e, t) {
                    if ("string" == typeof e) return e;
                    if (Array.isArray(e))
                        return e
                            .map(function (e) {
                                return I.stringify(e, t);
                            })
                            .join("");
                    var n = { type: e.type, content: I.stringify(e.content, t), tag: "span", classes: ["token", e.type], attributes: {}, language: t };
                    if (e.alias) {
                        var i = Array.isArray(e.alias) ? e.alias : [e.alias];
                        Array.prototype.push.apply(n.classes, i);
                    }
                    T.hooks.run("wrap", n);
                    var o = Object.keys(n.attributes)
                        .map(function (e) {
                            return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"';
                        })
                        .join(" ");
                    return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + n.content + "</" + n.tag + ">";
                }),
                !c.document)
        )
            return (
                c.addEventListener &&
                (T.disableWorkerMessageHandler ||
                    c.addEventListener(
                        "message",
                        function (e) {
                            var t = JSON.parse(e.data),
                                n = t.language,
                                i = t.code,
                                o = t.immediateClose;
                            c.postMessage(T.highlight(i, T.languages[n], n)), o && c.close();
                        },
                        !1
                    )),
                    T
            );
        var e = T.util.currentScript();
        function n() {
            T.manual || T.highlightAll();
        }
        if ((e && ((T.filename = e.src), e.hasAttribute("data-manual") && (T.manual = !0)), !T.manual)) {
            var i = document.readyState;
            "loading" === i || ("interactive" === i && e && e.defer) ? document.addEventListener("DOMContentLoaded", n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16);
        }
        return T;
    })(e);
"undefined" != typeof module && module.exports && (module.exports = s),
"undefined" != typeof global && (global.Prism = s),
    (s.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i, greedy: !0 },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } },
                punctuation: /\/?>/,
                "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
        },
        entity: /&#?[\da-z]{1,8};/i,
    }),
    (s.languages.markup.tag.inside["attr-value"].inside.entity = s.languages.markup.entity),
    s.hooks.add("wrap", function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(s.languages.markup.tag, "addInlined", {
        value: function (e, t) {
            var n = {};
            (n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: s.languages[t] }), (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var i = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
            i["language-" + t] = { pattern: /[\s\S]+/, inside: s.languages[t] };
            var o = {};
            (o[e] = { pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, e), "i"), lookbehind: !0, greedy: !0, inside: i }), s.languages.insertBefore("markup", "cdata", o);
        },
    }),
    (s.languages.xml = s.languages.extend("markup", {})),
    (s.languages.html = s.languages.markup),
    (s.languages.mathml = s.languages.markup),
    (s.languages.svg = s.languages.markup),
    (function (e) {
        var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /@[\w-]+/ } },
            url: { pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"), inside: { function: /^url/i, punctuation: /^\(|\)$/ } },
            selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
        }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
        var n = e.languages.markup;
        n &&
        (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
                "inside",
                "attr-value",
                {
                    "style-attr": {
                        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                        inside: { "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: e.languages.css } },
                        alias: "language-css",
                    },
                },
                n.tag
            ));
    })(s),
    (s.languages.clike = {
        comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
        ],
        string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
        "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/,
    }),
    (s.languages.javascript = s.languages.extend("clike", {
        "class-name": [s.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }],
        keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
            },
        ],
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/,
    })),
    (s.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
    s.languages.insertBefore("javascript", "keyword", {
        regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 },
        "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" },
        parameter: [
            { pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: s.languages.javascript },
            { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: s.languages.javascript },
            { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: s.languages.javascript },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: s.languages.javascript,
            },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    s.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: s.languages.javascript } },
                string: /[\s\S]+/,
            },
        },
    }),
s.languages.markup && s.languages.markup.tag.addInlined("script", "javascript"),
    (s.languages.js = s.languages.javascript),
    (function (e) {
        var t =
                "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
                environment: { pattern: RegExp("\\$" + t), alias: "constant" },
                variable: [
                    {
                        pattern: /\$?\(\([\s\S]+?\)\)/,
                        greedy: !0,
                        inside: {
                            variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                            punctuation: /\(\(?|\)\)?|,|;/,
                        },
                    },
                    { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                    { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" } } },
                    /\$(?:\w+|[#?*!@$])/,
                ],
                entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
        e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
                { pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" },
                { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 },
            "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 },
            string: [
                { pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: n },
                { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0 },
                { pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/, greedy: !0, inside: n },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: n.variable,
            function: {
                pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                lookbehind: !0,
            },
            keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/, lookbehind: !0 },
            builtin: {
                pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                lookbehind: !0,
                alias: "class-name",
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: { pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
        };
        for (
            var i = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], o = n.variable[1].inside, r = 0;
            r < i.length;
            r++
        )
            o[i[r]] = e.languages.bash[i[r]];
        e.languages.shell = e.languages.bash;
    })(s),
    (function (v) {
        function y(e, t) {
            return "___" + e.toUpperCase() + t + "___";
        }
        Object.defineProperties((v.languages["markup-templating"] = {}), {
            buildPlaceholders: {
                value: function (i, o, e, r) {
                    if (i.language === o) {
                        var a = (i.tokenStack = []);
                        (i.code = i.code.replace(e, function (e) {
                            if ("function" == typeof r && !r(e)) return e;
                            for (var t, n = a.length; -1 !== i.code.indexOf((t = y(o, n))); ) ++n;
                            return (a[n] = e), t;
                        })),
                            (i.grammar = v.languages.markup);
                    }
                },
            },
            tokenizePlaceholders: {
                value: function (h, p) {
                    if (h.language === p && h.tokenStack) {
                        h.grammar = v.languages[p];
                        var g = 0,
                            m = Object.keys(h.tokenStack);
                        !(function e(t) {
                            for (var n = 0; n < t.length && !(g >= m.length); n++) {
                                var i = t[n];
                                if ("string" == typeof i || (i.content && "string" == typeof i.content)) {
                                    var o = m[g],
                                        r = h.tokenStack[o],
                                        a = "string" == typeof i ? i : i.content,
                                        s = y(p, o),
                                        l = a.indexOf(s);
                                    if (-1 < l) {
                                        ++g;
                                        var c = a.substring(0, l),
                                            u = new v.Token(p, v.tokenize(r, h.grammar), "language-" + p, r),
                                            d = a.substring(l + s.length),
                                            f = [];
                                        c && f.push.apply(f, e([c])), f.push(u), d && f.push.apply(f, e([d])), "string" == typeof i ? t.splice.apply(t, [n, 1].concat(f)) : (i.content = f);
                                    }
                                } else i.content && e(i.content);
                            }
                            return t;
                        })(h.tokens);
                    }
                },
            },
        });
    })(s),
    (function (t) {
        (t.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: { pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i, lookbehind: !0, alias: "keyword" },
            brackets: { pattern: /\[[^\]]+\]/, inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ } },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
        }),
            t.hooks.add("before-tokenize", function (e) {
                t.languages["markup-templating"].buildPlaceholders(e, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
            }),
            t.hooks.add("after-tokenize", function (e) {
                t.languages["markup-templating"].tokenizePlaceholders(e, "handlebars");
            });
    })(s),
    (s.languages.json = {
        property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
        string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:true|false)\b/,
        null: { pattern: /\bnull\b/, alias: "keyword" },
    }),
    (s.languages.less = s.languages.extend("css", {
        comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
        atrule: { pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/, inside: { punctuation: /[:()]/ } },
        selector: { pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/, inside: { variable: /@+[\w-]+/ } },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
        operator: /[+\-*\/]/,
    })),
    s.languages.insertBefore("less", "property", { variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/], "mixin-usage": { pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/, lookbehind: !0, alias: "function" } }),
    (function (t) {
        (t.languages.php = t.languages.extend("clike", {
            keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
        })),
            t.languages.insertBefore("php", "string", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }),
            t.languages.insertBefore("php", "comment", { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" } }),
            t.languages.insertBefore("php", "keyword", { variable: /\$+(?:\w+\b|(?={))/i, package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }),
            t.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } });
        var e = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/, lookbehind: !0, inside: t.languages.php };
        t.languages.insertBefore("php", "string", {
            "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } },
            },
            "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: e },
            },
            "single-quoted-string": { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string" },
            "double-quoted-string": { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: "string", inside: { interpolation: e } },
        }),
            delete t.languages.php.string,
            t.hooks.add("before-tokenize", function (e) {
                /<\?/.test(e.code) &&
                t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);
            }),
            t.hooks.add("after-tokenize", function (e) {
                t.languages["markup-templating"].tokenizePlaceholders(e, "php");
            });
    })(s),
    (function (e) {
        (e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } })),
            e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }),
            delete e.languages.sass.atrule;
        var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }];
        e.languages.insertBefore("sass", "property", {
            "variable-line": { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: n } },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: n, important: e.languages.sass.important },
            },
        }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } });
    })(s),
    (s.languages.scss = s.languages.extend("css", {
        comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
        atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } },
        url: /(?:[-a-z]+-)?url(?=\()/i,
        selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } },
        property: { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } },
    })),
    s.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }),
    s.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
    s.languages.insertBefore("scss", "function", {
        placeholder: { pattern: /%[-\w]+/, alias: "selector" },
        statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" },
        boolean: /\b(?:true|false)\b/,
        null: { pattern: /\bnull\b/, alias: "keyword" },
        operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 },
    }),
    (s.languages.scss.atrule.inside.rest = s.languages.scss),
    (function () {
        if ("undefined" != typeof self && self.Prism && self.document) {
            function n() {}
            var r = [],
                a = {};
            s.plugins.toolbar = {};
            var e = (s.plugins.toolbar.registerButton = function (e, n) {
                    var t;
                    (t =
                        "function" == typeof n
                            ? n
                            : function (e) {
                                var t;
                                return (
                                    "function" == typeof n.onClick
                                        ? (((t = document.createElement("button")).type = "button"),
                                            t.addEventListener("click", function () {
                                                n.onClick.call(this, e);
                                            }))
                                        : "string" == typeof n.url
                                        ? ((t = document.createElement("a")).href = n.url)
                                        : (t = document.createElement("span")),
                                    n.className && t.classList.add(n.className),
                                        (t.textContent = n.text),
                                        t
                                );
                            }),
                        e in a ? console.warn('There is a button with the key "' + e + '" registered already.') : r.push((a[e] = t));
                }),
                t = (s.plugins.toolbar.hook = function (i) {
                    var e = i.element.parentNode;
                    if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
                        var t = document.createElement("div");
                        t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
                        var o = document.createElement("div");
                        o.classList.add("toolbar"),
                        document.body.hasAttribute("data-toolbar-order") &&
                        (r = document.body
                            .getAttribute("data-toolbar-order")
                            .split(",")
                            .map(function (e) {
                                return a[e] || n;
                            })),
                            r.forEach(function (e) {
                                var t = e(i);
                                if (t) {
                                    var n = document.createElement("div");
                                    n.classList.add("toolbar-item"), n.appendChild(t), o.appendChild(n);
                                }
                            }),
                            t.appendChild(o);
                    }
                });
            e("label", function (e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                    var n,
                        i,
                        o = t.getAttribute("data-label");
                    try {
                        i = document.querySelector("template#" + o);
                    } catch (e) {}
                    return i ? (n = i.content) : (t.hasAttribute("data-url") ? ((n = document.createElement("a")).href = t.getAttribute("data-url")) : (n = document.createElement("span")), (n.textContent = o)), n;
                }
            }),
                s.hooks.add("complete", t);
        }
    })(),
"undefined" != typeof self &&
self.Prism &&
self.document &&
(s.plugins.toolbar
    ? s.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
        var t,
            n = document.createElement("button");
        return (
            (n.textContent = "Copy"),
                (t = new ClipboardJS(n, {
                    text: function () {
                        return e.code;
                    },
                })).on("success", function () {
                    (n.textContent = "Copied!"), i();
                }),
                t.on("error", function () {
                    (n.textContent = "Press Ctrl+C to copy"), i();
                }),
                n
        );
        function i() {
            setTimeout(function () {
                n.textContent = "Copy";
            }, 5e3);
        }
    })
    : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).reframe = t());
    })(this, function () {
        "use strict";
        return function (e, t) {
            var n = "string" == typeof e ? document.querySelectorAll(e) : e,
                i = t || "js-reframe";
            "length" in n || (n = [n]);
            for (var o = 0; o < n.length; o += 1) {
                var r = n[o];
                if (!(-1 !== r.className.split(" ").indexOf(i))) {
                    var a = r.getAttribute("height"),
                        s = r.getAttribute("width");
                    if (!((null !== s && -1 < s.indexOf("%")) || -1 < r.style.width.indexOf("%"))) {
                        var l = ((a || r.offsetHeight) / (s || r.offsetWidth)) * 100,
                            c = document.createElement("div");
                        c.className = i;
                        var u = c.style;
                        (u.position = "relative"), (u.width = "100%"), (u.paddingTop = l + "%");
                        var d = r.style;
                        (d.position = "absolute"), (d.width = "100%"), (d.height = "100%"), (d.left = "0"), (d.top = "0"), r.parentNode.insertBefore(c, r), r.parentNode.removeChild(r), c.appendChild(r);
                    }
                }
            }
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? (module.exports = t()) : (e.ResizeSensor = t());
    })("undefined" != typeof window ? window : this, function () {
        if ("undefined" == typeof window) return null;
        var t = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
            S =
                t.requestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                function (e) {
                    return t.setTimeout(e, 20);
                },
            o =
                t.cancelAnimationFrame ||
                t.mozCancelAnimationFrame ||
                t.webkitCancelAnimationFrame ||
                function (e) {
                    t.clearTimeout(e);
                };
        function r(e, t) {
            var n = Object.prototype.toString.call(e),
                i =
                    "[object Array]" === n ||
                    "[object NodeList]" === n ||
                    "[object HTMLCollection]" === n ||
                    "[object Object]" === n ||
                    ("undefined" != typeof jQuery && e instanceof jQuery) ||
                    ("undefined" != typeof Elements && e instanceof Elements),
                o = 0,
                r = e.length;
            if (i) for (; o < r; o++) t(e[o]);
            else t(e);
        }
        function E(e) {
            if (!e.getBoundingClientRect) return { width: e.offsetWidth, height: e.offsetHeight };
            var t = e.getBoundingClientRect();
            return { width: Math.round(t.width), height: Math.round(t.height) };
        }
        function x(t, n) {
            Object.keys(n).forEach(function (e) {
                t.style[e] = n[e];
            });
        }
        var a = function (t, n) {
            var k = 0;
            function w() {
                var n,
                    i,
                    o = [];
                (this.add = function (e) {
                    o.push(e);
                }),
                    (this.call = function (e) {
                        for (n = 0, i = o.length; n < i; n++) o[n].call(this, e);
                    }),
                    (this.remove = function (e) {
                        var t = [];
                        for (n = 0, i = o.length; n < i; n++) o[n] !== e && t.push(o[n]);
                        o = t;
                    }),
                    (this.length = function () {
                        return o.length;
                    });
            }
            function i(n, e) {
                if (n)
                    if (n.resizedAttached) n.resizedAttached.add(e);
                    else {
                        (n.resizedAttached = new w()), n.resizedAttached.add(e), (n.resizeSensor = document.createElement("div")), (n.resizeSensor.dir = "ltr"), (n.resizeSensor.className = "resize-sensor");
                        var t = { pointerEvents: "none", position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden", maxWidth: "100%" },
                            i = { position: "absolute", left: "0px", top: "0px", transition: "0s" };
                        x(n.resizeSensor, t);
                        var o = document.createElement("div");
                        (o.className = "resize-sensor-expand"), x(o, t);
                        var r = document.createElement("div");
                        x(r, i), o.appendChild(r);
                        var a = document.createElement("div");
                        (a.className = "resize-sensor-shrink"), x(a, t);
                        var s = document.createElement("div");
                        x(s, i), x(s, { width: "200%", height: "200%" }), a.appendChild(s), n.resizeSensor.appendChild(o), n.resizeSensor.appendChild(a), n.appendChild(n.resizeSensor);
                        var l = window.getComputedStyle(n),
                            c = l ? l.getPropertyValue("position") : null;
                        "absolute" !== c && "relative" !== c && "fixed" !== c && "sticky" !== c && (n.style.position = "relative");
                        var u = !1,
                            d = 0,
                            f = E(n),
                            h = 0,
                            p = 0,
                            g = !0;
                        k = 0;
                        var m = function () {
                            if (g) {
                                if (0 === n.offsetWidth && 0 === n.offsetHeight)
                                    return void (k =
                                        k ||
                                        S(function () {
                                            (k = 0), m();
                                        }));
                                g = !1;
                            }
                            var e, t;
                            (e = n.offsetWidth), (t = n.offsetHeight), (r.style.width = e + 10 + "px"), (r.style.height = t + 10 + "px"), (o.scrollLeft = e + 10), (o.scrollTop = t + 10), (a.scrollLeft = e + 10), (a.scrollTop = t + 10);
                        };
                        n.resizeSensor.resetSensor = m;
                        function v() {
                            (d = 0), u && ((h = f.width), (p = f.height), n.resizedAttached && n.resizedAttached.call(f));
                        }
                        function y() {
                            (f = E(n)), (u = f.width !== h || f.height !== p) && !d && (d = S(v)), m();
                        }
                        function b(e, t, n) {
                            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n);
                        }
                        b(o, "scroll", y),
                            b(a, "scroll", y),
                            (k = S(function () {
                                (k = 0), m();
                            }));
                    }
            }
            r(t, function (e) {
                i(e, n);
            }),
                (this.detach = function (e) {
                    k || (o(k), (k = 0)), a.detach(t, e);
                }),
                (this.reset = function () {
                    t.resizeSensor.resetSensor();
                });
        };
        if (
            ((a.reset = function (e) {
                r(e, function (e) {
                    e.resizeSensor.resetSensor();
                });
            }),
                (a.detach = function (e, t) {
                    r(e, function (e) {
                        e &&
                        ((e.resizedAttached && "function" == typeof t && (e.resizedAttached.remove(t), e.resizedAttached.length())) ||
                            (e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)));
                    });
                }),
            "undefined" != typeof MutationObserver)
        ) {
            var n = new MutationObserver(function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) for (var n = e[t].addedNodes, i = 0; i < n.length; i++) n[i].resizeSensor && a.reset(n[i]);
            });
            document.addEventListener("DOMContentLoaded", function (e) {
                n.observe(document.body, { childList: !0, subtree: !0 });
            });
        }
        return a;
    }),
    document.addEventListener("DOMContentLoaded", function () {
        reframe("iframe:not(.no-resize)");
        var t = document.getElementById("menu-toggle");
        (t.onclick = function (e) {
            e.preventDefault(), document.body.classList.toggle("js-mobile-menu-opened"), t.classList.toggle("menu-icon-close");
        }),
            (document.getElementById("backdrop").onclick = function () {
                document.body.classList.toggle("js-mobile-menu-opened"), t.classList.toggle("menu-icon-close");
            }),
            document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
                var t = e.closest(".kg-gallery-image"),
                    n = e.attributes.width.value / e.attributes.height.value;
                t.style.flex = n + " 1 0%";
            }),
            mediumZoom(".kg-image-card img, .kg-gallery-image img", { margin: 30 });
        var n = document.getElementById("js-search-button"),
            i = document.querySelector(".js-search-popup"),
            e = document.getElementById("search-close"),
            r = document.getElementById("search-results");
        n.onclick = function (e) {
            i.classList.toggle("visible"),
                document.body.classList.toggle("search-opened"),
                window.setTimeout(function () {
                }, 100);
        };
        new v({
            key: apiKey,
            // inputId: ["search-input"],
            outputId: ["search-results"],
            outputChildsType: !1,
            limit: 50,
            postsFields: ["title", "url", "excerpt", "custom_excerpt", "published_at"],
            postsExtraFields: ["tags"],
            template: function (e) {
                var t = '<div class="result-item">';
                return (
                    (t += '<a href="' + e.url + '"><div class="header"><div class="title h5">' + e.title + "</div>"),
                    0 < e.tags.length && (t += ' - <span class="tag">' + e.tags[0].name + "</span></div>"),
                        (t += '<div class="excerpt">' + e.excerpt + "</div></a></div>")
                );
            },
            onSearchEnd: function (e) {
                r.scrollHeight > r.offsetHeight ? (r.style.paddingRight = "8px") : (r.style.paddingRight = "0px");
            },
        });
        function a(e) {
            i.classList.toggle("visible"), document.body.classList.toggle("search-opened"), (o.value = ""), (r.innerHTML = "");
        }
        document.addEventListener("keyup", function (e) {
            ("Escape" === e.key || 27 === e.keyCode) && i.classList.contains("visible") && document.body.classList.contains("search-opened") && (a(), n.focus());
        }),
            (e.onclick = a),
            (btnScrollTop = document.querySelector("#back-to-top")),
            window.addEventListener("scroll", function () {
                200 < document.body.scrollTop || 200 < document.documentElement.scrollTop ? (btnScrollTop.style.opacity = 1) : (btnScrollTop.style.opacity = 0);
            }),
            btnScrollTop.addEventListener("click", function (e) {
                e.preventDefault(), window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            });
        var s = 1,
            l = document.documentElement.getAttribute("data-header"),
            c = document.getElementById("site-header");
        null != c &&
        "sticky" === l &&
        window.addEventListener("scroll", function () {
            var e = window.pageYOffset;
            1 < e ? c.classList.add("sticky") : c.classList.remove("sticky"),
                (s = (e < s ? (c.classList.add("show"), c.classList.remove("hide")) : (c.classList.remove("show"), c.classList.add("hide")), e)),
            0 == e && (c.classList.remove("hide"), c.classList.remove("show"), c.classList.remove("sticky"));
        }),
            new ClipboardJS(".js-copy-link").on("success", function (e) {
                var t = document.querySelector(".js-notification-copy-link");
                t.classList.add("visible"),
                    setTimeout(function () {
                        t.classList.remove("visible");
                    }, 1e4);
            });
        var u = document.querySelectorAll("table");
        function d(e, t) {
            (t = t || window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
            var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
            return n ? (n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "") : null;
        }
        0 < u.length &&
        u.forEach(function (e) {
            var t = document.createElement("div");
            t.classList.add("table-responsive"), e.parentNode.insertBefore(t, e), t.appendChild(e);
        });
    });
var t = document.getElementById("js-toggle-dark-light"),
    n = document.documentElement;
t.addEventListener("click", function () {
    var e = n.getAttribute("data-theme");
    null !== e && "dark" === e ? (n.setAttribute("data-theme", "light"), localStorage.setItem("selected-theme", "light")) : (n.setAttribute("data-theme", "dark"), localStorage.setItem("selected-theme", "dark"));
});
var i = new LazyLoad({ elements_selector: ".lazy", threshold: 0 }),
    o = document.querySelector(".disqus-comment-wrap");

