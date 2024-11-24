import { getHintUtils } from "@epic-web/client-hints";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { clientHint as timeZoneHint } from "@epic-web/client-hints/time-zone";
import { getHints } from "~/utils/client-hints";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryan Aldred" },
    {
      name: "description",
      content:
        "Welcome to Ryan Aldred's blog built with Remix and Tailwind and is running on Cloudflare Workers!",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { timeZone } = getHints(request);
  const clientTime = new Date().toLocaleString("en-US", {
    timeZone,
    hour12: false,
    hour: "numeric",
  });

  return { greeting: getGreeting(Number(clientTime)) };
};

export default function Index() {
  const { greeting } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center mx-auto py-32 gap-20 max-w-3xl">
      <div className="flex flex-col items-center gap-5">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="leading text-7xl font-bold text-pink-500"
        >
          {greeting}
        </motion.h1>
      </div>
      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col gap-6 text-xl md:text-xl">
          <div className="group hover:translate-x-2 transition-transform cursor-pointer">
            <span className="font-mono flex flex-col">
              <span>
                <span className="text-pink-500">const</span> Ryan = {"{"}
              </span>
              <span className="ml-4">
                <span className="text-sky-400">profession</span>: "Frontend
                Engineer",
              </span>
              <span className="ml-4">
                <span className="text-sky-400">speciality</span>: ["TypeScript",
                "React"],
              </span>
              <span className="ml-4">
                <span className="text-sky-400">likes</span>: ["Mountain biking",
                "Solana", "Speculation"]
              </span>
              <span>{"}"};</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <p>
            This website was built with Remix and Tailwind and deployed to
            Cloudflare Workers but I actually spend most of my time working on
            enterprise React apps.
          </p>
          <p>
            In the evenings I've also been working on a concentrated liquidity
            bot for Solana which hit prod in Aug '24'. This is a server side
            TypeScript project built with Bun.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform"
          >
            <Link to="/about" className="flex items-center gap-1">
              <span>Learn more</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function getGreeting(hourOfDay: number) {
  if (hourOfDay > 17 || hourOfDay < 4) {
    return "Good evening";
  }

  if (hourOfDay >= 4 && hourOfDay < 12) {
    return "Good morning";
  }

  return "Good afternoon";
}
