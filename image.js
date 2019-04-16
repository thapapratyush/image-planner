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
    
}