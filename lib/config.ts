

import { AlchemyAccountsUIConfig, createConfig } from "@account-kit/react";
import { sepolia, alchemy } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [{ type: "email" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "popup" },
      ],
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: "y219cf6bbb0fcd6a191ff7e579619152e" },
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: "bWBS-jmgzyvorD2Kqo-yKlUqD0qso9_-" }),
    chain: sepolia,
    ssr: true,
    enablePopupOauth: true,
  },
  uiConfig,
);

export const queryClient = new QueryClient();