webpackHotUpdate(0,{

/***/ "./components/case-studies/CaseStudies.css":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"heading":"heading___3anZv","caseGrid":"caseGrid___38-FR","itemA":"itemA___1sbxE","itemB":"itemB___3TfmY","itemC":"itemC___6mlSP","desc":"desc___3f0Sj"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1530273102668");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=0.c4375cecf90b849ec164.hot-update.js.map