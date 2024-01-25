import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import renderComponent from './renderComponent';

let messageState = 'Hello World!';
let counterState = 0;

@Controller()
export class AppController {
  @Get('')
  async index(@Res() res: Response) {
    res.send(
      await renderComponent('index', {
        message: messageState,
        counter: counterState,
      }),
    );
  }

  @Post('increment')
  async increment(@Res() res: Response) {
    counterState++;

    res.send(
      await renderComponent('components/counter', {
        counter: counterState,
      }),
    );
  }

  @Post('change')
  async change(@Res() res: Response) {
    const messageStateChanged = messageState === 'Hello HTMX!';
    if (messageStateChanged) {
      messageState = 'Hello World!';
    } else {
      messageState = 'Hello HTMX!';
    }

    res.send(
      await renderComponent('components/message', {
        message: messageState,
      }),
    );
  }
}
