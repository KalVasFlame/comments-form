import { useState, useEffect } from "react"

import Comments from "./components/Comments"
import CommentsForm from "./components/CommentsFrom"
import serviceApi from "./service/Api"

import "./App.css"

function App() {
  const [comments, setComments] = useState([])
  const [page, setPage] = useState(76)
  const [isMore, setIsMore] = useState(true)
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await serviceApi.getComments(page)
        setLastPage(response.last_page)
        setComments((prev) => [...prev, ...response.data])
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  const checkMoreComments = (page, lastPage) => {
    if (page === lastPage) {
      return setIsMore(false)
    }
    return setIsMore(true)
  }

  const onCommentSubmit = async (comment) => {
    try {
      await serviceApi.postComment(comment)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onShowMoreClick = async () => {
    setPage((prev) => ++prev)
    checkMoreComments(page, lastPage)
    const response = await serviceApi.getComments(page)
    setComments((prev) => [...prev, ...response.data])
  }

  const onBackBtnClick = async () => {
    setPage((prev) => --prev)
    setComments([])
    const response = await serviceApi.getComments(page)
    setComments([...response.data])
  }
  const onNextBtnClick = async () => {
    setPage((prev) => ++prev)
    setComments([])
    const response = await serviceApi.getComments(page)
    setComments([...response.data])
  }

  return (
    <>
      <CommentsForm onCommentSubmit={onCommentSubmit} />
      <Comments
        comments={comments}
        onNextBtnClick={onNextBtnClick}
        onBackBtnClick={onBackBtnClick}
        onShowMoreClick={onShowMoreClick}
        isMore={isMore}
      />
    </>
  )
}

export default App
