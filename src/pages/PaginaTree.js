import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';

import { getRandomInt } from "../util";

import TreeView from '@zaguini/react-native-tree-view'

export default class PaginaTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [
          {
            id: 'Javascript',
            name: 'Javascript',
            children: [
              {
                id: 'JQuery',
                name: 'JQuery',
                children: [
                  {
                    id: 'Query Selectors',
                    name: 'Query Selectors',
                  },
                  {
                    id: 'Classe JQuery',
                    name: 'Classe JQuery',
                  },
                ],
              },
              {
                id: 'React',
                name: 'React',
                children: [
                  {
                    id: 'State',
                    name: 'State',
                  },
                  {
                    id: 'Props',
                    name: 'Props',
                  },
                  {
                    id: 'Components',
                    name: 'Components',
                    children: [
                        {
                          id: 'Smart Component',
                          name: 'Smart Component',
                        },
                        {
                          id: 'Dumb Component',
                          name: 'Dumb Component',
                        },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'PHP',
            name: 'PHP',
            children: [
              {
                id: 'Laravel',
                name: 'Laravel',
                children: [
                  {
                    id: 'Criação de Tabela',
                    name: 'Criação de Tabela',
                  },
                ],
              },
              {
                id: 'Classe PHP',
                name: 'Classe PHP',
              },
            ],
          },
          {
            id: 'SQL',
            name: 'SQL',
            children: [
              {
                id: 'MER',
                name: 'MER',
                children: [
                  {
                    id: 'Desenho dos diagramas',
                    name: 'Desenho dos diagramas',
                  }
                ],
              },
              {
                id: 'Criação da tabela',
                name: 'Criação da tabela',
                children: [
                  {
                    id: 'Regras',
                    name: 'Constraint Rule',
                  },
                  {
                    id: 'Key char link',
                    name: 'Key char link',
                  },
                ],
              },
              {
                id: 'SQL Transact',
                name: 'SQL Transact',
                children: [
                  {
                    id: 'Select',
                    name: 'Select',
                    children: [
                        {
                            id: 'UPDATE',
                            name: 'UPDATE',
                        },
                        {
                            id: 'DELETE',
                            name: 'DELETE',
                        },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'ASP NET',
            name: 'ASP NET',
            children: [
              {
                id: '.NET',
                name: '.NET',
                children: [
                    {
                      id: 'Classe .NET',
                      name: 'Classe .NET',
                    },
                ]
              },
              {
                id: 'C#',
                name: 'C#',
                children: [
                    {
                      id: 'Classe C#',
                      name: 'Classe C#',
                    },
                ]
              },
            ],
          },
        ],
      }
  }

  
    /* componentDidMount() {
        let competencias = [{
            habilidade: "Java",
            nivel: getRandomInt(1, 5),
            qty: 5,
            id: 1
        }, {
            habilidade: "Javascript",
            nivel: getRandomInt(1, 5),
            qty: 6,
            id: 2
        }, {
            habilidade: "SQL",
            nivel: getRandomInt(1, 5),
            qty: 7,
            id: 3
        }, {
            habilidade: "PHP",
            nivel: getRandomInt(1, 5),
            qty: 4,
            id: 4
        }, {
            habilidade: "C",
            nivel: getRandomInt(1, 5),
            qty: 7,
            id: 5
        }, {
            habilidade: "C++",
            nivel: getRandomInt(1, 5),
            qty: 4,
            id: 6
        }, {
            habilidade: "Python",
            nivel: getRandomInt(1, 5),
            qty: 3,
            id: 7
        }, {
            habilidade: "C#",
            nivel: getRandomInt(1, 5),
            qty: 2,
            id: 8
        }, {
            habilidade: ".NET",
            nivel: getRandomInt(1, 5),
            qty: 9,
            id: 9
        }];
        this.setState({
            competencias: competencias
        })
    } */

  render() {
    let arrowdown = <Image style={estilo.arrow} source = {require('../img/arrowdown.png')} style={estilo.centro} />
    let arrowright = <Image style={estilo.arrow} source = {require('../img/arrowright.png')} style={estilo.centro} />

    return (
        <TreeView
            ref={ref => this.treeView = ref}
            data={this.state.data}
            deleteOnLongPress
            renderItem={(item, level) => (
                <View>
                    <Text
                        style={{
                            marginLeft: 25 * level,
                        }}
                    >
                        {   
                            item.collapsed !== null ?
                                <Text style={estilo.arrowbox}>{item.collapsed ? arrowright : arrowdown}</Text> :
                                <Text style={estilo.arrowbox}> - </Text>
                        }
                        <Text style={{flex:5}}>{item.name}</Text>
                    </Text>
                </View>
            )}
        />
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
  },
  arrow: {
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
  },
  arrowbox: {
      marginRight: 5
  }
})