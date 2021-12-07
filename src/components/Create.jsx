import { KeyboardArrowRight } from "@mui/icons-material"
import { Button, ButtonGroup, Container, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    fontSize: 60,
    backgroundColor: 'red',
    "&:hover": {
      backgroundColor: "blue"
    }
  },
});

const Create = () => {
  const classes = useStyles()
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
        className={classes.root}
        onClick={() => { console.log("clicked") }}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

    </Container>
  )
}

export default Create
