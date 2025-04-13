from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=150)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField()

    extra_kwargs = {
        'id': {'read_only': True}
    }

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class CompanySerializerModel(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id','name', 'description', 'salary', 'company')
