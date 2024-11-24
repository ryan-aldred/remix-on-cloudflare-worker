import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-3xl text-lg">
      <div className="py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-pink-500 text-5xl mb-4">About me</h2>
          <span>
            I'm a Canadian Frontend Engineer that's been working at Shopify for
            over 5 years.
          </span>
          <span>
            In that time I've gone from answering the phone and doing chat
            support to contributing code that helps powers ~10% of global
            ecommerce.
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-pink-500 text-3xl mb-4">About this website</h3>
          <span>
            I built this website using Remix and Tailwind and deployed it to
            Cloudflare Workers.
          </span>
          <span>
            This site runs on Cloudflare's free tier since it get so little
            traffic.
          </span>
          <span>That's right...</span>
          <span>
            You're looking at a fullstack React app, running on globably
            distrutributed serverless infrastructure with sub-second latency for
            free!
          </span>
          <span>
            Go look it up on{" "}
            <Link
              to="https://tools.pingdom.com/"
              className="hover:color-pink-400"
            >
              Pingdom
            </Link>{" "}
            for yourself
          </span>
          <h3 className="text-xl">
            And you can expect this kind of ingenuity in everything I do.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row mx-auto md:justify-between gap-y-8 w-full text-center md:text-left">
          <div>
            <h3 className="text-3xl text-sky-400 mb-4">Specialties</h3>
            <ul className="md:list-disc  ml-6">
              <li>Typescript</li>
              <li>React</li>
              <li>
                Capable of contributing to a range of TypeScript and React
                frontends that are the face of a 12 figure business and power
                ~10% of global ecommerce
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl text-sky-400 mb-4">Other competencies</h3>
            <ul className="md:list-disc  ml-6">
              <li>
                Can read technical documentation and use LLMs without having an
                existential crisis
              </li>
              <li>@solana/web3.js</li>
              <li>Helius RPC</li>
              <li>Graphql</li>
              <li>Ruby On Rail</li>
              <li>SQL querying</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl text-sky-400 mb-4">Tools used</h3>
            <ul className="md:list-disc  ml-6">
              <li>Node.js</li>
              <li>Bun.js</li>
              <li>Git</li>
              <li>Prompting</li>
              <li>Graphite</li>
              <li>Slack</li>
              <li>Big Query</li>
              <li>Goggle Cloud Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
