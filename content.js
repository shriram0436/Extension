chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request == "twitter") {
        //using regular expression
        // const re = new RegExp('https://twitter.com/', 'gi')
        // const matches = document.documentElement.innerHTML.match(re)
        // console.log(matches);
        // sendResponse({
        //     count: matches,
        //     len:matches.length
        // })
        //usinf DOM parsing
        var x = document.links;
        var txt=[];
        var i;
        for (i = 0; i < x.length; i++) {
            txt.push(x[i].href);
        }
        console.log(txt);
        sendResponse({
            count: txt,
            len:txt.length
        })
    }

    if (request == "facebook") {
        // const re = new RegExp('https://www.facebook.com/', 'gi');
        // const matches = document.documentElement.innerHTML.match(re)
        // sendResponse({
        //     count: matches,
        //     len:matches.length
        // })
        var x = document.links;
        var txt=[];
        var i;
        for (i = 0; i < x.length; i++) {
            txt.push(x[i].href);
        }
        console.log(txt);
        sendResponse({
            count: txt,
            len:txt.length
        })
    }

    if (request == "linkedin") {
        // const re = new RegExp('https://www.linkedin.com/', 'gi');
        // const matches = document.documentElement.innerHTML.match(re)
        // sendResponse({
        //     count: matches,
        //     len:matches.length
        // })
        var x = document.links;
        var txt=[];
        var i;
        for (i = 0; i < x.length; i++) {
            txt.push(x[i].href);
        }
        console.log(txt);
        sendResponse({
            count: txt,
            len:txt.length
        })
    }

})