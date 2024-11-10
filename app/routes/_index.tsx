import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryan Aldred" },
    {
      name: "description",
      content: "Welcome to Ryan Aldred's Remix blog on Cloudflare Workers!",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-7xl font-bold text-gray-800 dark:text-gray-100">
            Good evening
          </h1>
          <div className="h-[144px] w-[434px]"></div>
        </header>
      </div>
    </div>
  );
}
