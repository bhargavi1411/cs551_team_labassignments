/*

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://siri:siri123@ds147599.mlab.com:47599/labdatabase';

console.log(process.env.MONGO_ATLAS_PW);
MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db("icp_9");
    var myobj = {
        classid: "1",
        Sname:"Raji",
        course:"MS",
        major:"cs",
        minor:"ece"

    };
    dbo.collection("Users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
*/
