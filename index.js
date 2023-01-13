#!/usr/bin/env node
const help = require("./cmds/help");
const version = require("./cmds/version");
const customRoute = require("./cmds/customRoute");
const journeySegement = require("./cmds/journeySegement");
const initialCommands = process.argv.slice(2);
const initialCommand = initialCommands[0];
const routes = process.argv.slice(3)[0];
const aliasForJourney = process.argv.slice(4)[0];
const ids = process.argv.slice(5)[0];
switch (initialCommand) {
  case "help":
  case "-h":
    return help();
  case "version":
  case "-v":
    return version();
  case "custom":
  case "-c":
    return customRoute(routes);
  case "path":
  case "-p":
    return aliasForJourney === "c"
      ? journeySegement(routes, ids, null)
      : journeySegement(routes, null, ids);
  default:
    console.log("Wrong Command !!");
}
