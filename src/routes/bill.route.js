const express = require("express");
const billSchema = require("../models/bill.model");
const bill_routes_http = express.Router();

//Add new bill
bill_routes_http.post("/", (req, res) => {
  const bill = billSchema(req.body);
  bill
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// List of all invoice existing in the DB
bill_routes_http.get("/", (req, res) => {
  billSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// Consult a specific invoice existing in the DB
bill_routes_http.get("/:id", (req, res) => {
  const { id } = req.params;
  billSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// Update a specific invoice existing in the DB
bill_routes_http.put("/:id", (req, res) => {
  const { id } = req.params;
  const { numBill, client, product, subTotal, ivaTotal, total, observations, paymentMethod, wayPay} = req.body;
  billSchema
    .updateOne(
      { _id: id },
      { $set: { numBill, client, product, subTotal, ivaTotal, total, observations, paymentMethod, wayPay } }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// Delete a specific invoice existing in the DB
bill_routes_http.delete("/:id", (req, res) => {
  const { id } = req.params;
  billSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// Delete many ids whit a specific property
bill_routes_http.delete("/", (req, res) => {
  const query = {bill: { $typeId: "pasaporte"} };
  billSchema
    .deleteMany(query)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});


module.exports = bill_routes_http;
