import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Menu extends Component{
  
    render(){
        const menu=this.props.dishes.map((dish) => {
          return(
              <div className="col-sm-5 mt-5">
                <Card key={dish.id} onClick={()=>this.props.onClick(dish.id)}>
                  <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
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