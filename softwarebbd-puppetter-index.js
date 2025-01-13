import puppeteer from "puppeteer";

// Fonksiyon, formu gönderme işlemini gerçekleştirir
const submitForm = async () => {
  try {
    // Puppeteer tarayıcıyı başlat
    const browser = await puppeteer.launch({
      headless: false, // Tarayıcıyı görsel olarak açmak için 'false', başlatmadan açmak için 'true' yapabilirsiniz.
      defaultViewport: null, // Varsayılan pencere boyutunu kullanma
    });

    // Yeni bir sayfa oluştur
    const page = await browser.newPage();

    // İlgili sayfayı aç
    await page.goto("https://www.softwarebbd.com/contact-us", {
      waitUntil: "domcontentloaded", // Sayfa tam yüklenene kadar bekle
    });

    // Sayfanın tamamen yüklenmesini sağlamak için input elementlerine odaklan
    await page.waitForSelector('input[name="fname"]'); // İlk input alanı (Ad)
    await page.waitForSelector('input[name="lname"]'); // İkinci input alanı (Soyad)
    await page.waitForSelector('input[type="email"]'); // E-posta alanı
    await page.waitForSelector("textarea"); // Mesaj alanı
    await page.waitForSelector('button[type="submit"]');

    // Formu doldur
    await page.type('input[name="fname"]', "Emirhan"); // Ad alanı
    await page.type('input[name="lname"]', "Karakoc"); // Soyad alanı
    await page.type('input[type="email"]', "jessuothebusiness@gmail.com"); // E-posta alanı
    await page.type("textarea", "xyzt emirhankarakocwashere2025"); // Mesaj alanı

    // Submit butonuna tıkla
    await page.click('button[type="submit"]');

    console.log("Form gönderildi!");

    // 1 saniye sonra tarayıcıyı kapat
    setTimeout(async () => {
      await browser.close();
    }, 3000); // 1 saniye sonra tarayıcıyı kapat
  } catch (error) {
    console.error("Bir hata oluştu:", error.message);
  }
};

// Her 1 saniyede bir farklı pencerede form gönderme
const runMultipleBrowsers = async () => {
  for (let i = 0; i < 5000; i++) {
    // Her 1 saniyede bir yeni form gönderimi
    setTimeout(async () => {
      await submitForm();
    }, i * 3000); // 1 saniye aralıklarla çalıştır
  }
};

runMultipleBrowsers();
