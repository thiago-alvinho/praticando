const DataSource = require('../models');

class Service {
    constructor(entity) {
        this.entity = entity;
    } 

    async getAll() {
        return DataSource[this.entity].findAll();
    }

    async getById(id) {
        return DataSource[this.entity].findByPk(id);
    }

    async createNew(data) {
        return DataSource[this.entity].create(data);
    }

    async updateById(id, data) {
        const listOfUpdates =  DataSource[this.entity].update(data, {
            where: { id: id },
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