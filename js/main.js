var SERVERURL = "http://www.hkzhe.com",
IMG_JS_URL = "http://www.hkzhe.com",
PASSPORTURL = "http://www.hkzhe.com";
var GLOB = 0,
CACHE_ = {},
isIE6 = !-[1, ] && !window.XMLHttpRequest;
var $topWin = window; (function() {
	try {
		while (true) {
			var b = $topWin.parent;
			if (b && b != $topWin && b.ZN) {
				$topWin = b
			} else {
				return
			}
		}
	} catch(a) {}
})();
try {
	document.execCommand("BackgroundImageCache", false, true)
} catch(e) {}
function __cache__(a) {
	if (a) {
		this.limite = a
	}
	this.id = GLOB++;
	this.i = 0;
	window.CACHE_[this.id] = {};
	this.data = window.CACHE_[this.id]
}
function Utf8ToUnicode(strUtf8)
{
        var bstr = "";
        var nTotalChars = strUtf8.length;        // total chars to be processed.
        var nOffset = 0;                                        // processing point on strUtf8
        var nRemainingBytes = nTotalChars;        // how many bytes left to be converted
        var nOutputPosition = 0;
        var iCode, iCode1, iCode2;                        // the value of the unicode.

        while (nOffset < nTotalChars)
        {
                iCode = strUtf8.charCodeAt(nOffset);
                if ((iCode & 0x80) == 0)                        // 1 byte.
                {
                        if ( nRemainingBytes < 1 )                // not enough data
                                break;

                        bstr += String.fromCharCode(iCode & 0x7F);
                        nOffset ++;
                        nRemainingBytes -= 1;
                }
                else if ((iCode & 0xE0) == 0xC0)        // 2 bytes
                {
                        iCode1 =  strUtf8.charCodeAt(nOffset + 1);
                        if ( nRemainingBytes < 2 ||                        // not enough data
                                 (iCode1 & 0xC0) != 0x80 )                // invalid pattern
                        {
                                break;
                        }

                        bstr += String.fromCharCode(((iCode & 0x3F) << 6) | (         iCode1 & 0x3F));
                        nOffset += 2;
                        nRemainingBytes -= 2;
                }
                else if ((iCode & 0xF0) == 0xE0)        // 3 bytes
                {
                        iCode1 =  strUtf8.charCodeAt(nOffset + 1);
                        iCode2 =  strUtf8.charCodeAt(nOffset + 2);
                        if ( nRemainingBytes < 3 ||                        // not enough data
                                 (iCode1 & 0xC0) != 0x80 ||                // invalid pattern
                                 (iCode2 & 0xC0) != 0x80 )
                        {
                                break;
                        }

                        bstr += String.fromCharCode(((iCode & 0x0F) << 12) |
                                        ((iCode1 & 0x3F) <<  6) |
                                        (iCode2 & 0x3F));
                        nOffset += 3;
                        nRemainingBytes -= 3;
                }
                else                                                                // 4 or more bytes -- unsupported
                        break;
        }

        if (nRemainingBytes != 0)
        {
                // bad UTF8 string.
                return "";
        }

        return bstr;
}
__cache__.prototype.lenght = function() {
	return this.i
};
__cache__.prototype.set = function(k, h) {
	this.i++;
	this.data[k] = h;
	if (this.limite && this.i > this.limite) {
		for (var b in this.data) {
			delete this.data[b];
			return
		}
	}
};
__cache__.prototype.get = function(a) {
	return this.data[a]
};
__cache__.prototype.revoke = function(a) {
	this.data = window.CACHE_[this.id] = (a ? {}: null)
};
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(h, k, a, m, l) {
		return jQuery.easing[jQuery.easing.def](h, k, a, m, l)
	},
	easeInQuad: function(h, k, a, m, l) {
		return m * (k /= l) * k + a
	},
	easeOutQuad: function(h, k, a, m, l) {
		return - m * (k /= l) * (k - 2) + a
	},
	easeInOutQuad: function(h, k, a, m, l) {
		if ((k /= l / 2) < 1) {
			return m / 2 * k * k + a
		}
		return - m / 2 * ((--k) * (k - 2) - 1) + a
	},
	easeInCubic: function(h, k, a, m, l) {
		return m * (k /= l) * k * k + a
	},
	easeOutCubic: function(h, k, a, m, l) {
		return m * ((k = k / l - 1) * k * k + 1) + a
	},
	easeInOutCubic: function(h, k, a, m, l) {
		if ((k /= l / 2) < 1) {
			return m / 2 * k * k * k + a
		}
		return m / 2 * ((k -= 2) * k * k + 2) + a
	},
	easeInQuart: function(h, k, a, m, l) {
		return m * (k /= l) * k * k * k + a
	},
	easeOutQuart: function(h, k, a, m, l) {
		return - m * ((k = k / l - 1) * k * k * k - 1) + a
	},
	easeInOutQuart: function(h, k, a, m, l) {
		if ((k /= l / 2) < 1) {
			return m / 2 * k * k * k * k + a
		}
		return - m / 2 * ((k -= 2) * k * k * k - 2) + a
	},
	easeInQuint: function(h, k, a, m, l) {
		return m * (k /= l) * k * k * k * k + a
	},
	easeOutQuint: function(h, k, a, m, l) {
		return m * ((k = k / l - 1) * k * k * k * k + 1) + a
	},
	easeInOutQuint: function(h, k, a, m, l) {
		if ((k /= l / 2) < 1) {
			return m / 2 * k * k * k * k * k + a
		}
		return m / 2 * ((k -= 2) * k * k * k * k + 2) + a
	},
	easeInSine: function(h, k, a, m, l) {
		return - m * Math.cos(k / l * (Math.PI / 2)) + m + a
	},
	easeOutSine: function(h, k, a, m, l) {
		return m * Math.sin(k / l * (Math.PI / 2)) + a
	},
	easeInOutSine: function(h, k, a, m, l) {
		return - m / 2 * (Math.cos(Math.PI * k / l) - 1) + a
	},
	easeInExpo: function(h, k, a, m, l) {
		return (k == 0) ? a: m * Math.pow(2, 10 * (k / l - 1)) + a
	},
	easeOutExpo: function(h, k, a, m, l) {
		return (k == l) ? a + m: m * ( - Math.pow(2, -10 * k / l) + 1) + a
	},
	easeInOutExpo: function(h, k, a, m, l) {
		if (k == 0) {
			return a
		}
		if (k == l) {
			return a + m
		}
		if ((k /= l / 2) < 1) {
			return m / 2 * Math.pow(2, 10 * (k - 1)) + a
		}
		return m / 2 * ( - Math.pow(2, -10 * --k) + 2) + a
	},
	easeInCirc: function(h, k, a, m, l) {
		return - m * (Math.sqrt(1 - (k /= l) * k) - 1) + a
	},
	easeOutCirc: function(h, k, a, m, l) {
		return m * Math.sqrt(1 - (k = k / l - 1) * k) + a
	},
	easeInOutCirc: function(h, k, a, m, l) {
		if ((k /= l / 2) < 1) {
			return - m / 2 * (Math.sqrt(1 - k * k) - 1) + a
		}
		return m / 2 * (Math.sqrt(1 - (k -= 2) * k) + 1) + a
	},
	easeInElastic: function(k, m, h, v, u) {
		var n = 1.70158;
		var r = 0;
		var l = v;
		if (m == 0) {
			return h
		}
		if ((m /= u) == 1) {
			return h + v
		}
		if (!r) {
			r = u * 0.3
		}
		if (l < Math.abs(v)) {
			l = v;
			var n = r / 4
		} else {
			var n = r / (2 * Math.PI) * Math.asin(v / l)
		}
		return - (l * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * u - n) * (2 * Math.PI) / r)) + h
	},
	easeOutElastic: function(k, m, h, v, u) {
		var n = 1.70158;
		var r = 0;
		var l = v;
		if (m == 0) {
			return h
		}
		if ((m /= u) == 1) {
			return h + v
		}
		if (!r) {
			r = u * 0.3
		}
		if (l < Math.abs(v)) {
			l = v;
			var n = r / 4
		} else {
			var n = r / (2 * Math.PI) * Math.asin(v / l)
		}
		return l * Math.pow(2, -10 * m) * Math.sin((m * u - n) * (2 * Math.PI) / r) + v + h
	},
	easeInOutElastic: function(k, m, h, v, u) {
		var n = 1.70158;
		var r = 0;
		var l = v;
		if (m == 0) {
			return h
		}
		if ((m /= u / 2) == 2) {
			return h + v
		}
		if (!r) {
			r = u * (0.3 * 1.5)
		}
		if (l < Math.abs(v)) {
			l = v;
			var n = r / 4
		} else {
			var n = r / (2 * Math.PI) * Math.asin(v / l)
		}
		if (m < 1) {
			return - 0.5 * (l * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * u - n) * (2 * Math.PI) / r)) + h
		}
		return l * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * u - n) * (2 * Math.PI) / r) * 0.5 + v + h
	},
	easeInBack: function(h, k, a, n, m, l) {
		if (l == undefined) {
			l = 1.70158
		}
		return n * (k /= m) * k * ((l + 1) * k - l) + a
	},
	easeOutBack: function(h, k, a, n, m, l) {
		if (l == undefined) {
			l = 1.70158
		}
		return n * ((k = k / m - 1) * k * ((l + 1) * k + l) + 1) + a
	},
	easeInOutBack: function(h, k, a, n, m, l) {
		if (l == undefined) {
			l = 1.70158
		}
		if ((k /= m / 2) < 1) {
			return n / 2 * (k * k * (((l *= (1.525)) + 1) * k - l)) + a
		}
		return n / 2 * ((k -= 2) * k * (((l *= (1.525)) + 1) * k + l) + 2) + a
	},
	easeInBounce: function(h, k, a, m, l) {
		return m - jQuery.easing.easeOutBounce(h, l - k, 0, m, l) + a
	},
	easeOutBounce: function(h, k, a, m, l) {
		if ((k /= l) < (1 / 2.75)) {
			return m * (7.5625 * k * k) + a
		} else {
			if (k < (2 / 2.75)) {
				return m * (7.5625 * (k -= (1.5 / 2.75)) * k + 0.75) + a
			} else {
				if (k < (2.5 / 2.75)) {
					return m * (7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375) + a
				} else {
					return m * (7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function(h, k, a, m, l) {
		if (k < l / 2) {
			return jQuery.easing.easeInBounce(h, k * 2, 0, m, l) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(h, k * 2 - l, 0, m, l) * 0.5 + m * 0.5 + a
	}
});
jQuery.cookie = function(b, s, w) {
	if (typeof s != "undefined") {
		w = w || {};
		if (s === null) {
			s = "";
			w.expires = -1
		}
		var l = "";
		if (w.expires && (typeof w.expires == "number" || w.expires.toUTCString)) {
			var m;
			if (typeof w.expires == "number") {
				m = new Date();
				m.setTime(m.getTime() + (w.expires * 24 * 60 * 60 * 1000))
			} else {
				m = w.expires
			}
			l = "; expires=" + m.toUTCString()
		}
		var v = w.path ? "; path=" + w.path: "";
		var n = w.domain ? "; domain=" + w.domain: "";
		var a = w.secure ? "; secure": "";
		document.cookie = [b, "=", encodeURIComponent(s), l, v, n, a].join("")
	} else {
		var k = null;
		if (document.cookie && document.cookie != "") {
			var u = document.cookie.split(";");
			for (var r = 0; r < u.length; r++) {
				var h = jQuery.trim(u[r]);
				if (h.substring(0, b.length + 1) == (b + "=")) {
					k = decodeURIComponent(h.substring(b.length + 1));
					break
				}
			}
		}
		return k
	}
};
function refreshprice(r, l) {
	try {
		var b = $("#txtComeDate").val();
		var a = $("#txtOutDate").val();
		_v1 = null,
		dn = 0,
		tb1 = "",
		wks = "",
		d,
		hotels = null,
		n1 = 0;
		if (b != "" && a != "") {
			$("#h" + r + "").html("<p style='text-align:center;'><img src='http://www.api.zhuna.cn/price/default/loading.gif' /></p>");
			var k = l + "json.php?hid=" + r + "&tm1=" + b + "&tm2=" + a + "&call=callback";
			var h = document.getElementsByTagName("head")[0] || document.documentElement;
			var n = document.createElement("script");
			n.src = k;
			n.charset = "utf-8";
			h.insertBefore(n, h.firstChild);
			$.cookie("tm1", b);
			$.cookie("tm2", a);
			document.doBook.tm1.value = b;
			document.doBook.tm2.value = a
		}
	} catch(m) {}
}
function C(a, h, b) {
	this.pgbox = b;
	this.d = {
		pg: 1,
		keys: "",
		pagesize: 3
	};
	this.id = $(h);
	this.ty = this.id.find(".dp_tab a");
	this.url = SERVERURL + "/ajax/a_comment.asp";
	this.position = null;
	this.search = this.id.find(".dp_tab #commentsearchsub");
	this.searchtxt = this.id.find(".dp_tab #commentsearch");
	this.cache = {};
	this.init(a)
}
C.prototype.init = function(h) {
	var a = this;
	$.extend(a.d, h);
	var b = this.ty.click(function() {
		$this = $(this);
		var k = $this.attr("rel");
		if (k != a.d.types) {
			a.d.pg = 1;
			a.ty.removeClass("b");
			$this.addClass("b");
			a.d.types = k;
			a.ajax(a.id.selector + " .dp_tab")
		}
	});
	this.searchtxt.bind("keypress blur",
	function(k) {
		if (k.type == "keypress") {
			if ((k.ctrlKey && k.which == 13) || k.which == 13) {
				a.searchevent()
			}
		} else {
			if (k.type == "blur") {
				if (!a.searchtxt.val()) {
					a.d.keys = ""
				}
			}
		}
	});
	this.search.bind("click",
	function() {
		a.searchevent()
	});
	return h
};
C.prototype.errortxt = function() {
	var a = this;
	$("<div id='err'>").text("\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01").bind("click",
	function() {
		a.ajax(a.position)
	})
};
C.prototype.fillbox = function(h) {
	var l = "",
	b = h[1],
	h = h[0],
	a = this;
	if (h.length) {
		for (var k = 0; k < h.length; k++) {
			l += '<div class="dp_box"><div class="dp_box_l"><dl><dt>' + (h[k][5] + h[k][5]) + '<small>\u5143</small></dt><dd>\u70b9\u8bc4\u5956\u91d1</dd></dl></div><div class="dp_box_r"><dl><dt><em><img src="http://p.zhuna.com/images/ping' + h[k][7] + '.gif" width="41" height="18" /></em>\u70b9\u8bc4\u623f\u578b\uff1a<a href="#">' + (h[k][10] ? h[k][10] : "\u65e0") + "</a>\u3000\u70b9\u8bc4\u65e5\u671f\uff1a" + h[k][4] + "\u3000\u70b9\u8bc4\u4f1a\u5458\uff1a" + h[k][3] + "</dt><dd>" + h[k][6] + "</dd><dt>\u5ba2\u4eba\u5370\u8c61\uff1a" + (h[k][9] ? "<span>" + h[k][9].split("$").join("</span>\u3001<span>") + "</span>": "\u65e0") + "</dt>";
			if (h[k][8]) {
				l += "<dt>\u5171\u5206\u4eab<strong>" + h[k][8] + "</strong>\u5f20\u56fe\u7247,\u83b7\u5f97\u56fe\u7247\u70b9\u8bc4\u5956\u91d1<strong>" + h[k][8] + "</strong>\u5143</dt><dd>";
				for (var m = 0; m < h[k][11].length; m++) {
					l += '<a href="http://p.zhuna.cn/uppic/temupload/' + h[k][2] + "/z_" + h[k][11][m][0] + '" rel="picshow" title="' + h[k][11][m][1] + ":" + h[k][11][m][2] + '"><img src="http://p.zhuna.cn/uppic/temupload/' + h[k][2] + "/x_" + h[k][11][m][0] + '" border="0" width="81" height="58" /></a>'
				}
			}
			l += "</dl></div></div>"
		}
	} else {
		l = "\u6682\u65e0\u6570\u636e\uff01"
	}
	if (this.id.find(".dp_tab").length) {
		this.id.find(".dp_box").remove();
		this.id.find(".dp_tab").after(l)
	} else {
		this.id.find(".dp_box").remove();
		this.id.find(this.pgbox).before(l)
	}
	if (l == "\u6682\u65e0\u6570\u636e\uff01") {
		return
	}
	if (b > this.d.pagesize) {
		$(this.pgbox).page(b, {
			items_per_page: this.d.pagesize,
			current_page: a.d.pg - 1,
			callback: a.pg,
			proto: a,
			prev_text: "\u4e0a\u4e00\u9875",
			next_text: "\u4e0b\u4e00\u9875",
			queue_id: 1
		})
	} else {
		$(this.pgbox).html("")
	}
	$(this.id.selector + " a[rel='picshow']").click(function() {
		var n = $(this);
		Tips({
			_title: n.attr("title"),
			_closeID: "colseTipsLayer",
			_content: 'text:<em class="colseBtn" id="colseTipsLayer"></em>',
			_width: 600,
			_height: 500,
			_rel: "picshow",
			_this: n,
			_showbg: true
		});
		return false
	})
};
C.prototype.error = function() {
	Tips({
		_content: "text:\u67e5\u8be2\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01",
		_width: "150",
		_height: "78",
		_showTitle: false,
		_showBoxbg: false,
		_triggerID: this.position,
		_offsets: {
			left: "0px",
			top: "30px"
		},
		_time: 1500
	})
};
C.prototype.ajax = function(h) {
	this.position = h;
	var k = this,
	l = new Array(),
	m;
	for (var b in k.d) {
		l.push(k.d[b])
	}
	m = l.join(",");
	if (k.cache[m]) {
		k.fillbox(k.cache[m])
	} else {
		$.ajax({
			type: "POST",
			dataType: "json",
			url: this.url,
			data: this.d,
			beforeSend: function() {
				k.load(true)
			},
			timeout: 3000,
			error: function(a) {
				k.error();
				k.load(false)
			},
			success: function(a) {
				k.fillbox(a);
				k.load(false);
				k.cache[m] = a
			}
		})
	}
};
C.prototype.load = function(a) {
	a ? $(this.position).addClass("loading") : $(this.position).removeClass("loading")
};
C.prototype.pg = function(h, b, a) {
	var a = this.d ? this: a;
	a.d.pg = h + 1;
	a.ajax(a.id.selector + a.pgbox)
};
C.prototype.searchevent = function() {
	var a = this.searchtxt.val();
	if (!a) {
		Tips({
			_boxID: "TipsLayer",
			_content: 'text:<div class="stat-msg"><span class="icon err"></span><span rel="con">\u8bf7\u8f93\u5165\u5173\u952e\u8bcd</span></div>',
			_width: "150",
			_showTitle: false,
			_showBoxbg: false,
			_triggerID: this.id.selector + " #commentsearch",
			_offsets: {
				left: "0px",
				top: "30px"
			},
			_time: 1500,
			_fns: function() {
				$("body").append('<span class="arrowTop" style="left:75px;top:-7px;">\u7bad\u5934</span>');
				$(".arrowTop").appendTo("#TipsLayer");
				$("#TipsLayer").find("._boxContent").css({
					background: "#FFFFFF"
				}).addClass("tipslayer")
			}
		});
		return
	}
	if ((!this.d.keys) || (this.d.keys != escape(a))) {
		this.d.keys = escape(a);
		this.ajax(this.id.selector + " .dp_tab")
	}
};
var ZN = new Object(); (function() {
	ZN.F = {
		c: function() {
			var t_ = new Array();
			for (var i = 0; i < arguments.length; i++) {
				t_.push(arguments[i])
			}
			return t_.join("")
		},
		cc: function() {
			for (var a = arguments[0], c = 0; c < arguments.length - 1; c++) {
				a = a.replace(new RegExp("\\{" + c + "\\}"), arguments[c + 1])
			}
			return a
		},
		re: function(t, obj) {
			return t.replace(/\{\$(\w+)\}/g,
			function(s, k) {
				if (k in obj) {
					return obj[k]
				} else {
					return s
				}
			})
		},
		ser: function(v, t) {
			if (v && (v.indexOf(t) != -1)) {
				return ""
			} else {
				return "1"
			}
		},
		star_name: function(v) {
			if (isNaN(v)) {
				return
			}
			if (v == 1) {
				return "\u4e94\u661f\u7ea7"
			} else {
				if (v == 2) {
					return "\u8c6a\u534e\u578b"
				} else {
					if (v == 3) {
						return "\u56db\u661f\u7ea7"
					} else {
						if (v == 4) {
							return "\u9ad8\u6863\u578b"
						} else {
							if (v == 5) {
								return "\u4e09\u661f\u7ea7"
							} else {
								if (v == 6) {
									return "\u8212\u9002\u578b"
								} else {
									return ""
								}
							}
						}
					}
				}
			}
		},
		star: function(v) {
			if (isNaN(v)) {
				return
			}
			if (v > 6 && v < 11) {
				return 2
			} else {
				if (v > 4 && v < 7) {
					return 3
				} else {
					if (v > 2 && v < 5) {
						return 4
					} else {
						if (v > 0 && v < 3) {
							return 5
						}
					}
				}
			}
		},
		myd: function(v, t, h) {
			try {
				var s = v.split("$"),
				e = Number(s[0]) + Number(s[1]),
				q = e + Number(s[2]);
				if (!isNaN(h)) {
					return s[h]
				} else {
					if (t) {
						return q ? Math.ceil(e * 100 / q) : 100
					} else {
						return q
					}
				}
			} catch(e) {
				return "..."
			}
		},
		cutstr: function(v, l) {
			if (v) {
				return (v.length > l) ? v.substring(0, l) + "...": v
			} else {
				return v
			}
		},
		stopEvent: function(a) {
			if (window.event) {
				event.returnValue = false;
				event.cancelBubble = true
			} else {
				a.preventDefault();
				a.stopPropagation()
			}
		},
		lazyload: function(v, callback, param) {
			var self = this,
			O = {
				threshold: 0
			};
			self.images = $(v);
			O = $.extend(O, param);
			$.belowthefold = function(element) {
				var fold = $(window).height() + $(window).scrollTop();
				return fold <= $(element).offset().top - O.threshold
			};
			$.rightoffold = function(element) {
				var fold = $(window).width() + $(window).scrollLeft();
				return fold <= $(element).offset().left - O.threshold
			};
			$.abovethetop = function(element) {
				var fold = $(window).scrollTop();
				return fold >= $(element).offset().top + O.threshold + $(element).height()
			};
			$.leftofbegin = function(element) {
				var fold = $(window).scrollLeft();
				return fold >= $(element).offset().left + O.threshold + $(element).width()
			};
			this.appear = function(element) {
				$(element).attr("src",
				function() {
					return $(this).attr("s")
				});
				$(element).removeAttr("s");
				element.loaded = true;
				var temp = $.grep(self.images,
				function(ele) {
					return ! ele.loaded
				});
				self.images = $(temp)
			};
			this.loadimg = function() {
				if (!self.images.length) {
					return
				}
				var counter = 0;
				self.images.each(function() {
					if ($.abovethetop(this) || $.leftofbegin(this)) {} else {
						if (!$.belowthefold(this) && !$.rightoffold(this)) {
							if (callback) {
								callback.call(self, this)
							} else {
								self.appear(this)
							}
						} else {
							if (counter++>0) {
								return false
							}
						}
					}
				})
			};
			this.cancel = function() {
				$(window).unbind("scroll", self.loadimg)
			};
			this.restart = function() {
				$(window).unbind("scroll", self.loadimg).bind("scroll", self.loadimg)
			};
			this.restart()
		},
		hover: function(a, event, t) {
			if (event.target.nodeName === t) {
				if (a) {
					$(event.target).css("color", "#F60")
				} else {
					$(event.target).css("color", "#444")
				}
			}
		},
		advise: {
			id: "advise_side",
			init: function(url, text) {
				var T = this;
				if (!text) {
					text = "\u8bf4\u8bf4\u6211\u4f7f\u7528\u641c\u7d22\u7684\u611f\u53d7<s></s>"
				}
				if (!$(T.id).length) {
					if (url) {
						T.create({
							href: url,
							target: "_blank",
							id: T.id
						},
						text)
					} else {
						T.create({
							href: "###",
							id: T.id
						},
						text)
					}
				}
			},
			create: function(a, text) {
				var T = this,
				temp = $("<a>").attr(a),
				temp_incl = $("<span>").html(text);
				temp.append(temp_incl);
				$("body").append(temp);
				ZN.F.fixedPos(temp, 500, 178);
				var A_ = function() {
					var calculate = function() {
						var T = this,
						w = $(window).width() / 2,
						h = (isIE6 ? ($(window).height() / 2 + (document.documentElement.scrollTop || document.body.scrollTop)) : $(window).height() / 2);
						return [Math.round(w - o._width / 2), Math.round(h - o._height / 2)]
					},
					$box = $("#experience"),
					$box_p = ($("#experience_p").length ? $("#experience_p") : $("#experienceparent")),
					road = {
						start: o._effect_param.position,
						end: calculate()
					},
					zoom = {
						start: o._effect_param.def_w_h,
						end: [o._width, o._height]
					};
					var i = 0,
					step = 10,
					wh;
					$box_p.css({
						width: zoom.start[0],
						height: zoom.start[1],
						left: road.start[0],
						top: road.start[1]
					});
					$box.css({
						width: zoom.start[0],
						height: zoom.start[1],
						left: road.start[0],
						top: road.start[1]
					});
					$box_p.removeClass("hidden");
					$box.css({
						overflow: "hidden",
						margin: 0
					});
					$box_p.css({
						overflow: "hidden",
						margin: 0
					});
					$box.css({
						position: ""
					});
					var timer = setInterval(function() {
						if (i++==step) {
							clearInterval(timer)
						}
						wh = {
							width: ((zoom.end[0] - zoom.start[0]) / step) * i,
							height: zoom.start[1] + ((zoom.end[1] - zoom.start[1]) / step) * i,
							left: road.start[0] + ((road.end[0] - road.start[0]) / step) * i,
							top: road.start[1] + ((road.end[1] - road.start[1]) / step) * i
						};
						$box.css(wh);
						$box_p.css(wh)
					},
					5)
				};
				if (!a.target) {
					temp.bind("click",
					function(e) {
						var p;
						var b = $("#experience");
						if (b.length) {
							if (b.hasClass("hidden")) {
								b.removeClass("hidden")
							} else {
								b.addClass("hidden")
							}
						} else {
							var x = e.pageX,
							y = e.pageY;
							p = {
								position: [x, y],
								def_w_h: [temp.width(), temp.height()]
							};
							Tips({
								_boxID: "experience",
								_title: "\u8bf4\u8bf4\u6211\u4f7f\u7528\u641c\u7d22\u7684\u611f\u53d7",
								_content: "iframe:" + SERVERURL + "/Ajax/A_feedback.asp",
								_width: "500",
								_height: "400",
								_drag: "_boxTitle",
								_effect: true,
								_effect_param: p
							})
						}
					})
				}
			}
		},
		fixedPos: function(F, E, H, follow, callback) {
			if (!F) {
				return
			}
			var J = H || $(window).height() / 2 - (F.height() / 2),
			E = E || 500,
			D = 0,
			I = false,
			J = J || 90,
			K;
			if (!isIE6 && !follow) {
				F.css({
					top: J + "px",
					position: "fix"
				});
				return
			}
			F.css({
				top: J + $(window).scrollTop() + "px",
				position: "absolute"
			});
			$(document).ready(function() {
				$(window).bind("scroll",
				function() {
					clearTimeout(K);
					K = setTimeout(function() {
						this.J = J;
						callback && callback.call(this);
						var csstop = ($(window).scrollTop() + this.J);
						F.animate({
							top: csstop + "px"
						},
						"fast")
					},
					E)
				})
			})
		},
		cart: {
			id: "#compare_box",
			ul: "#compare_items",
			rolldiv: "div.float_compare3",
			float_com: "#float_compare",
			url: "http://www.zhuna.cn/compare/",
			initScrollY: 0,
			text: {
				add: "\u6dfb\u52a0\u5230\u6311\u9009\u680f",
				remove: "\u4ece\u6311\u9009\u680f\u79fb\u9664"
			},
			hidden: function() {
				$(this.id).hide()
			},
			hiddenAll: function(tf) {
				t = $(this.float_com);
				if (!tf && t.attr("class") == "float_compare1") {
					t.attr("class", "float_compare2");
					$(this.rolldiv).animate({
						marginRight: "-172px"
					})
				} else {
					t.attr("class", "float_compare1");
					$(this.rolldiv).show().animate({
						marginRight: "0px"
					})
				}
			},
			removeAll: function() {
				$.cookie("cart", "");
				$(this.ul, this.id).children("li").remove();
				this.hiddenAll(false);
				this.scan()
			},
			soh: function(t, a) {
				var s = $(t);
				if (a) {
					s.addClass("over").find(".icon").show()
				} else {
					s.removeClass("over").find(".icon").hide()
				}
			},
			check: function(v) {
				var l = $(v).find("input:checked").length;
				if (l < 2 || l > 4) {
					alert("\u5bf9\u4e0d\u8d77\uff0c\u8bf7\u9009\u62e92-3\u5bb6\u9152\u5e97\u8fdb\u884c\u6bd4\u8f83\uff01");
					return false
				} else {
					return true
				}
			},
			check_cbox: function() {
				var a = $(this.ul).find("input:checkbox");
				var ca = a.filter("input:checked");
				if (ca.length >= 3) {
					a.filter(function(index) {
						return ! $(this).attr("checked")
					}).attr("disabled", true)
				} else {
					a.attr("disabled", false)
				}
				a.each(function() {
					var z = $(this),
					h = z.siblings("input[name='hid']");
					if (z.attr("checked")) {
						h.attr("disabled", false)
					} else {
						h.attr("disabled", true)
					}
				})
			},
			temp_li: '<li i="{$id}" onmouseover="javascript:ZN.F.cart.soh(this,1);" onmouseout="javascript:ZN.F.cart.soh(this,0);"><span onclick="ZN.F.cart.remove(\'{$id}\');">&nbsp;</span><input type="checkbox" onclick="ZN.F.cart.check_cbox();" class="compare_check" id="checkbox" name="checkbox"><a title="{$title}" href="/hotel-{$id}.html">{$title}</a><input type="hidden" value="{$id}" name="hid" disabled="true" /></li>',
			temp: '<div id="compare_box" style="overflow:hidden;display:none;" class="float_compare"><form action="{$url}" onsubmit="return ZN.F.cart.check(this)" method="get" target="_blank">  <div class="float_compare1" id="float_compare" style="cursor:pointer;" onclick="ZN.F.cart.hiddenAll();"></div><div class="float_compare3{$showempty}">    <ul id="compare_items"{$hidden}>{$ul}<p>\u6700\u591a\u53ef\u9009\u4e09\u5bb6\u9152\u5e97\u5bf9\u6bd4<br><input type="submit" value="\u5f00\u59cb\u5bf9\u6bd4" id="button" class="btn_92" name="button"><a target="_self" href="javascript:ZN.F.cart.removeAll()">\u6e05\u7a7a</a></p></ul></div></form></div>',
			create: function(c) {
				var T = this,
				s_, s, s_pull = [],
				b = this.getCK(),
				b_;
				if (b && b.toString().substring(0, 1) == ",") {
					b_ = b.toString().substring(1)
				}
				var css = {
					position: "fixed",
					top: 140 + "px"
				};
				c && $.extend(css, c);
				if (b_) {
					$.getJSON(SERVERURL + "/ajax/A_hotelname_pic.asp", {
						id: b_
					},
					function(data) {
						for (var a = 0; a < b.length; a++) {
							if (b[a] == null || !b[a] || !data) {
								continue
							}
							s_ = eval("data.h" + b[a] + "");
							s_pull.push(ZN.F.re(T.temp_li, {
								id: s_.id,
								title: s_.title,
								img: s_.img
							}))
						}
						s = ZN.F.re(T.temp, {
							url: T.url,
							ul: (s_pull.length ? s_pull.join("") : ""),
							hidden: "",
							showempty: ""
						});
						$("body").append(s);
						if (isIE6) {
							ZN.F.fixedPos($(T.id), 500, parseInt(css.top))
						} else {
							$(T.id).css(css)
						}
						if (s_pull.length) {
							$(T.id).show()
						}
					})
				} else {
					s = ZN.F.re(T.temp, {
						url: T.url,
						ul: "",
						hidden: " class='hidden'",
						showempty: " float_compare31"
					});
					$("body").append(s);
					if (isIE6) {
						ZN.F.fixedPos($(T.id), 500, parseInt(css.top))
					} else {
						$(T.id).css(css)
					}
					if (s_pull.length) {
						$(T.id).show()
					}
				}
				setTimeout(function() {
					T.hiddenAll()
				},
				2000)
			},
			scan: function() {
				var T = this,
				s = $(T.o),
				b = this.getCK();
				s.each(function() {
					$(this).html(T.text.add);
					$(this).attr("class", $(this).attr("class").replace(/\d+/g, ""));
					for (var a = 0; a < b.length; a++) {
						if (b[a].split("|")[0] == $(this).data("d").split("|")[0]) {
							$(this).attr("class", $(this).attr("class") + "1");
							$(this).html(T.text.remove)
						}
					}
					if (!b.length) {
						$(this).attr("class", $(this).attr("class").replace(/\d+/g, ""))
					}
				})
			},
			do_: function(t) {
				var T = this;
				var c = $(t).attr("class");
				if (/\d+/.test(c)) {
					$(t).attr("class", c.replace(/\d+/g, "")).html(T.text.add);
					T.remove($(t).data("d"))
				} else {
					$(t).attr("class", c + "1").html(T.text.remove);
					T.set($(t).data("d"))
				}
			},
			init: function(o, b, other, c) {
				var T = this;
				if (!o) {
					return
				}
				other && $.extend(T.text, other);
				this.o = o;
				if (!$(T.id).length) {
					T.create(c)
				}
				if (b == undefined) {
					$(o).unbind("click").bind("click",
					function() {
						T.do_(this)
					})
				}
				T.scan()
			},
			roll: function() {
				var T = this,
				h = 90;
				$(T.id).css("position", "absolute");
				var csstop = (document.body.scrollTop || document.documentElement.scrollTop) + h;
				$(T.id).animate({
					top: csstop + "px"
				},
				"fast")
			},
			getCK: function() {
				var c = $.cookie("cart");
				if ($.trim(c) != "") {
					return c.split("\u03c8")
				} else {
					return []
				}
			},
			setCK: function(v, r) {
				var exist = false,
				va = [],
				b = this.getCK(),
				l = b.length;
				if (l > 10 && r) {
					exist = true;
					alert("\u5bf9\u4e0d\u8d77\uff0c\u6700\u591a\u53ea\u80fd\u9009\u62e910\u5bb6\u9152\u5e97\u8fdb\u884c\u5907\u9009\uff01");
					$(this.o).each(function() {
						if ($(this).data("d") == v.join("|")) {
							$(this).attr("class", $(this).attr("class").replace(/\d+/g, ""))
						}
					})
				}
				for (var a = 0; a < l; a++) {
					if (b[a] == null) {
						continue
					}
					if (v[0] == b[a]) {
						exist = true
					} else {
						if (!r) {
							va.push(b[a])
						}
					}
				}
				if (!exist && r) {
					$.cookie("cart", b.join("\u03c8") + "\u03c8" + v[0])
				}
				if (exist && !r) {
					if (va.join("\u03c8") != "null") {
						$.cookie("cart", va.join("\u03c8"))
					} else {
						$.cookie("cart", "")
					}
				}
				return exist
			},
			set: function(v) {
				if (!v) {
					return
				}
				if ($(this.ul).hasClass("hidden")) {
					$(this.rolldiv).removeClass("float_compare31");
					$(this.ul).removeClass("hidden")
				}
				this.hiddenAll(true);
				var s = v.split("|");
				if (s.length != 2) {
					if (!this.setCK(s, true)) {
						$(this.ul).prepend(ZN.F.re(this.temp_li, {
							id: s[0],
							title: s[1]
						}));
						if (!$(this.id + ":visible").length) {
							$(this.id).show()
						}
					}
				}
			},
			remove: function(v) {
				if (!v) {
					return
				}
				var s, s_ = false;
				if (v.indexOf("|") != -1) {
					s = v.split("|")
				} else {
					s = [v];
					s_ = true
				}
				if (this.setCK(s, false)) {
					$(this.ul).find("li[i='" + s[0] + "']").remove();
					if (!$(this.id + ":visible").length && $.cookie("cart")) {
						$(this.id).show()
					}
				}
				if (s_) {
					this.scan()
				}
				this.hiddenAll(true);
				this.check_cbox()
			}
		},
		compare: {
			id: "#duibi",
			temp: '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="duibi"><tr><td class="duibi_bg">\u9152\u5e97\u540d\u79f0</td>{#BEGIN<td width="{$width}%" class="duibi_bg1"><strong><a href="/hotel-{$id}.html" target="_blank">{$title}</a></strong></td>END#}</tr><tr><td class="duibi_bg">\u9152\u5e97\u56fe\u7247</td>{#BEGIN<td align="center"><img src="{$img}" width="152" height="110" /></td>END#}</tr><tr><td class="duibi_bg">\u79fb\u51fa\u6bd4\u8f83</td>{#BEGIN<td align="center"><a href="###" onclick="javascript:ZN.F.compare.remove({$id})">\u79fb\u51fa\u6bd4\u8f83 X</a></td>END#}</tr><tr><td class="duibi_bg">\u9152\u5e97\u5730\u5740</td>{#BEGIN<td class="duibi_bg1">{$address}</td>END#}</tr><tr><td class="duibi_bg">\u9152\u5e97\u5730\u56fe</td><td {$colspan}><div id="Map"></div></td></tr><tr><td class="duibi_bg">\u623f\u578b\u4e0e\u4ef7\u683c</td>{#BEGIN<td valign="top"><div id="h{$id}"><span><img width="140" height="36" src="http://www.api.zhuna.cn/price/default/loading.gif"></span></div></td>END#}</tr><tr><td class="duibi_bg">\u70b9\u8bc4\u5956\u91d1</td>{#BEGIN<td class="f_b_f00">{$prix}</td>END#}</tr><tr><td class="duibi_bg">\u9152\u5e97\u661f\u7ea7</td>{#BEGIN<td>{$star}</td>END#}</tr><tr><td class="duibi_bg">\u4f1a\u5458\u8bc4\u8bba</td>{#BEGIN<td class="duibi_bg1">{$comment}\u3000\u3000<a href="http://www.zhuna.cn/hotelcomment-{$id}.html" target="_blank">\u67e5\u770b\u70b9\u8bc4</a></td>END#}</tr><tr><td class="duibi_bg">\u5ba2\u4eba\u5370\u8c61</td>{#BEGIN<td> {$impression} </td>END#}</tr><tr><td class="duibi_bg">\u5bbd\u5e26</td>{#BEGIN<td class="duibi_bg1">{$adsl}</td>END#}</tr><tr><td class="duibi_bg">\u65e9\u9910</td>{#BEGIN<td>{$breakfast}</td>END#}</tr><tr><td class="duibi_bg">\u4f4d\u7f6e\u53ca\u5468\u8fb9</td>{#BEGIN<td class="duibi_bg1"> {$traffic} </td>END#}</tr><tr><td class="duibi_bg">\u9910\u996e\u8bbe\u65bd</td>{#BEGIN<td> {$canyin} </td>END#}</tr><tr><td class="duibi_bg">\u670d\u52a1\u8bbe\u65bd</td>{#BEGIN<td class="duibi_bg1">{$service} </td>END#}</tr><tr><td class="duibi_bg">\u652f\u6301\u5361\u7c7b</td>{#BEGIN<td>{$card}</td>END#}</tr><tr><td class="duibi_bg">&nbsp;</td>{#BEGIN<td align="center" class="duibi_bg1"><input name="button" type="button" onclick="javascript:window.open(\'/hotel-{$id}.html\')" class="btn_92" id="button" value="\u9884\u8ba2\u8be5\u9152\u5e97" /></td>END#}</tr></table>',
			init: function(ids) {
				if (!ids) {
					return
				}
				this.ids = ids;
				this.ajax()
			},
			remove: function(id) {
				if (!id) {
					return
				}
				var ids = this.ids.split(","),
				ids_ = [];
				for (var a in ids) {
					if (ids[a] != id) {
						ids_.push(ids[a])
					}
				}
				if (!ids_.length) {
					alert("\u4e0d\u80fd\u79fb\u9664\u6700\u540e\u4e00\u5bb6\u9152\u5e97\uff01");
					return
				}
				this.ids = ids_.join(",");
				this.ajax()
			},
			select_info: function(str) {
				if (!str) {
					return ""
				}
				str = str.replace(/<([\/\w\s\=\"\'\#\;\:\,\.\-\+\?]*)>/g, "");
				str = str.replace(/,/g, "\u3001");
				str = str.replace(/,$/g, "");
				str = str.replace(/$/g, "");
				return str
			},
			width: [87, 43.5, 29],
			machining: function(v) {
				var s_ = [],
				l = v.length;
				for (var i = 0; i < l; i++) {
					var o = v[i],
					_c = o.comment.split("$"),
					o_ = {};
					o_.id = o.id;
					o_.title = o.title;
					o_.img = "http://p.zhuna.cn" + o.img;
					o_.address = o.address;
					o_.prix = o.prix;
					o_.star_num = o.star;
					o_.star = '<img width="94" height="18" src="/images/blank.gif" class="star' + ((o.star > 9) ? 9 : o.star) + '">';
					o_.comment = "\u597d\u8bc4\uff1a" + _c[0] + "\u3000\u4e2d\u8bc4\uff1a" + _c[1] + "\u3000\u5dee\u8bc4\uff1a" + _c[2] + "";
					o_.impression = o.impression.split(",").join("\u3001");
					o_.adsl = o.adsl ? "\u6709\uff08\u514d\u8d39\uff09": "\u65e0";
					o_.breakfast = o.breakfast ? "\u542b\u65e9": "\u4e0d\u542b\u65e9";
					o_.traffic = this.select_info(o.traffic) + "<br />" + this.select_info(o.traffic1);
					o_.canyin = this.select_info(o.canyin);
					o_.service = this.select_info(o.service);
					o_.card = this.select_info(o.card);
					o_.width = this.width[l - 1];
					o_.colspan = (l < 2) ? "": " colspan='" + l + "'";
					o_.location = o.location;
					o_.price = o.price;
					s_.push(o_)
				}
				return s_
			},
			loadmap: function(d) {
				function mover(div, str) {
					div.innerHTML = str;
					div.className = "map_searchresult_hotels";
					div.style.width = "235px";
					div.style.height = "50px";
					div.style.zIndex = 90
				}
				function mout(div, str) {
					div.innerHTML = str;
					div.className = "map_searchresult_price";
					div.style.width = "57px";
					div.style.height = "33px";
					div.style.zIndex = 4
				}
				function from(fn, p) {
					var evt = arguments.callee.caller.arguments[0] || window.event;
					var el = evt.type == "mouseover" ? (evt.relatedTarget || evt.fromElement) : (evt.target || evt.srcElement);
					return fn(el, p)
				}
				function to(fn, p) {
					var evt = arguments.callee.caller.arguments[0] || window.event;
					var el = evt.type == "mouseout" ? (evt.relatedTarget || evt.toElement) : (evt.target || evt.srcElement);
					return fn(el, p)
				}
				function inside(el, p) {
					while (el && el != p) {
						el = el.parentNode
					}
					return !! el
				}
				function outside(el, p) {
					return ! inside(el, p)
				}
				this.fill = function(d, sendbyids, l, returndata) {
					var q = new Array,
					id = "",
					i = 0;
					var timer = setInterval(function() {
						var ww = d[i],
						mkr = markers[i],
						mkrDiv = mkr ? mkr.icon.div: null,
						w = new Object();
						if (i++==31) {
							clearInterval(timer);
							maplet.setAutoZoom()
						}
						if (!ww) {
							if (mkr) {
								mkrDiv.style.visibility = "hidden"
							}
							return
						}
						for (var h in ww) {
							w[h] = ww[h];
							if (h == "comment") {
								w[h] = F.myd(ww[h], true)
							}
							if (h == "star") {
								switch (ww[h]) {
								case 1,
									2 : w[h] = "\u4e94\u661f\u7ea7";
									break;
								case 3,
									4 : w[h] = "\u56db\u661f\u7ea7";
									break;
								case 5,
									6 : w[h] = "\u4e09\u661f\u7ea7";
									break;
								case 7,
									8,
									9,
									10 : w[h] = "\u4e8c\u661f\u7ea7";
									break;
								default:
									w[h] = "\u7ecf\u6d4e\u578b";
									break
								}
							}
						}
						var str1 = ("<dfn>&yen;</dfn>" + w.price + "<span>\u8d77</span>");
						var str2 = F.re('<div class="hotels_name">{$title}</div><div class="bom"><span class="price"><dfn>&yen; {$price}</dfn> \u8d77</span>\u6ee1\u610f\u5ea6 {$comment}% {$star} </div>', w);
						if (mkr) {
							mkr.setPoint(new MPoint(w.location));
							if (mkrDiv == mThis.lastMarker) {
								mout(mkrDiv, str1)
							} else {
								mkrDiv.innerHTML = str1
							}
							mkr.isContLoaded = false;
							mkrDiv.style.visibility = ""
						} else {
							mkr = new MMarker(new MPoint(w.location), new MIcon("../images/bg_price091211.png", 57, 33, 30, 33), new MInfoWindow(null, '<div style="color:#D35714;width:420px;">Loading...</div>'));
							mkr.htl = ww;
							maplet.addOverlay(mkr);
							mkrDiv = mkr.icon.div;
							mkrDiv.innerHTML = str1;
							mkrDiv.className = "map_searchresult_price";
							T.markers.push(mkr)
						} (function(div, mkr, str1, str2, htl) {
							div.onmouseover = function() {
								if (from(outside, this) && to(inside, this) && !maplet.status) {
									if (mThis.lastMarker) {
										mout(mThis.lastMarker, mThis.lastMarker.str)
									}
									mover(div, str2);
									mThis.lastMarker = this;
									mThis.lastMarker.str = str1
								}
							};
							div.onmouseout = function() {
								if (from(inside, this) && to(outside, this) && !maplet.status) {
									mout(div, str1)
								}
							}
						})(mkrDiv, mkr, str1, str2, w)
					},
					10)
				};
				if (!d) {
					return
				}
				var m1 = '<h3 class="searchresult_name" style="width:420px;"><a title="{$name}" target="_blank" href="{$href}">{$name}</a><img width="94" height="18" src="/images/blank.gif" class="star{$star}" /></h3>',
				m2 = '<div style="width:520px" id="hitembox"> <ul class="hotel_grid01 layoutfix"><li style="padding:0" class="hotel_unit first"><a style="background-image: url({$pic});" class="searchresult_abbrpic" href="{$href}" target="_blank" ></a></li><li class="hotel_unit layoutfix"><div class="searchresult_hotel_fav" style="display:none"><span class="map_fav">&nbsp;</span><a href="###">\u52a0\u5165\u6536\u85cf</a></div><div class="searchresult_desc"><p class="searchresult_desc_text">{$content}</p></div></li></ul>{$room_list}<a target="_blank" href="{$href}" title="\u67e5\u770b\u66f4\u591a" style="margin-left:380px;{$show}" >\u66f4\u591a</a></div>';
				var markers = this.markers = [];
				var maparea = $("#Map"),
				ma = maparea.get(0),
				mThis = T = this;
				ma.style.width = "810px";
				ma.style.height = "350px";
				MOUSEWHEEL = false;
				maplet = new Maplet(ma);
				maplet.centerAndZoom(new MPoint(116.37604, 39.91166), 8);
				maplet.addControl(new MStandardControl());
				maplet.showOverview(true, false);
				maplet.clickToCenter = false;
				MEvent.addListener(maplet, "click",
				function(e) {
					maplet.hideBubble()
				});
				this.fill(d)
			},
			ajax: function() {
				var T = this;
				$.getJSON(SERVERURL + "/ajax/A_compare.asp", {
					hid: T.ids
				},
				function(data) {
					data = ZN.F.compare.machining(data);
					var l = data.length,
					s;
					s = F.re(T.temp.replace(/{#BEGIN(.+?)(?:END#})/g,
					function(a, c) {
						var s_ = [];
						for (var i = 0; i < l; i++) {
							s_.push(ZN.F.re(c, data[i]))
						}
						return s_.join("")
					}), {
						colspan: data[0].colspan
					});
					$(T.id).html(s);
					loadPrice(T.ids.replace(/ /g, ""), $("#doBook input[name='tm1']").val(), $("#doBook input[name='tm2']").val());
					T.loadmap(data)
				})
			}
		}
	};
	ZN.WP = {
		d: function(id, $class, css, v) {
			id = id ? ' id="' + id + '"': "";
			css = css ? ' style="' + css + '"': "";
			$class = $class ? ' class="' + $class + '"': "";
			return $("<" + (v ? v: "div") + id + css + $class + "/>")
		},
		c: function(w, h, c, b) {
			return this.d("Wrapper", 0, "position: relative;").css({
				"z-index": 1
			}).append(this.d("Container", 0, "cursor: pointer;height: " + h + "px;overflow: hidden;padding-left:4px;position:absolute;right:-1px;_right: 2px;top:2px;z-index:1;").append(this.d(0, "sinfo", "", "span"), this.d(0, "sicon", "", "span").bind("click",
			function(e) {
				if (c) {
					c.call(this, e, b);
					e.stopPropagation()
				}
			})))
		},
		S: function(d, m, a) {
			if (!a) {
				this.f.value = this.t;
				$(this.f).prev().find("#Container span.sinfo").html(m.length > 2 ? "<font color=red>" + m + "</font>": m)
			} else {
				ZN.WP.A(this.f)
			}
		},
		A: function(f, text) {
			if (!text) {
				text = "\u5982\u679c\u60a8\u9700\u8981\u5728\u9152\u5e97\u5165\u4f4f28\u5929\u4ee5\u4e0a\uff0c\u8bf7\u81f4\u7535\uff1a400-666-5511\uff0c\u6211\u4eec\u4f1a\u7aed\u8bda\u4e3a\u60a8\u670d\u52a1\u3002"
			}
			$(f).addClass("redborder_bg").tip({
				text: text,
				documentClick: true
			})
		}
	};
	ZN.H = function(v) {
		this.list = {
			"\u70ed\u95e8": "0101|\u5317\u4eac;0201|\u4e0a\u6d77;2001|\u5e7f\u5dde;2003|\u6df1\u5733;2301|\u6210\u90fd;1201|\u676d\u5dde;1801|\u6b66\u6c49;2701|\u897f\u5b89;0401|\u91cd\u5e86;1601|\u9752\u5c9b;1901|\u957f\u6c99;1101|\u5357\u4eac;1401|\u53a6\u95e8;2501|\u6606\u660e;0801|\u5927\u8fde;0301|\u5929\u6d25;1701|\u90d1\u5dde;2201|\u4e09\u4e9a;1602|\u6d4e\u5357;1402|\u798f\u5dde;0802|\u6c88\u9633;",
			A: "3301|\u6fb3\u95e8;1240|\u5b89\u5409\uff08\u6e56\u5dde\uff09;1303|\u5b89\u5e86;1716|\u5b89\u9633;0803|\u978d\u5c71;2405|\u5b89\u987a\uff08\u9ec4\u679c\u6811\uff09;2714|\u5b89\u5eb7;3118|\u963f\u52d2\u6cf0;3109|\u963f\u514b\u82cf;2356|\u963f\u575d\u5dde;2419|\u5b89\u9f99\u53bf;1653|\u5b89\u4e18;0719|\u963f\u5c14\u5c71;0716|\u963f\u62c9\u5584;1419|\u5b89\u6eaa\uff08\u6cc9\u5dde\uff09;",
			B: "0101|\u5317\u4eac;0702|\u5305\u5934;2103|\u5317\u6d77;0512|\u4fdd\u5b9a;1305|\u868c\u57e0;1618|\u6ee8\u5dde;2702|\u5b9d\u9e21;0508|\u5317\u6234\u6cb3;0805|\u672c\u6eaa;0710|\u5df4\u5f66\u6dd6\u5c14;2807|\u767d\u94f6;2112|\u767e\u8272;2214|\u4fdd\u4ead;2414|\u6bd5\u8282;1312|\u4eb3\u5dde;0550|\u6cca\u5934;2333|\u5df4\u4e2d;2220|\u535a\u9ccc;0918|\u767d\u5c71\u5e02;0920|\u767d\u57ce\u5e02;3116|\u535a\u5c14\u5854\u62c9;3117|\u535a\u4e50;2120|\u5df4\u9a6c;2351|\u5317\u5ddd\u53bf;1650|\u535a\u5174;0523|\u9738\u5dde;1165|\u6ee8\u6d77\u53bf\uff08\u76d0\u57ce\uff09;",
			C: "2301|\u6210\u90fd;0401|\u91cd\u5e86;1901|\u957f\u6c99;0901|\u957f\u6625;1103|\u5e38\u5dde;1117|\u5e38\u719f;0502|\u627f\u5fb7;1910|\u5e38\u5fb7;1231|\u6148\u6eaa;1907|\u90f4\u5dde;2049|\u4ece\u5316\uff08\u5e7f\u5dde\uff09;2016|\u6f6e\u5dde;0617|\u957f\u6cbb;0914|\u957f\u767d\u5c71;2518|\u695a\u96c4;0516|\u6ca7\u5dde;1318|\u6ec1\u5dde;1320|\u6c60\u5dde;0707|\u8d64\u5cf0;1821|\u8d64\u58c1\uff08\u54b8\u5b81\uff09;1283|\u82cd\u5357;1298|\u957f\u5174;1279|\u5e38\u5c71;0816|\u671d\u9633;1308|\u5de2\u6e56;1420|\u957f\u4e50;1633|\u957f\u5c9b\u53bf;0911|\u73f2\u6625;0829|\u957f\u5174\u5c9b;0907|\u957f\u767d\u5c71\u6c60\u5317;3115|\u660c\u5409;2355|\u5d07\u5dde;1668|\u660c\u4e50;1667|\u830c\u5e73;2606|\u660c\u90fd;1424|\u957f\u6c40\uff08\u9f99\u5ca9\uff09;0552|\u5d07\u793c\u53bf;0536|\u660c\u9ece\u9ec4\u91d1\u6d77\u5cb8;",
			D: "0801|\u5927\u8fde;2007|\u4e1c\u839e;2505|\u5927\u7406;0602|\u5927\u540c;2307|\u90fd\u6c5f\u5830\uff08\u6210\u90fd\uff09;2803|\u6566\u714c;0806|\u4e39\u4e1c;1612|\u5fb7\u5dde;2312|\u5fb7\u9633;1242|\u5fb7\u6e05;1607|\u4e1c\u8425;1004|\u5927\u5e86;1243|\u4e1c\u9633;1719|\u767b\u5c01;2408|\u90fd\u5300\u5e02\uff08\u9ed4\u5357\u5dde\uff09;2127|\u4e1c\u5174\uff08\u9632\u57ce\u6e2f\uff09;2340|\u8fbe\u5dde;1129|\u4e39\u9633;0822|\u5927\u77f3\u6865;1136|\u4e1c\u53f0;0825|\u4e1c\u6e2f;1148|\u4e1c\u6d77\uff08\u8fde\u4e91\u6e2f\uff09;1433|\u5fb7\u5316\uff08\u6cc9\u5dde\uff09;2519|\u5fb7\u94a6;1418|\u4e1c\u5c71\uff08\u6f33\u5dde\uff09;2114|\u5927\u65b0\uff08\u51ed\u7965\uff09;2337|\u6cf8\u5b9a\u53bf\uff08\u7518\u5b5c\u5dde\uff09;1819|\u5927\u51b6\uff08\u9ec4\u77f3\uff09;1150|\u5927\u4e30\uff08\u76d0\u57ce\uff09;0408|\u5927\u8db3\uff08\u91cd\u5e86\uff09;0556|\u5b9a\u5dde;3004|\u5fb7\u4ee4\u54c8;1670|\u4e1c\u5e73;1816|\u4e39\u6c5f\u53e3;3203|\u8fea\u58eb\u5c3c;1522|\u5fb7\u5174;1647|\u4e1c\u660e;2330|\u7a3b\u57ce\uff08\u7518\u5b5c\u5dde\uff09;2215|\u5b9a\u5b89;2121|\u5fb7\u4fdd\u53bf;",
			E: "2310|\u5ce8\u7709\u5c71\uff08\u4e50\u5c71\uff09;0705|\u9102\u5c14\u591a\u65af;0726|\u989d\u5c14\u53e4\u7eb3\uff08\u547c\u4f26\u8d1d\u5c14\uff09;1811|\u6069\u65bd;2050|\u6069\u5e73;1818|\u9102\u5dde;",
			F: "2005|\u4f5b\u5c71;1402|\u798f\u5dde;1915|\u51e4\u51f0\uff08\u6e58\u897f\uff09;1215|\u5949\u5316;1248|\u5bcc\u9633;1307|\u961c\u9633\uff08\u5b89\u5fbd\uff09;2113|\u9632\u57ce\u6e2f;1271|\u5efa\u5fb7;1412|\u798f\u9f0e;1422|\u798f\u6e05;0804|\u629a\u987a;0403|\u4e30\u90fd\uff08\u91cd\u5e86\uff09;0823|\u961c\u65b0;0916|\u6276\u4f59;2115|\u51e4\u5c71\u53bf;2716|\u6276\u98ce\u53bf;1645|\u80a5\u57ce;1515|\u629a\u5dde;0824|\u51e4\u57ce;0826|\u6cd5\u5e93;1167|\u4e30\u53bf\uff08\u5f90\u5dde\uff09;2725|\u5bcc\u5e73;",
			G: "2001|\u5e7f\u5dde;2101|\u6842\u6797;2401|\u8d35\u9633;1516|\u8d63\u5dde;2320|\u5e7f\u5143;2313|\u5e7f\u5b89;1144|\u9ad8\u90ae;1644|\u9ad8\u5bc6;2128|\u6842\u5e73\uff08\u8d35\u6e2f\uff09;3003|\u683c\u5c14\u6728;1171|\u8d63\u6986\uff08\u8fde\u4e91\u6e2f\uff09;0725|\u6839\u6cb3\uff08\u547c\u4f26\u8d1d\u5c14\uff09;2111|\u8d35\u6e2f;0626|\u9ad8\u5e73;0528|\u9ad8\u7891\u5e97;1324|\u5e7f\u5fb7;1641|\u5e7f\u9976;1170|\u704c\u4e91\uff08\u8fde\u4e91\u6e2f\uff09;2905|\u56fa\u539f;3006|\u8d35\u5fb7;1731|\u5de9\u4e49;2812|\u7518\u5357;",
			H: "1201|\u676d\u5dde;1001|\u54c8\u5c14\u6ee8;1301|\u5408\u80a5;2202|\u6d77\u53e3;1302|\u9ec4\u5c71;0701|\u547c\u548c\u6d69\u7279;2010|\u60e0\u5dde;1123|\u6dee\u5b89;1234|\u6d77\u5b81;0712|\u547c\u4f26\u8d1d\u5c14;1918|\u8861\u9633;1239|\u6e56\u5dde;0515|\u90af\u90f8;2026|\u6cb3\u6e90;1616|\u83cf\u6cfd;1288|\u6a2a\u5e97;1306|\u6dee\u5357;1921|\u6000\u5316;2707|\u6c49\u4e2d;1166|\u6d2a\u6cfd\u53bf\uff08\u6dee\u5b89\uff09;0514|\u8861\u6c34;0820|\u846b\u82a6\u5c9b;1014|\u9ed1\u6cb3;1330|\u5b8f\u6751\uff08\u9ec4\u5c71\uff09;1241|\u6d77\u76d0;1152|\u6d77\u95e8\uff08\u5357\u901a\uff09;1814|\u9ec4\u77f3;1830|\u9ec4\u5188;1651|\u6d77\u9633;2710|\u534e\u5c71;2029|\u9e64\u5c71;2107|\u8d3a\u5dde;2328|\u6d77\u87ba\u6c9f\uff08\u7518\u5b5c\u5dde\uff09;1427|\u60e0\u5b89\uff08\u6cc9\u5dde\uff09;1009|\u9e64\u5c97;0812|\u6d77\u57ce;0625|\u970d\u5dde;0555|\u9ec4\u9a85;1322|\u6dee\u5317;2517|\u7ea2\u6cb3\u5dde;1712|\u9e64\u58c1;1833|\u6d2a\u6e56;2706|\u97e9\u57ce;2119|\u6cb3\u6c60;0623|\u6d51\u6e90;0721|\u676d\u9526\u540e\u65d7;3007|\u6e5f\u4e2d;3113|\u54c8\u5bc6;0560|\u6cb3\u95f4;0627|\u6000\u4ec1;3120|\u547c\u56fe\u58c1\u53bf;3121|\u548c\u7530;1338|\u970d\u5c71\uff08\u516d\u5b89\uff09;",
			J: "1602|\u6d4e\u5357;1209|\u5609\u5174;1204|\u91d1\u534e;1502|\u4e5d\u6c5f;0902|\u5409\u6797;1113|\u6c5f\u9634;1507|\u666f\u5fb7\u9547;1511|\u4e95\u5188\u5c71;2021|\u6c5f\u95e8;1309|\u4e5d\u534e\u5c71;2802|\u5609\u5cea\u5173;1802|\u8346\u5dde;1710|\u7126\u4f5c;1619|\u6d4e\u5b81;2311|\u4e5d\u5be8\u6c9f;1413|\u664b\u6c5f;1277|\u5609\u5584;0810|\u9526\u5dde;0609|\u664b\u57ce;1118|\u6c5f\u90fd;1503|\u5409\u5b89;2806|\u9152\u6cc9;1625|\u5373\u58a8;1632|\u80f6\u5357;1810|\u8346\u95e8;1130|\u91d1\u575b\uff08\u5e38\u5dde\uff09;1012|\u4f73\u6728\u65af;1137|\u9756\u6c5f;1631|\u80f6\u5dde;1927|\u5409\u9996\uff08\u6e58\u897f\uff09;2006|\u63ed\u9633;2329|\u6c5f\u6cb9\uff08\u7ef5\u9633\uff09;1141|\u59dc\u5830;0415|\u6c5f\u6d25\uff08\u91cd\u5e86\uff09;0607|\u664b\u4e2d;1709|\u6d4e\u6e90;1835|\u5609\u9c7c\uff08\u54b8\u5b81\uff09;0620|\u4ecb\u4f11;1160|\u91d1\u6e56\uff08\u6dee\u5b89\uff09;1267|\u7f19\u4e91;1262|\u6c5f\u5c71;1143|\u53e5\u5bb9;1431|\u5c06\u4e50\uff08\u4e09\u660e\uff09;1299|\u666f\u5b81;1015|\u9e21\u897f;1018|\u52a0\u683c\u8fbe\u5947;1664|\u6d4e\u9633\u53bf;2715|\u9756\u8fb9\u53bf;2352|\u7b80\u9633;1673|\u91d1\u4e61;2810|\u91d1\u660c;0414|\u7da6\u6c5f\uff08\u91cd\u5e86\uff09;",
			K: "2501|\u6606\u660e;1127|\u6606\u5c71;1703|\u5f00\u5c01;2404|\u51ef\u91cc\uff08\u9ed4\u4e1c\u5357\uff09;2048|\u5f00\u5e73;3104|\u5e93\u5c14\u52d2;3111|\u5580\u4ec0;2336|\u5eb7\u5b9a\uff08\u7518\u5b5c\u5dde\uff09;3102|\u514b\u62c9\u739b\u4f9d;1286|\u5f00\u5316;0546|\u5bbd\u57ce;1642|\u57a6\u5229;3112|\u594e\u5c6f;",
			L: "2531|\u4e3d\u6c5f\uff08\u542b\u675f\u6cb3\uff09;1702|\u6d1b\u9633;2801|\u5170\u5dde;1110|\u8fde\u4e91\u6e2f;2601|\u62c9\u8428;2303|\u4e50\u5c71;1611|\u4e34\u6c82;2105|\u67f3\u5dde;1506|\u5e90\u5c71;1230|\u4e3d\u6c34;2411|\u8354\u6ce2\uff08\u9ed4\u5357\u5dde\uff09;1622|\u804a\u57ce;1213|\u4e34\u5b89;0511|\u5eca\u574a;1634|\u83b1\u829c;2314|\u6cf8\u5dde;1226|\u4e34\u6d77;1319|\u516d\u5b89;2125|\u9f99\u80dc\uff08\u6842\u6797\uff09;1409|\u9f99\u5ca9;0603|\u4e34\u6c7e;1259|\u4e50\u6e05;1928|\u5a04\u5e95;1717|\u6f2f\u6cb3;1640|\u9f99\u53e3;2317|\u9606\u4e2d\uff08\u5357\u5145\uff09;2603|\u6797\u829d;2524|\u6cf8\u6cbd\u6e56;1260|\u9f99\u6cc9;2724|\u4e34\u6f7c;2207|\u9675\u6c34;1637|\u83b1\u9633;1652|\u83b1\u5dde;1922|\u8012\u9633\uff08\u8861\u9633\uff09;1919|\u6d4f\u9633\uff08\u957f\u6c99\uff09;0619|\u5415\u6881;0818|\u8fbd\u9633;1839|\u5229\u5ddd\uff08\u6069\u65bd\uff09;0827|\u65c5\u987a;2906|\u7075\u6b66;0615|\u7075\u77f3;1280|\u9f99\u6e38;1415|\u8fde\u57ce\uff08\u9f99\u5ca9\uff09;1214|\u5170\u6eaa;1626|\u83b1\u897f;2412|\u516d\u76d8\u6c34;2511|\u4e34\u6ca7;2118|\u6765\u5bbe;1925|\u51b7\u6c34\uff08\u5a04\u5e95\uff09;1726|\u683e\u5ddd;1728|\u6797\u5dde;1158|\u6d9f\u6c34\uff08\u6dee\u5b89\uff09;1417|\u9f99\u6d77;1430|\u8fde\u6c5f\uff08\u798f\u5dde\uff09;0913|\u8fbd\u6e90;1838|\u7f57\u7530\uff08\u9ec4\u5188\uff09;1711|\u7075\u5b9d;",
			M: "2302|\u7ef5\u9633;0709|\u6ee1\u6d32\u91cc;1311|\u9a6c\u978d\u5c71;1002|\u7261\u4e39\u6c5f;2028|\u6885\u5dde;2009|\u8302\u540d;2304|\u7709\u5c71;1837|\u9ebb\u57ce\uff08\u9ec4\u5188\uff09;1016|\u6f20\u6cb3;1013|\u5bc6\u5c71;2521|\u8292\u5e02\uff08\u5fb7\u5b8f\u5dde\uff09;2334|\u9a6c\u5c14\u5eb7\uff08\u963f\u575d\u5dde\uff09;2711|\u7c73\u8102\u53bf;",
			N: "1101|\u5357\u4eac;1202|\u5b81\u6ce2;2102|\u5357\u5b81;1501|\u5357\u660c;1107|\u5357\u901a;1252|\u5b81\u6d77;2319|\u5185\u6c5f;2309|\u5357\u5145;1707|\u5357\u9633;1139|\u5357\u901a\u6d77\u5b89;1297|\u5357\u6d54\uff08\u6e56\u5dde\uff09;1414|\u5b81\u5fb7;1323|\u5b81\u56fd;0504|\u5357\u6234\u6cb3;0717|\u5b81\u57ce;1526|\u5357\u5eb7\u5e02;2527|\u6012\u6c5f;1531|\u5357\u57ce\u53bf;1674|\u5b81\u9633;",
			P: "0608|\u5e73\u9065;2321|\u6500\u679d\u82b1;1406|\u8386\u7530;1706|\u6fee\u9633;1613|\u84ec\u83b1;1268|\u5e73\u6e56;0809|\u76d8\u9526;1149|\u90b3\u53bf\uff08\u5f90\u5dde\uff09;1512|\u840d\u4e61;1705|\u5e73\u9876\u5c71;2339|\u5f6d\u5dde\uff08\u6210\u90fd\uff09;1287|\u5e73\u9633;1274|\u6d66\u6c5f;2529|\u666e\u6d31;0404|\u6daa\u9675\uff08\u91cd\u5e86\uff09;0416|\u5f6d\u6c34\uff08\u91cd\u5e86\uff09;0830|\u666e\u5170\u5e97;1438|\u5e73\u6f6d\uff08\u798f\u5dde\uff09;1291|\u78d0\u5b89;2809|\u5e73\u51c9;1638|\u5e73\u9091;1643|\u5e73\u5ea6;1666|\u5e73\u539f\u53bf;",
			Q: "1601|\u9752\u5c9b;0503|\u79e6\u7687\u5c9b;1233|\u5343\u5c9b\u6e56;1403|\u6cc9\u5dde;1610|\u66f2\u961c;2027|\u6e05\u8fdc;2206|\u743c\u6d77;1235|\u8862\u5dde;1005|\u9f50\u9f50\u54c8\u5c14;1125|\u542f\u4e1c;2109|\u94a6\u5dde;2522|\u66f2\u9756;1639|\u9752\u5dde;0526|\u8fc1\u5b89;1223|\u9752\u7530;0417|\u9ed4\u6c5f\uff08\u91cd\u5e86\uff09;3002|\u9752\u6d77\u6e56;2813|\u5e86\u9633;1654|\u6816\u971e;1829|\u6f5c\u6c5f;",
			R: "1615|\u65e5\u7167;1237|\u745e\u5b89;0517|\u4efb\u4e18;1128|\u5982\u4e1c;1636|\u8363\u6210;2520|\u745e\u4e3d;2604|\u65e5\u5580\u5219;0412|\u8363\u660c\uff08\u91cd\u5e86\uff09;2354|\u82e5\u5c14\u76d6;1146|\u5982\u768b;1661|\u4e73\u5c71;1727|\u6c5d\u5dde;",
			S: "0201|\u4e0a\u6d77;2003|\u6df1\u5733;2201|\u4e09\u4e9a;1102|\u82cf\u5dde;0802|\u6c88\u9633;0501|\u77f3\u5bb6\u5e84;1205|\u7ecd\u5174;2002|\u6c55\u5934;2030|\u97f6\u5173;1405|\u77f3\u72ee;1508|\u4e0a\u9976\u5e02;2040|\u6c55\u5c3e;1131|\u5bbf\u8fc1;1246|\u4e0a\u865e;2315|\u9042\u5b81;1807|\u5341\u5830;2353|\u8700\u5357\u7af9\u6d77;1823|\u968f\u5dde;0534|\u5c71\u6d77\u5173;0910|\u677e\u539f;1272|\u9042\u660c;1620|\u5bff\u5149;1523|\u4e09\u6e05\u5c71;1924|\u90b5\u9633;1236|\u5d4a\u5dde;0618|\u6714\u5dde;1916|\u97f6\u5c71\uff08\u6e58\u6f6d\uff09;1708|\u4e09\u95e8\u5ce1;2902|\u77f3\u5634\u5c71;1258|\u4e09\u95e8;1721|\u5546\u4e18;1006|\u7ee5\u82ac\u6cb3;1010|\u7ee5\u5316;1157|\u6cd7\u6d2a;1423|\u90b5\u6b66\uff08\u5357\u5e73\uff09;1314|\u5bbf\u5dde;1300|\u677e\u9633;1425|\u6c99\u53bf\uff08\u4e09\u660e\uff09;1426|\u4e0a\u676d\uff08\u9f99\u5ca9\uff09;1410|\u4e09\u660e;1163|\u6ea7\u6c34\u53bf\uff08\u5357\u4eac\uff09;1138|\u6cd7\u9633;1020|\u53cc\u9e2d\u5c71;0549|\u8083\u5b81;0533|\u4e09\u6cb3\u5e02;1813|\u795e\u519c\u67b6;2607|\u5c71\u5357;2712|\u5546\u6d1b;2045|\u987a\u5fb7;1334|\u8212\u57ce\uff08\u516d\u5b89\uff09;1008|\u5c1a\u5fd7;0919|\u56db\u5e73;1732|\u5043\u5e08;",
			T: "0301|\u5929\u6d25;0601|\u592a\u539f;1614|\u6cf0\u5b89;0506|\u5510\u5c71;1224|\u53f0\u5dde;1115|\u6cf0\u5dde;1120|\u592a\u4ed3;1263|\u6850\u4e61;2512|\u817e\u51b2;2805|\u5929\u6c34;1247|\u6850\u5e90;1315|\u94dc\u9675;2037|\u53f0\u5c71;1121|\u540c\u91cc\uff08\u82cf\u5dde\uff09;0903|\u901a\u5316;0706|\u901a\u8fbd;1124|\u6cf0\u5174;1313|\u5929\u67f1\u5c71;1284|\u6cf0\u987a;1227|\u5929\u53f0;1153|\u901a\u5dde\uff08\u5357\u901a\uff09;2713|\u94dc\u5ddd;2413|\u94dc\u4ec1;3108|\u5410\u9c81\u756a;1155|\u94dc\u5c71;1665|\u6ed5\u5dde;1333|\u5929\u957f\uff08\u6ec1\u5dde\uff09;0813|\u94c1\u5cad;0547|\u5510\u53bf;1325|\u6850\u57ce;1429|\u6cf0\u5b81\uff08\u4e09\u660e\uff09;0413|\u94dc\u6881\uff08\u91cd\u5e86\uff09;1840|\u5929\u95e8;3114|\u5854\u4ec0\u5e93\u5c14\u5e72;",
			W: "1801|\u6b66\u6c49;1105|\u65e0\u9521;3101|\u4e4c\u9c81\u6728\u9f50;1203|\u6e29\u5dde;1605|\u5a01\u6d77;1304|\u829c\u6e56;1293|\u4e4c\u9547\uff08\u6850\u4e61\uff09;1114|\u5434\u6c5f\uff08\u82cf\u5dde\uff09;1404|\u6b66\u5937\u5c71;1603|\u6f4d\u574a;1520|\u5a7a\u6e90;1264|\u6b66\u4e49;0402|\u4e07\u5dde\uff08\u91cd\u5e86\uff09;2203|\u4e07\u5b81;2108|\u68a7\u5dde;0714|\u4e4c\u6d77;1629|\u6587\u767b;1831|\u6b66\u5f53\u5c71\uff08\u5341\u5830\uff09;0406|\u6b66\u9686\uff08\u91cd\u5e86\uff09;1238|\u6e29\u5cad;2212|\u6587\u660c;2903|\u5434\u5fe0;0604|\u4e94\u53f0\u5c71;2708|\u6e2d\u5357;0828|\u74e6\u623f\u5e97;0713|\u4e4c\u5170\u5bdf\u5e03;0532|\u6b66\u5b89\u5e02;2213|\u4e94\u6307\u5c71;2808|\u6b66\u5a01;2718|\u5434\u8d77\u53bf;2513|\u6587\u5c71;1646|\u4e94\u83b2;0621|\u95fb\u559c;0553|\u851a\u53bf;1432|\u6b66\u5e73\uff08\u9f99\u5ca9\uff09;0421|\u4e07\u76db\uff08\u91cd\u5e86\uff09;1337|\u6da1\u9633\uff08\u4eb3\u5dde\uff09;1836|\u6b66\u7a74\uff08\u9ec4\u5188\uff09;1669|\u65e0\u68e3;",
			X: "2701|\u897f\u5b89;1401|\u53a6\u95e8;3201|\u9999\u6e2f;1106|\u5f90\u5dde;3001|\u897f\u5b81;2507|\u897f\u53cc\u7248\u7eb3;1834|\u8944\u9633;2318|\u897f\u660c\uff08\u51c9\u5c71\u5dde\uff09;1270|\u897f\u5858\uff08\u5609\u5584\uff09;1253|\u8c61\u5c71;2506|\u9999\u683c\u91cc\u62c9\uff08\u8fea\u5e86\u5dde\uff09;1906|\u6e58\u6f6d;2703|\u54b8\u9633;1820|\u54b8\u5b81;1704|\u65b0\u4e61;1251|\u65b0\u660c;0704|\u9521\u6797\u6d69\u7279;1514|\u65b0\u4f59;1713|\u8bb8\u660c;2403|\u5174\u4e49\uff08\u9ed4\u897f\u5357\u5dde\uff09;1822|\u5b5d\u611f;1156|\u76f1\u7719;1250|\u4ed9\u5c45\uff08\u53f0\u5dde\uff09;0505|\u90a2\u53f0;2350|\u897f\u5cad\u96ea\u5c71;2211|\u5174\u9686;2124|\u5174\u5b89\uff08\u6842\u6797\uff09;1720|\u4fe1\u9633;1134|\u65b0\u6c82;1328|\u5ba3\u57ce;1332|\u897f\u9012\uff08\u9ec4\u5c71\uff09;1154|\u5174\u5316;0807|\u5174\u57ce;1722|\u8365\u9633;1815|\u4ed9\u6843;1724|\u65b0\u5bc6;0420|\u79c0\u5c71\uff08\u91cd\u5e86\uff09;1435|\u971e\u6d66\uff08\u5b81\u5fb7\uff09;0629|\u5b5d\u4e49;2528|\u6cf8\u897f;1675|\u65b0\u6cf0;2721|\u5174\u5e73;1723|\u65b0\u90d1;1649|\u590f\u6d25;0606|\u5ffb\u5dde;1164|\u54cd\u6c34\u53bf\uff08\u76d0\u57ce\uff09;",
			Y: "2901|\u94f6\u5ddd;1104|\u626c\u5dde;1604|\u70df\u53f0;2106|\u9633\u6714\uff08\u6842\u6797\uff09;1207|\u4e49\u4e4c;1803|\u5b9c\u660c;1122|\u6ea7\u9633\u5929\u76ee\u6e56\uff08\u5e38\u5dde\uff09;1116|\u76d0\u57ce;0815|\u8425\u53e3;2705|\u5ef6\u5b89;1904|\u5cb3\u9633;1109|\u5b9c\u5174;0605|\u8fd0\u57ce;2306|\u96c5\u5b89;2308|\u5b9c\u5bbe;2020|\u9633\u6c5f;2709|\u6986\u6797;0904|\u5ef6\u5409;2104|\u7389\u6797;1206|\u6c38\u5eb7;1509|\u5b9c\u6625;1517|\u9e70\u6f6d;1920|\u76ca\u9633;2041|\u4e91\u6d6e;2523|\u7389\u6eaa;1275|\u4f59\u59da;1003|\u4e9a\u5e03\u529b;1119|\u4eea\u5f81;1266|\u96c1\u8361\u5c71;0611|\u9633\u6cc9;3106|\u4f0a\u5b81;1437|\u6c38\u5b9a\uff08\u9f99\u5ca9\uff09;0410|\u6c38\u5ddd\uff08\u91cd\u5e86\uff09;1524|\u7389\u5c71\u53bf;1660|\u6c82\u6c34;1655|\u5156\u5dde;1657|\u6c82\u6e90\u53bf;1658|\u6c82\u5357;1527|\u6c38\u4fee\u53bf;1923|\u6c38\u5dde;1729|\u79b9\u5dde;2704|\u6768\u51cc;0548|\u76d0\u5c71;0613|\u9633\u57ce;0616|\u6c38\u6d4e;1428|\u6c38\u5b89\uff08\u4e09\u660e\uff09;1208|\u7389\u73af;1168|\u6cad\u9633\uff08\u5bbf\u8fc1\uff09;1832|\u5e94\u57ce;2123|\u5b9c\u5dde\uff08\u6cb3\u6c60\uff09;1228|\u4e91\u548c;0905|\u5ef6\u8fb9;0419|\u9149\u9633\uff08\u91cd\u5e86\uff09;1276|\u6c38\u5609;0624|\u53f3\u7389;0537|\u7389\u6cc9\u5c71;1019|\u4f0a\u6625;1730|\u6c38\u57ce;1659|\u90d3\u57ce;",
			Z: "1701|\u90d1\u5dde;2004|\u73e0\u6d77;1245|\u821f\u5c71;2011|\u4e2d\u5c71;1606|\u6dc4\u535a;1903|\u5f20\u5bb6\u754c;2013|\u8087\u5e86;2014|\u6e5b\u6c5f;2402|\u9075\u4e49;1111|\u5f20\u5bb6\u6e2f;1108|\u9547\u6c5f;1902|\u682a\u6d32;1126|\u5468\u5e84\uff08\u82cf\u5dde\u6606\u5c71\uff09;0513|\u5f20\u5bb6\u53e3;1212|\u8bf8\u66a8\uff08\u7ecd\u5174\uff09;1408|\u6f33\u5dde;1648|\u8bf8\u57ce;2904|\u4e2d\u536b;1627|\u7ae0\u4e18;1608|\u67a3\u5e84;2415|\u9547\u8fdc\uff08\u9ed4\u4e1c\u5357\u5dde\uff09;2305|\u81ea\u8d21;2216|\u510b\u5dde;2126|\u8d44\u6e90\uff08\u6842\u6797\uff09;1672|\u90b9\u57ce;1718|\u9a7b\u9a6c\u5e97;0540|\u9075\u5316;1112|\u9547\u6c5f\u626c\u4e2d;0622|\u5de6\u6743;1714|\u5468\u53e3;1826|\u949f\u7965\uff08\u8346\u95e8\uff09;1656|\u62db\u8fdc;2346|\u8d44\u9633;2804|\u5f20\u6396;2530|\u662d\u901a;"
		};
		this.pool = ["\u70ed\u95e8", ["A", "B"], ["C", "D"], ["E", "F", "G"], ["H", "I"], ["J", "K"], ["L", "M"], ["N", "O", "P", "Q"], ["R", "S"], ["T", "U", "V"], ["W", "X"], "Y", "Z"];
		this._INDEX = "\u5317\u4eac";
		this.cityTemp = {
			w: '<div class="address_hot"><div class="address_hotcity">{$toptip}</div><div class="address_hotlist"><ol class="address_hot_abb">{$text2}</ol>{$text}</div></div>',
			a: "<li><span{$classh}>{$text}</span></li>",
			c: '<ul t="{$t}"{$display} class="address_hot_adress layoutfix">{$text}</ul>',
			l: '<li><a href="###" data-d="{$data}">{$text}</a></li>'
		};
		this.o = {
			focus: false,
			input: "#city",
			wrapper: "#cityselect_p",
			toptip: "<strong>\u70ed\u95e8\u57ce\u5e02</strong> \uff08\u53ef\u76f4\u63a5\u8f93\u5165\u57ce\u5e02\u6216\u57ce\u5e02\u62fc\u97f3\uff09",
			mousedown: null,
			boxid: "cityselect",
			self: false,
			offsets: {
				left: "0",
				top: "21"
			}
		};
		$.extend(this.o, v)
	};
	ZN.H.prototype.init = function(o, x, y) {
		var T = this;
		T.o.focus && $(T.o.input).focus();
		this.e = function() {
			$(T.o.input).focus();
			if ($(T.o.wrapper).length) {
				$(T.o.wrapper).show()
			} else {
				try {
					Tips({
						_boxID: T.o.boxid,
						_triggerID: T.o.input,
						_showTitle: false,
						_closeID: "colseTipsLayer",
						_showBoxbg: false,
						_content: 'text:<em class="colseBtn" id="colseTipsLayer"></em>' + T.create(),
						_offsets: T.o.offsets,
						_mousedown: true,
						_mousedown: T.o.mousedown
					})
				} catch(e) {
					alert(e)
				}
			}
		};
		if (T.o.self) {
			$(T.o.input).bind("click",
			function(e) {
				$("#cityajaxselect").hide();
				T.e.call(this)
			});
			if (T.o.showicon) {
				var s = WP.c(x, y, this.e);
				$(o).before(s)
			}
		} else {
			var s = WP.c(x, y, this.e);
			$(o).before(s);
			$("#cityajaxselect").hide();
			return o
		}
	};
	ZN.H.prototype.create = function() {
		var n = [],
		v = [],
		h,
		w,
		q = this;
		for (var i = 0; i < q.pool.length; i++) {
			var s = [];
			if (typeof q.pool[i] == "object") {
				var n_t = [];
				for (var j = 0; j < q.pool[i].length; j++) {
					h = q.pool[i][j];
					if (q.list[h]) {
						s = q.list[h].replace(/([^;]*)\|([^;]*);/g,
						function(E, A, G) {
							G = G.replace(/\uff08.*\uff09/g, "");
							return ZN.F.re(q.cityTemp.l, {
								data: [A, G].join("|"),
								text: G
							})
						});
						n_t.push("<h4>" + h + "</h4>" + s)
					}
				}
				n.push(ZN.F.re(q.cityTemp.c, {
					text: n_t.join(""),
					t: q.pool[i].join(""),
					display: h == "\u70ed\u95e8" ? "": " style='display:none'"
				}));
				v.push(ZN.F.re(q.cityTemp.a, {
					text: q.pool[i].join(""),
					classh: h == "\u70ed\u95e8" ? ' style="width:44px;" class="hot_selected"': ""
				}))
			} else {
				h = q.pool[i];
				if (q.list[h]) {
					s = q.list[h].replace(/([^;]*)\|([^;]*);/g,
					function(E, A, G) {
						G = G.replace(/\uff08.*\uff09/g, "");
						return ZN.F.re(q.cityTemp.l, {
							data: [A, G].join("|"),
							text: G
						})
					})
				}
				n.push(ZN.F.re(q.cityTemp.c, {
					text: h == "\u70ed\u95e8" ? s: "<h4>" + h + "</h4>" + s,
					t: h,
					display: h == "\u70ed\u95e8" ? "": " style='display:none'"
				}));
				v.push(ZN.F.re(q.cityTemp.a, {
					text: h,
					classh: h == "\u70ed\u95e8" ? ' style="width:44px;" class="hot_selected"': ""
				}))
			}
		}
		w = ZN.F.re(ZN.F.re(q.cityTemp.w, {
			text: n.join(""),
			text2: v.join("")
		}), {
			toptip: q.o.toptip
		});
		return w
	};
	ZN.A = {
		init: function(o) {
			ZN.A.o = {
				cityid: "#cityId",
				city: "#city"
			};
			if (typeof o == "object") {
				ZN.A.o = $.extend(ZN.A.o, o)
			} else {
				ZN.A.o.city = o
			}
			var B = 0;
			$(ZN.A.o.city).blur(function() {
				if (!ZN.A.choose) {
					$(ZN.A.o.city).val(ZN.A.city_default_text)
				}
				try {
					Tips.removeBox(1, "#cityajaxselect");
					Tips.removeBox(1, "#cityselect")
				} catch(e) {}
				clearInterval(Q);
				Q = null
			}).focus(function() {
				var c = $(ZN.A.o.city);
				c.select();
				ZN.A.U = $.trim(c.val());
				Q = setInterval(ZN.A.X, 500)
			}).keydown(function(n) {
				var r = 0,
				d, h = n ? n.keyCode: event.charCode,
				s = "|" + h + "|",
				a = ZN.A.l && ZN.A.l.find("a");
				d = null;
				if (a) {
					a.each(function(e) {
						if ($(this).attr("class") == "address_selected") {
							B = e;
							d = $(this).data("d").split("|");
							return
						}
					})
				}
				if ("|13|".indexOf(s) != -1) {
					if (d) {
						ZN.A.choose = true;
						$(ZN.A.o.cityid).val(d[0]);
						$(ZN.A.o.city).val(d[1]);
						try {
							pointsearch({
								cityid: d[0],
								cityname: d[1]
							})
						} catch(e) {}
						ZN.A.U = d[1]
					}
					Tips.removeBox(1, "#cityajaxselect");
					$(o).blur();
					n.stopPropagation()
				}
				if ("|33|37|188|219|".indexOf(s) != -1) {
					r = -1
				}
				if ("|34|39|61|190|221|".indexOf(s) != -1) {
					r = 1
				}
				if ("|38|40|".indexOf(s) != -1) {
					r = ( - 39 + h)
				}
				if (r != 0) {
					a[B].className = "";
					B += r;
					B %= a.length;
					B = (B < 0) ? 0 : B;
					a[B].className = "address_selected";
					n.stopPropagation()
				}
			});
			return o
		},
		city_default_text: "\u4e2d\u6587/\u62fc\u97f3",
		choose: true,
		Q: null,
		U: "",
		T: '<div id="tuna_address" style="display:none;z-index:120;overflow:hidden;-webkit-box-shadow:2px 2px 5px #333;"><div id="address_warp"><div id="address_message">&nbsp;</div><div id="address_list"><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a><a class="a1" href="###"><span>&nbsp;</span>&nbsp;</a></div><div class="address_pagebreak" id="address_p"><a id="address_arrowl" href="javascript:;" name="p">&lt;-</a><a id="address_p1" href="javascript:;" name="1" class="address_current">1</a><a id="address_p2" href="javascript:;" name="2">2</a><a id="address_p3" href="javascript:;" name="3">3</a><a id="address_p4" href="javascript:;" name="4">4</a><a id="address_p5" href="javascript:;" name="5">5</a><a id="address_arrowr" href="javascript:;" name="n">-&gt;</a></div></div></div>',
		ajax: function(v) {
			if (!$("#cityajaxselect").length) {
				Tips({
					_boxID: "cityajaxselect",
					_triggerID: ZN.A.o.city,
					_showTitle: false,
					_closeID: "colseTipsLayer",
					_showBoxbg: false,
					_content: 'text:<em class="colseBtn" id="colseTipsLayer"></em>' + ZN.A.T,
					_offsets: {
						left: "0",
						top: "21"
					},
					_mousedown: true,
					_mousedown: function() {
						var o = this.init.arguments[0];
						$("#" + o._boxID).mousedown(function(e) {
							var $e = $(e.target),
							d;
							if ($e.is("a") || $e.is("span")) {
								if ($e.is("span")) {
									d = $e.parent().data("d").split("|")
								} else {
									d = $e.data("d").split("|")
								}
								$(ZN.A.o.cityid).val(d[0]);
								$(o._triggerID).val(d[1]);
								try {
									pointsearch({
										cityid: d[0],
										cityname: d[1]
									})
								} catch(e) {}
								ZN.A.U = d[1];
								ZN.A.choose = true;
								Tips.removeBox(1, "#cityajaxselect")
							} else {
								if (!$e.is("em")) {
									e.stopPropagation();
									if ($.browser.msie) {
										$(this).html($(this).html() + "")
									}
									return false
								}
							}
						})
					}
				})
			}
			$.ajax({
				type: "GET",
				url: SERVERURL + "/ajax/A_searchcity.asp?key=" + escape(v),
				success: function(data) {
					ZN.A.F(data);
					$(ZN.A.o.city).data(ZN.A.U, data)
				}
			})
		},
		F: function(a) {
			var l = ZN.A.l = $("#address_list"),
			e = $("#address_message"),
			c_i;
			if (a) {
				var d = a.split(";"),
				t = [];
				for (var i = 0; i < d.length - 1; i++) {
					var m = d[i].split(",");
					if (!i) {
						c_i = m[0]
					}
					t.push("<a class='" + (i ? "a1": "address_selected") + "' data-d='" + m[0] + "|" + m[1] + "' href='###'><span>" + m[3] + "</span>" + m[1] + "</a>")
				}
				l.html(t.join(""));
				e.html("\u4e3a\u60a8\u627e\u5230" + i + "\u4e2a\u7ed3\u679c:" + ZN.A.U)
			} else {
				e.html("\u5bf9\u4e0d\u8d77,\u6ca1\u6709\u627e\u5230:" + ZN.A.U)
			}
			if (!$("#tuna_address:visible").length) {
				$("#cityajaxselect").show();
				$("#cityajaxselect_p").show()
			}
			if (!$("#tuna_address:visible").length) {
				$("#tuna_address").show()
			}
			if (c_i) {
				$(ZN.A.o.cityid).val(c_i[0])
			}
			ZN.A.choose = false
		},
		X: function() {
			var c = $(ZN.A.o.city),
			n = $.trim(c.val());
			if (n && (n !== ZN.A.U) && n !== ZN.A.city_default_text) {
				ZN.A.U = n;
				try {
					$("#cityselect_p").hide()
				} catch(e) {}
				if (!c.data(n)) {
					ZN.A.ajax(n)
				} else {
					ZN.A.F(c.data(n))
				}
			}
		}
	};
	ZN.regexp = {
		decmal: "^([+-]?)\\d*\\.\\d+$",
		decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
		decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
		decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
		decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
		decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
		intege: "^-?[1-9]\\d*$",
		intege1: "^[1-9]\\d*$",
		intege2: "^-[1-9]\\d*$",
		num: "^([+-]?)\\d*\\.?\\d+$",
		num1: "^[1-9]\\d*|0$",
		num2: "^-[1-9]\\d*|0$",
		ascii: "^[\\x00-\\xFF]+$",
		chinese: "^[\\u4e00-\\u9fa5]+$",
		color: "^[a-fA-F0-9]{6}$",
		date: "^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$",
		email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
		idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",
		ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
		letter: "^[A-Za-z]+$",
		letter_l: "^[a-z]+$",
		letter_u: "^[A-Z]+$",
		mobile: "0?(13|14|15|18)[0-9]{9}$",
		notempty: "^\\S+$",
		password: "^[A-Za-z0-9_-]+$",
		picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
		qq: "^[1-9]*[1-9][0-9]*$",
		rar: "(.*)\\.(rar|zip|7zip|tgz)$",
		tel: "^[0-9-()\uff08\uff09]{7,18}$",
		url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
		username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
		deptname: "^[A-Za-z0-9_()\uff08\uff09\\-\\u4e00-\\u9fa5]+$",
		zipcode: "^\\d{6}$",
		realname: "^[A-Za-z0-9\\u4e00-\\u9fa5]+$",
		companyname: "^[A-Za-z0-9_()\uff08\uff09\\-\\u4e00-\\u9fa5]+$",
		companyaddr: "^[A-Za-z0-9_()\uff08\uff09\\#\\-\\u4e00-\\u9fa5]+$",
		companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$",
		verifycode: "^[a-zA-Z0-9]{4,5}$"
	};
	ZN.login = function(callback) {
		var nu = $("#nav_user"),
		t,
		l = nu.find("#login"),
		b = nu.find("#loginbox");
		var lb = $("#loginbox"),
		loginbt = lb.find("input[method='login']"),
		wait = lb.find("span[method='wait']"),
		usename = lb.find("#username"),
		password = lb.find("#password"),
		expires = lb.find("#expires");
		var ui = $.trim($.cookie("ZhuNaUserID")),
		un = $.trim($.cookie("ZhuNaUserName")),
		up = $.trim($.cookie("ZhuNaPassWord")),
		nn = $.trim($.cookie("ZhuNaNickName"));
		l.bind("keydown mouseout mouseover",
		function(e) {
			if (e.type == "mouseout") {
				t = setTimeout(function() {
					b.hide()
				},
				1000)
			} else {
				t && clearInterval(t);
				b.show()
			}
		});
		var temp_un = un.substring(0, 7).length == 7 ? (un.substring(0, 7) + "****") : "\u7f8e\u5973?\u5e05\u54e5?\u8c22\u8c22!",
		temp_name = "<a href='http://www.zhuna.cn/user/'>" + (nn ? nn: temp_un) + "</a>",
		temp = temp_name ? (' <div id="u_username">Hi! ' + temp_name + '&nbsp;&nbsp; <a href="http://tuan.zhuna.cn/account/logout.php">\u9000\u51fa</a></div>') : "",
		account = $("#account"),
		account_list = $("#nav_user_menu");
		account.bind("keydown mouseout mouseover",
		function(e) {
			if (e.type == "mouseout") {
				account_list.hide()
			} else {
				b.hide();
				account_list.show()
			}
		});
		account_list.bind("click",
		function(e) {
			$e = $(e.target);
			if ($e.is("a")) {
				if (ui == "" || un == "" || up == "") {
					b.show();
					account_list.hide();
					e.stopPropagation();
					return false
				}
			}
		});
		function enterclick() {
			loginbt.trigger("click")
		}
		usename.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		password.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		expires.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		loginbt.bind("click",
		function() {
			var u_ = usename.val(),
			p_ = $.trim(password.val());
			if (u_ == "") {
				usename.addClass("redborder").tip({
					text: "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
					timeout: 1000
				});
				return false
			}
			if (u_ && !new RegExp(ZN.regexp.mobile).test(u_)) {
				usename.addClass("redborder").tip({
					text: "\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e",
					timeout: 1000
				});
				return false
			}
			if (p_ == "") {
				password.addClass("redborder").tip({
					text: "\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",
					timeout: 1000
				});
				return false
			}
			$(this).hide();
			wait.show();
			usename.removeClass("redborder");
			password.removeClass("redborder");
			$.getJSON(SERVERURL + "/Ajax/A_checkUser.asp?u=" + escape(u_) + "&p=" + escape(p_) + "" + (expires.attr("checked") ? "&expires=1": "") + "&jsoncallback=?",
			function(d) {
				if (typeof d == "object") {
					if (d.errorcode == "0") {
						for (var a in d) {
							var param = {};
							if (typeof d[a] == "object") {
								for (var b in d[a]) {
									if (a != b) {
										param[b] = d[a][b]
									}
								}
								$.cookie(a, d[a][a], param)
							}
						}
						if (callback) {
							callback()
						} else {
							var x = window.location.href;
							while (x.substr(x.length - 1) == "#" || x.substr(x.length - 1) == "&") {
								x = x.substr(0, x.length - 1)
							}
							if (/reg.asp|login.asp|lostpassword.asp/.test(x)) {
								x = "http://www.zhuna.cn/user/"
							}
							$.cookie("globallogin", (expires.attr("checked") ? "kuailezu30": "kuailezu"), {
								expires: 1,
								domain: ".zhuna.cn",
								path: "/"
							});
							window.location.href = x
						}
						return
					} else {
						if (d.errorcode == "1") {
							$topWin.location = "http://passport.zhuna.cn/user/Safetytips.asp"
						} else {
							if (d.errorcode != "0") {
								loginbt.show();
								wait.hide();
								loginbt.tip({
									text: d.errorcode,
									timeout: 1500,
									left: 15
								})
							}
						}
					}
				}
			})
		});
		var sitemap_a = $("#top_tool .top_sitemap");
		sitemap_a.bind("keydown mouseout mouseover",
		function(e) {
			if (e.type == "mouseout") {
				nu.css("position", "relative");
				$(this).removeClass("hover")
			} else {
				b.hide();
				nu.css("position", "static");
				$(this).addClass("hover")
			}
		});
		if (ui != "" && un != "" && up != "") {
			account.find(".right_arrow").attr("href", "http://www.zhuna.cn/user/");
			account.prev().remove();
			l.remove();
			account.before(temp)
		}
	};
	ZN.global_login = function(to, o) {
		try {
			var url, data = null,
			urls = {
				kuailezu: {
					set: "http://www.kuailezu.com/user.php?m=accounts.setCookie",
					del: "http://www.kuailezu.com/user.php?m=accounts.clearCookie"
				}
			};
			switch (to) {
			case "kuailezu":
				url = urls[to];
				if (o.method == "set") {
					data = {
						id: o.ZhuNaUserID,
						password: o.ZhuNaPassWord
					}
				}
				$.ajax({
					url: url[o.method] + "&jsoncallback=?",
					data: data,
					dataType: "jsonp",
					success: function(json) {},
					error: function() {}
				});
				break;
			default:
				break
			}
		} catch(e) {}
	};
	ZN.login_b = function(callback) {
		var lb = $("#aForm"),
		loginbt = lb.find("input[name='button']"),
		wait = lb.find("input[id='loginloading']"),
		usename = lb.find("#username"),
		password = lb.find("#password"),
		expires = lb.find("#expires2"),
		purl = lb.find("input[name='purl']").val();
		function enterclick() {
			loginbt.trigger("click")
		}
		usename.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		password.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		expires.keyup(function(event) {
			if (event.keyCode == 13) {
				enterclick()
			}
		});
		loginbt.bind("click",
		function() {
			var u_ = usename.val(),
			p_ = $.trim(password.val());
			if (u_ == "") {
				usename.addClass("redborder").tip({
					text: "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
					timeout: 1000
				});
				return false
			}
			if (u_ && !new RegExp(ZN.regexp.mobile).test(u_)) {
				usename.addClass("redborder").tip({
					text: "\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e",
					timeout: 1000
				});
				return false
			}
			if (p_ == "") {
				password.addClass("redborder").tip({
					text: "\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",
					timeout: 1000
				});
				return false
			}
			$(this).hide();
			wait.show();
			usename.removeClass("redborder");
			password.removeClass("redborder");
			$.getJSON(SERVERURL + "/Ajax/A_checkUser.asp?u=" + escape(u_) + "&p=" + escape(p_) + "" + (expires.attr("checked") ? "&expires=1": "") + "&jsoncallback=?",
			function(d) {
				if (typeof d == "object") {
					if (d.errorcode == "0") {
						for (var a in d) {
							var param = {};
							if (typeof d[a] == "object") {
								for (var b in d[a]) {
									if (a != b) {
										param[b] = d[a][b]
									}
								}
								$.cookie(a, d[a][a], param)
							}
						}
						if (purl == "callback_login_success") {
							try {
								self.parent.callback_login_success();
								return
							} catch(e) {}
							purl = ""
						}
						if (callback) {
							callback();
							if (purl == "norefresh") {
								return
							}
						} else {
							if (purl == "norefresh") {
								return
							}
							if (purl) {
								while (purl.substr(purl.length - 1) == "#" || purl.substr(purl.length - 1) == "&") {
									purl = purl.substr(0, purl.length - 1)
								}
							}
							if (purl && !(/reg.asp|login.asp|lostpassword.asp/.test(purl))) {
								$topWin.location = purl
							} else {
								$topWin.location = "http://www.zhuna.cn/user/"
							}
							$.cookie("globallogin", (expires.attr("checked") ? "kuailezu30": "kuailezu"), {
								expires: 1,
								domain: ".zhuna.cn",
								path: "/"
							})
						}
						return
					} else {
						if (d.errorcode == "1") {
							$topWin.location = "http://passport.zhuna.cn/user/Safetytips.asp"
						} else {
							if (d.errorcode != "0") {
								loginbt.show();
								wait.hide();
								loginbt.tip({
									text: d.errorcode,
									timeout: 2500,
									left: 15
								})
							}
						}
					}
				}
			})
		})
	};
	ZN.reg = function(t, obj) {
		var t = $(t);
		var T = this,
		space = String.fromCharCode(12288);
		T.go_ = false;
		var f = {
			mobile: {
				isNull: "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",
				error: {
					badLength: "\u60a8\u8f93\u5165\u7684\u624b\u673a\u53f7\u957f\u5ea6\u4e0d\u6b63\u786e",
					beUsed: "\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u4f7f\u7528,\u8bf7\u4f7f\u7528\u5176\u5b83\u624b\u673a\u53f7\u6ce8\u518c",
					badFormat: "\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"
				},
				checkUrl: SERVERURL + "/Ajax/A_checkMobile.asp?q="
			},
			password: {
				isNull: "\u8bf7\u8f93\u5165\u5bc6\u7801",
				error: {
					badLength: "\u5bc6\u7801\u957f\u5ea6\u53ea\u80fd\u57286-16\u4f4d\u5b57\u7b26\u4e4b\u95f4",
					badFormat: '\u5bc6\u7801\u53ea\u80fd\u7531\u82f1\u6587\u3001\u6570\u5b57\u53ca"_"\u3001"-"\u7ec4\u6210'
				}
			},
			password2: {
				isNull: "\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801",
				error: {
					badLength: "\u5bc6\u7801\u957f\u5ea6\u53ea\u80fd\u57286-16\u4f4d\u5b57\u7b26\u4e4b\u95f4",
					badFormat2: "\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4",
					badFormat: '\u5bc6\u7801\u53ea\u80fd\u7531\u82f1\u6587\u3001\u6570\u5b57\u53ca"_"\u3001"-"\u7ec4\u6210'
				}
			},
			email: {
				isNull: "\u8bf7\u8f93\u5165\u90ae\u7bb1",
				error: {
					badFormat: "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
				}
			},
			verifycode: {
				isNull: "\u8bf7\u8f93\u5165\u60a8\u7684\u9a8c\u8bc1\u7801",
				error: {
					badLength: "\u60a8\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u957f\u5ea6\u4e0d\u6b63\u786e",
					badFormat: "\u9a8c\u8bc1\u7801\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
					wrongCode: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef"
				},
				checkUrl: PASSPORTURL + "/captcha/?types=1&hash_code={$hash_code}&verify_code={$verify_code}"
			},
			mobileverifycode: {
				isNull: "\u8bf7\u8f93\u5165\u60a8\u63a5\u6536\u5230\u7684\u624b\u673a\u9a8c\u8bc1\u7801",
				error: {
					badLength: "\u60a8\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u957f\u5ea6\u4e0d\u6b63\u786e",
					badFormat: "\u9a8c\u8bc1\u7801\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"
				}
			}
		};
		if (typeof obj == "object") {
			$.extend(f, obj)
		}
		this.s = {
			n: "col_help",
			e: "col_error",
			ie: "reg_text_error",
			s: "succeed"
		};
		this.turn = function(v, z, flog) {
			if (flog == 0) {
				v.addClass(T.s.ie);
				z.attr("class", T.s.e)
			} else {
				if (flog == 1) {
					v.removeClass(T.s.ie);
					z.attr("class", T.s.n)
				} else {
					if (flog == 2) {
						v.removeClass(T.s.ie);
						z.attr("class", T.s.s);
						z.html(space + space)
					}
				}
			}
		};
		this.shake = function(v, z) {
			this.turn(v, z, 0);
			var w = parseInt(v.css("width"));
			v.animate({
				width: w + 10
			},
			{
				duration: 1000,
				easing: "easeOutElastic"
			}).animate({
				width: w
			},
			{
				duration: 100,
				easing: "easeOutElastic"
			})
		};
		this.check = function(zs, c) {
			var v = $(zs),
			type_ = v.attr("type_"),
			value = v.val(),
			empty = v.attr("empty"),
			text,
			error_ = T.g(type_, f);
			empty_ = $.trim(value) == "";
			z = v.parent().find("span:first");
			if (!z.attr("title")) {
				z.attr("title", z.html())
			}
			if (!empty_) {
				if (empty == "false") {
					text = T.g(type_, ZN.regexp);
					switch (type_) {
					case "mobile":
						if (value.length != 11) {
							z.html(error_.error.badLength);
							T.shake(v, z);
							return false
						} else {
							if (text && !new RegExp(text).test(value)) {
								z.html(error_.error.badFormat);
								T.shake(v, z);
								return false
							} else {
								var c_ = v.attr("c_"),
								c_2 = false;
								if (!c_ || c_ != value) {
									c_2 = true
								}
								v.attr("c_", value);
								if (c_2) {
									z.html("\u9a8c\u8bc1\u4e2d......");
									$.ajax({
										url: f.mobile.checkUrl + value,
										success: function(data) {
											if (data == 0) {
												z.html(ZN.F.cc(error_.error.beUsed, value));
												T.shake(v, z);
												T.go_ = false;
												return false
											} else {
												T.go_ = true;
												T.turn(v, z, 2);
												return true
											}
										}
									})
								} else {
									return true
								}
							}
						}
						break;
					case "password":
						if (! (6 <= value.length && value.length <= 16)) {
							z.html(error_.error.badLength);
							T.shake(v, z);
							return false
						} else {
							if (text && !new RegExp(text).test(value)) {
								z.html(error_.error.badFormat);
								T.shake(v, z);
								return false
							} else {
								T.turn(v, z, 2);
								return true
							}
						}
						break;
					case "password2":
						if (value != t.find("#" + v.get(0).name.replace(/\d+/, "")).val()) {
							z.html(error_.error.badFormat2);
							T.shake(v, z);
							return false
						} else {
							T.turn(v, z, 2);
							return true
						}
						break;
					case "verifycode":
						if (! (4 == value.length || 5 == value.length)) {
							z.html(error_.error.badLength);
							T.shake(v, z);
							return false
						} else {
							if (text && !new RegExp(text).test(value)) {
								z.html(error_.error.badFormat);
								T.shake(v, z);
								return false
							} else {
								var hash_code = $.cookie("captcha"),
								url = F.re(f.verifycode.checkUrl, {
									hash_code: hash_code,
									verify_code: value
								});
								$.ajax({
									url: url,
									success: function(data) {
										if (data == "1") {
											T.go_ = true;
											T.turn(v, z, 2);
											return true
										} else {
											z.html(ZN.F.cc(error_.error.wrongCode, value));
											v.next().attr("src", "http://passport.zhuna.cn/captcha/?" + Math.random());
											T.shake(v, z);
											T.go_ = false;
											return false
										}
									}
								})
							}
						}
						break;
					default:
						if (text && !new RegExp(text).test(value)) {
							z.html(error_.error.badFormat);
							T.shake(v, z);
							return false
						} else {
							T.turn(v, z, 2);
							return true
						}
						break
					}
				}
			} else {
				if (c && empty == "false") {
					z.html(error_.isNull);
					T.shake(v, z)
				}
				return false
			}
		};
		this.g = function(b, v) {
			var t = null;
			for (var a in v) {
				if (b == a) {
					t = v[a]
				}
			}
			return t
		};
		t.find("input[type_]").bind("blur",
		function() {
			T.check(this, false)
		});
		this.init = function() {
			t.bind("submit",
			function() {
				var g__ = true;
				$(this).find("input[type_]").each(function(e) {
					var g_ = T.check(this, true);
					if (!T.go_) {
						g__ = false
					}
					if (g_ == false) {
						g__ = false
					}
				});
				return g__
			})
		};
		this.init()
	};
	ZN.footer = function() {
		var icount_v = [40037, 738690, 1351556];
		var icount_s = $("#icount").find("span");
		for (var i = 0; i < icount_s.length; i++) {
			$(icount_s[i]).removeClass("loadarrows").html(icount_v[i])
		}
	};
	ZN.F.feedback = function() {
		Tips({
			_title: "\u95ee\u9898\u53cd\u9988",
			_content: "iframe:http://www.zhuna.cn/about/fankui.asp?keepThis=true&w=800px&h=500px",
			_width: "800",
			_height: "500",
			_drag: "_boxTitle",
			_showbg: true
		})
	};
	ZN.online = function(type, flog_id, city) {
		var T = this;
		T.temp = ['<div class="buy_hotel hidden"><span class="buy_close"></span><div class="bh_main"><dl><dt>\u6700\u8fd1\u4e00\u6b21\u9884\u8ba2\u8be5\u9152\u5e97\uff1a<span>{$date}</span>{$ip}</dt><dd><span>{$nums}</span>\u4f4d\u5ba2\u4eba\u6b63\u5728\u6d4f\u89c8\u8fd9\u5bb6\u9152\u5e97</dd></dl></div></div>', '<div class="listbuy_hotel"><span class="buy_close"></span><div class="bh_main1"><span>{$num}</span>\u4f4d\u5ba2\u4eba\u6b63\u5728\u6d4f\u89c8{$city}\u9152\u5e97</div></div>'];
		var exct_date = function(data) {
			if (!data) {
				return
			}
			try {
				if (data.date) {
					var html = ZN.F.re(T.temp[0], {
						date: data.date,
						ip: ((data.ip) ? "\uff0c\u9884\u5b9a\u6765\u81ea" + data.ip: ""),
						nums: data.num,
						city: city
					})
				} else {
					var html = ZN.F.re(T.temp[1], {
						num: data.num,
						city: city || "\u8fd9\u5bb6"
					})
				}
				$("body").append(html);
				var online = $(".buy_hotel");
				if (!online.length) {
					online = $(".listbuy_hotel")
				}
				online.find("span.buy_close").unbind("click").bind("click",
				function() {
					online.slideUp("slow")
				});
				online.slideDown("slow");
				setTimeout(function() {
					online.slideUp("slow")
				},
				10000)
			} catch(e) {}
		};
		var get_date = function(url) {
			$.ajax({
				type: "GET",
				url: SERVERURL + url,
				dataType: "json",
				timeout: 8000,
				error: function() {},
				success: function(total) {
					exct_date(total)
				}
			})
		};
		get_date("/Ajax/A_Online.php?" + flog_id)
	};
	ZN.clicks = function(v) {};
	ZN.clicks.prototype.form = function(data, T) {
		if (!T) {
			return
		}
		var a = new Object();
		$(T).find("input").each(function() {
			a[$(this).attr("name")] = $(this).attr("value")
		});
		a.location = window.location.href;
		$.extend(a, data);
		$.ajax({
			type: "POST",
			data: a,
			url: SERVERURL + "/ajax/A_logs.php",
			timeout: 2000
		})
	};
	ZN.logs = function(o) {
		if (o.click == true) {
			var clicks = new ZN.clicks();
			clicks.form(o.data, o.form)
		}
	}
})();
var F = ZN.F,
WP = ZN.WP,
ZN_A = ZN.A,
H = ZN.H;
ZN.footer(); (function(a) {
	jQuery.fn.roll = function(h) {
		var n = {
			b: "#numeric li",
			i: 0,
			l: 0,
			h: 224,
			t: 3000,
			bt: true,
			s: 0,
			stop: false
		};
		var m = a.extend(n, h);
		m.bb = a(m.b);
		m.l = Boolean(m.s) ? Math.ceil(m.bb.size() / m.s) : m.bb.size();
		var b;
		var r = jQuery(this).css({
			position: "absolute"
		});
		function l() {
			r.stop(true, false).animate({
				marginTop: -m.h * m.i
			},
			400);
			if (m.bt) {
				m.bb.eq(m.i).addClass("on").siblings().removeClass("on")
			}
			m.i++;
			if (m.i == m.l) {
				m.i = 0
			}
		}
		function k() {
			b = setInterval(function() {
				l.call(this)
			},
			m.t)
		}
		return r.each(function() {
			k.call(this);
			m.bb.mouseover(function() {
				clearInterval(b);
				if (!m.stop) {
					m.i = m.bb.index(this);
					l.call(this)
				}
			}).mouseleave(function() {
				k.call(this)
			})
		})
	};
	jQuery.fn.faderoll = function(v) {
		var s = {
			b: "#numeric li",
			i: 0,
			l: 0,
			h: 224,
			t: 3000,
			bt: true,
			s: 0,
			stop: false
		};
		var h = a.extend(s, v);
		h.bb = a(h.b);
		h.l = Boolean(h.s) ? Math.ceil(h.bb.size() / h.s) : h.bb.size();
		var k;
		var n = jQuery(this).css({
			position: "absolute"
		});
		var r = jQuery(this).find("img"),
		l = 5000;
		function b() {
			function m() {
				e[j].style.display = "none";
				e[j].style.filter = "";
				p = !1;
				q = setTimeout(function() {
					c(null)
				},
				h === null ? l: 200)
			}
			i = setInterval(function() {
				f = Math.max(f - g, 0);
				e[j].style.opacity = f / 100;
				e[j].style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + f + ")";
				if (!f) {
					clearInterval(i),
					e[j].style.opacity = 100,
					m()
				}
			},
			20);
			r.filter(":visible").fadeOut(1000);
			r.eq(h.i).fadeIn(1000).siblings().hide();
			if (h.bt) {
				h.bb.eq(h.i).addClass("on").siblings().removeClass("on")
			}
			h.i++;
			if (h.i == h.l) {
				h.i = 0
			}
		}
		function u() {
			k = setInterval(function() {
				b.call(this)
			},
			h.t)
		}
		return n.each(function() {
			u.call(this);
			h.bb.mouseover(function() {
				clearInterval(k);
				if (!h.stop) {
					h.i = h.bb.index(this);
					b.call(this)
				}
			}).mouseleave(function() {
				u.call(this)
			})
		})
	};
	jQuery.fn.page = function(b, h) {
		h = jQuery.extend({
			items_per_page: 3,
			num_display_entries: 5,
			current_page: 1,
			num_edge_entries: 1,
			link_to: "",
			prev_text: "&lt;&lt;",
			next_text: "&gt;&gt;",
			ellipse_text: "..",
			queue_id: 0,
			trigger: "",
			prev_show_always: false,
			next_show_always: false,
			callback: function() {
				return false
			},
			proto: null,
			showcount: false
		},
		h || {});
		return this.each(function() {
			function r() {
				return Math.ceil(b / h.items_per_page)
			}
			function v() {
				var y = Math.ceil(h.num_display_entries / 2);
				var A = r();
				var x = A - h.num_display_entries;
				var B = u > y ? Math.max(Math.min(u - y, x), 1) : 1;
				var w = u > y ? Math.min(u + y, A) : Math.min(h.num_display_entries, A);
				return [B, w]
			}
			function n(x, w) {
				u = x;
				k();
				var y = h.callback.call(this, x, l, h.proto);
				if (!y) {
					if (w.stopPropagation) {
						w.stopPropagation()
					} else {
						w.cancelBubble = true
					}
				}
				return y
			}
			function k() {
				l.empty();
				var A = v();
				var D = r();
				var x = new Array(),
				w = new Array();
				x[0] = [0, 1, 2, 3, 4],
				x[1] = [1, 0, 2, 4, 3],
				x[2] = [5];
				x = x[h.queue_id];
				var E = function(G) {
					return function(I) {
						return n(G, I)
					}
				};
				var B = function(G, J, I) {
					G = G < 1 ? 1 : (G < D ? G: D);
					if (I) {
						if (I == 1) {
							I = h.ellipse_text + (G)
						} else {
							I = (G) + h.ellipse_text
						}
					}
					J = jQuery.extend({
						text: (I ? I: G),
						classes: ""
					},
					J || {});
					if (G == u) {
						var K = jQuery("<strong>" + (J.text) + "</strong>")
					} else {
						var K = jQuery("<a>" + (J.text) + "</a>").bind("click", E(G)).addClass("a_span"); (!isNaN(J.text)) ? K.attr("title", "\u7b2c" + J.text + "\u9875") : K.attr("title", J.text)
					}
					if (J.classes) {
						K.addClass(J.classes)
					}
					l.append(K)
				};
				w.push(function() {
					if (A[0] > 1 && h.num_edge_entries > 0) {
						var G = Math.min(h.num_edge_entries, A[0]);
						for (var I = 1; I <= G; I++) {
							if (h.num_edge_entries < A[0] && h.ellipse_text) {
								B(I, "", 2)
							} else {
								B(I)
							}
						}
					}
				});
				w.push(function() {
					if (h.prev_text && (u > 1 || h.prev_show_always)) {
						B(u - 1, {
							text: h.prev_text,
							classes: "prev"
						})
					}
				});
				w.push(function() {
					for (var G = A[0]; G <= A[1]; G++) {
						B(G)
					}
				});
				w.push(function() {
					if (h.next_text && (u < D || h.next_show_always)) {
						B(u + 1, {
							text: h.next_text,
							classes: "next"
						})
					}
				});
				w.push(function() {
					if (A[1] < D && h.num_edge_entries > 0) {
						var I = Math.max(D - h.num_edge_entries, A[1]);
						for (var G = I; G <= D; G++) {
							if (D - h.num_edge_entries > A[1] && h.ellipse_text) {
								B(G, "", 1)
							} else {
								B(G)
							}
						}
					}
				});
				w.push(function() {
					var J, I, G = (u < 1 ? 1 : u);
					J = (G - 1) <= 1 ? 1 : G - 1;
					I = (G + 1) >= D ? D: G + 1;
					h.showcount ? l.append(a("<span>" + b + '\u5bb6\u9152\u5e97  <font class="gray">' + (u) + "/" + D + "</font></span>")) : l.append(a("<span>" + (u) + "/" + D + "\u9875</span>"));
					l.append(a('<span class="pre"><a>&nbsp;</a></span>').attr("title", "\u4e0a\u4e00\u9875").bind("click", E(J))).append(a('<span class="next"><a>\u4e0b\u4e00\u9875</a></span>').attr("title", "\u4e0b\u4e00\u9875").bind("click", E(I)))
				});
				for (var y = 0; y < x.length; y++) {
					w[x[y]]()
				}
				w = x = null;
				if (h.trigger) {
					m = l;
					s = h.trigger;
					l = a(s);
					h.queue_id = 2;
					h.trigger = "";
					k();
					return
				}
				if (m) {
					l = m;
					h.queue_id = 0;
					h.trigger = s
				}
			}
			var u = parseInt(h.current_page);
			b = (!b || b < 0) ? 1 : b;
			h.items_per_page = (!h.items_per_page || h.items_per_page < 0) ? 1 : h.items_per_page;
			var s, m, l = jQuery(this);
			this.selectPage = function(w) {
				n(w)
			};
			this.prevPage = function() {
				if (u > 0) {
					n(u - 1);
					return true
				} else {
					return false
				}
			};
			this.nextPage = function() {
				if (u < r() - 1) {
					n(u + 1);
					return true
				} else {
					return false
				}
			};
			k()
		})
	};
	jQuery.fn.outer = function() {
		return a("<div></div>").append(this.eq(0).clone()).html()
	};
	jQuery.fn.tip = function(y) {
		var s = {
			timeout: 1000,
			text: "",
			closeID: false,
			corner: "rb",
			cornerTop: 0,
			cornerLeft: 0,
			documentClick: false
		};
		var k = a.extend(s, y);
		var b = a(this).offset(),
		v = a(this).width(),
		n = a(this).height();
		if (k.closeId) {
			var x = a("<div/>").attr("class", "msg_ico"),
			l = a("<span/>"),
			r = a('<a href="###" />').html("&nbsp"),
			m = a("<p/>").html(k.text),
			u = a("<div />").attr("class", "msg_div_" + k.corner);
			u.css({
				position: "absolute",
				"z-index": "5001",
				top: k.cornerTop,
				left: k.cornerLeft
			});
			x.css({
				position: "absolute",
				"z-index": (k.zIndex ? k.zIndex: "5000"),
				top: (k.top ? (b.top + k.top) : b.top),
				left: (k.left ? (b.left + v + k.left) : (b.left + v))
			});
			a(".msg_ico").length && a(".msg_ico").remove();
			l.bind("click",
			function() {
				x.remove()
			});
			x.append(m);
			x.append(l.append(r));
			x.append(u);
			a("body").append(x)
		} else {
			var x = a("<div/>").attr("id", "m_contentend"),
			m = a("<div/>").attr("class", "com_bug"),
			l = a("<div/>").attr("class", "w").html(k.text);
			m.css({
				position: "absolute",
				"z-index": (k.zIndex ? k.zIndex: "5000"),
				top: (k.top ? (b.top + k.top) : b.top),
				left: (k.left ? (b.left + v + k.left) : (b.left + v))
			});
			a("#m_contentend").length && a("#m_contentend").remove();
			a("body").append(x.append(m.append(l)));
			if (k.documentClick) {
				a(document).mousedown(function(w) {
					var h = w.target;
					if (h != l[0]) {
						x.fadeIn("slow").remove();
						a(this).unbind(w)
					}
				})
			} else {
				setTimeout(function() {
					x.fadeIn("slow").remove()
				},
				k.timeout)
			}
		}
	};
	a.fn.loading = function(h) {
		var l = a.extend(true, {
			fade: true
		},
		h);
		var k, b = this;
		this.removeLoading = function() {
			b.s.remove();
			b.r.remove()
		};
		return this.each(function() {
			if (!l.div) {
				l.div = "body"
			}
			if (l.div == "body") {
				k = a(document.body);
				b.s = a("<div class='loading'>").css({
					position: "fixed",
					"z-index": 2,
					width: "100%",
					height: "100%",
					left: "0",
					top: "0"
				});
				b.r = a("<div class='pop_load loading'>").css({
					left: (a(window).width() / 2) - 150,
					top: a(window).height() / 2 - 100
				}).html("<div class='pop_loading'><dl><dt>\u8bf7\u7a0d\u7b49\uff0c\u60a8\u67e5\u8be2\u7684\u9152\u5e97\u6b63\u5728\u641c\u7d22\u4e2d......</dt><dd>\u4f4f\u54ea\u7f51\u2014\u8ba2\u9152\u5e97\u8fd4\u73b0\u91d1,30000\u5bb6\u9152\u5e97\u4efb\u60a8\u9009!</dd></dl></div>")
			} else {
				if (l.mini) {
					var n = a("" + l.div + ""),
					m = n.position().left,
					r = n.position().top;
					b.s = a("<div class='loading'>").css({
						position: "absolute",
						"z-index": 2,
						width: n.outerWidth(),
						height: n.outerHeight(),
						left: m,
						top: r
					});
					b.r = a("<div class='pop_load1 loading'>").css({
						position: "absolute",
						left: m + (n.width() / 2) - 100,
						top: r + n.height() / 2 - 10
					}).html("<div class='pop_loading2'>\u6b63\u5728\u52a0\u8f7d\u6700\u65b0\u6570\u636e\uff0c\u8bf7\u7a0d\u5019...</div>");
					n.css({
						position: "relative"
					});
					k = a("body")
				} else {
					k = a("" + l.div + "");
					b.s = a("<div class='loading'>").css({
						position: "absolute",
						"z-index": 2,
						width: k.outerWidth(),
						height: k.outerHeight(),
						left: 0,
						top: 0
					});
					b.s.css({
						left: k.position().left,
						top: k.position().top
					});
					b.r = a("<div class='pop_load loading'>").css({
						position: "absolute",
						left: (a(window).width() / 2) - 150,
						top: ((document.body.scrollTop || document.documentElement.scrollTop) + a(window).height() / 2 - 180)
					}).html("<div  class='pop_loading'><dl><dl><dt>\u8bf7\u7a0d\u7b49\uff0c\u60a8\u67e5\u8be2\u7684\u9152\u5e97\u6b63\u5728\u641c\u7d22\u4e2d......</dt><dd>\u4f4f\u54ea\u7f51\u2014\u8ba2\u9152\u5e97\u8fd4\u73b0\u91d1,30000\u5bb6\u9152\u5e97\u4efb\u60a8\u9009!</dd></dl></div>")
				}
			}
			b.r.appendTo(k);
			b.s.appendTo(k);
			if (l.fade) {
				b.s.css({
					opacity: 0,
					background: "#B0D1E8"
				}).fadeTo(700, 0.4)
			} else {
				b.s.css({
					opacity: 0.4,
					background: "#B0D1E8"
				})
			}
			if (a.browser.msie && (a.browser.version == "6.0")) {
				a(window).scroll(function() {
					var s = a(window).scrollTop() + a(window).height() - a(window).height() / 2 - 100;
					a(b.r).css("top", s)
				})
			}
		})
	};
	a.fn.Marquee = function(b) {
		var h = a.extend({},
		a.fn.Marquee.defaults, b);
		return this.each(function() {
			var x = a(this);
			var u = x.get(0);
			var v = x.width();
			var r = x.height();
			var w = x.children();
			var y = w.children();
			var k = 0;
			var n = (h.direction == "left" || h.direction == "right") ? 1 : 0;
			w.css(n ? "width": "height", 10000);
			if (h.isEqual) {
				k = y[n ? "outerWidth": "outerHeight"]() * y.length
			} else {
				y.each(function() {
					k += a(this)[n ? "outerWidth": "outerHeight"]()
				})
			}
			if (k < (n ? v: r)) {
				return
			}
			w.append(y.clone()).css(n ? "width": "height", k * 2);
			var s = 0;
			function m() {
				var A = (h.direction == "left" || h.direction == "right") ? "scrollLeft": "scrollTop";
				if (h.loop > 0) {
					s += h.scrollAmount;
					if (s > k * h.loop) {
						u[A] = 0;
						return clearInterval(l)
					}
				}
				if (h.direction == "left" || h.direction == "up") {
					u[A] += h.scrollAmount;
					if (u[A] >= k) {
						u[A] = 0
					}
				} else {
					u[A] -= h.scrollAmount;
					if (u[A] <= 0) {
						u[A] = k
					}
				}
			}
			var l = setInterval(m, h.scrollDelay);
			x.hover(function() {
				clearInterval(l)
			},
			function() {
				clearInterval(l);
				l = setInterval(m, h.scrollDelay)
			})
		})
	};
	a.fn.Marquee.defaults = {
		isEqual: true,
		loop: 0,
		direction: "left",
		scrollAmount: 1,
		scrollDelay: 20
	};
	a.fn.Marquee.setDefaults = function(b) {
		a.extend(a.fn.Marquee.defaults, b)
	}
})(jQuery); (function(l) {
	var h = {
		trigger: "#autocompletebutton",
		method: "GET",
		queryParam: "q",
		searchDelay: 300,
		minChars: 1,
		propertyToSearch: "n",
		cityname: "c",
		jsonContainer: null,
		contentType: "json",
		prePopulate: null,
		processPrePopulate: false,
		hintText: "\u57ce\u5e02\u3001\u6807\u5fd7\u7269\u3001\u9152\u5e97\u540d\u79f0\u3001\u54c1\u724c\u3001\u5730\u5740",
		noResultsText: "\u6ca1\u6709\u7ed3\u679c",
		searchingText: "\u641c\u7d22\u4e2d...",
		deleteText: "&times;",
		animateDropdown: true,
		theme: null,
		resultsFormatter: function(n) {
			return "<li>" + n[this.propertyToSearch] + (n[this.cityname] ? ("<span>" + n[this.cityname] + "</span>") : "") + "</li>"
		},
		tokenFormatter: function(n) {
			return "<li><p>" + n[this.propertyToSearch] + "</p></li>"
		},
		tokenLimit: null,
		tokenDelimiter: ",",
		preventDuplicates: false,
		tokenValue: "id",
		onResult: null,
		onAdd: null,
		onDelete: null,
		onReady: null,
		idPrefix: "token-input-"
	};
	var m = {
		tokenList: "token-input-list",
		token: "token-input-token",
		tokenDelete: "token-input-delete-token",
		selectedToken: "token-input-selected-token",
		highlightedToken: "token-input-highlighted-token",
		dropdown: "token-input-dropdown",
		dropdownItem: "token-input-dropdown-item",
		dropdownItem2: "token-input-dropdown-item2",
		selectedDropdownItem: "token-input-selected-dropdown-item",
		inputToken: "token-input-input-token"
	};
	var k = {
		BEFORE: 0,
		AFTER: 1,
		END: 2
	};
	var a = {
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		ESCAPE: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		NUMPAD_ENTER: 108,
		COMMA: 188
	};
	var b = {
		init: function(n, r) {
			var s = l.extend({},
			h, r || {});
			return this.each(function() {
				l(this).data("tokenInputObject", new l.TokenList(this, "http://so.api.zhuna.cn/kuangso/select/?version=2.2&start=0&rows=10&indent=on&wt=json", s))
			})
		},
		clear: function() {
			this.data("tokenInputObject").clear();
			return this
		},
		add: function(n) {
			this.data("tokenInputObject").add(n);
			return this
		},
		remove: function(n) {
			this.data("tokenInputObject").remove(n);
			return this
		},
		get: function() {
			return this.data("tokenInputObject").getTokens()
		}
	};
	l.fn.tokenInput = function(n) {
		if (b[n]) {
			return b[n].apply(this, Array.prototype.slice.call(arguments, 1))
		} else {
			return b.init.apply(this, arguments)
		}
	};
	l.TokenList = function(s, E, ag) {
		if (l.type(E) === "string" || l.type(E) === "function") {
			ag.url = E;
			var v = M();
			if (ag.crossDomain === undefined) {
				if (v.indexOf("://") === -1) {
					ag.crossDomain = false
				} else {
					ag.crossDomain = (location.href.split(/\/+/g)[1] !== v.split(/\/+/g)[1])
				}
			}
		} else {
			if (typeof(E) === "object") {
				ag.local_data = E
			}
		}
		if (ag.classes) {
			ag.classes = l.extend({},
			m, ag.classes)
		} else {
			if (ag.theme) {
				ag.classes = {};
				l.each(m,
				function(aj, ak) {
					ag.classes[aj] = ak + "-" + ag.theme
				})
			} else {
				ag.classes = m
			}
		}
		var W = [];
		var K = 0;
		var D = new l.TokenList.Cache();
		var ae;
		var ab;
		var ah = l("<div>").addClass(ag.classes.dropdown).appendTo("body").hide();
		var O = l('<input type="text"  autocomplete="off">').css({
			outline: "none"
		}).attr({
			id: ag.idPrefix + s.id,
			"class": "tip"
		}).focus(function() {
			l(this).removeClass("tip");
			if (ag.tokenLimit === null || ag.tokenLimit !== K) {
				u()
			}
		}).blur(function() {
			X();
			l(this).val() || l(this).addClass("tip")
		}).bind("keyup keydown blur update", n).keyup(function(al) {
			var an;
			var ak;
			switch (al.keyCode) {
			case a.LEFT:
			case a.RIGHT:
			case a.UP:
			case a.DOWN:
				if (!l(this).val()) {
					an = x.prev();
					ak = x.next();
					if ((an.length && an.get(0) === U) || (ak.length && ak.get(0) === U)) {
						if (al.keyCode === a.LEFT || al.keyCode === a.UP) {
							deselect_token(l(U), k.BEFORE)
						} else {
							deselect_token(l(U), k.AFTER)
						}
					} else {
						if ((al.keyCode === a.LEFT || al.keyCode === a.UP) && an.length) {
							select_token(l(an.get(0)))
						} else {
							if ((al.keyCode === a.RIGHT || al.keyCode === a.DOWN) && ak.length) {
								select_token(l(ak.get(0)))
							}
						}
					}
				} else {
					var am = null;
					if (al.keyCode === a.DOWN || al.keyCode === a.RIGHT) {
						am = l(ad).next()
					} else {
						am = l(ad).prev()
					}
					if (am.length) {
						ai(am)
					}
					return false
				}
				break;
			case a.ENTER:
				if (ah.is(":empty") || ah.is(":hidden")) {
					w({
						t: -1,
						key: l.trim(l(this).val())
					})
				} else {
					var aj = ah.find("ul li").filter("." + ag.classes.selectedDropdownItem + "");
					if (aj) {
						w(aj.data("tokeninput"))
					}
				}
				break;
			case a.TAB:
			case a.NUMPAD_ENTER:
			case a.COMMA:
				if (ad) {
					w(l(ad).data("tokeninput"));
					V.change();
					return false
				}
				break;
			case a.ESCAPE:
				X();
				return true;
			default:
				if (String.fromCharCode(al.which)) {
					setTimeout(function() {
						R()
					},
					0)
				}
				break
			}
		});
		if (l.cookie("globalsearch")) {
			O.removeClass("tip").val(l.cookie("globalsearch"))
		}
		var V = l(s).hide().val("").focus(function() {
			O.focus()
		}).blur(function() {
			O.blur()
		});
		var U = null;
		var Y = 0;
		var ad = null;
		var A = l("<ul />").addClass(ag.classes.tokenList).click(function(ak) {
			var aj = l(ak.target).closest("li");
			if (aj && aj.get(0) && l.data(aj.get(0), "tokeninput")) {
				toggle_select_token(aj)
			} else {
				if (U) {
					deselect_token(l(U), k.END)
				}
				O.focus()
			}
		}).mouseover(function(ak) {
			var aj = l(ak.target).closest("li");
			if (aj && U !== this) {
				aj.addClass(ag.classes.highlightedToken)
			}
		}).mouseout(function(ak) {
			var aj = l(ak.target).closest("li");
			if (aj && U !== this) {
				aj.removeClass(ag.classes.highlightedToken)
			}
		}).insertBefore(V);
		var x = l("<li />").addClass(ag.classes.inputToken).appendTo(A).append(O);
		var aa = l("<tester/>").insertAfter(O).css({
			position: "absolute",
			top: -9999,
			left: -9999,
			width: "auto",
			fontSize: O.css("fontSize"),
			fontFamily: O.css("fontFamily"),
			fontWeight: O.css("fontWeight"),
			letterSpacing: O.css("letterSpacing"),
			whiteSpace: "nowrap"
		});
		V.val("");
		var N = ag.prePopulate || V.data("pre");
		if (ag.processPrePopulate && l.isFunction(ag.onResult)) {
			N = ag.onResult.call(V, N)
		}
		if (N && N.length) {
			l.each(N,
			function(aj, ak) {
				insert_token(ak);
				Z()
			})
		}
		if (ag.trigger) {
			if (l(ag.trigger).length) {
				l(ag.trigger).bind("click",
				function() {
					w({
						t: -1,
						key: l.trim(O.val())
					})
				})
			}
		}
		if (l.isFunction(ag.onReady)) {
			ag.onReady.call()
		}
		this.clear = function() {
			A.children("li").each(function() {
				if (l(this).children("input").length === 0) {
					delete_token(l(this))
				}
			})
		};
		this.add = function(aj) {
			add_token(aj)
		};
		this.remove = function(aj) {
			A.children("li").each(function() {
				if (l(this).children("input").length === 0) {
					var am = l(this).data("tokeninput");
					var ak = true;
					for (var al in aj) {
						if (aj[al] !== am[al]) {
							ak = false;
							break
						}
					}
					if (ak) {
						delete_token(l(this))
					}
				}
			})
		};
		this.getTokens = function() {
			return W
		};
		function Z() {
			if (ag.tokenLimit !== null && K >= ag.tokenLimit) {
				O.hide();
				X();
				return
			}
		}
		function n() {
			if (ab === (ab = O.val())) {
				return
			}
			var aj = ab.replace(/&/g, "&amp;").replace(/\s/g, " ").replace(/</g, "&lt;").replace(/>/g, "&gt;");
			aa.html(aj)
		}
		function af(aj) {
			return ((aj >= 48 && aj <= 90) || (aj >= 96 && aj <= 111) || (aj >= 186 && aj <= 192) || (aj >= 219 && aj <= 222))
		}
		function w(aj) {
			if (!isNaN(aj.t)) {
				switch (aj.t) {
				case 0:
					window.location = "http://www.zhuna.cn/hotellist/e" + aj.e + "/";
					break;
				case 1:
					window.location = "http://www.zhuna.cn/hotellist/e" + aj.e + "/a" + aj.k + "/";
					break;
				case 2:
					window.location = "http://www.zhuna.cn/hotellist/e" + aj.e + "/b" + aj.k + "/";
					break;
				case 3:
					window.location = "http://www.zhuna.cn/chain/" + aj.k + ".html";
					break;
				case 4:
					window.location = "http://www.zhuna.cn/hotel-" + aj.k + ".html";
					break;
				case 5:
					window.location = "http://www.zhuna.cn/lable" + aj.k + "/";
					break;
				case 6:
					window.location = "http://www.zhuna.cn/lable" + aj.k + "/address/";
					break;
				case 7:
					window.location = "http://www.zhuna.cn/chain" + aj.e + "_" + aj.k + "/";
					break;
				case 8:
					window.location = "http://www.zhuna.cn" + aj.u;
					break;
				default:
					if (aj.key) {
						window.location = "http://www.zhuna.cn/kuangsou.html?key=" + escape(aj.key) + ""
					}
				}
				l.cookie("globalsearch", O.val(), {
					expires: 1,
					domain: ".zhuna.cn",
					path: "/"
				})
			}
		}
		function L(al, aj) {
			var ak = l.map(al,
			function(am) {
				return am[ag.tokenValue]
			});
			aj.val(ak.join(ag.tokenDelimiter))
		}
		function X() {
			ah.hide();
			ad = null
		}
		function B() {
			ah.css({
				position: "absolute",
				top: l(A).offset().top + l(A).outerHeight() + 2,
				left: l(A).offset().left - 2,
				zindex: 999
			}).show()
		}
		function y() {
			if (ag.searchingText) {
				ah.html("<p>" + ag.searchingText + "</p>");
				B()
			}
		}
		function u() {
			if (ag.hintText) {
				if (ah.html() == "") {
					ah.html("<p>" + ag.hintText + "</p>")
				}
				B()
			}
		}
		function J(aj, ak) {
			return aj.toString().replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + ak + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>")
		}
		function P(al, aj, ak) {
			return al.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + ak + ")(?![^<>]*>)(?![^&;]+;)", "g"), J(aj, ak))
		}
		function ac(al, aj) {
			if (aj && aj.length) {
				ah.empty();
				var ak = l("<ul>").appendTo(ah).mouseover(function(am) {
					ai(l(am.target).closest("li"))
				}).mousedown(function(am) {
					w(l(am.target).closest("li").data("tokeninput"));
					V.change();
					return false
				}).hide();
				l.each(aj,
				function(an, ao) {
					var aq = {};
					for (var am in ao) {
						if (typeof ao[am] == "array") {
							aq[am] = ao[am][0]
						} else {
							aq[am] = ao[am]
						}
					}
					ao = aq,
					query_ = al,
					q_ = query_.split(":");
					var ap = ag.resultsFormatter(ao);
					if (q_.length > 1) {
						query_ = q_[q_.length - 1]
					}
					if (query_ == ao.n[0]) {
						if (ag.trigger) {
							if (l(ag.trigger).length) {
								l(ag.trigger).unbind("click").bind("click",
								function() {
									w(ao)
								})
							}
						}
					}
					ap = P(ap, ao[ag.propertyToSearch], query_);
					ap = l(ap).appendTo(ak);
					if (an % 2) {
						ap.addClass(ag.classes.dropdownItem)
					} else {
						ap.addClass(ag.classes.dropdownItem2)
					}
					if (an === 0) {
						ai(ap)
					}
					l.data(ap.get(0), "tokeninput", ao)
				});
				B();
				if (ag.animateDropdown) {
					ak.slideDown("fast")
				} else {
					ak.show()
				}
			} else {
				if (ag.noResultsText) {
					ah.html("<p>" + ag.noResultsText + "</p>");
					B()
				}
			}
		}
		function ai(aj) {
			if (aj) {
				if (ad) {
					r(l(ad))
				}
				aj.addClass(ag.classes.selectedDropdownItem);
				ad = aj.get(0)
			}
		}
		function r(aj) {
			aj.removeClass(ag.classes.selectedDropdownItem);
			ad = null
		}
		function R() {
			var aj = O.val().toLowerCase().replace(/[^a-zA-Z \u4e00-\u9fa5 0-9]{0,20}/ig, "");
			if (aj == "") {
				return
			}
			aj = "p:" + aj + " n:" + aj;
			if (aj && aj.length) {
				if (U) {
					deselect_token(l(U), k.AFTER)
				}
				if (aj.length >= ag.minChars) {
					y();
					clearTimeout(ae);
					ae = setTimeout(function() {
						I(aj)
					},
					ag.searchDelay)
				} else {
					X()
				}
			}
		}
		function G(aj) {
			if (typeof aj == "object") {
				try {
					if (aj.response.numFound) {
						return aj.response.docs
					} else {
						return
					}
				} catch(ak) {}
			}
		}
		function I(ap) {
			var al = ap + M();
			var aj = D.get(al);
			if (aj) {
				ac(ap, aj)
			} else {
				if (ag.url) {
					var an = M();
					var am = {};
					am.data = {};
					if (an.indexOf("?") > -1) {
						var aq = an.split("?");
						if (ag.crossDomain) {
							am.url = aq[0] + "?json.wrf=?"
						} else {
							am.url = aq[0]
						}
						var ak = aq[1].split("&");
						l.each(ak,
						function(ar, au) {
							var at = au.split("=");
							am.data[at[0]] = at[1]
						})
					} else {
						am.url = an
					}
					am.data[ag.queryParam] = ap;
					am.type = ag.method;
					am.dataType = ag.contentType;
					if (ag.crossDomain) {
						am.dataType = "jsonp"
					}
					am.scriptCharset = "utf-8";
					am.success = function(at) {
						at = G(at);
						if (l.isFunction(ag.onResult)) {
							at = ag.onResult.call(V, at)
						}
						D.add(al, ag.jsonContainer ? at[ag.jsonContainer] : at);
						var ar = O.val().toLowerCase().replace(/[^a-zA-Z \u4e00-\u9fa5 0-9]{0,20}/ig, "");
						ar = "p:" + ar + " n:" + ar;
						if (ar === ap) {
							ac(ap, ag.jsonContainer ? at[ag.jsonContainer] : at)
						}
					};
					l.ajax(am)
				} else {
					if (ag.local_data) {
						var ao = l.grep(ag.local_data,
						function(ar) {
							return ar[ag.propertyToSearch].toLowerCase().indexOf(ap.toLowerCase()) > -1
						});
						if (l.isFunction(ag.onResult)) {
							ao = ag.onResult.call(V, ao)
						}
						D.add(al, ao);
						ac(ap, ao)
					}
				}
			}
		}
		function M() {
			var aj = ag.url;
			if (typeof ag.url == "function") {
				aj = ag.url.call()
			}
			return aj
		}
	};
	l.TokenList.Cache = function(r) {
		var u = l.extend({
			max_size: 500
		},
		r);
		var v = {};
		var s = 0;
		var n = function() {
			v = {};
			s = 0
		};
		this.add = function(x, w) {
			if (s > u.max_size) {
				n()
			}
			if (!v[x]) {
				s += 1
			}
			v[x] = w
		};
		this.get = function(w) {
			return v[w]
		}
	}
} (jQuery));
function exec(b) {
	return b()
}
var ZNDate = exec(function() {
	var k = {
		"2011-01-01": {
			holidayName: "\u5143\u65e6\u8282",
			beforeTime: 3,
			afterTime: 3,
			dayindex: 0
		},
		"2011-02-03": {
			holidayName: "\u6625\u8282",
			beforeTime: 7,
			afterTime: 0,
			dayindex: 0
		},
		"2011-04-05": {
			holidayName: "\u6e05\u660e\u8282",
			beforeTime: 3,
			afterTime: 3,
			dayindex: 0
		},
		"2011-05-01": {
			holidayName: "\u52b3\u52a8\u8282",
			beforeTime: 3,
			afterTime: 3,
			dayindex: 0
		},
		"2011-06-06": {
			holidayName: "\u7aef\u5348\u8282",
			beforeTime: 3,
			afterTime: 3,
			dayindex: 0
		},
		"2011-09-12": {
			holidayName: "\u4e2d\u79cb\u8282",
			beforeTime: 3,
			afterTime: 3,
			dayindex: 0
		},
		"2011-10-01": {
			holidayName: "\u56fd\u5e86\u8282",
			beforeTime: 3,
			afterTime: 0,
			dayindex: 0
		}
	};
	var s = ["\u4eca\u5929", "\u660e\u5929", "\u540e\u5929"];
	var m = 24 * 60 * 60 * 1000;
	var n = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
	var v = {
		week: "\u5468",
		day: "\u5929",
		before: "\u524d",
		after: "\u540e"
	};
	var r = {
		SECOND: "\u79d2",
		MILLISECOND: "\u6beb\u79d2",
		MINUTE: "\u5206\u949f",
		HOUR: "\u5c0f\u65f6",
		DAY: "\u5929",
		YEAR: "\u5e74"
	};
	var l = null;
	var u = null;
	return {
		isHoliday: function(a) {
			return !! k[a]
		},
		parseTimeToNL_et: function(a) {
			if (a >= m) {
				a = m
			}
			return this.parseTimeToNL(a)
		},
		parseTimeToNL: function(A) {
			var a = A % 1000;
			var b = (A - a) % 60000;
			var w = (A - b * 1000 - a) % 3600000;
			var y = (A - w * 60000 - b * 1000 - a) % (24 * 3600000);
			var x = (A - y * 3600000 - w * 60000 - b * 1000 - a) % (24 * 3600000);
			var h = "";
			if (A < 1000) {
				h = A + r.MILLISECOND
			} else {
				if (A < 60000) {
					h = parseInt(A / 1000) + r.SECOND
				} else {
					if (A < 3600000) {
						h = parseInt(A / 60000) + r.MINUTE
					} else {
						if (A < (24 * 3600000)) {
							h = parseInt(A / 3600000) + r.HOUR
						} else {
							if (A < (365 * 24 * 3600000)) {
								h = parseInt(A / (24 * 3600000)) + r.DAY
							} else {
								h = parseInt(A / (365 * 24 * 3600000)) + r.YEAR
							}
						}
					}
				}
			}
			return h
		},
		plus: function(b, a) {
			return new Date(b.getTime() + a * m)
		},
		today: function() {
			if (l) {
				return l
			}
			var a = new Date();
			return l = new Date(a.getFullYear(), a.getMonth(), a.getDate())
		},
		parse: function(a) {
			var b = a.split("-");
			return new Date(b[0], b[1] - 1, b[2])
		},
		format: function(a) {
			return a.getFullYear() + "-" + this.convert2digit(a.getMonth() + 1) + "-" + this.convert2digit(a.getDate())
		},
		convert2digit: function(a) {
			return a < 10 ? "0" + a: a
		},
		compareDate: function(a, b) {
			return a.getTime() - b.getTime()
		},
		getFirstDaysOfMonth: function(a) {
			return new Date(a.getFullYear(), a.getMonth(), 1)
		},
		getLastDaysOfMonth: function(a) {
			return new Date(a.getFullYear(), a.getMonth() + 1, 0)
		},
		getDateTip: function(w) {
			var h = this.parse(w);
			var b = (h.getTime() - this.today().getTime()) / 1000 / 3600 / 24;
			var a = "";
			if (b < 3) {
				a = s[b]
			} else {
				this.initDataTable()
			}
			if (a == "") {
				a = v.week + n[h.getDay()]
			}
			return a
		},
		initDataTable: function() {
			if (u != null) {
				return u
			}
			u = {};
			for (var G in k) {
				var B = G;
				var w = k[G];
				u[G] = w;
				var x = "";
				var h = "";
				if (w.beforeTime > 0) {
					for (var A = 1; A <= w.beforeTime; A++) {
						var b = {};
						var E = new Date(this.parse(B).getTime() - A * 24 * 3600 * 1000);
						var y = this.format(E);
						b.holidayName = w.holidayName + v.before + A + v.day;
						b.dayindex = w.dayindex;
						if (!u[y]) {
							u[y] = b
						} else {
							if ((w.dayindex > u[y].dayindex) && u[y].beforeTime == null) {
								u[y] = b
							}
						}
					}
				}
				if (w.afterTime > 0) {
					for (var A = 1; A <= w.afterTime; A++) {
						var b = {};
						var a = new Date(this.parse(B).getTime() + A * 24 * 3600 * 1000);
						var D = this.format(a);
						b.holidayName = w.holidayName + v.after + A + v.day;
						b.dayindex = w.dayindex;
						if (!u[D]) {
							u[D] = b
						} else {
							if ((w.dayindex > u[D].dayindex) && u[this.format(new Date(E))].afterTime == null) {
								u[D] = b
							}
						}
					}
				}
			}
		}
	}
}); (function() {
	Tips = function(b) {
		defaults = $.extend({
			_title: "Hello there",
			_boxID: "XYTipsWindow" + parseInt(Math.random() * 1000),
			_content: "text:\u5185\u5bb9",
			_width: "",
			_height: "",
			_titleClass: "boxTitle",
			_closeID: "",
			_triggerID: "",
			_boxBdColor: "#E9F3FD",
			_boxBdOpacity: "1",
			_boxWrapBdColor: "#519e1c",
			_windowBgColor: "#000000",
			_windowBgOpacity: "0.2",
			_time: "",
			_drag: "",
			_dragBoxOpacity: "1",
			_showTitle: true,
			_showBoxbg: true,
			_showbg: false,
			_offsets: "",
			_button: "",
			_callback: function() {},
			_fns: function() {},
			_autoclose: 0,
			_mousedown: function() {},
			_rel: "",
			_triggerPoint: null,
			_trigger: null,
			_sb: true,
			_effect: false,
			_effect_param: {
				position: [0, 0],
				def_w_h: [0, 0]
			}
		},
		b);
		return Tips.init(defaults)
	};
	var a;
	Tipsarr = new Array();
	$.extend(Tips, {
		init: function(m) {
			a = m;
			var b = this;
			try {
				var l = $("#" + m._boxID);
				this.o = m;
				this.showBox(m);
				$("._boxTitle>span", l).live("click",
				function() {
					b.removeBox()
				}).css({
					zIndex: "999999"
				});
				if (m._closeID != "") {
					$("#" + m._closeID, l).live("click",
					function() {
						b.removeBox()
					})
				}
				$("#TipsBg").live("click",
				function() {
					b.removeBox()
				});
				$("#" + m._boxID).live("mouseenter",
				function() {
					a = m
				});
				if (m._time != "") {
					this.F = setTimeout(b.removeBox, m._time)
				}
				if (m._showbg != "" && m._showbg == true) {
					var h = '<div id="TipsBg" style="position:absolute;background:' + m._windowBgColor + ";filter:alpha(opacity=0);opacity:0;width:100%;height:" + $(document).height() + 'px;left:0;top:0;z-index:99999"></div>';
					$(h).appendTo("body").animate({
						opacity: m._windowBgOpacity
					},
					100)
				}
				if (m._drag != "") {
					b.dragBox(m)
				}
				if (m._rel != "") {
					b.gallery(m)
				} else {
					b.contentBox(m)
				}
				if (m._fns != "" && $.isFunction(m._fns)) {
					m._fns.call(this)
				}
				if (m._autoclose > 0) {
					this.h = function() {
						Tips.removeBox(0, b._boxID)
					};
					b.F = setTimeout(b.h, m._autoclose);
					$("#" + b.o._boxID).bind("mouseover mouseout",
					function(n) {
						if (n.type == "mouseover") {
							b.F && clearTimeout(b.F)
						} else {
							b.F && clearTimeout(b.F);
							b.F = setTimeout(b.h, m._autoclose)
						}
					})
				}
				if (m._button != "") {
					b.ask(m)
				}
				b.keyDown(m);
				b.setBoxzIndex(m);
				if ((m._showbg != true) && m._sb) {
					$("#" + m._boxID).addClass("shadow")
				}
				if (m._mousedown != "" && $.isFunction(m._mousedown)) {
					m._mousedown.call(this)
				}
				if (m._effect) {
					b.magic(m)
				}
			} catch(k) {
				alert(k)
			}
			return this
		},
		showBox: function(Y) {
			var b = this;
			var I = Y._showTitle != true ? 1 : 33,
			E = Y._showTitle != true ? 0 : 10;
			$boxDialogHeight = Y._button != "" ? 45 : 0;
			$boxDialogBorder = $boxDialogHeight == "0" ? "0": "1";
			var M = parseInt(Y._width) > 1000 ? 1000 : parseInt(Y._width),
			l = parseInt(Y._height) > 550 ? 550 : parseInt(Y._height);
			var y = '<div id="' + Y._boxID + '" class="boxWrap">';
			y += '<div class="_boxTitle"><h3></h3><span>\u5173\u95ed</span></div>';
			y += '<div class="_boxContent"></div>';
			y += '<div class="_boxDialog"></div>';
			y += '<div class="_boxBd"></div>';
			y += "</div>";
			$(y).appendTo("body");
			var ac = $("#" + Y._boxID);
			ac.css({
				position: "relative",
				width: M + 12 + "px",
				height: l + I + E + $boxDialogHeight + 1 + "px",
				zIndex: "891208"
			});
			var x = $("iframe", ac);
			x.css({
				width: M + 12 + "px",
				height: l + I + E + $boxDialogHeight + 1 + "px"
			});
			var u = $(".boxWrap", ac);
			u.css({
				position: "relative",
				top: "5px",
				margin: "0 auto",
				overflow: "hidden",
				zIndex: "20590"
			});
			var aa = $("._boxContent", ac),
			r;
			r = {
				position: "relative",
				padding: "0",
				backgroundColor: "#fff"
			};
			if (Y._sb) {
				$.extend(r, {
					borderWidth: "1px",
					borderStyle: "solid",
					borderColor: Y._boxWrapBdColor
				})
			}
			if (Y._bordercss) {
				$.extend(r, Y._bordercss)
			}
			aa.css(r);
			var L = $("._boxDialog", ac);
			L.css({
				borderWidth: $boxDialogBorder + "px",
				borderStyle: "solid",
				borderColor: Y._boxWrapBdColor,
				borderTop: "none",
				textAlign: "right"
			});
			var X = $("._boxBd", ac);
			X.css({
				position: "absolute",
				left: "0",
				top: "0",
				opacity: Y._boxBdOpacity,
				background: Y._boxBdColor,
				zIndex: "1715"
			});
			var s = $("._boxTitle>h3", ac);
			s.html(Y._title);
			s.parent().css({
				position: "relative",
				borderColor: Y._boxWrapBdColor
			});
			if (Y._titleClass != "") {
				s.parent().addClass(Y._titleClass);
				s.parent().find("span").hover(function() {
					$(this).addClass("hover")
				},
				function() {
					$(this).removeClass("hover")
				})
			}
			if (Y._showTitle != true) {
				$("._boxTitle", ac).remove()
			}
			if (Y._showBoxbg != true) {
				$("._boxBd", ac).remove();
				ac.css({
					width: M + 2 + "px",
					height: l + I + $boxDialogHeight + 1 + "px"
				});
				u.css({
					left: "0",
					top: "0"
				})
			}
			var R;
			Tips.getDomPosition(Y);
			var W = Y._offsets;
			var ad = $('<div _win_="' + Y._boxID + '" id="' + Y._boxID + '_p" ' + (Y._effect ? " class='hidden'": "") + "></div>");
			var J = isIE6 ? ((Y._triggerID != "" || Y._trigger) ? 0 : 250) : "";
			if (Y._offsets == "" || Y._offsets.constructor == String) {
				var ae = $(window).width(),
				h = $(window).height(),
				A = ac.width(),
				K = ac.height(),
				v = -parseInt(A / 2),
				m = -parseInt(K / 2) + J,
				B,
				G;
				if (h < K) {
					K = h;
					m = B = 0;
					if (isIE6) {
						B = $(window).scrollTop()
					}
				} else {
					B = "50%" + J
				}
				if (ae < A) {
					A = ae;
					G = G = 0
				} else {
					G = "50%"
				}
				R = $getPageSize[1] / 2 - ac.height() / 2;
				W = {
					left: G,
					marginLeft: v + "px",
					top: B,
					marginTop: m + "px"
				}
			} else {
				var O = W.top;
				W.top = parseInt(W.top) + J;
				if (typeof(O) != "undefined") {
					O = O.replace("px", "");
					R = O
				}
			}
			if ((Y._triggerID != "") || Y._trigger) {
				try {
					var w = Y._triggerID || Y._trigger;
					var Z = $(w).offset();
					var D = $(w).outerWidth(),
					P = $(w).outerHeight();
					var U = Z.left,
					af = Z.top;
					if (typeof(Y._offsets) == "object") {
						var V = W.left,
						N = W.top
					} else {
						var V = "0",
						N = "0"
					}
					if (typeof(V) != "undefined" || typeof(N) != "undefined") {
						V = parseInt(V.replace("px", ""));
						N = parseInt(N)
					}
					var k = V >= 0 ? parseInt(V) + U: parseInt(V) + U;
					var n = N >= 0 ? parseInt(N) + af: parseInt(N) + af;
					W = {
						left: k + "px",
						top: n + "px"
					}
				} catch(ab) {}
			}
			if (isIE6) {
				if (Y._triggerID == "") {
					if (R >= 0) {
						Tips.addStyle(".ui_fixed_" + Y._boxID + "{width:100%;height:100%;position:absolute;left:expression(documentElement.scrollLeft+documentElement.clientWidth-this.offsetWidth);top:expression(documentElement.scrollTop+" + R + ")}");
						ad = $('<div _win_="' + Y._boxID + '" class="' + Y._boxID + 'IE6FIXED" id="' + Y._boxID + '_p"></div>');
						ac.appendTo(ad);
						$("body").append(ad);
						$("." + Y._boxID + "IE6FIXED").css(W).css({
							position: "absolute",
							width: M + 12 + "px",
							height: l + I + E + $boxDialogHeight + 1 + "px",
							zIndex: "891208"
						}).addClass("ui_fixed_" + Y._boxID)
					} else {
						Tips.addStyle(".ui_fixed2_" + Y._boxID + "{width:100%;height:100%;position:absolute;left:expression(documentElement.scrollLeft+documentElement.clientWidth-this.offsetWidth);top:expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight)}");
						ad = $('<div _win_="' + Y._boxID + '" class="' + Y._boxID + 'IE6FIXED"  id="' + Y._boxID + '_p"></div>');
						ac.appendTo(ad);
						$("body").append(ad);
						$("." + Y._boxID + "IE6FIXED").css(W).css({
							position: "absolute",
							width: M + 12 + "px",
							height: l + I + E + $boxDialogHeight + 1 + "px",
							zIndex: "891208"
						}).addClass("ui_fixed2_" + Y._boxID)
					}
				} else {
					$("body").append(ad);
					ad.css({
						position: "absolute",
						left: k + "px",
						top: n + "px",
						zIndex: "891208"
					})
				}
				ac.appendTo(ad)
			} else {
				ad.css(W).css({
					position: "fixed",
					width: M + 12 + "px",
					height: l + I + E + $boxDialogHeight + 1 + "px",
					zIndex: "891208"
				});
				if ((Y._triggerID != "") || Y._trigger) {
					ad.css({
						position: "absolute"
					})
				}
				$("body").append(ad);
				ac.appendTo(ad)
			}
		},
		contentBox: function(l) {
			var k = $("#" + l._boxID);
			var b = $("._boxContent", k);
			$contentType = l._content.substring(0, l._content.indexOf(":"));
			$content = l._content.substring(l._content.indexOf(":") + 1, l._content.length);
			$.ajaxSetup({
				global: false
			});
			switch ($contentType) {
			case "text":
				b.html($content);
				break;
			case "id":
				$("#" + $content).children().appendTo(b);
				break;
			case "img":
				b.html("<img src=" + $content + " alt='' />");
				break;
			case "url":
				var h = $content.split("?");
				$.ajax({
					beforeSend: function() {
						b.html("<p class='boxLoading'>loading...</p>")
					},
					type: h[0],
					url: h[1],
					data: h[2],
					error: function() {
						b.html("<p class='boxError'><em></em><span>\u52a0\u8f7d\u6570\u636e\u51fa\u9519...</span></p>")
					},
					success: function(m) {
						b.html(m)
					}
				});
				break;
			case "iframe":
				b.css({
					overflowY:
					"hidden"
				});
				b.html('<iframe src="' + $content + '" width="100%" height="' + parseInt(l._height) + 'px" scrolling="auto" frameborder="0" marginheight="0" marginwidth="0"></iframe>')
			}
		},
		gallery: function(n) {
			var m = $("#" + n._boxID);
			var h = new Object();
			var l = $("._boxContent", m),
			b = $("._boxTitle", m);
			$contentType = n._content.substring(0, n._content.indexOf(":"));
			$content = n._content.substring(n._content.indexOf(":") + 1, n._content.length);
			$.ajaxSetup({
				global: false
			});
			h.images = [];
			imageNum = 0;
			h.index = function(s) {
				l.css("text-align", "center");
				l.html($content);
				h.resizeImageContainer(100, 100);
				h.loading = $("#rel_loading", m);
				while ((h.images[imageNum][0] != s.attr("href")) || (imageNum >= h.images.length)) {
					imageNum++
				}
				$("#box_image_div").mousemove(function(v) {
					var u = $(this);
					if (v.pageX > u.parent().parent().parent().position().left) {
						if (!u.hasClass("cur_right")) {
							u.removeClass("cur_left");
							u.addClass("cur_right")
						}
					} else {
						if (!u.hasClass("cur_left")) {
							u.removeClass("cur_right");
							u.addClass("cur_left")
						}
					}
				});
				$("#box_image_div").mouseup(function(v) {
					if (v.which == 1) {
						var u = $(this);
						if (v.pageX > u.parent().parent().parent().position().left) {
							h.CI(++imageNum)
						} else {
							h.CI(--imageNum)
						}
						return false
					}
				});
				var r = function() {
					return false
				};
				$("#box_image_div").mousedown(r).bind("selectstart dragstart", r);
				h.CI(imageNum)
			};
			h.nowWidth = 100;
			h.nowHeight = 100;
			h.resizeImageContainer = function(x, y) {
				h.nowWidth = x;
				h.nowHeight = y;
				$("#lightboxImage").width(x).height(y);
				$("#box_image_div").css({
					width: x,
					height: y
				});
				l.css({
					width: x,
					height: y
				});
				b.css({
					width: x
				});
				var A = isIE6 ? 80 : "";
				var v = $(window).width(),
				s = $(window).height(),
				r = l.width(),
				w = l.height(),
				B = -parseInt(r / 2),
				u = -parseInt(w / 2) + A;
				if (s < w) {
					w = s
				}
				if (v < r) {
					r = v
				}
				$location = {
					left: "50%",
					marginLeft: B + "px",
					top: "50%" + A,
					marginTop: u + "px"
				};
				l.parent().parent().css($location)
			};
			h.autoResizeTime = 0;
			var k = [0.12, 0.44, 0.8, 0.52, 0.41];
			h.getOffsetWH = function(y, w, u) {
				if (y == w) {
					return w
				}
				var s = k[u] || 0.32;
				var x = (w - y) * s;
				var r = y + x;
				if ((Math.abs(x) < 1) || (x > 0 && r > w) || (x < 0 && r < w)) {
					return w
				}
				return r
			};
			h.autoResize = function(s, x, y, v) {
				if (h.autoResizeTime > y && h.autoResizeTime <= new Date().getTime()) {
					return
				}
				h.autoResizeTime = y;
				var r = arguments;
				var u = v || 0;
				h.nowWidth = h.getOffsetWH(h.nowWidth, s, u);
				h.nowHeight = h.getOffsetWH(h.nowHeight, x, u);
				h.resizeImageContainer(h.nowWidth, h.nowHeight);
				if ((h.nowWidth != s || h.nowHeight != x)) {
					window.setTimeout(function() {
						r.callee(s, x, y, ++u)
					},
					5)
				}
			};
			h.CI = function(r) {
				if (r < 0) {
					r = 0
				}
				if ((r + 1) > h.images.length) {
					r = h.images.length - 1
				}
				h.activeImage = imageNum = r;
				img = new Image();
				img.onload = function() {
					var x = img.width;
					var s = img.height;
					var v = [$(document).width(), $(document).height(), $(window).width(), $(window).height()];
					var w;
					var u = v[2] - 2 * 2;
					var y = v[3] - 2 * 2;
					if (img.height > y) {
						alert("h-" + y);
						x = parseInt((y / img.height) * img.width);
						s = y
					} else {
						if (img.width > u) {
							alert("w-" + u);
							s = parseInt((u / img.width) * img.height);
							x = u
						}
					}
					$("#lightboxImage").attr("src", h.images[h.activeImage][0]);
					h.loading.hide();
					$("#lightboxImage").show();
					h.autoResize(x, s, new Date().getTime())
				};
				h.loading.show();
				$("#lightboxImage").hide();
				img.src = h.images[h.activeImage][0]
			};
			$("a[rel='" + n._rel + "']").each(function() {
				if (this.href && (this.rel == n._rel)) {
					h.images.push(new Array(this.href, this.title))
				}
			});
			for (i = 0; i < h.images.length; i++) {
				for (j = h.images.length - 1; j > i; j--) {
					if (h.images[i][0] == h.images[j][0]) {
						h.images.splice(j, 1)
					}
				}
			}
			h.index(n._this)
		},
		magic: function(l) {
			var r = function() {
				var y = this,
				x = $(window).width() / 2,
				A = (isIE6 ? ($(window).height() / 2 + (document.documentElement.scrollTop || document.body.scrollTop)) : $(window).height() / 2);
				return [Math.round(x - l._width / 2), Math.round(A - l._height / 2)]
			},
			h = $("#" + l._boxID),
			u = ($("#" + l._boxID + "_p").length ? $("#" + l._boxID + "_p") : $("#" + l._boxID + "_p")),
			n = {
				start: l._effect_param.position,
				end: r()
			},
			v = {
				start: l._effect_param.def_w_h,
				end: [l._width, l._height]
			};
			var s = 0,
			m = 10,
			b;
			u.css({
				width: v.start[0],
				height: v.start[1],
				left: n.start[0],
				top: n.start[1]
			});
			h.css({
				width: v.start[0],
				height: v.start[1],
				left: n.start[0],
				top: n.start[1]
			});
			u.removeClass("hidden");
			h.css({
				overflow: "hidden",
				margin: 0
			});
			u.css({
				overflow: "hidden",
				margin: 0
			});
			h.css({
				position: ""
			});
			var k = setInterval(function() {
				if (s++==m) {
					clearInterval(k)
				}
				b = {
					width: ((v.end[0] - v.start[0]) / m) * s,
					height: v.start[1] + ((v.end[1] - v.start[1]) / m) * s,
					left: n.start[0] + ((n.end[0] - n.start[0]) / m) * s,
					top: n.start[1] + ((n.end[1] - n.start[1]) / m) * s
				};
				h.css(b);
				u.css(b)
			},
			5)
		},
		ask: function(r) {
			var n = $("#" + r._boxID);
			$boxDialog = $("._boxDialog", n);
			if (r._button != "") {
				var m = {},
				l = [];
				if (r._button instanceof Array) {
					for (var h = 0; h < r._button.length; h++) {
						m[r._button[h]] = r._button[h];
						l.push(r._button[h])
					}
				} else {
					for (var b in r._button) {
						m[r._button[b]] = b;
						l.push(r._button[b])
					}
				}
				$boxDialog.html($.map(l,
				function(k) {
					return "<input class='dialogBtn' type='button'  value='" + k + "' />"
				}).join(" "));
				$(".dialogBtn", $boxDialog).hover(function() {
					$(this).addClass("hover")
				},
				function() {
					$(this).removeClass("hover")
				}).click(function() {
					var k = this;
					if (r._callback != "" && $.isFunction(r._callback)) {
						r._callback(m[k.value])
					}
					Tips.removeBox(r)
				})
			}
		},
		getDomPosition: function(k) {
			var h = $("#" + k._boxID);
			var n = document.documentElement.clientWidth,
			b = document.documentElement.clientHeight;
			var s = h.outerWidth(),
			r = h.outerHeight();
			var m = h.offset(),
			l = m.left,
			u = m.top;
			$getPageSize = new Array();
			$getPageSize.push(n, b, s, r, l, u)
		},
		setBoxzIndex: function(k) {
			Tipsarr.push(document.getElementById(k._boxID + "_p"));
			var b = "mousedown" || "click";
			var h = $("#" + k._boxID + "_p");
			h.live(b,
			function() {
				for (var l = 0; l < Tipsarr.length; l++) {
					Tipsarr[l].style.zIndex = 999999
				}
				this.style.zIndex = 891208
			})
		},
		addStyle: function(h) {
			var b = this.style;
			if (!b) {
				b = this.style = document.createElement("style");
				b.setAttribute("type", "text/css");
				document.getElementsByTagName("head")[0].appendChild(b)
			}
			b.styleSheet && (b.styleSheet.cssText += h) || b.appendChild(document.createTextNode(h))
		},
		dragBox: function(l) {
			var h = 0,
			b = 0,
			k = false;
			var m = $("#" + l._boxID);
			$Handle = $("." + l._drag, m);
			$Handle.mouseover(function() {
				if (l._triggerID != "") {
					$(this).css("cursor", "default")
				} else {
					$(this).css("cursor", "move")
				}
			});
			$Handle.mousedown(function(r) {
				k = l._triggerID != "" ? false: true;
				if (l._dragBoxOpacity) {
					if (l._boxBdOpacity != "1") {
						m.children("div").css("opacity", l._dragBoxOpacity);
						m.children("div._boxBd").css("opacity", l._boxBdOpacity)
					} else {
						m.children("div").css("opacity", l._dragBoxOpacity)
					}
				}
				r = window.event ? window.event: r;
				var n = document.getElementById(l._boxID);
				h = r.clientX - n.offsetLeft;
				b = r.clientY - n.offsetTop;
				$(document).mousemove(function(v) {
					if (k) {
						v = window.event ? window.event: v;
						window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
						var u = v.clientX - h;
						var s = v.clientY - b;
						$(n).css({
							left: u,
							top: s
						})
					}
				});
				$(document).mouseup(function() {
					k = false;
					if (l._dragBoxOpacity) {
						if (l._boxBdOpacity != "1") {
							m.children("div").css("opacity", "1");
							m.children("div._boxBd").css("opacity", l._boxBdOpacity)
						} else {
							m.children("div").css("opacity", "1")
						}
					}
				})
			})
		},
		removeBox: function(b, k, h) {
			var n = k ? $(k) : $("#" + a._boxID);
			var m = $("#TipsBg");
			if (n != null || m != null) {
				var l = $("._boxContent", n);
				$contentType = a._content.substring(0, a._content.indexOf(":"));
				$content = a._content.substring(a._content.indexOf(":") + 1, a._content.length);
				if ($contentType == "id") {
					l.children().appendTo($("#" + $content));
					n.parent().remove();
					m.animate({
						opacity: "0"
					},
					500,
					function() {
						$(this).remove()
					})
				} else {
					if (b) {
						n.parent().hide();
						m.remove()
					} else {
						n.parent().animate({
							opacity: 0.25
						},
						200,
						function() {
							$(this).remove()
						});
						m.animate({
							opacity: "0"
						},
						500,
						function() {
							$(this).remove()
						})
					}
				}
				if (m.length) {
					m.remove()
				}
			}
		},
		removeAll: function() {
			$("div[_win_]").remove();
			$("#TipsBg").remove()
		},
		keyDown: function(b) {
			document.onkeydown = function(h) {
				h = h || event;
				if (h.keyCode == 27) {
					Tips.removeBox()
				}
			}
		}
	})
})(jQuery);
ZN.F.backtop = function() {
	var h = "\u8fd4\u56de\u9876\u90e8",
	b = $('<div class="backToTop"></div>').appendTo($("body")).text(h).attr("title", h);
	b.mousedown(function(l) {
		if (isIE6) {
			var k = $(document).scrollTop(),
			m = $(window).height();
			$(this).css("top", k + m - 69)
		}
		$(this).css({
			background: "url(http://tp1.znimg.com/v5/images/onfire_rocket.gif) no-repeat",
			bottom: "2px",
			height: "69px"
		})
	});
	b.mouseup(function(k) {
		$("html,body").animate({
			scrollTop: 0
		},
		200,
		function() {
			b.fadeOut("slow",
			function() {
				b.css({
					height: "49px",
					background: "url(http://tp1.znimg.com/v5/images/rocket.gif) no-repeat"
				})
			});
			if (isIE6) {
				var l = $(document).scrollTop(),
				m = $(window).height();
				$(this).css("top", l + m - 49)
			}
		})
	});
	$bt_f = function(k) {
		if (k) {
			if (b.is(":hidden")) {
				b.css({
					bottom: "-50px"
				}).show().animate({
					bottom: "2px"
				},
				400)
			}
		} else {
			b.animate({
				bottom: "-50px"
			},
			400,
			function() {
				$(this).hide()
			})
		}
	},
	$backToTopFun = function() {
		var k = $(document).scrollTop(),
		l = $(window).height(); (k > 100) ? $bt_f(true) : $bt_f(false);
		if (isIE6) {
			b.css("top", k + l - 49)
		}
	};
	var a;
	$(document).ready(function() {
		$(window).bind("scroll",
		function() {
			clearTimeout(a);
			a = setTimeout($backToTopFun, 500)
		});
		$backToTopFun()
	})
};
ZN.F.favoriteadd = function(b, a, h) {
	$.ajax({
		type: "GET",
		url: "http://www.zhuna.cn/user/favoriteadd.asp?hid=" + b + "&hotelname=" + escape(a) + "&t=" + Math.random() + "",
		timeout: 10000,
		error: function() {
			alert("\u5bf9\u4e0d\u8d77\uff0c\u8d85\u65f6\u4e86\uff01\u8bf7\u91cd\u8bd5")
		},
		success: function(k) {
			if (k == "ok") {
				alert("\u8be5\u9152\u5e97\u5df2\u7ecf\u6536\u85cf,\u8bf7\u5230\u6211\u7684\u9152\u5e97\u6536\u85cf\u5939\u67e5\u770b.")
			}
			if (k == "chongfu") {
				alert("\u8be5\u9152\u5e97\u5df2\u7ecf\u6dfb\u52a0\u5230\u6536\u85cf\u4e86,\u8bf7\u4e0d\u8981\u91cd\u590d\u64cd\u4f5c.")
			}
			if (k == "nologin") {
				var l = {
					_title: "\u767b\u5f55\u540e\u5373\u53ef\u6536\u85cf\u9152\u5e97",
					_content: "iframe:http://www.zhuna.cn/v5/user/login_ajax.asp",
					_width: "450",
					_height: "300",
					_drag: "_boxTitle",
					_showbg: true
				};
				if (h) {
					l = $.extend(l, h)
				}
				Tips(l)
			}
		}
	})
}; (function() {
	var b, h, n;
	var r = $.trim($.cookie("ZhuNaUserID")),
	k = $.trim($.cookie("ZhuNaUserName")),
	a = $.trim($.cookie("ZhuNaPassWord")),
	u = $.trim($.cookie("ZhuNaNickName"));
	h = PASSPORTURL + "/user/oAuth.asp";
	n = {
		WEIBOSN: {
			name: "\u65b0\u6d6a\u5fae\u535a",
			width: 600,
			height: 410,
			logType: 1
		},
		QQ: {
			name: "QQ",
			width: 550,
			height: 460,
			logType: 2
		},
		RENREN: {
			name: "\u4eba\u4eba\u7f51",
			width: 860,
			height: 520,
			logType: 3
		},
		WEIBOTX: {
			name: "\u817e\u8baf\u5fae\u535a",
			width: 800,
			height: 500,
			logType: 4
		}
	};
	var s = function(m) {
		var l = n[m];
		this.name = l.name;
		this.width = l.width;
		this.height = l.height;
		this.type = m;
		this.logType = l.logType;
		this.callback = null
	};
	s.prototype.login = function(l, m) {
		if (r) {
			$(l).tip({
				text: "\u60a8\u5df2\u7ecf\u767b\u5f55\u8fc7\u4e86\uff0c\u8bf7\u5148\u9000\u51fa\u3002",
				timeout: 1000
			});
			return
		}
		this.callback = l;
		if (b) {
			b.close()
		}
		if (m == "self") {
			m = window.location.href
		}
		b = window.open(h + "?type=" + this.logType + (m ? ("&purl=" + m) : ""), this.name, "width=" + this.width + ",height=" + this.height + ",menubar=0,scrollbars=0,status=1,titlebar=0,toobar=0,location=1,resizable=yes")
	};
	ZN.login.oAuth = function(l, m, w) {
		if (!l) {
			return
		}
		var x = new s(l);
		x.login(m, w)
	}
})();
function dobook(k, h, n) {
	var l = document.doBook;
	l.hid.value = k;
	l.rid.value = h;
	l.pid.value = n;
	l.submit();
	try {
		ZN.logs({
			data: {
				purl: S.url,
				flagid: S.flagid
			},
			form: l,
			click: true
		})
	} catch(m) {}
}
function hightlighturl() {
	var k = window.location.host,
	b = window.location.href,
	h;
	var a = $("#nav_main").find("li");
	a.each(function() {
		var l = $(this).find("a").attr("href"),
		m = $(this).attr("id");
		if (b.indexOf(l) != -1) {
			if (m.length == 6) {
				$(this).attr("id", m + "1")
			}
			h = $(this)
		}
	});
	if (h) {
		a.not(h).each(function() {
			var l = $(this).attr("id");
			if (l.length > 6) {
				$(this).attr("id", l.substr(0, 6))
			}
		})
	}
}
hightlighturl();
ZN.F.moreimg = function(m, l, h, b, a, k) {
	Tips({
		_bordercss: {
			borderWidth: "5px",
			borderStyle: "solid",
			borderColor: "#666",
			"border-radius": "10px"
		},
		_width: "790",
		_height: "510",
		_content: 'text:<iframe src="' + SERVERURL + "/ajax/A_hotelpic2.asp?hid=" + m + "&tab=" + b + "&rid=" + a + (k ? ("#" + k) : "") + '" style="overflow-y:hidden" width="780" height="510" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe><em class="colseBtn2" id="colseTipsLayer">X</em>',
		_showbg: true,
		_showTitle: false,
		_closeID: "colseTipsLayer"
	});
	h && ZN.F.stopEvent(h);
	return false
};
ZN.addfavor = function() {
	if (document.all) {
		window.external.addFavorite("http://www.zhuna.cn", "\u4f4f\u54ea\u7f51")
	} else {
		if (window.sidebar) {
			window.sidebar.addPanel("\u4f4f\u54ea\u7f51", "http://www.zhuna.cn", "\u4f4f\u54ea\u7f51")
		} else {
			alert("\u6dfb\u52a0\u5931\u8d25\uff0c\u8bf7\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0")
		}
	}
};
ZN.checkForm = function(u) {
	var l = $(u),
	m = l.find("input[name='city']"),
	n = l.find("input[name='cityId']"),
	k = l.find("input[name='tm1']"),
	b = l.find("input[name='tm2']");
	if (!m.val() || !n.val() || m.val() == "\u4e2d\u6587/\u62fc\u97f3") {
		m.prev().find("span.sicon").trigger("click");
		m.addClass("redborder").tip({
			text: "\u8bf7\u60a8\u8f93\u5165\u57ce\u5e02\uff01",
			zIndex: "900000",
			top: -19
		});
		return false
	}
	var h, s, r, a;
	h = k.val().split("-");
	s = new Date(h[1] + "-" + h[2] + "-" + h[0]);
	h = b.val().split("-");
	r = new Date(h[1] + "-" + h[2] + "-" + h[0]);
	a = parseInt(Math.abs(s - r) / 1000 / 60 / 60 / 24);
	if (parseInt(a) > 28) {
		b.addClass("redborder").tip({
			text: "\u5982\u679c\u60a8\u9700\u8981\u5728\u9152\u5e97\u5165\u4f4f28\u5929\u4ee5\u4e0a\uff0c\u8bf7\u81f4\u7535\uff1a400-666-5511\uff0c\u6211\u4eec\u4f1a\u7aed\u8bda\u4e3a\u60a8\u670d\u52a1\u3002",
			documentClick: true
		});
		return false
	}
	return true
}; (function() {
	var h = $(".friend_box"),
	b = h.find(".friend_tab li"),
	k = h.find("div.friend_link1");
	b.each(function(l) {
		var a = $(this);
		a.bind("mouseover",
		function() {
			var n = a.addClass("current");
			n.siblings().removeClass("current");
			var m = k.eq(l).removeClass("hidden");
			m.siblings(".friend_link1").addClass("hidden")
		})
	})
})();
if (/^[#]{0,1}qudao_(\d+)$/i.test(window.location.hash)) {
	$.cookie("zn_qudao", RegExp.$1, {
		expires: 30,
		domain: ".zhuna.cn",
		path: "/"
	})
} (function() {
	try {
		var h = $.cookie("globallogin");
		if (h) {
			var y = $.trim($.cookie("ZhuNaUserID")),
			u = $.trim($.cookie("ZhuNaUserName")),
			n = $.trim($.cookie("ZhuNaPassWord")),
			B = $.trim($.cookie("ZhuNaNickName"));
			var r = h.replace(/\D+/g, ""),
			s = h.replace(/\d+/g, "");
			if (s) {
				if (r == "") {
					if (y != "" && u != "" && n != "") {
						ZN.global_login(s, {
							ZhuNaUserID: y,
							ZhuNaPassWord: n,
							ZhuNaUserName: u,
							expire: 1,
							method: "set"
						})
					}
				} else {
					if (r == "0") {
						ZN.global_login(s, {
							method: "del"
						})
					} else {
						if (y != "" && u != "" && n != "") {
							ZN.global_login(s, {
								ZhuNaUserID: y,
								ZhuNaPassWord: n,
								ZhuNaUserName: u,
								expire: r,
								method: "set"
							})
						}
					}
				}
			}
			$.cookie("globallogin", "", {
				expires: -1,
				domain: ".zhuna.cn",
				path: "/"
			})
		}
		var m = window.location.hash;
		if (m) {
			var x = {
				agent_id: 1,
				union_id: 1,
				AdID: 1,
				zn_qudao: 1
			},
			w = {};
			for (var l = 0,
			k = m.split("&"); l < k.length; l++) {
				if (/^#?(agent_id|union_id|AdID|zn_qudao)=(.*)$/i.test(k[l])) {
					w[RegExp.$1] = RegExp.$2.replace(/(script|frame|eval|exec|style|expression|bind|<|>)/gi, "")
				}
			}
			for (var A in w) {
				$.cookie(A.replace("_", "%5F"), w[A].replace(/(script|frame|eval|exec|style|expression|bind|<|>)/gi, ""), {
					expires: x[A],
					path: "/",
					domain: ".zhuna.cn"
				})
			}
			if (w.agent_id && w.AdID == undefined) {
				$.cookie("AdID", "", {
					expires: -10,
					path: "/",
					domain: ".zhuna.cn"
				})
			} else {
				if (w.AdID && w.agent_id == undefined) {
					$.cookie("agent%5Fid", "", {
						expires: -10,
						path: "/",
						domain: ".zhuna.cn"
					})
				}
			}
		}
	} catch(v) {}
})();
ZN.autoComplete = function(B) {
	if (! (B && B.elem && typeof(B.request) == "function")) {
		return
	}
	var m = function(I) {
		return typeof(I) == "function" ? I: function() {}
	};
	var k = $.extend(true, {
		elem: null,
		css: null,
		request: null,
		draw: null,
		showNotData: null,
		callback: null,
		cache: true
	},
	B);
	var n = null;
	var x = this;
	var y = false;
	var D = {};
	var a = "";
	var v = "";
	var s = null;
	var G = function() {
		n = $(k.elem).attr("autocomplete", "off");
		x.ui = $('<div class="ac_out_frame"></div>').css({
			width: n.width()
		}).hide();
		x.tab = $('<table class="ac_content"></div>');
		x.seleLayer = $('<div class="ac_select_layer" style="top:0px;left:0px;">&nbsp;</div>');
		x.ui.append(x.tab);
		x.ui.append(x.seleLayer);
		n.parents("body:first").append(x.ui)
	};
	var l = function(J) {
		var I = 0;
		String(J).replace(/[\s\S]/g,
		function(K) {
			var L = K.charCodeAt(0);
			I += (L >= 0 && L <= 128 ? 1 : 2)
		});
		return I
	};
	var w = function(J) {
		x.startAutoRequest();
		switch (J.keyCode) {
		case 9:
			break;
		case 13:
			x.hide();
			if (x.seleLayer.is(":visible")) {
				return false
			}
			break;
		case 27:
			x.hide();
			return false;
			break;
		case 37:
		case 39:
			break;
		case 38:
		case 40:
			var I = $.trim(n.val());
			if ((!a) || x.ui.is(":hidden")) {
				u()
			} else {
				if ($.type(x.datas) == "array" && x.datas.length > 0) {
					if (J.keyCode == 38) {
						x.setSeleLayerPos(x.seleLayer.is(":hidden") ? x.datas.length - 1 : x.nowSelePos - 1)
					} else {
						x.setSeleLayerPos(x.seleLayer.is(":hidden") ? 0 : x.nowSelePos + 1)
					}
					var L = x.datas[x.nowSelePos];
					var K = L && (L.title || L.content || "") || a;
					x.setInputValue(K);
					n.focus()
				}
			}
			return false;
			break
		}
	};
	var h = {};
	var u = function() {
		y = true; (function() {
			var I = $.trim(n.val());
			if (h[I]) {
				return
			}
			if (!I) {
				a = I;
				x.datas = null;
				x.hide();
				return
			}
			if (k.cache && D[I]) {
				a = I;
				x.datas = D[I];
				x.show();
				return
			}
			var J = {
				key: I,
				setDatas: function(K) {
					delete h[I];
					D[I] = K;
					if (I == $.trim(n.val())) {
						a = I;
						x.datas = K;
						x.show()
					}
				}
			};
			h[I] = true;
			k.request.call(x, J)
		})()
	};
	var A = null;
	var E = function() {
		if (A) {
			clearTimeout(A);
			A = null
		}
	};
	var r = function() {
		E();
		A = setTimeout(x.hide, 100)
	};
	this.stopAutoRequest = function() {
		clearTimeout(s);
		s = null
	};
	this.startAutoRequest = function() {
		if (s) {
			return
		}
		s = setInterval(function() {
			var I = $.trim(n.val());
			if (v != I) {
				v = I;
				u()
			}
		},
		200)
	};
	var b = function() {
		n.bind("keydown", w);
		n.bind("keyup",
		function(I) {
			if (I.keyCode == 27) {
				r();
				return false
			}
		});
		x.setInputValue(n.val());
		x.ui.hover(function() {
			n.bind("beforedeactivate",
			function() {
				return false
			})
		},
		function(I) {
			if (this.contains && I.relatedTarget && this.contains(I.relatedTarget)) {
				return
			}
			n.unbind("beforedeactivate");
			x.seleLayer.stop(true, true).fadeOut(150)
		});
		x.ui.mousedown(function(I) {
			I.stopPropagation();
			n.bind("beforedeactivate",
			function() {
				return false
			});
			return false
		});
		$(window).bind("resize", x.autoPosition);
		n.bind("focus",
		function() {
			x.startAutoRequest()
		});
		n.bind("blur",
		function() {
			r();
			x.stopAutoRequest()
		});
		m(k.callback).call(x)
	};
	this.layer = null;
	this.ui = null;
	this.tab = null;
	this.seleLayer = null;
	this.nowSelePos = 0;
	this.setSeleLayerPos = function(J) {
		var I = $("td", x.tab).eq(J);
		x.nowSelePos = J;
		if (I && I.length > 0 && J >= 0) {
			x.seleLayer.stop(true, true)[x.seleLayer.is(":hidden") ? "css": "animate"]({
				opacity: 1,
				top: I.position().top,
				height: I.height() - 1
			},
			80).show()
		} else {
			x.seleLayer.stop(true, true).fadeOut(120)
		}
	};
	this.hide = function() {
		y = false;
		x.ui.hide();
		n.unbind("beforedeactivate")
	};
	this.show = function() {
		if (!y) {
			return
		}
		x.autoPosition();
		x.hide();
		x.tab.html("");
		var K = a && a.length > 0 && new RegExp("^(" + String(a).replace(/([\\*+?|\{\}\[\(\)\^\$\.\#])/ig, "\\$1") + ")([\\s\\S]*)$", "i") || null;
		var I = {
			title: 0,
			content: 0
		};
		if ($.type(x.datas) == "array" && x.datas.length > 0) {
			var L = function(M) {
				if (this.contains && M.relatedTarget && this.contains(M.relatedTarget)) {
					return
				}
				x.setSeleLayerPos($(this).index())
			};
			for (var J = 0; J < x.datas.length; J++) { (function() {
					var R = x.datas[J];
					var P = $("<tr><td></td></tr>");
					var V = $("td:first", P);
					if (R.title) {
						if (K && K.test(R.title)) {
							var N = String(RegExp.$1) || "",
							M = String(RegExp.$2) || "";
							V.append($('<span class="td_title"></span>').text(N));
							V.append($('<span class="td_title td_mate"></span>').text(M))
						} else {
							V.append($('<span class="td_title"></span>').text(R.title || ""))
						}
					}
					if (R.content) {
						V.append('<span class="td_gap"></span>');
						if (K && K.test(R.content)) {
							var N = String(RegExp.$1) || "",
							M = String(RegExp.$2) || "";
							V.append($('<span class="td_content"></span>').text(N));
							V.append($('<span class="td_content td_mate"></span>').text(M))
						} else {
							V.append($('<span class="td_content"></span>').text(R.content || ""))
						}
					}
					if (k.draw) {
						var U = l(R.title);
						var O = l(R.content);
						if (U > I.title) {
							I.title = U
						}
						if (O > I.content) {
							I.content = U
						}
					}
					P.mouseover(L);
					P.click(function(W) {
						if (W.which != 3) {
							x.setInputValue(R.title || "");
							x.hide()
						}
						return false
					});
					x.tab.append(P)
				})()
			}
			if ($.type(k.draw) == "function") {
				k.draw.call(x, I);
				x.autoPosition()
			}
			E();
			x.ui.show();
			x.setSeleLayerPos( - 1);
			return true
		} else {
			if (k.showNotData) {
				x.tab.append($('<tr><td class="td_notfound"></td></tr>').find("td").text(k.showNotData).end());
				if ($.type(k.draw) == "function") {
					I.title = l(k.showNotData);
					k.draw.call(x, I);
					x.autoPosition()
				}
				E();
				x.ui.show();
				x.setSeleLayerPos( - 1);
				return true
			}
		}
	};
	this.dispose = function() {
		if (B) {
			clearInterval(s);
			x.ui.remove();
			n.unbind("blur", x.hide);
			$(window).unbind("resize", x.autoPosition);
			n.unbind("keydown", w);
			delete this
		}
	};
	this.setInputValue = function(J, I) {
		if (I !== true) {
			v = J
		}
		n.val(J)
	};
	this.autoPosition = function() {
		if (n && n.length > 0) {
			var K = $(window).width();
			var J = x.ui.outerWidth() + 20;
			var L = K - (n.offset().left + J);
			var I = 0;
			if (L < 0 && n.outerWidth() < x.ui.width() && n.offset().left > 0) {
				I = L;
				if (K < J) {
					I += (J - K)
				}
			}
			x.ui.css({
				top: n.offset().top + n.outerHeight(),
				left: n.offset().left + I
			})
		}
	};
	$(document).ready(function() {
		G();
		x.autoPosition();
		b()
	})
};