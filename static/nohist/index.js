function openInUnblocked(url)
  {
    
    var myWindow = window.open("", "_blank");
    myWindow.document.write("<title>Hayase Studies</title><link rel=\"icon\" type=\"image/x-icon\" href=\"./img/icons/https://tinyurl.com/u5hx9nnc\">")
    myWindow.document.write("<iframe onload=\"\" id='iframe' width=\"100%\" height=\"100%\" style=\"border:none;\"></iframe>");
    myWindow.document.write("<script>setTimeout(function() {document.getElementById('iframe').src = \""+url+"\"}, 500);</script>")
    myWindow.document.write("<style>body { margin:0;}</style>")
    myWindow.document.write("<script>function home(){document.getElementById('iframe').src = \""+url+"\"}</script>")

    myWindow.document.close();
    myWindow.stop();
    parent.location.replace('https://google.com');
  }
