import React, { FC } from 'react';
import './App.css';
import AppHeader from './components/common/header';
import { Layout } from 'antd';

const App: FC = () => (
  <div className="App">
    <Layout className="layout">
      <AppHeader/>
        
    </Layout>
  </div>
);

export default App;
