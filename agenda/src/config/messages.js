module.exports = {
    user: {
        "SUCCESS_REGISTER" : "Usuário cadastrado com sucesso",
        "USER_ALREADY_EXIST" : "Usuário já cadastrado",
        "DEFAULT_ERROR" : "Erro ao tentar cadastrar. Tente novamente",
        "EMAIL_PASSWORD_INVALID": "Email ou senha invalidos"
    },

    contact: {
        "SUCCESS_REGISTER": "Contato salvo com sucesso",
        "UPDATE_REGISTER": "Contato atualizado com sucesso",
        "REMOVE_REGISTER": "Contato removido com sucesso",
        "DEFAULT_ERROR" : "Erro ao tentar cadastrar. Tente novamente",
    },

    address: {
        "SUCCESS_REGISTER": "Endereço salvo com sucesso",
        "REMOVE_REGISTER": "Endereço removido com sucesso"
    },

    validation: {
        "REQUIRED": "O campo {field} deve ser preenchido",
    },

    fn: {
        replace: function(field, message){
            return message.replace("{field}", field);
        }
    }
}