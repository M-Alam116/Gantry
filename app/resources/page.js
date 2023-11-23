import Link from "next/link";
import Pattern from "@/components/home/Pattern";
import { Fragment } from "react";
import Head from "next/head";
import Header from "@/components/resources/Header";
function Resources() {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <div className="w-full bg-[#e2bcfa] max-w-[1440px] min-h-screen flex flex-col mx-auto overflow-hidden">
        <Header />
        <div className="pt-[7rem] text-[16px] font-[600] uppercase flex items-center mb-[1rem] px-[10px] md:px-[2rem]">
          <li className="">featured article</li>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-[10px] md:px-[2rem] gap-[2rem]">
          <div className="w-full flex flex-col gap-3 col-span-2">
            <h1 className="text-[#020001] text-[44px] font-[600] leading-[40px] lg:pr-[10rem]">
              How to measure language model performance
            </h1>
          </div>
          <div className="w-full flex flex-col gap-3 col-span-1">
            <p className="text-black text-[14px] font-[500] text-justify w-full md:max-w-[350px]">
              Part of an ongoing series highlighting insights from papers that
              have contributed to the development of best practices for
              production ML
            </p>
            <div className="flex">
              <button className="bg-black text-white w-full rounded-2xl px-2 py-[10px] text-[14px] font-[400] text-opacity-[95%]">
                Subscribe to our newletter
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-black w-[95%] mx-auto h-[2px] opacity-80 my-[2rem] mt-[4rem] shadow-none" />
        <div className="w-full px-[10px] md:px-[2rem] flex flex-col md:flex-row justify-between gap-[2rem]">
          <div className="flex justify-between md:w-3/3 gap-3 lg:w-2/3 flex-wrap">
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-[600]">Author:</h3>
              <div className="flex gap-3 flex-wrap">
                <button
                  className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  Klrest Agarwal
                </button>
                <button
                  className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  March 14, 2023
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-[600]">Topics:</h3>
              <div className="flex gap-3 flex-wrap">
                <button
                  className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  Papers to know
                </button>
                <button
                  className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  Production Machine learning
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 flex-wrap md:w-3/3 lg:w-1/3">
            <div>
              <h3 className="text-[16px] font-[600]">Share</h3>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <Link href="" className="underline text-[16px] font-[600]">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="" className="underline text-[16px] font-[600]">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="" className="underline text-[16px] font-[600]">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidde mt-[2rem]">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>

          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll-reverse">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll-reverse"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resources;
