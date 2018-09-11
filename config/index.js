const configvalues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        // mongodb://<dbuser>:<dbpassword>@ds151602.mlab.com:51602/nodetodo

        return "mongodb://" + configvalues.uname + ":" + configvalues.pwd + "@ds151602.mlab.com:51602/nodetodo"


    }


};