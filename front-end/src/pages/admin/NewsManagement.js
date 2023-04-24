import axios from 'axios'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useLocalState from '../../utils/localState'
const NewsManagement = () => {
  const [news, setNews] = useState()
  const [selectedNew, setSelectedNew] = useState([])

  const [proTitle, setProTitle] = useState()
  const [proAuthor, setProAuthor] = useState()
  const [proCategory, setProCategory] = useState()
  const [proCode, setProCode] = useState()
  const [proImage, setProImage] = useState([])
    const [proContent, setProContent] = useState([])

  const [imageUrls, setImageUrls] = useState([])
  const [tmpImgs, setTmpImgs] = useState([])


  const category = [
    { key: 1, value: 'Tuyển sinh - Đào tạo' },
    { key: 2, value: 'Tin tức sự kiện' },
    { key: 3, value: 'Hoạt động quốc tế' },
    { key: 4, value: 'Nổi bật' },
  ]

  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/new')
      .then((response) => {
        setNews(response.data.news)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

//   const handleUploadImage = (e) => {
//     e.preventDefault()
//     hideAlert()
//     setLoading(true)

//     // console.log(proImage)

//     if (!proCode) {
//       showAlert({ text: 'Please provide news code first' })
//       setTimeout(() => hideAlert(), 3000)
//     }

//     if (!proImage || proImage.length < 1) {
//       showAlert({ text: 'Please choose images to upload' })
//       setTimeout(() => hideAlert(), 3000)
//     }

//     let data = new FormData()

//     Array.from(proImage).forEach((img) => {
//       data.append('image', img)
//     })

//     const instance = axios.create({
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })

//     instance
//       .post(
//         `http://localhost:5000/api/v1/product/upload-product-image/${proCode}`,
//         data
//       )
//       .then((response) => {
//         // console.log(response.data)
//         setImageUrls(response.data.result)
//         showAlert({
//           text: 'Upload Image Successfully',
//           type: 'success',
//         })
//         setTimeout(() => hideAlert(), 3000)
//         setLoading(false)
//       })
//       .catch((error) => {
//         showAlert({ text: error.response.data.msg })
//         setTimeout(() => hideAlert(), 3000)
//         setLoading(false)
//       })
//   }

  const handleEditNew = (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const url = `http://localhost:5000/api/v1/new/${selectedNew._id}`
    const instance = axios.create({
      withCredentials: true,
    })
    instance
      .patch(url, {
        title: proTitle,
        author: proAuthor,
        category: proCategory,
        content: proContent,
        code: proCode,
      })
      .then((response) => {
        showAlert({
          text: 'Update New Successfully',
          type: 'success',
        })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
        window.location.reload(false)
      })
      .catch((error) => {
        showAlert({ text: error.response.data.msg })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })
  }

  const handleDeleteNew = (e) => {
    e.preventDefault()
    // console.log(selectedProduct.id)

    const url = `http://localhost:5000/api/v1/new/${selectedNew._id}`

    const instance = axios.create({
      withCredentials: true,
    })

    instance
      .delete(url)
      .then((response) => {
        // console.log(response.data)
        showAlert({
          text: 'Upload New Successfully',
          type: 'success',
        })
        setTimeout(() => hideAlert(), 3000)
        window.location.reload(false)
      })
      .catch((error) => {
        showAlert({ text: error.response.data.msg })
        setTimeout(() => hideAlert(), 3000)
        // console.log(error)
      })
  }

  const handleAddNew = (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)


    const instance = axios.create({
      withCredentials: true,
    })

    instance
      .post('http://localhost:5000/api/v1/new', {
        title: proTitle,
        author: proAuthor,
        category: proCategory,
        content: proContent,
        code: proCode,
      })
      .then((response) => {
        showAlert({
          text: 'Add New Successfully',
          type: 'success',
        })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
        window.location.reload(false)
      })
      .catch((error) => {
        showAlert({ text: error.response.data.msg })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })
  }
  const handleUploadImage = (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)

    // console.log(proImage)

    if (!proCode) {
      showAlert({ text: 'Please provide product code first' })
      setTimeout(() => hideAlert(), 3000)
    }

    if (!proImage || proImage.length < 1) {
      showAlert({ text: 'Please choose images to upload' })
      setTimeout(() => hideAlert(), 3000)
    }

    let data = new FormData()

    Array.from(proImage).forEach((img) => {
      data.append('image', img)
    })

    const instance = axios.create({
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    instance
      .post(
        `http://localhost:5000/api/v1/new/upload-new-image/${proCode}`,
        data
      )
      .then((response) => {
        // console.log(response.data)
        setImageUrls(response.data.result)
        showAlert({
          text: 'Upload Image Successfully',
          type: 'success',
        })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })
      .catch((error) => {
        showAlert({ text: error.response.data.msg })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })
  }

  const handleDeleteImage = (e, imgurl, newCode) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)

    const instance = axios.create({
      withCredentials: true,
    })

    let url = `http://localhost:5000/api/v1/new/delete-image/${newCode}`
    let data = { imageURL: imgurl }

    instance
      .delete(url, { data: data })
      .then((resp) => {
        setSelectedNew(resp.data.news)
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })
      .catch((error) => {
        showAlert({ text: error.response.data.msg })
        setTimeout(() => hideAlert(), 3000)
        setLoading(false)
      })

