import React from 'react';              //Reactを読み込んでいる
import '../css/page1.scss';
 
class page1 extends React.Component {   //page1クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
                <main className="wrapper1">
                <div className="bar">
                    <div className="bar-forward bar-1"></div>
                    <div className="bar-back bar-1"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-2"></div>
                    <div className="bar-back bar-2"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-3"></div>
                    <div className="bar-back bar-3"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-4"></div>
                    <div className="bar-back bar-4"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-5"></div>
                    <div className="bar-back bar-5"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-6"></div>
                    <div className="bar-back bar-6"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-7"></div>
                    <div className="bar-back bar-7"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-8"></div>
                    <div className="bar-back bar-8"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-9"></div>
                    <div className="bar-back bar-9"></div>
                </div>
                <div className="bar">
                    <div className="bar-forward bar-10"></div>
                    <div className="bar-back bar-10"></div>
                </div>
                <div className="title-wrapper">
                    <h3>Hadatend eShop</h3>
                </div>
                </main>
        );
    }
}
 
export default page1;                   //page1を出力する為に必要