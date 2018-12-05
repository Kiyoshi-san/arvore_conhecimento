import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

/*NÃO SERA MAIS USADO ESSE COMPONENTE, POIS ESTAMOS USANDO UM COMPONENTE PROPRIO PARA NAVEGAÇÃO*/
// import Cabecalho from "../components/Cabecalho";
import CompetenciaPessoaList from "../components/CompetenciaPessoaList";

import axios from "axios"; /* agora ja tenho acesso ao objeto axios
AXIOS - É COMO A CHAMADA "AJAX" - CHAMADA DE PROMISE
O CALLBACK ("success:") - É O ".then"
"error:" - ".rejected"
*/

import { getRandomInt } from "../util";

export default class PaginaCompetencias extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoas: [],
      loading: false,
      deuErro: false // ESTAMOS SETANDO UM VALOR "false" PADRÃO, ABAIXO MUDAMOS CASO NECESS
    }
  }


  /*VAMOS COLOCAR O OBJETO AXIOS NA FUNÇÇÃO componentDidMount() DO REACT - É UM EVENTO DO TIPO "onReady"*/
  componentDidMount() {
    this.setState({ loading: true });

    // Agendando uma função (a chamada get) para ser executada dps de 1500 ms (1,5 s)
    // setTimeout(() => {
      axios
        /*get - FAZENDO A CHAMADA ASSINCRONA*/
        .get(`https://randomuser.me/api/?nat=br&results=${getRandomInt(6,8)}`) // Trazendo 150 registros
        /*then - CALL BACK
        response é passado pelo axios*/
        .then(response => {
          const { results } = response.data;
          this.setState({
            pessoas: results,
            loading: false
          })
        }).catch(error => { // FZD UM HANDLER PRA CAPTURAR O ERRO
          this.setState({ 
            deuErro: true,
            loading: false
          })
        });
    // }, 1500);
  }

  carregandoLoading() {
    /*if(this.state.loading){
      // ActivityIndicator recebe 2 params
      //           - size
      //           - color
      return (<ActivityIndicator size="large" color="#6ca2f7" />);      
    }else{
      return null;
    }*/
  }

  render() {
    return (
      <View style={estilo.container}>
            { this.state.loading == true ? <ActivityIndicator size="large" color="#6ca2f7" /> 

            // : null

            : this.state.deuErro ? <Text>Ops... Algo deu errado</Text> 
              : <CompetenciaPessoaList 
                pessoas={this.state.pessoas}
                clicouItem={paginaParams => {
                  this.props.navigation.navigate("DetalheCompetenciaPessoa", paginaParams) /* Esse "paginaParams" foi para a Router.js - vamos acessar atraves do objeto "navigation" - navigationOptions: ({navigation})
                  - Assim que passamos dados de uma pagina para outra
                  */
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