import React from 'react';
import FeatureTitle from '../dumb/header/FeatureTitle/FeatureTitle';
import FeatureWrapper from '../dumb/header/FeatureWrapper/FeatureWrapper';
import SubscribeButton from '../dumb/header/forms/subscribe/SubscribeButton/SubscribeButton';
import SubscribeEmail from '../dumb/header/forms/subscribe/SubscribeEmail/SubscribeEmail';
import SubscribeWrapper from '../dumb/header/forms/subscribe/SubscribeWrapper/SubscribeWrapper';
import HeaderWrapper from '../dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from '../dumb/header/Logo/Logo';
import NavBar from '../dumb/header/NavBar/NavBar';
import SigninButton from '../dumb/header/SignInButton/SignInButton';


function HeaderComponent(){
    return(
        <>
        <HeaderWrapper>
            <NavBar class='navbar-home'>
                <Logo/>
                <SigninButton/>
            </NavBar>
            <FeatureWrapper class="feature-Wrapper-home">
                <FeatureTitle class="feature-title-home">
                      Unlimited Movies, TV Shows & more.
                </FeatureTitle>
            </FeatureWrapper>
            <SubscribeWrapper>
               <SubscribeEmail type="email"/>
               <SubscribeButton>Get Started</SubscribeButton>
            </SubscribeWrapper>
        </HeaderWrapper>
        
        </>
    )


}

export default HeaderComponent;