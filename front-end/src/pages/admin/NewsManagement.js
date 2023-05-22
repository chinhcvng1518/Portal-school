import axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useLocalState from '../../utils/localState'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import ImageUploader from "quill-image-uploader";


const NewsManagement = () => {
  const [news, setNews] = useState()
  const [selectedNew, setSelectedNew] = useState([])

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [category, setCategory] = useState()
  const [code, setCode] = useState()
  const [image, setImage] = useState([])
  const [content, setContent] = useState([])

  const [imageUrls, setImageUrls] = useState([])
  const [tmpImgs, setTmpImgs] = useState([])
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState()

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/new')
      .then((response) => {
        setNews(response.data.news)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleEditNew = (e) => {
    e.preventDefault()
    hideAlert()
    setLoading(true)
    const url = `http://localhost:5000/api/new/${selectedNew._id}`
    const instance = axios.create({
      withCredentials: true,
    })
    instance
      .patch(url, {
        title,
        author,
        category,
        content,
        code,
        
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

    const url = `http://localhost:5000/api/new/${selectedNew._id}`

    const instance = axios.create({
      withCredentials: true,
    })

    instance
      .delete(url)
      .then((response) => {
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
      .post('http://localhost:5000/api/new', {
        title,
        author,
        category,
        content,
        code,
        image: imageUrls,
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

    if (!code) {
      showAlert({ text: 'Please provide product code first' })
      setTimeout(() => hideAlert(), 3000)
    }

    if (!image || image.length < 1) {
      showAlert({ text: 'Please choose images to upload' })
      setTimeout(() => hideAlert(), 3000)
    }

    let data = new FormData()

    Array.from(image).forEach((img) => {
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
        `http://localhost:5000/api/new/upload-new-image/${code}`,
        data
      )
      .then((response) => {
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

    let url = `http://localhost:5000/api/new/delete-image/${newCode}`
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
   }

  if (!news) return null

  return (
    <Wrapper>
      <section className='section-center'>
        <button
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#addModal'
        >
          Tạo bài viết
        </button>
        <br/><br/>
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
                    Tạo bài viết 
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
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <label for='floatingInput'>Tiêu đề</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <label for='floatingInput'>Code</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        id='floatingName'
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                      <label for='floatingName'>Tác giả</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <ReactQuill value={content} onChange={setContent} modules={modules} />                    
                    </div>
                    <div className='form-floating mb-3'>
                
                      <select
                          id='floatingBrand'
                          name='floatingBrand'
                          className='form-control'
                          value={selectedNew.category}
                          
                          onChange={(e) => {
                            setCategory(category)
                          }}
                        >
                            <option value={"Tuyển sinh - Đào tạo"}>Tuyển sinh - Đào tạo</option>
                            <option value={"Tin tức - Sự kiện"}>Tin tức - Sự kiện</option>
                            <option value={"Hoạt động quốc tế"}>Hoạt động quốc tế</option>
                            <option value={"Nổi bật"}>Nổi bật</option>                          
                        </select>
                      <label for='floatingBrand'>Phân loại</label>
                      
                    </div>

                    <div className='form-floating mb-3'>
                      <form>
                        <div className='form-control'>
                          <input
                            type='file'
                            name='image'
                            id='image'
                            multiple
                            onChange={(e) => setImage(e.target.files)}
                          />

                          <button
                            type='submit'
                            className='btn btn-primary'
                            onClick={handleUploadImage}
                          >
                            Tải lên
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
                      Đóng
                    </button>
                    <button type='submit' className='btn btn-primary'>
                      Lưu
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
              <th scope='col'>Tiêu đề</th>
              <th scope='col'>Tác giả</th>
              <th scope='col'>Hình ảnh</th>
              <th scope='col'>Phân loại</th>
              <th scope='col'>Hành động</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {news.map((val, index) => (
              <tr>
                <th scope='row'>{index + 1} </th>
                <td style={{ verticalAlign: 'middle' }}>{val.title}</td>
                <td style={{ verticalAlign: 'middle' }}>{val.author}</td>
                <td><img src={val.image[0]} width='20%'/></td>
                <td style={{ verticalAlign: 'middle' }}>{val.category}</td>
        
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
                    Sửa
                  </button>
                  <button
                    className='btn btn-danger'
                    data-bs-toggle='modal'
                    data-bs-target='#deleteModal'
                    onClick={() => setSelectedNew(val)}
                  >
                    Xóa
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
                      Cập nhật bài viết {selectedNew.title}
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
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <label for='floatingInput'>Tiêu đề</label>
                      </div>
                      <div className='form-floating mb-3'>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        disabled
                        onChange={(e) => setCode(e.target.value)}
                      />
                      <label for='floatingInput'>Code</label>
                    </div>
                      <div className='form-floating mb-3'>
                        <input
                          type='text'
                          className='form-control'
                          id='floatingName'
                          defaultValue={selectedNew.author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                        <label for='floatingName'>Tác giả</label>
                      </div>
                      <div className='form-floating mb-3'>
                        <ReactQuill theme='snow' value={selectedNew.content} onChange={setSelectedNew.content} modules={modules} />
                      </div>
                      <div className='form-floating mb-3'>
                        <select
                          id='floatingBrand'
                          name='floatingBrand'
                          className='form-control'
                          value={selectedNew.category}
                          disabled
                          onChange={(e) => {
                            setCategory(category)
                          }}
                        >
                            <option value={"Tuyển sinh - Đào tạo"}>Tuyển sinh - Đào tạo</option>
                            <option value={"Tin tức - Sự kiện"}>Tin tức - Sự kiện</option>
                            <option value={"Hoạt động quốc tế"}>Hoạt động quốc tế</option>
                            <option value={"Nổi bật"}>Nổi bật</option>                          
                        </select>
                        <label for='floatingBrand'>Phân loại</label>
                      </div>

                      <div className='form-floating mb-3'>
                        <label>Hình ảnh</label>
                        <br />
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
                      Bạn muốn xóa <br/>
                      {selectedNew.title ? selectedNew.title : '?'}?
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
                      Đóng
                    </button>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={handleDeleteNew}
                    >
                      Xóa
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
const Wrapper = styled.section`
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