const mongoose = require("mongoose")


const connectionDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connection Sucessful:", connect.connection.host,connect.connection.name)
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connectionDB;