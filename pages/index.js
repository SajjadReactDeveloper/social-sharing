
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Social Media Preview
        </title>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={"url of image"} />
      </Head>
      <h2>
        Hurray!!! The Website is Complete. Lets Try Social Media Preview Now
      </h2>
    </div>
  );
}