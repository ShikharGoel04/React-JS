import React,{Component} from 'react';
import {Card,CardImg,CardTitle,CardBody,CardText} from 'reactstrap';
class DishDetail extends Component{
    constructor(props)
    {
        super(props);
        
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
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
                    const selected=this.props.selectedDish;
                    const comments=this.props.comments;
                    return(
                            <div className="container">
                            <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                    {this.renderDish(selected)}
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <h4>Comments</h4>
                                       {this.renderComments(comments)}
                                        </div>
                            </div>
                            </div>
                        );
                }
            }
export default DishDetail;