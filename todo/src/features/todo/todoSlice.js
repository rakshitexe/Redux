import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk('fetchTodos',async () => {
    const response= await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json();
})

// const initialState={
//     todos:[{id:1,text:"Hello world"}]
// }

export const todoSlice = createSlice({
    name :'todo',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    reducers:{
        addTodo: (state, action) => {
            const todo={id:nanoid(),text:action.payload}
            state.todos.push(todo)      
        },
        removeTodo:(state,action) => {
        state.todos= state.todos.filter((todo)=> todo.id !== action.payload )
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state,action) =>{
            state.isLoading=true;
        })
        builder.addCase(fetchTodos.fulfilled, (state,action) =>{
            state.isLoading=false;
            state.data=action.payload;
        })
         builder.addCase(fetchTodos.rejected, (state,action) =>{
            state.isLoading=false;
            state.isError=true;
        })
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

