import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	Button,
    Image,
	ActivityIndicator, /*Simbolo do Loading*/
	Alert,
	StatusBar,

} from "react-native";

import LinhaFormulario from "../components/LinhaFormulario";
import firebase from "firebase";

/* IMPORTANDO A FUNÇÃO DO ACTION CREATOR "tentaLogar()" */
import { tentaLogar } from "../actions";

import { connect } from "react-redux";

/* MANDANDO O "export default" LA PRA BAIXO PARA COLOCAR O COMPONENTE "connect()" */
/* export default  */
class PaginaLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			senha: "",
			estaCarregando: false,
			mensagem: "",
		}
	}

	/*componentDidMount - é um método LifeCycle do React, portanto será acionado assim que o componente for montado - equivalente ao onReady do JQuery*/
	componentDidMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyDkNY25plEQnLw-aRRQLHIILVxpFrJG-5k",
			authDomain: "series-f40c5.firebaseapp.com",
			databaseURL: "https://series-f40c5.firebaseio.com",
			projectId: "series-f40c5",
			storageBucket: "series-f40c5.appspot.com",
			messagingSenderId: "227328473985"
		};
		firebase.initializeApp(config);

	}

	// fn_atualiza_valor_simult(valor) {
		// this.setState ({
			// email: valor,
		// })
	// }
	// fn_atualiza_senha_simult(senha) {
		// this.setState ({ 		senha: senha
		// })
	// }
	// OU

	fnMudouInput(referencia, valor) {

		//	const newState = {};

		//	/*referencia == "email" ? this.setState({
		//		email: valor,
		//	});*/

		//	/*busca a propriedade em tempo de execução - só qdo recebe o valor da variável*/

		//	// o objeto newState vai buscar uma propriedade cujo valor é igual a referencia recebida
		// newState[referencia] = value;
		//	this.setState(newState);

		//OU

		this.setState({
			[referencia]: valor
		});
	}


	tentaLogarLocal() {
		this.setState({ estaCarregando: true, mensagem: "" });
		const { email, senha } = this.state;
       //Facilitador do login - excluir em prod
		this.props.navigation.replace("PaginaCurriculo");
		return;

		/* COLANDO TODO ESSE CODIGO COMENTADO EM "userActions.js"
 		// CRIANDO FUNÇÕES PARA O LOGIN
		const loginSucesso = usuario => {
			this.setState({ mensagem: "Sucesso!" });

			// LEMBRANDO QUE O OBJETO "navigation É DA LIB IMPORTADA "react-navigation, EM QUE ELE IMPORTA AS PROPS
			this.props.navigation.navigate("paginaPrincipal");
		}
		const loginFracasso = erro => {
			this.setState({ mensagem: this.getMensagemPeloCodigoDeErro(erro.code) });
		}



		firebase
			.auth()
			// .signInWithEmailAndPassword("teste@teste.com","12341234")
			.signInWithEmailAndPassword(email, senha)
			.then(//usuario => {
				// console.log("Usuario autenticado!", usuario);
				// this.setState({ mensagem: "Sucesso!" });
				// OU
				// UTILIZANDO A FUNÇÃO ACIMA PARA DEIXAR O CODIGO MENOS POLUIDO
				// }
				loginSucesso
			)
			.catch(erro => {

				if(erro.code === "auth/user-not-found"){
					//Alert - classe que o React Native //nos expoe
					//alert - metodo dentro da class //Alert
					//	- recebe 4 parametros
					//		- titulo,
					//		- mensagem,
					//		- Array de botões - recebem objetos - como text, onPress, Style
					//		- Objeto de configuração

					
					Alert.alert("Usuário não encontrado", "Deseja criar um novo cadastro, com as informações fornecidas*-?",
						// se tiver 2 botoes o primeiro botão será negativo e o segundo positivo
						[{
							text: "Não",
							onPress: () => {
								console.log("Usuario não quer criar uma conta");
								style: "cancel" // Apenas para o IOS
							}
						},{
							text: "Sim",
							onPress: () => {
								firebase
									.auth()
									.createUserWithEmailAndPassword(email, senha)
									.then(//usuario => {
										// console.log("Usuario autenticado!", usuario);
										// this.setState({ mensagem: "Sucesso!" });
										// OU
										// UTILIZANDO A FUNÇÃO ACIMA PARA DEIXAR O CODIGO MENOS POLUIDO
										// }
										loginSucesso
									)
									.catch(
										// erro => {
											// this.setState({
												// mensagem: this.getMensagemPeloCodigoDeErro(this.code)
											// })
										// }
										// OU
										// UTILIZANDO A FUNÇÃO ACIMA PARA DEIXAR O CODIGO MENOS POLUIDO
										// }
										loginFracasso(erro)
									)
							}
						}],
						// Não permite cancelar - ou clicar fora do alert para sumi-la
						{ cancelable: false }
						);
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
					loginFracasso(erro)
				}
			})
			.then(() => this.setState({ estaCarregando: false })); */

			/* ENVIANDO ATRAVES DA PROPS O OBJETO "{ email, senha }" PARA A ACTION "actions/userAction.js" */
			this.props.tentaLogar({ email, senha })
				// .then(() => {
				.then(usuario => {
					if (usuario) {
						// this.props.navigation.navigate("PaginaPrincipal"); // O "replace" APAGA O HISTORICO DE NAVEGAÇÃO, ENTAO NAO TERA A "SETINHA" PARA VOLTAR A PAGINA
						return this.props.navigation.replace("PaginaCurriculo");
					}

					this.setState({
						estaCarregando: false,
						mensagem: ""
					})
				})
				.catch(erro => {
					// console.log("caiu no catch", erro.code);
					this.setState({ 
						estaCarregando: false,
						// DEVOLVE A MSG AMIGAVEL
						mensagem: this.getMensagemPeloCodigoDeErro(erro.code)
					});
		const { email, senha } = this.state;
				});
	}

	getMensagemPeloCodigoDeErro(codigoErro) {
		switch (codigoErro) {
			case "auth/wrong-password":
				return "Senha incorreta";
			case "auth/user-not-found":
				return "Usuario nao encontrado!";
			case "auth/invalid-email":
				return "Email Invalido!";
			default:
				return "Erro desconhecido";
		}
	}

	renderizarBotao() {
		if (this.state.estaCarregando)
			return <ActivityIndicator />;
		return (
			<Button 
				style={{marginTop: 55}}
				title="Entrar" 
				onPress={() => this.tentaLogarLocal()}
				/>
		);
	}

	renderizarMensagem() {
		const { mensagem } = this.state;

		if(!mensagem) return null;

		return (
			<View>
				<Text>
					{ mensagem }
				</Text>
			</View>
		)
	}

	render(){
		return(
			<View style={estilo.container}>
			<StatusBar hidden={true} />
				<View>
					<Image source = {require('../img/know_hat.png')} style={estilo.centro} />
				</View>
				<View>
					<Text style={estilo.textoknow}>Knowhow</Text>
				</View>
				<View style={{flex: 1, justifyContent: "center"}} >
				<LinhaFormulario primeiro>
					<TextInput 
						style={estilo.input}
						placeholder="usuario@text.com"
						value={this.state.email}

		    			/*função de callback*/
		    			/*onChangeText = { valor => this.fn_atualiza_valor_simult(valor)}
						OU
		    			*/
						onChangeText = { valor => this.fnMudouInput("email", valor) }
					/>
				</LinhaFormulario>
				<LinhaFormulario ultimo>
					<TextInput 
						style={estilo.input}
						placeholder="******"
					/*secureTextEntry={false} - por default é false - basta por - secureTextEntry*/
					secureTextEntry={true}
					value = {this.state.senha}

					/*função de callback*/
					/*onChangeText = { valor => this.fn_atualiza_senha_simult(valor)}
					OU
					*/
					onChangeText = { valor => this.fnMudouInput("senha", valor)}
					/>
				</LinhaFormulario>

				{ this.renderizarBotao() }

			</View>	
				{ this.renderizarMensagem() }
			</View>
		)
	}
}

const estilo = StyleSheet.create ({
	container: {
		height: "100%",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#fff",
		justifyContent: "space-evenly"
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	centro: {
		marginTop: 150,
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	textoknow: {
		fontSize: 30,
		fontWeight: "bold",
		marginRight: 'auto',
		marginLeft: 'auto'
	}
});

/* export default connect(mapStateToProps, mapDispatchToProps || { actionCreator })(PaginaLogin);*/
// tentaLogar - RECEBENDO DO "import { tentaLogar } from "../actions";"
export default connect(null, { tentaLogar })(PaginaLogin);
