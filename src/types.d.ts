import {
  NewMessageInterface,
  NewMessageEvent
} from 'telegram/events/NewMessage';
import { TelegramClient } from 'telegram';

declare global {
  interface LBPlugin extends NewMessageInterface {
    handler: (event: NewMessageEvent, client: TelegramClient) => Promise<void>;
    commands?: string | string[];
    allowArgs?: boolean;
  }
}
