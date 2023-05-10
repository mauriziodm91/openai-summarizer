import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../../assets'
import { useLazyGetSummaryQuery } from '../../services/article'
import UrlBar from '../Urlbar/UrlBar.component'
import SummaryDisplay from '../SummaryDisplay/SummaryDisplay.component'
import LinkTab from '../LinkTab/LinkTab.component'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const [allArticles, setAllArticles] = useState([])

  const [copied, setCopied] = useState('')

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    )

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getSummary({ url: article.url })
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      const updatedNewArticles = [newArticle, ...allArticles]

      setArticle(newArticle)
      setAllArticles(updatedNewArticles)

      localStorage.setItem('articles', JSON.stringify(updatedNewArticles))
    }
  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(''), 3000)
  }

  const urlBarProps = { handleSubmit, linkIcon, article, setArticle }
  const summaryDisplayProps = { isFetching, error, loader, article }

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <UrlBar {...urlBarProps} />

        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((art, index) => (
            <LinkTab
              key={`link-${index}`}
              index={index}
              setArticle={setArticle}
              article={art}
              copy={copy}
              handleCopy={handleCopy}
              copied={copied}
              tick={tick}
            />
          ))}
        </div>
      </div>
      <SummaryDisplay {...summaryDisplayProps} />
    </section>
  )
}

export default Demo
