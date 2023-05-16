import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import url from './utils/url'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const saveUser = (user) => {
    setUser(user)
  }

  const removeUser = () => {
    setUser(null)
  }

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/api/user/showMe`)
      saveUser(data.user)
      console.log(data.user)
    } catch (error) {
      removeUser()
    }
    setIsLoading(false)
  }

  const logoutUser = async () => {
    try {
      await axios.delete('/api/auth/logout')
      removeUser()
    } catch (error) {
      console.log(error)
    }
  }


  //User
  const fetchUsers = async () => {
    try {
      const instance = axios.create({
        withCredentials: true,
      })
      const { data } = await instance.get(`/api/user`)
      setUsers(data.users)
    } catch (error) {
      setUsers([])
    }
    setIsLoading(false)
  }
  //User
  //User
  useEffect(() => {
    fetchUser()
    fetchUsers()
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
        // users
        users,
        // users

      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }