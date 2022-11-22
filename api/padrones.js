const getAllP = async (data) => {
  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/getAll', {
    method: "GET",
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

const getOneP = async (data) => {
  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/getOne' + new URLSearchParams({
    registro: data
  }), {
    method: "GET",
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

const generateFromExcelP = async (data) => {
  //  Relacionar el archivo con el nombre adecuado
  const file = new FormData()
  file.append("File", data)

  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/generateFromExcel', {
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

const updateP = async (data) => {

}

const restartP = async (data) => {
  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/restart' + new URLSearchParams({
    registro: data
  }), {
    method: "PUT",
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

const deleteP = async (data) => {
  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/deletePadron' + new URLSearchParams({
    registro: data
  }), {
    method: "DELETE",
    headers: {
      'Authorization': localStorage.getItem("token")
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
  const res = await fetch('http://localhost:3005/api/padrones/previsualizarDiplomaSegunPadron', {
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
  const res = await fetch('http://localhost:3005/api/padrones/previsualizarDiploma' + new URLSearchParams({
    registro: data
  }), {
    method: "POST",
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
  
  //  Ver respuesta
  const pdf = await res.blob()
  const url = URL.createObjectURL(pdf)
  console.log(url)
}

const generarDiplomaP = async (data) => {
  //  Petición a la API
  const res = await fetch('http://localhost:3005/api/padrones/generarDiploma' + new URLSearchParams({
    registro: data
  }), {
    method: "PUT",
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })

  //  Ver respuesta
  const response = await res.json()
  return response
}

export { getAllP, getOneP, generateFromExcelP, updateP, restartP, deleteP, previsualizarDiplomaSegunPadronP, previsualizarDiplomaP, generarDiplomaP }