//     console.log(url, newsCode)
   }

  if (!news) return null
  // console.log(products)
  // console.log(selectedProduct)
  return (
    <Wrapper>
      <section className='section section-center page'>
        <button
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#addModal'
        >
          Add new 
        </button>
        <div>
          {/* <!-- Modal --> */}
          <div
            className='modal fade'
            id='addModal'
            tabindex='-1'
            aria-labelledby='addModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Add new 
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <form
                  onSubmit={handleAddNew}
                  className={loading ? 'form form-loading' : 'form'}
                >
                  <div className='modal-body'>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingInput'
                        onChange={(e) => setProTitle(e.target.value)}
                      />
                      <label for='floatingInput'>Title</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        onChange={(e) => setProCode(e.target.value)}
                      />
                      <label for='floatingInput'>Code</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingName'
                        onChange={(e) => setProAuthor(e.target.value)}
                      />
                      <label for='floatingName'>Author</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingContent'
                        onChange={(e) => setProContent(e.target.value)}
                      />
                      <label for='floatingContent'>Content</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <select
                        id='floatingBrand'
                        name='floatingBrand'
                        className='form-control'
                        onChange={(e) => {
                          const selectedCategory = e.target.value
                          setProCategory(selectedCategory)
                        }}
                      >
                        <option selected>
                          <p className='text-muted'>Select category</p>
                        </option>
                        {category.map((unit) => (
                          <option value={unit.value}>{unit.value}</option>
                        ))}
                      </select>
                      <label for='floatingBrand'>category</label>
                    </div>

                    <div className='form-floating mb-3'>
                      <form>
                        <div className='form-control'>
                          <input
                            type='file'
                            name='image'
                            id='image'
                            multiple
                            onChange={(e) => setProImage(e.target.files)}
                          />

                          <button
                            type='submit'
                            className='btn btn-primary'
                            onClick={handleUploadImage}
                          >
                            Upload
                          </button>
                        </div>
                      </form>

                      {alert.show && (
                        <div className={`alert alert-${alert.type}`}>
                          {alert.text}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='submit' className='btn btn-primary'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <table className='table table-hover'>
          <thead style={{ textAlign: 'center' }}>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Author</th>
              <th scope='col'>Category</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {news.map((val, index) => (
              <tr>
                <th scope='row'>{index + 1} </th>
                <td style={{ verticalAlign: 'middle' }}>{val.title}</td>
                <td style={{ verticalAlign: 'middle' }}>{val.author}</td>
                <td style={{ verticalAlign: 'middle' }}>{val.category}</td>
                <td>
                  {/* <img src={val.image[]} alt='new-img' width='20%' /> */}
                </td>
                <td
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '50% 50%',
                    verticalAlign: 'middle',
                  }}
                >
                  <button
                    className='btn btn-warning me-3'
                    data-bs-toggle='modal'
                    data-bs-target='#editModal'
                    onClick={() => {
                      setSelectedNew(val)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    data-bs-toggle='modal'
                    data-bs-target='#deleteModal'
                    onClick={() => setSelectedNew(val)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/* <!-- Edit Modal --> */}
            <div
              className='modal fade'
              id='editModal'
              tabindex='-1'
              aria-labelledby='editModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>
                      Update news {selectedNew.title}
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <form
                    onSubmit={handleEditNew}
                    className={loading ? 'form form-loading' : 'form'}
                  >
                    <div className='modal-body'>
                      <div className='form-floating mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='floatingInput'
                          defaultValue={selectedNew.title}
                          onChange={(e) => setProTitle(e.target.value)}
                        />
                        <label for='floatingInput'>Title</label>
                      </div>
                      <div className='form-floating mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        disabled
                        onChange={(e) => setProCode(e.target.value)}
                      />
                      <label for='floatingInput'>Code</label>
                    </div>
                      <div className='form-floating mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='floatingName'
                          value={selectedNew.author}
                          onChange={(e) => setProAuthor(e.target.value)}
                        />
                        <label for='floatingName'>Author</label>
                      </div>
                      <div className='form-floating mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='floatingContent'
                          defaultValue={selectedNew.content}
                          onChange={(e) => setProContent(e.target.value)}
                        />
                        <label for='floatingContent'>Content</label>
                      </div>
                      <div className='form-floating mb-3'>
                        <select
                          id='floatingBrand'
                          name='floatingBrand'
                          className='form-control'
                          value={selectedNew.category}
                          disabled
                          onChange={(e) => {
                            const selectedCategory = e.target.value
                            setProCategory(selectedCategory)
                          }}
                        >
                          <option selected>
                            <p className='text-muted'>Select category</p>
                          </option>
                          {category.map((unit) => (
                            <option value={unit.value}>{unit.value}</option>
                          ))}
                        </select>
                        <label for='floatingBrand'>category</label>
                      </div>

                      <div className='form-floating mb-3'>
                        <label>Image</label>
                        <br />
                        <div className='images' id='floatingImage'>
                          {selectedNew.image
                            ? selectedNew.image.map((url) => (
                                <div className='imagewrap'>
                                  <img src={url}></img>
                                  <button
                                    className='btn'
                                    onClick={(e) =>
                                      handleDeleteImage(
                                        e,
                                        url,
                                        selectedNew.code
                                      )
                                    }
                                  >
                                    <i class='fa fa-close'></i>
                                  </button>
                                </div>
                              ))
                            : '?'}
                        </div>
                      </div>
                    </div>
                    {alert.show && (
                      <div className={`alert alert-${alert.type}`}>
                        {alert.text}
                      </div>
                    )}
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                      <button type='submit' className='btn btn-primary'>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- Delete Modal --> */}
            <div
              className='modal fade'
              id='deleteModal'
              tabindex='-1'
              aria-labelledby='deleteModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='deleteModalLabel'>
                      You want to delete
                      {selectedNew.title ? selectedNew.title : '?'}
                    </h5>

                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>
                    <div>
                      <p>{selectedNew.code ? selectedNew.code : '?'}</p>
                    </div>
                    <div>
                      <p>
                        {selectedNew.title ? selectedNew.title : '?'}
                      </p>
                    </div>
                    {alert.show && (
                      <div className={`alert alert-${alert.type}`}>
                        {alert.text}
                      </div>
                    )}
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={handleDeleteNew}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .alert {
    margin-top: 3rem;
  }
  .imagewrap {
    display: inline-block;
    position: relative;
    width: 33.33%;
    float: left;
  }
  .imagewrap img {
    width: 100%;
    height: auto;
  }
  .imagewrap button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .modal-footer alert {
    clear: both;
  }
`

export default NewsManagement