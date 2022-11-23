const loginU = async ( data ) => {

  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/usuarios/login', {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  //  Validación de la respuesta para colocar el token o el aviso de datos incorrectos
  const result = await res.json()
  if (result.message == "Success") {
    localStorage.setItem("Token", result.token)
    return true;
  } else {
    return false;
  }
  
}

export { loginU }