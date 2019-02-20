import React, { Component } from 'react';


const searchUser= pattern =>(item)=>
    item.name.toLowerCase().includes(pattern.toLowerCase());

const Table=({ user, pattern, onDismis }) =>
    (<div>
                {user.filter(searchUser(pattern)).map(item=> <div key={item.userId}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <a href={item.address}>{item.name}</a>
                    <span>{item.eyecolor}</span>
                    <span>{item.height}</span>
                    <span>
              <button onClick={()=>onDismis(item.userId)} type="button"> DISMISS</button>
            </span> </div>)}
    </div>)
export default Table;
