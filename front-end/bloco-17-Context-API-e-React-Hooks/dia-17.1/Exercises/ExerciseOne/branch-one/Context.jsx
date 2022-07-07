import React, { createContext, useState } from "react";


const MyContext = createContext();

function CarsProvider({ children }) {
    const [cars, setCars] = useState({
        red: false,
        blue: false, 
        yellow: false,
    })

function moveCar(car, side) {
    setCars({
        ...cars,
        [car]: side,
    })
}

const context = { cars, moveCar }

return (
<MyContext.Provider value={ context }>
{children}
</MyContext.Provider>
    )    
}

export { MyContext, CarsProvider as Provider }