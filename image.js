function addImageifValid(){
    var URLtoload = document.getElementById('url-field').value;
    if (!URLtoload){
        console.log("Not a valid URL");
    }else{
        var picNode = document.createElement('img');
        picNode.className = URLtoload;
        picNode.src = URLtoload;
        document.body.appendChild(picNode)
    }
}

function removeImageifValid(){
    var URLtoremovefrom = document.getElementById('url-field').value;
    var nodestoremove = document.getElementsByClassName(URLtoremovefrom);
    if(nodestoremove){
        console.log(nodestoremove);
        nodestoremove.remove();
    }
}