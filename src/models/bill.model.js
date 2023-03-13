const mongoose = require("mongoose");
const billSchema = mongoose.Schema({
  numBill: {
    type: Number,
    required: true,
    unique: true,
  },
  sellDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  client: {
    type: Object,
    required: true,
    typeId: {
      type: String,
      required: true,
    },
    numId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
      required: true,
      description: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  product: {
    type: Object,
    required: true,
    sku: {
      type: Number,
      unique: true,
    },
    detail: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    unitValue: {
      type: Number,
      required: true,
    },
    ivaPercent: {
      type: Number,
      required: true,
    },
    //Como se podria crear un calculo aqui? para tomar el valor y el porcentaje y que se calcule el valor del iva
    ivaCost: {
      type: Number,
      required: true,
    },
  },
  //Como se podria crear un calculo aqui
  subTotal: {
    type: Number,
    required: true,
  },
  //Como se podria crear un calculo aqui
  ivaTotal: {
    type: Number,
    required: true,
  },
  //Como se podria crear un calculo aqui
  total: {
    type: Number,
    required: true,
  },
  observations: {
    type: String,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  wayPay: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('bill', billSchema)