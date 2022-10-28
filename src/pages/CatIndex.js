import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import '../stylesheets/catindex.css'

const CatIndex = ({ cats }) => {
  return(
      <main>
          {cats?.map((cat, index) => {
              return (
                  <Card
                      style={{
                      width: "14rem"
                    }}
                      key={index}
                    >
                       <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
                      <CardBody>
                        <CardTitle tag="h5"><Button>{cat.name}</Button></CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Age: {cat.age}
                          </CardSubtitle>
                        </CardBody>
                    </Card>
                )
            })}

        </main>

    )
}
export default CatIndex