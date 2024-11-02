import { useState } from "react"
import CustomButton from "../Custombutton"
import { useSearchParams } from "react-router-dom";



const Showmore = () => {

    // arama paramtresine erişmeye calıstık 
    //ve usesearchparams a ulastık

    const [searchparams, setsearchparams] = useSearchParams();
    //  1) URL de limit parametresi yoksa : 
    // kullanıcı projeye yenı girmiştir.ve ekranda 5 araç vardır.
    // butona tıklanınca url e limit parametresi 10 olarak eklenir.

    //2) url de limit paramtresi varsa: 
    // kullanıcı en az bir kez butona basmıştır.
    // butona tıklanınca öncekı paramtrenin 5 fazlası daha ekrana getirılır.

    // url den limit parametresini al 

    const limit = Number(searchparams.get("limit")) || 5;


    const handlelmit = () => {

        // yeni limit belirle  
        const newlimit = String(limit + 5);
        setsearchparams({ limit: newlimit })
    }
    return (

        <div className=" text-black w-full flex-center  gap-5 my-10">


{/* limit 30 sayısından küçük ise ekrana custombutton u renderla*/} 

 {limit < 30 && <CustomButton handleclick={handlelmit} title="Daha fazla" />
            }
        </div>

    )

}

export default Showmore