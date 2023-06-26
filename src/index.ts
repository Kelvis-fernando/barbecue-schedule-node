import express, { Request, Response } from "express";

const app = express();
const port = 5555;

app.get("/", (req: Request, res: Response) => {
  res.send("Olá, mundo!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
