var htmlparser = require("htmlparser2");
fs = require('fs');

function getHtml(file, callback){
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    callback(data)
  });
}

var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "div"){
            console.log(attribs.class)
            console.log(name)
            console.log(attribs)
        }
    },
    ontext: function(text){
        // if(text.includes("http://flightclub")){
          // console.log(text)
        // }
    },
    onclosetag: function(tagname){
        // if(tagname === "script"){
        //     console.log("That's it?!");
        // }
    }
}, {decodeEntities: true});
getHtml("Air_Jordans_Flight_Club.html", function(data){
    parser.write(data)

})

parser.end()
