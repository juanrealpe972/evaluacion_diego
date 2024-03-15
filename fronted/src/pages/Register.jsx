import React, { useRef } from "react";
import axios from "axios";

function Register() {
  const cedula = useRef(null);
  const nombre = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const descripcion = useRef(null);
  const telefono = useRef(null);
  const fechanac = useRef(null);
  const rol = useRef(null);

  const URL = "http://localhost:4001/usuario/registrar";

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const dates = {
        pk_cedula_user: parseInt(cedula.current.value),
        nombre_user: nombre.current.value,
        email_user: email.current.value,
        password_user: password.current.value,
        descripcion_user: descripcion.current.value,
        telefono_user: telefono.current.value,
        fecha_nacimiento_user: fechanac.current.value,
        rol_user: rol.current.value,
      };
      await axios
        .post(URL, dates)
        .then((response) => {
          if (response.status === 200) {
            alert("Usuario registrado correctamente");
          } else if (response.status === 404) {
            alert("Usuario registrado correctamente");
          } else {
            alert("Error al insertar el usuario");
          }
        })
        .catch(() => alert("Error al registrar"));
    } catch (error) {
      alert("Error en el sistema" + error);
    }
  };

  return (
    <div className="flex flex-row w-2/6 bg-slate-400 p-6 h-auto items-center">
      <form
        method="post"
        onSubmit={onSubmit}
        className="flex flex-col justify-center gap-y-4"
      >
        <h2 className="text-center">Registro</h2>
        <input
          type="text"
          id="pk_cedula_user"
          required={true}
          name="pk_cedula_user"
          placeholder="Cedula"
          ref={cedula}
        />
        <input
          type="text"
          id="nombre_user"
          required={true}
          name="nombre_user"
          placeholder="Nombre"
          ref={nombre}
        />
        <input
          type="email"
          id="email_user"
          required={true}
          name="email_user"
          placeholder="Email "
          ref={email}
        />
        <input
          type="password"
          id="password_user"
          required={true}
          name="password_user"
          placeholder="Contraseña"
          ref={password}
        />
        <input
          type="text"
          id="descripcion_user"
          required={true}
          name="descripcion_user"
          placeholder="Descripcion"
          ref={descripcion}
        />
        <input
          type="text"
          required={true}
          id="telefono_user"
          name="telefono_user"
          placeholder="Telefono"
          ref={telefono}
        />
        <input
          type="date"
          id="fecha_nacimiento_user"
          required={true}
          name="fecha_nacimiento_user"
          placeholder="fecha_nacimiento"
          ref={fechanac}
        />
        <select type="text" id="rol" name="rol" placeholder="Rol" ref={rol}>
          <option value="vendedor">Vendedor</option>
          <option value="comprador">Comprador</option>
        </select>
        <button type="submit" className="bg-slate-600 p-2">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
