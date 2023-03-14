import { WebSocket } from 'ws';

export class BitmexSocketService {
  private socket: WebSocket;
  // private connection;

  //   private socket.onclose = this.onClose;
  //   private socket.onmessage = this.onMessage;
  //   private socket.onerror = this.onError;
  private url = 'wss://ws.bitmex.com/realtime';

  constructor() {}

  init() {
    this.socket = new WebSocket(this.url);
    this.socket.onopen = this.onOpen;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = this.onMessage;
    this.socket.onerror = this.onError;
    return this.socket;
  }

  onOpen() {
    console.log('OPENED: ' + this.url);
  }

  onClose() {
    console.log('CLOSED: ' + this.url);
  }

  onMessage(event) {
    const data = event.data;
    console.log(data);
  }

  onError(event) {
    alert(event.data);
  }

  onSend(message) {
    this.socket.send(message)
  }
}
