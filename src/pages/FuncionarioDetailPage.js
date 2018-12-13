import React from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Image, Alert, Button, Picker } from "react-native";

import LinhaFormulario from "../components/LinhaFormulario";

// Doc - https://github.com/djchie/react-native-star-rating#usage
import StarRating from 'react-native-star-rating';

// https://www.npmjs.com/package/react-native-collapsible
import Accordion from 'react-native-collapsible/Accordion';
import { getRandomInt } from "../util";

import { connect } from "react-redux";
// IMPORTANDO A ACTION CREATOR setField PARA PASSAR NO mapDispatchToProps
import { setField } from "../actions";

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
			competencias: [{ 
				habilidade: "Java",
				nivel: getRandomInt(1, 5),
				qty: 5,
				id: 1
			},{
				habilidade: "Javascript",
				nivel: getRandomInt(1, 5),
				qty: 6,
				id: 2
			},{
				habilidade: "SQL",
				nivel: getRandomInt(1, 5),
				qty: 7,
				id: 3
			},{
				habilidade: "PHP",
				nivel: getRandomInt(1, 5),
				qty: 4,
				id: 4
			},{
				habilidade: "C",
				nivel: getRandomInt(1, 5),
				qty: 7,
				id: 5
			},{
				habilidade: "C++",
				nivel: getRandomInt(1, 5),
				qty: 4,
				id: 6
			},{
				habilidade: "Python",
				nivel: getRandomInt(1, 5),
				qty: 3,
				id: 7
			},{
				habilidade: "C#",
				nivel: getRandomInt(1, 5),
				qty: 2,
				id: 8
			},{
				habilidade: ".NET",
				nivel: getRandomInt(1, 5),
				qty: 9,
				id: 9
			}],
			activeSections: []
        };
	}
    
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
	}
	
	/*******/
	// handleChange = (event) => {
	handleChange (referencia, valor) {
		/* console.log(event)
		this.setState({
			[event.target.id]: event.target.value,
			dirty: true
		}); */
		this.setState({
			[referencia]: valor
		});
	}

	fnEdit() {
		// Alert.alert(
		// 	'Alterado com Sucesso!',
		// 	// 'Deseja realmente alterar?',
		// 	[
		// 		/* { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
		// 		{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }, */
		// 		{ text: 'OK', onPress: () => this.props.navigation.replace("PaginaCurriculo") },
		// 	],
		// 	{ cancelable: false }
		// )
		alert("Alterado com Sucesso!")
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
                            value={this.props.formFuncionario.name}

                            /*função de callback*/
                            /*onChangeText = { valor => this.fn_atualiza_valor_simult(valor)}
                            OU
                            */
						   	// onChangeText = { valor => this.handleChange("name",valor) }
						   	onChangeText = { valor => this.props.setarCampo("name",valor) }
                        />
                        <TextInput
							id="email"
							style={estilo.input}
                            placeholder="usuario@text.com"
                            value={this.props.formFuncionario.email}
						   	// onChangeText = { valor => this.handleChange("email",valor) }
						   	onChangeText = { valor => this.props.setarCampo("email",valor) }
                        />
                        <TextInput
							id="city"
							style={estilo.input}
                            placeholder="Cidade"
                            value={this.props.formFuncionario.city}
						   	// onChangeText = { valor => this.handleChange("city",valor) }
						   	onChangeText = { valor => this.props.setarCampo("city",valor) }
                        />
                        <TextInput
							id="state"
							style={estilo.input}
                            placeholder="Estado"
                            value={this.props.formFuncionario.state}
						   	// onChangeText = { valor => this.handleChange("state",valor) }
						   	onChangeText = { valor => this.props.setarCampo("state",valor) }
                        />
                        <TextInput
							id="phone"
							style={estilo.input}
                            placeholder="(11) 1111-1111"
                            value={this.props.formFuncionario.phone}
						   	// onChangeText = { valor => this.handleChange("phone",valor) }
						   	onChangeText = { valor => this.props.setarCampo("phone",valor) }
                        />
                        <TextInput
							id="cel"
							style={estilo.input}
                            placeholder="(11) 91111-1111"
                            value={this.props.formFuncionario.cel}
						   	// onChangeText = { valor => this.handleChange("cel",valor) }
						   	onChangeText = { valor => this.props.setarCampo("cel",valor) }
                        />
                        <TextInput
							id="nat"
							style={estilo.input}
                            placeholder="Nacionalidade"
                            value={this.props.formFuncionario.nat}
						   	// onChangeText = { valor => this.handleChange("nat",valor) }
						   	onChangeText = { valor => this.props.setarCampo("nat",valor) }
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

							<Picker
								selectedValue={this.state.language}
								style={estilo.picker}
								onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
								<Picker.Item label="Java" value="java" />
								<Picker.Item label="Javascript" value="js" />
								<Picker.Item label="SQL" value="sql" />
								<Picker.Item label="PHP" value="php" />
								<Picker.Item label="C" value="c" />
								<Picker.Item label="C++" value="c++" />
								<Picker.Item label="Python" value="python" />
								<Picker.Item label="C#" value="c#" />
								<Picker.Item label=".NET" value=".net" />
							</Picker>
							
						</View>
						<Button
							style={{ marginTop: 55 }}
							title="Alterar"
							onPress={() => this.fnEdit()}
						/>
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
	},
	picker: {
		height: 50,
		width: 300
		// flex: 1
	}
});


// AO INVES DE EXPORTAR NORMAL, EXPORTAR COM CONNECT
// export default FuncionarioDetailPage;
// VEM DO REDUCERS

function mapStateToProps(estado) {
    return {
        // minhaProp: {456}
        formFuncionario: estado.formFunc
    }
}

// PARA O mapDispatchToProps PASSAREI UMA ACTION CREATOR - QUE É UM OBJETO
// VEM DA ACTIONS
const mapDispatchToProps = {
    setarCampo: setField
}

// export default FuncionarioDetailPage; 
// O CONNECT JA ESTA FAZENDO O DISPATCH DA NOSSA ACTION (QUE É APENAS UM OBJETO), SE NAO FOSSE O CONNECT, FARIAMOS O DISPATCH ASSIM:
/*
    <FuncionarioDetailPage
        setarCampo = {(field, value) => dispatch(setField(field, value))} // O setField(field, value) RETORNA O OBJETO QUE É PASSADO PRO dispatch
    />
*/
export default connect(mapStateToProps, mapDispatchToProps)(FuncionarioDetailPage);