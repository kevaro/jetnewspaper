const jo = {};

(function JetThemeScript() {
    const window = globalThis;
    const document = window.document;

    const setTimeout = window.setTimeout;
    const clearTimeout = window.clearTimeout;
    const Date = window.Date;
    const Math = window.Math;
    const parseInt = window.parseInt;
    const btoa = window.btoa;
    const escape = window.escape;
    const unescape = window.unescape;
    const encodeURIComponent = window.encodeURIComponent;
    const decodeURIComponent = window.decodeURIComponent;
    const RegExp = window.RegExp;
    const XMLHttpRequest = window.XMLHttpRequest;
    const localStorage = window.localStorage;
    const JSON = window.JSON;
    const Image = window.Image;
    const setInterval = window.setInterval;
    const clearInterval = window.clearInterval;

    function hasClass(element, className) {
        return element.className.includes(className);
    }

    function addClass(element, className) {
        if (!hasClass(element, className)) {
            element.className += ` ${className}`;
        }
    }

    function removeClass(element, className) {
        element.className = element.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`), '').trim();
    }

    function toggleClass(element, className) {
        if (hasClass(element, className)) {
            removeClass(element, className);
        } else {
            addClass(element, className);
        }
    }

    function showElement(element, className, delay = 100) {
        addClass(element, 'd-block');
        setTimeout(() => addClass(element, className), delay);
    }

    function hideElement(element, className, delay = 300) {
        removeClass(element, className);
        setTimeout(() => removeClass(element, 'd-block'), delay);
    }

    function forEachElement(elements, callback) {
        for (let i = 0; i < elements.length; i++) {
            callback(elements[i]);
        }
    }

    function generateRandomString() {
        return (Math.random() + 1).toString(36).substr(7);
    }

    function getQueryParam(param, url) {
        const regex = new RegExp(`[?&]${param}=([^&#]*)`);
        const result = regex.exec(url);
        return result ? result[1] : null;
    }

    function parsePagination(totalItems, currentPage, pageSize, maxPages) {
        totalItems = parseInt(totalItems);
        currentPage = parseInt(currentPage);
        pageSize = parseInt(pageSize);
        maxPages = parseInt(maxPages);

        const totalPages = Math.ceil(totalItems / pageSize);
        const maxPagesToShow = totalPages <= maxPages ? totalPages : maxPages;
        const startPage = currentPage < 1 ? 1 : currentPage;
        const endPage = startPage + maxPagesToShow - 1 > totalPages ? totalPages : startPage + maxPagesToShow - 1;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function setCookie(name, value, days, unit) {
        const date = new Date();
        let duration;
        switch (unit) {
            case 'minutes':
                duration = 60 * 1000;
                break;
            case 'hours':
                duration = 60 * 60 * 1000;
                break;
            default:
                duration = 24 * 60 * 60 * 1000;
        }
        date.setTime(date.getTime() + (days * duration));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    function getCookie(name) {
        const regex = new RegExp(`(^| )${name}=([^;]+)`);
        const result = regex.exec(document.cookie);
        return result ? result[2] : null;
    }

    function parseJSON(jsonString) {
        try {
            return JSON.parse(jsonString);
        } catch (e) {
            return false;
        }
    }

    // Initialize some variables from the global scope
    const siteUrl = typeof siteUrl !== 'undefined' ? siteUrl.slice(0, siteUrl.length - 1).replace(/(^\w+:|^)\/\//, '') : "";
    const currentUrl = typeof currentUrl !== 'undefined' ? currentUrl : "";
    const blogId = typeof blogId !== 'undefined' ? blogId : "";
    const blogTitle = typeof blogTitle !== 'undefined' ? blogTitle : "";
    const titleSeparator = typeof titleSeparator !== 'undefined' ? titleSeparator : " - ";
    const pageTitle = typeof pageTitle !== 'undefined' ? pageTitle : "Page";
    const analyticId = typeof analyticId !== 'undefined' ? analyticId : false;
    const caPubAdsense = typeof caPubAdsense !== 'undefined' ? caPubAdsense.replace(/^\D+/g, "") : false;
    const innerAdsDelimiter = typeof innerAdsDelimiter !== 'undefined' ? innerAdsDelimiter : "p,br,div";
    const ignoreAdsDelimiter = typeof ignoreAdsDelimiter !== 'undefined' ? ignoreAdsDelimiter : "pre,ul,ol,li,table,blockquote";
    const autoTOC = typeof autoTOC !== 'undefined' ? autoTOC : false;
    const tocTemp = typeof tocTemp === 'function' ? tocTemp : false;
    const positionTOC = typeof positionTOC !== 'undefined' ? positionTOC : false;
    const arCallback = typeof ArCallback === 'function' ? ArCallback : false;
    const licenseKey = typeof licenseKey !== 'undefined' ? licenseKey : "";
    const firebaseUrl = typeof firebaseUrl !== 'undefined' ? firebaseUrl : "";
    const safeAds = typeof safeAds !== 'undefined' ? safeAds : false;
    const limitAdsClick = typeof limitAdsClick !== 'undefined' ? limitAdsClick : 3;
    const timeAdsClick = typeof timeAdsClick !== 'undefined' ? timeAdsClick : 10;
    const blockAdsClick = typeof blockAdsClick !== 'undefined' ? blockAdsClick : 6;
    const safeLinkUrl = typeof safeLinkUrl !== 'undefined' ? safeLinkUrl : `${siteUrl}`;
    const safeLinkGenerate = typeof safeLinkGenerate !== 'undefined' ? safeLinkGenerate : ".safelink";
    const ignoreSafeLink = typeof ignoreSafeLink !== 'undefined' ? ignoreSafeLink : "";
    const pageTitleTemplate = `${blogTitle}${titleSeparator}${pageTitle}`;

    function handleLazyLoadingImages() {
        const lazyImages = document.querySelectorAll('.lazyload');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }

    function initializeEventListeners() {
        const searchToggle = document.getElementById('search-toggle');
        const navbarToggle = document.getElementById('navbar-toggle');
        const darkModeToggle = document.getElementById('dark-toggler');
        const backToTopButton = document.getElementById('back-to-top');

        if (searchToggle) {
            searchToggle.addEventListener('change', () => {
                const header = document.getElementById('header');
                toggleClass(header, 'header-animate');
            });
        }

        if (navbarToggle) {
            navbarToggle.addEventListener('change', () => {
                const navbar = document.getElementById('navbar');
                toggleClass(navbar, 'show');
            });
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', (event) => {
                event.preventDefault();
                const html = document.querySelector('html');
                toggleClass(html, 'dark-mode');
                localStorage.setItem('theme', hasClass(html, 'dark-mode') ? 'dark' : 'light');
            });
        }

        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                const show = window.pageYOffset > 1000;
                toggleClass(backToTopButton, 'd-none', show);
            });
        }
    }

    function initializeAds() {
        if (caPubAdsense) {
            const adsScript = document.createElement('script');
            adsScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${caPubAdsense}`;
            adsScript.async = true;
            adsScript.crossOrigin = "anonymous";
            document.head.appendChild(adsScript);
        }
    }

    function initializeAnalytics() {
        if (analyticId) {
            const gtagScript = document.createElement('script');
            gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticId}`;
            gtagScript.async = true;
            document.head.appendChild(gtagScript);

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', analyticId);
        }
    }

    function initializeFirebase() {
        if (firebaseUrl) {
            const firebaseScript = document.createElement('script');
            firebaseScript.src = `https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js`;
            firebaseScript.async = true;
            document.head.appendChild(firebaseScript);

            firebaseScript.onload = () => {
                const firebaseDbScript = document.createElement('script');
                firebaseDbScript.src = `https://www.gstatic.com/firebasejs/8.4.2/firebase-database.js`;
                firebaseDbScript.async = true;
                document.head.appendChild(firebaseDbScript);

                firebaseDbScript.onload = () => {
                    const firebaseConfig = {
                        databaseURL: firebaseUrl
                    };
                    firebase.initializeApp(firebaseConfig);

                    const views = document.querySelectorAll('.jt-get-view');
                    views.forEach(view => {
                        const viewId = view.dataset.id;
                        const viewRef = firebase.database().ref(`pages/${viewId}`);

                        viewRef.once('value', (snapshot) => {
                            const viewsCount = snapshot.exists() ? snapshot.val() : 0;
                            if (viewsCount > 0) {
                                view.textContent = viewsCount;
                                view.classList.remove('d-none');
                            }
                            if (view.dataset.increment === 'true') {
                                viewRef.set(viewsCount + 1);
                                view.dataset.increment = 'false';
                            }
                        });
                    });
                };
            };
        }
    }

    function initializePagination() {
        const paginationElements = document.querySelectorAll('[data-pagination]');
        paginationElements.forEach(paginationElement => {
            const posts = parseInt(paginationElement.dataset.posts);
            const label = paginationElement.dataset.label;
            const currentPage = parseInt(getQueryParam('page', currentUrl)) || 1;

            const callbackName = `jo_pagination_${generateRandomString()}`;
            window.jo[callbackName] = function (response) {
                const totalItems = parseInt(response.feed.openSearch$totalResults.$t);
                const paginationData = parsePagination(totalItems, currentPage, posts, 5);
                const paginationContainer = document.createElement('ul');
                paginationContainer.className = 'pagination mb-0';

                if (paginationData.currentPage > 1) {
                    const prevPage = document.createElement('li');
                    prevPage.innerHTML = `<span class="btn btn-sm rounded-pill jt-icon-center" data-page="${paginationData.currentPage - 1}"><svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg></span>`;
                    paginationContainer.appendChild(prevPage);
                }

                paginationData.pages.forEach(page => {
                    const pageElement = document.createElement('li');
                    pageElement.innerHTML = `<span class="btn btn-sm rounded-pill jt-icon-center" data-page="${page}">${page}</span>`;
                    paginationContainer.appendChild(pageElement);
                });

                if (paginationData.currentPage < paginationData.totalPages) {
                    const nextPage = document.createElement('li');
                    nextPage.innerHTML = `<span class="btn btn-sm rounded-pill jt-icon-center" data-page="${paginationData.currentPage + 1}"><svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg></span>`;
                    paginationContainer.appendChild(nextPage);
                }

                paginationElement.innerHTML = '';
                paginationElement.appendChild(paginationContainer);
            };

            const labelPath = label ? `/-/${encodeURIComponent(label)}/` : '';
            const scriptUrl = `${siteUrl}/feeds/posts/summary${labelPath}?alt=json&callback=jo.${callbackName}&max-results=${posts}`;
            const script = document.createElement('script');
            script.src = scriptUrl;
            document.body.appendChild(script);
        });
    }

    function initializeDragScroll() {
        let isDragging = false;
        let startX, startY;

        document.querySelectorAll('.drag-scroll').forEach(element => {
            element.addEventListener('mousedown', (event) => {
                isDragging = true;
                startX = event.clientX;
                startY = event.clientY;
                event.preventDefault();
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
            });

            window.addEventListener('mousemove', (event) => {
                if (isDragging) {
                    const scrollLeft = element.scrollLeft;
                    const scrollTop = element.scrollTop;
                    element.scrollLeft = scrollLeft - (event.clientX - startX);
                    element.scrollTop = scrollTop - (event.clientY - startY);
                }
            });
        });
    }

    function initializePage() {
        initializeEventListeners();
        initializeAds();
        initializeAnalytics();
        initializeFirebase();
        initializePagination();
        initializeDragScroll();
        handleLazyLoadingImages();
    }

    document.addEventListener('DOMContentLoaded', initializePage);

})();
