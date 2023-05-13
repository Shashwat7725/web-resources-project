import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className=" w-full  flex mx-auto ml-16">
      <motion.div
        className=" w-3/5 p-12 flex flex-col gap-12"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl text-[#ff8d2a] leading-[5rem] tracking-wider font-merri uppercase drop-shadow-xl">
          Get Empowered <span className=" text-[#ffbb00]"> with </span> <br />
          Web Development
          <br />
          <span className=" text-[#ffc013]"> Resources </span>
        </h1>
        <p className="text-xl w-4/5 text-[#ff8215]">
          Explore our vast collection of web development resources, designed to
          give you the knowledge and tools you need to succeed in the world of
          web development!
        </p>
      </motion.div>
      <div className="flex items-center w-1/2">
        <img className="w-full" src="../public/Gaming-cuate.svg" alt="logo" />
      </div>
      <div className=" w-full z-[-10] absolute left-0 bottom-0">
        <img className="" src="../src/assets/wave.svg"></img>
      </div>
    </div>
  );
}
