import ErrorBox from '../errorBox/errorBox'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './users.css'



export default function Users() {


    const {data , isLoading , isError} = useQuery({
      queryKey:['users'],
      queryFn:()=> axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
    })

    console.log(data)
  
  return (

    isError ? ( <ErrorBox msg={"not found users"}></ErrorBox> ) : (

      <div className='container-users'>
        <div className='usersTable'>

          <div className='user-table-header'>
            <div className='items-users-header'>
              <div className='users-table-item'>Username</div>
              <div className='users-table-item'>Email</div>
              <div className='users-table-item'>phone number</div>
              <div className='users-table-item'>Website</div>
            </div>
          </div>

          <div className='user-table-body'>
            
            
            {
              data ? 
              data.map(item => 
                (
                  <div key={item.id} className='items-users-body'>
                  <div className='users-table-item'>{item.name}</div>
                  <div className='users-table-item'>{item.email}</div>
                  <div className='users-table-item'>{item.phone}</div>
                  <div className='users-table-item'>{item.website}</div>
                  </div>
                )
              )
              : isLoading ? 
              <div className='loading-box-users'>Loading...</div> 
              : null
            }

          </div>

        </div>
      </div>
    )
 
  )
}
