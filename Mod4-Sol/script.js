
(function (window) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i =1; i< names.length; i++ ) 
{

 var firstletter = names[i].charAt(0).toLowerCase();

  if (firstletter === "j") {
    byespeaker.speak(names[i]);
  } else {
    hellospeaker.speak(names[i]) 
     }
}
})(window);