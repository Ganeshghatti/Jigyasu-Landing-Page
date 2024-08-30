"use client";
import { NAV_LINKS } from "@/constants";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = NAV_LINKS;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-[1000]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative py-5 flex items-center justify-between">
              <div className="flex items-center justify-between w-full">
                <div className="">
                  <Image
                    className="h-10 w-auto"
                    src="/logo.png"
                    alt="Your Company"
                    width={150}
                    height={150}
                    quality={95}
                  />
                </div>
                <div className="hidden md:flex items-center gap-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-border_color"
                          : "text-border_color font-semibold",
                        "text-border_color font-semibold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="gap-5 hidden md:flex items-center ">
                  <button className="border border-border_color font-bold py-1 px-6 rounded-full text-md md:text-sm text-border_color">
                    Pricing
                  </button>
                  <button className="bg-carrotColor  hover:bg-carrotColor_hover text-white font-bold py-1 border border-carrotColor px-4 rounded-full text-md md:text-sm">
                    Book Demo
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-black-700"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-black-700"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-primary"
                      : "hover:text-primary text-blue",
                    "block rounded-md px-3 py-2 font-bold text-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center">
                Pricing
              </button>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
