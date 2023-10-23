'ues client'

import { useRouter } from 'next/navigation';
import router from 'next/router';
import { HiOutlineTrash } from 'react-icons/hi'

function removeButton({ id }: any) {
    const router = useRouter();
    const removeJob = async () => {
        const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            window.document.getElementById(id)?.classList.add("hidden")
            router.refresh()
        }
    }
    return (
        <button onClick={removeJob}>
            <HiOutlineTrash />
        </button>
    )
}

export default removeButton
