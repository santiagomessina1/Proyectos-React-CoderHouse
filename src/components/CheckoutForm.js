import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const { totalPrice, totalQuantity, cart, cleanCart } = cartContext;
  const [data, setData] = useState({});
  const [orderNumber, setOrderNumber] = useState("");

  const handleOnSubmit = async (e) => {
    Swal.fire("Compra exitosa!", "Gracias por confiar en nosotros!", "success");
    const docRef = await addDoc(collection(db, "orders"), {
      buyer: data,
      items: cart.map(({ title, id, price }) => {
        return { title, id, price };
      }),
      date: serverTimestamp(),
      total: totalPrice(),
    });

    setOrderNumber(docRef.id);
    cleanCart();
  };
  const handleOnInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!orderNumber && (
        <section className="checkoutView">
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              celular: "",
              calle: "",
            }}
            validate={(valores) => {
              let errores = {};
              // Validacion correo
              if (!valores.correo) {
                errores.correo = "Por favor ingresa un correo electronico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
              }
              // Validacion nombre
              if (!valores.nombre) {
                errores.nombre = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras y espacios";
              }
              // Validacion celular
              if (!valores.celular) {
                errores.celular = "Por favor ingresa un Celular";
              } else if (!/^[0-9]+$/.test(valores.celular)) {
                errores.celular = "Introduzca un Celular válido.";
              }
              // Validacion calle
              if (!valores.calle) {
                errores.calle = "Por favor ingresa una calle";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.calle)) {
                errores.calle =
                  "La calle solo puede contener letras y espacios";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              handleOnSubmit();
              resetForm();
              setData(valores);
            }}
          >
            {({ errors }) => (
              <Form className="form">
                <div className="inputs">
                  <label htmlFor="correo">
                    Correo<span className="red">*</span>
                  </label>
                  <Field
                    onInput={handleOnInput}
                    type="text"
                    id="correo"
                    name="correo"
                    className="enterValues"
                  />
                  <ErrorMessage
                    name="correo"
                    component={() => (
                      <div className="error">{errors.correo}</div>
                    )}
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="nombre">
                    Nombre y apellido<span className="red">*</span>
                  </label>
                  <Field
                    onInput={handleOnInput}
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="enterValues"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </div>

                <div className="inputs">
                  <label htmlFor="celular">
                    Celular<span className="red">*</span>
                  </label>
                  <Field
                    onInput={handleOnInput}
                    type="text"
                    id="celular"
                    name="celular"
                    className="enterValues"
                  />
                  <ErrorMessage
                    name="celular"
                    component={() => (
                      <div className="error">{errors.celular}</div>
                    )}
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="calle">
                    Calle<span className="red">*</span>
                  </label>
                  <Field
                    onInput={handleOnInput}
                    type="text"
                    id="calle"
                    name="calle"
                    className="enterValues"
                  />
                  <ErrorMessage
                    name="calle"
                    component={() => (
                      <div className="error">{errors.calle}</div>
                    )}
                  />
                </div>

                <div className="inputs">
                  <label>Aclaraciones</label>
                  <Field
                    name="mensaje"
                    as="textarea"
                    className="enterValues"
                    onInput={handleOnInput}
                  />
                </div>
                <button
                  type="submit"
                  className="checkOut"
                  disabled={totalPrice() === 0}
                >
                  Proceder al pago
                </button>
              </Form>
            )}
          </Formik>

          <section className="container-summary">
            <article>
              <div className="summary">
                <ul>
                  <li>Total:</li>
                  <hr />
                  <li>
                    Items: {totalQuantity()}
                    <span> ${totalPrice()} </span>
                  </li>
                  <li>
                    Subtotal: <span>${totalPrice()}</span>
                  </li>
                  <li className="shipping">Envio standard</li>
                  <hr />

                  <li className="total">
                    Total <span>${totalPrice()}</span>
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </section>
      )}
      {orderNumber && (
        <>
          <section className="orderSucces">
            <div className="succes">
              <h1>¡Gracias por su compra!</h1>
            </div>

            <div className="orderNumber">
              <br />
              <h2>
                Su número de compra es:
                <span> {orderNumber}</span>
              </h2>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Checkout;
