import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

import Linha from "../components/Detalhes_LinhaTabelaDados";

// Doc - https://github.com/djchie/react-native-star-rating#usage
import StarRating from 'react-native-star-rating';

import { getRandomInt } from "../util";
class CompetenciaDetail extends React.Component {
	constructor (props) {
        super (props);
        this.state = {
            starCount: 3.5
        };
	}

	render(){
		let competencias = [{habilidade:"Java", nivel:getRandomInt(1,5)},{habilidade:"Javascript", nivel:getRandomInt(1,5)},{habilidade:"SQL", nivel:getRandomInt(1,5)}, {habilidade:"PHP", nivel:getRandomInt(1,5)}];

		/*pessoas vindo de "ListaPessoasItem.js" - irParaDetalhes({ pessoas });*/
		const { pessoas } = this.props.navigation.state.params;
		return(
			<ScrollView style={estilo.container}>

				<Image source={{ uri: pessoas.picture.large }}
					style={ estilo.avatar } />
				<View style={estilo.detalheContainer}>
					<Linha label="Email:" conteudo={pessoas.email}/>
					<Linha label="Cidade:" conteudo={pessoas.location.city}/>
					<Linha label="Estado:" conteudo={pessoas.location.state}/>
					<Linha label="Tel:" conteudo={pessoas.location.phone}/>
					<Linha label="Cel:" conteudo={pessoas.location.cel}/>
					<Linha label="Nacionalidade:" conteudo={pessoas.nat}/>
					<View>
						<Text style={{ fontSize: 6, fontWeight: "bold" }}>Competências:</Text>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >								
							{
								competencias.map(e => {
									return (
										<View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
											<View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>{ e.habilidade }</Text></View>
											<View style={{ flex: 1, alignSelf: 'stretch' }} >
											{
												<StarRating
													maxStars={5}
													starSize={20}
													disabled={true}
													// rating={this.state.starCount}
													rating={e.nivel}
													// selectedStar={(rating) => this.onStarRatingPress(rating)}
													starStyle={estilo.star}
													containerStyle={estilo.starContainer}
												/>
											}
											</View>
										</View>
									)
								})
							}
							
						</View>
					</View>
					
                    
				</View>
			</ScrollView>
		);
	}
}

const estilo = StyleSheet.create({
	avatar: {
		aspectRatio: 1,
		borderRadius: 200,
		borderStyle: "solid",
	    borderWidth: 5,
		borderColor: "#d8e7ea"
	},
	container: {
		padding: 15
	},
	detalheContainer: {
		backgroundColor: "#e2f9ff",
		marginTop: 20,
		marginBottom: 20,
		elevation: 1
	},
    star: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    starContainer: {
        marginRight: 5
    }
});

export default CompetenciaDetail;