import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import '../stylesheets/catnew.css'

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <>
    <div className="bodycontainer">
    <h1>Create Cat Profile</h1>
      <Form>
        <FormGroup>
          <Label for="name" className="label">Name</Label>
          <Input type="text" name="name" placeholder="What is your name?" onChange={handleChange} value={newCat.name} />
        </FormGroup>
        <FormGroup>
          <Label for="age" className="label">Age</Label>
          <Input type="number" name="age" placeholder="How old are you?" onChange={handleChange} value={newCat.age} />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys" className="label">Enjoys</Label>
          <Input type="text" name="enjoys" placeholder="What do you ennjoy?" onChange={handleChange} value={newCat.enjoys} />
        </FormGroup>
        <FormGroup>
          <Label for="image" className="label">Image</Label>
          <Input type="url" name="image" placeholder="Upload a photo of you!" onChange={handleChange} value={newCat.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit" className="button1">
          Submit Cat
        </Button>
      </Form>
      </div>
    </>
  )
}

export default CatNew