from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

router = DefaultRouter()
router.register(r'', JobViewSet)

urlpatterns = [
    path('', include(router.urls)),
]