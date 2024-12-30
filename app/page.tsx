import Link from "next/link";

import { ROUTES } from "@/constants/ROUTES";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold">DSA Essentials</h2>
        <p className="mx-auto mb-8 mt-4 w-3/4 text-lg font-medium">
          A curated guide to essential Data Structures and Algorithms tailored
          for frontend developers like myself. This resource is straightforward,
          practical and focuses on the must-know DSA topics to help us excel in
          our career and interviews..
        </p>
        <Link
          href={ROUTES.DSA_Curriculum}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-cyan-700"
        >
          {" "}
          Explore Curriculum{" "}
        </Link>
      </div>
    </main>
  );
}
