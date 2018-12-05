import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import CompetenciaList from "../components/CompetenciaList";

export default class PaginaCompetencias extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      deuErro: false, // ESTAMOS SETANDO UM VALOR "false" PADRÃO, ABAIXO MUDAMOS CASO NECESS
      compentencias: []
    }
  }

  
  componentDidMount() {    
		let competencias = [{habilidade:"Java", id:1},{habilidade:"Javascript", id:2},{habilidade:"SQL", id:3}, {habilidade:"PHP", id:4}];
    this.setState({
      competencias: competencias
    })
  }

  render() {
    return (
      <View style={estilo.container}>
            { this.state.loading == true ? <ActivityIndicator size="large" color="#6ca2f7" /> 

            // : null

            : this.state.deuErro ? <Text>Ops... Algo deu errado</Text> 
              : <CompetenciaList 
                competencias={this.state.competencias}
                clicouItem={paginaParams => {
                  this.props.navigation.navigate("PaginaCompetenciaPessoa", paginaParams)
                }}
              />
            }

      </View>
    );
  }
}

const estilo = StyleSheet.create ({
  container: {
    flex:1, // OCUPA TODA A TELA
    justifyContent:"center" // CENTRALIZA EIXO Y - TECNICA DO FLEXBOX
  },
  erro: {
    color: "red",
    alignSelf: "center", // CENTRALIZA EIXO X - TECNICA DO FLEXBOX
    fontSize: 18
  }
})