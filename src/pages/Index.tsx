import { Link } from 'react-router-dom'
import m from '@routes/pathMap'
export default function Home() {
  return (
    <>
      <div>home</div>
      <Link to={m.jotai.index}>jotai</Link>
    </>
  )
}
