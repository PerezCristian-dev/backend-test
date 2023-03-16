import { BitmexSocketService } from './bitmex-socket/bitmex-socket.service';
import { SubscribeDto } from './suscribe.dto';

export class AppService {
  constructor(private bitmexSocketService = new BitmexSocketService()) {}

  getSocket() {
    this.bitmexSocketService.init();
  }

  subscribe(body: SubscribeDto) {
    const { subscribe, array } = body;
  }
}
