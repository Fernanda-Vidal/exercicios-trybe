const { json } = require('express');
const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.get('/chocolates/search', async (req, res) => {
    const { q } = req.query;
    const chocolates = await cacaoTrybe.getChocolatesBySearch(q);
    res.status(chocolates.length === 0 ? 404 : 200).json(chocolates);
})

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
    const chocolate = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ totalChocolates: chocolate.length });
})

app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const chocolate = await cacaoTrybe.getChocolateById(Number(id));
    res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params;
    const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    const changeChocs = await cacaoTrybe.editChocolates(Number(id), req.body);

    console.log(req)

    if(changeChocs) return res.status(200).json({ chocolate: changeChocs });
    return res.status(404).json({ message: 'chocolate not found' });
})

module.exports = app;