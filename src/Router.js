// ROUTER VAI GUARDAR TODA A NOSSA LOGICA DE ROTEAMENTE - TODAS AS PAGINAS ESTARAO LA

// import { StackNavigator }from "react-navigation";
import { createStackNavigator, TabNavigator } from "react-navigation";
import PaginaLogin from "./pages/PaginaLogin";
import FuncionariosPage from "./pages/FuncionariosPage";
//import SeriesPage from "./pages/SeriesPage";
//import SeriesDetailPage from "./pages/SeriesDetailPage";
import SplashPage from "./pages/SplashPage";
import PaginaCompetencias from "./pages/PaginaCompetencias";
import CurriculoListPage from "./pages/CurriculoListPage";
import CurriculoDetail from "./pages/CurriculoDetail";
import PaginaCompetenciaPessoa from "./pages/PaginaCompetenciaPessoa";
import CompetenciaPessoaDetail from "./pages/CompetenciaPessoaDetail";
import FuncionarioDetailPage from "./pages/FuncionarioDetailPage";
import maiusculaPrimLetra from "./util/maiusculaPrimeiraLetra";

/*2 parametros
- config das paginas
- Objeto de configuração - Configuração default de todas as paginas
*/
// export default StackNavigator({
export default createStackNavigator({
  "SplashPage": {
    screen: SplashPage,
    navigationOptions: {
      header: null
    }
  },
  "Login": {
    screen: PaginaLogin,
    navigationOptions: {
      header: null,
      title: "Login",
      alignSelf: "center",
    }
  },
  /* Pagina Curriculo com as Abas */
  PaginaCurriculo: {
    screen: TabNavigator({
      Home: {
        screen: CurriculoListPage,
        navigationOptions: ({ navigation }) => ({
          title: 'Currículos',
        }),
      },
      funcionarios: {
        screen: FuncionariosPage,
        navigationOptions: ({ navigation }) => ({
          title: 'Funcionários',
          header: null
        }),
      },
      competencias: {
        screen: PaginaCompetencias,
        navigationOptions: ({ navigation }) => ({
          title: 'Competências',
        }),
      },
    }),
    navigationOptions: ({ navigation }) => ({
      title: 'Lista de Curriculos',
      header: null
    }),
  },
  /*"PaginaPrincipal": {
    screen: SeriesPage
  },
  "PaginaDetalhe": {
    screen: SeriesDetailPage,
    // navigationOptions: {
    //   title: "Página de Detalhes"
    // }
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
          // title: "Página de Detalhes"
          title: serie.title
      }
    }
  },*/
  "DetalheCurriculo": {
    screen: CurriculoDetail,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        title: maiusculaPrimLetra(nomePessoa),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  "PaginaCompetenciaPessoa": {
    screen: PaginaCompetenciaPessoa,
    navigationOptions: ({navigation}) => {
      const habilidade = navigation.state.params.competencias.habilidade;
      return ({
        title: maiusculaPrimLetra(habilidade),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  "DetalheCompetenciaPessoa": {
    screen: CompetenciaPessoaDetail,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        title: maiusculaPrimLetra(nomePessoa),
        headerTitleStyle: {
          color: "#000",
          fontSize: 30,
          alignSelf: "center"
        }
      });
    }
  },
  DetalheFuncionario: {
    screen: FuncionarioDetailPage,
    navigationOptions: ({navigation}) => {

      // acessando o objeto recebido da "PaginaPessoas.js" - this.props.navigation.navigate("ChaveDetalhePessoas", paginaParams) - navegacao é o objeto paginaParams
      const nomePessoa = navigation.state.params.pessoas.name.first;
      return ({
        // title: maiusculaPrimLetra(nomePessoa),
        title: "Editar",
        headerTitleStyle: {
          color: "#000",
          fontSize: 20,
          alignSelf: "center"
        }
      });
    }
  },

},{
  navigationOptions: {
    title: "Series!",
    headerTintColor: "#fff",
    headerStyle: {
      // backgroundColor: "#20144D",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
      color: "#000",
      fontSize: 30
    }
  }
});
