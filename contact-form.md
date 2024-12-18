# Describing problem
Client side contact form doesn't have a human verification. Only one checkbox is bad. You must defend your api. I wrote VERY simple java script code and killed your backend in 5 minutes. (click here)[https://www.youtube.com/watch?v=LaEseLMx4O8&t=858s&ab_channel=emirwildrift]

# Recommended Solutions
## 1- Rate limiting
You can secure your backend server with rate limiting, 1 minute 10 request is enough for contact form backend but someone still can send 10000 request (appr 17hour) and your database will be busy, your backend will be busy, late response times, if you use cloud, maybe high bills...

## 2- Client and Server side Google ReCAPTCHA
This is better way for securing your backend but not enough. Ddos attacks still can kill your backend and long response time for other projects and customers.

## 3- Rate limiting + Google ReCAPTCHA
This is best way. If client sends false request, your backend still will try to verificate your google recaptcha request. But if rate limiting and google recaptcha works together, your backend never get crashed.
