import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from 'components/Container';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
