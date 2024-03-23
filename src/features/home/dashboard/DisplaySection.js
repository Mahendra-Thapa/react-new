import { useNavigate } from "react-router";

import { useLottie } from "lottie-react";
import yoga from "../../../assets/Animation.json";

const DisplaySection = () => {
  const {View} = useLottie({
  animationData : yoga,
  loop: true
  });

  // console.log(yoga)

  const nav = useNavigate();

  return (
    <div>
      <div className=" items-center grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1   ">
        <div className=" h-[450px] ">
          {View}
          {/* <lottie-player
            src="https://lottie.host/7d48f686-a2fe-4fc9-a000-484d0d6be0e4/7hn6owqWbD.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            mode="normal"
          ></lottie-player> */}
        </div>

        <div className="diss-info p-4 text-justify">
          <h1 className=" text-2xl font-semibold">Hi, I am Mahendra</h1>
          <p className="text-pink-800">Some Dev, Freelancer, Rounder</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis odit quaerat alias non exercitationem natus et,
            corrupti, autem expedita harum ex error incidunt, explicabo
            pariatur. Quas temporibus cum blanditiis. Quisquam.
          </p>
        </div>
      </div>

      {/* <div className="text-center  text-white z-30 rounded-md ">
        <button
          onClick={() => nav("/about/us/page")}
          className="px-6 z-30 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl "
        >
          {" "}
          About Us{" "}
        </button>
      </div> */}
    </div>
  );
};
export default DisplaySection;
