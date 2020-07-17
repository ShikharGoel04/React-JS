import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class Menu extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        const menu=this.props.dishes.map((dish) => {
          return(
              <div key={dish.id} className="col-sm-5 mt-5">
                <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  
              </Card>
            </div>
        );
        
        });
            return(
                        <div className="conainer">
          +                  <div className="row">
                                {menu}
                                </div>
                            </div>


            );



    }


}


export default Menu;