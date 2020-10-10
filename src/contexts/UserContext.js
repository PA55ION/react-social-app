import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    // const [isLoading, setIsLoading] = useState(false)
    // const [isError, setIsError] = useState(false)
    // const [url, setUrl] = useState('https://randomuser.me/api/?results=50')

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsError(false)
    //         setIsLoading(true)

    //         try {
    //             const data = await axios(url)
    //             setUsers(data.users.results)
    //         }
    //         catch(err) {
    //             setIsError(true)
    //         }
    //         setIsLoading(false)
    //     }
    //     fetchData()
    // }, [url])


    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50&seed=abc&inc=gender,name,location,email,dob,phone,cell,id,picture,info,nat&nat=us')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }, [])


    return(
        <UserContext.Provider value={{ users }}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, ContextProvider }