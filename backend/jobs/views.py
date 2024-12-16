from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Job, JobApplication
from .serializers import JobSerializer, JobApplicationSerializer
from users.models import StudentProfile

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def apply(self, request, pk=None):
        job = self.get_object()
        student = StudentProfile.objects.get(user=request.user)
        
        # Check if already applied
        if JobApplication.objects.filter(job=job, student=student).exists():
            return Response(
                {'error': 'Already applied for this job'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        serializer = JobApplicationSerializer(data={
            'job': job.id,
            'student': student.id,
            'resume': request.data.get('resume'),
            'cover_letter': request.data.get('cover_letter')
        })
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def details(self, request, pk=None):
        job = self.get_object()
        serializer = JobSerializer(job, context={'request': request})
        return Response(serializer.data)