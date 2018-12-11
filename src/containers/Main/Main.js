import React, { Component } from 'react';
import {DivLogo, H1, H2, HR, IMG} from './Main.style';

class Main extends Component {
    render() {
        return (

              <div style={{marginTop: '57px'}} id="top">

                  <div>
                      <div className="container-fluid">
                          <div className="row">
                              <DivLogo className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
                                  <IMG className='image-responsive ' src={require('../../assets/Main/me.png')} alt="JF Logo" data-aos="zoom-in-down" data-aos-duration="1000"/>
                              </DivLogo>
                          </div>
                           <div className="row">
                              <H1 data-aos="fade-up" data-aos-delay="500">Brian Kipchumba</H1>
                          </div>
                          <HR data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="0"/>
                          <H2 data-aos="zoom-in-up" data-aos-delay="1200" data-aos-duration="1000" data-aos-offset="0">Tufts Senior Class of 2019</H2>
                      </div>
                  </div>

              </div>


        );
    }
}

export default Main;
