import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminOrdersPage from "./AdminOrdersPage";
import AdminUsersPage from "./AdminUsersPage";
import AdminItemsPage from "./AdminItemsPage";
import AddItemPage from "./AddItemPage";
import UpdateItemPage from "./UpdateItemPage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage(){
    const [userValidated, setUserValidated] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            window.location.href = "/login"
        }
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res.data)
            const user = res.data
            if(user.role == "admin"){
                setUserValidated(true)
            }else{
                window.location.href = "/"
            }
        }).catch((err)=>{
            console.log(err)
            setUserValidated(false)
        })
    },[])

    return(
        <div className="w-full h-screen flex relative">
            <div className="w-[200px] h-full fixed bg-accent">
               <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-secondary">
                <BsGraphDown/>
                Dashboard
                </button>
                <Link to="/admin/orders" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-secondary">
                <FaRegBookmark/>
                Orders
                </Link> 
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-secondary">
                <MdOutlineSpeaker/>
                Items
                </Link> 
                <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center text-secondary">
                <FaRegUser/>
                Users
                </Link>  
            </div>
            <div className="w-[calc(100vw-200px)] absolute left-[200px]">
                {userValidated&&<Routes path="/*">
                    <Route path="/orders" element={<AdminOrdersPage/>}/>
                    <Route path="/users" element={<AdminUsersPage/>}/>
                    <Route path="/items" element={<AdminItemsPage/>}/>
                    <Route path="/items/add" element={<AddItemPage/>}/>
                    <Route path="/items/edit" element={<UpdateItemPage/>}/>
                </Routes>}
            </div>
        </div>
        
    )
}