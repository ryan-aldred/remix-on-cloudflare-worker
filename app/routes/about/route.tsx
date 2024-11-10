export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="py-20 flex flex-col">
        <h2 className="text-pink-500">1) What</h2>
        <span>
          Ryan built this website using Remix, a full stack version of React and
          deployed it to a Cloudflare worker
        </span>
        <span>
          Since it gets so little traffic, it's running on the free tier
        </span>
        <span>That's right</span>
        <span>
          You're looking at a fullstack React app, running on a globably
          distrutributed system with sub second page loads
        </span>
        <span>That's running for free</span>
        <h3 className="text-xl">
          You can expect Ryan to employ this kind of ingenuity in everything he
          does
        </h3>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl text-pink-500">Ryan's specialty</h2>
        <ul>
          <li>Typescript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
