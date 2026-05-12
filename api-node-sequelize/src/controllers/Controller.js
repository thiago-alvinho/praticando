const converterStringToNumber = require('../utils/converterStringToNumber');

class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const allRegistries = await this.entityService.getAll();
            return res.status(200).json(allRegistries);
        } catch (error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const registry = await this.entityService.getById(Number(id));
            return res.status(200).json(registry);
        } catch(error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async getByParams(req, res) {
        const { ...params } = req.params;
        const where = converterStringToNumber(params);
        try {
            const registry = await this.entityService.getByParams(where);
            return res.status(200).json(registry);
        } catch(error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async createNewRegistry(req, res) {
        const data = req.body;
        
        try {
            const registry = await this.entityService.createNew(data);
            if(!registry) {
                return res.status(500).json({ message: "There's been an error creating this registry"});
            }

            return res.status(201).json({ message: "Registry have been createad with sucess"});

        } catch(error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async updateParams(req, res) {
        const data = req.body;
        const { ...params } = req.params;
        const where = converterStringToNumber(params);

        try {
            const isUpdated = await this.entityService.updateParams(where, data);
            if(!isUpdated) {
                return res.status(400).json({ message: "User hasn't been updated"});
            }

            return res.status(200).json({ message: 'Users has been updated'});
        } catch(error) {
            return res.status(500).json({ error: error.message})
        }
    }

    async deleteById(req, res) {
        const { id } = req.params;

        try{
            const isDeleted = await this.entityService.delete(Number(id));
            if(!isDeleted) {
                return res.status(400).json({ message: "User hasn't been deleted" });
            }
            return res.status(204).json({ message: 'User has been deleted' });
        } catch(error) {
            return res.status(500).json({ error: error.message})
        }
    }
}

module.exports = Controller;