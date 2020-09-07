import React, { Component } from "react";

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div class="contact">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="contact__author">
                  <div class="block_Line">
                    <h2>About Me</h2>
                  </div>
                  <div class="descriptiop">
                    <p>
                      Hello Everyone!
                    </p>
                    <p>
                      My Name: <strong>Ngô Hiếu Tín</strong>
                    </p>
                    <p>
                      My Height: <strong>1m76 :((</strong>
                    </p>
                    <p>
                      Date Of Birth: <strong>01/03/2000</strong>
                    </p>
                    <p>Job: Đang học tại một trường tại TP.HCM(UIT)</p>
                    <p>My Website: Đây là Pet Project mình dùng luyện tập và học thêm những kỹ năng</p>
                    <p>My Hobby: <strong>Đá Bóng</strong> (hihi)</p>
                  </div>
                  <div class="btn">
                    <a>Read More</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="contact__author">
                  <div class="block_Line">
                    <h2>Contact me</h2>
                  </div>
                  <div class="descriptiop" id="contact-me">
                    <p>
                      <span>
                        Facebook: <a href="https://www.facebook.com/tin.ngohieu/">https://www.facebook.com/tin.ngohieu/</a>
                      </span>
                    </p>
                    <p>
                      <span>
                        Instagram: <a href="https://www.instagram.com/tin.criss/">https://www.instagram.com/tin.criss/</a>
                      </span>
                    </p>
                    <p>
                      <span>
                        Gmail: tinrist@gmail.com
                      </span>
                    </p>
                    <p>
                      <span>
                        SDT: 03457978**
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="contact__author">
                  <div class="block_Line">
                    <h2>Description</h2>
                  </div>
                  <div class="descriptiop">
                    <p>
                      Một con người không có khả năng đặc biệt. Không giỏi việc gì - IQ không cao và
                      EQ cũng thấp. Có thể nói bị ngáo ngơ với cuộc sống, gió bay chiều nào người bay theo đó
                      . Cuộc sống bình bình như nốt son trong bản nhạc, chán ngắt, buồn chán, không tí biến động
                      Song vẫn muốn cố gắng có thể giúp ích được cho cuộc sống này, giúp đỡ mọi người....
                    </p>
                    <p>
                      Wondering:
                    </p>
                    <p>
                      <strong><q style={{ color: '#fa4b2a' }}>
                        Is it true that 10,000 hours makes you an expert?
                      </q></strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
