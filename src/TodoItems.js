import React,{Component} from 'react';
import './todoItems.css';

class TodoItems extends Component{
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }

     

    createTasks(items){
        return <li onClick={()=>this.delete(items.key)} 
        key={items.key}>{items.text}</li>
    }
    render(){
        var TodoItems = this.props.entries;
        var listItems = TodoItems.map(this.createTasks);

        return(
            <div className="items">
                <ul className="lists">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default TodoItems;