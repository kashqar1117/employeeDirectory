import React from 'react';

export default function Datatable({data})
{
    return(
        <div className="personDiv" style={{display:'inline'}}>
            {
                data.map((person, index)=>{
                    return(

                        <div key={index}>
                        <div className = "row">
                            <div className="three columns">
                            <h3>{person.name.first} {person.name.last}</h3></div>

                            <div className="six columns">
                            <p>gender: {person.gender}</p>
                            </div>

                            <div className="three columns">
                            <p>email: {person.email}</p>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
