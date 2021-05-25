const express = require("express");
const app = express();
const TextToSVG = require("text-to-svg");
const textToSVG = TextToSVG.loadSync();

app.get("/", (req, res) => {
  const attributes = {fill: 'blue', stroke: 'black'};
  const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};
  const svg = textToSVG.getSVG('hello', options);
 
  console.log(svg);
  res.send(svg);
});

app.listen(8888);
