function getLatestURL(){
    return document.getElementById('url-field').value;
}

function addImageifValid(){
    var URLtoload = getLatestURL();
    validateURL().then(function(){
        clearErrorMsg();
        var picNode = document.createElement('img');
        picNode.className = URLtoload;
        picNode.src = URLtoload;
        document.getElementById('picture-container').appendChild(picNode);
    }, printErrorMsg("Picture couldn't be loaded"));
}

function removeImageifValid(){
    var URLtoremovefrom = getLatestURL();
    var nodestoremove = document.getElementsByClassName(URLtoremovefrom);
    if(nodestoremove){
        for (var i = nodestoremove.length - 1; i >= 0; --i){
            nodestoremove[i].parentNode.removeChild(nodestoremove[i]);
        }
    }
}

function validateURL(timeoutT){
    return new Promise(function (resolve, reject) {
        var timeout = timeoutT || 5000;
        var timer, img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            printErrorMsg("The image could not be loaded");
            reject("The image could not be loaded");
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve("Successfully loaded image");
        };
        timer = setTimeout(function () {
            img.src = "";
            printErrorMsg("Image couldn't be loaded due to timeout");
            reject("Image couldn't be loaded due to timeout");
        }, timeout);
        img.src = getLatestURL();
    });
}

function printErrorMsg(errormsg){
    document.getElementById('error-container').innerHTML = errormsg;
}

function clearErrorMsg(){
    document.getElementById('error-container').innerHTML = "";
}