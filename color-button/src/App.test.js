import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
});

test('checkbox disabled button on 1st click and enabled on 2nd click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
});

test('disabled button has gray background and reverts to red', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('clicked disabled button has gray background and reverts to blue', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
});

describe('Spaces before CamelCase Capital Letter', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
});