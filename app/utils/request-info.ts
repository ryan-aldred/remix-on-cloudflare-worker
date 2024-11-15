import { useRouteLoaderData } from "@remix-run/react";

export function useRequestInfo() {
  const maybeRequestInfo = useOptionalRequestInfo();

  if (!maybeRequestInfo) throw new Error("missing root request info");

  return maybeRequestInfo;
}

export function useOptionalRequestInfo() {
  const data = useRouteLoaderData("root");

  return data?.requestInfo;
}
