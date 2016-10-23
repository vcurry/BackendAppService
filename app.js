/**
 * Created by veronicacordobes on 23/10/16.
 */

var express = require("express"),
    azuremobileapps = require("azure-mobile-apps");

var app = express(),
    mobile = azuremobileapps( { swagger: process.env.NODE_ENV !== 'production'});


mobile.tables.import("./tables");

mobile.api.import("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);

