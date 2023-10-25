import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

function EdieButton({ id }: any) {
    console.log(id)
    return (
        <div>
            <Link href={`http://localhost:3000/jobs/${id}`}>
                <HiPencilAlt />
            </Link>
        </div>
    )
}

export default EdieButton
