import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"

const getCurrentPath = () => {
    const pathname = window.location.pathname

    return pathname.startsWith(BASE_URL)
        ? pathname.slice(BASE_URL.length - 1) || '/'
        : pathname
}

export const UseRoute = () => {
    const [path, setPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => {
            setPath(getCurrentPath())
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return path
}

const Router = (props) => {
    const { routes } = props
    const path = UseRoute()

    if (path.startsWith('/tasks/')) {
        const id = path.replace('/tasks/', '')
        const TaskPage = routes['/tasks/:id']

        return <TaskPage params={{id}}/>
    }

    const Page = routes[path] ?? routes['*']

    return <Page/>
}

export default Router