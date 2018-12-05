import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import CompetenciaItem from "./CompetenciaItem";

const CompetenciaList = props => {
	const { competencias, clicouItem } = props;

	return (
		<FlatList
			style={estilo.container}
			data={competencias}
			renderItem={({ item }) => (
				<CompetenciaItem 
					competencias={item}
					irParaDetalhes={clicouItem}
				/>
			)}
			keyExtractor={ item => item.id }
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
