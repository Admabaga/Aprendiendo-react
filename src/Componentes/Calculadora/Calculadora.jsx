import { useState } from "react"
import BotonDividir from "../Calculadora/componentes/BotonDivir"
import BotonMultiplicar from "../Calculadora/componentes/BotonMultiplicar"
import BotonSumar from "../Calculadora/componentes/BotonSumar"
import BotonRestar from "../Calculadora/componentes/BotonRestar"
import BotonRaiz from "../Calculadora/componentes/BotonRaiz"
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default function Calculadora(){
    const [primerDato, setPrimerDato] = useState('')
    const [segundoDato, setSegundoDato] = useState('')
    const [resultado, setResultado] = useState('')
    const [operacion, setOperacion] = useState('')

    return(
        <div className="container">
            <h1 className="titulo">Calculadora</h1>
            <div className="data">
            <Form.Floating className="mb-3">
                <Form.Control
                    type="number"
                    placeholder="Ingrese un dato"
                    value={primerDato}
                    onChange={dato=>setPrimerDato(dato.target.value)}
                />
                <label htmlFor="floatingInputCustom">Ingrese un dato:</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                    type="number"
                    placeholder="Password"
                    value={segundoDato}
                    onChange={dato=>setSegundoDato(dato.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Ingrese un dato:</label>
            </Form.Floating>
            <Card>
                <Card.Body>{"El resultado es: "+resultado}</Card.Body>
            </Card>

            </div>
            <div className="botones">
                <BotonSumar
                    primerDato={primerDato}
                    segundoDato={segundoDato}
                    setOperacion={setOperacion}
                    setResultado={setResultado}
                 />
                <BotonRestar
                    primerDato={primerDato}
                    segundoDato={segundoDato}
                    setOperacion={setOperacion}
                    setResultado={setResultado}
                />
                <BotonMultiplicar
                    primerDato={primerDato}
                    segundoDato={segundoDato}
                    setOperacion={setOperacion}
                    setResultado={setResultado}
                />
                <BotonDividir
                    primerDato={primerDato}
                    segundoDato={segundoDato}
                    setOperacion={setOperacion}
                    setResultado={setResultado}
                />
                <BotonRaiz
                    primerDato={primerDato}
                    segundoDato={segundoDato}
                    setOperacion={setOperacion}
                    setResultado={setResultado}
                />
            </div>

            

        </div>
    )
}