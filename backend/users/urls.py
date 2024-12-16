from django.urls import path
from .views import (
    LoginView,
    RegisterView,
    StudentProfileView,
    CompanyProfileView
)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('student/profile/', StudentProfileView.as_view(), name='student-profile'),
    path('company/profile/', CompanyProfileView.as_view(), name='company-profile'),
]