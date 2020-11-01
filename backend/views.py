from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import *
from .models import * 

# Create your views here.
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(ViewSet):

    def list(self, request):

        answers = Answer.objects.all()
        question = self.request.query_params.get('question', None)

        if question is not None:
            answers = Answer.objects.filter(question_id=question)

        serializer = AnswerSerializer(answers, many=True, context={'request': request})
        return Response(serializer.data)

class HighscoreViewSet(viewsets.ModelViewSet):
    queryset = Highscore.objects.all()
    serializer_class = HighscoreSerializer