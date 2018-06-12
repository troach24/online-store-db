const database = require("./database-connection");

module.exports = {
    list(){
        return database('cart').select();
    },
    read(id){
        return database('cart').select().where("id", id).first();
    },
    create(cart){
        return database('cart').insert(cart).returning('*').then(record => record[0]);
    },
    update(id, cart){
        return database('cart').where("id", id).update(cart, "*").then(record => record[0]);
    },
    delete(id){
        return database('cart').where("id", id).del();
    }
};
