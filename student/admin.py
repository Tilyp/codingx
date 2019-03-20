from django.contrib import admin
from student.models import Intention, Audition


class IntentionAdmin(admin.ModelAdmin):
    fields = ['id', 'parent_mame', 'parent_phone', 'parent_wechat',  'parent_qq', 'occupation',
              'relation', 'student_name', 'student_grade', 'student_age', 'student_gender', 'birthday',
                    'student_phone', 'student_wechat', 'student_qq', 'address', 'school',
                    'intention_class',  'once_competition', 'coach', 'speciality',  'hobby', 'status',
                    'competition', 'salesperson', 'maintain', 'input_person', 'record_time', 'create_time']

    list_display = ['id', "parent_mame", 'parent_phone', 'student_name',  'student_phone', 'status']
    search_fields = ['id', "parent_mame", 'student_name', 'parent_phone', 'student_phone']
    list_filter = ["status"]


class AuditionAdmin(admin.ModelAdmin):
    fields = ["id", "parent_mame", "parent_phone", "student_name", "student_phone", "course",
              "lecturer", "assistant_lecturer", "class_time", "salesperson", "status", "signUp_time"]
    list_display = ['id', "parent_mame", 'parent_phone', 'student_name', 'student_phone', 'status']
    search_fields = ['id', "parent_mame", 'student_name', 'parent_phone', 'student_phone']
    list_filter = ["status"]

    def save_model(self, request, obj, form, change):
        super(AuditionAdmin, self).save_model(request, obj, form, change)

admin.site.register(Intention, IntentionAdmin)
admin.site.register(Audition, AuditionAdmin)
