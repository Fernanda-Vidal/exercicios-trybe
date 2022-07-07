import React, { createContext, useState } from 'react';

const Context = createContext();

function CarsProvider({children}) {
    const [cars, setCars] = useState({
      red: false, 
      blue: false,
      yellow: false,
    })
    
    const [signal, setSignal] = useState({ color: 'red' })
  
    const moveCar = (car, side) => {
      setCars({
        ...cars,
        [car]: side,
      })
    }

    const changeSignal = (signalColor) => {
        setSignal({ color: signalColor });
    }
    
    const context = { signal, cars, moveCar, changeSignal };
    
    return (
      <Context.Provider value={context}>
      {children}
    </Context.Provider>
    )
  }

export { Context, CarsProvider as Provider }