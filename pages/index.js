import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProductContainer from "../components/ProductContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <ProductContainer />
    </Layout>
  );
}
