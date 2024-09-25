import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {postDataUser} from "./redux/postDataUser.js";

const App = () => {
    const dispatch = useDispatch();
    const {register,handleSubmit} =useForm()
    const handleSubmitUser = (data) => {
        dispatch(postDataUser(data))
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitUser)}>
            <input
                placeholder='name'
                {...register('name')}
            />
            <input
                placeholder='firstName'
                {...register('firstName')}

            />
            <input
                placeholder='lastName'
                {...register('lastName')}
            />
            <input
                placeholder='age'
                {...register('age')}
            />
            <button>send</button>
        </form>
    );
};

export default App;