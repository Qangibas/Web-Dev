from django.urls import path
from . import views

urlpatterns = [
    path('universities/', views.UniversityList.as_view(), name='universities'),
    path('universities/<int:id>/', views.UniversityId.as_view(), name='university'),
    path('universities/<int:id>/internships/', views.University_id_internship.as_view(), name='internship'),
    path('internships/', views.InternshipList.as_view(), name='internships'),
    path('internships/<int:id>/', views.InternshipId.as_view(), name='inter'),
    path('internships/<int:id>/top_ten/', views.internship_id_top_ten.as_view(), name='internship'),
]