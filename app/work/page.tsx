import type { Metadata } from "next";
import { BookPage } from "@/components/BookPage";
import { ContentsPlate } from "@/components/ContentsPlate";
import { ContentsProvider } from "@/components/ContentsContext";
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
    <ContentsProvider>
      <BookPage single="left" left={<ProjectList />} right={<ContentsPlate />} />
    </ContentsProvider>
  );
}
