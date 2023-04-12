import React from 'react'; 
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container}from "@material-ui/core"; 
import './App.css';

class App extends React.Component {
    constructor(props){ //�Ű����� props ������
        super(props); // �Ű����� pros �ʱ�ȭ
        this.state ={ // item �� item.id, item.title, item.done �Ű����� �̸��� �� �Ҵ�
            items :[
                {id:"todo0", title:"Todo 1 ", done:true},
                {id:"todo1", title:"Todo 2 ", done:false},
            ],
        };
    }
    // add �Լ� �߰�
    add =(item)=>{
        const thisItems =this.state.items;
        item.id ="ID-"+ thisItems.length;//key�� ���� id �߰�
        item.done =false;
        thisItems.push(item);
        this.setState({items:thisItems});//update state
        console.log("items:",this.state.items);

    }
  // delete �Լ� �߰�. (alt+shift+f ������)
    delete =(item)=>{
        const thisItems =this.state.items;
        const newItems = thisItems.filter(e => e.id !== item.id);
        this.setState({items:newItems},()=>{
            //����� �ݹ�
            console.log("Update Items : ",this.state.items)
        });
    }

    render(){
        // todoItems�� this.state.items.length �� 0���� ũ�ٸ� true �̹Ƿ� && �ڿ� ���� �Ѱ��ش�.
        // totoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; �̷��� �ص� ���� ����̴�. �� �Ǽ��ù� ? ternary operator
        var todoItems =this.state.items.length >0 &&(
            <Paper style={{margin:16}}>
                <List>
                {this.state.items.map((item,idx)=>(
                <Todo item={item} key={item.id} delete={this.delete}/>
                ))}
                </List>
            </Paper>
        );
  
          // ������ ������Ʈ JSX�� �����Ѵ�.
        return (
            <div className="App">
                <Container maxWidth="md">
                    <AddTodo add={this.add}/>
                      <div className="TodoList">{todoItems}</div>
                </Container>
            </div>
        );
    }
}
  
export default App;