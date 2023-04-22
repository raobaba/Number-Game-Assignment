import { FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, difficulty };
    fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        window.location.href = '/play';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired w='50%' m={'auto'}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </FormControl>
      <FormControl isRequired mt={4} w='50%' m={'auto'}>
        <FormLabel>Difficulty level</FormLabel>
        <Select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
          <option value="">Select a difficulty level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FormControl>
      <Button w='50%' ml={340} bg={'blue.700'} fontSize='2xl' color={'whiteAlpha.800'} type="submit" mt={4}>Submit</Button>
    </form>
  );
}