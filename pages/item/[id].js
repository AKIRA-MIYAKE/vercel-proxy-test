import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

const ItemPage = () => {
  const router = useRouter();

  const [name, setName] = useState(undefined)

  useEffect(() => {
    if (!router.query.id) {
      return
    }

    setName(`Name ${router.query.id}`)
  }, [router.query])

  if (!name) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <h1>{name}</h1>

      <div>
        <Link href="/item">
          Back to item
        </Link>
      </div>
    </div>
  )
}

export default ItemPage
