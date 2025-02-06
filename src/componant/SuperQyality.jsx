import { shoe8 } from "../assets/images";
import Button from "./Button";
function SuperQyality() {
  return (
    <section className="max-container max-sm:mt-14  flex max-lg:flex-col items-center w-full gap-10 justify-between">
      <div className="flex flex-1 flex-col gap-3 ">
        <h1 className="text-4xl font-montserrat capitalize ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pl-10 ">
            أدرس مع
            <span className="text-coral-red inline-block mx-3">احسن</span>
          </span>
          <br />
          المعلمين
        </h1>
        <p className="mt-4 lg:max-w-lg info-text ">
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه is
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
        </p>
        <p className="text-xl  font-montserrat text-gray-500 my-5  leading-8">
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
        </p>
        <Button Label=" ا التواصل الان" />
      </div>

      <div className="flex-1 flex   justify-center items-center">
        <img
          className="object-contain"
          src={
            "../../public/2d3ab56845428c46a928082cfd03aa9c-removebg-preview.png"
          }
          alt="Quality"
          width={570}
          height={533}
        />
      </div>
    </section>
  );
}

export default SuperQyality;
