import React, { useContext } from 'react';
import Context from '../context/Context';

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
  const { info } = useContext(Context);
  console.log(info);
  return (
    <div>
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
          {info.map((planet) => (
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
1 - Cria a primeira parte da tabela, que seria os nomes das colunas

2 - Vamos criar agora para cada planeta uma linha e para cada informção de cada planeta, uma coluna.
-- Fazemos um map dos planetas. Para cada planeta, vai ser um tr e com isso será uma linha.
-- Para cada linha, que é cada planeta e que é cada índice do array que vem do map, vamos colocar as colunas correspondentes.
*/
