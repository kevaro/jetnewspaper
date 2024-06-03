const jo = {};
!function JetThemeScript() {
    var U = window, a2 = document, b = setTimeout, cD = clearTimeout, cG = Date, cs = Math, y = parseInt, B = btoa, S = escape, g = unescape, cg = encodeURIComponent, o = decodeURIComponent, ao = RegExp, cp = XMLHttpRequest, bE = alert, bZ = localStorage, aJ = JSON, bh = Image, bl = setInterval, di = clearInterval, aQ = "forEach", bv = "innerHTML", cd = "tagName", E = "getElementById", v = "getElementsByClassName", bQ = "querySelector", c5 = "querySelectorAll", bN = "documentElement", cM = "childNodes", b9 = "createElement", J = "className", L = "replace", co = "indexOf", t = "lastIndexOf", bk = "EventListener", cH = "add", aY = "remove", cN = "id", bM = "key", aX = "type", aq = "parse", c6 = "length", ag = "call", b2 = "slice", K = "reset", aL = "scroller", aD = "push", cx = "Time", al = "Date", bq = "Month", bo = "FullYear", aC = "clientX", aB = "clientY", n = "pageX", m = "pageY", aZ = "scrollLeft", ce = "scrollTop", an = "onreadystatechange", cK = "readyState", bg = "Attribute", bB = "set", bX = "get", aH = "post", bf = "has", N = "checked", aE = "focus", cu = "height", cI = "offsetWidth", cP = "offsetHeight", aK = "toFixed", aR = "pageYOffset", c7 = "appendChild", bW = "firstChild", cO = "insert", cf = "Before", aO = "value", aa = "safe", aU = "match", ah = "href", bA = "src", ad = "onload", ay = "onerror", T = "target", cl = "closest", bw = "location", bs = "split", bp = "trim", cq = "open", by = "send", bC = "random", dh = "status", bI = "toString", a9 = "parentElement", az = "activeElement", cE = "preventDefault", bt = "substr", cZ = "setRequestHeader", aP = "responseText", cQ = "response", br = "body", a5 = "title", av = "test", aN = "container", a6 = "ceil", aw = "floor", bP = "round", at = "min", c3 = "map", cR = "cookie", ae = "contains", bx = "toUTCString", ci = "textContent", aI = "elementFromPoint", a4 = "Item", b6 = "nextSibling", df = "load", bG = "true", F = "false", bb = "valid", cm = "scroll", O = "click", ba = "submit", b0 = "blur", cc = "mousemove", x = "mouseup", aj = "touchstart", a8 = "mousedown", be = "change", q = "complete", dg = "undefined", bJ = "function", bS = "Content-Type", Y = "text/html", cC = "application/x-www-form-urlencoded", k = "pagination", c2 = "loadCustomPosts", p = "custom_posts", X = "config", de = "adsbygoogle", b1 = "analytics", A = "jet", cJ = "https://", ak = "www.blogger.com/", aG = "-rw", ch = "devicePixelRatio", d = "mount", db = typeof isPreview !== dg ? isPreview : false, cv = typeof siteUrl !== dg ? siteUrl[bt](0, siteUrl[c6] - 1)[L](/(^\w+:|^)\/\//, "") : "", aS = cJ + cv, a0 = typeof currentUrl !== dg ? currentUrl : "", z = typeof blogId !== dg ? blogId : "", cS = typeof blogTitle !== dg ? blogTitle : "", bL = typeof titleSeparator !== dg ? titleSeparator : " - ", cz = typeof pageTitle !== dg ? pageTitle : "Page", D = typeof analyticId !== dg ? analyticId : false, C = typeof caPubAdsense !== dg ? caPubAdsense[L](/^\D+/g, "") : false, a3 = C ? "ca-pub-" + C : false, ca = typeof innerAdsDelimiter !== dg ? innerAdsDelimiter : "p,br,div", b8 = typeof ignoreAdsDelimiter !== dg ? ignoreAdsDelimiter : "pre,ul,ol,li,table,blockquote", bF = typeof autoTOC !== dg ? autoTOC : false, ax = typeof toc_temp === bJ ? toc_temp : false, u = typeof positionTOC !== dg ? positionTOC : false, bu = typeof ArCallback === bJ ? ArCallback : false, ct = "Modder", a7 = "firebase", w = "8.4.2", cY = typeof licenseKey !== dg ? licenseKey : "", c = typeof firebaseUrl !== dg ? firebaseUrl : "", bV = typeof safeAds !== dg ? safeAds : false, b5 = typeof limitAdsClick !== dg ? limitAdsClick : 3, bj = typeof timeAdsClick !== dg ? timeAdsClick : 10, bi = typeof blockAdsClick !== dg ? blockAdsClick : 6, bn = typeof generate_url_temp === bJ ? generate_url_temp : false, bH = typeof safeLinkUrl !== dg ? safeLinkUrl : aS, c0 = typeof safeLinkGenerate !== dg ? safeLinkGenerate : ".safelink", ar = typeof ignoreSafeLink !== dg ? ignoreSafeLink : "", af = "www", cF = "app", W = "please", bD = "license", bd = "Newspaper";

    function R(j, i) {
        return (" " + j[J] + " ")[co](" " + i + " ") > -1;
    }

    function Q(dj, j) {
        if (!R(dj, j)) {
            var i = dj[J];
            if (i != "") j = " " + j;
            dj[J] = i + j;
        }
    }

    function bU(j, i) {
        j[J] = j[J][L](new ao("(?:^|\\s)" + i + "(?!\\S)"), "")[bp]();
    }

    function bR(j, i) {
        (R(j, i) ? bU : Q)(j, i);
    }

    function aW(j, i) {
        Q(j, "d-block");
        b(function() {
            Q(j, i);
        }, 100);
    }

    function cB(dj, j, i) {
        bU(dj, j);
        b(function() {
            bU(dj, "d-block");
        }, i || 300);
    }

    function I(dj, j) {
        for (var i = 0; i < dj[c6]; i++) {
            if (dj[i] === j) {
                return true;
            }
        }
        return false;
    }

    function aT() {
        return (cs  ;
    }

    function cT(j, i) {
        return !!(j = new ao("[?&]" + j + "=([^&#=]*)"))[av](i) && i[aU](j)[1];
    }

    function ab(dn, dr, dq, dp) {
        dn = y(dn);
        dr = y(dr);
        dq = y(dq);
        dp = y(dp);
        var j, dk, dl = cs[a6](dn / dq);
        if (dr < 1) dr = 1;
        else if (dl < dr) dr = dl;
        if (dl <= dp) {
            j = 1;
            dk = dl;
        } else {
            dn = cs[aw](dp / 2);
            dq = cs[a6](dp / 2) - 1;
            if (dr <= dn) {
                j = 1;
                dp = dp;
            } else if (dl <= dr + dq) {
                j = dl - dp + 1;
                dk = dl;
            } else {
                j = dr - dn;
                dk = dr + dq;
            }
        }
        var ds = (dr - 1) * dq;
        dp = cs[at](ds + dq - 1, dn - 1);
        var dj = [];
        for (var dm = 0; dm < dk + 1 - j; dm++) {
            dj[aD](dm);
        }
        return dj = dj[c3](function(i) {
            return j + i;
        }), { totalItems: dn, currentPage: dr, pageSize: dq, totalPages: dl, startPage: j, endPage: dk, startIndex: ds, endIndex: dp, pages: dj };
    }

    function c1(dl) {
        var dj = dl.slice();
        for (var j = dj[c6] - 1; j > 0; j--) {
            var i = cs[aw](cs[bC]() * (j + 1));
            var dk = dj[j];
            dj[j] = dj[i];
            dj[i] = dk;
        }
        return dj;
    }

    function dd(dl, dj, j, i) {
        var dk = new cG;
        j = i == "minutes" ? 60 * j * 1000 : i == "hours" ? 60 * j * 60 * 1000 : 24 * j * 60 * 60 * 1000;
        dk[bB + cx](dk[bX + cx]() + j);
        dk = "expires=" + dk[bx]();
        a2[cR] = dl + "=" + dj + "; " + dk + "; path=/";
    }

    function s(i) {
        i = a2[cR][aU](new ao("(^| )" + i + "=([^;]+)"));
        if (i) {
            return i[2];
        }
    }

    function aA(i) {
        try {
            return aJ[aq](i);
        } catch (i) {
            return false;
        }
    }

    !function(j) {
        var i = new bh;
        i[ad] = i[ay] = function() {
            j(i[cu] == 2);
        };
        i[bA] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }(function(i) {
        if (!i) aG = "";
    });

    var c4 = a2[E]("header"),
        ck = a2[E]("search-toggle"),
        ac = a2[E]("search-header"),
        l = a2[E]("navbar-toggle"),
        bm = a2[E]("navbar"),
        aF = a2[E]("back-to-top"),
        da = a2[E]("dark-toggler"),
        bc = a2[bQ]("html"),
        cj = a2[E]("comment-button"),
        am = a2[E]("threaded-comment-form"),
        cX = a2[E]("comment-editor"),
        cU = a2[E]("comment-editor-src"),
        V = a2[E]("comment-script"),
        bT = a2[c5](".comment-reply"),
        P = a2[c5](".entry-text noscript"),
        cr = a2[c5](".contact-form-blogger"),
        aM = a2[E]("ads-post"),
        cL = a2[E]("post-body"),
        aV = a2[bQ](".related-posts"),
        a1 = a2[bQ](".related-inline"),
        ap = cT("page", a0),
        cy = bZ && bZ[bX + a4]("lazy") == 1,
        ai = a2[c5](".generate-url"),
        bO = a2[c5](".splide"),
        a = a2[c5](c0),
        cn = s("j" + bM),
        c8 = s("j" + bb),
        cW = s("j" + aa) ? y(s("j" + aa)) : 0,
        f = cJ + af + "." + A + ct + ".com/" + cF + "?" + bA + "=";

    !function(i) {
        U[cH + bk](cm, function() {
            var dj, j = this[aR];
            if (j < i && R(c4, "header-hidden")) {
                dj = b(function() {
                    bU(c4, "header-hidden");
                }, 500);
            } else if (i < j && R(c4, "header-animate")) {
                cD(dj);
                Q(c4, "header-hidden");
            }
            i = j;
        }, false);
    }(0);

    var M = function(dl) {
        var dp, dn, dm, i, dj, dk, dq, j;
        if (dl[cd] == "IMG") {
            j = dl[bX + bg]("data-src");
            if (j[aU](/(bp.blogspot|googleusercontent)/)) {
                dq = cy ? U[ch] && U[ch] > 1 ? U[ch] : 1.5 : 1;
                dp = (dl ;
                dn = (dl ;
                dm = (dl ;
                i = (dl ;
                dj = j[bs]("/");
                dk = j[t]("=") + 1;
                dq = "";
                dq = R(dl[a9], "ratio") ? "w" + dp + "-h" + i + "-c" + aG : "s" + (dq = dp < 30 ? dn < 30 ? dm : dn : dp) + aG;
                if (j[aU](/(img\/a|proxy\/)/)) {
                    j = dk ? j[b2](0, dk) + dq : j + "=" + dq;
                } else {
                    j = j[L](dj[dj[c6] - 2], dq);
                }
                dl[bB + bg]("data-src", j);
            } else if (j[aU](/(img.youtube|i.ytimg)/)) {
                j = j[bt](0, j[t]("/")) + "/mqdefault.jpg";
                dl[bB + bg]("data-src", j);
            }
        }
    };

    if (a[c6] > 0) {
        for (var b7 = 0; b7 < a[c6]; ++b7) {
            var bK, c9 = a[b7], cV = c9[bX + bg]("href");
            if (cV && ar) {
                var r = ar[bs](",");
                for (var b4 = 0; b4 < r[c6]; b4++) {
                    if (cV[co](r[b4]) > -1) {
                        cV = "";
                        break;
                    }
                }
            }
            if (cV) {
                bK = cg(S(U.btoa(cV)));
                c9[bB + bg]("href", bH + "?sf=" + bK);
            }
        }
    }

    var dc = function(dl) {
        var ds, dj, j, dm, dn, dr, dp, dq;

        function dk(dw, du, dt) {
            var i = a2[b9]("li"),
                dv = a2[b9]("span");
            Q(dv, "btn btn-sm rounded-pill jt-icon-center");
            dv[bv] = dt || dw;
            dv[bB + bg]("data-page", dw);
            if (dw == du) {
                Q(dv, "jt-btn-primary");
            } else {
                Q(dv, "jt-btn-light hover-btn-primary");
                dv[cH + bk](O, function(dy) {
                    dy[cE]();
                    dq = dv[bX + bg]("data-page");
                    var dx;
                    if (dq == 1) {
                        dx = dj ? aS + "/search" + dm + "?max-results=" + ds + "&page=" + dq : aS;
                        U[bw][ah] = dx;
                    } else {
                        dx = (dq - 1) * ds;
                        Defer.js(aS + "/feeds/posts/summary/" + j + "?start-index=" + dx + "&alt=json&callback=jo." + k + "_date&max-results=1");
                    }
                });
            }
            i[c7](dv);
            return i;
        }

        if (dl[bX + bg]("data-pagination") != F) {
            ds = dl[bX + bg]("data-posts");
            dj = dl[bX + bg]("data-label");
            j = dj ? "-/" + cg(dj) + "/?" : "";
            dm = dj ? "/label/" + dj : "";
            Defer.js(aS + "/feeds/posts/summary/" + j + "?alt=json&callback=jo." + k + "_" + bM + "&max-results=1");
            dn = cT("max-results", a0);
            dr = cT("page", a0);
            dp = dn || ds;
            dq = dr || 1;
            jo[k + "_" + bM] = function(dw) {
                var du = dw.feed,
                    dt = y(du.openSearch$totalResults.$t);
                if (ds < dt) {
                    var dw = ab(dt, dq, dp, 5),
                        i = a2[b9]("ul"),
                        du = dw.totalPages;
                    if (dw.currentPage != 1) {
                        var dt = dk(dw.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
                        i[c7](dt);
                    }
                    if (!I(dw.pages, 1)) {
                        dx = dk(1, dw.currentPage, "1 . .");
                        i[c7](dx);
                    }
                    for (var dv = 0; dv < dw.pages[c6]; dv++) {
                        var dx = dk(dw.pages[dv], dw.currentPage);
                        i[c7](dx);
                    }
                    if (!I(dw.pages, du)) {
                        dx = dk(du, dw.currentPage, ". . " + du);
                        i[c7](dx);
                    }
                    if (dw.currentPage != du) {
                        du = dk(dw.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
                        i[c7](du);
                    }
                    dl[bv] = "";
                    Q(i, "pagination mb-0");
                    dl[c7](i);
                    bU(dl, "visually-hidden");
                }
            };
            jo[k + "_date"] = function(i) {
                i = i.feed.entry[0];
                i = (i.published.$t[bt](0, 19) + i.published.$t[bt](23, 29))[L]("+", "%2B");
                i = aS + "/search" + dm + "?updated-max=" + i + "&max-results=" + dp + "&page=" + dq;
                U[bw][ah] = i;
            };
        } else {
            bU(dl, "visually-hidden");
        }
    };

    function cw(dj, j) {
        var i = new cp;
        i[cq](bX, dj);
        i[cZ](bS, Y);
        i[by](null);
        i[cH + bk](df, function() {
            var dk = i[aP][aU](/<title>(.*?)<\/title>/);
            j[bv] = dk[1][L](bL + cS, "");
        });
    }

    jo[c2] = function(dn) {
        var j = aT(),
            dm = dn[bX + bg]("data-label"),
            dk = dn[bX + bg]("data-title"),
            dl = dn[bX + bg]("data-items"),
            ds = dn[bX + bg]("data-shuffle"),
            i = dn[bX + bg]("data-no-item"),
            dj = dn[bX + bg]("data-func"),
            dr = dn[bX + bg]("data-callback"),
            dt = i ? y(dl) + 1 : dl,
            dq = dm || dn[bv],
            dp = dq[bs](","),
            dm = "";
        if (dp[c6] > 1) {
            dm = dq ? "-/" + cg(dp[cs[aw](cs[bC]() * dp[c6])]) + "/?" : "?";
        } else {
            dm = dq && dq != F ? "-/" + cg(dq[bp]()) + "/?" : "?";
        }
        Defer.js(aS + "/feeds/posts/summary/" + dm + "alt=json&callback=jo." + p + "_" + bM + "_" + j + "&max-results=" + dt);
        jo[p + "_" + bM + "_" + j] = function(dz) {
            var dD = y(dz.feed.openSearch$totalResults.$t),
                dC = dz.feed.category;
            if (dD > 0) {
                var dB = { title: dk, posts: [], categories: dC },
                    du = dz.feed.entry,
                    dw = 0,
                    dx = 0;
                for (; dx < du[c6]; ++dx) {
                    var dE, dv, dy = du[dx],
                        dA = dy.link[dy.link[c6] - 1][ah];
                    if (dw == dl) {
                        break;
                    }
                    if (dA != i) {
                        dw++;
                        dE = {};
                        dE.grup_id = j;
                        dE.url = dA;
                        dE.title = dy[a5].$t;
                        dE.summary = dy.summary.$t[bp]();
                        dE.img = dy.media$thumbnail && dy.media$thumbnail.url;
                        dE.author = dy.author[0].name.$t;
                        dE.comment = dy.thr$total && dy.thr$total.$t;
                        dE.label = dy.category;
                        dv = dy.published.$t;
                        dy = new cG(dv);
                        dv = dy[bX + al]();
                        dA = dy[bX + bq]() + 1;
                        dy = dy[bX + bo]();
                        dE.date = dy + "/" + dA + "/" + dv;
                        dB.posts[aD](dE);
                    }
                }
                dz = U[dj];
                if (typeof dz === bJ && dB.posts[c6] > 0) {
                    if (ds) {
                        dB.posts = c1(dB.posts)[b2](0, ds);
                    }
                    dn[bv] = dz(dB)[bp]();
                    bU(dn, "visually-hidden");
                    Defer.dom(".lazy-" + j, 1, "loaded", M);
                    if (!dr || (dz = U[dr]) && typeof dz === bJ) dz();
                }
            }
        };
    };

    var G = function(dl) {
        for (var dj = dl[c5]("a"), j = 0; j < dj[c6]; ++j) {
            var i = dj[j],
                dk = i[ah],
                dm = a2[b9]("span");
            Q(dm, "d-block fw-bold pt-2 jt-text-primary");
            i[c7](dm);
            cw(dk, dm);
        }
    };

    function au() {
        (ck && ck[N] || l && l[N] ? bU : Q)(c4, "header-animate");
    }

    function H(dj, j) {
        function dk(dl) {
            if (!dj[ae](dl[T])) {
                j();
                i();
            }
        }
        var i = function() {
            a2[aY + bk](O, dk);
        };
        a2[cH + bk](O, dk);
    }

    function Z(i) {
        if (i != cU[ah]) {
            Q(am, "loader");
            cU[ah] = i;
            cX[bA] = i;
        }
        if (R(am, "d-none")) {
            bU(am, "d-none");
            i = V[aO][aU](/<script.*?src='(.*?)'/)[1];
            Defer.js(i, "comment-js", 500, function() {
                BLOG_CMT_createIframe(cJ + ak + "rpc_relay.html");
            });
        }
    }

    if (ck) {
        ck[cH + bk](be, function() {
            au();
            if (this[N]) {
                b(function() {
                    a2[E]("search-input")[aE]();
                }, 100);
                H(ac, function() {
                    ck[N] = false;
                    au();
                });
            }
        });
    }

    if (l) {
        l[cH + bk](be, function() {
            au();
            if (this[N]) {
                aW(bm, "show");
                H(bm, function() {
                    l[N] = false;
                    au();
                    cB(bm, "show");
                });
            } else {
                cB(bm, "show");
            }
        });
    }

    if (da) {
        da[cH + bk](O, function(i) {
            i[cE]();
            bR(bc, "dark-mode");
            if (bZ) {
                bZ[bB + a4]("theme", R(bc, "dark-mode") ? "dark" : "light");
            }
        });
    }

    U[cH + bk](cm, function() {
        (this[aR] >= 1 && c4 ? Q : bU)(c4, "shadow-sm");
        (this[aR] >= 1000 && aF ? bU : Q)(aF, "d-none");
    }, false);

    if (cX) {
        cX[cH + bk](df, function() {
            bU(am, "loader");
        });
    }

    if (cj) {
        cj[cH + bk](O, function(i) {
            i[cE]();
            Z(this[ah]);
            if (am[a9][cN] != "add-comment") {
                a2[E]("add-comment")[c7](am);
            }
        });
    }

    for (b7 = 0; b7 < bT[c6]; ++b7) {
        bT[b7][cH + bk](O, function(i) {
            i[cE]();
            i = this[bX + bg]("data-comment-id");
            Z(this[ah]);
            if (am[a9][cN] != "c" + i) {
                a2[E]("c" + i)[c7](am);
            }
        });
    }

    for (b7 = 0; b7 < cr[c6]; ++b7) {
        var bz = cr[b7];
        bz[cH + bk](ba, function(dk) {
            dk[cE]();
            var dj = dk[T];
            Q(dj, "loading");
            var j = new FormData(dj),
                i = "blogID=" + z;
            j[aQ](function(dm, dl) {
                i += "&" + cg(dl) + "=" + cg(dm);
            });
            dk = cJ + ak + "contact-form.do";
            j = new cp;
            j[cq](aH, dk);
            j[cZ](bS, cC);
            j[by](i);
            j[an] = function() {
                bU(dj, "loading");
                if (this[cK] === 4 && this[dh] === 200 && this[cQ] != "") {
                    var dl = aA(this[aP][bp]());
                    if (dl && dl.details.emailSentStatus == "true") {
                        dj[K]();
                        bU(dj, "send-error");
                        Q(dj, "send-success");
                    } else {
                        bU(dj, "send-success");
                        Q(dj, "send-error");
                    }
                }
            };
        });
    }

    function h() {
        dd("j" + bM, 14);
        dd("j" + bb, false, 14);
    }

    function cA(i) {
        i = aA(i);
        if (i && i[bM] == cv && i[aX] == bd) {
            dd("j" + bb, true, 14);
            dd("j" + bM, 14);
        } else {
            h();
        }
    }

    !function(j, i) {
        if (typeof define === bJ && define.amd) {
            define(["exports"], i);
        } else if (typeof exports !== dg) {
            i(exports);
        } else {
            i(j.dragscroll = {});
        }
    }(this, function(dk) {
        function j(dn, dm) {
            for (dn = 0; dn < i[c6];) {
                (dm = i[dn++])[aN] || dm)[aY + bk](a8, dm.md, 0);
                U[aY + bk](x, dm.mu, 0);
                U[aY + bk](cc, dm.mm, 0);
            }
            i = [];
            i[ag](a2[v]("drag-scroll"));
            for (dn = 0; dn < i[c6];) {
                !function(ds, dr, dq, dt, du, dp) {
                    (dp = ds[aN] || ds)[cH + bk](a8, dp.md = function(dv) {
                        if (!(ds[bf + bg]("nochilddrag") && a2.elementFromPoint(dv[n], dv[m]) != dp)) {
                            dt = 1;
                            dr = dv[aC];
                            dq = dv[aB];
                            dv[cE]();
                        }
                    }, 0);
                    U[cH + bk](x, dp.mu = function() {
                        dt = 0;
                    }, 0);
                    U[cH + bk](cc, dp.mm = function(dv) {
                        if (dt) {
                            (du = ds[aL] || ds)[aZ] -= dj = -dr + (dr = dv[aC]);
                            du[ce] -= dl = -dq + (dq = dv[aB]);
                            if (ds == a2[br]) {
                                (du = a2._docElement)[aZ] -= dj;
                                du[ce] -= dl;
                            }
                        }
                    }, 0);
                }(i[dn++]);
            }
        }
        var dj, dl, i = [];
        if (a2[cK] == q) j();
        else U[cH + bk](df, j, 0);
        dk[K] = j;
    });

    var bY = function(dl) {
        var dp = dl[bX + bg]("data-url") || "#",
            dn = dl[bX + bg]("data-duration") || 1000,
            dm = dl[bX + bg]("data-increase") || 2,
            i = dl[bX + bg]("data-after") || "Get Link",
            dj = dl[bX + bg]("data-target") || "",
            dk = dl[bQ](".progress-bar"),
            dq = dl[bQ](".btn"),
            j = 0,
            dl = cT("sf", a0);
        if (dp == "#safelink" && dl) dp = U.atob(g(o(dl)));
        intv = bl(function() {
            if ((j += dm) >= 100) {
                j = 100;
                di(intv);
                bU(dq, "disabled");
                dq[bv] = i;
                dq[bB + bg]("href", dp);
                dq[bB + bg]("target", dj);
            }
            dk[bB + bg]("style", "width:" + j + "%");
        }, dn);
    };

    if (bn) {
        for (var bz, b7 = 0; b7 < ai[c6]; ++b7) {
            bz = ai[b7];
            bz[bv] = bn(bz)[bp]();
        }
    }

    function e(ds) {
        if (ds) {
            a2[aY + bk](cc, e);
            a2[aY + bk](aj, e);
            a2[aY + bk](cm, e);
        }
        Defer.dom(".custom-posts", 1, null, jo[c2], null, { rootMargin: "200%" });
        if (P[c6] > 0) {
            for (var dy = 0; dy < P[c6]; ++dy) {
                var dw = P[dy],
                    dv = dw[bv],
                    j = a2[b9]("textarea");
                j[bv] = dv[L](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                dv = a2[b9]("div");
                dv[bv] = j.value;
                if (dy == 0) Q(dv, "feature-image full-width");
                dw[a9][cO + cf](dv, dw);
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", M, null, { rootMargin: "200%" });
        }
        if (cL) {
            if (aV && a1) {
                a1[bv] = aV[bv];
                a1[bB + bg]("data-no-item", aV[bX + bg]("data-no-item"));
            }
            if (aM) {
                var dl = cL[c5](ca + "," + b8),
                    dn = aM[cM],
                    dz = dn[c6],
                    dk = [];
                for (var dy = 0; dy < dl[c6]; dy++) {
                    var dp = dl[dy][cl](b8);
                    if (!dp || dl[dy] != dp) dk[aD](dl[dy]);
                }
                for (var dt, dy = 0; dy < dz; dy++) {
                    if (dy == dz - 1) cL[c7](dn[0]);
                    else {
                        dt = dy == dz - 1 ? dk[c6] - 1 : cs[bP](dk[c6] / dz) * dy;
                        if (dy == 0) dt = dk[0];
                        else dt = dk[dt][b6];
                        if (dt) dt[a9][cO + cf](dn[0], dt);
                    }
                }
            }
            if (bF && bF != F && ax && cL[bW]) {
                var du = cL[c5]("h2,h3,h4,h5,h6"),
                    dm = a2[b9]("div"),
                    ds = cL[bQ](u),
                    dq = [];
                for (var dy = 0; dy < du[c6]; dy++) {
                    var dr = du[dy],
                        dx = dr[ci][L](/[^\w!?]/g, "_")[L](/__/g, "_"),
                        dj = y(dr[cd][L]("H", ""));
                    dr[cN] = dx;
                    dq[aD]({ level: dj, title: dr[ci], id: dx });
                }
                if (!ds) ds = cL[bW];
                else if (ds[b6]) ds = ds[b6];
                if (dq[c6] > 0) {
                    dm[bv] = ax(dq)[bp]();
                    if (ds) ds[a9][cO + cf](dm, ds);
                }
            }
        }
        if (!db) {
            if (a3 && (!bV || bV == F || bV && bV != F && cW < b5)) {
                if (typeof adsbygoogle === dg) adsbygoogle = [];
                Defer.js(cJ + "pagead2.googlesyndication.com/pagead/js/" + de + ".js?client=" + a3, de, 100);
            }
            if (D && D != F) {
                Defer.js(cJ + "www.googletagmanager.com/gtag/js?id=" + D, b1, 100, function() {
                    function i() {
                        dataLayer[aD](arguments);
                    }
                    i("js", new Date);
                    i(X, D);
                });
            }
            if (c && c != F) {
                Defer.js(cJ + "www.gstatic.com/" + a7 + "js/" + w + "/" + a7 + "-app.js", a7 + "-app", 100, function() {
                    Defer.js(cJ + "www.gstatic.com/" + a7 + "js/" + w + "/" + a7 + "-database.js", a7 + "-db", 100, function() {
                        var dD = a2[c5](".jt-get-view");
                        firebase.initializeApp({ databaseURL: c });
                        var dB = firebase.database();
                        for (var dA = 0; dA < dD[c6]; dA++) {
                            var i = dD[dA],
                                dC = i[bX + bg]("data-id");
                            dC = dB.ref("pages/" + dC);
                            dC.once(aO, function(dF, dE) {
                                return function(dG) {
                                    dG = dG.exists() ? dG.val() : 0;
                                    if (dG > 0) {
                                        dF[bv] = dG;
                                        bU(dF[a9], "d-none");
                                    }
                                    if (dF[bX + bg]("data-increment") == bG) {
                                        dF[bB + bg]("data-increment", false);
                                        dG = y(dG) + 1;
                                        dE.set(dG);
                                    }
                                };
                            }(i, dC));
                        }
                    });
                });
            }
            if (bu) bu();
        }
        if (z) {
            Defer.css(cJ + ak + "dyn-css/authorization.css?targetBlogID=" + z);
        }
        if (bO[c6] > 0) {
            Defer.js(cJ + "cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js", "splide", 1, function() {
                new Splide(".splide")[d]();
            });
        }
    }

    if (a3 && bV && bV != F) {
        U[aE]();
        U[cH + bk](b0, function() {
            b(function() {
                var i = a2[az];
                if (i[cd] == "IFRAME" && i[cl]("." + de)) {
                    i = cW + 1;
                    if (i >= b5) {
                        dd("j" + aa, i, bi, "hours");
                    } else {
                        dd("j" + aa, i, bj, "minutes");
                    }
                }
            }, 50);
        });
    }

    if (ap) {
        a2[a5] = a2[a5][L](bL, bL + cz + " " + ap + bL);
    }

    Defer.dom(".lazyload", 1, "loaded", M);
    Defer.dom("#post-pager", 1, null, G, null, { rootMargin: "200%" });
    Defer.dom("#pagination", 1, null, dc, null, { rootMargin: "200%" });
    Defer.dom(".generate-url", 1, "loaded", bY);

    if (cy) {
        e(false);
    } else {
        if (bZ) bZ[bB + a4]("lazy", 1);
        a2[cH + bk](cc, e);
        a2[cH + bk](aj, e);
        a2[cH + bk](cm, e);
    }
}();
