import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Navigate, useNavigate } from "react-router-dom"


export default function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(e)
        console.log(email, password)
        const backendUrl = import.meta.env.VITE_BACKEND_URL

        axios.post("http://localhost:3000/api/users/login",{
            email: email,
            password: password
        }  
        ).then((res)=>{
            console.log(res)
            toast.success("Login Success")
            const user = res.data.user
            localStorage.setItem("token",res.data.token)

            if(user.role === "admin"){
                navigate("/admin/")
            }else{
                navigate("/")
            }
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })
    }
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[400px] h-[500px] flex items-center justify-center bg-blue-100"></div>
            <div className="w-[400px] h-[500px] flex items-center justify-center bg-red-300">
                <form onSubmit={handleOnSubmit}>
                    <div className="p-[50px]">
                        <input 
                            type="email" 
                            placeholder="Enter your Email" 
                            className="w-[300px] h-[40px] rounded-md border border-gray-400 text-center mb-[30px]"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}

                        />
                        
                        <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            className="w-[300px] h-[40px] rounded-md border border-gray-400 text-center mb-[40px]"
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />

                        <button className="ml-[10px] bg-accent h-[30px] w-[280px] rounded-md">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}