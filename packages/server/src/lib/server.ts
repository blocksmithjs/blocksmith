export class server {
  port: number;

  constructor(port: number) {
    this.port = port;
  }

  start() {
    console.log(`Starting server on ${this.port}`);
  }
}
