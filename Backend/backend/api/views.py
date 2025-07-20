from django.http import JsonResponse

def hello_world(request):
    print("here")
    return JsonResponse({'message': 'Hola mundo desde Django!'})