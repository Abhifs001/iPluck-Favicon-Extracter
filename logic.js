function isValidUrl(string){
    const urlPat=/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
    var res= string.match(urlPat)
    return (res!=null)

 }

 function initCheck(){
            var url = document.getElementById("urltext").value;
            if(url==""){
                alert("Please Enter URL first");
            }else if(url!="" && isValidUrl(url)==true){
                    extractFav();
            }else{
                    alert("Please Enter Valid URL")
            }
            
 }

 function extractFav(){
    var rUrl= document.getElementById("urltext").value;
    var rImg= document.getElementById("favImg");
    var rSize = document.getElementById("sizeList").value;
    var apiImg= "https://icons.duckduckgo.com/ip3/"; 
    var gApi= "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="
    // problem with this api is for https and http it gives error favicon

    if(rSize=="default"){
        rImg.src=gApi+rUrl+"&size=16"
    }else if(rSize=="16"){
        rImg.src=gApi+rUrl+"&size=16"
    }
    else if(rSize=="32"){
        rImg.src=gApi+rUrl+"&size=32"
    }
    else if(rSize=="48"){
        rImg.src=gApi+rUrl+"&size=48"
    
    }else if(rSize=="64"){
        rImg.src=gApi+rUrl+"&size=64"
    }
    else if(rSize=="128"){
        rImg.src=gApi+rUrl+"&size=128"
    }

 }