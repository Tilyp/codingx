#! -*- coding: utf-8 -*-

import uuid
import json
from django.http import JsonResponse
from student.models import AdminUser, Intention


# @csrf_exempt
def register_admin(request):
    if request.method == "POST":
        username = request.POST.get("userName")
        password = request.POST.get("password")
        email = request.POST.get("email")
        AdminUser.objects.create(
            username=username,
            password=password,
            email=email,
            status="2"
        )
        return JsonResponse(data={"code": "0", "data": {"flag": True, "message": "success"}}, status=200)

# @csrf_exempt
def check_admin_user(request):
    if request.method == "POST":
        username = request.POST.get("username")
        try:
            AdminUser.objects.get(username=username)
            message = "用户名已经存在，请重新输入！！！"
            data = False
        except Exception as e:
            message = ""
            data = True
        return JsonResponse(data={"code": "0", "data": {"flag": data,
          "username": username, "message": message}}, status=200)


def admin_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        token = str(uuid.uuid4())
        try:
            querydata = AdminUser.objects.get(username=username, password=password)
            request.session['token'] = token
            code = "0"
            message = "登陆成功！"
        except:
            code = "1"
            message = "用户名或密码错误 ！！！"
        return JsonResponse(data={"code": code, "data": {"name": username,
            "message": message, "token": token}}, status=200)

def addCustomer(request):
    if request.method == "POST":
        data = json.loads(request.POST)
        Intention.objects.create(**data)
    return JsonResponse(data={"code": "0", "data": {"message": ""}}, status=200)