import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      {" "}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flez-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our online shopping destination! Discover a wide range of
            high-quality products, from the latest fashion trends to must-have
            gadgets, all at unbeatable prices.
          </p>
          <p>
            Enjoy a seamless shopping experience with fast delivery, secure
            payments, and exceptional customer service. Shop now and find
            everything you need in one place!
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide a hassle-free and enjoyable shopping
            experience with high-quality products at the best prices. We are
            committed to delivering value, convenience, and customer
            satisfaction.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex roe text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-700'>
            ✔️ Wide range of high-quality products ✔️ Best prices and exclusive
            deals ✔️ Secure and fast checkout process ✔️ Reliable customer
            support ✔️ Hassle-free returns and easy refunds
          </p>

          <p className='text-gray-700'>
            Shop with confidence and enjoy a shopping experience like never
            before!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience</b>
          <p className='text-gray-700'>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier! Enjoy a seamless experience, secure
            payments, and quick delivery—bringing your favorite products right
            to your doorstep. 😊{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-700'>
            We prioritize our customers with 24/7 support, quick resolutions,
            and a dedicated team ready to assist you. Your satisfaction is our
            top priority, ensuring a smooth and enjoyable shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
