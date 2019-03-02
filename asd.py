import requests




sess = requests.session()

url = "http://localhost:8000/student/check_admin_user"
data = {"username": "Tilyp"}
req = sess.options(url=url, data=data)
print(req.json())