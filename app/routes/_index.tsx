import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

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

export default function Index() {
  const hourOfDay = new Date(Date.now()).getHours();
  const greeting = getGreeting(hourOfDay);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex">
        <h1 className="leading text-7xl font-bold text-gray-800 dark:text-gray-100">
          {greeting.msg}
        </h1>
        <div className="h-[144px] w-[434px]"></div>
      </div>
      <div className="flex flex-col items-start">
        <h2>1) What</h2>
        <span>Learn more about Ryan and this webiste</span>
        <button>
          <Link to="/about">Learn more</Link>
        </button>
      </div>
    </div>
  );
}

function getGreeting(hourOfDay: number) {
  if (hourOfDay > 17 || (hourOfDay > 0 && hourOfDay < 4))
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
