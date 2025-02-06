import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constant";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

function Hero() {
  return (
    <section
      id="home"
      className="w-full gap-10 flex flex-col z-10 xl:flex-row min-h-screen max-container justify-center"
    >
      {/* <div className="flex relative flex-col items-start justify-center xl:w-4/5 pt-28 max-xl:padding-x">
        <p className=" text-xl font-montserrat text-gray-400 ">
          Our Summer collections
        </p>
        <h1 className="text-black max-sm:leading-[82] text-8xl max-sm:text-[72px]  font-semibold mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 x-10">
            The New Arrival
          </span>
          <br /> <span className="text-red-600 mt-3">Nike</span> Shoes
        </h1>
        <p className="text-gray-400 font-montserrat leading-8 mt-6 mb-14 text-lg sm:max-w-sm">
          Discover stylish Nike arrivals Quality comport , and innovation for
          your active life .
        </p>
        <Button Label="Shop now" iconUrl={arrowRight} />
        <div className="flex items-start w-full flex-wrap justify-start gap-16 mt-10">
          {statistics.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <h1 className="text-[40px] font-semibold">{item.value}</h1>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="relative xl:w-2/5 flex flex-col justify-center  items-start w-full  max-xl:padding-x pt-28">
        <p className=" text-4xl font-montserrat text-coral-red">
          {" "}
          مدرسة القران بجزى
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pl-10 ">
            أدرس مع
            <span className="text-coral-red inline-block mx-3">احسن</span>
          </span>
          <br />
          المعلمين
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-md">
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          وسلم. تحفيظ القرآن اونلاين علي يد محفظين
        </p>
        <Button Label="معرفة المزيد" iconUrl={arrowRight} />
      </div>

      <div className="bg-primary max-xl:py-40 bg-hero bg-cover bg-center items-center  relative flex justify-center flex-1 min-h-screen">
        <img
          className="object-contain relative z-10"
          src={
            "../../public/cartoon-of-a-muslim-boy-reading-quran-vector-43591521-removebg-preview.png"
          }
          width={550}
          height={350}
          alt="shose"
        />
      </div>
    </section>
  );
}

export default Hero;
