import { useState } from 'react'
import './Landing.css'
import img from './img/google.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from './img/1.png'
import { Link } from 'react-router-dom'
import LoginWithEmailPassword from '../../Authentication/functions/loginWithEmailAndPassword'
import { useNavigate } from 'react-router-dom'

export const Landing =()=>{
    const navigate = useNavigate()

    const [input,setInput] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await LoginWithEmailPassword(input.email,input.password)
        navigate('/home')
    }
    return (
        <div className="fondo">
            <div className="custom-shape-divider-bottom-1669219916">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div>
                <img className='logo' src={logo} alt="logo" />
                <Container className='container'>
                    <Row className='two-col'>
                        <Col className="formulario">
                            <div id="contenedor">
                                <div id="central">
                                    <div id="login">
                                        <div className="titulo">
                                            Bienvenido
                                        </div>
                                        <form id="loginform">
                                            <input onChange={(e)=>handleInput(e)} type="text" name="email" placeholder="Email" value={input.email} />
                                            
                                            <input onChange={(e)=>handleInput(e)} type="password" placeholder="Contraseña" name="password" value={input.password} />
                                            
                                            <button type="submit" onClick={(e)=>handleSubmit(e)} title="Ingresar" name="Ingresar">Login</button>
                                        </form>
                                        <div className="pie-form">
                                            <Link className='link'>¿Perdiste tu contraseña?</Link><br />
                                            <Link to="/register" className='link'>¿No tienes Cuenta? Registrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col className='text'>
                            <h1 className='title'>Encuentra un profesor particular</h1>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, corrupti? Debitis assumenda odio ex itaque maxime quas cumque minus nobis. Exercitationem soluta et distinctio unde incidunt delectus laborum error ratione.</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

