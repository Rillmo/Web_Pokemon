const express = require('express');
const app = express();

app.use(express.static('/Users/macbookpro/Phaser/web_pokemon/'));

app.listen(8080, function() {
    console.log('listening on 8080');
});

app.get('/', function(req, res){
    res.sendFile('/Users/macbookpro/Phaser/web_pokemon/', 'index.html');
})

