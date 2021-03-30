import React from 'react';

export default function Datatable({data})
{
    return(
        <div>
            {
                data.map((person, index)=>{
                    return(
                        <div key={index}>
                            <h3>{person.name.first} {person.name.last}</h3>
                            <p>gender: {person.gender}</p>
                            <p>email: {person.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
