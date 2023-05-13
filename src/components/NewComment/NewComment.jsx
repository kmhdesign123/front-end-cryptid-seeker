// npm imports
import { useState } from "react"

// css
import styles from './NewComment.module.css'


const NewComment = (props) => {
  const [formData, setFormData] = useState({ text: '' })
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(formData)
    // last 
    setFormData({ text: ''})
  }
  return (
    
  )
}

export default NewComment;