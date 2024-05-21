import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import axios from 'axios'

const Regsiter = () => {
  const {emails, setEmails} = useState('')
  const {passwords, setPasswords} = useState('')
  const onClickSubmmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/register', emails, passwords)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <Form onClick={onClickSubmmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="form-control"
          onChange={e => setEmails(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={e => setPasswords(e.target.value)}
        />
      </Form.Group>
      <button type="submit">submit</button>
    </Form>
  )
}

export default Regsiter
