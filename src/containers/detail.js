import React from 'react';
import { connect } from 'react-redux';
class Detail extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <h2>Details Added!!</h2>
               <h4>{this.props.firstname}
                {this.props.lastname}
                @{this.props.score}</h4>
            </div>
         );
    }
}
function convertStoreToPropsForFriendDetail(store){
    console.log("Detail has received store....")
    console.log(store);
    return {
        firstname: store.firstname,
        lastname:store.lastname,
        score:store.score
    
    }
}
 
export default connect(convertStoreToPropsForFriendDetail)(Detail);