import React ,{Component} from 'react';
import TodoItems from "./TodoItems";
import "./todoList.css";

class TodoList extends Component{
    constructor(props){
        super(props)

        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){

        if(this._inputElement.value !== "" ){
            var newItem = {
                text: this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState) => {

                return{
                    items: prevState.items.concat(newItem)
                };

            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    render(){
        return(
            <div className="MainList">
                <div className="header">
                    <h3>Todo App</h3>
                    <form onSubmit={this.addItem}>
                    <input ref={(a)=>this._inputElement = a} type="text" placeholder="Enter Task"/>
                    <button type="submit">Add</button>
                    </form>
                    <TodoItems entries = {this.state.items}
                                delete = {this.deleteItem} />
                </div>
                <footer>Made with <span>&hearts;</span></footer>
            </div>
        )
    }
}

export default TodoList;