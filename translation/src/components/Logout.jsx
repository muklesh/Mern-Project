import React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Logout() {

    const navigate = useNavigate();

    const logout = async () => {
        try{
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res){
                window.alert("Please LOgout Later");
            }else{
                navigate.push('/');
                window.location.reload()
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        logout();
    }, []);

  return (
    <div>

    </div>
  )
}
