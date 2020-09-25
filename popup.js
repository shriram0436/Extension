document.addEventListener('DOMContentLoaded',function(){
    //twitter
    document.getElementById("twitter").addEventListener('click',onclickTwitter,false)
    
    function onclickTwitter(){
        chrome.tabs.query({currentWindow:true,active:true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,'twitter',setData)
        })
    }
    function setData(res){
        console.log(res);
        for(i=0;i<res.len;i++){
            const div=document.createElement('div');
            const br=document.createElement('br');
            div.textContent=`${res.count[i]}`
            document.body.appendChild(div)
            document.body.appendChild(br)
         }
    }

    //facebook
    document.getElementById("facebook").addEventListener('click',onclickFacebook,false)
    
    function onclickFacebook(){
        chrome.tabs.query({currentWindow:true,active:true},
        function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,'facebook',setFbData)
        })
    }
    function setFbData(res){
        console.log(res);
        for(i=0;i<res.len;i++){
            const div=document.createElement('div');
            const br=document.createElement('br');
            div.textContent=`${res.count[i]}`
            document.body.appendChild(div)
            document.body.appendChild(br)
         }
    }
    //linkedIn
     document.getElementById("linkedin").addEventListener('click',onclickLi,false)
    
     function onclickLi(){
         chrome.tabs.query({currentWindow:true,active:true},
         function(tabs){
             chrome.tabs.sendMessage(tabs[0].id,'linkedin',setLiData)
         })
     }
     function setLiData(res){
         console.log(res);
         for(i=0;i<res.len;i++){
            const div=document.createElement('div');
            const br=document.createElement('br');
            div.textContent=`${res.count[i]}`
            document.body.appendChild(div)
            document.body.appendChild(br)
         }
         
     }

},false)