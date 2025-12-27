"use client";

import React, { ReactNode } from "react";

interface TeamLayoutProps {
  children: ReactNode;
}

export default function TeamLayout({ children }: TeamLayoutProps) {
  return <div>{children}</div>;
}
