import { useState, useEffect } from "react"

const useFetch = (url, updateFlag) => {

    const [data, setData] = useState(null)
    // Прелоудер
    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, { signal: abortController.signal })
            .then(result => {
                if (!result.ok) {
                    throw Error('Could not fetch the data from this resource')
                }
                return result.json()

            }).then(data => {
                console.log('data',data)
                console.log('useFetch', data.body.instanceData)
                setData(data.body.instanceData)
                setLoading(false)
                setError(null)
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    console.log(err.message)
                    setError(err.message)
                    setLoading(false)
                }
            })

        return () => {
            abortController.abort()
        }
    }, [updateFlag])

    return {
        data, isLoading, error
    }
}

export default useFetch