import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpages";
import Header from "./components/Headerr";
import Kaydolpage from "./pages/Kaydolpage";


const App = (): JSX.Element => {


  //state in degerlerının tipini belirledim

  return <div >



    <BrowserRouter>


      <Header />

      <Routes>

        <Route path="/kaydol" element={<Kaydolpage />} />


        <Route path="/" element={<Mainpage />}>


        </Route>

      </Routes>

    </BrowserRouter>
  </div>


}



export default App;


