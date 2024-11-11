import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryan Aldred" },
    {
      name: "description",
      content:
        "Welcome to Ryan Aldred's Remix blog running on Cloudflare Workers!",
    },
  ];
};

// do a type in thing to hide that its actually loading
export default function Index() {
  const hourOfDay = new Date(Date.now()).getHours();
  const greeting = getGreeting(hourOfDay);

  return (
    <div className="flex flex-col container items-center py-32 gap-20">
      <div className="flex">
        <h1 className="leading text-7xl font-bold text-pink-500">
          {greeting.msg}
        </h1>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-sky-400 text-5xl md:text-6xl">1) What</h2>
        <div className="flex flex-col gap-4  text-xl md:text-3xl">
          <span>Ryan is a frontend developer</span>
          <span>
            He built this website with Remix, Tailwind, and Shadcn and deployed
            it to Cloudflare Workers
          </span>
          <span>
            That's right, this is a fullstack React application running on
            globablly distrubuted, performance, and cost-effective (free)
            serverless infra
          </span>
        </div>

        <Button variant="secondary" size="lg">
          <Link to="/about">Learn more</Link>
        </Button>
      </div>
    </div>
  );
}

function getGreeting(hourOfDay: number) {
  if (hourOfDay > 17 || hourOfDay < 4)
    return {
      msg: "Good evening",
      url: "",
    };

  if (hourOfDay >= 4 && hourOfDay < 12)
    return {
      msg: "Good morning",
      url: "",
    };

  return {
    msg: "Good afternoon",
    url: "",
  };
}
