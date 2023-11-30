
import React from 'react';
import { RouterProvider } from 
'react-router';
import router from 'router';
function App() {
  return (
    <div  style={{
        position: 'relative',
        overflow: 'hidden',
        overflowY: 'scroll',
        height: '100vh'
    }}>
         <RouterProvider router={router} />
    </div>
   
  );
}
export default App;
