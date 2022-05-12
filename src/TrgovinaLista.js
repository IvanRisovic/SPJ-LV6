
import Artikl from "./TrgovinaArtikl";

function Lista(props)
{
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Naziv</th>
                        <th>Priozvođač</th>
                        <th>Model</th>
                        <th>Cijena</th>
                        <th>Količina</th>
                        <th>Kupi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Artikl.map((artikl) => {
                        return(
                            <Artikl id={artikl.id} naziv={artikl.naziv} proizvodac={artikl.proizvodac} model={artikl.model} cijena={artikl.cijena} kolicina={artikl.kolicina}/>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Lista;