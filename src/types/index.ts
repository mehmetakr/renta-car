/* Reactta typescript ile proje geliştiriyorsak mutlaka componentlerın aldıgı tipi tanımlanmalı  */

import { label } from "framer-motion/client";
import { MouseEventHandler } from "react";

// Tip tanımı 

export type ButtonPropsType = {


  disabled?: boolean,
  designs?: string,
  btnType?: "submit" | "reset" | "button",
  title: string,
  rIcon?: string,
  isopen?: boolean,
  // tıklanma olayında calısan fonksiyon ...
  handleclick?: MouseEventHandler<HTMLButtonElement>;
};

// apiden gelen araç verisinin tipi 

// api'dan gelen araç verisnin tipi
export interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: 'fwd' | 'rwd' | 'awd' | '4wd';
  fuel_type: 'gas' | 'diesel' | 'electricity';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: 'a' | 'm';
  year: number;
}

export type Optiontype = {



  label: string;
  value: string;
}