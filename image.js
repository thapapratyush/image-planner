function getLatestURL(){
    return document.getElementById('url-field').value;
}

function addImageifValid(){
    var URLtoload = getLatestURL();
    validateURL().then(clearErrorMsg(), printErrorMsg("Picture couldn't be loaded"));
}

function populateimagenode(img){
    clearErrorMsg();
    img.className = "img-class";
    document.getElementById('picture-container').appendChild(img);
}

function removeImageifValid(){
    if (supportsRendering()){
        var nodestoremove = document.getElementsByClassName("img-class");
        if (nodestoremove.length != 0){
            for (var i = nodestoremove.length - 1; i >= 0; --i){
                if (nodestoremove[i].src==getLatestURL()) {
                    nodestoremove[i].parentNode.removeChild(nodestoremove[i]);
                }
            }
        } else {
            printErrorMsg("Image not found cannot delete!")
        }
    } else {
        printErrorMsg("Image URL is invalid. Can't delete the image");
    }
}

function supportsRendering(){
    return(getLatestURL().match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function validateURL(timeoutT){
    if (supportsRendering()){
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
                populateimagenode(img);
                resolve("Successfully loaded image");
        };
        timer = setTimeout(function () {
            img.src = ".php";
            printErrorMsg("Image couldn't be loaded due to timeout");
            reject("Image couldn't be loaded due to timeout");
        }, timeout);
        img.src = getLatestURL();
    });
    } else {
        printErrorMsg("Image URL is invalid");
    }
}

function printErrorMsg(errormsg){
    document.getElementById("error-container").innerHTML = errormsg;
}

function clearErrorMsg(){
    document.getElementById("error-container").innerHTML = "";
}