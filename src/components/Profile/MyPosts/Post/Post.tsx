import React from 'react';
import s from './Post.module.css';
import {LikeOutlined} from '@ant-design/icons'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.blast.hk/attachments/64805/' />
        { props.message }
          <div>
        <span><LikeOutlined /></span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;
