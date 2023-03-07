function validar() {
  var nome = document.getElementById("nome");
  var data = document.getElementById("date");
  var telefone = document.getElementById("telefone");
  var profissao = document.getElementById("Profissão");
  var errorNome = document.getElementById("error-nome");
  var errorData = document.getElementById("error-data");
  var errorTelefone = document.getElementById("error-telefone");
  var errorProfissao = document.getElementById("error-Profissão");
  var valid = true;

  if (nome.value === "") {
    errorNome.innerHTML = "O nome é obrigatório";
    valid = false;
  } else {
    errorNome.innerHTML = "";
  }

  if (data.value === "") {
    errorData.innerHTML = "A data é obrigatória";
    valid = false;
  } else {
    errorData.innerHTML = "";
  }

  if (telefone.value === "") {
    errorTelefone.innerHTML = "O telefone é obrigatório";
    valid = false;
  } else {
    errorTelefone.innerHTML = "";
  }

  if (profissao.value === "") {
    errorProfissao.innerHTML = "A profissão é obrigatória";
    valid = false;
  } else {
    errorProfissao.innerHTML = "";
  }

  return valid;
}
