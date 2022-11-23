const getAllP = async () => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/getAll', {
    method: "GET",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response.padrones
}

const getOneP = async (data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/getOne?' + new URLSearchParams({
    registro: data
  }), {
    method: "GET",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response.padron
}

const generateFromExcelP = async (data) => {
  //  Relacionar el archivo con el nombre adecuado
  const file = new FormData()
  file.append("File", data)

  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/generateFromExcel', {
    method: "POST",
    headers: {
      'Authorization': localStorage.getItem("Token")
    },
    body: file
  })

  //  Validación de la respuesta
  const result = await res.json()
  return result
}

const updateP = async (reg, data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/update?' + new URLSearchParams({
    registro: reg
  }), {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem("Token")
    },
    body: JSON.stringify(data)
  })
}

const restartP = async (data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/restart?' + new URLSearchParams({
    registro: data
  }), {
    method: "PUT",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

const deleteP = async (data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/deletePadron?' + new URLSearchParams({
    registro: data
  }), {
    method: "DELETE",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

const previsualizarDiplomaSegunPadronP = async (data) => {
  //  Relacionar el archivo con el nombre adecuado
  const file = new FormData()
  file.append("File", data)

  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/previsualizarDiplomaSegunPadron', {
    method: "POST",
    headers: {
      'Authorization': localStorage.getItem("Token")
    },
    body: file
  })

  //  Ver respuesta
  const pdf = await res.blob()
  const url = URL.createObjectURL(pdf)
  window.open(url)
}

const previsualizarDiplomaP = async (data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/previsualizarDiploma?' + new URLSearchParams({
    registro: data
  }), {
    method: "POST",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })
  
  //  Ver respuesta
  const pdf = await res.blob()
  const url = URL.createObjectURL(pdf)
  window.open(url)
}

const generarDiplomaP = async (data) => {
  //  Petición a la API
  const res = await fetch('https://api-padrones-diplomas.onrender.com/api/padrones/generarDiploma?' + new URLSearchParams({
    registro: data
  }), {
    method: "PUT",
    headers: {
      'Authorization': localStorage.getItem("Token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

export { getAllP, getOneP, generateFromExcelP, updateP, restartP, deleteP, previsualizarDiplomaSegunPadronP, previsualizarDiplomaP, generarDiplomaP }