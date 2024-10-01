import Button from 'react-bootstrap/Button';
export default function Dividir({primerDato, segundoDato, setResultado}){
    const dividir = ()=>{
        setResultado(primerDato / segundoDato)
    }
    return(
        <Button variant="outline-dark" onClick={dato=>dividir()}>Dividir</Button>
    )
}