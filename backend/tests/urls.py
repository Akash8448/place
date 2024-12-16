from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MockTestViewSet

router = DefaultRouter()
router.register(r'', MockTestViewSet)

urlpatterns = [
    path('', include(router.urls)),
]