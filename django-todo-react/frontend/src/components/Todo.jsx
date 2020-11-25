import React from "react";
import { Container, Card, CardContent, Typography } from "@material-ui/core";

const Todo = () => {
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ color: "black", marginTop: 10, background: "grey" }}
        >
          <CardContent>
            <Typography variant="h5">Coursera GAN</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
