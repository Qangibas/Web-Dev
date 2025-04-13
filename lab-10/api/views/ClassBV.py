from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class all_companies(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class company_detail(APIView):
    def get_company(self, request, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, id):
        company = self.get_company(self, id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = self.get_company(self, id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        company = self.get_company(self, id)
        company.delete()
        return Response({'message': 'deleted was succesfull'})


class one_company_vacancies(APIView):
    def get_vacancies(self, request, id):
        try:
            company = Company.objects.get(id=id)
            return Vacancy.objects.filter(company=company.id)
        except Company.DoesNotExist:
            return Response({'message': "company doesnot exist"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        vacancies = self.get_vacancies(self, id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class all_vacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class one_vacancy(APIView):
    def get_vacancy(self, request, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, id):
        vacancy = self.get_vacancy(self, id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_vacancy(self, id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        vacancy = self.get_vacancy(self, id)
        vacancy.delete()
        return Response({'message': "Deleted vacancy was succesfully!"})


class list_of_top_vacancies(APIView):
    def get(self, request):
        serializer = VacancySerializer(Vacancy.objects.all().order_by('-salary')[10], many=True)
        return Response(serializer.data)
