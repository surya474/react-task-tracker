import React from "react";
import {Layout  } from "antd";

import HeaderComp from './components/layout/header';
import HomeComp from './components/TrackerHome/home';

const { Header, Footer, Sider, Content } = Layout;



const App = () => {
 
  return (
    <>
     <Layout>
      <Header><HeaderComp /></Header>
      <Content><HomeComp /></Content>
    </Layout>
    </>
  );
};

export default App;
