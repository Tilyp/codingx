# from django.test import TestCase

# Create your tests here.
# import uuid
# name = "codingx"
# namespace = u"codingx_admin"
# print(uuid.uuid5(uuid.NAMESPACE_DNS, namespace))
# print(uuid.uuid4())
# print(len("6b60a855-4935-5a66-8b37-07c644e2f91f"))

import requests
from selenium import webdriver
from time import sleep, time
#
# headers = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
#     "Cookie": "",
#     "Referer": "http://www.gsxt.gov.cn/index.html",
# }
#
# headerss = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
#     "Referer": "http://www.gsxt.gov.cn/index.html",
# }
#
# url = "http://www.gsxt.gov.cn/index.html"
#
# chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument('--headless')
# chrome_options.add_argument('--disable-gpu')
# # driver = webdriver.Chrome(chrome_options=chrome_options)
# driver = webdriver.Chrome()
# driver.get(url)
# sleep(10)
# cookies = driver.get_cookies()
# for cookie in cookies:
#     headers["Cookie"] += cookie["name"] + "=" + cookie["value"] + ";"
#
# driver.close()
# t = time()
# urlCap = "http://www.gsxt.gov.cn/SearchItemCaptcha?t=%s" % str(int(round(t * 1000)))
# sess = requests.session()
# req = sess.get(url=urlCap, headers=headers).json()
#
# reqs = sess.get(url=url, headers=headers)
# print(reqs.text)
#
#
# gtUrl = "http://api.geetest.com/ajax.php?gt={gt}&challenge={ch}"
# req_url = gtUrl.format(gt=req["gt"], ch=req["challenge"])
# print(req_url)
# gtRep = sess.get(req_url, headers=headerss)
#
# print(gtRep.text)


class PositiveInteger(int):
    def __new__(cls, value):
        return super(PositiveInteger, cls).__new__(cls, abs(value))

i = PositiveInteger(-3)
print i

class PositiveInteger1(int):
    def __init__(self, value):
        super(PositiveInteger1, self).__init__(self, abs(value))

i = PositiveInteger1(-3)
print i