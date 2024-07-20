import React from 'react'
import { LI, P, UL } from '../../../../../AbstractElements'
import { BlogDetailsProp } from '../../../../../Type/Miscellaneous/Learning/Learning'

const BlogDetails:React.FC<BlogDetailsProp>= ({ text }) => {
  return (
    <div className="blog-details-main simple-list flex-row">
      <UL className="blog-social justify-content-center flex-row">
        <LI>9 April 2024</LI>
        <LI>by: Admin</LI>
        <LI>0 Hits</LI>
      </UL>
      <hr />
      <P className="blog-bottom-details">{text}</P>
    </div>
  )
}

export default BlogDetails