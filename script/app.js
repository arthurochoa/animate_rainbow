var x = 0;

function effect(el){
    var colr = ["violet","indigo","blue","green","yellow","orange","red"];
    var rand = colr[Math.floor(Math.random() * colr.length)];

    el.style.visibility = "hidden";
    el.style.backgroundColor = rand;
    el.style.visibility = "visible";
};

function init() {
  var content = document.getElementsByClassName('content');
	var len = content.length;
  
  setInterval(function() { 
    for (var i = 0; i < len; i++) {
      effect(content[i]);
    }
  }, 70);
}

window.onload = init;