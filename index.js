const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.download("./Mehedi_Web_Developer_Resume.pdf");
});

app.listen(4000);