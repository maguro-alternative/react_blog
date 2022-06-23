import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Page1 from './page/page1'; //作成したpage1.jsを読み込んでいる
import Page2 from './page/page2';
import Toppage from './page/top';
import { Helmet } from "react-helmet"
 
class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Toppage/>}/>
          <Route path={"/page1"} element={<Page1/>}/>
          <Route path={"/page2"} element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
}
 
export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      Hell to you
    </div>
  );
}

export default App;
*/
