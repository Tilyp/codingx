#! -*- coding: utf-8 -*-

import json
import uuid
from django.core import serializers
from django.http import JsonResponse
from student.models import AdminUser, Intention
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


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
            AdminUser.objects.get(username=username, password=password)
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
        data = request.POST.dict()
        del data["token"]
        Intention.objects.create(**data)
    return JsonResponse(data={"code": "0", "data": {"message": ""}}, status=200)

def showCustomer(requset):
    if requset.method == "GET":
        dataList = Intention.objects.all()
        # data = serializers.serialize("json", dataList)
        paginator = Paginator(dataList, 3, 2)
        page = requset.GET.get("page")
        try:
            customer = paginator.page(page)
        except PageNotAnInteger:
            customer = paginator.page(1)
        except EmptyPage:
            customer = paginator.page(paginator.num_pages)
        total_page = customer.paginator.num_pages
        data = serializers.serialize("json", customer.object_list)
        datas = json.loads(data)
        result = []
        for data in datas:
            result.append(data["fields"])
        return JsonResponse(data={"code": "0", "data": {"message": "",
                "customer": result, "totalPage": total_page}}, status=200 )