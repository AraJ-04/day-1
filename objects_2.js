function findnews(news, id) {
    for(let i = 0; i < news.length; i++) {
        if(news[i].id === id){
            return news[i].news;
        }
    }
    return "News not found";
    
}

function limit(news,id){
    for(let i=0;i<id;i++)
    {
        console.log(news[i].news);
    }
}
function lastlimit(news,id){
    for(let i=news.length-id;i=news.length;i++)
    {
        console.log(news[i].news);
    }
}

function search_keyword(news,keyword){
    let k=0;
    const news1 = [];
    for(let i=0;i<news.length;i++)
    {
        if(news[i].news.toLowerCase().includes(keyword.toLowerCase())){
           news1.push(news[i]);
            k=1;
        }
    }
        return news1;

    if(k==0)
    console.log("No news found with the keyword: " + keyword);
}
const news = [
    {
        id: 1,
        news: "Scientists discover a new planet similar to Earth",
    },
    {
        id: 2,
        news: "India is preparing for the upcoming World Cup finals",
    },
    {
        id: 3,
        news: "Heavy rainfall causes traffic jams in major cities",
    },
    {
        id: 4,
        news: "Tech companies announce new AI-powered smartphones",
    },
    {
        id: 5,
        news: "Students demand longer holidays after exams",
    },
    {
        id: 6,
        news: "Local startup raises millions in funding",
    },
    {
        id: 7,
        news: "Cricket fans celebrate historic team victory",
    },
    {
        id: 8,
        news: "New electric bikes launched with better battery life",
    },
    {
        id: 9,
        news: "Researchers develop faster charging technology",
    },
    {
        id: 10,
        news: "Movie breaks box office records within two days",
    }
];

// console.log(findnews(news,1));
// limit(news,3);
// lastlimit(news,3);
search_keyword(news,"is");
