export interface CounterProps {
  counter: number;
}

export default function Counter({ counter }: CounterProps) {
  return (
    <div id="counter">
      <span className="font-bold">Counter:</span> {counter}
    </div>
  );
}
