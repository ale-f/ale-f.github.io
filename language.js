window.onload = function() {
  let selector = document.getElementById("_language");
  /* Oh, yeah, this is a robust solution. CSS stylesheets are famously
     never changed or replaced */
  let enRule = document.styleSheets[0].cssRules[0];
  let daRule = document.styleSheets[0].cssRules[1];
  selector.onclick = function() {
    if (enRule.style.display == "inherit") {
      enRule.style.display = "none";
      daRule.style.display = "inherit";
      selector.src = "/scotland.png";
      selector.title = "Help! Get me out of here!";
    } else {
      daRule.style.display = "none";
      enRule.style.display = "inherit";
      selector.src = "/dk.png";
      selector.title = "Siden her kan fordanskes!";
    }
  }
}
