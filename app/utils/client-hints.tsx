import { getHintUtils } from "@epic-web/client-hints";
import { subscribeToSchemeChange } from "@epic-web/client-hints/color-scheme";
import { clientHint as timeZoneHint } from "@epic-web/client-hints/time-zone";
import { useRevalidator } from "@remix-run/react";
import * as React from "react";
import { useOptionalRequestInfo, useRequestInfo } from "./request-info";

const hintsUtils = getHintUtils({
  timeZone: timeZoneHint,
});

export const { getHints } = hintsUtils;

export function useHints() {
  const requestInfo = useRequestInfo();
  return requestInfo.hints;
}

export function useOptionalHints() {
  const requestInfo = useOptionalRequestInfo();
  return requestInfo?.hints;
}

export function ClientHintCheck({ nonce }: { nonce: string }) {
  const { revalidate } = useRevalidator();
  React.useEffect(
    () => subscribeToSchemeChange(() => revalidate()),
    [revalidate]
  );

  return (
    <script
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: hintsUtils.getClientHintCheckScript(),
      }}
    />
  );
}
