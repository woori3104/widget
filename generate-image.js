const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML 코드 로드
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
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

  // 이미지 생성
  await page.screenshot({ path: 'widget.png', fullPage: true });

  console.log('Widget image saved as widget.png');
  await browser.close();
})();
