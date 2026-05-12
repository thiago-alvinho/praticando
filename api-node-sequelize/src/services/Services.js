const DataSource = require('../database/models');

class Service {
    constructor(entity) {
        this.entity = entity;
    } 

    async getAll(where = {}) {
        return DataSource[this.entity].findAll({ where: {...where} });
    }

    async getByScope(scope) {
        return DataSource[this.entity].scope(scope).findAll();
    }

    async getById(id) {
        return DataSource[this.entity].findByPk(id);
    }

    async getByParams(where) {
        return DataSource[this.entity].findOne({ where: where});
    }

    async countAllRegistry(options) {
        return DataSource[this.entity].findAndCountAll({...options});
    }

    async createNew(data) {
        return DataSource[this.entity].create(data);
    }

    async updateParams(where, data, transacao = {}) {
        const listOfUpdates =  await DataSource[this.entity].update(data, {
            where: { ...where },
            transaction: transacao
        });

        if(listOfUpdates[0] === 0) {
            return false;
        }

        return true;
    } 

    async delete(id) {
        const listOfDeletes = DataSource[this.entity].destroy({
            where: { id: id},
        });

        if(listOfDeletes[0] === 0) {
            return false;
        }

        return true;
    }
}

module.exports = Service;