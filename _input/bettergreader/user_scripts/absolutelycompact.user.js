// ==UserScript==
// @name          Absolutely Compact
// @namespace     http://userstyles.org
// @description	  Maximizes the area for displaying articles.
// @author        DJBullwinkle
// @homepage      http://userstyles.org/styles/12691
// @include       htt*://www.google.*/reader/*

// @tab Skins
// @versionorlastupdate Jul 16 2009
// ==/UserScript==
(function() {
var css = "/* Hide all the elements that take up space */ #logo-container, #gbar, #global-info, .gbh, #lhn-add-subscription-section, #viewer-footer, #chrome-view-links, #mark-all-as-read, #viewer-refresh, #viewer-details-toggle, #chrome-lhn-toggle, .scroll-tree .icon, .entry .entry-title .entry-title-go-to, #entries.list .collapsed .entry-main .entry-original, .entry-likers { display: none !important; } /* move the main window up to the top to fill in leftover space */ #main, #settings-frame, #settings { top:0 !important; margin: 0 !important; } /* tighten up the vertical padding on header bars */ #viewer-top-controls, #chrome-header { padding: 2px 0 2px 5px !important; } /* right-justify the \"Loading...\" and other messages so they don't obscure other elements */ #loading-area, #message-area-outer { width: auto !important; left: auto !important; right: 0 !important; top: 26px !important; } /* right-align search bar and hide buttons until hovering */ #search { left: auto !important; right: 10px !important; top: 1px !important; width: 210px !important; height:23px !important; overflow: hidden !important; } #search:hover { width: 403px !important; height:323px !important; overflow: visible !important; } #search-restrict-button .goog-menu { left: auto !important; right: 0 !important; } #chrome.search-stream #viewer-search-parent { text-align: left !important; } /* shrink the navigation sidebar */ #nav, #nav * { max-width: 175px !important; } #chrome { margin-left: 175px !important; } .lhn-hidden #chrome { margin-left: 1px !important; } #entries .entry-body { max-width: none !important; } /* remove icons from navbar and tighten the left margin for folder/subscription entries */ .scroll-tree .expanded .toggle { background-position: 3px -58px !important; } .scroll-tree .collapsed .toggle { background-position: -20px -58px !important; } #lhn-subscriptions .scroll-tree li a { padding-left: 0 !important; } #lhn-subscriptions #sub-tree ul ul li a { padding-left: 10px !important; } #lhn-subscriptions .scroll-tree .toggle { width: 16px !important; } /* shrink titles, but add underlining for visual identification */ .entry .entry-title { font-size:100% !important; } .entry .entry-title .entry-title-link { text-decoration: underline !important; } /* tighten up spacing around entries */ /* expanded view */ #entries .entry { padding: 1px !important; margin: 0 !important; } #entries .card-content { padding: 2px !important; } #entries .card-common { padding: 0 !important; margin: 0 !important; border-width: 2px !important; } #entries .collapsed { padding: 0px !important; border: 0 !important; } /* list view */ #entries .collapsed .entry-date { margin: 0 2px 0 0 !important; } #entries #current-entry .collapsed { background-color: #C9DCFF !important; } #entries.list .collapsed .entry-icons, #entries.list .collapsed .entry-main .entry-original { top: 1px !important; } #entries.list .collapsed .entry-secondary { top: 0px !important; margin-right: 7em !important; } #entries.list .collapsed .entry-source-title { top: 0px !important; } #entries.list .collapsed .entry-title { text-decoration: none !important; } /* make entries borders square for consistency with new design */ .entry .card, .card .card-bottom { -moz-border-radius: 0 !important; }";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
