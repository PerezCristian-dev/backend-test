import { BitmexSocketService } from './bitmex-socket/bitmex-socket.service';
import { SubscribeDto } from './suscribe.dto';

export class AppService {
  constructor(private bitmexSocketService = new BitmexSocketService()) {}

  getSocket() {
    this.bitmexSocketService.init();
    // console.log(await this.socket.connected);
  }

  subscribe(body: SubscribeDto) {
    const { subscribe, array } = body;
    console.log(body);
    this.bitmexSocketService.onSend(
      JSON.stringify({
        op: 'subscribe',
        args: array,
      }),
    );
  }
}
