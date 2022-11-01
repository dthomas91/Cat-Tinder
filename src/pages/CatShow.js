import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../stylesheets/catshow.css';
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";


const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)

  const navigate = useNavigate()

  const handleDelete = () => {
    deleteCat(id)
    navigate("/catindex")
  }

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
     <NavLink to="/catindex">
      <Button onClick={handleDelete}>Delete Cat Profile</Button>
    </NavLink>
    </>
  )
}
export default CatShow