import React from 'react';

import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={
            (props) => {
                const user = localStorage.getItem('profile');
                if(user){
                    return <Component {...props}/>
                    
                }else{
                    return <Redirect to={
                        {
                            pathname:"/signin",
                            state:{
                                from: props.location
                            }
                        }
                    } />    
                }
            }
        }/>
    )
}
export default ProtectedRoute;