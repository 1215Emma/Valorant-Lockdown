import React from "react";
import { motion } from "framer-motion";
const weapons = {
  Sidearms: ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"],
  SMGs: ["Stinger", "Spectre"],
  Shotguns: ["Bucky", "Judge"],
  Rifles: ["Bulldog", "Guardian", "Phanton", "Vandal"],
  "Sniper Rifles": ["Marshall", "Operator"],
  "Heavy SMGs": ["Ares", "Odin"],
  Melee: ["Melee"],
};

const SideBar = () => {
  let weaponsKey = Object.keys(weapons);
  const Weapons = (): JSX.Element[] => {
    return weaponsKey.map((weapon) => {
      return (
        <motion.button type="button" className="weapons-btn"
        whileHover={{scale: 1.2, transition: {duration: 0.25}}}> 
          {weapon}
        </motion.button>
      );
    });
  };
  return (
    <div
      className="fixed top-0 left-0 h-screen w-4/8 m-0
        flex flex-col justify-center
        text-4xl"
    >
      <div className="flex flex-col justify-between h-96 mx-8">{Weapons()}</div>
    </div>
  );
};

export default SideBar;
