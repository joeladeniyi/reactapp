import React from "react";
import './index.css'

const List = ({people}) =>{
 return(
     <>
     { people.map((person) => {
         const {id, name, time, image}= person;
    return(
        <article key={id} className='person'>
          <image src={image} alt={name}/>
          <div>
              <h4>{name}</h4>
              <p className="time">{time}</p>
              </div>  

        </article>
    )

     }
     
     )}
     
     </>
 );


};

export default List;