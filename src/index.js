const express = require("express");
const assetsRoutes = require("./routes/assets.routes");
const loginRoutes = require("./routes/login.routes");
const userRoutes = require("./routes/user.routes");
const investimentosRoutes = require("./routes/investimentos.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(loginRoutes);
app.use(assetsRoutes);
app.use(investimentosRoutes);

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
