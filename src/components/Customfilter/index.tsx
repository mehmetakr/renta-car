
import Select from "react-select";
import { Optiontype } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface CustomProps {

    paramName: string
    title: string;
    options: Optiontype[];
}



const Customfilter = ({ title, paramName, options }: CustomProps) => {


    const [selected, setselected] = useState<Optiontype | null>(null);
    const [params, setparams] = useSearchParams();


    // seçilen filtreye göre url i  güncelle

    useEffect(() => {

        // url e eklenicek parametreyi belirle  

        if (selected?.value) {

            params.set(paramName, selected?.value.toLocaleLowerCase())


        }
        else { 

            // value su url den parametreyi kaldır.
            params.delete(paramName);
                }
        // değişikliği url'e aktar ,
           setparams(params);

    }, 
  [selected]);


const defaultValue ={


    label :params.get(paramName),
    value :params.get(paramName), 
}

    return (

        <div className="text-black w-fit">
            <Select  defaultInputValue={params.get("make")!} onChange={(e) => setselected(e)} placeholder={title} className="min-w-[100px]" options={options} />  </div>


    )
}

export default Customfilter 