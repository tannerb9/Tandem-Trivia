import random
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from .serializers import *
from .models import * 

class QuestionViewSet(ViewSet):

    def list(self, request):
        questions = list(Question.objects.all())
        random.shuffle(questions)
        ten_random_questions = questions[0:10]

        serializer = QuestionSerializer(ten_random_questions, many=True, context={'request': request})
        return Response(serializer.data)
        

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