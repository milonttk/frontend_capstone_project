import React from 'react';
import JumboComponent from '../component/dumb/jumbo/jumboComponent/JumboComponent';
import Seperator from '../component/dumb/seperator/Seperator';

import HeaderComponent from '../component/smart/HeaderComponent';
// import SigninButton from '../component/dumb/header/SignInButton/SignInButton';

function HomePage(){
    return(
        <>
        <HeaderComponent/>
        <Seperator/>
        <JumboComponent/>

        </>
    )
}

export default HomePage;