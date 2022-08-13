export default interface CommentModel {
  postId: number;
  commentId: number;
  avatar: string;
  userName: string;
  date: string;
  content: string;
  childComments?: ChildCommentModel[];
}

interface ChildCommentModel extends CommentModel {
  childCommentId: number;
}