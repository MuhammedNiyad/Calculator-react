import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from "./parent.jsx"

// function ErrorFallback({error, componentStack, resetErrorBoundsry }){
//   return (
//     <div role='alert' className='alert-div'>
//       <p>What are you doing?</p>
//       <pre>Refresh the Website...</pre>
//       <button className='refresh-btn' onClick={resetErrorBoundsry}>Refresh The Website</button>
//       <h6>why are looking?</h6>
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
    /* <ErrorBoundry ErrorFallbackComponent = {ErrorFallback}> */
      // <Parent/>
    /* </ErrorBoundry> */
  // </React.StrictMode>,
  // rootElement
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)