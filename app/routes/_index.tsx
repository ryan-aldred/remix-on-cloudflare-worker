import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

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

export default function Index() {
  const hourOfDay = new Date(Date.now()).getHours();
  const greeting = getGreeting(hourOfDay);

  return (
    <div className="flex flex-col items-center mx-auto py-32 gap-20 max-w-3xl">
      <div className="flex flex-col items-center gap-5">
        <h1 className="leading text-7xl font-bold text-pink-500">
          {greeting.msg}
        </h1>
      </div>
      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col gap-6 text-xl md:text-xl">
          <h2 className="text-pink-500 text-3xl md:text-2xl">👨‍💻 About</h2>
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
                "Crypto", "Speculating"]
              </span>
              <span>{"}"};</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <span>
            This website was built with Remix and Tailwind, and deployed to
            Cloudflare Workers but I actually spend most of my time working in
            client-side React apps that are millions of lines of code big
          </span>
          <Button
            variant="secondary"
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform"
          >
            <Link to="/about" className="flex items-center gap-1">
              <span>Learn more about me</span>
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
