import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 justify-center">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            IMA Market was born out of a passion for innovation and a vision to
            transform the way people shop online. Our journey started with a
            simple idea: to offer a platform where customers can easily explore,
            discover, and buy a variety of products, all from the comfort of
            their homes.
          </p>
          <p>
            At IMA Market, we proudly provide two key types of products: Latest
            and Grocery Store. Whether you’re searching for fresh groceries or
            the latest trends, our carefully curated selection ensures there’s
            something for everyone. We strive to bring you high-quality products
            from trusted vendors, showcasing the best of Manipur’s marketplace.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at IMA Market is to offer customers choice, convenience,
            and confidence. We’re committed to delivering an exceptional
            shopping experience that exceeds expectations, from browsing and
            placing orders to fast, reliable delivery.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
