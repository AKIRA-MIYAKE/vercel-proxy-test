import Link from 'next/link'

const ItemListPage = () => {
  return (
    <div>
      <h1>Item List</h1>

      <ul>
        <li>
          <Link href="/item/0">
            <a>Item0</a>
          </Link>
        </li>
        <li>
          <Link href="/item/1">
            <a>Item1</a>
          </Link>
        </li>
        <li>
          <Link href="/item/2">
            <a>Item2</a>
          </Link>
        </li>
      </ul>

      <div>
        <Link href="/">
          <a>Back to top</a>
        </Link>
      </div>

    </div>
  )
}

export default ItemListPage
