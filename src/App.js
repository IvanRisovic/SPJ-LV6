import React from "react";
import Zaglavlje from "./zaglavlje";
import Lista from "./TrgovinaLista";
import Artikl from "./TrgovinaArtikl";
import artikli from "./artikli.json";

function App()
{
  return(
    <>
        <Zaglavlje/>
        <div className="container">
            <Lista Artikl = {artikli}/>
        </div>
        
    </>
  )
}

export default App;
