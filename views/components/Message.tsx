export interface MessageProps {
  message: string;
}

export default function Message({ message }: MessageProps) {
  return (
    <p id="message">
      <span className="font-bold">Message:</span> {message}
    </p>
  );
}
