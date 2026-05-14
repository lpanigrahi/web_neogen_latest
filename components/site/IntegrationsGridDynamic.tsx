"use client";
import dynamic from "next/dynamic";
import type { Integration } from "@/components/site/IntegrationsGrid";

const IntegrationsGridLazy = dynamic(
  () => import("@/components/site/IntegrationsGrid").then((m) => ({ default: m.IntegrationsGrid })),
  { ssr: false, loading: () => <div className="h-96 rounded-xl bg-bg-elev-1 animate-pulse" /> }
);

interface Props {
  integrations: Integration[];
}

export function IntegrationsGridDynamic({ integrations }: Props) {
  return <IntegrationsGridLazy integrations={integrations} />;
}
