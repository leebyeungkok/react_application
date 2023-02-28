import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%'}}>
      <div style={{height:'30px', minHeight:'30px', backgroundColor:'#555'}}>
        
      </div>
      <div style={{flex:1, backgroundColor:'yellow', display:'flex', displayDirection:'row'}}>
        <div style={{width:'200px', backgroundColor:'red'}}>
          왼쪽메뉴
        </div>
        <div style={{flex:1, backgroundColor:'blue'}}>
          가운데.. 
        </div>
      </div>
    </div>
  );
}

export default App;
