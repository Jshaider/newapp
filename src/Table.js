import React, { Component } from 'react';


const searchUser= pattern =>(item)=>
    item.name.toLowerCase().includes(pattern.toLowerCase());

const Table=({ user, pattern, onDismis }) =>
    (<div className='table'>
                {user.filter(searchUser(pattern)).map(item=> <div key={item.userId} className="table-row">
                    <span style={{ width: '10%' }}>{item.name}</span>
                    <span style={{ width: '10%' }}>{item.age}</span>
                    <span style={{width: '20%'}}><a href={item.address}>{item.name}</a></span>
                    <span style={{ width: '10%' }}>{item.eyecolor}</span>
                    <span style={{ width: '10%' }}>{item.height}</span>
                    <span style={{ width: '10%' }}>
              <button onClick={()=>onDismis(item.userId)} type="button" className="button-inline"> DISMISS</button>
            </span> </div>)}
    </div>)
export default Table;
