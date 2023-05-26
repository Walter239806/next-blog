'use client'
import PostTitle from '@/app/components/postTitle'
import PostImage from '@/app/components/postImage'
import PostBody from '@/app/components/postBody'
import { usePostStore } from '@/store/post'
import { useEffect, useState } from 'react'

export default function PostView({ params }) {
  const { _id } = params
  const { post, readById } = usePostStore()

  useEffect(() => {
    readById(_id)
  }, [])

  return (
    <div className="flex flex-col">
      <PostTitle title={post.title} />
      <PostImage alt="PostImage" />
      <PostBody author={post.author} date={post.createdAt} body={post.body} />
    </div>
  )
}
