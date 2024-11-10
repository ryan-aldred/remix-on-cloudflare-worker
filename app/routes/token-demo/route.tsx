import { Form, useActionData } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/server-runtime";
import { SolanaTracker } from "~/utils/solanaTracker/index.server";

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

  const chartData = await SolanaTracker.chartData(
    {
      token: spl,
      type: "1h",
      fromTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    context.cloudflare.env.SOLANA_TRACKER_API_KEY
  );

  return {
    success: true,
    fieldErrors: null,
    fields: null,
    formError: null,
    data: { chartData },
  };
}

export default function TokenDemo() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <div>
        <h1>Anter an SPL token address</h1>
        <Form action="/token-demo" method="post">
          <div>
            <label>
              SPL
              <input
                name="spl"
                defaultValue={actionData?.fields?.spl}
                type="text"
                placeholder="Enter an SPL token address"
                aria-invalid={Boolean(actionData?.fieldErrors?.spl)}
                aria-errormessage={
                  actionData?.fieldErrors?.spl ? "spl-error" : ""
                }
              />
            </label>
            {actionData?.fieldErrors?.spl && (
              <p id="spl-error" role="alert">
                {actionData.fieldErrors.spl}
              </p>
            )}
          </div>
          <button type="submit">Search</button>
        </Form>
      </div>
      <div>
        {actionData?.success && <div>{actionData.data?.chartData[0].high}</div>}
      </div>
    </div>
  );
}
