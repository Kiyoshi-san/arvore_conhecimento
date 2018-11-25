import React from "react";
import { StyleSheet, View, Text } from "react-native";

/*
COMO SERA UM COMPONENTE STATELESS, ELE NAO PRECISA DE UM ESTADO, SERA SÓ VISUAL, ENTAO FAREI UM FUNCTIONAL COMPONENT
*/
// DESESTRUTURANDO A "props" EM "label" e "conteudo"
/*const Linha = (props) => {
	const { label, conteudo } = props;
}*/
// EQUIVALENTE AO DE CIMA
/*
const Linha = ({ label, conteudo }) => {
}
*/
// const Linha = ({ label, conteudo }) => {
// label = "" - caso alguem não passe valor pro label por default ele valerá "" - prevenção de erro
const Linha = ({ label = "", conteudo = "-" }) => {
	return (
	<View style={estilo.linha}>
		<Text style={[
			estilo.celula, 
			estilo.celula__label, 
			label.length > 8 ? estilo.labelGrande : null
		]}>
			{ label }
		</Text>
		<Text style={[estilo.celula, estilo.celula__conteudo]}>{ conteudo }</Text>
	</View>
	);
}


const estilo = StyleSheet.create ({
	linha: {
		flexDirection: "row", // como default é "column"
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: "#e2f9ff"
	},
	celula: {
		fontSize: 18,
		paddingLeft: 5
	},
	celula__label: {
		fontWeight: "bold",
		flex: 1
	},
	celula__conteudo: {
		flex: 4
	},
	labelGrande: {
		fontSize: 12
	}
});

export default Linha;