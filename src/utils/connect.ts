import mongoose from "mongoose";
import config from 'config';

async function connect() {
	const dbUri = config.get<string>("dbUri");
	try {
		await mongoose.connect(dbUri, { dbName: 'BudgetApp'});		
		console.log("Connected to Mongo!");
	}
	catch {
		console.log("Could not connect to Mongo");
		process.exit(1);
	}
}

export default connect;