import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CartContext } from '../Context/CartContext'
import Swal from 'sweetalert2'
import { addDoc, collection, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Checkout = () => {


    const [formSent, setFormSent] = useState(false)
    const cartContext = useContext(CartContext);
    const { totalPrice, totalQuantity, cart, cleanCart } = cartContext;
    const [data, setData] = useState({})
    

    

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "sells");
        addDoc(ventasCollection, {
            data,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(),

        })
        .then(result => {
            cart.forEach(product => {
                actualizarStock(product);
              });
            cleanCart();
        })
    }
    

    const actualizarStock = (product) =>{
        const updateStock = doc(db, "products", product.id);
        updateDoc(updateStock,{stock:(product.product.stock - product.totalQuantity)});
      }

    return (
        <>
            <section className='checkoutView'>


                <Formik
                    initialValues={{
                        nombre: '',
                        correo: '',
                        apellido: '',
                        celular: '',
                        calle: '',
                        numero: '',
                    }}
                    validate={(valores) => {
                        let errores = {};
                        // Validacion correo
                        if (!valores.correo) { errores.correo = 'Por favor ingresa un correo electronico' }
                        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) { errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.' }
                        // Validacion nombre
                        if (!valores.nombre) { errores.nombre = 'Por favor ingresa un nombre' }
                        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) { errores.nombre = 'El nombre solo puede contener letras y espacios' }
                        // Validacion apellido
                        if (!valores.apellido) { errores.apellido = 'Por favor ingresa un apellido' }
                        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) { errores.apellido = 'El apellido solo puede contener letras y espacios' }
                        // Validacion celular
                        if (!valores.celular) { errores.celular = 'Por favor ingresa un Celular' }
                        else if (!/^[0-9]+$/.test(valores.celular)) { errores.celular = 'Introduzca un Celular válido.' }
                        // Validacion calle
                        if (!valores.calle) { errores.calle = 'Por favor ingresa una calle' }
                        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.calle)) { errores.calle = 'La calle solo puede contener letras y espacios' }
                        // Validacion numero
                        if (!valores.numero) { errores.numero = 'Por favor ingresa un numero de calle' }
                        else if (!/^[0-9]+$/.test(valores.numero)) { errores.numero = 'Introduzca un numero de calle válido.' }
                        return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                        if(actualizarStock > stock){
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No hay mas stock!',
                                
                              })
                        } 

                        resetForm()
                        setFormSent(true)
                        setData(valores)
                        
                    }}


                >
                    {({ errors }) => (
                        <Form className="form">
                            <div className='inputs'>
                                <label htmlFor="correo">Correo<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="correo"
                                    name="correo"
                                    className="enterValues"
                                />
                                <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label htmlFor="nombre">Nombre<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    className="enterValues"
                                />
                                <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label htmlFor="apellido">Apellido<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    className="enterValues"
                                />
                                <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label htmlFor="celular">Celular<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="celular"
                                    name="celular"
                                    className="enterValues"
                                />
                                <ErrorMessage name="celular" component={() => (<div className="error">{errors.celular}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label htmlFor="calle">Calle<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="calle"
                                    name="calle"
                                    className="enterValues"
                                />
                                <ErrorMessage name="calle" component={() => (<div className="error">{errors.calle}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label htmlFor="numero">Numero<span className='red'>*</span></label>
                                <Field
                                    type="text"
                                    id="numero"
                                    name="numero"
                                    className="enterValues"
                                />
                                <ErrorMessage name="numero" component={() => (<div className="error">{errors.numero}</div>)} />
                            </div>
                            <div className='inputs'>
                                <label >Aclaraciones</label>
                                <Field name="mensaje" as="textarea" className="enterValues" />
                            </div>
                            <button type="submit" className='checkOut' >Proceder al pago</button> 
                            
                        </Form>
                    )}



                </Formik>

                <section className="container-summary">

                    <article>
                        <div className="summary">

                            <ul>
                                <li>
                                    Total:
                                </li>
                                <hr />
                                <li>
                                    Items: {totalQuantity()}<span> ${totalPrice()} </span>
                                </li>
                                <li>
                                    Subtotal: <span>${totalPrice()}</span>
                                </li>
                                <li className='shipping'>
                                    Envio standard
                                </li>
                                <hr />

                                <li className="total">
                                    Total <span>${totalPrice()}</span>
                                </li>
                            </ul>
                        </div>
                    </article>


                </section>

            </section>
            {formSent &&
                <article className='credditCard'>

                    <Formik
                        initialValues={{
                            nombre: '',
                            numero: '',
                            expiracion: '',
                            dni: '',
                            seguridad: '',
                        }}

                        validate={(valores) => {
                            let errores = {};
                            // Validacion nombre
                            if (!valores.nombre) { errores.nombre = 'Por favor ingresa un nombre' }
                            else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) { errores.nombre = 'El nombre solo puede contener letras y espacios' }
                            // Validacion dni
                            if (!valores.dni) { errores.dni = 'Por favor ingresa un DNI' }
                            else if (!/^[0-9]+$/.test(valores.dni)) { errores.dni = 'Introduzca un documento válido.' }
                            // Validacion numero de tarjeta
                            if (!valores.numero) { errores.numero = 'Por favor ingresa un numero de tarjeta ' }
                            else if (!/^[0-9]+$/.test(valores.numero)) { errores.numero = 'Por favor ingresa un numero de tarjeta válido.' }
                            // Validacion expiracion
                            if (!valores.expiracion) { errores.expiracion = 'Por favor ingresa una fecha de expiracion' }
                            else if (!/^[0-9]+$/.test(valores.numero)) { errores.expiracion = 'Por favor ingresa una fecha de expiracion valida' }
                            // Validacion seguridad
                            if (!valores.seguridad) { errores.seguridad = 'Por favor ingresa el numero de seguridad' }
                            else if (!/^[0-9]+$/.test(valores.seguridad)) { errores.seguridad = 'Por favor ingresa un numero de seguridad válido.' }
                            return errores;
                        }}
                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            setFormSent(true);
                            Swal.fire(
                                'Gracias por tu compra!',
                                'A la brevedad te llegara un email!',
                                'success'
                            )
                            finalizarCompra()
                            setFormSent(false)
                            
                        }}
                    >
                        {({ errors }) => (
                            <Form className="cardForm">
                                <div className='inputs'>
                                    <label htmlFor="nombre">Nombre como figura en la tarjeta<span className='red'>*</span></label>
                                    <Field
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="enterValues"
                                    />
                                    <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                                </div>
                                <div className='inputs'>
                                    <label htmlFor="dni">Dni<span className='red'>*</span></label>
                                    <Field
                                        type="number"
                                        id="dni"
                                        name="dni"
                                        className="enterValues"
                                    />
                                    <ErrorMessage name="dni" component={() => (<div className="error">{errors.dni}</div>)} />
                                </div>
                                <div className='inputs'>
                                    <label htmlFor="numero">Numero de tarjeta<span className='red'>*</span></label>
                                    <Field
                                        type="text"
                                        id="numero"
                                        name="numero"
                                        className="enterValues"
                                    />

                                    <ErrorMessage name="numero" component={() => (<div className="error">{errors.numero}</div>)} />
                                </div>
                                <div className='inputs'>
                                    <label htmlFor="expiracion">Numero de expiracion<span className='red'>*</span></label>
                                    <Field
                                        type="text"
                                        id="expiracion"
                                        name="expiracion"
                                        className="enterValues"
                                    />
                                    <ErrorMessage name="expiracion" component={() => (<div className="error">{errors.expiracion}</div>)} />
                                </div>
                                <div className='inputs'>
                                    <label htmlFor="seguridad">Codigo de seguridad<span className='red'>*</span></label>
                                    <Field
                                        type="text"
                                        id="seguridad"
                                        name="seguridad"
                                        className="enterValues"
                                    />
                                    <ErrorMessage name="seguridad" component={() => (<div className="error">{errors.seguridad}</div>)} />
                                </div>

                                <button type="submit" className='buyBtn' >Finalizar compra</button>

                            </Form>
                        )}


                    </Formik>
                    
                </article>
            }

        </>
    );



};

export default Checkout