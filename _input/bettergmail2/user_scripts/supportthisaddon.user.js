// ==UserScript==
// @name          Support This Add-on via Amazon (Thanks for enabling this!)
// @description   Adds a referral tag to Amazon links on all web sites. Referral fees generated from your purchases help fund development for this add-on. Thanks for your support!

// based on code here http://userscripts.org/scripts/show/3284  and here http://userscripts.org/scripts/show/558

// @include       *

// @author Gina Trapani
// @homepage http://ginatrapani.org/workshop/greasemonkey/
// @enabledbydefault false
// ==/UserScript==


var associateID = 'betteraddons-20';

function getASIN(href) {
  var asinMatch;
  asinMatch = href.match(/\/exec\/obidos\/ASIN\/(\w{10})/i);
  if (!asinMatch) { asinMatch = href.match(/\/gp\/product\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/exec\/obidos\/tg\/detail\/\-\/(\w{10})/i); }
  if (!asinMatch) { asinMatch = href.match(/\/dp\/(\w{10})/i); }
  if (!asinMatch) { return null; }
  return asinMatch[1];
}


(function() {
var allLinks = window.content.document.getElementsByTagName("a");
var asin = '';
for (i = 0; i < allLinks.length; i++) {
   var href = allLinks[i].href;
   if (href.match(/amazon\./i) && !href.match(/palitoy/i)) {
	   asin = getASIN(href);
	   if (asin != null) {
	   		if (GM_getValue("associateID")=='')
				allLinks[i].setAttribute("href", "http://amazon.com/o/ASIN/" + asin );
			else
				allLinks[i].setAttribute("href", "http://amazon.com/o/ASIN/" + asin + "/ref=nosim/"+associateID);
		}
	}
}


})();