var http=require('http');
 var dt=require('./ownmodule.js');
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'})
res.write("The data and time are currently: "+ dt.getCurrentDate());
res.end();
}).listen(8800);