import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

// import maiusculaPrimLetra from "../util/maiusculaPrimLetra";
/*PARA IMPORTAR COMO DESTRUCT IGUAL ACIMA "import {StyleSheet} from ... ; É NECESSARIO COLOCAR A PASTA PARA O NODE IMPORTAR NO CASO: "util" QUE É ONDE ESTÁ A FUNÇÃO
É NECESSARIO ADICIONAR A IMPORTAÇÃO NUM ARQUIVO CHAMADO "index.js" QUE É ONDE O NODE JS PROCURA A PASTA IMPORTADA*/
import { maiusculaPrimLetra } from "../util";

// const CompetenciaPessoaItem = props => {
class CompetenciaPessoaItem extends React.Component {
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
        // const {pessoas, irParaDetalhes} = props;
        const {pessoas, irParaDetalhes} = this.props;
        const {title, first, last} = pessoas.name;
        return (
            <TouchableOpacity onPress={() => {
                    irParaDetalhes({ pessoas });
                    
                }}>
                <View style={estilo.linha}>
                    <Image style={estilo.avatar} source={{ uri: pessoas.picture.thumbnail }} />
                    <Text style={estilo.linhaText}>{ `${maiusculaPrimLetra(title)} ${maiusculaPrimLetra(first)} ${maiusculaPrimLetra(last)}` }</Text>
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
	avatar:{
		aspectRatio: 1, // ESSA PROPRIEDADE É PARA QUE O REACT NÃO DISTORÇA A IMAGEM, OU SEJA MANTEM A PROPORÇÃO
		flex: 1,
        width: 15,
		marginLeft: 15,
		borderRadius: 50

    },
    star: {
        paddingLeft: 0,
        paddingRight: 2,
    },
    starContainer: {
        marginRight: 5
    }
})

export default CompetenciaPessoaItem;