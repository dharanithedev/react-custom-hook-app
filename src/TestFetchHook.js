import React from 'react';
import useFetch from './customHooks/useFetch';

export default function TestFetchHook() {
    const BASH_URL = 'https://inshortsapi.vercel.app/news?category=science';
    const { data } = useFetch(BASH_URL);
    return (
        <div>
            {
                data.map(function (item, i) {
                    return (
                        <div class="card" key={i}>
                            <img src={item.imageUrl} alt="profile" />
                            <div class="details">
                                <h2>{item.author}</h2>
                                <p>{item.date}</p>
                            </div>
                            <p id="info">{item.content}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}
