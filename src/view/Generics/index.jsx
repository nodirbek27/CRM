import { useLocation } from 'react-router-dom'
import { Container } from './style'

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} page</h1>
      <h2>Coming soon ...</h2>
    </Container>
  )
}

export default Generics;
