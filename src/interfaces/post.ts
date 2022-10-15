export interface IPost {
  number: number
  title: string
  created_at: string
  comments: number
  body: string
  html_url: string
  user: {
    login: string
  }
}
