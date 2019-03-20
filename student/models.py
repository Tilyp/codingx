#! -*- coding: utf-8 -*-

from uuid import uuid4
from django.db import models
import django.utils.timezone as timezone


# Create your models here.


class AdminUser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, verbose_name=u"主键")
    username = models.CharField(max_length=50, verbose_name=u"用户名")
    password = models.CharField(max_length=50, verbose_name=u"密码")
    email = models.CharField(max_length=50, verbose_name=u"邮箱")
    status = models.CharField(max_length=10, default="1", verbose_name=u"状态")


class Intention(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, verbose_name=u"主键")
    parent_mame = models.CharField(max_length=20, verbose_name=u"家长姓名")
    relation = models.CharField(max_length=10, verbose_name=u"与家长关系")
    parent_phone = models.CharField(null=True, max_length=20, verbose_name=u"家长电话")
    occupation = models.CharField(null=True, max_length=20, verbose_name=u"家长职业")
    parent_qq = models.CharField(null=True, max_length=20, verbose_name=u"家长QQ")
    parent_wechat = models.CharField(null=True, max_length=20, verbose_name=u"家长微信")
    address = models.CharField(null=True, max_length=100, verbose_name=u"家庭住址")
    school = models.CharField(null=True, max_length=100, verbose_name=u"所在学校")
    student_name = models.CharField(max_length=20, verbose_name=u"学生姓名")
    student_grade = models.CharField(null=True, max_length=10, verbose_name=u"学生班级")
    student_age = models.CharField(max_length=10, verbose_name=u"学生年龄")
    student_gender = models.CharField(max_length=10, verbose_name=u"学生性别")
    birthday = models.CharField(null=True, max_length=10, verbose_name=u"学生生日")
    student_phone = models.CharField(max_length=20, verbose_name=u"学生电话")
    student_qq = models.CharField(null=True, max_length=20, verbose_name=u"学生QQ")
    student_wechat = models.CharField(null=True, max_length=20, verbose_name=u"学生微信")
    competition = models.CharField(null=True, max_length=200, verbose_name=u"竞赛意向")
    once_competition = models.CharField(null=True, max_length=200, verbose_name=u"曾经参加竞赛")
    hobby = models.CharField(null=True, max_length=200, verbose_name=u"学生爱好")
    speciality = models.CharField(null=True, max_length=200, verbose_name=u"学生特长")
    coach = models.CharField(null=True, max_length=200, verbose_name=u"已报辅导班")
    intention_class = models.CharField(null=True, max_length=50, verbose_name=u"意向课程")
    record_time = models.DateTimeField(null=True, default=timezone.now, verbose_name=u'记录日期')
    create_time = models.DateTimeField(null=True, default=timezone.now, verbose_name=u'建档日期')
    status = models.CharField(max_length=10, default="1", verbose_name=u"客户状态：1，代表预留信息；\
          2，沟通未报试听课；3，代表已报试听课；4, 试听结束未报课程；5，试听结束已报课程")
    salesperson = models.CharField(max_length=20, default="微信", verbose_name=u"销售员")
    input_person = models.CharField(null=True, max_length=20, verbose_name=u"入库员")
    maintain = models.CharField(null=True, max_length=20, verbose_name=u"维护员")

    class Meta:
        ordering = ['id']
        db_table = "intention"
        verbose_name = u"客户表"


class Audition(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, verbose_name=u"主键")
    parent_mame = models.CharField(null=True, max_length=20, verbose_name=u"家长姓名")
    parent_phone = models.CharField(null=True, max_length=20, verbose_name=u"家长电话")
    student_name = models.CharField(null=True, max_length=20, verbose_name=u"学生姓名")
    student_phone = models.CharField(null=True, max_length=20, verbose_name=u"学生电话")
    course = models.CharField(max_length=50, verbose_name=u"课程")
    lecturer = models.CharField(null=True, max_length=20, verbose_name=u"讲师")
    assistant_lecturer = models.CharField(null=True, max_length=20, verbose_name=u"辅助讲师")
    class_time = models.DateTimeField(null=True, default=timezone.now, verbose_name=u'开课时间')
    salesperson = models.CharField(null=True, max_length=20, default="微信", verbose_name=u"销售员")
    status = models.CharField(null=True, max_length=10, default="3", verbose_name=u"客户状态：1，代表预留信息；\
              2，沟通未报试听课；3，代表已报试听课；4, 试听结束未报课程；5，试听结束已报课程")
    signUp_time = models.DateTimeField(null=True, default=timezone.now, verbose_name=u'报名时间')

    class Meta:
        ordering = ['id']
        db_table = "audition"
        verbose_name = u"试听课"

class Class(models.Model):
    pass