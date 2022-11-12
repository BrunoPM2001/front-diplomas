const api_login = async (data) => {

  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/usuarios/login', {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  //  Validación de la respuesta para colocar el token o el aviso de datos incorrectos
  const result = await res.json()
  if (result.message == "Success") {
    localStorage.setItem("token", result.token)
    return true;
  } else {
    return false;
  }
  
}

export { api_login }