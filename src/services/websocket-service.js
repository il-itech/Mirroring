import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { logInfo, logError } from '../helpers/logger';

export class SocketService {
  socket;

  constructor(url, reconnectionDelay = 5000, reconnectionAttempts = 20) {
    this.socket = io(url, {
      reconnectionAttempts,
      reconnectionDelay,
    });
    this.socket.on('connect', SocketService.connected);
    this.socket.on('disconnect', SocketService.disconnected);
    this.socket.on('error', logError);
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  emit(chanel, message) {
    this.socket.emit(chanel, message);
  }

  on(eventName) {
    return new Observable(observer => {
      this.socket.off(eventName);
      this.socket.on(eventName, (data) => {
        observer.next(data);
      });
    });
  }

  static connected() {
    logInfo('Has been connected...');
  }

  static disconnected() {
    logInfo('Was disconnected!');
  }
}
