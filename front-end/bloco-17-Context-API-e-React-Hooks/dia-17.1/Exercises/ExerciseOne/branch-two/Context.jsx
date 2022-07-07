import React, { createContext, useState } from "react";

const MyContext = createContext();

function CarsProvider ({ children }) {
    const [cars, setCars] = useState({
        red: false,
        blue: false,
        yellow: false,
    })

    function moveCar(car, side) {
        setCars({ ...cars,
        [car]: side,
        })
    }

    const [signal, setSignal] = useState({ signal: 'red' })

    function changeSignal(color) {
        setSignal(color)
    }

    const context = { cars, moveCar, signal, changeSignal }

    return (
        <MyContext.Provider value={ context}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, CarsProvider as Provider }