import Button from 'react-bootstrap/Button'

export default function BotonIMC({peso, estatura, setRespuesta}){
    const sobrepeso = ''
    const obesidad = ''
    
    const calcularIMC = () => {
        const imc = peso / (estatura ** 2)
        if (imc < 18.5){
            setRespuesta(<p><strong>Tu IMC esta en:</strong> Bajo peso debe ir al nutricionista.</p>)
        }else if (imc >= 18.5 && imc <= 24.9){
            setRespuesta(<p><strong>Tu IMC esta en:</strong> Normal</p>)
        }else if (imc >= 25.9 && imc <= 29.9 ){
            setRespuesta(<p><strong>Tu IMC esta en:</strong> Sobrepeso debe ir al nutricionista.</p>)
        }else{
            setRespuesta(<p><strong>Tu IMC esta en:</strong> Obesidad debe ir al nutricionista.</p>)
        }
    }

    return(
        <Button variant="outline-dark" onClick={dato=>calcularIMC()} className='botones'>Calcular IMC</Button>
    )
}