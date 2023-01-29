import React from 'react'
import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  return (
    <div>
        
       <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color='219, 63, 196'
      outerAlpha={0.4}
      innerScale={0.9}
      outerScale={7}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  )
}

export default Cursor;
