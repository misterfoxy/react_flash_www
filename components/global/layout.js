import { Container, Row, Col } from 'reactstrap';
import Header from './header'

export default function Layout (props){

    return (
        <Container fluid={true}>
    
       
          <Header />


    
        <Container fluid={true}>
          {props.children}
        </Container>
     
    
      </Container>
    )
}