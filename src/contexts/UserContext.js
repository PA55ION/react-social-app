import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    // const [isError, setIsError] = useState(false)
    const [url, setUrl] = useState('https://randomuser.me/api/?results=50&seed=abc&inc=gender,name,location,email,dob,phone,cell,id,picture,info,nat&nat=us')

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsError(false);
    //         setIsLoading(true);

    //         try {
    //             const result = await axios(url);
    //             // const data = await axios result.json()
    //             setUsers(result.users.results)
    //         }
    //         catch(err) {
    //             setIsError(true)
    //         }
    //         setIsLoading(false)
    //     }
    //     fetchData();
    // }, [url])

    // console.log(users)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setUsers(data.results)
            setIsLoading(true)
        })
    }, [url])

    return(
        <UserContext.Provider value={{ users, isLoading}}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, ContextProvider }