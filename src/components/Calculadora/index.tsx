import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
  TextField
} from '@mui/material'

interface CalculatorProps {
  onClose: () => void
}

const Calculadora: React.FC<CalculatorProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  const handleButtonClick = (value: string) => {
    setInputValue((prevValue) => prevValue + value)
  }

  const clearInput = () => {
    setInputValue('')
    setResult('')
  }

  const calculateResult = () => {
    try {
      const calculatedResult = eval(inputValue) // Usando eval para cálculos simples (cuidado com segurança)
      setResult(calculatedResult.toString())
    } catch (error) {
      setResult('Erro de cálculo')
    }
  }

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Calculadora</DialogTitle>
      <DialogContent>
        <TextField
          label="Expressão matemática"
          variant="outlined"
          fullWidth
          value={inputValue}
        />
        <div>Resultado: {result}</div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('1')}>
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('2')}>
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('3')}>
              3
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('4')}>
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('5')}>
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('6')}>
              6
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('7')}>
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('8')}>
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" onClick={() => handleButtonClick('9')}>
              9
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => handleButtonClick('0')}>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('+')}>
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('-')}>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={clearInput}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('.')}>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('*')}>
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={calculateResult}>
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('/')}>
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('**')}>
              ^
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('Math.sqrt(')}
            >
              √
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick('**3')}>
              ^3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={() => handleButtonClick(')')}>
              )
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('Math.log10(')}
            >
              log10
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={() => handleButtonClick('Math.log(')}
            >
              ln
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default Calculadora
