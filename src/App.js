import React, { useState , useEffect } from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';

const alankey = 'b8e0913949ce004cbd4ffd1d5aff088b2e956eca572e1d8b807a3e2338fdd0dc/stage'; 

const App = () =>{

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticles, setactiveArticles] = useState(-1);

    useEffect(() => {
        alanbtn({
            key: alankey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newsheadlines'){
                    setNewsArticles(articles);
                    setactiveArticles(-1);
                }else if(command === 'highlight'){
                    setactiveArticles((prevActiveArticles) => prevActiveArticles + 1);
                }else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[ parsedNumber -1 ];
                    if(parsedNumber > 20 || parsedNumber < 1){
                        alanbtn().playText('Please try that again.');
                    }else if(article){
                        window.open(article.url, '_blank');
                        alanbtn().playText('Opening.');
                    }

                }
            }
        })
    }, [])

    return(
        <div>
            <h1 className='heading'>AI NEWS APP</h1>
           <NewsCards articles = { newsArticles } activeArticles = { activeArticles } />
        </div>
    );
}

export default App;