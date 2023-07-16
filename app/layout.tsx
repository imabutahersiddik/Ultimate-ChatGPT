/* eslint-disable @next/next/no-page-custom-font */
const FAVICON_FOLDER = "/favicons";
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";

export const metadata = {
  title: "The Ultimate ChatGPT",
  description: "Experience the Ultimate ChatGPT Chat Bot: Powered by GPT-3.5 Turbo AI, our cutting-edge virtual assistant revolutionizes your online interactions. Engage in captivating conversations, get instant answers, and access a wealth of knowledge. With unparalleled intelligence and lightning-fast response times, our Chat Bot is your go-to source for expert advice, innovative ideas, and friendly banter. Don't miss out on this incredible opportunity to explore the future of AI. Click now to unlock endless possibilities with our advanced ChatGPT Chat Bot!",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "The Ultimate ChatGPT - Unlock the ultimate features of ChatGPT",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title, description } = metadata; // Add these variables or assign appropriate values
  const canonical = "https://chatgpt.kiask.xyz"; // Add the canonical URL or assign an appropriate value

  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${FAVICON_FOLDER}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${FAVICON_FOLDER}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${FAVICON_FOLDER}/favicon-16x16.png`}
        />
        <meta itemProp="image" content="https://chatgpt.kiask.xyz/thumbnail.png" />
        <meta property="og:logo" content="https://chatgpt.kiask.xyz/logo.png"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://chatgpt.kiask.xyz/thumbnail.png" />
        <meta property="og:image:alt" content="Ultimate ChatGPT Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Vercel" />
        <meta name="twitter:creator" content="@dom__inic" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://chatgpt.kiask.xyz/thumbnail.png" />
        <meta property="twitter:image:alt" content="Ultimate ChatGPT Image" />
        <meta name="twitter:player" content={canonical + "?card=1"} />
        <meta name="twitter:player:width" content="300" />
        <meta name="twitter:player:height" content="533" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
