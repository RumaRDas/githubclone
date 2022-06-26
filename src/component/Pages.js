import React, { useEffect, useState } from 'react'
import '../App.css'
import Loading from './loading/Loading'
import Users from './users/Users'

const Pages = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUser = async () => {
    try {
      const responnse = await fetch('https://api.github.com/users')
      setLoading(false)
      setUsers(await responnse.json())

      // console.log(responnse)
      // const data = await responnse.json()
      // console.log(data)
    } catch (error) {
      setLoading(false)
      console.log('github user projects error:', error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Users users={users} />
    </>
  )
}

export default Pages
