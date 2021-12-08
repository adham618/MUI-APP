import { KeyboardArrowRight } from "@mui/icons-material"
import { Button, ButtonGroup, Container, Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title == "") {
      setTitleError(true)
    }
    if (details == "") {
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details)
    }
  }
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={e => setTitle(e.target.value)}
          sx={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'block'
          }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          error={titleError}
          required
        />
        <TextField
          onChange={e => setDetails(e.target.value)}
          sx={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'block'
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          error={detailsError}
          required
        />
        <Button
          onClick={() => { console.log("clicked") }}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Create
