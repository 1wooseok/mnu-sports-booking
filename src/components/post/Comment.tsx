import React from "react";
import styled from "styled-components";
import { useSetModal } from "../../context/modalContext";
import YesOrNo from "../modal/YesOrNo";
import CommentModel from "../../types/Comment";
import { flexCenter } from "../../style/LayoutStyle";
import { GoCommentDiscussion } from "react-icons/go";

interface CommentsProps {
  comments: CommentModel[];
}

export default function Comment({ comments }: CommentsProps) {
  if (comments.length === 0) {
    return (
      <None>
        <GoCommentDiscussion />
        <p>첫 댓글을 남겨보세요.</p>
      </None>
    );
  }

  return (
    <Wrap>
      <List>
        {comments.map((comment, idx) => (
          <CommentItem
            key={idx}
            postId={comment.postId}
            commentId={comment.commentId}
            avatar={comment.avatar}
            userName={comment.userName}
            content={comment.content}
            date={comment.date}
          />
        ))}
      </List>
    </Wrap>
  );
}

function CommentItem({
  postId,
  commentId,
  avatar,
  userName,
  content,
  date,
}: CommentModel) {
  const setModal = useSetModal();

  return (
    <ListItem>
      <Avatar />
      <div>
        <Name>{userName}</Name>
        <Content>{content}</Content>
        <Date>
          <span>{date}</span>
          <Text>답글</Text>
          <Text onClick={() => setModal(<YesOrNo />)}>삭제</Text>
        </Date>
      </div>
    </ListItem>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 12px;
`;

const List = styled.ul`
  min-height: 240px;
  overflow: hidden;
  background-color: white;
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  padding: 14px 19px 20px;
  transition: background-color 0.3s ease 0s;

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: calc(100% - 36px);
    background-color: rgb(235, 236, 237);
    bottom: 0px;
    left: 18px;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 10px;

  background-color: rgb(119, 119, 119);

  cursor: pointer;
  margin-right: 12px;
`;

const Name = styled.div`
  display: flex;
  font-weight: 500;
`;

const Content = styled.div`
  margin: 5px 0px 10px;
  line-height: 20px;
  font-size: 13.5px;
  word-break: break-all;
`;

const Date = styled.div`
  font-size: 13px;
  color: rgb(153, 153, 153);
  line-height: normal;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 13px;
  color: rgb(102, 102, 102);
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const None = styled.h2`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 220px;

  overflow: hidden;

  font-size: 15px;
  font-weight: 500;

  color: rgb(200, 200, 200);
  background-color: white;

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 13px;
  }
`;
