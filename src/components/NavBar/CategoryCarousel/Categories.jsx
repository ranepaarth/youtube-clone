import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Item from "./Item";
const Categories = () => {
  const navRef = useRef();
  let [leftVisible, setLeftVisible] = useState(false);
  let [rightVisible, setRightVisible] = useState(true);

  const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(navRef.current.scrollLeft);
    let scrollableWidth =
      navRef.current.scrollWidth - navRef.current.clientWidth;

    console.log("1", scrollLeftValue);
    console.log("2", scrollableWidth);

    scrollLeftValue > 0 ? setLeftVisible(true) : setLeftVisible(false);
    scrollableWidth > scrollLeftValue
      ? setRightVisible(true)
      : setRightVisible(false);
  };
  const moveRight = () => {
    navRef ? (navRef.current.scrollLeft += 320) : null;
    setTimeout(() => IconVisibility(), 30);
  };

  const moveLeft = () => {
    navRef ? (navRef.current.scrollLeft -= 320) : null;
    setTimeout(() => IconVisibility(), 30);
  };

  window.onload = function () {
    navRef.current.scrollWidth > navRef.clientWidth ||
    navRef.current.scrollWidth >= window.innerWidth
      ? setRightVisible(true)
      : setRightVisible(false);

    navRef.current.scrollableWidth >= window.innerWidth
      ? ""
      : setLeftVisible(false);
  };
  window.onresize = function () {
    navRef.current.scrollWidth > navRef.clientWidth ||
    navRef.current.scrollWidth >= window.innerWidth
      ? setRightVisible(true)
      : setRightVisible(false);

    navRef.current.scrollableWidth >= window.innerWidth
      ? ""
      : setLeftVisible(false);

    let scrollLeftValue = Math.round(navRef.current.scrollLeft);

    scrollLeftValue > 0 ? setLeftVisible(true) : setLeftVisible(false);
  };

  let activeDrag = false;
  const dragging = () => {
    console.log("dragging...");
  };
  navRef?.current?.addEventListener("mousemove", (drag) => {
    if (!activeDrag) return;
    navRef.current.scrollLeft -= drag.movementX;
    console.log(drag);
    IconVisibility();
  });

  document.addEventListener("mouseup", () => {
    activeDrag = false;
  });

  navRef?.current?.addEventListener("mousedown", () => {
    activeDrag = true;
    console.log("mousedown");
  });

  return (
    <div className="">
      <div className="py-2 px-4 md:ml-20 mb-2 bg-[#0a0a0a]">
        <span
          className={`${
            leftVisible ? "block" : "hidden"
          } absolute top-0 left-0 md:left-20 bg-gradient-to-r from-[#0a0a0a] from-80% h-12 flex items-center justify-start w-24`}
        >
          <p
            className="flex items-center justify-center text-2xl w-16 cursor-pointer"
            onKeyDown={() => moveLeft()}
            onClick={() => moveLeft()}
          >
            <IoIosArrowBack className="p-3 text-5xl hover:bg-neutral-700 hover:rounded-full" />
          </p>
        </span>
        <div className="cursor-pointer items-center select-none overflow-hidden">
          <span
            className="flex gap-3 overflow-x-scroll [transition-duration:500ms] scroll-smooth "
            ref={navRef}
            id="tabs-box"
          >
            <Item Item={"All"} />
            <Item Item={"Gaming"} />
            <Item Item={"Sports"} />
            <Item Item={"Javascript"} />
            <Item Item={"E-sports"} />
            <Item Item={"Lo-fi"} />
            <Item Item={"Bollywood Music"} />
            <Item Item={"Music"} />
            <Item Item={"Live"} />
            <Item Item={"Editing"} />
            <Item Item={"Mixes"} />
            <Item Item={"java"} />
            <Item Item={"Lectures"} />
            <Item Item={"Wickets"} />
            <Item Item={"Badminton"} />
            <Item Item={"Television comedy"} />
            <Item Item={"Recently uploaded"} />
            <Item Item={"Watched"} />
            <Item Item={"new to you"} />
          </span>
        </div>
        <span
          className={`${
            rightVisible ? "block" : "hidden"
          } absolute right-0 top-0 bg-gradient-to-l from-80% from-[#0a0a0a] flex items-center justify-end w-24`}
        >
          <p
            className="flex items-center text-2xl w-16 h-12 cursor-pointer [transition-duration:500ms] [transition-timing-function:linear]"
            onKeyDown={() => moveRight()}
            onClick={() => moveRight()}
          >
            <IoIosArrowForward className="p-3 text-5xl  hover:bg-neutral-700 hover:rounded-full" />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Categories;
