import ActionBar from '@/components/action-bar/action-bar'
import Box from '@/components/Box'
import PostForm from '@/components/form/post-form'
import React from 'react'

const NewPostPage = () => {
  return (
    <div>
        <Box>
            <ActionBar
            title='New Post Page'
            description='Add a new post by filling out the information below'
            />
            <div className='pt-8'>
                <PostForm />
            </div>
        </Box>
    </div>
  )
}

export default NewPostPage