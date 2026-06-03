import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-2 mb-3'>Page Not Found</h1>
                <Link to="/" className='btn btn-primary p-2 mb-5' style={{width:"20%", margin:"0 auto", fontSize:"20px"}}>Go Home</Link>
            </div>
        </div>
     );
}

export default NotFound;