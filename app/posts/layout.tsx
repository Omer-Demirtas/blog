import React from "react";


const PostLayout = ({ children } : { children : React.ReactNode }) => {
    return ( 
        <div className="container mx-auto lg:px-0 mt-4">
            {children}
        </div>
    );
}
 
export default PostLayout;