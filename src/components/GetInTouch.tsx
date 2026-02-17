import React, { useState } from 'react';
import GetInTouchForm from './GetInTouchForm.js';
const GetInTouch = () => {
    return (
        <div className="w-80/100 font-titillium place-items-center py-10 xl:px-30 relative z-10 mx-auto lg:mx-50 2xl:mx-100">
            <div className="mx-auto">
                <div className="text-white text-center">
                    <h1 id="h1" className="mb-2" >GET IN TOUCH</h1>
                    <p id="h3">Have a project in mind or need more details? Fill in your information below and our team will get back to you shortly to discuss your requirements - whether it's a customized solution or product inquiry.</p>
                </div>
                <GetInTouchForm/>
            </div>
        </div>
    )
};

export default GetInTouch;