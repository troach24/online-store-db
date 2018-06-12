const database = require("./database-connection");

module.exports = {
    list(){
        return database('inventory').select();
    },
    read(id){
        return database('inventory').select().where("id", id).first();
    },
    create(inventory){
        return database('inventory').insert(inventory).returning('*').then(record => record[0]);
    },
    update(id, inventory){
        return database('inventory').where("id", id).update(inventory, "*").then(record => record[0]);
    },
    delete(id){
        return database('inventory').where("id", id).del();
    }
};
