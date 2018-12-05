import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

// https://github.com/entria/react-native-fontawesome
// import FontAwesome, { Icons } from 'react-native-fontawesome';

// import maiusculaPrimLetra from "../util/maiusculaPrimLetra";
/*PARA IMPORTAR COMO DESTRUCT IGUAL ACIMA "import {StyleSheet} from ... ; É NECESSARIO COLOCAR A PASTA PARA O NODE IMPORTAR NO CASO: "util" QUE É ONDE ESTÁ A FUNÇÃO
É NECESSARIO ADICIONAR A IMPORTAÇÃO NUM ARQUIVO CHAMADO "index.js" QUE É ONDE O NODE JS PROCURA A PASTA IMPORTADA*/
import { maiusculaPrimLetra } from "../util";

const FuncionariosItem = props => {
	const {pessoas, irParaDetalhes} = props;
	const {title, first, last} = pessoas.name;
	return (
		<TouchableOpacity onPress={() => {

				// console.log("Clicou", first)
				// COMO É UM COMPONENTE FUNCIONAL NAO PRECISA DO "this."
				/*irParaDetalhes();

				Vamos passar o objeto "pessoas"
				irParaDetalhes({ pessoas:pessoas }); - o ES6 permite que escreva pessoas 1x para não ficar repetindo - pessoas: pessoas
				*/
				irParaDetalhes({ pessoas });
				
			}}>
			<View style={estilo.linha}>
				<Image style={estilo.avatar} source={{ uri: pessoas.picture.thumbnail }} />
				<Text style={estilo.linhaText}>{ `${maiusculaPrimLetra(title)} ${maiusculaPrimLetra(first)} ${maiusculaPrimLetra(last)}` }</Text>
				{/* <View>
					<FontAwesome>{Icons.chevronLeft}</FontAwesome>
				</View> */}
			</View>
		</TouchableOpacity>
	);
}

const estilo = StyleSheet.create ({
	linha:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",
		alignItems: "center",
		flexDirection: "row"
	},
	linhaText:{
		fontSize: 17,
		paddingLeft: 15,
		flex: 7
	},
	avatar:{
		aspectRatio: 1, // ESSA PROPRIEDADE É PARA QUE O REACT NÃO DISTORÇA A IMAGEM, OU SEJA MANTEM A PROPORÇÃO
		flex: 1,
        width: 15,
		marginLeft: 15,
		borderRadius: 50

	}
})

export default FuncionariosItem;