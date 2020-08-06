import React, { Component } from 'react';

function nav() {
 {
        return (
            <div style={{borderBottom: 'solid 2px black', borderRadius: 6 }} className="ui top fixed menu borderless">
                <div className='header item'>
                    <a className='nav-link hover' style={{padding: 5}} href='/'><h4 className='' style={{textShadow: '2px 6px 7px black, 4px -6px 7px black', color: 'black'}}></h4></a>
                </div>
                <a style={{color: 'white', textShadow: '0px 0px 1px #fff'}} className='nav-link' href='/' className='item'></a>
                <a style={{color: 'white', textShadow: '0px 0px 1px #fff'}} className='nav-link' href='/' className='item'></a>
                <a style={{color: 'white', textShadow: '0px 0px 1px #fff'}} className='nav-link' href='/generator' className='item'></a>
            </div>
                );
    }
}

export default nav;