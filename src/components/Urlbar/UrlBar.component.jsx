const UrlBar = ({ handleSubmit, linkIcon, article, setArticle }) => {
  return (
    <form
      className='relative flex justify-center items-center'
      onSubmit={handleSubmit}
    >
      <img
        src={linkIcon}
        alt='link-icon'
        className='absolute left-0 my-2 ml-3 w-5'
        onClick={() => setArticle({ url: '', summary: '' })}
      />
      <input
        type='url'
        placeholder='Enter a URL'
        value={article.url}
        onChange={(e) => setArticle({ ...article, url: e.target.value })}
        required
        className='url_input peer'
      />
      <button
        type='submit'
        className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
      >
        ↵
      </button>
    </form>
  )
}

export default UrlBar
