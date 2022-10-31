import React from "react";
import { useParams } from 'react-router-dom';
import '../stylesheets/catshow.css';

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
    </>
  )
}
export default CatShow