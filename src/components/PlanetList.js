import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import NumberFilter from './NumberFilter';

function PlanetList() {
  /*  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      const resultado = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      console.log(resultado.results);
      setInfo(resultado.results);
    };
    getPlanets();
  }, []);
  console.log(info); */
  const { info, filterByNumericValues } = useContext(Context);
  const [planetSearch, setPlanetSearch] = useState({
    filterByName: {
      name: '',
    },
  });
  /* console.log(planetSearch.filterByName); */

  const handleChange = ({ target }) => {
    setPlanetSearch({
      ...planetSearch,
      filterByName: {
        name: target.value,
      },
    });
  };

  // console.log(info, filterByNumericValues);

  /*  const signal = () => {
    if (filterByNumericValues.comparison === 'menor que') return '<';
    if (filterByNumericValues.comparison === 'igual a') return '=';
    if (filterByNumericValues.comparison === 'maior que') return '>';
  }; */

  const planetFiltred = info
    .filter((planet) => planet.name.toLowerCase()
      .includes(planetSearch.filterByName.name.toLowerCase()))
    .filter((planetFilter) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        if (comparison === 'menor que') { return +planetFilter[column] < +value; }
        if (comparison === 'maior que') { return +planetFilter[column] > +value; }
        return +planetFilter[column] === +value;
      }));

  // console.log(planetFiltred);

  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="digite o planeta"
          onChange={ handleChange }
          value={ planetSearch.name }
          data-testid="name-filter"
        />
      </label>
      <NumberFilter />
      <table>
        <thead>
          <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {planetFiltred.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films.join(' ')}</td>
              <td>{planet.gravity}</td>
              <td>{planet.name}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetList;

/*
Requisito 1
1 - Cria a primeira parte da tabela, que seria os nomes das colunas

2 - Vamos criar agora para cada planeta uma linha e para cada informção de cada planeta, uma coluna.
1 - Vamos receber os dados da API pelo info vindo do useContext(Context)
2 - Fazemos um map dos planetas. Para cada planeta, vai ser um tr e com isso será uma linha.
Para cada linha, que é cada planeta e que é cada índice do array que vem do map, vamos colocar as colunas correspondentes.
*/

/*
Requisito 2: Vamos ter um campo controlado, logo precisaremos de um estado, a função para controlar esse estado e onde essa mudança vai aparecer na tela.
1 - Vamos ter um estado, não do método tradicional, mas sim, com o useState no formato:
 filterByName: {
      name: '',
    },     o que foi indicado no requisito.
2 - Vamos ter a função que pegará, atrvés do target, o que foi digitado no input e guardará. Vamos precisar então dos dois parâmetro do useState. O planetSearch que é o nome do estado e o setplanetSearch que atualiza o estado.

3 - Vamos pegar todos os planetas que vêm da API, e filtrar cada um dele pelo nome em minúsculo e retornar aqueles que incluem o nome em minúsculo do planeta que foi digitado no input.Retornará todos, caso não digite nada. Para fazer isso é melhor o filter, pois se não digitarmos nada, vem a lista completa.

4 - Pegaremos essa lista e renderizaremos, através de um map, no corpo da tabela.

*/

/*
Reaquisito 3:
1 - fazer os locais para escrever as nformações
2 - obter algum modo de salvar no estado essas informações
3 - obter algum meio de renderizar os planetas com essas informações.
*/
