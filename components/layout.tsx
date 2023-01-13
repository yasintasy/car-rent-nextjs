import React from 'react';
import MainMenu from './main-menu';

interface Props {

}

const Layout = (props: Props) => {
    return (
        <div className="flex flex-row w-full h-full bg-white font-inter">
            <MainMenu />

            {props.children}
        </div>
    );
};

export default Layout;