export default interface PostModel {
  postId: number;
  avatar: string;
  postDate: string;
  category: string;
  userName: string;
  title: string;
  content: string;
  viewCount: number;
  commentCount: number;
}