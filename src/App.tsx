import React, { FC } from 'react';
import './App.css';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
    </Layout>
  </div>
);

export default App;
