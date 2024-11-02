//  * Bize parametre olarak gelen bir araba için aracın 
// fotoğraf url 'sini olusturucaz

// ? temel url : https://cdn.imagin.studio/getimage
// * aracın bilgilerine göre dinamik olarak elde ediceğimiz sonuç :
// ? https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m3


import { CarType } from "../types";
import { colors } from "../constants";


export const generateImage = (car: CarType, angle?: string): string => {
    // javascriptin url classsından örnek almamız sayesinde 
    // url üzerinde değişikliklleri kolayca yapmamızı sağlayacak 
    // methodlara erişimimiz açıldı..


    const url = new URL('https://cdn.imagin.studio/getimage')

    // Url e dinamik şekilde bir arama paramtresi ekleme

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("modelFamily", car.model.split("/")[0]);
    url.searchParams.append("make", car.make);

    url.searchParams.append("zoomtype", "fullscreen")

    // açı varsa arabaların diğer acılardan fotograflarını getirir.
    if (angle) {


        url.searchParams.append("angle", angle);
    }

    // arabaların farklı renkteki modellerını searchparams ile ekrana getirip yazdırma işlemini yaptık .

    //  her url olusturuldugunda rastgele bir renk belirler
    const idx = Math.floor(Math.random() * colors.length);
    url.searchParams.append("paintId", colors[idx]);
    console.log("angle kelımesi burada : " + angle)


    console.log(">>>>", url);
    return url.toString(); // URL'yi string olarak döndürme

}

