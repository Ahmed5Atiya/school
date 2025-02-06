import React, { useState } from "react";
const testimonials = [
  {
    text: "“ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”",
    author: "Mia Brown",
    role: "Marketing Manager at Stech",
    image: "/public/تحفيظ-قران-AR28112019-3-removebg-preview.png",
  },
  {
    text: "“ This is the second testimonial. It’s amazing how much this product has improved our workflow. ”",
    author: "John Doe",
    role: "CEO at TechCorp",
    image:
      "/public/cartoon-muslim-boy-reading-quran_353337-299-removebg-preview.png",
  },
  {
    text: "“ A third testimonial to showcase the versatility of this component. Highly recommended! ”",
    author: "Jane Smith",
    role: "CTO at Innovate Inc.",
    image: "/public/Remini20220321182518817.jpg",
  },
];
function Teacher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  return (
    <section className="py-12  flex flex-col space-y-5 px-7 md:py-24 md:px-14 mx-auto ">
      <h1 className="text-center w-full text-blue-800 md:text-8xl text-4xl font-bold font-mono">
        المعلمون{" "}
      </h1>
      <section className="shadow-xl ">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className=" lg:w-1/2 lg:mx-6 bg-gray-50 h-96 rounded-lg lg:h-[36rem]">
              <img
                className="object-contain w-full  h-full"
                src={`${currentTestimonial.image}`}
                alt=""
              />
            </div>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500">“</p>

              <h1 className="text-3xl font-bold text-blue-800 font-mono  lg:text-4xl lg:w-9/12">
                نحن نساعدك للتطوير من نفسك
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 ">
                {currentTestimonial.text}
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                {currentTestimonial.author}
              </h3>
              <p className="text-gray-600 ">{currentTestimonial.role}</p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  title="left arrow"
                  onClick={handlePrev}
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100   hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  onClick={handleNext}
                  className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100   lg:mx-6 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Teacher;
