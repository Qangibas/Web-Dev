from django.forms import model_to_dict
from rest_framework.response import Response
from .models import Company, Vacancy
from rest_framework import generics
from rest_framework.views import APIView

from .serializers import CompanySerializer, VacancySerializer


class all_companies(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class companies(APIView):
    def get(self, request):
        return Response({'companies': Company.objects.all().values()})


class company_detail(APIView):
    def get(self, request, id):
        company = Company.objects.filter(id=id).values()
        print(company)
        return Response({'company': company})

    def post(self, request):
        pass
        new_company = Company.objects.create(
            name=request.data['name'],
            description=request.data['description'],
            salary=request.data['salary'],
            company=request.data['company']
        )
        return Response({'company': model_to_dict(new_company)})


class one_company_vacancies(APIView):
    def get(self, request, id):
        company = Company.objects.filter(id=id).get()
        vacancies = Vacancy.objects.filter(company=company.id)
        return Response({company.name: vacancies.values()})


class all_vacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().values()
        return Response({'vacancies': vacancies})


class one_vacancy(APIView):
    def get(self, request, id):
        vacancy = Vacancy.objects.filter(id=id).values()
        return Response({'vacancy': vacancy})


class list_of_top_vacancies(generics.ListAPIView):
    queryset = Vacancy.objects.all().order_by('-salary')
    serializer_class = VacancySerializer
