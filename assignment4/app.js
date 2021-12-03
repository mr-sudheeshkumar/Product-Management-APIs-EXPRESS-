const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

const prodRoutes = require("./routes/products");
const companyRoutes = require("./routes/companies");
const sellerRoutes = require("./routes/sellers");

app.use("/products", prodRoutes);
app.use("/companies", companyRoutes);
app.use("/sellers", sellerRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
