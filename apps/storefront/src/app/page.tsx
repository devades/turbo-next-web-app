import "./styles.css";

import { log } from "@devades/logger";
import { Link } from "@repo/ui/link";
import { CounterButton } from "@repo/ui/counter-button";
import { Header } from "@devades/design-system-ui/header";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store() {
  log("Hey! This is the Store page.");

  return (
    <>
      <div className="container mx-auto">
        <Header>
          <p className="text-white text-center py-2">
            Header from design system package
          </p>
        </Header>

        <div className="flex flex-row w-full min-h-screen items-center justify-center py-4">
          <div className="flex flex-col min-h-full items-center justify-center text-center w-3xl">
            <h1 className="title text-xl font-bold text-center">
              Store <br />
              <span>Kitchen Sink Storefront</span>
            </h1>
            <CounterButton />
            <p className="description">
              Built With{" "}
              <Link href="https://turbo.build/repo" newTab>
                Turborepo
              </Link>
              {" & "}
              <Link href="https://nextjs.org/" newTab>
                Next.js
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
