from django.urls import path
from . import views

urlpatterns = [
    path('api/login', views.login_view, name="login"),
    path('api/signup', views.signup, name="signup"),
    path('api/check-auth', views.check_auth, name="check_auth"),
    path('api/csrf-token', views.get_csrf_token, name="csrf_token"),
    path('api/set-appointment', views.set_appointment, name="set_appointment"),
    path('api/get-user-data', views.get_user_data, name="get_user_data"),
    path('api/add-to-chat-log', views.add_to_chat_log, name="add_to_chat_log"),
    path('api/set-diagnosis', views.set_diagnosis, name="set_diagnosis"),
    path('api/set-disability', views.set_disability, name="set_disability"),
]