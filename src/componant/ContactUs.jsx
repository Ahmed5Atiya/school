import React from "react";

export const ContactUs = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center  mb-5">
          <h1 className="font-bold text-4xl text-blue-500">للتواصل معانا</h1>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            نحن سعداء لتواصلك معنا
          </h1>
        </div>

        <div className="w-full h-[550px]">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1215.9092441125197!2d30.85017811888813!3d30.46130281716808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458879f8f13d89f%3A0xd7db0e4807c32746!2z2YXYs9is2K8g2KfZhNix2K3ZhdmG!5e0!3m2!1sar!2seg!4v1737577552813!5m2!1sar!2seg"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            marginheight="200"
            marginwidth="200"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1215.9092441125197!2d30.85017811888813!3d30.46130281716808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458879f8f13d89f%3A0xd7db0e4807c32746!2z2YXYs9is2K8g2KfZhNix2K3ZhdmG!5e0!3m2!1sar!2seg!4v1737577552813!5m2!1sar!2seg"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              التواصل عبر الايميل
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              التحدث مع خدمة اولياء الامور
            </p>
            <p className="mt-2 text-sm text-blue-500">hello@gmail.com</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              لزياراتنا
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              لزيارة مكان تواجد المدرسه
            </p>
            <p className="mt-2 text-sm text-blue-500">
              قرية جزى مركز منوف المنوفيه
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800">
              للاتصال بنا
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              الاتصال متاح من 8 صباحا الى 8 مساءا
            </p>
            <p className="mt-2 text-sm text-blue-500">01201782258</p>
          </div>
        </div>
      </div>
    </section>
  );
};
