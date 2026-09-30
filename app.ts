import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.post('/imc', (req: Request, res: Response) => {
  //res.send('Vamos calcular o seu IMC');
  const {nome,idade,altura,peso} = req.body;
  const imc = peso/(altura*altura);
  const imcPreciso = parseFloat(imc.toFixed(2));
  let status = "";
  //Casting(coverte variaveis)
  if(imcPreciso<18.5){
 status = "abaixo do peso normal";
  }
  else if (imcPreciso<25){
status = "peso normal";
  }
  else if (imcPreciso<30){
status = "Excesso de peso";
  }
  res.json({
    nome,idade,altura,peso,imc:imcPreciso,status
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`);
});