import React, {useState} from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import AppRoutes from './Router';
function App() {
  const [subMenu, setSubMenu] = useState(1);
  const handlerSelectSubMenu = (num) => {
    setSubMenu(num);
  }
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%'}}>
      <BrowserRouter>
      <div style={{height:'30px', minHeight:'30px', backgroundColor:'#555', display:'flex', flexDirection:'row'}}>
        <div style={{backgroundColor:'red', width:'188px', color:'white', padding:'6px 6px'}}><b>React App</b></div>
        <div className="tablink" style={{padding:'6px 6px'}} onClick={()=>{handlerSelectSubMenu(1)}}>메뉴1</div>
        <div className="tablink" style={{padding:'6px 6px'}} onClick={()=>{handlerSelectSubMenu(2)}}>메뉴2</div>
        <div className="tablink" style={{padding:'6px 6px'}} onClick={()=>{handlerSelectSubMenu(3)}}>메뉴3</div>
        <div className="tablink" style={{padding:'6px 6px'}} onClick={()=>{handlerSelectSubMenu(4)}}>메뉴4</div>
      </div>
      <div style={{flex:1, backgroundColor:'yellow', display:'flex', displayDirection:'row'}}>
        <div style={{width:'200px', backgroundColor:'red'}}>
          <div style={{display:subMenu==1?'block':'none'}}>
            <button className="accordion" style={{with:'200px'}}>서브메뉴1</button>
            <div className="accordion_panel" style={{width:'200px'}}>
              <div className="navbar">
                <NavLink className="vertical-menu" to="./pages/Aaa" style={{color:'black'}}>Aaa</NavLink>
                <NavLink className="vertical-menu" to="./pages/Bbb"  style={{color:'black'}}>Bbb</NavLink>
              </div>
            </div>
            <button className="accordion" style={{with:'200px'}}>서브메뉴2</button>
            <div className="accordion_panel" style={{width:'200px'}}>
              
            </div>
            <button className="accordion" style={{with:'200px'}}>서브메뉴3</button>
            <div className="accordion_panel" style={{width:'200px'}}>
              
            </div>
          </div>
          <div style={{display:subMenu==2?'block':'none'}}>
            <button className="accordion" style={{with:'200px'}}>서브메뉴21</button>
            <div className="accordion_panel" style={{width:'200px'}}>

            </div>
            <button className="accordion" style={{with:'200px'}}>서브메뉴22</button>
            <div className="accordion_panel" style={{width:'200px'}}>
              
            </div>
            <button className="accordion" style={{with:'200px'}}>서브메뉴23</button>
            <div className="accordion_panel" style={{width:'200px'}}>
              
            </div>
          </div>
        </div>
        <div style={{flex:1, backgroundColor:'blue'}}>
          <Routes>
            {AppRoutes.map(route=>{
              return(
                <Route key={route.path} path={route.path} element={route.element} />
              )
            })}
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
