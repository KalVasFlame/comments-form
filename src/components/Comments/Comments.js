import { Button } from "@material-ui/core"

import Comment from "./Comment"

export default function Comments({ comments, onShowMoreClick, isMore, onBackBtnClick, onNextBtnClick }) {
  return (
    <ul>
      {comments &&
        comments.map(({ id, name, text }) => {
          return <Comment key={id} name={name} text={text} />
        })}
      {isMore && (
        <Button variant="contained" color="primary" onClick={onShowMoreClick} type="button">
          Показать еще
        </Button>
      )}
      <Button variant="contained" color="primary" type="button" onClick={onBackBtnClick}>
        Назад
      </Button>
      <Button variant="contained" color="primary" type="button" onClick={onNextBtnClick}>
        Вперед
      </Button>
    </ul>
  )
}
