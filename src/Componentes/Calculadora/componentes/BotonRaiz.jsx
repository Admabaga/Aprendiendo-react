import Button from 'react-bootstrap/Button';
export default function Raiz({primerDato, segundoDato, setResultado}){
    const raiz = () => {
        setResultado(Math.pow(primerDato,1/segundoDato))
    }
    return(
        <Button variant="outline-dark" onClick={dato=>raiz()}>Obtener raiz</Button>
    )
}