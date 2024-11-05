
import { CarType } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

type Filtertype = {

  make?: string;
  fuel_type?:string;
  year?:number;
  model?: string;
  limit?: string; 
}

export async function fetchcars(filters: Filtertype): Promise<CarType[]> {

  const { make = "bmw", model = "m3" , limit= "5",fuel_type="", year=""} = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelfamily=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`

    , options);

  const data = await res.json();

  return data;
}