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

/*
Requisito 3 - Vamos fazer uma pesquisa com campos controlados, para isso precisamos do 'estado', das funções que controlam esses estados e um lugar para renderizar o que está no contronle.
1 - Teremos filterByNumericValues - para ter as três opções de escolhas (column, comparison e value)
    setFilterByNumericValues - função para atualizar o estado acima.
    option - Tem as opções 'orbital_period','population','diameter','rotation_period' e 'surface_water'
    setOption - para atualizar o estado acima.
    valueSelected - para os inputs controlados
    setValueSelected - para atualizar o estado acima.

2 - Já nas funções handleChange atualizaremos as chaves correspondentes ao esta local conforme o que for digitado nos inputs. Com isso, as chaves terão valores que podem ser renderizados
3 - Ao clicar em filtrar, a função vai enviar para o context tanto o estado desse componente, que são os campos controlados, quanto o valor de filterByNumericValues que tem o nome digitado para buscar um planeta.
*/
