import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// tweets.map((tweet)) => [{tweet}, {tweet}, {tweet}]
// 
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total : {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer>footer</footer>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {

  return (
    <ul className="tweets">
      {/* Array.prototype.map  */}
      {dummyTweets.map((tweet) => {
        const isParkHacker = tweet.username === 'parkhacker'
        const isUserName = isParkHacker
        ? "tweet__username tweet__username--purple"
        : "tweet__username"

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture}></img>          
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                {/* 삼항연산자 */}
                <span className={isUserName}>{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
