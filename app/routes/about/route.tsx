import { Link, useLoaderData } from "@remix-run/react";
import data from "./data.json";
import { CareerChart } from "./components/CareerChart";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Ryan Aldred" },
    {
      name: "description",
      content:
        "Ryan went from frontline support to a TypeScript developer at Shopify in less than 5 years.",
    },
  ];
};

export function loader() {
  return {
    data,
  };
}

export default function About() {
  const { data } = useLoaderData<typeof loader>();

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
          <div className="h-96 my-10">
            <CareerChart data={data} />
          </div>
          <div>
            <h3 className="text-pink-500 text-2xl">Timeline</h3>
            <ol>
              <li className="list-none">A) I joined Shopify Support</li>
              <li className="list-none">
                B) I got promoted to Theme Support after the covid-era hiring
                freeze ended
              </li>
              <li className="list-none">
                C) I started secondment as Developer for Shop Promise
              </li>
              <li className="list-none">
                D) Shopify lays off 10% of the company
              </li>
              <li className="list-none">
                E) Shopify lays off 20% of the company, I got promoted to
                Developer for Shop Promise
              </li>
            </ol>
          </div>
          <div className="my-8">
            <p>
              I put this chart together to highlight my journey at Shopify. In
              particular this chart displays 1) my ability to persue big goals
              for extended periods of time as I moved from general support to
              developer, 2) stay focused on the mission throughout turbulent
              market conditions (560% run up and an 85% drawdown in share
              price), and 3) excel during hardtimes by becoming a developer
              after a 10% and 20% company wide layoff all the while Shopify's
              Gross Merchadise Value (GMV) steadily increased over time.
            </p>
          </div>
          <div>
            <small>
              <h4>Datasets</h4>
              <ul>
                <li className="text-slate-300 hover:text-pink-400">
                  <Link to="https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE">
                    Software Developer Job Postings on Indeed over time
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-pink-400">
                  <Link to="https://www.macrotrends.net/stocks/charts/SHOP/shopify/stock-price-history">
                    Shopify stock price over time
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-pink-400">
                  <Link to="https://www.marketplacepulse.com/stats/shopify-gross-merchandise-volume-gmv">
                    Shopify GMV over time
                  </Link>
                </li>
              </ul>
            </small>
          </div>
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
              className="text-slate-300 hover:text-pink-400"
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
