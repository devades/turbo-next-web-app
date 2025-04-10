// "use client";

import "./styles.css";

import { log } from "@devades/logger";
import { Link } from "@repo/ui/link";
import { CounterButton } from "@repo/ui/counter-button";
import { Header } from "@devades/design-system-ui/header";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default async function Store() {
  log("Hey! This is the Store page.");

  // const url = 'http://localhost:5001/message/laura';
  // const url = 'http://localhost:5001/api/public/blog/1';
  // const url = 'http://localhost:5002/api/private/roles';
  const blogUrl = "http://localhost:5001/api/public/blog";
  const rolesUrl = "http://localhost:5002/api/private/roles/1";
  const roleUrl = "http://localhost:5002/api/private/roles/2/role/2";


  let posts: any = [];
  let roles: any = [];
  let role: any = {};

  try {
    let data = await fetch(blogUrl);
    if (data) posts = await data.json();
  } catch (err) {
    console.log(err);
  }

  try {
    let data = await fetch(rolesUrl);
    if (data) roles = await data.json();
    console.log(data)
  } catch (err) {
    console.log(err);
  }

  try {
    let data = await fetch(roleUrl);
    if (data) role = await data.json();
    console.log(data)
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <div className="container mx-auto">
        <Header>
          <p className="text-white text-center py-2">
            Header from design system package
          </p>
        </Header>

        <div className="flex flex-row w-full min-h-[85vh] items-center justify-center py-4">
          <div className="flex flex-col  items-center justify-center text-center w-3xl">
            {posts?.length && <p className="py-2">First Blog Post Title is: {posts[1].title}</p>}
            {roles?.length && <p className="py-2">First of User 1 Roles is: {roles[0].title} company is {roles[0].companyName}</p>}
            {role?.title && <p className="py-2 pb-8">Selected Role of User 2 is: {role.title} company is {role.companyName}</p>}

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
