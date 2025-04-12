import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt='' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">1234 Market Street <br /> Suite 567, New York, NY 10001, USA</p>

          <p >Phone: +1 (555) 123-4567 <br /> Email: contact@dummyshop.com</p>


          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">
            Learn More About Our Team and Job Openings
          </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'> EXPLORE</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
