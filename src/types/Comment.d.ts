export default interface CommentModel {
  postId: number;
  commentId: number;
  avatar: string;
  usreName: string;
  writeDate: string;
  childComments: ChildCommentModel[];
}

interface ChildCommentModel {
  postId: number;
  parentCommentId: number;
  
}