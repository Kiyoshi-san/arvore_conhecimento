import firebase from "firebase";
import { Alert } from "react-native";

/* FAREMOS AQUI APENAS NAMED  EXPORT - export default ...*/

export const USUARIO_LOGIN_SUCESSO = "USUARIO_LOGIN_SUCESSO";
export const usuarioLoginSucesso = usuario => ({
    type: USUARIO_LOGIN_SUCESSO,
    usuario
});
/* const usuarioLoginSucesso = usuario => {
	return {
		type: USUARIO_LOGIN_SUCESSO,
		usuario
	}
}; */


export const USUARIO_LOGOUT = "USUARIO_LOGOUT";
export const usuarioLogout = () => ({
    type: USUARIO_LOGOUT,
});
    

/* 
2 ARROW FUNCTIONS
const tentaLogar = function() {
	return function(dispatch) {
		//...
	}
}
*/

/* FUNÇÃO COM CORPO - PQ TEM BASTANTE COISA */
export const tentaLogar = ({ email, senha }) => dispatch => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then(usuario => {
				const acao = usuarioLoginSucesso(usuario);
				// ASSIM QUE NÓS TEMOS O "dispatch", VOLTAMOS PRO "PaginaLogin" EM
				// - 			this.props.tentaLogar({ email, senha })
				// .then(() => {
				dispatch(acao);
				return usuario;
			})
			.catch(erro => {

				if(erro.code === "auth/user-not-found"){
					return new Promise((resolve, reject) => {
						//Alert - classe que o React Native //nos expoe
						//alert - metodo dentro da class //Alert
						//	- recebe 4 parametros
						//		- titulo,
						//		- mensagem,
						//		- Array de botões - recebem objetos - como text, onPress, Style
						//		- Objeto de configuração

						
						Alert.alert("Usuário não encontrado", "Deseja criar um novo cadastro, com as informações fornecidas?",
							// se tiver 2 botoes o primeiro botão será negativo e o segundo positivo
							[{
								text: "Não",
								onPress: () => resolve(), // QDO CLICA EM RESOLVE ELE VAI PARA O PROXIMO ".then" - QUE É NA "PaginaLogin.js" - ONDE ESTA O CODIGO: this.props.tentaLogar({ email, senha }) - ENTAO ATUALMENTE ELE JA ESTA ENCAMINHANDO PARA A PROXIMA PAGINA, MSM QUE O USUARIO NAO QUEIRA CRIAR UM NOVO USUARIO
								style: "cancel" // Apenas para o IOS
							},{
								text: "Sim",
								onPress: () => {
									firebase
										.auth()
										.createUserWithEmailAndPassword(email, senha)
										.then(
											// usuario => { usuarioLoginSucesso })
											// usuario => { resolve(usuario) })
											resolve)
										.catch(
											// erro => {
												// this.setState({
													// mensagem: this.getMensagemPeloCodigoDeErro(this.code)
												// })
											// }
											// OU
											// UTILIZANDO A FUNÇÃO ACIMA PARA DEIXAR O CODIGO MENOS POLUIDO
											// }
											// loginFracasso(erro)
											loginFracasso(reject)
										)
								}
							}],
							// Não permite cancelar - ou clicar fora do alert para sumi-la
							{ cancelable: false }
						);						
					});
				} else {

					// console.log("Usuario nao encontrado!", erro);
					// this.setState({ mensagem: "Nao foi possivel logar!" })
					// OU
					// USANDO A MSG DEFAULT DO FIREBASE

					// this.setState({ mensagem: erro.message });
					// OU
					// AO INVES DE TRAZER A MENSAGEM DE ERRO, QUE ESTA EM IGLES, É MAIS INTERESSANTE TRAZER O COIGO DO ERRO, PARA TRATAR NUM IF E TRAZER A MENSAGEM TRATADA PARA O PORTUGUES
					// PODERA VIR 2 TIPOS DE CODIGOS DE ERRO
					// - auth/wrong-password
					// - auth/user-not-found

					// this.setState({
						// mensagem: this.getMensagemPeloCodigoDeErro(erro.code)
					// });
					// OU
					// UTILIZANDO A FUNÇÃO ACIMA PARA DEIXAR O CODIGO MENOS POLUIDO
					// loginFracasso(erro) // OU
					// return new Promise((resolve, reject) => reject()) // OU
					return Promise.reject(erro);
					
				}
			})

}

