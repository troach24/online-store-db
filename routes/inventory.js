const express = require('express');
const router = express.Router();

const queries = require('../inventory-queries');

router.get("/", (request, response, next) => {
    console.log('get inventory');
    var inv = queries.list();
    console.log('inv: ', inv);

   queries.list().then(inventory => {
        // console.log('inv: ', inventory);
        response.json({inventory});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(inventoryItem => {
        inventoryItem
            ? response.json({inventoryItem})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(inventoryItem => {
        response.status(201).json({inventoryItem});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(inventoryItem => {
        response.json({inventoryItem});
    }).catch(next);
});

module.exports = router;
