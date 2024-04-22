// import React from 'react';
import $ from 'jquery';

export default function Loder() {

    function loadingReady() {

        $(document).ready(() => {
            $('.loder').fadeOut(2000);
        });
    }

    loadingReady();

    return (
        <div className="loder">
            <div className='spinner_con'>
                <div className="spinner"></div>
            </div>
        </div>
    );
}
