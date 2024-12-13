import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      Click <Link href="/documents/12345">here</Link> to go to documents
    </div>
  )
}

export default Home