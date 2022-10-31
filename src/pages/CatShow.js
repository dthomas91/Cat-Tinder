import React from "react";
import { useParams } from 'react-router-dom';
import '../stylesheets/catshow.css';
import { NavLink } from "react-router-dom";

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)
  return (
    <>
      <p>{currentCat && (
        <>
          <img
            alt={"picture"}
            src={currentCat.image}
          />
          {currentCat.name}
          <br />
          {currentCat.age}
          <br />
          {currentCat.enjoys}
        </>
      )}</p>
     <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
      Edit Cat Profile
     </NavLink>
    </>
  )
}
export default CatShow