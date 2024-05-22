import Hero from './components/Hero';
import { ReactLenis, useLenis } from 'lenis/react';

function App() {
  const lenis = useLenis(({ scroll }) => {
  });

  return (
    <>
      <ReactLenis root>
        <Hero />
      </ReactLenis>
    </>
  );
}

export default App;
