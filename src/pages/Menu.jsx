import React from "react";
import PagesBanner from "../components/PagesBanner";
import menuData from "../data/menuData.json";
import { MenuCards } from "../components/MenuCards";

function Menu() {
  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesBanner
        image="src/assets/menuBanner.png"
        title="Order Online or On The App"
      />
      <div className="container w-11/12 md:max-w-[68rem] h-full mx-auto grid place-items-center">
        <div className="flex flex-wrap flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4">
          {/* menu component goes in here */}
          {menuData.map((item) => (
            <div key={item.id}>
              <MenuCards {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
