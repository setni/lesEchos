chrome.tabs.query({
            
        active: true, lastFocusedWindow: true
            
    },function(tab) {
        url = tab[0].url;
        if(/lesechos/g.test(url)) {
            tabId = tab[0].id;
            file = 'content.js';
            chrome.tabs.executeScript(tabId, {file : file});
        } 
    }
);