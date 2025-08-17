import { getAllArticles } from "@/lib/news-data"
import ArticleClient from "./article-client"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return <ArticleClient slug={params.slug} />
}
