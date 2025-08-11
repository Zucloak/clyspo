// million-ignore


"use client";

import { useClickAway } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import React from "react";


interface Props {
    setVideoToggled: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const VideoModal = ({ setVideoToggled }: Props) => {
    const ref = useClickAway<HTMLDivElement>(() => setVideoToggled(false));
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex fixed inset-0 justify-center items-center w-screen z-[500] h-screen backdrop-blur-md bg-black/20"
      >
        <motion.div
          initial={{ filter: "blur(20px)", y: 50 }}
          animate={{ filter: "blur(0px)", y: 0 }}
          exit={{ filter: "blur(20px)", y: 50 }}
          transition={{
            type: "spring",
            bounce: 0.3,
            stiffness: 250,
            damping: 20,
          }}
          ref={ref}
          className="w-[calc(100%-20px)] max-w-[1000px] bg-gray-1 rounded-[16px] md:h-[700px] h-[300px] flex items-center justify-center"
        >
          <div className="text-white">Video player removed</div>
        </motion.div>
      </motion.div>
    );
  };

  export default VideoModal;