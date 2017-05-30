import * as express from 'express'

let app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
