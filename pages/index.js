import Link from 'next/link'

const IndexPage = () => {
  return (
    <div>
      <h1>Index Page</h1>

      <div>
        <Link href="/item">
          <a>Item</a>
        </Link>
      </div>

      <div>
        <a href="/">Go to domain root</a>
      </div>
    </div>
  )
}

export default IndexPage
