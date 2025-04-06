from django.urls import path, include

from api.views import all_companies, one_company_vacancies, all_vacancies, one_vacancy, company_detail, \
    list_of_top_vacancies, companies

urlpatterns = [
    path('companies/', companies.as_view(), name='all_companies'),
    path('companies/<int:id>/', company_detail.as_view(), name='company_detail'),
    path('companies/<int:id>/vacancies', one_company_vacancies.as_view(), name='one_company_vacancies'),
    path('vacancies/', all_vacancies.as_view(), name='all_vacancies'),
    path('vacancies/<int:id>/', one_vacancy.as_view(), name='one_vacancy'),
    path('vacancies/top_ten/', list_of_top_vacancies.as_view(), name='list_of_top_vacanies')
]
