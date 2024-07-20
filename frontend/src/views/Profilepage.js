

import { useState, useEffect } from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom'


function Profilepage() {

    const [res, setRes] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    if (token){
        const decode = jwtDecode(token)
        var user_id = decode.user_id
        var username = decode.username
        var full_name = decode.full_name
        var image = decode.image
        var bio = decode.bio
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/")
                setRes(response.data.response)
            } catch (error) {
                console.log(error);
                setRes("Something went wrong")
            }
        }
        fetchData()
    }, [])




    return (
        <div>
            <div className="container-fluid" style={{ paddingTop: "100px" }}>
                Profile Page
                <div className="row">
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <h1>{username}'s! </h1>
                        <div className='alert alert-success'>
                            <strong>Full Name: {full_name}</strong>
                        </div>
                        <div className='alert alert-warning'>
                            <strong>Biography: {bio}</strong>
                        </div>
                        <div className='alert alert-dark'>
                            <strong>Username: {username}</strong>
                        </div>
                        <div className='alert alert-dark'>
                            <img src={image} class="img-fluid" alt="..." />
                        </div>

                    </main>
                </div>
            </div>
            
        </div>
    )
}





export default Profilepage
