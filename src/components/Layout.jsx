import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';
import { Header } from '../header/Header';

function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <SideBar />
      <div className='flex-1'>
        <Header />
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );

};

export { Layout };