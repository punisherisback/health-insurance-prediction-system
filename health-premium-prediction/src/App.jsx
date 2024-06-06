import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import logo from "./assets/img/logo.svg";
import LoginSignup from "./components/LoginSignup";
import { useState } from "react";

const App = () => {
  return (
    <>
      <header>
        <div className="navigation fixed w-screen z-30 overflow-hidden">
          <div className="bg-yellow-300">
            <nav className="py-1 flex justify-evenly items-center relative">
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="Logo" />
              </a>
              <div className="flex justify-evenly gap-10">
                <a href="#home" className="page-scroll text-lg">
                  Home
                </a>
                <a href="#services" className="page-scroll text-lg">
                  Services
                </a>
                <a href="#about" className="page-scroll text-lg">
                  About Us
                </a>
                <a href="#team" className="page-scroll text-lg">
                  Our Team
                </a>
                <a href="#contact" className="page-scroll text-lg">
                  Contact Us
                </a>
              </div>

              <div
                className="border-1 dark-border px-6 font-bold py-2 rounded-full duration-300 hover:bg-black hover:text-yellow-300"
                href="#feature"
              >
                <button>Login/Sign Up</button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="pt-48 pb-10">
        <div className="w-screen">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2 className="text-5xl font-bold typewriter py-4">
                Do you really need health insurance?
              </h2>
              <h2 className="text-4xl pb-10 font-bold">Let's find out!</h2>
              <div className="text-center mb-10">
                <button className="border-2 border-black p-3 rounded-3xl font-bold hover:bg-yellow-300">
                  <a href="#" rel="nofollow">
                    Click Here to know
                  </a>
                </button>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid mx-auto"
                  src="assets/health.avif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div>
          <div className="flex justify-center">
            <div className="mb-12 head1 text-5xl font-bold p-2">
              Our Services
            </div>
          </div>
          <div className="flex mx-32 justify-center gap-16">
            <div className="my-12 w-3/4">
              <img src="assets/check.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Insurance Needs Assessment
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Offer a personalized assessment to help users determine if they
                actually need any health insurance.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/map.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Lifestyle Improvement Programs
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Offer information and resources for lifestyle modification
                programs aimed at improving health and reducing the need for
                health insurance, including exercise routines, diet plans, and
                wellness tips.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/health.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">
                Customized Recommendations
              </h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Provide personalized recommendations for health insurance plans
                that best suit each user's individual needs.
              </h4>
            </div>
            <div className="my-12 w-3/4">
              <img src="assets/support.svg" className="w-16" alt="" />
              <h1 className="text-2xl font-bold my-5 h-16">Customer Support</h1>
              <h4 className="text-lg text-justify bg-yellow-200 p-4 h-72 rounded-xl">
                Highlight your customer support services, including helpline
                numbers, live chat support, and FAQs to assist users with any
                queries or issues related to health insurance and wellness.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="w-screen">
          <div className="flex justify-center">
            <div className="mb-12 text-5xl head1 font-bold p-2">About Us</div>
          </div>
          <div className="px-40">
            <ul className="text-3xl font-bold list-disc">
              <li>Why is Health Insurance Important?</li>
              <p className="text-lg dark-c font-normal py-5 text-justify">
                Health insurance is essential for several reasons. Firstly, it
                offers financial protection by covering the high costs of
                medical care, which can otherwise lead to significant financial
                strain or debt. Secondly, it ensures timely access to quality
                healthcare services, allowing individuals to receive necessary
                treatments without delay. Additionally, health insurance
                promotes preventive care and encourages individuals to
                prioritize their health and well-being.
              </p>
              <li>How We Can Help</li>
              <p className="text-lg dark-c font-normal py-5 text-justify">
                At InsureAI, we are committed to helping you navigate the
                complex world of health insurance and make informed decisions
                about your healthcare needs. Our team of experts is dedicated to
                providing personalized assistance and guidance to ensure that
                you find the right health insurance plan tailored to your unique
                requirements and budget. We offer comprehensive assessments to
                evaluate your current health status, lifestyle habits, and
                financial situation, helping you determine whether obtaining
                health insurance is the right choice for you at this time.
                Additionally, we provide valuable resources and support to
                empower you to adopt a healthy lifestyle and minimize the need
                for extensive medical care.
              </p>
            </ul>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 text-center">
        <div className="w-screen">
          <div className="flex justify-center">
            <div className="mb-12 text-5xl font-bold head1 p-2">Our Team</div>
          </div>
          <div className="flex m-10 justify-evenly">
            <div>
              <img className="w-72" src="assets/img/team/img1.jpg" alt="" />
              <div className="text-center px-5 py-3">
                <h3 className="text-2xl font-semibold">Akshat Bisht</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div>
              <img className="w-72" src="assets/img/team/img1.jpg" alt="" />
              <div className="text-center px-5 py-3">
                <h3 className="text-2xl font-semibold">Sahil Semwal</h3>
                <p>Front-End Developer</p>
              </div>
            </div>
            <div>
              <img className="w-72" src="assets/img/team/img1.jpg" alt="" />
              <div className="text-center px-5 py-3">
                <h3 className="text-2xl font-semibold">Raushan Kumar</h3>
                <p>Back-End Developer</p>
              </div>
            </div>
            <div>
              <img className="w-72" src="assets/img/team/img1.jpg" alt="" />
              <div className="text-center px-5 py-3">
                <h3 className="text-2xl font-semibold">Ritik</h3>
                <p>Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-32 py-16">
        <div className="flex justify-center">
          <div className="text-5xl font-bold text-center p-2 head1">
            Contact Us
          </div>
        </div>
        <form action="" className="text-lg font-semibold my-16 w-screen">
          <div className="flex flex-col items-center gap-6 justify-center">
            <div className="flex justify-stretch gap-5">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name"
                  className="p-3 border-2 rounded-full border-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="p-3 border-2 rounded-full border-black"
                />
              </div>
            </div>
            <div>
              <input
                className="p-3 w-96 h-60 border-2 rounded-3xl border-black"
                type="text"
                name="comment"
                placeholder="Comment Here*"
              />
            </div>
            <div>
              <button className="py-3 px-10 hover:bg-yellow-300 rounded-full border-2 border-black font-bold">
                Submit Response
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="dark-bg py-6 border-t-2">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <p className="text-white">
              InsureAI | &copy; 2024 | All rights reserved
            </p>
          </div>
        </div>
      </section>

      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-yellow-300 text-white text-lg z-20 duration-300"
      >
        <i className="lni lni-arrow-up"></i>
      </a>
    </>
  );
};

export default App;
