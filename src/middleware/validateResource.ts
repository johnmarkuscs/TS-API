import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validate = 
	(schemaUser: AnyZodObject) => 
	(req: Request, res: Response, next: NextFunction) => {

		try {
			schemaUser.parse({
				body: req.body,
				query: req.query,
				params: req.params
			});
		} catch (e: any) {
			return res.status(400).send(e.errors);
		}
};

export default validate;