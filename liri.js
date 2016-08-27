console.log("Welcome to LIRI");
var client = require("./keys.js");
var twitter = require("twitter");
var imdb = require("request");
var spotify = require("spotify");
var fs = require("fs");
var twitter = new Twitter(client);
var search = process.argv[2];

