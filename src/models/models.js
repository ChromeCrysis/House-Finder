const SQL = require('./bd')

const Usuario = SQL.sequelize.define('usuario', {
    id:{
        type: SQL.Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: SQL.Sequelize.STRING
    },
    email:{
        type: SQL.Sequelize.STRING,
        unique: true
    },
    senha:{
        type: SQL.Sequelize.STRING,
    }
})

const Informacoes_Usuario = SQL.sequelize.define('informacoes_usuario', {
    id:{
        type: SQL.Sequelize.INTEGER,
        unique: true
    },
})

const Anuncios = SQL.sequelize.define('anuncios', {
    id: {
        type:SQL.Sequelize.INTEGER,
        primaryKey: true
    },
    titulo:{
        type: SQL.Sequelize.TEXT
    },
    tipo_de_negocio:{
        type: SQL.Sequelize.ENUM('Alugar', 'Vender')
    },
    tipo_de_imovel: {
        type: SQL.Sequelize.ENUM('Apartamentos', 'Casas', 'Condominios', 'Comercio', 'Galpao Industrial', 'Salas Comerciais')
    },
    preco:{
        type: SQL.Sequelize.DOUBLE
    },
    endereco:{
        type: SQL.Sequelize.TEXT
    },
    cidade:{
        type: SQL.Sequelize.STRING
    },
    estado: {
        type: SQL.Sequelize.STRING
    },
    area:{
        type: SQL.Sequelize.DOUBLE
    },
    vagas_garagem:{
        type: SQL.Sequelize.INTEGER
    },
    quartos:{
        type: SQL.Sequelize.INTEGER
    },
    banheiros:{
        type: SQL.Sequelize.INTEGER
    },
    proprietario:{
        type: SQL.Sequelize.STRING
    },
    imagens:{

    }
})
