import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container ">
        <div className="title  justify-content-center text-center">
          <h1>Counter App</h1>
        </div>
        <div className="row">
          <div className="col-md-8 ">
            <div className="btns">
              <div className="btn-increase my-5">
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => setCounter(counter + 1)}
                >
                  Increase by 1
                </button>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setCounter(counter + 5)}
                >
                  Increase by 5
                </button>
                <button
                  className="btn btn-primary mr-3"
                  onClick={() => setCounter(counter + 10)}
                >
                  Increase by 10
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setCounter(counter + 100)}
                >
                  Increase by 100
                </button>
              </div>
              <div className="btn-decrease">
                <button
                  className="btn btn-danger"
                  onClick={() => setCounter(counter - 1)}
                >
                  Decrease by 1
                </button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={() => setCounter(counter - 5)}
                >
                  Decrease by 5
                </button>
                <button
                  className="btn btn-danger mr-3"
                  onClick={() => setCounter(counter - 10)}
                >
                  Decrease by 10
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setCounter(counter - 100)}
                >
                  Decrease by 100
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5 justify-content-center text-center">
            <h3>Current Data</h3>
            <h5 className="mt-5">{counter}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
