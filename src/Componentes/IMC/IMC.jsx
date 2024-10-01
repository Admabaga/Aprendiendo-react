import { useState } from 'react'
import BotonIMC from './componentes/BotonIMC'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function IMC (){
    const [peso, setPeso] = useState('')
    const [estatura, setEstatura] = useState('')
    const [respuesta, setRespuesta] = useState('')

    return(
        <div className='container'>
            <h1 className="titulo">IMC</h1>
            <Card>
                <Card.Body>
                <Form.Floating className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Ingrese un dato"
                        value={peso}
                        onChange={dato=>setPeso(dato.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Ingrese peso:</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        type="number"
                        placeholder="Password"
                        value={estatura}
                        onChange={dato=>setEstatura(dato.target.value)}
                    />
                    <label htmlFor="floatingPasswordCustom">Ingrese estatura:</label>
                </Form.Floating>
                <Card>
                    <Card.Body>{respuesta}</Card.Body>

                </Card>
                </Card.Body>
                <BotonIMC 
                    peso={peso}
                    estatura={estatura}
                    setRespuesta={setRespuesta}
                    />
            </Card>

         </div>
    )
}