import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  // 2 - armazenar as informações
  const [info, setInfo] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [option, setOption] = useState([
    'orbital_period',
    'population',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // 1 - pegar as informações
  useEffect(() => {
    const getPlanets = async () => {
      const resultado = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      // console.log(resultado.results);
      setInfo(resultado.results);
    };
    getPlanets();
  }, []);

  // 3 - distribuir as informações.
  const arrayPlanets = { info,
    filterByNumericValues,
    setFilterByNumericValues,
    option,
    setOption };

  return (
    <Context.Provider value={ arrayPlanets }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

/*
Requisito 1
Aqui vou colocar toda a lógica com os dados para alimentar os outros componentes.

1 - Vamos pegar todos os dados vindo da API, usaremos o useEffect com o [] vazio, sendo assim  a função será executada similarmente ao `componentDidMount`,rodando apenas uma vez e na montagem do componente. Mando a lista de planetas para o estado info através do setInfo, que é a parte do hook que modifica o estado, sendo o segundo parâmetro.

2 - Cria 3 estados com os seus modificares ( o segundo parâmetro ). 1 - Info é para os dados que vêm da API. 2 - filterByNumericValues para guardar as informações de filtro e  3 - option são as opções de filtro

3 - Passamos esses estados para os componentes filhos

*/
