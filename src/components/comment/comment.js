import React from 'react';
import ErrorBox from '../errorBox/errorBox';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './comment.css'

export default function Comment() {

  const {data , isLoading , isError} = useQuery({
      queryKey:['users'],
      queryFn:()=> axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.data)
  })

 

  return (  
        isError ? <ErrorBox msg={"no comment"}></ErrorBox> : 

          <div className='comment-container'>
            {
              data ? 
              data.map(item => 
                (
                  <div className='comment'>
                    <h1 className='email-comment'>{item.email}</h1>
                    <h1 className='text-comment'>{item.body}</h1>
                  </div>
                )
              )
              : isLoading ? 
              (
                <div className='loading-box-users'>Loading...</div> 
              )
              : null
            }
          </div>
  )
}
