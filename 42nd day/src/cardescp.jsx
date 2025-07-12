
import { useState } from "react";
function Cardescp(){
    const [car,setCar]=useState({
        year:2025,
        make:"Lamborgini",
        model:"Urus"
        });
        function handlecaryear(event){
setCar(c=>({...c,year:event.target.value}));
        }
        function handlecarmake(event){
setCar(c=>({...c,make:event.target.value}));
        }
        function handlecarmodel(event){
setCar(c=>({...c,model:event.target.value}));
        }
    return(
        <div>
            <p>Mine Favourite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handlecaryear} /><br />
                <input type="text" value={car.make} onChange={handlecarmake} /><br />
                    <input type="text" value={car.model} onChange={handlecarmodel} /><br />
        </div>
    );
}
export default Cardescp