import "./styles.css";
import { log } from "@devades/logger";
import HeroSection from "./components/Hero";

export const metadata = {
  title: "Interview App",
};

export default async function Store() {
  log("Hey! This is the Interview App page.");

  return (
    <>
      <div className="flex w-full mx-auto">
        <HeroSection />
      </div>
    </>
  );
}
