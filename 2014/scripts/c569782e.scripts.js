!function(){var a=document.getElementById("agenda");a.addEventListener("change",function(b){var c=b.target,d=a.querySelectorAll("input[type=checkbox]:checked");Array.prototype.forEach.call(d,function(a){a!==c&&(a.checked=!1)})})}();