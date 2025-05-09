from django.urls import path
from api.views import hello_world

urlpatterns = [
    path('api/hello/', hello_world),
]
