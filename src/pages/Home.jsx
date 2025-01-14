import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import HomeCards from "../components/HomeCards";
import PageIntroText from "../components/PageIntroText";
import { ThreeColumn } from "../components/ThreeColumn";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/hero1.jpg";
import heroImg2 from "../assets/hero2.jpg";
import heroImg3 from "../assets/hero3.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import card1 from "../assets/coffeepour.jpg";
import card2 from "../assets/findtrue.png";
import card3 from "../assets/teas.jpg";
import card4 from "../assets/beans.jpg";
import phone from "../assets/mockup.png";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";
import "swiper/css/pagination";
import "swiper/css";

const containerVariants = {
  start: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  middle: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  end: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

function Home() {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      variants={containerVariants}
      initial="start"
      animate="middle"
      exit="end"
      transition={{ duration: 0.75 }}
      id="section2"
      className="h-full py-[4.3rem] md:py-[5.2rem]"
    >
      <div className="w-full flex flex-col md:flex-row justify-center">
        <div className="hidden w-full md:h-[44rem] bg-hero-pattern md:block">
          <div className="bg-light-coffee w-[22rem] customStyle h-96 absolute top-72 left-72 z-10 flex flex-col justify-center items-center gap-y-14 rounded p-10">
            <h2 className="text-center capitalize font-roboto text-white text-3xl leading-relaxed">
              more than just coffee, it's your cup of inspiration.
            </h2>
            <Link to="/menu" className="yellowBtn">
              Get Inspired →
            </Link>
          </div>
        </div>
        <div className="md:w-8/12 w-full h-[30rem] md:h-[44rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="carouselImage" src={heroImg1} alt="hero1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="carouselImage" src={heroImg2} alt="hero2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="carouselImage" src={heroImg3} alt="hero3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full h-80 bg-hero-pattern md:hidden py-8">
        <div className="bg-light-coffee customStyle p-6 ml-8 w-60 h-64 z-10 flex flex-col justify-center items-center gap-y-12 rounded-lg">
          <h2 className="text-center capitalize font-roboto text-white text-xl">
            more than just coffee, it's your cup of inspiration.
          </h2>
          <a className="yellowBtn capitalize" href="#">
            get inspired →
          </a>
        </div>
      </div>
      <PageIntroText
        heading="hello and welcome"
        message="Sip into Something Cozy..."
      />
      <div className="max-w-[68rem] mx-auto flex flex-wrap flex-col md:flex-row md:gap-x-8 justify-center items-center md:mb-8">
        <ThreeColumn
          to="/about"
          img={pic1}
          caption="who we are"
          para="history"
        />
        <ThreeColumn
          to="/menu"
          img={pic2}
          caption="our coffee"
          para="online menu"
        />
        <ThreeColumn
          to="/contact"
          img={pic3}
          caption="visit us!"
          para="location"
        />
      </div>
      <section className="w-11/12 md:max-w-[68rem] mx-auto grid md:place-items-center py-14">
        <div className="md:inline-grid md:grid-cols-2 md:gap-16 grid-rows-2 w-full flex flex-col justify-center items-center">
          <HomeCards
            img={card1}
            title="dive into rich taste"
            desc="Epoch operations bogus, streamlining morrow shelf maples courtiers meditates divers entrance fleas, actinium rapids repairer keen sleepers unrestrictedly perceptually punish, floater hounds coastal."
            button="Try Our Drinks →"
          />
          <HomeCards
            img={card2}
            title="discover flavor true to you"
            desc="Blazers artifact nationally wastefulness than resisting alcove whisked actuator, societies merger heathen appertains unties reaper antiquity resenting waltz, pressure marshals acne jig optionally. "
            button="Discover More →"
          />
          <HomeCards
            img={card3}
            title="shop tea"
            desc="Unending driver relationship twilight, masturbates growling fate stragglers atypically lightness compartmentalized, indices powdered crochet havoc smokers shortcut airstrips figurative, concentrators."
            button="All Teas →"
          />
          <HomeCards
            img={card4}
            title="shop coffee"
            desc="Terminating impetuously epidemics amplify recesses atypically lightness compartmentalized banish, mistakion combinations armstrong inserted sneeze achievements signers."
            button="All Coffee →"
          />
        </div>
      </section>

      <div className="mb-14 rounded mx-auto h-44 gap-2 flex flex-col md:flex-row justify-center items-center bg-dark-coffee max-w-[68rem] px-8">
        <div className="flex flex-col justify-center md:mr-auto">
          <h2 className="text-2xl text-center font-roboto capitalize md:text-start text-white">
            never miss an offer
          </h2>
          <p className="text-center text-white">
            Sign up for our newletter and receive 15% off on your next order
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
          <input
            className="w-80 h-10 bg-white rounded indent-4 outline-none"
            type="text"
            name="email"
            placeholder="enter e-mail..."
          />
          <a className="yellowBtn w-24 text-center" href="#">
            SIGN UP
          </a>
        </div>
      </div>

      <div className="md:pb-8 md:mt-64 rounded-lg max-w-[68rem] mx-auto flex md:flex-row justify-center items-center text-center bg-light-coffee">
        <div
          ref={viewRef}
          className={`hidden md:block md:w-full ${isInView ? "bounce" : null}`}
        >
          <img
            className="hidden w-64 md:block -mt-64 mx-auto -rotate-6"
            src={phone}
            alt="mobile"
          />
        </div>

        <div className="p-8 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-4xl font-roboto text-white capitalize md:text-start leading-tight">
            Download the App and earn points towards your next order
          </h2>
          <div className="flex flex-row">
            <img
              className="max-w-[14rem] h-[3.8rem] cursor-pointer mt-3"
              src={appStore}
              alt="appstore"
            />
            <img
              className="max-w-[13.5rem] h-[5.5rem] cursor-pointer"
              src={playStore}
              alt="playstore"
            />
          </div>
          <p className="text-white text-sm md:text-start">
            Apple and the Apple logo are trademarks of Apple Inc., registered in
            the U.S. and other countries. App Store is a service mark of Apple
            Inc. Google Play is a trademark of Google Inc. Terms apply.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
