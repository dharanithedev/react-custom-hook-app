import React from 'react';
import useFetch from './customHooks/useFetch';

export default function TestFetchHook() {
    const BASH_URL = 'https://inshortsapi.vercel.app/news?category=sports';
    const { data, loading, error } = useFetch(BASH_URL);
    return (
        <div>
            <h2>Custom fetch hook - Sports</h2>
            <br/>
            Total length : {loading && 'loading...'}
            <br/>
            {data.length}
            <br/>
            {error && 'Error'}
            <div>
                <pre>{JSON.stringify(data, undefined, 2)}</pre>
            </div>
        </div>
    )
}
