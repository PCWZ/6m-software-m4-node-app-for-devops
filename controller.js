
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello I'm Parry! successfuly depluy my app!");
}

module.exports = print;