import express from "express";
import config from 'config';
import connectMongo from "./utils/connect";
import routes from "./routes";

const port = config.get<number>('port');
const app = express();

app.listen(port, async () => { 
	console.log("App is running!");
	await connectMongo();
	routes(app);
});
