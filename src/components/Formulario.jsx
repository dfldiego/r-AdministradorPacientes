import React, { Fragment, useState } from 'react'

const Formulario = () => {

    // Crear state de Citas.
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const handleChange = () => {
        console.log('Escribiendo...');
    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
}

export default Formulario;