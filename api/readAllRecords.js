/**
 * Created by veronicacordobes on 25/10/16.
 */
var api = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var user = context.user.id;


        var query = {
            sql: "Select * FROM Authors"
        };

        req.azureMobile.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }

};

api.get.access = 'anonymous';
module.exports = api;