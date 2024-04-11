import React, { useState, useEffect } from "react";

export default function Luxury() {
  const [addClassLuxury, setAddClassLuxury] = useState(false);

  useEffect(() => {
    const handleScrollLuxury = () => {
      const scrollPosition = window.scrollY;
      const triggeringPoint = window.innerHeight * 3.4;

      if (scrollPosition >= triggeringPoint) {
        setAddClassLuxury(true);
      } else {
        setAddClassLuxury(false);

        window.addEventListener("scroll", handleScrollLuxury);

        return () => {
          window.removeEventListener("scroll", handleScrollLuxury);
        };
      }
    };
  }, []);
  return (
    <div className="bg-black luxury h-screen w-full">
      <div className=" z-200 bg-gradient-to-tr from-slate-900 to-transparent h-full w-full flex flex-col justify-end">
        <div
          className={`flex-col flex mb-10 w-2/4 ml-10 luxury-text ${
            addClassLuxury ? "fade-text-top" : ""
          }`}
        >
          <p className=" text-4xl text-white mb-5 cinzel-decorative-regular">
            LUXURY REDEFINED.
          </p>
          <p className="text-white cinzel-decorative-regular text-xs">
            Indulge in opulence with our collection of luxurious quality shirts.
            Crafted with precision and finesse, each garment embodies
            unparalleled comfort and sophistication, promising to elevate your
            style to new heights. Experience the epitome of luxury with every
            stitch, only at our website.
          </p>
        </div>
      </div>
    </div>
  );
}
