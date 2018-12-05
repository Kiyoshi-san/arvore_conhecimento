import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

// import maiusculaPrimLetra from "../util/maiusculaPrimLetra";
/*PARA IMPORTAR COMO DESTRUCT IGUAL ACIMA "import {StyleSheet} from ... ; É NECESSARIO COLOCAR A PASTA PARA O NODE IMPORTAR NO CASO: "util" QUE É ONDE ESTÁ A FUNÇÃO
É NECESSARIO ADICIONAR A IMPORTAÇÃO NUM ARQUIVO CHAMADO "index.js" QUE É ONDE O NODE JS PROCURA A PASTA IMPORTADA*/
import { maiusculaPrimLetra } from "../util";

// const CompetenciaItem = props => {
class CompetenciaItem extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
    }

    render () {
        // const {competencias, irParaDetalhes} = props;
        const {competencias, irParaDetalhes} = this.props;
        
        return (
            <TouchableOpacity onPress={() => {
                    irParaDetalhes({ competencias });
                    
                }}>
                <View style={estilo.linha}>
                    <Text style={estilo.linhaText}>{ competencias.habilidade }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const estilo = StyleSheet.create ({
	linha:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#e6fbff",
		alignItems: "center",
		flexDirection: "row"
	},
	linhaText:{
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
})

export default CompetenciaItem;