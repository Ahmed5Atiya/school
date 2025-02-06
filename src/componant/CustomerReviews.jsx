import { star } from "../assets/icons";
import { reviews } from "../constant";

function CustomerReviews() {
  return (
    <div className="max-container flex flex-col justify-center text-center gap-3">
      <div className="flex text-center flex-col  w-fit m-auto">
        <h1 className="font-montserrat text-4xl">
          ما هو <span className="text-red-400">اراء اولياء</span> الامور ؟
        </h1>
        <p className="info-text m-auto mt-4 max-w-lg  text-lg ">
          معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله عليه
          وسلم. تحفيظ القرآن اونلاين علي يد محفظين
        </p>
      </div>
      <div className="flex text-center md:flex-row  flex-col gap-4 mt-10 justify-evenly ">
        {reviews.map((item) => (
          <div
            className="p-4 flex flex-col items-center justify-center bg-white shadow-lg"
            key={item.customerName}
          >
            <img
              src={item.imgURL}
              alt={item.feedback}
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-gray-400 mt-5 w-[70%] leading-4">
              {item.feedback}
            </p>

            <h2 className="text-2xl mt-5">{item.customerName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
