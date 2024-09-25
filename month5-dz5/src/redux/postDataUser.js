import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const postDataUser = createAsyncThunk(
    'postDataUser',
    async (data)  => {
        console.log(data)
        await axios.post('https://66f3e9ed77b5e88970977490.mockapi.io/users',data )
    }
)
