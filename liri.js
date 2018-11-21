require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
//  var client = new Twitter(keys.twitter);

var command = process.argv[2]

var term = process.argv.slice(3).join(" ")

console.log(command)

// switch statement
function choose(command, term) {
    switch (command) {
        case "my-tweets":
            console.log("twitter");
            break;
        case "spotify-this-song":
            console.log("spotify");
            break;
        case "movie-this":
            console.log("movie")
            break;
        case "do-what-it-says":
            console.log("do")
            break;
        default:
            console.log("command not found")
    }
}

choose()

