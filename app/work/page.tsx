import type { Metadata } from "next";
import { BookPage } from "@/components/BookPage";
import { ProjectList } from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <BookPage
      single="left"
      left={<ProjectList />}
      right={
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold tracking-tight text-forest">
            Choose a project
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-500">
            Its case study opens on this page.
          </p>
        </div>
      }
    />
  );
}
