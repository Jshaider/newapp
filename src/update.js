import React,{Component} from 'react';
import logo from './logo.svg';
import './rotate.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Update extends Component{

    constructor(props){
        super(props);
        this.state={
            searchResult:null,
            searchtext:'',
            fieldtext: '',
            toDo: (window.localStorage.length > 0 ? JSON.parse(window.localStorage.toDo) : []),
        };
        this.onClick=this.onClick.bind(this);
        this.onDel=this.onDel.bind(this);
        this.fieldTextUpdate=this.fieldTextUpdate.bind(this);
        this.searchTask=this.searchTask.bind(this);
    }

    fieldTextUpdate(e){
        this.setState({fieldtext:e.target.value});
    }
    onClick(event){
        event.preventDefault();
        const newObj = {
            name: this.title.value,
            key: Date.now(),
        }
        const obj = this.state.toDo;
        this.setState(
            {
                fieldtext:'',
                toDo: [...obj,newObj],
            }
        );
        window.localStorage.toDo = JSON.stringify([...obj,newObj]);
    }

    searchTask(e){
        e.preventDefault();
        console.log(e.target.value);
        const find = e.target.value;
        const data= JSON.parse(window.localStorage.toDo);
        const result=data.filter(item=> item.name.toLowerCase().search(
            find.toLowerCase()) !== -1);
        this.setState({searchResult:result});
    }

    onDel(id){
        const deletedList = this.state.toDo.filter(item=> item.key !== id);
        console.log(deletedList);
        this.setState({
            toDo: deletedList
        });
        window.localStorage.toDo = JSON.stringify(deletedList);
    }
    render(){
        const res =this.state.searchResult;
        return(
            <div style={{marginLeft:470, marginRight:470}}>
                <div className='bg-dark card-body alert'>
                    <h1 className='text-center text-white-50'>Welcome</h1>
                </div>
                <div className='border alert badge-success'>
                    <form onSubmit={this.onClick} className="text-center m-auto small m-md-1" >
                        <span>New Task: </span>
                        <input
                            className='align-content-lg-center small'
                            type="text"
                            ref={(inputField) => this.title = inputField}
                            value={this.state.fieldtext}
                            onChange={this.fieldTextUpdate}
                        />
                        <button type='submit' className='button-active btn-outline-dark btn-sm btn-primary m-md-2'> submit</button>
                    </form>
                    <hr/>
                    <div className='alert align-content-center card-body d-block font-italic border'>
                    <table className='table-striped table-hover m-auto table-bordered small alert'>
                        <thead>
                            <tr className='table-danger text-center'>
                                <th className='px-3'>ID</th>
                                <th className='px-3'>Name</th>
                                <th className='px-3'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.toDo.map(item=>
                            <tr className=' text-center px-2'>
                                <td className='px-3'>{item.key}</td>
                                <td className='px-3'>{item.name}</td>
                                <td onClick={()=>this.onDel(item.key)}>Delete Task</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <form className='text-center m-auto small m-md-3'>
                        <input type='text' onChange={this.searchTask} placeholder='search' className='small'/>
                    </form>
                    </div>
                    <hr/>
                </div>
                <div className='border text-uppercase bg-secondary small alert'>
                    {res != null ? <ul className='list-group-item-dark'>{res.map(item=> <li>{item.name}</li>)}</ul> :<img src={logo} className='App-logo'/>}
                </div>
            </div>
        );
    }
}

export default Update;