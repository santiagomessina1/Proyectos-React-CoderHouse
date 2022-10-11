import React, { useState } from "react"

const CheckoutForm = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [apellido, setApellido] = useState('')
    const [dni, setDni] = useState('')
    const [celular, setCelular] = useState('')
    const [calle, setCalle] = useState('')
    const [numero, setNumero] = useState('')

    const validation = (email) => {
       if(!email.includes('@')) return 'email incorrecto'
    }
    const errorMesagge = validation(email)
    
    return (
        <>
            <form action=""
                onSubmit={e => {
                    e.preventDefault()

                }}
            >

                <input type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <span>{errorMesagge}</span>



            </form>

        </>
    )
}

export default CheckoutForm