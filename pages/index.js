import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Mediumcard from "../components/Mediumcard";
import Smallcard from "../components/Smallcard";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-9 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item) => (
              <Mediumcard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
