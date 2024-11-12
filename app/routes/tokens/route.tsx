import { Form, Outlet, useActionData } from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/server-runtime";
import { TokensForm } from "./components/TokensForm";

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData();
  // should do spl validation instead
  const spl = formData.get("spl") as string;

  console.log(spl, spl.length, spl.length < 4);
  if (spl.length < 1 || typeof spl !== "string")
    return {
      success: false,
      fieldErrors: { spl: "Invalid SPL" },
      fields: { spl },
      formError: null,
      data: null,
    };

  return redirect(`/tokens/${spl}`);
}

export default function Tokens() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex justify-center py-24">
      <div className="container">
        <div className="flex flex-col gap-6 mb-10 items-center">
          <h1 className="text-pink-500 text-5xl">Enter an SPL token address</h1>
          <TokensForm
            fields={actionData?.fields}
            fieldErrors={actionData?.fieldErrors}
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
