
var squash = (function(doc) {
var nodes, howMany = 0;

nodes = doc.getElementsByTagName('a');
for(var i = 0, len = nodes.length; i < len; i ++) {
    if (nodes[i].target != '') {
        console.log(nodes[i].innerHTML)
        nodes[i].onclick = function(){ return false; };
        howMany++;
    }
}

return howMany;
}(document))

console.log(squash);