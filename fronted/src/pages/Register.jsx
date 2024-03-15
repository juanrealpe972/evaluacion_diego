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

  const onSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const dates = {
        cedula: parseInt(cedula.current.value),
        nombre: nombre.current.value,
        email: email.current.value,
        password: password.current.value,
        descripcion: descripcion.current.value,
        telefono: telefono.current.value,
        fechanac: fechanac.current.value,
        rol: rol.current.value,
      };
      await axios
        .post("http://localhost:4000/usuario/registrar", dates)
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
          id="cedula"
          required={true}
          name="cedula"
          placeholder="Cedula"
          ref={cedula}
        />
        <input
          type="text"
          id="nombre"
          required={true}
          name="nombre"
          placeholder="Nombre"
          ref={nombre}
        />
        <input
          type="email"
          id="email"
          required={true}
          name="email"
          placeholder="Email "
          ref={email}
        />
        <input
          type="password"
          id="password"
          required={true}
          name="password"
          placeholder="Contraseña"
          ref={password}
        />
        <input
          type="text"
          id="descripcion"
          required={true}
          name="descripcion"
          placeholder="Descripcion"
          ref={descripcion}
        />
        <input
          type="text"
          required={true}
          id="telefono"
          name="telefono"
          placeholder="Telefono"
          ref={telefono}
        />
        <input
          type="date"
          id="fechanac"
          required={true}
          name="fechanac"
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
