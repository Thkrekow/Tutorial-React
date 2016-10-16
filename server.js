var app = require("express")() 
var port = 3000

var success = function(error){
    console.log("listen on http://127.0.0.1:" + port)
}

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html")
})

app.listen(port, success)

/* liefere alle Dateien die sich in dem Ordner public befinden statisch aus.Versuche es mit gulp umzusetzen. Schreib eine reset.scss.
lade das komplette repository auf git. Über und erstelle funktionen*/