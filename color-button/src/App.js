import React, { useState } from 'react';
import { Button, ChakraProvider, Checkbox, Stack, VStack } from '@chakra-ui/react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false)

  return (
    <ChakraProvider>
      <div className="App">
        <Stack p={5}>
          <VStack>
            <Button
              style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
              onClick={() => setButtonColor(newButtonColor)}
              disabled={disabled}
            >
              Change to {newButtonColor}
            </Button>
            <Checkbox
              type="checkbox"
              name="checkbox"
              defaultChecked={disabled}
              aria-checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            >
              Disable button
            </Checkbox>
            </VStack>
        </Stack>
      </div>
    </ChakraProvider>
  );
}

export default App;
