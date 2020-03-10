# Webapp12 - API REST Documentation
--------

## About our API
Our API REST is about advertisements, users, blogs and comments in them. If you want to use it just
follow these rules, either way you will probably recieve error messages.

## API requests

## How to use our API
1. Download [Postman](https://www.getpostman.com/).
2. You only can send GET, POST, PUT and DELETE requests.

## API requests

### Resources
The resource API has GET, POST, PUT and DELETE methods.
http: // localhost: 8443 followed by the containt request URL.

**All API queries have been preceded by /api**


## Blog

#### Get one page blog
get 5 blogs

* ##### URL:

	< /blogs?page=0&number=5 >

* ##### Method:

	`GET`
	
* ##### Success Response:
  
```
  [
    {
        "id": 22,
        "title": "CALIDEZ Y CARÁCTER SE ENCUENTRAN FRENTE A FRENTE EN ESTA CASA",
        "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
        "images": []
    },
    {
        "id": 23,
        "title": "TENDENCIAS EN COCINAS QUE TE VOLVERÁN CRAZY ESTE 2020",
        "text": "VERDE NATURAL La preocupación por la sostenibilidad ha hecho que los tonos verdes más naturales se cuelen en nuestras cocinas durante este 2020. ACENTOS TURQUESA Los tonos turquesa no solo aportan luminosidad a la cocina, sino también mucha frescura. Además, resaltan un montón con otros colores de base como el blanco, y siempre se ven muy limpios. Ideales para armarios y azulejos.",
        "images": []
    },
    {
        "id": 24,
        "title": "Piscinas en tu propia casa",
        "text": "Acercate y prueba",
        "images": []
    },
    {
        "id": 25,
        "title": "¿Madrid es caro?",
        "text": "No si alquilas con estas inmobiliarias",
        "images": []
    },
    {
        "id": 26,
        "title": "Trucos para conseguir el mejor alquiler",
        "text": "Aprende ya",
        "images": []
    }
  ]
```
#### Get one  blog
get one blog

* ##### URL:

	< /blogs/id >

* ##### Method:

	`GET`
	
* ##### Success Response:
  
```
    {
        "id": 22,
        "title": "CALIDEZ Y CARÁCTER SE ENCUENTRAN FRENTE A FRENTE EN ESTA CASA",
        "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
        "images": []
    }
```

	

#### Edit  blog
Edit a blog

* ##### URL:

	< /blogs/id >

* ##### Method:

	`PUT`
  
* ##### Data Params

```
{

    "title": "Editando el blog",
    "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
    "images": []
}
```
* ##### Success Response:
  
```
  {
      "id": 22,
      "title": "Editando el blog",
      "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
      "images": []
  }
```
* #### Error Response:
```
  {
      "timestamp": "2020-03-10T08:32:03.395+0000",
      "status": 403,
      "error": "Forbidden",
      "message": "Forbidden",
      "path": "/api/blogs/22"
   }
```
#### Delete blog
Delete blog

* ##### URL:

	< /blogs/id >

* ##### Method:

	`DELETE`

* ##### Success Response:
  
```
  {
      "id": 22,
      "title": "Nuevo blog",
      "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
      "images": []
  }
```
* #### Error Response:
```
  {
    "timestamp": "2020-03-10T08:37:35.663+0000",
    "status": 403,
    "error": "Forbidden",
    "message": "Forbidden",
    "path": "/api/blogs/22"
  }
```
#### Create blog
Create blog

* ##### URL:

	< /blogs >

* ##### Method:

	`POST`

* ##### Success Response:
  
```
  {
      "id": 31,
      "title": "Nuevo blog",
      "text": "Los propietarios de esta casa unifamiliar en una población cercana a Barcelona —una pareja con hijos adolescentes— querían reformarla para adaptarla a los tiempos modernos. Solo querían un lavado de cara y que les ayudáramos a escoger mobiliario y textiles para modernizar la vivienda.",
      "images": []
  }
```
* ####Error Response:
```
  {
    "timestamp": "2020-03-10T08:37:35.663+0000",
    "status": 403,
    "error": "Forbidden",
    "message": "Forbidden",
    "path": "/api/blogs"
  }
```



	

