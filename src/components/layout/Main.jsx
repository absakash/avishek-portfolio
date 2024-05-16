import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarDrawer from '../navbar/NavbarDrawer';


const Main = () => {
      return (
            <div>
                
                 <NavbarDrawer></NavbarDrawer>
                  {/* <Outlet></Outlet> */}


               
            </div>
      );
};

export default Main;