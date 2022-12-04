const {ordersRepo} = require('../data/data')

exports.ordersController = {
    getOrders(req, res) {
       res.status(200);
       res.json(ordersRepo.getAllData());
    },

    getOrderByID(req,res)
    {
        res.status(200);
        res.json(ordersRepo.getAllData().filter((order) =>{
            return order.id == req.params.id
        }));
    },

    addOrder(req, res) {
        const { body } = req;
        ordersRepo.updateData(body);
        res.status(200);
        res.write('Order added!');
    },

    updateOrder(req, res) {
        const {body} = req;

        const editedData = ordersRepo
            .getAllData()
            .map( (order) =>
            {
                if (order.id == req.params.id)
                {
                    return {...order, ...body}
                }
                else
                {
                    return order
                }
            });
        ordersRepo.updateAllData(editedData);


        },
    deleteOrder(req,res)
    {
        res.status(200);
        const editedData = ordersRepo
            .getAllData()
            .filter((order) =>
                order.id != req.params.id
        );
        ordersRepo.updateAllData(editedData);
    }

};
