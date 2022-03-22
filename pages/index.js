import Header from "./components/header";
import Head from 'next/head'
import Accordion from "./components/accordion";

export default function Home() { 
  return (
    <>
      <Head>
            <title>Doutor Multas - Maior site de Recursos de Multa do Brasil</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
            <meta charSet='UTF-8'/>
            <link rel='shortcut icon' href='https://doutormultas.com.br/wp-content/uploads/2016/11/Untitled-3-1.png'/>
      </Head>
      <Header/>
      <Accordion/>
    </>
  );
};