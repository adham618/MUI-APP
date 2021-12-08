import { DeleteOutline } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card>
      <CardHeader action={
        <IconButton onClick={() => handleDelete(note.id)}>
          <DeleteOutline />
        </IconButton>}
        title={note.title}
        subheader={note.category}
      >
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color='textSecondary'>
          {note.details}
        </Typography>
      </CardContent>
    </Card >
  )
}

export default NoteCard