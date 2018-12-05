import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import CompetenciaPessoaItem from "./CompetenciaPessoaItem";

const CompetenciaPessoaList = props => {
	const { pessoas, clicouItem } = props;

	return (
		<FlatList
			style={estilo.container}
			data={pessoas}
			renderItem={({ item }) => (
				<CompetenciaPessoaItem 
					pessoas={item} 
					irParaDetalhes={clicouItem}
				/>
			)}
			keyExtractor={ item => item.name.first }
		/>
	);
};

/**/

const estilo = StyleSheet.create({
	container:{
		backgroundColor: "#e7f6fd"
	}
});
export default CompetenciaPessoaList;
