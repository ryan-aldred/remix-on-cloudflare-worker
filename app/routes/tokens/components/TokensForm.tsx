import { Form } from "@remix-run/react";

// could be better
interface Props {
  fields?: Record<string, string>;
  fieldErrors?: Record<string, string>;
}

export function TokensForm({ fields, fieldErrors }: Props) {
  return (
    <Form action="/tokens" method="post">
      <div>
        <label>
          SPL
          <input
            name="spl"
            defaultValue={fields?.spl}
            type="text"
            placeholder="Enter an SPL token address"
            aria-invalid={Boolean(fieldErrors?.spl)}
            aria-errormessage={fieldErrors?.spl ? "spl-error" : ""}
          />
        </label>
        {fieldErrors?.spl && (
          <p id="spl-error" role="alert">
            {fieldErrors.spl}
          </p>
        )}
      </div>
      <button type="submit">Search</button>
    </Form>
  );
}