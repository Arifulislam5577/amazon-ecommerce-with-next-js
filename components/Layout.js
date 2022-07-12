import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <header className="bg-slate-900 py-5">
        <div className="container">
          <nav className="flex items-center justify-between ">
            <div className="logo">
              <Link href="/">
                <a className="text-white font-bold uppercase">Logo</a>
              </Link>
            </div>
            <ul className="flex items-center gap-8 text-white font-bold ">
              <li>
                <a href="#">Link-1</a>
              </li>
              <li>
                <a href="#">Link-1</a>
              </li>
              <li>
                <a href="#">Link-1</a>
              </li>
              <li>
                <a href="#">Link-1</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">{children}</div>

      <footer className="bg-gray-50 py-10 text-center mt-auto">
        <div className="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, ab enim doloribus impedit cumque fuga non dolorum maxime
            eos. Modi dolores, quidem officiis magni iure repudiandae
            accusantium nihil error porro.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Layout;
