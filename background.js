function checkForValidUrl(tabId, changeInfo, tab) {
	if ( tab.url.match(/^https?:\/\/.*\.acunote\.com\/.*query=.*/) ) {
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);