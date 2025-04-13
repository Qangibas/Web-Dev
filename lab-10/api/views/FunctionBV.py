from ..serializers import CompanySerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from ..models import Company, Vacancy


@api_view(['GET', 'POST'])
def companies(request):
    if request.method == "GET":
        Companies = Company.objects.all()
        return Response({'companies': CompanySerializer(Companies, many=True).data})
    if request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({'message': status.HTTP_404_NOT_FOUND})
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "DELETE":
        company.delete()
        return Response({"message": "Company deleted succesfully"})


@api_view(["GET"])
def one_company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
    except Company.DoesNotExist:
        raise status.HTTP_404_NOT_FOUND
    if request.method == "GET":
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def all_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def one_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response({'message': 'Vacancy is not found!'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    if request.method == "PUT":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "DELETE":
        vacancy.delete()
        return Response({"message": "Vacancy was deleted succesfully!"})


@api_view(['GET'])
def list_of_top_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[10]
    serilizer = VacancySerializer(vacancies)
    return Response(serilizer.data)
