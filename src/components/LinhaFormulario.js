import React from "react";
import { StyleSheet, View } from "react-native";

const LinhaFormulario = props => {
	/*Propriedade children - nativa do react - herda os componentes filhos da TAG que está enviando*/
	const { children, primeiro, ultimo } = props;
	return (
		/*<View style={ estilo.container }>*/
		/*Quando colocamos o estilo num Array, o item que vem depois sobrescreve a propriedade do anterior*/
		<View style={[
			estilo.container, 
			primeiro ? estilo.primeiro : null,
			ultimo ? estilo.ultimo : null
			]}>
			{ children }
		</View>
	)
}

const estilo = StyleSheet.create({
	container: {
		padding:10,
		backgroundColor: "#fff",
		marginTop: 5,
		marginBottom: 5,
		elevation: 1,
	},
	primeiro: {
		marginTop: 10,
	},
	ultimo: {
		marginBottom: 10,
	},
});

export default LinhaFormulario;