import React,{Component} from 'react';
import logo from './logo.svg';
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
            <div>
                <img src={logo}/>
                <div className='border'>
                    <form className='text-center m-auto small'>
                        <input type='text' onChange={this.searchTask} placeholder='search' className='small'/>
                    </form>
                    <form onSubmit={this.onClick} className="text-center m-auto small" >
                        <span>New Task: </span>
                        <input
                            className='align-content-lg-center small'
                            type="text"
                            ref={(inputField) => this.title = inputField}
                            value={this.state.fieldtext}
                            onChange={this.fieldTextUpdate}
                        />
                        <button type='submit' className='button-active btn-outline-dark btn-sm btn-primary'> submit</button>
                    </form>
                    <hr/>
                    <div className='align-content-center card-body d-block font-italic border'>
                    <table className='table-striped table-hover m-auto table-bordered small'>
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
                    </div>
                    <hr/>
                </div>
                <div className='border text-uppercase bg-secondary small'>
                    {res != null ? <ul className='list-group-item-dark'>{res.map(item=> <li>{item.name}</li>)}</ul> :<h4> search result </h4>}
                </div>
            </div>
        );
    }
}

export default Update;