    const Cliente = require('../models/Cliente')
    const bcrypt = require('bcrypt')

    module.exports = class ClienteController{
        static async cadastrar(req, res){
            const nome = req.body.nome
            const telefone = req.body.telefone
            const email = req.body.email
            const senha = req.body.senha
            const confsenha = req.body.senhaconf

            if(!nome){
                res.status(422).json({mensagem: "O nome é obrigatório"})
                return 
            } 

            if(!telefone){
                res.status(422).json({mensagem: "O telefone é obrigatório"})
                return
            }

            if(!email){
                res.status(422).json({mensagem: "O email é obrigatório!"})
                return
            }

            if(!senha){
                res.status(422).json({mensagem: "A senha é obrigatória!"})
                return
            }

            if(!senhaconf){
                res.status(422).json({mensagem: "Confirme sua senha!"})
                return
            }
        }








    }