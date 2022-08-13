import CommentModel from "./Comment";

export default interface PostModel {
  postId: number;
  avatar: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  images: string[];
  comments: CommentModel[];
  category: string;
  viewCount: number;
}