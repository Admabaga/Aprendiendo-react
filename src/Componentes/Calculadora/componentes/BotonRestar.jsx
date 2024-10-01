import Button from 'react-bootstrap/Button';
export default function Restar({setResultado, primerDato, segundoDato}){
    const restar = ()=>{
        setResultado(primerDato - segundoDato)
    }
    return(
        <Button variant="outline-dark" onClick={dato=> restar()}>Restar</Button>
    )
}