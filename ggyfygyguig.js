const jo = {};

(function JetThemeScript() {
    const U = window;
    const a2 = document;
    const b = setTimeout;
    const cD = clearTimeout;
    const cG = Date;
    const cs = Math;
    const y = parseInt;
    const B = btoa;
    const S = escape;
    const g = unescape;
    const cg = encodeURIComponent;
    const o = decodeURIComponent;
    const ao = RegExp;
    const cp = XMLHttpRequest;
    const bZ = localStorage;
    const aJ = JSON;
    const bh = Image;
    const bl = setInterval;
    const di = clearInterval;

    function R(j, i) {
        return (" " + j.className + " ").indexOf(" " + i + " ") > -1;
    }

    function Q(dj, j) {
        if (!R(dj, j)) {
            dj.className += dj.className ? " " + j : j;
        }
    }

    function bU(j, i) {
        j.className = j.className.replace(new ao("(?:^|\\s)" + i + "(?!\\S)"), '').trim();
    }

    function bR(j, i) {
        if (R(j, i)) {
            bU(j, i);
        } else {
            Q(j, i);
        }
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
        for (let i = 0; i < dj.length; i++) {
            if (dj[i] === j) {
                return true;
            }
        }
        return false;
    }

    function aT() {
        return (cs.random() + 1).toString(36).substr(7);
    }

    function cT(j, i) {
        const regex = new ao("[?&]" + j + "=([^&#]*)");
        return !!regex.test(i) && i.match(regex)[1];
    }

    function ab(dn, dr, dq, dp) {
        dn = y(dn);
        dr = y(dr);
        dq = y(dq);
        dp = y(dp);
        const dl = cs.ceil(dn / dq);
        if (dr < 1) dr = 1;
        else if (dl < dr) dr = dl;
        const dk = dl <= dp ? dr : dn > cs.floor(dp / 2) ? cs.ceil(dp / 2) : dr;
        const ds = (dr - 1) * dq;
        const endIndex = cs.min(ds + dq - 1, dn - 1);
        const pages = Array.from({ length: dl }, (_, i) => i + 1).slice(dk, dk + dp);
        return {
            totalItems: dn,
            currentPage: dr,
            pageSize: dq,
            totalPages: dl,
            startPage: dk,
            endPage: dk + dp - 1,
            startIndex: ds,
            endIndex: endIndex,
            pages: pages
        };
    }

    function c1(dl) {
        const dj = dl.slice();
        for (let j = dj.length - 1; j > 0; j--) {
            const i = cs.floor(cs.random() * (j + 1));
            [dj[j], dj[i]] = [dj[i], dj[j]];
        }
        return dj;
    }

    function dd(dl, dj, j, i) {
        const dk = new cG();
        let duration = j === "minutes" ? 60 * i * 1000 : j === "hours" ? 60 * i * 60 * 1000 : 24 * i * 60 * 60 * 1000;
        dk.setTime(dk.getTime() + duration);
        document.cookie = `${dl}=${dj}; expires=${dk.toUTCString()}; path=/`;
    }

    function s(i) {
        const regex = new ao("(^| )" + i + "=([^;]+)");
        const match = document.cookie.match(regex);
        return match ? match[2] : null;
    }

    function aA(i) {
        try {
            return aJ.parse(i);
        } catch (e) {
            return false;
        }
    }

    !function(j) {
        const i = new bh();
        i.onload = i.onerror = function() {
            j(2 == i.height);
        };
        i.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }(function(i) {
        if (!i) {
            aG = "";
        }
    });

    const c4 = a2.getElementById("header");
    const ck = a2.getElementById("search-toggle");
    const ac = a2.getElementById("search-header");
    const l = a2.getElementById("navbar-toggle");
    const bm = a2.getElementById("navbar");
    const aF = a2.getElementById("back-to-top");
    const da = a2.getElementById("dark-toggler");
    const bc = a2.querySelector("html");

    function M(dl) {
        if (dl.tagName === "IMG") {
            let j = dl.getAttribute("data-src");
            if (j.match(/(bp.blogspot|googleusercontent)/)) {
                const dq = cy ? (U.devicePixelRatio && U.devicePixelRatio > 1 ? U.devicePixelRatio : 1.5) : 1;
                const dp = (dl.offsetWidth * dq).toFixed(0);
                const dn = (dl.parentElement.offsetWidth * dq).toFixed(0);
                const dm = (dl.parentElement.parentElement.offsetWidth * dq).toFixed(0);
                const i = (dl.offsetHeight * dq).toFixed(0);
                const dj = j.split("/");
                const dk = j.lastIndexOf("=") + 1;
                let dqString = "";
                if (R(dl.parentElement, "ratio")) {
                    dqString = `w${dp}-h${i}-c${aG}`;
                } else {
                    const size = dp < 30 ? (dn < 30 ? dm : dn) : dp;
                    dqString = `s${size}${aG}`;
                }
                if (j.match(/(img\/\/a|proxy\/)/)) {
                    j = dk ? j.slice(0, dk) + dqString : j + "=" + dqString;
                } else {
                    j = j.replace(dj[dj.length - 2], dqString);
                }
                dl.setAttribute("data-src", j);
            } else if (j.match(/(img.youtube|i.ytimg)/)) {
                j = j.substr(0, j.lastIndexOf("/")) + "/mqdefault.jpg";
                dl.setAttribute("data-src", j);
            }
        }
    }

    if (a.length > 0) {
        for (let b7 = 0; b7 < a.length; ++b7) {
            const c9 = a[b7];
            const cV = c9.getAttribute("href");
            if (cV && ar) {
                const r = ar.split(",");
                for (let b4 = 0; b4 < r.length; b4++) {
                    if (cV.indexOf(r[b4]) > -1) {
                        cV = "";
                        break;
                    }
                }
            }
            if (cV) {
                const bK = cg(S(U.btoa(cV)));
                c9.setAttribute("href", bH + "?sf=" + c9.setAttribute("href", bH + "?sf=" + bK);
            }
        }
    }

    const dc = function(dl) {
        let ds, dj, j, dm, dn, dr, dp, dq;
        function dk(dw, du, dt) {
            const i = a2.createElement("li");
            const dv = a2.createElement("span");
            Q(dv, "btn btn-sm rounded-pill jt-icon-center");
            dv.innerHTML = dt || dw;
            dv.setAttribute("data-page", dw);
            if (dw == du) {
                Q(dv, "jt-btn-primary");
            } else {
                Q(dv, "jt-btn-light hover-btn-primary");
                dv.addEventListener(O, function(dy) {
                    dy.preventDefault();
                    const dq = dv.getAttribute("data-page");
                    if (dq == 1) {
                        U.location.href = dj ? aS + "/search" + dm + "?max-results=" + ds + "&page=" + dq : aS;
                    } else {
                        const dx = (dq - 1) * ds;
                        Defer.js(aS + "/feeds/posts/summary/" + j + "?start-index=" + dx + "&alt=json&callback=jo." + k + "_date&max-results=1");
                    }
                });
            }
            i.appendChild(dv);
            return i;
        }

        if (dl.getAttribute("data-pagination") != F) {
            ds = dl.getAttribute("data-posts");
            dj = dl.getAttribute("data-label");
            j = dj ? "/-/" + cg(dj) + "/" : "";
            dm = dj ? "/label/" + dj : "";
            Defer.js(aS + "/feeds/posts/summary/" + j + "?alt=json&callback=jo." + k + "_" + bM + "&max-results=1");
            dn = cT("max-results", a0);
            dr = cT("page", a0);
            dp = dn || ds;
            dq = dr || 1;
            jo[k + "_" + bM] = function(dw) {
                const du = dw.feed;
                const dt = y(du.openSearch$totalResults.$t);
                if (ds < dt) {
                    const dw = ab(dt, dq, dp, 5);
                    const i = a2.createElement("ul");
                    const du = dw.totalPages;
                    if (dw.currentPage != 1) {
                        const dt = dk(dw.currentPage - 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>');
                        i.appendChild(dt);
                    }
                    if (!I(dw.pages, 1)) {
                        const dx = dk(1, dw.currentPage, "1 . .");
                        i.appendChild(dx);
                    }
                    for (let dv = 0; dv < dw.pages.length; dv++) {
                        const dx = dk(dw.pages[dv], dw.currentPage);
                        i.appendChild(dx);
                    }
                    if (!I(dw.pages, du)) {
                        const dx = dk(du, dw.currentPage, ". . " + du);
                        i.appendChild(dx);
                    }
                    if (dw.currentPage != du) {
                        const du = dk(dw.currentPage + 1, "", '<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>');
                        i.appendChild(du);
                    }
                    dl.innerHTML = "";
                    Q(i, "pagination mb-0");
                    dl.appendChild(i);
                    bU(dl, "visually-hidden");
                }
            };
            jo[k + "_date"] = function(i) {
                i = i.feed.entry[0];
                const published = i.published.$t;
                const dateString = published.substr(0, 19) + published.substr(23, 29).replace("+", "%2B");
                U.location.href = aS + "/search" + dm + "?updated-max=" + dateString + "&max-results=" + dp + "&page=" + dq;
            };
        } else {
            bU(dl, "visually-hidden");
        }
    };

    function cw(dj, j) {
        const i = new cp();
        i.open("GET", dj);
        i.setRequestHeader("Content-Type", "text/html");
        i.send(null);
        i.addEventListener("load", function() {
            const dk = i.responseText.match(/<title>(.*?)<\/title>/);
            j.innerHTML = dk[1].replace(bL + cS, "");
        });
    }

    jo.loadCustomPosts = function(dn) {
        const j = aT();
        const dm = dn.getAttribute("data-label");
        const dk = dn.getAttribute("data-title");
        const dl = dn.getAttribute("data-items");
        const ds = dn.getAttribute("data-shuffle");
        const i = dn.getAttribute("data-no-item");
        const dj = dn.getAttribute("data-func");
        const dr = dn.getAttribute("data-callback");
        const dt = i ? y(dl) + 1 : dl;
        const dq = dm || dn.innerHTML;
        const dp = dq.split(",");
        let dmString = "";
        if (dp.length > 1) {
            dmString = dq ? "/-/" + cg(dp[cs.floor(cs.random() * dp.length)]) + "/" : "?";
        } else {
            dmString = dq && dq != F ? "/-/" + cg(dq.trim()) + "/" : "?";
        }
        Defer.js(aS + "/feeds/posts/summary/" + dmString + "alt=json&callback=jo." + p + "_" + bM + "_" + j + "&max-results=" + dt);
        jo[p + "_" + bM + "_" + j] = function(dz) {
            const dD = y(dz.feed.openSearch$totalResults.$t);
            const dC = dz.feed.category;
            if (dD > 0) {
                const dB = { title: dk, posts: [], categories: dC };
                const du = dz.feed.entry;
                for (let dw = 0, dx = 0; dx < du.length; ++dx) {
                    const dE = {};
                    const dy = du[dx];
                    const dA = dy.link[dy.link.length - 1].href;
                    if (dw == dl) break;
                    if (dA != i) {
                        dw++;
                        dE.grup_id = j;
                        dE.url = dA;
                        dE.title = dy.title.$t;
                        dE.summary = dy.summary.$t.trim();
                        dE.img = dy.media$thumbnail && dy.media$thumbnail.url;
                        dE.author = dy.author[0].name.$t;
                        dE.comment = dy.thr$total && dy.thr$total.$t;
                        dE.label = dy.category;
                        const publishedDate = new cG(dy.published.$t);
                        dE.date = `${publishedDate.getDate()}/${publishedDate.getMonth() + 1}/${publishedDate.getFullYear()}`;
                        dB.posts.push(dE);
                    }
                }
                const dz = U[dj];
                if (typeof dz === bJ && dB.posts.length > 0) {
                    if (ds) {
                        dB.posts = c1(dB.posts).slice(0, ds);
                    }
                    dn.innerHTML = dz(dB).trim();
                    bU(dn, "visually-hidden");
                    Defer.dom(".lazy-" + j, 1, "loaded", M);
                    if (dr && typeof U[dr] === bJ) {
                        U[dr]();
                    }
                }
            }
        };
    };

    function G(dl) {
        const dj = dl.querySelectorAll("a");
        for (let j = 0; j < dj.length; ++j) {
            const i = dj[j];
            const dk = i.href;
            const dm = a2.createElement("span");
            Q(dm, "d-block fw-bold pt-2 jt-text-primary");
            i.appendChild(dm);
            cw(dk, dm);
        }
    }

    function au() {
        if (ck.checked || l.checked) {
            bU(c4, "header-animate");
        } else {
            Q(c4, "header-animate");
        }
    }

    function H(dj, j) {
        function dk(dl) {
            if (!dj.contains(dl.target)) {
                j();
                i();
            }
        }
        function i() {
            a2.removeEventListener("click", dk);
        }
        a2.addEventListener("click", dk);
    }

    function Z(i) {
        if (i != cU.href) {
            Q(am, "loader");
            cU.href = i;
            cX.src = i;
        }
        if (R(am, "d-none")) {
            bU(am, "d-none");
            const scriptSrc = V.value.match(/<script.*?src='(.*?)'/)[1];
            Defer.js(scriptSrc, "comment-js", 500, function() {
                BLOG_CMT_createIframe(cJ + ak + "rpc_relay.html");
            });
        }
    }

    ck.addEventListener("change", function() {
        au();
        if (this.checked) {
            b(function() {
                a2.getElementById("search-input").focus();
            }, 100);
            H(ac, function() {
                ck.checked = false;
                au();
            });
        }
    });

    l.addEventListener("change", function() {
        au();
        if (this.checked) {
            aW(bm, "show");
            H(bm, function() {
                l.checked = false;
                au();
                cB(bm, "show");
            });
        } else {
            cB(bm, "show");
        }
    });

    da.addEventListener(O, function(i) {
        i.preventDefault();
        bR(bc, "dark-mode");
        if (bZ) {
            bZ.setItem("theme", R(bc, "dark-mode") ? "dark" : "light");
        }
    });

    U.addEventListener("scroll", function() {
        (this.pageYOffset >= 1 ? Q : bU)(c4, "shadow-sm");
        (this.pageYOffset >= 1000 ? bU : Q)(aF, "d-none");
    }, false);

    if (cX) {
        cX.addEventListener("load", function() {
            bU(am, "loader");
        });
    }

    const cj = a2.getElementById("comment-button");
    if (cj) {
        cj.addEventListener(O, function(i) {
            i.preventDefault();
            Z(this.href);
            if (am.parentElement.id != "add-comment") {
                a2.getElementById("add-comment").appendChild(am);
            }
        });
    }

    const bT = a2.querySelectorAll(".comment-reply");
    for (let b7 = 0; b7 < bT.length; ++b7) {
        bT[b7].addEventListener(O, function(i) {
            i.preventDefault();
            const commentId = this.getAttribute("data-comment-id");
            Z(this.href);
            if (am.parentElement.id != "c" + commentId) {
                a2.getElementById("c" + commentId).appendChild(am);
            }
        });
    }

    const cr = a2.querySelectorAll(".contact-form-blogger");
    for (let b7 = 0; b7 < cr.length; ++b7) {
        const bz = cr[b7];
        bz.addEventListener(ba, function(dk) {
            dk.preventDefault();
            const dj = dk.target;
            Q(dj, "loading");
            const formData = new FormData(dj);
            let postData = "blogID=" + z;
            formData.forEach((value, key) => {
                postData += "&" + cg(key) + "=" + cg(value);
            });
            const request = new cp();
            request.open("POST", cJ + ak + "contact-form.do");
            request.setRequestHeader("Content-Type", cC);
            request.send(postData);
            request.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200 && this.responseText !== "") {
                    const response = aA(this.responseText.trim());
                    if (response && response.details.emailSentStatus === "true") {
                        dj.reset();
                        bU(dj, "send-error");
                        Q(dj, "send-success");
                    } else {
                        bU(dj, "send-success");
                        Q(dj, "send-error");
                    }
                }
                bU(dj, "loading");
            };
        });
    }

    function h() {
        dd("j" + bM, 14);
        dd("j" + bb, false, 14);
    }

    function cA(i) {
        const data = aA(i);
        if (data && data[bM] === cv && data[aX] === bd) {
            dd("j" + bb, true, 14);
            dd("j" + bM, 14);
        } else {
            h();
        }
    }

    (function(j, i) {
        if (typeof define === bJ && define.amd) {
            define(["exports"], i);
        } else if (typeof exports !== dg) {
            i(exports);
        } else {
            i(j.dragscroll = {});
        }
    })(this, function(dk) {
        function j(dn, dm) {
            for (let dn = 0; dn < i.length; dn++) {
                const dm = i[dn];
                (dm.container || dm).removeEventListener(a8, dm.md, 0);
                U.removeEventListener(x, dm.mu, 0);
                U.removeEventListener(cc, dm.mm, 0);
            }
            i = [].slice.call(a2.getElementsByClassName("drag-scroll"));
            for (let dn = 0; dn < i.length; dn++) {
                (function(ds, dr, dq, dt, du, dp) {
                    const dp = ds.container || ds;
                    dp.addEventListener(a8, dp.md = function(dv) {
                        if (!ds.hasAttribute("nochilddrag") || a2.elementFromPoint(dv.pageX, dv.pageY) === dp) {
                            dt = 1;
                            dr = dv.clientX;
                            dq = dv.clientY;
                            dv.preventDefault();
                        }
                    }, 0);
                    U.addEventListener(x, dp.mu = function() {
                        dt = 0;
                    }, 0);
                    U.addEventListener(cc, dp.mm = function(dv) {
                        if (dt) {
                            (du = ds.scroller || ds).scrollLeft -= dj = -dr + (dr = dv.clientX);
                            du.scrollTop -= dl = -dq + (dq = dv.clientY);
                            if (ds === a2.body) {
                                (du = a2._docElement).scrollLeft -= dj;
                                du.scrollTop -= dl;
                            }
                        }
                    }, 0);
                })(i[dn]);
            }
        }
        let dj, dl, i = [];
        if (a2.readyState === q) {
            j();
        } else {
            U.addEventListener(df, j, 0);
        }
        dk.reset = j;
    });

    const bY = function(dl) {
        const dp = dl.getAttribute("data-url") || "#";
        const dn = parseInt(dl.getAttribute("data-duration")) || 1000;
        const dm = parseInt(dl.getAttribute("data-increase")) || 2;
        const i = dl.getAttribute("data-after") || "Get Link";
        const dj = dl.getAttribute("data-target") || "";
        const dk = dl.querySelector(".progress-bar");
        const dq = dl.querySelector(".btn");
        let j = 0;
        const encodedParam = cT("sf", a0);
        const url = dp === "#safelink" && encodedParam ? U.atob(g(o(encodedParam))) : dp;
        const intv = bl(function() {
            if ((j += dm) >= 100) {
                j = 100;
                di(intv);
                bU(dq, "disabled");
                dq.innerHTML = i;
                dq.setAttribute("href", url);
                dq.setAttribute("target", dj);
            }
            dk.style.width = j + "%";
        }, dn);
    };

    if (bn) {
        const ai = a2.querySelectorAll(".generate-url");
        ai.forEach(function(bz) {
            bz.innerHTML = bn(bz).trim();
        });
    }

    function e(ds) {
        if (ds) {
            a2.removeEventListener(cc, e);
            a2.removeEventListener(aj, e);
            a2.removeEventListener(cm, e);
        }
        Defer.dom(".custom-posts", 1, null, jo.loadCustomPosts, null, { rootMargin: "200%" });
        if (P.length > 0) {
            P.forEach(function(dw, dy) {
                const dv = dw.innerHTML;
                const j = a2.createElement("textarea");
                j.innerHTML = dv.replace(/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                const div = a2.createElement("div");
                div.innerHTML = j.value;
                if (dy === 0) {
                    Q(div, "feature-image full-width");
                }
                dw.parentElement.insertBefore(div, dw);
            });
            Defer.dom('[lazyload="true"]', 1, "loaded", M, null, { rootMargin: "200%" });
        }
        if (cL) {
            if (aV && a1) {
                a1.innerHTML = aV.innerHTML;
                a1.setAttribute("data-no-item", aV.getAttribute("data-no-item"));
            }
            if (aM) {
                const adsDelimiters = cL.querySelectorAll(`${ca},${b8}`);
                const adsPosts = aM.childNodes;
                const adsCount = adsPosts.length;
                const filteredAds = [];
                adsDelimiters.forEach(function(item) {
                    const parent = item.closest(b8);
                    if (!parent || item !== parent) {
                        filteredAds.push(item);
                    }
                });
                filteredAds.forEach(function(item, index) {
                    if (index === adsCount - 1) {
                        cL.appendChild(adsPosts[0]);
                    } else {
                        const nextAdIndex = index === adsCount - 1 ? filteredAds.length - 1 : cs.round(filteredAds.length / adsCount) * index;
                        const nextAd = nextAdIndex === 0 ? filteredAds[0] : filteredAds[nextAdIndex].nextSibling;
                        if (nextAd && nextAd.parentElement) {
                            nextAd.parentElement.insertBefore(adsPosts[0], nextAd);
                        }
                    }
                });
            }
            if (bF && ax && cL.firstChild) {
                const headers = cL.querySelectorAll("h2,h3,h4,h5,h6");
                const tocContainer = a2.createElement("div");
                const tocInsertionPoint = cL.querySelector(u) || cL.firstChild.nextSibling;
                const tocItems = [];
                headers.forEach(function(header, index) {
                    const id = header.textContent.replace(/[^\w!?]/g, "_").replace(/__/g, "_");
                    const level = parseInt(header.tagName.replace("H", ""));
                    header.id = id;
                    tocItems.push({ level, title: header.textContent, id });
                });
                if (tocInsertionPoint) {
                    tocContainer.innerHTML = ax(tocItems).trim();
                    tocInsertionPoint.parentElement.insertBefore(tocContainer, tocInsertionPoint);
                }
            }
        }
        if (!db) {
            if (a3 && (!bV || bV === F || (bV && cW < b5))) {
                if (typeof adsbygoogle === dg) {
                    adsbygoogle = [];
                }
                Defer.js(`${cJ}pagead2.googlesyndication.com/pagead/js/${de}.js?client=${a3}`, de, 100);
            }
            if (D && D !== F) {
                Defer.js(`${cJ}www.googletagmanager.com/gtag/js?id=${D}`, b1, 100, function() {
                    function gtag() {
                        dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", D);
                });
            }
            if (c && c !== F) {
                Defer.js(`${cJ}www.gstatic.com/firebasejs/${w}/firebase-app.js`, `${a7}-app`, 100, function() {
                    Defer.js(`${cJ}www.gstatic.com/firebasejs/${w}/firebase-database.js`, `${a7}-db`, 100, function() {
                        const firebaseViews = a2.querySelectorAll(".jt-get-view");
                        firebase.initializeApp({ databaseURL: c });
                        const firebaseDb = firebase.database();
                        firebaseViews.forEach(function(view) {
                            const viewId = view.getAttribute("data-id");
                            const viewRef = firebaseDb.ref("pages/" + viewId);
                            viewRef.once("value", function(snapshot) {
                                let viewCount = snapshot.exists() ? snapshot.val() : 0;
                                if (viewCount > 0) {
                                    view.innerHTML = viewCount;
                                    bU(view.parentElement, "d-none");
                                }
                                if (view.getAttribute("data-increment") === bG) {
                                    view.setAttribute("data-increment", F);
                                    viewCount = y(viewCount) + 1;
                                    viewRef.set(viewCount);
                                }
                            });
                        });
                    });
                });
            }
            if (bu) {
                bu();
            }
        }
        if (z) {
            Defer.css(`${cJ}${ak}dyn-css/authorization.css?targetBlogID=${z}`);
        }
        if (bO.length > 0) {
            Defer.js(`${cJ}cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js`, "splide", 1, function() {
                new Splide(".splide").mount();
            });
        }
        if (a3 && bV && bV !== F) {
            U.focus();
            U.addEventListener("blur", function() {
                b(function() {
                    const activeElement = a2.activeElement;
                    if (activeElement.tagName === "IFRAME" && activeElement.closest("." + de)) {
                        const clickCount = cW + 1;
                        if (clickCount >= b5) {
                            dd("j" + aa, clickCount, bi, "hours");
                        } else {
                            dd("j" + aa, clickCount, bj, "minutes");
                        }
                    }
                }, 50);
            });
        }
        if (ap) {
            a2.title = a2.title.replace(bL, bL + cz + " " + ap + bL);
        }
        Defer.dom(".lazyload", 1, "loaded", M);
        Defer.dom("#post-pager", 1, null, G, null, { rootMargin: "200%" });
        Defer.dom("#pagination", 1, null, dc, null, { rootMargin: "200%" });
        Defer.dom(".generate-url", 1, "loaded", bY);
        if (cy) {
            e(false);
        } else {
            if (bZ) {
                bZ.setItem("lazy", "1");
            }
            a2.addEventListener("mousemove", e);
            a2.addEventListener("touchstart", e);
            a2.addEventListener("scroll", e);
        }
    }

    e();

})();


