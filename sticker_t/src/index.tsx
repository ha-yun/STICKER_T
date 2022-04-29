import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

const HeaderElement = document.getElementById('header_component');
if (!HeaderElement) throw new Error('Failed to find the root element');
const HeaderRoot = ReactDOM.createRoot(HeaderElement);
HeaderRoot.render(
  <React.StrictMode>
      <Header></Header>
    </React.StrictMode>
)

const RootElement = document.getElementById('root');
if (!RootElement) throw new Error('Failed to find the root element');
const Root = ReactDOM.createRoot(RootElement);
Root.render(
  <React.StrictMode>
    <Main></Main>
  </React.StrictMode>
)

const FooterElement = document.getElementById('footer_component');
if (!FooterElement) throw new Error('Failed to find the root element');
const FooterRoot = ReactDOM.createRoot(FooterElement);
FooterRoot.render(
  <React.StrictMode>
    <Footer></Footer>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
