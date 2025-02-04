import React, {useState } from 'react'
import './style.css'
import './reset.css'
import Header from '../header/Header'

export default function Banner() {
   
    
  return (
    <>

<Header/>
            {/* <main className="main">
                <section className="intro">
                    <video autoplay muted loop id="background-video">
                        <source src="/img/212818_small.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="banner-it-wordd">
                      IT
                    </div>
                    <p className="content-1">
                        16-17 august 2024 Issyk-Kul
                    </p>
                    <div className="content-2">
                        <img src="../img/svg/FESTIVAL.svg" alt="FESTIVAL" />
                    </div>
                    <p className="content-3">
                        Присоединяйтесь к крупнейшему мероприятию в Средней Азии по стартапам и технологиям
                    </p>
                    <p className="content-4">
                        Почему ты должен участвовать:
                    </p>
                    <div className="circles">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="circle-4"></div>
                    </div>
                </section>
            </main> */}

            <div className="main-wrapper-banner">
            <video className="video-background" autoPlay muted loop>
        <source src="./src/assets/banner/video.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
              <div className="container-banner">
                <div className="title-banner">
                  <div className="uptitle-banner">
                  <div className="word-it-banner">
                    IT
                  </div>
                  <div className="place-and-date">
                  16-17 августа <br/>
2024 Иссык-Куль
                  </div>
                  </div>
                  <div className="festival">
                  FESTIVAL
                  </div>
                  <div className="subt-wrap">
                  <div className="subtitle-banner">
                  Присоединяйтесь к крупнейшему мероприятию в Средней Азии по стартапам и технологиям
                  </div>
                  </div>
                  <div className="small-subt">
                  Почему ты должен участвовать:
                  </div>
                </div>
                <div className="cercles">
                  <img src="./src/assets/banner/cercle1.svg" alt="" />
                  <img src="./src/assets/banner/cercle2.svg" alt="" />
                  <img src="./src/assets/banner/cercle3.svg" alt="" />
                  <img src="./src/assets/banner/cercle4.svg" alt="" />



                </div>
                <div className="cards-banner">
                  <div className="card">
<div className="title-card">
Секции фестиваля
</div>
Получите максимум удовольствия от участия в разных мероприятиях фестиваля!
<div className="btn-know-more" onClick={() => scrollToElement(document.getElementById('sections1'), 1000)} >
Узнать больше
<img src="./src/assets/banner/arrow 1 (1).svg" alt="" />
</div>
                  </div>
                  <div className="card">
<div className="title-card">
Принять участие</div>
Зарегестрируйтесь на наш фестиваль и получите массу удовольстия и положительных эмоций!
<a href='/register 'className="btn-know-more">
Зарегестрироваться
<img src="./src/assets/banner/arrow 1 (1).svg" alt="" />
</a>
                  </div>
                </div>
              </div>
            </div>
        
    </>
  )
}
