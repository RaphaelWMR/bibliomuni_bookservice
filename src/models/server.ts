import express, { Request, Response } from 'express';
class Server {
    private app: express.Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application Running on Port ${this.port}`)
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: `API Working`
            })
        });
    }
}



export default Server;