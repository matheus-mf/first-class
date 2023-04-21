import { useCallback, useEffect, useState } from 'react'
import { Card } from "./components/Card"

function App() {
  const [values, setValues] = useState<Array<string>>([
    'card 1',
    'card 2',
    'card 3',
  ]);

  const handleAddCard = useCallback(() => {
    setValues((oldState) => {
      const newState = [...oldState]
      newState.push('new card')
      return newState
    });
  }, []);

  useEffect(() => {
    handleAddCard();
  }, [handleAddCard]);

  return (
    <>
      {values.map(card => (
        <Card text={card} />
      ))}

      <button onClick={handleAddCard}>Add card</button>
    </>
  )
}

export default App
