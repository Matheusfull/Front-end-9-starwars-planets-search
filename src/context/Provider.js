import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [info, setInfo] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const resultado = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      // console.log(resultado.results);
      setInfo(resultado.results);
    };
    getPlanets();
  }, []);

  const arrayPlanets = { info, filterByNumericValues, setFilterByNumericValues };

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
Aqui vou colocar toda a lógica com os dados para alimentar os outros componentes.

1 - Vamos pegar todos os dados vindo da API, usaremos o useEffect com o [] vazio, sendo assim  a função será executada similarmente ao `componentDidMount`,rodando apenas uma vez e na montagem do componente.

2 - Mando a lista de planetas para o estado

3 - Passamos esse estado para os componentes filhos

*/
