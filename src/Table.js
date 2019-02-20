import React, { Component } from 'react';


const searchUser= pattern =>(item)=>
    item.name.toLowerCase().includes(pattern.toLowerCase());

class Table extends Component{
    render(){
        const { user, pattern, onDismis } = this.props;
        return (
            <div>
                {user.filter(searchUser(pattern)).map(item=> <div key={item.userId}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <a href={item.address}>{item.name}</a>
                    <span>{item.eyecolor}</span>
                    <span>{item.height}</span>
                    <span>
              <button onClick={()=>onDismis(item.userId)} type="button"> DISMISS</button>
            </span> </div>)}
            </div>
        )
    }
}
export default Table;
