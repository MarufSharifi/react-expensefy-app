

import React from 'react'


const Info = (props) => (
<div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
)
    

const requireAuthentication = (WarappedComponent) => {

    return (props) => (
        <div>

            <WarappedComponent />
        </div>
    );
}

const WithAdminComponent = (WrappedComponent) => {

    return (props) => (
            <div>
                {props.isAdmin && <p>don't touch it is hot </p>}
                <WrappedComponent {...props} />
            </div>
    );
};


const AdminInfo = WithAdminComponent(Info)
const AuthenInfo = requireAuthentication(Info);


function App() {

    return (
    //   <AdminInfo isAdmin={true} info="there are the details" />
        <AuthenInfo />
    );
  }
  
  export default App;