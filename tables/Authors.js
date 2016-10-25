/**
 * Created by veronicacordobes on 23/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "author" : "string",
    "title" : "string",
    "text" : "string"
};

module.exports = table;