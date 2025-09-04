    import React from 'react';

function Home(props) {
  return (

    <div>
                
      <div style={{ border: '1px solid black', width: '200px' }}>
        <img style={{ width: '100%' }} src={props.p1i} alt="" />
        <p>{props.p1c}</p>
      </div>

      <div style={{ border: '1px solid black', width: '200px' }}>
        <img style={{ width: '100%' }} src={props.p2i} alt="" />
        <p>{props.p2c}</p>
      </div>

      <div style={{ border: '1px solid black', width: '200px' }}>
        <img style={{ width: '100%' }} src={props.p3i} alt="" />
        <p>{props.p3c}</p>
      </div>
    </div>
  
  );
}