"use client"

import React,  { useState } from 'react'
import styles from './post.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"

const PostPage = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title' className={styles.input}/>
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" width={10} height={10}/>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={10} height={10}/>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={10} height={10}/>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={10} height={10}/>
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Post something..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default PostPage