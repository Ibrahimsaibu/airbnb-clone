import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import SmallCard from "../components/smallCard";
import MediumCard from "../components/mediumCard";
import LargeCard from "../components/largeCard";

export default function Home({ exploreData, liveAnywhereData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl px-8 sm:px-16 mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => {
              return (
                <SmallCard
                  key={index}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex scrollbar-hide  space-x-3 overflow-x-scroll  p-3 -ml-4">
            {liveAnywhereData?.map((item, index) => {
              return (
                <MediumCard key={index} img={item.img} title={item.title} />
              );
            })}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist Curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const liveAnywhereData = await fetch(
    "https://www.jsonkeeper.com/b/VHHT"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
