import './App.css'
import logo from '../src/assets/images/logo.png'
import man from '../src/assets/images/man.jpg'
import woman from '../src/assets/images/woman.jpg'
import pin from '../src/assets/images/map-pin.png'
import splash from '../src/assets/images/splash-screen.png'
import android from '../src/assets/images/m1.png'
import ios from '../src/assets/images/m2.png'
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { FaBars, FaInstagram, FaTwitter } from "react-icons/fa";
import TypeWriterEffect from "react-typewriter-effect";


const data = {
  title: "",
  rows: [
    {
      title: "What is xlistics?",
      content: `xlistics is a game changing logistics and proxy app That will be building the bridge between users to proxy/courier`,
    },
    {
      title: "Who is courier/proxy?",
      content:
        "a courier is a person that transports commercial packages and documents. Proxy : a person authorized to act on behalf of another. example : I sent a proxy to help me purchase a bag in dubai.",
    },
    {
      title: "How can i trust couriers/proxy on the xlistics app?",
      content: `All couriers/proxy are verified legally by the government and the company. If you are to come into issue please do well to contact our help system For more details check Terms and condition `,
    },
    {
      title: "How will i pay for the services?",
      content: "Payments for services can be made on the xlistics App and also in hand with courier/proxy",
    },
    {
      title: "Xlistics reach?",
      content: "We are not restricted to a pacticular zone or city, base on database and availability of courier/proxy",
    },
  ],
};

