import React, { useState } from 'react';
import BreakingBad from '../BreakingBad/BreakingBad';

const Ref = () => {

  const [show, setShow] = useState(false);

  return(
    <>
      { show && <BreakingBad/> }

      <br/><br/>
      <button onClick={() => setShow(!show)}>Show / Hide</button>
    </>
  );
}

export default Ref;
