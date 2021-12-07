import { Button, ButtonGroup, Container, Typography } from "@mui/material"

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => { console.log("clicked") }}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

    </Container>
  )
}

export default Create
