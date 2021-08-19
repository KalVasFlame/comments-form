import { TextField, Button } from "@material-ui/core"
import { useState } from "react"

export default function CommentsForm({ onCommentSubmit }) {
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const onChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        setName(value)
        break
      case "text":
        setText(value)
        break
      default:
        console.warn(`Тип поля - ${name} не обрабатывается`)
    }
  }

  const resetState = () => {
    setName("")
    setText("")
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    onCommentSubmit({ name, text })
    resetState()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextField required name="name" type="text" label="Name" value={name} onChange={onChange} />
      <textarea
        required
        placeholder="leave your comment"
        name="text"
        label="Comment"
        value={text}
        onChange={onChange}
      />

      <Button variant="contained" color="primary" type="submit">
        Оставить комментарий
      </Button>
    </form>
  )
}
