// implement your server here


const express = require("express");

const server = express();

server.use(express.json());

const postRoutes = require("./posts/posts-router");

server.use("/api/posts", postRoutes);


module.exports = server;

