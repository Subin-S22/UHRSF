import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  name: string;
}

export default function Layout({ children, name }: Props) {
  return (
    <>
      <Head>
        <title>UHRSF | {name}</title>
      </Head>
      {children}
    </>
  );
}
