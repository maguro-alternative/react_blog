import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Meta from "./meta"

//createRoot(document.querySelector("#content")).render(<App />);

// reactのMain関数

ReactDOM.render(
  // Gameクラスヘ
  <App/>,
  //document.getElementById('div'),
  document.getElementById('root'),
);
/*
function App(){
  return(
  <div id="ba">
    <div id="bg"></div>
    <canvas id="canvasOverlay"></canvas>
    <Meta />
    <Toplist/>
    <br/><br/><br/><br/>
  </div>
  );
}

function Meta(){
  return(
    <div>
      <head>
        <script src="./back/bpp.js"></script>
        <meta property="og:description" content="マグロ隊長のポートフォリオとかです" /> 
        <meta property="og:site_name" content="マグロ隊長ポータル" /> 
      </head>
    </div>
  )
}

function Toplist(){
  return(
    <div className="container">
      <header>
        <nav className="global-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="./">トップ</a></li>
            <li className="nav-item"><a href="#">記事一覧</a></li>
            <li className="nav-item"><a href="#">メンバー紹介</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

function Topber(){
  return(
    <div>
      <div className="wrapper">
            <div className="topbar">
                <div className="textback">
                    <h1>更新情報</h1>
                    <iframe className="embedup" src="embed.html"></iframe><br/>
                </div>
            </div>
        </div>
    </div>
  )
}
function Dami(){
  return(
    <div></div>
  )
}
*/