import "./GirlsCollection.css";
import img from "../../../assets/girl_section/girl_section2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GirlsCollection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:flex items-center w-full mt-32" data-aos="zoom-in">
      <div className="side-one lg:w-1/2">
        <div className="text-center">
          <h5 className="text-2xl secondary-font text-cyan-400 pt-20 font-bold">BACK TO SCHOOL</h5>
          <h2 className="text-5xl primary-font my-4 text-white">Girls Collection</h2>
          <p className="text-lg secondary-font mb-6 text-white">
            We celebrate childhood by supporting babies, children, and families
            <br />
            with thoughtful designs, quality materials and construction, <br />
            and convenient shopping options.
          </p>
          <div className="text-center">
            <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-md px-6">Shop Collection</button>
          </div>
        </div>
      </div>
      <div className="side-two lg:w-1/2">
        <img className="-pl-3" src={img} alt="" />
      </div>
    </div>
  );
};

export default GirlsCollection;
