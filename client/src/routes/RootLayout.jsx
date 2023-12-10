import MainHeader from "../components/MainHeadeer.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayout(){
  return(
    <>
    <MainHeader/>
      <Outlet/>
    </>
  )
}