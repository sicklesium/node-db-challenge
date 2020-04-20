const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.listen(PORT, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`\n*** Server is listening on Port ${PORT}!***\n`);
});