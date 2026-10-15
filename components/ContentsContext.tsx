"use client";

import { createContext, useContext, useState } from "react";
import { featuredProjects } from "@/lib/portfolio-data";

type ContentsState = {
  /** The chapter whose picture the right-hand page shows. */
  shown: string;
  show: (slug: string) => void;
};

const ContentsContext = createContext<ContentsState | null>(null);

// Lets the contents list (left page) tell the picture plate (right page)
// which chapter is being pointed at.
export function ContentsProvider({ children }: { children: React.ReactNode }) {
  const [shown, show] = useState(featuredProjects[0].slug);
  return (
    <ContentsContext.Provider value={{ shown, show }}>
      {children}
    </ContentsContext.Provider>
  );
}

/** Null where there is no plate to update, e.g. beside an open case study. */
export function useContents() {
  return useContext(ContentsContext);
}
