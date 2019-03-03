import requests




sess = requests.session()

url = "http://localhost:8000/student/check_admin_user"
data = {"username": "Tilyp"}
req = sess.post(url=url, data=data)
print(req.json())