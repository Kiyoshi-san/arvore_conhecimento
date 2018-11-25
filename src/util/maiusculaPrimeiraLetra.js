/*Deixa a primeira letra da palavra em maiusculo*/
const maiusculaPrimLetra = texto => {
	return texto[0].toUpperCase() + texto.slice(1)
}

export default maiusculaPrimLetra;