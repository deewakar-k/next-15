"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-10 p-2">
          <Link href="/" className="font-medium text-2xl font-sans">
            [[ blaze. ]]
          </Link>

          <div className="font-mono flex items-center gap-2">
            {session && session.data?.user ? (
              <>
                <Link href="/startup/create">
                  <span>[ create ]</span>
                </Link>

                <button
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <span>[ logout ]</span>
                </button>

                <Link href={`user/${session.data.user.name}`}>
                  [ {session.data.user.name} ]
                </Link>
              </>
            ) : (
              <button
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                <span>[ login ]</span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
