import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import { Servi } from "./Servi";
import SuperQyality from "./SuperQyality";
import SpecialOffer from "./SpecialOffer";
import CustomerReviews from "./CustomerReviews";
import { ContactUs } from "./ContactUs";

function Home() {
  return (
    <>
      {" "}
      <section className="xl:padding-l wide:padding-r paddind-b">
        <Hero />
      </section>
      <section className="padding  sm:mt-16 mt-10 ">
        <Services />
      </section>
      <section className="padding-x py-10">
        <Servi />
      </section>
      <section className="padding">
        <SuperQyality />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-ful">
        <ContactUs />
      </section>
    </>
  );
}

export default Home;
