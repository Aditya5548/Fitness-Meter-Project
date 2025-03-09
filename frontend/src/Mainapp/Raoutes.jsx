import React from 'react';
import Navbar from '../Elements/Navbar';
import img6 from '../assets/pic7.png'

function Route(){
    return (
        <>
        <Navbar />
        <div className="row">
            <div className="col-md-10 mx-auto banner text-white">
                <div className="row mt-5">
                    <div className="col-md-6 mt-5">
                    <h1 className='fw-bold'>Blaze New Trails</h1>
                    </div>
                    <div className="col-md-4 mt-3 py-4">
                    Create, discover, and save your favorites 
                    — from your neighborhood to around the world 
                    with MapMyFitness Routes.
                    </div>
                </div>
                </div>

                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-md-7 mx-auto p-5">
                                <img src={img6} alt="" className='w-100'/>
                            </div>
                        </div>
                    </div>
                </div>
                


            
        </div>
        
        </>
    );
}

export default Route;
