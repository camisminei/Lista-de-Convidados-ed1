class Gerenciador{

    constructor(){
        this.nome = ""
        this.idade = ""
        this.sexo = "" 
        this.contador = 0
        this.idEditar = null
    }

    lerDados(){
        this.nome = document.querySelector("#nomeConvidado").value 
        this.idade = document.querySelector("#idadeConvidado").value 
        this.sexo = document.querySelector('[type = radio]:checked')
    }

    validarCampos(){
        if(this.nome != "" && this.idade != "" && this.sexo != null){
            return true

        }else{
            return false
        }
    }

    inserirLinha(){

        let tabela = document.querySelector("#lista")

        let linha = tabela.insertRow()
        let celulaNome = linha.insertCell(0)
        let celulaIdade = linha.insertCell(1)
        let celulaSexo = linha.insertCell(2)
        let celulaEdit = linha.insertCell(3)
        let celulaExcluir = linha.insertCell(4)

        linha.id = "linha-" + this.contador
        this.contador++

        let imgEdit = document.createElement('img')
        let imgExcluir = document.createElement('img')

        imgEdit.setAttribute('src','img/edit.svg')
        imgExcluir.setAttribute('src','img/delete-button.svg')

        imgExcluir.setAttribute('onclick',`gerenciar.excluirCampo('${linha.id}')`)
        imgEdit.setAttribute('onclick',`gerenciar.editarCampo('${linha.id}')`)


        celulaNome.innerText = this.nome
        celulaIdade.innerText = this.idade
        celulaSexo.innerText = this.sexo.value 

        celulaEdit.appendChild(imgEdit)
        celulaExcluir.appendChild(imgExcluir)
    }

    salvar(){
        this.lerDados()
        if(this.validarCampos != null){

            if(this.idEditar == null){
                this.inserirLinha()

            }else{
                
                document.getElementById(this.idEditar).cells[0].innerText = this.nome
                document.getElementById(this.idEditar).cells[1].innerText = this.idade
                document.getElementById(this.idEditar).cells[2].innerText = this.sexo.value

                this.idEditar = null
            }

            this.limparCampo()
            
        }else{
            alert("Preencher todos os campos")
        }

        
    }

    limparCampo(){
        this.nome = document.querySelector("#nomeConvidado").value = ""
        this.idade = document.querySelector("#idadeConvidado").value = "" 

        if(this.sexo = document.querySelector('[type = radio]:checked').checked != null){
            this.sexo = document.querySelector('[type = radio]:checked').checked = false
        }
    }

    editarCampo(id){

        document.querySelector("#nomeConvidado").value = document.getElementById(id).children[0].textContent
        document.querySelector("#idadeConvidado").value = document.getElementById(id).children[1].textContent

        if(document.getElementById(id).children[2].textContent == 'F'){
            document.getElementById('fem').checked = true

        }else{
            document.getElementById('masc').checked = true
        }

        this.idEditar = id

    }

    excluirCampo(id){
        if(confirm("Tem ctz que deseja excluir este campo?")){
            document.getElementById(id).remove()
        }
    }
}

let gerenciar = new Gerenciador()