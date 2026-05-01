class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const allRegistries = await this.entityService.getAll();
            return res.status(200).json(allRegistries);
        } catch (error) {
            // error
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const registry = await this.entityService.getById(Number(id));
            return res.status(200).json(registry);
        } catch(error) {
            // error
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
            console.log(error);
        }
    }

    async updateById(req, res) {
        const data = req.body;
        const { id } = req.params;

        try {
            const isUpdated = await this.entityService.updateById(Number(id), data);
            if(!isUpdated) {
                return res.status(400).json({ message: "User hasn't been updated"});
            }

            return res.status(200).json({ message: 'Users has been updated'});
        } catch(error) {
            // error
        }
    }

    async deleteById(req, res) {
        const { id } = req.params;

        try{
            const isDeleted = await this.entityService.delete(Number(id));
            if(!isDeleted) {
                return res.status(400).json({ message: "User hasn't been deleted" });
            }
            return res.status(200).json({ message: 'User has been deleted' });
        } catch(error) {
            // error
        }
    }
}

module.exports = Controller;