import React,{Component} from 'react';
import {Card,CardTitle,CardBody,CardText} from 'reactstrap';
class DishDetail extends Component{
    constructor(props)
    {
        super(props);
        
    }
     renderDish(dish){
           if(dish!=null)
            {
                return(
                <Card>

            <CardTitle>{dish.name}</CardTitle>
            <CardText>
                {dish.description}
                </CardText>
                    </Card>
                );

            }
            
            else
            {
                return(
                <div></div>
                );
            }
    }
        render(){
            const selected=this.props.selectedDish;
            const dish=this.props.dishes;
            return(
                <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">

                                </div>
                                <div className="col-12 col-md-5 m-1">

                                </div>
                    </div>
                    </div>
                );
                }

            }
export default DishDetail;