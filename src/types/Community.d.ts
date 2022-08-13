export default interface CommunityCardModel {
  postId: number;
  avatar?: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  image: string;
  commentCount: number;
  category: string;
}