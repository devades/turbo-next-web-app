"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function LogInLogOut() {
  const { user, isLoading } = useUser();

  return (
    <>
      {!isLoading && user ? (
        <span>
          <a
            className="flex items-center text-sm/6 font-semibold antialiased 
            text-white bg-violet-600/95 hover:bg-violet-600/90 px-3 py-1 rounded-3xl 
            font-sans"
            href="/api/auth/logout"
          >
            Log out
            <span className="ml-1" aria-hidden="true">&rarr;</span>
          </a>
        </span>
      ) : (
        <span>
          <a className="flex items-center text-sm/6 font-medium antialiased 
          text-white bg-violet-600 hover:bg-violet-600/95 px-3.5 py-1 rounded-3xl 
          font-sans"
            href="/api/auth/login"
          >
            Log in &nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        </span>
      )}
    </>
  );
}
