import React, { createContext, useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

export const LayoutContext = createContext();

export default function Layout( { children, emailRef }) {
  return (
    <LayoutContext.Provider value={{ emailRef }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContext.Provider>
  )
}
