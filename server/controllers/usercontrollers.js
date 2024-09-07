const { User } = require(`../models`)
const { compare } = require(`../helpers/bcrypt`)
const { signToken } = require(`../helpers/jwt`)

class usercontrollers{
    static async register(req, res, next){
        try {
            const {email,password} = req.body
            const user = await User.create({email,password})
            res.status(201).json({
                massage: "success Create User",
                user})
        } catch (error) {
            next (error)
        }
    }

    static async login(req, res, next){
        try {
            const { email, password } = req.body
            if (!email || !password) throw { name: "InvalidLogin" }
            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) throw { name: "LoginError" }
            if (!compare(password, user.password)) throw { name: "LoginError" }
            const payload = {
                id: user.id,
                email: user.email,
            }

            const access_token = signToken(payload)
            res.status(200).json({
                access_token
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = usercontrollers