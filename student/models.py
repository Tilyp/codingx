from uuid import uuid4
from django.db import models

# Create your models here.

class Intention(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, verbose_name="主键")
    parent_mame = models.CharField(max_length=20, verbose_name="家长姓名")
    parent_phone = models.CharField(max_length=20, verbose_name="家长电话")
    occupation = models.CharField(max_length=20, verbose_name="家长职业")
    parent_qq = models.CharField(max_length=20, verbose_name="家长QQ")
    parent_wechat = models.CharField(max_length=20, verbose_name="家长微信")
    address = models.CharField(max_length=100, verbose_name="家庭住址")
    relation = models.CharField(max_length=10, verbose_name="与家长关系")
    student_name = models.CharField(max_length=20, verbose_name="学生姓名")
    student_grade = models.CharField(max_length=10, verbose_name="学生年级")
    student_age = models.CharField(max_length=10, verbose_name="学生年龄")
    student_phone = models.CharField(max_length=20, verbose_name="学生电话")
    student_qq = models.CharField(max_length=20, verbose_name="学生QQ")
    student_wechat = models.CharField(max_length=20, verbose_name="学生微信")
    hobby = models.CharField(max_length=200, verbose_name="学生爱好")
    coach = models.CharField(max_length=200, verbose_name="已报辅导班")
    intention_class = models.CharField(max_length=50, verbose_name="意向课程")
    status = models.CharField(max_length=10, default="1", verbose_name="课程标识符：1，代表预留信息；\
          2，沟通未报试听课；3，代表已报试听课；4, 试听结束未报课程；5，试听结束已报课程")
    salesperson = models.CharField(max_length=20, verbose_name="销售员")
    input_person = models.CharField(max_length=20, verbose_name="入库员")
    maintain = models.CharField(max_length=20, verbose_name="维护员")
    "竞赛意向", "曾经参加竞赛", "",


class Audition(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, verbose_name="主键")
