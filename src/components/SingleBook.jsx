import { Component } from "react"
import { Col,Card } from "react-bootstrap"


class SingleBook extends Component {
    state ={
       selected : false

    }


    toggleSelect = () => {
        this.setState((prevState) => ({
          selected: !prevState.selected,
        }));
      };   



    render(){
        const {book} = this.props
        const { selected } = this.state;

        const cardStyle = selected ? { border: '2px solid red' } : {};
        return (
         
        <Col xs={12} sm={6} md={4} lg={3}>
                <Card style={cardStyle} onClick={this.toggleSelect}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      <p>Price: {book.price} €</p>
                      <p>Category: {book.category}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        )

    }
 

}
export default SingleBook