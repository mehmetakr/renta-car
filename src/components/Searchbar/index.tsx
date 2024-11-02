
import ReactSelect from 'react-select';
import { makes } from '../../constants';
import { FormEvent, useMemo, useState } from 'react';
import { button } from 'framer-motion/client';
import { useSearchParams } from 'react-router-dom';

// 1. bileşen 

const Searchbutton = ({designs}: {designs: string}) => (


    <button  className={` ${designs} ml-3 z-10 `}>
        <img src="/magnifying-glass.svg" height={40} width={40} alt="" />
    </button>


)


// 2. bileşen 
const Searchbar = () => {

    // state in değişmesi demek bileşenin render olması demektir. 
    // select ettiğimiz araç modelini statede tutuyoruz.
    const [model, setmodel] = useState<string>("");
    const [make, setmake] = useState<string>("");
    
    

    const [searchparams, setsearchparams]=  useSearchParams() ;
    
    type OptionType = {


        label: string
        value: string;
    }

    // bileşen her render oldugunde gereksiz işlemler yapılmaısn diye usemome adında bır fonksiyon kullanırız.
    // yani her tuş vurusunda fonksyonunn gereksiz yere calısmamasın için usememo kullanırız .
    const options: OptionType[] = useMemo(() => makes.map((make) => ({

        label: make,
        value: make,
    })), []);

    console.log(" Burası modeldir ve bileşen her render oldugunda burası ekrana yazdırılır.. :" + model)

// form gönderilince çalışır..

    const  handlesubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();



        // verileri url e arama parametresi olarak ekledik..
   setsearchparams({make,model})    

};
    return (
        <form onSubmit={handlesubmit} className='searchbar gap-3'>

            <div className="searchbar__item">

                <ReactSelect onChange={(e)  => e &&  setmake(e.value)} options={options}
                    className="w-full text-black " />
                <Searchbutton  designs='sm:hidden'/>
            </div>


            <div className='searchbar__item'>
                <img src="/model-icon.png" width={25} alt="araç" className='absolute ml-6' />
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setmodel(e.target.value)} type="text"
                    placeholder='ör:Audi'
                    className=' m-4  p-4 rounded-xl text-black searchbar__input' />
                <Searchbutton  designs= "sm:hidden"/>


            </div>
        </form>


    );

};
export default Searchbar