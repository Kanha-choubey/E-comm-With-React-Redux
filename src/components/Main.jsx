import React from "react";

function main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-vector/happy-holi-festival-sale-background_1017-17114.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            Shop Now
          </h1>
          <p className="mb-8 text-xl leading-relaxed">
            Experience Seamless Online Shopping with Our Wide Range of Products,
            Hassle-Free Delivery, and Exceptional Customer Service -Walmart
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default main;
