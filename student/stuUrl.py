#! -*- coding: utf-8 -*-

from django.conf.urls import url

from student.views import check_admin_user, register_admin, admin_login, addCustomer

app_name = '[student]'

urlpatterns = [
    url(r"^check_admin_user", check_admin_user, name="check_admin_user"),
    url(r"^register_admin", register_admin, name="register_admin"),
    url(r"^admin_login", admin_login, name="admin_login"),
    url(r"^addCustomer", addCustomer, name="addCustomer"),
]