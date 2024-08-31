/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";

const navigation = NAV_LINKS;

import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Footer() {
  return (
    <section className="bg-[#342D6F] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center">
        <div className="space-y-7">
          <div>
            <Image
              src="/assets/j_Logo.png"
              alt="logo"
              width={150}
              height={100}
              quality={95}
            />
          </div>
          <div className="text-white md:text-base text-[12px]  space-y-7">
            <p>
              Jigyasu is an educational startup with "Learning By Doing" as its
              guiding principle. Founded by Mr. Satwik Das, an IIT Kharagpur
              Alumnus. Jigyasu aims to bring abstract concepts from textbooks to
              real life. 
            </p>
          </div>
        </div>

        {/* LINKS */}

        <div className="text-white flex items-start md:items-center flex-col">
          <ul>
            <span className="text-amber-500 text-base  font-semibold">
              Link
            </span>
            {navigation?.map((each, index) => (
              <li key={index}>
                <Link href={each?.href} className="md:text-base text-[12px] ">
                  {each?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*DISCLAImER  */}

        <div className="flex flex-col text-white items-start md:text-base text-[12px]">
          <span>Disclaimer</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

        {/* ADDRESS */}

        <div className="text-white space-y-5">
          <span className="text-amber-500 text-base font-semibold">
            Contact Details
          </span>
          <span className="flex items-center gap-2">
            <FaPhone className="text-amber-500" size={16} />
            <span className="md:text-base text-[12px]">+91 99987823</span>
          </span>
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-amber-500" size={16} />
            <span className="md:text-base text-[12px]">
              HIG Duplex #44, Saileshree Vihar, Opp to DAV CSPUR, BBSR- 751024
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

{
  /* <p className="text-slate-500">Copyright 2024@ Jigyasu Education</p> */
}
