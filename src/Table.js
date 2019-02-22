import React, { Component } from 'react';




const Table=({ user, pattern, onDismis }) =>
    (<div className='table'>
                {user.map(item=> <div key={item.created_at} className="table-row">
                    <span style={{ width: '20%' }}>{item.title}</span>
                    <span style={{ width: '10%' }}>{item.author}</span>
                    <span style={{width: '30%'}}><a href={item.url}>{item.title}</a></span>
                    <span style ={{width: '30%'}}> {item.objectID}</span>
              <span><button onClick={()=>onDismis(item.objectID)} type="button" className="button-inline"> DISMISS</button>
            </span> </div>)}
    </div>)
export default Table;
