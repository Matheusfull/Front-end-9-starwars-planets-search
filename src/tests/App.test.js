import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testes de existências de campos e textos na tela', () => {
  it('testes para ver se há o campo de busca por nome', () => {
    render(<App />);

    const namePlanet = screen.getByTestId('name-filter')
    expect(namePlanet).toBeInTheDocument();

    const placeHolder = screen.getByPlaceholderText('digite o planeta')
    expect(placeHolder).toBeInTheDocument();
  })
  it('teste para verificar a existência dos filtros de número', () => {
    render(<App />);

    const filterColumn = screen.getByTestId('column-filter')
    expect(filterColumn).toBeInTheDocument();

    const comparisonFilter = screen.getByTestId('comparison-filter')
    expect(comparisonFilter).toBeInTheDocument();

    const valueFilter = screen.getByTestId('value-filter')
    expect(valueFilter).toBeInTheDocument();
    expect(valueFilter).toHaveProperty('type', 'number')
  })
  
  it('teste para verificar se há um botão para filtrar', () => {
    render(<App />);

    const buttonFilter = screen.getByTestId('button-filter')
    expect(buttonFilter).toBeInTheDocument();
    expect(buttonFilter).toHaveProperty('type', 'button')
    // expect(buttonFilter).toHaveLength(1)
    // expect(buttonFilter).toHaveValue('Filtrar')
  })

  it('teste para verificação do header da lista', () => {
    render(<App />);

    const climateColumn = screen.getByText(/climate/i)
    expect(climateColumn).toBeInTheDocument()

     const createdColumn = screen.getByText(/created/i)
    expect(createdColumn).toBeInTheDocument()

     /* const diameterColumn = screen.getByText(/diameter/i)
    expect(diameterColumn).toBeInTheDocument() */

    const editedColumn = screen.getByText(/edited/i)
    expect(editedColumn).toBeInTheDocument()

    const filmsColumn = screen.getByText(/films/i)
    expect(filmsColumn).toBeInTheDocument()

    const gravityColumn = screen.getByText(/gravity/i)
    expect(gravityColumn).toBeInTheDocument()

    const nameColumn = screen.getByText(/name/i)
    expect(nameColumn).toBeInTheDocument()

    /* const orbital_periodColumn = screen.getByText(/orbital_period/i)
    expect(orbital_periodColumn).toBeInTheDocument() */

    /* const populationColumn = screen.getByText(/population/i)
    expect(populationColumn).toBeInTheDocument() */

    /* const rotation_periodColumn = screen.getByText(/rotation_period/i)
    expect(rotation_periodColumn).toBeInTheDocument() */

    /* const surface_waterColumn = screen.getByText(/surface_water/i)
    expect(surface_waterColumn).toBeInTheDocument() */

    /* const terrainColumn = screen.getByText(/terrain/i)
    expect(terrainColumn).toBeInTheDocument() */

    /* const urlColumn = screen.getByText(/url/i)
    expect(urlColumn).toBeInTheDocument(); */
  })

  it('teste para verificar se algum planeta é renderizado', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText('Tatooine')).toBeInTheDocument())

  })
});

describe('Testes de interações, ou seja, filtragem', () => {
  it('teste de filtragem por nome', async () => {
    render(<App />);

    const namePlanet = screen.getByTestId('name-filter')
    // const buttonFilter = screen.getByTestId('button-filter')
    
    userEvent.type(namePlanet, 'hoth')
    // userEvent.click(buttonFilter)

    // const namePlanetSearch = screen.queryByText('Hoth')
    await waitFor(() => expect(screen.getByText('Hoth')).toBeInTheDocument())

  });

  it('teste de filtragem pelos campos de column, comparação e valor igual a', async () => {
    render(<App />);

    const filterColumn = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'diameter')
    userEvent.selectOptions(comparisonFilter, 'igual a')
    userEvent.type(valueFilter, '118000')
    userEvent.click(buttonFilter)

    // const namePlanetSearch = screen.getByText('Bespin')
    await waitFor(() => expect(screen.getByText('Bespin')).toBeInTheDocument())
  })

  it('teste de filtragem pelos campos de column, comparação e valor menor que', async () => {
render(<App />);

    const filterColumn = screen.getByTestId('column-filter')
    const comparisonFilter = screen.getByTestId('comparison-filter')
    const valueFilter = screen.getByTestId('value-filter')
    const buttonFilter = screen.getByTestId('button-filter')

    userEvent.selectOptions(filterColumn, 'diameter')
    userEvent.selectOptions(comparisonFilter, 'menor que')
    userEvent.type(valueFilter, '10200')
    userEvent.click(buttonFilter)

    await waitFor(() => expect(screen.getByText('Dagobah')).toBeInTheDocument())
  })

  it('teste de filtragem pelos campos de column, comparação e valor maior que', async () => {
    render(<App />);
    
        const filterColumn = screen.getByTestId('column-filter')
        const comparisonFilter = screen.getByTestId('comparison-filter')
        const valueFilter = screen.getByTestId('value-filter')
        const buttonFilter = screen.getByTestId('button-filter')
    
        userEvent.selectOptions(filterColumn, 'diameter')
        userEvent.selectOptions(comparisonFilter, 'maior que')
        userEvent.type(valueFilter, '10200')
        userEvent.click(buttonFilter)
    
        await waitFor(() => expect(screen.getByText('Alderaan')).toBeInTheDocument())
      })

});