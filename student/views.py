#! -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from student.models import AdminUser


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
        return JsonResponse({"message": "success", "data": ""}, status=200)

# @csrf_exempt
def check_admin_user(request):
    if request.method == "OPTIONS":
        username = request.POST.get("userName")
        try:
            AdminUser.objects.get(username=username)
            data = False
        except Exception as e:
            data = True
        return JsonResponse({"message": "success", "data": data}, status=200)
