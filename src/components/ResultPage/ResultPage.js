import React, { useState, useEffect } from 'react'
import resultStyles from "./ResultPage.module.css";
import Navbar from '../Navbar/Navbar';

const API_KEY = '44Fu9vktUe428rbliHgxqCHmVJyZ8ESMSu3Lxepl';

const ResultPage = () => {

    const [status, setStatus] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        const data = await response.json();
        setStatus(data);
        // console.log(data);
    };

    return (
        <div>
            <Navbar />
            <div className={resultStyles.result}>
                <img className={resultStyles.res_img} src={status.url} alt="img" />
                <div className={resultStyles.desc_box}>
                    <h1 className={resultStyles.title}>{status.title}</h1>
                    <p className={resultStyles.date}>{status.date}</p>
                    <p className={resultStyles.explanation}>{status.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultPage
