import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap';
class DishDetail extends Component{
    constructor(props)
    {
        super(props);
        
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='row'>
                    <div className="col-12 col-md-5 mt-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle heading>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    renderComments(comments){
            if(comments!=null)
            {
                const com= comments.map((comment) => {
            return(
             <div key={comment.id}>
                 <ul class="list-unstyled">
                 <li>{comment.comment}</li>
                 <li>--{comment.author},{comment.date}</li>
                  </ul>
                  </div>
                  
        
        
            );});
       return com;
       }
else{
    return(
        <div></div>
    );
}
    }
        render(){
                    const selected=this.props.dish;
                    return(
                      this.renderDish(selected)
                        );
                }
            }
export default DishDetail;