import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface ComponentProps {
  children: ReactNode;
}

export const Mobile = ({ children }: ComponentProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });
  return <>{isMobile && children}</>;
};

export const Pc = ({ children }: ComponentProps) => {
  const isPc = useMediaQuery({
    query: "(min-width:600px)",
  });
  return <>{isPc && children}</>;
};
