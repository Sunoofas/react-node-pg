const {db} = require("../database/connectdb");

const getUserData = async(req, res)=>{
    try{
        const result = await db.query("SELECT * FROM Login");
        res.send(result);
    } catch(err){
        console.error(err);
        res.send("Error"+err);
    }
};

const addUserData = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const result = await db.query("INSERT INTO Login(email, password) VALUES ($1, $2) RETURNING",[email, password]);
        res.send(result);
        res.end();
    }
    catch(err){
        console.err(error);
        res.send("Error"+err);
        res.end();
    }
};

module.export ={
    getUserData,
    addUserData
};