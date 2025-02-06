import { services } from "../constant";

function Services() {
  return (
    <section className="max-container max-sm:mt-14 flex flex-col space-y-10">
      <div className="flex justify-start flex-col gap-4">
        <h1 className="font-sembold text-4xl font-montserrat">
          معرفة <span className="text-red-500">رؤية</span> ورسالة المدرسة
        </h1>
        <p className="info-text">
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          وسلم
          <br />
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          وسلم
        </p>
      </div>
      <div className="flex  justify-center gap-5  max-sm:mt-14  flex-wrap">
        {services.map((item) => (
          <div
            className=" px-8 py-14 shadow-xl w-[300px] flex-grow flex flex-col space-y-3 md:space-y-6  justify-start"
            key={item.label}
          >
            <div className="p-2 bg-red-500 flex items-center justify-center w-fit">
              <img
                src={item.imgURL}
                alt={item.label}
                width={50}
                height={50}
                className="text-red-400"
              />
            </div>

            <h2 className="text-4xl font-mono font-bold my-6">{item.label}</h2>
            <p className="text-gray-400 font-montserrat break-words text-lg">
              {item.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