const styles = {
  bgColor: "none",
  Cursor: "pointer"
  // bgColor: 'white',
  // titleTextColor: "blue",
  // rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="flex flex-col bg-gray-100">
        <div className="flex max-w-[1200px]  w-full mx-auto ">
          {/* Navbar */}
          <div className="flex flex-row w-full items-center justify-between pb-3 my-6 border-b-2 font-outfit mx-10 md:mx-0">
            {/* logo */}
            <div className="md:w-[15%] w-[140px]">
              <img src={logo} alt="xlistics-logo" className="" />
            </div>

            <button className="flex items-center justify-center md:hidden btn  border-black text-black bg-white hover:text-white shadow-solid-primary">
              <FaBars />
            </button>

            <div
              className="text-[#1E212B] md:flex text-lg gap-7 font-outfit font
            hidden "
            >
              <span className="cursor-pointer hover:text-[#FF8427] transition">
                ABOUT
              </span>
              <span className="text-2xl text-gray-600"> | </span>
              <span className="cursor-pointer hover:text-[#FF8427] transition">
                FAQ
              </span>
            </div>

            {/* join waitlist btn */}
            <div className="hidden md:flex">
              <a
                href="https://mj2tlrc3vbi.typeform.com/to/ui9UjmqS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="shadow-solid-primary
               border-2 border-black py-2 px-4
              ease-out text-black hover:bg-black hover:text-[#fffffe] rounded-md capitalize font-semibold transition"
                >
                  <span className="flex items-center justify-center">
                    <label>Join waitlist</label>
                  </span>
                  {/* <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 flex items-center justify-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span> */}
                </button>
              </a>
            </div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-fullmax-w-[1200px] md:w-full md:h-full mx-auto font-outfit">
          <div className="flex flex-col w-full items-center justify-start pt-7">
            <h1 className="md:text-6xl text-4xl text-black text-center">
              Easy Living 🚚
              <br /> With <span className="flex flex-row"> 
              <span className="flex flex-row gap-4 ">
                <TypeWriterEffect
                textStyle={{
                  color: "purple",
                  fontWeight: 'medium',
                }}
                startDelay={2000}
                cursorColor="orange"
                multiText={[
                  "Logistics",
                  "Proxy",
                  "Logistics",
                  "Proxy",
                  "Logistics",
                  "Proxy",
                  "Logistics",
                  "Proxy",
                  "Logistics"
                ]}
                multiTextDelay={3000}
                typeSpeed={200}
              />{" "}  Services</span>
              
              
              <span className="text-[red]   ">.</span></span>
            </h1>

            <span className="bg-black shadow-5xl w-1.5 md:mt-0 mt-3 shadow-md md:h-32 h-20"></span>
          </div>
        </div>

        <div
          className="flex items-start  w-full
           justify-center"
        >
          <div className="">
            <div
              className="alert  md:rounded-6xl shadow-lg h-15 text-blue-600 md:text-2xl w-full text-[8px] font-semibold mt-11 md:block hidden"
              id="glass"
            >
              <div>
                <span>
                  <img src={pin} alt="map-pin" className="md:w-10 w-5" />
                </span>
                <span>Where are you headed?</span>
              </div>
            </div>

            {/* <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={man} />
                </div>
              </div>
              <div className="chat-header mt-12">Obi-Wan</div>
              <div className="chat-bubble">Where are you now!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div> */}
            <div className="chat chat-end mt-20 md:grid hidden">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={woman} />
                </div>
              </div>
              <div className="chat-header">Anakin</div>
              <div className="chat-bubble">i just arrived</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={splash} alt="splash-screen" className="w-60 md:w-auto" />
          </div>
          <div className="md:-mr-24 md:flex hidden">
            <div
              className="alert alert-success text-2xl mt-56 shadow-lg font-semibold rounded-6xl"
              id="neu glass"
            >
              <div className="md:flex hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your payment has been confirmed!</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-2/3 border-green-500 border-1 h-full hidden md:flex flex-col items-center justify-center mx-auto font-outfit text-center font-lg py-20 relative md:flex-col md:-mt-64 -mt-64 overflow-hidden"
          id="glass-div"
        >
          <h1 className="text-4xl text-black font-light max-w-[1200px] w-[50%]">
            We make it easy for you to manage your shipments and logistics
            online, From finding a courier/proxy that is ready to be at your
            service anytime anywhere and on time.
          </h1>

          <div className="flex flex-row gap-20 pt-14">
            <div>
              <img
                src={android}
                alt="android-download.btn"
                className="w-52 cursor-pointer hover:grayscale transition"
              />
            </div>

            <div>
              <img
                src={ios}
                alt="ios.download-btn"
                className="w-52  cursor-pointer hover:grayscale transition"
              />
            </div>
          </div>
        </div>
        <div
          className="w-full border-green-500 border-1 h-full md:hidden flex-col items-center justify-center mx-auto font-outfit text-center font-lg py-3 px-auto relative md:flex-col -mt-48 overflow-hidden bg-white border"
          id="glass-div2"
        >
          <h1 className="text-lg px-14 text-black font-light">
            We make it easy for you to manage your shipments and logistics
            online, From finding a courier/proxy that is ready to be at your
            service anytime anywhere and on time.
          </h1>

          <h1 className="pt-5 text-xl">Coming soon!</h1>

          <div className="flex flex-row justify-center items-center w-full pb-5 ">
            <div>
              <img
                src={android}
                alt="android-download.btn"
                className="w-28 cursor-pointer hover:grayscale transition"
              />
            </div>

            <div>
              <img
                src={ios}
                alt="ios.download-btn"
                className="w-28 cursor-pointer hover:grayscale transition"
              />
            </div>
          </div>
        </div>

        <hr className="md:my-10" />

        {/* ---About section--- */}
        <div
          className="w-full h-full flex flex-col md:flex-row justify-start relative"
          id="about-section"
        >
          <div className="max-w-[1200px] w-full mx-auto my-10">
            <div className="w-full font-outfit md:mt-10 border-l-orange-800 border-t-0 border-r-0 border-b-0 border-l-4 pl-4 md:ml-0 ml-6">
              <h1 className="md:text-7xl text-3xl pb-3">Hey there, 👋🏻</h1>
              <h2 className="md:text-3xl text-xl text-black">
                Know a thing or two about{" "}
                <span className="text-gray-400" id="span-xlistics">
                  Xlistics
                </span>
                .{" "}
              </h2>
            </div>
            <div className="h-full items-center justify-center md:mx-6 mx-6 flex-col flex md:gap-32 gap-6 font-outfit mt-16">
              <div className="flex md:flex-row flex-col md:gap-20 gap-6">
                <div className="md:w-1/3 w-[70%] bg-gray-100 md:mx-0 mx-auto border-2 border-black py-3 px-1 md:px-4 shadow-solid-about rounded-lg text-center">
                  <h1 className="md:text-3xl text-xl font-semibold pt-5">
                    <span className="text-blue-600">Product shipping</span> is
                    made easy and hassle-free with our Gateway service
                  </h1>
                  <h5 className="md:text-2xl md:px-8 md:pt-5">
                    xlistics Gateway makes product shipping easy, reliable, and
                    cost-effective nationally and internationally.
                  </h5>
                </div>
                <div className="md:w-1/3 bg-gray-100 w-[70%] md:mx-0 mx-auto  border-2 border-black py-3 px-1 md:px-4 shadow-solid-about rounded-lg text-center">
                  <h1 className="md:text-3xl text-xl font-semibold py-3">
                    <span className="text-purple-500"> Errand services </span>{" "}
                    are made easy with our one-stop solution
                  </h1>
                  <h5 className="md:text-2xl  md:px-8 md:pt-5">
                    With Xlistics Moblie Application you can find the closest
                    proxy/courier to send errands, purchase and deliver items
                    within and outside the country.
                  </h5>
                </div>
                <div className="md:w-1/3 bg-gray-100 w-[70%] md:mx-0 mx-auto  border-2 border-black py-3 px-1 md:px-4 shadow-solid-about rounded-lg text-center">
                  <h1 className="md:text-3xl text-xl font-semibold py-3">
                    <span className="text-purple-500">Realtime </span>
                    update on shipment details
                  </h1>
                  <h5 className="md:text-2xl md:px-8 md:pt-5">
                    With Xlistics in-app Realtime updates keep you informed on
                    shipment details, available instantly and accessible
                    anytime.
                  </h5>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:gap-20 gap-6 w-full justify-center">
                <div className="md:w-1/3 bg-gray-100 w-[70%] md:mx-0 mx-auto border-2 border-black py-3 px-1 md:px-4 shadow-solid-about-2 rounded-lg text-center">
                  <h1 className="md:text-3xl text-xl font-semibold py-3">
                    <span className="text-pink-500">
                      Anywhere, anytime, and on time,{" "}
                    </span>{" "}
                    we provide exceptional product delivery experiences
                  </h1>
                  <h5 className="md:text-2xl md:px-8 md:pt-5">
                    Here at Xlistics our model offers exceptional delivery
                    service, not only the product but the experience. This is
                    what we stand for.
                  </h5>
                </div>
                <div className="md:w-1/3 bg-gray-100 w-[70%] md:mx-0 mx-auto border-2 border-black py-3 px-1 md:px-4 shadow-solid-about-2 rounded-lg text-center">
                  <h1 className="md:text-3xl text-xl font-semibold py-3">
                    <span className="text-green-500">Earn</span> as a
                    Courier/Proxy with Xlistics Mobile App
                  </h1>
                  <h5 className="md:text-2xl md:px-8 md:pt-5">
                    You earn as a courier/proxy on the Xlistics mobile
                    ap-plication by rendering services (purchasing and delivery
                    of goods and items) effciently and effectively to users.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        {/* ---FaQ section--- */}
        <div className="w-full px-6 md:px-0 bg-gray-100 h-full flex flex-col justify-start relative">
          <div className="max-w-[1200px] mx-auto w-full h-full mt- flex flex-col justify-between">
            <h1 className="font-outfit font-bold text-8xl mt-5">Faq</h1>
            <div className="flex flex-row items-center gap-3">
              <div className="w-7 h-7 bg-orange-800 rounded-full"></div>
              <div className="w-5 h-5 bg-orange-600 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
            </div>

            <div className="font-outfit bg-none" id="accordion">
              <div
                className="mt-12 text-[40px] border-2 rounded-xl px-10"
                id="accordion"
              >
                <Faq data={data} config={config} id="accordion" />
              </div>

              <div className="flex md:flex-row flex-col items-center justify-end md:gap-7 my-6">
                <div className="flex mt-5 md:mt-0 justify-center items-center md:gap-0 gap-3">
                  <span className="text-md md:text-3xl md:my-0 my-3 text-black">
                    Be the First to know when we launch:
                  </span>
                </div>

                <div className="flex flex-row items-center justify-center gap-5 md:mb-0 mb-5">
                  <a
                    href="https://mj2tlrc3vbi.typeform.com/to/ui9UjmqS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="shadow-solid-primary
               border-2 border-black py-2 px-4
              ease-out text-black hover:bg-black hover:text-[#fffffe] rounded-md btn-sm md:btn-md flex items-center justify-center capitalize font-semibold transition"
                    >
                      {/* <label htmlFor="my-modal-3">Join waitlist</label> */}
                      <label>Join waitlist</label>
                    </button>
                  </a>
                  <span className="md:text-2xl cursor-pointer">
                    <FaTwitter />
                  </span>
                  <span className="text-xs">|</span>
                  <span className="md:text-2xl cursor-pointer">
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-end justify-center py-3 text-center px-6 bg-gray-800">
          <h1 className="flex font-outfit font-normal text-gray-500 md:text-2xl text-sm ">
            We simplify your logistics services and connect you to fast and
            reliable couriers/proxy
            <span></span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App
