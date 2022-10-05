import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainPage.css"
const MainView = () =>{
  const [test, setTest] = useState(1);
  return (
    <>
    <div className="MainV">
    <div className="myTextCont">
    <img src={require("../img/sol.png")} className="imgMe" onClick={()=>{test<=1 ? setTest(5) : setTest(test-1)}} ></img>
    <div className="myText">
    {(test == 1)&&(<p> merhaba ben Erden Pınarözü Web ile ugraşıyorum</p>)}
     {(test == 2)&&(<p> istediginiz web sayfasını yapabilirim</p>)}
     {(test == 3)&&(<p>örnek yaptğım bi anime izleme sitesi için <NavLink to="/anime">tıkla</NavLink> yada</p> )}
     {(test == 4)&&(<p>örnek bi alışveriş sitesi için <NavLink to="/giyim">tıkla</NavLink></p>)}
     {(test == 5)&&(<p> <a href="https://github.com/elessar99" target="blank">github</a> yada <a target="blank" href="https://www.linkedin.com/in/erden-p%C4%B1nar%C3%B6z%C3%BC-830365249/">linkedin</a> hesaplarıma incelemek isterseniz  </p>)}
     </div>
     <img src={require("../img/sag.png")} className="imgMe" onClick={()=>{test>=5 ? setTest(1) : setTest(test+1)}} ></img>
     </div>
    </div>
    
    </>
    
  );
}

export default MainView;

