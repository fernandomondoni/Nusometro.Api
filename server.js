const app = require("./src/app");
const connectDB = require("./src/utils/db");

const PORT = 5000;

// Conectando ao banco de dados
connectDB();

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
