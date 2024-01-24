import { Controller, Get, Post } from '@nestjs/common';

import renderComponent from './renderComponent';

let messageState = 'Hello World!';
let counterState = 0;

@Controller()
export class AppController {
  @Get('')
  index() {
    return renderComponent('index', {
      message: messageState,
      counter: counterState,
    });
  }

  @Post('increment')
  increment() {
    counterState++;

    return renderComponent('components/counter', {
      counter: counterState,
    });
  }

  @Post('change')
  change() {
    const messageStateChanged = messageState === 'Hello HTMX!';
    if (messageStateChanged) {
      messageState = 'Hello World!';
    } else {
      messageState = 'Hello HTMX!';
    }

    return renderComponent('components/message', { message: messageState });
  }
}
