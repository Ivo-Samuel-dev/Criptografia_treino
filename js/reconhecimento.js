document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#envio_senha_auth").addEventListener("click", function processarSenha() {
        const senha_inicial = document.querySelector('[data-senha="true"]').value;
        const email = document.querySelector('#email').value;
        var input_email = document.getElementById("email");
        var input_senha = document.getElementById("senha");

        // Validação das informações - valor vazio
        if (!senha_inicial || !email) {
            if(!senha_inicial && !email){
            input_senha.placeholder = "Digite a Senha!";
            input_senha.classList.add("trocado");
            input_email.placeholder = "Digite o Email!";
            input_email.classList.add("trocado");
            return;
            }if (!email){
                input_email.placeholder = "Digite o Email!";
                input_email.classList.add("trocado");
                return;
            }else{
                input_senha.placeholder = "Digite a Senha!";
                input_senha.classList.add("trocado");
                return
            }
        }

        // Separação dos caracteres da senha
        const variaveis = {};
        const caracteres = senha_inicial.split('');
        caracteres.forEach((char, index) => {
            variaveis[`var${index + 1}`] = char;
        });


        // Encriptar os caracteres das variáveis
        for (let i = 0; i < caracteres.length; i++) {
            const chave = `var${i + 1}`;
            variaveis[chave] = encriptar(variaveis[chave]);
        }
        

        console.table(variaveis);
        document.querySelector("#Response").innerText = JSON.stringify(variaveis, null, 2);
        alert("A senha foi encriptografada com sucesso!");
        document.querySelector("#responde-name").innerText = email;
    });
});

function encriptar(caractere) {
    const charCode = caractere.charCodeAt(0); // Obtém o código ASCII do caractere
    return String.fromCharCode(charCode + 1);
}
