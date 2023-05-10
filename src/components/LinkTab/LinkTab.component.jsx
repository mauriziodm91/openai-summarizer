const LinkTab = ({ setArticle, article, copy, handleCopy, copied, tick }) => {
  return (
    <div onClick={() => setArticle(article)} className='link_card'>
      <div className='copy-btn' onClick={() => handleCopy(article.url)}>
        <img
          src={copied === article.url ? tick : copy}
          alt='copy_icon'
          className='w-[90%] h-[90%] object-contain'
        />
      </div>
      <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
        {article.url}
      </p>
    </div>
  )
}

export default LinkTab
