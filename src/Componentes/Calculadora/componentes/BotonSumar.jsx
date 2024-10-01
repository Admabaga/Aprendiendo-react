import Button from 'react-bootstrap/Button';
export default function Sumar({primerDato, segundoDato, setResultado}){
    const sumar= () =>{
        setResultado(Number(primerDato) + Number(segundoDato))
    }
    return(
        <Button variant="outline-dark" onClick={dato=>sumar()}>Sumar</Button>
    )
}