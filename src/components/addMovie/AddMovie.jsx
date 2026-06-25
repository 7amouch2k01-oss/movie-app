import './AddMovie.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

const AddMovie = ({ onAddMovie }) => {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rate: 1,
    trailer: '',
  })

  const submit = (e) => {
    e.preventDefault() //to prevent page reload on form submission

    const title = form.title.trim()
    const description = form.description.trim()
    const posterUrl = form.posterUrl.trim()
    const trailer = form.trailer.trim()
    const rate = Math.max(1, Math.min(5, Number(form.rate) || 1))

    if (!title || !description || !posterUrl || !trailer) return

    onAddMovie?.({ title, description, posterUrl, rate, trailer })

    setForm({ title: '', description: '', posterUrl: '', rate: 1, trailer: '' })
    setShow(false)
  }

  return (
    <>
      <Button className="add-movie-btn" variant="primary" onClick={() => setShow(true)}>
        Add Movie
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a new film</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={submit} className="add-movie-form">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                value={form.title}
                onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
                type="text"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={form.description}
                onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))}
                required
                rows={3}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Poster URL</label>
              <input
                className="form-control"
                value={form.posterUrl}
                onChange={(e) => setForm((s) => ({ ...s, posterUrl: e.target.value }))}
                type="url"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Rating (1-5)</label>
              <input
                className="form-control"
                value={form.rate}
                onChange={(e) => setForm((s) => ({ ...s, rate: e.target.value }))}
                type="number"
                min={1}
                max={5}
                step={1}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Trailer link</label>
              <input
                className="form-control"
                value={form.trailer}
                onChange={(e) => setForm((s) => ({ ...s, trailer: e.target.value }))}
                type="url"
                required
              />
            </div>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddMovie



