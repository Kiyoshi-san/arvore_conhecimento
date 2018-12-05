import React from "react";
import { StyleSheet, View, Text } from "react-native";


// Não será necessário criar um statefull component, pois terá valores estáticos, não precisará dos estados
/*class Cabecalho extends React.Component {
	render(){
		return (

		);
	}
}*/

/*SENDO CRIADO UM OBJETO DE ESTILO*/
/*const estilo = {
	estiloContainer: {
		marginTop: 25,
		backgroundColor: "#BFEBFF",

		alignItems: "center",
		justifyContent: "center"
	},
	estiloTexto: {
		fontSize: 50,
		color: "#fff"
	}

}*/

/*AO INVES DE USARMOS O OBJETO CRIADO ACIMA, PODEMOS UTILIZAR O OBJETO STYLESHEET, IMPORTANDO ELE DA BIBLIOTECA DO REACT NATIVE
- import { StyleSheet, View, Text } from "react-native";

PODEMOS PASSAR ESSE OBJETO CRIADO DENTRO DO METODO CREATE DO StyleSheet - Ele ajuda com algumas coisas, como dar mensagem de erro
*/
const estilo = StyleSheet.create({
	estiloContainer: {
		marginTop: 24,
		backgroundColor: "#BFB0FF",

		alignItems: "center",
		justifyContent: "center"
	},
	estiloTexto: {
		fontSize: 25,
		color: "#fff",
		alignSelf: "center"
	}

});


// utilizaremos então o stateless component
const Cabecalho = (props) => (
	<View style={estilo.estiloContainer}>
	<StatusBar hidden={route.statusBarHidden}/>
		<Text style={estilo.estiloTexto}>{props.titulo}</Text>
	</View>
);


// poderá ser importado pelo App.js
export default Cabecalho;