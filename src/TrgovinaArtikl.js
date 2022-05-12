function Alert()
{
    alert("Kupljeno")
}
function AlertNot()
{
    alert("Upit poslan")
}

function DodajUKosaru()
{
    return(
        <>
            <button className="btn btn-success" onClick={Alert}>Dodaj</button>
        </>
    )
}

function PosaljiUpit()
{
    return(
        <>
            <button className="btn btn-danger" onClick={AlertNot}>Pošalji upit</button>
        </>
    )
}

function Artikl(props)
{
    return(
        <>
            <tr key={props.id}>
                <td>{props.id}</td>
                <td>{props.naziv}</td>
                <td>{props.proizvodac}</td>
                <td>{props.model}</td>
                <td>{props.cijena}</td>
                <td>{props.kolicina}</td>
                <td>{(props.kolicina > 0) ? <DodajUKosaru/> : <PosaljiUpit/>}</td>
            </tr>
        </>
    )
}

export default Artikl;