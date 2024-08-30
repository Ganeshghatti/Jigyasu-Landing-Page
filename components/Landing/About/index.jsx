/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

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
import { Grid, Pagination, Navigation } from "swiper/modules";
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
      className=" mx-0 mb-10 bg-cover bg-cream px-6 md:px-0  py-10 md:py-4 md:pb-16  bg-no-repeat bg-[#F5F5F5]"
      id="about"
    >
      <div className="items-center text-center py-20 space-y-10">
        <div className=" justify-center  text-[#342D6F] font-sans md:text-[20px] items-center text-center ">
          <b>TRUSTED BY 20+ SCHOOLS</b>
        </div>
        <div className="container mx-auto h-32">
          <Marquee loop={0} pauseOnHover speed={100}>
            <div>
              <Image
                src={"/assets/images/logo1.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo2.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo3.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo4.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo5.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo6.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo7.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo8.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo9.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo10.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                src={"/assets/images/logo11.png"}
                alt={"school Partners"}
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
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
      <div className="flex flex-col-reverse md:px-10 md:flex-row justify-between items-center">
        <div className="container mx-auto flex items-center flex-col md:flex-row gap-8">
          <div className="md:w-1/2 md:px-24">
            <Image
              className="w-full h-full object-cover"
              src="/assets/about page image2.png"
              alt="Image 2"
              width={200}
              height={200}
              quality={95}
            />
          </div>

          <div className="md:w-1/2 flex flex-col pb-8 md:pb-0 md:px-10 gap-4 justify-center md:justify-normal text-center md:text-left">
            <p className="text-carrotColor text-base font-semibold">
              WHO ARE WE?
            </p>
            <p className="text-4xl font-bold text-border_color flex flex-col max-md:items-center">
              About our{" "}
              <span className="flex items-center gap-1">
                Science Studio
                <span>
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
            <button className="btn justify-center mx-24 md:mx-0 md:justify-normal bg-carrotColor hover:bg-carrotColor_hover w-auto md:w-40 h-10 text-white border-none capitalize rounded-full">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* -------------------OUR PHILOSPHY---------------------- */}

      <div className="container mx-auto md:px-28 mb-8 my-2 bg-cover bg-cream bg-center bg-no-repeat">
        <div className="flex flex-col items-center md:flex-row justify-between py-8 md:px-4 md:py-20">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <p className="text-[#ED5251] font-semibold text-base">
              OUR PHILOSOPHY
            </p>
            <p className="text-border_color text-4xl font-bold flex flex-col max-md:items-center">
              We Believe in Making Science
              <span className="flex items-end gap-2">
                Fun and Engaging
                <span>
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

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <Image
              className="rounded-2xl"
              src="/assets/our philosophy image1.png"
              alt="Image 2"
              width={350}
              height={350}
              quality={95}
            />
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
              <p className="text-[#ED5251] font-bold text-3xl">Engage</p>
              <p className="text-[#342D6F] text-[16px]">
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
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
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
            <div className="flex flex-col md:mx-14 py-2 gap-1 text-center">
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

      <div className="bg-[#FFE8E8] flex flex-col gap-10 justify-center md:flex-row items-center p-10 max-md:rounded-3xl">
        <div className="w-1/2 text-center">
          <p className="text-xl md:text-3xl uppercase text-border_color font-bold md:font-semibold">
            RECOGNIZED BY
          </p>
        </div>
        <Marquee loop={0} speed={120} pauseOnHover>
          <div className="flex items-center flex-row gap-20 w-full">
            <div>
              <Image
                className="mx-10"
                src="/assets/our philosophy image4.png"
                alt="Image 1"
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                className="mx-10"
                src="/assets/our philosophy image5.png"
                alt="Image 2"
                width={150}
                height={150}
                quality={95}
              />
            </div>
            <div>
              <Image
                className="mx-10"
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

      <div className="py-20 relative bg-[#F5F5F5] overflow-hidden">
        <div className="container mx-auto flex flex-col space-y-1">
          <div className="">
            <div className="space-y-3">
              <h4 className="text-carrotColor font-semibold text-base">
                Challenges We Address
              </h4>
              <p className="text-border_color  text-4xl font-bold flex flex-col">
                Why Traditional{" "}
                <span className="flex items-center gap-2">
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
                src={"/assets/Rectangle 88.png"}
                alt="blog-red"
                width={50}
                height={50}
              />
              <Image
                src="/assets/full yellow dot.png"
                alt="blogYellow"
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* One */}
            <div>
              <div className="py-5 pr-6">
                <h3 className="font-bold text-border_color text-base">
                  Lack of collaborative
                </h3>
                <p className="text-base text-border_color">
                  Without teamwork, students miss diverse insights and skill
                  development.
                </p>
              </div>
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
            </div>
            {/* TWO */}
            <div>
              <div className="py-5 pr-6">
                <h3 className="font-bold text-border_color text-base">
                  Absence of a physical learning
                </h3>
                <p className="text-base text-border_color">
                  Lack of hands-on resources reduces practical learning
                  experiences.
                </p>
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
            </div>
            {/* THree */}
            <div>
              <div className="py-5 pr-6">
                <h3 className="font-bold text-border_color text-base">
                  Static learning
                </h3>
                <p className="text-base text-border_color">
                  Traditional methods are repetitive and passive, limiting
                  engagement.
                </p>
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
                  RESULT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need of the hour */}

      <div className="pr-10 py-10 max-md:text-center my-10">
        <div className="container mx-auto space-y-8">
          <div className="flex items-center gap-2">
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
          <div className="flex items-center justify-between flex-col md:flex-row gap-8">
            <div className="space-y-6">
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
            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <Image
                  src="/assets/need_1.png"
                  alt="Need of the hour"
                  width={350}
                  height={350}
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

      <div className="bg-carrotColor py-10">
        <div className="container mx-auto text-white grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center flex-col">
            <h1 className="text-7xl font-extrabold">20K+</h1>
            <p className="font-semibold text-xl">STUDENTS</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-7xl font-extrabold">600+</h1>
            <p className="font-semibold text-xl">EXPERIMENT KITS</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-7xl font-extrabold">20+</h1>
            <p className="font-semibold text-xl">SCHOOLS</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-7xl font-extrabold">16+</h1>
            <p className="font-semibold text-xl">YR EXPERIENCE</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}

      <div className="md:my-0 my-10 bg-cover bg-cream  py-10  md:py-24 bg-center bg-no-repeat w-full">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:pl-32 md:text-left container mx-auto ">
          <div className="w-full">
            <p className="text-carrotColor text-lg font-semibold">
              <b>WHY CHOOSE US</b>
            </p>
            <p className="md:text-4xl text-3xl py-5 text-[#342D6F] flex flex-col font-bold">
              Unlock the Wonders of Science with{" "}
              <span className="flex items-center gap-1">
                Engaging Hands-On Learning
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
            <div className="flex flex-col-reverse md:flex-row gap-6 text-left md:text-left py-8">
              <div className=" flex flex-col lg:flex-row max-md:order-2">
                <div className="flex flex-col">
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
                      <p className="md:text-[16px] text-[11px] pr-4 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
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
                      <p className="md:text-[16px] text-[12px] pr-4 md:pr-12 pb-6 md:pb-14  font-sans text-[#342D6F]">
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
                      <p className="md:text-[16px] text-[12px] pr-4 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
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
              <div className="md:w-full mt-8 md:mt-0  md:p md:pt-0 image-container max-md:order-1 container mx-auto">
                <Image
                  className=""
                  src="/assets/why choose us image.png"
                  alt="Image 2"
                  width={400}
                  height={400}
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explorer OUR MODEL */}

      <div className="flex flex-col items-center md:flex-row justify-between md:pt-10 pt-5 py-10 ">
        <div className="flex flex-col gap-4 text-center md:text-left md:px-24 container mx-auto">
          <p className="text-lg font-semibold text-carrotColor">
            EXPLORE OUR MODELS
          </p>
          <p className="text-border_color text-4xl font-bold flex flex-col">
            Enhance Science Lessons{" "}
            <span className="flex items-center gap-2">
              with Engaging Models{" "}
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
          <p className="text-[#342D6F] text-base ">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed
            <br /> teacher guide and student activity guides to help you make
            the most of your science lessons.
          </p>
        </div>
      </div>

      <Marquee speed={120} loop={0} pauseOnHover className="container mx-auto">
        <div className="flex items-center mx-6 flex-row gap-10">
          <div>
            <Image
              className="w-full h-full object-cover"
              src="/assets/explore our models image1.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src="/assets/explore our models image2.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src="/assets/explore our models image3.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
              src="/assets/explore our models image4.png"
              alt="Image 2"
              width={80}
              height={80}
              quality={95}
            />
          </div>
          <div>
            <Image
              className="w-full h-full object-cover"
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

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#342D6F] px-6 md:px-36 py-0 pb-10 md:py-28">
        <div className="flex flex-col-reverse container mx-auto">
          <div className="flex items-center pt-4 md:pt-0 space-y-5">
            <Image
              className="w-full object-cover"
              src="/assets/Rectangle 65.png"
              alt="Image 2"
              width={300}
              height={300}
              quality={95}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center md:text-left md:pl-20 space-y-5">
          <p className="text-[#FFFFFF] font-bold text-4xl ">
            Ready to engage your students in{" "}
            <span className="flex items-center gap-2">
              hands-on science learning?
              <span className="md:block hidden">
                <Image
                  src={"/assets/Ellipse38_1.png"}
                  alt="Ellipse38_1"
                  width={15}
                  height={15}
                  quality={95}
                />
              </span>
            </span>
          </p>
          <p className="text-[11px] md:text-[16px] md:leading-6 mt-2 md:mt-0 font-sans text-[#FFFFFF]">
            Jigyasu is a space for exploring science and technology, designed to
            spark curiosity and imagination. Our learning method is based on
            hands-on experience and dynamic visualization, embracing the
            philosophy of &quot;Learning by Doing.&quot;
          </p>
          <p className="text-[11px] md:text-[16px] md:leading-6 pb-4 font-sans text-[#FFFFFF]">
            We bring raw science out of textbooks and into the physical
            experiences of students, nurturing the next generation of
            &quot;Graham Bells.&quot;
          </p>
          <button className="btn bg-[#ED5251] mx-16 md:mx-0 w-auto justify-center md:justify-normal md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
            Book Demo
          </button>
        </div>
      </div>

      {/* UNLOCK BENEFITS ---------------------------------*/}

      <div className="bg-[#FFDE95] bg-opacity-15 py-10">
        <div className="container mx-auto md:pl-28">
          <div className="flex flex-col items-center md:flex-row justify-between md:pl-4  ">
            <div className="flex flex-col gap-4 md:pb-28 text-center pt-10 md:pt-20 md:text-left">
              <p className="text-[#2C7698] font-bold text-lg">
                UNLOCK BENEFITS
              </p>
              <p className="text-[#ED5251] font-bold text-4xl flex flex-col">
                Our Student's Journey{" "}
                <span className="flex items-center gap-2">
                  Over a Span of time
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
              <div className="flex flex-col-reverse md:flex-row md:gap-20 text-left md:text-left pl-14">
                <div className="flex flex-col md:flex-row">
                  <ul className="list-disc marker:text-yellow-400 marker:text-3xl text-[#2C7698] lg:w-96">
                    <li className="font-semibold text-base">
                      Increase in visualization capacity
                    </li>
                    <li className="font-semibold text-base">
                      Students develop experimental skills
                    </li>
                    <li className="font-semibold text-base">
                      Deeper understanding, longer retention
                    </li>
                  </ul>
                </div>
                <div className=" md:pl flex flex-col md:flex-row">
                  <ul className="list-disc marker:text-yellow-400 marker:text-3xl text-[#2C7698] lg:w-96">
                    <li className="font-semibold text-base">
                      Application of science concepts to real world scenarios
                    </li>
                    <li className="font-semibold text-base">
                      Skill addition relevant to industry
                    </li>
                    <li className="font-semibold text-base">
                      Product development experience
                    </li>
                  </ul>
                </div>
              </div>
              <button className="btn hidden md:block bg-[#ED5251] mx-16 md:mx-0 md:mt-10 w-auto justify-center md:justify-normal md:w-40 h-10 text-white border-none hover:bg-stone-50 hover:text-black capitalize rounded-full">
                Contact us
              </button>
            </div>
            <div className="w-full">
              <Image
                className=" text-white w-full"
                src="/assets/unlock benefits.png"
                width={400}
                height={400}
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ ----------------*/}
      {/* ------------------Student Gallery ----------------*/}

      <div className="flex flex-col items-center md:flex-row justify-between md:pt-20 py-10 pt-20 md:py-10 md:pl-16 ">
        <div className="flex flex-col gap-4 text-center md:text-left px-6 md:px-24">
          <p className="text-[#ED5251] text-xl font-semibold">OUR GALLERY</p>
          <p className="text-[#342D6F] font-bold text-4xl">
            Students Discovering
            <span className="flex items-center gap-2">
              Science Firsthand
              <span className="hidden md:block">
                <Image
                  src={"/assets/Ellipse38_1.png"}
                  alt="Ellipse22_1"
                  width={15}
                  height={15}
                  quality={95}
                />
              </span>
            </span>
          </p>
          <p className="text-[#342D6F] text-[11px] md:text-[16px] ">
            Our science models are a great way to engage students in hands-on
            learning. Each model comes with a detailed
            <br /> teacher guide and student activity guides to help you make
            the most of your science lessons.
          </p>
        </div>
      </div>

      {/* --------------SLIDER GALLERY----------------- */}

      <div className="container mx-auto">
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <Image
                src="/assets/our gallery image1.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </SwiperSlide>
          </div>
          <div className="flex flex-col items-center gap-5">
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
          </div>
          <div>
            <SwiperSlide>
              <Image
                src="/assets/our gallery image4.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </SwiperSlide>
          </div>
          <div className="flex flex-col items-center gap-5">
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
          </div>
          <div>
            <SwiperSlide>
              <Image
                src="/assets/our gallery image4.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </SwiperSlide>
          </div>
          <div className="flex flex-col items-center gap-5">
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
          </div>
          <div>
            <SwiperSlide>
              <Image
                src="/assets/our gallery image1.png"
                alt="image"
                width={300}
                height={300}
                quality={95}
              />
            </SwiperSlide>
          </div>
          <div className="flex flex-col items-center gap-5">
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
          </div>
        </Swiper>
      </div>
      {/* -------------Our TESTIMONIAL------------------ */}
      <div className="bg-[#FFDE95] bg-opacity-15 py-20 mt-16">
        <div className="container mx-auto md:px-28 mt-10 bg-cover bg-cream bg-center bg-no-repeat">
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

          <div className="flex flex-col items-center justify-around md:flex-row gap-4  container mx-auto">
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div className=" px-2 md:px-3 pt-1">
                  <img
                    className="h-8 w-8 bg-blue text-white rounded-full"
                    src="/assets/our testimonial image1.png"
                  />
                </div>
                <div>
                  <p className="text-[#ED5251] font-sans">
                    <b>Riddhi Singh</b>
                  </p>
                  <p className="text-[16px] pr-4 md:pr-8 pb-6 md:pb-6 font-sans text-[#342D6F]">
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
                <p className="text-[15px] pr-4 md:mr-10 md:pr-20 pb-6 md:pb-14 font-sans text-[#342D6F]">
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at
                  nam.Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
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
                  <p className="text-[16px] pr-4 md:pr-8 pb-6 md:pb-6 font-sans text-[#342D6F]">
                    Physics Teacher
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#342D6F] md:mr-28 text-[15px] font-sans">
                  <b>
                    “There are alot of models to explore which helps in
                    understanding concept”
                  </b>
                </p>
                <p className="text-[15px] pr-4 md:mr-28 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                  Lorem ipsum dolor sit amet consectetur. Netus amet morbi
                  cursus egestas at ut elit. Id nec metus pharetra sit at nam.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                <div className=" px-2 md:px-3 pt-1">
                  <img
                    className="h-8 w-8 bg-blue text-white rounded-full"
                    src="/assets/our testimonial image3.png"
                  />
                </div>
                <div>
                  <p className="text-[#ED5251] font-sans">
                    <b>Riddhi Singh</b>
                  </p>
                  <p className="text-[16px] pr-4 md:pr-16 pb-6 md:pb-6 font-sans text-[#342D6F]">
                    Physics Teacher
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#342D6F] md:mr-36 text-[15px] font-sans">
                  <b>
                    “There are alot of models to explore which helps in
                    understanding concept”
                  </b>
                </p>
                <p className="text-[16px] pr-4 md:mr-28 md:pr-8 pb-6 md:pb-14 font-sans text-[#342D6F]">
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

      {/* ------------Price Plan------------------- */}

      <div className="bg-[#FFDE95] bg-opacity-15 py-5 flex flex-col items-center justify-center space-y-5">
        <div className="flex flex-col items-center justify-center space-y-1">
          <h1 className="text-4xl text-border_color font-bold text-center">
            Pick Your Perfect Plan
          </h1>
          <p className="text-carrotColor font-semibold text-xl">OUR PRICING</p>
          <p className="text-border_color">
            Explore our flexible subscription plans designed to fit your needs.
            Choose the perfect option and start enhancing the learning journey
            today.
          </p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* -------------------------------------------------1 */}
          <div className="border border-border_color relative rounded-2xl bg-white">
            <span className="text-3xl font-semibold bg-carrotColor text-white absolute top-0 rounded-tl-2xl px-5 py-1 mb-5">
              Standard
            </span>
            <div className="border-b border-border_color px-5 py-5">
              <h3 className="text-border_color mt-14 py-5">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </h3>
              <h1 className="text-carrotColor text-4xl font-bold">
                ₹1000<span className="text-border_color text-xs">/STUDENT</span>
              </h1>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 space-y-4 py-5">
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Experiments with hands-on Learning Curriculum
                </span>
                <li>Experiments on Subscription</li>
                <li>Hands-on learning curriculum</li>
                <li>Repair and maintenance.</li>
              </ul>
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Jigyasu curriculam
                </span>
                <li>
                  A Trained Demonstrator/Science Communicator/Teacher to provide
                  visualisation of these concepts and smooth running of the
                  science studio
                </li>
              </ul>
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Jigyasu Program Management
                </span>
                <li>Program monitoring and weekly status report.</li>
                <li>Curriculum mapping and flexibility in lesson plan.</li>
                <li>
                  Online LMS Activity sheets, Quiz, Performance assessment
                  report, Gap analysis.
                </li>
              </ul>
            </div>
            <button className="bg-border_color px-6 py-2 rounded-full text-white my-5 mx-10 ">
              Contact us
            </button>
          </div>
          {/* --------------------------------- 2*/}
          <div className="border border-border_color relative rounded-2xl bg-white">
            <span className="text-3xl font-semibold bg-carrotColor text-white absolute top-0 rounded-tl-2xl mb-5 px-5 py-1">
              Custom
            </span>
            <div className="border-b border-border_color px-5 py-5">
              <h3 className="text-border_color mt-14 py-3">
                Lorem ipsum dolor sit amet consectetur. Netus amet morbi cursus
                egestas at ut elit. Id nec metus pharetra sit at nam.
              </h3>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 space-y-2 py-2">
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Experiments with hands-on Learning Curriculum
                </span>
                <li>Experiments on Subscription</li>
                <li>Hands-on learning curriculum</li>
                <li>Repair and maintenance.</li>
              </ul>
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Jigyasu curriculam
                </span>
                <li>
                  A Trained Demonstrator/Science Communicator/Teacher to provide
                  visualisation of these concepts and smooth running of the
                  science studio
                </li>
              </ul>
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Jigyasu Program Management
                </span>
                <li>Program monitoring and weekly status report.</li>
                <li>Curriculum mapping and flexibility in lesson plan.</li>
                <li>
                  Online LMS Activity sheets, Quiz, Performance assessment
                  report, Gap analysis.
                </li>
              </ul>
              <ul className="list-disc px-10 custom-marker">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="text-slate-950 bg-slate-100 p-1 ">
                    <FaCheck />
                  </span>
                  Maintenance & Support
                </span>
                <li>
                  Jigyasu will provide repair & Maintenance for the equipment
                  provided in the Science Studio
                </li>
              </ul>
            </div>
            <div className="my-5 mx-10 flex flex-col md:flex-row  items-center gap-5">
              <button className="bg-[#342d6f9f] px-6 py-2 rounded-full text-white">
                Calculate Budget
              </button>
              <button className="bg-border_color px-6 py-2 rounded-full text-white">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
