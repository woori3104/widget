const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 브라우저 뷰포트 크기 설정
  await page.setViewport({
    width: 300,
    height: 400,
    deviceScaleFactor: 2,
  });

  // HTML 코드 로드
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .widget {
                width: 200px;
                background: #fff5f7;
                border: 1px solid #f9cdd3;
                border-radius: 10px;
                text-align: center;
                font-family: Arial, sans-serif;
                padding: 10px;
            }
            .widget h3 { font-size: 18px; color: #e67a89; margin: 5px 0; }
            .widget p { font-size: 14px; color: #555; margin: 5px 0; }
        </style>
    </head>
    <body>
        <div class="widget">
            <h3>Tokyo</h3>
            <p>Temperature: 25°C</p>
            <p>Condition: Sunny</p>
        </div>
    </body>
    </html>
    `;

  await page.setContent(htmlContent);

  // 특정 요소만 캡처
  const element = await page.$('.widget');
  await element.screenshot({ path: 'widget.png' });

  console.log('Widget image saved as widget.png');
  await browser.close();
})();
