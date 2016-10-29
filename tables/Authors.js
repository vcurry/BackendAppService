/**
 * Created by veronicacordobes on 23/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "id": "string",
    "author": "string",
    "title": "string",
    "text": "string",
    "image": "string",
    "latitude": "number",
    "longitude": "number",
    "views": "number"
};


/*
 *   Trigger para insert
 *
 * */

table.insert(function (context) {

    context.item.usuario = context.user.id;
    return context.execute();
});


/*
Permisos de acceso a la tabla
 */

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';



module.exports = table;