import express from 'express';
class Server {
    private app: express.Application;
    private port: string;
    constructor() {
        this.app = express();
        this.port = '3001';
        this.listen();
    }
    listen() {
        this.app.listen(this.port,()=>{
            console.log(`Application Running on Port ${this.port}`)
        })
    }
}

export default Server;