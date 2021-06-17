
class UserController {

    index(req, res){
        return res.send({
            message: []
        });
    }
}
module.exports = new UserController();