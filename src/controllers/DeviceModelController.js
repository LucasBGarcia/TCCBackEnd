const DeviceModel = require('../models/DeviceModel')

module.exports = {
    async index(req, res) {
        try {
            const DeviceModels = await DeviceModel.findAll({
                include: [{
                    association: 'DeviceBrand'
                }]
            });

            return res.status(200).json(DeviceModels);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    async store(req, res) {
        const { DeviceBrand_id, devicemodel } = req.body;
        try {
            if (!devicemodel) {
                return res.status(400).json({ error: "Campo modelo é obrigatório" });
            }

            const NewDeviceModel = await DeviceModel.create({ DeviceBrand_id, devicemodel });

            return res.status(200).json(NewDeviceModel);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },

    //retorna todas as ordens de serviço de um cliente
    async indexByOrder(req, res) {
        const { DeviceBrand_id } = req.params;

        const model = await DeviceModel.findByPk(DeviceBrand_id, {
            include: { association: 'DeviceBrand' }
        });

        return res.status(200).json(model);

    },
    async indexByDeviceBrand(req, res) {
        try {
            const { DeviceBrand_id } = req.params;

            if (!DeviceBrand_id) {
                return res.status(400).json({ error: 'DeviceBrand_id is required' });
            }

            const models = await DeviceModel.findAll({ where: { DeviceBrand_id } });

            return res.status(200).json(models);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    async destroy(req, res) {
        const { id } = req.params;

        try {
            const devicemodel = await DeviceModel.destroy({ where: { id: id } });

            if (devicemodel) {
                return res.status(200).json("Modelo deletado");
            } else {
                return res.status(400).json("Não há modelos com esse id");
            }

        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
}
