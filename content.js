chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request == "twitter") {
        const re = new RegExp('https://twitter.com/', 'gi')
        const matches = document.documentElement.innerHTML.match(re)
        console.log(matches);
        sendResponse({
            count: matches,
            len:matches.length
        })
    }

    if (request == "facebook") {
        const re = new RegExp('https://www.facebook.com/', 'gi');
        const matches = document.documentElement.innerHTML.match(re)
        sendResponse({
            count: matches,
            len:matches.length
        })
    }

    if (request == "linkedin") {
        const re = new RegExp('https://www.linkedin.com/', 'gi');
        const matches = document.documentElement.innerHTML.match(re)
        sendResponse({
            count: matches,
            len:matches.length
        })
    }

})