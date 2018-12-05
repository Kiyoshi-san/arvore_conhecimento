import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import CompetenciaItem from "./CompetenciaItem";

const CompetenciaList = props => {
	const { pessoas, clicouItem } = props;

	return (
		<FlatList
			style={estilo.container}
			data={pessoas}
			renderItem={({ item }) => (
				<CompetenciaItem 
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
export default CompetenciaList;
