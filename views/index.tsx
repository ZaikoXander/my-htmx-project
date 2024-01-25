import { Message, Counter, Button } from './components';

export interface IndexProps {
  message: string;
  counter: number;
}

export default function Index({ message, counter }: IndexProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My HTMX project</title>
        <link rel="shortcut icon" href="htmx-icon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="output.css" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      </head>
      <body>
        <main className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl mb-8">NestJs | HTMX | React</h1>
          <Message message={message} />
          <Counter counter={counter} />
          <Button
            className="mb-2"
            hx-post="/change"
            hx-swap="outerHTML"
            hx-target="#message"
          >
            Change message
          </Button>
          <Button hx-post="/increment" hx-swap="outerHTML" hx-target="#counter">
            Increment counter
          </Button>
        </main>
      </body>
    </html>
  );
}
