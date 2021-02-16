export default interface IPost {
  title: string,
  content: string,
  uid: string,
  createdAt: number | string,
  updatedAt: number | string,
  heartCount: number,
  published: boolean,
  slug: string,
  username: string
}
