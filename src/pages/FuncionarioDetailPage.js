import React from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from "react-native";

import LinhaFormulario from "../components/LinhaFormulario";

// Doc - https://github.com/djchie/react-native-star-rating#usage
import StarRating from 'react-native-star-rating';

// https://www.npmjs.com/package/react-native-collapsible
import Accordion from 'react-native-collapsible/Accordion';
import { getRandomInt } from "../util";


const SECTIONS = [
	{
	  title: 'First',
	  content: 'Lorem ipsum...'
	},
	{
	  title: 'Second',
	  content: 'Lorem ipsum...'
	}
];


class FuncionarioDetailPage extends React.Component {
	constructor (props) {
        super (props);
        this.state = {
			starCount: 3.5,
			name: this.props.navigation.state.params.pessoas.name.first,
			email: this.props.navigation.state.params.pessoas.email,
			city: this.props.navigation.state.params.pessoas.location.city,
			state: this.props.navigation.state.params.pessoas.location.state,
			phone: this.props.navigation.state.params.pessoas.location.phone,
			cel: this.props.navigation.state.params.pessoas.location.cel,
			nat: this.props.navigation.state.params.pessoas.nat,
			competencias: [{habilidade:"Java", nivel:getRandomInt(1,5)},{habilidade:"Javascript", nivel:getRandomInt(1,5)},{habilidade:"SQL", nivel:getRandomInt(1,5)}, {habilidade:"PHP", nivel:getRandomInt(1,5)}],
			activeSections: []
        };
	}
    
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
	}
	
	/*******/
	handleChange = (event) => {
		console.log(event)
		this.setState({
			[event.target.id]: event.target.value,
			dirty: true
        });
	}
	
	fnMudouInput(referencia, valor) {
		this.setState({
			[referencia]: valor
		});
	}
	/*******/
	
	_renderSectionTitle = section => {
		return (
		  <View style={styles.content}>
			<Text>{section.content}</Text>
		  </View>
		);
	  };
	 
	  _renderHeader = section => {
		return (
		  <View style={styles.header}>
			<Text style={styles.headerText}>{section.title}</Text>
		  </View>
		);
	  };
	 
	  _renderContent = section => {
		let content = [];
		this.state.competencias.map(e => {
			content.push (() => {
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
							selectedStar={(rating) => this.onStarRatingPress(rating)}
							starStyle={estilo.star}
							containerStyle={estilo.starContainer}
						/>
					}
					</View>
				</View>
			})
		})
		return <View>{ content }</View>;
	  };
	 
	  _updateSections = activeSections => {
		this.setState({ activeSections });
	  };


    
	render(){

		/*pessoas vindo de "ListaPessoasItem.js" - irParaDetalhes({ pessoas });*/
		const { pessoas } = this.props.navigation.state.params;
		return(
			<ScrollView style={estilo.container}>
                <View style={estilo.container}>
                    <LinhaFormulario primeiro>
                        <TextInput
							id="name"
							style={estilo.input}
                            placeholder="Nome"
                            value={this.state.name}

                            /*função de callback*/
                            /*onChangeText = { valor => this.fn_atualiza_valor_simult(valor)}
                            OU
                            */
						   onChangeText = { valor => this.handleChange(valor) }
                            // onChangeText = { valor => this.fnMudouInput("email", valor) }
                        />
                        <TextInput
							id="email"
							style={estilo.input}
                            placeholder="usuario@text.com"
                            value={this.state.email}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                        <TextInput
							id="city"
							style={estilo.input}
                            placeholder="Cidade"
                            value={this.state.city}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                        <TextInput
							id="state"
							style={estilo.input}
                            placeholder="Estado"
                            value={this.state.state}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                        <TextInput
							id="phone"
							style={estilo.input}
                            placeholder="(11) 1111-1111"
                            value={this.state.phone}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                        <TextInput
							id="cel"
							style={estilo.input}
                            placeholder="(11) 91111-1111"
                            value={this.state.cel}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                        <TextInput
							id="nat"
							style={estilo.input}
                            placeholder="Nacionalidade"
                            value={this.state.nat}
						   onChangeText = { valor => this.handleChange(valor) }
                        />
                    </LinhaFormulario>
					<View>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>Competências1:</Text>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

						{this._renderContent()/* <Accordion
							sections={SECTIONS}
							activeSections={this.state.activeSections}
							renderSectionTitle={activeSections: []}
							renderHeader={this._renderHeader}
							renderContent={this._renderContent}
							onChange={this._updateSections}
						/> */}
							
						</View>
					</View>
                </View>
			</ScrollView>
		);
	}
}

const estilo = StyleSheet.create ({
	container: {
		height: "100%",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#fff"
	},
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	},
	centro: {
		marginTop: 10,
		marginRight: 'auto',
		marginBottom: 10,
		marginLeft: 'auto',
	},
	textoknow: {
		fontSize: 30,
		fontWeight: "bold"
	}
});

export default FuncionarioDetailPage;