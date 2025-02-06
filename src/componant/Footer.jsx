import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";
import "../index.css";
function Footer() {
  return (
    <section className="bg-blue-50 padding-x padding-t pb-8">
      <footer className="max-container">
        <div className="flex items-start justify-between gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="#" className="w-[100px] h-[100px] ">
              <img
                src={"/public/1-removebg-preview.png"}
                alt="footer"
                className="object-contain"
              />
            </a>
            <p className=" text-gray-800 capitalize font-mono font-bold max-w-md text-lg  my-7">
              معنا ستحفظ القرآن الكريم بدقة وإتقان كما ورد عن النبي صلى الله
              عليه وسلم. تحفيظ القرآن اونلاين علي يد محفظين
            </p>
            <div className=" flex gap-5">
              {socialMedia.map((item) => (
                <div
                  key={item.alt}
                  className="flex p-2 bg-white items-center justify-center"
                >
                  <img src={item.src} alt={item.alt} width={30} height={30} />
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((link) => (
            <div key={link.links} className="flex flex-col gap-3">
              <h4 className="text-blue-900 font-bold font-mono text-2xl ">
                {link.title}
              </h4>
              <ul className="flex flex-col gap-3 font-montserrat">
                {link.links.map((item) => (
                  <li
                    key={item.name}
                    className="text-gray-600 hover:text-blue-900 transition duration-250"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-montserrat items-center max-sm:flex-col gap-4 text-lg text-gray-400 mt-8 border-t-[1px] border-gray-300 py-8">
          <h4 className="">&copy; CopyRight Ahmed Khalid Aitya</h4>
          <p>Terms & conditations</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
