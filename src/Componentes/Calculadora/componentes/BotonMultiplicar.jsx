import Button from 'react-bootstrap/Button';
export default function Multiplicar({primerDato, segundoDato, setResultado}){
    const multiplicar =()=>{
        setResultado(primerDato * segundoDato)
    }
    return(
        <Button variant="outline-dark" onClick={dato=>multiplicar()}>Multiplicar</Button>
    )
}