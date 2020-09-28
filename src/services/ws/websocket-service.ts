import io from 'socket.io-client';
import { Observable } from 'rxjs';

import { logInfo, logError } from 'helpers/logger';

export class SocketService {
  private socket: SocketIOClient.Socket;

  constructor(url: string, reconnectionDelay = 5000, reconnectionAttempts = 20) {
    this.socket = io(url, {
      reconnectionAttempts,
      reconnectionDelay,
    });
    this.socket.on('connect', SocketService.connected);
    this.socket.on('disconnect', SocketService.disconnected);
    this.socket.on('error', logError);
  }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  emit<T>(chanel: string, message: T): void {
    this.socket.emit(chanel, message);
  }

  on<T>(eventName: string): Observable<T> {
    return new Observable(observer => {
      this.socket.off(eventName);
      this.socket.on(eventName, (data: T) => {
        observer.next(data);
      });
    });
  }

  static connected(): void {
    logInfo('Socket has been connected...');
  }

  static disconnected(): void {
    logInfo('Socket was disconnected!');
  }
}
