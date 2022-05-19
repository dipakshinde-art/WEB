import React from 'react'
import Footers from './Footers';
import Headers from './Headers'

function Apple({apple}) {
  console.log(apple);
  return (
    <div>
   <div className="love apple" >
      <div className='headers'>
        <div>
          <Headers data={apple} />
        </div>
        <div>
          <img src={apple.app_url} alt="apple image" />
        </div>
      </div>

      <div>
        <Footers data={apple} />
      </div>
    </div>
    </div>
  )
}

export default Apple