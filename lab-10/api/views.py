from django.forms import model_to_dict
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from rest_framework import generics, status
from rest_framework.views import APIView

from .serializers import CompanySerializer, VacancySerializer, CompanySerializerModel


class all_companies(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


@api_view(['GET', 'POST'])
def companies_func(request):
    if request.method == "GET":
        Companies = Company.objects.all()
        return Response({'companies': CompanySerializer(Companies, many=True).data})
    if request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        new_company = Company.objects.create(
            name=request.data['name'],
            description=request.data['description'],
            city=request.data['city'],
            address=request.data['address'],
        )

        return Response({'post': CompanySerializer(new_company).data})


class companies(APIView):
    def get(self, request):
        Companies = Company.objects.all()
        return Response({'companies': CompanySerializer(Companies, many=True).data})


class company_detail(APIView):
    def get(self, request, id):
        company = Company.objects.filter(id=id).values()
        print(company)
        return Response({'company': company})

    def put(self, request, id):
        try:
            company = Company.objects.filter(id=id).first()
        except Company.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializerModel(company, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        company = Company.objects.filter(id=id).first()
        company.delete()
        return Response({"message":'Company was deleted succesfully!'},status=status.HTTP_204_NO_CONTENT)

    def post(self, request):
        new_vacancy = Company.objects.create(
            name=request.data['name'],
            description=request.data['description'],
            salary=request.data['salary'],
            company=request.data['company']
        )
        return Response({'company': model_to_dict(new_vacancy)})


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
