import React from "react";
import CustomButton from "../Custombutton";
import { motion } from "framer-motion";


const Hero: React.FC = () => {

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x max-h-[920px]">
                <h1 className="hero__title">

                    Özgürlüğü hisset ,Yolculuğa başla
                </h1>

                <p className="">
                    Altın standartta hizmetle unutuzlmaz bir yolculuğa hazırmısın ?
                    Araç kiralama deneyimini Altın seçenekleri ile
                    taçlandırarak her anını özel kılabilirsin.
                </p>
                <CustomButton title="Arabaları keşfet" designs="" />

            </div>

            <div className="flex justify-center ">


                <motion.img className="object-contain"

                    initial={{ scale: 0.7, translateX: 200 }}
                    animate={{ scale: 1, translateX: 0 }}
                    transition={{duration:1.5,}}
                    src="hero.png" alt="car" />
            </div>

        </div>

    )
}
export default Hero