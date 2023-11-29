const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Tarefa = require('./routes/tarefa');
//const ForeignKey = require("./routes/users_e_tarefas");
const Users = require("./routes/users")
const PORT =  8082;

app.use(cors());
app.use(bodyParser.json());
app.use(Tarefa);
//app.use(ForeignKey);
app.use(Users);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});