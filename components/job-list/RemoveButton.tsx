// 'ues client'

import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi'

function RemoveButton({ id }: any) {
    const router = useRouter();
    const removeJob = async () => {
        const res = await fetch(`/api/jobs/${id}`, {
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

export default RemoveButton
