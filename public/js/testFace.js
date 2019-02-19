!function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).faceapi = t.faceapi || {})
}(this, function(t) {
	"use strict";
	var r = Object.setPrototypeOf || {
			__proto__: []
		}instanceof Array && function(t, e) {
			t.__proto__ = e
		}
		|| function(t, e) {
			for (var n in e)
				e.hasOwnProperty(n) && (t[n] = e[n])
		}
	;
	function s(t, e) {
		function n() {
			this.constructor = t
		}
		r(t, e),
			t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
				new n)
	}
	var n = Object.assign || function(t) {
			for (var e, n = 1, r = arguments.length; n < r; n++)
				for (var o in e = arguments[n])
					Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
			return t
		}
	;
	function m(i, a, s, u) {
		return new (s || (s = Promise))(function(t, e) {
				function n(t) {
					try {
						o(u.next(t))
					} catch (t) {
						e(t)
					}
				}
				function r(t) {
					try {
						o(u.throw(t))
					} catch (t) {
						e(t)
					}
				}
				function o(e) {
					e.done ? t(e.value) : new s(function(t) {
							t(e.value)
						}
					).then(n, r)
				}
				o((u = u.apply(i, a || [])).next())
			}
		)
	}
	function C(n, r) {
		var o, i, a, t, s = {
			label: 0,
			sent: function() {
				if (1 & a[0])
					throw a[1];
				return a[1]
			},
			trys: [],
			ops: []
		};
		return t = {
			next: e(0),
			throw: e(1),
			return: e(2)
		},
		"function" == typeof Symbol && (t[Symbol.iterator] = function() {
				return this
			}
		),
			t;
		function e(e) {
			return function(t) {
				return function(e) {
					if (o)
						throw new TypeError("Generator is already executing.");
					for (; s; )
						try {
							if (o = 1,
							i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i),
								0) : i.next) && !(a = a.call(i, e[1])).done)
								return a;
							switch (i = 0,
							a && (e = [2 & e[0], a.value]),
								e[0]) {
								case 0:
								case 1:
									a = e;
									break;
								case 4:
									return s.label++,
										{
											value: e[1],
											done: !1
										};
								case 5:
									s.label++,
										i = e[1],
										e = [0];
									continue;
								case 7:
									e = s.ops.pop(),
										s.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
										s = 0;
										continue
									}
									if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
										s.label = e[1];
										break
									}
									if (6 === e[0] && s.label < a[1]) {
										s.label = a[1],
											a = e;
										break
									}
									if (a && s.label < a[2]) {
										s.label = a[2],
											s.ops.push(e);
										break
									}
									a[2] && s.ops.pop(),
										s.trys.pop();
									continue
							}
							e = r.call(n, s)
						} catch (t) {
							e = [6, t],
								i = 0
						} finally {
							o = a = 0
						}
					if (5 & e[0])
						throw e[1];
					return {
						value: e[0] ? e[1] : void 0,
						done: !0
					}
				}([e, t])
			}
		}
	}
	var o = {}
		, i = {
		alpha: !1,
		antialias: !1,
		premultipliedAlpha: !1,
		preserveDrawingBuffer: !1,
		depth: !1,
		stencil: !1,
		failIfMajorPerformanceCaveat: !0
	};
	function a(e) {
		e in o || (document.createElement("canvas").addEventListener("webglcontextlost", function(t) {
			t.preventDefault(),
				delete o[e]
		}, !1),
			o[e] = function(t) {
				if (1 !== t && 2 !== t)
					throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
				var e = document.createElement("canvas");
				return 1 === t ? e.getContext("webgl", i) || e.getContext("experimental-webgl", i) : e.getContext("webgl2", i)
			}(e));
		var t = o[e];
		return t.isContextLost() ? (delete o[e],
			a(e)) : (t.disable(t.DEPTH_TEST),
			t.disable(t.STENCIL_TEST),
			t.disable(t.BLEND),
			t.disable(t.DITHER),
			t.disable(t.POLYGON_OFFSET_FILL),
			t.disable(t.SAMPLE_COVERAGE),
			t.enable(t.SCISSOR_TEST),
			t.enable(t.CULL_FACE),
			t.cullFace(t.BACK),
			o[e])
	}
	function u(t) {
		for (var e = t.length, n = 0, r = 0; 0 < e; )
			r = Math.random() * e | 0,
				n = t[--e],
				t[e] = t[r],
				t[r] = n
	}
	function c(t, e, n) {
		return Math.max(t, Math.min(e, n))
	}
	function S(t) {
		return t % 2 == 0 ? t : t + 1
	}
	function l(t) {
		for (var e = 0, n = 0; n < t.length; n++)
			e += t[n];
		return e
	}
	function h(t, e) {
		var n = Math.random();
		return e * n + (1 - n) * t
	}
	function A(t, e) {
		if (!t)
			throw new Error("string" == typeof e ? e : e())
	}
	function f(t, e, n) {
		void 0 === n && (n = ""),
			A(y(t, e), n + " Shapes " + t + " and " + e + " must match")
	}
	function p(t) {
		A(null != t, "The input to the tensor constructor must be a non-null value.")
	}
	function d(t, e) {
		if (void 0 === e && (e = []),
		Array.isArray(t) || I(t))
			for (var n = 0; n < t.length; ++n)
				d(t[n], e);
		else
			e.push(t);
		return e
	}
	function L(t) {
		if (0 === t.length)
			return 1;
		for (var e = t[0], n = 1; n < t.length; n++)
			e *= t[n];
		return e
	}
	function y(t, e) {
		if (t === e)
			return !0;
		if (null == t || null == e)
			return !1;
		if (t.length !== e.length)
			return !1;
		for (var n = 0; n < t.length; n++)
			if (t[n] !== e[n])
				return !1;
		return !0
	}
	function T(t) {
		return t % 1 == 0
	}
	function v(t) {
		if (null != Math.tanh)
			return Math.tanh(t);
		if (t === 1 / 0)
			return 1;
		if (t === -1 / 0)
			return -1;
		var e = Math.exp(2 * t);
		return (e - 1) / (e + 1)
	}
	function g(t) {
		for (var e = Math.floor(Math.sqrt(t)); 1 < e; --e)
			if (t % e == 0)
				return [e, t / e];
		return [1, t]
	}
	function x(t, e) {
		return e <= t.length ? t : t + " ".repeat(e - t.length)
	}
	function w(i, a, s) {
		return void 0 === a && (a = function(t) {
				return 0
			}
		),
			new Promise(function(e, n) {
					var r = 0
						, o = function() {
						if (i())
							e();
						else {
							var t = a(++r);
							null != s && s <= r ? n() : setTimeout(o, t)
						}
					};
					o()
				}
			)
	}
	function b(t, e) {
		for (var n = 1, r = -1, o = 0; o < t.length; ++o)
			if (0 <= t[o])
				n *= t[o];
			else if (-1 === t[o]) {
				if (-1 !== r)
					throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + o);
				r = o
			} else if (t[o] < 0)
				throw Error("Shapes can not be < 0. Found " + t[o] + " at dim " + o);
		if (-1 === r) {
			if (0 < e && e !== n)
				throw Error("Size(" + e + ") must match the product of shape " + t);
			return t
		}
		if (0 === n)
			throw Error("Cannot infer the missing size in [" + t + "] when there are 0 elements");
		if (e % n != 0)
			throw Error("The implicit shape can't be a fractional number. Got " + e + " / " + n);
		var i = t.slice();
		return i[r] = e / n,
			i
	}
	function E(t, e) {
		for (var n = [], r = [], o = 0, i = 0; i < t.length; ++i) {
			if (null != e) {
				if (e[o] === i && 1 !== t[i])
					throw new Error("Can't squeeze axis " + i + " since its dim '" + t[i] + "' is not 1");
				(null == e[o] || e[o] > i) && 1 === t[i] && (n.push(t[i]),
					r.push(i)),
				e[o] <= i && o++
			}
			1 !== t[i] && (n.push(t[i]),
				r.push(i))
		}
		return {
			newShape: n,
			keptDims: r
		}
	}
	function _(t, e) {
		var n = null;
		if (null == t || "float32" === t)
			n = new Float32Array(e);
		else if ("int32" === t)
			n = new Int32Array(e);
		else {
			if ("bool" !== t)
				throw new Error("Unknown data type " + t);
			n = new Uint8Array(e)
		}
		return n
	}
	function R(t, e) {
		var n = null;
		if (null == t || "float32" === t)
			n = new Float32Array(e);
		else if ("int32" === t)
			n = new Int32Array(e);
		else if ("bool" === t)
			n = new Uint8Array(e);
		else {
			if ("string" !== t)
				throw new Error("Unknown data type " + t);
			n = new Array(e)
		}
		return n
	}
	function N(t, e, n) {
		if ("float32" === e)
			for (var r = 0; r < t.length; r++)
				if (isNaN(t[r]))
					throw Error("The result of the '" + n + "' has NaNs.")
	}
	function k(t, e) {
		if ("float32" !== e)
			for (var n = 0; n < t.length; n++)
				if (isNaN(t[n]))
					throw Error("NaN is not a valid value for dtype: '" + e + "'.")
	}
	function D(t, e) {
		return !("complex64" === e || "float32" === e && "complex64" !== t || "int32" === e && "float32" !== t && "complex64" !== t || "bool" === e && "bool" === t)
	}
	function I(t) {
		return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array
	}
	function M(t) {
		if ("float32" === t || "int32" === t)
			return 4;
		if ("complex64" === t)
			return 8;
		if ("bool" === t)
			return 1;
		throw new Error("Unknown dtype " + t)
	}
	function F(t) {
		if (null == t)
			return 0;
		var e = 0;
		return t.forEach(function(t) {
			return e += 2 * t.length
		}),
			e
	}
	function O(t) {
		return "string" == typeof t || t instanceof String
	}
	function e(t) {
		return "boolean" == typeof t
	}
	function P(t) {
		return "number" == typeof t
	}
	function B(t) {
		return t instanceof Array ? B(t[0]) : t instanceof Float32Array ? "float32" : t instanceof Int32Array || t instanceof Uint8Array ? "int32" : P(t) ? "float32" : O(t) ? "string" : e(t) ? "bool" : "float32"
	}
	function W(t) {
		return !!(t && t.constructor && t.call && t.apply)
	}
	function z(t, e) {
		for (var n = e; n < t; ++n)
			if (t % n == 0)
				return n;
		return t
	}
	function U(t) {
		var e = t.length;
		if (e < 2)
			return [];
		var n = new Array(e - 1);
		n[e - 2] = t[e - 1];
		for (var r = e - 3; 0 <= r; --r)
			n[r] = n[r + 1] * t[r + 1];
		return n
	}
	function V(t, e, n) {
		if ("string" === e)
			throw new Error("Cannot convert a string[] to a TypedArray");
		if (o = e,
		(r = t)instanceof Float32Array && "float32" === o || r instanceof Int32Array && "int32" === o || r instanceof Uint8Array && "bool" === o)
			return t;
		var r, o;
		if (Array.isArray(t) && (t = d(t)),
		null == e || "float32" === e || "complex64" === e)
			return new Float32Array(t);
		if ("int32" === e)
			return n && k(t, e),
				new Int32Array(t);
		if ("bool" !== e)
			throw new Error("Unknown data type " + e);
		for (var i = new Uint8Array(t.length), a = 0; a < i.length; ++a)
			0 !== Math.round(t[a]) && (i[a] = 1);
		return i
	}
	function G(t, e) {
		for (var n = H(t, e), r = 0; r < n.length; r++)
			n[r] = 1;
		return n
	}
	function H(t, e) {
		if (null == e || "float32" === e || "complex64" === e)
			return new Float32Array(t);
		if ("int32" === e)
			return new Int32Array(t);
		if ("bool" === e)
			return new Uint8Array(t);
		throw new Error("Unknown data type " + e)
	}
	function q() {
		if ("undefined" != typeof performance)
			return performance.now();
		if ("undefined" == typeof process)
			throw new Error("Cannot measure time in this environment. You should run tf.js in the browser or in Node.js");
		var t = process.hrtime();
		return 1e3 * t[0] + t[1] / 1e6
	}
	var j = Object.freeze({
		shuffle: u,
		clamp: c,
		nearestLargerEven: S,
		sum: l,
		randUniform: h,
		distSquared: function(t, e) {
			for (var n = 0, r = 0; r < t.length; r++) {
				var o = Number(t[r]) - Number(e[r]);
				n += o * o
			}
			return n
		},
		assert: A,
		assertShapesMatch: f,
		assertNonNull: p,
		flatten: d,
		sizeFromShape: L,
		isScalarShape: function(t) {
			return 0 === t.length
		},
		arraysEqual: y,
		isInt: T,
		tanh: v,
		sizeToSquarishShape: g,
		createShuffledIndices: function(t) {
			for (var e = new Uint32Array(t), n = 0; n < t; ++n)
				e[n] = n;
			return u(e),
				e
		},
		rightPad: x,
		repeatedTry: w,
		inferFromImplicitShape: b,
		squeezeShape: E,
		getTypedArrayFromDType: _,
		getArrayFromDType: R,
		checkComputationForNaN: N,
		checkConversionForNaN: k,
		hasEncodingLoss: D,
		isTypedArray: I,
		bytesPerElement: M,
		bytesFromStringArray: F,
		isString: O,
		isBoolean: e,
		isNumber: P,
		inferDtype: B,
		isFunction: W,
		nearestDivisor: z,
		computeStrides: U,
		toTypedArray: V,
		makeOnesTypedArray: G,
		makeZerosTypedArray: H,
		now: q
	})
		, $ = function() {
		function t(t, e) {
			this.backendTimer = t,
			null == (this.logger = e) && (this.logger = new K)
		}
		return t.prototype.profileKernel = function(o, t) {
			var e, i = this, a = this.backendTimer.time(function() {
				e = t()
			});
			return (Array.isArray(e) ? e : [e]).forEach(function(n) {
				var r = n.dataSync();
				N(r, n.dtype, o),
					a.then(function(t) {
						var e = "";
						null != t.getExtraProfileInfo && (e = t.getExtraProfileInfo()),
							i.logger.logKernelProfile(o, n, r, t.kernelMs, e)
					})
			}),
				e
		}
			,
			t
	}()
		, K = function() {
		function t() {}
		return t.prototype.logKernelProfile = function(t, e, n, r, o) {
			var i = x(r + "ms", 9)
				, a = x(t, 25)
				, s = e.rank
				, u = e.size
				, c = x(e.shape.toString(), 14);
			console.log("%c" + a + "\t%c" + i + "\t%c" + s + "D " + c + "\t%c" + u + "\t%c" + o, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green")
		}
			,
			t
	}()
		, X = 20
		, Y = 3
		, Q = 7;
	function J(t, e, n, r) {
		var o = U(e)
			, i = function(t, e, n, r) {
			var o = L(e)
				, i = r[r.length - 1]
				, a = new Array(i).fill(0)
				, s = e.length
				, u = "complex64" === n ? tt(t) : t;
			if (1 < s)
				for (var c = 0; c < o / i; c++)
					for (var l = c * i, h = 0; h < i; h++)
						a[h] = Math.max(a[h], Z(u[l + h], 0).length);
			return a
		}(t, e, n, o)
			, a = e.length
			, s = function t(e, n, r, o, i, a) {
			void 0 === a && (a = !0);
			var s = "complex64" === r ? 2 : 1
				, u = n[0]
				, c = n.length;
			if (0 === c)
				return "complex64" === r ? [Z(tt(e)[0], 0)] : [e[0].toString()];
			if (1 === c) {
				if (X < u) {
					var l = Y * s
						, h = Array.from(e.slice(0, l))
						, p = Array.from(e.slice(u - Y * s, u));
					return "complex64" === r && (h = tt(h),
						p = tt(p)),
						["[" + h.map(function(t, e) {
							return Z(t, i[e])
						}).join(", ") + ", ..., " + p.map(function(t, e) {
							return Z(t, i[u - Y + e])
						}).join(", ") + "]"]
				}
				return ["[" + ("complex64" === r ? tt(e) : Array.from(e)).map(function(t, e) {
					return Z(t, i[e])
				}).join(", ") + "]"]
			}
			var f = n.slice(1)
				, d = o.slice(1)
				, m = o[0] * s
				, v = [];
			if (X < u) {
				for (var g = 0; g < Y; g++) {
					var y = (x = g * m) + m;
					v.push.apply(v, t(e.slice(x, y), f, r, d, i, !1))
				}
				for (v.push("..."),
					     g = u - Y; g < u; g++)
					y = (x = g * m) + m,
						v.push.apply(v, t(e.slice(x, y), f, r, d, i, g === u - 1))
			} else
				for (g = 0; g < u; g++) {
					var x;
					y = (x = g * m) + m,
						v.push.apply(v, t(e.slice(x, y), f, r, d, i, g === u - 1))
				}
			var w = 2 === c ? "," : "";
			v[0] = "[" + v[0] + w;
			for (g = 1; g < v.length - 1; g++)
				v[g] = " " + v[g] + w;
			var b = ",\n";
			for (g = 2; g < c; g++)
				b += "\n";
			return v[v.length - 1] = " " + v[v.length - 1] + "]" + (a ? "" : b),
				v
		}(t, e, n, o, i)
			, u = ["Tensor"];
		return r && (u.push("  dtype: " + n),
			u.push("  rank: " + a),
			u.push("  shape: [" + e + "]"),
			u.push("  values:")),
			u.push(s.map(function(t) {
				return "    " + t
			}).join("\n")),
			u.join("\n")
	}
	function Z(t, e) {
		return x(Array.isArray(t) ? parseFloat(t[0].toFixed(Q)) + " + " + parseFloat(t[1].toFixed(Q)) + "j" : O(t) ? "'" + t + "'" : parseFloat(t.toFixed(Q)).toString(), e)
	}
	function tt(t) {
		for (var e = [], n = 0; n < t.length; n += 2)
			e.push([t[n], t[n + 1]]);
		return e
	}
	var et = function() {
		function t(t, e, n) {
			if (this.dtype = e,
				this.shape = t.slice(),
				this.size = L(t),
			null != n) {
				var r = n.length;
				A(r === this.size, "Length of values '" + r + "' does not match the size inferred by the shape '" + this.size + "'.")
			}
			if ("complex64" === e)
				throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
			this.values = n || R(e, L(this.shape)),
				this.strides = U(t)
		}
		return t.prototype.set = function(t) {
			for (var e = [], n = 1; n < arguments.length; n++)
				e[n - 1] = arguments[n];
			0 === e.length && (e = [0]),
				A(e.length === this.rank, "The number of provided coordinates (" + e.length + ") must match the rank (" + this.rank + ")");
			var r = this.locToIndex(e);
			this.values[r] = t
		}
			,
			t.prototype.get = function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				0 === t.length && (t = [0]);
				for (var n = t[t.length - 1], r = 0; r < t.length - 1; ++r)
					n += this.strides[r] * t[r];
				return this.values[n]
			}
			,
			t.prototype.locToIndex = function(t) {
				if (0 === this.rank)
					return 0;
				if (1 === this.rank)
					return t[0];
				for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n)
					e += this.strides[n] * t[n];
				return e
			}
			,
			t.prototype.indexToLoc = function(t) {
				if (0 === this.rank)
					return [];
				if (1 === this.rank)
					return [t];
				for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n)
					e[n] = Math.floor(t / this.strides[n]),
						t -= e[n] * this.strides[n];
				return e[e.length - 1] = t,
					e
			}
			,
			Object.defineProperty(t.prototype, "rank", {
				get: function() {
					return this.shape.length
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.toTensor = function() {
				return it.make(this.shape, {
					values: this.values
				}, this.dtype)
			}
			,
			t
	}()
		, nt = null
		, rt = null;
	function ot(t) {
		nt = t
	}
	var it = function() {
		function r(t, e, n, r) {
			this.isDisposedInternal = !1,
				this.shape = t.slice(),
				this.dtype = e || "float32",
				this.size = L(t),
				this.strides = U(t),
				this.dataId = null != r ? r : {},
				this.id = nt().nextTensorId(),
				this.rankType = this.rank < 5 ? this.rank.toString() : "higher",
				nt().registerTensor(this),
			null != n && nt().write(this.dataId, n)
		}
		return r.make = function(t, e, n) {
			return new r(t,n,e.values,e.dataId)
		}
			,
			r.prototype.flatten = function() {
				return this.throwIfDisposed(),
					this.as1D()
			}
			,
			r.prototype.asScalar = function() {
				return this.throwIfDisposed(),
					A(1 === this.size, "The array must have only 1 element."),
					this.reshape([])
			}
			,
			r.prototype.as1D = function() {
				return this.throwIfDisposed(),
					this.reshape([this.size])
			}
			,
			r.prototype.as2D = function(t, e) {
				return this.throwIfDisposed(),
					this.reshape([t, e])
			}
			,
			r.prototype.as3D = function(t, e, n) {
				return this.throwIfDisposed(),
					this.reshape([t, e, n])
			}
			,
			r.prototype.as4D = function(t, e, n, r) {
				return this.throwIfDisposed(),
					this.reshape([t, e, n, r])
			}
			,
			r.prototype.as5D = function(t, e, n, r, o) {
				return this.throwIfDisposed(),
					this.reshape([t, e, n, r, o])
			}
			,
			r.prototype.asType = function(t) {
				return this.throwIfDisposed(),
					rt.cast(this, t)
			}
			,
			Object.defineProperty(r.prototype, "rank", {
				get: function() {
					return this.shape.length
				},
				enumerable: !0,
				configurable: !0
			}),
			r.prototype.get = function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				A(t.length === this.rank, "Number of coordinates in get() must match the rank of the tensor"),
					A("complex64" !== this.dtype, "Tensor.get() is not supported for complex64 tensors yet."),
					this.throwIfDisposed(),
				0 === t.length && (t = [0]);
				for (var n = t[t.length - 1], r = 0; r < t.length - 1; ++r)
					n += this.strides[r] * t[r];
				return this.dataSync()[n]
			}
			,
			r.prototype.buffer = function() {
				return rt.buffer(this.shape, this.dtype, this.dataSync())
			}
			,
			r.prototype.data = function() {
				return m(this, void 0, void 0, function() {
					return C(this, function(t) {
						return this.throwIfDisposed(),
							[2, nt().read(this.dataId)]
					})
				})
			}
			,
			r.prototype.dataSync = function() {
				return this.throwIfDisposed(),
					nt().readSync(this.dataId)
			}
			,
			r.prototype.dispose = function() {
				this.isDisposed || (nt().disposeTensor(this),
					this.isDisposedInternal = !0)
			}
			,
			Object.defineProperty(r.prototype, "isDisposed", {
				get: function() {
					return this.isDisposedInternal
				},
				enumerable: !0,
				configurable: !0
			}),
			r.prototype.throwIfDisposed = function() {
				if (this.isDisposed)
					throw new Error("Tensor is disposed.")
			}
			,
			r.prototype.toFloat = function() {
				return this.asType("float32")
			}
			,
			r.prototype.toInt = function() {
				return this.asType("int32")
			}
			,
			r.prototype.toBool = function() {
				return this.asType("bool")
			}
			,
			r.prototype.print = function(t) {
				return void 0 === t && (t = !1),
					rt.print(this, t)
			}
			,
			r.prototype.reshape = function(t) {
				return this.throwIfDisposed(),
					rt.reshape(this, t)
			}
			,
			r.prototype.reshapeAs = function(t) {
				return this.throwIfDisposed(),
					this.reshape(t.shape)
			}
			,
			r.prototype.expandDims = function(t) {
				return void 0 === t && (t = 0),
					rt.expandDims(this, t)
			}
			,
			r.prototype.cumsum = function(t, e, n) {
				return void 0 === t && (t = 0),
				void 0 === e && (e = !1),
				void 0 === n && (n = !1),
					rt.cumsum(this, t, e, n)
			}
			,
			r.prototype.squeeze = function(t) {
				return this.throwIfDisposed(),
					rt.squeeze(this, t)
			}
			,
			r.prototype.clone = function() {
				return this.throwIfDisposed(),
					rt.clone(this)
			}
			,
			r.prototype.toString = function(t) {
				return void 0 === t && (t = !1),
					J(this.dataSync(), this.shape, this.dtype, t)
			}
			,
			r.prototype.tile = function(t) {
				return this.throwIfDisposed(),
					rt.tile(this, t)
			}
			,
			r.prototype.gather = function(t, e) {
				return void 0 === e && (e = 0),
					this.throwIfDisposed(),
					rt.gather(this, t, e)
			}
			,
			r.prototype.matMul = function(t, e, n) {
				return void 0 === e && (e = !1),
				void 0 === n && (n = !1),
					this.throwIfDisposed(),
					rt.matMul(this, t, e, n)
			}
			,
			r.prototype.dot = function(t) {
				return this.throwIfDisposed(),
					rt.dot(this, t)
			}
			,
			r.prototype.norm = function(t, e, n) {
				return void 0 === t && (t = "euclidean"),
				void 0 === e && (e = null),
				void 0 === n && (n = !1),
					this.throwIfDisposed(),
					rt.norm(this, t, e, n)
			}
			,
			r.prototype.slice = function(t, e) {
				return this.throwIfDisposed(),
					rt.slice(this, t, e)
			}
			,
			r.prototype.reverse = function(t) {
				return this.throwIfDisposed(),
					rt.reverse(this, t)
			}
			,
			r.prototype.concat = function(t, e) {
				return void 0 === e && (e = 0),
					this.throwIfDisposed(),
				t instanceof r && (t = [t]),
					rt.concat([this].concat(t), e)
			}
			,
			r.prototype.split = function(t, e) {
				return void 0 === e && (e = 0),
					this.throwIfDisposed(),
					rt.split(this, t, e)
			}
			,
			r.prototype.stack = function(t, e) {
				return void 0 === e && (e = 0),
					rt.stack([this, t], e)
			}
			,
			r.prototype.unstack = function(t, e) {
				return void 0 === e && (e = 0),
					rt.unstack(this, e)
			}
			,
			r.prototype.pad = function(t, e) {
				return void 0 === e && (e = 0),
					rt.pad(this, t, e)
			}
			,
			r.prototype.batchNormalization = function(t, e, n, r, o) {
				return void 0 === n && (n = .001),
					this.throwIfDisposed(),
					rt.batchNormalization(this, t, e, n, r, o)
			}
			,
			r.prototype.all = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.all(this, t, e)
			}
			,
			r.prototype.any = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.any(this, t, e)
			}
			,
			r.prototype.logSumExp = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.logSumExp(this, t, e)
			}
			,
			r.prototype.sum = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.sum(this, t, e)
			}
			,
			r.prototype.prod = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.prod(this, t, e)
			}
			,
			r.prototype.mean = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.mean(this, t, e)
			}
			,
			r.prototype.min = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.min(this, t, e)
			}
			,
			r.prototype.max = function(t, e) {
				return void 0 === t && (t = null),
				void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.max(this, t, e)
			}
			,
			r.prototype.argMin = function(t) {
				return void 0 === t && (t = null),
					this.throwIfDisposed(),
					rt.argMin(this, t)
			}
			,
			r.prototype.argMax = function(t) {
				return void 0 === t && (t = null),
					this.throwIfDisposed(),
					rt.argMax(this, t)
			}
			,
			r.prototype.cast = function(t) {
				return this.throwIfDisposed(),
					rt.cast(this, t)
			}
			,
			r.prototype.add = function(t) {
				return this.throwIfDisposed(),
					rt.add(this, t)
			}
			,
			r.prototype.addStrict = function(t) {
				return this.throwIfDisposed(),
					rt.addStrict(this, t)
			}
			,
			r.prototype.atan2 = function(t) {
				return this.throwIfDisposed(),
					rt.atan2(this, t)
			}
			,
			r.prototype.sub = function(t) {
				return this.throwIfDisposed(),
					rt.sub(this, t)
			}
			,
			r.prototype.subStrict = function(t) {
				return this.throwIfDisposed(),
					rt.subStrict(this, t)
			}
			,
			r.prototype.pow = function(t) {
				return this.throwIfDisposed(),
					rt.pow(this, t)
			}
			,
			r.prototype.powStrict = function(t) {
				return this.throwIfDisposed(),
					rt.powStrict(this, t)
			}
			,
			r.prototype.mul = function(t) {
				return this.throwIfDisposed(),
					rt.mul(this, t)
			}
			,
			r.prototype.mulStrict = function(t) {
				return this.throwIfDisposed(),
					rt.mulStrict(this, t)
			}
			,
			r.prototype.div = function(t) {
				return this.throwIfDisposed(),
					rt.div(this, t)
			}
			,
			r.prototype.floorDiv = function(t) {
				return this.throwIfDisposed(),
					rt.floorDiv(this, t)
			}
			,
			r.prototype.divStrict = function(t) {
				return this.throwIfDisposed(),
					rt.divStrict(this, t)
			}
			,
			r.prototype.minimum = function(t) {
				return this.throwIfDisposed(),
					rt.minimum(this, t)
			}
			,
			r.prototype.minimumStrict = function(t) {
				return this.throwIfDisposed(),
					rt.minimumStrict(this, t)
			}
			,
			r.prototype.maximum = function(t) {
				return this.throwIfDisposed(),
					rt.maximum(this, t)
			}
			,
			r.prototype.maximumStrict = function(t) {
				return this.throwIfDisposed(),
					rt.maximumStrict(this, t)
			}
			,
			r.prototype.mod = function(t) {
				return this.throwIfDisposed(),
					rt.mod(this, t)
			}
			,
			r.prototype.modStrict = function(t) {
				return this.throwIfDisposed(),
					rt.modStrict(this, t)
			}
			,
			r.prototype.squaredDifference = function(t) {
				return this.throwIfDisposed(),
					rt.squaredDifference(this, t)
			}
			,
			r.prototype.squaredDifferenceStrict = function(t) {
				return this.throwIfDisposed(),
					rt.squaredDifferenceStrict(this, t)
			}
			,
			r.prototype.transpose = function(t) {
				return this.throwIfDisposed(),
					rt.transpose(this, t)
			}
			,
			r.prototype.notEqual = function(t) {
				return this.throwIfDisposed(),
					rt.notEqual(this, t)
			}
			,
			r.prototype.notEqualStrict = function(t) {
				return this.throwIfDisposed(),
					rt.notEqualStrict(this, t)
			}
			,
			r.prototype.less = function(t) {
				return this.throwIfDisposed(),
					rt.less(this, t)
			}
			,
			r.prototype.lessStrict = function(t) {
				return this.throwIfDisposed(),
					rt.lessStrict(this, t)
			}
			,
			r.prototype.equal = function(t) {
				return this.throwIfDisposed(),
					rt.equal(this, t)
			}
			,
			r.prototype.equalStrict = function(t) {
				return this.throwIfDisposed(),
					rt.equalStrict(this, t)
			}
			,
			r.prototype.lessEqual = function(t) {
				return this.throwIfDisposed(),
					rt.lessEqual(this, t)
			}
			,
			r.prototype.lessEqualStrict = function(t) {
				return this.throwIfDisposed(),
					rt.lessEqualStrict(this, t)
			}
			,
			r.prototype.greater = function(t) {
				return this.throwIfDisposed(),
					rt.greater(this, t)
			}
			,
			r.prototype.greaterStrict = function(t) {
				return this.throwIfDisposed(),
					rt.greaterStrict(this, t)
			}
			,
			r.prototype.greaterEqual = function(t) {
				return this.throwIfDisposed(),
					rt.greaterEqual(this, t)
			}
			,
			r.prototype.greaterEqualStrict = function(t) {
				return this.throwIfDisposed(),
					rt.greaterEqualStrict(this, t)
			}
			,
			r.prototype.logicalAnd = function(t) {
				return this.throwIfDisposed(),
					rt.logicalAnd(this, t)
			}
			,
			r.prototype.logicalOr = function(t) {
				return this.throwIfDisposed(),
					rt.logicalOr(this, t)
			}
			,
			r.prototype.logicalNot = function() {
				return this.throwIfDisposed(),
					rt.logicalNot(this)
			}
			,
			r.prototype.logicalXor = function(t) {
				return this.throwIfDisposed(),
					rt.logicalXor(this, t)
			}
			,
			r.prototype.where = function(t, e) {
				return this.throwIfDisposed(),
					rt.where(t, this, e)
			}
			,
			r.prototype.neg = function() {
				return this.throwIfDisposed(),
					rt.neg(this)
			}
			,
			r.prototype.ceil = function() {
				return this.throwIfDisposed(),
					rt.ceil(this)
			}
			,
			r.prototype.floor = function() {
				return this.throwIfDisposed(),
					rt.floor(this)
			}
			,
			r.prototype.sign = function() {
				return this.throwIfDisposed(),
					rt.sign(this)
			}
			,
			r.prototype.exp = function() {
				return this.throwIfDisposed(),
					rt.exp(this)
			}
			,
			r.prototype.expm1 = function() {
				return this.throwIfDisposed(),
					rt.expm1(this)
			}
			,
			r.prototype.log = function() {
				return this.throwIfDisposed(),
					rt.log(this)
			}
			,
			r.prototype.log1p = function() {
				return this.throwIfDisposed(),
					rt.log1p(this)
			}
			,
			r.prototype.sqrt = function() {
				return this.throwIfDisposed(),
					rt.sqrt(this)
			}
			,
			r.prototype.rsqrt = function() {
				return this.throwIfDisposed(),
					rt.rsqrt(this)
			}
			,
			r.prototype.square = function() {
				return this.throwIfDisposed(),
					rt.square(this)
			}
			,
			r.prototype.reciprocal = function() {
				return this.throwIfDisposed(),
					rt.reciprocal(this)
			}
			,
			r.prototype.abs = function() {
				return this.throwIfDisposed(),
					rt.abs(this)
			}
			,
			r.prototype.clipByValue = function(t, e) {
				return this.throwIfDisposed(),
					rt.clipByValue(this, t, e)
			}
			,
			r.prototype.relu = function() {
				return this.throwIfDisposed(),
					rt.relu(this)
			}
			,
			r.prototype.elu = function() {
				return this.throwIfDisposed(),
					rt.elu(this)
			}
			,
			r.prototype.selu = function() {
				return this.throwIfDisposed(),
					rt.selu(this)
			}
			,
			r.prototype.leakyRelu = function(t) {
				return void 0 === t && (t = .2),
					this.throwIfDisposed(),
					rt.leakyRelu(this, t)
			}
			,
			r.prototype.prelu = function(t) {
				return this.throwIfDisposed(),
					rt.prelu(this, t)
			}
			,
			r.prototype.sigmoid = function() {
				return this.throwIfDisposed(),
					rt.sigmoid(this)
			}
			,
			r.prototype.logSigmoid = function() {
				return this.throwIfDisposed(),
					rt.logSigmoid(this)
			}
			,
			r.prototype.softplus = function() {
				return this.throwIfDisposed(),
					rt.softplus(this)
			}
			,
			r.prototype.zerosLike = function() {
				return this.throwIfDisposed(),
					rt.zerosLike(this)
			}
			,
			r.prototype.onesLike = function() {
				return this.throwIfDisposed(),
					rt.onesLike(this)
			}
			,
			r.prototype.sin = function() {
				return this.throwIfDisposed(),
					rt.sin(this)
			}
			,
			r.prototype.cos = function() {
				return this.throwIfDisposed(),
					rt.cos(this)
			}
			,
			r.prototype.tan = function() {
				return this.throwIfDisposed(),
					rt.tan(this)
			}
			,
			r.prototype.asin = function() {
				return this.throwIfDisposed(),
					rt.asin(this)
			}
			,
			r.prototype.acos = function() {
				return this.throwIfDisposed(),
					rt.acos(this)
			}
			,
			r.prototype.atan = function() {
				return this.throwIfDisposed(),
					rt.atan(this)
			}
			,
			r.prototype.sinh = function() {
				return this.throwIfDisposed(),
					rt.sinh(this)
			}
			,
			r.prototype.cosh = function() {
				return this.throwIfDisposed(),
					rt.cosh(this)
			}
			,
			r.prototype.tanh = function() {
				return this.throwIfDisposed(),
					rt.tanh(this)
			}
			,
			r.prototype.asinh = function() {
				return this.throwIfDisposed(),
					rt.asinh(this)
			}
			,
			r.prototype.acosh = function() {
				return this.throwIfDisposed(),
					rt.acosh(this)
			}
			,
			r.prototype.atanh = function() {
				return this.throwIfDisposed(),
					rt.atanh(this)
			}
			,
			r.prototype.erf = function() {
				return this.throwIfDisposed(),
					rt.erf(this)
			}
			,
			r.prototype.round = function() {
				return this.throwIfDisposed(),
					rt.round(this)
			}
			,
			r.prototype.step = function(t) {
				return void 0 === t && (t = 0),
					this.throwIfDisposed(),
					rt.step(this, t)
			}
			,
			r.prototype.softmax = function(t) {
				return void 0 === t && (t = -1),
					this.throwIfDisposed(),
					rt.softmax(this, t)
			}
			,
			r.prototype.logSoftmax = function(t) {
				return void 0 === t && (t = -1),
					this.throwIfDisposed(),
					rt.logSoftmax(this, t)
			}
			,
			r.prototype.resizeBilinear = function(t, e) {
				return void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.image.resizeBilinear(this, t, e)
			}
			,
			r.prototype.resizeNearestNeighbor = function(t, e) {
				return void 0 === e && (e = !1),
					this.throwIfDisposed(),
					rt.image.resizeNearestNeighbor(this, t, e)
			}
			,
			r.prototype.conv1d = function(t, e, n, r, o, i) {
				return void 0 === r && (r = "NWC"),
				void 0 === o && (o = 1),
					this.throwIfDisposed(),
					rt.conv1d(this, t, e, n, r, o, i)
			}
			,
			r.prototype.conv2d = function(t, e, n, r, o, i) {
				return void 0 === r && (r = "NHWC"),
				void 0 === o && (o = [1, 1]),
					this.throwIfDisposed(),
					rt.conv2d(this, t, e, n, r, o, i)
			}
			,
			r.prototype.conv2dTranspose = function(t, e, n, r, o) {
				return this.throwIfDisposed(),
					rt.conv2dTranspose(this, t, e, n, r, o)
			}
			,
			r.prototype.depthwiseConv2D = function(t, e, n, r, o, i) {
				return void 0 === r && (r = "NHWC"),
				void 0 === o && (o = [1, 1]),
					this.throwIfDisposed(),
					rt.depthwiseConv2d(this, t, e, n, r, o, i)
			}
			,
			r.prototype.separableConv2d = function(t, e, n, r, o, i) {
				return void 0 === o && (o = [1, 1]),
				void 0 === i && (i = "NHWC"),
					this.throwIfDisposed(),
					rt.separableConv2d(this, t, e, n, r, o, i)
			}
			,
			r.prototype.avgPool = function(t, e, n, r) {
				return this.throwIfDisposed(),
					rt.avgPool(this, t, e, n, r)
			}
			,
			r.prototype.maxPool = function(t, e, n, r) {
				return this.throwIfDisposed(),
					rt.maxPool(this, t, e, n, r)
			}
			,
			r.prototype.localResponseNormalization = function(t, e, n, r) {
				return void 0 === t && (t = 5),
				void 0 === e && (e = 1),
				void 0 === n && (n = 1),
				void 0 === r && (r = .5),
					rt.localResponseNormalization(this, t, e, n, r)
			}
			,
			r.prototype.pool = function(t, e, n, r, o) {
				return this.throwIfDisposed(),
					rt.pool(this, t, e, n, r, o)
			}
			,
			r.prototype.variable = function(t, e, n) {
				return void 0 === t && (t = !0),
					this.throwIfDisposed(),
					at.variable(this, t, e, n)
			}
			,
			r.prototype.unsortedSegmentSum = function(t, e) {
				return this.throwIfDisposed(),
					rt.unsortedSegmentSum(this, t, e)
			}
			,
			r.prototype.batchToSpaceND = function(t, e) {
				return this.throwIfDisposed(),
					rt.batchToSpaceND(this, t, e)
			}
			,
			r.prototype.spaceToBatchND = function(t, e) {
				return this.throwIfDisposed(),
					rt.spaceToBatchND(this, t, e)
			}
			,
			r.prototype.topk = function(t, e) {
				return void 0 === t && (t = 1),
				void 0 === e && (e = !0),
					this.throwIfDisposed(),
					rt.topk(this, t, e)
			}
			,
			r.prototype.stridedSlice = function(t, e, n, r, o) {
				return void 0 === r && (r = 0),
				void 0 === o && (o = 0),
					this.throwIfDisposed(),
					rt.stridedSlice(this, t, e, n, r, o)
			}
			,
			r.prototype.depthToSpace = function(t, e) {
				return this.throwIfDisposed(),
					rt.depthToSpace(this, t, e)
			}
			,
			r.prototype.fft = function() {
				return this.throwIfDisposed(),
					rt.spectral.fft(this)
			}
			,
			r.prototype.ifft = function() {
				return this.throwIfDisposed(),
					rt.spectral.ifft(this)
			}
			,
			r
	}();
	Object.defineProperty(it, Symbol.hasInstance, {
		value: function(t) {
			return !!t && null != t.shape && null != t.dtype
		}
	});
	var at = function(o) {
		function i(t, e, n) {
			void 0 === e && (e = !0);
			var r = o.call(this, t.shape, t.dtype, null, t.dataId) || this;
			r.trainable = e,
				r.name = n,
			null == r.name && (r.name = nt().nextVariableId().toString());
			try {
				nt().registerVariable(r)
			} catch (t) {
				throw nt().disposeTensor(r),
					t
			}
			return r
		}
		return s(i, o),
			i.variable = function(t, e, n, r) {
				return void 0 === e && (e = !0),
				null != r && r !== t.dtype && (t = t.asType(r)),
					new i(t,e,n)
			}
			,
			i.prototype.assign = function(t) {
				if (t.dtype !== this.dtype)
					throw new Error("dtype of the new value (" + t.dtype + ") and previous value (" + this.dtype + ") must match");
				if (!y(t.shape, this.shape))
					throw new Error("shape of the new value (" + t.shape + ") and previous value (" + this.shape + ") must match");
				nt().disposeTensor(this),
					this.dataId = t.dataId,
					nt().registerTensor(this)
			}
			,
			i
	}(it);
	Object.defineProperty(at, Symbol.hasInstance, {
		value: function(t) {
			return t instanceof it && null != t.assign && t.assign instanceof Function
		}
	});
	var st, ut, ct, lt, ht, pt, ft, dt, mt, vt, gt = at.variable;
	(vt = st || (st = {})).R0 = "R0",
		vt.R1 = "R1",
		vt.R2 = "R2",
		vt.R3 = "R3",
		vt.R4 = "R4",
		vt.R5 = "R5",
		vt.R6 = "R6",
		(mt = ut || (ut = {})).float32 = "float32",
		mt.int32 = "int32",
		mt.bool = "int32",
		mt.complex64 = "complex64",
		(dt = ct || (ct = {})).float32 = "float32",
		dt.int32 = "int32",
		dt.bool = "bool",
		dt.complex64 = "complex64",
		(ft = lt || (lt = {})).float32 = "float32",
		ft.int32 = "float32",
		ft.bool = "float32",
		ft.complex64 = "complex64",
		(pt = ht || (ht = {})).float32 = "complex64",
		pt.int32 = "complex64",
		pt.bool = "complex64",
		pt.complex64 = "complex64";
	var yt = {
		float32: lt,
		int32: ut,
		bool: ct,
		complex64: ht
	};
	function xt(t, e) {
		if ("string" !== t && "string" !== e)
			return yt[t][e];
		if ("string" === t && "string" === e)
			return "string";
		throw new Error("Can not upcast " + t + " with " + e)
	}
	function wt(t) {
		return xt(t, "int32")
	}
	function bt(t, e) {
		if (t.dtype === e.dtype)
			return [t, e];
		var n = xt(t.dtype, e.dtype);
		return [t.cast(n), e.cast(n)]
	}
	function Et(t) {
		var e = [];
		return function t(e, n, r) {
			if (null != e)
				if (e instanceof it)
					n.push(e);
				else if (s = e,
				Array.isArray(s) || "object" == typeof s) {
					var o = e;
					for (var i in o) {
						var a = o[i];
						r.has(a) || (r.add(a),
							t(a, n, r))
					}
				}
			var s
		}(t, e, new Set),
			e
	}
	var Ct, St, _t = function() {
		function t(t, e, n) {
			this.backend = t,
				this.safeMode = e,
				this.debugMode = n,
				this.registeredVariables = {},
				this.nextTapeNodeId = 0,
				this.numBytes = 0,
				this.numTensors = 0,
				this.numStringTensors = 0,
				this.numDataBuffers = 0,
				this.profiling = !1,
				this.gradientScopeCount = 0,
				this.customGradientDepth = 0,
				this.scopeStack = [],
				this.keepTensors = new Set,
				this.tensorInfo = new WeakMap,
				this.profiler = new $(t),
				this.activeProfile = {
					newBytes: 0,
					newTensors: 0,
					peakBytes: 0,
					kernels: [],
					result: null
				}
		}
		return t.prototype.moveData = function(t) {
			this.write(t, this.readSync(t))
		}
			,
			t.prototype.tidy = function(t, e, n) {
				var r = this;
				void 0 === n && (n = !1);
				var o, i = null;
				if (null == e) {
					if ("function" != typeof t)
						throw new Error("Please provide a function to tidy()");
					e = t
				} else {
					if ("string" != typeof t && !(t instanceof String))
						throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
					if ("function" != typeof e)
						throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
					i = t
				}
				return this.scopedRun(function() {
					return r.startScope(i, n)
				}, function() {
					return r.endScope(o, n)
				}, function() {
					return (o = e())instanceof Promise && console.error("Cannot return a Promise inside of tidy."),
						o
				})
			}
			,
			t.prototype.scopedRun = function(t, e, n) {
				t();
				try {
					var r = n();
					return e(),
						r
				} catch (t) {
					throw e(),
						t
				}
			}
			,
			t.prototype.nextTensorId = function() {
				return t.nextTensorId++
			}
			,
			t.prototype.nextVariableId = function() {
				return t.nextVariableId++
			}
			,
			t.prototype.runKernel = function(t, e, n) {
				var r, o = this, i = [], a = function(t) {
					return i.push(t),
						t
				}, s = this.activeScope.name, u = this.numBytes, c = this.numTensors;
				if (this.scopedRun(function() {
					return o.customGradientDepth++
				}, function() {
					return o.customGradientDepth--
				}, function() {
					r = o.debugMode() ? o.profiler.profileKernel(s, function() {
						return t(o.backend, a)
					}) : t(o.backend, a)
				}),
					this.shouldRecord()) {
					var l = {
						id: this.nextTapeNodeId++,
						name: s,
						inputs: e,
						outputs: Array.isArray(r) ? r : [r]
					};
					null != n && (l.gradient = function(t) {
							return n(t, i)
						}
					),
						this.activeTape.push(l)
				}
				return this.profiling && this.activeProfile.kernels.push({
					name: s,
					bytesAdded: this.numBytes - u,
					totalBytesSnapshot: this.numBytes,
					tensorsAdded: this.numTensors - c,
					totalTensorsSnapshot: this.numTensors,
					inputShapes: Object.keys(e).map(function(t) {
						return e[t].shape
					}),
					outputShape: Array.isArray(r) ? r.map(function(t) {
						return t.shape
					}) : r.shape
				}),
					r
			}
			,
			t.prototype.registerTensor = function(t) {
				var e = this.tensorInfo.has(t.dataId) ? this.tensorInfo.get(t.dataId).refCount : 0;
				if (this.numTensors++,
				"string" === t.dtype && this.numStringTensors++,
				0 === e) {
					this.numDataBuffers++;
					var n = 0;
					"complex64" !== t.dtype && "string" !== t.dtype && (n = L(t.shape) * M(t.dtype)),
						this.tensorInfo.set(t.dataId, {
							backend: this.backend,
							dtype: t.dtype,
							shape: t.shape,
							bytes: n,
							refCount: 0
						}),
						this.numBytes += n,
						this.backend.register(t.dataId, t.shape, t.dtype)
				}
				this.tensorInfo.get(t.dataId).refCount++,
				t instanceof at || this.track(t)
			}
			,
			t.prototype.registerVariable = function(t) {
				if (null != this.registeredVariables[t.name])
					throw new Error("Variable with name " + t.name + " was already registered");
				this.registeredVariables[t.name] = t
			}
			,
			t.prototype.disposeTensor = function(t) {
				if (this.tensorInfo.has(t.dataId)) {
					this.keepTensors.has(t.id) && this.keepTensors.delete(t.id),
						this.numTensors--,
					"string" === t.dtype && this.numStringTensors--;
					var e = this.tensorInfo.get(t.dataId);
					e.refCount <= 1 ? ("complex64" !== t.dtype && (this.numBytes -= e.bytes),
						this.numDataBuffers--,
						e.backend.disposeData(t.dataId),
						this.tensorInfo.delete(t.dataId)) : this.tensorInfo.get(t.dataId).refCount--
				}
			}
			,
			t.prototype.disposeVariables = function() {
				for (var t in this.registeredVariables) {
					var e = this.registeredVariables[t];
					this.disposeTensor(e),
						delete this.registeredVariables[t]
				}
			}
			,
			t.prototype.memory = function() {
				var t = this.backend.memory();
				return t.numTensors = this.numTensors,
					t.numDataBuffers = this.numDataBuffers,
					t.numBytes = this.numBytes,
				0 < this.numStringTensors && (t.unreliable = !0,
				null == t.reasons && (t.reasons = []),
					t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),
					t
			}
			,
			t.prototype.profile = function(r) {
				return m(this, void 0, void 0, function() {
					var e, n;
					return C(this, function(t) {
						return this.profiling = !0,
							e = this.numBytes,
							n = this.numTensors,
							this.activeProfile.kernels = [],
							this.activeProfile.result = r(),
							this.profiling = !1,
							this.activeProfile.peakBytes = Math.max.apply(Math, this.activeProfile.kernels.map(function(t) {
								return t.totalBytesSnapshot
							})),
							this.activeProfile.newBytes = this.numBytes - e,
							this.activeProfile.newTensors = this.numTensors - n,
							[2, this.activeProfile]
					})
				})
			}
			,
			t.prototype.shouldRecord = function() {
				return null != this.activeTape && 0 === this.customGradientDepth
			}
			,
			t.prototype.addTapeNode = function(t, e, r) {
				var n = {};
				t.forEach(function(t, e) {
					n[e] = t
				});
				var o = {
					id: this.nextTapeNodeId++,
					name: this.activeScope.name,
					inputs: n,
					outputs: [e],
					gradient: function(t) {
						var n = {};
						return r(t).forEach(function(t, e) {
							n[e] = function() {
								return t
							}
						}),
							n
					}
				};
				this.activeTape.push(o)
			}
			,
			t.prototype.keep = function(t) {
				if (1 === this.scopeStack.length && this.safeMode)
					throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {...}) to avoid memory leaks.");
				return this.keepTensors.add(t.id),
					t
			}
			,
			t.prototype.startScope = function(t, e) {
				void 0 === e && (e = !1),
				e && 0 === this.gradientScopeCount && (this.activeTape = []),
				e && this.gradientScopeCount++;
				var n = {
					track: [],
					name: "unnamed scope"
				};
				t && (n.name = t),
					this.scopeStack.push(n),
					this.activeScope = n
			}
			,
			t.prototype.endScope = function(t, e) {
				var n = this;
				void 0 === e && (e = !1),
				e && (this.gradientScopeCount--,
				0 === this.gradientScopeCount && (this.activeTape = null));
				var r = new Set(this.keepTensors)
					, o = Et(t);
				o.forEach(function(t) {
					return r.add(t.id)
				});
				for (var i = 0; i < this.activeScope.track.length; i++) {
					var a = this.activeScope.track[i];
					r.has(a.id) || (null != this.activeTape ? o.push(a) : a.dispose())
				}
				var s = this.scopeStack.pop();
				this.activeScope = 0 === this.scopeStack.length ? null : this.scopeStack[this.scopeStack.length - 1],
					o.forEach(function(t) {
						!n.keepTensors.has(t.id) && function(t, e) {
							for (var n = 0; n < e.length; n++)
								if (e[n].id === t.id)
									return !0;
							return !1
						}(t, s.track) && n.track(t)
					})
			}
			,
			t.prototype.gradients = function(i, a, s, u) {
				var c = this;
				if (void 0 === u && (u = !1),
					A(0 < a.length, "gradients() received an empty list of xs."),
				null != s && "float32" !== s.dtype)
					throw new Error("dy must have 'float32' dtype, but has '" + s.dtype + "'");
				return this.tidy("gradients", function() {
					var t = i();
					A(t instanceof it, "The result y returned by f() must be a tensor.");
					var e = function(t, e, n) {
						for (var r = {}, o = {}, i = 0; i < e.length; i++)
							r[e[i].id] = !0;
						for (i = 0; i < t.length; i++) {
							var a = (d = t[i]).inputs;
							for (var s in a) {
								for (var u = a[s], c = !1, l = 0; l < e.length; l++)
									if (r[u.id]) {
										d.outputs.forEach(function(t) {
											return r[t.id] = !0
										}),
											c = !0,
											o[d.id] = !0;
										break
									}
								if (c)
									break
							}
						}
						var h = {};
						h[n.id] = !0;
						var p = {};
						for (i = t.length - 1; 0 <= i; i--)
							for (a = (d = t[i]).inputs,
								     l = 0; l < d.outputs.length; l++)
								if (h[d.outputs[l].id]) {
									for (var s in a)
										h[a[s].id] = !0,
											p[d.id] = !0;
									break
								}
						var f = [];
						for (i = 0; i < t.length; i++) {
							var d;
							if (o[(d = t[i]).id] && p[d.id]) {
								var m = {};
								for (var s in d.inputs) {
									var v = d.inputs[s];
									r[v.id] && (m[s] = v)
								}
								var g = Object.assign({}, d);
								g.inputs = m,
									g.outputs = d.outputs,
									f.push(g)
							}
						}
						return f
					}(c.activeTape, a, t);
					if (!u && 0 === e.length && 0 < a.length)
						throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
					var n, r, o = {};
					return o[t.id] = null == s ? (n = t.shape,
						r = G(L(n), "float32"),
						it.make(n, {
							values: r
						})) : s,
						function(u, c) {
							for (var t = function(t) {
								var e = c[t]
									, r = [];
								if (e.outputs.forEach(function(t) {
									var e = u[t.id];
									if (null != e)
										r.push(e);
									else {
										var n = it.make(t.shape, {
											values: H(t.size, t.dtype)
										}, t.dtype);
										r.push(n)
									}
								}),
								null == e.gradient)
									throw new Error("Cannot compute gradient: gradient function not found for " + e.name + ".");
								var n = e.gradient(1 === e.outputs.length ? r[0] : r);
								for (var o in e.inputs) {
									if (!(o in n))
										throw new Error("Cannot backprop through input " + o + ". Available gradients found: " + Object.keys(n) + ".");
									var i = n[o]();
									if ("float32" !== i.dtype)
										throw new Error("Error in gradient for op " + e.name + ". The gradient of input " + o + " must have 'float32' dtype, but has '" + i.dtype + "'");
									var a = e.inputs[o];
									if (!y(i.shape, a.shape))
										throw new Error("Error in gradient for op " + e.name + ". The gradient of input '" + o + "' has shape '" + i.shape + "', which does not match the shape of the input '" + a.shape + "'");
									if (null == u[a.id])
										u[a.id] = i;
									else {
										var s = u[a.id];
										u[a.id] = s.add(i),
											s.dispose()
									}
								}
							}, e = c.length - 1; 0 <= e; e--)
								t(e)
						}(o, e),
						{
							value: t,
							grads: a.map(function(t) {
								return o[t.id]
							})
						}
				}, !0)
			}
			,
			t.prototype.customGrad = function(i) {
				var n = this;
				return A(W(i), "The f passed in customGrad(f) must be a function."),
					function() {
						for (var r, t, o = [], e = 0; e < arguments.length; e++)
							o[e] = arguments[e];
						return A(o.every(function(t) {
							return t instanceof it
						}), "The args passed in customGrad(f)(x1, x2,...) must all be tensors"),
							n.scopedRun(function() {
								return n.customGradientDepth++
							}, function() {
								return n.customGradientDepth--
							}, function() {
								t = n.tidy(i.name, function() {
									var t = i.apply(void 0, o)
										, e = t.value
										, n = t.gradFunc;
									return A(e instanceof it, "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),
										A(W(n), "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),
										r = n,
										e
								}, !0)
							}),
						n.shouldRecord() && n.addTapeNode(o, t, function(t) {
							var e = r(t)
								, n = Array.isArray(e) ? e : [e];
							return A(n.length === o.length, "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),
								A(n.every(function(t) {
									return t instanceof it
								}), "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."),
								n
						}),
							t
					}
			}
			,
			t.prototype.write = function(t, e) {
				var n = this.tensorInfo.get(t);
				if ("string" === n.dtype) {
					var r = F(e);
					this.numBytes += r - n.bytes,
						n.bytes = r
				}
				this.backend !== n.backend && (n.backend.disposeData(t),
					n.backend = this.backend,
					this.backend.register(t, n.shape, n.dtype)),
					this.backend.write(t, e)
			}
			,
			t.prototype.readSync = function(t) {
				return this.tensorInfo.get(t).backend.readSync(t)
			}
			,
			t.prototype.read = function(t) {
				return this.tensorInfo.get(t).backend.read(t)
			}
			,
			t.prototype.fromPixels = function(t, e) {
				return this.backend.fromPixels(t, e)
			}
			,
			t.prototype.time = function(r) {
				return m(this, void 0, void 0, function() {
					var e, n;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return e = q(),
									[4, this.backend.time(r)];
							case 1:
								return (n = t.sent()).wallMs = q() - e,
									[2, n]
						}
					})
				})
			}
			,
			t.prototype.track = function(t) {
				if (1 === this.scopeStack.length && this.safeMode)
					throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {op();...}); to avoid memory leaks.");
				return null != this.activeScope && this.activeScope.track.push(t),
					t
			}
			,
			t.nextTensorId = 0,
			t.nextVariableId = 0,
			t
	}();
	(St = Ct || (Ct = {}))[St.NUMBER = 0] = "NUMBER",
		St[St.BOOLEAN = 1] = "BOOLEAN",
		St[St.STRING = 2] = "STRING";
	var Rt, Nt = [{
		name: "DEBUG",
		type: Ct.BOOLEAN
	}, {
		name: "IS_BROWSER",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_LAZILY_UNPACK",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_CPU_FORWARD",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_PACK",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_PACK_BATCHNORMALIZATION",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_PACK_CLIP",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_PACK_DEPTHWISECONV",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_CONV_IM2COL",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_MAX_TEXTURE_SIZE",
		type: Ct.NUMBER
	}, {
		name: "WEBGL_PAGING_ENABLED",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",
		type: Ct.NUMBER
	}, {
		name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_VERSION",
		type: Ct.NUMBER
	}, {
		name: "WEBGL_RENDER_FLOAT32_ENABLED",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_DOWNLOAD_FLOAT_ENABLED",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_FENCE_API_ENABLED",
		type: Ct.BOOLEAN
	}, {
		name: "WEBGL_SIZE_UPLOAD_UNIFORM",
		type: Ct.NUMBER
	}, {
		name: "BACKEND",
		type: Ct.STRING
	}, {
		name: "EPSILON",
		type: Ct.NUMBER
	}, {
		name: "PROD",
		type: Ct.BOOLEAN
	}, {
		name: "TENSORLIKE_CHECK_SHAPE_CONSISTENCY",
		type: Ct.BOOLEAN
	}];
	function kt(t) {
		try {
			if (null != a(t))
				return !0
		} catch (t) {
			return !1
		}
		return !1
	}
	var Dt = "tfjsflags";
	function Tt() {
		var e = {};
		if ("undefined" == typeof window || void 0 === window.location || void 0 === window.location.search)
			return e;
		var t, a, n = (t = window.location.search,
			a = {},
			t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function(t) {
				for (var e = [], n = 1; n < arguments.length; n++)
					e[n - 1] = arguments[n];
				return r = a,
					o = e[0],
					i = e[1],
					r[decodeURIComponent(o)] = decodeURIComponent(i || ""),
					e.join("=");
				var r, o, i
			}),
			a);
		if (Dt in n) {
			var o = {};
			n[Dt].split(",").forEach(function(t) {
				var e = t.split(":")
					, n = e[0]
					, r = e[1];
				o[n] = r
			}),
				Nt.forEach(function(t) {
					t.name in o && (console.log("Setting feature override from URL " + t.name + ": " + o[t.name]),
						t.type === Ct.NUMBER ? e[t.name] = +o[t.name] : t.type === Ct.BOOLEAN ? e[t.name] = "true" === o[t.name] : t.type === Ct.STRING ? e[t.name] = o[t.name] : console.warn("Unknown URL param: " + t.name + "."))
				})
		}
		return e
	}
	function It(t, e) {
		return null != t.getExtension(e)
	}
	function At(t, e) {
		var n = t.createFramebuffer()
			, r = t.createTexture();
		t.bindTexture(t.TEXTURE_2D, r);
		var o = 2 === e ? t.RGBA32F : t.RGBA;
		t.texImage2D(t.TEXTURE_2D, 0, o, 1, 1, 0, t.RGBA, t.FLOAT, null),
			t.bindFramebuffer(t.FRAMEBUFFER, n),
			t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0);
		var i = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
		return t.bindTexture(t.TEXTURE_2D, null),
			t.bindFramebuffer(t.FRAMEBUFFER, null),
			t.deleteTexture(r),
			t.deleteFramebuffer(n),
			i
	}
	var Mt = function() {
		function t(t) {
			this.features = {},
				this.registry = {},
			null != t && (this.features = t),
			this.get("DEBUG") && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
		}
		return t.setBackend = function(t, e) {
			if (void 0 === e && (e = !1),
				!(t in Ot.registry))
				throw new Error("Backend name '" + t + "' not found in registry");
			Ot.engine.backend = Ot.findBackend(t),
				Ot.backendName = t
		}
			,
			t.getBackend = function() {
				return Ot.initEngine(),
					Ot.backendName
			}
			,
			t.disposeVariables = function() {
				Ot.engine.disposeVariables()
			}
			,
			t.memory = function() {
				return Ot.engine.memory()
			}
			,
			t.profile = function(t) {
				return Ot.engine.profile(t)
			}
			,
			t.tidy = function(t, e) {
				return Ot.engine.tidy(t, e)
			}
			,
			t.dispose = function(t) {
				Et(t).forEach(function(t) {
					return t.dispose()
				})
			}
			,
			t.keep = function(t) {
				return Ot.engine.keep(t)
			}
			,
			t.time = function(t) {
				return Ot.engine.time(t)
			}
			,
			t.prototype.get = function(t) {
				return t in this.features || (this.features[t] = this.evaluateFeature(t)),
					this.features[t]
			}
			,
			t.prototype.getFeatures = function() {
				return this.features
			}
			,
			t.prototype.set = function(t, e) {
				this.features[t] = e
			}
			,
			t.prototype.getBestBackendName = function() {
				var e = this;
				if (0 === Object.keys(this.registry).length)
					throw new Error("No backend found in registry.");
				return Object.keys(this.registry).map(function(t) {
					return {
						name: t,
						entry: e.registry[t]
					}
				}).sort(function(t, e) {
					return e.entry.priority - t.entry.priority
				})[0].name
			}
			,
			t.prototype.evaluateFeature = function(t) {
				if ("DEBUG" === t)
					return !1;
				if ("IS_BROWSER" === t)
					return "undefined" != typeof window;
				if ("IS_NODE" === t)
					return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
				if ("IS_CHROME" === t)
					return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
				if ("WEBGL_CPU_FORWARD" === t)
					return !0;
				if ("WEBGL_PACK" === t)
					return !1;
				if ("WEBGL_PACK_BATCHNORMALIZATION" === t)
					return this.get("WEBGL_PACK");
				if ("WEBGL_PACK_CLIP" === t)
					return this.get("WEBGL_PACK");
				if ("WEBGL_PACK_DEPTHWISECONV" === t)
					return this.get("WEBGL_PACK");
				if ("WEBGL_LAZILY_UNPACK" === t)
					return this.get("WEBGL_PACK");
				if ("WEBGL_CONV_IM2COL" === t)
					return this.get("WEBGL_PACK");
				if ("WEBGL_PAGING_ENABLED" === t)
					return this.get("IS_BROWSER") && !this.get("PROD");
				if ("WEBGL_MAX_TEXTURE_SIZE" === t)
					return function(t) {
						if (null == Rt) {
							var e = a(t);
							Rt = e.getParameter(e.MAX_TEXTURE_SIZE)
						}
						return Rt
					}(this.get("WEBGL_VERSION"));
				if ("IS_TEST" === t)
					return !1;
				if ("BACKEND" === t)
					return this.getBestBackendName();
				if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION" === t) {
					var e = this.get("WEBGL_VERSION");
					return 0 === e ? 0 : function(t) {
						if (0 === t)
							return 0;
						var e = a(t);
						return It(e, "EXT_disjoint_timer_query_webgl2") && 2 === t ? 2 : It(e, "EXT_disjoint_timer_query") ? 1 : 0
					}(e)
				}
				if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE" === t)
					return 0 < this.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") && (n = navigator.userAgent || navigator.vendor || window.opera,
						!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))));
				var n, r;
				if ("HAS_WEBGL" === t)
					return 0 < this.get("WEBGL_VERSION");
				if ("WEBGL_VERSION" === t)
					return kt(2) ? 2 : kt(1) ? 1 : 0;
				if ("WEBGL_RENDER_FLOAT32_ENABLED" === t)
					return function(t) {
						if (0 === t)
							return !1;
						var e = a(t);
						if (1 === t) {
							if (!It(e, "OES_texture_float"))
								return !1
						} else if (!It(e, "EXT_color_buffer_float"))
							return !1;
						return At(e, t)
					}(this.get("WEBGL_VERSION"));
				if ("WEBGL_DOWNLOAD_FLOAT_ENABLED" === t)
					return function(t) {
						if (0 === t)
							return !1;
						var e = a(t);
						if (1 === t) {
							if (!It(e, "OES_texture_float"))
								return !1;
							if (!It(e, "WEBGL_color_buffer_float"))
								return !1
						} else if (!It(e, "EXT_color_buffer_float"))
							return !1;
						return At(e, t)
					}(this.get("WEBGL_VERSION"));
				if ("WEBGL_FENCE_API_ENABLED" === t)
					return 2 === (r = this.get("WEBGL_VERSION")) && null != a(r).fenceSync;
				if ("WEBGL_SIZE_UPLOAD_UNIFORM" === t)
					return this.get("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0;
				if ("TEST_EPSILON" === t)
					return 32 === this.backend.floatPrecision() ? .001 : .1;
				if ("EPSILON" === t)
					return 32 === this.backend.floatPrecision() ? 1e-7 : 1e-4;
				if ("PROD" === t)
					return !1;
				if ("TENSORLIKE_CHECK_SHAPE_CONSISTENCY" === t)
					return !this.get("PROD");
				throw new Error("Unknown feature " + t + ".")
			}
			,
			t.prototype.setFeatures = function(t) {
				this.features = Object.assign({}, t)
			}
			,
			t.prototype.reset = function() {
				this.features = Tt(),
				null != this.globalEngine && (this.globalEngine = null)
			}
			,
			Object.defineProperty(t.prototype, "backend", {
				get: function() {
					return this.engine.backend
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.findBackend = function(t) {
				return t in this.registry ? this.registry[t].backend : null
			}
			,
			t.prototype.registerBackend = function(t, e, n, r) {
				var o = this;
				if (void 0 === n && (n = 1),
				t in this.registry)
					return console.warn(t + " backend was already registered. Reusing existing backend"),
					null != r && r(function() {
						return o.engine
					}),
						!1;
				try {
					var i = e();
					return i.setDataMover({
						moveData: function(t) {
							return o.engine.moveData(t)
						}
					}),
						this.registry[t] = {
							backend: i,
							priority: n
						},
						!0
				} catch (e) {
					return console.warn("Registration of backend " + t + " failed"),
						console.warn(e.stack || e.message),
						!1
				}
			}
			,
			t.prototype.removeBackend = function(t) {
				if (!(t in this.registry))
					throw new Error(t + " backend not found in registry");
				this.registry[t].backend.dispose(),
					delete this.registry[t]
			}
			,
			Object.defineProperty(t.prototype, "engine", {
				get: function() {
					return this.initEngine(),
						this.globalEngine
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.initEngine = function() {
				var t = this;
				if (null == this.globalEngine) {
					this.backendName = this.get("BACKEND");
					var e = this.findBackend(this.backendName);
					this.globalEngine = new _t(e,!1,function() {
							return t.get("DEBUG")
						}
					)
				}
			}
			,
			t
	}();
	var Ft, Ot = (null == (Ft = function() {
		var t;
		if ("undefined" != typeof window)
			t = window;
		else {
			if ("undefined" == typeof process)
				throw new Error("Could not find a global object");
			t = process
		}
		return t
	}()).ENV && (Ft.ENV = new Mt(Tt()),
		ot(function() {
			return Ft.ENV.engine
		})),
		Ft.ENV), Pt = Object.freeze({
		EPSILON_FLOAT16: 1e-4,
		EPSILON_FLOAT32: 1e-7,
		Environment: Mt,
		ENV: Ot
	});
	function Bt(t, e) {
		if (A(W(t), "The f passed in variableGrads(f) must be a function"),
			A(null == e || Array.isArray(e) && e.every(function(t) {
				return t instanceof at
			}), "The varList passed in variableGrads(f, varList) must be an array of variables"),
		null == e)
			for (var n in e = [],
				Ot.engine.registeredVariables)
				e.push(Ot.engine.registeredVariables[n]);
		var r = e.length;
		A(0 < (e = e.filter(function(t) {
			return t.trainable
		})).length, "variableGrads() expects at least one of the input variables to be trainable, but none of the " + r + " variables is trainable.");
		var o = Ot.engine.gradients(t, e, null, !0)
			, i = o.value
			, a = o.grads;
		A(a.some(function(t) {
			return null != t
		}), "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),
			A(0 === i.rank, "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + i.rank + " tensor");
		var s = {};
		return e.forEach(function(t, e) {
			null != a[e] && (s[t.name] = a[e])
		}),
			{
				value: i,
				grads: s
			}
	}
	function Lt(t) {
		return Ot.engine.customGrad(t)
	}
	function Wt(t) {
		if (0 < t.filter(function(t) {
			return null == t
		}).length)
			throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
	}
	var zt = Mt.tidy
		, Ut = Mt.keep
		, Vt = Mt.dispose
		, Gt = Mt.time
		, Ht = Mt.profile;
	function qt() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t[e] = arguments[e];
		Ot.get("IS_TEST") || console.warn.apply(console, t)
	}
	function jt(t, e, n, r) {
		void 0 === r && (r = !0);
		var o = [];
		if (r)
			(o = o.concat(e.slice(0))).push(t[0] / n),
				o = o.concat(t.slice(1));
		else {
			o = o.concat(t[0]);
			for (var i = e.length, a = 0; a < i; ++a)
				o = o.concat([t[a + 1] / e[a], e[a]]);
			o = o.concat(t.slice(i + 1))
		}
		return o
	}
	function $t(t, e, n) {
		void 0 === n && (n = !0);
		var r = [];
		if (n) {
			r.push(e);
			for (var o = e + 1; o < t; ++o)
				o <= 2 * e ? (r.push(o),
					r.push(o - (e + 1))) : r.push(o)
		} else {
			var i = []
				, a = [];
			for (o = 1; o < t; ++o)
				2 * e + 1 <= o || o % 2 == 1 ? a.push(o) : i.push(o);
			r.push.apply(r, i),
				r.push(0),
				r.push.apply(r, a)
		}
		return r
	}
	function Kt(t, e, n, r) {
		void 0 === r && (r = !0);
		var o = [];
		r ? o.push(t[0] / n) : o.push(t[0] * n);
		for (var i = 1; i < t.length; ++i)
			i <= e.length ? r ? o.push(e[i - 1] * t[i]) : o.push(t[i] / e[i - 1]) : o.push(t[i]);
		return o
	}
	function Xt(t, e) {
		for (var n = [0], r = 0; r < e; ++r)
			n.push(t[r][0]);
		return n
	}
	function Yt(t, e, n) {
		for (var r = t.slice(0, 1), o = 0; o < n; ++o)
			r.push(t[o + 1] - e[o][0] - e[o][1]);
		return r
	}
	function Qt(t, e) {
		for (var n = 0; n < t.length; ++n)
			if (t[t.length - n - 1] !== e - 1 - n)
				return !1;
		return !0
	}
	function Jt(e, t) {
		for (var n = [], r = e.length, o = 0; o < r; o++)
			-1 === t.indexOf(o) && n.push(e[o]);
		return [n, t.map(function(t) {
			return e[t]
		})]
	}
	function Zt(t, e) {
		return function(t, e, n) {
			for (var r = t.length + e.length, o = [], i = 0, a = 0, s = 0; s < r; s++)
				-1 === n.indexOf(s) ? o.push(t[i++]) : o.push(e[a++]);
			return o
		}(t, e.map(function(t) {
			return 1
		}), e)
	}
	function te(t, e) {
		var n = e.length;
		return A((t = null == t ? e.map(function(t, e) {
			return e
		}) : [].concat(t)).every(function(t) {
			return -n <= t && t < n
		}), "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + t),
			A(t.every(function(t) {
				return T(t)
			}), "All values in axis param must be integers but got axis " + t),
			t.map(function(t) {
				return t < 0 ? n + t : t
			})
	}
	function ee(t, e, n) {
		A(Qt(e, n), t + " supports only inner-most axes for now. Got axes " + e + " and rank-" + n + " input.")
	}
	function ne(t, e) {
		if (Qt(t, e))
			return null;
		for (var n = [], r = 0; r < e; ++r)
			-1 === t.indexOf(r) && n.push(r);
		return t.forEach(function(t) {
			return n.push(t)
		}),
			n
	}
	function re(t) {
		return t.map(function(t, e) {
			return [e, t]
		}).sort(function(t, e) {
			return t[1] - e[1]
		}).map(function(t) {
			return t[0]
		})
	}
	function oe(t, e) {
		for (var n = [], r = e - t; r < e; ++r)
			n.push(r);
		return n
	}
	function ie(t, e) {
		for (var n = t[0].slice(), r = 1; r < t.length; r++)
			n[e] += t[r][e];
		return n
	}
	function ae(t, e) {
		if (t.rank < 1)
			throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t.rank + ".");
		if (e.rank < 1)
			throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
		if ("int32" !== e.dtype)
			throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
		if (e.shape[e.rank - 1] > t.rank)
			throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e.shape[e.rank - 1] + " vs. " + t.rank);
		if (0 === t.size)
			throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t.shape + ".");
		for (var n = e.shape, r = n[n.length - 1], o = 1, i = 0; i < n.length - 1; ++i)
			o *= n[i];
		var a = t.shape
			, s = n.slice();
		s.pop();
		var u = 1;
		for (i = r; i < t.rank; ++i)
			u *= a[i],
				s.push(a[i]);
		var c = U(t.shape).map(function(t) {
			return t / u
		}).concat([1]).slice(0, r);
		return [s, o, u, c]
	}
	function se(t) {
		return t <= 30 ? t : z(t, Math.floor(Math.sqrt(t)))
	}
	function ue(t, e, n) {
		if (e.rank < 1)
			throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
		if (t.rank < 1)
			throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t.rank + ".");
		if ("int32" !== e.dtype)
			throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e.dtype);
		if (n.length < 1)
			throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
		if (0 === n.length) {
			if (0 === e.size)
				throw new Error("Indices specified for empty output. indices shape: " + e.shape);
			if (0 === t.size)
				throw new Error("Updates specified for empty output. updates shape: " + t.shape)
		}
		!function(t, e, n) {
			var r = 1 < e.rank ? e.shape[e.rank - 1] : 1
				, o = 1 < e.rank ? e.rank - 1 : 1
				, i = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + e.shape + ", shape: " + t + ", sliceDim: " + r + ", and batchDim: " + o + ".";
			if (n.rank < o)
				throw new Error(i + " update.rank < " + o + ". ");
			if (t.length < r + (n.rank - o))
				throw new Error(i + " Output shape length < " + (r + (n.rank - o)));
			if (n.rank !== o + t.length - r)
				throw new Error(i + " update.rank != " + (o + t.length - r));
			for (var a = 0; a < o; ++a)
				if (n.shape[a] !== e.shape[a])
					throw new Error(i + " updates.shape[" + a + "] (" + n.shape[a] + ") != indices.shape[" + a + "] (" + e.shape[a] + ").");
			for (a = 0; a < n.rank - o; ++a)
				if (n.shape[a + o] !== t[a + r])
					throw new Error(i + " updates.shape[" + (a + o) + "] (" + n.shape[a + o] + ") != shape[" + (a + o) + "] (" + t[a + o] + ")")
		}(n, e, t)
	}
	function ce(t, e, n) {
		for (var r = 1 < e.rank ? e.shape[e.rank - 1] : 1, o = n.length, i = 1, a = r; a < o; ++a)
			i *= n[a];
		var s = r < 1 ? 1 : r
			, u = e.size / s
			, c = U(n).concat([1]);
		return {
			sliceRank: r,
			numUpdates: u,
			sliceSize: i,
			strides: c.slice(c.length - r, c.length),
			outputSize: L(n)
		}
	}
	function le(t, e, n, o, r, i, a, s, u) {
		if (void 0 === r && (r = 0),
		void 0 === i && (i = 0),
		void 0 === a && (a = 0),
		void 0 === s && (s = 0),
		void 0 === u && (u = 0),
		0 !== a)
			throw new Error("ellipsis mask is not yet supported");
		if (0 !== s)
			throw new Error("new axis mask is not yet supported");
		for (var c = [], l = [], h = [], p = 0; p < t.length; p++)
			c[p] = he(r, e, o, t, p),
				l[p] = pe(i, n, o, t, p),
			u & 1 << p && (l[p] = c[p] + 1,
				h.push(p));
		var f = new Array(t.length).fill(0);
		return f = f.map(function(t, e) {
			for (var n = 0, r = c[e]; !(0 < o[e] ? r >= l[e] : r <= l[e]); r += o[e])
				n += 1;
			return n
		}),
			[c, f, h]
	}
	function he(t, e, n, r, o) {
		var i = e[o];
		t & 1 << o && (i = 0 < n[o] ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
		var a = r[o];
		return i < 0 && (i += a),
			c(0, i, a - 1)
	}
	function pe(t, e, n, r, o) {
		var i = e[o];
		t & 1 << o && (i = 0 < n[o] ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
		var a = r[o];
		return i < 0 && (i += a),
			0 < n[o] ? c(0, i, a) : c(-1, i, a - 1)
	}
	function fe(t) {
		var e = t;
		if (I(t))
			return [t.length];
		if (!Array.isArray(t))
			return [];
		for (var n = []; e instanceof Array || I(e); )
			n.push(e.length),
				e = e[0];
		return t instanceof Array && Ot.get("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t(e, n, r) {
			if (r = r || [],
			e instanceof Array || I(e)) {
				A(0 < n.length, function() {
					return "Element arr[" + r.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
				}),
					A(e.length === n[0], function() {
						return "Element arr[" + r.join("][") + "] should have " + n[0] + " elements, but has " + e.length + " elements"
					});
				for (var o = n.slice(1), i = 0; i < e.length; ++i)
					t(e[i], o, r.concat(i))
			} else
				A(0 === n.length, function() {
					return "Element arr[" + r.join("][") + "] is a primitive, but should be an array/TypedArray of " + n[0] + " elements"
				})
		}(t, n, []),
			n
	}
	function de(t, e, n, r) {
		if (null != t && ("numeric" !== t && t !== e || "numeric" === t && "string" === e))
			throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + t + " tensor, but got " + e + " tensor")
	}
	function me(t, e, n, r) {
		if (void 0 === r && (r = "numeric"),
		t instanceof it)
			return de(r, t.dtype, e, n),
				t;
		var o = B(t);
		if ("string" !== o && 0 <= ["bool", "int32", "float32"].indexOf(r) && (o = r),
			de(r, o, e, n),
		!I(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t)
			throw new Error("Argument '" + e + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + t.constructor.name + "'");
		var i = fe(t);
		I(t) || Array.isArray(t) || (t = [t]);
		var a = "string" !== o ? V(t, o, Ot.get("DEBUG")) : d(t);
		return it.make(i, {
			values: a
		}, o)
	}
	function ve(t, n, r) {
		if (!Array.isArray(t))
			throw new Error("Argument " + n + " passed to " + r + " must be a `Tensor[]` or `TensorLike[]`");
		return t.map(function(t, e) {
			return me(t, n + "[" + e + "]", r)
		})
	}
	function ge(t) {
		var e = Object.keys(t);
		if (1 !== e.length)
			throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e.length + " keys.");
		var r = e[0]
			, o = t[r];
		r.endsWith("_") && (r = r.substring(0, r.length - 1));
		var n = function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			Ot.engine.startScope(r);
			try {
				var n = o.apply(void 0, t);
				return n instanceof Promise && console.error("Cannot return a Promise inside of tidy."),
					Ot.engine.endScope(n),
					n
			} catch (t) {
				throw Ot.engine.endScope(null),
					t
			}
		};
		return Object.defineProperty(n, "name", {
			value: r,
			configurable: !0
		}),
			n
	}
	var ye = ge({
		softmax_: function(t, r) {
			void 0 === r && (r = -1);
			var e = me(t, "logits", "softmax");
			if (-1 === r && (r = e.rank - 1),
			r !== e.rank - 1)
				throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and dim was " + r);
			return Lt(function(t) {
				var e = t.logSumExp([r], !0)
					, n = t.toFloat().sub(e).exp();
				return {
					value: n,
					gradFunc: function(t) {
						var e = t.mul(n);
						return e.sub(e.sum([r], !0).mul(n))
					}
				}
			})(e)
		}
	})
		, xe = ge({
		logSoftmax_: function(t, o) {
			void 0 === o && (o = -1);
			var e = me(t, "logits", "logSoftmax");
			if (-1 === o && (o = e.rank - 1),
			o !== e.rank - 1)
				throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and axis was " + o);
			return Lt(function(t) {
				var e = t.max(o, !0)
					, n = t.sub(e)
					, r = n.toFloat().sub(n.exp().sum(o, !0).log());
				return {
					value: r,
					gradFunc: function(t) {
						var e = r.exp();
						return t.sub(t.sum(o, !0).mul(e))
					}
				}
			})(e)
		}
	});
	var we = ge({
		complex_: function(t, e) {
			var n = me(t, "real", "complex")
				, r = me(e, "imag", "complex");
			return f(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex()."),
				Ot.engine.runKernel(function(t) {
					return t.complex(n, r)
				}, {
					$real: n,
					$imag: r
				})
		}
	})
		, be = ge({
		real_: function(t) {
			var e = me(t, "input", "real");
			return Ot.engine.runKernel(function(t) {
				return t.real(e)
			}, {
				$input: e
			})
		}
	})
		, Ee = ge({
		imag_: function(t) {
			var e = me(t, "input", "imag");
			return Ot.engine.runKernel(function(t) {
				return t.imag(e)
			}, {
				$input: e
			})
		}
	});
	function Ce(t, e, n) {
		if (null == n && (n = B(t)),
		"complex64" === n)
			throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
		if (!I(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t)
			throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
		var r = fe(t);
		if (null != e) {
			var o = L(e)
				, i = L(r);
			A(o === i, function() {
				return "Based on the provided shape, [" + e + "], the tensor should have " + o + " values but has " + i
			});
			for (var a = 0; a < r.length; ++a) {
				var s = r[a]
					, u = a !== r.length - 1 || s !== L(e.slice(a));
				A(r[a] === e[a] || !u, function() {
					return "Error creating a new Tensor. Inferred shape (" + r + ") does not match the provided shape (" + e + "). "
				})
			}
		}
		return I(t) || Array.isArray(t) || (t = [t]),
			e = e || r,
			t = "string" !== n ? V(t, n, Ot.get("DEBUG")) : d(t),
			it.make(e, {
				values: t
			}, n)
	}
	function Se(t, e) {
		if ((I(t) || Array.isArray(t)) && "complex64" !== e)
			throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
		return Ce(t, [], e)
	}
	function _e(t, e) {
		p(t);
		var n = fe(t);
		if (1 !== n.length)
			throw new Error("tensor1d() requires values to be a flat/TypedArray");
		return Ce(t, n, e)
	}
	function Re(t, e, n) {
		if (p(t),
		null != e && 2 !== e.length)
			throw new Error("tensor2d() requires shape to have two numbers");
		var r = fe(t);
		if (2 !== r.length && 1 !== r.length)
			throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
		if (1 === r.length && null == e)
			throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
		return Ce(t, e = e || r, n)
	}
	function Ne(t, e, n) {
		if (p(t),
		null != e && 3 !== e.length)
			throw new Error("tensor3d() requires shape to have three numbers");
		var r = fe(t);
		if (3 !== r.length && 1 !== r.length)
			throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
		if (1 === r.length && null == e)
			throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
		return Ce(t, e = e || r, n)
	}
	function ke(t, e, n) {
		if (p(t),
		null != e && 4 !== e.length)
			throw new Error("tensor4d() requires shape to have four numbers");
		var r = fe(t);
		if (4 !== r.length && 1 !== r.length)
			throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
		if (1 === r.length && null == e)
			throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
		return Ce(t, e = e || r, n)
	}
	function De(t, e, n) {
		if (p(t),
		null != e && 5 !== e.length)
			throw new Error("tensor5d() requires shape to have five numbers");
		var r = fe(t);
		if (5 !== r.length && 1 !== r.length)
			throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
		if (1 === r.length && null == e)
			throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
		return Ce(t, e = e || r, n)
	}
	function Te(t, e, n) {
		if (p(t),
		null != e && 6 !== e.length)
			throw new Error("tensor6d() requires shape to have six numbers");
		var r = fe(t);
		if (6 !== r.length && 1 !== r.length)
			throw new Error("tensor6d() requires values to be number[][][][] or flat/TypedArray");
		if (1 === r.length && null == e)
			throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
		return Ce(t, e = e || r, n)
	}
	function Ie(t, e) {
		if (void 0 === e && (e = "float32"),
		"complex64" === e) {
			var n = Ie(t, "float32")
				, r = Ie(t, "float32");
			return we(n, r)
		}
		var o = G(L(t), e);
		return it.make(t, {
			values: o
		}, e)
	}
	function Ae(t, e) {
		if (void 0 === e && (e = "float32"),
		"complex64" === e) {
			var n = Ae(t, "float32")
				, r = Ae(t, "float32");
			return we(n, r)
		}
		var o = H(L(t), e);
		return it.make(t, {
			values: o
		}, e)
	}
	function Me(t, e, n) {
		var r = R(n = n || B(e), L(t));
		return r.fill(e),
			it.make(t, {
				values: r
			}, n)
	}
	function Fe(t, e, n) {
		if (0 === n)
			throw new Error("Cannot request zero samples");
		var r = (e - t) / (n - 1)
			, o = H(n, "float32");
		o[0] = t;
		for (var i = 1; i < o.length; i++)
			o[i] = o[i - 1] + r;
		return _e(o, "float32")
	}
	function Oe(t, e, n, r) {
		if (void 0 === n && (n = 1),
		void 0 === r && (r = "float32"),
		0 === n)
			throw new Error("Cannot have a step of zero");
		if (t === e || t < e && n < 0 || e < t && 1 < n)
			return Ae([0], r);
		var o = H(Math.abs(Math.ceil((e - t) / n)), r);
		e < t && 1 === n && (n = -1),
			o[0] = t;
		for (var i = 1; i < o.length; i++)
			o[i] = o[i - 1] + n;
		return _e(o, r)
	}
	var Pe = ge({
		onesLike_: function(t) {
			var e = me(t, "x", "onesLike");
			return Ie(e.shape, e.dtype)
		}
	})
		, Be = ge({
		zerosLike_: function(t) {
			var e = me(t, "x", "zerosLike");
			return Ae(e.shape, e.dtype)
		}
	})
		, Le = function() {
		function t(t) {
			this.dataMover = t,
				this.data = new WeakMap
		}
		return t.prototype.get = function(t) {
			return this.data.has(t) || this.dataMover.moveData(t),
				this.data.get(t)
		}
			,
			t.prototype.set = function(t, e) {
				this.data.set(t, e)
			}
			,
			t.prototype.has = function(t) {
				return this.data.has(t)
			}
			,
			t.prototype.delete = function(t) {
				return this.data.delete(t)
			}
			,
			t
	}()
		, We = function() {
		function t() {}
		return t.prototype.time = function(t) {
			throw new Error("Not yet implemented.")
		}
			,
			t.prototype.read = function(t) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.readSync = function(t) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.disposeData = function(t) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.write = function(t, e) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.fromPixels = function(t, e) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.register = function(t, e, n) {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.memory = function() {
				throw new Error("Not yet implemented.")
			}
			,
			t.prototype.floatPrecision = function() {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.batchMatMul = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.slice = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.stridedSlice = function(t, e, n, r, o, i, a, s, u) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.reverse = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.concat = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.neg = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.add = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.addN = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.subtract = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.multiply = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.realDivide = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.floorDiv = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sum = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.prod = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.unsortedSegmentSum = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.argMin = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.argMax = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.equal = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.notEqual = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.less = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.lessEqual = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.greater = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.greaterEqual = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.logicalNot = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.logicalAnd = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.logicalOr = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.where = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.select = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.topk = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.min = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.minimum = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.mod = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.max = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.maximum = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.all = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.any = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.squaredDifference = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.ceil = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.floor = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.round = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sign = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.pow = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.exp = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.expm1 = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.log = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.log1p = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sqrt = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.rsqrt = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.square = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.reciprocal = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.relu = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.elu = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.eluDer = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.selu = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.int = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.clip = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.abs = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.complexAbs = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sigmoid = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.softplus = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sin = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.cos = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.tan = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.asin = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.acos = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.atan = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.atan2 = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sinh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.cosh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.tanh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.asinh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.acosh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.atanh = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.erf = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.step = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv2d = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv2dDerInput = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv2dDerFilter = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.depthwiseConv2D = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.depthwiseConv2DDerInput = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.depthwiseConv2DDerFilter = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv3d = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv3dDerInput = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.conv3dDerFilter = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.maxPool = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.maxPoolBackprop = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.avgPool = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.avgPoolBackprop = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.reshape = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.cast = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.tile = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.pad = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.transpose = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.gather = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.gatherND = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.scatterND = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.batchToSpaceND = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.spaceToBatchND = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.resizeBilinear = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.resizeBilinearBackprop = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.resizeNearestNeighbor = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.resizeNearestNeighborBackprop = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.batchNormalization = function(t, e, n, r, o, i) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.localResponseNormalization4D = function(t, e, n, r, o) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.LRNGrad = function(t, e, n, r, o, i, a) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.multinomial = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.oneHot = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.cumsum = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.nonMaxSuppression = function(t, e, n, r, o) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.fft = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.ifft = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.complex = function(t, e) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.real = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.imag = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.cropAndResize = function(t, e, n, r, o, i) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.depthToSpace = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.split = function(t, e, n) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.sparseToDense = function(t, e, n, r) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.setDataMover = function(t) {
				throw new Error("Not yet implemented")
			}
			,
			t.prototype.dispose = function() {
				throw new Error("Not yet implemented")
			}
			,
			t
	}();
	function ze(t, e, n) {
		if ("complex64" === e) {
			if ("complex64" === t.dtype)
				return t.clone();
			var r = Ae(t.shape)
				, o = t.toFloat()
				, i = n.complex(o, r);
			return r.dispose(),
				o.dispose(),
				i
		}
		if (!D(t.dtype, e))
			return it.make(t.shape, {
				dataId: t.dataId
			}, e);
		if ("complex64" === t.dtype) {
			var a = n.real(t);
			return i = a.cast(e),
				a.dispose(),
				i
		}
		if ("int32" === e)
			return n.int(t);
		if ("bool" !== e)
			throw new Error("Error in Cast: unknown dtype argument (" + e + ")");
		var s = Se(0, t.dtype);
		return i = n.notEqual(t, s),
			s.dispose(),
			i
	}
	function Ue(t, e) {
		return it.make(e, {
			dataId: t.dataId
		}, t.dtype)
	}
	function Ve(t, e) {
		if (t.length !== e.length)
			throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t.length + ", imag: " + e.length + ".");
		for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2)
			n[r] = t[r / 2],
				n[r + 1] = e[r / 2];
		return n
	}
	function Ge(t, e) {
		return {
			real: t[2 * e],
			imag: t[2 * e + 1]
		}
	}
	function He(t, e, n, r, o) {
		for (var i = Array.from(e).map(function(t, e) {
			return {
				score: t,
				boxIndex: e
			}
		}).filter(function(t) {
			return t.score > o
		}).sort(function(t, e) {
			return e.score - t.score
		}), a = [], s = 0; s < i.length; s++) {
			var u = i[s]
				, c = u.score
				, l = u.boxIndex;
			if (c < o)
				break;
			for (var h = !1, p = a.length - 1; 0 <= p; --p)
				if (qe(t, l, a[p]) >= r) {
					h = !0;
					break
				}
			if (!h && (a.push(l),
			a.length >= n))
				break
		}
		return _e(a, "int32")
	}
	function qe(t, e, n) {
		var r = t.subarray(4 * e, 4 * e + 4)
			, o = t.subarray(4 * n, 4 * n + 4)
			, i = Math.min(r[0], r[2])
			, a = Math.min(r[1], r[3])
			, s = Math.max(r[0], r[2])
			, u = Math.max(r[1], r[3])
			, c = Math.min(o[0], o[2])
			, l = Math.min(o[1], o[3])
			, h = Math.max(o[0], o[2])
			, p = Math.max(o[1], o[3])
			, f = (s - i) * (u - a)
			, d = (h - c) * (p - l);
		if (f <= 0 || d <= 0)
			return 0;
		var m = Math.max(i, c)
			, v = Math.max(a, l)
			, g = Math.min(s, h)
			, y = Math.min(u, p)
			, x = Math.max(g - m, 0) * Math.max(y - v, 0);
		return x / (f + d - x)
	}
	function je(n, t, r) {
		var o = Array(n.rank).fill(0)
			, i = n.shape.slice();
		return t.map(function(t) {
			i[r] = t;
			var e = n.slice(o, i);
			return o[r] += t,
				e
		})
	}
	function $e(t, e, n, r, o) {
		for (var i = e[e.length - 1], a = [t.length / i, i], s = a[0], u = a[1], c = _(n, s * r), l = _("int32", s * r), h = 0; h < s; h++) {
			for (var p = h * u, f = t.subarray(p, p + u), d = [], m = 0; m < f.length; m++)
				d.push({
					value: f[m],
					index: m
				});
			d.sort(function(t, e) {
				return e.value - t.value
			});
			var v = h * r
				, g = c.subarray(v, v + r)
				, y = l.subarray(v, v + r);
			for (m = 0; m < r; m++)
				g[m] = d[m].value,
					y[m] = d[m].index
		}
		var x = e.slice();
		return x[x.length - 1] = r,
			[Ce(c, x, n), Ce(l, x, "int32")]
	}
	var Ke = function(t, e, n) {
		this.variableNames = ["A"];
		var r = t.windowSize
			, o = t.batchSize
			, i = t.inSize
			, a = Math.ceil(i / r);
		n || this.variableNames.push("bestIndicesA"),
			this.outputShape = [o, a];
		var s = "max" === e ? ">" : "<"
			, u = n ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
		this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r + "; i++) {\n          int inIdx = " + u + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "
	}
		, Xe = function(t) {
		this.variableNames = ["dy"],
			this.outputShape = t.inShape;
		var e = t.filterHeight
			, n = t.filterWidth
			, r = t.strideHeight
			, o = t.strideWidth
			, i = t.dilationHeight
			, a = t.dilationWidth
			, s = t.effectiveFilterHeight
			, u = t.effectiveFilterWidth
			, c = s - 1 - t.padInfo.top
			, l = u - 1 - t.padInfo.left
			, h = 1 / (e * n);
		this.userCode = "\n      const ivec2 pads = ivec2(" + c + ", " + l + ");\n      const float avgMultiplier = float(" + h + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + ";\n            wR += " + i + ") {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u + ";\n            wC+= " + a + ") {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	};
	function Ye(t, e) {
		for (var n = t.length, r = [], o = 0; o < n; o++) {
			var i = n - 1 - o
				, a = t[i] || 1;
			1 < (e[e.length - 1 - o] || 1) && 1 === a && r.unshift(i)
		}
		return r
	}
	function Qe(t, e) {
		for (var n = [], r = 0; r < e.length; r++) {
			var o = t[t.length - r - 1]
				, i = e.length - r - 1
				, a = e[i];
			(null == o || 1 === o && 1 < a) && n.unshift(i)
		}
		return n
	}
	function Je(t, e) {
		for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
			var i = t[t.length - o - 1];
			null == i && (i = 1);
			var a = e[e.length - o - 1];
			if (null == a && (a = 1),
			1 === i)
				n.unshift(a);
			else if (1 === a)
				n.unshift(i);
			else {
				if (i !== a)
					throw Error("Operands could not be broadcast together with shapes " + t + " and " + e + ".");
				n.unshift(i)
			}
		}
		return n
	}
	var Ze = function(t, e, n, r, o, i) {
		this.outputShape = [],
			this.supportsBroadcasting = !0,
			this.variableNames = ["x", "mean", "variance"],
			Je(t, e),
			Je(t, n);
		var a = "0.0";
		null != r && (Je(t, r),
			this.variableNames.push("offset"),
			a = "getOffsetAtOutCoords()");
		var s = "1.0";
		null != o && (Je(t, o),
			this.variableNames.push("scale"),
			s = "getScaleAtOutCoords()"),
			this.outputShape = t,
			this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + a + ";\n        float scale = " + s + ";\n        float inv = scale * inversesqrt(variance + float(" + i + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    "
	}
		, tn = function(t, e, n, r, o, i) {
		this.supportsBroadcasting = !0,
			this.usesPackedTextures = !0,
			this.variableNames = ["x", "mean", "variance"],
			Je(t, e),
			Je(t, n);
		var a = "vec4(0.0)";
		null != r && (Je(t, r),
			this.variableNames.push("offset"),
			a = "getOffsetAtOutCoords()");
		var s = "vec4(1.0)";
		null != o && (Je(t, o),
			this.variableNames.push("scale"),
			s = "getScaleAtOutCoords()"),
			this.outputShape = t,
			this.userCode = "\n      void main() {\n        vec4 offset = " + a + ";\n        vec4 scale = " + s + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + i + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    "
	}
		, en = "return areal * breal - aimag * bimag;"
		, nn = "return areal * bimag + aimag * breal;"
		, rn = function(t, e, n) {
		this.variableNames = ["AReal", "AImag", "BReal", "BImag"],
			this.supportsBroadcasting = !0,
			this.outputShape = Je(e, n),
			this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    "
	}
		, on = "return a + b;"
		, an = "return a - b;"
		, sn = function() {
		function t(t, e, n) {
			this.variableNames = ["A", "B"],
				this.supportsBroadcasting = !0,
				this.outputShape = Je(e, n),
				this.userCode = "\n      uniform float NAN;\n      float binaryOperation(float a, float b) {\n        " + t + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
		}
		return t.prototype.getCustomSetupFunc = function() {
			var n = this;
			return function(t, e) {
				null == n.startLoc && (n.startLoc = t.getUniformLocationNoThrow(e, "NAN"),
				null == n.startLoc) || t.gl.uniform1f(n.startLoc, NaN)
			}
		}
			,
			t
	}()
		, un = function(t, e, n) {
		this.variableNames = ["A"],
			this.outputShape = t,
			this.userCode = "\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, float(" + e + "), float(" + n + ")));\n      }\n    "
	}
		, cn = function(t, e, n) {
		this.variableNames = ["A"],
			this.usesPackedTextures = !0,
			this.outputShape = t,
			this.userCode = "\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (hasNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(" + e + "), vec4(" + n + ")));\n      }\n    "
	}
		, ln = function(t) {
		this.variableNames = ["real", "imag"],
			this.outputShape = t,
			this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "
	}
		, hn = function(t, e) {
		this.variableNames = ["A", "B"],
			this.outputShape = [],
			this.outputShape = ie([t, e], 1),
			this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < " + t[1] + ") {\n          value = getA(yR, yC);\n        } else {\n          yC -= " + t[1] + ";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    "
	}
		, pn = function(t) {
		this.variableNames = ["x", "dy"],
			this.outputShape = t.filterShape;
		var e = t.strideHeight
			, n = t.strideWidth
			, r = t.padInfo.top
			, o = t.padInfo.left;
		this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, fn = function(t) {
		this.variableNames = ["dy", "W"],
			this.outputShape = t.inShape;
		var e = t.filterHeight
			, n = t.filterWidth
			, r = t.strideHeight
			, o = t.strideWidth
			, i = e - 1 - t.padInfo.top
			, a = n - 1 - t.padInfo.left;
		this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + a + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, dn = function(t) {
		this.variableNames = ["x", "dy"],
			this.outputShape = t.filterShape;
		var e = t.strideDepth
			, n = t.strideHeight
			, r = t.strideWidth
			, o = t.padInfo.front
			, i = t.padInfo.top
			, a = t.padInfo.left;
		this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t.outDepth + "; yF++) {\n            int xF = wF + yF * " + e + " - " + o + ";\n\n            if (xF < 0 || xF >= " + t.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n              int xR = wR + yR * " + n + " - " + i + ";\n\n              if (xR < 0 || xR >= " + t.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n                int xC = wC + yC * " + r + " - " + a + ";\n\n                if (xC < 0 || xC >= " + t.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, mn = function(t) {
		this.variableNames = ["dy", "W"],
			this.outputShape = t.inShape;
		var e = t.filterDepth
			, n = t.filterHeight
			, r = t.filterWidth
			, o = t.strideDepth
			, i = t.strideHeight
			, a = t.strideWidth
			, s = e - 1 - t.padInfo.front
			, u = n - 1 - t.padInfo.top
			, c = r - 1 - t.padInfo.left;
		this.userCode = "\n      const ivec3 pads = ivec3(" + s + ", " + u + ", " + c + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + e + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + o + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + e + " - 1 - wF;\n\n          for (int wR = 0; wR < " + n + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + n + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, vn = function(t) {
		this.variableNames = ["x", "dy"],
			this.outputShape = t.filterShape;
		var e = t.strideHeight
			, n = t.strideWidth
			, r = t.padInfo.top
			, o = t.padInfo.left
			, i = t.outChannels / t.inChannels;
		this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + i + " + dm;\n\n        float dotProd = 0.0;\n\n        // TODO: Vec4 over the batch size\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, gn = function(t) {
		this.variableNames = ["dy", "W"],
			this.outputShape = t.inShape;
		var e = t.filterHeight
			, n = t.filterWidth
			, r = t.strideHeight
			, o = t.strideWidth
			, i = e - 1 - t.padInfo.top
			, a = n - 1 - t.padInfo.left
			, s = t.outChannels / t.inChannels;
		this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + a + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            // TODO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s + "; dm++) {\n              int d2 = d1 * " + s + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, yn = function(t) {
		this.variableNames = ["x", "W"],
			this.outputShape = t.outShape;
		var e = t.padInfo.top
			, n = t.padInfo.left
			, r = t.strideHeight
			, o = t.strideWidth
			, i = t.dilationHeight
			, a = t.dilationWidth
			, s = t.filterHeight
			, u = t.filterWidth
			, c = 4 * Math.floor(t.inChannels / 4)
			, l = t.inChannels % 4;
		this.userCode = "\n      const ivec2 strides = ivec2(" + r + ", " + o + ");\n      const ivec2 pads = ivec2(" + e + ", " + n + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + "; wR++) {\n          int xR = xRCorner + wR * " + i + ";\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + u + "; wC++) {\n            int xC = xCCorner + wC * " + a + ";\n\n            if (xC < 0 || xC >= " + t.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + c + "; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if (" + (1 === l) + ") {\n              dotProd +=\n                getX(batch, xR, xC, " + c + ") *\n                getW(wR, wC, " + c + ", d2);\n            } else if (" + (2 === l) + ") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, " + c + "),\n                getX(batch, xR, xC, " + c + " + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, " + c + ", d2),\n                getW(wR, wC, " + c + " + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if (" + (3 === l) + ") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, " + c + "),\n                getX(batch, xR, xC, " + c + " + 1),\n                getX(batch, xR, xC, " + c + " + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, " + c + ", d2),\n                getW(wR, wC, " + c + " + 1, d2),\n                getW(wR, wC, " + c + " + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, xn = function(t) {
		this.variableNames = ["x", "W"],
			this.outputShape = t.outShape;
		var e = t.padInfo.front
			, n = t.padInfo.top
			, r = t.padInfo.left
			, o = t.strideDepth
			, i = t.strideHeight
			, a = t.strideWidth
			, s = t.dilationDepth
			, u = t.dilationHeight
			, c = t.dilationWidth
			, l = t.filterDepth
			, h = t.filterHeight
			, p = t.filterWidth
			, f = 4 * Math.floor(t.inChannels / 4)
			, d = t.inChannels % 4;
		this.userCode = "\n      const ivec3 strides = ivec3(" + o + ", " + i + ", " + a + ");\n      const ivec3 pads = ivec3(" + e + ", " + n + ", " + r + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l + "; wF++) {\n          int xF = xFCorner + wF * " + s + ";\n\n          if (xF < 0 || xF >= " + t.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h + "; wR++) {\n            int xR = xRCorner + wR * " + u + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + p + "; wC++) {\n              int xC = xCCorner + wC * " + c + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + f + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === d) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + f + ") *\n                  getW(wF, wR, wC, " + f + ", d2);\n              } else if (" + (2 === d) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + f + "),\n                  getX(batch, xF, xR, xC, " + f + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + f + ", d2),\n                  getW(wF, wR, wC, " + f + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === d) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + f + "),\n                  getX(batch, xF, xR, xC, " + f + " + 1),\n                  getX(batch, xF, xR, xC, " + f + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + f + ", d2),\n                  getW(wF, wR, wC, " + f + " + 1, d2),\n                  getW(wF, wR, wC, " + f + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, wn = function(t) {
		this.variableNames = ["x", "W"],
			this.outputShape = t.outShape;
		var e = t.inHeight
			, n = t.inWidth
			, r = t.padInfo.top
			, o = t.padInfo.left
			, i = t.strideHeight
			, a = t.strideWidth
			, s = t.dilationHeight
			, u = t.dilationWidth
			, c = t.filterHeight
			, l = t.filterWidth
			, h = t.outChannels / t.inChannels;
		this.userCode = "\n      const ivec2 strides = ivec2(" + i + ", " + a + ");\n      const ivec2 pads = ivec2(" + r + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + h + ";\n        int q = d2 - d1 * " + h + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + c + "; wR++) {\n          int xR = xRCorner + wR * " + s + ";\n\n          if (xR < 0 || xR >= " + e + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + l + "; wC++) {\n            int xC = xCCorner + wC * " + u + ";\n\n            if (xC < 0 || xC >= " + n + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, bn = function(t) {
		this.variableNames = ["x", "W"],
			this.usesPackedTextures = !0,
			this.outputShape = t.outShape;
		for (var e = t.inHeight, n = t.inWidth, r = t.padInfo.top, o = t.padInfo.left, i = t.strideHeight, a = t.strideWidth, s = t.filterHeight, u = t.filterWidth, c = Math.ceil((u + 1) / 2), l = "int xR; int xC;", h = 0; h < s; h++) {
			for (var p = -o; p < 2 * c; p++)
				l += "vec4 " + En(h, p) + " = vec4(0.);";
			for (p = 0; p < u; p++)
				l += "\n          vec4 wR" + h + "C" + p + " = vec4(0.);\n          vec4 xR" + h + "C" + p + " = vec4(0.);"
		}
		for (h = 0; h < s; h++)
			for (p = 0; p < c; p++) {
				var f = 2 * p
					, d = 2 * p + o;
				l += "\n          xR = xRCorner + " + h + ";\n          xC = xCCorner + " + d + ";\n\n          if(xR >= 0 && xR < " + e + " && xC >= 0 && xC < " + n + ") {\n            " + En(h, d) + " = getX(batch, xR, xC, d1);\n          }",
					0 === o ? f < u && p === c - 1 && (1 < a && (l += "\n                vec4 " + En(h, d + 2) + " = vec4(0.);\n\n                if(xR >= 0 && xR < " + e + " && xC + 2 < " + n + ") {\n                  " + En(h, d + 2) + " = getX(batch, xR, xC + 2, d1);\n                }"),
						l += "\n              xR" + h + "C" + d + " = " + Cn(h, d, a, o) + ";\n            ") : 0 === p && (l += "\n            if(xR >= 0 && xR < " + e + " && xC - 2 >= 0) {\n              " + En(h, d - 2) + " = getX(batch, xR, xC - 2, d1);\n            }"),
				0 < f && (l += "xR" + h + "C" + (d - 2) + " =\n            " + Cn(h, d - 2, a, o) + ";"),
				0 <= d - 1 && d - 1 < u && (l += "xR" + h + "C" + (d - 1) + " =\n              " + Cn(h, d - 1, a, o) + ";"),
				f < u && (l += "\n            vec4 wTexel" + h + "C" + f + " = getW(" + h + ", " + f + ", d1, q);\n            wR" + h + "C" + f + " = vec4(wTexel" + h + "C" + f + ".xz, wTexel" + h + "C" + f + ".xz);\n          ",
				f + 1 < u && (l += "\n              vec4 wTexelR" + h + "C" + (f + 1) + " = getW(" + h + ", " + (f + 1) + ", d1, q);\n              wR" + h + "C" + (f + 1) + " =\n                vec4(wTexelR" + h + "C" + (f + 1) + ".xz, wTexelR" + h + "C" + (f + 1) + ".xz);"))
			}
		for (h = 0; h < s; h++)
			for (p = 0; p < u; p++)
				l += "result += xR" + h + "C" + p + " * wR" + h + "C" + p + ";";
		this.userCode = "\n      const ivec2 strides = ivec2(" + i + ", " + a + ");\n      const ivec2 pads = ivec2(" + r + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 result = vec4(0.);\n\n        " + l + "\n\n        setOutput(result);\n      }\n    "
	};
	function En(t, e) {
		return "xTexelR" + t + "C" + (e < 0 ? "minus" + Math.abs(e).toString() : e)
	}
	function Cn(t, e, n, r) {
		return 1 === n ? r % 2 == e % 2 ? En(t, e) : "vec4(" + En(t, e - 1) + ".zw, " + En(t, e + 1) + ".xy)" : r % 2 == e % 2 ? "vec4(" + En(t, e) + ".xy, " + En(t, e + 2) + ".xy)" : "vec4(" + En(t, e - 1) + ".zw, " + En(t, e + 1) + ".zw)"
	}
	var Sn = function(t, e, n, r, o) {
		this.variableNames = ["Image", "Boxes", "BoxInd"],
			this.outputShape = [];
		var i = t[0]
			, a = t[1]
			, s = t[2]
			, u = t[3]
			, c = e[0]
			, l = n[0]
			, h = n[1];
		this.outputShape = [c, l, h, u];
		var p = "bilinear" === r ? 1 : 0
			, f = [a - 1 + ".0", s - 1 + ".0"]
			, d = f[0]
			, m = f[1]
			, v = 1 < l ? ["" + (a - 1) / (l - 1), "(y2-y1) * height_ratio", "y1*" + d + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + d]
			, g = v[0]
			, y = v[1]
			, x = v[2]
			, w = 1 < h ? ["" + (s - 1) / (h - 1), "(x2-x1) * width_ratio", "x1*" + m + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + m]
			, b = w[0]
			, E = w[1]
			, C = w[2];
		this.userCode = "\n      const float height_ratio = float(" + g + ");\n      const float width_ratio = float(" + b + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + i + ") {\n          return;\n        }\n\n        float height_scale = " + y + ";\n        float width_scale = " + E + ";\n\n        float in_y = " + x + ";\n        if( in_y < 0.0 || in_y > " + d + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n        float in_x = " + C + ";\n        if( in_x < 0.0 || in_x > " + m + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n\n        vec2 sourceFracIndexRC = vec2(in_y,in_x);\n        if(" + p + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n          ivec2 sourceCeilRC = ivec2(ceil(sourceFracIndexRC));\n\n          float topLeft = getImage(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          float bottomLeft = getImage(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          float topRight = getImage(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          float bottomRight = getImage(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n          float top = topLeft + (topRight - topLeft) * fracRC.y;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          float newValue = top + (bottom - top) * fracRC.x;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestRC = ivec2(floor(\n            sourceFracIndexRC + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestRC.x, sourceNearestRC.y, d);\n          setOutput(newValue);\n        }\n      }\n    "
	};
	function _n(n, t, r) {
		void 0 === r && (r = "index");
		var o = U(t);
		return o.map(function(t, e) {
			return "int " + n[e] + " = " + r + " / " + t + "; " + (e === o.length - 1 ? "int " + n[e + 1] + " = " + r + " - " + n[e] + " * " + t : "index -= " + n[e] + " * " + t) + ";"
		}).join("")
	}
	function Rn(t) {
		return 1 === t.length ? "" + t[0] : "vec" + t.length + "(" + t.join(",") + ")"
	}
	function Nn(t, e, n, r, o) {
		var i = t.map(function(t) {
			var e = L(t.shapeInfo.logicalShape);
			return t.shapeInfo.isUniform ? "uniform float " + t.name + (1 < e ? "[" + e + "]" : "") + ";" : "uniform sampler2D " + t.name + ";"
		});
		i = i.join("\n");
		var a, s, u = t.map(function(t) {
			return function(t, e, n, r) {
				void 0 === r && (r = !1);
				var o = function(t) {
					var e = t.name
						, n = "get" + e.charAt(0).toUpperCase() + e.slice(1) + "Flat"
						, r = L(t.shapeInfo.logicalShape);
					if (t.shapeInfo.isUniform)
						return 1 === r ? "float " + n + "(int index) {return " + e + ";}" : "\n      float " + n + "(int index) {\n        for (int i = 0; i < " + r + "; i++) {\n          if (i == index) {\n            return " + e + "[i];\n          }\n        }\n      }\n    ";
					var o = t.shapeInfo.texShape
						, i = o[0]
						, a = o[1];
					return 1 === a && 1 === i ? "\n      float " + n + "(int index) {\n        return sampleTexture(" + e + ", halfCR);\n      }\n    " : 1 === a ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / " + i + ".0);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : 1 === i ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / " + a + ".0, 0.5);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : "\n    float " + n + "(int index) {\n      vec2 uv = UVfrom1D(" + i + ", " + a + ", index);\n      return sampleTexture(" + e + ", uv);\n    }\n  "
				}(t);
				return o += r ? Dn(t) : kn(t),
				(n || y(t.shapeInfo.logicalShape, e.logicalShape)) && (o += r ? function(t, e, n) {
					var r = t.name
						, o = r.charAt(0).toUpperCase() + r.slice(1)
						, i = t.shapeInfo.texShape
						, a = "get" + o + "AtOutCoords"
						, s = e.texShape
						, u = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)]
						, c = u[0]
						, l = u[1]
						, h = Ye(t.shapeInfo.logicalShape, e.logicalShape)
						, p = t.shapeInfo.logicalShape.length
						, f = e.logicalShape.length;
					if (h.length)
						throw Error("Packed broadcast sampling is not implemented yet.");
					if (y(t.shapeInfo.texShape, s))
						return "\n      vec4 " + a + "() {\n        return texture2D(" + r + ", resultUV);\n      }\n    ";
					var d = "return texture2D(" + r + ", uv)";
					return 1 === p && 1 < f ? d = "\n      vec4 sample = texture2D(" + r + ", uv);\n      return vec4(sample.xy, sample.xy);\n    " : 0 === p && 0 < f && (d = 1 === f ? "\n        vec4 sample = texture2D(" + r + ", uv);\n        return vec4(sample.x, sample.x, 0., 0.);\n      " : "\n        vec4 sample = texture2D(" + r + ", uv);\n        return vec4(sample.x);\n      "),
					"\n    vec4 " + a + "() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + u[0] + ", " + u[1] + "));\n      int index = resTexRC.x * " + u[1] + " + resTexRC.y;\n\n      int texR = index / " + l + ";\n      int texC = index - texR * " + l + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + l + ", " + c + ");\n\n      " + d + ";\n    }\n  "
				}(t, e) : function(t, e, n) {
					var r = t.name
						, o = r.charAt(0).toUpperCase() + r.slice(1)
						, i = "get" + o + "AtOutCoords"
						, a = Ye(t.shapeInfo.logicalShape, e.logicalShape)
						, s = t.shapeInfo.logicalShape.length
						, u = e.logicalShape.length
						, c = n && (s < u || 0 < a.length)
						, l = function(t) {
						for (var e = 0; e < t.length; e++)
							if (t[e] !== e)
								return !1;
						return !0
					}(a)
						, h = t.shapeInfo.isUniform;
					if (c && !l)
						return function(t, e, n, r) {
							var o = t.shapeInfo.logicalShape.length
								, i = e.logicalShape.length
								, a = "int";
							2 === i ? a = "ivec2" : 3 === i ? a = "ivec3" : 4 === i && (a = "ivec4");
							var s = Ye(t.shapeInfo.logicalShape, e.logicalShape)
								, u = i - o;
							return "\n    float " + r + "() {\n      " + a + " coords = getOutputCoords();\n      " + (0 === o ? "" : i < 2 && 1 <= s.length ? "coords = 0;" : s.map(function(t) {
								return "coords[" + (t + u) + "] = 0;"
							}).join("\n")) + "\n      return get" + n + "(" + (i < 2 && 0 < o ? "coords" : t.shapeInfo.logicalShape.map(function(t, e) {
								return "coords[" + (e + u) + "]"
							}).join(", ")) + ");\n    }\n  "
						}(t, e, o, i);
					var p = L(t.shapeInfo.logicalShape)
						, f = "";
					c && l && (f = "\n        int mainPart = index / " + p + ";\n        index -= mainPart * " + p + ";\n      ");
					var d = e.texShape;
					if (h)
						return 1 === p ? "float " + i + "() {return " + r + ";}" : "\n      float " + i + "() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                              vec2(" + d[0] + ", " + d[1] + "));\n        int index = resTexRC.x * " + d[1] + " + resTexRC.y;\n        " + f + "\n        return get" + o + "Flat(index);\n      }\n    ";
					var m = t.shapeInfo.texShape;
					return y(m, d) ? "\n      float " + i + "() {\n        return sampleTexture(" + r + ", resultUV);\n      }\n    " : "\n    float " + i + "() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + d[0] + ", " + d[1] + "));\n      int index = resTexRC.x * " + d[1] + " + resTexRC.y;\n      " + f + "\n      int texR = index / " + m[1] + ";\n      int texC = index - texR * " + m[1] + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2(" + m[1] + ".0, " + m[0] + ".0);\n\n      return sampleTexture(" + r + ", uv);\n    }\n  "
				}(t, e, n)),
					o
			}(t, e, r, o)
		}).join("\n"), c = e.texShape, l = Mn;
		return s = e.isPacked ? (a = function(t, e) {
			switch (t.length) {
				case 0:
					return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
				case 1:
					return f = e,
						d = [Math.ceil(f[0] / 2), Math.ceil(f[1] / 2)],
						1 === f[0] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + d[1] + ".0);\n      }\n    " : 1 === f[1] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + d[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + d[0] + ", " + d[1] + "));\n      return resTexRC.x * " + d[1] + " + resTexRC.y;\n    }\n  ";
				case 2:
					return function(t, e) {
						var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)];
						if (y(t, e))
							return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + n[0] + ", " + n[1] + "));\n      }\n    ";
						var r = Math.ceil(t[1] / 2);
						return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n      int r = 2 * (index / " + r + ");\n      int c = imod(index, " + r + ") * 2;\n\n      return ivec2(r, c);\n    }\n  "
					}(t, e);
				case 3:
					return u = t,
						c = e,
						l = [Math.ceil(c[0] / 2), Math.ceil(c[1] / 2)],
						h = Math.ceil(u[2] / 2),
						p = h * Math.ceil(u[1] / 2),
					"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + l[0] + ", " + l[1] + "));\n      int index = resTexRC.x * " + l[1] + " + resTexRC.y;\n\n      int b = index / " + p + ";\n      index -= b * " + p + ";\n\n      int r = 2 * (index / " + h + ");\n      int c = imod(index, " + h + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
				case 4:
					return n = t,
						r = e,
						o = [Math.ceil(r[0] / 2), Math.ceil(r[1] / 2)],
						i = Math.ceil(n[3] / 2),
						a = i * Math.ceil(n[2] / 2),
						s = a * n[1],
					"\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + o[0] + ", " + o[1] + "));\n      int index = resTexRC.x * " + o[1] + " + resTexRC.y;\n\n      int b2 = index / " + s + ";\n      index -= b2 * " + s + ";\n\n      int b = index / " + a + ";\n      index -= b * " + a + ";\n\n      int r = 2 * (index / " + i + ");\n      int c = imod(index, " + i + ") * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";
				default:
					throw new Error(t.length + "-D packed output coordinate fetching is not yet supported")
			}
			var n, r, o, i, a, s;
			var u, c, l, h, p;
			var f, d
		}(e.logicalShape, c),
			An) : (a = function(t, e) {
			switch (t.length) {
				case 0:
					return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
				case 1:
					return 1 === (p = e)[0] ? "\n      int getOutputCoords() {\n        return int(resultUV.x * " + p[1] + ".0);\n      }\n    " : 1 === p[1] ? "\n      int getOutputCoords() {\n        return int(resultUV.y * " + p[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + p[0] + ", " + p[1] + "));\n      return resTexRC.x * " + p[1] + " + resTexRC.y;\n    }\n  ";
				case 2:
					return y(l = t, h = e) ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + h[0] + ", " + h[1] + "));\n      }\n    " : 1 === l[1] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + h[0] + ", " + h[1] + "));\n        int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : 1 === l[0] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + h[0] + ", " + h[1] + "));\n        int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + h[0] + ", " + h[1] + "));\n      int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n      int r = index / " + l[1] + ";\n      int c = index - r * " + l[1] + ";\n      return ivec2(r, c);\n    }\n  ";
				case 3:
					return u = e,
						c = _n(["r", "c", "d"], t),
					"\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + u[0] + ", " + u[1] + "));\n      int index = resTexRC.x * " + u[1] + " + resTexRC.y;\n      " + c + "\n      return ivec3(r, c, d);\n    }\n  ";
				case 4:
					return a = e,
						s = _n(["r", "c", "d", "d2"], t),
					"\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + a[0] + ", " + a[1] + "));\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n      " + s + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
				case 5:
					return o = e,
						i = _n(["r", "c", "d", "d2", "d3"], t),
					"\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + o[0] + ",\n                             " + o[1] + "));\n\n      int index = resTexRC.x * " + o[1] + " + resTexRC.y;\n\n      " + i + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
				case 6:
					return n = e,
						r = _n(["r", "c", "d", "d2", "d3", "d4"], t),
					"\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + r + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
				default:
					throw new Error(t.length + "-D output sampling is not yet supported")
			}
			var n, r;
			var o, i;
			var a, s;
			var u, c;
			var l, h;
			var p
		}(e.logicalShape, c),
			In),
		o && (l += Fn),
			[l, Tn, s, i, a, u, n].join("\n")
	}
	function kn(t) {
		var e, n, r, o, i, a = t.shapeInfo.logicalShape;
		switch (a.length) {
			case 0:
				return o = (r = t).name,
					i = "get" + o.charAt(0).toUpperCase() + o.slice(1),
					r.shapeInfo.isUniform ? "float " + i + "() {return " + o + ";}" : "\n    float " + i + "() {\n      return sampleTexture(" + o + ", halfCR);\n    }\n  ";
			case 1:
				return e = t.name,
				"\n    float " + (n = "get" + e.charAt(0).toUpperCase() + e.slice(1)) + "(int index) {\n      return " + n + "Flat(index);\n    }\n  ";
			case 2:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = t.shapeInfo.texShape;
					if (null != o && y(e, o)) {
						var i = o[0];
						return "\n    float " + r + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + o[1] + ".0, " + i + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
					}
					var a = E(e)
						, s = a.newShape
						, u = a.keptDims
						, c = s;
					if (c.length < e.length)
						return "\n      " + kn(Pn(t, c)) + "\n      float " + r + "(int row, int col) {\n        return " + r + "(" + Bn(["row", "col"], u) + ");\n      }\n    ";
					if (t.shapeInfo.isUniform)
						return "\n      float " + r + "(int row, int col) {\n        float index = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n        return " + r + "Flat(round(index));\n      }\n    ";
					var l = o[0]
						, h = o[1];
					return 1 === h ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + l + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : 1 === l ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n      vec2 uv = vec2((index + 0.5) / " + h + ".0, 0.5);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : "\n  float " + r + "(int row, int col) {\n    vec2 uv = UVfrom2D(" + l + ", " + h + ", " + e[1] + ", row, col);\n    return sampleTexture(" + n + ", uv);\n  }\n"
				}(t);
			case 3:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = e[1] * e[2]
						, i = e[2]
						, a = E(e)
						, s = a.newShape
						, u = a.keptDims
						, c = s;
					if (c.length < e.length)
						return "\n        " + kn(Pn(t, c)) + "\n        float " + r + "(int row, int col, int depth) {\n          return " + r + "(" + Bn(["row", "col", "depth"], u) + ");\n        }\n      ";
					if (t.shapeInfo.isUniform)
						return "\n      float " + r + "(int row, int col, int depth) {\n        float index = dot(vec3(row, col, depth),\n                          vec3(" + o + ", " + i + ", 1));\n        return " + r + "Flat(round(index));\n      }\n    ";
					var l = t.shapeInfo.texShape
						, h = l[0]
						, p = l[1];
					return p === o ? "\n        float " + r + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + i + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + p + ".0, " + h + ".0);\n          return sampleTexture(" + n + ", uv);\n        }\n      " : p === i ? "\n    float " + r + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + p + ".0, " + h + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : "\n      float " + r + "(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            " + h + ", " + p + ", " + o + ", " + i + ", row, col, depth);\n        return sampleTexture(" + n + ", uv);\n      }\n  "
				}(t);
			case 4:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = e[3]
						, i = e[2] * o
						, a = e[1] * i
						, s = E(e)
						, u = s.newShape
						, c = s.keptDims;
					if (u.length < e.length)
						return "\n      " + kn(Pn(t, u)) + "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        return " + r + "(" + Bn(["row", "col", "depth", "depth2"], c) + ");\n      }\n    ";
					if (t.shapeInfo.isUniform)
						return "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float index = dot(vec4(row, col, depth, depth2),\n                          vec4(" + a + ", " + i + ", " + o + ", 1));\n        return " + r + "Flat(round(index));\n      }\n    ";
					var l = t.shapeInfo.texShape
						, h = l[0]
						, p = l[1];
					return p === a ? "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2), vec3(" + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + p + ".0, " + h + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : p === o ? "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + e[1] * e[2] + ", " + e[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + p + ".0, " + h + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D(" + h + ", " + p + ", " + a + ", " + i + ",\n          " + o + ", row, col, depth, depth2);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
				}(t);
			case 5:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = e[4]
						, i = e[3] * o
						, a = e[2] * i
						, s = e[1] * a
						, u = E(e)
						, c = u.newShape
						, l = u.keptDims;
					if (c.length < e.length)
						return "\n      " + kn(Pn(t, c)) + "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + r + "(" + Bn(["row", "col", "depth", "depth2", "depth3"], l) + ");\n      }\n    ";
					if (t.shapeInfo.isUniform)
						return "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s + ", " + a + ", " + i + ", " + o + ")) +\n          depth3;\n        return " + r + "Flat(index);\n      }\n    ";
					var h = t.shapeInfo.texShape
						, p = h[0]
						, f = h[1];
					return f === s ? "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(\n          vec4(col, depth, depth2, depth3),\n          vec4(" + a + ", " + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + f + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : f === o ? "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] + ", " + e[2] * e[3] + ",\n            " + e[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + f + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n      vec2 uv = UVfrom5D(" + p + ", " + f + ", " + s + ", " + a + ",\n          " + i + ", " + o + ", row, col, depth, depth2, depth3);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
				}(t);
			case 6:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = e[5]
						, i = e[4] * o
						, a = e[3] * i
						, s = e[2] * a
						, u = e[1] * s
						, c = E(e)
						, l = c.newShape
						, h = c.keptDims;
					if (l.length < e.length)
						return "\n      " + kn(Pn(t, l)) + "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + r + "(" + Bn(["row", "col", "depth", "depth2", "depth3", "depth4"], h) + ");\n      }\n    ";
					if (t.shapeInfo.isUniform)
						return "\n      float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + u + ", " + s + ", " + a + ", " + i + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + o + ", 1));\n        return " + r + "Flat(index);\n      }\n    ";
					var p = t.shapeInfo.texShape
						, f = p[0]
						, d = p[1];
					return d === u ? "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(\n          vec4(col, depth, depth2, depth3),\n          vec4(" + s + ", " + a + ", " + i + ", " + o + ")) + depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + d + ".0, " + f + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : d === o ? "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] * e[4] + ",\n               " + e[2] * e[3] * e[4] + ",\n               " + e[3] * e[4] + ",\n               " + e[4] + ")) + depth3;\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + d + ".0, " + f + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      vec2 uv = UVfrom6D(" + f + ", " + d + ", " + u + ", " + s + ",\n          " + a + ", " + i + ", " + o + "\n          ,row, col, depth, depth2, depth3, depth4);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
				}(t);
			default:
				throw new Error(a.length + "-D input sampling is not yet supported")
		}
	}
	function Dn(t) {
		var e, n, r, o, i, a, s, u, c, l, h, p, f, d, m, v, g = t.shapeInfo.logicalShape;
		switch (g.length) {
			case 0:
				return "\n    vec4 get" + (v = t.name).charAt(0).toUpperCase() + v.slice(1) + "() {\n      return texture2D(" + v + ", halfCR);\n    }\n  ";
			case 1:
				return p = (h = t).name,
					f = "get" + p.charAt(0).toUpperCase() + p.slice(1),
					d = h.shapeInfo.texShape,
					m = [Math.ceil(d[0] / 2), Math.ceil(d[1] / 2)],
				"\n    vec4 " + f + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + m[0] + ", " + m[1] + ", index);\n      return texture2D(" + p + ", uv);\n    }\n  ";
			case 2:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = t.shapeInfo.texShape
						, i = o[0]
						, a = o[1];
					if (null != o && y(e, o))
						return "\n      vec4 " + r + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + ".0, " + i + ".0);\n\n        return texture2D(" + n + ", uv);\n      }\n    ";
					var s = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
					return "\n    vec4 " + r + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + Math.ceil(e[1] / 2) + ", " + s[0] + ", " + s[1] + ", row, col);\n      return texture2D(" + n + ", uv);\n    }\n  "
				}(t);
			case 3:
				return function(t) {
					var e = t.shapeInfo.logicalShape
						, n = t.name
						, r = "get" + n.charAt(0).toUpperCase() + n.slice(1)
						, o = t.shapeInfo.texShape
						, i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
					if (1 === e[0])
						return "\n        " + Dn(Pn(t, e.slice(1))) + "\n        vec4 " + r + "(int b, int row, int col) {\n          return " + r + "(" + Bn(["b", "row", "col"], [1, 2]) + ");\n        }\n      ";
					var a = i[0]
						, s = i[1]
						, u = Math.ceil(e[2] / 2);
					return "\n    vec4 " + r + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + a + ", " + s + ", " + u * Math.ceil(e[1] / 2) + ", " + u + ", b, row, col);\n      return texture2D(" + n + ", uv);\n    }\n  "
				}(t);
			case 4:
				return n = (e = t).shapeInfo.logicalShape,
					r = e.name,
					o = "get" + r.charAt(0).toUpperCase() + r.slice(1),
					i = e.shapeInfo.texShape,
					a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)],
					s = a[0],
					u = a[1],
					c = Math.ceil(n[3] / 2),
					l = c * Math.ceil(n[2] / 2),
				"\n    vec4 " + o + "(int b2, int b, int row, int col) {\n      vec2 uv = packedUVfrom4D(\n        " + s + ", " + u + ", " + l * n[1] + ",\n        " + l + ", " + c + ", b2, b, row, col);\n      return texture2D(" + r + ", uv);\n    }\n  ";
			default:
				throw new Error("Packed " + g.length + "-D input sampling is not yet supported")
		}
	}
	var Tn = "\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n"
		, In = "\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n"
		, An = "\n  void setOutput(vec4 val) {\n    gl_FragColor = val;\n  }\n"
		, Mn = "\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  struct ivec5\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n  };\n\n  struct ivec6\n  {\n    int x;\n    int y;\n    int z;\n    int w;\n    int u;\n    int v;\n  };\n\n  " + (Ot.get("PROD") ? "\n    bool isNaN(float val) {\n      return false;\n    }\n\n    bool hasNaN(vec4 values) {\n      return false;\n    }\n  " : "\n    bool isNaN(float val) {\n      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;\n    }\n\n    bool hasNaN(vec4 values) {\n      return any(bvec4(\n        isNaN(values.x),\n        isNaN(values.y),\n        isNaN(values.z),\n        isNaN(values.w)\n      ));\n    }\n  ") + "\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  //Based on the work of Dave Hoskins\n  //https://www.shadertoy.com/view/4djSRW\n  #define HASHSCALE1 443.8975\n  float random(float seed){\n    vec2 p = resultUV * seed;\n    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.x + p3.y) * p3.z);\n  }\n\n  \nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom4D(int texNumR, int texNumC, int texelsInBatch2,\n    int texelsInBatch, int texelsInLogicalRow, int b2, int b,\n    int row, int col) {\n  int index = b2 * texelsInBatch2 + b * texelsInBatch +\n    (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom5D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int row, int col, int depth,\n    int depth2, int depth3) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 +\n              depth * stride2 + depth2 * stride3 + depth3;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  \nvec2 UVfrom6D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int stride3, int stride4,\n    int row, int col, int depth, int depth2, int depth3, int depth4) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2 *\n    stride3 + depth3 * stride4 + depth4;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n"
		, Fn = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
	function On(t) {
		if (t <= 1)
			return "int";
		if (2 === t)
			return "ivec2";
		if (3 === t)
			return "ivec3";
		if (4 === t)
			return "ivec4";
		if (5 === t)
			return "ivec5";
		if (6 === t)
			return "ivec6";
		throw Error("GPU for rank " + t + " is not yet supported")
	}
	function Pn(t, e) {
		var n = JSON.parse(JSON.stringify(t));
		return n.shapeInfo.logicalShape = e,
			n
	}
	function Bn(e, t) {
		return t.map(function(t) {
			return e[t]
		}).join(", ")
	}
	var Ln = function(t, e, n) {
		this.variableNames = ["x"];
		var r = (this.outputShape = t).length
			, o = t[t.length - 1]
			, i = n ? "<" : ">";
		this.userCode = "\n      int getIndex(int i) {\n        " + (n ? "return " + o + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + On(r) + " coords = getOutputCoords();\n        int end = " + Wn(r, "coords") + ";\n        float val = 0.0;\n        for (int i = " + o + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + i + " end) {\n            continue;\n          }\n          if (idx == end && " + e + ") {\n            continue;\n          }\n          " + Wn(r, "coords") + " = idx;\n          val += getX(" + function(t, e) {
			if (1 === t)
				return "" + e;
			if (2 === t)
				return e + ".x, " + e + ".y";
			if (3 === t)
				return e + ".x, " + e + ".y, " + e + ".z";
			if (4 === t)
				return e + ".x, " + e + ".y, " + e + ".z, " + e + ".w";
			throw Error("Cumulative sum for rank " + t + " is not yet supported")
		}(r, "coords") + ");\n        }\n        setOutput(val);\n      }\n    "
	};
	function Wn(t, e) {
		if (1 === t)
			return "" + e;
		if (2 === t)
			return e + ".y";
		if (3 === t)
			return e + ".z";
		if (4 === t)
			return e + ".w";
		throw Error("Cumulative sum for rank " + t + " is not yet supported")
	}
	var zn = function() {
		function t(t, e, n) {
			this.variableNames = ["x"],
				this.outputShape = [],
				this.outputShape = t,
				this.blockSize = e,
				this.dataFormat = n,
				this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + e + ";\n      int offset_h = imod(h, " + e + ");\n      int in_w = w / " + e + ";\n      int offset_w = imod(w, " + e + ");\n      int offset_d = (offset_h * " + e + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  "
		}
		return t.prototype.getHeightCoordString = function() {
			return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]"
		}
			,
			t.prototype.getWidthCoordString = function() {
				return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]"
			}
			,
			t.prototype.getDepthCoordString = function() {
				return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]"
			}
			,
			t.prototype.getOutputDepthSize = function() {
				return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1]
			}
			,
			t.prototype.getInputSamplingString = function() {
				return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)"
			}
			,
			t
	}()
		, Un = function(t) {
		this.variableNames = ["A"],
			this.outputShape = t,
			this.userCode = "\n      const float FLOAT_MAX = 1.70141184e38;\n      const float FLOAT_MIN = 1.17549435e-38;\n\n      lowp vec4 encode_float(highp float v) {\n        if (isNaN(v)) {\n          return vec4(255, 255, 255, 255);\n        }\n\n        highp float av = abs(v);\n\n        if(av < FLOAT_MIN) {\n          return vec4(0.0, 0.0, 0.0, 0.0);\n        } else if(v > FLOAT_MAX) {\n          return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n        } else if(v < -FLOAT_MAX) {\n          return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n        }\n\n        highp vec4 c = vec4(0,0,0,0);\n\n        highp float e = floor(log2(av));\n        highp float m = exp2(fract(log2(av))) - 1.0;\n\n        c[2] = floor(128.0 * m);\n        m -= c[2] / 128.0;\n        c[1] = floor(32768.0 * m);\n        m -= c[1] / 32768.0;\n        c[0] = floor(8388608.0 * m);\n\n        highp float ebias = e + 127.0;\n        c[3] = floor(ebias / 2.0);\n        ebias -= c[3] * 2.0;\n        c[2] += floor(ebias) * 128.0;\n\n        c[3] += 128.0 * step(0.0, -v);\n\n        return c / 255.0;\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        gl_FragColor = encode_float(x);\n      }\n    "
	}
		, Vn = "return real * expR - imag * expI;"
		, Gn = "return real * expI + imag * expR;"
		, Hn = function(t, e, n) {
		this.variableNames = ["real", "imag"];
		var r = e[1];
		this.outputShape = e;
		var o = n ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI
			, i = n ? r + ".0" : "1.0";
		this.userCode = "\n      const float exponentMultiplier = " + o + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + i + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    "
	}
		, qn = function(t) {
		this.variableNames = ["A"];
		var e = t[0]
			, n = t[1];
		this.outputShape = t,
			this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + n + ".0, " + e + ".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "
	}
		, jn = function(t, e, n) {
		this.variableNames = ["A", "indices"];
		var r = t.slice();
		r[n] = e,
			this.outputShape = r,
			this.rank = r.length;
		var o = On(this.rank)
			, i = function(t, e) {
			var n = t.length;
			if (4 < n)
				throw Error("Gather for rank " + n + " is not yet supported");
			if (1 === n)
				return "int(getIndices(resRC))";
			for (var r = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o = [], i = 0; i < t.length; i++)
				i === e ? o.push("int(getIndices(" + r[i] + "))") : o.push("" + r[i]);
			return o.join()
		}(t, n);
		this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
	};
	var $n, Kn, Xn, Yn, Qn = function(t, e, n) {
		this.sliceDim = t,
			this.strides = e,
			this.variableNames = ["x", "indices"],
			this.outputShape = n;
		var r = On(e.length)
			, o = On(n.length)
			, i = 1 < this.sliceDim ? "strides[j]" : "strides";
		this.userCode = "\n        " + r + " strides = " + r + "(" + this.strides + ");\n         void main() {\n          " + o + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + i + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      "
	};
	function Jn(t, e) {
		return [e, t]
	}
	function Zn(t, e) {
		return t * e
	}
	function tr(t, e, n) {
		var r = function(t, e) {
			if (t % e != 0)
				throw new Error("unpackedSize (" + t + ") must be a multiple of " + e);
			return t / e
		}(t.length, n);
		if (e.length < r)
			throw new Error("matrix length (" + e.length + ") must be >= " + r);
		for (var o = 0, i = 0; i < t.length; i += n)
			e[o++] = t[i]
	}
	function er(t, e) {
		return [Math.max(1, Math.ceil(e / 2)), Math.max(1, Math.ceil(t / 2))]
	}
	function nr(t, e) {
		var n = er(t, e);
		return n[0] * n[1] * 4
	}
	function rr(t, e, n, r, o) {
		var i = n * r;
		if (o.length < i)
			throw new Error("matrix length (" + o.length + ") must be >= " + i);
		for (var a = r % 2 == 1, s = n % 2 == 1, u = Math.floor(r / 2), c = Math.floor(n / 2), l = Math.ceil(r / 2), h = l * Math.ceil(n / 2), p = S(n) * S(r), f = 0; f < e; f++) {
			for (var d = f * n * r, m = f * p, v = a ? 4 : 0, g = r + (a ? 1 : 0), y = m, x = d, w = d + r, b = 0; b < c; ++b) {
				for (var E = 0; E < u; ++E)
					o[x++] = t[y++],
						o[x++] = t[y++],
						o[w++] = t[y++],
						o[w++] = t[y++];
				y += v,
					x += g,
					w += g
			}
			if (a) {
				y = m + 4 * (l - 1);
				var C = d + r - 1;
				for (v = 4 * l,
					     g = 2 * r,
					     b = 0; b < c; ++b)
					o[C] = t[y],
						o[C + r] = t[y + 2],
						y += v,
						C += g
			}
			if (s) {
				for (y = m + 4 * (h - l),
					     C = d + (n - 1) * r,
					     E = 0; E < u; ++E)
					o[C++] = t[y++],
						o[C++] = t[y++],
						y += 2;
				a && (o[d + n * r - 1] = t[y])
			}
		}
		return o
	}
	function or(t, e) {
		var n = e();
		return sr(t),
			n
	}
	(Yn = $n || ($n = {}))[Yn.RENDER = 0] = "RENDER",
		Yn[Yn.UPLOAD = 1] = "UPLOAD",
		Yn[Yn.PIXELS = 2] = "PIXELS",
		Yn[Yn.DOWNLOAD = 3] = "DOWNLOAD",
		(Xn = Kn || (Kn = {}))[Xn.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16",
		Xn[Xn.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32",
		Xn[Xn.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE",
		Xn[Xn.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32";
	var ir = !(Xn[Xn.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16");
	function ar(t) {
		ir = t
	}
	function sr(t) {
		if (ir) {
			var e = t.getError();
			if (e !== t.NO_ERROR)
				throw new Error("WebGL Error: " + ur(t, e))
		}
	}
	function ur(t, e) {
		switch (e) {
			case t.NO_ERROR:
				return "NO_ERROR";
			case t.INVALID_ENUM:
				return "INVALID_ENUM";
			case t.INVALID_VALUE:
				return "INVALID_VALUE";
			case t.INVALID_OPERATION:
				return "INVALID_OPERATION";
			case t.INVALID_FRAMEBUFFER_OPERATION:
				return "INVALID_FRAMEBUFFER_OPERATION";
			case t.OUT_OF_MEMORY:
				return "OUT_OF_MEMORY";
			case t.CONTEXT_LOST_WEBGL:
				return "CONTEXT_LOST_WEBGL";
			default:
				return "Unknown error code " + e
		}
	}
	function cr(t, e) {
		return Ir(t, function() {
			return t.getExtension(e)
		}, 'Extension "' + e + '" not supported on this browser.')
	}
	function lr(t, e) {
		var n = Ir(t, function() {
			return t.createShader(t.VERTEX_SHADER)
		}, "Unable to create vertex WebGLShader.");
		if (or(t, function() {
			return t.shaderSource(n, e)
		}),
			or(t, function() {
				return t.compileShader(n)
			}),
		!1 === t.getShaderParameter(n, t.COMPILE_STATUS))
			throw console.log(t.getShaderInfoLog(n)),
				new Error("Failed to compile vertex shader.");
		return n
	}
	function hr(t, e) {
		var n = Ir(t, function() {
			return t.createShader(t.FRAGMENT_SHADER)
		}, "Unable to create fragment WebGLShader.");
		if (or(t, function() {
			return t.shaderSource(n, e)
		}),
			or(t, function() {
				return t.compileShader(n)
			}),
		!1 === t.getShaderParameter(n, t.COMPILE_STATUS))
			throw function(t, e) {
				var n = pr.exec(e);
				if (null == n)
					return console.log("Couldn't parse line number in error: " + e),
						console.log(t);
				for (var r = +n[1], o = t.split("\n"), i = o.length.toString().length + 2, a = o.map(function(t, e) {
					return x((e + 1).toString(), i) + t
				}), s = 0, u = 0; u < a.length; u++)
					s = Math.max(a[u].length, s);
				var c = a.slice(0, r - 1)
					, l = a.slice(r - 1, r)
					, h = a.slice(r);
				console.log(c.join("\n")),
					console.log(e.split("\n")[0]),
					console.log("%c " + x(l[0], s), "border:1px solid red; background-color:#e3d2d2; color:#a61717"),
					console.log(h.join("\n"))
			}(e, t.getShaderInfoLog(n)),
				new Error("Failed to compile fragment shader.");
		return n
	}
	var pr = /ERROR: [0-9]+:([0-9]+):/g;
	function fr(t) {
		return Ir(t, function() {
			return t.createProgram()
		}, "Unable to create WebGLProgram.")
	}
	function dr(t, e) {
		if (or(t, function() {
			return t.linkProgram(e)
		}),
		!1 === t.getProgramParameter(e, t.LINK_STATUS))
			throw console.log(t.getProgramInfoLog(e)),
				new Error("Failed to link vertex and fragment shaders.")
	}
	function mr(t, e) {
		if (or(t, function() {
			return t.validateProgram(e)
		}),
		!1 === t.getProgramParameter(e, t.VALIDATE_STATUS))
			throw console.log(t.getProgramInfoLog(e)),
				new Error("Shader program validation failed.")
	}
	function vr(t, e) {
		var n = Ir(t, function() {
			return t.createBuffer()
		}, "Unable to create WebGLBuffer");
		return or(t, function() {
			return t.bindBuffer(t.ARRAY_BUFFER, n)
		}),
			or(t, function() {
				return t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW)
			}),
			n
	}
	function gr(t, e) {
		var n = Ir(t, function() {
			return t.createBuffer()
		}, "Unable to create WebGLBuffer");
		return or(t, function() {
			return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n)
		}),
			or(t, function() {
				return t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW)
			}),
			n
	}
	function yr() {
		return 2 === Ot.get("WEBGL_VERSION") ? 1 : 4
	}
	function xr(t) {
		return Ir(t, function() {
			return t.createTexture()
		}, "Unable to create WebGLTexture.")
	}
	function wr(t, e) {
		var n = Ot.get("WEBGL_MAX_TEXTURE_SIZE");
		if (t <= 0 || e <= 0) {
			var r = "[" + t + "x" + e + "]";
			throw new Error("Requested texture size " + r + " is invalid.")
		}
		if (n < t || n < e)
			throw r = "[" + t + "x" + e + "]",
				new Error("Requested texture size " + r + " greater than WebGL maximum on this browser / GPU [" + n + "x" + n + "].")
	}
	function br(t) {
		return Ir(t, function() {
			return t.createFramebuffer()
		}, "Unable to create WebGLFramebuffer.")
	}
	function Er(t, e, n, r, o, i, a) {
		var s = t.getAttribLocation(e, n);
		return -1 !== s && (or(t, function() {
			return t.bindBuffer(t.ARRAY_BUFFER, r)
		}),
			or(t, function() {
				return t.vertexAttribPointer(s, o, t.FLOAT, !1, i, a)
			}),
			or(t, function() {
				return t.enableVertexAttribArray(s)
			}),
			!0)
	}
	function Cr(t, e, n) {
		Ar(t, n),
			or(t, function() {
				return t.activeTexture(t.TEXTURE0 + n)
			}),
			or(t, function() {
				return t.bindTexture(t.TEXTURE_2D, e)
			})
	}
	function Sr(t, e, n) {
		return Ir(t, function() {
			return t.getUniformLocation(e, n)
		}, 'uniform "' + n + '" not present in program.')
	}
	function _r(t, e, n) {
		return t.getUniformLocation(e, n)
	}
	function Rr(t, e, n, r, o) {
		or(t, function() {
			return Cr(t, n, o)
		}),
			or(t, function() {
				return t.uniform1i(r, o)
			})
	}
	function Nr(t, e, n) {
		or(t, function() {
			return t.bindFramebuffer(t.FRAMEBUFFER, n)
		}),
			or(t, function() {
				return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e, 0)
			})
	}
	function kr(t, e) {
		or(t, function() {
			return t.bindFramebuffer(t.FRAMEBUFFER, e)
		}),
			or(t, function() {
				return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0)
			})
	}
	function Dr(t) {
		var e = t.checkFramebufferStatus(t.FRAMEBUFFER);
		if (e !== t.FRAMEBUFFER_COMPLETE)
			throw new Error("Error binding framebuffer: " + Tr(t, e))
	}
	function Tr(t, e) {
		switch (e) {
			case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
				return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
			case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
				return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
			case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
				return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
			case t.FRAMEBUFFER_UNSUPPORTED:
				return "FRAMEBUFFER_UNSUPPORTED";
			default:
				return "unknown error " + e
		}
	}
	function Ir(t, e, n) {
		var r = or(t, function() {
			return e()
		});
		if (null == r)
			throw new Error(n);
		return r
	}
	function Ar(t, e) {
		var n = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1
			, r = e + t.TEXTURE0;
		if (r < t.TEXTURE0 || n < r)
			throw new Error("textureUnit must be in [gl.TEXTURE0, gl.TEXTURE" + n + "].")
	}
	function Mr(n, t) {
		void 0 === t && (t = !1);
		var e = Ot.get("WEBGL_MAX_TEXTURE_SIZE");
		if (t && (e *= 2,
			n = n.map(function(t, e) {
				return e >= n.length - 2 ? S(n[e]) : n[e]
			})),
		2 !== n.length) {
			var r = E(n);
			n = r.newShape
		}
		var o = L(n);
		return n.length <= 1 && o <= e ? [1, o] : 2 === n.length && n[0] <= e && n[1] <= e ? n : 3 === n.length && n[0] * n[1] <= e && n[2] <= e ? [n[0] * n[1], n[2]] : 3 === n.length && n[0] <= e && n[1] * n[2] <= e ? [n[0], n[1] * n[2]] : 4 === n.length && n[0] * n[1] * n[2] <= e && n[3] <= e ? [n[0] * n[1] * n[2], n[3]] : 4 === n.length && n[0] <= e && n[1] * n[2] * n[3] <= e ? [n[0], n[1] * n[2] * n[3]] : g(o)
	}
	function Fr(t) {
		return t % 2 == 0
	}
	function Or(t, e) {
		if (y(t = t.slice(-2), e = e.slice(-2)))
			return !0;
		if (!t.length || !e.length)
			return !0;
		if (0 === t[0] || 0 === t[1] || 0 === e[0] || 0 === e[1])
			return !0;
		if (t.length !== e.length) {
			var n = t.slice(-1)[0]
				, r = e.slice(-1)[0];
			if (n === r)
				return !0;
			if (Fr(n) && Fr(r) && (1 === t[0] || 1 === e[0]))
				return !0
		} else if (Fr(t[0]) && Fr(e[0])) {
			if (Fr(t[1]) && Fr(e[1]))
				return !0;
			if (t[1] === e[1])
				return !0
		}
		return !1
	}
	var Pr = Object.freeze({
		callAndCheck: or,
		enableDebugWebGLErrorChecking: ar,
		checkWebGLError: sr,
		getWebGLErrorMessage: ur,
		getExtensionOrThrow: cr,
		createVertexShader: lr,
		createFragmentShader: hr,
		createProgram: fr,
		linkProgram: dr,
		validateProgram: mr,
		createStaticVertexBuffer: vr,
		createStaticIndexBuffer: gr,
		getNumChannels: yr,
		createTexture: xr,
		validateTextureSize: wr,
		createFramebuffer: br,
		bindVertexBufferToProgramAttribute: Er,
		bindTextureUnit: Cr,
		unbindTextureUnit: function(t, e) {
			Ar(t, e),
				or(t, function() {
					return t.activeTexture(t.TEXTURE0 + e)
				}),
				or(t, function() {
					return t.bindTexture(t.TEXTURE_2D, null)
				})
		},
		getProgramUniformLocationOrThrow: Sr,
		getProgramUniformLocation: _r,
		bindTextureToProgramUniformSampler: Rr,
		bindCanvasToFramebuffer: function(t) {
			or(t, function() {
				return t.bindFramebuffer(t.FRAMEBUFFER, null)
			}),
				or(t, function() {
					return t.viewport(0, 0, t.canvas.width, t.canvas.height)
				}),
				or(t, function() {
					return t.scissor(0, 0, t.canvas.width, t.canvas.height)
				})
		},
		bindColorTextureToFramebuffer: Nr,
		unbindColorTextureFromFramebuffer: kr,
		validateFramebuffer: Dr,
		getFramebufferErrorMessage: Tr,
		getTextureShapeFromLogicalShape: Mr,
		isReshapeFree: Or
	});
	function Br(t) {
		return lr(t, "\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")
	}
	function Lr(t) {
		return vr(t, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]))
	}
	function Wr(t) {
		return gr(t, new Uint16Array([0, 1, 2, 2, 1, 3]))
	}
	function zr(t, e) {
		var n, r, o, i, a, s, u, c = t;
		return u = 2 === Ot.get("WEBGL_VERSION") ? (n = c.R32F,
			r = c.R16F,
			o = c.RGBA32F,
			i = c.RED,
			a = 4,
			s = 1,
			c.HALF_FLOAT) : (n = t.RGBA,
			r = t.RGBA,
			o = c.RGBA,
			i = t.RGBA,
			s = a = 4,
			null != e ? e.HALF_FLOAT_OES : null),
			{
				internalFormatFloat: n,
				internalFormatHalfFloat: r,
				internalFormatPackedFloat: o,
				textureFormatFloat: i,
				downloadTextureFormat: t.RGBA,
				downloadUnpackNumChannels: a,
				defaultNumChannels: s,
				textureTypeHalfFloat: u
			}
	}
	function Ur(t, e, n, r, o, i) {
		wr(e, n);
		var a = xr(t)
			, s = t.TEXTURE_2D;
		return or(t, function() {
			return t.bindTexture(s, a)
		}),
			or(t, function() {
				return t.texParameteri(s, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE)
			}),
			or(t, function() {
				return t.texParameteri(s, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
			}),
			or(t, function() {
				return t.texParameteri(s, t.TEXTURE_MIN_FILTER, t.NEAREST)
			}),
			or(t, function() {
				return t.texParameteri(s, t.TEXTURE_MAG_FILTER, t.NEAREST)
			}),
			or(t, function() {
				return t.texImage2D(s, 0, r, e, n, 0, o, i, null)
			}),
			or(t, function() {
				return t.bindTexture(t.TEXTURE_2D, null)
			}),
			a
	}
	function Vr(t, e, n, r) {
		var o = Jn(e, n);
		return Ur(t, o[0], o[1], r.internalFormatFloat, r.textureFormatFloat, t.FLOAT)
	}
	function Gr(t, e, n, r) {
		var o = Jn(e, n);
		return Ur(t, o[0], o[1], r.internalFormatFloat, r.textureFormatFloat, r.textureTypeHalfFloat)
	}
	function Hr(t, e, n, r) {
		var o = Jn(e, n);
		return Ur(t, o[0], o[1], t.RGBA, t.RGBA, t.UNSIGNED_BYTE)
	}
	function qr(t, e, n, r) {
		var o = er(e, n);
		return Ur(t, o[0], o[1], r.internalFormatPackedFloat, t.RGBA, t.FLOAT)
	}
	function jr(t, e, n, r) {
		var o = er(e, n);
		return Ur(t, o[0], o[1], r.internalFormatHalfFloat, t.RGBA, r.textureTypeHalfFloat)
	}
	function $r(t, e, n) {
		return or(t, function() {
			return t.bindBuffer(t.ARRAY_BUFFER, n)
		}),
		Er(t, e, "clipSpacePos", n, 3, 20, 0) && Er(t, e, "uv", n, 2, 20, 12)
	}
	function Kr(t, e, n) {
		or(t, function() {
			return t.bindTexture(t.TEXTURE_2D, e)
		}),
			or(t, function() {
				return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n)
			}),
			or(t, function() {
				return t.bindTexture(t.TEXTURE_2D, null)
			})
	}
	function Xr(t, e, n, r, o, i) {
		wr(n, r),
			or(t, function() {
				return t.bindTexture(t.TEXTURE_2D, e)
			}),
			or(t, function() {
				return t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, n, r, i, t.FLOAT, o)
			}),
			or(t, function() {
				return t.bindTexture(t.TEXTURE_2D, null)
			})
	}
	function Yr(t, e, n, r, o, i, a) {
		var s, u = Jn(n, r), c = u[0], l = u[1];
		1 === a.defaultNumChannels ? s = o : function(t, e, n) {
			var r = Zn(t.length, n);
			if (e.length < r)
				throw new Error("unpackedArray length (" + e.length + ") must be >= " + r);
			for (var o = 0, i = 0; i < t.length; ++i)
				e[o] = t[i],
					o += n
		}(o, s = new Float32Array(Zn(o.length, i)), i),
			Xr(t, e, c, l, s, a.textureFormatFloat)
	}
	function Qr(t, e, n, r, o, i, a, s, u) {
		var c = er(i, a)
			, l = c[0]
			, h = c[1]
			, p = new Float32Array(n * nr(r, o));
		(function(t, e, n, r, o) {
				var i = nr(n, r);
				if (o.length < i)
					throw new Error("packedRGBA length (" + o.length + ") must be >=\n        " + i);
				for (var a = r % 2 == 1, s = n % 2 == 1, u = Math.floor(r / 2), c = Math.floor(n / 2), l = Math.ceil(r / 2), h = l * Math.ceil(n / 2), p = S(n) * S(r), f = 0; f < e; f++) {
					for (var d = f * n * r, m = f * p, v = a ? 4 : 0, g = r, y = m, x = 0; x < c; ++x) {
						for (var w = 2 * x * r, b = 0; b < u; ++b) {
							var E = d + w + 2 * b;
							o[y] = t[E],
								o[y + 1] = t[E + 1],
								o[y + 2] = t[E + g],
								o[y + 3] = t[E + g + 1],
								y += 4
						}
						y += v
					}
					if (a) {
						E = d + r - 1,
							y = m + 4 * (l - 1);
						var C = 2 * r;
						for (v = 4 * l,
							     x = 0; x < c; ++x)
							o[y] = t[E],
								o[y + 2] = t[E + r],
								E += C,
								y += v
					}
					if (s) {
						for (E = d + (n - 1) * r,
							     y = m + 4 * (h - l),
							     b = 0; b < u; ++b)
							o[y++] = t[E++],
								o[y++] = t[E++],
								y += 2;
						a && s && (o[m + p - 4] = t[E])
					}
				}
			}
		)(s, n, r, o, p),
			Xr(t, e, l, h, p, t.RGBA)
	}
	function Jr(t, e, n, r, o) {
		var i = e;
		if (2 === Ot.get("WEBGL_VERSION")) {
			var a = t
				, s = a.createBuffer();
			or(t, function() {
				return t.bindBuffer(a.PIXEL_PACK_BUFFER, s)
			});
			var u = 4 * Zn(n * r, o.downloadUnpackNumChannels);
			or(t, function() {
				return t.bufferData(a.PIXEL_PACK_BUFFER, u, t.STATIC_DRAW)
			}),
				or(t, function() {
					return a.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, 0)
				}),
				or(t, function() {
					return t.bindBuffer(a.PIXEL_PACK_BUFFER, null)
				}),
				i = s
		}
		return i
	}
	function Zr(t, e, n, r, o) {
		var i = t
			, a = new Float32Array(Zn(n * r, o.downloadUnpackNumChannels));
		i.bindBuffer(t.ARRAY_BUFFER, e),
			i.getBufferSubData(t.ARRAY_BUFFER, 0, a),
			i.bindBuffer(t.ARRAY_BUFFER, null);
		var s = new Float32Array(n * r);
		return tr(a, s, o.downloadUnpackNumChannels),
			s
	}
	function to(t, e, n, r) {
		var o = Jn(e, n)
			, i = o[0]
			, a = o[1]
			, s = new Float32Array(Zn(e * n, r.downloadUnpackNumChannels));
		or(t, function() {
			return t.readPixels(0, 0, i, a, r.downloadTextureFormat, t.FLOAT, s)
		});
		var u = new Float32Array(e * n);
		return tr(s, u, r.downloadUnpackNumChannels),
			u
	}
	function eo(t, e, n, r) {
		var o = Jn(e, n)
			, i = o[0]
			, a = o[1]
			, s = new Uint8Array(Zn(e * n, 4));
		return or(t, function() {
			return t.readPixels(0, 0, i, a, r.downloadTextureFormat, t.UNSIGNED_BYTE, s)
		}),
			new Float32Array(s.buffer)
	}
	function no(t, e, n, r, o, i, a, s) {
		var u = t
			, c = new Float32Array(nr(i, a));
		u.bindBuffer(t.ARRAY_BUFFER, e),
			u.getBufferSubData(t.ARRAY_BUFFER, 0, c),
			u.bindBuffer(t.ARRAY_BUFFER, null);
		var l = new Float32Array(L([n, r, o]));
		return rr(c, n, r, o, l),
			l
	}
	function ro(t, e, n, r, o, i, a) {
		var s = er(o, i)
			, u = s[0]
			, c = s[1]
			, l = new Float32Array(nr(o, i));
		or(t, function() {
			return t.readPixels(0, 0, u, c, t.RGBA, t.FLOAT, l)
		});
		var h = new Float32Array(L([e, n, r]));
		return rr(l, e, n, r, h)
	}
	var oo = Object.freeze({
		createVertexShader: Br,
		createVertexBuffer: Lr,
		createIndexBuffer: Wr,
		getTextureConfig: zr,
		createFloat32MatrixTexture: Vr,
		createFloat16MatrixTexture: Gr,
		createUnsignedBytesMatrixTexture: Hr,
		createPackedMatrixTexture: qr,
		createFloat16PackedMatrixTexture: jr,
		bindVertexProgramAttributeStreams: $r,
		uploadPixelDataToTexture: Kr,
		uploadMatrixToTexture: Yr,
		uploadMatrixToPackedTexture: Qr,
		maybeCreateBufferFromOutputTexture: Jr,
		downloadFloat32MatrixFromBuffer: Zr,
		downloadFloat32MatrixFromOutputTexture: to,
		downloadByteEncodedFloatMatrixFromOutputTexture: eo,
		downloadPackedMatrixFromBuffer: no,
		downloadMatrixFromPackedOutputTexture: ro
	})
		, io = function() {
		function t(t) {
			this.outputTexture = null,
				this.program = null,
				this.disposed = !1,
				this.autoDebugValidate = !1,
				this.vertexAttrsAreBound = !1,
				this.itemsToPoll = [],
				this.gl = null != t ? t : a(Ot.get("WEBGL_VERSION")),
				1 === Ot.get("WEBGL_VERSION") ? (this.textureFloatExtension = cr(this.gl, "OES_texture_float"),
					this.colorBufferFloatExtension = this.gl.getExtension("WEBGL_color_buffer_float"),
				Ot.get("WEBGL_RENDER_FLOAT32_ENABLED") || (this.textureHalfFloatExtension = cr(this.gl, "OES_texture_half_float"),
					this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float"))) : this.colorBufferFloatExtension = cr(this.gl, "EXT_color_buffer_float"),
				this.vertexBuffer = Lr(this.gl),
				this.indexBuffer = Wr(this.gl),
				this.framebuffer = br(this.gl),
				this.textureConfig = zr(this.gl, this.textureHalfFloatExtension)
		}
		return t.prototype.dispose = function() {
			var t = this;
			if (!this.disposed) {
				null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),
				null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
				var e = this.gl;
				or(e, function() {
					return e.finish()
				}),
					or(e, function() {
						return e.bindFramebuffer(e.FRAMEBUFFER, null)
					}),
					or(e, function() {
						return e.deleteFramebuffer(t.framebuffer)
					}),
					or(e, function() {
						return e.bindBuffer(e.ARRAY_BUFFER, null)
					}),
					or(e, function() {
						return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
					}),
					or(e, function() {
						return e.deleteBuffer(t.indexBuffer)
					}),
					this.disposed = !0
			}
		}
			,
			t.prototype.enableAutomaticDebugValidation = function(t) {
				ar(this.autoDebugValidate = t)
			}
			,
			t.prototype.createFloat32MatrixTexture = function(t, e) {
				return this.throwIfDisposed(),
					Vr(this.gl, t, e, this.textureConfig)
			}
			,
			t.prototype.createFloat16MatrixTexture = function(t, e) {
				return this.throwIfDisposed(),
					Gr(this.gl, t, e, this.textureConfig)
			}
			,
			t.prototype.createUnsignedBytesMatrixTexture = function(t, e) {
				return this.throwIfDisposed(),
					Hr(this.gl, t, e, this.textureConfig)
			}
			,
			t.prototype.uploadPixelDataToTexture = function(t, e) {
				this.throwIfDisposed(),
					Kr(this.gl, t, e)
			}
			,
			t.prototype.createFloat16PackedMatrixTexture = function(t, e) {
				return this.throwIfDisposed(),
					jr(this.gl, t, e, this.textureConfig)
			}
			,
			t.prototype.createPackedMatrixTexture = function(t, e) {
				return this.throwIfDisposed(),
					qr(this.gl, t, e, this.textureConfig)
			}
			,
			t.prototype.deleteMatrixTexture = function(t) {
				var e = this;
				this.throwIfDisposed(),
				this.outputTexture === t && (kr(this.gl, this.framebuffer),
					this.outputTexture = null),
					or(this.gl, function() {
						return e.gl.deleteTexture(t)
					})
			}
			,
			t.prototype.uploadMatrixToTexture = function(t, e, n, r) {
				this.throwIfDisposed();
				var o = yr();
				return Yr(this.gl, t, e, n, r, o, this.textureConfig)
			}
			,
			t.prototype.uploadMatrixToPackedTexture = function(t, e, n, r, o, i, a) {
				return this.throwIfDisposed(),
					Qr(this.gl, t, e, n, r, o, i, a, this.textureConfig)
			}
			,
			t.prototype.downloadFloat32MatrixFromOutputTexture = function(t, e, n) {
				var r = this;
				return this.downloadMatrixDriver(t, function() {
					return to(r.gl, e, n, r.textureConfig)
				})
			}
			,
			t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(t, e, n) {
				var r = this;
				return this.downloadMatrixDriver(t, function() {
					return eo(r.gl, e, n, r.textureConfig)
				})
			}
			,
			t.prototype.downloadPackedMatrixFromBuffer = function(t, e, n, r, o, i) {
				return no(this.gl, t, e, n, r, o, i, this.textureConfig)
			}
			,
			t.prototype.downloadFloat32MatrixFromBuffer = function(t, e, n) {
				return Zr(this.gl, t, e, n, this.textureConfig)
			}
			,
			t.prototype.maybeCreateBufferFromTexture = function(t, e, n) {
				this.bindTextureToFrameBuffer(t);
				var r = Jr(this.gl, t, e, n, this.textureConfig);
				return this.unbindTextureToFrameBuffer(),
					r
			}
			,
			t.prototype.createAndWaitForFence = function() {
				var t = this.createFence(this.gl);
				return this.pollFence(t)
			}
			,
			t.prototype.createFence = function(t) {
				var e, n, r = this;
				if (Ot.get("WEBGL_FENCE_API_ENABLED")) {
					var o = t
						, i = o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE, 0);
					t.flush(),
						n = function() {
							var t = o.clientWaitSync(i, 0, 0);
							return t === o.ALREADY_SIGNALED || t === o.CONDITION_SATISFIED
						}
						,
						e = i
				} else
					n = 0 < Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? (e = this.beginQuery(),
							this.endQuery(),
							function() {
								return r.isQueryAvailable(e, Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
							}
					) : function() {
						return !0
					}
					;
				return {
					query: e,
					isFencePassed: n
				}
			}
			,
			t.prototype.downloadMatrixFromPackedTexture = function(t, e, n, r, o, i) {
				var a = this;
				return this.downloadMatrixDriver(t, function() {
					return ro(a.gl, e, n, r, o, i, a.textureConfig)
				})
			}
			,
			t.prototype.createProgram = function(t) {
				this.throwIfDisposed();
				var e = this.gl
					, n = hr(e, t)
					, r = Br(e)
					, o = fr(e);
				return or(e, function() {
					return e.attachShader(o, r)
				}),
					or(e, function() {
						return e.attachShader(o, n)
					}),
					dr(e, o),
				this.autoDebugValidate && mr(e, o),
				this.vertexAttrsAreBound || (this.setProgram(o),
					this.vertexAttrsAreBound = $r(e, this.program, this.vertexBuffer)),
					o
			}
			,
			t.prototype.deleteProgram = function(t) {
				var e = this;
				this.throwIfDisposed(),
				t === this.program && (this.program = null),
				null != t && or(this.gl, function() {
					return e.gl.deleteProgram(t)
				})
			}
			,
			t.prototype.setProgram = function(t) {
				var e = this;
				this.throwIfDisposed(),
					this.program = t,
				null != this.program && this.autoDebugValidate && mr(this.gl, this.program),
					or(this.gl, function() {
						return e.gl.useProgram(t)
					})
			}
			,
			t.prototype.getUniformLocation = function(t, e, n) {
				return void 0 === n && (n = !0),
					this.throwIfDisposed(),
					n ? Sr(this.gl, t, e) : _r(this.gl, t, e)
			}
			,
			t.prototype.getAttributeLocation = function(t, e) {
				var n = this;
				return this.throwIfDisposed(),
					or(this.gl, function() {
						return n.gl.getAttribLocation(t, e)
					})
			}
			,
			t.prototype.getUniformLocationNoThrow = function(t, e) {
				return this.throwIfDisposed(),
					this.gl.getUniformLocation(t, e)
			}
			,
			t.prototype.setInputMatrixTexture = function(t, e, n) {
				this.throwIfDisposed(),
					this.throwIfNoProgram(),
					Rr(this.gl, this.program, t, e, n)
			}
			,
			t.prototype.setOutputMatrixTexture = function(t, e, n) {
				this.setOutputMatrixTextureDriver(t, n, e)
			}
			,
			t.prototype.setOutputPackedMatrixTexture = function(t, e, n) {
				this.throwIfDisposed();
				var r = er(e, n)
					, o = r[0]
					, i = r[1];
				this.setOutputMatrixTextureDriver(t, o, i)
			}
			,
			t.prototype.setOutputMatrixWriteRegion = function(t, e, n, r) {
				this.setOutputMatrixWriteRegionDriver(n, t, r, e)
			}
			,
			t.prototype.setOutputPackedMatrixWriteRegion = function(t, e, n, r) {
				throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
			}
			,
			t.prototype.debugValidate = function() {
				null != this.program && mr(this.gl, this.program),
					Dr(this.gl)
			}
			,
			t.prototype.executeProgram = function() {
				this.throwIfDisposed(),
					this.throwIfNoProgram();
				var t = this.gl;
				this.autoDebugValidate && this.debugValidate(),
					or(t, function() {
						return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0)
					})
			}
			,
			t.prototype.blockUntilAllProgramsCompleted = function() {
				var t = this;
				this.throwIfDisposed(),
					or(this.gl, function() {
						return t.gl.finish()
					})
			}
			,
			t.prototype.getQueryTimerExtension = function() {
				return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = cr(this.gl, 2 === Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")),
					this.disjointQueryTimerExtension
			}
			,
			t.prototype.getQueryTimerExtensionWebGL2 = function() {
				return this.getQueryTimerExtension()
			}
			,
			t.prototype.getQueryTimerExtensionWebGL1 = function() {
				return this.getQueryTimerExtension()
			}
			,
			t.prototype.beginQuery = function() {
				if (2 === Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
					var t = this.gl
						, e = this.getQueryTimerExtensionWebGL2()
						, n = t.createQuery();
					return t.beginQuery(e.TIME_ELAPSED_EXT, n),
						n
				}
				var r = this.getQueryTimerExtensionWebGL1()
					, o = r.createQueryEXT();
				return r.beginQueryEXT(r.TIME_ELAPSED_EXT, o),
					o
			}
			,
			t.prototype.endQuery = function() {
				if (2 !== Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
					var t = this.getQueryTimerExtensionWebGL1();
					t.endQueryEXT(t.TIME_ELAPSED_EXT)
				} else {
					var e = this.gl
						, n = this.getQueryTimerExtensionWebGL2();
					e.endQuery(n.TIME_ELAPSED_EXT)
				}
			}
			,
			t.prototype.waitForQueryAndGetTime = function(n) {
				return m(this, void 0, void 0, function() {
					var e = this;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, w(function() {
									return e.disposed || e.isQueryAvailable(n, Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
								})];
							case 1:
								return t.sent(),
									[2, this.getQueryTime(n, Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]
						}
					})
				})
			}
			,
			t.prototype.getQueryTime = function(t, e) {
				if (0 === e)
					return null;
				if (2 === e) {
					var n = this.gl;
					return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6
				}
				var r = this.getQueryTimerExtensionWebGL1();
				return r.getQueryObjectEXT(t, r.QUERY_RESULT_EXT) / 1e6
			}
			,
			t.prototype.isQueryAvailable = function(t, e) {
				if (0 === e)
					return !0;
				if (2 !== e)
					return o = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t, r.QUERY_RESULT_AVAILABLE_EXT),
					null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
					o && !this.disjoint;
				var n = this.gl
					, r = this.getQueryTimerExtensionWebGL2()
					, o = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
				return null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
				o && !this.disjoint
			}
			,
			t.prototype.pollFence = function(e) {
				var n = this;
				return new Promise(function(t) {
						n.addItemToPoll(function() {
							return e.isFencePassed()
						}, function() {
							return t()
						})
					}
				)
			}
			,
			t.prototype.pollItems = function() {
				for (var t = function(t) {
					for (var e = 0, n = t.length - 1, r = -1; e <= n; ) {
						var o = e + n >> 1;
						t[o]() ? e = (r = o) + 1 : n = o - 1
					}
					return r
				}(this.itemsToPoll.map(function(t) {
					return t.isDoneFn
				})), e = 0; e <= t; ++e)
					(0,
						this.itemsToPoll[e].resolveFn)();
				this.itemsToPoll = this.itemsToPoll.slice(t + 1)
			}
			,
			t.prototype.addItemToPoll = function(t, e) {
				var n = this;
				this.itemsToPoll.push({
					isDoneFn: t,
					resolveFn: e
				}),
				1 < this.itemsToPoll.length || w(function() {
					return n.pollItems(),
					0 === n.itemsToPoll.length
				})
			}
			,
			t.prototype.bindTextureToFrameBuffer = function(t) {
				this.throwIfDisposed(),
					Nr(this.gl, t, this.framebuffer),
				this.autoDebugValidate && Dr(this.gl)
			}
			,
			t.prototype.unbindTextureToFrameBuffer = function() {
				null != this.outputTexture ? (Nr(this.gl, this.outputTexture, this.framebuffer),
				this.autoDebugValidate && Dr(this.gl)) : kr(this.gl, this.framebuffer)
			}
			,
			t.prototype.downloadMatrixDriver = function(t, e) {
				this.bindTextureToFrameBuffer(t);
				var n = e();
				return this.unbindTextureToFrameBuffer(),
					n
			}
			,
			t.prototype.setOutputMatrixTextureDriver = function(t, e, n) {
				this.throwIfDisposed();
				var r = this.gl;
				Nr(r, t, this.framebuffer),
				this.autoDebugValidate && Dr(r),
					this.outputTexture = t,
					or(r, function() {
						return r.viewport(0, 0, e, n)
					}),
					or(r, function() {
						return r.scissor(0, 0, e, n)
					})
			}
			,
			t.prototype.setOutputMatrixWriteRegionDriver = function(t, e, n, r) {
				var o = this;
				this.throwIfDisposed(),
					or(this.gl, function() {
						return o.gl.scissor(t, e, n, r)
					})
			}
			,
			t.prototype.throwIfDisposed = function() {
				if (this.disposed)
					throw new Error("Attempted to use disposed GPGPUContext.")
			}
			,
			t.prototype.throwIfNoProgram = function() {
				if (null == this.program)
					throw new Error("No GPU program is currently set.")
			}
			,
			t
	}();
	function ao(t, s) {
		if (t.length !== s.length)
			throw Error("Binary was compiled with " + t.length + " inputs, but was executed with " + s.length + " inputs");
		t.forEach(function(t, e) {
			var n = t.logicalShape
				, r = s[e]
				, o = r.shape;
			if (!y(n, o))
				throw Error("Binary was compiled with different shapes than the current args. Shapes " + n + " and " + o + " must match");
			if (!t.isUniform || !r.isUniform) {
				var i = t.texShape
					, a = r.isUniform ? null : r.texData.texShape;
				if (!y(i, a))
					throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i + " and " + a + " must match")
			}
		})
	}
	var so = function(t, e, n) {
		this.variableNames = ["A"],
			this.outputShape = t;
		var r = n.filterWidth
			, o = n.inChannels
			, i = n.strideWidth
			, a = n.strideHeight
			, s = n.padInfo
			, u = n.outWidth
			, c = n.dilationWidth
			, l = n.dilationHeight
			, h = s.left
			, p = s.top
			, f = o * r;
		this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            int blockIndex = rc.y + col;\n            int pos = rc.x + row;\n\n            if(blockIndex >= " + t[1] + " || pos >= " + t[0] + ") continue;\n\n            int offsetY = int(blockIndex / (" + u + ")) * " + a + " - " + p + ";\n            int d0 = offsetY + " + l + " * (pos / " + f + ");\n\n            if(d0 >= " + e[0] + " || d0 < 0) continue;\n\n            int offsetX = int(mod(float(blockIndex), " + u + ".) * " + i + ". - " + h + ".);\n            int d1 = offsetX + " + c + " * (int(mod(float(pos), " + f + ".) / " + o + ".));\n\n            if(d1 >= " + e[1] + " || d1 < 0) continue;\n\n            result[row * 2 + col] = getA(d0, d1, int(mod(float(pos), " + o + ".)));\n          }\n        }\n\n        gl_FragColor = result;\n      }\n    "
	}
		, uo = function(t, e, n, r, o) {
		this.variableNames = ["x"],
			this.outputShape = [];
		var i, a = e, s = t[3] - 1;
		this.outputShape = t;
		var u = "float(" + n + ") + float(" + r + ") * sum";
		i = .5 === o ? "inversesqrt(" + u + ")" : 1 === o ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));",
			this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + a + "; j <= " + a + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + i + ";\n        setOutput(val);\n      }\n    "
	}
		, co = function(t, e, n, r, o) {
		this.variableNames = ["inputImage", "outputImage", "dy"],
			this.outputShape = [],
			this.outputShape = t,
			this.depth = t[3],
			this.depthRadius = e,
			this.bias = n,
			this.alpha = r,
			this.beta = o,
			this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + e + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + e + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r + ") * norm + float(" + n + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r + ")\n                * float(" + o + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + o + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    "
	}
		, lo = function(t) {
		this.variableNames = ["dy", "maxPos"],
			this.outputShape = t.inShape;
		var e = t.strideHeight
			, n = t.strideWidth
			, r = t.dilationHeight
			, o = t.effectiveFilterHeight
			, i = t.effectiveFilterWidth
			, a = o - 1 - t.padInfo.top
			, s = i - 1 - t.padInfo.left
			, u = o * i - 1;
		this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + o + ";\n          wR += " + r + ") {\n          float dyR = float(dyRCorner + wR) / " + e + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + i + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + n + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + i + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
	}
		, ho = function(t, e, n, r) {
		void 0 === n && (n = !1),
		void 0 === r && (r = !1),
			this.variableNames = ["matrixA", "matrixB"];
		var o = t[0]
			, i = n ? t[2] : t[1]
			, a = r ? e[1] : e[2]
			, s = n ? t[1] : t[2];
		this.outputShape = [o, i, a];
		var u = function(t, e) {
			return n ? "batch, " + e + " + " + t + ", aRow" : "batch, aRow, " + e + " + " + t
		}
			, c = function(t, e) {
			return r ? "batch, bCol, " + e + " + " + t : "batch, " + e + " + " + t + ", bCol"
		}
			, l = 4 * Math.floor(s / 4)
			, h = s % 4;
		this.userCode = " float dotARowBCol(int batch, int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < " + l + "; i += 4) {\n        vec4 a = vec4(\n          getMatrixA(" + u(0, "i") + "),\n          getMatrixA(" + u(1, "i") + "),\n          getMatrixA(" + u(2, "i") + "),\n          getMatrixA(" + u(3, "i") + ")\n        );\n        vec4 b = vec4(\n          getMatrixB(" + c(0, "i") + "),\n          getMatrixB(" + c(1, "i") + "),\n          getMatrixB(" + c(2, "i") + "),\n          getMatrixB(" + c(3, "i") + ")\n        );\n\n        result += dot(a, b);\n      }\n\n      if (" + (1 === h) + ") {\n        result += getMatrixA(" + u(0, l) + ") *\n          getMatrixB(" + c(0, l) + ");\n      } else if (" + (2 === h) + ") {\n        vec2 a = vec2(\n          getMatrixA(" + u(0, l) + "),\n          getMatrixA(" + u(1, l) + ")\n        );\n        vec2 b = vec2(\n          getMatrixB(" + c(0, l) + "),\n          getMatrixB(" + c(1, l) + ")\n        );\n        result += dot(a, b);\n      } else if (" + (3 === h) + ") {\n        vec3 a = vec3(\n          getMatrixA(" + u(0, l) + "),\n          getMatrixA(" + u(1, l) + "),\n          getMatrixA(" + u(2, l) + ")\n        );\n        vec3 b = vec3(\n          getMatrixB(" + c(0, l) + "),\n          getMatrixB(" + c(1, l) + "),\n          getMatrixB(" + c(2, l) + ")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec3 resBRC = getOutputCoords();\n      setOutput(dotARowBCol(resBRC.x, resBRC.y, resBRC.z));\n    }\n    "
	}
		, po = function(t, e, n, r, o) {
		void 0 === r && (r = !1),
		void 0 === o && (o = !1),
			this.variableNames = ["matrixA", "matrixB"],
			this.usesPackedTextures = !0,
			this.outputShape = n;
		var i = r ? t[0] : t[1]
			, a = Math.ceil(i / 2)
			, s = r ? "i * 2, rc.x" : "rc.x, i * 2"
			, u = o ? "rc.y, i * 2" : "i * 2, rc.y"
			, c = r ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"]
			, l = o ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"];
		this.userCode = "\n      const float sharedDimension = " + a + ".0;\n\n      vec4 dot2x2ARowBCol(ivec2 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + a + "; i++) {\n          vec4 a = getMatrixA(" + s + ");\n          vec4 b = getMatrixB(" + u + ");\n\n          result += (" + c[0] + " * " + l[0] + ") + (" + c[1] + " * " + l[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec2 rc = getOutputCoords();\n        setOutput(dot2x2ARowBCol(rc));\n      }\n    "
	}
		, fo = function() {
		function t(t, e, n) {
			this.variableNames = ["probs"],
				this.outputShape = [t, n],
				this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (e - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (e - 1) + "));\n      }\n    "
		}
		return t.prototype.getCustomSetupFunc = function(n) {
			var r = this;
			return function(t, e) {
				null == r.seedLoc && (r.seedLoc = t.getUniformLocation(e, "seed")),
					t.gl.uniform1f(r.seedLoc, n)
			}
		}
			,
			t
	}()
		, mo = function(t, e, n, r) {
		this.variableNames = ["indices"],
			this.outputShape = [t, e],
			this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r + "), float(" + n + "),\n                      float(index == coords.y)));\n      }\n    "
	};
	function vo(t, e) {
		return 1 === e ? [t] : (n = t,
			["x", "y", "z", "w", "u", "v"].slice(0, e).map(function(t) {
				return n + "." + t
			}));
		var n
	}
	var go = function(t) {
		this.variableNames = ["A"],
			this.isPackShader = !0;
		var e, n, r, o, i = (this.outputShape = t).length;
		if (0 === i)
			this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
		else {
			var a = vo("rc", i)
				, s = On(i)
				, u = function(t, e, n) {
				if (1 === t)
					return "rc > " + e[0];
				for (var r = "", o = t - 2; o < t; o++)
					r += n[o] + " >= " + e[o],
					o < t - 1 && (r += "||");
				return r
			}(i, t, a)
				, c = function(t, e, n, r) {
				if (1 === t)
					return "";
				var o = r.slice(-2);
				return "\n    int r = " + o[0] + ";\n    int c = " + o[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + e + ";\n    bool rEdge = rp1 >= " + n + ";\n  "
			}(i, t[t.length - 1], t[t.length - 2], a)
				, l = (n = a,
				r = (e = t).length,
				o = function(t, e) {
					for (var n = [], r = 0; r <= 1; r++)
						for (var o = 0; o <= 1; o++) {
							for (var i = (0 === r ? "r" : "rp1") + ", " + (0 === o ? "c" : "cp1"), a = 2; a < t; a++)
								i = e[e.length - 1 - a] + "," + i;
							n.push(i)
						}
					return n
				}(r, n),
				1 === r ? "getA(rc),\n            rc + 1 >= " + e[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + o[0] + "),\n          cEdge ? 0. : getA(" + o[1] + "),\n          rEdge ? 0. : getA(" + o[2] + "),\n          rEdge || cEdge ? 0. : getA(" + o[3] + ")");
			this.userCode = "\n        void main() {\n          " + s + " rc = getOutputCoords();\n\n          if(" + u + ") {\n            setOutput(vec4(0));\n          } else {\n            " + c + "\n\n            setOutput(vec4(" + l + "));\n          }\n        }\n      "
		}
	};
	var yo = function(n, t, e) {
		this.variableNames = ["x"],
			this.outputShape = t.map(function(t, e) {
				return t[0] + n[e] + t[1]
			});
		var r = n.length
			, o = On(r)
			, i = t.map(function(t) {
			return t[0]
		}).join(",")
			, a = t.map(function(t, e) {
			return t[0] + n[e]
		}).join(",")
			, s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r);
		this.userCode = 1 !== r ? "\n      " + o + " start = " + o + "(" + i + ");\n      " + o + " end = " + o + "(" + a + ");\n\n      void main() {\n        " + o + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + e + "));\n        } else {\n          " + o + " coords = outC - start;\n          setOutput(getX(" + s + "));\n        }\n      }\n    " : "\n        int start = " + i + ";\n        int end = " + a + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + e + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "
	}
		, xo = function(t, e, n) {
		if (this.variableNames = ["x"],
		"avg" === e && n)
			throw new Error("Cannot compute positions for average pool.");
		var r = t.filterWidth
			, o = t.strideHeight
			, i = t.strideWidth
			, a = t.dilationHeight
			, s = t.dilationWidth
			, u = t.effectiveFilterHeight
			, c = t.effectiveFilterWidth
			, l = t.padInfo.top
			, h = t.padInfo.left;
		this.outputShape = t.outShape;
		var p = "avg" === e
			, f = "0.0";
		if (p || (f = "-1.0 / 0.0"),
			n)
			this.userCode = "\n        const ivec2 strides = ivec2(" + o + ", " + i + ");\n        const ivec2 pads = ivec2(" + l + ", " + h + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + u + ";\n              wR += " + a + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + c + ";\n                wC += " + s + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + c + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
		else {
			var d = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
			"avg" === e && (d = "avgValue / count");
			var m = 4 * Math.floor(r / 4)
				, v = r % 4
				, g = "\n      if (" + p + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
			this.userCode = "\n      const ivec2 strides = ivec2(" + o + ", " + i + ");\n      const ivec2 pads = ivec2(" + l + ", " + h + ");\n      const float initializationValue = " + f + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + f + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + u + ";\n            wR += " + a + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + m + "; wC += 4) {\n            int xC = xCCorner + wC * " + s + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              getValue(batch, xR, xC + 3 * " + s + ", d)\n            );\n\n            " + g + "\n          }\n\n          int xC = xCCorner + " + m + ";\n          if (" + (1 === v) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (2 === v) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (3 === v) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              initializationValue\n            );\n\n            " + g + "\n          }\n        }\n        setOutput(" + d + ");\n      }\n    "
		}
	}
		, wo = function(t, e) {
		this.variableNames = ["x"];
		var n = t.windowSize
			, r = t.batchSize
			, o = t.inSize
			, i = Math.ceil(o / n);
		this.outputShape = [r, i];
		var a = "0.0"
			, s = "";
		"prod" === e ? a = "1.0" : "min" === e ? (a = "1.0 / 0.0",
			s = "min") : "max" === e && (a = "-1.0 / 0.0",
			s = "max");
		var u = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
		"sum" === e ? u = "sumValue" : "prod" === e ? u = "prodValue" : "all" === e ? u = "allValue" : "any" === e && (u = "anyValue");
		var c = 4 * Math.floor(n / 4)
			, l = n % 4
			, h = "\n      if (" + ("sum" === e) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === e) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s + "(values, minMaxValue);\n      }\n    "
			, p = "vec4";
		"all" === e ? (a = "1.0",
			h = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",
			p = "bvec4") : "any" === e && (a = "0.0",
			h = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",
			p = "bvec4");
		var f = "";
		0 < o % n && (f = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      "),
			this.userCode = "\n      const float initializationValue = " + a + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + f + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n + ";\n\n        vec4 minMaxValue = vec4(" + a + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + c + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h + "\n        }\n\n        int inIdx = inOffset + " + c + ";\n        if (" + (1 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (2 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (3 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + h + "\n        }\n        setOutput(" + u + ");\n      }\n    "
	}
		, bo = function(t, e) {
		this.variableNames = ["A"],
			this.usesPackedTextures = !0,
			this.outputShape = t;
		for (var n = "", r = 0; r < 4; r++) {
			var o = "thisRC = rc;";
			r % 2 == 1 && (o += "thisRC.z += 1;"),
			1 < r && (o += "thisRC.y += 1;"),
				n += "\n        " + o + "\n        " + (0 < r ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + r + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (0 < r ? "}" : "") + "\n      "
		}
		this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + _n(["r", "c", "d"], e) + "\n      return ivec3(r, c, d);\n    }\n  \n      \n    int getFlatIndex(ivec3 coords) {\n      return round(" + function(t, e) {
			if (t.length !== e.length)
				throw new Error("Vectors to be dotted must be of the same length -got " + t.length + " and " + e.length);
			for (var n = [], r = Math.floor(t.length / 4), o = t.length % 4, i = 0; i < r; i++) {
				var a = t.slice(4 * i, 4 * i + 4)
					, s = e.slice(4 * i, 4 * i + 4);
				n.push(Rn(a) + ", " + Rn(s))
			}
			return 0 !== o && (a = t.slice(4 * r),
				s = e.slice(4 * r),
			1 === a.length && (a = a.map(function(t) {
				return "float(" + t + ")"
			}),
				s = s.map(function(t) {
					return "float(" + t + ")"
				})),
				n.push(Rn(a) + ", " + Rn(s))),
				n.map(function(t, e) {
					return "dot(" + t + ")"
				}).join("+")
		}(["coords.x", "coords.y", "coords.z"], U(t).map(function(t) {
			return t.toString()
		}).concat(["1."])) + ");\n    }\n  \n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t[1] + ";\n        int cols = " + t[2] + ";\n\n        " + n + "\n\n        setOutput(result);\n      }\n    "
	};
	var Eo = function(t, e, n) {
		this.variableNames = ["dy"],
			this.outputShape = [],
			this.outputShape = e.shape;
		var r = e.shape
			, o = r[1]
			, i = r[2]
			, a = t.shape
			, s = a[1]
			, u = a[2]
			, c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i]
			, l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u]
			, h = c[0] / l[0]
			, p = c[1] / l[1]
			, f = 1 / h
			, d = 1 / p
			, m = 2 * Math.ceil(f) + 2
			, v = 2 * Math.ceil(d) + 2;
		this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + p + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + m + ");\n        const int winWidth = int(" + v + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (o - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (i - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
	}
		, Co = function(t, e, n, r) {
		this.variableNames = ["A"],
			this.outputShape = [];
		var o = t[0]
			, i = t[1]
			, a = t[2]
			, s = t[3];
		this.outputShape = [o, e, n, s];
		var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a]
			, c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
		this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "
	}
		, So = function(t, e, n) {
		this.variableNames = ["dy"],
			this.outputShape = [],
			this.outputShape = e.shape;
		var r = e.shape
			, o = r[1]
			, i = r[2]
			, a = t.shape
			, s = a[1]
			, u = a[2]
			, c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i]
			, l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u]
			, h = c[0] / l[0]
			, p = c[1] / l[1]
			, f = 1 / h
			, d = 1 / p
			, m = 2 * Math.ceil(f) + 2
			, v = 2 * Math.ceil(d) + 2;
		this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + p + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + m + ");\n        const int winWidth = int(" + v + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c[0] + ") *\n                (float(dyR) / float(" + l[0] + "));\n\n            float sourceFracCol =\n                float(" + c[1] + ") *\n                  (float(dyC) / float(" + l[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + o + ") - 1),\n                " + n + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + i + ") - 1),\n                " + n + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
	}
		, _o = function(t, e, n, r) {
		this.variableNames = ["A"],
			this.outputShape = [];
		var o = t[0]
			, i = t[1]
			, a = t[2]
			, s = t[3];
		this.outputShape = [o, e, n, s];
		var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a]
			, c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n]
			, l = r ? "0.5" : "0.0";
		this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + l + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "
	}
		, Ro = function(r, o) {
		this.variableNames = ["x"];
		var t = r.length;
		if (4 < t)
			throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
		if (this.outputShape = r,
		1 !== t) {
			var e = r.map(function(t, e) {
				return n = e,
					-1 !== o.indexOf(n) && 1 !== r[n] ? r[n] + " - coords[" + n + "] - 1" : "coords[" + n + "]";
				var n
			}).join(",")
				, n = On(t);
			this.userCode = "\n      void main() {\n        " + n + " coords = getOutputCoords();\n        setOutput(getX(" + e + "));\n      }\n    "
		} else
			this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + r[0] + " - coord - 1));\n        }\n      "
	}
		, No = function(t, e, n, r, o, i, a) {
		void 0 === a && (a = !0),
			this.variableNames = ["updates", "indices", "defaultValue"],
			this.outputShape = i;
		var s = On(o.length)
			, u = On(i.length)
			, c = "";
		1 === n ? c = "i" : 2 === n && (c = "i, j");
		var l = "getIndices(" + c + ")"
			, h = "";
		1 === r ? h = "i" : 2 === r && (h = "i, coords[1]");
		var p = "getUpdates(" + h + ")"
			, f = 1 < e ? "strides[j]" : "strides";
		this.userCode = "\n        " + s + " strides = " + s + "(" + o + ");\n\n        void main() {\n          " + u + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + e + "; j++) {\n              int index = round(" + l + ");\n              flattenedIndex += index * " + f + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + p + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      "
	}
		, ko = function(t, e) {
		this.variableNames = ["x", "segmentIds"];
		var n = t.windowSize
			, r = t.batchSize
			, o = t.inSize
			, i = t.numSegments
			, a = i * Math.ceil(o / n);
		this.outputShape = [r, a];
		var s = 4 * Math.floor(n / 4)
			, u = n % 4
			, c = "\n        sumValue += dot(values, filter);\n    "
			, l = "";
		0 < o % n && (l = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      ");
		var h = "";
		0 < o % n && (h = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return -1.0;\n        }\n      "),
			this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + l + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + h + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + i + ")) * float(" + n + "));\n        int currentSeg = int(mod(float(outIdx), float(" + i + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + c + "\n        }\n\n        int inIdx = inOffset + " + s + ";\n        if (" + (1 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + c + "\n        } else if (" + (2 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + c + "\n        } else if (" + (3 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 filter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + c + "\n        }\n        setOutput(sumValue);\n      }\n    "
	}
		, Do = function(t, e, n) {
		var r, o;
		if (this.variableNames = ["c", "a", "b"],
			this.outputShape = e,
		4 < n)
			throw Error("Where for rank " + n + " is not yet supported");
		if (1 === n)
			r = o = "resRC";
		else {
			for (var i = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], a = [], s = [], u = 0; u < e.length; u++)
				s.push("" + i[u]),
				u < t && a.push("" + i[u]);
			r = a.join(),
				o = s.join()
		}
		var c = On(n);
		this.userCode = "\n      void main() {\n        " + c + " resRC = getOutputCoords();\n        float cVal = getC(" + r + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + o + "));\n        } else {\n          setOutput(getB(" + o + "));\n        }\n      }\n    "
	}
		, To = function() {
		function t(t) {
			this.variableNames = ["source"],
				this.outputShape = t,
				this.rank = t.length;
			var e = On(this.rank)
				, n = function(t) {
				if (1 === t)
					return "sourceLoc";
				if (2 === t)
					return "sourceLoc.x, sourceLoc.y";
				if (3 === t)
					return "sourceLoc.x, sourceLoc.y, sourceLoc.z";
				if (4 === t)
					return "sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w";
				throw Error("Slicing for rank " + t + " is not yet supported")
			}(this.rank);
			this.userCode = "\n      uniform " + e + " start;\n\n      void main() {\n        " + e + " sourceLoc = start + getOutputCoords();\n        setOutput(getSource(" + n + "));\n      }\n    "
		}
		return t.prototype.getCustomSetupFunc = function(n) {
			var r = this;
			if (n.length !== this.rank)
				throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + n.length + ")");
			return function(t, e) {
				if (null != r.startLoc || (r.startLoc = t.getUniformLocationNoThrow(e, "start"),
				null != r.startLoc))
					if (1 === r.rank)
						t.gl.uniform1i(r.startLoc, n[0]);
					else if (2 === r.rank)
						t.gl.uniform2i(r.startLoc, n[0], n[1]);
					else if (3 === r.rank)
						t.gl.uniform3i(r.startLoc, n[0], n[1], n[2]);
					else {
						if (4 !== r.rank)
							throw Error("Slicing for rank " + r.rank + " is not yet supported");
						t.gl.uniform4i(r.startLoc, n[0], n[1], n[2], n[3])
					}
			}
		}
			,
			t
	}();
	var Io = function(t, e, n, r) {
		this.variableNames = ["x"];
		var o = n.filter(function(t, e) {
			return -1 === r.indexOf(e)
		});
		this.outputShape = o;
		var i = n.length
			, a = On(n.length)
			, s = On(o.length)
			, u = "";
		if (1 === i)
			u = "coords * strides + begin";
		else {
			var c = 0;
			u = n.map(function(t, e) {
				return -1 === r.indexOf(e) ? (c++,
					1 === o.length ? "coords * strides[" + e + "] + begin[" + e + "]" : "coords[" + (c - 1) + "] * strides[" + e + "] + begin[" + e + "]") : "begin[" + e + "]"
			}).join(",")
		}
		this.userCode = "\n      " + a + " begin = " + a + "(" + t + ");\n      " + a + " strides = " + a + "(" + e + ");\n\n      void main() {\n        " + s + " coords = getOutputCoords();\n        setOutput(getX(" + u + "));\n      }\n    "
	}
		, Ao = function() {
		function t(t) {
			this.gpgpu = t,
				this.numUsedTextures = 0,
				this.numFreeTextures = 0,
				this.freeTextures = {},
				this.logEnabled = !1,
				this.usedTextures = {}
		}
		return t.prototype.acquireTexture = function(t, e, n) {
			var r, o = Mo(e, n), i = Fo(t, o, n);
			if (i in this.freeTextures || (this.freeTextures[i] = []),
			i in this.usedTextures || (this.usedTextures[i] = []),
			0 < this.freeTextures[i].length) {
				this.numFreeTextures--,
					this.numUsedTextures++,
					this.log();
				var a = this.freeTextures[i].shift();
				return this.usedTextures[i].push(a),
					a
			}
			return this.numUsedTextures++,
				this.log(),
				o === Kn.PACKED_2X2_FLOAT32 ? r = this.gpgpu.createPackedMatrixTexture(t[0], t[1]) : o === Kn.PACKED_2X2_FLOAT16 ? r = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]) : o === Kn.UNPACKED_FLOAT32 ? r = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]) : o === Kn.UNPACKED_FLOAT16 ? r = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]) : o === Kn.PACKED_4X1_UNSIGNED_BYTE && (r = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])),
				this.usedTextures[i].push(r),
				r
		}
			,
			t.prototype.releaseTexture = function(t, e, n, r) {
				if (null != this.freeTextures) {
					var o = Fo(e, Mo(n, r), r);
					o in this.freeTextures || (this.freeTextures[o] = []),
						this.freeTextures[o].push(t),
						this.numFreeTextures++,
						this.numUsedTextures--;
					var i = this.usedTextures[o]
						, a = i.indexOf(t);
					if (a < 0)
						throw new Error("Cannot release a texture that was never provided by this texture manager");
					i.splice(a, 1),
						this.log()
				}
			}
			,
			t.prototype.log = function() {
				if (this.logEnabled) {
					var t = this.numFreeTextures + this.numUsedTextures;
					console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t + ")")
				}
			}
			,
			t.prototype.getNumUsedTextures = function() {
				return this.numUsedTextures
			}
			,
			t.prototype.getNumFreeTextures = function() {
				return this.numFreeTextures
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				if (null != this.freeTextures) {
					for (var t in this.freeTextures)
						this.freeTextures[t].forEach(function(t) {
							e.gpgpu.deleteMatrixTexture(t)
						});
					for (var t in this.usedTextures)
						this.usedTextures[t].forEach(function(t) {
							e.gpgpu.deleteMatrixTexture(t)
						});
					this.freeTextures = null,
						this.usedTextures = null,
						this.numUsedTextures = 0,
						this.numFreeTextures = 0
				}
			}
			,
			t
	}();
	function Mo(t, e) {
		if (t === $n.UPLOAD)
			return e ? Kn.PACKED_2X2_FLOAT32 : Kn.UNPACKED_FLOAT32;
		if (t === $n.RENDER || null == t)
			return e ? Ot.get("WEBGL_RENDER_FLOAT32_ENABLED") ? Kn.PACKED_2X2_FLOAT32 : Kn.PACKED_2X2_FLOAT16 : Ot.get("WEBGL_RENDER_FLOAT32_ENABLED") ? Kn.UNPACKED_FLOAT32 : Kn.UNPACKED_FLOAT16;
		if (t === $n.DOWNLOAD || t === $n.PIXELS)
			return Kn.PACKED_4X1_UNSIGNED_BYTE;
		throw new Error("Unknown logical texture type " + t)
	}
	function Fo(t, e, n) {
		return t[0] + "_" + t[1] + "_" + e + "_" + n
	}
	var Oo = function(t, e) {
		this.variableNames = ["A"];
		for (var n = new Array(t.length), r = 0; r < n.length; r++)
			n[r] = t[r] * e[r];
		this.outputShape = n,
			this.rank = n.length;
		var o = On(this.rank)
			, i = function(t) {
			var e = t.length;
			if (5 < e)
				throw Error("Tile for rank " + e + " is not yet supported");
			if (1 === e)
				return "imod(resRC, " + t[0] + ")";
			for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r = [], o = 0; o < t.length; o++)
				r.push("imod(" + n[o] + ", " + t[o] + ")");
			return r.join()
		}(t);
		this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
	};
	var Po = function(t, e) {
		this.variableNames = ["A"];
		for (var n = new Array(t.length), r = 0; r < n.length; r++)
			n[r] = t[e[r]];
		this.outputShape = n,
			this.rank = n.length;
		var o = On(this.rank)
			, i = function(t) {
			var e = t.length;
			if (6 < e)
				throw Error("Transpose for rank " + e + " is not yet supported");
			for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r = new Array(e), o = 0; o < t.length; o++)
				r[t[o]] = n[o];
			return r.join()
		}(e);
		this.userCode = "\n    void main() {\n      " + o + " resRC = getOutputCoords();\n      setOutput(getA(" + i + "));\n    }\n    "
	};
	var Bo = 1.7580993408473768
		, Lo = 1.0507009873554805
		, Wo = function() {
		function t(t, e) {
			this.variableNames = ["A"],
				this.outputShape = t,
				this.userCode = "\n      uniform float NAN;\n      float unaryOperation(float x) {\n        " + e + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
		}
		return t.prototype.getCustomSetupFunc = function() {
			var n = this;
			return function(t, e) {
				null == n.startLoc && (n.startLoc = t.getUniformLocationNoThrow(e, "NAN"),
				null == n.startLoc) || t.gl.uniform1f(n.startLoc, NaN)
			}
		}
			,
			t
	}()
		, zo = "if (isNaN(x)) return x;";
	var Uo = function(t) {
		this.variableNames = ["A"],
			this.usesPackedTextures = !0;
		var e = (this.outputShape = t).length
			, n = vo("rc", e)
			, r = On(e)
			, o = function(t, e) {
			if (1 === t)
				return "rc";
			for (var n = "", r = 0; r < t; r++)
				n += e[r],
				r < t - 1 && (n += ",");
			return n
		}(e, n)
			, i = n.slice(-2)
			, a = e <= 1 ? "rc" : "vec2(" + i.join(",") + ")";
		this.userCode = "\n      void main() {\n        " + r + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + o + ");\n\n        setOutput(getChannel(packedInput, " + a + "));\n      }\n    "
	};
	var Vo = ge({
		concat_: function(t, n) {
			void 0 === n && (n = 0),
				A(1 <= t.length, "Pass at least one tensor to concat");
			var e = ve(t, "tensors", "concat");
			n = te(n, e[0].shape)[0];
			var r = ie(e.map(function(t) {
				return t.shape
			}), n);
			if (0 === L(r))
				return Ce([], r);
			if (1 === (e = e.filter(function(t) {
				return 0 < t.size
			})).length)
				return e[0];
			var o = e.map(function(t) {
				return t.shape
			});
			!function(t, r) {
				var o = t[0].length;
				t.forEach(function(t, e) {
					A(t.length === o, "Error in concat" + o + "D: rank of tensors[" + e + "] must be the same as the rank of the rest (" + o + ")")
				}),
					A(0 <= r && r < o, "Error in concat" + o + "D: axis must be between 0 and " + (o - 1) + ".");
				var i = t[0];
				t.forEach(function(t, e) {
					for (var n = 0; n < o; n++)
						A(n === r || t[n] === i[n], "Error in concat" + o + "D: Shape of tensors[" + e + "] (" + t + ") does not match the shape of the rest (" + i + ") along the non-concatenated axis " + e + ".")
				})
			}(o, n);
			var i = e;
			return Ot.engine.runKernel(function(t) {
				return t.concat(e, n)
			}, i, function(t) {
				var e = o.map(function(t) {
					return t[n]
				});
				return $o(t, e, n).map(function(t) {
					return function() {
						return t
					}
				})
			})
		}
	})
		, Go = ge({
		concat1d_: function(t) {
			return Vo(t, 0)
		}
	})
		, Ho = ge({
		concat2d_: function(t, e) {
			return Vo(t, e)
		}
	})
		, qo = ge({
		concat3d_: function(t, e) {
			return Vo(t, e)
		}
	})
		, jo = ge({
		concat4d_: function(t, e) {
			return Vo(t, e)
		}
	})
		, $o = ge({
		split_: function(t, e, n) {
			void 0 === n && (n = 0);
			var r, o = me(t, "x", "split");
			return n = te(n, o.shape)[0],
				r = "number" == typeof e ? (A(o.shape[n] % e == 0, "Number of splits must evenly divide the axis."),
					Array(e).fill(o.shape[n] / e)) : (A(o.shape[n] === e.reduce(function(t, e) {
					return t + e
				}), "The sum of sizes must match the size of the axis dimension."),
					e),
				Ot.engine.runKernel(function(t) {
					return t.split(o, r, n)
				}, {
					$x: o
				}, function(t) {
					return {
						$x: function() {
							return Vo(t, n)
						}
					}
				})
		}
	});
	function Ko(t, e) {
		return t(e = {
			exports: {}
		}, e.exports),
			e.exports
	}
	var Xo = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.c = t.c,
					e.s0 = t.s0,
					e.s1 = t.s1,
					e.s2 = t.s2,
					e
			}
			function r(t, e) {
				var n = new function(t) {
					var r, e = this, n = (r = 4022871197,
							function(t) {
								t = t.toString();
								for (var e = 0; e < t.length; e++) {
									var n = .02519603282416938 * (r += t.charCodeAt(e));
									n -= r = n >>> 0,
										r = (n *= r) >>> 0,
										r += 4294967296 * (n -= r)
								}
								return 2.3283064365386963e-10 * (r >>> 0)
							}
					);
					e.next = function() {
						var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
						return e.s0 = e.s1,
							e.s1 = e.s2,
							e.s2 = t - (e.c = 0 | t)
					}
						,
						e.c = 1,
						e.s0 = n(" "),
						e.s1 = n(" "),
						e.s2 = n(" "),
						e.s0 -= n(t),
					e.s0 < 0 && (e.s0 += 1),
						e.s1 -= n(t),
					e.s1 < 0 && (e.s1 += 1),
						e.s2 -= n(t),
					e.s2 < 0 && (e.s2 += 1),
						n = null
				}
				(t)
					, r = e && e.state
					, o = n.next;
				return o.int32 = function() {
					return 4294967296 * n.next() | 0
				}
					,
					o.double = function() {
						return o() + 11102230246251565e-32 * (2097152 * o() | 0)
					}
					,
					o.quick = o,
				r && ("object" == typeof r && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.alea = r
		}(0, t)
	})
		, Yo = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.x = t.x,
					e.y = t.y,
					e.z = t.z,
					e.w = t.w,
					e
			}
			function r(t, e) {
				var n = new function(t) {
					var e = this
						, n = "";
					e.x = 0,
						e.y = 0,
						e.z = 0,
						e.w = 0,
						e.next = function() {
							var t = e.x ^ e.x << 11;
							return e.x = e.y,
								e.y = e.z,
								e.z = e.w,
								e.w ^= e.w >>> 19 ^ t ^ t >>> 8
						}
						,
						t === (0 | t) ? e.x = t : n += t;
					for (var r = 0; r < n.length + 64; r++)
						e.x ^= 0 | n.charCodeAt(r),
							e.next()
				}
				(t)
					, r = e && e.state
					, o = function() {
					return (n.next() >>> 0) / 4294967296
				};
				return o.double = function() {
					do {
						var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === t);return t
				}
					,
					o.int32 = n.next,
					o.quick = o,
				r && ("object" == typeof r && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.xor128 = r
		}(0, t)
	})
		, Qo = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.x = t.x,
					e.y = t.y,
					e.z = t.z,
					e.w = t.w,
					e.v = t.v,
					e.d = t.d,
					e
			}
			function r(t, e) {
				var n = new function(t) {
					var e = this
						, n = "";
					e.next = function() {
						var t = e.x ^ e.x >>> 2;
						return e.x = e.y,
							e.y = e.z,
							e.z = e.w,
							e.w = e.v,
						(e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
					}
						,
						e.x = 0,
						e.y = 0,
						e.z = 0,
						e.w = 0,
						t === ((e.v = 0) | t) ? e.x = t : n += t;
					for (var r = 0; r < n.length + 64; r++)
						e.x ^= 0 | n.charCodeAt(r),
						r == n.length && (e.d = e.x << 10 ^ e.x >>> 4),
							e.next()
				}
				(t)
					, r = e && e.state
					, o = function() {
					return (n.next() >>> 0) / 4294967296
				};
				return o.double = function() {
					do {
						var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === t);return t
				}
					,
					o.int32 = n.next,
					o.quick = o,
				r && ("object" == typeof r && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.xorwow = r
		}(0, t)
	})
		, Jo = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.x = t.x.slice(),
					e.i = t.i,
					e
			}
			function r(t, e) {
				null == t && (t = +new Date);
				var n = new function(t) {
					var o = this;
					o.next = function() {
						var t, e, n = o.x, r = o.i;
						return t = n[r],
							e = (t ^= t >>> 7) ^ t << 24,
							e ^= (t = n[r + 1 & 7]) ^ t >>> 10,
							e ^= (t = n[r + 3 & 7]) ^ t >>> 3,
							e ^= (t = n[r + 4 & 7]) ^ t << 7,
							t = n[r + 7 & 7],
							e ^= (t ^= t << 13) ^ t << 9,
							n[r] = e,
							o.i = r + 1 & 7,
							e
					}
						,
						function(t, e) {
							var n, r = [];
							if (e === (0 | e))
								r[0] = e;
							else
								for (e = "" + e,
									     n = 0; n < e.length; ++n)
									r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
							for (; r.length < 8; )
								r.push(0);
							for (n = 0; n < 8 && 0 === r[n]; ++n)
								;
							for (8 == n ? r[7] = -1 : r[n],
								     t.x = r,
								     t.i = 0,
								     n = 256; 0 < n; --n)
								t.next()
						}(o, t)
				}
				(t)
					, r = e && e.state
					, o = function() {
					return (n.next() >>> 0) / 4294967296
				};
				return o.double = function() {
					do {
						var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === t);return t
				}
					,
					o.int32 = n.next,
					o.quick = o,
				r && (r.x && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.xorshift7 = r
		}(0, t)
	})
		, Zo = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.i = t.i,
					e.w = t.w,
					e.X = t.X.slice(),
					e
			}
			function r(t, e) {
				null == t && (t = +new Date);
				var n = new function(t) {
					var i = this;
					i.next = function() {
						var t, e, n = i.w, r = i.X, o = i.i;
						return i.w = n = n + 1640531527 | 0,
							e = r[o + 34 & 127],
							t = r[o = o + 1 & 127],
							e ^= e << 13,
							t ^= t << 17,
							e ^= e >>> 15,
							t ^= t >>> 12,
							e = r[o] = e ^ t,
							i.i = o,
						e + (n ^ n >>> 16) | 0
					}
						,
						function(t, e) {
							var n, r, o, i, a, s = [], u = 128;
							for (e === (0 | e) ? (r = e,
								e = null) : (e += "\0",
								r = 0,
								u = Math.max(u, e.length)),
								     o = 0,
								     i = -32; i < u; ++i)
								e && (r ^= e.charCodeAt((i + 32) % e.length)),
								0 === i && (a = r),
									r ^= r << 10,
									r ^= r >>> 15,
									r ^= r << 4,
									r ^= r >>> 13,
								0 <= i && (a = a + 1640531527 | 0,
									o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0);
							for (128 <= o && (s[127 & (e && e.length || 0)] = -1),
								     o = 127,
								     i = 512; 0 < i; --i)
								r = s[o + 34 & 127],
									n = s[o = o + 1 & 127],
									r ^= r << 13,
									n ^= n << 17,
									r ^= r >>> 15,
									n ^= n >>> 12,
									s[o] = r ^ n;
							t.w = a,
								t.X = s,
								t.i = o
						}(i, t)
				}
				(t)
					, r = e && e.state
					, o = function() {
					return (n.next() >>> 0) / 4294967296
				};
				return o.double = function() {
					do {
						var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === t);return t
				}
					,
					o.int32 = n.next,
					o.quick = o,
				r && (r.X && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.xor4096 = r
		}(0, t)
	})
		, ti = Ko(function(t) {
		!function(t, e, n) {
			function i(t, e) {
				return e.a = t.a,
					e.b = t.b,
					e.c = t.c,
					e.d = t.d,
					e
			}
			function r(t, e) {
				var n = new function(t) {
					var o = this
						, e = "";
					o.next = function() {
						var t = o.b
							, e = o.c
							, n = o.d
							, r = o.a;
						return t = t << 25 ^ t >>> 7 ^ e,
							e = e - n | 0,
							n = n << 24 ^ n >>> 8 ^ r,
							r = r - t | 0,
							o.b = t = t << 20 ^ t >>> 12 ^ e,
							o.c = e = e - n | 0,
							o.d = n << 16 ^ e >>> 16 ^ r,
							o.a = r - t | 0
					}
						,
						o.a = 0,
						o.b = 0,
						o.c = -1640531527,
						o.d = 1367130551,
						t === Math.floor(t) ? (o.a = t / 4294967296 | 0,
							o.b = 0 | t) : e += t;
					for (var n = 0; n < e.length + 20; n++)
						o.b ^= 0 | e.charCodeAt(n),
							o.next()
				}
				(t)
					, r = e && e.state
					, o = function() {
					return (n.next() >>> 0) / 4294967296
				};
				return o.double = function() {
					do {
						var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
					} while (0 === t);return t
				}
					,
					o.int32 = n.next,
					o.quick = o,
				r && ("object" == typeof r && i(r, n),
						o.state = function() {
							return i(n, {})
						}
				),
					o
			}
			e && e.exports ? e.exports = r : this.tychei = r
		}(0, t)
	})
		, ei = Ko(function(e) {
		!function(s, u) {
			var c, l = this, h = 256, p = 6, f = "random", d = u.pow(h, p), m = u.pow(2, 52), v = 2 * m, g = h - 1;
			function t(t, e, n) {
				var r = []
					, o = x(function t(e, n) {
					var r, o = [], i = typeof e;
					if (n && "object" == i)
						for (r in e)
							try {
								o.push(t(e[r], n - 1))
							} catch (t) {}
					return o.length ? o : "string" == i ? e : e + "\0"
				}((e = 1 == e ? {
					entropy: !0
				} : e || {}).entropy ? [t, w(s)] : null == t ? function() {
					try {
						var t;
						return c && (t = c.randomBytes) ? t = t(h) : (t = new Uint8Array(h),
							(l.crypto || l.msCrypto).getRandomValues(t)),
							w(t)
					} catch (t) {
						var e = l.navigator
							, n = e && e.plugins;
						return [+new Date, l, n, l.screen, w(s)]
					}
				}() : t, 3), r)
					, i = new function(t) {
					var e, n = t.length, a = this, r = 0, o = a.i = a.j = 0, i = a.S = [];
					for (n || (t = [n++]); r < h; )
						i[r] = r++;
					for (r = 0; r < h; r++)
						i[r] = i[o = g & o + t[r % n] + (e = i[r])],
							i[o] = e;
					(a.g = function(t) {
							for (var e, n = 0, r = a.i, o = a.j, i = a.S; t--; )
								e = i[r = g & r + 1],
									n = n * h + i[g & (i[r] = i[o = g & o + e]) + (i[o] = e)];
							return a.i = r,
								a.j = o,
								n
						}
					)(h)
				}
				(r)
					, a = function() {
					for (var t = i.g(p), e = d, n = 0; t < m; )
						t = (t + n) * h,
							e *= h,
							n = i.g(1);
					for (; v <= t; )
						t /= 2,
							e /= 2,
							n >>>= 1;
					return (t + n) / e
				};
				return a.int32 = function() {
					return 0 | i.g(4)
				}
					,
					a.quick = function() {
						return i.g(4) / 4294967296
					}
					,
					a.double = a,
					x(w(i.S), s),
					(e.pass || n || function(t, e, n, r) {
							return r && (r.S && y(r, i),
									t.state = function() {
										return y(i, {})
									}
							),
								n ? (u[f] = t,
									e) : t
						}
					)(a, o, "global"in e ? e.global : this == u, e.state)
			}
			function y(t, e) {
				return e.i = t.i,
					e.j = t.j,
					e.S = t.S.slice(),
					e
			}
			function x(t, e) {
				for (var n, r = t + "", o = 0; o < r.length; )
					e[g & o] = g & (n ^= 19 * e[g & o]) + r.charCodeAt(o++);
				return w(e)
			}
			function w(t) {
				return String.fromCharCode.apply(0, t)
			}
			if (u["seed" + f] = t,
				x(u.random(), s),
				e.exports) {
				e.exports = t;
				try {
					c = require("crypto")
				} catch (t) {}
			}
		}([], Math)
	});
	ei.alea = Xo,
		ei.xor128 = Yo,
		ei.xorwow = Qo,
		ei.xorshift7 = Jo,
		ei.xor4096 = Zo,
		ei.tychei = ti;
	var ni = ei.alea
		, ri = function() {
		function t(t, e, n, r, o) {
			this.mean = t,
				this.stdDev = e,
				this.dtype = n,
				this.nextVal = NaN,
				this.truncated = r,
			this.truncated && (this.upper = this.mean + 2 * this.stdDev,
				this.lower = this.mean - 2 * this.stdDev);
			var i = o || Math.random();
			this.random = ni(i.toString())
		}
		return t.prototype.nextValue = function() {
			if (!isNaN(this.nextVal)) {
				var t = this.nextVal;
				return this.nextVal = NaN,
					t
			}
			for (var e, n, r = !1; !r; ) {
				for (var o = void 0, i = void 0, a = void 0; 1 <= (a = (o = 2 * this.random() - 1) * o + (i = 2 * this.random() - 1) * i) || 0 === a; )
					;
				var s = Math.sqrt(-2 * Math.log(a) / a);
				e = this.mean + this.stdDev * o * s,
					n = this.mean + this.stdDev * i * s,
				this.truncated && !this.isValidTruncated(e) || (r = !0)
			}
			return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)),
				this.convertValue(e)
		}
			,
			t.prototype.convertValue = function(t) {
				return null == this.dtype || "float32" === this.dtype ? t : Math.round(t)
			}
			,
			t.prototype.isValidTruncated = function(t) {
				return t <= this.upper && t >= this.lower
			}
			,
			t
	}();
	function oi(b, E) {
		return m(this, void 0, void 0, function() {
			var e, n, r, o, i, a, s, u, c, l, h, p, f, d, m, v, g, y, x, w;
			return C(this, function(t) {
				switch (t.label) {
					case 0:
						if (e = me(b, "img", "toPixels"),
						b instanceof it || (e = e.toInt()),
						2 !== e.rank && 3 !== e.rank)
							throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + e.rank + ".");
						if (n = e.shape.slice(0, 2),
							r = n[0],
							o = n[1],
						4 < (i = 2 === e.rank ? 1 : e.shape[2]) || 2 === i)
							throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + i);
						return a = e.min(),
							s = e.max(),
							[4, a.data()];
					case 1:
						return u = t.sent()[0],
							[4, s.data()];
					case 2:
						if (c = t.sent()[0],
							a.dispose(),
							s.dispose(),
						"float32" === e.dtype) {
							if (u < 0 || 1 < c)
								throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + u + " - " + c + "].")
						} else {
							if ("int32" !== e.dtype)
								throw new Error("Unsupported type for toPixels: " + e.dtype + ". Please use float32 or int32 tensors.");
							if (u < 0 || 255 < c)
								throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + u + " - " + c + "].")
						}
						return [4, e.data()];
					case 3:
						for (l = t.sent(),
							     h = "float32" === e.dtype ? 255 : 1,
							     p = new Uint8ClampedArray(o * r * 4),
							     f = 0; f < r * o; ++f)
							g = v = m = d = void 0,
								1 === i ? (d = l[f] * h,
									m = l[f] * h,
									v = l[f] * h,
									g = 255) : 3 === i ? (d = l[3 * f] * h,
									m = l[3 * f + 1] * h,
									v = l[3 * f + 2] * h,
									g = 255) : 4 === i && (d = l[4 * f] * h,
									m = l[4 * f + 1] * h,
									v = l[4 * f + 2] * h,
									g = l[4 * f + 3] * h),
								p[0 + (y = 4 * f)] = Math.round(d),
								p[y + 1] = Math.round(m),
								p[y + 2] = Math.round(v),
								p[y + 3] = Math.round(g);
						return null != E && (E.width = o,
							E.height = r,
							x = E.getContext("2d"),
							w = new ImageData(p,o,r),
							x.putImageData(w, 0, 0)),
						e !== b && e.dispose(),
							[2, p]
				}
			})
		})
	}
	function ii(t, e, n) {
		return void 0 === e && (e = "float32"),
			new et(t,e = e || "float32",n)
	}
	function ai(t, e) {
		void 0 === e && (e = !1),
			console.log(t.toString(e))
	}
	var si = ge({
		batchToSpaceND_: function(t, e, n) {
			var r = me(t, "x", "batchToSpaceND")
				, o = e.reduce(function(t, e) {
				return t * e
			});
			return A(r.rank >= 1 + e.length, "input rank is " + r.rank + " but should be > than blockShape.length " + e.length),
				A(n.length === e.length, "crops.length is " + n.length + " but should be equal to blockShape.length  " + e.length),
				A(r.shape[0] % o == 0, "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + e.join(" * ") + " === " + o),
				Ot.engine.runKernel(function(t) {
					return t.batchToSpaceND(r, e, n)
				}, {
					$x: r
				}, function(t) {
					return {
						$x: function() {
							return t.spaceToBatchND(e, n)
						}
					}
				})
		}
	})
		, ui = ge({
		cast_: function(t, e) {
			var n = me(t, "x", "cast");
			return Ot.engine.runKernel(function(t) {
				return t.cast(n, e)
			}, {
				$x: n
			}, function(t) {
				return {
					$x: function() {
						return t.clone()
					}
				}
			})
		}
	})
		, ci = ge({
		clone_: function(t) {
			var e = me(t, "x", "clone", null);
			return Ot.engine.runKernel(function(t) {
				return it.make(e.shape, {
					dataId: e.dataId
				}, e.dtype)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.toFloat()
					}
				}
			})
		}
	})
		, li = ge({
		cumsum_: function(t, e, n, r) {
			void 0 === e && (e = 0),
			void 0 === n && (n = !1),
			void 0 === r && (r = !1);
			var o = me(t, "x", "cumsum")
				, i = ne([e |= 0], o.rank)
				, a = o;
			null != i && (a = o.transpose(i));
			var s = oe(1, o.rank)[0]
				, u = Ot.engine.runKernel(function(t) {
				return t.cumsum(a, s, n, r)
			}, {
				permutedX: a
			}, function(t) {
				return {
					permutedX: function() {
						return t.cumsum(e, n, !r)
					}
				}
			});
			return null != i && (u = u.transpose(i)),
				u
		}
	})
		, hi = ge({
		depthToSpace_: function(t, e, n) {
			void 0 === n && (n = "NHWC");
			var r = me(t, "x", "depthToSpace")
				, o = "NHWC" === n ? r.shape[1] : r.shape[2]
				, i = "NHWC" === n ? r.shape[2] : r.shape[3]
				, a = "NHWC" === n ? r.shape[3] : r.shape[1];
			return A(0 <= o * e, "Negative dimension size caused by overflow when multiplying\n      " + o + " and " + e + "  for depthToSpace with input shape\n      " + r.shape),
				A(0 <= i * e, "Negative dimension size caused by overflow when multiplying\n      " + i + " and " + e + " for depthToSpace with input shape\n          " + r.shape),
				A(a % (e * e) == 0, "Dimension size must be evenly divisible by " + e * e + " but is " + a + " for depthToSpace with input shape " + r.shape),
				Ot.engine.runKernel(function(t) {
					return t.depthToSpace(r, e, n)
				}, {
					$x: r
				})
		}
	})
		, pi = ge({
		expandDims_: function(t, e) {
			void 0 === e && (e = 0);
			var n = me(t, "x", "expandDims");
			A(e <= n.rank, "Axis must be <= rank of the tensor");
			var r = n.shape.slice();
			return e < 0 && (A(-(n.rank + 1) <= e, "Axis must be in the interval [" + -(n.rank + 1) + ", " + n.rank + "]"),
				e = n.rank + e + 1),
				r.splice(e, 0, 1),
				_i(n, r)
		}
	})
		, fi = ge({
		eye_: function(t, e, n, r) {
			void 0 === r && (r = "float32"),
			null == e && (e = t);
			for (var o = ii([t, e], r), i = t <= e ? t : e, a = 0; a < i; ++a)
				o.set(1, a, a);
			var s = o.toTensor().as2D(t, e);
			if (null == n)
				return s;
			if (1 === n.length)
				return Di(pi(s, 0), [n[0], 1, 1]);
			if (2 === n.length)
				return Di(pi(pi(s, 0), 0), [n[0], n[1], 1, 1]);
			if (3 === n.length)
				return Di(pi(pi(pi(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
			throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
		}
	})
		, di = ge({
		fromPixels_: function(t, e) {
			if (void 0 === e && (e = 3),
			4 < e)
				throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
			return Ot.engine.fromPixels(t, e)
		}
	})
		, mi = ge({
		multinomial_: function(t, e, n, r) {
			void 0 === r && (r = !1);
			var o = me(t, "logits", "multinomial")
				, i = o.size
				, a = o.rank;
			if (i < 2)
				throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
			if (2 < a)
				throw new Error("Rank of probabilities must be 1 or 2, but is " + a);
			n = n || Math.random();
			var s = 1 === a ? o.as2D(1, -1) : o
				, u = Ot.engine.runKernel(function(t) {
				return t.multinomial(s, r, e, n)
			}, {
				logits2D: s
			});
			return 1 === a ? u.as1D() : u
		}
	})
		, vi = ge({
		oneHot_: function(t, e, n, r) {
			void 0 === n && (n = 1),
			void 0 === r && (r = 0);
			var o = me(t, "indices", "oneHot", "int32");
			if (e < 2)
				throw new Error("Error in oneHot: depth must be >=2, but it is " + e);
			return Ot.engine.runKernel(function(t) {
				return t.oneHot(o, e, n, r)
			}, {
				$indices: o
			}, function(t) {
				return {
					$indices: function() {
						return Ae(o.shape, "float32")
					}
				}
			})
		}
	})
		, gi = ge({
		pad_: function(t, e, n) {
			void 0 === n && (n = 0);
			var r = me(t, "x", "pad");
			if (0 === r.rank)
				throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
			var o = e.map(function(t) {
				return t[0]
			});
			return Ot.engine.runKernel(function(t) {
				return t.pad(r, e, n)
			}, {
				$x: r
			}, function(t) {
				return {
					$x: function() {
						return t.slice(o, r.shape)
					}
				}
			})
		}
	})
		, yi = ge({
		pad1d_: function(t, e, n) {
			return void 0 === n && (n = 0),
				A(2 === e.length, "Invalid number of paddings. Must be length of 2."),
				gi(t, [e], n)
		}
	})
		, xi = ge({
		pad2d_: function(t, e, n) {
			return void 0 === n && (n = 0),
				A(2 === e.length && 2 === e[0].length && 2 === e[1].length, "Invalid number of paddings. Must be length of 2 each."),
				gi(t, e, n)
		}
	})
		, wi = ge({
		pad3d_: function(t, e, n) {
			return void 0 === n && (n = 0),
				A(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, "Invalid number of paddings. Must be length of 2 each."),
				gi(t, e, n)
		}
	})
		, bi = ge({
		pad4d_: function(t, e, n) {
			return void 0 === n && (n = 0),
				A(4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length, "Invalid number of paddings. Must be length of 2 each."),
				gi(t, e, n)
		}
	})
		, Ei = ge({
		rand_: function(t, e, n) {
			var r = L(t)
				, o = null;
			if (null == n || "float32" === n)
				o = new Float32Array(r);
			else if ("int32" === n)
				o = new Int32Array(r);
			else {
				if ("bool" !== n)
					throw new Error("Unknown data type " + n);
				o = new Uint8Array(r)
			}
			for (var i = 0; i < r; i++)
				o[i] = e();
			return it.make(t, {
				values: o
			}, n)
		}
	})
		, Ci = ge({
		randomNormal_: function(t, e, n, r, o) {
			if (void 0 === e && (e = 0),
			void 0 === n && (n = 1),
			null != r && "bool" === r)
				throw new Error("Unsupported data type " + r);
			for (var i = new ri(e,n,r,!1,o), a = ii(t, r), s = 0; s < a.values.length; s++)
				a.values[s] = i.nextValue();
			return a.toTensor()
		}
	})
		, Si = ge({
		randomUniform_: function(t, e, n, r) {
			void 0 === e && (e = 0),
			void 0 === n && (n = 1),
			void 0 === r && (r = "float32");
			for (var o = ii(t, r), i = 0; i < o.values.length; i++)
				o.values[i] = h(e, n);
			return o.toTensor()
		}
	})
		, _i = ge({
		reshape_: function(t, e) {
			var n = me(t, "x", "reshape", null);
			return e = b(e, n.size),
				A(n.size === L(e), "new shape and old shape must have the same number of elements."),
				Ot.engine.runKernel(function(t) {
					return t.reshape(n, e)
				}, {
					$x: n
				}, function(t) {
					return {
						$x: function() {
							return t.reshape(n.shape)
						}
					}
				})
		}
	})
		, Ri = ge({
		spaceToBatchND_: function(t, r, o) {
			var e = me(t, "x", "spaceToBatchND");
			return A(e.rank >= 1 + r.length, "input rank " + e.rank + " should be > than [blockShape] " + r.length),
				A(o.length === r.length, "paddings.shape[0] " + o.length + " must be equal to [blockShape] " + r.length),
				A(e.shape.reduce(function(t, e, n) {
					return 0 < n && n <= r.length ? t && (e + o[n - 1][0] + o[n - 1][1]) % r[n - 1] == 0 : t
				}, !0), "input spatial dimensions " + e.shape.slice(1) + " with paddings " + o.toString() + " must be divisible by blockShapes " + r.toString()),
				Ot.engine.runKernel(function(t) {
					return t.spaceToBatchND(e, r, o)
				}, {
					$x: e
				}, function(t) {
					return {
						$x: function() {
							return t.batchToSpaceND(r, o)
						}
					}
				})
		}
	})
		, Ni = ge({
		squeeze_: function(t, e) {
			var n = me(t, "x", "squeeze");
			return _i(n, E(n.shape, e).newShape)
		}
	})
		, ki = ge({
		stack_: function(t, e) {
			void 0 === e && (e = 0);
			var n = ve(t, "tensors", "stack");
			if (A(1 <= n.length, "Pass at least one tensor to tf.stack"),
			1 === n.length)
				return n[0].expandDims(e);
			var r = n[0].rank
				, o = n[0].shape
				, i = n[0].dtype;
			A(e <= r, "Axis must be <= rank of the tensor"),
				n.forEach(function(t) {
					f(o, t.shape, "All tensors passed to stack must have matching shapes")
				}),
				n.forEach(function(t) {
					A(i === t.dtype, "All tensors passed to stack must have matching dtypes")
				});
			var a = n.map(function(t) {
				return t.expandDims(e)
			});
			return Vo(a, e)
		}
	})
		, Di = ge({
		tile_: function(t, a) {
			var s = me(t, "x", "tile");
			return A(s.rank === a.length, "Error in transpose: rank of input " + s.rank + " must match length of reps " + a + "."),
				Ot.engine.runKernel(function(t) {
					return t.tile(s, a)
				}, {
					$x: s
				}, function(i) {
					return {
						$x: function() {
							var t = Be(s);
							if (1 === s.rank)
								for (var e = 0; e < a[0]; ++e)
									t = t.add(i.slice([e * s.shape[0]], [s.shape[0]]));
							else if (2 === s.rank)
								for (e = 0; e < a[0]; ++e)
									for (var n = 0; n < a[1]; ++n)
										t = t.add(i.slice([e * s.shape[0], n * s.shape[1]], [s.shape[0], s.shape[1]]));
							else if (3 === s.rank)
								for (e = 0; e < a[0]; ++e)
									for (n = 0; n < a[1]; ++n)
										for (var r = 0; r < a[2]; ++r)
											t = t.add(i.slice([e * s.shape[0], n * s.shape[1], r * s.shape[2]], [s.shape[0], s.shape[1], s.shape[2]]));
							else {
								if (4 !== s.rank)
									throw new Error("Gradient for tile operation is not implemented for rank-" + s.rank + " tensors yet.");
								for (e = 0; e < a[0]; ++e)
									for (n = 0; n < a[1]; ++n)
										for (r = 0; r < a[2]; ++r)
											for (var o = 0; o < a[3]; ++o)
												t = t.add(i.slice([e * s.shape[0], n * s.shape[1], r * s.shape[2], o * s.shape[3]], [s.shape[0], s.shape[1], s.shape[2], s.shape[3]]))
							}
							return t
						}
					}
				})
		}
	})
		, Ti = ge({
		truncatedNormal_: function(t, e, n, r, o) {
			if (void 0 === e && (e = 0),
			void 0 === n && (n = 1),
			null != r && "bool" === r)
				throw new Error("Unsupported data type " + r);
			for (var i = new ri(e,n,r,!0,o), a = ii(t, r), s = 0; s < a.values.length; s++)
				a.values[s] = i.nextValue();
			return a.toTensor()
		}
	})
		, Ii = ge({
		unstack_: function(t, n) {
			void 0 === n && (n = 0);
			for (var e, r = me(t, "x", "unstack"), o = r.shape[n], i = Array(r.rank - 1).fill(0), a = 0, s = 0; s < r.rank; s++)
				s !== n && (i[a] = r.shape[s],
					a++);
			e = Array(o).fill(1);
			var u = Array(r.rank).fill(0)
				, c = r.shape.slice();
			return e.map(function(t) {
				c[n] = t;
				var e = r.slice(u, c);
				return u[n] += t,
					e.reshape(i)
			})
		}
	})
		, Ai = function(h, p) {
		return m(this, void 0, void 0, function() {
			var e, n, r, o, i, a, s, u, c, l;
			return C(this, function(t) {
				switch (t.label) {
					case 0:
						return e = me(h, "x", "setdiff1d"),
							n = me(p, "y", "setdiff1d"),
							A(e.dtype === n.dtype, "x and y should have the same dtype, but got x (" + e.dtype + ") and y (" + n.dtype + ")."),
							A(1 === e.rank, "x should be 1D tensor, but got x (" + e.shape + ")."),
							A(1 === n.rank, "y should be 1D tensor, but got y (" + n.shape + ")."),
							[4, e.data()];
					case 1:
						return r = t.sent(),
							[4, n.data()];
					case 2:
						for (o = t.sent(),
							     i = new Set(o),
							     c = a = 0; c < r.length; c++)
							i.has(r[c]) || a++;
						for (s = new et([a],e.dtype),
							     u = new et([a],"int32"),
							     l = c = 0; c < r.length; c++)
							i.has(r[c]) || (s.values[l] = r[c],
								u.values[l] = c,
								l++);
						return [2, [s.toTensor(), u.toTensor()]]
				}
			})
		})
	};
	function Mi(t, e) {
		for (var n = [], r = 0; r < e.length; r++)
			e[r] && n.push(r);
		var o = ii(t, "int32")
			, i = ii([n.length, t.length], "int32");
		for (r = 0; r < n.length; r++) {
			var a = o.indexToLoc(n[r])
				, s = r * t.length;
			i.values.set(a, s)
		}
		return i.toTensor()
	}
	var Fi = function() {
		function t(t, e) {
			if (void 0 === e && (e = !0),
				this.gpgpu = t,
				this.delayedStorage = e,
				this.pendingRead = new WeakMap,
				this.pendingDisposal = new WeakSet,
				this.lruDataGPU = [],
				this.numBytesInGPU = 0,
				this.uploadWaitMs = 0,
				this.downloadWaitMs = 0,
				this.binaryCache = {},
				this.disposed = !1,
			Ot.get("WEBGL_VERSION") < 1)
				throw new Error("WebGL is not supported on this device");
			if (null == t) {
				var n = a(Ot.get("WEBGL_VERSION"));
				this.gpgpu = new io(n),
					this.canvas = n.canvas,
					this.gpgpuCreatedLocally = !0
			} else
				this.gpgpuCreatedLocally = !1,
					this.canvas = t.gl.canvas;
			Ot.get("WEBGL_PAGING_ENABLED") && (this.NUM_BYTES_BEFORE_PAGING = window.screen.height * window.screen.width * window.devicePixelRatio * 300),
				this.textureManager = new Ao(this.gpgpu)
		}
		return t.prototype.register = function(t, e, n) {
			if (this.texData.has(t))
				throw new Error("Data buffer is already registered");
			this.texData.set(t, {
				shape: e,
				dtype: n
			})
		}
			,
			t.prototype.setDataMover = function(t) {
				this.texData = new Le(t)
			}
			,
			t.prototype.fromPixels = function(t, e) {
				if (null == t)
					throw new Error("pixels passed to tf.fromPixels() can not be null");
				var n = [t.height, t.width]
					, r = [t.height, t.width, e];
				if (!(t instanceof HTMLVideoElement || t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageData))
					throw new Error("pixels passed to tf.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was " + t.constructor.name);
				if (t instanceof HTMLVideoElement) {
					if (null == this.fromPixels2DContext) {
						if (!Ot.get("IS_BROWSER"))
							throw new Error("Can't read pixels from HTMLImageElement outside the browser.");
						if ("complete" !== document.readyState)
							throw new Error("The DOM is not ready yet. Please call tf.fromPixels() once the DOM is ready. One way to do that is to add an event listener for `DOMContentLoaded` on the document object");
						this.fromPixels2DContext = document.createElement("canvas").getContext("2d")
					}
					this.fromPixels2DContext.canvas.width = t.width,
						this.fromPixels2DContext.canvas.height = t.height,
						this.fromPixels2DContext.drawImage(t, 0, 0, t.width, t.height),
						t = this.fromPixels2DContext.canvas
				}
				var o = this.makeTensorHandle(n, "int32");
				this.texData.get(o.dataId).usage = $n.PIXELS,
					this.gpgpu.uploadPixelDataToTexture(this.getTexture(o.dataId), t);
				var i = new qn(r)
					, a = this.compileAndRun(i, [o]);
				return this.disposeData(o.dataId),
					a
			}
			,
			t.prototype.makeTensorHandle = function(t, e) {
				var n = {};
				return this.register(n, t, e),
					{
						dataId: n,
						shape: t,
						dtype: e
					}
			}
			,
			t.prototype.write = function(t, e) {
				if (null == e)
					throw new Error("MathBackendWebGL.write(): values can not be null");
				var n = this.texData.get(t)
					, r = n.texture
					, o = n.texShape
					, i = n.usage
					, a = n.dtype
					, s = n.isPacked;
				if ("complex64" === a)
					throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
				null != r && (this.releaseTexture(t, r, o, i, s),
					n.texture = null,
					n.texShape = null),
					n.usage = $n.UPLOAD,
					n.values = e,
				this.delayedStorage || this.uploadToGPU(t)
			}
			,
			t.prototype.readSync = function(t) {
				var e = this.texData.get(t)
					, n = e.values
					, r = e.dtype
					, o = e.complexTensors;
				if (null != n)
					return this.convertAndCacheOnCPU(t);
				if ("string" === r)
					return n;
				var i, a, s = null != this.activeTimers;
				return s && (i = performance.now()),
					a = "complex64" === r ? Ve(o.real.dataSync(), o.imag.dataSync()) : this.getValuesFromTexture(t),
				s && (this.downloadWaitMs += performance.now() - i),
					this.convertAndCacheOnCPU(t, a)
			}
			,
			t.prototype.read = function(x) {
				return m(this, void 0, void 0, function() {
					var e, n, r, o, i, a, s, u, c, l, h, p, f, d, m, v, g, y;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								if (this.pendingRead.has(x))
									return r = this.pendingRead.get(x),
										[2, new Promise(function(t) {
												return r.push(t)
											}
										)];
								if (o = this.texData.get(x),
									i = o.texture,
									a = o.values,
									s = o.texShape,
									u = o.isPacked,
									c = o.shape,
								null != a)
									return [2, this.convertAndCacheOnCPU(x)];
								if (this.pendingRead.set(x, []),
								!Ot.get("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === Ot.get("WEBGL_VERSION"))
									throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
								return l = s[1],
									h = s[0],
								u && (e = er(s[0], s[1]),
									l = e[0],
									h = e[1]),
									p = this.gpgpu.maybeCreateBufferFromTexture(i, h, l),
									[4, this.gpgpu.createAndWaitForFence()];
							case 1:
								return t.sent(),
									f = p instanceof WebGLTexture ? this.getValuesFromTexture(x) : u ? (d = this.getBatchDim(c),
										v = m = 1,
									c.length && (n = this.getRowsCols(c),
										m = n[0],
										v = n[1]),
										this.gpgpu.downloadPackedMatrixFromBuffer(p, d, m, v, s[0], s[1])) : this.gpgpu.downloadFloat32MatrixFromBuffer(p, s[0], s[1]),
									g = this.convertAndCacheOnCPU(x, f),
									y = this.pendingRead.get(x),
									this.pendingRead.delete(x),
									y.forEach(function(t) {
										return t(g)
									}),
								this.pendingDisposal.has(x) && (this.pendingDisposal.delete(x),
									this.disposeData(x)),
									[2, g]
						}
					})
				})
			}
			,
			t.prototype.getValuesFromTexture = function(t) {
				var e, n = this.texData.get(t), r = n.shape, o = n.dtype, i = n.texture, a = n.texShape;
				if (Ot.get("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
					if (this.texData.get(t).isPacked) {
						var s = this.getBatchDim(r)
							, u = 1
							, c = 1;
						return r.length && (u = (e = this.getRowsCols(r))[0],
							c = e[1]),
							this.gpgpu.downloadMatrixFromPackedTexture(i, s, u, c, a[0], a[1])
					}
					return this.gpgpu.downloadFloat32MatrixFromOutputTexture(i, a[0], a[1])
				}
				var l = this.makeTensorHandle(r, "float32");
				l.size = L(r),
					this.texData.get(l.dataId).usage = $n.DOWNLOAD;
				var h = new Un(r);
				this.compileAndRun(h, [{
					shape: r,
					dtype: o,
					dataId: t
				}], l, null, !1);
				var p = this.texData.get(l.dataId)
					, f = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p.texture, p.texShape[0], p.texShape[1]);
				return this.disposeData(l.dataId),
					f
			}
			,
			t.prototype.time = function(u) {
				return m(this, void 0, void 0, function() {
					var e, n, r, o, i, a, s;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.activeTimers,
									r = !(n = []),
									null == this.programTimersStack ? (this.programTimersStack = n,
										r = !0) : this.activeTimers.push(n),
									this.activeTimers = n,
									u(),
									o = d(this.activeTimers.map(function(t) {
										return t.query
									})).filter(function(t) {
										return null != t
									}),
									i = d(this.activeTimers.map(function(t) {
										return t.name
									})).filter(function(t) {
										return null != t
									}),
									this.activeTimers = e,
								r && (this.programTimersStack = null),
									[4, Promise.all(o)];
							case 1:
								return a = t.sent(),
									s = {
										uploadWaitMs: this.uploadWaitMs,
										downloadWaitMs: this.downloadWaitMs,
										kernelMs: l(a),
										getExtraProfileInfo: function() {
											return a.map(function(t, e) {
												return {
													name: i[e],
													ms: t
												}
											}).map(function(t) {
												return t.name + ": " + t.ms
											}).join(", ")
										},
										wallMs: null
									},
									this.uploadWaitMs = 0,
									this.downloadWaitMs = 0,
									[2, s]
						}
					})
				})
			}
			,
			t.prototype.memory = function() {
				return {
					unreliable: !1,
					numBytesInGPU: this.numBytesInGPU
				}
			}
			,
			t.prototype.startTimer = function() {
				return 0 < Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? this.gpgpu.beginQuery() : {
					startMs: performance.now(),
					endMs: null
				}
			}
			,
			t.prototype.endTimer = function(t) {
				return 0 < Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? this.gpgpu.endQuery() : t.endMs = performance.now(),
					t
			}
			,
			t.prototype.getQueryTime = function(n) {
				return m(this, void 0, void 0, function() {
					var e;
					return C(this, function(t) {
						return 0 < Ot.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? [2, this.gpgpu.waitForQueryAndGetTime(n)] : [2, (e = n).endMs - e.startMs]
					})
				})
			}
			,
			t.prototype.disposeData = function(t) {
				if (!this.pendingDisposal.has(t))
					if (this.pendingRead.has(t))
						this.pendingDisposal.add(t);
					else if (this.texData.has(t)) {
						var e = this.texData.get(t)
							, n = e.texture
							, r = e.texShape
							, o = e.usage
							, i = e.complexTensors
							, a = e.isPacked;
						null != n && this.releaseTexture(t, n, r, o, a),
						null != i && (i.real.dispose(),
							i.imag.dispose()),
							this.texData.delete(t)
					}
			}
			,
			t.prototype.getTexture = function(t) {
				return this.uploadToGPU(t),
					this.texData.get(t).texture
			}
			,
			t.prototype.getCPUBackend = function() {
				return Ot.get("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = Ot.findBackend("cpu")),
					this.cpuBackend) : null
			}
			,
			t.prototype.shouldExecuteOnCPU = function(t, e) {
				var n = this;
				return void 0 === e && (e = 10),
				null != this.getCPUBackend() && t.every(function(t) {
					return null == n.texData.get(t.dataId).texture && t.size < e
				})
			}
			,
			t.prototype.getGPGPUContext = function() {
				return this.gpgpu
			}
			,
			t.prototype.getCanvas = function() {
				return this.canvas
			}
			,
			t.prototype.complex = function(t, e) {
				var n = this.makeOutputArray(t.shape, "complex64");
				return this.texData.get(n.dataId).complexTensors = {
					real: Ot.engine.keep(t.clone()),
					imag: Ot.engine.keep(e.clone())
				},
					n
			}
			,
			t.prototype.real = function(t) {
				return this.texData.get(t.dataId).complexTensors.real.clone()
			}
			,
			t.prototype.imag = function(t) {
				return this.texData.get(t.dataId).complexTensors.imag.clone()
			}
			,
			t.prototype.slice = function(t, e, n) {
				if (this.shouldExecuteOnCPU([t]))
					return this.cpuBackend.slice(t, e, n);
				var r = new To(n)
					, o = r.getCustomSetupFunc(e);
				return this.compileAndRun(r, [t], null, o)
			}
			,
			t.prototype.stridedSlice = function(t, e, n, r, o, i, a, s, u) {
				if (this.shouldExecuteOnCPU([t]))
					return this.cpuBackend.stridedSlice(t, e, n, r, o, i, a, s, u);
				var c = le(t.shape, e, n, r, o, i, a, s, u)
					, l = c[0]
					, h = c[1]
					, p = c[2]
					, f = h.filter(function(t, e) {
					return -1 === p.indexOf(e)
				});
				if (f.some(function(t) {
					return 0 === t
				}))
					return Ce([], f);
				var d = new Io(l,r,h,p);
				return this.compileAndRun(d, [t])
			}
			,
			t.prototype.reverse = function(t, e) {
				var n = new Ro(t.shape,e);
				return this.compileAndRun(n, [t])
			}
			,
			t.prototype.concat2Tensors = function(t, e, n) {
				var r = ie([t.shape, e.shape], n)
					, o = t.as2D(-1, L(t.shape.slice(n)))
					, i = e.as2D(-1, L(e.shape.slice(n)))
					, a = new hn(o.shape,i.shape);
				return this.compileAndRun(a, [o, i]).reshape(r)
			}
			,
			t.prototype.concat = function(t, e) {
				if (this.shouldExecuteOnCPU(t))
					return this.cpuBackend.concat(t, e);
				if (1 === t.length)
					return t[0];
				for (var n = t[0], r = 1; r < t.length; ++r)
					n = this.concat2Tensors(n, t[r], e);
				return n
			}
			,
			t.prototype.neg = function(t) {
				var e = new Wo(t.shape,"return -x;");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.batchMatMul = function(t, e, n, r) {
				var o = n ? t.shape[2] : t.shape[1]
					, i = r ? e.shape[1] : e.shape[2]
					, a = n ? t.shape[1] : t.shape[2]
					, s = t.shape[0];
				if ((1 === o || 1 === i) && 1e3 < a) {
					n && (t = t.transpose([0, 2, 1])),
					r && (e = e.transpose([0, 2, 1]));
					var u = 1 === i ? t : t.as3D(s, a, 1)
						, c = 1 === i ? 2 : 1
						, l = 1 === i ? e.as3D(s, 1, a) : e;
					return this.multiply(u, l).sum(c, !0)
				}
				var h = xt(t.dtype, e.dtype);
				if (1 !== s)
					return d = new ho(t.shape,e.shape,n,r),
						m = this.makeOutputArray(d.outputShape, h),
						this.compileAndRun(d, [t, e], m);
				var p = t.as2D(t.shape[1], t.shape[2])
					, f = e.as2D(e.shape[1], e.shape[2])
					, d = new po(p.shape,f.shape,[o, i],n,r)
					, m = this.makePackedTensor(d.outputShape, h)
					, v = this.compileAndRun(d, [p, f], m);
				return v.reshape([1, v.shape[0], v.shape[1]])
			}
			,
			t.prototype.multiply = function(t, e) {
				if ("complex64" === t.dtype) {
					var n = this.texData.get(t.dataId)
						, r = this.texData.get(e.dataId)
						, o = new rn(en,t.shape,e.shape)
						, i = new rn(nn,t.shape,e.shape)
						, a = [this.makeComplexComponentTensorHandle(t, n.complexTensors.real), this.makeComplexComponentTensorHandle(t, n.complexTensors.imag), this.makeComplexComponentTensorHandle(e, r.complexTensors.real), this.makeComplexComponentTensorHandle(e, r.complexTensors.imag)]
						, s = this.compileAndRun(o, a)
						, u = this.compileAndRun(i, a)
						, c = this.complex(s, u);
					return s.dispose(),
						u.dispose(),
						c
				}
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.multiply(t, e);
				var l = new sn("return a * b;",t.shape,e.shape)
					, h = this.makeOutputArray(l.outputShape, t.dtype);
				return this.compileAndRun(l, [t, e], h)
			}
			,
			t.prototype.batchNormalization = function(t, e, n, r, o, i) {
				var a = [t, e, n]
					, s = null;
				null != i && (s = i.shape,
					a.push(i));
				var u = null;
				if (null != o && (u = o.shape,
					a.push(o)),
					Ot.get("WEBGL_PACK_BATCHNORMALIZATION")) {
					var c = new tn(t.shape,e.shape,n.shape,s,u,r);
					return this.compileAndRun(c, a)
				}
				var l = new Ze(t.shape,e.shape,n.shape,s,u,r);
				return this.compileAndRun(l, a)
			}
			,
			t.prototype.localResponseNormalization4D = function(t, e, n, r, o) {
				var i = new uo(t.shape,e,n,r,o);
				return this.compileAndRun(i, [t])
			}
			,
			t.prototype.LRNGrad = function(t, e, n, r, o, i, a) {
				var s = new co(e.shape,r,o,i,a);
				return this.compileAndRun(s, [e, n, t])
			}
			,
			t.prototype.tile = function(t, e) {
				var n = new Oo(t.shape,e);
				return this.compileAndRun(n, [t])
			}
			,
			t.prototype.pad = function(t, e, n) {
				var r = new yo(t.shape,e,n);
				return this.compileAndRun(r, [t])
			}
			,
			t.prototype.transpose = function(t, e) {
				var n = new Po(t.shape,e);
				return this.compileAndRun(n, [t])
			}
			,
			t.prototype.gather = function(t, e, n) {
				var r = new jn(t.shape,e.size,n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.batchToSpaceND = function(t, e, n) {
				A(t.rank <= 4, "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");
				var r = e.reduce(function(t, e) {
					return t * e
				})
					, o = jt(t.shape, e, r)
					, i = $t(o.length, e.length)
					, a = Kt(t.shape, e, r)
					, s = Xt(n, e.length)
					, u = Yt(a, n, e.length);
				return t.reshape(o).transpose(i).reshape(a).slice(s, u)
			}
			,
			t.prototype.spaceToBatchND = function(t, e, n) {
				A(t.rank <= 4, "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");
				var r = e.reduce(function(t, e) {
					return t * e
				})
					, o = [[0, 0]];
				o.push.apply(o, n);
				for (var i = 1 + e.length; i < t.shape.length; ++i)
					o.push([0, 0]);
				var a = t.pad(o)
					, s = jt(a.shape, e, r, !1)
					, u = $t(s.length, e.length, !1)
					, c = Kt(a.shape, e, r, !1);
				return a.reshape(s).transpose(u).reshape(c)
			}
			,
			t.prototype.reduce = function(t, e, n) {
				var r = t.shape[0]
					, o = t.shape[1]
					, i = se(o)
					, a = new wo({
					windowSize: i,
					inSize: o,
					batchSize: r
				},e)
					, s = a.outputShape
					, u = s[0]
					, c = s[1]
					, l = this.makeOutputArray([u, c], n);
				return this.compileAndRun(a, [t], l),
					1 === l.shape[1] ? l : this.reduce(l, e, n)
			}
			,
			t.prototype.argReduce = function(t, e, n) {
				void 0 === n && (n = null);
				var r = t.shape[0]
					, o = t.shape[1];
				null != n && (r = n.shape[0],
					o = n.shape[1]);
				var i = se(o)
					, a = new Ke({
					windowSize: i,
					inSize: o,
					batchSize: r
				},e,null == n)
					, s = a.outputShape
					, u = s[0]
					, c = s[1]
					, l = this.makeOutputArray([u, c], "int32")
					, h = [t];
				return null != n && h.push(n),
					this.compileAndRun(a, h, l),
					1 === l.shape[1] ? l : this.argReduce(t, e, l)
			}
			,
			t.prototype.sum = function(t, e) {
				ee("sum", e, t.rank);
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o)
					, a = wt(t.dtype);
				return this.reduce(i, "sum", a).reshape(r)
			}
			,
			t.prototype.prod = function(t, e) {
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o)
					, a = wt(t.dtype);
				return this.reduce(i, "prod", a).reshape(r)
			}
			,
			t.prototype.unsortedSegmentSum = function(t, e, n) {
				var r = 0
					, o = ne([r], t.rank)
					, i = t;
				null != o && (i = t.transpose(o),
					r = oe(1, t.rank)[0]);
				var a = function(t, e, n) {
					for (var r = [], o = t.length, i = 0; i < o; i++)
						i !== e ? r.push(t[i]) : r.push(n);
					return r
				}(i.shape, r, n)
					, s = L([i.shape[r]])
					, u = i.as2D(-1, s)
					, c = wt(t.dtype)
					, l = this.segOpCompute(u, "unsortedSegmentSum", e, c, n).reshape(a);
				return null != o && (l = l.transpose(re(o))),
					l
			}
			,
			t.prototype.segOpCompute = function(t, e, n, r, o) {
				var i = t.shape[0]
					, a = t.shape[1]
					, s = function(t, e) {
					var n, r = !1;
					for (t <= 30 ? (n = t,
						r = !0) : n = z(t, Math.floor(Math.sqrt(t))); !r; ) {
						if (e < n || n === t) {
							r = !0;
							break
						}
						n = z(t, n + 1)
					}
					return n
				}(a, o)
					, u = new ko({
					windowSize: s,
					inSize: a,
					batchSize: i,
					numSegments: o
				},e)
					, c = u.outputShape
					, l = c[0]
					, h = c[1]
					, p = this.makeOutputArray([l, h], r);
				return this.compileAndRun(u, [t, n], p),
					p.shape[1] === o ? p : (n = Oe(0, o).tile([a / s]),
						this.segOpCompute(p, e, n, r, o))
			}
			,
			t.prototype.argMin = function(t, e) {
				var n = [e];
				ee("argMin", n, t.rank);
				var r = Jt(t.shape, n)
					, o = r[0]
					, i = L(r[1])
					, a = t.as2D(-1, i);
				return this.argReduce(a, "min").reshape(o)
			}
			,
			t.prototype.argMax = function(t, e) {
				var n = [e];
				ee("argMax", n, t.rank);
				var r = Jt(t.shape, n)
					, o = r[0]
					, i = L(r[1])
					, a = t.as2D(-1, i);
				return this.argReduce(a, "max").reshape(o)
			}
			,
			t.prototype.cumsum = function(t, e, n, r) {
				if (e !== t.rank - 1)
					throw new Error("WebGL cumsum shader expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
				var o = new Ln(t.shape,n,r);
				return this.compileAndRun(o, [t])
			}
			,
			t.prototype.equal = function(t, e) {
				var n = new sn("return float(a == b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.notEqual = function(t, e) {
				var n = new sn("return float(a != b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.less = function(t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.less(t, e);
				var n = new sn("return float(a < b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.lessEqual = function(t, e) {
				var n = new sn("return float(a <= b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.greater = function(t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.greater(t, e);
				var n = new sn("return float(a > b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.greaterEqual = function(t, e) {
				var n = new sn("return float(a >= b);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.logicalNot = function(t) {
				var e = new Wo(t.shape,"return float(!(x >= 1.0));");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.logicalAnd = function(t, e) {
				var n = new sn("return float(a >= 1.0 && b >= 1.0);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.logicalOr = function(t, e) {
				var n = new sn("return float(a >= 1.0 || b >= 1.0);",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "bool");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.select = function(t, e, n) {
				var r = new Do(t.rank,e.shape,e.rank)
					, o = this.makeOutputArray(r.outputShape, xt(e.dtype, n.dtype));
				return this.compileAndRun(r, [t, e, n], o)
			}
			,
			t.prototype.where = function(t) {
				qt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
				var e = t.dataSync();
				return Mi(t.shape, e)
			}
			,
			t.prototype.topk = function(t, e, n) {
				return $e(t.dataSync(), t.shape, t.dtype, e)
			}
			,
			t.prototype.min = function(t, e) {
				ee("min", e, t.rank);
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o);
				return this.reduce(i, "min", i.dtype).reshape(r)
			}
			,
			t.prototype.minimum = function(t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.minimum(t, e);
				var n = new sn("\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n\n  return min(a, b);\n",t.shape,e.shape);
				return this.compileAndRun(n, [t, e])
			}
			,
			t.prototype.mod = function(t, e) {
				var n = new sn("if (b == 0.0) return NAN;\n  return mod(a, b);",t.shape,e.shape)
					, r = n.getCustomSetupFunc();
				return this.compileAndRun(n, [t, e], null, r)
			}
			,
			t.prototype.max = function(t, e) {
				ee("max", e, t.rank);
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o);
				return this.reduce(i, "max", i.dtype).reshape(r)
			}
			,
			t.prototype.maximum = function(t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.maximum(t, e);
				var n = new sn("\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n\n  return max(a, b);\n",t.shape,e.shape);
				return this.compileAndRun(n, [t, e])
			}
			,
			t.prototype.all = function(t, e) {
				ee("all", e, t.rank);
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o);
				return this.reduce(i, "all", i.dtype).reshape(r)
			}
			,
			t.prototype.any = function(t, e) {
				ee("any", e, t.rank);
				var n = Jt(t.shape, e)
					, r = n[0]
					, o = L(n[1])
					, i = t.as2D(-1, o);
				return this.reduce(i, "any", i.dtype).reshape(r)
			}
			,
			t.prototype.squaredDifference = function(t, e) {
				var n = new sn("return (a - b) * (a - b);",t.shape,e.shape);
				return this.compileAndRun(n, [t, e])
			}
			,
			t.prototype.realDivide = function(t, e) {
				var n = new sn("if (a == b) return 1.0;\n  return a / b;",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "float32");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.floorDiv = function(t, e) {
				var n = new sn("\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n",t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, "int32");
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.add = function(t, e) {
				if ("complex64" === t.dtype && "complex64" === e.dtype)
					return this.complexSeparableBinaryOp(t, e, on);
				var n = new sn(on,t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, xt(t.dtype, e.dtype));
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.complexSeparableBinaryOp = function(s, u, c) {
				var l = this
					, t = this.texData.get(s.dataId)
					, e = this.texData.get(u.dataId)
					, n = [[t.complexTensors.real, e.complexTensors.real], [t.complexTensors.imag, e.complexTensors.imag]].map(function(t) {
					var e = t[0]
						, n = t[1]
						, r = new sn(c,s.shape,u.shape)
						, o = l.makeOutputArray(r.outputShape, xt(e.dtype, n.dtype))
						, i = l.makeComplexComponentTensorHandle(s, e)
						, a = l.makeComplexComponentTensorHandle(u, n);
					return l.compileAndRun(r, [i, a], o)
				})
					, r = n[0]
					, o = n[1]
					, i = this.complex(r, o);
				return r.dispose(),
					o.dispose(),
					i
			}
			,
			t.prototype.makeComplexComponentTensorHandle = function(t, e) {
				return {
					dataId: e.dataId,
					dtype: e.dtype,
					shape: t.shape
				}
			}
			,
			t.prototype.addN = function(t) {
				for (var e = t[0], n = 1; n < t.length; n++)
					e = this.add(e, t[n]);
				return e
			}
			,
			t.prototype.subtract = function(t, e) {
				if ("complex64" === t.dtype && "complex64" === e.dtype)
					return this.complexSeparableBinaryOp(t, e, an);
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.subtract(t, e);
				var n = new sn(an,t.shape,e.shape)
					, r = this.makeOutputArray(n.outputShape, xt(t.dtype, e.dtype));
				return this.compileAndRun(n, [t, e], r)
			}
			,
			t.prototype.pow = function(t, e) {
				var n = new sn("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nreturn (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",t.shape,e.shape)
					, r = n.getCustomSetupFunc()
					, o = this.makeOutputArray(n.outputShape, xt(t.dtype, e.dtype));
				return this.compileAndRun(n, [t, e], o, r)
			}
			,
			t.prototype.ceil = function(t) {
				var e = new Wo(t.shape,"return ceil(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.floor = function(t) {
				var e = new Wo(t.shape,"return floor(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.sign = function(t) {
				var e = new Wo(t.shape,"\n  if (isNaN(x)) { return 0.0; }\n  return sign(x);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.round = function(t) {
				var e = new Wo(t.shape,"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.exp = function(t) {
				var e = new Wo(t.shape,"return exp(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.expm1 = function(t) {
				var e = new Wo(t.shape,"return exp(x) - 1.0;");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.log = function(t) {
				var e = new Wo(t.shape,"if (x < 0.0) return NAN;\n  return log(x);")
					, n = e.getCustomSetupFunc();
				return this.compileAndRun(e, [t], null, n)
			}
			,
			t.prototype.log1p = function(t) {
				var e = new Wo(t.shape,"return log(1.0 + x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.sqrt = function(t) {
				var e = new Wo(t.shape,"return sqrt(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.rsqrt = function(t) {
				var e = new Wo(t.shape,"return inversesqrt(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.square = function(t) {
				var e = new Wo(t.shape,"return x * x;");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.reciprocal = function(t) {
				var e = new Wo(t.shape,"return 1.0 / x;");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.relu = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.elu = function(t) {
				var e = new Wo(t.shape,"return (x >= 0.0) ? x : (exp(x) - 1.0);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.eluDer = function(t, e) {
				var n = new sn("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,e.shape);
				return this.compileAndRun(n, [t, e])
			}
			,
			t.prototype.selu = function(t) {
				var e = new Wo(t.shape,"\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = 1.7580993408473768;\n  float scale = 1.0507009873554805;\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.int = function(t) {
				var e = new Wo(t.shape,"return float(int(x));")
					, n = this.makeOutputArray(e.outputShape, "int32");
				return this.compileAndRun(e, [t], n)
			}
			,
			t.prototype.clip = function(t, e, n) {
				var r;
				return r = Ot.get("WEBGL_PACK_CLIP") ? new cn(t.shape,e,n) : new un(t.shape,e,n),
					this.compileAndRun(r, [t])
			}
			,
			t.prototype.abs = function(t) {
				var e = new Wo(t.shape,"return abs(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.complexAbs = function(t) {
				var e = this.texData.get(t.dataId)
					, n = new ln(t.shape)
					, r = [this.makeComplexComponentTensorHandle(t, e.complexTensors.real), this.makeComplexComponentTensorHandle(t, e.complexTensors.imag)];
				return this.compileAndRun(n, r)
			}
			,
			t.prototype.sigmoid = function(t) {
				var e = new Wo(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.softplus = function(t) {
				var e = new Wo(t.shape,"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.sin = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  return sin(x);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.cos = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  return cos(x);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.tan = function(t) {
				var e = new Wo(t.shape,"return tan(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.asin = function(t) {
				var e = new Wo(t.shape,"return asin(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.acos = function(t) {
				var e = new Wo(t.shape,"return acos(x);");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.atan = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  return atan(x);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.atan2 = function(t, e) {
				var n = new sn("\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n\n  return atan(a, b);\n",t.shape,e.shape);
				return this.compileAndRun(n, [t, e])
			}
			,
			t.prototype.sinh = function(t) {
				var e = new Wo(t.shape,"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.cosh = function(t) {
				var e = new Wo(t.shape,"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.tanh = function(t) {
				var e = new Wo(t.shape,"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.asinh = function(t) {
				var e = new Wo(t.shape,"return log(x + sqrt(x * x + 1.0));");
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.acosh = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));")
					, n = e.getCustomSetupFunc();
				return this.compileAndRun(e, [t], null, n)
			}
			,
			t.prototype.atanh = function(t) {
				var e = new Wo(t.shape,"if (isNaN(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;")
					, n = e.getCustomSetupFunc();
				return this.compileAndRun(e, [t], null, n)
			}
			,
			t.prototype.erf = function(t) {
				var e = new Wo(t.shape,'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n');
				return this.compileAndRun(e, [t])
			}
			,
			t.prototype.step = function(t, e) {
				var n, r = new Wo(t.shape,(void 0 === (n = e) && (n = 0),
				zo + "\n    return x > 0.0 ? 1.0 : float(" + n + ");\n  "));
				return this.compileAndRun(r, [t])
			}
			,
			t.prototype.conv2dWithIm2Row = function(t, e, n) {
				var r = n.filterWidth
					, o = n.filterHeight
					, i = n.inChannels
					, a = n.outWidth
					, s = n.outHeight
					, u = r * o * i
					, c = s * a
					, l = [u, c]
					, h = t.squeeze([0])
					, p = e.reshape([u, -1])
					, f = new so(l,h.shape,n)
					, d = this.compileAndRun(f, [h])
					, m = new po(d.shape,p.shape,[c, n.outChannels],!0,!1);
				return this.compileAndRun(m, [d, p]).reshape([1, s, a, n.outChannels])
			}
			,
			t.prototype.conv2d = function(t, e, n) {
				if (Ot.get("WEBGL_CONV_IM2COL") && 1 === t.shape[0])
					return this.conv2dWithIm2Row(t, e, n);
				var r = new yn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.conv2dDerInput = function(t, e, n) {
				var r = new fn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.conv2dDerFilter = function(t, e, n) {
				var r = new pn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.depthwiseConv2D = function(t, e, n) {
				var r;
				return Ot.get("WEBGL_PACK_DEPTHWISECONV") && 1 === n.dilationWidth && 1 === n.dilationHeight && n.padInfo.left <= 1 && n.strideWidth <= 2 && n.outChannels / n.inChannels == 1 ? (r = new bn(n),
					this.compileAndRun(r, [t, e], this.makePackedTensor(n.outShape, t.dtype))) : (r = new wn(n),
					this.compileAndRun(r, [t, e]))
			}
			,
			t.prototype.depthwiseConv2DDerInput = function(t, e, n) {
				var r = new gn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.depthwiseConv2DDerFilter = function(t, e, n) {
				var r = new vn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.conv3d = function(t, e, n) {
				var r = new xn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.conv3dDerInput = function(t, e, n) {
				var r = new mn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.conv3dDerFilter = function(t, e, n) {
				var r = new dn(n);
				return this.compileAndRun(r, [t, e])
			}
			,
			t.prototype.maxPool = function(t, e) {
				var n = new xo(e,"max",!1)
					, r = this.makeOutputArray(n.outputShape, t.dtype);
				return this.compileAndRun(n, [t], r)
			}
			,
			t.prototype.avgPool = function(t, e) {
				var n = new xo(e,"avg",!1)
					, r = this.makeOutputArray(n.outputShape, "float32");
				return this.compileAndRun(n, [t], r)
			}
			,
			t.prototype.maxPoolBackprop = function(t, e, n, r) {
				var o = new xo(r,"max",!0)
					, i = this.compileAndRun(o, [e])
					, a = new lo(r)
					, s = this.makeOutputArray(a.outputShape, e.dtype)
					, u = this.compileAndRun(a, [t, i], s);
				return i.dispose(),
					u
			}
			,
			t.prototype.avgPoolBackprop = function(t, e, n) {
				var r = new Xe(n)
					, o = this.makeOutputArray(r.outputShape, e.dtype);
				return this.compileAndRun(r, [t], o)
			}
			,
			t.prototype.cast = function(t, e) {
				return ze(t, e, this)
			}
			,
			t.prototype.reshape = function(t, e) {
				return this.texData.get(t.dataId).isPacked && !Or(t.shape, e) ? this.packedReshape(t, e) : Ue(t, e)
			}
			,
			t.prototype.resizeBilinear = function(t, e, n, r) {
				var o = new Co(t.shape,e,n,r);
				return this.compileAndRun(o, [t])
			}
			,
			t.prototype.resizeBilinearBackprop = function(t, e, n) {
				var r = new Eo(t,e,n);
				return this.compileAndRun(r, [t])
			}
			,
			t.prototype.resizeNearestNeighbor = function(t, e, n, r) {
				var o = new _o(t.shape,e,n,r);
				return this.compileAndRun(o, [t])
			}
			,
			t.prototype.resizeNearestNeighborBackprop = function(t, e, n) {
				var r = new So(t,e,n);
				return this.compileAndRun(r, [t])
			}
			,
			t.prototype.multinomial = function(t, e, n, r) {
				var o = e ? t : ye(t)
					, i = o.shape[0]
					, a = o.shape[1]
					, s = new fo(i,a,n)
					, u = this.makeOutputArray(s.outputShape, "int32")
					, c = s.getCustomSetupFunc(r);
				return this.compileAndRun(s, [o], u, c)
			}
			,
			t.prototype.oneHot = function(t, e, n, r) {
				var o = new mo(t.size,e,n,r);
				return this.compileAndRun(o, [t])
			}
			,
			t.prototype.nonMaxSuppression = function(t, e, n, r, o) {
				return qt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),
					He(t.dataSync(), e.dataSync(), n, r, o)
			}
			,
			t.prototype.cropAndResize = function(t, e, n, r, o, i) {
				var a = new Sn(t.shape,e.shape,r,o,i);
				return this.compileAndRun(a, [t, e, n])
			}
			,
			t.prototype.depthToSpace = function(t, e, n) {
				A(1 < e, "blockSize should be > 1 for depthToSpace, but was: " + e);
				var r = t.shape[0]
					, o = ("NHWC" === n ? t.shape[1] : t.shape[2]) * e
					, i = ("NHWC" === n ? t.shape[2] : t.shape[3]) * e
					, a = ("NHWC" === n ? t.shape[3] : t.shape[1]) / (e * e)
					, s = new zn("NHWC" === n ? [r, o, i, a] : [r, a, o, i],e,n);
				return this.compileAndRun(s, [t])
			}
			,
			t.prototype.split = function(t, e, n) {
				return je(t, e, n)
			}
			,
			t.prototype.scatterND = function(t, e, n) {
				var r = ce(0, t, n)
					, o = r.sliceRank
					, i = r.numUpdates
					, a = r.sliceSize
					, s = r.strides
					, u = r.outputSize
					, c = [u / a, a]
					, l = t.reshape([i, o])
					, h = e.reshape([i, a]);
				if (0 === u)
					return Ue(Ce([]), n);
				var p = Se(0)
					, f = new No(i,o,l.rank,h.rank,s,c);
				return this.compileAndRun(f, [h, l, p]).reshape(n)
			}
			,
			t.prototype.sparseToDense = function(t, e, n, r) {
				var o = ce(0, t, n)
					, i = o.sliceRank
					, a = o.numUpdates
					, s = o.strides
					, u = o.outputSize
					, c = new No(a,i,t.rank,e.rank,s,[u, 1],!1);
				return this.compileAndRun(c, [e, t, r]).reshape(n)
			}
			,
			t.prototype.fft = function(t) {
				return this.fftImpl(t, !1)
			}
			,
			t.prototype.ifft = function(t) {
				return this.fftImpl(t, !0)
			}
			,
			t.prototype.fftImpl = function(t, e) {
				var n = this.texData.get(t.dataId)
					, r = new Hn(Vn,t.shape,e)
					, o = new Hn(Gn,t.shape,e)
					, i = [this.makeComplexComponentTensorHandle(t, n.complexTensors.real), this.makeComplexComponentTensorHandle(t, n.complexTensors.imag)]
					, a = this.compileAndRun(r, i)
					, s = this.compileAndRun(o, i)
					, u = this.complex(a, s).as2D(t.shape[0], t.shape[1]);
				return a.dispose(),
					s.dispose(),
					u
			}
			,
			t.prototype.gatherND = function(t, e) {
				var n = e.shape
					, r = n[n.length - 1]
					, o = ae(t, e)
					, i = o[0]
					, a = o[1]
					, s = o[2]
					, u = o[3]
					, c = e.reshape([a, r])
					, l = t.reshape([t.size / s, s])
					, h = new Qn(r,u,[a, s]);
				return this.compileAndRun(h, [l, c]).reshape(i)
			}
			,
			t.prototype.makeOutputArray = function(t, e) {
				return it.make(t, {}, e)
			}
			,
			t.prototype.makePackedTensor = function(t, e) {
				var n = it.make(t, {}, e);
				return this.texData.get(n.dataId).isPacked = !0,
					n
			}
			,
			t.prototype.unpackTensor = function(t) {
				var e = new Uo(t.shape);
				return this.compileAndRun(e, [t], it.make(e.outputShape, {}, t.dtype))
			}
			,
			t.prototype.getBatchDim = function(t, e) {
				return void 0 === e && (e = 2),
					L(t.slice(0, t.length - e))
			}
			,
			t.prototype.getRowsCols = function(t) {
				if (0 === t.length)
					throw Error("Cannot get rows and columns of an empty shape array.");
				return [1 < t.length ? t[t.length - 2] : 1, t[t.length - 1]]
			}
			,
			t.prototype.packedReshape = function(t, e) {
				var n = t.reshape([this.getBatchDim(t.shape)].concat(this.getRowsCols(t.shape)))
					, r = [this.getBatchDim(e)].concat(this.getRowsCols(e))
					, o = new bo(r,n.shape);
				return this.compileAndRun(o, [n]).reshape(e)
			}
			,
			t.prototype.compileAndRun = function(i, t, e, n, r) {
				var a = this;
				if (void 0 === r && (r = !0),
				null == e && (e = i.usesPackedTextures ? this.makePackedTensor(i.outputShape, t[0].dtype) : this.makeOutputArray(i.outputShape, t[0].dtype)),
				0 === e.size)
					return this.texData.get(e.dataId).values = _(e.dtype, 0),
						e;
				var o = t.map(function(t) {
					if ("complex64" === t.dtype)
						throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
					var e = a.texData.get(t.dataId);
					if (null == e.texture) {
						if (!i.usesPackedTextures && L(t.shape) <= Ot.get("WEBGL_SIZE_UPLOAD_UNIFORM"))
							return {
								shape: t.shape,
								texData: null,
								isUniform: !0,
								uniformValues: a.readSync(t.dataId)
							};
						i.usesPackedTextures && (e.isPacked = !0,
							e.shape = t.shape)
					} else if (!!e.isPacked != !!i.usesPackedTextures) {
						var n = void 0
							, r = void 0;
						r = e.isPacked ? (n = new Uo(t.shape),
							a.compileAndRun(n, [t], it.make(n.outputShape, {}, t.dtype))) : (n = new go(t.shape),
							a.compileAndRun(n, [t], a.makePackedTensor(t.shape, t.dtype))),
							e = a.texData.get(r.dataId),
							t = r
					} else if (e.isPacked && !Or(e.shape, t.shape)) {
						a.delayedStorage = !1;
						var o = t.dataSync();
						a.delayedStorage = !0,
							t = it.make(t.shape, {
								values: o
							}, t.dtype),
							(e = a.texData.get(t.dataId)).isPacked = !0
					}
					return a.uploadToGPU(t.dataId),
						{
							shape: t.shape,
							texData: e,
							isUniform: !1
						}
				});
				this.uploadToGPU(e.dataId);
				var s, u = {
					shape: e.shape,
					texData: this.texData.get(e.dataId),
					isUniform: !1
				}, c = function(t, e, n) {
					var r = "";
					e.concat(n).forEach(function(t) {
						r += t.shape + "_" + (t.isUniform ? "uniform" : t.texData.texShape)
					});
					var o = t.userCode
						, i = (!0 === t.supportsBroadcasting).toString();
					return t.constructor.name + "_" + i + "_" + r + "_" + o
				}(i, o, u), l = this.getAndSaveBinary(c, function() {
					return function(t, r, e, n) {
						for (var o = r.userCode, i = e.map(function(t, e) {
							var n = {
								logicalShape: t.shape,
								texShape: t.isUniform ? null : t.texData.texShape,
								isUniform: t.isUniform,
								isPacked: !t.isUniform && t.texData.isPacked
							};
							return {
								name: r.variableNames[e],
								shapeInfo: n
							}
						}), a = i.map(function(t) {
							return t.shapeInfo
						}), s = {
							logicalShape: n.shape,
							texShape: n.texData.texShape,
							isUniform: !1,
							isPacked: n.texData.isPacked
						}, u = Nn(i, s, o, !0 === r.supportsBroadcasting, r.usesPackedTextures), c = t.createProgram(u), l = {}, h = 0; h < r.variableNames.length; h++) {
							var p = r.variableNames[h];
							l[p] = t.getUniformLocation(c, p, !1)
						}
						return {
							program: r,
							source: u,
							webGLProgram: c,
							uniformLocations: l,
							gpgpu: t,
							inShapeInfos: a,
							outShapeInfo: s
						}
					}(a.gpgpu, i, o, u)
				}), h = null != this.activeTimers;
				if (h && (s = this.startTimer()),
					function(a, t, e, n) {
						ao(a.inShapeInfos, t),
							ao([a.outShapeInfo], [e]);
						var r = e.texData.texture
							, o = e.texData.texShape
							, s = a.gpgpu;
						e.texData.isPacked ? s.setOutputPackedMatrixTexture(r, o[0], o[1]) : s.setOutputMatrixTexture(r, o[0], o[1]),
							s.setProgram(a.webGLProgram),
							t.forEach(function(t, e) {
								var n = a.program.variableNames[e]
									, r = a.uniformLocations[n];
								if (null != r) {
									if (t.isUniform) {
										if (1 === L(t.shape))
											s.gl.uniform1f(r, t.uniformValues[0]);
										else {
											var o = t.uniformValues;
											o instanceof Float32Array || (o = new Float32Array(o)),
												s.gl.uniform1fv(r, o)
										}
										return
									}
									var i = t.texData.texture;
									s.setInputMatrixTexture(i, r, e)
								}
							}),
						null != n && n(s, a.webGLProgram),
							s.executeProgram()
					}(l, o, u, n),
				Ot.get("WEBGL_PAGING_ENABLED") && r && this.numBytesInGPU > this.NUM_BYTES_BEFORE_PAGING)
					for (var p = this.numBytesInGPU - this.NUM_BYTES_BEFORE_PAGING; 0 < p && 0 < this.lruDataGPU.length; ) {
						var f = this.lruDataGPU.shift()
							, d = this.texData.get(f)
							, m = d.shape
							, v = d.dtype;
						p -= this.computeBytes(m, v),
							this.read(f)
					}
				return h && (s = this.endTimer(s),
					this.activeTimers.push({
						name: i.constructor.name,
						query: this.getQueryTime(s)
					})),
					Ot.get("WEBGL_LAZILY_UNPACK") || !this.texData.get(e.dataId).isPacked || i.isPackShader ? e : this.unpackTensor(e)
			}
			,
			t.prototype.getAndSaveBinary = function(t, e) {
				return t in this.binaryCache || (this.binaryCache[t] = e()),
					this.binaryCache[t]
			}
			,
			t.prototype.getTextureManager = function() {
				return this.textureManager
			}
			,
			t.prototype.dispose = function() {
				if (!this.disposed) {
					for (var t in this.binaryCache)
						this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram);
					this.textureManager.dispose(),
						this.canvas.remove(),
					null != this.fromPixels2DContext && this.fromPixels2DContext.canvas.remove(),
					this.gpgpuCreatedLocally && this.gpgpu.dispose(),
						this.disposed = !0
				}
			}
			,
			t.prototype.floatPrecision = function() {
				var t = this;
				return zt(function() {
					return 0 < t.abs(Se(1e-8)).get() ? 32 : 16
				})
			}
			,
			t.prototype.uploadToGPU = function(t) {
				var e, n = this.texData.get(t), r = n.shape, o = n.values, i = n.texture, a = n.usage, s = n.isPacked;
				if (null == i) {
					var u, c = null != this.activeTimers;
					c && (u = performance.now());
					var l = Mr(r, s);
					n.texShape = l;
					var h = this.acquireTexture(t, l, a, s);
					if (n.texture = h,
					null != o) {
						if (s) {
							var p = this.getBatchDim(r)
								, f = 1
								, d = 1;
							r.length && (f = (e = this.getRowsCols(r))[0],
								d = e[1]),
								this.gpgpu.uploadMatrixToPackedTexture(h, p, f, d, l[0], l[1], Oi(o))
						} else
							this.gpgpu.uploadMatrixToTexture(h, l[0], l[1], Oi(o));
						n.values = null,
						c && (this.uploadWaitMs += performance.now() - u)
					}
				} else
					Ot.get("WEBGL_PAGING_ENABLED") && 0 <= this.lruDataGPU.indexOf(t) && (this.lruDataGPU.splice(this.lruDataGPU.indexOf(t), 1),
						this.lruDataGPU.push(t))
			}
			,
			t.prototype.convertAndCacheOnCPU = function(t, e) {
				var n = this.delayedStorage
					, r = this.texData.get(t)
					, o = r.texture
					, i = r.texShape
					, a = r.dtype
					, s = r.usage
					, u = r.isPacked;
				return n && null != o && (this.releaseTexture(t, o, i, s, u),
					r.texture = null,
					r.texShape = null),
					r.usage = $n.UPLOAD,
				null != e && (r.values = function(t, e) {
					if ("float32" === e || "complex64" === e)
						return t;
					if ("int32" !== e && "bool" !== e)
						throw new Error("Unknown dtype " + e);
					for (var n = "int32" === e ? new Int32Array(t.length) : new Uint8Array(t.length), r = 0; r < n.length; ++r)
						n[r] = Math.round(t[r]);
					return n
				}(e, a)),
					r.values
			}
			,
			t.prototype.releaseTexture = function(t, e, n, r, o) {
				var i = this.texData.get(t)
					, a = i.shape
					, s = i.dtype;
				if (Ot.get("WEBGL_PAGING_ENABLED")) {
					var u = this.lruDataGPU.indexOf(t);
					0 <= u && this.lruDataGPU.splice(u, 1)
				}
				this.numBytesInGPU -= this.computeBytes(a, s),
					this.textureManager.releaseTexture(e, n, r, o)
			}
			,
			t.prototype.acquireTexture = function(t, e, n, r) {
				var o = this.texData.get(t)
					, i = o.shape
					, a = o.dtype;
				return Ot.get("WEBGL_PAGING_ENABLED") && this.lruDataGPU.push(t),
					this.numBytesInGPU += this.computeBytes(i, a),
					this.textureManager.acquireTexture(e, n, r)
			}
			,
			t.prototype.computeBytes = function(t, e) {
				return L(t) * M(e)
			}
			,
			t
	}();
	function Oi(t) {
		return t instanceof Float32Array ? t : new Float32Array(t)
	}
	Ot.get("IS_BROWSER") && Ot.registerBackend("webgl", function() {
		return new Fi
	}, 2, ot);
	var Pi = ge({
		abs_: function(t) {
			var e = me(t, "x", "abs");
			return "complex64" === e.dtype ? Ot.engine.runKernel(function(t) {
				return t.complexAbs(e)
			}, {
				$x: e
			}) : Ot.engine.runKernel(function(t) {
				return t.abs(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.mulStrict(e.toFloat().step(-1))
					}
				}
			})
		}
	})
		, Bi = ge({
		acos_: function(t) {
			var e = me(t, "x", "acos");
			return Ot.engine.runKernel(function(t) {
				return t.acos(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(Se(1).sub(e.toFloat().square()).sqrt()).neg()
					}
				}
			})
		}
	})
		, Li = ge({
		acosh_: function(t) {
			var e = me(t, "x", "acosh");
			return Ot.engine.runKernel(function(t) {
				return t.acosh(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(e.toFloat().square().sub(1).sqrt())
					}
				}
			})
		}
	})
		, Wi = ge({
		asin_: function(t) {
			var e = me(t, "x", "asin");
			return Ot.engine.runKernel(function(t) {
				return t.asin(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(Se(1).sub(e.toFloat().square()).sqrt())
					}
				}
			})
		}
	})
		, zi = ge({
		asinh_: function(t) {
			var e = me(t, "x", "asinh");
			return Ot.engine.runKernel(function(t) {
				return t.asinh(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(Se(1).add(e.toFloat().square()).sqrt())
					}
				}
			})
		}
	})
		, Ui = ge({
		atan_: function(t) {
			var e = me(t, "x", "atan");
			return Ot.engine.runKernel(function(t) {
				return t.atan(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.div(e.toFloat().square().add(1))
					}
				}
			})
		}
	})
		, Vi = ge({
		atanh_: function(t) {
			var e = me(t, "x", "atanh");
			return Ot.engine.runKernel(function(t) {
				return t.atanh(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.div(Se(1).sub(e.toFloat().square()))
					}
				}
			})
		}
	})
		, Gi = ge({
		ceil_: function(t) {
			var e = me(t, "x", "ceil");
			return Ot.engine.runKernel(function(t) {
				return t.ceil(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return Be(t)
					}
				}
			})
		}
	})
		, Hi = ge({
		clipByValue_: function(t, e, n) {
			var r = me(t, "x", "clipByValue");
			return A(e <= n, "Error in clip: min (" + e + ") must be less than or equal to max (" + n + ")."),
				Ot.engine.runKernel(function(t) {
					return t.clip(r, e, n)
				}, {
					$x: r
				}, function(t) {
					return {
						$x: function() {
							return t.where(r.greaterEqual(e).logicalAnd(r.lessEqual(n)), Be(t))
						}
					}
				})
		}
	})
		, qi = ge({
		cos_: function(t) {
			var e = me(t, "x", "cos");
			return Ot.engine.runKernel(function(t) {
				return t.cos(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return e.toFloat().sin().neg().mulStrict(t)
					}
				}
			})
		}
	})
		, ji = ge({
		cosh_: function(t) {
			var e = me(t, "x", "cosh");
			return Ot.engine.runKernel(function(t) {
				return t.cosh(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return e.toFloat().sinh().mulStrict(t)
					}
				}
			})
		}
	})
		, $i = ge({
		erf_: function(t) {
			var e = me(t, "x", "erf");
			return A("int32" === e.dtype || "float32" === e.dtype, "Input dtype must be `int32` or `float32`."),
			"int32" === e.dtype && (e = e.toFloat()),
				Ot.engine.runKernel(function(t) {
					return t.erf(e)
				}, {
					$x: e
				}, function(t) {
					return {
						$x: function() {
							return t.mul(e.square().neg().exp().mul(2 / Math.sqrt(Math.PI)))
						}
					}
				})
		}
	})
		, Ki = ge({
		exp_: function(t) {
			var n = me(t, "x", "exp");
			return Ot.engine.runKernel(function(t, e) {
				return e(t.exp(n))
			}, {
				$x: n
			}, function(t, e) {
				var n = e[0];
				return {
					$x: function() {
						return t.mulStrict(n)
					}
				}
			})
		}
	})
		, Xi = ge({
		expm1_: function(t) {
			var e = me(t, "x", "expm1");
			return Ot.engine.runKernel(function(t) {
				return t.expm1(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.mulStrict(e.exp())
					}
				}
			})
		}
	})
		, Yi = ge({
		floor_: function(t) {
			var e = me(t, "x", "floor");
			return Ot.engine.runKernel(function(t) {
				return t.floor(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return Be(t)
					}
				}
			})
		}
	})
		, Qi = ge({
		log_: function(t) {
			var e = me(t, "x", "log");
			return Ot.engine.runKernel(function(t) {
				return t.log(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(e.toFloat())
					}
				}
			})
		}
	})
		, Ji = ge({
		log1p_: function(t) {
			var e = me(t, "x", "log1p");
			return Ot.engine.runKernel(function(t) {
				return t.log1p(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.div(e.add(1))
					}
				}
			})
		}
	})
		, Zi = ge({
		logSigmoid_: function(t) {
			var e = me(t, "x", "logSigmoid");
			return Ot.engine.runKernel(function(t) {
				return t.softplus(e.neg()).neg()
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.mulStrict(e.neg().sigmoid())
					}
				}
			})
		}
	})
		, ta = ge({
		neg_: function(t) {
			var e = me(t, "x", "neg");
			return Ot.engine.runKernel(function(t) {
				return t.neg(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.neg()
					}
				}
			})
		}
	})
		, ea = ge({
		reciprocal_: function(t) {
			var e = me(t, "x", "reciprocal");
			return Ot.engine.runKernel(function(t) {
				return t.reciprocal(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(e.square().neg())
					}
				}
			})
		}
	})
		, na = ge({
		round_: function(t) {
			var e = me(t, "x", "round");
			return Ot.engine.runKernel(function(t) {
				return t.round(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return Be(t)
					}
				}
			})
		}
	})
		, ra = ge({
		rsqrt_: function(t) {
			var e = me(t, "x", "rsqrt");
			return Ot.engine.runKernel(function(t) {
				return t.rsqrt(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.div(e.pow(1.5).mul(2)).neg()
					}
				}
			})
		}
	})
		, oa = ge({
		sigmoid_: function(t) {
			var n = me(t, "x", "sigmoid");
			return Ot.engine.runKernel(function(t, e) {
				return e(t.sigmoid(n))
			}, {
				$x: n
			}, function(t, e) {
				var n = e[0];
				return {
					$x: function() {
						return t.mul(n.mul(Se(1).sub(n)))
					}
				}
			})
		}
	})
		, ia = ge({
		sign_: function(t) {
			var e = me(t, "x", "sign");
			return Ot.engine.runKernel(function(t) {
				return t.sign(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return Be(t)
					}
				}
			})
		}
	})
		, aa = ge({
		sin_: function(t) {
			var e = me(t, "x", "sin");
			return Ot.engine.runKernel(function(t) {
				return t.sin(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return e.toFloat().cos().mulStrict(t)
					}
				}
			})
		}
	})
		, sa = ge({
		sinh_: function(t) {
			var e = me(t, "x", "sinh");
			return Ot.engine.runKernel(function(t) {
				return t.sinh(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return e.toFloat().cosh().mulStrict(t)
					}
				}
			})
		}
	})
		, ua = ge({
		softplus_: function(t) {
			var e = me(t, "x", "softplus");
			return Ot.engine.runKernel(function(t) {
				return t.softplus(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.mulStrict(e.sigmoid())
					}
				}
			})
		}
	})
		, ca = ge({
		sqrt_: function(t) {
			var e = me(t, "x", "sqrt");
			return Ot.engine.runKernel(function(t) {
				return t.sqrt(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.div(e.toFloat().sqrt().mul(2))
					}
				}
			})
		}
	})
		, la = ge({
		square_: function(t) {
			var e = me(t, "x", "square");
			return Ot.engine.runKernel(function(t) {
				return t.square(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.mul(e.toFloat().mul(2))
					}
				}
			})
		}
	})
		, ha = ge({
		step_: function(t, e) {
			void 0 === e && (e = 0);
			var n = me(t, "x", "step");
			return Ot.engine.runKernel(function(t) {
				return t.step(n, e)
			}, {
				$x: n
			}, function(t) {
				return {
					$x: function() {
						return Be(t)
					}
				}
			})
		}
	})
		, pa = ge({
		tan_: function(t) {
			var e = me(t, "x", "tan");
			return Ot.engine.runKernel(function(t) {
				return t.tan(e)
			}, {
				$x: e
			}, function(t) {
				return {
					$x: function() {
						return t.divStrict(e.cos().square())
					}
				}
			})
		}
	})
		, fa = ge({
		tanh_: function(t) {
			var n = me(t, "x", "tanh");
			return Ot.engine.runKernel(function(t, e) {
				return e(t.tanh(n))
			}, {
				$x: n
			}, function(t, e) {
				var n = e[0];
				return {
					$x: function() {
						return Se(1).sub(n.square()).mulStrict(t)
					}
				}
			})
		}
	});
	function da(t) {
		return null == t ? null : 0 === t.rank ? t.as1D() : 1 === t.rank ? t : 2 === t.rank ? t.as4D(1, 1, t.shape[0], t.shape[1]) : 3 === t.rank ? t.as4D(1, t.shape[0], t.shape[1], t.shape[2]) : t
	}
	var ma = ge({
		batchNormalization2d_: function(t, e, n, r, o, i) {
			void 0 === r && (r = .001);
			var a, s, u = me(t, "x", "batchNormalization"), c = me(e, "mean", "batchNormalization"), l = me(n, "variance", "batchNormalization");
			return null != o && (a = me(o, "scale", "batchNormalization")),
			null != i && (s = me(i, "offset", "batchNormalization")),
				A(2 === u.rank, "Error in batchNormalization3D: x must be rank 3 but got rank " + u.rank + "."),
				A(2 === c.rank || 1 === c.rank, "Error in batchNormalization2D: mean must be rank 2 or rank 1 but got rank " + c.rank + "."),
				A(2 === l.rank || 1 === l.rank, "Error in batchNormalization2D: variance must be rank 2 or rank 1 but got rank " + l.rank + "."),
			null != a && A(2 === a.rank || 1 === a.rank, "Error in batchNormalization2D: scale must be rank 2 or rank 1 but got rank " + a.rank + "."),
			null != s && A(2 === s.rank || 1 === s.rank, "Error in batchNormalization2D: offset must be rank 2 or rank 1 but got rank " + s.rank + "."),
				ya(u, c, l, r, a, s)
		}
	})
		, va = ge({
		batchNormalization3d_: function(t, e, n, r, o, i) {
			void 0 === r && (r = .001);
			var a, s, u = me(t, "x", "batchNormalization"), c = me(e, "mean", "batchNormalization"), l = me(n, "variance", "batchNormalization");
			return null != o && (a = me(o, "scale", "batchNormalization")),
			null != i && (s = me(i, "offset", "batchNormalization")),
				A(3 === u.rank, "Error in batchNormalization3D: x must be rank 3 but got rank " + u.rank + "."),
				A(3 === c.rank || 1 === c.rank, "Error in batchNormalization3D: mean must be rank 3 or rank 1 but got rank " + c.rank + "."),
				A(3 === l.rank || 1 === l.rank, "Error in batchNormalization3D: variance must be rank 3 or rank 1 but got rank " + l.rank + "."),
			null != a && A(3 === a.rank || 1 === a.rank, "Error in batchNormalization3D: scale must be rank 3 or rank 1 but got rank " + a.rank + "."),
			null != s && A(3 === s.rank || 1 === s.rank, "Error in batchNormalization3D: offset must be rank 3 or rank 1 but got rank " + s.rank + "."),
				ya(u, c, l, r, a, s)
		}
	})
		, ga = ge({
		batchNormalization4d_: function(t, e, n, r, o, i) {
			void 0 === r && (r = .001);
			var a, s, u = me(t, "x", "batchNormalization"), c = me(e, "mean", "batchNormalization"), l = me(n, "variance", "batchNormalization");
			return null != o && (a = me(o, "scale", "batchNormalization")),
			null != i && (s = me(i, "offset", "batchNormalization")),
				A(4 === u.rank, "Error in batchNormalization4D: x must be rank 4 but got rank " + u.rank + "."),
				A(4 === c.rank || 1 === c.rank, "Error in batchNormalization4D: mean must be rank 4 or rank 1 but got rank " + c.rank + "."),
				A(4 === l.rank || 1 === l.rank, "Error in batchNormalization4D: variance must be rank 4 or rank 1 but got rank " + l.rank + "."),
			null != a && A(4 === a.rank || 1 === a.rank, "Error in batchNormalization4D: scale must be rank 4 or rank 1 but got rank " + a.rank + "."),
			null != s && A(4 === s.rank || 1 === s.rank, "Error in batchNormalization4D: offset must be rank 4 or rank 1 but got rank " + s.rank + "."),
				ya(u, c, l, r, a, s)
		}
	})
		, ya = ge({
		batchNormalization_: function(t, e, n, c, r, o) {
			void 0 === c && (c = .001);
			var l, i, h, p = me(t, "x", "batchNormalization"), f = me(e, "mean", "batchNormalization"), d = me(n, "variance", "batchNormalization");
			return null != r && (l = me(r, "scale", "batchNormalization")),
			null != o && (i = me(o, "offset", "batchNormalization")),
				A(f.rank === d.rank, "Batch normalization gradient requires mean and variance to have equal ranks."),
				A(null == i || f.rank === i.rank, "Batch normalization gradient requires mean and offset to have equal ranks."),
				A(null == l || f.rank === l.rank, "Batch normalization gradient requires mean and scale to have equal ranks."),
				h = 0 === p.rank || 1 === p.rank ? p.as4D(1, 1, 1, p.size) : 2 === p.rank ? p.as4D(1, 1, p.shape[0], p.shape[1]) : 3 === p.rank ? p.as4D(1, p.shape[0], p.shape[1], p.shape[2]) : p,
				Ot.engine.runKernel(function(t) {
					return t.batchNormalization(h, da(f), da(d), c, da(l), da(i))
				}, {
					$x: p,
					$mean: f,
					$variance: d,
					$scale: l,
					$offset: i
				}, function(n) {
					var t = null == l ? Se(1) : l
						, r = Qe(f.shape, h.shape)
						, e = [];
					if (1 === f.rank) {
						for (var o = 0; o < h.shape.length - 1; ++o)
							e.push(h.shape[o]);
						e.push(1)
					}
					var i = p.sub(f)
						, a = n.mul(t)
						, s = ra(d.add(Se(c)))
						, u = s.mul(s).mul(s).mul(Se(-.5));
					return {
						$x: function() {
							return 1 === f.rank ? n.mul(Di(s.as4D(1, 1, 1, f.shape[0]), e)).mul(t).reshape(p.shape) : n.mul(s).mul(t).reshape(p.shape)
						},
						$mean: function() {
							var t = s.mul(Se(-1)).mul(a);
							return 1 === f.rank && (t = t.sum(r)),
								t.reshape(f.shape)
						},
						$variance: function() {
							var t = u.mul(i).mul(a);
							return 1 === f.rank && (t = t.sum(r)),
								t.reshape(f.shape)
						},
						$scale: function() {
							var t = i.mul(s)
								, e = n.mul(t);
							return 1 === f.rank && (e = e.sum(r)),
								e.reshape(f.shape)
						},
						$offset: function() {
							var t = n;
							return 1 === f.rank && (t = t.sum(r)),
								t.reshape(f.shape)
						}
					}
				}).reshape(p.shape)
		}
	});
	function xa(t, e, n, r, o, i, a) {
		void 0 === a && (a = "channelsLast");
		var s, u = Ea(e), c = u[0], l = u[1];
		if ("channelsLast" === a)
			s = [c, l, t[3], t[3]];
		else {
			if ("channelsFirst" !== a)
				throw new Error("Unknown dataFormat " + a);
			s = [c, l, t[1], t[1]]
		}
		return wa(t, s, n, r, o, i, !1, a)
	}
	function wa(t, e, n, r, o, i, a, s) {
		void 0 === a && (a = !1),
		void 0 === s && (s = "channelsLast");
		var u = [-1, -1, -1, -1]
			, c = u[0]
			, l = u[1]
			, h = u[2]
			, p = u[3];
		if ("channelsLast" === s)
			c = t[0],
				l = t[1],
				h = t[2],
				p = t[3];
		else {
			if ("channelsFirst" !== s)
				throw new Error("Unknown dataFormat " + s);
			c = t[0],
				p = t[1],
				l = t[2],
				h = t[3]
		}
		var f, d = e[0], m = e[1], v = e[3], g = Ea(n), y = g[0], x = g[1], w = Ea(r), b = w[0], E = w[1], C = Sa(d, b), S = Sa(m, E), _ = function(t, e, n, r, o, i, a, s) {
			var u, c, l;
			if ("number" == typeof t) {
				u = {
					top: t,
					bottom: t,
					left: t,
					right: t,
					type: 0 === t ? "VALID" : "NUMBER"
				};
				var h = function(t, e, n, r, o, i) {
					null == o && (o = function(t, e, n, r) {
						void 0 === r && (r = 1);
						var o = Sa(e, r);
						return Math.floor((t[0] * (n - 1) - n + o) / 2)
					}(t, e, r));
					var a = t[0]
						, s = t[1]
						, u = _a((a - e + 2 * o) / r + 1, i);
					A(T(u), "The output # of rows (" + u + ") must be an integer. Change the stride and/or zero pad parameters");
					var c = _a((s - e + 2 * o) / r + 1, i);
					return A(T(c), "The output # of columns (" + c + ") must be an integer. Change the stride and/or zero pad parameters"),
						[u, c, n]
				}([e, n, 1], i, 1, r, t, s);
				c = h[0],
					l = h[1]
			} else if ("same" === t) {
				var p = ((c = Math.ceil(e / r)) - 1) * r + i - e
					, f = ((l = Math.ceil(n / o)) - 1) * o + a - n
					, d = Math.floor(p / 2)
					, m = p - d
					, v = Math.floor(f / 2);
				u = {
					top: d,
					bottom: m,
					left: v,
					right: f - v,
					type: "SAME"
				}
			} else {
				if ("valid" !== t)
					throw Error("Unknown padding parameter: " + t);
				u = {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					type: "VALID"
				},
					c = Math.ceil((e - i + 1) / r),
					l = Math.ceil((n - a + 1) / o)
			}
			return {
				padInfo: u,
				outHeight: c,
				outWidth: l
			}
		}(o, l, h, y, x, C, S, i), R = _.padInfo, N = _.outHeight, k = _.outWidth, D = a ? v * p : v;
		return "channelsFirst" === s ? f = [c, D, N, k] : "channelsLast" === s && (f = [c, N, k, D]),
			{
				batchSize: c,
				dataFormat: s,
				inHeight: l,
				inWidth: h,
				inChannels: p,
				outHeight: N,
				outWidth: k,
				outChannels: D,
				padInfo: R,
				strideHeight: y,
				strideWidth: x,
				filterHeight: d,
				filterWidth: m,
				effectiveFilterHeight: C,
				effectiveFilterWidth: S,
				dilationHeight: b,
				dilationWidth: E,
				inShape: t,
				outShape: f,
				filterShape: e
			}
	}
	function ba(t, e, n, r, o, i, a) {
		void 0 === i && (i = !1),
		void 0 === a && (a = "channelsLast");
		var s = [-1, -1, -1, -1, -1]
			, u = s[0]
			, c = s[1]
			, l = s[2]
			, h = s[3]
			, p = s[4];
		if ("channelsLast" === a)
			u = t[0],
				c = t[1],
				l = t[2],
				h = t[3],
				p = t[4];
		else {
			if ("channelsFirst" !== a)
				throw new Error("Unknown dataFormat " + a);
			u = t[0],
				p = t[1],
				c = t[2],
				l = t[3],
				h = t[4]
		}
		var f, d = e[0], m = e[1], v = e[2], g = e[4], y = Ca(n), x = y[0], w = y[1], b = y[2], E = Ca(r), C = E[0], S = E[1], _ = E[2], R = function(t, e, n, r, o, i, a, s, u, c) {
			var l, h, p, f;
			if ("same" === t) {
				var d = ((h = Math.ceil(e / o)) - 1) * o + s - e
					, m = ((p = Math.ceil(n / i)) - 1) * i + u - n
					, v = ((f = Math.ceil(r / a)) - 1) * a + c - r
					, g = Math.floor(d / 2)
					, y = d - g
					, x = Math.floor(m / 2)
					, w = m - x
					, b = Math.floor(v / 2);
				l = {
					top: x,
					bottom: w,
					left: b,
					right: v - b,
					front: g,
					back: y,
					type: "SAME"
				}
			} else {
				if ("valid" !== t)
					throw Error("Unknown padding parameter: " + t);
				l = {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					front: 0,
					back: 0,
					type: "VALID"
				},
					h = Math.ceil((e - s + 1) / o),
					p = Math.ceil((n - u + 1) / i),
					f = Math.ceil((r - c + 1) / a)
			}
			return {
				padInfo: l,
				outDepth: h,
				outHeight: p,
				outWidth: f
			}
		}(o, c, l, h, x, w, b, Sa(d, C), Sa(m, S), Sa(v, _)), N = R.padInfo, k = R.outDepth, D = R.outHeight, T = R.outWidth, I = i ? g * p : g;
		return "channelsFirst" === a ? f = [u, I, k, D, T] : "channelsLast" === a && (f = [u, k, D, T, I]),
			{
				batchSize: u,
				dataFormat: a,
				inDepth: c,
				inHeight: l,
				inWidth: h,
				inChannels: p,
				outDepth: k,
				outHeight: D,
				outWidth: T,
				outChannels: I,
				padInfo: N,
				strideDepth: x,
				strideHeight: w,
				strideWidth: b,
				filterDepth: d,
				filterHeight: m,
				filterWidth: v,
				dilationDepth: C,
				dilationHeight: S,
				dilationWidth: _,
				inShape: t,
				outShape: f,
				filterShape: e
			}
	}
	function Ea(t) {
		return "number" == typeof t ? [t, t] : t
	}
	function Ca(t) {
		return "number" == typeof t ? [t, t, t] : t
	}
	function Sa(t, e) {
		return e <= 1 ? t : t + (t - 1) * (e - 1)
	}
	function _a(t, e) {
		if (!e)
			return t;
		switch (e) {
			case "round":
				return Math.round(t);
			case "ceil":
				return Math.ceil(t);
			case "floor":
				return Math.floor(t);
			default:
				throw new Error("Unknown roundingMode " + e)
		}
	}
	function Ra(t) {
		var e = Ea(t)
			, n = e[0]
			, r = e[1];
		return 1 === n && 1 === r
	}
	function Na(t, e) {
		return Ra(t) || Ra(e)
	}
	var ka = ge({
		matMul_: function(t, e, n, r) {
			var o;
			void 0 === n && (n = !1),
			void 0 === r && (r = !1);
			var i = me(t, "a", "matMul")
				, a = me(e, "b", "matMul");
			i = (o = bt(i, a))[0],
				a = o[1];
			var s = n ? i.shape[i.rank - 2] : i.shape[i.rank - 1]
				, u = r ? a.shape[a.rank - 1] : a.shape[a.rank - 2]
				, c = n ? i.shape[i.rank - 1] : i.shape[i.rank - 2]
				, l = r ? a.shape[a.rank - 2] : a.shape[a.rank - 1]
				, h = i.shape.slice(0, -2)
				, p = a.shape.slice(0, -2)
				, f = L(h)
				, d = L(p);
			A(2 <= i.rank && 2 <= a.rank && i.rank === a.rank, "Error in matMul: inputs must have the same rank of at least 2, got ranks " + i.rank + " and " + a.rank + "."),
				A(y(h, p), "Error in matMul: outer dimensions (" + h + ") and (" + p + ") of Tensors with shapes " + i.shape + " and " + a.shape + " must match."),
				A(s === u, "Error in matMul: inner shapes (" + s + ") and (" + u + ") of Tensors with shapes " + i.shape + " and " + a.shape + " and transposeA=" + n + " and transposeB=" + r + " must match.");
			var m = i.shape.slice(0, -2).concat([c, l])
				, v = n ? i.as3D(f, s, c) : i.as3D(f, c, s)
				, g = r ? a.as3D(d, l, u) : a.as3D(d, u, l);
			return Ot.engine.runKernel(function(t) {
				return t.batchMatMul(v, g, n, r)
			}, {
				$a: v,
				$b: g
			}, function(t) {
				return n || r ? !n && r ? {
					$a: function() {
						return t.matMul(g, !1, !1)
					},
					$b: function() {
						return t.matMul(v, !0, !1)
					}
				} : n && !r ? {
					$a: function() {
						return g.matMul(t, !1, !0)
					},
					$b: function() {
						return v.matMul(t, !1, !1)
					}
				} : {
					$a: function() {
						return g.matMul(t, !0, !0)
					},
					$b: function() {
						return t.matMul(v, !0, !0)
					}
				} : {
					$a: function() {
						return t.matMul(g, !1, !0)
					},
					$b: function() {
						return v.matMul(t, !0, !1)
					}
				}
			}).reshape(m)
		}
	})
		, Da = ge({
		dot_: function(t, e) {
			var n = me(t, "t1", "dot")
				, r = me(e, "t2", "dot");
			A(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + ".");
			var o = 1 === n.rank ? n.size : n.shape[1]
				, i = 1 === r.rank ? r.size : r.shape[0];
			return A(o === i, "Error in dot: inner dimensions of inputs must match, but got " + o + " and " + i + "."),
				1 === n.rank && 1 === r.rank ? n.as2D(1, -1).matMul(r.as2D(-1, 1)).asScalar() : 1 === n.rank && 2 === r.rank ? n.as2D(1, -1).matMul(r.as2D(r.shape[0], r.shape[1])).as1D() : 2 === n.rank && 1 === r.rank ? n.matMul(r.as2D(-1, 1)).as1D() : n.matMul(r.as2D(r.shape[0], r.shape[1]))
		}
	})
		, Ta = ge({
		outerProduct_: function(t, e) {
			var n = me(t, "v1", "outerProduct")
				, r = me(e, "v2", "outerProduct");
			return A(1 === n.rank && 1 === r.rank, "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."),
				n.as2D(-1, 1).matMul(r.as2D(1, -1))
		}
	});
	function Ia(t, e, n, r, o, i) {
		A(t.length === e.rank, "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match");
		var a = t
			, s = e
			, u = !1;
		3 === e.rank && (u = !0,
			s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]),
			a = [1, t[0], t[1], t[2]]);
		var c = a[3]
			, l = s.shape[3];
		A(4 === a.length, "Error in conv2dDerInput: inShape must be length 4, but got length " + a.length + "."),
			A(4 === s.rank, "Error in conv2dDerInput: dy must be rank 4, but got rank " + s.rank),
			A(4 === n.rank, "Error in conv2dDerInput: filter must be rank 4, but got rank " + n.rank),
			A(c === n.shape[2], "Error in conv2dDerInput: depth of input (" + c + ") must match input depth for filter " + n.shape[2] + "."),
			A(l === n.shape[3], "Error in conv2dDerInput: depth of output (" + l + ") must match output depth for filter " + n.shape[3] + "."),
		null != i && A(T(o), "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + ".");
		var h = wa(a, n.shape, r, 1, o, i)
			, p = Ot.engine.runKernel(function(t) {
			return t.conv2dDerInput(s, n, h)
		}, {
			dy4D: s,
			filter: n
		}, function(t) {
			return {
				dy4D: function() {
					return Oa(t, n, r, o, "NHWC", 1, i)
				},
				filter: function() {
					return Ba(t, s, n.shape, r, o, i)
				}
			}
		});
		return u ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
	}
	function Aa(t, e, n, r, o, i) {
		var a = t;
		3 === t.rank && (a = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
		var s = e;
		3 === s.rank && (s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])),
			A(4 === a.rank, "Error in conv2dDerFilter: input must be rank 4, but got shape " + a.shape + "."),
			A(4 === s.rank, "Error in conv2dDerFilter: dy must be rank 4, but got shape " + s.shape + "."),
			A(4 === n.length, "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."),
			A(a.shape[3] === n[2], "Error in conv2dDerFilter: depth of input " + a.shape[3] + ") must match input depth in filter (" + n[2] + "."),
			A(s.shape[3] === n[3], "Error in conv2dDerFilter: depth of dy (" + s.shape[3] + ") must match output depth for filter (" + n[3] + ")."),
		null != i && A(T(o), "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + ".");
		var u = wa(a.shape, n, r, 1, o, i);
		return Ot.engine.runKernel(function(t) {
			return t.conv2dDerFilter(a, s, u)
		}, {
			x4D: a,
			dy4D: s
		})
	}
	function Ma(t) {
		var e, n = "number" == typeof (e = t) ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e, r = n[0], o = n[1], i = n[2];
		return 1 === r && 1 === o && 1 === i
	}
	var Fa = ge({
		conv1d_: function(t, e, n, r, o, i, a) {
			void 0 === o && (o = "NWC"),
			void 0 === i && (i = 1);
			var s = me(t, "x", "conv1d")
				, u = me(e, "filter", "conv1d")
				, c = s
				, l = !1;
			2 === s.rank && (l = !0,
				c = s.as3D(1, s.shape[0], s.shape[1])),
				A(3 === c.rank, "Error in conv1d: input must be rank 3, but got rank " + c.rank + "."),
				A(3 === u.rank, "Error in conv1d: filter must be rank 3, but got rank " + u.rank + "."),
			null != a && A(T(r), "Error in conv1d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."),
				A(c.shape[2] === u.shape[1], "Error in conv1d: depth of input (" + c.shape[2] + ") must match input depth for filter " + u.shape[1] + "."),
				A(Na(n, i), "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + i + "'"),
				A("NWC" === o, "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported.");
			var h = u.as4D(1, u.shape[0], u.shape[1], u.shape[2])
				, p = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2])
				, f = Oa(p, h, [1, n], r, "NHWC", [1, i], a);
			return l ? f.as2D(f.shape[2], f.shape[3]) : f.as3D(f.shape[0], f.shape[2], f.shape[3])
		}
	})
		, Oa = ge({
		conv2d_: function(t, e, n, r, o, i, a) {
			void 0 === o && (o = "NHWC"),
			void 0 === i && (i = [1, 1]);
			var s = me(t, "x", "conv2d")
				, u = me(e, "filter", "conv2d")
				, c = s
				, l = !1;
			3 === s.rank && (l = !0,
				c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])),
				A(4 === c.rank, "Error in conv2d: input must be rank 4, but got rank " + c.rank + "."),
				A(4 === u.rank, "Error in conv2d: filter must be rank 4, but got rank " + u.rank + "."),
			null != a && A(T(r), "Error in conv2d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."),
				A(c.shape[3] === u.shape[2], "Error in conv2d: depth of input (" + c.shape[3] + ") must match input depth for filter " + u.shape[2] + "."),
				A(Na(n, i), "Error in conv2D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"),
				A("NHWC" === o, "Error in conv2d: got dataFormat of " + o + " but only NHWC is currently supported.");
			var h, p = wa(c.shape, u.shape, n, i, r, a);
			if (1 !== p.filterHeight || 1 !== p.filterWidth || 1 !== p.dilationHeight || 1 !== p.dilationWidth || 1 !== p.strideHeight || 1 !== p.strideWidth || "SAME" !== p.padInfo.type && "VALID" !== p.padInfo.type)
				h = Ot.engine.runKernel(function(t) {
					return t.conv2d(c, u, p)
				}, {
					x: c,
					$filter: u
				}, function(t) {
					return A(Ra(i), "Error in gradient of conv2D: dilation rates greater than 1 are notyet supported in gradients. Got dilations '" + i + "'"),
						{
							x: function() {
								return Ia(c.shape, t, u, n, r)
							},
							$filter: function() {
								return Aa(c, t, u.shape, n, r)
							}
						}
				});
			else {
				var f = c.reshape([-1, p.inChannels])
					, d = u.reshape([p.inChannels, p.outChannels]);
				h = ka(f, d).reshape(p.outShape)
			}
			return l ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h
		}
	})
		, Pa = ge({
		conv3d_: function(t, e, n, r, o, i) {
			void 0 === o && (o = "NHWC"),
			void 0 === i && (i = [1, 1, 1]);
			var a, s = me(t, "x", "conv3d"), u = me(e, "filter", "conv3d"), c = s, l = !1;
			4 === s.rank && (l = !0,
				c = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])),
				A(5 === c.rank, "Error in conv3d: input must be rank 5, but got rank " + c.rank + "."),
				A(5 === u.rank, "Error in conv3d: filter must be rank 5, but got rank " + u.rank + "."),
				A(c.shape[4] === u.shape[3], "Error in conv3d: depth of input (" + c.shape[4] + ") must match input depth for filter " + u.shape[3] + "."),
				A((a = i,
				Ma(n) || Ma(a)), "Error in conv3D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"),
				A("NHWC" === o, "Error in conv3d: got dataFormat of " + o + " but only NHWC is currently supported.");
			var h = ba(c.shape, u.shape, n, i, r)
				, p = Ot.engine.runKernel(function(t) {
				return t.conv3d(c, u, h)
			}, {
				x: c,
				$filter: u
			}, function(t) {
				return A(Ma(i), "Error in gradient of conv3D: dilation rates greater than 1 are notyet supported in gradients. Got dilations '" + i + "'"),
					{
						x: function() {
							return function(t, e, n, r, o) {
								A(t.length === e.rank, "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match");
								var i = t
									, a = e
									, s = !1;
								4 === e.rank && (s = !0,
									a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]),
									i = [1, t[0], t[1], t[2], t[3]]);
								var u = i[4]
									, c = a.shape[4];
								A(5 === i.length, "Error in conv3dDerInput: inShape must be length 5, but got length " + i.length + "."),
									A(5 === a.rank, "Error in conv3dDerInput: dy must be rank 5, but got rank " + a.rank),
									A(5 === n.rank, "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank),
									A(u === n.shape[3], "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + n.shape[3] + "."),
									A(c === n.shape[4], "Error in conv3dDerInput: depth of output (" + c + ") must match output depth for filter " + n.shape[4] + ".");
								var l = ba(i, n.shape, r, 1, o)
									, h = Ot.engine.runKernel(function(t) {
									return t.conv3dDerInput(a, n, l)
								}, {
									dy5D: a
								});
								return s ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
							}(c.shape, t, u, n, r)
						},
						$filter: function() {
							return function(t, e, n, r, o) {
								var i = t;
								4 === t.rank && (i = t.as5D(1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]));
								var a = e;
								4 === a.rank && (a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3])),
									A(5 === i.rank, "Error in conv3dDerFilter: input must be rank 5, but got shape " + i.shape + "."),
									A(5 === a.rank, "Error in conv3dDerFilter: dy must be rank 5, but got shape " + a.shape + "."),
									A(5 === n.length, "Error in conv3dDerFilter: filterShape must be length 5, but got " + n + "."),
									A(i.shape[4] === n[3], "Error in conv3dDerFilter: depth of input " + i.shape[4] + ") must match input depth in filter (" + n[3] + "."),
									A(a.shape[4] === n[4], "Error in conv3dDerFilter: depth of dy (" + a.shape[4] + ") must match output depth for filter (" + n[4] + ").");
								var s = ba(i.shape, n, r, 1, o);
								return Ot.engine.runKernel(function(t) {
									return t.conv3dDerFilter(i, a, s)
								}, {
									x5D: i,
									dy5D: a
								})
							}(c, t, u.shape, n, r)
						}
					}
			});
			return l ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p
		}
	})
		, Ba = ge({
		conv2dDerFilter_: Aa
	})
		, La = ge({
		depthwiseConv2d_: function(t, e, n, r, o, i, a) {
			void 0 === o && (o = "NHWC"),
			void 0 === i && (i = [1, 1]);
			var s = me(t, "x", "depthwiseConv2d")
				, u = me(e, "filter", "depthwiseConv2d")
				, c = s
				, l = !1;
			3 === s.rank && (l = !0,
				c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])),
				A(4 === c.rank, "Error in depthwiseConv2d: input must be rank 4, but got rank " + c.rank + "."),
				A(4 === u.rank, "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + "."),
				A(c.shape[3] === u.shape[2], "Error in depthwiseConv2d: number of input channels (" + c.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + "."),
			null == i && (i = [1, 1]),
				A(Na(n, i), "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"),
			null != a && A(T(r), "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + ".");
			var h = wa(c.shape, u.shape, n, i, r, a, !0)
				, p = Ot.engine.runKernel(function(t) {
				return t.depthwiseConv2D(c, u, h)
			}, {
				x: c,
				$filter: u
			}, function(t) {
				return A(Ra(i), "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + i + "'"),
					{
						x: function() {
							return function(t, e, n, r) {
								var o = e
									, i = !1;
								3 === e.rank && (i = !0,
									o = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
								var a = Ot.engine.runKernel(function(t) {
									return t.depthwiseConv2DDerInput(o, n, r)
								}, {
									dy4D: o
								});
								return i ? a.as3D(a.shape[1], a.shape[2], a.shape[3]) : a
							}(c.shape, t, u, h)
						},
						$filter: function() {
							return function(t, e, n, r) {
								var o = t;
								3 === t.rank && (o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
								var i = e;
								return 3 === i.rank && (i = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])),
									Ot.engine.runKernel(function(t) {
										return t.depthwiseConv2DDerFilter(o, i, r)
									}, {
										x4D: o,
										dy4D: i
									})
							}(c, t, u.shape, h)
						}
					}
			});
			return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
		}
	})
		, Wa = ge({
		separableConv2d_: function(t, e, n, r, o, i, a) {
			void 0 === i && (i = [1, 1]),
			void 0 === a && (a = "NHWC");
			var s = me(t, "x", "separableConv2d")
				, u = me(e, "depthwiseFilter", "separableConv2d")
				, c = me(n, "pointwiseFilter", "separableConv2d")
				, l = s
				, h = !1;
			if (3 === s.rank && (h = !0,
				l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])),
			"NCHW" === a)
				throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
			A(4 === l.rank, "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + "."),
				A(4 === u.rank, "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + "."),
				A(4 === c.rank, "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + "."),
				A(1 === c.shape[0], "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c.shape[0] + "."),
				A(1 === c.shape[1], "Error in separableConv2d: the second dimension of pointwise filter  must be 1, but got " + c.shape[1] + ".");
			var p = u.shape[2]
				, f = u.shape[3];
			A(c.shape[2] === p * f, "Error in separableConv2d: the third dimension of pointwise filter must be " + p * f + ", but got " + c.shape[2] + ".");
			var d = La(l, u, r, o, a, i)
				, m = Oa(d, c, 1, "valid", a);
			return h ? m.as3D(m.shape[1], m.shape[2], m.shape[3]) : m
		}
	})
		, za = ge({
		conv2dTranspose_: function(t, e, n, r, o, i) {
			return Ia(n, me(t, "x", "conv2dTranspose"), me(e, "filter", "conv2dTranspose"), r, o, i)
		}
	});
	var Ua = ge({
		reverse_: function(t, e) {
			var n = me(t, "x", "reverse");
			if (0 === n.rank)
				return n.clone();
			var r = te(e, n.shape);
			return Ot.engine.runKernel(function(t) {
				return t.reverse(n, r)
			}, {
				$x: n
			}, function(t) {
				return {
					$x: function() {
						return t.reverse(r)
					}
				}
			}).reshapeAs(n)
		}
	})
		, Va = ge({
		reverse1d_: function(t) {
			var e = me(t, "x", "reverse");
			return A(1 === e.rank, "Error in reverse1D: x must be rank 1 but got\n             rank " + e.rank + "."),
				Ua(e, 0)
		}
	})
		, Ga = ge({
		reverse2d_: function(t, e) {
			var n = me(t, "x", "reverse");
			return A(2 === n.rank, "Error in reverse2D: x must be rank 2 but got\n             rank " + n.rank + "."),
				Ua(n, e)
		}
	})
		, Ha = ge({
		reverse3d_: function(t, e) {
			var n = me(t, "x", "reverse");
			return A(3 === n.rank, "Error in reverse3D: x must be rank 3 but got\n             rank " + n.rank + "."),
				Ua(n, e)
		}
	})
		, qa = ge({
		reverse4d_: function(t, e) {
			var n = me(t, "x", "reverse");
			return A(4 === n.rank, "Error in reverse4D: x must be rank 4 but got\n             rank " + n.rank + "."),
				Ua(n, e)
		}
	});
	function ja(t, r, o, i, a, e) {
		var n = me(t, "x", "maxPool")
			, s = n
			, u = !1;
		3 === n.rank && (u = !0,
			s = n.as4D(1, n.shape[0], n.shape[1], n.shape[2])),
		null == i && (i = [1, 1]),
			A(4 === s.rank, "Error in maxPool: input must be rank 4 but got rank " + s.rank + "."),
			A(Na(o, i), "Error in maxPool: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"),
		null != e && A(T(a), "Error in maxPool: pad must be an integer when using, dimRoundingMode " + e + " but got pad " + a + ".");
		var c = xa(s.shape, r, o, i, a, e)
			, l = Ot.engine.runKernel(function(t, e) {
			return e(t.maxPool(s, c))
		}, {
			x: s
		}, function(t, e) {
			var n = e[0];
			return {
				x: function() {
					return function(t, e, n, r, o, i, a, s) {
						var u = me(t, "dy", "maxPoolBackprop")
							, c = me(e, "input", "maxPoolBackprop")
							, l = me(n, "output", "maxPoolBackprop");
						A(c.rank === u.rank, "Rank of input (" + c.rank + ") does not match rank of dy (" + u.rank + ")"),
						null == i && (i = [1, 1]),
							A(Na(o, i), "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"),
							A(4 === u.rank, "Error in maxPoolBackprop: dy must be rank 4 but got rank " + u.rank + "."),
							A(4 === c.rank, "Error in maxPoolBackprop: input must be rank 4 but got rank " + c.rank + "."),
						null != s && A(T(a), "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + s + " but got pad " + a + ".");
						var h = xa(c.shape, r, o, i, a, s);
						return Ot.engine.runKernel(function(t) {
							return t.maxPoolBackprop(u, c, l, h)
						}, {
							$dy: u,
							$input: c
						})
					}(t, s, n, r, o, i, a)
				}
			}
		});
		return u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
	}
	function $a(t, e, n, r, o, i) {
		var a = me(t, "x", "avgPool", "float32");
		null == r && (r = [1, 1]),
			A(Na(n, r), "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + r + "'");
		var s = a
			, u = !1;
		3 === a.rank && (u = !0,
			s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])),
			A(4 === s.rank, "Error in avgPool: x must be rank 4 but got rank " + s.rank + "."),
		null != i && A(T(o), "Error in avgPool: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + ".");
		var c = xa(s.shape, e, n, r, o)
			, l = Ot.engine.runKernel(function(t) {
			return t.avgPool(s, c)
		}, {
			x: s
		}, function(t) {
			return {
				x: function() {
					return function(t, e, n, r, o, i) {
						var a = me(t, "dy", "avgPoolBackprop")
							, s = me(e, "input", "avgPoolBackprop");
						A(s.rank === a.rank, "Rank of input (" + s.rank + ") does not match rank of dy (" + a.rank + ")"),
						null == o && (o = [1, 1]),
							A(Na(r, o), "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + o + "'");
						var u = s
							, c = a
							, l = !1;
						3 === s.rank && (l = !0,
							u = s.as4D(1, s.shape[0], s.shape[1], s.shape[2]),
							c = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])),
							A(4 === c.rank, "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c.rank + "."),
							A(4 === u.rank, "Error in avgPoolBackprop: input must be rank 4 but got rank " + u.rank + ".");
						var h = xa(u.shape, n, r, o, i)
							, p = Ot.engine.runKernel(function(t) {
							return t.avgPoolBackprop(c, u, h)
						}, {
							dy4D: c,
							input4D: u
						});
						return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
					}(t, s, e, n, r, o)
				}
			}
		});
		return l = l.cast(a.dtype),
			u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
	}
	var Ka = ge({
		maxPool_: function(t, e, n, r, o) {
			return ja(t, e, n, 1, r, o)
		}
	})
		, Xa = ge({
		avgPool_: function(t, e, n, r, o) {
			return $a(t, e, n, 1, r, o)
		}
	})
		, Ya = ge({
		pool_: function(t, e, n, r, o, i) {
			null == o && (o = [1, 1]),
			null == i && (i = 1),
			0 === r && (r = "valid");
			var a = me(t, "x", "maxPool")
				, s = a
				, u = !1;
			3 === a.rank && (u = !0,
				s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])),
				A(Na(i, o), "Error in pool: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + o + "'");
			var c, l, h, p, f, d, m = xa(s.shape, e, i, o, r), v = [m.dilationHeight, m.dilationWidth];
			c = "same" === r ? (l = [m.filterHeight, m.filterWidth],
				h = v,
				p = l.map(function(t, e) {
					return t + (t - 1) * (h[e] - 1)
				}).map(function(t) {
					return t - 1
				}),
				f = p.map(function(t) {
					return Math.floor(t / 2)
				}),
				d = p.map(function(t, e) {
					return t - f[e]
				}),
				p.map(function(t, e) {
					return [f[e], d[e]]
				})) : [[0, 0], [0, 0]];
			var g, y, x, w, b, E, C, S, _ = 1 === v[0] && 1 === v[1], R = (g = [m.inHeight, m.inWidth],
				y = v,
				w = (x = c).map(function(t) {
					return t[0]
				}),
				b = x.map(function(t) {
					return t[1]
				}),
				E = g.concat(w, b),
				C = y.map(function(t, e) {
					return (t - E[e] % t) % t
				}),
				S = b.map(function(t, e) {
					return t + C[e]
				}),
				[y.map(function(t, e) {
					return [w[e], S[e]]
				}), y.map(function(t, e) {
					return [0, C[e]]
				})]), N = R[1], k = _ ? r : "valid", D = _ ? s : Ri(s, v, R[0]), T = ("avg" === n ? function() {
						return $a(D, e, i, 1, k)
					}
					: function() {
						return ja(D, e, i, 1, k)
					}
			)(), I = _ ? T : si(T, v, N);
			return u ? I.as3D(I.shape[1], I.shape[2], I.shape[3]) : I
		}
	});
	var Qa = ge({
		slice_: function(t, e, n) {
			var r, o, i = me(t, "x", "slice");
			if (0 === i.rank)
				throw new Error("Slicing scalar is not possible");
			r = "number" == typeof e ? [e].concat(new Array(i.rank - 1).fill(0)) : e.length < i.rank ? e.concat(new Array(i.rank - e.length).fill(0)) : e.slice(),
				o = (o = null == n ? new Array(i.rank).fill(-1) : "number" == typeof n ? [n].concat(new Array(i.rank - 1).fill(-1)) : n.length < i.rank ? n.concat(new Array(i.rank - n.length).fill(-1)) : n).map(function(t, e) {
					return 0 <= t ? t : (A(-1 === t, "Bad value in size"),
					i.shape[e] - r[e])
				}),
				function(t, e, n) {
					A(t.rank === e.length, "Error in slice" + t.rank + "D: Length of begin " + e + " must match the rank of the array (" + t.rank + ")."),
						A(t.rank === n.length, "Error in slice" + t.rank + "D: Length of size " + n + " must match the rank of the array (" + t.rank + ").");
					for (var r = 0; r < t.rank; ++r)
						A(e[r] + n[r] <= t.shape[r], "Error in slice" + t.rank + "D: begin[" + r + "] + size[" + r + "] (" + (e[r] + n[r]) + ") would overflow input.shape[" + r + "] (" + t.shape[r] + ")")
				}(i, r, o);
			var a = i.shape;
			return Ot.engine.runKernel(function(t) {
				return t.slice(i, r, o)
			}, {
				$x: i
			}, function(t) {
				for (var e = [], n = 0; n < t.rank; n++)
					e.push([r[n], a[n] - r[n] - o[n]]);
				return {
					$x: function() {
						return t.pad(e)
					}
				}
			})
		}
	})
		, Ja = ge({
		slice1d_: function(t, e, n) {
			var r = me(t, "x", "slice1d");
			return A(1 === r.rank, "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"),
				Qa(r, [e], [n])
		}
	})
		, Za = ge({
		slice2d_: function(t, e, n) {
			var r = me(t, "x", "slice2d");
			return A(2 === r.rank, "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"),
				Qa(r, e, n)
		}
	})
		, ts = ge({
		slice3d_: function(t, e, n) {
			var r = me(t, "x", "slice3d");
			return A(3 === r.rank, "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"),
				Qa(r, e, n)
		}
	})
		, es = ge({
		slice4d_: function(t, e, n) {
			var r = me(t, "x", "slice4d");
			return A(4 === r.rank, "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"),
				Qa(r, e, n)
		}
	});
	function ns(e, t, n, r, o) {
		var i = t[0];
		return i.rank < n.rank && (i = i.reshape(Zt(i.shape, r))),
		e.rank < n.rank && (e = e.reshape(Zt(e.shape, r))),
			{
				$x: function() {
					var t = e.mul(n.equal(i).cast(e.dtype));
					return null == o ? t : t.transpose(o)
				}
			}
	}
	var rs = ge({
		all_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "all", "bool")
				, o = te(e, r.shape)
				, i = o
				, a = ne(i, r.rank);
			null != a && (r = r.transpose(a),
				i = oe(i.length, r.rank));
			var s = Ot.engine.runKernel(function(t) {
				return t.all(r, i)
			}, {
				$x: r
			});
			if (n) {
				var u = Zt(s.shape, o);
				return s.reshape(u)
			}
			return s
		}
	})
		, os = ge({
		any_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "any", "bool")
				, o = te(e, r.shape)
				, i = o
				, a = ne(i, r.rank);
			null != a && (r = r.transpose(a),
				i = oe(i.length, r.rank));
			var s = Ot.engine.runKernel(function(t) {
				return t.any(r, i)
			}, {
				$x: r
			});
			if (n) {
				var u = Zt(s.shape, o);
				return s.reshape(u)
			}
			return s
		}
	})
		, is = ge({
		argMax_: function(t, e) {
			void 0 === e && (e = 0);
			var n = me(t, "x", "argMax");
			null == e && (e = 0);
			var r = te(e, n.shape)
				, o = ne(r, n.rank);
			return null != o && (n = n.transpose(o),
				r = oe(r.length, n.rank)),
				Ot.engine.runKernel(function(t) {
					return t.argMax(n, r[0])
				}, {
					$x: n
				}, function(t) {
					return {
						$x: function() {
							return Be(n)
						}
					}
				})
		}
	})
		, as = ge({
		argMin_: function(t, e) {
			void 0 === e && (e = 0);
			var n = me(t, "x", "argMin");
			null == e && (e = 0);
			var r = te(e, n.shape)
				, o = ne(r, n.rank);
			return null != o && (n = n.transpose(o),
				r = oe(r.length, n.rank)),
				Ot.engine.runKernel(function(t) {
					return t.argMin(n, r[0])
				}, {
					$x: n
				}, function(t) {
					return {
						$x: function() {
							return Be(n)
						}
					}
				})
		}
	})
		, ss = ge({
		logSumExp_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "logSumExp")
				, o = te(e, r.shape)
				, i = r.max(o, !0)
				, a = r.sub(i).exp().sum(o).log()
				, s = i.reshape(a.shape).add(a);
			if (n) {
				var u = Zt(s.shape, o);
				return s.reshape(u)
			}
			return s
		}
	})
		, us = ge({
		max_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "max")
				, o = r
				, i = te(e, r.shape)
				, a = i
				, s = ne(a, r.rank);
			null != s && (r = r.transpose(s),
				a = oe(a.length, r.rank));
			var u = Ot.engine.runKernel(function(t, e) {
				return e(t.max(r, a))
			}, {
				$x: r
			}, function(t, e) {
				return ns(t, e, o, i, s)
			});
			if (n) {
				var c = Zt(u.shape, i);
				u = u.reshape(c)
			}
			return u
		}
	})
		, cs = ge({
		mean_: function(t, e, o) {
			void 0 === e && (e = null),
			void 0 === o && (o = !1);
			var n = me(t, "x", "mean")
				, i = te(e, n.shape)
				, a = L(Jt(n.shape, i)[1]);
			return Lt(function(n) {
				var r = Se(a);
				return {
					value: (r.dtype === n.dtype ? n : n.cast(r.dtype)).div(r).sum(e, o),
					gradFunc: function(t) {
						var e = n.shape.slice();
						return i.forEach(function(t) {
							e[t] = 1
						}),
							t.reshape(e).mul(Ie(n.shape, "float32")).div(r)
					}
				}
			})(n)
		}
	})
		, ls = ge({
		min_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "min")
				, o = r
				, i = te(e, r.shape)
				, a = i
				, s = ne(a, r.rank);
			null != s && (r = r.transpose(s),
				a = oe(a.length, r.rank));
			var u = Ot.engine.runKernel(function(t, e) {
				return e(t.min(r, a))
			}, {
				$x: r
			}, function(t, e) {
				return ns(t, e, o, i, s)
			});
			if (n) {
				var c = Zt(u.shape, i);
				u = u.reshape(c)
			}
			return u
		}
	})
		, hs = ge({
		moments_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = te(e, (t = me(t, "x", "moments")).shape)
				, o = t.mean(r, n)
				, i = o.shape;
			return n || (i = Zt(o.shape, r)),
				{
					mean: o,
					variance: t.toFloat().sub(o.reshape(i)).square().mean(r, n)
				}
		}
	})
		, ps = ge({
		sum_: function(t, e, a) {
			void 0 === e && (e = null),
			void 0 === a && (a = !1);
			var n = me(t, "x", "sum");
			"bool" === n.dtype && (n = n.toInt());
			var s = te(e, n.shape);
			return Lt(function(n) {
				var t = ne(s, n.rank)
					, e = s
					, r = n;
				null != t && (r = n.transpose(t),
					e = oe(e.length, n.rank));
				var o = Ot.engine.runKernel(function(t) {
					return t.sum(r, e)
				}, {
					permutedX: r
				});
				if (a) {
					var i = Zt(o.shape, s);
					o = o.reshape(i)
				}
				return {
					value: o,
					gradFunc: function(t) {
						var e = n.shape.slice();
						return s.forEach(function(t) {
							e[t] = 1
						}),
							t.reshape(e).mul(Ie(n.shape, "float32"))
					}
				}
			})(n)
		}
	})
		, fs = ge({
		prod_: function(t, e, n) {
			void 0 === e && (e = null),
			void 0 === n && (n = !1);
			var r = me(t, "x", "prod");
			"bool" === r.dtype && (r = r.toInt());
			var o = te(e, r.shape)
				, i = ne(o, r.rank)
				, a = o
				, s = r;
			null != i && (s = r.transpose(i),
				a = oe(a.length, r.rank));
			var u = Ot.engine.runKernel(function(t) {
				return t.prod(s, a)
			}, {
				permutedX: s
			});
			if (n) {
				var c = Zt(u.shape, o);
				u = u.reshape(c)
			}
			return u
		}
	});
	var ds = ge({
		equal_: function(t, e) {
			var n, r = me(t, "a", "equal"), o = me(e, "b", "equal");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.equal(r, o)
				}, {
					$a: r,
					$b: o
				})
		}
	})
		, ms = ge({
		equalStrict_: function(t, e) {
			var n = me(t, "a", "equalStrict")
				, r = me(e, "b", "equalStrict");
			return f(n.shape, r.shape, "Error in equalStrict: "),
				n.equal(r)
		}
	})
		, vs = ge({
		greater_: function(t, e) {
			var n, r = me(t, "a", "greater"), o = me(e, "b", "greater");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.greater(r, o)
				}, {
					$a: r,
					$b: o
				})
		}
	})
		, gs = ge({
		greaterEqual_: function(t, e) {
			var n, r = me(t, "a", "greaterEqual"), o = me(e, "b", "greaterEqual");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.greaterEqual(r, o)
				}, {
					$a: r,
					$b: o
				}, function(t) {
					return {
						$a: function() {
							return Be(r)
						},
						$b: function() {
							return Be(o)
						}
					}
				})
		}
	})
		, ys = ge({
		greaterEqualStrict_: function(t, e) {
			var n = me(t, "a", "greaterEqualStrict")
				, r = me(e, "b", "greaterEqualStrict");
			return f(n.shape, r.shape, "Error in greaterEqualStrict: "),
				n.greaterEqual(r)
		}
	})
		, xs = ge({
		greaterStrict_: function(t, e) {
			var n = me(t, "a", "greaterStrict")
				, r = me(e, "b", "greaterStrict");
			return f(n.shape, r.shape, "Error in greaterStrict: "),
				n.greater(r)
		}
	})
		, ws = ge({
		less_: function(t, e) {
			var n, r = me(t, "a", "less"), o = me(e, "b", "less");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.less(r, o)
				}, {
					$a: r,
					$b: o
				})
		}
	})
		, bs = ge({
		lessEqual_: function(t, e) {
			var n, r = me(t, "a", "lessEqual"), o = me(e, "b", "lessEqual");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.lessEqual(r, o)
				}, {
					$a: r,
					$b: o
				})
		}
	})
		, Es = ge({
		lessEqualStrict_: function(t, e) {
			var n = me(t, "a", "lessEqualStrict")
				, r = me(e, "b", "lessEqualStrict");
			return f(n.shape, r.shape, "Error in lessEqualStrict: "),
				n.lessEqual(r)
		}
	})
		, Cs = ge({
		lessStrict_: function(t, e) {
			var n = me(t, "a", "lessStrict")
				, r = me(e, "b", "lessStrict");
			return f(n.shape, r.shape, "Error in lessStrict: "),
				n.less(r)
		}
	})
		, Ss = ge({
		notEqual_: function(t, e) {
			var n, r = me(t, "a", "notEqual"), o = me(e, "b", "notEqual");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.notEqual(r, o)
				}, {
					$a: r,
					$b: o
				})
		}
	})
		, _s = ge({
		notEqualStrict_: function(t, e) {
			var n = me(t, "a", "notEqualStrict")
				, r = me(e, "b", "notEqualStrict");
			return f(n.shape, r.shape, "Error in notEqualStrict: "),
				n.notEqual(r)
		}
	});
	var Rs = ge({
		add_: function(t, e) {
			var n, r = me(t, "a", "add"), o = me(e, "b", "add");
			n = bt(r, o),
				r = n[0],
				o = n[1];
			var i = Je(r.shape, o.shape);
			return Ot.engine.runKernel(function(t) {
				return t.add(r, o)
			}, {
				$a: r,
				$b: o
			}, function(n) {
				return {
					$a: function() {
						var t = n
							, e = Qe(r.shape, i);
						return 0 < e.length && (t = t.sum(e)),
							t.reshape(r.shape)
					},
					$b: function() {
						var t = n
							, e = Qe(o.shape, i);
						return 0 < e.length && (t = t.sum(e)),
							t.reshape(o.shape)
					}
				}
			})
		}
	})
		, Ns = ge({
		addN_: function(t) {
			A(Array.isArray(t), function() {
				return "The argument passed to tf.addN() must be a list of tensors"
			}),
				A(1 <= t.length, function() {
					return "Must pass at least one tensor to tf.addN(), but got " + t.length
				});
			var e = t.map(function(t, e) {
				return me(t, "tensors" + e, "addN")
			})
				, n = e[0];
			e.forEach(function(t) {
				if (t.dtype !== n.dtype)
					throw new Error("All tensors passed to tf.addN() must have the same dtype")
			}),
				e.forEach(function(t) {
					if (!y(t.shape, n.shape))
						throw new Error("All tensors passed to tf.addN() must have the same shape")
				});
			var r = e;
			return Ot.engine.runKernel(function(t) {
				return t.addN(e)
			}, r, function(n) {
				var r = {};
				return e.forEach(function(t, e) {
					r[e] = function() {
						return n.clone()
					}
				}),
					r
			})
		}
	})
		, ks = ge({
		addStrict_: function(t, e) {
			var n = me(t, "a", "addStrict")
				, r = me(e, "b", "addStrict");
			return f(n.shape, r.shape, "Error in addStrict: "),
				n.add(r)
		}
	})
		, Ds = ge({
		atan2_: function(t, e) {
			var n, o = me(t, "a", "atan2"), i = me(e, "b", "atan2");
			n = bt(o, i),
				o = n[0],
				i = n[1];
			var a = Je(o.shape, i.shape);
			return Ot.engine.runKernel(function(t) {
				return t.atan2(o, i)
			}, {
				$a: o,
				$b: i
			}, function(r) {
				return {
					$a: function() {
						var t = Rs(o.square(), i.square())
							, e = r.mul(i.div(t))
							, n = Qe(o.shape, a);
						return 0 < n.length && (e = e.sum(n)),
							e.reshape(o.shape)
					},
					$b: function() {
						var t = Rs(o.square(), i.square())
							, e = ta(r.mul(o.div(t)))
							, n = Qe(i.shape, a);
						return 0 < n.length && (e = e.sum(n)),
							e.reshape(i.shape)
					}
				}
			})
		}
	})
		, Ts = ge({
		div_: function(t, e) {
			var n, r, o = me(t, "a", "div"), i = me(e, "b", "div");
			if (n = bt(o, i),
				o = n[0],
				i = n[1],
			"int32" === o.dtype && "int32" === i.dtype)
				return As(o, i);
			r = function(t) {
				return t.realDivide(o, i)
			}
			;
			var a = Je(o.shape, i.shape);
			return Ot.engine.runKernel(r, {
				$a: o,
				$b: i
			}, function(r) {
				return {
					$a: function() {
						var t = r.div(i.toFloat())
							, e = Qe(o.shape, a);
						return 0 < e.length ? t.sum(e).reshape(o.shape) : t
					},
					$b: function() {
						var t = r.mul(o.toFloat())
							, e = Qe(i.shape, a);
						0 < e.length && (t = t.sum(e).reshape(i.shape));
						var n = i.square();
						return t.div(n.toFloat()).neg()
					}
				}
			})
		}
	})
		, Is = ge({
		divStrict_: function(t, e) {
			var n = me(t, "a", "div")
				, r = me(e, "b", "div");
			return f(n.shape, r.shape, "Error in divideStrict: "),
				n.div(r)
		}
	})
		, As = ge({
		floorDiv_: function(t, e) {
			var n, o = me(t, "a", "floorDiv"), i = me(e, "b", "floorDiv");
			n = bt(o, i),
				o = n[0],
				i = n[1];
			var a = Je(o.shape, i.shape);
			return Ot.engine.runKernel(function(t) {
				return t.floorDiv(o, i)
			}, {
				$a: o,
				$b: i
			}, function(r) {
				return {
					$a: function() {
						var t = r.div(i.toFloat())
							, e = Qe(o.shape, a);
						return 0 < e.length ? t.sum(e).reshape(o.shape) : t
					},
					$b: function() {
						var t = r.mul(o.toFloat())
							, e = Qe(i.shape, a);
						0 < e.length && (t = t.sum(e).reshape(i.shape));
						var n = i.square();
						return t.div(n.toFloat()).neg()
					}
				}
			})
		}
	})
		, Ms = ge({
		maximum_: function(t, e) {
			var n, r = me(t, "a", "maximum"), o = me(e, "b", "maximum");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
			"bool" === r.dtype && (r = r.toInt(),
				o = o.toInt()),
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.maximum(r, o)
				}, {
					$a: r,
					$b: o
				}, function(t) {
					return {
						$a: function() {
							return t.mul(r.greaterEqual(o).toFloat())
						},
						$b: function() {
							return t.mul(r.less(o).toFloat())
						}
					}
				})
		}
	})
		, Fs = ge({
		maximumStrict_: function(t, e) {
			var n = me(t, "a", "maximumStrict")
				, r = me(e, "b", "maximumStrict");
			return f(n.shape, r.shape, "Error in maximumStrict: "),
				n.maximum(r)
		}
	})
		, Os = ge({
		minimum_: function(t, e) {
			var n, r = me(t, "a", "minimum"), o = me(e, "b", "minimum");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
			"bool" === r.dtype && (r = r.toInt(),
				o = o.toInt()),
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.minimum(r, o)
				}, {
					$a: r,
					$b: o
				}, function(t) {
					return {
						$a: function() {
							return t.mul(r.lessEqual(o).toFloat())
						},
						$b: function() {
							return t.mul(r.greater(o).toFloat())
						}
					}
				})
		}
	})
		, Ps = ge({
		minimumStrict_: function(t, e) {
			var n = me(t, "a", "minimumStrict")
				, r = me(e, "b", "minimumStrict");
			return f(n.shape, r.shape, "Error in minimumStrict: "),
				n.minimum(r)
		}
	})
		, Bs = ge({
		mod_: function(t, e) {
			var n, r = me(t, "a", "mod"), o = me(e, "b", "mod");
			n = bt(r, o),
				r = n[0],
				o = n[1];
			var i = Je(r.shape, o.shape);
			return Ot.engine.runKernel(function(t) {
				return t.mod(r, o)
			}, {
				$a: r,
				$b: o
			}, function(n) {
				return {
					$a: function() {
						var t = Qe(r.shape, i);
						return 0 < t.length ? n.sum(t).reshape(r.shape) : n
					},
					$b: function() {
						var t = n.mul(r.div(o).floor().neg())
							, e = Qe(o.shape, i);
						return 0 < e.length ? t.sum(e).reshape(o.shape) : t
					}
				}
			})
		}
	})
		, Ls = ge({
		modStrict_: function(t, e) {
			var n = me(t, "a", "modStrict")
				, r = me(e, "b", "modStrict");
			return f(n.shape, r.shape, "Error in modStrict: "),
				n.mod(r)
		}
	})
		, Ws = ge({
		mul_: function(t, e) {
			var n, r = me(t, "a", "mul"), o = me(e, "b", "mul");
			n = bt(r, o),
				r = n[0],
				o = n[1];
			var i = Je(r.shape, o.shape);
			return Ot.engine.runKernel(function(t) {
				return t.multiply(r, o)
			}, {
				$a: r,
				$b: o
			}, function(n) {
				return {
					$a: function() {
						var t = n.mul(o.toFloat())
							, e = Qe(r.shape, i);
						return 0 < e.length ? t.sum(e).reshape(r.shape) : t
					},
					$b: function() {
						var t = n.mul(r.toFloat())
							, e = Qe(o.shape, i);
						return 0 < e.length ? t.sum(e).reshape(o.shape) : t
					}
				}
			})
		}
	})
		, zs = ge({
		mulStrict_: function(t, e) {
			var n = me(t, "a", "mul")
				, r = me(e, "b", "mul");
			return f(n.shape, r.shape, "Error in multiplyStrict: "),
				n.mul(r)
		}
	})
		, Us = ge({
		pow_: function(t, e) {
			var o = me(t, "base", "pow")
				, i = me(e, "exp", "pow")
				, a = Je(o.shape, i.shape);
			return t = o.cast(xt(o.dtype, i.dtype)),
				e = i.cast(xt(o.dtype, i.dtype)),
				Ot.engine.runKernel(function(t, e) {
					return e(t.pow(o, i))
				}, {
					$base: o,
					$exp: i
				}, function(r, t) {
					var n = t[0];
					return {
						$base: function() {
							var t = i.toFloat()
								, e = r.mul(t.mul(o.pow(t.sub(Se(1)))))
								, n = Qe(o.shape, a);
							return 0 < n.length && (e = e.sum(n)),
								e.reshape(o.shape)
						},
						$exp: function() {
							var t = r.mul(n.mul(o.log()).toFloat())
								, e = Qe(i.shape, a);
							return 0 < e.length && (t = t.sum(e)),
								t.reshape(i.shape)
						}
					}
				})
		}
	})
		, Vs = ge({
		powStrict_: function(t, e) {
			return f(t.shape, e.shape, "Error in powStrict: "),
				t.pow(e)
		}
	})
		, Gs = ge({
		squaredDifference_: function(t, e) {
			var n, r = me(t, "a", "squaredDifference"), o = me(e, "b", "squaredDifference");
			return n = bt(r, o),
				r = n[0],
				o = n[1],
				Je(r.shape, o.shape),
				Ot.engine.runKernel(function(t) {
					return t.squaredDifference(r, o)
				}, {
					$a: r,
					$b: o
				}, function(t) {
					var e = Se(2);
					return {
						$a: function() {
							return t.mul(r.sub(o).mul(e))
						},
						$b: function() {
							return t.mul(o.sub(r).mul(e))
						}
					}
				})
		}
	})
		, Hs = ge({
		squaredDifferenceStrict_: function(t, e) {
			var n = me(t, "a", "squaredDifferenceStrict")
				, r = me(e, "b", "squaredDifferenceStrict");
			return f(n.shape, r.shape, "Error in squaredDifferenceStrict: "),
				n.squaredDifference(r)
		}
	})
		, qs = ge({
		sub_: function(t, e) {
			var n, r = me(t, "a", "sub"), o = me(e, "b", "sub");
			n = bt(r, o),
				r = n[0],
				o = n[1];
			var i = Je(r.shape, o.shape);
			return Ot.engine.runKernel(function(t) {
				return t.subtract(r, o)
			}, {
				$a: r,
				$b: o
			}, function(n) {
				return {
					$a: function() {
						var t = n
							, e = Qe(r.shape, i);
						return 0 < e.length && (t = t.sum(e)),
							t.reshape(r.shape)
					},
					$b: function() {
						var t = n
							, e = Qe(o.shape, i);
						return 0 < e.length && (t = t.sum(e)),
							t.neg().reshape(o.shape)
					}
				}
			})
		}
	})
		, js = ge({
		subStrict_: function(t, e) {
			var n = me(t, "a", "subStrict")
				, r = me(e, "b", "subStrict");
			return f(n.shape, r.shape, "Error in subStrict: "),
				n.sub(r)
		}
	});
	var $s = ge({
		logicalAnd_: function(t, e) {
			var n = me(t, "a", "logicalAnd", "bool")
				, r = me(e, "b", "logicalAnd", "bool");
			return Je(n.shape, r.shape),
				Ot.engine.runKernel(function(t) {
					return t.logicalAnd(n, r)
				}, {
					$a: n,
					$b: r
				})
		}
	})
		, Ks = ge({
		logicalNot_: function(t) {
			var e = me(t, "x", "logicalNot", "bool");
			return Ot.engine.runKernel(function(t) {
				return t.logicalNot(e)
			}, {
				$x: e
			})
		}
	})
		, Xs = ge({
		logicalOr_: function(t, e) {
			var n = me(t, "a", "logicalOr", "bool")
				, r = me(e, "b", "logicalOr", "bool");
			return Je(n.shape, r.shape),
				Ot.engine.runKernel(function(t) {
					return t.logicalOr(n, r)
				}, {
					$a: n,
					$b: r
				})
		}
	})
		, Ys = ge({
		logicalXor_: function(t, e) {
			var n = me(t, "a", "logicalXor", "bool")
				, r = me(e, "b", "logicalXor", "bool");
			return Je(n.shape, r.shape),
				Xs(t, e).logicalAnd($s(t, e).logicalNot())
		}
	})
		, Qs = ge({
		where_: function(t, e, n) {
			var r = me(e, "a", "where")
				, o = me(n, "b", "where")
				, i = me(t, "condition", "where", "bool");
			return f(r.shape, o.shape, "Error in where: "),
				1 === i.rank ? A(i.shape[0] === r.shape[0], "The first dimension of `a` must match the size of `condition`.") : f(i.shape, o.shape, "Error in where: "),
				Ot.engine.runKernel(function(t) {
					return t.select(i, r, o)
				}, {
					$condition: i,
					$a: r,
					$b: o
				}, function(t) {
					return {
						$condition: function() {
							return Be(i).toFloat()
						},
						$a: function() {
							return t.mul(i.cast(t.dtype))
						},
						$b: function() {
							return t.mul(i.logicalNot().cast(t.dtype))
						}
					}
				})
		}
	})
		, Js = function(o) {
		return m(this, void 0, void 0, function() {
			var e, n, r;
			return C(this, function(t) {
				switch (t.label) {
					case 0:
						return [4, (e = me(o, "condition", "whereAsync", "bool")).data()];
					case 1:
						return n = t.sent(),
							r = Mi(e.shape, n),
						o !== e && e.dispose(),
							[2, r]
				}
			})
		})
	};
	var Zs = ge({
		elu_: function(t) {
			var n = me(t, "x", "elu");
			return Ot.engine.runKernel(function(t, e) {
				return e(t.elu(n))
			}, {
				$x: n
			}, function(e, t) {
				var n = t[0];
				return {
					$x: function() {
						return Ot.engine.runKernel(function(t) {
							return t.eluDer(e, n)
						}, {
							dy: e,
							y: n
						})
					}
				}
			})
		}
	})
		, tu = ge({
		leakyRelu_: function(t, e) {
			void 0 === e && (e = .2);
			var n = me(t, "x", "leakyRelu");
			return Ms(Se(e).mul(n), n)
		}
	})
		, eu = ge({
		prelu_: function(t, e) {
			var n = me(t, "x", "prelu")
				, r = me(e, "alpha", "prelu")
				, o = Se(0);
			return Ms(o, n).add(r.mul(Os(o, n)))
		}
	})
		, nu = ge({
		relu_: function(t) {
			var n = me(t, "x", "relu");
			return "bool" === n.dtype ? n.toInt() : Ot.engine.runKernel(function(t) {
				return t.relu(n)
			}, {
				$x: n
			}, function(t) {
				var e = n.step();
				return {
					$x: function() {
						return t.mulStrict(e.toFloat())
					}
				}
			})
		}
	})
		, ru = ge({
		selu_: function(t) {
			var a = me(t, "x", "selu");
			return Ot.engine.runKernel(function(t) {
				return t.selu(a)
			}, {
				$x: a
			}, function(i) {
				return {
					$x: function() {
						var t = a.greater(Se(0))
							, e = Se(Bo)
							, n = Se(Lo)
							, r = i.mul(n)
							, o = i.mul(e).mul(a.toFloat().exp());
						return Qs(t, r, o)
					}
				}
			})
		}
	});
	var ou = ge({
		transpose_: function(t, n) {
			var e = me(t, "x", "transpose");
			return null == n && (n = e.shape.map(function(t, e) {
				return e
			}).reverse()),
				A(e.rank === n.length, "Error in transpose: rank of input " + e.rank + " must match length of perm " + n + "."),
				n.forEach(function(t) {
					A(0 <= t && t < e.rank, "All entries in 'perm' must be between 0 and " + (e.rank - 1) + " but got " + n)
				}),
				e.rank <= 1 ? e.clone() : Ot.engine.runKernel(function(t) {
					return t.transpose(e, n)
				}, {
					$x: e
				}, function(t) {
					var e = re(n);
					return {
						$x: function() {
							return t.transpose(e)
						}
					}
				})
		}
	});
	var iu = ge({
		localResponseNormalization_: function(t, r, o, i, a) {
			void 0 === r && (r = 5),
			void 0 === o && (o = 1),
			void 0 === i && (i = 1),
			void 0 === a && (a = .5);
			var e = me(t, "x", "localResponseNormalization");
			A(4 === e.rank || 3 === e.rank, "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + e.rank + "."),
				A(T(r), "Error in localResponseNormalization: depthRadius must be an integer\n                     but got depthRadius " + r + ".");
			var s = e
				, n = !1;
			3 === e.rank && (n = !0,
				s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
			var u = Ot.engine.runKernel(function(t, e) {
				return e(t.localResponseNormalization4D(s, r, o, i, a))
			}, {
				x4D: s
			}, function(e, t) {
				var n = t[0];
				return {
					x4D: function() {
						return Ot.engine.runKernel(function(t) {
							return t.LRNGrad(e, s, n, r, o, i, a)
						}, {})
					}
				}
			});
			return n ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
		}
	});
	var au = ge({
		norm_: function(t, e, n, r) {
			void 0 === e && (e = "euclidean"),
			void 0 === n && (n = null),
			void 0 === r && (r = !1);
			var o = function t(e, n, r) {
				if (void 0 === r && (r = null),
				0 === e.rank)
					return e.abs();
				if (1 !== e.rank && null === r)
					return t(e.reshape([-1]), n, r);
				if (1 === e.rank || "number" == typeof r || r instanceof Array && 1 === r.length) {
					if (1 === n)
						return e.abs().sum(r);
					if (n === 1 / 0)
						return e.abs().max(r);
					if (n === -1 / 0)
						return e.abs().min(r);
					if ("euclidean" === n || 2 === n)
						return e.abs().pow(Se(2, "int32")).sum(r).sqrt();
					throw new Error("Error in norm: invalid ord value: " + n)
				}
				if (r instanceof Array && 2 === r.length) {
					if (1 === n)
						return e.abs().sum(r[0]).max(r[1] - 1);
					if (n === 1 / 0)
						return e.abs().sum(r[1]).max(r[0]);
					if (n === -1 / 0)
						return e.abs().sum(r[1]).min(r[0]);
					if ("fro" === n || "euclidean" === n)
						return e.square().sum(r).sqrt();
					throw new Error("Error in norm: invalid ord value: " + n)
				}
				throw new Error("Error in norm: invalid axis: " + r)
			}(t = me(t, "x", "norm"), e, n)
				, i = o.shape;
			if (r) {
				var a = te(n, t.shape);
				i = Zt(o.shape, a)
			}
			return o.reshape(i)
		}
	});
	function su(t, e) {
		for (var n = [], r = t; r < e; ++r)
			n.push(r);
		return n
	}
	function uu(t) {
		for (var e = [], n = 0; n < t.length; ++n)
			for (var r = 0; r < t[n].length; ++r)
				e.push(t[n][r]);
		return e
	}
	var cu = ge({
		gather_: function(t, e, v) {
			void 0 === v && (v = 0);
			var g = me(t, "x", "gather")
				, y = me(e, "indices", "gather", "int32");
			return v = te(v, g.shape)[0],
				Ot.engine.runKernel(function(t) {
					return t.gather(g, y, v)
				}, {
					$x: g
				}, function(m) {
					return {
						$x: function() {
							if (0 === v)
								return lu(m, y, g.shape[v]);
							var t = g.shape
								, e = y.size
								, n = t.slice(0, v)
								, r = n.length
								, o = t.slice(v, t.length).slice(1)
								, i = o.length
								, a = su(0, r)
								, s = su(r + 1, r + 1 + i)
								, u = uu([n, [e], o])
								, c = m.reshape(u)
								, l = y.reshape([e])
								, h = uu([[r], a, s])
								, p = c.transpose(h)
								, f = lu(p, l, g.shape[v])
								, d = re(h);
							return f.transpose(d)
						}
					}
				})
		}
	})
		, lu = ge({
		unsortedSegmentSum_: function(t, e, n) {
			var r = me(t, "x", "unsortedSegmentSum")
				, o = me(e, "segmentIds", "unsortedSegmentSum", "int32");
			return A(T(n), "numSegments must be of dtype int"),
				Ot.engine.runKernel(function(t) {
					return t.unsortedSegmentSum(r, o, n)
				}, {
					$x: r
				}, function(t) {
					return {
						$x: function() {
							return function(t, e) {
								for (var n = Ms(e, Be(e)), r = cu(t, n), o = gs(e, Se(0, "int32")), i = r.rank - o.rank, a = 0; a < i; ++a)
									o = pi(o, a + 1);
								o = $s(o, Ie(r.shape, "bool"));
								var s = Be(r);
								return Qs(o, r, s)
							}(t, o)
						}
					}
				})
		}
	});
	var hu = ge({
		basicLSTMCell_: function(t, e, n, r, o, i) {
			var a = me(t, "forgetBias", "basicLSTMCell")
				, s = me(e, "lstmKernel", "basicLSTMCell")
				, u = me(n, "lstmBias", "basicLSTMCell")
				, c = me(r, "data", "basicLSTMCell")
				, l = me(o, "c", "basicLSTMCell")
				, h = me(i, "h", "basicLSTMCell")
				, p = c.concat(h, 1).matMul(s).add(u)
				, f = p.shape[0]
				, d = p.shape[1] / 4
				, m = [f, d]
				, v = p.slice([0, 0], m)
				, g = p.slice([0, d], m)
				, y = p.slice([0, 2 * d], m)
				, x = p.slice([0, 3 * d], m)
				, w = v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid()));
			return [w, w.tanh().mulStrict(x.sigmoid())]
		}
	})
		, pu = ge({
		multiRNNCell_: function(t, e, n, r) {
			for (var o = me(e, "data", "multiRNNCell"), i = ve(n, "c", "multiRNNCell"), a = ve(r, "h", "multiRNNCell"), s = o, u = [], c = 0; c < t.length; c++) {
				var l = t[c](s, i[c], a[c]);
				u.push(l[0]),
					u.push(l[1]),
					s = l[1]
			}
			var h = []
				, p = [];
			for (c = 0; c < u.length; c += 2)
				h.push(u[c]),
					p.push(u[c + 1]);
			return [h, p]
		}
	});
	var fu = ge({
		movingAverage_: function(t, e, n, r, o) {
			void 0 === o && (o = !0);
			var i, a, s = me(t, "v", "movingAverage"), u = me(e, "x", "movingAverage"), c = me(n, "decay", "movingAverage");
			a = u,
				A((i = s).dtype === a.dtype, "The dtypes of the first(" + i.dtype + ") and second(" + a.dtype + ") input must match"),
				A(y(s.shape, u.shape), "Shape mismatch in v and x");
			var l = Se(1)
				, h = l.sub(c)
				, p = u.sub(s).mul(h);
			if (o) {
				A(null != r, "When using zeroDebias: true, step is required.");
				var f = me(r, "step", "movingAverage");
				p = p.div(l.sub(Us(c, f)))
			}
			return s.add(p)
		}
	});
	var du = ge({
		stridedSlice_: function(t, e, n, r, o, i, a, s, u) {
			if (void 0 === o && (o = 0),
			void 0 === i && (i = 0),
			void 0 === a && (a = 0),
			void 0 === s && (s = 0),
			void 0 === u && (u = 0),
			0 !== a)
				throw new Error("ellipsis mask is not yet supported");
			if (0 !== s)
				throw new Error("new axis mask is not yet supported");
			var c = me(t, "x", "stridedSlice");
			return Ot.engine.runKernel(function(t) {
				return t.stridedSlice(c, e, n, r, o, i, a, s, u)
			}, {
				$x: c
			})
		}
	});
	var mu = ge({
		topk_: function(t, e, n) {
			void 0 === e && (e = 1),
			void 0 === n && (n = !0);
			var r = me(t, "x", "topk");
			if (0 === r.rank)
				throw new Error("topk() expects the input to be of rank 1 or higher");
			var o = r.shape[r.shape.length - 1];
			if (o < e)
				throw new Error("'k' passed to topk() must be <= the last dimension (" + o + ") but got " + e);
			var i = Ot.engine.runKernel(function(t) {
				return t.topk(r, e, n)
			}, {
				$x: r
			});
			return {
				values: i[0],
				indices: i[1]
			}
		}
	});
	var vu = ge({
		scatterND_: function(t, e, n) {
			var r = me(t, "indices", "scatterND", "int32")
				, o = me(e, "updates", "scatterND");
			return ue(o, r, n),
				Ot.engine.runKernel(function(t) {
					return t.scatterND(r, o, n)
				}, {
					$indices: r,
					$updates: o
				})
		}
	});
	var gu = ge({
		fft_: function(t) {
			A("complex64" === t.dtype, "The dtype for tf.spectral.fft() must be complex64 but got " + t.dtype + ".");
			var e = t.shape[t.shape.length - 1]
				, n = t.size / e
				, r = t.as2D(n, e);
			return Ot.engine.runKernel(function(t) {
				return t.fft(r)
			}, {
				input: t
			}).reshape(t.shape)
		}
	})
		, yu = ge({
		ifft_: function(t) {
			A("complex64" === t.dtype, "The dtype for tf.spectral.ifft() must be complex64 but got " + t.dtype + ".");
			var e = t.shape[t.shape.length - 1]
				, n = t.size / e
				, r = t.as2D(n, e);
			return Ot.engine.runKernel(function(t) {
				return t.ifft(r)
			}, {
				input: t
			}).reshape(t.shape)
		}
	})
		, xu = ge({
		rfft_: function(t) {
			A("float32" === t.dtype, "The dtype for rfft() must be real value but\n    got " + t.dtype);
			var e = t.shape[t.shape.length - 1]
				, n = t.size / e
				, r = t.zerosLike()
				, o = we(t, r).as2D(n, e)
				, i = gu(o)
				, a = Math.floor(e / 2) + 1
				, s = be(i)
				, u = Ee(i)
				, c = s.split([a, e - a], s.shape.length - 1)
				, l = u.split([a, e - a], u.shape.length - 1)
				, h = t.shape.slice();
			return h[t.shape.length - 1] = a,
				we(c[0], l[0]).reshape(h)
		}
	})
		, wu = ge({
		irfft_: function(t) {
			var e = t.shape[t.shape.length - 1]
				, n = t.size / e;
			if (e <= 2) {
				var r = t.as2D(n, e)
					, o = yu(r);
				return be(o)
			}
			var i = [n, 2 * (e - 1)]
				, a = be(t).as2D(n, e)
				, s = Ee(t).as2D(n, e)
				, u = a.slice([0, 1], [n, e - 2]).reverse(1)
				, c = s.slice([0, 1], [n, e - 2]).reverse(1).mul(Se(-1))
				, l = a.concat(u, 1)
				, h = s.concat(c, 1);
			return r = we(l, h).as2D(i[0], i[1]),
				o = yu(r),
				be(o)
		}
	})
		, bu = Object.freeze({
		fft: gu,
		ifft: yu,
		rfft: xu,
		irfft: wu
	});
	var Eu = ge({
		sparseToDense_: function(t, e, n, r) {
			var o = me(t, "sparseIndices", "sparseToDense", "int32")
				, i = me(e, "sparseValues", "sparseToDense")
				, a = me(r, "defaultValue", "sparseToDense", i.dtype);
			return function(t, e, n, r) {
				if ("int32" !== t.dtype)
					throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
				if (2 < t.rank)
					throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t.shape + ".");
				var o = 0 < t.rank ? t.shape[0] : 1
					, i = 1 < t.rank ? t.shape[1] : 1;
				if (n.length !== i)
					throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + i + ".");
				var a = e.size;
				if (0 !== e.rank && (1 !== e.rank || a !== o))
					throw new Error("sparseValues has incorrect shape " + e.shape + ", should be [] or [" + o + "]");
				if (e.dtype !== r.dtype)
					throw new Error("sparseValues.dtype must match defaultValues.dtype")
			}(o, i, n, a),
				Ot.engine.runKernel(function(t) {
					return t.sparseToDense(o, i, n, a)
				}, {
					$sparseIndices: o,
					$sparseValues: i,
					$defaultValue: a
				})
		}
	});
	var Cu, Su, _u = ge({
		gatherND_: function(t, e) {
			var n = me(e, "indices", "gatherND", "int32")
				, r = me(t, "x", "gatherND");
			return Ot.engine.runKernel(function(t) {
				return t.gatherND(r, n)
			}, {
				$x: r,
				$indices: n
			})
		}
	});
	(Su = Cu || (Cu = {}))[Su.NONE = 0] = "NONE",
		Su[Su.MEAN = 1] = "MEAN",
		Su[Su.SUM = 2] = "SUM",
		Su[Su.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
	var Ru = ge({
		absoluteDifference_: function(t, e, n, r) {
			void 0 === r && (r = Cu.SUM_BY_NONZERO_WEIGHTS);
			var o = me(t, "labels", "absoluteDifference")
				, i = me(e, "predictions", "absoluteDifference")
				, a = null;
			null != n && (a = me(n, "weights", "absoluteDifference")),
				f(o.shape, i.shape, "Error in absoluteDifference: ");
			var s = o.sub(i).abs();
			return Nu(s, a, r)
		}
	})
		, Nu = ge({
		computeWeightedLoss_: function(t, e, n) {
			void 0 === n && (n = Cu.SUM_BY_NONZERO_WEIGHTS);
			var r = me(t, "losses", "computeWeightedLoss")
				, o = null;
			null != e && (o = me(e, "weights", "computeWeightedLoss"));
			var i = null == o ? r : r.mul(o);
			if (n === Cu.NONE)
				return i;
			if (n === Cu.SUM)
				return i.sum();
			if (n === Cu.MEAN) {
				if (null == o)
					return i.mean();
				var a = L(r.shape) / L(o.shape)
					, s = i.sum().div(o.sum());
				return 1 < a ? s.div(Se(a)) : s
			}
			if (n !== Cu.SUM_BY_NONZERO_WEIGHTS)
				throw Error("Unknown reduction: " + n);
			if (null == o)
				return i.sum().div(Se(r.size));
			var u = o.mul(Ie(r.shape)).notEqual(Se(0)).sum().toFloat();
			return i.sum().div(u)
		}
	})
		, ku = ge({
		cosineDistance_: function(t, e, n, r, o) {
			void 0 === o && (o = Cu.SUM_BY_NONZERO_WEIGHTS);
			var i = me(t, "labels", "cosineDistance")
				, a = me(e, "predictions", "cosineDistance")
				, s = null;
			null != r && (s = me(r, "weights", "cosineDistance")),
				f(i.shape, a.shape, "Error in cosineDistance: ");
			var u = Se(1).sub(i.mul(a).sum(n, !0));
			return Nu(u, s, o)
		}
	})
		, Du = ge({
		hingeLoss_: function(t, e, n, r) {
			void 0 === r && (r = Cu.SUM_BY_NONZERO_WEIGHTS);
			var o = me(t, "labels", "hingeLoss")
				, i = me(e, "predictions", "hingeLoss")
				, a = null;
			null != n && (a = me(n, "weights", "hingeLoss")),
				f(o.shape, i.shape, "Error in hingeLoss: ");
			var s = Se(1);
			o = Se(2).mul(o).sub(s);
			var u = s.sub(o.mul(i)).relu();
			return Nu(u, a, r)
		}
	})
		, Tu = ge({
		huberLoss_: function(t, e, n, r, o) {
			void 0 === r && (r = 1),
			void 0 === o && (o = Cu.SUM_BY_NONZERO_WEIGHTS);
			var i = me(t, "labels", "huberLoss")
				, a = me(e, "predictions", "huberLoss")
				, s = null;
			null != n && (s = me(n, "weights", "huberLoss")),
				f(i.shape, a.shape, "Error in huberLoss: ");
			var u = Se(r)
				, c = a.sub(i).abs()
				, l = Os(c, u)
				, h = c.sub(l)
				, p = Se(.5).mul(l.square()).add(u.mul(h));
			return Nu(p, s, o)
		}
	})
		, Iu = ge({
		logLoss_: function(t, e, n, r, o) {
			void 0 === r && (r = 1e-7),
			void 0 === o && (o = Cu.SUM_BY_NONZERO_WEIGHTS);
			var i = me(t, "labels", "logLoss")
				, a = me(e, "predictions", "logLoss")
				, s = null;
			null != n && (s = me(n, "weights", "logLoss")),
				f(i.shape, a.shape, "Error in logLoss: ");
			var u = Se(1)
				, c = Se(r)
				, l = i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));
			return Nu(l, s, o)
		}
	})
		, Au = ge({
		meanSquaredError_: function(t, e, n, r) {
			void 0 === r && (r = Cu.SUM_BY_NONZERO_WEIGHTS);
			var o = me(t, "labels", "meanSquaredError")
				, i = me(e, "predictions", "meanSquaredError")
				, a = null;
			null != n && (a = me(n, "weights", "meanSquaredError")),
				f(o.shape, i.shape, "Error in meanSquaredError: ");
			var s = o.squaredDifference(i);
			return Nu(s, a, r)
		}
	})
		, Mu = ge({
		sigmoidCrossEntropy_: function(t, e, n, r, o) {
			void 0 === r && (r = 0),
			void 0 === o && (o = Cu.SUM_BY_NONZERO_WEIGHTS);
			var i = me(t, "multiClassLabels", "sigmoidCrossEntropy")
				, a = me(e, "logits", "sigmoidCrossEntropy")
				, s = null;
			if (null != n && (s = me(n, "weights", "sigmoidCrossEntropy")),
				f(i.shape, a.shape, "Error in sigmoidCrossEntropy: "),
			0 < r) {
				var u = Se(r)
					, c = Se(1)
					, l = Se(.5);
				i = i.mul(c.sub(u)).add(l.mul(u))
			}
			var h = function(t, e) {
				var n = me(t, "labels", "sigmoidCrossEntropyWithLogits")
					, r = me(e, "logits", "sigmoidCrossEntropyWithLogits");
				f(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
				var o = r.relu()
					, i = r.mul(n)
					, a = r.abs().neg().exp().log1p();
				return o.sub(i).add(a)
			}(i, a);
			return Nu(h, s, o)
		}
	})
		, Fu = ge({
		softmaxCrossEntropy_: function(t, e, n, r, o) {
			void 0 === r && (r = 0),
			void 0 === o && (o = Cu.SUM_BY_NONZERO_WEIGHTS);
			var i = me(t, "onehotLabels", "softmaxCrossEntropy")
				, a = me(e, "logits", "softmaxCrossEntropy")
				, s = null;
			if (null != n && (s = me(n, "weights", "softmaxCrossEntropy")),
				f(i.shape, a.shape, "Error in softmaxCrossEntropy: "),
			0 < r) {
				var u = Se(r)
					, c = Se(1)
					, l = Se(i.shape[1]);
				i = i.mul(c.sub(u)).add(u.div(l))
			}
			var h = function(t, e, o) {
				if (void 0 === o && (o = -1),
				-1 === o && (o = e.rank - 1),
				o !== e.rank - 1)
					throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e.rank + " and dim was " + o);
				return Lt(function(n, t) {
					var e = t.logSumExp([o], !0)
						, r = t.toFloat().sub(e);
					return {
						value: r.mul(n).neg().sum([o]),
						gradFunc: function(t) {
							var e = Zt(t.shape, [o]);
							return [t.reshape(e).mul(n.toFloat().sub(r.exp())), t.reshape(e).mul(r.exp().sub(n.toFloat()))]
						}
					}
				})(t, e)
			}(i, a);
			return Nu(h, s, o)
		}
	})
		, Ou = Object.freeze({
		get Reduction() {
			return Cu
		},
		absoluteDifference: Ru,
		computeWeightedLoss: Nu,
		cosineDistance: ku,
		hingeLoss: Du,
		huberLoss: Tu,
		logLoss: Iu,
		meanSquaredError: Au,
		sigmoidCrossEntropy: Mu,
		softmaxCrossEntropy: Fu
	});
	function Pu(r, o) {
		return void 0 === o && (o = !1),
			Ot.engine.tidy(function() {
				if (2 !== r.shape.length)
					throw new Error("qr2d() requires a 2D Tensor, but got a " + r.shape.length + "D Tensor.");
				for (var h = r.shape[0], p = r.shape[1], f = fi(h), d = r.clone(), m = Re([[1]], [1, 1]), v = m.clone(), t = p <= h ? p : h, e = function(l) {
					var t, e = d, n = v, r = f;
					v = (t = Ot.engine.tidy(function() {
						var t = d.slice([l, l], [h - l, 1])
							, e = t.norm()
							, n = d.slice([l, l], [1, 1])
							, r = n.sign().neg()
							, o = n.sub(r.mul(e))
							, i = t.div(o);
						v = 1 === i.shape[0] ? m.clone() : m.concat(i.slice([1, 0], [i.shape[0] - 1, i.shape[1]]), 0);
						var a = r.matMul(o).div(e).neg()
							, s = d.slice([l, 0], [h - l, p])
							, u = a.mul(v);
						d = 0 === l ? s.sub(u.matMul(v.transpose().matMul(s))) : d.slice([0, 0], [l, p]).concat(s.sub(u.matMul(v.transpose().matMul(s))), 0);
						var c = f.slice([0, l], [h, f.shape[1] - l]);
						return f = 0 === l ? c.sub(c.matMul(v).matMul(u.transpose())) : f.slice([0, 0], [h, l]).concat(c.sub(c.matMul(v).matMul(u.transpose())), 1),
							[v, d, f]
					}))[0],
						d = t[1],
						f = t[2],
						Vt([e, n, r])
				}, n = 0; n < t; ++n)
					e(n);
				return !o && p < h && (f = f.slice([0, 0], [h, p]),
					d = d.slice([0, 0], [p, p])),
					[f, d]
			})
	}
	var Bu = ge({
		gramSchmidt_: function(t) {
			var e;
			if (Array.isArray(t)) {
				e = !1,
					A(null != t && 0 < t.length, "Gram-Schmidt process: input must not be null, undefined, or empty");
				for (var n = t[0].shape[0], r = 1; r < t.length; ++r)
					A(t[r].shape[0] === n, "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + t[r].shape[0] + " vs. " + n + ")")
			} else
				e = !0,
					t = $o(t, t.shape[0], 0).map(function(t) {
						return Ni(t, [0])
					});
			A(t.length <= t[0].shape[0], "Gram-Schmidt: Number of vectors (" + t.length + ") exceeds number of dimensions (" + t[0].shape[0] + ").");
			var o = []
				, i = t
				, a = function(r) {
				o.push(Ot.engine.tidy(function() {
					var t = i[r];
					if (0 < r)
						for (var e = 0; e < r; ++e) {
							var n = ps(o[e].mulStrict(t)).mul(o[e]);
							t = t.sub(n)
						}
					return t.div(au(t, "euclidean"))
				}))
			};
			for (r = 0; r < t.length; ++r)
				a(r);
			return e ? ki(o, 0) : o
		}
	})
		, Lu = ge({
		qr_: function(t, o) {
			if (void 0 === o && (o = !1),
			t.rank < 2)
				throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t.rank);
			if (2 === t.rank)
				return Pu(t, o);
			var e = t.shape.slice(0, t.shape.length - 2).reduce(function(t, e) {
				return t * e
			})
				, i = []
				, a = [];
			return Ii(t.reshape([e, t.shape[t.shape.length - 2], t.shape[t.shape.length - 1]]), 0).forEach(function(t) {
				var e = Pu(t, o)
					, n = e[0]
					, r = e[1];
				i.push(n),
					a.push(r)
			}),
				[ki(i, 0).reshape(t.shape), ki(a, 0).reshape(t.shape)]
		}
	})
		, Wu = Object.freeze({
		gramSchmidt: Bu,
		qr: Lu
	});
	function zu(t, e, n, r, o) {
		null == r && (r = .5),
		null == o && (o = Number.NEGATIVE_INFINITY);
		var i = t.shape[0];
		return n = Math.min(n, i),
			A(0 <= r && r <= 1, "iouThreshold must be in [0, 1], but was '" + r + "'"),
			A(2 === t.rank, "boxes must be a 2D tensor, but was of rank '" + t.rank + "'"),
			A(4 === t.shape[1], "boxes must have 4 columns, but 2nd dimension was " + t.shape[1]),
			A(1 === e.rank, "scores must be a 1D tensor"),
			A(e.shape[0] === i, "scores has incompatible shape with boxes. Expected " + i + ", but was " + e.shape[0]),
			{
				maxOutputSize: n,
				iouThreshold: r,
				scoreThreshold: o
			}
	}
	var Uu = ge({
		resizeBilinear_: function(t, e, n) {
			void 0 === n && (n = !1);
			var r = me(t, "images", "resizeBilinear");
			A(3 === r.rank || 4 === r.rank, "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + r.rank + "."),
				A(2 === e.length, "Error in resizeBilinear: new shape must 2D, but got shape " + e + ".");
			var o = r
				, i = !1;
			3 === r.rank && (i = !0,
				o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
			var a = e[0]
				, s = e[1]
				, u = Ot.engine.runKernel(function(t, e) {
				return t.resizeBilinear(o, a, s, n)
			}, {
				batchImages: o
			}, function(e, t) {
				return {
					batchImages: function() {
						return Ot.engine.runKernel(function(t) {
							return t.resizeBilinearBackprop(e, o, n)
						}, {})
					}
				}
			});
			return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
		}
	})
		, Vu = ge({
		resizeNearestNeighbor_: function(t, e, n) {
			void 0 === n && (n = !1);
			var r = me(t, "images", "resizeNearestNeighbor");
			A(3 === r.rank || 4 === r.rank, "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + r.rank + "."),
				A(2 === e.length, "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e + "."),
				A("float32" === r.dtype || "int32" === r.dtype, "`images` must have `int32` or `float32` as dtype");
			var o = r
				, i = !1;
			3 === r.rank && (i = !0,
				o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
			var a = e[0]
				, s = e[1]
				, u = Ot.engine.runKernel(function(t, e) {
				return t.resizeNearestNeighbor(o, a, s, n)
			}, {
				batchImages: o
			}, function(e, t) {
				return {
					batchImages: function() {
						return Ot.engine.runKernel(function(t) {
							return t.resizeNearestNeighborBackprop(e, o, n)
						}, {})
					}
				}
			});
			return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
		}
	})
		, Gu = ge({
		nonMaxSuppression_: function(t, e, n, r, o) {
			void 0 === r && (r = .5),
			void 0 === o && (o = Number.NEGATIVE_INFINITY);
			var i = me(t, "boxes", "nonMaxSuppression")
				, a = me(e, "scores", "nonMaxSuppression")
				, s = zu(i, a, n, r, o);
			return n = s.maxOutputSize,
				r = s.iouThreshold,
				o = s.scoreThreshold,
				Ot.engine.runKernel(function(t) {
					return t.nonMaxSuppression(i, a, n, r, o)
				}, {
					$boxes: i
				})
		}
	})
		, Hu = function(s, u, c, l, h) {
		return void 0 === l && (l = .5),
		void 0 === h && (h = Number.NEGATIVE_INFINITY),
			m(this, void 0, void 0, function() {
				var e, n, r, o, i, a;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							return e = me(s, "boxes", "nonMaxSuppressionAsync"),
								n = me(u, "scores", "nonMaxSuppressionAsync"),
								r = zu(e, n, c, l, h),
								c = r.maxOutputSize,
								l = r.iouThreshold,
								h = r.scoreThreshold,
								[4, e.data()];
						case 1:
							return o = t.sent(),
								[4, n.data()];
						case 2:
							return i = t.sent(),
								a = He(o, i, c, l, h),
							e !== s && e.dispose(),
							n !== u && n.dispose(),
								[2, a]
					}
				})
			})
	}
		, qu = function(t, e, n, r, o, i) {
		var a = me(t, "image", "cropAndResize", "float32")
			, s = me(e, "boxes", "cropAndResize", "float32")
			, u = me(n, "boxInd", "cropAndResize", "int32");
		o = o || "bilinear",
			i = i || 0;
		var c = s.shape[0];
		return A(4 === a.rank, "Error in cropAndResize: image must be rank 4,but got rank " + a.rank + "."),
			A(2 === s.rank && 4 === s.shape[1], "Error in cropAndResize: boxes must be have size [" + c + ",4] but had shape " + s.shape + "."),
			A(1 === u.rank && u.shape[0] === c, "Error in cropAndResize: boxInd must be have size [" + c + "] but had shape " + s.shape + "."),
			A(2 === r.length, "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."),
			A(1 <= r[0] && 1 <= r[1], "cropSize must be atleast [1,1], but was " + r),
			A("bilinear" === o || "nearest" === o, "method must be bilinear or nearest, but was " + o),
			Ot.engine.runKernel(function(t, e) {
				return t.cropAndResize(a, s, u, r, o, i)
			}, {
				$image: a,
				$boxes: s
			})
	}
		, ju = Object.freeze({
		resizeBilinear: Uu,
		resizeNearestNeighbor: Vu,
		nonMaxSuppression: Gu,
		nonMaxSuppressionAsync: Hu,
		cropAndResize: qu
	})
		, $u = Object.freeze({
		image: ju,
		linalg: Wu,
		losses: Ou,
		spectral: bu,
		op: ge,
		batchNormalization2d: ma,
		batchNormalization3d: va,
		batchNormalization4d: ga,
		batchNormalization: ya,
		complex: we,
		real: be,
		imag: Ee,
		concat: Vo,
		concat1d: Go,
		concat2d: Ho,
		concat3d: qo,
		concat4d: jo,
		split: $o,
		conv1d: Fa,
		conv2d: Oa,
		conv3d: Pa,
		conv2dDerFilter: Ba,
		depthwiseConv2d: La,
		separableConv2d: Wa,
		conv2dTranspose: za,
		matMul: ka,
		dot: Da,
		outerProduct: Ta,
		reverse: Ua,
		reverse1d: Va,
		reverse2d: Ga,
		reverse3d: Ha,
		reverse4d: qa,
		maxPool: Ka,
		avgPool: Xa,
		pool: Ya,
		slice: Qa,
		slice1d: Ja,
		slice2d: Za,
		slice3d: ts,
		slice4d: es,
		abs: Pi,
		acos: Bi,
		acosh: Li,
		asin: Wi,
		asinh: zi,
		atan: Ui,
		atanh: Vi,
		ceil: Gi,
		clipByValue: Hi,
		cos: qi,
		cosh: ji,
		erf: $i,
		exp: Ki,
		expm1: Xi,
		floor: Yi,
		log: Qi,
		log1p: Ji,
		logSigmoid: Zi,
		neg: ta,
		reciprocal: ea,
		round: na,
		rsqrt: ra,
		sigmoid: oa,
		sign: ia,
		sin: aa,
		sinh: sa,
		softplus: ua,
		sqrt: ca,
		square: la,
		step: ha,
		tan: pa,
		tanh: fa,
		all: rs,
		any: os,
		argMax: is,
		argMin: as,
		logSumExp: ss,
		max: us,
		mean: cs,
		min: ls,
		moments: hs,
		sum: ps,
		prod: fs,
		equal: ds,
		equalStrict: ms,
		greater: vs,
		greaterEqual: gs,
		greaterEqualStrict: ys,
		greaterStrict: xs,
		less: ws,
		lessEqual: bs,
		lessEqualStrict: Es,
		lessStrict: Cs,
		notEqual: Ss,
		notEqualStrict: _s,
		add: Rs,
		addN: Ns,
		addStrict: ks,
		atan2: Ds,
		div: Ts,
		divStrict: Is,
		floorDiv: As,
		maximum: Ms,
		maximumStrict: Fs,
		minimum: Os,
		minimumStrict: Ps,
		mod: Bs,
		modStrict: Ls,
		mul: Ws,
		mulStrict: zs,
		pow: Us,
		powStrict: Vs,
		squaredDifference: Gs,
		squaredDifferenceStrict: Hs,
		sub: qs,
		subStrict: js,
		elu: Zs,
		leakyRelu: tu,
		prelu: eu,
		relu: nu,
		selu: ru,
		logicalAnd: $s,
		logicalNot: Ks,
		logicalOr: Xs,
		logicalXor: Ys,
		where: Qs,
		whereAsync: Js,
		buffer: ii,
		toPixels: oi,
		print: ai,
		batchToSpaceND: si,
		cast: ui,
		clone: ci,
		cumsum: li,
		depthToSpace: hi,
		expandDims: pi,
		eye: fi,
		fromPixels: di,
		multinomial: mi,
		oneHot: vi,
		pad: gi,
		pad1d: yi,
		pad2d: xi,
		pad3d: wi,
		pad4d: bi,
		rand: Ei,
		randomNormal: Ci,
		randomUniform: Si,
		reshape: _i,
		spaceToBatchND: Ri,
		squeeze: Ni,
		stack: ki,
		tile: Di,
		truncatedNormal: Ti,
		unstack: Ii,
		setdiff1dAsync: Ai,
		fill: Me,
		linspace: Fe,
		ones: Ie,
		range: Oe,
		scalar: Se,
		tensor: Ce,
		tensor1d: _e,
		tensor2d: Re,
		tensor3d: Ne,
		tensor4d: ke,
		tensor5d: De,
		tensor6d: Te,
		zeros: Ae,
		onesLike: Pe,
		zerosLike: Be,
		transpose: ou,
		softmax: ye,
		logSoftmax: xe,
		localResponseNormalization: iu,
		norm: au,
		gather: cu,
		unsortedSegmentSum: lu,
		basicLSTMCell: hu,
		multiRNNCell: pu,
		movingAverage: fu,
		stridedSlice: du,
		topk: mu,
		scatterND: vu,
		fft: gu,
		ifft: yu,
		rfft: xu,
		irfft: wu,
		sparseToDense: Eu,
		gatherND: _u
	})
		, Ku = function() {
		function t() {
			this.blockSize = 48,
				this.firstUse = !0,
			Ot.get("IS_BROWSER") && (this.fromPixels2DContext = document.createElement("canvas").getContext("2d"))
		}
		return t.prototype.setDataMover = function(t) {
			this.data = new Le(t)
		}
			,
			t.prototype.register = function(t, e, n) {
				if (this.firstUse && (this.firstUse = !1,
				Ot.get("IS_NODE") && qt("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n")),
					this.data.has(t))
					throw new Error("Data buffer is already registered");
				this.data.set(t, {
					dtype: n
				})
			}
			,
			t.prototype.write = function(t, e) {
				if (null == e)
					throw new Error("MathBackendCPU.write(): values can not be null");
				this.data.get(t).values = e
			}
			,
			t.prototype.fromPixels = function(t, e) {
				if (null == t)
					throw new Error("pixels passed to tf.fromPixels() can not be null");
				var n, r;
				if (Ot.get("IS_NODE") && null == t.getContext)
					throw new Error("When running in node, pixels must be an HTMLCanvasElement like the one returned by the `canvas` npm package");
				if (null != t.getContext)
					n = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
				else if (t instanceof ImageData)
					n = t.data;
				else {
					if (!(t instanceof HTMLImageElement || t instanceof HTMLVideoElement))
						throw new Error("pixels passed to tf.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was " + t.constructor.name);
					if (null == this.fromPixels2DContext)
						throw new Error("Can't read pixels from HTMLImageElement outside the browser.");
					this.fromPixels2DContext.canvas.width = t.width,
						this.fromPixels2DContext.canvas.height = t.height,
						this.fromPixels2DContext.drawImage(t, 0, 0, t.width, t.height),
						n = this.fromPixels2DContext.getImageData(0, 0, t.width, t.height).data
				}
				if (4 === e)
					r = new Int32Array(n);
				else {
					var o = t.width * t.height;
					r = new Int32Array(o * e);
					for (var i = 0; i < o; i++)
						for (var a = 0; a < e; ++a)
							r[i * e + a] = n[4 * i + a]
				}
				return Ne(r, [t.height, t.width, e], "int32")
			}
			,
			t.prototype.read = function(e) {
				return m(this, void 0, void 0, function() {
					return C(this, function(t) {
						return [2, this.readSync(e)]
					})
				})
			}
			,
			t.prototype.readSync = function(t) {
				var e = this.data.get(t)
					, n = e.dtype
					, r = e.complexTensors;
				return "complex64" === n ? Ve(r.real.dataSync(), r.imag.dataSync()) : this.data.get(t).values
			}
			,
			t.prototype.disposeData = function(t) {
				if (this.data.has(t)) {
					var e = this.data.get(t).complexTensors;
					null != e && (e.real.dispose(),
						e.imag.dispose()),
						this.data.delete(t)
				}
			}
			,
			t.prototype.time = function(n) {
				return m(this, void 0, void 0, function() {
					var e;
					return C(this, function(t) {
						return e = q(),
							n(),
							[2, {
								kernelMs: q() - e
							}]
					})
				})
			}
			,
			t.prototype.memory = function() {
				return {
					unreliable: !0,
					reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]
				}
			}
			,
			t.prototype.complex = function(t, e) {
				var n = it.make(t.shape, {}, "complex64");
				return this.data.get(n.dataId).complexTensors = {
					real: Ot.engine.keep(t.clone()),
					imag: Ot.engine.keep(e.clone())
				},
					n
			}
			,
			t.prototype.real = function(t) {
				return this.data.get(t.dataId).complexTensors.real.clone()
			}
			,
			t.prototype.imag = function(t) {
				return this.data.get(t.dataId).complexTensors.imag.clone()
			}
			,
			t.prototype.assertNotComplex = function(t, e) {
				Array.isArray(t) || (t = [t]),
					t.forEach(function(t) {
						null != t && A("complex64" !== t.dtype, e + " does not support complex64 tensors.")
					})
			}
			,
			t.prototype.slice = function(t, n, e) {
				this.assertNotComplex(t, "slice");
				for (var r = ii(e, t.dtype), o = 0; o < r.size; ++o) {
					var i = r.indexToLoc(o)
						, a = i.map(function(t, e) {
						return t + n[e]
					});
					r.set.apply(r, [t.get.apply(t, a)].concat(i))
				}
				return r.toTensor()
			}
			,
			t.prototype.stridedSlice = function(t, e, n, r, o, i, a, s, u) {
				this.assertNotComplex(t, "stridedSlice");
				var c = le(t.shape, e, n, r, o, i, a, s, u)
					, l = c[0]
					, h = c[1]
					, p = c[2]
					, f = h.filter(function(t, e) {
					return -1 === p.indexOf(e)
				});
				if (f.some(function(t) {
					return 0 === t
				}))
					return Ce([], f);
				for (var d = ii(h, t.dtype), m = 0; m < d.size; m++) {
					for (var v = d.indexToLoc(m), g = new Array(v.length), y = 0; y < g.length; y++)
						g[y] = v[y] * r[y] + l[y];
					d.set.apply(d, [t.get.apply(t, g)].concat(v))
				}
				return d.toTensor().reshape(f)
			}
			,
			t.prototype.reverse = function(r, o) {
				this.assertNotComplex(r, "reverse");
				for (var i = ii(r.shape, r.dtype), a = r.buffer(), t = function(t) {
					var e = i.indexToLoc(t)
						, n = e.slice();
					o.forEach(function(t) {
						return n[t] = r.shape[t] - 1 - n[t]
					}),
						i.set.apply(i, [a.get.apply(a, n)].concat(e))
				}, e = 0; e < i.size; e++)
					t(e);
				return i.toTensor()
			}
			,
			t.prototype.concat = function(t, n) {
				this.assertNotComplex(t, "concat");
				var e = t.map(function(t) {
					var e = L(t.shape.slice(n));
					return t.as2D(-1, e)
				})
					, a = ie(e.map(function(t) {
					return t.shape
				}), 1)
					, s = ii(a, t[0].dtype).values;
				if (1 === e[0].shape[0]) {
					var r = 0;
					e.forEach(function(t) {
						s.set(t.dataSync(), r),
							r += t.size
					})
				} else {
					var u = 0;
					e.forEach(function(t) {
						for (var e = t.dataSync(), n = 0, r = 0; r < t.shape[0]; ++r)
							for (var o = r * a[1] + u, i = 0; i < t.shape[1]; ++i)
								s[o + i] = e[n++];
						u += t.shape[1]
					})
				}
				var o = ie(t.map(function(t) {
					return t.shape
				}), n);
				return Ce(s, o, t[0].dtype)
			}
			,
			t.prototype.neg = function(t) {
				return this.assertNotComplex(t, "neg"),
					this.multiply(Se(-1), t)
			}
			,
			t.prototype.add = function(t, e) {
				return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function(t, e, n, r) {
					return {
						real: t + n,
						imag: e + r
					}
				}) : this.broadcastedBinaryOp(t, e, xt(t.dtype, e.dtype), function(t, e) {
					return t + e
				})
			}
			,
			t.prototype.addN = function(t) {
				this.assertNotComplex(t, "addN");
				for (var e = t.map(function(t) {
					return t.dataSync()
				}), n = ii(t[0].shape, t[0].dtype), r = n.values, o = 0; o < t.length; o++)
					for (var i = e[o], a = 0; a < r.length; a++)
						r[a] += i[a];
				return n.toTensor()
			}
			,
			t.prototype.subtract = function(t, e) {
				return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function(t, e, n, r) {
					return {
						real: t - n,
						imag: e - r
					}
				}) : this.broadcastedBinaryOp(t, e, xt(t.dtype, e.dtype), function(t, e) {
					return t - e
				})
			}
			,
			t.prototype.pow = function(t, e) {
				return this.assertNotComplex([t, e], "pow"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						return Math.pow(t, e)
					})
			}
			,
			t.prototype.batchMatMul = function(t, e, n, r) {
				this.assertNotComplex([t, e], "matMul");
				for (var o = n ? t.shape[1] : t.shape[2], i = n ? t.shape[2] : t.shape[1], a = r ? e.shape[1] : e.shape[2], s = t.shape[0], u = t.dataSync(), c = e.dataSync(), l = n ? [t.strides[0], 1, t.strides[1]] : [t.strides[0], t.strides[1], 1], h = l[0], p = l[1], f = l[2], d = r ? [1, e.strides[1], e.strides[0]] : [e.strides[1], 1, e.strides[0]], m = d[0], v = d[1], g = d[2], y = i * a, x = ii([s, i, a], t.dtype), w = x.values, b = this.blockSize, E = 0; E < s; E++)
					for (var C = 0; C < i; C += b)
						for (var S = 0; S < a; S += b)
							for (var _ = 0; _ < o; _ += b)
								for (var R = Math.min(C + b, i), N = Math.min(S + b, a), k = Math.min(_ + b, o), D = C; D < R; D++)
									for (var T = S; T < N; T++) {
										for (var I = 0, A = _; A < k; A++)
											I += u[E * h + D * p + A * f] * c[A * m + T * v + E * g];
										w[E * y + (D * a + T)] += I
									}
				return x.toTensor()
			}
			,
			t.prototype.multiply = function(t, e) {
				return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function(t, e, n, r) {
					return {
						real: t * n - e * r,
						imag: t * r + e * n
					}
				}) : this.broadcastedBinaryOp(t, e, xt(t.dtype, e.dtype), function(t, e) {
					return t * e
				})
			}
			,
			t.prototype.realDivide = function(t, e) {
				return this.assertNotComplex([t, e], "realDivide"),
					this.broadcastedBinaryOp(t, e, "float32", function(t, e) {
						return t / e
					})
			}
			,
			t.prototype.floorDiv = function(t, e) {
				return this.assertNotComplex([t, e], "floorDiv"),
					this.broadcastedBinaryOp(t, e, "int32", function(t, e) {
						return Math.floor(t / e)
					})
			}
			,
			t.prototype.sum = function(t, e) {
				this.assertNotComplex(t, "sum"),
					ee("sum", e, t.rank);
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, xt(t.dtype, "int32")), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = 0, p = 0; p < a; ++p)
						h += u[l + p];
					s[c] = h
				}
				return i
			}
			,
			t.prototype.prod = function(t, e) {
				this.assertNotComplex(t, "sum");
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, xt(t.dtype, "int32")), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = 1, p = 0; p < a; ++p)
						h *= u[l + p];
					s[c] = h
				}
				return i
			}
			,
			t.prototype.unsortedSegmentSum = function(t, e, n) {
				this.assertNotComplex(t, "unsortedSegmentSum");
				for (var r = [], o = t.rank - e.rank, i = 0; i < o; ++i)
					e = e.expandDims(i + 1);
				for (i = 0; i < n; ++i) {
					var a = Se(i, "int32")
						, s = ds(a, e).asType("float32").mul(t).sum(0);
					r.push(s)
				}
				return ki(r)
			}
			,
			t.prototype.argMin = function(t, e) {
				this.assertNotComplex(t, "argMin");
				var n = [e];
				ee("argMin", n, t.rank);
				for (var r = Jt(t.shape, n), o = r[0], i = r[1], a = Ae(o, "int32"), s = L(i), u = a.dataSync(), c = t.dataSync(), l = 0; l < u.length; ++l) {
					for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
						var m = c[h + d];
						m < p && (p = m,
							f = d)
					}
					u[l] = f
				}
				return a
			}
			,
			t.prototype.argMax = function(t, e) {
				this.assertNotComplex(t, "argMax");
				var n = [e];
				ee("argMax", n, t.rank);
				for (var r = Jt(t.shape, n), o = r[0], i = r[1], a = Ae(o, "int32"), s = L(i), u = a.dataSync(), c = t.dataSync(), l = 0; l < u.length; ++l) {
					for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
						var m = c[h + d];
						p < m && (p = m,
							f = d)
					}
					u[l] = f
				}
				return a
			}
			,
			t.prototype.cumsum = function(t, e, n, r) {
				if (this.assertNotComplex(t, "cumsum"),
				e !== t.rank - 1)
					throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
				for (var o = xt(t.dtype, "int32"), i = Ae(t.shape, o), a = i.dataSync(), s = t.dataSync(), u = t.shape[t.rank - 1], c = r ? function(t, e) {
						return t + u - e - 1
					}
					: function(t, e) {
						return t + e
					}
					     , l = 0; l < s.length; l += u)
					for (var h = 0; h < u; h++) {
						var p = c(l, h);
						if (0 === h)
							a[p] = n ? 0 : s[p];
						else {
							var f = c(l, h - 1);
							a[p] = n ? s[f] + a[f] : s[p] + a[f]
						}
					}
				return i
			}
			,
			t.prototype.equal = function(t, e) {
				return this.assertNotComplex([t, e], "equal"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t === e ? 1 : 0
					})
			}
			,
			t.prototype.notEqual = function(t, e) {
				return this.assertNotComplex([t, e], "notEqual"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t !== e ? 1 : 0
					})
			}
			,
			t.prototype.less = function(t, e) {
				return this.assertNotComplex([t, e], "less"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t < e ? 1 : 0
					})
			}
			,
			t.prototype.lessEqual = function(t, e) {
				return this.assertNotComplex([t, e], "lessEqual"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t <= e ? 1 : 0
					})
			}
			,
			t.prototype.greater = function(t, e) {
				return this.assertNotComplex([t, e], "greater"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return e < t ? 1 : 0
					})
			}
			,
			t.prototype.greaterEqual = function(t, e) {
				return this.assertNotComplex([t, e], "greaterEqual"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return e <= t ? 1 : 0
					})
			}
			,
			t.prototype.logicalNot = function(t) {
				this.assertNotComplex(t, "logicalNot");
				for (var e = t.dataSync(), n = new Uint8Array(e.length), r = 0; r < e.length; ++r)
					n[r] = e[r] ? 0 : 1;
				return it.make(t.shape, {
					values: n
				}, "bool")
			}
			,
			t.prototype.logicalAnd = function(t, e) {
				return this.assertNotComplex([t, e], "logicalAnd"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t && e
					})
			}
			,
			t.prototype.logicalOr = function(t, e) {
				return this.assertNotComplex([t, e], "logicalOr"),
					this.broadcastedBinaryOp(t, e, "bool", function(t, e) {
						return t || e
					})
			}
			,
			t.prototype.select = function(t, e, n) {
				this.assertNotComplex([t, e, n], "select");
				for (var r = t.dataSync(), o = e.dataSync(), i = n.dataSync(), a = Ae(e.shape, xt(e.dtype, n.dtype)), s = a.dataSync(), u = 0, c = 0 === t.rank || 1 < t.rank || 1 === e.rank ? 1 : e.shape[1], l = 0; l < r.length; l++)
					for (var h = 0; h < c; h++)
						1 === r[l] ? s[u++] = o[l] : s[u++] = i[l];
				return a
			}
			,
			t.prototype.where = function(t) {
				this.assertNotComplex([t], "where");
				var e = t.dataSync();
				return Mi(t.shape, e)
			}
			,
			t.prototype.topk = function(t, e, n) {
				return this.assertNotComplex(t, "topk"),
					$e(t.dataSync(), t.shape, t.dtype, e)
			}
			,
			t.prototype.min = function(t, e) {
				this.assertNotComplex(t, "min"),
					ee("min", e, t.rank);
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, t.dtype), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						f < h && (h = f)
					}
					s[c] = h
				}
				return i
			}
			,
			t.prototype.minimum = function(t, e) {
				return this.assertNotComplex([t, e], "minimum"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						return Math.min(t, e)
					})
			}
			,
			t.prototype.mod = function(t, e) {
				return this.assertNotComplex([t, e], "mod"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						var n = t % e;
						return t < 0 && e < 0 || 0 <= t && 0 <= e ? n : (n + e) % e
					})
			}
			,
			t.prototype.max = function(t, e) {
				this.assertNotComplex(t, "max"),
					ee("max", e, t.rank);
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, t.dtype), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h < f && (h = f)
					}
					s[c] = h
				}
				return i
			}
			,
			t.prototype.maximum = function(t, e) {
				return this.assertNotComplex([t, e], "maximum"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						return Math.max(t, e)
					})
			}
			,
			t.prototype.all = function(t, e) {
				this.assertNotComplex(t, "all"),
					ee("all", e, t.rank);
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, t.dtype), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h = h && f
					}
					s[c] = h
				}
				return i
			}
			,
			t.prototype.any = function(t, e) {
				this.assertNotComplex(t, "any"),
					ee("any", e, t.rank);
				for (var n = Jt(t.shape, e), r = n[0], o = n[1], i = Ae(r, t.dtype), a = L(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h = h || f
					}
					s[c] = h
				}
				return i
			}
			,
			t.prototype.squaredDifference = function(t, e) {
				return this.assertNotComplex([t, e], "squaredDifference"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						var n = t - e;
						return n * n
					})
			}
			,
			t.prototype.ceil = function(t) {
				this.assertNotComplex(t, "ceil");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					n[r] = Math.ceil(e[r]);
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.floor = function(t) {
				this.assertNotComplex(t, "floor");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					n[r] = Math.floor(e[r]);
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.sign = function(t) {
				this.assertNotComplex(t, "x");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					e[r] < 0 ? n[r] = -1 : 0 < e[r] ? n[r] = 1 : n[r] = 0;
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.round = function(t) {
				this.assertNotComplex(t, "round");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = Math.floor(e[r]);
					e[r] - o < .5 ? n[r] = Math.floor(e[r]) : .5 < e[r] - o ? n[r] = Math.ceil(e[r]) : n[r] = o % 2 == 0 ? o : o + 1
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.exp = function(t) {
				this.assertNotComplex(t, "exp");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					n[r] = Math.exp(e[r]);
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.expm1 = function(t) {
				this.assertNotComplex(t, "expm1");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					n[r] = Math.expm1(e[r]);
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.log = function(t) {
				this.assertNotComplex(t, "log");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = e[r];
					n[r] = Math.log(o)
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.log1p = function(t) {
				this.assertNotComplex(t, "log1p");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = e[r];
					n[r] = Math.log1p(o)
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.sqrt = function(t) {
				this.assertNotComplex(t, "sqrt");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = e[r];
					n[r] = Math.sqrt(o)
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.rsqrt = function(t) {
				this.assertNotComplex(t, "rsqrt");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = e[r];
					n[r] = 1 / Math.sqrt(o)
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.square = function(t) {
				this.assertNotComplex(t, "square");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
					var o = e[r];
					n[r] = o * o
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.reciprocal = function(t) {
				this.assertNotComplex(t, "reciprocal");
				for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r)
					n[r] = 1 / e[r];
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.relu = function(t) {
				this.assertNotComplex(t, "relu");
				for (var e = Ae(t.shape, t.dtype), n = e.dataSync(), r = t.dataSync(), o = 0; o < r.length; ++o)
					n[o] = Math.max(0, r[o]);
				return e
			}
			,
			t.prototype.elu = function(t) {
				this.assertNotComplex(t, "elu");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
					var o = n[r];
					e[r] = 0 <= o ? o : Math.exp(o) - 1
				}
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.eluDer = function(t, e) {
				this.assertNotComplex([t, e], "eluDer");
				for (var n = new Float32Array(e.size), r = e.dataSync(), o = t.dataSync(), i = 0; i < r.length; ++i) {
					var a = r[i];
					n[i] = 1 <= a ? o[i] : o[i] * (a + 1)
				}
				return it.make(e.shape, {
					values: n
				})
			}
			,
			t.prototype.selu = function(t) {
				this.assertNotComplex(t, "selu");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
					var o = n[r];
					e[r] = 0 <= o ? 1.0507009873554805 * o : 1.7580993408473768 * (Math.exp(o) - 1)
				}
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.clip = function(t, e, n) {
				this.assertNotComplex(t, "clip");
				for (var r = new Float32Array(t.size), o = t.dataSync(), i = 0; i < o.length; ++i) {
					var a = o[i];
					r[i] = n < a ? n : a < e ? e : a
				}
				return it.make(t.shape, {
					values: r
				})
			}
			,
			t.prototype.abs = function(t) {
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.abs(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.complexAbs = function(t) {
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < t.size; ++r) {
					var o = n[2 * r]
						, i = n[2 * r + 1];
					e[r] = Math.hypot(o, i)
				}
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.int = function(t) {
				this.assertNotComplex(t, "int");
				for (var e = new Int32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = n[r];
				return it.make(t.shape, {
					values: e
				}, "int32")
			}
			,
			t.prototype.sigmoid = function(t) {
				this.assertNotComplex(t, "sigmoid");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = 1 / (1 + Math.exp(-n[r]));
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.softplus = function(t) {
				this.assertNotComplex(t, "softplus");
				for (var e = Math.log(1.1920928955078125e-7) + 2, n = new Float32Array(t.size), r = t.dataSync(), o = 0; o < r.length; ++o) {
					var i, a = r[o] > -e, s = r[o] < e, u = Math.exp(r[o]);
					i = s ? u : a ? r[o] : Math.log(1 + u),
						n[o] = i
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.sin = function(t) {
				this.assertNotComplex(t, "sin");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.sin(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.cos = function(t) {
				this.assertNotComplex(t, "cos");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.cos(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.tan = function(t) {
				this.assertNotComplex(t, "tan");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.tan(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.asin = function(t) {
				this.assertNotComplex(t, "asin");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.asin(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.acos = function(t) {
				this.assertNotComplex(t, "acos");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.acos(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.atan = function(t) {
				this.assertNotComplex(t, "atan");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.atan(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.atan2 = function(t, e) {
				return this.assertNotComplex([t, e], "atan2"),
					this.broadcastedBinaryOp(t, e, t.dtype, function(t, e) {
						return Math.atan2(t, e)
					})
			}
			,
			t.prototype.sinh = function(t) {
				this.assertNotComplex(t, "sinh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.sinh(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.cosh = function(t) {
				this.assertNotComplex(t, "cosh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.cosh(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.tanh = function(t) {
				this.assertNotComplex(t, "tanh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = v(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.asinh = function(t) {
				this.assertNotComplex(t, "asinh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.asinh(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.acosh = function(t) {
				this.assertNotComplex(t, "acosh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.acosh(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.atanh = function(t) {
				this.assertNotComplex(t, "atanh");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r)
					e[r] = Math.atanh(n[r]);
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.erf = function(t) {
				this.assertNotComplex(t, "erf");
				for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
					var o = n[r]
						, i = 1 / (1 + .3275911 * o);
					e[r] = 1 - ((((1.061405429 * i - 1.453152027) * i + 1.421413741) * i - .284496736) * i + .254829592) * i * Math.exp(-o * o)
				}
				return it.make(t.shape, {
					values: e
				})
			}
			,
			t.prototype.step = function(t, e) {
				void 0 === e && (e = 0),
					this.assertNotComplex(t, "step");
				for (var n = new Float32Array(t.size), r = t.dataSync(), o = 0; o < r.length; ++o) {
					var i = r[o];
					isNaN(i) ? n[o] = NaN : n[o] = 0 < i ? 1 : e
				}
				return it.make(t.shape, {
					values: n
				})
			}
			,
			t.prototype.conv2d = function(t, e, n) {
				this.assertNotComplex([t, e], "conv2d");
				for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = ii(n.outShape, t.dtype), l = t.dataSync(), h = e.dataSync(), p = c.values, f = 0; f < n.batchSize; ++f)
					for (var d = f * t.strides[0], m = f * c.strides[0], v = 0; v < n.outHeight; ++v)
						for (var g = m + v * c.strides[1], y = v * n.strideHeight - s, x = 0; x < r; x++) {
							var w = y + x * i;
							if (!(w < 0 || w >= n.inHeight))
								for (var b = x * e.strides[0], E = d + w * t.strides[1], C = 0; C < n.outWidth; ++C)
									for (var S = g + C * n.outChannels, _ = C * n.strideWidth - u, R = 0; R < o; R++) {
										var N = _ + R * a;
										if (!(N < 0 || N >= n.inWidth))
											for (var k = b + R * e.strides[1], D = E + N * n.inChannels, T = k, I = 0; I < n.inChannels; ++I) {
												for (var A = l[D + I], M = 0; M < n.outChannels; ++M)
													p[S + M] += A * h[T + M];
												T += n.outChannels
											}
									}
						}
				return c.toTensor()
			}
			,
			t.prototype.conv3d = function(t, e, n) {
				for (var r = n.filterDepth, o = n.filterHeight, i = n.filterWidth, a = n.dilationDepth, s = n.dilationHeight, u = n.dilationWidth, c = n.padInfo.front, l = n.padInfo.left, h = n.padInfo.top, p = ii(n.outShape, t.dtype), f = t.dataSync(), d = e.dataSync(), m = p.values, v = 0; v < n.batchSize; ++v)
					for (var g = v * t.strides[0], y = v * p.strides[0], x = 0; x < n.outDepth; ++x)
						for (var w = y + x * p.strides[1], b = x * n.strideDepth - c, E = 0; E < r; E++) {
							var C = b + E * a;
							if (!(C < 0 || C >= n.inDepth))
								for (var S = E * e.strides[0], _ = g + C * t.strides[1], R = 0; R < n.outHeight; ++R)
									for (var N = w + R * p.strides[2], k = R * n.strideHeight - h, D = 0; D < o; D++) {
										var T = k + D * s;
										if (!(T < 0 || T >= n.inHeight))
											for (var I = S + D * e.strides[1], A = _ + T * t.strides[2], M = 0; M < n.outWidth; ++M)
												for (var F = N + M * n.outChannels, O = M * n.strideWidth - l, P = 0; P < i; P++) {
													var B = O + P * u;
													if (!(B < 0 || B >= n.inWidth))
														for (var L = I + P * e.strides[2], W = A + B * n.inChannels, z = L, U = 0; U < n.inChannels; ++U) {
															for (var V = f[W + U], G = 0; G < n.outChannels; ++G)
																m[F + G] += V * d[z + G];
															z += n.outChannels
														}
												}
									}
						}
				return p.toTensor()
			}
			,
			t.prototype.conv2dDerInput = function(t, e, n) {
				this.assertNotComplex([t, e], "conv2dDerInput");
				for (var r = ii(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = t.dataSync(), l = t.strides, h = l[0], p = l[1], f = l[2], d = e.dataSync(), m = e.strides, v = m[0], g = m[1], y = m[2], x = n.batchSize, w = n.filterHeight, b = n.filterWidth, E = n.inChannels, C = n.inHeight, S = n.inWidth, _ = n.outChannels, R = n.outHeight, N = n.outWidth, k = n.strideHeight, D = n.strideWidth, T = w - 1 - n.padInfo.top, I = b - 1 - n.padInfo.left, A = 0; A < x; ++A)
					for (var M = 0; M < E; ++M)
						for (var F = 0; F < C; ++F)
							for (var O = F - T, P = Math.max(0, Math.ceil(O / k)), B = Math.min(R, (w + O) / k), L = 0; L < S; ++L) {
								for (var W = L - I, z = Math.max(0, Math.ceil(W / D)), U = Math.min(N, (b + W) / D), V = 0, G = P; G < B; ++G)
									for (var H = G * k - O, q = z; q < U; ++q)
										for (var j = h * A + p * G + f * q, $ = v * (w - 1 - H) + g * (b - 1 - (q * D - W)) + y * M, K = 0; K < _; ++K)
											V += c[j + K] * d[$ + K];
								o[a * A + s * F + u * L + M] = V
							}
				return r.toTensor()
			}
			,
			t.prototype.conv3dDerInput = function(t, e, n) {
				for (var r = ii(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = i[3], l = t.dataSync(), h = t.strides, p = h[0], f = h[1], d = h[2], m = h[3], v = e.dataSync(), g = e.strides, y = g[0], x = g[1], w = g[2], b = g[3], E = n.batchSize, C = n.filterDepth, S = n.filterHeight, _ = n.filterWidth, R = n.inChannels, N = n.inDepth, k = n.inHeight, D = n.inWidth, T = n.outChannels, I = n.outDepth, A = n.outHeight, M = n.outWidth, F = n.strideDepth, O = n.strideHeight, P = n.strideWidth, B = C - 1 - n.padInfo.front, L = S - 1 - n.padInfo.top, W = _ - 1 - n.padInfo.left, z = 0; z < E; ++z)
					for (var U = 0; U < R; ++U)
						for (var V = 0; V < N; ++V)
							for (var G = V - B, H = Math.max(0, Math.ceil(G / F)), q = Math.min(I, (C + G) / F), j = 0; j < k; ++j)
								for (var $ = j - L, K = Math.max(0, Math.ceil($ / O)), X = Math.min(A, (S + $) / O), Y = 0; Y < D; ++Y) {
									for (var Q = Y - W, J = Math.max(0, Math.ceil(Q / P)), Z = Math.min(M, (_ + Q) / P), tt = 0, et = H; et < q; ++et)
										for (var nt = et * F - G, rt = K; rt < X; ++rt)
											for (var ot = rt * O - $, it = J; it < Z; ++it)
												for (var at = p * z + f * et + d * rt + m * it, st = y * (C - 1 - nt) + x * (S - 1 - ot) + w * (_ - 1 - (it * P - Q)) + b * U, ut = 0; ut < T; ++ut)
													tt += l[at + ut] * v[st + ut];
									o[a * z + s * V + u * j + c * Y + U] = tt
								}
				return r.toTensor()
			}
			,
			t.prototype.conv2dDerFilter = function(t, e, n) {
				this.assertNotComplex([t, e], "conv2dDerFilter");
				for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = ii(n.filterShape, "float32"), u = n.padInfo.left, c = n.padInfo.top, l = 0; l < i; ++l)
					for (var h = Math.max(0, Math.ceil((c - l) / r)), p = Math.min(n.outHeight, (n.inHeight + c - l) / r), f = 0; f < a; ++f)
						for (var d = Math.max(0, Math.ceil((u - f) / o)), m = Math.min(n.outWidth, (n.inWidth + u - f) / o), v = 0; v < n.inChannels; ++v)
							for (var g = 0; g < n.outChannels; ++g) {
								for (var y = 0, x = 0; x < n.batchSize; ++x)
									for (var w = h; w < p; ++w)
										for (var b = l + w * r - c, E = d; E < m; ++E) {
											var C = f + E * o - u;
											y += t.get(x, b, C, v) * e.get(x, w, E, g)
										}
								s.set(y, l, f, v, g)
							}
				return s.toTensor()
			}
			,
			t.prototype.conv3dDerFilter = function(t, e, n) {
				for (var r = n.strideDepth, o = n.strideHeight, i = n.strideWidth, a = n.filterDepth, s = n.filterHeight, u = n.filterWidth, c = ii(n.filterShape, "float32"), l = c.values, h = c.strides, p = h[0], f = h[1], d = h[2], m = h[3], v = e.dataSync(), g = e.strides, y = g[0], x = g[1], w = g[2], b = g[3], E = t.dataSync(), C = t.strides, S = C[0], _ = C[1], R = C[2], N = C[3], k = n.padInfo.front, D = n.padInfo.left, T = n.padInfo.top, I = 0; I < a; ++I)
					for (var A = Math.max(0, Math.ceil((k - I) / r)), M = Math.min(n.outDepth, (n.inDepth + k - I) / r), F = I * p, O = 0; O < s; ++O)
						for (var P = Math.max(0, Math.ceil((T - O) / o)), B = Math.min(n.outHeight, (n.inHeight + T - O) / o), L = O * f + F, W = 0; W < u; ++W)
							for (var z = Math.max(0, Math.ceil((D - W) / i)), U = Math.min(n.outWidth, (n.inWidth + D - W) / i), V = W * d + L, G = 0; G < n.inChannels; ++G)
								for (var H = G * m + V, q = 0; q < n.outChannels; ++q) {
									for (var j = 0, $ = 0; $ < n.batchSize; ++$)
										for (var K = $ * S, X = $ * y, Y = A; Y < M; ++Y)
											for (var Q = (I + Y * r - k) * _ + K, J = Y * x + X, Z = P; Z < B; ++Z)
												for (var tt = (O + Z * o - T) * R + Q, et = Z * w + J, nt = z; nt < U; ++nt) {
													var rt = nt * b + et;
													j += E[(W + nt * i - D) * N + tt + G] * v[rt + q]
												}
									l[H + q] = j
								}
				return c.toTensor()
			}
			,
			t.prototype.depthwiseConv2D = function(t, e, n) {
				this.assertNotComplex([t, e], "depthwiseConv2D");
				for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = n.outChannels / n.inChannels, l = ii(n.outShape, t.dtype), h = t.dataSync(), p = e.dataSync(), f = l.values, d = 0; d < n.batchSize; ++d)
					for (var m = d * t.strides[0], v = d * l.strides[0], g = 0; g < n.outHeight; ++g)
						for (var y = v + g * l.strides[1], x = g * n.strideHeight - s, w = 0; w < r; ++w) {
							var b = x + w * i;
							if (!(b < 0 || b >= n.inHeight))
								for (var E = w * e.strides[0], C = m + b * t.strides[1], S = 0; S < n.outWidth; ++S)
									for (var _ = y + S * l.strides[2], R = S * n.strideWidth - u, N = 0; N < o; ++N) {
										var k = R + N * a;
										if (!(k < 0 || k >= n.inWidth))
											for (var D = E + N * e.strides[1], T = C + k * n.inChannels, I = _, A = D, M = 0; M < n.inChannels; ++M) {
												for (var F = h[T + M], O = 0; O < c; ++O)
													f[I + O] += F * p[A + O];
												I += c,
													A += c
											}
									}
						}
				return l.toTensor()
			}
			,
			t.prototype.depthwiseConv2DDerInput = function(t, e, n) {
				this.assertNotComplex([t, e], "depthwiseConv2DDerInput");
				for (var r = ii(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = t.dataSync(), l = t.strides, h = l[0], p = l[1], f = l[2], d = e.dataSync(), m = e.strides, v = m[0], g = m[1], y = m[2], x = n.batchSize, w = n.filterHeight, b = n.filterWidth, E = n.inChannels, C = n.inHeight, S = n.inWidth, _ = n.outChannels, R = n.outHeight, N = n.outWidth, k = n.strideHeight, D = n.strideWidth, T = w - 1 - n.padInfo.top, I = b - 1 - n.padInfo.left, A = _ / E, M = 0; M < x; ++M)
					for (var F = 0; F < E; ++F)
						for (var O = 0; O < C; ++O)
							for (var P = O - T, B = Math.max(0, Math.ceil(P / k)), L = Math.min(R, (w + P) / k), W = 0; W < S; ++W) {
								for (var z = W - I, U = Math.max(0, Math.ceil(z / D)), V = Math.min(N, (b + z) / D), G = 0, H = B; H < L; ++H)
									for (var q = H * k - P, j = U; j < V; ++j)
										for (var $ = h * M + p * H + f * j, K = v * (w - 1 - q) + g * (b - 1 - (j * D - z)) + y * F, X = 0; X < A; ++X)
											G += c[$ + (F * A + X)] * d[K + X];
								o[a * M + s * O + u * W + F] = G
							}
				return r.toTensor()
			}
			,
			t.prototype.depthwiseConv2DDerFilter = function(t, e, n) {
				this.assertNotComplex([t, e], "depthwiseConv2DDerFilter");
				for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = ii(n.filterShape, "float32"), u = n.padInfo.left, c = n.padInfo.top, l = n.outChannels / n.inChannels, h = 0; h < i; ++h)
					for (var p = Math.max(0, Math.ceil((c - h) / r)), f = Math.min(n.outHeight, (n.inHeight + c - h) / r), d = 0; d < a; ++d)
						for (var m = Math.max(0, Math.ceil((u - d) / o)), v = Math.min(n.outWidth, (n.inWidth + u - d) / o), g = 0; g < n.outChannels; ++g) {
							for (var y = Math.trunc(g / l), x = g % l, w = 0, b = 0; b < n.batchSize; ++b)
								for (var E = p; E < f; ++E)
									for (var C = h + E * r - c, S = m; S < v; ++S) {
										var _ = d + S * o - u;
										w += t.get(b, C, _, y) * e.get(b, E, S, g)
									}
							s.set(w, h, d, y, x)
						}
				return s.toTensor()
			}
			,
			t.prototype.tile = function(t, e) {
				this.assertNotComplex(t, "tile");
				for (var n = new Array(t.rank), r = 0; r < n.length; r++)
					n[r] = t.shape[r] * e[r];
				var o = ii(n, t.dtype)
					, i = t.buffer();
				for (r = 0; r < o.values.length; ++r) {
					for (var a = o.indexToLoc(r), s = new Array(t.rank), u = 0; u < s.length; u++)
						s[u] = a[u] % t.shape[u];
					var c = i.locToIndex(s);
					o.values[r] = i.values[c]
				}
				return o.toTensor()
			}
			,
			t.prototype.pad = function(n, t, e) {
				this.assertNotComplex(n, "pad");
				var r = t.map(function(t, e) {
					return t[0] + n.shape[e] + t[1]
				})
					, o = t.map(function(t) {
					return t[0]
				})
					, i = n.buffer()
					, a = ii(r, n.dtype);
				0 !== e && a.values.fill(e);
				for (var s = 0; s < n.size; s++) {
					var u = i.indexToLoc(s)
						, c = u.map(function(t, e) {
						return t + o[e]
					});
					a.set.apply(a, [n.get.apply(n, u)].concat(c))
				}
				return a.toTensor()
			}
			,
			t.prototype.transpose = function(t, e) {
				this.assertNotComplex(t, "transpose");
				for (var n = new Array(t.rank), r = 0; r < n.length; r++)
					n[r] = t.shape[e[r]];
				var o = t.dataSync()
					, i = ii(n, t.dtype)
					, a = t.buffer();
				for (r = 0; r < t.size; ++r) {
					for (var s = a.indexToLoc(r), u = new Array(s.length), c = 0; c < u.length; c++)
						u[c] = s[e[c]];
					var l = i.locToIndex(u);
					i.values[l] = o[r]
				}
				return i.toTensor()
			}
			,
			t.prototype.gather = function(t, e, n) {
				this.assertNotComplex([t, e], "gather");
				var r = t.shape.slice()
					, o = e.dataSync();
				r[n] = o.length;
				for (var i = ii(r, t.dtype), a = t.buffer(), s = 0; s < i.size; ++s) {
					var u = i.indexToLoc(s)
						, c = u.slice();
					c[n] = o[u[n]];
					var l = a.locToIndex(c);
					i.values[s] = a.values[l]
				}
				return i.toTensor()
			}
			,
			t.prototype.batchToSpaceND = function(t, e, n) {
				this.assertNotComplex([t], "batchToSpaceND");
				var r = e.reduce(function(t, e) {
					return t * e
				})
					, o = jt(t.shape, e, r)
					, i = $t(o.length, e.length)
					, a = Kt(t.shape, e, r)
					, s = Xt(n, e.length)
					, u = Yt(a, n, e.length);
				return t.reshape(o).transpose(i).reshape(a).slice(s, u)
			}
			,
			t.prototype.spaceToBatchND = function(t, e, n) {
				this.assertNotComplex([t], "spaceToBatchND");
				var r = e.reduce(function(t, e) {
					return t * e
				})
					, o = [[0, 0]];
				o.push.apply(o, n);
				for (var i = 1 + e.length; i < t.shape.length; ++i)
					o.push([0, 0]);
				var a = t.pad(o)
					, s = jt(a.shape, e, r, !1)
					, u = $t(s.length, e.length, !1)
					, c = Kt(a.shape, e, r, !1);
				return a.reshape(s).transpose(u).reshape(c)
			}
			,
			t.prototype.pool = function(t, e, n) {
				this.assertNotComplex(t, "pool");
				for (var r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = "max" === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, p = t.dataSync(), f = ii(e.outShape, t.dtype), d = f.values, m = e.outShape[1] * e.outShape[2] * e.outShape[3], v = e.outShape[2] * e.outShape[3], g = e.outShape[3], y = 0; y < e.batchSize; ++y)
					for (var x = y * m, w = y * t.strides[0], b = 0; b < e.inChannels; ++b)
						for (var E = 0; E < e.outHeight; ++E)
							for (var C = E * r - c, S = Math.max(0, C), _ = Math.min(e.inHeight, s + C), R = x + E * v, N = 0; N < e.outWidth; ++N) {
								for (var k = N * o - l, D = Math.max(0, k), T = Math.min(e.inWidth, u + k), I = h, A = 0, M = 0, F = S; F < _; F += i) {
									for (var O = w + F * t.strides[1], P = D; P < T; P += a) {
										var B = p[O + P * t.strides[2] + b];
										"max" === n && I < B ? I = B : "avg" === n && (A += B,
											M++)
									}
									if (isNaN(I))
										break
								}
								d[R + N * g + b] = "avg" === n ? A / M : I
							}
				return f.toTensor()
			}
			,
			t.prototype.maxPool = function(t, e) {
				return this.pool(t, e, "max")
			}
			,
			t.prototype.maxPoolPositions = function(t, e) {
				for (var n = ii(e.outShape, "int32"), r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = 0; h < e.batchSize; ++h)
					for (var p = 0; p < e.inChannels; ++p)
						for (var f = 0; f < e.outHeight; ++f) {
							for (var d = f * r - c, m = d; m < 0; )
								m += i;
							for (var v = Math.min(e.inHeight, s + d), g = 0; g < e.outWidth; ++g) {
								for (var y = g * o - l, x = y; x < 0; )
									x += a;
								for (var w = Math.min(e.inWidth, u + y), b = Number.NEGATIVE_INFINITY, E = -1, C = m; C < v; C += i)
									for (var S = C - d, _ = x; _ < w; _ += a) {
										var R = _ - y
											, N = t.get(h, C, _, p);
										b < N && (b = N,
											E = S * u + R)
									}
								n.set(E, h, f, g, p)
							}
						}
				return n.toTensor()
			}
			,
			t.prototype.maxPoolBackprop = function(t, e, n, r) {
				this.assertNotComplex([e, n], "maxPoolBackprop");
				for (var o = this.maxPoolPositions(e, r), i = r.strideHeight, a = r.strideWidth, s = r.dilationHeight, u = r.dilationWidth, c = r.effectiveFilterHeight, l = r.effectiveFilterWidth, h = l - 1 - r.padInfo.left, p = c - 1 - r.padInfo.top, f = ii(e.shape, "float32"), d = 0; d < r.batchSize; ++d)
					for (var m = 0; m < r.inChannels; ++m)
						for (var v = 0; v < r.inHeight; ++v)
							for (var g = 0; g < r.inWidth; ++g) {
								for (var y = v - p, x = g - h, w = 0, b = 0; b < c; b += s) {
									var E = (y + b) / i;
									if (!(E < 0 || E >= r.outHeight || Math.floor(E) !== E))
										for (var C = 0; C < l; C += u) {
											var S = (x + C) / a;
											if (!(S < 0 || S >= r.outWidth || Math.floor(S) !== S)) {
												var _ = c * l - 1 - o.get(d, E, S, m) === b * l + C ? 1 : 0;
												0 !== _ && (w += t.get(d, E, S, m) * _)
											}
										}
								}
								f.set(w, d, v, g, m)
							}
				return f.toTensor()
			}
			,
			t.prototype.avgPoolBackprop = function(t, e, n) {
				this.assertNotComplex([t, e], "avgPoolBackprop");
				for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, h = l - 1 - n.padInfo.left, p = c - 1 - n.padInfo.top, f = ii(e.shape, "float32"), d = 1 / (i * a), m = 0; m < n.batchSize; ++m)
					for (var v = 0; v < n.inChannels; ++v)
						for (var g = 0; g < n.inHeight; ++g)
							for (var y = 0; y < n.inWidth; ++y) {
								for (var x = g - p, w = y - h, b = 0, E = 0; E < c; E += s) {
									var C = (x + E) / r;
									if (!(C < 0 || C >= n.outHeight || Math.floor(C) !== C))
										for (var S = 0; S < l; S += u) {
											var _ = (w + S) / o;
											_ < 0 || _ >= n.outWidth || Math.floor(_) !== _ || (b += t.get(m, C, _, v))
										}
								}
								f.set(b * d, m, g, y, v)
							}
				return f.toTensor()
			}
			,
			t.prototype.cast = function(t, e) {
				return ze(t, e, this)
			}
			,
			t.prototype.reshape = function(t, e) {
				return Ue(t, e)
			}
			,
			t.prototype.avgPool = function(t, e) {
				return this.assertNotComplex(t, "avgPool"),
					this.pool(t, e, "avg").toFloat()
			}
			,
			t.prototype.resizeBilinear = function(t, e, n, r) {
				this.assertNotComplex(t, "resizeBilinear");
				for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = t.dataSync(), l = new Float32Array(L([i, e, n, u])), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], f = 0, d = h[0] / p[0], m = h[1] / p[1], v = 0; v < i; v++)
					for (var g = 0; g < e; g++)
						for (var y = d * g, x = Math.floor(y), w = y - x, b = Math.min(a - 1, Math.ceil(y)), E = v * t.strides[0] + x * t.strides[1], C = v * t.strides[0] + b * t.strides[1], S = 0; S < n; S++)
							for (var _ = m * S, R = Math.floor(_), N = _ - R, k = Math.min(s - 1, Math.ceil(_)), D = E + R * t.strides[2], T = C + R * t.strides[2], I = E + +k * t.strides[2], A = C + k * t.strides[2], M = 0; M < u; M++) {
								var F = c[D + M]
									, O = c[T + M]
									, P = F + (c[I + M] - F) * N
									, B = P + (O + (c[A + M] - O) * N - P) * w;
								l[f++] = B
							}
				return Ce(l, [i, e, n, u])
			}
			,
			t.prototype.resizeBilinearBackprop = function(t, e, n) {
				this.assertNotComplex([t, e], "resizeBilinearBackprop");
				for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), p = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], f = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], d = p[0] / f[0], m = p[1] / f[1], v = t.dataSync(), g = 0, y = 0; y < o; y++)
					for (var x = y * e.strides[0], w = 0; w < c; w++)
						for (var b = w * d, E = Math.floor(b), C = Math.min(Math.ceil(b), i - 1), S = x + E * e.strides[1], _ = x + C * e.strides[1], R = b - E, N = 1 - R, k = 0; k < l; k++)
							for (var D = k * m, T = Math.floor(D), I = Math.min(Math.ceil(D), a - 1), A = D - T, M = 1 - A, F = S + T * e.strides[2], O = S + I * e.strides[2], P = _ + T * e.strides[2], B = _ + I * e.strides[2], L = N * M, W = N * A, z = R * M, U = R * A, V = 0; V < s; V++) {
								var G = v[g++];
								h[F + V] += G * L,
									h[O + V] += G * W,
									h[P + V] += G * z,
									h[B + V] += G * U
							}
				return ke(h, [o, a, i, s], e.dtype)
			}
			,
			t.prototype.resizeNearestNeighbor = function(t, e, n, r) {
				this.assertNotComplex(t, "resizeNearestNeighbor");
				for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = t.dataSync(), l = new Float32Array(i * e * n * u), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], f = h[0] / p[0], d = h[1] / p[1], m = 0, v = 0; v < i; v++)
					for (var g = v * t.strides[0], y = 0; y < e; y++)
						for (var x = f * y, w = g + Math.min(a - 1, r ? Math.round(x) : Math.floor(x)) * t.strides[1], b = 0; b < n; b++)
							for (var E = d * b, C = w + Math.min(s - 1, r ? Math.round(E) : Math.floor(E)) * t.strides[2], S = 0; S < u; S++) {
								var _ = c[C + S];
								l[m++] = _
							}
				return Ce(l, [i, e, n, u], t.dtype)
			}
			,
			t.prototype.resizeNearestNeighborBackprop = function(t, e, n) {
				this.assertNotComplex([t, e], "resizeNearestNeighborBackprop");
				for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), p = t.dataSync(), f = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], d = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], m = f[0] / d[0], v = f[1] / d[1], g = 1 / m, y = 1 / v, x = 2 * Math.ceil(g) + 2, w = 2 * Math.ceil(y) + 2, b = 0; b < o; b++)
					for (var E = b * e.strides[0], C = 0; C < i; C++)
						for (var S = E + C * e.strides[1], _ = Math.floor(C * g), R = Math.floor(_ - x / 2), N = 0; N < a; N++)
							for (var k = S + N * e.strides[2], D = Math.floor(N * y), T = Math.floor(D - w / 2), I = 0; I < s; I++) {
								for (var A = 0, M = 0; M < x; M++) {
									var F = M + R;
									if (!(F < 0 || c <= F)) {
										var O = E + F * t.strides[1]
											, P = F * m;
										if (C === Math.min(i - 1, n ? Math.round(P) : Math.floor(P)))
											for (var B = 0; B < w; B++) {
												var L = B + T;
												if (!(L < 0 || l <= L)) {
													var W = O + L * t.strides[2]
														, z = L * v;
													N === Math.min(a - 1, n ? Math.round(z) : Math.floor(z)) && (A += p[W + I])
												}
											}
									}
								}
								h[k + I] = A
							}
				return ke(h, e.shape, e.dtype)
			}
			,
			t.prototype.batchNormalization = function(t, e, n, r, o, i) {
				this.assertNotComplex([t, e, n, o, i], "batchNormalization");
				for (var a = t.dataSync(), s = e.dataSync(), u = n.dataSync(), c = o ? o.dataSync() : new Float32Array([1]), l = i ? i.dataSync() : new Float32Array([0]), h = new Float32Array(a.length), p = l.length, f = c.length, d = u.length, m = s.length, v = 0, g = 0, y = 0, x = 0, w = 0; w < a.length; ++w)
					h[w] = l[v++] + (a[w] - s[g++]) * c[y++] / Math.sqrt(u[x++] + r),
					p <= v && (v = 0),
					m <= g && (g = 0),
					f <= y && (y = 0),
					d <= x && (x = 0);
				return ke(h, t.shape)
			}
			,
			t.prototype.localResponseNormalization4D = function(t, a, e, n, r) {
				this.assertNotComplex(t, "localResponseNormalization4D");
				var s = t.shape[3]
					, u = s - 1
					, c = t.dataSync()
					, o = L(t.shape)
					, i = new Float32Array(o);
				function l(t) {
					for (var e = t % s, n = t - e + Math.max(0, e - a), r = t - e + Math.min(e + a, u), o = 0; n <= r; n++) {
						var i = c[n];
						o += i * i
					}
					return o
				}
				for (var h = 0; h < o; h++) {
					var p = l(h)
						, f = c[h] * Math.pow(e + n * p, -r);
					i[h] = f
				}
				return ke(i, t.shape)
			}
			,
			t.prototype.LRNGrad = function(t, e, n, r, o, i, a) {
				this.assertNotComplex(t, "LRNGrad");
				for (var s = t.shape[3], u = t.dataSync(), c = e.dataSync(), l = n.dataSync(), h = new Float32Array(L(t.shape)), p = L(t.shape), f = 0; f < p; f++) {
					for (var d = f % s, m = f - d + Math.max(0, d - r), v = f - d + Math.min(s, d + r + 1), g = 0, y = m; y < v; y++)
						g += Math.pow(c[y], 2);
					for (g = i * g + o,
						     y = m; y < v; y++) {
						var x = -2 * i * a * c[y] * l[f] / g;
						f === y && (x += Math.pow(g, -a)),
							x *= u[f],
							h[y] += x
					}
				}
				return ke(h, t.shape)
			}
			,
			t.prototype.multinomial = function(t, e, n, r) {
				this.assertNotComplex(t, "multinomial");
				for (var o = e ? t : ye(t), i = o.shape[0], a = o.shape[1], s = Ae([i, n], "int32"), u = s.dataSync(), c = o.dataSync(), l = 0; l < i; ++l) {
					var h = l * a
						, p = new Float32Array(a - 1);
					p[0] = c[h];
					for (var f = 1; f < p.length; ++f)
						p[f] = p[f - 1] + c[h + f];
					for (var d = ni(r.toString()), m = l * n, v = 0; v < n; ++v) {
						var g = d();
						u[m + v] = p.length;
						for (var y = 0; y < p.length; y++)
							if (g < p[y]) {
								u[m + v] = y;
								break
							}
					}
				}
				return s
			}
			,
			t.prototype.oneHot = function(t, e, n, r) {
				this.assertNotComplex(t, "oneHot");
				var o = new Float32Array(t.size * e);
				o.fill(r);
				for (var i = 0; i < t.size; ++i)
					0 <= t.get(i) && t.get(i) < e && (o[i * e + t.get(i)] = n);
				return Re(o, [t.size, e], "int32")
			}
			,
			t.prototype.nonMaxSuppression = function(t, e, n, r, o) {
				return this.assertNotComplex(t, "nonMaxSuppression"),
					He(t.dataSync(), e.dataSync(), n, r, o)
			}
			,
			t.prototype.fft = function(t) {
				return this.fftBatch(t, !1)
			}
			,
			t.prototype.ifft = function(t) {
				return this.fftBatch(t, !0)
			}
			,
			t.prototype.fftBatch = function(t, e) {
				for (var n = t.shape[0], r = t.shape[1], o = ii(t.shape, "float32"), i = ii(t.shape, "float32"), a = be(t).as2D(n, r), s = Ee(t).as2D(n, r), u = 0; u < n; u++)
					for (var c = a.slice([u, 0], [1, r]), l = s.slice([u, 0], [1, r]), h = we(c, l), p = this.fftImpl(h, e).dataSync(), f = 0; f < r; f++) {
						var d = Ge(p, f);
						o.values[u * r + f] = d.real,
							i.values[u * r + f] = d.imag
					}
				return we(o.toTensor(), i.toTensor()).as2D(n, r)
			}
			,
			t.prototype.fftImpl = function(t, e) {
				var n = t.as1D()
					, r = n.size;
				if (this.isExponentOf2(r)) {
					var o = this.fftRadix2(n, r, e).as2D(t.shape[0], t.shape[1]);
					return e && (o = we(be(o).div(Se(r)), Ee(o).div(Se(r)))),
						o
				}
				var i = t.dataSync()
					, a = function(t) {
					for (var e = new Float32Array(t.length / 2), n = new Float32Array(t.length / 2), r = 0; r < t.length; r += 2)
						e[r / 2] = t[r],
							n[r / 2] = t[r + 1];
					return {
						real: e,
						imag: n
					}
				}(this.fourierTransformByMatmul(i, r, e));
				return we(a.real, a.imag).as2D(t.shape[0], t.shape[1])
			}
			,
			t.prototype.isExponentOf2 = function(t) {
				return 0 == (t & t - 1)
			}
			,
			t.prototype.fftRadix2 = function(t, e, n) {
				if (1 === e)
					return t;
				var r = t.dataSync()
					, o = e / 2
					, i = function(t) {
					for (var e = Math.ceil(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 0; o < t.length; o += 4)
						n[Math.floor(o / 4)] = t[o],
							r[Math.floor(o / 4)] = t[o + 1];
					return {
						real: n,
						imag: r
					}
				}(r)
					, a = we(i.real, i.imag).as1D()
					, s = function(t) {
					for (var e = Math.floor(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 2; o < t.length; o += 4)
						n[Math.floor(o / 4)] = t[o],
							r[Math.floor(o / 4)] = t[o + 1];
					return {
						real: n,
						imag: r
					}
				}(r)
					, u = we(s.real, s.imag).as1D();
				a = this.fftRadix2(a, o, n),
					u = this.fftRadix2(u, o, n);
				var c = function(t, e) {
					for (var n = new Float32Array(t / 2), r = new Float32Array(t / 2), o = 0; o < Math.ceil(t / 2); o++) {
						var i = (e ? 2 : -2) * Math.PI * (o / t);
						n[o] = Math.cos(i),
							r[o] = Math.sin(i)
					}
					return {
						real: n,
						imag: r
					}
				}(e, n)
					, l = we(c.real, c.imag).mul(u)
					, h = a.add(l)
					, p = a.sub(l)
					, f = be(h).concat(be(p))
					, d = Ee(h).concat(Ee(p));
				return we(f, d).as1D()
			}
			,
			t.prototype.fourierTransformByMatmul = function(t, e, n) {
				for (var r = new Float32Array(2 * e), o = 0; o < e; o++) {
					for (var i = 0, a = 0, s = 0; s < e; s++) {
						var u = (d = o * s,
							m = e,
							void 0,
							v = (n ? 2 : -2) * Math.PI * (d / m),
							{
								real: Math.cos(v),
								imag: Math.sin(v)
							})
							, c = Ge(t, s);
						i += c.real * u.real - c.imag * u.imag,
							a += c.real * u.imag + c.imag * u.real
					}
					n && (i /= e,
						a /= e),
						h = i,
						p = a,
						(l = r)[2 * (f = o)] = h,
						l[2 * f + 1] = p
				}
				var l, h, p, f, d, m, v;
				return r
			}
			,
			t.prototype.depthToSpace = function(t, e, n) {
				A("NHWC" === n, "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + n),
					A(1 < e, "blockSize should be > 1 for depthToSpace, but was: " + e);
				for (var r = t.shape[0], o = t.shape[1], i = t.shape[2], a = t.shape[3], s = o * e, u = i * e, c = a / (e * e), l = t.dataSync(), h = new Float32Array(r * s * u * c), p = 0, f = 0; f < r; ++f)
					for (var d = 0; d < s; ++d)
						for (var m = Math.floor(d / e), v = d % e, g = 0; g < u; ++g)
							for (var y = Math.floor(g / e), x = (v * e + g % e) * c, w = 0; w < c; ++w) {
								var b = w + x + a * (y + i * (m + o * f));
								h[p++] = l[b]
							}
				return ke(h, [r, s, u, c])
			}
			,
			t.prototype.broadcastedBinaryOp = function(a, s, t, u) {
				var e = Je(a.shape, s.shape)
					, c = ii(e, t)
					, l = a.dataSync()
					, h = s.dataSync()
					, p = Ye(a.shape, e)
					, f = Ye(s.shape, e)
					, d = c.values;
				if (p.length + f.length === 0)
					for (var n = 0; n < d.length; ++n)
						d[n] = u(l[n % l.length], h[n % h.length]);
				else {
					var m = a.buffer()
						, v = s.buffer()
						, r = function(t) {
						var e = c.indexToLoc(t)
							, n = e.slice(-a.rank);
						p.forEach(function(t) {
							return n[t] = 0
						});
						var r = m.locToIndex(n)
							, o = e.slice(-s.rank);
						f.forEach(function(t) {
							return o[t] = 0
						});
						var i = v.locToIndex(o);
						d[t] = u(l[r], h[i])
					};
					for (n = 0; n < d.length; ++n)
						r(n)
				}
				return c.toTensor()
			}
			,
			t.prototype.broadcastedBinaryComplexOp = function(s, u, c) {
				var t = Je(s.shape, u.shape)
					, l = ii(t, "float32")
					, e = ii(t, "float32")
					, h = s.dataSync()
					, p = u.dataSync()
					, f = Ye(s.shape, t)
					, d = Ye(u.shape, t)
					, m = l.values
					, v = e.values;
				if (f.length + d.length === 0)
					for (var n = 0; n < m.length; n++) {
						var r = n % h.length
							, o = n % p.length
							, i = c(h[2 * r], h[2 * r + 1], p[2 * o], p[2 * o + 1]);
						m[n] = i.real,
							v[n] = i.imag
					}
				else {
					var g = this.data.get(s.dataId).complexTensors.real.buffer()
						, y = this.data.get(u.dataId).complexTensors.real.buffer()
						, a = function(t) {
						var e = l.indexToLoc(t)
							, n = e.slice(-s.rank);
						f.forEach(function(t) {
							return n[t] = 0
						});
						var r = g.locToIndex(n)
							, o = e.slice(-u.rank);
						d.forEach(function(t) {
							return o[t] = 0
						});
						var i = y.locToIndex(o)
							, a = c(h[2 * r], h[2 * r + 1], p[2 * i], p[2 * i + 1]);
						m[t] = a.real,
							v[t] = a.imag
					};
					for (n = 0; n < m.length; n++)
						a(n)
				}
				return this.complex(l.toTensor(), e.toTensor())
			}
			,
			t.prototype.split = function(t, e, n) {
				return je(t, e, n)
			}
			,
			t.prototype.dispose = function() {}
			,
			t.prototype.floatPrecision = function() {
				return 32
			}
			,
			t.prototype.cropAndResize = function(t, e, n, r, o, i) {
				for (var a = t.shape, s = a[0], u = a[1], c = a[2], l = a[3], h = e.shape[0], p = r[0], f = r[1], d = ii([h, p, f, l], t.dtype), m = e.dataSync(), v = n.dataSync(), g = t.dataSync(), y = t.strides, x = d.strides, w = 0; w < h; w++) {
					var b = 4 * w
						, E = m[b]
						, C = m[b + 1]
						, S = m[b + 2]
						, _ = m[b + 3]
						, R = v[w];
					if (!(s <= R))
						for (var N = 1 < p ? (S - E) * (u - 1) / (p - 1) : 0, k = 1 < f ? (_ - C) * (c - 1) / (f - 1) : 0, D = 0; D < p; D++) {
							var T = 1 < p ? E * (u - 1) + D * N : .5 * (E + S) * (u - 1);
							if (T < 0 || u - 1 < T)
								for (var I = 0; I < f; I++)
									for (var A = 0; A < l; A++) {
										var M = A + I * x[2] + D * x[1] + w * x[0];
										d.values[M] = i
									}
							else if ("bilinear" === o) {
								var F = Math.floor(T)
									, O = Math.ceil(T)
									, P = T - F;
								for (I = 0; I < f; I++)
									if ((q = 1 < f ? C * (c - 1) + I * k : .5 * (C + _) * (c - 1)) < 0 || c - 1 < q)
										for (A = 0; A < l; A++)
											M = A + I * x[2] + D * x[1] + w * x[0],
												d.values[M] = i;
									else {
										var B = Math.floor(q)
											, L = Math.ceil(q)
											, W = q - B;
										for (A = 0; A < l; A++) {
											var z = g[M = A + B * y[2] + F * y[1] + R * y[0]]
												, U = g[M = A + L * y[2] + F * y[1] + R * y[0]]
												, V = g[M = A + B * y[2] + O * y[1] + R * y[0]]
												, G = z + (U - z) * W
												, H = V + (g[M = A + L * y[2] + O * y[1] + R * y[0]] - V) * W;
											M = A + I * x[2] + D * x[1] + w * x[0],
												d.values[M] = G + (H - G) * P
										}
									}
							} else
								for (I = 0; I < f; ++I) {
									var q;
									if ((q = 1 < f ? C * (c - 1) + I * k : .5 * (C + _) * (c - 1)) < 0 || c - 1 < q)
										for (A = 0; A < l; A++)
											M = A + I * x[2] + D * x[1] + w * x[0],
												d.values[M] = i;
									else {
										var j = Math.round(q)
											, $ = Math.round(T);
										for (A = 0; A < l; A++) {
											var K = A + j * y[2] + $ * y[1] + R * y[0]
												, X = A + I * x[2] + D * x[1] + w * x[0];
											d.values[X] = g[K]
										}
									}
								}
						}
				}
				return d.toTensor()
			}
			,
			t.prototype.sparseToDense = function(t, e, n, r) {
				var o = ce(0, t, n)
					, i = o.sliceRank
					, a = o.numUpdates
					, s = o.sliceSize
					, u = o.strides
					, c = o.outputSize;
				return this.scatter(t, e, n, c, s, a, i, u, r, !1)
			}
			,
			t.prototype.gatherND = function(t, e) {
				var n = e.shape
					, r = n[n.length - 1]
					, o = ae(t, e)
					, i = o[0]
					, a = o[1]
					, s = o[2]
					, u = o[3];
				if (0 === a)
					return Ce([], i, t.dtype);
				for (var c = new et([a, s],t.dtype), l = e.dataSync(), h = t.dataSync(), p = 0; p < a; p++) {
					for (var f = [], d = 0, m = 0; m < r; m++) {
						var v = l[p * r + m];
						d += v * u[m],
							f.push(v)
					}
					if (d < 0 || d >= t.size / s)
						throw new Error("Invalid indices: " + f + " does not index into " + t.shape);
					for (var g = 0; g < s; g++)
						c.values[p * s + g] = h[d * s + g]
				}
				return c.toTensor().reshape(i)
			}
			,
			t.prototype.scatterND = function(t, e, n) {
				var r = ce(0, t, n)
					, o = r.sliceRank
					, i = r.numUpdates
					, a = r.sliceSize
					, s = r.strides
					, u = r.outputSize
					, c = Se(0);
				return this.scatter(t, e, n, u, a, i, o, s, c, !0)
			}
			,
			t.prototype.scatter = function(t, e, n, r, o, i, a, s, u, c) {
				var l = [r / o, o]
					, h = t.dataSync()
					, p = e.dataSync();
				if (0 === r)
					return Ce([], n, e.dtype);
				var f = new et(l,e.dtype);
				f.values.fill(u.dataSync()[0]);
				for (var d = 0; d < i; d++) {
					for (var m = [], v = 0, g = 0; g < a; g++) {
						var y = h[d * a + g];
						m.push(y),
							v += y * s[g]
					}
					if (v < 0 || r / o <= v)
						throw new Error("Invalid indices: " + m + " does not index into " + n);
					for (var x = 0; x < o; x++)
						c ? f.values[v * o + x] += p[d * o + x] : f.values[v * o + x] = 0 === e.rank ? p[0] : p[d * o + x]
				}
				return f.toTensor().reshape(n)
			}
			,
			t
	}();
	Ot.registerBackend("cpu", function() {
		return new Ku
	}, 1, ot);
	var Xu = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setImmediate;
	var Yu = {
		float32: 4,
		int32: 4,
		uint16: 2,
		uint8: 1,
		bool: 1
	};
	function Qu(p, t) {
		for (var f = {}, d = 0, e = function(t) {
			var e = t.name
				, n = t.dtype
				, r = t.shape
				, o = L(r)
				, i = void 0;
			if ("quantization"in t) {
				var a = t.quantization;
				if ("uint8" !== a.dtype && "uint16" !== a.dtype)
					throw new Error("Weight " + t.name + " has unknown quantization dtype " + a.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
				var s = Yu[a.dtype]
					, u = p.slice(d, d + o * s)
					, c = "uint8" === a.dtype ? new Uint8Array(u) : new Uint16Array(u);
				if ("float32" === n)
					i = Float32Array.from(c, function(t) {
						return t * a.scale + a.min
					});
				else {
					if ("int32" !== n)
						throw new Error("Unsupported dtype in weight '" + e + "': " + n);
					i = Int32Array.from(c, function(t) {
						return Math.round(t * a.scale + a.min)
					})
				}
				d += o * s
			} else {
				var l = Yu[n];
				if (u = p.slice(d, d + o * l),
				"float32" === n)
					i = new Float32Array(u);
				else if ("int32" === n)
					i = new Int32Array(u);
				else {
					if ("bool" !== n)
						throw new Error("Unsupported dtype in weight '" + e + "': " + n);
					i = new Uint8Array(u)
				}
				d += o * l
			}
			var h = void 0;
			if ("float32" === n)
				h = Ce(i, r, "float32");
			else if ("int32" === n)
				h = Ce(i, r, "int32");
			else {
				if ("bool" !== n)
					throw new Error("Unsupported dtype in weight '" + e + "': " + n);
				h = Ce(i, r, "bool")
			}
			f[e] = h
		}, n = 0, r = t; n < r.length; n++)
			e(r[n]);
		return f
	}
	var Ju = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
	function Zu(t) {
		return Ju ? Buffer.byteLength(t) : new Blob([t]).size
	}
	function tc(t) {
		var e = 0;
		t.forEach(function(t) {
			e += t.byteLength
		});
		var n = new Uint8Array(e)
			, r = 0;
		return t.forEach(function(t) {
			n.set(new Uint8Array(t), r),
				r += t.byteLength
		}),
			n.buffer
	}
	function ec(t) {
		for (t = t.trim(); t.endsWith("/"); )
			t = t.slice(0, t.length - 1);
		var e = t.split("/");
		return e[e.length - 1]
	}
	function nc(t) {
		if (t.modelTopology instanceof ArrayBuffer)
			throw new Error("Expected JSON model topology, received ArrayBuffer.");
		return {
			dateSaved: new Date,
			modelTopologyType: "JSON",
			modelTopologyBytes: null == t.modelTopology ? 0 : Zu(JSON.stringify(t.modelTopology)),
			weightSpecsBytes: null == t.weightSpecs ? 0 : Zu(JSON.stringify(t.weightSpecs)),
			weightDataBytes: null == t.weightData ? 0 : t.weightData.byteLength
		}
	}
	var rc = function() {
		function e() {
			this.saveRouters = [],
				this.loadRouters = []
		}
		return e.getInstance = function() {
			return null == e.instance && (e.instance = new e),
				e.instance
		}
			,
			e.registerSaveRouter = function(t) {
				e.getInstance().saveRouters.push(t)
			}
			,
			e.registerLoadRouter = function(t) {
				e.getInstance().loadRouters.push(t)
			}
			,
			e.getSaveHandlers = function(t) {
				return e.getHandlers(t, "save")
			}
			,
			e.getLoadHandlers = function(t) {
				return e.getHandlers(t, "load")
			}
			,
			e.getHandlers = function(n, t) {
				var r = [];
				return ("load" === t ? this.getInstance().loadRouters : this.getInstance().saveRouters).forEach(function(t) {
					var e = t(n);
					null !== e && r.push(e)
				}),
					r
			}
			,
			e
	}()
		, oc = "://"
		, ic = function() {
		function r() {
			this.managers = {}
		}
		return r.getInstance = function() {
			return null == r.instance && (r.instance = new r),
				r.instance
		}
			,
			r.registerManager = function(t, e) {
				A(null != t, "scheme must not be undefined or null."),
				t.endsWith(oc) && (t = t.slice(0, t.indexOf(oc))),
					A(0 < t.length, "scheme must not be an empty string.");
				var n = r.getInstance();
				A(null == n.managers[t], "A model store manager is already registered for scheme '" + t + "'."),
					n.managers[t] = e
			}
			,
			r.getManager = function(t) {
				var e = this.getInstance().managers[t];
				if (null == e)
					throw new Error("Cannot find model manager for scheme '" + t + "'");
				return e
			}
			,
			r.getSchemes = function() {
				return Object.keys(this.getInstance().managers)
			}
			,
			r
	}();
	function ac(t) {
		if (-1 === t.indexOf(oc))
			throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + ic.getSchemes().join(","));
		return {
			scheme: t.split(oc)[0],
			path: t.split(oc)[1]
		}
	}
	function sc(l, h, p) {
		return void 0 === p && (p = !1),
			m(this, void 0, void 0, function() {
				var e, n, r, o, i, a, s, u, c;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							return A(l !== h, "Old path and new path are the same: '" + l + "'"),
								A(0 < (e = rc.getLoadHandlers(l)).length, "Copying failed because no load handler is found for source URL " + l + "."),
								A(e.length < 2, "Copying failed because more than one (" + e.length + ") load handlers for source URL " + l + "."),
								n = e[0],
								A(0 < (r = rc.getSaveHandlers(h)).length, "Copying failed because no save handler is found for destination URL " + h + "."),
								A(r.length < 2, "Copying failed because more than one (" + e.length + ") save handlers for destination URL " + h + "."),
								o = r[0],
								i = ac(l).scheme,
								a = ac(l).path,
								s = i === ac(l).scheme,
								[4, n.load()];
						case 1:
							return u = t.sent(),
								p && s ? [4, ic.getManager(i).removeModel(a)] : [3, 3];
						case 2:
							t.sent(),
								t.label = 3;
						case 3:
							return [4, o.save(u)];
						case 4:
							return c = t.sent(),
								!p || s ? [3, 6] : [4, ic.getManager(i).removeModel(a)];
						case 5:
							t.sent(),
								t.label = 6;
						case 6:
							return [2, c.modelArtifactsInfo]
					}
				})
			})
	}
	var uc = "tensorflowjs"
		, cc = "models_store"
		, lc = "model_info_store";
	function hc() {
		if (!Ot.get("IS_BROWSER"))
			throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
		var t = window
			, e = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB || t.shimIndexedDB;
		if (null == e)
			throw new Error("The current browser does not appear to support IndexedDB.");
		return e
	}
	function pc(t) {
		var e = t.result;
		e.createObjectStore(cc, {
			keyPath: "modelPath"
		}),
			e.createObjectStore(lc, {
				keyPath: "modelPath"
			})
	}
	var fc = function() {
		function t(t) {
			if (this.indexedDB = hc(),
			null == t || !t)
				throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
			this.modelPath = t
		}
		return t.prototype.save = function(e) {
			return m(this, void 0, void 0, function() {
				return C(this, function(t) {
					if (e.modelTopology instanceof ArrayBuffer)
						throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
					return [2, this.databaseAction(this.modelPath, e)]
				})
			})
		}
			,
			t.prototype.load = function() {
				return m(this, void 0, void 0, function() {
					return C(this, function(t) {
						return [2, this.databaseAction(this.modelPath)]
					})
				})
			}
			,
			t.prototype.databaseAction = function(t, h) {
				var p = this;
				return new Promise(function(u, c) {
						var l = p.indexedDB.open(uc, 1);
						l.onupgradeneeded = function() {
							return pc(l)
						}
							,
							l.onsuccess = function() {
								var r = l.result;
								if (null == h) {
									var t = r.transaction(cc, "readonly")
										, e = t.objectStore(cc).get(p.modelPath);
									e.onsuccess = function() {
										if (null == e.result)
											return r.close(),
												c(new Error("Cannot find model with path '" + p.modelPath + "' in IndexedDB."));
										u(e.result.modelArtifacts)
									}
										,
										e.onerror = function(t) {
											return r.close(),
												c(e.error)
										}
										,
										t.oncomplete = function() {
											return r.close()
										}
								} else {
									var o, i = nc(h), a = r.transaction(lc, "readwrite"), s = a.objectStore(lc), n = s.put({
										modelPath: p.modelPath,
										modelArtifactsInfo: i
									});
									n.onsuccess = function() {
										var n = (o = r.transaction(cc, "readwrite")).objectStore(cc).put({
											modelPath: p.modelPath,
											modelArtifacts: h,
											modelArtifactsInfo: i
										});
										n.onsuccess = function() {
											return u({
												modelArtifactsInfo: i
											})
										}
											,
											n.onerror = function(t) {
												var e = (s = a.objectStore(lc)).delete(p.modelPath);
												e.onsuccess = function() {
													return r.close(),
														c(n.error)
												}
													,
													e.onerror = function(t) {
														return r.close(),
															c(n.error)
													}
											}
									}
										,
										n.onerror = function(t) {
											return r.close(),
												c(n.error)
										}
										,
										a.oncomplete = function() {
											null == o ? r.close() : o.oncomplete = function() {
												return r.close()
											}
										}
								}
							}
							,
							l.onerror = function(t) {
								return c(l.error)
							}
					}
				)
			}
			,
			t.URL_SCHEME = "indexeddb://",
			t
	}()
		, dc = function(t) {
		return Ot.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(fc.URL_SCHEME) ? (e = t.slice(fc.URL_SCHEME.length),
			new fc(e)) : null;
		var e
	};
	rc.registerSaveRouter(dc),
		rc.registerLoadRouter(dc);
	var mc = function() {
		function t() {
			this.indexedDB = hc()
		}
		return t.prototype.listModels = function() {
			return m(this, void 0, void 0, function() {
				var e = this;
				return C(this, function(t) {
					return [2, new Promise(function(i, n) {
							var r = e.indexedDB.open(uc, 1);
							r.onupgradeneeded = function() {
								return pc(r)
							}
								,
								r.onsuccess = function() {
									var e = r.result
										, t = e.transaction(lc, "readonly")
										, o = t.objectStore(lc).getAll();
									o.onsuccess = function() {
										for (var t = {}, e = 0, n = o.result; e < n.length; e++) {
											var r = n[e];
											t[r.modelPath] = r.modelArtifactsInfo
										}
										i(t)
									}
										,
										o.onerror = function(t) {
											return e.close(),
												n(o.error)
										}
										,
										t.oncomplete = function() {
											return e.close()
										}
								}
								,
								r.onerror = function(t) {
									return n(r.error)
								}
						}
					)]
				})
			})
		}
			,
			t.prototype.removeModel = function(u) {
				return m(this, void 0, void 0, function() {
					var n = this;
					return C(this, function(t) {
						return u = (e = u).startsWith(fc.URL_SCHEME) ? e.slice(fc.URL_SCHEME.length) : e,
							[2, new Promise(function(a, s) {
									var e = n.indexedDB.open(uc, 1);
									e.onupgradeneeded = function() {
										return pc(e)
									}
										,
										e.onsuccess = function() {
											var n, r = e.result, t = r.transaction(lc, "readwrite"), o = t.objectStore(lc), i = o.get(u);
											i.onsuccess = function() {
												if (null == i.result)
													return r.close(),
														s(new Error("Cannot find model with path '" + u + "' in IndexedDB."));
												var t = o.delete(u)
													, e = function() {
													var t = (n = r.transaction(cc, "readwrite")).objectStore(cc).delete(u);
													t.onsuccess = function() {
														return a(i.result.modelArtifactsInfo)
													}
														,
														t.onerror = function(t) {
															return s(i.error)
														}
												};
												t.onsuccess = e,
													t.onerror = function(t) {
														return e(),
															r.close(),
															s(i.error)
													}
											}
												,
												i.onerror = function(t) {
													return r.close(),
														s(i.error)
												}
												,
												t.oncomplete = function() {
													null == n ? r.close() : n.oncomplete = function() {
														return r.close()
													}
												}
										}
										,
										e.onerror = function(t) {
											return s(e.error)
										}
								}
							)];
						var e
					})
				})
			}
			,
			t
	}();
	if (Ot.get("IS_BROWSER"))
		try {
			ic.registerManager(fc.URL_SCHEME, new mc)
		} catch (t) {}
	var vc = "/"
		, gc = "tensorflowjs_models"
		, yc = "info"
		, xc = "model_topology"
		, wc = "weight_specs"
		, bc = "weight_data";
	function Ec(t) {
		return {
			info: [gc, t, yc].join(vc),
			topology: [gc, t, xc].join(vc),
			weightSpecs: [gc, t, wc].join(vc),
			weightData: [gc, t, bc].join(vc)
		}
	}
	function Cc(t) {
		var e = t.split(vc);
		if (e.length < 3)
			throw new Error("Invalid key format: " + t);
		return e.slice(1, e.length - 1).join(vc)
	}
	var Sc = function() {
		function t(t) {
			if (!Ot.get("IS_BROWSER") || void 0 === window.localStorage)
				throw new Error("The current environment does not support local storage.");
			if (this.LS = window.localStorage,
			null == t || !t)
				throw new Error("For local storage, modelPath must not be null, undefined or empty.");
			this.modelPath = t,
				this.keys = Ec(this.modelPath)
		}
		return t.prototype.save = function(a) {
			return m(this, void 0, void 0, function() {
				var n, r, o, i;
				return C(this, function(t) {
					if (a.modelTopology instanceof ArrayBuffer)
						throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
					n = JSON.stringify(a.modelTopology),
						r = JSON.stringify(a.weightSpecs),
						o = nc(a);
					try {
						return this.LS.setItem(this.keys.info, JSON.stringify(o)),
							this.LS.setItem(this.keys.topology, n),
							this.LS.setItem(this.keys.weightSpecs, r),
							this.LS.setItem(this.keys.weightData, (e = a.weightData,
								Ju ? Buffer.from(e).toString("base64") : btoa(String.fromCharCode.apply(null, new Uint8Array(e))))),
							[2, {
								modelArtifactsInfo: o
							}]
					} catch (t) {
						for (i in this.keys)
							this.LS.removeItem(this.keys[i]);
						throw new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + o.modelTopologyBytes + ", weightSpecsBytes=" + o.weightSpecsBytes + ", weightDataBytes=" + o.weightDataBytes + ".")
					}
					var e;
					return [2]
				})
			})
		}
			,
			t.prototype.load = function() {
				return m(this, void 0, void 0, function() {
					var e, n, r, o, i;
					return C(this, function(t) {
						if (null == (e = JSON.parse(this.LS.getItem(this.keys.info))))
							throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
						if ("JSON" !== e.modelTopologyType)
							throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
						if (n = {},
						null == (r = JSON.parse(this.LS.getItem(this.keys.topology))))
							throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
						if (n.modelTopology = r,
						null == (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
							throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
						if (n.weightSpecs = o,
						null == (i = this.LS.getItem(this.keys.weightData)))
							throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
						return n.weightData = function(t) {
							if (Ju) {
								var e = Buffer.from(t, "base64");
								return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
							}
							for (var n = atob(t), r = new Uint8Array(n.length), o = 0; o < n.length; ++o)
								r.set([n.charCodeAt(o)], o);
							return r.buffer
						}(i),
							[2, n]
					})
				})
			}
			,
			t.URL_SCHEME = "localstorage://",
			t
	}()
		, _c = function(t) {
		return Ot.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Sc.URL_SCHEME) ? (e = t.slice(Sc.URL_SCHEME.length),
			new Sc(e)) : null;
		var e
	};
	rc.registerSaveRouter(_c),
		rc.registerLoadRouter(_c);
	var Rc = function() {
		function t() {
			A(Ot.get("IS_BROWSER"), "Current environment is not a web browser"),
				A(void 0 !== window.localStorage, "Current browser does not appear to support localStorage"),
				this.LS = window.localStorage
		}
		return t.prototype.listModels = function() {
			return m(this, void 0, void 0, function() {
				var e, n, r, o, i, a;
				return C(this, function(t) {
					for (e = {},
						     n = gc + vc,
						     r = vc + yc,
						     o = 0; o < this.LS.length; ++o)
						(i = this.LS.key(o)).startsWith(n) && i.endsWith(r) && (a = Cc(i),
							e[a] = JSON.parse(this.LS.getItem(i)));
					return [2, e]
				})
			})
		}
			,
			t.prototype.removeModel = function(o) {
				return m(this, void 0, void 0, function() {
					var n, r;
					return C(this, function(t) {
						if (o = (e = o).startsWith(Sc.URL_SCHEME) ? e.slice(Sc.URL_SCHEME.length) : e,
							n = Ec(o),
						null == this.LS.getItem(n.info))
							throw new Error("Cannot find model at path '" + o + "'");
						var e;
						return r = JSON.parse(this.LS.getItem(n.info)),
							this.LS.removeItem(n.info),
							this.LS.removeItem(n.topology),
							this.LS.removeItem(n.weightSpecs),
							this.LS.removeItem(n.weightData),
							[2, r]
					})
				})
			}
			,
			t
	}();
	if (Ot.get("IS_BROWSER"))
		try {
			ic.registerManager(Sc.URL_SCHEME, new Rc)
		} catch (t) {}
	var Nc = function() {
		function e(t) {
			if (!Ot.get("IS_BROWSER"))
				throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
			t.startsWith(e.URL_SCHEME) && (t = t.slice(e.URL_SCHEME.length)),
			null != t && 0 !== t.length || (t = "model"),
				this.modelTopologyFileName = t + ".json",
				this.weightDataFileName = t + ".weights.bin"
		}
		return e.prototype.save = function(s) {
			return m(this, void 0, void 0, function() {
				var e, n, r, o, i, a;
				return C(this, function(t) {
					if (e = window.URL.createObjectURL(new Blob([s.weightData],{
						type: "application/octet-stream"
					})),
					s.modelTopology instanceof ArrayBuffer)
						throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
					return n = [{
						paths: ["./" + this.weightDataFileName],
						weights: s.weightSpecs
					}],
						r = {
							modelTopology: s.modelTopology,
							weightsManifest: n
						},
						o = window.URL.createObjectURL(new Blob([JSON.stringify(r)],{
							type: "application/json"
						})),
						(i = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName,
						i.href = o,
						i.click(),
					null != s.weightData && ((a = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName,
						a.href = e,
						a.click()),
						[2, {
							modelArtifactsInfo: nc(s)
						}]
				})
			})
		}
			,
			e.URL_SCHEME = "downloads://",
			e
	}()
		, kc = function() {
		function t(t) {
			if (null == t || t.length < 1)
				throw new Error("When calling browserFiles, at least 1 file is required, but received " + t);
			this.files = t
		}
		return t.prototype.load = function() {
			return m(this, void 0, void 0, function() {
				var r, h, p = this;
				return C(this, function(t) {
					return r = this.files[0],
						h = this.files.slice(1),
						[2, new Promise(function(c, l) {
								var t = new FileReader;
								t.onload = function(t) {
									var e = JSON.parse(t.target.result)
										, o = e.modelTopology;
									if (null != o) {
										0 === h.length && c({
											modelTopology: o
										});
										var n = e.weightsManifest;
										if (null != n) {
											var i;
											try {
												i = p.checkManifestAndWeightFiles(n, h)
											} catch (t) {
												return void l(t)
											}
											var a = []
												, s = []
												, u = [];
											n.forEach(function(t) {
												t.paths.forEach(function(t) {
													s.push(t),
														u.push(null)
												}),
													a.push.apply(a, t.weights)
											}),
												n.forEach(function(t) {
													t.paths.forEach(function(r) {
														var t = new FileReader;
														t.onload = function(t) {
															var e = t.target.result
																, n = s.indexOf(r);
															u[n] = e,
															-1 === u.indexOf(null) && c({
																modelTopology: o,
																weightSpecs: a,
																weightData: tc(u)
															})
														}
															,
															t.onerror = function(t) {
																return l("Failed to weights data from file of path '" + r + "'.")
															}
															,
															t.readAsArrayBuffer(i[r])
													})
												})
										} else
											l(new Error("weightManifest field is missing from file " + r.name))
									} else
										l(new Error("modelTopology field is missing from file " + r.name))
								}
									,
									t.onerror = function(t) {
										return l("Failed to read model topology and weights manifest JSON from file '" + r.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")
									}
									,
									t.readAsText(r)
							}
						)]
				})
			})
		}
			,
			t.prototype.checkManifestAndWeightFiles = function(t, n) {
				for (var r = [], o = n.map(function(t) {
					return ec(t.name)
				}), i = {}, e = 0, a = t; e < a.length; e++)
					a[e].paths.forEach(function(t) {
						var e = ec(t);
						if (-1 !== r.indexOf(e))
							throw new Error("Duplicate file basename found in weights manifest: '" + e + "'");
						if (r.push(e),
						-1 === o.indexOf(e))
							throw new Error("Weight file with basename '" + e + "' is not provided.");
						i[t] = n[o.indexOf(e)]
					});
				if (r.length !== n.length)
					throw new Error("Mismatch in the number of files in weights manifest (" + r.length + ") and the number of weight files provided (" + n.length + ").");
				return i
			}
			,
			t
	}();
	function Dc(r, o, i) {
		return m(this, void 0, void 0, function() {
			var e, n;
			return C(this, function(t) {
				switch (t.label) {
					case 0:
						return null == i && (i = fetch),
							e = r.map(function(t) {
								return i(t, o)
							}),
							[4, Promise.all(e)];
					case 1:
						return n = t.sent(),
							[4, Promise.all(n.map(function(t) {
								return t.arrayBuffer()
							}))];
					case 2:
						return [2, t.sent()]
				}
			})
		})
	}
	function Tc(i) {
		var t = this;
		return function(f, o, d) {
			return void 0 === o && (o = ""),
				m(t, void 0, void 0, function() {
					var a, c, s, u, e, n, r, l, h, p;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								if (a = f.map(function() {
									return !1
								}),
									c = {},
									s = null != d ? d.map(function() {
										return !1
									}) : [],
									u = [],
									f.forEach(function(t, o) {
										var i = 0;
										t.weights.forEach(function(n) {
											var t = "quantization"in n ? n.quantization.dtype : n.dtype
												, e = Yu[t] * L(n.shape)
												, r = function() {
												a[o] = !0,
												null == c[o] && (c[o] = []),
													c[o].push({
														manifestEntry: n,
														groupOffset: i,
														sizeBytes: e
													})
											};
											null != d ? d.forEach(function(t, e) {
												t === n.name && (r(),
													s[e] = !0)
											}) : r(),
												u.push(n.name),
												i += e
										})
									}),
									!s.every(function(t) {
										return t
									}))
									throw e = d.filter(function(t, e) {
										return !s[e]
									}),
										new Error("Could not find weights in manifest with names: " + e.join(", ") + ". \nManifest JSON has weights with names: " + u.join(", ") + ".");
								return n = a.reduce(function(t, e, n) {
									return e && t.push(n),
										t
								}, []),
									r = [],
									n.forEach(function(t) {
										f[t].paths.forEach(function(t) {
											var e = o + (o.endsWith("/") ? "" : "/") + t;
											r.push(e)
										})
									}),
									[4, i(r)];
							case 1:
								return l = t.sent(),
									h = {},
									p = 0,
									n.forEach(function(t) {
										for (var e = f[t].paths.length, n = 0, r = 0; r < e; r++)
											n += l[p + r].byteLength;
										for (var o = new ArrayBuffer(n), i = new Uint8Array(o), a = 0, s = 0; s < e; s++) {
											var u = new Uint8Array(l[p + s]);
											i.set(u, a),
												a += u.byteLength
										}
										c[t].forEach(function(t) {
											var e = Qu(o.slice(t.groupOffset, t.groupOffset + t.sizeBytes), [t.manifestEntry]);
											for (var n in e)
												h[n] = e[n]
										}),
											p += e
									}),
									[2, h]
						}
					})
				})
		}
	}
	rc.registerSaveRouter(function(t) {
		return Ot.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Nc.URL_SCHEME) ? (void 0 === (e = t.slice(Nc.URL_SCHEME.length)) && (e = "model"),
			new Nc(e)) : null;
		var e
	});
	var Ic = function() {
		function t(t, e, n, r) {
			if (this.weightPathPrefix = n,
				this.DEFAULT_METHOD = "POST",
			null == r) {
				if ("undefined" == typeof fetch)
					throw new Error("browserHTTPRequest is not supported outside the web browser without a fetch polyfill.");
				this.fetchFunc = fetch.bind("undefined" == typeof window ? null : window)
			} else
				A("function" == typeof r, "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),
					this.fetchFunc = r;
			if (A(null != t && 0 < t.length, "URL path for browserHTTPRequest must not be null, undefined or empty."),
			Array.isArray(t) && A(2 === t.length, "URL paths for browserHTTPRequest must have a length of 2, (actual length is " + t.length + ")."),
				this.path = t,
			null != e && null != e.body)
				throw new Error("requestInit is expected to have no pre-existing body, but has one.");
			this.requestInit = e || {}
		}
		return t.prototype.save = function(i) {
			return m(this, void 0, void 0, function() {
				var e, n, r, o;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							if (i.modelTopology instanceof ArrayBuffer)
								throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
							return (e = Object.assign({
								method: this.DEFAULT_METHOD
							}, this.requestInit)).body = new FormData,
								n = [{
									paths: ["./model.weights.bin"],
									weights: i.weightSpecs
								}],
								r = {
									modelTopology: i.modelTopology,
									weightsManifest: n
								},
								e.body.append("model.json", new Blob([JSON.stringify(r)],{
									type: "application/json"
								}), "model.json"),
							null != i.weightData && e.body.append("model.weights.bin", new Blob([i.weightData],{
								type: "application/octet-stream"
							}), "model.weights.bin"),
								[4, this.getFetchFunc()(this.path, e)];
						case 1:
							if ((o = t.sent()).ok)
								return [2, {
									modelArtifactsInfo: nc(i),
									responses: [o]
								}];
							throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + o.status + ".")
					}
				})
			})
		}
			,
			t.prototype.load = function() {
				return m(this, void 0, void 0, function() {
					return C(this, function(t) {
						return [2, Array.isArray(this.path) ? this.loadBinaryModel() : this.loadJSONModel()]
					})
				})
			}
			,
			t.prototype.loadBinaryTopology = function() {
				return m(this, void 0, void 0, function() {
					var e, n;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return t.trys.push([0, 3, , 4]),
									[4, this.getFetchFunc()(this.path[0], this.requestInit)];
							case 1:
								if (!(e = t.sent()).ok)
									throw new Error("BrowserHTTPRequest.load() failed due to HTTP response: " + e.statusText);
								return [4, e.arrayBuffer()];
							case 2:
								return [2, t.sent()];
							case 3:
								throw n = t.sent(),
									new Error(this.path[0] + " not found. " + n);
							case 4:
								return [2]
						}
					})
				})
			}
			,
			t.prototype.loadBinaryModel = function() {
				return m(this, void 0, void 0, function() {
					var e, n, r, o, i, a, s, u;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.loadBinaryTopology(),
									[4, this.getFetchFunc()(this.path[1], this.requestInit)];
							case 1:
								if (!(n = t.sent()).ok)
									throw new Error("BrowserHTTPRequest.load() failed due to HTTP response: " + n.statusText);
								return [4, Promise.all([e, n])];
							case 2:
								return r = t.sent(),
									o = r[0],
									[4, r[1].json()];
							case 3:
								return null == (i = t.sent()) ? [3, 5] : [4, this.loadWeights(i)];
							case 4:
								u = t.sent(),
									a = u[0],
									s = u[1],
									t.label = 5;
							case 5:
								return [2, {
									modelTopology: o,
									weightSpecs: a,
									weightData: s
								}]
						}
					})
				})
			}
			,
			t.prototype.loadJSONModel = function() {
				return m(this, void 0, void 0, function() {
					var e, n, r, o, i, a, s, u;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.getFetchFunc()(this.path, this.requestInit)];
							case 1:
								if (!(e = t.sent()).ok)
									throw new Error("BrowserHTTPRequest.load() failed due to HTTP response: " + e.statusText);
								return [4, e.json()];
							case 2:
								if (n = t.sent(),
									r = n.modelTopology,
									o = n.weightsManifest,
								null == r && null == o)
									throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
								return null == o ? [3, 4] : (s = n.weightsManifest,
									[4, this.loadWeights(s)]);
							case 3:
								u = t.sent(),
									i = u[0],
									a = u[1],
									t.label = 4;
							case 4:
								return [2, {
									modelTopology: r,
									weightSpecs: i,
									weightData: a
								}]
						}
					})
				})
			}
			,
			t.prototype.loadWeights = function(v) {
				return m(this, void 0, void 0, function() {
					var o, i, a, s, u, c, l, h, p, f, d, m;
					return C(this, function(t) {
						switch (t.label) {
							case 0:
								for (o = Array.isArray(this.path) ? this.path[1] : this.path,
									     r = n = void 0,
									     n = (e = o).lastIndexOf("/"),
									     r = e.lastIndexOf("?"),
									     i = [e.substring(0, n) + "/", n < r ? e.substring(r) : ""],
									     a = i[0],
									     s = i[1],
									     u = this.weightPathPrefix || a,
									     c = [],
									     l = 0,
									     h = v; l < h.length; l++)
									p = h[l],
										c.push.apply(c, p.weights);
								return f = [],
									v.forEach(function(t) {
										t.paths.forEach(function(t) {
											f.push(u + t + s)
										})
									}),
									d = [c],
									m = tc,
									[4, Dc(f, this.requestInit, this.getFetchFunc())];
							case 1:
								return [2, d.concat([m.apply(void 0, [t.sent()])])]
						}
						var e, n, r
					})
				})
			}
			,
			t.prototype.getFetchFunc = function() {
				return this.fetchFunc
			}
			,
			t.URL_SCHEME_REGEX = /^https?:\/\//,
			t
	}();
	function Ac(t) {
		return null != t.match(Ic.URL_SCHEME_REGEX)
	}
	var Mc = function(t) {
		return "undefined" == typeof fetch ? null : (Array.isArray(t) ? t.every(function(t) {
			return Ac(t)
		}) : Ac(t)) ? Fc(t) : null
	};
	function Fc(t, e, n, r) {
		return new Ic(t,e,n,r)
	}
	rc.registerSaveRouter(Mc),
		rc.registerLoadRouter(Mc);
	var Oc = function() {
		function t(t, e, n) {
			this.modelTopology = t,
				this.weightSpecs = e,
				this.weightData = n
		}
		return t.prototype.load = function() {
			return m(this, void 0, void 0, function() {
				var e;
				return C(this, function(t) {
					return e = {},
					null != this.modelTopology && (e = n({
						modelTopology: this.modelTopology
					}, e)),
					null != this.weightSpecs && 0 < this.weightSpecs.length && (e = n({
						weightSpecs: this.weightSpecs
					}, e)),
					null != this.weightData && 0 < this.weightData.byteLength && (e = n({
						weightData: this.weightData
					}, e)),
						[2, e]
				})
			})
		}
			,
			t
	}()
		, Pc = function() {
		function t(t) {
			this.saveHandler = t
		}
		return t.prototype.save = function(e) {
			return m(this, void 0, void 0, function() {
				return C(this, function(t) {
					return [2, this.saveHandler(e)]
				})
			})
		}
			,
			t
	}();
	var Bc = rc.registerSaveRouter
		, Lc = rc.registerLoadRouter
		, Wc = rc.getSaveHandlers
		, zc = rc.getLoadHandlers
		, Uc = Object.freeze({
		browserFiles: function(t) {
			return new kc(t)
		},
		browserHTTPRequest: Fc,
		concatenateArrayBuffers: tc,
		decodeWeights: Qu,
		encodeWeights: function(i) {
			return m(this, void 0, void 0, function() {
				var e, n, r, o;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							for (r in e = [],
								n = [],
								i) {
								if ("float32" !== (o = i[r]).dtype && "int32" !== o.dtype && "bool" !== o.dtype)
									throw new Error("Unsupported dtype in weight '" + r + "': " + o.dtype);
								e.push({
									name: r,
									shape: o.shape,
									dtype: o.dtype
								}),
									n.push(o.data())
							}
							return [4, Promise.all(n)];
						case 1:
							return [2, {
								data: function(t) {
									if (null === t)
										throw new Error("Invalid input value: " + JSON.stringify(t));
									var e = 0
										, n = [];
									t.forEach(function(t) {
										if (e += t.byteLength,
											n.push(t.byteLength === t.buffer.byteLength ? t : new t.constructor(t)),
											!(t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array))
											throw new Error("Unsupported TypedArray subtype: " + t.constructor.name)
									});
									var r = new Uint8Array(e)
										, o = 0;
									return n.forEach(function(t) {
										r.set(new Uint8Array(t.buffer), o),
											o += t.byteLength
									}),
										r.buffer
								}(t.sent()),
								specs: e
							}]
					}
				})
			})
		},
		fromMemory: function(t, e, n) {
			return new Oc(t,e,n)
		},
		getLoadHandlers: zc,
		getModelArtifactsInfoForJSON: nc,
		getSaveHandlers: Wc,
		isHTTPScheme: Ac,
		loadWeights: function(e, n, r, o) {
			return void 0 === n && (n = ""),
				m(this, void 0, void 0, function() {
					return C(this, function(t) {
						return [2, Tc(function(t) {
							return Dc(t, o)
						})(e, n, r)]
					})
				})
		},
		registerLoadRouter: Lc,
		registerSaveRouter: Bc,
		weightsLoaderFactory: Tc,
		withSaveHandler: function(t) {
			return new Pc(t)
		},
		copyModel: function(e, n) {
			return m(this, void 0, void 0, function() {
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							return [4, sc(e, n, !1)];
						case 1:
							return [2, t.sent()]
					}
				})
			})
		},
		listModels: function() {
			return m(this, void 0, void 0, function() {
				var e, n, r, o, i, a, s;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							e = ic.getSchemes(),
								n = {},
								r = 0,
								o = e,
								t.label = 1;
						case 1:
							return r < o.length ? (i = o[r],
								[4, ic.getManager(i).listModels()]) : [3, 4];
						case 2:
							for (s in a = t.sent())
								n[i + oc + s] = a[s];
							t.label = 3;
						case 3:
							return r++,
								[3, 1];
						case 4:
							return [2, n]
					}
				})
			})
		},
		moveModel: function(e, n) {
			return m(this, void 0, void 0, function() {
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							return [4, sc(e, n, !0)];
						case 1:
							return [2, t.sent()]
					}
				})
			})
		},
		removeModel: function(n) {
			return m(this, void 0, void 0, function() {
				var e;
				return C(this, function(t) {
					switch (t.label) {
						case 0:
							return e = ac(n),
								[4, ic.getManager(e.scheme).removeModel(e.path)];
						case 1:
							return [2, t.sent()]
					}
				})
			})
		}
	});
	var Vc = ge({
		confusionMatrix_: function(t, e, n) {
			var r = me(t, "labels", "confusionMatrix")
				, o = me(e, "predictions", "confusionMatrix");
			A(null == n || 0 < n && Number.isInteger(n), "If provided, numClasses must be a positive integer, but got " + n),
				A(1 === r.rank, "Expected the rank of labels to be 1, but got " + r.rank),
				A(1 === o.rank, "Expected the rank of predictions to be 1, but got " + o.rank),
				A(r.shape[0] === o.shape[0], "Mismatch in the number of examples: " + r.shape[0] + " vs. " + o.shape[0] + ". Labels and predictions should have the same number of elements."),
				A(0 < n && Number.isInteger(n), "numClasses is required to be a positive integer, but got " + n);
			var i = vi(r.asType("int32"), n)
				, a = vi(o.asType("int32"), n);
			return i.transpose().matMul(a).asType("int32")
		}
	})
		, Gc = Object.freeze({
		confusionMatrix: Vc
	})
		, Hc = function() {
		function t() {}
		return t.prototype.getClassName = function() {
			return this.constructor.className
		}
			,
			t.fromConfig = function(t, e) {
				return new t(e)
			}
			,
			t
	}()
		, qc = function() {
		function e() {
			this.classNameMap = {}
		}
		return e.getMap = function() {
			return null == e.instance && (e.instance = new e),
				e.instance
		}
			,
			e.register = function(t) {
				e.getMap().classNameMap[t.className] = [t, t.fromConfig]
			}
			,
			e
	}();
	function jc(t) {
		A(null != t.className, "Class being registered does not have the static className property defined."),
			A("string" == typeof t.className, "className is required to be a string, but got type " + typeof t.className),
			A(0 < t.className.length, "Class being registered has an empty-string as its className, which is disallowed."),
			qc.register(t)
	}
	var $c = Object.freeze({
		Serializable: Hc,
		SerializationMap: qc,
		registerClass: jc
	});
	function Kc(t, e, n) {
		return null == n && (n = Ot.get("TEST_EPSILON")),
			Xc(t, e, function(t, e) {
				return Yc(t, Number(e), n)
			})
	}
	function Xc(t, e, n) {
		if (t instanceof it || e instanceof it) {
			if (t instanceof it && e instanceof it) {
				if (t.dtype !== e.dtype)
					throw new Error("Arrays are of different type actual: " + t.dtype + " vs expected: " + e.dtype + ".");
				if (!y(t.shape, e.shape))
					throw new Error("Arrays are of different shape actual: " + t.shape + " vs expected: " + e.shape + ".")
			}
		} else {
			var r = t.constructor.name
				, o = e.constructor.name;
			if (r !== o)
				throw new Error("Arrays are of different type actual: " + r + " vs expected: " + o)
		}
		var i, a;
		if (i = t instanceof it ? t.dataSync() : t,
			a = e instanceof it ? e.dataSync() : e,
		i.length !== a.length)
			throw new Error("Arrays have different lengths actual: " + i.length + " vs expected: " + a.length + ".\nActual:   " + i + ".\nExpected: " + a + ".");
		for (var s = 0; s < a.length; ++s) {
			var u = i[s]
				, c = a[s];
			if (!n(u, c))
				throw new Error("Arrays differ: actual[" + s + "] = " + u + ", expected[" + s + "] = " + c + ".\nActual:   " + i + ".\nExpected: " + a + ".")
		}
	}
	function Yc(t, e, n) {
		return !(!isNaN(t) || !isNaN(e)) || !(isNaN(t) || isNaN(e) || Math.abs(t - e) > n)
	}
	var Qc = Object.freeze({
		WEBGL_ENVS: {
			HAS_WEBGL: !0
		},
		NODE_ENVS: {
			IS_NODE: !0
		},
		CHROME_ENVS: {
			IS_CHROME: !0
		},
		BROWSER_ENVS: {
			IS_BROWSER: !0
		},
		CPU_ENVS: {
			HAS_WEBGL: !1
		},
		ALL_ENVS: {},
		expectArraysClose: Kc,
		expectPromiseToFail: function(t, e) {
			t().then(function() {
				return e.fail()
			}, function() {
				return e()
			})
		},
		expectArraysEqual: function(t, e) {
			return t instanceof it && "string" === t.dtype || e instanceof it && "string" === e.dtype || t instanceof Array && O(t[0]) || e instanceof Array && O(e[0]) ? Xc(t, e, function(t, e) {
				return t == e
			}) : Kc(t, e, 0)
		},
		expectNumbersClose: function(t, e, n) {
			if (null == n && (n = Ot.get("TEST_EPSILON")),
				!Yc(t, e, n))
				throw new Error("Numbers differ: actual === " + t + ", expected === " + e)
		},
		expectValuesInRange: function(t, e, n) {
			var r;
			r = t instanceof it ? t.dataSync() : t;
			for (var o = 0; o < r.length; o++)
				if (r[o] < e || r[o] > n)
					throw new Error("Value out of range:" + r[o] + " low: " + e + ", high: " + n)
		},
		expectArrayBuffersEqual: function(t, e) {
			expect(new Float32Array(t)).toEqual(new Float32Array(e))
		}
	})
		, Jc = Object.freeze({
		gpgpu_util: oo,
		webgl_util: Pr,
		MathBackendWebGL: Fi,
		GPGPUContext: io
	})
		, Zc = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return s(e, t),
			e.prototype.minimize = function(t, e, n) {
				void 0 === e && (e = !1);
				var r = this.computeGradients(t, n)
					, o = r.value
					, i = r.grads;
				return this.applyGradients(i),
					Object.keys(i).forEach(function(t) {
						return i[t].dispose()
					}),
					e ? o : (o.dispose(),
						null)
			}
			,
			e.prototype.computeGradients = function(t, e) {
				return Bt(t, e)
			}
			,
			e
	}(Hc)
		, tl = function(o) {
		function t(t, e, n) {
			void 0 === n && (n = null);
			var r = o.call(this) || this;
			return r.learningRate = t,
				r.rho = e,
				r.epsilon = n,
				r.accumulatedGrads = {},
				r.accumulatedUpdates = {},
				r.c = Ut(Se(-t)),
				r.rhoScalar = Ut(Se(e)),
				r.oneMinusRho = Ut(Se(1 - e)),
			null === n && (n = Ot.get("EPSILON")),
				r.epsilonScalar = Ut(Se(n)),
				r
		}
		return s(t, o),
			t.prototype.applyGradients = function(t) {
				var c = this
					, e = function(o) {
					var i = Ot.engine.registeredVariables[o];
					null == n.accumulatedGrads[o] && zt(function() {
						c.accumulatedGrads[o] = Be(i).variable(!1)
					}),
					null == n.accumulatedUpdates[o] && zt(function() {
						c.accumulatedUpdates[o] = Be(i).variable(!1)
					});
					var a = t[o]
						, s = n.accumulatedGrads[o]
						, u = n.accumulatedUpdates[o];
					zt(function() {
						var t = c.rhoScalar.mul(s).add(c.oneMinusRho.mul(a.square()))
							, e = u.add(c.epsilonScalar).sqrt().div(s.add(c.epsilonScalar).sqrt()).mul(a)
							, n = c.rhoScalar.mul(u).add(c.oneMinusRho.mul(e.square()));
						c.accumulatedGrads[o].assign(t),
							c.accumulatedUpdates[o].assign(n);
						var r = c.c.mul(e).add(i);
						i.assign(r)
					})
				}
					, n = this;
				for (var r in t)
					e(r)
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				this.c.dispose(),
					this.epsilonScalar.dispose(),
					this.rhoScalar.dispose(),
					this.oneMinusRho.dispose(),
				null != this.accumulatedUpdates && (Object.keys(this.accumulatedUpdates).forEach(function(t) {
					return e.accumulatedUpdates[t].dispose()
				}),
					Object.keys(this.accumulatedGrads).forEach(function(t) {
						return e.accumulatedGrads[t].dispose()
					}))
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					rho: this.rho,
					epsilon: this.epsilon
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.rho,e.epsilon)
			}
			,
			t.className = "AdadeltaOptimizer",
			t
	}(Zc);
	jc(tl);
	var el = function(r) {
		function t(t, e) {
			void 0 === e && (e = .1);
			var n = r.call(this) || this;
			return n.learningRate = t,
				n.initialAccumulatorValue = e,
				n.accumulatedGrads = {},
				n.c = Ut(Se(-t)),
				n.epsilon = Ut(Se(Ot.get("EPSILON"))),
				n
		}
		return s(t, r),
			t.prototype.applyGradients = function(t) {
				var a = this
					, e = function(n) {
					var r = Ot.engine.registeredVariables[n];
					null == s.accumulatedGrads[n] && zt(function() {
						a.accumulatedGrads[n] = Me(r.shape, a.initialAccumulatorValue).variable(!1)
					});
					var o = t[n]
						, i = s.accumulatedGrads[n];
					zt(function() {
						var t = i.add(o.square());
						a.accumulatedGrads[n].assign(t);
						var e = a.c.mul(o.div(t.add(a.epsilon).sqrt())).add(r);
						r.assign(e)
					})
				}
					, s = this;
				for (var n in t)
					e(n)
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				this.epsilon.dispose(),
					this.c.dispose(),
				null != this.accumulatedGrads && Object.keys(this.accumulatedGrads).forEach(function(t) {
					return e.accumulatedGrads[t].dispose()
				})
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					initialAccumulatorValue: this.initialAccumulatorValue
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.initialAccumulatorValue)
			}
			,
			t.className = "AdagradOptimizer",
			t
	}(Zc);
	jc(el);
	var nl = function(i) {
		function t(t, e, n, r) {
			void 0 === r && (r = null);
			var o = i.call(this) || this;
			return o.learningRate = t,
				o.beta1 = e,
				o.beta2 = n,
				o.epsilon = r,
				o.accumulatedFirstMoment = {},
				o.accumulatedSecondMoment = {},
				o.c = Ut(Se(-t)),
				o.beta1Scalar = Ut(Se(e)),
				o.beta2Scalar = Ut(Se(n)),
				zt(function() {
					o.accBeta1 = Se(e).variable(),
						o.accBeta2 = Se(n).variable()
				}),
				o.oneMinusBeta1 = Ut(Se(1 - e)),
				o.oneMinusBeta2 = Ut(Se(1 - n)),
				o.one = Ut(Se(1)),
			null === r && (r = Ot.get("EPSILON")),
				o.epsScalar = Ut(Se(r)),
				o
		}
		return s(t, i),
			t.prototype.applyGradients = function(f) {
				var d = this;
				zt(function() {
					var t = d.one.sub(d.accBeta1)
						, e = d.one.sub(d.accBeta2);
					for (var n in f) {
						var r = Ot.engine.registeredVariables[n];
						if (null == d.accumulatedFirstMoment[n]) {
							var o = !1;
							d.accumulatedFirstMoment[n] = Be(r).variable(o)
						}
						null == d.accumulatedSecondMoment[n] && (o = !1,
							d.accumulatedSecondMoment[n] = Be(r).variable(o));
						var i = f[n]
							, a = d.accumulatedFirstMoment[n]
							, s = d.accumulatedSecondMoment[n]
							, u = d.beta1Scalar.mul(a).add(d.oneMinusBeta1.mul(i))
							, c = d.beta2Scalar.mul(s).add(d.oneMinusBeta2.mul(i.square()))
							, l = u.div(t)
							, h = c.div(e);
						d.accumulatedFirstMoment[n].assign(u),
							d.accumulatedSecondMoment[n].assign(c);
						var p = d.c.mul(l.div(d.epsScalar.add(h.sqrt()))).add(r);
						r.assign(p)
					}
					d.accBeta1.assign(d.accBeta1.mul(d.beta1Scalar)),
						d.accBeta2.assign(d.accBeta2.mul(d.beta2Scalar))
				})
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				this.c.dispose(),
					this.epsScalar.dispose(),
					this.beta1Scalar.dispose(),
					this.beta2Scalar.dispose(),
					this.accBeta1.dispose(),
					this.accBeta2.dispose(),
					this.oneMinusBeta1.dispose(),
					this.oneMinusBeta2.dispose(),
					this.one.dispose(),
				null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function(t) {
					return e.accumulatedFirstMoment[t].dispose()
				}),
				null != this.accumulatedSecondMoment && Object.keys(this.accumulatedSecondMoment).forEach(function(t) {
					return e.accumulatedSecondMoment[t].dispose()
				})
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					beta1: this.beta1,
					beta2: this.beta2,
					epsilon: this.epsilon
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)
			}
			,
			t.className = "AdamOptimizer",
			t
	}(Zc);
	jc(nl);
	var rl = function(a) {
		function t(t, e, n, r, o) {
			void 0 === r && (r = null),
			void 0 === o && (o = 0);
			var i = a.call(this) || this;
			return i.learningRate = t,
				i.beta1 = e,
				i.beta2 = n,
				i.epsilon = r,
				i.decay = o,
				i.accumulatedFirstMoment = {},
				i.accumulatedWeightedInfNorm = {},
				i.c = Ut(Se(-t)),
				i.beta1Scalar = Ut(Se(e)),
				i.beta2Scalar = Ut(Se(n)),
				i.decayScalar = Ut(Se(o)),
				zt(function() {
					i.iteration = Se(0).variable(),
						i.accBeta1 = Se(e).variable()
				}),
				i.oneMinusBeta1 = Ut(Se(1 - e)),
				i.one = Ut(Se(1)),
			null === r && (r = Ot.get("EPSILON")),
				i.epsScalar = Ut(Se(r)),
				i
		}
		return s(t, a),
			t.prototype.applyGradients = function(f) {
				var d = this;
				zt(function() {
					var t = d.one.sub(d.accBeta1)
						, e = d.c.div(d.one.add(d.decayScalar.mul(d.iteration)));
					for (var n in f) {
						var r = Ot.engine.registeredVariables[n];
						if (null == d.accumulatedFirstMoment[n]) {
							var o = !1;
							d.accumulatedFirstMoment[n] = Be(r).variable(o)
						}
						null == d.accumulatedWeightedInfNorm[n] && (o = !1,
							d.accumulatedWeightedInfNorm[n] = Be(r).variable(o));
						var i = f[n]
							, a = d.accumulatedFirstMoment[n]
							, s = d.accumulatedWeightedInfNorm[n]
							, u = d.beta1Scalar.mul(a).add(d.oneMinusBeta1.mul(i))
							, c = d.beta2Scalar.mul(s)
							, l = i.abs()
							, h = c.maximum(l);
						d.accumulatedFirstMoment[n].assign(u),
							d.accumulatedWeightedInfNorm[n].assign(h);
						var p = e.div(t).mul(u.div(d.epsScalar.add(h))).add(r);
						r.assign(p)
					}
					d.iteration.assign(d.iteration.add(d.one)),
						d.accBeta1.assign(d.accBeta1.mul(d.beta1Scalar))
				})
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				this.c.dispose(),
					this.epsScalar.dispose(),
					this.accBeta1.dispose(),
					this.beta1Scalar.dispose(),
					this.beta2Scalar.dispose(),
					this.oneMinusBeta1.dispose(),
					this.decayScalar.dispose(),
					this.iteration.dispose(),
					this.one.dispose(),
				null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function(t) {
					return e.accumulatedFirstMoment[t].dispose()
				}),
				null != this.accumulatedWeightedInfNorm && Object.keys(this.accumulatedWeightedInfNorm).forEach(function(t) {
					return e.accumulatedWeightedInfNorm[t].dispose()
				})
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					beta1: this.beta1,
					beta2: this.beta2,
					epsilon: this.epsilon,
					decay: this.decay
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)
			}
			,
			t.className = "AdamaxOptimizer",
			t
	}(Zc);
	jc(rl);
	var ol = function(n) {
		function t(t) {
			var e = n.call(this) || this;
			return e.learningRate = t,
				e.setLearningRate(t),
				e
		}
		return s(t, n),
			t.prototype.applyGradients = function(r) {
				var o = this;
				Object.keys(r).forEach(function(t) {
					var e = r[t]
						, n = Ot.engine.registeredVariables[t];
					zt(function() {
						var t = o.c.mul(e).add(n);
						n.assign(t)
					})
				})
			}
			,
			t.prototype.setLearningRate = function(t) {
				this.learningRate = t,
				null != this.c && this.c.dispose(),
					this.c = Ut(Se(-t))
			}
			,
			t.prototype.dispose = function() {
				this.c.dispose()
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate)
			}
			,
			t.className = "SGDOptimizer",
			t
	}(Zc);
	jc(ol);
	var il = function(o) {
		function t(t, e, n) {
			void 0 === n && (n = !1);
			var r = o.call(this, t) || this;
			return r.learningRate = t,
				r.momentum = e,
				r.useNesterov = n,
				r.m = Se(r.momentum),
				r.accumulations = {},
				r
		}
		return s(t, o),
			t.prototype.applyGradients = function(t) {
				var a = this
					, e = function(n) {
					var r = Ot.engine.registeredVariables[n];
					null == s.accumulations[n] && zt(function() {
						a.accumulations[n] = Be(r).variable(!1)
					});
					var o = s.accumulations[n]
						, i = t[n];
					zt(function() {
						var t, e = a.m.mul(o).add(i);
						t = a.useNesterov ? a.c.mul(i.add(e.mul(a.m))).add(r) : a.c.mul(e).add(r),
							a.accumulations[n].assign(e),
							r.assign(t)
					})
				}
					, s = this;
				for (var n in t)
					e(n)
			}
			,
			t.prototype.dispose = function() {
				if (o.prototype.dispose.call(this),
					this.m.dispose(),
				null != this.accumulations)
					for (var t in this.accumulations)
						this.accumulations[t].dispose()
			}
			,
			t.prototype.setMomentum = function(t) {
				this.momentum = t
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					momentum: this.momentum,
					useNesterov: this.useNesterov
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.momentum,e.useNesterov)
			}
			,
			t.className = "MomentumOptimizer",
			t
	}(ol);
	jc(il);
	var al = function(a) {
		function t(t, e, n, r, o) {
			void 0 === e && (e = .9),
			void 0 === n && (n = 0),
			void 0 === r && (r = null),
			void 0 === o && (o = !1);
			var i = a.call(this) || this;
			return i.learningRate = t,
				i.decay = e,
				i.momentum = n,
				i.epsilon = r,
				i.accumulatedMeanSquares = {},
				i.accumulatedMeanGrads = {},
				i.accumulatedMoments = {},
				i.c = Ut(Se(t)),
				i.decayScalar = Ut(Se(e)),
				i.momentumScalar = Ut(Se(n)),
				i.oneMinusDecay = Ut(Se(1 - e)),
				i.centered = o,
			null === r && (r = Ot.get("EPSILON")),
				i.epsilonScalar = Ut(Se(r)),
				i
		}
		return s(t, a),
			t.prototype.applyGradients = function(t) {
				var h = this
					, e = function(i) {
					var a = Ot.engine.registeredVariables[i];
					null == n.accumulatedMeanSquares[i] && zt(function() {
						h.accumulatedMeanSquares[i] = Be(a).variable(!1)
					}),
					null == n.accumulatedMeanGrads[i] && n.centered && zt(function() {
						h.accumulatedMeanGrads[i] = Be(a).variable(!1)
					}),
					null == n.accumulatedMoments[i] && zt(function() {
						h.accumulatedMoments[i] = Be(a).variable(!1)
					});
					var s = n.accumulatedMeanSquares[i]
						, u = n.accumulatedMeanGrads[i]
						, c = n.accumulatedMoments[i]
						, l = t[i];
					zt(function() {
						var t = h.decayScalar.mul(s).add(h.oneMinusDecay.mul(l.square()));
						if (h.centered) {
							var e = h.decayScalar.mul(u).add(h.oneMinusDecay.mul(l))
								, n = h.momentumScalar.mul(c).add(h.c.mul(l).div(t.sub(e.square().add(h.epsilonScalar)).sqrt()));
							h.accumulatedMeanSquares[i].assign(t),
								h.accumulatedMeanGrads[i].assign(e),
								h.accumulatedMoments[i].assign(n);
							var r = a.sub(n);
							a.assign(r)
						} else {
							var o = h.decayScalar.mul(s).add(h.oneMinusDecay.mul(l.square()));
							n = h.momentumScalar.mul(c).add(h.c.mul(l).div(o.add(h.epsilonScalar).sqrt())),
								h.accumulatedMeanSquares[i].assign(o),
								h.accumulatedMoments[i].assign(n),
								r = a.sub(n),
								a.assign(r)
						}
					})
				}
					, n = this;
				for (var r in t)
					e(r)
			}
			,
			t.prototype.dispose = function() {
				var e = this;
				this.c.dispose(),
					this.epsilonScalar.dispose(),
					this.decayScalar.dispose(),
					this.momentumScalar.dispose(),
					this.oneMinusDecay.dispose(),
				null != this.accumulatedMeanSquares && Object.keys(this.accumulatedMeanSquares).forEach(function(t) {
					return e.accumulatedMeanSquares[t].dispose()
				}),
				null != this.accumulatedMeanGrads && this.centered && Object.keys(this.accumulatedMeanGrads).forEach(function(t) {
					return e.accumulatedMeanGrads[t].dispose()
				}),
				null != this.accumulatedMoments && Object.keys(this.accumulatedMoments).forEach(function(t) {
					return e.accumulatedMoments[t].dispose()
				})
			}
			,
			t.prototype.getConfig = function() {
				return {
					learningRate: this.learningRate,
					decay: this.decay,
					momentum: this.momentum,
					epsilon: this.epsilon,
					centered: this.centered
				}
			}
			,
			t.fromConfig = function(t, e) {
				return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)
			}
			,
			t.className = "RMSPropOptimizer",
			t
	}(Zc);
	jc(al);
	var sl = function() {
		function t() {}
		return t.sgd = function(t) {
			return new ol(t)
		}
			,
			t.momentum = function(t, e, n) {
				return void 0 === n && (n = !1),
					new il(t,e,n)
			}
			,
			t.rmsprop = function(t, e, n, r, o) {
				return void 0 === e && (e = .9),
				void 0 === n && (n = 0),
				void 0 === r && (r = null),
				void 0 === o && (o = !1),
					new al(t,e,n,r,o)
			}
			,
			t.adam = function(t, e, n, r) {
				return void 0 === t && (t = .001),
				void 0 === e && (e = .9),
				void 0 === n && (n = .999),
				void 0 === r && (r = null),
					new nl(t,e,n,r)
			}
			,
			t.adadelta = function(t, e, n) {
				return void 0 === t && (t = .001),
				void 0 === e && (e = .95),
				void 0 === n && (n = null),
					new tl(t,e,n)
			}
			,
			t.adamax = function(t, e, n, r, o) {
				return void 0 === t && (t = .002),
				void 0 === e && (e = .9),
				void 0 === n && (n = .999),
				void 0 === r && (r = null),
				void 0 === o && (o = 0),
					new rl(t,e,n,r,o)
			}
			,
			t.adagrad = function(t, e) {
				return void 0 === e && (e = .1),
					new el(t,e)
			}
			,
			t
	}()
		, ul = {
		sgd: sl.sgd,
		momentum: sl.momentum,
		adadelta: sl.adadelta,
		adagrad: sl.adagrad,
		rmsprop: sl.rmsprop,
		adamax: sl.adamax,
		adam: sl.adam
	}
		, cl = Mt.setBackend
		, ll = Mt.getBackend
		, hl = Mt.disposeVariables
		, pl = Mt.memory;
	rt = $u;
	var fl = Object.freeze({
		setBackend: cl,
		getBackend: ll,
		disposeVariables: hl,
		memory: pl,
		version_core: "0.14.2",
		nextFrame: function() {
			return new Promise(function(t) {
					return Xu(function() {
						return t()
					})
				}
			)
		},
		environment: Pt,
		io: Uc,
		math: Gc,
		serialization: $c,
		test_util: Qc,
		util: j,
		webgl: Jc,
		AdadeltaOptimizer: tl,
		AdagradOptimizer: el,
		AdamOptimizer: nl,
		AdamaxOptimizer: rl,
		MomentumOptimizer: il,
		Optimizer: Zc,
		RMSPropOptimizer: al,
		SGDOptimizer: ol,
		Tensor: it,
		TensorBuffer: et,
		variable: gt,
		Variable: at,
		get Rank() {
			return st
		},
		get Reduction() {
			return Cu
		},
		ENV: Ot,
		Environment: Mt,
		KernelBackend: We,
		DataStorage: Le,
		image: ju,
		linalg: Wu,
		losses: Ou,
		spectral: bu,
		op: ge,
		batchNormalization2d: ma,
		batchNormalization3d: va,
		batchNormalization4d: ga,
		batchNormalization: ya,
		complex: we,
		real: be,
		imag: Ee,
		concat: Vo,
		concat1d: Go,
		concat2d: Ho,
		concat3d: qo,
		concat4d: jo,
		split: $o,
		conv1d: Fa,
		conv2d: Oa,
		conv3d: Pa,
		conv2dDerFilter: Ba,
		depthwiseConv2d: La,
		separableConv2d: Wa,
		conv2dTranspose: za,
		matMul: ka,
		dot: Da,
		outerProduct: Ta,
		reverse: Ua,
		reverse1d: Va,
		reverse2d: Ga,
		reverse3d: Ha,
		reverse4d: qa,
		maxPool: Ka,
		avgPool: Xa,
		pool: Ya,
		slice: Qa,
		slice1d: Ja,
		slice2d: Za,
		slice3d: ts,
		slice4d: es,
		abs: Pi,
		acos: Bi,
		acosh: Li,
		asin: Wi,
		asinh: zi,
		atan: Ui,
		atanh: Vi,
		ceil: Gi,
		clipByValue: Hi,
		cos: qi,
		cosh: ji,
		erf: $i,
		exp: Ki,
		expm1: Xi,
		floor: Yi,
		log: Qi,
		log1p: Ji,
		logSigmoid: Zi,
		neg: ta,
		reciprocal: ea,
		round: na,
		rsqrt: ra,
		sigmoid: oa,
		sign: ia,
		sin: aa,
		sinh: sa,
		softplus: ua,
		sqrt: ca,
		square: la,
		step: ha,
		tan: pa,
		tanh: fa,
		all: rs,
		any: os,
		argMax: is,
		argMin: as,
		logSumExp: ss,
		max: us,
		mean: cs,
		min: ls,
		moments: hs,
		sum: ps,
		prod: fs,
		equal: ds,
		equalStrict: ms,
		greater: vs,
		greaterEqual: gs,
		greaterEqualStrict: ys,
		greaterStrict: xs,
		less: ws,
		lessEqual: bs,
		lessEqualStrict: Es,
		lessStrict: Cs,
		notEqual: Ss,
		notEqualStrict: _s,
		add: Rs,
		addN: Ns,
		addStrict: ks,
		atan2: Ds,
		div: Ts,
		divStrict: Is,
		floorDiv: As,
		maximum: Ms,
		maximumStrict: Fs,
		minimum: Os,
		minimumStrict: Ps,
		mod: Bs,
		modStrict: Ls,
		mul: Ws,
		mulStrict: zs,
		pow: Us,
		powStrict: Vs,
		squaredDifference: Gs,
		squaredDifferenceStrict: Hs,
		sub: qs,
		subStrict: js,
		elu: Zs,
		leakyRelu: tu,
		prelu: eu,
		relu: nu,
		selu: ru,
		logicalAnd: $s,
		logicalNot: Ks,
		logicalOr: Xs,
		logicalXor: Ys,
		where: Qs,
		whereAsync: Js,
		buffer: ii,
		toPixels: oi,
		print: ai,
		batchToSpaceND: si,
		cast: ui,
		clone: ci,
		cumsum: li,
		depthToSpace: hi,
		expandDims: pi,
		eye: fi,
		fromPixels: di,
		multinomial: mi,
		oneHot: vi,
		pad: gi,
		pad1d: yi,
		pad2d: xi,
		pad3d: wi,
		pad4d: bi,
		rand: Ei,
		randomNormal: Ci,
		randomUniform: Si,
		reshape: _i,
		spaceToBatchND: Ri,
		squeeze: Ni,
		stack: ki,
		tile: Di,
		truncatedNormal: Ti,
		unstack: Ii,
		setdiff1dAsync: Ai,
		fill: Me,
		linspace: Fe,
		ones: Ie,
		range: Oe,
		scalar: Se,
		tensor: Ce,
		tensor1d: _e,
		tensor2d: Re,
		tensor3d: Ne,
		tensor4d: ke,
		tensor5d: De,
		tensor6d: Te,
		zeros: Ae,
		onesLike: Pe,
		zerosLike: Be,
		transpose: ou,
		softmax: ye,
		logSoftmax: xe,
		localResponseNormalization: iu,
		norm: au,
		gather: cu,
		unsortedSegmentSum: lu,
		basicLSTMCell: hu,
		multiRNNCell: pu,
		movingAverage: fu,
		stridedSlice: du,
		topk: mu,
		scatterND: vu,
		fft: gu,
		ifft: yu,
		rfft: xu,
		irfft: wu,
		sparseToDense: Eu,
		gatherND: _u,
		train: ul,
		tidy: zt,
		keep: Ut,
		dispose: Vt,
		time: Gt,
		profile: Ht,
		customGrad: Lt,
		grad: function(i) {
			return A(W(i), "The f passed in grad(f) must be a function"),
				function(r, o) {
					return A(r instanceof it, "The x passed in grad(f)(x) must be a tensor"),
						A(null == o || o instanceof it, "The dy passed in grad(f)(x, dy) must be a tensor"),
						Ot.engine.tidy(function() {
							var t = Ot.engine.gradients(function() {
								return i(r)
							}, [r], o)
								, e = t.value
								, n = t.grads;
							return null != o && f(e.shape, o.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),
								Wt(n),
								n[0]
						})
				}
		},
		grads: function(i) {
			return A(W(i), "The f passed in grads(f) must be a function"),
				function(r, o) {
					return A(Array.isArray(r) && r.every(function(t) {
						return t instanceof it
					}), "The args passed in grads(f)(args) must be an array of tensors"),
						A(null == o || o instanceof it, "The dy passed in grads(f)(args, dy) must be a tensor"),
						Ot.engine.tidy(function() {
							var t = Ot.engine.gradients(function() {
								return i.apply(void 0, r)
							}, r, o)
								, e = t.value
								, n = t.grads;
							return null != o && f(e.shape, o.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
								Wt(n),
								n
						})
				}
		},
		valueAndGrad: function(i) {
			return A(W(i), "The f passed in valueAndGrad(f) must be a function"),
				function(t, e) {
					A(t instanceof it, "The x passed in valueAndGrad(f)(x) must be a tensor"),
						A(null == e || e instanceof it, "The dy passed in valueAndGrad(f)(x, dy) must be a tensor");
					var n = Ot.engine.gradients(function() {
						return i(t)
					}, [t], e)
						, r = n.grads
						, o = n.value;
					return Wt(r),
						{
							grad: r[0],
							value: o
						}
				}
		},
		valueAndGrads: function(r) {
			return A(W(r), "The f passed in valueAndGrads(f) must be a function"),
				function(t, e) {
					A(Array.isArray(t) && t.every(function(t) {
						return t instanceof it
					}), "The args passed in valueAndGrads(f)(args) must be array of tensors"),
						A(null == e || e instanceof it, "The dy passed in valueAndGrads(f)(args, dy) must be a tensor");
					var n = Ot.engine.gradients(function() {
						return r.apply(void 0, t)
					}, t, e);
					return null != e && f(n.value.shape, e.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
						Wt(n.grads),
						n
				}
		},
		variableGrads: Bt
	});
	function dl(e, n, r, o) {
		return void 0 === r && (r = "same"),
		void 0 === o && (o = !1),
			zt(function() {
				var t = Rs(Oa(e, n.filters, [1, 1], r), n.bias);
				return o ? nu(t) : t
			})
	}
	function ml(t, n) {
		Object.keys(t).forEach(function(e) {
			n.some(function(t) {
				return t.originalPath === e
			}) || t[e].dispose()
		})
	}
	function vl(a, s) {
		return function(t, e, n, r) {
			var o = ke(a(t * e * n * n), [n, n, t, e])
				, i = _e(a(e));
			return s.push({
				paramPath: r + "/filters"
			}, {
				paramPath: r + "/bias"
			}),
				{
					filters: o,
					bias: i
				}
		}
	}
	function gl(i, a) {
		return function(t, e, n) {
			var r = Re(i(t * e), [t, e])
				, o = _e(i(e));
			return a.push({
				paramPath: n + "/weights"
			}, {
				paramPath: n + "/bias"
			}),
				{
					weights: r,
					bias: o
				}
		}
	}
	var yl = function(t, e, n) {
		this.depthwise_filter = t,
			this.pointwise_filter = e,
			this.bias = n
	};
	function xl(a, s) {
		return function(t, e, n) {
			var r = ke(a(9 * t), [3, 3, t, 1])
				, o = ke(a(t * e), [1, 1, t, e])
				, i = _e(a(e));
			return s.push({
				paramPath: n + "/depthwise_filter"
			}, {
				paramPath: n + "/pointwise_filter"
			}, {
				paramPath: n + "/bias"
			}),
				new yl(r,o,i)
		}
	}
	function wl(o) {
		return function(t) {
			var e = o(t + "/depthwise_filter", 4)
				, n = o(t + "/pointwise_filter", 4)
				, r = o(t + "/bias", 1);
			return new yl(e,n,r)
		}
	}
	var bl = function() {
		function t(t, e) {
			if (!Fl(t) || !Fl(e))
				throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({
					width: t,
					height: e
				}));
			this._width = t,
				this._height = e
		}
		return Object.defineProperty(t.prototype, "width", {
			get: function() {
				return this._width
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "height", {
				get: function() {
					return this._height
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.reverse = function() {
				return new t(1 / this.width,1 / this.height)
			}
			,
			t
	}()
		, El = function() {
		function e(t, e) {
			this._x = t,
				this._y = e
		}
		return Object.defineProperty(e.prototype, "x", {
			get: function() {
				return this._x
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(e.prototype, "y", {
				get: function() {
					return this._y
				},
				enumerable: !0,
				configurable: !0
			}),
			e.prototype.add = function(t) {
				return new e(this.x + t.x,this.y + t.y)
			}
			,
			e.prototype.sub = function(t) {
				return new e(this.x - t.x,this.y - t.y)
			}
			,
			e.prototype.mul = function(t) {
				return new e(this.x * t.x,this.y * t.y)
			}
			,
			e.prototype.div = function(t) {
				return new e(this.x / t.x,this.y / t.y)
			}
			,
			e.prototype.abs = function() {
				return new e(Math.abs(this.x),Math.abs(this.y))
			}
			,
			e.prototype.magnitude = function() {
				return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
			}
			,
			e.prototype.floor = function() {
				return new e(Math.floor(this.x),Math.floor(this.y))
			}
			,
			e
	}();
	function Cl(t, e) {
		return t instanceof it && t.shape.length === e
	}
	function Sl(t) {
		return Cl(t, 2)
	}
	function _l(t) {
		return Cl(t, 3)
	}
	function Rl(t) {
		return Cl(t, 4)
	}
	function Nl(t) {
		return t % 1 != 0
	}
	function kl(t) {
		return t % 2 == 0
	}
	function Dl(t, e) {
		void 0 === e && (e = 2);
		var n = Math.pow(10, e);
		return Math.floor(t * n) / n
	}
	function Tl(t) {
		return t && t.width && t.height
	}
	function Il(t, e) {
		var n = t.width
			, r = t.height
			, o = e / Math.max(r, n);
		return new bl(Math.round(n * o),Math.round(r * o))
	}
	function Al(t) {
		return t.reduce(function(t, e) {
			return t.add(e)
		}, new El(0,0)).div(new El(t.length,t.length))
	}
	function Ml(t, n, r) {
		return Array(t).fill(0).map(function(t, e) {
			return n + e * r
		})
	}
	function Fl(t) {
		return !!t && t !== 1 / 0 && t !== -1 / 0 && !isNaN(t) || 0 === t
	}
	function Ol(t) {
		return Fl(t) && 0 <= t && t <= 1
	}
	function Pl(o, i) {
		return function(t, e, n) {
			var r = o[t];
			if (!Cl(r, e))
				throw new Error("expected weightMap[" + t + "] to be a Tensor" + e + "D, instead have " + r);
			return i.push({
				originalPath: t,
				paramPath: n || t
			}),
				r
		}
	}
	function Bl(t) {
		var n = t;
		return {
			extractWeights: function(t) {
				var e = n.slice(0, t);
				return n = n.slice(t),
					e
			},
			getRemainingWeights: function() {
				return n
			}
		}
	}
	function Ll(t, e) {
		var n = e + "-weights_manifest.json";
		if (!t)
			return {
				modelBaseUri: "",
				manifestUri: n
			};
		if ("/" === t)
			return {
				modelBaseUri: "/",
				manifestUri: "/" + n
			};
		var r = t.startsWith("http://") ? "http://" : t.startsWith("https://") ? "https://" : ""
			, o = (t = t.replace(r, "")).split("/").filter(function(t) {
			return t
		})
			, i = t.endsWith(".json") ? o[o.length - 1] : n
			, a = r + (t.endsWith(".json") ? o.slice(0, o.length - 1) : o).join("/");
		return {
			modelBaseUri: a = t.startsWith("/") ? "/" + a : a,
			manifestUri: "/" === a ? "/" + i : a + "/" + i
		}
	}
	var Wl = function(t, e) {
		return (Wl = Object.setPrototypeOf || {
					__proto__: []
				}instanceof Array && function(t, e) {
					t.__proto__ = e
				}
				|| function(t, e) {
					for (var n in e)
						e.hasOwnProperty(n) && (t[n] = e[n])
				}
		)(t, e)
	};
	function zl(t, e) {
		function n() {
			this.constructor = t
		}
		Wl(t, e),
			t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
				new n)
	}
	var Ul = function() {
		return (Ul = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function Vl(i, a, s, u) {
		return new (s || (s = Promise))(function(t, e) {
				function n(t) {
					try {
						o(u.next(t))
					} catch (t) {
						e(t)
					}
				}
				function r(t) {
					try {
						o(u.throw(t))
					} catch (t) {
						e(t)
					}
				}
				function o(e) {
					e.done ? t(e.value) : new s(function(t) {
							t(e.value)
						}
					).then(n, r)
				}
				o((u = u.apply(i, a || [])).next())
			}
		)
	}
	function Gl(n, r) {
		var o, i, a, t, s = {
			label: 0,
			sent: function() {
				if (1 & a[0])
					throw a[1];
				return a[1]
			},
			trys: [],
			ops: []
		};
		return t = {
			next: e(0),
			throw: e(1),
			return: e(2)
		},
		"function" == typeof Symbol && (t[Symbol.iterator] = function() {
				return this
			}
		),
			t;
		function e(e) {
			return function(t) {
				return function(e) {
					if (o)
						throw new TypeError("Generator is already executing.");
					for (; s; )
						try {
							if (o = 1,
							i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i),
								0) : i.next) && !(a = a.call(i, e[1])).done)
								return a;
							switch (i = 0,
							a && (e = [2 & e[0], a.value]),
								e[0]) {
								case 0:
								case 1:
									a = e;
									break;
								case 4:
									return s.label++,
										{
											value: e[1],
											done: !1
										};
								case 5:
									s.label++,
										i = e[1],
										e = [0];
									continue;
								case 7:
									e = s.ops.pop(),
										s.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
										s = 0;
										continue
									}
									if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
										s.label = e[1];
										break
									}
									if (6 === e[0] && s.label < a[1]) {
										s.label = a[1],
											a = e;
										break
									}
									if (a && s.label < a[2]) {
										s.label = a[2],
											s.ops.push(e);
										break
									}
									a[2] && s.ops.pop(),
										s.trys.pop();
									continue
							}
							e = r.call(n, s)
						} catch (t) {
							e = [6, t],
								i = 0
						} finally {
							o = a = 0
						}
					if (5 & e[0])
						throw e[1];
					return {
						value: e[0] ? e[1] : void 0,
						done: !0
					}
				}([e, t])
			}
		}
	}
	var Hl, ql = function() {
		function l(t, e) {
			void 0 === e && (e = !1);
			var n = t || {}
				, r = [n.left, n.top, n.right, n.bottom].every(Fl)
				, o = [n.x, n.y, n.width, n.height].every(Fl);
			if (!o && !r)
				throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(n));
			var i = o ? [n.x, n.y, n.width, n.height] : [n.left, n.top, n.right - n.left, n.bottom - n.top]
				, a = i[0]
				, s = i[1]
				, u = i[2]
				, c = i[3];
			l.assertIsValidBox({
				x: a,
				y: s,
				width: u,
				height: c
			}, "Box.constructor", e),
				this._x = a,
				this._y = s,
				this._width = u,
				this._height = c
		}
		return l.isRect = function(t) {
			return !!t && [t.x, t.y, t.width, t.height].every(Fl)
		}
			,
			l.assertIsValidBox = function(t, e, n) {
				if (void 0 === n && (n = !1),
					!l.isRect(t))
					throw new Error(e + " - invalid box: " + JSON.stringify(t) + ", expected object with properties x, y, width, height");
				if (!n && (t.width < 0 || t.height < 0))
					throw new Error(e + " - width (" + t.width + ") and height (" + t.height + ") must be positive numbers")
			}
			,
			Object.defineProperty(l.prototype, "x", {
				get: function() {
					return this._x
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "y", {
				get: function() {
					return this._y
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "width", {
				get: function() {
					return this._width
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "height", {
				get: function() {
					return this._height
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "left", {
				get: function() {
					return this.x
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "top", {
				get: function() {
					return this.y
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "right", {
				get: function() {
					return this.x + this.width
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "bottom", {
				get: function() {
					return this.y + this.height
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(l.prototype, "area", {
				get: function() {
					return this.width * this.height
				},
				enumerable: !0,
				configurable: !0
			}),
			l.prototype.round = function() {
				var t = [this.x, this.y, this.width, this.height].map(function(t) {
					return Math.round(t)
				});
				return new l({
					x: t[0],
					y: t[1],
					width: t[2],
					height: t[3]
				})
			}
			,
			l.prototype.floor = function() {
				var t = [this.x, this.y, this.width, this.height].map(function(t) {
					return Math.floor(t)
				});
				return new l({
					x: t[0],
					y: t[1],
					width: t[2],
					height: t[3]
				})
			}
			,
			l.prototype.toSquare = function() {
				var t = this.x
					, e = this.y
					, n = this.width
					, r = this.height
					, o = Math.abs(n - r);
				return n < r && (t -= o / 2,
					n += o),
				r < n && (e -= o / 2,
					r += o),
					new l({
						x: t,
						y: e,
						width: n,
						height: r
					})
			}
			,
			l.prototype.rescale = function(t) {
				var e = Tl(t) ? t.width : t
					, n = Tl(t) ? t.height : t;
				return new l({
					x: this.x * e,
					y: this.y * n,
					width: this.width * e,
					height: this.height * n
				})
			}
			,
			l.prototype.pad = function(t, e) {
				var n = [this.x - t / 2, this.y - e / 2, this.width + t, this.height + e];
				return new l({
					x: n[0],
					y: n[1],
					width: n[2],
					height: n[3]
				})
			}
			,
			l.prototype.clipAtImageBorders = function(t, e) {
				var n = this.x
					, r = this.y
					, o = this.right
					, i = this.bottom
					, a = Math.max(n, 0)
					, s = Math.max(r, 0)
					, u = o - a
					, c = i - s;
				return new l({
					x: a,
					y: s,
					width: Math.min(u, t - a),
					height: Math.min(c, e - s)
				}).floor()
			}
			,
			l.prototype.shift = function(t, e) {
				var n = this.width
					, r = this.height;
				return new l({
					x: this.x + t,
					y: this.y + e,
					width: n,
					height: r
				})
			}
			,
			l.prototype.padAtBorders = function(t, e) {
				var n = this.width + 1
					, r = this.height + 1
					, o = n
					, i = r
					, a = this.left
					, s = this.top
					, u = this.right
					, c = this.bottom;
				return e < u && (o = -u + e + n,
					u = e),
				t < c && (i = -c + t + r,
					c = t),
				a < 1 && (i = 2 - a,
					a = 1),
				s < 1 && (i = 2 - s,
					s = 1),
					{
						dy: 1,
						edy: i,
						dx: 1,
						edx: o,
						y: s,
						ey: c,
						x: a,
						ex: u,
						w: n,
						h: r
					}
			}
			,
			l.prototype.calibrate = function(t) {
				return new l({
					left: this.left + t.left * this.width,
					top: this.top + t.top * this.height,
					right: this.right + t.right * this.width,
					bottom: this.bottom + t.bottom * this.height
				}).toSquare().round()
			}
			,
			l
	}(), jl = function(o) {
		function t(t, e, n, r) {
			return o.call(this, {
				left: t,
				top: e,
				right: n,
				bottom: r
			}) || this
		}
		return zl(t, o),
			t
	}(ql), $l = function() {
		function n(t, e, n, r, o) {
			this._imageDims = new bl(o.width,o.height),
				this._score = t,
				this._classScore = e,
				this._className = n,
				this._box = new ql(r).rescale(this._imageDims)
		}
		return Object.defineProperty(n.prototype, "score", {
			get: function() {
				return this._score
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(n.prototype, "classScore", {
				get: function() {
					return this._classScore
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "className", {
				get: function() {
					return this._className
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "box", {
				get: function() {
					return this._box
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "imageDims", {
				get: function() {
					return this._imageDims
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "imageWidth", {
				get: function() {
					return this.imageDims.width
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "imageHeight", {
				get: function() {
					return this.imageDims.height
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(n.prototype, "relativeBox", {
				get: function() {
					return new ql(this._box).rescale(this.imageDims.reverse())
				},
				enumerable: !0,
				configurable: !0
			}),
			n.prototype.forSize = function(t, e) {
				return new n(this.score,this.classScore,this.className,this.relativeBox,{
					width: t,
					height: e
				})
			}
			,
			n
	}();
	function Kl() {
		var t = window.fetch || function() {
				throw new Error("fetch - missing fetch implementation for browser environment")
			}
		;
		return {
			Canvas: HTMLCanvasElement,
			Image: HTMLImageElement,
			ImageData: ImageData,
			Video: HTMLVideoElement,
			createCanvasElement: function() {
				return document.createElement("canvas")
			},
			createImageElement: function() {
				return document.createElement("img")
			},
			fetch: t,
			readFile: function() {
				throw new Error("readFile - filesystem not available for browser environment")
			}
		}
	}
	function Xl(e) {
		var n = "";
		if (!e)
			try {
				e = require("fs")
			} catch (t) {
				n = t.toString()
			}
		return {
			readFile: e ? function(t) {
					return new Promise(function(n, r) {
							e.readFile(t, function(t, e) {
								return t ? r(t) : n(e)
							})
						}
					)
				}
				: function() {
					throw new Error("readFile - failed to require fs in nodejs environment with error: " + n)
				}
		}
	}
	function Yl() {
		var t = global.Canvas || global.HTMLCanvasElement
			, e = global.Image || global.HTMLImageElement
			, n = global.fetch || function() {
			throw new Error("fetch - missing fetch implementation for nodejs environment")
		}
			, r = Xl();
		return Ul({
			Canvas: t || function() {}
			,
			Image: e || function() {}
			,
			ImageData: global.ImageData || function() {}
			,
			Video: global.HTMLVideoElement || function() {}
			,
			createCanvasElement: function() {
				if (t)
					return new t;
				throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")
			},
			createImageElement: function() {
				if (e)
					return new e;
				throw new Error("createImageElement - missing Image implementation for nodejs environment")
			},
			fetch: n
		}, r)
	}
	function Ql() {
		return "object" == typeof window && "undefined" != typeof document && "undefined" != typeof HTMLImageElement && "undefined" != typeof HTMLCanvasElement && "undefined" != typeof HTMLVideoElement && "undefined" != typeof ImageData
	}
	function Jl() {
		return "object" == typeof global && "function" == typeof require && "undefined" != typeof module && "undefined" != typeof process && !!process.version
	}
	function Zl(t) {
		Hl = t
	}
	function th() {
		Ql() && Zl(Kl()),
		Jl() && Zl(Yl())
	}
	var eh = {
		getEnv: function() {
			if (!Hl)
				throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
			return Hl
		},
		setEnv: Zl,
		initialize: th,
		createBrowserEnv: Kl,
		createFileSystem: Xl,
		createNodejsEnv: Yl,
		monkeyPatch: function(t) {
			if (Hl || th(),
				!Hl)
				throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
			var e = t.Canvas
				, n = void 0 === e ? Hl.Canvas : e
				, r = t.Image
				, o = void 0 === r ? Hl.Image : r;
			Hl.Canvas = n,
				Hl.Image = o,
				Hl.createCanvasElement = t.createCanvasElement || function() {
					return new n
				}
				,
				Hl.createImageElement = t.createImageElement || function() {
					return new o
				}
				,
				Hl.ImageData = t.ImageData || Hl.ImageData,
				Hl.Video = t.Video || Hl.Video,
				Hl.fetch = t.fetch || Hl.fetch,
				Hl.readFile = t.readFile || Hl.readFile
		},
		isBrowser: Ql,
		isNodejs: Jl
	};
	function nh(t) {
		var e = eh.getEnv()
			, n = e.Image
			, r = e.Video;
		return t instanceof n && t.complete || t instanceof r && 3 <= t.readyState
	}
	function rh(t) {
		return new Promise(function(e, n) {
				if (t instanceof eh.getEnv().Canvas || nh(t))
					return e();
				function r(t) {
					t.currentTarget && (t.currentTarget.removeEventListener("load", r),
						t.currentTarget.removeEventListener("error", o),
						e(t))
				}
				function o(t) {
					t.currentTarget && (t.currentTarget.removeEventListener("load", r),
						t.currentTarget.removeEventListener("error", o),
						n(t))
				}
				t.addEventListener("load", r),
					t.addEventListener("error", o)
			}
		)
	}
	function oh(t) {
		return new Promise(function(e, n) {
				if (!(t instanceof Blob))
					return n("bufferToImage - expected buf to be of type: Blob");
				var r = new FileReader;
				r.onload = function() {
					if ("string" != typeof r.result)
						return n("bufferToImage - expected reader.result to be a string, in onload");
					var t = eh.getEnv().createImageElement();
					t.onload = function() {
						return e(t)
					}
						,
						t.onerror = n,
						t.src = r.result
				}
					,
					r.onerror = n,
					r.readAsDataURL(t)
			}
		)
	}
	function ih(t) {
		var e = t.getContext("2d");
		if (!e)
			throw new Error("canvas 2d context is null");
		return e
	}
	function ah(t) {
		var e = eh.getEnv()
			, n = e.Image
			, r = e.Video;
		return t instanceof n ? new bl(t.naturalWidth,t.naturalHeight) : t instanceof r ? new bl(t.videoWidth,t.videoHeight) : new bl(t.width,t.height)
	}
	function sh(t) {
		var e = t.width
			, n = t.height
			, r = (0,
			eh.getEnv().createCanvasElement)();
		return r.width = e,
			r.height = n,
			r
	}
	function uh(t, e) {
		var n = eh.getEnv().ImageData;
		if (!(t instanceof n || nh(t)))
			throw new Error("createCanvasFromMedia - media has not finished loading yet");
		var r = e || ah(t)
			, o = r.width
			, i = r.height
			, a = sh({
			width: o,
			height: i
		});
		return t instanceof n ? ih(a).putImageData(t, 0, 0) : ih(a).drawImage(t, 0, 0, o, i),
			a
	}
	function ch(t) {
		return void 0 === t && (t = {}),
			Object.assign({}, {
				boxColor: "blue",
				textColor: "red",
				lineWidth: 2,
				fontSize: 20,
				fontStyle: "Georgia",
				withScore: !0,
				withClassName: !0
			}, t)
	}
	function lh(t, e, n, r, o, i) {
		var a = Object.assign(ch(), i || {});
		t.strokeStyle = a.boxColor,
			t.lineWidth = a.lineWidth,
			t.strokeRect(e, n, r, o)
	}
	th();
	var hh = function(r) {
		function t(t, e) {
			var n = r.call(this, t) || this;
			return n._text = e,
				n
		}
		return zl(t, r),
			Object.defineProperty(t.prototype, "text", {
				get: function() {
					return this._text
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}(ql)
		, ph = function(r) {
		function t(t, e) {
			var n = r.call(this, t) || this;
			return n._label = e,
				n
		}
		return zl(t, r),
			t.assertIsValidLabeledBox = function(t, e) {
				if (ql.assertIsValidBox(t, e),
					!Fl(t.label))
					throw new Error(e + " - expected property label (" + t.label + ") to be a number")
			}
			,
			Object.defineProperty(t.prototype, "label", {
				get: function() {
					return this._label
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}(ql)
		, fh = function(i) {
		function t(t, e, n, r) {
			var o = i.call(this, t, e) || this;
			return o._score = n,
				o._classScore = r,
				o
		}
		return zl(t, i),
			t.assertIsValidPredictedBox = function(t, e) {
				if (ph.assertIsValidLabeledBox(t, e),
				!Ol(t.score) || !Ol(t.classScore))
					throw new Error(e + " - expected properties score (" + t.score + ") and (" + t.classScore + ") to be a number between [0, 1]")
			}
			,
			Object.defineProperty(t.prototype, "score", {
				get: function() {
					return this._score
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "classScore", {
				get: function() {
					return this._classScore
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}(ph);
	function dh(t, e, n, r, o) {
		void 0 === o && (o = {});
		var i = Object.assign(ch(), o)
			, a = 2 + i.lineWidth;
		t.fillStyle = i.textColor,
			t.font = i.fontSize + "px " + i.fontStyle,
			t.fillText(r, e + a, n + a + .6 * i.fontSize)
	}
	function mh(t) {
		return eh.isNodejs() || "string" != typeof t ? t : document.getElementById(t)
	}
	function vh(n, r) {
		return Vl(this, void 0, void 0, function() {
			var e;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return [4, (0,
							eh.getEnv().fetch)(n, r)];
					case 1:
						if (!((e = t.sent()).status < 400))
							throw new Error("failed to fetch: (" + e.status + ") " + e.statusText + ", from url: " + e.url);
						return [2, e]
				}
			})
		})
	}
	function gh(e) {
		return Vl(this, void 0, void 0, function() {
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return [4, vh(e)];
					case 1:
						return [2, t.sent().json()]
				}
			})
		})
	}
	function yh(s, u) {
		return Vl(this, void 0, void 0, function() {
			var e, n, r, o, i, a;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return e = u || eh.getEnv().createCanvasElement(),
							n = s.shape.slice(Rl(s) ? 1 : 0),
							r = n[0],
							o = n[1],
							i = n[2],
							[4, oi(a = zt(function() {
								return s.as3D(r, o, i).toInt()
							}), e)];
					case 1:
						return t.sent(),
							a.dispose(),
							[2, e]
				}
			})
		})
	}
	function xh(t, e, n) {
		void 0 === n && (n = !1);
		var r = eh.getEnv()
			, o = r.Image
			, i = r.Canvas;
		if (!(t instanceof o || t instanceof i))
			throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
		var a = ah(t)
			, s = e / Math.max(a.height, a.width)
			, u = s * a.width
			, c = s * a.height
			, l = sh({
			width: e,
			height: e
		})
			, h = t instanceof i ? t : uh(t)
			, p = Math.abs(u - c) / 2
			, f = n && u < c ? p : 0
			, d = n && c < u ? p : 0;
		return ih(l).drawImage(h, f, d, u, c),
			l
	}
	function wh(t) {
		var e = eh.getEnv()
			, n = e.Image
			, r = e.Canvas
			, o = e.Video;
		return t instanceof n || t instanceof r || t instanceof o
	}
	function bh(i, a) {
		return Vl(this, void 0, void 0, function() {
			var e, n, r, o;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return e = Ll(i, a),
							n = e.manifestUri,
							r = e.modelBaseUri,
							[4, gh(n)];
					case 1:
						return o = t.sent(),
							[2, Uc.loadWeights(o, r)]
				}
			})
		})
	}
	function Eh(l, h) {
		return void 0 === h && (h = !1),
			zt(function() {
				var t = l.shape.slice(1)
					, e = t[0]
					, n = t[1];
				if (e === n)
					return l;
				var r = Math.abs(e - n)
					, o = Math.round(r * (h ? .5 : 1))
					, i = n < e ? 2 : 1
					, a = function(t) {
					var e = l.shape.slice();
					return e[i] = t,
						Me(e, 0)
				}
					, s = a(o)
					, u = r - s.shape[i]
					, c = [h && u ? a(u) : null, l, s].filter(function(t) {
					return !!t
				}).map(function(t) {
					return t.toFloat()
				});
				return Vo(c, i)
			})
	}
	var Ch = function() {
		function t(t, e) {
			void 0 === e && (e = !1);
			var o = this;
			if (this._imageTensors = [],
				this._canvases = [],
				this._treatAsBatchInput = !1,
				this._inputDimensions = [],
				!Array.isArray(t))
				throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + t);
			this._treatAsBatchInput = e,
				this._batchSize = t.length,
				t.forEach(function(t, e) {
					if (_l(t))
						return o._imageTensors[e] = t,
							void (o._inputDimensions[e] = t.shape);
					if (Rl(t)) {
						var n = t.shape[0];
						if (1 !== n)
							throw new Error("NetInput - tf.Tensor4D with batchSize " + n + " passed, but not supported in input array");
						return o._imageTensors[e] = t,
							void (o._inputDimensions[e] = t.shape.slice(1))
					}
					var r = t instanceof eh.getEnv().Canvas ? t : uh(t);
					o._canvases[e] = r,
						o._inputDimensions[e] = [r.height, r.width, 3]
				})
		}
		return Object.defineProperty(t.prototype, "imageTensors", {
			get: function() {
				return this._imageTensors
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "canvases", {
				get: function() {
					return this._canvases
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "isBatchInput", {
				get: function() {
					return 1 < this.batchSize || this._treatAsBatchInput
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "batchSize", {
				get: function() {
					return this._batchSize
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "inputDimensions", {
				get: function() {
					return this._inputDimensions
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "inputSize", {
				get: function() {
					return this._inputSize
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "reshapedInputDimensions", {
				get: function() {
					var n = this;
					return Ml(this.batchSize, 0, 1).map(function(t, e) {
						return n.getReshapedInputDimensions(e)
					})
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.getInput = function(t) {
				return this.canvases[t] || this.imageTensors[t]
			}
			,
			t.prototype.getInputDimensions = function(t) {
				return this._inputDimensions[t]
			}
			,
			t.prototype.getInputHeight = function(t) {
				return this._inputDimensions[t][0]
			}
			,
			t.prototype.getInputWidth = function(t) {
				return this._inputDimensions[t][1]
			}
			,
			t.prototype.getReshapedInputDimensions = function(t) {
				if ("number" != typeof this.inputSize)
					throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
				return Il({
					width: this.getInputWidth(t),
					height: this.getInputHeight(t)
				}, this.inputSize)
			}
			,
			t.prototype.toBatchTensor = function(r, o) {
				var i = this;
				return void 0 === o && (o = !0),
					this._inputSize = r,
					zt(function() {
						var t = Ml(i.batchSize, 0, 1).map(function(t) {
							var e = i.getInput(t);
							if (e instanceof it) {
								var n = Rl(e) ? e : e.expandDims();
								return (n = Eh(n, o)).shape[1] === r && n.shape[2] === r || (n = ju.resizeBilinear(n, [r, r])),
									n.as3D(r, r, 3)
							}
							if (e instanceof eh.getEnv().Canvas)
								return di(xh(e, r, o));
							throw new Error("toBatchTensor - at batchIdx " + t + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + e)
						});
						return ki(t.map(function(t) {
							return t.toFloat()
						})).as4D(i.batchSize, r, r, 3)
					})
			}
			,
			t
	}();
	function Sh(n) {
		return Vl(this, void 0, void 0, function() {
			var r, o, e;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						if (n instanceof Ch)
							return [2, n];
						if (!(r = Array.isArray(n) ? n : [n]).length)
							throw new Error("toNetInput - empty array passed as input");
						return o = function(t) {
							return Array.isArray(n) ? " at input index " + t + ":" : ""
						}
							,
							(e = r.map(mh)).forEach(function(t, e) {
								if (!wh(t) && !_l(t) && !Rl(t)) {
									if ("string" == typeof r[e])
										throw new Error("toNetInput -" + o(e) + " string passed, but could not resolve HTMLElement for element id " + r[e]);
									throw new Error("toNetInput -" + o(e) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id")
								}
								if (Rl(t)) {
									var n = t.shape[0];
									if (1 !== n)
										throw new Error("toNetInput -" + o(e) + " tf.Tensor4D with batchSize " + n + " passed, but not supported in input array")
								}
							}),
							[4, Promise.all(e.map(function(t) {
								return wh(t) && rh(t)
							}))];
					case 1:
						return t.sent(),
							[2, new Ch(e,Array.isArray(n))]
				}
			})
		})
	}
	var _h = function() {
		function t(t) {
			this._name = t,
				this._params = void 0,
				this._paramMappings = []
		}
		return Object.defineProperty(t.prototype, "params", {
			get: function() {
				return this._params
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "paramMappings", {
				get: function() {
					return this._paramMappings
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "isLoaded", {
				get: function() {
					return !!this.params
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.getParamFromPath = function(t) {
				var e = this.traversePropertyPath(t);
				return e.obj[e.objProp]
			}
			,
			t.prototype.reassignParamFromPath = function(t, e) {
				var n = this.traversePropertyPath(t)
					, r = n.obj
					, o = n.objProp;
				r[o].dispose(),
					r[o] = e
			}
			,
			t.prototype.getParamList = function() {
				var n = this;
				return this._paramMappings.map(function(t) {
					var e = t.paramPath;
					return {
						path: e,
						tensor: n.getParamFromPath(e)
					}
				})
			}
			,
			t.prototype.getTrainableParams = function() {
				return this.getParamList().filter(function(t) {
					return t.tensor instanceof at
				})
			}
			,
			t.prototype.getFrozenParams = function() {
				return this.getParamList().filter(function(t) {
					return !(t.tensor instanceof at)
				})
			}
			,
			t.prototype.variable = function() {
				var r = this;
				this.getFrozenParams().forEach(function(t) {
					var e = t.path
						, n = t.tensor;
					r.reassignParamFromPath(e, n.variable())
				})
			}
			,
			t.prototype.freeze = function() {
				var o = this;
				this.getTrainableParams().forEach(function(t) {
					var e = t.path
						, n = t.tensor
						, r = Ce(n.dataSync());
					n.dispose(),
						o.reassignParamFromPath(e, r)
				})
			}
			,
			t.prototype.dispose = function(e) {
				void 0 === e && (e = !0),
					this.getParamList().forEach(function(t) {
						if (e && t.tensor.isDisposed)
							throw new Error("param tensor has already been disposed for path " + t.path);
						t.tensor.dispose()
					}),
					this._params = void 0
			}
			,
			t.prototype.serializeParams = function() {
				return new Float32Array(this.getParamList().map(function(t) {
					var e = t.tensor;
					return Array.from(e.dataSync())
				}).reduce(function(t, e) {
					return t.concat(e)
				}))
			}
			,
			t.prototype.load = function(e) {
				return Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e instanceof Float32Array ? (this.extractWeights(e),
									[2]) : [4, this.loadFromUri(e)];
							case 1:
								return t.sent(),
									[2]
						}
					})
				})
			}
			,
			t.prototype.loadFromUri = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								if (n && "string" != typeof n)
									throw new Error(this._name + ".loadFromUri - expected model uri");
								return [4, bh(n, this.getDefaultModelName())];
							case 1:
								return e = t.sent(),
									this.loadFromWeightMap(e),
									[2]
						}
					})
				})
			}
			,
			t.prototype.loadFromDisk = function(h) {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i, a, s, u, c, l;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								if (h && "string" != typeof h)
									throw new Error(this._name + ".loadFromDisk - expected model file path");
								return e = eh.getEnv().readFile,
									n = Ll(h, this.getDefaultModelName()),
									r = n.manifestUri,
									o = n.modelBaseUri,
									i = function(t) {
										return Promise.all(t.map(function(t) {
											return e(t).then(function(t) {
												return t.buffer
											})
										}))
									}
									,
									a = Uc.weightsLoaderFactory(i),
									c = (u = JSON).parse,
									[4, e(r)];
							case 1:
								return s = c.apply(u, [t.sent().toString()]),
									[4, a(s, o)];
							case 2:
								return l = t.sent(),
									this.loadFromWeightMap(l),
									[2]
						}
					})
				})
			}
			,
			t.prototype.loadFromWeightMap = function(t) {
				var e = this.extractParamsFromWeigthMap(t)
					, n = e.paramMappings
					, r = e.params;
				this._paramMappings = n,
					this._params = r
			}
			,
			t.prototype.extractWeights = function(t) {
				var e = this.extractParams(t)
					, n = e.paramMappings
					, r = e.params;
				this._paramMappings = n,
					this._params = r
			}
			,
			t.prototype.traversePropertyPath = function(n) {
				if (!this.params)
					throw new Error("traversePropertyPath - model has no loaded params");
				var t = n.split("/").reduce(function(t, e) {
					if (!t.nextObj.hasOwnProperty(e))
						throw new Error("traversePropertyPath - object does not have property " + e + ", for path " + n);
					return {
						obj: t.nextObj,
						objProp: e,
						nextObj: t.nextObj[e]
					}
				}, {
					nextObj: this.params
				})
					, e = t.obj
					, r = t.objProp;
				if (!(e && r && e[r]instanceof it))
					throw new Error("traversePropertyPath - parameter is not a tensor, for path " + n);
				return {
					obj: e,
					objProp: r
				}
			}
			,
			t
	}();
	function Rh(t, e, n) {
		void 0 === n && (n = !0);
		var r = Math.max(0, Math.min(t.right, e.right) - Math.max(t.left, e.left)) * Math.max(0, Math.min(t.bottom, e.bottom) - Math.max(t.top, e.top));
		return n ? r / (t.area + e.area - r) : r / Math.min(t.area, e.area)
	}
	function Nh(s, t, u, c) {
		void 0 === c && (c = !0);
		for (var l = t.map(function(t, e) {
			return {
				score: t,
				boxIndex: e
			}
		}).sort(function(t, e) {
			return t.score - e.score
		}).map(function(t) {
			return t.boxIndex
		}), h = [], e = function() {
			var t = l.pop();
			h.push(t);
			for (var e = l, n = [], r = 0; r < e.length; r++) {
				var o = e[r]
					, i = s[t]
					, a = s[o];
				n.push(Rh(i, a, c))
			}
			l = l.filter(function(t, e) {
				return n[e] <= u
			})
		}; 0 < l.length; )
			e();
		return h
	}
	function kh(s, u) {
		return zt(function() {
			var t = u[0]
				, e = u[1]
				, n = u[2]
				, r = Me(s.shape.slice(0, 3).concat([1]), t)
				, o = Me(s.shape.slice(0, 3).concat([1]), e)
				, i = Me(s.shape.slice(0, 3).concat([1]), n)
				, a = Vo([r, o, i], 3);
			return qs(s, a)
		})
	}
	function Dh(t) {
		return 1 / (1 + Math.exp(-t))
	}
	var Th, Ih, Ah = function(t) {
		return "number" == typeof t
	};
	function Mh(t) {
		if (!t)
			throw new Error("invalid config: " + t);
		if ("boolean" != typeof t.withSeparableConvs)
			throw new Error("config.withSeparableConvs has to be a boolean, have: " + t.withSeparableConvs);
		if (!Ah(t.iouThreshold) || t.iouThreshold < 0 || 1 < t.iouThreshold)
			throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + t.iouThreshold);
		if (!Array.isArray(t.classes) || !t.classes.length || !t.classes.every(function(t) {
			return "string" == typeof t
		}))
			throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(t.classes));
		if (!Array.isArray(t.anchors) || !t.anchors.length || !t.anchors.map(function(t) {
			return t || {}
		}).every(function(t) {
			return Ah(t.x) && Ah(t.y)
		}))
			throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(t.anchors));
		if (t.meanRgb && (!Array.isArray(t.meanRgb) || 3 !== t.meanRgb.length || !t.meanRgb.every(Ah)))
			throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(t.meanRgb))
	}
	function Fh(e) {
		return zt(function() {
			var t = Ws(e, Se(.10000000149011612));
			return Rs(nu(qs(e, t)), t)
		})
	}
	function Oh(e, n) {
		return zt(function() {
			var t = gi(e, [[0, 0], [1, 1], [1, 1], [0, 0]]);
			return t = Oa(t, n.conv.filters, [1, 1], "valid"),
				t = qs(t, n.bn.sub),
				t = Ws(t, n.bn.truediv),
				Fh(t = Rs(t, n.conv.bias))
		})
	}
	function Ph(e, n) {
		return zt(function() {
			var t = gi(e, [[0, 0], [1, 1], [1, 1], [0, 0]]);
			return t = Wa(t, n.depthwise_filter, n.pointwise_filter, [1, 1], "valid"),
				Fh(t = Rs(t, n.bias))
		})
	}
	function Bh(s, u) {
		var c = vl(s, u);
		var t = xl(s, u);
		return {
			extractConvParams: c,
			extractConvWithBatchNormParams: function(t, e, n) {
				var r, o, i, a;
				return {
					conv: c(t, e, 3, n + "/conv"),
					bn: (o = n + "/bn",
						i = _e(s(r = e)),
						a = _e(s(r)),
						u.push({
							paramPath: o + "/sub"
						}, {
							paramPath: o + "/truediv"
						}),
						{
							sub: i,
							truediv: a
						})
				}
			},
			extractSeparableConvParams: t
		}
	}
	function Lh(t, e) {
		var n = Pl(t, e);
		function r(t) {
			return {
				filters: n(t + "/filters", 4),
				bias: n(t + "/bias", 1)
			}
		}
		return {
			extractConvParams: r,
			extractConvWithBatchNormParams: function(t) {
				var e;
				return {
					conv: r(t + "/conv"),
					bn: {
						sub: n((e = t + "/bn") + "/sub", 1),
						truediv: n(e + "/truediv", 1)
					}
				}
			},
			extractSeparableConvParams: wl(n)
		}
	}
	(Ih = Th || (Th = {}))[Ih.XS = 224] = "XS",
		Ih[Ih.SM = 320] = "SM",
		Ih[Ih.MD = 416] = "MD",
		Ih[Ih.LG = 608] = "LG";
	var Wh = function() {
		function t(t) {
			var e = void 0 === t ? {} : t
				, n = e.inputSize
				, r = e.scoreThreshold;
			if (this._name = "TinyYolov2Options",
				this._inputSize = n || 416,
				this._scoreThreshold = r || .5,
			"number" != typeof this._inputSize || this._inputSize % 32 != 0)
				throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
			if ("number" != typeof this._scoreThreshold || this._scoreThreshold <= 0 || 1 <= this._scoreThreshold)
				throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1")
		}
		return Object.defineProperty(t.prototype, "inputSize", {
			get: function() {
				return this._inputSize
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "scoreThreshold", {
				get: function() {
					return this._scoreThreshold
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}()
		, zh = function(n) {
		function r(t) {
			var e = n.call(this, "TinyYolov2") || this;
			return Mh(t),
				e._config = t,
				e
		}
		return zl(r, n),
			Object.defineProperty(r.prototype, "config", {
				get: function() {
					return this._config
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(r.prototype, "withClassScores", {
				get: function() {
					return this.config.withClassScores || 1 < this.config.classes.length
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(r.prototype, "boxEncodingSize", {
				get: function() {
					return 5 + (this.withClassScores ? this.config.classes.length : 0)
				},
				enumerable: !0,
				configurable: !0
			}),
			r.prototype.runTinyYolov2 = function(t, e) {
				var n = Oh(t, e.conv0);
				return n = Oh(n = Ka(n, [2, 2], [2, 2], "same"), e.conv1),
					n = Oh(n = Ka(n, [2, 2], [2, 2], "same"), e.conv2),
					n = Oh(n = Ka(n, [2, 2], [2, 2], "same"), e.conv3),
					n = Oh(n = Ka(n, [2, 2], [2, 2], "same"), e.conv4),
					n = Oh(n = Ka(n, [2, 2], [2, 2], "same"), e.conv5),
					dl(n = Oh(n = Oh(n = Ka(n, [2, 2], [1, 1], "same"), e.conv6), e.conv7), e.conv8, "valid", !1)
			}
			,
			r.prototype.runMobilenet = function(t, e) {
				var n = this.config.isFirstLayerConv2d ? Fh(dl(t, e.conv0, "valid", !1)) : Ph(t, e.conv0);
				return n = Ph(n = Ka(n, [2, 2], [2, 2], "same"), e.conv1),
					n = Ph(n = Ka(n, [2, 2], [2, 2], "same"), e.conv2),
					n = Ph(n = Ka(n, [2, 2], [2, 2], "same"), e.conv3),
					n = Ph(n = Ka(n, [2, 2], [2, 2], "same"), e.conv4),
					n = Ph(n = Ka(n, [2, 2], [2, 2], "same"), e.conv5),
					n = Ka(n, [2, 2], [1, 1], "same"),
					n = e.conv6 ? Ph(n, e.conv6) : n,
					dl(n = e.conv7 ? Ph(n, e.conv7) : n, e.conv8, "valid", !1)
			}
			,
			r.prototype.forwardInput = function(e, n) {
				var r = this
					, o = this.params;
				if (!o)
					throw new Error("TinyYolov2 - load model before inference");
				return zt(function() {
					var t = e.toBatchTensor(n, !1).toFloat();
					return t = (t = r.config.meanRgb ? kh(t, r.config.meanRgb) : t).div(Se(256)),
						r.config.withSeparableConvs ? r.runMobilenet(t, o) : r.runTinyYolov2(t, o)
				})
			}
			,
			r.prototype.forward = function(n, r) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [4, e.apply(this, [t.sent(), r])];
							case 2:
								return [2, t.sent()]
						}
					})
				})
			}
			,
			r.prototype.detect = function(m, v) {
				return void 0 === v && (v = {}),
					Vl(this, void 0, void 0, function() {
						var e, n, r, o, i, a, s, u, c, l, h, p, f, d = this;
						return Gl(this, function(t) {
							switch (t.label) {
								case 0:
									return e = new Wh(v),
										n = e.inputSize,
										r = e.scoreThreshold,
										[4, Sh(m)];
								case 1:
									return o = t.sent(),
										[4, this.forwardInput(o, n)];
								case 2:
									return i = t.sent(),
										a = zt(function() {
											return Ii(i)[0].expandDims()
										}),
										s = {
											width: o.getInputWidth(0),
											height: o.getInputHeight(0)
										},
										u = this.extractBoxes(a, o.getReshapedInputDimensions(0), r),
										i.dispose(),
										a.dispose(),
										c = u.map(function(t) {
											return t.box
										}),
										l = u.map(function(t) {
											return t.score
										}),
										h = u.map(function(t) {
											return t.classScore
										}),
										p = u.map(function(t) {
											return d.config.classes[t.label]
										}),
										f = Nh(c.map(function(t) {
											return t.rescale(n)
										}), l, this.config.iouThreshold, !0),
										[2, f.map(function(t) {
											return new $l(l[t],h[t],p[t],c[t],s)
										})]
							}
						})
					})
			}
			,
			r.prototype.getDefaultModelName = function() {
				return ""
			}
			,
			r.prototype.extractParamsFromWeigthMap = function(t) {
				return function(t, e) {
					var n, r = [], o = Lh(t, r), i = o.extractConvParams, a = o.extractConvWithBatchNormParams, s = o.extractSeparableConvParams;
					if (e.withSeparableConvs) {
						var u = e.filterSizes && e.filterSizes.length || 9;
						n = {
							conv0: e.isFirstLayerConv2d ? i("conv0") : s("conv0"),
							conv1: s("conv1"),
							conv2: s("conv2"),
							conv3: s("conv3"),
							conv4: s("conv4"),
							conv5: s("conv5"),
							conv6: 7 < u ? s("conv6") : void 0,
							conv7: 8 < u ? s("conv7") : void 0,
							conv8: i("conv8")
						}
					} else
						n = {
							conv0: a("conv0"),
							conv1: a("conv1"),
							conv2: a("conv2"),
							conv3: a("conv3"),
							conv4: a("conv4"),
							conv5: a("conv5"),
							conv6: a("conv6"),
							conv7: a("conv7"),
							conv8: i("conv8")
						};
					return ml(t, r),
						{
							params: n,
							paramMappings: r
						}
				}(t, this.config)
			}
			,
			r.prototype.extractParams = function(t) {
				var e = this.config.filterSizes || r.DEFAULT_FILTER_SIZES
					, n = e ? e.length : void 0;
				if (7 !== n && 8 !== n && 9 !== n)
					throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + n + " filterSizes in config");
				return function(t, e, n, r) {
					var o, i = Bl(t), a = i.extractWeights, s = i.getRemainingWeights, u = [], c = Bh(a, u), l = c.extractConvParams, h = c.extractConvWithBatchNormParams, p = c.extractSeparableConvParams;
					if (e.withSeparableConvs) {
						var f = r[0]
							, d = r[1]
							, m = r[2]
							, v = r[3]
							, g = r[4]
							, y = r[5]
							, x = r[6]
							, w = r[7]
							, b = r[8];
						o = {
							conv0: e.isFirstLayerConv2d ? l(f, d, 3, "conv0") : p(f, d, "conv0"),
							conv1: p(d, m, "conv1"),
							conv2: p(m, v, "conv2"),
							conv3: p(v, g, "conv3"),
							conv4: p(g, y, "conv4"),
							conv5: p(y, x, "conv5"),
							conv6: w ? p(x, w, "conv6") : void 0,
							conv7: b ? p(w, b, "conv7") : void 0,
							conv8: l(b || w || x, 5 * n, 1, "conv8")
						}
					} else
						f = r[0],
							d = r[1],
							m = r[2],
							v = r[3],
							g = r[4],
							y = r[5],
							x = r[6],
							w = r[7],
							b = r[8],
							o = {
								conv0: h(f, d, "conv0"),
								conv1: h(d, m, "conv1"),
								conv2: h(m, v, "conv2"),
								conv3: h(v, g, "conv3"),
								conv4: h(g, y, "conv4"),
								conv5: h(y, x, "conv5"),
								conv6: h(x, w, "conv6"),
								conv7: h(w, b, "conv7"),
								conv8: l(b, 5 * n, 1, "conv8")
							};
					if (0 !== s().length)
						throw new Error("weights remaing after extract: " + s().length);
					return {
						params: o,
						paramMappings: u
					}
				}(t, this.config, this.boxEncodingSize, e)
			}
			,
			r.prototype.extractBoxes = function(e, t, n) {
				for (var r = this, o = t.width, i = t.height, a = Math.max(o, i), s = a / o, u = a / i, c = e.shape[1], l = this.config.anchors.length, h = zt(function() {
					var t = e.reshape([c, c, l, r.boxEncodingSize]);
					return [t.slice([0, 0, 0, 0], [c, c, l, 4]), t.slice([0, 0, 0, 4], [c, c, l, 1]), r.withClassScores ? ye(t.slice([0, 0, 0, 5], [c, c, l, r.config.classes.length]), 3) : Se(0)]
				}), p = h[0], f = h[1], d = h[2], m = [], v = 0; v < c; v++)
					for (var g = 0; g < c; g++)
						for (var y = 0; y < l; y++) {
							var x = Dh(f.get(v, g, y, 0));
							if (!n || n < x) {
								var w = (g + Dh(p.get(v, g, y, 0))) / c * s
									, b = (v + Dh(p.get(v, g, y, 1))) / c * u
									, E = Math.exp(p.get(v, g, y, 2)) * this.config.anchors[y].x / c * s
									, C = Math.exp(p.get(v, g, y, 3)) * this.config.anchors[y].y / c * u
									, S = w - E / 2
									, _ = b - C / 2
									, R = {
									row: v,
									col: g,
									anchor: y
								}
									, N = this.withClassScores ? this.extractPredictedClass(d, R) : {
									classScore: 1,
									label: 0
								}
									, k = N.classScore
									, D = N.label;
								m.push(Ul({
									box: new jl(S,_,S + E,_ + C),
									score: x,
									classScore: x * k,
									label: D
								}, R))
							}
						}
				return p.dispose(),
					f.dispose(),
					d.dispose(),
					m
			}
			,
			r.prototype.extractPredictedClass = function(n, t) {
				var r = t.row
					, o = t.col
					, i = t.anchor;
				return Array(this.config.classes.length).fill(0).map(function(t, e) {
					return n.get(r, o, i, e)
				}).map(function(t, e) {
					return {
						classScore: t,
						label: e
					}
				}).reduce(function(t, e) {
					return t.classScore > e.classScore ? t : e
				})
			}
			,
			r.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024],
			r
	}(_h)
		, Uh = Object.freeze({
		convLayer: dl,
		disposeUnusedWeightTensors: ml,
		extractConvParamsFactory: vl,
		extractFCParamsFactory: gl,
		extractSeparableConvParamsFactory: xl,
		loadSeparableConvParamsFactory: wl,
		extractWeightEntryFactory: Pl,
		extractWeightsFactory: Bl,
		getModelUris: Ll,
		SeparableConvParams: yl,
		TinyYolov2: zh,
		get TinyYolov2SizeType() {
			return Th
		},
		TinyYolov2Options: Wh,
		validateConfig: Mh
	})
		, Vh = function(o) {
		function t(t, e, n, r) {
			return o.call(this, {
				x: t,
				y: e,
				width: n,
				height: r
			}) || this
		}
		return zl(t, o),
			t
	}(ql)
		, Gh = function(r) {
		function t(t, e, n) {
			return r.call(this, t, t, "", e, n) || this
		}
		return zl(t, r),
			t.prototype.forSize = function(t, e) {
				return r.prototype.forSize.call(this, t, e)
			}
			,
			t
	}($l)
		, Hh = function() {
		function t(t, e, n) {
			void 0 === n && (n = new El(0,0));
			var r = e.width
				, o = e.height;
			this._imgDims = new bl(r,o),
				this._shift = n,
				this._positions = t.map(function(t) {
					return t.mul(new El(r,o)).add(n)
				})
		}
		return Object.defineProperty(t.prototype, "shift", {
			get: function() {
				return new El(this._shift.x,this._shift.y)
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "imageWidth", {
				get: function() {
					return this._imgDims.width
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "imageHeight", {
				get: function() {
					return this._imgDims.height
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "positions", {
				get: function() {
					return this._positions
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "relativePositions", {
				get: function() {
					var e = this;
					return this._positions.map(function(t) {
						return t.sub(e._shift).div(new El(e.imageWidth,e.imageHeight))
					})
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.forSize = function(t, e) {
				return new this.constructor(this.relativePositions,{
					width: t,
					height: e
				})
			}
			,
			t.prototype.shiftBy = function(t, e) {
				return new this.constructor(this.relativePositions,this._imgDims,new El(t,e))
			}
			,
			t.prototype.shiftByPoint = function(t) {
				return this.shiftBy(t.x, t.y)
			}
			,
			t.prototype.align = function(t) {
				if (t) {
					var e = t instanceof Gh ? t.box.floor() : t;
					return this.shiftBy(e.x, e.y).align()
				}
				var n = this.getRefPointsForAlignment()
					, r = n[0]
					, o = n[1]
					, i = n[2]
					, a = function(t) {
					return i.sub(t).magnitude()
				}
					, s = (a(r) + a(o)) / 2
					, u = Math.floor(s / .45)
					, c = Al(n)
					, l = Math.floor(Math.max(0, c.x - .5 * u))
					, h = Math.floor(Math.max(0, c.y - .43 * u));
				return new Vh(l,h,Math.min(u, this.imageWidth + l),Math.min(u, this.imageHeight + h))
			}
			,
			t.prototype.getRefPointsForAlignment = function() {
				throw new Error("getRefPointsForAlignment not implemented by base class")
			}
			,
			t
	}()
		, qh = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.getRefPointsForAlignment = function() {
				var t = this.positions;
				return [t[0], t[1], Al([t[3], t[4]])]
			}
			,
			e
	}(Hh)
		, jh = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.getJawOutline = function() {
				return this.positions.slice(0, 17)
			}
			,
			e.prototype.getLeftEyeBrow = function() {
				return this.positions.slice(17, 22)
			}
			,
			e.prototype.getRightEyeBrow = function() {
				return this.positions.slice(22, 27)
			}
			,
			e.prototype.getNose = function() {
				return this.positions.slice(27, 36)
			}
			,
			e.prototype.getLeftEye = function() {
				return this.positions.slice(36, 42)
			}
			,
			e.prototype.getRightEye = function() {
				return this.positions.slice(42, 48)
			}
			,
			e.prototype.getMouth = function() {
				return this.positions.slice(48, 68)
			}
			,
			e.prototype.getRefPointsForAlignment = function() {
				return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(Al)
			}
			,
			e
	}(Hh)
		, $h = function() {
		function t(t, e) {
			this._label = t,
				this._distance = e
		}
		return Object.defineProperty(t.prototype, "label", {
			get: function() {
				return this._label
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "distance", {
				get: function() {
					return this._distance
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.toString = function(t) {
				return void 0 === t && (t = !0),
				this.label + (t ? " (" + Dl(this.distance) + ")" : "")
			}
			,
			t
	}()
		, Kh = function() {
		function t(t, e) {
			if ("string" != typeof t)
				throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");
			if (!Array.isArray(e) || e.some(function(t) {
				return !(t instanceof Float32Array)
			}))
				throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
			this._label = t,
				this._descriptors = e
		}
		return Object.defineProperty(t.prototype, "label", {
			get: function() {
				return this._label
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "descriptors", {
				get: function() {
					return this._descriptors
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}();
	function Xh(i, a, t) {
		if (void 0 === t && (t = !1),
			i.beginPath(),
			a.slice(1).forEach(function(t, e) {
				var n = t.x
					, r = t.y
					, o = a[e];
				i.moveTo(o.x, o.y),
					i.lineTo(n, r)
			}),
			t) {
			var e = a[a.length - 1]
				, n = a[0];
			if (!e || !n)
				return;
			i.moveTo(e.x, e.y),
				i.lineTo(n.x, n.y)
		}
		i.stroke()
	}
	function Yh(s, u) {
		return Vl(this, void 0, void 0, function() {
			var e, n, r, o, i, a;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return e = eh.getEnv().Canvas,
							(n = s)instanceof e ? [3, 5] : [4, Sh(s)];
					case 1:
						if (1 < (r = t.sent()).batchSize)
							throw new Error("extractFaces - batchSize > 1 not supported");
						return (o = r.getInput(0))instanceof e ? (i = o,
							[3, 4]) : [3, 2];
					case 2:
						return [4, yh(o)];
					case 3:
						i = t.sent(),
							t.label = 4;
					case 4:
						n = i,
							t.label = 5;
					case 5:
						return a = ih(n),
							[2, u.map(function(t) {
								return t instanceof Gh ? t.forSize(n.width, n.height).box.floor() : t
							}).map(function(t) {
								return t.clipAtImageBorders(n.width, n.height)
							}).map(function(t) {
								var e = t.x
									, n = t.y
									, r = t.width
									, o = t.height
									, i = sh({
									width: r,
									height: o
								});
								return ih(i).putImageData(a.getImageData(e, n, r, o), 0, 0),
									i
							})]
				}
			})
		})
	}
	function Qh(u, e) {
		return Vl(this, void 0, void 0, function() {
			return Gl(this, function(t) {
				if (!_l(u) && !Rl(u))
					throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");
				if (Rl(u) && 1 < u.shape[0])
					throw new Error("extractFaceTensors - batchSize > 1 not supported");
				return [2, zt(function() {
					var t = u.shape.slice(Rl(u) ? 1 : 0)
						, i = t[0]
						, a = t[1]
						, s = t[2];
					return e.map(function(t) {
						return t instanceof Gh ? t.forSize(a, i).box : t
					}).map(function(t) {
						return t.clipAtImageBorders(a, i)
					}).map(function(t) {
						var e = t.x
							, n = t.y
							, r = t.width
							, o = t.height;
						return ts(u.as3D(i, a, s), [n, e, 0], [o, r, s])
					})
				})]
			})
		})
	}
	function Jh(e, n, r) {
		return zt(function() {
			var t = Wa(e, n.depthwise_filter, n.pointwise_filter, r, "same");
			return t = Rs(t, n.bias)
		})
	}
	function Zh(r, o, i) {
		return void 0 === i && (i = !1),
			zt(function() {
				var t = nu(i ? Rs(Oa(r, o.conv0.filters, [2, 2], "same"), o.conv0.bias) : Jh(r, o.conv0, [2, 2]))
					, e = Jh(t, o.conv1, [1, 1])
					, n = Jh(nu(Rs(t, e)), o.conv2, [1, 1]);
				return nu(Rs(t, Rs(e, n)))
			})
	}
	function tp(o, i, a, s) {
		return void 0 === a && (a = !1),
		void 0 === s && (s = !0),
			zt(function() {
				var t = nu(a ? Rs(Oa(o, i.conv0.filters, s ? [2, 2] : [1, 1], "same"), i.conv0.bias) : Jh(o, i.conv0, s ? [2, 2] : [1, 1]))
					, e = Jh(t, i.conv1, [1, 1])
					, n = Jh(nu(Rs(t, e)), i.conv2, [1, 1])
					, r = Jh(nu(Rs(t, Rs(e, n))), i.conv3, [1, 1]);
				return nu(Rs(t, Rs(e, Rs(n, r))))
			})
	}
	function ep(a, s) {
		function i(t, e, n) {
			var r = ke(a(9 * t), [3, 3, t, 1])
				, o = ke(a(t * e), [1, 1, t, e])
				, i = _e(a(e));
			return s.push({
				paramPath: n + "/depthwise_filter"
			}, {
				paramPath: n + "/pointwise_filter"
			}, {
				paramPath: n + "/bias"
			}),
				new yl(r,o,i)
		}
		var o = vl(a, s);
		function u(t, e, n, r) {
			return void 0 === r && (r = !1),
				{
					conv0: r ? o(t, e, 3, n + "/conv0") : i(t, e, n + "/conv0"),
					conv1: i(e, e, n + "/conv1"),
					conv2: i(e, e, n + "/conv2")
				}
		}
		return {
			extractDenseBlock3Params: u,
			extractDenseBlock4Params: function(t, e, n, r) {
				void 0 === r && (r = !1);
				var o = u(t, e, n, r);
				return {
					conv0: o.conv0,
					conv1: o.conv1,
					conv2: o.conv2,
					conv3: i(e, e, n + "/conv3")
				}
			}
		}
	}
	function np(t, e) {
		var o = Pl(t, e);
		function n(t) {
			return {
				filters: o(t + "/filters", 4),
				bias: o(t + "/bias", 1)
			}
		}
		function r(t) {
			var e = o(t + "/depthwise_filter", 4)
				, n = o(t + "/pointwise_filter", 4)
				, r = o(t + "/bias", 1);
			return new yl(e,n,r)
		}
		return {
			extractDenseBlock3Params: function(t, e) {
				return void 0 === e && (e = !1),
					{
						conv0: e ? n(t + "/conv0") : r(t + "/conv0"),
						conv1: r(t + "/conv1"),
						conv2: r(t + "/conv2")
					}
			},
			extractDenseBlock4Params: function(t, e) {
				return void 0 === e && (e = !1),
					{
						conv0: e ? n(t + "/conv0") : r(t + "/conv0"),
						conv1: r(t + "/conv1"),
						conv2: r(t + "/conv2"),
						conv3: r(t + "/conv3")
					}
			}
		}
	}
	var rp = function(t) {
		function e() {
			return t.call(this, "FaceFeatureExtractor") || this
		}
		return zl(e, t),
			e.prototype.forwardInput = function(e) {
				var n = this.params;
				if (!n)
					throw new Error("FaceFeatureExtractor - load model before inference");
				return zt(function() {
					var t = tp(kh(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(Se(255)), n.dense0, !0);
					return t = tp(t = tp(t = tp(t, n.dense1), n.dense2), n.dense3),
						t = Xa(t, [7, 7], [2, 2], "valid")
				})
			}
			,
			e.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			e.prototype.getDefaultModelName = function() {
				return "face_feature_extractor_model"
			}
			,
			e.prototype.extractParamsFromWeigthMap = function(t) {
				return r = np(e = t, n = []).extractDenseBlock4Params,
					o = {
						dense0: r("dense0", !0),
						dense1: r("dense1"),
						dense2: r("dense2"),
						dense3: r("dense3")
					},
					ml(e, n),
					{
						params: o,
						paramMappings: n
					};
				var e, n, r, o
			}
			,
			e.prototype.extractParams = function(t) {
				return function(t) {
					var e = []
						, n = Bl(t)
						, r = n.extractWeights
						, o = n.getRemainingWeights
						, i = ep(r, e).extractDenseBlock4Params
						, a = i(3, 32, "dense0", !0)
						, s = i(32, 64, "dense1")
						, u = i(64, 128, "dense2")
						, c = i(128, 256, "dense3");
					if (0 !== o().length)
						throw new Error("weights remaing after extract: " + o().length);
					return {
						paramMappings: e,
						params: {
							dense0: a,
							dense1: s,
							dense2: u,
							dense3: c
						}
					}
				}(t)
			}
			,
			e
	}(_h);
	function op(t, e) {
		return zt(function() {
			return Rs(ka(t, e.weights), e.bias)
		})
	}
	var ip = function(r) {
		function t(t, e) {
			var n = r.call(this, t) || this;
			return n._faceFeatureExtractor = e,
				n
		}
		return zl(t, r),
			Object.defineProperty(t.prototype, "faceFeatureExtractor", {
				get: function() {
					return this._faceFeatureExtractor
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.runNet = function(e) {
				var n = this
					, r = this.params;
				if (!r)
					throw new Error(this._name + " - load model before inference");
				return zt(function() {
					var t = e instanceof Ch ? n.faceFeatureExtractor.forwardInput(e) : e;
					return op(t.as2D(t.shape[0], -1), r.fc)
				})
			}
			,
			t.prototype.dispose = function(t) {
				void 0 === t && (t = !0),
					this.faceFeatureExtractor.dispose(t),
					r.prototype.dispose.call(this, t)
			}
			,
			t.prototype.loadClassifierParams = function(t) {
				var e = this.extractClassifierParams(t)
					, n = e.params
					, r = e.paramMappings;
				this._params = n,
					this._paramMappings = r
			}
			,
			t.prototype.extractClassifierParams = function(t) {
				return function(t, e, n) {
					var r = []
						, o = Bl(t)
						, i = o.extractWeights
						, a = o.getRemainingWeights
						, s = gl(i, r)(e, n, "fc");
					if (0 !== a().length)
						throw new Error("weights remaing after extract: " + a().length);
					return {
						paramMappings: r,
						params: {
							fc: s
						}
					}
				}(t, this.getClassifierChannelsIn(), this.getClassifierChannelsOut())
			}
			,
			t.prototype.extractParamsFromWeigthMap = function(t) {
				var e, n, r, o, i, a, s, u, c = (e = t,
					n = {},
					r = {},
					Object.keys(e).forEach(function(t) {
						(t.startsWith("fc") ? r : n)[t] = e[t]
					}),
					{
						featureExtractorMap: n,
						classifierMap: r
					}), l = c.featureExtractorMap, h = c.classifierMap;
				return this.faceFeatureExtractor.loadFromWeightMap(l),
					s = Pl(o = h, a = []),
					u = {
						fc: (i = "fc",
							{
								weights: s(i + "/weights", 2),
								bias: s(i + "/bias", 1)
							})
					},
					ml(o, a),
					{
						params: u,
						paramMappings: a
					}
			}
			,
			t.prototype.extractParams = function(t) {
				var e = this.getClassifierChannelsIn()
					, n = this.getClassifierChannelsOut()
					, r = n * e + n
					, o = t.slice(0, t.length - r)
					, i = t.slice(t.length - r);
				return this.faceFeatureExtractor.extractWeights(o),
					this.extractClassifierParams(i)
			}
			,
			t
	}(_h)
		, ap = {
		neutral: 0,
		happy: 1,
		sad: 2,
		angry: 3,
		fearful: 4,
		disgusted: 5,
		surprised: 6
	}
		, sp = function(e) {
		function s(t) {
			return void 0 === t && (t = new rp),
			e.call(this, "FaceExpressionNet", t) || this
		}
		return zl(s, e),
			s.getFaceExpressionLabel = function(t) {
				var e = ap[t];
				if ("number" != typeof e)
					throw new Error("getFaceExpressionLabel - no label for faceExpression: " + t);
				return e
			}
			,
			s.decodeProbabilites = function(e) {
				if (7 !== e.length)
					throw new Error("decodeProbabilites - expected probabilities.length to be 7, have: " + e.length);
				return Object.keys(ap).map(function(t) {
					return {
						expression: t,
						probability: e[ap[t]]
					}
				})
			}
			,
			s.prototype.forwardInput = function(t) {
				var e = this;
				return zt(function() {
					return ye(e.runNet(t))
				})
			}
			,
			s.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			s.prototype.predictExpressions = function(a) {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i = this;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, Sh(a)];
							case 1:
								return e = t.sent(),
									[4, this.forwardInput(e)];
							case 2:
								return n = t.sent(),
									[4, Promise.all(Ii(n).map(function(n) {
										return Vl(i, void 0, void 0, function() {
											var e;
											return Gl(this, function(t) {
												switch (t.label) {
													case 0:
														return [4, n.data()];
													case 1:
														return e = t.sent(),
															n.dispose(),
															[2, e]
												}
											})
										})
									}))];
							case 3:
								return r = t.sent(),
									n.dispose(),
									o = r.map(function(t) {
										return s.decodeProbabilites(t)
									}),
									[2, e.isBatchInput ? o : o[0]]
						}
					})
				})
			}
			,
			s.prototype.getDefaultModelName = function() {
				return "face_expression_model"
			}
			,
			s.prototype.getClassifierChannelsIn = function() {
				return 256
			}
			,
			s.prototype.getClassifierChannelsOut = function() {
				return 7
			}
			,
			s
	}(ip)
		, up = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.postProcess = function(t, o, e) {
				var i = e.map(function(t) {
					var e = t.width
						, n = t.height
						, r = o / Math.max(n, e);
					return {
						width: e * r,
						height: n * r
					}
				})
					, a = i.length;
				return zt(function() {
					var n = function(t, e) {
						return ki([Me([68], t), Me([68], e)], 1).as2D(1, 136).as1D()
					}
						, r = function(t, e) {
						var n = i[t]
							, r = n.width
							, o = n.height;
						return e(r, o) ? Math.abs(r - o) / 2 : 0
					};
					return t.mul(Me([a, 136], o)).sub(ki(Array.from(Array(a), function(t, e) {
						return n(r(e, function(t, e) {
							return t < e
						}), r(e, function(t, e) {
							return e < t
						}))
					}))).div(ki(Array.from(Array(a), function(t, e) {
						return n(i[e].width, i[e].height)
					})))
				})
			}
			,
			e.prototype.forwardInput = function(e) {
				var n = this;
				return zt(function() {
					var t = n.runNet(e);
					return n.postProcess(t, e.inputSize, e.inputDimensions.map(function(t) {
						return {
							height: t[0],
							width: t[1]
						}
					}))
				})
			}
			,
			e.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			e.prototype.detectLandmarks = function(o) {
				return Vl(this, void 0, void 0, function() {
					var u, e, n, r = this;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, Sh(o)];
							case 1:
								return u = t.sent(),
									e = zt(function() {
										return Ii(r.forwardInput(u))
									}),
									[4, Promise.all(e.map(function(a, s) {
										return Vl(r, void 0, void 0, function() {
											var e, n, r, o, i;
											return Gl(this, function(t) {
												switch (t.label) {
													case 0:
														return r = (n = Array).from,
															[4, a.data()];
													case 1:
														return e = r.apply(n, [t.sent()]),
															o = e.filter(function(t, e) {
																return kl(e)
															}),
															i = e.filter(function(t, e) {
																return !kl(e)
															}),
															[2, new jh(Array(68).fill(0).map(function(t, e) {
																return new El(o[e],i[e])
															}),{
																height: u.getInputHeight(s),
																width: u.getInputWidth(s)
															})]
												}
											})
										})
									}))];
							case 2:
								return n = t.sent(),
									e.forEach(function(t) {
										return t.dispose()
									}),
									[2, u.isBatchInput ? n : n[0]]
						}
					})
				})
			}
			,
			e.prototype.getClassifierChannelsOut = function() {
				return 136
			}
			,
			e
	}(ip)
		, cp = function(e) {
		function t(t) {
			return void 0 === t && (t = new rp),
			e.call(this, "FaceLandmark68Net", t) || this
		}
		return zl(t, e),
			t.prototype.getDefaultModelName = function() {
				return "face_landmark_68_model"
			}
			,
			t.prototype.getClassifierChannelsIn = function() {
				return 256
			}
			,
			t
	}(up);
	var lp = function(t) {
		function e() {
			return t.call(this, "TinyFaceFeatureExtractor") || this
		}
		return zl(e, t),
			e.prototype.forwardInput = function(e) {
				var n = this.params;
				if (!n)
					throw new Error("TinyFaceFeatureExtractor - load model before inference");
				return zt(function() {
					var t = Zh(kh(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(Se(255)), n.dense0, !0);
					return t = Zh(t = Zh(t, n.dense1), n.dense2),
						t = Xa(t, [14, 14], [2, 2], "valid")
				})
			}
			,
			e.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			e.prototype.getDefaultModelName = function() {
				return "face_feature_extractor_tiny_model"
			}
			,
			e.prototype.extractParamsFromWeigthMap = function(t) {
				return r = np(e = t, n = []).extractDenseBlock3Params,
					o = {
						dense0: r("dense0", !0),
						dense1: r("dense1"),
						dense2: r("dense2")
					},
					ml(e, n),
					{
						params: o,
						paramMappings: n
					};
				var e, n, r, o
			}
			,
			e.prototype.extractParams = function(t) {
				return function(t) {
					var e = []
						, n = Bl(t)
						, r = n.extractWeights
						, o = n.getRemainingWeights
						, i = ep(r, e).extractDenseBlock3Params
						, a = i(3, 32, "dense0", !0)
						, s = i(32, 64, "dense1")
						, u = i(64, 128, "dense2");
					if (0 !== o().length)
						throw new Error("weights remaing after extract: " + o().length);
					return {
						paramMappings: e,
						params: {
							dense0: a,
							dense1: s,
							dense2: u
						}
					}
				}(t)
			}
			,
			e
	}(_h)
		, hp = function(e) {
		function t(t) {
			return void 0 === t && (t = new lp),
			e.call(this, "FaceLandmark68TinyNet", t) || this
		}
		return zl(t, e),
			t.prototype.getDefaultModelName = function() {
				return "face_landmark_68_tiny_model"
			}
			,
			t.prototype.getClassifierChannelsIn = function() {
				return 128
			}
			,
			t
	}(up)
		, pp = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e
	}(cp);
	function fp(t, e, n, r, o) {
		void 0 === o && (o = "same");
		var i, a, s = e.conv, u = s.filters, c = s.bias, l = Oa(t, u, n, o);
		return l = Rs(l, c),
			i = l,
			a = e.scale,
			l = Rs(Ws(i, a.weights), a.biases),
			r ? nu(l) : l
	}
	function dp(t, e) {
		return fp(t, e, [1, 1], !1)
	}
	function mp(t, e) {
		return fp(t, e, [2, 2], !0, "valid")
	}
	function vp(u, c) {
		function l(t, e, n, r) {
			var o = function(t, e, n) {
				var r = u(t)
					, o = r.length / (e * n * n);
				if (Nl(o))
					throw new Error("depth has to be an integer: " + o + ", weights.length: " + r.length + ", numFilters: " + e + ", filterSize: " + n);
				return zt(function() {
					return ou(ke(r, [e, o, n, n]), [2, 3, 1, 0])
				})
			}(t, e, n)
				, i = _e(u(e));
			return c.push({
				paramPath: r + "/filters"
			}, {
				paramPath: r + "/bias"
			}),
				{
					filters: o,
					bias: i
				}
		}
		function i(t, e, n, r) {
			var o, i, a, s;
			return {
				conv: l(t, e, n, r + "/conv"),
				scale: (i = r + "/scale",
					a = _e(u(o = e)),
					s = _e(u(o)),
					c.push({
						paramPath: i + "/weights"
					}, {
						paramPath: i + "/biases"
					}),
					{
						weights: a,
						biases: s
					})
			}
		}
		return {
			extractConvLayerParams: i,
			extractResidualLayerParams: function(t, e, n, r, o) {
				return void 0 === o && (o = !1),
					{
						conv1: i((o ? .5 : 1) * t, e, n, r + "/conv1"),
						conv2: i(t, e, n, r + "/conv2")
					}
			}
		}
	}
	function gp(t, e) {
		var n = Pl(t, e);
		function r(t) {
			var e;
			return {
				conv: {
					filters: n(t + "/conv/filters", 4),
					bias: n(t + "/conv/bias", 1)
				},
				scale: {
					weights: n((e = t) + "/scale/weights", 1),
					biases: n(e + "/scale/biases", 1)
				}
			}
		}
		return {
			extractConvLayerParams: r,
			extractResidualLayerParams: function(t) {
				return {
					conv1: r(t + "/conv1"),
					conv2: r(t + "/conv2")
				}
			}
		}
	}
	function yp(t, e) {
		var n, r, o = (n = t,
			r = e.conv1,
			fp(n, r, [1, 1], !0));
		return o = dp(o, e.conv2),
			o = Rs(o, t),
			o = nu(o)
	}
	function xp(t, e) {
		var n = mp(t, e.conv1);
		n = dp(n, e.conv2);
		var r = Xa(t, 2, 2, "valid")
			, o = Ae(r.shape)
			, i = r.shape[3] !== n.shape[3];
		if (r.shape[1] !== n.shape[1] || r.shape[2] !== n.shape[2]) {
			var a = n.shape.slice();
			a[1] = 1;
			var s = Ae(a)
				, u = (n = Vo([n, s], 1)).shape.slice();
			u[2] = 1;
			var c = Ae(u);
			n = Vo([n, c], 2)
		}
		return r = i ? Vo([r, o], 3) : r,
			n = Rs(r, n),
			n = nu(n)
	}
	var wp = function(t) {
		function e() {
			return t.call(this, "FaceRecognitionNet") || this
		}
		return zl(e, t),
			e.prototype.forwardInput = function(n) {
				var r = this.params;
				if (!r)
					throw new Error("FaceRecognitionNet - load model before inference");
				return zt(function() {
					var t = mp(kh(n.toBatchTensor(150, !0).toFloat(), [122.782, 117.001, 104.298]).div(Se(256)), r.conv32_down)
						, e = (t = xp(t = yp(t = yp(t = xp(t = yp(t = yp(t = xp(t = yp(t = yp(t = yp(t = xp(t = yp(t = yp(t = yp(t = Ka(t, 3, 2, "valid"), r.conv32_1), r.conv32_2), r.conv32_3), r.conv64_down), r.conv64_1), r.conv64_2), r.conv64_3), r.conv128_down), r.conv128_1), r.conv128_2), r.conv256_down), r.conv256_1), r.conv256_2), r.conv256_down_out)).mean([1, 2]);
					return ka(e, r.fc)
				})
			}
			,
			e.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			e.prototype.computeFaceDescriptor = function(i) {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o = this;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, Sh(i)];
							case 1:
								return e = t.sent(),
									n = zt(function() {
										return Ii(o.forwardInput(e))
									}),
									[4, Promise.all(n.map(function(t) {
										return t.data()
									}))];
							case 2:
								return r = t.sent(),
									n.forEach(function(t) {
										return t.dispose()
									}),
									[2, e.isBatchInput ? r : r[0]]
						}
					})
				})
			}
			,
			e.prototype.getDefaultModelName = function() {
				return "face_recognition_model"
			}
			,
			e.prototype.extractParamsFromWeigthMap = function(t) {
				return function(t) {
					var e = []
						, n = gp(t, e)
						, r = n.extractConvLayerParams
						, o = n.extractResidualLayerParams
						, i = r("conv32_down")
						, a = o("conv32_1")
						, s = o("conv32_2")
						, u = o("conv32_3")
						, c = o("conv64_down")
						, l = o("conv64_1")
						, h = o("conv64_2")
						, p = o("conv64_3")
						, f = o("conv128_down")
						, d = o("conv128_1")
						, m = o("conv128_2")
						, v = o("conv256_down")
						, g = o("conv256_1")
						, y = o("conv256_2")
						, x = o("conv256_down_out")
						, w = t.fc;
					if (e.push({
						originalPath: "fc",
						paramPath: "fc"
					}),
						!Sl(w))
						throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + w);
					var b = {
						conv32_down: i,
						conv32_1: a,
						conv32_2: s,
						conv32_3: u,
						conv64_down: c,
						conv64_1: l,
						conv64_2: h,
						conv64_3: p,
						conv128_down: f,
						conv128_1: d,
						conv128_2: m,
						conv256_down: v,
						conv256_1: g,
						conv256_2: y,
						conv256_down_out: x,
						fc: w
					};
					return ml(t, e),
						{
							params: b,
							paramMappings: e
						}
				}(t)
			}
			,
			e.prototype.extractParams = function(t) {
				return function(t) {
					var e = Bl(t)
						, n = e.extractWeights
						, r = e.getRemainingWeights
						, o = []
						, i = vp(n, o)
						, a = i.extractConvLayerParams
						, s = i.extractResidualLayerParams
						, u = a(4704, 32, 7, "conv32_down")
						, c = s(9216, 32, 3, "conv32_1")
						, l = s(9216, 32, 3, "conv32_2")
						, h = s(9216, 32, 3, "conv32_3")
						, p = s(36864, 64, 3, "conv64_down", !0)
						, f = s(36864, 64, 3, "conv64_1")
						, d = s(36864, 64, 3, "conv64_2")
						, m = s(36864, 64, 3, "conv64_3")
						, v = s(147456, 128, 3, "conv128_down", !0)
						, g = s(147456, 128, 3, "conv128_1")
						, y = s(147456, 128, 3, "conv128_2")
						, x = s(589824, 256, 3, "conv256_down", !0)
						, w = s(589824, 256, 3, "conv256_1")
						, b = s(589824, 256, 3, "conv256_2")
						, E = s(589824, 256, 3, "conv256_down_out")
						, C = zt(function() {
						return ou(Re(n(32768), [128, 256]), [1, 0])
					});
					if (o.push({
						paramPath: "fc"
					}),
					0 !== r().length)
						throw new Error("weights remaing after extract: " + r().length);
					return {
						params: {
							conv32_down: u,
							conv32_1: c,
							conv32_2: l,
							conv32_3: h,
							conv64_down: p,
							conv64_1: f,
							conv64_2: d,
							conv64_3: m,
							conv128_down: v,
							conv128_1: g,
							conv128_2: y,
							conv256_down: x,
							conv256_1: w,
							conv256_2: b,
							conv256_down_out: E,
							fc: C
						},
						paramMappings: o
					}
				}(t)
			}
			,
			e
	}(_h);
	function bp(t, e) {
		var n = {
			descriptor: e
		};
		return Object.assign({}, t, n)
	}
	function Ep(t, e) {
		var n = {
			detection: e
		};
		return Object.assign({}, t, n)
	}
	function Cp(t, e) {
		var n = {
			expressions: e
		};
		return Object.assign({}, t, n)
	}
	function Sp(t, e) {
		var n = t.detection.box
			, r = e.shiftBy(n.x, n.y)
			, o = r.align()
			, i = t.detection.imageDims
			, a = {
			landmarks: r,
			unshiftedLandmarks: e,
			alignedRect: new Gh(t.detection.score,o.rescale(i.reverse()),i)
		};
		return Object.assign({}, t, a)
	}
	var _p = function() {
		function t(t) {
			var e = void 0 === t ? {} : t
				, n = e.minFaceSize
				, r = e.scaleFactor
				, o = e.maxNumScales
				, i = e.scoreThresholds
				, a = e.scaleSteps;
			if (this._name = "MtcnnOptions",
				this._minFaceSize = n || 20,
				this._scaleFactor = r || .709,
				this._maxNumScales = o || 10,
				this._scoreThresholds = i || [.6, .7, .7],
				this._scaleSteps = a,
			"number" != typeof this._minFaceSize || this._minFaceSize < 0)
				throw new Error(this._name + " - expected minFaceSize to be a number > 0");
			if ("number" != typeof this._scaleFactor || this._scaleFactor <= 0 || 1 <= this._scaleFactor)
				throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
			if ("number" != typeof this._maxNumScales || this._maxNumScales < 0)
				throw new Error(this._name + " - expected maxNumScales to be a number > 0");
			if (!Array.isArray(this._scoreThresholds) || 3 !== this._scoreThresholds.length || this._scoreThresholds.some(function(t) {
				return "number" != typeof t
			}))
				throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
			if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function(t) {
				return "number" != typeof t
			})))
				throw new Error(this._name + " - expected scaleSteps to be an array of numbers")
		}
		return Object.defineProperty(t.prototype, "minFaceSize", {
			get: function() {
				return this._minFaceSize
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "scaleFactor", {
				get: function() {
					return this._scaleFactor
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "maxNumScales", {
				get: function() {
					return this._maxNumScales
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "scoreThresholds", {
				get: function() {
					return this._scoreThresholds
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "scaleSteps", {
				get: function() {
					return this._scaleSteps
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}();
	function Rp(l, h) {
		function i(t, e, n, r, o) {
			var i = ke(l(t * e * n * n), [n, n, t, e])
				, a = _e(l(e));
			return h.push({
				paramPath: r + "/filters"
			}, {
				paramPath: r + "/" + (o ? "batch_norm_offset" : "bias")
			}),
				{
					filters: i,
					bias: a
				}
		}
		function p(t, e, n, r) {
			var o = i(t, e, n, r, !0);
			return {
				filters: o.filters,
				batch_norm_offset: o.bias
			}
		}
		function t(t, e, n) {
			var r, o, i, a, s, u, c;
			return {
				depthwise_conv: (o = n + "/depthwise_conv",
					i = ke(l(9 * (r = t)), [3, 3, r, 1]),
					a = _e(l(r)),
					s = _e(l(r)),
					u = _e(l(r)),
					c = _e(l(r)),
					h.push({
						paramPath: o + "/filters"
					}, {
						paramPath: o + "/batch_norm_scale"
					}, {
						paramPath: o + "/batch_norm_offset"
					}, {
						paramPath: o + "/batch_norm_mean"
					}, {
						paramPath: o + "/batch_norm_variance"
					}),
					{
						filters: i,
						batch_norm_scale: a,
						batch_norm_offset: s,
						batch_norm_mean: u,
						batch_norm_variance: c
					}),
				pointwise_conv: p(t, e, 1, n + "/pointwise_conv")
			}
		}
		return {
			extractMobilenetV1Params: function() {
				return {
					conv_0: p(3, 32, 3, "mobilenetv1/conv_0"),
					conv_1: t(32, 64, "mobilenetv1/conv_1"),
					conv_2: t(64, 128, "mobilenetv1/conv_2"),
					conv_3: t(128, 128, "mobilenetv1/conv_3"),
					conv_4: t(128, 256, "mobilenetv1/conv_4"),
					conv_5: t(256, 256, "mobilenetv1/conv_5"),
					conv_6: t(256, 512, "mobilenetv1/conv_6"),
					conv_7: t(512, 512, "mobilenetv1/conv_7"),
					conv_8: t(512, 512, "mobilenetv1/conv_8"),
					conv_9: t(512, 512, "mobilenetv1/conv_9"),
					conv_10: t(512, 512, "mobilenetv1/conv_10"),
					conv_11: t(512, 512, "mobilenetv1/conv_11"),
					conv_12: t(512, 1024, "mobilenetv1/conv_12"),
					conv_13: t(1024, 1024, "mobilenetv1/conv_13")
				}
			},
			extractPredictionLayerParams: function() {
				return {
					conv_0: p(1024, 256, 1, "prediction_layer/conv_0"),
					conv_1: p(256, 512, 3, "prediction_layer/conv_1"),
					conv_2: p(512, 128, 1, "prediction_layer/conv_2"),
					conv_3: p(128, 256, 3, "prediction_layer/conv_3"),
					conv_4: p(256, 128, 1, "prediction_layer/conv_4"),
					conv_5: p(128, 256, 3, "prediction_layer/conv_5"),
					conv_6: p(256, 64, 1, "prediction_layer/conv_6"),
					conv_7: p(64, 128, 3, "prediction_layer/conv_7"),
					box_predictor_0: {
						box_encoding_predictor: i(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor"),
						class_predictor: i(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor")
					},
					box_predictor_1: {
						box_encoding_predictor: i(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor"),
						class_predictor: i(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor")
					},
					box_predictor_2: {
						box_encoding_predictor: i(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor"),
						class_predictor: i(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor")
					},
					box_predictor_3: {
						box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor"),
						class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor")
					},
					box_predictor_4: {
						box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor"),
						class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor")
					},
					box_predictor_5: {
						box_encoding_predictor: i(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor"),
						class_predictor: i(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor")
					}
				}
			}
		}
	}
	function Np(t) {
		var e = []
			, n = function(t, e) {
			var i = Pl(t, e);
			function a(t, e, n) {
				return {
					filters: i(t + "/Conv2d_" + e + "_pointwise/weights", 4, n + "/filters"),
					batch_norm_offset: i(t + "/Conv2d_" + e + "_pointwise/convolution_bn_offset", 1, n + "/batch_norm_offset")
				}
			}
			function n(t) {
				var e = "mobilenetv1/conv_" + t
					, n = "MobilenetV1/Conv2d_" + t + "_depthwise"
					, r = e + "/depthwise_conv"
					, o = e + "/pointwise_conv";
				return {
					depthwise_conv: {
						filters: i(n + "/depthwise_weights", 4, r + "/filters"),
						batch_norm_scale: i(n + "/BatchNorm/gamma", 1, r + "/batch_norm_scale"),
						batch_norm_offset: i(n + "/BatchNorm/beta", 1, r + "/batch_norm_offset"),
						batch_norm_mean: i(n + "/BatchNorm/moving_mean", 1, r + "/batch_norm_mean"),
						batch_norm_variance: i(n + "/BatchNorm/moving_variance", 1, r + "/batch_norm_variance")
					},
					pointwise_conv: a("MobilenetV1", t, o)
				}
			}
			function r(t, e) {
				return {
					filters: i(t + "/weights", 4, e + "/filters"),
					bias: i(t + "/biases", 1, e + "/bias")
				}
			}
			function o(t) {
				return {
					box_encoding_predictor: r("Prediction/BoxPredictor_" + t + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + t + "/box_encoding_predictor"),
					class_predictor: r("Prediction/BoxPredictor_" + t + "/ClassPredictor", "prediction_layer/box_predictor_" + t + "/class_predictor")
				}
			}
			return {
				extractMobilenetV1Params: function() {
					return {
						conv_0: a("MobilenetV1", 0, "mobilenetv1/conv_0"),
						conv_1: n(1),
						conv_2: n(2),
						conv_3: n(3),
						conv_4: n(4),
						conv_5: n(5),
						conv_6: n(6),
						conv_7: n(7),
						conv_8: n(8),
						conv_9: n(9),
						conv_10: n(10),
						conv_11: n(11),
						conv_12: n(12),
						conv_13: n(13)
					}
				},
				extractPredictionLayerParams: function() {
					return {
						conv_0: a("Prediction", 0, "prediction_layer/conv_0"),
						conv_1: a("Prediction", 1, "prediction_layer/conv_1"),
						conv_2: a("Prediction", 2, "prediction_layer/conv_2"),
						conv_3: a("Prediction", 3, "prediction_layer/conv_3"),
						conv_4: a("Prediction", 4, "prediction_layer/conv_4"),
						conv_5: a("Prediction", 5, "prediction_layer/conv_5"),
						conv_6: a("Prediction", 6, "prediction_layer/conv_6"),
						conv_7: a("Prediction", 7, "prediction_layer/conv_7"),
						box_predictor_0: o(0),
						box_predictor_1: o(1),
						box_predictor_2: o(2),
						box_predictor_3: o(3),
						box_predictor_4: o(4),
						box_predictor_5: o(5)
					}
				}
			}
		}(t, e)
			, r = n.extractMobilenetV1Params
			, o = n.extractPredictionLayerParams
			, i = t["Output/extra_dim"];
		if (e.push({
			originalPath: "Output/extra_dim",
			paramPath: "output_layer/extra_dim"
		}),
			!_l(i))
			throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + i);
		var a = {
			mobilenetv1: r(),
			prediction_layer: o(),
			output_layer: {
				extra_dim: i
			}
		};
		return ml(t, e),
			{
				params: a,
				paramMappings: e
			}
	}
	function kp(e, n, r) {
		return zt(function() {
			var t = Oa(e, n.filters, r, "same");
			return t = Rs(t, n.batch_norm_offset),
				Hi(t, 0, 6)
		})
	}
	var Dp = .0010000000474974513;
	function Tp(t, e) {
		return zt(function() {
			var u = null
				, c = kp(t, e.conv_0, [2, 2]);
			if ([e.conv_1, e.conv_2, e.conv_3, e.conv_4, e.conv_5, e.conv_6, e.conv_7, e.conv_8, e.conv_9, e.conv_10, e.conv_11, e.conv_12, e.conv_13].forEach(function(t, e) {
				var n, r, o, i, a = e + 1, s = (n = a,
					[2, 4, 6, 12].some(function(t) {
						return t === n
					}) ? [2, 2] : [1, 1]);
				r = c,
					o = t.depthwise_conv,
					i = s,
					c = kp(c = zt(function() {
						var t = La(r, o.filters, i, "same");
						return t = ya(t, o.batch_norm_mean, o.batch_norm_variance, Dp, o.batch_norm_scale, o.batch_norm_offset),
							Hi(t, 0, 6)
					}), t.pointwise_conv, [1, 1]),
				11 === a && (u = c)
			}),
			null === u)
				throw new Error("mobileNetV1 - output of conv layer 11 is null");
			return {
				out: c,
				conv11: u
			}
		})
	}
	function Ip(t, e, n) {
		var r = Math.min(t.get(e, 0), t.get(e, 2))
			, o = Math.min(t.get(e, 1), t.get(e, 3))
			, i = Math.max(t.get(e, 0), t.get(e, 2))
			, a = Math.max(t.get(e, 1), t.get(e, 3))
			, s = Math.min(t.get(n, 0), t.get(n, 2))
			, u = Math.min(t.get(n, 1), t.get(n, 3))
			, c = Math.max(t.get(n, 0), t.get(n, 2))
			, l = Math.max(t.get(n, 1), t.get(n, 3))
			, h = (i - r) * (a - o)
			, p = (c - s) * (l - u);
		if (h <= 0 || p <= 0)
			return 0;
		var f = Math.max(r, s)
			, d = Math.max(o, u)
			, m = Math.min(i, c)
			, v = Math.min(a, l)
			, g = Math.max(m - f, 0) * Math.max(v - d, 0);
		return g / (h + p - g)
	}
	function Ap(t, e) {
		var n, r, o = (n = Ii(ou(t, [1, 0])),
			{
				sizes: r = [qs(n[2], n[0]), qs(n[3], n[1])],
				centers: [Rs(n[0], Ts(r[0], Se(2))), Rs(n[1], Ts(r[1], Se(2)))]
			}), i = o.sizes, a = o.centers, s = Ii(ou(e, [1, 0])), u = Ts(Ws(Ki(Ts(s[2], Se(5))), i[0]), Se(2)), c = Rs(Ws(Ts(s[0], Se(10)), i[0]), a[0]), l = Ts(Ws(Ki(Ts(s[3], Se(5))), i[1]), Se(2)), h = Rs(Ws(Ts(s[1], Se(10)), i[1]), a[1]);
		return ou(ki([qs(c, u), qs(h, l), Rs(c, u), Rs(h, l)]), [1, 0])
	}
	function Mp(e, n) {
		return zt(function() {
			var t = e.shape[0];
			return {
				boxPredictionEncoding: _i(dl(e, n.box_encoding_predictor), [t, -1, 1, 4]),
				classPrediction: _i(dl(e, n.class_predictor), [t, -1, 3])
			}
		})
	}
	var Fp = function() {
		function t(t) {
			var e = void 0 === t ? {} : t
				, n = e.minConfidence
				, r = e.maxResults;
			if (this._name = "SsdMobilenetv1Options",
				this._minConfidence = n || .5,
				this._maxResults = r || 100,
			"number" != typeof this._minConfidence || this._minConfidence <= 0 || 1 <= this._minConfidence)
				throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
			if ("number" != typeof this._maxResults)
				throw new Error(this._name + " - expected maxResults to be a number")
		}
		return Object.defineProperty(t.prototype, "minConfidence", {
			get: function() {
				return this._minConfidence
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "maxResults", {
				get: function() {
					return this._maxResults
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}()
		, Op = function(t) {
		function e() {
			return t.call(this, "SsdMobilenetv1") || this
		}
		return zl(e, t),
			e.prototype.forwardInput = function(u) {
				var c = this.params;
				if (!c)
					throw new Error("SsdMobilenetv1 - load model before inference");
				return zt(function() {
					var l, h, p, o, i, a, t = u.toBatchTensor(512, !1).toFloat(), e = Tp(qs(Ws(t, Se(.007843137718737125)), Se(1)), c.mobilenetv1), n = (l = e.out,
						h = e.conv11,
						p = c.prediction_layer,
						zt(function() {
							var t = kp(kp(l, p.conv_0, [1, 1]), p.conv_1, [2, 2])
								, e = kp(kp(t, p.conv_2, [1, 1]), p.conv_3, [2, 2])
								, n = kp(kp(e, p.conv_4, [1, 1]), p.conv_5, [2, 2])
								, r = kp(kp(n, p.conv_6, [1, 1]), p.conv_7, [2, 2])
								, o = Mp(h, p.box_predictor_0)
								, i = Mp(l, p.box_predictor_1)
								, a = Mp(t, p.box_predictor_2)
								, s = Mp(e, p.box_predictor_3)
								, u = Mp(n, p.box_predictor_4)
								, c = Mp(r, p.box_predictor_5);
							return {
								boxPredictions: Vo([o.boxPredictionEncoding, i.boxPredictionEncoding, a.boxPredictionEncoding, s.boxPredictionEncoding, u.boxPredictionEncoding, c.boxPredictionEncoding], 1),
								classPredictions: Vo([o.classPrediction, i.classPrediction, a.classPrediction, s.classPrediction, u.classPrediction, c.classPrediction], 1)
							}
						})), r = n.boxPredictions, s = n.classPredictions;
					return o = r,
						i = s,
						a = c.output_layer,
						zt(function() {
							var t = o.shape[0]
								, e = Ap(_i(Di(a.extra_dim, [t, 1, 1]), [-1, 4]), _i(o, [-1, 4]));
							e = _i(e, [t, e.shape[0] / t, 4]);
							var n = oa(Qa(i, [0, 0, 1], [-1, -1, -1]))
								, r = Qa(n, [0, 0, 0], [-1, -1, 1]);
							return r = _i(r, [t, r.shape[1]]),
								{
									boxes: Ii(e),
									scores: Ii(r)
								}
						})
				})
			}
			,
			e.prototype.forward = function(n) {
				return Vl(this, void 0, void 0, function() {
					var e;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return e = this.forwardInput,
									[4, Sh(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])]
						}
					})
				})
			}
			,
			e.prototype.locateFaces = function(D, T) {
				return void 0 === T && (T = {}),
					Vl(this, void 0, void 0, function() {
						var l, h, p, f, d, m, v, g, y, x, w, b, E, C, S, _, R, N, k;
						return Gl(this, function(t) {
							switch (t.label) {
								case 0:
									return l = new Fp(T),
										h = l.maxResults,
										p = l.minConfidence,
										[4, Sh(D)];
								case 1:
									for (f = t.sent(),
										     d = this.forwardInput(f),
										     m = d.boxes,
										     v = d.scores,
										     g = m[0],
										     y = v[0],
										     x = 1; x < m.length; x++)
										m[x].dispose(),
											v[x].dispose();
									return E = (b = Array).from,
										[4, y.data()];
								case 2:
									return w = E.apply(b, [t.sent()]),
										e = w,
										n = h,
										i = .5,
										a = p,
										r = (o = g).shape[0],
										s = Math.min(n, r),
										u = e.map(function(t, e) {
											return {
												score: t,
												boxIndex: e
											}
										}).filter(function(t) {
											return t.score > a
										}).sort(function(t, e) {
											return e.score - t.score
										}),
										c = [],
										u.forEach(function(t) {
											if (!(c.length >= s)) {
												for (var e = t.score, n = c.length - 1; 0 <= n; --n) {
													var r = Ip(o, t.boxIndex, c[n]);
													if (0 !== r && (t.score *= r <= i ? 1 : 0,
													t.score <= a))
														break
												}
												e === t.score && c.push(t.boxIndex)
											}
										}),
										C = c,
										S = f.getReshapedInputDimensions(0),
										_ = f.inputSize,
										R = _ / S.width,
										N = _ / S.height,
										k = C.map(function(t) {
											var e = [Math.max(0, g.get(t, 0)), Math.min(1, g.get(t, 2))].map(function(t) {
												return t * N
											})
												, n = e[0]
												, r = e[1]
												, o = [Math.max(0, g.get(t, 1)), Math.min(1, g.get(t, 3))].map(function(t) {
												return t * R
											})
												, i = o[0]
												, a = o[1];
											return new Gh(w[t],new Vh(i,n,a - i,r - n),{
												height: f.getInputHeight(0),
												width: f.getInputWidth(0)
											})
										}),
										g.dispose(),
										y.dispose(),
										[2, k]
							}
							var o, e, n, i, a, r, s, u, c
						})
					})
			}
			,
			e.prototype.getDefaultModelName = function() {
				return "ssd_mobilenetv1_model"
			}
			,
			e.prototype.extractParamsFromWeigthMap = function(t) {
				return Np(t)
			}
			,
			e.prototype.extractParams = function(t) {
				return function(t) {
					var e = []
						, n = Bl(t)
						, r = n.extractWeights
						, o = n.getRemainingWeights
						, i = Rp(r, e)
						, a = i.extractMobilenetV1Params
						, s = i.extractPredictionLayerParams
						, u = a()
						, c = s()
						, l = {
						extra_dim: Ne(r(20472), [1, 5118, 4])
					};
					if (e.push({
						paramPath: "output_layer/extra_dim"
					}),
					0 !== o().length)
						throw new Error("weights remaing after extract: " + o().length);
					return {
						params: {
							mobilenetv1: u,
							prediction_layer: c,
							output_layer: l
						},
						paramMappings: e
					}
				}(t)
			}
			,
			e
	}(_h);
	function Pp(t) {
		var e = new Op;
		return e.extractWeights(t),
			e
	}
	var Bp = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e
	}(Op)
		, Lp = function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t._name = "TinyFaceDetectorOptions",
				t
		}
		return zl(t, e),
			t
	}(Wh)
		, Wp = function() {
		function t() {}
		return t.prototype.then = function(n) {
			return Vl(this, void 0, void 0, function() {
				var e;
				return Gl(this, function(t) {
					switch (t.label) {
						case 0:
							return e = n,
								[4, this.run()];
						case 1:
							return [2, e.apply(void 0, [t.sent()])]
					}
				})
			})
		}
			,
			t.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						throw new Error("ComposableTask - run is not implemented")
					})
				})
			}
			,
			t
	}();
	var zp = 2
		, Up = 12;
	function Vp(t) {
		var e = Bl(t)
			, n = e.extractWeights
			, r = e.getRemainingWeights
			, o = []
			, i = function(r, o) {
			var u = vl(r, o)
				, c = gl(r, o);
			function l(t, e) {
				var n = _e(r(t));
				return o.push({
					paramPath: e
				}),
					n
			}
			function h(t, e, n) {
				return void 0 === n && (n = !1),
					{
						conv1: u(t[0], t[1], 3, e + "/conv1"),
						prelu1_alpha: l(t[1], e + "/prelu1_alpha"),
						conv2: u(t[1], t[2], 3, e + "/conv2"),
						prelu2_alpha: l(t[2], e + "/prelu2_alpha"),
						conv3: u(t[2], t[3], n ? 2 : 3, e + "/conv3"),
						prelu3_alpha: l(t[3], e + "/prelu3_alpha")
					}
			}
			return {
				extractPNetParams: function() {
					var t = h([3, 10, 16, 32], "pnet")
						, e = u(32, 2, 1, "pnet/conv4_1")
						, n = u(32, 4, 1, "pnet/conv4_2");
					return Ul({}, t, {
						conv4_1: e,
						conv4_2: n
					})
				},
				extractRNetParams: function() {
					var t = h([3, 28, 48, 64], "rnet", !0)
						, e = c(576, 128, "rnet/fc1")
						, n = l(128, "rnet/prelu4_alpha")
						, r = c(128, 2, "rnet/fc2_1")
						, o = c(128, 4, "rnet/fc2_2");
					return Ul({}, t, {
						fc1: e,
						prelu4_alpha: n,
						fc2_1: r,
						fc2_2: o
					})
				},
				extractONetParams: function() {
					var t = h([3, 32, 64, 64], "onet")
						, e = u(64, 128, 2, "onet/conv4")
						, n = l(128, "onet/prelu4_alpha")
						, r = c(1152, 256, "onet/fc1")
						, o = l(256, "onet/prelu5_alpha")
						, i = c(256, 2, "onet/fc2_1")
						, a = c(256, 4, "onet/fc2_2")
						, s = c(256, 10, "onet/fc2_3");
					return Ul({}, t, {
						conv4: e,
						prelu4_alpha: n,
						fc1: r,
						prelu5_alpha: o,
						fc2_1: i,
						fc2_2: a,
						fc2_3: s
					})
				}
			}
		}(n, o)
			, a = i.extractPNetParams
			, s = i.extractRNetParams
			, u = i.extractONetParams
			, c = a()
			, l = s()
			, h = u();
		if (0 !== r().length)
			throw new Error("weights remaing after extract: " + r().length);
		return {
			params: {
				pnet: c,
				rnet: l,
				onet: h
			},
			paramMappings: o
		}
	}
	function Gp(t) {
		var e = []
			, n = function(t, e) {
			var n = Pl(t, e);
			function u(t) {
				return {
					filters: n(t + "/weights", 4, t + "/filters"),
					bias: n(t + "/bias", 1)
				}
			}
			function c(t) {
				return {
					weights: n(t + "/weights", 2),
					bias: n(t + "/bias", 1)
				}
			}
			function l(t) {
				return n(t, 1)
			}
			function h(t) {
				return {
					conv1: u(t + "/conv1"),
					prelu1_alpha: l(t + "/prelu1_alpha"),
					conv2: u(t + "/conv2"),
					prelu2_alpha: l(t + "/prelu2_alpha"),
					conv3: u(t + "/conv3"),
					prelu3_alpha: l(t + "/prelu3_alpha")
				}
			}
			return {
				extractPNetParams: function() {
					var t = h("pnet")
						, e = u("pnet/conv4_1")
						, n = u("pnet/conv4_2");
					return Ul({}, t, {
						conv4_1: e,
						conv4_2: n
					})
				},
				extractRNetParams: function() {
					var t = h("rnet")
						, e = c("rnet/fc1")
						, n = l("rnet/prelu4_alpha")
						, r = c("rnet/fc2_1")
						, o = c("rnet/fc2_2");
					return Ul({}, t, {
						fc1: e,
						prelu4_alpha: n,
						fc2_1: r,
						fc2_2: o
					})
				},
				extractONetParams: function() {
					var t = h("onet")
						, e = u("onet/conv4")
						, n = l("onet/prelu4_alpha")
						, r = c("onet/fc1")
						, o = l("onet/prelu5_alpha")
						, i = c("onet/fc2_1")
						, a = c("onet/fc2_2")
						, s = c("onet/fc2_3");
					return Ul({}, t, {
						conv4: e,
						prelu4_alpha: n,
						fc1: r,
						prelu5_alpha: o,
						fc2_1: i,
						fc2_2: a,
						fc2_3: s
					})
				}
			}
		}(t, e)
			, r = n.extractPNetParams
			, o = n.extractRNetParams
			, i = n.extractONetParams
			, a = r()
			, s = o()
			, u = i();
		return ml(t, e),
			{
				params: {
					pnet: a,
					rnet: s,
					onet: u
				},
				paramMappings: e
			}
	}
	function Hp(t, e) {
		var n = e[0]
			, r = e[1];
		return {
			height: Math.floor(n * t),
			width: Math.floor(r * t)
		}
	}
	var qp = function(o) {
		function t(t, e, n, r) {
			return o.call(this, {
				left: t,
				top: e,
				right: n,
				bottom: r
			}, !0) || this
		}
		return zl(t, o),
			t
	}(ql);
	function jp(t) {
		return zt(function() {
			return Ws(qs(t, Se(127.5)), Se(.0078125))
		})
	}
	function $p(t, e) {
		return zt(function() {
			return Rs(nu(t), Ws(e, ta(nu(ta(t)))))
		})
	}
	function Kp(e, n, r) {
		return void 0 === r && (r = !1),
			zt(function() {
				var t = dl(e, n.conv1, "valid");
				return t = $p(t, n.prelu1_alpha),
					t = $p(t = dl(t = Ka(t, r ? [2, 2] : [3, 3], [2, 2], "same"), n.conv2, "valid"), n.prelu2_alpha),
					t = $p(t = dl(t = r ? t : Ka(t, [3, 3], [2, 2], "valid"), n.conv3, "valid"), n.prelu3_alpha)
			})
	}
	function Xp(h, t, u, p, c) {
		c.stage1 = [];
		var e = t.map(function(l) {
			return zt(function() {
				var o, i, r, a, t = {
					scale: l
				}, e = (o = h,
					i = l,
					zt(function() {
						var t = Hp(i, o.shape.slice(1))
							, e = t.height
							, n = t.width
							, r = jp(ju.resizeBilinear(o, [e, n]));
						return ou(r, [0, 2, 1, 3])
					})), n = Date.now(), s = (r = e,
					a = p,
					zt(function() {
						var t = Kp(r, a, !0)
							, e = dl(t, a.conv4_1, "valid")
							, n = pi(us(e, 3), 3);
						return {
							prob: ye(qs(e, n), 3),
							regions: dl(t, a.conv4_2, "valid")
						}
					})), u = s.prob, c = s.regions;
				return t.pnet = Date.now() - n,
					{
						scoresTensor: Ii(Ii(u, 3)[1])[0],
						regionsTensor: Ii(c)[0],
						scale: l,
						statsForScale: t
					}
			})
		}).map(function(t) {
			var e = t.scoresTensor
				, n = t.regionsTensor
				, r = t.scale
				, o = t.statsForScale
				, i = function(e, n, r, t) {
				for (var o = [], i = 0; i < e.shape[0]; i++)
					for (var a = 0; a < e.shape[1]; a++)
						e.get(i, a) >= t && o.push(new El(a,i));
				return o.map(function(t) {
					return {
						cell: new jl(Math.round((t.y * zp + 1) / r),Math.round((t.x * zp + 1) / r),Math.round((t.y * zp + Up) / r),Math.round((t.x * zp + Up) / r)),
						score: e.get(t.y, t.x),
						region: new qp(n.get(t.y, t.x, 0),n.get(t.y, t.x, 1),n.get(t.y, t.x, 2),n.get(t.y, t.x, 3))
					}
				})
			}(e, n, r, u);
			if (e.dispose(),
				n.dispose(),
				!i.length)
				return c.stage1.push(o),
					[];
			var a = Date.now()
				, s = Nh(i.map(function(t) {
				return t.cell
			}), i.map(function(t) {
				return t.score
			}), .5);
			return o.nms = Date.now() - a,
				o.numBoxes = s.length,
				c.stage1.push(o),
				s.map(function(t) {
					return i[t]
				})
		}).reduce(function(t, e) {
			return t.concat(e)
		}, [])
			, n = []
			, r = [];
		if (0 < e.length) {
			var o = Date.now()
				, i = Nh(e.map(function(t) {
				return t.cell
			}), e.map(function(t) {
				return t.score
			}), .7);
			c.stage1_nms = Date.now() - o,
				r = i.map(function(t) {
					return e[t].score
				}),
				n = i.map(function(t) {
					return e[t]
				}).map(function(t) {
					var e = t.cell
						, n = t.region;
					return new jl(e.left + n.left * e.width,e.top + n.top * e.height,e.right + n.right * e.width,e.bottom + n.bottom * e.height).toSquare().round()
				})
		}
		return {
			boxes: n,
			scores: r
		}
	}
	function Yp(h, r, t) {
		var a = t.width
			, s = t.height;
		return Vl(this, void 0, void 0, function() {
			var l, e, i, n = this;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return l = ih(h),
							[4, Promise.all(r.map(function(c) {
								return Vl(n, void 0, void 0, function() {
									var e, n, r, o, i, a, s, u;
									return Gl(this, function(t) {
										return e = c.padAtBorders(h.height, h.width),
											n = e.y,
											r = e.ey,
											o = e.x,
											i = e.ex,
											a = o - 1,
											s = n - 1,
											u = l.getImageData(a, s, i - a, r - s),
											[2, eh.isNodejs() ? uh(u) : createImageBitmap(u)]
									})
								})
							}))];
					case 1:
						return e = t.sent(),
							i = [],
							e.forEach(function(t) {
								var e = ih(sh({
									width: a,
									height: s
								}));
								e.drawImage(t, 0, 0, a, s);
								for (var n = e.getImageData(0, 0, a, s).data, r = [], o = 0; o < n.length; o += 4)
									r.push(n[o + 2]),
										r.push(n[o + 1]),
										r.push(n[o]);
								i.push(r)
							}),
							[2, i.map(function(t) {
								return zt(function() {
									return jp(ou(ke(t, [1, a, s, 3]), [0, 2, 1, 3]).toFloat())
								})
							})]
				}
			})
		})
	}
	function Qp(m, v, g, y, x) {
		return Vl(this, void 0, void 0, function() {
			var e, n, r, o, i, a, s, u, c, l, h, p, f, d;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return e = Date.now(),
							[4, Yp(m, v, {
								width: 24,
								height: 24
							})];
					case 1:
						return n = t.sent(),
							x.stage2_extractImagePatches = Date.now() - e,
							e = Date.now(),
							r = n.map(function(t) {
								var a, s, e = (a = t,
									s = y,
									zt(function() {
										var t = Kp(a, s)
											, e = $p(op(_i(t, [t.shape[0], s.fc1.weights.shape[0]]), s.fc1), s.prelu4_alpha)
											, n = op(e, s.fc2_1)
											, r = pi(us(n, 1), 1)
											, o = ye(qs(n, r), 1)
											, i = op(e, s.fc2_2);
										return {
											scores: Ii(o, 1)[1],
											regions: i
										}
									}));
								return t.dispose(),
									e
							}),
							x.stage2_rnet = Date.now() - e,
							o = 1 < r.length ? Vo(r.map(function(t) {
								return t.scores
							})) : r[0].scores,
							s = (a = Array).from,
							[4, o.data()];
					case 2:
						return i = s.apply(a, [t.sent()]),
							o.dispose(),
							u = i.map(function(t, e) {
								return {
									score: t,
									idx: e
								}
							}).filter(function(t) {
								return t.score > g
							}).map(function(t) {
								return t.idx
							}),
							c = u.map(function(t) {
								return v[t]
							}),
							l = u.map(function(t) {
								return i[t]
							}),
							h = [],
							p = [],
						0 < c.length && (e = Date.now(),
							f = Nh(c, l, .7),
							x.stage2_nms = Date.now() - e,
							d = f.map(function(t) {
								return new qp(r[u[t]].regions.get(0, 0),r[u[t]].regions.get(0, 1),r[u[t]].regions.get(0, 2),r[u[t]].regions.get(0, 3))
							}),
							p = f.map(function(t) {
								return l[t]
							}),
							h = f.map(function(t, e) {
								return c[t].calibrate(d[e])
							})),
							r.forEach(function(t) {
								t.regions.dispose(),
									t.scores.dispose()
							}),
							[2, {
								boxes: h,
								scores: p
							}]
				}
			})
		})
	}
	function Jp(v, g, y, x, w) {
		return Vl(this, void 0, void 0, function() {
			var e, n, o, r, i, a, s, u, c, l, h, p, f, d, m;
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return e = Date.now(),
							[4, Yp(v, g, {
								width: 48,
								height: 48
							})];
					case 1:
						return n = t.sent(),
							w.stage3_extractImagePatches = Date.now() - e,
							e = Date.now(),
							o = n.map(function(t) {
								var s, u, e = (s = t,
									u = x,
									zt(function() {
										var t = Kp(s, u);
										t = $p(t = dl(t = Ka(t, [2, 2], [2, 2], "same"), u.conv4, "valid"), u.prelu4_alpha);
										var e = $p(op(_i(t, [t.shape[0], u.fc1.weights.shape[0]]), u.fc1), u.prelu5_alpha)
											, n = op(e, u.fc2_1)
											, r = pi(us(n, 1), 1)
											, o = ye(qs(n, r), 1)
											, i = op(e, u.fc2_2)
											, a = op(e, u.fc2_3);
										return {
											scores: Ii(o, 1)[1],
											regions: i,
											points: a
										}
									}));
								return t.dispose(),
									e
							}),
							w.stage3_onet = Date.now() - e,
							r = 1 < o.length ? Vo(o.map(function(t) {
								return t.scores
							})) : o[0].scores,
							s = (a = Array).from,
							[4, r.data()];
					case 2:
						return i = s.apply(a, [t.sent()]),
							r.dispose(),
							u = i.map(function(t, e) {
								return {
									score: t,
									idx: e
								}
							}).filter(function(t) {
								return t.score > y
							}).map(function(t) {
								return t.idx
							}),
							c = u.map(function(t) {
								return new qp(o[t].regions.get(0, 0),o[t].regions.get(0, 1),o[t].regions.get(0, 2),o[t].regions.get(0, 3))
							}),
							l = u.map(function(t, e) {
								return g[t].calibrate(c[e])
							}),
							h = u.map(function(t) {
								return i[t]
							}),
							p = [],
							f = [],
							d = [],
						0 < l.length && (e = Date.now(),
							m = Nh(l, h, .7, !1),
							w.stage3_nms = Date.now() - e,
							p = m.map(function(t) {
								return l[t]
							}),
							f = m.map(function(t) {
								return h[t]
							}),
							d = m.map(function(n, r) {
								return Array(5).fill(0).map(function(t, e) {
									return new El(o[n].points.get(0, e) * (p[r].width + 1) + p[r].left,o[n].points.get(0, e + 5) * (p[r].height + 1) + p[r].top)
								})
							})),
							o.forEach(function(t) {
								t.regions.dispose(),
									t.scores.dispose(),
									t.points.dispose()
							}),
							[2, {
								boxes: p,
								scores: f,
								points: d
							}]
				}
			})
		})
	}
	var Zp = function(t) {
		function e() {
			return t.call(this, "Mtcnn") || this
		}
		return zl(e, t),
			e.prototype.forwardInput = function(E, C) {
				return void 0 === C && (C = {}),
					Vl(this, void 0, void 0, function() {
						var e, n, r, o, i, a, s, u, c, l, h, p, f, d, m, v, g, y, x, w, b;
						return Gl(this, function(t) {
							switch (t.label) {
								case 0:
									if (!(e = this.params))
										throw new Error("Mtcnn - load model before inference");
									if (!(n = E.canvases[0]))
										throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
									return r = {},
										o = Date.now(),
										i = zt(function() {
											return t = pi(di(n)).toFloat(),
												zt(function() {
													return ki(Ii(t, 3).reverse(), 3)
												});
											var t
										}),
										a = function(t) {
											return i.dispose(),
												r.total = Date.now() - o,
												t
										}
										,
										s = i.shape.slice(1),
										u = s[0],
										c = s[1],
										l = new _p(C),
										h = l.minFaceSize,
										p = l.scaleFactor,
										f = l.maxNumScales,
										d = l.scoreThresholds,
										m = l.scaleSteps,
										v = (m || function(t, e, n) {
											for (var r = n[0], o = n[1], i = Up / t, a = [], s = Math.min(r, o) * i, u = 0; 12 <= s; )
												a.push(i * Math.pow(e, u)),
													s *= e,
													u += 1;
											return a
										}(h, p, [u, c])).filter(function(t) {
											var e = Hp(t, [u, c]);
											return Math.min(e.width, e.height) > Up
										}).slice(0, f),
										r.scales = v,
										r.pyramid = v.map(function(t) {
											return Hp(t, [u, c])
										}),
										g = Date.now(),
										[4, Xp(i, v, d[0], e.pnet, r)];
								case 1:
									return y = t.sent(),
										r.total_stage1 = Date.now() - g,
										y.boxes.length ? (r.stage2_numInputBoxes = y.boxes.length,
											g = Date.now(),
											[4, Qp(n, y.boxes, d[1], e.rnet, r)]) : [2, a({
											results: [],
											stats: r
										})];
								case 2:
									return x = t.sent(),
										r.total_stage2 = Date.now() - g,
										x.boxes.length ? (r.stage3_numInputBoxes = x.boxes.length,
											g = Date.now(),
											[4, Jp(n, x.boxes, d[2], e.onet, r)]) : [2, a({
											results: [],
											stats: r
										})];
								case 3:
									return w = t.sent(),
										r.total_stage3 = Date.now() - g,
										b = w.boxes.map(function(e, t) {
											return Sp(Ep({}, new Gh(w.scores[t],new Vh(e.left / c,e.top / u,e.width / c,e.height / u),{
												height: u,
												width: c
											})), new qh(w.points[t].map(function(t) {
												return t.sub(new El(e.left,e.top)).div(new El(e.width,e.height))
											}),{
												width: e.width,
												height: e.height
											}))
										}),
										[2, a({
											results: b,
											stats: r
										})]
							}
						})
					})
			}
			,
			e.prototype.forward = function(n, r) {
				return void 0 === r && (r = {}),
					Vl(this, void 0, void 0, function() {
						var e;
						return Gl(this, function(t) {
							switch (t.label) {
								case 0:
									return e = this.forwardInput,
										[4, Sh(n)];
								case 1:
									return [4, e.apply(this, [t.sent(), r])];
								case 2:
									return [2, t.sent().results]
							}
						})
					})
			}
			,
			e.prototype.forwardWithStats = function(n, r) {
				return void 0 === r && (r = {}),
					Vl(this, void 0, void 0, function() {
						var e;
						return Gl(this, function(t) {
							switch (t.label) {
								case 0:
									return e = this.forwardInput,
										[4, Sh(n)];
								case 1:
									return [2, e.apply(this, [t.sent(), r])]
							}
						})
					})
			}
			,
			e.prototype.getDefaultModelName = function() {
				return "mtcnn_model"
			}
			,
			e.prototype.extractParamsFromWeigthMap = function(t) {
				return Gp(t)
			}
			,
			e.prototype.extractParams = function(t) {
				return Vp(t)
			}
			,
			e
	}(_h)
		, tf = [new El(1.603231,2.094468), new El(6.041143,7.080126), new El(2.882459,3.518061), new El(4.266906,5.178857), new El(9.041765,10.66308)]
		, ef = [117.001, 114.697, 97.404]
		, nf = function(e) {
		function t() {
			var t = {
				withSeparableConvs: !0,
				iouThreshold: .4,
				classes: ["face"],
				anchors: tf,
				meanRgb: ef,
				isFirstLayerConv2d: !0,
				filterSizes: [3, 16, 32, 64, 128, 256, 512]
			};
			return e.call(this, t) || this
		}
		return zl(t, e),
			Object.defineProperty(t.prototype, "anchors", {
				get: function() {
					return this.config.anchors
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.locateFaces = function(e, n) {
				return Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.detect(e, n)];
							case 1:
								return [2, t.sent().map(function(t) {
									return new Gh(t.score,t.relativeBox,{
										width: t.imageWidth,
										height: t.imageHeight
									})
								})]
						}
					})
				})
			}
			,
			t.prototype.getDefaultModelName = function() {
				return "tiny_face_detector_model"
			}
			,
			t.prototype.extractParamsFromWeigthMap = function(t) {
				return e.prototype.extractParamsFromWeigthMap.call(this, t)
			}
			,
			t
	}(zh)
		, rf = [new El(.738768,.874946), new El(2.42204,2.65704), new El(4.30971,7.04493), new El(10.246,4.59428), new El(12.6868,11.8741)]
		, of = [new El(1.603231,2.094468), new El(6.041143,7.080126), new El(2.882459,3.518061), new El(4.266906,5.178857), new El(9.041765,10.66308)]
		, af = [117.001, 114.697, 97.404]
		, sf = function(n) {
		function t(t) {
			void 0 === t && (t = !0);
			var e = Object.assign({}, {
				withSeparableConvs: t,
				iouThreshold: .4,
				classes: ["face"]
			}, t ? {
				anchors: of,
				meanRgb: af
			} : {
				anchors: rf,
				withClassScores: !0
			});
			return n.call(this, e) || this
		}
		return zl(t, n),
			Object.defineProperty(t.prototype, "withSeparableConvs", {
				get: function() {
					return this.config.withSeparableConvs
				},
				enumerable: !0,
				configurable: !0
			}),
			Object.defineProperty(t.prototype, "anchors", {
				get: function() {
					return this.config.anchors
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.locateFaces = function(e, n) {
				return Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.detect(e, n)];
							case 1:
								return [2, t.sent().map(function(t) {
									return new Gh(t.score,t.relativeBox,{
										width: t.imageWidth,
										height: t.imageHeight
									})
								})]
						}
					})
				})
			}
			,
			t.prototype.getDefaultModelName = function() {
				return this.withSeparableConvs ? "tiny_yolov2_separable_conv_model" : "tiny_yolov2_model"
			}
			,
			t.prototype.extractParamsFromWeigthMap = function(t) {
				return n.prototype.extractParamsFromWeigthMap.call(this, t)
			}
			,
			t
	}(zh);
	var uf = {
		ssdMobilenetv1: new Op,
		tinyFaceDetector: new nf,
		tinyYolov2: new sf,
		mtcnn: new Zp,
		faceLandmark68Net: new cp,
		faceLandmark68TinyNet: new hp,
		faceRecognitionNet: new wp,
		faceExpressionNet: new sp
	}
		, cf = function(t, e) {
		return uf.ssdMobilenetv1.locateFaces(t, e)
	}
		, lf = function(t) {
		return uf.faceLandmark68Net.detectLandmarks(t)
	}
		, hf = function(t) {
		return uf.ssdMobilenetv1.load(t)
	}
		, pf = hf
		, ff = cf
		, df = lf
		, mf = function(r) {
		function t(t, e) {
			var n = r.call(this) || this;
			return n.parentTask = t,
				n.input = e,
				n
		}
		return zl(t, r),
			t
	}(Wp)
		, vf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, o, r, i, a = this;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return e = t.sent(),
									n = e.map(function(t) {
										return t.alignedRect
									}),
									this.input instanceof it ? [4, Qh(this.input, n)] : [3, 3];
							case 2:
								return r = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, n)];
							case 4:
								r = t.sent(),
									t.label = 5;
							case 5:
								return o = r,
									[4, Promise.all(e.map(function(n, r) {
										return Vl(a, void 0, void 0, function() {
											var e;
											return Gl(this, function(t) {
												switch (t.label) {
													case 0:
														return [4, uf.faceRecognitionNet.computeFaceDescriptor(o[r])];
													case 1:
														return e = t.sent(),
															[2, bp(n, e)]
												}
											})
										})
									}))];
							case 6:
								return i = t.sent(),
									o.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, i]
						}
					})
				})
			}
			,
			e
	}(mf)
		, gf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent()) ? (n = e.alignedRect,
									this.input instanceof it ? [4, Qh(this.input, [n])] : [3, 3]) : [2];
							case 2:
								return o = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, [n])];
							case 4:
								o = t.sent(),
									t.label = 5;
							case 5:
								return r = o,
									[4, uf.faceRecognitionNet.computeFaceDescriptor(r[0])];
							case 6:
								return i = t.sent(),
									r.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, bp(e, i)]
						}
					})
				})
			}
			,
			e
	}(mf)
		, yf = function(o) {
		function t(t, e, n) {
			var r = o.call(this) || this;
			return r.parentTask = t,
				r.input = e,
				r.useTinyLandmarkNet = n,
				r
		}
		return zl(t, o),
			Object.defineProperty(t.prototype, "landmarkNet", {
				get: function() {
					return this.useTinyLandmarkNet ? uf.faceLandmark68TinyNet : uf.faceLandmark68Net
				},
				enumerable: !0,
				configurable: !0
			}),
			t
	}(Wp)
		, xf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i, a = this;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return e = t.sent(),
									n = e.map(function(t) {
										return t.detection
									}),
									this.input instanceof it ? [4, Qh(this.input, n)] : [3, 3];
							case 2:
								return o = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, n)];
							case 4:
								o = t.sent(),
									t.label = 5;
							case 5:
								return r = o,
									[4, Promise.all(r.map(function(t) {
										return a.landmarkNet.detectLandmarks(t)
									}))];
							case 6:
								return i = t.sent(),
									r.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, e.map(function(t, e) {
										return Sp(t, i[e])
									})]
						}
					})
				})
			}
			,
			e.prototype.withFaceDescriptors = function() {
				return new vf(this,this.input)
			}
			,
			e
	}(yf)
		, wf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent()) ? (n = e.detection,
									this.input instanceof it ? [4, Qh(this.input, [n])] : [3, 3]) : [2];
							case 2:
								return o = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, [n])];
							case 4:
								o = t.sent(),
									t.label = 5;
							case 5:
								return r = o,
									[4, this.landmarkNet.detectLandmarks(r[0])];
							case 6:
								return i = t.sent(),
									r.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, Sp(e, i)]
						}
					})
				})
			}
			,
			e.prototype.withFaceDescriptor = function() {
				return new gf(this,this.input)
			}
			,
			e
	}(yf)
		, bf = function(r) {
		function t(t, e) {
			var n = r.call(this) || this;
			return n.parentTask = t,
				n.input = e,
				n
		}
		return zl(t, r),
			t
	}(Wp)
		, Ef = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return e = t.sent(),
									n = e.map(function(t) {
										return t.detection
									}),
									this.input instanceof it ? [4, Qh(this.input, n)] : [3, 3];
							case 2:
								return o = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, n)];
							case 4:
								o = t.sent(),
									t.label = 5;
							case 5:
								return r = o,
									[4, Promise.all(r.map(function(t) {
										return uf.faceExpressionNet.predictExpressions(t)
									}))];
							case 6:
								return i = t.sent(),
									r.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, e.map(function(t, e) {
										return Cp(t, i[e])
									})]
						}
					})
				})
			}
			,
			e.prototype.withFaceLandmarks = function() {
				return new xf(this,this.input,!1)
			}
			,
			e
	}(bf)
		, Cf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o, i;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent()) ? (n = e.detection,
									this.input instanceof it ? [4, Qh(this.input, [n])] : [3, 3]) : [2];
							case 2:
								return o = t.sent(),
									[3, 5];
							case 3:
								return [4, Yh(this.input, [n])];
							case 4:
								o = t.sent(),
									t.label = 5;
							case 5:
								return r = o,
									[4, uf.faceExpressionNet.predictExpressions(r[0])];
							case 6:
								return i = t.sent(),
									r.forEach(function(t) {
										return t instanceof it && t.dispose()
									}),
									[2, Cp(e, i)]
						}
					})
				})
			}
			,
			e.prototype.withFaceLandmarks = function() {
				return new wf(this,this.input,!1)
			}
			,
			e
	}(bf)
		, Sf = function(r) {
		function t(t, e) {
			void 0 === e && (e = new Fp);
			var n = r.call(this) || this;
			return n.input = t,
				n.options = e,
				n
		}
		return zl(t, r),
			t
	}(Wp)
		, _f = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n, r, o;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return n = (e = this).input,
									(r = e.options)instanceof _p ? [4, uf.mtcnn.forward(n, r)] : [3, 2];
							case 1:
								return [2, t.sent().map(function(t) {
									return t.detection
								})];
							case 2:
								if (!(o = r instanceof Lp ? function(t) {
										return uf.tinyFaceDetector.locateFaces(t, r)
									}
									: r instanceof Fp ? function(t) {
											return uf.ssdMobilenetv1.locateFaces(t, r)
										}
										: r instanceof Wh ? function(t) {
												return uf.tinyYolov2.locateFaces(t, r)
											}
											: null))
									throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");
								return [2, o(n)]
						}
					})
				})
			}
			,
			e.prototype.runAndExtendWithFaceDetections = function() {
				var t = this;
				return new Promise(function(n) {
						return Vl(t, void 0, void 0, function() {
							var e;
							return Gl(this, function(t) {
								switch (t.label) {
									case 0:
										return [4, this.run()];
									case 1:
										return e = t.sent(),
											[2, n(e.map(function(t) {
												return Ep({}, t)
											}))]
								}
							})
						})
					}
				)
			}
			,
			e.prototype.withFaceLandmarks = function(t) {
				return void 0 === t && (t = !1),
					new xf(this.runAndExtendWithFaceDetections(),this.input,t)
			}
			,
			e.prototype.withFaceExpressions = function() {
				return new Ef(this.runAndExtendWithFaceDetections(),this.input)
			}
			,
			e
	}(Sf)
		, Rf = function(t) {
		function e() {
			return null !== t && t.apply(this, arguments) || this
		}
		return zl(e, t),
			e.prototype.run = function() {
				return Vl(this, void 0, void 0, function() {
					var e, n;
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, new _f(this.input,this.options)];
							case 1:
								return e = t.sent(),
									n = e[0],
									e.forEach(function(t) {
										t.score > n.score && (n = t)
									}),
									[2, n]
						}
					})
				})
			}
			,
			e.prototype.runAndExtendWithFaceDetection = function() {
				var t = this;
				return new Promise(function(n) {
						return Vl(t, void 0, void 0, function() {
							var e;
							return Gl(this, function(t) {
								switch (t.label) {
									case 0:
										return [4, this.run()];
									case 1:
										return e = t.sent(),
											[2, n(e ? Ep({}, e) : void 0)]
								}
							})
						})
					}
				)
			}
			,
			e.prototype.withFaceLandmarks = function(t) {
				return void 0 === t && (t = !1),
					new wf(this.runAndExtendWithFaceDetection(),this.input,t)
			}
			,
			e.prototype.withFaceExpressions = function() {
				return new Cf(this.runAndExtendWithFaceDetection(),this.input)
			}
			,
			e
	}(Sf);
	function Nf(t, e) {
		return void 0 === e && (e = new Fp),
			new _f(t,e)
	}
	function kf(e, n) {
		return Vl(this, void 0, void 0, function() {
			return Gl(this, function(t) {
				switch (t.label) {
					case 0:
						return [4, Nf(e, new Fp(n ? {
							minConfidence: n
						} : {})).withFaceLandmarks().withFaceDescriptors()];
					case 1:
						return [2, t.sent()]
				}
			})
		})
	}
	var Df = kf;
	function Tf(t, e) {
		if (t.length !== e.length)
			throw new Error("euclideanDistance: arr1.length !== arr2.length");
		var n = Array.from(t)
			, r = Array.from(e);
		return Math.sqrt(n.map(function(t, e) {
			return t - r[e]
		}).reduce(function(t, e) {
			return t + Math.pow(e, 2)
		}, 0))
	}
	var If = function() {
		function t(t, e) {
			void 0 === e && (e = .6),
				this._distanceThreshold = e;
			var n = Array.isArray(t) ? t : [t];
			if (!n.length)
				throw new Error("FaceRecognizer.constructor - expected atleast one input");
			var r = 1
				, o = function() {
				return "person " + r++
			};
			this._labeledDescriptors = n.map(function(t) {
				if (t instanceof Kh)
					return t;
				if (t instanceof Float32Array)
					return new Kh(o(),[t]);
				if (t.descriptor && t.descriptor instanceof Float32Array)
					return new Kh(o(),[t.descriptor]);
				throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")
			})
		}
		return Object.defineProperty(t.prototype, "labeledDescriptors", {
			get: function() {
				return this._labeledDescriptors
			},
			enumerable: !0,
			configurable: !0
		}),
			Object.defineProperty(t.prototype, "distanceThreshold", {
				get: function() {
					return this._distanceThreshold
				},
				enumerable: !0,
				configurable: !0
			}),
			t.prototype.computeMeanDistance = function(e, t) {
				return t.map(function(t) {
					return Tf(t, e)
				}).reduce(function(t, e) {
					return t + e
				}, 0) / (t.length || 1)
			}
			,
			t.prototype.matchDescriptor = function(r) {
				var o = this;
				return this.labeledDescriptors.map(function(t) {
					var e = t.descriptors
						, n = t.label;
					return new $h(n,o.computeMeanDistance(r, e))
				}).reduce(function(t, e) {
					return t.distance < e.distance ? t : e
				})
			}
			,
			t.prototype.findBestMatch = function(t) {
				var e = this.matchDescriptor(t);
				return e.distance < this.distanceThreshold ? e : new $h("unknown",e.distance)
			}
			,
			t
	}();
	t.tf = fl,
		t.TfjsImageRecognitionBase = Uh,
		t.BoundingBox = jl,
		t.Box = ql,
		t.BoxWithText = hh,
		t.Dimensions = bl,
		t.LabeledBox = ph,
		t.ObjectDetection = $l,
		t.Point = El,
		t.PredictedBox = fh,
		t.Rect = Vh,
		t.awaitMediaLoaded = rh,
		t.bufferToImage = oh,
		t.createCanvas = sh,
		t.createCanvasFromMedia = uh,
		t.drawBox = lh,
		t.drawDetection = function(t, e, l) {
			var n = eh.getEnv().Canvas
				, h = mh(t);
			if (!(h instanceof n))
				throw new Error("drawDetection - expected canvas to be of type: HTMLCanvasElement");
			(Array.isArray(e) ? e : [e]).forEach(function(t) {
				var e = t instanceof $l ? t.box : t
					, n = e.x
					, r = e.y
					, o = e.width
					, i = e.height
					, a = ch(l)
					, s = ih(h);
				lh(s, n, r, o, i, a);
				var u = a.withScore
					, c = t instanceof hh ? t.text : u && t instanceof fh ? "" + Dl(t.score) : t instanceof $l ? t.className + (u ? " (" + Dl(t.score) + ")" : "") : "";
				c && dh(s, n, r + i, c, a)
			})
		}
		,
		t.drawText = dh,
		t.fetchImage = function(r) {
			return Vl(this, void 0, void 0, function() {
				var e, n;
				return Gl(this, function(t) {
					switch (t.label) {
						case 0:
							return [4, vh(r)];
						case 1:
							return [4, (e = t.sent()).blob()];
						case 2:
							if (!(n = t.sent()).type.startsWith("image/"))
								throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + n.type + ", for url: " + e.url);
							return [2, oh(n)]
					}
				})
			})
		}
		,
		t.fetchJson = gh,
		t.fetchNetWeights = function(n) {
			return Vl(this, void 0, void 0, function() {
				var e;
				return Gl(this, function(t) {
					switch (t.label) {
						case 0:
							return e = Float32Array.bind,
								[4, vh(n)];
						case 1:
							return [4, t.sent().arrayBuffer()];
						case 2:
							return [2, new (e.apply(Float32Array, [void 0, t.sent()]))]
					}
				})
			})
		}
		,
		t.fetchOrThrow = vh,
		t.getContext2dOrThrow = ih,
		t.getDefaultDrawOptions = ch,
		t.getMediaDimensions = ah,
		t.imageTensorToCanvas = yh,
		t.imageToSquare = xh,
		t.isMediaElement = wh,
		t.isMediaLoaded = nh,
		t.loadWeightMap = bh,
		t.NetInput = Ch,
		t.resolveInput = mh,
		t.toNetInput = Sh,
		t.env = eh,
		t.sigmoid = Dh,
		t.inverseSigmoid = function(t) {
			return Math.log(t / (1 - t))
		}
		,
		t.iou = Rh,
		t.nonMaxSuppression = Nh,
		t.normalize = kh,
		t.padToSquare = Eh,
		t.shuffleArray = function(t) {
			for (var e = t.slice(), n = e.length - 1; 0 < n; n--) {
				var r = Math.floor(Math.random() * (n + 1))
					, o = e[n];
				e[n] = e[r],
					e[r] = o
			}
			return e
		}
		,
		t.isTensor = Cl,
		t.isTensor1D = function(t) {
			return Cl(t, 1)
		}
		,
		t.isTensor2D = Sl,
		t.isTensor3D = _l,
		t.isTensor4D = Rl,
		t.isFloat = Nl,
		t.isEven = kl,
		t.round = Dl,
		t.isDimensions = Tl,
		t.computeReshapedDimensions = Il,
		t.getCenterPoint = Al,
		t.range = Ml,
		t.isValidNumber = Fl,
		t.isValidProbablitiy = Ol,
		t.NeuralNetwork = _h,
		t.FaceDetection = Gh,
		t.FaceLandmarks = Hh,
		t.FaceLandmarks5 = qh,
		t.FaceLandmarks68 = jh,
		t.FaceMatch = $h,
		t.LabeledFaceDescriptors = Kh,
		t.drawContour = Xh,
		t.drawLandmarks = function(t, e, n) {
			var r = mh(t);
			if (!(r instanceof eh.getEnv().Canvas))
				throw new Error("drawLandmarks - expected canvas to be of type: HTMLCanvasElement");
			var o = Object.assign(ch(n), n || {})
				, i = Object.assign({
				drawLines: !1
			}, n || {}).drawLines
				, a = ih(r)
				, s = o.lineWidth
				, u = o.color
				, c = void 0 === u ? "blue" : u;
			(Array.isArray(e) ? e : [e]).forEach(function(t) {
				if (i && t instanceof jh)
					return a.strokeStyle = c,
						a.lineWidth = s,
						Xh(a, t.getJawOutline()),
						Xh(a, t.getLeftEyeBrow()),
						Xh(a, t.getRightEyeBrow()),
						Xh(a, t.getNose()),
						Xh(a, t.getLeftEye(), !0),
						Xh(a, t.getRightEye(), !0),
						void Xh(a, t.getMouth(), !0);
				var e = s / 2;
				a.fillStyle = c,
					t.positions.forEach(function(t) {
						return a.fillRect(t.x - e, t.y - e, s, s)
					})
			})
		}
		,
		t.drawFaceExpressions = function(t, e, n) {
			var u = mh(t);
			if (!(u instanceof eh.getEnv().Canvas))
				throw new Error("drawFaceExpressions - expected canvas to be of type: HTMLCanvasElement");
			var r = Object.assign(ch(n), n || {})
				, c = ih(u)
				, o = r.primaryColor
				, l = void 0 === o ? "red" : o
				, i = r.secondaryColor
				, h = void 0 === i ? "blue" : i
				, a = r.primaryFontSize
				, p = void 0 === a ? 22 : a
				, s = r.secondaryFontSize
				, f = void 0 === s ? 16 : s
				, d = r.minConfidence
				, m = void 0 === d ? .2 : d;
			(Array.isArray(e) ? e : [e]).forEach(function(t) {
				var e = t.position
					, n = t.expressions
					, r = e.x
					, o = e.y
					, i = e.height || 0
					, a = n.sort(function(t, e) {
					return e.probability - t.probability
				}).filter(function(t) {
					return t.probability > m
				})
					, s = o + i + a.length * p > u.height ? -a.length * p : 0;
				a.forEach(function(t, e) {
					var n = t.expression + " (" + Dl(t.probability) + ")";
					dh(c, r, o + i + e * p + s, n, {
						textColor: 0 === e ? l : h,
						fontSize: 0 === e ? p : f
					})
				})
			})
		}
		,
		t.extractFaces = Yh,
		t.extractFaceTensors = Qh,
		t.FaceExpressionNet = sp,
		t.faceExpressionLabels = ap,
		t.FaceLandmarkNet = pp,
		t.FaceLandmark68Net = cp,
		t.FaceLandmark68TinyNet = hp,
		t.createFaceRecognitionNet = function(t) {
			var e = new wp;
			return e.extractWeights(t),
				e
		}
		,
		t.FaceRecognitionNet = wp,
		t.extendWithFaceDescriptor = bp,
		t.extendWithFaceDetection = Ep,
		t.extendWithFaceExpressions = Cp,
		t.extendWithFaceLandmarks = Sp,
		t.allFacesSsdMobilenetv1 = kf,
		t.allFacesTinyYolov2 = function(e, n) {
			return void 0 === n && (n = {}),
				Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, Nf(e, new Wh(n)).withFaceLandmarks().withFaceDescriptors()];
							case 1:
								return [2, t.sent()]
						}
					})
				})
		}
		,
		t.allFacesMtcnn = function(e, n) {
			return void 0 === n && (n = {}),
				Vl(this, void 0, void 0, function() {
					return Gl(this, function(t) {
						switch (t.label) {
							case 0:
								return [4, Nf(e, new _p(n)).withFaceLandmarks().withFaceDescriptors()];
							case 1:
								return [2, t.sent()]
						}
					})
				})
		}
		,
		t.allFaces = Df,
		t.ComposableTask = Wp,
		t.ComputeFaceDescriptorsTaskBase = mf,
		t.ComputeAllFaceDescriptorsTask = vf,
		t.ComputeSingleFaceDescriptorTask = gf,
		t.detectSingleFace = function(t, e) {
			return void 0 === e && (e = new Fp),
				new Rf(t,e)
		}
		,
		t.detectAllFaces = Nf,
		t.DetectFacesTaskBase = Sf,
		t.DetectAllFacesTask = _f,
		t.DetectSingleFaceTask = Rf,
		t.DetectFaceLandmarksTaskBase = yf,
		t.DetectAllFaceLandmarksTask = xf,
		t.DetectSingleFaceLandmarksTask = wf,
		t.FaceMatcher = If,
		t.nets = uf,
		t.ssdMobilenetv1 = cf,
		t.tinyFaceDetector = function(t, e) {
			return uf.tinyFaceDetector.locateFaces(t, e)
		}
		,
		t.tinyYolov2 = function(t, e) {
			return uf.tinyYolov2.locateFaces(t, e)
		}
		,
		t.mtcnn = function(t, e) {
			return uf.mtcnn.forward(t, e)
		}
		,
		t.detectFaceLandmarks = lf,
	t.detectFaceLandmarksTiny = function(t) {
		return uf.faceLandmark68TinyNet.detectLandmarks(t)
	}
	,
	t.computeFaceDescriptor = function(t) {
		return uf.faceRecognitionNet.computeFaceDescriptor(t)
	}
	,
	t.recognizeFaceExpressions = function(t) {
		return uf.faceExpressionNet.predictExpressions(t)
	}
	,
	t.loadSsdMobilenetv1Model = hf,
	t.loadTinyFaceDetectorModel = function(t) {
		return uf.tinyFaceDetector.load(t)
	}
	,
	t.loadMtcnnModel = function(t) {
		return uf.mtcnn.load(t)
	}
	,
	t.loadTinyYolov2Model = function(t) {
		return uf.tinyYolov2.load(t)
	}
	,
	t.loadFaceLandmarkModel = function(t) {
		return uf.faceLandmark68Net.load(t)
	}
	,
	t.loadFaceLandmarkTinyModel = function(t) {
		return uf.faceLandmark68TinyNet.load(t)
	}
	,
	t.loadFaceRecognitionModel = function(t) {
		return uf.faceRecognitionNet.load(t)
	}
	,
	t.loadFaceExpressionModel = function(t) {
		return uf.faceExpressionNet.load(t)
	}
	,
	t.loadFaceDetectionModel = pf,
	t.locateFaces = ff,
	t.detectLandmarks = df,
	t.createMtcnn = function(t) {
		var e = new Zp;
		return e.extractWeights(t),
			e
	}
	,
	t.Mtcnn = Zp,
	t.MtcnnOptions = _p,
	t.createSsdMobilenetv1 = Pp,
	t.createFaceDetectionNet = function(t) {
		return Pp(t)
	}
	,
	t.FaceDetectionNet = Bp,
	t.SsdMobilenetv1 = Op,
	t.SsdMobilenetv1Options = Fp,
	t.createTinyFaceDetector = function(t) {
		var e = new nf;
		return e.extractWeights(t),
			e
	}
	,
	t.TinyFaceDetector = nf,
	t.TinyFaceDetectorOptions = Lp,
	t.TinyYolov2 = sf,
	t.createTinyYolov2 = function(t, e) {
		void 0 === e && (e = !0);
		var n = new sf(e);
		return n.extractWeights(t),
			n
	}
	,
	t.euclideanDistance = Tf,
	t.resizeResults = function e(t, n) {
		var r = n.width
			, o = n.height;
		if (Array.isArray(t))
			return t.map(function(t) {
				return e(t, {
					width: r,
					height: o
				})
			});
		var i = t.unshiftedLandmarks && t.unshiftedLandmarks instanceof Hh
			, a = t.detection && t.detection instanceof Gh;
		if (i) {
			var s = t.detection.forSize(r, o)
				, u = t.unshiftedLandmarks.forSize(s.box.width, s.box.height);
			return Sp(Ep(t, s), u)
		}
		return a ? Ep(t, t.detection.forSize(r, o)) : t instanceof Hh || t instanceof Gh ? t.forSize(r, o) : t
	}
	,
	Object.defineProperty(t, "__esModule", {
		value: !0
	})
});