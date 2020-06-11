var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
    
var textArray = [
  "I am a student",
  "I am a programmer",
  "I am a team player",
  "I love technology",
  "I go to Michigan",
  "Bash me all you want Buckeyes"];
  
var speedForward = 100,
    speedWait = 1000,
    speedBackspace = 25;
    
typewriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1");
      
  if (!isBackspacing) {
    if (i < aString.length) {
      if (aString.charAt(i) == "|") {
          
      } else {
        if (!isParagraph) {
        eHeader.text(eHeader.text() + aString.charAt(i)); }
      else {
      }
      i++;
      setTimeout(function(){ typeWriter(id, ar); }, speedForward);
    }
    else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
    }
  else {
    if (eHeader.text().length > 0) {
      if (eHeader.text().length > 0) {
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(function(){ typeWriter(id, ar); }, 50);
    }
  }
}
