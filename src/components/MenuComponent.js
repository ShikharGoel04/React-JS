import React, {Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';
class Menu extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          selectedDish:null,
          comment:null
      }
    }
    onDishSelect(dish)
    {
      this.setState({selectedDish:dish});
      this.setState({comment:dish.comments});
    }
   

    render(){
        const menu=this.props.dishes.map((dish) => {
          return(
              <div className="col-sm-5 mt-5">
                <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
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
                                <div className="row">
                                 <DishDetail selectedDish={this.state.selectedDish} comments={this.state.comment} />
                                  </div>
                            </div>


            );



    }


}


export default Menu;