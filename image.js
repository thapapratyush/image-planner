function addImageifValid(){
    var URLtoload = document.getElementById('url-field').value;
    if (!URLtoload){
        console.log("Not a valid URL");
    }else{
        var picNode = document.createElement('img');
        picNode.className = URLtoload;
        picNode.src = URLtoload;
        document.getElementById('picture-container').appendChild(picNode);
    }
}

function removeImageifValid(){
    var URLtoremovefrom = document.getElementById('url-field').value;
    var nodestoremove = document.getElementsByClassName(URLtoremovefrom);
    if(nodestoremove){
        for (var i = nodestoremove.length - 1; i >= 0; --i){
            nodestoremove[i].parentNode.removeChild(nodestoremove[i]);
        }
    }
}

function 