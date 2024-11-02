import { useEffect, useState } from "react"
import Customfilter from "../components/Customfilter"
import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import { fetchcars } from "../utils/fetchcars"
import { CarType } from "../types"
import Card from "../components/Card"
import { useSearchParams } from "react-router-dom"
import Showmore from "../components/Showmore"



// entries  : methoduobjeyi diziye  çevirmeye yarar

const Mainpage = () => {


    // usestate bizden state de tutamacagımız verinin tipini ister
    // bizde "generic" yardımıyla ya bir cartype dizisi yada henüz 
    // api den veri gelmediyse null tipinde olabiliceğini söyledik 


    const [cars, setcars] = useState<CarType[] | null>(null);
    const [iserror, seterror] = useState<boolean>(false);

    // url deki arama paramterlerine erişme 
    const [params] = useSearchParams();

    // useeffect görevi bileşenin ekrana basılma olayını izler...
    useEffect(() => {
            // key valuu tipindeki dizileri objeye cevırmeye yarar.
       const paramsobj=  Object.fromEntries(params.entries());
        fetchcars(paramsobj).then((data) => setcars(data))
            .catch(() => seterror(true));
    }, [params]);
    // params alma sebebimiz parametreler değiştiğinde api isteği attıgımız zaman tekrar api isteği atsın 
    // arama parametrelerini url e eklemek için useSearchParams Hook'u kullanırız.

    return (
        <div>
            <div>
                <Hero />

                <div id="catalogue" className="mt-12 padding-x padding-y max-width" >

                    <div className="home__text-container">
                        <h1 className="text-4xl font-extrabold"> Araba Kataloğu</h1>

                        <p>Beğenebiliceğin arabaları keşfet</p>
                    </div>
                    {/* Filtreleme alanı */}

                    <div className="home__filters">

                        <Searchbar />
                    </div>

                    <div className="home__filter-container">

                        <Customfilter />
                        <Customfilter />

                    </div>
                </div>

                {/* Araba listesi  */}

                {/*  1 ) Veri nullsa henüz apiden cevap gelmemiştir.
                //  2 ) iserror true ise > apiden cevap alınırken hata oluşmuştur.
                //  3 ) Veri boş diziyse  > aranan kriterler uygun eleman bulunamamiştır.
                //  4 ) Veri dolu diziyse aranan kriterlere uygun elemanlar ekrana yansıtılır

                */}

                {!cars ? (

                    <div className="warn-container"> Yükleniyor. </div>

                ) :
                    iserror ? (

                        <div className="warn-container">

                            <h2>Sistemsel bir hatadan dolayı verileri getiremedik.</h2>
                        </div>


                    ) : cars.length < 1 ? (
                        <div className="warn-container">

                            <h2>Üzgünüz aradiğiniz veriler bulunamadı</h2>

                        </div>

                    ) :

                        <section>

                            <div className="home__cars-wrapper">
                                {cars.map((car, i) => (

                                    <Card key={i} car={car} />
                                ))}
                            </div>

                            <Showmore/>

                        </section>


                }
                

            </div>
            
        </div>

    )

}

export default Mainpage