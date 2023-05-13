import cssData from "/src/database/Challenges/css.json";
import { motion } from "framer-motion";
const jsonData = cssData;

export const CssC = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <motion.div
      className="card border-b-2 bg-[#ffd67d] border-b-[#2a1600] flex flex-col rounded-lg  gap-4 p-4 shadow-3xl h-[16rem] w-[24rem] hover:shadow-4xl"
      key={item.id}
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: i * 0.1 }}
    >
      <div className="img w-5/12  self-center">
        <img className="rounded-lg " src="../public/pedro.png" alt="" />
      </div>
      <div className="content flex flex-col gap-4 items-center">
        <a href={item.link} target={"_blank"} rel="noreferrer">
          <h2 className="text-[#2F4858] text-xl font-bold ">{item.title}</h2>{" "}
        </a>
        <p className="text-sm text-[#402E32] w-4/5">
          {item.description.slice(0, 120) + "..."}
        </p>
      </div>
    </motion.div>
  ));
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
      {cardComponents}
    </div>
  );
};
