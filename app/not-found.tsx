import Link from "next/link";
import React from "react";

import { ROUTES } from "@/constants/ROUTES";

const NotFound = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
      <div>
        <p className="mb-6">404: Page not found</p>
        <Link
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-cyan-700"
          href={ROUTES.HOME}
        >
          Go To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
