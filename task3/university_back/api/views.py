from rest_framework import generics
from .serializers import UniversitySerializer, InternshipSerializer
from .models import University, Internship

class UniversityList(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityId(generics.ListAPIView):
    serializer_class = UniversitySerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return University.objects.filter(id=id)

class University_id_internship(generics.ListAPIView):
    serializer_class = InternshipSerializer

    def get_queryset(self):
        university_id = self.kwargs['id']
        return Internship.objects.filter(university_id=university_id)

class InternshipList(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class InternshipId(generics.ListAPIView):
    serializer_class = UniversitySerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return Internship.objects.filter(id=id)

class internship_id_top_ten(generics.ListAPIView):
    serializer_class = InternshipSerializer

    def get_queryset(self):
        return Internship.objects.order_by('-stipend')[:10]
