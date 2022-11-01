import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../stylesheets/catshow.css';
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import '../components/Header'


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
      <div className="catContainer">
      <p>{currentCat && (
        <>
        <div className="catcontent">
          <img className="catpics"
            alt={"picture"}
            src={currentCat.image}
          />
          <br/>
          {currentCat.name}
          <br />
          {currentCat.age}
          <br />
          {currentCat.enjoys}
          </div>
        </>
      )}</p>
    
      <div className="btn">
     <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
      <Button className="button1">Edit Cat Profile</Button>
     </NavLink>
     <NavLink to="/catindex">
      <Button onClick={handleDelete} className="button2">Delete Cat Profile</Button>
    </NavLink>
    </div>
    </div>
    </>
  )
}
export default CatShow