import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function NumberFilter() {
  const { filterByNumericValues,
    setFilterByNumericValues,
    option,
    setOption } = useContext(Context);
  const [valueSelected, setValueSelected] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },

  );

  /* console.log(option); */

  // const [stateColumn, setSatteColumn] = useState('population');

  const handleChange1 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      column: target.value,
    });
  };
  // console.log(stateColumn);

  // const [stateComparison, setSatteComparison] = useState('maior que');

  const handleChange2 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      comparison: target.value,
    });
  };
  // console.log(stateComparison);

  // const [stateValue, setSatteValue] = useState('');

  const handleChange3 = ({ target }) => {
    setValueSelected({
      ...valueSelected,
      value: target.value,
    });
  };

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues, valueSelected,
    ]);
    /* setOption(
      option.splice(0, option.indexOf(valueSelected.column)),
    ); */
    // setOption((anterior) => console.log(anterior)); Essa função dentro do set, desse modo faz consolar o que tem dentro.
    setOption((anterior) => anterior.filter((index) => index !== valueSelected.column));
  };

  // console.log(option);

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ valueSelected.column }
        onChange={ handleChange1 }
      >
        { option.map((optionFilter) => (
          <option key={ optionFilter } value={ optionFilter }>{optionFilter}</option>
        ))}
        {/* <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option> */}
      </select>
      <select
        data-testid="comparison-filter"
        value={ valueSelected.comparison }
        onChange={ handleChange2 }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChange3 }
        value={ valueSelected.value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumberFilter;

/*
Requisito 6 -
1 - tirar o column escolhido das options
-- ao clicar no filtrar, o option escolhido deve sair da opções de filtro.
2 - renderizar na tela o filtro escolhido, com o column, comparison e value.
*/
