import { motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils/generateimage";
import CustomButton from "../Custombutton";
import { useState } from "react";
import Detailmodal from "../Detailmodal/Detailmodal";
import Showmore from "../Showmore";
motion


interface Icardprops {


    car: CarType;

}
const Card = ({ car }: Icardprops) => {

    const [ismodalopen, setisopen] = useState<boolean>(false);
    const translate = {

        fwd: "önden ceker",
        rwd: "arkadan itişli",
        '4wd': '4 çeker',
        awd: '4 çeker',
    };
    return (

        <motion.div initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className=" m-5 car-card group ">

            {/* araba ismi */}

            <h2 className="car-card__content-title bg-primary ">{car.make} {car.model}  </h2>
            {/* araba fiyatı */}
            <p className="text-[31px] flex mt-6">

                <span className="text-[13px]  font-semibold">₺</span>
                {Math.round(Math.random() * 7000) + 1500}
                <span className="text-[15px] self-end font-sembolid">/gün</span>
            </p>


            {/* Resim alanı  */}
            <div className="relative w-full  h-40 my-3">
                <img width={50} src={generateImage(car)} alt="car" className="w-full h-full object-contain" />
            </div>


            {/* alt kısım  */}
            <div className="relative flex w-full mt-2">
            </div>
            {/* ikonlar */}
            <div className=" group-hover:hidden flex w-full justify-between" >
                <div className="flex-center flex-col">
                    <img width={25} src="/steering-wheel.svg" alt="" />
                    <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
                </div>
                <div className="flex-center flex-col">
                    <img width={25} className="" src="/tire.svg" alt="" />
                    <p>{translate [car.drive]}</p>
                </div><div className="flex-center flex-col">
                    <img width={25} src="/gas.svg" alt="" />
                    <p>{car.fuel_type}</p>
                </div>

                {/* buton */}

            </div>


            <div className=" group-hover:flex hidden w-full">
                <CustomButton  rIcon="/arrow-down.svg"  handleclick={() =>  setisopen(true)

                } title="Daha fazla" designs="w-full py-[16px]" />


            </div>
            <Detailmodal car={car} isOpen ={ismodalopen} close={() => setisopen(false)} />
       
        </motion.div>
        
        );

}

export default Card;