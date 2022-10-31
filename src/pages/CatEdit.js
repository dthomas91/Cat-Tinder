import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const CatEdit = ({cats, updateCat}) => {
  const {id} = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })
  
  const handleChange = (e) => {
    setEditCat({...editCat, [e.target.name]: e.target.value})
  }
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
  }

  


  return(
    <>
      <>CatEdit</>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input type="text" name="enjoys" />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input type="text" name="image" />
          </FormGroup>
          <Button onClick={handleSubmit} name="submit">
            Submit Updated Cat
          </Button>
        </Form>
    </>
  )
}

export default CatEdit