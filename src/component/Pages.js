import React, { useEffect, useState } from 'react'
import '../App.css'

const Pages = () => {
  const [users, setUsers] = useState([])
  const getUser = async () => {
    const responnse = await fetch('https://api.github.com/users')
    setUsers(await responnse.json())
    // console.log(responnse)
    // const data = await responnse.json()
    // console.log(data)
  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <h2>List of GitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((user) => {
            const {
              followers_url,
              login,
              avatar_url,
              following_url,
              subscriptions_url,
              id,
            } = user
            const totalFollower = Object.keys(followers_url).length
            const totalFollowing = Object.keys(following_url).length
            const totalsubs = Object.keys(subscriptions_url).length
            return (
              <div className="col-sm-10 col-md-4 mt-5 " key={id}>
                <div className="card p-2 ">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={avatar_url}
                        className="rounded"
                        width="155"
                        alt="img"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                      {/* <span className="text-left">{type }</span> */}
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Following</span>
                          <span className="number1">{totalFollowing}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">{totalFollower}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Subscription</span>
                          <span className="number3">{totalsubs}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Pages
