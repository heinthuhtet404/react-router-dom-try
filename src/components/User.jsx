import React from 'react'

const User = ({userId}) => {
    let userName = "";

    switch(userId){
        case 1:
            userName = "John Doe";
            break;
        case 2:
            userName = "Jane Smith";
            break;
        case 3:
            userName = "Alice Johnson";
            break;
        case 4:
            userName = "Bob Brown";
            break;
        default:
            userName = "Unknown User";
    }

  return (
    <>
      <h2>Posted by {userName}</h2>
    </>
  )
}

export default User