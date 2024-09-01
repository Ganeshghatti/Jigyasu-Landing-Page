/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import "./about-style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import {
  Grid,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { logosPartners } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// REACT ICONS
import { FaCheck } from "react-icons/fa6";

// import required modules

export default function About() {
  const images = [
    {
      src: "/assets/our gallery image1.png",
      alt: "Image 1",
    },
    {
      src: "/assets/our gallery image2.png",
      alt: "Image 2",
    },
    {
      src: "/assets/our gallery image3.png",
      alt: "Image 3",
    },
    {
      src: "/assets/our gallery image4.png",
      alt: "Image 4",
    },
    {
      src: "/assets/our gallery image1.png",
      alt: "Image 5",
    },

    {
      src: "/assets/our gallery image4.png",
      alt: "Image 7",
    },
    {
      src: "/assets/our gallery image4.png",
      alt: "Image 8",
    },
  ];

  const overlayTexts = [
    "This is Image 1's overlay text",
    "Here is some information about Image 2",
    "Details about Image 3 go here",
    "Interesting facts about Image 4",
    "Image 5 has this text overlay",
    "Image 6's overlay text is here",
    "Image 7 has this text overlay",
    "Image 8's overlay text is here",
  ];

  return (
    <div
      className="bg-cover bg-cream px-0 bg-no-repeat bg-[#F5F5F5]"
      id="about"
    >
      {/* TRUSTED BY 20+ */}
      <div className="items-center text-center py-5 md:py-10 md:space-y-5 space-y-3">
        <div className=" justify-center  text-[#342D6F] font-sans md:text-[20px] items-center text-center md:mt-10 mt-5">
          <b>TRUSTED BY 20+ SCHOOLS</b>
        </div>
        <div className="container mx-auto md:h-32 h-24">
          <Marquee loop={0} pauseOnHover speed={100}>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo1.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo2.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo3.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo4.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo5.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo6.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo7.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo8.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo9.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo10.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo11.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div className="max-md:w-20">
              <Image
                src={"/assets/images/logo12.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
          </Marquee>
        </div>
      </div>

      {/* WHO ARE WE ?  */}
      <div className="flex flex-col-reverse md:px-5 md:flex-row justify-between items-center">
        <div className="container mx-auto flex items-center flex-col md:flex-row gap-3">
          <div className="md:w-1/2 md:px-24 order-2 md:order-1 relative">
            <Image
              className="w-full h-full object-cover"
              src="/assets/about page image2.png"
              alt="Image 2"
              width={200}
              height={200}
              quality={95}
            />
          </div>

          <div className="md:w-1/2 flex flex-col pb-1 md:pb-0 md:px-10 gap-1 justify-center md:justify-normal text-center md:text-left order-1 md:order-2">
            <p className="text-carrotColor text-base md:text-xl  font-semibold">
              WHO ARE WE?
            </p>
            <p className="text-[30px] md:text-4xl font-bold text-border_color flex flex-col max-md:items-center">
              About our{" "}
              <span className="flex items-center max-md:-mt-3">
                Science Studio
                <span className="hidden md:block">
                  <Image
                    src={"/assets/Ellipse22_1.png"}
                    alt="Ellipse22_1"
                    width={15}
                    height={15}
                    quality={95}
                  />
                </span>
              </span>
            </p>
            <p className="md:text-[16px] text-[12px] md:pr-20 font-sans text-[#342D6F]">
              Jigyasu is a space for exploring science and technology, designed
              to spark curiosity and imagination. Our learning method is based
              on hands-on experience and dynamic visualization, embracing the
              philosophy of &quot;Learning by Doing.&quot;
            </p>
            <p className="md:text-[16px] text-[12px] md:pr-20 pb-4 font-sans text-[#342D6F]">
              We bring raw science out of textbooks and into the physical
              experiences of students, nurturing the next generation of
              &quot;Graham Bells.&quot;
            </p>
            <div>
              <button className="md:text-base sm:text-[14px] text-[12px] bg-carrotColor text-white px-4 py-2 rounded-full">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------OUR PHILOSOPHY---------------------- */}
      <div className="container mx-auto md:px-24 mb-8 my-2 bg-cover bg-cream bg-center bg-no-repeat">
        <div className="flex flex-col items-center md:flex-row justify-between py-8 md:px-4 md:py-20">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[#ED5251] font-semibold text-base md:text-xl">
              OUR PHILOSOPHY
            </p>
            <p className="text-border_color text-[25px]  md:text-4xl font-bold flex flex-col max-md:items-center max-md:-mt-1">
              We Believe in Making Science
              <span className="flex items-end gap-2 max-md:-mt-2">
                Fun and Engaging
                <span className="hidden md:block">
                  <Image
                    src={"/assets/Ellipse22_1.png"}
                    alt="Ellipse22_1"
                    width={15}
                    height={15}
                    quality={95}
                  />
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#342D6F] md:pt-4 hidden md:block text-center md:text-left text-[16px] font-sans">
              We believe in a hands-on approach to science learning, where
              students are actively
              <br />
              engaged in the learning process.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:mt-0">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-2xl"
              src="/assets/our philosophy image1.png"
              alt="Image 2"
              width={350}
              height={350}
              quality={95}
            />
            <div className="flex flex-col md:mx-14 py-1 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-[28px]">Engage</p>
              <p className="text-[#342D6F] text-sm">
                Students are engaged in hands-on science activities that spark
                their curiosity and interest.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-2xl"
              src="/assets/our philosophy image2.png"
              alt="Image 2"
              width={350}
              height={350}
              quality={95}
            />
            <div className="flex flex-col md:mx-14 py-1 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-3xl">Observe</p>
              <p className="text-[#342D6F] text-sm">
                They observe the scientific principles in action and learn
                through direct experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-2xl"
              src="/assets/our philosophy image3.png"
              alt="Image 2"
              width={350}
              height={350}
              quality={95}
            />
            <div className="flex flex-col md:mx-14 py- gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-3xl">Explore</p>
              <p className="text-[#342D6F] text-sm">
                Finally, they implement their knowledge by applying it to
                real-world problems and projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RECOGNIZED BY */}
      <div className="bg-[#FFE8E8] flex flex-col gap-5 justify-center md:flex-row items-center md:p-10 p-5 ">
        <div className="md:w-1/2 w-2/3 text-center">
          <p className="text-xl md:text-3xl uppercase text-border_color font-bold md:font-semibold max-md:hidden">
            RECOGNIZED BY
          </p>
        </div>
        <Marquee loop={0} speed={120} pauseOnHover>
          <div className="flex items-center flex-row gap-20 w-full">
            <div>
              <Image
                className="mx-10 w-52 md:w-44"
                src="/assets/our philosophy image4.png"
                alt="Image 1"
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                className="mx-10  w-52 md:w-44"
                src="/assets/our philosophy image5.png"
                alt="Image 2"
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                className="mx-10  w-52 md:w-44"
                src="/assets/our philosophy image6.png"
                alt="Image 3"
                width={150}
                height={150}
                quality={95}
              />
            </div>
          </div>
        </Marquee>
      </div>

      {/* Challenges We Address */}
      <div className="md:py-20 mt-10 relative bg-[#F5F5F5] overflow-hidden">
        <div className="container mx-auto flex flex-col space-y-1 max-md:flex-wrap">
          <div className="">
            <div className="space-y-3 max-md:text-center">
              <h4 className="text-carrotColor font-semibold md:text-xl max-md:text-center uppercase">
                Challenges We Address
              </h4>
              <p className="text-border_color  md:text-4xl text-[25px] font-bold flex flex-col max-md:text-center">
                Why Traditional
                <span className="flex items-center max-md:justify-center gap-2 max-md:-mt-2">
                  Learning Isn't Enough
                  <span className="hidden md:block">
                    <Image
                      src={"/assets/Ellipse22_1.png"}
                      alt="Ellipse22_1"
                      width={15}
                      height={15}
                      quality={95}
                    />
                  </span>
                </span>
              </p>
            </div>
            <div className="absolute -right-4 rotate-180 hidden md:block">
              <Image
                className="hidden lg:block"
                src={"/assets/Rectangle 88.png"}
                alt="blog-red"
                width={50}
                height={50}
              />
              <Image
                className="hidden lg:block"
                src="/assets/full yellow dot.png"
                alt="blogYellow"
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:container max-md:mx-auto">
            {/* One */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
              <div>
                <div className="py-3 pr-6">
                  <h3 className="font-bold text-border_color text-base">
                    Lack of collaborative
                  </h3>
                  <p className="text-base text-border_color">
                    Without teamwork, students miss diverse insights and skill
                    development.
                  </p>
                </div>
              </div>
              {/* TWO */}
              <div>
                <div className="py-3 pr-6">
                  <h3 className="font-bold text-border_color text-base">
                    Absence of a physical learning
                  </h3>
                  <p className="text-base text-border_color">
                    Lack of hands-on resources reduces practical learning
                    experiences.
                  </p>
                </div>
              </div>
              {/* THree */}
              <div>
                <div className="py-3 pr-6">
                  <h3 className="font-bold text-border_color text-base">
                    Static learning
                  </h3>
                  <p className="text-base text-border_color">
                    Traditional methods are repetitive and passive, limiting
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center max-lg:gap-4">
              <div className="relative">
                <Image
                  src="/assets/class_1.png"
                  alt="ClassRoom"
                  width={350}
                  height={350}
                  quality={95}
                />
                <span className="bg-carrotColor text-xs text-white font-bold tracking-wider px-3 py-1 absolute bottom-0 rounded-bl-lg">
                  CLASS ROOM
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/assets/class_2.png"
                  alt="ClassRoom"
                  width={350}
                  height={350}
                  quality={95}
                />
                <span className="bg-carrotColor text-xs text-white font-bold tracking-wider px-3 py-1 absolute bottom-0 rounded-bl-lg">
                  EXAM
                </span>
              </div>
              <div className="relative">
                <Image
                  src="/assets/class_3.png"
                  alt="ClassRoom"
                  width={350}
                  height={350}
                  quality={95}
                />
                <span className="bg-carrotColor text-xs text-white font-bold tracking-wider px-3 py-1 absolute bottom-0 rounded-bl-lg">
                  CLASS ROOM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need of the hour */}
      <div className="py-10 max-md:text-center md:my-10">
        <div className="container mx-auto space-y-3">
          <div className="flex items-center max-md:container max-md:mx-auto gap-2">
            <p className="text-carrotColor text-4xl capitalize font-bold ">
              Need of the hour
            </p>
            <Image
              src={"/assets/Ellipse22_1.png"}
              alt="Ellipse22_1"
              width={15}
              height={15}
              quality={95}
              className="hidden md:block"
            />
          </div>
          <div className="lg:flex items-center justify-between flex-col  md:flex-row gap-3">
            <div className="space-y-3 md:space-y-6  lg:w-1/3 max-md:pb-5 max-md:flex max-md:flex-col max-md:justify-end text-left max-md:container max-md:mx-auto">
              <div>
                <h3 className="text-border_color font-bold text-base">
                  Joyful & Stress-Free Learning
                </h3>
                <p className="text-border_color text-base">
                  Emphasis on making education enjoyable and relaxed.
                </p>
              </div>
              <div>
                <h3 className="text-border_color font-bold text-base">
                  Skill Development & Application
                </h3>
                <p className="text-border_color text-base">
                  Focus on developing and applying practical skills.
                </p>
              </div>
              <div>
                <h3 className="text-border_color font-bold text-base">
                  Career-Aligned Learning
                </h3>
                <p className="text-border_color text-base">
                  Ensures learning is relevant to future career goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-3">
              <div>
                <Image
                  src="/assets/need_1.png"
                  alt="Need of the hour"
                  width={360}
                  height={360}
                  quality={95}
                />
              </div>
              <div>
                <Image
                  src="/assets/need_2.png"
                  alt="Need of the hour"
                  width={350}
                  height={350}
                  quality={95}
                />
              </div>
              <div>
                <Image
                  src="/assets/need_3.png"
                  alt="Need of the hour"
                  width={350}
                  height={350}
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="bg-carrotColor py-2 md:py-10">
        <div className="container mx-auto text-white grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center flex-col">
            <h1 className="md:text-[64px] text-[44px] font-extrabold">20K+</h1>
            <p className="font-semibold text-base md:text-[26px]">STUDENTS</p>
          </div>
          <div className="flex items-center flex-col text-center">
            <h1 className="md:text-[64px] text-[44px] font-extrabold">600+</h1>
            <p className="font-semibold text-base md:text-[26px]">
              EXPERIMENT KITS
            </p>
          </div>
          <div className="flex items-center flex-col text-center">
            <h1 className="md:text-[64px] text-[44px] font-extrabold">20+</h1>
            <p className="font-semibold text-base md:text-[26px]">SCHOOLS</p>
          </div>
          <div className="flex items-center flex-col text-center">
            <h1 className="md:text-[64px] text-[44px] font-extrabold">16+</h1>
            <p className="font-semibold text-base md:text-[26px]">
              YR EXPERIENCE
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="md:my-0 my-10 bg-cover bg-cream  py-5  md:py-24 bg-center bg-no-repeat w-full">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:pl-32 md:text-left container mx-auto ">
          <div className="w-full">
            <p className="text-carrotColor md:text-[20px] text-base font-semibold">
              WHY CHOOSE US
            </p>
            <div className="md:text-4xl text-[25] py-2 text-[#342D6F] flex flex-col font-bold max-md:text-center capitalize relative max-md:-mb-5">
              <p className="md:w-1/2">
                Unlock the Wonders of Science with Engaging Hands-On Learning
              </p>
              <div className="hidden md:block absolute right-40 bottom-4 w-1/2">
                <Image
                  src={"/assets/Ellipse22_1.png"}
                  alt="Ellipse22_1"
                  width={15}
                  height={15}
                  quality={95}
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-2 text-left md:text-left md:mt-10 space-y-10">
              <div className=" flex flex-col lg:flex-row md:order-1">
                <div className="flex flex-col max-md:py-3">
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <FaCheck
                        size={26}
                        className="bg-border_color text-white p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Active Visualization & Tinkering</b>
                      </p>
                      <p className="md:text-[16px] text-[11px]  pb-6 md:pb-14 font-sans text-[#342D6F] w-full">
                        Physical learning platform to explore science with
                        active visualization and tinkering to solve real-world
                        problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <FaCheck
                        size={26}
                        className="bg-border_color text-white p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Curriculum Synced Experiment</b>
                      </p>
                      <p className="md:text-[16px] text-[12px] pb-6 md:pb-14  font-sans text-[#342D6F]">
                        Approx. 600 physical experiments synced with the
                        curriculum for Grades 6-12.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <FaCheck
                        size={26}
                        className="bg-border_color text-white p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Teacher/Demonstrator Support</b>
                      </p>
                      <p className="md:text-[16px] text-[12px]  pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Teacher and Demonstrator support provided by IITians to
                        guide students through their learning journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:pr-10">
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <FaCheck
                        size={26}
                        className="bg-border_color text-white p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Hands-On Learning Curriculum</b>
                      </p>
                      <p className="md:text-[15px] text-[12px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Hands-on learning curriculum with lesson plans, activity
                        sheets, and STEM/DIY activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className=" px-2 md:px-3 pt-1">
                      <FaCheck
                        size={26}
                        className="bg-border_color text-white p-1 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-[#ED5251] font-sans">
                        <b>Program Management App</b>
                      </p>
                      <p className="md:text-[16px] text-[12px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Jigyasu program management available via our mobile
                        app/web app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-full  md:mt-0  md:pt-0 image-container  container mx-auto relative md:order-2">
                <div>
                  <Image
                    className="relative z-50 md:-mt-28"
                    src="/assets/why choose us image.png"
                    alt="Image 2"
                    width={400}
                    height={400}
                    quality={95}
                  />
                </div>
                <Image
                  className="absolute left-[48%] bottom-14 "
                  src={"/assets/Rectangle91.png"}
                  alt="Rectangle91"
                  width={80}
                  height={80}
                  quality={95}
                />
                <Image
                  className="absolute left-[70%] -bottom-[5%] hidden md:block"
                  src={"/assets/Ellipse46.png"}
                  alt="Ellipse46"
                  width={40}
                  height={40}
                  quality={95}
                />
                <Image
                  className="absolute bottom-0 -left-3 hidden md:block z-[10000]"
                  src={"/assets/2label_1.png"}
                  alt="Label"
                  width={300}
                  height={150}
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explorer OUR MODEL */}
      <div className="flex flex-col items-center md:flex-row justify-between py-5 max-md:-mt-10">
        <div className="flex flex-col gap-4 text-center md:text-left md:px-24 container mx-auto pr-4 pl-4">
          <p className="text-[16px] md:text-[20px] font-semibold text-carrotColor">
            EXPLORE OUR MODELS
          </p>
          <div className="md:w-1/2 relative max-md:-mt-2">
            <p className="text-border_color text-[25px] md:text-4xl font-bold flex flex-col max-md:text-center md:max-2/3">
              Enhance Science Lessons with Engaging Models
            </p>
            <div className="hidden md:block absolute bottom-2 left-[45%]">
              <Image
                src={"/assets/Ellipse22_1.png"}
                alt="Ellipse22_1"
                width={15}
                height={15}
                quality={95}
              />
            </div>
          </div>
          <p className="text-[#342D6F] md:text-base text-[16px] max-md:text-pretty md:w-2/3 max-md:text-center text-justify">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed teacher guide and student
            activity guides to help you make the most of your science lessons.
          </p>
        </div>
      </div>
      <Marquee speed={120} loop={0} pauseOnHover className="container mx-auto">
        <div className="flex items-center mx-6 flex-row gap-10">
          <div className="max-md:w-40">
            <Image
              className="w-full h-full object-cover max-md:w-40"
              src="/assets/explore our models image1.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div className="max-md:w-40">
            <Image
              className="w-full h-full object-cover max-md:w-40"
              src="/assets/explore our models image2.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div className="max-md:w-40">
            <Image
              className="w-full h-full object-cover max-md:w-40"
              src="/assets/explore our models image3.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div className="max-md:w-40">
            <Image
              className="w-full h-full object-cover max-md:w-40"
              src="/assets/explore our models image4.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div className="max-md:w-40">
            <Image
              className="w-full h-full object-cover max-md:w-40"
              src="/assets/explore our models image5.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
        </div>
      </Marquee>

      {/* hands-on science */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#342D6F] px-6 md:px-36 py-0 pb-10 mt-10 md:py-28 relative max-md:pr-4 max-md:pl-4">
        <div className="flex flex-col-reverse container mx-auto ">
          <div className="flex max-md:flex-col items-center pt-4 md:pt-0 space-y-5">
            <div>
              <p className="text-[#FFFFFF] font-bold text-[25px] md:hidden z-50 text-center">
                Ready to engage your students in hands-on science learning?
              </p>
            </div>
            <Image
              className="w-full object-cover "
              src="/assets/Rectangle 65.png"
              alt="Image 2"
              width={300}
              height={300}
              quality={95}
            />
          </div>
        </div>
        <div className="absolute right-0 top-10 hidden lg:block">
          <Image
            src="/assets/Rectangle9212.png"
            alt="ping yellow"
            width={100}
            height={100}
            quality={95}
          />
        </div>
        <div className="absolute top-8 md:hidden">
          <Image
            src="/assets/Ellipse5612.png"
            alt="ping yellow"
            width={30}
            height={30}
            quality={95}
          />
        </div>
        <div className="absolute bottom-0 right-10 ">
          <Image
            src="/assets/Ellipse571.png"
            alt="ping yellow"
            width={80}
            height={80}
            quality={95}
          />
        </div>
        <div className="absolute bottom-10 hidden lg:block">
          <Image
            src="/assets/Rectangle90124.png"
            alt="ping yellow"
            width={100}
            height={100}
            quality={95}
          />
        </div>
        <div className="flex flex-col justify-center gap-4 text-center md:text-left md:pl-20 space-y-5">
          <div className="relative pt-2 ">
            <p className="text-[#FFFFFF] font-bold md:text-4xl text-[25px] max-md:hidden">
              Ready to engage your students in hands-on science learning?
            </p>
            <div className="md:block hidden absolute right-[60%] bottom-2">
              <Image
                src={"/assets/Ellipse38_1.png"}
                alt="Ellipse38_1"
                width={15}
                height={15}
                quality={95}
              />
            </div>
          </div>
          <p className="text-[11px] md:text-[16px] md:leading-6 mt-2 md:mt-0 font-sans text-[#FFFFFF] ">
            Jigyasu is a space for exploring science and technology, designed to
            spark curiosity and imagination. Our learning method is based on
            hands-on experience and dynamic visualization, embracing the
            philosophy of &quot;Learning by Doing.&quot;
          </p>
          <p className="text-[11px] md:text-[16px] md:leading-6 pb-4 font-sans text-[#FFFFFF] ">
            We bring raw science out of textbooks and into the physical
            experiences of students, nurturing the next generation of
            &quot;Graham Bells.&quot;
          </p>
          <div className="w-full">
            <button className="btn bg-[#ED5251] px-5 py-2 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full ">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* UNLOCK BENEFITS ---------------------------------*/}
      <div className="bg-[#FFDE95] bg-opacity-15 md:py-20  bg-student_desk bg-contain  bg-no-repeat md:bg-right max-md:bg-bottom max-md:object-right-top max-md:h-[60vh] max-md:w-[100vw]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:flex-row justify-between md:pl-4  ">
            <div className="flex flex-col gap-4 md:pb-28 text-center pt-10 md:pt-20 md:text-left">
              <p className="text-[#2C7698] font-bold md:text-lg text-base">
                UNLOCK BENEFITS
              </p>
              <div className="relative md:w-[20vw]">
                <p className="text-[#ED5251] font-bold md:text-4xl text-[25px]">
                  Our Student's Journey Over a Span of time
                </p>
                <div className="hidden md:block absolute bottom-2 left-[82%]">
                  <Image
                    src={"/assets/Ellipse22_1.png"}
                    alt="Ellipse22_1"
                    width={15}
                    height={15}
                    quality={95}
                  />
                </div>
              </div>
              <div className="flex max-md:flex-col items-start justify-start container mx-auto max-md:-mb-8">
                <div className="">
                  <ul className="list-disc marker:text-yellow-400 marker:text-xl text-[#2C7698] lg:w-96">
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Increase in visualization capacity
                    </li>
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Students develop experimental skills
                    </li>
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Deeper understanding, longer retention
                    </li>
                  </ul>
                </div>
                <div className=" md:pl flex flex-col md:flex-row">
                  <ul className="list-disc marker:text-yellow-400 marker:text-xl text-[#2C7698] lg:w-96">
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Application of science concepts to real world scenarios
                    </li>
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Skill addition relevant to industry
                    </li>
                    <li className="font-semibold md:text-base text-[14px] w-full text-left">
                      Product development experience
                    </li>
                  </ul>
                </div>
              </div>
              <button className="btn hidden md:block bg-[#ED5251] mx-16 md:mx-0 md:mt-10 w-auto justify-center md:justify-normal md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
                Contact us
              </button>
            </div>
            {/* <div className="w-full">
              <Image
                className=" text-white w-full"
                src="/assets/unlock benefits.png"
                width={400}
                height={400}
                quality={95}
              />
            </div> */}
          </div>
        </div>
              
      </div>

      {/* ------------------Student Gallery ----------------*/}
      <div className="flex flex-col items-center md:flex-row justify-between md:pt-20 py-10 pt-5 md:py-10 md:pl-16">
        <div className="flex flex-col gap-4 text-center md:text-left px-6 md:px-24">
          <p className="text-[#ED5251] md:text-xl text-base font-semibold">
            OUR GALLERY
          </p>
          <div className="md:w-1/3 relative">
            <p className="text-[#342D6F] font-bold md:text-4xl text-[25px] max-md:text-center">
              Students Discovering Science Firsthand
            </p>
            <div className="hidden md:block absolute bottom-2 left-[62%]">
              <Image
                src={"/assets/Ellipse38_1.png"}
                alt="Ellipse22_1"
                width={15}
                height={15}
                quality={95}
              />
            </div>
          </div>
          <p className="text-[#342D6F] text-[11px] md:text-[16px] max-md:text-pretty md:w-2/3">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed teacher guide and student
            activity guides to help you make the most of your science lessons.
          </p>
        </div>
      </div>

      {/* --------------SLIDER GALLERY----------------- */}
      {/* MOBILE */}
      <div className="container mx-auto md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/our gallery image1.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/our gallery image4.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/our gallery image4.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/our gallery image1.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* --------------SLIDER GALLERY----------------- */}
      {/* DESKTOPS */}
      <div className="container mx-auto max-md:hidden">
        <Swiper
          slidesPerView={5}
          spaceBetween={3}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/assets/our gallery image1.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/assets/our gallery image1.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/assets/our gallery image4.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/our gallery image1.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/assets/our gallery image4.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/assets/our gallery image1.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/our gallery image2.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
              <Image
                src="/assets/our gallery image3.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/our gallery image1.png"
              alt="image"
              width={300}
              height={300}
              quality={95}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* -------------Our TESTIMONIAL------------------ */}
      {/* LARGE DEVICES */}
      <div className="bg-[#D9D9D9] bg-opacity-15 py-5 mt-8 hidden md:block">
        <div className="container mx-auto md:px-10 mt-10 bg-cover bg-cream bg-center bg-no-repeat">
          <div className="flex flex-col items-center md:flex-row justify-between pb-10 md:px-4 md:pb-20 ">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-[#ED5251] font-semibold text-xl">
                OUR TESTIMONIAL
              </p>
              <p className="text-[#342D6F] font-bold text-4xl flex items-center gap-2">
                What they say about our platform{" "}
                <span>
                  {" "}
                  <Image
                    src={"/assets/Ellipse38_1.png"}
                    alt="Ellipse38_1"
                    width={15}
                    height={15}
                    quality={95}
                  />
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full border justify-around gap-10 md:flex-row container mx-auto">
            <div className="flex flex-col p-4">
              <div className="flex flex-row">
                <div className=" px-2  pt-1">
                  <img
                    className="h-8 w-8 bg-blue text-white rounded-full"
                    src="/assets/our testimonial image1.png"
                  />
                </div>
                <div>
                  <p className="text-[#ED5251] font-sans">
                    <b>Riddhi Singh</b>
                  </p>
                  <p className="text-[16px] pr-4 pb-6 font-sans text-[#342D6F]">
                    Physics Teacher
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#342D6F] font-semibold text-base">
                  <b>
                    “There are alot of models to explore which helps in
                    understanding concept”
                  </b>
                </p>
                <p className="text-[15px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at
                  nam.Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className=" px-2 md:px-3 pt-1">
                  <img
                    className="h-8 w-8 bg-blue text-white rounded-full"
                    src="/assets/our testimonial image2.png"
                  />
                </div>
                <div>
                  <p className="text-[#ED5251] font-sans">
                    <b>Riddhi Singh</b>
                  </p>
                  <p className="text-[16px] pb-6 font-sans text-[#342D6F]">
                    Physics Teacher
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#342D6F] text-[15px] font-sans">
                  <b>
                    “There are alot of models to explore which helps in
                    understanding concept”
                  </b>
                </p>
                <p className="text-[15px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="px-2 md:px-3 pt-1">
                  <img
                    className="h-8 w-8 bg-blue text-white rounded-full"
                    src="/assets/our testimonial image3.png"
                  />
                </div>
                <div>
                  <p className="text-[#ED5251] font-sans">
                    <b>Riddhi Singh</b>
                  </p>
                  <p className="text-[16px] pb-6 md:pb-6 font-sans text-[#342D6F]">
                    Physics Teacher
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#342D6F] text-[15px] font-sans">
                  <b>
                    “There are alot of models to explore which helps in
                    understanding concept”
                  </b>
                </p>
                <p className="text-[16px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                </p>
              </div>
            </div>
          </div>
        </div>
              
      </div>
      {/* SMALL DEVICES */}

      <div className="bg-[#D9D9D9] bg-opacity-15 py-5 mt-8 md:hidden">
        <div className="container mx-auto md:px-10 mt-10 bg-cover bg-cream bg-center bg-no-repeat">
          <div className="flex flex-col items-center md:flex-row justify-between pb-10 md:px-4 md:pb-20 ">
            <div className="flex flex-col gap-4 text-center md:text-left relative">
              <p className="text-[#ED5251] font-semibold md:text-xl text-base">
                OUR TESTIMONIAL
              </p>
              <p className="text-[#342D6F] font-bold md:text-4xl text-[25px]">
                What they say about our platform{" "}
                <span className="absolute md:bottom-0 max-md:bottom-3 ">
                  {" "}
                  <Image
                    src={"/assets/Ellipse38_1.png"}
                    alt="Ellipse38_1"
                    width={10}
                    height={10}
                    quality={95}
                  />
                </span>
              </p>
            </div>
          </div>

          <div className="">
            <Swiper
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="container mx-auto">
                  {/* TEST _ 1 */}
                  <div className="flex flex-col p-4">
                    <div className="flex flex-row">
                      <div className=" px-2  pt-1">
                        <img
                          className="h-8 w-8 bg-blue text-white rounded-full"
                          src="/assets/our testimonial image1.png"
                        />
                      </div>
                      <div>
                        <p className="text-[#ED5251] font-sans text-[14px] font-semibold">
                          Riddhi Singh
                        </p>
                        <p className="text-[12px] pr-4 pb-6 font-sans text-[#342D6F]">
                          Physics Teacher
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#342D6F] font-semibold text-[13px]">
                        “There are alot of models to explore which helps in
                        understanding concept”
                      </p>
                      <p className="text-[13px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                        cursus egestas at ut elit. Id nec metus pharetra sit at
                        nam.Lorem ipsum dolor sit amet consectetur. Netus amet
                        morbi cursus egestas at ut elit. Id nec metus pharetra
                        sit at nam.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="container mx-auto">
                  {/* TEST _ 2 */}
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className=" px-2 md:px-3 pt-1">
                        <img
                          className="h-8 w-8 bg-blue text-white rounded-full"
                          src="/assets/our testimonial image2.png"
                        />
                      </div>
                      <div>
                        <p className="text-[#ED5251] font-sans text-[14px]">
                          Riddhi Singh
                        </p>
                        <p className="text-[12px] pb-6 font-sans text-[#342D6F]">
                          Physics Teacher
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#342D6F] text-[13px] font-semibold">
                        “There are alot of models to explore which helps in
                        understanding concept”
                      </p>
                      <p className="text-[13px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                        cursus egestas at ut elit. Id nec metus pharetra sit at
                        nam. Lorem ipsum dolor sit amet consectetur. Netus amet
                        morbi cursus egestas at ut elit. Id nec metus pharetra
                        sit at nam.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="container mx-auto">
                  {/* TEST _ 3 */}
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="px-2 md:px-3 pt-1">
                        <img
                          className="h-8 w-8 bg-blue text-white rounded-full"
                          src="/assets/our testimonial image3.png"
                        />
                      </div>
                      <div>
                        <p className="text-[#ED5251] font-sans text-[14px]">
                          Riddhi Singh
                        </p>
                        <p className="text-[12px] pb-6 md:pb-6 font-sans text-[#342D6F]">
                          Physics Teacher
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#342D6F] text-[13px] font-semibold font-sans">
                        “There are alot of models to explore which helps in
                        understanding concept”
                      </p>
                      <p className="text-[13px] pb-6 md:pb-14 font-sans text-[#342D6F]">
                        Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                        cursus egestas at ut elit. Id nec metus pharetra sit at
                        nam. Lorem ipsum dolor sit amet consectetur. Netus amet
                        morbi cursus egestas at ut elit. Id nec metus pharetra
                        sit at nam.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
              
      </div>

      {/* ------------Price Plan------------------- */}
      <section
        id="pricing"
        className="bg-[#FFDE95] bg-opacity-15 pb-10 md:pb-20 flex flex-col items-center justify-center space-y-5 pt-10 w-auto h-auto"
      >
        <div className="flex flex-col items-center justify-center space-y-1">
          <p className="text-carrotColor font-semibold md:text-xl text-base">
            OUR PRICING
          </p>
          <div className="flex items-center gap-1">
            <h1 className="md:text-4xl text-[25px] text-border_color font-bold text-center">
              Pick Your Perfect Plan
            </h1>
            <div className="md:hidden">
              <Image
                src="/assets/red_131.png"
                alt="Red"
                width={10}
                height={10}
                quality={95}
              />
            </div>
          </div>
          <p className="text-border_color px-5 md:text-base text-[14px] max-md:text-center">
            Explore our flexible subscription plans designed to fit your needs.
            Choose the perfect option and start enhancing the learning journey
            today.
          </p>
        </div>
        <div className="md:container md:mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-md:px-2">
          {/* ------------------------STADARD-------------------------1 */}
          <div className="border border-border_color relative rounded-2xl bg-white w-auto h-auto">
            <span className="md:text-3xl text-[22px] font-semibold bg-carrotColor text-white absolute top-0 rounded-tl-2xl px-5 py-1 mb-5">
              Standard
            </span>
            <div className="md:border-b border-border_color/10 md:px-5 md:py-5 px-2 py-1 text-[14px] ">
              <h3 className="text-border_color mt-14 py-5">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </h3>
              <h1 className="text-carrotColor text-4xl font-bold max-md:text-center">
                ₹1000<span className="text-border_color text-xs">/STUDENT</span>
              </h1>
            </div>
            <div className="flex flex-col items-start justify-start md:space-y-3  py-5 px-2 md:px-5 text-border_color space-y-2">
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                <span>Experiments with hands-on Learning Curriculum</span>
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">Experiments on Subscription</li>
                <li className="text-[14px]">Hands-on learning curriculum</li>
                <li className="text-[14px]">Repair and maintenance.</li>
              </ul>
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                Jigyasu curriculam
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">
                  A Trained Demonstrator/Science Communicator/Teacher to provide
                  visualisation of these concepts and smooth running of the
                  science studio
                </li>
              </ul>
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                Jigyasu Program Management
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">
                  Program monitoring and weekly status report.
                </li>
                <li className="text-[14px]">
                  Curriculum mapping and flexibility in lesson plan.
                </li>
                <li className="text-[14px]">
                  Online LMS Activity sheets, Quiz, Performance assessment
                  report, Gap analysis.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center py-5 my-4">
              <button className="bg-border_color px-3 py-2 rounded-full text-white text-[14px] md:text-[16px]">
                Contact us
              </button>
            </div>
          </div>
          {/* -----------------CUSTOM---------------- 2*/}
          <div className="border border-carrotColor relative rounded-2xl bg-white w-auto h-auto">
            <span className="md:text-3xl text-[22px] font-semibold bg-carrotColor text-white absolute top-0 rounded-tl-2xl px-5 py-1 mb-5">
              Custom
            </span>
            <div className="md:border-b border-border_color/10 md:px-5 md:py-5 px-2 py-1 text-[14px] ">
              <h3 className="text-border_color mt-14 py-5">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </h3>
            </div>
            <div className="flex flex-col items-start justify-start md:space-y-3  py-5 px-2 md:px-5 text-border_color space-y-2">
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                <span>Experiments with hands-on Learning Curriculum</span>
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">Experiments on Subscription</li>
                <li className="text-[14px]">Hands-on learning curriculum</li>
                <li className="text-[14px]">Repair and maintenance.</li>
              </ul>
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                Jigyasu curriculam
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">
                  A Trained Demonstrator/Science Communicator/Teacher to provide
                  visualisation of these concepts and smooth running of the
                  science studio
                </li>
              </ul>
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                Jigyasu Program Management
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">
                  Program monitoring and weekly status report.
                </li>
                <li className="text-[14px]">
                  Curriculum mapping and flexibility in lesson plan.
                </li>
                <li className="text-[14px]">
                  Online LMS Activity sheets, Quiz, Performance assessment
                  report, Gap analysis.
                </li>
              </ul>
              <div className="flex items-center gap-2 font-semibold md:text-base text-[14px]">
                <span className="text-slate-500 bg-slate-100 p-1 ">
                  <FaCheck />
                </span>
                Maintenance & Support
              </div>
              <ul className="list-disc md:px-5 custom-marker flex flex-col items-start max-md:ml-5 justify-center max-md:pb-5">
                <li className="text-[14px]">
                  Jigyasu will provide repair & Maintenance for the equipment
                  provided in the Science Studio
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4 py-5">
              <button className="bg-[#EAE8FF]  px-3 py-2 rounded-full text-[#342D6F] text-[14px] md:text-[16px]">
                Calculate Budget
              </button>
              <button className="bg-border_color  px-3 py-2 rounded-full text-white text-[14px] md:text-[16px]">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
