import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tourist Guide`
    },[title])
}

export default useTitle;