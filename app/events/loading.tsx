"use client";

import Image from "next/image";
import { ThreeCircles } from "react-loader-spinner";
import EventLogo from "@/images/event-logo.jpeg";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const LoadingComponent = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  return (
    <div className="h-screen w-screen fixed top-0 bg-black z-50 flex flex-col md:flex-col items-center justify-center gap-10">
      <Image
        src={EventLogo}
        alt="event-logo"
        referrerPolicy="no-referrer"
        width={1920}
        height={1080}
        className="w-fit h-96 md:h-32 animate-pulse"
      />
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color={fullConfig.theme.colors.ui.primary}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingComponent;
